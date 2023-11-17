<script>
import Other_Timer_Ai_Keyboard_Ios from '@/9.others/Other_Timer_Ai_Keyboard_Ios.svelte';
import Other_Images_Switcher_Button_Ai_Art_Android
	from '@/9.others/Other_Images_Switcher_Button_Ai_Art_Android.svelte';
</script>

<section  class="page page--other">
	<div class="block" style='background-color: #77d7be; width: 280px;'>
		<h3 class="block__subtitle" style='color: #222222'>Проект - ai-keyboard-ios</h3>
		<div class="block__component">
			<Other_Timer_Ai_Keyboard_Ios/>
		</div>
	</div>

	<div class="block">
		<h3 class="block__subtitle" style='color: #222222'>Проект - ai-keyboard-ios</h3>
		<div class="block__component">
			<Other_Images_Switcher_Button_Ai_Art_Android/>
		</div>
	</div>
</section>

<style lang='scss'>
  @import "./src/styles/mixins.scss";

  .page--other {
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
    height: 200px;
    padding: 10px;
    margin-left: 20px;
    margin-bottom: 20px;
		border-radius: 20px;

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
    justify-content: center;

    &--small {
      width: 400px;
    }
  }
</style>
