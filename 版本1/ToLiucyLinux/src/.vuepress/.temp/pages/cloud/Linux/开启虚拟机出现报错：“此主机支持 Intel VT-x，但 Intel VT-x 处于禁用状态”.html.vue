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
<h1 id="报错" tabindex="-1"><a class="header-anchor" href="#报错" aria-hidden="true">#</a> 报错</h1>
<p>开启虚拟机出现报错：此主机支持 Intel VT-x，但 Intel VT-x 处于禁用状态</p>
<figure><img src="https://img-blog.csdnimg.cn/8231f2124aab4841a1204157009780f2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>Intel VT-x完整名称是<code v-pre>Intel Virtualization Technology</code>，就是Intel虚拟技术，开启它可以让硬件平台同时运行多个操作系统，是虚拟机软件运行必备的技术之一，如果禁用，就会弹出“此主机支持Intel VT-x,但Intel VT-x处于禁用状态”这个提示，解决办法就是进BIOS开启Intel Virtualization Technology。</p>
</blockquote>
<h1 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h1>
<p>原因是：电脑没有启用虚拟化</p>
<p>我们打开任务管理器，点击<code v-pre>“性能” ——&gt; “CPU”</code>，可以看到虚拟化是处于禁用状态的</p>
<figure><img src="https://img-blog.csdnimg.cn/e48a16e1313a419ca2eabd6c4142e789.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="解决方式-这里以联想笔记本为例" tabindex="-1"><a class="header-anchor" href="#解决方式-这里以联想笔记本为例" aria-hidden="true">#</a> 解决方式（这里以联想笔记本为例）</h1>
<ul>
<li>1、重启电脑，开机时按“Fn+F2”，会听到滴的一声，进入BIOS界面</li>
</ul>
<figure><img src="https://img-blog.csdnimg.cn/a7fbf8236be24c3bbc129fcb133f1154.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>2、选择<code v-pre>“configuration”</code>，找到<code v-pre>“intel virtual technology”</code>，按回车，将“Disable（关闭）” 改为“Enable（打开）”</li>
</ul>
<figure><img src="https://img-blog.csdnimg.cn/48ce3dee1e9c4f99b469dd5e8c3d1013.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>
<p>3、最后按<code v-pre>“Fn+F10”</code>保存并退出，重启即可。</p>
</li>
<li>
<p>4、重启完之后，进入windows页面，还是点击<code v-pre>“性能” ——&gt; “CPU”</code>，可以看到虚拟化已经处于启动状态了。</p>
</li>
</ul>
<figure><img src="https://img-blog.csdnimg.cn/736b255164d24f0e897e4603b7ecefc9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>5、再次打开虚拟机，启动虚拟机成功。</li>
</ul>
<figure><img src="https://img-blog.csdnimg.cn/ff78fb74b14142bf81ae0e74cedfa2b1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


