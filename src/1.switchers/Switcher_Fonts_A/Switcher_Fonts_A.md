# Switcher_Fonts_A

```javascript
<script>
	import { t } from '@/utils';
	import { activeSubscription, isTrialEnabled, subscriptions } from '@/store/state';

	const setActiveSubscription = () => ({
		period: $isTrialEnabled ? 'week' : 'year',
		inapp: $isTrialEnabled ? $subscriptions.week : $subscriptions.year,
	});

	function handleChangeActiveSubscription() {
		isTrialEnabled.update(() => !$isTrialEnabled);
		activeSubscription.update(() => ({
			period: setActiveSubscription().period,
			inapp: setActiveSubscription().inapp,
		}));
	}

</script>
<div class='switcher-wrapper' class:active={$isTrialEnabled}>
	<div class='switcher-text-container'>
		<div
			class='switcher-text'
			class:active={$activeSubscription.period === "week"}
		>
      <span class='divtext option-text'>
        {@html t("Free Trial Enabled")}
      </span>
		</div>
		<div
			class='switcher-text'
			class:active={$activeSubscription.period === "year"}
		>
      <span class='divtext option-text'>
				{@html t("Enable Free Trial")}
			</span>
		</div>
	</div>
	<div
		class='switcher-element-fonts'
		class:active={$isTrialEnabled}
		on:click={handleChangeActiveSubscription}
	></div>
</div>

<style lang='scss' global>
  @import "./src/styles/mixins.scss";

  .switcher-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 29.5rem;
    height: 5.85rem;
    padding: 0 5.83rem 0 1.75rem;
    border-radius: 1.63rem;
    background-color: transparent;
    margin: 0 auto 0.75rem;
    border: 0.1rem solid rgba(255, 255, 255, 0.5);
    font-size: 1.5rem;
    text-align: left;
    font-weight: 700;
    color: #ffffff;

    @include iPhonesAfterX {
      height: 6rem;
      width: 30rem;
      margin-bottom: 1.1rem;
    }

    @include tabletPortrait {
      height: 5rem;
      width: 25rem;
      margin-bottom: 0.7rem;
      font-size: 1.25rem;
    }

    &.active {
      border: 0.1rem solid #FFFFFF;
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  .switcher-wrapper.hidden {
    visibility: hidden;
  }

  .switcher-element-fonts {
    display: block;
    position: absolute;
    right: 1.25rem;
    top: 0;
    bottom: 0;
    width: 5rem;
    height: 3rem;
    margin: auto;
    border-radius: 2rem;
    background-color: rgba(177, 177, 177, 0.3);
    transition: background-color 0.3s;

    @include tabletPortrait {
      width: 4.6rem;
      height: 2.6rem;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 0.2rem;
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
      background-color: rgb(7, 118, 245);

      &::after {
        transform: translateX(2rem);

        @include tabletPortrait {
          transform: translateX(1.9rem);
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
  }

  html[lang=ru] {
    .option-text.active {
      font-size: 1.3rem;
    }
  }
</style>

```
