<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180951125.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_1、tomcat介绍" tabindex="-1"><a class="header-anchor" href="#_1、tomcat介绍" aria-hidden="true">#</a> 1、Tomcat介绍</h2>
<p>  Tomcat是Apache 软件基金会（Apache Software Foundation）中的一个核心项目，由Apache、Sun和其他一些公司及个人共同开发而成，以Apache license许可的方式进行发布。由于有了Sun的参与和支持，最新的Servlet和JSP规范总是能在Tomcat中得到体现。因为Tomcat技术先进、性能稳定，而且免费，因而深受Java爱好者的喜爱并得到了部分软件开发商的认可，成为目前比较流行的Web应用服务器。</p>
<p>  Tomcat服务器是一个免费的开放源代码的Web 应用服务器，属于轻量级应用服务器，在中小型系统和并发访问用户不是很多的场合下被普遍使用，是开发和调试JSP 程序的首选。对于一个初学者来说，可以这样认为，当在一台机器上配置好Apache服务器，可利用它响应HTML页面的访问请求。实际上Tomcat部分是Apache服务器的扩展，但它是独立运行的，所以当你运行tomcat 时，它实际上作为一个与Apache独立的进程单独运行的。</p>
<p>Tomcat官网地址：<a href="https://tomcat.apache.org/" target="_blank" rel="noopener noreferrer">https://tomcat.apache.org/<ExternalLinkIcon/></a></p>
<h2 id="_2、tomcat的安装" tabindex="-1"><a class="header-anchor" href="#_2、tomcat的安装" aria-hidden="true">#</a> 2、Tomcat的安装</h2>
<h3 id="_2-1-安装jdk环境" tabindex="-1"><a class="header-anchor" href="#_2-1-安装jdk环境" aria-hidden="true">#</a> 2.1 安装JDK环境</h3>
<blockquote>
<p>使用我们事先准备好的离线包《jdk1.8》</p>
<p>链接：<a href="https://pan.baidu.com/s/1_JcE1J_M32QRGi35XP6wlg" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1_JcE1J_M32QRGi35XP6wlg<ExternalLinkIcon/></a><br>
提取码：nl6l</p>
</blockquote>
<p>部署jdk的方式有很多我们可以选择按照本文的方式来部署，也可按照 <a href="https://liucy.blog.csdn.net/article/details/123706070?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Linux中安装jdk1.8和配置环境变量 <ExternalLinkIcon/></a>这篇文章来部署；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#先将jdk离线包放入服务器中</span>
<span class="token comment">#放入服务器中将jdk1.8解压放到/usr/local/目录下</span>
<span class="token function">tar</span> xf jdk-8u221-linux-x64.tar.gz <span class="token parameter variable">-C</span> /usr/local/

<span class="token comment">#解压完我们去/usr/local目录看一下</span>
<span class="token builtin class-name">cd</span> /usr/local/

<span class="token comment">#配置环境变量</span>
<span class="token function">vim</span> /etc/profile.d/java.sh

<span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/jdk1.8.0_221
<span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/lib
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin
 
<span class="token comment">#配置完成之后生效配置文件</span>
<span class="token builtin class-name">source</span> /etc/profile

<span class="token comment">#验证</span>
<span class="token function">java</span> <span class="token parameter variable">-version</span>

<span class="token function">java</span> version <span class="token string">"1.8.0_221"</span>
Java<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> SE Runtime Environment <span class="token punctuation">(</span>build <span class="token number">1.8</span>.0_221-b11<span class="token punctuation">)</span>
Java HotSpot<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">25.221</span>-b11, mixed mode<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-部署tomcat" tabindex="-1"><a class="header-anchor" href="#_2-2-部署tomcat" aria-hidden="true">#</a> 2.2 部署Tomcat</h3>
<h4 id="_2-2-1-下载安装包" tabindex="-1"><a class="header-anchor" href="#_2-2-1-下载安装包" aria-hidden="true">#</a> 2.2.1 下载安装包</h4>
<p>首先我们先下载安装包；</p>
<blockquote>
<p>这里我们用tomcat10版本来安装<br>
Tomcat官网：<a href="https://tomcat.apache.org/" target="_blank" rel="noopener noreferrer">https://tomcat.apache.org/<ExternalLinkIcon/></a></p>
</blockquote>
<p>进入官网--&gt;选择右侧的Tomcat 10</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180951479.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180951941.png" alt="" loading="lazy"></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180950809.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_2-2-2-部署tomcat" tabindex="-1"><a class="header-anchor" href="#_2-2-2-部署tomcat" aria-hidden="true">#</a> 2.2.2 部署Tomcat</h4>
<p>下载完成之后上传至服务器；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#将下载好的安装包上传到服务器中；</span>
<span class="token comment">#解压安装包</span>
<span class="token function">tar</span> xf apache-tomcat-10.0.23.tar.gz

<span class="token comment">#将解压的目录移动到/usr/local/目录下并改名为tomcat</span>
<span class="token function">mv</span> apache-tomcat-10.0.23 /usr/local/tomcat

<span class="token comment">#启动tomcat</span>
/usr/local/tomcat/bin/startup.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180950621.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_2-2-3-web页面访问" tabindex="-1"><a class="header-anchor" href="#_2-2-3-web页面访问" aria-hidden="true">#</a> 2.2.3 web页面访问</h4>
<p>启动完成，访问地址测试：ip:8080</p>
<font color=red>默认端口为8080</font><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180950256.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以访问到，完成部署；</p>
<h4 id="_2-2-4-二进制安装tomcat相关命令" tabindex="-1"><a class="header-anchor" href="#_2-2-4-二进制安装tomcat相关命令" aria-hidden="true">#</a> 2.2.4 二进制安装tomcat相关命令</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#启动tomcat</span>
/usr/local/tomcat/bin/startup.sh

<span class="token comment">#关闭tomcat</span>
/usr/local/tomcat/bin/shutdown.sh

<span class="token comment">#查看tomcat版本与jdk、内核版本</span>
/usr/local/tomcat/bin/version.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-tomcat配置文件详解" tabindex="-1"><a class="header-anchor" href="#_2-3-tomcat配置文件详解" aria-hidden="true">#</a> 2.3 Tomcat配置文件详解</h3>
<h4 id="_2-3-1-tomcat目录详解" tabindex="-1"><a class="header-anchor" href="#_2-3-1-tomcat目录详解" aria-hidden="true">#</a> 2.3.1 Tomcat目录详解</h4>
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
<h4 id="_2-3-2-tomcat中conf目录中配置文件详解" tabindex="-1"><a class="header-anchor" href="#_2-3-2-tomcat中conf目录中配置文件详解" aria-hidden="true">#</a> 2.3.2 Tomcat中conf目录中配置文件详解</h4>
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
<h2 id="相关文章🔅" tabindex="-1"><a class="header-anchor" href="#相关文章🔅" aria-hidden="true">#</a> 相关文章🔅</h2>
<table>
<thead>
<tr>
<th>相关文章</th>
<th>链接地址</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/127006134" target="_blank" rel="noopener noreferrer">【Linux】安装Tomcat以yum方式安装<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/127006134" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/127006134<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/127009222" target="_blank" rel="noopener noreferrer">【Linux】Tomcat简介及二进制安装<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/127009222" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/127009222<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/127011859" target="_blank" rel="noopener noreferrer">【Linux】Tomcat优化<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/127011859" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/127011859<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/123706070?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Linux中安装jdk1.8和配置环境变量<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/123706070?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/123706070?spm=1001.2014.3001.5502<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
</div></template>


