<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<h2 id="报错数据" tabindex="-1"><a class="header-anchor" href="#报错数据" aria-hidden="true">#</a> 报错数据</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>useradd: Can<span class="token string">'t get unique subordinate UID range
useradd: can'</span>t create subordinate user IDs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="报错原因" tabindex="-1"><a class="header-anchor" href="#报错原因" aria-hidden="true">#</a> 报错原因</h2>
<blockquote>
<p>这个报错是因为：这是由于在创建新用户时，系统无法为其分配唯一的用户ID范围（UID range）所导致的错误。可能是由于系统中已经存在了太多的用户，导致UID已经全部被使用完毕，没有可用的范围来分配给新用户。解决该问题的方法是需要手动为新用户分配一个可用的UID范围。可以通过修改“/etc/login.defs”文件中的“UID_MIN”和“UID_MAX”值来增加可用的UID范围。另外，也可以通过删除一些不必要的用户来释放一些UID范围。</p>
</blockquote>
<blockquote>
<p>这个是因为需要在服务器中创建20000个用户，但是跑到了8000多个就开始报错。</p>
</blockquote>
<h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2>
<p>编辑/etc/login.defs，将以下代码追加到文件中。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@locahost ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/login.defs</span>
SUB_UID_MIN   <span class="token number">100000</span>
SUB_UID_MAX   <span class="token number">2000000000</span>
SUB_UID_COUNT <span class="token number">65536</span>
SUB_GID_MIN   <span class="token number">100000</span>
SUB_GID_MAX   <span class="token number">20000000000</span>
SUB_GID_COUNT <span class="token number">65536</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">useradd</span> <span class="token parameter variable">-g</span> mailgroup <span class="token parameter variable">-s</span> /sbin/nologin cs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>测试完成。</p>
<h2 id="附加-linux创建多个用户并设置密码及邮件系统" tabindex="-1"><a class="header-anchor" href="#附加-linux创建多个用户并设置密码及邮件系统" aria-hidden="true">#</a> 附加：Linux创建多个用户并设置密码及邮件系统</h2>
<p>创建20000个用户，并设置密码，和创建mail邮件系统。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">while</span> <span class="token builtin class-name">read</span> username<span class="token punctuation">;</span> <span class="token keyword">do</span>
        <span class="token function">useradd</span> <span class="token parameter variable">-g</span> mail <span class="token parameter variable">-s</span> /sbin/nologin <span class="token variable">$username</span>
        <span class="token builtin class-name">echo</span> <span class="token number">123456</span> <span class="token operator">|</span> <span class="token function">passwd</span> <span class="token parameter variable">--stdin</span> <span class="token variable">$username</span>
        <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/<span class="token variable">$username</span>/mail/.imap/INBOX
        <span class="token function">chown</span> <span class="token parameter variable">-R</span> <span class="token variable">$username</span>:mailgroup  /home/<span class="token variable">$username</span>
<span class="token keyword">done</span> <span class="token operator">&lt;</span> /root/username.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token function">cat</span> /root/username.txt <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> username<span class="token punctuation">;</span> <span class="token keyword">do</span>
        <span class="token function">useradd</span> <span class="token parameter variable">-g</span> mail <span class="token parameter variable">-s</span> /sbin/nologin <span class="token variable">$username</span>
        <span class="token builtin class-name">echo</span> <span class="token number">123456</span> <span class="token operator">|</span> <span class="token function">passwd</span> <span class="token parameter variable">--stdin</span> <span class="token variable">$username</span>
        <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/<span class="token variable">$username</span>/mail/.imap/INBOX
        <span class="token function">chown</span> <span class="token parameter variable">-R</span> <span class="token variable">$username</span>:mailgroup  /home/<span class="token variable">$username</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


