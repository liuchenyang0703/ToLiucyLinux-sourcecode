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
<h1 id="内容编辑" tabindex="-1"><a class="header-anchor" href="#内容编辑" aria-hidden="true">#</a> 内容编辑</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cat a.txt</span>
GeForce RTX <span class="token number">2080</span> Ti - 2733M
GeForce RTX <span class="token number">2080</span> Ti - 9282M
NVIDIA GeForce GTX <span class="token number">1080</span> Ti - 2947M
NVIDIA GeForce GTX <span class="token number">1080</span> Ti - 3098M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="前" tabindex="-1"><a class="header-anchor" href="#前" aria-hidden="true">#</a> 前</h1>
<h2 id="删除指定内容自身及以前所有的字符串内容" tabindex="-1"><a class="header-anchor" href="#删除指定内容自身及以前所有的字符串内容" aria-hidden="true">#</a> 删除指定内容自身及以前所有的字符串内容</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#原始内容</span>
GeForce RTX <span class="token number">2080</span> Ti - 2733M
GeForce RTX <span class="token number">2080</span> Ti - 9282M
NVIDIA GeForce GTX <span class="token number">1080</span> Ti - 2947M
NVIDIA GeForce GTX <span class="token number">1080</span> Ti - 3098M

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># sed 's/.*GeForce //g' a.txt</span>
RTX <span class="token number">2080</span> Ti - 2733M
RTX <span class="token number">2080</span> Ti - 9282M
GTX <span class="token number">1080</span> Ti - 2947M
GTX <span class="token number">1080</span> Ti - 3098M

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除指定内容以前所有的字符串内容不包括自身" tabindex="-1"><a class="header-anchor" href="#删除指定内容以前所有的字符串内容不包括自身" aria-hidden="true">#</a> 删除指定内容以前所有的字符串内容不包括自身</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#原始内容</span>
GeForce RTX <span class="token number">2080</span> Ti - 2733M
GeForce RTX <span class="token number">2080</span> Ti - 9282M
NVIDIA GeForce GTX <span class="token number">1080</span> Ti - 2947M
NVIDIA GeForce GTX <span class="token number">1080</span> Ti - 3098M

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># sed 's/.*\(GeFo.*\)/\1/g' a.txt</span>
GeForce RTX <span class="token number">2080</span> Ti - 2733M
GeForce RTX <span class="token number">2080</span> Ti - 9282M
GeForce GTX <span class="token number">1080</span> Ti - 2947M
GeForce GTX <span class="token number">1080</span> Ti - 3098M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="后" tabindex="-1"><a class="header-anchor" href="#后" aria-hidden="true">#</a> 后</h1>
<h2 id="删除指定内容自身及以后所有的字符串内容" tabindex="-1"><a class="header-anchor" href="#删除指定内容自身及以后所有的字符串内容" aria-hidden="true">#</a> 删除指定内容自身及以后所有的字符串内容</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#原始内容</span>
GeForce RTX <span class="token number">2080</span> Ti - 2733M
GeForce RTX <span class="token number">2080</span> Ti - 9282M
NVIDIA GeForce GTX <span class="token number">1080</span> Ti - 2947M
NVIDIA GeForce GTX <span class="token number">1080</span> Ti - 3098M

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># sed 's/Ti -.*//g' a.txt</span>
GeForce RTX <span class="token number">2080</span> 
GeForce RTX <span class="token number">2080</span> 
NVIDIA GeForce GTX <span class="token number">1080</span> 
NVIDIA GeForce GTX <span class="token number">1080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除指定内容以后所有的字符串内容不包括自身" tabindex="-1"><a class="header-anchor" href="#删除指定内容以后所有的字符串内容不包括自身" aria-hidden="true">#</a> 删除指定内容以后所有的字符串内容不包括自身</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#原始内容</span>
GeForce RTX <span class="token number">2080</span> Ti - 2733M
GeForce RTX <span class="token number">2080</span> Ti - 9282M
NVIDIA GeForce GTX <span class="token number">1080</span> Ti - 2947M
NVIDIA GeForce GTX <span class="token number">1080</span> Ti - 3098M

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># sed 's/\(Ti\).*/\1/g' a.txt</span>
GeForce RTX <span class="token number">2080</span> Ti
GeForce RTX <span class="token number">2080</span> Ti
NVIDIA GeForce GTX <span class="token number">1080</span> Ti
NVIDIA GeForce GTX <span class="token number">1080</span> Ti
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


