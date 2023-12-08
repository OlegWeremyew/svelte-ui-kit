<script>
	import { onMount } from 'svelte';
	import { Router } from 'svelte-navigator';
	import { setFontSizes } from '@/utils';
	import { currentFrame } from '@/store/state.ts';
	import { Header, AppRoutes, Frames } from '@/10.common-component';

	onMount(setFontSizes);
</script>

<div id='app' class:hide={$currentFrame.isVisible}>
	<Frames />
	<Router primary={false}>
		<Header />
		<AppRoutes />
	</Router>
</div>

<style lang='scss' global>
  @import "./styles/mixins.scss";
  @import "./styles/default.scss";
  @import "./styles/iframe.scss";
  @import "./styles/no-trial.scss";

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 1.5vh;
    background-color: #333;
  }

  body {
    position: relative;
    width: 100%;
    height: 100vh;
    color: #fff;
  }

  .main {
    width: 100%;
    min-height: 100vh;
    padding: 30px 40px;
    background-color: #222;
    overflow: auto;
  }

  .page {
    display: flex;
    flex-grow: 1;
  }

  .animated {
    transition-property: opacity;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    transition-delay: 0.5s;

    pointer-events: none;
    opacity: 0;
  }

  .animated.visible {
    opacity: 1;
    pointer-events: auto;
  }

  .home {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .loader {
    display: inline-block;
    width: 1.1rem;
    height: 100%;

    svg {
      transform: scale(2) !important;
    }
  }
</style>
