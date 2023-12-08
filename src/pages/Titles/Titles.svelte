<script>
	import { TitleWrapper } from '@/10.common-component';
	import {
		Title_Ai_Art_Android,
		Title_Ai_Art_Android_A,
		Title_Ai_Keyboard_Android,
		Title_Ai_Keyboard_Android_A,
		Title_Coin,
		Title_Chat_Android,
		Title_On_Skin,
		Title_Nature_ID,
		Title_In_Pulse,
		Title_Wallpapers,
		Title_Solvo,
		Title_Ai_Art_Android_AA
	} from '@/4.titles';
</script>

<section class='page page--titles'>
	<TitleWrapper appName='ai-art-android'>
		<Title_Ai_Art_Android />
	</TitleWrapper>

	<TitleWrapper appName='ai-art-android'>
		<Title_Ai_Art_Android_A />
	</TitleWrapper>

	<TitleWrapper appName='ai-keyboard-android'>
		<Title_Ai_Keyboard_Android />
	</TitleWrapper>

	<TitleWrapper appName='ai-keyboard-android'>
		<Title_Ai_Keyboard_Android_A />
	</TitleWrapper>

	<TitleWrapper appName='coinId-banners'>
		<Title_Coin />
	</TitleWrapper>

	<TitleWrapper appName='chat-android'>
		<Title_Chat_Android />
	</TitleWrapper>

	<TitleWrapper appName='on-skin-ios'>
		<Title_On_Skin />
	</TitleWrapper>

	<TitleWrapper appName='nature-id-ios' isWhite>
		<Title_Nature_ID />
	</TitleWrapper>

	<TitleWrapper appName='in-pulse-ios'>
		<Title_In_Pulse />
	</TitleWrapper>

	<TitleWrapper appName='wallpapers-ios'>
		<Title_Wallpapers />
	</TitleWrapper>

	<TitleWrapper appName='solvo-ios'>
		<Title_Solvo />
	</TitleWrapper>

	<TitleWrapper appName='ai-arta-android'>
		<Title_Ai_Art_Android_AA />
	</TitleWrapper>
</section>

<style lang='scss'>
  @import "./src/styles/mixins.scss";

  .page--titles {
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>
