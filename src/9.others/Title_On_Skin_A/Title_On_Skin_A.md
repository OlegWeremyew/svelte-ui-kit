#Title_On_Skin_A

```javascript
<script>
	import { isFirstRender } from '@/store/state.ts';
	import { t } from '@/utils';
</script>

<section class='on-skin-heading'>

	<div class='on-skin-heading__image' class:beforeInit={$isFirstRender}>
	</div>
	<div class='on-skin-heading__title' class:beforeInit={$isFirstRender}>
		{t('OnSkin PRO')}
	</div>
	<div class='on-skin-heading__subtitle' class:beforeInit={$isFirstRender}>
		{t('Know what touches your skin')}
	</div>
</section>

<style lang='scss'>
  @import "./src/styles/mixins.scss";

  .on-skin-heading {
    margin-bottom: 2.4rem;

    @include iPhonesAfterX {
      margin-bottom: 2.7rem;
    }

    &__image {
      height: 8rem;
      width: 8rem;
      margin: 0 auto 1.6rem;
      opacity: 1;
      transition: 1.5s;
      background: url(@/images/titles/on-skin-logo.png) no-repeat center / contain;

      &.beforeInit {
        opacity: 0;
        transform: scale(1.43);
      }
    }

    &__title {
      font-size: 3.5rem;
      font-weight: 700;
      font-family: 'PT Serif', serif;
      letter-spacing: -0.07rem;
      color: #000;
      opacity: 1;
      transition: 1.5s;

      &.beforeInit {
        opacity: 0;
        transform: scale(1.43);
      }
    }

    &__subtitle {
      font-size: 1.8rem;
      font-weight: 500;
      letter-spacing: -0.01rem;
      color: rgb(112, 133, 123);
      opacity: 1;
      transition: 1.5s;

      &.beforeInit {
        opacity: 0;
        transform: scale(1.43);
      }
    }
  }
</style>

```
