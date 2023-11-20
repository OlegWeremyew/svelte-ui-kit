<script>
  import {activeSubscription, isTrialEnabled, isTrialAvailable} from "@/store/state.ts";
  import {sendMultipleCallbacks, t} from "@/utils";

  const handlePurchase = () => {
    // sendMultipleCallbacks([
    //   `http://callquietly.io/getpremium/${$activeSubscription.inapp}`
    // ]);
  };
</script>

<section class="buttons">
	<button
		id="purchase"
		type="button"
		class="purchase-button button"
		on:click={handlePurchase}
	>
		{#if ($isTrialEnabled && $isTrialAvailable)}
			<span class="button__text">{t("3-day trial and plan")}</span>
		{:else }
			<span class="button__text">{t("Continue")}</span>
		{/if}
	</button>

</section>

<style lang="scss">
  @import "./src/styles/mixins";

  .button {
    width: 29rem;
    height: 5.8rem;
    background: linear-gradient(to right, rgb(0, 155, 119), rgb(65, 183, 151));
    border-radius: 1.8rem;
    margin: 0 auto;
    box-shadow: 0 0.3rem 0.8rem 0 rgba(0, 155, 119, 0.5);

    @include phones20Ultra {
      width: 30.5rem;
      height: 5.1rem;
    }

    &__text {
      font-size: 1.7rem;
      font-weight: 600;
      color: #fff;
      transition: 0.3s;
    }
  }
</style>
