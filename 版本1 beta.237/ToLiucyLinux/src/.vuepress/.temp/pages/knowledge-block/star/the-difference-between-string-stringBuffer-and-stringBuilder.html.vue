<template><div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202308101403272.png" alt="image-20230810140328156" tabindex="0" loading="lazy"><figcaption>image-20230810140328156</figcaption></figure>
<h2 id="_1-可变性" tabindex="-1"><a class="header-anchor" href="#_1-可变性" aria-hidden="true">#</a> 1. 可变性</h2>
<blockquote>
<p>String 内部的 value 值是 final 修饰的，所以它是不可变类。所以每次修改 String的值，都会产生一个新的对象。</p>
<p>StringBuffer 和 StringBuilder 是可变类，字符串的变更不会产生新的对象。</p>
</blockquote>
<h2 id="_2-线程安全性" tabindex="-1"><a class="header-anchor" href="#_2-线程安全性" aria-hidden="true">#</a> 2. 线程安全性</h2>
<p><strong>Srring</strong> 是不可变的，所以它是线程安全的。</p>
<p><strong>StringBuffer</strong> 是线程安全的，因为它的每个操作方法都加了<code v-pre>synchronized</code> 同步关键 字。</p>
<p><strong>StringBuilder</strong> 是非线程安全的，在多环境下对字符串进行操作的时候，应该使用<code v-pre>StringBuffer</code>，否则才会使用 <code v-pre>StringBuilder</code>。</p>
<h2 id="_3-性能方面" tabindex="-1"><a class="header-anchor" href="#_3-性能方面" aria-hidden="true">#</a> 3. 性能方面</h2>
<blockquote>
<p><strong>String</strong>  的性能是最的低的，因为不可变意味着在做字符串拼接和修改的时候，需要重新创建新的对象以及分配内存。 其次是 <strong>StringBuffer</strong> 要比 <code v-pre>String</code> 性能高，因为它的可变性使得字符串可以直接被 修改最后是 <strong>StringBuilder</strong>，它比 StringBuffer 的性能高，因为 <strong>StringBuffer</strong> 加了 同步锁。</p>
</blockquote>
<h2 id="_4-存储方面" tabindex="-1"><a class="header-anchor" href="#_4-存储方面" aria-hidden="true">#</a> 4. 存储方面</h2>
<blockquote>
<p><strong>String</strong>  存储在字符串常量池里面</p>
<p><strong>StringBuffer</strong>  和  <strong>StringBuilder</strong>  存储在堆内存空间。</p>
</blockquote>
<h2 id="_5-使用场景" tabindex="-1"><a class="header-anchor" href="#_5-使用场景" aria-hidden="true">#</a> 5. 使用场景</h2>
<p><strong>String</strong>：适用于少量的字符串操作的情况。</p>
<p><strong>StringBuilder</strong>：适用于单线程下在字符缓冲区进行大量操作的情况。</p>
<p><strong>StringBuffer</strong>：适用于多线程下在字符缓冲区进行大量操作的情况。</p>
<h2 id="_6-运行速度" tabindex="-1"><a class="header-anchor" href="#_6-运行速度" aria-hidden="true">#</a> 6. 运行速度</h2>
<blockquote>
<p>运行速度快慢顺序为：StringBuilder &gt; StringBuffer &gt; String</p>
</blockquote>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312031906036.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


