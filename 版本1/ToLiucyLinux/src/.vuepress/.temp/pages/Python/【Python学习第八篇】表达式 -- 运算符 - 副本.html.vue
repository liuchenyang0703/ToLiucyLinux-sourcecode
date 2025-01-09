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
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161321049.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<hr>
<h2 id="_1、前言" tabindex="-1"><a class="header-anchor" href="#_1、前言" aria-hidden="true">#</a> 1、前言</h2>
<blockquote>
<p>这里写代码的工具为：PyCharm 2022.3.3<br>
Python 版本为：3.8.5<br>
工作平台：Windows</p>
</blockquote>
<h2 id="_2、表达式概述" tabindex="-1"><a class="header-anchor" href="#_2、表达式概述" aria-hidden="true">#</a> 2、表达式概述</h2>
<h3 id="_2-1-认识表达式" tabindex="-1"><a class="header-anchor" href="#_2-1-认识表达式" aria-hidden="true">#</a> 2.1 认识表达式</h3>
<p>  表达式就是计算的式子，有计算符和操作数组成。表达式必须返回一个值。操作数是参与运算的对象，包括字面值、变量、对象、表达式等。<br>
  Python的表达式是一组代码，它们可以被解释器解析为一个值、对象或操作。表达式可以包括变量、函数调用、运算符、常量等，例如：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 交互式界面</span>
<span class="token string">"python"</span>                <span class="token comment"># 字符串表达式，输出结果为 python</span>
<span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token operator">*</span> <span class="token number">4</span>  				<span class="token comment"># 运算表达式，结果为 14</span>
<span class="token string">"Hello, "</span> <span class="token operator">+</span> <span class="token string">"world!"</span>  	<span class="token comment"># 字符串拼接表达式，结果为 "Hello, world!"</span>
x <span class="token operator">=</span> <span class="token number">42</span>  				<span class="token comment"># 赋值表达式，将值 42 赋给变量 x</span>
<span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span>  			<span class="token comment"># 函数调用表达式，结果为 5</span>

<span class="token comment">#解析器</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span><span class="token string">"python"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>        <span class="token comment"># 字符串表达式，输出结果为 python</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">+</span><span class="token number">3</span><span class="token operator">*</span><span class="token number">4</span><span class="token punctuation">)</span>                <span class="token comment"># 运算表达式，结果为 14</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Hello, "</span> <span class="token operator">+</span> <span class="token string">"world!"</span><span class="token punctuation">)</span> <span class="token comment"># 字符串拼接表达式，结果为 "Hello, world!"</span>
x <span class="token operator">=</span> <span class="token number">42</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>               <span class="token comment"># 赋值表达式，将值 42 赋给变量 x</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>         <span class="token comment"># 函数调用表达式，结果为 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-定义表达式" tabindex="-1"><a class="header-anchor" href="#_2-2-定义表达式" aria-hidden="true">#</a> 2.2 定义表达式</h3>
<blockquote>
<p>简单的表达式：  一个值 一个变量<br>
复杂的表达式：  由简单的表达式组成复杂的表达式嵌套可以组成更复杂表达式<br>
表达式运算：  从内到外，依次逐级上移<br>
表达式运算顺序：  从左到右可以使用小括号改变表达式的运算顺序</p>
</blockquote>
<p>举个例子：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token punctuation">(</span><span class="token number">3</span><span class="token operator">-</span><span class="token number">2</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token operator">+</span><span class="token number">2</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token operator">*</span><span class="token number">2</span><span class="token operator">*</span><span class="token number">1</span><span class="token punctuation">)</span>			<span class="token comment"># 结果= 0</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token operator">-</span><span class="token number">2</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token operator">+</span><span class="token number">2</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token operator">*</span><span class="token number">2</span><span class="token operator">*</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>	<span class="token comment"># 结果= 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>分组</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token operator">></span>c <span class="token keyword">and</span> a<span class="token operator">-</span>b<span class="token operator">&lt;</span>c <span class="token keyword">or</span> a<span class="token operator">></span>b<span class="token operator">></span>c<span class="token punctuation">)</span>	<span class="token comment"># 这样看着比较乱，不好看出什么意思，这个就是未分组</span>
<span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token operator">></span>c<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token operator">-</span>b<span class="token operator">&lt;</span>c<span class="token punctuation">)</span> <span class="token keyword">or</span> <span class="token punctuation">(</span>a<span class="token operator">></span>b<span class="token operator">></span>c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>	<span class="token comment"># 分组了，这样看着就比较清晰了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-认识运算符" tabindex="-1"><a class="header-anchor" href="#_2-3-认识运算符" aria-hidden="true">#</a> 2.3 认识运算符</h3>
<p>运算符表示特点给算法的符号，大部分由标点符号表示（+、-、=等等），少数运算符由单词组成（or、and、in、is、for）。运算符必须与操作数配合使用，组成表达式，才能发挥作用。根据操作数的数量，运算符可分为3中类型：</p>
<ul>
<li>一元运算符：有1个操作数，如：取反、逻辑非not、一元减号一。</li>
<li>二元运算符：有2个操作符，也是最常用的，需要两个操作符结合使用。</li>
<li>三元运算符：有3个操作符，一般用于条件表达式中。</li>
</ul>
<p>Python中的运算符有以下几种：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token number">1.</span> 括号和小数点（最高优先级）
<span class="token number">2.</span> 幂运算符：<span class="token operator">**</span>
<span class="token number">3.</span> 正负号：<span class="token operator">+</span>x<span class="token punctuation">,</span> <span class="token operator">-</span>x
<span class="token number">4.</span> 乘除模运算符：<span class="token operator">*</span>，<span class="token operator">/</span>，<span class="token operator">%</span>
<span class="token number">5.</span> 加减运算符：<span class="token operator">+</span>，<span class="token operator">-</span>
<span class="token number">6.</span> 位运算符：
   <span class="token operator">-</span> 按位取反：<span class="token operator">~</span>
   <span class="token operator">-</span> 位与：<span class="token operator">&amp;</span>
   <span class="token operator">-</span> 位或：<span class="token operator">|</span>
   <span class="token operator">-</span> 异或：<span class="token operator">^</span>
   <span class="token operator">-</span> 左移、右移运算符：<span class="token operator">&lt;&lt;</span><span class="token punctuation">,</span> <span class="token operator">>></span> 
<span class="token number">7.</span> 比较运算符：<span class="token operator">==</span>，<span class="token operator">!=</span>，<span class="token operator">></span>，<span class="token operator">&lt;</span>，<span class="token operator">>=</span>，<span class="token operator">&lt;=</span>
<span class="token number">8.</span> 逻辑运算符：
   <span class="token operator">-</span> 与：<span class="token keyword">and</span>
   <span class="token operator">-</span> 或：<span class="token keyword">or</span>
   <span class="token operator">-</span> 非：<span class="token keyword">not</span>
<span class="token number">9.</span> 赋值运算符：<span class="token operator">=</span>，<span class="token operator">+=</span>，<span class="token operator">-=</span>，<span class="token operator">*=</span>，<span class="token operator">/=</span>，<span class="token operator">%=</span>，<span class="token operator">**=</span>，<span class="token operator">//=</span> 
<span class="token number">10.</span> 身份运算符：
   <span class="token operator">-</span> <span class="token keyword">is</span>
   <span class="token operator">-</span> <span class="token keyword">is</span> <span class="token keyword">not</span>
<span class="token number">11.</span> 成员运算符：
   <span class="token operator">-</span> <span class="token keyword">in</span>
   <span class="token operator">-</span> <span class="token keyword">not</span> <span class="token keyword">in</span>
<span class="token number">12.</span> 最低优先级：逗号（<span class="token punctuation">,</span>）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从高到低排序：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token number">1.</span> 括号和小数点（最高优先级）
<span class="token number">2.</span> 幂运算符：<span class="token operator">**</span>
<span class="token number">3.</span> 正负号：<span class="token operator">+</span>x<span class="token punctuation">,</span> <span class="token operator">-</span>x
<span class="token number">4.</span> 乘除模运算符：<span class="token operator">*</span>，<span class="token operator">/</span>，<span class="token operator">%</span>
<span class="token number">5.</span> 加减运算符：<span class="token operator">+</span>，<span class="token operator">-</span>
<span class="token number">6.</span> 位运算符： <span class="token operator">~</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token punctuation">,</span> <span class="token operator">|</span><span class="token punctuation">,</span> <span class="token operator">^</span><span class="token punctuation">,</span> <span class="token operator">&lt;&lt;</span><span class="token punctuation">,</span> <span class="token operator">>></span>
<span class="token number">7.</span> 比较运算符：<span class="token operator">==</span>，<span class="token operator">!=</span>，<span class="token operator">></span>，<span class="token operator">&lt;</span>，<span class="token operator">>=</span>，<span class="token operator">&lt;=</span>
<span class="token number">8.</span> 逻辑运算符：<span class="token keyword">not</span>，<span class="token keyword">and</span>，<span class="token keyword">or</span>
<span class="token number">9.</span> 赋值运算符：<span class="token operator">=</span>，<span class="token operator">+=</span>，<span class="token operator">-=</span>，<span class="token operator">*=</span>，<span class="token operator">/=</span>，<span class="token operator">%=</span>，<span class="token operator">**=</span>，<span class="token operator">//=</span>
<span class="token number">10.</span> 身份运算符：<span class="token keyword">is</span>，<span class="token keyword">is</span> <span class="token keyword">not</span>
<span class="token number">11.</span> 成员运算符：<span class="token keyword">in</span>，<span class="token keyword">not</span> <span class="token keyword">in</span>
<span class="token number">12.</span> 最低优先级：逗号（<span class="token punctuation">,</span>）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：（常用的数学上的运算）</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># + 与 * 的数字计算</span>
<span class="token number">4</span><span class="token operator">+</span><span class="token number">4</span><span class="token operator">*</span><span class="token number">5</span>
先算<span class="token number">4</span><span class="token operator">*</span><span class="token number">5</span>，因为<span class="token operator">*</span>号的优先级比<span class="token operator">+</span>号高，所以先算乘号；
再算<span class="token number">4</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token operator">*</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token operator">+</span><span class="token number">20</span> <span class="token operator">=</span> <span class="token number">24</span>，所以结果是<span class="token number">24</span>。

<span class="token comment"># / 与 * 的数字计算</span>
<span class="token number">100</span><span class="token operator">/</span><span class="token number">25</span><span class="token operator">*</span><span class="token number">6</span>
这里<span class="token operator">/</span>和<span class="token operator">*</span>是相等的优先级，所以从左到右以此计算：<span class="token punctuation">(</span><span class="token number">100</span><span class="token operator">/</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">6</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token operator">*</span><span class="token number">6</span> <span class="token operator">=</span> <span class="token number">24</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-条件表达式" tabindex="-1"><a class="header-anchor" href="#_2-4-条件表达式" aria-hidden="true">#</a> 2.4 条件表达式</h3>
<p>条件表达式就是属于判断表达式；<br>
条件语句无法参与表达式运算，如果在表达式中应用条件检测，可以选择条件表达式。<br>
条件表达式是python唯一的三元运算符，语法格式如下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token operator">&lt;</span><span class="token boolean">True</span>表达式<span class="token operator">></span> <span class="token keyword">if</span> <span class="token operator">&lt;</span>条件表达式<span class="token operator">></span> <span class="token keyword">else</span> <span class="token operator">&lt;</span><span class="token boolean">False</span>表达式<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果条件表达式为True，则执行True表达式，否则执行False表达式。</p>
<p>【示例1】将变量n的绝对值赋值给变量x</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>n <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入一个数字："</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
x <span class="token operator">=</span> n <span class="token keyword">if</span> n<span class="token operator">>=</span><span class="token number">0</span> <span class="token keyword">else</span> <span class="token operator">-</span>n
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解析：<br>
其中x = n if n &gt;= 0 else -n 表达式等效于下面的条件语句：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">if</span> n<span class="token operator">>=</span><span class="token number">0</span><span class="token punctuation">:</span>
	x <span class="token operator">=</span> n
<span class="token keyword">else</span><span class="token punctuation">:</span>
	x <span class="token operator">=</span> <span class="token operator">-</span>n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>提示：可以使用列表结构来模拟条件表达式，语法格式如下：<br>
[False 表达式,Tre 表达式条件表达式]<br>
针对示例1中的<code v-pre>x = n if n &gt;=0 else -n</code> 一行代码，使用二维列表来表示，代码如下。<br>
x=[-n,n][n&gt;=0]<br>
如果n&gt;=0成立，返回True,转换为数宇1，则从列表中读取第二个元素;如果n&gt;=0不成立，返回 False,转换为数宇0，则从列表中读取第一个元素。</p>
</blockquote>
<p>【示例2】提示输入用户名和密码，如果用户名和密码都输入正确，则提示 “欢迎登录！”，如果用户名或密码输入错误，则提示 “用户名或密码输入错误！”，假定用户名为 test，密码为 123456。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>username <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入用户名："</span><span class="token punctuation">)</span>
userpaswd <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入密码："</span><span class="token punctuation">)</span>
result <span class="token operator">=</span> <span class="token string">"欢迎登陆！"</span><span class="token keyword">if</span> username <span class="token operator">==</span> <span class="token string">"test"</span> <span class="token keyword">and</span> userpaswd <span class="token operator">==</span> <span class="token string">"123456"</span> <span class="token keyword">else</span> <span class="token string">"用户名或密码输入错误！"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可视化解析:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment">#首先用户可以输入用户名和密码</span>
username <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入用户名："</span><span class="token punctuation">)</span>
userpaswd <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入密码："</span><span class="token punctuation">)</span>

<span class="token comment">#if判断，如果username=="test"并且userpasswd=="123456"的话就输出“欢迎登录！”；否则输出“用户名或密码输入错误！”并输出。</span>
<span class="token keyword">if</span> username <span class="token operator">==</span> <span class="token string">"test"</span> <span class="token keyword">and</span> userpaswd <span class="token operator">==</span> <span class="token string">"123456"</span><span class="token punctuation">:</span>
    result <span class="token operator">=</span> <span class="token string">"欢迎登陆！"</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    result <span class="token operator">=</span> <span class="token string">"用户名或密码输入错误！"</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、算术运算" tabindex="-1"><a class="header-anchor" href="#_3、算术运算" aria-hidden="true">#</a> 3、算术运算</h2>
<blockquote>
<p>算数运算包括：加（+）、减（-）、乘（*）、除（/）、求余（%）、求整（//）、求幂（**）</p>
</blockquote>
<ul>
<li>图解：</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161321787.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>【示例1】随机抽取4个1~10之间的数字，编写表达式，使用算术运算让它们总是等于24。注意，每个数字必须使用，且只能使用一次。示例代码如下:</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">4</span><span class="token punctuation">)</span>          <span class="token comment"># 1+4=5 5*4=20 20+4=24</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token operator">*</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span>          <span class="token comment"># 5*3=15 15-9=6 4*6=24</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>     <span class="token comment"># 3+10=13 2*13=26 26-2=24</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">7</span><span class="token punctuation">)</span>      <span class="token comment"># 5*6=30 30+1=31 31-7=24</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>【示例 2】设计一个表达式，求一个数字连续运算2 次，运算结果总等于 6，如 2+2+2=6。如果这个数字为(1)~(9)时，请编写表达式，确保每个表达式的值都为6。</li>
</ul>
<p>(1)当数字为2时，则表达式为:2+2+2。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">+</span><span class="token number">2</span><span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(2)当数字为3时，则表达式为:3*3-3。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token operator">*</span><span class="token number">3</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(3)当数字为5时，则表达式为: 5/5+5。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token operator">/</span><span class="token number">5</span><span class="token operator">+</span><span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(4)当数字为6时，则表达式为:6-6+6。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token operator">-</span><span class="token number">6</span><span class="token operator">+</span><span class="token number">6</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(5)当数字为7时，则表达式为:7-7/7。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token operator">-</span><span class="token number">7</span><span class="token operator">/</span><span class="token number">7</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(6)当数字为4时，则表达式为:  根号4+根号4+根号4</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token operator">**</span><span class="token number">0.5</span><span class="token operator">+</span><span class="token number">4</span><span class="token operator">**</span><span class="token number">0.5</span><span class="token operator">+</span><span class="token number">4</span><span class="token operator">**</span><span class="token number">0.5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(7)当数字为8时，则表达式为: 3根号8+3根号8+3根号8</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token operator">**</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">8</span><span class="token operator">**</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">8</span><span class="token operator">**</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">pow</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token builtin">pow</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token builtin">pow</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（8）当数字为9时，则表达式为：根号9*根号9-根号9</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token operator">**</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">9</span><span class="token operator">**</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">9</span><span class="token operator">**</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">pow</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token builtin">pow</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token builtin">pow</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（9） 当数字为1时，可以使用阶乘，则表达式为：(1+1+1)!，3!=3<em>2</em>1</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> math					    <span class="token comment">#导入数学运算模块</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>factorial<span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>	<span class="token comment">#调用阶乘函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者使用递归两数定义一个求阶乘函数，代码如下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">factorial</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>                           <span class="token comment"># 阶乘函数</span>
    <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>                              <span class="token comment"># 设置终止递归的条件</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> n <span class="token operator">*</span> factorial<span class="token punctuation">(</span> n <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">)</span>       <span class="token comment"># 递归求积</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>factorial<span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>【示例 3】计算 100 以内所有偶数和。</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token builtin">sum</span> <span class="token operator">=</span> <span class="token number">0</span>                     <span class="token comment"># 临时汇总变量</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">101</span><span class="token punctuation">)</span><span class="token punctuation">:</span>        <span class="token comment"># 迭代100以内的所有数字</span>
    <span class="token keyword">if</span> i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>          <span class="token comment"># 如果与2相除=0，则为偶数</span>
        <span class="token builtin">sum</span> <span class="token operator">=</span> <span class="token builtin">sum</span> <span class="token operator">+</span> i       <span class="token comment"># 叠加偶数和</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">sum</span><span class="token punctuation">)</span>                  <span class="token comment"># 输出为：2550</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、赋值运算" tabindex="-1"><a class="header-anchor" href="#_4、赋值运算" aria-hidden="true">#</a> 4、赋值运算</h2>
<ul>
<li>图解：</li>
</ul>
<table>
<thead>
<tr>
<th>运算符</th>
<th>描述</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>=</td>
<td>直接赋值</td>
<td>c = 10		# 变量c的值为10</td>
</tr>
<tr>
<td>+=</td>
<td>先相加，后赋值</td>
<td>c += a  # 等效于c = c+a</td>
</tr>
<tr>
<td>-=</td>
<td>先相减，后赋值</td>
<td>c -= a # 等效于c = c-a</td>
</tr>
<tr>
<td>*=</td>
<td>先相乘，后赋值</td>
<td>c *=a # 等效于c = c*a</td>
</tr>
<tr>
<td>/=</td>
<td>先相除，后赋值</td>
<td>c /=a # 等效于c = c/a</td>
</tr>
<tr>
<td>%=</td>
<td>先取模，后赋值</td>
<td>c %=a # 等效于c = c%a</td>
</tr>
<tr>
<td>**=</td>
<td>先求幂，后赋值</td>
<td>c **=a # 等效于c = c**a</td>
</tr>
<tr>
<td>//=</td>
<td>先整除，后赋值</td>
<td>c //=a # 等效于c = c//a</td>
</tr>
</tbody>
</table>
<ul>
<li>【示例1】要求用户输入字符，然后计算有多少个数字和字母</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>content<span class="token operator">=</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入字符："</span><span class="token punctuation">)</span>         <span class="token comment"># 交互式输入，输入要写的内容</span>
num <span class="token operator">=</span> <span class="token number">0</span>                             <span class="token comment"># 定义变量num，统计数字的个数</span>
<span class="token builtin">str</span> <span class="token operator">=</span> <span class="token number">0</span>                             <span class="token comment"># 定义变量str，统计字符的个数</span>
<span class="token keyword">for</span> n <span class="token keyword">in</span> content<span class="token punctuation">:</span>                   <span class="token comment"># 循环遍历字符串</span>
    <span class="token keyword">if</span> n<span class="token punctuation">.</span>isdecimal<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token boolean">True</span><span class="token punctuation">:</span>         <span class="token comment"># 如果是数字，isdecimal：用于检查字符串是否只包含十进制数字</span>
        num<span class="token operator">+=</span><span class="token number">1</span>                      <span class="token comment"># 那么就加累计加数字个数</span>
    <span class="token keyword">elif</span> n<span class="token punctuation">.</span>isalpha<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token boolean">True</span><span class="token punctuation">:</span>         <span class="token comment"># 如果是字符，isalpha：用于检查字符串是否只包含字母</span>
        <span class="token builtin">str</span><span class="token operator">+=</span><span class="token number">1</span>                      <span class="token comment"># 那么就累计加字符个数</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>                           <span class="token comment"># 否则</span>
        <span class="token keyword">pass</span>                        <span class="token comment"># 空语句，不做任何事情（主打的是一个占位）</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"数字个数："</span><span class="token punctuation">,</span>num<span class="token punctuation">)</span>               <span class="token comment"># 输出数字的个数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"字符个数："</span><span class="token punctuation">,</span><span class="token builtin">str</span><span class="token punctuation">)</span>               <span class="token comment"># 输出字符的个数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161321213.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_5、关系运算" tabindex="-1"><a class="header-anchor" href="#_5、关系运算" aria-hidden="true">#</a> 5、关系运算</h2>
<h3 id="_5-1-大小关系" tabindex="-1"><a class="header-anchor" href="#_5-1-大小关系" aria-hidden="true">#</a> 5.1 大小关系</h3>
<p>  大小关系包含四个运算符，用于比较两个相同类型的操作数。所有比较运算符返回1表示True，返回0表示False。<br>
  操作数可以是字符串或数字，如果是数字，则直接比较大小，如果是字符串，则根据每个字符编码的大小，从左到右按顺序逐个比较。字符比较区分大小写，一般小写字符大于大写字符，如果不区分大小写，可以使用upper()或lower()方法统一字符串的大小写形式，如果操作时是布尔值，则先转化为数字，True为1，False为0，再进行比较。</p>
<ul>
<li>图解：</li>
</ul>
<table>
<thead>
<tr>
<th>运算符</th>
<th>描述</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>&gt;</td>
<td>大于</td>
<td>(10&gt;20)	# 返回False</td>
</tr>
<tr>
<td>&lt;</td>
<td>小于</td>
<td>(10&lt;20)		# 返回True</td>
</tr>
<tr>
<td>&gt;=</td>
<td>大于等于</td>
<td>(10&gt;=20) # 返回False</td>
</tr>
<tr>
<td>&lt;=</td>
<td>小于等于</td>
<td>(10&lt;=20) # 返回True</td>
</tr>
</tbody>
</table>
<ul>
<li>【示例1】要求输入字符串，将小写字符转换为大写字符，将大写字符转换为小写字符。</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token builtin">str</span> <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入字符："</span><span class="token punctuation">)</span>       <span class="token comment"># 接收一个字符串</span>
str1<span class="token operator">=</span><span class="token string">""</span>                         <span class="token comment"># 定义一个空字符串,用于存储转换后的结果</span>
<span class="token keyword">for</span> cha <span class="token keyword">in</span> <span class="token builtin">str</span><span class="token punctuation">:</span>                 <span class="token comment"># 循环遍历字符串</span>
    <span class="token keyword">if</span> <span class="token string">"a"</span> <span class="token operator">&lt;=</span> cha <span class="token operator">&lt;=</span> <span class="token string">"z"</span><span class="token punctuation">:</span>       <span class="token comment"># 判断字符是否是小写,如果是</span>
        cha1 <span class="token operator">=</span> <span class="token builtin">ord</span><span class="token punctuation">(</span>cha<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">32</span>      <span class="token comment"># 那么就将字符转为ASCII值,该值减去32变为大写</span>
    <span class="token keyword">elif</span> <span class="token string">"A"</span> <span class="token operator">&lt;=</span> cha <span class="token operator">&lt;=</span> <span class="token string">"Z"</span><span class="token punctuation">:</span>     <span class="token comment"># 判断字符是否是大写,如果是</span>
        cha1 <span class="token operator">=</span> <span class="token builtin">ord</span><span class="token punctuation">(</span>cha<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">32</span>      <span class="token comment"># 那么就转换为小写字符对应的ASCII值</span>
    str1 <span class="token operator">+=</span> <span class="token builtin">chr</span><span class="token punctuation">(</span>cha1<span class="token punctuation">)</span>           <span class="token comment"># 将ASCII值转为字符型</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span>                     <span class="token comment"># 打印转换后的结果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161321342.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">swap_case</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>                       <span class="token comment"># 定义一个函数swap_case(s),这个函数接受一个字符串s作为输入.</span>
    <span class="token keyword">return</span> s<span class="token punctuation">.</span>swapcase<span class="token punctuation">(</span><span class="token punctuation">)</span>                 <span class="token comment"># 然后调用python的swapcase方法,将大写转换为小写,小写转换为大写;   swapcase:用于将字符串中的所有大写字母转换为小写，并将所有小写字母转换为大写。</span>

input_str <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入一个字符串："</span><span class="token punctuation">)</span>      <span class="token comment"># 定义一个变量,让用户输入字符串;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>swap_case<span class="token punctuation">(</span>input_str<span class="token punctuation">)</span><span class="token punctuation">)</span>               <span class="token comment"># 最后，我们调用我们定义的swap_case()函数，并将用户输入的字符串作为参数传递给它。然后，我们打印出swap_case()函数返回的字符串，这就是转换了大小写的字符串。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161321940.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>【示例2】要求用户输入3个字符串，并比较3个字符串的大小。2个字符串进行大小比较时，时按照从左到右的顺序，依次比较相应位置的字符的ASCII码值的大小。</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>str1 <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入第一个字符串："</span><span class="token punctuation">)</span>              <span class="token comment"># 接收输入的字符串</span>
str2 <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入第二个字符串："</span><span class="token punctuation">)</span>
str3 <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入第三个字符串："</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'前面输入的三个字符串（从左到右）：'</span><span class="token punctuation">,</span>str1<span class="token punctuation">,</span>str2<span class="token punctuation">,</span>str3<span class="token punctuation">)</span>       <span class="token comment"># 打印排序前的字符串顺序</span>
<span class="token keyword">if</span> str1 <span class="token operator">></span> str2<span class="token punctuation">:</span>                     <span class="token comment"># 判断两个字符的大小</span>
    str1<span class="token punctuation">,</span>str2 <span class="token operator">=</span> str2<span class="token punctuation">,</span>str1           <span class="token comment"># 交换两个字符串（后面会学到）下面都是一样的</span>
<span class="token keyword">if</span> str1 <span class="token operator">></span> str3<span class="token punctuation">:</span>
    str1<span class="token punctuation">,</span>str3 <span class="token operator">=</span> str3<span class="token punctuation">,</span>str1
<span class="token keyword">if</span> str2 <span class="token operator">></span> str3<span class="token punctuation">:</span>
    str2<span class="token punctuation">,</span>str3 <span class="token operator">=</span> str3<span class="token punctuation">,</span>str1

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"排序后的字符串："</span><span class="token punctuation">,</span>str1<span class="token punctuation">,</span>str2<span class="token punctuation">,</span>str3<span class="token punctuation">)</span>                      <span class="token comment"># 打印排序后的字符串顺序</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161321036.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_5-2-相等关系" tabindex="-1"><a class="header-anchor" href="#_5-2-相等关系" aria-hidden="true">#</a> 5.2 相等关系</h3>
<p>相等关系包含两个运算符</p>
<ul>
<li>图解：</li>
</ul>
<table>
<thead>
<tr>
<th>运算符</th>
<th>描述</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>==</td>
<td>比较两个对象是否相等</td>
<td>1 == 1  # 返回True</td>
</tr>
<tr>
<td>!=</td>
<td>比较两个对象是否不相等</td>
<td>1 != 1 # 返回False</td>
</tr>
</tbody>
</table>
<p>  相等关系的两个操作数没有类型限制。如果类型不同，则不相等，直接返回 False：如果类型相同，比较值是否相同，如果相同，则返回 True，否则返回 False。如果操作数是布尔值，则先转换为数字，为1，False 为0，再进行比较。</p>
<ul>
<li>【示例】假设有一筐鸡蛋，准备取出，如果：1个1个拿，正好拿完；2个2个拿，还剩1个；3个拿，正好拿完；4个4个拿，还剩1个；5个5个拿，还剩1个；6个6个拿，还剩3个；7个7个 正好拿完；8个8个拿，还剩1个；9个9个拿，正好拿完。问框里最少有多少个鸡蛋。</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>         <span class="token comment"># 假设现在有最多1000个鸡蛋，循环去取i</span>
    <span class="token comment"># 判断，一个一个拿，刚好拿完，那么就是i %(余) 1 = 0；后面以此类推；and在这里是并且（与）的意思，意思就是要满足这些所有条件，才可以输出值；</span>
    <span class="token keyword">if</span> i <span class="token operator">%</span> <span class="token number">1</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">and</span> i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token keyword">and</span> i <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">and</span> i <span class="token operator">%</span> <span class="token number">4</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token keyword">and</span> i <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token keyword">and</span> i <span class="token operator">%</span> <span class="token number">6</span> <span class="token operator">==</span> <span class="token number">3</span> <span class="token keyword">and</span> i <span class="token operator">%</span> <span class="token number">7</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">and</span> i <span class="token operator">%</span> <span class="token number">8</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token keyword">and</span> i <span class="token operator">%</span> <span class="token number">9</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>        <span class="token comment"># 最后输出i，就是框里最少有多少个鸡蛋了；</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161321803.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_6、逻辑运算" tabindex="-1"><a class="header-anchor" href="#_6、逻辑运算" aria-hidden="true">#</a> 6、逻辑运算</h2>
<blockquote>
<p>逻辑运算符包括：逻辑与（and）、逻辑或（or）、逻辑非（not）</p>
</blockquote>
<p>短路逻辑是什么？<br>
  短路逻辑是指在逻辑与或运算中，当已经可以确定整个表达式的值时，后续的运算将不再执行。<br>
  在逻辑与（and）运算中，如果第一个操作数为假，那么无论第二个操作数是真还是假，整个表达式的值都为假（False），因此第二个操作数将不会被执行。<br>
  同样，在逻辑或（or）运算中，如果第一个操作数为真，那么无论第二个操作数是真还是假，整个表达式的值都为真（True），因此第二个操作数将不会被执行。<br>
  这种短路特性可以节省计算资源，并且在实际的编程中经常被用来优化代码。</p>
<h3 id="_6-1-逻辑与-运算" tabindex="-1"><a class="header-anchor" href="#_6-1-逻辑与-运算" aria-hidden="true">#</a> 6.1 逻辑与 运算</h3>
<blockquote>
<p>and 表示只有两个操作数都为True时，才返回True；否则都返回False。</p>
</blockquote>
<ul>
<li>图解：</li>
</ul>
<table>
<thead>
<tr>
<th>第一个操作数</th>
<th>第二个操作数</th>
<th>运算结果</th>
</tr>
</thead>
<tbody>
<tr>
<td>True</td>
<td>True</td>
<td>True</td>
</tr>
<tr>
<td>True</td>
<td>False</td>
<td>False</td>
</tr>
<tr>
<td>False</td>
<td>True</td>
<td>False</td>
</tr>
<tr>
<td>False</td>
<td>False</td>
<td>False</td>
</tr>
</tbody>
</table>
<p>  逻辑与是一种短路逻辑，如果左侧表达式为 False，则直接短路返回结果，不再运算右侧表达式。 因此，在设计逻辑运算时，应确保逻辑运算符左侧的表达式返回值足一个可以预测的值。右侧表达式不应包含有效运算，如函数调用等，因为当左侧表达式为 False 时，则直接跳过右侧表达式，给正常运算带来不确定性。<br>
总的来说，只有左侧是False，那么返回一定是False。</p>
<ul>
<li>【示例】设计用户管理模块，对用户身份进行判断；<br>
1级为“游客”；<br>
2级为“会员：普通会员”；<br>
3级为“会员：高级会员”；<br>
4级为“会员：超级会员”；<br>
5级为“管理员”；<br>
输入其他，则输出：&quot;无效输入，请输入正确的级别号（1-5）！&quot;<br>
使用多分支结构设计如下。</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment">#设计用户管理模块，对用户身份进行判断。使用多分支结构设计如下。</span>
grade <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入你的级别："</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> grade <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"游客"</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> grade <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"会员：普通会员"</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> grade <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"会员：高级会员"</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> grade <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"会员：超级会员"</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> grade <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"管理员"</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"无效输入，请输入正确的级别号（1-5）！"</span><span class="token punctuation">)</span>


<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"-----"</span><span class="token operator">*</span><span class="token number">55</span><span class="token punctuation">)</span>

<span class="token comment"># 使用逻辑运算来写，如下：</span>

grade1 <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入你的级别："</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">str</span> <span class="token operator">=</span> <span class="token punctuation">(</span>grade1 <span class="token operator">==</span> <span class="token number">1</span> <span class="token keyword">and</span> <span class="token string">"游客"</span> <span class="token keyword">or</span>
       grade1 <span class="token operator">==</span> <span class="token number">2</span> <span class="token keyword">and</span> <span class="token string">"会员：普通会员"</span> <span class="token keyword">or</span>
       grade1 <span class="token operator">==</span> <span class="token number">3</span> <span class="token keyword">and</span> <span class="token string">"会员：高级会员"</span> <span class="token keyword">or</span>
       grade1 <span class="token operator">==</span> <span class="token number">4</span> <span class="token keyword">and</span> <span class="token string">"会员：超级会员"</span> <span class="token keyword">or</span>
       grade1 <span class="token operator">==</span> <span class="token number">5</span> <span class="token keyword">and</span> <span class="token string">"管理员"</span> <span class="token keyword">or</span>
                        <span class="token string">"无效输入，请输入正确的级别号（1-5）！"</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161321065.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_6-2-逻辑或-运算" tabindex="-1"><a class="header-anchor" href="#_6-2-逻辑或-运算" aria-hidden="true">#</a> 6.2 逻辑或 运算</h3>
<blockquote>
<p>or 表示两个操作数中只要有一个为True，就返回True；否则就返回False。</p>
</blockquote>
<ul>
<li>图解：</li>
</ul>
<table>
<thead>
<tr>
<th>第一个操作数</th>
<th>第二个操作数</th>
<th>运算结果</th>
</tr>
</thead>
<tbody>
<tr>
<td>True</td>
<td>True</td>
<td>True</td>
</tr>
<tr>
<td>True</td>
<td>False</td>
<td>True</td>
</tr>
<tr>
<td>False</td>
<td>True</td>
<td>True</td>
</tr>
<tr>
<td>False</td>
<td>False</td>
<td>False</td>
</tr>
</tbody>
</table>
<p>  逻辑或也是一种短路逻辑：如果左侧表达式为 True，则直接短路返回结果，不再运算右侧表达；</p>
<ul>
<li>【示例】 假设某校招特长生，设定如下了个招生标准：<br>
第一类，如果钢琴等级在 9 级或以上，且计算机等级在 4 级或以上，则直接通过：；<br>
第二类，如果文化课非常优秀（90分及以上），可以适当降低特长标准，钢琴等级在 5 级或以上，且计算机拿 2 级或以上；<br>
第三类，如果文化课及格（60分及以上，90分以下），则按正常标准录取，钢琴等级在 7 级或以上，且计算机等级在3级或以上。<br>
根据上述设定条件，编写简单的特招录取检测程序如下。</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 首先，找出上述所需的条件都有哪些：考号、文化课成绩、钢琴等级、计算机等级</span>
<span class="token comment"># 其次，要求用户输入自己的成绩</span>
<span class="token builtin">id</span> <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入自己的考号："</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> <span class="token builtin">id</span> <span class="token operator">></span> <span class="token number">20230601</span> <span class="token keyword">and</span> <span class="token builtin">id</span> <span class="token operator">&lt;</span> <span class="token number">20232000</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"符合招生条件，请填成绩单！"</span><span class="token punctuation">)</span>
    culture <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入自己的文化课成绩："</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    piano <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入自己的钢琴等级："</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    computer <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入自己的计算机等级："</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># 判断：钢琴大于等于9级并且计算机大于等于4级，录取；或者；文化大于等于90并且钢琴大于等于5级并且计算机大于等于2级，录取；或者；文化大于等于60并且小于90（合格）并且钢琴大于等于7级并且计算机大于等于3级，录取。</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>piano <span class="token operator">>=</span> <span class="token number">9</span> <span class="token keyword">and</span> computer <span class="token operator">>=</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token keyword">or</span> <span class="token punctuation">(</span>culture <span class="token operator">>=</span> <span class="token number">90</span> <span class="token keyword">and</span> piano <span class="token operator">>=</span> <span class="token number">5</span> <span class="token keyword">and</span> computer <span class="token operator">>=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">or</span> <span class="token punctuation">(</span>culture <span class="token operator">>=</span> <span class="token number">60</span> <span class="token keyword">and</span> culture <span class="token operator">&lt;</span> <span class="token number">90</span> <span class="token keyword">and</span> piano <span class="token operator">>=</span> <span class="token number">7</span> <span class="token keyword">and</span> computer <span class="token operator">>=</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"恭喜被我校录用！！！"</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"很遗憾，您被淘汰了！"</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"不符合招生条件！"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161321202.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>上述示例仅做测试数据，不可用到生活中，如需用到生活中，需要改一些代码；因为：我这还有一些漏洞的，比如：成绩和等级没有上限和下限，只有高于。</p>
<h3 id="_6-3-逻辑非-运算" tabindex="-1"><a class="header-anchor" href="#_6-3-逻辑非-运算" aria-hidden="true">#</a> 6.3 逻辑非 运算</h3>
<blockquote>
<p>not 仅包含一个操作数，表示把操作数转换为布尔值，然后返回取反后的布尔值。<br>
逻辑与 和 逻辑或 运算的返回值不必是布尔值，但是逻辑非运算的返回值一定是布尔值，而不是表达式的原值；</p>
</blockquote>
<p>【示例】逻辑非运算，如果执行两次逻辑非运算操作，相当于把操作数转换为布尔值；</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">not</span> <span class="token number">0</span><span class="token punctuation">)</span>                <span class="token comment"># 返回True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">not</span> <span class="token keyword">not</span> <span class="token number">0</span><span class="token punctuation">)</span>            <span class="token comment"># 返回False</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">not</span> <span class="token keyword">not</span> <span class="token keyword">not</span> <span class="token number">0</span><span class="token punctuation">)</span>        <span class="token comment"># 返回True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">not</span> <span class="token keyword">not</span> <span class="token keyword">not</span> <span class="token keyword">not</span> <span class="token number">0</span><span class="token punctuation">)</span>    <span class="token comment"># 返回False</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">not</span> <span class="token boolean">False</span><span class="token punctuation">)</span>            <span class="token comment"># 返回True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">)</span>             <span class="token comment"># 返回True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">not</span> <span class="token string">""</span><span class="token punctuation">)</span>               <span class="token comment"># 返回True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7、位运算" tabindex="-1"><a class="header-anchor" href="#_7、位运算" aria-hidden="true">#</a> 7、位运算</h2>
<p>位运算符一共有6个，分为如下两类：</p>
<ul>
<li>逻辑位运算：位与（&amp;）、位或（|）、位异或（^）、位非（~）</li>
<li>移位运算：左移（&lt;&lt;）和右移（&gt;&gt;）</li>
</ul>
<h3 id="_7-1-逻辑位运算" tabindex="-1"><a class="header-anchor" href="#_7-1-逻辑位运算" aria-hidden="true">#</a> 7.1 逻辑位运算</h3>
<ul>
<li>图解1：&amp; 位与运算符</li>
</ul>
<blockquote>
<p>&amp; 运算符表示<font color=red> 位与</font>，对两个二进制操作数逐位进行比较。在位运算中，True代表的1，False代表的是0。和上述的<font color=red> 逻辑与 </font>是一个道理；</p>
</blockquote>
<table>
<thead>
<tr>
<th>第一个数值</th>
<th>第二个数值</th>
<th>运算结果</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>0</td>
<td>0</td>
<td>0</td>
</tr>
</tbody>
</table>
<ul>
<li>图解2：| 位或运算符</li>
</ul>
<blockquote>
<p>| 运算符表示<font color=red> 位或</font>，对两个二进制操作数逐位进行比较。和上述的<font color=red> 逻辑或</font> 是一个道理；</p>
</blockquote>
<table>
<thead>
<tr>
<th>第一个数值</th>
<th>第二个数值</th>
<th>运算结果</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>1</td>
<td>0</td>
<td>1</td>
</tr>
<tr>
<td>0</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>0</td>
<td>0</td>
<td>0</td>
</tr>
</tbody>
</table>
<ul>
<li>图解3：^ 位异或运算符</li>
</ul>
<blockquote>
<p>^ 运算符表示<font color=red> 位异或</font>，对两个二进制操作数逐位进行比较。<br>
只要第一个数值和第二个数值不一样（一个1或一个0），则运算结果为1（True）；相反，数值1和数值2结果相同时，运算结果为0（False）</p>
</blockquote>
<table>
<thead>
<tr>
<th>第一个数值</th>
<th>第二个数值</th>
<th>运算结果</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>1</td>
<td>0</td>
<td>1</td>
</tr>
<tr>
<td>0</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>0</td>
<td>0</td>
<td>0</td>
</tr>
</tbody>
</table>
<ul>
<li>图解4：~ 位非运算符</li>
</ul>
<blockquote>
<p>~ 运算符表示<font color=red>  位非</font>，对一个二进制操作数逐位进行取反操作。</p>
</blockquote>
<p>【示例】使用位运算对用户输入的数字进行加密。加密过程如下：<br>
第1步：先接收用户输入的数字（仅接收整数）；<br>
第2步：对数字执行左移5位运算符；（为运算为超纲，在下一小节来着，不过前面已经说了移位符号，那么应该可以理解的；）<br>
第3步：在对移位后的数字执行按位取反运算；<br>
第4步：去掉负号。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>password <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入一个数字（仅接收整数）："</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"你输入的数字为：%s"</span><span class="token operator">%</span>password<span class="token punctuation">)</span>                    <span class="token comment"># %s占位符，%password将值给到占位符</span>
new_password <span class="token operator">=</span> <span class="token operator">-</span><span class="token punctuation">(</span><span class="token operator">~</span><span class="token punctuation">(</span>password <span class="token operator">&lt;&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                   <span class="token comment"># -为去掉负号，~为取反，&lt;&lt; 5 为向左偏移5.</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"对数字执行左移5位运算符结果为：%s"</span><span class="token operator">%</span>new_password<span class="token punctuation">)</span>
old_password <span class="token operator">=</span> <span class="token operator">-</span><span class="token punctuation">(</span><span class="token operator">~</span><span class="token punctuation">(</span>new_password<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">>></span> <span class="token number">5</span>               <span class="token comment"># -为去掉负号，~为取反，&lt;&lt; 5 为向右偏移5.</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"在对移位后的数字执行按位取反运算结果为：%s"</span><span class="token operator">%</span>old_password<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161321403.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_7-2-移位运算" tabindex="-1"><a class="header-anchor" href="#_7-2-移位运算" aria-hidden="true">#</a> 7.2 移位运算</h3>
<blockquote>
<font color=red> &lt&lt 运算符为左移位运算符；</font>在移位运算过程中，符号位始终保持不变，如果右侧空出位置，则自动填充为0；如果超过32为值，则自动丢弃。<br><font color=red> &gt&gt 运算符为右移位运算符；</font>与左移位运算相反；它吧32位的二进制数中的所有有效位整体右移，再使用符号位的值填充空位。移动过程中超出的值将被丢弃。</blockquote>
</div></template>


