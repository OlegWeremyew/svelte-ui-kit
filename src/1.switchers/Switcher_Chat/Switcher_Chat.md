# Switcher_Chat

```javascript
<script>
	import { t } from '@/utils';
	import { isTrialEnabled, subscriptions, activeSubscription } from '@/store/state.ts';

	const setActiveSubscription = () => ({
		period: $isTrialEnabled ? 'week' : 'year',
		inapp: $isTrialEnabled ? $subscriptions.weekTrial : $subscriptions.year,
	});

	const changeSwitcherPosition = () => {
		isTrialEnabled.update(() => !$isTrialEnabled);

		activeSubscription.update(() => ({
			period: setActiveSubscription().period,
			inapp: setActiveSubscription().inapp,
		}));
	};
</script>

<section
	class='switcher'
	class:active={$isTrialEnabled}
>
	<div class='switcher-chat-text'>
		{#if ($isTrialEnabled)}
      <span class='divtext'>
       {@html t("Free Trial Enabled")}
      </span>
		{:else}
     <span class='divtext'>
       {@html t("Enable Free Trial")}
     </span>
		{/if}
	</div>
	<div
		class='switcher-button'
		class:active={$isTrialEnabled}
		on:click={changeSwitcherPosition}
	></div>
</section>

<style lang='scss'>
  @import "./src/styles/mixins";

  .switcher {
    display: grid;
    grid-template-columns: 69% 29%;
    grid-gap: 2%;
    align-items: center;
    width: 34.3rem;
    height: 5.6rem;
    border: 0.1rem solid rgba(255, 255, 255, 0.25);
    border-radius: 1.6rem;
    backdrop-filter: blur(0.4rem);
    margin: 0 auto 1.8rem;

    @include phones20Ultra {
      width: 35rem;
      height: 5.2rem;
      margin-bottom: 1.4rem;
    }

    .no-trial-info {
      position: relative;
      opacity: 1;
    }

    .trial-info {
      position: absolute;
      pointer-events: none;
      opacity: 0;
    }

    &.active {
      border-color: rgba(255, 255, 255, 1);
    }
  }

  .switcher-chat-text {
    position: relative;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: left;
    margin-left: 2.2rem;
  }

  .switcher-button {
    position: relative;
    width: 3.2em;
    height: 1.4rem;
    background: rgba(115, 115, 115, 0.6);
    border-radius: 2rem;
    margin: 0 auto;
    transition: 0.15s ease-in-out;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: -0.3rem;
      width: 2.1rem;
      height: 2.1rem;
      background: rgb(255, 255, 255);
      border-radius: 50%;
      box-shadow: -0.2rem 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.35);
      transform: translateY(-50%);
      transition: inherit;
    }

    &.active {
      background: linear-gradient(
                      to bottom,
                      rgb(21, 199, 155),
                      rgb(9, 149, 98)
      );

      &::after {
        transform: translate(1.85rem, -50%);
      }
    }
  }
</style>

```
