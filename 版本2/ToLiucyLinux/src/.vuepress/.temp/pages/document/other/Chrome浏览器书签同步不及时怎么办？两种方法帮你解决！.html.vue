<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">CSDN博客专家</a><br>
  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者</a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主</a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主</a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区</a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<p>手动强制同步chrome浏览器书签有2种方法：</p>
<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一"><span>方法一：</span></a></h2>
<p>地址栏输入：<a href="chrome://sync-internals" target="_blank" rel="noopener noreferrer">chrome://sync-internals</a><br>
中间那列中下方，点击“<code v-pre>Request Start</code>”，意思是同步开启自启。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/5a939548f080f4d1300777cba08abbb9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>重启浏览器</p>
<p>如果还有问题再试试 <a href="#click_me_jump">方法二。</a></p>
<h2 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二"><span>方法二：</span></a></h2>
<p><span id="click_me_jump">地址栏输入：<a href="chrome://sync-internals" target="_blank" rel="noopener noreferrer">chrome://sync-internals</a></span><br>
chrome://sync 点 <code v-pre>Trigger GetUpdates</code><br>
如果不行的话，重启chrome再重复以上操作，附图如下：</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/1e139fb8c806af1718a1222933874631.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>还是不行的话，就重新登录一下谷歌账号，开启同步功能。（需要开启 VPN）</p>
</blockquote>
<h2 id="内容参考" tabindex="-1"><a class="header-anchor" href="#内容参考"><span>内容参考：</span></a></h2>
<blockquote>
<p>本文内容参考与：<a href="https://blog.csdn.net/qq_35956041/article/details/108425233" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_35956041/article/details/108425233</a></p>
</blockquote>
</div></template>


