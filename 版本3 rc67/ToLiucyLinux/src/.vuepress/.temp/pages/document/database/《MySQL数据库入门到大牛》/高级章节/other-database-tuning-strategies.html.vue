<template><div><div class="hint-container tip">
<p class="hint-container-title">友情提示</p>
<p><strong>转载须知</strong>: 以下所有文章整理于B站宋红康老师的《MySQL数据库入门到大牛》。<a href="https://www.bilibili.com/video/BV1iq4y1u7vj?p=1&amp;vd_source=cea816a08805c218ac4390ae9b61ae31" target="_blank" rel="noopener noreferrer">MySQL</a></p>
</div>
<h2 id="_1-数据库调优的措施" tabindex="-1"><a class="header-anchor" href="#_1-数据库调优的措施"><span>1. 数据库调优的措施</span></a></h2>
<h3 id="_1-1-调优的目标" tabindex="-1"><a class="header-anchor" href="#_1-1-调优的目标"><span>1.1 调优的目标</span></a></h3>
<ul>
<li>尽可能节省系统资源 ，以便系统可以提供更大负荷的服务。（吞吐量更大）</li>
<li>合理的结构设计和参数调整，以提高用户操作响应的速度 。（响应速度更快）</li>
<li>减少系统的瓶颈，提高MySQL数据库整体的性能。</li>
</ul>
<h3 id="_1-2-如何定位调优问题" tabindex="-1"><a class="header-anchor" href="#_1-2-如何定位调优问题"><span>1.2 如何定位调优问题</span></a></h3>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707200915836.png" alt="image-20220707200915836" style="float:left;" />
<p>如何确定呢？一般情况下，有如下几种方式：</p>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707201133424.png" alt="image-20220707201133424" style="float:left;" />
<h3 id="_1-3-调优的维度和步骤" tabindex="-1"><a class="header-anchor" href="#_1-3-调优的维度和步骤"><span>1.3 调优的维度和步骤</span></a></h3>
<p>我们需要调优的对象是整个数据库管理系统，它不仅包括 SQL 查询，还包括数据库的部署配置、架构 等。从这个角度来说，我们思考的维度就不仅仅局限在 SQL 优化上了。通过如下的步骤我们进行梳理：</p>
<h4 id="第1步-选择适合的-dbms" tabindex="-1"><a class="header-anchor" href="#第1步-选择适合的-dbms"><span>第1步：选择适合的 DBMS</span></a></h4>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707201443229.png" alt="image-20220707201443229" style="float:left;" />
<h4 id="第2步-优化表设计" tabindex="-1"><a class="header-anchor" href="#第2步-优化表设计"><span>第2步：优化表设计</span></a></h4>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707201617799.png" alt="image-20220707201617799" style="float:left;" />
<h4 id="第3步-优化逻辑查询" tabindex="-1"><a class="header-anchor" href="#第3步-优化逻辑查询"><span>第3步：优化逻辑查询</span></a></h4>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707202059972.png" alt="image-20220707202059972" style="float:left;" />
<h4 id="第4步-优化物理查询" tabindex="-1"><a class="header-anchor" href="#第4步-优化物理查询"><span>第4步：优化物理查询</span></a></h4>
<p>物理查询优化是在确定了逻辑查询优化之后，采用物理优化技术（比如索引等），通过计算代价模型对 各种可能的访问路径进行估算，从而找到执行方式中代价最小的作为执行计划。<strong>在这个部分中，我们需要掌握的重点是对索引的创建和使用。</strong></p>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707202156660.png" alt="image-20220707202156660" style="float:left;" />
<h4 id="第5步-使用-redis-或-memcached-作为缓存" tabindex="-1"><a class="header-anchor" href="#第5步-使用-redis-或-memcached-作为缓存"><span>第5步：使用 Redis 或 Memcached 作为缓存</span></a></h4>
<p>除了可以对 SQL 本身进行优化以外，我们还可以请外援提升查询的效率。</p>
<p>因为数据都是存放到数据库中，我们需要从数据库层中取出数据放到内存中进行业务逻辑的操作，当用 户量增大的时候，如果频繁地进行数据查询，会消耗数据库的很多资源。如果我们将常用的数据直接放 到内存中，就会大幅提升查询的效率。</p>
<p>键值存储数据库可以帮我们解决这个问题。</p>
<p>常用的键值存储数据库有 Redis 和 Memcached，它们都可以将数据存放到内存中。</p>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707202436467.png" alt="image-20220707202436467" style="float:left;" />
<h4 id="第6步-库级优化" tabindex="-1"><a class="header-anchor" href="#第6步-库级优化"><span>第6步：库级优化</span></a></h4>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707202555506.png" alt="image-20220707202555506" style="float:left;" />
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707202732911.png" alt="image-20220707202732911" style="float:left;" />
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707203538155.png" alt="image-20220707203538155" style="float:left;" />
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707203607993.png" alt="image-20220707203607993" style="float:left;" />
<blockquote>
<p>但需要注意的是，分拆在提升数据库性能的同时，也会增加维护和使用成本。</p>
</blockquote>
<h2 id="_2-优化mysql服务器" tabindex="-1"><a class="header-anchor" href="#_2-优化mysql服务器"><span>2. 优化MySQL服务器</span></a></h2>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707203818987.png" alt="image-20220707203818987" style="float:left;" />
<h3 id="_2-1-优化服务器硬件" tabindex="-1"><a class="header-anchor" href="#_2-1-优化服务器硬件"><span>2.1 优化服务器硬件</span></a></h3>
<p>服务器的硬件性能直接决定着MySQL数据库的性能。硬件的性能瓶颈直接决定MySQL数据库的运行速度 和效率。针对性能瓶颈提高硬件配置，可以提高MySQL数据库查询、更新的速度。</p>
<p>（1） <code v-pre>配置较大的内存</code> 。足够大的显存是提高MySQL数据库性能的方法之一。内存的速度比磁盘I/O快得多，可以通过增加系统的<code v-pre>缓冲区容量</code>使数据在内存中停留的时间更长，以<code v-pre>减少磁盘I/O</code>。</p>
<p>（2） <code v-pre>配置高速磁盘系统 </code>，以减少读盘的等待时间，提高响应速度。磁盘的I/O能力，也就是它的寻道能力，目前的SCSI高速旋转的是7200转/分钟，这样的速度，一旦访问的用户量上去，磁盘的压力就会过大，如果是每天的网站pv (page view) 在150w，这样的一般的配置就无法满足这样的需求了。现在SSD盛行，在SSD上随机访问和顺序访问性能差不多，使用SSD可以减少随机IO带来的性能损耗。</p>
<p>（3） <code v-pre>合理分布磁盘I/O</code>，把磁盘I/O分散在多个设备，以减少资源竞争，提高冰箱操作能力。</p>
<p>（4） <code v-pre>配置多处理器</code>, MySQL是多线程的数据库，多处理器可同时执行多个线程。</p>
<h3 id="_2-2-优化mysql的参数" tabindex="-1"><a class="header-anchor" href="#_2-2-优化mysql的参数"><span>2.2 优化MySQL的参数</span></a></h3>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707204403406.png" alt="image-20220707204403406" style="float:left;" />
<ul>
<li>
<p>innodb_buffer_pool_size ：这个参数是Mysql数据库最重要的参数之一，表示InnoDB类型的 表 和索引的最大缓存 。它不仅仅缓存 索引数据 ，还会缓存 表的数据 。这个值越大，查询的速度就会越 快。但是这个值太大会影响操作系统的性能。</p>
</li>
<li>
<p>key_buffer_size ：表示 索引缓冲区的大小 。索引缓冲区是所有的 线程共享 。增加索引缓冲区可 以得到更好处理的索引（对所有读和多重写）。当然，这个值不是越大越好，它的大小取决于内存 的大小。如果这个值太大，就会导致操作系统频繁换页，也会降低系统性能。对于内存在 4GB 左右 的服务器该参数可设置为 256M 或 384M 。</p>
</li>
<li>
<p>table_cache ：表示 同时打开的表的个数 。这个值越大，能够同时打开的表的个数越多。物理内 存越大，设置就越大。默认为2402，调到512-1024最佳。这个值不是越大越好，因为同时打开的表 太多会影响操作系统的性能。</p>
</li>
<li>
<p>query_cache_size ：表示 查询缓冲区的大小 。可以通过在MySQL控制台观察，如果 Qcache_lowmem_prunes的值非常大，则表明经常出现缓冲不够的情况，就要增加Query_cache_size 的值；如果Qcache_hits的值非常大，则表明查询缓冲使用非常频繁，如果该值较小反而会影响效 率，那么可以考虑不用查询缓存；Qcache_free_blocks，如果该值非常大，则表明缓冲区中碎片很 多。MySQL8.0之后失效。该参数需要和query_cache_type配合使用。</p>
</li>
<li>
<p>query_cache_type 的值是0时，所有的查询都不使用查询缓存区。但是query_cache_type=0并不 会导致MySQL释放query_cache_size所配置的缓存区内存。</p>
<ul>
<li>当query_cache_type=1时，所有的查询都将使用查询缓存区，除非在查询语句中指定 SQL_NO_CACHE ，如SELECT SQL_NO_CACHE * FROM tbl_name。</li>
<li>当query_cache_type=2时，只有在查询语句中使用 SQL_CACHE 关键字，查询才会使用查询缓 存区。使用查询缓存区可以提高查询的速度，这种方式只适用于修改操作少且经常执行相同的 查询操作的情况。</li>
</ul>
</li>
<li>
<p>sort_buffer_size ：表示每个 需要进行排序的线程分配的缓冲区的大小 。增加这个参数的值可以 提高 ORDER BY 或 GROUP BY 操作的速度。默认数值是2 097 144字节（约2MB）。对于内存在4GB 左右的服务器推荐设置为6-8M，如果有100个连接，那么实际分配的总共排序缓冲区大小为100 × 6 ＝ 600MB。</p>
</li>
<li>
<p>join_buffer_size = 8M ：表示 联合查询操作所能使用的缓冲区大小 ，和sort_buffer_size一样， 该参数对应的分配内存也是每个连接独享。</p>
</li>
<li>
<p>read_buffer_size ：表示 每个线程连续扫描时为扫描的每个表分配的缓冲区的大小（字节） 。当线 程从表中连续读取记录时需要用到这个缓冲区。SET SESSION read_buffer_size=n可以临时设置该参 数的值。默认为64K，可以设置为4M。</p>
</li>
<li>
<p>innodb_flush_log_at_trx_commit ：表示 何时将缓冲区的数据写入日志文件 ，并且将日志文件 写入磁盘中。该参数对于innoDB引擎非常重要。该参数有3个值，分别为0、1和2。该参数的默认值 为1。</p>
<ul>
<li>值为 0 时，表示 每秒1次 的频率将数据写入日志文件并将日志文件写入磁盘。每个事务的 commit并不会触发前面的任何操作。该模式速度最快，但不太安全，mysqld进程的崩溃会导 致上一秒钟所有事务数据的丢失。</li>
<li>值为 1 时，表示 每次提交事务时 将数据写入日志文件并将日志文件写入磁盘进行同步。该模 式是最安全的，但也是最慢的一种方式。因为每次事务提交或事务外的指令都需要把日志写入 （flush）硬盘。</li>
<li>值为 2 时，表示 每次提交事务时 将数据写入日志文件， 每隔1秒 将日志文件写入磁盘。该模 式速度较快，也比0安全，只有在操作系统崩溃或者系统断电的情况下，上一秒钟所有事务数 据才可能丢失。</li>
</ul>
</li>
<li>
<p>innodb_log_buffer_size ：这是 InnoDB 存储引擎的 事务日志所使用的缓冲区 。为了提高性能， 也是先将信息写入 Innodb Log Buffer 中，当满足 innodb_flush_log_trx_commit 参数所设置的相应条 件（或者日志缓冲区写满）之后，才会将日志写到文件（或者同步到磁盘）中。</p>
</li>
<li>
<p>max_connections ：表示 允许连接到MySQL数据库的最大数量 ，默认值是 151 。如果状态变量 connection_errors_max_connections 不为零，并且一直增长，则说明不断有连接请求因数据库连接 数已达到允许最大值而失败，这是可以考虑增大max_connections 的值。在Linux 平台下，性能好的 服务器，支持 500-1000 个连接不是难事，需要根据服务器性能进行评估设定。这个连接数 不是越大 越好 ，因为这些连接会浪费内存的资源。过多的连接可能会导致MySQL服务器僵死。</p>
</li>
<li>
<p>back_log ：用于 控制MySQL监听TCP端口时设置的积压请求栈大小 。如果MySql的连接数达到 max_connections时，新来的请求将会被存在堆栈中，以等待某一连接释放资源，该堆栈的数量即 back_log，如果等待连接的数量超过back_log，将不被授予连接资源，将会报错。5.6.6 版本之前默 认值为 50 ， 之后的版本默认为 50 + （max_connections / 5）， 对于Linux系统推荐设置为小于512 的整数，但最大不超过900。</p>
<p>如果需要数据库在较短的时间内处理大量连接请求， 可以考虑适当增大back_log 的值。</p>
</li>
<li>
<p>thread_cache_size ： 线程池缓存线程数量的大小 ，当客户端断开连接后将当前线程缓存起来， 当在接到新的连接请求时快速响应无需创建新的线程 。这尤其对那些使用短连接的应用程序来说可 以极大的提高创建连接的效率。那么为了提高性能可以增大该参数的值。默认为60，可以设置为 120。</p>
<p>可以通过如下几个MySQL状态值来适当调整线程池的大小：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>mysql> show global status like 'Thread%';</span></span>
<span class="line"><span>+-------------------+-------+</span></span>
<span class="line"><span>| Variable_name | Value |</span></span>
<span class="line"><span>+-------------------+-------+</span></span>
<span class="line"><span>| Threads_cached | 2 |</span></span>
<span class="line"><span>| Threads_connected | 1 |</span></span>
<span class="line"><span>| Threads_created | 3 |</span></span>
<span class="line"><span>| Threads_running | 2 |</span></span>
<span class="line"><span>+-------------------+-------+</span></span>
<span class="line"><span>4 rows in set (0.01 sec)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 Threads_cached 越来越少，但 Threads_connected 始终不降，且 Threads_created 持续升高，可 适当增加 thread_cache_size 的大小。</p>
</li>
<li>
<p>wait_timeout ：指定 一个请求的最大连接时间 ，对于4GB左右内存的服务器可以设置为5-10。</p>
</li>
<li>
<p>interactive_timeout ：表示服务器在关闭连接前等待行动的秒数。</p>
</li>
</ul>
<p>这里给出一份my.cnf的参考配置：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>mysqld]</span></span>
<span class="line"><span>port = 3306 </span></span>
<span class="line"><span>serverid = 1 </span></span>
<span class="line"><span>socket = /tmp/mysql.sock </span></span>
<span class="line"><span>skip-locking #避免MySQL的外部锁定，减少出错几率增强稳定性。 </span></span>
<span class="line"><span>skip-name-resolve #禁止MySQL对外部连接进行DNS解析，使用这一选项可以消除MySQL进行DNS解析的时间。但需要注意，如果开启该选项，则所有远程主机连接授权都要使用IP地址方式，否则MySQL将无法正常处理连接请求！ </span></span>
<span class="line"><span>back_log = 384</span></span>
<span class="line"><span>key_buffer_size = 256M </span></span>
<span class="line"><span>max_allowed_packet = 4M </span></span>
<span class="line"><span>thread_stack = 256K</span></span>
<span class="line"><span>table_cache = 128K </span></span>
<span class="line"><span>sort_buffer_size = 6M </span></span>
<span class="line"><span>read_buffer_size = 4M</span></span>
<span class="line"><span>read_rnd_buffer_size=16M </span></span>
<span class="line"><span>join_buffer_size = 8M </span></span>
<span class="line"><span>myisam_sort_buffer_size =64M </span></span>
<span class="line"><span>table_cache = 512 </span></span>
<span class="line"><span>thread_cache_size = 64 </span></span>
<span class="line"><span>query_cache_size = 64M</span></span>
<span class="line"><span>tmp_table_size = 256M </span></span>
<span class="line"><span>max_connections = 768 </span></span>
<span class="line"><span>max_connect_errors = 10000000</span></span>
<span class="line"><span>wait_timeout = 10 </span></span>
<span class="line"><span>thread_concurrency = 8 #该参数取值为服务器逻辑CPU数量*2，在本例中，服务器有2颗物理CPU，而每颗物理CPU又支持H.T超线程，所以实际取值为4*2=8</span></span>
<span class="line"><span>skip-networking #开启该选项可以彻底关闭MySQL的TCP/IP连接方式，如果WEB服务器是以远程连接的方式访问MySQL数据库服务器则不要开启该选项！否则将无法正常连接！ </span></span>
<span class="line"><span>table_cache=1024</span></span>
<span class="line"><span>innodb_additional_mem_pool_size=4M #默认为2M </span></span>
<span class="line"><span>innodb_flush_log_at_trx_commit=1</span></span>
<span class="line"><span>innodb_log_buffer_size=2M #默认为1M </span></span>
<span class="line"><span>innodb_thread_concurrency=8 #你的服务器CPU有几个就设置为几。建议用默认一般为8 </span></span>
<span class="line"><span>tmp_table_size=64M #默认为16M，调到64-256最挂</span></span>
<span class="line"><span>thread_cache_size=120 </span></span>
<span class="line"><span>query_cache_size=32M</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很多情况还需要具体情况具体分析！</p>
<p><strong>举例：</strong></p>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707210351452.png" alt="image-20220707210351452" style="float:left;" />
<p><strong>(1) 调整系统参数 InnoDB_flush_log_at_trx_commit</strong></p>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707210447501.png" alt="image-20220707210447501" style="float:left;" />
<p><strong>(2)  调整系统参数 InnoDB_buffer_pool_size</strong></p>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707210555848.png" alt="image-20220707210555848" style="float:left;" />
<p><strong>(3) 调整系统参数 InnoDB_buffer_pool_instances</strong></p>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707210720394.png" alt="image-20220707210720394" style="float:left;" />
<h2 id="_3-优化数据库结构" tabindex="-1"><a class="header-anchor" href="#_3-优化数据库结构"><span>3. 优化数据库结构</span></a></h2>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707211709553.png" alt="image-20220707211709553" style="float:left;" />
<h3 id="_3-1-拆分表-冷热数据分离" tabindex="-1"><a class="header-anchor" href="#_3-1-拆分表-冷热数据分离"><span>3.1 拆分表：冷热数据分离</span></a></h3>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707211802756.png" alt="image-20220707211802756" style="float:left;" />
<p><strong>举例1：</strong> <code v-pre>会员members表</code> 存储会员登录认证信息，该表中有很多字段，如id、姓名、密码、地址、电 话、个人描述字段。其中地址、电话、个人描述等字段并不常用，可以将这些不常用的字段分解出另一 个表。将这个表取名叫members_detail，表中有member_id、address、telephone、description等字段。 这样就把会员表分成了两个表，分别为 <code v-pre>members表</code> 和 <code v-pre>members_detail表</code> 。</p>
<p>创建这两个表的SQL语句如下：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>CREATE TABLE members (</span></span>
<span class="line"><span>    id int(11) NOT NULL AUTO_INCREMENT,</span></span>
<span class="line"><span>    username varchar(50) DEFAULT NULL,</span></span>
<span class="line"><span>    password varchar(50) DEFAULT NULL,</span></span>
<span class="line"><span>    last_login_time datetime DEFAULT NULL,</span></span>
<span class="line"><span>    last_login_ip varchar(100) DEFAULT NULL,</span></span>
<span class="line"><span>    PRIMARY KEY(Id)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>CREATE TABLE members_detail (</span></span>
<span class="line"><span>    Member_id int(11) NOT NULL DEFAULT 0,</span></span>
<span class="line"><span>    address varchar(255) DEFAULT NULL,</span></span>
<span class="line"><span>    telephone varchar(255) DEFAULT NULL,</span></span>
<span class="line"><span>    description text</span></span>
<span class="line"><span>);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要查询会员的基本信息或详细信息，那么可以用会员的id来查询。如果需要将会员的基本信息和 详细信息同时显示，那么可以将members表和members_detail表进行联合查询，查询语句如下：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SELECT * FROM members LEFT JOIN members_detail on members.id =</span></span>
<span class="line"><span>members_detail.member_id;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这种分解可以提高表的查询效率。对于字段很多且有些字段使用不频繁的表，可以通过这种分解的方式来优化数据库的性能。</p>
<h3 id="_3-2-增加中间表" tabindex="-1"><a class="header-anchor" href="#_3-2-增加中间表"><span>3.2 增加中间表</span></a></h3>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707212800544.png" alt="image-20220707212800544" style="float:left;" />
<p>举例1： 学生信息表 和 班级表 的SQL语句如下：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>CREATE TABLE `class` (</span></span>
<span class="line"><span>`id` INT(11) NOT NULL AUTO_INCREMENT,</span></span>
<span class="line"><span>`className` VARCHAR(30) DEFAULT NULL,</span></span>
<span class="line"><span>`address` VARCHAR(40) DEFAULT NULL,</span></span>
<span class="line"><span>`monitor` INT NULL ,</span></span>
<span class="line"><span>PRIMARY KEY (`id`)</span></span>
<span class="line"><span>) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CREATE TABLE `student` (</span></span>
<span class="line"><span>`id` INT(11) NOT NULL AUTO_INCREMENT,</span></span>
<span class="line"><span>`stuno` INT NOT NULL ,</span></span>
<span class="line"><span>`name` VARCHAR(20) DEFAULT NULL,</span></span>
<span class="line"><span>`age` INT(3) DEFAULT NULL,</span></span>
<span class="line"><span>`classId` INT(11) DEFAULT NULL,</span></span>
<span class="line"><span>PRIMARY KEY (`id`)</span></span>
<span class="line"><span>) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在有一个模块需要经常查询带有学生名称（name）、学生所在班级名称（className）、学生班级班 长（monitor）的学生信息。根据这种情况可以创建一个 temp_student 表。temp_student表中存储学生名称（stu_name）、学生所在班级名称（className）和学生班级班长（monitor）信息。创建表的语句如下：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>CREATE TABLE `temp_student` (</span></span>
<span class="line"><span>`id` INT(11) NOT NULL AUTO_INCREMENT,</span></span>
<span class="line"><span>`stu_name` INT NOT NULL ,</span></span>
<span class="line"><span>`className` VARCHAR(20) DEFAULT NULL,</span></span>
<span class="line"><span>`monitor` INT(3) DEFAULT NULL,</span></span>
<span class="line"><span>PRIMARY KEY (`id`)</span></span>
<span class="line"><span>) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，从学生信息表和班级表中查询相关信息存储到临时表中：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>insert into temp_student(stu_name,className,monitor)</span></span>
<span class="line"><span>            select s.name,c.className,c.monitor</span></span>
<span class="line"><span>            from student as s,class as c</span></span>
<span class="line"><span>            where s.classId = c.id</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以后，可以直接从temp_student表中查询学生名称、班级名称和班级班长，而不用每次都进行联合查 询。这样可以提高数据库的查询速度。</p>
<h3 id="_3-3-增加冗余字段" tabindex="-1"><a class="header-anchor" href="#_3-3-增加冗余字段"><span>3.3 增加冗余字段</span></a></h3>
<p>设计数据库表时应尽量遵循范式理论的规约，尽可能减少冗余字段，让数据库设计看起来精致、优雅。 但是，合理地加入冗余字段可以提高查询速度。</p>
<p>表的规范化程度越高，表与表之间的关系就越多，需要连接查询的情况也就越多。尤其在数据量大，而 且需要频繁进行连接的时候，为了提升效率，我们也可以考虑增加冗余字段来减少连接。</p>
<p>这部分内容在《第11章_数据库的设计规范》章节中 反范式化小节 中具体展开讲解了。这里省略。</p>
<h3 id="_3-4-优化数据类型" tabindex="-1"><a class="header-anchor" href="#_3-4-优化数据类型"><span>3.4 优化数据类型</span></a></h3>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707213524137.png" alt="image-20220707213524137" style="float:left;" />
<p><strong>情况1：对整数类型数据进行优化。</strong></p>
<p>遇到整数类型的字段可以用 INT 型 。这样做的理由是，INT 型数据有足够大的取值范围，不用担心数 据超出取值范围的问题。刚开始做项目的时候，首先要保证系统的稳定性，这样设计字段类型是可以 的。但在数据量很大的时候，数据类型的定义，在很大程度上会影响到系统整体的执行效率。</p>
<p>对于 非负型 的数据（如自增ID、整型IP）来说，要优先使用无符号整型 UNSIGNED 来存储。因为无符号 相对于有符号，同样的字节数，存储的数值范围更大。如tinyint有符号为-128-127，无符号为0-255，多 出一倍的存储空间。</p>
<p><strong>情况2：既可以使用文本类型也可以使用整数类型的字段，要选择使用整数类型。</strong></p>
<p>跟文本类型数据相比，大整数往往占用更少的存储空间 ，因此，在存取和比对的时候，可以占用更少的 内存空间。所以，在二者皆可用的情况下，尽量使用整数类型，这样可以提高查询的效率。如：将IP地 址转换成整型数据。</p>
<p><strong>情况3：避免使用TEXT、BLOB数据类型</strong></p>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707214640374.png" alt="image-20220707214640374" style="float:left;" />
<p><strong>情况4：避免使用ENUM类型</strong></p>
<p>修改ENUM值需要使用ALTER语句。</p>
<p>ENUM类型的ORDER BY 操作效率低，需要额外操作。使用TINYINT来代替ENUM类型。</p>
<p><strong>情况5：使用TIMESTAMP存储时间</strong></p>
<p>TIMESTAMP存储的时间范围1970-01-01 00:00:01 ~ 2038-01_19-03:14:07。TIMESTAMP使用4字节，DATETIME使用8个字节，同时TIMESTAMP具有自动赋值以及自动更新的特性。</p>
<p><strong>情况6：用DECIMAL代替FLOAT和DOUBLE存储精确浮点数</strong></p>
<ol>
<li>非精准浮点： float, double</li>
<li>精准浮点：decimal</li>
</ol>
<p>Decimal类型为精准浮点数，在计算时不会丢失精度，尤其是财务相关的金融类数据。占用空间由定义的宽度决定，每4个字节可以存储9位数字，并且小数点要占用一个字节。可用于存储比bigint更大的整型数据。</p>
<p><strong>总之，遇到数据量大的项目时，一定要在充分了解业务需求的前提下，合理优化数据类型，这样才能充 分发挥资源的效率，使系统达到最优。</strong></p>
<h3 id="_3-5-优化插入记录的速度" tabindex="-1"><a class="header-anchor" href="#_3-5-优化插入记录的速度"><span>3.5 优化插入记录的速度</span></a></h3>
<p>插入记录时，影响插入速度的主要是索引、唯一性校验、一次插入记录条数等。根据这些情况可以分别进行优化。这里我们分为MyISAM引擎和InnoDB引擎来讲。</p>
<p><strong>1. MyISAM引擎的表：</strong></p>
<p><strong>① 禁用索引</strong></p>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707215305640.png" alt="image-20220707215305640" style="float:left;" />
<p><strong>② 禁用唯一性检查</strong></p>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707215356893.png" alt="image-20220707215356893" style="float:left;" />
<p><strong>③ 使用批量插入</strong></p>
<p>插入多条记录时，可以使用一条INSERT语句插入一条数据，也可以使用一条INSERT语句插入多条数据。插入一条记录的INSERT语句情形如下：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>insert into student values(1,'zhangsan',18,1);</span></span>
<span class="line"><span>insert into student values(2,'lisi',17,1);</span></span>
<span class="line"><span>insert into student values(3,'wangwu',17,1);</span></span>
<span class="line"><span>insert into student values(4,'zhaoliu',19,1);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用一条INSERT语句插入多条记录的情形如下：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>insert into student values</span></span>
<span class="line"><span>(1,'zhangsan',18,1),</span></span>
<span class="line"><span>(2,'lisi',17,1),</span></span>
<span class="line"><span>(3,'wangwu',17,1),</span></span>
<span class="line"><span>(4,'zhaoliu',19,1);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第2种情形的插入速度要比第1种情形快。</p>
<p><strong>④ 使用LOAD DATA INFILE 批量导入</strong></p>
<p>当需要批量导入数据时，如果能用LOAD DATA INFILE语句，就尽量使用。因为LOAD DATA INFILE语句导入数据的速度比INSERT语句块。</p>
<p><strong>2. InnoDB引擎的表：</strong></p>
<p><strong>① 禁用唯一性检查</strong></p>
<p>插入数据之前执行<code v-pre>set unique_checks=0</code>来禁止对唯一索引的检查，数据导入完成之后再运行<code v-pre>set unique_check=1</code>。这个和MyISAM引擎的使用方法一样。</p>
<p><strong>② 禁用外键检查</strong></p>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707220034534.png" alt="image-20220707220034534" style="float:left;" />
<p><strong>③ 禁止自动提交</strong></p>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707220131891.png" alt="image-20220707220131891" style="float:left;" />
<h3 id="_3-6-使用非空约束" tabindex="-1"><a class="header-anchor" href="#_3-6-使用非空约束"><span>3.6 使用非空约束</span></a></h3>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707220157606.png" alt="image-20220707220157606" style="float:left;" />
<h3 id="_3-7-分析表、检查表与优化表" tabindex="-1"><a class="header-anchor" href="#_3-7-分析表、检查表与优化表"><span>3.7 分析表、检查表与优化表</span></a></h3>
<p>MySQL提供了分析表、检查表和优化表的语句。<code v-pre>分析表</code>主要是分析关键字的分布，<code v-pre>检查表</code>主要是检查表是否存在错误，<code v-pre>优化表</code>主要是消除删除或者更新造成的空间浪费。</p>
<h4 id="_1-分析表" tabindex="-1"><a class="header-anchor" href="#_1-分析表"><span>1. 分析表</span></a></h4>
<p>MySQL中提供了ANALYZE TABLE语句分析表，ANALYZE TABLE语句的基本语法如下：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ANALYZE [LOCAL | NO_WRITE_TO_BINLOG] TABLE tbl_name[,tbl_name]…</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>默认的，MySQL服务会将 ANALYZE TABLE语句写到binlog中，以便在主从架构中，从服务能够同步数据。 可以添加参数LOCAL 或者 NO_WRITE_TO_BINLOG取消将语句写到binlog中。</p>
<p>使用 <code v-pre>ANALYZE TABLE</code> 分析表的过程中，数据库系统会自动对表加一个 <code v-pre>只读锁</code> 。在分析期间，只能读取 表中的记录，不能更新和插入记录。ANALYZE TABLE语句能够分析InnoDB和MyISAM类型的表，但是不能作用于视图。</p>
<p>ANALYZE TABLE分析后的统计结果会反应到 <code v-pre>cardinality</code> 的值，该值统计了表中某一键所在的列不重复 的值的个数。<strong>该值越接近表中的总行数，则在表连接查询或者索引查询时，就越优先被优化器选择使用</strong>。也就是索引列的cardinality的值与表中数据的总条数差距越大，即使查询的时候使用了该索引作为查 询条件，存储引擎实际查询的时候使用的概率就越小。下面通过例子来验证下。cardinality可以通过 SHOW INDEX FROM 表名查看。</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>mysql> ANALYZE TABLE user;</span></span>
<span class="line"><span>+--------------+---------+----------+---------+</span></span>
<span class="line"><span>| Table        | Op      | Msg_type |Msg_text |</span></span>
<span class="line"><span>+--------------+---------+----------+---------+</span></span>
<span class="line"><span>| atguigu.user | analyze | status   | Ok      |</span></span>
<span class="line"><span>+--------------+----------+---------+---------+</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面结果显示的信息说明如下：</p>
<ul>
<li>Table: 表示分析的表的名称。</li>
<li>Op: 表示执行的操作。analyze表示进行分析操作。</li>
<li>Msg_type: 表示信息类型，其值通常是状态 (status) 、信息 (info) 、注意 (note) 、警告 (warning) 和 错误 (error) 之一。</li>
<li>Msg_text: 显示信息。</li>
</ul>
<h4 id="_2-检查表" tabindex="-1"><a class="header-anchor" href="#_2-检查表"><span>2. 检查表</span></a></h4>
<p>MySQL中可以使用 <code v-pre>CHECK TABLE</code> 语句来检查表。CHECK TABLE语句能够检查InnoDB和MyISAM类型的表 是否存在错误。CHECK TABLE语句在执行过程中也会给表加上 <code v-pre>只读锁</code> 。</p>
<p>对于MyISAM类型的表，CHECK TABLE语句还会更新关键字统计数据。而且，CHECK TABLE也可以检查视 图是否有错误，比如在视图定义中被引用的表已不存在。该语句的基本语法如下：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>CHECK TABLE tbl_name [, tbl_name] ... [option] ...</span></span>
<span class="line"><span>option = {QUICK | FAST | MEDIUM | EXTENDED | CHANGED}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，tbl_name是表名；option参数有5个取值，分别是QUICK、FAST、MEDIUM、EXTENDED和 CHANGED。各个选项的意义分别是：</p>
<ul>
<li>QUICK ：不扫描行，不检查错误的连接。</li>
<li>FAST ：只检查没有被正确关闭的表。</li>
<li>CHANGED ：只检查上次检查后被更改的表和没有被正确关闭的表。</li>
<li>MEDIUM ：扫描行，以验证被删除的连接是有效的。也可以计算各行的关键字校验和，并使用计算出的校验和验证这一点。</li>
<li>EXTENDED ：对每行的所有关键字进行一个全面的关键字查找。这可以确保表是100%一致的，但 是花的时间较长。</li>
</ul>
<p>option只对MyISAM类型的表有效，对InnoDB类型的表无效。比如：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707221707254.png" alt="image-20220707221707254" tabindex="0" loading="lazy"><figcaption>image-20220707221707254</figcaption></figure>
<p>该语句对于检查的表可能会产生多行信息。最后一行有一个状态的 Msg_type 值，Msg_text 通常为 OK。 如果得到的不是 OK，通常要对其进行修复；是 OK 说明表已经是最新的了。表已经是最新的，意味着存 储引擎对这张表不必进行检查。</p>
<h4 id="_3-优化表" tabindex="-1"><a class="header-anchor" href="#_3-优化表"><span>3. 优化表</span></a></h4>
<p><strong>方式1：OPTIMIZE TABLE</strong></p>
<p>MySQL中使用 <code v-pre>OPTIMIZE TABLE</code> 语句来优化表。但是，OPTILMIZE TABLE语句只能优化表中的 <code v-pre>VARCHAR</code> 、 <code v-pre>BLOB</code> 或 <code v-pre>TEXT</code> 类型的字段。一个表使用了这些字段的数据类型，若已经 <code v-pre>删除</code> 了表的一大部 分数据，或者已经对含有可变长度行的表（含有VARCHAR、BLOB或TEXT列的表）进行了很多 <code v-pre>更新</code> ，则 应使用OPTIMIZE TABLE来重新利用未使用的空间，并整理数据文件的 <code v-pre>碎片</code> 。</p>
<p>OPTIMIZE TABLE 语句对InnoDB和MyISAM类型的表都有效。该语句在执行过程中也会给表加上 <code v-pre>只读锁</code> 。</p>
<p>OPTILMIZE TABLE语句的基本语法如下：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>OPTIMIZE [LOCAL | NO_WRITE_TO_BINLOG] TABLE tbl_name [, tbl_name] ...</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>LOCAL | NO_WRITE_TO_BINLOG关键字的意义和分析表相同，都是指定不写入二进制日志。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707221901664.png" alt="image-20220707221901664" tabindex="0" loading="lazy"><figcaption>image-20220707221901664</figcaption></figure>
<p>执行完毕，Msg_text显示</p>
<blockquote>
<p>‘numysql.SYS_APP_USER’, ‘optimize’, ‘note’, ‘Table does not support optimize, doing recreate + analyze instead’</p>
</blockquote>
<p>原因是我服务器上的MySQL是InnoDB存储引擎。</p>
<p>到底优化了没有呢？看官网！</p>
<p><a><a href="https://dev.mysql.com/doc/refman/8.0/en/optimize-table.html" target="_blank" rel="noopener noreferrer">MySQL :: MySQL 8.0 Reference Manual :: 13.7.3.4 OPTIMIZE TABLE Statement</a></a></p>
<p>在MyISAM中，是先分析这张表，然后会整理相关的MySQL datafile，之后回收未使用的空间；在InnoDB 中，回收空间是简单通过Alter table进行整理空间。在优化期间，MySQL会创建一个临时表，优化完成之 后会删除原始表，然后会将临时表rename成为原始表。</p>
<blockquote>
<p>说明： 在多数的设置中，根本不需要运行OPTIMIZE TABLE。即使对可变长度的行进行了大量的更 新，也不需要经常运行，<code v-pre> 每周一次</code> 或 <code v-pre>每月一次</code> 即可，并且只需要对 <code v-pre>特定的表</code> 运行。</p>
</blockquote>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707222156765.png" alt="image-20220707222156765" style="float:left;" />
<p><strong>方式二：使用mysqlcheck命令</strong></p>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707222305302.png" alt="image-20220707222305302" style="float:left;" />
<h4 id="_3-8-小结" tabindex="-1"><a class="header-anchor" href="#_3-8-小结"><span>3.8 小结</span></a></h4>
<p>上述这些方法都是有利有弊的。比如：</p>
<ul>
<li>修改数据类型，节省存储空间的同时，你要考虑到数据不能超过取值范围；</li>
<li>增加冗余字段的时候，不要忘了确保数据一致性；</li>
<li>把大表拆分，也意味着你的查询会增加新的连接，从而增加额外的开销和运维的成本。</li>
</ul>
<p>因此，你一定要结合实际的业务需求进行权衡。</p>
<h2 id="_4-大表优化" tabindex="-1"><a class="header-anchor" href="#_4-大表优化"><span>4. 大表优化</span></a></h2>
<p>当MySQL单表记录数过大时，数据库的CRUD性能会明显下降，一些常见的优化措施如下：</p>
<h3 id="_4-1-限定查询的范围" tabindex="-1"><a class="header-anchor" href="#_4-1-限定查询的范围"><span>4.1 限定查询的范围</span></a></h3>
<p>禁止不带任何限制数据范围条件的查询语句。比如：我们当用户在查询订单历史的时候，我们可以控制 在一个月的范围内；</p>
<h3 id="_4-2-读-写分离" tabindex="-1"><a class="header-anchor" href="#_4-2-读-写分离"><span>4.2 读/写分离</span></a></h3>
<p>经典的数据库拆分方案，主库负责写，从库负责读。</p>
<ul>
<li>一主一从模式：</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707222606097.png" alt="image-20220707222606097" tabindex="0" loading="lazy"><figcaption>image-20220707222606097</figcaption></figure>
<ul>
<li>双主双从模式：</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707222623485.png" alt="image-20220707222623485" tabindex="0" loading="lazy"><figcaption>image-20220707222623485</figcaption></figure>
<h3 id="_4-3-垂直拆分" tabindex="-1"><a class="header-anchor" href="#_4-3-垂直拆分"><span>4.3 垂直拆分</span></a></h3>
<p>当数据量级达到 <code v-pre>千万级</code> 以上时，有时候我们需要把一个数据库切成多份，放到不同的数据库服务器上， 减少对单一数据库服务器的访问压力。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707222648112.png" alt="image-20220707222648112" tabindex="0" loading="lazy"><figcaption>image-20220707222648112</figcaption></figure>
<ul>
<li>如果数据库的数据表过多，可以采用<code v-pre>垂直分库</code>的方式，将关联的数据库部署在同一个数据库上。</li>
<li>如果数据库中的列过多，可以采用<code v-pre>垂直分表</code>的方式，将一张数据表分拆成多张数据表，把经常一起使用的列放在同一张表里。</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707222910740.png" alt="image-20220707222910740" tabindex="0" loading="lazy"><figcaption>image-20220707222910740</figcaption></figure>
<p><code v-pre>垂直拆分的优点</code>： 可以使得列数据变小，在查询时减少读取的Block数，减少I/O次数。此外，垂直分区可以简化表的结构，易于维护。</p>
<p><code v-pre>垂直拆分的缺点</code>： 主键会出现冗余，需要管理冗余列，并会引起 JOIN 操作。此外，垂直拆分会让事务变得更加复杂。</p>
<h3 id="_4-4-水平拆分" tabindex="-1"><a class="header-anchor" href="#_4-4-水平拆分"><span>4.4 水平拆分</span></a></h3>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707222954304.png" alt="image-20220707222954304" style="float:left;" />
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707222739120.png" alt="image-20220707222739120" tabindex="0" loading="lazy"><figcaption>image-20220707222739120</figcaption></figure>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707223024163.png" alt="image-20220707223024163" style="float:left;" />
<p>下面补充一下数据库分片的两种常见方案：</p>
<ul>
<li><strong>客户端代理： 分片逻辑在应用端，封装在jar包中，通过修改或者封装JDBC层来实现。</strong> 当当网的 Sharding-JDBC 、阿里的TDDL是两种比较常用的实现。</li>
<li>**中间件代理： 在应用和数据中间加了一个代理层。分片逻辑统一维护在中间件服务中。**我们现在 谈的 Mycat 、360的Atlas、网易的DDB等等都是这种架构的实现。</li>
</ul>
<h2 id="_5-其它调优策略" tabindex="-1"><a class="header-anchor" href="#_5-其它调优策略"><span>5. 其它调优策略</span></a></h2>
<h3 id="_5-1-服务器语句超时处理" tabindex="-1"><a class="header-anchor" href="#_5-1-服务器语句超时处理"><span>5.1 服务器语句超时处理</span></a></h3>
<p>在MySQL 8.0中可以设置 服务器语句超时的限制 ，单位可以达到 毫秒级别 。当中断的执行语句超过设置的 毫秒数后，服务器将终止查询影响不大的事务或连接，然后将错误报给客户端。</p>
<p>设置服务器语句超时的限制，可以通过设置系统变量 MAX_EXECUTION_TIME 来实现。默认情况下， MAX_EXECUTION_TIME的值为0，代表没有时间限制。 例如：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SET GLOBAL MAX_EXECUTION_TIME=2000;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SET SESSION MAX_EXECUTION_TIME=2000; #指定该会话中SELECT语句的超时时间</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_5-2-创建全局通用表空间" tabindex="-1"><a class="header-anchor" href="#_5-2-创建全局通用表空间"><span>5.2 创建全局通用表空间</span></a></h3>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220707223246684.png" alt="image-20220707223246684" style="float:left;" />
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202308291637043.png" alt="image-20220707223349879" style="float:left;" />
<h3 id="_5-3-mysql-8-0新特性-隐藏索引对调优的帮助" tabindex="-1"><a class="header-anchor" href="#_5-3-mysql-8-0新特性-隐藏索引对调优的帮助"><span>5.3 MySQL 8.0新特性：隐藏索引对调优的帮助</span></a></h3>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202308291637830.png" alt="image-20220707223420496" style="float:left;" />
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312031906036.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


