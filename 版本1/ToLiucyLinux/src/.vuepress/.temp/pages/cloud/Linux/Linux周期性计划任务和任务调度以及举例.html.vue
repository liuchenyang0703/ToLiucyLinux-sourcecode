<template><div><p>@[toc]</p>
<h2 id="一次性计划任务-at" tabindex="-1"><a class="header-anchor" href="#一次性计划任务-at" aria-hidden="true">#</a> 一次性计划任务：at</h2>
<p>启动：systemctl start atd<br></p>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>at</td>
<td>设置一次性计划任务</td>
</tr>
<tr>
<td>atq</td>
<td>查询系统中一次性任务</td>
</tr>
<tr>
<td>atrm</td>
<td>删除一次性计划任务</td>
</tr>
</tbody>
</table>
<h2 id="周期性计划任务-crond" tabindex="-1"><a class="header-anchor" href="#周期性计划任务-crond" aria-hidden="true">#</a> 周期性计划任务：crond</h2>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>crontab -e</td>
<td>进入执行命令的编辑模式</td>
</tr>
<tr>
<td>crontab -l</td>
<td>查看周期性计划任务</td>
</tr>
<tr>
<td>crontab -r</td>
<td>删除周期性计划任务</td>
</tr>
</tbody>
</table>
<p>设置永久的周期性计划任务：vim /etc/crontab<br>
进入vim /etc/crontab 编辑，保存退出即可；</p>
<h2 id="重点" tabindex="-1"><a class="header-anchor" href="#重点" aria-hidden="true">#</a> 重点：</h2>
<table>
<thead>
<tr>
<th>字段</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>分</td>
<td>取值为0~59的整数</td>
</tr>
<tr>
<td>时</td>
<td>取值为0~23的任意整数</td>
</tr>
<tr>
<td>日</td>
<td>取值为1~31的任意整数</td>
</tr>
<tr>
<td>月</td>
<td>取值为1~12的任意整数</td>
</tr>
<tr>
<td>周</td>
<td>取值为0~6的任意整数，0代表星期日</td>
</tr>
</tbody>
</table>
<font color=teal>语法：</font><blockquote>
<p>分 时 日 月 周 用户 要执行的命令<br>
* * * * * root 命令</p>
</blockquote>
<font color=green>举例：</font><blockquote>
<font color=blue>1.每周三清空一下/var/ftp目录</font></blockquote>
<p>0 0 * * 3 root rm -rf /var/ftp/*<br></p>
<font color=blue>2.每月的第一个周一凌晨2点30对/var/www/html/进行打包</font><p>30 2 1-7 * 1 root  tar -cvzf backup.tar.gz /var/www/html<br></p>
<font color=blue>3.每月1日，重启一次httpd服务</font><p>0 0 1 * *  root systemctl restart httpd<br></p>
<font color=blue>4.每一分钟删除一个文件</font><p>* * * * * root rm -rf /root/abc.txt<br></p>
<font color=blue>5.每两分钟删除一个目录</font><p>*/2 * * * * root rm -rf /appliaction/ceshi<br></p>
<font color=blue>6.每2周查找目录并删除</font><p>* * * * */2 root find / -name test -type d | xargs rm -rf</p>
<font color=teal>补充：</font><p>uid	用户的唯一标识<br>
gid	用户组的唯一标识<br>
uuid	设备的唯一标识<br>
pid	进程的唯一标识</p>
<h2 id="任务调度" tabindex="-1"><a class="header-anchor" href="#任务调度" aria-hidden="true">#</a> 任务调度：</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token operator">&amp;</span>	将命令放入后台运行
<span class="token function">jobs</span>	查看后台任务
<span class="token function">jobs</span> <span class="token parameter variable">-l</span>	查看后台进程的pid
<span class="token function">fg</span> 序号	将后台任务调度到前台
ctrl+z	将前台任务暂停放到后台
<span class="token function">bg</span> 序号	将后台暂停的任务继续执行
ctrl+c	中断前台执行的任务
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="推荐-周期性计划任务时间生成地址★" tabindex="-1"><a class="header-anchor" href="#推荐-周期性计划任务时间生成地址★" aria-hidden="true">#</a> 推荐：周期性计划任务时间生成地址★</h1>
<blockquote>
<p><a href="https://www.box3.cn/page/crontab.html" target="_blank" rel="noopener noreferrer">crontab工具在线生成器<ExternalLinkIcon/></a></p>
</blockquote>
<figure><img src="https://img-blog.csdnimg.cn/f58471169d8f419f8585079d5568d49d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>              <font size=5>总文章在：<a href="https://blog.csdn.net/liu_chen_yang/article/details/114872010?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Linux常用命令<ExternalLinkIcon/></a><br>
<img src="https://img-blog.csdnimg.cn/b6c5a9e4a5af4687a64e020cac19eb09.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"></p>
</div></template>


