<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161043752.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="❀写在最前-相关文章" tabindex="-1"><a class="header-anchor" href="#❀写在最前-相关文章" aria-hidden="true">#</a> ❀写在最前（相关文章）</h2>
<blockquote>
<font color=red size=4.5>**相关文章：**</font> <br><hr>
<p>💻 <a href="https://liucy.blog.csdn.net/article/details/124248236" target="_blank" rel="noopener noreferrer">zabbix5.0部署（超级详细）<ExternalLinkIcon/></a><br></p>
<hr>
<p>💻 <a href="https://liucy.blog.csdn.net/article/details/124101253" target="_blank" rel="noopener noreferrer">zabbix添加自定义监控项&amp;告警（邮件）<ExternalLinkIcon/></a><br></p>
<hr>
<p>💻 <a href="https://liucy.blog.csdn.net/article/details/125543212" target="_blank" rel="noopener noreferrer">Zabbix5.0配置企业微信告警<ExternalLinkIcon/></a><br></p>
<hr>
<p>💻 <a href="https://liucy.blog.csdn.net/article/details/125778643" target="_blank" rel="noopener noreferrer">CentOS7 离线安装 Zabbix5.0<ExternalLinkIcon/></a></p>
<hr>
<p>💻 <a href="https://download.csdn.net/download/liu_chen_yang/86168600" target="_blank" rel="noopener noreferrer">zabbix5.0离线脚本一键安装(包含服务端、客户端、脚本和使用说明)<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<p>@[toc]</p>
<blockquote>
<p>  各位运维的朋友们都有可能遇到过在公司内网环境下无法访问外网情况，无法访问外网yum源部署ZABBIX 对于rpm包依赖问题比较头疼。本文将会进行离线部署实战。同时大家也可以写成一份shell脚本直接离线安装一键部署就可以了。</p>
</blockquote>
<blockquote>
<p>  离线安装的话就需要rpm包和依赖包，那么这时候我们首先就要先在<font color=red>有外网的环境下载下来</font>，完了之后，可以将rpm打包起来，再写个执行脚本，就可以一键部署了；<font color=green>测试的话就可以找一个内网环境来测试了。</font></p>
</blockquote>
<h2 id="在有外网的环境中操作并下载离线安装包" tabindex="-1"><a class="header-anchor" href="#在有外网的环境中操作并下载离线安装包" aria-hidden="true">#</a> 在有外网的环境中操作并下载离线安装包</h2>
<h3 id="_1、获取zabbix源" tabindex="-1"><a class="header-anchor" href="#_1、获取zabbix源" aria-hidden="true">#</a> 1、获取zabbix源</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#没有wget命令的可以先下载一个wget命令</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">wget</span>

<span class="token comment">#接着下载zabbix-release-5.0-1.el7.noarch.rpm包</span>
<span class="token function">wget</span> https://mirrors.aliyun.com/zabbix/zabbix/5.0/rhel/7/x86_64/zabbix-release-5.0-1.el7.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161043171.png" alt="" loading="lazy"><br>
显示200ok即下载成功，然后我们安装；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> zabbix-release-5.0-1.el7.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161043020.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#看一下/etc/yum.repos.d目录下多了一个zabbix.repo</span>
<span class="token function">ls</span> /etc/yum.repos.d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161043819.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这就相当于下载了一个zabbix的源；</p>
<h3 id="_2、修改zabbix-repo文件" tabindex="-1"><a class="header-anchor" href="#_2、修改zabbix-repo文件" aria-hidden="true">#</a> 2、修改zabbix.repo文件</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#进入zabbix.repo文件中</span>
<span class="token function">vim</span> /etc/yum.repos.d/zabbix.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将<font color=red>zabbix-frontend </font>下面的 enabled = 0更改为<font color=red> enabled = 1</font></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161043132.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_3、修改yum源为阿里源" tabindex="-1"><a class="header-anchor" href="#_3、修改yum源为阿里源" aria-hidden="true">#</a> 3、修改yum源为阿里源</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@zabbix-5 ~<span class="token punctuation">]</span><span class="token comment"># wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo</span>

<span class="token punctuation">[</span>root@zabbix-5 ~<span class="token punctuation">]</span><span class="token comment"># yum makecache fast</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161043052.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_4、下载安装zabbix5-0所需的rpm包" tabindex="-1"><a class="header-anchor" href="#_4、下载安装zabbix5-0所需的rpm包" aria-hidden="true">#</a> 4、下载安装zabbix5.0所需的rpm包</h3>
<p>使用<font color=red>yum --downloadonly </font>进行下载rpm包和相关依赖包</p>
<font color=red>--downloaddir</font>参数可进行设置下载保存路径<h4 id="下载mariadb-mysql-数据库" tabindex="-1"><a class="header-anchor" href="#下载mariadb-mysql-数据库" aria-hidden="true">#</a> 下载mariadb（mysql）数据库</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> mariadb-server.x86_64 <span class="token parameter variable">--downloadonly</span> <span class="token parameter variable">--downloaddir</span><span class="token operator">=</span>/tmp/offline_rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="下载-zabbix主服务" tabindex="-1"><a class="header-anchor" href="#下载-zabbix主服务" aria-hidden="true">#</a> 下载 zabbix主服务</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> zabbix-server-mysql zabbix-agent <span class="token parameter variable">--downloadonly</span> <span class="token parameter variable">--downloaddir</span><span class="token operator">=</span>/tmp/offline_rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="下载-red-hat-software-collections" tabindex="-1"><a class="header-anchor" href="#下载-red-hat-software-collections" aria-hidden="true">#</a> 下载 Red Hat Software Collections</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> centos-release-scl <span class="token parameter variable">--downloadonly</span> <span class="token parameter variable">--downloaddir</span><span class="token operator">=</span>/tmp/offline_rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="安装-red-hat-software-collections" tabindex="-1"><a class="header-anchor" href="#安装-red-hat-software-collections" aria-hidden="true">#</a> 安装 Red Hat Software Collections</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> centos-release-scl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="下载-zabbix-web服务" tabindex="-1"><a class="header-anchor" href="#下载-zabbix-web服务" aria-hidden="true">#</a> 下载 Zabbix web服务</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> zabbix-web-mysql-scl zabbix-apache-conf-scl <span class="token parameter variable">--downloadonly</span> <span class="token parameter variable">--downloaddir</span><span class="token operator">=</span>/tmp/offline_rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="下载zabbix-get服务" tabindex="-1"><a class="header-anchor" href="#下载zabbix-get服务" aria-hidden="true">#</a> 下载zabbix_get服务</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> zabbix-get <span class="token parameter variable">--downloadonly</span> <span class="token parameter variable">--downloaddir</span><span class="token operator">=</span>/tmp/offline_rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5、创建本地yum仓库" tabindex="-1"><a class="header-anchor" href="#_5、创建本地yum仓库" aria-hidden="true">#</a> 5、创建本地yum仓库</h3>
<blockquote>
<p>使用createrepo来创建repository仓库，如果系统里没有该命令的话需要先进行createrepo的安装 yum -y install createrepo</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#安装createrepo</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> createrepo

<span class="token comment">#使用createrepo来创建repository仓库</span>
createrepo /tmp/offline_rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161043409.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>完了会生成一个repodata子目录</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161043093.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>将 /tmp/offline_rpm/下面全部可以打个tar包，后续直接用脚本安装即可；</p>
<h2 id="在内网中离线安装-使用脚本一键安装" tabindex="-1"><a class="header-anchor" href="#在内网中离线安装-使用脚本一键安装" aria-hidden="true">#</a> 在内网中离线安装（使用脚本一键安装）</h2>
<p><strong><font color=red>大家可以边做边写成脚本</font></strong></p>
<h3 id="_1、准备yum仓库" tabindex="-1"><a class="header-anchor" href="#_1、准备yum仓库" aria-hidden="true">#</a> 1、准备yum仓库</h3>
<p>  将 offline_rpm.tar安装包下载下来，然后传到内网服务器中，解压，并且放到/tmp目录下。</p>
<p>  /将etc/yum.repos.d 下面所有repo文件进行转移至bak文件夹下</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#移动offline_rpm.tar到/tmp目录下</span>
<span class="token function">mv</span> offline_rpm.tar /tmp/

<span class="token comment">#切换到/tmp目录下</span>
<span class="token builtin class-name">cd</span> /tmp

<span class="token comment">#解压offline_rpm.tar</span>
<span class="token function">tar</span> xf offline_rpm.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就可以看到这个目录</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161043145.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#将/etc/yum.repos.d 下面所有repo文件进行转移至bak文件夹下</span>
<span class="token function">mv</span> /etc/yum.repos.d/*.repo bak/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-1、新建一个repo源文件" tabindex="-1"><a class="header-anchor" href="#_1-1、新建一个repo源文件" aria-hidden="true">#</a> 1.1、新建一个repo源文件</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#在/etc/yum.repos.d/新建一个repo源文件</span>
<span class="token punctuation">[</span>root@localhost tmp<span class="token punctuation">]</span><span class="token comment"># vim /etc/yum.repos.d/new.repo</span>

<span class="token punctuation">[</span>New<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>New
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>file:///tmp/offline_rpm
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span>

:wq保存退出


<span class="token comment">#清除元数据缓存</span>
yum clean all
<span class="token comment">#加载元数据缓存</span>
yum makecache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、安装-zabbix-server-和-agent" tabindex="-1"><a class="header-anchor" href="#_2、安装-zabbix-server-和-agent" aria-hidden="true">#</a> 2、安装 Zabbix server 和 agent</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> zabbix-server-mysql zabbix-agent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3、安装mysql数据库" tabindex="-1"><a class="header-anchor" href="#_3、安装mysql数据库" aria-hidden="true">#</a> 3、安装mysql数据库</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> mariadb-server.x86_64 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4、安装rhel-software-collections-scls" tabindex="-1"><a class="header-anchor" href="#_4、安装rhel-software-collections-scls" aria-hidden="true">#</a> 4、安装RHEL Software collections（SCLs）</h3>
<p>Software collections是一个Linux软件多版本共存的解决方案。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> centos-release-scl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5、安装前端组件" tabindex="-1"><a class="header-anchor" href="#_5、安装前端组件" aria-hidden="true">#</a> 5、安装前端组件</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> zabbix-web-mysql-scl zabbix-apache-conf-scl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6、安装zabbix-get-调试组件" tabindex="-1"><a class="header-anchor" href="#_6、安装zabbix-get-调试组件" aria-hidden="true">#</a> 6、安装zabbix-get，调试组件</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> zabbix-get
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7、配置数据库" tabindex="-1"><a class="header-anchor" href="#_7、配置数据库" aria-hidden="true">#</a> 7、配置数据库</h3>
<h4 id="_7-1、启动mariadb并设置开机自启" tabindex="-1"><a class="header-anchor" href="#_7-1、启动mariadb并设置开机自启" aria-hidden="true">#</a> 7.1、启动mariadb并设置开机自启</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#启动mariadb</span>
systemctl start mariadb.service

<span class="token comment">#设置开机自启</span>
systemctl <span class="token builtin class-name">enable</span> mariadb.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-2、mysql安全配置向导-可忽略" tabindex="-1"><a class="header-anchor" href="#_7-2、mysql安全配置向导-可忽略" aria-hidden="true">#</a> 7.2、mysql安全配置向导（可忽略）</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>--为root用户设置密码
--删除匿名账号
--取消root用户远程登录
--删除test库和对test库的访问权限
--刷新授权表使修改生效

 mysql_secure_installation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-3、设置mysql的登录密码" tabindex="-1"><a class="header-anchor" href="#_7-3、设置mysql的登录密码" aria-hidden="true">#</a> 7.3、设置mysql的登录密码</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mysqladmin <span class="token parameter variable">-u</span> root password <span class="token string">"123456"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_7-4、设置mysql用户相关的操作" tabindex="-1"><a class="header-anchor" href="#_7-4、设置mysql用户相关的操作" aria-hidden="true">#</a> 7.4、设置mysql用户相关的操作</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#登录mysql</span>
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p123456</span>

<span class="token comment">#修改数据库字符集 </span>
MariaDB <span class="token punctuation">[</span><span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">></span> create database zabbix character <span class="token builtin class-name">set</span> utf8 collate utf8_bin<span class="token punctuation">;</span>

<span class="token comment">#创建数据库</span>
MariaDB <span class="token punctuation">[</span><span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">></span> create user zabbix@localhost identified by <span class="token string">'123456'</span><span class="token punctuation">;</span>

<span class="token comment">#用户授权</span>
MariaDB <span class="token punctuation">[</span><span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">></span> grant all privileges on zabbix.* to zabbix@localhost<span class="token punctuation">;</span>

<span class="token comment">#退出数据库</span>
MariaDB <span class="token punctuation">[</span><span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">></span> quit<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161043964.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_7-5、导入初始架构和数据" tabindex="-1"><a class="header-anchor" href="#_7-5、导入初始架构和数据" aria-hidden="true">#</a> 7.5、导入初始架构和数据</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查看sql文件路径</span>
<span class="token function">rpm</span> <span class="token parameter variable">-ql</span> zabbix-server-mysql

<span class="token comment">#切换到/usr/share/doc/zabbix-server-mysql-5.0.25/目录</span>
<span class="token builtin class-name">cd</span> /usr/share/doc/zabbix-server-mysql-5.0.25/

<span class="token comment">#解压create.sql.gz</span>
<span class="token function">gzip</span> <span class="token parameter variable">-d</span> create.sql.gz

<span class="token comment">#导入数据</span>
mysql <span class="token parameter variable">-uzabbix</span> <span class="token parameter variable">-p123456</span> zabbix <span class="token operator">&lt;</span>create.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完了之后可以自己进入数据库查验一下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#登录、进入mysql</span>
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p123456</span>

<span class="token comment">#查看所有数据库</span>
MariaDB <span class="token punctuation">[</span><span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">></span> show databases<span class="token punctuation">;</span>

<span class="token comment">#查看数据库表</span>
MariaDB <span class="token punctuation">[</span><span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">></span> use zabbix<span class="token punctuation">;</span>
MariaDB <span class="token punctuation">[</span>zabbix<span class="token punctuation">]</span><span class="token operator">></span> show tables<span class="token punctuation">;</span>
<span class="token comment">#就会看到很多表，这就说明导入成功了；</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就会看到一个zabbix目录</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161042901.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_8、修改-zabbix-server-和-php配置文件" tabindex="-1"><a class="header-anchor" href="#_8、修改-zabbix-server-和-php配置文件" aria-hidden="true">#</a> 8、修改 zabbix-server 和 php配置文件</h3>
<h4 id="_8-1、编辑-zabbix-server-conf" tabindex="-1"><a class="header-anchor" href="#_8-1、编辑-zabbix-server-conf" aria-hidden="true">#</a> 8.1、编辑 zabbix_server.conf</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#进入zabbix_server.conf配置文件中</span>
<span class="token function">vim</span> /etc/zabbix/zabbix_server.conf

<span class="token comment">#找到对应项有注释则取消；没有的则添加；</span>
<span class="token assign-left variable">DBHost</span><span class="token operator">=</span> localhost
DBPassword <span class="token operator">=</span> <span class="token number">123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-2、编辑php配置文件" tabindex="-1"><a class="header-anchor" href="#_8-2、编辑php配置文件" aria-hidden="true">#</a> 8.2、编辑php配置文件</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#进入php的配置文件</span>
<span class="token function">vim</span> /etc/opt/rh/rh-php72/php-fpm.d/zabbix.conf

<span class="token comment">#删除第25行，也就是最后一行；</span>
dd就可以删除了

<span class="token comment">#更改时区为上海时区</span>
php_value<span class="token punctuation">[</span>date.timezone<span class="token punctuation">]</span> <span class="token operator">=</span> Asia/Shanghai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存退出，启动服务就可以；</p>
<h3 id="_9、启动所有服务并设置开机自启" tabindex="-1"><a class="header-anchor" href="#_9、启动所有服务并设置开机自启" aria-hidden="true">#</a> 9、启动所有服务并设置开机自启</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#启动zabbix-server zabbix-agent httpd rh-php72-php-fpm</span>
systemctl restart zabbix-server zabbix-agent httpd rh-php72-php-fpm
<span class="token comment">#设置开机自启</span>
systemctl <span class="token builtin class-name">enable</span> zabbix-server zabbix-agent httpd rh-php72-php-fpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161042667.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_10、如果存在问题请检查日志" tabindex="-1"><a class="header-anchor" href="#_10、如果存在问题请检查日志" aria-hidden="true">#</a> 10、如果存在问题请检查日志</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> /var/log/zabbix_server.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>常见问题：</font></strong></p>
<blockquote>
<p><strong><font color=red>问题1：</font></strong><br>
cannot start preprocessing service: Cannot bind socket to<br>
“/var/run/zabbix/zabbix_server_preprocessing.sock”: [13] Permission denied.<br>
<strong><font color=green>解决：</font></strong> 关闭系统防火墙：</p>
<p>systemctl stop firewalld.service #停止firewall<br>
systemctl disable firewalld.service #禁止firewall开机启动<br>
重启 zabbix 服务： systemctl start zabbix-server zabbix-agent httpd<br><br>
<strong><font color=red>问题2：</font></strong><br>
cannot start alert manager service: Cannot bind socket to<br>
“/var/run/zabbix/zabbix_server_alerter.sock”: [13] Permission denied.</p>
</blockquote>
<font color=green>**解决：**</font>关闭selinux： <p>修改 etc/selinux/config 设置SELINUX=disabled 重启系统<br>
setenforce 0（如果不想重启服务器可以运行此命令）。#使配置升效。 重启 zabbix 服务： systemctl start<br>
zabbix-server zabbix-agent httpd</p>
<h2 id="页面访问" tabindex="-1"><a class="header-anchor" href="#页面访问" aria-hidden="true">#</a> 页面访问</h2>
<blockquote>
<p>ip/zabbix</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161042754.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>一路next step，到这个要输入密码，密码是123456</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161042169.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>下一步，需要你给这个监控起一个名字；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161042545.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>一直下一步,直到登录（默认的账号是：Admin   密码是：zabbix）</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161042952.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>登录进入页面就可以了；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161042611.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="重要" tabindex="-1"><a class="header-anchor" href="#重要" aria-hidden="true">#</a> 重要：</h2>
<p>需要脚本安装一键部署的：<a href="https://download.csdn.net/download/liu_chen_yang/86168600" target="_blank" rel="noopener noreferrer">zabbix5.0离线脚本一键安装(包含服务端、客户端、脚本和使用说明) <ExternalLinkIcon/></a></p>
</div></template>


