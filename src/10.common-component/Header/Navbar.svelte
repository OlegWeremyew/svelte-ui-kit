<script>
	import { Link } from 'svelte-navigator';
	import { isShowControlPanel } from '@/store/state.ts';
	import { RouterItems } from '@/constants';
	import ChangeModeButton from '@/10.common-component/Header/ChangeModeButton.svelte';

	const toggleControlVisibility = () => {
		isShowControlPanel.update(() => !$isShowControlPanel);
	};
</script>

<nav class='nav'>
	<ChangeModeButton on:click={toggleControlVisibility} text='Show control panel' isActiveStatus={$isShowControlPanel}/>
	<div>
		{#each RouterItems as {path, text} (path)}
			<Link class='link' to={path}>{text}</Link>
		{/each}
	</div>
</nav>

<style lang='scss' global>
  nav {
    padding: 8px 15px 0;
    display: flex;
    justify-content: space-between;
    width: 100%;

    .link {
      cursor: pointer;
      color: #cec7c8;
      transition: 0.1s linear;
      margin: 0 5px;
      padding: 5px;
      border-radius: 4px;

      @media (max-width: 1400px) {
        font-size: 12px;
      }

      &:hover {
        color: #fff;
        background-color: #222;
      }

      &:focus {
        color: #fff;
        text-decoration: underline;
        background-color: #222;
      }
    }
  }
</style>
