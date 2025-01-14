<template><div><blockquote>
<p>🍁<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！</p>
</blockquote>
<p>@[toc]</p>
<h1 id="具体报错信息" tabindex="-1"><a class="header-anchor" href="#具体报错信息" aria-hidden="true">#</a> 具体报错信息：</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@k8d mysql<span class="token punctuation">]</span><span class="token comment"># docker pull mysql:5.7.38</span>
Trying to pull repository docker.io/library/mysql <span class="token punctuation">..</span>. 
Get https://registry-1.docker.io/v2/: x509: certificate has expired or is not yet valid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发现报错</p>
<blockquote>
<font color=red>x509: certificate has expired or is not yet valid</font> 翻译过来就是 <font color=green>x509：证书已过期或尚未生效</font></blockquote>
<h1 id="问题排查" tabindex="-1"><a class="header-anchor" href="#问题排查" aria-hidden="true">#</a> 问题排查：</h1>
<h2 id="时间问题排查" tabindex="-1"><a class="header-anchor" href="#时间问题排查" aria-hidden="true">#</a> 时间问题排查</h2>
<p>首先我们先看时间问题；<br>
在docker拉取镜像时出现 x509 报错,一般都是证书问题或者系统时间问题导致，可以先执行 ​​date​​ 看一下系统时间对不对,如果服务器系统时间跟现实实际时间对不上的话，一般就是系统时间问题，同步时间即可。</p>
<h3 id="_1-查看时间" tabindex="-1"><a class="header-anchor" href="#_1-查看时间" aria-hidden="true">#</a> 1 查看时间</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@k8d mysql<span class="token punctuation">]</span><span class="token comment"># date</span>
<span class="token number">2023</span>年 02月 <span class="token number">17</span>日 星期五 06:09:59 CST
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>确定系统时间与现在的时间对不上，估计就是这个问题了，我们来同步一下时间。</p>
<h3 id="_2-安装同步时间工具-ntpdate" tabindex="-1"><a class="header-anchor" href="#_2-安装同步时间工具-ntpdate" aria-hidden="true">#</a> 2 安装同步时间工具 ntpdate</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> ntpdate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-同步时间" tabindex="-1"><a class="header-anchor" href="#_3-同步时间" aria-hidden="true">#</a> 3 同步时间</h3>
<p>安装完命令之后同步时间；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@k8d mysql<span class="token punctuation">]</span><span class="token comment"># ntpdate cn.pool.ntp.org</span>
 <span class="token number">7</span> Mar <span class="token number">10</span>:40:40 ntpdate<span class="token punctuation">[</span><span class="token number">6276</span><span class="token punctuation">]</span>: step <span class="token function">time</span> server <span class="token number">120.25</span>.115.20 offset <span class="token number">1571423.500135</span> sec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>同步完成之后再次查看一下时间</p>
<h3 id="_4-再次查看当前系统时间" tabindex="-1"><a class="header-anchor" href="#_4-再次查看当前系统时间" aria-hidden="true">#</a> 4 再次查看当前系统时间</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@k8d mysql<span class="token punctuation">]</span><span class="token comment"># date</span>
<span class="token number">2023</span>年 03月 07日 星期二 <span class="token number">10</span>:40:43 CST
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>同步成功，再次拉取镜像试一下</p>
<h3 id="_5-再次拉取镜像" tabindex="-1"><a class="header-anchor" href="#_5-再次拉取镜像" aria-hidden="true">#</a> 5 再次拉取镜像</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@k8d mysql<span class="token punctuation">]</span><span class="token comment"># docker pull mysql:5.7.38</span>
Trying to pull repository docker.io/library/mysql <span class="token punctuation">..</span>. 
<span class="token number">5.7</span>.38: Pulling from docker.io/library/mysql
66fb34780033: Pull complete 
ef4ccd63cdb4: Pull complete 
d6f28a94c51f: Pull complete 
7feea2a503b5: Pull complete 
71dd5852ecd9: Pull complete 
3da2c95cac2f: Pull complete 
af7913db289c: Pull complete 
77f552f93c12: Pull complete 
3ed53edb61ab: Pull complete 
67e1c6839f08: Pull complete 
abcdaaf08d0f: Pull complete 
Digest: sha256:bbe0e2b0a33ef5c3a983e490dcb3c1a42d623db1d5679e82f65cce3f32c8f254
Status: Downloaded newer image <span class="token keyword">for</span> docker.io/mysql:5.7.38
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发现没有报错，拉取成功，问题解决。</p>
<p>如果还是有报错看第二种方法：</p>
<h2 id="证书问题排查" tabindex="-1"><a class="header-anchor" href="#证书问题排查" aria-hidden="true">#</a> 证书问题排查</h2>
<p>证书问题需要编辑 <font color=red>​​/etc/docker/daemon.json</font> 文件，在配置文件中添加 <font color=red>​​​​&quot;registry-mirrors&quot;:[&quot;<a href="https://docker.mirrors.ustc.edu.cn" target="_blank" rel="noopener noreferrer">https://docker.mirrors.ustc.edu.cn<ExternalLinkIcon/></a>&quot;]​​</font> 配置。</p>
<h3 id="编辑-etc-docker-daemon-json文件" tabindex="-1"><a class="header-anchor" href="#编辑-etc-docker-daemon-json文件" aria-hidden="true">#</a> 编辑/etc/docker/daemon.json文件</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@k8d mysql<span class="token punctuation">]</span><span class="token comment"># vim /etc/docker/daemon.json</span>
<span class="token punctuation">{</span>
<span class="token string">"registry-mirrors"</span>:<span class="token punctuation">[</span><span class="token string">"https://hx983jf6.mirror.aliyuncs.com"</span>,<span class="token string">"https://docker.mirrors.ustc.edu.cn"</span><span class="token punctuation">]</span>,  //第一个是镜像加速配置
<span class="token string">"graph"</span><span class="token builtin class-name">:</span><span class="token string">"/mnt/data"</span>    //修改Docker默认存储路径配置
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新docker-daemon-json配置" tabindex="-1"><a class="header-anchor" href="#更新docker-daemon-json配置" aria-hidden="true">#</a> 更新docker/daemon.json配置</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="重启docker服务" tabindex="-1"><a class="header-anchor" href="#重启docker服务" aria-hidden="true">#</a> 重启docker服务</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="再次拉取镜像" tabindex="-1"><a class="header-anchor" href="#再次拉取镜像" aria-hidden="true">#</a> 再次拉取镜像</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@k8d mysql<span class="token punctuation">]</span><span class="token comment"># docker pull mysql:5.7.38</span>
Trying to pull repository docker.io/library/mysql <span class="token punctuation">..</span>. 
<span class="token number">5.7</span>.38: Pulling from docker.io/library/mysql
66fb34780033: Pull complete 
ef4ccd63cdb4: Pull complete 
d6f28a94c51f: Pull complete 
7feea2a503b5: Pull complete 
71dd5852ecd9: Pull complete 
3da2c95cac2f: Pull complete 
af7913db289c: Pull complete 
77f552f93c12: Pull complete 
3ed53edb61ab: Pull complete 
67e1c6839f08: Pull complete 
abcdaaf08d0f: Pull complete 
Digest: sha256:bbe0e2b0a33ef5c3a983e490dcb3c1a42d623db1d5679e82f65cce3f32c8f254
Status: Downloaded newer image <span class="token keyword">for</span> docker.io/mysql:5.7.38
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发现没有报错，拉取成功，问题解决。</p>
<h1 id="成功解决" tabindex="-1"><a class="header-anchor" href="#成功解决" aria-hidden="true">#</a> 成功解决</h1>
</div></template>


