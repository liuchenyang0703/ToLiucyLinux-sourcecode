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
<h2 id="报错详情" tabindex="-1"><a class="header-anchor" href="#报错详情" aria-hidden="true">#</a> 报错详情：</h2>
<p>今天在gitee上看到一个比较感兴趣的项目，于是就想下载下来研究研究，结果git clone 克隆的时候报错了，报错如下：<br></p>
<font color=red> git@gitee.com: Permission denied (publickey).fatal: Could not read
from remote repository.Please make sure you have the correct access
rights and the repository exists.</font>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/e98aa4c8ac3a46768e0029f9f29a846d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="原因分析" tabindex="-1"><a class="header-anchor" href="#原因分析" aria-hidden="true">#</a> 原因分析：</h2>
<p>Permission denied (publickey) 没有权限的publickey(公锁) ，出现这错误一般是以下两种原因：</p>
<ul>
<li>客户端与服务端未生成 ssh key</li>
<li>客户端与服务端的ssh key不匹配</li>
</ul>
<p>最后找到问题的原因了，因为没有正确设置公私钥，导致没有权限操作。所以需要生成一次ssh key ，服务端也需要配置一下即可；</p>
<h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法：</h2>
<ul>
<li>1、先查看一下自己有没有生成过public key</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> ~/.ssh/id_rsa.pub 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果有的话，那应该是以<code v-pre>ssh-rsa</code> 开头的，以生成公钥时注册的邮箱为结尾的。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/8916399170ad4e038fdf50982c139efc.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>我看了一下，这里是有公钥的，那么为什么还会报错呢，看了看邮箱，因为这个以前同事也在用，可能是他生成的公钥吧，邮箱地址是他的；所以是因为是不同的邮箱，也就是两个账号，所以用不了，但我们要知道设定时的密码，要不然也弄不了，索性，我就重新生成了一个，<font color=red>注意：这里再次生成公钥的时候会覆盖以前的，所以有必要时先备份在重新生成。</font></p>
<ul>
<li>2、生成公私钥</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> “xxxxx@xxx.com”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里的xxxxx@xxx.com填写你自己的邮箱账号；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/c3712f0a06474704955a17210ed10fe8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>3、将public key添加到码云</li>
</ul>
<p>复制刚刚生成的公钥：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> ~/.ssh/id_rsa.pub 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/d9a66a9aa23c4e2ba722f49c0f188ea1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>打开自己的Gitee的设置–&gt;ssh公钥：<a href="https://gitee.com/profile/sshkeys" target="_blank" rel="noopener noreferrer">https://gitee.com/profile/sshkeys<ExternalLinkIcon/></a></p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/58c81300a1784bbca905449339d5f937.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/19db637f2b234a5187f67bd1676b825a.png" alt="" loading="lazy"></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/5f1d28c292c64418af852aee79db7215.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>然后需要做一个安全认证，需要您输入gitee的密码，最后就添加成功了。</p>
<ul>
<li>4、可以自己验证一下是否成功</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@gitee.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里需要输入自己设置公钥时的密码；最后出现<code v-pre>access</code>即成功。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/8f0d0b9c7162484abf3f20a131eeea2d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>5、然后我们就可以clone克隆仓库了</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone git@gitee.com:carefree-state/mara-circle-july-2023.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/958f7c4f02314abfb7b3920e86429b74.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这样就克隆成功了。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/d791bfbe76d944ef911231559150e91f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


