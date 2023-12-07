export const bannerId = "086";
const placement = 'premium_banner'

export enum Subscribes {
  year = "solvo.sub.gr1.1y_40",
  weekTrial = "solvo.sub.gr1.1w3trial_7",
  week = 'solvo.sub.gr1.1w_7'
}

export const injectdata = {
  inapps: {
    [Subscribes.year]: {
      duration: 1,
      duration_type: 'year',
      price: '$39.99',
      rated_price: '0.77$',
      duration_rate: 0.01935
    },
    [Subscribes.weekTrial]: {
      trial_available: true,
      duration: 1,
      price: '$6.99',
      duration_type: 'week',
      trial_duration: 3,
      trial_duration_type: 'day',
    },
    [Subscribes.week]: {
      duration: 1,
      price: '$6.99',
      duration_type: 'week',
    }
  },
};

export const defaultInjectdata = JSON.parse(JSON.stringify(injectdata));

export const lifetimeSubscription: string = "aiart.lifetime_30"

export const closeBannerStat = (bannerId: string): string => `http://callquietly.io/statistic?amplitude_event_name=event_banner_close&param=banner_id:${bannerId}`;
export const startBannerStat = (bannerId: string): string => `callquietly://callquietly.io/statistic?amplitude_event_name=event_banner_show&param=banner_id:${bannerId}`;
export const subscribeTabStat = (bannerId: string, selectedProduct: string): string => `http://callquietly.io/amplitude_statistic?event_name=sn_action_tap_subbtn&banner_id=${bannerId}&sub_id=${selectedProduct}`;
export const tapOnPurchaseButton = (inapp, bannerId) => `callquietly://callquietly.io/statistic?amplitude_event_name=subscription_purchase&placement=${placement}&banner_id=${bannerId}&product_id=${inapp}`;
export const doneSubscription = (bannerId) => `callquietly://callquietly.io/statistic?amplitude_event_name=subscription_done&placement=${placement}&banner_id=${bannerId}`;
export const tapOnInappStat = (inapp, bannerId) => `callquietly://callquietly.io/statistic?amplitude_event_name=subscription_tap_product&placement=${placement}&banner_id=${bannerId}&product_id=${inapp}`;
export const tapOnLegalInfoStat = (info: string, bannerId: string): string =>
  `callquietly://callquietly.io/amplitude_statistic?event_name=tap_info_banner&tap=${info}&placement=embedded-launch&banner=${bannerId}`;
export const restorePurchaseStat = (bannerId: string): string =>
  `http://callquietly.io/statistic?amplitude_event_name=restore_purchase_started&param=banner_id:${bannerId}`;
export const purchaseStat = (bannerId, inapp) => `http://callquietly.io/statistic?path=get_premium_by_banner/${bannerId}/clicked/${inapp}`

// switch off loading animation
export const disableBuiltinAnimations = 1;
// transparent background in SN module
export const transparentBackground = 1;
// switch off close-button in SN module
export const disableBuiltinClose = 1;
