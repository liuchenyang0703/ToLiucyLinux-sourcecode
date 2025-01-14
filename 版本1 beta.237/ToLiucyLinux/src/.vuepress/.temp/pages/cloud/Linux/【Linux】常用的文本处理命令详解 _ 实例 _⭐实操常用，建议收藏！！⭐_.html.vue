<template><div><figure><img src="https://img-blog.csdnimg.cn/bb5441a2190a4a5f905792d120fbd86a.png#pic_center" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<p>@<a href="%E5%B8%B8%E7%94%A8%E7%9A%84%E6%96%87%E6%9C%AC%E5%A4%84%E7%90%86%E5%91%BD%E4%BB%A4%E7%9B%AE%E5%BD%95">toc</a></p>
<h1 id="_1、rename批量修改文件名" tabindex="-1"><a class="header-anchor" href="#_1、rename批量修改文件名" aria-hidden="true">#</a> 1、rename	批量修改文件名</h1>
<p>首先：批量创建文件（20个）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">touch</span> test-<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">20</span><span class="token punctuation">}</span>.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/266fc1930ade412097b7553ef7ccf48b.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="rename-介绍" tabindex="-1"><a class="header-anchor" href="#rename-介绍" aria-hidden="true">#</a> rename 介绍：</h2>
<blockquote>
<p>  rename命令的功能是用于批量修改文件名称。与mv命令一次只能修改一个文件名不同，rename命令能够基于正则表达式对文件名进行批量修改，但要求是把匹配规则准确地描述给系统。<br><br>
  rename命令的参数有三项：其一是当前文件名中要被修改的字符，其二是其要被修改为的新字符，其三是要被执行的对象文件列表。初次可能有点难理解，动手尝试下吧~</p>
</blockquote>
<h2 id="rename-格式" tabindex="-1"><a class="header-anchor" href="#rename-格式" aria-hidden="true">#</a> rename 格式：</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">rename</span> 原字符 新字符 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="rename-实例" tabindex="-1"><a class="header-anchor" href="#rename-实例" aria-hidden="true">#</a> rename 实例：</h2>
<p><strong>实例1：修改名为 test-18.txt 为 cs-18.txt</strong></p>
<p>单个修改还是推荐mv命令；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">rename</span> test-18.txt cs-18.txt test-18.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/98d3a8a86c6c45cd891a28cb0f26c15a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>实例2：将所有test开头的文件全部修改为abc开头的</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">rename</span> <span class="token builtin class-name">test</span> abc test*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/99e89c2b8e2448448d02176ba19f43cf.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>实例3：将所有的txt后缀改为cfg</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">rename</span> txt cfg *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/d553ecca95264871a0bd88da202750ef.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>实例4：将所有的a都改为A</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">rename</span> a A *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/272aa816c6ac47849c7f16523a5951f1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="_2、dirname去除文件名中的非目录部分-取路径的目录部分" tabindex="-1"><a class="header-anchor" href="#_2、dirname去除文件名中的非目录部分-取路径的目录部分" aria-hidden="true">#</a> 2、dirname	去除文件名中的非目录部分（取路径的目录部分）</h1>
<h2 id="dirname-介绍" tabindex="-1"><a class="header-anchor" href="#dirname-介绍" aria-hidden="true">#</a> dirname 介绍：</h2>
<blockquote>
<p>  dirname命令去除文件名中的非目录部分，仅显示与目录有关的内容。dirname命令读取指定路径名保留最后一个/及其后面的字符，删除其他部分，并写结果到标准输出。如果最后一个/后无字符，dirname命令使用倒数第二个/，并忽略其后的所有字符。dirname 和 basename 通常在 shell 内部命令替换使用，以指定一个与指定输入文件名略有差异的输出文件名。</p>
</blockquote>
<h2 id="dirname-格式" tabindex="-1"><a class="header-anchor" href="#dirname-格式" aria-hidden="true">#</a> dirname 格式：</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">dirname</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="dirname-实例" tabindex="-1"><a class="header-anchor" href="#dirname-实例" aria-hidden="true">#</a> dirname 实例：</h2>
<p><strong>实例1：去除 // 的非目录部分结果为 / ：</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">dirname</span> //

<span class="token comment">#结果为</span>
/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实例2：去除 /a/b/ 的非目录部分结果为 /a ：</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">dirname</span> /a/b/

<span class="token comment">#结果为</span>
/a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实例3：去除 a 的非目录部分结果为 ：</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">dirname</span> a

<span class="token comment">#结果为</span>
<span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实例4：去除 a/b 的非目录部分结果为路径名 a ：</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">dirname</span> a/b

<span class="token comment">#结果为</span>
a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/147874444531499b9527444a12b02c8d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="_3、basename-显示文件路径名的基本文件名-取路径中的文件名" tabindex="-1"><a class="header-anchor" href="#_3、basename-显示文件路径名的基本文件名-取路径中的文件名" aria-hidden="true">#</a> 3、basename 显示文件路径名的基本文件名（取路径中的文件名）</h1>
<h2 id="basename-介绍" tabindex="-1"><a class="header-anchor" href="#basename-介绍" aria-hidden="true">#</a> basename 介绍：</h2>
<blockquote>
<p>  basename命令主要用于显示文件路径名剔除目录部分后的显示文件名。如何指定了后缀参数suffix，同时也删除文件的扩展名。其中，name是文件的路径名，suffix是文件名的后缀。</p>
</blockquote>
<h2 id="basename-格式" tabindex="-1"><a class="header-anchor" href="#basename-格式" aria-hidden="true">#</a> basename 格式：</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">basename</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="basename-实例" tabindex="-1"><a class="header-anchor" href="#basename-实例" aria-hidden="true">#</a> basename 实例：</h2>
<p><strong>显示文件路径名/usr/bin/lcy的基本文件名lcy：</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">basename</span> /usr/bin/lcy

<span class="token comment">#结果为</span>
lcy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/a506de53415d4b9694e5c84ca188931c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="_4、cut-按列提取文件内容-切割文本内容" tabindex="-1"><a class="header-anchor" href="#_4、cut-按列提取文件内容-切割文本内容" aria-hidden="true">#</a> 4、cut 按列提取文件内容（切割文本内容）</h1>
<h2 id="cut-介绍" tabindex="-1"><a class="header-anchor" href="#cut-介绍" aria-hidden="true">#</a> cut 介绍：</h2>
<blockquote>
<p>  cut命令的功能是用于按列提取文件内容。常用的grep命令仅能对关键词进行按行提取过滤，而cut命令则是可以根据指定的关键词信息，针对特定的列内容进行过滤。</p>
</blockquote>
<h2 id="cut-格式" tabindex="-1"><a class="header-anchor" href="#cut-格式" aria-hidden="true">#</a> cut 格式：</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cut</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span> 文件名
<span class="token function">cat</span> 文件名 <span class="token operator">|</span> <span class="token function">cut</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常用参数：</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>解析</th>
</tr>
</thead>
<tbody>
<tr>
<td>-d</td>
<td>指定分隔符</td>
</tr>
<tr>
<td>-f</td>
<td>指定取第几段，与-d一起使用</td>
</tr>
<tr>
<td>-b</td>
<td>按字节进行切割（一般是英文）</td>
</tr>
<tr>
<td>-c</td>
<td>按字符进行切割（一般是中文）</td>
</tr>
</tbody>
</table>
<h2 id="cut-实例" tabindex="-1"><a class="header-anchor" href="#cut-实例" aria-hidden="true">#</a> cut 实例：</h2>
<p><strong>实例1：以冒号为间隔符，仅提取指定文件中第一列的内容：</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token builtin class-name">:</span> <span class="token parameter variable">-f</span> <span class="token number">1</span>
<span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token builtin class-name">:</span> <span class="token parameter variable">-f</span> <span class="token number">1</span> /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/a994fb38209549118cee0080dd98b538.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>实例2：仅提取指定文件中每行的前4个字符：</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-c</span> <span class="token number">1</span>-4
<span class="token function">cut</span> <span class="token parameter variable">-c</span> <span class="token number">1</span>-4 /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/9b8be522f48c4f92aea8584452a4b03f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>实例3：以空格为单位切割只要成功、失败两个字</strong></p>
<figure><img src="https://img-blog.csdnimg.cn/6b0923b482364c7bb07670ebfed9f8ac.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> a.txt <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">" "</span> <span class="token parameter variable">-f</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-c</span> <span class="token number">4</span>-5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/039946476fc141129b57d40a4aa39714.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>实例4：切割passwd中只有root四个字</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">head</span> <span class="token parameter variable">-1</span> /etc/passwd <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">":"</span> <span class="token parameter variable">-f</span> <span class="token number">1</span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/3ce3d603a77e483095d5b6ecec80ae27.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="_5、sort-对文件内容进行排序" tabindex="-1"><a class="header-anchor" href="#_5、sort-对文件内容进行排序" aria-hidden="true">#</a> 5、sort 对文件内容进行排序</h1>
<h2 id="sort-介绍" tabindex="-1"><a class="header-anchor" href="#sort-介绍" aria-hidden="true">#</a> sort 介绍：</h2>
<blockquote>
<p>  sort命令的功能是对文件内容进行排序。有时文本中的内容顺序不正确，一行行的手动修改实在太麻烦了。此时使用sort命令就再合适不过了，它能够对文本内容进行再次排序。</p>
</blockquote>
<h2 id="sort-格式" tabindex="-1"><a class="header-anchor" href="#sort-格式" aria-hidden="true">#</a> sort 格式：</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sort</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span> 文件名
<span class="token function">cat</span> 文件名 <span class="token operator">|</span> <span class="token function">sort</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常用参数：</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>解析</th>
</tr>
</thead>
<tbody>
<tr>
<td>-n（number）</td>
<td>以数字为单位进行排序</td>
</tr>
<tr>
<td>-r</td>
<td>降序排</td>
</tr>
<tr>
<td>-t</td>
<td>指定分隔符，默认是空格</td>
</tr>
<tr>
<td>-k</td>
<td>以某段进行排序</td>
</tr>
<tr>
<td>-b</td>
<td>忽略每行前面出现的字符</td>
</tr>
<tr>
<td>-c</td>
<td>检查文件是否已经按照顺序排序</td>
</tr>
<tr>
<td>-d</td>
<td>除字母、数字及空格字符外，忽略其他字符</td>
</tr>
<tr>
<td>-f</td>
<td>将小写字母视为大写字母</td>
</tr>
<tr>
<td>-h</td>
<td>以更易读的格式输出信息（以人类可读的方式）</td>
</tr>
<tr>
<td>-i</td>
<td>除040至176之间的ASCII字符外，忽略其他字符</td>
</tr>
<tr>
<td>-m</td>
<td>将几个排序号的文件进行合并</td>
</tr>
<tr>
<td>-M</td>
<td>将前面3个字母依照月份的缩写进行排序</td>
</tr>
<tr>
<td>-o</td>
<td>将排序后的结果写入指定文件</td>
</tr>
<tr>
<td>-R</td>
<td>依据随机哈希值进行排序</td>
</tr>
<tr>
<td>-T</td>
<td>设置临时目录</td>
</tr>
<tr>
<td>-z</td>
<td>使用0字节结尾， 而不是换行</td>
</tr>
</tbody>
</table>
<h2 id="sort-实例" tabindex="-1"><a class="header-anchor" href="#sort-实例" aria-hidden="true">#</a> sort 实例：</h2>
<p><strong>实例1：整体文件内容排序（优先空格--&gt;数字--&gt;字母--&gt;中文）</strong></p>
<blockquote>
<p>不加任何参数默认只给首字母排序</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sort</span> a.txt
<span class="token function">cat</span> a.txt <span class="token operator">|</span> <span class="token function">sort</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/3663aac614a3406f9a54f741f8aece12.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/b730bb38a44245c9844874647fff741f.png" alt="" loading="lazy"></p>
<p><strong>实例2：文本中数字从大到小排序（降序）</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sort</span> <span class="token parameter variable">-nr</span> a.txt
<span class="token function">cat</span> a.txt <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-nr</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/b3a0c2fde8194cada0de3b8e404d1481.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>实例3：文本中数字从小到大排序（升序）</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sort</span> <span class="token parameter variable">-n</span> a.txt
<span class="token function">cat</span> a.txt <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-n</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/b790fb1b5b7c47f2a43a9a9535a5bfa4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>实例4：以冒号（：）为间隔符，对指定的文件内容按照数字大小对第3列进行排序（降序）</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sort</span> <span class="token parameter variable">-t</span> <span class="token builtin class-name">:</span> <span class="token parameter variable">-k</span> <span class="token number">3</span> <span class="token parameter variable">-n</span> /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/14e97ad8f7bd4b889142114acac2cf35.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="_6、uniq-去除文件中的重复内容行-去重-相邻-的重复行" tabindex="-1"><a class="header-anchor" href="#_6、uniq-去除文件中的重复内容行-去重-相邻-的重复行" aria-hidden="true">#</a> 6、uniq 去除文件中的重复内容行（去重 相邻 的重复行）</h1>
<h2 id="uniq-介绍" tabindex="-1"><a class="header-anchor" href="#uniq-介绍" aria-hidden="true">#</a> uniq 介绍：</h2>
<blockquote>
<p>  uniq命令来自英文单词unique的缩写，中文译为独特的、唯一的，其功能是用于去除文件中的重复内容行。uniq命令能够去除掉文件中相邻的重复内容行，如果两端相同内容中间夹杂了其他文本行，则需要先使用sort命令进行排序后再去重复，这样保留下来的内容就都是唯一的了。</p>
</blockquote>
<h2 id="uniq-格式" tabindex="-1"><a class="header-anchor" href="#uniq-格式" aria-hidden="true">#</a> uniq 格式：</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">uniq</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span> 文件名
<span class="token function">cat</span> 文件名 <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常用参数</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>解析</th>
</tr>
</thead>
<tbody>
<tr>
<td>-c</td>
<td>统计，显示每行在文本中重复出现的次数</td>
</tr>
<tr>
<td>-d</td>
<td>设置每个重复纪录只出现一次</td>
</tr>
<tr>
<td>-u</td>
<td>仅显示没有重复的纪录</td>
</tr>
<tr>
<td>-D</td>
<td>显示所有相邻的重复行</td>
</tr>
<tr>
<td>-f</td>
<td>跳过对前N个列的比较</td>
</tr>
<tr>
<td>-i</td>
<td>忽略大小写</td>
</tr>
<tr>
<td>-s</td>
<td>跳过对前N个字符的比较</td>
</tr>
<tr>
<td>-w</td>
<td>仅对前N个字符进行比较</td>
</tr>
<tr>
<td>-z</td>
<td>设置终止符（默认为换行符）</td>
</tr>
</tbody>
</table>
<h2 id="uniq-实例" tabindex="-1"><a class="header-anchor" href="#uniq-实例" aria-hidden="true">#</a> uniq 实例：</h2>
<p><strong>文本原文</strong></p>
<figure><img src="https://img-blog.csdnimg.cn/1290ccf28abf4c9fb6998adc1e179c1b.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>实例1：去除相邻的重复行，并显示重复次数</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">uniq</span> <span class="token parameter variable">-c</span> a.txt
<span class="token function">cat</span> a.txt <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>前面的3、1代表的是统计的<font color=red> 相邻 </font>重复行次数。</p>
<figure><img src="https://img-blog.csdnimg.cn/54a5e0d271914b48a977df78140e4c2d.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>可以看到有几个也是一样的，但是没有进行统计，那是因为他们不是相邻的行，这时候我们可以结合<code v-pre>sort命令</code>排序来进行统计；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> a.txt <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-n</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/a271a7f8568045abb0c14a86bf2982f2.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>实例2：只统计没有重复的<font color=red>相邻</font>的行的数据</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">uniq</span> <span class="token parameter variable">-u</span> a.txt
<span class="token function">cat</span> a.txt <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-u</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/80fd991a08e64ce5a385c32df7a8e2b8.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>实例3：只统计重复的<font color=red>相邻</font>的行的数据</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> a.txt <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-d</span> 
<span class="token function">uniq</span> <span class="token parameter variable">-d</span> a.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/42ef2caa267a45a7b32953dac6477a1c.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>实例4：忽略大小写去除<font color=red>相邻</font>相邻的重复行，并显示重复次数</strong></p>
<p>初始数据：</p>
<figure><img src="https://img-blog.csdnimg.cn/e5696c25008e4035bf5b07bdc99f8f07.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">uniq</span> <span class="token parameter variable">-ic</span> a.txt
<span class="token function">cat</span> a.txt <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-ic</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/797999ac24f8488abade945a4a4c6cc4.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="_7、tee-读取标准输入的数据-双重重定向" tabindex="-1"><a class="header-anchor" href="#_7、tee-读取标准输入的数据-双重重定向" aria-hidden="true">#</a> 7、tee 读取标准输入的数据（双重重定向）</h1>
<blockquote>
<p>默认覆盖到文件中</p>
</blockquote>
<h2 id="tee-介绍" tabindex="-1"><a class="header-anchor" href="#tee-介绍" aria-hidden="true">#</a> tee 介绍：</h2>
<blockquote>
<p>tee命令的功能是用于读取标准输入的数据，将其内容转交到标准输出设备中，同时保存成文件，并在页面上显示出来。</p>
</blockquote>
<h2 id="tee-格式" tabindex="-1"><a class="header-anchor" href="#tee-格式" aria-hidden="true">#</a> tee 格式：</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">tee</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span> 文件名
<span class="token function">cat</span> 文件名 <span class="token operator">|</span> <span class="token function">tee</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常用参数</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>解析</th>
</tr>
</thead>
<tbody>
<tr>
<td>-a</td>
<td>追加</td>
</tr>
<tr>
<td>-i</td>
<td>忽略中断信号</td>
</tr>
<tr>
<td>-p</td>
<td>诊断写入非管道的错误</td>
</tr>
</tbody>
</table>
<h2 id="tee-实例" tabindex="-1"><a class="header-anchor" href="#tee-实例" aria-hidden="true">#</a> tee 实例：</h2>
<p><strong>实例1：执行uptime指定的命令，并将其执行结果即输出到屏幕，又写入到文件中</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">uptime</span> <span class="token operator">|</span> <span class="token function">tee</span> cs.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/40668ce3d31c482c80911d5ce2ab2104.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>实例2：将要输入的结果即输出到屏幕上，又追加到cs.txt中</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">"123123"</span> <span class="token operator">|</span> <span class="token function">tee</span> <span class="token parameter variable">-a</span> cs.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/5b33d84aa2d241c69d5c628e9e4f7bee.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>实例3：随机输出1-50之间的随机数，将结果输出到屏幕上，并追加到cs.txt文件中</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span>RANDOM<span class="token operator">%</span><span class="token number">50</span><span class="token operator">+</span><span class="token number">1</span><span class="token variable">))</span></span> <span class="token operator">|</span> <span class="token function">tee</span> <span class="token parameter variable">-a</span> cs.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/5db00c3faa8c40d1a472fbdf1a7b5e03.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="_8、tr-字符转换工具-字符串替换" tabindex="-1"><a class="header-anchor" href="#_8、tr-字符转换工具-字符串替换" aria-hidden="true">#</a> 8、tr 字符转换工具（字符串替换）</h1>
<h2 id="tr-介绍" tabindex="-1"><a class="header-anchor" href="#tr-介绍" aria-hidden="true">#</a> tr 介绍：</h2>
<blockquote>
<p>tr命令来自英文单词“transform”的缩写，中文译为“转换”，其功能是用于字符转换。tr命令是一款批量字符转换、压缩、删除的文本工具，但仅能从标准输入中读取文本内容，需要与管道符或输入重定向操作符搭配使用。</p>
</blockquote>
<h2 id="tr-格式" tabindex="-1"><a class="header-anchor" href="#tr-格式" aria-hidden="true">#</a> tr 格式：</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">tr</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span> 原字符串 替换的字符串
ehco <span class="token string">"字符串"</span><span class="token operator">|</span><span class="token function">tr</span> <span class="token string">"原字符串"</span> <span class="token string">"替换的字符串"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常用参数</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>解析</th>
</tr>
</thead>
<tbody>
<tr>
<td>-c</td>
<td>排除某个字符替换其他字符</td>
</tr>
<tr>
<td>-d</td>
<td>删除指定的字符串</td>
</tr>
<tr>
<td>-s</td>
<td>去除相邻重复的字符</td>
</tr>
<tr>
<td>-t</td>
<td>将字符串1截断为字符串2的长度</td>
</tr>
</tbody>
</table>
<h2 id="tr-实例" tabindex="-1"><a class="header-anchor" href="#tr-实例" aria-hidden="true">#</a> tr 实例：</h2>
<p><strong>实例1：直接展示输出abc，将abc替换为大写的ABC</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">"abc"</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">"abc"</span> <span class="token string">"ABC"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/53a84bfb04f74456b051d084bdbc59b4.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>实例2：将文本中的小写的test全部变为大写的TEST</strong></p>
<blockquote>
<p>这个转换并没有起到修改的作用，因此看着是都转换了，但文本中还是小写的。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> a.txt <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">"test"</span> <span class="token string">"TEST"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/c16fa6f494ec439780240c9fe2fcb66a.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>实例3：输出一长串字符串，只删除a-z的字母，其他都留着</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">"aaaaaaaaabbbbbbbbbbbbbbbbbb1c2c3cc"</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token parameter variable">-d</span> <span class="token string">"a-z"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"aaaaaaaaabbbbbbbbbbbbbbbbbb1c2c3cc"</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>a-z<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/0a76790d68fb418da6257a30b2e4e267.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>实例4：去除相邻的相同字符，只保留一个</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">"aaaaaaaabbbbbbbccccccc"</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token parameter variable">-s</span> <span class="token string">"a-z"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"aaaaaaaabbbbbbbccccccc"</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token parameter variable">-s</span> <span class="token punctuation">[</span>a-z<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/7e9264726ab54517929115934cae5891.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>实例5：只保留字符abc，其余字符都替换成逗号</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">"aaaaaaaaabbbbbbbbbbbbbbbbbb1c2c3cc"</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token parameter variable">-c</span> <span class="token string">"abc"</span> <span class="token string">","</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/c5fab52355d24d3781fe6d05f3854cd9.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>实例6：将所有的a-z的小写，全部替换为大写</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> a.txt <span class="token operator">|</span> <span class="token function">tr</span> <span class="token punctuation">[</span>a-z<span class="token punctuation">]</span> <span class="token punctuation">[</span>A-Z<span class="token punctuation">]</span>
<span class="token function">tr</span> <span class="token punctuation">[</span>a-z<span class="token punctuation">]</span> <span class="token punctuation">[</span>A-Z<span class="token punctuation">]</span> <span class="token operator">&lt;</span> a.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/1da8f187b2404ba487961035a178931c.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="_9、join-连接两个文件-以某列为主-相同合并两个文件-不相同的话先排序" tabindex="-1"><a class="header-anchor" href="#_9、join-连接两个文件-以某列为主-相同合并两个文件-不相同的话先排序" aria-hidden="true">#</a> 9、join 连接两个文件--&gt;以某列为主，相同合并两个文件（不相同的话先排序）</h1>
<h2 id="join-介绍" tabindex="-1"><a class="header-anchor" href="#join-介绍" aria-hidden="true">#</a> join 介绍：</h2>
<blockquote>
<p>join的连接操作简言之就是将两个具有相同域的纪录给挑选出来，再将这些纪录所有的域放到一行。</p>
</blockquote>
<blockquote>
<font color=red>注意：join在对两个文件进行连接时，两个文件必须都是按照连接域排好序的，按其他域排序是无效的。</font></blockquote>
<h2 id="join-格式" tabindex="-1"><a class="header-anchor" href="#join-格式" aria-hidden="true">#</a> join 格式：</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">join</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span> <span class="token punctuation">[</span>文件1<span class="token punctuation">]</span> <span class="token punctuation">[</span>文件2<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>常用参数</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>解析</th>
</tr>
</thead>
<tbody>
<tr>
<td>-a1或-a2</td>
<td>除了显示共同域的纪录之外，-a1显示第一个文件没有共同域的纪录，-a2显示第二个文件中没有共同域的纪录</td>
</tr>
<tr>
<td>-i</td>
<td>忽略大小写</td>
</tr>
<tr>
<td>-o</td>
<td>设置结果显示的格式</td>
</tr>
<tr>
<td>-t</td>
<td>改变域的分隔符</td>
</tr>
<tr>
<td>-v1或-v2</td>
<td>不显示共同域的纪录之外，-v1显示第一个文件没有共同域的纪录，-v2显示第二个文件中没有共同域的纪录</td>
</tr>
<tr>
<td>-1或-2</td>
<td>-1用来设置文件1连接的域，-2用来设置文件2连接的域</td>
</tr>
</tbody>
</table>
<h2 id="join-实例" tabindex="-1"><a class="header-anchor" href="#join-实例" aria-hidden="true">#</a> join 实例：</h2>
<p><strong>实例1：将两个文件的具有共同域的记录连接在一起</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost lcy<span class="token punctuation">]</span><span class="token comment"># cat file.db </span>
A li:20:men:anhui
B wang:21:women:jiangsu
C zhang:22:men:anhui
D liu:23:women:Shanghai
E chen:23:women:Hefei
<span class="token punctuation">[</span>root@localhost lcy<span class="token punctuation">]</span><span class="token comment"># cat filecs.db </span>
A li:Song
B wang:shopping
C zhang:pingpong
D liu:chess
E Wang:reading
<span class="token punctuation">[</span>root@localhost lcy<span class="token punctuation">]</span><span class="token comment"># join -t ":" file.db filecs.db </span>
A li:20:men:anhui:Song
B wang:21:women:jiangsu:shopping
C zhang:22:men:anhui:pingpong
D liu:23:women:Shanghai:chess
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/1550559f628d4cd4bb1f409a93e3f6cd.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>实例2：-a1还显示第一个文件中没有共同域的纪录，-a2则显示第二个</strong></p>
<p>文本内容：</p>
<figure><img src="https://img-blog.csdnimg.cn/7e04609fc0db454b9a155bce4764fe98.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost lcy<span class="token punctuation">]</span><span class="token comment"># join -t ":" -a1 file.db filecs.db </span>
A li:20:men:anhui:Song
B wang:21:women:jiangsu:shopping
C zhang:22:men:anhui:pingpong
D liu:23:women:Shanghai:chess
E chen:23:women:Hefei
<span class="token punctuation">[</span>root@localhost lcy<span class="token punctuation">]</span><span class="token comment"># join -t ":" -a2 file.db filecs.db </span>
A li:20:men:anhui:Song
B wang:21:women:jiangsu:shopping
C zhang:22:men:anhui:pingpong
D liu:23:women:Shanghai:chess
E Wang:reading
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实例3：设置指定格式的域来显示出来（将具有共同纪录的域按照姓名+性别+爱好的格式显示出来）</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost lcy<span class="token punctuation">]</span><span class="token comment"># join -t ":" -o 1.1 1.3 2.2 file.db filecs.db </span>
A li:men:Song
B wang:women:shopping
C zhang:men:pingpong
D liu:women:chess
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_10、paste-合并两个文件-合并文件的列-把每个文件以列队列的方式合并显示" tabindex="-1"><a class="header-anchor" href="#_10、paste-合并两个文件-合并文件的列-把每个文件以列队列的方式合并显示" aria-hidden="true">#</a> 10、paste 合并两个文件--&gt;合并文件的列，把每个文件以列队列的方式合并显示</h1>
<h2 id="paste-介绍" tabindex="-1"><a class="header-anchor" href="#paste-介绍" aria-hidden="true">#</a> paste 介绍：</h2>
<blockquote>
<p>paste命令来自英文单词“粘贴”，其功能是用于合并两个文件。paste命令能够将两个文件以列对列的方式进行合并，相当于是把两个不同的文件内容粘贴到了一起，形成新的文件，如需先将内容合并成一行，再以行粘贴的方式合并，可以用-s参数搞定。</p>
</blockquote>
<h2 id="paste-格式" tabindex="-1"><a class="header-anchor" href="#paste-格式" aria-hidden="true">#</a> paste 格式：</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">paste</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span> 文件名1 文件名2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>常用参数</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>解析</th>
</tr>
</thead>
<tbody>
<tr>
<td>-d</td>
<td>设置自定义间隔符【指定连接符】</td>
</tr>
<tr>
<td>-s</td>
<td>将每个文件粘贴成一行【将文件多行变成一行输出】</td>
</tr>
<tr>
<td>- -</td>
<td>从标准输入中读取数据</td>
</tr>
</tbody>
</table>
<h2 id="paste-实例" tabindex="-1"><a class="header-anchor" href="#paste-实例" aria-hidden="true">#</a> paste 实例：</h2>
<p><strong>实例1：将2行字符串修改为1行，在第一行后面添加=用于连接第二行</strong></p>
<p>文本初始内容：</p>
<figure><img src="https://img-blog.csdnimg.cn/112e0fe432f7427f86afb22786fb34e2.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#以=和\n轮流做分隔符</span>
<span class="token function">paste</span> <span class="token parameter variable">-sd</span> <span class="token string">'='</span> a.txt
<span class="token comment">#一个-表示读入一行</span>
<span class="token function">paste</span> <span class="token parameter variable">-d</span> <span class="token string">'='</span> - - <span class="token operator">&lt;</span> a.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/e91a64466052400e8bd2e41abd67a8dd.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>实例2：将2个文件进行合并</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost lcy<span class="token punctuation">]</span><span class="token comment"># cat a.txt </span>
aaa
bbb
ccc
ddd
eee

<span class="token punctuation">[</span>root@localhost lcy<span class="token punctuation">]</span><span class="token comment"># cat b.txt </span>
AAA
BBB
CCC
DDD
EEE

<span class="token punctuation">[</span>root@localhost lcy<span class="token punctuation">]</span><span class="token comment"># paste a.txt b.txt </span>
aaa	AAA
bbb	BBB
ccc	CCC
ddd	DDD
eee	EEE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/4a121894113c466d9e771e492aecc35b.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>实例3：将2个文件进行合并，并添加：为分隔符</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">paste</span> <span class="token parameter variable">-d</span> <span class="token string">':'</span> a.txt b.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/515c58e5066249258410985b39ee4121.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>实例4：将每个文件的内容转为一行，在进行合并</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">paste</span> <span class="token parameter variable">-s</span> a.txt b.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/b0c2692b66e34365974b4c31dab52ce0.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="_11、split-分割文件内容" tabindex="-1"><a class="header-anchor" href="#_11、split-分割文件内容" aria-hidden="true">#</a> 11、split 分割文件内容</h1>
<h2 id="split-介绍" tabindex="-1"><a class="header-anchor" href="#split-介绍" aria-hidden="true">#</a> split 介绍：</h2>
<blockquote>
<p>  split命令来自英文单词“分裂”，其功能是用于分割文件内容。Linux系统运维人员可以使用split命令对指定的大文件进行内容分割，默认会按照每1000行切割成一个小文件来执行，也可以自定义分割大小，方便阅读和传输。</p>
</blockquote>
<h2 id="split-格式" tabindex="-1"><a class="header-anchor" href="#split-格式" aria-hidden="true">#</a> split 格式：</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">split</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span> 文件名 <span class="token punctuation">[</span>要修改的文件名前缀<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>常用参数：</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>解析</th>
</tr>
</thead>
<tbody>
<tr>
<td>-数字</td>
<td>设置要分割的行数</td>
</tr>
<tr>
<td>-a</td>
<td>设置后缀长度</td>
</tr>
<tr>
<td>-l</td>
<td>以行为单位进行切割</td>
</tr>
<tr>
<td>-b</td>
<td>以字节为单位进行切割</td>
</tr>
<tr>
<td>-C</td>
<td>保持每行的完整性</td>
</tr>
<tr>
<td>-d</td>
<td>以数字做后缀而不是字母</td>
</tr>
<tr>
<td>-t</td>
<td>设置间隔符</td>
</tr>
<tr>
<td>--verbose</td>
<td>显示执行过程详细信息</td>
</tr>
</tbody>
</table>
<h2 id="split-实例" tabindex="-1"><a class="header-anchor" href="#split-实例" aria-hidden="true">#</a> split 实例：</h2>
<p><strong>实例1：文件&quot;a.txt&quot;每6行切割成一个文件</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">split</span> <span class="token parameter variable">-6</span> a.txt	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将文件中的文字以每6行切割为一份文件，切割成多个以&quot;x&quot;开头的小文件。</p>
<figure><img src="https://img-blog.csdnimg.cn/593861aa674c40668c706a745cc16f89.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<blockquote>
<font color=red>linux中split命令切割出来的文件名为什么是xaa、xab之类的？？？？</font><br> <p>在 Linux 中，<code v-pre>split</code> 命令用于将文件分割成指定大小的较小文件。默认情况下，split 命令会以字母序列来命名分割后的文件，第一个文件会被命名为 <code v-pre>x</code>，第二个文件会被命名为 <code v-pre>aa</code>，第三个文件会被命名为 <code v-pre>ab</code>，以此类推。<br><br>
这是因为在 Linux 中，split 命令默认使用 6 位数来表示文件名，其中前两个字符用于表示文件大小，后四个字符用于表示文件名的唯一性。例如，如果原始文件名为 <code v-pre>example.txt</code>，则第一个分割后的文件可能会被命名为 xaa.txt，第二个分割后的文件可能会被命名为 xab.txt，以此类推。<br><br>
可以通过在 split 命令中使用 -d 选项来指定使用数字序列来命名文件，例如：</p>
</blockquote>
<p><strong>实例2：切割文件以字节为单位10字节，以lcy作为前缀，以数字作为后缀</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">split</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">-b</span> <span class="token number">10</span> a.txt lcy_
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/c9ec88fd44e94b32916ed7670c15dd6b.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<blockquote>
<p>在上面的例子中，-d 选项用于指定使用数字序列来命名文件，<code v-pre>-b 10</code> 选项用于指定每个分割后的文件大小为 10字节，a.txt 是要分割的文件名，<code v-pre>lcy_</code> 是用于指定前缀的字符串。这样，第一个分割后的文件会被命名为 <code v-pre>lcy_00</code>，第二个分割后的文件会被命名为 <code v-pre>lcy_001</code>，以此类推。<br>
当然，其他单位也可以，比如m（兆比）或者k（K比），<code v-pre>split -d -b 10k a.txt lcy_ &amp;&amp; split -d -b 10m a.txt lcy_</code></p>
</blockquote>
<p><strong>实例3：以行为单位、以lcy.为单位进行切割</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">split</span> <span class="token parameter variable">-l</span> <span class="token number">5</span> a.txt lcy.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>以行为单位，每<code v-pre>五行</code>切割一次，以<code v-pre>lcy.</code>为前缀，后缀为默认，默认从<code v-pre>aa</code>开始。</p>
</blockquote>
<figure><img src="https://img-blog.csdnimg.cn/d85d166e9e4848e29c8276d747473455.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>实例4：以行为单位、以lcy.为单位、并设置后缀为4为数字进行切割</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">split</span> <span class="token parameter variable">-l</span> <span class="token number">5</span> <span class="token parameter variable">-a</span> <span class="token number">4</span> <span class="token parameter variable">-d</span> a.txt lcy.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>以行为单位，每<code v-pre>五行</code>切割一次，以<code v-pre>lcy.</code>为前缀，后缀为<code v-pre>数字</code>形式，后缀长为<code v-pre>4</code>位数；</p>
</blockquote>
<figure><img src="https://img-blog.csdnimg.cn/7c363e0a61944807ae21496fb342caa8.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="_12、diff-vimdiff-多-文本比较" tabindex="-1"><a class="header-anchor" href="#_12、diff-vimdiff-多-文本比较" aria-hidden="true">#</a> 12、diff / vimdiff [多]文本比较</h1>
<h2 id="diff-vimdiff-介绍" tabindex="-1"><a class="header-anchor" href="#diff-vimdiff-介绍" aria-hidden="true">#</a> diff / vimdiff 介绍：</h2>
<p>diff介绍：</p>
<blockquote>
<p>  diff命令来自英文单词“different”的缩写，其功能是用于比较文件内容差异。如果有多个内容相近的文件，如何快速定位到不同内容所在位置？此时用diff命令就再合适不过了~！</p>
</blockquote>
<p>vimdiff介绍：</p>
<blockquote>
<p>  vimdiff命令来自英文词组“Vim differences”的缩写，其功能是用于同时编辑多个文本文件。对纯文本文件的比较和合并工具一直是软件开发过程中比较重要的组成部分，vimdiff命令能够比较多个文本文件之间的差异并快速定位，并很容易地进行文件合并操作。</p>
</blockquote>
<font color=red>diff的区别和vimdiff的区别：</font><blockquote>
<ul>
<li><code v-pre>diff</code> 是可以直接将不同的文件输出出来，就是对于新手不友好，看不出来是哪个文件少东西或者不一样，而且diff最多支持两个文件做比较。</li>
<li><code v-pre>vimdiff</code> 是可以清晰的看出哪个文件少什么东西，或者是那行和哪行不一样，非常的清晰，而且还支持多文件比较，是非常友好的，但是就是退出有点麻烦，必须执行<code v-pre>:q!</code>退出。</li>
<li><code v-pre>总结及推荐</code> 各有各的好，但我还是推荐使用 <font color=red>vimdiff</font >。</li>
</ul>
</blockquote>
<figure><img src="https://img-blog.csdnimg.cn/5a935ed16c4a4ace9ef7e57d431dd6f0.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="diff-vimdiff-格式" tabindex="-1"><a class="header-anchor" href="#diff-vimdiff-格式" aria-hidden="true">#</a> diff / vimdiff 格式：</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">diff</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span> 文件名1 文件名2
vimdiff <span class="token punctuation">[</span>参数<span class="token punctuation">]</span> 文件名1 文件名2 <span class="token punctuation">[</span>文件名N<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="diff-vimdiff-实例" tabindex="-1"><a class="header-anchor" href="#diff-vimdiff-实例" aria-hidden="true">#</a> diff / vimdiff 实例：</h2>
<p><strong>实例1：diff 比较两个文件</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">diff</span> a.txt b.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>看不出来是哪个少东西，很不友好。</p>
</blockquote>
<figure><img src="https://img-blog.csdnimg.cn/d3d8512dea914264ba38a97c58d33e82.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>实例2：vimdiff 比较两个文件</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>vimdiff a.txt b.txt 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/a8a9b019629146bfa9b6b102e9b4399e.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>实例3：vimdiff 比较多个文件</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>vimdiff a.txt b.txt c.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/5a935ed16c4a4ace9ef7e57d431dd6f0.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="_13、xagrs-给其他命令传参数的过滤器" tabindex="-1"><a class="header-anchor" href="#_13、xagrs-给其他命令传参数的过滤器" aria-hidden="true">#</a> 13、xagrs 给其他命令传参数的过滤器</h1>
<blockquote>
<p>将字符结果转化为参数传递个后命令，通常与管道连用</p>
</blockquote>
<h2 id="xagrs-介绍" tabindex="-1"><a class="header-anchor" href="#xagrs-介绍" aria-hidden="true">#</a> xagrs 介绍：</h2>
<blockquote>
<p>  xargs命令来自英文词组“extended arguments”的缩写，其功能是用于给其他命令传递参数的过滤器。xargs命令能够处理从标准输入或管道符输入的数据，并将其转换成命令参数，也可以将单行或多行输入的文本转换成其他格式。<br>
  xargs命令默认接收的信息中，空格是默认定界符，所以可以接收包含换行和空白的内容。</p>
</blockquote>
<h2 id="xagrs-格式" tabindex="-1"><a class="header-anchor" href="#xagrs-格式" aria-hidden="true">#</a> xagrs 格式：</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">xargs</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span> <span class="token punctuation">[</span>文件名<span class="token punctuation">]</span>
命令 <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常用参数：</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>解析</th>
</tr>
</thead>
<tbody>
<tr>
<td>-a</td>
<td>设置从文件中读取数据</td>
</tr>
<tr>
<td>-d</td>
<td>设置自定义定界符</td>
</tr>
<tr>
<td>-I</td>
<td>设置替换字符串</td>
</tr>
<tr>
<td>-n</td>
<td>设置多行输出；将标准输出的文本内容，多行转换一行，默认是空格隔开</td>
</tr>
<tr>
<td>-p</td>
<td>执行命令前询问用户是否确认</td>
</tr>
<tr>
<td>-r</td>
<td>如果输入数据为空，则不执行</td>
</tr>
<tr>
<td>-s</td>
<td>设置每条命令最大字符数</td>
</tr>
<tr>
<td>-t</td>
<td>显示xargs执行的命令</td>
</tr>
<tr>
<td>-i</td>
<td>以大括号保存管道前命令的执行结果</td>
</tr>
</tbody>
</table>
<h2 id="xagrs-实例" tabindex="-1"><a class="header-anchor" href="#xagrs-实例" aria-hidden="true">#</a> xagrs 实例：</h2>
<p><strong>实例1：删除/home/lcy/下的所有的a.txt文件</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">find</span> /home/lcy/ <span class="token parameter variable">-name</span> <span class="token string">"a.txt"</span> <span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>实例2：删除/application/log/下的一天前的日志，类型为目录</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">find</span> /application/log/ <span class="token parameter variable">-mtime</span> +0 <span class="token parameter variable">-type</span> d <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>实例3：默认以空格为分割符，以多行形式输出文件内容，每行显示三段内容值：</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> a.txt <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-n</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>实例4：指定字符<code v-pre>:</code>为定界符，默认以单行的形式输出字符串内容：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> a.txt <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-d</span> <span class="token string">":"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/fbe4a849f6dd485fac4a02d7a17bb4c9.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="_14、rev-将文件中的每行内容反序输出-以列为单位" tabindex="-1"><a class="header-anchor" href="#_14、rev-将文件中的每行内容反序输出-以列为单位" aria-hidden="true">#</a> 14、rev 将文件中的每行内容反序输出（以列为单位）</h1>
<h2 id="rev-介绍" tabindex="-1"><a class="header-anchor" href="#rev-介绍" aria-hidden="true">#</a> rev 介绍：</h2>
<p>使用rev命令可以把每一行字符的顺序颠倒过来显示文件内容</p>
<blockquote>
<p>cat、tac、rev区别：<br><br>
cat 为查看文件<br>
tac 为反向查看文件（将文件倒过来看，行从后往前）<br>
rev 文件内容反序输出（以列为单位，列从后往前）</p>
</blockquote>
<h2 id="rev-格式" tabindex="-1"><a class="header-anchor" href="#rev-格式" aria-hidden="true">#</a> rev 格式：</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">rev</span> <span class="token punctuation">[</span>文件<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="rev-实例" tabindex="-1"><a class="header-anchor" href="#rev-实例" aria-hidden="true">#</a> rev 实例：</h2>
<p><strong>将a.txt每一行字符的顺序颠倒过来显示文件内容：</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">rev</span> a.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/2941342b25114139853870c0b56d44be.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="_15、shuf-产生随机的排列-指定输出内容-随机输出没有顺序" tabindex="-1"><a class="header-anchor" href="#_15、shuf-产生随机的排列-指定输出内容-随机输出没有顺序" aria-hidden="true">#</a> 15、shuf 产生随机的排列（指定输出内容，随机输出没有顺序）</h1>
<h2 id="shuf-介绍" tabindex="-1"><a class="header-anchor" href="#shuf-介绍" aria-hidden="true">#</a> shuf 介绍：</h2>
<blockquote>
<p>shuf命令将输入的内容随机排列并输出。 shuf命令当没有文件或文件为-时，读取标准输入。</p>
</blockquote>
<h2 id="shuf-格式" tabindex="-1"><a class="header-anchor" href="#shuf-格式" aria-hidden="true">#</a> shuf 格式：</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">shuf</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>常用参数：</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>解析</th>
</tr>
</thead>
<tbody>
<tr>
<td>-e</td>
<td>将每个ARG视为输入行</td>
</tr>
<tr>
<td>-r</td>
<td>重复输出行 [可以重复]</td>
</tr>
<tr>
<td>-n</td>
<td>指定输出多少行</td>
</tr>
<tr>
<td>-i</td>
<td>将数字范围LO（最低）到HI（最高）之间的作为输入行</td>
</tr>
</tbody>
</table>
<h2 id="shuf-实例" tabindex="-1"><a class="header-anchor" href="#shuf-实例" aria-hidden="true">#</a> shuf 实例：</h2>
<p><strong>实例1：打乱顺序输出1-10</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">shuf</span> <span class="token parameter variable">-i</span> <span class="token number">1</span>-10	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/e752a92bcaa2426aa347f4323fc83139.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>实例2：打乱顺序输出1-10并只显示5行</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">shuf</span> <span class="token parameter variable">-n</span> <span class="token number">5</span> <span class="token parameter variable">-i</span> <span class="token number">1</span>-10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/f541658dd57744268dcfd840dde2715a.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>实例3：模拟硬币抛掷，获取前10个结果：</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">shuf</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-n</span> <span class="token number">10</span> <span class="token parameter variable">-e</span> <span class="token string">"正面"</span> <span class="token parameter variable">-e</span> <span class="token string">"反面"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/521fcb201b684f7cbe2fa718b3fb37cd.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>实例4：模拟体彩超级大乐透：</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">shuf</span> <span class="token parameter variable">-i</span> <span class="token number">1</span>-35 <span class="token parameter variable">-n</span> <span class="token number">5</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-n</span> <span class="token operator">&amp;&amp;</span> <span class="token function">shuf</span> <span class="token parameter variable">-i</span> <span class="token number">1</span>-12 <span class="token parameter variable">-n</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-n</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/66b2489b87fa46a7a2ee15d110a2730d.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="_16、shell脚本的调式" tabindex="-1"><a class="header-anchor" href="#_16、shell脚本的调式" aria-hidden="true">#</a> 16、Shell脚本的调式</h1>
<h2 id="方法一-set-方式" tabindex="-1"><a class="header-anchor" href="#方法一-set-方式" aria-hidden="true">#</a> 方法一：set 方式</h2>
<ul>
<li>可以在脚本中使用调式，在脚本中可以使用全部调式也可以只调试自己想要的部分；（有调试少部分代码时会使用）</li>
<li>可以在执行脚本时使用调试。（个人习惯使用）</li>
</ul>
<p>bash<br>
-n	将脚本读取一次，用于检测语法错误；<br>
-x	执行每一条命令和结果依次打印；<br>
-v	一边执行脚本，一边打印脚本。</p>
<p><strong>测试:</strong></p>
<font color=blue>**脚本内容：**</font><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">email</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">netstat</span> <span class="token parameter variable">-lnt</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">25</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">)</span></span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$email</span> <span class="token parameter variable">-ge</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"端口已开启"</span>
<span class="token keyword">else</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"端口未开启"</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="脚本-外-使用调式" tabindex="-1"><a class="header-anchor" href="#脚本-外-使用调式" aria-hidden="true">#</a> 脚本 外 使用调式</h3>
<font color=gree>**-x 打印出执行脚本的过程**</font><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sh</span> <span class="token parameter variable">-x</span> cs.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/f9683b42c5d743228be3099a7498f4a9.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>很清晰可以看到每一步执行的操作；</p>
<font color=gree>**-n 测试脚本语法是否有问题**</font><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sh</span> <span class="token parameter variable">-n</span> cs.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们来修改一下脚本，将脚本的if判断的;分号去掉测试；</p>
<figure><img src="https://img-blog.csdnimg.cn/a6b065448d1c485e81f94793e04b785e.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<font color=gree>**-v 一边执行脚本，一边打印脚本**</font><figure><img src="https://img-blog.csdnimg.cn/0715395bd2414f69a44500c924d9fa62.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="脚本-内-使用调式" tabindex="-1"><a class="header-anchor" href="#脚本-内-使用调式" aria-hidden="true">#</a> 脚本 内 使用调式</h3>
<font color=gree>**-x 打印出执行脚本的过程**</font><p>如果对某一段进行调试，在那一段前面加一个set -x，后面加set +x。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token number">1</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token builtin class-name">set</span> <span class="token parameter variable">-x</span> <span class="token comment">#检测s</span>
	echo0
	<span class="token builtin class-name">set</span> +x <span class="token comment">#禁止检测</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是全局调式，可以直接在最上面加个set -x</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#调式</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-x</span> 

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token number">1</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token number">0</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/7211268a29804c72837e42bbf04ac039.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<font color=gree>**-n 测试脚本语法是否有问题**</font><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#调式</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-n</span> 

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token number">1</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token number">0</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/2a5803e7020e4e0b9419a22d79da2d7d.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>0 则为上条命令成功没有报错；</p>
<font color=gree>**-v 一边执行脚本，一边打印脚本**</font><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#调式</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-v</span> 

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token number">1</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token number">0</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/0f31bbf53bc2470b95c5e224c0a9ca38.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="方法二-bashdb-第三方调试工具" tabindex="-1"><a class="header-anchor" href="#方法二-bashdb-第三方调试工具" aria-hidden="true">#</a> 方法二：bashdb 第三方调试工具</h2>
<p>bashdb是一个类GDB的调试工具，使用GDB的同学使用bashdb基本无障碍<br>
bashdb可以运行断点设置、变量查看等常见调试操作 （这是非常好的一个功能）</p>
<p>bashdb需要单独安装</p>
<h3 id="bashdb的安装" tabindex="-1"><a class="header-anchor" href="#bashdb的安装" aria-hidden="true">#</a> bashdb的安装</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#拉取安装包</span>
<span class="token function">wget</span> https://sourceforge.net/projects/bashdb/files/bashdb/4.4-0.94/bashdb-4.4-0.94.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/cc9bd1217f184d44a1817cdbc5d4a018.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>如果出现这个报错，可以在最后添加<code v-pre>-no-check-certificate</code></p>
<figure><img src="https://img-blog.csdnimg.cn/38f5b53bf4aa40fb88a5dac1f67af50a.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#解压压缩包</span>
<span class="token function">tar</span> xf bashdb-4.4-0.94.tar.gz
<span class="token comment">#进入解压目录</span>
<span class="token builtin class-name">cd</span> bashdb-4.4-0.94
<span class="token comment">#编译</span>
./configure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/c78f5bdc399b4e048e47da137a5c6103.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>如果出现此报错，说的时没有编译环境，需要安装一下gcc gcc-c++命令，编译环境；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc gcc-c++
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完再次编译即可；</p>
<figure><img src="https://img-blog.csdnimg.cn/d92a82a2f96143c18fc1d6391b4445ad.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>这样就编译完成了。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#安装</span>
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> check <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成之后，查看版本</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>bashdb <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/9205e29a02414bba9d6b0087eb7ad1ea.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>这样就安装完成了；</p>
<h3 id="bashdb的使用" tabindex="-1"><a class="header-anchor" href="#bashdb的使用" aria-hidden="true">#</a> bashdb的使用</h3>
<p>使用方法：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>bashdb <span class="token parameter variable">--debug</span> 脚本名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>常用参数：</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>一、列出代码和查询代码类：
l  列出当前行以下的10行
-  列出正在执行的代码行的前面10行
<span class="token builtin class-name">.</span>  回到正在执行的代码行
w  列出正在执行的代码行前后的代码
/pat/ 向后搜索pat
？pat？向前搜索pat

二、Debug控制类：
h     帮助
<span class="token builtin class-name">help</span>  命令 得到命令的具体信息
q     退出bashdb
x     算数表达式 计算算数表达式的值，并显示出来
<span class="token operator">!</span><span class="token operator">!</span>    空格Shell命令 参数 执行shell命令
使用bashdb进行debug的常用命令<span class="token punctuation">(</span>cont.<span class="token punctuation">)</span>

三、控制脚本执行类：
n   执行下一条语句，遇到函数，不进入函数里面执行，将函数当作黑盒
s n 单步执行n次，遇到函数进入函数里面
b   行号n 在行号n处设置断点
del 行号n 撤销行号n处的断点
c   行号n 一直执行到行号n处
R   重新启动当前调试脚本
Finish 执行到程序最后
cond n <span class="token function">expr</span> 条件断点
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体怎么用，我也没用过，大家可以去百度查一下；后续如果有用到的话我会补齐的！！！</p>
</div></template>


