<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者</a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主</a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主</a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区</a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/db79e07b492e4ef6b680d89a400afcdb.jpeg" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<blockquote>
<p>本文主要讲解的是在windows上安装<code v-pre>jdk</code>的环境和配置环境变量；</p>
<ul>
<li>jdk版本：1.8.381</li>
<li>Windows版本：win11（win10通用）</li>
</ul>
</blockquote>
<h2 id="下载jdk1-8安装包" tabindex="-1"><a class="header-anchor" href="#下载jdk1-8安装包"><span>下载jdk1.8安装包</span></a></h2>
<blockquote>
<p>官网下载地址：<a href="https://www.oracle.com/java/technologies/downloads/#java8-windows" target="_blank" rel="noopener noreferrer">jdk下载官网链接</a>  需要登陆Oracle账号信息；<br><br>
百度网盘下载：<a href="https://pan.baidu.com/s/1QwdhdmS1PfhtCX4MknJXYA?pwd=s9dy" target="_blank" rel="noopener noreferrer">网盘下载地址</a></p>
</blockquote>
<h2 id="安装jdk1-8-新建一个纯英文目录-中文可能导致安装失败" tabindex="-1"><a class="header-anchor" href="#安装jdk1-8-新建一个纯英文目录-中文可能导致安装失败"><span>安装jdk1.8（新建一个纯英文目录，中文可能导致安装失败）</span></a></h2>
<blockquote>
<font color=red>前言：建议创建英文目录，然后在英文目录创建一个`jdk1.8`目录，一个`jre1.8`目录，后面配置环境变量需要用到。</font></blockquote>
<p>等待下载完成，放到自己自定义的目录，右击以管理员方式进行安装；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/42360afe7bb040dead85065f17ae1faa.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>然后一直下一步，到选路径的时候，选一下就可以了，路径要记住，配置环境变量的时候要用到。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/59db495b77c145b29ec5e7b7f2b9ac99.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<blockquote>
<font color=red>这里注意，安装目录需要英文目录，不可以带中文。
建议创建英文目录，然后在英文目录创建一个`jdk1.8`目录，一个`jre1.8`目录，后面配置环境变量需要用到。</font>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/bca284b92cb04dda9202f4fd80a539a4.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>安装完成之后会让你更改目标文件夹，也同样的修改到D盘就可以了；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/2e359dd919d74dbe956ca0524b4de6cd.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>安装完成关闭即可；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/c38ec7b9f7b448f98d7e8f97f4fe3751.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量"><span>配置环境变量</span></a></h2>
<blockquote>
<p>得到完整的 jdk 环境之后，需要配置 jdk 的环境变量，右击此电脑--&gt;属性--&gt;高级系统设置--&gt;环境变量，打开环境变量设置窗口。</p>
</blockquote>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/cfdde248de514bda972735cffe6bede3.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/8a4f25f0548e49e3a5547908eedc1938.png" alt="在这里插入图片描述" loading="lazy"></p>
<blockquote>
<p>可以看到有“用户变量”与“系统变量”。二者我认为最大的区别在于 用户变量只对当前用户有效，系统变量对所有用户有效；所以我一般在变量配置在“系统变量中”即可。</p>
</blockquote>
<ul>
<li>配置“JAVA_HOME”变量，变量名为：“JAVA_HOME ”。变量值为：“<code v-pre>D:\IDEA\windows-jdk1.8\jdk1.8</code>”。</li>
</ul>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/bd129cce73b445fe9a72fc55432d5ca2.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/bdd33104c9b24c5c8c406489e1575b09.png" alt="在这里插入图片描述" loading="lazy"></p>
<ul>
<li>配置“CLASSPATH”变量，变量名为：“CLASSPATH ”。变量值为：【<code v-pre>.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar</code>】；并点击确定。</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/dbafec249f114572a2549020d0c00c27.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>配置“Path”变量，变量名为：“Path ”。变量值为：【<code v-pre>.;%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin</code>】；并点击确定。</li>
<li>找到“Path”，点击编辑。</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/b4378ce61bdb4502be188abfd3700d6c.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>点击新建</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/331834c33fa647f4864f944d613f7c2b.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>新增变量值为：【<code v-pre>.;%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin</code>】；并点击确定。</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/7225c237825e4ccbbec35dd078bf6fb5.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<blockquote>
<p>这样就配置完了，一路点击确定，直到桌面；</p>
</blockquote>
<h2 id="校验是否配置成功" tabindex="-1"><a class="header-anchor" href="#校验是否配置成功"><span>校验是否配置成功</span></a></h2>
<blockquote>
<p>windows+R 输入 cmd 打开终端，输入java -version，如果输出如下图所示，则安装成功。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看jdk 版本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">java</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -version</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/fce81d255d0a435fa910a5e592712593.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>查看配置的环境变量<br>
一、可以再次点击 <code v-pre>此电脑--&gt;属性&gt;环境变量</code> 查看</p>
<p>二、可以在cmd终端查看</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> %JAVA_HOME%</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> %CLASSPATH%</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> %PATH%</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/f51055f68dc7438c940b9f97fdbf5441.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<blockquote>
<p>至此就配置完成了。<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章"><span>相关文章：</span></a></h2>
<table>
<thead>
<tr>
<th>文章标题</th>
<th>文章链接</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/132114315" target="_blank" rel="noopener noreferrer">Windows上安装 jdk 环境并配置环境变量 （超详细教程）</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/132114315" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/132114315</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/132012969" target="_blank" rel="noopener noreferrer">Windows上安装 Go 环境并配置环境变量 （超详细教程）</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/132012969" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/132012969</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/131808146" target="_blank" rel="noopener noreferrer">Windows上安装 Python 环境并配置环境变量 （超详细教程）</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/131808146" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/131808146</a></td>
</tr>
</tbody>
</table>
</div></template>


