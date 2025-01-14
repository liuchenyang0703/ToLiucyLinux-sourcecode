<template><div><p>👨‍🎓<strong>博主简介</strong></p>
<blockquote>
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
<p>文章声明：此文基于实操撰写<br>
生产环境：ssh -V查看版本是：OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017<br>
问题关键字：<font color=red>OpenSSH 升级, OpenSSH 更新, OpenSSH 漏洞修复</font></p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/13e70db213ef46fba6bcf12482445256.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="前述" tabindex="-1"><a class="header-anchor" href="#前述" aria-hidden="true">#</a> 前述</h2>
<blockquote>
<p>OpenSSH（OpenBSD Secure Shell）是OpenBSD计划组的一套用于安全访问远程计算机的连接工具。该工具是SSH协议的开源实现，支持对所有的传输进行加密，可有效阻止窃听、连接劫持以及其他网络级的攻击。 OpenSSH 8.3p1及之前版本中scp的scp.c文件存在操作系统命令注入漏洞。该漏洞源于外部输入数据构造操作系统可执行命令过程中，网络系统或产品未正确过滤其中的特殊字符、命令等。攻击者可利用该漏洞执行非法操作系统命令。 详细参考国家信息安全漏洞库信息: CVE-2020-15778 目前Rocky Linux 8.3 RC1 采用的为OpenSSH_8.0p1，所以建议通过升级OpenSSH修复此问题。同样OpenSSH before 8.5也存在漏洞，所以建议修复至最新版本OpenSSH_8.7p1。 注：此操作步骤同样适用于Red Hat系所有7.x 8.x服务器系统。</p>
</blockquote>
<font color=red>注意事项：</font><blockquote>
<p>在升级之前，建议打开多个SSH终端连接，并安装telnet服务器，确保在SSH服务器升级异常时，可以通过telnet服务器远程连接，进行紧急问题修复处理。<br>
因为最开始需要直接卸载openssh，卸载完之后就连不上了，如有问题不好解决，所以建议多开几个SSH终端连接。</p>
</blockquote>
<h2 id="安装一些必要的命令-需要用到的" tabindex="-1"><a class="header-anchor" href="#安装一些必要的命令-需要用到的" aria-hidden="true">#</a> 安装一些必要的命令（需要用到的）</h2>
<p><span id="click_me_jump">安装一些必要的命令（需要用到的）</span></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token function">wget</span> gcc openssl-devel pam-devel rpm-build zlib <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果没有外网，可以选择在有网络的服务器上下载rpm安装包，yum离线下载安装包可参考：<a href="https://liucy.blog.csdn.net/article/details/125780172?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Centos7 yum如何下载离线安装包？（详解）<ExternalLinkIcon/></a></p>
<p><strong>命令解析：</strong></p>
<blockquote>
<ul>
<li>1.1 OpenSSL：OpenSSH 使用了 OpenSSL 的加密库。因此，在更新 OpenSSH 之前，需要先更新 OpenSSL 的版本。</li>
<li>1.2 PAM：OpenSSH 使用了Pluggable Authentication Modules (PAM)，因此需要安装 PAM 相关的库文件。</li>
<li>1.3 Zlib：OpenSSH 使用了 Zlib 库进行数据压缩。因此，需要安装 Zlib 的库文件。</li>
<li>1.4 GCC 和 G++：OpenSSH 的编译需要 GCC 和 G++ 编译器。</li>
</ul>
</blockquote>
<h2 id="centos-服务器升级openssh" tabindex="-1"><a class="header-anchor" href="#centos-服务器升级openssh" aria-hidden="true">#</a> Centos 服务器升级OpenSSH</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 查看当前安装包</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># rpm -qa | grep openssh</span>
openssh-clients-7.4p1-21.el7.x86_64
openssh-7.4p1-21.el7.x86_64
openssh-server-7.4p1-21.el7.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 查看当前OpenSSH版本（Centos7 默认使用OpenSSH_7.4p1）</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ssh -V</span>
OpenSSH_7.4p1, OpenSSL <span class="token number">1.0</span>.2k-fips  <span class="token number">26</span> Jan <span class="token number">2017</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 备份现有的SSH</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mv /etc/ssh/ /etc/ssh.bak</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mv /usr/bin/ssh /usr/bin/ssh.bak</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mv /usr/sbin/sshd /usr/sbin/sshd.bak</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 如果您是第一次升级，备份/etc/init.d/sshd时会不存在，不影响后续操作</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mv /etc/init.d/sshd /etc/init.d/sshd.bak</span>
mv: 无法获取<span class="token string">'/etc/init.d/sshd'</span> 的文件状态<span class="token punctuation">(</span>stat<span class="token punctuation">)</span>: No such <span class="token function">file</span> or directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 卸载现有OpenSSH</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># rpm -e --nodeps $(rpm -qa |grep openssh)</span>
警告：文件 /usr/sbin/sshd: 移除失败: 没有那个文件或目录
警告：文件 /etc/ssh/sshd_config: 移除失败: 没有那个文件或目录
警告：文件 /usr/bin/ssh: 移除失败: 没有那个文件或目录
警告：文件 /etc/ssh/ssh_config: 移除失败: 没有那个文件或目录
警告：文件 /etc/ssh/moduli: 移除失败: 没有那个文件或目录
警告：文件 /etc/ssh: 移除失败: 没有那个文件或目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 确保已经卸载成功（没有返回则卸载成功）</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># rpm -qa | grep openssh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 下载OpenSSH二进制包</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># wget https://cdn.openbsd.org/pub/OpenBSD/OpenSSH/portable/openssh-8.7p1.tar.gz</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># tar -zxvf openssh-8.7p1.tar.gz</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cd openssh-8.7p1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 编译安装</span>
<span class="token punctuation">[</span>root@localhost openssh-8.7p1<span class="token punctuation">]</span><span class="token comment"># ./configure --prefix=/usr --sysconfdir=/etc/ssh --with-md5-passwords --with-pam --with-zlib --with-ssl-dir=/usr/local/ssl --without-hardening</span>
<span class="token punctuation">[</span>root@localhost openssh-8.7p1<span class="token punctuation">]</span><span class="token comment"># make</span>
<span class="token punctuation">[</span>root@localhost openssh-8.7p1<span class="token punctuation">]</span><span class="token comment"># make install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译如果有此报错，可能是你没安装gcc..需要的命令，返回最上面： <a href="#click_me_jump">安装一些必要的命令（需要用到的）</a>，安装完再次编译就可以了。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/70cf95167f6e4edaa39b2bf8fbcb174e.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 授权</span>
<span class="token punctuation">[</span>root@localhost openssh-8.7p1<span class="token punctuation">]</span><span class="token comment"># chmod 600 /etc/ssh/ssh_host_rsa_key /etc/ssh/ssh_host_ecdsa_key /etc/ssh/ssh_host_ed25519_key</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 复制配置文件</span>
<span class="token punctuation">[</span>root@localhost openssh-8.7p1<span class="token punctuation">]</span><span class="token comment"># cp -a contrib/redhat/sshd.init /etc/init.d/sshd</span>
<span class="token punctuation">[</span>root@localhost openssh-8.7p1<span class="token punctuation">]</span><span class="token comment"># cp -a contrib/redhat/sshd.pam /etc/pam.d/sshd.pam</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 修改配置允许root用户远程登录（允许密码登录，允许root远程登录，开启端口，赋予/etc/init.d/sshd权限）</span>
<span class="token punctuation">[</span>root@localhost openssh-8.7p1<span class="token punctuation">]</span><span class="token comment"># echo "PasswordAuthentication yes" >> /etc/ssh/sshd_config</span>
<span class="token punctuation">[</span>root@localhost openssh-8.7p1<span class="token punctuation">]</span><span class="token comment"># echo "PermitRootLogin yes" >> /etc/ssh/sshd_config</span>
<span class="token punctuation">[</span>root@localhost openssh-8.7p1<span class="token punctuation">]</span><span class="token comment"># sed -i "s/^#Port/Port/g" /etc/ssh/sshd_config</span>
<span class="token punctuation">[</span>root@localhost openssh-8.7p1<span class="token punctuation">]</span><span class="token comment"># chmod 755 /etc/init.d/sshd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 启用sshd，生成服务配置文件</span>
<span class="token punctuation">[</span>root@localhost openssh-8.7p1<span class="token punctuation">]</span><span class="token comment"># systemctl enable sshd</span>
sshd.service is not a native service, redirecting to systemd-sysv-install.
Executing: /usr/lib/systemd/systemd-sysv-install <span class="token builtin class-name">enable</span> sshd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 重启服务</span>
<span class="token punctuation">[</span>root@localhost openssh-8.7p1<span class="token punctuation">]</span><span class="token comment"># systemctl restart sshd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 验证升级是否成功</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ssh -V</span>
OpenSSH_8.7p1, OpenSSL <span class="token number">1.0</span>.2k-fips  <span class="token number">26</span> Jan <span class="token number">2017</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ubuntu-服务器升级openssh" tabindex="-1"><a class="header-anchor" href="#ubuntu-服务器升级openssh" aria-hidden="true">#</a> Ubuntu 服务器升级OpenSSH</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 下载OpenSSH二进制包</span>
root@localhost:~<span class="token comment"># wget https://cdn.openbsd.org/pub/OpenBSD/OpenSSH/portable/openssh-8.7p1.tar.gz</span>
root@localhost:~<span class="token comment"># tar -zxvf openssh-8.7p1.tar.gz</span>
root@localhost:~<span class="token comment"># cd openssh-8.7p1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 编译安装</span>
root@localhost:openssh-8.7p1<span class="token comment"># ./configure --prefix=/usr --sysconfdir=/etc/ssh --with-md5-passwords --with-pam --with-zlib --with-privsep-path=/var/lib/sshd</span>
root@localhost:openssh-8.7p1<span class="token comment"># make</span>
root@localhost:openssh-8.7p1<span class="token comment"># make install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译如果有此报错，可能是你没安装gcc..需要的命令，返回最上面： <a href="#click_me_jump">安装一些必要的命令（需要用到的）</a>，安装完再次编译就可以了。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/70cf95167f6e4edaa39b2bf8fbcb174e.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 重启服务</span>
root@localhost:openssh-8.7p1<span class="token comment"># systemctl restart sshd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 验证升级是否成功</span>
root@localhost:openssh-8.7p1<span class="token comment"># ssh -V</span>
OpenSSH_8.7p1, OpenSSL <span class="token number">1.0</span>.2k-fips  <span class="token number">26</span> Jan <span class="token number">2017</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2>
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


