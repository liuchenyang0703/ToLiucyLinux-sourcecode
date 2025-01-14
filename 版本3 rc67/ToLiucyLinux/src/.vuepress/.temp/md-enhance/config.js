import CodeDemo from "D:/JAVA项目/new_cs/rc67/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.67_markdown-it@14.1.0_sass-embedded@1.83.1_vuepress@2.0.0_g2jaxhhngw47k4g3wvsti2wobu/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/JAVA项目/new_cs/rc67/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.67_markdown-it@14.1.0_sass-embedded@1.83.1_vuepress@2.0.0_g2jaxhhngw47k4g3wvsti2wobu/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import Playground from "D:/JAVA项目/new_cs/rc67/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.67_markdown-it@14.1.0_sass-embedded@1.83.1_vuepress@2.0.0_g2jaxhhngw47k4g3wvsti2wobu/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Playground", Playground);
  },
};
