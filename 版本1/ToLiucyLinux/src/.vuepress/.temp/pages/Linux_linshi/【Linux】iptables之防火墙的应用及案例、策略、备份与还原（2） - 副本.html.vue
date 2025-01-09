<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180922057.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="一、案例——基于-ip-和端口的防火墙控制" tabindex="-1"><a class="header-anchor" href="#一、案例——基于-ip-和端口的防火墙控制" aria-hidden="true">#</a> 一、案例——基于 IP 和端口的防火墙控制</h2>
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
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@iptables~<span class="token punctuation">]</span><span class="token comment"># elinks 192.168.1.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180932825.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180932036.png" alt="" loading="lazy"></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@iptables~<span class="token punctuation">]</span><span class="token comment"># ftp 192.168.1.5</span>
ftp:connect:连接超时
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>2、为网关服务器编写转发规则<br>
  （1）允许局域网中的主机访问 Internet 中是 Web、FTP、DNS、邮件服务<br>
  （2）禁止局域网中的主机访问 <a href="http://web.qq.com" target="_blank" rel="noopener noreferrer">web.qq.com<ExternalLinkIcon/></a>、<a href="http://w.qq.com" target="_blank" rel="noopener noreferrer">w.qq.com<ExternalLinkIcon/></a>、<a href="http://im.qq.com" target="_blank" rel="noopener noreferrer">im.qq.com<ExternalLinkIcon/></a> 等网站，以防止通过 WebQQ 的方式进行在线聊天</p>
</blockquote>
<p><strong>允许局域网中的主机访问Internet  中是 Web、FTP、DNS、邮件服务</strong></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180932015.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><a href="http://xn--web-u68doc253fghhnvxqrin42akjhjys981b213a.qq.com" target="_blank" rel="noopener noreferrer">禁止局域网中的主机访问web.qq.com<ExternalLinkIcon/></a>、<a href="http://w.qq.com" target="_blank" rel="noopener noreferrer">w.qq.com<ExternalLinkIcon/></a>、<a href="http://im.qq.com" target="_blank" rel="noopener noreferrer">im.qq.com<ExternalLinkIcon/></a>   等网站</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180931733.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180931012.png" alt="" loading="lazy"></p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180931001.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180931116.png" alt="" loading="lazy"></p>
<p>保存 iptables 规则配置</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180931339.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="二、snat-策略" tabindex="-1"><a class="header-anchor" href="#二、snat-策略" aria-hidden="true">#</a> 二、SNAT 策略</h2>
<h3 id="_1、作用" tabindex="-1"><a class="header-anchor" href="#_1、作用" aria-hidden="true">#</a> 1、作用</h3>
<p>作用：局域网主机共享单个公网 IP 地址接入 Internet</p>
<h3 id="_2、snat-策略的原理" tabindex="-1"><a class="header-anchor" href="#_2、snat-策略的原理" aria-hidden="true">#</a> 2、SNAT 策略的原理</h3>
<p>  源地址转换，Source Network Address Translation<br>
  修改数据包的源地址</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180931117.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_3、企业共享上网案例" tabindex="-1"><a class="header-anchor" href="#_3、企业共享上网案例" aria-hidden="true">#</a> 3、企业共享上网案例</h3>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180931043.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>前提条件：<br>
  局域网各主机正确设置 IP 地址/子网掩码<br>
  局域网各主机正确设置默认网关地址<br>
  Linux 网关支持 IP 路由转发</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180931766.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180930453.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/203fe1b17f0d4d90b14d0e6c69bfb346.png#pic_center" alt="" loading="lazy"></p>
<h4 id="_3-1、固定的外网-ip-地址" tabindex="-1"><a class="header-anchor" href="#_3-1、固定的外网-ip-地址" aria-hidden="true">#</a> 3.1、固定的外网 IP 地址</h4>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180930207.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180930216.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180930695.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180930370.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180930207.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180930948.png" alt="" loading="lazy"></p>
<h4 id="_3-2、非固定外网-ip-地址或-adsl" tabindex="-1"><a class="header-anchor" href="#_3-2、非固定外网-ip-地址或-adsl" aria-hidden="true">#</a> 3.2、非固定外网 IP 地址或 ADSL</h4>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180930709.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="三、dnat-策略" tabindex="-1"><a class="header-anchor" href="#三、dnat-策略" aria-hidden="true">#</a> 三、DNAT 策略</h2>
<h3 id="_1、dnat-原理" tabindex="-1"><a class="header-anchor" href="#_1、dnat-原理" aria-hidden="true">#</a> 1、DNAT 原理</h3>
<p>  在 Internet 环境中，通过网关服务器中正确设置 DNAT 策略可实现企业所注册的网站或域名必须对应公网 IP 地址。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180929574.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>前提条件<br>
  局域网的 Web 服务器能够访问 Internet<br>
  网关的外网 IP 地址有正确的 DNS 解析记录<br>
  Linux 网关支持 IP 路由转发</p>
<h4 id="_1-1、dnat-转发规则-1-发内网-web-服务" tabindex="-1"><a class="header-anchor" href="#_1-1、dnat-转发规则-1-发内网-web-服务" aria-hidden="true">#</a> 1.1、DNAT 转发规则 1：发内网 Web 服务</h4>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180929930.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180929271.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180929338.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180929438.png" alt="" loading="lazy"></p>
<h4 id="_1-2、dnat-转换规则-2-发布时修改目标端口" tabindex="-1"><a class="header-anchor" href="#_1-2、dnat-转换规则-2-发布时修改目标端口" aria-hidden="true">#</a> 1.2、DNAT 转换规则 2：发布时修改目标端口</h4>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180929002.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180929322.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180929014.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180929994.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180929749.png" alt="" loading="lazy"></p>
<h2 id="四、iptables-防火墙规则的备份与还原" tabindex="-1"><a class="header-anchor" href="#四、iptables-防火墙规则的备份与还原" aria-hidden="true">#</a> 四、iptables 防火墙规则的备份与还原</h2>
<blockquote>
<p>  设置完防火墙规则后，可备份规则到文件中，以便日后进行还原，或以备份规则为依据编写防火墙脚本</p>
</blockquote>
<font color=red> &gt 为导出	&emsp;&emsp;iptables-save<br>
				&lt 为导入	&emsp;&emsp;iptables-restore</font></div></template>


