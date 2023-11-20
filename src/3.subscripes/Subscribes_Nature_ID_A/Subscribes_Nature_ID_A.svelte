<script>
  import {
    isTrialEnabled,
    activeSubscription,
    subscriptions,
    isSwitcherActive,
    yearPrice,
    weekPrice,
    yearPriceByWeek
  } from "@/store/state.ts";
  import {t} from "@/utils";

  const setActiveSubscription = () => ({
    period: $isTrialEnabled ? 'week' : 'year',
    inapp: $isTrialEnabled ? $subscriptions.week : $subscriptions.year,
  })

  function handleChangeActiveSubscription(status) {
    if (!status) {
      isSwitcherActive.update(() => false);
    }

    isTrialEnabled.update(() => status);
    activeSubscription.update(() => ({
      period: setActiveSubscription().period,
      inapp: setActiveSubscription().inapp,
    }));
  }
</script>

<section class="subscribe-nature-id">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="subscribe-nature-id-item"
    class:active={!$isTrialEnabled}
    on:click={()=>handleChangeActiveSubscription(false)}
  >
    <div class="subscribe-text">
      <div class="left-content">
        <span class="divtext">
          {t('YEARLY ACCESS')}
        </span>
        <span class="divtext">
          {@html t('Just {{price}} per year', {price: $yearPrice})}
        </span>
      </div>
      <div class="right-content">
        <span class="divtext year-price" class:active={$isTrialEnabled}>
          {@html t('{{price}}<br>per week', {price: $yearPriceByWeek})}
        </span>
      </div>
    </div>

    <div class="subscribe-nature-id-label">
      <div class="label-text">
        <span class="divtext">
             {t('BEST OFFER')}
        </span>
      </div>
    </div>
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="subscribe-nature-id-item"
    class:active={$isTrialEnabled }
    on:click={()=>handleChangeActiveSubscription(true)}
  >
    <div class="subscribe-text">
      <div class="left-content">
        <span class="divtext no_trial__visibility">
          {t($isSwitcherActive ? '3-DAY FREE TRIAL' : 'WEEKLY ACCESS')}
        </span>
        <span class="divtext no_trial__visibility--active">
          {t('WEEKLY ACCESS')}
        </span>
      </div>
      <div class="right-content">
        <span class="divtext year-price" class:active={$isTrialEnabled}>
          {#if ($isSwitcherActive)}
            {@html t('<strong>then {{price}}</strong><br>per week', {price: $weekPrice})}
          {:else }
            {@html t('<strong>{{price}}</strong><br>per week', {price: $weekPrice})}
          {/if}
        </span>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import "./src/styles/mixins";

  .subscribe-nature-id {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;

    @include iPhonesAfterX {
      margin-bottom: 1.2rem;
    }

    .subscribe-nature-id-item {
      box-sizing: border-box;
      flex-shrink: 0;
      position: relative;
      display: grid;
      grid-template-columns: 84% 12.5%;
      grid-gap: 3%;
      align-items: center;
      width: 34.3rem;
      height: 6rem;
      padding: 0 2.3rem;
      border-radius: 2.9rem;
      border: 0.1rem solid transparent;
      background-color: rgb(40, 58, 37);
      box-shadow: 0 0.4rem 3.2rem 0 rgba(0, 0, 0, 0.1);
      color: rgb(0, 64, 64);
      backdrop-filter: blur(0rem);
      margin: 0 auto 0.8rem;

      @include iPhonesAfterX {
        margin-bottom: 0.85rem;
      }

      &:last-child {
        margin-bottom: 0;
      }

      &.active {
        border: 0.1rem solid rgb(237, 169, 45);
        background-color: rgb(29, 43, 28);
      }
    }

    .subscribe-text {
      width: 100%;
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 1.5rem;
      color: #fff;
      text-align: left;
      opacity: 0.9;

      @include tabletPortrait {
        font-size: 1.27rem;
      }

      .year-container {
        display: flex;
        flex-direction: column;
      }

      .trial_active {
        position: static;
        visibility: visible;
        pointer-events: auto;
      }

      .no_trial_active {
        position: absolute;
        visibility: hidden;
        pointer-events: none;
      }

      span {
        margin: 0 0.15rem;
      }
    }

    .subscribe-price {
      text-align: left;
      font-size: 1.35rem;
    }

    .subscribe-nature-id-label {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: -1rem;
      right: 2.9rem;
      padding: 0 1.6rem;
      height: 2rem;
      border-radius: 1rem;
      font-size: 1.3rem;
      font-weight: 700;
      color: #fff;
      background-color: rgb(237, 169, 45);
    }
  }

  .year-price {
    font-size: 1.5rem;

    strong {
      font-weight: 700;
    }
  }

  .left-content {
    min-width: 20rem;
  }

  .right-content {
    width: 13rem;
  }
</style>
