<template><div><blockquote>
<p>🍁<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！</p>
</blockquote>
<p>@[toc]</p>
<h1 id="卸载已有的docker" tabindex="-1"><a class="header-anchor" href="#卸载已有的docker" aria-hidden="true">#</a> 卸载已有的docker</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查找已安装的docker包</span>
<span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/cfb6b8158e1b43bca291ac1de18065ed.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查找到有已安装的docker包并卸载；卸载docker-ce-cli就可以将其他都顺带卸载了；</span>
yum remove docker-ce-cli-19.03.13-3.el7.x86_64 <span class="token parameter variable">-y</span>

<span class="token comment">#卸载完之后再次查一下是否还有未删除的依赖</span>
<span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">docker</span>
<span class="token comment">#没有了话就说明卸载成功了。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="部署指定版本docker" tabindex="-1"><a class="header-anchor" href="#部署指定版本docker" aria-hidden="true">#</a> 部署指定版本docker</h1>
<h2 id="安装需要的软件驱动" tabindex="-1"><a class="header-anchor" href="#安装需要的软件驱动" aria-hidden="true">#</a> 安装需要的软件驱动</h2>
<ul>
<li>yum-utils:提供yum-config-manager功能</li>
<li>device-mapper-persistent-data、lvm2是devicemapper的依赖库</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置docker下载的yum源" tabindex="-1"><a class="header-anchor" href="#配置docker下载的yum源" aria-hidden="true">#</a> 配置docker下载的yum源</h2>
<blockquote>
<p>三种下载方式使用一种即可。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#直接wget下载阿里云的docker源</span>
<span class="token function">wget</span> <span class="token parameter variable">-P</span> /etc/yum.repos.d/ https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

<span class="token comment">#使用yum-config-manager下载官方的docker源</span>
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

<span class="token comment">#使用yum-config-manager下载阿里云的docker源</span>
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看yum源仓库所支持的docker版本都有哪些" tabindex="-1"><a class="header-anchor" href="#查看yum源仓库所支持的docker版本都有哪些" aria-hidden="true">#</a> 查看yum源仓库所支持的docker版本都有哪些</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost yum.repos.d<span class="token punctuation">]</span><span class="token comment"># yum list docker-ce --showduplicates | sort -r</span>
已加载插件：fastestmirror
可安装的软件包
 * updates: mirrors.tuna.tsinghua.edu.cn
Loading mirror speeds from cached hostfile
 * extras: mirrors.tuna.tsinghua.edu.cn
docker-ce.x86_64            <span class="token number">3</span>:23.0.0-1.el7                      docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.9-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.8-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.7-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.6-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.5-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.4-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.3-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.2-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.23-3.el7                    docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.22-3.el7                    docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.21-3.el7                    docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.20-3.el7                    docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.19-3.el7                    docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.18-3.el7                    docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.17-3.el7                    docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.16-3.el7                    docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.15-3.el7                    docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.14-3.el7                    docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.1-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.13-3.el7                    docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.12-3.el7                    docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.11-3.el7                    docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.10-3.el7                    docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.0-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:19.03.9-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:19.03.8-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:19.03.7-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:19.03.6-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:19.03.5-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:19.03.4-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:19.03.3-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:19.03.2-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:19.03.15-3.el7                    docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:19.03.14-3.el7                    docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:19.03.1-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:19.03.13-3.el7                    docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:19.03.12-3.el7                    docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:19.03.11-3.el7                    docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:19.03.10-3.el7                    docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:19.03.0-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:18.09.9-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:18.09.8-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:18.09.7-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:18.09.6-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:18.09.5-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:18.09.4-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:18.09.3-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:18.09.2-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:18.09.1-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:18.09.0-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">18.06</span>.3.ce-3.el7                    docker-ce-stable
docker-ce.x86_64            <span class="token number">18.06</span>.2.ce-3.el7                    docker-ce-stable
docker-ce.x86_64            <span class="token number">18.06</span>.1.ce-3.el7                    docker-ce-stable
docker-ce.x86_64            <span class="token number">18.06</span>.0.ce-3.el7                    docker-ce-stable
docker-ce.x86_64            <span class="token number">18.03</span>.1.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            <span class="token number">18.03</span>.0.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            <span class="token number">17.12</span>.1.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            <span class="token number">17.12</span>.0.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            <span class="token number">17.09</span>.1.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            <span class="token number">17.09</span>.0.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            <span class="token number">17.06</span>.2.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            <span class="token number">17.06</span>.1.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            <span class="token number">17.06</span>.0.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            <span class="token number">17.03</span>.3.ce-1.el7                    docker-ce-stable
docker-ce.x86_64            <span class="token number">17.03</span>.2.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            <span class="token number">17.03</span>.1.ce-1.el7.centos             docker-ce-stable
docker-ce.x86_64            <span class="token number">17.03</span>.0.ce-1.el7.centos             docker-ce-stable
 * base: mirrors.bfsu.edu.cn

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装docker-ce和docker-ce-cli" tabindex="-1"><a class="header-anchor" href="#安装docker-ce和docker-ce-cli" aria-hidden="true">#</a> 安装docker-ce和docker-ce-cli</h2>
<figure><img src="https://img-blog.csdnimg.cn/2504d4b93fa9488e9b5ad5a5f4a930a0.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<blockquote>
<p>注：如果不安装docker-ce-cli或直接安装docker-ce-cli，系统会默认下载最新的版本</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce-18.09.6-3.el7 docker-ce-cli-18.09.6-3.el7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/2db9156d01954db29da63023ce4a1229.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="配置docker拉取镜像的源" tabindex="-1"><a class="header-anchor" href="#配置docker拉取镜像的源" aria-hidden="true">#</a> 配置docker拉取镜像的源</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
<span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">'EOF'
{
"insecure-registries": ["0.0.0.0/0"],
"registry-mirrors": ["https://zbkz1bx2.mirror.aliyuncs.com"]
}
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>insecure-registries：支持http方式推送镜像</li>
<li>registry-mirrors：添加镜像加速器，这里添加的是阿里云个人加速器地址，也可以添加其他镜像加速器，多个使用英文逗号分开即可</li>
</ul>
<h2 id="加载并启动docker服务、设置开机自启" tabindex="-1"><a class="header-anchor" href="#加载并启动docker服务、设置开机自启" aria-hidden="true">#</a> 加载并启动docker服务、设置开机自启</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#加载docker配置</span>
systemctl daemon-reload

<span class="token comment">#启动docker服务</span>
systemctl start <span class="token function">docker</span>

<span class="token comment">#设置docker服务开机自启</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看docker是否启动" tabindex="-1"><a class="header-anchor" href="#查看docker是否启动" aria-hidden="true">#</a> 查看docker是否启动</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl status <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/200867f384c749f48dddc6ec28d786b0.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="查看docker版本" tabindex="-1"><a class="header-anchor" href="#查看docker版本" aria-hidden="true">#</a> 查看docker版本</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost docker<span class="token punctuation">]</span><span class="token comment"># docker --version</span>
Docker version <span class="token number">18.09</span>.6, build 481bc77156
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，安装完成，可以自行使用了；</p>
</div></template>


