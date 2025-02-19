<template><div><h1 id="mysql5-7和mysql8对比分析" tabindex="-1"><a class="header-anchor" href="#mysql5-7和mysql8对比分析" aria-hidden="true">#</a> MySQL5.7和MySQL8对比分析</h1>
<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2>
<p>大家好，我是Leo哥🫣🫣🫣，昨天有人问道：Leo哥，MySQL8安装咱也会了，绿色版，嘎嘎一顿操作，简单粗暴。能讲讲关于MySQL5.7和MySQL8之间的区别吗。于是就有了今天这篇文章。好了，话不多说让我们开始吧😎😎😎。</p>
<h2 id="_2-概览" tabindex="-1"><a class="header-anchor" href="#_2-概览" aria-hidden="true">#</a> 2.概览</h2>
<p>Oracle发布新版本的MySQL时，直接从5.7.x 跳到了 8.0，可谓是一个大的版本跳跃，当然也可以从侧面反映，这里面的功能会有不少的变化，新版本的MySQL增加了不少的亮点。</p>
<p>总体来说，各个业务表存储引擎为InnoDB的mysql 5.7在使用语法上和mysql 8.0差别不大，官方表示 MySQL 8 要比 MySQL 5.7 快 2 倍，还带来了大量的改进和更快的性能。</p>
<h2 id="_3-mysql8新增功能" tabindex="-1"><a class="header-anchor" href="#_3-mysql8新增功能" aria-hidden="true">#</a> 3.MySQl8新增功能</h2>
<p>下面我们先通过两种图来看一下关于MySQL8中<strong>性能升级(图一)<strong>和</strong>Nosql文档升级(图二)</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311161014703.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311161015134.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>性能： MySQL 8.0 在以下方面带来了更好的性能：读/写工作负载、IO 密集型工作负载、以及高竞争(”hot spot”热点竞争问题)工作负载。</li>
<li>NoSQL：MySQL 从 5.7 版本开始提供 NoSQL 存储功能，目前在 8.0 版本中这部分功能也得到了更大的改进。该项功能消除了对独立的 NoSQL 文档数据库的需求，而 MySQL 文档存储也为 schema-less 模式的 JSON 文档提供了多文档事务支持和完整的 ACID 合规性。</li>
<li>窗口函数(Window Functions)：从 MySQL 8.0 开始，新增了一个叫窗口函数的概念，它可以用来实现若干新的查询方式。窗口函数与 SUM()、COUNT() 这种集合函数类似，但它不会将多行查询结果合并为一行，而是将结果放回多行当中。即窗口函数不需要 GROUP BY。</li>
<li>隐藏索引：在 MySQL 8.0 中，索引可以被“隐藏”和“显示”。当对索引进行隐藏时，它不会被查询优化器所使用。我们可以使用这个特性用于性能调试，例如我们先隐藏一个索引，然后观察其对数据库的影响。如果数据库性能有所下降，说明这个索引是有用的，然后将其“恢复显示”即可；如果数据库性能看不出变化，说明这个索引是多余的，可以考虑删掉。</li>
<li>降序索引：MySQL 8.0 为索引提供按降序方式进行排序的支持，在这种索引中的值也会按降序的方式进行排序。</li>
<li>通用表表达式(Common Table Expressions CTE)：在复杂的查询中使用嵌入式表时，使用 CTE 使得查询语句更清晰。</li>
<li>UTF-8 编码：从 MySQL 8 开始，使用 utf8mb4 作为 MySQL 的默认字符集。</li>
<li>JSON：MySQL 8 大幅改进了对 JSON 的支持，添加了基于路径查询参数从 JSON 字段中抽取数据的 JSON_EXTRACT() 函数，以及用于将数据分别组合到 JSON 数组和对象中的 JSON_ARRAYAGG() 和 JSON_OBJECTAGG() 聚合函数。</li>
<li>可靠性：InnoDB 现在支持表 DDL 的原子性，也就是 InnoDB 表上的 DDL 也可以实现事务完整性，要么失败回滚，要么成功提交，不至于出现 DDL 时部分成功的问题，此外还支持 crash-safe 特性，元数据存储在单个事务数据字典中。</li>
<li>高可用性(High Availability)：InnoDB 集群为您的数据库提供集成的原生 HA 解决方案。</li>
</ol>
<h2 id="_4-细节处理" tabindex="-1"><a class="header-anchor" href="#_4-细节处理" aria-hidden="true">#</a> 4.细节处理</h2>
<h3 id="_4-1细节1" tabindex="-1"><a class="header-anchor" href="#_4-1细节1" aria-hidden="true">#</a> 4.1细节1：</h3>
<p>比如我们在MySQL 5.7版本中全面推行GTID，所以之前的create table xxx as select * from xx的使用模式就不奏效了，进而我们建议使用：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> xxx <span class="token operator">like</span> xxxxx<span class="token punctuation">;</span> 
 
<span class="token keyword">insert</span> <span class="token keyword">into</span> xxx <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> xxxxx<span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种使用模式，而MySQL8.0带来的很多特性是在体验和性能改造方面，原来不建议使用的模式竟然可以支持了，而很多业务侧是后知后觉，原本已经培养的习惯，让我们有些凌乱。</p>
<h3 id="_4-2细节2" tabindex="-1"><a class="header-anchor" href="#_4-2细节2" aria-hidden="true">#</a> 4.2细节2：</h3>
<p>在MySQL 5.7中字段名为rank是可以的，但是在8.0中因为有了窗口函数，字段名为rank就报错，顺着这个思路，其实我们一窥窗口函数。</p>
<h3 id="_4-3细节3" tabindex="-1"><a class="header-anchor" href="#_4-3细节3" aria-hidden="true">#</a> 4.3细节3：</h3>
<p>这里顺便吐槽下airflow的表结构配置</p>
<p>airflow的一个表结构在MySQL 5.7中如下：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> kube_resource_version 
<span class="token punctuation">(</span>one_row_id <span class="token keyword">BOOL</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">true</span><span class="token punctuation">,</span> resource_version <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
<span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>one_row_id<span class="token punctuation">)</span><span class="token punctuation">,</span> 
<span class="token keyword">CONSTRAINT</span> kube_resource_version_one_row_id <span class="token keyword">CHECK</span> <span class="token punctuation">(</span>one_row_id<span class="token punctuation">)</span><span class="token punctuation">,</span> 
<span class="token keyword">CHECK</span> <span class="token punctuation">(</span>one_row_id <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
Query OK<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token keyword">rows</span> affected <span class="token punctuation">(</span><span class="token number">0.06</span> sec<span class="token punctuation">)</span> 
在MySQL中其实会被默认转换为如下的表结构： 
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>kube_resource_version<span class="token punctuation">`</span></span> <span class="token punctuation">(</span> 
  <span class="token identifier"><span class="token punctuation">`</span>one_row_id<span class="token punctuation">`</span></span> <span class="token keyword">tinyint</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">'1'</span><span class="token punctuation">,</span> 
  <span class="token identifier"><span class="token punctuation">`</span>resource_version<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> 
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>one_row_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> 
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8<span class="token punctuation">;</span> 
<span class="token number">1.2</span><span class="token number">.3</span><span class="token number">.4</span><span class="token number">.5</span><span class="token number">.6</span><span class="token number">.7</span><span class="token number">.8</span><span class="token number">.9</span><span class="token number">.10</span><span class="token number">.11</span><span class="token number">.12</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果查看在线业务的实际数据如下：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> kube_resource_version<span class="token punctuation">;</span> 
<span class="token operator">+</span><span class="token comment">------------+------------------+ </span>
<span class="token operator">|</span> one_row_id <span class="token operator">|</span> resource_version <span class="token operator">|</span> 
<span class="token operator">+</span><span class="token comment">------------+------------------+ </span>
<span class="token operator">|</span>          <span class="token number">1</span> <span class="token operator">|</span>                  <span class="token operator">|</span> 
<span class="token operator">+</span><span class="token comment">------------+------------------+ </span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看起来这个boolean类型真是有些鸡肋，在数据库中已经默认使用tinyint(1)来间接转义了，但是实际上还是不对味。</p>
<p>带来的问题是在MySQL 5.7中可以成功创建，但是在8.0会报错：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> kube_resource_version <span class="token punctuation">(</span>one_row_id <span class="token keyword">BOOL</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">true</span><span class="token punctuation">,</span> resource_version <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>one_row_id<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">CONSTRAINT</span> kube_resource_version_one_row_id <span class="token keyword">CHECK</span> <span class="token punctuation">(</span>one_row_id<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">CHECK</span> <span class="token punctuation">(</span>one_row_id <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
ERROR <span class="token number">3812</span> <span class="token punctuation">(</span>HY000<span class="token punctuation">)</span>: An expression <span class="token keyword">of</span> non<span class="token operator">-</span><span class="token keyword">boolean</span> <span class="token keyword">type</span> specified <span class="token keyword">to</span> a <span class="token keyword">check</span> <span class="token keyword">constraint</span> <span class="token string">'kube_resource_version_one_row_id'</span><span class="token punctuation">.</span> 
<span class="token number">1.2</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而经过分析，其实8.0的报错提示更加合理，至少我觉得8.0对于数据层面的要求确实变高了。</p>
<h2 id="_5-其他差异" tabindex="-1"><a class="header-anchor" href="#_5-其他差异" aria-hidden="true">#</a> 5.其他差异</h2>
<h3 id="_5-1-int字段类型的差异" tabindex="-1"><a class="header-anchor" href="#_5-1-int字段类型的差异" aria-hidden="true">#</a> 5.1 int字段类型的差异</h3>
<p>比如下面的建表语句，在 5.7 能正常执行：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">CREATE</span> <span class="token constant">TABLE</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">t1</span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">(</span> 
<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">id</span><span class="token template-punctuation string">`</span></span> <span class="token function">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token constant">NOT</span> <span class="token constant">NULL</span> auto_increment<span class="token punctuation">,</span>
<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">a</span><span class="token template-punctuation string">`</span></span> <span class="token function">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token constant">DEFAULT</span> <span class="token constant">NULL</span><span class="token punctuation">,</span>
<span class="token constant">PRIMARY</span> <span class="token constant">KEY</span> <span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">id</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token constant">ENGINE</span><span class="token operator">=</span>InnoDB <span class="token constant">DEFAULT</span> <span class="token constant">CHARSET</span><span class="token operator">=</span>utf8mb4<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是在 8.0.17 开始后的版本，执行上面的建表语句，会有如下 warnings：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>Integer display width is deprecated and will be removed <span class="token keyword">in</span> a future release<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在上面的建表语句中，int(11) 中的 11 表示最大显示宽度，从 MySQL 8.0.17 开始，int 类型就不推荐使用显示宽度这个属性了。因此 8.0 建议使用单独的 int 来定义整数数据类型，如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">CREATE</span> <span class="token constant">TABLE</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">t1</span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">(</span> 
<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">id</span><span class="token template-punctuation string">`</span></span> int <span class="token constant">NOT</span> <span class="token constant">NULL</span> auto_increment<span class="token punctuation">,</span>
<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">a</span><span class="token template-punctuation string">`</span></span> int <span class="token constant">DEFAULT</span> <span class="token constant">NULL</span><span class="token punctuation">,</span>
<span class="token constant">PRIMARY</span> <span class="token constant">KEY</span> <span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">id</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token constant">ENGINE</span><span class="token operator">=</span>InnoDB <span class="token constant">DEFAULT</span> <span class="token constant">CHARSET</span><span class="token operator">=</span>utf8mb4<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-创建用户和赋权差异" tabindex="-1"><a class="header-anchor" href="#_5-2-创建用户和赋权差异" aria-hidden="true">#</a> 5.2 创建用户和赋权差异</h3>
<p>MySQL 5.7，可以直接使用 grant 命令，用户和赋权都能完成。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>grant select on test<span class="token punctuation">.</span><span class="token operator">*</span> to <span class="token string">'test_user'</span>@<span class="token string">'127.0.0.1'</span> identified by <span class="token string">'ddafsduGdsag'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>8.0 版本下不 create user 的情况下执行 grant 会报如下错误：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">ERROR</span> <span class="token number">1064</span> <span class="token punctuation">(</span><span class="token number">42000</span><span class="token punctuation">)</span><span class="token operator">:</span> You have an error <span class="token keyword">in</span> your <span class="token constant">SQL</span> syntax<span class="token punctuation">;</span> check the manual that corresponds to your MySQL server version <span class="token keyword">for</span> the right syntax to use near <span class="token string">'identified by '</span>ddafsduGdsag<span class="token string">''</span> at line <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因此 MySQL 8.0 如果需要创建用户并赋权，必须要先 create user，再执行 grant 命令，操作如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>create user <span class="token string">'test_user'</span>@<span class="token string">'127.0.0.1'</span> identified <span class="token keyword">with</span> mysql_native_password by <span class="token string">'ddafsduGdsag'</span><span class="token punctuation">;</span> 
grant select on test<span class="token punctuation">.</span><span class="token operator">*</span> to <span class="token string">'test_user'</span>@<span class="token string">'127.0.0.1'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-mysql下载" tabindex="-1"><a class="header-anchor" href="#_6-mysql下载" aria-hidden="true">#</a> 6.MySQL下载</h2>
<p>最后附上MySQL5.7版本以及MySQL8版本的下载，大家按需下载吧。</p>
<p><strong>MySQL5.7：</strong> <a href="https://cdn.mysql.com/archives/mysql-installer/mysql-installer-community-5.7.26.0.msi" target="_blank" rel="noopener noreferrer">5.7<ExternalLinkIcon/></a></p>
<p><strong>MySQL8：</strong> <a href="https://cdn.mysql.com//Downloads/MySQLInstaller/mysql-installer-community-8.0.25.0.msi" target="_blank" rel="noopener noreferrer">8<ExternalLinkIcon/></a></p>
<h2 id="_7-参考文献" tabindex="-1"><a class="header-anchor" href="#_7-参考文献" aria-hidden="true">#</a> 7.参考文献</h2>
<ul>
<li>
<p><a href="https://www.mysql.com/cn/why-mysql/" target="_blank" rel="noopener noreferrer">https://www.mysql.com/cn/why-mysql/<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://www.jianshu.com/p/bc13c572c517" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/bc13c572c517<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://dev.mysql.com/doc/refman/8.0/en/nested-loop-joins.html" target="_blank" rel="noopener noreferrer">https://dev.mysql.com/doc/refman/8.0/en/nested-loop-joins.html<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://zhuanlan.zhihu.com/p/58706113" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/58706113<ExternalLinkIcon/></a></p>
</li>
</ul>
<h2 id="_8-总结" tabindex="-1"><a class="header-anchor" href="#_8-总结" aria-hidden="true">#</a> 8.总结</h2>
<p>以上便是本文的全部内容，本人才疏学浅，文章有什么错误的地方，欢迎大佬们批评指正！我是<strong>Leo</strong>，一个在互联网行业的小白，立志成为更好的自己。</p>
<p>如果你想了解更多关于<strong>Leo</strong>，可以关注公众号-程序员Leo，后面文章会首先同步至公众号。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311161025910.png" alt="ToLeoJavaer公众号 (微信搜索程序员Leo)" tabindex="0" loading="lazy"><figcaption>ToLeoJavaer公众号 (微信搜索程序员Leo)</figcaption></figure>
</div></template>


