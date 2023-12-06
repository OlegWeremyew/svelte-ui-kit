# Button_On_Skin

```javascript
<script>
	import { activeSubscription, bannerId } from "@/store/state";
	import { sendMultipleCallbacks, t, getCallbackDomain } from "@/utils";
	import { Subscribes } from "@/config";
	import ArrowRight from "@/images/buttons/solvo-arrow-right.svg";

	const handlePurchase = () => {
	sendMultipleCallbacks([
		`${getCallbackDomain()}/getpremium/${
			Subscribes[$activeSubscription]
		}?banner_id=${$bannerId}`,
	]);
};
</script>

<section class="solvo-buttons">
	<button
		id="purchase"
		type="button"
		class="solvo-continue-button"
		on:click={handlePurchase}
	>
		<span class="solvo-button-text">{t("Continue")}</span>
		<div class="solvo-buttons__icon">
			<img class='solvo-img' src={ArrowRight} alt="arrow" />
		</div>
	</button>
</section>

<style lang="scss">
	@import "./src/styles/mixins";

	.solvo-buttons {
	margin-bottom: 0.8rem;

	.solvo-buttons__icon {
	position: absolute;
	width: 2rem;
	height: 2rem;
	top: 50%;
	right: 2.5rem;
	animation: 0.8s shift linear infinite;

	.solvo-img {
	width: 100%;
	height: 100%;
	object-fit: contain;
}
}

	@include iPhonesAfterX {
	margin-bottom: 0.7rem;
}
}

	.solvo-continue-button {
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 1.6rem;
	position: relative;
	width: 30.7rem;
	height: 5.6rem;
	font-size: 1.5rem;
	font-weight: 600;
	color: rgb(0, 0, 0);
	background: rgb(174, 241, 97);
	margin: 0 auto;

	@include iPhonesAfterX {
	width: 32.2rem;
}

	@keyframes shift {
	0% {
	transform: translate(-0.5rem) translateY(-50%);
}

	50% {
	transform: translate(0.5rem) translateY(-50%);
}

	100% {
	transform: translate(-0.5rem) translateY(-50%);
}
}
}
</style>

```
