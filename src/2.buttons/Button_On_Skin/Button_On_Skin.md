# Button_On_Skin

```javascript
<script>
	import {activeSubscription, bannerId, isTrialEnabled} from "@/store/state.ts";
	import {sendMultipleCallbacks, t} from "@/utils/buttonAnim.ts";
	import {tapOnInappStat} from "@/config.ts";

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
		{#if ($isTrialEnabled)}
			<span class="button-text">{t("Try for Free")}</span>
		{:else}
			<span class="button-text">{t("Continue")}</span>
		{/if}
	</button>

</section>

<style lang="scss">
  @import "./src/styles/mixins";

  .buttons {
    margin-bottom: 0.6rem;

    @include iPhonesAfterX {
      margin-bottom: 0.9rem;
    }
  }

  .continue-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2.7rem;
    position: relative;
    width: 34.3rem;
    height: 5.4rem;
    font-size: 1.45rem;
    font-weight: 600;
    color: rgb(13, 16, 25);
    background-color: rgb(239, 245, 242);
    margin: 0 auto;

    .button-text {
      position: relative;
      top: 0.2rem;
    }

    @include iPhonesAfterX {
      width: 35.5rem;
    }
  }
</style>

```
