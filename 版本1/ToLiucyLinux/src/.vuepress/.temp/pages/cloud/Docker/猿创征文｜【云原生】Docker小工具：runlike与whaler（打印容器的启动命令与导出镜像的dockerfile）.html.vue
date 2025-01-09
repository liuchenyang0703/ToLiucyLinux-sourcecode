<template><div><figure><img src="https://img-blog.csdnimg.cn/c98ed69feb9d43c59a00655e8c09adba.jpeg" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>@[toc]</p>
<h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1>
<blockquote>
<p>  自上次发现了一款从docker镜像里提取dockerfile的工具，今天我们又发现了两个有趣的docker小工具，其中有一个也是提取dockerfile的。</p>
</blockquote>
<p>两个有趣的docker小工具：runlike与whaler</p>
<ul>
<li>runlike：通过容器打印出容器的启动命令</li>
<li>whaler：通过镜像导出dockerfile</li>
</ul>
<h2 id="runlike-通过容器打印出容器的启动命令" tabindex="-1"><a class="header-anchor" href="#runlike-通过容器打印出容器的启动命令" aria-hidden="true">#</a> runlike：通过容器打印出容器的启动命令</h2>
<h3 id="方法一-直接通过pip方式安装" tabindex="-1"><a class="header-anchor" href="#方法一-直接通过pip方式安装" aria-hidden="true">#</a> 方法一：直接通过pip方式安装</h3>
<blockquote>
<p>如果没有pip可以选择先装pip；参考：<a href="https://liucy.blog.csdn.net/article/details/126519415?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">【Linux】中安装pip（详细教程）<ExternalLinkIcon/></a></p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pip <span class="token function">install</span> runlike
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="方法二-通过容器方式免安装使用" tabindex="-1"><a class="header-anchor" href="#方法二-通过容器方式免安装使用" aria-hidden="true">#</a> 方法二：通过容器方式免安装使用</h3>
<blockquote>
<p>使用设置别名的方式来做，如果长期使用，可设置为永久别名；参考：<a href="https://liucy.blog.csdn.net/article/details/123204224?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Linux设置永久别名alias的方法<ExternalLinkIcon/></a></p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">alias</span> <span class="token assign-left variable">runlike</span><span class="token operator">=</span><span class="token string">"docker run --rm -v /var/run/docker.sock:/var/run/docker.sock assaflavie/runlike"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这种方法需要拉取镜像，自动创建容器来加载这个命令，个人感觉第一种方法比较好一些；</p>
<h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>runlike 容器名/容器id
runlike <span class="token parameter variable">-p</span> 容器名/容器id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><font color=red>runlike</font>打印出来的是很多在一行；例如：<figure><img src="https://img-blog.csdnimg.cn/90b7454c443c43eeb9ff8a92e89c6956.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<font color=red>runlike -p</font> 加-p参数会给你整理一行一行整理出来，看着比较简洁；例如：<figure><img src="https://img-blog.csdnimg.cn/074ff8772a5947f994559d469cff50af.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="whaler-通过镜像导出dockerfile" tabindex="-1"><a class="header-anchor" href="#whaler-通过镜像导出dockerfile" aria-hidden="true">#</a> whaler：通过镜像导出dockerfile</h2>
<blockquote>
<p>  平时可能会构建很多不同的镜像，比如维护一些基础Docker镜像、想查看一些公开仓库的Docker镜像是怎么构建的，或因为长时间不维护找不到当时构建镜像的Dockerfile，或者因为网络无法查看时，能从镜像导出Dockerfile就显得很重要，这里可以通过whaler来快速的导出. 这里我们依旧不安装，通过容器化的方式使用whaler命令设置别名，便于使用；其实他和我写过的另一个命令是一样的dfimage，都是一样的效果；<br>
<a href="https://liucy.blog.csdn.net/article/details/123203549?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">如何从docker镜像里提取dockerfile<ExternalLinkIcon/></a></p>
</blockquote>
<p>同样的设置永久的别名可参考：<a href="https://liucy.blog.csdn.net/article/details/123204224?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Linux设置永久别名alias的方法<ExternalLinkIcon/></a></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">alias</span> <span class="token assign-left variable">whaler</span><span class="token operator">=</span><span class="token string">"docker run -t --rm -v /var/run/docker.sock:/var/run/docker.sock:ro pegleg/whaler"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置完别名就可以来从镜像中导出dockerfile了；</p>
<h3 id="用法-1" tabindex="-1"><a class="header-anchor" href="#用法-1" aria-hidden="true">#</a> 用法</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>whaler 镜像名/镜像id
whaler <span class="token parameter variable">-sV</span><span class="token operator">=</span><span class="token number">1.36</span> 镜像名/镜像id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>直接用whaler会报错，需要添加一个参数；</p>
<figure><img src="https://img-blog.csdnimg.cn/03675b5dde0542f9ac82d47a143c9573.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>这样就可以出来了，也可以重定向到一个文件中&gt;a.txt就可以；<br>
当然这个比较少，因为这个镜像也就只有1M，所以，不会输出很多东西，感兴趣的朋友可以去自己写一个镜像，或者去官网拉一个大一点的镜像，然后再来测试，就会有很多很多的，特别详细；</p>
<figure><img src="https://img-blog.csdnimg.cn/a79932fd89bb48c6b87f67e55d1f7c01.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章" aria-hidden="true">#</a> 相关文章</h1>
<blockquote>
<p>文章一：<a href="https://liucy.blog.csdn.net/article/details/126519415?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">【Linux】中安装pip（详细教程）<ExternalLinkIcon/></a><br>
文章二：<a href="https://liucy.blog.csdn.net/article/details/123204224?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Linux设置永久别名alias的方法<ExternalLinkIcon/></a><br>
文章三：<a href="https://liucy.blog.csdn.net/article/details/123203549?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">如何从docker镜像里提取dockerfile<ExternalLinkIcon/></a></p>
</blockquote>
</div></template>


