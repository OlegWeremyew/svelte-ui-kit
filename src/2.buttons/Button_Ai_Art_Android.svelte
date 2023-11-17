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
		class='purchase-button animated'
		on:click={handlePurchase}
	>
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

    button {
      position: relative;
      width: 34.3rem;
      height: 5.6rem;
      font-size: 1.7rem;
      font-weight: 600;
      color: rgb(255, 255, 255);
      border-radius: 3rem;
      margin: 0 auto;
      overflow: hidden;

      @include iPhonesAfterX {
        width: 35.5rem;
      }

      &.purchase-button {
        position: relative;
        background: linear-gradient(
                        90deg,
                        rgb(0, 255, 150),
                        rgb(37, 130, 186) 66%,
                        rgb(85, 62, 225) 90%
        );
      }

      &.animated::before {
        opacity: 0.7;
        position: absolute;
        content: "";
        height: 100%;
        width: 6.3rem;
        background-image: url(@/images/buttons/blik.png);
        background-repeat: no-repeat;
        background-size: cover;
        top: 0;
        animation-name: Shift;
        animation-duration: 4.5s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
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

  @-webkit-keyframes Shift {
    0% {
      left: -30%;
    }
    40% {
      left: 200%
    }
    100% {
      left: 200%
    }
  }
</style>
