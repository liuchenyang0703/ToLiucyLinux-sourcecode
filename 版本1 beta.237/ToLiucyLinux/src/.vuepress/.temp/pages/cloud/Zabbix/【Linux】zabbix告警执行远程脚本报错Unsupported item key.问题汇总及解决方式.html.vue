<template><div><blockquote>
<p>🍁<strong>博主简介</strong><br>
  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！</p>
</blockquote>
<p>@<a href="%E7%9B%AE%E5%BD%95">toc</a><br>
使用zabbix监控时，有时需要直接监控如果告警则执行某个程序；<br>
但是远程命令执行的时候出现了报错：<font color=red>Unsupported item key.</font>；这种报错有以下几中整理出来的可能原因；</p>
<h1 id="_1、修改自定义脚本未重启客户端" tabindex="-1"><a class="header-anchor" href="#_1、修改自定义脚本未重启客户端" aria-hidden="true">#</a> 1、修改自定义脚本未重启客户端</h1>
<p>有时候使用自定义脚本监控，自动修改了zabix-agentd.conf之后，并没有将其重新启动，会有这个报错；</p>
<font color=teal>解决方法：重启zabbix-agent</font><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl restart zabbix-agent.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_2、未开启zabbix的通信端口" tabindex="-1"><a class="header-anchor" href="#_2、未开启zabbix的通信端口" aria-hidden="true">#</a> 2、未开启zabbix的通信端口</h1>
<p>使用zabbix监控服务器时，由于zabbix agent与zabbix server通过10050端口通信。server端侦听在10051端口，客户端侦听在10050端口，所以我们要将端口暴露出来。有时服务器并没有将10050端口开启，进而导致报错。<br>
首先我们可以使用命令iptables -nL查看其是否开启，没有开启，将其开启即可。<br>
开启命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code> <span class="token comment">#172.16.11.202是你的zabbix server的ip地址</span>
iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-s</span> <span class="token number">172.16</span>.11.202 <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">10050</span> <span class="token parameter variable">-m</span> comment <span class="token parameter variable">--comment</span> <span class="token string">"zabbix_agentd listen 10050"</span> <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3、item的超时时间" tabindex="-1"><a class="header-anchor" href="#_3、item的超时时间" aria-hidden="true">#</a> 3、Item的超时时间</h1>
<p>使用Zabbix的时候往往会自定义Item。但是经常会遇到自定义的Item动不动就Not Supported了。其实原因很简单。Zabbix Agent默认的超时时间是3秒。往往我们自定义的Item由于各种原因返回时间会比较长。所以建议统一修改一个适合自己实际的值。<br>
修改操作如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> /etc/zabbix/zabbix_agent.conf

<span class="token comment">#Range: 1-30</span>
<span class="token assign-left variable">Timeout</span><span class="token operator">=</span><span class="token number">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改完毕后重启zabbix-agent即可；</p>
<h1 id="_4、zabbix-agentd与item-key版本不兼容" tabindex="-1"><a class="header-anchor" href="#_4、zabbix-agentd与item-key版本不兼容" aria-hidden="true">#</a> 4、zabbix_agentd与item_key版本不兼容</h1>
<p>zabbix_agentd版本兼容性导致item_key不支持的故障；<br>
有可能是自己升级了客户端或者服务端导致两个端口版本不一致，进而产生错误。<br>
解决版本;升级客户端或者服务端到相同的版本；</p>
<h1 id="_5、未开启远程执行操作命令的配置" tabindex="-1"><a class="header-anchor" href="#_5、未开启远程执行操作命令的配置" aria-hidden="true">#</a> 5、未开启远程执行操作命令的配置</h1>
<p>首先要实现远程执行命令的话需要开启agent端配置文件里的EnableRemoteCommands=1的参数</p>
<p>如果不改的话 当触发报警同时 会发现执行命令失败而报这Unsupported item key.错；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> /etc/zabbix/zabbix_agentd.conf

<span class="token comment">#启用远程命令</span>
<span class="token assign-left variable">EnableRemoteCommands</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开启远程命令，重启服务再次测试即可；</p>
<h1 id="附加" tabindex="-1"><a class="header-anchor" href="#附加" aria-hidden="true">#</a> 附加+</h1>
<p>如有遇到执行命令报错Permission denied表示没有权限执行当前命令；<br>
这个时候需要使用visudo 去增加zabbix 使用sudo 切换到root用户的权限zabbix  ALL=(ALL)       NOPASSWD:ALL</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>visudo

zabbix  <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span>       NOPASSWD:ALL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更改完再次测试即可；</p>
</div></template>


