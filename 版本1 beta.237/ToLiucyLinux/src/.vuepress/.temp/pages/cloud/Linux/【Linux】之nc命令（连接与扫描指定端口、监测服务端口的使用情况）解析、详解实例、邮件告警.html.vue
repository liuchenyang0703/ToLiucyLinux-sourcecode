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
<p>@[toc]</p>
<h1 id="nc命令简介" tabindex="-1"><a class="header-anchor" href="#nc命令简介" aria-hidden="true">#</a> nc命令简介</h1>
<blockquote>
<p>  nc命令来自于英文词组“Net Cat”的缩写，其功能是用于扫描与连接指定端口。nc命令是一个功能丰富的网络实用工具，被誉为网络界的瑞士军刀，短小精干，功能实用。它能够基于命令行在网络上读取和写入数据，连接与扫描指定端口号，支持TCP和UDP协议，为用户提供无限潜在用途。<br>
  主要用于扫描与监测指定端口。</p>
</blockquote>
<h1 id="nc命令的安装" tabindex="-1"><a class="header-anchor" href="#nc命令的安装" aria-hidden="true">#</a> nc命令的安装</h1>
<p>要有外网yum源</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">nc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="nc命令语法格式" tabindex="-1"><a class="header-anchor" href="#nc命令语法格式" aria-hidden="true">#</a> nc命令语法格式</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">nc</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span> 域名/IP地址 <span class="token punctuation">[</span>端口<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="nc命令常用参数" tabindex="-1"><a class="header-anchor" href="#nc命令常用参数" aria-hidden="true">#</a> nc命令常用参数</h1>
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
<h1 id="参考实例-❀为重点解析" tabindex="-1"><a class="header-anchor" href="#参考实例-❀为重点解析" aria-hidden="true">#</a> 参考实例（❀为重点解析）</h1>
<h2 id="扫描指定主机的8080端口-默认tcp" tabindex="-1"><a class="header-anchor" href="#扫描指定主机的8080端口-默认tcp" aria-hidden="true">#</a> 扫描指定主机的8080端口（默认TCP）：</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#扫描指定目标ip和端口</span>
<span class="token function">nc</span> <span class="token parameter variable">-nvv</span> <span class="token number">172.16</span>.11.210 <span class="token number">8080</span>

<span class="token comment">#扫描本地8080端口</span>
<span class="token function">nc</span> <span class="token parameter variable">-nvv</span> <span class="token number">127.0</span>.0.1 <span class="token number">8080</span>

<span class="token comment">#扫描指定目标IP和端口且输出详细信息</span>
<span class="token function">nc</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-z</span> <span class="token parameter variable">-w2</span> <span class="token number">172.16</span>.11.210 <span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/41d9af734479433eab7b2805e0273562.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<figure><img src="https://img-blog.csdnimg.cn/f79406d0470d4192a315cbec311a7196.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="❀扫描指定主机的1-100端口-指定为udp协议-扫描等待连线时间为2秒" tabindex="-1"><a class="header-anchor" href="#❀扫描指定主机的1-100端口-指定为udp协议-扫描等待连线时间为2秒" aria-hidden="true">#</a> ❀扫描指定主机的1-100端口，指定为UDP协议，扫描等待连线时间为2秒：</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#扫描成功与不成功都不会输出，可使用echo $?判断是否成功</span>
<span class="token function">nc</span> <span class="token parameter variable">-u</span> <span class="token parameter variable">-z</span> <span class="token parameter variable">-w2</span> <span class="token number">172.16</span>.11.210 <span class="token number">1</span>-100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="❀扫描指定主机的8088端口-并显示执行过程-扫描等待连线时间为2秒" tabindex="-1"><a class="header-anchor" href="#❀扫描指定主机的8088端口-并显示执行过程-扫描等待连线时间为2秒" aria-hidden="true">#</a> ❀扫描指定主机的8088端口，并显示执行过程，扫描等待连线时间为2秒：</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#加上-v扫描成功与不成功都会输出</span>
<span class="token function">nc</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-z</span> <span class="token parameter variable">-w2</span> <span class="token number">172.16</span>.11.210 <span class="token number">8088</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这是不成功的输出</p>
<figure><img src="https://img-blog.csdnimg.cn/76581ee66ded4b1ba0d49a294b7a8444.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>这是成功输出</p>
<figure><img src="https://img-blog.csdnimg.cn/5e05024863524e3ba9913a32b1fae2b2.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="扫描指定主机的80-85端口-并显示执行过程-扫描等待连线时间为2秒" tabindex="-1"><a class="header-anchor" href="#扫描指定主机的80-85端口-并显示执行过程-扫描等待连线时间为2秒" aria-hidden="true">#</a> 扫描指定主机的80-85端口，并显示执行过程，扫描等待连线时间为2秒：</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">nc</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-z</span> <span class="token parameter variable">-w2</span> <span class="token number">172.16</span>.11.210 <span class="token number">80</span>-85
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/fa72de8608854b44999aeedff896f176.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="扫描指定主机的1到65535的端口范围-只输出打开的端口-去掉-v参数即可" tabindex="-1"><a class="header-anchor" href="#扫描指定主机的1到65535的端口范围-只输出打开的端口-去掉-v参数即可" aria-hidden="true">#</a> 扫描指定主机的1到65535的端口范围，只输出打开的端口（去掉-v参数即可）</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">nc</span> <span class="token parameter variable">-z</span> <span class="token parameter variable">-w2</span> <span class="token number">172.16</span>.11.210 <span class="token number">1</span>-65535
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="❀批量检测服务器指定端口开放情况" tabindex="-1"><a class="header-anchor" href="#❀批量检测服务器指定端口开放情况" aria-hidden="true">#</a> ❀批量检测服务器指定端口开放情况：</h2>
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
<h2 id="当端口不通时设置告警" tabindex="-1"><a class="header-anchor" href="#当端口不通时设置告警" aria-hidden="true">#</a> 当端口不通时设置告警</h2>
<h3 id="linux邮件告警" tabindex="-1"><a class="header-anchor" href="#linux邮件告警" aria-hidden="true">#</a> Linux邮件告警</h3>
<blockquote>
<p>(1) 先在linux上安装邮件服务，比如直接下载emil或者mutt、sendmail，这里我安装的是<a href="https://liucy.blog.csdn.net/article/details/129257050" target="_blank" rel="noopener noreferrer">【Linux】部署mailx服务及发送邮件告警<ExternalLinkIcon/></a><br>
 <br>
(2) 修改上面的nc-ports.sh检测脚本，在显示失败fail的时候增加一行：<br>
……………………<br>
echo <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>l</mi><mi>i</mi><mi>n</mi><mi>e</mi><mo>:</mo><mi>f</mi><mi>a</mi><mi>i</mi><mi>l</mi><mi>e</mi><mi>c</mi><mi>h</mi><mi>o</mi><mi mathvariant="normal">&quot;</mi><mtext>服务器</mtext><mi mathvariant="normal">$</mi><mi>l</mi><mi>i</mi><mi>n</mi><mi>e</mi><mtext>端口不通，请尽快处理！</mtext><mi mathvariant="normal">&quot;</mi><mi mathvariant="normal">∣</mi><mi>m</mi><mi>a</mi><mi>i</mi><mi>l</mi><mo>−</mo><mi>s</mi><mi mathvariant="normal">&quot;</mi><mtext>【机房监控】服务器</mtext></mrow><annotation encoding="application/x-tex">line :fail
echo &quot;服务器 \$line 端口不通，请尽快处理！&quot; | mail -s &quot;【机房监控】服务器</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">in</span><span class="mord mathnormal">e</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal">ai</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">ec</span><span class="mord mathnormal">h</span><span class="mord mathnormal">o</span><span class="mord">&quot;</span><span class="mord cjk_fallback">服务器</span><span class="mord">$</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">in</span><span class="mord mathnormal">e</span><span class="mord cjk_fallback">端口不通，请尽快处理！</span><span class="mord">&quot;∣</span><span class="mord mathnormal">mai</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">s</span><span class="mord">&quot;</span><span class="mord cjk_fallback">【机房监控】服务器</span></span></span></span>line端口不通&quot; <a href="mailto:mail@139.com">mail@139.com</a><br>
……………………<br>
 <br>
(3) 如果上面的接收邮箱设置为移动139邮箱，并开启接收邮件短信告知，即可实现“短信告警”的功能。<br>
 <br>
(4) 也可以使用qq邮箱来发送告警<br>
 <br>
(5) 如果是在公司使用要给部门或多个人发送告警的话，可以批量发送；发件人是在配置邮件服务中设置的。<br>
……………………<br>
修改上面的nc-ports.sh检测脚本，在最上面加一个函数变量：<br>
mail_ALL=(邮箱1,邮箱2,邮箱3,邮箱4,邮箱5,邮箱6,邮箱7)<br>
 <br>
修改上面的nc-ports.sh检测脚本，在显示失败fail的时候增加一行：<br>
echo &quot;服务器 $line 端口不通，请尽快处理！&quot; | mail -s &quot;【机房监控】服务器$line端口不通&quot; $mail_ALL<br>
……………………</p>
</blockquote>
<p>更改完脚本为：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ncport<span class="token punctuation">]</span><span class="token comment"># cat nc-ports.sh</span>

<span class="token comment">#/bin/bash</span>

<span class="token assign-left variable">mail_ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>zhangsan@qq.com,lisi@qq.com,wangwu@qq.com<span class="token punctuation">)</span>

<span class="token comment"># 获取执行当前脚本的路径</span>
<span class="token assign-left variable">DIR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> <span class="token punctuation">$(</span>dirname $0<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">pwd</span> <span class="token variable">)</span></span>

<span class="token function">cat</span> <span class="token variable">$DIR</span>/ip-ports.txt <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> line<span class="token punctuation">;</span><span class="token keyword">do</span>
	<span class="token function">nc</span> <span class="token parameter variable">-w</span> <span class="token number">10</span> <span class="token parameter variable">-z</span> <span class="token variable">$line</span> <span class="token operator">></span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>></span><span class="token file-descriptor important">&amp;1</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span> <span class="token variable">$line</span>:ok
	<span class="token keyword">else</span>
		<span class="token builtin class-name">echo</span> <span class="token variable">$line</span>:fail
		<span class="token builtin class-name">echo</span> <span class="token string">"服务器 <span class="token variable">$line</span> 端口不通，请尽快处理！"</span> <span class="token operator">|</span> mail <span class="token parameter variable">-s</span> <span class="token string">"【机房监控】服务器<span class="token variable">$line</span>端口不通"</span> <span class="token variable">$mail_ALL</span>
	<span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要定时监控的话可以添加周期性计划任务，定时执行一下监测脚本，如果有fail就会告警发邮件；</p>
<blockquote>
<p>完整脚本地址：<a href="https://download.csdn.net/download/liu_chen_yang/88351954" target="_blank" rel="noopener noreferrer">shell批量检测服务端口脚本nc命令检测ip端口是否存在脚本（在linux中用于检测服务状态的）<ExternalLinkIcon/></a></p>
</blockquote>
<h3 id="zabbix告警" tabindex="-1"><a class="header-anchor" href="#zabbix告警" aria-hidden="true">#</a> zabbix告警</h3>
<blockquote>
<p>(1) 需要上面两个脚本（ip-ports.txt、<a href="http://nc-ports.sh" target="_blank" rel="noopener noreferrer">nc-ports.sh<ExternalLinkIcon/></a>），外加一个判断脚本，如下；一个脚本只能用于监测一个端口<br>
 <br>
(2) 需要在zabbix-agent配置文件中添加执行脚本命令；UserParameter=111,sh /etc/zabbix/zabbix_agentd.d/ncports/111/111.sh'<br>
 <br>
(3) 脚本及配置添加完成之后访问zabbix页面去添加监控服务，监控项、触发器....</p>
</blockquote>
<p>判断脚本如下:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ncport<span class="token punctuation">]</span><span class="token comment"># cat 111.sh </span>
<span class="token comment">#!/bin/bash</span>

<span class="token comment">#使用哪个端口写哪个，一个脚本只能用于监测一个端口，如果监测的ip端口是ok，则返回1，如果不是ok或者是没有，则返回0。</span>
<span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">sh</span> /etc/zabbix/zabbix_agentd.d/ncports/nc-ports.sh <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">"172.16.10.111 2222"</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">":"</span> <span class="token string">'{print $2}'</span><span class="token variable">)</span></span>
<span class="token comment">#echo $port</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">'$port'</span> <span class="token operator">==</span> <span class="token string">"ok"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"1"</span>
<span class="token keyword">else</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"0"</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="windows弹窗告警" tabindex="-1"><a class="header-anchor" href="#windows弹窗告警" aria-hidden="true">#</a> windows弹窗告警</h3>
<blockquote>
<p>(1) 先打开接收消息弹窗windows客户机的“Messenger”服务，设置为“启动”<br>
 <br>
(2) 利用smbclient命令来发送消息，net脚本文件如下：</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ncport<span class="token punctuation">]</span><span class="token comment"># cat /scripts/net.sh</span>

<span class="token comment">#!/bin/bash</span>
<span class="token comment">#/scripts/net.sh</span>
<span class="token keyword">case</span> <span class="token string">"<span class="token variable">$1</span>"</span> <span class="token keyword">in</span>
send<span class="token punctuation">)</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$3</span>"</span><span class="token operator">|</span>smbclient <span class="token parameter variable">-I</span> <span class="token string">"<span class="token variable">$2</span>"</span> <span class="token parameter variable">-M</span> <span class="token variable"><span class="token variable">`</span>nmblookup <span class="token parameter variable">-A</span> <span class="token string">"<span class="token variable">$2</span>"</span><span class="token operator">|</span><span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">'1d'</span> <span class="token parameter variable">-e</span> <span class="token string">'3,/*/d'</span><span class="token operator">|</span><span class="token function">cut</span> -f2<span class="token operator">|</span><span class="token function">cut</span> -d<span class="token string">' '</span> <span class="token parameter variable">-f1</span><span class="token variable">`</span></span>
<span class="token punctuation">;</span><span class="token punctuation">;</span>
*<span class="token punctuation">)</span>
<span class="token builtin class-name">echo</span> "Usage:net send
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linux邮件告警及zabbix告警的优缺点" tabindex="-1"><a class="header-anchor" href="#linux邮件告警及zabbix告警的优缺点" aria-hidden="true">#</a> linux邮件告警及zabbix告警的优缺点</h3>
<blockquote>
<p>……………………</p>
<font color=green>linux告警优点：</font>不用一个一个添加ip端口，可以直接去过滤甚至多个ip和端口不通会同一时间去告警<font color=green>zabbix告警优点：</font>可以自己定时去监控，如果失败了会告警，如果恢复了也会告诉一声；到达监控定时的时间如果还是失败，则跳过此次告警。<p> </p>
<font color=orange>linux告警缺点：</font>只会发送告警，不会发送恢复告警，而且必须手动写周期性计划任务定时监控，到时候没有恢复还会继续告警<font color=orange>zabbix告警缺点：</font>zabbix告警有些吃力，就你需要监控哪个端口，必须要一个一个写到监控配置中，而且必须要用到调用脚本，如果是ok会恢复告警，如果是fail会告警，但是有时候写错了，脚本中没有找到这个ip或者端口或者端口被停止找不到，则不反回，所以就必须要多加一个脚本。还要在页面添加监控项、触发器..<p>……………………</p>
<ul>
<li>推荐使用linux中邮件服务告警，然后用zabbix方式来监控邮件服务是否启动。</li>
<li>如果zabbix服务和linux邮件服务能互相取长补短就好了。</li>
<li>最后，根据自己的个人喜好吧，来定义用哪个告警方式。</li>
</ul>
</blockquote>
<hr>
<hr>
<h2 id="nc命令文件拷贝" tabindex="-1"><a class="header-anchor" href="#nc命令文件拷贝" aria-hidden="true">#</a> nc命令文件拷贝</h2>
<p>很多时候我们都要在两个不同的终端间拷贝文件，虽然说有很多种方法，例如：FTP、Samba、Scp等等，但我们仅仅需要一次临时的快捷的连接，不仅要安装软件，还要进行登录操作，如果这样的话那么大部分的时间都会被浪费掉。<br>
假设我们需要传输一个文件<code v-pre>bashtest.txt</code>，通过主机A发送到主机B。</p>
<p>发送端(A)：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">nc</span> <span class="token parameter variable">-l</span> <span class="token number">10000</span> <span class="token operator">&lt;</span> test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>-l 监听端口,管控传入的资料</li>
</ul>
<p>通过nc的-l参数将主机A变为服务器，并重定向netcat的输入为文件<code v-pre>bashtest.txt</code>，也就是我们想要传输的文件，那么当任何主机成功连接到该端口，netcat就会发送<code v-pre>bashtest.txt</code>的文件内容。</p>
<p>接收端(B)：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">nc</span> <span class="token parameter variable">-l</span> <span class="token number">172.16</span>.11.210 <span class="token number">10000</span> <span class="token operator">></span> test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>-n 不使用dns反向查询ip地址域名</li>
</ul>
<p>使用nc命令连接主机A的10000端口，并将输出重定向到test.txt。这样，当主机B连接到主机A时，就会接收到A发来的文件内容，并保存的文件test.txt<br>
反之也是如此，只不过将主机A与主机B的身份进行调换。顺带着，输入与输出重定向也要发生改变。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">(</span>接收端<span class="token punctuation">)</span>A: <span class="token function">nc</span> <span class="token parameter variable">-l</span> <span class="token number">10000</span> <span class="token operator">></span> test.txt

<span class="token punctuation">(</span>发送端<span class="token punctuation">)</span>B: <span class="token function">nc</span> <span class="token parameter variable">-n</span> <span class="token number">192.168</span>.78.128 <span class="token number">10000</span> <span class="token operator">&lt;</span> test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<hr>
<h2 id="nc命令目录传输" tabindex="-1"><a class="header-anchor" href="#nc命令目录传输" aria-hidden="true">#</a> nc命令目录传输</h2>
<p>使用nc传输目录实际上和传输文件手法一样，只不过将目录打包为压缩文件，再使用nc将压缩文件传输过去，客户端接收后将接收到的压缩文件解压。<br>
传输目录为test，其下有文件test.txt、test2.txt<br>
由主机A传输到主机B</p>
<p>发送方(A)：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zcvf</span> - <span class="token builtin class-name">test</span> <span class="token operator">|</span> <span class="token function">nc</span> <span class="token parameter variable">-l</span> <span class="token number">10000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>-z 使用gzip指令处理压缩文件</li>
<li>-c 创建新的压缩文件</li>
<li>-v 显示指令执行过程，即详细模式</li>
<li>-f 指定需要压缩的文件，即test文件夹</li>
</ul>
<p>接收方(B)：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">nc</span> <span class="token number">192.168</span>.78.128 <span class="token number">10000</span> <span class="token operator">|</span> <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>-z 使用gzip指令处理压缩文件</li>
<li>-x 从压缩文件中解压文件</li>
<li>-v 详细模式</li>
<li>-f 指定压缩文件</li>
</ul>
<p>- 代表linux中的标准输出流，将压缩后的文件直接输出到netcat中<br>
发送端接收到通过netcat传输来的文件，再使用tar指令解压文件</p>
<hr>
<hr>
<h2 id="nc命令在线聊天" tabindex="-1"><a class="header-anchor" href="#nc命令在线聊天" aria-hidden="true">#</a> nc命令在线聊天</h2>
<p>通过netcat实现在线聊天室也需要C/S结构，服务端监听本地端口，客户端直接连接到远程服务器端口。</p>
<p>服务端：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">nc</span> <span class="token parameter variable">-l</span> <span class="token parameter variable">-p</span> <span class="token number">10000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>客户端：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">nc</span> <span class="token number">192.168</span>.78.128 <span class="token number">10000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>-l 监听模式</li>
<li>-p 指定本地端口，在实际应用中可以省略</li>
</ul>
<figure><img src="https://img-blog.csdnimg.cn/99cc51f961ad4751bd7dd17d73d8b768.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</div></template>


