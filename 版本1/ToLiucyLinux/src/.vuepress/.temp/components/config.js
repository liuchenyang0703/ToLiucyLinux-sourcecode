import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "E:/IDEA/项目/ToLiucyLinux/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useStyleTag } from "E:/IDEA/项目/ToLiucyLinux/node_modules/@vueuse/core/index.mjs";
import Badge from "E:/IDEA/项目/ToLiucyLinux/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "E:/IDEA/项目/ToLiucyLinux/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "E:/IDEA/项目/ToLiucyLinux/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "E:/IDEA/项目/ToLiucyLinux/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

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
    () => h(BackToTop, {}),
  ],
});
