import { defineClientConfig } from "vuepress/client";
import { HopeIcon, Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "E:/vscode/项目/ToLiucyLinux-new/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.52_@vuepress+plugin-docsearch@2.0.0-rc.40_@algolia+client-search_ptnzgwpx4odnwcepa2zh3mm5te/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "E:/vscode/项目/ToLiucyLinux-new/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.39_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0.0-rc.14__crtjyg44yt6ra76e2yyjk72zxy/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { GlobalEncrypt, LocalEncrypt } from "E:/vscode/项目/ToLiucyLinux-new/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.52_@vuepress+plugin-docsearch@2.0.0-rc.40_@algolia+client-search_ptnzgwpx4odnwcepa2zh3mm5te/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "E:/vscode/项目/ToLiucyLinux-new/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.52_@vuepress+plugin-docsearch@2.0.0-rc.40_@algolia+client-search_ptnzgwpx4odnwcepa2zh3mm5te/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "E:/vscode/项目/ToLiucyLinux-new/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.39_vuepress@2.0.0-rc.14_@vuepress+bundler-vite@2.0.0-rc.14_@types+n_56ppnv63nqaolk5w3xlnpirkke/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "E:/vscode/项目/ToLiucyLinux-new/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.52_@vuepress+plugin-docsearch@2.0.0-rc.40_@algolia+client-search_ptnzgwpx4odnwcepa2zh3mm5te/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
});