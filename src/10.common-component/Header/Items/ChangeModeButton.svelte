<script>
	export let isActiveStatus;
	export let text;
	export let isDisabled = false;
</script>

<button
	type='button'
	class='show-control'
	class:active={isActiveStatus}
	class:disabled={isDisabled}
	disabled={isDisabled}
	on:click
>
	<span class='square' class:check={isActiveStatus}></span>{text}
</button>

<style lang='scss'>
  .show-control {
    margin-top: -3px;
    padding: 4px 6px;
	  border-radius: 6px;
    display: flex;
    align-items: center;
    background: none;
    font-size: 18px;
    font-weight: 600;

    &.active {
      color: green;
    }

    &:hover {
      background-color: #222;
    }

    .square {
      margin-right: 10px;
      display: block;
      width: 24px;
      height: 24px;
      border-radius: 3px;
      border: 2px solid gray;

      &.check {
        border-color: green;
        background-image: url(@/images/app/check.png);
        background-position: center;
        background-size: 75%;
        background-repeat: no-repeat;
      }
    }
  }

  .disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.3;
  }
</style>
