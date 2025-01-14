<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者</a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主</a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主</a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区</a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ERROR:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://registry-1.docker.io/v2/library/nginx/manifests/latest:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://auth.docker.io/token?scope=repository%3Alibrary%2Fnginx%3Apull</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x26;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">service</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">registry.docker.io:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> net/http:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> request</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> canceled</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> while</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> waiting</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> for</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> connection</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (Client.Timeout </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">exceeded</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> while</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> awaiting</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> headers</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><font size=4>**场景复现**</font><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161503753.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="报错原因" tabindex="-1"><a class="header-anchor" href="#报错原因"><span>报错原因</span></a></h2>
<blockquote>
<p>  因为我们下载的镜像是外网的镜像资源，所以下载的速度会非常的慢，甚至大概率下载时会报错，所以需要我们配置一个国内的服务器镜像地址，国内服务器镜像地址有很多，这里咱们就说一下阿里镜像加速器的配置方法。</p>
</blockquote>
<h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h2>
<blockquote>
<p>  找了很久找到了一个好的解决方式就是：<font color=teal><strong>配置阿里镜像加速器方法</strong></font><br>
与 <a href="https://liucy.blog.csdn.net/article/details/127897592" target="_blank" rel="noopener noreferrer">【Docker】read tcp 172.16.11.202:42874-＞104.18.125.25:443: read: connection reset by peer</a> 这篇文章解决方法一样。</p>
</blockquote>
<p>1、访问阿里云官网：<a href="https://promotion.aliyun.com/ntms/act/kubernetes.html" target="_blank" rel="noopener noreferrer">阿里云官网</a>     并登录官网：</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161503881.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>2、登录进来点击控制台：</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161503948.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>3、点击左上方的导航栏，在搜索框搜索容器镜像服务</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161503265.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>4、点击 镜像工具---镜像加速器</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161503106.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>5、复制镜像加速器地址，按照操作文档，找到对应平台的文档进行操作</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161503795.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>6、返回服务器，新建 <font color=red> <strong>/etc/docker</strong> </font>目录</p>
<ul>
<li>已有就不用创建了</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/docker</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>7、将下载的镜像加速器加到 <font color=red><strong>daemon.json</strong> </font>配置文件中；</p>
<blockquote>
<p>如果已经又daemon.json文件的，为了保险起见可以先备份原来的配置文件，在按照以下步骤来做，如果是新部署的docker就可以不用备份。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#备份已有的daemon.json</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/docker/daemon.json</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/docker/daemon.json-bak</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost docker]# sudo tee /etc/docker/daemon.json &#x3C;&#x3C;-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">'EOF'</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "registry-mirrors": ["https://ofads5sdl5c.mirror.aliyuncs.com"]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8、重新加载配置文件+重启docker服务</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#重新加载配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> daemon-reload</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#重启docker服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>9、重新拉取镜像</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161503452.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>问题解决。</p>
</div></template>


