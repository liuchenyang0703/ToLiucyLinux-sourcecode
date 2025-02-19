<template><div><h1 id="docker-dockercompose的使用" tabindex="-1"><a class="header-anchor" href="#docker-dockercompose的使用" aria-hidden="true">#</a> Docker | DockerCompose的使用</h1>
<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2>
<p>大家好，我是Leo哥🫣🫣🫣，在之前的系列文章中我们学习了Docker几乎所有的操作，我们的Docker系列文章也即将迎来完结篇。这篇文章我们主要介绍一下DockerCompose的基本使用。</p>
<h2 id="_2-为什么需要dockercompose" tabindex="-1"><a class="header-anchor" href="#_2-为什么需要dockercompose" aria-hidden="true">#</a> 2.为什么需要DockerCompose</h2>
<p>大家可以看到，我们部署一个简单的Java项目，其中包含3个容器：</p>
<ul>
<li>MySQL</li>
<li>Nginx</li>
<li>Java项目</li>
</ul>
<p>而稍微复杂的项目，其中还会有各种各样的其它中间件，需要部署的东西远不止3个。如果还像之前那样手动的逐一部署，就太麻烦了。</p>
<p>而Docker Compose就可以帮助我们实现<strong>多个相互关联的Docker容器的快速部署</strong>。它允许用户通过一个单独的 docker-compose.yml 模板文件（YAML 格式）来定义一组相关联的应用容器。</p>
<h2 id="_3-基本语法" tabindex="-1"><a class="header-anchor" href="#_3-基本语法" aria-hidden="true">#</a> 3.基本语法</h2>
<p>我们可以直接去参考官方文档：<a href="https://docs.docker.com/compose/compose-file/compose-file-v3/" target="_blank" rel="noopener noreferrer">https://docs.docker.com/compose/compose-file/compose-file-v3/<ExternalLinkIcon/></a></p>
<p>docker-compose文件中可以定义多个相互关联的应用容器，每一个应用容器被称为一个服务（service）。由于service就是在定义某个应用的运行时参数，因此与<code v-pre>docker run</code>参数非常相似。</p>
<p>举例来说，用docker run部署MySQL的命令如下：</p>
<div class="language-Bash line-numbers-mode" data-ext="Bash"><pre v-pre class="language-Bash"><code>docker run -d \
  --name mysql \
  -p 3306:3306 \
  -e TZ=Asia/Shanghai \
  -e MYSQL_ROOT_PASSWORD=root \
  -v ./mysql/data:/var/lib/mysql \
  -v ./mysql/conf:/etc/mysql/conf.d \
  -v ./mysql/init:/docker-entrypoint-initdb.d \
  --network hmall
  mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果用<code v-pre>docker-compose.yml</code>文件来定义，就是这样：</p>
<div class="language-YAML line-numbers-mode" data-ext="YAML"><pre v-pre class="language-YAML"><code>version: &quot;3.8&quot;

services:
  mysql:
    image: mysql
    container_name: mysql
    ports:
      - &quot;3306:3306&quot;
    environment:
      TZ: Asia/Shanghai
      MYSQL_ROOT_PASSWORD: root
    networks:
      - new
networks:
  new:
    name: test-network
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对比如下：</p>
<table>
<thead>
<tr>
<th style="text-align:left"><strong>docker run 参数</strong></th>
<th style="text-align:left"><strong>docker compose 指令</strong></th>
<th style="text-align:left"><strong>说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">--name</td>
<td style="text-align:left">container_name</td>
<td style="text-align:left">容器名称</td>
</tr>
<tr>
<td style="text-align:left">-p</td>
<td style="text-align:left">ports</td>
<td style="text-align:left">端口映射</td>
</tr>
<tr>
<td style="text-align:left">-e</td>
<td style="text-align:left">environment</td>
<td style="text-align:left">环境变量</td>
</tr>
<tr>
<td style="text-align:left">-v</td>
<td style="text-align:left">volumes</td>
<td style="text-align:left">数据卷配置</td>
</tr>
<tr>
<td style="text-align:left">--network</td>
<td style="text-align:left">networks</td>
<td style="text-align:left">网络</td>
</tr>
</tbody>
</table>
<p>明白了其中的对应关系，编写<code v-pre>docker-compose</code>文件就很简单了，我们接着往下看。</p>
<h2 id="_4-基础命令" tabindex="-1"><a class="header-anchor" href="#_4-基础命令" aria-hidden="true">#</a> 4.基础命令</h2>
<p>编写好docker-compose.yml文件，就可以部署项目了。常见的命令：</p>
<p>基本语法如下：</p>
<div class="language-Bash line-numbers-mode" data-ext="Bash"><pre v-pre class="language-Bash"><code>docker compose [OPTIONS] [COMMAND]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，OPTIONS和COMMAND都是可选参数，比较常见的有：</p>
<table>
<thead>
<tr>
<th style="text-align:left"><strong>类型</strong></th>
<th style="text-align:left"><strong>参数或指令</strong></th>
<th style="text-align:left"><strong>说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Options</td>
<td style="text-align:left">-f</td>
<td style="text-align:left">指定compose文件的路径和名称</td>
</tr>
<tr>
<td style="text-align:left">-p</td>
<td style="text-align:left">指定project名称。project就是当前compose文件中设置的多个service的集合，是逻辑概念</td>
<td style="text-align:left">指定project名称。project就是当前compose文件中设置的多个service的集合，是逻辑概念</td>
</tr>
<tr>
<td style="text-align:left">Commands</td>
<td style="text-align:left">up</td>
<td style="text-align:left">创建并启动所有service容器</td>
</tr>
<tr>
<td style="text-align:left">down</td>
<td style="text-align:left">停止并移除所有容器、网络</td>
<td style="text-align:left">停止并移除所有容器、网络</td>
</tr>
<tr>
<td style="text-align:left">ps</td>
<td style="text-align:left">列出所有启动的容器</td>
<td style="text-align:left">列出所有启动的容器</td>
</tr>
<tr>
<td style="text-align:left">logs</td>
<td style="text-align:left">查看指定容器的日志</td>
<td style="text-align:left">查看指定容器的日志</td>
</tr>
<tr>
<td style="text-align:left">stop</td>
<td style="text-align:left">停止容器</td>
<td style="text-align:left">停止容器</td>
</tr>
<tr>
<td style="text-align:left">start</td>
<td style="text-align:left">启动容器</td>
<td style="text-align:left">启动容器</td>
</tr>
<tr>
<td style="text-align:left">restart</td>
<td style="text-align:left">重启容器</td>
<td style="text-align:left">重启容器</td>
</tr>
<tr>
<td style="text-align:left">top</td>
<td style="text-align:left">查看运行的进程</td>
<td style="text-align:left">查看运行的进程</td>
</tr>
<tr>
<td style="text-align:left">exec</td>
<td style="text-align:left">在指定的运行中容器中执行命令</td>
<td style="text-align:left">在指定的运行中容器中执行命令</td>
</tr>
</tbody>
</table>
<h2 id="_5-实战演示" tabindex="-1"><a class="header-anchor" href="#_5-实战演示" aria-hidden="true">#</a> 5.实战演示</h2>
<p>首先我们需要通过以下命令删除我们之前的一些容器跟镜像。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-qa</span><span class="token variable">)</span></span>
<span class="token function">docker</span> rmi mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建我们的docker-compose文件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> docker-compose.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">"3.8"</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">mysql</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mysql
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">"3306:3306"</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> root
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> new
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">new</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> test<span class="token punctuation">-</span>network
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后通过命令进行启动。 -d 是进行后台启动。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> compose up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312182302281.png" alt="image-20231218230222203" tabindex="0" loading="lazy"><figcaption>image-20231218230222203</figcaption></figure>
<p>然后就开始进行后台启动了。</p>
<p>然后我们通过命令进行查看我们启动的容器。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312182302201.png" alt="image-20231218230250172" tabindex="0" loading="lazy"><figcaption>image-20231218230250172</figcaption></figure>
<p>然后我们通过命令进入MySQL容器中。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>连接上MySQL。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312182308911.png" alt="image-20231218230845878" tabindex="0" loading="lazy"><figcaption>image-20231218230845878</figcaption></figure>
<p>可以看到我们成功连接到了MySQL，大功告成！</p>
<h2 id="_6-总结" tabindex="-1"><a class="header-anchor" href="#_6-总结" aria-hidden="true">#</a> 6.总结</h2>
<p>以上便是本文的全部内容，本人才疏学浅，文章有什么错误的地方，欢迎大佬们批评指正！我是<strong>Leo</strong>，一个在互联网行业的小白，立志成为更好的自己。</p>
<p>如果你想了解更多关于<strong>Leo</strong>，可以关注公众号-程序员Leo，后面文章会首先同步至公众号。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312182309527.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


