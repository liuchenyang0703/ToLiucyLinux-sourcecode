<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者</a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主</a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主</a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区</a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<blockquote>
<p>本文主要讲解的是在windows上安装Go语言的环境和配置环境变量；</p>
<ul>
<li>Go语言版本：1.20.6</li>
<li>Windows版本：win11（win10通用）</li>
</ul>
</blockquote>
<h2 id="下载go环境" tabindex="-1"><a class="header-anchor" href="#下载go环境"><span>下载Go环境</span></a></h2>
<blockquote>
<p>下载go环境：<a href="https://golang.google.cn/dl/" target="_blank" rel="noopener noreferrer">Go下载官网链接</a></p>
</blockquote>
<p>找到自己想下载的版本，点击下载；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/eb7b8c27610a4dbd8521fde84e5a3405.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>等待下载完成，放到自己自定义的目录，然后解压；</p>
<p>解压后得到如下文件夹</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/209bd0b8b7734780b179e3e7910d4dee.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量"><span>配置环境变量</span></a></h2>
<blockquote>
<p>得到完整的 Go 环境之后，需要配置 Go 的环境变量，右击此电脑--&gt;属性--&gt;高级系统设置--&gt;环境变量，打开环境变量设置窗口。</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/cfdde248de514bda972735cffe6bede3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<font color=red>需要新建两个环境变量配置</font><ul>
<li>一个是 GOROOT ，这个就是 Go 环境所在目录的配置。</li>
<li>另一个是 GOPATH ，这个是 Go 项目的工作目录，你以后开发的代码就写在这个文件夹中。</li>
</ul>
</blockquote>
<blockquote>
<p>为了使所有的计算机用户都可以使用 Go 环境，我们就在系统变量之中配置。点击系统变量下的新建，在变量名一栏输入 GOROOT ，在变量值一栏输入 你解压文件所在的目录D:\路径\go。<br>
最后点击确定，就将 GOROOT 新建完毕。</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/c82f70c26c544452abd4e4d03e21c7de.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>GOPATH和GOROOT的配置略有不同，我建议配置两个GOPATH目录，第一个用于放 Go 语言的第三方包，第二个用于放自己的开发代码。我们来新建GOPATH。点击系统变量下的新建，在变量名一栏输入GOPATH，在变量值一栏输入任意两个目录，中间用英文分号隔开。<br><br>
示例：<code v-pre>D:\路径\go\library;D:\路径\go\workspace</code></p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/3a96e2a6b4c24b13956eab9ae40ab0a7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>然后将新建的GOROOT配置到 Path 这个环境变量中去，在系统变量中找到 Path，点击编辑-&gt;新建，输入%GOROOT%\bin，点击确定。并将所有母窗口的确定全部点下，确保环境变量生效。</p>
</blockquote>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/db1937621020418e886c2c474254f0f8.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/9d0056d98f5943d691d19f6e9bcdc716.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/c4f7f3b28f48479a9346cf864176bb83.png" alt="" loading="lazy"></p>
<blockquote>
<p>这样就配置完了，一路点击确定，直到桌面；</p>
</blockquote>
<h2 id="校验是否配置成功" tabindex="-1"><a class="header-anchor" href="#校验是否配置成功"><span>校验是否配置成功</span></a></h2>
<blockquote>
<p>windows+R 输入 cmd 打开终端，输入go version，如果输出如下图所示，则安装成功。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看Go版本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看Go环境变量</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> env</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/0104579797eb45dfb95577b8acdfe596.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/86961f5d9e3e40bda2032893e50551fa.png" alt="" loading="lazy"></p>
<h2 id="配置-go111module、goproxy、gosumdb" tabindex="-1"><a class="header-anchor" href="#配置-go111module、goproxy、gosumdb"><span>配置 GO111MODULE、GOPROXY、GOSUMDB</span></a></h2>
<blockquote>
<p>Go默认的GOPROXY的值是：GOPROXY=<a href="https://proxy.golang.org" target="_blank" rel="noopener noreferrer">https://proxy.golang.org</a>,direct。这个goproxy在使用go get安装第三方库的时候会报错，导致无法下载成功，所以必须要修改一下。<br><br>
比如改为：<a href="https://goproxy.io" target="_blank" rel="noopener noreferrer">https://goproxy.io</a>,direct （七牛镜像）或 <a href="https://mirrors.aliyun.com/goproxy%EF%BC%88%E9%98%BF%E9%87%8C%E4%BA%91%E9%95%9C%E5%83%8F%EF%BC%89" target="_blank" rel="noopener noreferrer">https://mirrors.aliyun.com/goproxy（阿里云镜像）</a></p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#开启mod模式（项目管理需要用到）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> env</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -w</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> GO111MODULE=on</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#重新设置成七牛镜像源（推荐）或阿里镜像源（用原有的会比较慢）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> env</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -w</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> GOPROXY=https://goproxy.cn,direct</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> env</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -w</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> GOPROXY=https://mirrors.aliyun.com/goproxy</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#关闭包的MD5校验</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> env</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -w</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> GOSUMDB=off</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看环境变量</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> env</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/5c53c3a773c94ec8b60a1f8822b3b0b1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="查看配置的环境变量" tabindex="-1"><a class="header-anchor" href="#查看配置的环境变量"><span>查看配置的环境变量</span></a></h2>
<p>一、可以再次点击 <code v-pre>此电脑--&gt;属性&gt;环境变量</code> 查看</p>
<p>二、可以在cmd终端查看</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> %GOPATH%</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> %GOROOT%</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/a1dde0c1506e4ffe9c48acf74e00a61a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>至此就配置完成了。<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章"><span>相关文章：</span></a></h2>
<table>
<thead>
<tr>
<th>文章标题</th>
<th>文章链接</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/132114315" target="_blank" rel="noopener noreferrer">Windows上安装 jdk 环境并配置环境变量 （超详细教程）</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/132114315" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/132114315</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/132012969" target="_blank" rel="noopener noreferrer">Windows上安装 Go 环境并配置环境变量 （超详细教程）</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/132012969" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/132012969</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/131808146" target="_blank" rel="noopener noreferrer">Windows上安装 Python 环境并配置环境变量 （超详细教程）</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/131808146" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/131808146</a></td>
</tr>
</tbody>
</table>
</div></template>


