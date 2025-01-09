<template><div><blockquote>
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
<p>@[toc]</p>
<p>手动强制同步chrome浏览器书签有2种方法：</p>
<h1 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一：</h1>
<p>地址栏输入：chrome://sync-internals<br>
中间那列中下方，点击“<code v-pre>Request Start</code>”</p>
<figure><img src="https://img-blog.csdnimg.cn/img_convert/1a928f1dd43a6275db008ccfacd1b728.png" alt="image-20240609144317976" tabindex="0" loading="lazy"><figcaption>image-20240609144317976</figcaption></figure>
<p>重启浏览器</p>
<p>应该是没什么问题，今天这么试的可以了，以后如果有问题在更新；</p>
<h1 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二：</h1>
<p>地址栏输入：chrome://sync-internals<br>
chrome://sync 点 Trigger GetUpdates<br>
如果不行的话，重启chrome再重复以上操作，附图如下：</p>
<figure><img src="https://img-blog.csdnimg.cn/20200905221249386.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1OTU2MDQx,size_16,color_FFFFFF,t_70" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h1 id="内容参考" tabindex="-1"><a class="header-anchor" href="#内容参考" aria-hidden="true">#</a> 内容参考：</h1>
<blockquote>
<p>本文内容参考与：<a href="https://blog.csdn.net/qq_35956041/article/details/108425233" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_35956041/article/details/108425233<ExternalLinkIcon/></a></p>
</blockquote>
</div></template>


