<script>
  import { activeSubscription, bannerId, isTrialEnabled, isTrialAvailable } from "@/store/state.ts";
  import { sendMultipleCallbacks, t } from "@/utils";
  import { tapOnInappStat } from "@/config.ts";

  const handlePurchase = () => {
    // sendMultipleCallbacks([
    //   tapOnInappStat($activeSubscription.inapp, $bannerId),
    //   `http://callquietly.io/getpremium/${$activeSubscription.inapp}`,
    // ]);
  };
</script>

<section class="buttons">
  <button
    id="purchase"
    type="button"
    class="continue-button"
    on:click={handlePurchase}
  >
    {#if $isTrialEnabled && $isTrialAvailable}
      <span class="button-text">{t("Try for Free")}</span>
    {:else}
      <span class="button-text">{t("Continue")}</span>
    {/if}
  </button>
</section>

<style lang="scss">
  @import "./src/styles/mixins";

  .buttons {
    margin-bottom: -0.4rem;

    @include iPhonesAfterX {
      margin-bottom: 0.9rem;
    }
  }

  .continue-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3rem;
    position: relative;
    width: 29rem;
    height: 6rem;
    font-size: 1.6rem;
    font-weight: 700;
    color: #fff;
    background: linear-gradient(to right, rgb(153, 45, 245), rgb(0, 122, 245));
    margin: 0 auto;

    .button-text {
      position: relative;
      top: 0.2rem;
    }
    @include iPhonesAfterX {
      height: 6.2rem;
      width: 30rem;
      border-radius: 3.1rem;
    }
  }

  .continue-button:after {
      content: "→";
      display: block;
      width: 2rem;
      height: 100%;
      position: absolute;
      top: 0;
      right: 2.2rem;
      font-size: 2rem;
      line-height: 6rem;
      font-weight: 700;
      animation-name: Shift;
      animation-duration: 0.7s;
      animation-timing-function: linear;
      animation-delay: 0s;
      animation-iteration-count: infinite;
    }
    @-webkit-keyframes Shift {
      0% {
        transform: translateX(0);
      }
      25% {
        transform: translateX(0.27rem);
      }
      50% {
        transform: translateX(0.54rem);
      }
      75% {
        transform: translateX(0.27rem);
      }
      100% {
        transform: translateX(0);
      }
    }
</style>
