<template><div><div class="hint-container tip">
<p class="hint-container-title">友情提示</p>
<p><strong>转载须知</strong>: 以下所有文章整理于B站宋红康老师的《MySQL数据库入门到大牛》。<a href="https://www.bilibili.com/video/BV1iq4y1u7vj?p=1&amp;vd_source=cea816a08805c218ac4390ae9b61ae31" target="_blank" rel="noopener noreferrer">MySQL</a></p>
</div>
<h2 id="_1-查看存储引擎" tabindex="-1"><a class="header-anchor" href="#_1-查看存储引擎"><span>1. 查看存储引擎</span></a></h2>
<ul>
<li>查看mysql提供什么存储引擎</li>
</ul>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>show engines;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220615223831995.png" alt="image-20220615223831995" tabindex="0" loading="lazy"><figcaption>image-20220615223831995</figcaption></figure>
<h2 id="_2-设置系统默认的存储引擎" tabindex="-1"><a class="header-anchor" href="#_2-设置系统默认的存储引擎"><span>2. 设置系统默认的存储引擎</span></a></h2>
<ul>
<li>查看默认的存储引擎</li>
</ul>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>show variables like '%storage_engine%';</span></span>
<span class="line"><span>#或</span></span>
<span class="line"><span>SELECT @@default_storage_engine;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220615224249491.png" alt="image-20220615224249491" style="zoom:60%;" />
<ul>
<li>修改默认的存储引擎</li>
</ul>
<p>如果在创建表的语句中没有显式指定表的存储引擎的话，那就会默认使用 InnoDB 作为表的存储引擎。 如果我们想改变表的默认存储引擎的话，可以这样写启动服务器的命令行：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SET DEFAULT_STORAGE_ENGINE=MyISAM;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>或者修改 my.cnf 文件：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>default-storage-engine=MyISAM</span></span>
<span class="line"><span># 重启服务</span></span>
<span class="line"><span>systemctl restart mysqld.service</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-设置表的存储引擎" tabindex="-1"><a class="header-anchor" href="#_3-设置表的存储引擎"><span>3. 设置表的存储引擎</span></a></h2>
<p>存储引擎是负责对表中的数据进行提取和写入工作的，我们可以为 不同的表设置不同的存储引擎 ，也就是 说不同的表可以有不同的物理存储结构，不同的提取和写入方式。</p>
<h3 id="_3-1-创建表时指定存储引擎" tabindex="-1"><a class="header-anchor" href="#_3-1-创建表时指定存储引擎"><span>3.1 创建表时指定存储引擎</span></a></h3>
<p>我们之前创建表的语句都没有指定表的存储引擎，那就会使用默认的存储引擎 InnoDB 。如果我们想显 式的指定一下表的存储引擎，那可以这么写：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>CREATE TABLE 表名(</span></span>
<span class="line"><span>建表语句;</span></span>
<span class="line"><span>) ENGINE = 存储引擎名称;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-修改表的存储引擎" tabindex="-1"><a class="header-anchor" href="#_3-2-修改表的存储引擎"><span>3.2 修改表的存储引擎</span></a></h3>
<p>如果表已经建好了，我们也可以使用下边这个语句来修改表的存储引擎：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ALTER TABLE 表名 ENGINE = 存储引擎名称;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>比如我们修改一下 engine_demo_table 表的存储引擎：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>mysql> ALTER TABLE engine_demo_table ENGINE = InnoDB;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这时我们再查看一下 engine_demo_table 的表结构：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>mysql> SHOW CREATE TABLE engine_demo_table\G</span></span>
<span class="line"><span>*************************** 1. row ***************************</span></span>
<span class="line"><span>Table: engine_demo_table</span></span>
<span class="line"><span>Create Table: CREATE TABLE `engine_demo_table` (</span></span>
<span class="line"><span>`i` int(11) DEFAULT NULL</span></span>
<span class="line"><span>) ENGINE=InnoDB DEFAULT CHARSET=utf8</span></span>
<span class="line"><span>1 row in set (0.01 sec)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-引擎介绍" tabindex="-1"><a class="header-anchor" href="#_4-引擎介绍"><span>4. 引擎介绍</span></a></h2>
<h3 id="_4-1-innodb-引擎-具备外键支持功能的事务存储引擎" tabindex="-1"><a class="header-anchor" href="#_4-1-innodb-引擎-具备外键支持功能的事务存储引擎"><span>4.1 InnoDB 引擎：具备外键支持功能的事务存储引擎</span></a></h3>
<ul>
<li>MySQL从3.23.34a开始就包含InnoDB存储引擎。 <code v-pre>大于等于5.5之后，默认采用InnoDB引擎</code> 。</li>
<li>InnoDB是MySQL的 默认事务型引擎 ，它被设计用来处理大量的短期(short-lived)事务。可以确保事务的完整提交(Commit)和回滚(Rollback)。</li>
<li>除了增加和查询外，还需要更新、删除操作，那么，应优先选择InnoDB存储引擎。 除非有非常特别的原因需要使用其他的存储引擎，否则应该优先考虑InnoDB引擎。</li>
<li>数据文件结构：（在《第02章_MySQL数据目录》章节已讲）
<ul>
<li>表名.frm 存储表结构（MySQL8.0时，合并在表名.ibd中）</li>
<li>表名.ibd 存储数据和索引</li>
</ul>
</li>
<li>InnoDB是 为处理巨大数据量的最大性能设计 。
<ul>
<li>在以前的版本中，字典数据以元数据文件、非事务表等来存储。现在这些元数据文件被删除 了。比如： .frm ， .par ， .trn ， .isl ， .db.opt 等都在MySQL8.0中不存在了。</li>
</ul>
</li>
<li>对比MyISAM的存储引擎， InnoDB写的处理效率差一些 ，并且会占用更多的磁盘空间以保存数据和索引。</li>
<li>MyISAM只缓存索引，不缓存真实数据；InnoDB不仅缓存索引还要缓存真实数据， 对内存要求较 高 ，而且内存大小对性能有决定性的影响。</li>
</ul>
<h3 id="_4-2-myisam-引擎-主要的非事务处理存储引擎" tabindex="-1"><a class="header-anchor" href="#_4-2-myisam-引擎-主要的非事务处理存储引擎"><span>4.2 MyISAM 引擎：主要的非事务处理存储引擎</span></a></h3>
<ul>
<li>MyISAM提供了大量的特性，包括全文索引、压缩、空间函数(GIS)等，但MyISAM不支持事务、行级 锁、外键 ，有一个毫无疑问的缺陷就是崩溃后无法安全恢复 。</li>
<li>5.5之前默认的存储引擎</li>
<li>优势是访问的速度快 ，对事务完整性没有要求或者以SELECT、INSERT为主的应用</li>
<li>针对数据统计有额外的常数存储。故而 count(*) 的查询效率很高 数据文件结构：（在《第02章_MySQL数据目录》章节已讲）
<ul>
<li>表名.frm 存储表结构</li>
<li>表名.MYD 存储数据 (MYData)</li>
<li>表名.MYI 存储索引 (MYIndex)</li>
</ul>
</li>
<li>应用场景：只读应用或者以读为主的业务</li>
</ul>
<h3 id="_4-3-archive-引擎-用于数据存档" tabindex="-1"><a class="header-anchor" href="#_4-3-archive-引擎-用于数据存档"><span>4.3 Archive 引擎：用于数据存档</span></a></h3>
<ul>
<li>下表展示了ARCHIVE 存储引擎功能</li>
</ul>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220616124743732.png" alt="image-20220616124743732" style="float:left;" />
<h3 id="_4-4-blackhole-引擎-丢弃写操作-读操作会返回空内容" tabindex="-1"><a class="header-anchor" href="#_4-4-blackhole-引擎-丢弃写操作-读操作会返回空内容"><span>4.4 Blackhole 引擎：丢弃写操作，读操作会返回空内容</span></a></h3>
<h3 id="_4-5-csv-引擎-存储数据时-以逗号分隔各个数据项" tabindex="-1"><a class="header-anchor" href="#_4-5-csv-引擎-存储数据时-以逗号分隔各个数据项"><span>4.5 CSV 引擎：存储数据时，以逗号分隔各个数据项</span></a></h3>
<p>使用案例如下</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>mysql> CREATE TABLE test (i INT NOT NULL, c CHAR(10) NOT NULL) ENGINE = CSV;</span></span>
<span class="line"><span>Query OK, 0 rows affected (0.06 sec)</span></span>
<span class="line"><span>mysql> INSERT INTO test VALUES(1,'record one'),(2,'record two');</span></span>
<span class="line"><span>Query OK, 2 rows affected (0.05 sec)</span></span>
<span class="line"><span>Records: 2 Duplicates: 0 Warnings: 0</span></span>
<span class="line"><span>mysql> SELECT * FROM test;</span></span>
<span class="line"><span>+---+------------+</span></span>
<span class="line"><span>| i |      c     |</span></span>
<span class="line"><span>+---+------------+</span></span>
<span class="line"><span>| 1 | record one |</span></span>
<span class="line"><span>| 2 | record two |</span></span>
<span class="line"><span>+---+------------+</span></span>
<span class="line"><span>2 rows in set (0.00 sec)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建CSV表还会创建相应的元文件 ，用于 存储表的状态 和 表中存在的行数 。此文件的名称与表的名称相 同，后缀为 CSM 。如图所示</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220616125342599.png" alt="image-20220616125342599" tabindex="0" loading="lazy"><figcaption>image-20220616125342599</figcaption></figure>
<p>如果检查 test.CSV 通过执行上述语句创建的数据库目录中的文件，其内容使用Notepad++打开如下：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>"1","record one"</span></span>
<span class="line"><span>"2","record two"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>这种格式可以被 Microsoft Excel 等电子表格应用程序读取，甚至写入。使用Microsoft Excel打开如图所示</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220616125448555.png" alt="image-20220616125448555" tabindex="0" loading="lazy"><figcaption>image-20220616125448555</figcaption></figure>
<h3 id="_4-6-memory-引擎-置于内存的表" tabindex="-1"><a class="header-anchor" href="#_4-6-memory-引擎-置于内存的表"><span>4.6 Memory 引擎：置于内存的表</span></a></h3>
<p><strong>概述：</strong></p>
<p>Memory采用的逻辑介质是内存 ，响应速度很快 ，但是当mysqld守护进程崩溃的时候数据会丢失 。另外，要求存储的数据是数据长度不变的格式，比如，Blob和Text类型的数据不可用(长度不固定的)。</p>
<p><strong>主要特征：</strong></p>
<ul>
<li>Memory同时 支持哈希（HASH）索引 和 B+树索引 。</li>
<li>Memory表至少比MyISAM表要快一个数量级 。</li>
<li>MEMORY 表的大小是受到限制 的。表的大小主要取决于两个参数，分别是 max_rows 和 max_heap_table_size 。其中，max_rows可以在创建表时指定；max_heap_table_size的大小默 认为16MB，可以按需要进行扩大。</li>
<li>数据文件与索引文件分开存储。</li>
<li>缺点：其数据易丢失，生命周期短。基于这个缺陷，选择MEMORY存储引擎时需要特别小心。</li>
</ul>
<p><strong>使用Memory存储引擎的场景：</strong></p>
<ol>
<li>目标数据比较小 ，而且非常频繁的进行访问 ，在内存中存放数据，如果太大的数据会造成内存溢出 。可以通过参数 max_heap_table_size 控制Memory表的大小，限制Memory表的最大的大小。</li>
<li>如果数据是临时的 ，而且必须立即可用得到，那么就可以放在内存中。</li>
<li>存储在Memory表中的数据如果突然间丢失的话也没有太大的关系 。</li>
</ol>
<h3 id="_4-7-federated-引擎-访问远程表" tabindex="-1"><a class="header-anchor" href="#_4-7-federated-引擎-访问远程表"><span>4.7 Federated 引擎：访问远程表</span></a></h3>
<p><strong>Federated引擎是访问其他MySQL服务器的一个 代理 ，尽管该引擎看起来提供了一种很好的 跨服务 器的灵活性 ，但也经常带来问题，因此 默认是禁用的 。</strong></p>
<h3 id="_4-8-merge引擎-管理多个myisam表构成的表集合" tabindex="-1"><a class="header-anchor" href="#_4-8-merge引擎-管理多个myisam表构成的表集合"><span>4.8 Merge引擎：管理多个MyISAM表构成的表集合</span></a></h3>
<h3 id="_4-9-ndb引擎-mysql集群专用存储引擎" tabindex="-1"><a class="header-anchor" href="#_4-9-ndb引擎-mysql集群专用存储引擎"><span>4.9 NDB引擎：MySQL集群专用存储引擎</span></a></h3>
<p>也叫做 NDB Cluster 存储引擎，主要用于 MySQL Cluster 分布式集群 环境，类似于 Oracle 的 RAC 集 群。</p>
<h3 id="_4-10-引擎对比" tabindex="-1"><a class="header-anchor" href="#_4-10-引擎对比"><span>4.10 引擎对比</span></a></h3>
<p>MySQL中同一个数据库，不同的表可以选择不同的存储引擎。如下表对常用存储引擎做出了对比。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220616125928861.png" alt="image-20220616125928861" tabindex="0" loading="lazy"><figcaption>image-20220616125928861</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220616125945304.png" alt="image-20220616125945304" tabindex="0" loading="lazy"><figcaption>image-20220616125945304</figcaption></figure>
<p>其实这些东西大家没必要立即就给记住，列出来的目的就是想让大家明白不同的存储引擎支持不同的功能。</p>
<p>其实我们最常用的就是 InnoDB 和 MyISAM ，有时会提一下 Memory 。其中 InnoDB 是 MySQL 默认的存储引擎。</p>
<h2 id="_5-myisam和innodb" tabindex="-1"><a class="header-anchor" href="#_5-myisam和innodb"><span>5. MyISAM和InnoDB</span></a></h2>
<p>很多人对 InnoDB 和 MyISAM 的取舍存在疑问，到底选择哪个比较好呢？</p>
<p>MySQL5.5之前的默认存储引擎是MyISAM，5.5之后改为了InnoDB。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312031906036.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


