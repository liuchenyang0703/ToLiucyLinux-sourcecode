<template><div><p>👨‍🎓<strong>博主简介</strong></p>
<blockquote>
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
<p>文章声明：此文基于实操撰写<br>
生产环境：ssh -V查看版本是：OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017<br>
问题关键字：<font color=red>OpenSSH 升级, OpenSSH 更新, OpenSSH 漏洞修复</font></p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/13e70db213ef46fba6bcf12482445256.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="前述" tabindex="-1"><a class="header-anchor" href="#前述"><span>前述</span></a></h2>
<blockquote>
<p>OpenSSH（OpenBSD Secure Shell）是OpenBSD计划组的一套用于安全访问远程计算机的连接工具。该工具是SSH协议的开源实现，支持对所有的传输进行加密，可有效阻止窃听、连接劫持以及其他网络级的攻击。 OpenSSH 8.3p1及之前版本中scp的scp.c文件存在操作系统命令注入漏洞。该漏洞源于外部输入数据构造操作系统可执行命令过程中，网络系统或产品未正确过滤其中的特殊字符、命令等。攻击者可利用该漏洞执行非法操作系统命令。 详细参考国家信息安全漏洞库信息: CVE-2020-15778 目前Rocky Linux 8.3 RC1 采用的为OpenSSH_8.0p1，所以建议通过升级OpenSSH修复此问题。同样OpenSSH before 8.5也存在漏洞，所以建议修复至最新版本OpenSSH_8.7p1。 注：此操作步骤同样适用于Red Hat系所有7.x 8.x服务器系统。</p>
</blockquote>
<font color=red>注意事项：</font><blockquote>
<p>在升级之前，建议打开多个SSH终端连接，并安装telnet服务器，确保在SSH服务器升级异常时，可以通过telnet服务器远程连接，进行紧急问题修复处理。<br>
因为最开始需要直接卸载openssh，卸载完之后就连不上了，如有问题不好解决，所以建议多开几个SSH终端连接。</p>
</blockquote>
<h2 id="安装一些必要的命令-需要用到的" tabindex="-1"><a class="header-anchor" href="#安装一些必要的命令-需要用到的"><span>安装一些必要的命令（需要用到的）</span></a></h2>
<p><span id="click_me_jump">安装一些必要的命令（需要用到的）</span></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gcc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> openssl-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pam-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rpm-build</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> zlib</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果没有外网，可以选择在有网络的服务器上下载rpm安装包，yum离线下载安装包可参考：<a href="https://liucy.blog.csdn.net/article/details/125780172?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Centos7 yum如何下载离线安装包？（详解）</a></p>
<p><strong>命令解析：</strong></p>
<blockquote>
<ul>
<li>1.1 OpenSSL：OpenSSH 使用了 OpenSSL 的加密库。因此，在更新 OpenSSH 之前，需要先更新 OpenSSL 的版本。</li>
<li>1.2 PAM：OpenSSH 使用了Pluggable Authentication Modules (PAM)，因此需要安装 PAM 相关的库文件。</li>
<li>1.3 Zlib：OpenSSH 使用了 Zlib 库进行数据压缩。因此，需要安装 Zlib 的库文件。</li>
<li>1.4 GCC 和 G++：OpenSSH 的编译需要 GCC 和 G++ 编译器。</li>
</ul>
</blockquote>
<h2 id="centos-服务器升级openssh" tabindex="-1"><a class="header-anchor" href="#centos-服务器升级openssh"><span>Centos 服务器升级OpenSSH</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看当前安装包</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# rpm -qa | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> openssh</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">openssh-clients-7.4p1-21.el7.x86_64</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">openssh-7.4p1-21.el7.x86_64</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">openssh-server-7.4p1-21.el7.x86_64</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看当前OpenSSH版本（Centos7 默认使用OpenSSH_7.4p1）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# ssh -V</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">OpenSSH_7.4p1,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> OpenSSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1.0.2k-fips</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  26</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Jan</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2017</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 备份现有的SSH</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# mv /etc/ssh/ /etc/ssh.bak</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# mv /usr/bin/ssh /usr/bin/ssh.bak</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# mv /usr/sbin/sshd /usr/sbin/sshd.bak</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 如果您是第一次升级，备份/etc/init.d/sshd时会不存在，不影响后续操作</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# mv /etc/init.d/sshd /etc/init.d/sshd.bak</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mv:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 无法获取'/etc/init.d/sshd'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 的文件状态</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">stat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> No</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> such</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> or</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> directory</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 卸载现有OpenSSH</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# rpm -e --nodeps $(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -qa</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> |</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> openssh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">警告：文件</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/sbin/sshd:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 移除失败:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 没有那个文件或目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">警告：文件</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/ssh/sshd_config:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 移除失败:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 没有那个文件或目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">警告：文件</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/bin/ssh:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 移除失败:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 没有那个文件或目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">警告：文件</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/ssh/ssh_config:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 移除失败:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 没有那个文件或目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">警告：文件</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/ssh/moduli:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 移除失败:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 没有那个文件或目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">警告：文件</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/ssh:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 移除失败:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 没有那个文件或目录</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 确保已经卸载成功（没有返回则卸载成功）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# rpm -qa | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> openssh</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 下载OpenSSH二进制包</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# wget https://cdn.openbsd.org/pub/OpenBSD/OpenSSH/portable/openssh-8.7p1.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# tar -zxvf openssh-8.7p1.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# cd openssh-8.7p1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 编译安装</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-8.7p1]# ./configure </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">--prefix</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/usr</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> --sysconfdir</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/etc/ssh</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> --with-md5-passwords</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --with-pam</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --with-zlib</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --with-ssl-dir=/usr/local/ssl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --without-hardening</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-8.7p1]# make</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-8.7p1]# make install</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译如果有此报错，可能是你没安装gcc..需要的命令，返回最上面： <a href="#click_me_jump">安装一些必要的命令（需要用到的）</a>，安装完再次编译就可以了。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/70cf95167f6e4edaa39b2bf8fbcb174e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 授权</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-8.7p1]# chmod 600 /etc/ssh/ssh_host_rsa_key /etc/ssh/ssh_host_ecdsa_key /etc/ssh/ssh_host_ed25519_key</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 复制配置文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-8.7p1]# cp -a contrib/redhat/sshd.init /etc/init.d/sshd</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-8.7p1]# cp -a contrib/redhat/sshd.pam /etc/pam.d/sshd.pam</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 修改配置允许root用户远程登录（允许密码登录，允许root远程登录，开启端口，赋予/etc/init.d/sshd权限）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-8.7p1]# echo </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"PasswordAuthentication yes"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> >> /etc/ssh/sshd_config</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-8.7p1]# echo </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"PermitRootLogin yes"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> >> /etc/ssh/sshd_config</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-8.7p1]# sed -i </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"s/^#Port/Port/g"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /etc/ssh/sshd_config</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-8.7p1]# chmod 755 /etc/init.d/sshd</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 启用sshd，生成服务配置文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-8.7p1]# systemctl enable sshd</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sshd.service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> not</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> native</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> service,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> redirecting</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> systemd-sysv-install.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Executing:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/lib/systemd/systemd-sysv-install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sshd</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 重启服务</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-8.7p1]# systemctl restart sshd</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 验证升级是否成功</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# ssh -V</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">OpenSSH_8.7p1,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> OpenSSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1.0.2k-fips</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  26</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Jan</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2017</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ubuntu-服务器升级openssh" tabindex="-1"><a class="header-anchor" href="#ubuntu-服务器升级openssh"><span>Ubuntu 服务器升级OpenSSH</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 下载OpenSSH二进制包</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">root@localhost:~#</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://cdn.openbsd.org/pub/OpenBSD/OpenSSH/portable/openssh-8.7p1.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">root@localhost:~#</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -zxvf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> openssh-8.7p1.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">root@localhost:~#</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> openssh-8.7p1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 编译安装</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">root@localhost:openssh-8.7p1#</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ./configure</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --prefix=/usr</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --sysconfdir=/etc/ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --with-md5-passwords</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --with-pam</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --with-zlib</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --with-privsep-path=/var/lib/sshd</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">root@localhost:openssh-8.7p1#</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> make</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">root@localhost:openssh-8.7p1#</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> make</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译如果有此报错，可能是你没安装gcc..需要的命令，返回最上面： <a href="#click_me_jump">安装一些必要的命令（需要用到的）</a>，安装完再次编译就可以了。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/70cf95167f6e4edaa39b2bf8fbcb174e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 重启服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">root@localhost:openssh-8.7p1#</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sshd</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 验证升级是否成功</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">root@localhost:openssh-8.7p1#</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -V</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">OpenSSH_8.7p1,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> OpenSSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1.0.2k-fips</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  26</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Jan</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2017</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>
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


