<script>
  import {activeSubscription, bannerId} from "@/store/state.ts";
  import {sendMultipleCallbacks, t} from "@/utils";
  import {tapOnInappStat} from "@/config.ts";

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
    <span class="button-text">
       {@html t('Continue')}
    </span>
    <span class="icon">🚀</span>
  </button>

</section>

<style lang="scss">
  @import "./src/styles/mixins";

  .buttons {
    margin-bottom: 2.9rem;
    z-index: 1;

    @include iPhonesAfterX {
      margin-bottom: 4rem;
    }

    @include tabletPortrait {
      margin-bottom: 4.1rem;
    }
  }

  .continue-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3rem;
    position: relative;
    width: 34.5rem;
    height: 5.8rem;
    font-size: 1.55rem;
    font-weight: 600;
    color: #fff;

    background-color: rgb(237, 48, 81);
    margin: 0 auto;

    @include iPhonesAfterX {
      border-radius: 3.1rem;
      height: 5.6rem;
      width: 35.5rem;
    }

    @include tabletPortrait {
      border-radius: 2.5rem;
      width: 35.5rem;
      height: 5rem;
      font-size: 1.3rem;
    }
  }

  .icon {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    margin-left: 0.5rem;
  }

</style>
