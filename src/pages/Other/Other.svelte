<script>
	import { OthersWrapper } from '@/10.common-component';
	import {
		Other_Images_Switcher_Button_Ai_Art_Android,
		Other_Timer_Ai_Keyboard_Ios,
		Other_Ai_Assistant,
		Other_Search_Message,
		Other_Ai_Arta_Palm_Crown,
		Other_Chat_Box_Anim,
		Other_Chat_Box_Anim_A,
		Title_On_Skin_A,
		WordAnimation_Chat_On,
	} from '@/9.others'
</script>

<section class='page-other'>
	<OthersWrapper appName='ai-keyboard-ios'>
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

	<OthersWrapper appName='on-skin-ios' isWhite>
		<Title_On_Skin_A />
	</OthersWrapper>

	<OthersWrapper appName='chat-on-is'>
		<WordAnimation_Chat_On />
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
