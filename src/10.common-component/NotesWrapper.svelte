<script>
	export let appName;
	export let isWhite = false;
</script>

<div class='notes-block' class:white={isWhite}>
	<h2 class='notes-title'> app - {appName}</h2>
	<slot />
</div>

<style lang='scss'>
  .notes-block {
    margin: 0.5rem;
    padding: 2rem;
    border: 1px solid gray;
    border-radius: 20px;
    width: 20rem;

    &.white {
      background-color: #fff;
    }
  }

  .notes-title {
    margin-bottom: 1rem;
  }
</style>
