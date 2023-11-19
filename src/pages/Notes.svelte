<script>
	import Note_Nature_ID from '@/6.notes/Note_Nature_ID.svelte';
	import Note_In_Pulse from '@/6.notes/Note_In_Pulse.svelte';
	import Note_Fonts from '@/6.notes/Note_Fonts.svelte';
	import Note_Wallpapers from '@/6.notes/Note_Wallpapers.svelte';
</script>

<section class='home'>
	<div class='block'>
		<p> app - nature-id-ios</p>
		<Note_Nature_ID />
	</div>

	<div class='block'>
		<p> app - in-pulse-ios</p>
		<Note_In_Pulse />
	</div>

	<div class='block'>
		<p> app - fonts-ios</p>
		<Note_Fonts />
	</div>

	<div class='block'>
		<p> app - wallpapers-ios</p>
		<Note_Wallpapers />
	</div>
</section>

<style lang='scss'>
  @import "./src/styles/mixins.scss";

  .home {
    display: flex;
    flex-wrap: wrap;
  }

  .block {
    width: 20rem;
  }
</style>
