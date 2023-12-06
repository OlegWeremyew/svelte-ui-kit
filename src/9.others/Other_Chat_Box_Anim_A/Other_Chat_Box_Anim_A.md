#Other_Chat_Box_Anim_A

```javascript
<script>
	import { t } from "@/utils";
	import { isShowAnimation } from '@/store/state';

	let animatedClass;

	$: {
	if ($isShowAnimation) {
	animatedClass = true;
}
}
</script>

<section class='screen third-screen' class:animatedClass>
	<div class='third-screen__tools'>
		<div class='tool tool_1'>
			<div class='tool__icon tool__icon_1'></div>
			<div class='title-container'>
				<span class='tool__title divtext'>{@html t("Image <br>Generator")}</span>
			</div>
		</div>
		<div class='tool tool_2'>
			<div class='tool__icon tool__icon_2'></div>
			<div class='title-container'>
				<span class='tool__title divtext'>{@html t("Smart <br>AI Camera")}</span>
			</div>
		</div>
		<div class='tool tool_3'>
			<div class='tool__icon tool__icon_3'></div>
			<div class='title-container'>
				<span class='tool__title divtext'>{@html t("Text <br>Summarizer")}</span>
			</div>
		</div>
		<div class='tool tool_4'>
			<div class='tool__icon tool__icon_4'></div>
			<div class='title-container'>
				<span class='tool__title divtext'
				>{@html t("Object <br>Identifier")}</span>
			</div>
		</div>
	</div>
</section>

<style lang='scss'>
	@import "./src/styles/mixins.scss";

	.third-screen {

	&__tools {
	position: relative;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-column-gap: 0;
	grid-row-gap: 0;

	@include iPhonesAfterX {
	bottom: 12.8rem;
}

	.tool {
	position: relative;
	width: 100%;
	height: 8rem;
	padding-bottom: 97.5%;
	padding-right: 2rem;
	border: 0.1rem solid transparent;

	@include iPhonesAfterX {
	padding-bottom: 106%;
}

	&:nth-child(2n + 1) {
	padding-left: 4.2rem;
	right: -0.1rem;

	@include iPhonesAfterX {
	padding-left: 3.3rem;
}
}

	&:nth-child(2n) {
	padding-left: 3.2rem;
	@include iPhonesAfterX {
	padding-left: 3.5rem;
}
}

	&__icon {
	margin-top: 4.4rem;
	width: 2.8rem;
	height: 2.8rem;

	@include iPhonesAfterX {
	margin-top: 4.9rem;
	width: 3.3rem;
	height: 3.2rem;

	&_2 {
	margin-top: 5.3rem;
}
}
}

	&:nth-child(3),
	&:nth-child(4) {
	top: -0.1rem;
}

	&:nth-child(1),
	&:nth-child(4) {
	.tool__icon {
	margin-left: -3.1rem;
	margin-top: 0.4rem;
	width: 12.2rem;
	height: 12.2rem;
	@include iPhonesAfterX {
	margin-left: -3.5rem;
	margin-top: 0.2rem;
	width: 13.5rem;
	height: 14rem;
}
}
}

	&__title {
	position: absolute;
	bottom: 2.7rem;
	width: 100%;
	font-size: 1.8rem;
	font-weight: 500;
	line-height: 2rem;
	letter-spacing: -0.02rem;

	@include iPhonesAfterX {
	font-size: 2rem;
	bottom: 3.2rem;
	line-height: 2.2rem;
}
}

	&_1 {
	grid-area: 1 / 1 / 2 / 2;
	border: 0.1rem solid rgba(255, 255, 255, 0.18);
	border-radius: 6rem 0 0 0;
}

	&_2 {
	grid-area: 1 / 2 / 2 / 3;
}

	&_3 {
	grid-area: 2 / 1 / 3 / 2;
}

	&_4 {
	grid-area: 2 / 2 / 3 / 3;
	border: 0.1rem solid rgba(255, 255, 255, 0.18);
	border-radius: 0 0 6rem 0;
}
}
}
}

	.title-container {
	position: absolute;
	width: 75%;
	height: 100%;
	bottom: 0;
}

	@for $j from 1 through 4 {
	.tool__icon_#{$j} {
	background: url(@/images/others/chat-box-tool_#{$j}.png) no-repeat center /
	contain;
	transform: scale(0.6);
	animation: 0.6s upscale2 0.5s ease-in-out forwards;
	animation-play-state: paused;
}
}

	.animatedClass {
	.tool__icon_1,
	.tool__icon_2,
	.tool__icon_3,
	.tool__icon_4,
	.third-screen__tools::before,
	.third-screen__tools::after {
	animation-play-state: running;
}
}

	.tool__icon_1 {
	animation-delay: 0.3s;
}

	.tool__icon_2 {
	animation-delay: 0.4s;
}

	.tool__icon_3 {
	animation-duration: 0.8s;
}

	.tool__icon_4 {
	animation-delay: 0.6s;
	animation-duration: 0.9s;
}

	@keyframes upscale {
	0% {
		opacity: 0;
		transform: scale(0.01);
	}

	70% {
	transform: scale(1.2);
}

	100% {
	opacity: 1;
	transform: scale(1);
}
}

	@keyframes upscale2 {
	0% {
		transform: scale(0.6);
	}

	70% {
	transform: scale(1.05);
}

	100% {
	transform: scale(1);
}
}
</style>

```
