// @ts-ignore
import { sidebar } from "vuepress-theme-hope";
import {interview} from "./interview.js";
import {document} from "./document.js";
import {timeline} from "./timeline.js";

export default sidebar({
  "/interview/": interview,
  "/document/": document,
  "/timeline/": timeline,
  // 展示侧边栏目录
  "/": [

  ],
});

