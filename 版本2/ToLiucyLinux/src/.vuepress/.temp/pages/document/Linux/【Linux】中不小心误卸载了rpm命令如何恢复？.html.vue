<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181626375.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>🍁<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者</a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主</a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主</a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区</a> 欢迎大家的加入！</p>
</blockquote>
<h2 id="问题复现" tabindex="-1"><a class="header-anchor" href="#问题复现"><span>问题复现</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-8.7p1]# rpm rpm -e --nodeps $(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -qa</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> |</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pam-devel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost openssh-8.7p1]# rpm -ivh pam-devel-1.1.8-23.el7.x86_64.rpm</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">-bash:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/bin/rpm:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 没有那个文件或目录</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不小心多输了一个rpm，导致rpm被强制删除了，很伤心😟！那么怎么解决呢？下面来带大家解决。</p>
<h2 id="问题解决方案" tabindex="-1"><a class="header-anchor" href="#问题解决方案"><span>问题解决方案</span></a></h2>
<p>准备两台机器，一台有rpm命令的，一台没有rpm命令的。</p>
<ul>
<li>查看rpm<font color=red> 故障 </font>的那台机器的rpm命令路径（209）</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# whereis rpm</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rpm:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/lib/rpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/rpm</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>查看rpm<font color=gree> 没有故障 </font>的哪台机器的rpm命令路径（210）</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# whereis rpm</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rpm:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/bin/rpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/lib/rpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/rpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/share/man/man8/rpm.8.gz</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>解决方案：</p>
<blockquote>
<p>从210.中可以看到209机器上rpm命令被卸载的，连man手册也没有了，bin下面更是没有。</p>
</blockquote>
<blockquote>
<p>思路：想到编译安装的软件的卸载方法是直接将安装路径下的文件直接删掉即可，那么我们可不可以缺什么补什么呢？显然可以啊。反过来不是一样么。</p>
</blockquote>
<h3 id="补全-whereis-rpm-缺少的文件" tabindex="-1"><a class="header-anchor" href="#补全-whereis-rpm-缺少的文件"><span>补全 whereis rpm 缺少的文件</span></a></h3>
<p>从没有问题的那台服务器（210）往这边（209）拷文件过来；<br>
可以看到有问题的rpm这台服务器（209）缺少：<font color=red>/usr/bin/rpm、/usr/share/man/man8/rpm.8.gz</font> 那么，将这两个文件从没有问题的服务器（210）上拉过来。</p>
<ul>
<li>在没问题的服务器上执行（210）</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#从没有问题（210）的服务器上拉文件到有问题（209）的服务器上</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# scp /usr/bin/rpm root@172.16.11.209:/usr/bin/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# scp -r /usr/share/man/man8/rpm.8.gz root@172.16.11.209:/usr/share/man/man8/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>都拉过来了之后再次使用whereis看一下，两边是否都一样了</p>
<ul>
<li>查看rpm<font color=red> 故障 </font>的那台机器的rpm命令路径（209）</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# whereis rpm</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rpm:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/bin/rpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/lib/rpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/rpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/share/man/man8/rpm.8.gz</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>查看rpm<font color=gree> 没有故障 </font>的哪台机器的rpm命令路径（210）</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# whereis rpm</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rpm:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/bin/rpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/lib/rpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/rpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/share/man/man8/rpm.8.gz</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在可以看到两边命令路径都补全了，再次使用rpm运行一下，结果还是不行。</p>
<h3 id="将rpmrc文件从没问题的环境-210-复制过来" tabindex="-1"><a class="header-anchor" href="#将rpmrc文件从没问题的环境-210-复制过来"><span>将rpmrc文件从没问题的环境（210）复制过来</span></a></h3>
<ul>
<li>在没问题的服务器上执行（210）</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# scp /usr/lib/rpm/rpmrc root@172.16.11.209:/usr/lib/rpm/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>复制过去之后，再次执行rpm命令；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# rpm -ivh pam-1.1.8-23.el7.x86_64.rpm </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">error:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> no</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dbpath</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> has</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> been</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> set</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">error:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cannot</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> open</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Packages</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> database</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /%{_dbpath}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">warning:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pam-1.1.8-23.el7.x86_64.rpm:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Header</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> V3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> RSA/SHA256</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Signature,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> key</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ID</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> f4a80eb5:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> NOKEY</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">error:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> no</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dbpath</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> has</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> been</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> set</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">error:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cannot</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> open</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Packages</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> database</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /%{_dbpath}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>又出现一个报错，我们来继续解决。</p>
<h3 id="出现这个问题-我们可以将没有问题的服务器中的-macros-文件复制过去" tabindex="-1"><a class="header-anchor" href="#出现这个问题-我们可以将没有问题的服务器中的-macros-文件复制过去"><span>出现这个问题：我们可以将没有问题的服务器中的 macros 文件复制过去</span></a></h3>
<ul>
<li>在没问题的服务器上执行（210）</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# scp /usr/lib/rpm/macros root@172.16.11.209:/usr/lib/rpm/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>复制过去之后，再次执行，rpm命令</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# rpm -ivh pam-1.1.8-23.el7.x86_64.rpm </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Preparing...</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">                          ################################# [100%]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	package</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pam-1.1.8-23.el7.x86_64</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> already</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> installed</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# rpm -qa  | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pam</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pam-1.1.8-23.el7.x86_64</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>吼，发现成功了。那么问题就解决了。</p>
<h2 id="问题解决" tabindex="-1"><a class="header-anchor" href="#问题解决"><span>问题解决</span></a></h2>
<blockquote>
<font color=red>再次提醒大家一定要认真，认真，在认真；</font><font color=red>再次提醒大家一定要认真，认真，在认真；</font><font color=red>再次提醒大家一定要认真，认真，在认真；</font></blockquote>
</div></template>


