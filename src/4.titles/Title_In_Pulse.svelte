<script>
  import {t} from "@/utils";
</script>

<section class="title">
  <div class="title-text">
    <span class="divtext">
      {@html t("Unlock Full <br>Potential of <br><strong>InPulse</strong>")}
    </span>
  </div>
</section>

<style lang="scss" global>
  @import "./src/styles/mixins.scss";

  .title {
    width: 92%;
    margin: 0 auto 2.2rem;

    @include iPhonesAfterX {
      margin-bottom: 2.5rem;
    }

    @include tabletPortrait {
      width: 35.5rem;
      margin-bottom: 5.6rem;
    }
  }

  .title-text {
    font-size: 3rem;
    line-height: 3.33rem;
    font-weight: 700;
    text-align: left;
    color: #fff;

    strong {
      color: rgb(237, 48, 81);
    }

    @include iPhonesAfterX {
      font-size: 4.8rem;
      line-height: 5.5rem;
    }

    @include tabletPortrait {
      font-size: 4.8rem;
      line-height: 5.5rem;
    }
  }
</style>
