<script>
	import { onMount } from 'svelte';
	import { sendMultipleCallbacks, t } from '@/utils';
	import { closeBannerStat } from '@/config.ts';
	import { bannerId } from '@/store/state.ts';

	let timerInterval = null;
	let minutes = '';
	let seconds = '';

	function startTimer() {
		if (timerInterval) return;

		const timerTime = new Date().getTime() + new Date(0).setMinutes(2); // Set the date we're counting down to

		timerInterval = setInterval(() => {
			const now = new Date().getTime();
			const distance = timerTime - now;

			if (distance <= 0) {
				clearInterval(timerInterval);
				// sendMultipleCallbacks([
				// 	closeBannerStat($bannerId),
				// 	'http://callback.io/close',
				// ]);
				return false;
			}

			minutes = String(
				Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
			).padStart(2, '0');

			seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0',);
		}, 333);
	}

	onMount(() => {
		startTimer();
	});
</script>

<section class='timer'>
	<div class='timer__text'>
    <span>
      {@html t("The offer expires in <br><strong>{{timer}}</strong>", {
				timer: `<div class='timer__container'>
								<div class='timer__number min'>${minutes}</div>
								<div class='timer__separator'>:</div>
								<div class='timer__number sec'>${seconds}</div>
						  </div>`,
			})}
    </span>
	</div>
</section>

<style lang='scss' global>
  @import "./src/styles/mixins";

  .timer {
    margin-bottom: 3.2rem;

    &__text {
      font-size: 1.24rem;
      color: rgba(0, 0, 0, 0.29);
      line-height: 3.8rem;

      @include iPhonesAfterX {
        font-size: 1.4rem;
        line-height: 4.3rem;
      }
    }

    &__container {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__number {
      width: 49px;
      height: 49px;
      border-radius: 1.1rem;
      background-color: rgba(195, 239, 219, 0.26);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 700;
      box-shadow: inset 0 1px 9px rgba(188, 188, 188, 0.46),
      0 0 20px rgba(255, 255, 255, 1);
      position: relative;
      color: #000;

      @include iPhonesAfterX {
        font-size: 2.34rem;
        width: 5.7rem;
        height: 5.7rem;
      }
    }

    &__separator {
      margin: 0 1.2rem;
      font-size: 2.04rem;
      color: #000;
    }
  }
</style>
