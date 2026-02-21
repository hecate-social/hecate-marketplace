
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const LSCOLORS: string;
	export const COREPACK_ENABLE_AUTO_PIN: string;
	export const HEX_API_KEY: string;
	export const MISTRAL_USER_ID: string;
	export const npm_config_userconfig: string;
	export const COLORTERM: string;
	export const LOGATRON_PAT: string;
	export const HYPRLAND_CMD: string;
	export const XDG_CONFIG_DIRS: string;
	export const NORDVPN_TOKEN: string;
	export const QUAYIO_PWD: string;
	export const npm_config_cache: string;
	export const PKG_USR: string;
	export const XDG_SESSION_PATH: string;
	export const HF_RECKON_DEV_TOKEN: string;
	export const DOCKER_BEAMCAMPUS_TOKEN: string;
	export const XDG_MENU_PREFIX: string;
	export const GITHUB_USER: string;
	export const GITHUB_MACULA_REALM_REGISTRY_PAT: string;
	export const NORDVPN_USER: string;
	export const XDG_BACKEND: string;
	export const CLUTTER_BACKEND: string;
	export const MACULA_REALM_GITHUB_CLIENT_ID_PROD: string;
	export const MACULA_IO_SSH_PWD: string;
	export const QT_WAYLAND_DISABLE_WINDOWDECORATION: string;
	export const PTV_DEV_API_KEY: string;
	export const NODE: string;
	export const DOCKER_HUB_PASSWORD: string;
	export const AZ_PAT_TOKEN: string;
	export const ANTHROPIC_API_KEY: string;
	export const XDG_DATA_HOME: string;
	export const MACULA_STRIPE_SANDBOX_PRIVATE_KEY: string;
	export const GEMINI_API_KEY: string;
	export const MEGA_PWD: string;
	export const XDG_CONFIG_HOME: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const COLOR: string;
	export const npm_config_local_prefix: string;
	export const LIVEBOOK_TEAMS_KEY: string;
	export const DESKTOP_SESSION: string;
	export const STRIPE_PWD: string;
	export const PREZIO_API_KEY_DEMO: string;
	export const ARGOCD_ADMIN_PWD: string;
	export const __ETC_PROFILE_NIX_SOURCED: string;
	export const ELECTRON_OZONE_PLATFORM_HINT: string;
	export const HL_INITIAL_WORKSPACE_TOKEN: string;
	export const KITTY_PID: string;
	export const QUAYIO_USER: string;
	export const npm_config_globalconfig: string;
	export const XCURSOR_SIZE: string;
	export const EDITOR: string;
	export const FZF_ALT_C_OPTS: string;
	export const MACULA_REALM_GITHUB_CLIENT_SECRET_PROD: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const NIX_PROFILES: string;
	export const LOGNAME: string;
	export const MACULA_MAILGUN_BASE_URL: string;
	export const XDG_SESSION_DESKTOP: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const RECKON_STRIPE_SANDBOX_ACCOUNT_ID: string;
	export const APPIMAGELAUNCHER_DISABLE: string;
	export const XDG_SESSION_TYPE: string;
	export const DOCKERHUB_PWD: string;
	export const RECKON_PORTAL_GITHUB_CLIENT_ID_PROD: string;
	export const ARGOCD_ADMIN_USER: string;
	export const GOOGLE_APPLICATION_CREDENTIALS: string;
	export const npm_config_init_module: string;
	export const MACULA_GITOPS_GITHUB_APP_INSTALLATION_URL: string;
	export const SYSTEMD_EXEC_PID: string;
	export const DOCKER_HUB_USERNAME: string;
	export const _: string;
	export const STRIPE_LIVE_SECRET: string;
	export const KITTY_PUBLIC_KEY: string;
	export const NoDefaultCurrentDirectoryInExePath: string;
	export const FZF_DEFAULT_COMMAND: string;
	export const CR_PAT: string;
	export const OPENWEATHERMAP_API_KEY: string;
	export const CLAUDECODE: string;
	export const STRIPE_TEST_SECRET: string;
	export const MOTD_SHOWN: string;
	export const MACULA_MAIL_RAF_PWD: string;
	export const HEX_MACULA_CICD_API_KEY: string;
	export const HOME: string;
	export const LANG: string;
	export const GITHUB_TOKEN: string;
	export const _JAVA_AWT_WM_NONREPARENTING: string;
	export const FZF_CTRL_R_OPTS: string;
	export const RECKON_PORTAL_GITHUB_CLIENT_SECRET_PROD: string;
	export const LS_COLORS: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const LOGATRON_CID_USER: string;
	export const SWAI_OPEN_AI_KEY: string;
	export const npm_package_version: string;
	export const LOGATRON_CID_PWD_64: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const STARSHIP_SHELL: string;
	export const MACULA_CONTACT_EMAIL: string;
	export const WAYLAND_DISPLAY: string;
	export const GH_PRIV_REPO_CI_PAT: string;
	export const NIX_SSL_CERT_FILE: string;
	export const GITHUB_PWD: string;
	export const ALPHA_VANTAGE_API_KEY: string;
	export const BEAM_USER: string;
	export const KITTY_WINDOW_ID: string;
	export const ASDF_INSTALL_PATH: string;
	export const CLAUDE_SETUP_TOKEN: string;
	export const ERL_DIST_PORT: string;
	export const XDG_SEAT_PATH: string;
	export const BEAM_XX_SSH_USER: string;
	export const LOGATRON_CID_PWD: string;
	export const INVOCATION_ID: string;
	export const DOCKER_BUILDKIT: string;
	export const MANAGERPID: string;
	export const MACULA_MAILGUN_API_KEY: string;
	export const MACULA_GITOPS_GITHUB_APP_ID: string;
	export const INIT_CWD: string;
	export const MACULA_STRIPE_SANDBOX_PUBLIC_KEY: string;
	export const NORDVPN_PWD: string;
	export const QUAYIO_PWD_ENC: string;
	export const STARSHIP_SESSION_KEY: string;
	export const UWSM_WAIT_VARNAMES: string;
	export const QT_QPA_PLATFORM: string;
	export const XDG_CACHE_HOME: string;
	export const MAKULA_NUGET_ORG_KEY: string;
	export const RECKON_STRIPE_SANDBOX_PRIVATE_KEY: string;
	export const npm_lifecycle_script: string;
	export const COMPOSE_DOCKER_CLI_BUILD: string;
	export const HEX_PERSONAL_API_KEY: string;
	export const npm_config_npm_version: string;
	export const GITHUB_PAT_SWARM_WARS_SCAPE: string;
	export const LOGATRON_CID_EMAIL: string;
	export const XDG_SESSION_CLASS: string;
	export const TERM: string;
	export const TERMINFO: string;
	export const LIVEBOOK_PASSWORD: string;
	export const npm_package_name: string;
	export const ZSH: string;
	export const FZF_CTRL_T_COMMAND: string;
	export const npm_config_prefix: string;
	export const MISTRAL_BEAM_CAMPUS_ORG_ID: string;
	export const LIBVIRT_DEFAULT_URI: string;
	export const USER: string;
	export const NORDVPN_PASSWORD: string;
	export const OCIREG_PWD: string;
	export const SDL_VIDEODRIVER: string;
	export const TAB9_PWD: string;
	export const DOCKER_HUB_MACULA_CICD_TOKEN: string;
	export const FZF_ALT_C_COMMAND: string;
	export const MACULA_BUILD_GIT_TOKEN: string;
	export const SWAI_COOKIE: string;
	export const MOZILLA_RECOVERY_KEY: string;
	export const OZONE_PLATFORM: string;
	export const MACULA_STRIPE_SANDBOX_ACCOUNT_ID: string;
	export const NETLYNX_PRIVATE_KEY: string;
	export const MACULA_REALM_GITHUB_CLIENT_SECRET_DEV: string;
	export const EX_ESDB_GOSSIP_MULTICAST_ADDR: string;
	export const FZF_CTRL_T_OPTS: string;
	export const DOCKERHUB_EMAIL: string;
	export const HYPRLAND_INSTANCE_SIGNATURE: string;
	export const NOTIFY_SOCKET: string;
	export const RECKON_DB_SERVER_PWD: string;
	export const DISPLAY: string;
	export const RECKON_STRIPE_SANDBOX_PUBLIC_KEY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const MOZ_ENABLE_WAYLAND: string;
	export const EX_ESDB_COOKIE: string;
	export const OCIREG_USER: string;
	export const GIT_EDITOR: string;
	export const PAGER: string;
	export const BEAM_XX_SSH_PWD: string;
	export const HEX_USER_EMAIL: string;
	export const DOCKER_HUB_CICD_TOKEN: string;
	export const XDG_VTNR: string;
	export const OCIREG_EMAIL: string;
	export const GROQ_API_KEY: string;
	export const XDG_SESSION_ID: string;
	export const PKG_PWD: string;
	export const HEX_USER: string;
	export const MANAGERPIDFDID: string;
	export const npm_config_user_agent: string;
	export const OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: string;
	export const MACULA_GITOPS_GITHUB_APP_WEBHOOK_SECRET: string;
	export const XDG_STATE_HOME: string;
	export const npm_execpath: string;
	export const MACULA_GITOPS_GITHUB_APP_PRIVATE_KEY_PATH: string;
	export const MEGA_USER: string;
	export const MACULA_MAIL_CONTACT_PWD: string;
	export const XDG_RUNTIME_DIR: string;
	export const MACULA_MAIL_HOST: string;
	export const MACULA_MAILGUN_DOMAIN: string;
	export const DOCKER_HUB_MACULA_PASSWORD: string;
	export const STRIPE_USER: string;
	export const CLAUDE_CODE_ENTRYPOINT: string;
	export const DEBUGINFOD_URLS: string;
	export const npm_package_json: string;
	export const DOCKER_HUB_MACULA_USERNAME: string;
	export const TAB9_USER: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const LOGATRON_EDGE_API_KEY: string;
	export const JOURNAL_STREAM: string;
	export const OPENSEA_API_KEY: string;
	export const MACULA_GITOPS_GITHUB_APP_CLIENT_SECRET: string;
	export const AERO_DATA_BOX_API_KEY: string;
	export const XDG_DATA_DIRS: string;
	export const GDK_BACKEND: string;
	export const TAB9_TOKEN: string;
	export const MACULA_GITOPS_GITHUB_APP_PUBLIC_LINK: string;
	export const REG_GH_CLIQUE: string;
	export const npm_config_noproxy: string;
	export const PATH: string;
	export const GDK_SCALE: string;
	export const npm_config_node_gyp: string;
	export const MACULA_REALM_GITHUB_CLIENT_ID_DEV: string;
	export const SWAI_MAILGUN_API_KEY: string;
	export const ASDF_INSTALL_TYPE: string;
	export const AZDO_CID_USER: string;
	export const HEX_USER_REMOTE_PASSWORD: string;
	export const GITLAB_TOKEN: string;
	export const LIVEBOOK_USER: string;
	export const EX_ESDB_CLUSTER_SECRET: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const ASDF_INSTALL_VERSION: string;
	export const FZF_DEFAULT_OPTS: string;
	export const SWARM_TOKEN: string;
	export const npm_config_global_prefix: string;
	export const DOCKERHUB_USER: string;
	export const MACULA_GITOPS_GITHUB_APP_CLIENT_ID: string;
	export const DOCKER_BEAMCAMPUS_USER: string;
	export const MAIL: string;
	export const UWSM_FINALIZE_VARNAMES: string;
	export const CODEBERG_GITHUB_ACCESS_TOKEN: string;
	export const GH_TYC_SECRET_KEY_BASE: string;
	export const GITLAB_USER: string;
	export const HEX_USER_LOCAL_PASSWORD: string;
	export const KITTY_INSTALLATION_DIR: string;
	export const npm_node_execpath: string;
	export const MACULA_IO_SSH_USER: string;
	export const OLDPWD: string;
	export const GITOPS_BEAM_TOKEN: string;
	export const MACULA_MAILGUN_SANDBOX_DOMAIN: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		LSCOLORS: string;
		COREPACK_ENABLE_AUTO_PIN: string;
		HEX_API_KEY: string;
		MISTRAL_USER_ID: string;
		npm_config_userconfig: string;
		COLORTERM: string;
		LOGATRON_PAT: string;
		HYPRLAND_CMD: string;
		XDG_CONFIG_DIRS: string;
		NORDVPN_TOKEN: string;
		QUAYIO_PWD: string;
		npm_config_cache: string;
		PKG_USR: string;
		XDG_SESSION_PATH: string;
		HF_RECKON_DEV_TOKEN: string;
		DOCKER_BEAMCAMPUS_TOKEN: string;
		XDG_MENU_PREFIX: string;
		GITHUB_USER: string;
		GITHUB_MACULA_REALM_REGISTRY_PAT: string;
		NORDVPN_USER: string;
		XDG_BACKEND: string;
		CLUTTER_BACKEND: string;
		MACULA_REALM_GITHUB_CLIENT_ID_PROD: string;
		MACULA_IO_SSH_PWD: string;
		QT_WAYLAND_DISABLE_WINDOWDECORATION: string;
		PTV_DEV_API_KEY: string;
		NODE: string;
		DOCKER_HUB_PASSWORD: string;
		AZ_PAT_TOKEN: string;
		ANTHROPIC_API_KEY: string;
		XDG_DATA_HOME: string;
		MACULA_STRIPE_SANDBOX_PRIVATE_KEY: string;
		GEMINI_API_KEY: string;
		MEGA_PWD: string;
		XDG_CONFIG_HOME: string;
		MEMORY_PRESSURE_WRITE: string;
		COLOR: string;
		npm_config_local_prefix: string;
		LIVEBOOK_TEAMS_KEY: string;
		DESKTOP_SESSION: string;
		STRIPE_PWD: string;
		PREZIO_API_KEY_DEMO: string;
		ARGOCD_ADMIN_PWD: string;
		__ETC_PROFILE_NIX_SOURCED: string;
		ELECTRON_OZONE_PLATFORM_HINT: string;
		HL_INITIAL_WORKSPACE_TOKEN: string;
		KITTY_PID: string;
		QUAYIO_USER: string;
		npm_config_globalconfig: string;
		XCURSOR_SIZE: string;
		EDITOR: string;
		FZF_ALT_C_OPTS: string;
		MACULA_REALM_GITHUB_CLIENT_SECRET_PROD: string;
		XDG_SEAT: string;
		PWD: string;
		NIX_PROFILES: string;
		LOGNAME: string;
		MACULA_MAILGUN_BASE_URL: string;
		XDG_SESSION_DESKTOP: string;
		QT_QPA_PLATFORMTHEME: string;
		RECKON_STRIPE_SANDBOX_ACCOUNT_ID: string;
		APPIMAGELAUNCHER_DISABLE: string;
		XDG_SESSION_TYPE: string;
		DOCKERHUB_PWD: string;
		RECKON_PORTAL_GITHUB_CLIENT_ID_PROD: string;
		ARGOCD_ADMIN_USER: string;
		GOOGLE_APPLICATION_CREDENTIALS: string;
		npm_config_init_module: string;
		MACULA_GITOPS_GITHUB_APP_INSTALLATION_URL: string;
		SYSTEMD_EXEC_PID: string;
		DOCKER_HUB_USERNAME: string;
		_: string;
		STRIPE_LIVE_SECRET: string;
		KITTY_PUBLIC_KEY: string;
		NoDefaultCurrentDirectoryInExePath: string;
		FZF_DEFAULT_COMMAND: string;
		CR_PAT: string;
		OPENWEATHERMAP_API_KEY: string;
		CLAUDECODE: string;
		STRIPE_TEST_SECRET: string;
		MOTD_SHOWN: string;
		MACULA_MAIL_RAF_PWD: string;
		HEX_MACULA_CICD_API_KEY: string;
		HOME: string;
		LANG: string;
		GITHUB_TOKEN: string;
		_JAVA_AWT_WM_NONREPARENTING: string;
		FZF_CTRL_R_OPTS: string;
		RECKON_PORTAL_GITHUB_CLIENT_SECRET_PROD: string;
		LS_COLORS: string;
		XDG_CURRENT_DESKTOP: string;
		LOGATRON_CID_USER: string;
		SWAI_OPEN_AI_KEY: string;
		npm_package_version: string;
		LOGATRON_CID_PWD_64: string;
		MEMORY_PRESSURE_WATCH: string;
		STARSHIP_SHELL: string;
		MACULA_CONTACT_EMAIL: string;
		WAYLAND_DISPLAY: string;
		GH_PRIV_REPO_CI_PAT: string;
		NIX_SSL_CERT_FILE: string;
		GITHUB_PWD: string;
		ALPHA_VANTAGE_API_KEY: string;
		BEAM_USER: string;
		KITTY_WINDOW_ID: string;
		ASDF_INSTALL_PATH: string;
		CLAUDE_SETUP_TOKEN: string;
		ERL_DIST_PORT: string;
		XDG_SEAT_PATH: string;
		BEAM_XX_SSH_USER: string;
		LOGATRON_CID_PWD: string;
		INVOCATION_ID: string;
		DOCKER_BUILDKIT: string;
		MANAGERPID: string;
		MACULA_MAILGUN_API_KEY: string;
		MACULA_GITOPS_GITHUB_APP_ID: string;
		INIT_CWD: string;
		MACULA_STRIPE_SANDBOX_PUBLIC_KEY: string;
		NORDVPN_PWD: string;
		QUAYIO_PWD_ENC: string;
		STARSHIP_SESSION_KEY: string;
		UWSM_WAIT_VARNAMES: string;
		QT_QPA_PLATFORM: string;
		XDG_CACHE_HOME: string;
		MAKULA_NUGET_ORG_KEY: string;
		RECKON_STRIPE_SANDBOX_PRIVATE_KEY: string;
		npm_lifecycle_script: string;
		COMPOSE_DOCKER_CLI_BUILD: string;
		HEX_PERSONAL_API_KEY: string;
		npm_config_npm_version: string;
		GITHUB_PAT_SWARM_WARS_SCAPE: string;
		LOGATRON_CID_EMAIL: string;
		XDG_SESSION_CLASS: string;
		TERM: string;
		TERMINFO: string;
		LIVEBOOK_PASSWORD: string;
		npm_package_name: string;
		ZSH: string;
		FZF_CTRL_T_COMMAND: string;
		npm_config_prefix: string;
		MISTRAL_BEAM_CAMPUS_ORG_ID: string;
		LIBVIRT_DEFAULT_URI: string;
		USER: string;
		NORDVPN_PASSWORD: string;
		OCIREG_PWD: string;
		SDL_VIDEODRIVER: string;
		TAB9_PWD: string;
		DOCKER_HUB_MACULA_CICD_TOKEN: string;
		FZF_ALT_C_COMMAND: string;
		MACULA_BUILD_GIT_TOKEN: string;
		SWAI_COOKIE: string;
		MOZILLA_RECOVERY_KEY: string;
		OZONE_PLATFORM: string;
		MACULA_STRIPE_SANDBOX_ACCOUNT_ID: string;
		NETLYNX_PRIVATE_KEY: string;
		MACULA_REALM_GITHUB_CLIENT_SECRET_DEV: string;
		EX_ESDB_GOSSIP_MULTICAST_ADDR: string;
		FZF_CTRL_T_OPTS: string;
		DOCKERHUB_EMAIL: string;
		HYPRLAND_INSTANCE_SIGNATURE: string;
		NOTIFY_SOCKET: string;
		RECKON_DB_SERVER_PWD: string;
		DISPLAY: string;
		RECKON_STRIPE_SANDBOX_PUBLIC_KEY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		MOZ_ENABLE_WAYLAND: string;
		EX_ESDB_COOKIE: string;
		OCIREG_USER: string;
		GIT_EDITOR: string;
		PAGER: string;
		BEAM_XX_SSH_PWD: string;
		HEX_USER_EMAIL: string;
		DOCKER_HUB_CICD_TOKEN: string;
		XDG_VTNR: string;
		OCIREG_EMAIL: string;
		GROQ_API_KEY: string;
		XDG_SESSION_ID: string;
		PKG_PWD: string;
		HEX_USER: string;
		MANAGERPIDFDID: string;
		npm_config_user_agent: string;
		OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: string;
		MACULA_GITOPS_GITHUB_APP_WEBHOOK_SECRET: string;
		XDG_STATE_HOME: string;
		npm_execpath: string;
		MACULA_GITOPS_GITHUB_APP_PRIVATE_KEY_PATH: string;
		MEGA_USER: string;
		MACULA_MAIL_CONTACT_PWD: string;
		XDG_RUNTIME_DIR: string;
		MACULA_MAIL_HOST: string;
		MACULA_MAILGUN_DOMAIN: string;
		DOCKER_HUB_MACULA_PASSWORD: string;
		STRIPE_USER: string;
		CLAUDE_CODE_ENTRYPOINT: string;
		DEBUGINFOD_URLS: string;
		npm_package_json: string;
		DOCKER_HUB_MACULA_USERNAME: string;
		TAB9_USER: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		LOGATRON_EDGE_API_KEY: string;
		JOURNAL_STREAM: string;
		OPENSEA_API_KEY: string;
		MACULA_GITOPS_GITHUB_APP_CLIENT_SECRET: string;
		AERO_DATA_BOX_API_KEY: string;
		XDG_DATA_DIRS: string;
		GDK_BACKEND: string;
		TAB9_TOKEN: string;
		MACULA_GITOPS_GITHUB_APP_PUBLIC_LINK: string;
		REG_GH_CLIQUE: string;
		npm_config_noproxy: string;
		PATH: string;
		GDK_SCALE: string;
		npm_config_node_gyp: string;
		MACULA_REALM_GITHUB_CLIENT_ID_DEV: string;
		SWAI_MAILGUN_API_KEY: string;
		ASDF_INSTALL_TYPE: string;
		AZDO_CID_USER: string;
		HEX_USER_REMOTE_PASSWORD: string;
		GITLAB_TOKEN: string;
		LIVEBOOK_USER: string;
		EX_ESDB_CLUSTER_SECRET: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		ASDF_INSTALL_VERSION: string;
		FZF_DEFAULT_OPTS: string;
		SWARM_TOKEN: string;
		npm_config_global_prefix: string;
		DOCKERHUB_USER: string;
		MACULA_GITOPS_GITHUB_APP_CLIENT_ID: string;
		DOCKER_BEAMCAMPUS_USER: string;
		MAIL: string;
		UWSM_FINALIZE_VARNAMES: string;
		CODEBERG_GITHUB_ACCESS_TOKEN: string;
		GH_TYC_SECRET_KEY_BASE: string;
		GITLAB_USER: string;
		HEX_USER_LOCAL_PASSWORD: string;
		KITTY_INSTALLATION_DIR: string;
		npm_node_execpath: string;
		MACULA_IO_SSH_USER: string;
		OLDPWD: string;
		GITOPS_BEAM_TOKEN: string;
		MACULA_MAILGUN_SANDBOX_DOMAIN: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
