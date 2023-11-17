<script>
	import {t} from "@/utils";
	import {isTrialEnabled, subscriptions, activeSubscription} from "@/store/state.ts";

	const setActiveSubscription = () => ({
		period: $isTrialEnabled ? 'week' : 'year',
		inapp: $isTrialEnabled ? $subscriptions.week : $subscriptions.year,
	})

	const changeSwitcherPosition = () => {
		isTrialEnabled.update(() => !$isTrialEnabled);
		activeSubscription.update(() => ({
			period: setActiveSubscription().period,
			inapp: setActiveSubscription().inapp,
		}));
	}
</script>

<section
	class="switcher"
	class:active={$isTrialEnabled}
>
	<p>
		{#if ($isTrialEnabled)}
			<span class="switcher__text">{t("Free Trial Enabled")}</span>
		{:else}
			<span class="switcher__text">{t("Enable Free Trial")}</span>
		{/if}
	</p>
	<button
		type="button"
		class="switcher-element"
		class:active={isTrialEnabled}
		on:click={changeSwitcherPosition}>
	</button>
</section>

<style lang="scss">
  @import "../styles/mixins";

  .switcher {
    box-sizing: border-box;
    width: 34.3rem;
    height: 5.4rem;
    border-radius: 2.7rem;
    margin: 0 auto 1rem;
    background-color: rgb(97, 117, 107);
    padding: 0 2.7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0.1rem solid transparent;

    @include iPhonesAfterX {
      margin-bottom: 1.1rem;
      width: 35.5rem;
    }

    &.active {
      border: 0.1rem solid rgba(239, 245, 242, 0.29);

      .switcher-element {
        background: linear-gradient(to bottom, rgb(255, 201, 106), rgb(255, 153, 56));

        &:after {
          transform: translate(1.9rem, -50%);
        }
      }
    }

    &__text {
      position: relative;
      top: 0.1rem;
      color: #fff;
      font-size: 1.6rem;
      letter-spacing: -0.07rem;

      @include iPhonesAfterX {
        top: 0.05rem;
      }
    }

    .switcher-element {
      display: block;
      position: absolute;
      right: 2.06rem;
      top: 0;
      bottom: 0;
      width: 4.71rem;
      height: 2.8rem;
      margin: auto;

      background-color: rgba(0, 64, 64, 0.5);
      border-radius: 2rem;

      transition: background-color 0.3s;

      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 0.1rem;
        top: 50%;
        width: 2.6rem;
        height: 2.6rem;
        margin: auto;

        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 0.025rem 0.083rem rgba(0, 0, 0, 0.1),
        0 0.083rem 0.083rem rgba(0, 0, 0, 0.16),
        0 0.025rem 0.667rem rgba(0, 0, 0, 0.15);

        transition: transform 0.3s;
        transform: translate(0, -50%);
      }
    }
  }
</style>
