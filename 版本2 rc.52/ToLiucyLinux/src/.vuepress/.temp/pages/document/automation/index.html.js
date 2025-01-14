import comp from "E:/vscode/项目/ToLiucyLinux-new/src/.vuepress/.temp/pages/document/automation/index.html.vue"
const data = JSON.parse("{\"path\":\"/document/automation/\",\"title\":\"Automation\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Automation\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"http://liuchenyang.top/ToLiucyLinux/document/automation/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"ToLiucyLinux\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Automation\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Liucy\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Automation\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
