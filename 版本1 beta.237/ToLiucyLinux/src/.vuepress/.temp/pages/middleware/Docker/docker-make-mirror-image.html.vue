<template><div><h1 id="docker-使用dockerfile制作镜像" tabindex="-1"><a class="header-anchor" href="#docker-使用dockerfile制作镜像" aria-hidden="true">#</a> Docker | 使用Dockerfile制作镜像</h1>
<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2>
<p>大家好，我是Leo哥🫣🫣🫣，<a href="https://gaoziman.blog.csdn.net/article/details/134671157" target="_blank" rel="noopener noreferrer">这篇文章<ExternalLinkIcon/></a>中，我们学习了什么是镜像，以及如何自定义镜像。这篇文章我们主要讲一下如果使用Dockerfile快速制作镜像、好了，话不多说让我们开始吧😎😎😎。</p>
<h2 id="_2-细节注意" tabindex="-1"><a class="header-anchor" href="#_2-细节注意" aria-hidden="true">#</a> 2.细节注意</h2>
<p>我们打包镜像也是分成这么几步：</p>
<ul>
<li>准备Linux运行环境（java项目并不需要完整的操作系统，仅仅是基础运行环境即可）</li>
<li>安装并配置JDK</li>
<li>拷贝jar包</li>
<li>配置启动脚本</li>
</ul>
<p>上述步骤中的每一次操作其实都是在生产一些文件（系统运行环境、函数库、配置最终都是磁盘文件），所以 <strong>镜像就是一堆文件的集合</strong>。</p>
<p>但需要注意的是，镜像文件不是随意堆放的，而是按照操作的步骤分层叠加而成，每一层形成的文件都会单独打包并标记一个唯一id，称为 <strong>Layer</strong>（<strong>层</strong>）。这样，如果我们构建时用到的某些层其他人已经制作过，就可以直接拷贝使用这些层，而不用重复制作。</p>
<p>例如，第一步中需要的Linux运行环境，通用性就很强，所以Docker官方就制作了这样的只包含Linux运行环境的镜像。我们在制作<code v-pre>Java镜像</code>时，就无需重复制作，直接使用Docker官方提供的CentOS或Ubuntu镜像作为基础镜像。然后再搭建其它层即可，这样逐层搭建，最终整个Java项目的镜像结构如图所示：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312102220313.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h2 id="_3-dockefile" tabindex="-1"><a class="header-anchor" href="#_3-dockefile" aria-hidden="true">#</a> 3.Dockefile</h2>
<p>由于制作镜像的过程中，需要逐层处理和打包，比较复杂，所以Docker就提供了自动打包镜像的功能。我们只需要将打包的过程，每一层要做的事情用固定的语法写下来，交给Docker去执行即可。</p>
<p>而这种记录镜像结构的文件就称为<strong>Dockerfile</strong>，其对应的语法可以参考官方文档：</p>
<p><a href="https://docs.docker.com/engine/reference/builder/" target="_blank" rel="noopener noreferrer">https://docs.docker.com/engine/reference/builder/<ExternalLinkIcon/></a></p>
<p>其中的语法比较多，比较常用的有：</p>
<table>
<thead>
<tr>
<th style="text-align:left"><strong>指令</strong></th>
<th style="text-align:left"><strong>说明</strong></th>
<th style="text-align:left"><strong>示例</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>FROM</strong></td>
<td style="text-align:left">指定基础镜像</td>
<td style="text-align:left"><code v-pre>FROM centos:6</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>ENV</strong></td>
<td style="text-align:left">设置环境变量，可在后面指令使用</td>
<td style="text-align:left"><code v-pre>ENV key value</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>COPY</strong></td>
<td style="text-align:left">拷贝本地文件到镜像的指定目录</td>
<td style="text-align:left"><code v-pre>COPY ./xx.jar /tmp/app.jar</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>RUN</strong></td>
<td style="text-align:left">执行Linux的shell命令，一般是安装过程的命令</td>
<td style="text-align:left"><code v-pre>RUN yum install gcc</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>EXPOSE</strong></td>
<td style="text-align:left">指定容器运行时监听的端口，是给镜像使用者看的</td>
<td style="text-align:left">EXPOSE 8080</td>
</tr>
<tr>
<td style="text-align:left"><strong>ENTRYPOINT</strong></td>
<td style="text-align:left">镜像中应用的启动命令，容器运行时调用</td>
<td style="text-align:left">ENTRYPOINT java -jar xx.jar</td>
</tr>
</tbody>
</table>
<p>例如，要基于Ubuntu镜像来构建一个Java应用，其Dockerfile内容如下：</p>
<div class="language-Dockerfile line-numbers-mode" data-ext="Dockerfile"><pre v-pre class="language-Dockerfile"><code># 指定基础镜像
FROM ubuntu:16.04
# 配置环境变量，JDK的安装目录、容器内时区
ENV JAVA_DIR=/usr/local
ENV TZ=Asia/Shanghai
# 拷贝jdk和java项目的包
COPY ./jdk8.tar.gz $JAVA_DIR/
COPY ./docker-demo.jar /tmp/app.jar
# 设定时区
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime &amp;&amp; echo $TZ &gt; /etc/timezone
# 安装JDK
RUN cd $JAVA_DIR \
 &amp;&amp; tar -xf ./jdk8.tar.gz \
 &amp;&amp; mv ./jdk1.8.0_144 ./java8
# 配置环境变量
ENV JAVA_HOME=$JAVA_DIR/java8
ENV PATH=$PATH:$JAVA_HOME/bin
# 指定项目监听的端口
EXPOSE 8080
# 入口，java项目的启动命令
ENTRYPOINT [&quot;java&quot;, &quot;-jar&quot;, &quot;/app.jar&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是吧以后我们会有很多很多java项目需要打包为镜像，他们都需要Linux系统环境、JDK环境这两层，只有上面的3层不同（因为jar包不同）。如果每次制作java镜像都重复制作前两层镜像，是不是很麻烦。</p>
<p>所以，就有人提供了基础的系统加JDK环境，我们在此基础上制作java镜像，就可以省去JDK的配置了：</p>
<div class="language-Dockerfile line-numbers-mode" data-ext="Dockerfile"><pre v-pre class="language-Dockerfile"><code># 基础镜像
FROM openjdk:11.0-jre-buster
# 设定时区
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime &amp;&amp; echo $TZ &gt; /etc/timezone
# 拷贝jar包
COPY docker-demo.jar /app.jar
# 入口
ENTRYPOINT [&quot;java&quot;, &quot;-jar&quot;, &quot;/app.jar&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是不是简单多了。</p>
<h2 id="_3-构建镜像" tabindex="-1"><a class="header-anchor" href="#_3-构建镜像" aria-hidden="true">#</a> 3.构建镜像</h2>
<p>当Dockerfile文件写好以后，就可以利用命令来构建镜像了。</p>
<p>我们这里编写了后台SpringBoot接口程序。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312102234906.png" alt="image-20231210223453881" tabindex="0" loading="lazy"><figcaption>image-20231210223453881</figcaption></figure>
<p>然后把他打成jar包。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312102235364.png" alt="image-20231210223523334" tabindex="0" loading="lazy"><figcaption>image-20231210223523334</figcaption></figure>
<p>在Linux/opt/software/project中创建Dockfile文件。</p>
<p>当然这里是我的习惯，大家可以随意。</p>
<p>编写Dockerfile文件</p>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> openjdk:11 </span>

<span class="token instruction"><span class="token keyword">COPY</span> *.jar /app.jar  </span>

<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">"--server.port=8400"</span>]</span>

<span class="token instruction"><span class="token keyword">EXPOSE</span> 8400  </span>
 
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">"java"</span>,<span class="token string">"-jar"</span>,<span class="token string">"/app.jar"</span>]  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把刚刚打包好的jar包上传，注意要和Dockefile在同一目录下。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312102240218.png" alt="image-20231210224013192" tabindex="0" loading="lazy"><figcaption>image-20231210224013192</figcaption></figure>
<p>通过build命令构建镜像。</p>
<ul>
<li>docker bulid 是打包命令</li>
<li><code v-pre>-t</code> − 给镜像加一个Tag</li>
<li>后面跟的 project就是为这个镜像取的名字</li>
<li><code v-pre>.</code> 小数点表示当前目录，即Dockerfile所在目录</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> project <span class="token builtin class-name">.</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>看到下面说明镜像已经生成完毕。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312102242749.png" alt="image-20231210224235662" tabindex="0" loading="lazy"><figcaption>image-20231210224235662</figcaption></figure>
<p>使用命令查看我们生成的镜像</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312102243952.png" alt="image-20231210224314913" tabindex="0" loading="lazy"><figcaption>image-20231210224314913</figcaption></figure>
<p>确认没问题之后我们开始后台启动容器。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8400</span>:8400 <span class="token parameter variable">--name</span> project project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>-d 是后台运行</li>
<li>-p 8400:8400是端口映射</li>
<li>--name 取名字</li>
<li>最后跟的 project是我打包好的镜像名称。</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312102244516.png" alt="image-20231210224424482" tabindex="0" loading="lazy"><figcaption>image-20231210224424482</figcaption></figure>
<p>启动成功之后，我们通过IP + 端口号 去访问接口。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312102245067.png" alt="image-20231210224512014" tabindex="0" loading="lazy"><figcaption>image-20231210224512014</figcaption></figure>
<p>可以看到我们通过虚拟机IP + 端口号 + 接口路径是可以访问到我们的接口的，大功告成!!!</p>
<h2 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结" aria-hidden="true">#</a> 4.总结</h2>
<p>以上便是本文的全部内容，本人才疏学浅，文章有什么错误的地方，欢迎大佬们批评指正！我是<strong>Leo</strong>，一个在互联网行业的小白，立志成为更好的自己。</p>
<p>如果你想了解更多关于<strong>Leo</strong>，可以关注公众号-程序员Leo，后面文章会首先同步至公众号。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312102246098.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


