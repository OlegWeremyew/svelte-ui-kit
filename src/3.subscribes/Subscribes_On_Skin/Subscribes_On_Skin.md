# Subscribes_On_Skin

```javascript
<script>
	import {
		activeSubscription,
		isSwitcherActive,
		isWeekSubscription,
		subscriptions,
		weekPrice,
		yearPrice,
		yearPriceByWeek,
	} from '@/store/state';
	import { t } from '@/utils';

	const setActiveSubscription = () => ({
		period: $isSwitcherActive ? 'weekTrial' :
			$isWeekSubscription ? 'week' : 'year',

		inapp: $isSwitcherActive ? $subscriptions.weekTrial :
			$isWeekSubscription ? $subscriptions.week : $subscriptions.year,
	});

	function handleChangeActiveSubscription(status) {
		if (!status) {
			isSwitcherActive.update(() => false);
		}

		isWeekSubscription.update(() => status);

		activeSubscription.update(() => ({
			period: setActiveSubscription().period,
			inapp: setActiveSubscription().inapp,
		}));
	}
</script>

<section class='on-skin-subscribe'>
	<div
		class='on-skin-subscribe-item'
		class:active={!$isWeekSubscription}
		on:click={()=>handleChangeActiveSubscription(false)}
	>
		<div
			class='on-skin-checkbox'
			class:active={!$isWeekSubscription}
		></div>
		<div class='on-skin-subscribe-text'>
			<div class='on-skin-left-content'>
            <span class='divtext'>
              {t('Yearly access')}
            </span>
				<span class='divtext on-skin-price'>
              {@html t('Just {{price}} per year', { price: $yearPrice })}
            </span>
			</div>
			<div class='on-skin-right-content'>
            <span class='divtext on-skin-price on-skin-year-price'>
              {@html t('{{price}} <br>per week', { price: $yearPriceByWeek })}
            </span>
			</div>
		</div>
		<div class='on-skin-subscribe-label'>
			<div class='on-skin-label-text'>
            <span class='divtext'>
                 {t('Best Value')}
            </span>
			</div>
		</div>
	</div>

	<div
		class='on-skin-subscribe-item'
		class:active={$isWeekSubscription }
		on:click={()=>handleChangeActiveSubscription(true)}
	>
		<div
			class='on-skin-checkbox'
			class:active={$isWeekSubscription}
		></div>
		<div class='on-skin-subscribe-text'>
			<div class='on-skin-left-content'>
				{#if ($isSwitcherActive)}
            <span class='divtext'>
              {t('3-Day Free Trial')}
            </span>
				{:else }
            <span class='divtext'>
               {t('Weekly access')}
            </span>
				{/if}
			</div>
			<div class='on-skin-right-content'>
				{#if ($isSwitcherActive)}
            <span class='divtext on-skin-price'>
              {@html t('then {{price}} <br>per week', { price: "22.20" })}
            </span>
				{:else }
            <span class='divtext on-skin-price'>
              {@html t('{{price}} <br>per week', { price: $weekPrice })}
            </span>
				{/if}
			</div>
		</div>
	</div>
</section>

<style lang='scss' global>
  @import "./src/styles/mixins.scss";

  .on-skin-subscribe {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.4rem;

    @include iPhonesAfterX {
      margin-bottom: 1rem;
    }

    .on-skin-subscribe-item {
      box-sizing: border-box;
      flex-shrink: 0;
      position: relative;
      display: grid;
      grid-template-columns: 12% 87%;
      grid-gap: 1%;
      align-items: center;
      width: 34.3rem;
      height: 5.8rem;
      padding: 0 1rem 0 2rem;
      border-radius: 1.7rem;
      border: 0.15rem solid rgba(112, 133, 123, 0.17);
      background: rgba(255, 255, 255, 0.5);
      color: rgb(13, 16, 25);
      backdrop-filter: blur(1rem);
      margin: 0 auto 0.4rem;

      @include iPhonesAfterX {
        width: 35.8rem;
        margin-bottom: 0.7rem;
      }

      &:last-child {
        margin-bottom: 0;
      }

      &.active {
        background-color: rgba(221, 230, 225, 0.5);
        border: 0.15rem solid rgb(184, 201, 186);
      }

      .on-skin-checkbox {
        position: relative;
        display: flex;
        width: 2.4rem;
        height: 2.4rem;
        background: url(@/images/subscribes/on-skin-check-empty.png) no-repeat center / 2.4rem;

        &.active {
          background: url(@/images/subscribes/on-skin-check-fill.png) no-repeat center / 2.4rem;
        }
      }
    }

    .on-skin-subscribe-text {
      width: 100%;
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 1.7rem;
      font-weight: 600;
      text-align: left;

      .on-skin-price {
        font-size: 1.4rem;
        line-height: 1.7rem;
        font-weight: 500;
      }

      @include tabletPortrait {
        font-size: 1.27rem;
      }

      span {
        margin: 0 0.15rem;
      }
    }

    .on-skin-subscribe-label {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: -1.2rem;
      right: 2.5rem;
      width: 7.7rem;
      height: 2.4rem;

      background-color: rgb(239, 245, 242);
      border-radius: 0.7rem;

      .on-skin-label-text {
        position: relative;
        text-transform: uppercase;
        font-size: 0.9rem;
        line-height: 2rem;
        font-weight: 700;
        color: #fff;
        width: 7.2rem;
        height: 2rem;
        border-radius: 0.6rem;
        background: rgb(0, 122, 255);
        background: linear-gradient(0deg, rgba(0, 122, 255, 1) 0%, rgba(0, 178, 255, 1) 100%);
        box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 144, 255, 0.46);
      }
    }
  }

  .on-skin-left-content {
    min-width: 19rem;

    @include iPhonesAfterX {
      min-width: 19rem;
      margin-right: 0.5rem;
    }
  }

  .on-skin-right-content {
    max-width: 9rem;

    @include iPhonesAfterX {
      max-width: 8.5rem;
    }
  }
</style>

```
