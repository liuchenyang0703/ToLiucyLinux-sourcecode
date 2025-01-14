<template><div><div class="hint-container tip">
<p class="hint-container-title">友情提示</p>
<p><strong>转载须知</strong>: 以下所有文章整理于B站宋红康老师的《MySQL数据库入门到大牛》。<a href="https://www.bilibili.com/video/BV1iq4y1u7vj?p=1&amp;vd_source=cea816a08805c218ac4390ae9b61ae31" target="_blank" rel="noopener noreferrer">MySQL</a></p>
</div>
<h2 id="_1-mysql8的主要目录结构" tabindex="-1"><a class="header-anchor" href="#_1-mysql8的主要目录结构"><span>1. MySQL8的主要目录结构</span></a></h2>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">find</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_1-1-数据库文件的存放路径" tabindex="-1"><a class="header-anchor" href="#_1-1-数据库文件的存放路径"><span>1.1 数据库文件的存放路径</span></a></h3>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>show variables like 'datadir'; # /var/lib/mysql/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_1-2-相关命令目录" tabindex="-1"><a class="header-anchor" href="#_1-2-相关命令目录"><span>1.2 相关命令目录</span></a></h3>
<p><strong>相关命令目录：/usr/bin 和/usr/sbin。</strong></p>
<h3 id="_1-3-配置文件目录" tabindex="-1"><a class="header-anchor" href="#_1-3-配置文件目录"><span>1.3 配置文件目录</span></a></h3>
<p><strong>配置文件目录：/usr/share/mysql-8.0（命令及配置文件），/etc/mysql（如my.cnf）</strong></p>
<h2 id="_2-数据库和文件系统的关系" tabindex="-1"><a class="header-anchor" href="#_2-数据库和文件系统的关系"><span>2. 数据库和文件系统的关系</span></a></h2>
<h3 id="_2-1-表在文件系统中的表示" tabindex="-1"><a class="header-anchor" href="#_2-1-表在文件系统中的表示"><span>2.1 表在文件系统中的表示</span></a></h3>
<h4 id="_2-1-1-innodb存储引擎模式" tabindex="-1"><a class="header-anchor" href="#_2-1-1-innodb存储引擎模式"><span>2.1.1 InnoDB存储引擎模式</span></a></h4>
<p><strong>1.</strong> <strong>表结构</strong></p>
<p>为了保存表结构，<code v-pre>InnoDB</code>在<code v-pre>数据目录</code>下对应的数据库子目录下创建了一个专门用于<code v-pre>描述表结构的文件</code></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>表名.frm</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>2.</strong> <strong>表中数据和索引</strong></p>
<p><strong>① 系统表空间（system tablespace）</strong></p>
<p>默认情况下，InnoDB会在数据目录下创建一个名为<code v-pre>ibdata1</code>、大小为<code v-pre>12M</code>的<code v-pre>自拓展</code>文件，这个文件就是对应的<code v-pre>系统表空间</code>在文件系统上的表示。</p>
<p><strong>② 独立表空间(file-per-table tablespace)</strong></p>
<p>在MySQL5.6.6以及之后的版本中，InnoDB并不会默认的把各个表的数据存储到系统表空间中，而是为<code v-pre>每一个表建立一个独立表空间</code>，也就是说我们创建了多少个表，就有多少个独立表空间。使用<code v-pre>独立表空间</code>来存储表数据的话，会在该表所属数据库对应的子目录下创建一个表示该独立表空间的文件，文件名和表名相同。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>表名.ibd</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>MySQL8.0中不再单独提供<code v-pre>表名.frm</code>，而是合并在<code v-pre>表名.ibd</code>文件中。</p>
</blockquote>
<p><strong>③ 系统表空间与独立表空间的设置</strong></p>
<p>我们可以自己指定使用<code v-pre>系统表空间</code>还是<code v-pre>独立表空间</code>来存储数据，这个功能由启动参数<code v-pre>innodb_file_per_table</code>控制</p>
<div class="language-ini line-numbers-mode" data-highlighter="shiki" data-ext="ini" data-title="ini" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">[server]</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379"> </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">innodb_file_per_table</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">0 </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 0：代表使用系统表空间； 1：代表使用独立表空间</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>④ 其他类型的表空间</strong></p>
<p>随着MySQL的发展，除了上述两种老牌表空间之外，现在还新提出了一些不同类型的表空间，比如通用表空间（general tablespace）、临时表空间（temporary tablespace）等。</p>
<h4 id="_2-1-2-myisam存储引擎模式" tabindex="-1"><a class="header-anchor" href="#_2-1-2-myisam存储引擎模式"><span>2.1.2 MyISAM存储引擎模式</span></a></h4>
<p><strong>1.</strong> <strong>表结构</strong></p>
<p>在存储表结构方面， MyISAM 和 InnoDB 一样，也是在<code v-pre>数据目录</code>下对应的数据库子目录下创建了一个专门用于描述表结构的文件</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>表名.frm</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>2.</strong> <strong>表中数据和索引</strong></p>
<p>在MyISAM中的索引全部都是<code v-pre>二级索引</code>，该存储引擎的<code v-pre>数据和索引是分开存放</code>的。所以在文件系统中也是使用不同的文件来存储数据文件和索引文件，同时表数据都存放在对应的数据库子目录下。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>test.frm 存储表结构 #MySQL8.0 改为了 b.xxx.sdi</span></span>
<span class="line"><span>test.MYD 存储数据 (MYData) </span></span>
<span class="line"><span>test.MYI 存储索引 (MYIndex</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312031906036.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


