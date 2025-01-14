<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">CSDN博客专家<ExternalLinkIcon/></a><br>
  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<p>@[toc]</p>
<h1 id="文章声明" tabindex="-1"><a class="header-anchor" href="#文章声明" aria-hidden="true">#</a> 文章声明</h1>
<blockquote>
<p>文章声明：此文基于实操撰写 生产环境：此文升级是基于9.3p1升级9.6p1<br>
ssh -V查看版本是：OpenSSH_9.3p1, OpenSSL 1.1.1t  7 Feb 2023<br>
问题关键字：<font color=red>OpenSSH 升级, OpenSSH 更新, OpenSSH 漏洞修复</font><br>
漏洞信息：<font color=red>OpenSSH 命令注入漏洞(CVE-2023-51385)</font></p>
</blockquote>
<figure><img src="https://img-blog.csdnimg.cn/direct/fdc25d4d9a5c414596bf5f8ae9278347.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="漏洞描述" tabindex="-1"><a class="header-anchor" href="#漏洞描述" aria-hidden="true">#</a> 漏洞描述</h1>
<p><strong>OpenSSH命令注入漏洞（CVE-2023-51385）详细描述：</strong></p>
<blockquote>
<p>该漏洞与配置文件ssh_config有关，攻击者可以修改配置文件中的ProxyCommand、LocalCommand、Match exec相关命令，通过%h、%u或类似的扩展标记引用主机名或用户名，在建立SSH连接时，注入恶意shell字符进行命令注入攻击。</p>
<ul>
<li>影响范围：</li>
</ul>
<p>OpenSSH &lt; 9.6</p>
</blockquote>
<h1 id="前述" tabindex="-1"><a class="header-anchor" href="#前述" aria-hidden="true">#</a> 前述</h1>
<blockquote>
<p>OpenSSH（OpenBSD Secure Shell）是OpenBSD计划组的一套用于安全访问远程计算机的连接工具。该工具是SSH协议的开源实现，支持对所有的传输进行加密，可有效阻止窃听、连接劫持以及其他网络级的攻击。 OpenSSH 8.9版本至9.6之前版本存在安全漏洞，该漏洞源于将智能卡密钥添加到ssh-agent，会导致忽略每次转发的目标约束。<br>
注：此操作步骤同样适用于Red Hat系所有 9.x 服务器系统。</p>
</blockquote>
<font color=red>注意事项：</font><blockquote>
<p>在升级之前，建议打开多个SSH终端连接，并安装telnet服务器，确保在SSH服务器升级异常时，可以通过telnet服务器远程连接，进行紧急问题修复处理。<br>
在升级前一定要备份原有的配置文件，以防出现意外情况。</p>
</blockquote>
<h1 id="此文升级是基于9-3p1升级9-6p1" tabindex="-1"><a class="header-anchor" href="#此文升级是基于9-3p1升级9-6p1" aria-hidden="true">#</a> 此文升级是基于9.3p1升级9.6p1</h1>
<h2 id="备份openssh9-3p1的配置文件" tabindex="-1"><a class="header-anchor" href="#备份openssh9-3p1的配置文件" aria-hidden="true">#</a> 备份openssh9.3p1的配置文件</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mv /usr/sbin/sshd /usr/sbin/sshd-9.3p1</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mv /usr/bin/ssh /usr/bin/ssh-9.3p1</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mv /usr/bin/ssh-keygen /usr/bin/ssh-keygen-9.3p1</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mv /etc/init.d/sshd /etc/init.d/sshd-9.3p1</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mv /etc/pam.d/sshd.pam /etc/pam.d/sshd.pam-9.3p1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>如果不需要备份的这些配置可以在升级完成之后确认没有问题再将其删除。</p>
</blockquote>
<h2 id="下载-openssh9-6p1-的安装包" tabindex="-1"><a class="header-anchor" href="#下载-openssh9-6p1-的安装包" aria-hidden="true">#</a> 下载 openssh9.6p1 的安装包：</h2>
<p>OpenSSH官网：<a href="https://cdn.openbsd.org/pub/OpenBSD/OpenSSH/portable/" target="_blank" rel="noopener noreferrer">下载官网<ExternalLinkIcon/></a></p>
<p>或者是使用我提供的离线包：<a href="https://download.csdn.net/download/liu_chen_yang/88882202" target="_blank" rel="noopener noreferrer">openssh7.4p1 升级到 openssh9.6p1 所需的离线包<ExternalLinkIcon/></a></p>
<p><strong>网盘下载：</strong><br>
链接：<a href="https://pan.baidu.com/s/1eLN1mIZc2yW2KEMa03HCLQ?pwd=open" target="_blank" rel="noopener noreferrer"> https://pan.baidu.com/s/1eLN1mIZc2yW2KEMa03HCLQ?pwd=open <ExternalLinkIcon/></a><br>
提取码：open</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">wget</span> https://cdn.openbsd.org/pub/OpenBSD/OpenSSH/portable/openssh-9.6p1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="解压并编译安装openssh9-6p1" tabindex="-1"><a class="header-anchor" href="#解压并编译安装openssh9-6p1" aria-hidden="true">#</a> 解压并编译安装openssh9.6p1</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 将下载的openssh安装包移动到/usr/local下</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mv openssh-9.6p1.tar.gz /usr/local/</span>

<span class="token comment"># 进入/usr/local/目录解压openssh9.4</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cd /usr/local/</span>
<span class="token punctuation">[</span>root@localhost local<span class="token punctuation">]</span><span class="token comment"># tar xf openssh-9.6p1.tar.gz</span>

<span class="token comment"># 进入openssh目录</span>
<span class="token punctuation">[</span>root@localhost local<span class="token punctuation">]</span><span class="token comment"># cd openssh-9.6p1</span>

<span class="token comment"># 编译安装</span>
<span class="token punctuation">[</span>root@localhost openssh-9.6p1<span class="token punctuation">]</span><span class="token comment"># CCFLAGS="-I/usr/local/include" \</span>
<span class="token assign-left variable">LDFLAGS</span><span class="token operator">=</span><span class="token string">"-L/usr/local/lib64"</span> <span class="token punctuation">\</span>
./configure <span class="token punctuation">\</span>
<span class="token parameter variable">--sysconfdir</span><span class="token operator">=</span>/etc/ssh <span class="token punctuation">\</span>
--with-zlib <span class="token punctuation">\</span>
--with-ssl-dir<span class="token operator">=</span>/usr/local/openssl

<span class="token punctuation">[</span>root@localhost openssh-9.6p1<span class="token punctuation">]</span><span class="token comment"># make -j 4</span>
<span class="token punctuation">[</span>root@localhost openssh-9.6p1<span class="token punctuation">]</span><span class="token comment"># make install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="授权" tabindex="-1"><a class="header-anchor" href="#授权" aria-hidden="true">#</a> 授权</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost openssh-9.6p1<span class="token punctuation">]</span><span class="token comment"># chmod 600 /etc/ssh/*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="复制配置文件" tabindex="-1"><a class="header-anchor" href="#复制配置文件" aria-hidden="true">#</a> 复制配置文件</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost openssh-9.6p1<span class="token punctuation">]</span><span class="token comment"># cp -rf /usr/local/sbin/sshd /usr/sbin/sshd</span>
<span class="token punctuation">[</span>root@localhost openssh-9.6p1<span class="token punctuation">]</span><span class="token comment"># cp -rf /usr/local/bin/ssh /usr/bin/ssh</span>
<span class="token punctuation">[</span>root@localhost openssh-9.6p1<span class="token punctuation">]</span><span class="token comment"># cp -rf /usr/local/bin/ssh-keygen /usr/bin/ssh-keygen</span>
<span class="token punctuation">[</span>root@localhost openssh-9.6p1<span class="token punctuation">]</span><span class="token comment"># cp -ar /usr/local/openssh-9.6p1/contrib/redhat/sshd.init /etc/init.d/sshd</span>
<span class="token punctuation">[</span>root@localhost openssh-9.6p1<span class="token punctuation">]</span><span class="token comment"># cp -ar /usr/local/openssh-9.6p1/contrib/redhat/sshd.pam /etc/pam.d/sshd.pam</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="给sshd授予权限" tabindex="-1"><a class="header-anchor" href="#给sshd授予权限" aria-hidden="true">#</a> 给sshd授予权限</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code> <span class="token function">chmod</span> <span class="token number">755</span> /etc/init.d/sshd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="启用sshd-生成服务配置文件-并重启服务" tabindex="-1"><a class="header-anchor" href="#启用sshd-生成服务配置文件-并重启服务" aria-hidden="true">#</a> 启用sshd，生成服务配置文件，并重启服务</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 启用sshd，生成服务配置文件</span>
<span class="token punctuation">[</span>root@localhost openssh-9.6p1<span class="token punctuation">]</span><span class="token comment"># systemctl enable sshd</span>
sshd.service is not a native service, redirecting to /sbin/chkconfig.
Executing /sbin/chkconfig sshd on

<span class="token comment"># 重启服务</span>
<span class="token punctuation">[</span>root@localhost openssh-9.6p1<span class="token punctuation">]</span><span class="token comment"># systemctl restart sshd</span>
<span class="token comment"># 查看服务状态</span>
<span class="token punctuation">[</span>root@localhost openssh-9.6p1<span class="token punctuation">]</span><span class="token comment"># systemctl status sshd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证升级是否成功" tabindex="-1"><a class="header-anchor" href="#验证升级是否成功" aria-hidden="true">#</a> 验证升级是否成功</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost openssh-9.6p1<span class="token punctuation">]</span><span class="token comment">#  ssh -V</span>
OpenSSH_9.6p1, OpenSSL <span class="token number">1.1</span>.1t  <span class="token number">7</span> Feb <span class="token number">2023</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/direct/fde1091f9de345f3b05c23600fcf1c5f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="相关专栏" tabindex="-1"><a class="header-anchor" href="#相关专栏" aria-hidden="true">#</a> 相关专栏</h1>
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
<h1 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章" aria-hidden="true">#</a> 相关文章</h1>
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


