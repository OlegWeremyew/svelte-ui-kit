# Switcher_In_Pulse

```javascript
<script>
	import { t } from '@/utils';
	import { activeSubscription, isSwitcherActive, isTrialEnabled, subscriptions } from '@/store/state';

	const getWeekTrial = () => $isSwitcherActive ? 'iHeart.sub.1w.3d.trial' : 'iHeart.g2.sub.1w';

	const setActiveSubscription = () => ({
		period: $isTrialEnabled ? 'week' : 'year',
		inapp: $isTrialEnabled ? getWeekTrial() : $subscriptions.year,
	});

	function handleChangeActiveSubscription() {
		isSwitcherActive.update(() => !$isSwitcherActive);
		isTrialEnabled.update(() => $isSwitcherActive);
		activeSubscription.update(() => ({
			period: setActiveSubscription().period,
			inapp: setActiveSubscription().inapp,
		}));
	}

</script>
{#if !document.body.classList.contains("no_trial")}
	<div class='switcher-wrapper' class:active={$isSwitcherActive}>
		<div class='switcher-text-container'>
			<div
				class='switcher-text'
				class:active={$isSwitcherActive}
				class:active-switcher={$isSwitcherActive}
			>
      <span class='divtext option-text'>
        {@html t("Free Trial Enabled")}
      </span>
			</div>
			<div class='switcher-text' class:active={!$isSwitcherActive}>
      <span class='divtext option-text'>
				{@html t("Enable Free Trial")}
			</span>
			</div>
		</div>
		<div
			class='switcher-element-pulse'
			class:active={$isSwitcherActive}
			on:click={handleChangeActiveSubscription}
		></div>
	</div>
{/if}

<style lang='scss' global>
  @import "./src/styles/mixins.scss";

  .switcher-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 34.5rem;
    height: 5rem;
    padding: 0 5.83rem 0 1.75rem;
    border-radius: 1.63rem;
    background-color: transparent;
    margin: 0 auto 1.25rem;
    border: 0.1rem solid rgb(189, 192, 208);
    font-size: 1.5rem;
    text-align: left;
    font-weight: 400;
    color: #ffffff;

    @include iPhonesAfterX {
      height: 5rem;
      width: 35.5rem;
    }

    @include tabletPortrait {
      height: 5rem;
      width: 35.5rem;
      margin-bottom: 0.7rem;
    }

    &.active {
      border: 0.1rem solid rgb(64, 197, 122);
    }
  }

  .switcher-wrapper.hidden {
    visibility: hidden;
  }

  .switcher-element-pulse {
    display: block;
    position: absolute;
    right: 1.25rem;
    top: 0;
    bottom: 0;
    width: 5rem;
    height: 3.2rem;
    margin: auto;
    border-radius: 2rem;
    background-color: rgb(211 212 214);
    transition: background-color 0.3s;

    @include tabletPortrait {
      width: 4.6rem;
      height: 2.6rem;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 0.25rem;
      top: 0;
      bottom: 0;
      width: 2.6rem;
      height: 2.6rem;
      margin: auto;
      border-radius: 2rem;
      background-color: #fff;
      box-shadow: 0 0.025rem 0.083rem rgba(0, 0, 0, 0.1),
      0 0.083rem 0.083rem rgba(0, 0, 0, 0.16),
      0 0.025rem 0.667rem rgba(0, 0, 0, 0.15);
      transition: transform 0.3s;
      transform: translateX(0);

      @include tabletPortrait {
        width: 2.3rem;
        height: 2.3rem;
      }
    }

    &.active {
      background-color: rgb(64, 197, 122);

      &::after {
        transform: translateX(1.9rem);

        @include tabletPortrait {
          transform: translateX(1.95rem);
        }
      }
    }
  }

  .switcher-text {
    position: absolute;
    visibility: hidden;
    display: none;

    &.active {
      position: static;
      visibility: visible;
      display: block;
    }

    &.active-switcher {
      color: rgb(64, 197, 122);
    }
  }

  html[lang=ru] {
    .option-text.active {
      font-size: 1.3rem;
    }
  }
</style>

```
