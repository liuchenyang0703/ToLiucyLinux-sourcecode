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
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/379775b034b741f09bed3dfae40fa1dd.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
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
在升级前一定要备份原有的配置文件，以防出现意外情况。</p>
</blockquote>
<h2 id="此文升级是基于9-3p2升级9-4p1-如是7-4升级9-4p1-可参考文章最后的参考文章" tabindex="-1"><a class="header-anchor" href="#此文升级是基于9-3p2升级9-4p1-如是7-4升级9-4p1-可参考文章最后的参考文章"><span>此文升级是基于9.3p2升级9.4p1（如是7.4升级9.4p1，可参考文章最后的参考文章）</span></a></h2>
<blockquote>
<p>7.4p1升级到9.4p1文档：<a href="https://liucy.blog.csdn.net/article/details/133697104" target="_blank" rel="noopener noreferrer">【Linux】 OpenSSH_7.4p1 升级到 OpenSSH_9.4p1（亲测无问题，建议收藏）</a></p>
</blockquote>
<h3 id="备份openssh9-3p2的配置文件" tabindex="-1"><a class="header-anchor" href="#备份openssh9-3p2的配置文件"><span>备份openssh9.3p2的配置文件</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# mv /usr/sbin/sshd /usr/sbin/sshd-9.3p2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# mv /usr/bin/ssh /usr/bin/ssh-9.3p2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# mv /usr/bin/ssh-keygen /usr/bin/ssh-keygen-9.3p2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# mv /etc/init.d/sshd /etc/init.d/sshd-9.3p2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# mv /etc/pam.d/sshd.pam /etc/pam.d/sshd.pam-9.3p2</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>如果不需要这些配置可以在升级完成之后确认没有问题再将其删除</p>
</blockquote>
<h3 id="下载-openssh9-4p1-的安装包" tabindex="-1"><a class="header-anchor" href="#下载-openssh9-4p1-的安装包"><span>下载 openssh9.4p1 的安装包：</span></a></h3>
<p>OpenSSH官网：<a href="https://cdn.openbsd.org/pub/OpenBSD/OpenSSH/portable/" target="_blank" rel="noopener noreferrer">下载官网</a></p>
<p>或者是使用我提供的离线包：<a href="https://download.csdn.net/download/liu_chen_yang/88405608" target="_blank" rel="noopener noreferrer">openssh7.4p1 升级到 openssh9.4p1 所需的离线包</a></p>
<p><strong>网盘下载：</strong><br>
链接：<a href="https://pan.baidu.com/s/1lqPe1J3wbUuEyA9otQO35g?pwd=open" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1lqPe1J3wbUuEyA9otQO35g?pwd=open </a><br>
提取码：open</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://cdn.openbsd.org/pub/OpenBSD/OpenSSH/portable/openssh-9.4p1.tar.gz</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="解压并编译安装openssh9-4p1" tabindex="-1"><a class="header-anchor" href="#解压并编译安装openssh9-4p1"><span>解压并编译安装OpenSSH9.4p1</span></a></h3>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="授权执行权限" tabindex="-1"><a class="header-anchor" href="#授权执行权限"><span>授权执行权限</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-9.4p1]# chmod 600 /etc/ssh/*</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="复制配置文件" tabindex="-1"><a class="header-anchor" href="#复制配置文件"><span>复制配置文件</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-9.4p1]# cp -rf /usr/local/sbin/sshd /usr/sbin/sshd</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-9.4p1]# cp -rf /usr/local/bin/ssh /usr/bin/ssh</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-9.4p1]# cp -rf /usr/local/bin/ssh-keygen /usr/bin/ssh-keygen</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-9.4p1]# cp -ar /usr/local/openssh-9.4p1/contrib/redhat/sshd.init /etc/init.d/sshd</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-9.4p1]# cp -ar /usr/local/openssh-9.4p1/contrib/redhat/sshd.pam /etc/pam.d/sshd.pam</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="给sshd授予权限" tabindex="-1"><a class="header-anchor" href="#给sshd授予权限"><span>给sshd授予权限</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> chmod</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 755</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/init.d/sshd</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="启用sshd-生成服务配置文件-并重启服务" tabindex="-1"><a class="header-anchor" href="#启用sshd-生成服务配置文件-并重启服务"><span>启用sshd，生成服务配置文件，并重启服务</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 启用sshd，生成服务配置文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-9.4p1]# systemctl enable sshd</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sshd.service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> not</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> native</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> service,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> redirecting</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /sbin/chkconfig.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Executing</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /sbin/chkconfig</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sshd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> on</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 重启服务</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-9.4p1]# systemctl restart sshd</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看服务状态</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-9.4p1]# systemctl status sshd</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证升级是否成功" tabindex="-1"><a class="header-anchor" href="#验证升级是否成功"><span>验证升级是否成功</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# ssh -V</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">OpenSSH_9.4p1,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> OpenSSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1.1.1t</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  7</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Feb</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2023</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/97cc98e2d9a9482a8da90f8d78468dbc.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
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


