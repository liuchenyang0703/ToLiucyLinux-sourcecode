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
<h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1>
<h2 id="重定向统计列表" tabindex="-1"><a class="header-anchor" href="#重定向统计列表" aria-hidden="true">#</a> 重定向统计列表</h2>
<table>
	<tr>
		<th>类型</th> 
	    <th>命令</th>
	    <th>作用</th>
	</tr >
	<tr >
	    <td>标准输入重定向	</td>
	    <td>echo “123” < file	</td>
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
<h1 id="标准输入重定向" tabindex="-1"><a class="header-anchor" href="#标准输入重定向" aria-hidden="true">#</a> 标准输入重定向：</h1>
<p>  标准输入（stdin）通常是指从终端或命令行界面接收输入数据的通道。当你在终端中输入命令并按下回车键时，你的输入就会被发送到标准输入。</p>
<p>标准输入通常用文件描述符（file descriptor）表示，其中stdin的文件描述符为0。在程序中，你可以使用这个文件描述符来读取从标准输入传来的数据。</p>
<p>以下是一些与标准输入相关的常见操作：</p>
<ol>
<li>从标准输入读取一行文本：</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">"请输入您的名字："</span>
<span class="token builtin class-name">read</span> name
<span class="token builtin class-name">echo</span> <span class="token string">"您好，<span class="token variable">$name</span>！"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>将命令的输出重定向到标准输入：</li>
</ol>
<p>如果没有后面的文件，需要先创建：<code v-pre>touch a.txt</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">"123"</span> <span class="token operator">&lt;</span> a.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将输入的内容<code v-pre>123</code>显示在终端上。</p>
<h1 id="标准输出重定向" tabindex="-1"><a class="header-anchor" href="#标准输出重定向" aria-hidden="true">#</a> 标准输出重定向：</h1>
<p>  标准输出（stdout）是指默认情况下将进程的输出结果发送到终端的通道。当你运行一个程序或命令时，它通常会将输出内容显示在终端上，这就是标准输出的作用。</p>
<ul>
<li>标准输出（输出第二次则覆盖第一次的内容）</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">"abc"</span> <span class="token operator">></span> a.txt


<span class="token comment"># 覆盖a.txt内容</span>
<span class="token builtin class-name">echo</span> <span class="token string">"abc"</span> <span class="token operator">></span> a.txt
<span class="token builtin class-name">echo</span> <span class="token string">"123"</span> <span class="token operator">></span> a.txt
<span class="token comment"># 输入了两个文字，但是只存留了最后一个，因为>代表的是标准输入（输出第二次则覆盖第一次的内容）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>标准输出（追加输出）&gt;&gt;</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">"123"</span> <span class="token operator">></span> a.txt
<span class="token builtin class-name">echo</span> <span class="token string">"123123"</span> <span class="token operator">>></span> a.txt

<span class="token comment">#此时，a.txt中内容为：</span>
<span class="token number">123</span>
<span class="token number">123123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用命令查询输入到一个文件中（工作中最常用的）</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-a</span> <span class="token operator">></span> a.txt

<span class="token comment"># 输出完之后可以使用cat查看</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="混合输出重定向" tabindex="-1"><a class="header-anchor" href="#混合输出重定向" aria-hidden="true">#</a> 混合输出重定向：</h1>
<p>  可以使用管道符号（<code v-pre>|</code>）将两个或多个命令的输出进行混合，并将结果重定向到文件或其他命令的输入。</p>
<p>下面是一个将两个命令的输出混合并重定向到文件的示例：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>command1 <span class="token operator">|</span> command2 <span class="token operator">></span> output.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在这个示例中，<code v-pre>command1</code>的输出会被作为<code v-pre>command2</code>的输入，并且它们的输出结果会被重定向到<code v-pre>output.txt</code>文件中。</p>
<p>如果你要将一个命令的输出同时重定向到文件和其他命令的输入，你可以使用多个重定向符号：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token operator">></span> output.txt <span class="token operator"><span class="token file-descriptor important">2</span>></span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">|</span> command2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在这个示例中，<code v-pre>command</code>的输出会被重定向到<code v-pre>output.txt</code>文件中，并且标准错误输出（<code v-pre>stderr</code>）会被重定向到标准输出（<code v-pre>stdout</code>），然后再将标准输出作为<code v-pre>command2</code>的输入。</p>
<h1 id="标准错误输出重定向" tabindex="-1"><a class="header-anchor" href="#标准错误输出重定向" aria-hidden="true">#</a> 标准错误输出重定向：</h1>
<p>例如：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>LS <span class="token operator">></span> a.txt
<span class="token comment"># 默认这个会直接再也没上输入【bash: LS: command not found】，而a.txt.里是空的</span>
<span class="token comment"># 想要将错误的信息也输出到a.txt中，我们可以使用标准错误</span>
LS <span class="token operator"><span class="token file-descriptor important">2</span>></span> a.txt
<span class="token comment"># 这样cat查看你的时候，错误信息就可以看到了。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><font color=green>**实例：**</font><blockquote>
<p>yum -y install bind bind-utils &amp;&gt; /dev/null &amp;&amp; echo &quot;ok&quot; || echo &quot;not ok&quot;<br><br>
(安装一个bind和bind-utils把安装时候输出的内容全部放到/dev/null,[/dev/null相当于一个回收站，输出到这里面就直接清空]然后如果安装成功就输出ok，安装失败就输出not ok)</p>
</blockquote>
<h1 id="文件描述符" tabindex="-1"><a class="header-anchor" href="#文件描述符" aria-hidden="true">#</a> 文件描述符</h1>
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
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-jar</span> cs.jar <span class="token operator">></span> cs.log <span class="token operator"><span class="token file-descriptor important">2</span>></span> cserror.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="eof的使用" tabindex="-1"><a class="header-anchor" href="#eof的使用" aria-hidden="true">#</a> EOF的使用</h1>
<ol>
<li>可以使用EOF输入多行文字显示到终端上。</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost a<span class="token punctuation">]</span><span class="token comment"># cat &lt;&lt; EOF</span>
<span class="token operator">></span> <span class="token number">123</span>
<span class="token operator">></span> <span class="token number">123</span>
<span class="token operator">></span> sda
<span class="token operator">></span> EOF

<span class="token number">123</span>
<span class="token number">123</span>
sda
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>EOF输入追加</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost a<span class="token punctuation">]</span><span class="token comment">#  cat &lt;&lt;EOF>> c.txt</span>
<span class="token operator">></span> <span class="token number">123</span>
<span class="token operator">></span> <span class="token number">123</span>
<span class="token operator">></span> EOF

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>EOF输入覆盖</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost a<span class="token punctuation">]</span><span class="token comment"># cat &lt;&lt;EOF> c.txt </span>
<span class="token operator">></span> 123lda
<span class="token operator">></span> dfasdf
<span class="token operator">></span> EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>实例：</li>
</ul>
<ol start="4">
<li>将<br>
172.16.11.221 k8s-master<br>
172.16.11.222 k8s-node1<br>
172.16.11.223 k8s-node2<br>
输出到/home/a.txt/中（追加）</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">>></span> /home/a.txt <span class="token operator">&lt;&lt;</span> <span class="token string">EOF 
172.16.11.221 k8s-master
172.16.11.222 k8s-node1
172.16.11.223 k8s-node2
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>将 a 输出到/home/a.txt/中（覆盖）</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">></span> /home/a.txt <span class="token operator">&lt;&lt;</span> <span class="token string">EOF 
a
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>双重重定向指定内容到指定文件（覆盖）</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">tee</span> /home/a.txt <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
123
1wed
sdfa
13228
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>双重重定向的意思是：将输出的内容，在页面上展示一下，并输出到指定的文件内容中。</p>
</blockquote>
</div></template>


