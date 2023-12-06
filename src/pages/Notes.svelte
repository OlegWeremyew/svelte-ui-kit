<script>
	import NotesWrapper from '@/10.common-component/NotesWrapper.svelte';
	import Note_In_Pulse from '@/6.notes/Note_In_Pulse/Note_In_Pulse.svelte';
	import Note_Fonts from '@/6.notes/Note_Fonts/Note_Fonts.svelte';
	import Note_Nature_ID from '@/6.notes/Note_Nature_ID/Note_Nature_ID.svelte';
	import Note_Wallpapers from '@/6.notes/Note_Wallpapers/Note_Wallpapers.svelte';
	import Note_Ai_Assistant from '@/6.notes/Note_Ai_Assistant/Note_Ai_Assistant.svelte';
	import Note_Solvo from '@/6.notes/Note_Solvo/Note_Solvo.svelte';
</script>

<section class='home'>
	<NotesWrapper appName='nature-id-ios'>
		<Note_Nature_ID />
	</NotesWrapper>

	<NotesWrapper appName='in-pulse-ios'>
		<Note_In_Pulse />
	</NotesWrapper>

	<NotesWrapper appName='fonts-ios'>
		<Note_Fonts />
	</NotesWrapper>

	<NotesWrapper appName='wallpapers-ios'>
		<Note_Wallpapers />
	</NotesWrapper>

	<NotesWrapper appName='ai-assistant-ios'>
		<Note_Ai_Assistant />
	</NotesWrapper>

	<NotesWrapper appName='solvo-ios'>
		<Note_Solvo />
	</NotesWrapper>
</section>

<style lang='scss'></style>
