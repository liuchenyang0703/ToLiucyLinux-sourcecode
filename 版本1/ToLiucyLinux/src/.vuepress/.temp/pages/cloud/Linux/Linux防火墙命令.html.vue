<template><div><figure><img src="https://img-blog.csdnimg.cn/f58471169d8f419f8585079d5568d49d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>              <font size=5>总文章在：<a href="https://blog.csdn.net/liu_chen_yang/article/details/114872010?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Linux常用命令<ExternalLinkIcon/></a><br>
<img src="https://img-blog.csdnimg.cn/b6c5a9e4a5af4687a64e020cac19eb09.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
red hat/CentOs7关闭防火墙的命令!</p>
<h2 id="_1、查看防火状态" tabindex="-1"><a class="header-anchor" href="#_1、查看防火状态" aria-hidden="true">#</a> <strong>1、查看防火状态</strong></h2>
<blockquote>
<p>systemctl status firewalld<br>
service  iptables status</p>
</blockquote>
<h2 id="_2、暂时关闭防火墙" tabindex="-1"><a class="header-anchor" href="#_2、暂时关闭防火墙" aria-hidden="true">#</a> <strong>2、暂时关闭防火墙</strong></h2>
<blockquote>
<p>systemctl stop firewalld<br>
service  iptables stop</p>
</blockquote>
<h2 id="_3、永久关闭防火墙" tabindex="-1"><a class="header-anchor" href="#_3、永久关闭防火墙" aria-hidden="true">#</a> <strong>3、永久关闭防火墙</strong></h2>
<blockquote>
<p>systemctl disable firewalld<br>
chkconfig iptables off</p>
</blockquote>
<h2 id="_4、重启防火墙" tabindex="-1"><a class="header-anchor" href="#_4、重启防火墙" aria-hidden="true">#</a> <strong>4、重启防火墙</strong></h2>
<blockquote>
<p>systemctl enable firewalld<br>
service iptables restart</p>
</blockquote>
</div></template>


