<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者</a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主</a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主</a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区</a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言"><span>一、前言</span></a></h2>
<blockquote>
<p>  项目所需，需要在<code v-pre>windows</code>上部署一个<code v-pre>Mysql</code>数据库，版本为<code v-pre>5.7.38</code>，刚好前两天在家也装了一个，只不过是别的版本，这里给大家演示的版本为<code v-pre>5.7.38</code>；</p>
</blockquote>
<h2 id="二、官网下载绿色版安装包" tabindex="-1"><a class="header-anchor" href="#二、官网下载绿色版安装包"><span>二、官网下载绿色版安装包</span></a></h2>
<blockquote>
<p>Mysql官网下载地址：<a href="https://downloads.mysql.com/archives/community/" target="_blank" rel="noopener noreferrer">https://downloads.mysql.com/archives/community/</a></p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/d1f7cb8c7c3a499db406389e46a782c2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="三、解压安装包" tabindex="-1"><a class="header-anchor" href="#三、解压安装包"><span>三、解压安装包</span></a></h2>
<p>放到任意目录或自己的专用位置，尽量目录名都为英文；</p>
<ul>
<li>解压压缩包</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/fe404b3fb0f44ed3bb64e9bf8743595e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="四、配置-my-ini-文件" tabindex="-1"><a class="header-anchor" href="#四、配置-my-ini-文件"><span>四、配置 my.ini 文件</span></a></h2>
<ul>
<li>配置 <font color=gree>my.ini </font> 文件</li>
</ul>
<p>在解压下来的<code v-pre>mysql-5.7.38-winx64 </code>下创建一个文件，并进入文件将以下内容写入到里面；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[mysqld]</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 设置3306端口</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">port</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">3306</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 设置mysql的安装目录</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">basedir</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">E:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ysql</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ysql-5.7.38-winx64</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 设置mysql数据库的数据的存放目录</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">datadir</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">E:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ysql</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ysql-5.7.38-winx64</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ata</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 允许最大连接数</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">max_connections</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">200</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">max_connect_errors</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">10</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 服务端使用的字符集默认为UTF8</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">character-set-server</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">utf8</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 创建新表时将使用的默认存储引擎</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">default-storage-engine</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">INNODB</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 默认使用“mysql_native_password”插件认证</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">default_authentication_plugin</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">mysql_native_password</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[mysql]</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 设置mysql客户端默认字符集</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">default-character-set</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">utf8mb4</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[client]</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 设置mysql客户端连接服务端时默认使用的端口</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">port</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">3306</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">default-character-set</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">utf8</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完成之后，保存退出，修改文件名为：<code v-pre>my.ini</code>；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/aba0f14a39684b229b4806a5dcb95bf6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="五、运行、安装-mysql" tabindex="-1"><a class="header-anchor" href="#五、运行、安装-mysql"><span>五、运行、安装 Mysql</span></a></h2>
<h3 id="_5-1-使用管理员运行命令提示符" tabindex="-1"><a class="header-anchor" href="#_5-1-使用管理员运行命令提示符"><span>5.1 使用管理员运行命令提示符</span></a></h3>
<ul>
<li><code v-pre>ctrl + s</code> 搜索 <code v-pre>命令提示符</code> 以管理员方式打开；</li>
<li>如果在e盘，先输入<code v-pre>e:</code> ，然后在使用cd 切换到mysql的bin目录下，如果是c盘，就可以直接<code v-pre>cd 目录</code> 切换过去；</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/9351b1ed6c4e464884abff4225196eca.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/4247912a4c4f48e9b6f9ffdeec2ab2f7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_5-2-执行mysql初始化命令" tabindex="-1"><a class="header-anchor" href="#_5-2-执行mysql初始化命令"><span>5.2 执行MySQL初始化命令</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mysqld</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --initialize</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --console</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>等待执行完，会得到初始化密码，需要保存住，改完数据库密码就用不到了；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/57a35278375a45fba43605a6b1962863.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>画框的就是初始化生成的密码了；需要先暂时保存住，<font color=red>很重要</font>。</p>
<h3 id="_5-3-安装mysql的服务" tabindex="-1"><a class="header-anchor" href="#_5-3-安装mysql的服务"><span>5.3 安装mysql的服务</span></a></h3>
<p><code v-pre>mysqld --install 服务名</code>(不写的话默认服务名是mysql)</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mysqld</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/54f682d00eae4d24bb782bac9dd448ed.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>安装完成；</p>
<h3 id="_5-4-启动mysql服务" tabindex="-1"><a class="header-anchor" href="#_5-4-启动mysql服务"><span>5.4 启动mysql服务</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">net</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这样就启动成功了。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/055553479d8542ba840b4a5ed77155b5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>也可以使用任务管理，查看服务进程，存在则已经启动。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/12602c32bdb84802b450140895ff1abb.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="六、登陆-mysql-并-修改登陆密码" tabindex="-1"><a class="header-anchor" href="#六、登陆-mysql-并-修改登陆密码"><span>六、登陆 Mysql 并 修改登陆密码</span></a></h2>
<p><strong>输入命令：mysql -u root -p ，（其中-u root表示用户名为root，-p表示登录密码）登录，然后提示输入密码，密位为5.2初始化所画的红框。</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -uroot</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 然后让输入密码，就输入刚刚初始化完的密码进入；</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>由于自动生成的密码比较复杂，我们可以更改密码，更改密码命令为：<code v-pre>alter user root@'localhost' identified by '123123';</code> 其中单引号内为更改后的密码；密码可以自己设定。</strong></p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" data-title="mysql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>alter user root@'localhost' identified by '123123';</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>设置完之后退出<code v-pre>exit</code>，验证密码登陆；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/819da59d8cf345bba202810983891a9b.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="七、使用数据库连接工具测试" tabindex="-1"><a class="header-anchor" href="#七、使用数据库连接工具测试"><span>七、使用数据库连接工具测试</span></a></h2>
<p>这里我是用<code v-pre>Navicat</code> ，大家也可以使用其他工具来进行测试；</p>
<blockquote>
<p>连接名：自己随便输入</p>
<p>主机：<code v-pre>localhost</code> 或 <code v-pre>127.0.0.1</code></p>
<p>端口：默认的<code v-pre>3306</code></p>
<p>用户名：默认的<code v-pre>root</code></p>
<p>密码：自己刚刚设置的</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/22c6c87dca394517b6af4145560a8d19.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>点击<code v-pre>测试连接</code>，出现成功及可以连接</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/ca01d606fd98479bb8d8f19dc0e5700b.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="八、其他-mysql-操作命令" tabindex="-1"><a class="header-anchor" href="#八、其他-mysql-操作命令"><span>八、其他 Mysql 操作命令</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 安装 mysql 服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mysqld</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 启动 mysql 服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">net</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 关闭 mysql 服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">net</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> stop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 卸载 mysql 服务</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">## 卸载服务时先停止</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">net</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> stop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">## 再卸载服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> delete</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注：需要彻底卸载服务，在命令行卸载完之后，还需要删除mysql的安装文件，<font color=red>如果配置了环境变量，记得也需要删除以下环境变量。</font></p>
</blockquote>
</div></template>


