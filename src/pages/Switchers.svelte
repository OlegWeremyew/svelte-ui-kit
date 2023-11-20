<script>
	import Switcher_Chat from '@/1.switchers/Switcher_Chat/Switcher_Chat.svelte';
	import SwitchersWrapper from '@/10.common-component/SwitchersWrapper.svelte';
	import Switcher_On_Skin from '@/1.switchers/Switcher_On_Skin/Switcher_On_Skin.svelte';
	import Switcher_In_Pulse from '@/1.switchers/Switcher_In_Pulse/Switcher_In_Pulse.svelte';
	import Switcher_Nature_ID from '@/1.switchers/Switcher_Nature_ID/Switcher_Nature_ID.svelte';
	import Switcher_Fonts from '@/1.switchers/Switcher_Fonts/Switcher_Fonts.svelte';
	import Switcher_Fonts_A from '@/1.switchers/Switcher_Fonts_A/Switcher_Fonts_A.svelte';
	import Switcher_Wallpapers from '@/1.switchers/Switcher_Wallpapers/Switcher_Wallpapers.svelte';
	import Switcher_Nature_ID_A from '@/1.switchers/Switcher_Nature_ID_A/Switcher_Nature_ID_A.svelte';
</script>

<section class='page'>
	<SwitchersWrapper appName='On-skin-ios'>
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
