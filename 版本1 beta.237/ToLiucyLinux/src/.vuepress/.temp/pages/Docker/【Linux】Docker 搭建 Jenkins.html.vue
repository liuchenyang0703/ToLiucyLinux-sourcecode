<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514069.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<h2 id="一、jenkins到底是什么" tabindex="-1"><a class="header-anchor" href="#一、jenkins到底是什么" aria-hidden="true">#</a> 一、Jenkins到底是什么？</h2>
<blockquote>
<p>  Jenkins是一款开源 CI&amp;CD 软件，用于自动化各种任务，包括构建、测试和部署软件。支持各种运行方式，可通过系统包、Docker 或者通过一个独立的 Java 程序。下面为项目持续集成和交互的流程图</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514037.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="二、持续集成、自动部署流程" tabindex="-1"><a class="header-anchor" href="#二、持续集成、自动部署流程" aria-hidden="true">#</a> 二、持续集成、自动部署流程</h2>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514815.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>  开发人员将代码push到gitlab中，触发jenkins的自动pull拉取代码，通过maven编译、打包，然后通过执行shell脚本使docker构建镜像并push到私服（或者阿里云）仓库，此操作完成后jenkins服务器上再执行SSH命令登录到部署服务器，docker从仓库（私服）拉取镜像，启动容器。整个操作流程完成。</p>
</blockquote>
<h2 id="三、使用docker部署jenkins" tabindex="-1"><a class="header-anchor" href="#三、使用docker部署jenkins" aria-hidden="true">#</a> 三、使用docker部署Jenkins</h2>
<h3 id="_1-安装docker服务并添加docker的镜像加速源" tabindex="-1"><a class="header-anchor" href="#_1-安装docker服务并添加docker的镜像加速源" aria-hidden="true">#</a> 1  安装docker服务并添加docker的镜像加速源</h3>
<blockquote>
<p>首先安装docker，并且添加docker的镜像加速源；添加docker的镜像源可以加速拉取镜像；</p>
</blockquote>
<p>docker安装的方式可参考：<a href="https://liucy.blog.csdn.net/article/details/123842609" target="_blank" rel="noopener noreferrer">linux（centos）中部署docker（步骤超全，含带一些发展史和一些概念）<ExternalLinkIcon/></a></p>
<p>更换docker的镜像源：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#切换到/etc/docker/</span>
<span class="token builtin class-name">cd</span> /etc/docker/

<span class="token comment">#创建daemon.json文件</span>
<span class="token function">touch</span> daemon.json
<span class="token comment">#或者直接vim daemon.json</span>
<span class="token function">vim</span> daemon.json

<span class="token punctuation">{</span>
    <span class="token string">"registry-mirrors"</span>:<span class="token punctuation">[</span>
        <span class="token string">"https://fdsfa43fg.mirror.aliyuncs.com"</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">#写入完成之后保存退出重新加载配置并重启docker服务</span>
<span class="token comment">#保存退出</span>
:wq

<span class="token comment">#重新加载配置</span>
systemctl daemon-reload

<span class="token comment">#重启docker服务</span>
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启完可用docker info命令查看是否添加上</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514294.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_2-拉取jenkins镜像" tabindex="-1"><a class="header-anchor" href="#_2-拉取jenkins镜像" aria-hidden="true">#</a> 2 拉取Jenkins镜像</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull jenkins/jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等待拉取即可；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514701.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>拉取完成之后查看镜像</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost docker<span class="token punctuation">]</span><span class="token comment"># docker images</span>

REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
jenkins/jenkins     latest              55860ee0cd73        <span class="token number">10</span> months ago       442MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-创建jenkins挂载目录并赋予权限" tabindex="-1"><a class="header-anchor" href="#_3-创建jenkins挂载目录并赋予权限" aria-hidden="true">#</a> 3 创建Jenkins挂载目录并赋予权限</h3>
<p>3.1 稍后可以将docker内的目录挂载到此目录上，方便操作容器内文件夹而不需要进入容器</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /var/jenkins_home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.2 为挂载目录赋予权限</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">777</span> /var/jenkins_home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-创建jenkins容器并运行" tabindex="-1"><a class="header-anchor" href="#_4-创建jenkins容器并运行" aria-hidden="true">#</a> 4 创建Jenkins容器并运行</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token parameter variable">--name</span> jenkins <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--network</span><span class="token operator">=</span>host <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-v</span> /var/jenkins_home/:/var/jenkins_home/ <span class="token parameter variable">-v</span> /etc/localtime:/etc/localtime jenkins/jenkins:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>创建并启动一个名为Jenkins的docker容器：<br>
-it是以交互式创建，-d是后台执行；<br>
--name是让其自定义一个名字jenkins（自定义）；<br>
--restart是设置开机自动重启 always开机自动重启；<br>
--network是网络模式 host是主机模式；<br>
--privileged是加上这个参数容器内就会拥有和容器外一样的root权限了；<br>
-v是将容器中的/var/jenkins_home挂载到本机的/var/jenkins_home目录，前者为本机地址，后者为容器地址 ；<br>
最后jenkins/jenkins则是本次运行使用的镜像；</p>
</blockquote>
<h3 id="_5-页面访问jenkins" tabindex="-1"><a class="header-anchor" href="#_5-页面访问jenkins" aria-hidden="true">#</a> 5 页面访问jenkins</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>jenkins运行中页面访问</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514975.png" alt="" loading="lazy"><br>
ip:port</p>
<p><strong><font color=red>如：遇到页面访问不到的情况，可使用<code v-pre>netstat -anput | grep port</code> 查看端口是否被占用；</font></strong></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514335.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_5-1-解锁-jenkins" tabindex="-1"><a class="header-anchor" href="#_5-1-解锁-jenkins" aria-hidden="true">#</a> 5.1 解锁 Jenkins</h4>
<p>根据提示找到jenkins的密码；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514734.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost secrets<span class="token punctuation">]</span><span class="token comment"># cat /var/jenkins_home/secrets/initialAdminPassword </span>
82112870c37694a46ab4f732dafsfa0019334ef0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将密码复制到页面上，点击继续；</p>
<h4 id="_5-2-自定义jenkins-安装推荐插件" tabindex="-1"><a class="header-anchor" href="#_5-2-自定义jenkins-安装推荐插件" aria-hidden="true">#</a> 5.2 自定义Jenkins---安装推荐插件</h4>
<p>可选择使用<code v-pre>推荐插件</code>或<code v-pre>自定义插件</code>；推荐使用<code v-pre>推荐插件</code>。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514074.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="_5-2-1-配置镜像加速器" tabindex="-1"><a class="header-anchor" href="#_5-2-1-配置镜像加速器" aria-hidden="true">#</a> 5.2.1 配置镜像加速器</h5>
<p>插件安装失败或速度过慢，可通过配置镜像加速解决。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#停止jenkins容器</span>
<span class="token function">docker</span> stop jenkins

<span class="token comment">#进入jenkins挂载的文件中</span>
<span class="token builtin class-name">cd</span> /var/jenkins_home/

<span class="token comment">#编辑配置文件</span>
<span class="token function">vim</span> hudson.model.UpdateCenter.xml

<span class="token comment">#将url值修改为清华大学官方镜像地址</span>
https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json

<span class="token comment">#保存退出重启容器</span>
:wq
<span class="token function">docker</span> restart jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514138.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_5-3-创建管理用户" tabindex="-1"><a class="header-anchor" href="#_5-3-创建管理用户" aria-hidden="true">#</a> 5.3 创建管理用户</h4>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514370.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_5-4-实例配置" tabindex="-1"><a class="header-anchor" href="#_5-4-实例配置" aria-hidden="true">#</a> 5.4 实例配置</h4>
<p>直接保存并完成即可<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514850.png" alt="" loading="lazy"></p>
<h4 id="_5-5-开始使用" tabindex="-1"><a class="header-anchor" href="#_5-5-开始使用" aria-hidden="true">#</a> 5.5 开始使用</h4>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514257.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="四、jenkins安装github所需插件" tabindex="-1"><a class="header-anchor" href="#四、jenkins安装github所需插件" aria-hidden="true">#</a> 四、Jenkins安装Github所需插件</h2>
<p>需要安装几个必须的插件：<code v-pre>CloudBees Credentials</code> 、<code v-pre>GitHub API Plugin</code>、<code v-pre>SSH Credentials Plugin</code>、<code v-pre>Git client plugin</code>、<code v-pre>SCM API</code>、<code v-pre>Mailer Plugin</code> 、<code v-pre>Plain Credentials Plugin</code> 、<code v-pre>GIT plugin</code>、<code v-pre>GitHub Plugin</code>、<code v-pre>Publish Over.SSH</code> 、<code v-pre>Maven Integration</code></p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161514112.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161513989.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161513444.png" alt="" loading="lazy"></p>
<h2 id="五【附加】-github生成token步骤" tabindex="-1"><a class="header-anchor" href="#五【附加】-github生成token步骤" aria-hidden="true">#</a> 五【附加】 github生成Token步骤</h2>
<h3 id="_1-访问github并登录" tabindex="-1"><a class="header-anchor" href="#_1-访问github并登录" aria-hidden="true">#</a> 1 访问github并登录</h3>
<p>github官网：<a href="https://github.com/" target="_blank" rel="noopener noreferrer">https://github.com/<ExternalLinkIcon/></a></p>
<p>登录：</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161513429.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161513547.png" alt="" loading="lazy"></p>
<h3 id="_2-配置personal-access-token" tabindex="-1"><a class="header-anchor" href="#_2-配置personal-access-token" aria-hidden="true">#</a> 2 配置Personal Access Token</h3>
<blockquote>
<p>在对项目有写权限的用户上获取token进入github –&gt; setting –&gt; Developer settings –&gt;  Personal Access Token –&gt; Token –&gt; Generate new token</p>
</blockquote>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161513382.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161513306.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161513762.png" alt="" loading="lazy"></p>
<blockquote>
<p>找到tokens，新建tokens并设置读、写、执行权限</p>
</blockquote>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161513810.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161513378.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161513476.png" alt="" loading="lazy"></p>
</div></template>


