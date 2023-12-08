<script>
	import { yearPrice, weekPrice } from "@/store/state";
	import SubscribeItem from "./components/SubscribeItem.svelte";
	import { calculateSale, t } from "@/utils";
	import { activeSubscription, isTrialEnabled } from "@/store/state";

	function handleChangeActiveSubscription(type) {
		if ($activeSubscription == "weekTrial" && type === "week") return;
		activeSubscription.set(type);
	}

	$: isTrial = isTrialEnabled && $activeSubscription === "weekTrial";
</script>

<section class="subscribes">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="subscribes__item"
		on:click={() => handleChangeActiveSubscription("year")}
	>
		<SubscribeItem
			firstLineText={t("YEARLY ACCESS")}
			secondLineText={t("{{price}}/year", { price: $yearPrice })}
			badgeText={t("SAVE {{n}}%", { n: calculateSale($yearPrice, $weekPrice) })}
			isActive={$activeSubscription === "year"}
		/>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="subscribes__item"
		class:hidden={$activeSubscription === "weekTrial"}
		on:click={() => handleChangeActiveSubscription("week")}
	>
		<SubscribeItem
			firstLineText={t("WEEKLY ACCESS")}
			secondLineText={t("{{price}}/week", { price: $weekPrice })}
			isActive={$activeSubscription === "week"}
		/>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="subscribes__item"
		class:hidden={!isTrial}
		on:click={() => handleChangeActiveSubscription("weekTrial")}
	>
		<SubscribeItem
			firstLineText={t("3-DAY FREE TRIAL")}
			secondLineText={t("then {{price}}/week", { price: $weekPrice })}
			isActive={$activeSubscription === "weekTrial"}
		/>
	</div>
</section>

<style lang="scss">
	@import "./src/styles/mixins.scss";

	.subscribes {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 0.4rem;

		&__item {
			&:first-child {
				margin-bottom: 0.4rem;
			}

			&.hidden {
				opacity: 0;
				position: absolute;
				visibility: hidden;
			}
		}

		@include iPhonesAfterX {
			margin-bottom: 0.75rem;

			&__item {
				&:first-child {
					margin-bottom: 0.75rem;
				}
			}
		}
	}
</style>
