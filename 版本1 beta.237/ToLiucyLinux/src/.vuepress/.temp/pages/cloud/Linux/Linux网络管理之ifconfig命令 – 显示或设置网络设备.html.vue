<template><div><p>@[toc]</p>
<p>ifconfig命令的英文全称是“network interfaces configuring”，即用于配置和显示Linux内核中网络接口的网络参数。用ifconfig命令配置的网卡信息，在网卡重启后机器重启后，配置就不存在。要想将上述的配置信息永远的存的电脑里，那就要修改网卡的配置文件了。</p>
<p><strong><font color=red>ifconfig命令：</font></strong></p>
<blockquote>
<p>ifconfig	查看或管理网络信息<br>
ifconfig ens33	查看ens33信息<br>
ifconfig ens33 192.168.2.100/24</p>
</blockquote>
<h2 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式：</h2>
<blockquote>
<p>ifconfig [参数]</p>
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
<h2 id="参考实例" tabindex="-1"><a class="header-anchor" href="#参考实例" aria-hidden="true">#</a> 参考实例：</h2>
<p>显示网络设备信息：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># ifconfig</span>
eth0   Link encap:Ethernet HWaddr 00:50:56:0A:0B:0C       
       inet addr:192.168.0.3 Bcast:192.168.0.255 Mask:255.255.255.0
       inet6 addr: fe80::250:56ff:fe0a:b0c/64 Scope:Link     
       UP BROADCAST RUNNING MULTICAST MTU:1500 Metric:1      
       RX packets:172220 errors:0 dropped:0 overruns:0 frame:0      
       TX packets:132379 errors:0 dropped:0 overruns:0 carrier:0 
       collisions:0 txqueuelen:1000       
       RX bytes:87101880 <span class="token punctuation">(</span><span class="token number">83.0</span> MiB<span class="token punctuation">)</span> TX bytes:41576123 <span class="token punctuation">(</span><span class="token number">39.6</span> MiB<span class="token punctuation">)</span> 
       Interrupt:185 Base address:0x2024  
lo    Link encap:Local Loopback       
      inet addr:127.0.0.1 Mask:255.0.0.0      
      inet6 addr: ::1/128 Scope:Host      
      UP LOOPBACK RUNNING MTU:16436 Metric:1      
      RX packets:2022 errors:0 dropped:0 overruns:0 frame:0      
      TX packets:2022 errors:0 dropped:0 overruns:0 carrier:0   
      collisions:0 txqueuelen:0       
      RX bytes:2459063 <span class="token punctuation">(</span><span class="token number">2.3</span> MiB<span class="token punctuation">)</span> 
      TX bytes:2459063 <span class="token punctuation">(</span><span class="token number">2.3</span> MiB<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动关闭指定网卡：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># ifconfig eth0 down</span>
<span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># ifconfig eth0 up </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>为网卡配置和删除IPv6地址：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># ifconfig eth0 add 33ffe:3240:800:1005::2/64</span>
<span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># ifconfig eth0 del 33ffe:3240:800:1005::2/64</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>用ifconfig修改MAC地址：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># ifconfig eth0 down</span>
<span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># ifconfig eth0 hw ether 00:AA:BB:CC:DD:EE</span>
<span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># ifconfig eth0 up</span>
<span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># ifconfig eth1 hw ether 00:1D:1C:1D:1E </span>
<span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># ifconfig eth1 up</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置IP地址：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># ifconfig eth0 192.168.1.56 </span>
<span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># ifconfig eth0 192.168.1.56 netmask 255.255.255.0</span>
<span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># ifconfig eth0 192.168.1.56 netmask 255.255.255.0 broadcast 192.168.1.255</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/f58471169d8f419f8585079d5568d49d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>              <font size=5>总文章在：<a href="https://blog.csdn.net/liu_chen_yang/article/details/114872010?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Linux常用命令<ExternalLinkIcon/></a><br>
<img src="https://img-blog.csdnimg.cn/b6c5a9e4a5af4687a64e020cac19eb09.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="" loading="lazy"></p>
</div></template>


