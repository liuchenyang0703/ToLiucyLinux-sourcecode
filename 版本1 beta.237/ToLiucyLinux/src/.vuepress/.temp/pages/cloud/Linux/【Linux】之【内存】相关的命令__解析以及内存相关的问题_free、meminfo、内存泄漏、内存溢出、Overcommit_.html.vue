<template><div><p>@[toc]</p>
<h1 id="一、内存相关命令" tabindex="-1"><a class="header-anchor" href="#一、内存相关命令" aria-hidden="true">#</a> 一、内存相关命令</h1>
<h2 id="_1、free-–-显示系统内存使用量情况" tabindex="-1"><a class="header-anchor" href="#_1、free-–-显示系统内存使用量情况" aria-hidden="true">#</a> 1、free – 显示系统内存使用量情况</h2>
<blockquote>
<p>free命令的功能是显示系统内存使用量情况，包含物理和交换内存的总量、使用量和空闲量情况。</p>
</blockquote>
<p><strong><font color=teal>语法格式</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">free</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span>
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
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># free</span>
              total        used        <span class="token function">free</span>      shared  buff/cache   available
Mem:       <span class="token number">65353144</span>     <span class="token number">8354168</span>    <span class="token number">53956676</span>       <span class="token number">39716</span>     <span class="token number">3042300</span>    <span class="token number">56522796</span>
Swap:             <span class="token number">0</span>           <span class="token number">0</span>           <span class="token number">0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以MB位单位显示内存使用量信息：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># free -m</span>
              total        used        <span class="token function">free</span>      shared  buff/cache   available
Mem:          <span class="token number">63821</span>        <span class="token number">8154</span>       <span class="token number">52696</span>          <span class="token number">38</span>        <span class="token number">2971</span>       <span class="token number">55202</span>
Swap:             <span class="token number">0</span>           <span class="token number">0</span>           <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以易读的单位显示内存使用量信息：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># free -h</span>
              total        used        <span class="token function">free</span>      shared  buff/cache   available
Mem:            62G        <span class="token number">8</span>.0G         51G         38M        <span class="token number">2</span>.9G         53G
Swap:            0B          0B          0B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以易读的单位显示内存使用量信息，每个10秒刷新一次：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># free -hs 10</span>
              total        used        <span class="token function">free</span>      shared  buff/cache   available
Mem:            62G        <span class="token number">8</span>.0G         51G         38M        <span class="token number">2</span>.9G         53G
Swap:            0B          0B          0B

              total        used        <span class="token function">free</span>      shared  buff/cache   available
Mem:            62G        <span class="token number">8</span>.0G         51G         38M        <span class="token number">2</span>.9G         53G
Swap:            0B          0B          0B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong><font color=orager>字段解析</font></strong></p>
<font color=red>#total：物理内存大小，就是机器实际的内存
</blockquote>
<p>#used：已使用的内存大小，这个值包括了cached和应用程序实际使用的内存<br>
#free：未被使用的内存大小（俗称：空闲内存）<br>
#shared：共享内存大小，是进程间通信的一种方式<br>
#buffers：被缓冲区占用的内存大小<br>
#cached：被缓存占用的内存大小</font></p>
<h2 id="_2、cat-proc-meminfo" tabindex="-1"><a class="header-anchor" href="#_2、cat-proc-meminfo" aria-hidden="true">#</a> 2、cat /proc/meminfo</h2>
<blockquote>
<p>meminfo中包含所有的内存相关信息。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># cat /proc/meminfo </span>
MemTotal:       <span class="token number">65353144</span> kB
MemFree:        <span class="token number">53956672</span> kB
MemAvailable:   <span class="token number">56523144</span> kB
Buffers:           <span class="token number">49180</span> kB
Cached:          <span class="token number">2889216</span> kB
SwapCached:            <span class="token number">0</span> kB
Active:          <span class="token number">7603092</span> kB
Inactive:        <span class="token number">2691064</span> kB
Active<span class="token punctuation">(</span>anon<span class="token punctuation">)</span>:    <span class="token number">7356648</span> kB
Inactive<span class="token punctuation">(</span>anon<span class="token punctuation">)</span>:    <span class="token number">38800</span> kB
Active<span class="token punctuation">(</span>file<span class="token punctuation">)</span>:     <span class="token number">246444</span> kB
Inactive<span class="token punctuation">(</span>file<span class="token punctuation">)</span>:  <span class="token number">2652264</span> kB
Unevictable:           <span class="token number">0</span> kB
Mlocked:               <span class="token number">0</span> kB
SwapTotal:             <span class="token number">0</span> kB
SwapFree:              <span class="token number">0</span> kB
Dirty:                <span class="token number">36</span> kB
Writeback:             <span class="token number">0</span> kB
AnonPages:       <span class="token number">7360372</span> kB
Mapped:           <span class="token number">764500</span> kB
Shmem:             <span class="token number">39684</span> kB
Slab:             <span class="token number">306384</span> kB
SReclaimable:     <span class="token number">104216</span> kB
SUnreclaim:       <span class="token number">202168</span> kB
KernelStack:       <span class="token number">22464</span> kB
PageTables:        <span class="token number">30644</span> kB
NFS_Unstable:          <span class="token number">0</span> kB
Bounce:                <span class="token number">0</span> kB
WritebackTmp:          <span class="token number">0</span> kB
CommitLimit:    <span class="token number">32676572</span> kB <span class="token comment">#系统中可以申请的虚拟内存最大值</span>
Committed_AS:   <span class="token number">27883644</span> kB <span class="token comment">#系统已经申请的虚拟内存</span>
VmallocTotal:   <span class="token number">34359738367</span> kB
VmallocUsed:      <span class="token number">525916</span> kB
VmallocChunk:   <span class="token number">34325372924</span> kB
HardwareCorrupted:     <span class="token number">0</span> kB
AnonHugePages:   <span class="token number">4573184</span> kB
CmaTotal:              <span class="token number">0</span> kB
CmaFree:               <span class="token number">0</span> kB
HugePages_Total:       <span class="token number">0</span>
HugePages_Free:        <span class="token number">0</span>
HugePages_Rsvd:        <span class="token number">0</span>
HugePages_Surp:        <span class="token number">0</span>
Hugepagesize:       <span class="token number">2048</span> kB
DirectMap4k:      <span class="token number">771124</span> kB
DirectMap2M:    <span class="token number">11393024</span> kB
DirectMap1G:    <span class="token number">56623104</span> kB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="二、内存相关问题" tabindex="-1"><a class="header-anchor" href="#二、内存相关问题" aria-hidden="true">#</a> 二、内存相关问题</h1>
<h2 id="_1、内存泄漏" tabindex="-1"><a class="header-anchor" href="#_1、内存泄漏" aria-hidden="true">#</a> 1、内存泄漏</h2>
<p>解析：</p>
<blockquote>
<p>如果程序运行过程中不能正常回收不用的内存，那么一段时间就会导致内存增长很高，最终导致系统不可以用，这种情况称为内存泄漏。</p>
</blockquote>
<p>内存泄漏可以使用内存分享工具valgrind进行内存分析。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># yum -y install valgrind</span>
<span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># valgrind --tool=memcheck  ./mem_leak -t</span>
<span class="token operator">==</span><span class="token number">1738</span><span class="token operator">==</span> Memcheck, a memory error detector
<span class="token operator">==</span><span class="token number">1738</span><span class="token operator">==</span> Copyright <span class="token punctuation">(</span>C<span class="token punctuation">)</span> <span class="token number">2002</span>-2017, and GNU GPL'd, by Julian Seward et al.
<span class="token operator">==</span><span class="token number">1738</span><span class="token operator">==</span> Using Valgrind-3.13.0 and LibVEX<span class="token punctuation">;</span> rerun with <span class="token parameter variable">-h</span> <span class="token keyword">for</span> copyright info
<span class="token operator">==</span><span class="token number">1738</span><span class="token operator">==</span> Command: ./mem_leak <span class="token parameter variable">-t</span>
<span class="token operator">==</span><span class="token number">1738</span><span class="token operator">==</span> 
<span class="token operator">==</span><span class="token number">1738</span><span class="token operator">==</span> 
<span class="token operator">==</span><span class="token number">1738</span><span class="token operator">==</span> HEAP SUMMARY:
<span class="token operator">==</span><span class="token number">1738</span><span class="token operator">==</span>     <span class="token keyword">in</span> use at exit: <span class="token number">4</span> bytes <span class="token keyword">in</span> <span class="token number">1</span> blocks
<span class="token operator">==</span><span class="token number">1738</span><span class="token operator">==</span>   total heap usage: <span class="token number">1</span> allocs, <span class="token number">0</span> frees, <span class="token number">4</span> bytes allocated
<span class="token operator">==</span><span class="token number">1738</span><span class="token operator">==</span> 
<span class="token operator">==</span><span class="token number">1738</span><span class="token operator">==</span> LEAK SUMMARY:
<span class="token operator">==</span><span class="token number">1738</span><span class="token operator">==</span>    definitely lost: <span class="token number">4</span> bytes <span class="token keyword">in</span> <span class="token number">1</span> blocks
<span class="token operator">==</span><span class="token number">1738</span><span class="token operator">==</span>    indirectly lost: <span class="token number">0</span> bytes <span class="token keyword">in</span> <span class="token number">0</span> blocks
<span class="token operator">==</span><span class="token number">1738</span><span class="token operator">==</span>      possibly lost: <span class="token number">0</span> bytes <span class="token keyword">in</span> <span class="token number">0</span> blocks
<span class="token operator">==</span><span class="token number">1738</span><span class="token operator">==</span>    still reachable: <span class="token number">0</span> bytes <span class="token keyword">in</span> <span class="token number">0</span> blocks
<span class="token operator">==</span><span class="token number">1738</span><span class="token operator">==</span>         suppressed: <span class="token number">0</span> bytes <span class="token keyword">in</span> <span class="token number">0</span> blocks
<span class="token operator">==</span><span class="token number">1738</span><span class="token operator">==</span> Rerun with --leak-check<span class="token operator">=</span>full to see details of leaked memory
<span class="token operator">==</span><span class="token number">1738</span><span class="token operator">==</span> 
<span class="token operator">==</span><span class="token number">1738</span><span class="token operator">==</span> For counts of detected and suppressed errors, rerun with: <span class="token parameter variable">-v</span>
<span class="token operator">==</span><span class="token number">1738</span><span class="token operator">==</span> ERROR SUMMARY: <span class="token number">0</span> errors from <span class="token number">0</span> contexts <span class="token punctuation">(</span>suppressed: <span class="token number">0</span> from <span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、虚拟内存、物理内存" tabindex="-1"><a class="header-anchor" href="#_2、虚拟内存、物理内存" aria-hidden="true">#</a> 2、虚拟内存、物理内存</h2>
<p>内存的最小单位为页（paging）,默认情况一页是4K。</p>
<ul>
<li>虚拟内存与物理内存</li>
</ul>
<p>  当进程向操作系统申请10G内存时，操作系统收到请求后先进行自我检查，经过分析后决定给予进程10G内存空间，但是系统此时并没有真正给进程10G，系统会判断进程运行实际需要的内存大小，比如该进程需要300M就够用了，所以系统只划分300M内存给进程运行，这种实际分配的内存称为物理内存。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># ps aux|head -1</span>
<span class="token environment constant">USER</span>        PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
<span class="token comment">#VSZ 虚拟内存</span>
<span class="token comment">#RSS 物理内存</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、内存溢出" tabindex="-1"><a class="header-anchor" href="#_3、内存溢出" aria-hidden="true">#</a> 3、内存溢出</h2>
<blockquote>
<p>内存溢出（out of memory，OOM），当进程运行向系统申请内存时，系统没有更多的进程分配给该进程了，就会出现内存溢出。内存溢出后系统会杀掉系统中的一些进程来释放内存，通常OOM Killer杀死的都是占用内存较多的服务，直到内存够用为止，所以内存溢出的直观现象通常是某些服务异常或宕机。当发生内存溢出后可以通过dmesg命令或者通过/var/log/messages来快速确定。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># dmesg |tail -5</span>
<span class="token punctuation">[</span> <span class="token number">3613.796390</span><span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token number">1277</span><span class="token punctuation">]</span>     <span class="token number">0</span>  <span class="token number">1277</span>    <span class="token number">28983</span>        <span class="token number">1</span>      <span class="token number">16</span>      <span class="token number">217</span>             <span class="token number">0</span> <span class="token function">bash</span>
<span class="token punctuation">[</span> <span class="token number">3613.796393</span><span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token number">1446</span><span class="token punctuation">]</span>     <span class="token number">0</span>  <span class="token number">1446</span>    <span class="token number">29003</span>        <span class="token number">0</span>      <span class="token number">16</span>      <span class="token number">221</span>             <span class="token number">0</span> <span class="token function">bash</span>
<span class="token punctuation">[</span> <span class="token number">3613.796395</span><span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token number">1546</span><span class="token punctuation">]</span>     <span class="token number">0</span>  <span class="token number">1546</span>   <span class="token number">774216</span>   <span class="token number">213712</span>    <span class="token number">1439</span>   <span class="token number">513149</span>             <span class="token number">0</span> python
<span class="token punctuation">[</span> <span class="token number">3613.796396</span><span class="token punctuation">]</span> Out of memory: Kill process <span class="token number">1546</span> <span class="token punctuation">(</span>python<span class="token punctuation">)</span> score <span class="token number">912</span> or sacrifice child
<span class="token punctuation">[</span> <span class="token number">3613.796422</span><span class="token punctuation">]</span> Killed process <span class="token number">1546</span> <span class="token punctuation">(</span>python<span class="token punctuation">)</span> total-vm:3096864kB, anon-rss:854848kB, file-rss:0kB, shmem-rss:0kB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># cat /proc/sys/vm/panic_on_oom </span>
<span class="token number">0</span>
<span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># echo 1 > /proc/sys/vm/panic_on_oom</span>

panic_on_oom该参数的值共有三个选项:
<span class="token number">0</span>是触发oom killer进行杀进程处理<span class="token punctuation">(</span>/proc/sys/vm/oom_kill_allocating_task默认值为0，结束占用内存多的进程<span class="token punctuation">;</span>如果设置为1,就杀死当前申请内存的进程<span class="token punctuation">)</span>
<span class="token number">2</span>是直接触发kernel panic（类似于Windows的蓝屏），此时系统开发人员可以连接进行debug,但是对其他人并没有什么用。更多希望系统快速重启（/proc/sys/kernel/panic设置多少秒后重启）
<span class="token number">1</span>是根据不同情况会有不同处理<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、overcommit" tabindex="-1"><a class="header-anchor" href="#_4、overcommit" aria-hidden="true">#</a> 4、Overcommit</h2>
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
<h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h1>
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


