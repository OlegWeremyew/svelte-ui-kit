# Footer_Ai_Assistant

```javascript
<script>
	import { currentFrame } from '@/store/state';
	import { getCallbackDomain, sendMultipleCallbacks, setIframeEvents, t } from '@/utils';
	import { restorePurchaseStat } from '@/config';

	function handleTermsButtonClick() {
	currentFrame.update(() => ({ name: 'terms', isVisible: true }));
	setIframeEvents($currentFrame.name);
}

	function handlePrivacyButtonClick() {
	currentFrame.update(() => ({ name: 'privacy', isVisible: true }));
	setIframeEvents($currentFrame.name);
}

	function handleRestoreButtonClick() {
	sendMultipleCallbacks([
		restorePurchaseStat(),
		`${getCallbackDomain()}/getpremium/restore`,
	]);
}
</script>

<footer>
	<div class='links'>
		<!-- svelte-ignore a11y-missing-attribute -->
		<a
			href='javascript:void(0);'
			class='ai-assistant-link terms'
			on:click={handleTermsButtonClick}
		>
			<span class='divtext'>
				{t("Terms of Use")}
			</span>
		</a>
		<!-- svelte-ignore a11y-missing-attribute -->
		<a
			href='javascript:void(0);'
			class='ai-assistant-link privacy'
			on:click={handlePrivacyButtonClick}
		>
			<span class='divtext'>
				{t("Privacy Policy")}
			</span>
		</a>
		<!-- svelte-ignore a11y-missing-attribute -->
		<a
			href='javascript:void(0);'
			class='ai-assistant-link restore'
			on:click={handleRestoreButtonClick}
		>
			<span>
				{@html t("Restore")}
			</span>
		</a>
	</div>
</footer>

<style lang='scss'>
	@import "./src/styles/mixins.scss";

	.links {
	position: relative;
	width: 95%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	font-size: 1.3rem;
	color: rgba(255, 255, 255, 0.3) !important;
	margin: 0 auto 1rem;

	@include iPhonesAfterX {
	margin-bottom: 1.4rem;
}

	:global(.ai-assistant-link) {
	position: relative;
	max-width: calc(100% / 2);
}

	:global(.ai-assistant-link > span) {
	text-decoration: underline;
}
}
</style>

```
