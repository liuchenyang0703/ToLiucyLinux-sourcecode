<template><div><p>@[toc]<br>
ss是Socket Statistics的缩写。ss命令用来显示处于活动状态的套接字信息。它可以显示和netstat类似的内容。但ss的优势在于它能够显示更多更详细的有关TCP和连接状态的信息，而且比netstat更快速更高效。</p>
<h2 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式：</h2>
<blockquote>
<p>ss [参数]</p>
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
<h2 id="参考实例" tabindex="-1"><a class="header-anchor" href="#参考实例" aria-hidden="true">#</a> 参考实例：</h2>
<p>显示TCP套接字：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># ss -t -a </span>
State     Recv-Q     Send-Q     Local Address:Port     Peer Address:Port   
LISTEN    <span class="token number">0</span>          <span class="token number">128</span>        <span class="token number">0.0</span>.0.0:ssh            <span class="token number">0.0</span>.0.0:*                                
ESTAB     <span class="token number">0</span>          <span class="token number">52</span>         <span class="token number">192.168</span>.60.19:ssh      <span class="token number">192.168</span>.30.21:59321               
LISTEN    <span class="token number">0</span>          <span class="token number">128</span>        *:websm                *:*               
LISTEN    <span class="token number">0</span>          <span class="token number">128</span>        <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:ssh               <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:* 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示UDP套接字：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># ss -u -a</span>
State     Recv-Q     Send-Q     Local Address:Port     Peer Address:Port              
UNCONN    <span class="token number">0</span>          <span class="token number">0</span>          <span class="token number">0.0</span>.0.0:bootpc         <span class="token number">0.0</span>.0.0:*                 
UNCONN    <span class="token number">0</span>          <span class="token number">0</span>          <span class="token number">127.0</span>.0.1:323          <span class="token number">0.0</span>.0.0:*                 
UNCONN    <span class="token number">0</span>          <span class="token number">0</span>          <span class="token punctuation">[</span>::1<span class="token punctuation">]</span>:323              <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:*  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示套接字使用概况：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># ss -s</span>
Total: <span class="token number">185</span>
TCP:   <span class="token number">4</span> <span class="token punctuation">(</span>estab <span class="token number">1</span>, closed <span class="token number">0</span>, orphaned <span class="token number">0</span>, timewait <span class="token number">0</span><span class="token punctuation">)</span>
Transport Total     IP        IPv6
RAW       <span class="token number">1</span>         <span class="token number">0</span>         <span class="token number">1</span>        
UDP       <span class="token number">3</span>         <span class="token number">2</span>         <span class="token number">1</span>        
TCP       <span class="token number">4</span>         <span class="token number">2</span>         <span class="token number">2</span>        
INET      <span class="token number">8</span>         <span class="token number">4</span>         <span class="token number">4</span>        
FRAG      <span class="token number">0</span>         <span class="token number">0</span>         <span class="token number">0</span>        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/f58471169d8f419f8585079d5568d49d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>              <font size=5>总文章在：<a href="https://blog.csdn.net/liu_chen_yang/article/details/114872010?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Linux常用命令<ExternalLinkIcon/></a><br>
<img src="https://img-blog.csdnimg.cn/b6c5a9e4a5af4687a64e020cac19eb09.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="" loading="lazy"></p>
</div></template>


