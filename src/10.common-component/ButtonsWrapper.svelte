<script>
	export let appName
	export let isSmall = false
</script>

<div class='buttons-block'>
	<h3 class='buttons__subtitle'>Проект - {appName}</h3>
	<div class='buttons__component' class:small={isSmall}>
		<slot/>
	</div>
</div>

<style lang='scss'>
  @import "./src/styles/mixins.scss";

  .buttons-block {
	  min-width: 32rem;
    min-height: 120px;
    padding: 1.5rem;
	  border-radius: 20px;
	  border: 1px solid gray;
    margin: 0.5rem;

    &:first-child {
      margin-left: 0;
    }
  }

  .buttons__subtitle {
    margin-bottom: 10px;
    text-align: left;
    padding-left: 20px;
  }

  .buttons__component {
    background-color: transparent;
    display: flex;
    align-items: center;

    &.small {
      width: 400px;
    }
  }
</style>
