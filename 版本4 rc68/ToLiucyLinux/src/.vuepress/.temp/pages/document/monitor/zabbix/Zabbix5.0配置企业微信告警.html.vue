<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161017672.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<br>
<br>
<font color=green size=5>相关文章：</font><blockquote>
<p>💻 zabbix的安装部署可参考：<a href="https://liucy.blog.csdn.net/article/details/124248236" target="_blank" rel="noopener noreferrer">zabbix5.0部署（超级详细）</a><br></p>
<hr>
<p>💻 zabbix的脚本安装部署可参考：<a href="https://download.csdn.net/download/liu_chen_yang/86168600" target="_blank" rel="noopener noreferrer">zabbix5.0离线脚本一键安装(包含服务端、客户端、脚本和使用说明)</a><br></p>
<hr>
<p>zabbix5.0设置企业微信告警，首先需要一个企业微信；</p>
</blockquote>
<h2 id="一、配置企业微信" tabindex="-1"><a class="header-anchor" href="#一、配置企业微信"><span>一、配置企业微信</span></a></h2>
<h3 id="_1、注册企业微信" tabindex="-1"><a class="header-anchor" href="#_1、注册企业微信"><span>1、注册企业微信</span></a></h3>
<p><strong><font color=red>  如果需要用公司的企业微信来做告警信息的接收者，那么这个步骤就可以省略了。</font></strong></p>
<blockquote>
<p>如果是在公司，监控自定义服务，需要部分的人员都能看到，哪最好就是去找公司企业微信的创建人，因为后面会用到企业ID。</p>
</blockquote>
<p>没有企业微信我们可以到这里注册一个：<a href="https://work.weixin.qq.com/" target="_blank" rel="noopener noreferrer">https://work.weixin.qq.com/</a></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161017203.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>企业名称可填写企业、政府或组织名称</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161017732.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>填写完成之后点击注册就可以了；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161017277.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>注册完成之后也可以邀请同事或者同学、朋友进来都可以；<br>
注册完成后通过网页登陆企业微信（<strong><font color=red>因为一些操作只有页面管理能操作</font></strong>）</p>
<h3 id="_2、添加部门" tabindex="-1"><a class="header-anchor" href="#_2、添加部门"><span>2、添加部门</span></a></h3>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161017194.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161017100.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161016453.png" alt="" loading="lazy"></p>
<p>添加完部门看一下部门Id，后面写配置的时候要用到。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161016654.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_3、添加部门成员" tabindex="-1"><a class="header-anchor" href="#_3、添加部门成员"><span>3、添加部门成员</span></a></h3>
<blockquote>
<p>可以文件导入，也可以从其他部门移入，也可以自己添加成员。</p>
</blockquote>
<p>我们就来自己添加吧；</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161016038.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161016744.png" alt="" loading="lazy"></p>
<p>完成之后可继续添加，也可以直接保存；</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161016492.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161016859.png" alt="" loading="lazy"></p>
<h3 id="_4、自建应用-用来告警通知的" tabindex="-1"><a class="header-anchor" href="#_4、自建应用-用来告警通知的"><span>4、自建应用（用来告警通知的）</span></a></h3>
<p>选择应用管理----&gt;选择自建应用（支持小程序）</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161016430.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>创建应用；</p>
<blockquote>
<ul>
<li> logo可以自己去网上查找或者自己做一个；</li>
<li> 应用名称可以自己定义，我定义的就是”zabbix监控“；</li>
<li> 应用介绍可以不填，看自己情况；</li>
<li> 可见范围，选择刚刚创建的部门即可。</li>
</ul>
</blockquote>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161016360.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161016889.png" alt="" loading="lazy"></p>
<p>创建成功查看</p>
<blockquote>
<p>  要记住id，后续还需要secret，到时候查看按照步骤做就可以了。</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161016559.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>点击查看Secret</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161016970.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>点击发送后在企业微信内会有信息，点击查看Secret</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161016634.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>点击前往查看；记下来，后续要用到；</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161016977.png" alt="" loading="lazy"><br>
顺便查看一下企业的ID，后续需要用到；</p>
<blockquote>
<p>  点击我的企业---&gt;企业信息---&gt;最下面有一个企业ID；（这个是需要记住的，后续要使用）。</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161016841.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="二、配置zabbix服务端-zabbix-server" tabindex="-1"><a class="header-anchor" href="#二、配置zabbix服务端-zabbix-server"><span>二、配置zabbix服务端（zabbix-server）</span></a></h2>
<br>
<h3 id="_1、编辑zabbix-server-conf文件进行配置" tabindex="-1"><a class="header-anchor" href="#_1、编辑zabbix-server-conf文件进行配置"><span>1、编辑zabbix-server.conf文件进行配置</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#进入zabbix_server配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/zabbix/zabbix_server.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#默认523行会有这条，这里是存放脚本的位置</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">AlertScriptsPath</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/usr/lib/zabbix/alertscripts</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、安装组件requests" tabindex="-1"><a class="header-anchor" href="#_2、安装组件requests"><span>2、安装组件requests</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> python-requests</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3、微信报警脚本" tabindex="-1"><a class="header-anchor" href="#_3、微信报警脚本"><span>3、微信报警脚本</span></a></h3>
<blockquote>
<p>下载地址：<a href="https://download.csdn.net/download/liu_chen_yang/86087478" target="_blank" rel="noopener noreferrer">zabbix微信告警.py</a></p>
</blockquote>
<p>在/usr/lib/zabbix/alertscripts目录下操作；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#进入/usr/lib/zabbix/alertscripts</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/lib/zabbix/alertscripts</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#创建一个python脚本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> weixin.py</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制下面的脚本粘贴上去即可；</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/usr/bin/python</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#_*_coding:utf-8 _*_</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> urllib,urllib2</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> json</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> sys</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> simplejson</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> base64</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> hashlib</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">reload</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(sys)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">sys.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">setdefaultencoding</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'utf-8'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> gettoken</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">corpid</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">corpsecret</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    gettoken_url </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid='</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> corpid </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '&#x26;corpsecret='</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> corpsecret</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  gettoken_url</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    try</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        token_file </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> urllib2.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">urlopen</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(gettoken_url)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    except</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> urllib2.HTTPError </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">as</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> e:</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">        print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> e.code</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">        print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> e.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">read</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">().</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">decode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"utf8"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        sys.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">exit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    token_data </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> token_file.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">read</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">().</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">decode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'utf-8'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    token_json </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> json.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">loads</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(token_data)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    token_json.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">keys</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    token </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> token_json[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'access_token'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(token)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> token</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> senddata</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">access_token</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">subject</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">content</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    with</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> open</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'/usr/lib/zabbix/alertscripts/graph/bg.png'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">mode</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'rb'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">as</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> f:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       png </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> f.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">read</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    png_md5 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> hashlib.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">md5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    png_64 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> base64.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">b16encode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(png)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    send_url </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token='</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> access_token</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    send_values </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        "touser"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> : </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"@all"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,   </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#企业号中的用户帐号，在zabbix用户Media中配置，如果配置不正常，将按部门发送。</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        "toparty"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"2"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,    </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#企业号中的部门id。</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        "msgtype"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#消息类型。</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        "agentid"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"100035"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,    </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#企业号中的应用id。</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        "text"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:{</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            "content"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:subject </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> content</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">           },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        "safe"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"0"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#    send_data = json.dumps(send_values, ensure_ascii=False)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    send_data </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> simplejson.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">dumps</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(send_values, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">ensure_ascii</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">False</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">).</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">encode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'utf-8'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    send_request </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> urllib2.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">Request</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(send_url, send_data)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    response </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> json.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">loads</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(urllib2.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">urlopen</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(send_request).</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">read</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">())</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    print</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(response)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">if</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> __name__</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> ==</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '__main__'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    user </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(sys.argv[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">])     </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#zabbix传过来的第一个参数</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    subject </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(sys.argv[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">])  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#zabbix传过来的第二个参数</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    content </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(sys.argv[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">])  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#zabbix传过来的第三个参数</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    corpid </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  '22jsaooasbf23934'</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">   #CorpID是企业号的标识</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    corpsecret </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '410Jsk8_4lvCQYmdo92-sdfafsadfasdfxzc'</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  #corpsecretSecret是管理组凭证密钥</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    accesstoken </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> gettoken</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(corpid,corpsecret)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">    senddata</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(accesstoken,user,subject,content)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意里面要修改的地方；（上面说过了几处地方是需要注意的后面需要用到，现在就可以用到了）；</p>
<blockquote>
<p>需要修改的地方有：<br>
<br></p>
<ul>
<li>第40行:  &quot;toparty&quot;:&quot;2&quot;,    #企业部门id。</li>
<li>第42行： &quot;agentid&quot;:&quot;100035&quot;,    #企业号中的应用id。</li>
<li>第61行： corpid =  '22jsaooasbf23934'   #CorpID是企业号的标识</li>
<li>第62行： corpsecret = '410Jsk8_4lvCQYmdo92-sdfafsadfasdfxzc'  #corpsecretSecret是管理组凭证密钥</li>
</ul>
</blockquote>
<p>企业部门的id</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161016347.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>企业号中的应用id</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161016113.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>CorpID是企业号的标识（企业的id）</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161016951.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>管理组凭证密钥（应用的Secret，在应用管理中）</p>
<blockquote>
<p>遇到过期的话重新发送一下就可以；</p>
</blockquote>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161016745.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161015758.png" alt="" loading="lazy"></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161015273.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>更换好之后，保存退出即可；</p>
<h3 id="_4、测试脚本是否可用" tabindex="-1"><a class="header-anchor" href="#_4、测试脚本是否可用"><span>4、测试脚本是否可用</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">python</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/lib/zabbix/alertscripts/weixin.py</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> aaabbbccc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> abc</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1234</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{u'msgid': u'mrVtVXE39it1tWVvd57npP-C0Y8uy8F_-hstvi9e_Y0gSghmqd6IOO4SWKCTeFNyUYjV8TgdE3IXSGC3g2w_oQ', u'errcode': 0, u'errmsg': u'ok'}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、配置zabbix-web端" tabindex="-1"><a class="header-anchor" href="#三、配置zabbix-web端"><span>三、配置zabbix web端</span></a></h2>
<br>
<blockquote>
<p>因为之前我已经把监控项和触发器弄好了，所以，直接配置报警媒介类型就好了。</p>
</blockquote>
<p>可以参考：<a href="https://liucy.blog.csdn.net/article/details/124101253" target="_blank" rel="noopener noreferrer">zabbix添加自定义监控项&amp;告警（邮件）</a></p>
<h3 id="_1、配置报警媒介类型" tabindex="-1"><a class="header-anchor" href="#_1、配置报警媒介类型"><span>1、配置报警媒介类型</span></a></h3>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161015834.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>脚本名称一定要和alertscripts目录下放的一样；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161015334.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>完成之后外面有一个测试（zabbix5.0以及以后才有）</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161015046.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>收件人“@all”就可以</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161015853.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>如果有报错，就解决一下报错；没有的话就直接去企业微信看看能收到信息嘛<br>
；<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161015688.png" alt="" loading="lazy"></p>
<p>这样就是发送成功了，我们去企业微信看一下；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161015420.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以看到消息已经发送过来了。</p>
<p>使所有的告警信息都发送到企业微信的话，我们可以往下看；</p>
<h3 id="_2、配置动作" tabindex="-1"><a class="header-anchor" href="#_2、配置动作"><span>2、配置动作</span></a></h3>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161015344.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>名称自己起一个就好了；</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161015069.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161015809.png" alt="" loading="lazy"></p>
<p>仅送到选择所有就可以：</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161015030.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>恢复操作选择“通知所有参与者”就可以；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161015255.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>动作设置完成，去设置用户；</p>
<h3 id="_3、配置用户" tabindex="-1"><a class="header-anchor" href="#_3、配置用户"><span>3、配置用户</span></a></h3>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161015262.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>选择报警媒介---&gt;点击添加</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161015382.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>选择weixin即可；收件人还是“@all”；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161015187.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>添加完成之后一定要点击更新；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161015890.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_4、测试发送告警" tabindex="-1"><a class="header-anchor" href="#_4、测试发送告警"><span>4、测试发送告警</span></a></h3>
<p>成功接收到告警；<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161015736.png" alt="" loading="lazy"><br>
至此zabbix5.0配置企业微信告警就完成了。</p>
</div></template>


