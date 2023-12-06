#Subscribes_AI_Arta_A 

```javascript
<script>
  import {
	  isTrialEnabled,
    activeSubscription,
    subscriptions,
    isSwitcherActive,
    yearPrice,
    weekPrice,
    yearPriceByWeek
  } from "@/store/state";
  import {t, calculateSale} from "@/utils";

  const setActiveSubscription = () => ({
    period: $isSwitcherActive ? 'week' : 'year',
    inapp: $isSwitcherActive ? $subscriptions.week : $subscriptions.year,
  })

  function handleChangeActiveSubscription(status) {
    isSwitcherActive.update(() => status);
    activeSubscription.update(() => ({
      period: setActiveSubscription().period,
      inapp: setActiveSubscription().inapp,
    }));
  }
</script>

<section class="subscribe">

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="subscribe-item"
    class:active={!$isSwitcherActive }
    on:click={()=>handleChangeActiveSubscription(false)}
  >
    <div
      class="checkbox"
      class:active={!$isSwitcherActive}
    ></div>
    <div class="subscribe-text">
      <div class="divtext year-container">
        <span>
          {t('{{price}} per year', {price: $yearPrice})}
        </span>

        <span class="rated-price">
           {t('only {{price}} per week', {price: $yearPriceByWeek})}
        </span>
      </div>
    </div>

    <div class="subscribe-label">
      <div class="label-text">
        <span class="divtext">
             {t('SAVE {{n}}%', {n: calculateSale($weekPrice, $yearPrice)})}
        </span>
      </div>
    </div>
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="subscribe-item"
    class:active={$isSwitcherActive}
    on:click={()=>handleChangeActiveSubscription(true)}
  >
    <div
      class="checkbox"
      class:active={$isSwitcherActive}
    ></div>
    <div class="subscribe-text">
     {#if $isTrialEnabled}
      <div>
        <span class="divtext">
          {t('3-day free trial')}
        </span>
        <span class="divtext">
          {t('then {{price}} per week', {price: $weekPrice})}
        </span>
      </div>
     {/if}
     {#if !$isTrialEnabled}
      <div>
        <span class="divtext">
          {t('Weekly access')}
        </span>
        <span class="divtext">
          {t('{{price}} per week', {price: $weekPrice})}
        </span>
      </div>
     {/if}
    </div>
  </div>
</section>

<style lang="scss">
  @import "./src/styles/mixins.scss";

  .subscribe {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.5rem;

    @include phones20Ultra {
      margin-bottom: 0.7rem;
    }

    .subscribe-item {
      box-sizing: border-box;
      flex-shrink: 0;
      position: relative;
      display: grid;
      grid-template-columns: 12.5% 86%;
      grid-gap: 3%;
      align-items: center;
      width: 32.3rem;
      height: 5.8rem;
      padding: 0 2rem;
      border-radius: 2.9rem;
      border: 0.1rem solid transparent;
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
      backdrop-filter: blur(0.4rem);
      margin: 0 auto 0.9rem;

      @include phones20Ultra {
        height: 5.2rem;
        width: 33.5rem;
        margin-bottom: 0.7rem;
      }

      &:last-child {
        margin-bottom: 0;
      }

      &.active {
        background: rgba(255, 255, 255, 0.3);
        border: 0.1rem solid #fff;
      }

      .checkbox {
        position: relative;
        display: flex;

        width: 2.4rem;
        height: 2.4rem;
        border: 0.25rem solid rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        transition: 0.1s linear;

        @include phones20Ultra {
          width: 2.2rem;
          height: 2.2rem;
          border: 0.2rem solid rgba(255, 255, 255, 0.5);
        }

        &.active {
          border: 0.25rem solid rgba(255, 255, 255, 1);

          @include phones20Ultra {
            border: 0.2rem solid rgba(255, 255, 255, 1);
          }

          &:after {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            content: "";
            width: 80%;
            height: 80%;
            border-radius: 50%;
            background-color: #fff;
          }
        }
      }
    }

    .subscribe-text,
    .subscribe-price {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.7rem;
      text-align: left;

      @include phones20Ultra {
        font-size: 1.5rem;
      }

      @include tabletPortrait {
        font-size: 1.27rem;
      }

      .year-container {
        display: flex;
        flex-direction: column;
      }

      span {
        margin: 0 0.15rem;
      }

      .rated-price {
        font-size: 0.94em;
      }
    }

    .subscribe-price {
      text-align: left;
      font-size: 1.35rem;
    }

    .subscribe-label {
      font-family: 'Roboto', sans-serif;
      padding: 0 2.05rem;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 0;
      right: 2.5rem;
      transform: translateY(-33%);
      background: linear-gradient(to right, #bc1fef, #0035ff);
      background-size: 100% 100%;
      font-size: 1rem;
      font-weight: 700;
      border-radius: 0.8rem;
      box-shadow: 0 1px 5px #0000007e;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        box-sizing: border-box;
        z-index: -1;
        inset: 0;
        width: 100%;
        height: 100%;
        padding: 0.1rem;
        border-radius: 0.8rem;
        background: linear-gradient(to right, #ff96f4, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), #00b5ff);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
      }

      .label-text {
        line-height: 1.6rem;
      }

      @include phones20Ultra {
        padding: 0 1.9rem;
        font-size: 0.9rem;
        right: 3.5rem;
        transform: translateY(-50%);

        .label-text {
          line-height: 1.4rem;
        }
      }
    }
  }
</style>

```
