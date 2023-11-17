<script>
  import {t} from "@/utils";
</script>

<section class="title-4">
	<h1>{@html t("<strong>Choose</strong> your plan")}</h1>
</section>

<style lang="scss" global>
  @import "../styles/mixins";

  .title-4 {
    font-size: 3.3rem;
    margin-bottom: -1.5rem;
    font-weight: 300;
    padding-bottom: 1rem;

    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
                      to bottom,
                      #ffffff 0 0.1rem,
                      rgba(0, 155, 119, 0.8) 0.1rem,
                      rgba(10, 122, 255, 0)
      );
      opacity: 0.16;
    }

    & h1 {
      width: 100%;
      font-size: 3.4rem;
      font-weight: 700;
      line-height: 1.42;

      & strong {
        background: linear-gradient(
                        to right,
                        rgb(0, 155, 119),
                        rgb(65, 183, 151)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    @include phones20Ultra {
      font-size: 3rem;
      margin-bottom: -1.1rem;
    }
  }
</style>
