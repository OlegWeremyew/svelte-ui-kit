# Subscribes_Ai_Assistant

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
    yearPriceByWeek,
  } from "@/store/state.ts";
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

<section class="subscribe-ai-assistant">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="subscribe-item"
    class:active={!$isTrialEnabled}
    on:click={() => handleChangeActiveSubscription(false)}
  >
    <div class="subscribe-text">
      <span class="plan-name divtext">
        {@html t("YEARLY ACCESS")}
      </span>
      <span class="plan-price divtext">
        {@html t("{{price}}/year", { price: $yearPrice })}
      </span>
    </div>
    <div class="weekly-badge">
      <div class="badge-container divtext">
        <span>
          {@html t("just <strong>{{price}}</strong> per week", {
            price: $yearPriceByWeek,
          })}
        </span>
      </div>
    </div>
    <div class="subscribe-label" class:active={!$isTrialEnabled}>
      <div class="label-text">
        <span class="divtext"
          >{@html t("SAVE {{n}}%", {
            n: calculateSale($weekPrice, $yearPrice),
          })}</span
        >
      </div>
    </div>
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="subscribe-item"
    class:active={$isTrialEnabled}
    on:click={() => handleChangeActiveSubscription(true)}
  >
    <div class="subscribe-text">
      {#if $isTrialAvailable && $isSwitcherActive}
        <span class="divtext">
          {t("3-DAY FREE TRIAL")}
        </span>
        <span class="divtext plan-price"
          >{@html t("then {{price}}/week", { price: $weekPrice })}</span
        >
      {:else}
        <span class="divtext">{t("WEEKLY ACCESS")}</span>
        <span class="divtext plan-price">
          {@html t("{{price}}/per week", { price: $weekPrice })}</span
        >
      {/if}
    </div>
  </div>
</section>

<style lang="scss">
  @import "./src/styles/mixins";

  .subscribe-ai-assistant {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.7rem;

    @include iPhonesAfterX {
      margin-bottom: 1.6rem;
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

    .subscribe-item {
      flex-shrink: 0;
      position: relative;
      display: grid;
      grid-template-columns: 80% 20%;
      grid-gap: 3%;
      align-items: center;
      width: 34.3rem;
      height: 6rem;
      border-radius: 1.8rem;
      border: 0.1rem solid rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(0.4rem);
      margin: 0 auto;
      margin-bottom: 0.9rem;
      padding-inline: 0.2rem;

      @include iPhonesAfterX {
        width: 35.5rem;
        height: 6rem;
        margin-bottom: 1.6rem;
      }

      &::after {
        position: absolute;
        content: "";
        right: 3.2rem;
        width: 2.5rem;
        height: 2.5rem;
        background: url(@/images/subscribes/check-empty-ai-assistant.png) no-repeat;
        background-size: 2.4rem;

        @include iPhonesAfterX {
          right: 2.8rem;
          width: 2.3rem;
          height: 2.3rem;
          background-size: 2.2rem;
        }
      }

      &.active {
        border: 1.5px solid rgb(232, 161, 146);
        &:after {
          background-image: url(@/images/subscribes/check-fill-ai-assistant.png);
        }
      }

      &:last-child {
        margin-bottom: 0;
      }

      &.active {
        padding-inline: 0.2rem;
        border: 0.1rem solid rgb(255, 255, 255);

        .subscribe-label {
          background: rgb(80, 68, 221);
          color: #fff;

          &::before {
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0),
              rgb(80, 68, 221)
            );
          }

          &::after {
            background: linear-gradient(
              190deg,
              rgb(80, 68, 221) 0%,
              rgba(255, 255, 255, 0) 70%
            );
          }
        }
      }

      &.trial {
        .subscribe-text.no-trial-info {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }

        .subscribe-text.trial-info {
          position: relative;
          opacity: 1;
          pointer-events: all;
        }
      }
    }
  }

  .subscribe-text {
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

  .subscribe-label {
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
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0),
        rgb(255, 255, 255)
      );
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
      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      background: linear-gradient(
        190deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 70%
      );
    }

    .label-text {
      position: relative;
      margin: 0 auto;
    }
  }

  .weekly-badge {
    max-width: 13rem;
    font-size: 1.1rem;
    position: absolute;
    top: 50%;
    right: 6.6rem;
    letter-spacing: -0.05rem;
    transform: translateY(-50%);
    border-radius: 0.7rem;
    height: 2.2rem;
    background: rgba(3, 244, 153, 0.08);
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    display: flex;
    align-items: center;
  }
</style>

```
