<script>
	import { SwitchersWrapper } from '@/10.common-component';
	import {
		Switcher_Ai_Arta,
		Switcher_Chat,
		Switcher_Fonts,
		Switcher_Fonts_A,
		Switcher_In_Pulse,
		Switcher_Nature_ID,
		Switcher_Nature_ID_A,
		Switcher_On_Skin,
		Switcher_Solvo,
		Switcher_Wallpapers,
	} from '@/1.switchers';
</script>

<section class='page'>
	<SwitchersWrapper appName='on-skin-ios'>
		<Switcher_On_Skin />
	</SwitchersWrapper>

	<SwitchersWrapper appName='nature-id-ios'>
		<Switcher_Nature_ID />
	</SwitchersWrapper>

	<SwitchersWrapper appName='in-pulse-ios'>
		<Switcher_In_Pulse />
	</SwitchersWrapper>

	<SwitchersWrapper appName='fonts-ios'>
		<Switcher_Fonts />
	</SwitchersWrapper>

	<SwitchersWrapper appName='fonts-ios'>
		<Switcher_Fonts_A />
	</SwitchersWrapper>

	<SwitchersWrapper appName='wallpapers-ios'>
		<Switcher_Wallpapers />
	</SwitchersWrapper>

	<SwitchersWrapper appName='chat-ios'>
		<Switcher_Chat />
	</SwitchersWrapper>

	<SwitchersWrapper appName='nature-id-ios'>
		<Switcher_Nature_ID_A />
	</SwitchersWrapper>

	<SwitchersWrapper appName='solvo-ios'>
		<Switcher_Solvo />
	</SwitchersWrapper>

	<SwitchersWrapper appName='ai-arta-android'>
		<Switcher_Ai_Arta />
	</SwitchersWrapper>

</section>

<style lang='scss'>
  @import "./src/styles/mixins.scss";

  .page {
    width: 100%;
    height: auto;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
