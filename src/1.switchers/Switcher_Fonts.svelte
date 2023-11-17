<script xmlns='http://www.w3.org/1999/html'>
  import { t } from '@/utils';
  import {
    isTrialEnabled,
    subscriptions,
    activeSubscription,
  } from '@/store/state';

  const setActiveSubscription = () => ({
    period: $isTrialEnabled ? 'week' : 'year',
    inapp: $isTrialEnabled ? $subscriptions.week : $subscriptions.year,
  });

  const changeSwitcherPosition = () => {
    isTrialEnabled.update(() => !$isTrialEnabled);
    activeSubscription.update(() => ({
      period: setActiveSubscription().period,
      inapp: setActiveSubscription().inapp,
    }));
  };
</script>

<section class="switcher animated visible" class:active={$isTrialEnabled}>
  <div class="switcher-wrapper">
    <div class="switcher-text-container">
      {#if ($isTrialEnabled)}
        <span class="switcher__text">{@html t("Free Trial Enabled")}</span>
      {:else}
        <span class="switcher__text">{@html t("Enable Free Trial")}</span>
      {/if}
    </div>
    <button
      type="button"
      class="switcher-element"
      class:active={isTrialEnabled}
      on:click={changeSwitcherPosition}
    ></button>
  </div>
</section>

<style lang="scss">
  @import "./src/styles/mixins.scss";

  .switcher {
    width: 31rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 1.2rem;

    .switcher-wrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 79%;
      height: 5.4rem;
      padding: 0 8rem 0 1.9rem;
      border-radius: 1.6rem;
      border: 1.3px solid rgba(232, 161, 146, 0.27);
      transition: 0.3s;
      background: linear-gradient(to right, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.26) );
      backdrop-filter: blur(40px);
      background-origin: border-box;
    }

    .switcher-element {
      display: block;
      position: absolute;
      right: 2rem;
      top: 0;
      bottom: 0;
      width: 5.1rem;
      height: 3.1rem;
      margin: auto;
      border-radius: 2.1rem;
      background-color: rgb(246, 213, 208);
      transition: background-color 0.3s;

      &:after {
        content: "";
        display: block;
        position: absolute;
        left: 0.22rem;
        top: 0;
        bottom: 0;
        width: 2.7rem;
        height: 2.7rem;
        margin: auto;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 0 0.025rem 0.083rem rgba(0, 0, 0, 0.1),
          0 0.083rem 0.083rem rgba(0, 0, 0, 0.16),
          0 0.025rem 0.667rem rgba(0, 0, 0, 0.15);
        transition: transform 0.3s;
        transform: translateX(0);
      }
    }
  }

  .switcher.active {
    .switcher-element {
      background-color: rgb(143, 202, 122);

      &:after {
        transform: translateX(2rem);
      }
    }
  }

  .switcher-text-container {
    width: 100%;
    position: relative;
    text-align: left;
  }

  .switcher-text {
    width: 100%;
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: -0.09rem;
    text-align: left;
    color: rgb(0, 0, 0);
  }
</style>
