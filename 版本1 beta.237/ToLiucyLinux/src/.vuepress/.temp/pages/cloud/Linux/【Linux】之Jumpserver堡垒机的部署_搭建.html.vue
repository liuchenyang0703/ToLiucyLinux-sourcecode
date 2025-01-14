<template><div><p><img src="https://img-blog.csdnimg.cn/d531a2c346e443238b12a3d52a968515.jpeg" alt="" loading="lazy"><br>
@[toc]</p>
<h1 id="jumpserver-概述" tabindex="-1"><a class="header-anchor" href="#jumpserver-概述" aria-hidden="true">#</a> Jumpserver 概述</h1>
<ul>
<li>Jumpserver 是一款使用 Python, Django 开发的开源跳板机系统, 为互联网企业提供了认证，授权，审计，自动化运维等功能。JumpServer 现已支持管理 SSH、 Telnet、 RDP、 VNC 协议资产</li>
</ul>
<blockquote>
<p>功能：</p>
<ol>
<li>精确记录操作命令</li>
<li>支持批量文件上传下载</li>
<li>支持主机搜索登录</li>
<li>支持批量命令执行(Ansible完成)</li>
<li>支持WebTerminal连接主机</li>
<li>支持Web端批量命令执行</li>
<li>支持录像回放</li>
<li>支持硬件信息如cpu,内存等抓取</li>
<li>支持资产Excel导入导出</li>
<li>支持资产批量更改</li>
<li>支持系统用户的批量推送(Ansible实现)</li>
<li>支持用户，主机，用户组，主机组，系统用户混合细颗粒授权</li>
<li>支持sudo管理</li>
<li>支持命令统计和命令搜索</li>
<li>支持上传下载文件审计</li>
<li>支持终止用户连接</li>
<li>支持各种搜索</li>
<li>其他</li>
</ol>
</blockquote>
<ul>
<li>
<p>Jumpserver 后端主要技术是LDAP，配置了LDAP 集中认证服务器， 所有服务器的认证都是由ldap完成的。其做法是：每个用户一个密码，把密码加密放到了数据库中，当用户输入IP 从跳板机登陆服务器的时候，跳板机系统取出密码，并解密，通过pexpect 模块将密码发送过去，来完成登录。</p>
</li>
<li>
<p>（LDAP是轻量目录访问协议，英文全称是Lightweight Directory Access Protocol，一般都简称为LDAP。它是基于X.500标准的，但是简单多了并且可以根据需要定制。与X.500不同，LDAP支持TCP/IP，这对访问Internet是必须的。LDAP的核心规范在RFC中都有定义，所有与LDAP相关的RFC都可以在LDAPman RFC网页中找到。）</p>
</li>
</ul>
<blockquote>
<font color=red>特色优势:</font><ul>
<li>开源：零门槛，线上快速获取和安装；</li>
<li>分布式：轻松支持大规模并发访问；</li>
<li>无插件：仅需浏览器，极致的 Web Terminal 使用体验；</li>
<li>多云支持：一套系统，同时管理不同云上面的资产；</li>
<li>云端存储：审计录像云端存储，永不丢失；</li>
<li>多租户：一套系统，多个子公司和部门同时使用；</li>
<li>多应用支持：数据库，Windows远程应用，Kubernetes。</li>
</ul>
</blockquote>
<ul>
<li>官方网址：<a href="https://www.jumpserver.org/" target="_blank" rel="noopener noreferrer">https://www.jumpserver.org/<ExternalLinkIcon/></a></li>
<li>JumpServer官网文档：<a href="https://docs.jumpserver.org/zh/master/" target="_blank" rel="noopener noreferrer">https://docs.jumpserver.org/zh/master/<ExternalLinkIcon/></a></li>
<li>github 项目网址：<a href="https://github.com/jumpserver/jumpserver/releases" target="_blank" rel="noopener noreferrer">https://github.com/jumpserver/jumpserver/releases<ExternalLinkIcon/></a></li>
</ul>
<figure><img src="https://img-blog.csdnimg.cn/9ef111dd688540af8c16f2a58e8da476.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="环境需求" tabindex="-1"><a class="header-anchor" href="#环境需求" aria-hidden="true">#</a> 环境需求</h2>
<ul>
<li>首先准备一台 4核8G （最低）且可以访问互联网的 64 位 Linux 主机；</li>
<li>其次就是部署需要root用户，最好使用新环境来部署，因为会有不是新的环境会有冲突的情况，所以建议使用新环境来部署；</li>
<li>关闭 iptables，关闭 selinux ；</li>
<li>需要wget git curl....几个命令；</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">wget</span> <span class="token function">git</span> <span class="token function">curl</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>首先具备这几个条件，完了就是安装部署。</p>
<h2 id="在线部署jump-server" tabindex="-1"><a class="header-anchor" href="#在线部署jump-server" aria-hidden="true">#</a> 在线部署Jump server</h2>
<p>  部署方式有很多种：<font color=red>有在线部署，也有离线部署；</font><font color=green>也有在linux中部署、在Windows中部署、在macOS中部署的；</font><font color=okuewklasfnnldsalfaflaflaejfoqirq>也有手动部署、一键部署、源码部署、Helm部署、Allinone部署；</font>看自己选哪个，其他部署文档可参考官网：<a href="https://docs.jumpserver.org/zh/master/install/setup_by_fast/" target="_blank" rel="noopener noreferrer">Jumpserver官网部署文档<ExternalLinkIcon/></a><br>
这里我们选择一键部署就可以，脚本可以直接拉取官网的；</p>
<font size=4>**拉取官网脚本并且执行安装操作：**</font><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://github.com/jumpserver/jumpserver/releases/download/v2.25.1/quick_start.sh <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>中途有的地方需要自己确认，会问你选择默认还是其他，不输入则自动选择默认；</p>
<font color=teal>配置文件位置: /opt/jumpserver/config/config.txt</font><p><strong>脚本安装步骤：</strong></p>
<ol>
<li>检查配置文件</li>
<li>安装docker和docker-compose</li>
<li>配置dokcer</li>
<li>启动docker并设置开机自启</li>
<li>加载docker镜像（去拉取镜像redis、mariadb、web、core、koko、lion、magnus）</li>
<li>安装Jumpserver<br>
6.1、配置加密密钥<br>
6.2、配置持久化目录<br>
6.3、配置 MySQL<br>
6.4、配置 Redis	<br>
6.5、配置对外端口<br>
6.6、初始化数据库</li>
</ol>
<p>7.安装完成（以及相关信息）</p>
<p>页面访问：<a href="http://ip:80" target="_blank" rel="noopener noreferrer">http://ip:80<ExternalLinkIcon/></a><br>
初始账号密码：admin admin</p>
<figure><img src="https://img-blog.csdnimg.cn/d502ec373bc14cb795308759fe9c7aba.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>进入页面之后可查看<font color=red><strong>页面访问操作</strong></font>操作</p>
<font size=5>**jumpserver的命令及解析**</font><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/jumpserver-installer-v2.25.1

<span class="token comment"># 安装Jump server</span>
./jmsctl.sh <span class="token function">install</span>

<span class="token comment"># 升级Jump server</span>
./jmsctl.sh upgrade <span class="token punctuation">[</span>version<span class="token punctuation">]</span>

<span class="token comment"># 监测当前版本号</span>
./jmsctl.sh check_update

<span class="token comment"># 启动Jump server</span>
./jmsctl.sh start

<span class="token comment"># 停止Jump server</span>
./jmsctl.sh stop

<span class="token comment">#关闭Jump server</span>
./jmsctl.sh close

<span class="token comment">#重启Jump server</span>
./jmsctl.sh restart

<span class="token comment">#检查Jump server的运行状态</span>
./jmsctl.sh status

<span class="token comment"># 卸载Jump server</span>
./jmsctl.sh uninstall

<span class="token comment"># 帮助（查看命令参数详情）</span>
./jmsctl.sh <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="离线部署jump-server" tabindex="-1"><a class="header-anchor" href="#离线部署jump-server" aria-hidden="true">#</a> 离线部署Jump server</h2>
<p>从飞致云社区 <a href="https://community.fit2cloud.com/#/products/jumpserver/downloads" target="_blank" rel="noopener noreferrer">下载最新的 linux/amd64 离线包<ExternalLinkIcon/></a>, 并上传到部署服务器的 /opt 目录；离线包大概（1.5G）。</p>
<p>注意：下载时需要注册、登录一下<br>
<img src="https://img-blog.csdnimg.cn/1c4be46e2d0f4ddc83ac879b0576ca0d.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/96c81575369444a1b9c42b101d198307.png" alt="" loading="lazy"></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#将下载的包传到/opt目录</span>
<span class="token function">mv</span> jumpserver-offline-installer-v2.25.2-amd64-67.tar.gz /opt/

<span class="token comment">#切换到/opt目录</span>
<span class="token builtin class-name">cd</span> /opt

<span class="token comment">#解压jumpserver压缩包</span>
<span class="token function">tar</span> <span class="token parameter variable">-xf</span> jumpserver-offline-installer-v2.25.2-amd64-67.tar.gz

<span class="token comment">#重命名jumpserver-offline-installer-v2.25.2-amd64-67为jumpserver</span>
<span class="token function">mv</span> jumpserver-offline-installer-v2.25.2-amd64-67 jumpserver

<span class="token comment">#进入jumpserver的目录</span>
<span class="token builtin class-name">cd</span> /opt/jumpserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 根据需要修改配置文件模板, 如果不清楚用途可以跳过修改</span>
<span class="token function">cat</span> config-example.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 以下设置如果为空系统会自动生成随机字符串填入</span>
<span class="token comment">## 迁移请修改 SECRET_KEY 和 BOOTSTRAP_TOKEN 为原来的设置</span>
<span class="token comment">## 完整参数文档 https://docs.jumpserver.org/zh/master/admin-guide/env/</span>

<span class="token comment">## 配置 Docker 镜像加速, 不同的架构请参考安装文档</span>
<span class="token comment"># DOCKER_IMAGE_PREFIX=</span>

<span class="token comment">## 安装配置</span>
<span class="token assign-left variable">VOLUME_DIR</span><span class="token operator">=</span>/opt/jumpserver
<span class="token assign-left variable">DOCKER_DIR</span><span class="token operator">=</span>/var/lib/docker
<span class="token assign-left variable">SECRET_KEY</span><span class="token operator">=</span>
<span class="token assign-left variable">BOOTSTRAP_TOKEN</span><span class="token operator">=</span>
<span class="token assign-left variable">LOG_LEVEL</span><span class="token operator">=</span>ERROR

<span class="token comment">##  MySQL 配置, USE_EXTERNAL_MYSQL=1 表示使用外置数据库, 请输入正确的 MySQL 信息</span>
<span class="token assign-left variable">USE_EXTERNAL_MYSQL</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">DB_HOST</span><span class="token operator">=</span>mysql
<span class="token assign-left variable">DB_PORT</span><span class="token operator">=</span><span class="token number">3306</span>
<span class="token assign-left variable">DB_USER</span><span class="token operator">=</span>root
<span class="token assign-left variable">DB_PASSWORD</span><span class="token operator">=</span>
<span class="token assign-left variable">DB_NAME</span><span class="token operator">=</span>jumpserver

<span class="token comment">##  Redis 配置, USE_EXTERNAL_REDIS=1 表示使用外置数据库, 请输入正确的 Redis 信息</span>
<span class="token assign-left variable">USE_EXTERNAL_REDIS</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">REDIS_HOST</span><span class="token operator">=</span>redis
<span class="token assign-left variable">REDIS_PORT</span><span class="token operator">=</span><span class="token number">6379</span>
<span class="token assign-left variable">REDIS_PASSWORD</span><span class="token operator">=</span>

<span class="token comment">## Compose 项目设置, 如果 192.168.250.0/24 网段与你现有网段冲突, 请修改然后重启 JumpServer</span>
<span class="token assign-left variable">COMPOSE_PROJECT_NAME</span><span class="token operator">=</span>jms
<span class="token assign-left variable">COMPOSE_HTTP_TIMEOUT</span><span class="token operator">=</span><span class="token number">3600</span>
<span class="token assign-left variable">DOCKER_CLIENT_TIMEOUT</span><span class="token operator">=</span><span class="token number">3600</span>
<span class="token assign-left variable">DOCKER_SUBNET</span><span class="token operator">=</span><span class="token number">192.168</span>.250.0/24

<span class="token comment">## IPV6 设置, 容器是否开启 ipv6 nat, USE_IPV6=1 表示开启, 为 0 的情况下 DOCKER_SUBNET_IPV6 定义不生效</span>
<span class="token assign-left variable">USE_IPV6</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">DOCKER_SUBNET_IPV6</span><span class="token operator">=</span>fc00:1010:1111:200::/64

<span class="token comment">## 访问配置</span>
<span class="token assign-left variable">HTTP_PORT</span><span class="token operator">=</span><span class="token number">80</span>
<span class="token assign-left variable">SSH_PORT</span><span class="token operator">=</span><span class="token number">2222</span>
<span class="token assign-left variable">MAGNUS_MYSQL_PORT</span><span class="token operator">=</span><span class="token number">33060</span>
<span class="token assign-left variable">MAGNUS_MARIADB_PORT</span><span class="token operator">=</span><span class="token number">33061</span>

<span class="token comment">## HTTPS 配置, 参考 https://docs.jumpserver.org/zh/master/admin-guide/proxy/ 配置</span>
<span class="token comment"># USE_LB=1</span>
<span class="token comment"># HTTPS_PORT=443</span>
<span class="token comment"># SERVER_NAME=your_domain_name</span>
<span class="token comment"># SSL_CERTIFICATE=your_cert</span>
<span class="token comment"># SSL_CERTIFICATE_KEY=your_cert_key</span>

<span class="token comment">## Nginx 文件上传大小</span>
<span class="token assign-left variable">CLIENT_MAX_BODY_SIZE</span><span class="token operator">=</span>4096m

<span class="token comment">## Task 配置, 是否启动 jms_celery 容器, 单节点必须开启</span>
<span class="token assign-left variable">USE_TASK</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token comment">## XPack, USE_XPACK=1 表示开启, 开源版本设置无效</span>
<span class="token assign-left variable">USE_XPACK</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">RDP_PORT</span><span class="token operator">=</span><span class="token number">3389</span>
<span class="token assign-left variable">MAGNUS_POSTGRE_PORT</span><span class="token operator">=</span><span class="token number">54320</span>
<span class="token assign-left variable">TCP_SEND_BUFFER_BYTES</span><span class="token operator">=</span><span class="token number">4194304</span>
<span class="token assign-left variable">TCP_RECV_BUFFER_BYTES</span><span class="token operator">=</span><span class="token number">6291456</span>

<span class="token comment"># Core 配置, Session 定义, SESSION_COOKIE_AGE 表示闲置多少秒后 session 过期, SESSION_EXPIRE_AT_BROWSER_CLOSE=True 表示关闭浏览器即 session 过期</span>
<span class="token comment"># SESSION_COOKIE_AGE=86400</span>
<span class="token assign-left variable">SESSION_EXPIRE_AT_BROWSER_CLOSE</span><span class="token operator">=</span>True

<span class="token comment"># Koko Lion XRDP 组件配置</span>
<span class="token assign-left variable">CORE_HOST</span><span class="token operator">=</span>http://core:8080
<span class="token assign-left variable">JUMPSERVER_ENABLE_FONT_SMOOTHING</span><span class="token operator">=</span>True

<span class="token comment">## 终端使用宿主 HOSTNAME 标识</span>
<span class="token assign-left variable">SERVER_HOSTNAME</span><span class="token operator">=</span><span class="token variable">${<span class="token environment constant">HOSTNAME</span>}</span>

<span class="token comment"># 额外的配置</span>
<span class="token assign-left variable">CURRENT_VERSION</span><span class="token operator">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装jumpserver，安装时需要手动给路径问你是选择默认呢还是什么，默认的话可以直接回车就好；唯一一点好的是比在线安装快，因为在线安装需要拉取镜像特别慢，这个只需要下载<font color=red>”jumpserver-offline-installer-v2.25.2-amd64-67.tar.gz“</font>离线包即可；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 安装</span>
./jmsctl.sh <span class="token function">install</span>

<span class="token comment"># 启动</span>
./jmsctl.sh start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成，启动完成之后，页面访问：ip地址就行，因为默认端口是80；</p>
<p>安装完成之后会给你说：<br>
<img src="https://img-blog.csdnimg.cn/6c370dce148f485c8588758d8fc3c8bd.png" alt="" loading="lazy"></p>
<p>默认账号密码是admin admin</p>
<p>进入页面之后可查看<font color=red><strong>页面访问操作</strong></font>操作</p>
<font color=teal>配置文件位置: /opt/jumpserver/config/config.txt</font><font size=5>**jumpserver的命令及解析**</font><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#进入jumpserver的目录</span>
<span class="token builtin class-name">cd</span> /opt/jumpserver

<span class="token comment"># 安装Jump server</span>
./jmsctl.sh <span class="token function">install</span>

<span class="token comment"># 升级Jump server</span>
./jmsctl.sh upgrade <span class="token punctuation">[</span>version<span class="token punctuation">]</span>

<span class="token comment"># 监测当前版本号</span>
./jmsctl.sh check_update

<span class="token comment"># 启动Jump server</span>
./jmsctl.sh start

<span class="token comment"># 停止Jump server</span>
./jmsctl.sh stop

<span class="token comment">#关闭Jump server</span>
./jmsctl.sh close

<span class="token comment">#重启Jump server</span>
./jmsctl.sh restart

<span class="token comment">#检查Jump server的运行状态</span>
./jmsctl.sh status

<span class="token comment"># 卸载Jump server</span>
./jmsctl.sh uninstall

<span class="token comment"># 帮助（查看命令参数详情）</span>
./jmsctl.sh <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面访问操作" tabindex="-1"><a class="header-anchor" href="#页面访问操作" aria-hidden="true">#</a> 页面访问操作</h2>
<p>页面访问：<a href="http://ip:80" target="_blank" rel="noopener noreferrer">http://ip:80<ExternalLinkIcon/></a></p>
<p><img src="https://img-blog.csdnimg.cn/36659653549149788f8db03bb5a76606.png" alt="" loading="lazy"><br>
默认账号密码是admin admin；第一次登录需要修改一下密码；可根据自己的情况来定密码；</p>
<p><img src="https://img-blog.csdnimg.cn/8d5e553f193e4fb5a30fc0b0c4bd3c64.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/79a1763dd6c44cd4ad304bd98418c12d.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/49272b9dd0524865873f8fb8ef8fc82c.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/73fbb3bcad9645bbb724b39536211d7d.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/4062c48db28d4d9a8c1d4df1e5563365.png" alt="" loading="lazy"></p>
<p>到这就完成了安装，相关文章请看下方！</p>
<figure><img src="https://img-blog.csdnimg.cn/fede929fee414e83a45fe64366c3f6a2.gif#pic_center" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章" aria-hidden="true">#</a> 相关文章</h1>
<table>
<thead>
<tr>
<th>文章名</th>
<th>文章地址</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/126538846" target="_blank" rel="noopener noreferrer">【Linux】之Jumpserver堡垒机的部署/搭建<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/126538846" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/126538846<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/126539267" target="_blank" rel="noopener noreferrer">【Linux】之Jumpserver堡垒机添加linux主机资产<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/126539267" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/126539267<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/126542303" target="_blank" rel="noopener noreferrer">【Linux】之Jumpserver堡垒机添加Windows主机资产<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/126542303" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/126542303<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
</div></template>


