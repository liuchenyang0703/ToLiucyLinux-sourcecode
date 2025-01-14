<template><div><p>ss是Socket Statistics的缩写。ss命令用来显示处于活动状态的套接字信息。它可以显示和netstat类似的内容。但ss的优势在于它能够显示更多更详细的有关TCP和连接状态的信息，而且比netstat更快速更高效。</p>
<h2 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式"><span>语法格式：</span></a></h2>
<blockquote>
<p>ss [参数]</p>
</blockquote>
<h2 id="常用参数" tabindex="-1"><a class="header-anchor" href="#常用参数"><span>常用参数：</span></a></h2>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>-n</td>
<td>不解析服务名称，已数字方式显示</td>
</tr>
<tr>
<td>-a</td>
<td>显示所有套接字</td>
</tr>
<tr>
<td>-l</td>
<td>显示处于监听状态的套接字</td>
</tr>
<tr>
<td>-o</td>
<td>显示计时器信息</td>
</tr>
<tr>
<td>-e</td>
<td>显示详细的套接字信息</td>
</tr>
<tr>
<td>-m</td>
<td>显示套接字的内存使用情况</td>
</tr>
<tr>
<td>-p</td>
<td>显示使用套接字的进程</td>
</tr>
<tr>
<td>-i</td>
<td>显示内部的TCP信息</td>
</tr>
<tr>
<td>-s</td>
<td>显示套接字使用概况</td>
</tr>
<tr>
<td>-4</td>
<td>仅显示ipv4的套接字</td>
</tr>
<tr>
<td>-6</td>
<td>仅显示ipv6的套接字</td>
</tr>
<tr>
<td>-0</td>
<td>显示PACKET套接字</td>
</tr>
<tr>
<td>-t</td>
<td>只显示TCP套接字</td>
</tr>
<tr>
<td>-u</td>
<td>只显示UDP套接字</td>
</tr>
<tr>
<td>-d</td>
<td>只显示DCCP套接字</td>
</tr>
<tr>
<td>-w</td>
<td>只显示RAW套接字</td>
</tr>
<tr>
<td>-x</td>
<td>只显示 Unix套接字</td>
</tr>
<tr>
<td>-D</td>
<td>将原始TCP套接字信息转储到文件</td>
</tr>
</tbody>
</table>
<h2 id="参考实例" tabindex="-1"><a class="header-anchor" href="#参考实例"><span>参考实例：</span></a></h2>
<p>显示TCP套接字：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# ss -t -a </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">State</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">     Recv-Q</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">     Send-Q</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">     Local</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Address:Port</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">     Peer</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Address:Port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">LISTEN</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">          128</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        0.0.0.0:ssh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            0.0.0.0:</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">                                </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ESTAB</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">     0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">          52</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">         192.168.60.19:ssh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      192.168.30.21:59321</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">               </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">LISTEN</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">          128</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        *</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:websm</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">                *</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">               </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">LISTEN</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">          128</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        [::]:ssh               [::]:*</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示UDP套接字：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# ss -u -a</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">State</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">     Recv-Q</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">     Send-Q</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">     Local</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Address:Port</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">     Peer</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Address:Port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">              </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">UNCONN</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">          0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          0.0.0.0:bootpc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">         0.0.0.0:</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">                 </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">UNCONN</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">          0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          127.0.0.1:323</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          0.0.0.0:</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">                 </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">UNCONN</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">          0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">          [::1]:323              [::]:*</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示套接字使用概况：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# ss -s</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Total:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 185</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">TCP:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (estab </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> closed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 0,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> orphaned</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 0,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> timewait</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Transport</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Total</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">     IP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        IPv6</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">RAW</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">       1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">         0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">         1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">UDP</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">       3</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">         2</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">         1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">TCP</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">       4</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">         2</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">         2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">INET</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">      8</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">         4</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">         4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">FRAG</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">      0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">         0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">         0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


