<template><div><div class="hint-container tip">
<p class="hint-container-title">友情提示</p>
<p><strong>转载须知</strong>: 以下所有文章整理于B站宋红康老师的《MySQL数据库入门到大牛》。<a href="https://www.bilibili.com/video/BV1iq4y1u7vj?p=1&amp;vd_source=cea816a08805c218ac4390ae9b61ae31" target="_blank" rel="noopener noreferrer">MySQL</a></p>
</div>
<p>我们上一章讲到了 SQL 单行函数。实际上 SQL 函数还有一类，叫做聚合（或聚集、分组）函数，它是对一组数据进行汇总的函数，输入的是一组数据的集合，输出的是单个值。</p>
<h2 id="_1-聚合函数介绍" tabindex="-1"><a class="header-anchor" href="#_1-聚合函数介绍"><span>1. 聚合函数介绍</span></a></h2>
<ul>
<li><strong>什么是聚合函数</strong></li>
</ul>
<p>聚合函数作用于一组数据，并对一组数据返回一个值。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554980924940.png" alt="1554980924940" tabindex="0" loading="lazy"><figcaption>1554980924940</figcaption></figure>
<ul>
<li>
<p><strong>聚合函数类型</strong></p>
<ul>
<li><strong>AVG()</strong></li>
<li><strong>SUM()</strong></li>
<li><strong>MAX()</strong></li>
<li><strong>MIN()</strong></li>
<li>**COUNT() **</li>
</ul>
</li>
<li>
<p>聚合函数语法</p>
</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981029920.png" alt="1554981029920" tabindex="0" loading="lazy"><figcaption>1554981029920</figcaption></figure>
<ul>
<li>聚合函数不能嵌套调用。比如不能出现类似“AVG(SUM(字段名称))”形式的调用。</li>
</ul>
<h3 id="_1-1-avg和sum函数" tabindex="-1"><a class="header-anchor" href="#_1-1-avg和sum函数"><span>1.1 AVG和SUM函数</span></a></h3>
<p>可以对<strong>数值型数据</strong>使用AVG 和 SUM 函数。</p>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">SELECT</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> AVG</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(salary), </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">MAX</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(salary),</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">MIN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(salary), </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">SUM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(salary)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   employees</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">WHERE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  job_id </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">LIKE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '%REP%'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981279723.png" alt="1554981279723" tabindex="0" loading="lazy"><figcaption>1554981279723</figcaption></figure>
<h3 id="_1-2-min和max函数" tabindex="-1"><a class="header-anchor" href="#_1-2-min和max函数"><span>1.2 MIN和MAX函数</span></a></h3>
<p>可以对<strong>任意数据类型</strong>的数据使用 MIN 和 MAX 函数。</p>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">SELECT</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> MIN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(hire_date), </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">MAX</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(hire_date)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	  employees;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981253194.png" alt="1554981253194" tabindex="0" loading="lazy"><figcaption>1554981253194</figcaption></figure>
<h3 id="_1-3-count函数" tabindex="-1"><a class="header-anchor" href="#_1-3-count函数"><span>1.3 COUNT函数</span></a></h3>
<ul>
<li>COUNT(*)返回表中记录总数，适用于<strong>任意数据类型</strong>。</li>
</ul>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">SELECT</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> COUNT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(*)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	  employees</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">WHERE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  department_id </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 50</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981241299.png" alt="1554981241299" tabindex="0" loading="lazy"><figcaption>1554981241299</figcaption></figure>
<ul>
<li>COUNT(expr) 返回<strong>expr不为空</strong>的记录总数。</li>
</ul>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">SELECT</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> COUNT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(commission_pct)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   employees</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">WHERE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  department_id </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 50</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981328678.png" alt="1554981328678" tabindex="0" loading="lazy"><figcaption>1554981328678</figcaption></figure>
<ul>
<li>
<p><strong>问题：用count(*)，count(1)，count(列名)谁好呢?</strong></p>
<p>其实，对于MyISAM引擎的表是没有区别的。这种引擎内部有一计数器在维护着行数。</p>
<p>Innodb引擎的表用count(*),count(1)直接读行数，复杂度是O(n)，因为innodb真的要去数一遍。但好于具体的count(列名)。</p>
</li>
<li>
<p><strong>问题：能不能使用count(列名)替换count(*)?</strong></p>
<p>不要使用 count(列名)来替代 <code v-pre>count(*)</code>，<code v-pre>count(*)</code>是 SQL92 定义的标准统计行数的语法，跟数据库无关，跟 NULL 和非 NULL 无关。</p>
<p>说明：count(*)会统计值为 NULL 的行，而 count(列名)不会统计此列为 NULL 值的行。</p>
</li>
</ul>
<h2 id="_2-group-by" tabindex="-1"><a class="header-anchor" href="#_2-group-by"><span>2. GROUP BY</span></a></h2>
<h3 id="_2-1-基本使用" tabindex="-1"><a class="header-anchor" href="#_2-1-基本使用"><span>2.1 基本使用</span></a></h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981374920.png" alt="1554981374920" tabindex="0" loading="lazy"><figcaption>1554981374920</figcaption></figure>
<p><strong>可以使用GROUP BY子句将表中的数据分成若干组</strong></p>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> column, group_function(column)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">FROM</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> table</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">[WHERE	condition]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">[GROUP BY	group_by_expression]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">[ORDER BY	column]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>明确：WHERE一定放在FROM后面</strong></p>
</blockquote>
<p><strong>在SELECT列表中所有未包含在组函数中的列都应该包含在 GROUP BY子句中</strong></p>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   department_id, </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">AVG</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(salary)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">     employees</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">GROUP BY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> department_id ;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981539408.png" alt="1554981539408" tabindex="0" loading="lazy"><figcaption>1554981539408</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981544191.png" alt="1554981544191" tabindex="0" loading="lazy"><figcaption>1554981544191</figcaption></figure>
<p>包含在 GROUP BY 子句中的列不必包含在SELECT 列表中</p>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">SELECT</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">   AVG</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(salary)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">     employees</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">GROUP BY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> department_id ;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981574152.png" alt="1554981574152" tabindex="0" loading="lazy"><figcaption>1554981574152</figcaption></figure>
<h3 id="_2-2-使用多个列分组" tabindex="-1"><a class="header-anchor" href="#_2-2-使用多个列分组"><span>2.2 使用多个列分组</span></a></h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981607442.png" alt="1554981607442" tabindex="0" loading="lazy"><figcaption>1554981607442</figcaption></figure>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   department_id dept_id, job_id, </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">SUM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(salary)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">     employees</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">GROUP BY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> department_id, job_id ;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981624864.png" alt="1554981624864" tabindex="0" loading="lazy"><figcaption>1554981624864</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202308291644207.png" alt="1554981629733" tabindex="0" loading="lazy"><figcaption>1554981629733</figcaption></figure>
<h3 id="_2-3-group-by中使用with-rollup" tabindex="-1"><a class="header-anchor" href="#_2-3-group-by中使用with-rollup"><span>2.3 GROUP BY中使用WITH ROLLUP</span></a></h3>
<p>使用<code v-pre>WITH ROLLUP</code>关键字之后，在所有查询出的分组记录之后增加一条记录，该记录计算查询出的所有记录的总和，即统计记录数量。</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SELECT department_id,AVG(salary)</span></span>
<span class="line"><span>FROM employees</span></span>
<span class="line"><span>WHERE department_id > 80</span></span>
<span class="line"><span>GROUP BY department_id WITH ROLLUP;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：</p>
<p>当使用ROLLUP时，不能同时使用ORDER BY子句进行结果排序，即ROLLUP和ORDER BY是互相排斥的。</p>
</blockquote>
<h2 id="_3-having" tabindex="-1"><a class="header-anchor" href="#_3-having"><span>3. HAVING</span></a></h2>
<h3 id="_3-1-基本使用" tabindex="-1"><a class="header-anchor" href="#_3-1-基本使用"><span>3.1 基本使用</span></a></h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981656798.png" alt="1554981656798" tabindex="0" loading="lazy"><figcaption>1554981656798</figcaption></figure>
<p><strong>过滤分组：HAVING子句</strong></p>
<ol>
<li>行已经被分组。</li>
<li>使用了聚合函数。</li>
<li>满足HAVING 子句中条件的分组将被显示。</li>
<li>HAVING 不能单独使用，必须要跟 GROUP BY 一起使用。</li>
</ol>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981808091.png" alt="1554981808091" tabindex="0" loading="lazy"><figcaption>1554981808091</figcaption></figure>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   department_id, </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">MAX</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(salary)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">     employees</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">GROUP BY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> department_id</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">HAVING</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">   MAX</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(salary)</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">10000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981824564.png" alt="1554981824564" tabindex="0" loading="lazy"><figcaption>1554981824564</figcaption></figure>
<ul>
<li>**非法使用聚合函数 ： 不能在 WHERE 子句中使用聚合函数。**如下：</li>
</ul>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   department_id, </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">AVG</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(salary)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">     employees</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">WHERE</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    AVG</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(salary) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 8000</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">GROUP BY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> department_id;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554981724375.png" alt="1554981724375" tabindex="0" loading="lazy"><figcaption>1554981724375</figcaption></figure>
<h3 id="_3-2-where和having的对比" tabindex="-1"><a class="header-anchor" href="#_3-2-where和having的对比"><span>3.2 WHERE和HAVING的对比</span></a></h3>
<p><strong>区别1：WHERE 可以直接使用表中的字段作为筛选条件，但不能使用分组中的计算函数作为筛选条件；HAVING 必须要与 GROUP BY 配合使用，可以把分组计算的函数和分组字段作为筛选条件。</strong></p>
<p>这决定了，在需要对数据进行分组统计的时候，HAVING 可以完成 WHERE 不能完成的任务。这是因为，在查询语法结构中，WHERE 在 GROUP BY 之前，所以无法对分组结果进行筛选。HAVING 在 GROUP BY 之后，可以使用分组字段和分组中的计算函数，对分组的结果集进行筛选，这个功能是 WHERE 无法完成的。另外，WHERE排除的记录不再包括在分组中。</p>
<p><strong>区别2：如果需要通过连接从关联表中获取需要的数据，WHERE 是先筛选后连接，而 HAVING 是先连接后筛选。</strong> 这一点，就决定了在关联查询中，WHERE 比 HAVING 更高效。因为 WHERE 可以先筛选，用一个筛选后的较小数据集和关联表进行连接，这样占用的资源比较少，执行效率也比较高。HAVING 则需要先把结果集准备好，也就是用未被筛选的数据集进行关联，然后对这个大的数据集进行筛选，这样占用的资源就比较多，执行效率也较低。</p>
<p>小结如下：</p>
<table>
<thead>
<tr>
<th></th>
<th>优点</th>
<th>缺点</th>
</tr>
</thead>
<tbody>
<tr>
<td>WHERE</td>
<td>先筛选数据再关联，执行效率高</td>
<td>不能使用分组中的计算函数进行筛选</td>
</tr>
<tr>
<td>HAVING</td>
<td>可以使用分组中的计算函数</td>
<td>在最后的结果集中进行筛选，执行效率较低</td>
</tr>
</tbody>
</table>
<p><strong>开发中的选择：</strong></p>
<p>WHERE 和 HAVING 也不是互相排斥的，我们可以在一个查询里面同时使用 WHERE 和 HAVING。包含分组统计函数的条件用 HAVING，普通条件用 WHERE。这样，我们就既利用了 WHERE 条件的高效快速，又发挥了 HAVING 可以使用包含分组统计函数的查询条件的优点。当数据量特别大的时候，运行效率会有很大的差别。</p>
<h2 id="_4-select的执行过程" tabindex="-1"><a class="header-anchor" href="#_4-select的执行过程"><span>4. SELECT的执行过程</span></a></h2>
<h3 id="_4-1-查询的结构" tabindex="-1"><a class="header-anchor" href="#_4-1-查询的结构"><span>4.1 查询的结构</span></a></h3>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#方式1：</span></span>
<span class="line"><span>SELECT ...,....,...</span></span>
<span class="line"><span>FROM ...,...,....</span></span>
<span class="line"><span>WHERE 多表的连接条件</span></span>
<span class="line"><span>AND 不包含组函数的过滤条件</span></span>
<span class="line"><span>GROUP BY ...,...</span></span>
<span class="line"><span>HAVING 包含组函数的过滤条件</span></span>
<span class="line"><span>ORDER BY ... ASC/DESC</span></span>
<span class="line"><span>LIMIT ...,...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#方式2：</span></span>
<span class="line"><span>SELECT ...,....,...</span></span>
<span class="line"><span>FROM ... JOIN ... </span></span>
<span class="line"><span>ON 多表的连接条件</span></span>
<span class="line"><span>JOIN ...</span></span>
<span class="line"><span>ON ...</span></span>
<span class="line"><span>WHERE 不包含组函数的过滤条件</span></span>
<span class="line"><span>AND/OR 不包含组函数的过滤条件</span></span>
<span class="line"><span>GROUP BY ...,...</span></span>
<span class="line"><span>HAVING 包含组函数的过滤条件</span></span>
<span class="line"><span>ORDER BY ... ASC/DESC</span></span>
<span class="line"><span>LIMIT ...,...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#其中：</span></span>
<span class="line"><span>#（1）from：从哪些表中筛选</span></span>
<span class="line"><span>#（2）on：关联多表查询时，去除笛卡尔积</span></span>
<span class="line"><span>#（3）where：从表中筛选的条件</span></span>
<span class="line"><span>#（4）group by：分组依据</span></span>
<span class="line"><span>#（5）having：在统计结果中再次筛选</span></span>
<span class="line"><span>#（6）order by：排序</span></span>
<span class="line"><span>#（7）limit：分页</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-select执行顺序" tabindex="-1"><a class="header-anchor" href="#_4-2-select执行顺序"><span>4.2 SELECT执行顺序</span></a></h3>
<p>你需要记住 SELECT 查询时的两个顺序：</p>
<p><strong>1. 关键字的顺序是不能颠倒的：</strong></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY ... LIMIT...</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>2.SELECT 语句的执行顺序</strong>（在 MySQL 和 Oracle 中，SELECT 执行顺序基本相同）：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>FROM -> WHERE -> GROUP BY -> HAVING -> SELECT 的字段 -> DISTINCT -> ORDER BY -> LIMIT</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1566872301088.png" alt="1566872301088" tabindex="0" loading="lazy"><figcaption>1566872301088</figcaption></figure>
<p>比如你写了一个 SQL 语句，那么它的关键字顺序和执行顺序是下面这样的：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SELECT DISTINCT player_id, player_name, count(*) as num # 顺序 5</span></span>
<span class="line"><span>FROM player JOIN team ON player.team_id = team.team_id # 顺序 1</span></span>
<span class="line"><span>WHERE height > 1.80 # 顺序 2</span></span>
<span class="line"><span>GROUP BY player.team_id # 顺序 3</span></span>
<span class="line"><span>HAVING num > 2 # 顺序 4</span></span>
<span class="line"><span>ORDER BY num DESC # 顺序 6</span></span>
<span class="line"><span>LIMIT 2 # 顺序 7</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 SELECT 语句执行这些步骤的时候，每个步骤都会产生一个<code v-pre>虚拟表</code>，然后将这个虚拟表传入下一个步骤中作为输入。需要注意的是，这些步骤隐含在 SQL 的执行过程中，对于我们来说是不可见的。</p>
<h3 id="_4-3-sql-的执行原理" tabindex="-1"><a class="header-anchor" href="#_4-3-sql-的执行原理"><span>4.3 SQL 的执行原理</span></a></h3>
<p>SELECT 是先执行 FROM 这一步的。在这个阶段，如果是多张表联查，还会经历下面的几个步骤：</p>
<ol>
<li>首先先通过 CROSS JOIN 求笛卡尔积，相当于得到虚拟表 vt（virtual table）1-1；</li>
<li>通过 ON 进行筛选，在虚拟表 vt1-1 的基础上进行筛选，得到虚拟表 vt1-2；</li>
<li>添加外部行。如果我们使用的是左连接、右链接或者全连接，就会涉及到外部行，也就是在虚拟表 vt1-2 的基础上增加外部行，得到虚拟表 vt1-3。</li>
</ol>
<p>当然如果我们操作的是两张以上的表，还会重复上面的步骤，直到所有表都被处理完为止。这个过程得到是我们的原始数据。</p>
<p>当我们拿到了查询数据表的原始数据，也就是最终的虚拟表 <code v-pre>vt1</code>，就可以在此基础上再进行 <code v-pre>WHERE 阶段</code>。在这个阶段中，会根据 vt1 表的结果进行筛选过滤，得到虚拟表 <code v-pre>vt2</code>。</p>
<p>然后进入第三步和第四步，也就是 <code v-pre>GROUP 和 HAVING 阶段</code>。在这个阶段中，实际上是在虚拟表 vt2 的基础上进行分组和分组过滤，得到中间的虚拟表 <code v-pre>vt3</code> 和 <code v-pre>vt4</code>。</p>
<p>当我们完成了条件筛选部分之后，就可以筛选表中提取的字段，也就是进入到 <code v-pre>SELECT 和 DISTINCT 阶段</code>。</p>
<p>首先在 SELECT 阶段会提取想要的字段，然后在 DISTINCT 阶段过滤掉重复的行，分别得到中间的虚拟表 <code v-pre>vt5-1</code> 和 <code v-pre>vt5-2</code>。</p>
<p>当我们提取了想要的字段数据之后，就可以按照指定的字段进行排序，也就是 <code v-pre>ORDER BY 阶段</code>，得到虚拟表 <code v-pre>vt6</code>。</p>
<p>最后在 vt6 的基础上，取出指定行的记录，也就是 <code v-pre>LIMIT 阶段</code>，得到最终的结果，对应的是虚拟表 <code v-pre>vt7</code>。</p>
<p>当然我们在写 SELECT 语句的时候，不一定存在所有的关键字，相应的阶段就会省略。</p>
<p>同时因为 SQL 是一门类似英语的结构化查询语言，所以我们在写 SELECT 语句的时候，还要注意相应的关键字顺序，<strong>所谓底层运行的原理，就是我们刚才讲到的执行顺序。</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312031906036.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


