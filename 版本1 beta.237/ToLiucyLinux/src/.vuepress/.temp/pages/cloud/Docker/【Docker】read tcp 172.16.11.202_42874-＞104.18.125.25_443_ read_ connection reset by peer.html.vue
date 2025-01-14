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
<h1 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题：</h1>
<blockquote>
<p>  因为最近要打镜像，首先需要看一下该机器是否可以拉取到镜像，我就开始试拉取镜像，结果报错一层有一层；拉了一天都没有拉取到想要的镜像，就很气愤；最后找了很多文章以及报错的解决方式终于找到一个成功的了；<br>
我就拿其一来举例，其中有一个报错是这样的；</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost docker<span class="token punctuation">]</span><span class="token comment"># docker pull qiushenjie/cuda11.1-cudnn8-devel-ubuntu18.04-python3.6:latest</span>
latest: Pulling from qiushenjie/cuda11.1-cudnn8-devel-ubuntu18.04-python3.6
6e0aa5e7af40: Downloading <span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">></span><span class="token punctuation">]</span>  <span class="token number">8</span>.753MB/8.753MB
d47239a868b3: Download complete 
49cbb10cca85: Download complete 
4450dd082e0f: Download complete 
c0471462e31b: Download complete 
e26abf45abc8: Download complete 
d044dd425955: Download complete 
03443386476a: Downloading <span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">></span><span class="token punctuation">]</span>  <span class="token number">1</span>.511GB/1.511GB
1221fea730a2: Download complete 
9b0547807030: Downloading 
07352373c41d: Download complete 
459b54df8da1: Downloading 
4743a36bdb91: Retrying <span class="token keyword">in</span> <span class="token number">1</span> second 
7ad0074e2854: Download complete 
75822f5b5ee1: Downloading <span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">></span><span class="token punctuation">]</span>  <span class="token number">89</span>.39kB/89.39kB

<span class="token builtin class-name">read</span> tcp <span class="token number">172.16</span>.11.202:42874-<span class="token operator">></span><span class="token number">104.18</span>.125.25:443: read: connection reset by peer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="报错原因" tabindex="-1"><a class="header-anchor" href="#报错原因" aria-hidden="true">#</a> 报错原因：</h1>
<blockquote>
<p>  因为我们下载的镜像是外网的镜像资源，所以下载的速度会非常的慢，甚至大概率下载时会报错，所以需要我们配置一个国内的服务器镜像地址，国内服务器镜像地址有很多，这里咱们就说一下阿里镜像加速器的配置方法。</p>
</blockquote>
<h1 id="解决方式" tabindex="-1"><a class="header-anchor" href="#解决方式" aria-hidden="true">#</a> 解决方式：</h1>
<blockquote>
<p>  找了很久找到了一个好的解决方式就是：<font color=teal><strong>配置阿里镜像加速器方法</strong></font></p>
</blockquote>
<p>1、访问阿里云官网：<a href="https://promotion.aliyun.com/ntms/act/kubernetes.html" target="_blank" rel="noopener noreferrer">阿里云官网<ExternalLinkIcon/></a>     并登录官网：</p>
<figure><img src="https://img-blog.csdnimg.cn/b0089f1159a84b0c96257022093c1568.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>2、登录进来点击控制台：</p>
<figure><img src="https://img-blog.csdnimg.cn/dd79f860e13446ca8c716ea45d96d568.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>3、点击左上方的导航栏，在搜索框搜索容器镜像服务</p>
<figure><img src="https://img-blog.csdnimg.cn/4112d9248a5b4e46b7818c7348013b54.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>4、点击 镜像工具---镜像加速器</p>
<figure><img src="https://img-blog.csdnimg.cn/7e5739441fca4e8695f876d26d104d3a.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>5、复制镜像加速器地址，按照操作文档，找到对应平台的文档进行操作</p>
<figure><img src="https://img-blog.csdnimg.cn/ce8cb3bb536047e497b20dafb712d63e.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>6、返回服务器，新建 <font color=red> <strong>/etc/docker</strong> </font>目录</p>
<ul>
<li>已有就不用创建了</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>7、将下载的镜像加速器加到 <font color=red><strong>daemon.json</strong> </font>配置文件中；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost docker<span class="token punctuation">]</span><span class="token comment"># sudo tee /etc/docker/daemon.json &lt;&lt;-'EOF'</span>
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
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost docker<span class="token punctuation">]</span><span class="token comment"># docker pull qiushenjie/cuda11.1-cudnn8-devel-ubuntu18.04-python3.6:latest</span>
latest: Pulling from qiushenjie/cuda11.1-cudnn8-devel-ubuntu18.04-python3.6
6e0aa5e7af40: Download complete 
d47239a868b3: Download complete 
49cbb10cca85: Download complete 
4450dd082e0f: Download complete 
c0471462e31b: Download complete 
e26abf45abc8: Download complete 
d044dd425955: Download complete 
03443386476a: Download complete 
1221fea730a2: Download complete 
9b0547807030: Download complete 
07352373c41d: Download complete 
459b54df8da1: Download complete 
4743a36bdb91: Download complete 
7ad0074e2854: Download complete 
75822f5b5ee1: Download complete 
Digest： a256:c358e72e100ab493a0304bda35e6f239db2ec8c9bb836d8a427ac34307d074ed
Status： Downloadednewer image <span class="token keyword">for</span> qiushenjie/cuda11.1-cudnn8-devel-ubuntu18.04-python3.6:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/a3530493707f49e49877f9c85023ed42.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>这样就下载拉取完成了；</p>
</div></template>


