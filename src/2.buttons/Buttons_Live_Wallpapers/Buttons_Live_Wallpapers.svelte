<script>
	import { activeSubscription, bannerId } from "@/store/state.ts";
	import { sendMultipleCallbacks, getCallbackDomain, t } from "@/utils";
	import { purchaseStat, Subscribes } from '@/config.ts';

	const handlePurchase = () => {
		sendMultipleCallbacks([
			purchaseStat($bannerId, Subscribes[$activeSubscription]),
			`${getCallbackDomain()}/getpremium/${Subscribes[$activeSubscription]}`,
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
		<span class="button-text">
			{t("Continue")}
		</span>
	</button>
</section>

<style lang="scss">
  @import "./src/styles/mixins";

  .buttons {
    margin-bottom: 0.8rem;

    @include iPhonesAfterX {
      margin-bottom: 1.2rem;
    }
  }

  .continue-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3rem;
    position: relative;
    width: 31.1rem;
    height: 6rem;
    font-size: 1.7rem;
    line-height: 2.4rem;
    font-weight: 700;
    letter-spacing: -0.04rem;
    color: #fff;
    background: linear-gradient(
                    to right,
                    rgb(93, 0, 177),
                    rgb(131, 4, 218),
                    rgb(236, 56, 188),
                    rgb(246, 77, 255)
    );
    margin: 0 auto;

    @include iPhonesAfterX {
      border-radius: 3.1rem;
      width: 32.6rem;
    }

    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      right: 3rem;
      transform: translateY(-50%);
      width: 2.4rem;
      height: 2.4rem;
      background: url(@/images/buttons/arrow-wallpapers.svg) center / contain no-repeat;
    }
  }

  .icon {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    margin-left: 0.5rem;
  }
</style>
