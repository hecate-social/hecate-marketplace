# Hecate Marketplace — Unified build (frontend + daemon)
# Build context: hecate-marketplace/ (repo root)

# Stage 1: Build marketplacew as ES module
FROM docker.io/library/node:22-alpine AS frontend

WORKDIR /frontend
COPY hecate-marketplacew/package.json hecate-marketplacew/package-lock.json* ./
RUN npm ci
COPY hecate-marketplacew/ .
RUN npx svelte-kit sync 2>/dev/null || true
RUN npm run build:lib

# Stage 2: Build marketplaced Erlang release
FROM docker.io/library/erlang:27-alpine AS backend

WORKDIR /build

RUN apk add --no-cache \
    git curl bash \
    build-base cmake

RUN curl -fsSL https://s3.amazonaws.com/rebar3/rebar3 -o /usr/local/bin/rebar3 && \
    chmod +x /usr/local/bin/rebar3

# Copy rebar config and dependency lock first (layer caching)
COPY hecate-marketplaced/rebar.config hecate-marketplaced/rebar.lock* ./
COPY hecate-marketplaced/config/ config/

# Copy source files
COPY hecate-marketplaced/src/ src/
COPY hecate-marketplaced/apps/ apps/

# Fetch dependencies and compile
RUN rebar3 get-deps && rebar3 compile

# Bundle frontend assets into priv/static/
COPY --from=frontend /frontend/dist priv/static/

# Build release (priv/static/ included automatically)
RUN rebar3 as prod release

# Stage 3: Runtime
FROM docker.io/library/alpine:3.22

RUN apk add --no-cache \
    ncurses-libs \
    libstdc++ \
    libgcc \
    openssl \
    ca-certificates

WORKDIR /app

COPY --from=backend /build/_build/prod/rel/hecate_marketplaced ./

ENTRYPOINT ["/app/bin/hecate_marketplaced"]
CMD ["foreground"]
