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
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161337284.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="一、下载安装包" tabindex="-1"><a class="header-anchor" href="#一、下载安装包"><span>一、下载安装包</span></a></h2>
<blockquote>
<p>官网下载地址：<a href="https://nginx.org/en/download.html" target="_blank" rel="noopener noreferrer">nginx: download</a></p>
</blockquote>
<p>选择<code v-pre>Stable version</code>版本下载到本地（该版本为Linux版本），下载完成后上传到服务器上；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161337619.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>或者在服务器上使用wget下载</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://nginx.org/download/nginx-1.24.0.tar.gz</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="二、部署nginx服务" tabindex="-1"><a class="header-anchor" href="#二、部署nginx服务"><span>二、部署Nginx服务</span></a></h2>
<h3 id="_1、安装nginx服务需要的依赖包" tabindex="-1"><a class="header-anchor" href="#_1、安装nginx服务需要的依赖包"><span>1、安装Nginx服务需要的依赖包</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gcc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gcc-c++</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> zlib</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> zlib-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pcre-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> openssl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> openssl-devel</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>离线包下载地址：<a href="https://download.csdn.net/download/liu_chen_yang/88858078" target="_blank" rel="noopener noreferrer">nginx1.24.0 二进制安装离线包及依赖包<br>
</a></p>
<h3 id="_2、上传解压" tabindex="-1"><a class="header-anchor" href="#_2、上传解压"><span>2、上传解压</span></a></h3>
<p>（1）sz先把nginx压缩包复制到虚拟机/服务器上<br>
（2）解压nginx压缩包：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> xf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nginx-1.24.0.tar.gz</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/src/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>（3）切换到nginx目录下：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/src/nginx-1.24.0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3、编译安装nginx服务" tabindex="-1"><a class="header-anchor" href="#_3、编译安装nginx服务"><span>3、编译安装nginx服务</span></a></h3>
<p>指定安装路径然后编译安装</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./configure</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --prefix=/usr/local/nginx</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">make</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">make</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#或者使用下面这一条命令。上面的看着清晰，在哪里错了，易排查问题</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./configure</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --prefix=/usr/local/nginx</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">make</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">make</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、启动及确认服务是否正常" tabindex="-1"><a class="header-anchor" href="#三、启动及确认服务是否正常"><span>三、启动及确认服务是否正常</span></a></h2>
<ul>
<li>安装成功后，启动Nginx服务：到/usr/local/nginx/sbin目录下，启动服务：</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/usr/local/nginx/sbin/nginx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  /usr/local/nginx/conf/nginx.conf</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>启动成功后，查看进程</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ps</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -ef</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nginx</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>或者查看端口是否启动（默认端口为80）</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">netstat</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -anput</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 80</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161336609.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>确定启动之后，页面访问：ip<br>
即可访问到页面：</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161336342.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="四、nginx启动、停止、重启、检测配置命令" tabindex="-1"><a class="header-anchor" href="#四、nginx启动、停止、重启、检测配置命令"><span>四、nginx启动、停止、重启、检测配置命令</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#启动nginx服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/usr/local/nginx/sbin/nginx</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/usr/local/nginx/sbin/nginx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  /usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#停止nginx</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/usr/local/nginx/sbin/nginx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> stop</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#重启nginx</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/usr/local/nginx/sbin/nginx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> reload</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#检测nginx服务配置是否有误</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/usr/local/nginx/sbin/nginx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -t</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、常见问题" tabindex="-1"><a class="header-anchor" href="#五、常见问题"><span>五、常见问题</span></a></h2>
<h3 id="报错1-configure-error-c-compiler-cc-is-not-found" tabindex="-1"><a class="header-anchor" href="#报错1-configure-error-c-compiler-cc-is-not-found"><span>报错1：./configure: error: C compiler cc is not found</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">完整报错：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./configure:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> error:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> compiler</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> not</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> found</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>原因：没有编译环境<br>
解决：<code v-pre>yum -y install gcc gcc-c++</code></p>
</blockquote>
<h3 id="报错2-configure-error-the-http-rewrite-module-requires-the-pcre-library" tabindex="-1"><a class="header-anchor" href="#报错2-configure-error-the-http-rewrite-module-requires-the-pcre-library"><span>报错2：./configure: error: the HTTP rewrite module requires the PCRE library.</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">完整报错：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./configure:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> error:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> HTTP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rewrite</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> module</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> requires</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> PCRE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> library.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">You</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> can</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> either</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> disable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> module</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> by</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> using</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --without-http_rewrite_module</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">option,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> or</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> PCRE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> library</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> into</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> system,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> or</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> build</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> PCRE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> library</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">statically</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> source</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> with</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nginx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> by</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> using</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --with-pcre=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> option.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>原因：缺少pcre-devel库<br>
解决：<code v-pre>yum -y install pcre-devel</code></p>
</blockquote>
<h3 id="问题3-configure-error-the-http-gzip-module-requires-the-zlib-library" tabindex="-1"><a class="header-anchor" href="#问题3-configure-error-the-http-gzip-module-requires-the-zlib-library"><span>问题3：./configure: error: the HTTP gzip module requires the zlib library.</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">完整报错：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./configure:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> error:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> HTTP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gzip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> module</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> requires</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> zlib</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> library.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">You</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> can</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> either</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> disable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> module</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> by</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> using</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --without-http_gzip_module</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">option,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> or</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> zlib</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> library</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> into</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> system,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> or</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> build</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> zlib</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> library</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">statically</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> source</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> with</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nginx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> by</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> using</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --with-zlib=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> option.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>原因：缺少zlib-devel<br>
解决：<code v-pre>yum -y install zlib-devel</code></p>
</blockquote>
<h2 id="六、nginx配置模块详解" tabindex="-1"><a class="header-anchor" href="#六、nginx配置模块详解"><span>六、nginx配置模块详解</span></a></h2>
<blockquote>
<p>这里的图是二进制安装默认的配置，yum安装的与二进制安装的nginx，配置会有差异，但整体大概的说明都是一样的。</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161336812.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>主要区域讲解：</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161336242.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="七、推荐一个自动生成nginx配置文件的网站" tabindex="-1"><a class="header-anchor" href="#七、推荐一个自动生成nginx配置文件的网站"><span>七、推荐一个自动生成nginx配置文件的网站</span></a></h2>
<blockquote>
<p><a href="https://nginxconfig.io/" target="_blank" rel="noopener noreferrer">https://nginxconfig.io/</a><br>
可以根据你的业务需求，自动生成负载的配置。</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161335700.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>往下面翻，就可以看到配置文件了；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161335855.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<hr>
<blockquote>
<p>推荐一个优化nginx配置文件的页面：<a href="https://tool.okcode.vip/dev/nginx-formatter" target="_blank" rel="noopener noreferrer">Nginx配置文件格式化</a><br><br>
这里面还有很多格式化工具可以自己看看：<a href="https://tool.okcode.vip/" target="_blank" rel="noopener noreferrer">https://tool.okcode.vip/</a><br><br>
Nginx 404页面美化：<a href="https://download.csdn.net/download/liu_chen_yang/90123906" target="_blank" rel="noopener noreferrer">Nginx 404页面美化</a></p>
</blockquote>
<h2 id="八、相关文章" tabindex="-1"><a class="header-anchor" href="#八、相关文章"><span>八、相关文章</span></a></h2>
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
<h2 id="九、相关专栏" tabindex="-1"><a class="header-anchor" href="#九、相关专栏"><span>九、相关专栏</span></a></h2>
<blockquote>
<div align="center"><a href="https://blog.csdn.net/liu_chen_yang/category_10887074.html">❀《Linux从入门到精通》专栏 ❀</a></div>
<div align="center"><a href="https://blog.csdn.net/liu_chen_yang/category_12419502.html">❀《Nginx》专栏 ❀</a></div>
</blockquote>
<blockquote>
<p>🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
</div></template>


