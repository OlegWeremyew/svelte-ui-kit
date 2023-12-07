<script>
	import SubscribesWrapper from '@/10.common-component/SubscribesWrapper.svelte';
	import Subscribes_Nature_ID from '@/3.subscripes/Subscribes_Nature_ID/Subscribes_Nature_ID.svelte';
	import Subscribes_Fonts from '@/3.subscripes/Subscribes_Fonts/Subscribes_Fonts.svelte';
	import Subscribes_Fonts_A from '@/3.subscripes/Subscribes_Fonts_A/Subscribes_Fonts_A.svelte';
	import Subscribes_Ai_Arta from '@/3.subscripes/Subscribes_Ai_Arta/Subscribes_Ai_Arta.svelte';
	import Subscribes_Chat from '@/3.subscripes/Subscribes_Chat/Subscribes_Chat.svelte';
	import Subscribes_Chat_A from '@/3.subscripes/Subscribes_Chat_A/Subscribes_Chat_A.svelte';
	import Subscribes_Ai_Assistant from '@/3.subscripes/Subscribes_Ai_Assistant/Subscribes_Ai_Assistant.svelte';
	import Subscribes_Ai_Keyboard from '@/3.subscripes/Subscribes_Ai_Keyboard/Subscribes_Ai_Keyboard.svelte';
	import Subscribes_Ai_Keyboard_A from '@/3.subscripes/Subscribes_Ai_Keyboard_A/Subscribes_Ai_Keyboard_A.svelte';
	import Subscribes_Nature_ID_A from '@/3.subscripes/Subscribes_Nature_ID_A/Subscribes_Nature_ID_A.svelte';
	import Subscribes_Solvo from '@/3.subscripes/Subscribes_Solvo (no completed)/Subscribes_Solvo.svelte';
	import Subscribes_AI_Arta_A from '@/3.subscripes/Subscribes_AI_Arta_A/Subscribes_AI_Arta_A.svelte';
	import Subscribes_Chat_AA from '@/3.subscripes/Subscribes_Chat_AA/Subscribes_Chat_AA.svelte';
	import Subscripes_On_Skin from '@/3.subscripes/Subscripes_On_Skin/Subscripes_On_Skin.svelte';
	import Subscribes_Wallpapers from '@/3.subscripes/Subscribes_Wallpapers/Subscribes_Wallpapers.svelte';
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
		<Subscripes_On_Skin />
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
