import { hasGlobalComponent } from "E:/vscode/项目/ToLiucyLinux/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.70_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19_@types+n_2fq4brjtekt53ecwa4bdbanloe/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "E:/vscode/项目/ToLiucyLinux/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.68_sass-embedded@1.83.3_vuepress@2.0.0-rc.19_@vuepress+bu_wk2wuuvtqo2lcg2ocsgqqkgkb4/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "E:/vscode/项目/ToLiucyLinux/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.68_sass-embedded@1.83.3_vuepress@2.0.0-rc.19_@vuepress+bu_wk2wuuvtqo2lcg2ocsgqqkgkb4/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "E:/vscode/项目/ToLiucyLinux/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.70_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19_@types+n_2fq4brjtekt53ecwa4bdbanloe/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
