<script>
  import {t} from "@/utils";
</script>

<section class="title-2">
	<div class="title-2__text">
     <span class="divtext">{@html t('Special offer')}</span>
	</div>
	<div class="title-2__sale">
    <span class="divtext">{@html t('50% OFF')}</span>
	</div>
</section>

<style lang="scss">
  @import "../styles/mixins";

  .title-2 {
    width: 100%;
    max-width: 95vw;
    margin: 0 auto 1.5rem;

    @include phones20Ultra {
      margin-bottom: 5.35rem;
    }

    @include tabletPortrait {
      width: 37rem;
      margin: 0 auto 2rem 4.2rem;
    }

    &__text {
      font-size: 3.2rem;
      font-weight: 700;
      letter-spacing: 0.01rem;
      background: linear-gradient(to bottom, #15c79b, #099562);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text; /* для Firefox */
      -moz-text-fill-color: transparent; /* для Firefox */
      margin-bottom: 0.3rem;


      @include phones20Ultra {
        font-size: 4.8rem;
        margin-bottom: 1rem;
      }
    }

    &__sale {
      font-size: 4.9rem;
      font-weight: 700;
      color: #fff;

      @include phones20Ultra {
        font-size: 7.2rem;
      }
    }
  }
</style>
