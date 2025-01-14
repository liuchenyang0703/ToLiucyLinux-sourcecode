<template><div><h2 id="❀grep-sed-awk命令以及正则表达式" tabindex="-1"><a class="header-anchor" href="#❀grep-sed-awk命令以及正则表达式" aria-hidden="true">#</a> ❀grep sed awk命令以及正则表达式</h2>
<h3 id="grep" tabindex="-1"><a class="header-anchor" href="#grep" aria-hidden="true">#</a> <font color=red>grep</font></h3>
<p><strong><font color=green>语法：</font></strong></p>
<blockquote>
<p>grep 【选项】 '内容'   文件名</p>
</blockquote>
<table>
<thead>
<tr>
<th>grep</th>
<th>以行为单位过滤</th>
</tr>
</thead>
<tbody>
<tr>
<td>-i</td>
<td>不区分大小写</td>
</tr>
<tr>
<td>-v</td>
<td>取反</td>
</tr>
<tr>
<td>-w</td>
<td>以单词为单位进行过滤</td>
</tr>
<tr>
<td>-B</td>
<td>指定行数，过滤指定内容以及上几行</td>
</tr>
<tr>
<td>-A</td>
<td>指定行数，过滤指定内容以及下几行</td>
</tr>
<tr>
<td>-C</td>
<td>指定行数，过滤指定内容以及上下各几行</td>
</tr>
<tr>
<td>-o</td>
<td>只输出过滤的内容</td>
</tr>
<tr>
<td>-c</td>
<td>统计过滤的行数</td>
</tr>
<tr>
<td>-n</td>
<td>显示行号</td>
</tr>
<tr>
<td>-q</td>
<td>用于if逻辑判断      安静模式，不打印任何标准输出。如果有匹配的内容则立即返回状态值0。</td>
</tr>
<tr>
<td>-E</td>
<td>使用扩展正则</td>
</tr>
</tbody>
</table>
<p>grep -q 用法</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">grep</span> <span class="token parameter variable">-q</span> 参数<span class="token punctuation">[</span>索要查找的内容<span class="token punctuation">]</span> 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用法1：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cat a.txt            ## 测试数据</span>
d e j
s q u
z c b

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># grep "s" a.txt       ## 直接输出匹配结果</span>
s q u

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo $?              ## 输出0表示匹配成功</span>
<span class="token number">0</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># grep -q "s" a.txt    ## -q选项表示静默输出</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo $?</span>
<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用法2：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cat a.txt            ## 测试数据</span>
nihao 
nihaooo
hello

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># if  grep -q hello a.txt ; then echo yes;else echo no; fi </span>
<span class="token function">yes</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># if grep -q word a.txt; then echo yes; else echo no; fi</span>
no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><font color=red>正则表达式：</font></strong></p>
<blockquote>
<font color=bluye>基础正则表达式 -->grep可以直接使用</font></blockquote>
<p>$	以...结尾<br>
^	以...开头<br>
.	匹配任意一个字符<br>
-	匹配前一个字符或子表达式任意次（例如：grep &quot;g.<em>d&quot; a.txt（过滤a.txt文件中的以g开头以d结尾</em>可以代表有任意多个字符或没有字符））<br>
[A-Z] [a-z] [0-9] [A-Za-z0-9]<br>
[^a-z] 	取反</p>
<p>扩展正则表达式 egrep =grep -E<br>
{n,m} 匹配前一个字符或子表达式n到m次<br>
{n, }  匹配前一个字符或子表达式最少n次<br>
{ ,m}  匹配前一个字符或表达式最少m次<br>
{n} 匹配前一个字符或子表达式n次</p>
<p>+ 匹配前一个字符或子表达式1次以上（*包括0+不包括，至少）<br>
？ 匹配前一个字符或子表达式0次或1次以上<br>
| 	或	<br>
()	分组(例如：(g|f)ood)</p>
<p>\	转义，取消一个字符的特殊含义</p>
<p>想要查看更多的正则表达式就去👉<a href="https://blog.csdn.net/liu_chen_yang/article/details/123231302" target="_blank" rel="noopener noreferrer">正则表达式（全）<ExternalLinkIcon/></a>👈</p>
<blockquote>
<p>查找/root这层目录有多少个普通文件？<br>
find ./ -maxdepth 1 -type f ! -name &quot;.*&quot; | wc -l | ll | grep -c &quot;^_&quot;</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191618506.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="sed" tabindex="-1"><a class="header-anchor" href="#sed" aria-hidden="true">#</a> <font color=red>sed</font></h3>
<p><strong><font color=green>语法：</font></strong></p>
<blockquote>
<p>sed [选项] ‘[操作地址]sed内置操作’ 文件</p>
</blockquote>
<p><strong><font color=orange>常用选项</font></strong></p>
<table>
<thead>
<tr>
<th>sed</th>
<th>流文件处理工具</th>
</tr>
</thead>
<tbody>
<tr>
<td>-n</td>
<td>只输出处理的行</td>
</tr>
<tr>
<td>-i</td>
<td>修改文件内容，编辑文件</td>
</tr>
<tr>
<td>-e</td>
<td>指定多个sed内置操作，现在不常用，多个sed内置操作可以使用分号隔开</td>
</tr>
<tr>
<td>-r</td>
<td>支持扩展正则表达式</td>
</tr>
</tbody>
</table>
<p><strong><font color=orange>操作地址</font></strong></p>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>2</td>
<td>代表处理文件的第2行</td>
</tr>
<tr>
<td>1,5</td>
<td>代表处理文件的第1到5行</td>
</tr>
<tr>
<td>1;5</td>
<td>代表处理文件的第1行和第5行</td>
</tr>
<tr>
<td>1~2</td>
<td>代表指定步长为2，处理的是1,3,5…行</td>
</tr>
<tr>
<td>2,~2</td>
<td>代表处理文件的第2行开始，到2的倍数行结束。（2,~2=2,4 ;4,~4=4,8行）</td>
</tr>
<tr>
<td>4,$</td>
<td>代表处理文件第4行到最后一行</td>
</tr>
<tr>
<td>1,+2</td>
<td>代表处理文件的第1行到第1+2行，也就是1到3行</td>
</tr>
</tbody>
</table>
<p><strong><font color=bright magenta>举例：</font></strong></p>
<blockquote>
<p>sed -n '2p' a.txt <font color=blue><strong>打印第二行</strong> <strong>(2)</strong></font><br>
sed -n '2,5p' a.txt <font color=blue><strong>打印第二行到第五行(2,3,4,5)</strong> </font><br>
sed -n '2p;5p' a.txt <font color=blue><strong>打印第二行和第五行(2,5)</strong></font><br>
sed -n '3,$p' a.txt <font color=blue> <strong>打印第三行到最后一行(3,4,5,6,7,8,9,10)</strong></font><br>
sed -n '1~2p' a.txt <font color=blue><strong>打印指定步长为2，所以打印的是1、3、5、7......行 (1,3,5,7,9)</strong></font><br>
sed -n '1,+2p' a.txt <font color=blue><strong>打印第1行到第1+2行，也就是1到3行(1,2,3)</strong> </font></p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#sed替换文本中的内容【sed -i "s/需要替换的内容/要替换成的内容/g" 要修改的文件名】</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">"s/123/999/g"</span> abc.txt

<span class="token comment">#sed替换文本中的内容（变量形式）【sed -i "s/需要替换的内容/变量名/g" 要修改的文件名】</span>
<span class="token comment">#注意：带入变量的时候“sed -i "s/123/999/g" abc.txt”这样写是不合法的，怎么解决呢？可以自定义分隔符就可以了。</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">"s|123|<span class="token variable">$num</span>|g"</span> abc.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><font color=red> 注意：带入变量的时候“sed -i "s/123/999/g" abc.txt”这样写是不合法的，怎么解决呢？可以自定义分隔符就可以了。</font><p><strong><font color=orange>内置操作</font></strong></p>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>p</td>
<td>打印</td>
</tr>
<tr>
<td>a</td>
<td>在指定行后追加数据</td>
</tr>
<tr>
<td>i</td>
<td>在指定行前插入行前</td>
</tr>
<tr>
<td>d</td>
<td>删除指定行</td>
</tr>
<tr>
<td>c</td>
<td>替换指定整行</td>
</tr>
<tr>
<td>s</td>
<td>替换指定字符，默认替换每行第一个字符</td>
</tr>
<tr>
<td>g</td>
<td>通常与s组合使用，替换全部指定字符</td>
</tr>
<tr>
<td>n</td>
<td>获取下一行</td>
</tr>
<tr>
<td>y</td>
<td>字符转换，类似于tr命令(正则不能使用)</td>
</tr>
<tr>
<td>r</td>
<td>将文件读入指定行后</td>
</tr>
<tr>
<td>w</td>
<td>将指定行另存为文件</td>
</tr>
<tr>
<td>q</td>
<td>结束sed操作</td>
</tr>
<tr>
<td>N</td>
<td>不会清空模式空间内的内容，将下一行追加到模式空间，两行数据以换行符</td>
</tr>
</tbody>
</table>
<p><strong><font color=bright magenta>举例：</font></strong></p>
<blockquote>
<p>sed -i '2a abcabc' a.txt	 <font color=blue><strong>修改文件</strong></font><br>
sed '2a abcabc' a.txt <font color=blue><strong>输出一下但不修改文件</strong></font><br>
sed '3d' a.txt	 <font color=blue><strong>删除第三行</strong></font><br>
sed 's/abc/ABC/g' a.txt	 <font color=blue><strong>把a.txt中的所有abc修改成ABC</strong></font><br>
sed -n 'n,p' a.txt  <font color=blue><strong>(2,4,6,8,10)</strong></font><br>
sed -n 'N,p' a.txt  <font color=blue><strong>(1,2,3,4,5,6,7,8,9,10)</strong></font><br>
sed '3r a.txt' b.txt <font color=blue>	<strong>把a.txt里面的数据放到b.txt的第三行的后面</strong></font><br>
sed '3,5w a.txt' b.txt	 <font color=blue><strong>把a.txt的第三行到第五行放到b.txt里面</strong></font><br>
sed -n '3!p' a.txt	 <font color=blue><strong>除了第三行其他都打印出来</strong></font></p>
</blockquote>
<p>在sed内置操作前加!，表示除了指定地址外，其余行执行该命令<br>
s替换的两个特殊用法&amp;和\1</p>
<p>使用正则：/字符或表达式/<br>
想要查看更多的正则表达式就去👉<a href="https://blog.csdn.net/liu_chen_yang/article/details/123231302" target="_blank" rel="noopener noreferrer">正则表达式（全）<ExternalLinkIcon/></a>👈</p>
<p>echo &quot;<a href="http://www.baidu.com/1.mp3" target="_blank" rel="noopener noreferrer">http://www.baidu.com/1.mp3<ExternalLinkIcon/></a>&quot; | sed -r 's#(.<em>)//(.</em>)/(.*)#\2#'</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191618100.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="awk" tabindex="-1"><a class="header-anchor" href="#awk" aria-hidden="true">#</a> <font color=red>awk</font></h3>
<p><strong><font color=green>语法：</font></strong></p>
<blockquote>
<p>awk [选项] ‘BEGIN{command}匹配模式{command}END{command}’ 文件</p>
</blockquote>
<p><strong><font color=green>执行流程：</font></strong></p>
<blockquote>
<p>执行BEGIN{commands}语句块中的语句；<br>
从文件或标准输入中读取第1行；<br>
如果没有匹配模式，则执行{}中的语句；<br>
若有匹配模式，则检查该整行与匹配模式是否匹配;<br>
若匹配, 则执行{}中的语句；<br>
若不匹配则不执行{}中的语句,接着读取下一行；<br>
重复这个过程, 直到所有行被读取完毕；<br>
执行END{commands}语句块中的语句。</p>
</blockquote>
<p><strong><font color=green>awk格式书写：</font></strong></p>
<blockquote>
<p>awk的指令一定要用单引号括起<br>
awk的动作一定要用花括号括起<br>
匹配模式可以是正则表达式、条件表达式或两种组合<br>
如果模式是正则表达式要用/做分割符<br>
多个动作之间用;号分开</p>
</blockquote>
<p><strong><font
 color=orange>内置操作</font></strong></p>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>$0</td>
<td>文件的整行</td>
</tr>
<tr>
<td>$1~$n</td>
<td>awk处理的列，以FS为分隔符</td>
</tr>
<tr>
<td>NF</td>
<td>查看一共有多少列</td>
</tr>
<tr>
<td>$NF</td>
<td>查看文件的最后一列</td>
</tr>
<tr>
<td>NR</td>
<td>表示处理的行数（一共有多少行）	外：指定输出第几行</td>
</tr>
<tr>
<td>FNR</td>
<td>表示处理当前文件的行数</td>
</tr>
<tr>
<td>FS</td>
<td>输入字段的分隔符，默认空格或制表符</td>
</tr>
<tr>
<td>RS</td>
<td>输入记录的分隔符，默认是换行</td>
</tr>
<tr>
<td>OFS</td>
<td>输出字段的分隔符，默认空格</td>
</tr>
<tr>
<td>ORS</td>
<td>输出行的分隔符，默认换行</td>
</tr>
<tr>
<td>FILENAME</td>
<td>awk处理的文件名</td>
</tr>
<tr>
<td>PATH</td>
<td>文件路径</td>
</tr>
<tr>
<td>ARGC</td>
<td>命令行参数个数</td>
</tr>
<tr>
<td>ARGV</td>
<td>命令行参数数组</td>
</tr>
<tr>
<td>ENVIRON</td>
<td>获取Linux系统中的环境变量</td>
</tr>
</tbody>
</table>
<p><strong><font color=bright magenta>awk进阶用法（内置）举例：</font></strong></p>
<blockquote>
<p>awk 'END{print FILENAME}' dName.txt	 <font color=blue><strong>输出文件名加个END输出一个文件名，否则文件有多少行就输出多少个文件名</strong></font><br>
awk 'END {print ENVIRON[&quot;PATH&quot;]}' dName.txt 	<font color=blue><strong>掉用系统中的环境变量</strong></font><br>
head -1 a.txt  | awk 'BEGIN{OFS=&quot;-&quot;}{print $1,$2}'	 <font color=blue><strong>查看a.txt第一行,用内置分隔符OFS指定以-分割（1.1.1.1-11）</strong></font><br>
head -1 a.txt  | awk 'BEGIN{ORS=&quot;-&quot;}{print $1,$2}'	 <font color=blue><strong>查看a.txt第一行,用内置分隔符ORS指定以-在最后面分割（1.1.1.1 11-）</strong></font><br>
awk 'length($0)==2 {print}' h.txt<font color=blue>	<strong>如果h.txt里面有长度等于2的就输出</strong></font><br>
echo &quot;abc123abc&quot; | awk '{print toupper($0)}'	<font color=blue><strong>把abc换成ABC</strong></font><br>
echo &quot;ABC123ABC&quot; | awk '{print tolower($0)}'	<font color=blue><strong>把ABC换成abc</strong></font></p>
</blockquote>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>getline</td>
<td>获取下一行</td>
</tr>
<tr>
<td>split(&quot;字符串&quot;,&quot;数组名称&quot;,&quot;分隔符&quot;)</td>
<td>按指定分隔符将字符串切割为数组</td>
</tr>
<tr>
<td>length(&quot;字符串&quot;)</td>
<td>求字符串长度</td>
</tr>
<tr>
<td>sub(&quot;原字符&quot;,&quot;替换字符&quot;,&quot;字符串&quot;)</td>
<td>默认替换一次，返回的是替换次数，该字符串内容 发生变化</td>
</tr>
<tr>
<td>gsub</td>
<td>全局替换</td>
</tr>
<tr>
<td>-F</td>
<td>指定分隔符</td>
</tr>
<tr>
<td>toupper</td>
<td>小写换大写</td>
</tr>
<tr>
<td>tolower</td>
<td>大写换小写</td>
</tr>
<tr>
<td><br></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong><font color=bright magenta>举例：</font></strong></p>
<blockquote>
<p>awk -F &quot;:&quot; 'END {print NR}' /etc/passwd	<font color=blue><strong>打印一共有多少行</strong></font><br>
awk -F &quot;:&quot; 'NR==3{print}' /etc/passwd	<font color=blue><strong>打印第三行</strong> </font><br>
awk -F &quot;:&quot; 'NR==3 {print $2}'/etc/passwd	<font color=blue><strong>打印第三行第二段，以：为分隔符</strong> </font><br>
awk 'NR&lt;=3 {print }' /etc/passwd	<font color=blue><strong>打印前三行</strong></font><br>
awk 'NR==3||NR==5 {print }' /etc/passwd	<font color=blue><strong>打印第三行和第五行</strong></font></p>
</blockquote>
<p><strong><font color=red>时间函数：</font><font color=orange><strong>strftime()时间	systime()时间戳</strong></font></strong></p>
<blockquote>
<p>awk 'BEGIN {print strftime()}'	<font color=blue> <strong>输出年月日时分秒（四 3月  3 09:35:34 CST 2022）</strong> </font><br>
awk 'BEGIN {print strftime(&quot;%Y&quot;)}'<font color=blue> <strong>输出年（2022）</strong> </font><br>
awk 'BEGIN {print strftime(&quot;%F&quot;)}'<font color=blue>  <strong>输出年月日（2022-03-03）</strong></font><br>
awk 'BEGIN {print strftime(&quot;%T&quot;)}'	<font color=blue> <strong>输出时分秒（09:36:16）</strong></font><br>
awk 'BEGIN {print systime()}'	<font color=blue> <strong>输出时间戳（1646271406）</strong></font></p>
</blockquote>
<p><strong><font color=red>awk运算： </font></strong></p>
<blockquote>
<p>echo a | awk '{print 1/3}'	<font color=blue> <strong>小数 （0.33333）</strong></font><br>
echo a | awk 'print int(1/3)'	<font color=blue><strong>整数（0）</strong></font><br>
echo a | awk '{print int (1/3*100)}' <strong><font color=blue>向小数点后面移两位（33）</font></strong></p>
</blockquote>
<p><strong><font color=red>占位符：</font></strong></p>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>%f</td>
<td>输出小数</td>
</tr>
<tr>
<td>%d</td>
<td>输出整数</td>
</tr>
<tr>
<td>%s</td>
<td>输出字符串</td>
</tr>
</tbody>
</table>
<p><strong><font color=red>字符串格式化输出：</font></strong></p>
<blockquote>
<p>echo a | awk '{printf &quot;使用率为%.2f\n&quot;,(1/3)}'	<strong><font color=blue>输出(使用率为0.33) </font></strong><br>
echo a | awk '{printf &quot;使用率为%d\n&quot;,(1/3)}'	<strong><font color=blue>输出(使用率为0)  </font></strong><br>
echo a | awk '{printf &quot;使用率为%s\n&quot;,&quot;xiaoming&quot;}'	<strong><font color=blue>输出(使用率为xiaoming) </font></strong></p>
</blockquote>
<p><strong><font color=red>查看内存占用率：</font></strong></p>
<blockquote>
<p>free -m | awk 'NR==2 {printf  &quot;当前使用率是%d%\n&quot;,int($3/$2*100)&quot;%&quot;}'	<font color=blue><strong>输出（当前使用率是12%）</strong></font></p>
</blockquote>
<p><strong><font color=red>awk之if判断：</font></strong></p>
<blockquote>
<p>awk '{if ($1==&quot;识别完成&quot;) {print 1} else {print 0}}'<br>
<strong><font color=blue>如果$1的值等于识别完成这四个字，就输出1，否则输出0；</font></strong></p>
</blockquote>
<p><strong><font color=red>awk扩展正则：</font></strong></p>
<blockquote>
<p>awk '$3~/^41/ {print $1,$2,$3}' b.txt	<strong><font color=blue>取第三行以41开头的输出姓，名，编号 </font></strong></p>
<p>awk '$2~/^(D|X)/ {print $1,$2}' b.txt	<strong><font color=blue>取第二行以D或者X开头的名输出姓，名 </font></strong></p>
<p>awk '/^[^#]/ {print $3}' /etc/fstab	<strong><font color=blue>取消以#号开头的行打印输出第三行 </font></strong></p>
</blockquote>
<p>想要查看更多的正则表达式就去👉<a href="https://blog.csdn.net/liu_chen_yang/article/details/123231302" target="_blank" rel="noopener noreferrer">正则表达式（全）<ExternalLinkIcon/></a>👈</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">'BEGIN{FS=":";print "ARGC="ARGC;for(k in ARGV) {print k"="ARGV[k]; }}'</span> /etc/passwd

<span class="token function">awk</span> <span class="token string">'BEGIN{print ENVIRON["PATH"];}'</span> /etc/passwd

<span class="token function">awk</span> <span class="token string">'BEGIN{OFMT="%.3f";print 2/3,123.11111111;}'</span> /etc/passwd

<span class="token function">awk</span> <span class="token string">'{tmp=$0;getline;print tmp"="$0}'</span> test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


