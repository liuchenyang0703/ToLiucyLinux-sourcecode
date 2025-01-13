<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">CSDN博客专家</a><br>
  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者</a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/usersnew/id_1661843828089234" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主</a><br>
  🏅<a href="https://developer.aliyun.com/profile/7yu26jk3lfqxg" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主</a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区</a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161338953.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="一个域名带https配置多个项目" tabindex="-1"><a class="header-anchor" href="#一个域名带https配置多个项目"><span>一个域名带https配置多个项目</span></a></h2>
<p>①、首先将项目移动到html下；<br>
②、将ssl证书移动到目的地；<br>
③、然后进行nginx配置；</p>
<p>Nginx配置文件完整代码展示（主要在<code v-pre>server</code>段）：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#user  root;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">worker_processes</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">events</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  worker_connections</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1024</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">http</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  include</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mime.types</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  default_type</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> application/octet-stream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  sendfile</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">  #tcp_nopush     on;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">  #keepalive_timeout  0;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  keepalive_timeout</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 65</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">  #gzip  on;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    listen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 80</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    server_name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> test.top</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> www.test.top</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">    # HTTP 重定向到 HTTPS</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 301</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$host$request_uri</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    listen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 443</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ssl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    server_name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> test.top</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> www.test.top</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">    # SSL 配置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    ssl_certificate</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/nginx/conf/ssl/test.top.pem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    ssl_certificate_key</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/nginx/conf/ssl/test.top.key</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    ssl_protocols</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> TLSv1.2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> TLSv1.3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    ssl_ciphers</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    ssl_prefer_server_ciphers</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">    # 设置错误页面</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    error_page</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 404</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /404.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    error_page</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 500</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /500.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    location</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /404.html</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/nginx/html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      internal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    location</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /500.html</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/nginx/html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      internal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">    # 定义项目根目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/nginx/html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">    # 默认访问 项目1 【如果不想用项目1，也可以自定义其他项目】</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    location</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      try_files</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $uri</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $uri</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /项目1/index.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">      #			root   html;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">      #			index  index.html index.htm;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">    # 项目1 项目</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    location</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /项目1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">      alias</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/nginx/html/项目1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      try_files</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $uri</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $uri</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /项目1/index.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">    # 项目2 项目</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    location</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /项目2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">      alias</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/nginx/html/项目2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      try_files</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $uri</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $uri</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /项目2/index.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">    # 项目3 项目</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    location</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /项目3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">      alias</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/nginx/html/项目3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      try_files</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $uri</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $uri</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /项目3/index.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样页面访问时就可以是：<code v-pre>https://test.top/项目1/</code>、<code v-pre>https://test.top/项目2/</code>、<code v-pre>https://test.top/项目3/</code>。</p>
<h2 id="一个域名配置多个项目" tabindex="-1"><a class="header-anchor" href="#一个域名配置多个项目"><span>一个域名配置多个项目</span></a></h2>
<p>①、首先将项目移动到html下；<br>
②、然后进行nginx配置；</p>
<p>Nginx配置文件完整代码展示（主要在<code v-pre>server</code>段）：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#user  root;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">worker_processes</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">events</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  worker_connections</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1024</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">http</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  include</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mime.types</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  default_type</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> application/octet-stream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  sendfile</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">  #tcp_nopush     on;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">  #keepalive_timeout  0;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  keepalive_timeout</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 65</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">  #gzip  on;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    listen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 80</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    server_name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> test.top</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> www.test.top</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">    # 设置错误页面</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    error_page</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 404</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /404.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    error_page</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 500</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /500.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    location</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /404.html</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/nginx/html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      internal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    location</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /500.html</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/nginx/html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      internal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">    # 定义项目根目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/nginx/html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">    # 默认访问 项目1 【如果不想用项目1，也可以自定义其他项目】</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    location</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      try_files</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $uri</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $uri</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /项目1/index.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">      #			root   html;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">      #			index  index.html index.htm;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">    # 项目1 项目</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    location</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /项目1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">      alias</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/nginx/html/项目1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      try_files</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $uri</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $uri</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /项目1/index.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">    # 项目2 项目</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    location</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /项目2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">      alias</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/nginx/html/项目2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      try_files</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $uri</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $uri</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /项目2/index.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">    # 项目3 项目</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    location</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /项目3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">      alias</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/nginx/html/项目3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      try_files</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $uri</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $uri</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /项目3/index.html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样页面访问时就可以是：<code v-pre>http://test.top/项目1/</code>、<code v-pre>http://test.top/项目2/</code>、<code v-pre>http://test.top/项目3/</code>。</p>
<h2 id="本机地址配置多个项目" tabindex="-1"><a class="header-anchor" href="#本机地址配置多个项目"><span>本机地址配置多个项目</span></a></h2>
<blockquote>
<p>本机地址配置多个项目这个其实和<code v-pre>一个域名配置多个项目</code>是一样的，只不过把<code v-pre>server_name</code>的域名换成<code v-pre>localhost</code>就行。<br><br>
具体操作如下：</p>
</blockquote>
<p>①、首先将项目移动到html下；<br>
②、然后进行nginx配置；</p>
<p>Nginx配置文件完整代码展示（主要在<code v-pre>server</code>段）：</p>
<div class="language-conf line-numbers-mode" data-highlighter="shiki" data-ext="conf" data-title="conf" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>user root;</span></span>
<span class="line"><span>worker_processes 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>  worker_connections 1024;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>  include mime.types;</span></span>
<span class="line"><span>  default_type application/octet-stream;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  sendfile on;</span></span>
<span class="line"><span>  #tcp_nopush     on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  #keepalive_timeout  0;</span></span>
<span class="line"><span>  keepalive_timeout 65;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  #gzip  on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 设置错误页面</span></span>
<span class="line"><span>    error_page 404 /404.html;</span></span>
<span class="line"><span>    error_page 500 /500.html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location = /404.html {</span></span>
<span class="line"><span>      root /usr/local/nginx/html;</span></span>
<span class="line"><span>      internal;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location = /500.html {</span></span>
<span class="line"><span>      root /usr/local/nginx/html;</span></span>
<span class="line"><span>      internal;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 定义项目根目录</span></span>
<span class="line"><span>    root /usr/local/nginx/html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 默认访问 html/下的index.html页面</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>      root html;</span></span>
<span class="line"><span>      index index.html index.htm;</span></span>
<span class="line"><span>      # 如果需要以项目1为默认页，可以把这个配置打开，上面的两个注释了就行；</span></span>
<span class="line"><span>      # try_files $uri $uri/ /项目1/index.html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 项目1 项目</span></span>
<span class="line"><span>    location /项目1 {</span></span>
<span class="line"><span>      alias /usr/local/nginx/html/项目1;</span></span>
<span class="line"><span>      try_files $uri $uri/ /项目1/index.html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 项目2 项目</span></span>
<span class="line"><span>    location /项目2 {</span></span>
<span class="line"><span>      alias /usr/local/nginx/html/项目2;</span></span>
<span class="line"><span>      try_files $uri $uri/ /项目2/index.html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样页面访问的是时候就可以是：<code v-pre>ip/项目1/</code>、<code v-pre>ip/项目2/</code>。</p>
<blockquote>
<p>推荐一个优化nginx配置文件的页面：<a href="https://tool.okcode.vip/dev/nginx-formatter" target="_blank" rel="noopener noreferrer">Nginx配置文件格式化</a><br><br>
这里面还有很多格式化工具可以自己看看：<a href="https://tool.okcode.vip/" target="_blank" rel="noopener noreferrer">https://tool.okcode.vip/</a><br><br>
Nginx 404页面美化：<a href="https://download.csdn.net/download/liu_chen_yang/90123906" target="_blank" rel="noopener noreferrer">Nginx 404页面美化</a></p>
</blockquote>
<h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章"><span>相关文章</span></a></h2>
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


