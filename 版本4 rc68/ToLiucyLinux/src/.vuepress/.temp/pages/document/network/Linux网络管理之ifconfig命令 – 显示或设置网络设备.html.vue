<template><div><p>ifconfig命令的英文全称是“network interfaces configuring”，即用于配置和显示Linux内核中网络接口的网络参数。用ifconfig命令配置的网卡信息，在网卡重启后机器重启后，配置就不存在。要想将上述的配置信息永远的存的电脑里，那就要修改网卡的配置文件了。</p>
<p><strong><font color=red>ifconfig命令：</font></strong></p>
<blockquote>
<p>ifconfig	查看或管理网络信息<br>
ifconfig ens33	查看ens33信息<br>
ifconfig ens33 192.168.2.100/24</p>
</blockquote>
<h2 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式"><span>语法格式：</span></a></h2>
<blockquote>
<p>ifconfig [参数]</p>
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
<td>add&lt;地址&gt;</td>
<td>设置网络设备IPv6的IP地址</td>
</tr>
<tr>
<td>del&lt;地址&gt;</td>
<td>删除网络设备IPv6的IP地址</td>
</tr>
<tr>
<td>down</td>
<td>关闭指定的网络设备</td>
</tr>
<tr>
<td>up</td>
<td>启动指定的网络设备</td>
</tr>
<tr>
<td>IP地址</td>
<td>指定网络设备的IP地址</td>
</tr>
</tbody>
</table>
<h2 id="参考实例" tabindex="-1"><a class="header-anchor" href="#参考实例"><span>参考实例：</span></a></h2>
<p>显示网络设备信息：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# ifconfig</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">eth0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   Link</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> encap:Ethernet</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> HWaddr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 00:50:56:0A:0B:0C</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">       inet</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> addr:192.168.0.3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Bcast:192.168.0.255</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Mask:255.255.255.0</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">       inet6</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> addr:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> fe80::250:56ff:fe0a:b0c/64</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Scope:Link</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">     </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">       UP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> BROADCAST</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> RUNNING</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> MULTICAST</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> MTU:1500</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Metric:1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">       RX</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> packets:172220</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> errors:0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dropped:0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> overruns:0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> frame:0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">       TX</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> packets:132379</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> errors:0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dropped:0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> overruns:0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> carrier:0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">       collisions:0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> txqueuelen:1000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">       RX</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bytes:87101880</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (83.0 </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">MiB</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) TX bytes:41576123 (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">39.6</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> MiB</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">       Interrupt:185</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Base</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> address:0x2024</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">lo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    Link</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> encap:Local</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Loopback</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      inet</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> addr:127.0.0.1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Mask:255.0.0.0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      inet6</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> addr:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ::1/128</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Scope:Host</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      UP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> LOOPBACK</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> RUNNING</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> MTU:16436</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Metric:1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      RX</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> packets:2022</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> errors:0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dropped:0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> overruns:0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> frame:0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      TX</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> packets:2022</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> errors:0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dropped:0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> overruns:0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> carrier:0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      collisions:0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> txqueuelen:0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      RX</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bytes:2459063</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (2.3 </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">MiB</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      TX</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bytes:2459063</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (2.3 </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">MiB</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动关闭指定网卡：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# ifconfig eth0 down</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# ifconfig eth0 up</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>为网卡配置和删除IPv6地址：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# ifconfig eth0 add 33ffe:3240:800:1005::2/64</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# ifconfig eth0 del 33ffe:3240:800:1005::2/64</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>用ifconfig修改MAC地址：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# ifconfig eth0 down</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# ifconfig eth0 hw ether 00:AA:BB:CC:DD:EE</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# ifconfig eth0 up</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# ifconfig eth1 hw ether 00:1D:1C:1D:1E </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# ifconfig eth1 up</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置IP地址：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# ifconfig eth0 192.168.1.56 </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# ifconfig eth0 192.168.1.56 netmask 255.255.255.0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# ifconfig eth0 192.168.1.56 netmask 255.255.255.0 broadcast 192.168.1.255</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


