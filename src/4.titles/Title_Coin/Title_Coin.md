# Title_Coin

```javascript
<script>
  import {t} from "@/utils";
</script>

<section class="title-5">
	<div class="title-5__img"></div>
	<div class="title-5__text">
     <span>
        {@html t("with <strong>CoinID</strong>")}
     </span>
		<span class="title-5-pro"></span>
	</div>
</section>

<style lang="scss" global>
  @import "./src/styles/mixins";

  .title-5 {
    width: 100%;
    margin-bottom: 0.7rem;

    @include iPhonesAfterX {
      margin-bottom: 1rem;
    }

    @include tabletPortrait {
      width: 37rem;
      margin: 0 auto 2rem;
    }

    &__img {
      width: 28.5rem;
      height: 5.8rem;
      margin: 0 auto;
      background: url(@/images/titles/coin-title.png) center / contain no-repeat;

      @include iPhonesAfterX {
        width: 32rem;
        margin-bottom: 0.5rem;
      }
    }

    &__text {
      position: relative;
      font-size: 2rem;
      line-height: 2.4rem;
      font-weight: 500;
      color: rgb(242, 242, 242);
      display: flex;
      justify-content: center;
      align-items: center;
      strong {
        font-weight: 700;
      }
    }

    .title-5-pro {
      width: 3.9rem;
      height: 1.6rem;
      margin-left: 0.5rem;
      background: url(@/images/titles/coin-pro.png) center / contain no-repeat;
    }
  }
</style>

```
