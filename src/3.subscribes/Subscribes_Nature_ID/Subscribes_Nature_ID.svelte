<script>
	import {
		isTrialEnabled,
		activeSubscription,
		subscriptions,
		isSwitcherActive,
		yearPrice,
		weekPrice,
		yearPriceByWeek,
	} from '@/store/state';
	import { t } from '@/utils';

	const setActiveSubscription = () => ({
		period: $isTrialEnabled ? 'week' : 'year',
		inapp: $isTrialEnabled ? $subscriptions.week : $subscriptions.year,
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
	<div
		class='subscribe-item'
		class:active={$isTrialEnabled }
		on:click={()=>handleChangeActiveSubscription(true)}
	>
		<div class='subscribe-text'>
			<div class='left-content'>
				{#if ($isSwitcherActive)}
          <span class='divtext no_trial__visibility'>
            {t('3-DAY FREE TRIAL')}
          </span>
				{:else }
          <span class='divtext no_trial__visibility'>
               {t('WEEKLY PLAN')}
          </span>
				{/if}
				<span class='divtext no_trial__visibility--active'>
               {t('WEEKLY PLAN')}
          </span>
			</div>
			<div class='right-content'>
				{#if ($isSwitcherActive)}
          <span class='divtext no_trial__visibility'>
            {@html t('then <strong>{{price}}</strong><br>per week', { price: $weekPrice })}
          </span>
				{:else }
          <span class='divtext no_trial__visibility'>
            {@html t('<strong>{{price}}</strong><br>per week', { price: $weekPrice })}
          </span>
				{/if}
				<span class='divtext  no_trial__visibility--active'>
           {@html t('<strong>{{price}}</strong><br>per week', { price: $weekPrice })}
          </span>
			</div>
		</div>

		<div
			class='checkbox'
			class:active={$isTrialEnabled}
		></div>
	</div>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class='subscribe-item'
		class:active={!$isTrialEnabled}
		on:click={()=>handleChangeActiveSubscription(false)}
	>
		<div class='subscribe-text'>
			<div class='left-content'>
            <span class='divtext'>
              {t('YEARLY PLAN')}
            </span>
				<span class='divtext price'>
              {@html t('<strong>{{price}}</strong> per year', { price: $yearPrice })}
            </span>
			</div>
			<div class='right-content'>
            <span class='divtext price year-price'>
                 {@html t('<strong>{{price}}</strong><br>per week', { price: $yearPriceByWeek })}
            </span>
			</div>
		</div>
		<div
			class='checkbox'
			class:active={!$isTrialEnabled}
		></div>

		<div class='subscribe-label'>
			<div class='label-text'>
        <span class='divtext'>
           {t('BEST VALUE')}
        </span>
			</div>
		</div>
	</div>
</section>

<style lang='scss' global>
  @import "./src/styles/mixins.scss";

  .subscribe {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: -0.4rem;

    @include iPhonesAfterX {
      margin-bottom: 0;
    }

    .subscribe-item {
      box-sizing: border-box;
      flex-shrink: 0;
      position: relative;
      display: grid;
      grid-template-columns: 84% 12.5%;
      grid-gap: 3%;
      align-items: center;
      width: 32.3rem;
      height: 5.6rem;
      padding: 0 2rem;
      border-radius: 2.9rem;
      border: 0.1rem solid rgb(191, 207, 207);
      background: rgba(255, 255, 255, 1);
      color: rgb(0, 64, 64);
      backdrop-filter: blur(0.4rem);
      margin: 0 auto 0.8rem;

      @include iPhonesAfterX {
        grid-template-columns: 85% 12.5%;
        width: 34.3rem;
        margin-bottom: 1.2rem;
      }

      &:last-child {
        margin-bottom: 0;
      }

      &.active {
        background-color: rgb(242, 234, 223);
        border: 0.1rem solid rgb(255, 160, 63);
      }

      .checkbox {
        position: relative;
        display: flex;
        left: 1.8rem;

        width: 2.4rem;
        height: 2.4rem;
        border: 0.15rem solid rgb(191, 207, 207);
        border-radius: 50%;
        transition: 0.1s linear;

        @include iPhonesAfterX {
          width: 2.2rem;
          height: 2.2rem;
          border: 0.1rem solid rgb(191, 207, 207);
        }

        &.active {
          border: 0.15rem solid rgb(255, 153, 56);

          @include iPhonesAfterX {
            border: 0.1rem solid rgb(255, 153, 56);
          }

          &:after {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            content: "";
            width: 80%;
            height: 80%;
            border-radius: 50%;
            background-color: rgb(255, 153, 56);
          }
        }
      }
    }

    .subscribe-text {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.7rem;
      text-align: left;

      @include tabletPortrait {
        font-size: 1.27rem;
      }

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

      span {
        margin: 0 0.15rem;
      }
    }

    .subscribe-price {
      text-align: left;
      font-size: 1.35rem;
    }

    .subscribe-label {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: -0.55rem;
      right: 2.5rem;
      width: 10rem;
      height: 1.4rem;
      background: url(@/images/subscribes/label_nature_id.svg) center / contain no-repeat;
      font-size: 0.9rem;
      font-weight: 700;
      color: #fff;

      .label-text {
        position: relative;
        width: 75%;
        margin: 0 auto;
      }
    }
  }

  .year-price {
    strong {
      font-weight: 400;
    }
  }

  .left-content {
    min-width: 15rem;
    width: 15rem;

    @include iPhonesAfterX {
      min-width: 19rem;
      margin-right: 0.5rem;
    }
  }

  .right-content {
    font-size: 1.6rem;
    min-width: 10rem;
    width: 10rem;
    margin-left: 1.5rem;

    @include iPhonesAfterX {
      max-width: 8.5rem;
    }
  }
</style>
