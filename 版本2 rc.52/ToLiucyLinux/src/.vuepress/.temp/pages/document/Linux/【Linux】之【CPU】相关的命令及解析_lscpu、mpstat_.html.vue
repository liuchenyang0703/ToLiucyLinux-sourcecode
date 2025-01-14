<template><div><h2 id="一、lscpu-–-显示cpu架构的有关信息" tabindex="-1"><a class="header-anchor" href="#一、lscpu-–-显示cpu架构的有关信息"><span>一、lscpu  – 显示CPU架构的有关信息</span></a></h2>
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
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@root ~]# lscpu</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Architecture:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          x86_64</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">CPU</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> op-mode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        32-bit,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 64-bit</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Byte</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Order:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            Little</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Endian</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">CPU(s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):                16</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">On-line</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> CPU</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">list:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   0-15</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Thread(s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) per core:    2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Core(s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) per socket:    4</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">座：</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">                 2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">NUMA</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 节点：</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">         2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">厂商</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ID：</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">           GenuineIntel</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">CPU</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 系列：</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">          6</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">型号：</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">              44</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">型号名称：</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        Intel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">R</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Xeon</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">R</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">CPU</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">           E5620</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  @</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 2.40GHz</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">步进：</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">              2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">CPU</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> MHz：</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">             2393.915</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">BogoMIPS：</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">            4787.83</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">虚拟化：</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">           VT-x</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">L1d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 缓存：</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          32K</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">L1i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 缓存：</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          32K</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">L2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 缓存：</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">           256K</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">L3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 缓存：</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">           12288K</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">NUMA</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 节点0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> CPU：</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    0,2,4,6,8,10,12,14</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">NUMA</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 节点1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> CPU：</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    1,3,5,7,9,11,13,15</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Flags:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                 fpu</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vme</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> de</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pse</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tsc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> msr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pae</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mce</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cx8</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apic</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mtrr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pge</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mca</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cmov</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pse36</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> clflush</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dts</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> acpi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mmx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> fxsr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sse</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sse2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ss</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ht</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pbe</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> syscall</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pdpe1gb</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rdtscp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> lm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> constant_tsc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> arch_perfmon</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pebs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bts</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rep_good</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nopl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> xtopology</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nonstop_tsc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> aperfmperf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> eagerfpu</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pni</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pclmulqdq</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dtes64</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> monitor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ds_cpl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vmx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> smx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> est</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tm2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ssse3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cx16</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> xtpr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pdcm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pcid</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dca</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sse4_1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sse4_2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> popcnt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> aes</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> lahf_lm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ssbd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ibrs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ibpb</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> stibp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tpr_shadow</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vnmi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> flexpriority</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ept</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vpid</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dtherm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ida</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> arat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> spec_ctrl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> intel_stibp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> flush_l1d</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、mpstat-–-显示变化的cpu数据" tabindex="-1"><a class="header-anchor" href="#二、mpstat-–-显示变化的cpu数据"><span>二、mpstat – 显示变化的CPU数据</span></a></h2>
<blockquote>
<p>  mpstat命令可以显示随着时间变化的CPU数据，方便找出CPU使用率与时间的关系。这个命令包含在工具集sysstat中，使用之前需要安装sysstat。</p>
</blockquote>
<p><strong><font color=teal>语法格式</font></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mpstat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">选项</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [ &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">时间间</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">隔> [ &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">次</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">数> </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">]</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong><font color=teal>常用参数</font></strong></p>
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
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@root ~]# mpstat -P 1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>执行监控全部CPU：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@root ~]# mpstat -P ALL</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>每隔1个时间单位采样5次：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@root ~]# mpstat 1 5</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>默认cpu是all；</p>
<p><strong><font color=teal>演示及字段解析</font></strong></p>
<p><strong><font color=readsn>演示：</font></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@root ~]# mpstat 1 5</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Linux</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 3.10.0-1062.9.1.el7.x86_64</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (root) 	2022年06月06日 	_x86_64_	(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">48</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> CPU</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">14时04分21秒</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  CPU</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    %usr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   %nice</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    %sys</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> %iowait</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    %irq</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   %soft</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  %steal</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  %guest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  %gnice</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   %idle</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">14时04分22秒</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  all</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    1.23</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    2.38</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    1.07</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   95.32</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">14时04分23秒</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  all</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    1.65</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    2.39</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    1.21</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   94.75</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">14时04分24秒</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  all</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    1.05</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    2.38</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.02</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    1.17</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   95.38</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">14时04分25秒</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  all</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    1.04</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    2.55</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    1.11</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   95.30</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">14时04分26秒</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  all</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.96</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    2.49</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    1.15</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   95.40</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">平均时间:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  all</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    1.19</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    2.44</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    1.14</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0.00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   95.23</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
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
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章"><span> 相关文章</span></a></h2>
<blockquote>
<p>💻<a href="https://blog.csdn.net/liu_chen_yang/article/details/125143646" target="_blank" rel="noopener noreferrer">【Linux】之【CPU】相关的命令及解析[lscpu、mpstat]</a></p>
<hr>
<p>💻<a href="https://blog.csdn.net/liu_chen_yang/article/details/125146057" target="_blank" rel="noopener noreferrer">【Linux】之【内存】相关的命令&amp;&amp;解析以及内存相关的问题[free、meminfo、内存泄漏、内存溢出、Overcommit]</a></p>
<hr>
<p>💻<a href="https://blog.csdn.net/liu_chen_yang/article/details/125256901?spm=1001.2014.3001.5501" target="_blank" rel="noopener noreferrer">【Linux】之【磁盘】相关的命令及解析[df、du、iostat、iotop]</a></p>
<hr>
<p>💻<a href="https://blog.csdn.net/liu_chen_yang/article/details/125146080" target="_blank" rel="noopener noreferrer">【Linux】之【网络】相关的命令及解析[ethtool、nload、nethogs、iftop、iptraf、ifstat]</a></p>
<hr>
<p>💻<a href="https://blog.csdn.net/liu_chen_yang/article/details/125146126" target="_blank" rel="noopener noreferrer">【Linux】综合性命令及解析【top、htop、vmstat、dstat、glances、sar】</a></p>
<hr>
<p>💻<a href="https://blog.csdn.net/liu_chen_yang/article/details/125169987" target="_blank" rel="noopener noreferrer">【Linux】系统如何查看服务器带宽及网络使用情况</a></p>
<hr>
</blockquote>
</div></template>


