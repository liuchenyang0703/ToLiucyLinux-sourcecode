import { defineClientConfig } from "vuepress/client";
import CodeTabs from "E:/vscode/项目/ToLiucyLinux-new/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_vuepress@2.0.0-r_ungma2g5tzq4jpqonzunleku4i/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "E:/vscode/项目/ToLiucyLinux-new/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.39_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0.0-rc.14_@types+n_56ppnv63nqaolk5w3xlnpirkke/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "E:/vscode/项目/ToLiucyLinux-new/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_vuepress@2.0.0-r_ungma2g5tzq4jpqonzunleku4i/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "E:/vscode/项目/ToLiucyLinux-new/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_vuepress@2.0.0-r_ungma2g5tzq4jpqonzunleku4i/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "E:/vscode/项目/ToLiucyLinux-new/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_vuepress@2.0.0-r_ungma2g5tzq4jpqonzunleku4i/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "E:/vscode/项目/ToLiucyLinux-new/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_vuepress@2.0.0-r_ungma2g5tzq4jpqonzunleku4i/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import "E:/vscode/项目/ToLiucyLinux-new/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_vuepress@2.0.0-r_ungma2g5tzq4jpqonzunleku4i/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import { useHintContainers } from "E:/vscode/项目/ToLiucyLinux-new/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_vuepress@2.0.0-r_ungma2g5tzq4jpqonzunleku4i/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "E:/vscode/项目/ToLiucyLinux-new/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_vuepress@2.0.0-r_ungma2g5tzq4jpqonzunleku4i/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "E:/vscode/项目/ToLiucyLinux-new/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_vuepress@2.0.0-r_ungma2g5tzq4jpqonzunleku4i/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Playground from "E:/vscode/项目/ToLiucyLinux-new/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_vuepress@2.0.0-r_ungma2g5tzq4jpqonzunleku4i/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "E:/vscode/项目/ToLiucyLinux-new/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_vuepress@2.0.0-r_ungma2g5tzq4jpqonzunleku4i/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "E:/vscode/项目/ToLiucyLinux-new/node_modules/.pnpm/@mdit+plugin-spoiler@0.12.0_markdown-it@14.1.0/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "E:/vscode/项目/ToLiucyLinux-new/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_markdown-it@14.1.0_mathjax-full@3.2.2_vuepress@2.0.0-r_ungma2g5tzq4jpqonzunleku4i/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHintContainers();
  }
});
