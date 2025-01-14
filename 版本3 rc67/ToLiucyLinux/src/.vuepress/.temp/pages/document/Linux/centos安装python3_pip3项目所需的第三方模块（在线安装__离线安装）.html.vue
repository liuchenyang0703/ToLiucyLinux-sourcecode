<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<p>  因为项目要求，和一般部署服务的时候需要一些python的模块，然后并没有外网，所以，只好下载一些需要的python模块；在这之前查阅了很多文章，但都是直接安装的，找这种离线包安装的特别困难，所以，好不容易找到了几篇，我就把这个写成一篇文章，供大家观看，感谢！</p>
<h3 id="安装python3和pip3" tabindex="-1"><a class="header-anchor" href="#安装python3和pip3"><span>安装python3和pip3</span></a></h3>
<br/>
<p><strong>详细的安装教程请参考链接：<a href="https://blog.csdn.net/liu_chen_yang/article/details/123680594" target="_blank" rel="noopener noreferrer">Linux下安装Python3.6.8（超级详细）</a></strong></p>
<hr>
<h3 id="升级-更新pip3" tabindex="-1"><a class="header-anchor" href="#升级-更新pip3"><span>升级/更新pip3</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pip3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --upgrade</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pip</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="安装项目所需的模块" tabindex="-1"><a class="header-anchor" href="#安装项目所需的模块"><span>安装项目所需的模块</span></a></h3>
<br>
<h4 id="在线安装所需模块" tabindex="-1"><a class="header-anchor" href="#在线安装所需模块"><span>在线安装所需模块</span></a></h4>
<p><strong><font color=teal>格式：</font></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pip3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 所需模块的名字</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong><font color=teal>实例一：</font></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pip3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> numpy</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong><font color=teal>实例二（指定版本）：</font></strong></p>
<blockquote>
<p>模块名==指定版本</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pip3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> numpy==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1.19.5</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><br>
<h4 id="离线安装-下载所需模块和离线包" tabindex="-1"><a class="header-anchor" href="#离线安装-下载所需模块和离线包"><span>离线安装/下载所需模块和离线包</span></a></h4>
<h5 id="_1、单个模块下载-指定路径" tabindex="-1"><a class="header-anchor" href="#_1、单个模块下载-指定路径"><span>①、单个模块下载&amp;&amp;指定路径</span></a></h5>
<p><strong><font color=teal>格式：</font></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pip3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> download</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 模块名</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 下载的包的存储路径</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong><font color=teal>实例一：</font></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pip3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> download</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> numpy</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/packages/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/065a65e2d7f04562942252f528847f5e.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/a8ddc3995f354fc89ba0ec158ee7cc8e.png" alt="在这里插入图片描述" loading="lazy"></p>
<ul>
<li>默认就是最新版本</li>
</ul>
<p><strong><font color=teal>实例二（指定版本）：</font></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pip3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> download</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> numpy==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1.18.5</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/packages/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/3fdb968ef6684caab60a51fee70dae61.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h5 id="_2、批量下载模块-指定目录" tabindex="-1"><a class="header-anchor" href="#_2、批量下载模块-指定目录"><span>②、批量下载模块&amp;&amp;指定目录</span></a></h5>
<font size=3>**创建文件**</font><p>批量下载模块，首先要创建一个文件（文件名任意）</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#创建一个文件并进入</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> python-pack</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#文件内可以写你想要下载的模块名，我的就下载这些；</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">chardet</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">joblib</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">numpy</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ocrd_fork_pylsd</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">PyMuPDF</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/25ec97854ef54f54bea6bddadc0a23ea.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<font size=3>**批量下载**</font><p><strong><font color=teal>格式：</font></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pip3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> download</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 批量下载模块的文件名</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 指定下载的路径</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong><font color=teal>实例：</font></strong></p>
<p><strong><font color=red>注意自己的批量下载模块的文件的路径，也要写正确.</font></strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pip3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> download</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> python-pack</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/packages/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>第一次下载和我这个图片可能有一些不一样，因为我这是测试的时候已经下载过了，删除又重新下载的（会有缓存），所以，与第一次下载过程是有一些差别的，不过，没有任何影响。</p>
</blockquote>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/9d5a1ab710eb4c1baf0db2158ac551a4.png" alt="在这里插入图片描述" loading="lazy"><br>
最后我们就可以看到，指定的一些模块已经下载成离线包了，就可以下载到本地拿去用了。<br>
要是想下载指定版本的，和上面的一样，只不过是在文本里修改就好了；例如：numpy==1.18.5。</p>
<h2 id="附加" tabindex="-1"><a class="header-anchor" href="#附加"><span>附加</span></a></h2>
<p>如果安装慢，可以换成国内源：</p>
<p>方法一：pip install 安装包名字 -i <a href="http://pypi.doubanio.com/simple/" target="_blank" rel="noopener noreferrer">http://pypi.doubanio.com/simple/</a> --trusted-host <a href="http://pypi.doubanio.com" target="_blank" rel="noopener noreferrer">pypi.doubanio.com</a> //豆瓣镜像网站</p>
<p>方法二：pip install 安装包名字 -i <a href="http://pypi.douban.com/simple/" target="_blank" rel="noopener noreferrer">http://pypi.douban.com/simple/</a> --trusted-host <a href="http://pypi.douban.com" target="_blank" rel="noopener noreferrer">pypi.douban.com</a> //豆瓣</p>
<p>方法三：pip install 安装包名字 -i <a href="https://pypi.tuna.tsinghua.edu.cn/simple/" target="_blank" rel="noopener noreferrer">https://pypi.tuna.tsinghua.edu.cn/simple/</a> --trusted-host <a href="http://pypi.tuna.tsinghua.edu.cn" target="_blank" rel="noopener noreferrer">pypi.tuna.tsinghua.edu.cn</a> //清华大学</p>
<p>方法四：pip install 安装包名字 -i <a href="http://mirrors.aliyun.com/pypi/simple" target="_blank" rel="noopener noreferrer">http://mirrors.aliyun.com/pypi/simple</a>  阿里云</p>
<p>方法五：pip install 安装包名字 -i <a href="https://pypi.mirrors.ustc.edu.cn/simple" target="_blank" rel="noopener noreferrer">https://pypi.mirrors.ustc.edu.cn/simple</a>  中国科技大学</p>
<p>方法六：pip install 安装包名字 -i <a href="http://pypi.mirrors.ustc.edu.cn/simple" target="_blank" rel="noopener noreferrer">http://pypi.mirrors.ustc.edu.cn/simple</a>  中国科学技术大学</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<h3 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章"><span>相关文章</span></a></h3>
<blockquote>
<p><a href="https://blog.csdn.net/liu_chen_yang/article/details/123680594" target="_blank" rel="noopener noreferrer">Linux下安装Python3.6.8（超级详细）</a></p>
</blockquote>
</div></template>


