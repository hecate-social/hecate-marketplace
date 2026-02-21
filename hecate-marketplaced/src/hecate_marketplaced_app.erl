%%% @doc Hecate Marketplace daemon application.
%%%
%%% On startup:
%%% 1. Ensures the namespace directory layout exists
%%% 2. Starts ReckonDB infrastructure and marketplace_store
%%% 3. Starts Cowboy on a Unix domain socket
%%% 4. Registers with hecate-daemon (when available)
%%% @end
-module(hecate_marketplaced_app).
-behaviour(application).

-include_lib("reckon_db/include/reckon_db.hrl").

-export([start/2, stop/1]).

%% reckon_db is excluded from dialyzer PLT (no debug_info in hex dep beams).
-dialyzer({nowarn_function, start_marketplace_store/0}).

start(_StartType, _StartArgs) ->
    ok = marketplaced_paths:ensure_layout(),
    ok = ensure_pg_scope(),
    ok = start_marketplace_store(),
    ok = start_cowboy(),
    logger:info("[hecate_marketplaced] Started, socket at ~s",
                [marketplaced_paths:socket_path("api.sock")]),
    hecate_marketplaced_sup:start_link().

stop(_State) ->
    ok = cowboy:stop_listener(marketplaced_http),
    cleanup_socket(),
    ok.

%%% Internal

ensure_pg_scope() ->
    case pg:start_link(hecate_marketplaced) of
        {ok, _Pid} -> ok;
        {error, {already_started, _Pid}} -> ok
    end.

start_marketplace_store() ->
    DataDir = marketplaced_paths:reckon_path("marketplace"),
    ok = filelib:ensure_path(DataDir),
    Config = #store_config{
        store_id = marketplace_store,
        data_dir = DataDir,
        mode = single,
        writer_pool_size = 5,
        reader_pool_size = 5,
        gateway_pool_size = 2,
        options = #{}
    },
    case reckon_db_sup:start_store(Config) of
        {ok, _Pid} ->
            logger:info("[hecate_marketplaced] marketplace_store ready"),
            ok;
        {error, {already_started, _Pid}} ->
            logger:info("[hecate_marketplaced] marketplace_store already running"),
            ok;
        {error, Reason} ->
            logger:error("[hecate_marketplaced] Failed to start marketplace_store: ~p",
                        [Reason]),
            error({marketplace_store_start_failed, Reason})
    end.

start_cowboy() ->
    SocketPath = marketplaced_paths:socket_path("api.sock"),
    cleanup_socket_file(SocketPath),
    StaticDir = static_dir(),
    CoreRoutes = [
        {"/health", marketplaced_health_api, []},
        {"/manifest", marketplaced_manifest_api, []},
        {"/ui/[...]", cowboy_static, {dir, StaticDir, [{mimetypes, cow_mimetypes, all}]}}
    ],
    ApiRoutes = marketplaced_api_routes:discover_routes(),
    Dispatch = cowboy_router:compile([{'_', CoreRoutes ++ ApiRoutes}]),
    TransOpts = #{
        socket_opts => [{ifaddr, {local, SocketPath}}],
        num_acceptors => 5
    },
    ProtoOpts = #{
        env => #{dispatch => Dispatch}
    },
    {ok, _} = cowboy:start_clear(marketplaced_http, TransOpts, ProtoOpts),
    ok.

static_dir() ->
    PrivDir = code:priv_dir(hecate_marketplaced),
    filename:join(PrivDir, "static").

cleanup_socket() ->
    SocketPath = marketplaced_paths:socket_path("api.sock"),
    cleanup_socket_file(SocketPath).

cleanup_socket_file(Path) ->
    case file:delete(Path) of
        ok -> ok;
        {error, enoent} -> ok;
        {error, Reason} ->
            logger:warning("[hecate_marketplaced] Failed to remove socket ~s: ~p",
                          [Path, Reason]),
            ok
    end.
