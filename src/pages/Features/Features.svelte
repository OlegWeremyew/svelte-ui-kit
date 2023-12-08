<script>
	import { FeaturesWrapper } from '@/10.common-component';
	import {
		Features_Chat,
		Features_Ai_Arta,
		Features_Chat_A,
		Features_Ai_Keyboard,
		Features_Solvo,
		Features_Ai_Keyboard_A,
		Features_Ai_Keyboard_AA,
	} from '@/5.features';
</script>

<section class='features-home'>
	<FeaturesWrapper appName='chat-ios'>
		<Features_Chat />
	</FeaturesWrapper>

	<FeaturesWrapper appName='ai-arta-ios'>
		<Features_Ai_Arta />
	</FeaturesWrapper>

	<FeaturesWrapper appName='chat-android'>
		<Features_Chat_A />
	</FeaturesWrapper>

	<FeaturesWrapper appName='ai-keyboard-ios'>
		<Features_Ai_Keyboard />
	</FeaturesWrapper>

	<FeaturesWrapper appName='solvo-ios'>
		<Features_Solvo />
	</FeaturesWrapper>

	<FeaturesWrapper appName='ai-keyboard-ios'>
		<Features_Ai_Keyboard_A />
	</FeaturesWrapper>

	<FeaturesWrapper appName='ai-keyboard-ios' isWhite>
		<Features_Ai_Keyboard_AA />
	</FeaturesWrapper>
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
