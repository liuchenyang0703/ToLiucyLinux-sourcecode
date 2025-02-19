<template><div><h1 id="听说你还不知道int-1-和int-10-有什么区别" tabindex="-1"><a class="header-anchor" href="#听说你还不知道int-1-和int-10-有什么区别" aria-hidden="true">#</a> 听说你还不知道int(1)和int(10)有什么区别</h1>
<h2 id="_1-int概述" tabindex="-1"><a class="header-anchor" href="#_1-int概述" aria-hidden="true">#</a> 1.int概述</h2>
<p>首先int可以设置两个属性，UNSIGNED（无符号）和 ZEROFILL（填充零）</p>
<p><code v-pre>int：</code> 4字节，设置无符号的话，存储值范围是：0<sub>4294967295，有符号是：-2147483648</sub>2147483648</p>
<p><code v-pre>int(1) 无符号：</code> 值范围还是0<sub>4294967295，有符号还是：-2147483648</sub>2147483648</p>
<p><code v-pre>int(10) 无符号：</code> 值范围还是0<sub>4294967295，有符号还是：-2147483648</sub>2147483648</p>
<p>主要区别在于ZEROFILL这个属性，填充零。</p>
<p><code v-pre>int(1) 填充零：</code> 插入id为1的，显示1，因为他设置的长度为1，不需要0来填充。</p>
<p><code v-pre>int(2) 填充零：</code> 插入id为1的，显示01，因为他设置的长度为2，0来填充。</p>
<p>显然int(10) 填充零就是0000000001。</p>
<h2 id="_2-mysql如何处理" tabindex="-1"><a class="header-anchor" href="#_2-mysql如何处理" aria-hidden="true">#</a> 2.MySQL如何处理</h2>
<p>首先我们先看下一MySQL中的一些整数类型</p>
<table>
<thead>
<tr>
<th style="text-align:left">类型</th>
<th style="text-align:left">字节</th>
<th style="text-align:left">取值范围</th>
<th style="text-align:left">显示宽度</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">tinyint</td>
<td style="text-align:left">1</td>
<td style="text-align:left">-128 ~ 127</td>
<td style="text-align:left">4</td>
</tr>
<tr>
<td style="text-align:left">smallint</td>
<td style="text-align:left">2</td>
<td style="text-align:left">-32768 ~ 32767</td>
<td style="text-align:left">6</td>
</tr>
<tr>
<td style="text-align:left">mediumint</td>
<td style="text-align:left">3</td>
<td style="text-align:left">-8388608 ~ 8388607</td>
<td style="text-align:left">9</td>
</tr>
<tr>
<td style="text-align:left">int</td>
<td style="text-align:left">4</td>
<td style="text-align:left">-2147483648 ~ 2147483647</td>
<td style="text-align:left">11</td>
</tr>
<tr>
<td style="text-align:left">bigint</td>
<td style="text-align:left">8</td>
<td style="text-align:left">-9223372036854775808 ~ 9223372036854775807</td>
<td style="text-align:left">20</td>
</tr>
</tbody>
</table>
<p>MySQL 类型关键字后面的括号内指定整数值的显示宽度(例如，INT(4))。</p>
<p>该可选显示宽度规定用于显示宽度小于指定的列宽度的值时从左侧填满宽度。显示宽度并不限制可以在列内保存的值的范围，也不限制超过列的指定宽度的值的显示。</p>
<p>当结合可选扩展属性 zerofill 使用时， 默认补充的空格用零代替。</p>
<p>在MySQL中，当你定义一个表字段的类型为 <code v-pre>INT</code> 时，你可以指定一个可选的显示宽度，例如 <code v-pre>INT(1)</code> 或 <code v-pre>INT(10)</code>。宽度定义了数字的显示字符数。这通常与 <code v-pre>ZEROFILL</code> 属性搭配使用，表示未使用的空间应该由0来填充。然而，这个宽度不会影响数据类型在数据库中的存储大小或范围，这意味着 <code v-pre>INT(1)</code> 和 <code v-pre>INT(10)</code> 存储的数字大小或有效数字范围是一样的。</p>
<p>这里有一个更详细的解释：</p>
<ul>
<li><strong><code v-pre>INT</code> 数据类型</strong>: 在MySQL中，<code v-pre>INT</code> 是一个整数数据类型，用于存储大小在 -2,147,483,648 到 2,147,483,647 的整数（如果是无符号的 UINT，则是 0 到 4,294,967,295）。无论你后面跟的是 <code v-pre>(1)</code> 还是 <code v-pre>(10)</code>，INT 类型的存储大小始终是 4 字节，并且可以存储相同的数值范围。</li>
<li><strong>宽度 <code v-pre>(1)</code> vs <code v-pre>(10)</code></strong>: <code v-pre>INT(1)</code> 和 <code v-pre>INT(10)</code> 之间的数字代表显示宽度。实际上，这并不会限制值的范围，只会影响显示。如果字段被设定了 <code v-pre>ZEROFILL</code>，例如 <code v-pre>INT(3)</code>，存储的数值 <code v-pre>5</code> 会显示为 <code v-pre>005</code>。如果没有使用 <code v-pre>ZEROFILL</code>，显示宽度基本没有什么效果。</li>
</ul>
<p>当在Java程序中与MySQL数据库交互时：</p>
<ul>
<li>使用JDBC或类似的库来查询数据库时，你可能会操作 <code v-pre>INT</code> 类型的列。</li>
<li>检索结果时，Java中通常会使用 <code v-pre>ResultSet</code> 对象的 <code v-pre>.getInt()</code> 方法来获取整数字段的值，而此时宽度（<code v-pre>(1)</code> 或 <code v-pre>(10)</code>）不会有任何影响。</li>
<li>Java中的 <code v-pre>int</code> 类型与MySQL中的 <code v-pre>INT</code> 类型在大多数情况下兼容，Java 的 <code v-pre>int</code> 类型也是 4 字节，并且有相同的数值范围。</li>
</ul>
<p><strong>显示宽度整数类型的取值范围是无关的。</strong></p>
<p>显示宽度只是指明 mysql 最大可能显示的数字个数，数值的位数小于指定的宽度时左侧用数字 0 填充。</p>
<p>如果插入了大于显示宽度的值，只要该值不超过该类型整数的取值范围，数值依然可以插入，而且能够显示出来。</p>
</div></template>


