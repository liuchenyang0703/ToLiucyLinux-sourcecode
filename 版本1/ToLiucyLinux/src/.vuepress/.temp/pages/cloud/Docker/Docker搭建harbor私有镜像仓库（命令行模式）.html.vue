<template><div><p>@[toc]</p>
<h2 id="一、安装docker" tabindex="-1"><a class="header-anchor" href="#一、安装docker" aria-hidden="true">#</a> 一、安装docker</h2>
<p>这是安装docker的步骤，可以参考；<br>
<a href="https://blog.csdn.net/liu_chen_yang/article/details/123842609" target="_blank" rel="noopener noreferrer">linux（centos）中部署docker（步骤超全，含带一些发展史和一些概念）<ExternalLinkIcon/></a><br>
启动docker和设置开机自启</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#启动daemon-reload</span>
systemctl daemon-reload

<span class="token comment">#启动docker</span>
systemctl start <span class="token function">docker</span>

<span class="token comment">#设置开机自启</span>
systemctl enabel <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、搭建harbor镜像仓库" tabindex="-1"><a class="header-anchor" href="#二、搭建harbor镜像仓库" aria-hidden="true">#</a> 二、搭建harbor镜像仓库</h2>
<blockquote>
<p>拉取Registry私有镜像仓库，在我们本地搭建一个内网的仓库，避免将一些私密项目暴露在公网，引发不必要的风险</p>
</blockquote>
<h3 id="_1、下载registry镜像" tabindex="-1"><a class="header-anchor" href="#_1、下载registry镜像" aria-hidden="true">#</a> 1、下载Registry镜像</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/4c2862e6ae82447fbf397286a6d80408.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_2、运行registry镜像并查看" tabindex="-1"><a class="header-anchor" href="#_2、运行registry镜像并查看" aria-hidden="true">#</a> 2、运行Registry镜像并查看</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> registry <span class="token parameter variable">-p</span> <span class="token number">5000</span>:5000 <span class="token parameter variable">-v</span> /storage/registry:/tmp/registry registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/fc505585e74f4b2a9a473bed73d2d4ae.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_3、查看镜像仓库中的所有镜像" tabindex="-1"><a class="header-anchor" href="#_3、查看镜像仓库中的所有镜像" aria-hidden="true">#</a> 3、查看镜像仓库中的所有镜像</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">curl</span> http://127.0.0.1:5000/v2/_catalog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下图返回的json数据代表有一个仓库，因为我做测试的时候上传了一个镜像。（busybox）<br>
<img src="https://img-blog.csdnimg.cn/6340091f255e48168324b76f4164f93c.png" alt="在这里插入图片描述" loading="lazy"></p>
<h2 id="三、配置仓库可直接通过http方式访问" tabindex="-1"><a class="header-anchor" href="#三、配置仓库可直接通过http方式访问" aria-hidden="true">#</a> 三、配置仓库可直接通过http方式访问</h2>
<blockquote>
<p>docker默认是传输方式使用https协议，我们手头上没有https证书，所以此处不配置https证书，直接设置可信源，使我们内网可以通过http方式访问</p>
</blockquote>
<h3 id="_1、修改vim-etc-docker-daemon-json-添加以下内容" tabindex="-1"><a class="header-anchor" href="#_1、修改vim-etc-docker-daemon-json-添加以下内容" aria-hidden="true">#</a> 1、修改vim /etc/docker/daemon.json,添加以下内容</h3>
<p>没有daemon.json文件的话，新建一个就好。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>    <span class="token string">"insecure-registries"</span> :<span class="token punctuation">[</span> 
         <span class="token string">"your-server-ip:5000"</span>
    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为我这是已经有了哪个文件，而且里面还有别的，所以，到时候一定要看好格式；<br>
<img src="https://img-blog.csdnimg.cn/b03618e64507469eb58a0e50fa86ec5a.png" alt="在这里插入图片描述" loading="lazy"></p>
<h3 id="_2、重新加载、重启docker、启动镜像" tabindex="-1"><a class="header-anchor" href="#_2、重新加载、重启docker、启动镜像" aria-hidden="true">#</a> 2、重新加载、重启docker、启动镜像</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#重新加载</span>
systemctl daemon-reload
<span class="token comment">#重启docker</span>
systemctl restart <span class="token function">docker</span>
<span class="token comment">#启动registry容器</span>
<span class="token function">docker</span> start registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、上传镜像至仓库" tabindex="-1"><a class="header-anchor" href="#四、上传镜像至仓库" aria-hidden="true">#</a> 四、上传镜像至仓库</h2>
<h3 id="_1、查看所有镜像" tabindex="-1"><a class="header-anchor" href="#_1、查看所有镜像" aria-hidden="true">#</a> 1、查看所有镜像</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY                                  TAG                 IMAGE ID            CREATED             SIZE
mycentos                                    <span class="token number">0.0</span>.1               ce509ec398c1        <span class="token number">2</span> days ago          231MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、给要上传的镜像tag打个标签-修改镜像名" tabindex="-1"><a class="header-anchor" href="#_2、给要上传的镜像tag打个标签-修改镜像名" aria-hidden="true">#</a> 2、给要上传的镜像tag打个标签(修改镜像名)</h3>
<p><strong><font color=teal>格式：</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> tag 镜像名:版本 you-ip:端口/镜像名:版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>实例：</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> tag mycentos:0.0.1 <span class="token number">127.0</span>.0.1:5000/mycentos:v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3、推送镜像到harbor仓库" tabindex="-1"><a class="header-anchor" href="#_3、推送镜像到harbor仓库" aria-hidden="true">#</a> 3、推送镜像到harbor仓库</h3>
<p><strong><font color=teal>格式：</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> push 修改的镜像名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>实例：</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker push 127.0.0.1:5000/mycentos:v1</span>
The push refers to repository <span class="token punctuation">[</span><span class="token number">127.0</span>.0.1:5000/mycentos<span class="token punctuation">]</span>
74ddd0ec08fa: Pushed 
v1: digest: sha256:d8217a445d79fb6325eb26a651d2a7a1ceb7f53c44d82cd7bb9e8fd2bdb384a9 size: <span class="token number">529</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样表示拉取成功。</p>
<h3 id="_4、验证是否推送成功" tabindex="-1"><a class="header-anchor" href="#_4、验证是否推送成功" aria-hidden="true">#</a> 4、验证是否推送成功</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># curl http://127.0.0.1:5000/v2/_catalog</span>
<span class="token punctuation">{</span><span class="token string">"repositories"</span>:<span class="token punctuation">[</span><span class="token string">"busybox"</span>,<span class="token string">"mycentos"</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/6ea97381511b4b1ca6c4f09036fa92fe.png" alt="在这里插入图片描述" loading="lazy"><br>
这里我们可以看到，多了一个mycentos，这样就是推送成功了，mycentos镜像就已经上传上来了。</p>
<h2 id="五、本地拉取镜像" tabindex="-1"><a class="header-anchor" href="#五、本地拉取镜像" aria-hidden="true">#</a> 五、本地拉取镜像</h2>
<p><strong><font color=teal>格式：</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull 上传时修改的镜像名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>实例：</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker pull 127.0.0.1:5000/mycentos:v1</span>
v1: Pulling from mycentos
a1d0c7532777: Already exists 
Digest: sha256:d8217a445d79fb6325eb26a651d2a7a1ceb7f53c44d82cd7bb9e8fd2bdb384a9
Status: Downloaded newer image <span class="token keyword">for</span> <span class="token number">127.0</span>.0.1:5000/mycentos:v1
<span class="token number">127.0</span>.0.1:5000/mycentos:v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看镜像，我们就可以看到已经拉取了。（刚刚的镜像已经删除这是重新从harbor镜像仓库拉的）</strong><br>
<img src="https://img-blog.csdnimg.cn/6a3f79ff88264647800844333b15c278.png" alt="在这里插入图片描述" loading="lazy"><br>
<strong>要想改回原来的名字，我们可以给他打标签；</strong></p>
<p><strong><font color=teal>格式：</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> tag 上传时修改的镜像名 现在想改回去的镜像名:版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>实例：</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> tag <span class="token number">127.0</span>.0.1:5000/mycentos:v1 mycentos:v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样就改回来了。<br>
<img src="https://img-blog.csdnimg.cn/034b621e68f7465e99446f98935dac04.png" alt="在这里插入图片描述" loading="lazy"></p>
<h2 id="六、客户端-另一台服务器-拉取镜像" tabindex="-1"><a class="header-anchor" href="#六、客户端-另一台服务器-拉取镜像" aria-hidden="true">#</a> 六、客户端（另一台服务器）拉取镜像</h2>
<p>另一台客户机也需要docker是前提，注意要配置http方式访问，然后访问下载镜像。</p>
<h3 id="_1、1-修改vim-etc-docker-daemon-json添加以下内容" tabindex="-1"><a class="header-anchor" href="#_1、1-修改vim-etc-docker-daemon-json添加以下内容" aria-hidden="true">#</a> 1、1. 修改vim /etc/docker/daemon.json添加以下内容</h3>
<p>your-server-ip——你服务端的ip</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span> 
    <span class="token string">"insecure-registries"</span> :<span class="token punctuation">[</span>
     	<span class="token string">"your-server-ip:5000"</span>
     <span class="token punctuation">]</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、重新加载、重启docker" tabindex="-1"><a class="header-anchor" href="#_2、重新加载、重启docker" aria-hidden="true">#</a> 2、重新加载、重启docker</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#重新加载</span>
systemctl daemon-reload
<span class="token comment">#重启docker</span>
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、拉取镜像" tabindex="-1"><a class="header-anchor" href="#_3、拉取镜像" aria-hidden="true">#</a> 3、拉取镜像</h3>
<p>ip要服务端设置的ip，我那边后来有设置了一个同网段的ip，所以现在才可以访问到；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull <span class="token number">192.168</span>.2.22:5000/registry:v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/d3344c3bae014a6299ca0d3c3d7be6ca.png" alt="在这里插入图片描述" loading="lazy"><br>
这里就可以看到我们已经拉取成功了。<br>
<img src="https://img-blog.csdnimg.cn/83288a4a871a46a0a27e664fe3a99389.gif" alt="在这里插入图片描述" loading="lazy"></p>
<h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h1>
<p><strong>相关文章：</strong></p>
<blockquote>
<p>①、<a href="https://blog.csdn.net/liu_chen_yang/article/details/124665726?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Docker——denied: requested access to the resource is denied问题以及解决方法<ExternalLinkIcon/></a><br>
②、<a href="https://blog.csdn.net/liu_chen_yang/article/details/124688952" target="_blank" rel="noopener noreferrer">Linux中安装/部署docker-compose<ExternalLinkIcon/></a><br>
③、<a href="https://blog.csdn.net/liu_chen_yang/article/details/124623482" target="_blank" rel="noopener noreferrer">Linux中基于Docker搭建harbor私有镜像仓库（超级详细）<ExternalLinkIcon/></a>🔥🔥<br>
④、<a href="https://blog.csdn.net/liu_chen_yang/article/details/124670946?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Docker发布/上传镜像到dockerhub&amp;&amp;下载/拉取镜像&amp;&amp;删除dockerhub镜像<ExternalLinkIcon/></a></p>
</blockquote>
</div></template>


