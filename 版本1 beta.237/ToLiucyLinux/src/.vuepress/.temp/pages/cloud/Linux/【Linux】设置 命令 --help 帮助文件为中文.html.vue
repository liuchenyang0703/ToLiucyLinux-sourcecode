<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<p>@[toc]</p>
<h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1>
<blockquote>
<p>在Linux中，当我们执行某个命令的 –h 或者  –help 时，默认输出的都是英文，还需要到百度去搜什么意思，特麻烦，接下来我们来说下如何将所有帮助命令显示成中文。</p>
</blockquote>
<h1 id="设置系统默认语言为中文" tabindex="-1"><a class="header-anchor" href="#设置系统默认语言为中文" aria-hidden="true">#</a> 设置系统默认语言为中文</h1>
<p>对应每个shell而言，重启后会变成英文，所以每次都需要执行</p>
<ul>
<li>1、查看当前语言</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token environment constant">$LANG</span>
输出：en_US.UTF-8 （此时为英文）


<span class="token comment">#或者使用locale查看</span>
locale
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面 LANG=en_US.UTF-8 是当前语言，属于英文；</p>
<figure><img src="https://img-blog.csdnimg.cn/73ae1879403642a2a101b2818041dbb2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>2、查看是否存在中文语言包</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>locale <span class="token parameter variable">-a</span> <span class="token operator">|</span> <span class="token function">grep</span> zh_CN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/daa7b6ef26444a298a6b8dec7921ca0b.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>zh_CN.utf8</code> 是简体中文，如果没有zh_CN.utf8，就安装语言包，如果存在可以直接设置。<br>
简体中文语言包安装：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> kde-l10n-Chinese
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>3、将<code v-pre>$LANG</code>变量修改为 <code v-pre>zh_CN.UTF-8</code></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#临时修改（再开一个新页面就失效了）</span>
<span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>zh_CN.UTF-8
<span class="token builtin class-name">echo</span> <span class="token environment constant">$LANG</span>
输出：zh_CN.UTF-8 （此时为中文）

<span class="token comment">#永久修改，重启服务器之后不会失效（方法一）</span>
<span class="token comment">#编辑 /etc/locale.conf 文件，增加下面的内容</span>
<span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span><span class="token string">"zh_CN.UTF-8"</span>
<span class="token comment">#需要重启。</span>

<span class="token comment">#永久修改，重启服务器之后不会失效（方法二）</span>
localectl set-locale <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>zh_CN.UTF8
<span class="token comment">#也需要重启方可生效。</span>

<span class="token comment">#永久修改，重启服务器之后不会失效（方法三：推荐）</span>
<span class="token comment">#编辑 /root/.bashrc 文件，追加到最后</span>
<span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>zh_CN.UTF-8
<span class="token comment">#这样，关了再开一个窗口就生效了，不用重启。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="安装man-pages" tabindex="-1"><a class="header-anchor" href="#安装man-pages" aria-hidden="true">#</a> 安装man-pages</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#搜索man-pages所有的包</span>
yum search man-pages
<span class="token comment">#安装 man-pages包</span>
yum <span class="token function">install</span> <span class="token function">man</span> man-pages man-pages-zh-CN <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">--help</span>
<span class="token function">man</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/fe253dc7bfca4e91a51ac9a9ceb1a27e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="完成" tabindex="-1"><a class="header-anchor" href="#完成" aria-hidden="true">#</a> 完成</h1>
</div></template>


