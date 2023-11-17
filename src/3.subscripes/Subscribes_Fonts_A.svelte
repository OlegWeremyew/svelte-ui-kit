<script>
  import {t} from '@/utils'
  import {isTrialEnabled, activeSubscription, subscriptions} from "@/store/state";

  function handleChangeActiveSubscription(period) {
    switch (period) {
      case "week":
        isTrialEnabled.update(() => true);
        activeSubscription.update(() => ({
          period,
          inapp: $subscriptions.week,
        }));
        break;

      case "year":
        isTrialEnabled.update(() => false);
        activeSubscription.update(() => ({
          period,
          inapp: $subscriptions.year,
        }));
        break;
    }
  }
</script>

<section class="subscribe">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="subscribe-item" class:active={$activeSubscription.period === "year"}
       on:click={() => handleChangeActiveSubscription("year")}>
    <div class="subscribe-text">
      <div class="divtext">
        <span>
          {@html t("{{price}} <strong>per year</strong>", {price: '2.34'})}
        </span>
      </div>
      <div class="divtext">
        <span>
          {@html t("only {{price}} per week", {price: '2.34'})}
        </span>
      </div>
    </div>
    <div class="checkbox"></div>
    <div class="subscribe-label">
      <div class="label-text">
        <span class="divtext">
          {@html t("SAVE 91%")}
        </span>
      </div>
    </div>
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="subscribe-item" class:active={$activeSubscription.period === "week"}
       on:click={() => handleChangeActiveSubscription("week")}>
    <div class="subscribe-text">
      <span class="divtext trial_active fw-600">
        {@html t("3-day free trial")}
      </span>
      <span class="divtext no_trial_active fw-600">
        {@html t("Weekly plan")}
      </span>

      <span class="divtext trial_active">
        {@html t("then {{price}} per week", {price: '3.34'})}
      </span>
      <span class="divtext no_trial_active">
          {@html t("{{price}} per week", {price: '4.84'})}
      </span>

    </div>
    <div class="checkbox"></div>
  </div>
</section>

<style lang="scss">
  @import "./src/styles/mixins.scss";

  .subscribe {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.9rem;

    @include tabletPortrait {
      margin-bottom: 3.3rem;
    }

    .subscribe-item {
      flex-shrink: 0;
      position: relative;
      display: grid;
      grid-template-columns: 86% 11%;
      grid-gap: 3%;
      align-items: center;
      width: 29.5rem;
      height: 5.85rem;
      padding: 0 2rem;
      border-radius: 1.63rem;
      border: 0.1rem solid rgba(255, 255, 255, 0.5);
      background: transparent;
      color: #fff;
      backdrop-filter: blur(0.4rem);
      margin: 0 auto 0.8rem;

      @include iPhonesAfterX {
        height: 5.9rem;
        width: 30rem;
      }

      @include tabletPortrait {
        height: 4.95rem;
        width: 25rem;
        margin-bottom: 0.5rem;
      }

      &:last-child {
        margin-bottom: 0;
      }

      &.active {
        border: 0.1rem solid #fff;
        background-color: rgba(255, 255, 255, 0.2);

        .checkbox {
          width: 1.9rem;
          height: 1.9rem;
          border: none;
          background-image: url(@/images/subscribes/check-fill-fonts-1.png);

          @include tabletPortrait {
            width: 1.7rem;
            height: 1.7rem;
          }
        }
      }
    }

    .subscribe-text {
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: column;
      font-size: 1.5rem;
      text-align: left;

      @include tabletPortrait {
        font-size: 1.27rem;
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

      .fw-600 {
        font-weight: 600;
      }

      span {
        margin: 0 0.15rem;
      }

      strong {
        font-weight: 700;
      }
    }

    .checkbox {
      width: 1.9rem;
      height: 1.9rem;

      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;

      @include tabletPortrait {
        width: 1.7rem;
        height: 1.7rem;
      }
    }


    .subscribe-label {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: -0.5rem;
      right: 2.8rem;
      width: 9.8rem;
      height: 1.4rem;
      background: url(../images/subscribes/label-fonts.svg) center / contain no-repeat;
      font-size: 0.83rem;
      font-weight: 700;
      color: rgb(255, 255, 255);

      .label-text {
        position: relative;
        width: 75%;
        margin: 0 auto;
      }
    }

  }
</style>
