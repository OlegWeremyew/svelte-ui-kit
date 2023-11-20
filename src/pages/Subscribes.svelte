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
</script>

<section class='home'>
	<SubscribesWrapper appName='nature-id-ios'>
		<Subscribes_Nature_ID />
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
</section>

<style lang='scss'>
	.home {
		display: flex;
		justify-content: center;
		align-items: start;
		flex-wrap: wrap;
  }
</style>
