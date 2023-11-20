# Title_Ai_Art_Android

```javascript
<script>
  import {t} from "@/utils";
  import {onMount} from "svelte";

  let isSmallDevice = false

  onMount(() => {
    const mql = window.matchMedia("screen and (max-aspect-ratio: 56 / 100)");
    isSmallDevice = !mql.matches
  })
</script>

<section class="title-1">
	<div class="title-1__text">
     <span class="divtext">
        {@html t(isSmallDevice ? "Unlock Full<br>Potential of<br><strong>AI CHAT</strong>" : "Unlock Full<br>Potential of <strong>AI CHAT</strong>")}
     </span>
	</div>
</section>

<style lang="scss" global>
  @import "./src/styles/mixins";

  .title-1 {
    width: 100%;
    margin-bottom: 1.3rem;

    @include phones20Ultra {
      margin-bottom: 8.2rem;
    }

    @include tabletPortrait {
      width: 37rem;
      margin: 0 auto 4.2rem;
    }

    &__text {
      position: relative;
      width: 92%;
      height: 6.75rem;
      font-size: 2.5rem;
      line-height: 3.2rem;
      font-weight: 600;
      text-align: left;
      margin: 0 auto;

      @include phones20Ultra {
        font-size: 4.5rem;
        line-height: 5.5rem;
        height: 12.75rem;
      }

      strong {
        display: inline;
        font-weight: 700;
        background: linear-gradient(180deg, rgb(21, 199, 155), rgb(9, 149, 98));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
</style>

```
