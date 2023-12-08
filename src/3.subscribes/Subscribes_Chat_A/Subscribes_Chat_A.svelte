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
  } from "@/store/state";
  import { t } from "@/utils";

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

<section class="subscribe-chat2">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="subscribe-chat2-item"
    class:active={!$isTrialEnabled}
    on:click={() => handleChangeActiveSubscription(false)}
  >
    <div class="subscribe-chat2-text">
      <span class="plan-chat2-name divtext">
        {@html t("YEARLY ACCESS")}
      </span>
      <span class="plan-chat2-price divtext">
        {@html t("Just {{price}} per year", { price: $yearPrice })}
      </span>
    </div>
    <div class="subscribe-chat2-price">
      <span class="rated--chat2-price divtext">
        {@html t("<strong>{{price}}</strong> <br>per week", {
          price: $yearPriceByWeek,
        })}
      </span>
    </div>
    <div class="subscribe-chat2-label" class:active={!$isTrialEnabled}>
      <div class="label-chat2-text">
        <span class="divtext">{@html t("BEST OFFER")}</span>
      </div>
    </div>
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="subscribe-chat2-item"
    class:active={$isTrialEnabled}
    on:click={() => handleChangeActiveSubscription(true)}
  >
    <div class="subscribe-chat2-text">
      {#if $isTrialEnabled && $isTrialAvailable}
        <span class="plan-chat2-name divtext">
          {t("3-DAY FREE TRIAL")}
        </span>
      {:else}
        <span class="divtext">{t("WEEKLY ACCESS")}</span>
      {/if}
    </div>
    <div class="subscribe-chat2-price">
      <span
        class="rated--chat2-price rated--chat2-price--weekly divtext"
        class:visibleChat={$isTrialEnabled && $isTrialAvailable}
      >
        {@html t("<strong>then {{price}}</strong> <br>per week", {
          price: "2323.3",
        })}
      </span>
<!--      <span-->
<!--        class="rated&#45;&#45;chat2-price rated&#45;&#45;chat2-price&#45;&#45;weekly divtext"-->
<!--        class:visibleChat={!$isTrialEnabled || !$isTrialAvailable}-->
<!--      >-->
<!--        {@html t("<strong>{{price}}</strong> <br>per week", {-->
<!--          price: $weekPrice,-->
<!--        })}-->
<!--      </span>-->
    </div>
  </div>
</section>

<style lang="scss">
  @import "./src/styles/mixins.scss";

  .subscribe-chat2 {
    width: 35rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.9rem;

    @include phones20Ultra {
      margin-bottom: 2.4rem;
    }

    .trial-chat2-info {
      position: absolute;
      pointer-events: none;
      opacity: 0;
    }

    .no-trial-chat2-info {
      position: relative;
      opacity: 1;
    }

    .subscribe-chat2-item {
      flex-shrink: 0;
      position: relative;
      display: grid;
      grid-template-columns: 67% 30%;
      grid-gap: 3%;
      align-items: center;
      width: 90%;
      height: 6.2rem;
      border-radius: 1.6rem;
      border: 0.1rem solid rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(0.4rem);
      margin: 0 auto 0.9rem;
      padding-inline: 0.3rem;

      @include phones20Ultra {
        width: 92%;
        height: 6rem;
        margin-bottom: 1.6rem;
      }

      &:last-child {
        margin-bottom: 0;
      }

      &.active {
        padding: 0.2rem;
        background: rgba(0, 255, 162, 0.05);
        border: 0.2rem solid rgb(22, 198, 155);

        .subscribe-cha2-label {
          &::before,
          &::after {
            background: transparent;
          }
        }
      }

      &.trial {
        .subscribe-chat2-text.no-trial-chat2-info {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }

        .subscribe-chat2-text.trial-chat2-info {
          position: relative;
          opacity: 1;
          pointer-events: all;
        }
      }
    }
  }

  .subscribe-chat2-text {
    position: relative;
    width: 93%;
    font-size: 1.6rem;
    text-align: left;
    pointer-events: none;
    margin-left: auto;

    .plan-chat2-name {
      text-transform: uppercase;
      margin-bottom: 0.6rem;

      @include phones20Ultra {
        margin-bottom: 0.3rem;
      }
    }

    .plan-chat2-price {
      font-weight: 600;

      strong {
        font-weight: 700;
      }
    }
  }

  .subscribe-chat2-price {
    position: relative;
    width: 90%;
    text-align: left;
  }

  .rated-chat2-price {
    text-align: left;
    font-size: 1.5rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &--weekly {
      opacity: 0;
    }
  }

  .subscribe-chat2-label {
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
    padding: 0 1.6rem;

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

    .label-chat2-text {
      position: relative;
      margin: 0 auto;
    }
  }

  .visibleChat {
    position: absolute;
    opacity: 1;
  }
</style>
