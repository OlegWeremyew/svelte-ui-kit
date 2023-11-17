<script>
import { t } from '@/utils';
</script>

<section class="title">
	<div class="title-text">
		{@html t("Get extra <strong>free days</strong> <br>of 🔥AI superpower")}
	</div>
</section>

<style lang="scss">
  @import "../styles/mixins";

  .title {
    width: 100%;
    margin-bottom: 1.3rem;
  }

  .title-text {
    position: relative;
    width: 95%;
    font-size: 2.8rem;
    font-weight: 700;
    margin: 0 auto;
  }

  .title-text :global(strong) {
    color: rgb(27, 211, 168);
  }

  @include iPhonesAfterX {
    .title {
      margin-bottom: 2.7rem;
    }

    .title-text {
      font-size: 3.4rem;
    }
  }
</style>
