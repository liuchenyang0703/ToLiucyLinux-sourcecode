<template><div><p>@[toc]</p>
<h1 id="一、dockerfile简介" tabindex="-1"><a class="header-anchor" href="#一、dockerfile简介" aria-hidden="true">#</a> 一、dockerfile简介</h1>
<h2 id="什么是dockerfile" tabindex="-1"><a class="header-anchor" href="#什么是dockerfile" aria-hidden="true">#</a>   什么是dockerfile？</h2>
<blockquote>
<p>  Dockerfile 是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令(Instruction)和操作命令;每一条指令构建一层镜像，因此每一条指令的内容，就是描述该层镜像应当如何构建（也就是你要执行的操作命令）。</p>
</blockquote>
<h2 id="dockerfile是什么" tabindex="-1"><a class="header-anchor" href="#dockerfile是什么" aria-hidden="true">#</a>   dockerfile是什么？</h2>
<blockquote>
<ul>
<li> dockerfile是纯文本文件；</li>
<li> dockerfile是用来构建镜像的；</li>
<li> dockerfile 用于指示 docker image build 命令自动构建Image的源代码；</li>
</ul>
</blockquote>
<p><strong><font color=teal>dockerfile构建镜像的的格式：</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> 要打的镜像名:版本号 Dockerfile路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>dockerfile构建镜像的的实例：</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> work:v1 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="为什么要用dockerfile" tabindex="-1"><a class="header-anchor" href="#为什么要用dockerfile" aria-hidden="true">#</a>   为什么要用dockerfile？</h2>
<blockquote>
<p>  ❓在dockerhub中官方提供很多镜像已经能满足我们99％的服务了,为什么还需要自定义镜像？</p>
</blockquote>
<blockquote>
<p>  🤔️解析：是，官方的镜像很多，同时也可以满足我们99％的服务；但是，如果有的公司要做自己的产品，那么，官网的镜像肯定是没有的，这时候就需要用到自定义镜像，而自定义镜像就是dockerfile构建成的；</p>
</blockquote>
<blockquote>
<p>  🥳我们可以用dockerfile自定义写需要的操作，来用dockerfile的指令来实现，最终采用<font color=red>docker build</font>来构建镜像，构建完镜像可以采用<font color=red>docker save </font>命令打成tar包，以便于日后在其他服务器上使用，也可以采用<font color=red>docker push</font>提交到私有镜像仓库或dockerhub中。</p>
</blockquote>
<p><img src="https://img-blog.csdnimg.cn/bb089a32977445caab970571f01e6a02.png" alt="在这里插入图片描述" loading="lazy"><br>
如上图所示，Dockerfile是独立于本地docker实例的一个文本文件，用于自动化地构建具有特定功能的docker镜像。</p>
<blockquote>
<p>Dockerfile镜像构建三部曲：<br>
（1）构建Dockerfile文件；<br>
（2）采用<font color=red>docker build</font>命令构建镜像；<br>
（3）采用<font color=red>docker run</font>命令依据镜像运行容器实例。</p>
</blockquote>
<h2 id="dockerfile、docker镜像和docker容器的关系" tabindex="-1"><a class="header-anchor" href="#dockerfile、docker镜像和docker容器的关系" aria-hidden="true">#</a>   Dockerfile、Docker镜像和Docker容器的关系</h2>
<p>从应用软件开发角度来看，它们分别表示软件开发的三个阶段：</p>
<ul>
<li>（1）Dockerfile是软件开发的原材料；</li>
<li>（2）Docker镜像是软件的交付品；</li>
<li>（3）Docker容器是Docker交付镜像的实例化，代表软件的实际运行过程。</li>
</ul>
<figure><img src="https://img-blog.csdnimg.cn/4be3598512a14a3e824f2cd82f68c177.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<blockquote>
<p>总结：Dockerfile面向开发，Docker镜像为交付标准，Docker容器与部署、运维相关，三则相辅相成缺一不可，他们是Docker的三大基石。Docker在实际运行中，Dockerfile、Docker镜像、Docker容器三者的运作内容如下所示：</p>
</blockquote>
<ul>
<li>1、Dockerfile定义了进程需要的一切内容，包括：代码执行、文件/环境变量、依赖包、运行环境、操作系统发行版本、服务进程、内核进程等等，很多与操作系统底层相关的内容。</li>
<li>2、通过docker build指令会生成一个Docker镜像，它是为用户提供各种服务的基础；</li>
<li>3、Docker容器则是一个实例化的服务进程。</li>
</ul>
<h1 id="二、dockerfile需要注意的编写规范" tabindex="-1"><a class="header-anchor" href="#二、dockerfile需要注意的编写规范" aria-hidden="true">#</a> 二、DockerFile需要注意的编写规范</h1>
<blockquote>
<p>1. # 代表注释<br><br>
2.指令必须要大写，后面最少需要带一个参数，最多无限制;<br><br>
3.执行dockerfile的时候，指令是按照从上到下的顺序执行的；<br></p>
</blockquote>
<h1 id="三、docekrfile指令解析" tabindex="-1"><a class="header-anchor" href="#三、docekrfile指令解析" aria-hidden="true">#</a> 三、Docekrfile指令解析</h1>
<blockquote>
<p><strong><font color=red>注意：指令全部都必须为大写，后面跟的是你要执行的操作命令</font></strong></p>
</blockquote>
<table>
<thead>
<tr>
<th>指令</th>
<th>功能简介</th>
</tr>
</thead>
<tbody>
<tr>
<td>FROM</td>
<td>指定构建新image是使用的基础image，通常必须是Dockerfile的第一个有效指令；定义一个基础镜像。</td>
</tr>
<tr>
<td>LABEL</td>
<td>附加到image之上的元数据，键值格式；定义一些元数据。</td>
</tr>
<tr>
<td>ENV</td>
<td>以键值格式设定环境变量，可被其后的指令所调用，且基于新生成的image运行的Container中也会存在这些变量。</td>
</tr>
<tr>
<td>RUN</td>
<td>以FROM中定义的image为基础环境运行指令命令，生成结果将作为新image的一个镜像层，并可由后续指令所使用。RUN后跟要执行的命令。</td>
</tr>
<tr>
<td>CMD</td>
<td>基于dockerfile生成的image运行的container时，CMD能够指定容器中默认运行的程序，因而其只应该定义一次。</td>
</tr>
<tr>
<td>ENTRYPOINT</td>
<td>类似于CMD指令的功能，但不能被命令行指定要运行的应用程序覆盖，且与CMD共存时，CMD的内容将作为该指令中定义的程序的参数。</td>
</tr>
<tr>
<td>WORKDIR</td>
<td>相当于cd切换目录的命令，如果切换的那个地方没有哪个目录，则会自动创建一个目录。</td>
</tr>
<tr>
<td>COPY</td>
<td>相当于cp命令，复制主机上或者前一阶段构建结果中（需要使用--from选项）文件或目录生成新的镜像。</td>
</tr>
<tr>
<td>ADD</td>
<td>与COPY指令的功能相似，但ADD传输压缩包的时候，是可以解压的。</td>
</tr>
<tr>
<td>VOLUME</td>
<td>指定基于新生成的Image运行Container时期望作为volume使用的目录。</td>
</tr>
<tr>
<td>EXPOSE</td>
<td>指定基于新生成的lmage运行Container时期望 暴露的端口，但实际暴露与否取决于&quot;docker run”命令的选项，支持TCP和UDP协议。</td>
</tr>
<tr>
<td>USER</td>
<td>为Dockerfile中该指令后面的RUN、CMD和ENTRYPOING指令中要运行的应用程序指定运行者身份UID，以及一个可选的GID。</td>
</tr>
<tr>
<td>ARG</td>
<td>定义专用于build过程中的变量，但仅对该指标之后的调用生效，其值可由命令行选项&quot;--build-arg&quot;进行传递。</td>
</tr>
<tr>
<td>ONBUILD</td>
<td>触发器，生效于由该Dockerfile 构建出的新l/mage被用于另一个Dockerfile中的FROM指令作为基础镜像时。</td>
</tr>
<tr>
<td>STOPSIGNAL</td>
<td>用于通知Container终止的系统调用信号。</td>
</tr>
<tr>
<td>HEALTHCHECK</td>
<td>定义检测容器应用的健康状态的具体方法。</td>
</tr>
<tr>
<td>SHELL</td>
<td>为容器定义运行时使用的默认shel程序，Linux系统默认使用 [/bin/sh”，&quot;-c&quot;], Windows默认使用 [’cmd', &quot;/S',&quot;/C']。</td>
</tr>
</tbody>
</table>
<h1 id="四、常用的dockerfile指令详解、格式与用法" tabindex="-1"><a class="header-anchor" href="#四、常用的dockerfile指令详解、格式与用法" aria-hidden="true">#</a> 四、常用的Dockerfile指令详解、格式与用法</h1>
<p><strong><font color=red>（必须）是写dockerfile必须有的，没有加的是（可选）的。</font></strong></p>
<h2 id="_4-1-from-必须" tabindex="-1"><a class="header-anchor" href="#_4-1-from-必须" aria-hidden="true">#</a> 4.1 FROM（必须）</h2>
<blockquote>
<p>指定一个基础镜像，必须为第一个命令。</p>
</blockquote>
<p><strong><font color=teal>格式</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>FROM 基础镜像
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>举例</font></strong></p>
<blockquote>
<p>一个nvidia、cuda10.1的centos7基础镜像</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>FROM nvidia/cuda:10.1-cudnn7-devel-centos7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-2-maintainer" tabindex="-1"><a class="header-anchor" href="#_4-2-maintainer" aria-hidden="true">#</a> 4.2 MAINTAINER</h2>
<blockquote>
<p>维护者信息，可以写邮箱，编辑人等等。</p>
</blockquote>
<p><strong><font color=teal>格式</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>MAINTAINER 邮箱/名字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>举例</font></strong></p>
<blockquote>
<p>展示邮箱和名字</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>MAINTAINER liucy
MAINTAINER <span class="token number">121212</span>@qq.com
MAINTAINER <span class="token number">121212</span>@163.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-3-user" tabindex="-1"><a class="header-anchor" href="#_4-3-user" aria-hidden="true">#</a> 4.3 USER</h2>
<blockquote>
<p>指定运行容器时的用户名或 UID，后续的 RUN 也会使用指定用户。使用USER指定用户时，可以使用用户名、UID或GID，或是两者的组合。当服务不需要管理员权限时，可以通过该命令指定运行用户。并且可以在之前创建所需要的用户</p>
</blockquote>
<p><strong><font color=teal>格式</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token environment constant">USER</span> 用户名
<span class="token operator">&amp;&amp;</span>
<span class="token environment constant">USER</span> user:group　
<span class="token operator">&amp;&amp;</span>　
<span class="token environment constant">USER</span> uid　　
<span class="token operator">&amp;&amp;</span>
<span class="token environment constant">USER</span> uid:gid　　
<span class="token operator">&amp;&amp;</span>
<span class="token environment constant">USER</span> user:gid　　
<span class="token operator">&amp;&amp;</span>
<span class="token environment constant">USER</span> uid:group
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><font color=teal>举例</font></strong></p>
<blockquote>
<p>指定root用户</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token environment constant">USER</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-4-env-必须" tabindex="-1"><a class="header-anchor" href="#_4-4-env-必须" aria-hidden="true">#</a> 4.4 ENV（必须）</h2>
<blockquote>
<p>设置环境变量</p>
</blockquote>
<p><strong><font color=teal>格式</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ENV 环境变量路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>举例</font></strong></p>
<blockquote>
<p>设置jdk1.8的环境变量</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ENV <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/jdk1.8.0_333/
ENV <span class="token builtin class-name">export</span> <span class="token assign-left variable">JRE_HOME</span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/jre
ENV <span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">$JAVA_HOME</span>/lib:<span class="token variable">$JRE_HOME</span>/lib
ENV <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-5-volume" tabindex="-1"><a class="header-anchor" href="#_4-5-volume" aria-hidden="true">#</a> 4.5 VOLUME</h2>
<blockquote>
<p>用于指定持久化目录（指定此目录可以被挂载出去）</p>
</blockquote>
<p><strong><font color=teal>格式</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>VOLUME 挂载路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>举例</font></strong></p>
<blockquote>
<p>挂载到/data目录</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>VOLUME <span class="token punctuation">[</span><span class="token string">"/data"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-6-expose" tabindex="-1"><a class="header-anchor" href="#_4-6-expose" aria-hidden="true">#</a> 4.6 EXPOSE</h2>
<blockquote>
<p>设置端口，EXPOSE指令是声明运行时容器提供服务端口，这只是一个声明，在运行时并不会因为这个声明应该就会开启这个端口的服务。<br><br>
在Dockerfile中写入这样的声明有两个好处：<br>
是帮助镜像使用者理解这个镜像服务的守护端口，以方便配置映射；<br>
在运行是使随机端口映射时，也就是docker run -P(大写)时，会自动随机映射EXPOSE端口。</p>
</blockquote>
<p><strong><font color=teal>格式</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>EXPOSE 端口号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>举例</font></strong></p>
<blockquote>
<p>设置一个8080端口</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>EXPOSE <span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-7-copy" tabindex="-1"><a class="header-anchor" href="#_4-7-copy" aria-hidden="true">#</a> 4.7 COPY</h2>
<blockquote>
<p>复制文件，相当于linux命令中的cp命令；<br>
功能类似ADD，但是是不会自动解压文件，也不能访问网络资源</p>
</blockquote>
<p><strong><font color=teal>格式</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>COPY 源文件及路径 目标路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>举例</font></strong></p>
<blockquote>
<p>复制一个mysql到/usr/local/下</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>COPY /root/mysql /usr/local/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-8-add" tabindex="-1"><a class="header-anchor" href="#_4-8-add" aria-hidden="true">#</a> 4.8 ADD</h2>
<blockquote>
<p>将本地文件添加到容器中，tar类型文件会自动解压(网络压缩资源不会被解压)，可以访问网络资源，类似wget。</p>
</blockquote>
<p><strong><font color=teal>格式</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ADD 源文件及路径 目标路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>举例</font></strong></p>
<blockquote>
<p>移动一个mysql-2-2.tar</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ADD /usr/local/mysql-2-2.tar /root/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-9-workdir" tabindex="-1"><a class="header-anchor" href="#_4-9-workdir" aria-hidden="true">#</a> 4.9 WORKDIR</h2>
<blockquote>
<p>切换目录，相当于linux命令中的cd命令，切换到这个目录，进入容器时就是这个目录，所以，workdir就属于启动默认的目录。</p>
</blockquote>
<p><strong><font color=teal>格式</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>WORKDIR 目录名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>举例</font></strong></p>
<blockquote>
<p>设置启动就在/data/目录</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>WORKDIR /data/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-10-run-必须" tabindex="-1"><a class="header-anchor" href="#_4-10-run-必须" aria-hidden="true">#</a> 4.10 RUN（必须）</h2>
<blockquote>
<p>构建镜像时执行的命令，执行的命令就是你指定的要他干什么，使用linux命令就可以。</p>
</blockquote>
<p><strong><font color=teal>格式</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>RUN 要执行的命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>举例</font></strong></p>
<blockquote>
<p>打镜像时下载一个netstat命令</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>RUN yum <span class="token parameter variable">-y</span> <span class="token function">install</span> net-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-11-cmd" tabindex="-1"><a class="header-anchor" href="#_4-11-cmd" aria-hidden="true">#</a> 4.11 CMD</h2>
<blockquote>
<p>构建镜像后调用，也就是在容器启动时才进行调用。写一次dockerfile只能出现一次CMD，而出现CMD的地方，就属于结尾，如果下面有RUN指令，则都不执行。</p>
</blockquote>
<p><strong><font color=teal>格式</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>CMD 要执行的命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>举例</font></strong></p>
<blockquote>
<p>执行删除dockerfile（打完镜像，要删除dockerfile）</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>CMD <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /data/dockerfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="五、docker-build构建镜像" tabindex="-1"><a class="header-anchor" href="#五、docker-build构建镜像" aria-hidden="true">#</a> 五、docker build构建镜像</h1>
<p><strong><font color=teal>dockerfile构建镜像的的格式：</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> 要打的镜像名:版本号 Dockerfile路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=teal>dockerfile构建镜像的的实例：</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> work:v1 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="六、【实战】docker自定义镜像" tabindex="-1"><a class="header-anchor" href="#六、【实战】docker自定义镜像" aria-hidden="true">#</a> 六、【实战】docker自定义镜像</h1>
<p>说明：</p>
<blockquote>
<p>  此处只是测试使用，并不能用到生产中，（生产中要根据自己的情况来写），可以构建成镜像，也可以创建容器，可以进入容器查看这些文件，但是web页面访问不到，因为没有加入jar包之类的，可以自行放入一个jar包，端口设置3000，然后启动jar包就可以了去访问web页面了。</p>
</blockquote>
<p>前言：<br>
  <strong><font color=red>有一点特别重要，构建镜像的时候要看好你的文件是不是这个目录，要不然打到一半会报错，说找不到文件，切记要记得放文件，在放文件的目录执行。</font></strong></p>
<h2 id="_1、编写dockerfile" tabindex="-1"><a class="header-anchor" href="#_1、编写dockerfile" aria-hidden="true">#</a> 1、编写Dockerfile</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#创建Dockerfile文本</span>
<span class="token function">vim</span> Dockerfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#设置基础镜像</span>
FROM nvidia/cuda:10.1-cudnn7-devel-centos7
<span class="token comment">#维护者信息</span>
MAINTAINER liucy
MAINTAINER <span class="token number">121212</span>@qq.com
MAINTAINER <span class="token number">121212</span>@163.com
<span class="token comment">#指定运行时的用户以及镜像的实际用户</span>
<span class="token environment constant">USER</span> root
<span class="token comment">#下载netstat命令</span>
RUN yum <span class="token parameter variable">-y</span> <span class="token function">install</span> net-tools
<span class="token comment">#设置jdk1.8的环境</span>
ENV <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/jdk1.8.0_333/
ENV <span class="token builtin class-name">export</span> <span class="token assign-left variable">JRE_HOME</span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/jre
ENV <span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">$JAVA_HOME</span>/lib:<span class="token variable">$JRE_HOME</span>/lib
ENV <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>
<span class="token comment">#开放一个3000端口</span>
EXPOSE <span class="token number">3000</span>
<span class="token comment">#移动并解压Grafana.tar安装包</span>
ADD /root/Grafana.tar /home/
<span class="token comment">#复制当前目录下的所有到/data/cs/里</span>
COPY ./ /data/home/
<span class="token comment">#设置python3.6.8环境</span>
RUN <span class="token builtin class-name">cd</span> /data/Python-3.6.8/ <span class="token operator">&amp;&amp;</span> ./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/root/python36 <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token operator">&amp;&amp;</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /root/python36/bin/python3.6 /usr/bin/python3 <span class="token operator">&amp;&amp;</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /root/python36/bin/pip3 /usr/bin/pip3
<span class="token comment">#切换到/data/目录</span>
WORKDIR /data/
<span class="token comment">#最后执行删除Dockerfile</span>
CMD <span class="token function">rm</span> <span class="token parameter variable">-rf</span> Dockerfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、构建镜像" tabindex="-1"><a class="header-anchor" href="#_2、构建镜像" aria-hidden="true">#</a> 2、构建镜像</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> dockerfile:v1 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等待构建完成。</p>
<h2 id="_3、查看镜像" tabindex="-1"><a class="header-anchor" href="#_3、查看镜像" aria-hidden="true">#</a> 3、查看镜像</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@cs ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY                 TAG                 IMAGE ID            CREATED             SIZE
dockerfile                 v1                 15c89s63e742      <span class="token number">2</span> months ago           <span class="token number">8</span>.5GB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="七、总结" tabindex="-1"><a class="header-anchor" href="#七、总结" aria-hidden="true">#</a> 七、总结</h1>
<h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章" aria-hidden="true">#</a>   相关文章</h2>
<blockquote>
<p><a href="https://blog.csdn.net/liu_chen_yang/article/details/125259992" target="_blank" rel="noopener noreferrer">【云原生】Docker—Dockerfile写法与用法以及dockerfile简介与构建镜像详解<ExternalLinkIcon/></a><br>
--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---<br>
<a href="https://blog.csdn.net/liu_chen_yang/article/details/124623482" target="_blank" rel="noopener noreferrer">Linux中基于Docker搭建harbor私有镜像仓库（超级详细）<ExternalLinkIcon/></a><br>
--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---<br>
<a href="https://blog.csdn.net/liu_chen_yang/article/details/124705622" target="_blank" rel="noopener noreferrer">Docker搭建harbor私有镜像仓库（命令行模式）<ExternalLinkIcon/></a><br>
--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---<br>
<a href="https://blog.csdn.net/liu_chen_yang/article/details/124670946" target="_blank" rel="noopener noreferrer">Docker发布/上传镜像到dockerhub&amp;&amp;下载/拉取镜像&amp;&amp;删除dockerhub镜像<ExternalLinkIcon/></a><br>
--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---<br>
<a href="https://blog.csdn.net/liu_chen_yang/article/details/123842609" target="_blank" rel="noopener noreferrer">linux（centos）中部署docker（步骤超全，含带一些发展史和一些概念）<ExternalLinkIcon/></a><br>
--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---<br>
<a href="https://blog.csdn.net/liu_chen_yang/article/details/123203549" target="_blank" rel="noopener noreferrer">如何从docker镜像里提取dockerfile<ExternalLinkIcon/></a><br>
--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---</p>
</blockquote>
<h2 id="相关专栏" tabindex="-1"><a class="header-anchor" href="#相关专栏" aria-hidden="true">#</a>   相关专栏</h2>
<blockquote>
<p><a href="https://blog.csdn.net/liu_chen_yang/category_11658917.html" target="_blank" rel="noopener noreferrer">《docker从入门到精通》<ExternalLinkIcon/></a><a href="https://blog.csdn.net/liu_chen_yang/category_10887074.html" target="_blank" rel="noopener noreferrer">《Linux从入门到精通》<ExternalLinkIcon/></a>可以关注专栏奥，会持续更新的。</p>
</blockquote>
</div></template>


