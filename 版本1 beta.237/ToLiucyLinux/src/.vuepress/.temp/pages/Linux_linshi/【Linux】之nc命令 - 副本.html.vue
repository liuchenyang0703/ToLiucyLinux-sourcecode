<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<h2 id="nc命令简介" tabindex="-1"><a class="header-anchor" href="#nc命令简介" aria-hidden="true">#</a> nc命令简介</h2>
<blockquote>
<p>  nc命令来自于英文词组“Net Cat”的缩写，其功能是用于扫描与连接指定端口。nc命令是一个功能丰富的网络实用工具，被誉为网络界的瑞士军刀，短小精干，功能实用。它能够基于命令行在网络上读取和写入数据，连接与扫描指定端口号，支持TCP和UDP协议，为用户提供无限潜在用途。<br>
  主要用于扫描与监测指定端口。</p>
</blockquote>
<h2 id="nc命令的安装" tabindex="-1"><a class="header-anchor" href="#nc命令的安装" aria-hidden="true">#</a> nc命令的安装</h2>
<p>要有外网yum源</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">nc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="nc命令语法格式" tabindex="-1"><a class="header-anchor" href="#nc命令语法格式" aria-hidden="true">#</a> nc命令语法格式</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">nc</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span> 域名/IP地址 <span class="token punctuation">[</span>端口<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="nc命令常用参数" tabindex="-1"><a class="header-anchor" href="#nc命令常用参数" aria-hidden="true">#</a> nc命令常用参数</h2>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>-l</td>
<td>使用监听模式，管控传入的资料</td>
</tr>
<tr>
<td>-p</td>
<td>设置本地主机使用的通信端口</td>
</tr>
<tr>
<td>-s</td>
<td>设置本地主机送出数据包的IP地址</td>
</tr>
<tr>
<td>-u</td>
<td>使用UDP传输协议</td>
</tr>
<tr>
<td>-v</td>
<td>显示指令执行过程</td>
</tr>
<tr>
<td>-w</td>
<td>设置等待连线的时间</td>
</tr>
<tr>
<td>-z</td>
<td>使用0输入/输出模式，只在扫描通信端口时使用</td>
</tr>
<tr>
<td>-n</td>
<td>不使用dns反向查询ip地址域名</td>
</tr>
</tbody>
</table>
<h2 id="参考实例-❀为重点解析" tabindex="-1"><a class="header-anchor" href="#参考实例-❀为重点解析" aria-hidden="true">#</a> 参考实例（❀为重点解析）</h2>
<h3 id="扫描指定主机的8080端口-默认tcp" tabindex="-1"><a class="header-anchor" href="#扫描指定主机的8080端口-默认tcp" aria-hidden="true">#</a> 扫描指定主机的8080端口（默认TCP）：</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#扫描指定目标ip和端口</span>
<span class="token function">nc</span> <span class="token parameter variable">-nvv</span> <span class="token number">172.16</span>.11.210 <span class="token number">8080</span>

<span class="token comment">#扫描本地8080端口</span>
<span class="token function">nc</span> <span class="token parameter variable">-nvv</span> <span class="token number">127.0</span>.0.1 <span class="token number">8080</span>

<span class="token comment">#扫描指定目标IP和端口且输出详细信息</span>
<span class="token function">nc</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-z</span> <span class="token parameter variable">-w2</span> <span class="token number">172.16</span>.11.210 <span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181627050.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181627937.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="❀扫描指定主机的1-100端口-指定为udp协议-扫描等待连线时间为2秒" tabindex="-1"><a class="header-anchor" href="#❀扫描指定主机的1-100端口-指定为udp协议-扫描等待连线时间为2秒" aria-hidden="true">#</a> ❀扫描指定主机的1-100端口，指定为UDP协议，扫描等待连线时间为2秒：</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#扫描成功与不成功都不会输出，可使用echo $?判断是否成功</span>
<span class="token function">nc</span> <span class="token parameter variable">-u</span> <span class="token parameter variable">-z</span> <span class="token parameter variable">-w2</span> <span class="token number">172.16</span>.11.210 <span class="token number">1</span>-100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="❀扫描指定主机的8088端口-并显示执行过程-扫描等待连线时间为2秒" tabindex="-1"><a class="header-anchor" href="#❀扫描指定主机的8088端口-并显示执行过程-扫描等待连线时间为2秒" aria-hidden="true">#</a> ❀扫描指定主机的8088端口，并显示执行过程，扫描等待连线时间为2秒：</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#加上-v扫描成功与不成功都会输出</span>
<span class="token function">nc</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-z</span> <span class="token parameter variable">-w2</span> <span class="token number">172.16</span>.11.210 <span class="token number">8088</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这是不成功的输出</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181627880.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这是成功输出</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181627327.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="扫描指定主机的80-85端口-并显示执行过程-扫描等待连线时间为2秒" tabindex="-1"><a class="header-anchor" href="#扫描指定主机的80-85端口-并显示执行过程-扫描等待连线时间为2秒" aria-hidden="true">#</a> 扫描指定主机的80-85端口，并显示执行过程，扫描等待连线时间为2秒：</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">nc</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-z</span> <span class="token parameter variable">-w2</span> <span class="token number">172.16</span>.11.210 <span class="token number">80</span>-85
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181627564.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="扫描指定主机的1到65535的端口范围-只输出打开的端口-去掉-v参数即可" tabindex="-1"><a class="header-anchor" href="#扫描指定主机的1到65535的端口范围-只输出打开的端口-去掉-v参数即可" aria-hidden="true">#</a> 扫描指定主机的1到65535的端口范围，只输出打开的端口（去掉-v参数即可）</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">nc</span> <span class="token parameter variable">-z</span> <span class="token parameter variable">-w2</span> <span class="token number">172.16</span>.11.210 <span class="token number">1</span>-65535
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="❀批量检测服务器指定端口开放情况" tabindex="-1"><a class="header-anchor" href="#❀批量检测服务器指定端口开放情况" aria-hidden="true">#</a> ❀批量检测服务器指定端口开放情况：</h3>
<blockquote>
<p>1、假如我们要监控一堆指定的IP和端口，可新建一个文件（第1列服务器IP，第2列要监控的端口）。</p>
<font color=red>要注意：写ip和端口的文件中不能有注释不能有空行，只能是ip 端口；如果后面跟注释，会是失败，空行也会读取为失败</font><p>ip可自行写要监控的ip地址端口同意。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ncport<span class="token punctuation">]</span><span class="token comment"># cat ip-ports.txt</span>

<span class="token number">172.16</span>.11.210 <span class="token number">80</span>
<span class="token number">172.16</span>.11.210 <span class="token number">6379</span>
<span class="token number">172.16</span>.11.210 <span class="token number">18000</span>
<span class="token number">172.16</span>.11.211 <span class="token number">3306</span>
<span class="token number">172.16</span>.11.212 <span class="token number">10001</span>
<span class="token number">172.16</span>.11.209 <span class="token number">8099</span>
<span class="token number">172.16</span>.11.210 <span class="token number">8088</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、使用脚本监测判断服务端口是否开放，成功会返回0值显示ok，失败会返回1值显示fail。<br>
借用上面一步的文件，文件内容是自己要监控的ip地址端口。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ncport<span class="token punctuation">]</span><span class="token comment"># cat nc-ports.sh </span>

<span class="token comment">#/bin/bash</span>

<span class="token comment"># 获取执行当前脚本的路径</span>
<span class="token assign-left variable">DIR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> <span class="token punctuation">$(</span>dirname $0<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">pwd</span> <span class="token variable">)</span></span>

<span class="token function">cat</span> <span class="token variable">$DIR</span>/ip-ports.txt <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> line<span class="token punctuation">;</span><span class="token keyword">do</span>
	<span class="token function">nc</span> <span class="token parameter variable">-w</span> <span class="token number">10</span> <span class="token parameter variable">-z</span> <span class="token variable">$line</span> <span class="token operator">></span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>></span><span class="token file-descriptor important">&amp;1</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span> <span class="token variable">$line</span>:ok
	<span class="token keyword">else</span>
		<span class="token builtin class-name">echo</span> <span class="token variable">$line</span>:fail
	<span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、执行脚本查看运行结果如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ncport<span class="token punctuation">]</span><span class="token comment"># sh nc-ports.sh </span>

<span class="token number">172.16</span>.11.210 <span class="token number">80</span>:fail
<span class="token number">172.16</span>.11.210 <span class="token number">6379</span>:fail
<span class="token number">172.16</span>.11.210 <span class="token number">18000</span>:fail
<span class="token number">172.16</span>.11.211 <span class="token number">3306</span>:fail
<span class="token number">172.16</span>.11.212 <span class="token number">10001</span>:fail
<span class="token number">172.16</span>.11.209 <span class="token number">8099</span>:fail
<span class="token number">172.16</span>.11.210 <span class="token number">8088</span>:ok
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<hr>
<h3 id="当端口不通时设置告警" tabindex="-1"><a class="header-anchor" href="#当端口不通时设置告警" aria-hidden="true">#</a> 当端口不通时设置告警</h3>
<h4 id="linux邮件告警" tabindex="-1"><a class="header-anchor" href="#linux邮件告警" aria-hidden="true">#</a> Linux邮件告警</h4>
<blockquote>
<p>(1) 先在linux上安装邮件服务，比如直接下载emil或者mutt、sendmail，这里我安装的是<a href="https://liucy.blog.csdn.net/article/details/129257050" target="_blank" rel="noopener noreferrer">【Linux】部署mailx服务及发送邮件告警<ExternalLinkIcon/></a><br>
 <br>
(2) 修改上面的nc-ports.sh检测脚本，在显示失败fail的时候增加一行：<br>
……………………<br>
<code v-pre>echo $line :fail</code><br>
<code v-pre>echo &quot;服务器 \$line 端口不通，请尽快处理！&quot; | mail -s &quot;【机房监控】服务器$line端口不通&quot; mail@139.com</code><br>
……………………</p>
</blockquote>
</div></template>


