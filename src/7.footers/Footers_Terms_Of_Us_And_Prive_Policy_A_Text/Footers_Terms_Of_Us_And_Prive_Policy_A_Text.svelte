<script>
	import { setIframeEvents, t } from '@/utils';
	import { onMount } from 'svelte';
	import { currentFrame } from '@/store/state.ts';

	let ppAndTouBlock;

	onMount(() => {
		//in our case ppAndTouBlock = [br, a, a]
		ppAndTouBlock.children[1].addEventListener('click', () => {
      alert('terms link was shaw')
			currentFrame.update(() => ({ name: 'terms', isVisible: true }));
			setIframeEvents($currentFrame.name);
		});

		ppAndTouBlock.children[2].addEventListener('click', () => {
      alert('privacy link was shaw')
			currentFrame.update(() => ({ name: 'privacy', isVisible: true }));
			setIframeEvents($currentFrame.name);
		});
	});
</script>

<p class='ai-arta-terms-and-pp'>
  <span bind:this={ppAndTouBlock} class='divtext'>
    {@html t("By proceeding, you accept our <br><a>Terms of use</a> and <a>Privacy policy</a>")}
  </span>
</p>


<style lang='scss'>
  @import "./src/styles/iframe.scss";
  @import "./src/styles/mixins.scss";

  .ai-arta-terms-and-pp {
    margin: 1.3rem auto 0;
    color: #FFFFFF;
    opacity: 0.5;
    font-size: 1.4rem;
    line-height: 1.75rem;
    width: 34rem;

    @include phones20Ultra {
      margin-top: 0.9rem;
      font-size: 1.2rem;
    }

    :global(span > a) {
      text-decoration: underline;
    }
  }
</style>
