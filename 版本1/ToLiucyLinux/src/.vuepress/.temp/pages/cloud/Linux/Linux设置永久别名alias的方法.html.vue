<template><div><figure><img src="https://img-blog.csdnimg.cn/f58471169d8f419f8585079d5568d49d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>              <font size=5>总文章在：<a href="https://blog.csdn.net/liu_chen_yang/article/details/114872010?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Linux常用命令<ExternalLinkIcon/></a><br>
<img src="https://img-blog.csdnimg.cn/b6c5a9e4a5af4687a64e020cac19eb09.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="" loading="lazy"></p>
<p>编辑<font color=red> .bashrc</font>文件，该文件主要用于保存一些个性化的设置，如命令别名、路径等：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> .bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/982241ee05554391bd1f22943a83f6ad.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_14,color_FFFFFF,t_70,g_se,x_16" alt="" loading="lazy"><br>
进入该文件里，我们要在最后一行或者最后在空出来几行来新增我们的个性化配置，如设置别名：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">alias</span> <span class="token assign-left variable">dfimage</span><span class="token operator">=</span><span class="token string">"docker run -v /var/run/docker.sock:/var/run/docker.sock --rm alpine/dfimage"</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>比如下图👇<br>
<img src="https://img-blog.csdnimg.cn/d09ca1eeb3874176975b69fdd6154f2d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="" loading="lazy"><br>
设置完之后，我们:wq保存并退出</p>
<blockquote>
<p>:wq</p>
</blockquote>
<p>保存文件后，在执行<font color=red> source .bashrc</font>命令，使之生效。<br>
然后自己可以去测试一下；<br>
最后，需要我们注意的是，.bashrc文件是针对用户级别的个性化设置。切记切记！</p>
</div></template>


