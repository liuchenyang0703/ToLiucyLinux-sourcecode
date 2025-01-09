<template><div><h2 id="一、lscpu-–-显示cpu架构的有关信息" tabindex="-1"><a class="header-anchor" href="#一、lscpu-–-显示cpu架构的有关信息" aria-hidden="true">#</a> 一、lscpu  – 显示CPU架构的有关信息</h2>
<blockquote>
<p>lscpu命令从sysfs和/proc/cpuinfo收集cpu体系结构信息，命令的输出比较易读，命令输出的信息包含cpu数量，线程，核数，套接字，缓存等。</p>
</blockquote>
<p><strong><font color=teal>常用参数</font></strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>参数扩展名</th>
<th>解析</th>
</tr>
</thead>
<tbody>
<tr>
<td>-a</td>
<td>--all</td>
<td>同时打印在线和离线 CPU (-e 选项默认值)</td>
</tr>
<tr>
<td>-b</td>
<td>--online</td>
<td>只打印在线 CPU (-p 选项默认值)</td>
</tr>
<tr>
<td>-c</td>
<td>--offline</td>
<td>只打印离线 CPU</td>
</tr>
<tr>
<td>-e</td>
<td>--extended[=&lt;列表&gt;]</td>
<td>打印扩展的可读格式</td>
</tr>
<tr>
<td>-p</td>
<td>--parse[=&lt;列表&gt;]</td>
<td>打印可解析格式</td>
</tr>
<tr>
<td>-s</td>
<td>--sysroot &lt;目录&gt;</td>
<td>以指定目录作为系统根目录</td>
</tr>
<tr>
<td>-x</td>
<td>--hex</td>
<td>打印十六进制掩码而非 CPU 列表</td>
</tr>
<tr>
<td>-y</td>
<td>--physical</td>
<td>print physical instead of logical IDs</td>
</tr>
<tr>
<td>-h</td>
<td>--help</td>
<td>显示此帮助并退出</td>
</tr>
<tr>
<td>-V</td>
<td>--version</td>
<td>输出版本信息并退出</td>
</tr>
</tbody>
</table>
<p><strong><font color=teal>参考实例</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># lscpu</span>
Architecture:          x86_64
CPU op-mode<span class="token punctuation">(</span>s<span class="token punctuation">)</span>:        <span class="token number">32</span>-bit, <span class="token number">64</span>-bit
Byte Order:            Little Endian
CPU<span class="token punctuation">(</span>s<span class="token punctuation">)</span>:                <span class="token number">16</span>
On-line CPU<span class="token punctuation">(</span>s<span class="token punctuation">)</span> list:   <span class="token number">0</span>-15
Thread<span class="token punctuation">(</span>s<span class="token punctuation">)</span> per core:    <span class="token number">2</span>
Core<span class="token punctuation">(</span>s<span class="token punctuation">)</span> per socket:    <span class="token number">4</span>
座：                 <span class="token number">2</span>
NUMA 节点：         <span class="token number">2</span>
厂商 ID：           GenuineIntel
CPU 系列：          <span class="token number">6</span>
型号：              <span class="token number">44</span>
型号名称：        Intel<span class="token punctuation">(</span>R<span class="token punctuation">)</span> Xeon<span class="token punctuation">(</span>R<span class="token punctuation">)</span> CPU           E5620  @ <span class="token number">2</span>.40GHz
步进：              <span class="token number">2</span>
CPU MHz：             <span class="token number">2393.915</span>
BogoMIPS：            <span class="token number">4787.83</span>
虚拟化：           VT-x
L1d 缓存：          32K
L1i 缓存：          32K
L2 缓存：           256K
L3 缓存：           12288K
NUMA 节点0 CPU：    <span class="token number">0,2</span>,4,6,8,10,12,14
NUMA 节点1 CPU：    <span class="token number">1,3</span>,5,7,9,11,13,15
Flags:                 fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ss ht tm pbe syscall nx pdpe1gb rdtscp lm constant_tsc arch_perfmon pebs bts rep_good nopl xtopology nonstop_tsc aperfmperf eagerfpu pni pclmulqdq dtes64 monitor ds_cpl vmx smx est tm2 ssse3 cx16 xtpr pdcm pcid dca sse4_1 sse4_2 popcnt aes lahf_lm ssbd ibrs ibpb stibp tpr_shadow vnmi flexpriority ept vpid dtherm ida arat spec_ctrl intel_stibp flush_l1d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、mpstat-–-显示变化的cpu数据" tabindex="-1"><a class="header-anchor" href="#二、mpstat-–-显示变化的cpu数据" aria-hidden="true">#</a> 二、mpstat – 显示变化的CPU数据</h2>
<blockquote>
<p>  mpstat命令可以显示随着时间变化的CPU数据，方便找出CPU使用率与时间的关系。这个命令包含在工具集sysstat中，使用之前需要安装sysstat。</p>
</blockquote>
<p><strong><font color=teal>语法格式</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mpstat <span class="token punctuation">[</span> 选项 <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token operator">&lt;</span>时间间隔<span class="token operator">></span> <span class="token punctuation">[</span> <span class="token operator">&lt;</span>次数<span class="token operator">></span> <span class="token punctuation">]</span> <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>常用参数</font></strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>解析</th>
</tr>
</thead>
<tbody>
<tr>
<td>-P</td>
<td>执行监控的CPU，取值0~CPUNUM。或者用ALL查看全部CPU</td>
</tr>
</tbody>
</table>
<p><strong><font color=teal>参考实例</font></strong><br>
执行监控第一个CPU：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># mpstat -P 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行监控全部CPU：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># mpstat -P ALL </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>每隔1个时间单位采样5次：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># mpstat 1 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认cpu是all；</p>
<p><strong><font color=teal>演示及字段解析</font></strong></p>
<p><strong><font color=readsn>演示：</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># mpstat 1 5</span>
Linux <span class="token number">3.10</span>.0-1062.9.1.el7.x86_64 <span class="token punctuation">(</span>root<span class="token punctuation">)</span> 	<span class="token number">2022</span>年06月06日 	_x86_64_	<span class="token punctuation">(</span><span class="token number">48</span> CPU<span class="token punctuation">)</span>

<span class="token number">14</span>时04分21秒  CPU    %usr   %nice    %sys %iowait    %irq   %soft  %steal  %guest  %gnice   %idle
<span class="token number">14</span>时04分22秒  all    <span class="token number">1.23</span>    <span class="token number">0.00</span>    <span class="token number">2.38</span>    <span class="token number">0.00</span>    <span class="token number">0.00</span>    <span class="token number">1.07</span>    <span class="token number">0.00</span>    <span class="token number">0.00</span>    <span class="token number">0.00</span>   <span class="token number">95.32</span>
<span class="token number">14</span>时04分23秒  all    <span class="token number">1.65</span>    <span class="token number">0.00</span>    <span class="token number">2.39</span>    <span class="token number">0.00</span>    <span class="token number">0.00</span>    <span class="token number">1.21</span>    <span class="token number">0.00</span>    <span class="token number">0.00</span>    <span class="token number">0.00</span>   <span class="token number">94.75</span>
<span class="token number">14</span>时04分24秒  all    <span class="token number">1.05</span>    <span class="token number">0.00</span>    <span class="token number">2.38</span>    <span class="token number">0.02</span>    <span class="token number">0.00</span>    <span class="token number">1.17</span>    <span class="token number">0.00</span>    <span class="token number">0.00</span>    <span class="token number">0.00</span>   <span class="token number">95.38</span>
<span class="token number">14</span>时04分25秒  all    <span class="token number">1.04</span>    <span class="token number">0.00</span>    <span class="token number">2.55</span>    <span class="token number">0.00</span>    <span class="token number">0.00</span>    <span class="token number">1.11</span>    <span class="token number">0.00</span>    <span class="token number">0.00</span>    <span class="token number">0.00</span>   <span class="token number">95.30</span>
<span class="token number">14</span>时04分26秒  all    <span class="token number">0.96</span>    <span class="token number">0.00</span>    <span class="token number">2.49</span>    <span class="token number">0.00</span>    <span class="token number">0.00</span>    <span class="token number">1.15</span>    <span class="token number">0.00</span>    <span class="token number">0.00</span>    <span class="token number">0.00</span>   <span class="token number">95.40</span>
平均时间:  all    <span class="token number">1.19</span>    <span class="token number">0.00</span>    <span class="token number">2.44</span>    <span class="token number">0.00</span>    <span class="token number">0.00</span>    <span class="token number">1.14</span>    <span class="token number">0.00</span>    <span class="token number">0.00</span>    <span class="token number">0.00</span>   <span class="token number">95.23</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong><font color=readsn>字段解析：</font></strong><br>
#%user:用户态程序<br>
#%nice:优先级调整<br>
#%sys:内核态消耗<br>
#%iowait:磁盘等待<br>
#%irq:硬件中断<br>
#%soft:软件中断<br>
#%steal:处理hyperviosr的消耗<br>
#%guest:虚拟机消耗掉的CPU<br>
#%idle：CPU空闲</p>
</blockquote>
<font color=red>说明:
如果%iowait的值过高，表示硬盘存在I/O瓶颈
如果%idle值高，表示CPU较空闲
如果%idle值高但系统响应慢时，可能是CPU等待分配内存，应加大内存容量。
如果%idle值持续低于10，表明CPU处理能力相对较低，系统中最需要解决的资源是CPU。</font>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章" aria-hidden="true">#</a>  相关文章</h2>
<blockquote>
<p>💻<a href="https://blog.csdn.net/liu_chen_yang/article/details/125143646" target="_blank" rel="noopener noreferrer">【Linux】之【CPU】相关的命令及解析[lscpu、mpstat]<ExternalLinkIcon/></a></p>
<hr>
<p>💻<a href="https://blog.csdn.net/liu_chen_yang/article/details/125146057" target="_blank" rel="noopener noreferrer">【Linux】之【内存】相关的命令&amp;&amp;解析以及内存相关的问题[free、meminfo、内存泄漏、内存溢出、Overcommit]<ExternalLinkIcon/></a></p>
<hr>
<p>💻<a href="https://blog.csdn.net/liu_chen_yang/article/details/125256901?spm=1001.2014.3001.5501" target="_blank" rel="noopener noreferrer">【Linux】之【磁盘】相关的命令及解析[df、du、iostat、iotop]<ExternalLinkIcon/></a></p>
<hr>
<p>💻<a href="https://blog.csdn.net/liu_chen_yang/article/details/125146080" target="_blank" rel="noopener noreferrer">【Linux】之【网络】相关的命令及解析[ethtool、nload、nethogs、iftop、iptraf、ifstat]<ExternalLinkIcon/></a></p>
<hr>
<p>💻<a href="https://blog.csdn.net/liu_chen_yang/article/details/125146126" target="_blank" rel="noopener noreferrer">【Linux】综合性命令及解析【top、htop、vmstat、dstat、glances、sar】<ExternalLinkIcon/></a></p>
<hr>
<p>💻<a href="https://blog.csdn.net/liu_chen_yang/article/details/125169987" target="_blank" rel="noopener noreferrer">【Linux】系统如何查看服务器带宽及网络使用情况<ExternalLinkIcon/></a></p>
<hr>
</blockquote>
</div></template>


