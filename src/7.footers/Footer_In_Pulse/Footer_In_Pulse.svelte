<script>
  import {bannerId, currentFrame} from "@/store/state";
  import {sendCallback, setIframeEvents, getCallbackDomain, sendMultipleCallbacks, t} from "@/utils";
  import {tapOnLegalInfoStat, restorePurchaseStat} from "@/config";

  function handleTermsButtonClick() {
    sendCallback(tapOnLegalInfoStat("tos", $bannerId));
    currentFrame.update(() => ({name: "terms", isVisible: true}));
    setIframeEvents($currentFrame.name);
  }

  function handlePrivacyButtonClick() {
    sendCallback(tapOnLegalInfoStat("pp", $bannerId));
    currentFrame.update(() => ({name: "privacy", isVisible: true}));
    setIframeEvents($currentFrame.name);
  }

  function handleRestoreButtonClick() {
    sendMultipleCallbacks([
      restorePurchaseStat($bannerId),
      `${getCallbackDomain()}/getpremium/restore`,
    ]);
  }
</script>

<footer>
  <div class="footer__links">
    <a href="javascript:void(0);" class="terms" on:click={handleTermsButtonClick}>
      <span class="divtext">
        {@html t("Terms of Use")}
      </span>
    </a>
    <a href="javascript:void(0);" class="privacy" on:click={handlePrivacyButtonClick}>
      <span class="divtext">
        {@html t("Privacy Policy")}
      </span>
    </a>
    <a href="javascript:void(0);" class="restore" on:click={handleRestoreButtonClick}>
      <span class="divtext">
         {@html t("Restore")}
      </span>
    </a>
  </div>
</footer>

<style lang="scss" global>
  @import "./src/styles/mixins.scss";

  footer {
    position: relative;
    width: 100%;
    margin-bottom: 0.95rem;

    @include iPhonesAfterX {
      margin-bottom: 3.4rem;
    }

    @include tabletPortrait {
      margin: 0 auto 2.95rem;
      width: 70%;
    }

  }

  .footer__links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin: auto;
    font-size: 1.1rem;
    letter-spacing: -0.05rem;
    color: rgb(166, 166, 166);

    font-weight: 300;

    @include iPhonesAfterX {
      font-size: 1.05rem;
      width: 37rem;
    }

    @include tabletPortrait {
      width: 40rem;
      font-size: 1.25rem;
    }

    a {
      position: relative;
      display: block;
      max-width: 35%;

      a:last-child {
        max-width: 31%;
      }

      &:not(:first-child) {
        margin-left: 3rem;

        &::before {
          content: ' | ';
          width: auto;
          height: auto;
          position: absolute;
          left: -1.6rem;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
</style>
