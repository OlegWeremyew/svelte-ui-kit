<script>
  import {activeSubscription, isTrialEnabled} from "@/store/state.ts";
  import {sendCallback, startAnimation} from "@/utils";
  import {onMount} from 'svelte';

  onMount(startAnimation)


  const handlePurchase = () => {
    // sendCallback(
    //   `http://callquietly.io/getpremium/${$activeSubscription.inapp}`
		// );
  };

</script>
<section className="buttons">
	<button
		id="purchase"
		type="button"
		className="continue-button"
		class:trial-btn={$isTrialEnabled}
		on:click={handlePurchase}
	>
	</button>

</section>

<style lang="scss">
  @import "../styles/mixins";

  .buttons {
    margin-bottom: 3.4rem;
    background-color: transparent;
    z-index: 1;

    @include iPhonesAfterX {
      margin-bottom: 4.3rem;
    }

    @include tabletPortrait {
      margin-bottom: 4.23rem;
    }
  }

  :global(.continue-button svg) {
    transform: scale(1.57) !important;
  }

  .continue-button {
    border-radius: 3rem;
    position: relative;
    width: 29.1rem;
    height: 6rem;
    font-size: 1.7rem;
    font-weight: 700;
    background: linear-gradient(to right, #f6513a, #ff9747);
    margin: 0 auto;

    @include iPhonesAfterX {
      border-radius: 3rem;
      height: 6rem;
      width: 29.1rem;
    }

    @include tabletPortrait {
      border-radius: 2.5rem;
      width: 22.73rem;
      height: 4.6rem;
      font-size: 1.25rem;
    }
  }

  .button-text {
    position: absolute;
    visibility: hidden;

    &.active {
      position: static;
      visibility: visible;
    }
  }

  .show {
    position: relative;
    z-index: 100;
  }
</style>
