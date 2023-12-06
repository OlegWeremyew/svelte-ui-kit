<script>
	import { t } from "@/utils";
	import Logo from "@/images/titles/solvo-small-logo.png";
</script>

<section class="heading">
	<div class="heading__badge">
		<img src={Logo} alt="solvo logo">
		<span class="divtext">{@html t("<strong>SOLVO</strong>")}</span>
	</div>
	<div class="heading__title">
		<span class="divtext">{@html t("Get <strong>PRO</strong> Access")}</span>
	</div>
</section>

<style lang="scss">
  @import "./src/styles/mixins";
  .heading {
    margin: 0 auto;
    margin-bottom: 1.4rem;
    width: 30.8rem;

    &__badge {
      width: fit-content;
      font-size: 1.4rem;
      font-weight: 900;
      color: #fff;
      background: #000;
      border: 0.1rem solid rgb(174, 241, 97);
      border-radius: 1.1rem;
      box-shadow: 0 0 1rem rgba(174, 241, 97, 0.3);
      display: flex;
      align-items: center;
      padding-right: 1rem;
      margin-bottom: 1.5rem;

      img {
        margin-right: 0.8rem;
        width: 3.3rem;
        height: 3.3rem;
        object-fit: contain;
      }
    }

    &__title {
      font-size: 4rem;
      font-weight: 300;
      text-align: left;
      letter-spacing: -0.04rem;
      color: #fff;

      :global(strong) {
        font-weight: 900;
        color: rgb(174, 241, 97);
      }
    }

    @include iPhonesAfterX {
      width: 32.2rem;
      margin-bottom: 2.7rem;
    }
  }
</style>
