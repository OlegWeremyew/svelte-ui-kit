# Subscribes_Chat_AA

```javascript
<script>
  import {
    isTrialEnabled,
    activeSubscription,
    subscriptions,
    bannerId,
  } from "@/store/state";
  import { tapOnInappStat } from "@/config";
  import { sendCallback, t } from "@/utils";

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

  const handleClick = (period) => {
    handleChangeActiveSubscription(period);
    sendCallback(tapOnInappStat($activeSubscription.inapp, $bannerId));
  }
</script>

<section class="chat-subscribe">
  <div
    class="chat-subscribe-wrapper"
    class:new-price={$activeSubscription.period === "year"}
  >
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="chat-subscribe-item"
      class:active={$activeSubscription.period === "week"}
      on:click={() => handleClick("week")}
    >
      <div class="add-info">
        <div class="plan-label">
          <span>{t("ORIGINAL PRICE")}</span>
        </div>
      </div>
      <div class="main-info">
        <span class="divtext">{t("YOUR SPECIAL OFFER😍")}</span>
        <span class="divtext">{@html t("<strong>{{price}}</strong> <br>per week <br>after 3-day trial", {price: "32.22"})}</span>
      </div>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="chat-subscribe-item"
      class:active={$activeSubscription.period === "year"}
      on:click={() => handleClick("year")}
    >
      <div class="add-info">
        <div class="plan-label">
          <span class="divtext">{t("NEW PRICE")}</span>
        </div>
      </div>
      <div class="main-info">
        <span class="divtext">{@html t("<strong>{{price}}</strong> <br>per month <br><strong>after 7-day trial</strong>", {price: '12.22'})}</span>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import "./src/styles/mixins.scss";

  .chat-subscribe {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 2.1rem 0 0.8rem;
  }

  .chat-subscribe-wrapper {
    position: relative;
    display: grid;
    grid-template-columns: 50% 50%;
    width: 32.8rem;
    height: 12.7rem;
    border: 0.1rem solid rgb(64, 64, 64);
    border-radius: 1.6rem;
    background: rgb(51, 52, 56);

    &.new-price {
      &::after {
        transform: translateX(98.5%);
      }

      &::before {
        transform: translateX(100%);
      }
    }

    &::after {
      content: "";
      position: absolute;
      top: -0.1rem;
      left: 0;
      width: 50%;
      height: 100%;
      border: 1px solid rgba(25, 208, 163, 0.36);
      border-radius: 1.6rem;
      pointer-events: none;
      background: rgba(0, 0, 0, 0);
      box-shadow: -1.6rem -1.2rem 7.5rem -2rem rgb(27, 211, 169);
      transition: 0.1s;
      z-index: 2;
    }

    &::before {
      content: "";
      position: absolute;
      display: block;
      top: -1.5rem;
      left: -6rem;
      width: 55%;
      height: 120%;
      background: radial-gradient(
        circle,
        rgba(27, 213, 171, 0.5) 15%,
        rgba(27, 213, 171, 0) 70%
      );
      z-index: 1;
      transition: 0.1s;
    }
  }

  .chat-subscribe-item {
    flex-shrink: 0;
    position: relative;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 1.6rem;
    backdrop-filter: blur(3rem);
    font-size: 1.4rem;
    z-index: 2;

    &.active {
      .plan-label {
        background: linear-gradient(0deg, rgb(15, 191, 137), rgb(34, 225, 190));
      }
    }
  }

  .main-info {
    position: relative;
    text-align: center;
    margin-top: 0.5rem;
  }

  .main-info :global(.price1w7d),
  :global(.price1w3d) {
    font-size: 2.5rem;
    font-weight: 700;
    color: rgb(255, 255, 255);
  }

  .main-info :global(strong) {
    font-weight: 700;
    color: rgb(31, 218, 180);
  }

  .add-info {
    position: relative;
  }

  .plan-label {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 11.9rem;
    height: 2.2rem;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 0.7rem;
    background: linear-gradient(0deg, rgb(62, 64, 72), rgb(62, 64, 72));
    margin: 1.5rem auto 0 ;
  }

  @include iPhonesAfterX {
    .chat-subscribe {
      padding: 2.7rem 0 1.7rem;
    }

    .chat-subscribe-wrapper {
      width: 38rem;

      &::before {
        height: 145%;
        top: -3rem;
      }
    }
  }
</style>

```
