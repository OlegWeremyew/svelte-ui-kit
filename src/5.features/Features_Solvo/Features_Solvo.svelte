<script>
	import FeatureItem from "./components/FeatureItem.svelte";
	const features = [
		{ title: "<strong>Math Explanations</strong>", text: "Get expert help for your math challenges" },
		{ title: "<strong>Unlimited Requests</strong>", text: "Boost your knowledge without boundaries" },
		{ title: "<strong>Instant Responses</strong>", text: "Receive correct answers here and now" },
		{ title: "<strong>Powered by ChatGPT</strong>", text: "Step into the future of smart assistance" },
	];
</script>

<section class="features">
	<div class="features__wrapper">
		<ul class="features__list divtext">
			{#each features as { title, text }, index (index)}
				<FeatureItem {title} {text} />
			{/each}
		</ul>
	</div>
</section>

<style lang="scss">
	@import "./src/styles/mixins.scss";
	.features {
		margin-bottom: 1.5rem;
		width: 100%;

		@include iPhonesAfterX {
			margin-bottom: 3rem;
		}
		&__wrapper {
			margin: 0 auto;
			width: 30.9rem;

			@include iPhonesAfterX {
				width: 32.5rem;
			}
		}
		&__list {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
