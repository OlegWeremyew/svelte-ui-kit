# Features_Chat_A

```javascript
<script>
	import { t } from "@/utils";
</script>

<section class="features">
	<ul class="features__list">
		<li class="features__item feature">
			<div class="feature__icon feature__icon_star">⭐</div>
			<div class="feature__text">
				<span class="divtext">
					{@html t("Unlimited chat messages")}
				</span>
			</div>
		</li>
		<li class="features__item feature">
			<div class="feature__icon feature__icon_rocket">🚀</div>
			<div class="feature__text">
				<span class="divtext">
					{@html t("Faster GPT-4 model")}
				</span>
			</div>
		</li>
		<li class="features__item feature">
			<div class="feature__icon feature-icon__confetti">🎉</div>
			<div class="feature__text">
				<span class="divtext">
					{@html t("Ad-free experience")}
				</span>
			</div>
		</li>
		<li class="features__item feature">
			<div class="feature__icon feature__icon_robot">🤖</div>
			<div class="feature__text">
				<span class="divtext">
					{@html t("Powered by ChatGPT")}
				</span>
			</div>
		</li>
	</ul>
</section>

<style lang="scss">
	@import "./src/styles/mixins.scss";

	.features {
		width: 100%;
		margin-bottom: 2.1rem;
		display: flex;
		justify-content: center;

		@include phones20Ultra {
			margin-bottom: 7rem;
		}

		&__list {
			background-color: #101010;
			border-radius: 2.6rem;
			border-bottom-left-radius: 0;
			padding: 2.4rem 2.8rem;
			box-shadow: inset 0 -1px 8px #0000004c;
			max-width: 95vw;

			@include phones20Ultra {
				padding: 3rem 3.1rem 3rem 2.5rem;
			}
		}

		&__item {
			margin-bottom: 0.15rem;

			@include phones20Ultra {
				margin-bottom: 0.65rem;
			}

			&:last-child {
				margin-bottom: 0;
			}
		}
	}

	.feature {
		display: flex;
		align-items: center;

		&__text {
			position: relative;
			font-size: 1.7rem;
			font-weight: 700;
			text-align: left;
			width: 86%;
		}

		&__icon {
			font-size: 2.4rem;
			margin-right: 1.6rem;
		}
	}
</style>

```
