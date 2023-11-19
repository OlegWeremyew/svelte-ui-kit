<script>
	import { activeSubscription } from '@/store/state.ts';
	import { sendMultipleCallbacks, t } from '@/utils';

	const handlePurchase = () => {
		// sendMultipleCallbacks([
		//   `http://callquietly.io/getpremium/${$activeSubscription.inapp}`,
		// ]);
	};
</script>

<section class='buttons-payment'>
	<button
		id='purchase'
		type='button'
		class='purchase-button'
		on:click={handlePurchase}
	>
		<span class='animated-arta'></span>
		<span class='button-text'>{t("Continue")}</span>
		<span class='button-icon'></span>
	</button>
</section>

<style lang='scss'>
  @import "./src/styles/mixins";

  .buttons-payment {
    margin-bottom: 0.7rem;
    z-index: 1;

    @include iPhonesAfterX {
      margin-bottom: 1.1rem;
    }

    .purchase-button {
      position: relative;
      width: 34.3rem;
      height: 5.6rem;
      font-size: 1.7rem;
      font-weight: 600;
      color: rgb(255, 255, 255);
      border-radius: 3rem;
      margin: 0 auto;
      overflow: hidden;
      background: linear-gradient(
                      90deg,
                      rgb(0, 255, 150),
                      rgb(37, 130, 186) 66%,
                      rgb(85, 62, 225) 90%
      );

      @include iPhonesAfterX {
        width: 35.5rem;
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

  .animated-arta {
    position: absolute;
    top: 0;
    content: "";
    display: block;
    opacity: 0.7;
    height: 100%;
    width: 6.3rem;
    background-image: url(@/images/buttons/blik.png);
    background-repeat: no-repeat;
    background-size: cover;
    animation: Shift 4.5s infinite running linear;
  }

  @keyframes Shift {
    0% {
      transform: translateX(-5rem);
    }
    40% {
      transform: translateX(40rem);
    }
    100% {
      transform: translateX(40rem);
    }
  }
</style>
