<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/dfc7ac4d3ca04b14a86dc0b603e40e17.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>🍁<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！</p>
</blockquote>
<h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章" aria-hidden="true">#</a> 相关文章</h2>
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
<table>
<thead>
<tr>
<th style="text-align:center">Column 1</th>
<th style="text-align:left">Column 2</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">centered 文本居中</td>
<td style="text-align:left">right-aligned 文本居右</td>
</tr>
</tbody>
</table>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
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
<h2 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h2>
<h3 id="查看数据库" tabindex="-1"><a class="header-anchor" href="#查看数据库" aria-hidden="true">#</a> 查看数据库：</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>show databases<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建数据库" tabindex="-1"><a class="header-anchor" href="#创建数据库" aria-hidden="true">#</a> 创建数据库：</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>create database 库名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#创建数据库并设置为utf8格式</span>
create database cs character <span class="token builtin class-name">set</span> utf8 <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除数据库" tabindex="-1"><a class="header-anchor" href="#删除数据库" aria-hidden="true">#</a> 删除数据库：</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>drop database 库名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="表" tabindex="-1"><a class="header-anchor" href="#表" aria-hidden="true">#</a> 表</h2>
<h3 id="进入某数据库" tabindex="-1"><a class="header-anchor" href="#进入某数据库" aria-hidden="true">#</a> 进入某数据库</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>use 库名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看某数据库中所有的表" tabindex="-1"><a class="header-anchor" href="#查看某数据库中所有的表" aria-hidden="true">#</a> 查看某数据库中所有的表：</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>show tables<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建表" tabindex="-1"><a class="header-anchor" href="#创建表" aria-hidden="true">#</a> 创建表：</h3>
<p>创建学生表：id（学号）自增，主键；姓名；性别；年龄；生日；地址；邮件；手机号；成绩。</p>
<ul>
<li>ZEROFILL <font color=blue>int(3)的时候要是00几的话可以在int(3)后面加一个zerofill</font></li>
<li>PRIMARY KEY 		<font color=blue>主键</font></li>
<li>AUTO_INCREMENT <font color=blue>自增</font></li>
<li>default 0 <font color=blue>设置默认值</font></li>
<li>comment <font color=blue>备注</font></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>create table student <span class="token punctuation">(</span>id int<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> ZEROFILL PRIMARY KEY AUTO_INCREMENT comment<span class="token string">'学号'</span>,name varchar<span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> not null comment<span class="token string">'姓名'</span>,sex char<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> not null comment<span class="token string">'性别'</span>,age int not null comment<span class="token string">'年龄'</span>,birthday varchar<span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> comment<span class="token string">'生日'</span>,address varchar<span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> not null comment<span class="token string">'住址'</span>,email varchar<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> comment<span class="token string">'邮箱'</span>,iphone varchar<span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> comment<span class="token string">'手机号'</span>,score int not null comment<span class="token string">'成绩'</span><span class="token punctuation">)</span>comment<span class="token operator">=</span><span class="token string">'学生表'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/b8eaffe6fe7446a5a4bb80630f801874.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="删除表" tabindex="-1"><a class="header-anchor" href="#删除表" aria-hidden="true">#</a> 删除表：</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>drop tables 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看表结构" tabindex="-1"><a class="header-anchor" href="#查看表结构" aria-hidden="true">#</a> 查看表结构:</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#视觉上会好很多（推荐）</span>
desc 表名<span class="token punctuation">;</span>

<span class="token comment">#查看表结构的构成语句详细</span>
show create table 表名<span class="token punctuation">;</span>

<span class="token comment">#精简查看表结构</span>
show create table 表名<span class="token punctuation">\</span>G<span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改表结构" tabindex="-1"><a class="header-anchor" href="#修改表结构" aria-hidden="true">#</a> 修改表结构：</h2>
<h3 id="添加字段及类型" tabindex="-1"><a class="header-anchor" href="#添加字段及类型" aria-hidden="true">#</a> 添加字段及类型：</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>alter table 表名 <span class="token function">add</span> 字段 数据类型<span class="token punctuation">;</span><span class="token punctuation">[</span>first <span class="token operator">|</span> after 字段<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>first是在第一行加，after是在最后一行加，也可以指定字段在哪个字段后面加；默认追加；</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#默认追加</span>
alter table student <span class="token function">add</span> hobby varchar<span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">#添加一个字段在第一行</span>
alter table student <span class="token function">add</span> nvpy varchar<span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> first<span class="token punctuation">;</span>

<span class="token comment">#添加一个字段在iphone字段后面</span>
alter table student <span class="token function">add</span> npy varchar<span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> after iphone<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除字段及类型" tabindex="-1"><a class="header-anchor" href="#删除字段及类型" aria-hidden="true">#</a> 删除字段及类型：</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>alter table 表名 drop 字段名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#删除nvpy字段</span>
alter table student drop nvpy<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改字段及类型" tabindex="-1"><a class="header-anchor" href="#修改字段及类型" aria-hidden="true">#</a> 修改字段及类型：</h3>
<p>单个字段类型修改：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>alter table 表名 modify 字段 数据类型<span class="token punctuation">;</span><span class="token punctuation">[</span>first <span class="token operator">|</span> after 字段<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#修改npy的字段类型为varchar(20)</span>
alter table student modify npy varchar<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">#修改npy的字段类型为varchar(256)；并放到第一行；</span>
alter table student modify npy varchar<span class="token punctuation">(</span><span class="token number">256</span><span class="token punctuation">)</span> first<span class="token punctuation">;</span>

<span class="token comment">#修改npy的字段类型为varchar(50)；并放到name的下一行；</span>
alter table student modify npy varchar<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> after name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多个字段类型修改：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>alter table 表名 change 字段 新字段 数据类型<span class="token punctuation">;</span><span class="token punctuation">[</span>first <span class="token operator">|</span> after 字段<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#修改npy字段，改名npy为nanpy；字段类型改为int类型；</span>
alter table student change npy nanpy int<span class="token punctuation">;</span>

<span class="token comment">#修改nanpy字段，改名为nanfu；字段类型改为char(4)；并且放到第一行；</span>
alter table student change nanpy nanfu char<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> first<span class="token punctuation">;</span>

<span class="token comment">#修改nanfu字段，改名为npy；字段类型改为varchar(255)；并且放到iphone后一行；</span>
alter table student change nanfu npy varchar<span class="token punctuation">(</span><span class="token number">225</span><span class="token punctuation">)</span> after iphone<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改表名" tabindex="-1"><a class="header-anchor" href="#修改表名" aria-hidden="true">#</a> 修改表名：</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>alter table 原表名 <span class="token function">rename</span> 新表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>alter table student <span class="token function">rename</span> xuesheng<span class="token punctuation">;</span>

<span class="token comment">#查看表名</span>
show tables<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据" tabindex="-1"><a class="header-anchor" href="#数据" aria-hidden="true">#</a> 数据</h2>
<h3 id="增" tabindex="-1"><a class="header-anchor" href="#增" aria-hidden="true">#</a> 增：</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#新增一组数据</span>
insert into 表名 values <span class="token punctuation">(</span>值1,值2<span class="token punctuation">..</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">#新增多组数据</span>
insert into 表名 values <span class="token punctuation">(</span>值1,值2<span class="token punctuation">..</span><span class="token punctuation">)</span>, <span class="token punctuation">(</span>值1,值2<span class="token punctuation">..</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">#新增指定多组数据</span>
insert into 表名<span class="token punctuation">(</span>字段1，字段2，<span class="token punctuation">..</span>.<span class="token punctuation">)</span> values <span class="token punctuation">(</span>值1,值2<span class="token punctuation">..</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#新增一组数据</span>
insert into student values <span class="token punctuation">(</span>null,<span class="token string">'张三'</span>,<span class="token string">'男'</span>,15,7.12,<span class="token string">'北京市朝阳区某小区1号楼1单元1011'</span>,<span class="token string">'zhangsan@163.com'</span>,16222817282,120<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">#新增多组数据（5组）</span>
insert into student values <span class="token punctuation">(</span>null,<span class="token string">'李四'</span>,<span class="token string">'男'</span>,18,9.02,<span class="token string">'北京市朝阳区某小区1号楼1单元1012'</span>,<span class="token string">'lisi@163.com'</span>,1214323282,121<span class="token punctuation">)</span>,<span class="token punctuation">(</span>null,<span class="token string">'王五'</span>,<span class="token string">'女'</span>,18,2.9,<span class="token string">'北京市朝阳区某小区1号楼1单元1010'</span>,<span class="token string">'wangwu@163.com'</span>,12234332296,100<span class="token punctuation">)</span>,<span class="token punctuation">(</span>null,<span class="token string">'老六'</span>,<span class="token string">'女'</span>,19,1.19,<span class="token string">'北京市朝阳区某小区1号楼1单元101'</span>,<span class="token string">'laoliu@163.com'</span>,13246780092,124.5<span class="token punctuation">)</span>,<span class="token punctuation">(</span>null,<span class="token string">'小七'</span>,<span class="token string">'女'</span>,17,4.24,<span class="token string">'北京市朝阳区某小区1号楼1单元109'</span>,<span class="token string">'xiaoqi@163.com'</span>,15278906648,123<span class="token punctuation">)</span>,<span class="token punctuation">(</span>null,<span class="token string">'老八'</span>,<span class="token string">'男'</span>,16,6.07,<span class="token string">'北京市朝阳区某小区1号楼1单元105'</span>,<span class="token string">'laoba@163.com'</span>,18267814238,123.5<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">#查询student表中所有数据</span>
<span class="token keyword">select</span> * from student<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/3b8300e99fde4793a4931fa79292226d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>新增数据报错：<code v-pre>1366 - Incorrect string value: '\xE7\x94\xB7' for column 'sex' at row 1</code><br>
这个报错的意思的你的字符集不对，修改一下字符集为utf8即可，如果用的navicat可以直接找库右击修改，如果在linux中可以执行：<code v-pre>alter database cs character set utf8;</code>修改库的编码格式；<code v-pre>how variables like '%char%';</code>可通过查看编码格式；修改完，重启mysql，再次试一下就好了；</p>
<h3 id="删" tabindex="-1"><a class="header-anchor" href="#删" aria-hidden="true">#</a> 删：</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#删除表中所有数据；（慎用）</span>
delete from 表名<span class="token punctuation">;</span>

<span class="token comment">#删除某表中的指定行；</span>
delete from 表名 where 列<span class="token operator">=</span>值<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#删除id为004的人（这里注意，因为我们前面的两位是默认的两个0，所以只要删除4就行，4==004）</span>
delete from student where <span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">;</span>

<span class="token comment">#删除手机号为”13246780092“的人</span>
delete from student where <span class="token assign-left variable">iphone</span><span class="token operator">=</span><span class="token string">"13246780092"</span><span class="token punctuation">;</span>

<span class="token comment">#查询student表中所有数据</span>
<span class="token keyword">select</span> * from student<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/4eaf195bfde2476792a060dbbdc9ad46.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<font color=red>注：完成之后会将数据重新添加上</font><blockquote>
<p>附加：<br>
删除表主键id需要重0开始的，可执行<code v-pre>truncate table student;</code><br>
 <br>
注：此操作会让数据全部清除，请谨慎使用；</p>
</blockquote>
<h3 id="改" tabindex="-1"><a class="header-anchor" href="#改" aria-hidden="true">#</a> 改：</h3>
<p>代表列、代表值比如主键、手机号；具有唯一性；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>update 表名 <span class="token builtin class-name">set</span> 要修改的列<span class="token operator">=</span>值 where 代表列<span class="token operator">=</span>代表值<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#修改id=1，“张三”的住址为“北京市朝阳区某小区1号楼1单元106”</span>
update student <span class="token builtin class-name">set</span> <span class="token assign-left variable">address</span><span class="token operator">=</span><span class="token string">'北京市朝阳区某小区1号楼1单元106'</span> where <span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#修改id=6，“王五”的性别为“男”，地址为“北京市朝阳区某小区1号楼1单元104”</span>
update student <span class="token builtin class-name">set</span> <span class="token assign-left variable">sex</span><span class="token operator">=</span><span class="token string">'男'</span>,address<span class="token operator">=</span><span class="token string">'北京市朝阳区某小区1号楼1单元104'</span> where <span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">;</span>

<span class="token comment">#查询student表中所有数据</span>
<span class="token keyword">select</span> * from student<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/a6b56af82d594333890d2d19a3f80215.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="查" tabindex="-1"><a class="header-anchor" href="#查" aria-hidden="true">#</a> 查：</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">select</span> * from 表名<span class="token punctuation">;</span>（查看所有字段的内容）
<span class="token keyword">select</span> 字段 from 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查询student表中所有数据</span>
<span class="token keyword">select</span> * from student<span class="token punctuation">;</span>

<span class="token comment">#查询student表中的姓名和成绩数据</span>
<span class="token keyword">select</span> name,score from student<span class="token punctuation">;</span>
<span class="token keyword">select</span> name as 姓名,score as 成绩 from student<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/6eab0080a2554e329e40be3a0db08dd4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


