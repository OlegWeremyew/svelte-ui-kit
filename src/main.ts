// src/main.js
import App from "./App.svelte";
import { updateTextElements } from "./modules/update-text-elements";
import { startPlayback } from "./modules/start-playback";
import * as config from "./config";

const global = window as any;

global.disableBuiltinAnimations = config.disableBuiltinAnimations;
global.transparentBackground = config.transparentBackground;
global.disableBuiltinClose = config.disableBuiltinClose;

global.updateTextElements = updateTextElements;
global.startPlayback = startPlayback;

global.injectdata = JSON.parse(JSON.stringify(config.injectdata));

const app = new App({
  target: document.body,
  props: {},
});

export default app;
