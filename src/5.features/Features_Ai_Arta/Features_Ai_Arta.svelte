<script>
	import { isTrialEnabled } from '@/store/state';
	import FeatureItem from './components/FeatureItem.svelte';

	const features = [
		{ text: '<strong>Unlimited</strong> art creation' },
		{ text: '<strong>Faster</strong> image processing' },
		{ text: '<strong>Ad-free</strong> experience' },
		{ text: '<strong>The best</strong> image quality' },
		{ text: '<strong>UP TO 50% DISCOUNT</strong> <br>on AI Videos and Avatars! 🤩' },
	];
</script>

<section class='features' class:trial={$isTrialEnabled}>
	<div class='section__features features'>
		<div class='container_features divtext'>
			<ul class='features__wrapper'>
				{#each features as { text }, index (index)}
					<FeatureItem {text} />
				{/each}
			</ul>
		</div>
	</div>
</section>

<style lang='scss' global>
  @import "./src/styles/mixins.scss";

  .section__features {
    position: relative;
    width: fit-content;
    max-width: 92%;
    height: auto;
    margin: 0 auto 1.7rem;

    @include iPhonesAfterX {
      margin-bottom: 2.3rem;
    }
  }

  .container_features {
    height: 100%;
    text-align: left;
  }

  .features {
    font-size: 1.65rem;
    line-height: 2.08rem;
    font-weight: 300;
    letter-spacing: -0.025em;
    text-align: start;
    color: #fff;

    @include tabletPortrait {
      font-size: 1.45rem;
    }

    &__wrapper {
      position: relative;
      width: auto;
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      border-radius: 1.5rem;
      margin: 0 auto;
    }
  }
</style>
