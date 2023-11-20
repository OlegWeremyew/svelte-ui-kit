<script>
	import OthersWrapper from '@/10.common-component/OthersWrapper.svelte';
	import Other_Images_Switcher_Button_Ai_Art_Android
		from '@/9.others/Other_Images_Switcher_Button_Ai_Art_Android/Other_Images_Switcher_Button_Ai_Art_Android.svelte';
	import Other_Timer_Ai_Keyboard_Ios from '@/9.others/Other_Timer_Ai_Keyboard_Ios/Other_Timer_Ai_Keyboard_Ios.svelte';
	import Other_Ai_Assistant from '@/9.others/Other_Ai_Assistant/Other_Ai_Assistant.svelte';
</script>

<section class='page-other'>
	<OthersWrapper appName='ai-keyboard-ios' isWhite>
		<Other_Timer_Ai_Keyboard_Ios />
	</OthersWrapper>

	<OthersWrapper appName='ai-keyboard-ios' isWhiteTitle>
		<Other_Images_Switcher_Button_Ai_Art_Android />
	</OthersWrapper>

	<OthersWrapper animationText='запустите анимацию' appName='ai-assistant'>
		<Other_Ai_Assistant />
	</OthersWrapper>
</section>

<style lang='scss'>
  @import "./src/styles/mixins.scss";

  .page-other {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
	  flex-wrap: wrap;
  }
</style>
