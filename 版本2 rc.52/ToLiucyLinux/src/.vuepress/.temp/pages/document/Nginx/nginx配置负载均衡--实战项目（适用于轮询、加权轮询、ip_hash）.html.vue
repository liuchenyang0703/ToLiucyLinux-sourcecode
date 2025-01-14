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
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161332109.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="两台服务器" tabindex="-1"><a class="header-anchor" href="#两台服务器"><span>两台服务器：</span></a></h2>
<table>
<thead>
<tr>
<th>服务器ip</th>
<th>应用（谁用）</th>
</tr>
</thead>
<tbody>
<tr>
<td>172.16.10.10</td>
<td>线上</td>
</tr>
<tr>
<td>172.16.10.20</td>
<td>研发</td>
</tr>
</tbody>
</table>
<h2 id="业务需求" tabindex="-1"><a class="header-anchor" href="#业务需求"><span>业务需求：</span></a></h2>
<p>有两台服务器，一台供于线上使用（172.16.10.10），一台供于研发使用（172.16.10.20）</p>
<p>如果线上的服务器挂了，需要将所有请求转移到研发的机器上，以确保线上服务正常使用；</p>
<p>正常时间还是线上使用线上的服务器，研发用研发的服务器；只有在线上服务器挂了的时候才会使用备用的研发服务器；</p>
<h2 id="需求实现" tabindex="-1"><a class="header-anchor" href="#需求实现"><span>需求实现：</span></a></h2>
<blockquote>
<p>使用nginx负载均衡来实现；<code v-pre>ip_hash</code>方式</p>
</blockquote>
<p>在nginx服务器配置中添加负载：（设置负载均衡时同台服务器不同端口也可以，不同服务器，同端口也可以）</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    upstream</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> front_server{</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">  #定义一个服务配置front_server</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">            ip_hash</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#表示配置一个用户固定访问一台设备</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">            server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 172.16.10.10:8080</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> weight=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#第一台服务机器 设置权重值1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">            server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 172.16.10.20:8080</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> weight=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#第二台服务机器 设置权重值2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        listen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">       8099</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;	</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#如果有一个服务是本台的那么8080肯定会被占用，这时候我们可以改一个访问端口即可；</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        server_name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  localhost</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">        #charset koi8-r;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">        #access_log  logs/host.access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        location</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">          #  root   html;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">          #  index  index.html index.htm;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		proxy_pass</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> http://front_server</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$request_uri</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		proxy_http_version</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1.1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		proxy_set_header</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Uparade</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $http_upgrade</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		proxy_set_header</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Connection</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Upgrade"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		proxy_set_header</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Host</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $host</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完负载之后，报错保存退出，检测<code v-pre>nginx</code>配置语法是否有误；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#检测nginx配置语法是否有误，前面路径可根据自己安装的目录来写</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/usr/local/nginx/sbin/nginx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -t</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>返回这个有<code v-pre>ok</code>，则nginx配置没有问题；如果有报错会显示几行报错的。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161332468.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>检测没问题之后，重新启动nginx服务</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#重启nginx服务，前面路径可根据自己安装的目录来写</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/usr/local/nginx/sbin/nginx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> reload</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#启动完成，检查是否启动（ps查看服务是否正常启动、netstat查看配置的端口是否正常启动）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ps</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -ef</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nginx</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">netstat</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -anput</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 8099</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#完成之后就可以页面访问了。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>配置好之后，这个只是配置了负载均衡，如果服务有后缀，那么自己在访问负载的<code v-pre>ip:prot</code>的时候在后面加上后缀即可。<font color=blue>例如：172.16.10.10:8099/cs/index/</font></p>
</blockquote>
<p>访问页面，持续监控两台服务的日志输出，测试即可；</p>
<h2 id="负载均衡方式-常用的三种" tabindex="-1"><a class="header-anchor" href="#负载均衡方式-常用的三种"><span>负载均衡方式（常用的三种）：</span></a></h2>
<font color=red>轮询：</font>两台服务器会随机发送请求；<font color=red>加权轮询：</font>两台服务器也都会随机发送请求，但是会有一个权重值，谁的权重值高，接收的请求就会比另一个多；<font color=red>ip_hash：</font>也是会有权重值，谁的权重值越高，请求就会在最高的权重值中，只有当权重值最高的那台服务器挂了，再会去找权重值第二的服务器；（1为最高权重值）<ul>
<li>轮询：</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    upstream</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> front_server{</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">  #定义一个服务配置front_server</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">            server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 172.16.10.10:8080</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#第一台服务机器（两台服务器随机分配请求）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">            server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 172.16.10.20:8080</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#第二台服务机器（两台服务器随机分配请求）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>加权轮询：</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    upstream</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> front_server{</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">  #定义一个服务配置front_server</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">            server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 172.16.10.10:8080</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> weight=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#第一台服务机器，权重值比较高，所以大部分的请求都会在10上；</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">            server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 172.16.10.20:8080</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> weight=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#第二台服务机器，权重值比较低，所以少部分的请求会在20上；</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>ip_hash</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    upstream</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> front_server{</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">  #定义一个服务配置front_server</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">            ip_hash</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">            server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 172.16.10.10:8080</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">            server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 172.16.10.20:8080</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章"><span>相关文章</span></a></h2>
<table>
<thead>
<tr>
<th>文章标题</th>
<th>文章连接</th>
</tr>
</thead>
<tbody>
<tr>
<td>【Linux】nginx基础篇 -- 介绍及yum安装nginx</td>
<td><a href="https://liucy.blog.csdn.net/article/details/133928000" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/133928000</a></td>
</tr>
<tr>
<td>【Linux】环境下部署Nginx服务 - 二进制部署方式</td>
<td><a href="https://liucy.blog.csdn.net/article/details/132145067" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/132145067</a></td>
</tr>
<tr>
<td>nginx配置负载均衡--实战项目（适用于轮询、加权轮询、ip_hash）</td>
<td><a href="https://liucy.blog.csdn.net/article/details/133986013" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/133986013</a></td>
</tr>
<tr>
<td>nginx快速部署一个网站服务 + 多域名 + 多端口</td>
<td><a href="https://liucy.blog.csdn.net/article/details/133986102" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/133986102</a></td>
</tr>
<tr>
<td>【Linux】Nginx一个域名https&amp;一个地址配置多个项目【项目实战】</td>
<td><a href="https://liucy.blog.csdn.net/article/details/144442148" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/144442148</a></td>
</tr>
</tbody>
</table>
<h2 id="相关专栏" tabindex="-1"><a class="header-anchor" href="#相关专栏"><span>相关专栏</span></a></h2>
<blockquote>
<div align="center"><a href="https://blog.csdn.net/liu_chen_yang/category_10887074.html">❀《Linux从入门到精通》专栏 ❀</a></div>
<div align="center"><a href="https://blog.csdn.net/liu_chen_yang/category_12419502.html">❀《Nginx》专栏 ❀</a></div>
</blockquote>
<blockquote>
<p>🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
</div></template>


