<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181626375.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>🍁<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！</p>
</blockquote>
<h2 id="问题复现" tabindex="-1"><a class="header-anchor" href="#问题复现" aria-hidden="true">#</a> 问题复现</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost openssh-8.7p1<span class="token punctuation">]</span><span class="token comment"># rpm rpm -e --nodeps $(rpm -qa |grep pam-devel)</span>

<span class="token punctuation">[</span>root@localhost openssh-8.7p1<span class="token punctuation">]</span><span class="token comment"># rpm -ivh pam-devel-1.1.8-23.el7.x86_64.rpm</span>
-bash: /usr/bin/rpm: 没有那个文件或目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不小心多输了一个rpm，导致rpm被强制删除了，很伤心😟！那么怎么解决呢？下面来带大家解决。</p>
<h2 id="问题解决方案" tabindex="-1"><a class="header-anchor" href="#问题解决方案" aria-hidden="true">#</a> 问题解决方案</h2>
<p>准备两台机器，一台有rpm命令的，一台没有rpm命令的。</p>
<ul>
<li>查看rpm<font color=red> 故障 </font>的那台机器的rpm命令路径（209）</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># whereis rpm</span>
rpm: /usr/lib/rpm /etc/rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>查看rpm<font color=gree> 没有故障 </font>的哪台机器的rpm命令路径（210）</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># whereis rpm</span>
rpm: /usr/bin/rpm /usr/lib/rpm /etc/rpm /usr/share/man/man8/rpm.8.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>解决方案：</p>
<blockquote>
<p>从210.中可以看到209机器上rpm命令被卸载的，连man手册也没有了，bin下面更是没有。</p>
</blockquote>
<blockquote>
<p>思路：想到编译安装的软件的卸载方法是直接将安装路径下的文件直接删掉即可，那么我们可不可以缺什么补什么呢？显然可以啊。反过来不是一样么。</p>
</blockquote>
<h3 id="补全-whereis-rpm-缺少的文件" tabindex="-1"><a class="header-anchor" href="#补全-whereis-rpm-缺少的文件" aria-hidden="true">#</a> 补全 whereis rpm 缺少的文件</h3>
<p>从没有问题的那台服务器（210）往这边（209）拷文件过来；<br>
可以看到有问题的rpm这台服务器（209）缺少：<font color=red>/usr/bin/rpm、/usr/share/man/man8/rpm.8.gz</font> 那么，将这两个文件从没有问题的服务器（210）上拉过来。</p>
<ul>
<li>在没问题的服务器上执行（210）</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#从没有问题（210）的服务器上拉文件到有问题（209）的服务器上</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># scp /usr/bin/rpm root@172.16.11.209:/usr/bin/</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># scp -r /usr/share/man/man8/rpm.8.gz root@172.16.11.209:/usr/share/man/man8/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>都拉过来了之后再次使用whereis看一下，两边是否都一样了</p>
<ul>
<li>查看rpm<font color=red> 故障 </font>的那台机器的rpm命令路径（209）</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># whereis rpm</span>
rpm: /usr/bin/rpm /usr/lib/rpm /etc/rpm /usr/share/man/man8/rpm.8.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>查看rpm<font color=gree> 没有故障 </font>的哪台机器的rpm命令路径（210）</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># whereis rpm</span>
rpm: /usr/bin/rpm /usr/lib/rpm /etc/rpm /usr/share/man/man8/rpm.8.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在可以看到两边命令路径都补全了，再次使用rpm运行一下，结果还是不行。</p>
<h3 id="将rpmrc文件从没问题的环境-210-复制过来" tabindex="-1"><a class="header-anchor" href="#将rpmrc文件从没问题的环境-210-复制过来" aria-hidden="true">#</a> 将rpmrc文件从没问题的环境（210）复制过来</h3>
<ul>
<li>在没问题的服务器上执行（210）</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># scp /usr/lib/rpm/rpmrc root@172.16.11.209:/usr/lib/rpm/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>复制过去之后，再次执行rpm命令；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># rpm -ivh pam-1.1.8-23.el7.x86_64.rpm </span>
error: no dbpath has been <span class="token builtin class-name">set</span>
error: cannot <span class="token function">open</span> Packages database <span class="token keyword">in</span> /%<span class="token punctuation">{</span>_dbpath<span class="token punctuation">}</span>
warning: pam-1.1.8-23.el7.x86_64.rpm: Header V3 RSA/SHA256 Signature, key ID f4a80eb5: NOKEY
error: no dbpath has been <span class="token builtin class-name">set</span>
error: cannot <span class="token function">open</span> Packages database <span class="token keyword">in</span> /%<span class="token punctuation">{</span>_dbpath<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>又出现一个报错，我们来继续解决。</p>
<h3 id="出现这个问题-我们可以将没有问题的服务器中的-macros-文件复制过去" tabindex="-1"><a class="header-anchor" href="#出现这个问题-我们可以将没有问题的服务器中的-macros-文件复制过去" aria-hidden="true">#</a> 出现这个问题：我们可以将没有问题的服务器中的 macros 文件复制过去</h3>
<ul>
<li>在没问题的服务器上执行（210）</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># scp /usr/lib/rpm/macros root@172.16.11.209:/usr/lib/rpm/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>复制过去之后，再次执行，rpm命令</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># rpm -ivh pam-1.1.8-23.el7.x86_64.rpm </span>
Preparing<span class="token punctuation">..</span>.                          <span class="token comment">################################# [100%]</span>
	package pam-1.1.8-23.el7.x86_64 is already installed

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># rpm -qa  | grep pam</span>
pam-1.1.8-23.el7.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>吼，发现成功了。那么问题就解决了。</p>
<h2 id="问题解决" tabindex="-1"><a class="header-anchor" href="#问题解决" aria-hidden="true">#</a> 问题解决</h2>
<blockquote>
<font color=red>再次提醒大家一定要认真，认真，在认真；</font><font color=red>再次提醒大家一定要认真，认真，在认真；</font><font color=red>再次提醒大家一定要认真，认真，在认真；</font></blockquote>
</div></template>


