<template><div><h2 id="一、网络带宽命令" tabindex="-1"><a class="header-anchor" href="#一、网络带宽命令" aria-hidden="true">#</a> 一、网络带宽命令</h2>
<h3 id="_1、ethtool-–-查询与设置网卡参数" tabindex="-1"><a class="header-anchor" href="#_1、ethtool-–-查询与设置网卡参数" aria-hidden="true">#</a> 1、ethtool – 查询与设置网卡参数</h3>
<blockquote>
<p>ethtool命令用于查询ethX网口基本设置、及设置网卡的参数。</p>
</blockquote>
<p><strong><font color=teal>语法格式</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ethtool</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span>
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
<td>-i</td>
<td>显示网卡驱动的信息</td>
</tr>
<tr>
<td>-E</td>
<td>修改网卡只读存储器字节</td>
</tr>
<tr>
<td>-K</td>
<td>修改网卡 Offload 的状态</td>
</tr>
<tr>
<td>ethx</td>
<td>查询ethx网口基本设置，其中 x 是对应网卡的编号，如eth0、eth1等</td>
</tr>
<tr>
<td>-s</td>
<td>修改网卡的部分配置</td>
</tr>
<tr>
<td>-t</td>
<td>让网卡执行自我检测</td>
</tr>
</tbody>
</table>
<p><strong><font color=teal>参考实例</font></strong></p>
<p>查询网口基本设置：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># ethtool eth0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询网口的驱动相关信息：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># ethtool -i eth0                                                                                        driver: e1000</span>
version: <span class="token number">7.3</span>.21-k8-NAPI
firmware-version: 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置网口工作方式：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># ethtool -s eth0 autoneg off speed 100 duplex full </span>
<span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># ethtool eth0     </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看网卡，在接收/发送数据时，有没有出错 ：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># ethtool -S eth0      </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>停止网卡的发送模块TX:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># ethtool -A tx off eth0       </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2、nload-–-实时统计网卡带宽使用率工具" tabindex="-1"><a class="header-anchor" href="#_2、nload-–-实时统计网卡带宽使用率工具" aria-hidden="true">#</a> 2、nload – 实时统计网卡带宽使用率工具</h3>
<p><strong><font color=teal>语法格式</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>nload <span class="token punctuation">[</span>网卡<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>参考实例</font></strong><br>
指定监测一个网卡流量：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># nload eno1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181604595.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>监测所有网卡的流量：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># nload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181604093.png" alt="" loading="lazy"><br>
按【回车健】查看下一个网卡监测情况；</p>
<p><strong><font color=teal>字段解析</font></strong></p>
<blockquote>
<p>Curr：当前流量 Avg：平均流量 Min：最小流量 Max：最大流量 Ttl：总流量</p>
</blockquote>
<h2 id="二、网络命令" tabindex="-1"><a class="header-anchor" href="#二、网络命令" aria-hidden="true">#</a> 二、网络命令</h2>
<h3 id="_1、nethogs-–-实时统计网络带宽使用率工具" tabindex="-1"><a class="header-anchor" href="#_1、nethogs-–-实时统计网络带宽使用率工具" aria-hidden="true">#</a> 1、nethogs – 实时统计网络带宽使用率工具</h3>
<blockquote>
<p>nethogs是一个小型的net top工具，不像大多数工具那样拖慢每个协议或者是每个子网的速度而是按照进程进行带宽分组。NetHogs不需要依赖载入某个特殊的内核模块。如果发生了网络阻塞你可以启动NetHogs立即看到哪个PID造成的这种状况。这样就很容易找出哪个程序跑飞了然后突然占用你的带宽。</p>
</blockquote>
<p><strong><font color=teal>语法格式</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>nethogs <span class="token punctuation">[</span>参数<span class="token punctuation">]</span> <span class="token punctuation">[</span>设备<span class="token punctuation">]</span>
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
<td>device(s)</td>
<td>要监控的设备，默认“eth0”</td>
</tr>
<tr>
<td>-d</td>
<td>以秒为单位的界面刷新频率。用于控制界面的更新速度。默认为一秒</td>
</tr>
<tr>
<td>-v</td>
<td>选择查看模式。参数mode的取值为：“0” = KB/s；“1” = total KB, “2” = total B, “3” = total MB。默认为“0”</td>
</tr>
<tr>
<td>-p</td>
<td>混杂模式的嗅探器</td>
</tr>
<tr>
<td>-t</td>
<td>追踪模式</td>
</tr>
<tr>
<td>--c</td>
<td>限制刷新的次数，通常与-t选项配合使用</td>
</tr>
<tr>
<td>-s</td>
<td>根据输出中的SENT列进行排序</td>
</tr>
</tbody>
</table>
<p><strong><font color=teal>参考实例</font></strong></p>
<p>设置5秒刷新一次：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># nethogs -d 5 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>监视设备（eth0）的网络带宽：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># nethogs eth0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用追踪模式：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># nethogs -t </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># nethogs </span>
Ethernet <span class="token function">link</span> detected
                      Waiting <span class="token keyword">for</span> first packet to arrive <span class="token punctuation">(</span>see sourceforge.net bug <span class="token number">1019381</span><span class="token punctuation">)</span>

NetHogs version <span class="token number">0.8</span>.5

    PID <span class="token environment constant">USER</span>     PROGRAM                            DEV        SENT      RECEIVED       
   <span class="token number">2010</span> root     sshd: root@pts/0,pts/1,pts/2       ens33	<span class="token number">0.129</span>       <span class="token number">0.059</span> KB/sec
      ? root     unknown TCP                                    <span class="token number">0.000</span>       <span class="token number">0.000</span> KB/sec

  TOTAL                                                         <span class="token number">0.129</span>       <span class="token number">0.059</span> KB/sec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、iftop-–-套接字及进程的网络利用率" tabindex="-1"><a class="header-anchor" href="#_2、iftop-–-套接字及进程的网络利用率" aria-hidden="true">#</a> 2、iftop – 套接字及进程的网络利用率</h3>
<blockquote>
<p>  iftop是一款实时流量监控工具,监控TCP/IP连接等,缺点就是无报表功能。必须以root身份才能运行。<br>
  iftop可测量通过每一个套接字连接传输的数据；它采用的工作方式有别于nload。iftop使用pcap库来捕获进出网络适配器的数据包，然后汇总数据包大小和数量，搞清楚总的带宽使用情况。<br>
  虽然iftop报告每个连接所使用的带宽，但它无法报告参与某个套按字连接的进程名称/编号（ID）。不过由于基于pcap库，iftop能够过滤流量，并报告由过滤器指定的所选定主机连接的带宽使用情况。</p>
</blockquote>
<p><strong><font color=teal>语法格式</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iftop <span class="token punctuation">[</span>参数<span class="token punctuation">]</span>
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
<td>-i</td>
<td>指定要监控的网卡</td>
</tr>
<tr>
<td>-n</td>
<td>直接显示IP, 不进行DNS反解析</td>
</tr>
</tbody>
</table>
<p><strong><font color=teal>参考实例</font></strong></p>
<p>默认监控第一块网卡的流量：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># iftop </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>监控eth1网卡的流量：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># iftop -i eth1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>直接显示IP, 不进行DNS反解析：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># iftop -n</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181604811.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_3、iptraf-–-实时监视网卡流量" tabindex="-1"><a class="header-anchor" href="#_3、iptraf-–-实时监视网卡流量" aria-hidden="true">#</a> 3、iptraf – 实时监视网卡流量</h3>
<blockquote>
<p>  iptraf是一款交互式、色彩鲜艳的IP局域网监控工具。它可以显示每个连接以及主机之间传输的数据量。<br>
  iptraf命令的全拼是“IP traffic monitor”，iptraf命令可以实时地监视网卡流量，可以生成网络协议数据包信息、以太网信息、网络节点状态和ip校验和错误等信息。<br>
  iptraf命令支持命令行和菜单操作两种方式，当不带任何参数是iptraf命令将进入菜单操作方式，通过屏幕菜单来执行相应操作。</p>
</blockquote>
<p><strong><font color=teal>语法格式</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptraf <span class="token punctuation">[</span>参数<span class="token punctuation">]</span> <span class="token punctuation">[</span>网卡<span class="token punctuation">]</span>
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
<td>-i</td>
<td>立即在指定网络接口上开启IP流量监视</td>
</tr>
<tr>
<td>-g</td>
<td>立即开始生成网络接口的概要状态信息</td>
</tr>
<tr>
<td>-d</td>
<td>在指定网络接口上立即开始监视明细的网络流量信息</td>
</tr>
<tr>
<td>-s</td>
<td>在指定网络接口上立即开始监视TCP和UDP网络流量信息</td>
</tr>
<tr>
<td>-z</td>
<td>在指定网络接口上显示包计数</td>
</tr>
<tr>
<td>-l</td>
<td>在指定网络接口上立即开始监视局域网工作站信息</td>
</tr>
<tr>
<td>-t</td>
<td>指定命令监视的时间</td>
</tr>
<tr>
<td>-B</td>
<td>将标注输出重新定向到“/dev/null”，关闭标注输入，将程序作为后台进程运行</td>
</tr>
<tr>
<td>-f</td>
<td>清空所有计数器</td>
</tr>
<tr>
<td>-h</td>
<td>显示帮助信息</td>
</tr>
</tbody>
</table>
<p><strong><font color=teal>参考实例</font></strong></p>
<p>监视网卡eth0的详细流量：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># iptraf -d eth0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>监视网卡eth0的详细ip流量：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># iptraf -i eth0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>监视网卡eth0的详细tcp/udp流量：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># iptraf -s eth0 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>监视网络接口的概要状态信息：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># iptraf-ng</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181604434.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_4、ifstat-–-统计网络信息" tabindex="-1"><a class="header-anchor" href="#_4、ifstat-–-统计网络信息" aria-hidden="true">#</a> 4、ifstat – 统计网络信息</h3>
<blockquote>
<p>  ifstat命令就像iostat/vmstat描述其它的系统状况一样，是一个统计网络接口活动状态的工具。ifstat工具系统中并不默认安装，需要自己下载源码包，重新编译安装，使用过程相对比较简单。<br>
  ifstat能够以批处理式模式显示网络带宽。输出采用的一种格式便于用户使用其他程序或实用工具来记入日志和分析。</p>
</blockquote>
<p><strong><font color=teal>语法格式</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ifstat <span class="token punctuation">[</span>参数<span class="token punctuation">]</span>
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
<td>-p</td>
<td>优化打印</td>
</tr>
<tr>
<td>-a</td>
<td>忽略历史记录</td>
</tr>
<tr>
<td>-e</td>
<td>显示错误信息</td>
</tr>
<tr>
<td>-r</td>
<td>重置历史记录</td>
</tr>
</tbody>
</table>
<p><strong><font color=teal>参考实例</font></strong></p>
<p>使用-p参数打印网络接口流量信息：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># ifstat -p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用-a参数忽略历史记录：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># ifstat -a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用-e参数显示网络接口错误信息：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@root ~<span class="token punctuation">]</span><span class="token comment"># ifstat -e</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
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


