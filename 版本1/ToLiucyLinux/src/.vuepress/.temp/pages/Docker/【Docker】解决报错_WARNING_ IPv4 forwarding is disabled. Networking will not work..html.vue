<template><div><blockquote>
<p>🍁<strong>博主简介</strong><br>
  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！</p>
</blockquote>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项：</h2>
<blockquote>
<p>在这里强调，强制进入或者进入镜像，进入后会引起yum install和wget等不能使用</p>
</blockquote>
<h2 id="docker创建运行指定端口的容器报错" tabindex="-1"><a class="header-anchor" href="#docker创建运行指定端口的容器报错" aria-hidden="true">#</a> docker创建运行指定端口的容器报错：</h2>
<p>是警告，但这个也算是报错。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost /<span class="token punctuation">]</span><span class="token comment"># docker run -itd --name nginx -p 80:80 -p 443:443 -v /etc/localtime:/etc/localtime nginx:latest</span>
WARNING: IPv4 forwarding is disabled. Networking will not work.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解决方式" tabindex="-1"><a class="header-anchor" href="#解决方式" aria-hidden="true">#</a> 解决方式：</h2>
<h3 id="_1-第一步-添加ipv4到-usr-lib-sysctl-d-00-system-conf" tabindex="-1"><a class="header-anchor" href="#_1-第一步-添加ipv4到-usr-lib-sysctl-d-00-system-conf" aria-hidden="true">#</a> 1 第一步：添加ipv4到/usr/lib/sysctl.d/00-system.conf</h3>
<blockquote>
<p>在宿主机上执行echo &quot;net.ipv4.ip_forward=1&quot; &gt;&gt;/usr/lib/sysctl.d/00-system.conf；</p>
</blockquote>
<p>在执行之前可以先看一下这个配置文件；在进行追加命令到配置中；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">"net.ipv4.ip_forward=1"</span> <span class="token operator">>></span>/usr/lib/sysctl.d/00-system.conf；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加完成之后查看一下；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> /usr/lib/sysctl.d/00-system.conf；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161510400.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_2-第二步-重启network和docker服务" tabindex="-1"><a class="header-anchor" href="#_2-第二步-重启network和docker服务" aria-hidden="true">#</a> 2 第二步：重启network和docker服务</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl restart network <span class="token operator">&amp;&amp;</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-第三步-验证问题是否解决" tabindex="-1"><a class="header-anchor" href="#_3-第三步-验证问题是否解决" aria-hidden="true">#</a> 3 第三步：验证问题是否解决</h3>
<p>再次执行创建容器的命令</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker run -itd --name nginx -p 80:80 -p 443:443 -v /etc/localtime:/etc/localtime nginx:latest</span>
474b88c967e10a5003182f185821acab8d8a750d675a3b3eeedcaeefeced2280
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建成功：</p>
<figure><img src="https://img-blog.csdnimg.cn/2f34240912854a25900f94d17dbb1d66.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="问题解决❀" tabindex="-1"><a class="header-anchor" href="#问题解决❀" aria-hidden="true">#</a> 问题解决❀</h2>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161509228.jpeg" alt="" loading="lazy"></h2>
<hr>
</div></template>


