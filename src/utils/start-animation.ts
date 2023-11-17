import { butonAnimation } from "@/constants";
import { t, animationLoad } from "@/utils";

export function startAnimation(trial = false) {
  const object = butonAnimation;
  const string = trial ? t("Try for Free") : t("Continue");
  object.layers[0].t.d.k[0].s.t = string;
  animationLoad(object);
}
