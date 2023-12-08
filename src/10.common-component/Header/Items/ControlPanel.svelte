<script>
	import {
		activeSubscription,
		isFirstRender,
		isShowAnimation,
		isSwitcherActive,
		isTrialEnabled,
		subscriptions,
		isShowAnimButton,
		isUTEWasCalled,
		isShowControlPanel,
	} from '@/store/state.ts';
	import { useLocation } from 'svelte-navigator';
	import ChangeModeButton from './ChangeModeButton.svelte';

	const location = useLocation();
	let activeStatus = false;

	$: {
		if ($location.pathname === '/other') {
			isShowAnimButton.update(() => true);
		} else {
			isShowAnimButton.update(() => false);
		}
	}

	$: {
		if ($isShowControlPanel) {
			setTimeout(() => {
				activeStatus = true;
			}, 150);
		} else {
			activeStatus = false;
		}
	}

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

	const handleUTE = () => {
		updateTextElements();
		isUTEWasCalled.update(() => true);
	};

	const changeActiveMode = () => {
		isFirstRender.update(() => !$isFirstRender);
		isShowAnimation.update(() => !$isShowAnimation);
	};
</script>

<div class='header-line' class:visible={activeStatus}>
	<ChangeModeButton
		on:click={changeMode}
		text={`Active mode - ${$isTrialEnabled ? 'active' : 'inactive'}`}
		isActiveStatus={$isTrialEnabled}
	/>
	<ChangeModeButton
		on:click={handleUTE}
		text="Call UTE"
		isActiveStatus={$isUTEWasCalled}
		isDisabled={$isUTEWasCalled}
	/>
	<ChangeModeButton
		on:click={changeActiveMode}
		text={`Animation status - ${$isShowAnimation ? 'active' : 'inactive'}`}
		isActiveStatus={$isShowAnimation}
	/>
</div>

<style lang='scss'>
  .header-line {
    display: flex;
    position: absolute;
	  gap: 20px;
    opacity: 0;
    transition: 0.1s linear;
    margin-bottom: 5px;

    &.visible {
      position: relative;
      opacity: 1;
    }
  }
</style>
