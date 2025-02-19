<template><div><p>route命令用来显示并设置linux内核中的网络路由表，route命令设置的路由主要是静态路由。要实现两个不同的子网之间的通信，需要一台连接两个网络的路由器，或者同时位于两个网络的网关来实现。</p>
<p>在linux系统中设置路由通常是为了解决以下问题：该linux系统在一个局域网中，局域网中有一个网关，能够让主机访问Internet，那么就需要将这台机器的ip地址设置为linux机器的默认路由。</p>
<p>要注意的是：直接在命令行下执行route命令来添加路由，不会永久保存。当网卡重启或者机器重启之后，该路由就失效了。可以在/etc/rc.local中添加route命令来保证该路由设置永久有效。</p>
<font color=red>route命令：</font><blockquote>
<p>route	路由管理命令</p>
</blockquote>
<h2 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式"><span>语法格式：</span></a></h2>
<blockquote>
<p>route [参数]</p>
</blockquote>
<h2 id="常用参数" tabindex="-1"><a class="header-anchor" href="#常用参数"><span>常用参数：</span></a></h2>
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
<h2 id="参考实例" tabindex="-1"><a class="header-anchor" href="#参考实例"><span>参考实例：</span></a></h2>
<p>显示当前路由：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# route</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Kernel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> IP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> routing</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> table</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Destination</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">     Gateway</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      Genmask</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        Flags</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Metric</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Ref</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      Use</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Iface</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">default</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        _gateway</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">      0.0.0.0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">         UG</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    100</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">        0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ens192</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">192.168.60.0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.0.0.0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">      255.255.255.0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   U</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">     100</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">        0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ens192</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加一条路由记录：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# route add -net 192.168.60.11 netmask 192.168.60.1 dev ens192</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# route add -net 192.168.3.0 netmask 255.255.255.0 ens33</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除路由记录：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]#  route del -net 192.168.60.11 netmask 192.168.60.1 dev ens192 </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# route del -net 192.168.3.0 netmask 255.255.255.0 ens33</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加和删除默认网关：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# route add default gw 192.168.60.1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# route del default gw 192.168.60.1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


