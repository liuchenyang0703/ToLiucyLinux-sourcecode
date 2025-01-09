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
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/306574aa33344995bc7dca1f2a0aa5ba.jpeg" alt="IMG_202307267457_jpg.jpg" tabindex="0" loading="lazy"><figcaption>IMG_202307267457_jpg.jpg</figcaption></figure>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>MySQL数据库是业务系统中常用的关系型数据库，但是由于其广泛使用，也成为安全攻击的目标。因此，数据库安全加固至关重要。下面将为大家提供一份基于Linux的MySQL数据库安全加固指南，帮助大家保护自己及公司的数据库免受潜在的安全威胁。</p>
<p>常见的MySQL数据库攻击方式包括SQL注入，暴力破解和拒绝服务攻击。以下是一些简单的加固方法：</p>
<blockquote>
<ul>
<li>1.修改默认端口：MySQL默认端口为3306，容易被攻击者扫描到，建议修改为其他端口。</li>
<li>2.安装防火墙：通过配置防火墙，可以控制数据库的访问权限，并防止恶意请求。</li>
<li>3.强化密码：使用强密码并定期更新。避免使用简单的密码，比如123456和qwerty等。强密码包括：（复杂密码应包括大小写字母、数字和特殊字符），可参考此文章随机生成密码：<a href="https://blog.csdn.net/liu_chen_yang/article/details/129922682" target="_blank" rel="noopener noreferrer">【Linux】Centos7 随机生成密码<ExternalLinkIcon/></a></li>
<li>4.删除无用的账户：删除不必要的账户以减少攻击面。</li>
<li>5.开启SSL/TLS连接：开启MySQL的ssl选项，启用加密传输可以提高安全性。</li>
<li>6.控制访问权限：控制应用程序对MySQL的操作权限，限制只能读取和操作必要的表、字段和行。</li>
<li>7.开启日志：开启MySQL的日志功能，记录所有的查询操作，以便后期审查和追踪攻击来源。</li>
<li>8.定期备份数据，并将备份数据存储在安全的位置。备份是防止数据丢失和恢复数据的重要手段。这里推荐一份定时定期备份数据的脚本：<a href="https://download.csdn.net/download/liu_chen_yang/87776124?spm=1001.2014.3001.5503" target="_blank" rel="noopener noreferrer">mysql数据库定时备份脚本+定时删除 <ExternalLinkIcon/></a>。</li>
<li>9.禁用root远程登陆，启用访问控制： 在MySQL配置文件中启用访问控制，只允许特定的IP地址或主机名访问数据库。这样可以防止未授权的访问尝试。</li>
<li>10.监控和警报： 设置数据库监控工具和警报系统，及时发现和响应潜在的安全事件和异常活动。</li>
</ul>
</blockquote>
<p>除了以上措施，还有一些其他的技巧可以帮助加强MySQL数据库的安全性。例如，使用双因素身份验证，设置入侵检测系统进行实时监控。</p>
<p>总之，MySQL数据库的安全加固是必要的，可以在攻击者趁虚而入之前有效地减少数据库安全风险。</p>
<p>下面给大家讲解一些实例吧！</p>
<h2 id="数据库加固实例" tabindex="-1"><a class="header-anchor" href="#数据库加固实例" aria-hidden="true">#</a> 数据库加固实例</h2>
<h2 id="_1、修改mysql默认端口" tabindex="-1"><a class="header-anchor" href="#_1、修改mysql默认端口" aria-hidden="true">#</a> 1、修改mysql默认端口</h2>
<blockquote>
<p>在配置文件中修改端口，配置文件名为：“my.cnf”在服务器中的/etc/下；</p>
</blockquote>
<p>  如果使用的是容器的方式部署的，可以修改一下创建容器时对外开放的端口，具体容器修改端口可参考：<a href="https://liucy.blog.csdn.net/article/details/124511738" target="_blank" rel="noopener noreferrer">docker修改容器的端口、容器名、映射地址......<ExternalLinkIcon/></a></p>
<p>来看看容器外部署的数据库如何修改；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> /etc/my.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>找到port，注意<code v-pre>my.cnf</code>可能会有两个port，一个是<code v-pre>[client]</code>下的，一个是<code v-pre>[mysqld]</code>下的，修改<code v-pre>[mysqld]	</code>下的port即可，client下的也可以修改，主要是<code v-pre>[mysqld]</code>下的生效；<br>
修改完重启数据库，有一点如果访问不到，可以先查看端口有没有起来，如果起来了，就检查防火墙，如果没起来，就去看数据库启动报错或日志；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/81c9b7abbf784b59b6835c3e03d171eb.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>修改完重启一下服务即可生效。</p>
<h2 id="_2、安装配置防火墙" tabindex="-1"><a class="header-anchor" href="#_2、安装配置防火墙" aria-hidden="true">#</a> 2、安装配置防火墙</h2>
<p>使用centos中自带的<code v-pre>firewall-cmd</code>来管理防火墙即可；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#开启防火墙</span>
systemctl restart firewalld

<span class="token comment">#开放数据库的端口</span>
<span class="token comment">#开放3306端口、加载防火墙配置、查看端口是否开放</span>
firewall-cmd <span class="token parameter variable">--permanent</span> --add-port<span class="token operator">=</span><span class="token number">3306</span>/tcp
firewall-cmd <span class="token parameter variable">--reload</span>
firewall-cmd --list-ports <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">3306</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、强化密码" tabindex="-1"><a class="header-anchor" href="#_3、强化密码" aria-hidden="true">#</a> 3、强化密码</h2>
<p>可参考此文章随机生成密码：<a href="https://blog.csdn.net/liu_chen_yang/article/details/129922682" target="_blank" rel="noopener noreferrer">【Linux】Centos7 随机生成密码<ExternalLinkIcon/></a><br>
这样安全性比较高，如果想要自己设置当然也可以；建议使用强密码并定期更新。避免使用简单的密码，比如123456和qwerty等。强密码包括：（复杂密码应包括大小写字母、数字和特殊字符）。</p>
<h2 id="_4、开启日志" tabindex="-1"><a class="header-anchor" href="#_4、开启日志" aria-hidden="true">#</a> 4、开启日志</h2>
<p>开启log-bin日志，可在配置文件中开启；<code v-pre>/etc/my.cnf</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>log-bin<span class="token operator">=</span>mysql-bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/e30be3e33ff6489e9a12acae014e801d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>开启完，重启服务生效；</p>
<hr>
<p>mariadb日志一般会存储在 <code v-pre>/var/lib/mysql</code> 下；<br>
容器的方式部署的mysql，日志数据一般会存在 <code v-pre>/var/lib/mysql/data/</code> 下。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/27aed8f281df4275bc1ba77c7750a898.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_5、定期备份数据" tabindex="-1"><a class="header-anchor" href="#_5、定期备份数据" aria-hidden="true">#</a> 5、定期备份数据</h2>
<blockquote>
<p>这里推荐一个定期备份的脚本：<a href="https://download.csdn.net/download/liu_chen_yang/87776124?spm=1001.2014.3001.5503" target="_blank" rel="noopener noreferrer">mysql数据库定时备份脚本+定时删除 <ExternalLinkIcon/></a></p>
</blockquote>
<blockquote>
<p>建议放在数据库数据存储目录下（对于健忘的人来说比较好找），当然也可以自己找一个隐蔽安全的地方放起来（如果怕忘记，可以计一个笔记），然后设置定时任务，定时全备；</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>定时备份，需要写周期性计划任务：
<span class="token comment">#周期性计划任务（每天完备一次）</span>
<span class="token number">0</span> <span class="token number">0</span> */1 * * root /bin/sh 脚本路径/back.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>脚本可修改的内容：</strong><br>
1、数据库信息：用户名、密码、ip、端口<br>
2、备份的路径及日志文件名<br>
3、脚本保留的天数<br>
4、要备份的库（注意里面的说明，如需备份多个库，可以用到数组，如只备份一个库，可直接使用命令备份即可，总之，注意里面的说明）<br>
5、备份库的文件名和打包备份的文件名 6、日志文件内打印的内容<br><br>
日志文件的内容展示：<br>
--- 创建备份文件: 20230510.sql.tgz<br>
开始:2023年05月10日 16:06:15 结束:2023年05月10日 16:06:20 succ</p>
</blockquote>
<h2 id="_6、控制访问权限" tabindex="-1"><a class="header-anchor" href="#_6、控制访问权限" aria-hidden="true">#</a> 6、控制访问权限</h2>
<blockquote>
<p>说明：<br>
username：你将创建的用户名<br>
host：指定该用户在哪个主机上可以登陆，如果是本地用户可用localhost，如果想让该用户可以从任意远程主机登陆，可以使用通配符%<br>
password：该用户的登陆密码，密码可以为空，如果为空则该用户可以不需要密码登陆服务器</p>
</blockquote>
<ul>
<li>限制访问数据库ip和用户名</li>
</ul>
<blockquote>
<p><strong>开放的ip：</strong><br>
localhost<br>
172.16.11.11<br>
172.16.11.12<br>
172.16.11.13<br>
172.16.11.14</p>
</blockquote>
<p>这时候先不要删除远程登录，可以先在远程连接的第三方工具连接创建普通用户和指定某一个ip，因为linux查看用户列表的时候视觉感不是很好，所以等创建完指定ip和用户名，测试完之后，在关闭远程登陆和root登陆。<font color=red>提示：切记要互相可以ping通，才可以，否则设置了要是连不上问题还要找好久。</font></p>
<ul>
<li>使用<code v-pre>navicat</code>连接到数据库；</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#进入mysql库中</span>
use mysql<span class="token punctuation">;</span>

<span class="token comment">#查看当前可以访问到该数据库的用户和权限</span>
<span class="token keyword">select</span> * from user<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到本地和远程都可以连接到该数据库，那么下来我们就给他做限制；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/fbb5e9f4736b47deb8a9d12e5183a26a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="开放单用户及ip测试" tabindex="-1"><a class="header-anchor" href="#开放单用户及ip测试" aria-hidden="true">#</a> 开放单用户及ip测试</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#首先创建一个库，（后面要用到这个库）</span>
create database cs<span class="token punctuation">;</span>

<span class="token comment">#创建一个用户</span>
create user cs@<span class="token string">'localhost'</span> identified by <span class="token string">'123123'</span><span class="token punctuation">;</span>
<span class="token comment">#给该用户设置权限（只给cs这个库的所有权限）</span>
grant all privileges on cs.* to <span class="token string">'cs'</span>@<span class="token string">'localhost'</span> identified by <span class="token string">'123123'</span><span class="token punctuation">;</span>
<span class="token comment">#其实他两可合并为一条命令，那就是直接执行第二条就行；</span>
<span class="token comment">#PROCESS权限，可以执行解释执行计划操作的权限（需要额外授予表上的select权限）。</span>
<span class="token comment">#授权PROCESS权限</span>
grant process on *.* to <span class="token string">'cs'</span>@<span class="token string">'localhost'</span><span class="token punctuation">;</span>
<span class="token comment">#刷新权限</span>
flush privileges<span class="token punctuation">;</span>

<span class="token comment">#查看用户权限(只可以用root用户查看)</span>
<span class="token comment">#该命令可以在linux上执行查看，也可以在其他工具上查看</span>
show grants <span class="token keyword">for</span> <span class="token string">'cs'</span>@<span class="token string">'localhost'</span><span class="token punctuation">;</span>
<span class="token comment">#或者（该命令仅限于linux上查看）</span>
<span class="token keyword">select</span> * from mysql.user where <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">"cs"</span> <span class="token punctuation">\</span>G<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>查看权限</li>
</ul>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/d148d81701984c51a691d01cbc95a6ba.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/af5d712ab35346b79abf73a01eb5264c.png" alt="" loading="lazy"></p>
<ul>
<li>然后看mysql/user表，可以看到多了一个cs用户，只可以本地访问数据库，然后测试登陆；</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/c7489a5048f140a4bf02b499e61e227a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mysql <span class="token parameter variable">-ucs</span> <span class="token parameter variable">-p123123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/930327c0592f41c28cb2442d4dc6e7a7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>成功登陆，并且有<code v-pre>cs</code>这个库的所有权限；<br>
而用第三方登陆，就登陆不上，比如我们用<code v-pre>navicat</code>连接测试；<br>
很显然，登陆不上的这是；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/4da55b74ee2545e89d44f221b4394b94.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="批量开放用户及ip测试" tabindex="-1"><a class="header-anchor" href="#批量开放用户及ip测试" aria-hidden="true">#</a> 批量开放用户及ip测试</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#批量创建用户</span>
create user cs@<span class="token string">'172.16.11.11'</span>,cs@<span class="token string">'172.16.11.12'</span>,cs@<span class="token string">'172.16.11.13'</span>,cs@<span class="token string">'172.16.11.14'</span> identified by <span class="token string">'123123'</span><span class="token punctuation">;</span>
<span class="token comment">#给批量用户设置权限（只给cs这个库的所有权限）</span>
grant all privileges on cs.* to cs@<span class="token string">'172.16.11.11'</span>,cs@<span class="token string">'172.16.11.12'</span>,cs@<span class="token string">'172.16.11.13'</span>,cs@<span class="token string">'172.16.11.14'</span> identified by <span class="token string">'123123'</span><span class="token punctuation">;</span>
<span class="token comment">#其实他两可合并为一条命令，那就是直接执行第二条就行；</span>
<span class="token comment">#PROCESS权限，可以执行解释执行计划操作的权限（需要额外授予表上的select权限）。</span>
<span class="token comment">#授权PROCESS权限</span>
grant process on *.* to cs@<span class="token string">'172.16.11.11'</span>,cs@<span class="token string">'172.16.11.12'</span>,cs@<span class="token string">'172.16.11.13'</span>,cs@<span class="token string">'172.16.11.14'</span><span class="token punctuation">;</span>
<span class="token comment">#刷新权限</span>
flush privileges<span class="token punctuation">;</span>

<span class="token comment">#查看用户权限(只可以用root用户查看)</span>
<span class="token comment">#该命令可以在linux上执行查看，也可以在其他工具上查看（此命令只可每次查一个）</span>
show grants <span class="token keyword">for</span> <span class="token string">'cs'</span>@<span class="token string">'172.16.11.11'</span><span class="token punctuation">;</span>
<span class="token comment">#或者（该命令仅限于linux上查看，可以查看所有的cs用户，并输出所有信息）</span>
<span class="token keyword">select</span> * from mysql.user where <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">"cs"</span> <span class="token punctuation">\</span>G<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/3f51517d5db34f408715499c40ff01bc.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>然后看mysql/user表，可以看到多了一个好几个cs用户，但是host不一样，也就是可以访问的ip主机不一样，只有上面显示的这几个访问数据库，然后测试登陆；</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/5f66b7516f144bd38e7f162a505df232.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>也可以使用mysql命令远程登陆测试，如果你在其他服务器上想访问本地服务器的数据库，前提是必须可以ping通要访问某台数据库的ip，可以使用：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mysql <span class="token parameter variable">-h</span> IP -P端口 -u用户名 -p密码

例如：
mysql <span class="token parameter variable">-h</span> <span class="token number">172.16</span>.10.10 <span class="token parameter variable">-P3306</span> <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p123123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="禁止root用户远程登录" tabindex="-1"><a class="header-anchor" href="#禁止root用户远程登录" aria-hidden="true">#</a> 禁止root用户远程登录</h3>
<blockquote>
<p>禁止root用户远程登录（切记要留一条root使用localhost登陆的，如果没有就不要禁用了，因为禁用了你就真的在哪都使用不了root了，就需要重新安装了）</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>delete from user where <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">'root'</span> and <span class="token assign-left variable">host</span><span class="token operator">=</span><span class="token string">'%'</span><span class="token punctuation">;</span>
<span class="token comment">#刷新权限</span>
flush privileges<span class="token punctuation">;</span>

<span class="token comment">#可以再次查询一下是否存在</span>
<span class="token keyword">select</span> * from mysql.user where <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">"root"</span> <span class="token punctuation">\</span>G<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到只剩一个root@localhost了，那么就成功禁用的root远程登陆；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/7d4782bcf55345af97cb0fda8641cfee.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_6-1-附加" tabindex="-1"><a class="header-anchor" href="#_6-1-附加" aria-hidden="true">#</a> 6.1 附加</h2>
<h3 id="删除用户" tabindex="-1"><a class="header-anchor" href="#删除用户" aria-hidden="true">#</a> 删除用户</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>drop user cs@<span class="token string">'172.16.11.11'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="批量删除用户" tabindex="-1"><a class="header-anchor" href="#批量删除用户" aria-hidden="true">#</a> 批量删除用户</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>drop user cs@<span class="token string">'172.16.11.12'</span>,cs@<span class="token string">'172.16.11.13'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="修改root密码-为远程登陆-localhost为本机登录" tabindex="-1"><a class="header-anchor" href="#修改root密码-为远程登陆-localhost为本机登录" aria-hidden="true">#</a> 修改root密码：（%为远程登陆，localhost为本机登录）</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>alter user <span class="token string">'root'</span>@<span class="token string">'localhost'</span> identified by <span class="token string">'要修改的密码'</span><span class="token punctuation">;</span>
alter user <span class="token string">'root'</span>@<span class="token string">'%'</span> identified by <span class="token string">'要修改的密码'</span><span class="token punctuation">;</span>

<span class="token comment">#刷新权限</span>
flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装mariadb时初始化数据库" tabindex="-1"><a class="header-anchor" href="#安装mariadb时初始化数据库" aria-hidden="true">#</a> 安装mariadb时初始化数据库</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mysql_secure_installation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="开启数据库远程连接" tabindex="-1"><a class="header-anchor" href="#开启数据库远程连接" aria-hidden="true">#</a> 开启数据库远程连接</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>grant all privileges  on *.* to root@<span class="token string">'%'</span> identified by <span class="token string">"123123"</span><span class="token punctuation">;</span>

<span class="token comment">#刷新权限</span>
flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7、监控和警报" tabindex="-1"><a class="header-anchor" href="#_7、监控和警报" aria-hidden="true">#</a> 7、监控和警报</h2>
<p>可以使用<code v-pre>zabbix</code>取关键词告警或者是<code v-pre>Prometheus + Grafana</code>;<br>
推荐文章：</p>
<ul>
<li><a href="https://liucy.blog.csdn.net/article/details/124101253" target="_blank" rel="noopener noreferrer">zabbix添加自定义监控项&amp;告警（邮件）<ExternalLinkIcon/></a></li>
<li><a href="https://liucy.blog.csdn.net/article/details/131049402" target="_blank" rel="noopener noreferrer">【Linux】部署Prometheus + Grafana简介、监控及设置告警详细操作（多种方式安装，亲测无问题）<ExternalLinkIcon/></a></li>
</ul>
<h2 id="本文可参考文献" tabindex="-1"><a class="header-anchor" href="#本文可参考文献" aria-hidden="true">#</a> 本文可参考文献</h2>
<table>
<thead>
<tr>
<th>文章标题</th>
<th>文章地址</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="http://t.csdn.cn/RnMZf" target="_blank" rel="noopener noreferrer">【Linux】Centos7 随机生成密码<ExternalLinkIcon/></a></td>
<td><a href="https://blog.csdn.net/liu_chen_yang/article/details/129922682" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/liu_chen_yang/article/details/129922682<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://download.csdn.net/download/liu_chen_yang/87776124?spm=1001.2014.3001.5503" target="_blank" rel="noopener noreferrer">mysql数据库定时备份脚本+定时删除 <ExternalLinkIcon/></a></td>
<td><a href="https://download.csdn.net/download/liu_chen_yang/87776124?spm=1001.2014.3001.5503" target="_blank" rel="noopener noreferrer">https://download.csdn.net/download/liu_chen_yang/87776124?spm=1001.2014.3001.5503<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/124511738" target="_blank" rel="noopener noreferrer">docker修改容器的端口、容器名、映射地址......<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/124511738" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/124511738<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/124101253" target="_blank" rel="noopener noreferrer">zabbix添加自定义监控项&amp;告警（邮件）<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/124101253" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/124101253<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/131049402" target="_blank" rel="noopener noreferrer">【Linux】部署Prometheus + Grafana简介、监控及设置告警详细操作（多种方式安装，亲测无问题）<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/131049402" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/131049402<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://download.csdn.net/download/liu_chen_yang/87769961?spm=1001.2014.3001.5503" target="_blank" rel="noopener noreferrer">mysql、mysqldump命令离线包（可直接使用命令）<ExternalLinkIcon/></a></td>
<td><a href="https://download.csdn.net/download/liu_chen_yang/87769961?spm=1001.2014.3001.5503" target="_blank" rel="noopener noreferrer">https://download.csdn.net/download/liu_chen_yang/87769961?spm=1001.2014.3001.5503<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/132077172" target="_blank" rel="noopener noreferrer">【Linux】Centos安装mariadb并授权远程登陆<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/132077172" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/132077172<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章" aria-hidden="true">#</a> 相关文章：</h2>
<table>
<thead>
<tr>
<th>文章标题</th>
<th>文章地址</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/131936739" target="_blank" rel="noopener noreferrer">基于Linux对MySQL数据库的安全加固指南（超实用）<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/131936739" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/131936739<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/124930789" target="_blank" rel="noopener noreferrer">Centos7安装Mysql5.7（超详细版）<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/124930789" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/124930789<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/132077172" target="_blank" rel="noopener noreferrer">【Linux】Centos安装mariadb并授权远程登陆<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/132077172" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/132077172<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/126288434" target="_blank" rel="noopener noreferrer">【云原生】Docker之创建并进入mysql容器<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/126288434" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/126288434<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
</div></template>


