<script>
	import { onMount } from 'svelte';
	import { setFontSizes } from '@/utils';
	import { Router, Link, Route } from 'svelte-navigator';
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

	import {
		currentFrame,
		isTrialEnabled,
		subscriptions,
		activeSubscription,
		isSwitcherActive,
		isShowAnimation,
	} from '@/store/state.ts';

	const setActiveSubscription = () => ({
		period: $isTrialEnabled ? 'week' : 'year',
		inapp: $isTrialEnabled ? $subscriptions.week : $subscriptions.year,
	});

	const changeMode = () => {
		isTrialEnabled.update(() => !$isTrialEnabled);
		isSwitcherActive.update(() => !$isSwitcherActive);

		activeSubscription.update(() => ({
			period: setActiveSubscription().period,
			inapp: setActiveSubscription().inapp,
		}));
	};

	const changeActiveMode = () => {
		isShowAnimation.update(() => !$isShowAnimation);
	};

	onMount(setFontSizes)
</script>

<div id='app' class:hide={$currentFrame.isVisible}>
	<div class='frames frames_terms' class:show={$currentFrame.name === "terms" && $currentFrame.isVisible}>
		<iframe src='../../terms/en/index.html?popup=true' scrolling='scrolling' title='terms' />
	</div>
	<div class='frames frames_privacy' class:show={$currentFrame.name === "privacy" && $currentFrame.isVisible}>
		<iframe src='../../privacy/en/index.html?popup=true' scrolling='scrolling' title='privacy' />
	</div>

	<Router primary={false}>
		<header>
			<div class='header-line'>
				<div class='logo' on:click={changeMode}>
					<div class='mode-button' class:active={$isTrialEnabled}></div>
					<p class='status-mode'>status - {$isTrialEnabled ? 'active' : 'inactive'}</p>
				</div>
				<div class='active' on:click={changeActiveMode}>
					<div class='mode-button' class:active={$isShowAnimation}></div>
					<p class='status-mode'>animation status - {$isShowAnimation ? 'active' : 'inactive'}</p>
				</div>
			</div>

			<nav class='nav'>
				<Link class='link' to={PATHS.SWITCHERS}>Switchers</Link>
				<Link class='link' to={PATHS.BUTTONS}>Button</Link>
				<Link class='link' to={PATHS.SUBSCRIBES}>Subscribes</Link>
				<Link class='link' to={PATHS.TITLES}>Titles</Link>
				<Link class='link' to={PATHS.FEATURES}>Features</Link>
				<Link class='link' to={PATHS.NOTES}>Notes</Link>
				<Link class='link' to={PATHS.FOOTERS}>Footers</Link>
				<Link class='link' to={PATHS.SWIPERS}>Swipers</Link>
				<Link class='link' to={PATHS.OTHER}>Other</Link>
			</nav>
		</header>
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

  header {
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 40px;
    background-color: #333333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;

    .header-line {
      display: flex;
    }

    .logo,
    .active {
      display: flex;
      align-items: center;
      padding: 5px;
      height: 39px;
      cursor: pointer;
      border-radius: 5px;

      &:hover {
        background-color: #222;
      }

      .mode-button {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: red;
        border: 2px solid white;

        &.active {
          background-color: green;
          border: 2px solid yellow;
        }
      }
    }

    .status-mode {
      margin-left: 10px;
      font-size: 1.3rem;

      @media (max-width: 1400px) {
        font-size: 14px;
      }
    }

    nav {
      margin-right: 15px;

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
</style>
