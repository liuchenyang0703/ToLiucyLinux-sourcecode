<template><div><blockquote>
<p>本文用来记录将<code v-pre>hexo</code>部署再轻量服务器上的过程，不论是已经有自己的主题准备迁移或者新建一个准备部署在轻量服务器，本教程都是适用的，博主并不是做相关方面的，因此本教程尽量简单实用，对于大佬可能帮助有限~其次这里并非一定要使用腾讯云服务器，其他家操作基本上都是一致的。<br>
至于博客部署的历程参考 <a href="https://gaoziman.blog.csdn.net/article/details/124652412?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a>，记录了笔者从GitHub Page到自己服务器的选择与图床部署方案，可以进行参考。</p>
</blockquote>
<h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2>
<h3 id="安装git" tabindex="-1"><a class="header-anchor" href="#安装git" aria-hidden="true">#</a> 安装Git</h3>
<p>打开服务器控制面板，<strong>修改root密码</strong>一定需要修改！，选择登录。</p>
<p>笔者这里选择的是使用<code v-pre>FinalShell</code>远程连接。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202307121008619.png" alt="image-20230711184431144" tabindex="0" loading="lazy"><figcaption>image-20230711184431144</figcaption></figure>
<p><strong>输入命令</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">su</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>然后安装Git</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202307121008977.png" alt="image-20230711184601508" tabindex="0" loading="lazy"><figcaption>image-20230711184601508</figcaption></figure>
<h3 id="创建git账户" tabindex="-1"><a class="header-anchor" href="#创建git账户" aria-hidden="true">#</a> 创建git账户</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>adduser <span class="token function">git</span>
<span class="token function">chmod</span> <span class="token number">740</span> /etc/sudoers
<span class="token function">vim</span> /etc/sudoers
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202307121008887.png" alt="image-20230711184728461" tabindex="0" loading="lazy"><figcaption>image-20230711184728461</figcaption></figure>
<p>添加<code v-pre>git ALL=(ALL) ALL</code>改回权限</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">400</span> /etc/sudoers
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="设置git账户" tabindex="-1"><a class="header-anchor" href="#设置git账户" aria-hidden="true">#</a> 设置Git账户</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">passwd</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置的密码看不到，你直接输入就可以了。这里我设置的密码太简单了会有这样的提示。不用关心直接输入，看到成功提示即可。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202307121008481.png" alt="image-20230711184827812" tabindex="0" loading="lazy"><figcaption>image-20230711184827812</figcaption></figure>
<p>切换至 <code v-pre>git</code> 用户，创建 <code v-pre>~/.ssh</code> 文件夹和 <code v-pre>~/.ssh/authorized_keys</code> 文件，并赋予相应的权限</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">su</span> <span class="token function">git</span>
<span class="token function">mkdir</span> ~/.ssh
<span class="token function">vim</span> ~/.ssh/authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按”i” 进入编辑模式，将我们在 win11 中生成的 <code v-pre>id_rsa.pub</code> 文件中的公钥复制到 <code v-pre>authorized_keys</code> 中，按”<code v-pre>esc</code>”，然后按”:wq”，保存退出。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202307121008951.png" alt="image-20230711185023624" tabindex="0" loading="lazy"><figcaption>image-20230711185023624</figcaption></figure>
<p>接着，输入一下命令，<strong>赋予权限</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">600</span> /home/git/.ssh/authorized_keys
<span class="token function">chmod</span> <span class="token number">700</span> /home/git/.ssh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在本地 Git 终端中测试是否能免密登录 git，其中 SERVER 为填写自己的云主机 IP，执行输入 yes 后输入你之前配置的 git 密码，无报错就说明好了。</p>
<p>在电脑本地桌面，右键”Git Bash Here”，输入一下命令，其中 SERVER 填写自己的云主机 ip，执行输入 yes 后不用密码说明配置成功了。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-v</span> git@SERVER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202307121008268.png" alt="image-20230711185225978" tabindex="0" loading="lazy"><figcaption>image-20230711185225978</figcaption></figure>
<p><strong>说明已经连接成功了</strong></p>
<h3 id="配置仓库与相关配置" tabindex="-1"><a class="header-anchor" href="#配置仓库与相关配置" aria-hidden="true">#</a> 配置仓库与相关配置</h3>
<p>返回服务端命令行切换到 <code v-pre>root</code> 账户</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">su</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后输入,赋予权限</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> /var/repo
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">755</span> /var/repo
<span class="token function">chown</span> <span class="token parameter variable">-R</span> git:git /var/repo/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一个新的库：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /var/repo
<span class="token function">git</span> init <span class="token parameter variable">--bare</span> hexo.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一个新的 Git 钩子，用于自动部署。在 /var/repo/hexo.git 下，有一个自动生成的 <a href="https://so.csdn.net/so/search?q=hooks&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">hooks<ExternalLinkIcon/></a> 文件夹。我们需要在里边新建一个新的钩子文件 post-receive。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> /var/repo/hexo.git/hooks/post-receive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入编辑模式，然后将下面那两行代码粘贴进去，保存退出。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token function">git</span> --work-tree<span class="token operator">=</span>/www/wwwroot/hexo --git-dir<span class="token operator">=</span>/var/repo/hexo.git checkout <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>新建一个文件用做网站的根目录，记得给权限。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> /www/wwwroot/hexo
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">755</span> /www/wwwroot/hexo
<span class="token function">chown</span> <span class="token parameter variable">-R</span> git:git /www/wwwroot/hexo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h2>
<p>我们使用宝塔面板来一键部署 Nginx关键是简单</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">wget</span> <span class="token operator">&amp;&amp;</span> <span class="token function">wget</span> <span class="token parameter variable">-O</span> install.sh http://download.bt.cn/install/install_6.0.sh <span class="token operator">&amp;&amp;</span> <span class="token function">bash</span> install.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果是腾讯云，个别会自带宝塔面板</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202307121008566.png" alt="image-20230711185538503" tabindex="0" loading="lazy"><figcaption>image-20230711185538503</figcaption></figure>
<p>记得去服务器打开<code v-pre>8888</code>端口</p>
<p>复制上述地址即可。用户名与密码也有在用户面板中。<br>
打开软件商店输入<code v-pre>Nginx</code>。选择免费的安装。等待安装结束。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202307121008798.png" alt="image-20230711185720875" tabindex="0" loading="lazy"><figcaption>image-20230711185720875</figcaption></figure>
<p>部署完成之后，点击网站，添加站点，填写你的域名（加上3w)，没有的话写你的服务器 ip 地址。根目录选我们之前建立的<code v-pre>/www/wwwroot/hexo</code></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202307121008889.png" alt="image-20230711185807954" tabindex="0" loading="lazy"><figcaption>image-20230711185807954</figcaption></figure>
<p>回到服务器终端，重启宝塔服务</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">service</span> bt restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2>
<p>接下来需要将本地的生成好的/public推送到服务器。进入本地电脑 hexo 博客的根目录，编辑站点配置文件 _config.yml，找到 deploy，修改成以下</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">deploy</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> git
  <span class="token comment">#repo改为repo: git@域名:/var/repo/hexo.git</span>
  <span class="token key atrule">repo</span><span class="token punctuation">:</span> git@ip<span class="token punctuation">:</span>/var/repo/hexo.git
  <span class="token key atrule">branch</span><span class="token punctuation">:</span> master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后使用</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i  hexo-deployer-git  -- save
hexo clean
hexo generate
hexo deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要输入密码的时候就输入即可，然后打开IP查看</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202307121008486.png" alt="image-20230711190024284" tabindex="0" loading="lazy"><figcaption>image-20230711190024284</figcaption></figure>
<p><code v-pre>域名备案之后，可以直接绑定域名</code></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312031906036.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


