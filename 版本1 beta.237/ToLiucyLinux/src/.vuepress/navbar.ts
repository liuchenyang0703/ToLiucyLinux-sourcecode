// @ts-ignore
import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  {
    text: "文档指南",
    icon: "columns",
    link: "/home/"
  },
  {
    text: "面试题大全",
    icon: "a-061_shuben",
    link: "/interview/",
  },
  {
    text: "运维工具配置",
    icon: "banshou",
    link: "/tools-all/",
  },
  {
    text: "运维服务官网",
    icon: "xiaoquguanwang",
    link: "/website-all/",
  },
  {
    text: "运维文库汇总",
    icon: "wenben",
    link: "/document-all/"
  },
  {
    text: "网站相关",
    icon: "circle-info",
    children: [
      {
        text: "关于作者",
        icon: "gerenjieshao",
        link: "/about-the-author/"
      },
      {
        text: "更新历史",
        icon: "lishi",
        link: "/timeline/",
      },
    ],
  },
]);
