<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180951125.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_1、tomcat介绍" tabindex="-1"><a class="header-anchor" href="#_1、tomcat介绍"><span>1、Tomcat介绍</span></a></h2>
<p>  Tomcat是Apache 软件基金会（Apache Software Foundation）中的一个核心项目，由Apache、Sun和其他一些公司及个人共同开发而成，以Apache license许可的方式进行发布。由于有了Sun的参与和支持，最新的Servlet和JSP规范总是能在Tomcat中得到体现。因为Tomcat技术先进、性能稳定，而且免费，因而深受Java爱好者的喜爱并得到了部分软件开发商的认可，成为目前比较流行的Web应用服务器。</p>
<p>  Tomcat服务器是一个免费的开放源代码的Web 应用服务器，属于轻量级应用服务器，在中小型系统和并发访问用户不是很多的场合下被普遍使用，是开发和调试JSP 程序的首选。对于一个初学者来说，可以这样认为，当在一台机器上配置好Apache服务器，可利用它响应HTML页面的访问请求。实际上Tomcat部分是Apache服务器的扩展，但它是独立运行的，所以当你运行tomcat 时，它实际上作为一个与Apache独立的进程单独运行的。</p>
<p>Tomcat官网地址：<a href="https://tomcat.apache.org/" target="_blank" rel="noopener noreferrer">https://tomcat.apache.org/</a></p>
<h2 id="_2、tomcat的安装" tabindex="-1"><a class="header-anchor" href="#_2、tomcat的安装"><span>2、Tomcat的安装</span></a></h2>
<h3 id="_2-1-安装jdk环境" tabindex="-1"><a class="header-anchor" href="#_2-1-安装jdk环境"><span>2.1 安装JDK环境</span></a></h3>
<blockquote>
<p>使用我们事先准备好的离线包《jdk1.8》</p>
<p>链接：<a href="https://pan.baidu.com/s/1_JcE1J_M32QRGi35XP6wlg" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1_JcE1J_M32QRGi35XP6wlg</a><br>
提取码：nl6l</p>
</blockquote>
<p>部署jdk的方式有很多我们可以选择按照本文的方式来部署，也可按照 <a href="https://liucy.blog.csdn.net/article/details/123706070?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Linux中安装jdk1.8和配置环境变量 </a>这篇文章来部署；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#先将jdk离线包放入服务器中</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#放入服务器中将jdk1.8解压放到/usr/local/目录下</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> xf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> jdk-8u221-linux-x64.tar.gz</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#解压完我们去/usr/local目录看一下</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#配置环境变量</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/profile.d/java.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">JAVA_HOME</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/usr/local/jdk1.8.0_221</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">CLASSPATH</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$JAVA_HOME</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/lib</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">PATH</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$PATH</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$JAVA_HOME</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/bin</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#配置完成之后生效配置文件</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">source</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/profile</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#验证</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">java</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">java</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> version</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "1.8.0_221"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Java(TM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) SE Runtime Environment (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">build</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1.8.0_221-b11</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Java</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> HotSpot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">TM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">64-Bit</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> VM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (build </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">25.221-b11,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mixed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-部署tomcat" tabindex="-1"><a class="header-anchor" href="#_2-2-部署tomcat"><span>2.2 部署Tomcat</span></a></h3>
<h4 id="_2-2-1-下载安装包" tabindex="-1"><a class="header-anchor" href="#_2-2-1-下载安装包"><span>2.2.1 下载安装包</span></a></h4>
<p>首先我们先下载安装包；</p>
<blockquote>
<p>这里我们用tomcat10版本来安装<br>
Tomcat官网：<a href="https://tomcat.apache.org/" target="_blank" rel="noopener noreferrer">https://tomcat.apache.org/</a></p>
</blockquote>
<p>进入官网--&gt;选择右侧的Tomcat 10</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180951479.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180951941.png" alt="" loading="lazy"></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180950809.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_2-2-2-部署tomcat" tabindex="-1"><a class="header-anchor" href="#_2-2-2-部署tomcat"><span>2.2.2 部署Tomcat</span></a></h4>
<p>下载完成之后上传至服务器；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#将下载好的安装包上传到服务器中；</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#解压安装包</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> xf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apache-tomcat-10.0.23.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#将解压的目录移动到/usr/local/目录下并改名为tomcat</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apache-tomcat-10.0.23</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/tomcat</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#启动tomcat</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/usr/local/tomcat/bin/startup.sh</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180950621.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_2-2-3-web页面访问" tabindex="-1"><a class="header-anchor" href="#_2-2-3-web页面访问"><span>2.2.3 web页面访问</span></a></h4>
<p>启动完成，访问地址测试：ip:8080</p>
<font color=red>默认端口为8080</font><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180950256.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以访问到，完成部署；</p>
<h4 id="_2-2-4-二进制安装tomcat相关命令" tabindex="-1"><a class="header-anchor" href="#_2-2-4-二进制安装tomcat相关命令"><span>2.2.4 二进制安装tomcat相关命令</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#启动tomcat</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/usr/local/tomcat/bin/startup.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#关闭tomcat</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/usr/local/tomcat/bin/shutdown.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看tomcat版本与jdk、内核版本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/usr/local/tomcat/bin/version.sh</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-tomcat配置文件详解" tabindex="-1"><a class="header-anchor" href="#_2-3-tomcat配置文件详解"><span>2.3 Tomcat配置文件详解</span></a></h3>
<h4 id="_2-3-1-tomcat目录详解" tabindex="-1"><a class="header-anchor" href="#_2-3-1-tomcat目录详解"><span>2.3.1 Tomcat目录详解</span></a></h4>
<blockquote>
<p>路径仅限于本文二进制安装；</p>
</blockquote>
<table>
<thead>
<tr>
<th>目录</th>
<th>说明</th>
<th>路径</th>
</tr>
</thead>
<tbody>
<tr>
<td>bin</td>
<td>用于存放Tomcat启动或停止等脚本</td>
<td>/usr/local/tomcat/bin/</td>
</tr>
<tr>
<td>conf</td>
<td>用于存放Tomcat相关配置文件</td>
<td>/usr/local/tomcat/conf/</td>
</tr>
<tr>
<td>lib</td>
<td>Tomcat依赖库目录，包含Tomcat服务器运行环境依赖jar包</td>
<td>/usr/local/tomcat/lib/</td>
</tr>
<tr>
<td>logs</td>
<td>Tomcat默认日志存放路径</td>
<td>/usr/local/tomcat/logs/</td>
</tr>
<tr>
<td>webapps</td>
<td>Tomcat默认应用部署目录</td>
<td>/usr/local/tomcat/webapps/</td>
</tr>
<tr>
<td>work</td>
<td>WEB应用JSP代码生成和编译临时目录</td>
<td>/usr/local/tomcat/work/</td>
</tr>
<tr>
<td>temp</td>
<td>Tomcat临时数据目录</td>
<td>/usr/local/tomcat/temp/</td>
</tr>
</tbody>
</table>
<h4 id="_2-3-2-tomcat中conf目录中配置文件详解" tabindex="-1"><a class="header-anchor" href="#_2-3-2-tomcat中conf目录中配置文件详解"><span>2.3.2 Tomcat中conf目录中配置文件详解</span></a></h4>
<blockquote>
<p>本文二进制安装的conf路径为：/usr/local/tomcat/conf/</p>
</blockquote>
<table>
<thead>
<tr>
<th>文件</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>Catalina</td>
<td>用于存储针对每个虚拟机Context的配置文件</td>
</tr>
<tr>
<td>context.xml</td>
<td>用于定义默认所有WEB应用都要加载的context配置，web自定义优先使用</td>
</tr>
<tr>
<td>catalina.properties</td>
<td>Tomcat的环境变量</td>
</tr>
<tr>
<td>catalina.policy</td>
<td>当Tomcat在安全模式下运行，默认使用的安全策略</td>
</tr>
<tr>
<td>logging.properties</td>
<td>日志配置文件，级别以及日志文件路径</td>
</tr>
<tr>
<td>server.xml</td>
<td>Tomcat的主配置文件，包括连接器，监听端口，虚拟主机等</td>
</tr>
<tr>
<td>tomcat-user.xml</td>
<td>Tomcat默认用户及角色映射信息，Manager模块用该文件定义用户安全认证</td>
</tr>
<tr>
<td>web.xml</td>
<td>所有应用的默认部署描述文件</td>
</tr>
</tbody>
</table>
<h2 id="相关文章🔅" tabindex="-1"><a class="header-anchor" href="#相关文章🔅"><span>相关文章🔅</span></a></h2>
<table>
<thead>
<tr>
<th>相关文章</th>
<th>链接地址</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/127006134" target="_blank" rel="noopener noreferrer">【Linux】安装Tomcat以yum方式安装</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/127006134" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/127006134</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/127009222" target="_blank" rel="noopener noreferrer">【Linux】Tomcat简介及二进制安装</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/127009222" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/127009222</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/127011859" target="_blank" rel="noopener noreferrer">【Linux】Tomcat优化</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/127011859" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/127011859</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/123706070?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Linux中安装jdk1.8和配置环境变量</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/123706070?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/123706070?spm=1001.2014.3001.5502</a></td>
</tr>
</tbody>
</table>
</div></template>


