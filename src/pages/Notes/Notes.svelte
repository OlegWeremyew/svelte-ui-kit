<script>
	import { NotesWrapper } from '@/10.common-component';
	import {
		Note_In_Pulse,
		Note_Fonts,
		Note_Nature_ID,
		Note_Wallpapers,
		Note_Ai_Assistant,
		Note_Solvo
	} from '@/6.notes';
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
