<template><div><h2 id="一次性计划任务-at" tabindex="-1"><a class="header-anchor" href="#一次性计划任务-at"><span>一次性计划任务：at</span></a></h2>
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
<h2 id="周期性计划任务-crond" tabindex="-1"><a class="header-anchor" href="#周期性计划任务-crond"><span>周期性计划任务：crond</span></a></h2>
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
<h2 id="重点" tabindex="-1"><a class="header-anchor" href="#重点"><span>重点：</span></a></h2>
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
<h2 id="任务调度" tabindex="-1"><a class="header-anchor" href="#任务调度"><span>任务调度：</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x26;	</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">将命令放入后台运行</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">jobs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">	查看后台任务</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">jobs</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -l</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">	查看后台进程的pid</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">fg</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 序号</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">	将后台任务调度到前台</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ctrl+z</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">	将前台任务暂停放到后台</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">bg</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 序号</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">	将后台暂停的任务继续执行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ctrl+c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">	中断前台执行的任务</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="推荐-周期性计划任务时间生成地址★" tabindex="-1"><a class="header-anchor" href="#推荐-周期性计划任务时间生成地址★"><span>推荐：周期性计划任务时间生成地址★</span></a></h2>
<blockquote>
<p><a href="https://www.box3.cn/page/crontab.html" target="_blank" rel="noopener noreferrer">crontab工具在线生成器</a></p>
</blockquote>
</div></template>


