<template><div><p>@[toc]</p>
<h1 id="🏆前言" tabindex="-1"><a class="header-anchor" href="#🏆前言" aria-hidden="true">#</a> 🏆前言</h1>
<p>  有的时候zabbix提供的监控项目，不能满足我们生产环境下的监控需求，此时我们就要按照zabbix的规范自定义监控项目，来达到监控的目的。</p>
<h2 id="🥈定义监控项介绍" tabindex="-1"><a class="header-anchor" href="#🥈定义监控项介绍" aria-hidden="true">#</a> 🥈定义监控项介绍</h2>
<blockquote>
<p>监控项就是监控项目，监控指标，具体的监控内容。<br>
在添加主机时我们会选择关联模板，模板中自带很多监控项，但是很多时候我们需要监控的监控项模板中没有，此时需要自定义监控项。<br><br>
<strong><font color=red>自定义监控项的步骤可以分为：取值，配置，测试，添加。<br><br>
取值和配置在客户端进行，测试在服务端进行，添加在web页面进行</font></strong></p>
</blockquote>
<h1 id="🥇任务" tabindex="-1"><a class="header-anchor" href="#🥇任务" aria-hidden="true">#</a> 🥇任务</h1>
<blockquote>
<p>下面给大家举例一个：自定义监控一个进程，如果监控到该进程则不报警；如果没有监控到，则报警发送邮件；如果报警处理后，恢复监控，则通知发送邮件。</p>
</blockquote>
<h2 id="🥈客户端" tabindex="-1"><a class="header-anchor" href="#🥈客户端" aria-hidden="true">#</a> 🥈客户端</h2>
<h3 id="🥉取值" tabindex="-1"><a class="header-anchor" href="#🥉取值" aria-hidden="true">#</a> 🥉取值</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-E</span> cs.jar <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🥉配置" tabindex="-1"><a class="header-anchor" href="#🥉配置" aria-hidden="true">#</a> 🥉配置</h3>
<p>在被监控端的agent配置文件中添加配置</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#进入zabbix客户端</span>
<span class="token function">vi</span> /etc/zabbix/zabbix_agentd.conf

<span class="token comment">#寻找UserParameter=键，监测脚本或者命令</span>
<span class="token comment">#zabbix监控项是以键值对的形式定义的，cs为键，也就是监控项的名称，取值命令为值；</span>
<span class="token comment">#大概在296行，添加</span>
<span class="token assign-left variable">UserParameter</span><span class="token operator">=</span>cs,ps <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-E</span> cs.jar <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>

<span class="token comment">#保存退出，重启客户端</span>
systemctl restart zabbix-agent.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🥈服务端" tabindex="-1"><a class="header-anchor" href="#🥈服务端" aria-hidden="true">#</a> 🥈服务端</h2>
<p>先看看服务端有没有安装zabbix-get这个命令，没有的话，安装一下即可</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> zabbix-get
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>zabbix_get:模拟zabbix_server获取agent数据</p>
<h3 id="🥉测试" tabindex="-1"><a class="header-anchor" href="#🥉测试" aria-hidden="true">#</a> 🥉测试</h3>
<p>测试在服务端使用zabbix_get命令实现</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#-s	指定客户端ip</span>
<span class="token comment">#-k	指定客户端配置文件里设置的键</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># zabbix_get -s 192.10.2.112 -k cs</span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时服务端是可以获取到客户端的值的，说明配置成功，<font color=red>配置完之后必须要重启客户端；</font>然后接下来就是添加监控项；</p>
<font color=red>**注意：**</font>不管取到0或者1都是配置成功了，如果没有配置成功会报错：ZBX_NOTSUPPORTED: Unsupported item key.；<h2 id="🥈web页面" tabindex="-1"><a class="header-anchor" href="#🥈web页面" aria-hidden="true">#</a> 🥈web页面</h2>
<h3 id="🥉添加监控项" tabindex="-1"><a class="header-anchor" href="#🥉添加监控项" aria-hidden="true">#</a> 🥉添加监控项</h3>
<p>1.登陆web界面，配置——主机——创建主机<br>
<img src="https://img-blog.csdnimg.cn/f15c5f1356ef410e8b1e66b19e61eeb2.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
选择主机，并填写以下红框部分。<font color=red>主机名称：</font>与agent配置文件中Hostname保持一致，<font color=red>可见名称：</font>自定义，<font color=red>群组：</font>选择一个或者新建一个，<font color=red>ip地址：</font>一般为内网ip，如果需要走公网监控则填写公网ip<br>
<img src="https://img-blog.csdnimg.cn/dec92807b4a84dd4b722c8dc155b5175.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"></p>
<p>2.监控项——创建监控项</p>
<font color=red>主机里要选中你监控的那台客户端</font><p><img src="https://img-blog.csdnimg.cn/aa58d26979674e2a8e15d4ce10215282.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/beb927ce4eca4e598454dc7b0e737cc8.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
按下图进行填写，最后选择添加即可<br>
<img src="https://img-blog.csdnimg.cn/1d1897770651411d956b2c18474aa9e1.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
3.查看监控项的结果<br>
监测——最新数据<br>
<img src="https://img-blog.csdnimg.cn/f6ca3883752a4732a982c06aff80d688.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/12fc6a0dc60940e1bea2f07fb3287fda.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"></p>
<h3 id="🥉添加触发器" tabindex="-1"><a class="header-anchor" href="#🥉添加触发器" aria-hidden="true">#</a> 🥉添加触发器</h3>
<p>监控项创建完我们来创建触发器<br>
点击触发器<br>
<img src="https://img-blog.csdnimg.cn/1a7df3dca6904bfb9f419439edcb11c0.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
创建触发器<br>
<img src="https://img-blog.csdnimg.cn/a22e4fb1f7714399ba661bd497bd8289.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
按照下图来做就可以<br>
还是设置0比较好，&gt;1的话有点问题。<br>
<img src="https://img-blog.csdnimg.cn/890397b4711f4fad89103b0cea2d3086.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/9229c480c55d401294e53afb972228a0.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/f95b26e3bc6f4f82b185eb2b86989bbc.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
恢复表达式同样，只不过结果有些不同，可以写成=1就恢复。<br>
<img src="https://img-blog.csdnimg.cn/8d93b40c53f1461e9ea74e2d2db3106f.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/2d9cf417b68d44b683cf7469b97081b0.png" alt="在这里插入图片描述" loading="lazy"></p>
<h3 id="🥉添加报警媒介" tabindex="-1"><a class="header-anchor" href="#🥉添加报警媒介" aria-hidden="true">#</a> 🥉添加报警媒介</h3>
<p>管理——报警媒介类型<br>
<img src="https://img-blog.csdnimg.cn/d8230c9a5bf8496abd32ca1dc06b8b98.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
可以选择Email<br>
<img src="https://img-blog.csdnimg.cn/2309cfc5e8db45a785528d6655887814.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/c503ca0c3f0d44b59c39ed7ea832dcc1.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"></p>
<p>注意：密码不是你的163或者qq密码，是邮箱内的smtp码，这里我们来用qq邮箱来举例</p>
<h4 id="qq邮箱生成smtp码" tabindex="-1"><a class="header-anchor" href="#qq邮箱生成smtp码" aria-hidden="true">#</a> qq邮箱生成smtp码</h4>
<p><img src="https://img-blog.csdnimg.cn/aa1af9f50b4e41a6ac98a9f6ebf6e0c0.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/a9511d6404014fb49de11b25cb2e22d5.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/7f5bc29f868d4ff2bbd813828529bf6d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
发送短信，获取授权码，返回zabbix放到密码里就ok了。<br>
<img src="https://img-blog.csdnimg.cn/cc57ce9f6c7d4793945e54a83cde027d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
生成smtp码之后，填写密码，保存即可。</p>
<h3 id="🥉设置用户和报警媒介" tabindex="-1"><a class="header-anchor" href="#🥉设置用户和报警媒介" aria-hidden="true">#</a> 🥉设置用户和报警媒介</h3>
<p>管理——用户<br>
<img src="https://img-blog.csdnimg.cn/975ef0bcf0ca4a6d9144a83829b8e76d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
用户直接用超级管理员即可<br>
<img src="https://img-blog.csdnimg.cn/d78a770924e94dfa9048098a5be6a04f.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
添加报警媒介<br>
<img src="https://img-blog.csdnimg.cn/cc9b485232e1494cbbf65c95f4b97ed6.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
可以用qq邮箱，也可以用163邮箱<br>
<img src="https://img-blog.csdnimg.cn/67c7dfb19eb44231bad30de0a5f2ab87.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
点击添加，完成<br>
<img src="https://img-blog.csdnimg.cn/18f4bc9b7a6043a59db31068acaab97e.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
切记一定要点添加或者更新。</p>
<h3 id="🥉添加动作" tabindex="-1"><a class="header-anchor" href="#🥉添加动作" aria-hidden="true">#</a> 🥉添加动作</h3>
<p><img src="https://img-blog.csdnimg.cn/64e350fd1a30498096964d4288811c84.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/693271d570c34a2e94040fc19de850b2.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/71977ef031bb471b9baaebec849023ef.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/5493a689a31c429ca856e0f463f8c0e1.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/9ac1ee03dd2942588e0c25efc1f4883b.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
我们来勾选Custom message，告警和恢复的主题和消息，我们放到了这两张图的下面。</p>
<p>故障：<br>
<img src="https://img-blog.csdnimg.cn/8075781852ba4cd0b7ec99f3437529c5.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"></p>
<p>恢复：<br>
<img src="https://img-blog.csdnimg.cn/729c0f6394bb4c8a946baddf23670210.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"></p>
<p>故障：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>故障<span class="token punctuation">{</span>TRIGGER.STATUS<span class="token punctuation">}</span>,服务器名:<span class="token punctuation">{</span>HOST.NAME<span class="token punctuation">}</span>发生: <span class="token punctuation">{</span>TRIGGER.NAME<span class="token punctuation">}</span>故障<span class="token operator">!</span>

告警主机:<span class="token punctuation">{</span>HOST.NAME<span class="token punctuation">}</span>
告警主机IP地址:<span class="token punctuation">{</span>HOST.IP<span class="token punctuation">}</span>
告警时间:<span class="token punctuation">{</span>EVENT.DATE<span class="token punctuation">}</span> <span class="token punctuation">{</span>EVENT.TIME<span class="token punctuation">}</span>
告警等级:<span class="token punctuation">{</span>TRIGGER.SEVERITY<span class="token punctuation">}</span>
告警信息: <span class="token punctuation">{</span>TRIGGER.NAME<span class="token punctuation">}</span>
告警项目:<span class="token punctuation">{</span>TRIGGER.KEY1<span class="token punctuation">}</span>
问题详情:<span class="token punctuation">{</span>ITEM.NAME<span class="token punctuation">}</span>:<span class="token punctuation">{</span>ITEM.VALUE<span class="token punctuation">}</span>
当前状态:<span class="token punctuation">{</span>TRIGGER.STATUS<span class="token punctuation">}</span>:<span class="token punctuation">{</span>ITEM.VALUE1<span class="token punctuation">}</span>
事件ID：<span class="token punctuation">{</span>EVENT.ID<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>恢复：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>恢复<span class="token punctuation">{</span>TRIGGER.STATUS<span class="token punctuation">}</span>, 服务器名:<span class="token punctuation">{</span>HOST.NAME<span class="token punctuation">}</span>: <span class="token punctuation">{</span>TRIGGER.NAME<span class="token punctuation">}</span>已恢复<span class="token operator">!</span>

恢复主机:<span class="token punctuation">{</span>HOST.NAME<span class="token punctuation">}</span>
恢复主机IP地址:<span class="token punctuation">{</span>HOST.IP<span class="token punctuation">}</span>
恢复时间:<span class="token punctuation">{</span>EVENT.DATE<span class="token punctuation">}</span> <span class="token punctuation">{</span>EVENT.TIME<span class="token punctuation">}</span>
恢复等级:<span class="token punctuation">{</span>TRIGGER.SEVERITY<span class="token punctuation">}</span>
恢复信息: <span class="token punctuation">{</span>TRIGGER.NAME<span class="token punctuation">}</span>
恢复项目:<span class="token punctuation">{</span>TRIGGER.KEY1<span class="token punctuation">}</span>
恢复问题详情:<span class="token punctuation">{</span>ITEM.NAME<span class="token punctuation">}</span>:<span class="token punctuation">{</span>ITEM.VALUE<span class="token punctuation">}</span>
当前状态:<span class="token punctuation">{</span>TRIGGER.STATUS<span class="token punctuation">}</span>:<span class="token punctuation">{</span>ITEM.VALUE1<span class="token punctuation">}</span>
事件ID：<span class="token punctuation">{</span>EVENT.ID<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/1d28297958bf4f3ab0e7fe11190ab10b.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/9bca71c233434d93a34c3d4d458115fa.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"></p>
<p>至此就配置完成，我们开始测试</p>
<h1 id="🥇测试告警和恢复告警" tabindex="-1"><a class="header-anchor" href="#🥇测试告警和恢复告警" aria-hidden="true">#</a> 🥇测试告警和恢复告警</h1>
<p>为了测试我先把jar包杀掉；<br>
<img src="https://img-blog.csdnimg.cn/34c090bcfd50406e9954165711596997.png" alt="在这里插入图片描述" loading="lazy"><br>
等待发送邮件和告警<br>
<img src="https://img-blog.csdnimg.cn/d688f155cf20495db8cfd4d65a91ac05.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/88a95fc0e278411fac430a36ed84b426.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/382ded7e93a54215b54a30ccf8006b8d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br>
告警就成功了</p>
<p>接下来就是恢复告警了<br>
<img src="https://img-blog.csdnimg.cn/2f2f7e999866434f90d3b6690ff66dfd.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/e3d2a00b9c7a4e518de7b37cff40187b.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/1b4dcef3cf1641daaada4608731f2d93.png" alt="在这里插入图片描述" loading="lazy"></p>
<p>这样整套自定义监控就完成啦，包括发送邮件告警。<br>
<img src="https://img-blog.csdnimg.cn/676de6e1ade34caa867e7366f619c889.gif" alt="在这里插入图片描述" loading="lazy"></p>
</div></template>


