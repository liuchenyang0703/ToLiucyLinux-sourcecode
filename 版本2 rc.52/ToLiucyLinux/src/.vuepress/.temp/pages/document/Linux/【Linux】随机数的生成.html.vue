<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181612672.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">CSDN博客专家</a><br>
  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者</a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主</a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主</a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区</a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<h2 id="生成随机数-默认为-0-32767" tabindex="-1"><a class="header-anchor" href="#生成随机数-默认为-0-32767"><span>生成随机数：默认为(0-32767)</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $RANDOM</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181612388.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="生成指定区间随机数-随机生成1-50之间的数" tabindex="-1"><a class="header-anchor" href="#生成指定区间随机数-随机生成1-50之间的数"><span>生成指定区间随机数：随机生成1-50之间的数</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> $((</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">RANDOM%50+1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">))</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181612281.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="随机生成时间戳秒和纳秒加密运算" tabindex="-1"><a class="header-anchor" href="#随机生成时间戳秒和纳秒加密运算"><span>随机生成时间戳秒和纳秒加密运算</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">date</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> +%s%N</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">md5sum</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181612888.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="生成一个随机字符指定10个在使用md5sum校验" tabindex="-1"><a class="header-anchor" href="#生成一个随机字符指定10个在使用md5sum校验"><span>生成一个随机字符指定10个在使用md5sum校验</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">head</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -c</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /dev/random</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> |</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">md5sum</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181612845.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>/dev/random是什么？</p>
<blockquote>
<p>/dev/random是一个随机数生成器设备文件，用于生成高质量的随机数。它通过收集系统上的环境噪声（例如硬件噪声，磁盘活动等）来产生随机数。由于它只在系统上有足够的环境噪声时才能生成随机数，因此/dev/random生成的随机数是高质量的。<br/></p>
<p>但是，/dev/random的主要缺点是，如果系统上的环境噪声不足，则会导致生成随机数的速度变慢，有时甚至会完全停止。这可能会导致某些应用程序无法正常工作，因为它们需要大量的随机数。</p>
</blockquote>
<h2 id="生成随机的uuid" tabindex="-1"><a class="header-anchor" href="#生成随机的uuid"><span>生成随机的UUID</span></a></h2>
<p>UUID，通用识别唯一码。<br>
让分布式系统的所有元素有唯一的辨识信息。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">uuidgen</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /proc/sys/kernel/random/uuid</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181611270.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="加密算法" tabindex="-1"><a class="header-anchor" href="#加密算法"><span>加密算法</span></a></h2>
<p>md5	报文摘要算法--&gt;校验文件的完整性<br>
md5sum 【文件名】</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "123"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">md5sum</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>CRC	循环冗余校验码--&gt;sksum<br>
echo &quot;123&quot; | sksum</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181611223.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章"><span>相关文章</span></a></h2>
<table>
<thead>
<tr>
<th>文章名称</th>
<th>文章连接</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/129922682" target="_blank" rel="noopener noreferrer">【Linux】Centos7 随机生成密码</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/129922682" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/129922682</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/130387463" target="_blank" rel="noopener noreferrer">【Linux】随机数的生成</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/130387463" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/130387463</a></td>
</tr>
</tbody>
</table>
</div></template>


