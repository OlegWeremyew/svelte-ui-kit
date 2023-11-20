<script>
  import {t} from "@/utils";
  import {isTrialEnabled, isSwitcherActive} from "@/store/state";

  const changeSwitcherPosition = () => {
    isSwitcherActive.update(() => !$isSwitcherActive);
    if ($isSwitcherActive) {
      isTrialEnabled.update(() => true);
      return
    }

    isTrialEnabled.update(() => false);
  }
</script>

<section
  class="switcher"
  class:active={$isSwitcherActive}
>
  <p class="switcher-text-nature">
    {#if ($isTrialEnabled)}
      <span class="switcher__text">{@html t("Free Trial Enabled")}</span>
    {:else}
      <span class="switcher__text">{@html t("Enable Free Trial")}</span>
    {/if}
  </p>
  <button
    type="button"
    class="switcher-element"
    class:active={isSwitcherActive}
    on:click={changeSwitcherPosition}>
  </button>
</section>

<style lang="scss">
  @import "./src/styles/mixins.scss";

  .switcher {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 32.5rem;
    height: 5.4rem;
    margin-top: 0.1rem;
    margin-bottom: 1rem;
    padding: 0 6rem 0 2rem;
    font-size: 1.34rem;
    line-height: 1;
    font-weight: 400;
    letter-spacing: -0.02rem;
    text-align: left;
    color: rgb(0, 64, 64);
    background: #fff;
    border-radius: 2.583rem;
    transition: 0.3s;

    &.active {
      background-color: rgb(242, 234, 223);
    }

    @include iPhonesAfterX {
      width: 34.3rem;
      margin-bottom: 1.2rem;
    }

    &.active {
      .switcher-element {
        background: linear-gradient(
                        to bottom,
                        rgb(255, 201, 106),
                        rgb(255, 153, 56)
        );

        &:after {
          transform: translate(2rem, -50%);

          @include iPhonesAfterX {
            transform: translate(1.95rem, -50%);
          }
        }
      }
    }

    .switcher-text-nature {
      font-size: 1.8rem;
      position: relative;
      top: -0.2rem;
    }

    &__text {
      position: relative;
      top: 0.1rem;
      color: rgb(0, 64, 64);
      font-size: 1.55rem;

      @include iPhonesAfterX {
        top: 0.05rem;
      }
    }

    .switcher-element {
      display: block;
      position: absolute;
      right: 1.6rem;
      top: 0;
      bottom: 0;
      width: 4.8rem;
      height: 2.9rem;
      margin: auto;
      background-color: rgba(0, 64, 64, 0.5);
      border-radius: 1.667rem;

      &:after {
        content: "";
        display: block;
        position: absolute;
        left: 0.1rem;
        top: 50%;
        width: 2.6rem;
        height: 2.6rem;
        margin: auto;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.35);
        transition: transform 0.3s;
        transform: translate(0, -50%);
      }
    }
  }
</style>
