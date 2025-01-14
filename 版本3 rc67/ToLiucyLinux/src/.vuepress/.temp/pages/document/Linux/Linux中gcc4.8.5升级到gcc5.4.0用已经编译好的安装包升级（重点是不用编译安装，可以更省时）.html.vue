<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<p>  如有遇到<font color=red size=4>没有网络的情况下</font>可以选择用这种方法来做，前提是要先下载好这个包。<br>
还有一个是可以在<font color=blue size=4>有网的情况下</font>做的，就是编译安装；<br>
链接地址：👉<a href="https://blog.csdn.net/liu_chen_yang/article/details/123711779?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Centos7 gcc4.8.5升级到版本gcc5.4.0</a>👈</p>
<blockquote>
<font color=red>需要注意的是 centos系统 和 ubuntu系统的区别</font><ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> centos系统的库放在<code v-pre>/lib64/</code>下；</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> ubuntu系统的库放在<code v-pre>/usr/lib/x86_64-linux-gnu/</code>下。</label></li>
</ul>
</blockquote>
<h2 id="下载安装包" tabindex="-1"><a class="header-anchor" href="#下载安装包"><span>下载安装包</span></a></h2>
<p><strong>网盘地址：</strong><br>
链接：<a href="https://pan.baidu.com/s/1jSV9Dzy3VvIFyh8qZ8sVpA" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1jSV9Dzy3VvIFyh8qZ8sVpA</a><br>
提取码：aei1</p>
<h2 id="解压安装包" tabindex="-1"><a class="header-anchor" href="#解压安装包"><span>解压安装包</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">unzip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gcc-5.4.0-编译好的.zip</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> xf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gcc-5.4.0-▒р╥ы║├╡─.tar</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>解压完会看到gcc-5.4.0这个目录<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412200948747.png" alt="" loading="lazy"></p>
<h2 id="软连接gcc库" tabindex="-1"><a class="header-anchor" href="#软连接gcc库"><span>软连接gcc库</span></a></h2>
<font color=red>注意！！！
软连接一定要使用绝对路径，否侧会有问题；</font>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#find查找一下libstdc++.so.6.0.21的绝对路径，一定要使用绝对路径来软连接，否侧会有问题；</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">find</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> libstdc++.so.6.0.21</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#备份一下原来的libstdc++.so.6</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /lib64/libstdc++.so.6</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /lib64/libstdc++.so.6-bak</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#软连接库,查找到有三个随便选那个都可以，我选的第二个，根据你的目录来定，软连接源地址</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ln</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /home/lcy/gcc-5.4.0/build/stage1-x86_64-unknown-linux-gnu/libstdc++-v3/src/.libs/libstdc++.so.6.0.21</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /lib64/libstdc++.so.6</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#软连接完成之后查找一下这些库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">strings</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /lib64/libstdc++.so.6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> GLIBC</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#能找到这些库就是成功了。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412200948161.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="软连接gcc版本" tabindex="-1"><a class="header-anchor" href="#软连接gcc版本"><span>软连接gcc版本</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#备份gcc4.8.5</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /bin/gcc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /bin/gcc-bak</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#切换到gcc-5.4.0/build/gcc/目录下，根据自己的目录切换</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /home/lcy/gcc-5.4.0/build/gcc</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#添加执行权限</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">chmod</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 775</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> *</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412200948613.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#我们可以看到有一个xg++和xgcc，软连接这两个任意一个就可以了；还是要注意自己的软连接源路径</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ln</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /home/lcy/gcc-5.4.0/build/gcc/xgcc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /bin/gcc</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#软连接完成之后就可以看到版本了</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">gcc</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412200948428.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


