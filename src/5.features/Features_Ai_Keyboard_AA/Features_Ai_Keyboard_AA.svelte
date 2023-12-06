<script>
  import { t } from "@/utils";
  import { isTrialAvailable } from "@/store/state";

  let features = [
    {
      text: "<strong>Unlimited</strong> access",
      icon: "🚀",
    },
    {
      text: "<strong>Spelling and grammar</strong> check",
      icon: "📚",
    },
    {
      text: "Paraphrasing",
      icon: "✍️",
    },
    {
      text: "<strong>Customized</strong> keyboards",
      icon: "🎨",
    },
    {
      text: "<strong>Intelligent</strong> AI Chatbot",
      icon: "🤖",
    },
    {
      text: "AI-powered <strong>text generator</strong>",
      icon: "📝",
    },
  ];
</script>

<section class="features" class:no-trial={!$isTrialAvailable}>
  <ul class="features__list">
    {#each features as item, i}
      <li class="features__item">
        <span class="features__icon">{item.icon}</span>
        <span class="features__text" class:bold={i === 2}
        >{@html t(item.text)}</span
        >
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  @import "./src/styles/mixins.scss";

  .features {
    display: flex;
    justify-content: center;
    max-width: 95vw;
    margin: 0 auto 1.4rem;

    &.no-trial {
      margin-bottom: 5.4rem;
    }

    @include iPhonesAfterX {
      margin-bottom: 3.8rem;

      &.no-trial {
        margin-bottom: 8.8rem;
      }
    }

    &__list {
      min-width: 29.5rem;
    }

    &__item {
      display: flex;
      align-items: center;
      margin-bottom: 0.3rem;

      @include iPhonesAfterX {
        margin-bottom: 0.5rem;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__icon {
      font-size: 2.3rem;
      margin-right: 0.6rem;
    }

    &__text {
      font-size: 1.7rem;
      color: #000;
      text-align: left;

      &.bold {
        font-weight: 700;
      }
    }
  }
</style>
