<template><div><h2 id="🏆前言" tabindex="-1"><a class="header-anchor" href="#🏆前言"><span>🏆前言</span></a></h2>
<p>  有的时候zabbix提供的监控项目，不能满足我们生产环境下的监控需求，此时我们就要按照zabbix的规范自定义监控项目，来达到监控的目的。</p>
<h3 id="🥈定义监控项介绍" tabindex="-1"><a class="header-anchor" href="#🥈定义监控项介绍"><span>🥈定义监控项介绍</span></a></h3>
<blockquote>
<p>监控项就是监控项目，监控指标，具体的监控内容。<br>
在添加主机时我们会选择关联模板，模板中自带很多监控项，但是很多时候我们需要监控的监控项模板中没有，此时需要自定义监控项。<br><br>
<strong><font color=red>自定义监控项的步骤可以分为：取值，配置，测试，添加。<br><br>
取值和配置在客户端进行，测试在服务端进行，添加在web页面进行</font></strong></p>
</blockquote>
<h2 id="🥇任务" tabindex="-1"><a class="header-anchor" href="#🥇任务"><span>🥇任务</span></a></h2>
<blockquote>
<p>下面给大家举例一个：自定义监控一个进程，如果监控到该进程则不报警；如果没有监控到，则报警发送邮件；如果报警处理后，恢复监控，则通知发送邮件。</p>
</blockquote>
<h3 id="🥈客户端" tabindex="-1"><a class="header-anchor" href="#🥈客户端"><span>🥈客户端</span></a></h3>
<h4 id="🥉取值" tabindex="-1"><a class="header-anchor" href="#🥉取值"><span>🥉取值</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ps</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -ef</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> grep</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -E</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cs.jar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">wc</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -l</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="🥉配置" tabindex="-1"><a class="header-anchor" href="#🥉配置"><span>🥉配置</span></a></h4>
<p>在被监控端的agent配置文件中添加配置</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#进入zabbix客户端</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/zabbix/zabbix_agentd.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#寻找UserParameter=键，监测脚本或者命令</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#zabbix监控项是以键值对的形式定义的，cs为键，也就是监控项的名称，取值命令为值；</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#大概在296行，添加</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">UserParameter</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">cs,ps</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> -ef</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> grep</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -E</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cs.jar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">wc</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -l</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#保存退出，重启客户端</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> zabbix-agent.service</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🥈服务端" tabindex="-1"><a class="header-anchor" href="#🥈服务端"><span>🥈服务端</span></a></h3>
<p>先看看服务端有没有安装zabbix-get这个命令，没有的话，安装一下即可</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> zabbix-get</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>zabbix_get:模拟zabbix_server获取agent数据</p>
<h4 id="🥉测试" tabindex="-1"><a class="header-anchor" href="#🥉测试"><span>🥉测试</span></a></h4>
<p>测试在服务端使用zabbix_get命令实现</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#-s	指定客户端ip</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#-k	指定客户端配置文件里设置的键</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# zabbix_get -s 192.10.2.112 -k cs</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时服务端是可以获取到客户端的值的，说明配置成功，<font color=red>配置完之后必须要重启客户端；</font>然后接下来就是添加监控项；</p>
<font color=red>**注意：**</font>不管取到0或者1都是配置成功了，如果没有配置成功会报错：ZBX_NOTSUPPORTED: Unsupported item key.；<h3 id="🥈web页面" tabindex="-1"><a class="header-anchor" href="#🥈web页面"><span>🥈web页面</span></a></h3>
<h4 id="🥉添加监控项" tabindex="-1"><a class="header-anchor" href="#🥉添加监控项"><span>🥉添加监控项</span></a></h4>
<p>1.登陆web界面，配置——主机——创建主机<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161032668.png" alt="" loading="lazy"><br>
选择主机，并填写以下红框部分。<font color=red>主机名称：</font>与agent配置文件中Hostname保持一致，<font color=red>可见名称：</font>自定义，<font color=red>群组：</font>选择一个或者新建一个，<font color=red>ip地址：</font>一般为内网ip，如果需要走公网监控则填写公网ip<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161032676.png" alt="" loading="lazy"></p>
<p>2.监控项——创建监控项</p>
<font color=red>主机里要选中你监控的那台客户端</font><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161031746.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161031165.png" alt="" loading="lazy"><br>
按下图进行填写，最后选择添加即可<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161031032.png" alt="" loading="lazy"><br>
3.查看监控项的结果<br>
监测——最新数据<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161031817.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161031113.png" alt="" loading="lazy"></p>
<h4 id="🥉添加触发器" tabindex="-1"><a class="header-anchor" href="#🥉添加触发器"><span>🥉添加触发器</span></a></h4>
<p>监控项创建完我们来创建触发器<br>
点击触发器<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161031240.png" alt="" loading="lazy"><br>
创建触发器<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161031912.png" alt="" loading="lazy"><br>
按照下图来做就可以<br>
还是设置0比较好，&gt;1的话有点问题。<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161031687.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161030837.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161030488.png" alt="" loading="lazy"><br>
恢复表达式同样，只不过结果有些不同，可以写成=1就恢复。<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161030237.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/2d9cf417b68d44b683cf7469b97081b0.png" alt="" loading="lazy"></p>
<h4 id="🥉添加报警媒介" tabindex="-1"><a class="header-anchor" href="#🥉添加报警媒介"><span>🥉添加报警媒介</span></a></h4>
<p>管理——报警媒介类型<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161030396.png" alt="" loading="lazy"><br>
可以选择Email<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161030879.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161030365.png" alt="" loading="lazy"></p>
<p>注意：密码不是你的163或者qq密码，是邮箱内的smtp码，这里我们来用qq邮箱来举例</p>
<h4 id="🥉qq邮箱生成smtp码" tabindex="-1"><a class="header-anchor" href="#🥉qq邮箱生成smtp码"><span>🥉qq邮箱生成smtp码</span></a></h4>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161030508.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161030515.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161030993.png" alt="" loading="lazy"><br>
发送短信，获取授权码，返回zabbix放到密码里就ok了。<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161030781.png" alt="" loading="lazy"><br>
生成smtp码之后，填写密码，保存即可。</p>
<h4 id="🥉设置用户和报警媒介" tabindex="-1"><a class="header-anchor" href="#🥉设置用户和报警媒介"><span>🥉设置用户和报警媒介</span></a></h4>
<p>管理——用户<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161030895.png" alt="" loading="lazy"><br>
用户直接用超级管理员即可<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161029919.png" alt="" loading="lazy"><br>
添加报警媒介<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161029356.png" alt="" loading="lazy"><br>
可以用qq邮箱，也可以用163邮箱<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161029130.png" alt="" loading="lazy"><br>
点击添加，完成<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161029937.png" alt="" loading="lazy"><br>
切记一定要点添加或者更新。</p>
<h4 id="🥉添加动作" tabindex="-1"><a class="header-anchor" href="#🥉添加动作"><span>🥉添加动作</span></a></h4>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161029019.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161029378.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161029543.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161029233.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161029000.png" alt="" loading="lazy"><br>
我们来勾选Custom message，告警和恢复的主题和消息，我们放到了这两张图的下面。</p>
<p>故障：<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161029230.png" alt="" loading="lazy"></p>
<p>恢复：<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161029075.png" alt="" loading="lazy"></p>
<p>故障：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">故障</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{TRIGGER.STATUS}</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">,服务器名:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{HOST.NAME}</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">发生:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {TRIGGER.NAME}故障!</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">告警主机:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{HOST.NAME}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">告警主机IP地址:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{HOST.IP}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">告警时间:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{EVENT.DATE}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {EVENT.TIME}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">告警等级:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{TRIGGER.SEVERITY}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">告警信息:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {TRIGGER.NAME}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">告警项目:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{TRIGGER.KEY1}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">问题详情:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{ITEM.NAME}</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{ITEM.VALUE}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">当前状态:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{TRIGGER.STATUS}</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{ITEM.VALUE1}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">事件ID：</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{EVENT.ID}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>恢复：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">恢复</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{TRIGGER.STATUS}</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 服务器名:{HOST.NAME}:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {TRIGGER.NAME}已恢复!</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">恢复主机:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{HOST.NAME}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">恢复主机IP地址:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{HOST.IP}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">恢复时间:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{EVENT.DATE}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {EVENT.TIME}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">恢复等级:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{TRIGGER.SEVERITY}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">恢复信息:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {TRIGGER.NAME}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">恢复项目:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{TRIGGER.KEY1}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">恢复问题详情:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{ITEM.NAME}</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{ITEM.VALUE}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">当前状态:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{TRIGGER.STATUS}</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{ITEM.VALUE1}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">事件ID：</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{EVENT.ID}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161029415.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161029174.png" alt="" loading="lazy"></p>
<p>至此就配置完成，我们开始测试</p>
<h2 id="🥇测试告警和恢复告警" tabindex="-1"><a class="header-anchor" href="#🥇测试告警和恢复告警"><span>🥇测试告警和恢复告警</span></a></h2>
<p>为了测试我先把jar包杀掉；<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161028874.png" alt="" loading="lazy"><br>
等待发送邮件和告警<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161022130.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161022352.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161021449.png" alt="" loading="lazy"><br>
告警就成功了</p>
<p>接下来就是恢复告警了<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161021202.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161021888.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161021891.png" alt="" loading="lazy"></p>
<p>这样整套自定义监控就完成啦，包括发送邮件告警。<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161021858.gif" alt="" loading="lazy"></p>
</div></template>


