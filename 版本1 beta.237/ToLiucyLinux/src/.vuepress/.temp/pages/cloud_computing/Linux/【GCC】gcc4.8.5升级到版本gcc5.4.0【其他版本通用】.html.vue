<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">CSDN博客专家<ExternalLinkIcon/></a><br>
  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<h1 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言" aria-hidden="true">#</a> 一、前言</h1>
<p>  因为Centos7默认的是gcc4.8.5，但是有时候要用到gcc5.4，因为，我来教大家如何从gcc4.8.5升到到gcc5.4.0。<br>
  如果遇到<font color=red size=4>没有网络的情况下</font>，想要安装gcc，只需要一个安装包，就可以安装；<br>
详细请看：👉<a href="https://blog.csdn.net/liu_chen_yang/article/details/123735242" target="_blank" rel="noopener noreferrer">Linux中gcc4.8.5升级到gcc5.4.0用已经编译好的安装包升级（重点是不用编译安装，可以更省时）<ExternalLinkIcon/></a>👈<br>
<br></p>
<blockquote>
<font color=red>需要注意的是 centos系统 和 ubuntu系统的区别</font><ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> centos系统的库放在<code v-pre>/lib64/</code>下；</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> ubuntu系统的库放在<code v-pre>/usr/lib/x86_64-linux-gnu/</code>下。</label></li>
</ul>
</blockquote>
<h1 id="二、gcc-5-4安装包下载" tabindex="-1"><a class="header-anchor" href="#二、gcc-5-4安装包下载" aria-hidden="true">#</a> 二、GCC 5.4安装包下载</h1>
<p>gcc安装包下载地址：</p>
<blockquote>
<p>5.4安装包下载地址：<a href="http://ftp.gnu.org/gnu/gcc/gcc-5.4.0/gcc-5.4.0.tar.gz" target="_blank" rel="noopener noreferrer">http://ftp.gnu.org/gnu/gcc/gcc-5.4.0/gcc-5.4.0.tar.gz<ExternalLinkIcon/></a><br>
其他版本安装包下载地址：<a href="http://ftp.gnu.org/gnu/gcc/" target="_blank" rel="noopener noreferrer">http://ftp.gnu.org/gnu/gcc/<ExternalLinkIcon/></a></p>
</blockquote>
<p>可以在服务器上使用wget下载，也可以直接下载上传到服务器上；</p>
<h1 id="三、服务器操作" tabindex="-1"><a class="header-anchor" href="#三、服务器操作" aria-hidden="true">#</a> 三、服务器操作</h1>
<h2 id="_3-1-下载所需依赖包" tabindex="-1"><a class="header-anchor" href="#_3-1-下载所需依赖包" aria-hidden="true">#</a> 3.1 下载所需依赖包</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 安装gcc gcc-c++ glibc-static</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc gcc-c++ glibc-static
<span class="token comment"># 安装bzip2</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">bzip2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-2-解压-gcc-安装包" tabindex="-1"><a class="header-anchor" href="#_3-2-解压-gcc-安装包" aria-hidden="true">#</a> 3.2 解压 GCC 安装包</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> gcc-5.4.0.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-3-下载相关的依赖和组件" tabindex="-1"><a class="header-anchor" href="#_3-3-下载相关的依赖和组件" aria-hidden="true">#</a> 3.3 下载相关的依赖和组件</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#先切换到gcc5.4的目录下</span>
<span class="token builtin class-name">cd</span> gcc-5.4.0
<span class="token comment">#下载相关的依赖和组件</span>
./contrib/download_prerequisites
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果下载不了连不到gcc官网可以去清华源根据所需下载：<a href="https://mirrors.tuna.tsinghua.edu.cn/gnu/" target="_blank" rel="noopener noreferrer">https://mirrors.tuna.tsinghua.edu.cn/gnu/<ExternalLinkIcon/></a></p>
<h2 id="_3-4-新建一个build目录在gcc5-4目录中用于存放编译文件" tabindex="-1"><a class="header-anchor" href="#_3-4-新建一个build目录在gcc5-4目录中用于存放编译文件" aria-hidden="true">#</a> 3.4 新建一个build目录在gcc5.4目录中用于存放编译文件</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#新建一个文件夹存放编译的文件</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-5-编译、安装" tabindex="-1"><a class="header-anchor" href="#_3-5-编译、安装" aria-hidden="true">#</a> 3.5 编译、安装</h2>
<p><strong><font color=red size=4>编译安装大概是一个小时多，还请耐心等待</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#创建完文件夹之后，进入文件夹</span>
<span class="token builtin class-name">cd</span> build
<span class="token comment">#进入之后编译，指定目录编译安装；</span>
<span class="token punctuation">..</span>/configure <span class="token parameter variable">-prefix</span><span class="token operator">=</span>/ --enable-checking<span class="token operator">=</span>release --enable-languages<span class="token operator">=</span>c,c++ --disable-multilib 
<span class="token comment">#完了之后编译并安装，编译安装大概1个小时左右</span>
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果指定安装目录为：<code v-pre>/usr/local/下</code></p>
<p><code v-pre>../configure -prefix=/usr/local/ --enable-checking=release --enable-languages=c,c++ --disable-multilib </code><br>
那么编译安装完就需要手动去软连接或者复制一下libstdc++.so.6.0.21库到/lib64/下去;<br>
<code v-pre>ln -s /usr/local/lib64/libstdc++.so.6.0.21 /lib64/libstdc++.so.6</code></p>
<h2 id="_3-6-查看是否安装成功" tabindex="-1"><a class="header-anchor" href="#_3-6-查看是否安装成功" aria-hidden="true">#</a> 3.6 查看是否安装成功</h2>
<p><strong>查看gcc版本：</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>gcc <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://i-blog.csdnimg.cn/blog_migrate/4cbea1b46e0f61b380d02c7964b434fc.png" alt="在这里插入图片描述" loading="lazy"><br>
<strong>查看库：</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>strings /lib64/libstdc++.so.6 <span class="token operator">|</span> <span class="token function">grep</span> GLIBC

<span class="token comment"># ubuntu系统查看方式</span>
strings /usr/lib/x86_64-linux-gnu/libstdc++.so.6 <span class="token operator">|</span> <span class="token function">grep</span> GLIBC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i-blog.csdnimg.cn/blog_migrate/9b6c3be8339f3a3d96cd199942532795.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>有这些就代表安装成功。</p>
<h1 id="四、编译完成gcc还是显示4-8-5解决方法" tabindex="-1"><a class="header-anchor" href="#四、编译完成gcc还是显示4-8-5解决方法" aria-hidden="true">#</a> 四、编译完成gcc还是显示4.8.5解决方法</h1>
<blockquote>
<p>如果gcc -v查看还是4.8.5的话，先<code v-pre>strings /lib64/libstdc++.so.6 | grep GLIBC </code>查看有没有上图这些库”GLIBCXX_3.4.21“，有的话，可以软连接一下gcc就行了，<code v-pre>mv /bin/gcc /bin/gcc.bak</code> &amp;&amp;<code v-pre>ln -s /home/gcc-5.4.0/build/gcc/xgcc /bin/gcc</code>，完成软连接之后就再次<code v-pre>gcc --version、或者gcc -v</code>查看版本就行，这时候就会显示5.4了。</p>
</blockquote>
<p>/home/gcc-5.4.0/build/gcc/xgcc就是你在哪编译的路径。</p>
<h1 id="五、编译完成gcc的动态库还是不对的话解决方法" tabindex="-1"><a class="header-anchor" href="#五、编译完成gcc的动态库还是不对的话解决方法" aria-hidden="true">#</a> 五、编译完成gcc的动态库还是不对的话解决方法</h1>
<blockquote>
<p>如果编译完成遇到了gcc的动态库还是不对的话，就比如：<br>
我编译了一个gcc5.4，编译完之后查动态库应该会看到<code v-pre>GLIBCXX 3.4.21</code>，但显示的还是<code v-pre>GLIBCXX_3.4.19</code>，那么这个时候呢，我们可以查询：<code v-pre>libstdc++.so.6*</code>，一般都是在编译的build里面；</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">find</span> / <span class="token parameter variable">-name</span> libstdc++.so.6*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://i-blog.csdnimg.cn/blog_migrate/84028be5d58479bff3ab95d58520afc6.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>然后我们可以看到<code v-pre>gcc5.4</code>的对应版本是<code v-pre>libstdc++.so.6.0.21</code>，这时候我们在查询一下<code v-pre>libstdc++.so.6.0.21</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">find</span> / <span class="token parameter variable">-name</span> libstdc++.so.6.0.21
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://i-blog.csdnimg.cn/blog_migrate/105dea3d40ac8bfafe4a24c557e28869.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>然后将这个路径的<code v-pre>libstdc++.so.6.0.21</code>复制到/lib64/改名为<code v-pre>libstdc++.so.6</code>，或者是软连接过去；（二选一）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 先进行备份</span>
<span class="token function">mv</span> /lib64/libstdc++.so.6 /lib64/libstdc++.so.6-4.8.5

<span class="token comment"># 复制过去</span>
<span class="token function">cp</span> <span class="token parameter variable">-ar</span> /application/gcc-5.4.0/build/stage1-x86_64-unknown-linux-gnu/libstdc++-v3/src/.libs/libstdc++.so.6.0.21 /lib64/libstdc++.so.6

<span class="token comment"># 软连接过去</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /application/gcc-5.4.0/build/stage1-x86_64-unknown-linux-gnu/libstdc++-v3/src/.libs/libstdc++.so.6.0.21 /lib64/libstdc++.so.6

二选一
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>放到lib64下之后我们可以通过<code v-pre>strings /lib64/libstdc++.so.6 | grep GLIBC</code>查看。<br>
这样就可以看到<code v-pre>GLIBCXX 3.4.21</code>了。</p>
<figure><img src="https://i-blog.csdnimg.cn/blog_migrate/880d14731dc9c8507a5fb27d476e9a94.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="六、相关文章" tabindex="-1"><a class="header-anchor" href="#六、相关文章" aria-hidden="true">#</a> 六、相关文章</h1>
<table>
<thead>
<tr>
<th>文章标题</th>
<th>文章链接</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://blog.csdn.net/liu_chen_yang/article/details/123735242" target="_blank" rel="noopener noreferrer">Linux中gcc4.8.5升级到gcc5.4.0用已经编译好的安装包升级（重点是不用编译安装，可以更省时）<ExternalLinkIcon/></a></td>
<td><a href="https://blog.csdn.net/liu_chen_yang/article/details/123735242" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/liu_chen_yang/article/details/123735242<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://blog.csdn.net/liu_chen_yang/article/details/123711779" target="_blank" rel="noopener noreferrer">Centos7 gcc4.8.5升级到版本gcc5.4.0<ExternalLinkIcon/></a></td>
<td><a href="https://blog.csdn.net/liu_chen_yang/article/details/123711779" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/liu_chen_yang/article/details/123711779<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
</div></template>


