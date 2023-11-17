<script>
	import Title_Ai_Art_Android from '@/4.titles/Title_Ai_Art_Android.svelte';
	import Title_Ai_Art_Android_A from '@/4.titles/Title_Ai_Art_Android_A.svelte';
	import Title_Ai_Keyboard_Android from '@/4.titles/Title_Ai_Keyboard_Android.svelte';
	import Title_Ai_Keyboard_Android_A from '@/4.titles/Title_Ai_Keyboard_Android_A.svelte';
	import Title_Coin from '@/4.titles/Title_Coin.svelte';
	import Title_Chat_Android from '@/4.titles/Title_Chat_Android.svelte';
	import Title_On_Skin from '@/4.titles/Title_On_Skin.svelte';
	import Title_Nature_ID from '@/4.titles/Title_Nature_ID.svelte';
	import Title_In_Pulse from '@/4.titles/Title_In_Pulse.svelte';
</script>

<section class='page page--titles'>
	<div class='block'>
		<h3 class='block__subtitle'>Проект - ai-art-android</h3>
		<div class='block__component'>
			<Title_Ai_Art_Android />
		</div>
	</div>
	<div class='block'>
		<h3 class='block__subtitle'>Проект - ai-art-android</h3>
		<div class='block__component'>
			<Title_Ai_Art_Android_A />
		</div>
	</div>
	<div class='block'>
		<h3 class='block__subtitle'>Проект - ai-art-android</h3>
		<div class='block__component'>
			<Title_Ai_Keyboard_Android />
		</div>
	</div>

	<div class='block'>
		<h3 class='block__subtitle'>Проект - ai-keyboard-android</h3>
		<div class='block__component'>
			<Title_Ai_Keyboard_Android_A />
		</div>
	</div>

	<div class='block'>
		<h2 class='block__title'>Заголовок с дополнительным изображениями</h2>
		<h3 class='block__subtitle'>Проект - coinId-banners</h3>
		<div class='block__component'>
			<Title_Coin />
		</div>
	</div>

	<div class='block'>
		<h3 class='block__subtitle'>Проект - chat-android</h3>
		<div class='block__component'>
			<Title_Chat_Android />
		</div>
	</div>

	<div class='block'>
		<h3 class='block__subtitle'>Проект - on-skin-ios</h3>
		<div class='block__component'>
			<Title_On_Skin />
		</div>
	</div>

	<div class='block'>
		<h3 class='block__subtitle'>Проект - nature-id-ios</h3>
		<div class='block__component'>
			<Title_Nature_ID />
		</div>
	</div>


	<div class='block'>
		<h3 class='block__subtitle'>Проект - in-pulse-ios</h3>
		<div class='block__component'>
			<Title_In_Pulse/>
		</div>
	</div>
</section>

<style lang='scss'>
  @import "./src/styles/mixins.scss";

  .page--titles {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .block {
    height: 250px;
    border: 1px solid gray;
    padding: 20px;
    border-radius: 20px;
    margin-left: 10px;
    margin-bottom: 15px;

    &:first-child {
      margin-left: 0;
    }

    &__title {
      font-size: 20px;
      width: 100%;
      text-align: left;
      margin-bottom: 5px;
    }

    &__subtitle {
      font-size: 16px;
      width: 100%;
      text-align: left;
      margin-bottom: 10px;
    }

    &__component {
      width: 35rem;
    }
  }
</style>
