<template><div><p>@[toc]</p>
<figure><img src="https://img-blog.csdnimg.cn/864d69bf1a7d4475b9efc7ba5665d9b7.jpeg#pic_center" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<br>
<br>
<font color=green size=5>相关文章：</font><blockquote>
<p>💻 zabbix的安装部署可参考：<a href="https://liucy.blog.csdn.net/article/details/124248236" target="_blank" rel="noopener noreferrer">zabbix5.0部署（超级详细）<ExternalLinkIcon/></a><br></p>
<hr>
<p>💻 zabbix的脚本安装部署可参考：<a href="https://download.csdn.net/download/liu_chen_yang/86168600" target="_blank" rel="noopener noreferrer">zabbix5.0离线脚本一键安装(包含服务端、客户端、脚本和使用说明)<ExternalLinkIcon/></a><br></p>
<hr>
<p>zabbix5.0设置企业微信告警，首先需要一个企业微信；</p>
</blockquote>
<h1 id="配置企业微信" tabindex="-1"><a class="header-anchor" href="#配置企业微信" aria-hidden="true">#</a> 配置企业微信</h1>
<h2 id="_1、注册企业微信" tabindex="-1"><a class="header-anchor" href="#_1、注册企业微信" aria-hidden="true">#</a> 1、注册企业微信</h2>
<p><strong><font color=red>  如果需要用公司的企业微信来做告警信息的接收者，那么这个步骤就可以省略了。</font></strong></p>
<blockquote>
<p>如果是在公司，监控自定义服务，需要部分的人员都能看到，哪最好就是去找公司企业微信的创建人，因为后面会用到企业ID。</p>
</blockquote>
<p>没有企业微信我们可以到这里注册一个：<a href="https://work.weixin.qq.com/" target="_blank" rel="noopener noreferrer">https://work.weixin.qq.com/<ExternalLinkIcon/></a></p>
<figure><img src="https://img-blog.csdnimg.cn/bd73035af5ce4f509bc32c9e5e856395.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>企业名称可填写企业、政府或组织名称</p>
<figure><img src="https://img-blog.csdnimg.cn/2d5717ed10724d9f83fad94d49553f76.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>填写完成之后点击注册就可以了；</p>
<figure><img src="https://img-blog.csdnimg.cn/51247c3bdcef4c75b329c4c2383c67c4.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>注册完成之后也可以邀请同事或者同学、朋友进来都可以；<br>
注册完成后通过网页登陆企业微信（<strong><font color=red>因为一些操作只有页面管理能操作</font></strong>）</p>
<h2 id="_2、添加部门" tabindex="-1"><a class="header-anchor" href="#_2、添加部门" aria-hidden="true">#</a> 2、添加部门</h2>
<p><img src="https://img-blog.csdnimg.cn/ca546f0b014b47ad9246cfff345fcd4d.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/1990a89140bb4db6be5ebe53f9bc29c8.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/bea4b50be14b48fa8a86a1da564254ff.png" alt="在这里插入图片描述" loading="lazy"></p>
<p>添加完部门看一下部门Id，后面写配置的时候要用到。</p>
<figure><img src="https://img-blog.csdnimg.cn/200c230464ca4db783ffba941a2d866e.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="_3、添加部门成员" tabindex="-1"><a class="header-anchor" href="#_3、添加部门成员" aria-hidden="true">#</a> 3、添加部门成员</h2>
<blockquote>
<p>可以文件导入，也可以从其他部门移入，也可以自己添加成员。</p>
</blockquote>
<p>我们就来自己添加吧；</p>
<p><img src="https://img-blog.csdnimg.cn/06c0b0f0260446aeaf5f927362d59361.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/e1469f82fa6242318fb3444146bf1d69.png" alt="在这里插入图片描述" loading="lazy"></p>
<p>完成之后可继续添加，也可以直接保存；</p>
<p><img src="https://img-blog.csdnimg.cn/3737f4fbd82c4c95a6a0bc166e4af5ea.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/fe3db6d92c264bc5944c323dc7c7bfbe.png" alt="在这里插入图片描述" loading="lazy"></p>
<h2 id="_4、自建应用-用来告警通知的" tabindex="-1"><a class="header-anchor" href="#_4、自建应用-用来告警通知的" aria-hidden="true">#</a> 4、自建应用（用来告警通知的）</h2>
<p>选择应用管理----&gt;选择自建应用（支持小程序）</p>
<figure><img src="https://img-blog.csdnimg.cn/d28a7ee0de174bc79f13d6f2c7819dd3.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>创建应用；</p>
<blockquote>
<ul>
<li> logo可以自己去网上查找或者自己做一个；</li>
<li> 应用名称可以自己定义，我定义的就是”zabbix监控“；</li>
<li> 应用介绍可以不填，看自己情况；</li>
<li> 可见范围，选择刚刚创建的部门即可。</li>
</ul>
</blockquote>
<p><img src="https://img-blog.csdnimg.cn/aac08f5e6a114dbc88187c4e2fec8ff7.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/686586cee82946139b1e763669df43ef.png" alt="在这里插入图片描述" loading="lazy"></p>
<p>创建成功查看</p>
<blockquote>
<p>  要记住id，后续还需要secret，到时候查看按照步骤做就可以了。</p>
</blockquote>
<figure><img src="https://img-blog.csdnimg.cn/3cd6ec0d097c49fb8bf0d4191c76968c.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>点击查看Secret</p>
<figure><img src="https://img-blog.csdnimg.cn/c73128119462462eaae26948b465fc86.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>点击发送后在企业微信内会有信息，点击查看Secret</p>
<figure><img src="https://img-blog.csdnimg.cn/1ba8d6c488664465ae68efd0c12f8b7f.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>点击前往查看；记下来，后续要用到；</p>
<p><img src="https://img-blog.csdnimg.cn/25f4d589cb0d4898b45b3b78218f76af.png" alt="在这里插入图片描述" loading="lazy"><br>
顺便查看一下企业的ID，后续需要用到；</p>
<blockquote>
<p>  点击我的企业---&gt;企业信息---&gt;最下面有一个企业ID；（这个是需要记住的，后续要使用）。</p>
</blockquote>
<figure><img src="https://img-blog.csdnimg.cn/114d1d6353324975a1c1601dfa3a2e47.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="配置zabbix服务端-zabbix-server" tabindex="-1"><a class="header-anchor" href="#配置zabbix服务端-zabbix-server" aria-hidden="true">#</a> 配置zabbix服务端（zabbix-server）</h1>
<br>
<h2 id="_1、编辑zabbix-server-conf文件进行配置" tabindex="-1"><a class="header-anchor" href="#_1、编辑zabbix-server-conf文件进行配置" aria-hidden="true">#</a> 1、编辑zabbix-server.conf文件进行配置</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#进入zabbix_server配置文件</span>
<span class="token function">vim</span> /etc/zabbix/zabbix_server.conf

<span class="token comment">#默认523行会有这条，这里是存放脚本的位置</span>
<span class="token assign-left variable">AlertScriptsPath</span><span class="token operator">=</span>/usr/lib/zabbix/alertscripts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、安装组件requests" tabindex="-1"><a class="header-anchor" href="#_2、安装组件requests" aria-hidden="true">#</a> 2、安装组件requests</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> python-requests
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3、微信报警脚本" tabindex="-1"><a class="header-anchor" href="#_3、微信报警脚本" aria-hidden="true">#</a> 3、微信报警脚本</h2>
<blockquote>
<p>下载地址：<a href="https://download.csdn.net/download/liu_chen_yang/86087478" target="_blank" rel="noopener noreferrer">zabbix微信告警.py<ExternalLinkIcon/></a></p>
</blockquote>
<p>在/usr/lib/zabbix/alertscripts目录下操作；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#进入/usr/lib/zabbix/alertscripts</span>
<span class="token builtin class-name">cd</span> /usr/lib/zabbix/alertscripts
<span class="token comment">#创建一个python脚本</span>
<span class="token function">vim</span> weixin.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制下面的脚本粘贴上去即可；</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment">#!/usr/bin/python</span>
<span class="token comment">#_*_coding:utf-8 _*_</span>
 
 
<span class="token keyword">import</span> urllib<span class="token punctuation">,</span>urllib2
<span class="token keyword">import</span> json
<span class="token keyword">import</span> sys
<span class="token keyword">import</span> simplejson
<span class="token keyword">import</span> base64
<span class="token keyword">import</span> hashlib
 
<span class="token builtin">reload</span><span class="token punctuation">(</span>sys<span class="token punctuation">)</span>
sys<span class="token punctuation">.</span>setdefaultencoding<span class="token punctuation">(</span><span class="token string">'utf-8'</span><span class="token punctuation">)</span>
 
 
<span class="token keyword">def</span> <span class="token function">gettoken</span><span class="token punctuation">(</span>corpid<span class="token punctuation">,</span>corpsecret<span class="token punctuation">)</span><span class="token punctuation">:</span>
    gettoken_url <span class="token operator">=</span> <span class="token string">'https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid='</span> <span class="token operator">+</span> corpid <span class="token operator">+</span> <span class="token string">'&amp;corpsecret='</span> <span class="token operator">+</span> corpsecret
    <span class="token keyword">print</span>  gettoken_url
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        token_file <span class="token operator">=</span> urllib2<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span>gettoken_url<span class="token punctuation">)</span>
    <span class="token keyword">except</span> urllib2<span class="token punctuation">.</span>HTTPError <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">print</span> e<span class="token punctuation">.</span>code
        <span class="token keyword">print</span> e<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">"utf8"</span><span class="token punctuation">)</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
    token_data <span class="token operator">=</span> token_file<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">'utf-8'</span><span class="token punctuation">)</span>
    token_json <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>token_data<span class="token punctuation">)</span>
    token_json<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span>
    token <span class="token operator">=</span> token_json<span class="token punctuation">[</span><span class="token string">'access_token'</span><span class="token punctuation">]</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span>
    <span class="token keyword">return</span> token
 
<span class="token keyword">def</span> <span class="token function">senddata</span><span class="token punctuation">(</span>access_token<span class="token punctuation">,</span>user<span class="token punctuation">,</span>subject<span class="token punctuation">,</span>content<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'/usr/lib/zabbix/alertscripts/graph/bg.png'</span><span class="token punctuation">,</span>mode<span class="token operator">=</span><span class="token string">'rb'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
       png <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
    png_md5 <span class="token operator">=</span> hashlib<span class="token punctuation">.</span>md5<span class="token punctuation">(</span><span class="token punctuation">)</span>
    png_64 <span class="token operator">=</span> base64<span class="token punctuation">.</span>b16encode<span class="token punctuation">(</span>png<span class="token punctuation">)</span>
    send_url <span class="token operator">=</span> <span class="token string">'https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token='</span> <span class="token operator">+</span> access_token
    send_values <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">"touser"</span> <span class="token punctuation">:</span> <span class="token string">"@all"</span><span class="token punctuation">,</span>   <span class="token comment">#企业号中的用户帐号，在zabbix用户Media中配置，如果配置不正常，将按部门发送。</span>
        <span class="token string">"toparty"</span><span class="token punctuation">:</span><span class="token string">"2"</span><span class="token punctuation">,</span>    <span class="token comment">#企业号中的部门id。</span>
        <span class="token string">"msgtype"</span><span class="token punctuation">:</span><span class="token string">"text"</span><span class="token punctuation">,</span> <span class="token comment">#消息类型。</span>
        <span class="token string">"agentid"</span><span class="token punctuation">:</span><span class="token string">"100035"</span><span class="token punctuation">,</span>    <span class="token comment">#企业号中的应用id。</span>
        <span class="token string">"text"</span><span class="token punctuation">:</span><span class="token punctuation">{</span>
            <span class="token string">"content"</span><span class="token punctuation">:</span>subject <span class="token operator">+</span> <span class="token string">'\n'</span> <span class="token operator">+</span> content
           <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">"safe"</span><span class="token punctuation">:</span><span class="token string">"0"</span>
        <span class="token punctuation">}</span>
        
<span class="token comment">#    send_data = json.dumps(send_values, ensure_ascii=False)</span>
    send_data <span class="token operator">=</span> simplejson<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>send_values<span class="token punctuation">,</span> ensure_ascii<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">'utf-8'</span><span class="token punctuation">)</span>
    send_request <span class="token operator">=</span> urllib2<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>send_url<span class="token punctuation">,</span> send_data<span class="token punctuation">)</span>
    response <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>urllib2<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span>send_request<span class="token punctuation">)</span><span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span> <span class="token builtin">str</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
 
 
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    user <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>     <span class="token comment">#zabbix传过来的第一个参数</span>
    subject <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">#zabbix传过来的第二个参数</span>
    content <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">#zabbix传过来的第三个参数</span>
 
    corpid <span class="token operator">=</span>  <span class="token string">'22jsaooasbf23934'</span>   <span class="token comment">#CorpID是企业号的标识</span>
    corpsecret <span class="token operator">=</span> <span class="token string">'410Jsk8_4lvCQYmdo92-sdfafsadfasdfxzc'</span>  <span class="token comment">#corpsecretSecret是管理组凭证密钥</span>
    accesstoken <span class="token operator">=</span> gettoken<span class="token punctuation">(</span>corpid<span class="token punctuation">,</span>corpsecret<span class="token punctuation">)</span>
    senddata<span class="token punctuation">(</span>accesstoken<span class="token punctuation">,</span>user<span class="token punctuation">,</span>subject<span class="token punctuation">,</span>content<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意里面要修改的地方；（上面说过了几处地方是需要注意的后面需要用到，现在就可以用到了）；</p>
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
<figure><img src="https://img-blog.csdnimg.cn/b92de7a2ae584348848f6ca4cf5d403f.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>企业号中的应用id</p>
<figure><img src="https://img-blog.csdnimg.cn/e2a2853c8ad94590876d561e72792ea1.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>CorpID是企业号的标识（企业的id）</p>
<figure><img src="https://img-blog.csdnimg.cn/a4fa5220b55e40c7bb1f7a45a8576fd4.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>管理组凭证密钥（应用的Secret，在应用管理中）</p>
<blockquote>
<p>遇到过期的话重新发送一下就可以；</p>
</blockquote>
<p><img src="https://img-blog.csdnimg.cn/1e7a91ec543c485aa90fe60d81d5cf91.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/3b73c3114f12437cb50059ee1bfa838b.png" alt="在这里插入图片描述" loading="lazy"></p>
<figure><img src="https://img-blog.csdnimg.cn/d1d5edc813b64c229aef45c82164fc54.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>更换好之后，保存退出即可；</p>
<h2 id="_4、测试脚本是否可用" tabindex="-1"><a class="header-anchor" href="#_4、测试脚本是否可用" aria-hidden="true">#</a> 4、测试脚本是否可用</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>python /usr/lib/zabbix/alertscripts/weixin.py aaabbbccc abc <span class="token number">1234</span>

<span class="token punctuation">{</span>u<span class="token string">'msgid'</span><span class="token builtin class-name">:</span> u<span class="token string">'mrVtVXE39it1tWVvd57npP-C0Y8uy8F_-hstvi9e_Y0gSghmqd6IOO4SWKCTeFNyUYjV8TgdE3IXSGC3g2w_oQ'</span>, u<span class="token string">'errcode'</span><span class="token builtin class-name">:</span> <span class="token number">0</span>, u<span class="token string">'errmsg'</span><span class="token builtin class-name">:</span> u<span class="token string">'ok'</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="配置zabbix-web端" tabindex="-1"><a class="header-anchor" href="#配置zabbix-web端" aria-hidden="true">#</a> 配置zabbix web端</h1>
<br>
<blockquote>
<p>因为之前我已经把监控项和触发器弄好了，所以，直接配置报警媒介类型就好了。</p>
</blockquote>
<p>可以参考：<a href="https://liucy.blog.csdn.net/article/details/124101253" target="_blank" rel="noopener noreferrer">zabbix添加自定义监控项&amp;告警（邮件）<ExternalLinkIcon/></a></p>
<h2 id="_1、配置报警媒介类型" tabindex="-1"><a class="header-anchor" href="#_1、配置报警媒介类型" aria-hidden="true">#</a> 1、配置报警媒介类型</h2>
<figure><img src="https://img-blog.csdnimg.cn/7aad1409a9e948d68bd170624c11e8e1.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>脚本名称一定要和alertscripts目录下放的一样；</p>
<figure><img src="https://img-blog.csdnimg.cn/9953c364c13145b1a5c09a980fc24c91.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>完成之后外面有一个测试（zabbix5.0以及以后才有）</p>
<figure><img src="https://img-blog.csdnimg.cn/cfba6b8811444407a94c83d0d4ac826e.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>收件人“@all”就可以</p>
<figure><img src="https://img-blog.csdnimg.cn/28774c24de2f4edb91c1ae129a642e97.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>如果有报错，就解决一下报错；没有的话就直接去企业微信看看能收到信息嘛<br>
；<br>
<img src="https://img-blog.csdnimg.cn/e54fdd02fbda49aeba5c7daf3d17ca46.png" alt="在这里插入图片描述" loading="lazy"></p>
<p>这样就是发送成功了，我们去企业微信看一下；</p>
<figure><img src="https://img-blog.csdnimg.cn/c360a28910614273ab90ff4c45f6abd6.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>可以看到消息已经发送过来了。</p>
<p>使所有的告警信息都发送到企业微信的话，我们可以往下看；</p>
<h2 id="_2、配置动作" tabindex="-1"><a class="header-anchor" href="#_2、配置动作" aria-hidden="true">#</a> 2、配置动作</h2>
<figure><img src="https://img-blog.csdnimg.cn/77e81209c13b4ad7b7361a7adffc28bf.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>名称自己起一个就好了；</p>
<p><img src="https://img-blog.csdnimg.cn/0b3908633d9441caa695621c04495e5c.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/a9e9474320814073bd5346d75da3db6d.png" alt="在这里插入图片描述" loading="lazy"></p>
<p>仅送到选择所有就可以：</p>
<figure><img src="https://img-blog.csdnimg.cn/0b19160383564285aeccb5f07c18a338.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>恢复操作选择“通知所有参与者”就可以；</p>
<figure><img src="https://img-blog.csdnimg.cn/aeb88c76cf0c4bff965ae0dde52ad3cf.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>动作设置完成，去设置用户；</p>
<h2 id="_3、配置用户" tabindex="-1"><a class="header-anchor" href="#_3、配置用户" aria-hidden="true">#</a> 3、配置用户</h2>
<figure><img src="https://img-blog.csdnimg.cn/709f43b9512149bdbda4a6261bd07c09.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>选择报警媒介---&gt;点击添加</p>
<figure><img src="https://img-blog.csdnimg.cn/a515235c44ee47eb9255a32e5407a19e.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>选择weixin即可；收件人还是“@all”；</p>
<figure><img src="https://img-blog.csdnimg.cn/aaf8510f26d64a2ea1eb3730ef84620c.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>添加完成之后一定要点击更新；</p>
<figure><img src="https://img-blog.csdnimg.cn/ffd590b4221c462f9dcab29e9e5f8c6e.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="_4、测试发送告警" tabindex="-1"><a class="header-anchor" href="#_4、测试发送告警" aria-hidden="true">#</a> 4、测试发送告警</h2>
<p>成功接收到告警；<br>
<img src="https://img-blog.csdnimg.cn/05290fcd0f2f46cc8036ca17039c9692.png" alt="在这里插入图片描述" loading="lazy"><br>
至此zabbix5.0配置企业微信告警就完成了。</p>
</div></template>


