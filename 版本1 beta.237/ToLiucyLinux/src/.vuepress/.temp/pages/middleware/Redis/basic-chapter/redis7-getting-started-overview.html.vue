<template><div><h2 id="_1-redis是什么" tabindex="-1"><a class="header-anchor" href="#_1-redis是什么" aria-hidden="true">#</a> 1. Redis是什么</h2>
<p><strong>Remote Dictionary Server</strong>(<strong>远程字典服务</strong>)是完全开源的，使用ANSIC语言编写遵守<a href="https://so.csdn.net/so/search?q=BSD&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">BSD<ExternalLinkIcon/></a>协议，是一个高性能的Key-Value数据库提供了丰富的数据结构，例如String、Hash、List、Set、SortedSet等等。数据是存在内存中的，同时Redis支持事务、持久化、LUA脚本、发布/订阅、缓存淘汰、流技术等多种功能特性提供了主从模式、Redis Sentinel和Redis Cluster集群架构方案。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309061408800.png" alt="image-20230906140823671" tabindex="0" loading="lazy"><figcaption>image-20230906140823671</figcaption></figure>
<p><strong>作者：</strong> 安特雷兹</p>
<p><strong>个人Github：</strong> <a href="https://github.com/antirez" target="_blank" rel="noopener noreferrer">https://github.com/antirez<ExternalLinkIcon/></a></p>
<p><strong>个人博客：</strong>   <a href="https://antirez.com/latest/0" target="_blank" rel="noopener noreferrer">https://antirez.com/latest/0<ExternalLinkIcon/></a></p>
<h3 id="_1-1-主流功能与应用" tabindex="-1"><a class="header-anchor" href="#_1-1-主流功能与应用" aria-hidden="true">#</a> 1.1 主流功能与应用</h3>
<h4 id="_1-分布式缓存-挡在mysql数据库之前的带刀护卫" tabindex="-1"><a class="header-anchor" href="#_1-分布式缓存-挡在mysql数据库之前的带刀护卫" aria-hidden="true">#</a> 1.分布式缓存，挡在MySQL数据库之前的带刀护卫</h4>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309061403067.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>与传统数据库关系</strong></p>
<ul>
<li>Redis是key-value数据库(NoSQL一种)，<code v-pre>MySQL</code>是关系型数据库。</li>
<li>Redis数据操作主要在内存，而MySQL主要存储在<code v-pre>磁盘</code>。</li>
<li>Redis在某一些场景使用中要明显优于MySQL，比如<code v-pre>计数器</code>、<code v-pre>排行榜</code>等方面。</li>
<li>Redis通常用于一些特定场景，需要与MySQL一起配合使用。</li>
<li>两者并不是相互替换和竞争的关系，而是共用和配合使用</li>
</ul>
<h4 id="_2-内存存储和持久化-rdb和aof" tabindex="-1"><a class="header-anchor" href="#_2-内存存储和持久化-rdb和aof" aria-hidden="true">#</a> 2.内存存储和持久化（RDB和AOF）</h4>
<p>​	Redis支持异步将内存中的数据写到硬盘上，同时不影响继续服务</p>
<h4 id="_3-高可用架构搭配" tabindex="-1"><a class="header-anchor" href="#_3-高可用架构搭配" aria-hidden="true">#</a> 3.高可用架构搭配</h4>
<p>​	<code v-pre>单机</code>、<code v-pre>主从</code>、<code v-pre>哨兵</code>、<code v-pre>集群</code></p>
<h4 id="_4-缓存穿透、击穿、雪崩" tabindex="-1"><a class="header-anchor" href="#_4-缓存穿透、击穿、雪崩" aria-hidden="true">#</a> 4.缓存穿透、击穿、雪崩</h4>
<h4 id="_5-分布式锁" tabindex="-1"><a class="header-anchor" href="#_5-分布式锁" aria-hidden="true">#</a> 5.分布式锁</h4>
<h4 id="_6-队列" tabindex="-1"><a class="header-anchor" href="#_6-队列" aria-hidden="true">#</a> 6.队列</h4>
<p>​	Redis提供list和Set操作，这使得Redis能作为一个很好的消息队列平台来使用。</p>
<p>​	我们常通过Redis的队列功能做购买限制。比如到了节假日或者推广期间，进行一些活动，对用户购买行为进行限制，限制今天只能购买几次商品或者一段时间内只能购买一次。也比较适合使用。</p>
<h4 id="_7-排行榜-点赞" tabindex="-1"><a class="header-anchor" href="#_7-排行榜-点赞" aria-hidden="true">#</a> 7.排行榜+点赞</h4>
<p>​	在互联网应用中，有各种各样的排行榜，如电商网站的月度销量排行榜、社交APP的礼物排行榜、小程序的投票排行榜等等。Redis提供的zset数据类型能够快速实现这些复杂的排行榜。</p>
<p>​	比如小说网站对小说进行排名，根据排名，将排名靠前的小说推荐给用户。</p>
<h3 id="_1-2-总体功能概述" tabindex="-1"><a class="header-anchor" href="#_1-2-总体功能概述" aria-hidden="true">#</a> 1.2 总体功能概述</h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309061414301.png" alt="image-20230906141403064" tabindex="0" loading="lazy"><figcaption>image-20230906141403064</figcaption></figure>
<h3 id="_1-3-优势" tabindex="-1"><a class="header-anchor" href="#_1-3-优势" aria-hidden="true">#</a> 1.3 优势</h3>
<p>​	性能极高-Redis读的速度是110000次/秒，写的速度是81000次/秒</p>
<p>​	Redis数据类型丰富，不仅仅支持简单的Key-Value类型的数据，同时还提供list，set，zset，hash等数据结构的存储</p>
<p>​	Redis支持数据的持久化，可以将内存中的数据保持在磁盘中，重启的时候可以再次加载进行使用</p>
<p>​	Redis支持数据的备份，即master-slave模式的数据备份</p>
<h3 id="_1-4-小总结" tabindex="-1"><a class="header-anchor" href="#_1-4-小总结" aria-hidden="true">#</a> 1.4 小总结</h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309061403981.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_2-redis能干嘛" tabindex="-1"><a class="header-anchor" href="#_2-redis能干嘛" aria-hidden="true">#</a> 2.Redis能干嘛</h2>
<p>官网地址 :</p>
<p><strong>英文官网：</strong>  <a href="https://redis.io/" target="_blank" rel="noopener noreferrer">Redis<ExternalLinkIcon/></a></p>
<p><strong>中文官网：</strong> <a href="http://redis.cn/" target="_blank" rel="noopener noreferrer">Redis网站<ExternalLinkIcon/></a></p>
<p>安装包：<a href="https://redis.io/download/%EF%BC%8C%E9%80%89%E6%8B%A9redis7.0%E7%89%88%E6%9C%AC%E5%8D%B3%E5%8F%AF" target="_blank" rel="noopener noreferrer">https://redis.io/download/，选择redis7.0版本即可<ExternalLinkIcon/></a></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309061408800.png" alt="image-20230906140823671" tabindex="0" loading="lazy"><figcaption>image-20230906140823671</figcaption></figure>
<p>Redis源码地址：<a href="https://github.com/redis/redis" target="_blank" rel="noopener noreferrer">https://github.com/redis/redis<ExternalLinkIcon/></a></p>
<p>Redis在线测试地址(不用下载也能玩)：<a href="https://try.redis.io/" target="_blank" rel="noopener noreferrer">https://try.redis.io/<ExternalLinkIcon/></a></p>
<p>Redis命令参考：<a href="http://doc.redisfans.com/" target="_blank" rel="noopener noreferrer">http://doc.redisfans.com/<ExternalLinkIcon/></a></p>
<h2 id="_3-redis怎么使用" tabindex="-1"><a class="header-anchor" href="#_3-redis怎么使用" aria-hidden="true">#</a> 3. Redis怎么使用</h2>
<ol>
<li>官网文档</li>
<li>多种数据类型基本操作和配置；</li>
<li>持久化和复制，RDB/AOF</li>
<li>事务的控制</li>
<li>复制，集群等</li>
</ol>
<h3 id="_3-1-redis迭代演化" tabindex="-1"><a class="header-anchor" href="#_3-1-redis迭代演化" aria-hidden="true">#</a> 3.1 Redis迭代演化</h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309061403007.jpg" alt="redis历史版本回顾" tabindex="0" loading="lazy"><figcaption>redis历史版本回顾</figcaption></figure>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code>5.0版本是直接升级到6.0版本，对于这个激进的升级，Redis之父antirez表现得很有信心和兴奋，所以第一时间发文来阐述6.0的一些重大功能"Redis 6.0.0 GA is out!":
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>随后Redis再接再厉，直接王炸Redis7.0---2023年爆款</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code>2022年4月27日Redis正式发布了7.0更新
(其实早在2022年1月31日，Redis已经预发布了7.0rc-1，近过社区的考验后，确认没有重大Bug才会正式发布)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-redis版本迭代推演介绍" tabindex="-1"><a class="header-anchor" href="#_3-2-redis版本迭代推演介绍" aria-hidden="true">#</a> 3.2 Redis版本迭代推演介绍：</h3>
<p>​	几个里程碑式的重要版本:如上图：redis历史版本回顾</p>
<p>​	命名规则：Redis从发布至今，已经有十余年的时光了，一直遵循着自己的命名规则:</p>
<ol>
<li><code v-pre>版本号第二位如果是奇数，则为非稳定版本</code>，如2.7、2.9、3.1</li>
<li><code v-pre>版本号第二位如果是偶数，则为稳定版</code>，如2.6、2.8、3.2</li>
<li>当前奇数版本就是下一个稳定版本的开发版，如2.9版本就是3.0版本的开发版本</li>
<li>我们可以通过redis.io官网来下载自己感兴趣的版本进行源码阅读</li>
<li>历史发布版本的源码：<a href="https://download.redis.io/releases/" target="_blank" rel="noopener noreferrer">https://download.redis.io/releases/<ExternalLinkIcon/></a></li>
</ol>
<p><strong>Redis7.0新特性概述：</strong></p>
<p><a href="https://github.com/redis/redis/releases%E5%8F%AF%E4%BB%A5%E6%9F%A5%E8%AF%A2%E5%88%B0%E5%8E%86%E5%8F%B2%E5%8F%91%E5%B8%83%E7%89%88%E6%9C%AC%EF%BC%8C%E6%A0%B9%E6%8D%AE7.0-rc1%E9%A2%84%E5%8F%91%E5%B8%83%E7%89%88%E6%9C%AC%EF%BC%8C%E6%88%91%E4%BB%AC%E5%8F%AF%E4%BB%A5%E7%9C%8B%E5%88%B0Redis7%E7%9A%84%E6%96%B0%E7%89%B9%E6%80%A7%EF%BC%9A" target="_blank" rel="noopener noreferrer">https://github.com/redis/redis/releases可以查询到历史发布版本，根据7.0-rc1预发布版本，我们可以看到Redis7的新特性：<ExternalLinkIcon/></a></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309061403122.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_3-3-部分新特性总览" tabindex="-1"><a class="header-anchor" href="#_3-3-部分新特性总览" aria-hidden="true">#</a> 3.3 部分新特性总览：</h3>
<p>2022年4月正式发布的Redis7.0是目前Redis历史版本中变化最大的版本。首先它有超过50个以上的新增命令，其次，它有大量核心特性的新增和改进。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309061403152.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_1-redis-functions" tabindex="-1"><a class="header-anchor" href="#_1-redis-functions" aria-hidden="true">#</a> 1. Redis Functions</h4>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309061403195.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_2-client-eviction" tabindex="-1"><a class="header-anchor" href="#_2-client-eviction" aria-hidden="true">#</a> 2. Client-eviction</h4>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309061403247.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_3-multi-part-aof" tabindex="-1"><a class="header-anchor" href="#_3-multi-part-aof" aria-hidden="true">#</a> 3. Multi-part AOF</h4>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309061403579.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_4-acl-v2-权限控制" tabindex="-1"><a class="header-anchor" href="#_4-acl-v2-权限控制" aria-hidden="true">#</a> 4. ACL v2 权限控制</h4>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309061403684.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_5-新增命令" tabindex="-1"><a class="header-anchor" href="#_5-新增命令" aria-hidden="true">#</a> 5. 新增命令</h4>
<div class="language-TEXT line-numbers-mode" data-ext="TEXT"><pre v-pre class="language-TEXT"><code>新增ZMPOP，BZMPOP，LMPOP，BLMPOP等新命令，对于EXPIRE和SET命令，新增了更多的命令参数选项。例如，ZMPOP的格式如下：ZMPOP numkeys key [key ...] MIN|MAX [COUNT count],而BZMPOP是ZMPOP的阻塞版本。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_6-listpack替代ziplist" tabindex="-1"><a class="header-anchor" href="#_6-listpack替代ziplist" aria-hidden="true">#</a> 6. listpack替代ziplist</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>listpack是用来替代ziplist的新数据结构，在7.0版本已经没有ziplist的配置了（6.0版本仅部分数据类型作为过渡阶段在使用）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_7-底层性能提升-和编码关系不大" tabindex="-1"><a class="header-anchor" href="#_7-底层性能提升-和编码关系不大" aria-hidden="true">#</a> 7. 底层性能提升(和编码关系不大)</h4>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309061403723.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_3-4-redis7部分新特性说明" tabindex="-1"><a class="header-anchor" href="#_3-4-redis7部分新特性说明" aria-hidden="true">#</a> 3.4 Redis7部分新特性说明</h3>
<h4 id="总体概述" tabindex="-1"><a class="header-anchor" href="#总体概述" aria-hidden="true">#</a> 总体概述</h4>
<p>大体和之前的redis版本保持一致和稳定，主要是自身底层性能和<strong>资源利用率上的优化和提高</strong>，如果生产上系统稳定，<strong>不用着急升级到最新redis7版本</strong>，如果从零开始新系统，直接上redis7.0-GA版。</p>
<table>
<thead>
<tr>
<th>多AOF文件支持</th>
<th>7.0 版本中一个比较大的变化就是 aof 文件由一个变成了多个，主要分为两种类型:基本文件(base files)、增量文件(incr files)，请注意这些文件名称是复数形式说明每一类文件不仅仅只有一个。在此之外还引入了一个清单文件(manifest) 用于跟踪文件以及文件的创建和应用顺序(恢复)</th>
</tr>
</thead>
<tbody>
<tr>
<td>config命令增强</td>
<td>对于Config Set 和Get命令，支持在一次调用过程中传递多个配置参数。例如，现在我们可以在执行一次Config Set命今中更改多个参数: config set maxmemory 10000001 maxmemory-clients 50% port 6399</td>
</tr>
<tr>
<td>限制客户端内存使用<br />Client-eviction</td>
<td>一旦 Redis 连接较多，再加上每个连接的内存占用都比较大的时候， Redis总连接内存占用可能会达到maxmemory的上限，可以增加允许限制所有客户端的总内存使用量配置项，redis.config 中对应的配置项<br />//两种配置形式:指定内存大小、基于 maxmemory 的百分比。<br />maxmemory-client 1g<br />maxmemory-client 10%</td>
</tr>
<tr>
<td>listpack紧凑列表调整</td>
<td>listpack 是用来替代 ziplist 的新数据结构，在 7.0 版本已经没有 ziplist 的配置了 (6.0版本仅部分数据类型作为过渡阶段在使用）listpack已经替换了ziplist类似hash-max-ziplist-entries 的配置</td>
</tr>
<tr>
<td>访问安全性增强ACLV2</td>
<td>在redis.conf配置文件中protected-mode默认为yes，只有当你希望你的客户端在没有授权的情况下可以连接到Redis server的时候可以将protect-mode设置为no</td>
</tr>
<tr>
<td>redis function</td>
<td>Redis函数，一种新的通过服务端脚本扩展Redis的方式，函数与数据本身一起存储。简言之，redis自己要去抢夺Lua脚本的饭碗</td>
</tr>
<tr>
<td>RDB保存时间调整</td>
<td>将持久化文件RDB的保存规则发生了改变，尤其是时间记录频度变化</td>
</tr>
<tr>
<td>命令新增和变动</td>
<td>Zset (有序集合)增加 ZMPOP、BZMPOP、ZINTERCARD 等命令<br />Set (集合)增加 SINTERCARD 命令<br />LIST(列表)增加 LMPOP、BLMPOP ，从提供的键名列表中的第一个非空列表键中弹出一个或多个元素。</td>
</tr>
<tr>
<td>性能资源利用率、安全等改进</td>
<td>自身底层部分优化改动，Redis核心在许多方面进行了重构和改进主动碎片整理V2:增强版主动碎片整理，配合Jemalloc版本更新，更快更智能，延时更低<br />HyperLogLog改进:在Redis5.0中，HyperLogLog算法得到改进，优化了计数统计时的内存使用效率，7更加优秀更好的内存统计报告<br />如果不是为了API向后兼容，我们将不再使用slave一词......（政治正确）</td>
</tr>
</tbody>
</table>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312031906036.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


