<template><div><h2 id="项目文件结构" tabindex="-1"><a class="header-anchor" href="#项目文件结构"><span>项目文件结构</span></a></h2>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>.</span></span>
<span class="line"><span>├── src → 由你指定的文档文件夹</span></span>
<span class="line"><span>│    │</span></span>
<span class="line"><span>│    ├── .vuepress (可选的) → 用于存放全局的配置、组件、静态资源等</span></span>
<span class="line"><span>│    │    │</span></span>
<span class="line"><span>│    │    ├── dist (默认的) → 构建输出目录</span></span>
<span class="line"><span>│    │    │</span></span>
<span class="line"><span>│    │    ├── public  → 静态资源目录，存放图标等静态资源</span></span>
<span class="line"><span>│    │    │</span></span>
<span class="line"><span>│    │    ├── styles  → 用于存放样式相关的scss文件</span></span>
<span class="line"><span>│    │    │</span></span>
<span class="line"><span>│    │    ├── config.ts → 配置文件的入口文件（必选）</span></span>
<span class="line"><span>│    │    │             </span></span>
<span class="line"><span>│    │    └── theme.ts → 配置文件的入口文件（必选）</span></span>
<span class="line"><span>│    │    │             </span></span>
<span class="line"><span>│    │    └── client.ts → 客户端文件（用于一些样式）</span></span>
<span class="line"><span>│    │    │             </span></span>
<span class="line"><span>│    │    └── navbar.ts → 导航栏配置</span></span>
<span class="line"><span>│    │    │             </span></span>
<span class="line"><span>│    │    └── sidebar.ts → 侧边栏配置</span></span>
<span class="line"><span>│    │    │             </span></span>
<span class="line"><span>│    │    ├── document.ts → 文档指南侧边栏配置</span></span>
<span class="line"><span>│    │    │             </span></span>
<span class="line"><span>│    │    └── interview.ts → 面试题文章侧边栏配置</span></span>
<span class="line"><span>│    │    │             </span></span>
<span class="line"><span>│    │    ├── update_history.ts → 历史更新记录侧边栏配置</span></span>
<span class="line"><span>│    │</span></span>
<span class="line"><span>│    ├── document → 文档指南文件存储目录</span></span>
<span class="line"><span>│    │</span></span>
<span class="line"><span>│    └── interview → 面试题文件存储目录</span></span>
<span class="line"><span>│    │</span></span>
<span class="line"><span>│    └── update_history → 历史更新记录目录</span></span>
<span class="line"><span>│    │</span></span>
<span class="line"><span>│    └── blog.md → 博客主页配置文件</span></span>
<span class="line"><span>│    │</span></span>
<span class="line"><span>│    └── document-all.md → 运维文库汇总配置文件</span></span>
<span class="line"><span>│    │</span></span>
<span class="line"><span>│    └── person.md → 个人介绍主页配置文件</span></span>
<span class="line"><span>│    │</span></span>
<span class="line"><span>│    └── README.md → 项目主页配置文件</span></span>
<span class="line"><span>│    │</span></span>
<span class="line"><span>│    └── structure.md → 项目文件结构配置文件</span></span>
<span class="line"><span>│    │</span></span>
<span class="line"><span>│    └── tools-all.md → 运维工具配置文件</span></span>
<span class="line"><span>│    │</span></span>
<span class="line"><span>│    └── website-all.md → 运维服务官网配置文件</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>└── package.json → Nodejs 配置文件</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>└── tsconfig.json → 官方的一个配置（必须要）</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>请注意 VuePress 对目录大小写敏感。</p>
</div>
<h2 id="test-gfm警告案例" tabindex="-1"><a class="header-anchor" href="#test-gfm警告案例"><span>test GFM警告案例</span></a></h2>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>重要文字</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>信息文字</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>提示文字</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>注意文字</p>
</div>
<div class="hint-container caution">
<p class="hint-container-title">警告</p>
<p>警告文字</p>
</div>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>注释文字</p>
</div>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:::</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> important</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">重要文字</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:::</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> info</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">信息文字</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:::</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tip</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">提示文字</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:::</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> warning</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">注意文字</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:::</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> caution</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">警告文字</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:::</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> note</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">注释文字</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:::</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


