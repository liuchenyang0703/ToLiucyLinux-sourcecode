<template><div><blockquote>
<p>🍁<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者</a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主</a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主</a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区</a> 欢迎大家的加入！</p>
</blockquote>
<h2 id="一、下载maven包" tabindex="-1"><a class="header-anchor" href="#一、下载maven包"><span>一、下载maven包</span></a></h2>
<ul>
<li>下载有两种方法，分为：<font color=red>官网下载包</font>和<font color=red>wget直接下载</font></li>
</ul>
<h3 id="方法一-官网下载包" tabindex="-1"><a class="header-anchor" href="#方法一-官网下载包"><span>方法一：官网下载包</span></a></h3>
<ul>
<li>1、登录网址查看下载源：<a href="https://mirrors.tuna.tsinghua.edu.cn/" target="_blank" rel="noopener noreferrer">清华大学开源软件镜像站</a></li>
<li>2、搜索apache</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412171026910.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412171026616.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>3、进入apache，找到maven并下载，可使用<code v-pre>ctrl+f</code> 搜索</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412171026491.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>4、点击进入选择自己所需版本，外面是大版本，里面还有小版本</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412171026680.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>5、我就点击最新的maven-4，进入之后在点击<code v-pre>4.0.0-alpha-5</code>，在选择 <code v-pre>binaries</code>，选择自己想要下载包格式，我选择的是zip格式</li>
</ul>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412171026672.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412171026933.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412171025686.png" alt="" loading="lazy"><br>
这是下载地址：<a href="https://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-4/4.0.0-alpha-5/binaries/" target="_blank" rel="noopener noreferrer">https://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-4/4.0.0-alpha-5/binaries/</a></p>
<ul>
<li>6、下载完成之后上传到服务器上解压即可。</li>
</ul>
<p>完了在配置环境变量，生效就可以用了，具体可以看下面操作： <a href="#huanjing">配置环境变量</a>。</p>
<h3 id="方法二-wget直接下载" tabindex="-1"><a class="header-anchor" href="#方法二-wget直接下载"><span>方法二：wget直接下载</span></a></h3>
<p>可以复制上面找到的路径进入，然后点击自己想要下载的包的格式，右击复制连接，完成之后在linux服务器上直接使用wget下载。<br>
这是下载地址：<a href="https://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-4/4.0.0-alpha-5/binaries/" target="_blank" rel="noopener noreferrer">https://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-4/4.0.0-alpha-5/binaries/</a></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412171025619.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#创建maven目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/maven</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#进入/usr/local/maven目录</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/maven</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#拉取maven包</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-4/4.0.0-alpha-5/binaries/apache-maven-4.0.0-alpha-5-bin.zip</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、配置环境变量" tabindex="-1"><a class="header-anchor" href="#二、配置环境变量"><span>二、配置环境变量</span></a></h2>
<ul>
<li><span id="huanjing">1、解压下载的包</span></li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">unzip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apache-maven-4.0.0-alpha-5-bin.zip</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>2、配置环境变量：编辑/etc/profile文件</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/profile</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>3、在文件中添加，注意将MAVEN_HOME的值改成自己文件夹。</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">MAVEN_HOME</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/usr/local/maven/apache-maven-4.0.0-alpha-5</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> PATH</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">MAVEN_HOME</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">bin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">PATH</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>4、生效配置文件</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">source</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/profile</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="三、mvn校验" tabindex="-1"><a class="header-anchor" href="#三、mvn校验"><span>三、mvn校验</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mvn</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>当你看到如下内容，那么恭喜你成功了，如果你没有装jdk会提示你找不到jdk；报错如下下。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412171025225.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>该报错是找不多jdk，配置一个jdk即可；可参考：<a href="https://liucy.blog.csdn.net/article/details/123706070?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Linux中安装jdk1.8和配置环境变量</a> 来配置jdk，配置完成之后再次执行以下<code v-pre>mvn -v</code>校验即可。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412171025870.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


