<template><div><blockquote>
<p>大家好，我是Leo🫣🫣🫣，最近在复习Java基础内容，这个专栏后续也会一直更新下去，Java基础乃是咱们Java的根基，俗话说，基础不牢，地动山摇。今天我们主要学习Java数组相关知识，好了，话不多说让我们开始吧😎😎😎。</p>
</blockquote>
<p>在开始之前，先通过一张图来了解一下我们今天要学习的数组的主要大纲吧</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310091319817.png" alt="image-20231009131946655" tabindex="0" loading="lazy"><figcaption>image-20231009131946655</figcaption></figure>
<h2 id="_1-数组的概述" tabindex="-1"><a class="header-anchor" href="#_1-数组的概述" aria-hidden="true">#</a> 1. 数组的概述</h2>
<h3 id="_1-1-为什么需要数组" tabindex="-1"><a class="header-anchor" href="#_1-1-为什么需要数组" aria-hidden="true">#</a> 1.1 为什么需要数组</h3>
<p>我们下面先看一个简单的例子</p>
<p>一个<strong>养鸡场有</strong> 6 <strong>只鸡</strong>，它们的体重分别是 3kg,5kg,1kg,3.4kg,2kg,50kg 。请问这六只鸡的总体重是多少?平 均体重是多少? 请你编一个程序。</p>
<p><strong>思路：</strong> 定义 6个变量, 加起来 总体重， 求出平均体重 引出 -&gt; 数组</p>
<div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre v-pre class="language-JAVA"><code>package com.Leo.array.Leo01.exer;


/**
 * @author : Leo
 * @version 1.0
 * @date 2023/9/24/024 11:06
 * @description : 数组练习3
 *
 * 一个养鸡场有 6 只鸡，它们的体重分别是 3kg,5kg,1kg,3.4kg,2kg,50kg 。
 * 请问这六只鸡的总体重是多少?平均体重是多少? 请你编一个程序。
 */
public class ArrayExer03
{
    
    public static void main(String[] args)
    {
        // 1. 使用for循环来计算以下的平均体重/ double hen1 = 3;
        // double hen2 = 5;
        // double hen3 = 1;
        // double hen4 = 3.4;
        // double hen5 = 2;
        // double hen6 = 50;
        // double totalWeight = hen1 + hen2 + hen3 + hen4 + hen5 + hen6;
        // double avgWeight = totalWeight / 6;
        // System.out.println(&quot;总体重=&quot; + totalWeight
        // + &quot;平均体重=&quot; + avgWeight);
        //比如，我们可以用数组来解决上一个问题 =&gt; 体验


        //1. double[] 表示 是 double 类型的数组， 数组名 hens
        //2. {3, 5, 1, 3.4, 2, 50} 表示数组的值/元素,依次表示数组的

        double[] hens = {3, 5, 1, 3.4, 2, 50, 7.8, 88.8,1.1,5.6,100};
        //遍历数组得到数组的所有元素的和， 使用 for循环来得到

        //1. 我们可以通过 hens[下标] 来访问数组的元素

        // 下标是从 0 开始编号的比如第一个元素就是 hens[0]
        // 第 2 个元素就是 hens[1] , 依次类推

        //2. 通过 for 就可以循环的访问 数组的元素/值

        //3. 使用一个变量 totalWeight 将各个元素累积

        System.out.println(&quot;===使用数组解决===&quot;);
        double totalWeight = 0;
        for( int i = 0; i &lt; hens.length; i++) {
            totalWeight += hens[i];
        }
        System.out.println(&quot;总体重=&quot; + totalWeight + &quot;平均体重=&quot; + (totalWeight / hens.length) );

    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-什么是数组" tabindex="-1"><a class="header-anchor" href="#_1-2-什么是数组" aria-hidden="true">#</a> 1.2 什么是数组</h3>
<hr>
<p>在计算机科学中，<strong>阵列资料结构</strong>（英语：array data structure），简称<strong>数组</strong>（英语：Array），是由相同类型的元素（element）的集合所组成的 <a href="https://zh.wikipedia.org/wiki/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84" target="_blank" rel="noopener noreferrer">资料结构<ExternalLinkIcon/></a>，分配一块连续的内存来存储。利用元素的索引（index）可以计算出该元素对应的储存地址。</p>
<p>最简单的资料结构类型是 <strong>一维阵列</strong>。例如，索引为0到9的32位元整数阵列，可作为在记忆体位址2000，2004，2008，...2036中，储存10个变量，因此索引为i的元素即在记忆体中的2000+4×i位址。阵列第一个元素的记忆体位址称为第一位址或基础位址。</p>
<p><strong>简单来说数组的定义：</strong></p>
<p>数组（array）是一种最简单的复合数据类型，它是有序数据的集合，数组中的每个元素具有相同的数据类型，可以用一个统一的数组名和不同的下标来确定数组中唯一的元素。根据数组的维度，可以将其分为一维数组、二维数组和多维数组等。</p>
<h3 id="_1-4-简述数组特性" tabindex="-1"><a class="header-anchor" href="#_1-4-简述数组特性" aria-hidden="true">#</a> 1.4 简述数组特性</h3>
<p><strong>数组的特点：</strong></p>
<ol>
<li>数组是一组数据的集合。</li>
<li>
<font style="color:red">**数组作为一种引用类型。**</font></li>
<li><strong>长度固定</strong>：Array 的长度在创建时就已经确定，并且不能被修改，但是可以指向其他数组。</li>
<li><strong>同类型元素</strong>：Array 中的所有元素必须是同一种类型（对象类型存储的是引用）。</li>
<li><strong>内存连续</strong>：Array 存储在连续的内存位置。</li>
<li><strong>下标从 0 开始</strong>：Array 中的元素是通过下标来访问的，下标从 0 开始，最大下标为长度减 1,如果数组有 <strong>n</strong> 个元素，那么数组的索引是从 0 到（n-1）。</li>
<li>给定数组下标访问下标对应的元素时，的时间复杂度为 1。</li>
<li>Array 是 Java 中的对象，因此可以使用对象属性 <code v-pre>lenght</code> 获取到 Array 的长度。</li>
<li>Java 中 Array 都实现了 <code v-pre>Cloneable</code> 和 <code v-pre>java.io.Serializable</code> 接口。</li>
<li>数组可以是<strong>一维数组</strong>、<strong>二维数组</strong>或<strong>多维数组</strong>。</li>
<li>数值数组元素的默认值为 0，而引用元素的默认值为 null。</li>
<li>数组元素可以是任何类型，包括数组类型。</li>
<li>数组类型是从抽象基类 Array 派生的引用类型。</li>
</ol>
<p><strong>数组的分类：</strong></p>
<ul>
<li>按照维度：<strong>一维数组</strong>、<strong>二维数组</strong>、<strong>三维数组</strong>、…</li>
<li>按照元素的数据类型分：基本数据类型元素的数组、引用数据类型元素的数组(即对象数组)</li>
</ul>
<p>Java中数组是一种用来存储多个数据项的数据结构。数组可以存储基本类型和对象类型的数据，使用时需要先声明数组类型以及数组长度，如下所示</p>
<h2 id="_2-数组的使用" tabindex="-1"><a class="header-anchor" href="#_2-数组的使用" aria-hidden="true">#</a> 2. 数组的使用</h2>
<h3 id="_2-1-数组的声明" tabindex="-1"><a class="header-anchor" href="#_2-1-数组的声明" aria-hidden="true">#</a> 2.1 数组的声明</h3>
<p><strong>数组的定义</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>数据类型<span class="token punctuation">[</span><span class="token punctuation">]</span> 数组名  <span class="token keyword">new</span> 数据类型<span class="token punctuation">[</span>大小<span class="token punctuation">]</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
创建了一个数组，名字为a ，存放了<span class="token number">5</span>个<span class="token keyword">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明：这是定义数组的一种方法。为了让大家明白，我画了一个数组内存图说明</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310091333275.png" alt="image-20231009133318210" tabindex="0" loading="lazy"><figcaption>image-20231009133318210</figcaption></figure>
<h3 id="_2-3-数组的使用和注意事项" tabindex="-1"><a class="header-anchor" href="#_2-3-数组的使用和注意事项" aria-hidden="true">#</a> 2.3 数组的使用和注意事项</h3>
<ol>
<li>
<p>数组是多个相同类型数据的组合，实现对这些数据的统一管理。</p>
</li>
<li>
<p>数组中的元素可以是任何数据类型，包括基本类型和引用类型，但是不能混用。</p>
</li>
<li>
<p>数组创建后，如果没有赋值，有默认值</p>
<blockquote>
<p>int 0，short 0, byte 0, long 0, float 0.0,double 0.0，char \u0000，boolean false，String null</p>
</blockquote>
</li>
<li>
<p>使用数组的步骤 1. 声明数组并开辟空间 2 给数组各个元素赋值 3 使用数组</p>
</li>
<li>
<p>数组的<strong>下标是从</strong> 0 <strong>开始的</strong>。</p>
</li>
<li>
<p>数组下标必须在指定范围内使用，否则报：下标越界异常，比如</p>
</li>
</ol>
<blockquote>
<p>int [] arr=new int[5]; 则有效下标为 0-4</p>
</blockquote>
<ol start="7">
<li>数组属引用类型，数组型数据是对象(object)</li>
</ol>
<h2 id="_4-数组使用案例" tabindex="-1"><a class="header-anchor" href="#_4-数组使用案例" aria-hidden="true">#</a> 4. 数组使用案例</h2>
<h3 id="_4-1-案例1" tabindex="-1"><a class="header-anchor" href="#_4-1-案例1" aria-hidden="true">#</a> 4.1 案例1</h3>
<p>创建一个 char 类型的 26 个元素的数组，分别 放置'A'-'Z'。使用 for 循环访问所有元素并打印出来。提示：char 类型 数据运算 'A'+2 -&gt; 'C'</p>
<div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre v-pre class="language-JAVA"><code>package com.Leo.array.Leo01.exer;



/**
 * @author : Leo
 * @version 1.0
 * @date 2023/9/24/024 11:06
 * @description : 数组案例1
 *
 * 创建一个 char 类型的 26 个元素的数组，分别 放置'A'-'Z'。
 * 使用 for 循环访问所有元素并打印出来。
 * 提示：char 类型数据运算 'A'+1 -&gt; 'B'
 */
public class ArrayCase01
{

    public static void main(String[] args)
    {

        char[] chars = new char[26];

        for (int i = 0; i &lt;chars.length; i++) {
            chars[i]  = (char) ('A' + i);
            System.out.print(chars[i] + &quot; &quot;);
        }

        System.out.println(&quot;初始化的字符数组:  &quot; + new String(chars));
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-案例2" tabindex="-1"><a class="header-anchor" href="#_4-2-案例2" aria-hidden="true">#</a> 4.2 案例2</h3>
<p>请求出一个数组 int[]的最大值 {4,-1,9, 10,23}，并得到对应的下标。</p>
<div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre v-pre class="language-JAVA"><code>package com.Leo.array.Leo01.exer;


/**
 * @author : Leo
 * @version 1.0
 * @date 2023/9/24/024 11:06
 * @description : 数组案例2
 *
 *
 * 请求出一个数组 int[]的最大值 {4,-1,9, 10,23}，并得到对应的下标。
 */
public class ArrayCase02
{

    // 1.假定 max = arr[0] 是最大值 , maxIndex=0;
    // 2.从下标 1 开始遍历 arr， 如果 max &lt; 当前元素，说明 max 不是真正的
   //  最大值, 我们就 max=当前元素; maxIndex=当前元素下标
  //   3. 当我们遍历这个数组 arr 后 , max 就是真正的最大值，maxIndex 最大值
    
    public static void main(String[] args)
    {

        int[] array = {4,-1,9, 10,23};

        //假定第一个元素就是最大值
        int max = array[0];
        int maxIndex = 0;

        for (int i = 0; i &lt; array.length; i++)
        {
            if (max &lt; array[i])
            {
                max = array[i];
                maxIndex = i;
            }
        }
        System.out.println(&quot;数组最大值为: &quot; + max + &quot; , &quot;+&quot;最大值下标为:&quot; + maxIndex);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-数组进阶" tabindex="-1"><a class="header-anchor" href="#_5-数组进阶" aria-hidden="true">#</a> 5. 数组进阶</h2>
<h3 id="_5-1-数组的赋值机制" tabindex="-1"><a class="header-anchor" href="#_5-1-数组的赋值机制" aria-hidden="true">#</a> 5.1 数组的赋值机制</h3>
<ol>
<li>
<p>基本数据类型赋值，这个值就是具体的数据，而且相互不影响。</p>
<blockquote>
<p>int n1 = 2; int n2 = n1;</p>
</blockquote>
</li>
<li>
<p>数组在默认情况下是引用传递，赋的值是地址。</p>
</li>
</ol>
<p>看一个案例，并分析数组赋值的内存图(重点,难点. )。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//代码ArrayAssign.java</span>

<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr2 <span class="token operator">=</span> arr1<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>用韩顺平老师的图来讲解以下。</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310091413124.png" alt="image-20231009141326983" tabindex="0" loading="lazy"><figcaption>image-20231009141326983</figcaption></figure>
<p><strong>这里的arr1和arr2相当于栈，而数组中的数据{1,2，3}就相当于与内存中的堆，arr1[]是指向{1,2，3}这个堆的，所以可以访问，当把arr1赋值给arr2时，arr2就具有了和arr1一样的访问权，因此对arr2的数据更改，会影响到arr1的数据。</strong></p>
<p><strong>如果还有人听不懂，那我就再举个很简单的例子，我们都玩过“我的世界”这款游戏。比如你和你的朋友一起玩，你的朋友做了一把木剑，放在了他自己的背包里，他又做了一个相同的木剑给了你，你们都有了木剑（这就相当于简单地值拷贝）。现在有一个箱子，你朋友做了一把木剑放在了箱子里，你觉得木剑太垃圾了，把木剑换成了钻石剑放在了箱子里，你朋友打开箱子发现木剑变成了钻石剑（这就是引用赋值）</strong></p>
<p>我想到这里应该讲的也挺清楚的了，数组的赋值引用，变得是地址罢了。希望能够帮助到小伙伴们！！</p>
<h3 id="_5-2-数组拷贝" tabindex="-1"><a class="header-anchor" href="#_5-2-数组拷贝" aria-hidden="true">#</a> 5.2 数组拷贝</h3>
<p>编写代码实现数组拷贝(内容复制) ArrayCopy.java</p>
<p>将int[] arr1 = {10,20,30};拷贝到arr2数组,要求数据空间是独立的.</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span></span><span class="token class-name">Leo</span><span class="token punctuation">.</span>array<span class="token punctuation">.</span>Leo01<span class="token punctuation">.</span>exer<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : Leo
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2023/10/9/009 14:21
 * <span class="token keyword">@description</span> :
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArrayCopy</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//将 int[] arr1 = {10,20,30};拷贝到 arr2数组,//要求数据空间是独立的.</span>

        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token comment">//创建一个新的数组 arr2,开辟新的数据空间  大小 arr1.length;</span>

        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>arr1<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">//遍历 arr1，把每个元素拷贝到 arr2对应的元素位置</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr1<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            arr2<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        <span class="token comment">//修改 arr2，不会对 arr1有影响</span>
        arr2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>

        <span class="token comment">//输出 arr1</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"====arr1的元素===="</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr1<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"====arr2的元素===="</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr2<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结果：</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310091424192.png" alt="image-20231009142441125" tabindex="0" loading="lazy"><figcaption>image-20231009142441125</figcaption></figure>
<h3 id="_5-3-数组反转" tabindex="-1"><a class="header-anchor" href="#_5-3-数组反转" aria-hidden="true">#</a> 5.3 数组反转</h3>
<p 66,="" 55,44,33,22,11="">要求：把数组的元素内容反转。ArrayReverse01.java arr {11,22,33,44,55,66}</p>
<h4 id="_1-方式1-通过找规律反转" tabindex="-1"><a class="header-anchor" href="#_1-方式1-通过找规律反转" aria-hidden="true">#</a> 1. 方式1：通过找规律反转</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span></span><span class="token class-name">Leo</span><span class="token punctuation">.</span>array<span class="token punctuation">.</span>Leo01<span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : Leo
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2023/9/24/024 11:06
 * <span class="token keyword">@description</span> : 数组案例2  数组反转
 *
 *
 * 要求: 把数组的元素内容反转。
 * arr <span class="token punctuation">{</span>11,22,33,44,55,66<span class="token punctuation">}</span> <span class="token punctuation">{</span>66, 55,44,33,22,11<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArrayReverse01</span>
<span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 把数组的元素内容反转</span>

        <span class="token comment">// 使用交换的方式</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">66</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> temp<span class="token punctuation">;</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> arr1<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token comment">// 先遍历所有的元素</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 模拟交换数组中的两个元素</span>
            temp <span class="token operator">=</span> arr1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            arr1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr1<span class="token punctuation">[</span>len<span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            arr1<span class="token punctuation">[</span>len <span class="token operator">-</span> i <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 打印新数组</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"反转后的数组: "</span><span class="token operator">+</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-方式2-使用逆序赋值方式-arrayreverse02-java" tabindex="-1"><a class="header-anchor" href="#_2-方式2-使用逆序赋值方式-arrayreverse02-java" aria-hidden="true">#</a> 2. 方式2：使用逆序赋值方式 ArrayReverse02.java</h4>
<p><strong>思路分析：</strong></p>
<blockquote>
<p>//使用逆序赋值方式</p>
<p><a href="//1.xn--arr2-k84fuim3rixbk92dwrnduaq92nrow" target="_blank" rel="noopener noreferrer">//1.先创建一个新的数组arr2<ExternalLinkIcon/></a> ,大小arr.length</p>
<p><a href="//2.xn--arr-bo3em81c153eioa" target="_blank" rel="noopener noreferrer">//2.逆序遍历arr<ExternalLinkIcon/></a> ,将每个元素拷贝到arr2的元素中(顺序拷贝)</p>
<p><a href="//3.xn--j-zn6a4e43qwubn1nu2lmlb443h8e0cldo" target="_blank" rel="noopener noreferrer">//3.建议增加一个循环变量j<ExternalLinkIcon/></a> -&gt; 0 -&gt; 5</p>
<p>int[] arr2 = new int[arr.length];</p>
<p>//逆序遍历arr</p>
<p 66,="" 55,="" 44,33,="" 22,="" 11=""><a href="//4.xn--for-kj3f6o159an4u5lu" target="_blank" rel="noopener noreferrer">//4.当for循环结束<ExternalLinkIcon/></a>，arr2就是一个逆序的数组</p>
<p><a href="//5.xn--arrarr2-6y3l252iu3as5nxv7eux5bme4a" target="_blank" rel="noopener noreferrer">//5.让arr指向arr2数据空间<ExternalLinkIcon/></a>,此时arr原来的数据空间就没有变量引用</p>
<p>//会被当做垃圾，销毁</p>
<p>arr = arr2;</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>				<span class="token comment">// 第二种方式:</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">66</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrReverse <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">,</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            arrReverse<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 对arrReverse进行销毁</span>
        <span class="token comment">// arr = arrReverse;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"反转之后的数组2:"</span> <span class="token operator">+</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>arrReverse<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"==========================================="</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 第二种方式: 创建一个新的数组并上移</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrReverseNew <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">,</span> j<span class="token operator">--</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            arrReverseNew<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"反转之后的数组: "</span><span class="token operator">+</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>arrReverseNew<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"============================================="</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-方式3-创建一个新的数组并下移" tabindex="-1"><a class="header-anchor" href="#_3-方式3-创建一个新的数组并下移" aria-hidden="true">#</a> 3. 方式3： 创建一个新的数组并下移</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>		<span class="token comment">// 第三种方式 - 创建一个新的数组并下移</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrReverseNew2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">,</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            arrReverseNew2<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"反转之后的数组: "</span><span class="token operator">+</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>arrReverseNew2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">// 第四种方式: 要求在下移之后还原数组元素的相对顺序</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrReverseNew3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> right <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>

            arrReverseNew3<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
            left<span class="token operator">++</span><span class="token punctuation">;</span>
            right<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"============================================="</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-要求在下移之后还原数组元素的相对顺序" tabindex="-1"><a class="header-anchor" href="#_4-要求在下移之后还原数组元素的相对顺序" aria-hidden="true">#</a> 4. 要求在下移之后还原数组元素的相对顺序</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>			<span class="token comment">// 第四种方式: 要求在下移之后还原数组元素的相对顺序</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrReverseNew3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> right <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>

            arrReverseNew3<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
            left<span class="token operator">++</span><span class="token punctuation">;</span>
            right<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"============================================="</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


