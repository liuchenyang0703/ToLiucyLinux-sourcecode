<template><div><h1 id="使用脚手架创建vue3项目" tabindex="-1"><a class="header-anchor" href="#使用脚手架创建vue3项目"><span>使用脚手架创建Vue3项目</span></a></h1>
<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言"><span>1.前言</span></a></h2>
<p>大家好，我是Leo哥🫣🫣🫣，最近在复习Vue3相关知识，今天主要想分享一下Vue3创建项目的几种方式。好了，话不多说让我们开始吧😎😎😎。</p>
<h2 id="_2-创建vue3项目的几种方式" tabindex="-1"><a class="header-anchor" href="#_2-创建vue3项目的几种方式"><span>2.创建Vue3项目的几种方式</span></a></h2>
<p>目前创建vue3的项目方式比较多：</p>
<ul>
<li>vue-cli创建vue3项目</li>
<li>vite创建vue3项目</li>
<li>create-vue创建vue3项目</li>
</ul>
<p>本次文章是主要介绍第二种和第三种方式进行演示，关于第一种使用vue-cli的方式创建项目，在vue2中使用较多，所以我们这里不过太多赘述。</p>
<h2 id="_3-使用vite创建vue3项目" tabindex="-1"><a class="header-anchor" href="#_3-使用vite创建vue3项目"><span>3.使用Vite创建Vue3项目</span></a></h2>
<ul>
<li>通过<a href="https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project" target="_blank" rel="noopener noreferrer">vite官网的介绍</a>，我们可以通过vite创建各种各样的项目，我们这里直接执行创建就好了。</li>
<li>我这里使用pnpm创建项目，大家可以选择其他包管理器进行项目创建。</li>
</ul>
<div class="language-node line-numbers-mode" data-highlighter="shiki" data-ext="node" data-title="node" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pnpm create vite</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311271029235.png" alt="image-20231127102927179" tabindex="0" loading="lazy"><figcaption>image-20231127102927179</figcaption></figure>
<p>大家可以按照我这个步骤一步一步来即可。</p>
<p>第一步，进入我们创建好的vue3项目目录</p>
<div class="language-node line-numbers-mode" data-highlighter="shiki" data-ext="node" data-title="node" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cd vue3-demo</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>第二步，进行依赖安装</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>npm install</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>第三步，启动我们的vue3项目</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>npm run dev</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311271036201.png" alt="image-20231127103648176" tabindex="0" loading="lazy"><figcaption>image-20231127103648176</figcaption></figure>
<p>浏览器输入地址即可。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311271037697.png" alt="image-20231127103711652" tabindex="0" loading="lazy"><figcaption>image-20231127103711652</figcaption></figure>
<p>看到上面，这个界面，说明我们已经大功告成了！</p>
<h2 id="_4-使用create-vue创建vue3项目" tabindex="-1"><a class="header-anchor" href="#_4-使用create-vue创建vue3项目"><span>4.使用create-vue创建Vue3项目</span></a></h2>
<ul>
<li>最后一种也是我最推荐大家使用的一种，<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Fcreate-vue" target="_blank" rel="noopener noreferrer">这个库</a>也是官方进行维护的，笔者一直都是使用这种方式进行创建的，简单粗暴。</li>
<li>执行方式也是比较简单的，我们可以基于vite创建vue3或者vue2的项目</li>
</ul>
<div class="language-npm line-numbers-mode" data-highlighter="shiki" data-ext="npm" data-title="npm" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>npm init vue@3</span></span>
<span class="line"><span>npm init vue@2</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>首先我们找一个我们需要创建项目的文件夹，右键打开cmd窗口。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311270939693.png" alt="image-20231127093955647" tabindex="0" loading="lazy"><figcaption>image-20231127093955647</figcaption></figure>
<p>然后执行以下命令即可。</p>
<div class="language-node line-numbers-mode" data-highlighter="shiki" data-ext="node" data-title="node" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>npm init vue@latest</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311270941279.png" alt="image-20231127094145249" tabindex="0" loading="lazy"><figcaption>image-20231127094145249</figcaption></figure>
<p>大家按照我这个步骤一步一步选择执行即可。</p>
<p>完成我们接着执行依次命令即可。</p>
<p>第一步，进入我们创建好的vue3项目目录</p>
<div class="language-node line-numbers-mode" data-highlighter="shiki" data-ext="node" data-title="node" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cd vue3-demo</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>第二步，进行依赖安装</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>npm install</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>第三步，启动我们的vue3项目</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>npm run dev</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311271022037.png" alt="image-20231127102205009" tabindex="0" loading="lazy"><figcaption>image-20231127102205009</figcaption></figure>
<p>浏览器输入地址即可。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311271022534.png" alt="image-20231127102245414" tabindex="0" loading="lazy"><figcaption>image-20231127102245414</figcaption></figure>
<p>看到以上界面，说明我们的Vue3入门程序没问题，大功告成！</p>
<h2 id="_5-参考文献" tabindex="-1"><a class="header-anchor" href="#_5-参考文献"><span>5.参考文献</span></a></h2>
<ul>
<li><a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">https://vitejs.dev/</a></li>
<li><a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">https://vuejs.org/</a></li>
</ul>
</div></template>


