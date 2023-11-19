<script>
	export let appName
	export let isSmall = false
</script>

<div class='buttons-block'>
	<h3 class='block__subtitle'>Проект - {appName}</h3>
	<div class='block__component' class:small={isSmall}>
		<slot/>
	</div>
</div>

<style lang='scss'>
  @import "./src/styles/mixins.scss";

  .buttons-block {
    height: 160px;
    padding: 10px;
    margin-left: 20px;

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

    &.small {
      width: 400px;
    }
  }
</style>
