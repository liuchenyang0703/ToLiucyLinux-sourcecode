<template><div><h2 id="一、下载mysql5-7的安装包" tabindex="-1"><a class="header-anchor" href="#一、下载mysql5-7的安装包" aria-hidden="true">#</a> 一、下载mysql5.7的安装包</h2>
<p><strong>下载地址：<a href="https://dev.mysql.com/downloads/mysql/5.7.html" target="_blank" rel="noopener noreferrer">https://dev.mysql.com/downloads/mysql/5.7.html<ExternalLinkIcon/></a></strong></p>
<h3 id="_1、选择linux版的" tabindex="-1"><a class="header-anchor" href="#_1、选择linux版的" aria-hidden="true">#</a> ①、选择linux版的</h3>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/ff19a527bddc4e2e9a373c31da7c414a.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_2、选择64bit-根据自己的情况来看" tabindex="-1"><a class="header-anchor" href="#_2、选择64bit-根据自己的情况来看" aria-hidden="true">#</a> ②、选择64bit，根据自己的情况来看</h3>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/62f25ac4350c4098a65490d81ef9fa33.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_3、选择下载tar包" tabindex="-1"><a class="header-anchor" href="#_3、选择下载tar包" aria-hidden="true">#</a> ③、选择下载tar包</h3>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/82938b0cc6c445668ef80ac514a2a45a.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_4、点击下载" tabindex="-1"><a class="header-anchor" href="#_4、点击下载" aria-hidden="true">#</a> ④、点击下载</h3>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/362a8430e8e642b78b1f5ccf3c52393c.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_5、等待下载完" tabindex="-1"><a class="header-anchor" href="#_5、等待下载完" aria-hidden="true">#</a> ⑤、等待下载完</h3>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/8701884070d940beb15b98d0669aae19.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="二、上传到服务器" tabindex="-1"><a class="header-anchor" href="#二、上传到服务器" aria-hidden="true">#</a> 二、上传到服务器</h2>
<blockquote>
<p><strong>上传到服务器有好几种方法，任意采用一种就可以。</strong></p>
</blockquote>
<p>可以直接把tar包上传到服务器的根目录下或者自己创建的目录下也可以，一般标准的就直接放到了/usr/local/下面；<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/6b1a6fb0d868435ebaffa80baf878f6b.png" alt="在这里插入图片描述" loading="lazy"></p>
<h2 id="三、检查服务器是否安装过mysql服务" tabindex="-1"><a class="header-anchor" href="#三、检查服务器是否安装过mysql服务" aria-hidden="true">#</a> 三、检查服务器是否安装过mysql服务</h2>
<blockquote>
<p>检查服务器是否安装过mysql服务，因为以前如果安装的有mysql可能会导致安装mysql的时候冲突报错；</p>
</blockquote>
<p><strong>检查服务器上是否安装过mysql,如果没有请忽略此步骤：</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/37e87efc55ab46de93786c4e142db544.png" alt="在这里插入图片描述" loading="lazy"><br>
我们可以看到是没有安装mysql的；<br>
<strong>如果有mysql的话，把mysql的文件全部删除，和卸载mysql；</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查找mysql的目录或我文件</span>
<span class="token function">find</span> / <span class="token parameter variable">-name</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、卸载centos7自带的mariadb" tabindex="-1"><a class="header-anchor" href="#四、卸载centos7自带的mariadb" aria-hidden="true">#</a> 四、卸载Centos7自带的mariadb</h2>
<blockquote>
<p>一般用的centos的系统都会自带一个系统数据库，那就是mariadb，因为没有激活，只有一个安装好的mariadb-libs-5.5.60-1.el7_5.x86_64，可以把mariadb-libs-5.5.60-1.el7_5.x86_64卸载。</p>
</blockquote>
<h3 id="_1、查找系统自带的mariadb" tabindex="-1"><a class="header-anchor" href="#_1、查找系统自带的mariadb" aria-hidden="true">#</a> ①、查找系统自带的mariadb</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> mariadb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/616911ed9b9146bfa51ae1ac980ce9f7.png" alt="在这里插入图片描述" loading="lazy"><br>
我们可以看到是可以查到的，现在把他卸载了；</p>
<h3 id="_2、卸载系统自带的mariadb" tabindex="-1"><a class="header-anchor" href="#_2、卸载系统自带的mariadb" aria-hidden="true">#</a> ②、卸载系统自带的mariadb</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#卸载mariadb</span>
<span class="token function">rpm</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">--nodeps</span> mariadb-libs-5.5.60-1.el7-5.x86_64
<span class="token comment">#卸载完查看还有没有mariadb</span>
<span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> mariadb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/964d669507204668af2f9c363a2cb9f1.png" alt="卸载完查看" loading="lazy"><br>
这里看已经卸载了；</p>
<h3 id="_3、查看my-cnf配置文件" tabindex="-1"><a class="header-anchor" href="#_3、查看my-cnf配置文件" aria-hidden="true">#</a> ③、查看my.cnf配置文件</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> /etc/my.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因为默认的mysql的配置文件就是在/etc/的；我们可以看到也是没有my.cnf的。<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/8e8ad65c26984ba6991c07a8c60b22f0.png" alt="在这里插入图片描述" loading="lazy"></p>
<h2 id="五、安装mysql5-7" tabindex="-1"><a class="header-anchor" href="#五、安装mysql5-7" aria-hidden="true">#</a> 五、安装mysql5.7</h2>
<blockquote>
<p>卸载完系统自带的mariadb之后，我们开始安装mysql；</p>
</blockquote>
<h3 id="_1、解压上传上来的安装包" tabindex="-1"><a class="header-anchor" href="#_1、解压上传上来的安装包" aria-hidden="true">#</a> ①、解压上传上来的安装包</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">tar</span> xf mysql-5.7.38-linux-glibc2.12-x86_64.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/eb7bc8174c68498a8fa2e0e53a41e18a.png" alt="在这里插入图片描述" loading="lazy"><br>
生成了两个压缩包，然后在解压一下mysql-5.7.38-linux-glibc2.12-x86_64.tar.gz，注意最开始下载的tar包后缀<font color=red><strong>不带.gz</strong></font>，解压下来后面会多一个后缀<font color=red><strong>带了一个.gz</strong></font>;</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#解压mysql-5.7.38-linux-glibc2.12-x86_64.tar.gz</span>
<span class="token function">tar</span> xf mysql-5.7.38-linux-glibc2.12-x86_64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/e7c28668caf545bcb3d1c06dd145157b.png" alt="在这里插入图片描述" loading="lazy"><br>
解压完之后可以看到生成了一个mysql-5.7.38-linux-glibc2.12-x86_64的目录；正好，我们的<font color=red>【mysql-5.7.38-linux-glibc2.12-x86_64.tar】  【mysql-test-5.7.38-linux-glibc2.12-x86_64.tar.gz】</font>这两个就可以删了，留着也没用，但是<font color=red>mysql-5.7.38-linux-glibc2.12-x86_64.tar.gz</font>这个可不能删；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#删除mysql-5.7.38-linux-glibc2.12-x86_64.tar、mysql-test-5.7.38-linux-glibc2.12-x86_64.tar.gz</span>
<span class="token punctuation">[</span>root@mysql local<span class="token punctuation">]</span><span class="token comment"># rm -rf mysql-test-5.7.38-linux-glibc2.12-x86_64.tar.gz </span>
<span class="token punctuation">[</span>root@mysql local<span class="token punctuation">]</span><span class="token comment"># rm -rf mysql-5.7.38-linux-glibc2.12-x86_64.tar</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/0563d37831994e40bebc8f314ff991f6.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>删除完毕之后顺便给解压下来的文件修改个名字（规范）；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#修改解压的文件名</span>
<span class="token function">mv</span> mysql-5.7.38-linux-glibc2.12-x86_64 mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/d79fff4a2caf40d3902889b494abcae5.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_2、创建一个mysql组和用户" tabindex="-1"><a class="header-anchor" href="#_2、创建一个mysql组和用户" aria-hidden="true">#</a> ②、创建一个mysql组和用户</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">groupadd</span> mysql
<span class="token function">useradd</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-g</span> mysql mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建完之后可以查看一下</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> /etc/group <span class="token operator">|</span> <span class="token function">grep</span> mysql
<span class="token function">cat</span> /etc/passwd <span class="token operator">|</span><span class="token function">grep</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/c11f4174a9194509885818378b199650.png" alt="在这里插入图片描述" loading="lazy"><br>
这样就是创建好了，创建好之后，我们继续下一步；</p>
<h3 id="_3、更改mysql-目录下所有文件夹所属的用户组、用户以及文件权限" tabindex="-1"><a class="header-anchor" href="#_3、更改mysql-目录下所有文件夹所属的用户组、用户以及文件权限" aria-hidden="true">#</a> ③、更改mysql 目录下所有文件夹所属的用户组、用户以及文件权限</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#切换到/usr/local/目录下</span>
<span class="token punctuation">[</span>root@mysql local<span class="token punctuation">]</span><span class="token comment"># cd /usr/local/</span>
<span class="token comment">#更改文件的用户组和用户</span>
<span class="token punctuation">[</span>root@mysql local<span class="token punctuation">]</span><span class="token comment"># chown -R mysql:mysql mysql</span>
<span class="token comment">#给mysql目录下的所有文件加执行权限</span>
<span class="token punctuation">[</span>root@mysql local<span class="token punctuation">]</span><span class="token comment"># chmod -R 775 mysql</span>
<span class="token comment">#更改完之后ll可以查看一下</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/f8549a4f8a7c452382a3ad00ab155435.png" alt="在这里插入图片描述" loading="lazy"><br>
这样就修改成功了。</p>
<h3 id="_4、把mysql-bin目录下的所有命令创建一个-快捷方式" tabindex="-1"><a class="header-anchor" href="#_4、把mysql-bin目录下的所有命令创建一个-快捷方式" aria-hidden="true">#</a> ④、把mysql/bin目录下的所有命令创建一个“快捷方式”</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#把这个写到配置文件里，路径不同，记得要修改路径</span>
<span class="token builtin class-name">echo</span> <span class="token string">"export PATH=<span class="token environment constant">$PATH</span>:/usr/local/mysql/bin"</span> <span class="token operator">>></span> /etc/profile
<span class="token comment">#生效配置文件</span>
<span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生效之后，我们可以打出mysql，按tab补全键两下，就可以看到所有的mysql/bin下的都能出来，这样设置是相当于windows的快捷键，以便我们更好的利用；<br>
<img src="https://img-blog.csdnimg.cn/9180aa5d601e4aa38fca67bc0327e0a9.png" alt="在这里插入图片描述" loading="lazy"></p>
<h3 id="_5、生成mysql的临时密码" tabindex="-1"><a class="header-anchor" href="#_5、生成mysql的临时密码" aria-hidden="true">#</a> ⑤、生成mysql的临时密码</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#切换到mysql目录下</span>
<span class="token builtin class-name">cd</span> /usr/local/mysql/
<span class="token comment">#执行命令。生成临时数据库密码（还是注意路径看看是不是和你的一样）如果有 libaio.so.1: cannot open shared object file: No such file or directory报错，看下面！</span>
mysqld <span class="token parameter variable">--user</span><span class="token operator">=</span>mysql <span class="token parameter variable">--initialize</span> <span class="token parameter variable">--datadir</span><span class="token operator">=</span>/usr/local/mysql/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/950f5895e4474efeb91ab1c08ccefaf2.png" alt="在这里插入图片描述" loading="lazy"><br>
生成的临时密码是：<font color=red>eqypjeVdx6/d</font></p>
<p><strong>千万要把临时密码记住，到后面修改完密码之后，就可以不用了；</strong><br>
如果执行<font color=red>mysqld --user=mysql --initialize --datadir=/usr/local/mysql/data</font>报这个错；安装包即可；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/ae44742ba61e4add94d0dc60fc354d3e.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> libaio*

<span class="token comment">#安装完成再次执行就好了</span>
mysqld <span class="token parameter variable">--user</span><span class="token operator">=</span>mysql <span class="token parameter variable">--initialize</span> <span class="token parameter variable">--datadir</span><span class="token operator">=</span>/usr/local/mysql/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、复制启动文件到-etc-init-d-目录" tabindex="-1"><a class="header-anchor" href="#_6、复制启动文件到-etc-init-d-目录" aria-hidden="true">#</a> ⑥、复制启动文件到/etc/init.d/目录</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cp</span> <span class="token parameter variable">-ar</span> /usr/local/mysql/support-files/mysql.server /etc/init.d/mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个直接复制就可以了，咱们不需要改动什么，因为是按正规的流程走的，所以不需要改动；如果说，你的路径和我的不一样，就需要改完之后在复制过去了；<br>
路径不对的，修改这几个路径在复制过去就可以，软连接的话应该也是可以的，最后还是复制过去一份；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/af4b6d55b6434747b3ed2338ca66e16f.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_7、添加my-cnf配置文件" tabindex="-1"><a class="header-anchor" href="#_7、添加my-cnf配置文件" aria-hidden="true">#</a> ⑦、添加my.cnf配置文件</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#首先切换到/etc/目录下</span>
<span class="token builtin class-name">cd</span> /etc/
<span class="token comment">#在这里创建一个mysql的配置文件my.cnf</span>
<span class="token function">touch</span> my.cnf
<span class="token comment">#编辑my.cnf配置文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我给大家整理了一份，可以照着这个修改，我这个配置文件默认是开启log-bin日志的；当然也可以自己写，去百度查也可以；👉<a href="https://download.csdn.net/download/liu_chen_yang/85445276?spm=1001.2014.3001.5503" target="_blank" rel="noopener noreferrer">mysql配置文件my.cnf<ExternalLinkIcon/></a>👈</p>
<blockquote>
<p>要注意的都有：<br>
  端口号3306，自己先看看有没有被占用，还有就是路径对不对。</p>
</blockquote>
<p>给mysql的配置文件加执行权限；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">775</span> /etc/my.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8、启动mysql服务-设置开机自启" tabindex="-1"><a class="header-anchor" href="#_8、启动mysql服务-设置开机自启" aria-hidden="true">#</a> ⑧、启动mysql服务&amp;&amp;设置开机自启</h3>
<p>启动之前我们先查询有没有启动过；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span><span class="token function">grep</span> mysql
<span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span><span class="token function">grep</span> mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/6006b6c6ce2249f1aa07fb9c324a67ca.png" alt="在这里插入图片描述" loading="lazy"><br>
<strong>可以看到是没有进程的，然后我们启动mysql服务；</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#启动mysql服务</span>
/etc/init.d/mysqld start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/151aef8098a14c0489a9ae72f7b1fb6c.png" alt="在这里插入图片描述" loading="lazy"><br>
显示这个就是启动成功了，然后我们接下来设置开机自启；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>//添加服务
<span class="token function">chkconfig</span> <span class="token parameter variable">--add</span> mysqld
//显示服务列表
<span class="token function">chkconfig</span> <span class="token parameter variable">--list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/dc983ff688954582998d1fec24ef2072.png" alt="在这里插入图片描述" loading="lazy"><br>
开机自启设置成功。</p>
<h3 id="_9、登录mysql-修改mysql密码" tabindex="-1"><a class="header-anchor" href="#_9、登录mysql-修改mysql密码" aria-hidden="true">#</a> ⑨、登录mysql&amp;&amp;修改mysql密码</h3>
<blockquote>
<p>登录mysql ，密码就是初始化时生成的临时密码；</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code> mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在这输入密码，密码是看不到的，输入临时密码之后就可以进入mysql了；<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/ecf7285c695d4ecaa55ff82954d6f60a.png" alt="在这里插入图片描述" loading="lazy"><br>
登录进来之后，我们来修改密码；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#修改密码为123456</span>
<span class="token builtin class-name">set</span> password <span class="token keyword">for</span> root@localhost <span class="token operator">=</span> password<span class="token punctuation">(</span><span class="token string">'123456'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/f360414efaa44f6ea5721f3bacc8caa3.png" alt="在这里插入图片描述" loading="lazy"><br>
这样就是密码修改成功，然后我们退出重新登录一下；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>快捷键ctrl+d退出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再次登录：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就可以登录进来了；<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/7be8cc97b74c409ea53fff7b8f3e3aba.png" alt="在这里插入图片描述" loading="lazy"></p>
<h3 id="_10、开放远程登陆-测试本地客户端连接" tabindex="-1"><a class="header-anchor" href="#_10、开放远程登陆-测试本地客户端连接" aria-hidden="true">#</a> ⑩、开放远程登陆&amp;&amp;测试本地客户端连接</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#登录进来之后，切换到mysql库</span>
use mysql<span class="token punctuation">;</span>
<span class="token comment">#修改用户权限</span>
update user <span class="token builtin class-name">set</span> <span class="token assign-left variable">user.Host</span><span class="token operator">=</span><span class="token string">'%'</span> where <span class="token assign-left variable">user.User</span><span class="token operator">=</span><span class="token string">'root'</span><span class="token punctuation">;</span>
<span class="token comment">#刷新权限</span>
flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/47638eace2ef4c3ea86cea170154993e.png" alt="在这里插入图片描述" loading="lazy"><br>
开放远程登录这时候我们就可以用navicat、sqlyog等链接工具来连接数据库了，端口3306；自己可以测试一下，如果是直接在linux中用就不用测试了。<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/086bb558cd67434eb9a0a5bb5cc6e81f.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/c4fe8ba7e22f46899831b97f034051ee.png" alt="在这里插入图片描述" loading="lazy"></p>
<p>这样就链接成功了，就可以在里面操作增删改查库了。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<blockquote>
<p>现在centos7安装mysql5.7就完成了，本地客户端连接centos7中的mysql5.7服务端也是成功的。</p>
</blockquote>
<h2 id="【力荐】数据库定时备份脚本" tabindex="-1"><a class="header-anchor" href="#【力荐】数据库定时备份脚本" aria-hidden="true">#</a> 【力荐】数据库定时备份脚本</h2>
<blockquote>
<p><a href="https://download.csdn.net/download/liu_chen_yang/87776124?spm=1001.2101.3001.9500" target="_blank" rel="noopener noreferrer">mysql数据库定时备份脚本+定时删除 A-刘晨阳<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章" aria-hidden="true">#</a> 相关文章</h2>
<blockquote>
<p><a href="https://liucy.blog.csdn.net/article/details/126288434" target="_blank" rel="noopener noreferrer">【云原生】Docker之创建并进入mysql容器<ExternalLinkIcon/></a></p>
<hr>
<p><a href="https://liucy.blog.csdn.net/article/details/124930789" target="_blank" rel="noopener noreferrer">Centos7安装Mysql5.7（超详细版）<ExternalLinkIcon/></a></p>
</blockquote>
</div></template>


