<script>
	export let appName;
	export let isWhite = false;
</script>

<div class='block' class:white={isWhite}>
	<h3 class='block__subtitle'>Проект - {appName}</h3>
	<div class='block__component'>
		<slot />
	</div>
</div>

<style lang='scss'>
  @import "./src/styles/mixins";

  .block {
    min-height: 200px;
    border: 1px solid gray;
    padding: 20px;
    border-radius: 20px;
    margin-left: 10px;
    margin-bottom: 15px;

    &.white {
      background-color: #cccaca;

      .block__subtitle {
        color: #000
      }
    }

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