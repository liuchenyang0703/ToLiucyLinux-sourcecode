<template><div><h1 id="docker-docker-nginx部署前端项目" tabindex="-1"><a class="header-anchor" href="#docker-docker-nginx部署前端项目" aria-hidden="true">#</a> Docker | Docker+Nginx部署前端项目</h1>
<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2>
<p>大家好，我是Leo哥🫣🫣🫣，<a href="https://gaoziman.gitee.io/blogs/middleware/Docker/docker-deploy-springboot-project.html" target="_blank" rel="noopener noreferrer">这篇文章<ExternalLinkIcon/></a>中，我们已经学习了如何通过Docker来部署我们SpringBoot项目，那么我们这篇文章教大家如何通过Docker + Nginx + Dockerfile的方式去部署我的前端项目。好了，话不多说让我们开始吧😎😎😎。</p>
<h2 id="_2-概述" tabindex="-1"><a class="header-anchor" href="#_2-概述" aria-hidden="true">#</a> 2.概述</h2>
<p>其实部署前端项目的方式有很多种，其实也可以Docker安装Nginx的方式，把前端dist目录上传即可，这种是比较常规的一种方式。</p>
<p>今天我们为大家介绍另一种方式，再Dockefile去构建我们的镜像。</p>
<h2 id="_3-相关配置安装" tabindex="-1"><a class="header-anchor" href="#_3-相关配置安装" aria-hidden="true">#</a> 3.相关配置安装</h2>
<p>首先我们先准备一个目录，我这里习惯在/opt下面创建一个software目录，然后在这个目录里面做一些安装目录的配置。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> /opt/software/blog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后进入这个文件中开始准备配置。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131903345.png" alt="image-20231213190350292" tabindex="0" loading="lazy"><figcaption>image-20231213190350292</figcaption></figure>
<h3 id="_3-1-配置dockerfile" tabindex="-1"><a class="header-anchor" href="#_3-1-配置dockerfile" aria-hidden="true">#</a> 3.1 配置Dockerfile</h3>
<p>在blog目录下面创建一个Dockerfile。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> Dockerfile	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后里面编写如下配置。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>FROM nginx:latest
 
COPY dist/ /usr/share/nginx/html/
COPY default.conf /etc/nginx/conf.d/default.conf

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>FROM nginx:latest</code>: 命令的意思该镜像是基于 nginx:latest 镜像而构建的。</li>
<li><code v-pre>COPY dist/ /usr/share/nginx/html/ </code>:命令的意思是将项目根目录下 dist 文件夹下的所有文件复制到镜像中 <code v-pre>/usr/share/nginx/html/ </code>目录下。</li>
</ul>
<p>这里镜像中的目录我们不要动，但需要保证我们项目的打包目录是<code v-pre>dist/</code>，或者自定义到你打包的目录下。</p>
<ul>
<li><code v-pre>COPY default.conf /etc/nginx/conf.d/default.conf</code> 命令的意思是将 Nginx 目录下的 default.conf 复制到 etc/nginx/conf.d/default.conf，用本地的 default.conf 配置来替换 Nginx 镜像里的默认配置。</li>
</ul>
<p>这里镜像中的目录我们不要动，但需要保证我们编写的文件名也为<code v-pre>default.conf</code>，或者与你自己写的文件名对应即可。</p>
<h3 id="_3-2-编写default-conf" tabindex="-1"><a class="header-anchor" href="#_3-2-编写default-conf" aria-hidden="true">#</a> 3.2 编写default.conf</h3>
<p>下面的配置直接照抄就好，特别注意，监听的端口号并不需要动，这里的 <strong>80</strong>端口指的是容器的端口，最后我们会将容器的端口映射到我们宿主服务器的端口，比如映射到80端口。</p>
<p>然后 注意修改为自己的服务器IP地址或者是自己的虚拟机IP</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    listen  <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:80<span class="token punctuation">;</span>
    server_name  <span class="token number">192.168</span>.74.102<span class="token punctuation">;</span>
    <span class="token comment">#charset koi8-r;</span>
    <span class="token comment">#access_log  /var/log/nginx/host.access.log  main;</span>
    location / <span class="token punctuation">{</span>
        root    /usr/share/nginx/html<span class="token punctuation">;</span> 
        index  index.html index.htm<span class="token punctuation">;</span>
        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">#error_page  404              /404.html;</span>

    <span class="token comment"># redirect server error pages to the static page /50x.html</span>
    <span class="token comment">#</span>
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        root   /usr/share/nginx/html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-前端dist目录" tabindex="-1"><a class="header-anchor" href="#_3-3-前端dist目录" aria-hidden="true">#</a> 3.3 前端dist目录</h3>
<p>这里再把你的前端通过bulid命令打包之后的dist目录上传到当前目录下，也就是blog目录下。</p>
<p><strong>注意：</strong> 我们的dist目录，default.conf和Dockefile都在同一个目录下。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131911769.png" alt="image-20231213191100702" tabindex="0" loading="lazy"><figcaption>image-20231213191100702</figcaption></figure>
<h3 id="_3-4-开始制作镜像" tabindex="-1"><a class="header-anchor" href="#_3-4-开始制作镜像" aria-hidden="true">#</a> 3.4 开始制作镜像</h3>
<p>接下来我们就可以在当前blog目录进行构建镜像了。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> blog <span class="token builtin class-name">.</span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>docker build -t</code>我们并不需要动，</p>
<p>后面的test是我们构建的镜像的名称，<code v-pre>.</code>代表需要进行构建的代码的存放位置，这里是<code v-pre>.</code>是因为我当期所在目录就是<code v-pre>/opt/software/blog</code>，并且我的项目的三个文件就位于<code v-pre>/opt/software/blog</code>目录下。</p>
<p>如果我们此时位于其他目录，当前目录下没有要进行镜像打包的文件，那就需要更改路径。</p>
<p>比如：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> blog /opt/software/blog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功之后，我们可以通过命令查看一下我们生成好的镜像。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131918760.png" alt="image-20231213191825735" tabindex="0" loading="lazy"><figcaption>image-20231213191825735</figcaption></figure>
<h3 id="_3-5-运行镜像" tabindex="-1"><a class="header-anchor" href="#_3-5-运行镜像" aria-hidden="true">#</a> 3.5 运行镜像</h3>
<p>镜像生成完毕之后，我们就可以把我们的镜像运行在容器中了。</p>
<p>通过以下命令来运行容器。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">--name</span> blog blog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>-d 后台方式运行</li>
<li>-p 80:80 端口映射，将宿主的8888端口映射到容器的80端口</li>
<li>–name 容器名 镜像名</li>
</ul>
<p>然后我们可以使用<code v-pre>docker ps</code>查看当前正在运行的容器</p>
<p>并且使用IP地址和端口号访问当前的项目</p>
<p><strong>注意</strong></p>
<p>上面我们进行了端口映射，那就需要在服务器中开启要使用的端口，</p>
<p>我们可以在云服务器中的安全组进行设置。</p>
<p>或者使用命令设置</p>
<p><strong>查看已开放端口命令：firewall-cmd --list-all</strong></p>
<ul>
<li>查看防火墙状态：active (running) 即是开启状态</li>
</ul>
<p>systemctl status firewalld</p>
<ul>
<li>查看已开发端口命令：firewall-cmd --list-all</li>
<li>新增防火墙开放端口：</li>
</ul>
<p>firewall-cmd --zone=public --add-port=3306/tcp --permanent</p>
<ul>
<li>开放端口后需要重新加载防火墙：</li>
</ul>
<p>firewall-cmd --reload</p>
<p><strong>一些相关指令</strong></p>
<p>如果我们不再需要这个容器和镜像，</p>
<p>首先需要先停止这个容器，然后在移出容器和镜像。</p>
<p>首先拿<code v-pre>docker ps</code>找到指定容器的ID，</p>
<p>使用<code v-pre>docker stop [ID]</code> 停止容器</p>
<p><code v-pre>docker rm [ID]</code> 移除容器</p>
<p>然后拿<code v-pre>docker images</code>查看已存在的镜像ID，</p>
<p>使用<code v-pre>docker rmi [ID]</code> 移除镜像</p>
<p>可能我们的docker没有设置开机启动：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl start <span class="token function">docker</span> <span class="token comment"># 启动docker</span>
systemctl status <span class="token function">docker</span> <span class="token comment"># 查看docker的运行状态</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>最后我们启动命令，运行容器。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131921713.png" alt="image-20231213192118674" tabindex="0" loading="lazy"><figcaption>image-20231213192118674</figcaption></figure>
<p>可以看到执行，成功，然后通过docker ps 查看已经运行的容器。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131921264.png" alt="image-20231213192152227" tabindex="0" loading="lazy"><figcaption>image-20231213192152227</figcaption></figure>
<p>可以看到我们的容器已经成功运行了。</p>
<p>下面我们打开浏览器，通过我们的IP进行访问，看看效果。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131932862.png" alt="image-20231213193239722" tabindex="0" loading="lazy"><figcaption>image-20231213193239722</figcaption></figure>
<p>可以看到我们的前端项目已经成功部署上去了。大功告成!!!</p>
<h2 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结" aria-hidden="true">#</a> 4.总结</h2>
<p>以上便是本文的全部内容，本人才疏学浅，文章有什么错误的地方，欢迎大佬们批评指正！我是<strong>Leo</strong>，一个在互联网行业的小白，立志成为更好的自己。</p>
<p>如果你想了解更多关于<strong>Leo</strong>，可以关注公众号-程序员Leo，后面文章会首先同步至公众号。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131933627.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


