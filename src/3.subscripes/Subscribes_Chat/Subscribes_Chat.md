# Subscribes_Chat

```javascript
<script>
  import {
    isTrialEnabled,
    isTrialAvailable,
    activeSubscription,
    subscriptions,
    isSwitcherActive,
    yearPrice,
    weekPrice,
  } from "@/store/state";
  import { t, calculateSale } from "@/utils";

  const setActiveSubscription = () => {
    if ($isSwitcherActive && $isTrialEnabled) {
      return {
        period: "week",
        inapp: $subscriptions.weekTrial,
      };
    }

    if ($isTrialEnabled) {
      return {
        period: "week",
        inapp: $subscriptions.week,
      };
    }

    return {
      period: "year",
      inapp: $subscriptions.year,
    };
  };

  function handleChangeActiveSubscription(status) {
    if (!status) {
      isSwitcherActive.update(() => status);
    }
    isTrialEnabled.update(() => status);
    activeSubscription.update(() => ({
      period: setActiveSubscription().period,
      inapp: setActiveSubscription().inapp,
    }));
  }
</script>


<section class="subscribe">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="subscribe-chat-item"
    class:active={!$isTrialEnabled}
    on:click={() => handleChangeActiveSubscription(false)}
  >
    <div class="subscribe-chat-text">
      <span class="plan-name divtext">
        {@html t("YEARLY ACCESS")}
      </span>
      <span class="plan-price divtext">
        {@html t("{{price}}/year", { price: $yearPrice })}
      </span>
    </div>
    <div class="subscribe-chat-label" class:active={!$isTrialEnabled}>
      <div class="label-text">
        <span class="divtext">{@html t("SAVE {{n}}%", {n: calculateSale($weekPrice, $yearPrice)})}</span>
      </div>
    </div>
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="subscribe-chat-item"
    class:active={$isTrialEnabled}
    on:click={() => handleChangeActiveSubscription(true)}
  >
    <div class="subscribe-chat-text">
      {#if $isTrialAvailable}
        <span class="divtext">
          {t("3-DAY FREE TRIAL")}
        </span>
        <span class="divtext"
          >{@html t("then {{price}}/week", { price: $weekPrice })}</span
        >
      {:else}
        <span class="divtext">{t("WEEKLY ACCESS")}</span>
        <span class="divtext">
          {@html t("{{price}}/week", { price: $weekPrice })}</span
        >
      {/if}
    </div>
  </div>
</section>

<style lang="scss" global>
  @import "./src/styles/mixins.scss";

  .subscribe {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.9rem;

    @include phones20Ultra {
      margin-bottom: 2.15rem;
    }

    .trial-info {
      position: absolute;
      pointer-events: none;
      opacity: 0;
    }

    .no-trial-info {
      position: relative;
      opacity: 1;
    }

    .subscribe-chat-item {
      flex-shrink: 0;
      position: relative;
      display: grid;
      grid-template-columns: 80% 20%;
      grid-gap: 3%;
      align-items: center;
      width: 34.3rem;
      height: 6.2rem;
      border-radius: 1.6rem;
      border: 0.1rem solid rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(0.4rem);
      margin: 0 auto 0.9rem;
      padding-inline: 0.2rem;

      @include phones20Ultra {
        width: 35rem;
        height: 5.6rem;
        margin-bottom: 1.4rem;
      }

      &::after {
        position: absolute;
        content: "";
        right: 3.2rem;
        width: 2.5rem;
        height: 2.5rem;
        background: url(@/images/subscribes/check-empty-chat.svg) no-repeat;
        background-size: 2.4rem;

        @include phones20Ultra {
          right: 2.8rem;
          width: 2.3rem;
          height: 2.3rem;
          background-size: 2.2rem;
        }
      }

      &.active {
        border: 1.5px solid rgb(232, 161, 146);
        &:after {
          background-image: url(@/images/subscribes/check-fill-chat.svg);
        }
      }

      &:last-child {
        margin-bottom: 0;
      }

      &.active {
        padding-inline: 0.2rem;
        border: 0.1rem solid rgb(255, 255, 255);
      }

      &.trial {
        .subscribe-chat-text.no-trial-info {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }

        .subscribe-chat-text.trial-info {
          position: relative;
          opacity: 1;
          pointer-events: all;
        }
      }
    }
  }

  .subscribe-chat-text {
    position: relative;
    width: 92%;
    font-size: 1.6rem;
    text-align: left;
    pointer-events: none;
    margin-left: auto;

    .plan-name {
      text-transform: uppercase;
      margin-bottom: 0.3rem;
    }

    .plan-price {
      font-weight: 600;

      strong {
        font-weight: 700;
      }
    }
  }

  .rated-price {
    position: relative;
    text-align: left;
    font-size: 1.5rem;
  }

  .subscribe-chat-label {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -1rem;
    right: 2.3rem;
    height: 1.9rem;
    background: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    font-size: 1.3rem;
    font-weight: 700;
    border-radius: 1rem;
    padding: 0 2.3rem;

    &::before,
    &::after {
        content: "";
        display: block;
        position: absolute;
    }

    &::before {
        top: 50%;
        left: -4.6rem;
        width: 4.7rem;
        height: 0.2rem;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgb(255, 255, 255));
        transform: translateY(-50%);
    }

    &::after {
        top: 0.9rem;
        right: -2.43rem;
        width: 3rem;
        height: 1.6rem;
        border-radius: 0 1.6rem 0 0;
        box-sizing: border-box;
        padding: 0.255rem;
        background: rgb(255, 255, 255);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        background: linear-gradient(190deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 70%);
    }

    .label-text {
      position: relative;
      margin: 0 auto;
    }
  }
</style>

```
