# WordAnimation_Chat_On

```javascript
<script>
	import { isShowAnimation } from '@/store/state';
	import { t } from '@/utils';

	let toggleClass = true;
	let running = true;

	$: {
		if ($isShowAnimation) {
			running = true;
			setTimeout(() => {
				toggleClass = !toggleClass;
			}, 3000);
		} else {
			running = false;
		}
	}
</script>

<div class='words__animation'>
	<div class='anim-row-1 row'>
		<div
			class='anim-row-1__item-1 item'
			class:move-right={toggleClass}
			class:move-left={!toggleClass}
			class:running={running}
		>
			<span class='divtext'>{t("Instructor")}</span>
		</div>
		<div
			class='anim-row-1__item-2 item item__main'
			class:move-right={toggleClass}
			class:move-left={!toggleClass}
			class:running={running}
		>
			<span class='divtext'>{t("AI ASSISTANT")}</span>
		</div>
		<div
			class='anim-row-1__item-3 item'
			class:move-right={toggleClass}
			class:move-left={!toggleClass}
			class:running={running}
		></div>
	</div>
	<div class='anim-row-2 row'>
		<div
			class='anim-row-2__item-1 item'
			class:move-right={!toggleClass}
			class:move-left={toggleClass}
			class:running={running}
		></div>
		<div
			class='anim-row-2__item-2 item'
			class:move-right={!toggleClass}
			class:move-left={toggleClass}
			class:running={running}
		>
			<span class='divtext'>{t("Adviser")}</span>
		</div>
		<div
			class='anim-row-2__item-3 item item__main'
			class:move-right={!toggleClass}
			class:move-left={toggleClass}
			class:running={running}
		>
			<span class='divtext'>{t("IN YOUR")}</span>
		</div>
		<div
			class='anim-row-2__item-4 item'
			class:move-right={!toggleClass}
			class:move-left={toggleClass}
			class:running={running}
		>
			<span class='divtext'>{t("Copywriter")}</span>
		</div>
	</div>
	<div class='anim-row-3 row'>
		<div
			class='anim-row-3__item-1 item'
			class:move-right={toggleClass}
			class:move-left={!toggleClass}
			class:running={running}
		>
			<span class='divtext'>{t("Companion")}</span>
		</div>
		<div
			class='anim-row-3__item-2 item item__main'
			class:move-right={toggleClass}
			class:move-left={!toggleClass}
			class:running={running}
		>
			<span class='divtext'>{t("POCKET")}</span>
		</div>
		<div
			class='anim-row-3__item-3 item move-left'
			class:move-right={toggleClass}
			class:move-left={!toggleClass}
			class:running={running}
		></div>
	</div>
</div>

<style lang='scss' global>
  @import "./src/styles/mixins.scss";

  .words__animation {
    margin: 0 auto 7.3rem;
    width: 100%;
    transform: translateZ(0);

    @include phones20Ultra {
      margin-bottom: 4.2rem;
    }

    .row {
      position: relative;
      width: 115%;
      left: 50%;
      transform: translateX(-50%);
      height: 3.3rem;
      display: flex;
      flex-direction: row;
      flex: auto 1 auto;
      gap: 0 1rem;
      margin-bottom: 1.1rem;

      @include phones20Ultra {
        margin-bottom: 1.3rem;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    .item {
      position: relative;
      border-radius: 2rem;
      border: 0.1rem solid white;
      box-sizing: border-box;
      font-size: 1.5rem;
      padding: 0 2rem;
      line-height: 3.3rem;
      -webkit-animation: infinite;
      -webkit-animation-name: moveLeft;
      -webkit-animation-duration: 6s;
      -webkit-animation-timing-function: ease-in-out;
      animation-play-state: paused;

      &__main {
        padding: 0;
        border: none;
        font-size: 2.9rem;
        font-weight: 700;

        @include phones20Ultra {
          font-size: 3rem;
        }
      }
    }

    .running {
      animation-play-state: running;
    }

    .anim-row-1 {
      padding-left: 2rem;
      display: flex;
      flex-direction: row;

      &__item-1 {
        border-color: #0fbf89;
        background: #1f413a;
      }

      &__item-3 {
        width: 100%;
        height: 100%;
      }
    }

    .anim-row-2 {
      &__item-1 {
        width: 100%;
        height: 100%;
      }

      &__item-2 {
        padding: 0 2.8rem;
        border-color: #fb5540;
        background: #4f2b2b;

      }

      &__item-4 {
        border-color: #ff8a1b;
        background: #4f3624;
      }
    }

    .anim-row-3 {
      padding-left: 2rem;

      &__item-1 {
        padding: 0 3.3rem;
        border-color: #427ae5;
        background: #2a334c;
      }

      &__item-3 {
        width: 100%;
        height: 100%;
      }
    }
  }

  .move-left.anim-row-1 {
    &__item-1 {
      animation-delay: 0s;
    }

    &__item-2 {
      animation-delay: 0.4s;
    }

    &__item-3 {
      animation-delay: 0.8s;
    }
  }


  .move-left.anim-row-2 {
    &__item-1 {
      animation-delay: -2.8s;
    }

    &__item-2 {
      animation-delay: -2.4s;
    }

    &__item-3 {
      animation-delay: -2s;
    }

    &__item-4 {
      animation-delay: -1.6s;
    }
  }

  .move-left.anim-row-3 {
    &__item-1 {
      animation-delay: 0.1s;
    }

    &__item-2 {
      animation-delay: 0.5s;
    }

    &__item-3 {
      animation-delay: 0.9s;
    }
  }

  .move-right.anim-row-1 {
    &__item-1 {
      animation-delay: 0.8s;
    }

    &__item-2 {
      animation-delay: 0.4s;
    }

    &__item-3 {
      animation-delay: 0s;
    }
  }

  .move-right.anim-row-2 {
    &__item-1 {
      animation-delay: -1.6s;
    }

    &__item-2 {
      animation-delay: -2s;
    }

    &__item-3 {
      animation-delay: -2.4s;
    }

    &__item-4 {
      animation-delay: -2.8s;
    }
  }

  .move-right.anim-row-3 {
    &__item-1 {
      animation-delay: 0.9s;
    }

    &__item-2 {
      animation-delay: 0.5s;
    }

    &__item-3 {
      animation-delay: 0.1s;
    }
  }

  @keyframes moveLeft {
    0% {
      left: 0;
    }
    10% {
      left: -1.3rem;
    }
    15% {
      left: -1rem;
    }
    50% {
      left: -1rem;
    }
    60% {
      left: 0.3rem;
    }
    65% {
      left: 0;
    }
    100% {
      left: 0;
    }
  }
</style>

```
