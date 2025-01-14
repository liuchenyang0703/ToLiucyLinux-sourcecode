<template><div><br>
<blockquote>
<font color=bluye size=5>主要是转载于👉</font><a href="https://blog.csdn.net/xuemoyao/article/details/8033138?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522164618189316781683967513%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&amp;request_id=164618189316781683967513&amp;biz_id=0&amp;utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-8033138.pc_search_result_control_group&amp;utm_term=%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F&amp;spm=1018.2226.3001.4187" target="_blank" rel="noopener noreferrer">正则表达式全解析+常用示例</a>👈</blockquote>
<h2 id="❀正则表达式简介" tabindex="-1"><a class="header-anchor" href="#❀正则表达式简介"><span>❀正则表达式简介</span></a></h2>
<p>正则表达式是由一些具有特殊含义的字符组成的字符串，多用于查找、替换符合规则的字符串。在表单验证、Url映射等处都会经常用到。</p>
<h3 id="❀元字符" tabindex="-1"><a class="header-anchor" href="#❀元字符"><span>❀元字符</span></a></h3>
<font color=red>元字符：</font>即为有特定含义的字符，常见的元字符如下<table>
<thead>
<tr>
<th>代码</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>.</td>
<td>匹配除换行符以外的任意字符</td>
</tr>
<tr>
<td>\w</td>
<td>匹配字母或数字或下划线或汉字</td>
</tr>
<tr>
<td>\s</td>
<td>匹配任意的空白符</td>
</tr>
<tr>
<td>\d</td>
<td>匹配数字</td>
</tr>
<tr>
<td>\b</td>
<td>匹配单词的开始或结束</td>
</tr>
<tr>
<td>^</td>
<td>匹配字符串的开始（在集合字符里[^a]表示非（不匹配）的意思</td>
</tr>
<tr>
<td>$</td>
<td>匹配字符串的结束</td>
</tr>
</tbody>
</table>
<font color=bulee>详解和示例：</font><blockquote>
<p>（1）. 匹配任何任意字符    例如 .   可以匹配 1，n，*，+，- ,等<br><br>
（2）\d\w\s    匹配第一个字符为数字，第二个字符为字母或数字、或下划线或汉字，第三字符为空格的字符串 例如：11   ，2a  , 1_    <br><br>
（3）^\d\d\d$ 匹配三个全部都为数字的字符串  例如： 123,456,789<br>
还可以用于验证输入的字符串是否符合qq（身份证号）的验证 ：<br>
例如：^\d{8}$ 匹配8位数字的qq号，^\d{15}&amp;匹配15位均为数字的身份证号<br><br>
（4）\bOlive\b 匹配单词Olive 例如： I Love Oliver and Olive .这个时候返回的是Olive 而不是Oliver,因为\b....\b返回的匹配的单词</p>
</blockquote>
<h3 id="❀反义字符" tabindex="-1"><a class="header-anchor" href="#❀反义字符"><span>❀反义字符</span></a></h3>
<font color=red>反义字符：</font>多用于查找除某个字符以外其他任意字符均可以的情况，常用的反义字符如下<table>
<thead>
<tr>
<th>代码/语法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>\W</td>
<td>匹配任意不是字母，数字，下划线，汉字的字符</td>
</tr>
<tr>
<td>\S</td>
<td>匹配任意不是空白符的字符</td>
</tr>
<tr>
<td>\D</td>
<td>匹配任意非数字的字符</td>
</tr>
<tr>
<td>\B</td>
<td>匹配不是单词开头或结束的位置</td>
</tr>
<tr>
<td>[^x]</td>
<td>匹配除了x以外的任意字符</td>
</tr>
<tr>
<td>[^aeiou]</td>
<td>匹配除了aeiou这几个字母以外的任意字符</td>
</tr>
</tbody>
</table>
<font color=bulee>详解和示例：</font><blockquote>
<p>（1）\W    匹配除字母、数字、下划线、汉字以为的字符形如  +，-，<em><br><br>
（2）\S     匹配除空格以外的任意字符形如：1，</em> ，）<br><br>
（3）[^abcde]匹配除abcde以为的其他字符 如  e，f，g，h</p>
</blockquote>
<h3 id="❀限定字符" tabindex="-1"><a class="header-anchor" href="#❀限定字符"><span>❀限定字符</span></a></h3>
<font color=red>限定字符：</font>多用于重复匹配次数，常用的限定字符如下<table>
<thead>
<tr>
<th>代码/语法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>*</td>
<td>重复零次或更多次</td>
</tr>
<tr>
<td>+</td>
<td>重复一次或更多次</td>
</tr>
<tr>
<td>?</td>
<td>重复零次或一次</td>
</tr>
<tr>
<td>{n}</td>
<td>重复n次</td>
</tr>
<tr>
<td>{n,}</td>
<td>重复n次或更多次</td>
</tr>
<tr>
<td>{n,m}</td>
<td>重复n到m次</td>
</tr>
</tbody>
</table>
<font color=bulee>详解和示例：</font><blockquote>
<p>（1）\d*   匹配重复0次或多次数字   例如:可能为空 或 任意数字 （2,3。。。。）<br><br>
（2）\d+ 匹配重复1次或多次数字    例如:可能为1个或多个数字 1,23,234,2345，........<br><br>
（3）\d? 匹配重复次个或者一次数字  例如：可能为空或者任意的一个数字（1,2，。。。）<br><br>
（4）\d{8}匹配重复8次数字     例如：123456768<br><br>
（5）\d{4,}匹配重复至少4次数字 例如：1234,12345,124244,。。。。。<br><br>
（6）^\d{8,11}$ 匹配重复8-11次数字 例如：12345678,123456789,1234567890,12345678901<br></p>
</blockquote>
<h3 id="❀转义字符" tabindex="-1"><a class="header-anchor" href="#❀转义字符"><span>❀转义字符</span></a></h3>
<p>在实际的开发中，可能会遇到要比配元字符的情况，这个时候就需要进行字符转义，如元字符 .  *  \ 需要转换为.   *   \</p>
<p>例如： 需要匹配qq邮箱 \d{8,}+qq+.+com  在这里的. 就需要加斜杠</p>
<h3 id="❀字符分枝" tabindex="-1"><a class="header-anchor" href="#❀字符分枝"><span>❀字符分枝</span></a></h3>
<p>字符分枝多用于满足不同情况的选择，用“|”将不同的条件分割开来，比如有些固定电话区号有三位，有些有四位，这个时候可以采用字符分枝</p>
<p>例如：\d{3}-\d{8}|\d{4}-\d{8}  可以匹配两种不同长度区号的固定电话</p>
<p>下边的IP地址正则表达式也有用到字符分枝</p>
<h3 id="❀字符分组" tabindex="-1"><a class="header-anchor" href="#❀字符分组"><span>❀字符分组</span></a></h3>
<p>字符分组多用于将多个字符重复，主要通过使用小括号()来进行分组</p>
<p>例如：（\d\w){3} 重复匹配3次（\d\w)</p>
<p>常用于表示IP地址   形如： ((25[0-5]|2[0-4][0-9]|[0-1]\d\d).){3}(25[0-5]|2[0-4][0-9]|[0-1]\d\d)</p>
<font color=bulee>解析：</font>先把IP地址分为两部分一部分是123.123.123. 另一部分是123，又因Ip最大值为255，所以先使用分组，然后在组里边再进行选择，组里也有三部分，0-199,200-249,250-255，分别和上述的表达是对应，最后还要注意分组之后还要加上一个.，因为是元字符所以要转义故加上. 然后再把这部分整体看做是一个组，重复三次，再加上仅有数字的一组也就是不带.的那一组即可完成IP地址的校验；常用分组语法如下<font color=red size=4>捕获</font><table>
<thead>
<tr>
<th>代码/语法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>(exp)</td>
<td>匹配exp,并捕获文本到自动命名的组里</td>
</tr>
<tr>
<td>(?&lt;name&gt;exp)</td>
<td>匹配exp,并捕获文本到名称为name的组里，也可以写成(?'name'exp)</td>
</tr>
<tr>
<td>(?:exp)</td>
<td>匹配exp,不捕获匹配的文本，也不给此分组分配组号</td>
</tr>
</tbody>
</table>
<font color=red size=4>零宽断言</font><table>
<thead>
<tr>
<th>代码/语法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>(?=exp)</td>
<td>匹配exp前面的位置</td>
</tr>
<tr>
<td>(?&lt;=exp)</td>
<td>匹配exp后面的位置</td>
</tr>
<tr>
<td>(?!exp)</td>
<td>匹配后面跟的不是exp的位置</td>
</tr>
<tr>
<td>(?&lt;!exp)</td>
<td>匹配前面不是exp的位置</td>
</tr>
</tbody>
</table>
<font color=red size=4>注释</font><table>
<thead>
<tr>
<th>代码/语法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>(?#comment)</td>
<td>这种类型的分组不对正则表达式的处理产生任何影响，用于提供注释让人阅读</td>
</tr>
</tbody>
</table>
<h3 id="❀懒惰匹配和贪婪匹配" tabindex="-1"><a class="header-anchor" href="#❀懒惰匹配和贪婪匹配"><span>❀懒惰匹配和贪婪匹配</span></a></h3>
<font color=red>贪婪匹配：</font>正则表达式中包含重复的限定符时，通常的行为是匹配<strong>尽可能多</strong>的字符。<font color=red>懒惰匹配：</font>有时候需要匹配<strong>尽可能少</strong>的字符。<p>例如： a.*b，它将会匹配最长的以a开始，以b结束的字符串。如果用它来搜索aabab的话，它会匹配整个字符串aabab。但是我们此时可能需要匹配的是ab这样的话就需要用到懒惰匹配了。懒惰匹配会匹配尽可能少的字符；常用的懒惰匹配限定符如下</p>
<table>
<thead>
<tr>
<th>代码/语法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>*?</td>
<td>重复任意次，但尽可能少重复</td>
</tr>
<tr>
<td>+?</td>
<td>重复1次或更多次，但尽可能少重复</td>
</tr>
<tr>
<td>??</td>
<td>重复0次或1次，但尽可能少重复</td>
</tr>
<tr>
<td>{n,m}?</td>
<td>重复n到m次，但尽可能少重复</td>
</tr>
<tr>
<td>{n,}?</td>
<td>重复n次以上，但尽可能少重复</td>
</tr>
</tbody>
</table>
<h3 id="❀其他语法" tabindex="-1"><a class="header-anchor" href="#❀其他语法"><span>❀其他语法</span></a></h3>
<table>
<thead>
<tr>
<th>代码/语法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>\a</td>
<td>报警字符(打印它的效果是电脑嘀一声)</td>
</tr>
<tr>
<td>\b</td>
<td>通常是单词分界位置，但如果在字符类里使用代表退格</td>
</tr>
<tr>
<td>\t</td>
<td>制表符，Tab</td>
</tr>
<tr>
<td>\r</td>
<td>回车</td>
</tr>
<tr>
<td>\v</td>
<td>竖向制表符</td>
</tr>
<tr>
<td>\f</td>
<td>换页符</td>
</tr>
<tr>
<td>\n</td>
<td>换行符</td>
</tr>
<tr>
<td>\e</td>
<td>Escape</td>
</tr>
<tr>
<td>\0nn</td>
<td>ASCII代码中八进制代码为nn的字符</td>
</tr>
<tr>
<td>\xnn</td>
<td>ASCII代码中十六进制代码为nn的字符</td>
</tr>
<tr>
<td>\unnnn</td>
<td>Unicode代码中十六进制代码为nnnn的字符</td>
</tr>
<tr>
<td>\cN</td>
<td>ASCII控制字符。比如\cC代表Ctrl+C</td>
</tr>
<tr>
<td>\A</td>
<td>字符串开头(类似^，但不受处理多行选项的影响)</td>
</tr>
<tr>
<td>\Z</td>
<td>字符串结尾或行尾(不受处理多行选项的影响)</td>
</tr>
<tr>
<td>\z</td>
<td>字符串结尾(类似$，但不受处理多行选项的影响)</td>
</tr>
<tr>
<td>\G</td>
<td>当前搜索的开头</td>
</tr>
<tr IsGreek="">
<td>\p</td>
<td>{name}	Unicode中命名为name的字符类，例如\p</td>
</tr>
<tr>
<td>(?&gt;exp)</td>
<td>贪婪子表达式</td>
</tr>
<tr>
<td>(?&lt;x&gt;-&lt;y&gt;exp)</td>
<td>平衡组</td>
</tr>
<tr>
<td>(?im-nsx:exp)</td>
<td>在子表达式exp中改变处理选项</td>
</tr>
<tr>
<td>(?im-nsx)</td>
<td>为表达式后面的部分改变处理选项</td>
</tr>
<tr>
<td>(?(exp)yes|no)</td>
<td>把exp当作零宽正向先行断言，如果在这个位置能匹配，使用yes作为此组的表达式；否则使用no</td>
</tr>
<tr>
<td>(?(exp)yes)</td>
<td>同上，只是使用空表达式作为no</td>
</tr>
<tr>
<td>(?(name)yes|no)</td>
<td>如果命名为name的组捕获到了内容，使用yes作为表达式；否则使用no</td>
</tr>
<tr>
<td>(?(name)yes)</td>
<td>同上，只是使用空表达式作为no</td>
</tr>
</tbody>
</table>
<h3 id="❀常用的实用正则表达式整理" tabindex="-1"><a class="header-anchor" href="#❀常用的实用正则表达式整理"><span>❀常用的实用正则表达式整理</span></a></h3>
<p>只能输入数字：&quot;^[0-9]*$&quot;。<br>
　　<br>
只能输入n位的数字：&quot;^&quot;d{n}$&quot;。</p>
<p>只能输入至少n位的数字：&quot;^&quot;d{n,}$&quot;。</p>
<p>只能输入m~n位的数字：。&quot;^&quot;d{m,n}$&quot;</p>
<p>只能输入零和非零开头的数字：&quot;^(0|[1-9][0-9]*)$&quot;。</p>
<p>只能输入有两位小数的正实数：&quot;^[0-9]+(.[0-9]{2})?$&quot;。</p>
<p>只能输入有1~3位小数的正实数：&quot;^[0-9]+(.[0-9]{1,3})?$&quot;。</p>
<p>只能输入非零的正整数：&quot;^&quot;+?[1-9][0-9]*$&quot;。</p>
<p>只能输入非零的负整数：&quot;^&quot;-[1-9][]0-9&quot;*$。</p>
<p>只能输入长度为3的字符：&quot;^.{3}$&quot;。</p>
<p>只能输入由26个英文字母组成的字符串：&quot;^[A-Za-z]+$&quot;。</p>
<p>只能输入由26个大写英文字母组成的字符串：&quot;^[A-Z]+$&quot;。</p>
<p>只能输入由26个小写英文字母组成的字符串：&quot;^[a-z]+$&quot;。</p>
<p>只能输入由数字和26个英文字母组成的字符串：&quot;^[A-Za-z0-9]+$&quot;。</p>
<p>只能输入由数字、26个英文字母或者下划线组成的字符串：&quot;^&quot;w+$&quot;。</p>
<p>验证用户密码：&quot;^[a-zA-Z]&quot;w{5,17}$&quot;正确格式为：以字母开头，长度在6~18之间，只能包含字符、数字和下划线。</p>
<p>验证是否含有<code v-pre>^%&amp;’,;=?$&quot;&quot;等字符：</code>&quot;[^%&amp;’,;=?$&quot;x22]+&quot;。</p>
<p>只能输入汉字：&quot;^[&quot;u4e00-&quot;u9fa5]{0,}$&quot;</p>
<p>验证Email地址：&quot;^&quot;w+([-+.]&quot;w+)<em>@&quot;w+([-.]&quot;w+)</em>&quot;.&quot;w+([-.]&quot;w+)*$&quot;。</p>
<p>验证InternetURL：&quot;^http://([&quot;w-]+&quot;.)+[&quot;w-]+(/[&quot;w-./?%&amp;=]*)?$&quot;。</p>
<p>验证电话号码：&quot;^(&quot;(&quot;d{3,4}-)|&quot;d{3.4}-)?&quot;d{7,8}$&quot;正确格式为：&quot;XXX-XXXXXXX&quot;、&quot;XXXX- XXXXXXXX&quot;、&quot;XXX-XXXXXXX&quot;、&quot;XXX-XXXXXXXX&quot;、&quot;XXXXXXX&quot;和&quot;XXXXXXXX&quot;。</p>
<p>验证身份证号(15位或18位数字)：&quot;^&quot;d{15}|&quot;d{18}$&quot;。</p>
<p>验证一年的12个月：&quot;^(0?[1-9]|1[0-2])$&quot;正确格式为：&quot;01&quot;～&quot;09&quot;和&quot;1&quot;～&quot;12&quot;。</p>
<p>验证一个月的31天：&quot;^((0?[1-9])|((1|2)[0-9])|30|31)$&quot;正确格式为;&quot;01&quot;～&quot;09&quot;和&quot;1&quot;～&quot;31&quot;。</p>
<h2 id="❀推荐" tabindex="-1"><a class="header-anchor" href="#❀推荐"><span>❀推荐</span></a></h2>
<hr>
<blockquote>
<p>推荐一个正则表达式的入门教程地址：<a href="https://deerchao.cn/tutorials/regex/regex.htm" target="_blank" rel="noopener noreferrer">https://deerchao.cn/tutorials/regex/regex.htm</a><br>
推荐一个正则表达式的在线测试地址：<a href="https://www.jyshare.com/front-end/854/" target="_blank" rel="noopener noreferrer">https://www.jyshare.com/front-end/854/</a></p>
</blockquote>
</div></template>


