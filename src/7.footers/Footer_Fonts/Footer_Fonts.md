# Footer_Fonts

```javascript
<script>
  import {currentFrame} from "@/store/state";
  import {setIframeEvents, t} from "@/utils";

  function handleTermsButtonClick() {
    currentFrame.update(() => ({name: "terms", isVisible: true}));
    setIframeEvents($currentFrame.name);
  }

  function handlePrivacyButtonClick() {
    currentFrame.update(() => ({name: "privacy", isVisible: true}));
    setIframeEvents($currentFrame.name);
  }
</script>

<footer class="animated visible">
  <div class="links">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a href="javascript:void(0);" class="terms" on:click={handleTermsButtonClick}>
      <span class="divtext">
        {t('Terms of Use')}
      </span>
    </a>
    <!-- svelte-ignore a11y-missing-attribute -->
    <a href="javascript:void(0);" class="privacy" on:click={handlePrivacyButtonClick}>
      <span class="divtext">
        {t('Privacy Policy')}
      </span>
    </a>
  </div>
</footer>

<style lang="scss">
  @import "./src/styles/mixins.scss";
  footer {
    position: relative;
    width: 100%;
    margin-bottom: 0.8rem;

    @include iPhonesAfterX {
      margin-bottom: 4.2rem;
    }

    .links {
      position: relative;
      max-width: 87%;
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.25rem;
      letter-spacing: 0.0rem;
      color: rgba(0, 0, 0, 0.2);
      margin: 0 auto;
      font-weight: 400;

      a {
        position: relative;
        max-width: 30%;
        width: fit-content;

        span {
          text-decoration: underline;
        }
      }
    }
  }
</style>

```
