<script>
	import Button_Ai_Art_Android from '@/2.buttons/Button_Ai_Art_Android.svelte';
	import Button_Ai_Art_Android_A from '@/2.buttons/Button_Ai_Art_Android_A.svelte';
	import Button_Ai_Keyboard_Android from '@/2.buttons/Button_Ai_Keyboard_Android.svelte';
	import Button_Coin from '@/2.buttons/Button_Coin.svelte';
	import Button_Lottie from '@/2.buttons/Button_Lottie.svelte';
	import Button_Chat_Android from '@/2.buttons/Button_Chat_Android.svelte';
	import Button_Ai_Art_Android_AA from '@/2.buttons/Button_Ai_Art_Android_AA.svelte';
	import Button_On_Skin from '@/2.buttons/Button_On_Skin.svelte';
	import Buttons_Nature_ID from '@/2.buttons/Button_Nature_ID.svelte';
	import Buttons_In_Pulse from '@/2.buttons/Button_In_Pulse.svelte';
	import ButtonWatchVideo_Iremover from '@/2.buttons/ButtonWatchVideo_Iremover.svelte';
	import ButtonWatchVideo_Iremover_A from '@/2.buttons/ButtonWatchVideo_Iremover_A.svelte';
	import Button_Fonts from '@/2.buttons/Button_Fonts.svelte';
	import Button_Fonts_A from '@/2.buttons/Button_Fonts_A.svelte';
</script>

<section class='page page--buttons'>
	<div class='block'>
		<h3 class='block__subtitle'>Проект - fonts-android</h3>
		<div class='block__component block__component--small'>
			<Button_Lottie />
		</div>
	</div>

	<div class='block'>
		<h3 class='block__subtitle'>Проект - ai-art-android</h3>
		<div class='block__component'>
			<Button_Ai_Art_Android />
		</div>
	</div>

	<div class='block'>
		<h3 class='block__subtitle'>Проект - ai-art-android</h3>
		<div class='block__component'>
			<Button_Ai_Art_Android_A />
		</div>
	</div>

	<div class='block'>
		<h3 class='block__subtitle'>Проект - ai-art-android</h3>
		<div class='block__component'>
			<Button_Ai_Art_Android_AA />
		</div>
	</div>

	<div class='block'>
		<h3 class='block__subtitle'>Проект - ai-keyboard-android</h3>
		<div class='block__component'>
			<Button_Ai_Keyboard_Android />
		</div>
	</div>

	<div class='block'>
		<h3 class='block__subtitle'>Проект - coinId</h3>
		<div class='block__component'>
			<Button_Coin />
		</div>
	</div>

	<div class='block'>
		<h3 class='block__subtitle'>Проект - fonts-android</h3>
		<div class='block__component'>
			<Button_Chat_Android />
		</div>
	</div>

	<div class='block'>
		<h3 class='block__subtitle'>Проект - on-skin-ios</h3>
		<div class='block__component'>
			<Button_On_Skin/>
		</div>
	</div>

	<div class='block'>
		<h3 class='block__subtitle'>Проект - nature-id-ios</h3>
		<div class='block__component'>
			<Buttons_Nature_ID/>
		</div>
	</div>

	<div class='block'>
		<h3 class='block__subtitle'>Проект - in-pulse-ios</h3>
		<div class='block__component'>
			<Buttons_In_Pulse/>
		</div>
	</div>

	<div class='block'>
		<h3 class='block__subtitle'>Проект - in-remover-ios</h3>
		<div class='block__component'>
			<ButtonWatchVideo_Iremover/>
		</div>
	</div>

	<div class='block'>
		<h3 class='block__subtitle'>Проект - in-remover-ios</h3>
		<div class='block__component'>
			<ButtonWatchVideo_Iremover_A/>
		</div>
	</div>

	<div class='block'>
		<h3 class='block__subtitle'>Проект - fonts-ios</h3>
		<div class='block__component'>
			<Button_Fonts/>
		</div>
	</div>

	<div class='block'>
		<h3 class='block__subtitle'>Проект - fonts-ios</h3>
		<div class='block__component'>
			<Button_Fonts_A/>
		</div>
	</div>
</section>

<style lang='scss'>
  @import "./src/styles/mixins.scss";

  .page--buttons {
    display: flex;
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
    height: 180px;
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
