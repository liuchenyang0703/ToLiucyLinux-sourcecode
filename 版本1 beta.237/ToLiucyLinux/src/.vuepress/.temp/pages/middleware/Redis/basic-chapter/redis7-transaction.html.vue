<template><div><h2 id="_1-什么是redis事务" tabindex="-1"><a class="header-anchor" href="#_1-什么是redis事务" aria-hidden="true">#</a> 1. 什么是Redis事务</h2>
<p>Redis事务的本质是一组命令的集合。事务支持一次执行多个命令，一个事务中所有命令都会被序列化。在事务执行过程，会按照顺序串行化执行队列中的命令，其他客户端提交的命令请求不会插入到事务执行命令序列中。</p>
<p>总结说：redis事务就是一次性、顺序性、排他性的执行一个队列中的一系列命令。</p>
<p><strong>官网：</strong>  <a href="https://redis.io/docs/manual/transactions/" target="_blank" rel="noopener noreferrer">https://redis.io/docs/manual/transactions/<ExternalLinkIcon/></a></p>
<p>我这里做了一些简单的翻译</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202309191346658.png" alt="image-20230919134639449" tabindex="0" loading="lazy"><figcaption>image-20230919134639449</figcaption></figure>
<p>可以一次执行多个命令，本质是一组命令的集合，一个事务中的所有命令都会序列化，按顺序地串行化执行而不会被其他命令插入，不许加塞。</p>
<p><strong>总结说：Redis事务就是一次性、顺序性、排他性的执行一个队列中的一系列命令。</strong></p>
<h2 id="_2-redis中的事务处理" tabindex="-1"><a class="header-anchor" href="#_2-redis中的事务处理" aria-hidden="true">#</a> 2. Redis中的事务处理</h2>
<p>我们对数据库中事务处理的相关理论有了一个基本的认识，或许这个世界上的数据库系统千差万别，但我相信在事务处理这个问题上它们最终会殊途同归，就像我们解决并发过程中的冲突问题，常规的做法依然是加锁一样，这是我之所以要花费精力去理解和解释这些理论知识的原因，技术可谓是日新月异，如果我们总是一味地为新技术而疲于奔命，那么或许我们会渐渐地失去对这个行业的热爱，我相信原理永远比框架更为重要。</p>
<p>redis事务提供了一种“将多个命令打包， 然后一次性、按顺序地执行”的机制， 并且事务在执行的期间不会主动中断 —— 服务器在执行完事务中的所有命令之后， 才会继续处理其他客户端的其他命令。</p>
<p>Redis中的事务是可以视为一个队列，即我们可以通过MULTI开始一个事务，这相当于我们声明了一个命令队列。接下来，我们向Redis中提交的每条命令，都会被排入这个命令队列。当我们输入EXEC命令时，将触发当前事务，这相当于我们从命令队列中取出命令并执行，所以Redis中一个事务从开始到执行会经历 <strong>开始事务</strong> 、 <strong>命令入队</strong> 和 <strong>执行事务</strong> 三个阶段。下面是一个在Redis中使用事务的简单示例：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> MULTI 
OK 
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> SET name <span class="token string">"Leo"</span> 
QUEUED 
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> SADD Program_Language <span class="token string">"C++"</span> <span class="token string">"C#"</span> <span class="token string">"Jave"</span> <span class="token string">"Python"</span>  
QUEUED 
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> GET name 
QUEUED 
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> EXEC 
<span class="token number">1</span><span class="token punctuation">)</span> OK 
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span> 
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">"Leo"</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以注意到Redis中的事务和通常意义上的事务基本上是一致的，即</p>
<ul>
<li>事务是由一系列操作组成的单个逻辑工作执行单元。特别地，因为在Redis中命令是存储在一个队列中，所以，事务中的所有命令都会按顺序执行，并且在执行事务的过程中不会被客户端发送的其它命令中断。</li>
<li>事务是一个原子操作，事物中的命令只有两种执行结果，即全部执行或者全部不执行。如果客户端在使用MULTI命令开启事务后因为意外而没有执行EXEC命令，则事务中的所有命令都不会执行。同理，如果客户端在使用MULTI命令开启事务后执行EXEC命令，则事务中的所有命令都会执行。</li>
<li>Redis中的事务可以使用DISCARD命令来清空一个命令队列，并放弃对事务的执行。如果命令在入队时发生错误，Redis将在客户端调用EXEC命令时拒绝执行并取消事务，但是在EXEC命令执行后发生的错误，Redis将选择自动忽略。</li>
</ul>
<h2 id="_3-redis事务-vs-数据库事务" tabindex="-1"><a class="header-anchor" href="#_3-redis事务-vs-数据库事务" aria-hidden="true">#</a> 3. Redis事务 VS 数据库事务</h2>
<table>
<thead>
<tr>
<th>1.单独的隔离操作</th>
<th>Redis的事务仅仅是保证事务里的操作会被连续独占的执行，redis命令执行是单线程架构，在执行完事务内所有指令前是不可能再去同时执行其他客户端的请求的</th>
</tr>
</thead>
<tbody>
<tr>
<td>2.没有隔离级别的概念</td>
<td>因为事务提交前任何指令都不会被实际执行，也就不存在”事务内的查询要看到事务里的更新，在事务外查询不能看到”这种问题了</td>
</tr>
<tr>
<td>3.不保证原子性</td>
<td>Redis的事务不保证原子性，也就是不保证所有指令同时成功或同时失败，只有决定是否开始执行全部指令的能力，没有执行到一半进行回滚的能力</td>
</tr>
<tr>
<td>4.排它性</td>
<td>Redis会保证一个事务内的命令依次执行，而不会被其它命令插入</td>
</tr>
</tbody>
</table>
<p><strong>Redis事务和MySQL事务有以下不同点：</strong></p>
<ol>
<li>基于不同的存储方式：Redis是内存数据库，而MySQL是关系型数据库。因此，Redis将所有的数据存储在内存中，而MySQL将数据存储在磁盘上。这导致Redis的事务处理速度更快，但是不够持久。而MySQL的事务处理速度较慢，但更加稳定可靠。</li>
<li>事务处理的隔离级别不同：MySQL支持ACID属性的事务处理，并支持四种隔离级别（读未提交，读已提交，可重复读和串行化），而Redis不支持隔离级别。因此，在Redis中执行事务时，所有的命令都是按顺序执行的，没有并发执行的概念。</li>
<li>回滚处理不同：Redis和MySQL的事务都支持回滚操作，但实现方式不同。在Redis中，当事务中的某个命令执行失败时，整个事务将回滚，之前执行的所有命令都不会生效。而在MySQL中，事务可以根据隔离级别进行回滚，只回滚已提交的事务，未提交的事务不会被回滚。</li>
<li>支持的数据类型不同：Redis支持更多的数据类型，例如字符串、哈希、列表、集合和有序集合等，而MySQL只支持关系型数据。</li>
</ol>
<p>总的来说，Redis和MySQL事务处理有很多不同之处，它们各自适用于不同的场景。如果需要高并发的数据操作，可以使用Redis事务；如果需要对数据进行持久化存储和复杂的数据关联查询，则可以使用MySQL事务。</p>
<h2 id="_4-如何使用redis事务" tabindex="-1"><a class="header-anchor" href="#_4-如何使用redis事务" aria-hidden="true">#</a> 4. 如何使用Redis事务</h2>
<p><strong>官网：</strong>  <a href="https://redis.io/docs/manual/transactions/" target="_blank" rel="noopener noreferrer">https://redis.io/docs/manual/transactions/<ExternalLinkIcon/></a></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202309191415829.png" alt="image-20230919141544674" tabindex="0" loading="lazy"><figcaption>image-20230919141544674</figcaption></figure>
<h3 id="_4-1-redis事务常用命令" tabindex="-1"><a class="header-anchor" href="#_4-1-redis事务常用命令" aria-hidden="true">#</a> 4.1 Redis事务常用命令</h3>
<blockquote>
<p>MULTI 、 EXEC 、 DISCARD 和 WATCH 是 Redis 事务相关的命令。</p>
</blockquote>
<ul>
<li>MULTI ：开启事务，redis会将后续的命令逐个放入队列中，然后使用EXEC命令来原子化执行这个命令系列。</li>
<li>EXEC：执行事务中的所有操作命令。</li>
<li>DISCARD：取消事务，放弃执行事务块中的所有命令。</li>
<li>WATCH：监视一个或多个key,如果事务在执行前，这个key(或多个key)被其他命令修改，则事务被中断，不会执行事务中的任何命令。</li>
<li>UNWATCH：取消WATCH对所有key的监视。</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202309191423830.png" alt="image-20230919142359758" tabindex="0" loading="lazy"><figcaption>image-20230919142359758</figcaption></figure>
<h3 id="_4-2-case1-正常执行-multi-exec" tabindex="-1"><a class="header-anchor" href="#_4-2-case1-正常执行-multi-exec" aria-hidden="true">#</a> 4.2 case1：正常执行 MULTI EXEC</h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202309242130306.png" alt="image-20230924213036037" tabindex="0" loading="lazy"><figcaption>image-20230924213036037</figcaption></figure>
<h3 id="_4-3-case2-放弃事务-multi-discard" tabindex="-1"><a class="header-anchor" href="#_4-3-case2-放弃事务-multi-discard" aria-hidden="true">#</a> 4.3 case2：放弃事务 MULTI DISCARD</h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202309242132126.png" alt="image-20230924213203040" tabindex="0" loading="lazy"><figcaption>image-20230924213203040</figcaption></figure>
<h3 id="_4-4-case3-全体连坐" tabindex="-1"><a class="header-anchor" href="#_4-4-case3-全体连坐" aria-hidden="true">#</a> 4.4 case3：全体连坐</h3>
<p>官网说明：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202309191414682.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202309242133967.png" alt="image-20230924213309897" tabindex="0" loading="lazy"><figcaption>image-20230924213309897</figcaption></figure>
<p>一个语法出错，全体连坐。如果任何一个命令语法有错，Redis会直接返回错误，所有的命令都不会执行</p>
<h3 id="_4-5-case4-冤头债主" tabindex="-1"><a class="header-anchor" href="#_4-5-case4-冤头债主" aria-hidden="true">#</a> 4.5 case4：冤头债主</h3>
<p><strong>官网说明：</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202309191414223.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>补充：</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202309191414254.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202309242134227.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>注意和传统数据库事务的区别，不一定要么全部成功要么全部失败</strong></p>
<h3 id="_4-6-case5-watch监控" tabindex="-1"><a class="header-anchor" href="#_4-6-case5-watch监控" aria-hidden="true">#</a> 4.6 case5：watch监控</h3>
<ul>
<li>
<p><strong>Redis使用Watch来提供乐观锁定，类似于CAS(Check-and-Set)</strong></p>
<ol>
<li>
<p>悲观锁：悲观锁(Pessimistic Lock)，顾名思义，就是很悲观，每次去拿数据的时候都认为别人会修改，所以每次在拿数据的时候都会上锁，这样别人想拿这个数据就会block直到它拿到锁</p>
</li>
<li>
<p>乐观锁：乐观锁(Optimistic Lock)，顾名思义，就是很乐观，每次去拿数据的时候都认为别人不会修改，所以<code v-pre>不会上锁</code>，但是在更新的时候会判断一下在此期间别人有没有去更新这个数据。</p>
<p>乐观锁策略：<strong>提交版本必须大于记录当前版本才能执行更新</strong></p>
</li>
<li>
<p>CAS</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202309191414322.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ol>
</li>
</ul>
<h4 id="_1-watch是如何进行监控的呢" tabindex="-1"><a class="header-anchor" href="#_1-watch是如何进行监控的呢" aria-hidden="true">#</a> 1. watch是如何进行监控的呢</h4>
<p>Redis使用WATCH命令来决定事务是继续执行还是回滚，那就需要在MULTI之前使用WATCH来监控某些键值对，然后使用MULTI命令来开启事务，执行对数据结构操作的各种命令，此时这些命令入队列。</p>
<p>当使用EXEC执行事务时，首先会比对WATCH所监控的键值对，如果没发生改变，它会执行事务队列中的命令，提交事务；如果发生变化，将不会执行事务中的任何命令，同时事务回滚。当然无论是否回滚，Redis都会取消执行事务前的WATCH命令。</p>
<p>​	<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202309270934002.png" alt="image-20230927093415912" loading="lazy"></p>
<h4 id="_2-watch实现命令监控" tabindex="-1"><a class="header-anchor" href="#_2-watch实现命令监控" aria-hidden="true">#</a> 2. Watch实现命令监控</h4>
<p>在事务开始前用WATCH监控k1，之后修改k1为11，说明事务开始前k1值被改变，MULTI开始事务，修改k1值为12，k2为22，执行EXEC，发回nil，说明事务回滚；查看下k1、k2的值都没有被事务中的命令所改变。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> <span class="token builtin class-name">set</span> k1 v1
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> <span class="token builtin class-name">set</span> k2 v2
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> WATCH k1
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> <span class="token builtin class-name">set</span> k1 <span class="token number">11</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> MULTI
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> <span class="token builtin class-name">set</span> k1 <span class="token number">12</span>
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> <span class="token builtin class-name">set</span> k2 <span class="token number">22</span>
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> EXEC
<span class="token punctuation">(</span>nil<span class="token punctuation">)</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> get k1
<span class="token string">"11"</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> get k2
<span class="token string">"v2"</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>watch key [key ...]</strong></p>
<ol>
<li>
<p>初始化 <code v-pre>k1</code>和 <code v-pre>k2</code> 两个key，先监控在开启multi，保证两个key变动在同一个事务内</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202309242137608.png" alt="image-20230924213709534" tabindex="0" loading="lazy"><figcaption>image-20230924213709534</figcaption></figure>
<ol start="2">
<li>有加塞篡改：<strong>watch命令是一种乐观锁的实现</strong>，Redis在修改的时候会检测数据是否被更改，如果被更改了，则执行失败</li>
</ol>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202309242140320.png" alt="image-20230924214013255" tabindex="0" loading="lazy"><figcaption>image-20230924214013255</figcaption></figure>
<p>图中3和4不管哪个先执行，最终的结果都是整个事务执行失败</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202309191414788.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ol>
</li>
<li>
<p><strong>unwatch</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202309242141259.png" alt="image-20230924214108199" tabindex="0" loading="lazy"><figcaption>image-20230924214108199</figcaption></figure>
</li>
<li>
<p><strong>小结</strong></p>
<p>一旦执行了exec之前加的监控锁都会被取消掉</p>
<p>当客户端连接丢失的时候(比如退出链接)，所有东西都会被取消监视</p>
</li>
</ul>
<h3 id="_4-7-总结" tabindex="-1"><a class="header-anchor" href="#_4-7-总结" aria-hidden="true">#</a> 4.7 总结</h3>
<p><strong>开启：</strong> 以 <code v-pre>multi</code> 开始一个事务</p>
<p><strong>入队：</strong> 将多个命令入队到事务中，接到这些命令并不会立即执行，而是放到等待执行的事务队列里面</p>
<p><strong>执行：</strong> 有 <code v-pre>exec</code> 命令触发事务</p>
<h2 id="_5-redis事务执行步骤" tabindex="-1"><a class="header-anchor" href="#_5-redis事务执行步骤" aria-hidden="true">#</a> 5. Redis事务执行步骤</h2>
<p>通过上文命令执行，很显然Redis事务执行是三个阶段：</p>
<ul>
<li><strong>开启</strong>：以MULTI开始一个事务</li>
<li><strong>入队</strong>：将多个命令入队到事务中，接到这些命令并不会立即执行，而是放到等待执行的事务队列里面</li>
<li><strong>执行</strong>：由EXEC命令触发事务</li>
</ul>
<p>当一个客户端切换到事务状态之后， 服务器会根据这个客户端发来的不同命令执行不同的操作：</p>
<ul>
<li>如果客户端发送的命令为 EXEC 、 DISCARD 、 WATCH 、 MULTI 四个命令的其中一个， 那么服务器立即执行这个命令。</li>
<li>与此相反， 如果客户端发送的命令是 EXEC 、 DISCARD 、 WATCH 、 MULTI 四个命令以外的其他命令， 那么服务器并不立即执行这个命令， 而是将这个命令放入一个事务队列里面， 然后向客户端返回 QUEUED 回复。</li>
</ul>
<p>那我们如何通过一张图来判断**，服务器的判断命令是否是该入队还是该执行**。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202309270933286.png" alt="image-20230927093351198" tabindex="0" loading="lazy"><figcaption>image-20230927093351198</figcaption></figure>
<h2 id="_6-如何redis与事务的acid" tabindex="-1"><a class="header-anchor" href="#_6-如何redis与事务的acid" aria-hidden="true">#</a> 6. 如何Redis与事务的ACID</h2>
<blockquote>
<p>般来说，事务有四个性质称为ACID，分别是原子性，一致性，隔离性和持久性。这是基础，但是很多文章对Redis 是否支持ACID有一些异议，我觉的有必要</p>
<p>梳理下：</p>
</blockquote>
<ul>
<li><strong>原子性atomicity</strong></li>
</ul>
<p>首先通过上文知道 运行期的错误是不会回滚的，很多文章由此说Redis事务违背原子性的；而官方文档认为是遵从原子性的。</p>
<p>Redis官方文档给的理解是，<strong>Redis的事务是原子性的：所有的命令，要么全部执行，要么全部不执行</strong>。而不是完全成功。</p>
<ul>
<li><strong>一致性consistency</strong></li>
</ul>
<p>redis事务可以保证命令失败的情况下得以回滚，数据能恢复到没有执行之前的样子，是保证一致性的，除非redis进程意外终结。</p>
<ul>
<li><strong>隔离性Isolation</strong></li>
</ul>
<p>redis事务是严格遵守隔离性的，原因是redis是单进程单线程模式(v6.0之前），可以保证命令执行过程中不会被其他客户端命令打断。</p>
<p>但是，Redis不像其它结构化数据库有隔离级别这种设计。</p>
<ul>
<li><strong>持久性Durability</strong></li>
</ul>
<p><strong>redis事务是不保证持久性的</strong>，这是因为redis持久化策略中不管是RDB还是AOF都是异步执行的，不保证持久性是出于对性能的考虑。</p>
<h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>
<p>本文主要参考了</p>
<ul>
<li><a href="http://redisbook.com/preview/transaction/transaction_implement.html" target="_blank" rel="noopener noreferrer">http://redisbook.com/preview/transaction/transaction_implement.html<ExternalLinkIcon/></a></li>
<li><a href="http://ifeve.com/redis-transactions/" target="_blank" rel="noopener noreferrer">官方文档-事务<ExternalLinkIcon/></a></li>
<li><a href="https://www.runoob.com/redis/redis-transactions.html" target="_blank" rel="noopener noreferrer">https://www.runoob.com/redis/redis-transactions.html<ExternalLinkIcon/></a></li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312031906036.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


