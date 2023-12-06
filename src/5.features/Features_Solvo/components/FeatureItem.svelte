<script>
	import { t } from "@/utils";
	export let title = "";
	export let text = "";
</script>

<li class="features__item feature">
	<div class="feature_title">
		<span>{@html t(title)}</span>
	</div>
	<div class="feature_text">
		<span>{@html t(text)}</span>
	</div>
</li>

<style lang="scss">
	@import "./src/styles/mixins.scss";

	.features__item {
		padding-left: 5.6rem;
		position: relative;

		&::before {
			content: "";
			position: absolute;
			width: 3.6rem;
			height: 3.6rem;
			top: 50%;
			transform: translateY(-50%);
			left: 0;
			background-size: contain;
			background-position: center;
			background-repeat: no-repeat;
		}
		&:not(:last-child) {
			margin-bottom: 0.6rem;
		}
		&:nth-child(1) {
			&::before {
				background-image: url(@/images/features/solvo-featuse-first.png);
			}
		}
		&:nth-child(2) {
			&::before {
				background-image: url(@/images/features/solvo-featuse-second.png);
			}
		}
		&:nth-child(3) {
			&::before {
				background-image: url(@/images/features/solvo-featuse-third.png);
			}
		}
		&:nth-child(4) {
			&::before {
				background-image: url(@/images/features/solvo-featuse-fourth.png);
			}
		}

		@include iPhonesAfterX {
			&:not(:last-child) {
				margin-bottom: 1.4rem;
			}
		}
	}

	.feature {
		letter-spacing: -0.05rem;
		line-height: 1.45;
		text-align: left;

		&_title {
			font-size: 1.8rem;
			color: #fff;
			font-weight: 700;
		}

		&_text {
			font-size: 1.4rem;
			color: rgba(255, 255, 255, 0.6);
			letter-spacing: -0.07rem;
		}
	}
</style>
