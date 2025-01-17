import { Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "E:/vscode/项目/ToLiucyLinux/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.68_@vuepress+plugin-search@2.0.0-rc.70_vuepress@2.0.0-rc.19_@vue_7fnumlotswslzljo74vyq5tjbm/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "E:/vscode/项目/ToLiucyLinux/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.70_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19__a3kb4rb6ymyz33ycvcy7b2i67a/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, SocialMedias, Timeline, setupBlog } from "E:/vscode/项目/ToLiucyLinux/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.68_@vuepress+plugin-search@2.0.0-rc.70_vuepress@2.0.0-rc.19_@vue_7fnumlotswslzljo74vyq5tjbm/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/export.js";
import "E:/vscode/项目/ToLiucyLinux/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.68_@vuepress+plugin-search@2.0.0-rc.70_vuepress@2.0.0-rc.19_@vue_7fnumlotswslzljo74vyq5tjbm/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/styles/all.scss";
import { GlobalEncrypt, LocalEncrypt } from "E:/vscode/项目/ToLiucyLinux/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.68_@vuepress+plugin-search@2.0.0-rc.70_vuepress@2.0.0-rc.19_@vue_7fnumlotswslzljo74vyq5tjbm/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "E:/vscode/项目/ToLiucyLinux/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.68_@vuepress+plugin-search@2.0.0-rc.70_vuepress@2.0.0-rc.19_@vue_7fnumlotswslzljo74vyq5tjbm/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "E:/vscode/项目/ToLiucyLinux/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.70_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19_@types+n_2fq4brjtekt53ecwa4bdbanloe/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "E:/vscode/项目/ToLiucyLinux/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.70_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19_@types+n_2fq4brjtekt53ecwa4bdbanloe/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "E:/vscode/项目/ToLiucyLinux/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.70_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19_@types+n_2fq4brjtekt53ecwa4bdbanloe/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "E:/vscode/项目/ToLiucyLinux/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.68_@vuepress+plugin-search@2.0.0-rc.70_vuepress@2.0.0-rc.19_@vue_7fnumlotswslzljo74vyq5tjbm/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
  }
};
