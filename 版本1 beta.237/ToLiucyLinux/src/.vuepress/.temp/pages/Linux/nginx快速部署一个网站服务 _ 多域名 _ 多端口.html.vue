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
<h1 id="一、nginx虚拟主机-部署网站" tabindex="-1"><a class="header-anchor" href="#一、nginx虚拟主机-部署网站" aria-hidden="true">#</a> 一、nginx虚拟主机，部署网站</h1>
<blockquote>
<p>都是在同一台服务器上部署</p>
</blockquote>
<h1 id="二、部署单域名-ip网站服务" tabindex="-1"><a class="header-anchor" href="#二、部署单域名-ip网站服务" aria-hidden="true">#</a> 二、部署单域名/IP网站服务</h1>
<h2 id="_1、创建一个普通用户-用户管理nginx网站服务" tabindex="-1"><a class="header-anchor" href="#_1、创建一个普通用户-用户管理nginx网站服务" aria-hidden="true">#</a> 1、创建一个普通用户，用户管理nginx网站服务</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 创建一个名为www的用户组</span>
<span class="token function">groupadd</span> www <span class="token parameter variable">-g</span> <span class="token number">666</span>

<span class="token comment"># 创建一个名为www的用户并添加到www的用户组中</span>
<span class="token function">useradd</span> www <span class="token parameter variable">-u</span> <span class="token number">666</span> <span class="token parameter variable">-g</span> <span class="token number">666</span> <span class="token parameter variable">-M</span> <span class="token parameter variable">-s</span> /sbin/nologin

<span class="token comment"># 查看用户id</span>
<span class="token function">id</span> www
<span class="token comment">#结果</span>
<span class="token assign-left variable">uid</span><span class="token operator">=</span><span class="token number">666</span><span class="token punctuation">(</span>www<span class="token punctuation">)</span> <span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">666</span><span class="token punctuation">(</span>www<span class="token punctuation">)</span> <span class="token assign-left variable">groups</span><span class="token operator">=</span><span class="token number">666</span><span class="token punctuation">(</span>www<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、修改nginx主配置文件" tabindex="-1"><a class="header-anchor" href="#_2、修改nginx主配置文件" aria-hidden="true">#</a> 2、修改nginx主配置文件</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@iz0jlfqv8fyt7iuxoec4clz ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/nginx/nginx.conf</span>

user  www<span class="token punctuation">;</span>		<span class="token comment"># 设置运行用户，刚刚创建的用户</span>
worker_processes  auto<span class="token punctuation">;</span>

error_log  /var/log/nginx/error.log notice<span class="token punctuation">;</span>
pid        /var/run/nginx.pid<span class="token punctuation">;</span>


events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


http <span class="token punctuation">{</span>
    include       /etc/nginx/mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>

    log_format  main  <span class="token string">'$remote_addr - $remote_user [$time_local] "$request" '</span>
                      <span class="token string">'$status $body_bytes_sent "$http_referer" '</span>
                      <span class="token string">'"$http_user_agent" "$http_x_forwarded_for"'</span><span class="token punctuation">;</span>

    access_log  /var/log/nginx/access.log  main<span class="token punctuation">;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>

    include /etc/nginx/conf.d/*.conf<span class="token punctuation">;</span>		<span class="token comment"># include导入该目录下的*.conf配置文件</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、创建虚拟主机nignx子配置文件" tabindex="-1"><a class="header-anchor" href="#_3、创建虚拟主机nignx子配置文件" aria-hidden="true">#</a> 3、创建虚拟主机nignx子配置文件</h2>
<blockquote>
<p>只需要写server{}标签即可。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 先看conf.d下还有没有其他的*.conf结尾的，有的话先备份；</span>
<span class="token function">mv</span> default.conf  default.conf-bak
<span class="token comment"># 创建虚拟主机nignx子配置文件(qqfly配置文件)</span>
<span class="token function">vim</span> /etc/nginx/conf.d/qqfly.conf

<span class="token comment"># 写入如下信息，自己的根据情况自行修改（域名或ip;index.html的访问路径）</span>
server <span class="token punctuation">{</span> 
	
	listen <span class="token number">80</span><span class="token punctuation">;</span>
	<span class="token comment"># nginx会匹配 域名/IP:80</span>
	server_name 域名/IP/localhost<span class="token punctuation">;</span>
	<span class="token comment"># 支持中文的参数</span>
	charset utf-8<span class="token punctuation">;</span>
	location  /  <span class="token punctuation">{</span>
		<span class="token comment"># 根据root参数，填写网页根目录信息</span>
		<span class="token comment"># 表示当你访问 http://域名:80 ，自动来这个目录下找数据</span>
		root  /www/qqfly/<span class="token punctuation">;</span>
		<span class="token comment"># 默认找 /www/qqflq/ 的名字叫做index.html的文件</span>
		index  index.html<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面配置文件中配置了index.html的地址，这里可以看到是没有的，我们创建一下；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 创建一个存放网页访问地址的目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /www/qqfly/

<span class="token comment"># 创建网页静态文件，index.html qqfly.jpg  qqfly.txt</span>
<span class="token comment"># 部署一个静态网站，最基本的提供，html，jpg，txt等静态数据；如果是其他类型的文件，nginx默认不解析，直接下载</span>
<span class="token comment"># nginx都可以帮你去返回，解析请求</span>
<span class="token builtin class-name">cd</span> /www/qqfly/

<span class="token comment"># 创建静态页面index.html</span>
<span class="token function">cat</span> <span class="token operator">></span> /www/qqfly/index.html <span class="token operator">&lt;&lt;</span> EOF
<span class="token operator">></span> <span class="token operator">&lt;</span>meta <span class="token assign-left variable">charset</span><span class="token operator">=</span>utf-<span class="token operator"><span class="token file-descriptor important">8</span>></span>
<span class="token operator">></span> <span class="token operator">&lt;</span>H<span class="token operator"><span class="token file-descriptor important">1</span>></span>这是一个 qqfly 的测试页面；用于证明nginx一个网站部署成功了；<span class="token operator">&lt;</span>/H<span class="token operator"><span class="token file-descriptor important">1</span>></span>
<span class="token operator">></span> EOF

<span class="token comment"># 创建一个jpg文件</span>
<span class="token function">wget</span> <span class="token parameter variable">-O</span> qqfly.jpg https://i1.hdslb.com/bfs/archive/5edd3d62a5ca140063ef8e32a852348a422b86b6.jpg

<span class="token comment"># 创建一个txt文件</span>
<span class="token builtin class-name">echo</span> <span class="token string">"qq飞车游戏很好玩！测试！"</span> <span class="token operator">></span> qqfly.txt

<span class="token comment"># 修改静态文件的属主，属组</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> www:www /www/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、测试nginx配置文件语法-然后启动" tabindex="-1"><a class="header-anchor" href="#_4、测试nginx配置文件语法-然后启动" aria-hidden="true">#</a> 4、测试nginx配置文件语法，然后启动</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 检测nginx配置中语法是否有误</span>
nginx <span class="token parameter variable">-t</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/9f7bbcfe345c405681bee1071e35c5bb.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>ok则为正常，没有错误；</p>
<ul>
<li>启动nginx</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 查看nginx状态</span>
systemctl status nginx
<span class="token comment"># 重启nginx</span>
systemctl restart nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、域名访问地址" tabindex="-1"><a class="header-anchor" href="#_5、域名访问地址" aria-hidden="true">#</a> 5、域名访问地址</h2>
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
<h2 id="_6、ip访问地址" tabindex="-1"><a class="header-anchor" href="#_6、ip访问地址" aria-hidden="true">#</a> 6、IP访问地址</h2>
<p>这里我使用的是ip地址访问，因为我的域名需要备案，申请还没下来，所以先用ip测试吧；</p>
<ul>
<li>访问html资源</li>
</ul>
<figure><img src="https://img-blog.csdnimg.cn/01e5d153b3ef4853893f893f409b7fd3.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>访问jpg资源</li>
</ul>
<figure><img src="https://img-blog.csdnimg.cn/03b099ca2161475aa88bbdfe565f4ded.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>访问txt资源</li>
</ul>
<figure><img src="https://img-blog.csdnimg.cn/8217c0eab9574a54a3c078066fba9c90.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>如果是其他类型的文件，nginx默认不解析，会直接下载</li>
</ul>
<blockquote>
<p>直接生成静态数据，不用重启nginx，这就是磁盘上的一些静态数据<br>
nginx的server{}虚拟主机，以及设置了，去这个目录下搜索资料<br><br>
nginx默认不识别这个test.ttt格式的文件，因此直接下载了</p>
</blockquote>
<p>例如：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">></span> /www/qqfly/qqfly.ttt <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
qq飞车游戏很好玩！测试！
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为是静态页面，上面也说了，修改不用重启；（但是修改配置文件的话就需要重启nignx才能生效；）<br>
页面直接访问，会让你下载；</p>
<figure><img src="https://img-blog.csdnimg.cn/6bb96976514b4eb68602fab1ab969c6d.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>下载完打开，里面的内容就是刚刚写进去的内容；</p>
<figure><img src="https://img-blog.csdnimg.cn/2f30a8e33556435fa1aa5e202c72f75e.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="三、nginx的配置文件匹配" tabindex="-1"><a class="header-anchor" href="#三、nginx的配置文件匹配" aria-hidden="true">#</a> 三、nginx的配置文件匹配</h1>
<p>还记得上面让备份的一个nginx配置文件吗，<code v-pre>/etc/nginx/conf.d/default.conf</code>，这个里面的server_name 写的是localhost，而咱们用的是ip访问网站，所以默认会先去找<code v-pre>default.conf</code>；所以在上面给他备份了一下，然后才会去找另一个conf文件。</p>
<p>nginx配置会有一个先后顺序，默认按照文件名的字典顺序读取 <code v-pre>/etc/nginx/conf.d</code> 目录下的配置文件。如果需要特定的加载顺序，可以使用 <code v-pre>include</code> 指令来指定读取文件的顺序。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#先看当前有几个nginx配置文件</span>
<span class="token punctuation">[</span>root@iz0jlfqv8fyt7iuxoec4clz conf.d<span class="token punctuation">]</span><span class="token comment"># ls</span>
default.conf-bak  qqfly.conf


<span class="token comment">#先看第一个default.conf</span>
<span class="token punctuation">[</span>root@iz0jlfqv8fyt7iuxoec4clz conf.d<span class="token punctuation">]</span><span class="token comment"># grep -Ev '#|^$' default.conf-bak</span>
server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>
    location / <span class="token punctuation">{</span>
        root   /usr/share/nginx/html<span class="token punctuation">;</span>
        index  index.html index.htm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        root   /usr/share/nginx/html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>



<span class="token comment">#再看第二个配置文件</span>
<span class="token punctuation">[</span>root@iz0jlfqv8fyt7iuxoec4clz conf.d<span class="token punctuation">]</span><span class="token comment"># cat qqfly.conf </span>

server <span class="token punctuation">{</span> 
	
	listen <span class="token number">80</span><span class="token punctuation">;</span>
	<span class="token comment"># nginx会匹配 域名/IP:80</span>
	server_name 域名<span class="token punctuation">;</span>
	<span class="token comment"># 支持中文的参数</span>
	charset utf-8<span class="token punctuation">;</span>
	location  /  <span class="token punctuation">{</span>
		<span class="token comment"># 根据root参数，填写网页根目录信息</span>
		<span class="token comment"># 表示当你访问 http://域名:80 ，自动来这个目录下找数据</span>
		root  /www/qqfly/<span class="token punctuation">;</span>
		<span class="token comment"># 默认找 /www/qqflq/ 的名字叫做index.html的文件</span>
		index  index.html<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到一个写的域名，一个写的localhost；因为我们这边的域名用不了，所以，要是不备份那个<code v-pre>default.conf</code>默认的读取的就是<code v-pre>default.conf</code>这个配置文件；<br>
如果域名是没问题的，那么直接用域名访问，就会直接去找<code v-pre>qqfly.conf</code>这个配置文件，就不会存在先后顺序什么的。</p>
<h1 id="四、部署多域名网站服务" tabindex="-1"><a class="header-anchor" href="#四、部署多域名网站服务" aria-hidden="true">#</a> 四、部署多域名网站服务</h1>
<h2 id="_1、首先准备两个域名、index路径、nginx配置文件" tabindex="-1"><a class="header-anchor" href="#_1、首先准备两个域名、index路径、nginx配置文件" aria-hidden="true">#</a> 1、首先准备两个域名、index路径、nginx配置文件</h2>
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
<h2 id="_2、创建两个域名的nginx配置文件" tabindex="-1"><a class="header-anchor" href="#_2、创建两个域名的nginx配置文件" aria-hidden="true">#</a> 2、创建两个域名的nginx配置文件</h2>
<ul>
<li>test1域名</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> /etc/nginx/conf.d/test1.conf

<span class="token comment">#内容如下</span>
server <span class="token punctuation">{</span>

	listen	<span class="token number">80</span><span class="token punctuation">;</span>
	<span class="token comment">#域名1</span>
	server_name	test1.top<span class="token punctuation">;</span>
	<span class="token comment"># 支持中文的参数</span>
	charset utf-8<span class="token punctuation">;</span>

	location / <span class="token punctuation">{</span>
		root /www/test1/<span class="token punctuation">;</span>
		index index.html<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>test2域名</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> /etc/nginx/conf.d/test2.conf

<span class="token comment">#内容如下</span>
server <span class="token punctuation">{</span>

	listen	<span class="token number">80</span><span class="token punctuation">;</span>
	<span class="token comment">#域名1</span>
	server_name	test2.top<span class="token punctuation">;</span>
	<span class="token comment"># 支持中文的参数</span>
	charset utf-8<span class="token punctuation">;</span>

	location / <span class="token punctuation">{</span>
		root /www/test2/<span class="token punctuation">;</span>
		index index.html<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、创建两个域名的index-html访问页面" tabindex="-1"><a class="header-anchor" href="#_3、创建两个域名的index-html访问页面" aria-hidden="true">#</a> 3、创建两个域名的index.html访问页面</h2>
<ul>
<li>test1 的 index.html</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 创建test1和test2目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /www/<span class="token punctuation">{</span>test1,test2<span class="token punctuation">}</span>

<span class="token comment"># 创建完之后，写入数据到test1/index.html中</span>
<span class="token function">cat</span> <span class="token operator">></span> /www/test1/index.html <span class="token operator">&lt;&lt;</span> EOF
<span class="token operator">></span> <span class="token operator">&lt;</span>meta <span class="token assign-left variable">charset</span><span class="token operator">=</span>utf-<span class="token operator"><span class="token file-descriptor important">8</span>></span>
<span class="token operator">></span> <span class="token operator">&lt;</span>H<span class="token operator"><span class="token file-descriptor important">2</span>></span> test1 页面测试 <span class="token operator">&lt;</span>/H<span class="token operator"><span class="token file-descriptor important">2</span>></span>
<span class="token operator">></span> EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>test2 的 index.html</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 给test2域名写入index.html页面数据</span>

<span class="token function">cat</span> <span class="token operator">></span> /www/test2/index.html <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
&lt;meta charset=utf-8>
&lt;H2> test2 页面测试 &lt;/H2>
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、检查nignx配置是否有误-并-重启nginx服务" tabindex="-1"><a class="header-anchor" href="#_4、检查nignx配置是否有误-并-重启nginx服务" aria-hidden="true">#</a> 4、检查nignx配置是否有误 并 重启nginx服务</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 检查nignx配置是否有误</span>
nginx <span class="token parameter variable">-t</span>

<span class="token comment"># 重启nginx服务</span>
systemctl restart nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、页面访问两个域名" tabindex="-1"><a class="header-anchor" href="#_5、页面访问两个域名" aria-hidden="true">#</a> 5、页面访问两个域名</h2>
<blockquote>
<p>test1.top<br>
teset2.top</p>
</blockquote>
<p>可以看到分别两个页面，这样多域名网站服务部署成功。</p>
<h1 id="五、部署多端口网站服务" tabindex="-1"><a class="header-anchor" href="#五、部署多端口网站服务" aria-hidden="true">#</a> 五、部署多端口网站服务</h1>
<h2 id="_1、首先准备两个端口、index路径、nginx配置文件-一个即可" tabindex="-1"><a class="header-anchor" href="#_1、首先准备两个端口、index路径、nginx配置文件-一个即可" aria-hidden="true">#</a> 1、首先准备两个端口、index路径、nginx配置文件（一个即可）</h2>
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
<h2 id="_2、创建两个port的nginx配置文件-一个配置中" tabindex="-1"><a class="header-anchor" href="#_2、创建两个port的nginx配置文件-一个配置中" aria-hidden="true">#</a> 2、创建两个port的nginx配置文件（一个配置中）</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> /etc/nginx/conf.d/port.conf

<span class="token comment"># 81 端口配置</span>
server <span class="token punctuation">{</span>

	listen <span class="token number">81</span><span class="token punctuation">;</span>
	server_name localhost<span class="token punctuation">;</span>
	<span class="token comment"># 支持中文的参数</span>
	charset utf-8<span class="token punctuation">;</span>
	
	location / <span class="token punctuation">{</span>
		root /www/81/<span class="token punctuation">;</span>
		index index.html<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token comment"># 82 端口配置</span>
server <span class="token punctuation">{</span>

	listen <span class="token number">82</span><span class="token punctuation">;</span>
	server_name localhost<span class="token punctuation">;</span>
        <span class="token comment"># 支持中文的参数</span>
        charset utf-8<span class="token punctuation">;</span>

	location / <span class="token punctuation">{</span>
		root /www/82/<span class="token punctuation">;</span>
		index index.html<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、创建两个端口的index-html页面" tabindex="-1"><a class="header-anchor" href="#_3、创建两个端口的index-html页面" aria-hidden="true">#</a> 3、创建两个端口的index.html页面</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 创建目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /www/<span class="token punctuation">{</span><span class="token number">81,82</span><span class="token punctuation">}</span>

<span class="token comment"># 创建81和82的index页面测试数据</span>
<span class="token function">cat</span> <span class="token operator">></span> /www/81/index.html <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
&lt;meta charset=utf-8>
&lt;H1>我是81，欢迎来到我的页面&lt;/H1>
EOF</span>

<span class="token function">cat</span> <span class="token operator">></span> /www/82/index.html <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
&lt;meta charset=utf-8>
&lt;H1>我是82，欢迎来到我的页面&lt;/H1>
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、检查nignx配置是否有误-并-重启nginx服务-1" tabindex="-1"><a class="header-anchor" href="#_4、检查nignx配置是否有误-并-重启nginx服务-1" aria-hidden="true">#</a> 4、检查nignx配置是否有误 并 重启nginx服务</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 检查nignx配置是否有误</span>
nginx <span class="token parameter variable">-t</span>

<span class="token comment"># 重启nginx服务</span>
systemctl restart nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、页面访问两个端口" tabindex="-1"><a class="header-anchor" href="#_5、页面访问两个端口" aria-hidden="true">#</a> 5、页面访问两个端口</h2>
<p>ip:端口</p>
<ul>
<li>ip:81</li>
</ul>
<p><img src="https://img-blog.csdnimg.cn/e5da2c741e584663a99a8e740a726dcb.png" alt="在这里插入图片描述" loading="lazy">- ip:82</p>
<figure><img src="https://img-blog.csdnimg.cn/2d72f6ce84874f2c9695aa0ab06f1dcf.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_5-1-页面访问两个端口-各添加一个jpg页面" tabindex="-1"><a class="header-anchor" href="#_5-1-页面访问两个端口-各添加一个jpg页面" aria-hidden="true">#</a> 5.1 页面访问两个端口 --&gt; 各添加一个jpg页面</h3>
<p>到网上随便照两张图，分别放到<code v-pre>/www/81/</code>下和<code v-pre>/www/82/</code>下；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 81端口的图片</span>
<span class="token function">wget</span> <span class="token parameter variable">-O</span> /www/81/81.jpg https://picnew12.photophoto.cn/20180728/81jianjunjieqizhiyishuzizitisheji-30355854_1.jpg

<span class="token comment"># 82端口的图片</span>
<span class="token function">wget</span> <span class="token parameter variable">-O</span> /www/82/82.jpg https://img95.699pic.com/xsj/0v/2f/k8.jpg%21/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里添加完成之后，不需要重启nginx，直接在页面访问 <code v-pre>ip:端口/图片名</code></p>
<ul>
<li>81 服务器（ip:81/81.jpg）</li>
</ul>
<figure><img src="https://img-blog.csdnimg.cn/358d428b77e2448c835017eae26ae072.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>82 服务器（ip:82/82.jpg）</li>
</ul>
<figure><img src="https://img-blog.csdnimg.cn/9c13fd1d363c45d3b57bc45636267748.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_5-2-页面访问两个端口-各添加一个txt资源" tabindex="-1"><a class="header-anchor" href="#_5-2-页面访问两个端口-各添加一个txt资源" aria-hidden="true">#</a> 5.2 页面访问两个端口 --&gt; 各添加一个txt资源</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">"我又来测试了，这里是 81 的一个测试页面"</span> <span class="token operator">></span> /www/81/81.txt
<span class="token builtin class-name">echo</span> <span class="token string">"我也又来测试了，这是是 82 的一个测试页面"</span> <span class="token operator">></span> /www/82/82.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里添加完成之后，同样也不需要重启nginx，直接在页面访问 <code v-pre>ip:端口/txt名</code></p>
<ul>
<li>81 服务器（ip:81/81.txt）</li>
</ul>
<figure><img src="https://img-blog.csdnimg.cn/7f7eaa31241444638538ecc108e1f111.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>82 服务器（ip:82/82.txt）</li>
</ul>
<figure><img src="https://img-blog.csdnimg.cn/329f14e64c264e948e328624feb2995b.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="到这里就完成了nginx部署一个网站及多个域名的网站和多个端口的网站" tabindex="-1"><a class="header-anchor" href="#到这里就完成了nginx部署一个网站及多个域名的网站和多个端口的网站" aria-hidden="true">#</a> 到这里就完成了nginx部署一个网站及多个域名的网站和多个端口的网站</h1>
<h2 id="六、相关文章" tabindex="-1"><a class="header-anchor" href="#六、相关文章" aria-hidden="true">#</a> 六、相关文章</h2>
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
<td><a href="https://liucy.blog.csdn.net/article/details/133928000" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/133928000<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>【Linux】环境下部署Nginx服务 - 二进制部署方式</td>
<td><a href="https://liucy.blog.csdn.net/article/details/132145067" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/132145067<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>nginx配置负载均衡--实战项目（适用于轮询、加权轮询、ip_hash）</td>
<td><a href="https://liucy.blog.csdn.net/article/details/133986013" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/133986013<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>nginx快速部署一个网站服务 + 多域名 + 多端口</td>
<td><a href="https://liucy.blog.csdn.net/article/details/133986102" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/133986102<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
</div></template>


