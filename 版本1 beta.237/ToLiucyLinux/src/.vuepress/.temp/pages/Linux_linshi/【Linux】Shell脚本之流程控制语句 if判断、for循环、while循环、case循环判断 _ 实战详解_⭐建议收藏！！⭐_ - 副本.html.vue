<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180954417.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<h2 id="🍁-if-判断" tabindex="-1"><a class="header-anchor" href="#🍁-if-判断" aria-hidden="true">#</a> 🍁 if 判断</h2>
<h3 id="🍁-if-判断格式" tabindex="-1"><a class="header-anchor" href="#🍁-if-判断格式" aria-hidden="true">#</a> 🍁 if 判断格式：</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#单条件判断</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> 条件测试 <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
   执行代码
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> 条件测试 <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
   执行代码
eles
   执行代码
<span class="token keyword">fi</span>

<span class="token comment">#多条件判断</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> 条件测试 <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
   执行代码
<span class="token keyword">elif</span> <span class="token punctuation">[</span> 条件测试 <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
   执行代码
eles
   执行代码
<span class="token keyword">fi</span>

<span class="token comment">#单行if判断</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> 条件测试 <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> 执行代码<span class="token punctuation">;</span> <span class="token keyword">else</span> 执行代码<span class="token punctuation">;</span> <span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🍁-if-判断实例" tabindex="-1"><a class="header-anchor" href="#🍁-if-判断实例" aria-hidden="true">#</a> 🍁 if 判断实例：</h3>
<h4 id="🍃-单条件判断实例-判断是否为整数" tabindex="-1"><a class="header-anchor" href="#🍃-单条件判断实例-判断是否为整数" aria-hidden="true">#</a> 🍃 单条件判断实例：判断是否为整数</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">"please input a number:"</span> num

<span class="token function">expr</span> <span class="token number">10</span> + <span class="token variable">$num</span> <span class="token operator">&amp;></span>/dev/null
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
     <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">${num}</span>是整数"</span>
<span class="token keyword">else</span>
     <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">${num}</span>不是整数"</span>                                  
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180954408.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="🍃-多条件判断实例-成绩及格否" tabindex="-1"><a class="header-anchor" href="#🍃-多条件判断实例-成绩及格否" aria-hidden="true">#</a> 🍃 多条件判断实例：成绩及格否</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>对输入成绩做判断：
如果成绩小于60；那么
	打印不及格
如果6<span class="token operator"><span class="token file-descriptor important">0</span>></span><span class="token operator">=</span>成绩<span class="token operator">&lt;</span><span class="token number">80</span>；那么
	打印及格
如果8<span class="token operator"><span class="token file-descriptor important">0</span>></span><span class="token operator">=</span>成绩<span class="token operator">&lt;</span><span class="token number">90</span><span class="token punctuation">;</span>那么
	打印良好
如果9<span class="token operator"><span class="token file-descriptor important">0</span>></span><span class="token operator">=</span>成绩<span class="token operator">&lt;=</span><span class="token number">100</span><span class="token punctuation">;</span>那么
	打印优秀
否则
	请输入0-100的整数
结尾
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">"please input is results:"</span> results
<span class="token function">expr</span> <span class="token number">10</span> + <span class="token variable">$results</span> <span class="token operator">&amp;></span>/dev/null
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">${results}</span>不是合法整数"</span>
   <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">${results}</span> <span class="token parameter variable">-lt</span> <span class="token number">60</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"不及格"</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">${results}</span> <span class="token parameter variable">-ge</span> <span class="token number">60</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token variable">${results}</span> <span class="token parameter variable">-lt</span> <span class="token number">80</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"及格"</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">${results}</span> <span class="token parameter variable">-ge</span> <span class="token number">80</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token variable">${results}</span> <span class="token parameter variable">-lt</span> <span class="token number">90</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"良好"</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">${results}</span> <span class="token parameter variable">-ge</span> <span class="token number">90</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token variable">${results}</span> <span class="token parameter variable">-le</span> <span class="token number">100</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"优秀"</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"请输入0-100之间合法的整数,您输入的是：<span class="token variable">${results}</span>"</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180954060.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="🍃-单行if判断实例-判断是否有这个文件或目录" tabindex="-1"><a class="header-anchor" href="#🍃-单行if判断实例-判断是否有这个文件或目录" aria-hidden="true">#</a> 🍃 单行if判断实例：判断是否有这个文件或目录</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token string">"/var/lib/mysql/"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">"目录不存在"</span><span class="token punctuation">;</span> <span class="token keyword">else</span> <span class="token builtin class-name">echo</span> <span class="token string">"目录存在"</span><span class="token punctuation">;</span> <span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="🍃-单行if判断实例-判断这个目录中是否存在文件-前提是有这个目录" tabindex="-1"><a class="header-anchor" href="#🍃-单行if判断实例-判断这个目录中是否存在文件-前提是有这个目录" aria-hidden="true">#</a> 🍃 单行if判断实例：判断这个目录中是否存在文件（前提是有这个目录）</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span> <span class="token parameter variable">-A</span> /var/lib/mysql<span class="token variable">)</span></span>"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">"该目录不存在文件"</span><span class="token punctuation">;</span> <span class="token keyword">else</span> <span class="token builtin class-name">echo</span> <span class="token string">"该目录存在文件"</span><span class="token punctuation">;</span> <span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="🍁-for-循环" tabindex="-1"><a class="header-anchor" href="#🍁-for-循环" aria-hidden="true">#</a> 🍁 for 循环</h2>
<h3 id="🍁-for-循环格式" tabindex="-1"><a class="header-anchor" href="#🍁-for-循环格式" aria-hidden="true">#</a> 🍁 for 循环格式：</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">for</span> 变量 <span class="token keyword">in</span> 取值列表<span class="token punctuation">;</span><span class="token keyword">do</span>
	执行代码
<span class="token keyword">done</span>

<span class="token keyword">for</span> 变量 <span class="token keyword">in</span> 取值列表
<span class="token keyword">do</span>
	执行代码
<span class="token keyword">done</span>

<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">20</span><span class="token punctuation">;</span>i<span class="token operator">++</span> <span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
	执行代码；（表示循环20次执行代码）
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>取值列表中的值都将被历遍</p>
<h3 id="🍁-for-循环实例" tabindex="-1"><a class="header-anchor" href="#🍁-for-循环实例" aria-hidden="true">#</a> 🍁 for 循环实例：</h3>
<h4 id="🍃-需求1-打印10以内的偶数-能被2整除-除2余数为0" tabindex="-1"><a class="header-anchor" href="#🍃-需求1-打印10以内的偶数-能被2整除-除2余数为0" aria-hidden="true">#</a> 🍃 需求1：打印10以内的偶数--&gt;能被2整除，除2余数为0</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#{起始数字..终止数字..步长} 默认步长为1</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">..</span><span class="token number">10</span><span class="token punctuation">..</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>continue	跳过当前循环<br>
break	终止当前循环<br>
exit	退出脚本，同时可以指定退出时的状态码</p>
</blockquote>
<blockquote>
<p>seq [起始位置（不指定默认是1）] 终止位置<br>
-s	指定分隔符<br>
-w	补齐相同宽度</p>
</blockquote>
<h4 id="🍃-需求2-循环创建文件cs-1-100" tabindex="-1"><a class="header-anchor" href="#🍃-需求2-循环创建文件cs-1-100" aria-hidden="true">#</a> 🍃 需求2：循环创建文件<code v-pre>cs{1..100}</code></h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#获取脚本执行的路径</span>
<span class="token assign-left variable">DIR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> <span class="token punctuation">$(</span>dirname $0<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">pwd</span> <span class="token variable">)</span></span>

<span class="token assign-left variable">text</span><span class="token operator">=</span><span class="token variable">$DIR</span>/for

<span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token variable">$text</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> <span class="token variable">$text</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">I</span> <span class="token keyword">in</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token keyword">do</span>
        <span class="token function">touch</span> <span class="token variable">${text}</span>/cs<span class="token variable">$I</span>
<span class="token keyword">done</span>


<span class="token comment">#其实直接用touch也可以创建，这里只为了演示</span>
<span class="token comment">#touch cs{1..100}</span>
<span class="token comment">#会在当前目录创建cs{1..100}文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180954833.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="🍃-需求3-从变量中取遍历的值" tabindex="-1"><a class="header-anchor" href="#🍃-需求3-从变量中取遍历的值" aria-hidden="true">#</a> 🍃 需求3：从变量中取遍历的值</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">List</span><span class="token operator">=</span><span class="token string">"file1 file2 file3"</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">I</span> <span class="token keyword">in</span> <span class="token variable">$List</span><span class="token punctuation">;</span><span class="token keyword">do</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"当前文件为 <span class="token variable">${I}</span>"</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180954362.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="🍃-需求4-循环输出数组中的值" tabindex="-1"><a class="header-anchor" href="#🍃-需求4-循环输出数组中的值" aria-hidden="true">#</a> 🍃 需求4：循环输出数组中的值</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash  </span>

<span class="token comment"># 定义一个数组  </span>
<span class="token assign-left variable">my_array</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">"元素1"</span> <span class="token string">"元素2"</span> <span class="token string">"元素3"</span> <span class="token string">"元素4"</span> <span class="token string">"元素5"</span><span class="token punctuation">)</span>

<span class="token comment"># 使用for循环遍历数组并输出每个元素  </span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">"<span class="token variable">${my_array<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>"</span><span class="token punctuation">;</span><span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$i</span>"</span>  
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180954938.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="🍃-需求5-从命令中取值" tabindex="-1"><a class="header-anchor" href="#🍃-需求5-从命令中取值" aria-hidden="true">#</a> 🍃 需求5：从命令中取值</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">I</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /etc/passwd<span class="token variable">)</span></span>
<span class="token keyword">do</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$I</span>"</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180954493.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="🍃-需求6-for循环自增自减" tabindex="-1"><a class="header-anchor" href="#🍃-需求6-for循环自增自减" aria-hidden="true">#</a> 🍃 需求6：for循环自增自减</h4>
<h5 id="🍃-需求6-1-批量创建cs1-cs10用户" tabindex="-1"><a class="header-anchor" href="#🍃-需求6-1-批量创建cs1-cs10用户" aria-hidden="true">#</a> 🍃 需求6.1：批量创建cs1-cs10用户</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span> <span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
        <span class="token function">useradd</span> cs_<span class="token variable">$i</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180954162.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>如果需要删除这些用户，可在脚本中把<code v-pre>useradd</code>改为<code v-pre>userdel -r</code>即可；</p>
<h5 id="🍃-需求6-2-输出数字-a自增、-b自减" tabindex="-1"><a class="header-anchor" href="#🍃-需求6-2-输出数字-a自增、-b自减" aria-hidden="true">#</a> 🍃 需求6.2：输出数字 $a自增、$b自减</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> a<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>b<span class="token operator">=</span><span class="token number">9</span><span class="token punctuation">;</span>a<span class="token operator">&lt;=</span><span class="token number">10</span><span class="token punctuation">;</span>a<span class="token operator">++</span><span class="token punctuation">,</span>b<span class="token operator">--</span> <span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"num is <span class="token variable">$a</span> <span class="token variable">$b</span>"</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>a的初始值为1；b的初始值为9；<br>
a在前，所以写a最大不能&gt;10；<br>
a每次加1，直至加到10；b每次-1，直至a停止。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180954117.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="🍃-需求6-3-循环20次zabbix调用" tabindex="-1"><a class="header-anchor" href="#🍃-需求6-3-循环20次zabbix调用" aria-hidden="true">#</a> 🍃 需求6.3：循环20次zabbix调用</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">20</span><span class="token punctuation">;</span>i<span class="token operator">++</span> <span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
	<span class="token assign-left variable">cs</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>zabbix_get <span class="token parameter variable">-s</span> <span class="token number">172.16</span>.10.1 <span class="token parameter variable">-k</span> cs<span class="token variable">)</span></span>
	<span class="token builtin class-name">echo</span> <span class="token string">"调用<span class="token variable">$i</span>次！调用结果为：<span class="token variable">$cs</span>"</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"------------------------------------------------------------------------"</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="🍃-需求7-批量创建用户-密码默认为123456" tabindex="-1"><a class="header-anchor" href="#🍃-需求7-批量创建用户-密码默认为123456" aria-hidden="true">#</a> 🍃 需求7：批量创建用户，密码默认为123456</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#获取脚本执行的路径</span>
<span class="token assign-left variable">DIR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> <span class="token punctuation">$(</span>dirname $0<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">pwd</span> <span class="token variable">)</span></span>

<span class="token comment">#创建一个用户组</span>
<span class="token function">groupadd</span> mailgroup <span class="token operator"><span class="token file-descriptor important">2</span>></span>/dev/null


<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> $DIR/a.txt<span class="token variable">)</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
	<span class="token function">useradd</span> <span class="token parameter variable">-g</span> mailgroup <span class="token parameter variable">-s</span> /sbin/nologin <span class="token variable">$i</span> <span class="token operator"><span class="token file-descriptor important">2</span>></span>/dev/null
    <span class="token builtin class-name">echo</span> <span class="token number">123456</span> <span class="token operator">|</span> <span class="token function">passwd</span> <span class="token parameter variable">--stdin</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>a.txt 中名字可以随便起;</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180954138.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="🍁-while-循环" tabindex="-1"><a class="header-anchor" href="#🍁-while-循环" aria-hidden="true">#</a> 🍁 while 循环</h2>
<h3 id="🍁-while-循环格式" tabindex="-1"><a class="header-anchor" href="#🍁-while-循环格式" aria-hidden="true">#</a> 🍁 while 循环格式：</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">while</span> <span class="token punctuation">[</span>条件测试<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">do</span>
	执行代码
<span class="token keyword">done</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span>条件测试<span class="token punctuation">]</span>
<span class="token keyword">do</span>
	执行代码
<span class="token keyword">done</span>

<span class="token keyword">while</span> <span class="token boolean">true</span><span class="token punctuation">;</span><span class="token keyword">do</span>
	执行代码（无限循环此命令，每次循环停留两秒）
	<span class="token function">sleep</span> <span class="token number">2</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>条件测试比如：$i -le 5<br>
当条件成立时，执行循环，不成立，结束循环。<br>
如果while中的条件永远成立，会一直循环，成为死循环。</p>
<h3 id="🍁-while-循环实例" tabindex="-1"><a class="header-anchor" href="#🍁-while-循环实例" aria-hidden="true">#</a> 🍁 while 循环实例：</h3>
<h4 id="🍃-需求1-计算1到100正整数的和" tabindex="-1"><a class="header-anchor" href="#🍃-需求1-计算1到100正整数的和" aria-hidden="true">#</a> 🍃 需求1：计算1到100正整数的和</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">declare</span> <span class="token parameter variable">-i</span> <span class="token assign-left variable">I</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token builtin class-name">declare</span> <span class="token parameter variable">-i</span> <span class="token assign-left variable">SUM</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$I</span> <span class="token parameter variable">-le</span> <span class="token number">100</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
	<span class="token builtin class-name">let</span> <span class="token assign-left variable">SUM</span><span class="token operator">+=</span><span class="token variable">$I</span>
	<span class="token builtin class-name">let</span> I++
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$SUM</span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在执行脚本时加个 <code v-pre>-x</code> 可查看执行过程</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180954153.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="🍃-需求2-批量创建用户-密码默认为123456" tabindex="-1"><a class="header-anchor" href="#🍃-需求2-批量创建用户-密码默认为123456" aria-hidden="true">#</a> 🍃 需求2：批量创建用户，密码默认为123456</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#获取脚本执行的路径</span>
<span class="token assign-left variable">DIR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> <span class="token punctuation">$(</span>dirname $0<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">pwd</span> <span class="token variable">)</span></span>

<span class="token comment">#创建一个用户组</span>
<span class="token function">groupadd</span> mailgroup <span class="token operator"><span class="token file-descriptor important">2</span>></span>/dev/null


<span class="token keyword">while</span> <span class="token builtin class-name">read</span> username<span class="token punctuation">;</span> <span class="token keyword">do</span>
	<span class="token function">useradd</span> <span class="token parameter variable">-g</span> mailgroup <span class="token parameter variable">-s</span> /sbin/nologin <span class="token variable">$username</span> <span class="token operator"><span class="token file-descriptor important">2</span>></span>/dev/null
	<span class="token builtin class-name">echo</span> <span class="token number">123456</span> <span class="token operator">|</span> <span class="token function">passwd</span> <span class="token parameter variable">--stdin</span> <span class="token variable">$username</span>
<span class="token keyword">done</span> <span class="token operator">&lt;</span> <span class="token variable">$DIR</span>/username.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>username.txt</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>lcy
cs
abc
abb
abd
abe
abf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180953541.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180953180.png" alt="" loading="lazy"></p>
<p>批量删除用户</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#获取脚本执行的路径</span>
<span class="token assign-left variable">DIR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> <span class="token punctuation">$(</span>dirname $0<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">pwd</span> <span class="token variable">)</span></span>

<span class="token comment">#创建一个用户组</span>
<span class="token function">groupadd</span> mailgroup <span class="token operator"><span class="token file-descriptor important">2</span>></span>/dev/null


<span class="token function">cat</span> <span class="token variable">$DIR</span>/username.txt <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> username<span class="token punctuation">;</span> <span class="token keyword">do</span>
	<span class="token function">userdel</span> <span class="token parameter variable">-r</span> <span class="token variable">$username</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180953193.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="🍃-需求3-提示用户输入字符-如果是小写就把字母全部变为大写-如果是quit则退出脚本" tabindex="-1"><a class="header-anchor" href="#🍃-需求3-提示用户输入字符-如果是小写就把字母全部变为大写-如果是quit则退出脚本" aria-hidden="true">#</a> 🍃 需求3：提示用户输入字符，如果是小写就把字母全部变为大写，如果是quit则退出脚本</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#如果输入的不是quit则把小写字母全部换成大写字母，如果输入的是quit则退出循环，否则会一直循环；</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">"Please enter content："</span> SCRIPT

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$SCRIPT</span> <span class="token operator">!=</span> <span class="token string">"quit"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$SCRIPT</span>"</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">'a-z'</span> <span class="token string">'A-Z'</span>
	<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">"Please enter content："</span> SCRIPT
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字母写的小写，全部会替换为大写，数字和其他字符不会被替换；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180953156.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="🍃-需求4-无限循环执行zabbix-get调用命令" tabindex="-1"><a class="header-anchor" href="#🍃-需求4-无限循环执行zabbix-get调用命令" aria-hidden="true">#</a> 🍃 需求4：无限循环执行zabbix_get调用命令</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">while</span> <span class="token boolean">true</span><span class="token punctuation">;</span><span class="token keyword">do</span>
	<span class="token assign-left variable">cs</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>zabbix_get <span class="token parameter variable">-s</span> <span class="token number">172.16</span>.10.1 <span class="token parameter variable">-k</span> cs<span class="token variable">)</span></span>
	<span class="token builtin class-name">echo</span> <span class="token string">"结果为<span class="token variable">$cs</span>"</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"----------------------------------------"</span>
	<span class="token function">sleep</span> <span class="token number">2</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🍁-case-循环判断" tabindex="-1"><a class="header-anchor" href="#🍁-case-循环判断" aria-hidden="true">#</a> 🍁 case 循环判断</h2>
<h3 id="🍁-case-循环判断格式" tabindex="-1"><a class="header-anchor" href="#🍁-case-循环判断格式" aria-hidden="true">#</a> 🍁 case 循环判断格式：</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">case</span> 变量 <span class="token keyword">in</span>
       条件或值1）
	执行代码
<span class="token punctuation">;</span><span class="token punctuation">;</span>
        条件或值2<span class="token punctuation">)</span>
	执行代码
<span class="token punctuation">;</span><span class="token punctuation">;</span>
        条件或值3）
	执行代码
<span class="token punctuation">;</span><span class="token punctuation">;</span>
         *）
	执行代码
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🍁-case-循环判断实例" tabindex="-1"><a class="header-anchor" href="#🍁-case-循环判断实例" aria-hidden="true">#</a> 🍁 case 循环判断实例：</h3>
<h4 id="🍃-nginx服务启停脚本-函数-case" tabindex="-1"><a class="header-anchor" href="#🍃-nginx服务启停脚本-函数-case" aria-hidden="true">#</a> 🍃 nginx服务启停脚本：函数 + case</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token function-name function">ngstart</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	/usr/local/nginx/sbin/nginx
<span class="token punctuation">}</span>

<span class="token function-name function">ngstop</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> stop
<span class="token punctuation">}</span>

<span class="token function-name function">ngrestart</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> reload
<span class="token punctuation">}</span>

<span class="token function-name function">ngstatus</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> status
<span class="token punctuation">}</span>


<span class="token comment">#nginx服务器起停的脚本</span>

<span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
    start<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"启动nginx服务"</span>
        ngstart
<span class="token punctuation">;</span><span class="token punctuation">;</span>
    stop<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"关闭nginx服务"</span>
        ngstop
<span class="token punctuation">;</span><span class="token punctuation">;</span>
    restart<span class="token punctuation">)</span>
    	<span class="token builtin class-name">echo</span> <span class="token string">"重启nginx服务"</span>
<span class="token comment">#        $0 stop</span>
<span class="token comment">#        $0 start</span>
		ngrestart
<span class="token punctuation">;</span><span class="token punctuation">;</span>
	status<span class="token punctuation">)</span>
		<span class="token builtin class-name">echo</span> <span class="token string">"查看nginx服务状态"</span>
		ngstatus
<span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span>  
        <span class="token builtin class-name">echo</span> <span class="token string">"USage: /etc/init.d/nginx {start|stop|restart}"</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180953716.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>推荐一个使用case写的启动脚本，包含启动，停止及重启监测状态：<a href="https://download.csdn.net/download/liu_chen_yang/87755766?spm=1001.2014.3001.5503" target="_blank" rel="noopener noreferrer">linux启动、关闭、重启jar包shell脚本 <ExternalLinkIcon/></a></p>
</blockquote>
</div></template>


