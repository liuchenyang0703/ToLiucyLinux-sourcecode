<template><div><blockquote>
<blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
</blockquote>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者</a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主</a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主</a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区</a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/fdbeaae72dae4574a34cb6aebff1c158.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="下载安装包" tabindex="-1"><a class="header-anchor" href="#下载安装包"><span>下载安装包</span></a></h2>
<p>首先，我们第一步就是先下载go的安装包；<br>
Golang官网下载地址：<a href="https://golang.google.cn/dl/" target="_blank" rel="noopener noreferrer">https://golang.google.cn/dl/</a></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/acc15cf61fcd451cb587a62824a7aca1.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>下载到本地，然后上传到服务器上；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">下载地址：https://golang.google.cn/dl/go1.18.3.linux-amd64.tar.gz</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>或者直接在服务器上直接下载。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://golang.google.cn/dl/go1.18.3.linux-amd64.tar.gz</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="扩充" tabindex="-1"><a class="header-anchor" href="#扩充"><span>扩充：</span></a></h3>
<p>往下翻可以找到1.18.3和1.17.11版本，想要下载这两个版本的也可以直接下载；</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/48d559aaa43a4be2a24b210045cad2bc.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/9914bb7237a04f29b0022944f49d098c.png" alt="在这里插入图片描述" loading="lazy"></p>
<blockquote>
<p>但是，只有这两个版本，如果想下载其他版本呢？下面就交大家一个下载小技巧；</p>
</blockquote>
<h3 id="下载技巧" tabindex="-1"><a class="header-anchor" href="#下载技巧"><span>下载技巧：</span></a></h3>
<p>如果找不到想要下载的版本，可以直接复制上面这个地址，然后去网页上修改：</p>
<blockquote>
<p><strong><font color=teal>实例：</font></strong></p>
<hr>
<p><strong><font color=red>问❓：我想下载一个1.11.5版本的go安装包，官网上找不到下载地址该怎么下载呢？</font></strong></p>
<hr>
<p><strong><font color=green>答💻：不要去百度搜了；我们可以直接复制上面的1.18.3的下载地址—&gt;&gt;打开浏览器—&gt;&gt;新开一个标签页—&gt;&gt;把链接放上去—&gt;&gt;直接去改1.18.3那块的版本号—&gt;&gt;按回车自动下载—&gt;&gt;等待下载完成就ok。</font></strong></p>
</blockquote>
<p>打开浏览器—&gt;&gt;打开新标签页—&gt;&gt;链接放上去</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/ba2973da547046f1bc5f48da345753cb.png" alt="在这里插入图片描述" loading="lazy"><br>
直接去改1.18.3那块的版本号—&gt;&gt;按回车自动下载—&gt;&gt;等待下载完成就ok<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/8d05c509d80649f2b44071ba87cb043c.png" alt="在这里插入图片描述" loading="lazy"></p>
<h2 id="将安装包上传服务器并解压" tabindex="-1"><a class="header-anchor" href="#将安装包上传服务器并解压"><span>将安装包上传服务器并解压</span></a></h2>
<blockquote>
<p>上传服务器，可以先任意放到一个目录下，但是一定要能找到。<br/><br>
这里我们直接把安装包上传到/usr/local/目录下。</p>
</blockquote>
<p>解压安装包：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#切换到/usr/local/目录下</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#解压go的安装包</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> xf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> go1.18.3.linux-amd64.tar.gz</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/2dcbd899c4bf4171b0eef95da4c81d64.png" alt="在这里插入图片描述" loading="lazy"><br>
解压完成之后，会生成一个go的目录；</p>
<h2 id="将-usr-local-go-bin-目录下的所有文件添加到环境变量中-相当于windows中的-快捷指令" tabindex="-1"><a class="header-anchor" href="#将-usr-local-go-bin-目录下的所有文件添加到环境变量中-相当于windows中的-快捷指令"><span>将/usr/local/go/bin/目录下的所有文件添加到环境变量中，相当于Windows中的“快捷指令”</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#进入配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/profile</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 在最后一行添加</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> GOROOT</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">usr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">local</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">go</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> PATH</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$PATH</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$GOROOT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">bin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 保存退出后source一下，让配置文件生效</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">source</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/profile</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#设置完成，可以打go然后tab两下看看</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/0f31ccb827d94b69b92516794f3f7e0e.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="go-version查看是否安装成功" tabindex="-1"><a class="header-anchor" href="#go-version查看是否安装成功"><span>go version查看是否安装成功</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看版本号</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> version</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/f0bb73f1ded04668a07f9baad632df63.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<blockquote>
<p>由此我们可以看到go的版本是1.18.3，这样就是安装完成。</p>
</blockquote>
</div></template>


