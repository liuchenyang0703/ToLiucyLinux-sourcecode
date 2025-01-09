import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "http://liuchenyang.top",

  author: {
    name: "Liucy",
    url: "http://liuchenyang.top",
  },

  // iconAssets: "fontawesome-with-brands",
  iconAssets: "//at.alicdn.com/t/c/font_4791124_t6xqfdpodsp.css", // 使用阿里图标库
  logo: "/logo.png",
  //github导航栏及文章中的编辑链接配置
  repo: "liuchenyang0703/ToLiucyLinux",
  repoLabel: "GitHub",
  repoDisplay: true,
  docsBranch: "main",
  docsDir: "src",
  // 禁用文章github编辑链接
  editLink: false,
  // 是否展示面包屑导航
  breadcrumb: false,


  // 用户可以自定义的多主题色
  // themeColor: {
  //   yellow: "#FEC201",
  //   pink: "#EF699F",
  //   purple: "#684CCE",
  //   orange: "#FF8C3D",
  // },
  // 暗黑模式切换-在深色模式和浅色模式中切换
  darkmode: "toggle",
  // 全屏按钮
  fullscreen: true,

  //提取到h6级标题
  headerDepth: 6,

  // navbar导航栏配置
  navbar,
  // sidebar侧边栏配置
  sidebar,

  // 页脚信息，包括备案号的链接。
  footer: '<a href="http://beian.miit.gov.cn/" target="_blank">京ICP备2023037493号-1</a>',

  // 页面显示的信息项
  pageInfo: [
    "Author",
    "Category",
    "Tag",
    "Date",
    "Original",
    "Word",
    "ReadingTime",
  ],
  // 是否显示页脚
  displayFooter: true,

  // 加密配置
  encrypt: {
    config: {
      "/database/Kang/": ["3306"],
      "/framework/SpringSecurity/": ["019b"],
      "/timeline/":["5555"],
      "/Linux_linshi/": ["5555"],
    },
  },
  // 加密文章的提示信息
  encryptLocales:{
    iconLabel: '文章已加密',
    placeholder: '关注公众号【小刘Linux】, 回复暗号：001'
  },

  // hotReload: true,
  // 底部显示最后更新时间
  lastUpdated: true,
  // 底部显示贡献者列表
  contributors: true,



  plugins: {
    // 左边弹窗公告
    // components: {
    //   rootComponents: {
    //     notice: [
    //       {
    //         path: "/",
    //         title: "2023技术年货汇总",
    //         showOnce: true,
    //         content:
    //             "抽空整理了一些优秀的技术团队公众号 2023 年的优质技术文章汇总，质量都挺高的，强烈建议打开这篇文章看看。",
    //         actions: [
    //           {
    //             text: "开始阅读",
    //             link: "https://www.yuque.com/snailclimb/dr6cvl/nt5qc467p3t6s13k?singleDoc# 《2023技术年货》",
    //             type: "primary",
    //           },
    //         ],
    //       },
    //     ],
    //   }
    // },

    // 代码复制功能-vuepress-plugin-copy-code2
    copyCode: {
      // 在移动端也可以实现复制代码
      showInMobile: true,
      // 代码复制成功提示消息的时间-ms
      duration: 3000,
    },

    // 版权保护
    copyright: {
      author: "LiucyLinux(http://liuchenyang.top)",
      license: "MIT",
      triggerLength: 0,
      maxLength: 0,
      canonical: "http://liuchenyang.top",
      // 复制出现版权信息，例如：看到版本已经是jdk1.8的了，著作权归LiucyLinux(http://liuchenyang.top)所有基于MIT协议原文链接：http://liuchenyang.top/Java/Linux%E4%B8%AD%E5%AE%89%E8%A3%85jdk1.8%E5%92%8C%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F.html
      global: false
    },

    // 用于增强 Markdown 的渲染功能
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
