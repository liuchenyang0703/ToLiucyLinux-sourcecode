<template><div><figure><img src="https://img-blog.csdnimg.cn/direct/5cf90d2d830046058e5fa8768d5f47f4.jpeg" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<blockquote>
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
<h1 id="脚本式流水线" tabindex="-1"><a class="header-anchor" href="#脚本式流水线" aria-hidden="true">#</a> 脚本式流水线</h1>
<blockquote>
<p>学习脚本式流水线，我们先学<code v-pre>groovy</code>语法；<font color=red>脚本式流水线都是运行在<code v-pre>script</code>中的。</font></p>
</blockquote>
<h1 id="groovy语法" tabindex="-1"><a class="header-anchor" href="#groovy语法" aria-hidden="true">#</a> groovy语法</h1>
<h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2>
<blockquote>
<p>和java、python一样的，（使用//）、多行（/* */）和文档注释（使用/** */）。</p>
</blockquote>
<h2 id="标识符" tabindex="-1"><a class="header-anchor" href="#标识符" aria-hidden="true">#</a> 标识符</h2>
<p>标识符也称为变量名；以字母、美元符号$或下划线_开始，不能以数字开始。</p>
<blockquote>
<p>以下是可用的标识符：</p>
<ul>
<li>def name</li>
<li>def name_age</li>
<li>def $name</li>
<li>def name2<br>
<br></li>
</ul>
<hr>
<p>以下是不可用的标识符：</p>
<ul>
<li>def name+age</li>
<li>def name#age</li>
<li>def 1name</li>
</ul>
</blockquote>
<h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2>
<p>在Groovy中字符串有两种类型，一种是Java原生的java.lang.String；另一种是groovy.lang.GString，又叫<strong>插值字符串</strong>(interpolated strings)。</p>
<h3 id="单引号字符串-single-quoted-string" tabindex="-1"><a class="header-anchor" href="#单引号字符串-single-quoted-string" aria-hidden="true">#</a> 单引号字符串（Single quoted string）</h3>
<p>在Groovy中，使用单引号括住的字符串就是java.lang.String，<font color=red>不支持插值：</font></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>def name <span class="token operator">=</span> <span class="token string">'dancs'</span>

println name.class <span class="token comment"># class java.lang.String</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三单引号字符串-triple-single-quoted-string" tabindex="-1"><a class="header-anchor" href="#三单引号字符串-triple-single-quoted-string" aria-hidden="true">#</a> 三单引号字符串（Triple single quoted string）</h3>
<p>使用三单引号括住字符串支持多行，也是java.lang.String实例，在第一个’‘’起始处加一个反斜杠\可以在新一行开始文本：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>def strippedFirstNewline <span class="token operator">=</span> '''line one

line two

line three

'''

<span class="token comment">// 可以写成下面这种形式，可读性更好</span>

def strippedFirstNewline <span class="token operator">=</span> '''\

line one

line two

line three
'''
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="双引号字符串-double-quoted-string" tabindex="-1"><a class="header-anchor" href="#双引号字符串-double-quoted-string" aria-hidden="true">#</a> 双引号字符串（Double quoted string）</h3>
<p>如果双引号括住的字符串中没有插值表达式（interpolated expression），那它就是java.lang.String；如是有插值表达式，那它就是groovy.lang.GString：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>def normalStr <span class="token operator">=</span> <span class="token string">"yjiyjige"</span> <span class="token comment">// 这是一个java.lang.String</span>

def interpolatedStr <span class="token operator">=</span> <span class="token string">"my name is ${normalStr}"</span> <span class="token comment">// 这是一个groovy.lang.GString</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串插值-string-interpolation" tabindex="-1"><a class="header-anchor" href="#字符串插值-string-interpolation" aria-hidden="true">#</a> 字符串插值（String interpolation）</h3>
<p>在Groovy语法中，所有的字符串字面量表示中，除了<code v-pre>单引号字符串</code>和<code v-pre>三单引号字符串</code>之外，其他形式都支持字符串插值。字符串插值，也即将占位表达式中的结果最终替换到字符串相应的位置中：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>def name <span class="token operator">=</span> '<span class="token class-name">Guillaume</span>' <span class="token comment">// 单引号不支持插值，定义一个变量值</span>
def greeting <span class="token operator">=</span> <span class="token string">"Hello ${name}"</span> <span class="token comment">// name变量的值会被替换进去</span>

print greeting<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> '<span class="token class-name">Hello</span> <span class="token class-name">Guillaume</span>'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Jenkins流水线中的<code v-pre>script</code>中使用：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any
    
    stages <span class="token punctuation">{</span>
        stage('script') <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                echo "Scripted block"
                script <span class="token punctuation">{</span>
					def name = 'Guillaume'
					def greeting = "Hello $<span class="token punctuation">{</span>name<span class="token punctuation">}</span>" 
					print greeting.toString()
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为：</p>
<figure><img src="https://img-blog.csdnimg.cn/direct/9a4d8ef3390f48e98c1f1180b6a4ce13.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<hr>
<p>当使用点号表达式时，可以只用$代替${}：</p>
<blockquote>
<p>点号表达式为：<code v-pre>变量名.字典key</code></p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//定义变量字典</span>
def person <span class="token operator">=</span> <span class="token punctuation">[</span>name<span class="token operator">:</span> '<span class="token class-name">Guillaume</span>'<span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">]</span>
<span class="token comment">// 输出信息，调用变量</span>
println <span class="token string">"$person.name is $person.age years old"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Jenkins流水线中的<code v-pre>script</code>中使用：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any
    
    stages <span class="token punctuation">{</span>
        stage('script') <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                echo "Scripted block"
                script <span class="token punctuation">{</span>
					def person = <span class="token punctuation">[</span><span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">'zhangsan'</span><span class="token punctuation">,</span> <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">]</span>
					println "$person.name is $person.age years old"
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为：<code v-pre>zhangsan is 30 years old</code></p>
<figure><img src="https://img-blog.csdnimg.cn/direct/db5a0747c6da447dbf47cbdf6db42aa3.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 注意还有一种小数点值输出的方式</span>

def number <span class="token operator">=</span> <span class="token number">3.14</span>

println <span class="token string">"$number.toString()"</span> <span class="token comment">// 这里会报异常,因为相当于"${number.toString}()"</span>

println <span class="token string">"${number.toString()}"</span> <span class="token comment">// 这样就正常了</span>
<span class="token comment">// 或者直接使用变量，就不会有小数点的报错了</span>
println <span class="token string">"$number"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h2>
<p>默认情况下Groovy的列表使用的是java.util.ArrayList，用中括号[]括住，使用逗号分隔：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>def number <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看指定列表值" tabindex="-1"><a class="header-anchor" href="#查看指定列表值" aria-hidden="true">#</a> 查看指定列表值</h3>
<p>列表值是从0开始算的，输出第1个内容的时候为0；</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>def number1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
print <span class="token string">"${number1[1]}"</span>
<span class="token comment">// 返回的就是：2，如果[中写的0]返回的就是1；以此类推；</span>
<span class="token comment">// 如果[中写的是4]超过了列表值，那么就返回的null。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是在Jenkins流水线的<code v-pre>script</code>下使用：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any
    
    stages <span class="token punctuation">{</span>
        stage('script') <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                echo "Scripted block"
                script <span class="token punctuation">{</span>
					def number1 = <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
					print "正常查看第1个列表值，结果为：$<span class="token punctuation">{</span>number1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span>"
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果为：2</p>
<figure><img src="https://img-blog.csdnimg.cn/direct/87b98d5eacdf418ca7800c646f999668.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<blockquote>
<p>注意：如果<code v-pre>print &quot;$number[1]&quot;</code>不是用<code v-pre>{}</code>输出，那么输出的内容将是：<code v-pre>[1, 2, 3, 4][1]</code>;</p>
</blockquote>
<hr>
<h3 id="查看列表值从前往后找" tabindex="-1"><a class="header-anchor" href="#查看列表值从前往后找" aria-hidden="true">#</a> 查看列表值从前往后找</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>def number2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
print <span class="token string">"${number2[-1]}"</span>

<span class="token comment">// 结果为：4；[-2]就是3；以此类推。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是在Jenkins流水线的<code v-pre>script</code>下使用：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any
    
    stages <span class="token punctuation">{</span>
        stage('script') <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                echo "Scripted block"
                script <span class="token punctuation">{</span>
					def number1 = <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
					print "正常查看第1个列表值，结果为：$<span class="token punctuation">{</span>number1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span>"
					
					def number2 = <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
					print "从后往前查看第一个值，结果为：$<span class="token punctuation">{</span>number2<span class="token punctuation">[</span><span class="token number">-1</span><span class="token punctuation">]</span><span class="token punctuation">}</span>"	
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果为：4</p>
<figure><img src="https://img-blog.csdnimg.cn/direct/e7be6ef136ce48cc9dc0d578b00d1520.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<hr>
<h3 id="直接修改列表值" tabindex="-1"><a class="header-anchor" href="#直接修改列表值" aria-hidden="true">#</a> 直接修改列表值</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>def number3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
number3<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">6</span>
print <span class="token string">"${number3[2]}"</span>

<span class="token comment">// 输出结果为：6，如果选择[1]的话，那么输出的结果就还是2。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是在Jenkins流水线的<code v-pre>script</code>下使用：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any
    
    stages <span class="token punctuation">{</span>
        stage('script') <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                echo "Scripted block"
                script <span class="token punctuation">{</span>
					def number1 = <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
					print "正常查看第1个列表值，结果为：$<span class="token punctuation">{</span>number1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span>"
					
					def number2 = <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
					print "从后往前查看第一个值，结果为：$<span class="token punctuation">{</span>number2<span class="token punctuation">[</span><span class="token number">-1</span><span class="token punctuation">]</span><span class="token punctuation">}</span>"
					
					def number3 = <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
					number3<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> = 6
					print "修改的第2个值为：$<span class="token punctuation">{</span>number3<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">}</span>"	
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果为：6</p>
<figure><img src="https://img-blog.csdnimg.cn/direct/5db4aaae829e49e88d2f36ac10ad579f.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<hr>
<h3 id="在列表中往后面添加一个值" tabindex="-1"><a class="header-anchor" href="#在列表中往后面添加一个值" aria-hidden="true">#</a> 在列表中往后面添加一个值</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>def number4 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
number4<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">5</span>
print <span class="token string">"在最后添加一个值，结果为：${number4[4]}"</span>
<span class="token comment">// 结果为：5</span>
print <span class="token string">"此列表中现在所有的结果为：$number4"</span>
<span class="token comment">// 结果为：[1,2,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是在Jenkins流水线的<code v-pre>script</code>下使用：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any
    
    stages <span class="token punctuation">{</span>
        stage('script') <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                echo "Scripted block"
                script <span class="token punctuation">{</span>
					def number1 = <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
					print "正常查看第1个列表值，结果为：$<span class="token punctuation">{</span>number1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span>"
					
					def number2 = <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
					print "从后往前查看第一个值，结果为：$<span class="token punctuation">{</span>number2<span class="token punctuation">[</span><span class="token number">-1</span><span class="token punctuation">]</span><span class="token punctuation">}</span>"
					
					def number3 = <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
					number3<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> = 6
					print "修改的第2个值为：$<span class="token punctuation">{</span>number3<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">}</span>"	
					
					def number4 = <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
                    number4<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> = 5
                    print "在最后添加一个值，结果为：$<span class="token punctuation">{</span>number4<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">}</span>"
                    print "此列表中现在所有的结果为：$number4"
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/direct/f161377fef0945a5b042fc2f14671b47.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<hr>
<h3 id="指定输出列表值" tabindex="-1"><a class="header-anchor" href="#指定输出列表值" aria-hidden="true">#</a> 指定输出列表值</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>def number5 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">]</span>
print <span class="token string">"指定取出列表第1、5、9、3的值：${number5[1,5,9,3]}"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是在Jenkins流水线的<code v-pre>script</code>下使用：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any
    
    stages <span class="token punctuation">{</span>
        stage('script') <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                echo "Scripted block"
                script <span class="token punctuation">{</span>
					def number1 = <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
					print "正常查看第1个列表值，结果为：$<span class="token punctuation">{</span>number1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span>"
					
					def number2 = <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
					print "从后往前查看第一个值，结果为：$<span class="token punctuation">{</span>number2<span class="token punctuation">[</span><span class="token number">-1</span><span class="token punctuation">]</span><span class="token punctuation">}</span>"
					
					def number3 = <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
					number3<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> = 6
					print "修改的第2个值为：$<span class="token punctuation">{</span>number3<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">}</span>"	
					
					def number4 = <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
                    number4<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> = 5
                    print "在最后添加一个值，结果为：$<span class="token punctuation">{</span>number4<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">}</span>"
                    print "此列表中现在所有的结果为：$number4"
                    
                    def number5 = <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">]</span>
                    print "指定取出列表第1、5、9、3的值：$<span class="token punctuation">{</span>number5<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">}</span>"
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果为：[2, 6, 10, 4]</p>
<figure><img src="https://img-blog.csdnimg.cn/direct/3155a247bce84e3bad53bffa9e1a204d.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<hr>
<h3 id="二维列表" tabindex="-1"><a class="header-anchor" href="#二维列表" aria-hidden="true">#</a> 二维列表</h3>
<p>在Groovy（以及许多其他编程语言中）中，二维列表（或称为列表的列表）是一个列表，其中的每个元素也是一个列表。换句话说，它是一个列表的嵌套结构。下面是个例子:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>def twoDimensionalList <span class="token operator">=</span> <span class="token punctuation">[</span>  
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  
    <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  
    <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span>  
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单来说，在列表的基础上；用一个大的中括号，套多个中括号列表，称为二维列表。</p>
<p>下面是在Jenkins流水线的<code v-pre>script</code>下使用：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any
    
    stages <span class="token punctuation">{</span>
        stage('script') <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                echo "Scripted block"
                script <span class="token punctuation">{</span>
					def number1 = <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
					print "正常查看第1个列表值，结果为：$<span class="token punctuation">{</span>number1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span>"
					
					def number2 = <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
					print "从后往前查看第一个值，结果为：$<span class="token punctuation">{</span>number2<span class="token punctuation">[</span><span class="token number">-1</span><span class="token punctuation">]</span><span class="token punctuation">}</span>"
					
					def number3 = <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
					number3<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> = 6
					print "修改的第2个值为：$<span class="token punctuation">{</span>number3<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">}</span>"	
					
					def number4 = <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
                    number4<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> = 5
                    print "在最后添加一个值，结果为：$<span class="token punctuation">{</span>number4<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">}</span>"
                    print "此列表中现在所有的结果为：$number4"
                    
                    def number5 = <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">]</span>
                    print "指定取出列表第1、5、9、3的值：$<span class="token punctuation">{</span>number5<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">}</span>"
                    
                    def number6 = <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'壹'</span><span class="token punctuation">,</span> <span class="token string">'叁'</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span><span class="token string">'c'</span><span class="token punctuation">,</span><span class="token string">'d'</span><span class="token punctuation">,</span><span class="token string">'f'</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
                    print "二维列表中，指定输出的值为：$<span class="token punctuation">{</span>number6<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">}</span>"
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果为：f</p>
<figure><img src="https://img-blog.csdnimg.cn/direct/3645895627594850b62473943dd6abae.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<blockquote>
<p>解析：<br>
二维列表 列表值可以多写，但是输出的内容只能是两个值，多的话就会报错；<br>
输出的内容列表[ ] ：第一个是子列表的意思；第二个是子列表中的内容的意思；<br>
所以，第一个值是2，那我们找的就是第三个子列表，因为从0开始计算嘛；第二个值是3，那我们找的是第三个子列表中的第4个值，当然也是从0开始计算的，所以结果是f。</p>
</blockquote>
<h2 id="字典-maps" tabindex="-1"><a class="header-anchor" href="#字典-maps" aria-hidden="true">#</a> 字典（Maps）</h2>
<p>在<code v-pre>Groovy</code>语法中，使用中括号[]来定义字典，和<code v-pre>列表</code>一样，都是使用中括号[]，但区别为列表[]里是具体的值，而字典里是需要包含<code v-pre>key</code>和<code v-pre>value</code>，key和value之间使用冒号分隔，元素与元素之间用逗号分隔；</p>
<p>下面一个基本的例子：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>def people <span class="token operator">=</span> <span class="token punctuation">[</span>name<span class="token operator">:</span>'zhangsan<span class="token char">',age:'</span><span class="token number">18</span><span class="token char">',sex:'</span>男'<span class="token punctuation">,</span>height<span class="token operator">:</span><span class="token char">'180'</span><span class="token punctuation">]</span>
print <span class="token string">"姓名为：${people.name}，年龄为：${people.age}，性别为：${people.sex}，身高为：${people.height}"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是在Jenkins流水线的<code v-pre>script</code>下使用：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any
    
    stages <span class="token punctuation">{</span>
        stage('script <span class="token punctuation">-</span><span class="token punctuation">-</span> Maps') <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                echo "Scripted block"
                script <span class="token punctuation">{</span>
					def people = <span class="token punctuation">[</span>name<span class="token punctuation">:</span><span class="token string">'zhangsan'</span><span class="token punctuation">,</span>age<span class="token punctuation">:</span><span class="token string">'18'</span><span class="token punctuation">,</span>sex<span class="token punctuation">:</span><span class="token string">'男'</span><span class="token punctuation">,</span>height<span class="token punctuation">:</span><span class="token string">'180'</span><span class="token punctuation">]</span>
					print "姓名为：$<span class="token punctuation">{</span>people.name<span class="token punctuation">}</span>，年龄为：$<span class="token punctuation">{</span>people.age<span class="token punctuation">}</span>，性别为：$<span class="token punctuation">{</span>people.sex<span class="token punctuation">}</span>，身高为：$<span class="token punctuation">{</span>people.height<span class="token punctuation">}</span>"
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果为：</p>
<figure><img src="https://img-blog.csdnimg.cn/direct/1a9fdfb805c54e5886353f562f940c92.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="条件语句-if-else判断" tabindex="-1"><a class="header-anchor" href="#条件语句-if-else判断" aria-hidden="true">#</a> 条件语句 if/else判断</h2>
<p>pipeline脚本同其它脚本语言一样，从上至下顺序执行，它的流程控制取决于Groovy表达式，如if/else条件语句：</p>
<ul>
<li>语法：</li>
</ul>
<div class="language-groovy line-numbers-mode" data-ext="groovy"><pre v-pre class="language-groovy"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>条件<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	echo <span class="token interpolation-string"><span class="token string">"要输出的值"</span></span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
	echo <span class="token interpolation-string"><span class="token string">"要输出的值2"</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>script</code> 示例：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any
    
    stages <span class="token punctuation">{</span>
        stage('script <span class="token punctuation">-</span><span class="token punctuation">-</span> if/else') <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                echo "Scripted block"
                script <span class="token punctuation">{</span>
					if(env.BRANCH_NAME == 'master')<span class="token punctuation">{</span>
					    echo 'I only execute on the master branch'
					<span class="token punctuation">}</span>else<span class="token punctuation">{</span>
					    echo 'I execute elsewhere'
					<span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>判断，如果是在master分支上执行的那么就输出：<code v-pre>I only execute on the master branch</code>，否则就输出：<code v-pre>I execute elsewhere</code>；</p>
<font color=red>env.BRANCH_NAME</font>是流水线语法中的全局变量，可在此查看全局变量都有什么：<a href="http://ip:port/job/my_pipeline/pipeline-syntax/globals" target="_blank" rel="noopener noreferrer">http://ip:port/job/my_pipeline/pipeline-syntax/globals<ExternalLinkIcon/></a><blockquote>
<p>注：<font color=red>ip:port</font> 替换为自己的ip和端口</p>
</blockquote>
<p>执行结果为：<code v-pre>I execute elsewhere</code>，因为我们没有开启多分支所以没有分支的说法，所以是false判断；</p>
<figure><img src="https://img-blog.csdnimg.cn/direct/2070c2ba46324143957acc44e75751e7.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="for循环" tabindex="-1"><a class="header-anchor" href="#for循环" aria-hidden="true">#</a> for循环</h2>
<p>for 循环用于遍历一组值。用法和JAVA是一样的；</p>
<ul>
<li>for循环语法：</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>for<span class="token punctuation">(</span>int i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">5</span><span class="token punctuation">;</span>i++<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	println <span class="token string">"循环第<span class="token variable">${i}</span>次"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>在Jenkins的<code v-pre>script</code>中使用：</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any
    
    stages <span class="token punctuation">{</span>
        stage('script <span class="token punctuation">-</span><span class="token punctuation">-</span> for') <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                echo "Scripted block"
                script <span class="token punctuation">{</span>
					for(int i = 1;i&lt;=5;i++) <span class="token punctuation">{</span>
	                    println "循环第$<span class="token punctuation">{</span>i<span class="token punctuation">}</span>次";
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/direct/8cfa0dc6de944fe5a523100bef531174.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>进阶for循环，在Jenkins的<code v-pre>script</code>中使用：</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>pipeline {
    agent any
    
    stages {
        stage('script -- for') {
            steps {
                echo "Scripted block"
                script {
					def array = ['language','mathematics','English']
					for (i = 0;i &lt; array.size();i++) {
					    echo "This is ${array[i]}, The ${i}th array;"
					}
                }
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p>
<figure><img src="https://img-blog.csdnimg.cn/direct/43549d0ba9da4910a89ef682273a6d6f.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="异常处理try-catch-finally" tabindex="-1"><a class="header-anchor" href="#异常处理try-catch-finally" aria-hidden="true">#</a> 异常处理try/catch/finally</h2>
<p>pipeline脚本流程控制的另一种方式是Groovy的异常处理机制。当任何一个步骤因各种原因而出现异常时，都必须在Groovy中使用try/catch/finally语句块进行处理</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>  
    agent any  
  
    stages <span class="token punctuation">{</span>  
        stage('Example Stage with Exception Handling') <span class="token punctuation">{</span>  
            steps <span class="token punctuation">{</span>  
                script <span class="token punctuation">{</span>  
                    try <span class="token punctuation">{</span>  
                        // 尝试执行的代码块  
                        echo "Trying to execute some code<span class="token punctuation">...</span>"  
                        // 这里可以调用其他函数或执行可能抛出异常的步骤  
                        // 例如，模拟一个异常：  
                        throw new Exception("Something went wrong<span class="token tag">!</span>")  
                    <span class="token punctuation">}</span> catch (Exception e) <span class="token punctuation">{</span>  
                        // 捕获并处理异常  
                        <span class="token key atrule">echo "Caught an exception</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>e.getMessage()<span class="token punctuation">}</span>"  
                        // 可以选择标记构建为失败，或者进行其他错误处理  
                        currentBuild.result = 'FAILURE'  
                    <span class="token punctuation">}</span> finally <span class="token punctuation">{</span>  
                        // 无论是否发生异常，都会执行的代码块  
                        echo "This will always be executed<span class="token punctuation">,</span> regardless of exceptions."  
                        // 可以在这里执行清理操作或其他必要的步骤  
                    <span class="token punctuation">}</span>  
                <span class="token punctuation">}</span>  
            <span class="token punctuation">}</span>  
        <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code v-pre>try</code> 块包含可能会抛出异常的代码。如果 <code v-pre>try</code> 块中的代码抛出了异常，那么控制流会立即跳转到与异常类型匹配的 <code v-pre>catch</code> 块（在这个例子中是 <code v-pre>Exception</code> 类型）。在 <code v-pre>catch</code> 块中，你可以处理异常，比如记录错误消息或者设置构建的状态。</p>
<p>无论 <code v-pre>try</code> 块中的代码是否抛出异常，<code v-pre>finally</code> 块中的代码都会被执行。这通常用于执行清理操作，比如关闭文件句柄、释放资源等。</p>
<p>请注意，在 Jenkins Pipeline 脚本中，使用 <code v-pre>currentBuild.result = 'FAILURE'</code> 可以将构建状态标记为失败。这通常在捕获到异常并希望停止构建流程时非常有用。如果 <code v-pre>finally</code> 块中的代码也可能失败，你可能还需要在 <code v-pre>finally</code> 块中进一步处理异常，以确保所有的清理工作都能正确完成。</p>
<h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h1>
<blockquote>
<p>  这一节，基本上对<code v-pre>jenkins</code>的<code v-pre>pipeline</code>脚本式流水线及groovy语法做了比较完整的介绍，在以后再看pipeline脚本时，可能还会接触到许多插件提供的函数或更多的指令，但是它们都逃不开pipeline脚本的基本结构，掌握了基础语法，后面才能更上一层楼。</p>
</blockquote>
<h1 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献：</h1>
<blockquote>
<p>文章参考与：</p>
<p><a href="https://zhuanlan.zhihu.com/p/618808986" target="_blank" rel="noopener noreferrer">【Jenkins系列】-Pipeline语法全集<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/662830371" target="_blank" rel="noopener noreferrer">jenkins 原理篇——pipeline流水线 声明式语法详解<ExternalLinkIcon/></a><br>
<a href="https://zhuanlan.zhihu.com/p/74792026" target="_blank" rel="noopener noreferrer">Jenkins扩展篇-Groovy语法简介<ExternalLinkIcon/></a></p>
</blockquote>
<h1 id="相关专栏" tabindex="-1"><a class="header-anchor" href="#相关专栏" aria-hidden="true">#</a> 相关专栏</h1>
<table>
<thead>
<tr>
<th>专栏名称</th>
<th>专栏地址</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://blog.csdn.net/liu_chen_yang/category_12493057.html" target="_blank" rel="noopener noreferrer">《Jenkins》<ExternalLinkIcon/></a></td>
<td><a href="https://blog.csdn.net/liu_chen_yang/category_12493057.html" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/liu_chen_yang/category_12493057.html<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://blog.csdn.net/liu_chen_yang/category_12473478.html" target="_blank" rel="noopener noreferrer">《自动化运维》<ExternalLinkIcon/></a></td>
<td><a href="https://blog.csdn.net/liu_chen_yang/category_12473478.html" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/liu_chen_yang/category_12473478.html<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://blog.csdn.net/liu_chen_yang/category_10887074.html" target="_blank" rel="noopener noreferrer">《Linux从入门到精通》<ExternalLinkIcon/></a></td>
<td><a href="https://blog.csdn.net/liu_chen_yang/category_10887074.html" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/liu_chen_yang/category_10887074.html<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<h1 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章" aria-hidden="true">#</a> 相关文章</h1>
<table>
<thead>
<tr>
<th>文章名称</th>
<th>文章链接</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/136528857" target="_blank" rel="noopener noreferrer">【Jenkins】Pipeline流水线语法解析全集 -- 声明式流水线<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/136528857" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/136528857<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/136567517" target="_blank" rel="noopener noreferrer">【Jenkins】Pipeline流水线语法解析全集 -- 脚本式流水线、groovy语法<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/136567517" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/136567517<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
</div></template>


