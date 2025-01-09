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
<h1 id="前述" tabindex="-1"><a class="header-anchor" href="#前述" aria-hidden="true">#</a> 前述</h1>
<blockquote>
<p>我们知道，我们日常通过vnc来远程管理linux图形界面，今天分享一工具Xrdp，它是一个开源工具，允许用户通过Windows RDP访问Linux远程桌面。 除了Windows RDP之外，xrdp工具还接受来自其他RDP客户端的连接，如FreeRDP，rdesktop和NeutrinoRDP。这个工具也可以很有效的解决windows远程桌面连接服务器连不上的问题。</p>
</blockquote>
<h1 id="操作环境说明" tabindex="-1"><a class="header-anchor" href="#操作环境说明" aria-hidden="true">#</a> 操作环境说明：</h1>
<table>
<thead>
<tr>
<th>系统</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>Linux操作系统</td>
<td>centos7.9</td>
</tr>
<tr>
<td>Windows客户端操作系统</td>
<td>win10</td>
</tr>
<tr>
<td>xrdp软件版本</td>
<td>xrdp-0.9.19-1.el7.x86_64</td>
</tr>
</tbody>
</table>
<h1 id="远程报错" tabindex="-1"><a class="header-anchor" href="#远程报错" aria-hidden="true">#</a> 远程报错</h1>
<figure><img src="https://img-blog.csdnimg.cn/aa8923c29fe245a9b82a775927b20382.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="一、安装gnome默认桌面环境" tabindex="-1"><a class="header-anchor" href="#一、安装gnome默认桌面环境" aria-hidden="true">#</a> 一、安装GNOME默认桌面环境</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum groupinstall <span class="token parameter variable">-y</span> <span class="token string">'GNOME Desktop'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个过程有点漫长，可以嗑嗑瓜子等等，大概10-20分钟吧。</p>
<p>安装完GNOME默认桌面环境之后，再试一下连接，如果可以连接上就ok了，如果还连接不上，就继续下面的操作，安装Xrdp。</p>
<h1 id="二、安装xrdp-xrdp端口为3389" tabindex="-1"><a class="header-anchor" href="#二、安装xrdp-xrdp端口为3389" aria-hidden="true">#</a> 二、安装Xrdp（xrdp端口为3389）</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#更新epel源</span>
yum <span class="token function">install</span> epel-release <span class="token parameter variable">-y</span>
<span class="token comment">#安装xrdp</span>
yum <span class="token function">install</span> xrdp <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>启动Xrdp服务，并设置开机启动</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> xrdp <span class="token parameter variable">--now</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>查看Xrdp的启动状态</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl status xrdp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>running为启动状态</p>
<figure><img src="https://img-blog.csdnimg.cn/bc3222a91cac41bbbe8b0a21b1eba3ab.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>再来看一下端口是否启动；（3389）</p>
<figure><img src="https://img-blog.csdnimg.cn/d15452951c3b4d9cb7d6c536717666cf.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>已经启动没问题。</p>
<h2 id="_1-配置xrdp" tabindex="-1"><a class="header-anchor" href="#_1-配置xrdp" aria-hidden="true">#</a> 1 配置Xrdp</h2>
<p>设置Xrdp使用GNONE，编辑配置文件，添加如下行</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">"exec gnome-session"</span> <span class="token operator">>></span> /etc/xrdp/xrdp.ini
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>重启Xrdp服务</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl restart xrdp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-配置防火墙-如果启用了防火墙的话-放行3389端口" tabindex="-1"><a class="header-anchor" href="#_2-配置防火墙-如果启用了防火墙的话-放行3389端口" aria-hidden="true">#</a> 2 配置防火墙（如果启用了防火墙的话），放行3389端口</h2>
<blockquote>
<p>默认情况下，Xrdp监听3389端口，如果使用的是云服务器（如阿里云、华为云），可以通过安全组规则放行3389端口。</p>
</blockquote>
<h1 id="三、测试验证" tabindex="-1"><a class="header-anchor" href="#三、测试验证" aria-hidden="true">#</a> 三、测试验证</h1>
<p>使用windows自带的 远程桌面 ，输入自己的ip和用户名</p>
<figure><img src="https://img-blog.csdnimg.cn/decfe501dea448fa8b23b4c6863f3776.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>点击连接，跳出来这个框，代表现在已经可以连接了，只需要输入以下登陆密码即可。</p>
<figure><img src="https://img-blog.csdnimg.cn/33ea46282c384c908dd61c9ed78b7ed0.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>输入完成之后点击，确定就行；</p>
<figure><img src="https://img-blog.csdnimg.cn/88fa22c0b39b4d228eed623c923ed4dd.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>连接上了，ok，完事了。</p>
<figure><img src="https://img-blog.csdnimg.cn/c041b1f28e6e410d89262c09d54772c2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://img-blog.csdnimg.cn/6ce1f46771464deab0f96a1ea32e45fe.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<hr>
<hr>
<ul>
<li>附加 - 可以看看</li>
</ul>
<p>远程桌面连接出现了内部错误往往是突然发生的，无法追溯到前面的具体操作。主要发生在Windows 10、Windows Server 2008/2012/2016/2019等系统中。远程桌面连接出现了内部错误的原因可能有以下几点：</p>
<p>1.网络问题：网络不稳定、网络延迟或网络拥堵等都可能导致服务器无法正常响应请求，从而引发内部错误。</p>
<p>2.服务器配置问题：服务器的配置不正确，例如端口号错误、防火墙设置不当等，也可能导致内部错误。</p>
<p>3.服务器资源不足：服务器的硬件资源（如CPU、内存、磁盘空间等）不足或过载，可能导致服务器无法处理请求，从而产生内部错误。</p>
<p>4.文件权限问题：文件权限设置不正确，可能导致服务器无法正常读取或写入文件，从而引发内部错误。</p>
<p>5.防火墙屏蔽问题：防火墙作为电脑安全防护的重要程序，有时会阻挡远程桌面连接请求，从而导致远程桌面连接出现了内部错误。</p>
<figure><img src="https://img-blog.csdnimg.cn/direct/b38205635934442e98124070ac151e4e.png#pic_center" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>如果在使用远程桌面连接服务器时，遇到远程桌面出现内部错误的问题，可以使用本教程中提到的几种方法，来解决“远程桌面连接出现了内部错误”的问题。</p>
<p>方法一：</p>
<p>检查网络状况：确保网络连接稳定、无延迟或拥堵现象。可以尝试更换网络环境或者联系网络服务商解决网络问题。</p>
<p>方法二：</p>
<p>检查服务器配置：确保服务器的配置正确，包括端口号、防火墙设置等。可以参考服务器提供商的文档或联系技术支持获取帮助。</p>
<p>方法三：</p>
<p>优化服务器资源使用：根据服务器的硬件资源状况，合理分配资源，避免资源过载或不足。可以通过升级硬件、优化应用程序或调整系统参数等方式实现。</p>
<p>方法四：</p>
<p>检查文件权限设置：确保服务器上文件的权限设置正确，使得应用程序或用户能够正常读取和写入文件。可以通过修改文件权限设置或者使用适当的用户账户来访问文件。</p>
<p>方法五：</p>
<p>更改远程桌面安全性：</p>
<p>1.按“Win + R”打开运行对话框，输入“gpedit.msc”打开本地组策略编辑器。</p>
<p>2.在左侧依次选择：“计算机配置” &gt; “管理模板” &gt; “Windows组件” &gt; “远程桌面服务” &gt; “远程桌面会话主机” &gt; “安全” &gt; “远程（RDP）连接要求使用指定的安全层”。</p>
<p>3.双击打开“远程（RDP）连接要求使用指定的安全层”，在新界面中勾选“已启用”，在安全层中选择“RDP”并点击“确定”。</p>
<p>连接服务器出现内部错误是一个比较常见的问题，解决这个问题需要综合考虑多个方面，包括网络状况、服务器配置、资源使用情况、软件和脚本代码、数据库连接以及文件权限设置等。在实际操作中，可以根据具体情况逐一排查和解决问题，以保障服务器的稳定性和可靠性。同时，建议定期对服务器进行维护和监控，及时发现潜在问题并采取相应的措施加以解决。</p>
</div></template>


