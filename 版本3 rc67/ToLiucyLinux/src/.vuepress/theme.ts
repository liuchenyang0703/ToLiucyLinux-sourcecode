import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "http://liuchenyang.top",

  author: {
    name: "Liucy",
    url: "http://liuchenyang.top",
  },


  iconAssets: "//at.alicdn.com/t/c/font_4791124_t6xqfdpodsp.css", // 使用阿里图标库
  logo: "logo.png",
  //github导航栏及文章中的编辑链接配置
  repo: "liuchenyang0703/ToLiucyLinux",
  repoLabel: "GitHub",
  repoDisplay: true,
  docsBranch: "main",
  docsDir: "src",
  // 禁用文章github编辑链接
  editLink: false,
  // 是否展示面包屑导航
  breadcrumb: true,


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
  fullscreen: false,
  //提取到h6级标题
  headerDepth: 6,

  // 导航栏
  navbar,
  // 侧边栏
  sidebar,

  // 是否显示页脚
  displayFooter: true,
  // 页脚支持
  footer: '<a href="http://beian.miit.gov.cn/" target="_blank">京ICP备2023037493号-1</a>',

  // 加密配置
  encrypt: {
    config: {
      "/document/database/《MySQL数据库入门到大牛》/": ["3306"],
      "/timeline/":["5555"],
      "/document/Linux_linshi/": ["5555"],
    },
  },
  // 加密文章的提示信息
  encryptLocales:{
    iconLabel: '文章已加密',
    placeholder: '关注公众号【小刘Linux】, 回复暗号：001',
    // 如果输入不对，会提示
    errorHint: "哈哈，别调戏人家啦，按规则来嘛\n关注公众号【小刘Linux】, 回复暗号：001",
  },

  // 文章信息，可以填入数组，数组的顺序是各条目显示的顺序
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "Word","ReadingTime"],

  // blog: {
  //   // 个人介绍页地址
  //   intro: "/about-the-author/",
  //   sidebarDisplay: "mobile",
  //   // 博主头像
  //   avatar: "/assets/icon/itwanger-282.png",
  //   // 座右铭
  //   description:"没有什么使我停留——除了目的，纵然岸旁有玫瑰、有绿荫、有宁静的港湾，我是不系之舟。",
  //   medias: {
  //     Zhihu: "https://www.zhihu.com/people/cmower",
  //     CSDN: "https://blog.csdn.net/qing_gee",
  //     Github: "https://github.com/itwanger",
  //     Gitee: "https://gitee.com/itwanger",
  //   },
  // },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    // 启用博客类型
    // blog: true,

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

    // 注意: 仅用于测试! 你必须自行生成并在生产环境中使用自己的评论服务
    // comment: {
    //   provider: "Giscus",
    //   repo :"itwanger/tobebetterjavaer-giscus",
    //   repoId:"R_kgDOHBJssg",
    //   category:"Announcements",
    //   categoryId:"DIC_kwDOHBJsss4COJOx",
    // },
    //
    // components: {
    //   components: ["Badge", "VPCard"],
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
      author: "LiucyLinux(LiucyLinux.cn)",
      license: "MIT",
      triggerLength: 100,
      maxLength:100,
      canonical: "https://ToLiucyLinux.netlify.app/",
      global:true
    },

    // markdown文档的配置。
    mdEnhance: {
      // 自定义对齐
      align: true,
      // 启用属性功能，允许在 Markdown 元素上使用 HTML 属性
      attrs: true,
      // 启用代码选项卡功能
      codetabs: true,
      // 启用图表支持，允许在 Markdown 中插入 Chart.js 图表;在启用之前安装 chart.js
      chart: true,
      // 启用组件功能，允许在 Markdown 文件中嵌入 Vue 组件。这意味着你可以在 Markdown 文件中直接使用 Vue 组件，就像在 Vue 单文件组件（.vue 文件）中一样。
      component: true,
      // 启用代码演示功能，允许在 Markdown 中嵌入代码演示，通常用于展示代码的运行效果。
      demo: true,
      // 启用图片描述功能，允许为图像添加描述文本。
      figure: true,
      // 启用图片懒加载，可以提高页面加载速度，只有当图片进入视口时才会加载。
      imgLazyload: true,
      // 启用图片大小
      imgSize: true,
	  // 启用文件包含功能，允许在 Markdown 文件中包含其他文件的内容。这在需要复用某些内容或模块化文档时非常有用。
      include: true,
      // 启用标记功能，允许在文本中使用 == 来高亮显示部分文本。
      mark: true,
	  // 启用 PlantUML 支持，允许在 Markdown 文件中直接写出 PlantUML 图表。
      plantuml: true,
	  // 启用剧透功能，允许将部分内容隐藏，用户点击后显示。这在需要隐藏某些内容（如答案、提示等）时非常有用。
      spoiler: true,
	  // 启用 ECharts 图表支持，允许在 Markdown 中插入 ECharts 图表。在启用之前安装 echarts
      echarts: true,
      // 启用流程图支持，允许在 Markdown 中直接写出流程图。在启用之前安装 flowchart.ts
      flowchart: true,
      // 启用 GitHub Flavored Markdown (GFM) 支持，确保 Markdown 语法与 GitHub 保持一致。
      gfm: true,
      // 启用 KaTeX 支持，允许在 Markdown 中使用 TeX 语法来显示数学公式。在启用之前安装 katex
      katex: true,
      // 启用 Mermaid 支持，允许在 Markdown 中添加 Mermaid 图例。在启用之前安装 mermaid
      mermaid: true,
      // 启用交互演示功能，允许嵌入外部演示站点。这里配置了 TypeScript 和 Vue 的预设。
      playground: {
        presets: ["ts", "vue"],
      },
      // 启用样式化功能，允许自定义特定文本的样式。这里配置了一个匹配器和替换器
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
      // 启用下标功能，允许使用 _ 来表示下标。
      sub: true,
      // 启用上标功能，允许使用 ^ 来表示上标。
      sup: true,
      // 启用选项卡功能，允许将内容组织成标签页形式，方便用户切换查看不同部分的内容。
      tabs: true,
      // 支持任务列表
      tasklist: true,
      // 启用 v-pre 指令功能，允许在 Vue 组件中使用 v-pre 指令来防止内容被 Vue 解析。
      vPre: true,
      // 启用 Vue 交互演示功能，允许在 Markdown 中嵌入 Vue 代码演示。在启用之前安装 @vue/repl
      vuePlayground: true,

      // 启用 MathJax 支持，允许在 Markdown 文件中使用 TeX 语法来显示数学公式。在启用之前安装 mathjax-full
      // mathjax: true,
      // 启用 Reveal.js 支持，允许在 Markdown 文件中创建幻灯片。Reveal.js 是一个用于创建幻灯片的 JavaScript 库，支持多种插件，如代码高亮、数学公式、搜索、笔记和缩放。在启用之前安装 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // 启用幻灯片支持，允许在 Markdown 中插入幻灯片，并启用 Reveal.js 的一些插件，如高亮、数学公式、搜索、笔记和缩放。
      // presentation: ["highlight", "math", "search", "notes", "zoom"],
      
      // 启用 Sandpack 支持，允许在 Markdown 文件中嵌入交互式的代码编辑器。Sandpack 是一个用于创建交互式代码编辑器的库，支持多种框架，如 Vue 3。
      // sandpack: true,
    },

    // 搜索功能1，还有一个搜索在config.ts里
    // docsearch: {
    //   appId: "Q8AXWJS62N",
    //   apiKey: "e3dd6d66b6a191c4d20d30ccf0e52bc7",
    //   indexName: "ToLiucyLinux",
    //   locales: {
    //     "/": {
    //       placeholder: "搜索文档",
    //       translations: {
    //         button: {
    //           buttonText: "搜索文档",
    //           buttonAriaLabel: "搜索文档",
    //         },
    //         modal: {
    //           searchBox: {
    //             resetButtonTitle: "清除查询条件",
    //             resetButtonAriaLabel: "清除查询条件",
    //             cancelButtonText: "取消",
    //             cancelButtonAriaLabel: "取消",
    //           },
    //           startScreen: {
    //             recentSearchesTitle: "搜索历史",
    //             noRecentSearchesText: "没有搜索历史",
    //             saveRecentSearchButtonTitle: "保存至搜索历史",
    //             removeRecentSearchButtonTitle: "从搜索历史中移除",
    //             favoriteSearchesTitle: "收藏",
    //             removeFavoriteSearchButtonTitle: "从收藏中移除",
    //           },
    //           errorScreen: {
    //             titleText: "无法获取结果",
    //             helpText: "你可能需要检查你的网络连接",
    //           },
    //           footer: {
    //             selectText: "选择",
    //             navigateText: "切换",
    //             closeText: "关闭",
    //             searchByText: "搜索提供者",
    //           },
    //           noResultsScreen: {
    //             noResultsText: "无法找到相关结果",
    //             suggestedQueryText: "你可以尝试查询",
    //           },
    //         },
    //       },
    //     },
    //   },
    // },

    // 搜索插件
    search: {
      // 多语言支持
      locales: {
        "/": {
          placeholder: "搜索本站",
        },
      },
      // 热键支持
      hotKeys: ["command", "k"],
      // 最大推荐文章个数
      maxSuggestions: 10,
      // 排除首页
      isSearchable: (page) => page.path !== "/",
      // 允许搜索 Frontmatter 中的 `tags`
      getExtraFields: (page) => {
        // 确保返回值是一个字符串数组
        const tags = page.frontmatter.tags;
        if (Array.isArray(tags)) {
          return tags;
        } else if (typeof tags === "string") {
          return [tags];
        } else {
          return [];
        }
      },
    },

    // 主要设置的是图标，如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "logo.png",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "logo.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "logo.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "logo.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "logo.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "logo.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "logo.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //   },
    // },
  },
});
