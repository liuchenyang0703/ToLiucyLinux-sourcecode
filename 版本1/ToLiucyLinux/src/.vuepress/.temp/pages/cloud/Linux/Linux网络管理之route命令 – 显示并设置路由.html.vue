<template><div><p>@[toc]</p>
<p>route命令用来显示并设置linux内核中的网络路由表，route命令设置的路由主要是静态路由。要实现两个不同的子网之间的通信，需要一台连接两个网络的路由器，或者同时位于两个网络的网关来实现。</p>
<p>在linux系统中设置路由通常是为了解决以下问题：该linux系统在一个局域网中，局域网中有一个网关，能够让主机访问Internet，那么就需要将这台机器的ip地址设置为linux机器的默认路由。</p>
<p>要注意的是：直接在命令行下执行route命令来添加路由，不会永久保存。当网卡重启或者机器重启之后，该路由就失效了。可以在/etc/rc.local中添加route命令来保证该路由设置永久有效。</p>
<font color=red>route命令：</font><blockquote>
<p>route	路由管理命令</p>
</blockquote>
<h2 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式：</h2>
<blockquote>
<p>route [参数]</p>
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
<td>-A</td>
<td>设置地址类型（ 默认IPv4）</td>
</tr>
<tr>
<td>-C</td>
<td>打印linux核心的路由缓存</td>
</tr>
<tr>
<td>-v</td>
<td>详细信息模式</td>
</tr>
<tr>
<td>-n</td>
<td>不执行DNS反向查找，直接显示数字形式的ip地址</td>
</tr>
<tr>
<td>-e</td>
<td>netstat格式显示路由表</td>
</tr>
<tr>
<td>-net</td>
<td>到一个网络的路由表</td>
</tr>
<tr>
<td>-host</td>
<td>到一个主机的路由表</td>
</tr>
<tr>
<td>Add</td>
<td>增加指定的路由记录</td>
</tr>
<tr>
<td>Del</td>
<td>删除指定的路由记录</td>
</tr>
<tr>
<td>Target</td>
<td>目的网络或目的主机</td>
</tr>
<tr>
<td>gw</td>
<td>设置默认网关</td>
</tr>
<tr>
<td>mss</td>
<td>设置TCP的最大区块长度（MSS），单位MB</td>
</tr>
<tr>
<td>window</td>
<td>指定通过路由表的TCP连接的TCP窗口大小</td>
</tr>
<tr>
<td>dev</td>
<td>路由记录所表示的网络接口</td>
</tr>
</tbody>
</table>
<h2 id="参考实例" tabindex="-1"><a class="header-anchor" href="#参考实例" aria-hidden="true">#</a> 参考实例：</h2>
<p>显示当前路由：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># route</span>
Kernel IP routing table
Destination     Gateway      Genmask        Flags Metric Ref      Use Iface
default        _gateway      <span class="token number">0.0</span>.0.0         UG    <span class="token number">100</span>    <span class="token number">0</span>        <span class="token number">0</span> ens192
<span class="token number">192.168</span>.60.0    <span class="token number">0.0</span>.0.0      <span class="token number">255.255</span>.255.0   U     <span class="token number">100</span>    <span class="token number">0</span>        <span class="token number">0</span> ens192
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加一条路由记录：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># route add -net 192.168.60.11 netmask 192.168.60.1 dev ens192</span>

<span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># route add -net 192.168.3.0 netmask 255.255.255.0 ens33</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除路由记录：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment">#  route del -net 192.168.60.11 netmask 192.168.60.1 dev ens192 </span>

<span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># route del -net 192.168.3.0 netmask 255.255.255.0 ens33</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加和删除默认网关：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># route add default gw 192.168.60.1</span>
<span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># route del default gw 192.168.60.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/f58471169d8f419f8585079d5568d49d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>              <font size=5>总文章在：<a href="https://blog.csdn.net/liu_chen_yang/article/details/114872010?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Linux常用命令<ExternalLinkIcon/></a><br>
<img src="https://img-blog.csdnimg.cn/b6c5a9e4a5af4687a64e020cac19eb09.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="" loading="lazy"></p>
</div></template>


