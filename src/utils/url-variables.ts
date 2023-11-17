import {LangType} from "@/types";

export const urlVariables = ((): LangType => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  return Object.fromEntries(urlSearchParams.entries());
})();
