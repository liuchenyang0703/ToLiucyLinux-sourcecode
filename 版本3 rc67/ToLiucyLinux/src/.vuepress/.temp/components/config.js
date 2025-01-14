import { hasGlobalComponent } from "D:/JAVA项目/new_cs/rc67/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.69_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19_@types+n_ohqgv3nsjfepnsuza7regi4xb4/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "D:/JAVA项目/new_cs/rc67/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.67_sass-embedded@1.83.1_vuepress@2.0.0-rc.19_@vuepress+bu_3agowgled5qlckf76vx77j5gbe/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";

import "D:/JAVA项目/new_cs/rc67/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.69_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19_@types+n_ohqgv3nsjfepnsuza7regi4xb4/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
