<template><div><div class="hint-container tip">
<p class="hint-container-title">友情提示</p>
<p><strong>转载须知</strong>: 以下所有文章整理于B站宋红康老师的《MySQL数据库入门到大牛》。<a href="https://www.bilibili.com/video/BV1iq4y1u7vj?p=1&amp;vd_source=cea816a08805c218ac4390ae9b61ae31" target="_blank" rel="noopener noreferrer">MySQL</a></p>
</div>
<h2 id="_1-用户管理" tabindex="-1"><a class="header-anchor" href="#_1-用户管理"><span>1. 用户管理</span></a></h2>
<h3 id="_1-1-登录mysql服务器" tabindex="-1"><a class="header-anchor" href="#_1-1-登录mysql服务器"><span>1.1 登录MySQL服务器</span></a></h3>
<p>启动MySQL服务后，可以通过mysql命令来登录MySQL服务器，命令如下：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>mysql –h hostname|hostIP –P port –u username –p DatabaseName –e "SQL语句"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><code v-pre>-h参数</code>后面接主机名或者主机IP，hostname为主机，hostIP为主机IP。</li>
<li><code v-pre>-P参数</code>后面接MySQL服务的端口，通过该参数连接到指定的端口。MySQL服务的默认端口是3306，不使用该参数时自动连接到3306端口，port为连接的端口号。</li>
<li><code v-pre>-u参数</code>后面接用户名，username为用户名。</li>
<li><code v-pre>-p参数</code>会提示输入密码。</li>
<li><code v-pre>DatabaseName参数</code>指明登录到哪一个数据库中。如果没有该参数，就会直接登录到MySQL数据库中，然后可以使用USE命令来选择数据库。</li>
<li><code v-pre>-e参数</code>后面可以直接加SQL语句。登录MySQL服务器以后即可执行这个SQL语句，然后退出MySQL服务器。</li>
</ul>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>mysql -uroot -p -hlocalhost -P3306 mysql -e "select host,user from user"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_1-2-创建用户" tabindex="-1"><a class="header-anchor" href="#_1-2-创建用户"><span>1.2 创建用户</span></a></h3>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>CREATE USER 用户名 [IDENTIFIED BY '密码'][,用户名 [IDENTIFIED BY '密码']];</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>举例：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>CREATE USER zhang3 IDENTIFIED BY '123123'; # 默认host是 %</span></span>
<span class="line"><span>CREATE USER 'kangshifu'@'localhost' IDENTIFIED BY '123456';</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-修改用户" tabindex="-1"><a class="header-anchor" href="#_1-3-修改用户"><span>1.3 修改用户</span></a></h3>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>UPDATE mysql.user SET USER='li4' WHERE USER='wang5'; </span></span>
<span class="line"><span>FLUSH PRIVILEGES;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-删除用户" tabindex="-1"><a class="header-anchor" href="#_1-4-删除用户"><span>1.4 删除用户</span></a></h3>
<p><strong>方式1：使用DROP方式删除（推荐）</strong></p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>DROP USER user[,user]…;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>举例：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>DROP USER li4 ; # 默认删除host为%的用户</span></span>
<span class="line"><span>DROP USER 'kangshifu'@'localhost';</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式2：使用DELETE方式删除（不推荐，有残留信息）</strong></p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>DELETE FROM mysql.user WHERE Host=’hostname’ AND User=’username’;</span></span>
<span class="line"><span>FLUSH PRIVILEGES;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-设置当前用户密码" tabindex="-1"><a class="header-anchor" href="#_1-5-设置当前用户密码"><span>1.5 设置当前用户密码</span></a></h3>
<p><strong>1.</strong> <strong>使用ALTER USER命令来修改当前用户密码</strong></p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ALTER USER USER() IDENTIFIED BY 'new_password';</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>2.</strong> <strong>使用SET语句来修改当前用户密码</strong></p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SET PASSWORD='new_password';</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_1-6-修改其它用户密码" tabindex="-1"><a class="header-anchor" href="#_1-6-修改其它用户密码"><span>1.6 修改其它用户密码</span></a></h3>
<p><strong>1.</strong> <strong>使用ALTER语句来修改普通用户的密码</strong></p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ALTER USER user [IDENTIFIED BY '新密码'] </span></span>
<span class="line"><span>[,user[IDENTIFIED BY '新密码']]…;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.</strong> <strong>使用SET命令来修改普通用户的密码</strong></p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SET PASSWORD FOR 'username'@'hostname'='new_password';</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-权限管理" tabindex="-1"><a class="header-anchor" href="#_2-权限管理"><span>2. 权限管理</span></a></h2>
<h3 id="_2-1-权限列表" tabindex="-1"><a class="header-anchor" href="#_2-1-权限列表"><span>2.1 权限列表</span></a></h3>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>show privileges;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><code v-pre>CREATE和DROP权限</code>，可以创建新的数据库和表，或删除（移掉）已有的数据库和表。如果将MySQL数据库中的DROP权限授予某用户，用户就可以删除MySQL访问权限保存的数据库。</li>
<li><code v-pre>SELECT、INSERT、UPDATE和DELETE权限</code>允许在一个数据库现有的表上实施操作。</li>
<li><code v-pre>SELECT权限</code>只有在它们真正从一个表中检索行时才被用到。</li>
<li><code v-pre>INDEX权限</code>允许创建或删除索引，INDEX适用于已有的表。如果具有某个表的CREATE权限，就可以在CREATE TABLE语句中包括索引定义。</li>
<li><code v-pre>ALTER权限</code>可以使用ALTER TABLE来更改表的结构和重新命名表。</li>
<li><code v-pre>CREATE ROUTINE权限</code>用来创建保存的程序（函数和程序），<code v-pre>ALTER ROUTINE权限</code>用来更改和删除保存的程序，<code v-pre>EXECUTE权限</code>用来执行保存的程序。</li>
<li><code v-pre>GRANT权限</code>允许授权给其他用户，可用于数据库、表和保存的程序。</li>
<li><code v-pre>FILE权限</code>使用户可以使用LOAD DATA INFILE和SELECT ... INTO OUTFILE语句读或写服务器上的文件，任何被授予FILE权限的用户都能读或写MySQL服务器上的任何文件（说明用户可以读任何数据库目录下的文件，因为服务器可以访问这些文件）。</li>
</ul>
<h3 id="_2-2-授予权限的原则" tabindex="-1"><a class="header-anchor" href="#_2-2-授予权限的原则"><span>2.2 授予权限的原则</span></a></h3>
<p>权限控制主要是出于安全因素，因此需要遵循以下几个<code v-pre>经验原则</code>：</p>
<p>1、只授予能<code v-pre>满足需要的最小权限</code>，防止用户干坏事。比如用户只是需要查询，那就只给select权限就可以了，不要给用户赋予update、insert或者delete权限。</p>
<p>2、创建用户的时候<code v-pre>限制用户的登录主机</code>，一般是限制成指定IP或者内网IP段。</p>
<p>3、为每个用户<code v-pre>设置满足密码复杂度的密码</code>。</p>
<p>4、<code v-pre>定期清理不需要的用户</code>，回收权限或者删除用户。</p>
<h3 id="_2-3-授予权限" tabindex="-1"><a class="header-anchor" href="#_2-3-授予权限"><span>2.3 授予权限</span></a></h3>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>GRANT 权限1,权限2,…权限n ON 数据库名称.表名称 TO 用户名@用户地址 [IDENTIFIED BY ‘密码口令’];</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>该权限如果发现没有该用户，则会直接新建一个用户。</li>
<li>给li4用户用本地命令行方式，授予atguigudb这个库下的所有表的插删改查的权限。</li>
</ul>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>GRANT SELECT,INSERT,DELETE,UPDATE ON atguigudb.* TO li4@localhost;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>授予通过网络方式登录的joe用户 ，对所有库所有表的全部权限，密码设为123。注意这里唯独不包括grant的权限</li>
</ul>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>GRANT ALL PRIVILEGES ON *.* TO joe@'%' IDENTIFIED BY '123';</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-4-查看权限" tabindex="-1"><a class="header-anchor" href="#_2-4-查看权限"><span>2.4 查看权限</span></a></h3>
<ul>
<li>查看当前用户权限</li>
</ul>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SHOW GRANTS; </span></span>
<span class="line"><span># 或 </span></span>
<span class="line"><span>SHOW GRANTS FOR CURRENT_USER; </span></span>
<span class="line"><span># 或 </span></span>
<span class="line"><span>SHOW GRANTS FOR CURRENT_USER();</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>查看某用户的全局权限</li>
</ul>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SHOW GRANTS FOR 'user'@'主机地址';</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-5-收回权限" tabindex="-1"><a class="header-anchor" href="#_2-5-收回权限"><span>2.5 收回权限</span></a></h3>
<p><strong>注意：在将用户账户从user表删除之前，应该收回相应用户的所有权限。</strong></p>
<ul>
<li>收回权限命令</li>
</ul>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>REVOKE 权限1,权限2,…权限n ON 数据库名称.表名称 FROM 用户名@用户地址;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>举例</li>
</ul>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#收回全库全表的所有权限 </span></span>
<span class="line"><span>REVOKE ALL PRIVILEGES ON *.* FROM joe@'%'; </span></span>
<span class="line"><span>#收回mysql库下的所有表的插删改查权限 </span></span>
<span class="line"><span>REVOKE SELECT,INSERT,UPDATE,DELETE ON mysql.* FROM joe@localhost;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>注意：<code v-pre>须用户重新登录后才能生效</code></li>
</ul>
<h2 id="_3-角色管理" tabindex="-1"><a class="header-anchor" href="#_3-角色管理"><span>3. 角色管理</span></a></h2>
<h3 id="_3-1-创建角色" tabindex="-1"><a class="header-anchor" href="#_3-1-创建角色"><span>3.1 创建角色</span></a></h3>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>CREATE ROLE 'role_name'[@'host_name'] [,'role_name'[@'host_name']]...</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>角色名称的命名规则和用户名类似。如果<code v-pre>host_name省略，默认为%</code>，<code v-pre>role_name不可省略</code>，不可为空。</p>
<h3 id="_3-2-给角色赋予权限" tabindex="-1"><a class="header-anchor" href="#_3-2-给角色赋予权限"><span>3.2 给角色赋予权限</span></a></h3>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>GRANT privileges ON table_name TO 'role_name'[@'host_name'];</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上述语句中privileges代表权限的名称，多个权限以逗号隔开。可使用SHOW语句查询权限名称</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SHOW PRIVILEGES\G</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-3-查看角色的权限" tabindex="-1"><a class="header-anchor" href="#_3-3-查看角色的权限"><span>3.3 查看角色的权限</span></a></h3>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SHOW GRANTS FOR 'role_name';</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>只要你创建了一个角色，系统就会自动给你一个“<code v-pre>USAGE</code>”权限，意思是<code v-pre>连接登录数据库的权限</code>。</p>
<h3 id="_3-4-回收角色的权限" tabindex="-1"><a class="header-anchor" href="#_3-4-回收角色的权限"><span>3.4 回收角色的权限</span></a></h3>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>REVOKE privileges ON tablename FROM 'rolename';</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-5-删除角色" tabindex="-1"><a class="header-anchor" href="#_3-5-删除角色"><span>3.5 删除角色</span></a></h3>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>DROP ROLE role [,role2]...</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>注意，<code v-pre>如果你删除了角色，那么用户也就失去了通过这个角色所获得的所有权限</code>。</p>
<h3 id="_3-6-给用户赋予角色" tabindex="-1"><a class="header-anchor" href="#_3-6-给用户赋予角色"><span>3.6 给用户赋予角色</span></a></h3>
<p>角色创建并授权后，要赋给用户并处于<code v-pre>激活状态</code>才能发挥作用。</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>GRANT role [,role2,...] TO user [,user2,...];</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>查询当前已激活的角色</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SELECT CURRENT_ROLE();</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-7-激活角色" tabindex="-1"><a class="header-anchor" href="#_3-7-激活角色"><span>3.7 激活角色</span></a></h3>
<p><strong>方式1：使用set default role 命令激活角色</strong></p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SET DEFAULT ROLE ALL TO 'kangshifu'@'localhost';</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>方式2：将activate_all_roles_on_login设置为ON</strong></p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SET GLOBAL activate_all_roles_on_login=ON;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这条 SQL 语句的意思是，对<code v-pre>所有角色永久激活</code>。</p>
<h3 id="_3-8-撤销用户的角色" tabindex="-1"><a class="header-anchor" href="#_3-8-撤销用户的角色"><span>3.8 撤销用户的角色</span></a></h3>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>REVOKE role FROM user;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-9-设置强制角色-mandatory-role" tabindex="-1"><a class="header-anchor" href="#_3-9-设置强制角色-mandatory-role"><span>3.9 设置强制角色(mandatory role)</span></a></h3>
<p>方式1：服务启动前设置</p>
<div class="language-ini line-numbers-mode" data-highlighter="shiki" data-ext="ini" data-title="ini" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">[mysqld]</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379"> </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">mandatory_roles</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'role1,role2@localhost,r3@%.atguigu.com'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>方式2：运行时设置</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SET PERSIST mandatory_roles = 'role1,role2@localhost,r3@%.example.com'; #系统重启后仍然有效</span></span>
<span class="line"><span>SET GLOBAL mandatory_roles = 'role1,role2@localhost,r3@%.example.com'; #系统重启后失效</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312031906036.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


