<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言：</span></a></h2>
<p>  在Linux系统中，一般都自带的有Python，不过Linux下自带Python大都是 2.7.5版本的，如果我们想要使用python3的话，最好是再重新装一个Python3的环境，让python2和python3共存。</p>
<pre><code>特别注意：最好不要删除自带的python2.7.8，因为可能有其他地方依赖python2，直接删掉的可能会导致其他的问题。
</code></pre>
<br>
<h3 id="下载python3-6-8的安装包" tabindex="-1"><a class="header-anchor" href="#下载python3-6-8的安装包"><span>下载python3.6.8的安装包</span></a></h3>
<blockquote>
<p>我们要安装的是 Python 3.6.8，可以直接下载好上传到 Linux服务器中，也可以在Linux中通过 wget 命令来下载python3.6.8的安装包。</p>
</blockquote>
<p>python各版本下载地址：<a href="https://www.python.org/ftp/python/" target="_blank" rel="noopener noreferrer">https://www.python.org/ftp/python/</a></p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/936e3362a6764650971c7135b71290d6.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/0f080328d5014a5ab236c7f9a8cf9830.png" alt="在这里插入图片描述" loading="lazy"></p>
<p><strong>链接下载：</strong></p>
<blockquote>
<p>在Linux下任意位置新建一个目录（python3），用于存放下载的安装包，接着进入python3目录下，再通过 wget 命令下载。<br></p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#创建一个python3目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /home/python3</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#下载python3.6.8安装包</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://www.python.org/ftp/python/3.6.8/Python-3.6.8.tgz</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下载安装包命令：wget <a href="https://www.python.org/ftp/python/3.6.8/Python-3.6.8.tgz" target="_blank" rel="noopener noreferrer">https://www.python.org/ftp/python/3.6.8/Python-3.6.8.tgz</a></p>
<br>
<p>等待下载完成⚪⚪⚪⚪⚪⚪</p>
<br>
<h3 id="解压python3-6-8的安装包" tabindex="-1"><a class="header-anchor" href="#解压python3-6-8的安装包"><span>解压python3.6.8的安装包</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#下载完成之后，将安装包解压到当前目录：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> xvf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Python-3.6.8.tgz</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>解压完成后，python3的目录下会出现一个python3.6.8的目录：<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/1dfef90b3bb14771b1f4d305cbe0f97d.png" alt="在这里插入图片描述" loading="lazy"></p>
<br>
<h3 id="安装依赖包" tabindex="-1"><a class="header-anchor" href="#安装依赖包"><span>安装依赖包</span></a></h3>
<p>解压完成之后，就是安装编译时所需要的依赖包，避免中途出错；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> unzip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> net-tools</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> wget</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bzip2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> zlib-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bzip2-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> openssl-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ncurses-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sqlite-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> readline-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tk-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gdbm-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> db4-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> libpcap-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> xz-devel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> libglvnd-glx</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gcc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gcc-c++</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><br>
<p>等待下载安装完成⚪⚪⚪⚪⚪⚪</p>
<br>
<h3 id="指定python3-6-8安装路径" tabindex="-1"><a class="header-anchor" href="#指定python3-6-8安装路径"><span>指定python3.6.8安装路径</span></a></h3>
<p>我们在这里最好指定一下python3的安装路径，这样当我们想要卸载python3.6.8的时候，卸载完之后，在删除这个目录，就可以彻底的删除了。就比如要删除先卸载,yum remove python3.6.8 ,肯定会残留一些删除不了的，这时候就有必要直接删除那个指定的安装目录了。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#先进入Python3目录下的Python-3.6.8目录：</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Python-3.6.8</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#指定python3安装路径：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./configure</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --prefix=/usr/local/python3.6</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>
<h3 id="编译安装python3-6-8" tabindex="-1"><a class="header-anchor" href="#编译安装python3-6-8"><span>编译安装python3.6.8</span></a></h3>
<p>  在Python-3.6.8目录下安装，安装时分2步：第一步使用命令 make 先编译；第二步使用命令 make install 进行安装。安装时间可能有点长，请多花点耐心等待，大概就是1个小时或者3、40分钟左右。<br>
  如果中途不想看的话，可以直接编译安装一起跑，直接让他跑完。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#编译+安装</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">make</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">make</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><br>
<p>等待编译安装完成⚪⚪⚪⚪⚪⚪</p>
<br>
<h3 id="添加软链接" tabindex="-1"><a class="header-anchor" href="#添加软链接"><span>添加软链接</span></a></h3>
<p>安装完成后，我们需要设置一下软链接，软链接可以简单理解为windows下的桌面快捷方式。</p>
<p>系统自带的 python2 中，在终端输入命令 python ，最终是指向 python2 。我们的想法是，如果使用新安装的python3.6.8版本，在终端直接输入 python3 就可以进行其交互界面。</p>
<p>我们先退出到 python3目录，发现安装完python3之后，其下面多了很多文件，我们进入到 bin 目录下可以看到python3的程序。</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/7d7e971db0b44974b0221a09eeaf808c.png" alt="在这里插入图片描述" loading="lazy"><br>
在这里，我们设置软链接，直接让新安装的python3.6指向给 /usr/bin/python3 ，让 pip3 指向给/usr/bin/pip3。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#添加python3软链接：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ln</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/python3.6/bin/python3.6</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/bin/python3</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#添加pip3软链接：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ln</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/python3.6/bin/pip3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/bin/pip3</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>
<h3 id="查看是否安装成功" tabindex="-1"><a class="header-anchor" href="#查看是否安装成功"><span>查看是否安装成功</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">python3</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --version</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/2a9501a390d9470b98a558d6cd196a53.png" alt="在这里插入图片描述" loading="lazy"><br>
就可以证明安装成功了，也可以进入python交互界面</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">python3</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/459fd612b5344594b30ad2db173dea75.png" alt="在这里插入图片描述" loading="lazy"><br>
这里我们也可以看到已经安装成功，还可以输入python，然后tab、tab两下，看看有没有python3<br>
<img src="https://img-blog.csdnimg.cn/032f87b57dbf41b3a0d920be6ead292d.png" alt="在这里插入图片描述" loading="lazy"><br>
看到有python3也可以说明已经安装成功。</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/d6be6717b3d34a8f9c2dff3233642d64.png" alt="在这里插入图片描述" loading="lazy"><br>
pip3也安装完成；</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<h3 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章"><span>相关文章</span></a></h3>
<blockquote>
<p><a href="https://blog.csdn.net/liu_chen_yang/article/details/124475543" target="_blank" rel="noopener noreferrer">centos安装python3/pip3项目所需的第三方模块（在线安装&amp;&amp;离线安装）</a></p>
</blockquote>
</div></template>


