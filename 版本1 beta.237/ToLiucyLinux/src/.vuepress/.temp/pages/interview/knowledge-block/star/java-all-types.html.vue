<template><div><h1 id="介绍一下java的数据类型" tabindex="-1"><a class="header-anchor" href="#介绍一下java的数据类型" aria-hidden="true">#</a> 介绍一下Java的数据类型</h1>
<p>Java的数据类型分为基本数据类型和引用数据类型。</p>
<p>基本数据类型包括 <strong>byte、char、boolean、short、int、long、float、double。</strong></p>
<p>其中整数的默认类型为int类型，浮点数的默认类型为double。</p>
<h2 id="_1-整数类型" tabindex="-1"><a class="header-anchor" href="#_1-整数类型" aria-hidden="true">#</a> 1.整数类型</h2>
<p><code v-pre>byte</code>：-128~127</p>
<p><code v-pre>short</code>：-32768~32767</p>
<p><code v-pre>int</code>：-2<sup>31~2</sup>31-1</p>
<p><code v-pre>long</code>：-2<sup>63~2</sup>63-1</p>
<h2 id="_2-浮点类型" tabindex="-1"><a class="header-anchor" href="#_2-浮点类型" aria-hidden="true">#</a> 2.浮点类型</h2>
<p><code v-pre>float</code>：约等于3.402823e+38~1.401298e-45</p>
<p><code v-pre>double</code>：约等于1.797693e+308~4.9000000e-324</p>
<h2 id="_3-字符类型-仅有一个成员-即char-用于表示单个字符。" tabindex="-1"><a class="header-anchor" href="#_3-字符类型-仅有一个成员-即char-用于表示单个字符。" aria-hidden="true">#</a> 3.字符类型：仅有一个成员，即<code v-pre>char</code>，用于表示单个字符。</h2>
<h2 id="_4-布尔类型-只有boolean一种-用于表示真伪状态。" tabindex="-1"><a class="header-anchor" href="#_4-布尔类型-只有boolean一种-用于表示真伪状态。" aria-hidden="true">#</a> 4.布尔类型：只有<code v-pre>boolean</code>一种，用于表示真伪状态。</h2>
<p>还有一种特殊的类型<code v-pre>void</code>，它是所有其他基本类型的公共父类。</p>
<p>每个基本类型都有相应的包装类，如<code v-pre>Integer</code>代表<code v-pre>int</code>，<code v-pre>Float</code>代表<code v-pre>float</code>，<code v-pre>Double</code>代表<code v-pre>double</code>，<code v-pre>Boolean</code>代表<code v-pre>boolean</code>，<code v-pre>Byte</code>代表<code v-pre>byte</code>，<code v-pre>Short</code>代表<code v-pre>short</code>，<code v-pre>Long</code>代表<code v-pre>long</code>。这些包装类提供了额外的功能和便利，例如自动转换和强制转换等功能。</p>
<p><strong>引用数据类型包括：类类型、接口类型、数组类型、枚举类型等。</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202404021100920.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
</div></template>


