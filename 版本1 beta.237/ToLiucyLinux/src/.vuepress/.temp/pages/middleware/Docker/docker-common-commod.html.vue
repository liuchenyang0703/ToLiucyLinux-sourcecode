<template><div><h1 id="docker-docker常用命令" tabindex="-1"><a class="header-anchor" href="#docker-docker常用命令" aria-hidden="true">#</a> Docker | Docker常用命令</h1>
<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2>
<p>大家好，我是Leo哥🫣🫣🫣，众所周知，docker 排查问题相较而言是困难的。因此，熟知一些常用命令对我们快速的排查定位问题是非常有帮助的。</p>
<p>好了，话不多说让我们开始吧😎😎😎。</p>
<h2 id="_2-常见命令介绍" tabindex="-1"><a class="header-anchor" href="#_2-常见命令介绍" aria-hidden="true">#</a> 2.常见命令介绍</h2>
<p>下面是一些docker常见的命令</p>
<table>
<thead>
<tr>
<th style="text-align:left"><strong>命令</strong></th>
<th style="text-align:left"><strong>说明</strong></th>
<th style="text-align:center"><strong>文档地址</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">docker pull</td>
<td style="text-align:left">拉取镜像</td>
<td style="text-align:center"><a href="https://docs.docker.com/engine/reference/commandline/pull/" target="_blank" rel="noopener noreferrer">docker pull<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker push</td>
<td style="text-align:left">推送镜像到DockerRegistry</td>
<td style="text-align:center"><a href="https://docs.docker.com/engine/reference/commandline/push/" target="_blank" rel="noopener noreferrer">docker push<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker images</td>
<td style="text-align:left">查看本地镜像</td>
<td style="text-align:center"><a href="https://docs.docker.com/engine/reference/commandline/images/" target="_blank" rel="noopener noreferrer">docker images<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker rmi</td>
<td style="text-align:left">删除本地镜像</td>
<td style="text-align:center"><a href="https://docs.docker.com/engine/reference/commandline/rmi/" target="_blank" rel="noopener noreferrer">docker rmi<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker run</td>
<td style="text-align:left">创建并运行容器（不能重复创建）</td>
<td style="text-align:center"><a href="https://docs.docker.com/engine/reference/commandline/run/" target="_blank" rel="noopener noreferrer">docker run<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker stop</td>
<td style="text-align:left">停止指定容器</td>
<td style="text-align:center"><a href="https://docs.docker.com/engine/reference/commandline/stop/" target="_blank" rel="noopener noreferrer">docker stop<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker start</td>
<td style="text-align:left">启动指定容器</td>
<td style="text-align:center"><a href="https://docs.docker.com/engine/reference/commandline/start/" target="_blank" rel="noopener noreferrer">docker start<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker restart</td>
<td style="text-align:left">重新启动容器</td>
<td style="text-align:center"><a href="https://docs.docker.com/engine/reference/commandline/restart/" target="_blank" rel="noopener noreferrer">docker restart<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker rm</td>
<td style="text-align:left">删除指定容器</td>
<td style="text-align:center"><a href="https://docs.docker.com/engine/reference/commandline/rm/" target="_blank" rel="noopener noreferrer">docs.docker.com<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker ps</td>
<td style="text-align:left">查看容器</td>
<td style="text-align:center"><a href="https://docs.docker.com/engine/reference/commandline/ps/" target="_blank" rel="noopener noreferrer">docker ps<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker logs</td>
<td style="text-align:left">查看容器运行日志</td>
<td style="text-align:center"><a href="https://docs.docker.com/engine/reference/commandline/logs/" target="_blank" rel="noopener noreferrer">docker logs<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker exec</td>
<td style="text-align:left">进入容器</td>
<td style="text-align:center"><a href="https://docs.docker.com/engine/reference/commandline/exec/" target="_blank" rel="noopener noreferrer">docker exec<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker save</td>
<td style="text-align:left">保存镜像到本地压缩文件</td>
<td style="text-align:center"><a href="https://docs.docker.com/engine/reference/commandline/save/" target="_blank" rel="noopener noreferrer">docker save<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker load</td>
<td style="text-align:left">加载本地压缩文件到镜像</td>
<td style="text-align:center"><a href="https://docs.docker.com/engine/reference/commandline/load/" target="_blank" rel="noopener noreferrer">docker load<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker inspect</td>
<td style="text-align:left">查看容器详细信息</td>
<td style="text-align:center"><a href="https://docs.docker.com/engine/reference/commandline/inspect/" target="_blank" rel="noopener noreferrer">docker inspect<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<p>用一副图来表示这些命令的关系：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311262214021.png" alt="image-20231126221438991" tabindex="0" loading="lazy"><figcaption>image-20231126221438991</figcaption></figure>
<p>注意：</p>
<p><strong>默认情况下，每次重启虚拟机我们都需要手动启动Docker和Docker中的容器。通过命令可以实现开机自启：</strong></p>
<div class="language-PowerShell line-numbers-mode" data-ext="PowerShell"><pre v-pre class="language-PowerShell"><code># Docker开机自启
systemctl enable docker

# Docker容器开机自启
docker update --restart=always [容器名/容器id]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-详细命令演示" tabindex="-1"><a class="header-anchor" href="#_3-详细命令演示" aria-hidden="true">#</a> 3.详细命令演示</h2>
<h3 id="_3-1-显示docker的系统信息" tabindex="-1"><a class="header-anchor" href="#_3-1-显示docker的系统信息" aria-hidden="true">#</a> 3.1 显示docker的系统信息</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311262217262.png" alt="image-20231126221708214" tabindex="0" loading="lazy"><figcaption>image-20231126221708214</figcaption></figure>
<h3 id="_3-2-拉取镜像" tabindex="-1"><a class="header-anchor" href="#_3-2-拉取镜像" aria-hidden="true">#</a> 3.2 拉取镜像</h3>
<p>我们这里通过以拉取Redis为例来进行演示</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>首先会检查是否有此进行，如何有则进行加载，如果没有，则去仓库中拉取最新镜像</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311262226267.png" alt="image-20231126222638206" tabindex="0" loading="lazy"><figcaption>image-20231126222638206</figcaption></figure>
<h3 id="_3-3-查看镜像" tabindex="-1"><a class="header-anchor" href="#_3-3-查看镜像" aria-hidden="true">#</a> 3.3 查看镜像</h3>
<p>我们通过拉取成功之后，我们可以通过以下命令查看我们的镜像</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker images 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311262227134.png" alt="image-20231126222739088" tabindex="0" loading="lazy"><figcaption>image-20231126222739088</figcaption></figure>
<h3 id="_3-4-创建容器" tabindex="-1"><a class="header-anchor" href="#_3-4-创建容器" aria-hidden="true">#</a> 3.4 创建容器</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker run --name redis -p 6379:6379 -d --restart=always redis redis-server --appendonly yes --requirepass xxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-5-查看运行中容器" tabindex="-1"><a class="header-anchor" href="#_3-5-查看运行中容器" aria-hidden="true">#</a> 3.5 查看运行中容器</h3>
<p>我们可以通过以下命令进行查看正在运行中容器</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311262230993.png" alt="image-20231126223056943" tabindex="0" loading="lazy"><figcaption>image-20231126223056943</figcaption></figure>
<p>可以加格式化方式访问，格式会更加清爽</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">--format</span> <span class="token string">"table {{.ID}}<span class="token entity" title="\t">\t</span>{{.Image}}<span class="token entity" title="\t">\t</span>{{.Ports}}<span class="token entity" title="\t">\t</span>{{.Status}}<span class="token entity" title="\t">\t</span>{{.Names}}"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-6-查看容器详细信息" tabindex="-1"><a class="header-anchor" href="#_3-6-查看容器详细信息" aria-hidden="true">#</a> 3.6 查看容器详细信息</h3>
<p>我们可以使用以下命令来查看容器的具体信息</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker inspect redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311262233069.png" alt="image-20231126223328987" tabindex="0" loading="lazy"><figcaption>image-20231126223328987</figcaption></figure>
<h3 id="_3-7-进入容器内部" tabindex="-1"><a class="header-anchor" href="#_3-7-进入容器内部" aria-hidden="true">#</a> 3.7 进入容器内部</h3>
<p>我们可以通过一下命令进入到Redis容器内部</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> redis <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311262242657.png" alt="image-20231126224258607" tabindex="0" loading="lazy"><figcaption>image-20231126224258607</figcaption></figure>
<h3 id="_3-8-删除容器" tabindex="-1"><a class="header-anchor" href="#_3-8-删除容器" aria-hidden="true">#</a> 3.8 删除容器</h3>
<p>当我们不想要这个容器的时候，我们可以通过删除命令进行删除，但是注意：正在运行的容器不可以删除。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311262245695.png" alt="image-20231126224556637" tabindex="0" loading="lazy"><figcaption>image-20231126224556637</figcaption></figure>
<p>我们需要先对这个容器进行停止然后再进行删除。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311262246237.png" alt="image-20231126224650182" tabindex="0" loading="lazy"><figcaption>image-20231126224650182</figcaption></figure>
<p>可以看出来，此时我们的Redis容器就被删除了。</p>
<p>小技巧：当我们删除容器的时候，可以通过容器ID的前三位进行删除，停止容器也可以。</p>
<p>但其实，如果我们的情况比较进行，我们还是可以通过命令来强制删除容器的，但是一般不建议这么使用。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> redis <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-命令别名" tabindex="-1"><a class="header-anchor" href="#_4-命令别名" aria-hidden="true">#</a> 4.命令别名</h2>
<p>给常用Docker命令起别名，方便我们访问：</p>
<div class="language-PowerShell line-numbers-mode" data-ext="PowerShell"><pre v-pre class="language-PowerShell"><code># 修改/root/.bashrc文件
vim /root/.bashrc
内容如下：
# .bashrc

# User specific aliases and functions

alias rm='rm -i'
alias cp='cp -i'
alias mv='mv -i'
alias dps='docker ps --format &quot;table {{.ID}}\t{{.Image}}\t{{.Ports}}\t{{.Status}}\t{{.Names}}&quot;'
alias dis='docker images'

# Source global definitions
if [ -f /etc/bashrc ]; then
        . /etc/bashrc
fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，执行命令使别名生效</p>
<div class="language-PowerShell line-numbers-mode" data-ext="PowerShell"><pre v-pre class="language-PowerShell"><code>source /root/.bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后我们可以使用一下我们的新命令来查看我的镜像。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311262250442.png" alt="image-20231126225027409" tabindex="0" loading="lazy"><figcaption>image-20231126225027409</figcaption></figure>
<h2 id="_5-文章参考" tabindex="-1"><a class="header-anchor" href="#_5-文章参考" aria-hidden="true">#</a> 5.文章参考</h2>
<ul>
<li><a href="https://docs.docker.com/engine/install/centos/#install-from-a-package" target="_blank" rel="noopener noreferrer">https://docs.docker.com/engine/install/centos/#install-from-a-package<ExternalLinkIcon/></a></li>
<li><a href="https://docs.docker.com/engine/reference/commandline/cli/" target="_blank" rel="noopener noreferrer">https://docs.docker.com/engine/reference/commandline/cli/<ExternalLinkIcon/></a></li>
</ul>
<h2 id="_6-总结" tabindex="-1"><a class="header-anchor" href="#_6-总结" aria-hidden="true">#</a> 6.总结</h2>
<p>以上便是本文的全部内容，本人才疏学浅，文章有什么错误的地方，欢迎大佬们批评指正！我是<strong>Leo</strong>，一个在互联网行业的小白，立志成为更好的自己。</p>
<p>如果你想了解更多关于<strong>Leo</strong>，可以关注微信公众号-程序员Leo，后面文章会首先同步至公众号。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311262202601.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


