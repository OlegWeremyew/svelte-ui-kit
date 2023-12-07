<script>
	export let appName;
	export let animationText = '';
	export let isWhite = false;
	export let isWhiteTitle = false;
	export let isFull = false;
	export let isHeight = false;
</script>

<div class='others-block' class:white={isWhite} class:full={isFull} class:height={isHeight}>
	<h2>{animationText}</h2>
	<h3
		class='others-block__subtitle'
		class:whiteText={isWhiteTitle}
		style='color: #222222'
	>
		Проект - {appName}
	</h3>
	<div class='others-block__component'>
		<slot />
	</div>
</div>

<style lang='scss'>
  .others-block {
    padding: 2rem;
    margin: 0.5rem;
    border-radius: 2rem;
    border: 1px solid gray;
    height: auto;
    max-height: 550px;
	  overflow: hidden;

    &:first-child {
      margin-left: 0;
    }

    &.white {
      background-color: #fff;
    }

    &.full {
      width: 100%;
      max-width: 700px;
    }

    &.height {
      max-height: inherit;
    }
  }

  .others-block__subtitle {
    margin-bottom: 10px;
    text-align: left;
    padding-left: 20px;
  }

  .others-block__component {
    background-color: transparent;
    display: flex;
    justify-content: center;
  }

  .whiteText {
    color: #fff !important;
  }
</style>
