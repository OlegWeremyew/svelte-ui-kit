import { writable } from "svelte/store";
import * as config from "@/config";
import {
  IActiveSubscription,
  ICurrentFrame,
  ISubscriptions,
  ISwitcherActive,
  IPrice,
  IYearEnabled,
  IBannerId,
  ITrialAvailable, ISlide,
} from './types';

export const bannerId: IBannerId = writable(config.bannerId);

export const isYearActive: IYearEnabled = writable(true);

export const isSwitcherActive: ISwitcherActive = writable(false);
export const isTrialEnabled:ITrialAvailable =  writable(false);
export const isTrialAvailable:ITrialAvailable =  writable(false);
export const isShowAnimation:any =  writable(false);

export const slide: ISlide = writable(1);

export const trialAvailable: ITrialAvailable = writable(true)

export const lifetimePrice: IPrice = writable("0");
export const weekPrice: IPrice = writable("3.33");
export const trialWeekPrice: IPrice = writable("0");
export const ratedPrice: IPrice = writable("0");
export const yearRatedPrice: IPrice = writable("2.22");
export const yearOldPrice: IPrice = writable("10.10");
export const yearPrice: IPrice = writable("0");
export const yearPriceByWeek: IPrice = writable("0");

export const currentFrame: ICurrentFrame = writable({
  name: "",
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
  inapp: config.lifetimeSubscription,
});

export const splide: any = writable(null)
