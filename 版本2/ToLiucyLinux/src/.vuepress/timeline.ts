import { arraySidebar } from "vuepress-theme-hope";

export const timeline = arraySidebar([
    {
        text: "更新记录",
        icon: "lishi",
        prefix: "timeline/",
        collapsible: true,
        children: "structure",
    },
]);