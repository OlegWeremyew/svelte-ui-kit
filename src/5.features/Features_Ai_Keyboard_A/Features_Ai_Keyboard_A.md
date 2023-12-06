#Features_Ai_Keyboard_A

```javascript
<script>
  import FeaturesItem from "./components/FeatureItem.svelte";
</script>

<section class="features">
  <div class="features__row">
    <FeaturesItem text="THE MOST ADVANCED GPT 4.0 & CHATGPT MODELS" icon="🔥" />
  </div>

  <div class="features__row">
    <FeaturesItem text="EXTENDED WORD LIMIT" icon="📝" />
    <FeaturesItem text="AI KEYBOARD" icon="🤖" />
  </div>

  <div class="features__row">
    <FeaturesItem text="UNLIMITED CHAT MESSAGES" icon="😱" />
  </div>
</section>

<style lang="scss">
  @import "./src/styles/mixins.scss";

  .features {
    margin: 0 auto 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @include iPhonesAfterX {
      margin-bottom: 4.1rem;
    }

    &__row {
      margin-bottom: 1rem;
      display: flex;
      justify-content: center;
      width: fit-content;

      @include iPhonesAfterX {
        margin-bottom: 0.9rem;
      }
    }
  }
  :global(html[lang="hi"]) {
    .features {
      margin-bottom: 1rem;
    }
  }
</style>

```
