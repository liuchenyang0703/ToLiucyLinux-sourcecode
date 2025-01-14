<template><div><h1 id="docker-容器数据卷" tabindex="-1"><a class="header-anchor" href="#docker-容器数据卷" aria-hidden="true">#</a> Docker | 容器数据卷</h1>
<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2>
<p>大家好，我是Leo哥🫣🫣🫣，前面我们学习了Docker的安装以及Docker的基本命令。本篇文章我们学习数据卷有关知识点好了，话不多说让我们开始吧😎😎😎。</p>
<h2 id="_2-数据卷相关概念" tabindex="-1"><a class="header-anchor" href="#_2-数据卷相关概念" aria-hidden="true">#</a> 2.数据卷相关概念</h2>
<p>从docker的理念说起，docker将应用和环境打包成一个镜像，运行镜像（生成容器）就可以访问服务了。</p>
<ul>
<li>如果数据都存在容器中，那么删除容器，数据就会丢失！需求：数据可以持久化</li>
<li>MySQL容器删了，就相当于删库了。需求：MySQL数据可以本地存储</li>
</ul>
<p>容器之间可以有一个<strong>数据共享</strong>的技术，docker容器产生的数据同步到本地或者别的地方。</p>
<p>这就是数据卷技术，就是<strong>目录挂载</strong>，将容器内的目录，挂载到虚拟机上或者Linux上</p>
<p><strong>目的：</strong> 实现容器数据的持久化和同步操作。容器间也可以数据共享</p>
<h3 id="_2-1-什么是数据卷" tabindex="-1"><a class="header-anchor" href="#_2-1-什么是数据卷" aria-hidden="true">#</a> 2.1 什么是数据卷</h3>
<p><strong>数据卷（volume）<strong>是一个虚拟目录，是</strong>容器内目录</strong>与<strong>宿主机****目录</strong>之间映射的桥梁。</p>
<p>以Nginx为例，我们知道Nginx中有两个关键的目录：</p>
<ul>
<li><code v-pre>html</code>：放置一些静态资源</li>
<li><code v-pre>conf</code>：放置配置文件</li>
</ul>
<p>如果我们要让Nginx代理我们的静态资源，最好是放到<code v-pre>html</code>目录；如果我们要修改Nginx的配置，最好是找到<code v-pre>conf</code>下的<code v-pre>nginx.conf</code>文件。</p>
<p>但遗憾的是，容器运行的Nginx所有的文件都在容器内部。所以我们必须利用数据卷将两个目录与宿主机目录关联，方便我们操作。如图：</p>
<p>暂时无法在飞书文档外展示此内容</p>
<p>在上图中：</p>
<ul>
<li>我们创建了两个数据卷：<code v-pre>conf</code>、<code v-pre>html</code></li>
<li>Nginx容器内部的<code v-pre>conf</code>目录和<code v-pre>html</code>目录分别与两个数据卷关联。</li>
<li>而数据卷conf和html分别指向了宿主机的<code v-pre>/var/lib/docker/volumes/conf/_data</code>目录和<code v-pre>/var/lib/docker/volumes/html/_data</code>目录</li>
</ul>
<p>这样以来，容器内的<code v-pre>conf</code>和<code v-pre>html</code>目录就 与宿主机的<code v-pre>conf</code>和<code v-pre>html</code>目录关联起来，我们称为<strong>挂载</strong>。此时，我们操作宿主机的<code v-pre>/var/lib/docker/volumes/html/_data</code>就是在操作容器内的<code v-pre>/usr/share/nginx/html/_data</code>目录。只要我们将静态资源放入宿主机对应目录，就可以被Nginx代理了。</p>
<p><strong>小提示</strong>：</p>
<p><code v-pre>/var/lib/docker/volumes</code>这个目录就是默认的存放所有容器数据卷的目录，其下再根据数据卷名称创建新目录，格式为<code v-pre>/数据卷名/_data</code>。</p>
<p>**为什么不让容器目录直接指向 **宿主机目录呢？</p>
<ul>
<li>因为直接指向宿主机目录就与宿主机强耦合了，如果切换了环境，宿主机目录就可能发生改变了。由于容器一旦创建，目录挂载就无法修改，这样容器就无法正常工作了。</li>
<li>但是容器指向数据卷，一个逻辑名称，而数据卷再指向宿主机目录，就不存在强耦合。如果宿主机目录发生改变，只要改变数据卷与宿主机目录之间的映射关系即可。</li>
</ul>
<p>不过，我们通过由于数据卷目录比较深，不好寻找，通常我们也<strong>允许让容器直接与</strong>宿主机目录挂载而不使用数据卷，</p>
<h3 id="_2-2-数据卷命令" tabindex="-1"><a class="header-anchor" href="#_2-2-数据卷命令" aria-hidden="true">#</a> 2.2 数据卷命令</h3>
<p>数据卷的相关命令有：</p>
<table>
<thead>
<tr>
<th style="text-align:left"><strong>命令</strong></th>
<th style="text-align:left"><strong>说明</strong></th>
<th style="text-align:left"><strong>文档地址</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">docker volume create</td>
<td style="text-align:left">创建数据卷</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/volume_create/" target="_blank" rel="noopener noreferrer">docker volume create<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker volume ls</td>
<td style="text-align:left">查看所有数据卷</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/volume_ls/" target="_blank" rel="noopener noreferrer">docs.docker.com<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker volume rm</td>
<td style="text-align:left">删除指定数据卷</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/volume_prune/" target="_blank" rel="noopener noreferrer">docs.docker.com<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker volume inspect</td>
<td style="text-align:left">查看某个数据卷的详情</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/volume_inspect/" target="_blank" rel="noopener noreferrer">docs.docker.com<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">docker volume prune</td>
<td style="text-align:left">清除数据卷</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/volume_prune/" target="_blank" rel="noopener noreferrer">docker volume prune<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<p>注意：容器与数据卷的挂载要在创建容器时配置，对于创建好的容器，是不能设置数据卷的。而且<strong>创建容器的过程中，数据卷会自动创建</strong>。</p>
<p><strong>演示</strong>：演示一下nginx的html目录挂载</p>
<div class="language-PowerShell line-numbers-mode" data-ext="PowerShell"><pre v-pre class="language-PowerShell"><code># 1.首先创建容器并指定数据卷，注意通过 -v 参数来指定数据卷
docker run -d --name nginx -p 80:80 -v html:/usr/share/nginx/html nginx

# 2.然后查看数据卷
docker volume ls
# 结果
DRIVER    VOLUME NAME
local     29524ff09715d3688eae3f99803a2796558dbd00ca584a25a4bbc193ca82459f
local     html

# 3.查看数据卷详情
docker volume inspect html
# 结果
[
    {
        &quot;CreatedAt&quot;: &quot;2024-05-17T19:57:08+08:00&quot;,
        &quot;Driver&quot;: &quot;local&quot;,
        &quot;Labels&quot;: null,
        &quot;Mountpoint&quot;: &quot;/var/lib/docker/volumes/html/_data&quot;,
        &quot;Name&quot;: &quot;html&quot;,
        &quot;Options&quot;: null,
        &quot;Scope&quot;: &quot;local&quot;
    }
]

# 4.查看/var/lib/docker/volumes/html/_data目录
ll /var/lib/docker/volumes/html/_data
# 可以看到与nginx的html目录内容一样，结果如下：
总用量 8
-rw-r--r--. 1 root root 497 12月 28 2021 50x.html
-rw-r--r--. 1 root root 615 12月 28 2021 index.html

# 5.进入该目录，并随意修改index.html内容
cd /var/lib/docker/volumes/html/_data
vi index.html

# 6.打开页面，查看效果

# 7.进入容器内部，查看/usr/share/nginx/html目录内的文件是否变化
docker exec -it nginx bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-演示" tabindex="-1"><a class="header-anchor" href="#_3-演示" aria-hidden="true">#</a> 3.演示</h2>
<p>我们这里演示有关MySQL的匿名数据卷</p>
<p>使用以下命令查看MySQL容器详细信息</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> inspect mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>关注其中.Config.Volumes部分和.Mounts部分</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">"Id"</span><span class="token builtin class-name">:</span> <span class="token string">"d0d4d9d10bc4471978f112f9959f544d6d890aa79c62306e12afea71cab44138"</span>,
        <span class="token string">"Created"</span><span class="token builtin class-name">:</span> <span class="token string">"2023-11-23T12:02:13.163685727Z"</span>,
        <span class="token string">"Path"</span><span class="token builtin class-name">:</span> <span class="token string">"docker-entrypoint.sh"</span>,
        <span class="token string">"Args"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">"mysqld"</span>
        <span class="token punctuation">]</span>,
        <span class="token string">"State"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"Status"</span><span class="token builtin class-name">:</span> <span class="token string">"running"</span>,
            <span class="token string">"Running"</span><span class="token builtin class-name">:</span> true,
            <span class="token string">"Paused"</span><span class="token builtin class-name">:</span> false,
            <span class="token string">"Restarting"</span><span class="token builtin class-name">:</span> false,
            <span class="token string">"OOMKilled"</span><span class="token builtin class-name">:</span> false,
            <span class="token string">"Dead"</span><span class="token builtin class-name">:</span> false,
            <span class="token string">"Pid"</span><span class="token builtin class-name">:</span> <span class="token number">1878</span>,
            <span class="token string">"ExitCode"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">"Error"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
            <span class="token string">"StartedAt"</span><span class="token builtin class-name">:</span> <span class="token string">"2023-11-29T14:56:59.686680187Z"</span>,
            <span class="token string">"FinishedAt"</span><span class="token builtin class-name">:</span> <span class="token string">"2023-11-28T03:39:42.898753348Z"</span>
        <span class="token punctuation">}</span>,
        <span class="token string">"Image"</span><span class="token builtin class-name">:</span> <span class="token string">"sha256:3218b38490cec8d31976a40b92e09d61377359eab878db49f025e5d464367f3b"</span>,
        <span class="token string">"ResolvConfPath"</span><span class="token builtin class-name">:</span> <span class="token string">"/var/lib/docker/containers/d0d4d9d10bc4471978f112f9959f544d6d890aa79c62306e12afea71cab44138/resolv.conf"</span>,
        <span class="token string">"HostnamePath"</span><span class="token builtin class-name">:</span> <span class="token string">"/var/lib/docker/containers/d0d4d9d10bc4471978f112f9959f544d6d890aa79c62306e12afea71cab44138/hostname"</span>,
        <span class="token string">"HostsPath"</span><span class="token builtin class-name">:</span> <span class="token string">"/var/lib/docker/containers/d0d4d9d10bc4471978f112f9959f544d6d890aa79c62306e12afea71cab44138/hosts"</span>,
        <span class="token string">"LogPath"</span><span class="token builtin class-name">:</span> <span class="token string">"/var/lib/docker/containers/d0d4d9d10bc4471978f112f9959f544d6d890aa79c62306e12afea71cab44138/d0d4d9d10bc4471978f112f9959f544d6d890aa79c62306e12afea71cab44138-json.log"</span>,
        <span class="token string">"Name"</span><span class="token builtin class-name">:</span> <span class="token string">"/mysql"</span>,
        <span class="token string">"RestartCount"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
        <span class="token string">"Driver"</span><span class="token builtin class-name">:</span> <span class="token string">"overlay2"</span>,
        <span class="token string">"Platform"</span><span class="token builtin class-name">:</span> <span class="token string">"linux"</span>,
        <span class="token string">"MountLabel"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
        <span class="token string">"ProcessLabel"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
        <span class="token string">"AppArmorProfile"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
        <span class="token string">"ExecIDs"</span><span class="token builtin class-name">:</span> null,
        <span class="token string">"HostConfig"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"Binds"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">"/opt/software/mysql/init:/docker-entrypoint-initdb.d"</span>,
                <span class="token string">"/opt/software/mysql/data:/var/lib/mysql"</span>,
                <span class="token string">"/opt/software/mysql/conf:/etc/mysql/conf.d"</span>
            <span class="token punctuation">]</span>,
            <span class="token string">"ContainerIDFile"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
            <span class="token string">"LogConfig"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"Type"</span><span class="token builtin class-name">:</span> <span class="token string">"json-file"</span>,
                <span class="token string">"Config"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>,
            <span class="token string">"NetworkMode"</span><span class="token builtin class-name">:</span> <span class="token string">"hm-net"</span>,
            <span class="token string">"PortBindings"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"3306/tcp"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token string">"HostIp"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
                        <span class="token string">"HostPort"</span><span class="token builtin class-name">:</span> <span class="token string">"3306"</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>,
            <span class="token string">"RestartPolicy"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"Name"</span><span class="token builtin class-name">:</span> <span class="token string">"always"</span>,
                <span class="token string">"MaximumRetryCount"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span>,
            <span class="token string">"AutoRemove"</span><span class="token builtin class-name">:</span> false,
            <span class="token string">"VolumeDriver"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
            <span class="token string">"VolumesFrom"</span><span class="token builtin class-name">:</span> null,
            <span class="token string">"ConsoleSize"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token number">45</span>,
                <span class="token number">166</span>
            <span class="token punctuation">]</span>,
            <span class="token string">"CapAdd"</span><span class="token builtin class-name">:</span> null,
            <span class="token string">"CapDrop"</span><span class="token builtin class-name">:</span> null,
            <span class="token string">"CgroupnsMode"</span><span class="token builtin class-name">:</span> <span class="token string">"host"</span>,
            <span class="token string">"Dns"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">"DnsOptions"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">"DnsSearch"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">"ExtraHosts"</span><span class="token builtin class-name">:</span> null,
            <span class="token string">"GroupAdd"</span><span class="token builtin class-name">:</span> null,
            <span class="token string">"IpcMode"</span><span class="token builtin class-name">:</span> <span class="token string">"private"</span>,
            <span class="token string">"Cgroup"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
            <span class="token string">"Links"</span><span class="token builtin class-name">:</span> null,
            <span class="token string">"OomScoreAdj"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">"PidMode"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
            <span class="token string">"Privileged"</span><span class="token builtin class-name">:</span> false,
            <span class="token string">"PublishAllPorts"</span><span class="token builtin class-name">:</span> false,
            <span class="token string">"ReadonlyRootfs"</span><span class="token builtin class-name">:</span> false,
            <span class="token string">"SecurityOpt"</span><span class="token builtin class-name">:</span> null,
            <span class="token string">"UTSMode"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
            <span class="token string">"UsernsMode"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
            <span class="token string">"ShmSize"</span><span class="token builtin class-name">:</span> <span class="token number">67108864</span>,
            <span class="token string">"Runtime"</span><span class="token builtin class-name">:</span> <span class="token string">"runc"</span>,
            <span class="token string">"Isolation"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
            <span class="token string">"CpuShares"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">"Memory"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">"NanoCpus"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">"CgroupParent"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
            <span class="token string">"BlkioWeight"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">"BlkioWeightDevice"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">"BlkioDeviceReadBps"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">"BlkioDeviceWriteBps"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">"BlkioDeviceReadIOps"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">"BlkioDeviceWriteIOps"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">"CpuPeriod"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">"CpuQuota"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">"CpuRealtimePeriod"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">"CpuRealtimeRuntime"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">"CpusetCpus"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
            <span class="token string">"CpusetMems"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
            <span class="token string">"Devices"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">"DeviceCgroupRules"</span><span class="token builtin class-name">:</span> null,
            <span class="token string">"DeviceRequests"</span><span class="token builtin class-name">:</span> null,
            <span class="token string">"MemoryReservation"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">"MemorySwap"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">"MemorySwappiness"</span><span class="token builtin class-name">:</span> null,
            <span class="token string">"OomKillDisable"</span><span class="token builtin class-name">:</span> false,
            <span class="token string">"PidsLimit"</span><span class="token builtin class-name">:</span> null,
            <span class="token string">"Ulimits"</span><span class="token builtin class-name">:</span> null,
            <span class="token string">"CpuCount"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">"CpuPercent"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">"IOMaximumIOps"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">"IOMaximumBandwidth"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">"MaskedPaths"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">"/proc/asound"</span>,
                <span class="token string">"/proc/acpi"</span>,
                <span class="token string">"/proc/kcore"</span>,
                <span class="token string">"/proc/keys"</span>,
                <span class="token string">"/proc/latency_stats"</span>,
                <span class="token string">"/proc/timer_list"</span>,
                <span class="token string">"/proc/timer_stats"</span>,
                <span class="token string">"/proc/sched_debug"</span>,
                <span class="token string">"/proc/scsi"</span>,
                <span class="token string">"/sys/firmware"</span>,
                <span class="token string">"/sys/devices/virtual/powercap"</span>
            <span class="token punctuation">]</span>,
            <span class="token string">"ReadonlyPaths"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">"/proc/bus"</span>,
                <span class="token string">"/proc/fs"</span>,
                <span class="token string">"/proc/irq"</span>,
                <span class="token string">"/proc/sys"</span>,
                <span class="token string">"/proc/sysrq-trigger"</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>,
        <span class="token string">"GraphDriver"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"Data"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"LowerDir"</span><span class="token builtin class-name">:</span> <span class="token string">"/var/lib/docker/overlay2/33969b53cbc6aa929b5ece9d7f539a50e6f4910dddccefb93730bc73e679aa34-init/diff:/var/lib/docker/overlay2/796094bf771fc2db7de20a989d844dfc083d90e93fd163a865beb85d51e1dfd4/diff:/var/lib/docker/overlay2/3a30a84a6a761ef6494fb0f3b8b759cd8076037f813ed08e6e8236198ce07a00/diff:/var/lib/docker/overlay2/11bc12dcb49921b9ed6bff3d1f607b12a40fd68563c75e8b45fba5a7e9f7aa7a/diff:/var/lib/docker/overlay2/8cf0bb6362975eefa87ff11c4a984731b731ea0a7080701c90181119f912bace/diff:/var/lib/docker/overlay2/e05d3a55973ac4a9cfb37a00f990d60251ef500eaac717c0aaf06be00452309d/diff:/var/lib/docker/overlay2/4adff3373cdf065f04fbc4a549ee735155cbc29194bfbaa59a1582cde8021385/diff:/var/lib/docker/overlay2/91366e24401077be41ca6b5d32634237526eccbe323b981a54a18d14562efcb9/diff:/var/lib/docker/overlay2/d10f2cb83b38a30431883ddbdecdf210c7830bc95929074811909e1c896f7855/diff:/var/lib/docker/overlay2/fddec04d2325b33e6ff3e7281da688fa1e99d8eac5cf5454fc1ce6191bca8a43/diff:/var/lib/docker/overlay2/61fb5283a6e516ff4c86442f93ccf949a76f883f38b434a1f45c4dcf09abe0e3/diff:/var/lib/docker/overlay2/c54900dad65b52035a7ef480ecb2d2f395fa69ce4bedab3dab97a6a81aea9763/diff:/var/lib/docker/overlay2/42a427c699c7a4ad2166f1ac3345edf0a8964bc0d98ac5c8602f3d2bbb37db23/diff"</span>,
                <span class="token string">"MergedDir"</span><span class="token builtin class-name">:</span> <span class="token string">"/var/lib/docker/overlay2/33969b53cbc6aa929b5ece9d7f539a50e6f4910dddccefb93730bc73e679aa34/merged"</span>,
                <span class="token string">"UpperDir"</span><span class="token builtin class-name">:</span> <span class="token string">"/var/lib/docker/overlay2/33969b53cbc6aa929b5ece9d7f539a50e6f4910dddccefb93730bc73e679aa34/diff"</span>,
                <span class="token string">"WorkDir"</span><span class="token builtin class-name">:</span> <span class="token string">"/var/lib/docker/overlay2/33969b53cbc6aa929b5ece9d7f539a50e6f4910dddccefb93730bc73e679aa34/work"</span>
            <span class="token punctuation">}</span>,
            <span class="token string">"Name"</span><span class="token builtin class-name">:</span> <span class="token string">"overlay2"</span>
        <span class="token punctuation">}</span>,
        <span class="token string">"Mounts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token string">"Type"</span><span class="token builtin class-name">:</span> <span class="token string">"bind"</span>,
                <span class="token string">"Source"</span><span class="token builtin class-name">:</span> <span class="token string">"/opt/software/mysql/init"</span>,
                <span class="token string">"Destination"</span><span class="token builtin class-name">:</span> <span class="token string">"/docker-entrypoint-initdb.d"</span>,
                <span class="token string">"Mode"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
                <span class="token string">"RW"</span><span class="token builtin class-name">:</span> true,
                <span class="token string">"Propagation"</span><span class="token builtin class-name">:</span> <span class="token string">"rprivate"</span>
            <span class="token punctuation">}</span>,
            <span class="token punctuation">{</span>
                <span class="token string">"Type"</span><span class="token builtin class-name">:</span> <span class="token string">"bind"</span>,
                <span class="token string">"Source"</span><span class="token builtin class-name">:</span> <span class="token string">"/opt/software/mysql/conf"</span>,
                <span class="token string">"Destination"</span><span class="token builtin class-name">:</span> <span class="token string">"/etc/mysql/conf.d"</span>,
                <span class="token string">"Mode"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
                <span class="token string">"RW"</span><span class="token builtin class-name">:</span> true,
                <span class="token string">"Propagation"</span><span class="token builtin class-name">:</span> <span class="token string">"rprivate"</span>
            <span class="token punctuation">}</span>,
            <span class="token punctuation">{</span>
                <span class="token string">"Type"</span><span class="token builtin class-name">:</span> <span class="token string">"bind"</span>,
                <span class="token string">"Source"</span><span class="token builtin class-name">:</span> <span class="token string">"/opt/software/mysql/data"</span>,
                <span class="token string">"Destination"</span><span class="token builtin class-name">:</span> <span class="token string">"/var/lib/mysql"</span>,
                <span class="token string">"Mode"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
                <span class="token string">"RW"</span><span class="token builtin class-name">:</span> true,
                <span class="token string">"Propagation"</span><span class="token builtin class-name">:</span> <span class="token string">"rprivate"</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>,
        <span class="token string">"Config"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"Hostname"</span><span class="token builtin class-name">:</span> <span class="token string">"d0d4d9d10bc4"</span>,
            <span class="token string">"Domainname"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
            <span class="token string">"User"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
            <span class="token string">"AttachStdin"</span><span class="token builtin class-name">:</span> false,
            <span class="token string">"AttachStdout"</span><span class="token builtin class-name">:</span> false,
            <span class="token string">"AttachStderr"</span><span class="token builtin class-name">:</span> false,
            <span class="token string">"ExposedPorts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"3306/tcp"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,
                <span class="token string">"33060/tcp"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>,
            <span class="token string">"Tty"</span><span class="token builtin class-name">:</span> false,
            <span class="token string">"OpenStdin"</span><span class="token builtin class-name">:</span> false,
            <span class="token string">"StdinOnce"</span><span class="token builtin class-name">:</span> false,
            <span class="token string">"Env"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">"TZ=Asia/Shanghai"</span>,
                <span class="token string">"MYSQL_ROOT_PASSWORD=root"</span>,
                <span class="token string">"PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"</span>,
                <span class="token string">"GOSU_VERSION=1.12"</span>,
                <span class="token string">"MYSQL_MAJOR=8.0"</span>,
                <span class="token string">"MYSQL_VERSION=8.0.27-1debian10"</span>
            <span class="token punctuation">]</span>,
            <span class="token string">"Cmd"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">"mysqld"</span>
            <span class="token punctuation">]</span>,
            <span class="token string">"Image"</span><span class="token builtin class-name">:</span> <span class="token string">"mysql"</span>,
            <span class="token string">"Volumes"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"/var/lib/mysql"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>,
            <span class="token string">"WorkingDir"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
            <span class="token string">"Entrypoint"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">"docker-entrypoint.sh"</span>
            <span class="token punctuation">]</span>,
            <span class="token string">"OnBuild"</span><span class="token builtin class-name">:</span> null,
            <span class="token string">"Labels"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token string">"NetworkSettings"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"Bridge"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
            <span class="token string">"SandboxID"</span><span class="token builtin class-name">:</span> <span class="token string">"97ac9dbc6afc47ff855645c5e24711093253432258681b1b153c72f83e2d081e"</span>,
            <span class="token string">"HairpinMode"</span><span class="token builtin class-name">:</span> false,
            <span class="token string">"LinkLocalIPv6Address"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
            <span class="token string">"LinkLocalIPv6PrefixLen"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">"Ports"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"3306/tcp"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token string">"HostIp"</span><span class="token builtin class-name">:</span> <span class="token string">"0.0.0.0"</span>,
                        <span class="token string">"HostPort"</span><span class="token builtin class-name">:</span> <span class="token string">"3306"</span>
                    <span class="token punctuation">}</span>,
                    <span class="token punctuation">{</span>
                        <span class="token string">"HostIp"</span><span class="token builtin class-name">:</span> <span class="token string">"::"</span>,
                        <span class="token string">"HostPort"</span><span class="token builtin class-name">:</span> <span class="token string">"3306"</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>,
                <span class="token string">"33060/tcp"</span><span class="token builtin class-name">:</span> null
            <span class="token punctuation">}</span>,
            <span class="token string">"SandboxKey"</span><span class="token builtin class-name">:</span> <span class="token string">"/var/run/docker/netns/97ac9dbc6afc"</span>,
            <span class="token string">"SecondaryIPAddresses"</span><span class="token builtin class-name">:</span> null,
            <span class="token string">"SecondaryIPv6Addresses"</span><span class="token builtin class-name">:</span> null,
            <span class="token string">"EndpointID"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
            <span class="token string">"Gateway"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
            <span class="token string">"GlobalIPv6Address"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
            <span class="token string">"GlobalIPv6PrefixLen"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">"IPAddress"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
            <span class="token string">"IPPrefixLen"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">"IPv6Gateway"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
            <span class="token string">"MacAddress"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
            <span class="token string">"Networks"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"hm-net"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">"IPAMConfig"</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">"Links"</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">"Aliases"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                        <span class="token string">"d0d4d9d10bc4"</span>
                    <span class="token punctuation">]</span>,
                    <span class="token string">"NetworkID"</span><span class="token builtin class-name">:</span> <span class="token string">"63b937d578ce5b6aa4213fd0c93fd7a9f45d1b8c1a2ed70f5b15c9788abbb1fa"</span>,
                    <span class="token string">"EndpointID"</span><span class="token builtin class-name">:</span> <span class="token string">"e870f6d02fb755f42c553b2c55322a997eb0f81ec445a720c4815ffd482b9d6c"</span>,
                    <span class="token string">"Gateway"</span><span class="token builtin class-name">:</span> <span class="token string">"172.18.0.1"</span>,
                    <span class="token string">"IPAddress"</span><span class="token builtin class-name">:</span> <span class="token string">"172.18.0.2"</span>,
                    <span class="token string">"IPPrefixLen"</span><span class="token builtin class-name">:</span> <span class="token number">16</span>,
                    <span class="token string">"IPv6Gateway"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
                    <span class="token string">"GlobalIPv6Address"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
                    <span class="token string">"GlobalIPv6PrefixLen"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
                    <span class="token string">"MacAddress"</span><span class="token builtin class-name">:</span> <span class="token string">"02:42:ac:12:00:02"</span>,
                    <span class="token string">"DriverOpts"</span><span class="token builtin class-name">:</span> null
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现这个容器声明了一个本地目录，需要挂载数据卷，但是<strong>数据卷未定义</strong>。这就是匿名卷。</p>
<p>然后，我们再看结果中的<code v-pre>.Mounts</code>部分：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token string">"Mounts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token string">"Type"</span><span class="token builtin class-name">:</span> <span class="token string">"bind"</span>,
                <span class="token string">"Source"</span><span class="token builtin class-name">:</span> <span class="token string">"/opt/software/mysql/init"</span>,
                <span class="token string">"Destination"</span><span class="token builtin class-name">:</span> <span class="token string">"/docker-entrypoint-initdb.d"</span>,
                <span class="token string">"Mode"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
                <span class="token string">"RW"</span><span class="token builtin class-name">:</span> true,
                <span class="token string">"Propagation"</span><span class="token builtin class-name">:</span> <span class="token string">"rprivate"</span>
            <span class="token punctuation">}</span>,
            <span class="token punctuation">{</span>
                <span class="token string">"Type"</span><span class="token builtin class-name">:</span> <span class="token string">"bind"</span>,
                <span class="token string">"Source"</span><span class="token builtin class-name">:</span> <span class="token string">"/opt/software/mysql/conf"</span>,
                <span class="token string">"Destination"</span><span class="token builtin class-name">:</span> <span class="token string">"/etc/mysql/conf.d"</span>,
                <span class="token string">"Mode"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
                <span class="token string">"RW"</span><span class="token builtin class-name">:</span> true,
                <span class="token string">"Propagation"</span><span class="token builtin class-name">:</span> <span class="token string">"rprivate"</span>
            <span class="token punctuation">}</span>,
            <span class="token punctuation">{</span>
                <span class="token string">"Type"</span><span class="token builtin class-name">:</span> <span class="token string">"bind"</span>,	
                <span class="token string">"Source"</span><span class="token builtin class-name">:</span> <span class="token string">"/opt/software/mysql/data"</span>,
                <span class="token string">"Destination"</span><span class="token builtin class-name">:</span> <span class="token string">"/var/lib/mysql"</span>,
                <span class="token string">"Mode"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
                <span class="token string">"RW"</span><span class="token builtin class-name">:</span> true,
                <span class="token string">"Propagation"</span><span class="token builtin class-name">:</span> <span class="token string">"rprivate"</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现，其中有几个关键属性：</p>
<ul>
<li>Name：数据卷名称。由于定义容器未设置容器名，这里的就是匿名卷自动生成的名字，一串hash值。</li>
<li>Source：宿主机目录</li>
<li>Destination : 容器内的目录</li>
</ul>
<p>上述配置是将容器内的<code v-pre>/var/lib/mysql</code>这个目录，与数据卷<code v-pre>29524ff09715d3688eae3f99803a2796558dbd00ca584a25a4bbc193ca82459f</code>挂载。于是在宿主机中就有了<code v-pre>/var/lib/docker/volumes/29524ff09715d3688eae3f99803a2796558dbd00ca584a25a4bbc193ca82459f/_data</code>这个目录。这就是匿名数据卷对应的目录，其使用方式与普通数据卷没有差别。</p>
<p>接下来，可以查看该目录下的MySQL的data文件：</p>
<div class="language-Bash line-numbers-mode" data-ext="Bash"><pre v-pre class="language-Bash"><code>ls -l /var/lib/docker/volumes/29524ff09715d3688eae3f99803a2796558dbd00ca584a25a4bbc193ca82459f/_data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：每一个不同的镜像，将来创建容器后内部有哪些目录可以挂载，可以参考DockerHub对应的页面</p>
<h2 id="_4-挂载本地目录" tabindex="-1"><a class="header-anchor" href="#_4-挂载本地目录" aria-hidden="true">#</a> 4.挂载本地目录</h2>
<h3 id="_4-1-概述" tabindex="-1"><a class="header-anchor" href="#_4-1-概述" aria-hidden="true">#</a> 4.1 概述</h3>
<p>可以发现，数据卷的目录结构较深，如果我们去操作数据卷目录会不太方便。在很多情况下，我们会直接将容器目录与宿主机指定目录挂载。挂载语法与数据卷类似：</p>
<div class="language-Bash line-numbers-mode" data-ext="Bash"><pre v-pre class="language-Bash"><code># 挂载本地目录
-v 本地目录:容器内目录
# 挂载本地文件
-v 本地文件:容器内文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：本地目录或文件必须以 <code v-pre>/</code> 或 <code v-pre>./</code>开头，如果直接以名字开头，会被识别为数据卷名而非本地目录名。</p>
<p>例如：</p>
<div class="language-Bash line-numbers-mode" data-ext="Bash"><pre v-pre class="language-Bash"><code>-v mysql:/var/lib/mysql # 会被识别为一个数据卷叫mysql，运行时会自动创建这个数据卷
-v ./mysql:/var/lib/mysql # 会被识别为当前目录下的mysql目录，运行时如果不存在会创建目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>删除并重新创建mysql容器，并完成本地目录挂载：</p>
<ul>
<li>挂载<code v-pre>/opt/software/mysql/data</code>到容器内的<code v-pre>/var/lib/mysql</code>目录</li>
<li>挂载<code v-pre>/opt/software/mysql/init</code>到容器内的<code v-pre>/docker-entrypoint-initdb.d</code>目录（初始化的SQL脚本目录）</li>
<li>挂载<code v-pre>/opt/software/mysql/conf</code>到容器内的<code v-pre>/etc/mysql/conf.d</code>目录（这个是MySQL配置文件目录）</li>
</ul>
<p>这里我们把mysql创建在/opt/software下面，我一般的习惯是软件目录都会在这下面，大家可以随意选择即可。</p>
<p>然后在我们创建好的目录init 和 conf目录下面分别传入conf文件和SQL文件，这样在进行docker挂载之后，会为我们创建MySQL数据。</p>
<h3 id="_4-2-开始挂载" tabindex="-1"><a class="header-anchor" href="#_4-2-开始挂载" aria-hidden="true">#</a> 4.2 开始挂载</h3>
<p>创建并运行新mysql容器，挂载本地目录</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\</span>
  <span class="token parameter variable">--name</span> mysql <span class="token punctuation">\</span>
  <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token punctuation">\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai <span class="token punctuation">\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root <span class="token punctuation">\</span>
  <span class="token parameter variable">-v</span> /opt/software/mysql/data:/var/lib/mysql <span class="token punctuation">\</span>
  <span class="token parameter variable">-v</span> /opt/software/mysql/conf:/etc/mysql/conf.d <span class="token punctuation">\</span>
  <span class="token parameter variable">-v</span> /opt/software/mysql/init:/docker-entrypoint-initdb.d <span class="token punctuation">\</span>
  mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311301032887.png" alt="image-20231130103221822" loading="lazy">可以看出来，我们的本地挂载已经成功，为了进一步验证，我们打开我们创建的data目录进行查看。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311301033154.png" alt="image-20231130103345052" tabindex="0" loading="lazy"><figcaption>image-20231130103345052</figcaption></figure>
<p>这不就是我们MySQL存储数据的一些文件嘛，说明我们的本地挂载没有问题。</p>
<h3 id="_4-3-核验" tabindex="-1"><a class="header-anchor" href="#_4-3-核验" aria-hidden="true">#</a> 4.3 核验</h3>
<p>我们进入到MySQL容器中，查看他的编码情况</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311301039664.png" alt="image-20231130103940618" tabindex="0" loading="lazy"><figcaption>image-20231130103940618</figcaption></figure>
<p>发现正是我们预期上传的conf文件，大功告成!!!</p>
<h2 id="_5-挂载的三种方式" tabindex="-1"><a class="header-anchor" href="#_5-挂载的三种方式" aria-hidden="true">#</a> 5.挂载的三种方式</h2>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 1</span>
-v 容器内路径            # 匿名挂载

<span class="token title important"><span class="token punctuation">#</span> 2</span>
-v 卷名:容器内路径       # 具名挂载

<span class="token title important"><span class="token punctuation">#</span> 3</span>
-v 宿主机路径:容器内路径 # 指定路径挂载
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-文章参考" tabindex="-1"><a class="header-anchor" href="#_6-文章参考" aria-hidden="true">#</a> 6.文章参考</h2>
<ul>
<li><a href="https://docs.docker.com/engine/install/centos/#install-from-a-package" target="_blank" rel="noopener noreferrer">https://docs.docker.com/engine/install/centos/#install-from-a-package<ExternalLinkIcon/></a></li>
<li><a href="https://docs.docker.com/engine/reference/commandline/cli/" target="_blank" rel="noopener noreferrer">https://docs.docker.com/engine/reference/commandline/cli/<ExternalLinkIcon/></a></li>
</ul>
<h2 id="_7-总结" tabindex="-1"><a class="header-anchor" href="#_7-总结" aria-hidden="true">#</a> 7.总结</h2>
<p>以上便是本文的全部内容，本人才疏学浅，文章有什么错误的地方，欢迎大佬们批评指正！我是<strong>Leo</strong>，一个在互联网行业的小白，立志成为更好的自己。</p>
<p>如果你想了解更多关于<strong>Leo</strong>，可以关注微信公众号-程序员Leo，后面文章会首先同步至公众号。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311290934126.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


