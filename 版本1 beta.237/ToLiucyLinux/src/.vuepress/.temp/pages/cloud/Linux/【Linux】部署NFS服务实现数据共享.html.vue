<template><div><figure><img src="https://img-blog.csdnimg.cn/img_convert/5420c2100dff6544fc6ffbba42cae7bd.png#pic_center" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">CSDN博客专家<ExternalLinkIcon/></a><br>
  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<p>@[toc]</p>
<h1 id="一、nfs简介与rpc简介" tabindex="-1"><a class="header-anchor" href="#一、nfs简介与rpc简介" aria-hidden="true">#</a> 一、NFS简介与RPC简介</h1>
<h2 id="_1-nfs服务简介" tabindex="-1"><a class="header-anchor" href="#_1-nfs服务简介" aria-hidden="true">#</a> 1. NFS服务简介</h2>
<p>NFS是一种网络协议，NFS依赖RPC才能工作。（RHEL5.0上是NFS V3而RHEL6.0上是NFS V4）</p>
<p>NFS 的基本原则是“容许不同的客户端及服务端通过一组RPC分享相同的文件系统”，它是独立于操作系统，容许不同硬件及操作系统的系统共同进行文件的分享。</p>
<p>NFS在文件传送或信息传送过程中依赖于RPC协议。RPC，远程过程调用 (Remote Procedure Call) 是能使客户端执行其他系统中程序的一种机制。NFS本身是没有提供信息传输的协议和功能的，但NFS却能让我们通过网络进行资料的分享，这是因为NFS使用了一些其它的传输协议。而这些传输协议用到这个RPC功能的。<font color=red>可以这么理解RPC和NFS的关系：NFS是一个文件系统，而RPC是负责信息的传输。</font></p>
<h2 id="_2-rpc协议简介" tabindex="-1"><a class="header-anchor" href="#_2-rpc协议简介" aria-hidden="true">#</a> 2. RPC协议简介</h2>
<p>RPC（Remote Procedure Call）远程过程调用，它是一种通过网络从远程计算机程序上请求服务，而不需要了解底层网络技术的协议。其工作在TCP/UDP的111端口。建立在Socket之上的，主要是简化编程的工作在底层提供网络之间的通信。</p>
<p>RPC采用客户机/服务器模式。请求程序就是一个客户机，而服务提供程序就是一个服务器。首先，客户机调用进程发送一个有进程参数的调用信息到服务进程，然后等待应答信息。在服务器端，进程保持睡眠状态直到调用信息的到达为止。当一个调用信息到达，服务器获得进程参数，计算结果，发送答复信息，然后等待下一个调用信息，最后，客户端调用进程接收答复信息，获得进程结果，然后调用执行继续进行。</p>
<p>RPC远程过程调度：</p>
<ul>
<li>NFS 协议本身并没有网络传输功能，而是基于远程过程调用协议实现的</li>
<li>提供一个面向过程的远程服务的接口</li>
<li>可以通过网络从远程主机程序上请求服务，而不需要了解底层网络技术的协议</li>
<li>工作在 OSI 模型的会话层，它可以为遵从 RPC 协议应用层协议提供端口注册功能</li>
<li>事实上，有很多服务（NFS 和 NIS 等）都可以向 RPC 注册端口</li>
<li>RPC 使用网络端口 111 来监听客户端的请求</li>
</ul>
<h2 id="_3-nfs工作流程" tabindex="-1"><a class="header-anchor" href="#_3-nfs工作流程" aria-hidden="true">#</a> 3. NFS工作流程</h2>
<p>1.首先服务器端启动RPC服务，并开启111端口<br>
2.然后还需要服务器端启动NFS服务，并向RPC注册端口信息<br>
3.客户端启动RPC（portmap服务），向服务端的RPC(portmap)服务请求服务端的NFS端口<br>
4.服务端的RPC(portmap)服务反馈NFS端口信息给客户端。<br>
5.客户端通过获取的NFS端口来建立和服务端的NFS连接并进行数据的传输。</p>
<figure><img src="https://img-blog.csdnimg.cn/img_convert/5096889802dbbaec342bca059d2d9934.png" alt="image-20240514135352731" tabindex="0" loading="lazy"><figcaption>image-20240514135352731</figcaption></figure>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 挂载原理</label></li>
</ul>
<blockquote>
<p>  当我们在NFS服务器设置好一个共享目录/opt 后，其他人是有权访问/opt这个共享目录的，NFS客户端就可以将这个目录挂载到自己文件系统的某个挂载点（这个挂载点可以自己定义），路径不同也可以；如下图客户端A与客户端B挂载的目录就不相同。并且挂载好后我们在本地能够看到服务端/opt下的所有数据。</p>
</blockquote>
<figure><img src="https://img-blog.csdnimg.cn/img_convert/8195a06250634617fe8c228121bb9599.png" alt="image-20240514135433772" tabindex="0" loading="lazy"><figcaption>image-20240514135433772</figcaption></figure>
<h1 id="二、准备工作" tabindex="-1"><a class="header-anchor" href="#二、准备工作" aria-hidden="true">#</a> 二、准备工作</h1>
<h2 id="_2-1-服务器信息" tabindex="-1"><a class="header-anchor" href="#_2-1-服务器信息" aria-hidden="true">#</a> 2.1 服务器信息</h2>
<table>
<thead>
<tr>
<th style="text-align:center">主机</th>
<th style="text-align:center">IP</th>
<th style="text-align:center">服务</th>
<th style="text-align:center">端口</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">服务端</td>
<td style="text-align:center">172.16.11.201</td>
<td style="text-align:center">nfs、rpc</td>
<td style="text-align:center">2049、111</td>
</tr>
<tr>
<td style="text-align:center">客户端</td>
<td style="text-align:center">172.16.11.202</td>
<td style="text-align:center">nfs、rpc</td>
<td style="text-align:center">2049、111</td>
</tr>
</tbody>
</table>
<h2 id="_2-2-防火墙配置" tabindex="-1"><a class="header-anchor" href="#_2-2-防火墙配置" aria-hidden="true">#</a> 2.2 防火墙配置</h2>
<ul>
<li>关闭防火墙服务</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 关闭防火墙</span>
systemctl stop firewalld
<span class="token comment"># 禁止防火墙开机自启</span>
systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>如果是必须要开启防火墙，可以使用两种方法，开端口或服务</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 开启nfs和rpc服务</span>
firewall-cmd <span class="token parameter variable">--permanent</span> --add-service<span class="token operator">=</span>nfs
firewall-cmd <span class="token parameter variable">--permanent</span> --add-service<span class="token operator">=</span>rpc-bind
<span class="token comment"># 重载防火墙规则</span>
firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 放行端口</span>
<span class="token comment"># nfs端口为：2049、rpc端口为：111</span>
firewall-cmd <span class="token parameter variable">--permanent</span> --add-port<span class="token operator">=</span><span class="token number">2049</span>/tcp
firewall-cmd <span class="token parameter variable">--permanent</span> --add-port<span class="token operator">=</span><span class="token number">111</span>/tcp
firewall-cmd <span class="token parameter variable">--permanent</span> --add-port<span class="token operator">=</span><span class="token number">111</span>/udp
<span class="token comment"># 重载防火墙规则</span>
firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>如果使用的是<code v-pre>iptables</code>防火墙，可以使用以下命令：</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">2049</span> <span class="token parameter variable">-j</span> ACCEPT
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">111</span> <span class="token parameter variable">-j</span> ACCEPT
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> udp <span class="token parameter variable">--dport</span> <span class="token number">111</span> <span class="token parameter variable">-j</span> ACCEPT
iptables-save <span class="token operator">></span> /etc/sysconfig/iptables
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3-selinux沙盒" tabindex="-1"><a class="header-anchor" href="#_2-3-selinux沙盒" aria-hidden="true">#</a> 2.3 selinux沙盒</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 临时关闭</span>
setenforce <span class="token number">0</span>

<span class="token comment"># 永久关闭</span>
<span class="token function">vim</span> /etc/selinux/config

<span class="token comment"># 将selinux=修改为disabled</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/img_convert/60282a4a5be585b5ba12b2acf93eaf1a.png" alt="image-20240514154415251" tabindex="0" loading="lazy"><figcaption>image-20240514154415251</figcaption></figure>
<font color=red>修改配置文件永久生效要重启服务器；</font><h1 id="三、部署-nfs-和-rpc-服务" tabindex="-1"><a class="header-anchor" href="#三、部署-nfs-和-rpc-服务" aria-hidden="true">#</a> 三、部署 NFS 和 RPC 服务</h1>
<p>两台都安装</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> nfs-utils rpcbind

<span class="token comment"># 启动并设置开机自启</span>
systemctl start rpcbind
systemctl start nfs-server
systemctl <span class="token builtin class-name">enable</span> rpcbind
systemctl <span class="token builtin class-name">enable</span> nfs-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看服务状态</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl status nfs
systemctl status rpcbind
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/img_convert/74f79f8f25503df8ad4f026f1b1c45ec.png" alt="image-20240514144829522" tabindex="0" loading="lazy"><figcaption>image-20240514144829522</figcaption></figure>
<h1 id="四、配置共享目录" tabindex="-1"><a class="header-anchor" href="#四、配置共享目录" aria-hidden="true">#</a> 四、配置共享目录</h1>
<p>①、首先，在<font color=gree>服务端</font>需要确认好要挂载的共享目录；这里我们要挂载的共享目录为：<code v-pre>/data/test/</code>，就需要先创建此目录</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 服务端</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>②、然后，需要确认好共享目录要挂载到<font color=blue>客户端</font>的哪个目录上，这里就同目录吧；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 客户端</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>③、配置<font color=gree>服务端</font>NFS配置文件</p>
<p>NFS配置文件格式：<code v-pre>共享目录 [客户端1(参数)] [客户端2（参数）]  </code></p>
<blockquote>
<p>共享目录：NFS服务器需要共享的实际路径（绝对路径）；<br>
客户端：可以访问共享目录的服务器地址或网段。</p>
</blockquote>
<ul>
<li>客户端常用形式：</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:left">客户端</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">172.16.11.202</td>
<td>指定IP地址的主机</td>
</tr>
<tr>
<td style="text-align:left">172.16.10.1/24</td>
<td>指定子网的所有主机</td>
</tr>
<tr>
<td style="text-align:left">172.16.10.*</td>
<td>指定子网的所有主机</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://www.xxx.com" target="_blank" rel="noopener noreferrer">www.xxx.com<ExternalLinkIcon/></a></td>
<td>指定域名的主机</td>
</tr>
<tr>
<td style="text-align:left">*.xxx.com</td>
<td>指定域中的所有主机</td>
</tr>
<tr>
<td style="text-align:left">*</td>
<td>所有主机</td>
</tr>
</tbody>
</table>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> /etc/exports

/data/test *<span class="token punctuation">(</span>rw,sync,no_root_squash<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解析：</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>参数解析</th>
</tr>
</thead>
<tbody>
<tr>
<td>/data/test</td>
<td>要共享的目录</td>
</tr>
<tr>
<td>*</td>
<td>要共享给谁，可以是网段，可以是ip，*代表是所有都可以共享</td>
</tr>
<tr>
<td>----括号内，NFS访问权限参数----</td>
<td>---------------括号内，NFS访问权限参数---------------</td>
</tr>
<tr>
<td>ro</td>
<td>只读</td>
</tr>
<tr>
<td>rw</td>
<td>读写</td>
</tr>
<tr>
<td>sync</td>
<td>同时将数据写入到内存与硬盘中，保证不丢失数据</td>
</tr>
<tr>
<td>async</td>
<td>优先将数据保存到内存，然后再写入硬盘；效率更高，但可能会丢失数据</td>
</tr>
<tr>
<td>root_squash</td>
<td>当NFS客户端以root管理员访问时，映射为NFS服务器的匿名用户</td>
</tr>
<tr>
<td>no_root_squash</td>
<td>当NFS客户端以root管理员访问时，映射为NFS服务器的root管理员</td>
</tr>
<tr>
<td>all_squash</td>
<td>无论NFS客户端使用什么账户访问，均映射为NFS服务器的匿名用户</td>
</tr>
<tr>
<td>no_all_squash</td>
<td>保留共享文件的UID和GID（默认）</td>
</tr>
</tbody>
</table>
<p>④、重启<font color=gree>服务端</font>NFS和RPC服务</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl restart nfs rpcbind
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>⑤、在<font color=blue>客户端</font>查看NFS服务共享信息</p>
<p>showmount [选项] (参数/服务端IP)</p>
<blockquote>
<p>-d：仅显示已被NFS客户端加载的共享目录；<br>
-e：显示NFS服务器上所有的共享目录。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># showmount -e 172.16.11.201</span>
Export list <span class="token keyword">for</span> <span class="token number">172.16</span>.11.201:
/data/test *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="五、挂载共享目录及配置永久挂载" tabindex="-1"><a class="header-anchor" href="#五、挂载共享目录及配置永久挂载" aria-hidden="true">#</a> 五、挂载共享目录及配置永久挂载</h1>
<font color=red>注意：</font><blockquote>
<p>1、<strong>挂载目录<font color=gree>服务端</font>的数据会覆盖<font color=blue>客户端</font>的数据；</strong></p>
<p>1、<strong>挂载目录<font color=gree>服务端</font>的数据会覆盖<font color=blue>客户端</font>的数据；</strong></p>
<p>1、<strong>挂载目录<font color=gree>服务端</font>的数据会覆盖<font color=blue>客户端</font>的数据；</strong></p>
<p>​      <strong>执行<code v-pre>mount</code>挂载的为<font color=blue>客户端</font>；</strong></p>
<hr>
<p>2、如果卸载挂载，提示：设备正忙（umount.nfs4: /data/test: device is busy），可以使用<code v-pre>umount -l /data/test</code>，不过存在一定风险，容易丢失数据</p>
</blockquote>
<ul>
<li>临时挂载</li>
</ul>
<p>在<font color=blue>客户端</font>执行挂载目录命令</p>
<p>mount -t <font color=red>指定挂载的文件类型</font> <font color=gree>nfs服务端的IP</font>:<font color=orange>服务端要共享的路径目录</font> <font color=blue>要挂载到本机的路径目录</font></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mount</span> <span class="token parameter variable">-t</span> nfs <span class="token number">172.16</span>.11.201:/data/test /data/test/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果遇到以下报错，有可能是：目录权限问题、服务端配置文件ip范围写的有问题、防火墙、selinux问题；</p>
<blockquote>
<p>mount.nfs: access denied by server while mounting 172.16.11.201:/data/test</p>
</blockquote>
<ul>
<li>永久挂载</li>
</ul>
<p>这样只是临时挂载，重启服务器之后就会消息，所以可以配置永久挂载，在<font color=blue>客户端</font>上；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> /etc/fstab

<span class="token number">172.16</span>.11.201:/data/test /data/test nfs defaults <span class="token number">0</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存退出之后，重启服务器可以进行测试，一旦写错，重启服务器将造成启动不了服务器，所以要谨慎；</p>
<hr>
<ul>
<li>卸载挂载（<font color=blue>客户端</font>）</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">umount</span> 挂载点

举例：
<span class="token function">umount</span> /data/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<blockquote>
<p>数据测试的话可自行测试；</p>
</blockquote>
</div></template>


