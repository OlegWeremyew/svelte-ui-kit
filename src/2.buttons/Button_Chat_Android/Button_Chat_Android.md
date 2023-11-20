# Button_Chat_Android

```javascript
<script>
	import { activeSubscription, bannerId } from '@/store/state.ts';
	import { sendMultipleCallbacks, t } from '@/utils';
	import { tapOnPurchaseButton, doneSubscription } from '@/config.ts';

	const handlePurchase = () => {
		sendMultipleCallbacks([
			tapOnPurchaseButton($activeSubscription.inapp, $bannerId),
			doneSubscription($bannerId),
		]);
	};
</script>

<section class='buttons'>
	<button class='continue-button' on:click={handlePurchase}>
		<span>{t("Continue")}</span>
	</button>
</section>

<style lang='scss'>
  @import "./src/styles/mixins";

  .buttons {
    margin-bottom: 3.5rem;
    z-index: 1;
  }

  button {
    position: relative;
    width: 32.8rem;
    height: 5.6rem;
    font-size: 1.7rem;
    color: rgb(255, 255, 255);
    border-radius: 1.6rem;
    background: linear-gradient(0deg, rgb(15, 191, 137), rgb(34, 225, 190));
    margin: 0 auto;
  }

  @include iPhonesAfterX {
    button {
      width: 38rem;
    }
  }
</style>

```
