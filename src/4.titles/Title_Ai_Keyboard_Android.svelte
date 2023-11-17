<script>
  import {t} from "@/utils";
</script>

<section class="title-3">
	<div class="title-3__text">
     <span class="divtext">
        {@html t("Get Pro ⭐ Access")}
     </span>
	</div>
</section>

<style lang="scss">
  @import "../styles/mixins";

  .title-3 {
    width: 100%;
    margin-bottom: 0;

    @include iPhonesAfterX {
      margin-bottom: 1.4rem;
    }

    @include tabletPortrait {
      width: 37rem;
      margin: 0 auto 2rem;
    }

    &__text {
      position: relative;
      width: 92%;
      height: 4.75rem;
      font-size: 3.5rem;
      font-weight: 700;
      text-align: center;
      margin: 0 auto;

      @include iPhonesAfterX {
        font-size: 3.5rem;
        line-height: 5.5rem;
      }
    }
  }
</style>
