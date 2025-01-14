<template><div><h2 id="🏆zabbix5-0部署" tabindex="-1"><a class="header-anchor" href="#🏆zabbix5-0部署" aria-hidden="true">#</a> 🏆Zabbix5.0部署</h2>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161020511.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="🥇系统环境" tabindex="-1"><a class="header-anchor" href="#🥇系统环境" aria-hidden="true">#</a> 🥇系统环境</h3>
<p>系统环境：CentOS-7-x86_64-Minimal-1708</p>
<h3 id="🥇关闭防火墙与selinux" tabindex="-1"><a class="header-anchor" href="#🥇关闭防火墙与selinux" aria-hidden="true">#</a> 🥇关闭防火墙与selinux</h3>
<p>关闭防火墙</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl stop firewalld <span class="token operator">&amp;&amp;</span> systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>关闭selinux</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">'s/SELINUX=enforcing/SELINUX=disabled/'</span> /etc/selinux/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后重启reboot</p>
<h3 id="🥇替换阿里云zabbix源" tabindex="-1"><a class="header-anchor" href="#🥇替换阿里云zabbix源" aria-hidden="true">#</a> 🥇替换阿里云Zabbix源</h3>
<p>shell脚本zabbix_aliyun.sh</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vi</span> zabbix_aliyun.sh 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>复制下面脚本</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
 
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">"请给出要安装的zabbix版本号，建议使用4.x的版本  <span class="token entity" title="\033">\033</span>[31musage：./zabbix_aliyun.sh 4.0|4.4|4.5|5.0 <span class="token entity" title="\033">\033</span>[0m"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"例如要安装4.4版本，在命令行写上 ./zabbix_aliyun.sh 4.4"</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">$1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>
<span class="token assign-left variable">VERSION</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /etc/yum.repos.d/zabbix.repo <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/repos.d/zabbix.repo
<span class="token keyword">fi</span>
<span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> zabbix-release <span class="token operator">&amp;&amp;</span> <span class="token function">rpm</span> <span class="token parameter variable">-e</span> zabbix-release
<span class="token function">rpm</span> <span class="token parameter variable">-Uvh</span> https://mirrors.aliyun.com/zabbix/zabbix/<span class="token variable">$VERSION</span>/rhel/7/x86_64/zabbix-release-<span class="token variable">$VERSION</span>-1.el7.noarch.rpm
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">"s@zabbix/.*/rhel@zabbix/<span class="token variable">$VERSION</span>/rhel@g"</span> /etc/yum.repos.d/zabbix.repo
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">'s@repo.zabbix.com@mirrors.aliyun.com/zabbix@g'</span> /etc/yum.repos.d/zabbix.repo
<span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">"阿里云的zabbix源替换成功"</span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>
yum clean all
yum makecache fast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>然后执行命令：</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">bash</span> zabbix_aliyun.sh <span class="token number">5.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161019477.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="🥇由于zabbix提供集中的web监控管理界面-因此服务在web界面的呈现需要lamp架构支持。安装httpd-php" tabindex="-1"><a class="header-anchor" href="#🥇由于zabbix提供集中的web监控管理界面-因此服务在web界面的呈现需要lamp架构支持。安装httpd-php" aria-hidden="true">#</a> 🥇由于zabbix提供集中的web监控管理界面，因此服务在web界面的呈现需要LAMP架构支持。安装httpd php</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> httpd  php php-mysql php-gd libjpeg* php-ldap php-odbc php-pear php-xml php-xmlrpc php-mhash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="🥈安装常用的开发软件" tabindex="-1"><a class="header-anchor" href="#🥈安装常用的开发软件" aria-hidden="true">#</a> 🥈安装常用的开发软件</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token function">groups</span> <span class="token function">install</span> <span class="token string">"Development Tools"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看工具包</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token function">groups</span> info <span class="token string">"Development Tools"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="🥈安装zabbix5-0仓库" tabindex="-1"><a class="header-anchor" href="#🥈安装zabbix5-0仓库" aria-hidden="true">#</a> 🥈安装zabbix5.0仓库</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">wget</span>  --no-check-certificate https://repo.zabbix.com/zabbix/5.0/rhel/7/x86_64/zabbix-release-5.0-1.el7.noarch.rpm

<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> zabbix-release-5.0-1.el7.noarch.rpm

yum clean all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161019735.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="🥈安装zabbix-server-和agent" tabindex="-1"><a class="header-anchor" href="#🥈安装zabbix-server-和agent" aria-hidden="true">#</a> 🥈安装zabbix server 和agent</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> zabbix-server-mysql zabbix-agent <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161019565.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="🏅启用red-hat软件集合" tabindex="-1"><a class="header-anchor" href="#🏅启用red-hat软件集合" aria-hidden="true">#</a> 🏅启用Red Hat软件集合</h3>
<blockquote>
<p>SCL(Software Collections)可以让你在同一个操作系统上安装和使用多个版本的软件，而不会影响整个系统的安装包。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> centos-release-scl <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161019249.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="🏅启用zabbix-deprecated-repository" tabindex="-1"><a class="header-anchor" href="#🏅启用zabbix-deprecated-repository" aria-hidden="true">#</a> 🏅启用zabbix-deprecated repository</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vi</span> /etc/yum.repos.d/zabbix.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161019117.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="🥈安装zabbix前端" tabindex="-1"><a class="header-anchor" href="#🥈安装zabbix前端" aria-hidden="true">#</a> 🥈安装zabbix前端</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> zabbix-web-mysql-scl zabbix-apache-conf-scl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161019214.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="🥈安装mysql数据库" tabindex="-1"><a class="header-anchor" href="#🥈安装mysql数据库" aria-hidden="true">#</a> 🥈安装mysql数据库</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> mariadb-server mariadb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161019465.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="🏅启动mariadb" tabindex="-1"><a class="header-anchor" href="#🏅启动mariadb" aria-hidden="true">#</a> 🏅启动mariadb</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl start mariadb<span class="token operator">&amp;&amp;</span>systemctl <span class="token builtin class-name">enable</span> mariadb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="🏅启动mysql后执行初始化安全设置" tabindex="-1"><a class="header-anchor" href="#🏅启动mysql后执行初始化安全设置" aria-hidden="true">#</a> 🏅启动mysql后执行初始化安全设置</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code> <span class="token comment">#设置mysql密码为123456</span>
mysqladmin <span class="token parameter variable">-u</span> root password <span class="token string">"123456"</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🥈创建数据库" tabindex="-1"><a class="header-anchor" href="#🥈创建数据库" aria-hidden="true">#</a> 🥈创建数据库</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#进入mysql</span>
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>   			<span class="token comment">#输入密码123456</span>
<span class="token comment">#创建数据库，格式为utf8</span>
create database zabbix character <span class="token builtin class-name">set</span> utf8 collate utf8_bin<span class="token punctuation">;</span>
<span class="token comment">#创建用户</span>
create user zabbix@localhost identified by <span class="token string">'password'</span><span class="token punctuation">;</span>          <span class="token comment">#密码是password,导入Zabbix数据库结构和数据输入这个密码</span>
<span class="token comment">#给zabbix用户权限</span>
grant all privileges on zabbix.* to zabbix@localhost<span class="token punctuation">;</span>
<span class="token comment">#退出</span>
quit<span class="token punctuation">;</span>                                                           
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161019568.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="🥈在zabbix服务器主机上-导入初始架构和数据。系统将提示您输入新创建的密码" tabindex="-1"><a class="header-anchor" href="#🥈在zabbix服务器主机上-导入初始架构和数据。系统将提示您输入新创建的密码" aria-hidden="true">#</a> 🥈在Zabbix服务器主机上，导入初始架构和数据。系统将提示您输入新创建的密码</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>zcat /usr/share/doc/zabbix-server-mysql*/create.sql.gz <span class="token operator">|</span> mysql <span class="token parameter variable">-uzabbix</span> <span class="token parameter variable">-p</span> zabbix                 <span class="token comment">#回车密码是password</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="🏅为zabbix服务器配置数据库" tabindex="-1"><a class="header-anchor" href="#🏅为zabbix服务器配置数据库" aria-hidden="true">#</a> 🏅为zabbix服务器配置数据库</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#进入zabbix配置文件</span>
<span class="token function">vim</span> /etc/zabbix/zabbix_server.conf

<span class="token comment">#切记要找到相对应的地方，可以/DBHost或者/DBPassword搜索，确保不会出问题；</span>
<span class="token comment">#解除注销的DBHost=localhost   正常来说在91行</span>
<span class="token assign-left variable">DBHost</span><span class="token operator">=</span>localhost
<span class="token comment">#没有DBPassword，添加一个,密码要是你设置的密码，不要直接复制粘贴     正常来说在125行写入</span>
<span class="token assign-left variable">DBPassword</span><span class="token operator">=</span>password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🏅为zabbix前端配置php" tabindex="-1"><a class="header-anchor" href="#🏅为zabbix前端配置php" aria-hidden="true">#</a> 🏅为Zabbix前端配置PHP</h3>
<blockquote>
<p>编辑文件/etc/opt/rh/rh-php72/php-fpm.d/zabbix.conf，取消注释并为您设置正确的时区。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#进入zabbix配置</span>
<span class="token function">vim</span> /etc/opt/rh/rh-php72/php-fpm.d/zabbix.conf

<span class="token comment">#删除第25行，也就是最后一行</span>
<span class="token comment">#然后在最后一行添加时区</span>
php_value<span class="token punctuation">[</span>date.timezone<span class="token punctuation">]</span> <span class="token operator">=</span> Asia/Shanghai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🥇-启动zabbix服务" tabindex="-1"><a class="header-anchor" href="#🥇-启动zabbix服务" aria-hidden="true">#</a> 🥇 启动zabbix服务</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl restart zabbix-server zabbix-agent httpd rh-php72-php-fpm<span class="token operator">&amp;&amp;</span>systemctl <span class="token builtin class-name">enable</span> zabbix-server zabbix-agent httpd rh-php72-php-fpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="🥇配置zabbix-web前端" tabindex="-1"><a class="header-anchor" href="#🥇配置zabbix-web前端" aria-hidden="true">#</a> 🥇配置Zabbix Web前端</h3>
<blockquote>
<ul>
<li>浏览器输入<a href="http://ip/zabbix" target="_blank" rel="noopener noreferrer">http://ip/zabbix<ExternalLinkIcon/></a><br>
<br></li>
<li>初始用户名：Admin，初始密码为：zabbix<br>
<br></li>
<li>点next step下一步</li>
</ul>
</blockquote>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161019163.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161019769.png" alt="" loading="lazy"></p>
<blockquote>
<ul>
<li>配置mysql数据库账号和密码， 输入zabbix帐户的密码，点next step下一步</li>
</ul>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161019094.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<ul>
<li>Name那里起一个名， 点next step下一步</li>
</ul>
</blockquote>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161019013.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161019423.png" alt="" loading="lazy"></p>
<p><strong><font color=red>至此zabbix前端配置完成</font></strong></p>
<p>输入账号Admin密码zabbix</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161019718.png" alt="" loading="lazy"><br>
进入zabbix页面<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161018395.png" alt="" loading="lazy"></p>
<h3 id="🥇-后续配置zabbix页面语言为中文" tabindex="-1"><a class="header-anchor" href="#🥇-后续配置zabbix页面语言为中文" aria-hidden="true">#</a> 🥇 后续配置zabbix页面语言为中文</h3>
<p>1.Zabbix前端界面设置成中文<br>
选择User settings,语言选择中文，点击update</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161018482.png" alt="" loading="lazy"><br>
就修改成功了，同时zabbix也就部署完成了。<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161018302.png" alt="" loading="lazy"></p>
<h2 id="🥇-更多の推荐の提议" tabindex="-1"><a class="header-anchor" href="#🥇-更多の推荐の提议" aria-hidden="true">#</a> 🥇 更多の推荐の提议</h2>
<blockquote>
<p>  如果感觉上面做的有问题可以评论或私信联系我，有哪个地方写的有问题也可以评论或私信联系我，感谢大家的支持🙏<br><br>
  下面这个是你可以不用按上面的步骤做，可以直接跳转到哪个页面下载离线包（安装包）和脚本，直接运行就可以，脚本和安装包都是亲测过的，有问题可以随时联系我。<br><br>
<strong><font color=red>  我的运行环境是centos7</font></strong></p>
</blockquote>
<p>👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br>
<a href="https://download.csdn.net/download/liu_chen_yang/86168600" target="_blank" rel="noopener noreferrer">zabbix5.0离线脚本一键安装(包含服务端、客户端、脚本和使用说明)<ExternalLinkIcon/></a><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161018540.gif" alt="" loading="lazy"></p>
</div></template>


