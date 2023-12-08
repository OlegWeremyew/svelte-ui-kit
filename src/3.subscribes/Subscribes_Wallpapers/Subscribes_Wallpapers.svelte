<script>
	import {
		yearPriceRatedLoader,
		weekPriceLoader,
		weekPriceTrialLoader,
		isTrialEnabled,
		activeSubscription,
	} from '@/store/state';
	import SubscribeItem from './components/SubscribeItem.svelte';
	import { t } from '@/utils';

	function handleChangeActiveSubscription(type) {
		activeSubscription.set(type);
	}

</script>

<section class='wallpapers-subscribes'>
	<div
		class='wallpapers-subscribes__item'
		on:click={() => handleChangeActiveSubscription("week")}
	>
		<SubscribeItem
			durationText={$isTrialEnabled ? t("3-DAY FREE TRIAL") : t("1 WEEK")}
			rightPriceText={`<strong>
				${
					$isTrialEnabled
						? t("then {{price}}<br>per week", { price: $weekPriceTrialLoader })
						: t("{{price}}<br>per week", { price: $weekPriceLoader })
				}
			</strong>`}
			isActive={$activeSubscription !== "year"}
		/>
	</div>
	<div
		class='wallpapers-subscribes__item'
		on:click={() => handleChangeActiveSubscription("year")}
	>
		<SubscribeItem
			durationText={t("1 YEAR")}
			leftPriceText={t("<strong>{{price}}</strong> per year", {
				price: $yearPriceRatedLoader,
			})}
			rightPriceText={t("{{price}}<br>per week", { price: $yearPriceRatedLoader })}
			isActive={$activeSubscription === "year"}
		/>
	</div>
</section>

<style lang='scss'>
  @import "./src/styles/mixins.scss";

  .wallpapers-subscribes {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.8rem;

    &__item {
      margin-bottom: 1.2rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
