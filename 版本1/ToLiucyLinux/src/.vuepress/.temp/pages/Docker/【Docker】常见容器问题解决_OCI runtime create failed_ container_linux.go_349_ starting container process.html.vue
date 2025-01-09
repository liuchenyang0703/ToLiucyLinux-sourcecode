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
<h2 id="错误详情" tabindex="-1"><a class="header-anchor" href="#错误详情" aria-hidden="true">#</a> 错误详情</h2>
<blockquote>
<p>Creating nginx ... error<br>
 <br>
ERROR: for nginx  Cannot start service nginx: <font color=red>OCI runtime create failed: container_linux.go:349: starting container process caused &quot;process_linux.go:449: container init caused &quot;rootfs_linux.go:58</font>: mounting \&quot;/data/docker-compose/nginx.conf\&quot; to rootfs \&quot;/var/lib/docker/overlay2/bf2df5c96248169fac877836243d3e4fe8660e5572b217e8dd5f9066b07c8c25/merged\&quot; at \&quot;/var/lib/docker/overlay2/bf2df5c96248169fac877836243d3e4fe8660e5572b217e8dd5f9066b07c8c25/merged/etc/nginx/nginx.conf\&quot; caused \&quot;not a directory\&quot;&quot;&quot;: unknown: Are you trying to mount a directory onto a file (or vice-versa)? Check if the specified host path exists and is the expected type<br>
 <br>
ERROR: for nginx  Cannot start service nginx: <font color=red>OCI runtime create failed: container_linux.go:349: starting container process caused &quot;process_linux.go:449: container init caused &quot;rootfs_linux.go:58</font>: mounting \&quot;/data/docker-compose/nginx.conf\&quot; to rootfs \&quot;/var/lib/docker/overlay2/bf2df5c96248169fac877836243d3e4fe8660e5572b217e8dd5f9066b07c8c25/merged\&quot; at \&quot;/var/lib/docker/overlay2/bf2df5c96248169fac877836243d3e4fe8660e5572b217e8dd5f9066b07c8c25/merged/etc/nginx/nginx.conf\&quot; caused \&quot;not a directory\&quot;&quot;&quot;: unknown: Are you trying to mount a directory onto a file (or vice-versa)? Check if the specified host path exists and is the expected type<br>
ERROR: Encountered errors while bringing up the project.</p>
</blockquote>
<h2 id="错误原因" tabindex="-1"><a class="header-anchor" href="#错误原因" aria-hidden="true">#</a> 错误原因</h2>
<blockquote>
<p>docker映射的文件默认是会创建目录的，但是不会创建文件，因为yaml文件种或者docker -v中有映射配置文件，所以会报错；</p>
</blockquote>
<h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2>
<p>查看yaml文件或者docker 创建命令<br>
/data/nginx/conf/nginx.conf:/etc/nginx/nginx.conf</p>
<p>找到了有一个是映射的配置文件，而容器外没有这个配置文件，所以会报错，任意添加一个这个命名的文件或者是拉取一个配置文件即可解决。</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161518745.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161519111.png" alt="" loading="lazy"></p>
<p>添加完或创建完文件之后再次执行就可以成功创建了；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161518169.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


