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
<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题：</h2>
<p>我在部署k8s的时候因为需要下载网络插件（flannel），才能让nodes节点通信；但很不幸的是下载不到报错：<br>
在执行下载：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>出现报错：<br>
<code v-pre>The connection to the server raw.githubusercontent.com was refused - did you specify the right host or port?</code></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161403079.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="问题原因" tabindex="-1"><a class="header-anchor" href="#问题原因" aria-hidden="true">#</a> 问题原因：</h2>
<blockquote>
<p>与服务器raw.githubusercontent.com的连接被拒绝-您指定了正确的主机或端口吗？</p>
</blockquote>
<p>简单来说就是访问不到这个地址，网络问题。</p>
<h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法：</h2>
<p>访问此地址通过域名查询真实地址IP：<a href="https://www.ipaddress.com/" target="_blank" rel="noopener noreferrer">https://www.ipaddress.com/<ExternalLinkIcon/></a>，此网站需要使用v**或其他工具；</p>
<p>访问往下拉：<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161403154.png" alt="" loading="lazy"></p>
<p>点击进去，输入<code v-pre>raw.githubusercontent.com</code>域名，点击查找；</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161403131.jpeg" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161403771.jpeg" alt="" loading="lazy"></p>
<ul>
<li>将查询到的域名和ip写到服务器里的<code v-pre>/etc/hosts</code>文件中；</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/hosts

<span class="token comment"># 在后面追加输入</span>
<span class="token number">185.199</span>.108.133  raw.githubusercontent.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161403164.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>添加完之后再次运行安装命令即可；</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> https://raw.githubusercontent.com/flannel-io/flannel/master/Documentation/kube-flannel.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161402113.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>如果遇到下载<code v-pre>flannel</code>镜像失败，可使用此链接镜像包：<a href="https://download.csdn.net/download/liu_chen_yang/89682727" target="_blank" rel="noopener noreferrer">k8s网络插件 flannel v0.25.5 flannel-cni-plugin-v1.5.1-flannel1 镜像包<ExternalLinkIcon/></a></p>
</blockquote>
<p>查看nodes节点状态</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>kubectl get nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161402894.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>Ready连接成功；</p>
<hr>
<p>因为安装了网络插件之后他是需要自动重启连接的，所以需要等待一会，安装完网络插件之后查看如果还是<code v-pre>NotReady</code>状态的话，这里也可以使用此命令持续查看更新nodes节点的状态，实时观看等待连接成功；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>kubectl get nodes <span class="token parameter variable">-w</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161402060.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<center>问题解决！！！</center>
</blockquote>
</div></template>


