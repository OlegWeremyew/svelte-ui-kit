<script>
	import { t } from '@/utils';
	import { isTrialEnabled, isSwitcherActive } from '@/store/state.ts';

	const changeSwitcherPosition = () => {
		isSwitcherActive.update(() => !$isSwitcherActive);
		if ($isSwitcherActive) {
			isTrialEnabled.update(() => true);
		}
	};
</script>

<section
	class='switcher-nature-id'
	class:active={$isSwitcherActive}
>
	<p class='switcher-nature-id-text'>
		{#if ($isSwitcherActive)}
			<span class='switcher-nature-id__text'>{t("Free trial enabled")} </span>
		{:else}
			<span class='switcher-nature-id__text'>{t("Enable free trial")}</span>
		{/if}
	</p>
	<button
		type='button'
		class='switcher-element'
		class:active={isSwitcherActive}
		on:click={changeSwitcherPosition}>
	</button>
</section>

<style lang='scss'>
  @import "./src/styles/mixins";

  .switcher-nature-id {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 34.3rem;
    height: 6rem;
    margin-top: 0.1rem;
    margin-bottom: 1.2rem;
    padding: 0 6rem 0 2.5rem;
    font-size: 1.34rem;
    line-height: 1;
    font-weight: 400;
    letter-spacing: -0.02rem;
    text-align: left;
    background-color: rgb(40, 58, 37);
    box-shadow: 0 0.4rem 3.2rem 0 rgba(0, 0, 0, 0.1);
    color: #fff;
    backdrop-filter: blur(0rem);
    border-radius: 3.1rem;
    transition: 0.3s;

    &.active {
      background-color: rgb(29, 43, 28);

      .switcher-element {
        background: rgb(255, 204, 77);

        &:after {
          transform: translate(2rem, -50%);

          @include iPhonesAfterX {
            transform: translate(1.95rem, -50%);
          }
        }
      }
    }

    .switcher-nature-id__text {
      font-size: 1.8rem;
      opacity: 0.9;
      position: relative;
      top: -0.2rem;
    }

    &__text {
      position: relative;
      top: 0.1rem;
      font-size: 1.55rem;
    }

    .switcher-element {
      display: block;
      position: absolute;
      right: 2.1rem;
      top: 0;
      bottom: 0;
      width: 4.8rem;
      height: 2.9rem;
      margin: auto;
      background-color: rgb(207, 207, 207);
      border-radius: 1.667rem;

      &:after {
        content: "";
        display: block;
        position: absolute;
        left: 0.1rem;
        top: 50%;
        width: 2.6rem;
        height: 2.6rem;
        margin: auto;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.35);
        transition: transform 0.3s;
        transform: translate(0, -50%);
      }
    }
  }
</style>