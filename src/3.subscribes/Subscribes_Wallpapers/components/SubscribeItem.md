# SubscribeItem (Subscribes_Wallpapers)

```javascript
<script>
	import preloaderAnimation from "@/images/lottie/loader.json";
	import { onMount } from "svelte";
	import lottie from "lottie-web";

	export let durationText = null,
		leftPriceText = null,
		rightPriceText = null,
		isActive = false;

	let item;

	onMount(() => {
		let loaders = item.querySelectorAll(".loader");

		loaders.forEach((loader) => {
			lottie.loadAnimation({
				container: loader, // the dom element that will contain the animation
				renderer: "svg",
				loop: true,
				autoplay: true,
				animationData: preloaderAnimation, // the path to the animation json
			});
		});
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="wallpapers-subscribes-item" class:active={isActive} bind:this={item}>
	<div class="wallpapers-subscribes-item__checkbox"></div>

	<div class="wallpapers-subscribes-item__text">
		<div class="wallpapers-subscribes-item__left">
			<div class="wallpapers-subscribes-item__duration">
				<span>
					{@html durationText}
				</span>
			</div>
			{#if leftPriceText}
				<div class="wallpapers-subscribes-item__price">
					<span class="divtext">
						{@html leftPriceText}
					</span>
				</div>
			{/if}
		</div>
		<div class="wallpapers-subscribes-item__right">
			<span class="divtext">
				{@html rightPriceText}
			</span>
		</div>
	</div>
</div>

<style lang="scss">
	@import "./src/styles/mixins.scss";

	.wallpapers-subscribes-item {
		position: relative;
		border: 0.1rem solid #fff;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 3rem;
		width: 30.5rem;
		height: 6.2rem;
		padding: 0 2rem 0 4.9rem;

		&__checkbox {
			position: absolute;
			left: 2rem;
			top: 50%;
			transform: translateY(-50%);
			height: 1.83rem;
			width: 1.83rem;
			background: url(@/images/subscribes/wallpapers-checkbox_off.svg) center / contain
				no-repeat;
		}

		&__text {
			font-size: 1.5rem;
			color: #fff;
			line-height: 1.25;
			letter-spacing: -0.07rem;
			text-align: left;
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			height: 100%;
		}

		&__right {
			flex: 0 1 35%;
		}

		&__duration {
			font-size: 1.5rem;
			font-weight: 500;
		}

		&__price {
			vertical-align: bottom;
		}

		&.active {
			background-color: rgb(10, 132, 255, 0.1);
			border-color: rgb(10, 132, 255);

			.wallpapers-subscribes-item__checkbox {
				background-image: url(@/images/subscribes/wallpapers-checkbox_on.svg);
			}
		}
	}
</style>

```
