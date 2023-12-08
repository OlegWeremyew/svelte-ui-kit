<script>
	import { ButtonsWrapper } from '@/10.common-component';
	import { setValueToClipboard } from '@/utils';
	import { buttonsList } from '@/pages/Buttons/data.ts';
	import { search } from '@/store/state.ts';

	let list;

	$:{
		if ($search) {
			list = buttonsList.filter(({ appName }) => appName.includes($search));
		} else {
			list = buttonsList;
		}
	}

	const getComponentsCode = (code) => {
		if (!code) return;
		setTimeout(async () => {
			await setValueToClipboard(code);
		}, 0);
	};
</script>

<section class='page-buttons'>
	{#each list as { appName, os, id, component, code } (id)}
		<ButtonsWrapper appName={`${appName}-${os}`} on:click={() => getComponentsCode(code)}>
			<svelte:component this={component} />
		</ButtonsWrapper>
	{/each}
</section>

<style lang='scss'>
  @import "./src/styles/mixins.scss";

  .page-buttons {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
