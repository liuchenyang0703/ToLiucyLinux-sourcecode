<template><div><div class="hint-container tip">
<p class="hint-container-title">友情提示</p>
<p><strong>转载须知</strong>: 以下所有文章整理于B站宋红康老师的《MySQL数据库入门到大牛》。<a href="https://www.bilibili.com/video/BV1iq4y1u7vj?p=1&amp;vd_source=cea816a08805c218ac4390ae9b61ae31" target="_blank" rel="noopener noreferrer">MySQL</a></p>
</div>
<h2 id="_1-sql概述" tabindex="-1"><a class="header-anchor" href="#_1-sql概述"><span>1. SQL概述</span></a></h2>
<h3 id="_1-1-sql背景知识" tabindex="-1"><a class="header-anchor" href="#_1-1-sql背景知识"><span>1.1 SQL背景知识</span></a></h3>
<ul>
<li>
<p>1946 年，世界上第一台电脑诞生，如今，借由这台电脑发展起来的互联网已经自成江湖。在这几十年里，无数的技术、产业在这片江湖里沉浮，有的方兴未艾，有的已经几幕兴衰。但在这片浩荡的波动里，有一门技术从未消失，甚至“老当益壮”，那就是 SQL。</p>
<ul>
<li>45 年前，也就是 1974 年，IBM 研究员发布了一篇揭开数据库技术的论文《SEQUEL：一门结构化的英语查询语言》，直到今天这门结构化的查询语言并没有太大的变化，相比于其他语言，<code v-pre>SQL 的半衰期可以说是非常长</code>了。</li>
</ul>
</li>
<li>
<p>不论是前端工程师，还是后端算法工程师，都一定会和数据打交道，都需要了解如何又快又准确地提取自己想要的数据。更别提数据分析师了，他们的工作就是和数据打交道，整理不同的报告，以便指导业务决策。</p>
</li>
<li>
<p>SQL（Structured Query Language，结构化查询语言）是使用关系模型的数据库应用语言，<code v-pre>与数据直接打交道</code>，由<code v-pre>IBM</code>上世纪70年代开发出来。后由美国国家标准局（ANSI）开始着手制定SQL标准，先后有<code v-pre>SQL-86</code>，<code v-pre>SQL-89</code>，<code v-pre>SQL-92</code>，<code v-pre>SQL-99</code>等标准。</p>
<ul>
<li>SQL 有两个重要的标准，分别是 SQL92 和 SQL99，它们分别代表了 92 年和 99 年颁布的 SQL 标准，我们今天使用的 SQL 语言依然遵循这些标准。</li>
</ul>
</li>
<li>
<p>不同的数据库生产厂商都支持SQL语句，但都有特有内容。</p>
</li>
</ul>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/SQLisputonghua.jpg" alt="SQLisputonghua" style="zoom:67%;" />
<h3 id="_1-2-sql语言排行榜" tabindex="-1"><a class="header-anchor" href="#_1-2-sql语言排行榜"><span>1.2 SQL语言排行榜</span></a></h3>
<p>自从 SQL 加入了 TIOBE 编程语言排行榜，就一直保持在 Top 10。</p>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20211014230114639.png" alt="image-20211014230114639" style="zoom:80%;" />
<h3 id="_1-3-sql-分类" tabindex="-1"><a class="header-anchor" href="#_1-3-sql-分类"><span>1.3 SQL 分类</span></a></h3>
<p>SQL语言在功能上主要分为如下3大类：</p>
<ul>
<li>
<p><strong>DDL（Data Definition Languages、数据定义语言）</strong>，这些语句定义了不同的数据库、表、视图、索引等数据库对象，还可以用来创建、删除、修改数据库和数据表的结构。</p>
<ul>
<li>主要的语句关键字包括<code v-pre>CREATE</code>、<code v-pre>DROP</code>、<code v-pre>ALTER</code>等。</li>
</ul>
</li>
<li>
<p><strong>DML（Data Manipulation Language、数据操作语言）</strong>，用于添加、删除、更新和查询数据库记录，并检查数据完整性。</p>
<ul>
<li>主要的语句关键字包括<code v-pre>INSERT</code>、<code v-pre>DELETE</code>、<code v-pre>UPDATE</code>、<code v-pre>SELECT</code>等。</li>
<li><strong>SELECT是SQL语言的基础，最为重要。</strong></li>
</ul>
</li>
<li>
<p><strong>DCL（Data Control Language、数据控制语言）</strong>，用于定义数据库、表、字段、用户的访问权限和安全级别。</p>
<ul>
<li>主要的语句关键字包括<code v-pre>GRANT</code>、<code v-pre>REVOKE</code>、<code v-pre>COMMIT</code>、<code v-pre>ROLLBACK</code>、<code v-pre>SAVEPOINT</code>等。</li>
</ul>
</li>
</ul>
<blockquote>
<p>因为查询语句使用的非常的频繁，所以很多人把查询语句单拎出来一类：DQL（数据查询语言）。</p>
<p>还有单独将<code v-pre>COMMIT</code>、<code v-pre>ROLLBACK</code> 取出来称为TCL （Transaction Control Language，事务控制语言）。</p>
</blockquote>
<h2 id="_2-sql语言的规则与规范" tabindex="-1"><a class="header-anchor" href="#_2-sql语言的规则与规范"><span>2. SQL语言的规则与规范</span></a></h2>
<h3 id="_2-1-基本规则" tabindex="-1"><a class="header-anchor" href="#_2-1-基本规则"><span>2.1 基本规则</span></a></h3>
<ul>
<li>SQL 可以写在一行或者多行。为了提高可读性，各子句分行写，必要时使用缩进</li>
<li>每条命令以 ; 或 \g 或 \G 结束</li>
<li>关键字不能被缩写也不能分行</li>
<li>关于标点符号
<ul>
<li>必须保证所有的()、单引号、双引号是成对结束的</li>
<li>必须使用英文状态下的半角输入方式</li>
<li>字符串型和日期时间类型的数据可以使用单引号（' '）表示</li>
<li>列的别名，尽量使用双引号（&quot; &quot;），而且不建议省略as</li>
</ul>
</li>
</ul>
<h3 id="_2-2-sql大小写规范-建议遵守" tabindex="-1"><a class="header-anchor" href="#_2-2-sql大小写规范-建议遵守"><span>2.2 SQL大小写规范 （建议遵守）</span></a></h3>
<ul>
<li><strong>MySQL 在 Windows 环境下是大小写不敏感的</strong></li>
<li><strong>MySQL 在 Linux 环境下是大小写敏感的</strong>
<ul>
<li>数据库名、表名、表的别名、变量名是严格区分大小写的</li>
<li>关键字、函数名、列名(或字段名)、列的别名(字段的别名) 是忽略大小写的。</li>
</ul>
</li>
<li><strong>推荐采用统一的书写规范：</strong>
<ul>
<li>数据库名、表名、表别名、字段名、字段别名等都小写</li>
<li>SQL 关键字、函数名、绑定变量等都大写</li>
</ul>
</li>
</ul>
<h3 id="_2-3-注-释" tabindex="-1"><a class="header-anchor" href="#_2-3-注-释"><span>2.3 注 释</span></a></h3>
<p>可以使用如下格式的注释结构</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>单行注释：#注释文字(MySQL特有的方式)</span></span>
<span class="line"><span>单行注释：-- 注释文字(--后面必须包含一个空格。)</span></span>
<span class="line"><span>多行注释：/* 注释文字  */</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-命名规则-暂时了解" tabindex="-1"><a class="header-anchor" href="#_2-4-命名规则-暂时了解"><span>2.4 命名规则（暂时了解）</span></a></h3>
<ul>
<li>数据库、表名不得超过30个字符，变量名限制为29个</li>
<li>必须只能包含 A–Z, a–z, 0–9, _共63个字符</li>
<li>数据库名、表名、字段名等对象名中间不要包含空格</li>
<li>同一个MySQL软件中，数据库不能同名；同一个库中，表不能重名；同一个表中，字段不能重名</li>
<li>必须保证你的字段没有和保留字、数据库系统或常用方法冲突。如果坚持使用，请在SQL语句中使用`（着重号）引起来</li>
<li>保持字段名和类型的一致性，在命名字段并为其指定数据类型的时候一定要保证一致性。假如数据类型在一个表里是整数，那在另一个表里可就别变成字符型了</li>
</ul>
<p>举例：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#以下两句是一样的，不区分大小写</span></span>
<span class="line"><span>show databases;</span></span>
<span class="line"><span>SHOW DATABASES;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#创建表格</span></span>
<span class="line"><span>#create table student info(...); #表名错误，因为表名有空格</span></span>
<span class="line"><span>create table student_info(...); </span></span>
<span class="line"><span></span></span>
<span class="line"><span>#其中order使用``飘号，因为order和系统关键字或系统函数名等预定义标识符重名了</span></span>
<span class="line"><span>CREATE TABLE `order`(</span></span>
<span class="line"><span>    id INT,</span></span>
<span class="line"><span>    lname VARCHAR(20)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>select id as "编号", `name` as "姓名" from t_stu; #起别名时，as都可以省略</span></span>
<span class="line"><span>select id as 编号, `name` as 姓名 from t_stu; #如果字段别名中没有空格，那么可以省略""</span></span>
<span class="line"><span>select id as 编 号, `name` as 姓 名 from t_stu; #错误，如果字段别名中有空格，那么不能省略""</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-数据导入指令" tabindex="-1"><a class="header-anchor" href="#_2-5-数据导入指令"><span>2.5 数据导入指令</span></a></h3>
<p>在命令行客户端登录mysql，使用source指令导入</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>mysql> source d:\mysqldb.sql</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>mysql> desc employees;</span></span>
<span class="line"><span>+----------------+-------------+------+-----+---------+-------+</span></span>
<span class="line"><span>| Field          | Type        | Null | Key | Default | Extra |</span></span>
<span class="line"><span>+----------------+-------------+------+-----+---------+-------+</span></span>
<span class="line"><span>| employee_id    | int(6)      | NO   | PRI | 0       |       |</span></span>
<span class="line"><span>| first_name     | varchar(20) | YES  |     | NULL    |       |</span></span>
<span class="line"><span>| last_name      | varchar(25) | NO   |     | NULL    |       |</span></span>
<span class="line"><span>| email          | varchar(25) | NO   | UNI | NULL    |       |</span></span>
<span class="line"><span>| phone_number   | varchar(20) | YES  |     | NULL    |       |</span></span>
<span class="line"><span>| hire_date      | date        | NO   |     | NULL    |       |</span></span>
<span class="line"><span>| job_id         | varchar(10) | NO   | MUL | NULL    |       |</span></span>
<span class="line"><span>| salary         | double(8,2) | YES  |     | NULL    |       |</span></span>
<span class="line"><span>| commission_pct | double(2,2) | YES  |     | NULL    |       |</span></span>
<span class="line"><span>| manager_id     | int(6)      | YES  | MUL | NULL    |       |</span></span>
<span class="line"><span>| department_id  | int(4)      | YES  | MUL | NULL    |       |</span></span>
<span class="line"><span>+----------------+-------------+------+-----+---------+-------+</span></span>
<span class="line"><span>11 rows in set (0.00 sec)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-基本的select语句" tabindex="-1"><a class="header-anchor" href="#_3-基本的select语句"><span>3. 基本的SELECT语句</span></a></h2>
<h3 id="_3-0-select" tabindex="-1"><a class="header-anchor" href="#_3-0-select"><span>3.0 SELECT...</span></a></h3>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SELECT 1; #没有任何子句</span></span>
<span class="line"><span>SELECT 9/2; #没有任何子句</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-select-from" tabindex="-1"><a class="header-anchor" href="#_3-1-select-from"><span>3.1 SELECT ... FROM</span></a></h3>
<ul>
<li>语法：</li>
</ul>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   标识选择哪些列</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">     标识从哪个表中选择</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>选择全部列：</li>
</ul>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> *</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   departments;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554950890895.png" alt="1554950890895" tabindex="0" loading="lazy"><figcaption>1554950890895</figcaption></figure>
<blockquote>
<p>一般情况下，除非需要使用表中所有的字段数据，最好不要使用通配符‘*’。使用通配符虽然可以节省输入查询语句的时间，但是获取不需要的列数据通常会降低查询和所使用的应用程序的效率。通配符的优势是，当不知道所需要的列的名称时，可以通过它获取它们。</p>
<p>在生产环境下，不推荐你直接使用<code v-pre>SELECT *</code>进行查询。</p>
</blockquote>
<ul>
<li>选择特定的列：</li>
</ul>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> department_id, location_id</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   departments;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554950947969.png" alt="1554950947969" tabindex="0" loading="lazy"><figcaption>1554950947969</figcaption></figure>
<blockquote>
<p>MySQL中的SQL语句是不区分大小写的，因此SELECT和select的作用是相同的，但是，许多开发人员习惯将关键字大写、数据列和表名小写，读者也应该养成一个良好的编程习惯，这样写出来的代码更容易阅读和维护。</p>
</blockquote>
<h3 id="_3-2-列的别名" tabindex="-1"><a class="header-anchor" href="#_3-2-列的别名"><span>3.2 列的别名</span></a></h3>
<ul>
<li>
<p>重命名一个列</p>
</li>
<li>
<p>便于计算</p>
</li>
<li>
<p>紧跟列名，也可以<strong>在列名和别名之间加入关键字AS，别名使用双引号</strong>，以便在别名中包含空格或特殊的字符并区分大小写。</p>
</li>
<li>
<p>AS 可以省略</p>
</li>
<li>
<p>建议别名简短，见名知意</p>
</li>
<li>
<p>举例</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SELECT last_name AS name, commission_pct comm</span></span>
<span class="line"><span>FROM   employees;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554951616598.png" alt="1554951616598" tabindex="0" loading="lazy"><figcaption>1554951616598</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202308291642928.png" alt="1554951622467" tabindex="0" loading="lazy"><figcaption>1554951622467</figcaption></figure>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SELECT last_name "Name", salary*12 "Annual Salary"</span></span>
<span class="line"><span>FROM   employees;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554951648377.png" alt="1554951648377" tabindex="0" loading="lazy"><figcaption>1554951648377</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202308291641391.png" alt="1554951655368" tabindex="0" loading="lazy"><figcaption>1554951655368</figcaption></figure>
<h3 id="_3-3-去除重复行" tabindex="-1"><a class="header-anchor" href="#_3-3-去除重复行"><span>3.3 去除重复行</span></a></h3>
<p>默认情况下，查询会返回全部行，包括重复行。</p>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> department_id</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   employees;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554951711115.png" alt="1554951711115" tabindex="0" loading="lazy"><figcaption>1554951711115</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202308291641631.png" alt="1554951715923" tabindex="0" loading="lazy"><figcaption>1554951715923</figcaption></figure>
<p><strong>在SELECT语句中使用关键字DISTINCT去除重复行</strong></p>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">SELECT DISTINCT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> department_id</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   employees;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554951796570.png" alt="1554951796570" tabindex="0" loading="lazy"><figcaption>1554951796570</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202308291640964.png" alt="1554951801044" tabindex="0" loading="lazy"><figcaption>1554951801044</figcaption></figure>
<p>针对于：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SELECT DISTINCT department_id,salary </span></span>
<span class="line"><span>FROM employees;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里有两点需要注意：</p>
<ol>
<li>DISTINCT 需要放到所有列名的前面，如果写成<code v-pre>SELECT salary, DISTINCT department_id FROM employees</code>会报错。</li>
<li>DISTINCT 其实是对后面所有列名的组合进行去重，你能看到最后的结果是 74 条，因为这 74 个部门id不同，都有 salary 这个属性值。如果你想要看都有哪些不同的部门（department_id），只需要写<code v-pre>DISTINCT department_id</code>即可，后面不需要再加其他的列名了。</li>
</ol>
<h3 id="_3-4-空值参与运算" tabindex="-1"><a class="header-anchor" href="#_3-4-空值参与运算"><span>3.4 空值参与运算</span></a></h3>
<ul>
<li>所有运算符或列值遇到null值，运算的结果都为null</li>
</ul>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> employee_id,salary,commission_pct,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">12</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> * salary * (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> + commission_pct) </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"annual_sal"</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> employees;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里你一定要注意，在 MySQL 里面， 空值不等于空字符串。一个空字符串的长度是 0，而一个空值的长度是空。而且，在 MySQL 里面，空值是占用空间的。</p>
<h3 id="_3-5-着重号" tabindex="-1"><a class="header-anchor" href="#_3-5-着重号"><span>3.5 着重号</span></a></h3>
<ul>
<li>错误的</li>
</ul>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>mysql> SELECT * FROM ORDER;</span></span>
<span class="line"><span>ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'ORDER' at line 1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>正确的</li>
</ul>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>mysql> SELECT * FROM `ORDER`;</span></span>
<span class="line"><span>+----------+------------+</span></span>
<span class="line"><span>| order_id | order_name |</span></span>
<span class="line"><span>+----------+------------+</span></span>
<span class="line"><span>|        1 | shkstart   |</span></span>
<span class="line"><span>|        2 | tomcat     |</span></span>
<span class="line"><span>|        3 | dubbo      |</span></span>
<span class="line"><span>+----------+------------+</span></span>
<span class="line"><span>3 rows in set (0.00 sec)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mysql> SELECT * FROM `order`;</span></span>
<span class="line"><span>+----------+------------+</span></span>
<span class="line"><span>| order_id | order_name |</span></span>
<span class="line"><span>+----------+------------+</span></span>
<span class="line"><span>|        1 | shkstart   |</span></span>
<span class="line"><span>|        2 | tomcat     |</span></span>
<span class="line"><span>|        3 | dubbo      |</span></span>
<span class="line"><span>+----------+------------+</span></span>
<span class="line"><span>3 rows in set (0.00 sec)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>结论</li>
</ul>
<p>我们需要保证表中的字段、表名等没有和保留字、数据库系统或常用方法冲突。如果真的相同，请在SQL语句中使用一对``（着重号）引起来。</p>
<h3 id="_3-6-5、查询常数" tabindex="-1"><a class="header-anchor" href="#_3-6-5、查询常数"><span>3.6 5、查询常数</span></a></h3>
<p>SELECT 查询还可以对常数进行查询。对的，就是在 SELECT 查询结果中增加一列固定的常数列。这列的取值是我们指定的，而不是从数据表中动态取出的。</p>
<p>你可能会问为什么我们还要对常数进行查询呢？</p>
<p>SQL 中的 SELECT 语法的确提供了这个功能，一般来说我们只从一个表中查询数据，通常不需要增加一个固定的常数列，但如果我们想整合不同的数据源，用常数列作为这个表的标记，就需要查询常数。</p>
<p>比如说，我们想对 employees 数据表中的员工姓名进行查询，同时增加一列字段<code v-pre>corporation</code>，这个字段固定值为“尚硅谷”，可以这样写：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SELECT '尚硅谷' as corporation, last_name FROM employees;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_4-显示表结构" tabindex="-1"><a class="header-anchor" href="#_4-显示表结构"><span>4. 显示表结构</span></a></h2>
<p>使用DESCRIBE 或 DESC 命令，表示表结构。</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>DESCRIBE employees;</span></span>
<span class="line"><span>或</span></span>
<span class="line"><span>DESC employees;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>mysql> desc employees;</span></span>
<span class="line"><span>+----------------+-------------+------+-----+---------+-------+</span></span>
<span class="line"><span>| Field          | Type        | Null | Key | Default | Extra |</span></span>
<span class="line"><span>+----------------+-------------+------+-----+---------+-------+</span></span>
<span class="line"><span>| employee_id    | int(6)      | NO   | PRI | 0       |       |</span></span>
<span class="line"><span>| first_name     | varchar(20) | YES  |     | NULL    |       |</span></span>
<span class="line"><span>| last_name      | varchar(25) | NO   |     | NULL    |       |</span></span>
<span class="line"><span>| email          | varchar(25) | NO   | UNI | NULL    |       |</span></span>
<span class="line"><span>| phone_number   | varchar(20) | YES  |     | NULL    |       |</span></span>
<span class="line"><span>| hire_date      | date        | NO   |     | NULL    |       |</span></span>
<span class="line"><span>| job_id         | varchar(10) | NO   | MUL | NULL    |       |</span></span>
<span class="line"><span>| salary         | double(8,2) | YES  |     | NULL    |       |</span></span>
<span class="line"><span>| commission_pct | double(2,2) | YES  |     | NULL    |       |</span></span>
<span class="line"><span>| manager_id     | int(6)      | YES  | MUL | NULL    |       |</span></span>
<span class="line"><span>| department_id  | int(4)      | YES  | MUL | NULL    |       |</span></span>
<span class="line"><span>+----------------+-------------+------+-----+---------+-------+</span></span>
<span class="line"><span>11 rows in set (0.00 sec)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，各个字段的含义分别解释如下：</p>
<ul>
<li>Field：表示字段名称。</li>
<li>Type：表示字段类型，这里 barcode、goodsname 是文本型的，price 是整数类型的。</li>
<li>Null：表示该列是否可以存储NULL值。</li>
<li>Key：表示该列是否已编制索引。PRI表示该列是表主键的一部分；UNI表示该列是UNIQUE索引的一部分；MUL表示在列中某个给定值允许出现多次。</li>
<li>Default：表示该列是否有默认值，如果有，那么值是多少。</li>
<li>Extra：表示可以获取的与给定列有关的附加信息，例如AUTO_INCREMENT等。</li>
</ul>
<h2 id="_5-过滤数据" tabindex="-1"><a class="header-anchor" href="#_5-过滤数据"><span>5. 过滤数据</span></a></h2>
<ul>
<li>背景：</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554952199742.png" alt="1554952199742" tabindex="0" loading="lazy"><figcaption>1554952199742</figcaption></figure>
<ul>
<li>
<p>语法：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SELECT 字段1,字段2</span></span>
<span class="line"><span>FROM 表名</span></span>
<span class="line"><span>WHERE 过滤条件</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用WHERE 子句，将不满足条件的行过滤掉</li>
<li><strong>WHERE子句紧随 FROM子句</strong></li>
</ul>
</li>
<li>
<p>举例</p>
</li>
</ul>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> employee_id, last_name, job_id, department_id</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   employees</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">WHERE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  department_id </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 90</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/1554952277028.png" alt="1554952277028" tabindex="0" loading="lazy"><figcaption>1554952277028</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312031906036.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


