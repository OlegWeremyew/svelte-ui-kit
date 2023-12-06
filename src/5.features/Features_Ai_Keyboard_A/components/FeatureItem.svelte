<script>
  import { t } from "@/utils";

  export let icon = "";
  export let text = "";
</script>

<div class="featuresItem" class:active={text}>
  <div class="featuresItem__icon">
    {icon}
  </div>
  <div class="featuresItem__text">
    <span class="divtext">
      {t(text)}
    </span>
  </div>
</div>

<style lang="scss">
  @import "./src/styles/mixins.scss";

  .featuresItem {
    display: flex;
    background-color: rgba(255, 255, 255, 0.03);
    position: relative;
    padding: 1.1rem 2rem 1.1rem 1.4rem;
    border-radius: 2rem;
    border-bottom-left-radius: 0;
    min-width: 13.2rem;
    margin-right: 1rem;
    max-width: 95vw;
    box-sizing: border-box;
    box-shadow: 0 0.6rem 0.9rem rgba(23, 20, 88, 0.07);

    @include iPhonesAfterX {
      border-radius: 2.23rem;
      border-bottom-left-radius: 0;
      padding: 1.25rem 2rem 1.25rem 1.4rem;
    }

    &:last-child {
      margin-right: 0;
    }

    &:global(.active) {
      background-color: rgba(255, 255, 255, 0.08);
    }

    &__icon {
      margin-right: 0.8rem;
      font-size: 1.41rem;
    }

    &__text {
      font-size: 1.1rem;
      font-weight: 600;
      letter-spacing: 0.005rem;
      max-width: 95%;
      line-height: 1.82;

      @include iPhonesAfterX {
        font-size: 1.2rem;
      }
    }
  }
</style>
