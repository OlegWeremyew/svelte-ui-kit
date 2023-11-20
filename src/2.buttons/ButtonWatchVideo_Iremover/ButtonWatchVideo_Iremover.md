# ButtonWatchVideo_Iremover

```javascript
<script>
  import {getCallbackDomain, sendCallback, t} from "@/utils";

  const handleWatchVideo = () => {
    sendCallback(`${getCallbackDomain()}/showRewardedVideo`);
  };
</script>

<section class="subscribeInfo">
  <div class="section__buttons buttons">
    <button
      class="button button_white"
      id="watchButton"
      on:click={handleWatchVideo}
    >
      <div class="button__text">
        <div class="play-img"></div>
        <span>{t("Clean Up")}</span>
      </div>
    </button>
  </div>
</section>

<style lang="scss">
  @import "./src/styles/mixins";

  .subscribeInfo {
    width: 31rem;
    color: rgb(255, 255, 255);

    &__text {
      font-size: 1.8rem;
      font-weight: 300;
      letter-spacing: normal;
      margin-bottom: 0.6rem;

      strong {
        font-size: inherit;
        font-weight: 600;
      }
    }
  }

  .subscribeInfo__undertext-block {
    font-size: 1.4rem;
    opacity: 0.5;
  }

  .button {
    position: relative;
    width: 100%;
    height: 6.2rem;
    background: #448aff;
    border: 0.2rem solid transparent;
    border-radius: 3rem;
    color: #ffffff;

    &_white {
      background: rgb(255, 255, 255);
      color: rgb(68, 138, 255);
      font-weight: 400;
    }

    .button__text {
      margin: 0 auto;
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: -0.2px;
      line-height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .button_white .button__text {
      font-size: 1.4rem;

      strong {
        position: relative;
        display: inline-block;
        padding-left: 1em;
        font-size: 1.43em;
        font-weight: 600;

        &::before {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          content: '';
          display: block;
          width: 0.75em;
          height: 0.75em;
          background: url(@/images/buttons/play.png) center no-repeat;
          background-size: cover;
        }
      }

      strong:last-child {
        font-weight: 700;
      }
    }
  }

  .play-img {
    width: 2.5rem;
    height: 2rem;
    margin-right: 0.5rem;
    background-image: url(@/images/buttons/play.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
</style>

```
