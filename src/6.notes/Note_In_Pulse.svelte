<script>
	import { t } from '@/utils';
</script>

<section class='purchase-container'>
	<div class='purchase-note'>
		<div class='note_no-payment'>
			<div class='note-icon note-icon_shield'></div>
			<div class='note-text'>
          <span>
            {@html t("No payment now")}
          </span>
			</div>
		</div>
	</div>
</section>

<style lang='scss'>
  @import "./src/styles/mixins.scss";

  .purchase-container {
    width: 100%;
    height: 2rem;
    margin: 0 auto;
  }

  .purchase-note {
    position: relative;
    width: fit-content;
    font-size: 1.1rem;
    letter-spacing: -0.03rem;
    color: #FFF;
    padding: 0.8rem 1.6rem;
    //transform: translateY(-90%);
    margin: 0 auto;
    pointer-events: none;
    z-index: 0;

    @include iPhonesAfterX {
      //transform: translateY(-122%);
    }

    @include tabletPortrait {
      font-size: 1.2rem;
      //transform: translateY(-127%);
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .note-icon {
      position: relative;
      top: -0.1rem;
      flex-shrink: 0;
      width: 1.4rem;
      height: 1.4rem;
      background: bottom / contain no-repeat;
      margin-right: 0.5rem;

      @include iPhonesAfterX {
        top: -0.05rem;
      }

      @include tabletPortrait {
        width: 1.5rem;
        height: 1.5rem;
      }

      &_shield {
        background-image: url(@/images/notes/shield-in-pulse.svg);
      }
    }

    .note-text {
      font-weight: 300;
      flex-shrink: 0;
      position: relative;
      height: 1.4rem;
    }
  }
</style>
