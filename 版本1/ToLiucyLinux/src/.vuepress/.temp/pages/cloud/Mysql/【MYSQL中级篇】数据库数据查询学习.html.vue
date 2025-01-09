<template><div><figure><img src="https://img-blog.csdnimg.cn/dfc7ac4d3ca04b14a86dc0b603e40e17.jpeg#pic_center" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<blockquote>
<p>🍁<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！</p>
</blockquote>
<h1 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章" aria-hidden="true">#</a> 相关文章</h1>
<table>
<thead>
<tr>
<th>文章名</th>
<th>文章地址</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/128396592" target="_blank" rel="noopener noreferrer">【MYSQL初级篇】入门学习【增删改查-库表数据】<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/128396592" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/128396592<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/128717294" target="_blank" rel="noopener noreferrer">【MYSQL中级篇】数据库数据查询学习<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/128717294" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/128717294<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p>@<a href="MYSQL%E4%B8%AD%E7%BA%A7%E7%AF%87%E5%AD%A6%E4%B9%A0%E7%9B%AE%E5%BD%95">toc</a></p>
<h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1>
<blockquote>
<p>没有安装mysql的，大家可参考【 <a href="https://liucy.blog.csdn.net/article/details/124930789" target="_blank" rel="noopener noreferrer">Centos7安装Mysql5.7（超详细版）<ExternalLinkIcon/></a>】、【<a href="https://liucy.blog.csdn.net/article/details/126288434" target="_blank" rel="noopener noreferrer">【云原生】Docker之创建并进入mysql容器<ExternalLinkIcon/></a>】 两种方式任选其一来安装；</p>
</blockquote>
<p>SQL语句</p>
<ul>
<li>DDL	数据定义语言 create drop alter</li>
<li>DML	数据操纵语言 update delete insert</li>
<li>DQL	数据查询语言 select</li>
<li>DCL	数据控制语言 grant revoke</li>
</ul>
<h2 id="排序查询" tabindex="-1"><a class="header-anchor" href="#排序查询" aria-hidden="true">#</a> 排序查询</h2>
<ul>
<li>desc	降序</li>
<li>asc	升序</li>
<li>limit 1	取第一行</li>
</ul>
<blockquote>
<p>mysql order by排序默认为<font color=red>升序（从小到大）</font></p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#排序；默认为升序</span>
<span class="token keyword">select</span> * from 表名 order by <span class="token function">id</span><span class="token punctuation">;</span>（根据id排序）

<span class="token comment">#取行数</span>
<span class="token keyword">select</span> * from 表名 limit 偏移量,行数<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#根据score排序，默认为升序</span>
<span class="token keyword">select</span> * from student order by score<span class="token punctuation">;</span>

<span class="token comment">#根据id排序，升序（从小到大）</span>
<span class="token keyword">select</span> * from student order by <span class="token function">id</span> asc<span class="token punctuation">;</span>

<span class="token comment">#根据score排序，降序（从大到小）</span>
<span class="token keyword">select</span> * from student order by score desc<span class="token punctuation">;</span>

<span class="token comment">#偏移量为2，取5行；（取第3行到第7行）</span>
<span class="token keyword">select</span> * from student limit <span class="token number">2,5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/6ff71a3845314e469bf33ee0667a750b.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="分组查询" tabindex="-1"><a class="header-anchor" href="#分组查询" aria-hidden="true">#</a> 分组查询</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">select</span> * from 表名 group by 字段<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#按分数打包分组(打包相同的分数)</span>
<span class="token keyword">select</span> * from student group by score<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如遇到以下报错，可了解 <a href="https://blog.csdn.net/weixin_44013783/article/details/119422353" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/weixin_44013783/article/details/119422353<ExternalLinkIcon/></a>、<a href="https://blog.csdn.net/W_317/article/details/116723943" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/W_317/article/details/116723943<ExternalLinkIcon/></a><br>
<img src="https://img-blog.csdnimg.cn/d1ef12a4f71b4683aabdb37d845014f1.png" alt="在这里插入图片描述" loading="lazy"></p>
<h2 id="去重查询" tabindex="-1"><a class="header-anchor" href="#去重查询" aria-hidden="true">#</a> 去重查询</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">select</span> distinct 字段 from 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#去除相同的分数</span>
<span class="token keyword">select</span> distinct score from student<span class="token punctuation">;</span>
<span class="token keyword">select</span> distinct score as <span class="token string">'分数'</span> from student<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/d59478161b654075bbf949112bb40425.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="聚合函数" tabindex="-1"><a class="header-anchor" href="#聚合函数" aria-hidden="true">#</a> 聚合函数</h2>
<ul>
<li>max()	 最大值</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">select</span> max<span class="token punctuation">(</span>字段<span class="token punctuation">)</span> from 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查找最高的分数，显示姓名和分数</span>
<span class="token keyword">select</span> name as <span class="token string">'姓名'</span>,max<span class="token punctuation">(</span>score<span class="token punctuation">)</span> as <span class="token string">'分数'</span> from student<span class="token punctuation">;</span>

+----+-------+
<span class="token operator">|</span> 姓名 <span class="token operator">|</span> 分数 <span class="token operator">|</span>
+----+-------+
<span class="token operator">|</span> 老六 <span class="token operator">|</span> <span class="token number">125</span> <span class="token operator">|</span>
+----+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>min() 	最小值</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">select</span> min<span class="token punctuation">(</span>字段<span class="token punctuation">)</span> from 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查找最底的分数，显示姓名、性别、年龄、分数；</span>
<span class="token keyword">select</span> name as <span class="token string">'姓名'</span>,sex as <span class="token string">'性别'</span>,age as <span class="token string">'年龄'</span>,min<span class="token punctuation">(</span>score<span class="token punctuation">)</span> as <span class="token string">'分数'</span> from student<span class="token punctuation">;</span>

+-----+----+-----+-------+
<span class="token operator">|</span> 姓名 <span class="token operator">|</span> 性别 <span class="token operator">|</span> 年龄 <span class="token operator">|</span> 分数 <span class="token operator">|</span>
+-----+----+-----+-------+
<span class="token operator">|</span> 王五 <span class="token operator">|</span>  男  <span class="token operator">|</span> <span class="token number">15</span> <span class="token operator">|</span>  <span class="token number">100</span> <span class="token operator">|</span>
+-----+----+-----+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>sum() 	和</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">select</span> sum<span class="token punctuation">(</span>字段<span class="token punctuation">)</span> from 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查询班级的总分</span>
<span class="token keyword">select</span> sum<span class="token punctuation">(</span>score<span class="token punctuation">)</span> as <span class="token string">'班级总分'</span> from student<span class="token punctuation">;</span>

+---------+
<span class="token operator">|</span> 班级总分 <span class="token operator">|</span>
+---------+
<span class="token operator">|</span>  <span class="token number">1546</span>   <span class="token operator">|</span>
+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>count()	 统计</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">select</span> count<span class="token punctuation">(</span>字段<span class="token punctuation">)</span> from 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#统计班级有多少个人</span>
<span class="token keyword">select</span> count<span class="token punctuation">(</span>*<span class="token punctuation">)</span> as <span class="token string">'班级总人数'</span> from student<span class="token punctuation">;</span>

+----------+
<span class="token operator">|</span> 班级总人数 <span class="token operator">|</span>
+----------+
<span class="token operator">|</span>    <span class="token number">13</span>    <span class="token operator">|</span>
+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>avg() 	平均数</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">select</span> avg<span class="token punctuation">(</span>字段<span class="token punctuation">)</span> from 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#计算班级总分的平均分</span>
<span class="token keyword">select</span> avg<span class="token punctuation">(</span>score<span class="token punctuation">)</span> as <span class="token string">'班级平均分'</span> from student<span class="token punctuation">;</span>

+----------+
<span class="token operator">|</span> 班级平均分 <span class="token operator">|</span>
+----------+
<span class="token operator">|</span> <span class="token number">118.9231</span> <span class="token operator">|</span>
+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>综合：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#统计班级的总人数、总分及平均分</span>
<span class="token keyword">select</span> count<span class="token punctuation">(</span>*<span class="token punctuation">)</span> as <span class="token string">'班级总人数'</span>,sum<span class="token punctuation">(</span>score<span class="token punctuation">)</span> as <span class="token string">'班级总分'</span>,avg<span class="token punctuation">(</span>score<span class="token punctuation">)</span> as <span class="token string">'班级平均分'</span> from student<span class="token punctuation">;</span>

+---------+----------+----------+
<span class="token operator">|</span> 班级总人数 <span class="token operator">|</span> 班级总分 <span class="token operator">|</span> 班级平均分 <span class="token operator">|</span>
+---------+----------+----------+
<span class="token operator">|</span>    <span class="token number">13</span>    <span class="token operator">|</span>   <span class="token number">1546</span>  <span class="token operator">|</span> <span class="token number">118.9231</span> <span class="token operator">|</span>
+---------+----------+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>with rollup	 对聚合结果进行汇总</li>
</ul>
<blockquote>
<p>使用 with rollup，此函数是对聚合函数进行求和，注意 with rollup是对 group by 后的第一个字段，进行分组求和。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#按分数分组，并计算出各组人数、总分、平均分，在做全部统计</span>
<span class="token keyword">select</span> count<span class="token punctuation">(</span>*<span class="token punctuation">)</span>,sum<span class="token punctuation">(</span>score<span class="token punctuation">)</span>,avg<span class="token punctuation">(</span>score<span class="token punctuation">)</span> from student group by score with rollup<span class="token punctuation">;</span>
<span class="token keyword">select</span> count<span class="token punctuation">(</span>*<span class="token punctuation">)</span> as <span class="token string">'各组人数'</span>,sum<span class="token punctuation">(</span>score<span class="token punctuation">)</span> as <span class="token string">'各组总分'</span>,avg<span class="token punctuation">(</span>score<span class="token punctuation">)</span> as <span class="token string">'各组平均分'</span> from student group by score with rollup<span class="token punctuation">;</span>

+---------+---------+----------+
<span class="token operator">|</span> 各组人数 <span class="token operator">|</span> 各组总分 <span class="token operator">|</span> 各组平均分 <span class="token operator">|</span>
+---------+---------+----------+
<span class="token operator">|</span>       <span class="token number">2</span> <span class="token operator">|</span>     <span class="token number">246</span> <span class="token operator">|</span> <span class="token number">123.0000</span> <span class="token operator">|</span>
<span class="token operator">|</span>       <span class="token number">3</span> <span class="token operator">|</span>     <span class="token number">360</span> <span class="token operator">|</span> <span class="token number">120.0000</span> <span class="token operator">|</span>
<span class="token operator">|</span>       <span class="token number">2</span> <span class="token operator">|</span>     <span class="token number">242</span> <span class="token operator">|</span> <span class="token number">121.0000</span> <span class="token operator">|</span>
<span class="token operator">|</span>       <span class="token number">2</span> <span class="token operator">|</span>     <span class="token number">200</span> <span class="token operator">|</span> <span class="token number">100.0000</span> <span class="token operator">|</span>
<span class="token operator">|</span>       <span class="token number">2</span> <span class="token operator">|</span>     <span class="token number">248</span> <span class="token operator">|</span> <span class="token number">124.0000</span> <span class="token operator">|</span>
<span class="token operator">|</span>       <span class="token number">2</span> <span class="token operator">|</span>     <span class="token number">250</span> <span class="token operator">|</span> <span class="token number">125.0000</span> <span class="token operator">|</span>
<span class="token operator">|</span>      <span class="token number">13</span> <span class="token operator">|</span>    <span class="token number">1546</span> <span class="token operator">|</span> <span class="token number">118.9231</span> <span class="token operator">|</span>
+---------+---------+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>having	   对于聚合后的结果进行过滤，如果逻辑允许，多用where</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查询分数小于120的人</span>
<span class="token keyword">select</span> * from student having score<span class="token operator">&lt;</span><span class="token number">120</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/6da2421525384779acac663b87c661c0.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>where   用于聚合前，having用于聚合后。</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查询性别为女的人</span>
<span class="token keyword">select</span> * from student where <span class="token assign-left variable">sex</span><span class="token operator">=</span><span class="token string">'女'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/64ad23fa16cf47a9adf15052864ba92d.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="比较运算符查询" tabindex="-1"><a class="header-anchor" href="#比较运算符查询" aria-hidden="true">#</a> 比较运算符查询</h2>
<ul>
<li>等于: =</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查询性别是男的学生</span>
<span class="token keyword">select</span> * from student where <span class="token assign-left variable">sex</span><span class="token operator">=</span><span class="token string">'男'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/0f87bc58f9fe4b149bbf0f5a532ac4fc.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>大于: &gt;</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查询年龄大于15的学生</span>
<span class="token keyword">select</span> * from student where age<span class="token operator">></span><span class="token number">15</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/2cf9e050638c49eca97d2251caeb9e73.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>大于等于: &gt;=</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查询年龄大于等于15的学生</span>
<span class="token keyword">select</span> * from student where age<span class="token operator">>=</span><span class="token number">15</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/ac2034d1ccdc4a5997554167294d15e0.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>小于: &lt;</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查询分数小于122的学生</span>
<span class="token keyword">select</span> * from student where score<span class="token operator">&lt;</span><span class="token number">122</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/07c660da564940e6b885782c596311e4.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>小于等于: &lt;=</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查询分数小于等于122的学生</span>
<span class="token keyword">select</span> * from student where score<span class="token operator">&lt;=</span><span class="token number">122</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/64aa6bdf188c4914a9daf9bdeb1c336e.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>不等于: != 或 &lt;&gt;</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查询学生性别不是男生的</span>
<span class="token keyword">select</span> * from student where sex<span class="token operator">!=</span><span class="token string">'男'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/b1b4365e31944ef88e1e33087cb328e8.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查询学生性别不是女生的</span>
<span class="token keyword">select</span> * from student where sex<span class="token operator">&lt;></span><span class="token string">'女'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/c0a2c14e4ec8415fa255eb2b05ee16f8.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="逻辑运算符查询" tabindex="-1"><a class="header-anchor" href="#逻辑运算符查询" aria-hidden="true">#</a> 逻辑运算符查询</h2>
<ul>
<li>and 和，要同时符合这两个条件或多个条件；</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查询学生分数高于122的男同学</span>
<span class="token keyword">select</span> * from student where score<span class="token operator">></span><span class="token number">122</span> and <span class="token assign-left variable">sex</span><span class="token operator">=</span><span class="token string">'男'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/ae93199fac9d4abd849f3dae70c559a0.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>or 或，满足其中一个条件即可，两者都有则都输出；</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查询年龄大于18或小于20的学生</span>
<span class="token keyword">select</span> * from student where age<span class="token operator">></span><span class="token number">18</span> or age<span class="token operator">&lt;</span><span class="token number">20</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/763e832d00df449b895e2a8e923bcb02.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>not 不，不要指定条件的数据；</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查询分数不在120到123的学生</span>
<span class="token keyword">select</span> * from student where not <span class="token punctuation">(</span>score<span class="token operator">>=</span><span class="token number">120</span> and score<span class="token operator">&lt;=</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/f7ce1732f9bc4089b9a5b130f3319b96.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<blockquote>
<p>多个条件判断想要作为一个整体的时候，可以使用<font color=red>()</font>。</p>
</blockquote>
<h2 id="模糊查询" tabindex="-1"><a class="header-anchor" href="#模糊查询" aria-hidden="true">#</a> 模糊查询</h2>
<p>新增3条模糊查询要用到的数据</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>insert into student values <span class="token punctuation">(</span>null,<span class="token string">'张九'</span>,<span class="token string">'男'</span>,15,7.12,<span class="token string">'北京市朝阳区某小区1号楼1单元103'</span>,<span class="token string">'zhangjiu@163.com'</span>,16839217282,122<span class="token punctuation">)</span><span class="token punctuation">;</span>
insert into student values <span class="token punctuation">(</span>null,<span class="token string">'张时嘉'</span>,<span class="token string">'女'</span>,17,12.12,<span class="token string">'北京市朝阳区某小区1号楼1单元102'</span>,<span class="token string">'zhangsj@163.com'</span>,13307189235,124.5<span class="token punctuation">)</span>,<span class="token punctuation">(</span>null,<span class="token string">'张时依'</span>,<span class="token string">'女'</span>,17,12.12,<span class="token string">'北京市朝阳区某小区1号楼1单元102'</span>,<span class="token string">'zhangsy@163.com'</span>,13307189236,125<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>like是模糊查询关键字</p>
</li>
<li>
<p>%表示任意多个任意字符</p>
</li>
<li>
<p>_表示一个任意字符</p>
</li>
</ul>
<p><strong>例1：查询姓张的学生都有谁</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查询姓张的学生都有谁</span>
<span class="token keyword">select</span> name from student where name like <span class="token string">"张%"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/eb03bad4cc674299ab6d532d349aebed.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>例2：查询姓张的两个字的学生都有谁</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查询姓张的两个字的学生都有谁</span>
<span class="token keyword">select</span> * from student where name like <span class="token string">"张_"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/420af16e5f5e462496b4e045a48950eb.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>例3：查询三个字的学生都有谁</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查询三个字的学生都有谁</span>
<span class="token keyword">select</span> * from student where name like <span class="token string">"___"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/fe2b83875cf24204ac8e8f14a8fe5678.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>例4：查询手机号以16开头的学生</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查询手机号以16开头的学生</span>
<span class="token keyword">select</span> * from student where iphone like <span class="token string">"16%"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/ad464092ca4543f3abc8cc8fc49b2fd5.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>例5：查询姓老的或是名字中带时的都有谁</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查询姓老的或是名字中带时的都有谁</span>
<span class="token keyword">select</span> * from student where name like <span class="token string">"老%"</span> or name like <span class="token string">"%时%"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/1f29a751f46e4b3c80df6d5202bef860.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="范围查询" tabindex="-1"><a class="header-anchor" href="#范围查询" aria-hidden="true">#</a> 范围查询</h2>
<ul>
<li>between .. and .. 表示在一个连续的范围内查询</li>
<li>in 表示在一个非连续的范围内查询</li>
</ul>
<p><strong>例1：查询生日6月01日到9月31日的学生</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查询生日6月01日到9月31日的学生</span>
<span class="token keyword">select</span> * from student where birthday between <span class="token string">"6.01"</span>and<span class="token string">"9.31"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/5d90106a3dbf4e4cace2fb813735969c.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>例2：查询地址为1单元103到109之间的男同学</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查询地址为1单元103到109之间的男同学</span>
<span class="token keyword">select</span> * from student where <span class="token punctuation">(</span>address between <span class="token string">"北京市朝阳区某小区1号楼1单元103"</span>and<span class="token string">"北京市朝阳区某小区1号楼1单元109"</span><span class="token punctuation">)</span> and <span class="token assign-left variable">sex</span><span class="token operator">=</span><span class="token string">'男'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/87aeaf3de82947229b759427adaa9aa5.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>例3：查询id为1和22的两个学生</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查询id为1和22的两个学生</span>
<span class="token keyword">select</span> * from student where <span class="token function">id</span> in<span class="token punctuation">(</span><span class="token number">1,22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/009e63e84e3c43aabe83a7703057b955.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<blockquote>
<p>IN 列表项不仅支持数字，也支持字符甚至时间日期类型等，并且可以将这些不同类型的数据项混合排列而无须跟 column 的类型保持一致：<br>
一个 IN 只能对一个字段进行范围比对，如果要指定更多字段，可以使用 AND 或 OR 逻辑运算符：<br>
使用 AND 或 OR 逻辑运算符后，IN 还可以和其他如 LIKE、&gt;=、= 等运算符一起使用。</p>
</blockquote>
<h2 id="空判断查询" tabindex="-1"><a class="header-anchor" href="#空判断查询" aria-hidden="true">#</a> 空判断查询</h2>
<ul>
<li>判断为空使用: is null</li>
<li>判断非空使用: is not null</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查询邮件是空的学生</span>
<span class="token keyword">select</span> * from student where email is null<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查询邮件不是空的学生</span>
<span class="token keyword">select</span> * from student where email is not null<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>不能使用 where height = null 判断为空<br>
不能使用 where height != null 判断非空<br>
null 不等于<font color=red> 空字符串</font></p>
</blockquote>
<h2 id="多表联查" tabindex="-1"><a class="header-anchor" href="#多表联查" aria-hidden="true">#</a> 多表联查</h2>
<p>新增一个表</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>create table body <span class="token punctuation">(</span>id int<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> ZEROFILL PRIMARY KEY AUTO_INCREMENT comment<span class="token string">'id'</span>,name varchar<span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> not null comment<span class="token string">'姓名'</span>,height varchar<span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> comment<span class="token string">'身高'</span>,weight varchar<span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> not null comment<span class="token string">'体重'</span>,heartbeat int comment<span class="token string">'心跳/每分钟'</span><span class="token punctuation">)</span>comment<span class="token operator">=</span><span class="token string">'学生身体表'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>新增数据</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>insert into body values <span class="token punctuation">(</span>null,<span class="token string">'张三'</span>,<span class="token string">'177.2'</span>,<span class="token string">'140.4'</span>,99<span class="token punctuation">)</span>,<span class="token punctuation">(</span>null,<span class="token string">'李四'</span>,<span class="token string">'180'</span>,<span class="token string">'149.2'</span>,80<span class="token punctuation">)</span>,<span class="token punctuation">(</span>null,<span class="token string">'王五'</span>,<span class="token string">'167.9'</span>,<span class="token string">'141'</span>,80<span class="token punctuation">)</span>,<span class="token punctuation">(</span>null,<span class="token string">'老六'</span>,<span class="token string">'173'</span>,<span class="token string">'128'</span>,77<span class="token punctuation">)</span>,<span class="token punctuation">(</span>null,<span class="token string">'小七'</span>,<span class="token string">'159.5'</span>,<span class="token string">'90.8'</span>,89<span class="token punctuation">)</span>,<span class="token punctuation">(</span>null,<span class="token string">'老八'</span>,<span class="token string">'169.9'</span>,<span class="token string">'145.2'</span>,78<span class="token punctuation">)</span>,<span class="token punctuation">(</span>null,<span class="token string">'张九'</span>,<span class="token string">'169'</span>,<span class="token string">'120.5'</span>,82<span class="token punctuation">)</span>,<span class="token punctuation">(</span>null,<span class="token string">'张时嘉'</span>,<span class="token string">'168'</span>,<span class="token string">'83'</span>,79<span class="token punctuation">)</span>,<span class="token punctuation">(</span>null,<span class="token string">'张时依'</span>,<span class="token string">'168.3'</span>,<span class="token string">'83.4'</span>,82<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="两表联查内连接" tabindex="-1"><a class="header-anchor" href="#两表联查内连接" aria-hidden="true">#</a> 两表联查内连接</h3>
<blockquote>
<p>两表联查必须加上where 表1 id=表2 id，否则查询出来会有很多重复的数据，你写了几个字段，就会查询到多少字段的重复数据；</p>
</blockquote>
<p><strong>内连接格式：</strong><font color=red><strong>A inner join B on 条件</strong></font></p>
<blockquote>
<p><strong>例子：</strong><br>
select * from A inner join B on 条件；<br>
select * from A inner join B on 条件 where 条件；<br>
select * from A inner join B on 条件 where 条件 having 条件；<br>
select * from A inner join B on 条件 order by 字段；<br>
select * from A inner join B on 条件 where 条件 order by 字段；<br>
select * from A inner join B on 条件 where 条件 having 条件 order by 字段；</p>
</blockquote>
<p><strong>例1：查询student表姓名、性别、年龄，body表身高、体重、心跳；</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#两表联查：查询student表姓名、性别、年龄，body表身高、体重、心跳；</span>
<span class="token keyword">select</span> student.name as <span class="token string">'姓名'</span>,student.sex as <span class="token string">'性别'</span>,student.age as <span class="token string">'年龄'</span>,body.height as <span class="token string">'身高'</span>,body.weight as <span class="token string">'体重'</span>,body.heartbeat as <span class="token string">'心跳/每分钟'</span> from student,body where <span class="token assign-left variable">student.id</span><span class="token operator">=</span>body.id<span class="token punctuation">;</span>

<span class="token comment">#别名两表联查：查询student表姓名、性别、年龄，body表身高、体重、心跳；</span>
<span class="token keyword">select</span> a.name as <span class="token string">'姓名'</span>,a.sex as <span class="token string">'性别'</span>,a.age as <span class="token string">'年龄'</span>,b.height as <span class="token string">'身高'</span>,b.weight as <span class="token string">'体重'</span>,b.heartbeat as <span class="token string">'心跳/每分钟'</span> from student a,body b where <span class="token assign-left variable">a.id</span><span class="token operator">=</span>b.id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/91baa77494f7411c89800b9ff8e2b6ac.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>例2：查询student表姓名、性别、年龄、分数，body表身高、体重、心跳，并只显示成绩大于等于122的学生；</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#别名两表联查：查询student表姓名、性别、年龄、分数，body表身高、体重、心跳，并只显示成绩大于等于122的学生；</span>
<span class="token keyword">select</span> a.name as <span class="token string">'姓名'</span>,a.sex as <span class="token string">'性别'</span>,a.age as <span class="token string">'年龄'</span>,b.height as <span class="token string">'身高'</span>,b.weight as <span class="token string">'体重'</span>,b.heartbeat as <span class="token string">'心跳/每分钟'</span>,a.score as <span class="token string">'分数'</span> from student a,body b where <span class="token assign-left variable">a.id</span><span class="token operator">=</span>b.id having score<span class="token operator">>=</span><span class="token number">122</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/64154ab9de524641a226dfc6ada15121.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>例3：查询student表姓名、性别、年龄、分数，body表身高、体重、心跳，并只显示成绩大于等于122的女学生；</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#别名两表联查内连接：查询student表姓名、性别、年龄、分数，body表身高、体重、心跳，并只显示成绩大于等于122的女学生；</span>
<span class="token keyword">select</span> a.name as <span class="token string">'姓名'</span>,a.sex as <span class="token string">'性别'</span>,a.age as <span class="token string">'年龄'</span>,b.height as <span class="token string">'身高'</span>,b.weight as <span class="token string">'体重'</span>,b.heartbeat as <span class="token string">'心跳/每分钟'</span>,a.score as <span class="token string">'分数'</span> from student a inner <span class="token function">join</span> body b on <span class="token assign-left variable">a.id</span><span class="token operator">=</span>b.id where score<span class="token operator">>=</span><span class="token number">122</span> having <span class="token assign-left variable">sex</span><span class="token operator">=</span><span class="token string">'女'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/2b4e2f0d625c4dc381dc5159447bbda7.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>例4：查询student表姓名、性别、年龄、分数，body表身高、体重、心跳，并只显示成绩大于等于122的女学生且从大到小排序；</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#别名两表联查内连接：查询student表姓名、性别、年龄、分数，body表身高、体重、心跳，并只显示成绩大于等于122的女学生且从大到小排序；</span>
<span class="token keyword">select</span> a.name as <span class="token string">'姓名'</span>,a.sex as <span class="token string">'性别'</span>,a.age as <span class="token string">'年龄'</span>,b.height as <span class="token string">'身高'</span>,b.weight as <span class="token string">'体重'</span>,b.heartbeat as <span class="token string">'心跳/每分钟'</span>,a.score as <span class="token string">'分数'</span> from student a inner <span class="token function">join</span> body b on <span class="token assign-left variable">a.id</span><span class="token operator">=</span>b.id where score<span class="token operator">>=</span><span class="token number">122</span> having <span class="token assign-left variable">sex</span><span class="token operator">=</span><span class="token string">'女'</span> order by score desc<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/02be73306a61416e8110d0a2478c59ad.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="两表联查左连接" tabindex="-1"><a class="header-anchor" href="#两表联查左连接" aria-hidden="true">#</a> 两表联查左连接</h3>
<blockquote>
<p>两表联查必须加上where 表1 id=表2 id，否则查询出来会有很多重复的数据，你写了几个字段，就会查询到多少字段的重复数据；</p>
</blockquote>
<p><strong>内连接格式：</strong><font color=red><strong>A left join B on 条件</strong></font></p>
<blockquote>
<p><strong>例子：</strong><br>
select * from A left join B on 条件；<br>
select * from A left join B on 条件 where 条件；<br>
select * from A left join B on 条件 where 条件 having 条件；<br>
select * from A left  join B on 条件 order by 字段；<br>
select * from A left join B on 条件 where 条件 order by 字段；<br>
select * from A left join B on 条件 where 条件 having 条件 order by 字段；</p>
</blockquote>
<p><strong>例1：查询student表姓名、性别、年龄，body表身高；</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#别名两表联查左连接：查询student表姓名、性别、年龄，body表身高；</span>
<span class="token keyword">select</span> a.name as <span class="token string">'姓名'</span>,a.sex as <span class="token string">'性别'</span>,a.age as <span class="token string">'年龄'</span>,b.height as <span class="token string">'身高'</span> from student a left <span class="token function">join</span> body b on <span class="token assign-left variable">a.id</span><span class="token operator">=</span>b.id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/1c58424240b54854ad748b9d2297e600.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>例2：查询student表姓名、性别、年龄、分数，body表身高、体重、心跳，并只显示成绩大于等于122的学生；</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#别名两表联查左连接：查询student表姓名、性别、年龄、分数，body表身高、体重、心跳，并只显示成绩大于等于122的学生；</span>
<span class="token keyword">select</span> a.name as <span class="token string">'姓名'</span>,a.sex as <span class="token string">'性别'</span>,a.age as <span class="token string">'年龄'</span>,b.height as <span class="token string">'身高'</span>,b.weight as <span class="token string">'体重'</span>,b.heartbeat as <span class="token string">'心跳/每分钟'</span>,a.score as <span class="token string">'分数'</span> from student a left <span class="token function">join</span> body b on <span class="token assign-left variable">a.id</span><span class="token operator">=</span>b.id where score<span class="token operator">>=</span><span class="token number">122</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/386ed25fe148407f9c9b346c29b22d88.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>例3：查询student表姓名、性别、年龄、分数，body表身高、体重、心跳，并只显示成绩大于等于122的女学生；</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#别名两表联查左连接：查询student表姓名、性别、年龄、分数，body表身高、体重、心跳，并只显示成绩大于等于122的女学生；</span>
<span class="token keyword">select</span> a.name as <span class="token string">'姓名'</span>,a.sex as <span class="token string">'性别'</span>,a.age as <span class="token string">'年龄'</span>,b.height as <span class="token string">'身高'</span>,b.weight as <span class="token string">'体重'</span>,b.heartbeat as <span class="token string">'心跳/每分钟'</span>,a.score as <span class="token string">'分数'</span> from student a left <span class="token function">join</span> body b on <span class="token assign-left variable">a.id</span><span class="token operator">=</span>b.id where score<span class="token operator">>=</span><span class="token number">122</span> having <span class="token assign-left variable">sex</span><span class="token operator">=</span><span class="token string">'女'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/2f4c3cf0ce1f4af681d5cedec4eef2ad.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>例4：查询student表姓名、性别、年龄、分数，body表身高、体重、心跳，并只显示成绩大于等于122的女学生且从大到小排序；</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#别名两表联查左连接：查询student表姓名、性别、年龄、分数，body表身高、体重、心跳，并只显示成绩大于等于122的女学生且从大到小排序；</span>
<span class="token keyword">select</span> a.name as <span class="token string">'姓名'</span>,a.sex as <span class="token string">'性别'</span>,a.age as <span class="token string">'年龄'</span>,b.height as <span class="token string">'身高'</span>,b.weight as <span class="token string">'体重'</span>,b.heartbeat as <span class="token string">'心跳/每分钟'</span>,a.score as <span class="token string">'分数'</span> from student a left <span class="token function">join</span> body b on <span class="token assign-left variable">a.id</span><span class="token operator">=</span>b.id where score<span class="token operator">>=</span><span class="token number">122</span> having <span class="token assign-left variable">sex</span><span class="token operator">=</span><span class="token string">'女'</span> order by score desc<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/493fae6f353b45a980faf3232bd30194.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="两表联查右连接" tabindex="-1"><a class="header-anchor" href="#两表联查右连接" aria-hidden="true">#</a> 两表联查右连接</h3>
<blockquote>
<p>两表联查必须加上where 表1 id=表2 id，否则查询出来会有很多重复的数据，你写了几个字段，就会查询到多少字段的重复数据；</p>
</blockquote>
<p><strong>内连接格式：</strong><font color=red><strong>A right join B on 条件</strong></font></p>
<blockquote>
<p><strong>例子：</strong><br>
select * from A right join B on 条件；<br>
select * from A right join B on 条件 where 条件；<br>
select * from A right join B on 条件 where 条件 having 条件；<br>
select * from A right join B on 条件 order by 字段；<br>
select * from A right join B on 条件 where 条件 order by 字段；<br>
select * from A right join B on 条件 where 条件 having 条件 order by 字段；</p>
</blockquote>
<p><strong>例1：查询student表姓名、性别、年龄，body表身高；</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#别名两表联查右连接：查询student表姓名、性别、年龄，body表身高；</span>
<span class="token keyword">select</span> a.name as <span class="token string">'姓名'</span>,a.sex as <span class="token string">'性别'</span>,a.age as <span class="token string">'年龄'</span>,b.height as <span class="token string">'身高'</span> from student a right <span class="token function">join</span> body b on <span class="token assign-left variable">a.id</span><span class="token operator">=</span>b.id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/1aae26d06244440a8c19b3b5dfc28f72.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>例2：查询student表姓名、性别、年龄、分数，body表身高、体重、心跳，并只显示成绩大于等于122的学生；</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#别名两表联查右连接：查询student表姓名、性别、年龄、分数，body表身高、体重、心跳，并只显示成绩大于等于122的学生；</span>
<span class="token keyword">select</span> a.name as <span class="token string">'姓名'</span>,a.sex as <span class="token string">'性别'</span>,a.age as <span class="token string">'年龄'</span>,b.height as <span class="token string">'身高'</span>,b.weight as <span class="token string">'体重'</span>,b.heartbeat as <span class="token string">'心跳/每分钟'</span>,a.score as <span class="token string">'分数'</span> from student a right <span class="token function">join</span> body b on <span class="token assign-left variable">a.id</span><span class="token operator">=</span>b.id where score<span class="token operator">>=</span><span class="token number">122</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/e9ffc888fb414bd4af1dc56b1863bb8f.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>例3：查询student表姓名、性别、年龄、分数，body表身高、体重、心跳，并只显示成绩大于等于122的女学生；</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#别名两表联查右连接：查询student表姓名、性别、年龄、分数，body表身高、体重、心跳，并只显示成绩大于等于122的女学生；</span>
<span class="token keyword">select</span> a.name as <span class="token string">'姓名'</span>,a.sex as <span class="token string">'性别'</span>,a.age as <span class="token string">'年龄'</span>,b.height as <span class="token string">'身高'</span>,b.weight as <span class="token string">'体重'</span>,b.heartbeat as <span class="token string">'心跳/每分钟'</span>,a.score as <span class="token string">'分数'</span> from student a right <span class="token function">join</span> body b on <span class="token assign-left variable">a.id</span><span class="token operator">=</span>b.id where score<span class="token operator">>=</span><span class="token number">122</span> having <span class="token assign-left variable">sex</span><span class="token operator">=</span><span class="token string">'女'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/fc2f4edbc787468fb11b26d220437316.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>例4：查询student表姓名、性别、年龄、分数，body表身高、体重、心跳，并只显示成绩大于等于122的女学生且从大到小排序；</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#别名两表联查右连接：查询student表姓名、性别、年龄、分数，body表身高、体重、心跳，并只显示成绩大于等于122的女学生且从大到小排序；</span>
<span class="token keyword">select</span> a.name as <span class="token string">'姓名'</span>,a.sex as <span class="token string">'性别'</span>,a.age as <span class="token string">'年龄'</span>,b.height as <span class="token string">'身高'</span>,b.weight as <span class="token string">'体重'</span>,b.heartbeat as <span class="token string">'心跳/每分钟'</span>,a.score as <span class="token string">'分数'</span> from student a right <span class="token function">join</span> body b on <span class="token assign-left variable">a.id</span><span class="token operator">=</span>b.id where score<span class="token operator">>=</span><span class="token number">122</span> having <span class="token assign-left variable">sex</span><span class="token operator">=</span><span class="token string">'女'</span> order by score desc<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/4e29406c5e2c4f56aa23d8937d29674a.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="全连接-union或union-all" tabindex="-1"><a class="header-anchor" href="#全连接-union或union-all" aria-hidden="true">#</a> 全连接: union或union all</h3>
<p><strong>注意：</strong><br>
1.两张表的数据数量必须相同<br>
2.全连接内使用order by 没有效果，可以对连接后的结果进行排序；<br>
3.union会合并相同的数据；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">select</span> * from 表1 union all <span class="token keyword">select</span> * from 表2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">select</span> * from student1 union all <span class="token keyword">select</span> * from student2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


