<script>
	import { SubscribesWrapper } from '@/10.common-component';
	import {
		Subscribes_Nature_ID,
		Subscribes_Fonts,
		Subscribes_Fonts_A,
		Subscribes_Ai_Arta,
		Subscribes_Chat,
		Subscribes_Chat_A,
		Subscribes_Ai_Assistant,
		Subscribes_Ai_Keyboard,
		Subscribes_Ai_Keyboard_A,
		Subscribes_Nature_ID_A,
		Subscribes_Solvo,
		Subscribes_AI_Arta_A,
		Subscribes_Chat_AA,
		Subscribes_On_Skin,
		Subscribes_Wallpapers,
	} from '@/3.subscribes';
</script>

<section class='home'>
	<SubscribesWrapper appName='nature-id-ios'>
		<Subscribes_Nature_ID />
	</SubscribesWrapper>

	<SubscribesWrapper appName='wallpapers-ios'>
		<Subscribes_Wallpapers />
	</SubscribesWrapper>

	<SubscribesWrapper appName='fonts-ios' isWhite>
		<Subscribes_Fonts />
	</SubscribesWrapper>

	<SubscribesWrapper appName='fonts-ios'>
		<Subscribes_Fonts_A />
	</SubscribesWrapper>

	<SubscribesWrapper appName='ai-arta-ios'>
		<Subscribes_Ai_Arta />
	</SubscribesWrapper>

	<SubscribesWrapper appName='chat-ios'>
		<Subscribes_Chat />
	</SubscribesWrapper>

	<SubscribesWrapper appName='chat-android'>
		<Subscribes_Chat_A />
	</SubscribesWrapper>

	<SubscribesWrapper appName='ai-assistant'>
		<Subscribes_Ai_Assistant />
	</SubscribesWrapper>

	<SubscribesWrapper appName='ai-keyboard'>
		<Subscribes_Ai_Keyboard />
	</SubscribesWrapper>

	<SubscribesWrapper appName='ai-keyboard-android'>
		<Subscribes_Ai_Keyboard_A />
	</SubscribesWrapper>

	<SubscribesWrapper appName='nature-id-ios'>
		<Subscribes_Nature_ID_A />
	</SubscribesWrapper>

	<SubscribesWrapper appName='solvo-ios'>
		<Subscribes_Solvo />
	</SubscribesWrapper>

	<SubscribesWrapper appName='ia-arta-andriod'>
		<Subscribes_AI_Arta_A />
	</SubscribesWrapper>

	<SubscribesWrapper appName='chat-on-ios'>
		<Subscribes_Chat_AA />
	</SubscribesWrapper>

	<SubscribesWrapper appName='on-skin-ios' isWhite>
		<Subscribes_On_Skin />
	</SubscribesWrapper>
</section>

<style lang='scss'>
  .home {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
  }
</style>
