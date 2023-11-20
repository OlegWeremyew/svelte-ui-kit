# Switcher_Wallpapers

```javascript
<script>
	import { t } from '@/utils';
	import { isTrialEnabled } from '@/store/state';

	const changeSwitcherPosition = () => {
		isTrialEnabled.update(() => !$isTrialEnabled);
	};
</script>

<section class='switcher' class:active={$isTrialEnabled}>
	<div class='switcher-text-wallpapers'>
		<div>
			<span class='divtext'>{t("Enable Free Trial")}</span>
		</div>
		<div>
			<span class='divtext'>{t("Free Trial Enabled")}</span>
		</div>
	</div>
	<button
		type='button'
		class='switcher-element'
		class:active={$isTrialEnabled}
		on:click={changeSwitcherPosition}
	></button>
</section>

<style lang='scss'>
  @import "./src/styles/mixins.scss";

  .switcher {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 31.1rem;
    height: 4.9rem;
    padding: 0 7.8rem 0 2rem;
    border-radius: 2.45rem;
    border: 0.1rem solid rgba(255, 255, 255, 0.7);
    background: rgba(255, 255, 255, 0.1);
    margin: 0 auto 1.2rem;
    font-size: 1.6rem;
    text-align: left;
    font-weight: 500;
    color: rgb(221, 221, 221);

    @include iPhonesAfterX {
      width: 32.6rem;
    }

    &.active {
      .switcher-text-wallpapers {
        & div:first-child {
          position: absolute;
          opacity: 0;
        }

        & div:last-child {
          position: relative;
          opacity: 1;
        }
      }

      .switcher-element {
        background: rgb(0, 80, 229);

        &::after {
          transform: translateX(1.95rem);
        }
      }
    }
  }

  .switcher-text-wallpapers {
    position: relative;
    text-align: left;

    & div {
      width: 100%;
    }

    & div:first-child {
      position: relative;
      opacity: 1;
    }

    & div:last-child {
      position: absolute;
      opacity: 0;
    }
  }

  .switcher-element {
    display: block;
    position: absolute;
    right: 2.1rem;
    top: 0;
    bottom: 0;
    width: 5.1rem;
    height: 3.1rem;
    margin: auto;
    border-radius: 2rem;
    background-color: rgb(173, 173, 173);
    transition: background-color 0.3s;

    &::after {
      content: "";
      display: block;
      position: absolute;
      left: 0.2rem;
      top: 0;
      bottom: 0;
      width: 2.7rem;
      height: 2.7rem;
      margin: auto;
      border-radius: 2rem;
      background-color: #fff;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.35);
      transition: transform 0.3s;
      transform: translateX(0);
    }
  }
</style>

```
