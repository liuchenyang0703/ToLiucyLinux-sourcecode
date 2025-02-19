<template><div><div class="hint-container tip">
<p class="hint-container-title">友情提示</p>
<p><strong>转载须知</strong>: 以下所有文章整理于B站宋红康老师的《MySQL数据库入门到大牛》。<a href="https://www.bilibili.com/video/BV1iq4y1u7vj?p=1&amp;vd_source=cea816a08805c218ac4390ae9b61ae31" target="_blank" rel="noopener noreferrer">MySQL<ExternalLinkIcon/></a></p>
</div>
<h2 id="_1-mysql8的主要目录结构" tabindex="-1"><a class="header-anchor" href="#_1-mysql8的主要目录结构" aria-hidden="true">#</a> 1. MySQL8的主要目录结构</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">find</span> / <span class="token parameter variable">-name</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-1-数据库文件的存放路径" tabindex="-1"><a class="header-anchor" href="#_1-1-数据库文件的存放路径" aria-hidden="true">#</a> 1.1 数据库文件的存放路径</h3>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>show variables like 'datadir'; # /var/lib/mysql/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-2-相关命令目录" tabindex="-1"><a class="header-anchor" href="#_1-2-相关命令目录" aria-hidden="true">#</a> 1.2 相关命令目录</h3>
<p><strong>相关命令目录：/usr/bin 和/usr/sbin。</strong></p>
<h3 id="_1-3-配置文件目录" tabindex="-1"><a class="header-anchor" href="#_1-3-配置文件目录" aria-hidden="true">#</a> 1.3 配置文件目录</h3>
<p><strong>配置文件目录：/usr/share/mysql-8.0（命令及配置文件），/etc/mysql（如my.cnf）</strong></p>
<h2 id="_2-数据库和文件系统的关系" tabindex="-1"><a class="header-anchor" href="#_2-数据库和文件系统的关系" aria-hidden="true">#</a> 2. 数据库和文件系统的关系</h2>
<h3 id="_2-1-表在文件系统中的表示" tabindex="-1"><a class="header-anchor" href="#_2-1-表在文件系统中的表示" aria-hidden="true">#</a> 2.1 表在文件系统中的表示</h3>
<h4 id="_2-1-1-innodb存储引擎模式" tabindex="-1"><a class="header-anchor" href="#_2-1-1-innodb存储引擎模式" aria-hidden="true">#</a> 2.1.1 InnoDB存储引擎模式</h4>
<p><strong>1.</strong> <strong>表结构</strong></p>
<p>为了保存表结构，<code v-pre>InnoDB</code>在<code v-pre>数据目录</code>下对应的数据库子目录下创建了一个专门用于<code v-pre>描述表结构的文件</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>表名.frm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2.</strong> <strong>表中数据和索引</strong></p>
<p><strong>① 系统表空间（system tablespace）</strong></p>
<p>默认情况下，InnoDB会在数据目录下创建一个名为<code v-pre>ibdata1</code>、大小为<code v-pre>12M</code>的<code v-pre>自拓展</code>文件，这个文件就是对应的<code v-pre>系统表空间</code>在文件系统上的表示。</p>
<p><strong>② 独立表空间(file-per-table tablespace)</strong></p>
<p>在MySQL5.6.6以及之后的版本中，InnoDB并不会默认的把各个表的数据存储到系统表空间中，而是为<code v-pre>每一个表建立一个独立表空间</code>，也就是说我们创建了多少个表，就有多少个独立表空间。使用<code v-pre>独立表空间</code>来存储表数据的话，会在该表所属数据库对应的子目录下创建一个表示该独立表空间的文件，文件名和表名相同。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>表名.ibd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>MySQL8.0中不再单独提供<code v-pre>表名.frm</code>，而是合并在<code v-pre>表名.ibd</code>文件中。</p>
</blockquote>
<p><strong>③ 系统表空间与独立表空间的设置</strong></p>
<p>我们可以自己指定使用<code v-pre>系统表空间</code>还是<code v-pre>独立表空间</code>来存储数据，这个功能由启动参数<code v-pre>innodb_file_per_table</code>控制</p>
<div class="language-ini line-numbers-mode" data-ext="ini"><pre v-pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">server</span><span class="token punctuation">]</span></span> 
<span class="token key attr-name">innodb_file_per_table</span><span class="token punctuation">=</span><span class="token value attr-value">0 # 0：代表使用系统表空间； 1：代表使用独立表空间</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>④ 其他类型的表空间</strong></p>
<p>随着MySQL的发展，除了上述两种老牌表空间之外，现在还新提出了一些不同类型的表空间，比如通用表空间（general tablespace）、临时表空间（temporary tablespace）等。</p>
<h4 id="_2-1-2-myisam存储引擎模式" tabindex="-1"><a class="header-anchor" href="#_2-1-2-myisam存储引擎模式" aria-hidden="true">#</a> 2.1.2 MyISAM存储引擎模式</h4>
<p><strong>1.</strong> <strong>表结构</strong></p>
<p>在存储表结构方面， MyISAM 和 InnoDB 一样，也是在<code v-pre>数据目录</code>下对应的数据库子目录下创建了一个专门用于描述表结构的文件</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>表名.frm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2.</strong> <strong>表中数据和索引</strong></p>
<p>在MyISAM中的索引全部都是<code v-pre>二级索引</code>，该存储引擎的<code v-pre>数据和索引是分开存放</code>的。所以在文件系统中也是使用不同的文件来存储数据文件和索引文件，同时表数据都存放在对应的数据库子目录下。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>test.frm 存储表结构 #MySQL8.0 改为了 b.xxx.sdi
test.MYD 存储数据 (MYData) 
test.MYI 存储索引 (MYIndex
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312031906036.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


