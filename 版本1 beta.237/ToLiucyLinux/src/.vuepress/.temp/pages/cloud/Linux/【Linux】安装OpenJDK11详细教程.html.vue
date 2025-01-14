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
<h1 id="有外网安装-在线安装" tabindex="-1"><a class="header-anchor" href="#有外网安装-在线安装" aria-hidden="true">#</a> 有外网安装（在线安装）</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> java-11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="无外网安装-离线安装" tabindex="-1"><a class="header-anchor" href="#无外网安装-离线安装" aria-hidden="true">#</a> 无外网安装（离线安装）</h1>
<h2 id="下载离线包" tabindex="-1"><a class="header-anchor" href="#下载离线包" aria-hidden="true">#</a> 下载离线包</h2>
<p>下载链接：<a href="http://jdk.java.net/archive/" target="_blank" rel="noopener noreferrer">http://jdk.java.net/archive/<ExternalLinkIcon/></a></p>
<p>往下翻找到自己要下载的OpenJDK版本；</p>
<figure><img src="https://img-blog.csdnimg.cn/13e067f50efb4b39b6925a0882fa4e22.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="下载完成之后上传服务器并解压" tabindex="-1"><a class="header-anchor" href="#下载完成之后上传服务器并解压" aria-hidden="true">#</a> 下载完成之后上传服务器并解压</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#将下载的包上传到服务器上</span>
<span class="token comment">#将包放到/usr/local/目录</span>
<span class="token function">mv</span> openjdk-11.0.2_linux-x64_bin.tar.gz /usr/local/

<span class="token comment">#进入/usr/local并解压删除压缩包</span>
<span class="token builtin class-name">cd</span> /usr/local/ <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> xf openjdk-11.0.2_linux-x64_bin.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> openjdk-11.0.2_linux-x64_bin.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加环境变量" tabindex="-1"><a class="header-anchor" href="#添加环境变量" aria-hidden="true">#</a> 添加环境变量</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#添加环境变量（使用追加方式添加）</span>
<span class="token builtin class-name">echo</span> <span class="token string">"export PATH=/usr/local/jdk-11.0.2/bin:<span class="token environment constant">$PATH</span>"</span> <span class="token operator">>></span> /etc/profile

<span class="token comment">#不放心可以查看一下环境变量</span>
<span class="token function">tail</span> <span class="token parameter variable">-1</span> /etc/profile

<span class="token comment">#生效环境变量</span>
<span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证jdk是否安装成功" tabindex="-1"><a class="header-anchor" href="#验证jdk是否安装成功" aria-hidden="true">#</a> 验证jdk是否安装成功</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查看jdk版本</span>
<span class="token function">java</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/f98f2d9090c44e938b27815139643928.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>显示JDK11，安装成功。</p>
</div></template>


