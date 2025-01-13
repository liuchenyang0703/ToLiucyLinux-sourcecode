<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514069.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者</a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主</a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主</a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区</a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<h2 id="一、jenkins到底是什么" tabindex="-1"><a class="header-anchor" href="#一、jenkins到底是什么"><span>一、Jenkins到底是什么？</span></a></h2>
<blockquote>
<p>  Jenkins是一款开源 CI&amp;CD 软件，用于自动化各种任务，包括构建、测试和部署软件。支持各种运行方式，可通过系统包、Docker 或者通过一个独立的 Java 程序。下面为项目持续集成和交互的流程图</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514037.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="二、持续集成、自动部署流程" tabindex="-1"><a class="header-anchor" href="#二、持续集成、自动部署流程"><span>二、持续集成、自动部署流程</span></a></h2>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514815.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>  开发人员将代码push到gitlab中，触发jenkins的自动pull拉取代码，通过maven编译、打包，然后通过执行shell脚本使docker构建镜像并push到私服（或者阿里云）仓库，此操作完成后jenkins服务器上再执行SSH命令登录到部署服务器，docker从仓库（私服）拉取镜像，启动容器。整个操作流程完成。</p>
</blockquote>
<h2 id="三、使用docker部署jenkins" tabindex="-1"><a class="header-anchor" href="#三、使用docker部署jenkins"><span>三、使用docker部署Jenkins</span></a></h2>
<h3 id="_1-安装docker服务并添加docker的镜像加速源" tabindex="-1"><a class="header-anchor" href="#_1-安装docker服务并添加docker的镜像加速源"><span>1  安装docker服务并添加docker的镜像加速源</span></a></h3>
<blockquote>
<p>首先安装docker，并且添加docker的镜像加速源；添加docker的镜像源可以加速拉取镜像；</p>
</blockquote>
<p>docker安装的方式可参考：<a href="https://liucy.blog.csdn.net/article/details/123842609" target="_blank" rel="noopener noreferrer">linux（centos）中部署docker（步骤超全，含带一些发展史和一些概念）</a></p>
<p>更换docker的镜像源：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#切换到/etc/docker/</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/docker/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#创建daemon.json文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">touch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> daemon.json</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#或者直接vim daemon.json</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> daemon.json</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    "registry-mirrors"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">[</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        "https://fdsfa43fg.mirror.aliyuncs.com"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#写入完成之后保存退出重新加载配置并重启docker服务</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#保存退出</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">:wq</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#重新加载配置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> daemon-reload</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#重启docker服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启完可用docker info命令查看是否添加上</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> info</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514294.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_2-拉取jenkins镜像" tabindex="-1"><a class="header-anchor" href="#_2-拉取jenkins镜像"><span>2 拉取Jenkins镜像</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pull</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> jenkins/jenkins</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>等待拉取即可；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514701.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>拉取完成之后查看镜像</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost docker]# docker images</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">REPOSITORY</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          TAG</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                 IMAGE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ID</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            CREATED</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">             SIZE</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">jenkins/jenkins</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">     latest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">              55860ee0cd73</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">        10</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> months</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ago</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">       442MB</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-创建jenkins挂载目录并赋予权限" tabindex="-1"><a class="header-anchor" href="#_3-创建jenkins挂载目录并赋予权限"><span>3 创建Jenkins挂载目录并赋予权限</span></a></h3>
<p>3.1 稍后可以将docker内的目录挂载到此目录上，方便操作容器内文件夹而不需要进入容器</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /var/jenkins_home</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>3.2 为挂载目录赋予权限</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">chmod</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 777</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /var/jenkins_home</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_4-创建jenkins容器并运行" tabindex="-1"><a class="header-anchor" href="#_4-创建jenkins容器并运行"><span>4 创建Jenkins容器并运行</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -itd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> jenkins</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --restart=always</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --network=host</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --privileged=true</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /var/jenkins_home/:/var/jenkins_home/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/localtime:/etc/localtime</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> jenkins/jenkins:latest</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>创建并启动一个名为Jenkins的docker容器：<br>
-it是以交互式创建，-d是后台执行；<br>
--name是让其自定义一个名字jenkins（自定义）；<br>
--restart是设置开机自动重启 always开机自动重启；<br>
--network是网络模式 host是主机模式；<br>
--privileged是加上这个参数容器内就会拥有和容器外一样的root权限了；<br>
-v是将容器中的/var/jenkins_home挂载到本机的/var/jenkins_home目录，前者为本机地址，后者为容器地址 ；<br>
最后jenkins/jenkins则是本次运行使用的镜像；</p>
</blockquote>
<h3 id="_5-页面访问jenkins" tabindex="-1"><a class="header-anchor" href="#_5-页面访问jenkins"><span>5 页面访问jenkins</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ps</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -a</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>jenkins运行中页面访问</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514975.png" alt="" loading="lazy"><br>
ip:port</p>
<p><strong><font color=red>如：遇到页面访问不到的情况，可使用<code v-pre>netstat -anput | grep port</code> 查看端口是否被占用；</font></strong></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514335.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_5-1-解锁-jenkins" tabindex="-1"><a class="header-anchor" href="#_5-1-解锁-jenkins"><span>5.1 解锁 Jenkins</span></a></h4>
<p>根据提示找到jenkins的密码；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514734.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost secrets]# cat /var/jenkins_home/secrets/initialAdminPassword </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">82112870c37694a46ab4f732dafsfa0019334ef0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>将密码复制到页面上，点击继续；</p>
<h4 id="_5-2-自定义jenkins-安装推荐插件" tabindex="-1"><a class="header-anchor" href="#_5-2-自定义jenkins-安装推荐插件"><span>5.2 自定义Jenkins---安装推荐插件</span></a></h4>
<p>可选择使用<code v-pre>推荐插件</code>或<code v-pre>自定义插件</code>；推荐使用<code v-pre>推荐插件</code>。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514074.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="_5-2-1-配置镜像加速器" tabindex="-1"><a class="header-anchor" href="#_5-2-1-配置镜像加速器"><span>5.2.1 配置镜像加速器</span></a></h5>
<p>插件安装失败或速度过慢，可通过配置镜像加速解决。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#停止jenkins容器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> stop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> jenkins</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#进入jenkins挂载的文件中</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /var/jenkins_home/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#编辑配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> hudson.model.UpdateCenter.xml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#将url值修改为清华大学官方镜像地址</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#保存退出重启容器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">:wq</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> jenkins</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514138.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_5-3-创建管理用户" tabindex="-1"><a class="header-anchor" href="#_5-3-创建管理用户"><span>5.3 创建管理用户</span></a></h4>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514370.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_5-4-实例配置" tabindex="-1"><a class="header-anchor" href="#_5-4-实例配置"><span>5.4 实例配置</span></a></h4>
<p>直接保存并完成即可<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514850.png" alt="" loading="lazy"></p>
<h4 id="_5-5-开始使用" tabindex="-1"><a class="header-anchor" href="#_5-5-开始使用"><span>5.5 开始使用</span></a></h4>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514257.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="四、jenkins安装github所需插件" tabindex="-1"><a class="header-anchor" href="#四、jenkins安装github所需插件"><span>四、Jenkins安装Github所需插件</span></a></h2>
<p>需要安装几个必须的插件：<code v-pre>CloudBees Credentials</code> 、<code v-pre>GitHub API Plugin</code>、<code v-pre>SSH Credentials Plugin</code>、<code v-pre>Git client plugin</code>、<code v-pre>SCM API</code>、<code v-pre>Mailer Plugin</code> 、<code v-pre>Plain Credentials Plugin</code> 、<code v-pre>GIT plugin</code>、<code v-pre>GitHub Plugin</code>、<code v-pre>Publish Over.SSH</code> 、<code v-pre>Maven Integration</code></p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514112.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161513989.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161513444.png" alt="" loading="lazy"></p>
<h2 id="五【附加】-github生成token步骤" tabindex="-1"><a class="header-anchor" href="#五【附加】-github生成token步骤"><span>五【附加】 github生成Token步骤</span></a></h2>
<h3 id="_1-访问github并登录" tabindex="-1"><a class="header-anchor" href="#_1-访问github并登录"><span>1 访问github并登录</span></a></h3>
<p>github官网：<a href="https://github.com/" target="_blank" rel="noopener noreferrer">https://github.com/</a></p>
<p>登录：</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161513429.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161513547.png" alt="" loading="lazy"></p>
<h3 id="_2-配置personal-access-token" tabindex="-1"><a class="header-anchor" href="#_2-配置personal-access-token"><span>2 配置Personal Access Token</span></a></h3>
<blockquote>
<p>在对项目有写权限的用户上获取token进入github –&gt; setting –&gt; Developer settings –&gt;  Personal Access Token –&gt; Token –&gt; Generate new token</p>
</blockquote>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161513382.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161513306.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161513762.png" alt="" loading="lazy"></p>
<blockquote>
<p>找到tokens，新建tokens并设置读、写、执行权限</p>
</blockquote>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161513810.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161513378.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161513476.png" alt="" loading="lazy"></p>
</div></template>


