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

<section class='solvo-switcher' class:active={$isTrialEnabled}>
	<div class='solvo-switcher-text'>
		<div>
			<span class='solvo-switcher__text divtext'>{t("Enable Free Trial")}</span>
		</div>
		<div>
			<span class='solvo-switcher__text divtext'>{t("Free Trial Enabled")}</span>
		</div>
	</div>
	<button
		type='button'
		class='solvo-switcher-element'
		class:active={$isTrialEnabled}
		on:click={handleChangeActiveSubscription}
	></button>
</section>

<style lang='scss'>
  @import "./src/styles/mixins";

  .solvo-switcher {
    box-sizing: border-box;
    width: 30.7rem;
    height: 5.1rem;
    border-radius: 1.6rem;
    margin: 0 auto 1.1rem;
    background: rgba(255, 255, 255, 0);
    padding: 0 2.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0.1rem solid rgb(73, 73, 73);

    @include iPhonesAfterX {
      margin-bottom: 1.5rem;
      width: 32.2rem;
    }

    &.active {
      border-color: rgb(174, 241, 97);

      .solvo-switcher-text {
        & div:first-child {
          position: absolute;
          opacity: 0;
        }

        & div:last-child {
          position: relative;
          opacity: 1;
        }
      }

      .solvo-switcher-element {
        background: rgb(174, 241, 97);

        &::after {
          transform: translateX(1.9rem);
        }
      }
    }

    .solvo-switcher-text {
      position: relative;
      width: 85%;
      text-align: left;

      & div {
        width: 100%;
      }

      & div:first-child {
        position: relative;
        opacity: 1;
      }

      & div:last-child {
        position: absolute;
        opacity: 0;
      }
    }

    &__text {
      position: relative;
      color: #fff;
      font-size: 1.6rem;
      letter-spacing: -0.03rem;
    }

    .solvo-switcher-element {
      display: block;
      position: absolute;
      right: 1.2rem;
      top: 0;
      bottom: 0;
      width: 5.12rem;
      height: 3.1rem;
      margin: auto;
      border-radius: 1.55rem;
      background-color: rgb(73, 73, 73);
      transition: background-color 0.3s;

      &:after {
        content: "";
        display: block;
        position: absolute;
        left: 0.15rem;
        top: 0;
        bottom: 0;
        width: 2.8rem;
        height: 2.8rem;
        margin: auto;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1), 0 3px 1px rgba(0, 0, 0, 0.05);
        transition: transform 0.3s;
        transform: translateX(0);
      }
    }
  }
</style>
