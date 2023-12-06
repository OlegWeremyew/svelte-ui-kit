# Note_Fonts

```javascript
<script>
	import { t } from '@/utils';
</script>

<section class='purchase-container'>
	<div class='purchase-note'>
		<div class='note_no-payment'>
			<div class='note-icon note-icon_shield'></div>
			<div class='note-text'>
				<span>
					{@html t("No payment now")}
				</span>
			</div>
		</div>
	</div>
</section>

<style lang='scss'>
	@import "./src/styles/mixins.scss";

	.purchase-container {
	width: 100%;
	height: 2rem;
	margin: 0 auto;
}

	.purchase-note {
	position: relative;
	width: fit-content;
	font-size: 1.5rem;
	letter-spacing: -0.03rem;
	color: #FFF;
	padding: 0.8rem 1.6rem;
	margin: 0 auto;
	pointer-events: none;
	z-index: 0;

	&::before,
	&::after {
	content: "";
	position: absolute;
	display: block;
	width: 2rem;
	height: 2rem;
	background: rgba(246, 247, 251, 0);
	transition: inherit;
}

	.note {
	&_no-payment {
	font-weight: 500;
	transition: inherit;
}
}

	> div {
	display: flex;
	align-items: center;
	justify-content: center;
}

	.note-icon {
	position: relative;
	top: 0.2rem;
	flex-shrink: 0;
	width: 1.7rem;
	height: 1.7rem;
	background: bottom / contain no-repeat;
	margin-right: 0.5rem;

	@include tabletPortrait {
	width: 1.5rem;
	height: 1.5rem;
}

	&_shield {
	background-image: url(@/images/notes/shield-fonts.svg);
}
}

	.note-text {
	flex-shrink: 0;
	position: relative;
	height: 1.4rem;
}
}
</style>


```
