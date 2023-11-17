<script>
  import {sendMultipleCallbacks, t} from "@/utils";
  import {activeSubscription, isTrialAvailable, isTrialEnabled} from "@/store/state.ts";

  const handlePurchase = () => {
    // sendMultipleCallbacks([
    //   `http://callquietly.io/getpremium/${$activeSubscription.inapp}`,
    // ]);
  };
</script>

<section class="buttons-payment">
	<button
		id="purchase"
		type="button"
		class="purchase-button"
		on:click={handlePurchase}
	>
		{#if $isTrialEnabled && $isTrialAvailable}
			<span class="button-text">{t("Try for Free")}</span>
		{:else }
			<span class="button-text">{t("Continue")}</span>
		{/if}
		<span class="button-icon"></span>
	</button>

</section>

<style lang="scss">
  @import "../styles/mixins";

  .buttons-payment {
    margin-bottom: 2.2rem;
    z-index: 1;

    @include phones20Ultra {
      margin-bottom: 2rem;
    }

    button {
      position: relative;
      width: 34.3rem;
      height: 5.8rem;
      font-size: 1.7rem;
      font-weight: 600;
      color: rgb(255, 255, 255);
      border-radius: 1.6rem;
      margin: 0 auto;

      @include phones20Ultra {
        height: 5.2rem;
        width: 35rem;
      }

      &.purchase-button {
        position: relative;
        background: linear-gradient(180deg, rgb(21, 199, 155), rgb(9, 149, 98));
      }
    }

    .button-icon {
			display: block;
      position: absolute;
      top: 50%;
      right: 1.7rem;
      width: 2.4rem;
      height: 2.4rem;
      background: url(@/images/buttons/arrow.svg) center / contain no-repeat;
      transform: translateY(-50%);
    }
  }

</style>
