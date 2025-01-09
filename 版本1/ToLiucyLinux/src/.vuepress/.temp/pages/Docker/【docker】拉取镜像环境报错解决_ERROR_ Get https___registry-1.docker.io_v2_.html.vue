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
<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ERROR: Get https://registry-1.docker.io/v2/library/nginx/manifests/latest: Get https://auth.docker.io/token?scope<span class="token operator">=</span>repository%3Alibrary%2Fnginx%3Apull<span class="token operator">&amp;</span><span class="token assign-left variable">service</span><span class="token operator">=</span>registry.docker.io: net/http: request canceled <span class="token keyword">while</span> waiting <span class="token keyword">for</span> connection <span class="token punctuation">(</span>Client.Timeout exceeded <span class="token keyword">while</span> awaiting headers<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><font size=4>**场景复现**</font><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161503753.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="报错原因" tabindex="-1"><a class="header-anchor" href="#报错原因" aria-hidden="true">#</a> 报错原因</h2>
<blockquote>
<p>  因为我们下载的镜像是外网的镜像资源，所以下载的速度会非常的慢，甚至大概率下载时会报错，所以需要我们配置一个国内的服务器镜像地址，国内服务器镜像地址有很多，这里咱们就说一下阿里镜像加速器的配置方法。</p>
</blockquote>
<h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2>
<blockquote>
<p>  找了很久找到了一个好的解决方式就是：<font color=teal><strong>配置阿里镜像加速器方法</strong></font><br>
与 <a href="https://liucy.blog.csdn.net/article/details/127897592" target="_blank" rel="noopener noreferrer">【Docker】read tcp 172.16.11.202:42874-＞104.18.125.25:443: read: connection reset by peer<ExternalLinkIcon/></a> 这篇文章解决方法一样。</p>
</blockquote>
<p>1、访问阿里云官网：<a href="https://promotion.aliyun.com/ntms/act/kubernetes.html" target="_blank" rel="noopener noreferrer">阿里云官网<ExternalLinkIcon/></a>     并登录官网：</p>
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
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>7、将下载的镜像加速器加到 <font color=red><strong>daemon.json</strong> </font>配置文件中；</p>
<blockquote>
<p>如果已经又daemon.json文件的，为了保险起见可以先备份原来的配置文件，在按照以下步骤来做，如果是新部署的docker就可以不用备份。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#备份已有的daemon.json</span>
<span class="token function">mv</span> /etc/docker/daemon.json /etc/docker/daemon.json-bak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost docker<span class="token punctuation">]</span><span class="token comment"># sudo tee /etc/docker/daemon.json &lt;&lt;-'EOF'</span>
<span class="token punctuation">{</span>
  <span class="token string">"registry-mirrors"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">"https://ofads5sdl5c.mirror.aliyuncs.com"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8、重新加载配置文件+重启docker服务</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#重新加载配置文件</span>
systemctl daemon-reload

<span class="token comment">#重启docker服务</span>
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>9、重新拉取镜像</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161503452.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>问题解决。</p>
</div></template>


