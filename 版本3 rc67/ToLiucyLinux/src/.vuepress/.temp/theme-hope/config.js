import { Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "D:/JAVA项目/new_cs/rc67/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.67_@vuepress+plugin-search@2.0.0-rc.69_vuepress@2.0.0-rc.19_@vue_okn3k2dl7vn7keky3sk5dug7xe/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "D:/JAVA项目/new_cs/rc67/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.69_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19__gtwspwpfbi6ofluwc4hhrsga4e/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { GlobalEncrypt, LocalEncrypt } from "D:/JAVA项目/new_cs/rc67/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.67_@vuepress+plugin-search@2.0.0-rc.69_vuepress@2.0.0-rc.19_@vue_okn3k2dl7vn7keky3sk5dug7xe/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "D:/JAVA项目/new_cs/rc67/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.67_@vuepress+plugin-search@2.0.0-rc.69_vuepress@2.0.0-rc.19_@vue_okn3k2dl7vn7keky3sk5dug7xe/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "D:/JAVA项目/new_cs/rc67/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.69_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19_@types+n_ohqgv3nsjfepnsuza7regi4xb4/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "D:/JAVA项目/new_cs/rc67/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.69_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19_@types+n_ohqgv3nsjfepnsuza7regi4xb4/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "D:/JAVA项目/new_cs/rc67/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.69_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19_@types+n_ohqgv3nsjfepnsuza7regi4xb4/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "D:/JAVA项目/new_cs/rc67/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.67_@vuepress+plugin-search@2.0.0-rc.69_vuepress@2.0.0-rc.19_@vue_okn3k2dl7vn7keky3sk5dug7xe/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

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
};
