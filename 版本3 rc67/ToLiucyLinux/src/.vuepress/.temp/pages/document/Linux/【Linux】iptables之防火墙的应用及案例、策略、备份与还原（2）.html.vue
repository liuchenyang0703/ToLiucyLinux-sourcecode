<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180922057.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="一、案例——基于-ip-和端口的防火墙控制" tabindex="-1"><a class="header-anchor" href="#一、案例——基于-ip-和端口的防火墙控制"><span>一、案例——基于 IP 和端口的防火墙控制</span></a></h2>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180933936.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>实验环境：为网关、Web 服务器配置防火墙规则<br>
需求描述：<br>
1、为网站服务器编写入站规则<br>
  （1）允许接受响应本机 ping 测试请求的各种 ICMP 数据包<br>
  （2）允许访问本机中位于 80 端口的Web 服务，禁止访问其他端口的 TCP 请求<br>
  （3）允许发往本机以建立连接或与已有连接相关的各种 TCP 数据包<br>
  （4）禁止其他任何形式的入站访问数据</p>
</blockquote>
<p><strong>搭建实验环境，结果如下：</strong></p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180933887.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180933718.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180933669.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180933805.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180933110.png" alt="" loading="lazy"></p>
<p>为网站服务器编写入站规则<br>
允许接受响应本机 ping 测试请求的各种 ICMP 数据包</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180933229.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180933550.png" alt="" loading="lazy"></p>
<p>禁止其他任何形式的入站访问数据</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180932138.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>内网服务器 ping 网关测试：</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180932696.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>网关 ping 内网服务器测试：</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180932844.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>允许访问本机中位于 80 端口的 Web 服务，禁止访问其他端口的 TCP 请求</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180932617.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>允许发往本机以建立连接或与已有连接相关的各种 TCP  数据包</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180932413.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>保存 iptables 设置</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180932289.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180932607.png" alt="" loading="lazy"></p>
<p>测试</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180932675.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180932278.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180932005.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180932521.png" alt="" loading="lazy"></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@iptables~]# elinks 192.168.1.5</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180932825.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180932036.png" alt="" loading="lazy"></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@iptables~]# ftp 192.168.1.5</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ftp:connect:连接超时</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>2、为网关服务器编写转发规则<br>
  （1）允许局域网中的主机访问 Internet 中是 Web、FTP、DNS、邮件服务<br>
  （2）禁止局域网中的主机访问 <a href="http://web.qq.com" target="_blank" rel="noopener noreferrer">web.qq.com</a>、<a href="http://w.qq.com" target="_blank" rel="noopener noreferrer">w.qq.com</a>、<a href="http://im.qq.com" target="_blank" rel="noopener noreferrer">im.qq.com</a> 等网站，以防止通过 WebQQ 的方式进行在线聊天</p>
</blockquote>
<p><strong>允许局域网中的主机访问Internet  中是 Web、FTP、DNS、邮件服务</strong></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180932015.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><a href="http://xn--web-u68doc253fghhnvxqrin42akjhjys981b213a.qq.com" target="_blank" rel="noopener noreferrer">禁止局域网中的主机访问web.qq.com</a>、<a href="http://w.qq.com" target="_blank" rel="noopener noreferrer">w.qq.com</a>、<a href="http://im.qq.com" target="_blank" rel="noopener noreferrer">im.qq.com</a>   等网站</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180931733.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180931012.png" alt="" loading="lazy"></p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180931001.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180931116.png" alt="" loading="lazy"></p>
<p>保存 iptables 规则配置</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180931339.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="二、snat-策略" tabindex="-1"><a class="header-anchor" href="#二、snat-策略"><span>二、SNAT 策略</span></a></h2>
<h3 id="_1、作用" tabindex="-1"><a class="header-anchor" href="#_1、作用"><span>1、作用</span></a></h3>
<p>作用：局域网主机共享单个公网 IP 地址接入 Internet</p>
<h3 id="_2、snat-策略的原理" tabindex="-1"><a class="header-anchor" href="#_2、snat-策略的原理"><span>2、SNAT 策略的原理</span></a></h3>
<p>  源地址转换，Source Network Address Translation<br>
  修改数据包的源地址</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180931117.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_3、企业共享上网案例" tabindex="-1"><a class="header-anchor" href="#_3、企业共享上网案例"><span>3、企业共享上网案例</span></a></h3>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180931043.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>前提条件：<br>
  局域网各主机正确设置 IP 地址/子网掩码<br>
  局域网各主机正确设置默认网关地址<br>
  Linux 网关支持 IP 路由转发</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180931766.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180930453.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/203fe1b17f0d4d90b14d0e6c69bfb346.png#pic_center" alt="" loading="lazy"></p>
<h4 id="_3-1、固定的外网-ip-地址" tabindex="-1"><a class="header-anchor" href="#_3-1、固定的外网-ip-地址"><span>3.1、固定的外网 IP 地址</span></a></h4>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180930207.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180930216.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180930695.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180930370.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180930207.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180930948.png" alt="" loading="lazy"></p>
<h4 id="_3-2、非固定外网-ip-地址或-adsl" tabindex="-1"><a class="header-anchor" href="#_3-2、非固定外网-ip-地址或-adsl"><span>3.2、非固定外网 IP 地址或 ADSL</span></a></h4>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180930709.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="三、dnat-策略" tabindex="-1"><a class="header-anchor" href="#三、dnat-策略"><span>三、DNAT 策略</span></a></h2>
<h3 id="_1、dnat-原理" tabindex="-1"><a class="header-anchor" href="#_1、dnat-原理"><span>1、DNAT 原理</span></a></h3>
<p>  在 Internet 环境中，通过网关服务器中正确设置 DNAT 策略可实现企业所注册的网站或域名必须对应公网 IP 地址。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180929574.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>前提条件<br>
  局域网的 Web 服务器能够访问 Internet<br>
  网关的外网 IP 地址有正确的 DNS 解析记录<br>
  Linux 网关支持 IP 路由转发</p>
<h4 id="_1-1、dnat-转发规则-1-发内网-web-服务" tabindex="-1"><a class="header-anchor" href="#_1-1、dnat-转发规则-1-发内网-web-服务"><span>1.1、DNAT 转发规则 1：发内网 Web 服务</span></a></h4>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180929930.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180929271.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180929338.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180929438.png" alt="" loading="lazy"></p>
<h4 id="_1-2、dnat-转换规则-2-发布时修改目标端口" tabindex="-1"><a class="header-anchor" href="#_1-2、dnat-转换规则-2-发布时修改目标端口"><span>1.2、DNAT 转换规则 2：发布时修改目标端口</span></a></h4>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180929002.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180929322.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180929014.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180929994.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180929749.png" alt="" loading="lazy"></p>
<h2 id="四、iptables-防火墙规则的备份与还原" tabindex="-1"><a class="header-anchor" href="#四、iptables-防火墙规则的备份与还原"><span>四、iptables 防火墙规则的备份与还原</span></a></h2>
<blockquote>
<p>  设置完防火墙规则后，可备份规则到文件中，以便日后进行还原，或以备份规则为依据编写防火墙脚本</p>
</blockquote>
<font color=red> &gt 为导出	&emsp;&emsp;iptables-save<br>
				&lt 为导入	&emsp;&emsp;iptables-restore</font>
<h3 id="_1、导出-备份-防火墙规则" tabindex="-1"><a class="header-anchor" href="#_1、导出-备份-防火墙规则"><span>1、导出（备份）防火墙规则</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">iptables-save</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 工具</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong><font color=teal>语法格式：</font></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">iptables-save</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> > </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">要导出的路径</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong><font color=teal>实例：</font></strong></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180929106.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_2、导入-还原-防火墙规则" tabindex="-1"><a class="header-anchor" href="#_2、导入-还原-防火墙规则"><span>2、导入（还原）防火墙规则</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">iptables-restore</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 工具</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong><font color=teal>语法格式：</font></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">iptables-restore</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">要导入的路径</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong><font color=teal>实例：</font></strong></p>
<p>查看规则，现在是空的：</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180929806.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>导入规则：</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180929021.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>  重定向出的文件也可以是任意自定义的文件，若将规则保存到/etc/sysconfig/iptables 中，iptables 启动时自动还原规则。</p>
</blockquote>
<h2 id="五、企业防火墙脚本编程与规范【附加】" tabindex="-1"><a class="header-anchor" href="#五、企业防火墙脚本编程与规范【附加】"><span>五、企业防火墙脚本编程与规范【附加】</span></a></h2>
<h3 id="_1、-网关型-防火墙脚本" tabindex="-1"><a class="header-anchor" href="#_1、-网关型-防火墙脚本"><span>1、“网关型”防火墙脚本</span></a></h3>
<p>好的防火墙脚本要包括以下部分：</p>
<ul>
<li>定义基本变量，便于脚本的维护、重用</li>
<li>加载必要的内核模块，将频繁用到的模块载入到内核</li>
<li>调整/proc 参数，Linux 内核控制及调优</li>
<li>具体的防火墙规则，按表、链分别设置规则，包括默认策略</li>
</ul>
<h4 id="_1-1、定义基本变量便于脚本的维护、重用" tabindex="-1"><a class="header-anchor" href="#_1-1、定义基本变量便于脚本的维护、重用"><span>1.1、定义基本变量便于脚本的维护、重用</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">INET_IF</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">”eth0”</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">INET_IP</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">”192.168.1.108”</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">LAN_IF</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">”eth1”</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">LAN_IP</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">”192.168.100.1”</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">LAN_NET</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">”192.168.100.0/24”</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">LAN_WWW_IP</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">”192.168.100.100”</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">IPT</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">”/sbin/iptables”</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">MOD</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">”/sbin/modprobe”</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">CTL</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">”/sbin/sysctl”</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2、加载必要的内核模块将频繁用到的模块载入内核" tabindex="-1"><a class="header-anchor" href="#_1-2、加载必要的内核模块将频繁用到的模块载入内核"><span>1.2、加载必要的内核模块将频繁用到的模块载入内核</span></a></h4>
<blockquote>
<p>……<br>
$MOD ip_tables<br>
$MOD ip_conntrack<br>
$MOD ipt_REJECT<br>
$MOD ipt_LOG<br>
$MOD ipt_iprange<br>
$MOD xt_tcpudp<br>
$MOD xt_state<br>
$MOD xt_multiport<br>
$MOD xt_mac</p>
</blockquote>
<font color=red>\$MOD ip_nat_ftp	&emsp;&emsp;&emsp;&emsp;&emsp;支持 FTP 访问的地址转换
$MOD ip_conntrack_ftp	&emsp;&emsp;支持 FTP 访问的连接状态跟踪</font>
<h4 id="_1-3、调整-proc-参数linux-内核控制及调优" tabindex="-1"><a class="header-anchor" href="#_1-3、调整-proc-参数linux-内核控制及调优"><span>1.3、调整/proc 参数Linux 内核控制及调优</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">……</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$CTL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> -w net.ipv4.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">ip_forward</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">            开启路由转发功能</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$CTL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> -w net.ipv4.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">default_ttl</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">128</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">         默认生存周期</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$CTL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> -w net.ipv4.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">icmp_echo_ignore_all</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">            根本不要响应</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 包。请不要设置为缺省，它可能在你正被利用成为</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> DoS</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 攻击的跳板时可能有用</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$CTL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> -w net.ipv4.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">icmp_echo_ignore_broadcasts</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">     ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 子网的子网地址，所有的机器都应该予以回应。这可能成为非常好用的拒绝服务攻击工具。设置为</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 来忽略这些子网广播消息以下配置为优化</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> TCP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 响应能力</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$CTL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> -w net.ipv4.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">tcp_syncookies</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        tcp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> syncookie，默认关闭</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$CTL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> -w net.ipv4.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">tcp_syn_retries</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">3</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">       外向</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> syn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 握手重试次数，默认</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 4</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$CTL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> -w net.ipv4.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">tcp_synack_retries</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">3</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    syn-ack</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 握手状态重试次数，默认</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 5，遭受</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> syn-flood</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 攻击时改为</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 或</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$CTL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> -w net.ipv4.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">tcp_fin_timeout</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">60</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      默认</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 60，tcp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> fin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 状态超时时间</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$CTL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> -w net.ipv4.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">tcp_max_syn_backlog</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">3200</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">     syn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 队列，默认1024</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">，> </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1280</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 可能工作不稳定，需要修改内核源码参数</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">……</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4、具体的防火墙规则" tabindex="-1"><a class="header-anchor" href="#_1-4、具体的防火墙规则"><span>1.4、具体的防火墙规则</span></a></h4>
<p>按表、链分别设置规则，包括默认策略</p>
<blockquote>
<p><strong><font color=teal>清空原有规则：</font></strong><br>
<code v-pre>$IPT -t filter -X</code>	  <font color=red>删除 filter 表内的用户自定义的链</font><br>
<code v-pre>$IPT -t nat -X</code><br>
<code v-pre>$IPT -t filter -F</code><br>
<code v-pre>$IPT -t nat -F</code><br><br>
<strong><font color=teal>设置默认策略：</font></strong><br>
<code v-pre>$IPT -P INPUT DROP</code><br>
<code v-pre>$IPT -p FORWARD DROP</code><br>
<code v-pre>$IPT -P OUTPUT ACCEPT</code><br><br>
<strong><font color=teal>其他具体规则：</font></strong><br>
<code v-pre>$IPT -I INPUT -p tcp --dport 22 -j ACCEPT</code><br>
<code v-pre>$IPT -t nat -A POSTROUTING -s $LAN_NET -o $INET_IF -j SNAT --to-source $INET_IP</code><br>
<code v-pre>$IPT -t nat -A PREROUTING -i $INET_IF -d $INET_IP -p tcp --dport 80 -j DNAT --to-destination</code><br>
<code v-pre>$LAN_WWW_IP</code></p>
</blockquote>
<h4 id="_1-5、实例" tabindex="-1"><a class="header-anchor" href="#_1-5、实例"><span>1.5、实例：</span></a></h4>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180928744.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180928143.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180928481.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180928534.png" alt="" loading="lazy"></p>
<h3 id="_2、-主机型-防火墙脚本" tabindex="-1"><a class="header-anchor" href="#_2、-主机型-防火墙脚本"><span>2、“主机型”防火墙脚本</span></a></h3>
<ul>
<li>将 OUTPUT 链的默认策略设为允许，不添加其他规则</li>
<li>将 INPUT 链的默认策略设为拒绝，只放行对 Web 服务的访问，以及响应本机访问请求的数据包</li>
</ul>
<h4 id="_2-1、定义基本变量" tabindex="-1"><a class="header-anchor" href="#_2-1、定义基本变量"><span>2.1、定义基本变量</span></a></h4>
<p>IPT=”/sbin/iptables”<br>
……</p>
<h4 id="_2-2、调整-proc-参数" tabindex="-1"><a class="header-anchor" href="#_2-2、调整-proc-参数"><span>2.2、调整/proc 参数</span></a></h4>
<p>……</p>
<h4 id="_2-3、设置具体的防火墙规则" tabindex="-1"><a class="header-anchor" href="#_2-3、设置具体的防火墙规则"><span>2.3、设置具体的防火墙规则</span></a></h4>
<blockquote>
<p>  1&gt;删除自定义的链、清空已有规则<br>
$IPT -t filter -X<br>
$IPT -t filter -F<br><br>
  2&gt;定义默认策略<br>
$IPT -P INPUT DROP<br>
$IPT -p FORWARD DROP<br>
$IPT -P OUTPUT ACCEPT<br><br>
   3&gt;设置 filter 表中的各种规则<br>
$IPT -A INPUT -m multiport -p tcp --dport 22,80 -j ACCEPT<br>
$IPT -A INPUT -m state --state ESTABLISHED,RELATED,NEW -j ACCEPT</p>
</blockquote>
<h4 id="_2-4、实例" tabindex="-1"><a class="header-anchor" href="#_2-4、实例"><span>2.4、实例：</span></a></h4>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180927032.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180927549.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180927515.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180927496.png" alt="" loading="lazy"></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180927160.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章"><span>相关文章</span></a></h2>
<blockquote>
<p><a href="https://liucy.blog.csdn.net/article/details/125968904" target="_blank" rel="noopener noreferrer">🍎【Linux】iptables之防火墙概述及规则匹配+实例（1）</a></p>
<hr>
<p><a href="https://liucy.blog.csdn.net/article/details/126243322" target="_blank" rel="noopener noreferrer">🍌【Linux】iptables之防火墙的应用及案例、策略、备份与还原（2）</a></p>
<hr>
<p><a href="https://liucy.blog.csdn.net/article/details/126243544" target="_blank" rel="noopener noreferrer">🍐【Linux】firewall-cmd之防火墙简介及常用命令+实例</a></p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180927477.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


