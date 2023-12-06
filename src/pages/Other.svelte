<script>
	import OthersWrapper from '@/10.common-component/OthersWrapper.svelte';
	import Other_Images_Switcher_Button_Ai_Art_Android
		from '@/9.others/Other_Images_Switcher_Button_Ai_Art_Android/Other_Images_Switcher_Button_Ai_Art_Android.svelte';
	import Other_Timer_Ai_Keyboard_Ios from '@/9.others/Other_Timer_Ai_Keyboard_Ios/Other_Timer_Ai_Keyboard_Ios.svelte';
	import Other_Ai_Assistant from '@/9.others/Other_Ai_Assistant/Other_Ai_Assistant.svelte';
	import Other_Search_Message from '@/9.others/Other_Search_Message/Other_Search_Message.svelte';
	import Other_Ai_Arta_Palm_Crown from '@/9.others/Other_Ai_Arta_Palm_Crown/Other_Ai_Arta_Palm_Crown.svelte';
	import Other_Chat_Box_Anim from '@/9.others/Other_Chat_Box_Anim/Other_Chat_Box_Anim.svelte';
	import Other_Chat_Box_Anim_A from '@/9.others/Other_Chat_Box_Anim_A/Other_Chat_Box_Anim_A.svelte';
</script>

<section class='page-other'>
	<OthersWrapper appName='ai-keyboard-ios' isWhite>
		<Other_Timer_Ai_Keyboard_Ios />
	</OthersWrapper>

	<OthersWrapper appName='ai-keyboard-ios' isWhiteTitle>
		<Other_Images_Switcher_Button_Ai_Art_Android />
	</OthersWrapper>

	<OthersWrapper appName='ai-arta-android'>
		<Other_Ai_Arta_Palm_Crown />
	</OthersWrapper>

	<OthersWrapper animationText='запустите анимацию' appName='ai-assistant'>
		<Other_Ai_Assistant />
	</OthersWrapper>

	<OthersWrapper animationText='запустите анимацию' appName='ai-assistant' isFull>
		<Other_Search_Message title='Enter the description' question='Female, 20s, blond hair, green eyes' />
	</OthersWrapper>

	<OthersWrapper appName='chat-box-ios' isHeight>
		<Other_Chat_Box_Anim />
	</OthersWrapper>

	<OthersWrapper appName='chat-box-ios' isHeight>
		<Other_Chat_Box_Anim_A />
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
