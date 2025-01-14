<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">CSDN博客专家<ExternalLinkIcon/></a><br>
  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<p>@[toc]</p>
<h1 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h1>
<blockquote>
<p>  在执行脚本的时候，我们有时候会遇到添加一个变量值，明明读到的值是0或者1，在外面执行此命令都是没问题的，而且脚本中写的判断也是没问题的，但是为什么执行的结果是没有找到0或者1呢？</p>
</blockquote>
<h1 id="问题的排查及原因" tabindex="-1"><a class="header-anchor" href="#问题的排查及原因" aria-hidden="true">#</a> 问题的排查及原因</h1>
<ul>
<li>脚本示例（<a href="http://test.sh" target="_blank" rel="noopener noreferrer">test.sh<ExternalLinkIcon/></a>）：</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#获取脚本执行的路径</span>
<span class="token assign-left variable">DIR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> <span class="token punctuation">$(</span>dirname $0<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">pwd</span> <span class="token variable">)</span></span>

<span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> $DIR/peizhi.properties <span class="token operator">|</span> <span class="token function">egrep</span> <span class="token string">"^onenumber"</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">"="</span> <span class="token string">'{print $2}'</span><span class="token variable">)</span></span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$num</span>"</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">"配置文件中<span class="token entity" title="\e">\e</span>[1;34m测试服务<span class="token entity" title="\e">\e</span>[0m<span class="token entity" title="\e">\e</span>[1;32m已打开<span class="token entity" title="\e">\e</span>[0m"</span>
<span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">"配置文件中<span class="token entity" title="\e">\e</span>[1;31m测试服务没有打开<span class="token entity" title="\e">\e</span>[0m，跳过此判断"</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>配置文件示例（peizhi.properties）：</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token assign-left variable">file</span><span class="token operator">=</span><span class="token number">1</span>.txt
<span class="token assign-left variable">onenumber</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">format</span><span class="token operator">=</span>json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1、我们先分析脚本：</p>
<blockquote>
<p>查看当前目录下的<code v-pre>peizhi.properties</code>配置文件中的以<code v-pre>onenumber</code>开头的文件；</p>
<p>= 后面的值，如果为0，那么就输入已经打开这个配置了；如果不等于0那么就输出没有打开这个配置。</p>
</blockquote>
<p>2、然后我们先在linux命令行执行此命令：<code v-pre> cat peizhi.properties | egrep &quot;^onenumber&quot; | awk -F &quot;=&quot; '{print $2}'</code>，查到的结果为：<font color=blue>0</font>，那么我们应该输出<font color=gree>“配置文件中测试服务已打开”</font>。</p>
<p>3、放到脚本里执行：发现直接结果是：<font color=red>“配置文件中测试服务没有打开，跳过此判断”</font></p>
<figure><img src="https://img-blog.csdnimg.cn/img_convert/d663cddc9d70059b0e546bf09fd26f65.png" alt="image-20240506131109078" tabindex="0" loading="lazy"><figcaption>image-20240506131109078</figcaption></figure>
<p>4、打开配置文件和脚本看看文件的格式，是不是都是<code v-pre>unix</code>的；vim 打开配置文件和脚本，执行：<code v-pre>:set ff</code>，查看此脚本或者文件的文件格式；</p>
<figure><img src="https://img-blog.csdnimg.cn/img_convert/ffb282f82b24f4b6ee2778f3a3b0989e.png" alt="image-20240506132210216" tabindex="0" loading="lazy"><figcaption>image-20240506132210216</figcaption></figure>
<figure><img src="https://img-blog.csdnimg.cn/img_convert/c48b4f4badd6425a0cda0fb542a27909.png" alt="image-20240506132225669" tabindex="0" loading="lazy"><figcaption>image-20240506132225669</figcaption></figure>
<p>可以看到，脚本是没问题的，是<code v-pre>unix</code>格式的；<font color=red>但是配置文件就是<code v-pre>dos</code>格式的了；dos格式为<code v-pre>windows（CR LF）</code>了</font>，在windows上编写的shell脚本，在Linux系统中运行就会有<code v-pre>\r</code> <code v-pre>^M</code>等错误信息；</p>
<p>所以，两个脚本文件格式都必须为<code v-pre>unix</code>格式，查看脚本是否为unix格式，vim进入脚本编辑器，执行：<code v-pre>:set ff</code>查看脚本的文件格式；如果是dos的就是windows格式的，如果是unix就是linux格式的；dos格式的在windows回车是有一个隐藏的内容的<code v-pre>\r</code>，所以在执行脚本的时候会多出现一个<code v-pre>\r</code>。</p>
<p>5、然后我们再去看一下，执行脚本的过程；<code v-pre>sh -x test.sh</code>；</p>
<p>发现多了一个<code v-pre>\r</code>，然后导致下面的判断识别成了<code v-pre>0\r</code>与<code v-pre>0</code>不匹配了，所以输出了没有打开此测试服务；</p>
<figure><img src="https://img-blog.csdnimg.cn/img_convert/2a10db8c945c3e1ecda2ac00a92c6b38.png" alt="image-20240506141334744" tabindex="0" loading="lazy"><figcaption>image-20240506141334744</figcaption></figure>
<hr>
<p>所以，得出的结论是：因为两个文件中的  配置文件的文件格式为<font color=red>dos格式，dos为windows模式</font>，回车会有<code v-pre>\r</code>占位符，所以，导致执行shell脚本的时候多了一个<code v-pre>\r</code>；</p>
<p>两种解决方法：</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 1、修改文件的文件格式</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 2、去除文件中的回车：<code v-pre>\r</code></label></li>
</ul>
<h1 id="解决方法一-修改文件-文件格式" tabindex="-1"><a class="header-anchor" href="#解决方法一-修改文件-文件格式" aria-hidden="true">#</a> 解决方法一：修改文件 文件格式</h1>
<blockquote>
<p>当我们知道是配置文件的文件类型是<code v-pre>dos类型</code>，那么我们就可以只修改配置文件的文件类型即可；</p>
</blockquote>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 修改文件 文件格式</label></li>
</ul>
<p>1、vim 进入编辑模式</p>
<p>2、执行： <code v-pre>set ff=unix</code></p>
<p>3、<code v-pre>:wq</code>保存退出</p>
<p>4、再次进入查看文件格式：<code v-pre>:set ff</code></p>
<figure><img src="https://img-blog.csdnimg.cn/img_convert/186cbb3afb8a3520a968aad4b17310bc.png" alt="image-20240506151715360" tabindex="0" loading="lazy"><figcaption>image-20240506151715360</figcaption></figure>
<figure><img src="https://img-blog.csdnimg.cn/img_convert/ddf47e8a8be834cbd93ed8e0dca05d9a.png" alt="image-20240506151812879" tabindex="0" loading="lazy"><figcaption>image-20240506151812879</figcaption></figure>
<p>5、执行脚本带详细输出</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>root@7b64cee30106:~<span class="token comment"># sh -x test.sh </span>
+++ <span class="token function">dirname</span> test.sh
++ <span class="token builtin class-name">cd</span> <span class="token builtin class-name">.</span>
++ <span class="token builtin class-name">pwd</span>
+ <span class="token assign-left variable">DIR</span><span class="token operator">=</span>/root
++ <span class="token function">cat</span> /root/peizhi.properties
++ <span class="token function">grep</span> <span class="token string">'^onenumber'</span>
++ <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token operator">=</span> <span class="token string">'{print $2}'</span>
+ <span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token number">0</span>
+ <span class="token string">'['</span> <span class="token number">0</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token string">']'</span>
+ <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">'配置文件中\e[1;34m测试服务\e[0m\e[1;32m已打开\e[0m'</span>
配置文件中测试服务已打开
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现已经是 0 = 0 了，那么问题就解决了；</p>
<figure><img src="https://img-blog.csdnimg.cn/img_convert/4b5d7f67e2b70046cc0437b285443a93.png" alt="image-20240506151925543" tabindex="0" loading="lazy"><figcaption>image-20240506151925543</figcaption></figure>
<h1 id="解决方法二-去除文件类型为-dos-文件中的回车" tabindex="-1"><a class="header-anchor" href="#解决方法二-去除文件类型为-dos-文件中的回车" aria-hidden="true">#</a> 解决方法二：去除文件类型为“dos”文件中的回车</h1>
<blockquote>
<p>当我们知道是配置文件的文件类型是<code v-pre>dos类型</code>，那么我们就只去除配置文件里的<code v-pre>\r</code>就行；</p>
</blockquote>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 去除文件类型为“dos”文件中的<code v-pre>回车\r</code></label></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">"s/<span class="token entity" title="\r">\r</span>//g"</span> peizhi.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解析：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sed</span> -i：		修改配置文件 
<span class="token string">"s/<span class="token entity" title="\r">\r</span>//g"</span>：	将<span class="token punctuation">\</span>r改为空格，文件中所有
peizhi.properties	要修改的文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>执行脚本带详细输出</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>root@7b64cee30106:~<span class="token comment"># sh -x test.sh </span>
+++ <span class="token function">dirname</span> test.sh
++ <span class="token builtin class-name">cd</span> <span class="token builtin class-name">.</span>
++ <span class="token builtin class-name">pwd</span>
+ <span class="token assign-left variable">DIR</span><span class="token operator">=</span>/root
++ <span class="token function">cat</span> /root/peizhi.properties
++ <span class="token function">grep</span> <span class="token string">'^onenumber'</span>
++ <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token operator">=</span> <span class="token string">'{print $2}'</span>
+ <span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token number">0</span>
+ <span class="token string">'['</span> <span class="token number">0</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token string">']'</span>
+ <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">'配置文件中\e[1;34m测试服务\e[0m\e[1;32m已打开\e[0m'</span>
配置文件中测试服务已打开
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现已经是 0 = 0 了，那么问题就解决了；</p>
<figure><img src="https://img-blog.csdnimg.cn/img_convert/4b5d7f67e2b70046cc0437b285443a93.png" alt="image-20240506151925543" tabindex="0" loading="lazy"><figcaption>image-20240506151925543</figcaption></figure>
<hr>
<hr>
<p><strong>小知识：</strong></p>
<p>  在windows上使用<code v-pre>notepad++</code>可以看到该文件的文件类型是什么；打开一个文件或者脚本在右下角可以看到。</p>
<figure><img src="https://img-blog.csdnimg.cn/img_convert/18a9471d94ed7bfcd6134ac239f416e8.png" alt="image-20240506154549293" tabindex="0" loading="lazy"><figcaption>image-20240506154549293</figcaption></figure>
</div></template>


