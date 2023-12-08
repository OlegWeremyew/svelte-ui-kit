<script>
	import { currentFrame } from '@/store/state.ts';
</script>

<div class='frames frames_terms' class:show={$currentFrame.name === "terms" && $currentFrame.isVisible}>
	<iframe src='../../terms/en/index.html?popup=true' scrolling='scrolling' title='terms' />
</div>
<div class='frames frames_privacy' class:show={$currentFrame.name === "privacy" && $currentFrame.isVisible}>
	<iframe src='../../privacy/en/index.html?popup=true' scrolling='scrolling' title='privacy' />
</div>
