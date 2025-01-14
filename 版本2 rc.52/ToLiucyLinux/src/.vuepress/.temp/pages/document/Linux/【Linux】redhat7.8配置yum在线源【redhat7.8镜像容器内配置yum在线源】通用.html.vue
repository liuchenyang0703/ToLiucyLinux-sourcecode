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
<h2 id="一、需求" tabindex="-1"><a class="header-anchor" href="#一、需求"><span>一、需求：</span></a></h2>
<blockquote>
<p>需要一个redhat7.8镜像，并带有yum在线源，可以下载命令；<br>
从官网拉的镜像是：<code v-pre>registry.access.redhat.com/rhel7:7.8</code>；但是这个里面没有yum源，下载不了需要的命令；<br><br>
这时候就需要我们手动去打一个镜像了；<br>
当然，如果不想自己打的话，我这边已经给大家打好现成的了；<br>
拉取redhat:7.8命令：<code v-pre>docker pull liuchenyang/redhat:7.8</code></p>
</blockquote>
<h2 id="二、现成镜像拉取地址" tabindex="-1"><a class="header-anchor" href="#二、现成镜像拉取地址"><span>二、现成镜像拉取地址</span></a></h2>
<blockquote>
<p>拉取redhat:7.8命令：<code v-pre>docker pull liuchenyang/redhat:7.8</code></p>
</blockquote>
<h2 id="三、手动加一个yum源-并将其打成镜像" tabindex="-1"><a class="header-anchor" href="#三、手动加一个yum源-并将其打成镜像"><span>三、手动加一个yum源，并将其打成镜像</span></a></h2>
<h3 id="_1、保证docker已安装" tabindex="-1"><a class="header-anchor" href="#_1、保证docker已安装"><span>1、保证docker已安装</span></a></h3>
<blockquote>
<p>如果没有安装docker，可参考：<a href="https://liucy.blog.csdn.net/article/details/123842609" target="_blank" rel="noopener noreferrer">linux（centos）中部署docker（步骤超全，含带一些发展史和一些概念）</a></p>
</blockquote>
<h3 id="_2、拉取-registry-access-redhat-com-rhel7-7-8-镜像" tabindex="-1"><a class="header-anchor" href="#_2、拉取-registry-access-redhat-com-rhel7-7-8-镜像"><span>2、拉取 <a href="http://registry.access.redhat.com/rhel7:7.8" target="_blank" rel="noopener noreferrer">registry.access.redhat.com/rhel7:7.8</a> 镜像</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pull</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> registry.access.redhat.com/rhel7:7.8</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3、创建一个容器以-registry-access-redhat-com-rhel7-7-8-为基础镜像" tabindex="-1"><a class="header-anchor" href="#_3、创建一个容器以-registry-access-redhat-com-rhel7-7-8-为基础镜像"><span>3、创建一个容器以 <a href="http://registry.access.redhat.com/rhel7:7.8" target="_blank" rel="noopener noreferrer">registry.access.redhat.com/rhel7:7.8</a> 为基础镜像</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -itd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> redhat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> registry.access.redhat.com/rhel7:7.8</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_4、进入容器" tabindex="-1"><a class="header-anchor" href="#_4、进入容器"><span>4、进入容器</span></a></h3>
<h4 id="_4-1-关闭redhat自带的插件subscription-manager。" tabindex="-1"><a class="header-anchor" href="#_4-1-关闭redhat自带的插件subscription-manager。"><span>4.1 关闭redhat自带的插件subscription-manager。</span></a></h4>
<p>找到subscription-manage的配置文件/etc/yum/pluginconf.d/subscription-manager.conf</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@locahost ]# vim /etc/yum/pluginconf.d/subscription-manager.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[main]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">0</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">           #将它禁用掉</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-新增网络yum源" tabindex="-1"><a class="header-anchor" href="#_4-2-新增网络yum源"><span>4.2 新增网络yum源</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@locahost ]# vi /etc/yum.repos.d/aliyun.repo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[base]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">aliyun</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">baseurl</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">http://mirrors.aliyun.com/centos/7/os/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$basearch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">gpgcheck</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-配置完保存退出-创建yum缓存" tabindex="-1"><a class="header-anchor" href="#_4-3-配置完保存退出-创建yum缓存"><span>4.3 配置完保存退出，创建yum缓存</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#清除缓存</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> clean</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> all</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#重新加载所有缓存</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> makecache</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-4-更新yum仓库" tabindex="-1"><a class="header-anchor" href="#_4-4-更新yum仓库"><span>4.4 更新yum仓库</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> update</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_4-5-安装常用命令" tabindex="-1"><a class="header-anchor" href="#_4-5-安装常用命令"><span>4.5 安装常用命令</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> make</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gcc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gcc-c++</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>可以安装后，退出容器，将此容器打为镜像；</p>
<h3 id="_5、将容器打为镜像" tabindex="-1"><a class="header-anchor" href="#_5、将容器打为镜像"><span>5、将容器打为镜像</span></a></h3>
<blockquote>
<p>可参考文档：<a href="https://liucy.blog.csdn.net/article/details/129496969" target="_blank" rel="noopener noreferrer">【Docker】如何将已有的容器打为镜像？？？</a></p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> commint</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> redhat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> redhat:7.8</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_6、查看镜像" tabindex="-1"><a class="header-anchor" href="#_6、查看镜像"><span>6、查看镜像</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> images</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> redhat</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180922246.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="四、redhat7-8镜像完成" tabindex="-1"><a class="header-anchor" href="#四、redhat7-8镜像完成"><span>四、redhat7.8镜像完成！</span></a></h2>
<blockquote>
<p>如果想将打成的镜像上传到 <code v-pre>harbor</code> 或者 <code v-pre>dockerhub</code> 镜像仓库中，可参考此两篇文章：<br><br>
【私有镜像仓库】：<a href="https://liucy.blog.csdn.net/article/details/124623482" target="_blank" rel="noopener noreferrer">Linux中基于Docker搭建harbor私有镜像仓库（超级详细）</a><br>
【公有镜像仓库】：<a href="https://liucy.blog.csdn.net/article/details/124670946" target="_blank" rel="noopener noreferrer">Docker发布/上传镜像到dockerhub&amp;&amp;下载/拉取镜像&amp;&amp;删除dockerhub镜像</a></p>
</blockquote>
<h2 id="五、参考文献【相关文档】" tabindex="-1"><a class="header-anchor" href="#五、参考文献【相关文档】"><span>五、参考文献【相关文档】</span></a></h2>
<table>
<thead>
<tr>
<th>文章标题</th>
<th>文章地址</th>
</tr>
</thead>
<tbody>
<tr>
<td>dockerhub镜像仓库：redhat:7.8</td>
<td><a href="https://hub.docker.com/r/liuchenyang/redhat/tags" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/liuchenyang/redhat/tags</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/123842609" target="_blank" rel="noopener noreferrer">linux（centos）中部署docker（步骤超全，含带一些发展史和一些概念）</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/123842609" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/123842609</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/129496969" target="_blank" rel="noopener noreferrer">【Docker】如何将已有的容器打为镜像？？？</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/129496969" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/129496969</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/124623482" target="_blank" rel="noopener noreferrer">Linux中基于Docker搭建harbor私有镜像仓库（超级详细）</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/124623482" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/124623482</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/124670946" target="_blank" rel="noopener noreferrer">Docker发布/上传镜像到dockerhub&amp;&amp;下载/拉取镜像&amp;&amp;删除dockerhub镜像</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/124670946" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/124670946</a></td>
</tr>
</tbody>
</table>
</div></template>


