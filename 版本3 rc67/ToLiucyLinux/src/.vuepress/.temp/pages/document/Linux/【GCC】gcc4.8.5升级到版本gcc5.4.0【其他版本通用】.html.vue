<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">CSDN博客专家</a><br>
  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者</a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主</a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主</a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区</a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言"><span>一、前言</span></a></h2>
<p>  因为Centos7默认的是gcc4.8.5，但是有时候要用到gcc5.4，因为，我来教大家如何从gcc4.8.5升到到gcc5.4.0。<br>
  如果遇到<font color=red size=4>没有网络的情况下</font>，想要安装gcc，只需要一个安装包，就可以安装；<br>
详细请看：👉<a href="https://blog.csdn.net/liu_chen_yang/article/details/123735242" target="_blank" rel="noopener noreferrer">Linux中gcc4.8.5升级到gcc5.4.0用已经编译好的安装包升级（重点是不用编译安装，可以更省时）</a>👈<br>
<br></p>
<blockquote>
<font color=red>需要注意的是 centos系统 和 ubuntu系统的区别</font><ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> centos系统的库放在<code v-pre>/lib64/</code>下；</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> ubuntu系统的库放在<code v-pre>/usr/lib/x86_64-linux-gnu/</code>下。</label></li>
</ul>
</blockquote>
<h2 id="二、gcc-5-4安装包下载" tabindex="-1"><a class="header-anchor" href="#二、gcc-5-4安装包下载"><span>二、GCC 5.4安装包下载</span></a></h2>
<p>gcc安装包下载地址：</p>
<blockquote>
<p>5.4安装包下载地址：<a href="http://ftp.gnu.org/gnu/gcc/gcc-5.4.0/gcc-5.4.0.tar.gz" target="_blank" rel="noopener noreferrer">http://ftp.gnu.org/gnu/gcc/gcc-5.4.0/gcc-5.4.0.tar.gz</a><br>
其他版本安装包下载地址：<a href="http://ftp.gnu.org/gnu/gcc/" target="_blank" rel="noopener noreferrer">http://ftp.gnu.org/gnu/gcc/</a></p>
</blockquote>
<p>可以在服务器上使用wget下载，也可以直接下载上传到服务器上；</p>
<h2 id="三、服务器操作" tabindex="-1"><a class="header-anchor" href="#三、服务器操作"><span>三、服务器操作</span></a></h2>
<h3 id="_3-1-下载所需依赖包" tabindex="-1"><a class="header-anchor" href="#_3-1-下载所需依赖包"><span>3.1 下载所需依赖包</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 安装gcc gcc-c++ glibc-static</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gcc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gcc-c++</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> glibc-static</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 安装bzip2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bzip2</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-解压-gcc-安装包" tabindex="-1"><a class="header-anchor" href="#_3-2-解压-gcc-安装包"><span>3.2 解压 GCC 安装包</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -xvf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gcc-5.4.0.tar.gz</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-3-下载相关的依赖和组件" tabindex="-1"><a class="header-anchor" href="#_3-3-下载相关的依赖和组件"><span>3.3 下载相关的依赖和组件</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#先切换到gcc5.4的目录下</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gcc-5.4.0</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#下载相关的依赖和组件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./contrib/download_prerequisites</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果下载不了连不到gcc官网可以去清华源根据所需下载：<a href="https://mirrors.tuna.tsinghua.edu.cn/gnu/" target="_blank" rel="noopener noreferrer">https://mirrors.tuna.tsinghua.edu.cn/gnu/</a></p>
<h3 id="_3-4-新建一个build目录在gcc5-4目录中用于存放编译文件" tabindex="-1"><a class="header-anchor" href="#_3-4-新建一个build目录在gcc5-4目录中用于存放编译文件"><span>3.4 新建一个build目录在gcc5.4目录中用于存放编译文件</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#新建一个文件夹存放编译的文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> build</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-编译、安装" tabindex="-1"><a class="header-anchor" href="#_3-5-编译、安装"><span>3.5 编译、安装</span></a></h3>
<p><strong><font color=red size=4>编译安装大概是一个小时多，还请耐心等待</font></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#创建完文件夹之后，进入文件夹</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> build</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#进入之后编译，指定目录编译安装；</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">./configure</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -prefix=/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --enable-checking=release</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --enable-languages=c,c++</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --disable-multilib</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#完了之后编译并安装，编译安装大概1个小时左右</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">make</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">make</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果指定安装目录为：<code v-pre>/usr/local/下</code></p>
<p><code v-pre>../configure -prefix=/usr/local/ --enable-checking=release --enable-languages=c,c++ --disable-multilib </code><br>
那么编译安装完就需要手动去软连接或者复制一下libstdc++.so.6.0.21库到/lib64/下去;<br>
<code v-pre>ln -s /usr/local/lib64/libstdc++.so.6.0.21 /lib64/libstdc++.so.6</code></p>
<h3 id="_3-6-查看是否安装成功" tabindex="-1"><a class="header-anchor" href="#_3-6-查看是否安装成功"><span>3.6 查看是否安装成功</span></a></h3>
<p><strong>查看gcc版本：</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">gcc</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --version</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412171024264.png" alt="" loading="lazy"><br>
<strong>查看库：</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">strings</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /lib64/libstdc++.so.6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> GLIBC</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># ubuntu系统查看方式</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">strings</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/lib/x86_64-linux-gnu/libstdc++.so.6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> GLIBC</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412171024546.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>有这些就代表安装成功。</p>
<h2 id="四、编译完成gcc还是显示4-8-5解决方法" tabindex="-1"><a class="header-anchor" href="#四、编译完成gcc还是显示4-8-5解决方法"><span>四、编译完成gcc还是显示4.8.5解决方法</span></a></h2>
<blockquote>
<p>如果gcc -v查看还是4.8.5的话，先<code v-pre>strings /lib64/libstdc++.so.6 | grep GLIBC </code>查看有没有上图这些库”GLIBCXX_3.4.21“，有的话，可以软连接一下gcc就行了，<code v-pre>mv /bin/gcc /bin/gcc.bak</code> &amp;&amp;<code v-pre>ln -s /home/gcc-5.4.0/build/gcc/xgcc /bin/gcc</code>，完成软连接之后就再次<code v-pre>gcc --version、或者gcc -v</code>查看版本就行，这时候就会显示5.4了。</p>
</blockquote>
<p>/home/gcc-5.4.0/build/gcc/xgcc就是你在哪编译的路径。</p>
<h2 id="五、编译完成gcc的动态库还是不对的话解决方法" tabindex="-1"><a class="header-anchor" href="#五、编译完成gcc的动态库还是不对的话解决方法"><span>五、编译完成gcc的动态库还是不对的话解决方法</span></a></h2>
<blockquote>
<p>如果编译完成遇到了gcc的动态库还是不对的话，就比如：<br>
我编译了一个gcc5.4，编译完之后查动态库应该会看到<code v-pre>GLIBCXX 3.4.21</code>，但显示的还是<code v-pre>GLIBCXX_3.4.19</code>，那么这个时候呢，我们可以查询：<code v-pre>libstdc++.so.6*</code>，一般都是在编译的build里面；</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">find</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> libstdc++.so.6</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">*</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412171024050.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>然后我们可以看到<code v-pre>gcc5.4</code>的对应版本是<code v-pre>libstdc++.so.6.0.21</code>，这时候我们在查询一下<code v-pre>libstdc++.so.6.0.21</code></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">find</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> libstdc++.so.6.0.21</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412171024656.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>然后将这个路径的<code v-pre>libstdc++.so.6.0.21</code>复制到/lib64/改名为<code v-pre>libstdc++.so.6</code>，或者是软连接过去；（二选一）</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 先进行备份</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /lib64/libstdc++.so.6</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /lib64/libstdc++.so.6-4.8.5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 复制过去</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -ar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /application/gcc-5.4.0/build/stage1-x86_64-unknown-linux-gnu/libstdc++-v3/src/.libs/libstdc++.so.6.0.21</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /lib64/libstdc++.so.6</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 软连接过去</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ln</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /application/gcc-5.4.0/build/stage1-x86_64-unknown-linux-gnu/libstdc++-v3/src/.libs/libstdc++.so.6.0.21</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /lib64/libstdc++.so.6</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">二选一</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>放到lib64下之后我们可以通过<code v-pre>strings /lib64/libstdc++.so.6 | grep GLIBC</code>查看。<br>
这样就可以看到<code v-pre>GLIBCXX 3.4.21</code>了。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412171024350.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="六、相关文章" tabindex="-1"><a class="header-anchor" href="#六、相关文章"><span>六、相关文章</span></a></h2>
<table>
<thead>
<tr>
<th>文章标题</th>
<th>文章链接</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://blog.csdn.net/liu_chen_yang/article/details/123735242" target="_blank" rel="noopener noreferrer">Linux中gcc4.8.5升级到gcc5.4.0用已经编译好的安装包升级（重点是不用编译安装，可以更省时）</a></td>
<td><a href="https://blog.csdn.net/liu_chen_yang/article/details/123735242" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/liu_chen_yang/article/details/123735242</a></td>
</tr>
<tr>
<td><a href="https://blog.csdn.net/liu_chen_yang/article/details/123711779" target="_blank" rel="noopener noreferrer">Centos7 gcc4.8.5升级到版本gcc5.4.0</a></td>
<td><a href="https://blog.csdn.net/liu_chen_yang/article/details/123711779" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/liu_chen_yang/article/details/123711779</a></td>
</tr>
</tbody>
</table>
</div></template>


