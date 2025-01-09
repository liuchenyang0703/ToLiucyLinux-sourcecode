<template><div><h2 id="一、内存相关命令" tabindex="-1"><a class="header-anchor" href="#一、内存相关命令" aria-hidden="true">#</a> 一、内存相关命令</h2>
<h3 id="_1、free-–-显示系统内存使用量情况" tabindex="-1"><a class="header-anchor" href="#_1、free-–-显示系统内存使用量情况" aria-hidden="true">#</a> 1、free – 显示系统内存使用量情况</h3>
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
<font color=red>#total：物理内存大小，就是机器实际的内存<br>
#used：已使用的内存大小，这个值包括了cached和应用程序实际使用的内存<br>
#free：未被使用的内存大小（俗称：空闲内存）<br>
#shared：共享内存大小，是进程间通信的一种方式<br>
#buffers：被缓冲区占用的内存大小<br>
#cached：被缓存占用的内存大小</font></blockquote>
</div></template>


