<script>
  import {activeSubscription, isTrialEnabled, bannerId} from "@/store/state";
  import {sendMultipleCallbacks, t} from "@/utils";
  import {tapOnInappStat} from "@/config";

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
    class:trial-btn={!$isTrialEnabled}
    on:click={handlePurchase}
  >
    <span
			class="button-text"
			class:active={!$isTrialEnabled}
		>
			{@html t("Continue")}
    </span>
		<span
			class="button-text"
			class:active={$isTrialEnabled}
		>
      {@html t("Try for Free")}
    </span>
		<span class="button-icon"></span>
  </button>

</section>

<style lang="scss">
  @import "./src/styles/mixins.scss";

  .buttons {
    margin-bottom: 3rem;
    z-index: 1;

    @include iPhonesAfterX {
      margin-bottom: 4.1rem;
    }

    @include tabletPortrait {
      margin-bottom: 4.1rem;
    }
  }

  .continue-button {
    border-radius: 3rem;
    position: relative;
    width: 29.5rem;
    height: 6rem;
    font-size: 1.7rem;
    font-weight: 700;
    color: #fff;

    background: linear-gradient(to right, rgb(153 45 245), rgb(0 122 245));
    margin: 0 auto;

    @include iPhonesAfterX {
      border-radius: 3.1rem;
      height: 6.2rem;
      width: 30rem;
    }

    @include tabletPortrait {
      border-radius: 2.5rem;
      width: 24rem;
      height: 5rem;
      font-size: 1.3rem;
    }

    &.trial-btn {
      background: #fff;
      color: #000;

      .button-icon {
        display: block;
        position: absolute;
        top: 50%;
        right: 2.4rem;
        width: 1.6rem;
        height: 1.6rem;
        background: url(@/images/buttons/arrow-black.png) center / contain no-repeat;
        transform: translateY(-40%);
      }
    }
  }

  .button-icon {
    position: absolute;
    right: 2.4rem;
    top: 50%;
    transform: translateY(-40%);
    width: 1.6rem;
    height: 1.6rem;

    @include tabletPortrait {
      right: 1.8rem;
      width: 1.3rem;
      height: 1.3rem;
    }

    background-image: url(@/images/buttons/arrow-white.png);
    background-size: contain;
    background-repeat: no-repeat;
  }

  .button-text {
    position: absolute;
    visibility: hidden;

    &.active {
      position: static;
      visibility: visible;
    }
  }

  .show {
    position: relative;
    z-index: 100;
  }
</style>
