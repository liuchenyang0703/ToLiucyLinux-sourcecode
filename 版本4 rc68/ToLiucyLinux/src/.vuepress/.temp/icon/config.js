import { hasGlobalComponent } from "E:/vscode/项目/ToLiucyLinux/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.70_vuepress@2.0.0-rc.19_@vuepress+bundler-vite@2.0.0-rc.19_@types+n_2fq4brjtekt53ecwa4bdbanloe/node_modules/@vuepress/helper/lib/client/index.js";
import { useStyleTag } from "E:/vscode/项目/ToLiucyLinux/node_modules/.pnpm/@vueuse+core@12.4.0/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "E:/vscode/项目/ToLiucyLinux/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0-rc.70_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+bundler-v_cmvybm7wh22nc4kuoufjlxpaxi/node_modules/@vuepress/plugin-icon/lib/client/index.js"

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
@import url("//at.alicdn.com/t/c/font_4791124_zsi75y978si.css");
`);
  },
}
