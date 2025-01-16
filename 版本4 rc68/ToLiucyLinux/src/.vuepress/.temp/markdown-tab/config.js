import { CodeTabs } from "D:/JAVA项目/ToLiucyLinux-test/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.70_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_sqvuhti3fdsslifttiwitwbgbu/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/JAVA项目/ToLiucyLinux-test/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.70_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_sqvuhti3fdsslifttiwitwbgbu/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/JAVA项目/ToLiucyLinux-test/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.70_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_sqvuhti3fdsslifttiwitwbgbu/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
