<script>
	import { onMount } from 'svelte';
	import { setFontSizes } from '@/utils';
	import { Router, Route } from 'svelte-navigator';
	import Switchers from '@/pages/Switchers.svelte';
	import Buttons from '@/pages/Buttons.svelte';
	import Titles from '@/pages/Titles.svelte';
	import Features from '@/pages/Features.svelte';
	import Subscribes from '@/pages/Subscribes.svelte';
	import Notes from '@/pages/Notes.svelte';
	import Footers from '@/pages/Footers.svelte';
	import Swipers from '@/pages/Swipers.svelte';
	import { PATHS } from '@/constants/router.ts';
	import Other from '@/pages/Other.svelte';

	import { currentFrame, } from '@/store/state.ts';
	import Header from '@/10.common-component/Header/Header.svelte';


	onMount(setFontSizes);
</script>

<div id='app' class:hide={$currentFrame.isVisible}>
	<div class='frames frames_terms' class:show={$currentFrame.name === "terms" && $currentFrame.isVisible}>
		<iframe src='../../terms/en/index.html?popup=true' scrolling='scrolling' title='terms' />
	</div>
	<div class='frames frames_privacy' class:show={$currentFrame.name === "privacy" && $currentFrame.isVisible}>
		<iframe src='../../privacy/en/index.html?popup=true' scrolling='scrolling' title='privacy' />
	</div>

	<Router primary={false}>
		<Header />

		<main class='main'>
			<Route path={PATHS.SWITCHERS}>
				<Switchers />
			</Route>
			<Route path={PATHS.BUTTONS}>
				<Buttons />
			</Route>
			<Route path={PATHS.SUBSCRIBES}>
				<Subscribes />
			</Route>
			<Route path={PATHS.TITLES}>
				<Titles />
			</Route>
			<Route path={PATHS.FEATURES}>
				<Features />
			</Route>
			<Route path={PATHS.NOTES}>
				<Notes />
			</Route>
			<Route path={PATHS.FOOTERS}>
				<Footers />
			</Route>
			<Route path={PATHS.SWIPERS}>
				<Swipers />
			</Route>
			<Route path={PATHS.OTHER}>
				<Other />
			</Route>
		</main>
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
