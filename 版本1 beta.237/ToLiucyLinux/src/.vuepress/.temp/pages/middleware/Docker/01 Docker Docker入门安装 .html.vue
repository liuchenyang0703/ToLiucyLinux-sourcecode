<template><div><h1 id="docker-docker入门安装" tabindex="-1"><a class="header-anchor" href="#docker-docker入门安装" aria-hidden="true">#</a> Docker | Docker入门安装</h1>
<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2>
<p>大家好，我是Leo哥🫣🫣🫣，接下来带来一个全新专栏，Docker专栏，让你脱离繁杂的Linux操作，自己也能轻松部署Java程序。本来主要讲一下Docker入门环境配置。好了，话不多说让我们开始吧😎😎😎。</p>
<h2 id="_2-卸载旧版docker" tabindex="-1"><a class="header-anchor" href="#_2-卸载旧版docker" aria-hidden="true">#</a> 2.卸载旧版Docker</h2>
<p>首先如果系统中已经存在旧的Docker，则先卸载：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum remove <span class="token function">docker</span> <span class="token punctuation">\</span>
    docker-client <span class="token punctuation">\</span>
    docker-client-latest <span class="token punctuation">\</span>
    docker-common <span class="token punctuation">\</span>
    docker-latest <span class="token punctuation">\</span>
    docker-latest-logrotate <span class="token punctuation">\</span>
    docker-logrotate <span class="token punctuation">\</span>
    docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-配置yum仓库" tabindex="-1"><a class="header-anchor" href="#_3-配置yum仓库" aria-hidden="true">#</a> 3.配置yum仓库</h2>
<p>笔者服务器是 <code v-pre>centos 7</code> 环境</p>
<p>如果CentOS系统内核低于3.10，可以升级软件包及内核，通过 <code v-pre>yum update</code> 升级</p>
<blockquote>
<p>Linux系统分为两种：</p>
<ol>
<li>RedHat系列：Redhat、Centos、Fedora等</li>
<li>Debian系列：Debian、Ubuntu等</li>
</ol>
<p>RedHat系列的包管理工具是<code v-pre>yum</code></p>
<p>Debian系列的包管理工具是<code v-pre>apt-get</code></p>
</blockquote>
<p>首先要安装一个yum工具</p>
<div class="language-Bash line-numbers-mode" data-ext="Bash"><pre v-pre class="language-Bash"><code>yum install -y yum-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装成功后，执行命令，配置Docker的yum源：</p>
<div class="language-Bash line-numbers-mode" data-ext="Bash"><pre v-pre class="language-Bash"><code>yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-安装docker" tabindex="-1"><a class="header-anchor" href="#_4-安装docker" aria-hidden="true">#</a> 4.安装Docker</h2>
<p>最后，执行命令，安装Docker</p>
<div class="language-Bash line-numbers-mode" data-ext="Bash"><pre v-pre class="language-Bash"><code>yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-添加自启动配置" tabindex="-1"><a class="header-anchor" href="#_5-添加自启动配置" aria-hidden="true">#</a> 5.添加自启动配置</h2>
<p>因为我们是本地虚拟机，不能像云服务器一样无时无刻在运行，所以我们需要配置一下，让他开机自启，省得我们每次打开虚拟机都要打开docker。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 启动Docker</span>
systemctl start <span class="token function">docker</span>

<span class="token comment"># 停止Docker</span>
systemctl stop <span class="token function">docker</span>

<span class="token comment"># 重启</span>
systemctl restart <span class="token function">docker</span>

<span class="token comment"># 设置开机自启</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>

<span class="token comment"># 执行docker ps命令，如果不报错，说明安装启动成功</span>
<span class="token function">docker</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-配置阿里云镜像加速" tabindex="-1"><a class="header-anchor" href="#_6-配置阿里云镜像加速" aria-hidden="true">#</a> 6.配置阿里云镜像加速</h2>
<h3 id="_6-1-注册阿里云账号" tabindex="-1"><a class="header-anchor" href="#_6-1-注册阿里云账号" aria-hidden="true">#</a> 6.1 注册阿里云账号</h3>
<p>阿里云官网： <a href="https://www.aliyun.com/" target="_blank" rel="noopener noreferrer">https://www.aliyun.com/<ExternalLinkIcon/></a></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311231526065.png" alt="image-20231123152645907" tabindex="0" loading="lazy"><figcaption>image-20231123152645907</figcaption></figure>
<h3 id="_6-2-开启镜像服务" tabindex="-1"><a class="header-anchor" href="#_6-2-开启镜像服务" aria-hidden="true">#</a> 6.2 开启镜像服务</h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311231527634.png" alt="image-20231123152747592" tabindex="0" loading="lazy"><figcaption>image-20231123152747592</figcaption></figure>
<p>点击后进入控制台：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311231529709.png" alt="image-20231123152851462" tabindex="0" loading="lazy"><figcaption>image-20231123152851462</figcaption></figure>
<h3 id="_6-3-配置镜像加速" tabindex="-1"><a class="header-anchor" href="#_6-3-配置镜像加速" aria-hidden="true">#</a> 6.3 配置镜像加速</h3>
<p>找到<strong>镜像工具</strong>下的<strong>镜像加速器</strong>：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311231530423.png" alt="image-20231123153033393" tabindex="0" loading="lazy"><figcaption>image-20231123153033393</figcaption></figure>
<p>页面向下滚动，即可找到配置的文档说明：</p>
<p>选择自己Linux对应的版本即可</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311231531268.png" alt="image-20231123153103236" tabindex="0" loading="lazy"><figcaption>image-20231123153103236</figcaption></figure>
<p>具体命令如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 创建目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker

<span class="token comment"># 复制内容，注意把其中的镜像加速地址改成你自己的</span>
<span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">'EOF'
{
  "registry-mirrors": ["https://xxxx.mirror.aliyuncs.com"]
}
EOF</span>

<span class="token comment"># 重新加载配置</span>
systemctl daemon-reload

<span class="token comment"># 重启Docker</span>
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-测试" tabindex="-1"><a class="header-anchor" href="#_6-4-测试" aria-hidden="true">#</a> 6.4 测试</h3>
<p>输入命令测试docker是否安装完毕</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>docker--version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311231553203.png" alt="image-20231123155308179" tabindex="0" loading="lazy"><figcaption>image-20231123155308179</figcaption></figure>
<h2 id="_7-文章参考" tabindex="-1"><a class="header-anchor" href="#_7-文章参考" aria-hidden="true">#</a> 7.文章参考</h2>
<ul>
<li><a href="https://docs.docker.com/engine/install/centos/#install-from-a-package" target="_blank" rel="noopener noreferrer">https://docs.docker.com/engine/install/centos/#install-from-a-package<ExternalLinkIcon/></a></li>
</ul>
<h2 id="_8-总结" tabindex="-1"><a class="header-anchor" href="#_8-总结" aria-hidden="true">#</a> 8.总结</h2>
<p>以上便是本文的全部内容，本人才疏学浅，文章有什么错误的地方，欢迎大佬们批评指正！我是<strong>Leo</strong>，一个在互联网行业的小白，立志成为更好的自己。</p>
<p>如果你想了解更多关于<strong>Leo</strong>，可以关注公众号-程序员Leo，后面文章会首先同步至公众号。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311231454788.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


