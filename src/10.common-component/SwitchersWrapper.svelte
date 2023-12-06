<script>
	export let appName;
	export let isWhite = false;
	export let isGray = false;
	export let isSmall = false;
</script>

<div class='switchers-block' class:small={isSmall} class:white={isWhite} class:gray={isGray}>
	<h3 class='switchers__subtitle'>Проект - {appName}</h3>
	<div class='switchers__component'>
		<slot/>
	</div>
</div>

<style lang='scss'>
  .switchers-block {
    padding: 1.5rem;
    margin-top: 1.5rem;
    margin-left: 20px;
    margin-bottom: 20px;
	  border: 1px solid gray;
	  border-radius: 20px;

    &:first-child {
      margin-left: 0;
    }

    &.white {
      background-color: #fff;
    }

	  &.gray{
      background-color: gray;
	  }
  }

  .switchers__subtitle {
    margin-bottom: 10px;
    text-align: left;
    padding-left: 20px;
  }

  .switchers__component {
    background-color: transparent;
    display: flex;
    align-items: center;

    &.small {
      width: 400px;
    }
  }
</style>
