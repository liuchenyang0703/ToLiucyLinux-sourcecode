<template><div><p>@[toc]</p>
<h2 id="下载jak1-8安装包" tabindex="-1"><a class="header-anchor" href="#下载jak1-8安装包" aria-hidden="true">#</a> 下载jak1.8安装包</h2>
<blockquote>
<p>链接：<a href="https://pan.baidu.com/s/1_JcE1J_M32QRGi35XP6wlg" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1_JcE1J_M32QRGi35XP6wlg<ExternalLinkIcon/></a><br>
提取码：nl6l</p>
</blockquote>
<p>如果想要其他版本的安装包可以去官网下载:<br>
<a href="https://www.oracle.com/cloud/free/?source=:ow:o:s:nav::DevoGetStarted&amp;intcmp=:ow:o:s:nav::DevoGetStarted" target="_blank" rel="noopener noreferrer">https://www.oracle.com/cloud/free/?source=:ow⭕s:nav::DevoGetStarted&amp;intcmp=:ow⭕s:nav::DevoGetStarted<ExternalLinkIcon/></a></p>
<figure><img src="https://img-blog.csdnimg.cn/direct/259588fe3833455bad5089b7b936e7d0.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<figure><img src="https://img-blog.csdnimg.cn/direct/3e7a2567556f48f3af03522b77531e5c.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<figure><img src="https://img-blog.csdnimg.cn/direct/62736892debe4a479751c2dfe8f8261e.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>下载好之后，上传到服务器上，设置环境变量就可以用了。<br>
<br></p>
<h2 id="设置环境变量" tabindex="-1"><a class="header-anchor" href="#设置环境变量" aria-hidden="true">#</a> 设置环境变量</h2>
<p>下载好之后。解压<code v-pre>jdk-8u221-linux-x64.tar.gz</code>，我们会得到一个目录<code v-pre>jdk1.8.0_221</code>，然后就是<font color=red>重点记住你的jdk存放的目录，也就是绝对路径，不知道自己路径的pwd可以看一下自己现在在哪。</font></p>
<ul>
<li>配置全局环境变量</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 进入/etc/profile配置环境变量，这里我的jdk1.8在/application/目录下放着</span>
<span class="token function">vim</span> /etc/profile
	<span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/application/jdk1.8.0_221/
	<span class="token builtin class-name">export</span> <span class="token assign-left variable">JRE_HOME</span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/jre
	<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">$JAVA_HOME</span>/lib:<span class="token variable">$JRE_HOME</span>/lib
	<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>
<span class="token comment">#设置完之后保存退出</span>
<span class="token comment">#让profile生效</span>
<span class="token builtin class-name">source</span> /etc/profile
<span class="token comment">#查看jdk版本</span>
<span class="token function">java</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>配置当前用户环境变量</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 进入~/.bashrc配置环境变量，这里我的jdk1.8在/application/目录下放着</span>
<span class="token function">vi</span> /root/.bashrc

	<span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/application/jdk1.8.0_221/
	<span class="token builtin class-name">export</span> <span class="token assign-left variable">JRE_HOME</span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/jre
	<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">$JAVA_HOME</span>/lib:<span class="token variable">$JRE_HOME</span>/lib
	<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>
<span class="token comment">#设置完之后保存退出</span>
<span class="token comment">#让.bashrc生效</span>
<span class="token builtin class-name">source</span> /root/.bashrc
<span class="token comment">#查看jdk版本</span>
<span class="token function">java</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/b7cd5b5613db46079df4501b8726aede.png" alt="在这里插入图片描述" loading="lazy"><br>
可以看到版本已经是jdk1.8的了，这样就算安装成功了！</p>
</div></template>


