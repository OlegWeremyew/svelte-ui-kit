<script>
import FootersWrapper from '@/10.common-component/FootersWrapper.svelte';
import Footer_Fonts from '@/7.footers/Footer_Fonts/Footer_Fonts.svelte';
import Footer_In_Pulse from '@/7.footers/Footer_In_Pulse/Footer_In_Pulse.svelte';
import Footer_Ai_Assistant from '@/7.footers/Footer_Ai_Assistant/Footer_Ai_Assistant.svelte';
import Footers_Terms_Of_Us_And_Prive_Policy_A_Text from '@/7.footers/Footers_Terms_Of_Us_And_Prive_Policy_A_Text/Footers_Terms_Of_Us_And_Prive_Policy_A_Text.svelte';
</script>

<section class='home'>
	<FootersWrapper appName='in-pulse-ios'>
		<Footer_In_Pulse/>
	</FootersWrapper>

	<FootersWrapper appName='fonts-ios' isWhite>
		<Footer_Fonts/>
	</FootersWrapper>

	<FootersWrapper appName='ai-assistant' isFull>
		<Footer_Ai_Assistant/>
	</FootersWrapper>
	<FootersWrapper appName='ai-arta-android'>
		<Footers_Terms_Of_Us_And_Prive_Policy_A_Text />
	</FootersWrapper>
</section>
