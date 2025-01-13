<template><div><font color=teal>日志：记录系统中相关的信息	系统日志	程序日志</font><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412200948362.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>/var/log	一般都存在这里面<br>
/var/log/messages	系统日志</p>
</blockquote>
<p>从CentOs6开始，日志由系统中的rsyslog服务管理<br>
日志存放在/var/log目录下</p>
<h2 id="相关命令" tabindex="-1"><a class="header-anchor" href="#相关命令"><span>相关命令：</span></a></h2>
<blockquote>
<p>dmesg	查看内核和硬件相关的日志<br><br>
last	查看用户登录的记录<br><br>
lastlog	查看用户最后一次登录的时间<br><br>
lastb	记录用户登录失败的信息<br><br>
logrotate	实现日志轮割</p>
</blockquote>
<h2 id="日志的级别-9个" tabindex="-1"><a class="header-anchor" href="#日志的级别-9个"><span>日志的级别（9个）：</span></a></h2>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>emerg		紧急（会导致主机系统不可用）</td>
</tr>
<tr>
<td>1</td>
<td>alert		警告（必须马上处理）</td>
</tr>
<tr>
<td>2</td>
<td>crit		严重（比较严重）</td>
</tr>
<tr>
<td>3</td>
<td>err		错误信息</td>
</tr>
<tr>
<td>4</td>
<td>warning	提醒（警告）</td>
</tr>
<tr>
<td>5</td>
<td>notice		注意</td>
</tr>
<tr>
<td>6</td>
<td>info		一般信息</td>
</tr>
<tr>
<td>7</td>
<td>debug		程序或系统的调试信息</td>
</tr>
<tr>
<td>8</td>
<td>none		空，不记录日志</td>
</tr>
</tbody>
</table>
<h2 id="参考实例" tabindex="-1"><a class="header-anchor" href="#参考实例"><span>参考实例：</span></a></h2>
<blockquote>
<p>在周期计划性任务里写（crontab -e）cp file1 file1-$(date +%Y%m%d) &amp;&amp; &gt;<br>
file1【在周期计划性任务中，实现把当前目录下的file1复制一份重新创建一个叫file1-时间（注意date里面的年月日..要加转义\）然后重定向清空file1】<br><br>
在crontab中%是有特殊含义的，表示换的意思。如果要用的话，必须进行转义%，如经常用的date<br>
<code v-pre>+%Y%m%d</code>在crontab中是不会执行的，应该换成date<code v-pre>+\%Y\%m\%d</code></p>
</blockquote>
<h2 id="syslog管理" tabindex="-1"><a class="header-anchor" href="#syslog管理"><span>syslog管理：</span></a></h2>
<p>系统的日志由服务rsyslog管理<br>
日志集中系统:</p>
<p><strong><font color=blue>服务端 ：</font></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@nginx-1 ~]# vim /etc/rsyslog.conf </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> 15</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $ModLoad</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> imudp</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> 16</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $UDPServerRun</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 514</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@nginx-1 ~]#systemctl restart rsyslog  重启服务</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#先安装yum -y install net-tools配置网络要用的比如ifconfig</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@nginx-1 ~]#netstat -anput|</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 514</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#查看是否开放514号端口的服务</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><font color=blue>客户端：</font></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#添加服务端信息</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@nginx-2 ~]# vim /etc/rsyslog.conf</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	90</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> *</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> @192.168.2.11:514</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 所有的服务</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> .</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 表示以上级别</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> *</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 所有级别</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	@</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 表示UDP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> @@</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 表示TCP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   服务端ip:端口</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#重启rsyslog服务</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@nginx-2 ~]#systemctl restart rsyslog </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#测试时使用tail -f 观察服务端/var/log/messages日志的变化</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@nginx-2 ~]#logger </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"123123"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  产生一条日志测试 </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@nginx-2 ~]#tailf /var/log/messages</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>.	记录包含该等级及以上级别的信息<br>
.=	只记录当前等级的信息<br>
!	除了该等级都记录</p>
</blockquote>
</div></template>


