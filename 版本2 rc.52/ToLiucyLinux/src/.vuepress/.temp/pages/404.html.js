import comp from "E:/vscode/项目/ToLiucyLinux-new/src/.vuepress/.temp/pages/404.html.vue"
const data = JSON.parse("{\"path\":\"/404.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"layout\":\"NotFound\",\"description\":\"404 Not Found\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"http://liuchenyang.top/ToLiucyLinux/404.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"ToLiucyLinux\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"404 Not Found\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Liucy\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"\\\",\\\"description\\\":\\\"404 Not Found\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.01,\"words\":3},\"filePathRelative\":null,\"autoDesc\":true}")
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
