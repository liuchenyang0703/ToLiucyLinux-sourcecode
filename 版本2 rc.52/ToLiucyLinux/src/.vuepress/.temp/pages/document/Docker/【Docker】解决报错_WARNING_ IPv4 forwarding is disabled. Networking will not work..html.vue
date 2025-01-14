<template><div><blockquote>
<p>🍁<strong>博主简介</strong><br>
  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者</a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主</a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主</a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区</a> 欢迎大家的加入！</p>
</blockquote>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项：</span></a></h2>
<blockquote>
<p>在这里强调，强制进入或者进入镜像，进入后会引起yum install和wget等不能使用</p>
</blockquote>
<h2 id="docker创建运行指定端口的容器报错" tabindex="-1"><a class="header-anchor" href="#docker创建运行指定端口的容器报错"><span>docker创建运行指定端口的容器报错：</span></a></h2>
<p>是警告，但这个也算是报错。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost /]# docker run -itd --name nginx -p 80:80 -p 443:443 -v /etc/localtime:/etc/localtime nginx:latest</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">WARNING:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> IPv4</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> forwarding</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> disabled.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Networking</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> will</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> not</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> work.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解决方式" tabindex="-1"><a class="header-anchor" href="#解决方式"><span>解决方式：</span></a></h2>
<h3 id="_1-第一步-添加ipv4到-usr-lib-sysctl-d-00-system-conf" tabindex="-1"><a class="header-anchor" href="#_1-第一步-添加ipv4到-usr-lib-sysctl-d-00-system-conf"><span>1 第一步：添加ipv4到/usr/lib/sysctl.d/00-system.conf</span></a></h3>
<blockquote>
<p>在宿主机上执行echo &quot;net.ipv4.ip_forward=1&quot; &gt;&gt;/usr/lib/sysctl.d/00-system.conf；</p>
</blockquote>
<p>在执行之前可以先看一下这个配置文件；在进行追加命令到配置中；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "net.ipv4.ip_forward=1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> >></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/usr/lib/sysctl.d/00-system.conf；</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>添加完成之后查看一下；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/lib/sysctl.d/00-system.conf；</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161510400.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_2-第二步-重启network和docker服务" tabindex="-1"><a class="header-anchor" href="#_2-第二步-重启network和docker服务"><span>2 第二步：重启network和docker服务</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> network</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-第三步-验证问题是否解决" tabindex="-1"><a class="header-anchor" href="#_3-第三步-验证问题是否解决"><span>3 第三步：验证问题是否解决</span></a></h3>
<p>再次执行创建容器的命令</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# docker run -itd --name nginx -p 80:80 -p 443:443 -v /etc/localtime:/etc/localtime nginx:latest</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">474b88c967e10a5003182f185821acab8d8a750d675a3b3eeedcaeefeced2280</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建成功：</p>
<figure><img src="https://img-blog.csdnimg.cn/2f34240912854a25900f94d17dbb1d66.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="问题解决❀" tabindex="-1"><a class="header-anchor" href="#问题解决❀"><span>问题解决❀</span></a></h2>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161509228.jpeg" alt="" loading="lazy"></span></a></h2>
<hr>
</div></template>


