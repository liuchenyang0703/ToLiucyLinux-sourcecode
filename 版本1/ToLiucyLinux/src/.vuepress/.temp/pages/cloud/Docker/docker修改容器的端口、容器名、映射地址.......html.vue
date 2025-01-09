<template><div><p>@[toc]</p>
<h2 id="_1、docker修改容器名" tabindex="-1"><a class="header-anchor" href="#_1、docker修改容器名" aria-hidden="true">#</a> 1、docker修改容器名</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#先查看原来的容器名</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token comment">#查看所有的容器</span>
<span class="token comment">#找到你要修改的容器名</span>
<span class="token function">docker</span> <span class="token function">rename</span> 原容器名 要修改的容器名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、docker修改修改端口、映射地址" tabindex="-1"><a class="header-anchor" href="#_2、docker修改修改端口、映射地址" aria-hidden="true">#</a> 2、docker修改修改端口、映射地址......</h2>
<blockquote>
<p>下面是运行中的docker环境，因为实际环境，我们需要修改docker映射端口，现在是8088端口，我们要修改他改成8099端口。</p>
</blockquote>
<figure><img src="https://img-blog.csdnimg.cn/0b3b949f56bd4da7a77b3ede7aaab2c4.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_2-1、先找容器的id" tabindex="-1"><a class="header-anchor" href="#_2-1、先找容器的id" aria-hidden="true">#</a> 2.1、先找容器的ID</h3>
<p><img src="https://img-blog.csdnimg.cn/5d392a7091544d0299c91e3db81cdc73.png" alt="在这里插入图片描述" loading="lazy"><br>
我们可以看到b0cfb0daff30，先记住他，然后停止容器；</p>
<h3 id="_2-2、停止docker容器" tabindex="-1"><a class="header-anchor" href="#_2-2、停止docker容器" aria-hidden="true">#</a> 2.2、停止docker容器</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> stop abc（容器名）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-3、停止docker" tabindex="-1"><a class="header-anchor" href="#_2-3、停止docker" aria-hidden="true">#</a> 2.3、停止docker</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl stop <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-4、查找配置文件" tabindex="-1"><a class="header-anchor" href="#_2-4、查找配置文件" aria-hidden="true">#</a> 2.4、查找配置文件</h3>
<p>可以去修改该容器的配置有两个文件，<strong><font color=red>config.v2.json</font>/<font color=blue>hostconfig.json</font></strong></p>
<p>最开始让记得那个容器id我们先去找他的文件目录，我们可以根据查找hostconfig.json配置文件，然后再看id，这里我们找到了，第一个就是，进入目录<br>
<img src="https://img-blog.csdnimg.cn/80f5a173f1514070a0de4b21cf19d776.png" alt="在这里插入图片描述" loading="lazy"><br>
进入到目录我们可以看到这两个文件<br>
<img src="https://img-blog.csdnimg.cn/5dcdcc4597ea4d3689f46d22a6686249.png" alt="在这里插入图片描述" loading="lazy"></p>
<h3 id="_2-5、备份原有文件-如果出现问题后可以还原回去" tabindex="-1"><a class="header-anchor" href="#_2-5、备份原有文件-如果出现问题后可以还原回去" aria-hidden="true">#</a> 2.5、备份原有文件，如果出现问题后可以还原回去</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cp</span> <span class="token parameter variable">-ar</span> config.v2.json  config.v2.json-bak

<span class="token function">cp</span> <span class="token parameter variable">-ar</span> hostconfig.json hostconfig.json-bak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/e0ad8558a7794e69b80c1adfa8bb49fc.png" alt="在这里插入图片描述" loading="lazy"><br>
备份完之后，就是修改配置文件了</p>
<h3 id="_2-6、修改配置文件-hostconfig-json" tabindex="-1"><a class="header-anchor" href="#_2-6、修改配置文件-hostconfig-json" aria-hidden="true">#</a> 2.6、修改配置文件（hostconfig.json）</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> hostconfig.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/7ad41b8e3cca40c08d7f4cefc435f5a3.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<blockquote>
<p>我们找到8888端口，现在将他们都修改成8899，修改完之后保存退出；</p>
</blockquote>
<p>想要修改网络模式，映射地址或者映射端口都可以改了，要修改容器的什么文件，都可以在这里找到，当然下面的也要修改；</p>
<h3 id="_2-6、修改配置文件-config-v2-json" tabindex="-1"><a class="header-anchor" href="#_2-6、修改配置文件-config-v2-json" aria-hidden="true">#</a> 2.6、修改配置文件（config.v2.json）</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> config.v2.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/ddcba32c53c347dfa6ce218c90d49ccc.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<blockquote>
<p>也是同样的将8888修改成8899，修改完之后保存退出；</p>
</blockquote>
<h3 id="_2-7、启动docker服务" tabindex="-1"><a class="header-anchor" href="#_2-7、启动docker服务" aria-hidden="true">#</a> 2.7、启动docker服务</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-8、查看端口是否修改" tabindex="-1"><a class="header-anchor" href="#_2-8、查看端口是否修改" aria-hidden="true">#</a> 2.8、查看端口是否修改</h3>
<p><img src="https://img-blog.csdnimg.cn/19e31e86ca4c479bacb593e5cfa46a4d.png" alt="在这里插入图片描述" loading="lazy"><br>
这里看到端口已经被修改，我们就可以启动容器了</p>
<h3 id="_2-9、启动docker容器" tabindex="-1"><a class="header-anchor" href="#_2-9、启动docker容器" aria-hidden="true">#</a> 2.9、启动docker容器</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> start abc<span class="token punctuation">(</span>容器名<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意！！！</h2>
<p>docker修改完映射端口后，docker的ip可能会发生变化。</p>
</div></template>


