# Title_On_Skin

```javascript
<script>
	import {t} from "@/utils";
</script>

<section class="onskin-title">
	<h1>{t("OnSkin PRO")}</h1>
</section>

<style lang="scss">
	@import "./src/styles/mixins";

	:global(.onskin-title) {
	font-family: 'PT Serif', serif;
	font-size: 3.5rem;
	margin-bottom: -0.5rem;
	font-weight: 900;

	@include iPhonesAfterX {
	margin-bottom: 0;
}
}
</style>

```
