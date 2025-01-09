<template><div><p><img src="https://img-blog.csdnimg.cn/536f1ae477b1482ab9eefa6647189da9.png#pic_center" alt="" loading="lazy"><br>
@[toc]<br>
<img src="https://img-blog.csdnimg.cn/5c188e0ff3f142468b6b5388bb4297fe.gif#pic_center" alt="" loading="lazy"></p>
<h1 id="一、案例——基于-ip-和端口的防火墙控制" tabindex="-1"><a class="header-anchor" href="#一、案例——基于-ip-和端口的防火墙控制" aria-hidden="true">#</a> 一、案例——基于 IP 和端口的防火墙控制</h1>
<figure><img src="https://img-blog.csdnimg.cn/919e310338c245afadeb96868557976b.png#pic_center" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
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
<p><img src="https://img-blog.csdnimg.cn/7e4d668f71cb4ed492e6374c30d5e661.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/8b0b11d01eaa47009fdd450ed5d1d69d.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/a0e1a928222f40339d75e7e13f705297.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/666ff70a83cd46e5b5d7c47b2d91918d.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/77dd9a1ba1314f2f804f34b0caf4a8b7.png" alt="" loading="lazy"></p>
<p>为网站服务器编写入站规则<br>
允许接受响应本机 ping 测试请求的各种 ICMP 数据包</p>
<p><img src="https://img-blog.csdnimg.cn/06b6c72f21f246ea8656451950a9a9a7.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/0b9c3f05ba82453a9965aa5da2820a84.png" alt="" loading="lazy"></p>
<p>禁止其他任何形式的入站访问数据</p>
<figure><img src="https://img-blog.csdnimg.cn/53cda5dbe4e04e37ab978570e6b39e1f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>内网服务器 ping 网关测试：</p>
<figure><img src="https://img-blog.csdnimg.cn/a974c11d9a3c4c3e8a2cb02aba41b9bf.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>网关 ping 内网服务器测试：</p>
<figure><img src="https://img-blog.csdnimg.cn/57a3de33da3b41b4a5fddc1b578f1793.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>允许访问本机中位于 80 端口的 Web 服务，禁止访问其他端口的 TCP 请求</p>
<figure><img src="https://img-blog.csdnimg.cn/061d8a5a8ed2486fa2b325421a57eaa1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>允许发往本机以建立连接或与已有连接相关的各种 TCP  数据包</p>
<figure><img src="https://img-blog.csdnimg.cn/85636036ce1440b790b140bd8fac7065.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>保存 iptables 设置</p>
<p><img src="https://img-blog.csdnimg.cn/f1785289d07345d2ac755e916964877d.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/5f18d3f2a7be443883f4f0a86be1fcc6.png" alt="" loading="lazy"></p>
<p>测试</p>
<p><img src="https://img-blog.csdnimg.cn/2d39375ba0d94112accf91ab71d23114.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/e7e54a80a62e4a56918f7185562ec1b1.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/64d732fdfc904299a3d14e6ecf518709.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/de8224e3a1cd486d920d065675732d38.png" alt="" loading="lazy"></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@iptables~<span class="token punctuation">]</span><span class="token comment"># elinks 192.168.1.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/56998a2000d8401d82775a353c108e0a.png#pic_center" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/b22a7b3cbe184248bc3fc60e1b7b8084.png" alt="" loading="lazy"></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@iptables~<span class="token punctuation">]</span><span class="token comment"># ftp 192.168.1.5</span>
ftp:connect:连接超时
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>2、为网关服务器编写转发规则<br>
  （1）允许局域网中的主机访问 Internet 中是 Web、FTP、DNS、邮件服务<br>
  （2）禁止局域网中的主机访问 <a href="http://web.qq.com" target="_blank" rel="noopener noreferrer">web.qq.com<ExternalLinkIcon/></a>、<a href="http://w.qq.com" target="_blank" rel="noopener noreferrer">w.qq.com<ExternalLinkIcon/></a>、<a href="http://im.qq.com" target="_blank" rel="noopener noreferrer">im.qq.com<ExternalLinkIcon/></a> 等网站，以防止通过 WebQQ 的方式进行在线聊天</p>
</blockquote>
<p><strong>允许局域网中的主机访问Internet  中是 Web、FTP、DNS、邮件服务</strong></p>
<figure><img src="https://img-blog.csdnimg.cn/65b51923db94450a8485f1426f4db8e2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><a href="http://xn--web-u68doc253fghhnvxqrin42akjhjys981b213a.qq.com" target="_blank" rel="noopener noreferrer">禁止局域网中的主机访问web.qq.com<ExternalLinkIcon/></a>、<a href="http://w.qq.com" target="_blank" rel="noopener noreferrer">w.qq.com<ExternalLinkIcon/></a>、<a href="http://im.qq.com" target="_blank" rel="noopener noreferrer">im.qq.com<ExternalLinkIcon/></a>   等网站</p>
<p><img src="https://img-blog.csdnimg.cn/a873a13dbd214a679f365fba71ab0e0f.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/d5fbe05c00ed46e78eca5156038ba493.png" alt="" loading="lazy"></p>
<p><img src="https://img-blog.csdnimg.cn/fb2b892d763246e9b86893a55e217276.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/3816d7c1a2f04ca1bc0de7a1aa50aaef.png" alt="" loading="lazy"></p>
<p>保存 iptables 规则配置</p>
<figure><img src="https://img-blog.csdnimg.cn/ee0976a3b5934fbba37006e69022fb7a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="二、snat-策略" tabindex="-1"><a class="header-anchor" href="#二、snat-策略" aria-hidden="true">#</a> 二、SNAT 策略</h1>
<h2 id="_1、作用" tabindex="-1"><a class="header-anchor" href="#_1、作用" aria-hidden="true">#</a> 1、作用</h2>
<p>作用：局域网主机共享单个公网 IP 地址接入 Internet</p>
<h2 id="_2、snat-策略的原理" tabindex="-1"><a class="header-anchor" href="#_2、snat-策略的原理" aria-hidden="true">#</a> 2、SNAT 策略的原理</h2>
<p>  源地址转换，Source Network Address Translation<br>
  修改数据包的源地址</p>
<figure><img src="https://img-blog.csdnimg.cn/1987668b68294178b37257fe9cb78ee1.png#pic_center" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_3、企业共享上网案例" tabindex="-1"><a class="header-anchor" href="#_3、企业共享上网案例" aria-hidden="true">#</a> 3、企业共享上网案例</h2>
<figure><img src="https://img-blog.csdnimg.cn/e84ae707163c417b9d7941d09e7ef27e.png#pic_center" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>前提条件：<br>
  局域网各主机正确设置 IP 地址/子网掩码<br>
  局域网各主机正确设置默认网关地址<br>
  Linux 网关支持 IP 路由转发</p>
<figure><img src="https://img-blog.csdnimg.cn/44e3167755b746d3b56ad10e32b3e66f.png#pic_center" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><img src="https://img-blog.csdnimg.cn/6cbfa39511be46b99f357b9adfa6b20a.png#pic_center" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/203fe1b17f0d4d90b14d0e6c69bfb346.png#pic_center" alt="" loading="lazy"></p>
<h3 id="_3-1、固定的外网-ip-地址" tabindex="-1"><a class="header-anchor" href="#_3-1、固定的外网-ip-地址" aria-hidden="true">#</a> 3.1、固定的外网 IP 地址</h3>
<p><img src="https://img-blog.csdnimg.cn/51258c4cccf94ff7be62c48dc483626b.png#pic_center" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/69624866c20244908cf6ffe939cdf351.png#pic_center" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/0ae42cf178de488e9e786acca5ff0a09.png#pic_center" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/d21e9e80f85b48098731da3ae3ac56e1.png#pic_center" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/35c1df649f8a4373bd4fb491f3f0aace.png#pic_center" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/1d4aa4e3b6f24a17aec52813c662a16c.png#pic_center" alt="" loading="lazy"></p>
<h3 id="_3-2、非固定外网-ip-地址或-adsl" tabindex="-1"><a class="header-anchor" href="#_3-2、非固定外网-ip-地址或-adsl" aria-hidden="true">#</a> 3.2、非固定外网 IP 地址或 ADSL</h3>
<figure><img src="https://img-blog.csdnimg.cn/695352b7866342c285d9636f9e647023.png#pic_center" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="三、dnat-策略" tabindex="-1"><a class="header-anchor" href="#三、dnat-策略" aria-hidden="true">#</a> 三、DNAT 策略</h1>
<h2 id="_1、dnat-原理" tabindex="-1"><a class="header-anchor" href="#_1、dnat-原理" aria-hidden="true">#</a> 1、DNAT 原理</h2>
<p>  在 Internet 环境中，通过网关服务器中正确设置 DNAT 策略可实现企业所注册的网站或域名必须对应公网 IP 地址。</p>
<figure><img src="https://img-blog.csdnimg.cn/102e064060004e6b862b62edfe864087.png#pic_center" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>前提条件<br>
  局域网的 Web 服务器能够访问 Internet<br>
  网关的外网 IP 地址有正确的 DNS 解析记录<br>
  Linux 网关支持 IP 路由转发</p>
<h3 id="_1-1、dnat-转发规则-1-发内网-web-服务" tabindex="-1"><a class="header-anchor" href="#_1-1、dnat-转发规则-1-发内网-web-服务" aria-hidden="true">#</a> 1.1、DNAT 转发规则 1：发内网 Web 服务</h3>
<p><img src="https://img-blog.csdnimg.cn/0c2632b56dd243f19fe9080483b48095.png#pic_center" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/9598c4b4f1ac4668849761a27da3499f.png#pic_center" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/74e690cb07614552972952036e25defc.png#pic_center" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/1d4aa4e3b6f24a17aec52813c662a16c.png#pic_center" alt="" loading="lazy"></p>
<h3 id="_1-2、dnat-转换规则-2-发布时修改目标端口" tabindex="-1"><a class="header-anchor" href="#_1-2、dnat-转换规则-2-发布时修改目标端口" aria-hidden="true">#</a> 1.2、DNAT 转换规则 2：发布时修改目标端口</h3>
<p><img src="https://img-blog.csdnimg.cn/4b5203339fd1440aa3741032098c19f9.png#pic_center" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/4a796e703338490482136bfd4961af0c.png#pic_center" alt="" loading="lazy"><img src="https://img-blog.csdnimg.cn/f86e796a961149b591132bfdee634181.png#pic_center" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/693150335fd94bda9edbfc693a7cb2ea.png#pic_center" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/1d4aa4e3b6f24a17aec52813c662a16c.png#pic_center" alt="" loading="lazy"></p>
<h1 id="四、iptables-防火墙规则的备份与还原" tabindex="-1"><a class="header-anchor" href="#四、iptables-防火墙规则的备份与还原" aria-hidden="true">#</a> 四、iptables 防火墙规则的备份与还原</h1>
<blockquote>
<p>  设置完防火墙规则后，可备份规则到文件中，以便日后进行还原，或以备份规则为依据编写防火墙脚本</p>
</blockquote>
<font color=red>\> 为导出	&emsp;&emsp;iptables-save
<  为导入	&emsp;&emsp;iptables-restore</font>
<h2 id="_1、导出-备份-防火墙规则" tabindex="-1"><a class="header-anchor" href="#_1、导出-备份-防火墙规则" aria-hidden="true">#</a> 1、导出（备份）防火墙规则</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables-save 工具
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>语法格式：</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables-save <span class="token operator">></span> 要导出的路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>实例：</font></strong></p>
<figure><img src="https://img-blog.csdnimg.cn/b9d07d9c778a4495904dc25586b1e7dd.png#pic_center" alt="" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="_2、导入-还原-防火墙规则" tabindex="-1"><a class="header-anchor" href="#_2、导入-还原-防火墙规则" aria-hidden="true">#</a> 2、导入（还原）防火墙规则</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables-restore 工具
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>语法格式：</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables-restore <span class="token operator">&lt;</span> 要导入的路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>实例：</font></strong></p>
<p>查看规则，现在是空的：</p>
<figure><img src="https://img-blog.csdnimg.cn/26cdfdddd5b54eacb4df6b0f561631a0.png#pic_center" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>导入规则：</p>
<figure><img src="https://img-blog.csdnimg.cn/58acee795d5c451eb1c079f5c11e62e3.png#pic_center" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<blockquote>
<p>  重定向出的文件也可以是任意自定义的文件，若将规则保存到/etc/sysconfig/iptables 中，iptables 启动时自动还原规则。</p>
</blockquote>
<h1 id="五、企业防火墙脚本编程与规范【附加】" tabindex="-1"><a class="header-anchor" href="#五、企业防火墙脚本编程与规范【附加】" aria-hidden="true">#</a> 五、企业防火墙脚本编程与规范【附加】</h1>
<h2 id="_1、-网关型-防火墙脚本" tabindex="-1"><a class="header-anchor" href="#_1、-网关型-防火墙脚本" aria-hidden="true">#</a> 1、“网关型”防火墙脚本</h2>
<p>好的防火墙脚本要包括以下部分：</p>
<ul>
<li>定义基本变量，便于脚本的维护、重用</li>
<li>加载必要的内核模块，将频繁用到的模块载入到内核</li>
<li>调整/proc 参数，Linux 内核控制及调优</li>
<li>具体的防火墙规则，按表、链分别设置规则，包括默认策略</li>
</ul>
<h3 id="_1-1、定义基本变量便于脚本的维护、重用" tabindex="-1"><a class="header-anchor" href="#_1-1、定义基本变量便于脚本的维护、重用" aria-hidden="true">#</a> 1.1、定义基本变量便于脚本的维护、重用</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">INET_IF</span><span class="token operator">=</span>”eth0”
<span class="token assign-left variable">INET_IP</span><span class="token operator">=</span>”192.168.1.108”
<span class="token assign-left variable">LAN_IF</span><span class="token operator">=</span>”eth1”
<span class="token assign-left variable">LAN_IP</span><span class="token operator">=</span>”192.168.100.1”
<span class="token assign-left variable">LAN_NET</span><span class="token operator">=</span>”192.168.100.0/24”
<span class="token assign-left variable">LAN_WWW_IP</span><span class="token operator">=</span>”192.168.100.100”
<span class="token assign-left variable">IPT</span><span class="token operator">=</span>”/sbin/iptables”
<span class="token assign-left variable">MOD</span><span class="token operator">=</span>”/sbin/modprobe”
<span class="token assign-left variable">CTL</span><span class="token operator">=</span>”/sbin/sysctl”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2、加载必要的内核模块将频繁用到的模块载入内核" tabindex="-1"><a class="header-anchor" href="#_1-2、加载必要的内核模块将频繁用到的模块载入内核" aria-hidden="true">#</a> 1.2、加载必要的内核模块将频繁用到的模块载入内核</h3>
<blockquote>
<p>……<br>
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>M</mi><mi>O</mi><mi>D</mi><mi>i</mi><msub><mi>p</mi><mi>t</mi></msub><mi>a</mi><mi>b</mi><mi>l</mi><mi>e</mi><mi>s</mi></mrow><annotation encoding="application/x-tex">MOD ip_tables
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">MO</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mord mathnormal">i</span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord mathnormal">ab</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">es</span></span></span></span>MOD ip_conntrack<br>
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>M</mi><mi>O</mi><mi>D</mi><mi>i</mi><mi>p</mi><msub><mi>t</mi><mi>R</mi></msub><mi>E</mi><mi>J</mi><mi>E</mi><mi>C</mi><mi>T</mi></mrow><annotation encoding="application/x-tex">MOD ipt_REJECT
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">MO</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mord mathnormal">i</span><span class="mord mathnormal">p</span><span class="mord"><span class="mord mathnormal">t</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.00773em;">R</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mord mathnormal" style="margin-right:0.09618em;">J</span><span class="mord mathnormal" style="margin-right:0.13889em;">ECT</span></span></span></span>MOD ipt_LOG<br>
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>M</mi><mi>O</mi><mi>D</mi><mi>i</mi><mi>p</mi><msub><mi>t</mi><mi>i</mi></msub><mi>p</mi><mi>r</mi><mi>a</mi><mi>n</mi><mi>g</mi><mi>e</mi></mrow><annotation encoding="application/x-tex">MOD ipt_iprange
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">MO</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mord mathnormal">i</span><span class="mord mathnormal">p</span><span class="mord"><span class="mord mathnormal">t</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord mathnormal">p</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">an</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mord mathnormal">e</span></span></span></span>MOD xt_tcpudp<br>
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>M</mi><mi>O</mi><mi>D</mi><mi>x</mi><msub><mi>t</mi><mi>s</mi></msub><mi>t</mi><mi>a</mi><mi>t</mi><mi>e</mi></mrow><annotation encoding="application/x-tex">MOD xt_state
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">MO</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mord mathnormal">x</span><span class="mord"><span class="mord mathnormal">t</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord mathnormal">t</span><span class="mord mathnormal">a</span><span class="mord mathnormal">t</span><span class="mord mathnormal">e</span></span></span></span>MOD xt_multiport<br>
$MOD xt_mac</p>
</blockquote>
<font color=red>\$MOD ip_nat_ftp	&emsp;&emsp;&emsp;&emsp;&emsp;支持 FTP 访问的地址转换
$MOD ip_conntrack_ftp	&emsp;&emsp;支持 FTP 访问的连接状态跟踪</font>
<h3 id="_1-3、调整-proc-参数linux-内核控制及调优" tabindex="-1"><a class="header-anchor" href="#_1-3、调整-proc-参数linux-内核控制及调优" aria-hidden="true">#</a> 1.3、调整/proc 参数Linux 内核控制及调优</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>……
<span class="token variable">$CTL</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.ip_forward</span><span class="token operator">=</span><span class="token number">1</span>            开启路由转发功能
<span class="token variable">$CTL</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.default_ttl</span><span class="token operator">=</span><span class="token number">128</span>         默认生存周期
<span class="token variable">$CTL</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.icmp_echo_ignore_all</span><span class="token operator">=</span><span class="token number">1</span>            根本不要响应 <span class="token builtin class-name">echo</span> 包。请不要设置为缺省，它可能在你正被利用成为 DoS 攻击的跳板时可能有用
<span class="token variable">$CTL</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.icmp_echo_ignore_broadcasts</span><span class="token operator">=</span><span class="token number">1</span>     <span class="token function">ping</span> 子网的子网地址，所有的机器都应该予以回应。这可能成为非常好用的拒绝服务攻击工具。设置为 <span class="token number">1</span> 来忽略这些子网广播消息以下配置为优化 TCP 响应能力
<span class="token variable">$CTL</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.tcp_syncookies</span><span class="token operator">=</span><span class="token number">1</span>        tcp syncookie，默认关闭
<span class="token variable">$CTL</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.tcp_syn_retries</span><span class="token operator">=</span><span class="token number">3</span>       外向 syn 握手重试次数，默认 <span class="token number">4</span>
<span class="token variable">$CTL</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.tcp_synack_retries</span><span class="token operator">=</span><span class="token number">3</span>    syn-ack 握手状态重试次数，默认 <span class="token number">5</span>，遭受 syn-flood 攻击时改为 <span class="token number">1</span> 或 <span class="token number">2</span>
<span class="token variable">$CTL</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.tcp_fin_timeout</span><span class="token operator">=</span><span class="token number">60</span>      默认 <span class="token number">60</span>，tcp fin 状态超时时间
<span class="token variable">$CTL</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">net.ipv4.tcp_max_syn_backlog</span><span class="token operator">=</span><span class="token number">3200</span>     syn 队列，默认1024，<span class="token operator">></span> <span class="token number">1280</span> 可能工作不稳定，需要修改内核源码参数
……
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4、具体的防火墙规则" tabindex="-1"><a class="header-anchor" href="#_1-4、具体的防火墙规则" aria-hidden="true">#</a> 1.4、具体的防火墙规则</h3>
<p>按表、链分别设置规则，包括默认策略</p>
<blockquote>
<p><strong><font color=teal>清空原有规则：</font></strong><br>
<span class="katex-error" title="ParseError: KaTeX parse error: Expected &#x27;EOF&#x27;, got &#x27;&amp;&#x27; at position 18: …T -t filter -X	&amp;̲emsp;&amp;emsp;&lt;fon…" style="color:#cc0000">IPT -t filter -X	&amp;emsp;&amp;emsp;&lt;font color=red&gt;删除 filter 表内的用户自定义的链&lt;/font&gt;
</span>IPT -t nat -X<br>
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>I</mi><mi>P</mi><mi>T</mi><mo>−</mo><mi>t</mi><mi>f</mi><mi>i</mi><mi>l</mi><mi>t</mi><mi>e</mi><mi>r</mi><mo>−</mo><mi>F</mi></mrow><annotation encoding="application/x-tex">IPT -t filter -F
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="mord mathnormal" style="margin-right:0.13889em;">PT</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">t</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal">i</span><span class="mord mathnormal">lt</span><span class="mord mathnormal" style="margin-right:0.02778em;">er</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">F</span></span></span></span>IPT -t nat -F<br><br>
<strong><font color=teal>设置默认策略：</font></strong><br>
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>I</mi><mi>P</mi><mi>T</mi><mo>−</mo><mi>P</mi><mi>I</mi><mi>N</mi><mi>P</mi><mi>U</mi><mi>T</mi><mi>D</mi><mi>R</mi><mi>O</mi><mi>P</mi></mrow><annotation encoding="application/x-tex">IPT -P INPUT DROP
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="mord mathnormal" style="margin-right:0.13889em;">PT</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="mord mathnormal" style="margin-right:0.13889em;">NP</span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mord mathnormal" style="margin-right:0.13889em;">ROP</span></span></span></span>IPT -p FORWARD DROP<br>
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>I</mi><mi>P</mi><mi>T</mi><mo>−</mo><mi>P</mi><mi>O</mi><mi>U</mi><mi>T</mi><mi>P</mi><mi>U</mi><mi>T</mi><mi>A</mi><mi>C</mi><mi>C</mi><mi>E</mi><mi>P</mi><mi>T</mi><mo>&lt;</mo><mi>b</mi><mi>r</mi><mo>&gt;</mo><mo>∗</mo><mo>∗</mo><mo>&lt;</mo><mi>f</mi><mi>o</mi><mi>n</mi><mi>t</mi><mi>c</mi><mi>o</mi><mi>l</mi><mi>o</mi><mi>r</mi><mo>=</mo><mi>t</mi><mi>e</mi><mi>a</mi><mi>l</mi><mo>&gt;</mo><mtext>其他具体规则：</mtext><mo>&lt;</mo><mi mathvariant="normal">/</mi><mi>f</mi><mi>o</mi><mi>n</mi><mi>t</mi><mo>&gt;</mo><mo>∗</mo><mo>∗</mo></mrow><annotation encoding="application/x-tex">IPT -P OUTPUT ACCEPT&lt;br&gt;
**&lt;font color=teal&gt;其他具体规则：&lt;/font&gt;**
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="mord mathnormal" style="margin-right:0.13889em;">PT</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7224em;vertical-align:-0.0391em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">PO</span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span><span class="mord mathnormal" style="margin-right:0.13889em;">TP</span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.13889em;">CCEPT</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">b</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord">∗</span><span class="mord">∗</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal">o</span><span class="mord mathnormal">n</span><span class="mord mathnormal">t</span><span class="mord mathnormal">co</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal" style="margin-right:0.02778em;">or</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">t</span><span class="mord mathnormal">e</span><span class="mord mathnormal">a</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7224em;vertical-align:-0.0391em;"></span><span class="mord cjk_fallback">其他具体规则：</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">/</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal">o</span><span class="mord mathnormal">n</span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4653em;"></span><span class="mord">∗</span><span class="mord">∗</span></span></span></span>IPT -I INPUT -p tcp --dport 22 -j ACCEPT<br>
$IPT -t nat -A POSTROUTING -s $LAN_NET -o $INET_IF -j SNAT --to-source <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>I</mi><mi>N</mi><mi>E</mi><msub><mi>T</mi><mi>I</mi></msub><mi>P</mi></mrow><annotation encoding="application/x-tex">INET_IP
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="mord mathnormal" style="margin-right:0.05764em;">NE</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.07847em;">I</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span></span></span></span>IPT -t nat -A PREROUTING -i $INET_IF -d <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>I</mi><mi>N</mi><mi>E</mi><msub><mi>T</mi><mi>I</mi></msub><mi>P</mi><mo>−</mo><mi>p</mi><mi>t</mi><mi>c</mi><mi>p</mi><mo>−</mo><mo>−</mo><mi>d</mi><mi>p</mi><mi>o</mi><mi>r</mi><mi>t</mi><mn>80</mn><mo>−</mo><mi>j</mi><mi>D</mi><mi>N</mi><mi>A</mi><mi>T</mi><mo>−</mo><mo>−</mo><mi>t</mi><mi>o</mi><mo>−</mo><mi>d</mi><mi>e</mi><mi>s</mi><mi>t</mi><mi>i</mi><mi>n</mi><mi>a</mi><mi>t</mi><mi>i</mi><mi>o</mi><mi>n</mi></mrow><annotation encoding="application/x-tex">INET_IP -p tcp --dport 80 -j DNAT --to-destination
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="mord mathnormal" style="margin-right:0.05764em;">NE</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.07847em;">I</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8095em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">pt</span><span class="mord mathnormal">c</span><span class="mord mathnormal">p</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord">−</span><span class="mord mathnormal">d</span><span class="mord mathnormal">p</span><span class="mord mathnormal" style="margin-right:0.02778em;">or</span><span class="mord mathnormal">t</span><span class="mord">80</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6984em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord mathnormal">t</span><span class="mord mathnormal">o</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">d</span><span class="mord mathnormal">es</span><span class="mord mathnormal">t</span><span class="mord mathnormal">ina</span><span class="mord mathnormal">t</span><span class="mord mathnormal">i</span><span class="mord mathnormal">o</span><span class="mord mathnormal">n</span></span></span></span>LAN_WWW_IP</p>
</blockquote>
<h3 id="_1-5、实例" tabindex="-1"><a class="header-anchor" href="#_1-5、实例" aria-hidden="true">#</a> 1.5、实例：</h3>
<p><img src="https://img-blog.csdnimg.cn/3f84fc5d44984828a9526a3eb2caa8a4.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/4ed9f43990904730a702094e4138be5a.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/cf26d41f154947808c68ee2278dfa461.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/729811b135014954a6102cc34e3c1951.png" alt="在这里插入图片描述" loading="lazy"></p>
<h2 id="_2、-主机型-防火墙脚本" tabindex="-1"><a class="header-anchor" href="#_2、-主机型-防火墙脚本" aria-hidden="true">#</a> 2、“主机型”防火墙脚本</h2>
<ul>
<li>将 OUTPUT 链的默认策略设为允许，不添加其他规则</li>
<li>将 INPUT 链的默认策略设为拒绝，只放行对 Web 服务的访问，以及响应本机访问请求的数据包</li>
</ul>
<h3 id="_2-1、定义基本变量" tabindex="-1"><a class="header-anchor" href="#_2-1、定义基本变量" aria-hidden="true">#</a> 2.1、定义基本变量</h3>
<p>IPT=”/sbin/iptables”<br>
……</p>
<h3 id="_2-2、调整-proc-参数" tabindex="-1"><a class="header-anchor" href="#_2-2、调整-proc-参数" aria-hidden="true">#</a> 2.2、调整/proc 参数</h3>
<p>……</p>
<h3 id="_2-3、设置具体的防火墙规则" tabindex="-1"><a class="header-anchor" href="#_2-3、设置具体的防火墙规则" aria-hidden="true">#</a> 2.3、设置具体的防火墙规则</h3>
<blockquote>
<p>  1&gt;删除自定义的链、清空已有规则<br>
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>I</mi><mi>P</mi><mi>T</mi><mo>−</mo><mi>t</mi><mi>f</mi><mi>i</mi><mi>l</mi><mi>t</mi><mi>e</mi><mi>r</mi><mo>−</mo><mi>X</mi></mrow><annotation encoding="application/x-tex">IPT -t filter -X 
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="mord mathnormal" style="margin-right:0.13889em;">PT</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">t</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal">i</span><span class="mord mathnormal">lt</span><span class="mord mathnormal" style="margin-right:0.02778em;">er</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span></span></span>IPT -t filter -F<br><br>
  2&gt;定义默认策略<br>
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>I</mi><mi>P</mi><mi>T</mi><mo>−</mo><mi>P</mi><mi>I</mi><mi>N</mi><mi>P</mi><mi>U</mi><mi>T</mi><mi>D</mi><mi>R</mi><mi>O</mi><mi>P</mi></mrow><annotation encoding="application/x-tex">IPT -P INPUT DROP
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="mord mathnormal" style="margin-right:0.13889em;">PT</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="mord mathnormal" style="margin-right:0.13889em;">NP</span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mord mathnormal" style="margin-right:0.13889em;">ROP</span></span></span></span>IPT -p FORWARD DROP<br>
<span class="katex-error" title="ParseError: KaTeX parse error: Expected &#x27;EOF&#x27;, got &#x27;&amp;&#x27; at position 26: …PUT ACCEPT&lt;br&gt;
&amp;̲emsp;&amp;emsp; 3&gt;设…" style="color:#cc0000">IPT -P OUTPUT ACCEPT&lt;br&gt;
&amp;emsp;&amp;emsp; 3&gt;设置 filter 表中的各种规则
</span>IPT -A INPUT -m multiport -p tcp --dport 22,80 -j ACCEPT<br>
$IPT -A INPUT -m state --state ESTABLISHED,RELATED,NEW -j ACCEPT</p>
</blockquote>
<h3 id="_2-4、实例" tabindex="-1"><a class="header-anchor" href="#_2-4、实例" aria-hidden="true">#</a> 2.4、实例：</h3>
<p><img src="https://img-blog.csdnimg.cn/51cae961f3a94ebfa68d5ac482521123.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/0ccadc6b71644a51ba099519b92a1292.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/8c1835f7760e4e26bdc515d3ccdab40d.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/0f90ea8bfe9a4b249c39c0d6b9dde5db.png" alt="在这里插入图片描述" loading="lazy"></p>
<figure><img src="https://img-blog.csdnimg.cn/bcb3415a5a9d47ddb3ae365b021517a3.gif#pic_center" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章" aria-hidden="true">#</a> 相关文章</h1>
<blockquote>
<p><a href="https://liucy.blog.csdn.net/article/details/125968904" target="_blank" rel="noopener noreferrer">🍎【Linux】iptables之防火墙概述及规则匹配+实例（1）<ExternalLinkIcon/></a></p>
<hr>
<p><a href="https://liucy.blog.csdn.net/article/details/126243322" target="_blank" rel="noopener noreferrer">🍌【Linux】iptables之防火墙的应用及案例、策略、备份与还原（2）<ExternalLinkIcon/></a></p>
<hr>
<p><a href="https://liucy.blog.csdn.net/article/details/126243544" target="_blank" rel="noopener noreferrer">🍐【Linux】firewall-cmd之防火墙简介及常用命令+实例<ExternalLinkIcon/></a></p>
</blockquote>
<figure><img src="https://img-blog.csdnimg.cn/05ef3cff07b343fc851b9729d5f42749.gif#pic_center" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</div></template>


