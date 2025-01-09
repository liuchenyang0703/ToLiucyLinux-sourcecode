<template><div><p>@[toc]</p>
<h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1>
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
<h2 id="安装gcc-c" tabindex="-1"><a class="header-anchor" href="#安装gcc-c" aria-hidden="true">#</a> 安装gcc c++</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc gcc-c++
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装bzip2" tabindex="-1"><a class="header-anchor" href="#安装bzip2" aria-hidden="true">#</a> 安装bzip2</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">bzip2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="下载、解压安装包" tabindex="-1"><a class="header-anchor" href="#下载、解压安装包" aria-hidden="true">#</a> 下载、解压安装包</h2>
<p>下载有两种下载：一种是直接在网页上下载，在上传到linux中；另一种就是在linux中wget地址下载。</p>
<p>找好自己要存放安装包的目录，我的这个就在/home/目录下</p>
<br>
<h3 id="安装包下载地址" tabindex="-1"><a class="header-anchor" href="#安装包下载地址" aria-hidden="true">#</a> 安装包下载地址：</h3>
<blockquote>
<p>5.4安装包下载地址：<a href="http://ftp.gnu.org/gnu/gcc/gcc-5.4.0/gcc-5.4.0.tar.gz" target="_blank" rel="noopener noreferrer">http://ftp.gnu.org/gnu/gcc/gcc-5.4.0/gcc-5.4.0.tar.gz<ExternalLinkIcon/></a><br>
其他版本安装包下载地址：<a href="http://ftp.gnu.org/gnu/gcc/" target="_blank" rel="noopener noreferrer">http://ftp.gnu.org/gnu/gcc/<ExternalLinkIcon/></a></p>
</blockquote>
<br>
<h3 id="linux中下载" tabindex="-1"><a class="header-anchor" href="#linux中下载" aria-hidden="true">#</a> linux中下载：</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#切换到/home/目录下</span>
<span class="token builtin class-name">cd</span> /home/
<span class="token comment">#下载gcc.5.4的包</span>
<span class="token function">wget</span> http://ftp.gnu.org/gnu/gcc/gcc-5.4.0/gcc-5.4.0.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>
<h3 id="解压安装包" tabindex="-1"><a class="header-anchor" href="#解压安装包" aria-hidden="true">#</a> 解压安装包：</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> gcc-5.4.0.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br>
<h2 id="下载相关的依赖和组件" tabindex="-1"><a class="header-anchor" href="#下载相关的依赖和组件" aria-hidden="true">#</a> 下载相关的依赖和组件</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#先切换到gcc5.4的目录下</span>
<span class="token builtin class-name">cd</span> gcc-5.4.0
<span class="token comment">#下载相关的依赖和组件</span>
./contrib/download_prerequisites
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>
<h2 id="新建一个文件夹存放编译的文件" tabindex="-1"><a class="header-anchor" href="#新建一个文件夹存放编译的文件" aria-hidden="true">#</a> 新建一个文件夹存放编译的文件</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#新建一个文件夹存放编译的文件</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br>
<h2 id="编译、安装" tabindex="-1"><a class="header-anchor" href="#编译、安装" aria-hidden="true">#</a> 编译、安装</h2>
<br>
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
<br>
<h2 id="查看是否安装成功" tabindex="-1"><a class="header-anchor" href="#查看是否安装成功" aria-hidden="true">#</a> 查看是否安装成功</h2>
<p><strong>查看gcc版本：</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>gcc <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/2961a7d53caf46d0a4d9c9e324dc104b.png" alt="在这里插入图片描述" loading="lazy"><br>
<strong>查看库：</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>strings /lib64/libstdc++.so.6 <span class="token operator">|</span> <span class="token function">grep</span> GLIBC

<span class="token comment"># ubuntu系统查看方式</span>
strings /usr/lib/x86_64-linux-gnu/libstdc++.so.6 <span class="token operator">|</span> <span class="token function">grep</span> GLIBC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/efb8d88542bc4999ab6a8a1257e6fc75.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>有这些就代表安装成功。</p>
<h1 id="编译完成gcc还是显示4-8-5解决方法" tabindex="-1"><a class="header-anchor" href="#编译完成gcc还是显示4-8-5解决方法" aria-hidden="true">#</a> 编译完成gcc还是显示4.8.5解决方法</h1>
<blockquote>
<p>如果gcc -v查看还是4.8.5的话，先<code v-pre>strings /lib64/libstdc++.so.6 | grep GLIBC </code>查看有没有上图这些库”GLIBCXX_3.4.21“，有的话，可以软连接一下gcc就行了，<code v-pre>mv /bin/gcc /bin/gcc.bak</code> &amp;&amp;<code v-pre>ln -s /home/gcc-5.4.0/build/gcc/xgcc /bin/gcc</code>，完成软连接之后就再次<code v-pre>gcc --version、或者gcc -v</code>查看版本就行，这时候就会显示5.4了。</p>
</blockquote>
<p>/home/gcc-5.4.0/build/gcc/xgcc就是你在哪编译的路径。</p>
<h1 id="编译完成gcc的动态库还是不对的话解决方法" tabindex="-1"><a class="header-anchor" href="#编译完成gcc的动态库还是不对的话解决方法" aria-hidden="true">#</a> 编译完成gcc的动态库还是不对的话解决方法</h1>
<blockquote>
<p>如果编译完成遇到了gcc的动态库还是不对的话，就比如：<br>
我编译了一个gcc5.4，编译完之后查动态库应该会看到<code v-pre>GLIBCXX 3.4.21</code>，但显示的还是<code v-pre>GLIBCXX_3.4.19</code>，那么这个时候呢，我们可以查询：<code v-pre>libstdc++.so.6*</code>，一般都是在编译的build里面；</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">find</span> / <span class="token parameter variable">-name</span> libstdc++.so.6*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/direct/4783e624eadf4c5891de65f5a8a71de4.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>然后我们可以看到<code v-pre>gcc5.4</code>的对应版本是<code v-pre>libstdc++.so.6.0.21</code>，这时候我们在查询一下<code v-pre>libstdc++.so.6.0.21</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">find</span> / <span class="token parameter variable">-name</span> libstdc++.so.6.0.21
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/direct/34192bc5715c4d0b857ff4ad56962726.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
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
<figure><img src="https://img-blog.csdnimg.cn/direct/86db1ad1dc38408d81d1cc797beff17a.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章" aria-hidden="true">#</a> 相关文章</h1>
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


