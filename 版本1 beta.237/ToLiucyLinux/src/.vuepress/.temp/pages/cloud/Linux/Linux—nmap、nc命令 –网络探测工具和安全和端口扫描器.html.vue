<template><div><p>@[toc]</p>
<h1 id="nmap命令" tabindex="-1"><a class="header-anchor" href="#nmap命令" aria-hidden="true">#</a> nmap命令</h1>
<p>nmap (“Network Mapper(网络映射器)”) 是一款开放源代码的 网络探测和安全审核的工具。它的设计目标是快速地扫描大型网络，当然用它扫描单个 主机也没有问题。Nmap以新颖的方式使用原始IP报文来发现网络上有哪些主机，那些主机提供什么服务(应用程序名和版本)，那些服务运行在什么操作系统(包括版本信息)， 它们使用什么类型的报文过滤器/防火墙，以及一堆其它功能。虽然Nmap通常用于安全审核， 许多系统管理员和网络管理员也用它来做一些日常的工作，比如查看整个网络的信息，管理服务升级计划，以及监视主机和服务的运行。</p>
<p>除了所感兴趣的端口表，Nmap还能提供关于目标机的进一步信息，包括反向域名，操作系统猜测，设备类型，和MAC地址。</p>
<h2 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式：</h2>
<blockquote>
<p>nmap [参数]</p>
</blockquote>
<h2 id="常用参数" tabindex="-1"><a class="header-anchor" href="#常用参数" aria-hidden="true">#</a> 常用参数：</h2>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>--traceroute</td>
<td>扫描主机端口并跟踪路由</td>
</tr>
<tr>
<td>-p</td>
<td>扫描指定端口和端口范围</td>
</tr>
<tr>
<td>-sP</td>
<td>对目标主机进行ping扫描</td>
</tr>
<tr>
<td>-A</td>
<td>使用高级功能进行扫描</td>
</tr>
<tr>
<td>-PE</td>
<td>强制执行直接的ICMPping</td>
</tr>
<tr>
<td>-sV</td>
<td>探测服务版本信息</td>
</tr>
<tr>
<td>-d</td>
<td>增加调试信息地输出</td>
</tr>
<tr>
<td>-PU</td>
<td>发送udp ping</td>
</tr>
<tr>
<td>-ps</td>
<td>发送同步（SYN）报文</td>
</tr>
</tbody>
</table>
<h2 id="参考实例" tabindex="-1"><a class="header-anchor" href="#参考实例" aria-hidden="true">#</a> 参考实例：</h2>
<p>扫描主机并跟踪路由：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># nmap --traceroute www.linuxcool.com</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用-p参数探测80、443端口：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># nmap -p80,443 www.linuxcool.com</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>探测服务器的1-10000端口范围：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># nmap -p1-10000 www.linuxcool.com</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用-A参数进行高级扫描：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># nmap -A www.linuxcool.com</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="nc命令" tabindex="-1"><a class="header-anchor" href="#nc命令" aria-hidden="true">#</a> nc命令</h1>
<p>nc命令是一个功能打包的网络实用程序，它通过命令行在网络上读取和写入数据;nc是为NMAP项目编写的，是目前已分裂的netcat家族的顶峰,它被设计成一个可靠的后端工具，可以立即为其他用户提供网络连接应用程序和用户。nc不仅可以使用IPv4和IPv6，而且可以为用户提供无限的潜在用途。</p>
<p>在nc的大量功能中，有能力将nc链接在一起；TCP、UDP和到其他站点的SCTP端口；支持SSL；通过socks4或HTTP代理（带有可选代理）进行代理连接身份验证）;一些一般原则适用于大多数应用程序，因此使您能够立即向通常不支持它的软件添加网络支持。</p>
<h2 id="语法格式-1" tabindex="-1"><a class="header-anchor" href="#语法格式-1" aria-hidden="true">#</a> 语法格式：</h2>
<blockquote>
<p>nc [参数]</p>
</blockquote>
<h2 id="常用参数-1" tabindex="-1"><a class="header-anchor" href="#常用参数-1" aria-hidden="true">#</a> 常用参数：</h2>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>-l</td>
<td>使用监听模式，管控传入的资料</td>
</tr>
<tr>
<td>-p</td>
<td>设置本地主机使用的通信端口</td>
</tr>
<tr>
<td>-s</td>
<td>设置本地主机送出数据包的IP地址</td>
</tr>
<tr>
<td>-u</td>
<td>使用UDP传输协议</td>
</tr>
<tr>
<td>-v</td>
<td>显示指令执行过程</td>
</tr>
<tr>
<td>-w</td>
<td>设置等待连线的时间</td>
</tr>
<tr>
<td>-z</td>
<td>使用0输入/输出模式，只在扫描通信端口时使用</td>
</tr>
</tbody>
</table>
<h2 id="参考实例-1" tabindex="-1"><a class="header-anchor" href="#参考实例-1" aria-hidden="true">#</a> 参考实例：</h2>
<p>扫描80端口：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># nc -nvv 192.168.3.1 80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>扫描UDP端口：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># nc -u -z -w2 192.168.0.1 1-1000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>扫描TCP端口：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># nc -v -z -w2 192.168.0.3 1-100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/f58471169d8f419f8585079d5568d49d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>              <font size=5>总文章在：<a href="https://blog.csdn.net/liu_chen_yang/article/details/114872010?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Linux常用命令<ExternalLinkIcon/></a><br>
<img src="https://img-blog.csdnimg.cn/b6c5a9e4a5af4687a64e020cac19eb09.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="" loading="lazy"></p>
</div></template>


