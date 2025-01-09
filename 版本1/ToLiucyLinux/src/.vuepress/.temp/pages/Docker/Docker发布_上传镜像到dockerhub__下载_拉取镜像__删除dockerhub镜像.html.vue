<template><div><h2 id="一、注册dockerhub" tabindex="-1"><a class="header-anchor" href="#一、注册dockerhub" aria-hidden="true">#</a> 一、注册dockerhub</h2>
<p>我们先去官网注册dockerhub的账号和密码，官网在下方↓<br>
<a href="https://hub.docker.com/" target="_blank" rel="noopener noreferrer">https://hub.docker.com/<ExternalLinkIcon/></a><br>
登录到这个界面。<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161449105.png" alt="" loading="lazy"></p>
<h2 id="二、安装docker" tabindex="-1"><a class="header-anchor" href="#二、安装docker" aria-hidden="true">#</a> 二、安装docker</h2>
<p>详细的安装步骤我们可以采纳以下这个文档<br>
<a href="https://blog.csdn.net/liu_chen_yang/article/details/123842609" target="_blank" rel="noopener noreferrer">linux（centos）中部署docker（步骤超全，含带一些发展史和一些概念）<ExternalLinkIcon/></a></p>
<h2 id="三、编写一个dockerfile打成镜像或者直接pull一个镜像" tabindex="-1"><a class="header-anchor" href="#三、编写一个dockerfile打成镜像或者直接pull一个镜像" aria-hidden="true">#</a> 三、编写一个dockerfile打成镜像或者直接pull一个镜像</h2>
<h3 id="_1、编写dockerfile" tabindex="-1"><a class="header-anchor" href="#_1、编写dockerfile" aria-hidden="true">#</a> 1、编写dockerfile</h3>
<p>编写一个dockerfile的话，我们可以写一个非常简单的dockerfile；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> Dockerfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>FROM centos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（1）build一个镜像</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-f</span> Dockerfile <span class="token parameter variable">-t</span> mycentos:v1 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161449977.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>（2）docker images查看<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161449939.png" alt="" loading="lazy"><br>
这里一个镜像就打好了；</p>
<h3 id="_2、直接pull一个镜像" tabindex="-1"><a class="header-anchor" href="#_2、直接pull一个镜像" aria-hidden="true">#</a> 2、直接pull一个镜像</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull busybox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（1）docker images查看<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161449807.png" alt="" loading="lazy"><br>
这里一个镜像就拉好了；</p>
<h2 id="四、修改镜像标签" tabindex="-1"><a class="header-anchor" href="#四、修改镜像标签" aria-hidden="true">#</a> 四、修改镜像标签</h2>
<p><strong><font color=teal>格式：</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> tag 镜像名:版本 dockerhub用户名/镜像名:版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>实例：</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#dockerfile打出来的镜像</span>
<span class="token function">docker</span> tag mycentos:v1 liuchenyang/mycenos:v1

<span class="token comment">#pull直接拉取的镜像</span>
<span class="token function">docker</span> tag busybox:latest liuchenyang/busybox:v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改完之后就是一下这种：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>root@pzg:<span class="token punctuation">[</span>root<span class="token punctuation">]</span>docker images
REPOSITORY                           TAG                         IMAGE ID            CREATED             SIZE
busybox                              latest                      beae173ccac6        <span class="token number">4</span> months ago        <span class="token number">1</span>.24MB
liuchenyang/busybox                  v1                          beae173ccac6        <span class="token number">4</span> months ago        <span class="token number">1</span>.24MB
mycentos                             v1                          5d0da3dc9764        <span class="token number">7</span> months ago        231MB
liuchenyang/mycenos                  v1                          5d0da3dc9764        <span class="token number">7</span> months ago        231MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、使用命令登录dockerhub" tabindex="-1"><a class="header-anchor" href="#五、使用命令登录dockerhub" aria-hidden="true">#</a> 五、使用命令登录dockerhub</h2>
<blockquote>
<p>  我们在这里登录的时候可以docker login -u 用户名指定，也可以直接docker login然后输入用户名和密码；<br>
  还有就是如果已经又用户登录这可以退出登<font color=red>docker logout</font>退出登录。</p>
</blockquote>
<h3 id="_1、-u-指定用户登录" tabindex="-1"><a class="header-anchor" href="#_1、-u-指定用户登录" aria-hidden="true">#</a> 1、-u 指定用户登录</h3>
<p>指定用户登录，直接输入密码即可；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> login <span class="token parameter variable">-u</span> liuchenyang
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161450730.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_2、直接docker-login登录" tabindex="-1"><a class="header-anchor" href="#_2、直接docker-login登录" aria-hidden="true">#</a> 2、直接docker login登录</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@bogon<span class="token punctuation">]</span><span class="token comment"># docker login</span>
Login with your Docker ID to push and pull images from Docker Hub. If you don't have a Docker ID, <span class="token function">head</span> over to https://hub.docker.com to create one.
Username: liuchenyang
Password: 
WARNING<span class="token operator">!</span> Your password will be stored unencrypted <span class="token keyword">in</span> /root/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/<span class="token comment">#credentials-store</span>

Login Succeeded
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就登录成功了，我就就开始打包镜像，推送镜像。</p>
<h2 id="六、推送镜像到dockerhub" tabindex="-1"><a class="header-anchor" href="#六、推送镜像到dockerhub" aria-hidden="true">#</a> 六、推送镜像到dockerhub</h2>
<p><strong><font color=teal>格式：</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> push 修改的镜像名:版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>实例：</font></strong></p>
<p>dockerfile打出来的镜像：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>root@hostname<span class="token comment"># docker push liuchenyang/mycenos:v1</span>
The push refers to repository <span class="token punctuation">[</span>docker.io/liuchenyang/mycenos<span class="token punctuation">]</span>
74ddd0ec08fa: Mounted from library/centos 
v1: digest: sha256:a1801b843b1bfaf77c501e7a6d3f709401a1e0c83863037fa3aab063a7fdb9dc size: <span class="token number">529</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker pull拉取出来的镜像：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>root@hostname<span class="token comment"># docker push liuchenyang/busybox:v1 </span>
The push refers to repository <span class="token punctuation">[</span>docker.io/liuchenyang/busybox<span class="token punctuation">]</span>
01fd6df81c8e: Mounted from library/busybox 
v1: digest: sha256:62ffc2ed7554e4c6d360bce40bbcf196573dd27c4ce080641a2c59867e732dee size: <span class="token number">527</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后显示的有<font color=red>大小多少</font>则是上传成功，然而显示的<font color=red>denied: requested access to the resource is denied</font>则是报错，可以看第八条。</p>
<h2 id="七、查看dockerhub" tabindex="-1"><a class="header-anchor" href="#七、查看dockerhub" aria-hidden="true">#</a> 七、查看dockerhub</h2>
<p>这时候我们登录dockerhub官网去查看：<a href="https://hub.docker.com/" target="_blank" rel="noopener noreferrer">dockerhub官网<ExternalLinkIcon/></a><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161450911.png" alt="" loading="lazy"><br>
然后可以看到这时候已经上传到dockerhub中；之后下载镜像也可以直接登录dockerhub账号，然后pull镜像了。</p>
<h2 id="八、denied-requested-access-to-the-resource-is-denied报错详解" tabindex="-1"><a class="header-anchor" href="#八、denied-requested-access-to-the-resource-is-denied报错详解" aria-hidden="true">#</a> 八、denied: requested access to the resource is denied报错详解</h2>
<p>如遇到此类报错，可以查看：<a href="https://blog.csdn.net/liu_chen_yang/article/details/124665726?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Docker——denied: requested access to the resource is denied问题以及解决方法<ExternalLinkIcon/></a><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161450008.png" alt="" loading="lazy"></p>
<h2 id="九、拉取镜像" tabindex="-1"><a class="header-anchor" href="#九、拉取镜像" aria-hidden="true">#</a> 九、拉取镜像</h2>
<p><strong><font color=teal>格式：</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull dockerhub的镜像名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>实例：</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>root@locahost<span class="token comment"># docker pull liuchenyang/mycenos:v1</span>
v1: Pulling from liuchenyang/mycenos
Digest: sha256:a1801b843b1bfaf77c501e7a6d3f709401a1e0c83863037fa3aab063a7fdb9dc
Status: Downloaded newer image <span class="token keyword">for</span> liuchenyang/mycenos:v1
docker.io/liuchenyang/mycenos:v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161450250.png" alt="" loading="lazy"><br>
拉取成功，后续需要修改镜像名可以通过“<font color=red>docker tag 原镜像名 要修改的镜像名</font>” 来修改。<br>
也可以从dockerhub中查看拉取镜像的命令；<br>
点击你想要拉取的镜像；<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161450389.png" alt="" loading="lazy"><br>
然后选择tag，就可以看到有一个拉取镜像的命令了；<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161450790.png" alt="" loading="lazy"></p>
<h2 id="十、删除dockerhub镜像" tabindex="-1"><a class="header-anchor" href="#十、删除dockerhub镜像" aria-hidden="true">#</a> 十、删除dockerhub镜像</h2>
<p>还是先选择要删除的镜像；<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161450218.png" alt="" loading="lazy"><br>
然后点击settings，往下面翻就可以看到删除镜像了；<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161450793.png" alt="" loading="lazy"><br>
然后会让你再次输入要删除的镜像，就和提示你确认是否删除是一样的，怕你误删；输入完镜像名之后再次点击delete就可以删除了；<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161450686.png" alt="" loading="lazy"><br>
然后就可以看到只剩一个镜像了，这时就删除成功了。<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161450001.png" alt="" loading="lazy"></p>
<h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h1>
<p><strong>相关文章：</strong></p>
<blockquote>
<p>①、<a href="https://blog.csdn.net/liu_chen_yang/article/details/124665726?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Docker——denied: requested access to the resource is denied问题以及解决方法<ExternalLinkIcon/></a><br>
②、<a href="https://blog.csdn.net/liu_chen_yang/article/details/124705622" target="_blank" rel="noopener noreferrer">Docker搭建harbor私有镜像仓库（命令行模式）<ExternalLinkIcon/></a><br>
③、<a href="https://blog.csdn.net/liu_chen_yang/article/details/124623482" target="_blank" rel="noopener noreferrer">Linux中基于Docker搭建harbor私有镜像仓库（超级详细）<ExternalLinkIcon/></a>🔥🔥</p>
</blockquote>
</div></template>


