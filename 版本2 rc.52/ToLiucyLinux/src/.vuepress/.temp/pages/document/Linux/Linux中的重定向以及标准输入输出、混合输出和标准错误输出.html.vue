<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者</a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主</a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主</a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区</a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<h2 id="重定向统计列表" tabindex="-1"><a class="header-anchor" href="#重定向统计列表"><span>重定向统计列表</span></a></h2>
<table>
	<tr>
		<th>类型</th> 
	    <th>命令</th>
	    <th>作用</th>
	</tr >
	<tr >
	    <td>标准输入重定向	</td>
	    <td>echo "123" &lt file	</td>
	    <td>将输入的数字展示到终端上。</td>
	</tr>
	<tr >
	    <td rowspan="2">标准输出重定向	</td>
	    <td>command > file	</td>
	    <td>以覆盖的方式，把 command 的正确输出结果输出到 file 文件中。</td>
	</tr>
	<tr>
	    <td>command >> file	</td>
	    <td>以追加的方式，把 command 的正确输出结果输出到 file 文件中。</td>
	</tr>
		<tr >
	    <td rowspan="2">标准错误输出重定向</td>
	    <td>command 2> file	</td>
	    <td>以覆盖的方式，把 command 的错误信息输出到 file 文件中。</td>
	</tr>
	<tr>
	    <td>command 2>> file</td>
	    <td>以追加的方式，把 command 的错误信息输出到 file 文件中。</td>
	</tr>
		<tr >
	    <td rowspan="4">正确输出和错误信息同时保存	</td>
	    <td>command > file 2>&1	</td>
	    <td>以覆盖的方式，把正确输出和错误信息同时保存到同一个文件（file）中。</td>
	</tr>
	<tr>
	    <td>command >> file 2>&1</td>
	    <td>以追加的方式，把正确输出和错误信息同时保存到同一个文件（file）中。</td>
	</tr>
		<tr>
	    <td>command >file1 2>file2	</td>
	    <td>以覆盖的方式，把正确的输出结果输出到 file1 文件中，把错误信息输出到 file2 文件中。</td>
	</tr>
		<tr>
	    <td>command >>file1 2>>file2</td>
	    <td>以追加的方式，把正确的输出结果输出到 file1 文件中，把错误信息输出到 file2 文件中。
</td>
	</tr>
</table>
<h2 id="标准输入重定向" tabindex="-1"><a class="header-anchor" href="#标准输入重定向"><span>标准输入重定向：</span></a></h2>
<p>  标准输入（stdin）通常是指从终端或命令行界面接收输入数据的通道。当你在终端中输入命令并按下回车键时，你的输入就会被发送到标准输入。</p>
<p>标准输入通常用文件描述符（file descriptor）表示，其中stdin的文件描述符为0。在程序中，你可以使用这个文件描述符来读取从标准输入传来的数据。</p>
<p>以下是一些与标准输入相关的常见操作：</p>
<ol>
<li>从标准输入读取一行文本：</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "请输入您的名字："</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">read</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> name</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "您好，</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">！"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>将命令的输出重定向到标准输入：</li>
</ol>
<p>如果没有后面的文件，需要先创建：<code v-pre>touch a.txt</code></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "123"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">a.txt</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这将输入的内容<code v-pre>123</code>显示在终端上。</p>
<h2 id="标准输出重定向" tabindex="-1"><a class="header-anchor" href="#标准输出重定向"><span>标准输出重定向：</span></a></h2>
<p>  标准输出（stdout）是指默认情况下将进程的输出结果发送到终端的通道。当你运行一个程序或命令时，它通常会将输出内容显示在终端上，这就是标准输出的作用。</p>
<ul>
<li>标准输出（输出第二次则覆盖第一次的内容）</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "abc"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> > </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">a.txt</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 覆盖a.txt内容</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "abc"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> > </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">a.txt</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "123"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> > </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">a.txt</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 输入了两个文字，但是只存留了最后一个，因为>代表的是标准输入（输出第二次则覆盖第一次的内容）</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>标准输出（追加输出）&gt;&gt;</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "123"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> > </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">a.txt</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "123123"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> >> </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">a.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#此时，a.txt中内容为：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">123</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">123123</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用命令查询输入到一个文件中（工作中最常用的）</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ls</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> > </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">a.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 输出完之后可以使用cat查看</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="混合输出重定向" tabindex="-1"><a class="header-anchor" href="#混合输出重定向"><span>混合输出重定向：</span></a></h2>
<p>  可以使用管道符号（<code v-pre>|</code>）将两个或多个命令的输出进行混合，并将结果重定向到文件或其他命令的输入。</p>
<p>下面是一个将两个命令的输出混合并重定向到文件的示例：</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">command1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">command2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> > </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">output.txt</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在这个示例中，<code v-pre>command1</code>的输出会被作为<code v-pre>command2</code>的输入，并且它们的输出结果会被重定向到<code v-pre>output.txt</code>文件中。</p>
<p>如果你要将一个命令的输出同时重定向到文件和其他命令的输入，你可以使用多个重定向符号：</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> > </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">output.txt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> 2>&#x26;1 | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">command2</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在这个示例中，<code v-pre>command</code>的输出会被重定向到<code v-pre>output.txt</code>文件中，并且标准错误输出（<code v-pre>stderr</code>）会被重定向到标准输出（<code v-pre>stdout</code>），然后再将标准输出作为<code v-pre>command2</code>的输入。</p>
<h2 id="标准错误输出重定向" tabindex="-1"><a class="header-anchor" href="#标准错误输出重定向"><span>标准错误输出重定向：</span></a></h2>
<p>例如：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">LS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> > </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">a.txt</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 默认这个会直接再也没上输入【bash: LS: command not found】，而a.txt.里是空的</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 想要将错误的信息也输出到a.txt中，我们可以使用标准错误</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">LS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> 2> </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">a.txt</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 这样cat查看你的时候，错误信息就可以看到了。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><font color=green>实例：</font></strong></p>
<blockquote>
<p>yum -y install bind bind-utils &amp;&gt; /dev/null &amp;&amp; echo &quot;ok&quot; || echo &quot;not ok&quot;<br><br>
(安装一个bind和bind-utils把安装时候输出的内容全部放到/dev/null,[/dev/null相当于一个回收站，输出到这里面就直接清空]然后如果安装成功就输出ok，安装失败就输出not ok)</p>
</blockquote>
<h2 id="文件描述符" tabindex="-1"><a class="header-anchor" href="#文件描述符"><span>文件描述符</span></a></h2>
<table>
<thead>
<tr>
<th>文件描述符</th>
<th>文件名</th>
<th>类型</th>
<th>硬件</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>stdin</td>
<td>标准输入文件</td>
<td>键盘</td>
</tr>
<tr>
<td>1</td>
<td>stdout</td>
<td>标准输出文件</td>
<td>显示器</td>
</tr>
<tr>
<td>2</td>
<td>stderr</td>
<td>标准错误输出文件</td>
<td>显示器</td>
</tr>
</tbody>
</table>
<p>实例：运行一个jar包，将jar包的日志输出到cs.logs中，错误日志输出到cserror.log中。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">java</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -jar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cs.jar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> > </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">cs.log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> 2> </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">cserror.log</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="eof的使用" tabindex="-1"><a class="header-anchor" href="#eof的使用"><span>EOF的使用</span></a></h2>
<ol>
<li>可以使用EOF输入多行文字显示到终端上。</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost a]# cat &#x3C;&#x3C; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">> 123</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">> 123</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">> sda</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">> EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">123</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">123</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">sda</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>EOF输入追加</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost a]#  cat &#x3C;&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF>></span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> c.txt</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">> 123</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">> 123</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">> EOF</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>EOF输入覆盖</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost a]# cat &#x3C;&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF></span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> c.txt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">> 123lda</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">> dfasdf</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">> EOF</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>实例：</li>
</ul>
<ol start="4">
<li>将<br>
172.16.11.221 k8s-master<br>
172.16.11.222 k8s-node1<br>
172.16.11.223 k8s-node2<br>
输出到/home/a.txt/中（追加）</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> >> </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/home/a.txt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;&#x3C; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">172.16.11.221 k8s-master</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">172.16.11.222 k8s-node1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">172.16.11.223 k8s-node2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>将 a 输出到/home/a.txt/中（覆盖）</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> > </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/home/a.txt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;&#x3C; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">a</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>双重重定向指定内容到指定文件（覆盖）</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tee</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /home/a.txt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;&#x3C; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">123</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1wed</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">sdfa</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">13228</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>双重重定向的意思是：将输出的内容，在页面上展示一下，并输出到指定的文件内容中。</p>
</blockquote>
</div></template>


