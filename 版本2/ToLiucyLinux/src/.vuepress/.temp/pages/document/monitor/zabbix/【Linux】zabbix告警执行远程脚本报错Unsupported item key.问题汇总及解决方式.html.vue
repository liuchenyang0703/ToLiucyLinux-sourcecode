<template><div><blockquote>
<p>🍁<strong>博主简介</strong><br>
  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者</a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主</a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主</a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区</a> 欢迎大家的加入！</p>
</blockquote>
<p>使用zabbix监控时，有时需要直接监控如果告警则执行某个程序；<br>
但是远程命令执行的时候出现了报错：<font color=red>Unsupported item key.</font>；这种报错有以下几中整理出来的可能原因；</p>
<h2 id="_1、修改自定义脚本未重启客户端" tabindex="-1"><a class="header-anchor" href="#_1、修改自定义脚本未重启客户端"><span>1、修改自定义脚本未重启客户端</span></a></h2>
<p>有时候使用自定义脚本监控，自动修改了zabix-agentd.conf之后，并没有将其重新启动，会有这个报错；</p>
<font color=teal>解决方法：重启zabbix-agent</font><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> zabbix-agent.service</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2、未开启zabbix的通信端口" tabindex="-1"><a class="header-anchor" href="#_2、未开启zabbix的通信端口"><span>2、未开启zabbix的通信端口</span></a></h2>
<p>使用zabbix监控服务器时，由于zabbix agent与zabbix server通过10050端口通信。server端侦听在10051端口，客户端侦听在10050端口，所以我们要将端口暴露出来。有时服务器并没有将10050端口开启，进而导致报错。<br>
首先我们可以使用命令iptables -nL查看其是否开启，没有开启，将其开启即可。<br>
开启命令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"> #172.16.11.202是你的zabbix server的ip地址</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">iptables</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -I</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> INPUT</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tcp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -s</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 172.16.11.202</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tcp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --dport</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10050</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> comment</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --comment</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "zabbix_agentd listen 10050"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -j</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ACCEPT</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、item的超时时间" tabindex="-1"><a class="header-anchor" href="#_3、item的超时时间"><span>3、Item的超时时间</span></a></h2>
<p>使用Zabbix的时候往往会自定义Item。但是经常会遇到自定义的Item动不动就Not Supported了。其实原因很简单。Zabbix Agent默认的超时时间是3秒。往往我们自定义的Item由于各种原因返回时间会比较长。所以建议统一修改一个适合自己实际的值。<br>
修改操作如下：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/zabbix/zabbix_agent.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#Range: 1-30</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">Timeout</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">30</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改完毕后重启zabbix-agent即可；</p>
<h2 id="_4、zabbix-agentd与item-key版本不兼容" tabindex="-1"><a class="header-anchor" href="#_4、zabbix-agentd与item-key版本不兼容"><span>4、zabbix_agentd与item_key版本不兼容</span></a></h2>
<p>zabbix_agentd版本兼容性导致item_key不支持的故障；<br>
有可能是自己升级了客户端或者服务端导致两个端口版本不一致，进而产生错误。<br>
解决版本;升级客户端或者服务端到相同的版本；</p>
<h2 id="_5、未开启远程执行操作命令的配置" tabindex="-1"><a class="header-anchor" href="#_5、未开启远程执行操作命令的配置"><span>5、未开启远程执行操作命令的配置</span></a></h2>
<p>首先要实现远程执行命令的话需要开启agent端配置文件里的EnableRemoteCommands=1的参数</p>
<p>如果不改的话 当触发报警同时 会发现执行命令失败而报这Unsupported item key.错；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/zabbix/zabbix_agentd.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#启用远程命令</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">EnableRemoteCommands</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开启远程命令，重启服务再次测试即可；</p>
<h2 id="附加" tabindex="-1"><a class="header-anchor" href="#附加"><span>附加+</span></a></h2>
<p>如有遇到执行命令报错Permission denied表示没有权限执行当前命令；<br>
这个时候需要使用visudo 去增加zabbix 使用sudo 切换到root用户的权限zabbix  ALL=(ALL)       NOPASSWD:ALL</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">visudo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">zabbix</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  ALL=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ALL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)       </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">NOPASSWD:ALL</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更改完再次测试即可；</p>
</div></template>


