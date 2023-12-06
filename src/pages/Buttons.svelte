<script>
	import Button_Ai_Art_Android from '@/2.buttons/Button_Ai_Art_Android/Button_Ai_Art_Android.svelte';
	import Button_Ai_Art_Android_A from '@/2.buttons/Button_Ai_Art_Android_A/Button_Ai_Art_Android_A.svelte';
	import Button_Ai_Keyboard_Android from '@/2.buttons/Button_Ai_Keyboard_Android/Button_Ai_Keyboard_Android.svelte';
	import Button_Coin from '@/2.buttons/Button_Coin/Button_Coin.svelte';
	import Button_Lottie from '@/2.buttons/Button_Lottie/Button_Lottie.svelte';
	import Button_Chat_Android from '@/2.buttons/Button_Chat_Android/Button_Chat_Android.svelte';
	import Button_Ai_Art_Android_AA from '@/2.buttons/Button_Ai_Art_Android_AA/Button_Ai_Art_Android_AA.svelte';
	import Button_On_Skin from '@/2.buttons/Button_On_Skin/Button_On_Skin.svelte';
	import Buttons_Nature_ID from '@/2.buttons/Button_Nature_ID/Button_Nature_ID.svelte';
	import Buttons_In_Pulse from '@/2.buttons/Button_In_Pulse/Button_In_Pulse.svelte';
	import ButtonWatchVideo_Iremover from '@/2.buttons/ButtonWatchVideo_Iremover/ButtonWatchVideo_Iremover.svelte';
	import ButtonWatchVideo_Iremover_A from '@/2.buttons/ButtonWatchVideo_Iremover_A/ButtonWatchVideo_Iremover_A.svelte';
	import Button_Fonts from '@/2.buttons/Button_Fonts/Button_Fonts.svelte';
	import Button_Fonts_A from '@/2.buttons/Button_Fonts_A/Button_Fonts_A.svelte';
	import ButtonsWrapper from '@/10.common-component/ButtonsWrapper.svelte';
	import Buttons_Live_Wallpapers from '@/2.buttons/Buttons_Live_Wallpapers/Buttons_Live_Wallpapers.svelte';
	import Buttons_Live_Wallpapers_A from '@/2.buttons/Buttons_Live_Wallpapers_A/Buttons_Live_Wallpapers_A.svelte';
	import Button_Solvo from '@/2.buttons/Button_Solvo/Button_Solvo.svelte';
</script>

<section class='page-buttons'>
	<ButtonsWrapper appName='fonts-android'>
		<Button_Lottie />
	</ButtonsWrapper>

	<ButtonsWrapper appName='ai-art-android'>
		<Button_Ai_Art_Android />
	</ButtonsWrapper>

	<ButtonsWrapper appName='ai-art-android'>
		<Button_Ai_Art_Android_A />
	</ButtonsWrapper>

	<ButtonsWrapper appName='ai-art-android'>
		<Button_Ai_Art_Android_AA />
	</ButtonsWrapper>

	<ButtonsWrapper appName='ai-keyboard-android'>
		<Button_Ai_Keyboard_Android />
	</ButtonsWrapper>

	<ButtonsWrapper appName='coin-id-ios'>
		<Button_Coin />
	</ButtonsWrapper>

	<ButtonsWrapper appName='fonts-android'>
		<Button_Chat_Android />
	</ButtonsWrapper>

	<ButtonsWrapper appName='on-skin-ios'>
		<Button_On_Skin />
	</ButtonsWrapper>

	<ButtonsWrapper appName='nature-id-ios'>
		<Buttons_Nature_ID />
	</ButtonsWrapper>

	<ButtonsWrapper appName='in-pulse-ios'>
		<Buttons_In_Pulse />
	</ButtonsWrapper>

	<ButtonsWrapper appName='in-remover-ios'>
		<ButtonWatchVideo_Iremover />
	</ButtonsWrapper>

	<ButtonsWrapper appName='in-remover-ios'>
		<ButtonWatchVideo_Iremover_A />
	</ButtonsWrapper>

	<ButtonsWrapper appName='fonts-ios'>
		<Button_Fonts />
	</ButtonsWrapper>

	<ButtonsWrapper appName='fonts-ios'>
		<Button_Fonts_A />
	</ButtonsWrapper>

	<ButtonsWrapper appName='wallpapers-ios'>
		<Buttons_Live_Wallpapers />
	</ButtonsWrapper>

	<ButtonsWrapper appName='wallpapers-ios'>
		<Buttons_Live_Wallpapers_A />
	</ButtonsWrapper>

	<ButtonsWrapper appName='solvo-ios'>
		<Button_Solvo />
	</ButtonsWrapper>
</section>

<style lang='scss'>
  @import "./src/styles/mixins.scss";

  .page-buttons {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
