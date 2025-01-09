<template><div><blockquote>
<p>🍁<strong>博主简介</strong><br>
  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！</p>
</blockquote>
<p>@[toc]</p>
<h1 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项：</h1>
<blockquote>
<p>在这里强调，强制进入或者进入镜像，进入后会引起yum install和wget等不能使用</p>
</blockquote>
<h1 id="docker创建运行指定端口的容器报错" tabindex="-1"><a class="header-anchor" href="#docker创建运行指定端口的容器报错" aria-hidden="true">#</a> docker创建运行指定端口的容器报错：</h1>
<p>是警告，但这个也算是报错。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost /<span class="token punctuation">]</span><span class="token comment"># docker run -itd --name nginx -p 80:80 -p 443:443 -v /etc/localtime:/etc/localtime nginx:latest</span>
WARNING: IPv4 forwarding is disabled. Networking will not work.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="解决方式" tabindex="-1"><a class="header-anchor" href="#解决方式" aria-hidden="true">#</a> 解决方式：</h1>
<h2 id="_1-第一步-添加ipv4到-usr-lib-sysctl-d-00-system-conf" tabindex="-1"><a class="header-anchor" href="#_1-第一步-添加ipv4到-usr-lib-sysctl-d-00-system-conf" aria-hidden="true">#</a> 1 第一步：添加ipv4到/usr/lib/sysctl.d/00-system.conf</h2>
<blockquote>
<p>在宿主机上执行echo &quot;net.ipv4.ip_forward=1&quot; &gt;&gt;/usr/lib/sysctl.d/00-system.conf；</p>
</blockquote>
<p>在执行之前可以先看一下这个配置文件；在进行追加命令到配置中；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">"net.ipv4.ip_forward=1"</span> <span class="token operator">>></span>/usr/lib/sysctl.d/00-system.conf；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加完成之后查看一下；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> /usr/lib/sysctl.d/00-system.conf；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/67b8d6cf2bb94f519d6b9192b6a749ba.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="_2-第二步-重启network和docker服务" tabindex="-1"><a class="header-anchor" href="#_2-第二步-重启network和docker服务" aria-hidden="true">#</a> 2 第二步：重启network和docker服务</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl restart network <span class="token operator">&amp;&amp;</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-第三步-验证问题是否解决" tabindex="-1"><a class="header-anchor" href="#_3-第三步-验证问题是否解决" aria-hidden="true">#</a> 3 第三步：验证问题是否解决</h2>
<p>再次执行创建容器的命令</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker run -itd --name nginx -p 80:80 -p 443:443 -v /etc/localtime:/etc/localtime nginx:latest</span>
474b88c967e10a5003182f185821acab8d8a750d675a3b3eeedcaeefeced2280
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建成功：</p>
<figure><img src="https://img-blog.csdnimg.cn/2f34240912854a25900f94d17dbb1d66.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="问题解决❀" tabindex="-1"><a class="header-anchor" href="#问题解决❀" aria-hidden="true">#</a> 问题解决❀</h1>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <img src="https://img-blog.csdnimg.cn/bc860198ca1c47fdb24521e98bed58de.jpeg" alt="在这里插入图片描述" loading="lazy"></h2>
<hr>
<p>其他 - 测试</p>
<p>golang是google开发的一种编程语言，其主要特点是编写高性能、并发性高的程序。golang语言的学习成本相对较低，而且开发速度非常快，目前被广泛应用于网络编程和服务器端开发。本文将介绍如何在linux系统上安装golang编程语言。</p>
<p>一、安装前准备</p>
<p>在进行Golang的安装前，我们需要检查安装Linux操作系统的库是否已经正常安装。在绝大多数Linux操作系统中，Golang语言的环境常常会与C语言的环境一起安装，因此我们需要先确认C语言环境是否已经正确安装。使用以下命令可以检查你现有的C语言的版本：</p>
<p>如果你没有安装C语言环境，那么我们可以使用以下命令来安装，Ubuntu/Debian操作系统可以通过以下命令进行安装：</p>
<p>CentOS/Fedora/RHEL操作系统上则需要使用以下命令进行安装：</p>
<p>在确认了C编译器安装完成后，我们就可以开始Golang的安装工作了。</p>
<p>二、安装步骤</p>
<p>首先，我们需要从Golang官网上下载相应的安装文件。可以通过以下命令获取到下载地址：</p>
<p>其中，version为当前Golang版本号，arch为系统架构（如amd64、386、arm等）。</p>
<p>下载完成后，使用以下命令解压文件：</p>
<p>接下来，我们需要设置一下Golang语言的相关环境变量。可以编辑用户目录下的.bashrc文件（其他shell，请自行对应修改）：</p>
<p>在末尾添加以下代码：</p>
<p>其中GOPATH为工作目录，可以根据个人喜好进行修改。添加完成后，使用以下命令使环境变量生效：</p>
<p>安装完成后，我们可以使用以下命令验证是否安装成功：</p>
<p>如果成功，将会显示当前安装版本信息。</p>
<p>三、深入学习Golang</p>
<p>学习一个编程语言最好的方法就是去读别人的代码。Golang社区中有许多高质量的开源项目供大家学习。以下是一些Golang社区中常用的代码库：</p>
<p>Gin：Web框架<br>
Gorm：ORM框架<br>
Viper：配置管理工具<br>
Cobra：命令行应用框架<br>
以上是Golang社区中的一些主流工具，如果你需要使用一些其他的开源库，可以去Github上搜索相关项目。</p>
<p>四、总结</p>
<p>本文主要介绍了在Linux系统上安装Golang编程语言的步骤，以及如何设置相关的环境变量。希望本文可以为初学者提供一些参考。在学习Golang的过程中，我们应该尽可能多地去读别人的代码，熟悉一些开源库的使用，方便自己的编程工作。</p>
<p>以上就是如何在Linux系统上安装Golang环境的详细内容，更多请关注php中文网其它相关文章！</p>
</div></template>


