<template><div><h2 id="一、内存相关命令" tabindex="-1"><a class="header-anchor" href="#一、内存相关命令"><span>一、内存相关命令</span></a></h2>
<h3 id="_1、free-–-显示系统内存使用量情况" tabindex="-1"><a class="header-anchor" href="#_1、free-–-显示系统内存使用量情况"><span>1、free – 显示系统内存使用量情况</span></a></h3>
<blockquote>
<p>free命令的功能是显示系统内存使用量情况，包含物理和交换内存的总量、使用量和空闲量情况。</p>
</blockquote>
<p><strong><font color=teal>语法格式</font></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">free</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [参数]</span></span></code></pre>
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
<td>-b</td>
<td>以Byte显示内存使用情况</td>
</tr>
<tr>
<td>-k</td>
<td>以kb为单位显示内存使用情况</td>
</tr>
<tr>
<td>-m</td>
<td>以mb为单位显示内存使用情况</td>
</tr>
<tr>
<td>-g</td>
<td>以gb为单位显示内存使用情况</td>
</tr>
<tr>
<td>-s</td>
<td>持续显示内存</td>
</tr>
<tr>
<td>-t</td>
<td>显示内存使用总合</td>
</tr>
<tr>
<td>-h</td>
<td>以易读的单位方式显示内存使用情况</td>
</tr>
</tbody>
</table>
<p><strong><font color=teal>参考实例</font></strong></p>
<p>以默认的容量单位显示内存使用量信息：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@root ~]# free</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">              total</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        used</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        free</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      shared</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  buff/cache</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   available</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Mem:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">       65353144</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">     8354168</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    53956676</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">       39716</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">     3042300</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    56522796</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Swap:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">             0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">           0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">           0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以MB位单位显示内存使用量信息：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@root ~]# free -m</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">              total</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        used</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        free</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      shared</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  buff/cache</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   available</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Mem:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">          63821</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">        8154</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">       52696</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">          38</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">        2971</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">       55202</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Swap:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">             0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">           0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">           0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以易读的单位显示内存使用量信息：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@root ~]# free -h</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">              total</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        used</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        free</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      shared</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  buff/cache</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   available</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Mem:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            62G</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        8.0G</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">         51G</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">         38M</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        2.9G</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">         53G</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Swap:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            0B</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          0B</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          0B</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以易读的单位显示内存使用量信息，每个10秒刷新一次：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@root ~]# free -hs 10</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">              total</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        used</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        free</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      shared</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  buff/cache</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   available</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Mem:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            62G</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        8.0G</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">         51G</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">         38M</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        2.9G</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">         53G</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Swap:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            0B</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          0B</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          0B</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">              total</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        used</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        free</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      shared</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  buff/cache</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   available</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Mem:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            62G</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        8.0G</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">         51G</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">         38M</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        2.9G</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">         53G</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Swap:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            0B</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          0B</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          0B</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong><font color=orager>字段解析</font></strong></p>
<font color=red>#total：物理内存大小，就是机器实际的内存<br>
#used：已使用的内存大小，这个值包括了cached和应用程序实际使用的内存<br>
#free：未被使用的内存大小（俗称：空闲内存）<br>
#shared：共享内存大小，是进程间通信的一种方式<br>
#buffers：被缓冲区占用的内存大小<br>
#cached：被缓存占用的内存大小</font>
</blockquote>
<h3 id="_2、cat-proc-meminfo" tabindex="-1"><a class="header-anchor" href="#_2、cat-proc-meminfo"><span>2、cat /proc/meminfo</span></a></h3>
<blockquote>
<p>meminfo中包含所有的内存相关信息。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@root ~]# cat /proc/meminfo </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">MemTotal:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">       65353144</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">MemFree:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">        53956672</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">MemAvailable:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   56523144</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Buffers:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">           49180</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Cached:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">          2889216</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">SwapCached:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">            0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Active:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">          7603092</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Inactive:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">        2691064</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Active(anon</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):    7356648 kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Inactive(anon</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):    38800 kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Active(file</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):     246444 kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Inactive(file</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):  2652264 kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Unevictable:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">           0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Mlocked:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">               0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">SwapTotal:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">             0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">SwapFree:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">              0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Dirty:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">                36</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Writeback:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">             0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">AnonPages:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">       7360372</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Mapped:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">           764500</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Shmem:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">             39684</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Slab:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">             306384</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">SReclaimable:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">     104216</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">SUnreclaim:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">       202168</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">KernelStack:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">       22464</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">PageTables:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">        30644</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">NFS_Unstable:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">          0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Bounce:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">                0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">WritebackTmp:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">          0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">CommitLimit:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    32676572</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"> #系统中可以申请的虚拟内存最大值</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Committed_AS:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   27883644</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"> #系统已经申请的虚拟内存</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">VmallocTotal:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   34359738367</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">VmallocUsed:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">      525916</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">VmallocChunk:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   34325372924</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">HardwareCorrupted:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">     0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">AnonHugePages:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   4573184</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">CmaTotal:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">              0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">CmaFree:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">               0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">HugePages_Total:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">       0</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">HugePages_Free:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">        0</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">HugePages_Rsvd:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">        0</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">HugePages_Surp:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">        0</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Hugepagesize:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">       2048</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">DirectMap4k:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">      771124</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">DirectMap2M:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    11393024</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">DirectMap1G:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    56623104</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kB</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、内存相关问题" tabindex="-1"><a class="header-anchor" href="#二、内存相关问题"><span>二、内存相关问题</span></a></h2>
<h3 id="_1、内存泄漏" tabindex="-1"><a class="header-anchor" href="#_1、内存泄漏"><span>1、内存泄漏</span></a></h3>
<p>解析：</p>
<blockquote>
<p>如果程序运行过程中不能正常回收不用的内存，那么一段时间就会导致内存增长很高，最终导致系统不可以用，这种情况称为内存泄漏。</p>
</blockquote>
<p>内存泄漏可以使用内存分享工具valgrind进行内存分析。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@root ~]# yum -y install valgrind</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@root ~]# valgrind </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">--tool</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">memcheck</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  ./mem_leak</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -t</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">==1738==</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Memcheck,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> memory</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> error</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> detector</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">==1738==</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Copyright</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (C) 2002-2017, and GNU GPL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'d, by Julian Seward et al.</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">==1738== Using Valgrind-3.13.0 and LibVEX; rerun with -h for copyright info</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">==1738== Command: ./mem_leak -t</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">==1738== </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">==1738== </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">==1738== HEAP SUMMARY:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">==1738==     in use at exit: 4 bytes in 1 blocks</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">==1738==   total heap usage: 1 allocs, 0 frees, 4 bytes allocated</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">==1738== </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">==1738== LEAK SUMMARY:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">==1738==    definitely lost: 4 bytes in 1 blocks</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">==1738==    indirectly lost: 0 bytes in 0 blocks</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">==1738==      possibly lost: 0 bytes in 0 blocks</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">==1738==    still reachable: 0 bytes in 0 blocks</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">==1738==         suppressed: 0 bytes in 0 blocks</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">==1738== Rerun with --leak-check=full to see details of leaked memory</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">==1738== </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">==1738== For counts of detected and suppressed errors, rerun with: -v</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">==1738== ERROR SUMMARY: 0 errors from 0 contexts (suppressed: 0 from 0)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、虚拟内存、物理内存" tabindex="-1"><a class="header-anchor" href="#_2、虚拟内存、物理内存"><span>2、虚拟内存、物理内存</span></a></h3>
<p>内存的最小单位为页（paging）,默认情况一页是4K。</p>
<ul>
<li>虚拟内存与物理内存</li>
</ul>
<p>  当进程向操作系统申请10G内存时，操作系统收到请求后先进行自我检查，经过分析后决定给予进程10G内存空间，但是系统此时并没有真正给进程10G，系统会判断进程运行实际需要的内存大小，比如该进程需要300M就够用了，所以系统只划分300M内存给进程运行，这种实际分配的内存称为物理内存。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@root ~]# ps aux|</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">head</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">USER</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        PID</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> %CPU</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> %MEM</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    VSZ</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   RSS</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> TTY</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      STAT</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> START</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   TIME</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> COMMAND</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#VSZ 虚拟内存</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#RSS 物理内存</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、内存溢出" tabindex="-1"><a class="header-anchor" href="#_3、内存溢出"><span>3、内存溢出</span></a></h3>
<blockquote>
<p>内存溢出（out of memory，OOM），当进程运行向系统申请内存时，系统没有更多的进程分配给该进程了，就会出现内存溢出。内存溢出后系统会杀掉系统中的一些进程来释放内存，通常OOM Killer杀死的都是占用内存较多的服务，直到内存够用为止，所以内存溢出的直观现象通常是某些服务异常或宕机。当发生内存溢出后可以通过dmesg命令或者通过/var/log/messages来快速确定。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@root ~]# dmesg |</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tail</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -5</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[ 3613.796390] [ 1277]     0  1277    28983        1      16      217             0 bash</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[ 3613.796393] [ 1446]     0  1446    29003        0      16      221             0 bash</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[ 3613.796395] [ 1546]     0  1546   774216   213712    1439   513149             0 python</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[ 3613.796396] Out of memory: Kill process 1546 (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">python</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) score 912 or sacrifice child</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[ 3613.796422] Killed process 1546 (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">python</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) total-vm:3096864kB, anon-rss:854848kB, file-rss:0kB, shmem-rss:0kB</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@root ~]# cat /proc/sys/vm/panic_on_oom </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@root ~]# echo 1 > /proc/sys/vm/panic_on_oom</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">panic_on_oom该参数的值共有三个选项:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">0是触发oom</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> killer进行杀进程处理</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/proc/sys/vm/oom_kill_allocating_task默认值为0，结束占用内存多的进程</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">如果设置为1,就杀死当前申请内存的进程</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">2是直接触发kernel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> panic（类似于Windows的蓝屏），此时系统开发人员可以连接进行debug,但是对其他人并没有什么用。更多希望系统快速重启（/proc/sys/kernel/panic设置多少秒后重启）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">1是根据不同情况会有不同处理</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、overcommit" tabindex="-1"><a class="header-anchor" href="#_4、overcommit"><span>4、Overcommit</span></a></h3>
<blockquote>
<p>一般情况下，进程并不会一次用光申请的内存，所以操作系统为了提高内存使用率，会向进程“超卖”内存，以便能响应更多的进程内存申请。但是为了保证程序的稳定运行，系统并不会无限制响应内存申请，这样可以防止内存申请过多，导致系统本身内存空间不足而无法正常运行。Linux系统中使用OverCommit的方式控制内存的申请。</p>
</blockquote>
<blockquote>
<p>内核参数overcommit_memory 内存分配策略<br>
可选值：0、1、2。<br>
0， 表示内核将检查是否有足够的可用内存供应用进程使用；如果有足够的可用内存，内存申请允许；否则，引发OOM。<br>
1， 表示内核允许分配所有的物理内存，而不管当前的内存状态如何。<br>
2， 表示内核不允许进程申请超过系统设置大小的内存空间。在这种模式下，系统设置的可申请内存空间大小为：Swap+RAM*(“/proc/sys/vm/overcommit_ratio”/100)<br>
说明:/proc/sys/vm/overcommit_ratio就是系统最大可以分配内存的百分比，默认是50.</p>
</blockquote>
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


