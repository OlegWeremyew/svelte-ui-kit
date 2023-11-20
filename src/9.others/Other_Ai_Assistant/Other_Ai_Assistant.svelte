<script>
  import { t } from "@/utils";
  import {isShowAnimation} from '@/store/state.ts'
</script>

<div class="page_response">
  <div class="message-container">
    <div class="message message__first" class:show-message={$isShowAnimation}>
      <span class="divtext">
        {@html t("Hi! Can you create<br>a content plan for<br>a bakery?")}
      </span>
    </div>
    <div class="message message__second" class:show-message-second={$isShowAnimation}>
      <span class="divtext">
        {@html t(
          "Sure! I would need to know<br>your goals and target<br>audience to help you."
        )}
      </span>
    </div>
  </div>
</div>

<style lang="scss">
  @import "./src/styles/mixins";

  .page_response {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    padding-bottom: 4.4rem;

    @include iPhonesAfterX {
      padding-bottom: 7.8rem;
    }

    &__avatar__wrapper {
      position: absolute;
      top: 2.2rem;
      left: 50%;
      transform: translate(-50%);

      @include iPhonesAfterX {
        top: 6.5rem;
      }
    }
  }

  .message-container {
    margin: 0 auto 3.2rem;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1.7rem;

    @include iPhonesAfterX {
      margin-bottom: 5.2rem;
    }
  }

  .message {
    opacity: 0;
    visibility: hidden;
    background-color: rgb(38, 201, 134);
    text-align: left;
    padding: 1.7rem 1.6rem;
    font-size: 1.75rem;
    line-height: 2.53rem;

    &__first {
      border-radius: 1.2rem 1.2rem 0 1.2rem;
      display: flex;
      align-self: flex-end;
      padding-right: 2.5rem;
      margin-bottom: 1.6rem;
    }

    &__second {
      padding-right: 2.5rem;
      background: rgb(31, 34, 40);
      border-radius: 1.2rem 1.2rem 1.2rem 0;
    }
  }
  .show-message {
      visibility: visible;
      animation-name: show-message;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
      animation-delay: 0.5s;
    }

    .show-message-second {
      visibility: visible;
      animation-name: show-message;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
      animation-delay: 1.5s;
      }

    @keyframes show-message {
      0% {
        opacity: 0;
        transform: translateY(50%);
      }
      100% {
        transform: translateY(0%);
        opacity: 1;
      }
    }
</style>
