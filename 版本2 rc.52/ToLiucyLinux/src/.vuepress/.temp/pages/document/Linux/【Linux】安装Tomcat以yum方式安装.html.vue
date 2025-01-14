<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181356632.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>环境：Centos7.6<br>
前提：需要yum源</p>
</blockquote>
<h2 id="_1、安装tomcat" tabindex="-1"><a class="header-anchor" href="#_1、安装tomcat"><span>1、安装tomcat</span></a></h2>
<p>在linux下部署java开发的web应用，一般采用Tomact+jre环境（可不需要apache）；<br>
yum安装的不是最新版本，最新版本推荐二进制安装，去官网下载最新的安装包；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#安装tomcat；没有java安装tomcat默认会自动安装jdk</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tomcat</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>会安装大量依赖；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181356796.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_2、启动tomcat并设置开机自启" tabindex="-1"><a class="header-anchor" href="#_2、启动tomcat并设置开机自启"><span>2、启动tomcat并设置开机自启</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#启动tomcat</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tomcat</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#设置开机自启</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tomcat</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#查看tomcat状态</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> status</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tomcat</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>属于运行中；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181356253.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_3、访问页面-失败的情况" tabindex="-1"><a class="header-anchor" href="#_3、访问页面-失败的情况"><span>3、访问页面（失败的情况）</span></a></h2>
<p>默认端口是8080</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181356420.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>报错404；这个问题是因为没有安装完整的组件；</p>
<h3 id="_3-1、问题解决-安装完整组件" tabindex="-1"><a class="header-anchor" href="#_3-1、问题解决-安装完整组件"><span>3.1、问题解决：安装完整组件</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tomcat-webapps</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tomcat-admin-webapps</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181356147.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_4、重启tomcat服务" tabindex="-1"><a class="header-anchor" href="#_4、重启tomcat服务"><span>4、重启tomcat服务</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tomcat</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_5、查看tomcat启动状态" tabindex="-1"><a class="header-anchor" href="#_5、查看tomcat启动状态"><span>5、查看tomcat启动状态</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> status</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tomcat</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181356200.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_6、页面测试" tabindex="-1"><a class="header-anchor" href="#_6、页面测试"><span>6、页面测试</span></a></h2>
<p>ip:8080</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181356282.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_7、tomcat配置文件详解" tabindex="-1"><a class="header-anchor" href="#_7、tomcat配置文件详解"><span>7、Tomcat配置文件详解</span></a></h2>
<h3 id="_7-1-tomcat目录详解" tabindex="-1"><a class="header-anchor" href="#_7-1-tomcat目录详解"><span>7.1  Tomcat目录详解</span></a></h3>
<blockquote>
<p>路径仅限于本文yum安装；</p>
</blockquote>
<table>
<thead>
<tr>
<th>目录</th>
<th>说明</th>
<th>软连接路径</th>
<th>源路径</th>
</tr>
</thead>
<tbody>
<tr>
<td>bin</td>
<td>用于存放Tomcat启动或停止等脚本</td>
<td>/usr/share/tomcat/bin/</td>
<td>/usr/share/tomcat/bin/</td>
</tr>
<tr>
<td>conf</td>
<td>用于存放Tomcat相关配置文件</td>
<td>/usr/share/tomcat/conf/</td>
<td>/etc/tomcat/</td>
</tr>
<tr>
<td>lib</td>
<td>Tomcat依赖库目录，包含Tomcat服务器运行环境依赖jar包</td>
<td>/usr/share/tomcat/lib/</td>
<td>/usr/share/java/tomcat/</td>
</tr>
<tr>
<td>logs</td>
<td>Tomcat默认日志存放路径</td>
<td>/usr/share/tomcat/logs/</td>
<td>/var/log/tomcat/</td>
</tr>
<tr>
<td>webapps</td>
<td>Tomcat默认应用部署目录</td>
<td>/usr/share/tomcat/webapps/</td>
<td>/var/lib/tomcat//webapps/</td>
</tr>
<tr>
<td>work</td>
<td>WEB应用JSP代码生成和编译临时目录</td>
<td>/usr/share/tomcat/work/</td>
<td>/var/cache/tomcat/work/</td>
</tr>
<tr>
<td>temp</td>
<td>Tomcat临时数据目录</td>
<td>/usr/share/tomcat/temp/</td>
<td>/var/cache/tomcat/temp/</td>
</tr>
</tbody>
</table>
<h3 id="_7-2-tomcat中conf目录中配置文件详解" tabindex="-1"><a class="header-anchor" href="#_7-2-tomcat中conf目录中配置文件详解"><span>7.2  Tomcat中conf目录中配置文件详解</span></a></h3>
<blockquote>
<p>本文yum安装的conf路径为：/usr/share/tomcat/conf/</p>
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
</tbody>
</table>
</div></template>


