<script>
	import Switcher_On_Skin from '@/1.switchers/Switcher_On_Skin.svelte';
	import Switcher_Nature_ID from '@/1.switchers/Switcher_Nature_ID.svelte';
	import Switcher_In_Pulse from '@/1.switchers/Switcher_In_Pulse.svelte';
	import Switcher_Fonts from '@/1.switchers/Switcher_Fonts.svelte';
	import Switcher_Fonts_A from '@/1.switchers/Switcher_Fonts_A.svelte';
</script>

<section class='page page--switchers'>
	<div class='block'>
		<h3 class='block__subtitle'>Проект - On-skin-ios-</h3>
		<div class='block__component'>
			<Switcher_On_Skin />
		</div>
	</div>

	<div class='block'>
		<h3 class='block__subtitle'>Проект - nature-id-ios-</h3>
		<div class='block__component'>
			<Switcher_Nature_ID />
		</div>
	</div>

	<div class='block'>
		<h3 class='block__subtitle'>Проект - in-pulse-ios-</h3>
		<div class='block__component'>
			<Switcher_In_Pulse />
		</div>
	</div>

	<div class='block'>
		<h3 class='block__subtitle'>Проект - fonts-ios-</h3>
		<div class='block__component'>
			<Switcher_Fonts />
		</div>
	</div>

	<div class='block'>
		<h3 class='block__subtitle'>Проект - fonts-ios-</h3>
		<div class='block__component'>
			<Switcher_Fonts_A />
		</div>
	</div>

</section>

<style lang='scss'>
  @import "./src/styles/mixins.scss";

  .page {
    width: 100%;
    height: auto;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 1150px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .block {
    margin-top: 1.5rem;
    height: 120px;
    padding: 10px;
    margin-left: 20px;
    margin-bottom: 20px;

    &:first-child {
      margin-left: 0;
    }
  }

  .block__subtitle {
    margin-bottom: 10px;
    text-align: left;
    padding-left: 20px;
  }

  .block__component {
    background-color: transparent;
    display: flex;
    align-items: center;

    &--small {
      width: 400px;
    }
  }
</style>
