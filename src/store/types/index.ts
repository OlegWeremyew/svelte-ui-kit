import { Writable } from "svelte/types/runtime/store";

export interface ICurrentFrame
  extends Writable<{
    name: string;
    isVisible: boolean;
  }> {}

export interface ISubscriptions
  extends Writable<{
    year: string;
    week: string;
    weekTrial: string;
    day: string;
  }> {}

export interface IActiveSubscription
  extends Writable<{
    period: string;
    inapp: string;
  }> {}
export interface IPrice extends Writable<String> {}
export interface IBannerId extends Writable<string> {}
export interface ISlide extends Writable<Number> {}

export interface IBoolean extends Writable<boolean> {}
