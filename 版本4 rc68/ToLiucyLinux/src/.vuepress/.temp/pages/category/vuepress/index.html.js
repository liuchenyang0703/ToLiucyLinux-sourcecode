import comp from "D:/JAVA项目/ToLiucyLinux-test/src/.vuepress/.temp/pages/category/vuepress/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/vuepress/\",\"title\":\"VuePress 分类\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"VuePress 分类\",\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"blog\":{\"type\":\"category\",\"name\":\"VuePress\",\"key\":\"category\"},\"layout\":\"BlogCategory\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"http://liuchenyang.top/category/vuepress/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"ToLiucyLinux\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"VuePress 分类\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"VuePress 分类\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\",\"copyright\":\"著作权归 Mr.Liucy 所有，基于 MIT 协议，原文链接：https://liuchenyang.top\"}")
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
