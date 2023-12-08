<script>
	import { FootersWrapper } from '@/10.common-component';
	import {
		Footer_Fonts,
		Footer_In_Pulse,
		Footer_Ai_Assistant,
		Footers_Terms_Of_Us_And_Prive_Policy_A_Text
	} from '@/7.footers';
</script>

<section class='home'>
	<FootersWrapper appName='in-pulse-ios'>
		<Footer_In_Pulse />
	</FootersWrapper>

	<FootersWrapper appName='fonts-ios' isWhite>
		<Footer_Fonts />
	</FootersWrapper>

	<FootersWrapper appName='ai-assistant' isFull>
		<Footer_Ai_Assistant />
	</FootersWrapper>
	<FootersWrapper appName='ai-arta-android'>
		<Footers_Terms_Of_Us_And_Prive_Policy_A_Text />
	</FootersWrapper>
</section>
