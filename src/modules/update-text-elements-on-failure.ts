import { defaultInjectdata } from "@/config";
import { updateTextElements } from "@/modules/update-text-elements";

const global = window as any;

export function updateTextElementsOnFailure(): void {
	global.injectdata = JSON.parse(JSON.stringify(defaultInjectdata));
	updateTextElements();
}
