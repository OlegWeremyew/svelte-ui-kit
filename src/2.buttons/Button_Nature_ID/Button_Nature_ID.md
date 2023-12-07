# Button_Nature_ID

```javascript
<script>
  import {activeSubscription, isTrialEnabled, bannerId, isSwitcherActive, subscriptions} from "@/store/state.ts";
  import {sendMultipleCallbacks, t} from "@/utils/buttonAnim.ts";

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
    {#if ($isSwitcherActive)}
      <span class="button-text button-text__visibility">{t("Try for Free")}</span>
    {:else }
      <span class="button-text button-text__visibility">{t("Continue")}</span>
    {/if}
    <span class="button-text button-text__visibility--active">{t("Continue")}</span>
    <span class="button-icon"></span>
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
      width: 32.5rem;
      height: 6.2rem;
      font-size: 1.6rem;
      font-weight: 500;
      color: rgb(255, 255, 255);
      border-radius: 3.1rem;
      margin: 0 auto;

      @include iPhonesAfterX {
        width: 34.3rem;
      }

      &.purchase-button {
        position: relative;
        background: rgb(0, 64, 64);
      }
    }

    .button-icon {
      display: block;
      position: absolute;
      top: 50%;
      right: 1.6rem;
      width: 2.4rem;
      height: 1.2rem;
      background: url(@/images/buttons/arrow.svg) center / contain no-repeat;
      transform: translateY(-50%);
    }
  }
</style>

```
