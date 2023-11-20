# Subscribes_Ai_Arta

```javascript
<script>
	import { isTrialEnabled, activeSubscription, subscriptions, isSwitcherActive } from '@/store/state';
	import { t } from '@/utils';
	import { yearPrice, weekPrice, ratedPrice } from '@/store/state';

	const getWeekTrial = () => $isSwitcherActive ? 'aiart.sub.gr2.1w3trial_5' : 'aiart.sub.gr2.1w_7';

	const setActiveSubscription = () => ({
	period: $isTrialEnabled ? 'week' : 'year',
	inapp: $isTrialEnabled ? getWeekTrial() : $subscriptions.year,
});

	function handleChangeActiveSubscription(status) {
	if (!status) {
	isSwitcherActive.update(() => false);
}

	isTrialEnabled.update(() => status);
	activeSubscription.update(() => ({
	period: setActiveSubscription().period,
	inapp: setActiveSubscription().inapp,
}));
}
</script>

<section class='subscribe'>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class='subscribe-item' class:active={!$isTrialEnabled }
			 on:click={()=>handleChangeActiveSubscription(false)}>
		<div class='subscribe-arta-text'>
			<div class='divtext year-container'>
				<span>
					{t("YEARLY ACCESS")}
				</span>
				<span class='price1y'>
					{@html t("Just {{price}} per year", {
						price: $yearPrice,
					})}
				</span>
			</div>
		</div>
		<div class='subscribe-arta-price'>
			<span class='divtext'>
				{@html t("{{price}} <br>per week", {
					price: $ratedPrice,
				})}
			</span>
		</div>
		<div class='subscribe-label' class:active={!$isTrialEnabled}>
			<div class='subscribe-label-wrapper'>
				<div class='label-text divtext'>
					<span>
						{t("BEST OFFER")}
					</span>
				</div>
			</div>
		</div>
	</div>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class='subscribe-item subscribe-item--weekly' class:active={$isTrialEnabled}
			 on:click={()=>handleChangeActiveSubscription(true)}>
		<div class='subscribe-arta-text'>
			<span
				class='divtext fw-600'
				class:hidden={!$isSwitcherActive}
			>
				{t("3-DAY FREE TRIAL")}
			</span>
			<span class='divtext fw-600' data-i18n='Weekly Plan' />
			<span
				class='divtext  fw-600'
				class:hidden={$isSwitcherActive}>
				{t("WEEKLY ACCESS")}
			</span>

		</div>
		<div class='subscribe-arta-price'>
			<span
				class='divtext'
				class:hidden={!$isSwitcherActive}
			>
				{@html t("then {{price}} <br>per week", {
					price: "34.34",
				})}
			</span>
			<span
				class='divtext'
				class:hidden={$isSwitcherActive}
			>
				{@html t("{{price}} <br>per week", {
					price: $weekPrice,
				})}
			</span>
		</div>
	</div>
</section>

<style lang='scss'>
	@import "./src/styles/mixins.scss";

	.subscribe {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 0.8rem;
	@include iPhonesAfterX {
	margin-bottom: 1.6rem;
}

	.subscribe-item {
	box-sizing: border-box;
	flex-shrink: 0;
	position: relative;
	display: grid;
	grid-template-columns: 64% 32%;
	grid-gap: 3%;
	align-items: center;
	width: 32.7rem;
	height: 5.6rem;
	padding: 0 1.5rem;
	border-radius: 3.2rem;
	border: 0.1rem solid transparent;
	background: rgba(255, 255, 255, 0.15);
	color: #fff;
	backdrop-filter: blur(0.4rem);
	margin: 0 auto 0.8rem;

	&:first-child {
	background: url(@/images/subscribes/subscribe-ai-arta.png);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	@include iPhonesAfterX {
	background-image: url(@/images/subscribes/subscribe13-ai-arta.png);
}
}

	@include iPhonesAfterX {
	width: 34.2rem;
}

	&:last-child {
	margin-bottom: 0;
}

	&.active {
	border: 0.1rem solid rgb(255, 255, 255);
	background: rgba(255, 255, 255, 0.3);
	backdrop-filter: blur(0.4rem);

}
}

	.price1y {
	color: rgba(255, 255, 255, 0.7);
}

	.subscribe-arta-text,
	.subscribe-arta-price {
	position: relative;
	width: 100%;
	align-items: center;
	font-size: 1.6rem;
	text-align: left;

	.year-container {
	display: flex;
	flex-direction: column;
}

	.trial_active {
	position: static;
	visibility: visible;
	pointer-events: auto;
}

	.no_trial_active {
	position: absolute;
	visibility: hidden;
	pointer-events: none;
}

	.fw-600 {
	font-weight: 600;
}

	span {
	margin: 0 0.15rem;
}
}

	.subscribe-arta-price {
	text-align: left;
	font-size: 1.6rem;
	color: rgba(255, 255, 255, 0.7);
	line-height: 110%;

}

	.subscribe-label {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 12rem;
	height: 2rem;
	right: 2rem;
	font-size: 1.3rem;
	font-weight: 700;
	top: 0rem;
	transform: translateY(-60%);
	background: linear-gradient(to right, rgb(188, 31, 239), rgb(0, 53, 255));
	border-radius: 1rem;
	z-index: 3;

	&-wrapper {
	width: 96%;
	margin: 0 auto;
}

	&::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	box-sizing: border-box;
	z-index: 2;
	inset: 0;
	width: 100%;
	height: 100%;
	padding: 0.1rem;
	border-radius: inherit;
	background: linear-gradient(to right, rgb(255, 150, 244), rgba(145, 134, 221, 0), rgb(0, 181, 255));
	-webkit-mask: linear-gradient(#fff 0 0) content-box,
	linear-gradient(#fff 0 0);
	mask: linear-gradient(#fff 0 0) content-box,
	linear-gradient(#fff 0 0);
	-webkit-mask-composite: xor;
	mask-composite: exclude;
}
}

	.subscribe-label.active {
	color: rgb(20, 17, 49);
	background: rgb(255, 255, 255);

	&::before {
	background: transparent;
}
}
}

	.hidden {
	position: absolute;
	visibility: hidden;
	pointer-events: none;
}
</style>

```
