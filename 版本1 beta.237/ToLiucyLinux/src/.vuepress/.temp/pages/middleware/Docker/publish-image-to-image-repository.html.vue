<template><div><h1 id="docker-发布镜像到镜像仓库" tabindex="-1"><a class="header-anchor" href="#docker-发布镜像到镜像仓库" aria-hidden="true">#</a> Docker | 发布镜像到镜像仓库</h1>
<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2>
<p>大家好，我是Leo哥🫣🫣🫣，<RouterLink to="/middleware/docker/hhttps:/gaoziman.gitee.io/blogs/middleware/Docker/custom-docker-images.html">这篇文章</RouterLink>中，我们学习如果快速通过Dockerfile进行自定义镜像。那我们如果把这些自定义的镜像上传到dockerhub公开出来，供大家使用呢，这篇文章就来学习一下如何发布镜像到镜像仓库。好了，话不多说让我们开始吧😎😎😎。</p>
<h2 id="_2-注册dockerhub" tabindex="-1"><a class="header-anchor" href="#_2-注册dockerhub" aria-hidden="true">#</a> 2.注册DockerHub</h2>
<p>进入DockerHub官网注册一个账号。</p>
<p>官网：<a href="https://hub.docker.com/" target="_blank" rel="noopener noreferrer">https://hub.docker.com/<ExternalLinkIcon/></a></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312141621726.png" alt="image-20231214162145641" tabindex="0" loading="lazy"><figcaption>image-20231214162145641</figcaption></figure>
<p>没有账号的先通过这里进行注册然后登录进去即可，切记，记住自己的密码哈，我们后面会用到。</p>
<h2 id="_3-docker的安装" tabindex="-1"><a class="header-anchor" href="#_3-docker的安装" aria-hidden="true">#</a> 3.Docker的安装</h2>
<p>Docker的入门安装可以看我<a href="https://gaoziman.gitee.io/blogs/middleware/Docker/docker-install.html" target="_blank" rel="noopener noreferrer">这一篇文章<ExternalLinkIcon/></a>。</p>
<h2 id="_4-编写dockerfile文件" tabindex="-1"><a class="header-anchor" href="#_4-编写dockerfile文件" aria-hidden="true">#</a> 4.编写Dockerfile文件</h2>
<p>我们这里编写一个简单的Dockerfile文件。</p>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> nginx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后通过build命令打成为镜像。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312141957389.png" alt="image-20231214195751330" tabindex="0" loading="lazy"><figcaption>image-20231214195751330</figcaption></figure>
<p>通过以下命令进行查看。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> images	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312141958374.png" alt="image-20231214195840297" tabindex="0" loading="lazy"><figcaption>image-20231214195840297</figcaption></figure>
<h2 id="_5-修改镜像标签" tabindex="-1"><a class="header-anchor" href="#_5-修改镜像标签" aria-hidden="true">#</a> 5.修改镜像标签</h2>
<p><strong>基本格式：</strong></p>
<blockquote>
<p>docker tag 镜像名:版本 dockerhub用户名/镜像名:版本</p>
</blockquote>
<p><strong>示例：</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> tag mynginx:v1 javatop/mynginx:v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：javatop这里替换为你们的dockerhub用户名。</p>
<p>然后再次通过命令查看镜像。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312142001655.png" alt="image-20231214200144621" tabindex="0" loading="lazy"><figcaption>image-20231214200144621</figcaption></figure>
<h2 id="_6-登录到dockerhub" tabindex="-1"><a class="header-anchor" href="#_6-登录到dockerhub" aria-hidden="true">#</a> 6.登录到DockerHub</h2>
<h3 id="_6-1-指定用户登录" tabindex="-1"><a class="header-anchor" href="#_6-1-指定用户登录" aria-hidden="true">#</a> 6.1 指定用户登录</h3>
<p>指定用户登录，直接输入密码即可：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> login <span class="token parameter variable">-u</span> javatop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312142003857.png" alt="image-20231214200324823" tabindex="0" loading="lazy"><figcaption>image-20231214200324823</figcaption></figure>
<h3 id="_6-2-直接使用docker-login登录" tabindex="-1"><a class="header-anchor" href="#_6-2-直接使用docker-login登录" aria-hidden="true">#</a> 6.2 直接使用docker login登录</h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312142004230.png" alt="image-20231214200402173" tabindex="0" loading="lazy"><figcaption>image-20231214200402173</figcaption></figure>
<p>这样就登录成功了，我们就可以进行推送镜像了。</p>
<h2 id="_7-推送镜像" tabindex="-1"><a class="header-anchor" href="#_7-推送镜像" aria-hidden="true">#</a> 7.推送镜像</h2>
<p><strong>命令：</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> push 修改的镜像名:版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>示例：</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code> <span class="token function">docker</span> push javatop/mynginx:v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312142006630.png" alt="image-20231214200631602" tabindex="0" loading="lazy"><figcaption>image-20231214200631602</figcaption></figure>
<p>看到这个界面就表示我们推送镜像就成功了。</p>
<h2 id="_8-查看dockerhub" tabindex="-1"><a class="header-anchor" href="#_8-查看dockerhub" aria-hidden="true">#</a> 8.查看DockerHub</h2>
<p>然后我们去DockerHub官网去查看我们的镜像。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312142008659.png" alt="image-20231214200806606" tabindex="0" loading="lazy"><figcaption>image-20231214200806606</figcaption></figure>
<p>可以看到我们这就是我们刚推送过去的镜像。</p>
<h2 id="_9-拉取镜像" tabindex="-1"><a class="header-anchor" href="#_9-拉取镜像" aria-hidden="true">#</a> 9.拉取镜像</h2>
<p>接下来我们尝试一下拉取我们自己上传的镜像。</p>
<p>首先删除本地的镜像。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> d64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312142013662.png" alt="image-20231214201323622" tabindex="0" loading="lazy"><figcaption>image-20231214201323622</figcaption></figure>
<p>可以看到我们本地已经没有刚刚build的镜像了。</p>
<p>现在我们需要通过以下命令进行镜像的拉取。注意： 一定要跟上自己的用户名才可以拉取成功。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull javatop/mynginx:v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312142015752.png" alt="image-20231214201543678" tabindex="0" loading="lazy"><figcaption>image-20231214201543678</figcaption></figure>
<p>可以看到我们的镜像又重新拉取成功了。</p>
<h2 id="_10-相关文献参考" tabindex="-1"><a class="header-anchor" href="#_10-相关文献参考" aria-hidden="true">#</a> 10.相关文献参考</h2>
<ul>
<li><a href="https://blog.csdn.net/liu_chen_yang/article/details/124670946?app_version=6.2.4&amp;csdn_share_tail=%7B%22type%22%3A%22blog%22%2C%22rType%22%3A%22article%22%2C%22rId%22%3A%22124670946%22%2C%22source%22%3A%22liu_chen_yang%22%7D&amp;utm_source=app" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/liu_chen_yang/article/details/124670946?app_version=6.2.4&amp;csdn_share_tail={&quot;type&quot;%3A&quot;blog&quot;%2C&quot;rType&quot;%3A&quot;article&quot;%2C&quot;rId&quot;%3A&quot;124670946&quot;%2C&quot;source&quot;%3A&quot;liu_chen_yang&quot;}&amp;utm_source=app<ExternalLinkIcon/></a></li>
<li><a href="https://hub.docker.com/verify-email" target="_blank" rel="noopener noreferrer">https://hub.docker.com/verify-email<ExternalLinkIcon/></a></li>
</ul>
<h2 id="_11-总结" tabindex="-1"><a class="header-anchor" href="#_11-总结" aria-hidden="true">#</a> 11.总结</h2>
<p>以上便是本文的全部内容，本人才疏学浅，文章有什么错误的地方，欢迎大佬们批评指正！我是<strong>Leo</strong>，一个在互联网行业的小白，立志成为更好的自己。</p>
<p>如果你想了解更多关于<strong>Leo</strong>，可以关注公众号-程序员Leo，后面文章会首先同步至公众号。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312142016550.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


