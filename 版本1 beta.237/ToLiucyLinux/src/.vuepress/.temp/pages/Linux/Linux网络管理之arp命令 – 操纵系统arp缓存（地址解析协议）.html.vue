<template><div><p>arp命令的英文全拼“Address Resolution Protocol” 。该命令用于操作主机的arp缓存，它可以显示arp缓存中的所有条目、删除指定的条目或者添加静态的ip地址与MAC地址对应关系。</p>
<h2 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式：</h2>
<blockquote>
<p>arp [参数] [IP]</p>
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
<td>-a</td>
<td>显示arp缓存的所有条目，主机位可选参数</td>
</tr>
<tr>
<td>-H</td>
<td>指定arp指令使用的地址类型</td>
</tr>
<tr>
<td>-d</td>
<td>从arp缓存中删除指定主机的arp条目</td>
</tr>
<tr>
<td>-D</td>
<td>使用指定接口的硬件地址</td>
</tr>
<tr>
<td>-e</td>
<td>以linux的显示风格显示arp缓存中的条目</td>
</tr>
<tr>
<td>-i</td>
<td>指定要操作arp缓存的网络接口</td>
</tr>
<tr>
<td>-n</td>
<td>以数字方式显示arp缓存中的条目</td>
</tr>
<tr>
<td>-v</td>
<td>显示详细的arp缓存条目，包括缓存条目的统计信息</td>
</tr>
<tr>
<td>-f</td>
<td>设置主机的IP地址与MAC地址的静态映射</td>
</tr>
</tbody>
</table>
<h2 id="参考实例" tabindex="-1"><a class="header-anchor" href="#参考实例" aria-hidden="true">#</a> 参考实例：</h2>
<p>显示本机arp缓存中所有记录：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># arp</span>
Address       HWtype     HWaddress         Flags Mask          Iface    
gateway       ether      00:03:0f:81:6b:f1    C                ens160
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以数字方式显示指定主机arp缓存条目：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># arp -n 192.168.60.1</span>
Address           HWtype  HWaddress           Flags Mask         Iface
<span class="token number">192.168</span>.60.1      ether   00:03:0f:81:6b:f1   C                  ens160
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除接口eth1上的192.168.60.1的arp表中的项：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># arp -i eth1 -d 192.168.60.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用eth1的MAC地址回答eth0上的192.168.60.2的arp请求：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># arp -i eth0 -Ds 192.168.60.2 eth1 pub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


