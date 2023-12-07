<script>
	export let appName;
	export let isWhite = false;
	export let isFull = false;
</script>

<div class='features-wrapper' class:white={isWhite}>
	<h2 class='features-title'> app - {appName}</h2>
	<slot />
</div>

<style lang='scss'>
  .features-wrapper {
    min-width: 450px;
    width: auto;
    padding: 2rem;
    border: 1px solid gray;
    border-radius: 2rem;
    margin: 0.5rem;
    text-align: left;

    &.white {
      background-color: gray;
    }
  }

  .features-title {
    margin-bottom: 1rem;
  }
</style>
