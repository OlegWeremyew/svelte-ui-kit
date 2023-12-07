<script>
	import Navbar from '@/10.common-component/Header/Navbar.svelte';
	import ControlPanel from '@/10.common-component/Header/ControlPanel.svelte';
	import { isShowControlPanel } from '@/store/state.ts';
</script>

<header class:active={$isShowControlPanel}>
	<Navbar />
	{#if ($isShowControlPanel)}
		<ControlPanel />
	{/if}
</header>

<style lang='scss'>
  header {
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 40px;
    background-color: #333333;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;
	  transition: 0.1s linear;

    &.active {
      height: 80px;
    }
  }
</style>
