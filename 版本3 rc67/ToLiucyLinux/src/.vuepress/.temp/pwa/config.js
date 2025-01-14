import { h }  from "vue";
import { defineClientConfig } from "vuepress/client";
import { setupPwa } from "D:/JAVA项目/new_cs/qita1/node_modules/.pnpm/@vuepress+plugin-pwa@2.0.0-rc.40_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0.0-rc.14_@typ_lthvsgq2kyiue6hwip5mad7t2y/node_modules/@vuepress/plugin-pwa/lib/client/composables/setupPwa.js";
import { setupViewPoint } from "D:/JAVA项目/new_cs/qita1/node_modules/.pnpm/@vuepress+plugin-pwa@2.0.0-rc.40_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0.0-rc.14_@typ_lthvsgq2kyiue6hwip5mad7t2y/node_modules/@vuepress/plugin-pwa/lib/client/composables/setupViewPoint.js";
import { PwaReadyPopup as _PwaReadyPopup } from "D:/JAVA项目/new_cs/qita1/node_modules/.pnpm/@vuepress+plugin-pwa@2.0.0-rc.40_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0.0-rc.14_@typ_lthvsgq2kyiue6hwip5mad7t2y/node_modules/@vuepress/plugin-pwa/lib/client/components/PwaReadyPopup.js";

import "D:/JAVA项目/new_cs/qita1/node_modules/.pnpm/@vuepress+plugin-pwa@2.0.0-rc.40_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0.0-rc.14_@typ_lthvsgq2kyiue6hwip5mad7t2y/node_modules/@vuepress/plugin-pwa/lib/client/styles/vars.css";

const locales = __PWA_LOCALES__;

const PwaReadyPopup = () => h(_PwaReadyPopup, { locales })

export default defineClientConfig({
  setup: () => {
    setupPwa(__SW_PATH__, __SW_FORCE_UPDATE__);
    setupViewPoint();
  },
  rootComponents: [
    PwaReadyPopup,
  ],
});
