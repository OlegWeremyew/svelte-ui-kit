<script>
	import { t, typeText } from '@/utils';
	import { isShowAnimation } from '@/store/state.ts';

	export let title;
	export let question;

	$:{
		if ($isShowAnimation) {
			setTimeout(() => {
				typeText('animText', question);
			}, 300);
		}
	}
</script>

<div class='search'>
	<div class='search__title'>
		{@html t(title)}
	</div>
	<div class='search__text'>
		<div class='search__text__container' id='animText'></div>
	</div>
</div>

<style lang='scss' global>
  @import "./src/styles/mixins.scss";

  .search {
    width: 100%;
    margin-bottom: 2.4rem;
    margin-top: 1.7rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @include iPhonesAfterX {
      margin-bottom: 3.3rem;
      margin-top: 2.2rem;
      justify-content: space-between;
    }

    @include tabletPortrait {
      width: 35rem;
      margin: 0 auto 2rem;
    }
  }

  .search__title {
    position: relative;
    align-self: flex-start;
    margin-left: 8%;
    font-size: 1.7rem;
    font-weight: 600;
  }

  .search__text {
    position: relative;
    padding: 1.1rem 1.5rem;
    width: 92%;
    height: 5.6rem;
    font-size: 1.7rem;
    font-weight: 400;
    line-height: 3.2rem;
    text-align: left;
    margin: 0.8rem auto 0;
    background: rgb(33, 35, 41);
    border-radius: 1.5rem;
    border: 0.1rem solid rgb(38 201 134);

    @include iPhonesAfterX {
      margin: 0.8rem auto 0;
      width: 92%;
      height: 5.5rem;
      font-size: 1.7rem;
      line-height: 3rem;
    }

    &__container {
      width: fit-content;
      border-right: 0.1rem solid rgb(38, 201, 134);
      padding-right: 0.2rem;
      animation: 1s blink step-start infinite;
    }

    span {
      strong {
        display: inline;
        font-weight: 700;
        background: linear-gradient(180deg, rgb(21, 199, 155), rgb(9, 149, 98));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

  .letter {
    display: none;
  }

  .show-text {
    display: inline;
    animation: 0.05s slideUp forwards;
  }

  @keyframes slideUp {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }


  @keyframes blink {
    0% {
      border-right: 0.1rem solid rgb(38, 201, 134);
    }
    50% {
      border-right: 0.1rem solid transparent;
    }
    100% {
      border-right: 0.1rem solid rgb(38, 201, 134);
    }
  }
</style>
