<template><div><h2 id="_1-redis安装" tabindex="-1"><a class="header-anchor" href="#_1-redis安装" aria-hidden="true">#</a> 1. Redis安装</h2>
<h3 id="_1-自行购买云服务器" tabindex="-1"><a class="header-anchor" href="#_1-自行购买云服务器" aria-hidden="true">#</a> 1.自行购买云服务器</h3>
<p>自己购买<code v-pre>阿里云</code>、<code v-pre>腾讯云</code>或 <code v-pre>华为云服务器</code>，自带<code v-pre>CentoOS</code> 或者 <code v-pre>Ubuntu</code> 环境，直接开干。如果使用想更快捷安装Redis的话，即可使用Docker容器进行安装，可以参考我这一篇博客 <a href="https://manamn.space/posts/1b327a2c.html#22-docker%E5%AE%89%E8%A3%85redis" target="_blank" rel="noopener noreferrer">Doker部署前后端分离项目<ExternalLinkIcon/></a></p>
<h3 id="_2-vmware本地虚拟机" tabindex="-1"><a class="header-anchor" href="#_2-vmware本地虚拟机" aria-hidden="true">#</a> 2.VMware本地虚拟机</h3>
<p>通过命令 <code v-pre>getconf LONG_BIT</code> 查看，它返回结果是多少就是多少位</p>
<h3 id="_3-redis7的安装" tabindex="-1"><a class="header-anchor" href="#_3-redis7的安装" aria-hidden="true">#</a> 3.Redis7的安装</h3>
<h4 id="_1-window版安装" tabindex="-1"><a class="header-anchor" href="#_1-window版安装" aria-hidden="true">#</a> 1. window版安装：</h4>
<p>下载地址：<a href="https://github.com/zkteco-home/redis-windows" target="_blank" rel="noopener noreferrer">https://github.com/zkteco-home/redis-windows<ExternalLinkIcon/></a></p>
<blockquote>
<p>这里个人建议使用使用linux版进行安装使用</p>
</blockquote>
<h4 id="_2-linux版安装" tabindex="-1"><a class="header-anchor" href="#_2-linux版安装" aria-hidden="true">#</a> 2. linux版安装：</h4>
<blockquote>
<p>Linux安装Redis必须有gcc环境</p>
</blockquote>
<h5 id="_1-什么是gcc" tabindex="-1"><a class="header-anchor" href="#_1-什么是gcc" aria-hidden="true">#</a> 1. 什么是gcc?</h5>
<blockquote>
<p>gcc是linux下的一个编译程序，是C程序的编译工具。<br>
GCC(GNU Compiler Collection)是 GNU(GNU's Not Unix) 计划提供的编译器家族，它能够支持 C,C++, Objective-C, Fortran, Java 和Ada 等等程序设计语言前端，同时能路运在 X86，X86-64，IA-64，PowerPC，SPARC和Alpha 等等几乎目前所有的硬件平台上。鉴于这些特征，以及 GCC 编译代码的高效性，使得 GCC 成为绝大多数自由软件开发编译的首选工具。虽然对于程序员们来说，编译器只是一个工具，除了开发和维护人员，很少有人关注编译器的发展，但是 GCC 的影响力是如此之大，它的性能提升甚至有望改善所有的自由软件的运行效率，同时它的内部结构的变化也体现出现代编译器发展的新特征。</p>
</blockquote>
<h5 id="_2-查看gcc版本" tabindex="-1"><a class="header-anchor" href="#_2-查看gcc版本" aria-hidden="true">#</a> 2. 查看gcc版本</h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>gcc -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_3-安装" tabindex="-1"><a class="header-anchor" href="#_3-安装" aria-hidden="true">#</a> 3. 安装</h5>
<p>​		安装redis之前需要具备c++库环境</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc-c++
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_4-命令案例" tabindex="-1"><a class="header-anchor" href="#_4-命令案例" aria-hidden="true">#</a> 4. 命令案例</h5>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309062026478.png" alt="image-20230906202642404" tabindex="0" loading="lazy"><figcaption>image-20230906202642404</figcaption></figure>
<h5 id="_5-版本选择" tabindex="-1"><a class="header-anchor" href="#_5-版本选择" aria-hidden="true">#</a> 5. 版本选择</h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>查看自己redis版本的命令：redis -server -v
安全Bug按照官网提示，升级成为6.0.8及以上
目前建议都需要升级到6.0.8版本以上
本次使用redis7.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-redis安装步骤" tabindex="-1"><a class="header-anchor" href="#_2-redis安装步骤" aria-hidden="true">#</a> 2. Redis安装步骤</h2>
<p>这里是Redis7.2.0 版本 下载地址：<a href="https://redis.io/download/" target="_blank" rel="noopener noreferrer">https://redis.io/download/<ExternalLinkIcon/></a></p>
<h3 id="_2-1-具体步骤" tabindex="-1"><a class="header-anchor" href="#_2-1-具体步骤" aria-hidden="true">#</a> 2. 1 具体步骤</h3>
<p>这里以Linux下载：</p>
<h4 id="_1-首先判断我们的centos-7是多少位的-使用64位切记" tabindex="-1"><a class="header-anchor" href="#_1-首先判断我们的centos-7是多少位的-使用64位切记" aria-hidden="true">#</a> 1. 首先判断我们的centos 7是多少位的，使用64位切记</h4>
<div class="language-bah line-numbers-mode" data-ext="bah"><pre v-pre class="language-bah"><code>getconf LONG_BIT            返回是多少就是几位
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-linux安装redis必须先具备gcc编译环境" tabindex="-1"><a class="header-anchor" href="#_2-linux安装redis必须先具备gcc编译环境" aria-hidden="true">#</a> 2. Linux安装Redis必须先具备gcc编译环境</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>gcc <span class="token parameter variable">-v</span>                  查看版本
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc-c++          安装c++库环境
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309062025090.png" alt="image-20230906202547826" tabindex="0" loading="lazy"><figcaption>image-20230906202547826</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309062026478.png" alt="image-20230906202642404" tabindex="0" loading="lazy"><figcaption>image-20230906202642404</figcaption></figure>
<p>我们可以通过 <code v-pre>gcc-v</code> 来查看，<strong>注意 ：</strong> 这里版本一定大于4.8.5</p>
<h4 id="_3-下载redis7-2-0-tar-gz后放入linux目录-opt" tabindex="-1"><a class="header-anchor" href="#_3-下载redis7-2-0-tar-gz后放入linux目录-opt" aria-hidden="true">#</a> 3. 下载Redis7.2.0.tar.gz后放入<code v-pre>Linux目录</code> opt</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> redis7.2.0.tar.gz      /opt目录下解压
<span class="token builtin class-name">cd</span> redis7.2.0.tar.gz              进入目录
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>              在redis7.0.9目录下执行
<span class="token builtin class-name">cd</span> /usr/local/bin                 默认安装的位置查看
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-安装完后回到-opt-redis7-2-0" tabindex="-1"><a class="header-anchor" href="#_4-安装完后回到-opt-redis7-2-0" aria-hidden="true">#</a> 4. 安装完后回到 /opt/redis7.2.0/</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> /myredis                在根目录下创建myredis
<span class="token function">cp</span> redis.conf /myredis/redis7.conf     将默认的复制过去
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-修改-myredis目录下redis7-conf配置文件做初始化设置" tabindex="-1"><a class="header-anchor" href="#_5-修改-myredis目录下redis7-conf配置文件做初始化设置" aria-hidden="true">#</a> 5. 修改/myredis目录下redis7.conf配置文件做初始化设置</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> /myredis/redis7.conf            
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>redis.conf 配置文件，改完后确保生效，记得重启，记得重启</p>
<ul>
<li>
<p>默认<code v-pre>daemonize no</code> 改为 <code v-pre>daemonize yes</code></p>
</li>
<li>
<p>默认<code v-pre>protected-mode</code> yes 改为 <code v-pre>protected-mode no</code></p>
</li>
<li>
<p>默认bind 改为 直接注释掉 (默认bind 127.0.0.1只能本机访问)或改成本机IP地址，否则影响远程IP连接</p>
</li>
<li>
<p>添加redis密码 改为 <code v-pre>requirepass</code> 你自己设置的密码</p>
</li>
</ul>
<h4 id="_6-在-usr-local-bin目录下运行redis-server-启用-myredis目录下的-redis7-conf" tabindex="-1"><a class="header-anchor" href="#_6-在-usr-local-bin目录下运行redis-server-启用-myredis目录下的-redis7-conf" aria-hidden="true">#</a> 6. 在/usr/local/bin目录下运行redis-server，启用/myredis目录下的 redis7.conf</h4>
<div class="language-linux line-numbers-mode" data-ext="linux"><pre v-pre class="language-linux"><code>redis-server /myredis/redis7.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_7-连接服务" tabindex="-1"><a class="header-anchor" href="#_7-连接服务" aria-hidden="true">#</a> 7. 连接服务</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>redis-cli <span class="token parameter variable">-a</span> 设置的密码 <span class="token parameter variable">-p</span> <span class="token number">6379</span> 
测试  <span class="token function">ping</span>  pong
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="备注说明" tabindex="-1"><a class="header-anchor" href="#备注说明" aria-hidden="true">#</a> 备注说明</h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309062045502.png" alt="image-20230906204500448" tabindex="0" loading="lazy"><figcaption>image-20230906204500448</figcaption></figure>
<p>Warning: Using a password with '-a' or '-u' option on the command line interface may not be safe.</p>
<p>这段警告看着不舒服怎么办?</p>
<p>warning 这串输出并不是普通输出，shell的标准输出包含两种：</p>
<p>1（标准输出）</p>
<p>2（标准错误）我们的命令，即包含1也包含2，2即是我们想要除去的提示</p>
<p>解决办法将标准错误去除即可，追加2&gt;/dev/null，将标准错误丢弃即可，就没有烦人的警告了。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309062053861.png" alt="image-20230906205302804" tabindex="0" loading="lazy"><figcaption>image-20230906205302804</figcaption></figure>
<h4 id="_1-redis端口为什么是6379" tabindex="-1"><a class="header-anchor" href="#_1-redis端口为什么是6379" aria-hidden="true">#</a> 1.Redis端口为什么是6379？</h4>
<blockquote>
<p>Redis的默认端口是6379，是由手机键盘字母MERZ的位置决定的。MERZ在Antirez的朋友圈语言中是&quot;愚蠢和傻B&quot;的代名词，源于意大利广告女郎Alessia Merz在电视节目上说了一堆愚蠢的话，Redis之父对她有&quot;特殊&quot;印象，就给它弄成端口号了</p>
</blockquote>
<h4 id="_2-关闭redis服务器" tabindex="-1"><a class="header-anchor" href="#_2-关闭redis服务器" aria-hidden="true">#</a> 2.关闭Redis服务器</h4>
<p>单实例关闭：在Redis服务器外面关闭命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>redis-cli <span class="token parameter variable">-a</span> <span class="token number">123456</span> <span class="token function">shutdown</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果在<code v-pre>Redis</code>服务器里面可以直接使用<code v-pre>shutdown</code>命令</p>
<p>多实例关闭，指定端口关闭：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>redis-cli <span class="token parameter variable">-p</span> <span class="token number">6379</span> <span class="token function">shutdown</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-redis卸载步骤" tabindex="-1"><a class="header-anchor" href="#_3-redis卸载步骤" aria-hidden="true">#</a> 3. Redis卸载步骤</h2>
<p>#卸载Redis步骤</p>
<p>1.停止redis-server服务</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309061435943.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>2.删除/usr/local/bin目录下与redis相关的文件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-l</span> /usr/local/bin/redis-*

<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/local/bin/redis-*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309061435951.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312031906036.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


