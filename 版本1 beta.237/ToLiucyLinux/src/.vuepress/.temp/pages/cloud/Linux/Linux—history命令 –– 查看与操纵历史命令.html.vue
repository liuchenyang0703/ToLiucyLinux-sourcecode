<template><div><p>@[toc]</p>
<p>history命令用于显示用户以前执行过的历史命令，并且能对历史命令进行追加和删除等操作。</p>
<p>如果你经常使用Linux命令，那么使用history命令可以有效地提升你的效率。</p>
<h2 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式：</h2>
<blockquote>
<p>history [参数] [目录]</p>
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
<td>-a</td>
<td>将当前shell会话的历史命令追加到命令历史文件中,命令历史文件是保存历史命令的配置文件</td>
</tr>
<tr>
<td>-c</td>
<td>清空当前历史命令列表</td>
</tr>
<tr>
<td>-d</td>
<td>删除历史命令列表中指定序号的命令</td>
</tr>
<tr>
<td>-n</td>
<td>从命令历史文件中读取本次Shell会话开始时没有读取的历史命令</td>
</tr>
<tr>
<td>-r</td>
<td>读取命令历史文件到当前的Shell历史命令内存缓冲区</td>
</tr>
<tr>
<td>-s</td>
<td>将指定的命令作为单独的条目加入命令历史内存缓冲区。在执行添加之前先删除命令历史内存缓冲区中最后一条命令</td>
</tr>
<tr>
<td>-w</td>
<td>把当前的shell历史命令内存缓冲区的内容写入命令历史文件</td>
</tr>
<tr>
<td>!num</td>
<td>num值是执行history前面显示的行号，也称历史记录号； 	直接执行选择的命令</td>
</tr>
</tbody>
</table>
<h2 id="参考实例" tabindex="-1"><a class="header-anchor" href="#参考实例" aria-hidden="true">#</a> 参考实例：</h2>
<p>查看所有的历史记录：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># history</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示最近的10条命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># history 10  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将本次登录的命令写入历史文件中：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># history -w</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将命令历史文件中的内容读入到目前shell的history记忆中 ：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># history -r  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将当前Shell会话的历史命令追加到命令历史文件中：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># history -a  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>清空当前历史命令列表：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># history -c </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行已经执行过又想执行的命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># history</span>
    <span class="token number">1</span>  <span class="token function">ls</span>
    <span class="token number">2</span>  <span class="token function">vim</span> a
    <span class="token number">3</span>  <span class="token function">ls</span>
    <span class="token number">4</span>  journalctl <span class="token parameter variable">-d</span>
    <span class="token number">5</span>  journalctl <span class="token parameter variable">-b</span>
<span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># !3</span>
abc <span class="token number">123</span> lcy linux <span class="token function">history</span> ml ss 
<span class="token function">dd</span> laks <span class="token number">111</span> <span class="token function">vi</span> go sl sd fsg a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/f58471169d8f419f8585079d5568d49d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>              <font size=5>总文章在：<a href="https://blog.csdn.net/liu_chen_yang/article/details/114872010?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Linux常用命令<ExternalLinkIcon/></a><br>
<img src="https://img-blog.csdnimg.cn/b6c5a9e4a5af4687a64e020cac19eb09.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"></p>
</div></template>


