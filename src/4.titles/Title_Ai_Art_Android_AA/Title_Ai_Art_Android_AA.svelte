<script>
	import { t } from '@/utils';
</script>

<section class='title-2'>
	<h2 class='ai-arta__title'>
		<span class='divtext'>{@html t("Welcome to <strong>AI ARTA</strong>")}</span>
	</h2>
	<p class='ai-arta__subtitle'>
		<span class='divtext'>{t("The AI art studio in your pocket")}</span>
	</p>
</section>

<style lang='scss'>
  @import "./src/styles/mixins";

  .title-2 {
    width: 100%;
    max-width: 95vw;
    margin: 0 auto 1.5rem;

    .ai-arta__title {
      font-family: 'Roboto', sans-serif;
      font-size: 3.6rem;
      font-weight: 900;
      color: #FFFFFF;
      max-width: 95vw;
      margin: 0 auto;

      & strong {
        font-weight: 900;
      }

      @include phones20Ultra {
        margin-bottom: 0.7rem;
        font-size: 3.4rem;
      }
    }

    .ai-arta__subtitle {
      font-size: 2rem;
      font-weight: 300;
      font-family: 'Roboto', sans-serif;

      @include phones20Ultra {
        font-size: 1.8rem;
        margin-bottom: 1rem;
      }
    }
  }

  :global(.ai-arta__title > span > strong) {
    background-image: linear-gradient(to right, #00d6ff, #3a49e5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
