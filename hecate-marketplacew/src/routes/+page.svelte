<script lang="ts">
	import '../app.css';
	import type { PluginApi } from '$lib/types.js';

	// Dev-mode mock API that proxies to the local daemon
	const mockApi: PluginApi = {
		get: async <T>(path: string): Promise<T> => {
			const res = await fetch(`http://localhost:8095${path}`);
			if (!res.ok) throw new Error(`GET ${path}: ${res.status}`);
			return res.json();
		},
		post: async <T>(path: string, body: unknown): Promise<T> => {
			const res = await fetch(`http://localhost:8095${path}`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body)
			});
			if (!res.ok) throw new Error(`POST ${path}: ${res.status}`);
			return res.json();
		},
		del: async <T>(path: string): Promise<T> => {
			const res = await fetch(`http://localhost:8095${path}`, {
				method: 'DELETE'
			});
			if (!res.ok) throw new Error(`DELETE ${path}: ${res.status}`);
			return res.json();
		}
	};
</script>

<marketplace-studio api={mockApi}></marketplace-studio>
