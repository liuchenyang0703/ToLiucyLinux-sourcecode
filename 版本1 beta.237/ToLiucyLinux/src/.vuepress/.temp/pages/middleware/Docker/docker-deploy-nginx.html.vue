<template><div><h1 id="docker-docker部署nginx" tabindex="-1"><a class="header-anchor" href="#docker-docker部署nginx" aria-hidden="true">#</a> Docker | Docker部署Nginx</h1>
<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2>
<p>大家好，我是Leo哥🫣🫣🫣，前面我们学习了Docker的安装以及Docker的基本命令。这节我们来学习在Docker中如何安装Nginx。好了，话不多说让我们开始吧😎😎😎。</p>
<h2 id="_2-拉取镜像" tabindex="-1"><a class="header-anchor" href="#_2-拉取镜像" aria-hidden="true">#</a> 2.拉取镜像</h2>
<p>有了上一篇安装MySQL的经验，我们安装Nginx同样也是需要几步命令即可。：</p>
<p>首先我们需要去拉取镜像。执行以下命令进行镜像拉取。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311281546939.png" alt="image-20231128154615895" tabindex="0" loading="lazy"><figcaption>image-20231128154615895</figcaption></figure>
<p>然后通过以下命令查看我们拉取的镜像</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311281548263.png" alt="image-20231128154822190" tabindex="0" loading="lazy"><figcaption>image-20231128154822190</figcaption></figure>
<p>注意我这里使用的是我写的模版命令 ： dis</p>
<p>如果还太了解原理的同学，可以<a href="https://blog.csdn.net/qq_58608526/article/details/134635027?spm=1001.2014.3001.5501" target="_blank" rel="noopener noreferrer">参考我这篇文章<ExternalLinkIcon/></a>，进行配置。</p>
<h2 id="_3-安装" tabindex="-1"><a class="header-anchor" href="#_3-安装" aria-hidden="true">#</a> 3.安装</h2>
<p>通过以下命令进行安装</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> nginx <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311281550514.png" alt="image-20231128155017480" tabindex="0" loading="lazy"><figcaption>image-20231128155017480</figcaption></figure>
<h2 id="_4-测试" tabindex="-1"><a class="header-anchor" href="#_4-测试" aria-hidden="true">#</a> 4.测试</h2>
<p>然后我们通过我们的IP+端口号访问我们的nginx服务。</p>
<p>浏览器打开<a href="http://192.168.74.102:80" target="_blank" rel="noopener noreferrer">http://192.168.74.102:80<ExternalLinkIcon/></a> ，进行访问，这里80是可以省略的，默认访问的就是80端口。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311281552686.png" alt="image-20231128155222635" tabindex="0" loading="lazy"><figcaption>image-20231128155222635</figcaption></figure>
<p>可以看到，我们Nginx的默认欢迎页，大功告成！</p>
<h2 id="_5-文章参考" tabindex="-1"><a class="header-anchor" href="#_5-文章参考" aria-hidden="true">#</a> 5.文章参考</h2>
<ul>
<li><a href="https://docs.docker.com/engine/install/centos/#install-from-a-package" target="_blank" rel="noopener noreferrer">https://docs.docker.com/engine/install/centos/#install-from-a-package<ExternalLinkIcon/></a></li>
<li><a href="https://docs.docker.com/engine/reference/commandline/cli/" target="_blank" rel="noopener noreferrer">https://docs.docker.com/engine/reference/commandline/cli/<ExternalLinkIcon/></a></li>
</ul>
<h2 id="_6-总结" tabindex="-1"><a class="header-anchor" href="#_6-总结" aria-hidden="true">#</a> 6.总结</h2>
<p>以上便是本文的全部内容，本人才疏学浅，文章有什么错误的地方，欢迎大佬们批评指正！我是<strong>Leo</strong>，一个在互联网行业的小白，立志成为更好的自己。</p>
<p>如果你想了解更多关于<strong>Leo</strong>，可以关注微信公众号-程序员Leo，后面文章会首先同步至公众号。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311281552707.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


