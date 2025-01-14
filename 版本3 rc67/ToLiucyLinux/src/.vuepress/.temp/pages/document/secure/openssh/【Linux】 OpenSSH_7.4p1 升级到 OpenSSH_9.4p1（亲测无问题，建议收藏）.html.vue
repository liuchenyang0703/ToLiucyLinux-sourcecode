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
<h2 id="文章声明" tabindex="-1"><a class="header-anchor" href="#文章声明"><span>文章声明</span></a></h2>
<blockquote>
<p>文章声明：此文基于实操撰写 生产环境：此文升级是基于9.3p2升级9.4p1<br>
ssh -V查看版本是：OpenSSH_9.3p2, OpenSSL 1.1.1t  7 Feb 2023<br>
问题关键字：<font color=red>OpenSSH 升级, OpenSSH 更新, OpenSSH 漏洞修复</font><br>
漏洞信息：<font color=red>OpenSSH 命令注入漏洞(CVE-2020-15778)、OpenSSH 安全漏洞(CVE-2023-38408)</font></p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/379775b034b741f09bed3dfae40fa1dd.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="漏洞描述" tabindex="-1"><a class="header-anchor" href="#漏洞描述"><span>漏洞描述</span></a></h2>
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
<h2 id="前述" tabindex="-1"><a class="header-anchor" href="#前述"><span>前述</span></a></h2>
<blockquote>
<p>OpenSSH（OpenBSD Secure Shell）是OpenBSD计划组的一套用于安全访问远程计算机的连接工具。该工具是SSH协议的开源实现，支持对所有的传输进行加密，可有效阻止窃听、连接劫持以及其他网络级的攻击。 OpenSSH 8.9版本至9.4之前版本存在安全漏洞，该漏洞源于将智能卡密钥添加到ssh-agent，会导致忽略每次转发的目标约束。<br>
注：此操作步骤同样适用于Red Hat系所有 9.x 服务器系统。</p>
</blockquote>
<font color=red>注意事项：</font><blockquote>
<p>在升级之前，建议打开多个SSH终端连接，并安装telnet服务器，确保在SSH服务器升级异常时，可以通过telnet服务器远程连接，进行紧急问题修复处理。<br>
因为最开始需要直接卸载openssh，卸载完之后就连不上了，如有问题不好解决，所以建议多开几个SSH终端连接。<br>
在升级前一定要备份原有的配置文件，以防出现意外情况。</p>
</blockquote>
<h2 id="安装一些必要的命令-需要用到的" tabindex="-1"><a class="header-anchor" href="#安装一些必要的命令-需要用到的"><span>安装一些必要的命令（需要用到的）</span></a></h2>
<p><span id="click_me_jump">安装一些必要的命令（需要用到的）</span></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gcc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> openssl-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pam-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rpm-build</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> zlib-devel</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果没有外网，可以选择在有网络的服务器上下载rpm安装包，yum离线下载安装包可参考：<a href="https://liucy.blog.csdn.net/article/details/125780172?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Centos7 yum如何下载离线安装包？（详解）</a></p>
<p>或者是直接使用我提供的离线包：<a href="https://download.csdn.net/download/liu_chen_yang/88405608" target="_blank" rel="noopener noreferrer">openssh7.4p1 升级到 openssh9.4p1 所需的离线包</a></p>
<p><strong>网盘下载：</strong><br>
链接：<a href="https://pan.baidu.com/s/1lqPe1J3wbUuEyA9otQO35g?pwd=open" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1lqPe1J3wbUuEyA9otQO35g?pwd=open </a><br>
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
<h2 id="centos-服务器升级openssh到9-3p2" tabindex="-1"><a class="header-anchor" href="#centos-服务器升级openssh到9-3p2"><span>Centos 服务器升级OpenSSH到9.3p2</span></a></h2>
<h3 id="_1、安装依赖" tabindex="-1"><a class="header-anchor" href="#_1、安装依赖"><span>1、安装依赖</span></a></h3>
<p><a href="#click_me_jump">安装一些必要的命令（需要用到的）</a></p>
<h3 id="_2、编译安装openssl" tabindex="-1"><a class="header-anchor" href="#_2、编译安装openssl"><span>2、编译安装openssl</span></a></h3>
<p><span id="openssl">2.1 官网下载安装包：<a href="https://www.openssl.org/source/old/" target="_blank" rel="noopener noreferrer">openssl官网</a></span></p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/944b44d1363f4dd288211b863b1c7df7.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/0e31c72b56ce4e09916cc291e2a31251.png" alt="" loading="lazy"></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://www.openssl.org/source/old/1.1.1/openssl-1.1.1t.tar.gz</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>或者是使用我提供的离线包：<a href="https://download.csdn.net/download/liu_chen_yang/88405608" target="_blank" rel="noopener noreferrer">openssh7.4p1 升级到 openssh9.4p1 所需的离线包</a></p>
<p><strong>网盘下载：</strong><br>
链接：<a href="https://pan.baidu.com/s/1lqPe1J3wbUuEyA9otQO35g?pwd=open" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1lqPe1J3wbUuEyA9otQO35g?pwd=open </a><br>
提取码：open</p>
<hr>
<p>如果遇到以下问题，后面加上<code v-pre>--no-check-certificate</code></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/3be70e41f33f44f6b3f445776e80d4ba.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://www.openssl.org/source/old/1.1.1/openssl-1.1.1t.tar.gz</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --no-check-certificate</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/2b1c024b563642acabac5226d595b2ed.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>2.2  解压并放到/usr/local/目录</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> xf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> openssl-1.1.1t.tar.gz</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>2.3 编译安装openssl</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 进入openssl目录</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/openssl-1.1.1t</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 编译安装openssl</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> shared</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --prefix=/usr/local/openssl</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">make</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -j</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 4</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">make</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.4 为openssl做软连接</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "/usr/local/openssl/lib/"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> >> </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/etc/ld.so.conf</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 加载配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ldconfig</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 备份以前的openssl</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/bin/openssl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/bin/openssl.old</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 软连接，如果提示软连接已存在，记得备份软连接，然后在执行下面再次软连接，要不然会出问题，会导致root目录看不了，磁盘看不了，sftp连接不上；</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ln</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -sv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/openssl/bin/openssl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/bin/openssl</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ln</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/openssl/lib/libssl.so.1.1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/lib64/libssl.so.1.1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ln</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/openssl/lib/libcrypto.so.1.1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/lib64/libcrypto.so.1.1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><font color=red> 软连接，如果提示软连接已存在，记得备份软连接，然后在执行上面再次进行软连接，要不然会出问题，会导致root目录看不了，磁盘看不了，sftp连接不上，等等一系列问题；</font><p><strong>2.5 查看openssl版本</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">openssl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> version</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -a</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/c8f7d72ebba545f9aa2a3d306434d3d9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_3、查看、备份并卸载原有openssh" tabindex="-1"><a class="header-anchor" href="#_3、查看、备份并卸载原有openssh"><span>3、查看、备份并卸载原有OpenSSH</span></a></h3>
<blockquote>
<font color=red>确保终端一直连接 断开远程连接就不能用了</font></blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看当前安装包</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# rpm -qa | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> openssh</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">openssh-clients-7.4p1-21.el7.x86_64</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">openssh-7.4p1-21.el7.x86_64</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">openssh-server-7.4p1-21.el7.x86_64</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看当前OpenSSH版本（Centos7 默认使用OpenSSH_7.4p1）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# ssh -V</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">OpenSSH_7.4p1,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> OpenSSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1.0.2k-fips</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  26</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Jan</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2017</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 备份现有的SSH</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# mv /etc/ssh/ /etc/ssh.bak</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# mv /usr/bin/ssh /usr/bin/ssh.bak</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# mv /usr/sbin/sshd /usr/sbin/sshd.bak</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 如果您是第一次升级，备份/etc/init.d/sshd时会不存在，不影响后续操作</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# mv /etc/init.d/sshd /etc/init.d/sshd.bak</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mv:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 无法获取'/etc/init.d/sshd'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 的文件状态</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">stat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> No</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> such</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> or</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> directory</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 卸载现有OpenSSH</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -e</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --nodeps</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> $(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -qa</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> |</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> openssh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/93bcc6d3205a4b97b266ddbc8071febd.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>确保已经卸载成功（没有返回则卸载成功）</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -qa</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> openssh</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/277bdd224f9e4ef09d818e5d3505aca9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_4、下载openssh二进制包" tabindex="-1"><a class="header-anchor" href="#_4、下载openssh二进制包"><span>4、下载OpenSSH二进制包</span></a></h3>
<p>openssh官网：<a href="https://cdn.openbsd.org/pub/OpenBSD/OpenSSH/portable/" target="_blank" rel="noopener noreferrer">下载官网</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://cdn.openbsd.org/pub/OpenBSD/OpenSSH/portable/openssh-9.4p1.tar.gz</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/b095f9d6ab1840cdbdc5e3799ed4d545.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>或者是使用我提供的离线包：<a href="https://download.csdn.net/download/liu_chen_yang/88405608" target="_blank" rel="noopener noreferrer">openssh7.4p1 升级到 openssh9.4p1 所需的离线包</a></p>
<p><strong>网盘下载：</strong><br>
链接：<a href="https://pan.baidu.com/s/1lqPe1J3wbUuEyA9otQO35g?pwd=open" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1lqPe1J3wbUuEyA9otQO35g?pwd=open </a><br>
提取码：open</p>
<h3 id="_5、解压并编译安装openssh" tabindex="-1"><a class="header-anchor" href="#_5、解压并编译安装openssh"><span>5、解压并编译安装OpenSSH</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 将下载的openssh安装包移动到/usr/local下</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# mv openssh-9.4p1.tar.gz /usr/local/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 进入/usr/local/目录解压openssh9.4</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# cd /usr/local/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost local]# tar xf openssh-9.4p1.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 进入openssh目录</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost local]# cd openssh-9.4p1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 编译安装</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-9.4p1]# </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">CCFLAGS</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"-I/usr/local/include"</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> \</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">LDFLAGS=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"-L/usr/local/lib64"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">./configure </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">--sysconfdir=/etc/ssh </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">--with-zlib </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">--with-ssl-dir=/usr/local/openssl</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-9.4p1]# make -j 4</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-9.4p1]# make install</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、授权" tabindex="-1"><a class="header-anchor" href="#_6、授权"><span>6、授权</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-9.4p1]# chmod 600 /etc/ssh/*</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_7、复制配置文件" tabindex="-1"><a class="header-anchor" href="#_7、复制配置文件"><span>7、复制配置文件</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-9.4p1]# cp -rf /usr/local/sbin/sshd /usr/sbin/sshd</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-9.4p1]# cp -rf /usr/local/bin/ssh /usr/bin/ssh</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-9.4p1]# cp -rf /usr/local/bin/ssh-keygen /usr/bin/ssh-keygen</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-9.4p1]# cp -ar /usr/local/openssh-9.4p1/contrib/redhat/sshd.init /etc/init.d/sshd</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-9.4p1]# cp -ar /usr/local/openssh-9.4p1/contrib/redhat/sshd.pam /etc/pam.d/sshd.pam</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8、修改配置允许root用户远程登录" tabindex="-1"><a class="header-anchor" href="#_8、修改配置允许root用户远程登录"><span>8、修改配置允许root用户远程登录</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 修改配置允许root用户远程登录（允许使用密码登录，允许root远程登录，开启端口，赋予/etc/init.d/sshd权限）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> >></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/etc/ssh/sshd_config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">PermitRootLogin yes</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">X11Forwarding yes</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">PasswordAuthentication yes</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">KexAlgorithms diffie-hellman-group1-sha1,diffie-hellman-group14-sha1,diffie-hellman-group-exchange-sha1,diffie-hellman-group-exchange-sha256,ecdh-sha2-nistp256,ecdh-sha2-nistp384,ecdh-sha2-nistp521,diffie-hellman-group1-sha1,curve25519-sha256@libssh.org</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-9.4p1]# sed -i </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"s/^#Port/Port/g"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /etc/ssh/sshd_config</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-9.4p1]# chmod 755 /etc/init.d/sshd</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9、启用sshd-生成服务配置文件-并重启服务" tabindex="-1"><a class="header-anchor" href="#_9、启用sshd-生成服务配置文件-并重启服务"><span>9、启用sshd，生成服务配置文件，并重启服务</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 启用sshd，生成服务配置文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-9.4p1]# systemctl enable sshd</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sshd.service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> not</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> native</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> service,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> redirecting</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /sbin/chkconfig.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Executing</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /sbin/chkconfig</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sshd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> on</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 重启服务</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-9.4p1]# systemctl restart sshd</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看服务状态</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-9.4p1]# systemctl status sshd</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/bdefb79bdbd945b69c80a5a34c0c9bba.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_10、验证升级是否成功" tabindex="-1"><a class="header-anchor" href="#_10、验证升级是否成功"><span>10、验证升级是否成功</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# ssh -V</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">OpenSSH_9.4p1,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> OpenSSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1.1.1t</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  7</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Feb</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2023</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/97cc98e2d9a9482a8da90f8d78468dbc.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="可能遇到的问题及解决方式" tabindex="-1"><a class="header-anchor" href="#可能遇到的问题及解决方式"><span>可能遇到的问题及解决方式</span></a></h2>
<h3 id="问题一" tabindex="-1"><a class="header-anchor" href="#问题一"><span>问题一：</span></a></h3>
<p>编译如果有此报错，可能是你没安装gcc…需要的命令，返回最上面：  <a href="#click_me_jump">安装一些必要的命令（需要用到的）</a>，安装完再次编译就可以了。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/0e2a3cc5ff714da1a9992828bd3e5948.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="问题二" tabindex="-1"><a class="header-anchor" href="#问题二"><span>问题二：</span></a></h3>
<p>编译时报错信息：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">checking</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> for</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cc...</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cc</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">checking</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> whether</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> compiler</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> works...</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> no</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">configure:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> error:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> `</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/usr/local/openssh-9.3p2':</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">configure: error: C compiler cannot create executables</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">See `config.log'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> for more details</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>gcc问题，如果gcc是5.4将gcc降级为4.8.5，我遇到的问题就是因为gcc的版本为5.4，将gcc版本降为4.8.5即可。</p>
<h3 id="问题三" tabindex="-1"><a class="header-anchor" href="#问题三"><span>问题三：</span></a></h3>
<p>编译时报错信息：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">checking</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> for</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> openssl/opensslv.h...</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> yes</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">checking</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> OpenSSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> header</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> version...</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 009070e0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (OpenSSL </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">0.9.7n-dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> xx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> XXX</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> xxxx</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">checking</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> for</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> OpenSSL_version...</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> no</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">checking</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> for</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> OpenSSL_version_num...</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> no</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">checking</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> OpenSSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> library</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> version...</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> configure:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> error:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> OpenSSL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1.0.1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> required</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (have </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"009070e0 (OpenSSL 0.9.7n-dev xx XXX xxxx)"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个报错是说版本要必须大于等于1.0.1，但是ssh -V我看的时候是1.0.2，可能还是因为版本太低了，我就升级了一个openssl版本为1.1.1，就可以了。安装openssl可参考：<a href="#openssl">编译安装openssl</a></p>
<h3 id="问题四" tabindex="-1"><a class="header-anchor" href="#问题四"><span>问题四：</span></a></h3>
<p>升级OpenSSH后SFTP无法连接问题</p>
<ul>
<li>1.修改配置</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  /etc/ssh/sshd_config</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#override default of no subsystems</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#Subsystem      sftp    /usr/local/openssh/libexec/sftp-server改成下面这句</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Subsystem</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      sftp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    internal-sftp</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>2.重启sshd服务</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sshd</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>再试一下就可以了。</p>
<h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>
<ul>
<li>[1] 国家信息安全漏洞库：<a href="http://www.cnnvd.org.cn/" target="_blank" rel="noopener noreferrer">http://www.cnnvd.org.cn/</a></li>
<li>[2] 腾讯安全：<a href="http://www.cnnvd.org.cn/" target="_blank" rel="noopener noreferrer">https://s.tencent.com/research/bsafe/</a></li>
<li>[3] Centos7 yum如何下载离线安装包？（详解）：<a href="https://liucy.blog.csdn.net/article/details/125780172?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/125780172?spm=1001.2014.3001.5502</a></li>
</ul>
<h2 id="相关专栏" tabindex="-1"><a class="header-anchor" href="#相关专栏"><span>相关专栏</span></a></h2>
<table>
<thead>
<tr>
<th>专栏标题</th>
<th>专栏链接</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://blog.csdn.net/liu_chen_yang/category_12463139.html" target="_blank" rel="noopener noreferrer">《OpenSSH 系列》</a></td>
<td><a href="https://blog.csdn.net/liu_chen_yang/category_12463139.html" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/liu_chen_yang/category_12463139.html</a></td>
</tr>
<tr>
<td><a href="https://blog.csdn.net/liu_chen_yang/category_10887074.html" target="_blank" rel="noopener noreferrer">《Linux从入门到精通》</a></td>
<td><a href="https://blog.csdn.net/liu_chen_yang/category_10887074.html" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/liu_chen_yang/category_10887074.html</a></td>
</tr>
<tr>
<td><a href="https://blog.csdn.net/liu_chen_yang/category_12390514.html" target="_blank" rel="noopener noreferrer">《Linux服务器安全》</a></td>
<td><a href="https://blog.csdn.net/liu_chen_yang/category_12390514.html" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/liu_chen_yang/category_12390514.html</a></td>
</tr>
</tbody>
</table>
<h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章"><span>相关文章</span></a></h2>
<table>
<thead>
<tr>
<th>文章标题</th>
<th>文章链接</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/130484944" target="_blank" rel="noopener noreferrer">【Linux】 OpenSSH_7.4p1 升级到 OpenSSH_8.7p1（亲测无问题，建议收藏）</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/130484944" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/130484944</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/131398113" target="_blank" rel="noopener noreferrer">【Linux】 OpenSSH_7.4p1 升级到 OpenSSH_9.3p1（亲测无问题，建议收藏）</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/131398113" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/131398113</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/133460612" target="_blank" rel="noopener noreferrer">【Linux】 OpenSSH_7.4p1 升级到 OpenSSH_9.3p2（亲测无问题，建议收藏）</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/133460612" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/133460612</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/133697104" target="_blank" rel="noopener noreferrer">【Linux】 OpenSSH_7.4p1 升级到 OpenSSH_9.4p1（亲测无问题，建议收藏）</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/133697104" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/133697104</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/136536352" target="_blank" rel="noopener noreferrer">【Linux】 OpenSSH_7.4p1 升级到 OpenSSH_9.6p1（亲测无问题，建议收藏）</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/136536352" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/136536352</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/133460539" target="_blank" rel="noopener noreferrer">【Linux】 OpenSSH_9.3p1 升级到 OpenSSH_9.3p2（亲测无问题，建议收藏）</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/133460539" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/133460539</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/134717718" target="_blank" rel="noopener noreferrer">【Linux】 OpenSSH_9.3p1 升级到 OpenSSH_9.5p1（亲测无问题，建议收藏）</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/134717718" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/134717718</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/136327961" target="_blank" rel="noopener noreferrer">【Linux】 OpenSSH_9.3p1 升级到 OpenSSH_9.6p1（亲测无问题，建议收藏）</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/136327961" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/136327961</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/133682882" target="_blank" rel="noopener noreferrer">【Linux】 OpenSSH_9.3p2 升级到 OpenSSH_9.4p1（亲测无问题，建议收藏）</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/133682882" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/133682882</a></td>
</tr>
</tbody>
</table>
</div></template>


