<script>
  import {t} from "@/utils";
  import {isSwitcherActive} from "@/store/state";
</script>

<section class="purchase-container">
  <div class="purchase-note">
    <div class="note_cancel">
      <div class="note-icon note-icon_payment" class:active={$isSwitcherActive}></div>
      <div class="note-text">
        {#if ($isSwitcherActive)}
          <span class="divtext no-note__visibility">{t("No payment now")}</span>
        {:else }
          <span class="divtext">{t("Best value")}</span>
        {/if}
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import "./src/styles/mixins.scss";

  .purchase-container {
    max-width: 95%;
    margin: 0.5rem auto 0.55rem;

    @include iPhonesAfterX {
      margin-bottom: 1.4rem;
    }
  }

  .purchase-note {
    width: fit-content;
    letter-spacing: -0.05rem;
    color: #FFF;
    margin: 0 auto;

    @include iPhonesAfterX {
      font-size: 1.1rem;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .note-icon {
      position: relative;
      flex-shrink: 0;
      width: 1.4rem;
      height: 1.4rem;
      background: bottom / contain no-repeat;
      margin-right: 0.9rem;

      &_payment {
        background-image: url(@/images/notes/best-price.svg);
        transform: scale(1.2);
      }

      &.active {
        background-image: url(@/images/notes/no-payment.svg);
        transform: scale(1.2);
      }
    }
  }

  .note-text {
    color: rgb(0, 64, 64);
    font-size: 1.45rem;
    font-weight: 700;
  }
</style>
