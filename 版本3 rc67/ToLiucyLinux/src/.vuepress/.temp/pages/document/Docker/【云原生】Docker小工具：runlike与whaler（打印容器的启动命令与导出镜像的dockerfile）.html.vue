<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161451089.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<blockquote>
<p>  自上次发现了一款从docker镜像里提取dockerfile的工具，今天我们又发现了两个有趣的docker小工具，其中有一个也是提取dockerfile的。</p>
</blockquote>
<p>两个有趣的docker小工具：runlike与whaler</p>
<ul>
<li>runlike：通过容器打印出容器的启动命令</li>
<li>whaler：通过镜像导出dockerfile</li>
</ul>
<h2 id="runlike-通过容器打印出容器的启动命令" tabindex="-1"><a class="header-anchor" href="#runlike-通过容器打印出容器的启动命令"><span>runlike：通过容器打印出容器的启动命令</span></a></h2>
<h3 id="方法一-直接通过pip方式安装" tabindex="-1"><a class="header-anchor" href="#方法一-直接通过pip方式安装"><span>方法一：直接通过pip方式安装</span></a></h3>
<blockquote>
<p>如果没有pip可以选择先装pip；参考：<a href="https://liucy.blog.csdn.net/article/details/126519415?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">【Linux】中安装pip（详细教程）</a></p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> runlike</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="方法二-通过容器方式免安装使用" tabindex="-1"><a class="header-anchor" href="#方法二-通过容器方式免安装使用"><span>方法二：通过容器方式免安装使用</span></a></h3>
<blockquote>
<p>使用设置别名的方式来做，如果长期使用，可设置为永久别名；参考：<a href="https://liucy.blog.csdn.net/article/details/123204224?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Linux设置永久别名alias的方法</a></p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">alias</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> runlike</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"docker run --rm -v /var/run/docker.sock:/var/run/docker.sock assaflavie/runlike"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这种方法需要拉取镜像，自动创建容器来加载这个命令，个人感觉第一种方法比较好一些；</p>
<h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">runlike</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 容器名/容器id</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">runlike</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 容器名/容器id</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><font color=red>runlike</font>打印出来的是很多在一行；例如：<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161451673.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<font color=red>runlike -p</font> 加-p参数会给你整理一行一行整理出来，看着比较简洁；例如：<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161451035.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="whaler-通过镜像导出dockerfile" tabindex="-1"><a class="header-anchor" href="#whaler-通过镜像导出dockerfile"><span>whaler：通过镜像导出dockerfile</span></a></h2>
<blockquote>
<p>  平时可能会构建很多不同的镜像，比如维护一些基础Docker镜像、想查看一些公开仓库的Docker镜像是怎么构建的，或因为长时间不维护找不到当时构建镜像的Dockerfile，或者因为网络无法查看时，能从镜像导出Dockerfile就显得很重要，这里可以通过whaler来快速的导出. 这里我们依旧不安装，通过容器化的方式使用whaler命令设置别名，便于使用；其实他和我写过的另一个命令是一样的dfimage，都是一样的效果；<br>
<a href="https://liucy.blog.csdn.net/article/details/123203549?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">如何从docker镜像里提取dockerfile</a></p>
</blockquote>
<p>同样的设置永久的别名可参考：<a href="https://liucy.blog.csdn.net/article/details/123204224?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Linux设置永久别名alias的方法</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">alias</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> whaler</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"docker run -t --rm -v /var/run/docker.sock:/var/run/docker.sock:ro pegleg/whaler"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>设置完别名就可以来从镜像中导出dockerfile了；</p>
<h3 id="用法-1" tabindex="-1"><a class="header-anchor" href="#用法-1"><span>用法</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">whaler</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 镜像名/镜像id</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">whaler</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -sV=1.36</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 镜像名/镜像id</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>直接用whaler会报错，需要添加一个参数；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161451165.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这样就可以出来了，也可以重定向到一个文件中&gt;a.txt就可以；<br>
当然这个比较少，因为这个镜像也就只有1M，所以，不会输出很多东西，感兴趣的朋友可以去自己写一个镜像，或者去官网拉一个大一点的镜像，然后再来测试，就会有很多很多的，特别详细；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161451998.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章"><span>相关文章</span></a></h2>
<blockquote>
<p>文章一：<a href="https://liucy.blog.csdn.net/article/details/126519415?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">【Linux】中安装pip（详细教程）</a><br>
文章二：<a href="https://liucy.blog.csdn.net/article/details/123204224?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Linux设置永久别名alias的方法</a><br>
文章三：<a href="https://liucy.blog.csdn.net/article/details/123203549?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">如何从docker镜像里提取dockerfile</a></p>
</blockquote>
</div></template>


