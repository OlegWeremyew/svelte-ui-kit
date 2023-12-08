<script>
	import {
		isTrialEnabled,
		isTrialAvailable,
		activeSubscription,
		subscriptions,
		isSwitcherActive,
		yearPrice,
		weekPrice,
		yearPriceByWeek,
	} from '@/store/state.ts';
	import { t } from '@/utils';

	const setActiveSubscription = () => ({
		period: $isTrialEnabled ? 'week' : 'year',
		inapp: $isTrialEnabled ? $subscriptions.week : $subscriptions.year,
	});

	function handleChangeActiveSubscription(status) {
		if (!status) {
			isSwitcherActive.update(() => false);
		}

		isTrialEnabled.update(() => status);
		activeSubscription.update(() => ({
			period: setActiveSubscription().period,
			inapp: setActiveSubscription().inapp,
		}));
	}
</script>

<section class='subscribe-ai-keyboard-android'>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class='subscribe-item-keyboard-android2'
		class:active={!$isTrialEnabled}
		on:click={() => handleChangeActiveSubscription(false)}
	>
		<div class='subscribe-text'>
      <span>
        {@html t("{{price}} <strong>per year</strong>", { price: $yearPrice })}
      </span>
			<span>
        {t("only {{price}} per week", { price: $yearPriceByWeek })}
      </span>
		</div>
		<div class='checkbox' class:active={!$isTrialEnabled} />
		<div class='subscribe-label'>
			<div class='label-text'>
        <span class='divtext'>
          {t("SAVE {{n}}%", { n: "83" })}
        </span>
			</div>
		</div>
	</div>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class='subscribe-item-keyboard-android2'
		class:active={$isTrialEnabled}
		on:click={() => handleChangeActiveSubscription(true)}
	>
		<div class='subscribe-text'>
			<div>
				{#if $isTrialAvailable}
          <span class='divtext'>
            {t("3-day free trial")}
          </span>
					<span class='divtext'
					>{@html t("then {{price}} per week", { price: $weekPrice })}</span
					>
				{:else}
          <span class='divtext'>
            {@html t("{{price}} <strong>per week</strong>", {
							price: $weekPrice,
						})}</span>
				{/if}
			</div>
		</div>
		<div class='checkbox' class:active={$isTrialEnabled}></div>
	</div>
</section>

<style lang='scss'>
  @import "./src/styles/mixins";

  .subscribe-ai-keyboard-android {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.75rem;

    @include phones20Ultra {
      margin-bottom: 1.4rem;
    }
  }

  .subscribe-item-keyboard-android2 {
    flex-shrink: 0;
    position: relative;
    display: grid;
    grid-template-columns: 82% 15%;
    grid-gap: 3%;
    align-items: center;
    width: 29.3rem;
    height: 5.5rem;
    border-radius: 1.8rem;
    border: 0.1rem solid rgba(29, 167, 133, 0.2);
    background: transparent;
    margin: 0 auto 1.1rem;

    @include phones20Ultra {
      height: 5rem;
      width: 30.5rem;
      margin-bottom: 0.7rem;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &.active {
      border-color: rgb(29, 167, 133);
      background: rgba(29, 167, 133, 0.06);

      .checkbox {
        width: 2rem;
        height: 2rem;
        border: none;
        background-image: url(@/images/subscribes/checkbox-on-ai-keyboard-android.svg);
      }
    }
  }

  .subscribe-text {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 95%;
    font-size: 1.5rem;
    line-height: 1.8rem;
    text-align: left;
    margin-left: 2.2rem;
    pointer-events: none;

    strong {
      font-size: 0.93em;
      font-weight: 600;
    }
  }

  .checkbox {
    width: 2rem;
    height: 2rem;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: url(@/images/subscribes/checkbox-off-ai-keyboard-android.svg);
    margin-right: auto;
  }

  .subscribe-label {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -0.6rem;
    right: 2.6rem;
    width: 9.8rem;
    height: 1.4rem;
    background: url(@/images/subscribes/label-ai-keyboard-android.svg) center / contain no-repeat;
    font-size: 1rem;
    font-weight: 900;
    color: rgb(255, 255, 255);

    .label-text {
      position: relative;
      width: 75%;
      margin: 0 auto;
    }
  }
</style>
