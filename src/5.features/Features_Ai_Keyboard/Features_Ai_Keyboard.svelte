<script>
	import {t} from "@/utils";
</script>

<section class="page_welcome-features">
	<table>
		<tr>
			<td class="page_welcome-feature-item">
				<div class="page_welcome-feature-text">
					<span class="divtext">{@html t("Answers to All Questions")}</span>
				</div>
			</td>
			<td class="page_welcome-feature-item">
				<div class="page_welcome-feature-text">
					<span class="divtext">{@html t("Complete Chat Memory")}</span>
				</div>
			</td>
			<td class="page_welcome-feature-item">
				<div class="page_welcome-feature-text">
					<span class="divtext">{@html t("Fastest GPT Model")}</span>
				</div>
			</td>
			<td class="page_welcome-feature-item">
				<div class="page_welcome-feature-text">
					<span class="divtext">{@html t("Most Detailed Responses")}</span>
				</div>
			</td>
		</tr>
	</table>
</section>

<style lang='scss'>
  @import "./src/styles/mixins.scss";

  .page_welcome-features {
    width: 100%;
    margin-bottom: 8.7rem;

  table {
    width: 100%;
    margin: 0 auto;
  }

  tr {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  td {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    height: 5.6rem;
    background: rgba(28, 28, 28, 0.7);
    border-radius: 1.44rem 1.44rem 1.44rem 0;
    box-shadow: 0 0.2rem 0.9rem 0 rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(0.9rem);
    margin-bottom: 1.6rem;
    z-index: 0;

  &:last-child {
     margin-bottom: 0;
   }

  &:before {
     content: "";
     position: absolute;
     top: 0;
     left: 0;
     box-sizing: border-box;
     z-index: -1;
     inset: 0;
     width: 100%;
     height: 100%;
     padding: 1px;
     border-radius: 1.44rem 1.44rem 1.44rem 0;
     background: linear-gradient(90deg, rgb(134, 134, 134), rgb(23, 23, 23));
     -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
     mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
     -webkit-mask-composite: xor;
     mask-composite: exclude;
   }
  }

  .page_welcome-feature-text {
    position: relative;
    font-size: 1.8rem;
    font-weight: 800;
    text-align: left;
    margin: 0 2.4rem;
  }
  }

  @media only screen and (max-aspect-ratio: 56 / 100) {
    .page_welcome-features {
      margin-bottom: 11.4rem;

    td {
      margin-bottom: 2.4rem;
    }
  }
  }
</style>