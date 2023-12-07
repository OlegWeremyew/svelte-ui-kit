<script>
  import { tapOnInappStat } from "@/config"
  import { activeSubscription, bannerId, isSwitcherActive } from "@/store/state"
  import { sendMultipleCallbacks, t } from "@/utils"

  const handlePurchase = () => {
    sendMultipleCallbacks([
      tapOnInappStat($activeSubscription.inapp, $bannerId),
      `http://callback.io/purchase/${$activeSubscription.inapp}?banner_id=${$bannerId}`,
    ]);
  };

</script>

<section class="buttons">
  <button
    id="purchase"
    type="button"
    class="continue-button"
    on:click={handlePurchase}
  >
    <span
      class="button-text"
      class:active={$isSwitcherActive}
    >
      {t("Try for Free")}
    </span>
    <span
      class="button-text"
      class:active={!$isSwitcherActive}
    >
      {t("Continue")}
    </span>
  </button>

</section>

<style lang="scss">
  @import "./src/styles/mixins.scss";

  .buttons {
    margin-bottom: 0.3rem;

    @include iPhonesAfterX {
      margin-bottom: 0.6rem;
    }
  }

  .continue-button {
    border-radius: 2.7rem;
    width: 34.3rem;
    height: 5.4rem;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.06rem;
    color: #fff;
    background: rgb(56, 144, 197);
    margin: 0 auto;

    @include iPhonesAfterX {
      width: 35.5rem;
    }
  }

  .button-text {
    position: absolute;
    visibility: hidden;

    &.active {
      position: static;
      visibility: visible;
    }
  }
</style>
