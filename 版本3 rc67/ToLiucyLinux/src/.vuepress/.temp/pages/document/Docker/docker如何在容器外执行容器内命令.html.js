import comp from "D:/JAVA项目/new_cs/rc67/src/.vuepress/.temp/pages/document/Docker/docker如何在容器外执行容器内命令.html.vue"
const data = JSON.parse("{\"path\":\"/document/Docker/docker%E5%A6%82%E4%BD%95%E5%9C%A8%E5%AE%B9%E5%99%A8%E5%A4%96%E6%89%A7%E8%A1%8C%E5%AE%B9%E5%99%A8%E5%86%85%E5%91%BD%E4%BB%A4.html\",\"title\":\"docker如何在容器外执行容器内命令\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"docker如何在容器外执行容器内命令\",\"icon\":\"circle-info\",\"order\":1,\"category\":[\"Linux\",\"Docker\"],\"tag\":[\"Linux\",\"Docker\",\"运维\"],\"pageview\":false,\"date\":\"2024-12-16T00:00:00.000Z\",\"comment\":false,\"breadcrumb\":false,\"gitInclude\":[],\"description\":\"前言 有时候我们想执行某个容器的某条命令，但又不想进入容器内。那该怎么办？ 所以就有一种办法，我们直接在容器外执行容器内的命令，来进行一些容器内的操作。 参考实例 这个不使用it，一般用于执行周期性计划任务之类的，容易遇到：报错； -it 有可能造成命令不执行，特别是在程序调用时，确认的确需要的时候再加上-it； 在执行周期性计划任务的时候就不要加-i...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"http://liuchenyang.top/ToLiucyLinux/document/Docker/docker%E5%A6%82%E4%BD%95%E5%9C%A8%E5%AE%B9%E5%99%A8%E5%A4%96%E6%89%A7%E8%A1%8C%E5%AE%B9%E5%99%A8%E5%86%85%E5%91%BD%E4%BB%A4.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"ToLiucyLinux\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"docker如何在容器外执行容器内命令\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"前言 有时候我们想执行某个容器的某条命令，但又不想进入容器内。那该怎么办？ 所以就有一种办法，我们直接在容器外执行容器内的命令，来进行一些容器内的操作。 参考实例 这个不使用it，一般用于执行周期性计划任务之类的，容易遇到：报错； -it 有可能造成命令不执行，特别是在程序调用时，确认的确需要的时候再加上-it； 在执行周期性计划任务的时候就不要加-i...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161456196.gif\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Linux\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Docker\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"运维\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2024-12-16T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"docker如何在容器外执行容器内命令\\\",\\\"image\\\":[\\\"https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161456196.gif\\\"],\\\"datePublished\\\":\\\"2024-12-16T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Liucy\\\",\\\"url\\\":\\\"http://liuchenyang.top\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"前言\",\"slug\":\"前言\",\"link\":\"#前言\",\"children\":[]},{\"level\":2,\"title\":\"参考实例\",\"slug\":\"参考实例\",\"link\":\"#参考实例\",\"children\":[]},{\"level\":2,\"title\":\"注意事项：\",\"slug\":\"注意事项\",\"link\":\"#注意事项\",\"children\":[]}],\"readingTime\":{\"minutes\":1.46,\"words\":438},\"filePathRelative\":\"document/Docker/docker如何在容器外执行容器内命令.md\",\"localizedDate\":\"2024年12月16日\",\"autoDesc\":true}")
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
