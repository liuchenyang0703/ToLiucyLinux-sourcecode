<template><div><h1 id="docker-docker部署mysql" tabindex="-1"><a class="header-anchor" href="#docker-docker部署mysql" aria-hidden="true">#</a> Docker | Docker部署MySQL</h1>
<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2>
<p>大家好，我是Leo哥🫣🫣🫣，前面我们学习了Docker的安装以及Docker的基本命令。这节我们来学习在Docker中如何安装MySQL环境。好了，话不多说让我们开始吧😎😎😎。</p>
<h2 id="_2-拉取镜像" tabindex="-1"><a class="header-anchor" href="#_2-拉取镜像" aria-hidden="true">#</a> 2.拉取镜像</h2>
<p>我们利用Docker来安装一个MySQL软件，大家可以对比一下之前传统的安装方式，看看哪个效率更高一些。</p>
<p>如果是利用传统方式部署MySQL，大概的步骤有：</p>
<ul>
<li>搜索并下载MySQL安装包</li>
<li>上传至Linux环境</li>
<li>编译和配置环境</li>
<li>安装</li>
</ul>
<p>而使用Docker安装，仅仅需要两步即可，在命令行输入下面的命令：</p>
<p>首先我们需要去拉取镜像。执行以下命令进行镜像拉取。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311271919323.png" alt="image-20231127191937255" tabindex="0" loading="lazy"><figcaption>image-20231127191937255</figcaption></figure>
<h2 id="_3-安装" tabindex="-1"><a class="header-anchor" href="#_3-安装" aria-hidden="true">#</a> 3.安装</h2>
<p>通过以下命令进行安装</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\</span>
  <span class="token parameter variable">--name</span> mysql <span class="token punctuation">\</span>
  <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token punctuation">\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai <span class="token punctuation">\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root <span class="token punctuation">\</span>
  mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311271920911.png" alt="image-20231127192009870" tabindex="0" loading="lazy"><figcaption>image-20231127192009870</figcaption></figure>
<p>通过以下命令查看我们的容器是否运行成功</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311271921549.png" alt="image-20231127192132498" tabindex="0" loading="lazy"><figcaption>image-20231127192132498</figcaption></figure>
<p>可以看出来我们MySQL已经成功运行在Docker上面，大功告成!!!</p>
<h2 id="_4-连接mysql" tabindex="-1"><a class="header-anchor" href="#_4-连接mysql" aria-hidden="true">#</a> 4.连接MySQL</h2>
<p>下面我们通过数据库管理软件进行测试连接。这里笔者使用的是Navicat 16。如何有需要的读者朋友，可以关注微信公众号<strong>程序员Leo</strong>，后台回复Navicat即可获取。</p>
<p>我们打开我们的Navicat，点击连接。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311271924990.png" alt="image-20231127192451959" tabindex="0" loading="lazy"><figcaption>image-20231127192451959</figcaption></figure>
<p>然后填好服务器基本信息之后，点击测试连接。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311271925656.png" alt="image-20231127192535604" tabindex="0" loading="lazy"><figcaption>image-20231127192535604</figcaption></figure>
<p>然后发现我们的数据库，可以看到初始的四个数据库，说明本次安装成功！</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311271926664.png" alt="image-20231127192603642" tabindex="0" loading="lazy"><figcaption>image-20231127192603642</figcaption></figure>
<h2 id="_5-文章参考" tabindex="-1"><a class="header-anchor" href="#_5-文章参考" aria-hidden="true">#</a> 5.文章参考</h2>
<ul>
<li><a href="https://docs.docker.com/engine/install/centos/#install-from-a-package" target="_blank" rel="noopener noreferrer">https://docs.docker.com/engine/install/centos/#install-from-a-package<ExternalLinkIcon/></a></li>
<li><a href="https://docs.docker.com/engine/reference/commandline/cli/" target="_blank" rel="noopener noreferrer">https://docs.docker.com/engine/reference/commandline/cli/<ExternalLinkIcon/></a></li>
</ul>
<h2 id="_6-总结" tabindex="-1"><a class="header-anchor" href="#_6-总结" aria-hidden="true">#</a> 6.总结</h2>
<p>以上便是本文的全部内容，本人才疏学浅，文章有什么错误的地方，欢迎大佬们批评指正！我是<strong>Leo</strong>，一个在互联网行业的小白，立志成为更好的自己。</p>
<p>如果你想了解更多关于<strong>Leo</strong>，可以关注微信公众号-程序员Leo，后面文章会首先同步至公众号。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311271909655.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


