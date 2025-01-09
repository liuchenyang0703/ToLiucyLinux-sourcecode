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
<h2 id="文章声明" tabindex="-1"><a class="header-anchor" href="#文章声明" aria-hidden="true">#</a> 文章声明</h2>
<blockquote>
<p>文章声明：此文基于实操撰写 生产环境：此文升级是基于9.3p2升级9.4p1<br>
ssh -V查看版本是：OpenSSH_9.3p2, OpenSSL 1.1.1t  7 Feb 2023<br>
问题关键字：<font color=red>OpenSSH 升级, OpenSSH 更新, OpenSSH 漏洞修复</font><br>
漏洞信息：<font color=red>OpenSSH 命令注入漏洞(CVE-2020-15778)、OpenSSH 安全漏洞(CVE-2023-38408)</font></p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/379775b034b741f09bed3dfae40fa1dd.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="漏洞描述" tabindex="-1"><a class="header-anchor" href="#漏洞描述" aria-hidden="true">#</a> 漏洞描述</h2>
<p><strong>OpenSSH 命令注入漏洞(CVE-2020-15778) 详细描述：</strong></p>
<blockquote>
<p>OpenSSH（OpenBSD Secure Shell）是OpenBSD计划组的一套用于安全访问远程计算机的连接工具。该工具是SSH协议的开源实现，支持对所有的传输进行加密，可有效阻止窃听、连接劫持以及其他网络级的攻击。<br>
OpenSSH 9.3p3及之前版本中的scp的scp.c文件存在命令注入漏洞。该漏洞源于外部输入数据构造可执行命令过程中，网络系统或产品未正确过滤其中的特殊元素。攻击者可利用该漏洞执行非法命令。</p>
</blockquote>
<p><strong>OpenSSH 安全漏洞(CVE-2023-38408) 详细描述：</strong></p>
<blockquote>
<p>OpenSSH（OpenBSD Secure Shell）是加拿大OpenBSD计划组的一套用于安全访问远程计算机的连接工具。该工具是SSH协议的开源实现，支持对所有的传输进行加密，可有效阻止窃听、连接劫持以及其他网络级的攻击。</p>
<p>OpenSSH 9.3p2之前版本存在安全漏洞，该漏洞源于ssh-agent的PKCS11功能存在安全问题。攻击者可利用该漏洞执行远程代码。</p>
</blockquote>
<h2 id="前述" tabindex="-1"><a class="header-anchor" href="#前述" aria-hidden="true">#</a> 前述</h2>
<blockquote>
<p>OpenSSH（OpenBSD Secure Shell）是OpenBSD计划组的一套用于安全访问远程计算机的连接工具。该工具是SSH协议的开源实现，支持对所有的传输进行加密，可有效阻止窃听、连接劫持以及其他网络级的攻击。 OpenSSH 8.9版本至9.4之前版本存在安全漏洞，该漏洞源于将智能卡密钥添加到ssh-agent，会导致忽略每次转发的目标约束。<br>
注：此操作步骤同样适用于Red Hat系所有 9.x 服务器系统。</p>
</blockquote>
<font color=red>注意事项：</font><blockquote>
<p>在升级之前，建议打开多个SSH终端连接，并安装telnet服务器，确保在SSH服务器升级异常时，可以通过telnet服务器远程连接，进行紧急问题修复处理。<br>
因为最开始需要直接卸载openssh，卸载完之后就连不上了，如有问题不好解决，所以建议多开几个SSH终端连接。<br>
在升级前一定要备份原有的配置文件，以防出现意外情况。</p>
</blockquote>
<h2 id="安装一些必要的命令-需要用到的" tabindex="-1"><a class="header-anchor" href="#安装一些必要的命令-需要用到的" aria-hidden="true">#</a> 安装一些必要的命令（需要用到的）</h2>
<p><span id="click_me_jump">安装一些必要的命令（需要用到的）</span></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token function">wget</span> gcc openssl-devel pam-devel rpm-build zlib-devel <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果没有外网，可以选择在有网络的服务器上下载rpm安装包，yum离线下载安装包可参考：<a href="https://liucy.blog.csdn.net/article/details/125780172?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Centos7 yum如何下载离线安装包？（详解）<ExternalLinkIcon/></a></p>
<p>或者是直接使用我提供的离线包：<a href="https://download.csdn.net/download/liu_chen_yang/88405608" target="_blank" rel="noopener noreferrer">openssh7.4p1 升级到 openssh9.4p1 所需的离线包<ExternalLinkIcon/></a></p>
<p><strong>网盘下载：</strong><br>
链接：<a href="https://pan.baidu.com/s/1lqPe1J3wbUuEyA9otQO35g?pwd=open" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1lqPe1J3wbUuEyA9otQO35g?pwd=open <ExternalLinkIcon/></a><br>
提取码：open</p>
<p><strong>命令解析：</strong></p>
<blockquote>
<ul>
<li>1.1 OpenSSL：OpenSSH 使用了 OpenSSL 的加密库。因此，在更新 OpenSSH 之前，需要先更新 OpenSSL 的版本。</li>
<li>1.2 PAM：OpenSSH 使用了Pluggable Authentication Modules (PAM)，因此需要安装 PAM 相关的库文件。</li>
<li>1.3 Zlib：OpenSSH 使用了 Zlib 库进行数据压缩。因此，需要安装 Zlib 的库文件。</li>
<li>1.4 GCC 和 G++：OpenSSH 的编译需要 GCC 和 G++ 编译器。</li>
</ul>
</blockquote>
<h2 id="centos-服务器升级openssh到9-3p2" tabindex="-1"><a class="header-anchor" href="#centos-服务器升级openssh到9-3p2" aria-hidden="true">#</a> Centos 服务器升级OpenSSH到9.3p2</h2>
<h3 id="_1、安装依赖" tabindex="-1"><a class="header-anchor" href="#_1、安装依赖" aria-hidden="true">#</a> 1、安装依赖</h3>
<p><a href="#click_me_jump">安装一些必要的命令（需要用到的）</a></p>
<h3 id="_2、编译安装openssl" tabindex="-1"><a class="header-anchor" href="#_2、编译安装openssl" aria-hidden="true">#</a> 2、编译安装openssl</h3>
<p><span id="openssl">2.1 官网下载安装包：<a href="https://www.openssl.org/source/old/" target="_blank" rel="noopener noreferrer">openssl官网<ExternalLinkIcon/></a></span></p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/944b44d1363f4dd288211b863b1c7df7.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/0e31c72b56ce4e09916cc291e2a31251.png" alt="在这里插入图片描述" loading="lazy"></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">wget</span> https://www.openssl.org/source/old/1.1.1/openssl-1.1.1t.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者是使用我提供的离线包：<a href="https://download.csdn.net/download/liu_chen_yang/88405608" target="_blank" rel="noopener noreferrer">openssh7.4p1 升级到 openssh9.4p1 所需的离线包<ExternalLinkIcon/></a></p>
<p><strong>网盘下载：</strong><br>
链接：<a href="https://pan.baidu.com/s/1lqPe1J3wbUuEyA9otQO35g?pwd=open" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1lqPe1J3wbUuEyA9otQO35g?pwd=open <ExternalLinkIcon/></a><br>
提取码：open</p>
<hr>
<p>如果遇到以下问题，后面加上<code v-pre>--no-check-certificate</code></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/3be70e41f33f44f6b3f445776e80d4ba.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">wget</span> https://www.openssl.org/source/old/1.1.1/openssl-1.1.1t.tar.gz --no-check-certificate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/2b1c024b563642acabac5226d595b2ed.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>2.2  解压并放到/usr/local/目录</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">tar</span> xf openssl-1.1.1t.tar.gz <span class="token parameter variable">-C</span> /usr/local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2.3 编译安装openssl</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 进入openssl目录</span>
<span class="token builtin class-name">cd</span> /usr/local/openssl-1.1.1t

<span class="token comment"># 编译安装openssl</span>
./config shared <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/openssl
<span class="token function">make</span> <span class="token parameter variable">-j</span> <span class="token number">4</span>
<span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.4 为openssl做软连接</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">"/usr/local/openssl/lib/"</span> <span class="token operator">>></span> /etc/ld.so.conf
<span class="token comment"># 加载配置文件</span>
ldconfig
<span class="token comment"># 备份以前的openssl</span>
<span class="token function">mv</span> /usr/bin/openssl /usr/bin/openssl.old
<span class="token comment"># 软连接，如果提示软连接已存在，记得备份软连接，然后在执行下面再次软连接，要不然会出问题，会导致root目录看不了，磁盘看不了，sftp连接不上；</span>
<span class="token function">ln</span> <span class="token parameter variable">-sv</span> /usr/local/openssl/bin/openssl /usr/bin/openssl
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/openssl/lib/libssl.so.1.1 /usr/lib64/libssl.so.1.1
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/openssl/lib/libcrypto.so.1.1 /usr/lib64/libcrypto.so.1.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><font color=red> 软连接，如果提示软连接已存在，记得备份软连接，然后在执行上面再次进行软连接，要不然会出问题，会导致root目录看不了，磁盘看不了，sftp连接不上，等等一系列问题；</font><p><strong>2.5 查看openssl版本</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>openssl version <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/c8f7d72ebba545f9aa2a3d306434d3d9.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_3、查看、备份并卸载原有openssh" tabindex="-1"><a class="header-anchor" href="#_3、查看、备份并卸载原有openssh" aria-hidden="true">#</a> 3、查看、备份并卸载原有OpenSSH</h3>
<blockquote>
<font color=red>确保终端一直连接 断开远程连接就不能用了</font></blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 查看当前安装包</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># rpm -qa | grep openssh</span>
openssh-clients-7.4p1-21.el7.x86_64
openssh-7.4p1-21.el7.x86_64
openssh-server-7.4p1-21.el7.x86_64

<span class="token comment"># 查看当前OpenSSH版本（Centos7 默认使用OpenSSH_7.4p1）</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ssh -V</span>
OpenSSH_7.4p1, OpenSSL <span class="token number">1.0</span>.2k-fips  <span class="token number">26</span> Jan <span class="token number">2017</span>

<span class="token comment"># 备份现有的SSH</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mv /etc/ssh/ /etc/ssh.bak</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mv /usr/bin/ssh /usr/bin/ssh.bak</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mv /usr/sbin/sshd /usr/sbin/sshd.bak</span>

<span class="token comment"># 如果您是第一次升级，备份/etc/init.d/sshd时会不存在，不影响后续操作</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mv /etc/init.d/sshd /etc/init.d/sshd.bak</span>
mv: 无法获取<span class="token string">'/etc/init.d/sshd'</span> 的文件状态<span class="token punctuation">(</span>stat<span class="token punctuation">)</span>: No such <span class="token function">file</span> or directory

<span class="token comment"># 卸载现有OpenSSH</span>
<span class="token function">rpm</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">--nodeps</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span><span class="token function">grep</span> openssh<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/93bcc6d3205a4b97b266ddbc8071febd.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>确保已经卸载成功（没有返回则卸载成功）</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> openssh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/277bdd224f9e4ef09d818e5d3505aca9.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_4、下载openssh二进制包" tabindex="-1"><a class="header-anchor" href="#_4、下载openssh二进制包" aria-hidden="true">#</a> 4、下载OpenSSH二进制包</h3>
<p>openssh官网：<a href="https://cdn.openbsd.org/pub/OpenBSD/OpenSSH/portable/" target="_blank" rel="noopener noreferrer">下载官网<ExternalLinkIcon/></a></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">wget</span> https://cdn.openbsd.org/pub/OpenBSD/OpenSSH/portable/openssh-9.4p1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/b095f9d6ab1840cdbdc5e3799ed4d545.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>或者是使用我提供的离线包：<a href="https://download.csdn.net/download/liu_chen_yang/88405608" target="_blank" rel="noopener noreferrer">openssh7.4p1 升级到 openssh9.4p1 所需的离线包<ExternalLinkIcon/></a></p>
<p><strong>网盘下载：</strong><br>
链接：<a href="https://pan.baidu.com/s/1lqPe1J3wbUuEyA9otQO35g?pwd=open" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1lqPe1J3wbUuEyA9otQO35g?pwd=open <ExternalLinkIcon/></a><br>
提取码：open</p>
<h3 id="_5、解压并编译安装openssh" tabindex="-1"><a class="header-anchor" href="#_5、解压并编译安装openssh" aria-hidden="true">#</a> 5、解压并编译安装OpenSSH</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 将下载的openssh安装包移动到/usr/local下</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mv openssh-9.4p1.tar.gz /usr/local/</span>

<span class="token comment"># 进入/usr/local/目录解压openssh9.4</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cd /usr/local/</span>
<span class="token punctuation">[</span>root@localhost local<span class="token punctuation">]</span><span class="token comment"># tar xf openssh-9.4p1.tar.gz</span>

<span class="token comment"># 进入openssh目录</span>
<span class="token punctuation">[</span>root@localhost local<span class="token punctuation">]</span><span class="token comment"># cd openssh-9.4p1</span>

<span class="token comment"># 编译安装</span>
<span class="token punctuation">[</span>root@localhost openssh-9.4p1<span class="token punctuation">]</span><span class="token comment"># CCFLAGS="-I/usr/local/include" \</span>
<span class="token assign-left variable">LDFLAGS</span><span class="token operator">=</span><span class="token string">"-L/usr/local/lib64"</span> <span class="token punctuation">\</span>
./configure <span class="token punctuation">\</span>
<span class="token parameter variable">--sysconfdir</span><span class="token operator">=</span>/etc/ssh <span class="token punctuation">\</span>
--with-zlib <span class="token punctuation">\</span>
--with-ssl-dir<span class="token operator">=</span>/usr/local/openssl

<span class="token punctuation">[</span>root@localhost openssh-9.4p1<span class="token punctuation">]</span><span class="token comment"># make -j 4</span>
<span class="token punctuation">[</span>root@localhost openssh-9.4p1<span class="token punctuation">]</span><span class="token comment"># make install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、授权" tabindex="-1"><a class="header-anchor" href="#_6、授权" aria-hidden="true">#</a> 6、授权</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost openssh-9.4p1<span class="token punctuation">]</span><span class="token comment"># chmod 600 /etc/ssh/*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7、复制配置文件" tabindex="-1"><a class="header-anchor" href="#_7、复制配置文件" aria-hidden="true">#</a> 7、复制配置文件</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost openssh-9.4p1<span class="token punctuation">]</span><span class="token comment"># cp -rf /usr/local/sbin/sshd /usr/sbin/sshd</span>
<span class="token punctuation">[</span>root@localhost openssh-9.4p1<span class="token punctuation">]</span><span class="token comment"># cp -rf /usr/local/bin/ssh /usr/bin/ssh</span>
<span class="token punctuation">[</span>root@localhost openssh-9.4p1<span class="token punctuation">]</span><span class="token comment"># cp -rf /usr/local/bin/ssh-keygen /usr/bin/ssh-keygen</span>
<span class="token punctuation">[</span>root@localhost openssh-9.4p1<span class="token punctuation">]</span><span class="token comment"># cp -ar /usr/local/openssh-9.4p1/contrib/redhat/sshd.init /etc/init.d/sshd</span>
<span class="token punctuation">[</span>root@localhost openssh-9.4p1<span class="token punctuation">]</span><span class="token comment"># cp -ar /usr/local/openssh-9.4p1/contrib/redhat/sshd.pam /etc/pam.d/sshd.pam</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8、修改配置允许root用户远程登录" tabindex="-1"><a class="header-anchor" href="#_8、修改配置允许root用户远程登录" aria-hidden="true">#</a> 8、修改配置允许root用户远程登录</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 修改配置允许root用户远程登录（允许使用密码登录，允许root远程登录，开启端口，赋予/etc/init.d/sshd权限）</span>
<span class="token function">cat</span> <span class="token operator">>></span>/etc/ssh/sshd_config<span class="token operator">&lt;&lt;</span><span class="token string">EOF
PermitRootLogin yes
X11Forwarding yes
PasswordAuthentication yes
KexAlgorithms diffie-hellman-group1-sha1,diffie-hellman-group14-sha1,diffie-hellman-group-exchange-sha1,diffie-hellman-group-exchange-sha256,ecdh-sha2-nistp256,ecdh-sha2-nistp384,ecdh-sha2-nistp521,diffie-hellman-group1-sha1,curve25519-sha256@libssh.org
EOF</span>

<span class="token punctuation">[</span>root@localhost openssh-9.4p1<span class="token punctuation">]</span><span class="token comment"># sed -i "s/^#Port/Port/g" /etc/ssh/sshd_config</span>
<span class="token punctuation">[</span>root@localhost openssh-9.4p1<span class="token punctuation">]</span><span class="token comment"># chmod 755 /etc/init.d/sshd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9、启用sshd-生成服务配置文件-并重启服务" tabindex="-1"><a class="header-anchor" href="#_9、启用sshd-生成服务配置文件-并重启服务" aria-hidden="true">#</a> 9、启用sshd，生成服务配置文件，并重启服务</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 启用sshd，生成服务配置文件</span>
<span class="token punctuation">[</span>root@localhost openssh-9.4p1<span class="token punctuation">]</span><span class="token comment"># systemctl enable sshd</span>
sshd.service is not a native service, redirecting to /sbin/chkconfig.
Executing /sbin/chkconfig sshd on

<span class="token comment"># 重启服务</span>
<span class="token punctuation">[</span>root@localhost openssh-9.4p1<span class="token punctuation">]</span><span class="token comment"># systemctl restart sshd</span>
<span class="token comment"># 查看服务状态</span>
<span class="token punctuation">[</span>root@localhost openssh-9.4p1<span class="token punctuation">]</span><span class="token comment"># systemctl status sshd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/bdefb79bdbd945b69c80a5a34c0c9bba.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_10、验证升级是否成功" tabindex="-1"><a class="header-anchor" href="#_10、验证升级是否成功" aria-hidden="true">#</a> 10、验证升级是否成功</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ssh -V</span>
OpenSSH_9.4p1, OpenSSL <span class="token number">1.1</span>.1t  <span class="token number">7</span> Feb <span class="token number">2023</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/97cc98e2d9a9482a8da90f8d78468dbc.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="可能遇到的问题及解决方式" tabindex="-1"><a class="header-anchor" href="#可能遇到的问题及解决方式" aria-hidden="true">#</a> 可能遇到的问题及解决方式</h2>
<h3 id="问题一" tabindex="-1"><a class="header-anchor" href="#问题一" aria-hidden="true">#</a> 问题一：</h3>
<p>编译如果有此报错，可能是你没安装gcc…需要的命令，返回最上面：  <a href="#click_me_jump">安装一些必要的命令（需要用到的）</a>，安装完再次编译就可以了。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/0e2a3cc5ff714da1a9992828bd3e5948.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="问题二" tabindex="-1"><a class="header-anchor" href="#问题二" aria-hidden="true">#</a> 问题二：</h3>
<p>编译时报错信息：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>checking <span class="token keyword">for</span> cc<span class="token punctuation">..</span>. cc
checking whether the C compiler works<span class="token punctuation">..</span>. no
configure: error: <span class="token keyword">in</span> <span class="token variable"><span class="token variable">`</span>/usr/local/openssh-9.3p2':
configure: error: C compiler cannot create executables
See <span class="token variable">`</span></span>config.log' <span class="token keyword">for</span> <span class="token function">more</span> details
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>gcc问题，如果gcc是5.4将gcc降级为4.8.5，我遇到的问题就是因为gcc的版本为5.4，将gcc版本降为4.8.5即可。</p>
<h3 id="问题三" tabindex="-1"><a class="header-anchor" href="#问题三" aria-hidden="true">#</a> 问题三：</h3>
<p>编译时报错信息：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>checking <span class="token keyword">for</span> openssl/opensslv.h<span class="token punctuation">..</span>. <span class="token function">yes</span>
checking OpenSSL header version<span class="token punctuation">..</span>. 009070e0 <span class="token punctuation">(</span>OpenSSL <span class="token number">0.9</span>.7n-dev xx XXX xxxx<span class="token punctuation">)</span>
checking <span class="token keyword">for</span> OpenSSL_version<span class="token punctuation">..</span>. no
checking <span class="token keyword">for</span> OpenSSL_version_num<span class="token punctuation">..</span>. no
checking OpenSSL library version<span class="token punctuation">..</span>. configure: error: OpenSSL <span class="token operator">>=</span> <span class="token number">1.0</span>.1 required <span class="token punctuation">(</span>have <span class="token string">"009070e0 (OpenSSL 0.9.7n-dev xx XXX xxxx)"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个报错是说版本要必须大于等于1.0.1，但是ssh -V我看的时候是1.0.2，可能还是因为版本太低了，我就升级了一个openssl版本为1.1.1，就可以了。安装openssl可参考：<a href="#openssl">编译安装openssl</a></p>
<h3 id="问题四" tabindex="-1"><a class="header-anchor" href="#问题四" aria-hidden="true">#</a> 问题四：</h3>
<p>升级OpenSSH后SFTP无法连接问题</p>
<ul>
<li>1.修改配置</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span>  /etc/ssh/sshd_config
 
<span class="token comment">#override default of no subsystems</span>
<span class="token comment">#Subsystem      sftp    /usr/local/openssh/libexec/sftp-server改成下面这句</span>
Subsystem      <span class="token function">sftp</span>    internal-sftp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>2.重启sshd服务</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl restart sshd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再试一下就可以了。</p>
<h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2>
<ul>
<li>[1] 国家信息安全漏洞库：<a href="http://www.cnnvd.org.cn/" target="_blank" rel="noopener noreferrer">http://www.cnnvd.org.cn/<ExternalLinkIcon/></a></li>
<li>[2] 腾讯安全：<a href="http://www.cnnvd.org.cn/" target="_blank" rel="noopener noreferrer">https://s.tencent.com/research/bsafe/<ExternalLinkIcon/></a></li>
<li>[3] Centos7 yum如何下载离线安装包？（详解）：<a href="https://liucy.blog.csdn.net/article/details/125780172?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/125780172?spm=1001.2014.3001.5502<ExternalLinkIcon/></a></li>
</ul>
<h2 id="相关专栏" tabindex="-1"><a class="header-anchor" href="#相关专栏" aria-hidden="true">#</a> 相关专栏</h2>
<table>
<thead>
<tr>
<th>专栏标题</th>
<th>专栏链接</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://blog.csdn.net/liu_chen_yang/category_12463139.html" target="_blank" rel="noopener noreferrer">《OpenSSH 系列》<ExternalLinkIcon/></a></td>
<td><a href="https://blog.csdn.net/liu_chen_yang/category_12463139.html" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/liu_chen_yang/category_12463139.html<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://blog.csdn.net/liu_chen_yang/category_10887074.html" target="_blank" rel="noopener noreferrer">《Linux从入门到精通》<ExternalLinkIcon/></a></td>
<td><a href="https://blog.csdn.net/liu_chen_yang/category_10887074.html" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/liu_chen_yang/category_10887074.html<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://blog.csdn.net/liu_chen_yang/category_12390514.html" target="_blank" rel="noopener noreferrer">《Linux服务器安全》<ExternalLinkIcon/></a></td>
<td><a href="https://blog.csdn.net/liu_chen_yang/category_12390514.html" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/liu_chen_yang/category_12390514.html<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章" aria-hidden="true">#</a> 相关文章</h2>
<table>
<thead>
<tr>
<th>文章标题</th>
<th>文章链接</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/130484944" target="_blank" rel="noopener noreferrer">【Linux】 OpenSSH_7.4p1 升级到 OpenSSH_8.7p1（亲测无问题，建议收藏）<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/130484944" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/130484944<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/131398113" target="_blank" rel="noopener noreferrer">【Linux】 OpenSSH_7.4p1 升级到 OpenSSH_9.3p1（亲测无问题，建议收藏）<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/131398113" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/131398113<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/133460612" target="_blank" rel="noopener noreferrer">【Linux】 OpenSSH_7.4p1 升级到 OpenSSH_9.3p2（亲测无问题，建议收藏）<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/133460612" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/133460612<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/133697104" target="_blank" rel="noopener noreferrer">【Linux】 OpenSSH_7.4p1 升级到 OpenSSH_9.4p1（亲测无问题，建议收藏）<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/133697104" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/133697104<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/136536352" target="_blank" rel="noopener noreferrer">【Linux】 OpenSSH_7.4p1 升级到 OpenSSH_9.6p1（亲测无问题，建议收藏）<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/136536352" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/136536352<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/133460539" target="_blank" rel="noopener noreferrer">【Linux】 OpenSSH_9.3p1 升级到 OpenSSH_9.3p2（亲测无问题，建议收藏）<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/133460539" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/133460539<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/134717718" target="_blank" rel="noopener noreferrer">【Linux】 OpenSSH_9.3p1 升级到 OpenSSH_9.5p1（亲测无问题，建议收藏）<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/134717718" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/134717718<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/136327961" target="_blank" rel="noopener noreferrer">【Linux】 OpenSSH_9.3p1 升级到 OpenSSH_9.6p1（亲测无问题，建议收藏）<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/136327961" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/136327961<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/133682882" target="_blank" rel="noopener noreferrer">【Linux】 OpenSSH_9.3p2 升级到 OpenSSH_9.4p1（亲测无问题，建议收藏）<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/133682882" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/133682882<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
</div></template>


