<script>
  import {t} from "@/utils";
</script>

<section class="title-payment">
  <div class="title-payment__text">
     <span class="divtext">
        {@html t("HELP ALL YOUR PLANTS THRIVE<br><strong>With Plantum <span>PRO</span></strong>")}
     </span>
  </div>
</section>

<style lang="scss" global>
  @import "./src/styles/mixins.scss";

  .title-payment {
    width: 100%;
    margin-bottom: 0.3rem;

    @include iPhonesAfterX {
      margin-bottom: 3.1rem;
    }

    @include tabletPortrait {
      width: 37rem;
      margin: 0 auto 2rem;
    }

    &__text {
      position: relative;
      width: 92%;
      font-size: 2rem;
      line-height: 2.9rem;
      font-weight: 300;
      margin: 0 auto;
      color: rgb(0, 64, 64);
      text-align: center;

      @include iPhonesAfterX {
        font-size: 1.9rem;
        line-height: 2.8rem;
      }

      strong {
        font-family: 'SF Pro Display Heavy', sans-serif;
        font-size: 2.35rem;
        display: inline;
        font-weight: 900 !important;

        span {
          color: rgb(242, 133, 33);
          font-weight: 900;
        }
      }
    }
  }
</style>
