import i18nJSON from "../store/i18n.json";
import { urlVariables } from "./url-variables.js";

const i18n = JSON.parse(i18nJSON);
let langCode = urlVariables.lang || window.navigator.language

if (langCode.substring(0, 5).toLowerCase() === "zh-tw") {
  langCode = "zh-Hant";
} else if (langCode.substring(0, 2) === "zh") {
  langCode = "zh-Hans";
} else {
  langCode = langCode.substring(0, 2);
}

if (!!i18n[langCode] !== true) langCode = "en";

document.getElementsByTagName("html")[0].setAttribute("lang", langCode);

export const t = (key: string, vars?: any): string => {

  let text: string = '';

  if (!!i18n[langCode][key] === true) {
    text = i18n[langCode][key];
  } else if (!!i18n.en[key] === true) {
    text = i18n.en[key];
  }

  if (vars) {
    Object.keys(vars).map((k) => {
      const regex = new RegExp(`{{${k}}}`, "g");
      text = text.replace(regex, vars[k]);
    });
  }

  return text;
}