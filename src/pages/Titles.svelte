<script>
	import Title_Ai_Art_Android from '@/4.titles/Title_Ai_Art_Android.svelte';
	import Title_Ai_Art_Android_A from '@/4.titles/Title_Ai_Art_Android_A.svelte';
	import Title_Ai_Keyboard_Android from '@/4.titles/Title_Ai_Keyboard_Android.svelte';
	import Title_Ai_Keyboard_Android_A from '@/4.titles/Title_Ai_Keyboard_Android_A.svelte';
	import Title_Coin from '@/4.titles/Title_Coin.svelte';
	import Title_Chat_Android from '@/4.titles/Title_Chat_Android.svelte';
	import Title_On_Skin from '@/4.titles/Title_On_Skin.svelte';
	import Title_Nature_ID from '@/4.titles/Title_Nature_ID.svelte';
	import Title_In_Pulse from '@/4.titles/Title_In_Pulse.svelte';

	import TitleWrapper from '@/10.common-component/TitleWrapper.svelte';
	import Title_Wallpapers from '@/4.titles/Title_Wallpapers.svelte';
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

	<TitleWrapper appName='coinId-banners' isExtraTitle>
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
		<Title_In_Pulse/>
	</TitleWrapper>

	<TitleWrapper appName='wallpapers-ios'>
		<Title_Wallpapers/>
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