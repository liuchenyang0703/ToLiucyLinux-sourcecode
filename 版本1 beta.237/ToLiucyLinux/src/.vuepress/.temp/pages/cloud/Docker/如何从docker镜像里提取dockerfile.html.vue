<template><div><p>hello，大家好，今天在玩docker的时候发现了很好用的东西，他就是用来提取镜像中的dockerfile的。这个是前者留下来的镜像，但是dockerfile被删除了，现在想知道dockerfile里面是如何写的，然后去查了查就有了新的发现——通过镜像来提取dockerfile，接下来我就把方法分享给大家。<br>
<img src="https://img-blog.csdnimg.cn/842adbcd70714079bf5032f3de9a9bc6.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"></p>
<p>@[toc]<br>
<img src="https://img-blog.csdnimg.cn/8ee79cdeae3941aebb318e499464bcdb.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"></p>
<h1 id="从镜像中提取dockerfile的两种方法" tabindex="-1"><a class="header-anchor" href="#从镜像中提取dockerfile的两种方法" aria-hidden="true">#</a> 从镜像中提取dockerfile的两种方法</h1>
<h2 id="_1、history参数" tabindex="-1"><a class="header-anchor" href="#_1、history参数" aria-hidden="true">#</a> 1、history参数</h2>
<p>我们可以直接用docker自带的参数来查看镜像的dockerfile，但有一点就是看的不完全，只能看到前面的一小部分；<br>
例如：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#docker history 镜像名称:标签</span>
<span class="token function">docker</span> <span class="token function">history</span> nginx:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/1ea18a4176694d73a37dd3ee069b7881.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
虽然docker history命令可以看到所有历史层级的操作，但是还是需要手动去写Dockerfile，看的不是那么全，所以我们还有一个能看到非常详细的工具👇↓👇</p>
<h2 id="_2、dfimage" tabindex="-1"><a class="header-anchor" href="#_2、dfimage" aria-hidden="true">#</a> 2、dfimage</h2>
<p>首先他不是一个命令，他是一个工具<br>
dfimage是一个alpine的镜像，启动的时候，通过将docker.sock映射到容器内部来运行，通常将这个操作做成别名，让他变成一个工具（做完别名不能换新的bash，否则该别名就会消失，如果不想消失，可以做一个永久的别名，这样不管在任何地方都可以用了）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">alias</span> <span class="token assign-left variable">dfimage</span><span class="token operator">=</span><span class="token string">"docker run -v /var/run/docker.sock:/var/run/docker.sock --rm alpine/dfimage"</span>  
 
dfimage <span class="token parameter variable">-sV</span><span class="token operator">=</span><span class="token number">1.36</span> nginx:latest 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们拿nginx镜像试验下<br>
<img src="https://img-blog.csdnimg.cn/4b883de1eb5b43b39448877960f340b1.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
先pull一个nginx镜像，我这里之前有，就直接用了，接着通过上面提到的命令，别名一个dfimage命令<br>
<img src="https://img-blog.csdnimg.cn/a22168da87b04ba08ae3e2497f4db4b2.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
做好别名之后，通过dfimage去生成nginx的Dockerfile，其实就是启动一个容器工具，执行完之后即删除该容器，镜像保留<br>
<img src="https://img-blog.csdnimg.cn/cacac09b6662497eb3a83d032d4a20cd.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/21e451375d6143aeae1486deeb4f2517.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
如果有报错，不能执行，估计就是缺少-sV=1.36，具体这个报错呢，暂时还没有研究，但是加上-sV=1.36就可以。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#dfimage -sV=1.36 镜像名称:标签</span>
dfimage <span class="token parameter variable">-sV</span><span class="token operator">=</span><span class="token number">1.36</span> nginx:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/d1180061f9bc4ab184b297dce4e253e0.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
即可看到完整的dockerfile，这个工具查看的非常的详细</p>
<h2 id="补充-如何设置永久的别名" tabindex="-1"><a class="header-anchor" href="#补充-如何设置永久的别名" aria-hidden="true">#</a> 补充：如何设置永久的别名</h2>
<p>链接：<a href="https://blog.csdn.net/liu_chen_yang/article/details/123204224?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Linux设置永久别名alias的方法<ExternalLinkIcon/></a><br>
可以参考我发布的另一篇专门设置永久别名的文章，谢谢！</p>
</div></template>


