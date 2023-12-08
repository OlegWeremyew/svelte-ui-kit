<script>
	export let firstLineText = null,
		secondLineText = null,
		badgeText = null,
		isActive = false;
</script>

<div class="subscribe-item" class:active={isActive}>
	<div class="subscribe-item__text">
		<div class="subscribe-item__line">
			<span class="divtext">
				{@html firstLineText}
			</span>
		</div>
		<div class="subscribe-item__line subscribe-item__line_bold">
			<span class="divtext">
				{@html secondLineText}
			</span>
		</div>
	</div>

	<div class="subscribe-item__checkbox"></div>

	{#if badgeText}
		<div class="subscribe-item__badge">
			{@html badgeText}
		</div>
	{/if}
</div>

<style lang="scss">
	@import "./src/styles/mixins.scss";

	.subscribe-item {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 30.7rem;
		height: 5.6rem;
		padding: 0 2.3rem;
		border-radius: 1.6rem;
		border: 0.1rem solid rgb(73,73,73);
		background: rgba(255, 255, 255, 0);
		color: #fff;

		@include iPhonesAfterX {
			width: 32.2rem;
		}

		&__text {
			font-size: 1.6rem;
			font-weight: 400;
			color: #fff;
			line-height: 1.3;
			letter-spacing: -0.03rem;
			text-align: left;
		}

		&__line {

			&_bold {
				font-weight: 600;
			}
		}

		&__badge {
			padding: 0 2.2rem;
			position: absolute;
			z-index: 10;
			display: flex;
			align-items: center;
			justify-content: center;
			top: 0;
			right: 4rem;
			transform: translateY(-41%);
			background: rgb(135, 31, 255);
			font-size: 1.3rem;
			line-height: 1.9rem;
			font-weight: 700;
			letter-spacing: -0.04rem;
			border-radius: 1rem;
		}

		&__checkbox {
			position: relative;
			width: 2rem;
			height: 2rem;
			border: 0.15rem solid rgba(255, 255, 255, 0.25);
			border-radius: 50%;
			transition: 0.1s linear;
		}

		&.active {
			background: rgba(174, 241, 97, 0.15);
			border-color: rgb(174, 241, 97);


			.subscribe-item__checkbox {
				border: 0.15rem solid rgb(174, 241, 97);

				&:after {
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
					content: "";
					width: 80%;
					height: 80%;
					border-radius: 50%;
					background-color: rgb(174, 241, 97);
				}
			}
		}
	}
</style>
