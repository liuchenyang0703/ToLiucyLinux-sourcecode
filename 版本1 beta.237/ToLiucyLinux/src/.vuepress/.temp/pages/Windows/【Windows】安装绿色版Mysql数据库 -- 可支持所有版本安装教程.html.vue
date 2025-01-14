<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言" aria-hidden="true">#</a> 一、前言</h2>
<blockquote>
<p>  项目所需，需要在<code v-pre>windows</code>上部署一个<code v-pre>Mysql</code>数据库，版本为<code v-pre>5.7.38</code>，刚好前两天在家也装了一个，只不过是别的版本，这里给大家演示的版本为<code v-pre>5.7.38</code>；</p>
</blockquote>
<h2 id="二、官网下载绿色版安装包" tabindex="-1"><a class="header-anchor" href="#二、官网下载绿色版安装包" aria-hidden="true">#</a> 二、官网下载绿色版安装包</h2>
<blockquote>
<p>Mysql官网下载地址：<a href="https://downloads.mysql.com/archives/community/" target="_blank" rel="noopener noreferrer">https://downloads.mysql.com/archives/community/<ExternalLinkIcon/></a></p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/d1f7cb8c7c3a499db406389e46a782c2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="三、解压安装包" tabindex="-1"><a class="header-anchor" href="#三、解压安装包" aria-hidden="true">#</a> 三、解压安装包</h2>
<p>放到任意目录或自己的专用位置，尽量目录名都为英文；</p>
<ul>
<li>解压压缩包</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/fe404b3fb0f44ed3bb64e9bf8743595e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="四、配置-my-ini-文件" tabindex="-1"><a class="header-anchor" href="#四、配置-my-ini-文件" aria-hidden="true">#</a> 四、配置 my.ini 文件</h2>
<ul>
<li>配置 <font color=gree>my.ini </font> 文件</li>
</ul>
<p>在解压下来的<code v-pre>mysql-5.7.38-winx64 </code>下创建一个文件，并进入文件将以下内容写入到里面；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
<span class="token comment"># 设置3306端口</span>
<span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">3306</span>
<span class="token comment"># 设置mysql的安装目录</span>
<span class="token assign-left variable">basedir</span><span class="token operator">=</span>E:<span class="token punctuation">\</span>mysql<span class="token punctuation">\</span>mysql-5.7.38-winx64
<span class="token comment"># 设置mysql数据库的数据的存放目录</span>
<span class="token assign-left variable">datadir</span><span class="token operator">=</span>E:<span class="token punctuation">\</span>mysql<span class="token punctuation">\</span>mysql-5.7.38-winx64<span class="token punctuation">\</span>data  
<span class="token comment"># 允许最大连接数</span>
<span class="token assign-left variable">max_connections</span><span class="token operator">=</span><span class="token number">200</span>
<span class="token comment"># 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统</span>
<span class="token assign-left variable">max_connect_errors</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token comment"># 服务端使用的字符集默认为UTF8</span>
character-set-server<span class="token operator">=</span>utf8
<span class="token comment"># 创建新表时将使用的默认存储引擎</span>
default-storage-engine<span class="token operator">=</span>INNODB
<span class="token comment"># 默认使用“mysql_native_password”插件认证</span>
<span class="token assign-left variable">default_authentication_plugin</span><span class="token operator">=</span>mysql_native_password
<span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
<span class="token comment"># 设置mysql客户端默认字符集</span>
default-character-set<span class="token operator">=</span>utf8mb4
<span class="token punctuation">[</span>client<span class="token punctuation">]</span>
<span class="token comment"># 设置mysql客户端连接服务端时默认使用的端口</span>
<span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">3306</span>
default-character-set<span class="token operator">=</span>utf8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完成之后，保存退出，修改文件名为：<code v-pre>my.ini</code>；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/aba0f14a39684b229b4806a5dcb95bf6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="五、运行、安装-mysql" tabindex="-1"><a class="header-anchor" href="#五、运行、安装-mysql" aria-hidden="true">#</a> 五、运行、安装 Mysql</h2>
<h3 id="_5-1-使用管理员运行命令提示符" tabindex="-1"><a class="header-anchor" href="#_5-1-使用管理员运行命令提示符" aria-hidden="true">#</a> 5.1 使用管理员运行命令提示符</h3>
<ul>
<li><code v-pre>ctrl + s</code> 搜索 <code v-pre>命令提示符</code> 以管理员方式打开；</li>
<li>如果在e盘，先输入<code v-pre>e:</code> ，然后在使用cd 切换到mysql的bin目录下，如果是c盘，就可以直接<code v-pre>cd 目录</code> 切换过去；</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/9351b1ed6c4e464884abff4225196eca.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/4247912a4c4f48e9b6f9ffdeec2ab2f7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_5-2-执行mysql初始化命令" tabindex="-1"><a class="header-anchor" href="#_5-2-执行mysql初始化命令" aria-hidden="true">#</a> 5.2 执行MySQL初始化命令</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mysqld <span class="token parameter variable">--initialize</span> <span class="token parameter variable">--console</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等待执行完，会得到初始化密码，需要保存住，改完数据库密码就用不到了；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/57a35278375a45fba43605a6b1962863.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>画框的就是初始化生成的密码了；需要先暂时保存住，<font color=red>很重要</font>。</p>
<h3 id="_5-3-安装mysql的服务" tabindex="-1"><a class="header-anchor" href="#_5-3-安装mysql的服务" aria-hidden="true">#</a> 5.3 安装mysql的服务</h3>
<p><code v-pre>mysqld --install 服务名</code>(不写的话默认服务名是mysql)</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mysqld <span class="token parameter variable">--install</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/54f682d00eae4d24bb782bac9dd448ed.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>安装完成；</p>
<h3 id="_5-4-启动mysql服务" tabindex="-1"><a class="header-anchor" href="#_5-4-启动mysql服务" aria-hidden="true">#</a> 5.4 启动mysql服务</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>net start mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样就启动成功了。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/055553479d8542ba840b4a5ed77155b5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>也可以使用任务管理，查看服务进程，存在则已经启动。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/12602c32bdb84802b450140895ff1abb.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="六、登陆-mysql-并-修改登陆密码" tabindex="-1"><a class="header-anchor" href="#六、登陆-mysql-并-修改登陆密码" aria-hidden="true">#</a> 六、登陆 Mysql 并 修改登陆密码</h2>
<p><strong>输入命令：mysql -u root -p ，（其中-u root表示用户名为root，-p表示登录密码）登录，然后提示输入密码，密位为5.2初始化所画的红框。</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>
<span class="token comment"># 然后让输入密码，就输入刚刚初始化完的密码进入；</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>由于自动生成的密码比较复杂，我们可以更改密码，更改密码命令为：<code v-pre>alter user root@'localhost' identified by '123123';</code> 其中单引号内为更改后的密码；密码可以自己设定。</strong></p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>alter user root@'localhost' identified by '123123';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置完之后退出<code v-pre>exit</code>，验证密码登陆；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/819da59d8cf345bba202810983891a9b.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="七、使用数据库连接工具测试" tabindex="-1"><a class="header-anchor" href="#七、使用数据库连接工具测试" aria-hidden="true">#</a> 七、使用数据库连接工具测试</h2>
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
<h2 id="八、其他-mysql-操作命令" tabindex="-1"><a class="header-anchor" href="#八、其他-mysql-操作命令" aria-hidden="true">#</a> 八、其他 Mysql 操作命令</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 安装 mysql 服务</span>
mysqld <span class="token parameter variable">--install</span> mysql

<span class="token comment"># 启动 mysql 服务</span>
net start mysql

<span class="token comment"># 关闭 mysql 服务</span>
net stop mysql

<span class="token comment"># 卸载 mysql 服务</span>
<span class="token comment">## 卸载服务时先停止</span>
net stop mysql
<span class="token comment">## 再卸载服务</span>
sc delete mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注：需要彻底卸载服务，在命令行卸载完之后，还需要删除mysql的安装文件，<font color=red>如果配置了环境变量，记得也需要删除以下环境变量。</font></p>
</blockquote>
</div></template>


