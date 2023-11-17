<script>
	import Subscribes_Nature_ID from '@/3.subscripes/Subscribes_Nature_ID.svelte';
	import Subscribes_Fonts from '@/3.subscripes/Subscribes_Fonts.svelte';
	import Subscribes_Fonts_A from '@/3.subscripes/Subscribes_Fonts_A.svelte';
</script>

<section class='home'>
	<div class='block'>
		<Subscribes_Nature_ID />
	</div>

	<div class='block'>
		<Subscribes_Fonts />
	</div>

	<div class='block'>
		<Subscribes_Fonts_A />
	</div>
</section>

<style lang='scss'>
  @import "./src/styles/mixins.scss";

  .home {
		display: flex;
		flex-wrap: wrap;
  }

  .block {
    margin-top: 2rem;
  }
</style>
