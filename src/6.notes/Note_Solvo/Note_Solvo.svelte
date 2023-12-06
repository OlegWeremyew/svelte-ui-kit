<script>
	import { t } from '@/utils';
	import { isTrialEnabled } from '@/store/state';


</script>

<section class='purchase-solvo-container'>
	<div class='purchase-solvo-note' class:active={$isTrialEnabled}>
		<div class='note-icon note-icon_shield'></div>
		<div class='note-text'>
			<span>{t("No payment now")}</span>
		</div>
	</div>
	<div class='purchase-solvo-note'  class:active={!$isTrialEnabled}>
		<div class='note-icon note-icon_coin'></div>
		<div class='note-text'>
			<span>{t("Best value")}</span>
		</div>
	</div>
</section>

<style lang='scss'>
  @import "./src/styles/mixins";

  .purchase-solvo-container {
    width: 100%;
    height: 2rem;
    margin: 0 auto 0.55rem;

    @include iPhonesAfterX {
      margin-bottom: 0.45rem;
    }
  }

  .purchase-solvo-note {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
	  opacity: 0;

    &.active {
      position: relative;
      opacity: 1;
    }

    .note-icon {
      position: relative;
      background: center / contain no-repeat;
      margin-right: 0.7rem;

      &_shield {
        width: 1.4rem;
        height: 1.7rem;
        background-image: url(@/images/notes/solvo-shield.svg);
      }

      &_coin {
        width: 1.7rem;
        height: 1.7rem;
        background-image: url(@/images/notes/solvo-coin.svg);
      }
    }

    .note-text {
      color: #fff;
      font-size: 1.2rem;
      font-weight: 600;
      letter-spacing: -0.06rem;
    }
  }
</style>
