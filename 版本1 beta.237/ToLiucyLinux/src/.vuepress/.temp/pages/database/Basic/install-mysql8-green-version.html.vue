<template><div><h1 id="mysql8-绿色版安装" tabindex="-1"><a class="header-anchor" href="#mysql8-绿色版安装" aria-hidden="true">#</a> MySQL8 绿色版安装</h1>
<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2>
<p>大家好，我是Leo哥🫣🫣🫣，这不是这两天因为公司项目需求，我的原来的笔记本以及跟不上了，于是上周抽空组了一个台式，前几天一直没水博客(不是)，一直在安装各种环境。正好安装到MySQL环境的时候，想着把他简单记录一下，发一下博客，带给大家。好了，话不多说让我们开始吧😎😎😎。</p>
<blockquote>
<p>注意：这里简单粗暴，我是考虑到后面可能搭建集群，不想太麻烦，这里就考虑的是MySQL绿色版。</p>
</blockquote>
<h2 id="_2-下载mysql" tabindex="-1"><a class="header-anchor" href="#_2-下载mysql" aria-hidden="true">#</a> 2.下载MySQL</h2>
<ol>
<li>
<p>进入官网找到自己所需的安装包：<a href="https://dev.mysql.com/downloads/mysql/" target="_blank" rel="noopener noreferrer">MySQL :: Developer Zone<ExternalLinkIcon/></a>，</p>
</li>
<li>
<p>软件路径：DOWNLOAD–&gt;MYSQL Community Downloads–&gt;MYSQL on Windows</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311142106816.png" alt="image-20231114210613753" tabindex="0" loading="lazy"><figcaption>image-20231114210613753</figcaption></figure>
</li>
</ol>
<h2 id="_3-进行解压" tabindex="-1"><a class="header-anchor" href="#_3-进行解压" aria-hidden="true">#</a> 3.进行解压</h2>
<p>可以看到这个就是我们刚下载的MySQL8.2压缩包</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311142108365.png" alt="image-20231114210820335" tabindex="0" loading="lazy"><figcaption>image-20231114210820335</figcaption></figure>
<p><strong>解压zip压缩包至想要安装的目录，比如解压到 D:\mysql-8.2.0-winx64</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311142109588.png" alt="image-20231114210908548" tabindex="0" loading="lazy"><figcaption>image-20231114210908548</figcaption></figure>
<h2 id="_4-配置my-ini文件" tabindex="-1"><a class="header-anchor" href="#_4-配置my-ini文件" aria-hidden="true">#</a> 4.配置my.ini文件</h2>
<p><strong>在解压目录</strong>mysql-8.2.0-winx64中创建<a href="https://so.csdn.net/so/search?q=MySQL%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">MySQL配置文件<ExternalLinkIcon/></a><strong>my.ini</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311142110759.png" alt="image-20231114211021710" tabindex="0" loading="lazy"><figcaption>image-20231114211021710</figcaption></figure>
<p>配置文件<strong>my.ini</strong>内容如下</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
<span class="token comment"># 设置3307端口</span>
port<span class="token operator">=</span><span class="token number">3307</span>
<span class="token comment"># 设置mysql的安装目录</span>
basedir<span class="token operator">=</span>D:\\software\mysql<span class="token operator">-</span><span class="token number">8.2</span><span class="token number">.0</span><span class="token operator">-</span>winx64
<span class="token comment"># 设置mysql数据库的数据的存放目录</span>
datadir<span class="token operator">=</span>D:\\software\MySQLData\mysql81\<span class="token keyword">Data</span>
<span class="token comment"># 允许最大连接数</span>
max_connections<span class="token operator">=</span><span class="token number">200</span>
<span class="token comment"># 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统</span>
max_connect_errors<span class="token operator">=</span><span class="token number">10</span>
<span class="token comment"># 服务端使用的字符集默认为UTF8</span>
<span class="token keyword">character</span><span class="token operator">-</span><span class="token keyword">set</span><span class="token operator">-</span>server<span class="token operator">=</span>utf8
<span class="token comment"># 创建新表时将使用的默认存储引擎</span>
<span class="token keyword">default</span><span class="token operator">-</span>storage<span class="token operator">-</span><span class="token keyword">engine</span><span class="token operator">=</span><span class="token keyword">INNODB</span>
<span class="token comment"># 默认使用“mysql_native_password”插件认证</span>
default_authentication_plugin<span class="token operator">=</span>mysql_native_password
<span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
<span class="token comment"># 设置mysql客户端默认字符集</span>
<span class="token keyword">default</span><span class="token operator">-</span><span class="token keyword">character</span><span class="token operator">-</span><span class="token keyword">set</span><span class="token operator">=</span>utf8mb4
<span class="token punctuation">[</span>client<span class="token punctuation">]</span>
<span class="token comment"># 设置mysql客户端连接服务端时默认使用的端口</span>
port<span class="token operator">=</span><span class="token number">3306</span>
<span class="token keyword">default</span><span class="token operator">-</span><span class="token keyword">character</span><span class="token operator">-</span><span class="token keyword">set</span><span class="token operator">=</span>utf8

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311142113395.png" alt="image-20231114211304330" tabindex="0" loading="lazy"><figcaption>image-20231114211304330</figcaption></figure>
<h2 id="_5-安装前准备" tabindex="-1"><a class="header-anchor" href="#_5-安装前准备" aria-hidden="true">#</a> 5.安装前准备</h2>
<p><strong>以管理员身份打开命令行，切换到安装MySQL的目录下，再切换到bin目录下</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311142113850.png" alt="image-20231114211353712" tabindex="0" loading="lazy"><figcaption>image-20231114211353712</figcaption></figure>
<p><strong>然后切换到mysql的bin目录下</strong></p>
<h2 id="_6-开始安装" tabindex="-1"><a class="header-anchor" href="#_6-开始安装" aria-hidden="true">#</a> 6.开始安装</h2>
<p><strong>执行MySQL初始化命令，如下：</strong></p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>mysqld <span class="token comment">--initialize --console</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311142119749.png" alt="image-20231114211921649" tabindex="0" loading="lazy"><figcaption>image-20231114211921649</figcaption></figure>
<p><strong>初始化完成后生成的用户名和密码（红框所示位置即为密码），即root用户和生成的密码，后续我们可以更改。</strong></p>
<p><strong>安装MySQL的服务mysqld，同样在bin目录下，执行MySQL服务安装命令 mysqld --install 服务名(不写的话默认服务名是mysql)</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>mysqld --install 你的服务名 (笔者这里设置为mysql81)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311142121328.png" alt="image-20231114212101301" tabindex="0" loading="lazy"><figcaption>image-20231114212101301</figcaption></figure>
<p>看到以下 <code v-pre>successfully</code>就表示已经成功了。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311142121834.png" alt="image-20231114212134811" tabindex="0" loading="lazy"><figcaption>image-20231114212134811</figcaption></figure>
<p>启动MySQL服务，命令为：net start mysql81。其中(停止服务：net stop mysql81 ，卸载服务：sc delete 服务名)</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311142122873.png" alt="image-20231114212230841" tabindex="0" loading="lazy"><figcaption>image-20231114212230841</figcaption></figure>
<h2 id="_7-登录mysql" tabindex="-1"><a class="header-anchor" href="#_7-登录mysql" aria-hidden="true">#</a> 7.登录MySQL</h2>
<p><strong>输入命令：mysql -u root -p ，（其中-u root表示用户名为root，-p表示登录密码）登录，然后提示输入密码，密位为先前初始化红框所示。</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311142123872.png" alt="image-20231114212313845" tabindex="0" loading="lazy"><figcaption>image-20231114212313845</figcaption></figure>
<p>密码填上刚才给我生成的密码。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311142133154.png" alt="image-20231114213326123" tabindex="0" loading="lazy"><figcaption>image-20231114213326123</figcaption></figure>
<p>可以看到，我们成功登录到系统中。</p>
<p><strong>由于自动生成的密码比较复杂，我们可以更改密码，更改密码命令为：</strong></p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">USER</span> root<span class="token variable">@localhost</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">'root'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>其中单引号内为更改后的密码</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311142137099.png" alt="image-20231114213724064" tabindex="0" loading="lazy"><figcaption>image-20231114213724064</figcaption></figure>
<p><strong>然后输入exit;命令退出mysql，重新登录mysql检验一下密码是否修改成功，</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311142137850.png" alt="image-20231114213750818" tabindex="0" loading="lazy"><figcaption>image-20231114213750818</figcaption></figure>
<h2 id="_8-远程测试" tabindex="-1"><a class="header-anchor" href="#_8-远程测试" aria-hidden="true">#</a> 8.远程测试</h2>
<p>本地工作基本已经完成了，但是我们日常工作中是不会使用这个黑框框的。我们都会使用远程来数据库管理软件来操作我们的数据库。</p>
<p>笔者这里使用的是Navicat，大家自行选择即可，如果需要Navicat最新版可私信博主获取下载链接。</p>
<p>我们打开Navicat。</p>
<p>这里建立一个MySQL连接，然后填写密码和端口号。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311142140409.png" alt="image-20231114214044324" tabindex="0" loading="lazy"><figcaption>image-20231114214044324</figcaption></figure>
<p>首先点一下测试连接，看看是否正常。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311142141223.png" alt="image-20231114214155185" tabindex="0" loading="lazy"><figcaption>image-20231114214155185</figcaption></figure>
<p>可以看出来完全没有问题。<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311142142924.png" alt="image-20231114214217888" loading="lazy"></p>
<p>然后就进去了这个界面，发现我们的MySQL8安装已经完工啦！</p>
<h2 id="_9-总结" tabindex="-1"><a class="header-anchor" href="#_9-总结" aria-hidden="true">#</a> 9.总结</h2>
<p>以上便是本文的全部内容，本人才疏学浅，文章有什么错误的地方，欢迎大佬们批评指正！我是<strong>Leo</strong>，一个在互联网行业的小白，立志成为更好的自己。</p>
<p>如果你想了解更多关于<strong>Leo</strong>，可以关注公众号-程序员Leo，后面文章会首先同步至公众号。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311152319851.png" alt="ToLeoJavaer公众号 (微信搜索程序员Leo)" tabindex="0" loading="lazy"><figcaption>ToLeoJavaer公众号 (微信搜索程序员Leo)</figcaption></figure>
</div></template>


