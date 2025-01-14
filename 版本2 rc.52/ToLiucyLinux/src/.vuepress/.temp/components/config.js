import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "E:/vscode/项目/ToLiucyLinux-new/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.39_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0.0-rc.14_@types+n_56ppnv63nqaolk5w3xlnpirkke/node_modules/@vuepress/helper/lib/client/index.js";

import { useStyleTag } from "E:/vscode/项目/ToLiucyLinux-new/node_modules/.pnpm/@vueuse+core@10.11.0_vue@3.4.34/node_modules/@vueuse/core/index.mjs";
import Badge from "E:/vscode/项目/ToLiucyLinux-new/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.52_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0.0-rc.1_dyxyumbrh2uglpi7lrebwmroey/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "E:/vscode/项目/ToLiucyLinux-new/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.52_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0.0-rc.1_dyxyumbrh2uglpi7lrebwmroey/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";

import "E:/vscode/项目/ToLiucyLinux-new/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.52_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0.0-rc.1_dyxyumbrh2uglpi7lrebwmroey/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useStyleTag(`\
@import url("//at.alicdn.com/t/c/font_4791124_t6xqfdpodsp.css");
`);
  },
  rootComponents: [

  ],
});
