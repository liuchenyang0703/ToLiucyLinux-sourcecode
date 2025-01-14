<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">CSDN博客专家<ExternalLinkIcon/></a><br>
  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<h2 id="一、什么是-podman" tabindex="-1"><a class="header-anchor" href="#一、什么是-podman" aria-hidden="true">#</a> 一、什么是 podman？</h2>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161447549.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>  Podman 是一个开源项目，可在大多数 Linux 平台上使用，并位于GitHub 上。Podman 是一个无守护进程的容器引擎，用于在 Linux 系统上开发、管理和运行 Open Container Initiative (OCI) 容器和容器映像。Podman 提供了一个与 Docker 兼容的命令行前端，它可以简单地为 Docker cli ，alias docker=podman。Podman 还提供了一个套接字激活的 REST API 服务，以允许远程应用程序启动按需容器。此 REST API 还支持 Docker API，允许 docker-py 和 docker-compose 的用户与 Podman 作为服务进行交互。</p>
<p>  Podman 控制下的容器可以由 root 或非特权用户运行。Podman 使用libpod库管理整个容器生态系统，包括 pod、容器、容器映像和容器卷。Podman 专注于帮助您维护和修改 OCI 容器镜像的所有命令和功能，例如拉取和标记。它允许您在生产环境中创建、运行和维护从这些映像创建的容器。</p>
<p>  Podman 服务仅在 Linux 平台上运行，但 podman 远程 REST API 客户端存在于 Mac 和 Windows 平台上，并且可以通过 ssh 与运行在 Linux 机器或 VM 上的 Podman 服务进行通信。Mac 客户端。</p>
<h2 id="二、部署-podman" tabindex="-1"><a class="header-anchor" href="#二、部署-podman" aria-hidden="true">#</a> 二、部署 podman</h2>
<blockquote>
<p>正常 centos Stream 10里面是自带的有podman服务的；<font color=red>目前只知道 centos Stream8-10 系统会自带podman服务，其他系统没安装过，可自行查看<code v-pre>podman --version</code></font>。</p>
</blockquote>
<p>离线安装：<a href="https://download.csdn.net/download/liu_chen_yang/89525105" target="_blank" rel="noopener noreferrer">podman 离线安装包<ExternalLinkIcon/></a></p>
<hr>
<p><strong>Podman 在 CentOS 8 和 Stream 的 AppStream 存储库中可用，可直接进行yum安装。</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 安装podman</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">podman</span>

<span class="token comment"># 查看podman版本号</span>
<span class="token function">podman</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161447226.png" alt="image-20240708155326314" tabindex="0" loading="lazy"><figcaption>image-20240708155326314</figcaption></figure>
<p>这样就安装成功了；</p>
<ul>
<li><strong>启动服务并配置开机自启</strong></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 设置开机自启</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">podman</span>
<span class="token comment"># 启动podman服务</span>
systemctl start <span class="token function">podman</span>
<span class="token comment"># 重启podman服务</span>
systemctl restart <span class="token function">podman</span>
<span class="token comment"># 停止podman服务</span>
systemctl stop <span class="token function">podman</span>
<span class="token comment"># 查看podman服务状态（）</span>
systemctl status <span class="token function">podman</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、podman-参数" tabindex="-1"><a class="header-anchor" href="#三、podman-参数" aria-hidden="true">#</a> 三、podman 参数</h2>
<p>podman常用参数和docker常用参数都是一样的；这里举例几个就行，具体的可以查看docker的命令参数：<a href="https://liucy.blog.csdn.net/article/details/123842609" target="_blank" rel="noopener noreferrer">linux（centos）中部署docker（步骤超全，含带一些发展史和一些概念）<ExternalLinkIcon/></a>，查看后面的<font color=red>docker镜像管理、docker容器管理、docker运行容器命令</font>。</p>
<h3 id="_1、podman-镜像管理" tabindex="-1"><a class="header-anchor" href="#_1、podman-镜像管理" aria-hidden="true">#</a> 1、podman 镜像管理</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#列出所有的镜像</span>
<span class="token punctuation">[</span>root@podman ~<span class="token punctuation">]</span><span class="token comment"># podman images</span>
REPOSITORY   TAG       IMAGE ID   CREATED   SIZE
REPOSITORY：表示镜像的仓库源
TAG：镜像的标签
IMAGE ID：镜像ID
CREATED：镜像创建时间
SIZE：镜像大小
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>命令</th>
<th>作用</th>
<th>举例</th>
<th>选项</th>
</tr>
</thead>
<tbody>
<tr>
<td>podman search</td>
<td>搜索镜像</td>
<td>podman search busybox</td>
<td>-f 按条件过滤</td>
</tr>
<tr>
<td>podman pull</td>
<td>拉取镜像</td>
<td>podman pull busybox:latest</td>
<td></td>
</tr>
<tr>
<td>podman push</td>
<td>推送镜像到仓库</td>
<td>podman push busybox:latest</td>
<td></td>
</tr>
<tr>
<td>podman tag</td>
<td>为镜像修改或制作标签</td>
<td>podman tag busybox:latest busybox:v1</td>
<td></td>
</tr>
<tr>
<td>podman rmi</td>
<td>删除镜像</td>
<td>podman rmi busybox:v1</td>
<td></td>
</tr>
<tr>
<td>podman save</td>
<td>将镜像保存为tar包</td>
<td>podman save -o centos7.tar centos:7</td>
<td>-o 指定生成tar包名称</td>
</tr>
<tr>
<td>podman load</td>
<td>将tar包保存的镜像导入</td>
<td>podman load -i centos.tar</td>
<td>-i 指定读取的tar包名称</td>
</tr>
<tr>
<td>podman import</td>
<td>通过一个tar包创建镜像</td>
<td>podman import centos-7.tar.gz centos7:v1</td>
<td></td>
</tr>
<tr>
<td>podman histroy</td>
<td>查看镜像创建的历史</td>
<td>podman history centos:7</td>
<td></td>
</tr>
</tbody>
</table>
<p>podman中还提供了专门管理镜像的子命令podman image,用法与podman命令类似。</p>
<table>
<thead>
<tr>
<th>podman image 命令</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>podman images</td>
<td>列出所有镜像</td>
</tr>
<tr>
<td>podman image ls</td>
<td>列出所有镜像</td>
</tr>
<tr>
<td>podman image pull</td>
<td>拉取镜像</td>
</tr>
<tr>
<td>podman image load</td>
<td>导入镜像</td>
</tr>
<tr>
<td>podman image rm</td>
<td>删除镜像</td>
</tr>
<tr>
<td>podman image inspect</td>
<td>查看镜像的详细信息</td>
</tr>
<tr>
<td>podman image histroy</td>
<td>查看镜像的创建记录</td>
</tr>
<tr>
<td>podman image push</td>
<td>拉取镜像</td>
</tr>
<tr>
<td>podman image save</td>
<td>导出镜像</td>
</tr>
<tr>
<td>podman image tag</td>
<td>设置标签（修改版本）</td>
</tr>
<tr>
<td>podman image prune</td>
<td>删除未使用的镜像</td>
</tr>
<tr>
<td>podman image build</td>
<td>podmanfile构建镜像</td>
</tr>
</tbody>
</table>
<h3 id="_2、podman容器管理" tabindex="-1"><a class="header-anchor" href="#_2、podman容器管理" aria-hidden="true">#</a> 2、podman容器管理</h3>
<table>
<thead>
<tr>
<th>podman container命令</th>
<th>说明</th>
<th>举例</th>
<th>选项</th>
</tr>
</thead>
<tbody>
<tr>
<td>podman ps -a</td>
<td>查看所有的容器</td>
<td></td>
<td></td>
</tr>
<tr>
<td>docekr ps</td>
<td>查看所有的正在运行的容器</td>
<td></td>
<td></td>
</tr>
<tr>
<td>podman container ls</td>
<td>查看运行的容器</td>
<td>podman container ls</td>
<td>-a/-q</td>
</tr>
<tr>
<td>podman container create</td>
<td>创建容器但不运行</td>
<td>podman container create nginx</td>
<td></td>
</tr>
<tr>
<td>podman container start</td>
<td>启动容器</td>
<td>podman start nginx</td>
<td></td>
</tr>
<tr>
<td>podman container stop</td>
<td>关闭容器</td>
<td>podman stop nginx</td>
<td></td>
</tr>
<tr>
<td>podman container restart</td>
<td>重启容器</td>
<td>podman restart nginx</td>
<td></td>
</tr>
<tr>
<td>podman container inspect</td>
<td>查看容器的信息</td>
<td>podman inspect nginx</td>
<td></td>
</tr>
<tr>
<td>podman container rm</td>
<td>删除容器</td>
<td>podman rm -f nginx</td>
<td>-f强制删除</td>
</tr>
<tr>
<td>podman container rename</td>
<td>给容器重命名</td>
<td>podman rename nginx nginx2</td>
<td></td>
</tr>
<tr>
<td>podman container prune</td>
<td>删除没有运行的容器</td>
<td></td>
<td></td>
</tr>
<tr>
<td>podman container pause</td>
<td>暂停容器运行(挂起)</td>
<td></td>
<td></td>
</tr>
<tr>
<td>podman container unpause</td>
<td>继续运行容器</td>
<td></td>
<td></td>
</tr>
<tr>
<td>podman container port</td>
<td>列出端口映射</td>
<td>podman port nginx2</td>
<td></td>
</tr>
<tr>
<td>podman container logs</td>
<td>获取容器日志信息</td>
<td>podman logs nginx2</td>
<td></td>
</tr>
<tr>
<td>podman container kill</td>
<td>杀死正在运行的容器</td>
<td>podman kill nginx2</td>
<td></td>
</tr>
<tr>
<td>podman container stats</td>
<td>查看容器资源使用情况</td>
<td>podman stats nginx2</td>
<td></td>
</tr>
<tr>
<td>podman container top</td>
<td>查看容器的进程</td>
<td>podman top nginx2</td>
<td></td>
</tr>
<tr>
<td>podman container diff</td>
<td>对比容器文件变化		podman diff nginx nginx2</td>
<td></td>
<td></td>
</tr>
<tr>
<td>podman container cp</td>
<td>容器与主机间文件复制</td>
<td>podman cp a.txt nginx:/home/</td>
<td></td>
</tr>
<tr>
<td>podman container exec</td>
<td>创建容器</td>
<td>podman exec -itd--name nginx nginx:v1创建容器并运行</td>
<td></td>
</tr>
<tr>
<td>podman container export</td>
<td>容器文件导出为tar</td>
<td>podman export nginx.tar nginx</td>
<td></td>
</tr>
<tr>
<td>podman container commit</td>
<td>提交容器变化为新镜像</td>
<td>podman commit nginx</td>
<td></td>
</tr>
<tr>
<td>podman container update</td>
<td>更新容器配置</td>
<td>podman update --restart=always nginx</td>
<td></td>
</tr>
<tr>
<td>podman container wait</td>
<td>阻塞容器</td>
<td></td>
<td></td>
</tr>
<tr>
<td>podman container run</td>
<td>运行一个podman容器</td>
<td>podman run -itd --name nginx nginx:v1</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="_3、podman运行容器命令" tabindex="-1"><a class="header-anchor" href="#_3、podman运行容器命令" aria-hidden="true">#</a> 3、podman运行容器命令</h3>
<p>podman container run命令是根据指定镜像创建一个容器并启动运行。如果本地没有该镜像，则从podman仓库中拉去镜像。所以<br>
podman container run = podman image pull +  podman container create + podman container start<br>
命令格式:podman container run [选项] 镜像名称|镜像ID  [command]<br>
常用选项:</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>解析</th>
</tr>
</thead>
<tbody>
<tr>
<td>-d</td>
<td>后台运行容器，返回容器ID，运行守护进程式容器</td>
</tr>
<tr>
<td>-i</td>
<td>以交互模式运行容器，通常与 -t 同时使用；</td>
</tr>
<tr>
<td>-t</td>
<td>为容器重新分配一个伪输入终端，通常与 -i 同时使用；</td>
</tr>
<tr>
<td>-P</td>
<td>随机映射端口，容器内部端口随机映射为主机端口</td>
</tr>
<tr>
<td>-p</td>
<td>指定端口映射， -p 主机端口:容器端口</td>
</tr>
<tr>
<td>- -expose</td>
<td>指定暴露端口或端口范围</td>
</tr>
<tr>
<td>- -name</td>
<td>指定生成容器的名称</td>
</tr>
<tr>
<td>-h</td>
<td>指定容器的主机名称</td>
</tr>
<tr>
<td>-v</td>
<td>映射容器外与容器内的目录</td>
</tr>
<tr>
<td>- -net</td>
<td>指定podman网络模式(bridge/host/none/container)</td>
</tr>
<tr>
<td>- -restart</td>
<td>指定是否开机自启</td>
</tr>
<tr>
<td>- -privileged</td>
<td>使用该参数，container内的root拥有真正的root权限。</td>
</tr>
<tr>
<td>- -dns</td>
<td>指定DNS服务器地址，默认与主机一致</td>
</tr>
<tr>
<td>-e</td>
<td>设置环境变量</td>
</tr>
<tr>
<td>- -env-file</td>
<td>从指定文件读取环境变量</td>
</tr>
</tbody>
</table>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token number">1</span>.运行交互式容器 
<span class="token punctuation">[</span>root@podman ~<span class="token punctuation">]</span><span class="token comment"># podman container run -it --name='centos-1' centos:7 /bin/bash</span>
<span class="token punctuation">[</span>root@3ad7e1a5e55f /<span class="token punctuation">]</span><span class="token comment">#</span>
直接退出，运行exit，容器会结束运行
<span class="token punctuation">[</span>root@podman ~<span class="token punctuation">]</span><span class="token comment"># podman container ls -a</span>
CONTAINER ID   IMAGE      COMMAND       CREATED          STATUS                     PORTS     NAMES
3ad7e1a5e55f   centos:7   <span class="token string">"/bin/bash"</span>   <span class="token number">39</span> seconds ago   Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">6</span> seconds ago             centos-1
可以使用podman container start命令启动容器
<span class="token punctuation">[</span>root@podman ~<span class="token punctuation">]</span><span class="token comment"># podman container start centos-1 </span>
centos-1
<span class="token punctuation">[</span>root@podman ~<span class="token punctuation">]</span><span class="token comment"># podman container ls -a</span>
CONTAINER ID   IMAGE      COMMAND       CREATED              STATUS         PORTS     NAMES
3ad7e1a5e55f   centos:7   <span class="token string">"/bin/bash"</span>   About a minute ago   Up <span class="token number">2</span> seconds             centos-1
运行容器，不结束容器退出
<span class="token punctuation">[</span>root@podman ~<span class="token punctuation">]</span><span class="token comment"># podman container run -it --name='centos-2' centos:7 /bin/bash</span>
<span class="token punctuation">[</span>root@764b82cb892f /<span class="token punctuation">]</span><span class="token comment">#（ctrl+pq）</span>

<span class="token number">2</span>.启动守护进程式容器
<span class="token punctuation">[</span>root@podman ~<span class="token punctuation">]</span><span class="token comment"># podman container run -d nginx:latest </span>
cef133be2d53c0d4921ceba34855e7dc250984191d10d3dfedf82195e9d85d3c
<span class="token punctuation">[</span>root@podman ~<span class="token punctuation">]</span><span class="token comment"># podman ps -a</span>
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS     NAMES
cef133be2d53   nginx:latest   <span class="token string">"/podman-entrypoint.…"</span>   <span class="token number">6</span> seconds ago   Up <span class="token number">5</span> seconds   <span class="token number">80</span>/tcp    relaxed_lichterman
764b82cb892f   centos:7       <span class="token string">"/bin/bash"</span>              <span class="token number">3</span> minutes ago   Up <span class="token number">3</span> minutes             centos-2
3ad7e1a5e55f   centos:7       <span class="token string">"/bin/bash"</span>              <span class="token number">5</span> minutes ago   Up <span class="token number">4</span> minutes             centos-1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、附加-修改podman-存储路径" tabindex="-1"><a class="header-anchor" href="#四、附加-修改podman-存储路径" aria-hidden="true">#</a> 四、附加：修改podman 存储路径</h2>
<p>podman和docker一样，默认都是存在与<code v-pre>/var/lib/</code>下的，一般镜像和容器都很大，可能会导致根磁盘空间占用过大，如果<code v-pre>/</code>根目录下空间满了，我们就要考虑给容器和镜像换位置；一般来说<code v-pre>/</code>根目录起初不会设置的很大，后续都会再加硬盘来扩容空间，所以这时候我们挂了一个磁盘，要把podman数据存储到比如<code v-pre>/data/podman</code>下，那么就如下操作就可以了；</p>
<h3 id="_1、podman-中没有数据修改存储路径" tabindex="-1"><a class="header-anchor" href="#_1、podman-中没有数据修改存储路径" aria-hidden="true">#</a> 1、podman 中没有数据修改存储路径</h3>
<ul>
<li>打开 Podman 配置文件</li>
</ul>
<p>没有就创建一个</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/containers/storage.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>编辑存储配置：</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>storage<span class="token punctuation">]</span>
driver <span class="token operator">=</span> <span class="token string">"overlay"</span>
runroot <span class="token operator">=</span> <span class="token string">"/data/podman/containers/run"</span>
graphroot <span class="token operator">=</span> <span class="token string">"/data/podman/containers/storage"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>重新加载并启动podman服务</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">podman</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>podman info 查看docker配置路径</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">podman</span> info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161447436.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这样就修改成功了，如果不放心可以<code v-pre>ls /data/podman/containers/storage/</code>看看；</p>
<ul>
<li>查看 podman 服务运行状态</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl status <span class="token function">podman</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161447396.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>运行状态，那么就没问题了，接下来可以试试<code v-pre>拉取镜像</code>或者<code v-pre>导入镜像</code>；</p>
<h3 id="_2、podman-中有数据迁移修改存储路径" tabindex="-1"><a class="header-anchor" href="#_2、podman-中有数据迁移修改存储路径" aria-hidden="true">#</a> 2、podman 中有数据迁移修改存储路径</h3>
<blockquote>
<font color=blue>注意：如果podman中已经存在了数据，那么就需要吧`/var/lib/containers`下的和podman相关的都挪到新的存储目录下然后在修改`boltdb`数据库里配置并重启数据库和podman服务方可生效；</font><font color=red>切记：先移动或复制 --》 在修改配置文件 --》 在修改`boltdb`数据库 --》 在重启服务。</font></blockquote>
<p>podman在数据库中可能会存储有运行配置，默认是在<code v-pre>/var/lib/containers/storage/libpod/bolt_state.db</code>中的，所以如果该数据库中存储了运行配置，则只修改了<code v-pre>/etc/containers/storage.conf</code>中的配置是不起作用的，podman会优先使用数据库中存储的配置，这点很坑。我们在修改了<code v-pre>/etc/containers/storage.conf</code>中的配置后，将在/var/lib/containers/复制到修改的路径下，重启之后，可以使用如下的命令来查看详细信息：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 创建一个storage.conf文件</span>
<span class="token function">sudo</span> <span class="token function">vim</span> /etc/containers/storage.conf

<span class="token comment"># 编辑配置文件</span>
<span class="token punctuation">[</span>storage<span class="token punctuation">]</span>
driver <span class="token operator">=</span> <span class="token string">"overlay"</span>
runroot <span class="token operator">=</span> <span class="token string">"/data/podman/containers/run"</span>
graphroot <span class="token operator">=</span> <span class="token string">"/data/podman/containers/storage"</span>

<span class="token comment"># 重启podman服务</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">podman</span>

<span class="token comment"># 查看podman服务状态</span>
systemctl status <span class="token function">podman</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161447403.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>没有启动起来，报错了；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 查看podman报错详细信息</span>
<span class="token function">sudo</span> <span class="token function">podman</span> info --log-level<span class="token operator">=</span>debug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161447016.png" alt="" loading="lazy"><br>
所以如果bolt数据库存储了相关配置，那么无论怎么修改<code v-pre>/etc/containers/storage.conf</code>中的配置都会被重载而不起作用。<br>
<code v-pre>bolt_state.db</code>又是一种小众的数据库，格式为bolt，目前BoltDB不支持直接修改和查看数据库内容，需要使用专门的bolt数据库工具才能查看和修改。<br>
<a href="https://github.com/etcd-io/bbolt" target="_blank" rel="noopener noreferrer">https://github.com/etcd-io/bbolt<ExternalLinkIcon/></a> 页面罗列了不少bolt工具，笔者选用了boltdbweb这款Go写的Web工具来查看和修改。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161447070.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>打开<code v-pre>runtime-config</code>可以看到里面有<code v-pre>graph-root</code>就是podman的存储路径；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161447121.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这里可以修改<code v-pre>graph root</code>、<code v-pre>static dir</code>和<code v-pre>volume path</code>配置，也可以直接删除掉，让podman直接使用<code v-pre>/etc/containers/storage.conf</code>中的配置。</p>
<p><strong>注意，<code v-pre>bolt_state.db</code>文件非常重要，如果之前已经有很多容器，则里面存储了很多非常重要的信息，如果丢失，则之前的容器就废了，所以在操作前一定要备份。</strong></p>
<hr>
<p>修改数据库这边我没有弄，参考的：	 <a href="https://blog.csdn.net/witton/article/details/128497746" target="_blank" rel="noopener noreferrer">改变podman的存储路径 - witton<ExternalLinkIcon/></a>，总之，如果数据多的话先备份，而且并不建议更换。</p>
<hr>
<h2 id="五、参考文章" tabindex="-1"><a class="header-anchor" href="#五、参考文章" aria-hidden="true">#</a> 五、参考文章</h2>
<table>
<thead>
<tr>
<th>文件名</th>
<th>文件连接</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://blog.csdn.net/witton/article/details/128497746" target="_blank" rel="noopener noreferrer">改变podman的存储路径 - witton<ExternalLinkIcon/></a></td>
<td><a href="https://blog.csdn.net/witton/article/details/128497746" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/witton/article/details/128497746<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
</div></template>


