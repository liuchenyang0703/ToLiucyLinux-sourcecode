<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180959326.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>🍁<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！</p>
</blockquote>
<h2 id="shell脚本函数" tabindex="-1"><a class="header-anchor" href="#shell脚本函数" aria-hidden="true">#</a> shell脚本函数</h2>
<h3 id="设置函数的意义" tabindex="-1"><a class="header-anchor" href="#设置函数的意义" aria-hidden="true">#</a> 设置函数的意义</h3>
<blockquote>
<p>函数是一段可以重复利用有组织的代码；可以减少代码，提高代码利用率，使脚本结构更加清晰。</p>
</blockquote>
<h3 id="函数的基本格式" tabindex="-1"><a class="header-anchor" href="#函数的基本格式" aria-hidden="true">#</a> 函数的基本格式</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">function</span> 函数名<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	执行代码
	<span class="token punctuation">[</span>return x<span class="token punctuation">]</span>                       <span class="token comment">#使用return或exit可以显示的结束函数</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>函数名<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>							 <span class="token comment">#函数名后面（）是没有内容的</span>
	执行代码							 <span class="token comment">#我们执行的命令内容放在{}里面</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样只是写了函数，但是没有调用，所以执行脚本不会有输出。</p>
<h3 id="函数的调用-实例" tabindex="-1"><a class="header-anchor" href="#函数的调用-实例" aria-hidden="true">#</a> 函数的调用+实例</h3>
<ul>
<li>实例1</li>
</ul>
<blockquote>
<p>直接写函数名</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">function</span> <span class="token function-name function">f1</span> <span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"函数测试"</span>
<span class="token punctuation">}</span>

f1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>输出结果为：</p>
</blockquote>
<font color=red>函数测试</font><ul>
<li>实例2</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">function</span> <span class="token function-name function">f1</span> <span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"函数测试"</span>
<span class="token punctuation">}</span>


<span class="token function-name function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"这是没有function的函数测试"</span>
<span class="token punctuation">}</span>

f1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>输出结果为：</p>
</blockquote>
<font color=red>这是没有function的函数测试</font><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180959771.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>实例3</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">function</span> <span class="token function-name function">f1</span> <span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"函数测试"</span>
<span class="token punctuation">}</span>


<span class="token function-name function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"这是没有function的函数测试"</span>
<span class="token punctuation">}</span>

f1

<span class="token function-name function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"这是function的函数测试2"</span>
<span class="token punctuation">}</span>

f2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>输出结果为：</p>
<font color=red>这是没有function的函数测试<br>
这是function的函数测试2</font>
</blockquote>
<ul>
<li>实例4</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">function</span> <span class="token function-name function">f1</span> <span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"函数测试"</span>
<span class="token punctuation">}</span>


<span class="token function-name function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"这是没有function的函数测试"</span>
<span class="token punctuation">}</span>

<span class="token comment">#f1</span>

<span class="token function-name function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"这是function的函数测试2"</span>
<span class="token punctuation">}</span>

<span class="token comment">#f2</span>

<span class="token function-name function">f3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">"我想输出函数的f1和f2，结果为：<span class="token entity" title="\n">\n</span> <span class="token variable"><span class="token variable">$(</span>f1<span class="token variable">)</span></span> <span class="token entity" title="\n">\n</span> <span class="token variable"><span class="token variable">$(</span>f2<span class="token variable">)</span></span>"</span>
<span class="token punctuation">}</span>
f3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>输出结果为：</p>
<font color=red>我想输出函数的f1和f2，结果为：<br>
这是没有function的函数测试 <br>
这是function的函数测试2<br>
</font>
</blockquote>
<ul>
<li><strong>总结：</strong></li>
</ul>
<blockquote>
<p>1.直接写函数中调用</p>
<p>2.函数直接写函数名同名函数后一个生效</p>
<p>3.调用函数一定要先定义</p>
<p>4.只要先定义了调用的其他函数定义顺序无关</p>
</blockquote>
<h2 id="函数的返回值" tabindex="-1"><a class="header-anchor" href="#函数的返回值" aria-hidden="true">#</a> 函数的返回值</h2>
<p>return表示退出函数并返回一个退出值，脚本中可以用 $ ? 变量显示该值</p>
<blockquote>
<p>1.函数结束就取返回值，因为$?变量只返回执行的最后一条命令的退出状态码</p>
<p>2.退出状态码必须是0~255，超出时值将为除以256取余</p>
</blockquote>
<ul>
<li>实例1：通过return返回一个乘积</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">function</span> <span class="token function-name function">test1</span> <span class="token punctuation">{</span>
	<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">"请输入一个数字："</span> num
	<span class="token builtin class-name">return</span> $<span class="token punctuation">[</span><span class="token variable">$num</span>*2<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

test1

<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>输出结果为：</p>
<font color=red>请输入一个数字：20<br>
40</font>
</blockquote>
<p>为什么会变成40呢？是因为里面写了交互式输入的数字*2，结果在$?返回值里返回。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180959410.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>实例2</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>


<span class="token function-name function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">"请输入第一个数："</span> num1
	<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">"请输入第二个数："</span> num2
	<span class="token builtin class-name">echo</span> <span class="token string">"刚刚输入的两个数分别为：<span class="token variable">$num1</span> 和 <span class="token variable">$num2</span>"</span>
	<span class="token assign-left variable">SUM</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$num1</span> + <span class="token variable">$num2</span> <span class="token punctuation">]</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"两个数的和为：<span class="token variable">$SUM</span>"</span>
<span class="token punctuation">}</span>
<span class="token function">sum</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果为：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>请输入第一个数：52
请输入第二个数：10
刚刚输入的两个数分别为：52 和 <span class="token number">10</span>
两个数的和为：62
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180959555.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="函数的传参" tabindex="-1"><a class="header-anchor" href="#函数的传参" aria-hidden="true">#</a> 函数的传参</h3>
<blockquote>
<p>在Shell中，调用函数时可以向其传递参数。在函数体内部，通过 $n的形式来获取参数的值，例如：$1表示第一个参数，$2表示第二个参数…即使用位置参数来实现参数传递。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token function-name function">add</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token builtin class-name">let</span> <span class="token assign-left variable">sum</span><span class="token operator">=</span><span class="token variable">$1</span>+<span class="token variable">$2</span>
	<span class="token builtin class-name">echo</span> <span class="token variable">$sum</span>
<span class="token punctuation">}</span>
<span class="token comment">#add（输出的数是你写的数）</span>
<span class="token function">add</span> <span class="token variable">$1</span> <span class="token variable">$2</span>
<span class="token comment">#函数传参【传的是位置变量】</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果为：24</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180959511.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="函数变量的作用范围" tabindex="-1"><a class="header-anchor" href="#函数变量的作用范围" aria-hidden="true">#</a> 函数变量的作用范围</h3>
<blockquote>
<p>1.函数在shell脚本中仅在当前shell环境中有效</p>
<p>2.Shell脚本中变量默认全局有效</p>
<p>3.将变量限定在函数内部使用local命令</p>
<pre><code>    3.1函数内部变量通过local来实现

    3.2通过定义myfun函数，在其内部设置局部变量i

    3.3函数内部和外部分别赋值，进行结果验证。
</code></pre>
<p>ps：</p>
<font color=red> 全局变量代表整体可以使用
局部变量代表的是全局变量里面可以使用其中一部分</font>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token function-name function">myfun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token builtin class-name">local</span> i 
	<span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">6</span>
	<span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token punctuation">}</span>

<span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">8</span>

myfun
<span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>local定义的是局部变量；<br>
局部变量是6；全局变量是8；所以输出的结果是<font color=red>6和8</font><br>
如果吧local这行注释了，那么输出的结果就是<font color=red>6和6</font>；为什么呢？<br>
因为两个全局变量，在脚本中只能执行一个全局变量，且是从上往下，所以输出的只有6。</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180959691.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="函数的参数" tabindex="-1"><a class="header-anchor" href="#函数的参数" aria-hidden="true">#</a> * 函数的参数</h2>
<h3 id="_1-参数的用法" tabindex="-1"><a class="header-anchor" href="#_1-参数的用法" aria-hidden="true">#</a> *.1 参数的用法</h3>
<blockquote>
<p>函数名称：参数1，参数2，参数3</p>
</blockquote>
<h3 id="_2-参数的表示方法" tabindex="-1"><a class="header-anchor" href="#_2-参数的表示方法" aria-hidden="true">#</a> *.2 参数的表示方法</h3>
<blockquote>
<p><code v-pre>$1 $2 $3.........${10}${11}</code></p>
</blockquote>
<h3 id="_3-参数的案例" tabindex="-1"><a class="header-anchor" href="#_3-参数的案例" aria-hidden="true">#</a> *.3 参数的案例</h3>
<h4 id="_3-0-什么是阶乘" tabindex="-1"><a class="header-anchor" href="#_3-0-什么是阶乘" aria-hidden="true">#</a> *3.0 什么是阶乘？</h4>
<blockquote>
<p>阶乘(factorial)是基斯顿·卡曼(Christian Kramp, 1760 – 1826)于1808年发明的运算符号。<br>
阶乘，也是数学里的一种术语。<br>
<br><br>
阶乘指从1乘以2乘以3乘以4一直乘到所要求的数。</p>
</blockquote>
</div></template>


