import { startBannerStat } from "@/config";
import { bannerId } from "@/store/state";
import { sendCallback } from "@/utils";

let id: string;
bannerId.subscribe((value: string): void => {
  id = value;
});

export function startPlayback(isHidden: boolean): void {
  if (isHidden === false) {
    sendCallback(startBannerStat(id));
  }
}
