<script>
import Footer_In_Pulse from '@/7.footers/Footer_In_Pulse.svelte';
import Footer_Fonts from '@/7.footers/Footer_Fonts.svelte';
</script>

<section class="home">
	<div>
		<p>app - in-pulse-ios</p>
		<Footer_In_Pulse/>
	</div>

	<div style='background: #eee;'>
		<p>app - fonts-ios</p>
		<Footer_Fonts/>
	</div>
</section>

<style lang="scss">
  @import "./src/styles/mixins.scss";
</style>
