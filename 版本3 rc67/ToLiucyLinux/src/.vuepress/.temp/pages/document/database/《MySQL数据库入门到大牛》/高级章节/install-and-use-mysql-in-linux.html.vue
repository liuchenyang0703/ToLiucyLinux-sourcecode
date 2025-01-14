<template><div><div class="hint-container tip">
<p class="hint-container-title">友情提示</p>
<p><strong>转载须知</strong>: 以下所有文章整理于B站宋红康老师的《MySQL数据库入门到大牛》。<a href="https://www.bilibili.com/video/BV1iq4y1u7vj?p=1&amp;vd_source=cea816a08805c218ac4390ae9b61ae31" target="_blank" rel="noopener noreferrer">MySQL</a></p>
</div>
<h2 id="_1-安装前说明" tabindex="-1"><a class="header-anchor" href="#_1-安装前说明"><span>1. 安装前说明</span></a></h2>
<h3 id="_1-1-查看是否安装过mysql" tabindex="-1"><a class="header-anchor" href="#_1-1-查看是否安装过mysql"><span>1.1 查看是否安装过MySQL</span></a></h3>
<ul>
<li>如果你是用rpm安装, 检查一下RPM PACKAGE：</li>
</ul>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -qa</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # -i 忽略大小写</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>检查mysql service：</li>
</ul>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> status</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysqld.service</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_1-2-mysql的卸载" tabindex="-1"><a class="header-anchor" href="#_1-2-mysql的卸载"><span>1.2 MySQL的卸载</span></a></h3>
<p><strong>1.</strong> <strong>关闭</strong> <strong>mysql</strong> <strong>服务</strong></p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> stop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysqld.service</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>2.</strong> <strong>查看当前</strong> <strong>mysql</strong> <strong>安装状况</strong></p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -qa</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 或</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> list</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> installed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.</strong> <strong>卸载上述命令查询出的已安装程序</strong></p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> remove</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql-xxx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql-xxx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql-xxx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysqk-xxxx</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>务必卸载干净，反复执行<code v-pre>rpm -qa | grep -i mysql</code>确认是否有卸载残留</p>
<p><strong>4.</strong> <strong>删除</strong> <strong>mysql</strong> <strong>相关文件</strong></p>
<ul>
<li>查找相关文件</li>
</ul>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">find</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>删除上述命令查找出的相关文件</li>
</ul>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -rf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> xxx</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>5.删除 my.cnf</strong></p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -rf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/my.cnf</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-mysql的linux版安装" tabindex="-1"><a class="header-anchor" href="#_2-mysql的linux版安装"><span>2. MySQL的Linux版安装</span></a></h2>
<h3 id="_2-1-centos7下检查mysql依赖" tabindex="-1"><a class="header-anchor" href="#_2-1-centos7下检查mysql依赖"><span>2.1 CentOS7下检查MySQL依赖</span></a></h3>
<p><strong>1.</strong> <strong>检查/tmp临时目录权限（必不可少）</strong></p>
<p>由于mysql安装过程中，会通过mysql用户在/tmp目录下新建tmp_db文件，所以请给/tmp较大的权限。执行 ：</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">chmod</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -R</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 777</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /tmp</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>2.</strong> <strong>安装前，检查依赖</strong></p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -qa</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">|</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> libaio</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -qa</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">|</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> net-tools</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-centos7下mysql安装过程" tabindex="-1"><a class="header-anchor" href="#_2-2-centos7下mysql安装过程"><span>2.2 CentOS7下MySQL安装过程</span></a></h3>
<p><strong>1.</strong> <strong>将安装程序拷贝到/opt目录下</strong></p>
<p>在mysql的安装文件目录下执行：（必须按照顺序执行）</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -ivh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql-community-common-8.0.25-1.el7.x86_64.rpm</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -ivh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql-community-client-plugins-8.0.25-1.el7.x86_64.rpm</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -ivh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql-community-libs-8.0.25-1.el7.x86_64.rpm</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -ivh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql-community-client-8.0.25-1.el7.x86_64.rpm</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -ivh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql-community-server-8.0.25-1.el7.x86_64.rpm</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>rpm</code>是Redhat Package Manage缩写，通过RPM的管理，用户可以把源代码包装成以rpm为扩展名的文件形式，易于安装。</li>
<li><code v-pre>-i</code>, --install 安装软件包</li>
<li><code v-pre>-v</code>, --verbose 提供更多的详细信息输出</li>
<li><code v-pre>-h</code>, --hash 软件包安装的时候列出哈希标记 (和 -v 一起使用效果更好)，展示进度条</li>
</ul>
<blockquote>
<p>若存在mariadb-libs问题，则执行<strong>yum remove mysql-libs</strong>即可</p>
</blockquote>
<h3 id="_2-3-查看mysql版本" tabindex="-1"><a class="header-anchor" href="#_2-3-查看mysql版本"><span>2.3 查看MySQL版本</span></a></h3>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#或</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mysqladmin</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --version</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-服务的初始化" tabindex="-1"><a class="header-anchor" href="#_2-4-服务的初始化"><span>2.4 服务的初始化</span></a></h3>
<p>为了保证数据库目录与文件的所有者为 mysql 登录用户，如果你是以 root 身份运行 mysql 服务，需要执行下面的命令初始化：</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mysqld</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --initialize</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --user=mysql</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>说明： --initialize 选项默认以“安全”模式来初始化，则会为 root 用户生成一个密码并将<code v-pre>该密码标记为过期</code>，登录后你需要设置一个新的密码。生成的<code v-pre>临时密码</code>会往日志中记录一份。</p>
<p>查看密码：</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /var/log/mysqld.log</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>root@localhost: 后面就是初始化的密码</p>
<h3 id="_2-5-启动mysql-查看状态" tabindex="-1"><a class="header-anchor" href="#_2-5-启动mysql-查看状态"><span>2.5 启动MySQL，查看状态</span></a></h3>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#加不加.service后缀都可以 </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">启动：systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysqld.service</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">关闭：systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> stop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysqld.service</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">重启：systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysqld.service</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">查看状态：systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> status</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysqld.service</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-查看mysql服务是否自启动" tabindex="-1"><a class="header-anchor" href="#_2-6-查看mysql服务是否自启动"><span>2.6 查看MySQL服务是否自启动</span></a></h3>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> list-unit-files</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">|</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysqld.service</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>如不是enabled可以运行如下命令设置自启动</li>
</ul>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysqld.service</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>如果希望不进行自启动，运行如下命令设置</li>
</ul>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> disable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysqld.service</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_3-mysql登录" tabindex="-1"><a class="header-anchor" href="#_3-mysql登录"><span>3. MySQL登录</span></a></h2>
<h3 id="_3-1-首次登录" tabindex="-1"><a class="header-anchor" href="#_3-1-首次登录"><span>3.1 首次登录</span></a></h3>
<p>通过<code v-pre>mysql -hlocalhost -P3306 -uroot -p</code>进行登录，在Enter password：录入初始化密码</p>
<h3 id="_3-2-修改密码" tabindex="-1"><a class="header-anchor" href="#_3-2-修改密码"><span>3.2 修改密码</span></a></h3>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_password';</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-3-设置远程登录" tabindex="-1"><a class="header-anchor" href="#_3-3-设置远程登录"><span>3.3 设置远程登录</span></a></h3>
<p><strong>1.</strong> <strong>确认网络</strong></p>
<p>1.在远程机器上使用ping ip地址<code v-pre>保证网络畅通</code></p>
<p>2.在远程机器上使用telnet命令<code v-pre>保证端口号开放</code>访问</p>
<p><strong>2.</strong> <strong>关闭防火墙或开放端口</strong></p>
<p><strong>方式一：关闭防火墙</strong></p>
<ul>
<li>CentOS6 ：</li>
</ul>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> iptables</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> stop</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>CentOS7：</li>
</ul>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#开启防火墙</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> firewalld.service</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看防火墙状态</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> status</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> firewalld.service</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#关闭防火墙</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> stop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> firewalld.service</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#设置开机启用防火墙 </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> firewalld.service</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#设置开机禁用防火墙 </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> disable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> firewalld.service</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式二：开放端口</strong></p>
<ul>
<li>查看开放的端口号</li>
</ul>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --list-all</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>设置开放的端口号</li>
</ul>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --add-service=http</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --permanent</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --add-port=3306/tcp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --permanent</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>重启防火墙</li>
</ul>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --reload</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_4-linux下修改配置" tabindex="-1"><a class="header-anchor" href="#_4-linux下修改配置"><span>4. Linux下修改配置</span></a></h2>
<ul>
<li>修改允许远程登陆</li>
</ul>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>use mysql;</span></span>
<span class="line"><span>select Host,User from user;</span></span>
<span class="line"><span>update user set host = '%' where user ='root';</span></span>
<span class="line"><span>flush privileges;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><code v-pre>%</code>是个 通配符 ，如果Host=192.168.1.%，那么就表示只要是IP地址前缀为“192.168.1.”的客户端都可以连接。如果<code v-pre>Host=%</code>，表示所有IP都有连接权限。</p>
<p>注意：在生产环境下不能为了省事将host设置为%，这样做会存在安全问题，具体的设置可以根据生产环境的IP进行设置。</p>
</blockquote>
<p>配置新连接报错：错误号码 2058，分析是 mysql 密码加密方法变了。</p>
<p>**解决方法一：**升级远程连接工具版本</p>
<p><strong>解决方法二：</strong></p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'abc123';</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_5-字符集的相关操作" tabindex="-1"><a class="header-anchor" href="#_5-字符集的相关操作"><span>5. 字符集的相关操作</span></a></h2>
<h3 id="_5-1-各级别的字符集" tabindex="-1"><a class="header-anchor" href="#_5-1-各级别的字符集"><span>5.1 各级别的字符集</span></a></h3>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>show variables like 'character%';</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>character_set_server：服务器级别的字符集</li>
<li>character_set_database：当前数据库的字符集</li>
<li>character_set_client：服务器解码请求时使用的字符集</li>
<li>character_set_connection：服务器处理请求时会把请求字符串从character_set_client转为character_set_connection</li>
<li>character_set_results：服务器向客户端返回数据时使用的字符集</li>
</ul>
<p><strong>小结</strong></p>
<ul>
<li>如果<code v-pre>创建或修改列</code>时没有显式的指定字符集和比较规则，则该列<code v-pre>默认用表的</code>字符集和比较规则</li>
<li>如果<code v-pre>创建表时</code>没有显式的指定字符集和比较规则，则该表<code v-pre>默认用数据库的</code>字符集和比较规则</li>
<li>如果<code v-pre>创建数据库时</code>没有显式的指定字符集和比较规则，则该数据库<code v-pre>默认用服务器的</code>字符集和比较规则</li>
</ul>
<h3 id="_5-2-请求到响应过程中字符集的变化" tabindex="-1"><a class="header-anchor" href="#_5-2-请求到响应过程中字符集的变化"><span>5.2 请求到响应过程中字符集的变化</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" data-title="mermaid" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">graph TB</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">A(客户端) --> |"使用操作系统的字符集编码请求字符串"| B(从character_set_client转换为character_set_connection)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">B --> C(从character_set_connection转换为具体的列使用的字符集)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">C --> D(将查询结果从具体的列上使用的字符集转换为character_set_results)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">D --> |"使用操作系统的字符集解码响应的字符串"| A</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312031906036.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


