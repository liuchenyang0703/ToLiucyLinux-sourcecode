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
<h1 id="一、需求" tabindex="-1"><a class="header-anchor" href="#一、需求" aria-hidden="true">#</a> 一、需求：</h1>
<blockquote>
<p>需要一个redhat7.8镜像，并带有yum在线源，可以下载命令；<br>
从官网拉的镜像是：<code v-pre>registry.access.redhat.com/rhel7:7.8</code>；但是这个里面没有yum源，下载不了需要的命令；<br><br>
这时候就需要我们手动去打一个镜像了；<br>
当然，如果不想自己打的话，我这边已经给大家打好现成的了；<br>
拉取redhat:7.8命令：<code v-pre>docker pull liuchenyang/redhat:7.8</code></p>
</blockquote>
<h1 id="二、现成镜像拉取地址" tabindex="-1"><a class="header-anchor" href="#二、现成镜像拉取地址" aria-hidden="true">#</a> 二、现成镜像拉取地址</h1>
<blockquote>
<p>拉取redhat:7.8命令：<code v-pre>docker pull liuchenyang/redhat:7.8</code></p>
</blockquote>
<h1 id="三、手动加一个yum源-并将其打成镜像" tabindex="-1"><a class="header-anchor" href="#三、手动加一个yum源-并将其打成镜像" aria-hidden="true">#</a> 三、手动加一个yum源，并将其打成镜像</h1>
<h2 id="_1、保证docker已安装" tabindex="-1"><a class="header-anchor" href="#_1、保证docker已安装" aria-hidden="true">#</a> 1、保证docker已安装</h2>
<blockquote>
<p>如果没有安装docker，可参考：<a href="https://liucy.blog.csdn.net/article/details/123842609" target="_blank" rel="noopener noreferrer">linux（centos）中部署docker（步骤超全，含带一些发展史和一些概念）<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="_2、拉取-registry-access-redhat-com-rhel7-7-8-镜像" tabindex="-1"><a class="header-anchor" href="#_2、拉取-registry-access-redhat-com-rhel7-7-8-镜像" aria-hidden="true">#</a> 2、拉取 <a href="http://registry.access.redhat.com/rhel7:7.8" target="_blank" rel="noopener noreferrer">registry.access.redhat.com/rhel7:7.8<ExternalLinkIcon/></a> 镜像</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull registry.access.redhat.com/rhel7:7.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3、创建一个容器以-registry-access-redhat-com-rhel7-7-8-为基础镜像" tabindex="-1"><a class="header-anchor" href="#_3、创建一个容器以-registry-access-redhat-com-rhel7-7-8-为基础镜像" aria-hidden="true">#</a> 3、创建一个容器以 <a href="http://registry.access.redhat.com/rhel7:7.8" target="_blank" rel="noopener noreferrer">registry.access.redhat.com/rhel7:7.8<ExternalLinkIcon/></a> 为基础镜像</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token parameter variable">--name</span> redhat registry.access.redhat.com/rhel7:7.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4、进入容器" tabindex="-1"><a class="header-anchor" href="#_4、进入容器" aria-hidden="true">#</a> 4、进入容器</h2>
<h3 id="_4-1-关闭redhat自带的插件subscription-manager。" tabindex="-1"><a class="header-anchor" href="#_4-1-关闭redhat自带的插件subscription-manager。" aria-hidden="true">#</a> 4.1 关闭redhat自带的插件subscription-manager。</h3>
<p>找到subscription-manage的配置文件/etc/yum/pluginconf.d/subscription-manager.conf</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@locahost <span class="token punctuation">]</span><span class="token comment"># vim /etc/yum/pluginconf.d/subscription-manager.conf</span>

<span class="token punctuation">[</span>main<span class="token punctuation">]</span>
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">0</span>           <span class="token comment">#将它禁用掉</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-新增网络yum源" tabindex="-1"><a class="header-anchor" href="#_4-2-新增网络yum源" aria-hidden="true">#</a> 4.2 新增网络yum源</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@locahost <span class="token punctuation">]</span><span class="token comment"># vi /etc/yum.repos.d/aliyun.repo</span>

<span class="token punctuation">[</span>base<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>aliyun
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://mirrors.aliyun.com/centos/7/os/<span class="token variable">$basearch</span>/
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-配置完保存退出-创建yum缓存" tabindex="-1"><a class="header-anchor" href="#_4-3-配置完保存退出-创建yum缓存" aria-hidden="true">#</a> 4.3 配置完保存退出，创建yum缓存</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#清除缓存</span>
yum clean all 

<span class="token comment">#重新加载所有缓存</span>
yum makecache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-更新yum仓库" tabindex="-1"><a class="header-anchor" href="#_4-4-更新yum仓库" aria-hidden="true">#</a> 4.4 更新yum仓库</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-5-安装常用命令" tabindex="-1"><a class="header-anchor" href="#_4-5-安装常用命令" aria-hidden="true">#</a> 4.5 安装常用命令</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">vim</span> <span class="token function">wget</span> <span class="token function">make</span> gcc gcc-c++
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以安装后，退出容器，将此容器打为镜像；</p>
<h2 id="_5、将容器打为镜像" tabindex="-1"><a class="header-anchor" href="#_5、将容器打为镜像" aria-hidden="true">#</a> 5、将容器打为镜像</h2>
<blockquote>
<p>可参考文档：<a href="https://liucy.blog.csdn.net/article/details/129496969" target="_blank" rel="noopener noreferrer">【Docker】如何将已有的容器打为镜像？？？<ExternalLinkIcon/></a></p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> commint redhat redhat:7.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6、查看镜像" tabindex="-1"><a class="header-anchor" href="#_6、查看镜像" aria-hidden="true">#</a> 6、查看镜像</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> images <span class="token operator">|</span> <span class="token function">grep</span> redhat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/1226c1f6c36e47b982ae75a54f82e2b0.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="四、redhat7-8镜像完成" tabindex="-1"><a class="header-anchor" href="#四、redhat7-8镜像完成" aria-hidden="true">#</a> 四、redhat7.8镜像完成！</h1>
<blockquote>
<p>如果想将打成的镜像上传到 <code v-pre>harbor</code> 或者 <code v-pre>dockerhub</code> 镜像仓库中，可参考此两篇文章：<br><br>
【私有镜像仓库】：<a href="https://liucy.blog.csdn.net/article/details/124623482" target="_blank" rel="noopener noreferrer">Linux中基于Docker搭建harbor私有镜像仓库（超级详细）<ExternalLinkIcon/></a><br>
【公有镜像仓库】：<a href="https://liucy.blog.csdn.net/article/details/124670946" target="_blank" rel="noopener noreferrer">Docker发布/上传镜像到dockerhub&amp;&amp;下载/拉取镜像&amp;&amp;删除dockerhub镜像<ExternalLinkIcon/></a></p>
</blockquote>
<h1 id="五、参考文献【相关文档】" tabindex="-1"><a class="header-anchor" href="#五、参考文献【相关文档】" aria-hidden="true">#</a> 五、参考文献【相关文档】</h1>
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
<td><a href="https://hub.docker.com/r/liuchenyang/redhat/tags" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/liuchenyang/redhat/tags<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/123842609" target="_blank" rel="noopener noreferrer">linux（centos）中部署docker（步骤超全，含带一些发展史和一些概念）<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/123842609" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/123842609<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/129496969" target="_blank" rel="noopener noreferrer">【Docker】如何将已有的容器打为镜像？？？<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/129496969" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/129496969<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/124623482" target="_blank" rel="noopener noreferrer">Linux中基于Docker搭建harbor私有镜像仓库（超级详细）<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/124623482" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/124623482<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/124670946" target="_blank" rel="noopener noreferrer">Docker发布/上传镜像到dockerhub&amp;&amp;下载/拉取镜像&amp;&amp;删除dockerhub镜像<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/124670946" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/124670946<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
</div></template>


