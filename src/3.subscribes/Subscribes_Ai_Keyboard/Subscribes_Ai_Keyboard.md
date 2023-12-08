# Subscribes_Ai_Keyboard

```javascript
<script>
  import {
    isTrialEnabled,
    activeSubscription,
    subscriptions,
    isSwitcherActive,
    yearPrice,
    weekPrice,
    yearPriceByWeek,
  } from "@/store/state.ts";
  import {t, calculateSale} from "@/utils";

  const setActiveSubscription = () => {
    if ($isSwitcherActive && $isTrialEnabled) {
      return {
        period: 'week',
        inapp: $subscriptions.weekTrial
      }
    }

    if ($isTrialEnabled) {
      return {
        period: 'week',
        inapp: $subscriptions.week
      }
    }

    return {
      period: 'year',
      inapp: $subscriptions.year
    }
  }

  function handleChangeActiveSubscription(status) {
    if(!status) {
      isSwitcherActive.update(() => status);
    }
    isTrialEnabled.update(() => status);
    activeSubscription.update(() => ({
      period: setActiveSubscription().period,
      inapp: setActiveSubscription().inapp,
    }));
  }
</script>

<section class="subscribe-ai-keyboard">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="subscribe-ai-keyboard-item"
    class:active={$isTrialEnabled}
    on:click={()=>handleChangeActiveSubscription(true)}
  >
    <div class="subscribe-text">
      <span class="plan-name divtext">
        {@html t("Weekly Plan")}
      </span>
      <span
        class="plan-status plan-status--trial divtext"
        class:active={$isSwitcherActive}
      >
        {@html t("Try 3 days for FREE")}
      </span>
      <div
        class="info-container"
        class:active={$isTrialEnabled}
      >
        <div class="line"></div>
        <div class="info-container__text">
          {@html t("POPULAR")}
        </div>
      </div>
      <span class="plan-price divtext">
        {@html t("<strong>{{price}}</strong>/week", {price: $weekPrice})}
      </span>
    </div>
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="subscribe-ai-keyboard-item"
    class:active={!$isTrialEnabled}
    on:click={()=>handleChangeActiveSubscription(false)}
  >
    <div class="subscribe-text">
      <span class="plan-name divtext">
        {@html t("Yearly Access")}
      </span>
      <span
        class="plan-status plan-status--year divtext"
        class:active={$isSwitcherActive}
      >
        {@html t("<strong>{{price}}</strong>/year", {price: $yearPrice})}
      </span>
      <div class="info-container--year">
        <div class="line"></div>
        <div class="info-container__text">
          {@html t("SAVE {{n}}%", {n: calculateSale($weekPrice, $yearPrice)})}
          <div class="fire-icon"></div>
        </div>
      </div>
      <span class="plan-price divtext">
        {@html t("just {{price}}/week", {price: $yearPriceByWeek})}
      </span>
    </div>
  </div>
</section>

<style lang="scss">
  @import "./src/styles/mixins";

  .subscribe-ai-keyboard {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto 0.75rem;
    width: 34.3rem;

    @include iPhonesAfterX {
      margin-bottom: 1.6rem;
      width: 35.5rem;
    }

    @include tabletPortrait {
      margin-bottom: 4.6rem;
    }

    .subscribe-ai-keyboard-item {
      overflow: hidden;
      width: 16.7rem;
      height: 13.6rem;
      position: relative;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 1rem 0.8rem 1rem 0.5rem;
      border-radius: 1.6rem;
      border: 0.1rem solid rgba(255, 255, 255, 0.25);
      opacity: 0.5;

      &:last-child {
        margin-bottom: 0;
      }

      &.active {
        border-color: rgba(255, 255, 255, 1);
        background-color: rgba(255, 255, 255, 0.06);
        opacity: 1
      }
    }
  }

  .subscribe-text {
    position: relative;
    width: 92%;
    font-size: 1.55rem;
    text-align: left;
    pointer-events: none;
    margin-left: auto;

    .plan-name {
      margin-top: 0.6rem;
    }

    .plan-status {
      margin-top: 1.1rem;
      visibility: hidden;
      pointer-events: none;

      &--year {
        visibility: visible;
        pointer-events: auto;
      }

      &--trial {
        opacity: 0.5;
      }

      &.active {
        visibility: visible;
        pointer-events: auto;
      }
    }

    .plan-price {
      margin-top: 0.8rem;
      font-weight: 400;
      font-size: 1.4rem;

      strong {
        font-size: 1.7rem;
        font-weight: 600;
      }
    }
  }

  .info-container {
    position: relative;
    z-index: 20;
    margin-top: 0.8rem;
    width: 9.3rem;
    height: 2.7rem;
    border-radius: 1.35rem;
    background-color: rgb(51, 51, 51);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #696969;
    font-weight: 700;
    font-size: 1.45rem;

    &.active {
      background-color: rgb(255, 255, 255);
      color: #000;

      .line {
        background-color: rgb(255, 255, 255);
      }
    }

    &__text {
      position: relative;
      z-index: 1000;
    }

    .line {
      z-index: 0;
      position: absolute;
      width: 18rem;
      height: 0.1rem;
      background-color: rgb(51, 51, 51);
      margin-left: 1.5rem;
    }

    &--year {
      position: relative;
      z-index: 20;
      margin-top: 0.8rem;
      width: 11.8rem;
      height: 2.7rem;
      border-radius: 1.35rem;
      background-color: rgb(255, 190, 67);
      display: flex;
      justify-content: flex-start;
      padding-left: 1.2rem;
      align-items: center;
      color: #000;
      font-weight: 700;
      font-size: 1.45rem;

      &__text {
        position: relative;
        z-index: 1000;
      }

      .line {
        position: absolute;
        z-index: 0;
        left: -6rem;
        width: 21rem;
        height: 0.1rem;
        background-color: rgb(255, 190, 67);
        margin-left: 1.5rem;
      }

      .fire-icon {
        position: absolute;
        right: -2.1rem;
        top: -0.2rem;
        width: 2rem;
        height: 2rem;
        background-image: url(@/images/subscribes/fire-ai-keyboard.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
</style>

```
