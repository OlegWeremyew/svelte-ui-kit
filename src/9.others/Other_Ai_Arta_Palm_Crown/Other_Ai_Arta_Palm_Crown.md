#Other_Ai_Arta_Palm_Crown

```javascript
<script>
	import { t } from '@/utils';
</script>

<div class='palm-wrapper'>
	<div class='palm-left'></div>

	<div class='palm-content'>
		<div class='palm-description'>
			<p class='palm-count'>
				<span class='divtext'>{@html t("1M+")}</span>
			</p>
			<p class='palm-review'>
				<span class='divtext'>{@html t("HAPPY <br>USERS")}</span>
			</p>
		</div>
		<div class='palm-stars'></div>
	</div>

	<div class='palm-right'></div>
</div>


<style lang='scss'>
  @import "./src/styles/mixins.scss";

  .palm-wrapper {
    display: flex;
    margin: 0 auto;
    height: 10rem;

    @include phones20Ultra {
      margin-bottom: 2.7rem;
    }

    .palm-left {
      width: 3.8rem;
      height: 100%;
      background-image: url(@/images/others/ai-arta-left-palm.svg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;

      @include phones20Ultra {
        width: 4.3rem;
      }
    }

    .palm-right {
      width: 3.8rem;
      height: 100%;
      background-image: url(@/images/others/ai-arta-right-palm.svg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;

      @include phones20Ultra {
        width: 4.3rem;
      }
    }

    .palm-content {
      display: flex;
      flex-direction: column;
      align-items: center;

      .palm-description {
        font-family: 'Roboto', sans-serif;
        margin-top: 2.4rem;
        display: flex;
        color: #4051fc;
        align-items: center;

        @include phones20Ultra {
          margin-top: 2.2rem;
        }

        .palm-count {
          font-size: 3rem;
          font-weight: 800;

          @include phones20Ultra {
            font-size: 3.3rem;
          }
        }

        .palm-review {
          margin-left: 0.5rem;
          font-size: 1.3rem;
          font-weight: 600;
          letter-spacing: -0.03rem;
        }
      }

      .palm-stars {
        margin-top: 0.9rem;
        width: 5rem;
        height: 2rem;
        background-image: url(@/images/others/ai-arta-stars.svg);
        background-repeat: no-repeat;
        background-size: contain;
        transform: scale(1.85);
      }
    }
  }
</style>

```
