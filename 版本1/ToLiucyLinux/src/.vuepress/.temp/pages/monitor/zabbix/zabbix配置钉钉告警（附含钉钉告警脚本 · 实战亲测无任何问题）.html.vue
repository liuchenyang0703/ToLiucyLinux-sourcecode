<template><div><blockquote>
<p>🍁<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！</p>
</blockquote>
<h2 id="钉钉上操作-钉钉告警以关键词方式告警" tabindex="-1"><a class="header-anchor" href="#钉钉上操作-钉钉告警以关键词方式告警" aria-hidden="true">#</a> 钉钉上操作（钉钉告警以关键词方式告警）</h2>
<h3 id="创建钉钉群" tabindex="-1"><a class="header-anchor" href="#创建钉钉群" aria-hidden="true">#</a> 创建钉钉群</h3>
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
<h3 id="添加机器人-设置关键词" tabindex="-1"><a class="header-anchor" href="#添加机器人-设置关键词" aria-hidden="true">#</a> 添加机器人--&gt;设置关键词</h3>
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
<h3 id="生成webhook-请保管好webhook的值-后面需要用到。" tabindex="-1"><a class="header-anchor" href="#生成webhook-请保管好webhook的值-后面需要用到。" aria-hidden="true">#</a> 生成webhook（请保管好webhook的值；后面需要用到。）</h3>
<font color=red>请保管好webhook的值；后面需要用到。</font><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161012572.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161012936.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="服务器上操作" tabindex="-1"><a class="header-anchor" href="#服务器上操作" aria-hidden="true">#</a> 服务器上操作</h2>
<ul>
<li>配置钉钉脚本</li>
</ul>
<blockquote>
<p>安装python或者python3教程可参考：<a href="https://liucy.blog.csdn.net/article/details/123680594" target="_blank" rel="noopener noreferrer">Linux下安装Python3.6.8（超级详细）<ExternalLinkIcon/></a>、<a href="https://liucy.blog.csdn.net/article/details/126519415" target="_blank" rel="noopener noreferrer">【Linux】中安装pip（详细教程）<ExternalLinkIcon/></a></p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#将脚本写在/usr/lib/zabbix/alertscripts/目录下</span>
<span class="token punctuation">[</span>root@zabbix ~<span class="token punctuation">]</span><span class="token comment"># cd /usr/lib/zabbix/alertscripts/</span>

<span class="token comment">##安装python或者python3</span>
<span class="token punctuation">[</span>root@zabbix alertscripts<span class="token punctuation">]</span><span class="token comment"># yum install python3</span>
 
<span class="token punctuation">[</span>root@zabbix alertscripts<span class="token punctuation">]</span><span class="token comment"># vim dingding.py</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：这里需要提前安装好这几个python模块：<code v-pre>requests、json、sys、os、datetime</code>；<br>
安装方式为：<code v-pre>pip3 install requests</code> 以此类推；<br>
如遇到以下报错就是没有安装<code v-pre>requests模块</code>，就需要pip安装一下；<br><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161012035.png" alt="" loading="lazy"></p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*- </span>
<span class="token function">import</span> requests
<span class="token function">import</span> json
<span class="token function">import</span> sys
<span class="token function">import</span> os
<span class="token function">import</span> datetime
webhook <span class="token operator">=</span> <span class="token string">"https://oapi.dingtalk.com/robot/send?access_token=237132311231w4ru3rweehfiuqeor21o34u1923412werqwrq223"</span>
<span class="token assign-left variable">user</span><span class="token operator">=</span>sys.argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token assign-left variable">subject</span><span class="token operator">=</span>sys.argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token assign-left variable">text</span><span class="token operator">=</span>sys.argv<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token assign-left variable">data</span><span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token string">"msgtype"</span><span class="token builtin class-name">:</span> <span class="token string">"text"</span>,
        <span class="token string">"text"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"content"</span><span class="token builtin class-name">:</span> <span class="token string">"%s%s"</span>%<span class="token punctuation">(</span>subject,text<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>,
        <span class="token string">"at"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"atMobiles"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                        user
                        <span class="token punctuation">]</span>,
                        <span class="token string">"isAtAll"</span><span class="token builtin class-name">:</span> False
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
headers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'Content-Type'</span><span class="token builtin class-name">:</span> <span class="token string">'application/json'</span><span class="token punctuation">}</span>
<span class="token assign-left variable">x</span><span class="token operator">=</span>requests.post<span class="token punctuation">(</span>url<span class="token operator">=</span>webhook,data<span class="token operator">=</span>json.dumps<span class="token punctuation">(</span>data<span class="token punctuation">)</span>,headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>
<span class="token keyword">if</span> os.path.exists<span class="token punctuation">(</span><span class="token string">"/usr/lib/zabbix/alertscripts/log/dingding.log"</span><span class="token punctuation">)</span>:
        <span class="token assign-left variable">f</span><span class="token operator">=</span>open<span class="token punctuation">(</span><span class="token string">"/usr/lib/zabbix/alertscripts/log/dingding.log"</span>,<span class="token string">"a+"</span><span class="token punctuation">)</span>
else:
        <span class="token assign-left variable">f</span><span class="token operator">=</span>open<span class="token punctuation">(</span><span class="token string">"/usr/lib/zabbix/alertscripts/log/dingding.log"</span>,<span class="token string">"w+"</span><span class="token punctuation">)</span>
f.write<span class="token punctuation">(</span><span class="token string">"<span class="token entity" title="\n">\n</span>"</span>+<span class="token string">"--"</span>*30<span class="token punctuation">)</span>
<span class="token keyword">if</span> x.json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">"errcode"</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span>:
        f.write<span class="token punctuation">(</span><span class="token string">"<span class="token entity" title="\n">\n</span>"</span>+str<span class="token punctuation">(</span>datetime.datetime.now<span class="token punctuation">(</span><span class="token punctuation">))</span>+<span class="token string">"    "</span>+str<span class="token punctuation">(</span>user<span class="token punctuation">)</span>+<span class="token string">"    "</span>+<span class="token string">"发送成功"</span>+<span class="token string">"<span class="token entity" title="\n">\n</span>"</span>+str<span class="token punctuation">(</span>text<span class="token punctuation">))</span>
        f.close<span class="token punctuation">(</span><span class="token punctuation">)</span>
else:
        f.write<span class="token punctuation">(</span><span class="token string">"<span class="token entity" title="\n">\n</span>"</span>+str<span class="token punctuation">(</span>datetime.datetime.now<span class="token punctuation">(</span><span class="token punctuation">))</span>+<span class="token string">"    "</span>+str<span class="token punctuation">(</span>user<span class="token punctuation">)</span>+<span class="token string">"    "</span>+<span class="token string">"发送失败"</span>+<span class="token string">"<span class="token entity" title="\n">\n</span>"</span>+str<span class="token punctuation">(</span>text<span class="token punctuation">))</span>
        f.close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161012465.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#为脚本添加执行权限</span>
<span class="token punctuation">[</span>root@zabbix alertscripts<span class="token punctuation">]</span><span class="token comment"># chmod +x dingding.py</span>
 
<span class="token comment">#修改脚本的属主和属组：</span>
<span class="token punctuation">[</span>root@zabbix alertscripts<span class="token punctuation">]</span><span class="token comment"># chown zabbix.zabbix dingding.py</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>创建日志文件：</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@zabbix alertscripts<span class="token punctuation">]</span><span class="token comment"># mkdir -p /usr/lib/zabbix/log/</span>
 
<span class="token punctuation">[</span>root@zabbix alertscripts<span class="token punctuation">]</span><span class="token comment"># touch /usr/lib/zabbix/log/dingding.log</span>
 
<span class="token punctuation">[</span>root@zabbix alertscripts<span class="token punctuation">]</span><span class="token comment"># chown zabbix.zabbix -R /usr/lib/zabbix/log/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>测试脚本是否能运行成功：</li>
</ul>
<p>注意关键词；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#py脚本 手机号 关键词 告警信息</span>
./dingding.py <span class="token number">12312312312</span> 告警 <span class="token builtin class-name">test</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>手机号写的正确的话就可以直接@他，如果随便写的就不会输出，如下图的上（正确手机号）、下（错误手机号）</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161012679.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>成功接收到信息，完成！</p>
<h2 id="web页面操作" tabindex="-1"><a class="header-anchor" href="#web页面操作" aria-hidden="true">#</a> web页面操作</h2>
<ul>
<li>管理--&gt;报警媒介类型--&gt;创建媒体类型</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161012859.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span>ALERT.SUBJECT<span class="token punctuation">}</span>
<span class="token punctuation">{</span>ALERT.MESSAGE<span class="token punctuation">}</span>
<span class="token punctuation">{</span>ALERT.SENDTO<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161012980.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161012531.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>配置--&gt;动作--&gt;创建动作</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161012192.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161012808.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161012251.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#告警操作内容：</span>
<span class="token comment">##标题：</span>
服务器:<span class="token punctuation">{</span>HOST.NAME<span class="token punctuation">}</span>发生: <span class="token punctuation">{</span>TRIGGER.NAME<span class="token punctuation">}</span>故障<span class="token operator">!</span>
<span class="token comment">##消息内容：</span>
告警主机:<span class="token punctuation">{</span>HOST.NAME<span class="token punctuation">}</span>
告警地址:<span class="token punctuation">{</span>HOST.IP<span class="token punctuation">}</span>
监控项目:<span class="token punctuation">{</span>ITEM.NAME<span class="token punctuation">}</span>
监控取值:<span class="token punctuation">{</span>ITEM.LASTVALUE<span class="token punctuation">}</span>
告警等级:<span class="token punctuation">{</span>TRIGGER.SEVERITY<span class="token punctuation">}</span>
当前状态:<span class="token punctuation">{</span>TRIGGER.STATUS<span class="token punctuation">}</span>
告警信息:<span class="token punctuation">{</span>TRIGGER.NAME<span class="token punctuation">}</span>
告警时间:<span class="token punctuation">{</span>EVENT.DATE<span class="token punctuation">}</span> <span class="token punctuation">{</span>EVENT.TIME<span class="token punctuation">}</span>
事件ID:<span class="token punctuation">{</span>EVENT.ID<span class="token punctuation">}</span>


<span class="token comment">#恢复操作内容</span>
<span class="token comment">##标题：</span>
服务器:<span class="token punctuation">{</span>HOST.NAME<span class="token punctuation">}</span>: <span class="token punctuation">{</span>TRIGGER.NAME<span class="token punctuation">}</span>已恢复<span class="token operator">!</span>
<span class="token comment">##消息内容：</span>
告警主机:<span class="token punctuation">{</span>HOST.NAME<span class="token punctuation">}</span>
告警地址:<span class="token punctuation">{</span>HOST.IP<span class="token punctuation">}</span>
监控项目:<span class="token punctuation">{</span>ITEM.NAME<span class="token punctuation">}</span>
监控取值:<span class="token punctuation">{</span>ITEM.LASTVALUE<span class="token punctuation">}</span>
告警等级:<span class="token punctuation">{</span>TRIGGER.SEVERITY<span class="token punctuation">}</span>
当前状态:<span class="token punctuation">{</span>TRIGGER.STATUS<span class="token punctuation">}</span>
告警信息:<span class="token punctuation">{</span>TRIGGER.NAME<span class="token punctuation">}</span>
告警时间:<span class="token punctuation">{</span>EVENT.DATE<span class="token punctuation">}</span> <span class="token punctuation">{</span>EVENT.TIME<span class="token punctuation">}</span>
恢复时间:<span class="token punctuation">{</span>EVENT.RECOVERY.DATE<span class="token punctuation">}</span> <span class="token punctuation">{</span>EVENT.RECOVERY.TIME<span class="token punctuation">}</span>
持续时间:<span class="token punctuation">{</span>EVENT.AGE<span class="token punctuation">}</span>
事件ID:<span class="token punctuation">{</span>EVENT.ID<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>操作添加：</p>
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
<h2 id="钉钉接收告警信息测试" tabindex="-1"><a class="header-anchor" href="#钉钉接收告警信息测试" aria-hidden="true">#</a> 钉钉接收告警信息测试</h2>
<p>自己设置好服务器的<code v-pre>监控项</code>和<code v-pre>触发器</code>，让他告警；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161011369.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>成功收到，完成！！！</p>
</div></template>


