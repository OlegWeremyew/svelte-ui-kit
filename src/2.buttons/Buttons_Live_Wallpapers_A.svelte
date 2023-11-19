<script>
	import { activeSubscription, bannerId } from "@/store/state";
	import { sendMultipleCallbacks, t, getCallbackDomain } from "@/utils";

	const handlePurchase = () => {
		// sendMultipleCallbacks([
		// 	`http://callquietly.io/statistic?path=get_premium_by_banner/${$bannerId}/clicked/${Subscribes[$activeSubscription]}`,
		// 	`${getCallbackDomain()}/getpremium/${Subscribes[$activeSubscription]}`,
		// ]);
	};
</script>

<section class="buttons">
	<button
		id="purchase"
		type="button"
		class="continue-button-wallpapers"
		on:click={handlePurchase}
	>
		<span class="button-text">
			{t("Continue")}
		</span>
	</button>
</section>

<style lang="scss">
  @import "./src/styles/mixins.scss";

  .buttons {
    margin-bottom: 0.8rem;
  }

  .continue-button-wallpapers {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3rem;
    position: relative;
    width: 32.6rem;
    height: 6rem;
    font-size: 1.7rem;
    font-weight: 700;
    color: #fff;
    background: linear-gradient(to right, rgb(93, 0, 177), rgb(131, 4, 218), rgb(236, 56, 188), rgb(246, 77, 255));
    margin: 0 auto;

    &:after {
      content: "";
      display: block;
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      top: calc(50% - 1.2rem);
      right: 3.5rem;
      background: url(@/images/buttons/arrow-wallpapers.svg) center / contain no-repeat;
      border-radius: 50%;
      will-change: transform;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.05);
      animation-name: Shift;
      animation-duration: 0.7s;
      animation-timing-function: linear;
      animation-delay: 0.4s;
      animation-iteration-count: infinite;
    }
  }

  @keyframes Shift {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(0.4vh);
    }
    50% {
      transform: translateX(0.8vh);
    }
    75% {
      transform: translateX(0.4vh);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>
