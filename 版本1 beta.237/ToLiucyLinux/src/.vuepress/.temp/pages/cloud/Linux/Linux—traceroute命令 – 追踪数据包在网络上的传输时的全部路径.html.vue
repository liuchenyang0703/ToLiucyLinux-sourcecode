<template><div><p>@[toc]</p>
<p>traceroute命令用于追踪数据包在网络上的传输时的全部路径，它默认发送的数据包大小是40字节。通过traceroute我们可以知道信息从你的计算机到互联网另一端的主机是走的什么路径。当然每次数据包由某一同样的出发点（source）到达某一同样的目的地(destination)走的路径可能会不一样，但基本上来说大部分时候所走的路由是相同的。</p>
<p>traceroute通过发送小的数据包到目的设备直到其返回，来测量其需要多长时间。一条路径上的每个设备traceroute要测3次。输出结果中包括每次测试的时间(ms)和设备的名称（如有的话）及其ip地址。</p>
<blockquote>
<p>traceroute	跟踪路由</p>
</blockquote>
<h2 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式：</h2>
<blockquote>
<p>traceroute [参数] [域名或者IP]</p>
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
<td>-d</td>
<td>使用Socket层级的排错功能</td>
</tr>
<tr>
<td>-f&lt;存活数值&gt;</td>
<td>设置第一个检测数据包的存活数值TTL的大小</td>
</tr>
<tr>
<td>-F</td>
<td>设置勿离断位</td>
</tr>
<tr>
<td>-g&lt;网关&gt;</td>
<td>设置来源路由网关，最多可设置8个</td>
</tr>
<tr>
<td>-i&lt;网络界面&gt;</td>
<td>使用指定的网络界面送出数据包</td>
</tr>
<tr>
<td>-I</td>
<td>使用ICMP回应取代UDP资料信息</td>
</tr>
<tr>
<td>-m&lt;存活数值&gt;</td>
<td>设置检测数据包的最大存活数值TTL的大小</td>
</tr>
<tr>
<td>-n</td>
<td>直接使用IP地址而非主机名称</td>
</tr>
<tr>
<td>-p&lt;通信端口&gt;</td>
<td>设置UDP传输协议的通信端口</td>
</tr>
<tr>
<td>-r</td>
<td>忽略普通的Routing Table，直接将数据包送到远端主机上</td>
</tr>
<tr>
<td>-s&lt;来源地址&gt;</td>
<td>设置本地主机送出数据包的IP地址</td>
</tr>
<tr>
<td>-t&lt;服务类型&gt;</td>
<td>设置检测数据包的TOS数值</td>
</tr>
<tr>
<td>-v</td>
<td>详细显示指令的执行过程</td>
</tr>
<tr>
<td>-w</td>
<td>设置等待远端主机回报的时间</td>
</tr>
<tr>
<td>-x</td>
<td>开启或关闭数据包的正确性检验</td>
</tr>
</tbody>
</table>
<h2 id="参考实例" tabindex="-1"><a class="header-anchor" href="#参考实例" aria-hidden="true">#</a> 参考实例：</h2>
<p>追踪本地数据包到www.linuxprobe.com的传输路径：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># traceroute www.linuxprobe.com</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>跳数设置：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># traceroute -m 7 www.linuxprobe.com</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示IP地址，不查主机名 ：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># traceroute -n www.linuxprobe.com</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>把探测包的个数设置为值4：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># traceroute -q 4 www.linuxprobe.com</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>把对外发探测包的等待响应时间设置为3秒：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># traceroute -w 3 www.linuxprobe.com</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/f58471169d8f419f8585079d5568d49d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>              <font size=5>总文章在：<a href="https://blog.csdn.net/liu_chen_yang/article/details/114872010?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Linux常用命令<ExternalLinkIcon/></a><br>
<img src="https://img-blog.csdnimg.cn/b6c5a9e4a5af4687a64e020cac19eb09.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="" loading="lazy"></p>
</div></template>


