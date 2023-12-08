import { writable } from 'svelte/store';
import * as config from '@/config';
import {
	IActiveSubscription,
	ICurrentFrame,
	ISubscriptions,
	IPrice,
	IBannerId,
	ISlide,
	IBoolean,
} from './types';

export const bannerId: IBannerId = writable(config.bannerId);

export const isSwitcherActive: IBoolean = writable(false);
export const isTrialEnabled: IBoolean = writable(false);
export const isTrialAvailable: IBoolean = writable(false);
export const isShowAnimation: IBoolean = writable(false);
export const isWeekSubscription: IBoolean = writable(false)
export const isPricesLoaded: IBoolean = writable(false);
export const isFirstRender: IBoolean = writable(true);
export const isShowAnimButton: IBoolean = writable(false);
export const trialAvailable: IBoolean = writable(true);
export const isUTEWasCalled: IBoolean = writable(false);
export const isShowControlPanel: IBoolean = writable(false);

export const lifetimePrice: IPrice = writable('0');
export const weekPrice: IPrice = writable('3.33');
export const trialWeekPrice: IPrice = writable('0');
export const ratedPrice: IPrice = writable('0');
export const yearRatedPrice: IPrice = writable('2.22');
export const yearOldPrice: IPrice = writable('10.10');
export const yearPrice: IPrice = writable('0');
export const yearPriceByWeek: IPrice = writable('0');

export const yearPriceLoader: IPrice = writable('<span class="loader"></span>');
export const yearPriceRatedLoader: IPrice = writable('<span class="loader"></span>');
export const weekPriceLoader: IPrice = writable('<span class="loader"></span>');
export const weekPriceTrialLoader: IPrice = writable('<span class="loader"></span>');

export const currentFrame: ICurrentFrame = writable({
	name: '',
	isVisible: false,
});

export const subscriptions: ISubscriptions = writable({
	year: 'wtcoin.sub.gr1.1y_40',
	week: 'wtcoin.sub.gr1.1w_6',
	weekTrial: 'wtcoin.sub.gr1.1w3trial_6',
	day: '3',
});

export const activeSubscription: IActiveSubscription = writable({
	period: 'week',
	periodWeek: 'weekTrial',
	inapp: config.lifetimeSubscription,
});

export const slide: ISlide = writable(1);

export const search: any = writable('');
