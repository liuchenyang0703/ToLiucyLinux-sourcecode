<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/c0aa11fd101543d0a17ef264c0609468.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>🍁<strong>博主简介</strong><br>
  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！</p>
</blockquote>
<hr>
<h2 id="jenkins的基本配置" tabindex="-1"><a class="header-anchor" href="#jenkins的基本配置" aria-hidden="true">#</a> jenkins的基本配置</h2>
<h3 id="_1、修改-jenkins-初始密码" tabindex="-1"><a class="header-anchor" href="#_1、修改-jenkins-初始密码" aria-hidden="true">#</a> 1、修改 jenkins 初始密码</h3>
<p>1  点击Jenkins的管理<br>
2  进入用户<br>
3  设置修改密码</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/31df0c79e09f4d9aa2c3f8453f237b60.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/1014ef8d72a149bf813b1335b1540e74.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/180c0f1b574343baa0097d0a05520664.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/089bf009eb8a48d08e4f89458685ac1c.png" alt="" loading="lazy"></p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/3f52f0f56e2b4cca90a33d4d6ec77762.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/f12898c529a548f48c326a701d2b1bdc.png" alt="" loading="lazy"></p>
<h3 id="_2、安装-jenkins-必要插件" tabindex="-1"><a class="header-anchor" href="#_2、安装-jenkins-必要插件" aria-hidden="true">#</a> 2、安装 Jenkins 必要插件</h3>
<p>在 Jenkins 首页中，点击左侧的 Manage Jenkins&gt;&gt;Manage Plugins&gt;&gt;可选插件，在过滤搜 索框中输入要安装的 <font color=red>Publish Over SSH</font> 、  <font color=red>Maven Integration</font> 插件，并勾中其左侧的复 选框，点击“直接安装”即可开始插件安装操作。</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/c31abbbda15f4b1295bb326ff9c220e8.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/38d4ddbcd3ef4eb49b5de8dae87ccf14.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/4346fbf977a54640b40865794391f933.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/1d3c7745bc8f46c081bbc016daa4321b.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/18eb45bda8ec4fc2b45e575e18a9875b.png" alt="" loading="lazy"></p>
<h3 id="_3、配置-jenkins-并发执行数量" tabindex="-1"><a class="header-anchor" href="#_3、配置-jenkins-并发执行数量" aria-hidden="true">#</a> 3、配置 jenkins 并发执行数量</h3>
<p>用于提高提高执行效率</p>
<font color=red>Manage Jenkins</font> >> <font color=red>Configure System</font> >> <font color=red>Maven 项目配置</font><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/1268310994bc41c49751155aad084ad4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>并发执行者数量  如果构建任务数量多的时候,我们可以在同一时间内构建多个；<br>
默认是2个</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/bc31c6fcb70a47b4a5af3b95ac2ecd8f.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/0536f9383e9943fb831f4268e23300f8.png" alt="" loading="lazy"></p>
<h3 id="_4、配置邮件地址" tabindex="-1"><a class="header-anchor" href="#_4、配置邮件地址" aria-hidden="true">#</a> 4、配置邮件地址</h3>
<p>在测试完成后，主动发邮件告知测试情况</p>
<font color=red>Manage Jenkins</font> >> <font color=red>Configure System</font> >> <font color=red>Jenkins Location</font><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/ca9de6d6a8804980a4d2e38556d88705.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/e2d16418a1f14ca3a8988f355dc7e81c.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/c60e8c9508b64ea09da14785f0a25574.png" alt="" loading="lazy"></p>
<h2 id="基于-jenkins-自动打包并部署-tomcat-环境" tabindex="-1"><a class="header-anchor" href="#基于-jenkins-自动打包并部署-tomcat-环境" aria-hidden="true">#</a> 基于 Jenkins 自动打包并部署 Tomcat 环境</h2>
<h3 id="传统网站部署的流程" tabindex="-1"><a class="header-anchor" href="#传统网站部署的流程" aria-hidden="true">#</a> 传统网站部署的流程</h3>
<blockquote>
<p>  在运维过程中，网站部署是运维的工作之一。传统的网站部署的流程大致分为:需求分析--&gt;原型设计--&gt;开发代码--&gt;提交代码--&gt;内网部署--&gt;内网测试--&gt;确认上线--&gt;备份数据--&gt;外网更新--&gt;外网测试--&gt;发布完成。如果在内网测试时发现代码有异常，返回代码开发人员名字,调整代码；如果在外网测试时发现外网部署的代码有异常，可以及时进行网站回滚。</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/0e1de9e7a3f3449ea51afebec2c01efa.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/c9acdc7b28b1472eb27e3ee224475e1e.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<font color=teal>**传统代码上线的过程**</font><blockquote>
<p>  开发人员发起代码上线的需求（邮件附件中包含开发做好的 WAR 或者 JAR 包、SQL 文件）--&gt;运维人员连接线上负载调度器（Nginx）--&gt; 隔离一组服务器（Tomcat）--&gt; 连接服务器（Tomcat）--&gt; 备份旧代码（tar 打包）--&gt; 删除旧代码目录 --&gt; 上传新的 WAR 包 --&gt; 外网测试 --&gt; 测试不通过则通过备份回滚代码 --&gt; 测试通过则利用 rsync 的脚本推送代码到其他服务器--&gt; 统一外网测试 --&gt;连接调度器恢复隔离机制 --&gt; 隔离另一组服务器实施上线步骤 --&gt; 上线完成。</p>
</blockquote>
<h3 id="主流网站部署的流程" tabindex="-1"><a class="header-anchor" href="#主流网站部署的流程" aria-hidden="true">#</a> 主流网站部署的流程</h3>
<blockquote>
<p>  目前主流网站部署方法：通过 Hudson/Jenkins 工具平台实现全自动部署+测试，是一个可扩展的持续集成引擎，属于开源软件项目，旨在提供一个开放易用的软件平台，使软件的持续集成变成可能。Jenkins 非常易于安装和配置，简单易用。</p>
<ul>
<li>开发人员：写好代码，不需要自己进行源码编译、打包等工作，直接将代码分支存放在SVN、Git 仓库即可。</li>
<li>运维人员：减轻人工干预的错误率，同时解放运维人员繁杂的上传代码、手动备份、更新等操作。</li>
<li>测试人员：可以通过 Jenkins 进行简单的代码及网站测试。</li>
</ul>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/a6d999bd9fb647b4aadf67092587c348.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>  代码仓库中有Jenkins可直接进行打包和部署不需要开发人员进行打包,只要选择分支上的代码需要上线,会自动打包和构建.部署在内网测试的测试结果也会反馈给开发。</p>
<h2 id="jenkins工作原理及实验准备" tabindex="-1"><a class="header-anchor" href="#jenkins工作原理及实验准备" aria-hidden="true">#</a> Jenkins工作原理及实验准备</h2>
<blockquote>
<p>  Jenkins 的工作原理是先将源代码从 SVN/Git 版本控制系统中拷贝一份到本地，然后根据设置的脚本调用 Maven 进行 build（构建）。整个系统的关键就是 build 脚本，build脚本告诉 Jenkins 在一次集成中需要执行的任务。</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/f55e3534b05d4bcc807c4199587fc0e1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>1、开发人员写代码 将代码往服务器上推送<br>
2、Jenkins负责从Git服务器里面拉取开发人员提交的代码<br>
3、Jenkins拉取代码之后会对代码进行一个构建,服务器上构建后直接部署在web上<br>
4、而我们用户需要做的事情就是访问web,对其进行一个测试</p>
<p>首先准备三台服务器</p>
<table>
<thead>
<tr>
<th>操作系统</th>
<th>IP地址</th>
<th>主机名</th>
<th>参与角色</th>
</tr>
</thead>
<tbody>
<tr>
<td>CentOS7.7</td>
<td>172.16.11.203</td>
<td>git</td>
<td>git服务器</td>
</tr>
<tr>
<td>CentOS7.7</td>
<td>172.16.11.202</td>
<td>jenkins</td>
<td>jenkins服务器</td>
</tr>
<tr>
<td>CentOS7.7</td>
<td>172.16.11.204</td>
<td>tomcat</td>
<td>tomcat服务器</td>
</tr>
</tbody>
</table>
<p>其次关闭防火墙和沙盒</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#关闭防火墙</span>
systemctl stop firewalld
iptables <span class="token parameter variable">-F</span>
<span class="token comment">#关闭沙盒</span>
setenforce <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1、配置-git-主机" tabindex="-1"><a class="header-anchor" href="#_1、配置-git-主机" aria-hidden="true">#</a> 1、配置 git 主机</h3>
<p>安装 git 并配置 git 用户信息</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#安装git</span>
<span class="token punctuation">[</span>root@git ~<span class="token punctuation">]</span><span class="token comment"># yum -y install git</span>

<span class="token comment">#添加git用户</span>
<span class="token punctuation">[</span>root@git ~<span class="token punctuation">]</span><span class="token comment"># useradd git</span>

<span class="token comment">#git设置密码</span>
<span class="token punctuation">[</span>root@git ~<span class="token punctuation">]</span><span class="token comment"># echo "123456" | passwd --stdin git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建本地仓库 probe</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#切换到git用户</span>
<span class="token punctuation">[</span>root@git ~<span class="token punctuation">]</span><span class="token comment"># su - git</span>
上一次登录：五 <span class="token number">10</span> 月 <span class="token number">21</span> <span class="token number">15</span>:49:10 CST 2022pts/0 上

<span class="token comment">#创建probe.git目录</span>
<span class="token punctuation">[</span>git@git ~<span class="token punctuation">]</span>$ <span class="token function">mkdir</span> probe.git

<span class="token comment">#切换到probe.git目录</span>
<span class="token punctuation">[</span>git@git ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">cd</span> probe.git

<span class="token comment">#初始化空的 Git 版本库于 /home/git/probe.git/</span>
<span class="token punctuation">[</span>git@git probe.git<span class="token punctuation">]</span>$ <span class="token function">git</span> <span class="token parameter variable">--bare</span> init

<span class="token comment">#退出git用户</span>
<span class="token punctuation">[</span>git@git probe.git<span class="token punctuation">]</span>$ <span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>克隆项目代码同步到自己创建的仓库中</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@git ~<span class="token punctuation">]</span><span class="token comment"># git clone https://github.com/psi-probe/psi-probe</span>
<span class="token punctuation">[</span>root@git ~<span class="token punctuation">]</span><span class="token comment"># git clone git@172.16.11.203:/home/git/probe.git</span>
<span class="token punctuation">[</span>root@git ~<span class="token punctuation">]</span><span class="token comment"># cp -rf psi-probe/* probe/</span>
<span class="token punctuation">[</span>root@git ~<span class="token punctuation">]</span><span class="token comment"># cd probe/</span>
<span class="token punctuation">[</span>root@git probe<span class="token punctuation">]</span><span class="token comment"># git add . </span>

<span class="token comment">#新安装的git要配置相关信息</span>
<span class="token punctuation">[</span>root@git probe<span class="token punctuation">]</span><span class="token comment"># git config --global user.email "admin@163.com"</span>
<span class="token punctuation">[</span>root@git probe<span class="token punctuation">]</span><span class="token comment"># git config --global user.name "admin"</span>
<span class="token punctuation">[</span>root@git probe<span class="token punctuation">]</span><span class="token comment"># git commit -m "all probe"</span>
<span class="token punctuation">[</span>root@git probe<span class="token punctuation">]</span><span class="token comment"># git push origin master</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、配置-jenkins-主机" tabindex="-1"><a class="header-anchor" href="#_2、配置-jenkins-主机" aria-hidden="true">#</a> 2、配置 jenkins 主机</h3>
<p>① 给Jenkins添加验证凭据<br>
在 Jenkins 的首页中点击“<font color=red>凭据</font>”进入凭据页面；<br>
注：有是版本不一样，位置不一样，根据自己的实际版本来定；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/b5501484432b4864a546a22c05239733.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>在凭据页面中，点击“Jenkins”跳转到“系统”页面。点击左侧导航栏中“添加域”，跳转到“添加域”页面。在该页面创建域名为“crushlinux”并点击“ok”完成配置。</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/0ceb65ac9724444386fefb2645e5d758.png" alt="" loading="lazy"><br>
在添加域里面添加的用户名的密码是web服务器的<br>
Jenkins要往web服务器上面去部署,所以Jenkins要有权限去远程连接web服务器</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/4b8a3964fa7247fab871e3d91296d02c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>点击左侧导航栏中的“添加凭据”。</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/07a62894b8934b61b6afc09446839d2a.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/467bea9c13154a58966118bec6e302af.png" alt="" loading="lazy"></p>
<p>填写以上数据后，点击“确定”就可以查看到新增的远程 web 主机账号。</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/a8e353a8c076438f91afa937451d525a.png" alt="" loading="lazy"><br>
② 添加 Publish Over SSH 远程主机<br>
在主机名为 <font color=red>web</font> 的主机上上创建远程目录。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#目录的作用jenkins就是判断目录是否存在</span>
<span class="token punctuation">[</span>root@tomcat ~<span class="token punctuation">]</span><span class="token comment"># mkdir /data</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>  在 Jenkins 首页中点击“Manage Jenkins”-&gt;“Configure System”-“Publish overSSH”-&gt;“SSH Servers”-&gt;“增加”选项按钮，添加 SSH 远程主机。如图 3.13 所示，输入 Name、Hostname、Username 等必要信息后，点击“高级”选项按钮-&gt;勾选“Use Passwordauthentication,or use a different key”选项-&gt;输入“远程主机登录密码”-&gt;“TestConfiguration”测试远程主机配置。测试远程主机配置成功后点击“保存”按钮即可。</p>
</blockquote>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/ffc515317d4b40c2bcaa887f6970f932.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/5049adc621bd45319bcd3ff09b4f4cd1.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/b09ad61c7a984e0db8455aee1d25dd58.png" alt="" loading="lazy"></p>
<p>③ 配置 Maven、JDK、Git 环境<br>
Jenkins需要构建任务还要去配置Maven JDK Git 集成的工具</p>
<blockquote>
<p>  在 Jenkins 首页中点击“Manage Jenkins”-&gt;“Global Tool Configuration”-&gt;“JDK”-&gt;新增“JDK”，设置 JDK 别名为”JDK1.8”。去掉“Install automatically”选项，设置 “JAVA_HOME”为本案例中 JDK 实际安装路径。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@jenkins ~<span class="token punctuation">]</span><span class="token comment"># tar xf jdk-8u191-linux-x64.tar.gz</span>
<span class="token punctuation">[</span>root@jenkins ~<span class="token punctuation">]</span><span class="token comment"># mv jdk1.8.0_191/ /usr/local/java</span>
<span class="token punctuation">[</span>root@jenkins ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/profile</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/java/
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/lib/tools.jar:<span class="token variable">$JAVA_HOME</span>/lib/dt.jar
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>
<span class="token punctuation">[</span>root@jenkins ~<span class="token punctuation">]</span><span class="token comment"># rm -rf /usr/bin/java</span>
<span class="token punctuation">[</span>root@jenkins ~<span class="token punctuation">]</span><span class="token comment"># source /etc/profile</span>
<span class="token punctuation">[</span>root@jenkins ~<span class="token punctuation">]</span><span class="token comment"># java -version</span>
<span class="token function">java</span> version <span class="token string">"1.8.0_191"</span>
Java<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> SE Runtime Environment <span class="token punctuation">(</span>build <span class="token number">1.8</span>.0_191-b12<span class="token punctuation">)</span>
Java HotSpot<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">25.191</span>-b12, mixed mode<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/b6a627195fd14c9dbf4b1ff2eafcea3e.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/9fbcfb59dc5a42bfb4f7ff05582a3e0a.png" alt="" loading="lazy"></p>
<p>  在“Global Tool Configuration”配置界面中找到 Maven 配置选项，然后点击“新增Maven”并设置别名为“Maven3.5”。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@jenkins ~<span class="token punctuation">]</span><span class="token comment"># tar xf apache-maven-3.5.0-bin.tar.gz</span>
<span class="token punctuation">[</span>root@jenkins ~<span class="token punctuation">]</span><span class="token comment"># mv apache-maven-3.5.0 /usr/local/maven-3.5.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>为 maven 更换阿里云镜像站</p>
<p>在进行打包的时候Maven会下载很多的jar包默认的下载的地址是apache官网地址  会下载很慢更改Maven的下载地址</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@jenkins ~<span class="token punctuation">]</span><span class="token comment"># vim /usr/local/maven-3.5.0/conf/settings.xml</span>
	<span class="token operator">&lt;</span>mirror<span class="token operator">></span>
		<span class="token operator">&lt;</span>id<span class="token operator">></span>nexus-aliyun<span class="token operator">&lt;</span>/id<span class="token operator">></span>
		<span class="token operator">&lt;</span>mirrorOf<span class="token operator">></span>central<span class="token operator">&lt;</span>/mirrorOf<span class="token operator">></span>
		<span class="token operator">&lt;</span>name<span class="token operator">></span>Nexus aliyun<span class="token operator">&lt;</span>/name<span class="token operator">></span>
		<span class="token operator">&lt;</span>url<span class="token operator">></span>http://maven.aliyun.com/nexus/content/groups/public<span class="token operator">&lt;</span>/url<span class="token operator">></span>
	<span class="token operator">&lt;</span>/mirror<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后可能会报错，可以使用先使用apache官网下载地质下载jar包</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/310a8292ff074fb4834db827c7697074.png" alt="" loading="lazy"><br>
Git 配置</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@jenkins ~<span class="token punctuation">]</span><span class="token comment"># which git</span>
/usr/bin/git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/dfae6c3f292f4c9e83f973a179a829bf.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>以上全局基本配置完毕后，点击保存即可完成。</p>
<h3 id="_3、配置-web-主机" tabindex="-1"><a class="header-anchor" href="#_3、配置-web-主机" aria-hidden="true">#</a> 3、配置 web 主机</h3>
<p>部署web   部署一个Java的项目所以要部署tomcat</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@tomcat ~<span class="token punctuation">]</span><span class="token comment"># tar xf apache-tomcat-8.5.16.tar.gz</span>
<span class="token punctuation">[</span>root@tomcat ~<span class="token punctuation">]</span><span class="token comment"># tar xf jdk-8u191-linux-x64.tar.gz</span>
<span class="token punctuation">[</span>root@tomcat ~<span class="token punctuation">]</span><span class="token comment"># mv jdk1.8.0_191/ /usr/local/java</span>
<span class="token punctuation">[</span>root@tomcat ~<span class="token punctuation">]</span><span class="token comment"># mv apache-tomcat-8.5.16 /usr/local/tomcat</span>
<span class="token punctuation">[</span>root@tomcat ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/profile</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/java/
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/lib/tools.jar:<span class="token variable">$JAVA_HOME</span>/lib/dt.jar
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>
<span class="token punctuation">[</span>root@tomcat ~<span class="token punctuation">]</span><span class="token comment"># source /etc/profile</span>
<span class="token punctuation">[</span>root@tomcat ~<span class="token punctuation">]</span><span class="token comment"># java -version</span>
<span class="token function">java</span> version <span class="token string">"1.8.0_191"</span>
Java<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> SE Runtime Environment <span class="token punctuation">(</span>build <span class="token number">1.8</span>.0_191-b12<span class="token punctuation">)</span>
Java HotSpot<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">25.191</span>-b12, mixed mode<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发布公钥给 jenkins 主机</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@tomcat ~<span class="token punctuation">]</span><span class="token comment"># ssh-keygen</span>
<span class="token punctuation">[</span>root@tomcat ~<span class="token punctuation">]</span><span class="token comment"># ssh-copy-id 172.16.11.202</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>web主机将公钥发送给Jenkins</p>
<h3 id="_4、新建-maven-项目" tabindex="-1"><a class="header-anchor" href="#_4、新建-maven-项目" aria-hidden="true">#</a> 4、新建 Maven 项目</h3>
<p>  在以上配置完成后，回到 Jenkins 首页，选择“新建任务”，然后输入一个任务名称“probe”，并选中“Maven project”点击当前页面下方的“确定”按钮。</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/ba446e99d12640dbaf94928c504982b0.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/a2086736504c46de9f5bd13d6b1e05aa.png" alt="" loading="lazy"></p>
<p>在点击“确定”按钮后，选择“源码管理”选中“Git”,配置“RepositoriesURL”为git@172.16.11.203:/home/git/probe.g</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/9531bf1d66204f0f848f829e515c5298.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>主机 Jenkins 默认用 jenkins 用户去连接 git，所以用 jenkins 用户生成密钥对，并发送给 git。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@jenkins ~<span class="token punctuation">]</span><span class="token comment"># id jenkins</span>
<span class="token assign-left variable">uid</span><span class="token operator">=</span><span class="token number">988</span><span class="token punctuation">(</span>jenkins<span class="token punctuation">)</span> <span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">982</span><span class="token punctuation">(</span>jenkins<span class="token punctuation">)</span> 组<span class="token operator">=</span><span class="token number">982</span><span class="token punctuation">(</span>jenkins<span class="token punctuation">)</span>
<span class="token punctuation">[</span>root@jenkins ~<span class="token punctuation">]</span><span class="token comment"># su -s /bin/bash jenkins</span>
bash-4.2$ ssh-keygen
bash-4.2$ ssh-copy-id git@172.16.11.203
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Jenkins将公钥文件发送给git用户；我们要注意的是Jenkins运行是一个程序用户，无法登录的我们要-s 指定/bin/bash 将秘钥对发送给指定的git 用户；</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/fe51e67d200c42e3ae7f44f60f9b63d0.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/a7693fd32be842e182ec0aaf3a59be3d.png" alt="" loading="lazy"></p>
<p>选择“构建后操作“中的“send build artfacts over SSH” “Exec command”中执行命令的含义是:在自动部署前先杀掉 Tomcat 进程，然后删除 war 包，用 scp 远程拷贝命令将Jenkins 自动打包好的项目 war 包拷贝到当前 Tomcat 应用目录。 然后重启 Tomcat 。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">scp</span> <span class="token number">172.16</span>.11.202:/var/lib/jenkins/workspace/probe/psi-probe-web/target/probe.war
/usr/local/tomcat/webapps/
/usr/local/tomcat/bin/startup.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将Jenkins的war包推送到tomcat的webapps目录下自动解压</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/1e064921f15547118cd6beefdbf1bbd4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>  以上全部配置完成后，点击保存即可。然后点击刚才创建的“probe”-&gt;“Build Now”直至项目构建完成。构建过程可以在“控制台输出”中查看到。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/cc0ff45a0cba4c3fa6ac1bc0aa93a84f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/c97a4bda21064866932f00524253c3b6.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/1577f744013b40b6a572524cb3077545.png" alt="" loading="lazy"></p>
<h3 id="_5、验证-jenkins-自动打包部署结果" tabindex="-1"><a class="header-anchor" href="#_5、验证-jenkins-自动打包部署结果" aria-hidden="true">#</a> 5、验证 Jenkins 自动打包部署结果</h3>
<p>在 web 主机上查看 probe 目录是否被拷贝到/usr/local/tomcat/webapps 目录下</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@tomcat ~<span class="token punctuation">]</span><span class="token comment"># ls /usr/local/tomcat/webapps/</span>
docs examples host-manager manager probe probe.war ROOT
<span class="token punctuation">[</span>root@tomcat ~<span class="token punctuation">]</span><span class="token comment"># ls /usr/local/tomcat/webapps/probe -l</span>
总用量 <span class="token number">20</span>
drwxr-x--- <span class="token number">3</span> root root <span class="token number">66</span> <span class="token number">6</span> 月 <span class="token number">20</span> <span class="token number">12</span>:12 css
drwxr-x--- <span class="token number">2</span> root root <span class="token number">8192</span> <span class="token number">6</span> 月 <span class="token number">20</span> <span class="token number">12</span>:12 flags
-rw-r----- <span class="token number">1</span> root root <span class="token number">536</span> <span class="token number">6</span> 月 <span class="token number">20</span> 09:55 index.jsp
drwxr-x--- <span class="token number">3</span> root root <span class="token number">148</span> <span class="token number">6</span> 月 <span class="token number">20</span> <span class="token number">12</span>:12 js
drwxr-x--- <span class="token number">3</span> root root <span class="token number">76</span> <span class="token number">6</span> 月 <span class="token number">20</span> <span class="token number">12</span>:12 META-INF
drwxr-x--- <span class="token number">6</span> root root <span class="token number">4096</span> <span class="token number">6</span> 月 <span class="token number">20</span> <span class="token number">12</span>:12 WEB-INF
从以上结果来看，Jenkins 已把打好的 probe war 包拷贝过来了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从构建后的执行命令可以看出，Tomcat 已经重新启动，通过浏览器访问测试 probe 监控系统。<a href="http://172.16.11.204:8080/probe%E3%80%82" target="_blank" rel="noopener noreferrer">http://172.16.11.204:8080/probe。<ExternalLinkIcon/></a></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/48bfabbd45b9427699338c1b235d0214.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@tomcat ~<span class="token punctuation">]</span><span class="token comment"># vim /usr/local/tomcat/conf/tomcat-users.xml</span>
<span class="token operator">&lt;</span>role <span class="token assign-left variable">rolename</span><span class="token operator">=</span><span class="token string">"manager-gui"</span>/<span class="token operator">></span>
<span class="token operator">&lt;</span>role <span class="token assign-left variable">rolename</span><span class="token operator">=</span><span class="token string">"admin-gui"</span>/<span class="token operator">></span>
<span class="token operator">&lt;</span>user <span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token string">"tomcat"</span> <span class="token assign-left variable">password</span><span class="token operator">=</span><span class="token string">"tomcat"</span> <span class="token assign-left variable">roles</span><span class="token operator">=</span><span class="token string">"manager-gui,admin-gui"</span>/<span class="token operator">></span>
<span class="token operator">&lt;</span>/tomcat-users<span class="token operator">></span> <span class="token comment"># 在此行前加入上面三行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@tomcat ~<span class="token punctuation">]</span><span class="token comment"># vim /usr/local/tomcat/webapps/manager/META-INF/context.xml</span>
<span class="token operator">&lt;</span><span class="token operator">!</span>-- <span class="token operator">&lt;</span>Valve <span class="token assign-left variable">className</span><span class="token operator">=</span><span class="token string">"org.apache.catalina.valves.RemoteAddrValve"</span> <span class="token assign-left variable">allow</span><span class="token operator">=</span><span class="token string">"127\.\d+\.\d+\.\d+|::1|0:0:0:0:0:0:0:1"</span> /<span class="token operator">></span> --<span class="token operator">></span>
<span class="token punctuation">[</span>root@tomcat ~<span class="token punctuation">]</span><span class="token comment"># /usr/local/tomcat/bin/shutdown.sh</span>
<span class="token punctuation">[</span>root@tomcat ~<span class="token punctuation">]</span><span class="token comment"># /usr/local/tomcat/bin/startup.sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/9bc10a1d18b442a8a758d6b9828daf40.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>至此，Jenkins 自动打包部署完毕。</p>
<h2 id="基于-jenkins-自动打包并部署-docker-环境" tabindex="-1"><a class="header-anchor" href="#基于-jenkins-自动打包并部署-docker-环境" aria-hidden="true">#</a> 基于 Jenkins 自动打包并部署 docker 环境</h2>
<h3 id="_1、安装-docker-ce" tabindex="-1"><a class="header-anchor" href="#_1、安装-docker-ce" aria-hidden="true">#</a> 1、安装 docker-ce</h3>
<p>在 172.16.11.204机器上，构建 tomcat 基础镜像。在构建基础镜像之前需要先安装 Docker与 JDK。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@docker ~<span class="token punctuation">]</span><span class="token comment"># wget -O /etc/yum.repos.d/CentOS-Base.repo</span>
http://mirrors.aliyun.com/repo/Centos-7.repo
<span class="token punctuation">[</span>root@docker ~<span class="token punctuation">]</span><span class="token comment"># yum -y install yum-utils device-mapper-persistent-data lvm2</span>
<span class="token punctuation">[</span>root@docker ~<span class="token punctuation">]</span><span class="token comment"># yum-config-manager --add-repo</span>
http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
<span class="token punctuation">[</span>root@docker ~<span class="token punctuation">]</span><span class="token comment"># ls /etc/yum.repos.d/</span>
backup CentOS-Base.repo CentOS-Media.repo docker-ce.repo

<span class="token punctuation">[</span>root@docker ~<span class="token punctuation">]</span><span class="token comment"># yum -y install docker-ce</span>
<span class="token punctuation">[</span>root@docker ~<span class="token punctuation">]</span><span class="token comment"># systemctl start docker</span>
<span class="token punctuation">[</span>root@docker ~<span class="token punctuation">]</span><span class="token comment"># systemctl enable docker</span>
<span class="token punctuation">[</span>root@docker ~<span class="token punctuation">]</span><span class="token comment"># docker version</span>
Client:
Version: <span class="token number">18.09</span>.6
API version: <span class="token number">1.39</span>
Go version: go1.10.8
Git commit: 481bc77156
Built: Sat May <span class="token number">4</span> 02:34:58 <span class="token number">2019</span>
OS/Arch: linux/amd64
Experimental: <span class="token boolean">false</span>
Server: Docker Engine - Community
Engine:
Version: <span class="token number">18.09</span>.6
API version: <span class="token number">1.39</span> <span class="token punctuation">(</span>minimum version <span class="token number">1.12</span><span class="token punctuation">)</span>
Go version: go1.10.8
Git commit: 481bc77
Built: Sat May <span class="token number">4</span> 02:02:43 <span class="token number">2019</span>
OS/Arch: linux/amd64
Experimental: false/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、阿里云镜像加速器" tabindex="-1"><a class="header-anchor" href="#_2、阿里云镜像加速器" aria-hidden="true">#</a> 2、阿里云镜像加速器</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@docker ~<span class="token punctuation">]</span><span class="token comment"># cat &lt;&lt; END > /etc/docker/daemon.json</span>
<span class="token punctuation">{</span> <span class="token string">"registry-mirrors"</span>:<span class="token punctuation">[</span> <span class="token string">"https://nyakyfun.mirror.aliyuncs.com"</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
END
<span class="token punctuation">[</span>root@docker ~<span class="token punctuation">]</span><span class="token comment"># systemctl daemon-reload</span>
<span class="token punctuation">[</span>root@docker ~<span class="token punctuation">]</span><span class="token comment"># systemctl restart docker</span>
<span class="token punctuation">[</span>root@docker ~<span class="token punctuation">]</span><span class="token comment"># cat centos-7-x86_64.tar.gz | docker import - centos:7</span>
sha256:58584b57ef9c5545816baaf39dd089d04c671c9faa1414e85fa245b167416603
<span class="token punctuation">[</span>root@docker ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY TAG IMAGE ID CREATED
SIZE
centos <span class="token number">7</span> 58584b57ef9c <span class="token number">11</span> seconds ago
589MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、构建-tomcat-基础镜像" tabindex="-1"><a class="header-anchor" href="#_3、构建-tomcat-基础镜像" aria-hidden="true">#</a> 3、构建 tomcat 基础镜像</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@docker ~<span class="token punctuation">]</span><span class="token comment"># mkdir docker-tomcat</span>
<span class="token punctuation">[</span>root@docker ~<span class="token punctuation">]</span><span class="token comment"># cd docker-tomcat</span>
<span class="token punctuation">[</span>root@docker docker-tomcat<span class="token punctuation">]</span><span class="token comment"># ls</span>
apache-tomcat-8.5.16.tar.gz jdk-8u191-linux-x64.tar.gz
<span class="token punctuation">[</span>root@docker docker-tomcat<span class="token punctuation">]</span><span class="token comment"># cat Dockerfile</span>
FROM centos:7
MAINTAINER from crushlinux <span class="token operator">&lt;</span>crushlinux@163.com<span class="token operator">></span>
<span class="token comment">#copy jdk and tomcat into image</span>
ADD ./apache-tomcat-8.5.16.tar.gz /usr/local/
ADD ./jdk-8u191-linux-x64.tar.gz /usr/local
<span class="token comment">#set variable</span>
ENV JAVA_HOME /usr/local/jdk1.8.0_191
ENV <span class="token environment constant">PATH</span> <span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>
<span class="token comment">#container starts up</span>
ENTRYPOINT /usr/local/apache-tomcat-8.5.16/bin/startup.sh <span class="token operator">&amp;&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-F</span>
/usr/local/apache-tomcat-8.5.16/logs/catalina.out
<span class="token punctuation">[</span>root@docker docker-tomcat<span class="token punctuation">]</span><span class="token comment"># docker build -t tomcat:v1 . [root@docker docker-tomcat]# docker images</span>
REPOSITORY TAG IMAGE ID CREATED
SIZE
tomcat v1 1f25cb55c54b <span class="token number">23</span> seconds ago
999MB
centos <span class="token number">7</span> 58584b57ef9c <span class="token number">8</span> minutes ago
589MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、构建一个-maven-项目" tabindex="-1"><a class="header-anchor" href="#_4、构建一个-maven-项目" aria-hidden="true">#</a> 4、构建一个 Maven 项目</h3>
<p>在以上配置完成后，回到 Jenkins 首页，选择“新建任务”，然后输入一个任务名称“probe-docker”，并选择“Maven project”配置项，点击当前页面下方的“确定”按钮。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/ff31479639bc4487a164c97bd147c9de.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>在点击“确定”按钮，选择“源码管理”并选中“Git”,设置“Repository URL”地址。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/d9de0fe87e814d16b8632b1a41575683.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>选择“Build”-&gt; clean package -Dmaven.test.skip=true</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/87414ec4de184fb694c46dc2b9541de3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>在上一步后面选择“构建后操作”中的“Send build artfacts over SSH”选项并进行。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">scp</span> <span class="token number">172.16</span>.11.202: /var/lib/jenkins/workspace/probe/psi-probe-web/target/probe.war /data/
<span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token parameter variable">--name</span> tomcat-test <span class="token parameter variable">-p</span> <span class="token number">8090</span>:8080 <span class="token parameter variable">-v</span> /data:/usr/local/apache-tomcat-8.5.16/webapps tomcat:v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/898a8efe06b948f0b81711f9aca80d3c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>  以上全部配置完成后，点击保存即可。然后点击刚才创建的工程任务“probe-docker “-&gt;” Build new”直至任务构建完成。开始构建过程中可以点击进度条查看</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/ac1649f7f969422f92b76e35770f9df2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>  可以看到此工程任务已构建成功，并且在构建后，创建用于 docker 项目的 Docker Web环境命令也执行成功。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@tomcat ~<span class="token punctuation">]</span><span class="token comment"># ls /data/</span>
probe probe.war
<span class="token punctuation">[</span>root@tomcat ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID IMAGE COMMAND CREATED
STATUS PORTS
NAMESac8fefaac75f tomcat:v1 <span class="token string">"/bin/sh -c '/usr/lo…"</span> <span class="token number">39</span>
seconds ago Up <span class="token number">37</span> seconds <span class="token number">0.0</span>.0.0:8090-<span class="token operator">></span><span class="token number">808</span>
<span class="token number">0</span>/tcp tomcat-test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/eec5312712d9417a8f7645fbdbe5474f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="基于-jenkins-自动化部署-php-环境" tabindex="-1"><a class="header-anchor" href="#基于-jenkins-自动化部署-php-环境" aria-hidden="true">#</a> 基于 Jenkins 自动化部署 PHP 环境</h2>
<p>准备 git 仓库</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@git ~<span class="token punctuation">]</span><span class="token comment"># su - git</span>
上一次登录：五 <span class="token number">10</span> 月 <span class="token number">21</span> <span class="token number">11</span>:40:59 CST 2022pts/0 上
<span class="token punctuation">[</span>git@git ~<span class="token punctuation">]</span>$ <span class="token function">mkdir</span> php.git
<span class="token punctuation">[</span>git@git ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">cd</span> php.git
<span class="token punctuation">[</span>git@git php.git<span class="token punctuation">]</span>$ <span class="token function">git</span> <span class="token parameter variable">--bare</span> init
初始化空的 Git 版本库于 /home/git/php.git/
<span class="token punctuation">[</span>git@git php.git<span class="token punctuation">]</span>$ <span class="token builtin class-name">exit</span>
登出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上传代码到仓库</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@git ~<span class="token punctuation">]</span><span class="token comment"># git clone git@172.16.11.203:/home/git/php.git</span>
正克隆到 <span class="token string">'php'</span><span class="token punctuation">..</span>. git@172.16.11.203<span class="token string">'s password:
warning: 您似乎克隆了一个空版本库。
[root@git ~]# cd php/
[root@git php]# cat &lt;&lt; EOF > index.php
&lt;?php
phpinfo();
?>
EOF
[root@git php]# git add . [root@git php]# git commit -m "all"
[master（根提交） 4ec0ba3] all
1 file changed, 3 insertions(+)
create mode 100644 index.php
[root@git php]# git push origin master
git@192.168.200.111'</span>s password:
Counting objects: <span class="token number">3</span>, done. Writing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">3</span>/3<span class="token punctuation">)</span>, <span class="token number">218</span> bytes <span class="token operator">|</span> <span class="token number">0</span> bytes/s, done. Total <span class="token number">3</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>
To git@172.16.11.203:/home/git/php.git * <span class="token punctuation">[</span>new branch<span class="token punctuation">]</span> master -<span class="token operator">></span> master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署 web 主机环境</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@web ~<span class="token punctuation">]</span><span class="token comment"># yum install -y httpd mariadb-server mariadb mariadb-devel php php-mysql</span>
<span class="token punctuation">[</span>root@web ~<span class="token punctuation">]</span><span class="token comment"># systemctl start httpd</span>
<span class="token punctuation">[</span>root@web ~<span class="token punctuation">]</span><span class="token comment"># systemctl start mariadb</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/838544d4119f4096be8a5803b722762e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>Jenkins 主机将密钥发布到 web 主机</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@jenkins ~<span class="token punctuation">]</span><span class="token comment"># su -s /bin/bash jenkins</span>
bash-4.2$ ssh-keygen
bash-4.2$ ssh-copy-id root@172.16.11.204
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基于-rsync-部署" tabindex="-1"><a class="header-anchor" href="#基于-rsync-部署" aria-hidden="true">#</a> 基于 rsync 部署</h3>
<p>创建一个 Freestyle project</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/e4cc7fc51d7840228ed59865513edf2b.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/1d80709ea27e4a8e88fbd460880c2b28.png" alt="" loading="lazy"></p>
<p>rsync -avz --delete * <a href="mailto:root@172.16.11.204">root@172.16.11.204</a>:/var/www/html/</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/1102e0d66a734268b4b16c1bee00c7bc.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/f3db1eaa744143929e1bfc40a866203a.png" alt="" loading="lazy"></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>[root@web ~]# ls /var/www/html/
index.php
[root@web ~]# cat /var/www/html/index.php
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token function">phpinfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/d14b53d15ba1471982d36e47e41fb372.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="基于-ansible-部署" tabindex="-1"><a class="header-anchor" href="#基于-ansible-部署" aria-hidden="true">#</a> 基于 ansible 部署</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@jenkins ~<span class="token punctuation">]</span><span class="token comment"># rpm -ivh epel-release-latest-7.noarch.rpm</span>
<span class="token punctuation">[</span>root@jenkins ~<span class="token punctuation">]</span><span class="token comment"># yum -y install ansible</span>
<span class="token punctuation">[</span>root@jenkins ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/ansible/hosts</span>
<span class="token punctuation">[</span>webserver<span class="token punctuation">]</span>
<span class="token number">172.16</span>.11.204
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 jenkins 运行用户</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@jenkins ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/sysconfig/jenkins</span>
<span class="token assign-left variable">JENKINS_USER</span><span class="token operator">=</span><span class="token string">"root"</span>
<span class="token punctuation">[</span>root@jenkins ~<span class="token punctuation">]</span><span class="token comment"># /etc/init.d/jenkins restart</span>
Restarting jenkins <span class="token punctuation">(</span>via systemctl<span class="token punctuation">)</span>: <span class="token punctuation">[</span> 确定 <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加 Ansible 插件</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/276415ca9f1641cabd97149518592521.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/58b6523db71e4a73a30ada20619689da.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/bf876d2e58ac486b9937291b21f4b7c5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/b1164e81748b41109332d8acf5778fa0.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@jenkins ~<span class="token punctuation">]</span><span class="token comment"># ssh-keygen</span>
<span class="token punctuation">[</span>root@jenkins ~<span class="token punctuation">]</span><span class="token comment"># ssh-copy-id git@172.16.11.203</span>
<span class="token punctuation">[</span>root@jenkins ~<span class="token punctuation">]</span><span class="token comment"># ssh-copy-id root@172.16.11.204</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/41f1d3469f5545b38da90194049c2838.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>src=${WORKSPACE} dest=/var/www/html rsync_opts=--exclude=.git</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/6d01660b31004f7ab1782b541a049bd0.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/a3508fd728db41ff9102045916515c6e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@web ~<span class="token punctuation">]</span><span class="token comment"># cat /var/www/html/php-ansible/index.php</span>
<span class="token operator">&lt;</span>?php
phpinfo<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
?<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/c6a132d5ac664d5da1202a35d9b06fc4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>至此所有就完成了；</p>
</div></template>


