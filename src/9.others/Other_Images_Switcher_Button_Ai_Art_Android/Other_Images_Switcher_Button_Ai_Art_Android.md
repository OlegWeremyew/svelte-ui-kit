# Other_Images_Switcher_Button_Ai_Art_Android

```javascript
<script>
	import { onDestroy, onMount } from 'svelte';
	import { t } from '@/utils';

	let interval = null;
	let count = 0;

	onMount(() => {
		interval = setInterval(() => {

			if (count === 2) {
				count = -1;
			}
			count += 1;

		}, 3000);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class='images'>
	<div class='images-row'>
		<div class='image-wrapper'>
			<div
				class='around'
				class:active={count === 0}
			>
				<div class='small-image small-image--1'></div>
			</div>
			<p
				class='image-text'
				class:active={count === 0}
			>
				<span class='divtext'>{@html t("Digital Art")}</span>
			</p>
		</div>
		<div class='image-wrapper'>
			<div
				class='around'
				class:active={count === 1}
			>
				<div class='small-image small-image--2'></div>
			</div>
			<p
				class='image-text'
				class:active={count === 1}
			>
				<span class='divtext'>{@html t("Anime")}</span>
			</p>
		</div>
		<div class='image-wrapper'>
			<div
				class='around'
				class:active={count === 2}
			>
				<div class='small-image small-image--3'></div>
			</div>
			<p
				class='image-text'
				class:active={count === 2}
			>
				<span class='divtext'>{@html t("High Fantasy")}</span>
			</p>
		</div>
	</div>
	<div class='alone-images'>
		<div class='big-img'></div>
	</div>
</div>


<style lang='scss'>
  @import "../src/styles/mixins";

  .images {
    display: flex;
    justify-content: space-between;
    margin-bottom: -1.1rem;

    @include phones20Ultra {
      margin-bottom: -0.7rem;
    }

    @include tabletPortrait {
      width: 38rem;
      margin: 0 auto;
    }

    .images-row {
      display: flex;
      width: 19.5rem;
      justify-content: space-between;
      align-items: center;

      .image-wrapper {
        margin-top: -0.4rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        @include phones20Ultra {
          margin-top: -1rem;
        }

        .around {
          border-radius: 50%;
          width: 6.2rem;
          height: 6.2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.1s linear;

          @include phones20Ultra {
            width: 6.7rem;
            height: 6.7rem;
          }

          &.active {
            position: relative;
            z-index: 2;
            background-image: url(@/images/others/circle.svg);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }

          .small-image {
            width: 79%;
            height: 79%;

            &--1 {
              background-image: url(@/images/others/round-icon-1.png);
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
            }

            &--2 {
              background-image: url(@/images/others/round-icon-2.png);
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
            }

            &--3 {
              background-image: url(@/images/others/round-icon-3.png);
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
            }
          }
        }

        .image-text {
          margin-top: 0.5rem;
          font-size: 0.8rem;
          color: #FFFFFF;
          opacity: 0.5;
          transition: 0.1s linear;
          letter-spacing: -0.03rem;
          font-weight: 600;

          &.active {
            opacity: 1;
          }
        }
      }
    }

    .alone-images {
      position: relative;
      z-index: 2;
      left: 0.3rem;
      width: 11.8rem;
      height: 11.8rem;
      border-radius: 50%;
      background-image: url(@/images/others/circle.svg);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      @include phones20Ultra {
        width: 12rem;
        height: 12rem;
      }

      .big-img {
        width: 100%;
        height: 100%;
        background-image: url(@/images/others/round-icon-big.png);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        transform: scale(1.3);
      }
    }
  }


  :global(html[lang='de']) {
    .images {
      margin-bottom: 0;
    }
  }
</style>

```
