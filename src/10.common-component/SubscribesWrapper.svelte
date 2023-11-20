<script>
	export let appName;
	export let isWhite = false;

</script>

<div class='subscribes-block' class:white={isWhite}>
	<h2 class='subscribes-title'> Проект - {appName}</h2>
	<slot />
</div>

<style lang='scss'>
  .subscribes-block {
    padding: 1.5rem;
    border-radius: 20px;
    border: 1px solid gray;
    margin-top: 2rem;
    margin-left: 1rem;

    &.white {
      background-color: #eae2e2;

      .subscribes-title {
        color: #0d1019;
      }
    }
  }

  .subscribes-title {
    width: 100%;
    text-align: start;
    margin-bottom: 1rem;
  }
</style>
