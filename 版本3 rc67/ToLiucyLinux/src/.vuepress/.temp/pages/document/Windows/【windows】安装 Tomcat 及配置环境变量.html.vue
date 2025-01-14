<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者</a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主</a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主</a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区</a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言"><span>一、前言</span></a></h2>
<blockquote>
<p>因为最近在windows上安装了一个Tomcat，因为版本比较低；而最近在扫描服务漏洞，刚好也扫描了一些windows上的服务，就扫出来了一个漏洞，所以简单点就需要更新一下版本，来解决tomcat的漏洞问题；<br>
漏洞名称为：<font color=red>(CVE-2021-31805) 远程代码执行漏洞</font>，所以需要升级一下 <code v-pre>Tomcat</code> ，本次 <code v-pre>Tomcat</code> 升级到 <code v-pre>9.0.82</code> 版本 。</p>
</blockquote>
<h2 id="二、官网下载安装包" tabindex="-1"><a class="header-anchor" href="#二、官网下载安装包"><span>二、官网下载安装包</span></a></h2>
<blockquote>
<p>Tomcat官方下载地址：<a href="https://tomcat.apache.org/" target="_blank" rel="noopener noreferrer">https://tomcat.apache.org/</a></p>
</blockquote>
<ul>
<li>点击左侧的 Tomcat 9</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/b0d4b829111d4872996c7fe48f6275e7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>找到自己需要的版本 并 根据自己的电脑位数来下载，我这里是<code v-pre>64位</code>。</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/3e0e64193fdf4993ba90500d8a9e6728.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="三、解压-tomcat-压缩包" tabindex="-1"><a class="header-anchor" href="#三、解压-tomcat-压缩包"><span>三、解压 Tomcat 压缩包</span></a></h2>
<p>将下载的包解压到自己想要放的目录；这里我放到<code v-pre>桌面</code>下，（因为这里做一下测试，所以就直接放到桌面了），放到桌面下之后解压<code v-pre>apache-tomcat</code>压缩包；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/4e6c02c5fc45435ebceb0fe64926b4d2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>可以看到以下是解压下来文件中的内容</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/52088919ed9647ef9c3f0bca744faec8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="四、配置环境变量" tabindex="-1"><a class="header-anchor" href="#四、配置环境变量"><span>四、配置环境变量</span></a></h2>
<p>解压完之后，这里不需要做什么安装操作，只需要配置一下环境变量即可；</p>
<blockquote>
<p>此电脑 --&gt; 属性 --&gt; 高级系统设置 --&gt; 环境变量</p>
</blockquote>
<p>这里<code v-pre>此电脑 --&gt; 属性 --&gt; 高级系统设置</code>这块我就不展示了，大家应该都可以找到吧；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/5f8306b044574abba05a6d240334a01f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>系统变量 --&gt; 新建<br>
变量名：<code v-pre>CATALINA_HOME</code><br>
变量值：<code v-pre>Tomcat的解压路径 </code></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/66462d602d5544ac8870d184d54a8d13.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>点击确定 --&gt; 找到系统变量中的Path --&gt; 编辑<br>
添加：</p>
<blockquote>
<font color=red>提示：这里根据windows版本的不同，添加环境变量的path的显示可能就不一样；</font><br><p>如果path变量值是一行一行的，那么在最后一行添加：<code v-pre>%CATALINA_HOME%\bin</code>就行；<br><br>
如果path变量值是在一行中，那么在最后面添加：<code v-pre>%CATALINA_HOME%\bin;</code><br>
需要注意的是在一行中，在最后添加的时候需要注意前面是否有<code v-pre>分号;</code>，如果没有需要加上；</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/10357496e9854395bd0351fb66343677.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>然后一直点击确定 --&gt; 确定 --&gt; 确定到桌面即可；</p>
<h2 id="五、测试是否配置成功、启动-tomcat-服务" tabindex="-1"><a class="header-anchor" href="#五、测试是否配置成功、启动-tomcat-服务"><span>五、测试是否配置成功、启动 Tomcat 服务</span></a></h2>
<p>进入 <code v-pre>apache-tomcat-9.0.82/bin/</code>目录，右击使用管理员执行 <code v-pre>startup.bat</code> 脚本；</p>
<p>启动结果如下图：</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/e2737dd59daa44cd9cc77cef39bac291.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>看到启动tomcat服务有乱码问题，我们先停止脚本，解决一下乱码问题；<br>
停止tomcat服务：执行<code v-pre>bin/</code>下的<code v-pre>shutdown.bat</code> 脚本停止；</p>
<p>解决乱码问题：修改tomcat文件中的conf目录下的logging.properties：<code v-pre>conf/logging.properties</code> 文件中的  <code v-pre>java.util.logging.ConsoleHandler.encoding</code>，改为<code v-pre>GBK</code>即可；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">java.util.logging.ConsoleHandler.encoding</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> GBK</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/b36fc96c523b48acaeb85439270693c4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>修改完之后，保存退出后再执行<code v-pre>startup.bat</code>启动tomcat脚本，会发现没有乱码问题了；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/17b5fb889244431a8d960e12cb252256.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>到这里也就启动成功了。</p>
<h2 id="六、页面访问" tabindex="-1"><a class="header-anchor" href="#六、页面访问"><span>六、页面访问</span></a></h2>
<p>默认端口为8080</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">http://localhost:8080/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>看到如下页面，则代表安装成功。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/140a6b09fa68400fb5c56b531f90f162.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="七、部署完成" tabindex="-1"><a class="header-anchor" href="#七、部署完成"><span>七、部署完成</span></a></h2>
<blockquote>
<p>更多windows相关知识，可订阅：<a href="https://blog.csdn.net/liu_chen_yang/category_12481542.html?spm=1001.2014.3001.5482" target="_blank" rel="noopener noreferrer">《Windows相关技术》</a>专栏。</p>
</blockquote>
</div></template>


