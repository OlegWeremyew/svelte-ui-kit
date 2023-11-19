<script>
	import { t } from "@/utils";
</script>

<section class="title-wallpapers">
	<div class="title-wallpapers__text">
		<span class="divtext">
			{@html t("<strong>UNLIMITED IDEAS</strong><br> FOR YOUR IPAD")}
		</span>
	</div>
</section>

<style lang="scss">
	@import "./src/styles/mixins.scss";

	.title-wallpapers {
		max-width: 95vw;
		margin: 0 auto 3.6rem;

		&__text {
			font-size: 3.5rem;
			font-weight: 300;
			color: #fff;
			letter-spacing: -0.04rem;

			:global(strong) {
				background: linear-gradient(
					to right,
					rgb(245, 68, 255),
					rgb(38, 114, 255)
				);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
		}

		@include tabletPortraitBig {
			margin-bottom: 5.6rem;
			&__text {
				font-size: 4.5rem;
			}
		}
	}
</style>
