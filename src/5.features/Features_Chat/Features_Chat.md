# Features_Chat

```javascript
<script>
	import FeaturesItem from './components/FeatureItem.svelte'
</script>

<section class="features">
	<div class="features__row">
		<FeaturesItem />
		<FeaturesItem text="IMAGE TO TEXT (OCR)" icon="🔠"/>
		<FeaturesItem />
	</div>

	<div class="features__row">
		<FeaturesItem />
		<FeaturesItem text="THE MOST ADVANCED GPT 4.0 & CHATGPT MODELS" icon="🔥"/>
		<FeaturesItem />
	</div>

	<div class="features__row">
		<FeaturesItem />
		<FeaturesItem text="EXTENDED WORD LIMIT" icon="📝"/>
		<FeaturesItem text="AI KEYBOARD" icon="🤖"/>
		<FeaturesItem />
	</div>

	<div class="features__row">
		<FeaturesItem />
		<FeaturesItem text="UNLIMITED CHAT MESSAGES" icon="😱"/>
		<FeaturesItem />
	</div>
</section>

<style lang="scss">
  @import "./src/styles/mixins.scss";

	.features {
		margin: 0 auto 2.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;

		@include iPhonesAfterX {
			margin-bottom: 2.7rem;
		}

		&__row {
			margin-bottom: 1rem;
			display: flex;
			justify-content: center;
			width: fit-content;
		}
	}
	:global(html[lang="hi"]) {
		.features {
			margin-bottom: 1rem;
		}
	}
</style>

```
