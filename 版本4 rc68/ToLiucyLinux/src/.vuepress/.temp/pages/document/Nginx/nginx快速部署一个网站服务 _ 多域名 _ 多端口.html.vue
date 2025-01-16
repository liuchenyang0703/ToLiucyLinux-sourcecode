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
<h2 id="一、nginx虚拟主机-部署网站" tabindex="-1"><a class="header-anchor" href="#一、nginx虚拟主机-部署网站"><span>一、nginx虚拟主机，部署网站</span></a></h2>
<blockquote>
<p>都是在同一台服务器上部署</p>
</blockquote>
<h2 id="二、部署单域名-ip网站服务" tabindex="-1"><a class="header-anchor" href="#二、部署单域名-ip网站服务"><span>二、部署单域名/IP网站服务</span></a></h2>
<h3 id="_1、创建一个普通用户-用户管理nginx网站服务" tabindex="-1"><a class="header-anchor" href="#_1、创建一个普通用户-用户管理nginx网站服务"><span>1、创建一个普通用户，用户管理nginx网站服务</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建一个名为www的用户组</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">groupadd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> www</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -g</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 666</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建一个名为www的用户并添加到www的用户组中</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">useradd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> www</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -u</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 666</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -g</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 666</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -M</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /sbin/nologin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看用户id</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">id</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> www</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#结果</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">uid</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">666</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">www</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">gid</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">666</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">www</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groups</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">666</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">www</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、修改nginx主配置文件" tabindex="-1"><a class="header-anchor" href="#_2、修改nginx主配置文件"><span>2、修改nginx主配置文件</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@iz0jlfqv8fyt7iuxoec4clz ~]# cat /etc/nginx/nginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  www</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;		</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 设置运行用户，刚刚创建的用户</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">worker_processes</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  auto</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">error_log</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  /var/log/nginx/error.log</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> notice</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pid</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        /var/run/nginx.pid</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">events</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    worker_connections</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  1024</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">http</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    include</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">       /etc/nginx/mime.types</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    default_type</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  application/octet-stream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    log_format</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  main</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  '$remote_addr - $remote_user [$time_local] "$request" '</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">                      '$status $body_bytes_sent "$http_referer" '</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">                      '"$http_user_agent" "$http_x_forwarded_for"'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    access_log</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  /var/log/nginx/access.log</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    sendfile</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    #tcp_nopush     on;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    keepalive_timeout</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  65</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    #gzip  on;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    include</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/nginx/conf.d/</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">.conf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;		</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># include导入该目录下的*.conf配置文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、创建虚拟主机nignx子配置文件" tabindex="-1"><a class="header-anchor" href="#_3、创建虚拟主机nignx子配置文件"><span>3、创建虚拟主机nignx子配置文件</span></a></h3>
<blockquote>
<p>只需要写server{}标签即可。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 先看conf.d下还有没有其他的*.conf结尾的，有的话先备份；</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> default.conf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  default.conf-bak</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建虚拟主机nignx子配置文件(qqfly配置文件)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/nginx/conf.d/qqfly.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 写入如下信息，自己的根据情况自行修改（域名或ip;index.html的访问路径）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	listen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 80</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	# nginx会匹配 域名/IP:80</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	server_name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 域名/IP/localhost</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	# 支持中文的参数</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	charset</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> utf-8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	location</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  /</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		# 根据root参数，填写网页根目录信息</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		# 表示当你访问 http://域名:80 ，自动来这个目录下找数据</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  /www/qqfly/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		# 默认找 /www/qqflq/ 的名字叫做index.html的文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		index</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  index.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面配置文件中配置了index.html的地址，这里可以看到是没有的，我们创建一下；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建一个存放网页访问地址的目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /www/qqfly/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建网页静态文件，index.html qqfly.jpg  qqfly.txt</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 部署一个静态网站，最基本的提供，html，jpg，txt等静态数据；如果是其他类型的文件，nginx默认不解析，直接下载</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># nginx都可以帮你去返回，解析请求</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /www/qqfly/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建静态页面index.html</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> > </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/www/qqfly/index.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;&#x3C; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">> &#x3C;meta charset=utf-8></span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">> &#x3C;H1>这是一个 qqfly 的测试页面；用于证明nginx一个网站部署成功了；&#x3C;/H1></span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">> EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"># 创建一个jpg文件</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">wget -O qqfly.jpg https://i1.hdslb.com/bfs/archive/5edd3d62a5ca140063ef8e32a852348a422b86b6.jpg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"># 创建一个txt文件</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">echo "qq飞车游戏很好玩！测试！" > qqfly.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"># 修改静态文件的属主，属组</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">chown -R www:www /www/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、测试nginx配置文件语法-然后启动" tabindex="-1"><a class="header-anchor" href="#_4、测试nginx配置文件语法-然后启动"><span>4、测试nginx配置文件语法，然后启动</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 检测nginx配置中语法是否有误</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">nginx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -t</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161334848.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>ok则为正常，没有错误；</p>
<ul>
<li>启动nginx</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看nginx状态</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> status</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nginx</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 重启nginx</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nginx</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、域名访问地址" tabindex="-1"><a class="header-anchor" href="#_5、域名访问地址"><span>5、域名访问地址</span></a></h3>
<blockquote>
<p>如果是使用的域名，那么需要在本地配置dns域名解析<br>
分别添加二级域名，三级域名，hosts解析<br>
<code v-pre>ip  三级域名 二级域名   </code></p>
</blockquote>
<ul>
<li>配置好还是访问不到？<br>
1、可以先看看可以ping通域名吗。<br>
2、检查你本地是否设置了代理，如果有则关闭。</li>
</ul>
<h3 id="_6、ip访问地址" tabindex="-1"><a class="header-anchor" href="#_6、ip访问地址"><span>6、IP访问地址</span></a></h3>
<p>这里我使用的是ip地址访问，因为我的域名需要备案，申请还没下来，所以先用ip测试吧；</p>
<ul>
<li>访问html资源</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161334423.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>访问jpg资源</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161334458.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>访问txt资源</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161334429.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>如果是其他类型的文件，nginx默认不解析，会直接下载</li>
</ul>
<blockquote>
<p>直接生成静态数据，不用重启nginx，这就是磁盘上的一些静态数据<br>
nginx的server{}虚拟主机，以及设置了，去这个目录下搜索资料<br><br>
nginx默认不识别这个test.ttt格式的文件，因此直接下载了</p>
</blockquote>
<p>例如：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> > </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/www/qqfly/qqfly.ttt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;&#x3C; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">qq飞车游戏很好玩！测试！</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为是静态页面，上面也说了，修改不用重启；（但是修改配置文件的话就需要重启nignx才能生效；）<br>
页面直接访问，会让你下载；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161334698.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>下载完打开，里面的内容就是刚刚写进去的内容；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161334131.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="三、nginx的配置文件匹配" tabindex="-1"><a class="header-anchor" href="#三、nginx的配置文件匹配"><span>三、nginx的配置文件匹配</span></a></h2>
<p>还记得上面让备份的一个nginx配置文件吗，<code v-pre>/etc/nginx/conf.d/default.conf</code>，这个里面的server_name 写的是localhost，而咱们用的是ip访问网站，所以默认会先去找<code v-pre>default.conf</code>；所以在上面给他备份了一下，然后才会去找另一个conf文件。</p>
<p>nginx配置会有一个先后顺序，默认按照文件名的字典顺序读取 <code v-pre>/etc/nginx/conf.d</code> 目录下的配置文件。如果需要特定的加载顺序，可以使用 <code v-pre>include</code> 指令来指定读取文件的顺序。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#先看当前有几个nginx配置文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@iz0jlfqv8fyt7iuxoec4clz conf.d]# ls</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">default.conf-bak</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  qqfly.conf</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#先看第一个default.conf</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@iz0jlfqv8fyt7iuxoec4clz conf.d]# grep -Ev </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'#|^$'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> default.conf-bak</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    listen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">       80</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    server_name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  localhost</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    location</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   /usr/share/nginx/html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        index</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  index.html</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> index.htm</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    error_page</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   500</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 502</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 503</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 504</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  /50x.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    location</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /50x.html</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   /usr/share/nginx/html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#再看第二个配置文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@iz0jlfqv8fyt7iuxoec4clz conf.d]# cat qqfly.conf </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	listen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 80</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	# nginx会匹配 域名/IP:80</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	server_name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 域名</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	# 支持中文的参数</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	charset</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> utf-8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	location</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  /</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		# 根据root参数，填写网页根目录信息</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		# 表示当你访问 http://域名:80 ，自动来这个目录下找数据</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  /www/qqfly/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		# 默认找 /www/qqflq/ 的名字叫做index.html的文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		index</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  index.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到一个写的域名，一个写的localhost；因为我们这边的域名用不了，所以，要是不备份那个<code v-pre>default.conf</code>默认的读取的就是<code v-pre>default.conf</code>这个配置文件；<br>
如果域名是没问题的，那么直接用域名访问，就会直接去找<code v-pre>qqfly.conf</code>这个配置文件，就不会存在先后顺序什么的。</p>
<h2 id="四、部署多域名网站服务" tabindex="-1"><a class="header-anchor" href="#四、部署多域名网站服务"><span>四、部署多域名网站服务</span></a></h2>
<h3 id="_1、首先准备两个域名、index路径、nginx配置文件" tabindex="-1"><a class="header-anchor" href="#_1、首先准备两个域名、index路径、nginx配置文件"><span>1、首先准备两个域名、index路径、nginx配置文件</span></a></h3>
<table>
<thead>
<tr>
<th>域名</th>
<th>nginx的index路径</th>
<th>nginx的配置文件名</th>
</tr>
</thead>
<tbody>
<tr>
<td>域名1 （test1.top）</td>
<td>/www/test1/index.html</td>
<td>/etc/nginx/conf.d/test1.conf</td>
</tr>
<tr>
<td>域名2 （test2.top）</td>
<td>/www/test1/index.html</td>
<td>/etc/nginx/conf.d/test2.conf</td>
</tr>
</tbody>
</table>
<p>配置域名的话自己配置就可以；</p>
<h3 id="_2、创建两个域名的nginx配置文件" tabindex="-1"><a class="header-anchor" href="#_2、创建两个域名的nginx配置文件"><span>2、创建两个域名的nginx配置文件</span></a></h3>
<ul>
<li>test1域名</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/nginx/conf.d/test1.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#内容如下</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	listen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">	80</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	#域名1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	server_name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">	test1.top</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	# 支持中文的参数</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	charset</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> utf-8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	location</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /www/test1/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		index</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> index.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>test2域名</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/nginx/conf.d/test2.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#内容如下</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	listen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">	80</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	#域名1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	server_name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">	test2.top</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	# 支持中文的参数</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	charset</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> utf-8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	location</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /www/test2/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		index</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> index.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、创建两个域名的index-html访问页面" tabindex="-1"><a class="header-anchor" href="#_3、创建两个域名的index-html访问页面"><span>3、创建两个域名的index.html访问页面</span></a></h3>
<ul>
<li>test1 的 index.html</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建test1和test2目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /www/{test1,test2}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建完之后，写入数据到test1/index.html中</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> > </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/www/test1/index.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;&#x3C; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">> &#x3C;meta charset=utf-8></span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">> &#x3C;H2> test1 页面测试 &#x3C;/H2></span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">> EOF</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>test2 的 index.html</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 给test2域名写入index.html页面数据</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> > </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/www/test2/index.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;&#x3C; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">&#x3C;meta charset=utf-8></span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">&#x3C;H2> test2 页面测试 &#x3C;/H2></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、检查nignx配置是否有误-并-重启nginx服务" tabindex="-1"><a class="header-anchor" href="#_4、检查nignx配置是否有误-并-重启nginx服务"><span>4、检查nignx配置是否有误 并 重启nginx服务</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 检查nignx配置是否有误</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">nginx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -t</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 重启nginx服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nginx</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、页面访问两个域名" tabindex="-1"><a class="header-anchor" href="#_5、页面访问两个域名"><span>5、页面访问两个域名</span></a></h3>
<blockquote>
<p>test1.top<br>
teset2.top</p>
</blockquote>
<p>可以看到分别两个页面，这样多域名网站服务部署成功。</p>
<h2 id="五、部署多端口网站服务" tabindex="-1"><a class="header-anchor" href="#五、部署多端口网站服务"><span>五、部署多端口网站服务</span></a></h2>
<h3 id="_1、首先准备两个端口、index路径、nginx配置文件-一个即可" tabindex="-1"><a class="header-anchor" href="#_1、首先准备两个端口、index路径、nginx配置文件-一个即可"><span>1、首先准备两个端口、index路径、nginx配置文件（一个即可）</span></a></h3>
<table>
<thead>
<tr>
<th>端口</th>
<th>nginx的index路径</th>
<th>nginx的配置文件名（使用同一个配置）</th>
</tr>
</thead>
<tbody>
<tr>
<td>81</td>
<td>/www/81/index.html</td>
<td>/etc/nginx/conf.d/port.conf</td>
</tr>
<tr>
<td>82</td>
<td>/www/82/index.html</td>
<td>/etc/nginx/conf.d/port.conf</td>
</tr>
</tbody>
</table>
<h3 id="_2、创建两个port的nginx配置文件-一个配置中" tabindex="-1"><a class="header-anchor" href="#_2、创建两个port的nginx配置文件-一个配置中"><span>2、创建两个port的nginx配置文件（一个配置中）</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/nginx/conf.d/port.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 81 端口配置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	listen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 81</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	server_name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> localhost</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	# 支持中文的参数</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	charset</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> utf-8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	location</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /www/81/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		index</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> index.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 82 端口配置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	listen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 82</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	server_name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> localhost</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        # 支持中文的参数</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        charset</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> utf-8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	location</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /www/82/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		index</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> index.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、创建两个端口的index-html页面" tabindex="-1"><a class="header-anchor" href="#_3、创建两个端口的index-html页面"><span>3、创建两个端口的index.html页面</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /www/{81,82}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建81和82的index页面测试数据</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> > </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/www/81/index.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;&#x3C; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">&#x3C;meta charset=utf-8></span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">&#x3C;H1>我是81，欢迎来到我的页面&#x3C;/H1></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> > </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/www/82/index.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;&#x3C; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">&#x3C;meta charset=utf-8></span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">&#x3C;H1>我是82，欢迎来到我的页面&#x3C;/H1></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、检查nignx配置是否有误-并-重启nginx服务-1" tabindex="-1"><a class="header-anchor" href="#_4、检查nignx配置是否有误-并-重启nginx服务-1"><span>4、检查nignx配置是否有误 并 重启nginx服务</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 检查nignx配置是否有误</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">nginx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -t</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 重启nginx服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nginx</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、页面访问两个端口" tabindex="-1"><a class="header-anchor" href="#_5、页面访问两个端口"><span>5、页面访问两个端口</span></a></h3>
<p>ip:端口</p>
<ul>
<li>ip:81</li>
</ul>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161333738.png" alt="" loading="lazy">- ip:82</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161333298.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_5-1-页面访问两个端口-各添加一个jpg页面" tabindex="-1"><a class="header-anchor" href="#_5-1-页面访问两个端口-各添加一个jpg页面"><span>5.1 页面访问两个端口 --&gt; 各添加一个jpg页面</span></a></h4>
<p>到网上随便照两张图，分别放到<code v-pre>/www/81/</code>下和<code v-pre>/www/82/</code>下；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 81端口的图片</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">wget</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -O</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /www/81/81.jpg</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://picnew12.photophoto.cn/20180728/81jianjunjieqizhiyishuzizitisheji-30355854_1.jpg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 82端口的图片</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">wget</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -O</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /www/82/82.jpg</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://img95.699pic.com/xsj/0v/2f/k8.jpg%21/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里添加完成之后，不需要重启nginx，直接在页面访问 <code v-pre>ip:端口/图片名</code></p>
<ul>
<li>81 服务器（ip:81/81.jpg）</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161333963.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>82 服务器（ip:82/82.jpg）</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161333283.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_5-2-页面访问两个端口-各添加一个txt资源" tabindex="-1"><a class="header-anchor" href="#_5-2-页面访问两个端口-各添加一个txt资源"><span>5.2 页面访问两个端口 --&gt; 各添加一个txt资源</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "我又来测试了，这里是 81 的一个测试页面"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> > </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/www/81/81.txt</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "我也又来测试了，这是是 82 的一个测试页面"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> > </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/www/82/82.txt</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里添加完成之后，同样也不需要重启nginx，直接在页面访问 <code v-pre>ip:端口/txt名</code></p>
<ul>
<li>81 服务器（ip:81/81.txt）</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161333787.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>82 服务器（ip:82/82.txt）</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161333434.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="到这里就完成了nginx部署一个网站及多个域名的网站和多个端口的网站" tabindex="-1"><a class="header-anchor" href="#到这里就完成了nginx部署一个网站及多个域名的网站和多个端口的网站"><span>到这里就完成了nginx部署一个网站及多个域名的网站和多个端口的网站</span></a></h3>
<h2 id="六、-相关文章" tabindex="-1"><a class="header-anchor" href="#六、-相关文章"><span>六、 相关文章</span></a></h2>
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
<h2 id="七、相关专栏" tabindex="-1"><a class="header-anchor" href="#七、相关专栏"><span>七、相关专栏</span></a></h2>
<blockquote>
<div align="center"><a href="https://blog.csdn.net/liu_chen_yang/category_10887074.html">❀《Linux从入门到精通》专栏 ❀</a></div>
<div align="center"><a href="https://blog.csdn.net/liu_chen_yang/category_12419502.html">❀《Nginx》专栏 ❀</a></div>
</blockquote>
<blockquote>
<p>🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
</div></template>


