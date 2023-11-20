# Button_Ai_Art_Android_AA

```javascript
<script>
	import { activeSubscription, bannerId, isTrialEnabled, isSwitcherActive } from "@/store/state.ts";
	import { sendMultipleCallbacks, t } from "@/utils";
	import { tapOnInappStat } from "@/config.ts";

	const handlePurchase = () => {
		sendMultipleCallbacks([
			tapOnInappStat($activeSubscription.inapp, $bannerId),
			`http://callback.io/purchase/${$activeSubscription.inapp}?banner_id=${$bannerId}`,
		]);
	};
</script>

<section class="buttons-ai-art">
	<button
		id="purchase"
		type="button"
		class="continue-button"
		on:click={handlePurchase}
	>
		{#if $isSwitcherActive && $isTrialEnabled}
			<span class="button-text">{t("Try for free")}</span>
		{:else }
			<span class="button-text">{t("Continue")}</span>
		{/if}
	</button>
</section>

<style lang='scss'>
  @import "./src/styles/mixins";

  .buttons-ai-art {
    margin-bottom: -0.2rem;

    @include phones20Ultra {
      margin-bottom: 0;
    }
  }

  .continue-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2.9rem;
    width: 32.3rem;
    height: 5.8rem;
    font-size: 2.1rem;
    font-weight: 500;
    color: rgb(13, 16, 25);
    background: linear-gradient(to bottom, #fcbf00, #f68602);
    margin: 0 auto;
    outline: none;

    opacity: 0;
    pointer-events: none;
    user-select: none;
    animation: showButton 0.9s linear;
    animation-delay: 1s;
    animation-play-state: running;
    animation-fill-mode: forwards;

    @include phones20Ultra {
      width: 33.5rem;
      height: 5.2rem;
      border-radius: 2.6rem;
      font-size: 1.85rem;
    }
  }

  @keyframes showButton {
    0% {
      pointer-events: none;
      opacity: 0;
      transform: scale(0.6);
    }

    70% {
      pointer-events: none;
      opacity: 1;
      transform: scale(1.05);
    }

    100% {
      pointer-events: auto;
      opacity: 1;
      transform: scale(1);
    }
  }
</style>

```
