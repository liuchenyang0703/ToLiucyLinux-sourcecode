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
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181611790.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_1、先查看是否有服务正在运行-将他们都停掉" tabindex="-1"><a class="header-anchor" href="#_1、先查看是否有服务正在运行-将他们都停掉"><span>1、先查看是否有服务正在运行，将他们都停掉</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#查看是否有服务正在运行；</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">virsh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> list</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --all</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181611356.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>我们可以看到是有的，需要将服务关闭：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">virsh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> shutdown</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> centos7.0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181611616.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>然后在删除，不想删除也可以，依据自己；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">virsh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> undefine</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> centos7.0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>删除完成之后就开始卸载服务；</p>
<h2 id="_2、启动-network-服务-重要" tabindex="-1"><a class="header-anchor" href="#_2、启动-network-服务-重要"><span>2、启动 network 服务（<font color=red>重要</font>）</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#设置开机自启</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">chkconfig</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> NetworkManager</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> on</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#启动NetworkManager服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> NetworkManager</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#查看启动状态</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> NetworkManager</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> status</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181611289.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_3、卸载-virbr0-网卡及解除-br0-网络桥接" tabindex="-1"><a class="header-anchor" href="#_3、卸载-virbr0-网卡及解除-br0-网络桥接"><span>3、卸载 virbr0 网卡及解除 br0 网络桥接</span></a></h2>
<h3 id="卸载-virbr0-网卡" tabindex="-1"><a class="header-anchor" href="#卸载-virbr0-网卡"><span>卸载 virbr0 网卡</span></a></h3>
<ul>
<li>先查看网卡</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#先查看网卡</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ifconfig</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181610129.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>显示桥接（bridge）列表</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">brctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> show</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181610699.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>列出当前连接的虚拟网络</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">virsh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> net-list</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181610472.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>停止/删除默认的虚拟网络</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">virsh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> net-destroy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> default</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181610120.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>取消定义默认的虚拟网络</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">virsh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> net-undefine</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> default</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181610644.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>重新启动libvirtd守护进程</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> libvirtd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181610342.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>再次列出当前连接的虚拟网络</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">virsh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> net-list</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这时可以看到已经没有了；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181610292.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>再次查看桥接（bridge）列表</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">brctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> show</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>发现<code v-pre>virtbr0</code>已经没有了；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181610364.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="解除并删除br0桥接网卡" tabindex="-1"><a class="header-anchor" href="#解除并删除br0桥接网卡"><span>解除并删除br0桥接网卡</span></a></h3>
<p>解除网卡会导致远程连接连接不上，需要使用<code v-pre>显示屏直连服务器</code>或者在<code v-pre>vmwar虚拟机</code>中操作，在里面使用命令行模式操作，init 3转为完整的字符界面多用户操作；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#解除绑定ens33网卡</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">brctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> delif</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> br0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ens33</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181610475.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>执行这一步就会断连，所以需要使用<code v-pre>显示屏直连服务器</code>或者在<code v-pre>vmwar虚拟机</code>中操作接下来的步骤；<br>
我的是用的虚拟机测试，所以，在<code v-pre>vmware</code>中执行接下来的命令；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#关闭br0,不关闭删不掉</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ifconfig</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> br0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> down</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#删除br0</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">brctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> delbr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> br0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#删除完在查看一下桥接（bridge）列表</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">brctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> show</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181610169.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>会发现桥接（bridge）列表中的 br0 桥接 ens33 已经没了，然后ip a查看ip时，ens33没有设置IP，所以，需要设置一下ip，然后重启服务，就可以连接上了；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#进入网络配置目录</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/sysconfig/network-scripts/</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#删除br0的配置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -rf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ifcfg-br0</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#将最开始部署时备份的覆盖一下ens33网卡（要用到的网卡），如果最开始没有备份的话那么就重新配置一下，还和原来的一样，记住ip就可以</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -ar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ens33-bak</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ifcfg-ens33</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#选择覆盖即可</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#覆盖完可以校验查看一下</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/ifcfg-ens33</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181610058.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>确认完成，就需要重启一下网络服务，使其生效</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#确认完成，就需要重启一下网络服务，使其生效</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/etc/init.d/network</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181610768.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>查看IP</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181610009.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这样就修改完成了，我们就可以继续远程连接服务器了；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181610799.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_4、卸载服务" tabindex="-1"><a class="header-anchor" href="#_4、卸载服务"><span>4、卸载服务</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#卸载刚刚安装时的所有服务及相关依赖包</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> remove</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> qemu-kvm</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> python-virtinst</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> libvirt</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> libvirt-python</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> virt-manager</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> libguestfs-tools</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bridge-utils</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> virt-install</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#卸载完成之后，如果不确定可以在使用rpm查看一下是否还有这些包。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、删除相关目录" tabindex="-1"><a class="header-anchor" href="#_5、删除相关目录"><span>5、删除相关目录</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#删除libvirt相关的目录，安装libvirt这个命令时就会产生，这几个存放位置是系统默认的，如果怕卸载不干净，可以使用find 查找</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -rf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /var/lib/libvirt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/libvirt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /var/log/swtpm/libvirt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /var/cache/libvirt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/lib64/libvirt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#kvm的iso镜像和存储路径（自定义的）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -rf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /home/kvm</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就卸载完成了！！！</p>
<blockquote>
<p>  <font color=red>提示：</font>卸载完成之后，有的细心的人为了彻底让他卸载干净，也会去查询kvm等相关的目录，如果是查询kvm相关的目录的话，可能会有几个，因为你开了虚拟化，这是系统生产的，我也没有删除，我用的是虚拟机，只要把虚拟化关了，那几个目录就没了；至于删了是什么后果，可能会导致服务器远程连接不上...等等...未知问题，所以，kvm虚拟化相关的目录就不用删了，避免出现不必要的麻烦。</p>
</blockquote>
<h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章"><span>相关文章</span></a></h2>
<table>
<thead>
<tr>
<th>文章标题</th>
<th>文章地址</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/126303077" target="_blank" rel="noopener noreferrer">【Linux】之Centos7安装KVM虚拟化及相关命令</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/126303077" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/126303077</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/132076894" target="_blank" rel="noopener noreferrer">【Linux】之Centos7卸载KVM虚拟化服务</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/132076894" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/132076894</a></td>
</tr>
</tbody>
</table>
</div></template>


