<template><div><h2 id="_1、docker修改容器名" tabindex="-1"><a class="header-anchor" href="#_1、docker修改容器名"><span>1、docker修改容器名</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#先查看原来的容器名</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ps</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -a</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"> #查看所有的容器</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#找到你要修改的容器名</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rename</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 原容器名</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 要修改的容器名</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、docker修改修改端口、映射地址" tabindex="-1"><a class="header-anchor" href="#_2、docker修改修改端口、映射地址"><span>2、docker修改修改端口、映射地址......</span></a></h2>
<blockquote>
<p>下面是运行中的docker环境，因为实际环境，我们需要修改docker映射端口，现在是8088端口，我们要修改他改成8099端口。</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161442631.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_2-1、先找容器的id" tabindex="-1"><a class="header-anchor" href="#_2-1、先找容器的id"><span>2.1、先找容器的ID</span></a></h3>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161442157.png" alt="" loading="lazy"><br>
我们可以看到b0cfb0daff30，先记住他，然后停止容器；</p>
<h3 id="_2-2、停止docker容器" tabindex="-1"><a class="header-anchor" href="#_2-2、停止docker容器"><span>2.2、停止docker容器</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> stop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> abc（容器名）</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-3、停止docker" tabindex="-1"><a class="header-anchor" href="#_2-3、停止docker"><span>2.3、停止docker</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> stop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-4、查找配置文件" tabindex="-1"><a class="header-anchor" href="#_2-4、查找配置文件"><span>2.4、查找配置文件</span></a></h3>
<p>可以去修改该容器的配置有两个文件，<strong><font color=red>config.v2.json</font>/<font color=blue>hostconfig.json</font></strong></p>
<p>最开始让记得那个容器id我们先去找他的文件目录，我们可以根据查找hostconfig.json配置文件，然后再看id，这里我们找到了，第一个就是，进入目录<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161442499.png" alt="" loading="lazy"><br>
进入到目录我们可以看到这两个文件<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161442312.png" alt="" loading="lazy"></p>
<h3 id="_2-5、备份原有文件-如果出现问题后可以还原回去" tabindex="-1"><a class="header-anchor" href="#_2-5、备份原有文件-如果出现问题后可以还原回去"><span>2.5、备份原有文件，如果出现问题后可以还原回去</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -ar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config.v2.json</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  config.v2.json-bak</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -ar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> hostconfig.json</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> hostconfig.json-bak</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161442430.png" alt="" loading="lazy"><br>
备份完之后，就是修改配置文件了</p>
<h3 id="_2-6、修改配置文件-hostconfig-json" tabindex="-1"><a class="header-anchor" href="#_2-6、修改配置文件-hostconfig-json"><span>2.6、修改配置文件（hostconfig.json）</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> hostconfig.json</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161442191.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>我们找到8888端口，现在将他们都修改成8899，修改完之后保存退出；</p>
</blockquote>
<p>想要修改网络模式，映射地址或者映射端口都可以改了，要修改容器的什么文件，都可以在这里找到，当然下面的也要修改；</p>
<h3 id="_2-7、修改配置文件-config-v2-json" tabindex="-1"><a class="header-anchor" href="#_2-7、修改配置文件-config-v2-json"><span>2.7、修改配置文件（config.v2.json）</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config.v2.json</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161442352.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>也是同样的将8888修改成8899，修改完之后保存退出；</p>
</blockquote>
<h3 id="_2-8、启动docker服务" tabindex="-1"><a class="header-anchor" href="#_2-8、启动docker服务"><span>2.8、启动docker服务</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-9、查看端口是否修改" tabindex="-1"><a class="header-anchor" href="#_2-9、查看端口是否修改"><span>2.9、查看端口是否修改</span></a></h3>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161444545.png" alt="" loading="lazy"><br>
这里看到端口已经被修改，我们就可以启动容器了</p>
<h3 id="_2-10、启动docker容器" tabindex="-1"><a class="header-anchor" href="#_2-10、启动docker容器"><span>2.10、启动docker容器</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> abc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">容器名</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意！！！</span></a></h2>
<p>docker修改完映射端口后，docker的ip可能会发生变化。</p>
</div></template>


