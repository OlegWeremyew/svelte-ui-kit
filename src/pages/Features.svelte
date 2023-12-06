<script>
	import Features_Chat from '@/5.features/Features_Chat/Features_Chat.svelte';
	import Features_Ai_Arta from '@/5.features/Features_Ai_Arta/Features_Ai_Arta.svelte';
	import Features_Chat_A from '@/5.features/Features_Chat_A/Features_Chat_A.svelte';
	import Features_Ai_Keyboard from '@/5.features/Features_Ai_Keyboard/Features_Ai_Keyboard.svelte';
	import Features_Solvo from '@/5.features/Features_Solvo/Features_Solvo.svelte';
	import Features_Ai_Keyboard_A from '@/5.features/Features_Ai_Keyboard_A/Features_Ai_Keyboard_A.svelte';
	import Features_Ai_Keyboard_AA from '@/5.features/Features_Ai_Keyboard_AA/Features_Ai_Keyboard_AA.svelte';
</script>

<section class='features-home'>
	<div class='features-wrapper'>
		<h2 class='features-title'> app - chat-ios</h2>
		<Features_Chat />
	</div>

	<div class='features-wrapper'>
		<h2 class='features-title'> app - ai-arta-ios</h2>
		<Features_Ai_Arta />
	</div>

	<div class='features-wrapper'>
		<h2 class='features-title'> app - chat-android</h2>
		<Features_Chat_A />
	</div>

	<div class='features-wrapper'>
		<h2 class='features-title'> app - ai-keyboard-ios</h2>
		<Features_Ai_Keyboard />
	</div>

	<div class='features-wrapper'>
		<h2 class='features-title'> app - solvo-ios</h2>
		<Features_Solvo />
	</div>

	<div class='features-wrapper'>
		<h2 class='features-title'> app - ai-keyboard-ios</h2>
		<Features_Ai_Keyboard_A />
	</div>

	<div class='features-wrapper'>
		<h2 class='features-title'> app - ai-keyboard-ios</h2>
		<Features_Ai_Keyboard_AA />
	</div>
</section>

<style lang='scss'>
  @import "./src/styles/mixins.scss";

  .features-home {
    display: flex;
	  flex-wrap: wrap;
	  justify-content: center;
  }

  .features-wrapper {
	  min-width: 450px;
    width: auto;
    padding: 2rem;
    border: 1px solid gray;
    border-radius: 2rem;
    margin: 0.5rem;
	  text-align: left;
  }

  .features-title {
    margin-bottom: 1rem;
  }
</style>
