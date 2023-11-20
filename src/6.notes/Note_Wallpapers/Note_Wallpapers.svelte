<script>
	import { t } from "@/utils";
	import { isTrialAvailable } from "@/store/state";

</script>

<section class="purchase-container">
	{#if $isTrialAvailable}
		<div class="purchase-note">
			<div class="note-icon note-icon_npm"></div>
			<div class="note-text">
				<span>{t("No payment now")}</span>
			</div>
		</div>
	{:else if !$isTrialAvailable}
		<div class="purchase-note">
			<div class="note-icon note-icon_cancel"></div>
			<div class="note-text">
				<span>{t("Cancel anytime")}</span>
			</div>
		</div>
	{/if}
</section>

<style lang="scss">
	@import "./src/styles/mixins.scss";

	.purchase-container {
		width: 100%;
		height: 2rem;
		margin: 0 auto;
	}

	.purchase-note {
		margin: 0 auto;

		display: flex;
		align-items: center;
		justify-content: center;

		.note-icon {
			position: relative;
			width: 1.4rem;
			height: 1.7rem;
			background: center / contain no-repeat;
			margin-right: 0.8rem;

			&_npm {
				background-image: url(@/images/notes/shield-green-wallpapers.png);
			}

			&_cancel {
				background-image: url(@/images/notes/shield-pink-wallpapers.png);
			}
		}

		.note-text {
			color: #fff;
			font-size: 1.3rem;
			font-weight: 400;
			letter-spacing: -0.02rem;
		}
	}
</style>
