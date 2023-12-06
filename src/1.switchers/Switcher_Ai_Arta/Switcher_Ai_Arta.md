#Switcher_Ai_Arta

```javascript
<script>
  import {t} from "@/utils";
  import {subscriptions, activeSubscription, isSwitcherActive} from "@/store/state";

  const setActiveSubscription = () => ({
    period: $isSwitcherActive ? 'week' : 'year',
    inapp: $isSwitcherActive ? $subscriptions.week : $subscriptions.year,
  })

  const changeSwitcherPosition = () => {
    isSwitcherActive.update(() => !$isSwitcherActive);
    activeSubscription.update(() => ({
      period: setActiveSubscription().period,
      inapp: setActiveSubscription().inapp,
    }));
  }
</script>

<section
  class="ai-arta-switcher"
  class:active={$isSwitcherActive}
>
  <div class="ai-arta-switcher-text" class:trial={$isSwitcherActive}>
    <div>
      <span class="ai-arta-switcher__text divtext">{t("Enable free trial")}</span>
    </div>
    <div>
      <span class="ai-arta-switcher__text divtext">{t("Free trial enabled")}</span>
    </div>
  </div>
  <button
    type="button"
    class="ai-arta-switcher-element"
    class:active={isSwitcherActive}
    on:click={changeSwitcherPosition}>
  </button>
</section>

<style lang="scss">
  @import "./src/styles/mixins.scss";

  .ai-arta-switcher {
    box-sizing: border-box;
    width: 32.3rem;
    height: 5.8rem;
    border-radius: 2.9rem;
    margin: 0 auto 0.9rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(0.4rem);
    padding: 0 2.7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0.1rem solid transparent;

    @include phones20Ultra {
      margin-bottom: 1.5rem;
      height: 5.2rem;
      width: 33.5rem;
      padding: 0 1.7rem;
    }

    &.active {
      .ai-arta-switcher-element {
        background: #4051fc;

        &:after {
          transform: translate(1.9rem, -50%);

          @include phones20Ultra {
            transform: translate(1.5rem, -50%);
          }
        }
      }
    }

    .ai-arta-switcher-text {
      position: relative;
      width: 85%;
      text-align: left;

      & div {
        width: 100%;
      }

      & div:first-child {
        position: relative;
        opacity: 1;
      }

      & div:last-child {
        position: absolute;
        opacity: 0;
      }

      &.trial {
        & div:first-child {
          position: absolute;
          opacity: 0;
        }

        & div:last-child {
          position: relative;
          opacity: 1;
        }
      }
    }

    &__text {
      position: relative;
      color: #fff;
      font-size: 1.7rem;

      @include phones20Ultra {
        font-size: 1.5rem;
      }
    }

    .ai-arta-switcher-element {
      display: block;
      position: absolute;
      right: 2.06rem;
      top: 0;
      bottom: 0;
      width: 3.6rem;
      height: 1.4rem;
      margin: auto;
      background-color: #90919b;
      border-radius: 2rem;
      transition: background-color 0.3s;

      @include phones20Ultra {
        width: 3.1rem;
      }

      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        width: 2.1rem;
        height: 2.1rem;
        margin: auto;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 0.025rem 0.083rem rgba(0, 0, 0, 0.1),
        0 0.083rem 0.083rem rgba(0, 0, 0, 0.16),
        0 0.025rem 0.667rem rgba(0, 0, 0, 0.15);
        transition: transform 0.3s;
        transform: translate(0, -50%);

        @include phones20Ultra {
          width: 1.9rem;
          height: 1.9rem;
        }
      }
    }
  }
</style>

```
