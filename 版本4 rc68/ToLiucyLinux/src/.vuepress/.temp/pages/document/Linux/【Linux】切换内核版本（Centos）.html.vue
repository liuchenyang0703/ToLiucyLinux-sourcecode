<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者</a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主</a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主</a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区</a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181357950.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_1-查看服务器已安装的所有内核版本" tabindex="-1"><a class="header-anchor" href="#_1-查看服务器已安装的所有内核版本"><span>1.查看服务器已安装的所有内核版本</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">awk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -F</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '$1=="menuentry " {print i++ " : " $2}'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/grub2.cfg</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>0 : CentOS Linux (3.10.0-1160.83.1.el7.x86_64) 7 (Core)<br>
1 : CentOS Linux (3.10.0-1160.80.1.el7.x86_64) 7 (Core)<br>
2 : CentOS Linux (3.10.0-1127.el7.x86_64) 7 (Core)<br>
3 : CentOS Linux (3.10.0-1160.83.1.el7.x86_64.debug) 7 (Core)<br>
4 : CentOS Linux (3.10.0-1160.80.1.el7.x86_64.debug) 7 (Core)<br>
5 : CentOS Linux (0-rescue-0e5781d77781441b97290d7bad5663e2) 7 (Core)</p>
</blockquote>
<h2 id="_2-修改版本配置" tabindex="-1"><a class="header-anchor" href="#_2-修改版本配置"><span>2.修改版本配置</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/default/grub</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">GRUB_TIMEOUT</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">5</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">GRUB_DISTRIBUTOR</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 's, release .*$,,g' /etc/system-release)"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">GRUB_DEFAULT</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">3</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">GRUB_DISABLE_SUBMENU</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">GRUB_TERMINAL_OUTPUT</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"console"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">GRUB_CMDLINE_LINUX</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"crashkernel=auto rhgb quiet intel_iommu=on iommu=pt"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">GRUB_DISABLE_RECOVERY</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"true"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将配置文件中的<code v-pre>GRUB_DEFAULT</code>的值改为上面查看的对应值ID，根据自己的所需修改；我这里要改为<code v-pre>CentOS Linux (3.10.0-1160.80.1.el7.x86_64) 7 (Core)</code>则修改为：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">GRUB_DEFAULT</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181357876.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_3-编译配置" tabindex="-1"><a class="header-anchor" href="#_3-编译配置"><span>3.编译配置</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grub2-mkconfig</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /boot/grub2/grub.cfg</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_4-重启系统" tabindex="-1"><a class="header-anchor" href="#_4-重启系统"><span>4.重启系统</span></a></h2>
<p>编译完成之后需要重新系统方则生效</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">reboot</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_5-重启后查看内核版本" tabindex="-1"><a class="header-anchor" href="#_5-重启后查看内核版本"><span>5.重启后查看内核版本</span></a></h2>
<p>等待重启完成命令查看当前内核版本</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">uname</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -a</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">uname</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -r</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181356462.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>完成版本切换。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181356922.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


