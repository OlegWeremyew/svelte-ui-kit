# Button_Coin

```javascript
<script>
  import {activeSubscription, isTrialEnabled, bannerId, isSwitcherActive, subscriptions} from "@/store/state.ts";
  import {sendMultipleCallbacks, t} from "@/utils";

  const setActiveSubscription = () => ({
    period: $isTrialEnabled ? 'week' : 'year',
    inapp: $isSwitcherActive && $isTrialEnabled
      ? $subscriptions.weekTrial
      : $isTrialEnabled
        ? $subscriptions.week
        : $subscriptions.year,
  })

  const handlePurchase = () => {
    activeSubscription.update(() => ({
      period: setActiveSubscription().period,
      inapp: setActiveSubscription().inapp,
    }));

    sendMultipleCallbacks([
      `http://callquietly.io/amplitude_statistic?event_name=sn_action_tap_subbtn&banner_id=${$bannerId}&sub_id=${$activeSubscription.inapp}`,
      `http://callquietly.io/purchase/${$activeSubscription.inapp}?banner_id=${$bannerId}`,
    ]);
  };
</script>

<section class="buttons-payment">
	<button
		id="purchase"
		type="button"
		class="purchase-button"
		on:click={handlePurchase}
	>
    <span class="button-text button-text__visibility">
      {t($isSwitcherActive ? "Try for Free" : "Continue")}
    </span>
		<span class="button-text button-text__visibility--active">{t("Continue")}</span>
		<div class="button-icon"></div>
	</button>

</section>

<style lang="scss">
  @import "./src/styles/mixins";

  .buttons-payment {
    margin-bottom: 0;
    z-index: 1;

    @include iPhonesAfterX {
      margin-bottom: 0.6rem;
    }

    button {
      position: relative;
      width: 34.5rem;
      height: 6.2rem;
      font-size: 1.6rem;
      font-weight: 600;
      color: rgb(255, 255, 255);
      border-radius: 3.1rem;
      margin: 0 auto;

      @include iPhonesAfterX {
        width: 34.3rem;
      }

      &.purchase-button {
        position: relative;
        background: rgb(237, 169, 45);
      }
    }

    .button-icon {
      position: absolute;
      top: 50%;
      right: 1.6rem;
      width: 2.4rem;
      height: 1.2rem;
      background: url(@/images/buttons/coin-arrow.svg) center / contain no-repeat;
      transform: translateY(-50%);
    }
  }
</style>

```
