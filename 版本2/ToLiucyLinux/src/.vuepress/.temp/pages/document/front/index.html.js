import comp from "E:/vscode/项目/ToLiucyLinux-new/src/.vuepress/.temp/pages/document/front/index.html.vue"
const data = JSON.parse("{\"path\":\"/document/front/\",\"title\":\"Front\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Front\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"http://liuchenyang.top/ToLiucyLinux/document/front/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"ToLiucyLinux\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Front\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Liucy\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Front\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
