import { hasGlobalComponent } from "D:/JAVA项目/new_cs/rc67/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.69_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19_@types+n_ohqgv3nsjfepnsuza7regi4xb4/node_modules/@vuepress/helper/lib/client/index.js";
import { useStyleTag } from "D:/JAVA项目/new_cs/rc67/node_modules/.pnpm/@vueuse+core@12.4.0/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "D:/JAVA项目/new_cs/rc67/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0-rc.69_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19_@ty_z3zg5goezflpjlgqotnjlbbuve/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconfont",
            prefix: "iconfont icon-",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useStyleTag(`\
@import url("//at.alicdn.com/t/c/font_4791124_t6xqfdpodsp.css");
`);
  },
}
