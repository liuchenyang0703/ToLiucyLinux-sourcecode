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
<p>@[toc]</p>
<h1 id="_1、停止zabbix-server-zabbix-agent-httpd-rh-php72-php-fpm" tabindex="-1"><a class="header-anchor" href="#_1、停止zabbix-server-zabbix-agent-httpd-rh-php72-php-fpm" aria-hidden="true">#</a> 1、停止zabbix-server zabbix-agent httpd rh-php72-php-fpm</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl stop zabbix-server zabbix-agent httpd rh-php72-php-fpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_2、卸载zabbix服务" tabindex="-1"><a class="header-anchor" href="#_2、卸载zabbix服务" aria-hidden="true">#</a> 2、卸载zabbix服务</h1>
<h2 id="_2-1、查找zabbix所有的服务" tabindex="-1"><a class="header-anchor" href="#_2-1、查找zabbix所有的服务" aria-hidden="true">#</a> 2.1、查找zabbix所有的服务</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> zabbix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/2b23e98d7e2d4843a3f561586c3e9696.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>我们可以看到有好几个，可以依次卸载；</p>
<h2 id="_2-2、依次卸载zabbix服务" tabindex="-1"><a class="header-anchor" href="#_2-2、依次卸载zabbix服务" aria-hidden="true">#</a> 2.2、依次卸载zabbix服务</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> remove zabbix-agent-5.0.25-1.el7.x86_64
yum <span class="token parameter variable">-y</span> remove zabbix-web-mysql-scl-5.0.25-1.el7.noarch
yum <span class="token parameter variable">-y</span> remove zabbix-release-5.0-1.el7.noarch
yum <span class="token parameter variable">-y</span> remove zabbix-server-mysql-5.0.25-1.el7.x86_64
yum <span class="token parameter variable">-y</span> remove zabbix-web-5.0.25-1.el7.noarch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>卸载完成之后再次查看一下；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> zabbix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/1e25b745c8634ab39e503b93b76af304.png" alt="在这里插入图片描述" loading="lazy"><br>
这下已经没有了，就可以了；</p>
<h2 id="_2-3、删除zabbix所有的配置以及相关文件" tabindex="-1"><a class="header-anchor" href="#_2-3、删除zabbix所有的配置以及相关文件" aria-hidden="true">#</a> 2.3、删除zabbix所有的配置以及相关文件</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#find查找zabbix</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find / -name zabbix</span>

/etc/selinux/targeted/active/modules/100/zabbix
/etc/zabbix
/var/lib/yum/repos/x86_64/7/zabbix
/var/lib/mysql/zabbix
/var/log/zabbix
/var/cache/yum/x86_64/7/zabbix
/usr/lib/zabbix

<span class="token comment">#直接全部删除</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/selinux/targeted/active/modules/100/zabbix
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/zabbix
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/yum/repos/x86_64/7/zabbix
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/mysql/zabbix
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/log/zabbix 
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/cache/yum/x86_64/7/zabbix
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/lib/zabbix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后检查是否删除干净；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">find</span> / <span class="token parameter variable">-name</span> zabbix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/d8a9c3a1770541acbd8866105c4fe38d.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>可以看到已经删除干净了；</p>
<p>需要更干净一点的话，可以利用模糊搜索；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">find</span> / <span class="token parameter variable">-name</span> <span class="token string">"*zabbix*"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/5a6cbbb21c524a0bb9a7e6722d99daad.png" alt="在这里插入图片描述" loading="lazy"><br>
还可以查到这么多，最后全部删除就可以；<br>
<img src="https://img-blog.csdnimg.cn/e71348c637f04d5ab129c17657783147.png" alt="在这里插入图片描述" loading="lazy"><br>
最后在次查找一下就可以了，这样就彻底的删除干净了。</p>
<h1 id="_3、卸载mysql" tabindex="-1"><a class="header-anchor" href="#_3、卸载mysql" aria-hidden="true">#</a> 3、卸载mysql</h1>
<h2 id="_3-1、卸载mariadb" tabindex="-1"><a class="header-anchor" href="#_3-1、卸载mariadb" aria-hidden="true">#</a> 3.1、卸载mariadb</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查找mariadb</span>
<span class="token function">rpm</span> <span class="token parameter variable">-qa</span> mariadb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/cc1f607c79424d8586b3cefae8b8d88a.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#卸载即可</span>
yum <span class="token parameter variable">-y</span> remove mariadb-5.5.68-1.el7.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-2、删除mysql相关的配置文件" tabindex="-1"><a class="header-anchor" href="#_3-2、删除mysql相关的配置文件" aria-hidden="true">#</a> 3.2、删除mysql相关的配置文件</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查找mysql相关的文件</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find / -name mysql</span>

/etc/selinux/targeted/active/modules/100/mysql
/var/lib/mysql
/var/lib/mysql/mysql
/usr/lib64/mysql
/usr/lib64/perl5/vendor_perl/auto/DBD/mysql
/usr/lib64/perl5/vendor_perl/DBD/mysql
/usr/share/mysql

<span class="token comment">#直接全部删除</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/selinux/targeted/active/modules/100/mysql
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/mysql
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/mysql/mysql
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/lib64/mysql
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/lib64/perl5/vendor_perl/auto/DBD/mysql
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/lib64/perl5/vendor_perl/DBD/mysql
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/share/mysql/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后检查是否删除干净；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">find</span> / <span class="token parameter variable">-name</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/9a9f3bf8cd294ba49ac268db5ee6b3eb.png" alt="在这里插入图片描述" loading="lazy"><br>
可以看到已经删除干净了；</p>
<h1 id="_4、卸载http服务" tabindex="-1"><a class="header-anchor" href="#_4、卸载http服务" aria-hidden="true">#</a> 4、卸载http服务</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>查找httpd服务
<span class="token function">rpm</span> <span class="token parameter variable">-qa</span> httpd

<span class="token comment">#卸载httpd服务</span>
yum <span class="token parameter variable">-y</span> remove httpd-2.4.6-97.el7.centos.5.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5、卸载rh-php72-php-fpm服务" tabindex="-1"><a class="header-anchor" href="#_5、卸载rh-php72-php-fpm服务" aria-hidden="true">#</a> 5、卸载rh-php72-php-fpm服务</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查找rh-php72-php-fpm安装包</span>
<span class="token function">rpm</span> <span class="token parameter variable">-qa</span> rh-php72-php-fpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/605bc0e3798f40588240dc0a0676e2d1.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#进行卸载就可以</span>
yum <span class="token parameter variable">-y</span> remove rh-php72-php-fpm-7.2.24-1.el7.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就全部卸载干净了。</p>
</div></template>


