<script>
  import { t } from "@/utils";
  import {
    isTrialEnabled,
    isTrialAvailable,
    activeSubscription,
    subscriptions,
    isSwitcherActive,
    yearPrice,
    yearRatedPrice,
    yearOldPrice,
    weekPrice,
  } from "@/store/state";

  const getWeekTrial = () =>
    $isSwitcherActive
      ? "fonts.sub.gr2.1w.3.trial_6"
      : "fonts.sub.gr2.1w.3.trial_6";

  const setActiveSubscription = () => ({
    period: $isTrialEnabled ? "week" : "year",
    inapp: $isTrialEnabled ? getWeekTrial() : $subscriptions.year,
  });

  function handleChangeActiveSubscription(status) {
    isTrialEnabled.update(() => status);
    activeSubscription.update(() => ({
      period: setActiveSubscription().period,
      inapp: setActiveSubscription().inapp,
    }));
  }
</script>

<section class="subscribe animated visible">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="subscribe-item"
    class:active={!$isTrialEnabled}
    on:click={() => handleChangeActiveSubscription(false)}
  >
    <div class="subscribe-text">
      <div class="divtext year-container">
        <span
          >{@html t("Only {{price}} per week", {
            price: $yearRatedPrice,
          })}</span
        >
        <span data-class-price="price1y">
          {@html t("Just {{value}} {{price}} <strong>per year</strong>", {
            price: $yearPrice,
            value: `<del>${$yearOldPrice}</del>`,
          })}
        </span>
      </div>
    </div>
    <div class="subscribe-label" class:active={!$isTrialEnabled}>
      <div class="subscribe-label-wrapper">
        <span class="divtext">{t("BEST PRICE")}</span>
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
      <div class="divtext year-container">
        {#if $isTrialEnabled && $isTrialAvailable}
          <span class="divtext">
            {t("3-day free trial")}
          </span>
          <span class="divtext"
            >{@html t("then {{price}} per week", { price: $weekPrice })}</span
          >
        {:else}
          <span class="divtext">{t("Weekly plan")}</span>
          <span class="divtext">
            {@html t("{{price}} per week", { price: $weekPrice })}</span
          >
        {/if}
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import "../styles/mixins.scss";

  .subscribe {
    width: 31rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.3rem;

    @include iPhonesAfterX {}

    .subscribe-item {
      box-sizing: border-box;
      flex-shrink: 0;
      position: relative;
      display: grid;
      grid-template-columns: 70% 26%;
      grid-gap: 3%;
      align-items: center;
      width: 79%;
      height: 5.4rem;
      padding: 0 2rem;
      border-radius: 1.73rem;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.82),
        rgba(255, 255, 255, 0.26)
      );
      border: 1.5px solid rgba(232, 161, 146, 0.27);
      color: #000;
      backdrop-filter: blur(0.4rem);
      background-origin: border-box;
      margin: 0 auto 0.7rem;

      &::after {
        position: absolute;
        content: "";
        right: 2rem;
        width: 2.1rem;
        height: 2.1rem;
        background: url(@/images/subscribes/check-empty-fonts.svg) no-repeat;
        background-size: 2rem;
      }

      &.active {
        border: 1.5px solid rgb(232, 161, 146);
        &:after {
          background-image: url(@/images/subscribes/check-fill-fonts.svg);
        }
      }

      &:last-child {
        margin-bottom: 0;
      }

      @include iPhonesAfterX {
        height: 5.6rem;
        width: 79%;
        &:last-child {
          margin-bottom: 0.4rem;
        }
      }

      @include tabletPortrait {
        height: 4.95rem;
        width: 35.5rem;
        margin-bottom: 0.5rem;
      }
    }

    .subscribe-text {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.5rem;
      text-align: left;

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

    .subscribe-label {
      width: auto;
      position: absolute;
      right: 3.2rem;
      top: -0.55rem;
      background: rgb(251, 199, 108);
      background: linear-gradient(
        90deg,
        rgba(251, 199, 108, 1) 0%,
        rgba(233, 85, 72, 1) 38%,
        rgba(210, 36, 219, 1) 72%,
        rgba(64, 103, 255, 1) 100%
      );
      color: rgb(255, 255, 255);
      font-size: 0.9rem;
      font-weight: 700;
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
      line-height: 1.4rem;
      height: 1.4rem;
      padding: 0 1.5rem;
      z-index: 10;
      &-wrapper {
        height: 100%;
        width: 100%;
      }
      &::after {
        position: absolute;
        content: "";
        width: 4.5rem;
        height: 1.8rem;
        left: -0.7rem;
        top: 45%;
        transform: translateY(-50%);
        background-image: url(@/images/subscribes/badge-left-fonts.png);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        z-index: -1;
      }
      &::before {
        position: absolute;
        content: "";
        width: 4.5rem;
        height: 1.8rem;
        right: -0.7rem;
        top: 45%;
        transform: translateY(-50%);
        background-image: url(@/images/subscribes/badge-right-fonts.png);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        z-index: -1;
      }
    }
  }
</style>
