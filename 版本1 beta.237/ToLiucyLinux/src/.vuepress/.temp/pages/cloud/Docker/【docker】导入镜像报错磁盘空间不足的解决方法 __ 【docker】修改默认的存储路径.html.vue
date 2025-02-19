<template><div><p>@[toc]</p>
<h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1>
<p>安装docker时，默认的安装位置是/var/lib/docker。<br>
可以用docker info 查看 镜像存放的目录</p>
<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> load <span class="token parameter variable">-i</span> nginx.tar

<span class="token comment">#报错</span>
no space left device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>报错是因为该目录没有磁盘空间</p>
<h2 id="解决方法docker修改默认的存储路径" tabindex="-1"><a class="header-anchor" href="#解决方法docker修改默认的存储路径" aria-hidden="true">#</a> 解决方法docker修改默认的存储路径</h2>
<p>先看看哪块有空间</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">df</span> <span class="token parameter variable">-Th</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看出/data/目录下是有空间的，我们可以将docker默认存储路径改到/data/下；<br>
当然还有一个很简便的，删除docker默认目录下的多余的文件或多余的容器、镜像来释放空间。</p>
<h2 id="二进制安装的docker修改默认的存储路径" tabindex="-1"><a class="header-anchor" href="#二进制安装的docker修改默认的存储路径" aria-hidden="true">#</a> 二进制安装的docker修改默认的存储路径</h2>
<h3 id="第一种-docker没有任何服务存在" tabindex="-1"><a class="header-anchor" href="#第一种-docker没有任何服务存在" aria-hidden="true">#</a> 第一种，docker没有任何服务存在</h3>
<p>这种就很好解决；<br>
1、配置 /usr/lib/systemd/system/docker.service</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> /usr/lib/systemd/system/docker.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>找到ExecStart这行，将原来的注释掉，更改成如下的形式</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/dockerd  <span class="token parameter variable">--graph</span><span class="token operator">=</span>/data/docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2、保存退出，重启docker</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>

<span class="token comment">#查看是否生效</span>
<span class="token function">docker</span> info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/0b6d7069162d4f51a7b399d2a96c5288.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#docker存储目录已经变了，然后再次导入镜像</span>
<span class="token function">docker</span> load <span class="token parameter variable">-i</span> nginx.tar
<span class="token comment">#就不会报错了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第二种-docker里还有服务和数据存在" tabindex="-1"><a class="header-anchor" href="#第二种-docker里还有服务和数据存在" aria-hidden="true">#</a> 第二种，docker里还有服务和数据存在</h3>
<p>1、停止docker服务</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl stop docker.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、在挂载的磁盘目录下创建存放镜像目录</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、迁移镜像文件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mv</span> /var/lib/docker /data/docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4、配置 /usr/lib/systemd/system/docker.service</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> /usr/lib/systemd/system/docker.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>找到ExecStart这行，将原来的注释掉，更改成如下的形式</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/dockerd  <span class="token parameter variable">--graph</span><span class="token operator">=</span>/data/docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>5、保存退出，重启docker</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、启动成功后，再确认之前的镜像和容器是否还在</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> images

<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2>
<p>由于更换了docker 目录，以前下载的镜像需要转移到新目录下，建议直接删除原来的镜像，重新下载。所以这个建议在刚开始下载docker的时候就进行修改,避免后续的问题</p>
<h2 id="yum安装的docker修改默认的存储路径" tabindex="-1"><a class="header-anchor" href="#yum安装的docker修改默认的存储路径" aria-hidden="true">#</a> yum安装的docker修改默认的存储路径</h2>
<p>有两处地方可以修改，第一个/usr/lib/systemd/system/docker.service，第二个/etc/docker/daemon.json</p>
<h3 id="第一种方法-修改-usr-lib-systemd-system-docker-service-graph方式" tabindex="-1"><a class="header-anchor" href="#第一种方法-修改-usr-lib-systemd-system-docker-service-graph方式" aria-hidden="true">#</a> 第一种方法：修改/usr/lib/systemd/system/docker.service - --graph方式</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> /usr/lib/systemd/system/docker.service

<span class="token comment">#找到ExecStart，可以在合适的位置添加--graph=要放的路径</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/34f73461340948a890b45e58c2e38a55.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>修改完成之后重新加载docker，并重启docker</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后docker info查看路径；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> info

<span class="token comment">#找Docker Root Dir</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/3cacc5f7442d46a0a1d2fea2381a133d.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>看到修改到了自己想修改的目录，则修改成功；</p>
<h3 id="第二种方法-修改-etc-docker-daemon-json-graph方式" tabindex="-1"><a class="header-anchor" href="#第二种方法-修改-etc-docker-daemon-json-graph方式" aria-hidden="true">#</a> 第二种方法：修改/etc/docker/daemon.json - graph方式</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#进入/etc/docker/daemon.json</span>
<span class="token function">vim</span> /etc/docker/daemon.json

<span class="token comment">#可以看到里面是空的，我们自己来添加就好了，graph后面是你的路径</span>

<span class="token punctuation">{</span>
<span class="token string">"graph"</span><span class="token builtin class-name">:</span> <span class="token string">"/newpath/docker"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/613a5a62713645c8b369e3c170f51d70.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>修改完成之后重新加载docker，并重启docker</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后docker info查看路径；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> info

<span class="token comment">#找Docker Root Dir</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/3cacc5f7442d46a0a1d2fea2381a133d.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>看到修改到了自己想修改的目录，则修改成功；</p>
<h3 id="第三种方法-同样修改-usr-lib-systemd-system-docker-service-data-root方式-支持最新版docker" tabindex="-1"><a class="header-anchor" href="#第三种方法-同样修改-usr-lib-systemd-system-docker-service-data-root方式-支持最新版docker" aria-hidden="true">#</a> 第三种方法：同样修改/usr/lib/systemd/system/docker.service - --data-root方式（支持最新版docker）</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> /usr/lib/systemd/system/docker.service

<span class="token comment">#找到ExecStart，可以在合适的位置添加--data-root=要放的路径</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/8fdbd249e8d24efd838401c0155518b4.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>修改完成之后重新加载docker，并重启docker</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后docker info查看路径；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> info

<span class="token comment">#找Docker Root Dir</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/75ee4b58ba214df7a9953e2d0f676ccd.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>看到修改到了自己想修改的目录，则修改成功；</p>
<h3 id="第四种方法-同样修改-etc-docker-daemon-json-data-root方式-支持最新版docker" tabindex="-1"><a class="header-anchor" href="#第四种方法-同样修改-etc-docker-daemon-json-data-root方式-支持最新版docker" aria-hidden="true">#</a> 第四种方法：同样修改/etc/docker/daemon.json - data-root方式（支持最新版docker）</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#进入/etc/docker/daemon.json</span>
<span class="token function">vim</span> /etc/docker/daemon.json

<span class="token comment">#如果里面是空的加一个大括号和data-root就好了，graph后面是你要修改到的目标路径，如下；</span>
<span class="token comment">#{</span>
<span class="token comment">#"data-root": "/data/docker"</span>
<span class="token comment">#}</span>

<span class="token comment">#如果有其他配置，那么就按照下面的格式配置，切记添加的时候要给上面一行的结尾加一个逗号,否则会报错；graph后面是你要修改到的目标路径</span>
<span class="token punctuation">{</span>
<span class="token string">"insecure-registries"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">"0.0.0.0/0"</span><span class="token punctuation">]</span>,
<span class="token string">"registry-mirrors"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">"https://zbkz1bx2.mirror.aliyuncs.com"</span><span class="token punctuation">]</span>,
<span class="token string">"data-root"</span><span class="token builtin class-name">:</span> <span class="token string">"/data/docker"</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/a478ee14b7d74553b389351f0c448112.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>修改完成之后重新加载docker，并重启docker</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后docker info查看路径；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> info

<span class="token comment">#找Docker Root Dir</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/d97f834318884fa6ac4d3bbe3cd4fcff.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>看到修改到了自己想修改的目录，则修改成功；</p>
<h2 id="注意-1" tabindex="-1"><a class="header-anchor" href="#注意-1" aria-hidden="true">#</a> 注意</h2>
<p>由于更换了docker 目录，以前下载的镜像需要转移到新目录下，建议直接删除原来的镜像，重新下载。所以这个建议在刚开始下载docker的时候就进行修改,避免后续的问题</p>
<h1 id="如果里面有需要的数据将-var-lib-docker移动到目录路径即可。" tabindex="-1"><a class="header-anchor" href="#如果里面有需要的数据将-var-lib-docker移动到目录路径即可。" aria-hidden="true">#</a> * 如果里面有需要的数据将/var/lib/docker移动到目录路径即可。</h1>
</div></template>


