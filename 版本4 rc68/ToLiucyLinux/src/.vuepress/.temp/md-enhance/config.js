import CodeDemo from "E:/vscode/项目/ToLiucyLinux/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.68_markdown-it@14.1.0_sass-embedded@1.83.3_vuepress@2.0.0_nwvz3puxauobsczfbjfhj4q2oy/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "E:/vscode/项目/ToLiucyLinux/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.68_markdown-it@14.1.0_sass-embedded@1.83.3_vuepress@2.0.0_nwvz3puxauobsczfbjfhj4q2oy/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
