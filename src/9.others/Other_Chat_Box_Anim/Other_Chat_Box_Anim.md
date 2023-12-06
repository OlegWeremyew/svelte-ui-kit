#Other_Chat_Box_Anim

```javascript
<script>
	import { t } from '@/utils';
	import { isShowAnimation } from '@/store/state';

	let animatedClass;

	$: {
		if ($isShowAnimation) {
			animatedClass = true;
		}
	}
</script>

<section class='screen second-screen' class:animatedClass>
	<div class='second-screen__features'>
		<ul class='features-list'>
			<li class='feature-item'>
				<div class='feature feature_1'>
					<span class='divtext'>{@html t("CREATE ANY TEXT")}</span>
					<div class='feature-icon feature-icon_1 right'></div>
				</div>
			</li>
			<li class='feature-item'>
				<div class='feature feature_2'>
					<div class='feature-icon feature-icon_2 left' ></div>
					<span class='divtext'>{@html t("SIMPLIFY CONCEPTS")}</span>
				</div>
				<div class='ovals-container'>
					<div class='oval oval_4'></div>
					<div class='oval oval_3'></div>
					<div class='oval oval_2'></div>
					<div class='oval oval_1'></div>
				</div>
				<div class='feature feature_empty'></div>
			</li>
			<li class='feature-item'>
				<div class='feature feature_7'>
					<div class='feature-icon feature-icon_7 left'></div>
				</div>
				<div class='feature feature_3'>
					<div class='feature-icon feature-icon_3 left'></div>
					<span class='divtext'>{@html t("MAKE SUMMARIES")}</span>
				</div>
			</li>
			<li class='feature-item'>
				<div class='feature feature_4'>
					<span class='divtext'>{@html t("DEAL WITH HOMEWORK")}</span>
					<div class='feature-icon feature-icon_4 right'></div>
				</div>
			</li>
			<li class='feature-item'>
				<div class='star-container'></div>
				<div class='feature feature_5'>
					<div class='feature-icon feature-icon_5 left'></div>
					<span class='divtext'>{@html t("GENERATE IMAGES")}</span>
				</div>
			</li>
			<li class='feature-item'>
				<div class='feature feature_6'>
					<span class='divtext'>{@html t("BRAINSTORM IDEAS")}</span>
					<div class='feature-icon feature-icon_6'></div>
				</div>
				<div class='feature feature_more'>
					<span class='divtext'>{@html t("and much <br>more...")}</span>
				</div>
			</li>
		</ul>
	</div>
</section>


<style lang='scss'>
  @import "./src/styles/mixins";

  .second-screen {
    overflow: hidden;

    &__features {
      position: relative;
      margin-bottom: 0.7rem;
     // margin-bottom: 14.7rem;

      @include iPhonesAfterX {
        //margin-bottom: 12.6rem;
        margin-bottom: 0.6rem;
      }

      .feature-item {
        padding: 0;
        margin: 0;
        height: 6.2rem;
        display: flex;
        flex-wrap: nowrap;
        flex-shrink: 0;

        @include iPhonesAfterX {
          height: 6.9rem;
        }

        &:nth-of-type(2n + 1) {
          justify-content: flex-end;
        }

        &:nth-of-type(1) {
          padding: 0 1.6rem;
          @include iPhonesAfterX {
            padding: 0 1.1rem;
          }
        }

        &:nth-of-type(2) {
          width: 150%;
        }

        &:nth-of-type(3) {
          opacity: 0;
          animation: 0.5s moveRight 0.6s ease-in-out forwards;
          animation-play-state: paused;
        }

        &:nth-of-type(4) {
          opacity: 0;
          animation: 0.5s moveRight 0.75s ease-in-out forwards;
          animation-play-state: paused;
        }

        &:nth-of-type(5) {
          opacity: 0;
          animation: 0.5s moveRight 0.9s ease-in-out forwards;
          animation-play-state: paused;
          @include iPhonesAfterX {
            padding: 0 0.6rem;
          }
        }

        &:nth-of-type(6) {
          opacity: 0;
          animation: 0.5s moveRight 1.05s ease-in-out forwards;
          animation-play-state: paused;
        }
      }
    }
  }

  .feature {
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    width: fit-content;
    border: 0.1rem solid rgba(255, 255, 255, 0.18);
    border-radius: 4rem;
    padding: 0 3.1rem;
    font-size: 1.63rem;
    height: 6.3rem;
    line-height: 6.1rem;
    color: #fff;
    text-align: center;

    @include iPhonesAfterX {
      font-size: 1.8rem;
      height: 7rem;
      line-height: 6.8rem;
      padding: 0 2.9rem;
    }

    &_1 {
      opacity: 0;
      animation: 0.5s moveLeft 0.2s ease-in-out forwards;
      animation-play-state: paused;
    }

    &_2 {
      opacity: 0;
      animation: 0.5s moveLeft 0.35s ease-in-out forwards;
      animation-play-state: paused;
      @include iPhonesAfterX {
        padding: 0 2.4rem 0 1.6rem;
      }
    }

    &_6 {
      position: relative;
      max-width: 65%;
    }

    &_empty {
      opacity: 0;
      padding: 0 8rem;
      animation: 0.5s moveRight 0.45s ease-in-out forwards;
      animation-play-state: paused;
    }

    &_more {
      padding: 0 8rem 0 2.8rem;
      font-size: 1.25rem;
      line-height: 1.6rem;
      text-align: left;
    }
  }

  [lang="fr"],
  [lang="it"] {
    .second-screen {
      .feature {
        font-size: 1.6rem;

        &_more {
          font-size: 1.25rem;
          line-height: 1.6rem;
        }
      }
    }
  }

  [lang="nl"] {
    .second-screen {
      .feature {
        font-size: 1.4rem;

        &_more {
          font-size: 1.25rem;
          line-height: 1.6rem;
        }
      }
    }
  }

  [lang="ja"] {
    .second-screen {
      .feature {
        font-size: 1.6rem;

        &_6 {
          max-width: 60%;
        }

        &_more {
          font-size: 1.25rem;
          line-height: 1.6rem;
        }
      }
    }
  }

  .feature-icon {
    display: inline-block;
    margin-top: 1rem;
    width: 5.2rem;
    height: 5.2rem;

    @include iPhonesAfterX {
      width: 5.6rem;
      height: 6rem;
    }

    &.left {
      margin-left: 0.3rem;
      margin-right: -0.2rem;

      @include iPhonesAfterX {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }

  @for $j from 1 through 7 {
    .feature-icon_#{$j} {
      background: url('@/images/features/chat-box-feature_#{$j}.png') no-repeat center /
        cover;
    }
  }

  .feature-icon_7 {
    margin-top: 0;
    background-size: contain;
  }

  .ovals-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 0.5rem;
    width: 4.3rem;
    height: 100%;
    @include iPhonesAfterX {
      width: 5rem;
      padding-bottom: 0.8rem;
    }

    .oval {
      height: 2.4rem;
      margin-top: -1.48rem;
      border: 0.15rem solid rgb(72, 237, 109);
      border-radius: 50%;
      opacity: 0;
      animation: 0.5s ovalStack 0.2s ease-in-out forwards;
      animation-play-state: paused;

      @include iPhonesAfterX {
        height: 2.5rem;
      }
    }

    @for $j from 1 through 4 {
      .oval_#{$j} {
        animation-delay: #{0.35 + ($j * 0.1)}s;
      }
    }
  }

  .star-container {
    width: 4.7rem;
    margin: 0 0.2rem;
    height: 100%;
    background: url(@/images/features/chat-box-star.png) no-repeat center / contain;
    opacity: 0;
    animation: 0.6s rotation 1s ease-in-out forwards;
    animation-play-state: paused;

    @include iPhonesAfterX {
      width: 5.3rem;
    }
  }

  @keyframes moveLeft {
    0% {
      opacity: 0;
      transform: translateX(-3rem);
    }

    100% {
      opacity: 1;
      transform: translateX(0rem);
    }
  }

  @keyframes moveRight {
    0% {
      opacity: 0;
      transform: translateX(2rem);
    }

    100% {
      opacity: 1;
      transform: translateX(0rem);
    }
  }

  @keyframes ovalStack {
    0% {
      opacity: 0;
      transform: translateY(-2rem);
    }

    100% {
      opacity: 1;
      transform: translateY(0rem);
    }
  }

  @keyframes rotation {
    0% {
      opacity: 0;
      transform: rotate(100deg);
    }

    100% {
      opacity: 1;
      transform: rotate(0deg);
    }
  }

  @keyframes rotationCross {
    0% {
      opacity: 0;
      transform: rotate(-200deg);
    }

    100% {
      opacity: 1;
      transform: rotate(-23deg);
    }
  }

  .animatedClass {
    .feature_1,
    .feature_2,
    .feature_empty,
    .feature-item:nth-of-type(3),
    .feature-item:nth-of-type(4),
    .feature-item:nth-of-type(5),
    .feature-item:nth-of-type(6),
    .star-container,
    .second-screen__features::before,
    .oval {
      animation-play-state: running;
    }
  }
</style>

```
