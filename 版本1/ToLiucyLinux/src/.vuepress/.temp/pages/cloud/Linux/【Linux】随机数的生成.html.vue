<template><div><figure><img src="https://img-blog.csdnimg.cn/5b9575c65b18446b988f72e6ab77921e.png#pic_center" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">CSDN博客专家<ExternalLinkIcon/></a><br>
  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<p>@<a href="%E7%94%9F%E6%88%90%E9%9A%8F%E6%9C%BA%E6%95%B0%E7%9B%AE%E5%BD%95">toc</a></p>
<h1 id="生成随机数-默认为-0-32767" tabindex="-1"><a class="header-anchor" href="#生成随机数-默认为-0-32767" aria-hidden="true">#</a> 生成随机数：默认为(0-32767)</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token environment constant">$RANDOM</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/2de3ccf2c9cd470fbbe8e3ce373168de.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="生成指定区间随机数-随机生成1-50之间的数" tabindex="-1"><a class="header-anchor" href="#生成指定区间随机数-随机生成1-50之间的数" aria-hidden="true">#</a> 生成指定区间随机数：随机生成1-50之间的数</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span>RANDOM<span class="token operator">%</span><span class="token number">50</span><span class="token operator">+</span><span class="token number">1</span><span class="token variable">))</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/da70b695735241b0a55af8f81d27c409.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="随机生成时间戳秒和纳秒加密运算" tabindex="-1"><a class="header-anchor" href="#随机生成时间戳秒和纳秒加密运算" aria-hidden="true">#</a> 随机生成时间戳秒和纳秒加密运算</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">date</span> +%s%N <span class="token operator">|</span> md5sum
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/6054d481546343ca90d8e228dedaa465.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="生成一个随机字符指定10个在使用md5sum校验" tabindex="-1"><a class="header-anchor" href="#生成一个随机字符指定10个在使用md5sum校验" aria-hidden="true">#</a> 生成一个随机字符指定10个在使用md5sum校验</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">head</span> <span class="token parameter variable">-c</span> <span class="token number">10</span> /dev/random <span class="token operator">|</span>md5sum
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/1be921ee32de41aab557d578c92aff7e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="dev-random是什么" tabindex="-1"><a class="header-anchor" href="#dev-random是什么" aria-hidden="true">#</a> /dev/random是什么？</h2>
<blockquote>
<p>/dev/random是一个随机数生成器设备文件，用于生成高质量的随机数。它通过收集系统上的环境噪声（例如硬件噪声，磁盘活动等）来产生随机数。由于它只在系统上有足够的环境噪声时才能生成随机数，因此/dev/random生成的随机数是高质量的。<br/></p>
<p>但是，/dev/random的主要缺点是，如果系统上的环境噪声不足，则会导致生成随机数的速度变慢，有时甚至会完全停止。这可能会导致某些应用程序无法正常工作，因为它们需要大量的随机数。</p>
</blockquote>
<h1 id="生成随机的uuid" tabindex="-1"><a class="header-anchor" href="#生成随机的uuid" aria-hidden="true">#</a> 生成随机的UUID</h1>
<p>UUID，通用识别唯一码。<br>
让分布式系统的所有元素有唯一的辨识信息。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>uuidgen
<span class="token function">cat</span> /proc/sys/kernel/random/uuid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/f4f4d3e215474617a1216cd287d5767a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="加密算法" tabindex="-1"><a class="header-anchor" href="#加密算法" aria-hidden="true">#</a> 加密算法</h1>
<p>md5	报文摘要算法--&gt;校验文件的完整性<br>
md5sum 【文件名】</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">"123"</span> <span class="token operator">|</span> md5sum
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>CRC	循环冗余校验码--&gt;sksum<br>
echo &quot;123&quot; | sksum</p>
<figure><img src="https://img-blog.csdnimg.cn/c7fd70481a4446a6b3c3cfb3e0c4b19b.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章" aria-hidden="true">#</a> 相关文章</h1>
<table>
<thead>
<tr>
<th>文章名称</th>
<th>文章连接</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/129922682" target="_blank" rel="noopener noreferrer">【Linux】Centos7 随机生成密码<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/129922682" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/129922682<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/130387463" target="_blank" rel="noopener noreferrer">【Linux】随机数的生成<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/130387463" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/130387463<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
</div></template>


