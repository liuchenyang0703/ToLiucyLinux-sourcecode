<template><div><blockquote>
<p>🍁<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者</a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主</a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主</a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区</a> 欢迎大家的加入！</p>
</blockquote>
<h2 id="钉钉上操作-钉钉告警以关键词方式告警" tabindex="-1"><a class="header-anchor" href="#钉钉上操作-钉钉告警以关键词方式告警"><span>钉钉上操作（钉钉告警以关键词方式告警）</span></a></h2>
<h3 id="创建钉钉群" tabindex="-1"><a class="header-anchor" href="#创建钉钉群"><span>创建钉钉群</span></a></h3>
<ul>
<li>登录钉钉</li>
<li>创建钉钉群</li>
</ul>
<p>手机、电脑都可以，这里以电脑举例</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161013287.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这里可以自己随便选择，我选择的是内部群</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161013869.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>邀请好友，起一个群名称就可以了；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161013695.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>创建完成。</p>
<h3 id="添加机器人-设置关键词" tabindex="-1"><a class="header-anchor" href="#添加机器人-设置关键词"><span>添加机器人--&gt;设置关键词</span></a></h3>
<p>创建完成之后点击群设置</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161013245.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>往下翻找到“机器人”</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161013639.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>点击添加机器人</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161013421.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>添加”机器人“--&gt;“自定义”</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161013926.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>点击添加</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161012927.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161012770.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="生成webhook-请保管好webhook的值-后面需要用到。" tabindex="-1"><a class="header-anchor" href="#生成webhook-请保管好webhook的值-后面需要用到。"><span>生成webhook（请保管好webhook的值；后面需要用到。）</span></a></h3>
<font color=red>请保管好webhook的值；后面需要用到。</font><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161012572.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161012936.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="服务器上操作" tabindex="-1"><a class="header-anchor" href="#服务器上操作"><span>服务器上操作</span></a></h2>
<ul>
<li>配置钉钉脚本</li>
</ul>
<blockquote>
<p>安装python或者python3教程可参考：<a href="https://liucy.blog.csdn.net/article/details/123680594" target="_blank" rel="noopener noreferrer">Linux下安装Python3.6.8（超级详细）</a>、<a href="https://liucy.blog.csdn.net/article/details/126519415" target="_blank" rel="noopener noreferrer">【Linux】中安装pip（详细教程）</a></p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#将脚本写在/usr/lib/zabbix/alertscripts/目录下</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@zabbix ~]# cd /usr/lib/zabbix/alertscripts/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">##安装python或者python3</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@zabbix alertscripts]# yum install python3</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@zabbix alertscripts]# vim dingding.py</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：这里需要提前安装好这几个python模块：<code v-pre>requests、json、sys、os、datetime</code>；<br>
安装方式为：<code v-pre>pip3 install requests</code> 以此类推；<br>
如遇到以下报错就是没有安装<code v-pre>requests模块</code>，就需要pip安装一下；<br><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161012035.png" alt="" loading="lazy"></p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#!/usr/bin/env python</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># -*- coding: utf-8 -*- </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> requests</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> json</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sys</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> os</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> datetime</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">webhook</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "https://oapi.dingtalk.com/robot/send?access_token=237132311231w4ru3rweehfiuqeor21o34u1923412werqwrq223"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">user</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">sys.argv[1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">subject</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">sys.argv[2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">text</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">sys.argv[3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">data</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        "msgtype"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "text",</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        "text"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">                "content"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "%s%s"%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">subject,text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        },</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        "at"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">                "atMobiles"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">                        user</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">                        ],</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">                        "isAtAll"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> False</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">headers</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {'Content-Type':</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'application/json'}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">x</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">requests.post</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">url</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">webhook,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">data</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">json.dumps</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">headers</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">headers</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">if</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> os.path.exists(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">"/usr/lib/zabbix/alertscripts/log/dingding.log"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        f</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">open</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">"/usr/lib/zabbix/alertscripts/log/dingding.log"</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">,</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">"a+"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">else:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        f</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">open</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">"/usr/lib/zabbix/alertscripts/log/dingding.log"</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">,</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">"w+"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">f.write(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">"\n"</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">+</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">"--"</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">*30</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">if</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> x.json</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"errcode"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">] == 0:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        f.write(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">"\n"</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">+str(datetime.datetime.now(</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">))+"    "+str(user)+"    "+"发送成功"+"\n"+str(text))</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        f.close</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">else:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        f.write(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">"\n"</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">+str(datetime.datetime.now(</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">))+"    "+str(user)+"    "+"发送失败"+"\n"+str(text))</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        f.close</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161012465.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#为脚本添加执行权限</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@zabbix alertscripts]# chmod +x dingding.py</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#修改脚本的属主和属组：</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@zabbix alertscripts]# chown zabbix.zabbix dingding.py</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>创建日志文件：</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@zabbix alertscripts]# mkdir -p /usr/lib/zabbix/log/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@zabbix alertscripts]# touch /usr/lib/zabbix/log/dingding.log</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@zabbix alertscripts]# chown zabbix.zabbix -R /usr/lib/zabbix/log/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>测试脚本是否能运行成功：</li>
</ul>
<p>注意关键词；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#py脚本 手机号 关键词 告警信息</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./dingding.py</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 12312312312</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 告警</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> test</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>手机号写的正确的话就可以直接@他，如果随便写的就不会输出，如下图的上（正确手机号）、下（错误手机号）</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161012679.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>成功接收到信息，完成！</p>
<h2 id="web页面操作" tabindex="-1"><a class="header-anchor" href="#web页面操作"><span>web页面操作</span></a></h2>
<ul>
<li>管理--&gt;报警媒介类型--&gt;创建媒体类型</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161012859.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ALERT.SUBJECT}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ALERT.MESSAGE}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ALERT.SENDTO}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161012980.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161012531.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>配置--&gt;动作--&gt;创建动作</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161012192.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161012808.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161012251.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#告警操作内容：</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">##标题：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">服务器:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{HOST.NAME}</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">发生:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {TRIGGER.NAME}故障!</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">##消息内容：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">告警主机:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{HOST.NAME}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">告警地址:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{HOST.IP}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">监控项目:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{ITEM.NAME}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">监控取值:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{ITEM.LASTVALUE}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">告警等级:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{TRIGGER.SEVERITY}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">当前状态:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{TRIGGER.STATUS}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">告警信息:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{TRIGGER.NAME}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">告警时间:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{EVENT.DATE}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {EVENT.TIME}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">事件ID:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{EVENT.ID}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#恢复操作内容</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">##标题：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">服务器:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{HOST.NAME}</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {TRIGGER.NAME}已恢复!</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">##消息内容：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">告警主机:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{HOST.NAME}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">告警地址:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{HOST.IP}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">监控项目:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{ITEM.NAME}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">监控取值:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{ITEM.LASTVALUE}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">告警等级:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{TRIGGER.SEVERITY}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">当前状态:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{TRIGGER.STATUS}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">告警信息:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{TRIGGER.NAME}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">告警时间:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{EVENT.DATE}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {EVENT.TIME}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">恢复时间:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{EVENT.RECOVERY.DATE}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {EVENT.RECOVERY.TIME}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">持续时间:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{EVENT.AGE}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">事件ID:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{EVENT.ID}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>操作添加：</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161012952.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>恢复操作添加：</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161011878.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161011168.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>个人中心--&gt;报警媒介--&gt;添加</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161011916.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161011637.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161011037.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="钉钉接收告警信息测试" tabindex="-1"><a class="header-anchor" href="#钉钉接收告警信息测试"><span>钉钉接收告警信息测试</span></a></h2>
<p>自己设置好服务器的<code v-pre>监控项</code>和<code v-pre>触发器</code>，让他告警；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161011369.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>成功收到，完成！！！</p>
</div></template>


