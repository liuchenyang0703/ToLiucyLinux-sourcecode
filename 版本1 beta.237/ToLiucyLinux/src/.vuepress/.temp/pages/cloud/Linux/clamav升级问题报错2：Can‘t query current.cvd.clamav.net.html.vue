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
<h1 id="freshclam升级报错" tabindex="-1"><a class="header-anchor" href="#freshclam升级报错" aria-hidden="true">#</a> freshclam升级报错：</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@clamav clamav<span class="token punctuation">]</span><span class="token comment"># freshclam</span>
ClamAV update process started at Wed Mar  <span class="token number">1</span> <span class="token number">15</span>:39:55 <span class="token number">2023</span>
WARNING: Can<span class="token string">'t query current.cvd.clamav.net
WARNING: Invalid DNS reply. Falling back to HTTP mode.
WARNING: Can'</span>t get information about database.clamav.net: Temporary failure <span class="token keyword">in</span> name resolution
WARNING: Can<span class="token string">'t download main.cvd from database.clamav.net
Trying again in 5 secs...
ClamAV update process started at Wed Mar  1 15:39:55 2023
WARNING: Can'</span>t query current.cvd.clamav.net
WARNING: Invalid DNS reply. Falling back to HTTP mode.
WARNING: Can<span class="token string">'t get information about database.clamav.net: Temporary failure in name resolution
WARNING: Can'</span>t download main.cvd from database.clamav.net
Trying again <span class="token keyword">in</span> <span class="token number">5</span> secs<span class="token punctuation">..</span>.
ClamAV update process started at Wed Mar  <span class="token number">1</span> <span class="token number">15</span>:39:55 <span class="token number">2023</span>
WARNING: Can<span class="token string">'t query current.cvd.clamav.net
WARNING: Invalid DNS reply. Falling back to HTTP mode.
ERROR: Can'</span>t get information about database.clamav.net: Temporary failure <span class="token keyword">in</span> name resolution
ERROR: Can't download main.cvd from database.clamav.net
Giving up on database.clamav.net<span class="token punctuation">..</span>.
Update failed. Your network may be down or none of the mirrors listed <span class="token keyword">in</span> /opt/clamav/etc/freshclam.conf is working. Check http://www.clamav.net/support/mirror-problem <span class="token keyword">for</span> possible reasons.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="freshclam升级报错原因" tabindex="-1"><a class="header-anchor" href="#freshclam升级报错原因" aria-hidden="true">#</a> freshclam升级报错原因：</h1>
<p>这个问题可能是由于网络连接问题导致的。&quot;Can't query <a href="http://current.cvd.clamav.net" target="_blank" rel="noopener noreferrer">current.cvd.clamav.net<ExternalLinkIcon/></a>&quot;的错误提示表明ClamAV无法连接到病毒数据库服务器。</p>
<h1 id="解决方式" tabindex="-1"><a class="header-anchor" href="#解决方式" aria-hidden="true">#</a> 解决方式：</h1>
<p>1 先ping以下病毒库</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ping</span>  database.clamav.net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以ping通</p>
<p>ping  <a href="http://database.clamav.net" target="_blank" rel="noopener noreferrer">database.clamav.net<ExternalLinkIcon/></a> 得到一个ip 如104.16.219.5 再然后改/etc/hosts这个文件。加入一行：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@clamav clamav<span class="token punctuation">]</span><span class="token comment"># vim /etc/hosts</span>
<span class="token number">104.16</span>.219.5 database.clamav.net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2 重启网络：service network restart或者/etc/init.d/network restart</p>
<p>3 再次升级ClamAV病毒库</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>freshclam
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>升级成功。</p>
<figure><img src="https://img-blog.csdnimg.cn/8cf4386224064fbd86ca7ce358200ff1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


