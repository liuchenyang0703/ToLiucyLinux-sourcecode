<template><div><p>@[toc]</p>
<h2 id="一、df-–-显示磁盘空间使用情况" tabindex="-1"><a class="header-anchor" href="#一、df-–-显示磁盘空间使用情况" aria-hidden="true">#</a> 一、df – 显示磁盘空间使用情况</h2>
<blockquote>
<p>df命令来自于英文词组”Disk Free“的缩写，其功能是用于显示系统上磁盘空间的使用量情况。df命令显示的磁盘使用量情况含可用、已有及使用率等信息，默认单位为Kb，建议使用-h参数进行单位换算。<br>
df命令可以查看磁盘使用情况和挂载信息</p>
</blockquote>
<p><strong><font color=teal>语法格式</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code> <span class="token function">df</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span> <span class="token punctuation">[</span>对象磁盘/分区<span class="token punctuation">]</span>
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
<td>-a</td>
<td>显示所有系统文件</td>
</tr>
<tr>
<td>-B</td>
<td>&lt;块大小&gt;	指定显示时的块大小</td>
</tr>
<tr>
<td>-h</td>
<td>以易读的方式显示</td>
</tr>
<tr>
<td>-H</td>
<td>以1000字节为换算单位来显示</td>
</tr>
<tr>
<td>-i</td>
<td>显示索引字节信息</td>
</tr>
<tr>
<td>-k</td>
<td>指定块大小为1KB</td>
</tr>
<tr>
<td>-l</td>
<td>只显示本地文件系统</td>
</tr>
<tr>
<td>-t &lt;文件系统类型&gt;</td>
<td>只显示指定类型的文件系统</td>
</tr>
<tr>
<td>-T</td>
<td>输出时显示文件系统类型</td>
</tr>
</tbody>
</table>
<p><strong><font color=teal>参考实例</font></strong></p>
<p>带有容量单位的显示系统全部磁盘使用量情况：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># df -h</span>
文件系统        容量  已用  可用 已用% 挂载点
devtmpfs         32G     <span class="token number">0</span>   32G    <span class="token number">0</span>% /dev
tmpfs            32G     <span class="token number">0</span>   32G    <span class="token number">0</span>% /dev/shm
tmpfs            32G   12M   32G    <span class="token number">1</span>% /run
tmpfs            32G     <span class="token number">0</span>   32G    <span class="token number">0</span>% /sys/fs/cgroup
/dev/nvme0n1p2  200G  128G   72G   <span class="token number">65</span>% /
/dev/nvme0n1p1  <span class="token number">2</span>.0G  217M  <span class="token number">1</span>.8G   <span class="token number">11</span>% /boot
/dev/sda        <span class="token number">1</span>.8T  <span class="token number">1</span>.2T  526G   <span class="token number">70</span>% /data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>带有容量单位的显示指定磁盘分区使用量情况：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># df -h /boot</span>
文件系统        容量  已用  可用 已用% 挂载点
/dev/nvme0n1p1  <span class="token number">2</span>.0G  217M  <span class="token number">1</span>.8G   <span class="token number">11</span>% /boot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示系统中所有文件系统格式为xfs的磁盘分区使用量情况：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># df -t xfs</span>
文件系统           1K-块      已用     可用 已用% 挂载点
/dev/nvme0n1p2 <span class="token number">209612800</span> <span class="token number">134200384</span> <span class="token number">75412416</span>   <span class="token number">65</span>% /
/dev/nvme0n1p1   <span class="token number">2086912</span>    <span class="token number">221760</span>  <span class="token number">1865152</span>   <span class="token number">11</span>% /boot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用的查看磁盘空间的命令及参数：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@hpt3 ~<span class="token punctuation">]</span><span class="token comment"># df -Th</span>
文件系统       类型      容量  已用  可用 已用% 挂载点
devtmpfs       devtmpfs   32G     <span class="token number">0</span>   32G    <span class="token number">0</span>% /dev
tmpfs          tmpfs      32G     <span class="token number">0</span>   32G    <span class="token number">0</span>% /dev/shm
tmpfs          tmpfs      32G   12M   32G    <span class="token number">1</span>% /run
tmpfs          tmpfs      32G     <span class="token number">0</span>   32G    <span class="token number">0</span>% /sys/fs/cgroup
/dev/nvme0n1p2 xfs       200G  128G   72G   <span class="token number">65</span>% /
/dev/nvme0n1p1 xfs       <span class="token number">2</span>.0G  217M  <span class="token number">1</span>.8G   <span class="token number">11</span>% /boot
/dev/sda       ext4      <span class="token number">1</span>.8T  <span class="token number">1</span>.2T  526G   <span class="token number">70</span>% /data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、du-–-查看文件或目录的大小" tabindex="-1"><a class="header-anchor" href="#二、du-–-查看文件或目录的大小" aria-hidden="true">#</a> 二、du – 查看文件或目录的大小</h2>
<blockquote>
<p>du命令来自于英文词组“Disk Usage”的缩写，其功能是用于查看文件或目录的大小。人们经常会把df和du命令混淆，df是用于查看磁盘或分区使用情况的命令，而du命令则是用于按照指定容量单位来查看文件或目录在磁盘中的占用情况。</p>
</blockquote>
<p><strong><font color=teal>语法格式</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">du</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span> 文件
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
<td>-a</td>
<td>显示目录中所有文件大小</td>
</tr>
<tr>
<td>-k</td>
<td>以KB为单位显示文件大小</td>
</tr>
<tr>
<td>-m</td>
<td>以MB为单位显示文件大小</td>
</tr>
<tr>
<td>-g</td>
<td>以GB为单位显示文件大小</td>
</tr>
<tr>
<td>-h</td>
<td>以易读方式显示文件大小</td>
</tr>
<tr>
<td>-s</td>
<td>仅显示总计</td>
</tr>
</tbody>
</table>
<p><strong><font color=teal>参考实例</font></strong></p>
<p>以易读的容量格式显示指定目录内各个文件的大小信息：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># cd /home/restart/</span>
<span class="token punctuation">[</span>root@restart ~<span class="token punctuation">]</span><span class="token comment"># du -sh *</span>
<span class="token number">4</span>.0K	if.sh
<span class="token number">6</span>.1M	main
<span class="token number">4</span>.0K	restart.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以易读的容量格式显示指定目录内总文件的大小信息：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># du -sh restart/</span>
<span class="token number">6</span>.1M	restart/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、iostat-–-监视系统输入输出设备和cpu的使用情况" tabindex="-1"><a class="header-anchor" href="#三、iostat-–-监视系统输入输出设备和cpu的使用情况" aria-hidden="true">#</a> 三、iostat – 监视系统输入输出设备和CPU的使用情况</h2>
<blockquote>
<p>iostat被用于监视系统输入输出设备和CPU的使用情况。它的特点是汇报磁盘活动统计情况，同时也会汇报出CPU使用情况。iostat不能对某个进程进行深入分析，仅对系统的整体情况进行分析。</p>
</blockquote>
<p><strong><font color=teal>语法格式</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code> iostat <span class="token punctuation">[</span> 选项 <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token operator">&lt;</span>时间间隔<span class="token operator">></span> <span class="token punctuation">[</span> <span class="token operator">&lt;</span>次数<span class="token operator">></span> <span class="token punctuation">]</span> <span class="token punctuation">]</span>
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
<td>-c</td>
<td>显示CPU使用情况</td>
</tr>
<tr>
<td>-d</td>
<td>指定磁盘设备</td>
</tr>
<tr>
<td>-x</td>
<td>显示详细的信息</td>
</tr>
<tr>
<td>-k</td>
<td>显示状态以千字节每秒为单位，而不使用块每秒</td>
</tr>
<tr>
<td>-m</td>
<td>显示状态以兆字节每秒为单位</td>
</tr>
<tr>
<td>-p</td>
<td>仅显示块设备和所有被使用的其他分区的状态</td>
</tr>
<tr>
<td>-t</td>
<td>显示每个报告产生时的时间</td>
</tr>
</tbody>
</table>
<p><strong><font color=teal>参考实例</font></strong></p>
<p>每隔两秒报告一次：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># iostat -d 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>每2秒报告一次，持续6次：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># iostat -d 2 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示sda与sdc的统计数据，每2秒报告一次，持续6次：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># iostat -x sda sdc 2 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>字段解析</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># iostat</span>
Linux <span class="token number">3.10</span>.0-1062.9.1.el7.x86_64 <span class="token punctuation">(</span>root<span class="token punctuation">)</span> 	<span class="token number">2022</span>年06月07日 	_x86_64_	<span class="token punctuation">(</span><span class="token number">48</span> CPU<span class="token punctuation">)</span>

avg-cpu:  %user   %nice %system %iowait  %steal   %idle
           <span class="token number">1.19</span>    <span class="token number">0.00</span>    <span class="token number">3.60</span>    <span class="token number">0.01</span>    <span class="token number">0.00</span>   <span class="token number">95.20</span>

Device:            tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn
nvme0n1           <span class="token number">0.56</span>        <span class="token number">23.49</span>         <span class="token number">2.63</span>    <span class="token number">1606516</span>     <span class="token number">179564</span>
sda               <span class="token number">1.01</span>        <span class="token number">20.67</span>         <span class="token number">2.66</span>    <span class="token number">1413473</span>     <span class="token number">181680</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>tps：该设备每秒的传输次数<br>
kB_read/s：每秒从设备（drive expressed）读取的数据量；<br>
kB_wrtn/s：每秒向设备（drive expressed）写入的数据量；<br>
kB_read：  读取的总数据量；<br>
kB_wrtn：写入的总数量数据量</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># iostat -d -x -k 1 1</span>
Linux <span class="token number">3.10</span>.0-1062.9.1.el7.x86_64 <span class="token punctuation">(</span>root<span class="token punctuation">)</span> 	<span class="token number">2022</span>年06月07日 	_x86_64_	<span class="token punctuation">(</span><span class="token number">48</span> CPU<span class="token punctuation">)</span>

Device:         rrqm/s   wrqm/s     r/s     w/s    rkB/s    wkB/s avgrq-sz avgqu-sz   await r_await w_await  svctm  %util
nvme0n1           <span class="token number">0.00</span>     <span class="token number">0.00</span>    <span class="token number">0.31</span>    <span class="token number">0.26</span>    <span class="token number">23.39</span>     <span class="token number">2.62</span>    <span class="token number">92.63</span>     <span class="token number">0.00</span>    <span class="token number">2.95</span>    <span class="token number">0.21</span>    <span class="token number">6.23</span>   <span class="token number">1.14</span>   <span class="token number">0.06</span>
sda               <span class="token number">0.02</span>     <span class="token number">0.18</span>    <span class="token number">0.68</span>    <span class="token number">0.32</span>    <span class="token number">20.58</span>     <span class="token number">2.65</span>    <span class="token number">46.20</span>     <span class="token number">0.01</span>    <span class="token number">6.65</span>    <span class="token number">5.35</span>    <span class="token number">9.42</span>   <span class="token number">3.03</span>   <span class="token number">0.31</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>#rrqm/s	每秒对该设备的读请求被合并次数，文件系统会对读取同块(block)的请求进行合并<br>
#wrqm/s	每秒对该设备的写请求被合并次数<br>
#r/s	每秒完成的读次数<br>
#w/s	每秒完成的写次数<br>
#rkB/s	每秒读数据量(kB为单位)<br>
#wkB/s	每秒写数据量(kB为单位)<br>
#avgrq-sz	平均每次IO操作的数据量(扇区数为单位)<br>
#avgqu-sz	平均等待处理的IO请求队列长度<br>
#await	平均每次IO请求等待时间(包括等待时间和处理时间，毫秒为单位)<br>
#svctm	平均每次IO请求的处理时间(毫秒为单位)<br>
#%util	采用周期内用于IO操作的时间比率，即IO队列非空的时间比率</p>
</blockquote>
<font color=red>#如果%util接近100%，说明产生的I/O请求太多，I/O系统已经满负荷</font><h2 id="四、iotop-–-监视磁盘i-o状态" tabindex="-1"><a class="header-anchor" href="#四、iotop-–-监视磁盘i-o状态" aria-hidden="true">#</a> 四、iotop – 监视磁盘I/O状态</h2>
<blockquote>
<p>iotop命令用来动态地查看磁盘IO情况,使用方法和top命令十分类似。iotop具有与top相似的UI，其中包括PID、用户、I/O、进程等相关信息。</p>
</blockquote>
<blockquote>
<p>Linux下的IO统计工具如iostat，nmon等大多数是只能统计到per设备的读写情况，如果你想知道每个进程是如何使用IO的就比较麻烦，使用iotop命令可以很方便的查看。</p>
</blockquote>
<font color=red>下载iotop命令要用yum在线源</font><p><strong><font color=teal>语法格式</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iotop <span class="token punctuation">[</span>参数<span class="token punctuation">]</span>
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
<td>-o</td>
<td>只显示有io操作的进程</td>
</tr>
<tr>
<td>-b</td>
<td>运行在非交互式的模式，主要用作记录到文件</td>
</tr>
<tr>
<td>-n NUM</td>
<td>在非交互式模式下，设置显示的次数，</td>
</tr>
<tr>
<td>-d SEC</td>
<td>设置显示的间隔秒数，支持非整数值</td>
</tr>
<tr>
<td>-p PID</td>
<td>只显示指定PID的信息</td>
</tr>
<tr>
<td>-u USER</td>
<td>监控的进程用户</td>
</tr>
</tbody>
</table>
<p><strong><font color=teal>参考实例</font></strong></p>
<p>使用-o参数只显示IO操作进程：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># iotop -o</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用-b参数批量显示，无交互：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># iotop -b</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用-u参数显示root用户的IO进程：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># iotop -u root</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>字段解析</font></strong></p>
<figure><img src="https://img-blog.csdnimg.cn/0477c53f82e04a53b3d56ec339464dfa.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>#Total DISK READ：从磁盘中读取的总速率<br>
#Total DISK WRITE：往磁盘里写入的总速率<br>
#Actual DISK READ：从磁盘中读取的实际速率<br>
#Actual DISK WRITE：往磁盘里写入的实际速率<br>
#TID：线程ID，按p可转换成进程ID<br>
#PRIO：优先级<br>
#USER：线程所有者<br>
#DISK READ：从磁盘中读取的速率<br>
#DISK WRITE：往磁盘里写入的速率<br>
#SWAPIN：swap交换百分比<br>
#IO&gt;：IO等待所占用的百分比<br>
#COMMAND：具体的进程命令</p>
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


