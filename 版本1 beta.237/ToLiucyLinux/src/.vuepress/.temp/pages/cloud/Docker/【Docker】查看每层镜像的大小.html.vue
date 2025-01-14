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
<h1 id="docker-history-image" tabindex="-1"><a class="header-anchor" href="#docker-history-image" aria-hidden="true">#</a> docker history image</h1>
<p>使用：<code v-pre>docker history image(镜像名)</code>可以看到构建镜像时每条命令执行的大小</p>
<p>这里显示的是所有层的信息；<br>
如果看命令不知道是哪个的时候，可根据在build镜像时的IMAGE来判断是哪个。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># docker history redhat-mysql</span>
IMAGE               CREATED             CREATED BY                                      SIZE                COMMENT
cf14a9a9f753        <span class="token number">4</span> days ago          /bin/sh <span class="token parameter variable">-c</span> <span class="token comment">#(nop)  CMD ["mysqld"]               0B                  </span>
312a16d871a0        <span class="token number">4</span> days ago          /bin/sh <span class="token parameter variable">-c</span> <span class="token comment">#(nop)  EXPOSE 3306                  0B                  </span>
372e0847f04a        <span class="token number">4</span> days ago          /bin/sh <span class="token parameter variable">-c</span> mysqld --initialize-insecure --us…   127MB               
3f40e557ffcf        <span class="token number">4</span> days ago          /bin/sh <span class="token parameter variable">-c</span> <span class="token comment">#(nop)  ENV PATH=/opt/mysql-5.7.3…   0B                  </span>
cec92708a0d1        <span class="token number">4</span> days ago          /bin/sh <span class="token parameter variable">-c</span> <span class="token comment">#(nop) COPY file:c21e035f53b78962…   162B                </span>
b904f83aa22c        <span class="token number">4</span> days ago          /bin/sh <span class="token parameter variable">-c</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> mysql:mysql /opt/mysql-5…   <span class="token number">2</span>.68GB              
62c02bad85d5        <span class="token number">4</span> days ago          /bin/sh <span class="token parameter variable">-c</span> <span class="token function">groupadd</span> mysql <span class="token operator">&amp;&amp;</span> <span class="token function">useradd</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-g</span> m…   359kB               
789b6d170caf        <span class="token number">4</span> days ago          /bin/sh <span class="token parameter variable">-c</span> <span class="token comment">#(nop) ADD file:41225123e9b5895c2…   2.68GB              </span>
978bac9547fa        <span class="token number">4</span> days ago          /bin/sh <span class="token parameter variable">-c</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> libaio numactl        <span class="token number">66</span>.1MB              
069661fe1d9a        <span class="token number">4</span> days ago          /bin/sh <span class="token parameter variable">-c</span> <span class="token comment">#(nop)  ENV LANG=en_US.utf8          0B                  </span>
8d7d859c98e3        <span class="token number">5</span> days ago          /bin/bash                                       319MB               
9da37a681956        <span class="token number">3</span> years ago                                                         <span class="token number">2</span>.94kB              
<span class="token operator">&lt;</span>missing<span class="token operator">></span>           <span class="token number">3</span> years ago                                                         205MB               Imported from -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我只要显示CREATED BY和每层的大小，那么可以使用：<code v-pre>--format='{{.CreatedBy}} - {{.Size}}'</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># docker history --format='{{.CreatedBy}} - {{.Size}}' redhat-mysql</span>
/bin/sh <span class="token parameter variable">-c</span> <span class="token comment">#(nop)  CMD ["mysqld"] - 0B</span>
/bin/sh <span class="token parameter variable">-c</span> <span class="token comment">#(nop)  EXPOSE 3306 - 0B</span>
/bin/sh <span class="token parameter variable">-c</span> mysqld --initialize-insecure --us… - 127MB
/bin/sh <span class="token parameter variable">-c</span> <span class="token comment">#(nop)  ENV PATH=/opt/mysql-5.7.3… - 0B</span>
/bin/sh <span class="token parameter variable">-c</span> <span class="token comment">#(nop) COPY file:c21e035f53b78962… - 162B</span>
/bin/sh <span class="token parameter variable">-c</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> mysql:mysql /opt/mysql-5… - <span class="token number">2</span>.68GB
/bin/sh <span class="token parameter variable">-c</span> <span class="token function">groupadd</span> mysql <span class="token operator">&amp;&amp;</span> <span class="token function">useradd</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-g</span> m… - 359kB
/bin/sh <span class="token parameter variable">-c</span> <span class="token comment">#(nop) ADD file:41225123e9b5895c2… - 2.68GB</span>
/bin/sh <span class="token parameter variable">-c</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> libaio numactl - <span class="token number">66</span>.1MB
/bin/sh <span class="token parameter variable">-c</span> <span class="token comment">#(nop)  ENV LANG=en_US.utf8 - 0B</span>
/bin/bash - 319MB
 - <span class="token number">2</span>.94kB
 - 205MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="附加-不看" tabindex="-1"><a class="header-anchor" href="#附加-不看" aria-hidden="true">#</a> 附加：不看</h1>
<ul>
<li>
<p>简介<br>
通过使用容器化，我们可以快速设置和配置我们的部署环境，这有助于我们节省时间和资源。考虑到 “一次编写，随地部署 “的目标，容器化可以帮助我们简化现代应用程序的部署过程，而这可能是复杂的。</p>
</li>
<li>
<p>寻找Docker镜像的层和层大小<br>
在这篇文章中，我们将探讨如何找到每个Docker镜像的层和层大小。这对于识别可能导致镜像整体大小的大型层，以及确定哪些层可以被删除或优化以减少镜像的大小是非常有用的。</p>
</li>
<li>
<p>方法<br>
使用Dockerfile</p>
</li>
</ul>
<p>使用Docker Image Inspect命令</p>
<p>让我们详细了解其中的每一项，并通过实例看到它们的作用。</p>
<ul>
<li>使用Dockerfile<br>
示例</li>
</ul>
<p>第1步 – 为你的项目创建一个新的目录，并导航到该目录 —</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">mkdir</span> directoryname 
$ <span class="token builtin class-name">cd</span> directoryname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>第2步 – 在这个新目录下制作一个名为 “Dockerfile “的文件，内容如下 —</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>FROM alpine:latest 
RUN apk <span class="token function">add</span> --no-cache <span class="token function">curl</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这包括建立你的图像的说明以及基本图像。</p>
<p>第3步 – 在终端运行docker build命令，使用Dockerfile构建镜像—-。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> myimage <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第4步 – 要检查图层和图层大小，在终端运行docker images命令，列出系统中所有可用的图像–</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> images
REPOSITORY        TAG      IMAGE ID       CREATED        SIZE
myimage           latest   499a9ddb3acd   <span class="token number">2</span> minutes ago  <span class="token number">9</span>.29MB
docker-apps       latest   eb6dda32a60d   <span class="token number">3</span> hours ago    176MB
docker101tutorial latest   1ebfcd22ec64   <span class="token number">3</span> hours ago    47MB
ubuntu            latest   6b7dfa7e8fdb   <span class="token number">4</span> weeks ago    <span class="token number">77</span>.8MB
alpine/git        latest   22d84a66cda4   <span class="token number">7</span> weeks ago    <span class="token number">43</span>.6MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第5步 – 在终端运行docker inspect命令来检查镜像并获得其细节，包括层和它们的大小。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> inspect IMAGE_ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> inspect 499a9ddb3acd
<span class="token punctuation">[</span>
   <span class="token punctuation">{</span>
      <span class="token string">"Id"</span><span class="token builtin class-name">:</span> <span class="token string">"sha256:499a9ddb3acdf2117fdb4df826e0782d05d01aa8d1c0574c96e7bed6fbbcf698"</span>,
      <span class="token string">"RepoTags"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
         <span class="token string">"myimage:latest"</span>
      <span class="token punctuation">]</span>,
      <span class="token string">"RepoDigests"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
      <span class="token string">"Parent"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
      <span class="token string">"Comment"</span><span class="token builtin class-name">:</span> <span class="token string">"buildkit.dockerfile.v0"</span>,
      <span class="token string">"Created"</span><span class="token builtin class-name">:</span> <span class="token string">"2023-01-08T07:49:58.294267525Z"</span>,
      <span class="token string">"Container"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
      <span class="token string">"ContainerConfig"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
         <span class="token string">"Hostname"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
         <span class="token string">"Domainname"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
         <span class="token string">"User"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
         <span class="token string">"AttachStdin"</span><span class="token builtin class-name">:</span> false,
         <span class="token string">"AttachStdout"</span><span class="token builtin class-name">:</span> false,
         <span class="token string">"AttachStderr"</span><span class="token builtin class-name">:</span> false,
         <span class="token string">"Tty"</span><span class="token builtin class-name">:</span> false,
         <span class="token string">"OpenStdin"</span><span class="token builtin class-name">:</span> false,
         <span class="token string">"StdinOnce"</span><span class="token builtin class-name">:</span> false,
         <span class="token string">"Env"</span><span class="token builtin class-name">:</span> null,
         <span class="token string">"Cmd"</span><span class="token builtin class-name">:</span> null,
         <span class="token string">"Image"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
         <span class="token string">"Volumes"</span><span class="token builtin class-name">:</span> null,
         <span class="token string">"WorkingDir"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
         <span class="token string">"Entrypoint"</span><span class="token builtin class-name">:</span> null,
         <span class="token string">"OnBuild"</span><span class="token builtin class-name">:</span> null,
         <span class="token string">"Labels"</span><span class="token builtin class-name">:</span> null
      <span class="token punctuation">}</span>,
      <span class="token string">"DockerVersion"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
      <span class="token string">"Author"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
      <span class="token string">"Config"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
         <span class="token string">"Hostname"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
         <span class="token string">"Domainname"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
         <span class="token string">"User"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
         <span class="token string">"AttachStdin"</span><span class="token builtin class-name">:</span> false,
         <span class="token string">"AttachStdout"</span><span class="token builtin class-name">:</span> false,
         <span class="token string">"AttachStderr"</span><span class="token builtin class-name">:</span> false,
         <span class="token string">"Tty"</span><span class="token builtin class-name">:</span> false,
         <span class="token string">"OpenStdin"</span><span class="token builtin class-name">:</span> false,
         <span class="token string">"StdinOnce"</span><span class="token builtin class-name">:</span> false,
         <span class="token string">"Env"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">"PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"</span>
         <span class="token punctuation">]</span>,
         <span class="token string">"Cmd"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">"/bin/sh"</span>
         <span class="token punctuation">]</span>,
         <span class="token string">"Image"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
         <span class="token string">"Volumes"</span><span class="token builtin class-name">:</span> null,
         <span class="token string">"WorkingDir"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
         <span class="token string">"Entrypoint"</span><span class="token builtin class-name">:</span> null,
         <span class="token string">"OnBuild"</span><span class="token builtin class-name">:</span> null,
         <span class="token string">"Labels"</span><span class="token builtin class-name">:</span> null
      <span class="token punctuation">}</span>,
      <span class="token string">"Architecture"</span><span class="token builtin class-name">:</span> <span class="token string">"amd64"</span>,
      <span class="token string">"Os"</span><span class="token builtin class-name">:</span> <span class="token string">"linux"</span>,
      <span class="token string">"Size"</span><span class="token builtin class-name">:</span> <span class="token number">9292948</span>,
      <span class="token string">"VirtualSize"</span><span class="token builtin class-name">:</span> <span class="token number">9292948</span>,
      <span class="token string">"GraphDriver"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
         <span class="token string">"Data"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"LowerDir"</span><span class="token builtin class-name">:</span> <span class="token string">"/var/lib/docker/overlay2/e4c1f1bb76c66c5d1781a775c8a2ca9338065ea0b398aeaed4230a00a15d2952/diff"</span>,
            <span class="token string">"MergedDir"</span><span class="token builtin class-name">:</span> <span class="token string">"/var/lib/docker/overlay2/osfaf1c97lm7awgfbaqibrt6p/merged"</span>,
            <span class="token string">"UpperDir"</span><span class="token builtin class-name">:</span> <span class="token string">"/var/lib/docker/overlay2/osfaf1c97lm7awgfbaqibrt6p/diff"</span>,
            <span class="token string">"WorkDir"</span><span class="token builtin class-name">:</span> <span class="token string">"/var/lib/docker/overlay2/osfaf1c97lm7awgfbaqibrt6p/work"</span>
         <span class="token punctuation">}</span>,
         <span class="token string">"Name"</span><span class="token builtin class-name">:</span> <span class="token string">"overlay2"</span>
      <span class="token punctuation">}</span>,
      <span class="token string">"RootFS"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
         <span class="token string">"Type"</span><span class="token builtin class-name">:</span> <span class="token string">"layers"</span>,
         <span class="token string">"Layers"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">"sha256:ded7a220bb058e28ee3254fbba04ca90b679070424424761a53a043b93b612bf"</span>,
            <span class="token string">"sha256:19bc0373c06b6727c115ef34961486b1a9f3b7c8ccbd3441c4b108aeef2b338d"</span>
         <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>,
      <span class="token string">"Metadata"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
         <span class="token string">"LastTagTime"</span><span class="token builtin class-name">:</span> <span class="token string">"2023-01-08T07:49:58.412703277Z"</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用Docker Image Inspect命令<br>
“docker image inspect “命令允许我们探索关于Docker镜像的全面细节，比如它的层数和大小。</p>
<p>下面的步骤可以用来获得Docker镜像的层和层大小——。</p>
<p>第1步 – 通过打开终端或命令提示符，进入包含你的Docker镜像的目录。</p>
<p>第2步 – 要查看所有可访问的Docker镜像，请在终端运行以下命令 —</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> image <span class="token function">ls</span>
REPOSITORY         TAG     IMAGE ID       CREATED           SIZE
myimage           latest   499a9ddb3acd   <span class="token number">17</span> minutes ago    <span class="token number">9</span>.29MB
docker-apps       latest   eb6dda32a60d   <span class="token number">3</span> hours ago       176MB
docker101tutorial latest   1ebfcd22ec64   <span class="token number">3</span> hours ago       47MB
ubuntu            latest   6b7dfa7e8fdb   <span class="token number">4</span> weeks ago       <span class="token number">77</span>.8MB
alpine/git        latest   22d84a66cda4   <span class="token number">7</span> weeks ago       <span class="token number">43</span>.6MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第3步 – 选择你想检查的图像，并记下你之前输出的ID。在这个例子中，我们将利用ID为 “499a9ddb3acd “的图像。<br>
第4步</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> image inspect 499a9ddb3acd
<span class="token punctuation">[</span>
   <span class="token punctuation">{</span>
      <span class="token string">"Id"</span><span class="token builtin class-name">:</span> <span class="token string">"sha256:499a9ddb3acdf2117fdb4df826e0782d05d01aa8d1c0574c96e7bed6fbbcf698"</span>,
      <span class="token string">"RepoTags"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
         <span class="token string">"myimage:latest"</span>
      <span class="token punctuation">]</span>,
      <span class="token string">"RepoDigests"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
      <span class="token string">"Parent"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
      <span class="token string">"Comment"</span><span class="token builtin class-name">:</span> <span class="token string">"buildkit.dockerfile.v0"</span>,
      <span class="token string">"Created"</span><span class="token builtin class-name">:</span> <span class="token string">"2023-01-08T07:49:58.294267525Z"</span>,
      <span class="token string">"Container"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
      <span class="token string">"ContainerConfig"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
         <span class="token string">"Hostname"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
         <span class="token string">"Domainname"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
         <span class="token string">"User"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
         <span class="token string">"AttachStdin"</span><span class="token builtin class-name">:</span> false,
         <span class="token string">"AttachStdout"</span><span class="token builtin class-name">:</span> false,
         <span class="token string">"AttachStderr"</span><span class="token builtin class-name">:</span> false,
         <span class="token string">"Tty"</span><span class="token builtin class-name">:</span> false,
         <span class="token string">"OpenStdin"</span><span class="token builtin class-name">:</span> false,
         <span class="token string">"StdinOnce"</span><span class="token builtin class-name">:</span> false,
         <span class="token string">"Env"</span><span class="token builtin class-name">:</span> null,
         <span class="token string">"Cmd"</span><span class="token builtin class-name">:</span> null,
         <span class="token string">"Image"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
         <span class="token string">"Volumes"</span><span class="token builtin class-name">:</span> null,
         <span class="token string">"WorkingDir"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
         <span class="token string">"Entrypoint"</span><span class="token builtin class-name">:</span> null,
         <span class="token string">"OnBuild"</span><span class="token builtin class-name">:</span> null,
         <span class="token string">"Labels"</span><span class="token builtin class-name">:</span> null
      <span class="token punctuation">}</span>,
      <span class="token string">"DockerVersion"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
      <span class="token string">"Author"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
      <span class="token string">"Config"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
         <span class="token string">"Hostname"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
         <span class="token string">"Domainname"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
         <span class="token string">"User"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
         <span class="token string">"AttachStdin"</span><span class="token builtin class-name">:</span> false,
         <span class="token string">"AttachStdout"</span><span class="token builtin class-name">:</span> false,
         <span class="token string">"AttachStderr"</span><span class="token builtin class-name">:</span> false,
         <span class="token string">"Tty"</span><span class="token builtin class-name">:</span> false,
         <span class="token string">"OpenStdin"</span><span class="token builtin class-name">:</span> false,
         <span class="token string">"StdinOnce"</span><span class="token builtin class-name">:</span> false,
         <span class="token string">"Env"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">"PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"</span>
         <span class="token punctuation">]</span>,
         <span class="token string">"Cmd"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">"/bin/sh"</span>
         <span class="token punctuation">]</span>,
         <span class="token string">"Image"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
         <span class="token string">"Volumes"</span><span class="token builtin class-name">:</span> null,
         <span class="token string">"WorkingDir"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
         <span class="token string">"Entrypoint"</span><span class="token builtin class-name">:</span> null,
         <span class="token string">"OnBuild"</span><span class="token builtin class-name">:</span> null,
         <span class="token string">"Labels"</span><span class="token builtin class-name">:</span> null
      <span class="token punctuation">}</span>,
      <span class="token string">"Architecture"</span><span class="token builtin class-name">:</span> <span class="token string">"amd64"</span>,
      <span class="token string">"Os"</span><span class="token builtin class-name">:</span> <span class="token string">"linux"</span>,
      <span class="token string">"Size"</span><span class="token builtin class-name">:</span> <span class="token number">9292948</span>,
      <span class="token string">"VirtualSize"</span><span class="token builtin class-name">:</span> <span class="token number">9292948</span>,
      <span class="token string">"GraphDriver"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
         <span class="token string">"Data"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"LowerDir"</span><span class="token builtin class-name">:</span> <span class="token string">"/var/lib/docker/overlay2/e4c1f1bb76c66c5d1781a775c8a2ca9338065ea0b398aeaed4230a00a15d2952/diff"</span>,
            <span class="token string">"MergedDir"</span><span class="token builtin class-name">:</span> <span class="token string">"/var/lib/docker/overlay2/osfaf1c97lm7awgfbaqibrt6p/merged"</span>,
            <span class="token string">"UpperDir"</span><span class="token builtin class-name">:</span> <span class="token string">"/var/lib/docker/overlay2/osfaf1c97lm7awgfbaqibrt6p/diff"</span>,
            <span class="token string">"WorkDir"</span><span class="token builtin class-name">:</span> <span class="token string">"/var/lib/docker/overlay2/osfaf1c97lm7awgfbaqibrt6p/work"</span>
         <span class="token punctuation">}</span>,
         <span class="token string">"Name"</span><span class="token builtin class-name">:</span> <span class="token string">"overlay2"</span>
      <span class="token punctuation">}</span>,
      <span class="token string">"RootFS"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
         <span class="token string">"Type"</span><span class="token builtin class-name">:</span> <span class="token string">"layers"</span>,
         <span class="token string">"Layers"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">"sha256:ded7a220bb058e28ee3254fbba04ca90b679070424424761a53a043b93b612bf"</span>,
            <span class="token string">"sha256:19bc0373c06b6727c115ef34961486b1a9f3b7c8ccbd3441c4b108aeef2b338d"</span>
         <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>,
      <span class="token string">"Metadata"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
         <span class="token string">"LastTagTime"</span><span class="token builtin class-name">:</span> <span class="token string">"2023-01-08T07:49:58.412703277Z"</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第5步 – 输出将是一个JSON对象，包含关于图像的详细信息，包括它的图层和图层在终端的大小。<br>
在终端的输出中会产生一个图像的层和它们的尺寸的列表。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> image inspect <span class="token parameter variable">--format</span><span class="token operator">=</span><span class="token string">'{{json .RootFS.Layers}}'</span> 499a9ddb3acd
<span class="token punctuation">[</span><span class="token string">"sha256:ded7a220bb058e28ee3254fbba04ca90b679070424424761a53a043b93b612bf"</span>,<span class="token string">"sha256:19bc0373c06b6727c115ef34961486b1a9f3b7c8ccbd3441c4b108aeef2b338d"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>结论</li>
</ul>
<p>在这篇文章中，我们探讨了寻找每个Docker镜像的层和层大小的各种方法。通过使用Dockerfile方法，我们可以通过检查用于构建镜像的指令来查看层和大小。Docker历史命令允许我们查看镜像的历史，并看到层和它们的大小。Docker图像检查命令也提供了关于图像的层和大小的详细信息。</p>
</div></template>


