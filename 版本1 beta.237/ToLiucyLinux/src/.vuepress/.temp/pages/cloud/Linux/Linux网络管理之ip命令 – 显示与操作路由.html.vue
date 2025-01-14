<template><div><p>@[toc]</p>
<p>ip命令用来显示或操纵Linux主机的路由、网络设备、策略路由和隧道，是Linux下较新的功能强大的网络配置工具。</p>
<p><strong><font color=red>ip命令：</font></strong></p>
<blockquote>
<p>ip	网络管理命令<br>
ip a	查看网卡信息<br>
ip l	查看网络连接情况</p>
</blockquote>
<h2 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式：</h2>
<blockquote>
<p>ip [参数]</p>
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
<td>-s</td>
<td>输出更详细的信息</td>
</tr>
<tr>
<td>-f</td>
<td>强制使用指定的协议族</td>
</tr>
<tr>
<td>-4</td>
<td>指定使用的网络层协议是IPv4协议</td>
</tr>
<tr>
<td>-6</td>
<td>指定使用的网络层协议是IPv6协议</td>
</tr>
<tr>
<td>-r</td>
<td>显示主机时，不使用IP地址，而使用主机的域名</td>
</tr>
</tbody>
</table>
<h2 id="参考实例" tabindex="-1"><a class="header-anchor" href="#参考实例" aria-hidden="true">#</a> 参考实例：</h2>
<p>用ip命令显示网络设备的运行状态:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># ip link list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用-s参数输出更详细的信息：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># ip -s link list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示核心路由表：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># ip route list</span>
<span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># ip route show</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>显示邻居路由表：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># ip neigh list</span>
<span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># ip neigh show</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/f58471169d8f419f8585079d5568d49d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>              <font size=5>总文章在：<a href="https://blog.csdn.net/liu_chen_yang/article/details/114872010?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Linux常用命令<ExternalLinkIcon/></a><br>
<img src="https://img-blog.csdnimg.cn/b6c5a9e4a5af4687a64e020cac19eb09.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"></p>
</div></template>


