<script>
	import { Route } from 'svelte-navigator';
	import { RouteItem } from '@/10.common-component/AppRoutes/data.ts';
</script>

<main class='main'>
	{#each RouteItem as { id, path, component } (id)}
		<Route {path}>
			<svelte:component this={component} />
		</Route>
	{/each}
</main>
