<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>  如有遇到<font color=red size=4>没有网络的情况下</font>可以选择用这种方法来做，前提是要先下载好这个包。<br>
还有一个是可以在<font color=blue size=4>有网的情况下</font>做的，就是编译安装；<br>
链接地址：👉<a href="https://blog.csdn.net/liu_chen_yang/article/details/123711779?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Centos7 gcc4.8.5升级到版本gcc5.4.0<ExternalLinkIcon/></a>👈</p>
<blockquote>
<font color=red>需要注意的是 centos系统 和 ubuntu系统的区别</font><ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> centos系统的库放在<code v-pre>/lib64/</code>下；</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> ubuntu系统的库放在<code v-pre>/usr/lib/x86_64-linux-gnu/</code>下。</label></li>
</ul>
</blockquote>
<h2 id="下载安装包" tabindex="-1"><a class="header-anchor" href="#下载安装包" aria-hidden="true">#</a> 下载安装包</h2>
<p><strong>网盘地址：</strong><br>
链接：<a href="https://pan.baidu.com/s/1jSV9Dzy3VvIFyh8qZ8sVpA" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1jSV9Dzy3VvIFyh8qZ8sVpA<ExternalLinkIcon/></a><br>
提取码：aei1</p>
<h2 id="解压安装包" tabindex="-1"><a class="header-anchor" href="#解压安装包" aria-hidden="true">#</a> 解压安装包</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">unzip</span> gcc-5.4.0-编译好的.zip
<span class="token function">tar</span> xf gcc-5.4.0-▒р╥ы║├╡─.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>解压完会看到gcc-5.4.0这个目录<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412200948747.png" alt="" loading="lazy"></p>
<h2 id="软连接gcc库" tabindex="-1"><a class="header-anchor" href="#软连接gcc库" aria-hidden="true">#</a> 软连接gcc库</h2>
<font color=red>注意！！！
软连接一定要使用绝对路径，否侧会有问题；</font>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#find查找一下libstdc++.so.6.0.21的绝对路径，一定要使用绝对路径来软连接，否侧会有问题；</span>
<span class="token function">find</span> / <span class="token parameter variable">-name</span> libstdc++.so.6.0.21
<span class="token comment">#备份一下原来的libstdc++.so.6</span>
<span class="token function">mv</span> /lib64/libstdc++.so.6 /lib64/libstdc++.so.6-bak
<span class="token comment">#软连接库,查找到有三个随便选那个都可以，我选的第二个，根据你的目录来定，软连接源地址</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /home/lcy/gcc-5.4.0/build/stage1-x86_64-unknown-linux-gnu/libstdc++-v3/src/.libs/libstdc++.so.6.0.21 /lib64/libstdc++.so.6
<span class="token comment">#软连接完成之后查找一下这些库</span>
strings /lib64/libstdc++.so.6 <span class="token operator">|</span> <span class="token function">grep</span> GLIBC
<span class="token comment">#能找到这些库就是成功了。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412200948161.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="软连接gcc版本" tabindex="-1"><a class="header-anchor" href="#软连接gcc版本" aria-hidden="true">#</a> 软连接gcc版本</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#备份gcc4.8.5</span>
<span class="token function">mv</span> /bin/gcc /bin/gcc-bak

<span class="token comment">#切换到gcc-5.4.0/build/gcc/目录下，根据自己的目录切换</span>
<span class="token builtin class-name">cd</span> /home/lcy/gcc-5.4.0/build/gcc

<span class="token comment">#添加执行权限</span>
<span class="token function">chmod</span> <span class="token number">775</span> *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412200948613.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#我们可以看到有一个xg++和xgcc，软连接这两个任意一个就可以了；还是要注意自己的软连接源路径</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /home/lcy/gcc-5.4.0/build/gcc/xgcc /bin/gcc
<span class="token comment">#软连接完成之后就可以看到版本了</span>
gcc <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412200948428.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


