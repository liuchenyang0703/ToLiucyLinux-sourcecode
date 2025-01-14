<template><div><figure><img src="https://img-blog.csdnimg.cn/7893f7ffc7c6441d90fbe08aa9746e1f.jpeg" alt="" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>@[toc]</p>
<blockquote>
<p>环境：Centos7.6<br>
前提：需要yum源</p>
</blockquote>
<h1 id="_1、安装tomcat" tabindex="-1"><a class="header-anchor" href="#_1、安装tomcat" aria-hidden="true">#</a> 1、安装tomcat</h1>
<p>在linux下部署java开发的web应用，一般采用Tomact+jre环境（可不需要apache）；<br>
yum安装的不是最新版本，最新版本推荐二进制安装，去官网下载最新的安装包；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#安装tomcat；没有java安装tomcat默认会自动安装jdk</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>会安装大量依赖；</p>
<figure><img src="https://img-blog.csdnimg.cn/d3db16510cc04c1da1169c092f449e3a.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="_2、启动tomcat并设置开机自启" tabindex="-1"><a class="header-anchor" href="#_2、启动tomcat并设置开机自启" aria-hidden="true">#</a> 2、启动tomcat并设置开机自启</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#启动tomcat</span>
systemctl start tomcat

<span class="token comment">#设置开机自启</span>
systemctl <span class="token builtin class-name">enable</span> tomcat

<span class="token comment">#查看tomcat状态</span>
systemctl status tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>属于运行中；</p>
<figure><img src="https://img-blog.csdnimg.cn/085adefc987d4a54b13e7473288c378b.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="_3、访问页面-失败的情况" tabindex="-1"><a class="header-anchor" href="#_3、访问页面-失败的情况" aria-hidden="true">#</a> 3、访问页面（失败的情况）</h1>
<p>默认端口是8080</p>
<figure><img src="https://img-blog.csdnimg.cn/d57bf4eb9fbc4dfc83874ff2dc32e828.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>报错404；这个问题是因为没有安装完整的组件；</p>
<h2 id="_3-1、问题解决-安装完整组件" tabindex="-1"><a class="header-anchor" href="#_3-1、问题解决-安装完整组件" aria-hidden="true">#</a> 3.1、问题解决：安装完整组件</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> tomcat-webapps tomcat-admin-webapps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/46ddfda8da9b4fa689b324d03728a067.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="_4、重启tomcat服务" tabindex="-1"><a class="header-anchor" href="#_4、重启tomcat服务" aria-hidden="true">#</a> 4、重启tomcat服务</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl restart tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_5、查看tomcat启动状态" tabindex="-1"><a class="header-anchor" href="#_5、查看tomcat启动状态" aria-hidden="true">#</a> 5、查看tomcat启动状态</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl status tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/44e989bcfed64110b78e85356c235540.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="_6、页面测试" tabindex="-1"><a class="header-anchor" href="#_6、页面测试" aria-hidden="true">#</a> 6、页面测试</h1>
<p>ip:8080</p>
<figure><img src="https://img-blog.csdnimg.cn/3c6b8d20c6bf4b3ab732572378e24581.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="_7、tomcat配置文件详解" tabindex="-1"><a class="header-anchor" href="#_7、tomcat配置文件详解" aria-hidden="true">#</a> 7、Tomcat配置文件详解</h1>
<h2 id="_7-1-tomcat目录详解" tabindex="-1"><a class="header-anchor" href="#_7-1-tomcat目录详解" aria-hidden="true">#</a> 7.1  Tomcat目录详解</h2>
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
<h2 id="_7-2-tomcat中conf目录中配置文件详解" tabindex="-1"><a class="header-anchor" href="#_7-2-tomcat中conf目录中配置文件详解" aria-hidden="true">#</a> 7.2  Tomcat中conf目录中配置文件详解</h2>
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
<h1 id="相关文章🔅" tabindex="-1"><a class="header-anchor" href="#相关文章🔅" aria-hidden="true">#</a> 相关文章🔅</h1>
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
</tbody>
</table>
</div></template>


