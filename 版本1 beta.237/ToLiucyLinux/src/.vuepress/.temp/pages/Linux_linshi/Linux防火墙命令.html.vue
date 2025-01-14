<template><div><blockquote>
<p><strong>redhat/CentOs7关闭防火墙的命令!</strong></p>
</blockquote>
<h2 id="_1、查看防火状态" tabindex="-1"><a class="header-anchor" href="#_1、查看防火状态" aria-hidden="true">#</a> 1、查看防火状态</h2>
<blockquote>
<p>systemctl status firewalld<br>
service  iptables status</p>
</blockquote>
<h2 id="_2、暂时关闭防火墙" tabindex="-1"><a class="header-anchor" href="#_2、暂时关闭防火墙" aria-hidden="true">#</a> 2、暂时关闭防火墙</h2>
<blockquote>
<p>systemctl stop firewalld<br>
service  iptables stop</p>
</blockquote>
<h2 id="_3、永久关闭防火墙" tabindex="-1"><a class="header-anchor" href="#_3、永久关闭防火墙" aria-hidden="true">#</a> 3、永久关闭防火墙</h2>
<blockquote>
<p>systemctl disable firewalld<br>
chkconfig iptables off</p>
</blockquote>
<h2 id="_4、重启防火墙" tabindex="-1"><a class="header-anchor" href="#_4、重启防火墙" aria-hidden="true">#</a> 4、重启防火墙</h2>
<blockquote>
<p>systemctl enable firewalld<br>
service iptables restart</p>
</blockquote>
</div></template>


