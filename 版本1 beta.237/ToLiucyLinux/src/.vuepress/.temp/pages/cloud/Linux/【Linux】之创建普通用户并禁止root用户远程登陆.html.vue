<template><div><figure><img src="https://img-blog.csdnimg.cn/b3cb7470ff894a10b26f095f7eb1760b.jpeg#pic_center" alt="" width="600" height="450" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<p>@[toc]</p>
<blockquote>
<p>  在有的情况下我们怕有人使用root用户登录服务器，乱窜该一些东西，或者使用删除的时候误删；为了避免这种情况，我们可以采取禁止root用户，使用普通用户来登录，这样可以在你删除的时候会提示你输入密码，之类的，这时候就会注意到，这个文件是否删除的正确。<br><br>
  禁止root远程登陆也可以有效的预防服务器被攻击。</p>
</blockquote>
<p><strong><mark><font color=red>本文章分为两类，一类是创建普通用户，一类是禁止root用户远程登陆。</font></mark></strong></p>
<h1 id="_1、创建普通用户并设置密码" tabindex="-1"><a class="header-anchor" href="#_1、创建普通用户并设置密码" aria-hidden="true">#</a> 1、创建普通用户并设置密码</h1>
<h2 id="_1-1、创建普通用户" tabindex="-1"><a class="header-anchor" href="#_1-1、创建普通用户" aria-hidden="true">#</a> 1.1、创建普通用户</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">useradd</span> <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看是否创建成功</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/c89d0e1d4e3d4653a5f49eb646989d0d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_1-2、给test用户设置登录密码" tabindex="-1"><a class="header-anchor" href="#_1-2、给test用户设置登录密码" aria-hidden="true">#</a> 1.2、给test用户设置登录密码</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">passwd</span> <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>密码需要输入两次，如果第一次提示你的密码过于简单，不用担心，继续输入就好了，也可以设置一个比较难一点的密码，这样就不会提醒了；</p>
<p><img src="https://img-blog.csdnimg.cn/07b40d4cf4fc418da00d07e7d38d79b6.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/aadffc9ea6c14cdeab32a7210a5c41b2.png" alt="" loading="lazy"></p>
<p>输入完密码之后，可以测试一下；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">su</span> - <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以直接切换到普通用户，但是普通用户切换不回来，因为普通用户什么权限也没有，所以，切换不回来。我们可以给他设置权限。</p>
<h2 id="_1-3、给test用户设置权限" tabindex="-1"><a class="header-anchor" href="#_1-3、给test用户设置权限" aria-hidden="true">#</a> 1.3、给test用户设置权限</h2>
<p>可以使用visudo来设置</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># visudo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>直接进入，查找root在第100行可以看到root的权限，我们可以紧跟着在下面添加用户和权限</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">test</span>    <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span>       ALL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置完成之后保存退出，就可以切换到test普通用户，然后切换回来root用户测试了。</p>
<p>番外：<br>
给普通用户设置权限，并且切换root用户不需要输入密码；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">test</span>    <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span>       NOPASSWD:ALL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-4、测试test普通用户" tabindex="-1"><a class="header-anchor" href="#_1-4、测试test普通用户" aria-hidden="true">#</a> 1.4、测试test普通用户</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#先切换到普通用户</span>
<span class="token function">su</span> - <span class="token builtin class-name">test</span>

<span class="token comment">#使用普通用户创建文件</span>
<span class="token function">touch</span> a

<span class="token comment">#ls查看</span>

<span class="token comment">#切换回root用户</span>
<span class="token function">sudo</span> <span class="token function">su</span> -

<span class="token comment">#这时候需要你输入test用户的密码，输入成功之后就可以进入root用户了。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2、禁止root用户远程登录" tabindex="-1"><a class="header-anchor" href="#_2、禁止root用户远程登录" aria-hidden="true">#</a> 2、禁止root用户远程登录</h1>
<p>首先我们要切换回root用户，在/etc/ssh/sshd_config文件内修改为： PermitRootLogin no  ，正常在38行；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>进入ssh配置文件
<span class="token function">vim</span> /etc/ssh/sshd_config

<span class="token comment">#去掉前面的井号注释，在将yes修改为no</span>
PermitRootLogin no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/f2dfd5b9d3dc4f7e8f1f3288499d553d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>修改完成之后，保存退出，重启ssh服务；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#重启ssh服务</span>
systemctl restart sshd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>重启完sshd服务之后，可以退出登录，或者重启服务器，在重新使用root用户连接，就会提示让你输入密码，密码正确也不会进来，因为已经设置了禁止root用户远程登陆，所以这时候就可以使用普通用户test来登录了；这时候使用普通用户就可以登录进来了。</p>
<p>这样就可以了，禁止root用户远程登陆了。</p>
</div></template>


