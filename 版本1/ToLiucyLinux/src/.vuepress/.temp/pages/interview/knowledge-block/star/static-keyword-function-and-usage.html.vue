<template><div><h2 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> 1. 概述</h2>
<blockquote>
<p>Static是静态修饰符，什么叫静态修饰符呢？大家都知道，在程序中任何变量或者代码都是在编译时由系统自动分配内存来存储的，而所谓静态就是指在编译后所分配的内存会一直存在，直到程序退出内存才会释放这个空间，也就是只要程序在运行，那么这块内存就会一直存在。这样做有什么意义呢？在Java程序里面，所有的东西都是对象，而对象的抽象就是类，对于一个类而言，如果要使用他的成员，那么普通情况下必须先实例化对象后，通过对象的引用才能够访问这些成员，但是用static修饰的成员可以通过类名加“.”进行直接访问。</p>
</blockquote>
<font color="blue">官方解释</font>： <strong>静态变量</strong>（<em>Static Variable</em>）在<a href="https://link.zhihu.com/?target=https%3A//zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BC%96%E7%A8%8B" target="_blank" rel="noopener noreferrer">计算机编程<ExternalLinkIcon/></a>领域指在<a href="https://link.zhihu.com/?target=https%3A//zh.wikipedia.org/wiki/%E7%A8%8B%E5%BA%8F" target="_blank" rel="noopener noreferrer">程序<ExternalLinkIcon/></a>执行前系统就为之<a href="https://link.zhihu.com/?target=https%3A//zh.wikipedia.org/w/index.php%3Ftitle%3D%E9%9D%99%E6%80%81%E5%88%86%E9%85%8D%26action%3Dedit%26redlink%3D1" target="_blank" rel="noopener noreferrer">静态分配<ExternalLinkIcon/></a>（也即在运行时中不再改变分配情况）存储空间的一类<a href="https://link.zhihu.com/?target=https%3A//zh.wikipedia.org/wiki/%E5%8F%98%E9%87%8F_(%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1)" target="_blank" rel="noopener noreferrer">变量<ExternalLinkIcon/></a>。与之相对应的是在运行时只暂时存在的<a href="https://link.zhihu.com/?target=https%3A//zh.wikipedia.org/wiki/%E8%87%AA%E5%8A%A8%E5%8F%98%E9%87%8F" target="_blank" rel="noopener noreferrer">自动变量<ExternalLinkIcon/></a>（即局部变量）与以<a href="https://link.zhihu.com/?target=https%3A//zh.wikipedia.org/wiki/%E5%8A%A8%E6%80%81%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D" target="_blank" rel="noopener noreferrer">动态分配<ExternalLinkIcon/></a>方式获取存储空间的一些对象，其中自动变量的存储空间在<a href="https://link.zhihu.com/?target=https%3A//zh.wikipedia.org/wiki/%E8%B0%83%E7%94%A8%E6%A0%88" target="_blank" rel="noopener noreferrer">调用栈<ExternalLinkIcon/></a>上分配与释放。（选自维基百科）<p>如何理解？为什么要这样做？例子？</p>
<ul>
<li>解释：</li>
</ul>
<p>首先，先了解一下Java的内存分配：</p>
<blockquote>
<p>Java 把内存分为栈内存和堆内存，其中栈内存用来存放一些基本类型的变量、数组和对象的引用，堆内存主要存放一些对象。</p>
</blockquote>
<font size= 4 >什么是句柄</font>： 自己理解的话,其实就是类似于对这些静态的成员进行编号。<p>那为什么要这样做呢？</p>
<blockquote>
<p>在 JVM 加载一个类的时候，若该类存在 static 修饰的成员变量和成员方法，则会为这些成员变量和成员方法在固定的位置开辟一个固定大小的内存区域，有了这些“固定”的特性，那么 JVM 就可以非常方便地访问他们。同时如果静态的成员变量和成员方法不出作用域的话，它们的句柄都会保持不变。同时 static 所蕴含“静态”的概念表示着它是不可恢复的，即在那个地方，你修改了，他是不会变回原样的，你清理了，他就不会回来了。</p>
</blockquote>
<p>可能这些有些偏于理论，下面我们通过一些代码示例来进一步了解<code v-pre>Static</code>关键字</p>
<h2 id="_2-修饰成员属性" tabindex="-1"><a class="header-anchor" href="#_2-修饰成员属性" aria-hidden="true">#</a> 2. 修饰成员属性</h2>
<p>当我们需要在一个类（class）中<code v-pre>定义一个属性为公共的属性</code>，就好比说我们需要这个属性是所有类都是共有的，并且这个属性的值是同一个。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cisyam<span class="token punctuation">.</span>testStatic</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : Leo
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2023/8/18 11:06
 * <span class="token keyword">@description</span> :
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Book</span><span class="token punctuation">{</span>

    <span class="token comment">// 设置一个默认的值</span>

    <span class="token keyword">static</span> <span class="token class-name">String</span> pub <span class="token operator">=</span> <span class="token string">"清华大学出版社"</span><span class="token punctuation">;</span>

    <span class="token comment">// 用来和 static 作为对比</span>

    <span class="token class-name">String</span> description <span class="token operator">=</span> <span class="token string">"描述"</span><span class="token punctuation">;</span>

    <span class="token comment">// Book 类正常的属性</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> title<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">double</span> price<span class="token punctuation">;</span>

    <span class="token comment">// Book 的构造类</span>

    <span class="token keyword">public</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token class-name">String</span> title<span class="token punctuation">,</span> <span class="token keyword">double</span> price<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>title <span class="token operator">=</span> title<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 获取 Book 的信息</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"图书名称："</span><span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>title <span class="token operator">+</span> <span class="token string">"，价格为："</span><span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">+</span> <span class="token string">"，出版社为："</span><span class="token operator">+</span> pub <span class="token operator">+</span> <span class="token string">"，描述 "</span><span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>description<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 实例化三个Book类</span>
        <span class="token class-name">Book</span> book1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token string">"Android开发实战"</span><span class="token punctuation">,</span> <span class="token number">69.8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Book</span> book2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token string">"Java EE开发实战"</span><span class="token punctuation">,</span> <span class="token number">49.8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Book</span> book3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token string">"Java 开发教程"</span><span class="token punctuation">,</span> <span class="token number">79.8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 在没有设置 pub 属性的情况下输出</span>
        book1<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        book2<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        book3<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"————————————————————无敌分割线————————————————————"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 我们给 book1 设置一个 pub 属性</span>
        <span class="token class-name">Book</span><span class="token punctuation">.</span>pub <span class="token operator">=</span> <span class="token string">"中信出版社"</span><span class="token punctuation">;</span>
        book1<span class="token punctuation">.</span>description <span class="token operator">=</span> <span class="token string">"这本书很牛逼，看了你就知道"</span><span class="token punctuation">;</span>

        book1<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        book2<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        book3<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><font size= 5 ><font color="blue">控制台输出</font></font><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202308181113774.png" alt="image-20230818111309548" tabindex="0" loading="lazy"><figcaption>image-20230818111309548</figcaption></figure>
<p>从控制台输出的结果，可以看到：</p>
<ul>
<li>如果给 属性 赋默认值，在上面的例子中是(description 和 pub)，输出的结果为都是默认的。</li>
<li>当我们修改了类中 <font color="DarkOrange">static</font> 关键字声明的属性，那么只要修改了一次，那么其他所有的对象的这个属性都给修改了。</li>
</ul>
<h3 id="通过类调用-static-声明的属性" tabindex="-1"><a class="header-anchor" href="#通过类调用-static-声明的属性" aria-hidden="true">#</a> 通过类调用 static 声明的属性</h3>
<blockquote>
<p>但是基于上面的代码，我们发现如果是其中的一个类对象就改变了所有的对象的属性，这样子操作是不是感觉不是特别好？然后在Java中，如果是使用 static 声明的属性值，是可以直接通过类调用的。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 实例化三个Book类</span>
        <span class="token class-name">Book</span> book1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token string">"Android开发实战"</span><span class="token punctuation">,</span> <span class="token number">69.8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Book</span> book2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token string">"Java EE开发实战"</span><span class="token punctuation">,</span> <span class="token number">49.8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Book</span> book3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token string">"Java 开发教程"</span><span class="token punctuation">,</span> <span class="token number">79.8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 在没有设置 pub 属性的情况下输出</span>
        book1<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        book2<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        book3<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"————————————————————无敌分割线————————————————————"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 我们使用 Book 类直接调用pub</span>
        <span class="token class-name">Book</span><span class="token punctuation">.</span>pub <span class="token operator">=</span> <span class="token string">"中信出版社"</span><span class="token punctuation">;</span>

        book1<span class="token punctuation">.</span>description <span class="token operator">=</span> <span class="token string">"这本书很牛逼，看了你就知道"</span><span class="token punctuation">;</span>

        book1<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        book2<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        book3<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="没有实例化类时-调用-static-属性" tabindex="-1"><a class="header-anchor" href="#没有实例化类时-调用-static-属性" aria-hidden="true">#</a> 没有实例化类时，调用 static 属性</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cisyam<span class="token punctuation">.</span>testStatic</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : Leo
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2023/8/18 11:19
 * <span class="token keyword">@description</span> :
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Book2</span><span class="token punctuation">{</span>

    <span class="token comment">// 设置一个默认的值</span>
    <span class="token keyword">static</span> <span class="token class-name">String</span> pub <span class="token operator">=</span> <span class="token string">"清华大学出版社"</span><span class="token punctuation">;</span>

    <span class="token comment">// 用来和 static 作为对比</span>
    <span class="token class-name">String</span> description <span class="token operator">=</span> <span class="token string">"描述"</span><span class="token punctuation">;</span>

    <span class="token comment">// Book 类正常的属性</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> title<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">double</span> price<span class="token punctuation">;</span>

    <span class="token comment">// Book 的构造类</span>
    <span class="token keyword">public</span> <span class="token class-name">Book2</span><span class="token punctuation">(</span><span class="token class-name">String</span> title<span class="token punctuation">,</span> <span class="token keyword">double</span> price<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>title <span class="token operator">=</span> title<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 获取 Book 的信息</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"图书名称："</span><span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>title <span class="token operator">+</span> <span class="token string">"，价格为："</span><span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">+</span> <span class="token string">"，出版社为："</span><span class="token operator">+</span> pub <span class="token operator">+</span> <span class="token string">"，描述 "</span><span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>description<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test3</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 在没有实例化对象时，就调用</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Book</span><span class="token punctuation">.</span>pub<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 没事实例化对象的时候，去给static属性赋值上默认值</span>
        <span class="token class-name">Book2</span><span class="token punctuation">.</span>pub <span class="token operator">=</span> <span class="token string">"北京大学出版社"</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Book</span><span class="token punctuation">.</span>pub<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 新建一个类，输入 pub 属性</span>
        <span class="token class-name">Book2</span> book <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Book2</span><span class="token punctuation">(</span><span class="token string">"Java"</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        book<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><font size= 5 ><font color="blue">控制台输出</font></font><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202308181120814.png" alt="image-20230818112054747" tabindex="0" loading="lazy"><figcaption>image-20230818112054747</figcaption></figure>
<font size= 4 ><span style="color:red">**由此，我们看出，在没有实例化对象的时候，就可以直接通过类去掉用 static属性，并且还可以修改 static 的属性。static 属性声明虽然是在类的结构中，但是并不受到对象的控制，是独立存在的。**</span></font><h3 id="static-属性与非-static-属性的区别" tabindex="-1"><a class="header-anchor" href="#static-属性与非-static-属性的区别" aria-hidden="true">#</a> static 属性与非 static 属性的区别</h3>
<ul>
<li>
<p>static 声明的属性和普通属性（非 static 属性）最大的区别在于保存的内存区域不同。static 所修饰的在静态数据区。而不是在堆和栈。</p>
</li>
<li>
<p>static 属性与非 static 属性还有一个最大的区别，就是在于所有非 static 属性必须产生实例化之后才可以访问，但是static 属性不受实例化对象的控制。也就是说，在没有产生实例化对象的情况下，依然可以使用 static 对象。</p>
</li>
</ul>
<h2 id="_3-修饰成员方法" tabindex="-1"><a class="header-anchor" href="#_3-修饰成员方法" aria-hidden="true">#</a> 3. 修饰成员方法</h2>
<font color="blue">**说明**</font><p>方法本来就是存放在类的定义当中的。static修饰成员方法的作用是可以使用&quot;类名.方法名&quot;的方式操作方法，避免了先要new出对象的繁琐和资源消耗。</p>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>package com.cisyam.testStatic;

/**
 * @author : Leo
 * @version 1.0
 * @date 2023/8/18 11:19
 * @description :
 */
class Test2{
    public static void sayHello(String name) {
        System.out.println(&quot;Hello,&quot; + name);
    }
}
 
public class Demo {
    public static void main(String[] args) {
        Test2.sayHello(&quot;Leo&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><font size= 5 ><font color="blue">控制台输出</font></font><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202308181128564.png" alt="image-20230818112801463" tabindex="0" loading="lazy"><figcaption>image-20230818112801463</figcaption></figure>
<h2 id="_4-修饰代码块" tabindex="-1"><a class="header-anchor" href="#_4-修饰代码块" aria-hidden="true">#</a> 4. 修饰代码块</h2>
<p><strong><font color="blue">说明</font></strong></p>
<p><span style="color:red">static</span> { } 就是静态块，当类加载器载入类的时候，这一部分代码被执行，常用于对静态变量进行初始化工作。当其他代码用到这个类，类加载器才会将它载入。</p>
<p>代码只能执行一次，不能再调用。在静态块中，可以访问静态变量，调用静态方法。</p>
<p>如果去掉static，{ }中的代码则会在创建类对象的时候才执行，（相当于把这部分代码复制到各个构造函数中），这样可以实现块中的内容在多个构造函数中的复用。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cisyam<span class="token punctuation">.</span>testStatic</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : Leo
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2023/8/18 11:29
 * <span class="token keyword">@description</span> :
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Test4</span><span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"静态代码块执行"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"普通代码块执行"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Test4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"This is Test()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Test4</span><span class="token punctuation">(</span><span class="token class-name">String</span> string<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"This is Test(String string)"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"------------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Test4</span> test1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"------------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Test4</span> test2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test4</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><font size= 5 ><font color="blue">控制台输出</font></font><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202308181132009.png" alt="image-20230818113217885" tabindex="0" loading="lazy"><figcaption>image-20230818113217885</figcaption></figure>
<h2 id="_5-修饰内部类" tabindex="-1"><a class="header-anchor" href="#_5-修饰内部类" aria-hidden="true">#</a> 5. 修饰内部类</h2>
<font size= 4 ><span style="color:red">static</span></font> 不能修饰普通类，但可以修饰内部类。原因如下：<font size= 4 ><span style="color:red">static</span></font> 修饰的东西被我们成为类成员，它会随着类的加载而加载，比如：静态代码块，静态成员，静态方法(这里只是加载，并没有调用)等等。若把一个Class文件中的外部类设为<font size= 4 ><span style="color:red">static</span></font>，那目的何在呢？难道让这个类随着应用的启动而加载吗？如果我在这次使用过程中根本没有使用过这个类，那么是不是就会浪费内存。这样来说设计不合理，总而言之，设计不合理的地方，Java是不会让它存在的。<p>为什么内部类可以使用 <font size= 4 ><span style="color:red">static</span></font> 修饰呢，因为内部类算是类的成员了，如果我们没有使用静态来修饰，那么我们在创建内部类的时候就需要先有一个外部类的对象，如果我们一直在使用内部类，那么内存中就会一直存在外部类的引用，而我们有时候只需要使用内部类，不需要外部类，那么还是会浪费内存，甚至会造成内存溢出。使用 <font size= 4 ><span style="color:red"><strong>static</strong></span></font>修饰内部类之后，内部类在创建对象时就不需要有外部类对象的引用了。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cisyam<span class="token punctuation">.</span>testStatic</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">SingletonHolder</span> <span class="token punctuation">{</span>
	    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Singleton</span> <span class="token constant">INSTANCE</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">private</span> <span class="token class-name">Singleton</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    <span class="token keyword">return</span> <span class="token class-name">SingletonHolder</span><span class="token punctuation">.</span><span class="token constant">INSTANCE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">class</span> <span class="token class-name">Demo3</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Singleton</span> singleton <span class="token operator">=</span> <span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>singleton<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-static加载顺序" tabindex="-1"><a class="header-anchor" href="#_6-static加载顺序" aria-hidden="true">#</a> 6. static加载顺序</h2>
<p>首先思考，下边程序是否能编译通过？若可以编译通过，那么执行结果是什么？</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cisyam<span class="token punctuation">.</span>testStatic</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : Leo
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2023/8/18 11:38
 * <span class="token keyword">@description</span> :
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">User</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test6</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"Leo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"user = "</span> <span class="token operator">+</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><font size= 5 ><font color="blue">控制台输出</font></font><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202308181140104.png" alt="image-20230818114056989" tabindex="0" loading="lazy"><figcaption>image-20230818114056989</figcaption></figure>
<p>从上述结果可见，实例对象可以访问访问类变量。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312031906036.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


