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
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/855c9bc0e2ec444192e8cf5c5e1a8229.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="安装mariadb" tabindex="-1"><a class="header-anchor" href="#安装mariadb"><span>安装mariadb</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#安装mariadb</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mariadb</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\*</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#启动数据库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mariadb</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#设置开机自启</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mariadb</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看数据库是否启动（有进程则启动）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">netstat</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -anput</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 3306</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要修改端口可在<code v-pre>/etc/my.cnf</code>中的<code v-pre>[mysqld]</code>下一行加一个<code v-pre>port=想要的端口</code>，然后重启服务，查看端口即可；</p>
<h2 id="初始化mariadb" tabindex="-1"><a class="header-anchor" href="#初始化mariadb"><span>初始化mariadb</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#数据库初始化操作（设置密码）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mysql_secure_installation</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>提示：如果回车没有反应，先检查mariadb是否启动。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/7acba896caf44af2b9202d7a3b26db84.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="测试数据库连接并开启远程登陆" tabindex="-1"><a class="header-anchor" href="#测试数据库连接并开启远程登陆"><span>测试数据库连接并开启远程登陆</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#进入mysql数据库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -uroot</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p密码</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#设置数据库远程连接，用于使用外部软件链接数据库【Navicat、SQLyog】</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grant</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> all</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> privileges</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  on</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> *</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> root@'%'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> identified</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> by</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "123123"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#刷新权限</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">flush</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> privileges</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就可以在远程链接数据库了；</p>
<h2 id="测试本地客户端连接-远程连接" tabindex="-1"><a class="header-anchor" href="#测试本地客户端连接-远程连接"><span>测试本地客户端连接（远程连接）</span></a></h2>
<p>开放远程登录这时候我们就可以用<code v-pre>navicat、sqlyog</code>等链接工具来连接数据库了，端口3306；自己可以测试一下，如果是直接在linux中用就不用测试了。</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/b4b2ab1ac57c4b0fa8af2f7f39827c69.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/91efe871b6474deda61743f82c5f1af8.png" alt="" loading="lazy"></p>
<p>这样就链接成功了，就可以在里面操作增删改查库了。</p>
<p>当然还有一种测试远程登陆方案；前提是必须可以ping通要访问某台数据库的ip；可以使用：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -h</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> IP</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -P端口</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -u用户名</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p密码</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">例如：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -h</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 172.16.10.10</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -P3306</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -uroot</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p123123</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<blockquote>
<p>现在centos7安装mariadb就完成了，本地客户端连接centos7中的mariadb服务端也是成功的。</p>
</blockquote>
<h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章"><span>相关文章：</span></a></h2>
<table>
<thead>
<tr>
<th>文章标题</th>
<th>文章地址</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/131936739" target="_blank" rel="noopener noreferrer">基于Linux对MySQL数据库的安全加固指南（超实用）</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/131936739" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/131936739</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/124930789" target="_blank" rel="noopener noreferrer">Centos7安装Mysql5.7（超详细版）</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/124930789" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/124930789</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/132077172" target="_blank" rel="noopener noreferrer">【Linux】Centos安装mariadb并授权远程登陆</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/132077172" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/132077172</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/126288434" target="_blank" rel="noopener noreferrer">【云原生】Docker之创建并进入mysql容器</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/126288434" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/126288434</a></td>
</tr>
</tbody>
</table>
</div></template>


