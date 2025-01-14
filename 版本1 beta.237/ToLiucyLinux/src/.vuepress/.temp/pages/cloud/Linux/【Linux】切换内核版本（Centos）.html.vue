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
<p>@[toc]</p>
<figure><img src="https://img-blog.csdnimg.cn/6d4286e5924b439f9a678dbfdf88e3bc.png#pic_center" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="_1-查看服务器已安装的所有内核版本" tabindex="-1"><a class="header-anchor" href="#_1-查看服务器已安装的所有内核版本" aria-hidden="true">#</a> 1.查看服务器已安装的所有内核版本</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">awk</span> -F<span class="token punctuation">\</span>' <span class="token string">'$1=="menuentry " {print i++ " : " $2}'</span> /etc/grub2.cfg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>0 : CentOS Linux (3.10.0-1160.83.1.el7.x86_64) 7 (Core)<br>
1 : CentOS Linux (3.10.0-1160.80.1.el7.x86_64) 7 (Core)<br>
2 : CentOS Linux (3.10.0-1127.el7.x86_64) 7 (Core)<br>
3 : CentOS Linux (3.10.0-1160.83.1.el7.x86_64.debug) 7 (Core)<br>
4 : CentOS Linux (3.10.0-1160.80.1.el7.x86_64.debug) 7 (Core)<br>
5 : CentOS Linux (0-rescue-0e5781d77781441b97290d7bad5663e2) 7 (Core)</p>
</blockquote>
<h1 id="_2-修改版本配置" tabindex="-1"><a class="header-anchor" href="#_2-修改版本配置" aria-hidden="true">#</a> 2.修改版本配置</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vi</span> /etc/default/grub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token assign-left variable">GRUB_TIMEOUT</span><span class="token operator">=</span><span class="token number">5</span>
<span class="token assign-left variable">GRUB_DISTRIBUTOR</span><span class="token operator">=</span><span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">sed</span> <span class="token string">'s, release .*$,,g'</span> /etc/system-release<span class="token variable">)</span></span>"</span>
<span class="token assign-left variable">GRUB_DEFAULT</span><span class="token operator">=</span><span class="token number">3</span>
<span class="token assign-left variable">GRUB_DISABLE_SUBMENU</span><span class="token operator">=</span>true
<span class="token assign-left variable">GRUB_TERMINAL_OUTPUT</span><span class="token operator">=</span><span class="token string">"console"</span>
<span class="token assign-left variable">GRUB_CMDLINE_LINUX</span><span class="token operator">=</span><span class="token string">"crashkernel=auto rhgb quiet intel_iommu=on iommu=pt"</span>
<span class="token assign-left variable">GRUB_DISABLE_RECOVERY</span><span class="token operator">=</span><span class="token string">"true"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将配置文件中的<code v-pre>GRUB_DEFAULT</code>的值改为上面查看的对应值ID，根据自己的所需修改；我这里要改为<code v-pre>CentOS Linux (3.10.0-1160.80.1.el7.x86_64) 7 (Core)</code>则修改为：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token assign-left variable">GRUB_DEFAULT</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/5352dcc4573844e4bba867eff3974a00.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="_3-编译配置" tabindex="-1"><a class="header-anchor" href="#_3-编译配置" aria-hidden="true">#</a> 3.编译配置</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>grub2-mkconfig <span class="token parameter variable">-o</span> /boot/grub2/grub.cfg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_4-重启系统" tabindex="-1"><a class="header-anchor" href="#_4-重启系统" aria-hidden="true">#</a> 4.重启系统</h1>
<p>编译完成之后需要重新系统方则生效</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_5-重启后查看内核版本" tabindex="-1"><a class="header-anchor" href="#_5-重启后查看内核版本" aria-hidden="true">#</a> 5.重启后查看内核版本</h1>
<p>等待重启完成命令查看当前内核版本</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">uname</span> <span class="token parameter variable">-a</span>
<span class="token function">uname</span> <span class="token parameter variable">-r</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/72f2325bbac742ecbd27adc2b42960a1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>完成版本切换。</p>
<figure><img src="https://img-blog.csdnimg.cn/03943301e5ed4064aa8e4342a8d6949f.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


