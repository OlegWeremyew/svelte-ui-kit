<script>
	export let appName;
	export let isWhite = false;
	export let isFull = false;
</script>

<div class='footers-block' class:white={isWhite} class:isFull={isFull}>
	<h2 class='footers-title'> Проект - {appName}</h2>
	<slot />
</div>

<style lang='scss'>
  .footers-block {
    min-width: 450px;
    padding: 1.5rem;
    border-radius: 20px;
    border: 1px solid gray;
    margin-top: 2rem;
    margin-left: 1rem;

    &.white {
      background-color: #eae2e2;

      .footers-title {
        color: #0d1019;
      }
    }

	  &.isFull{
      width: 100%;
		  max-width: 650px;
	  }
  }

  .footers-title {
    width: 100%;
    text-align: start;
    margin-bottom: 1rem;
  }
</style>
