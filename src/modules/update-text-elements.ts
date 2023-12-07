import {
	bannerId,
	lifetimePrice,
	weekPrice,
	trialWeekPrice,
	trialAvailable as trialAvailableStore,
	isSwitcherActive,
	yearPrice,
	yearPriceByWeek,
	weekPriceTrialLoader,
	weekPriceLoader,
	yearPriceRatedLoader,
	yearPriceLoader,
	isPricesLoaded
} from '@/store/state';
import { setFontSizes } from '@/utils';
import { get } from 'svelte/store';

const global = window as any;

export function updateTextElements(): void {
	console.log('UTE started');
	let trialAvailable: boolean = true;
	if (Object.keys(global.injectdata.inapps).length > 0) {
		const inapps: string[] = Array.from(Object.keys(global.injectdata.inapps));

		inapps.forEach((inapp: string) => {
			if (global.injectdata.inapps[inapp].trial_available === false) {
				trialAvailable = false;
			}
			lifetimePrice.update(() => '1.12$');
			weekPriceTrialLoader.update(() => '1.12$');
			weekPrice.update(() => '3.39$');
			trialWeekPrice.update(() => '6.99$');
			yearPrice.update(() => '39.99$');
			weekPriceLoader.update(() => '39.99$');
			yearPriceRatedLoader.update(() => '39.99$');
			yearPriceByWeek.update(() => '2.99$');
			yearPriceLoader.update(() => '2.99$');
		});
	}

	isPricesLoaded.set(true);

	trialAvailableStore.set(trialAvailable);
	setFontSizes('footer', '.features', '.subscribe-price');
}

trialAvailableStore.subscribe((trial) => {
	console.log('bannerId', get(bannerId));
	if (!trial) {
		isSwitcherActive.set(false);
		if (!get(bannerId).includes('_no_trial')) {
			bannerId.update((value: string): string => (value += '_no_trial'));
		}
	}
	document.body.classList.toggle('no_trial', !trial);
});
