# Note_Ai_Assistant

```javascript
<script>
  import {t} from "@/utils";
  import {isSwitcherActive, isTrialEnabled} from "@/store/state.ts";
</script>

<section class="purchase-container">
  <div
    class="purchase-note"
    class:active={$isTrialEnabled && $isSwitcherActive}
  >
    <div class="note_payment">
      <div class="note-icon note-icon_payment"></div>
      <div class="note-text">
        <span class="divtext">{t("NO PAYMENT NOW")}</span>
      </div>
    </div>
  </div>
  <div
  class="purchase-note"
  class:active={!$isSwitcherActive}
>
  <div class="note_cancel">
    <div class="note-icon note-icon_cancel"></div>
    <div class="note-text">
      <span class="divtext">{t("CANCEL ANYTIME")}</span>
    </div>
  </div>
</div>
</section>

<style lang="scss">
  @import "./src/styles/mixins";

  .purchase-container {
    max-width: 95%;
    margin: 0 auto 2.2rem;

    @include iPhonesAfterX {
      margin-top: 0;
      margin-bottom: 2.7rem;
    }
  }

  .purchase-note {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: -0.05rem;
    color: #fff;
    margin: 0 auto;
    visibility: hidden;
    pointer-events: none;

    @include iPhonesAfterX {
      font-size: 1.2rem;
    }

    &.active {
      visibility: visible;
      pointer-events: auto;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .note-icon {
      position: relative;
      flex-shrink: 0;
      width: 1.7rem;
      height: 1.7rem;
      background: bottom / contain no-repeat;
      margin-right: 0.9rem;

      @include iPhonesAfterX {
        width: 1.4rem;
        height: 1.4rem;
        margin-right: 1rem;
    }

      &_payment {
        background-image: url(@/images/notes/shield-done-ai-assistant.png);
        transform: scale(1.2);
      }

      &_cancel {
        width: 1.3rem;
        height: 1.3rem;
        background-image: url(@/images/notes/shield-time-ai-assistant.png);
        transform: scale(1.2);
      }
    }
  }
</style>

```
