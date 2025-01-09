<template><div><p>@[toc]</p>
<h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1>
<p>  <strong>操作系统：</strong> Linux<br>
  <strong>操作环境：</strong> Centos7</p>
<blockquote>
<p>  Linux系统中如何查看服务器带宽？本篇文章主要和大家分享一下Linux系统中查看服务器带宽的方法，有需要的朋友可以参考一下。</p>
</blockquote>
<p>众多网络相关的命令可查看：<a href="https://blog.csdn.net/liu_chen_yang/article/details/125146080?spm=1001.2014.3001.5501" target="_blank" rel="noopener noreferrer">【Linux】之【网络】相关的命令及解析[ethtool、nload、nethogs、iftop、iptraf、ifstat]<ExternalLinkIcon/></a></p>
<figure><img src="https://img-blog.csdnimg.cn/2202c89b6e50408d87973739946814ab.gif#pic_center" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="linux查看服务器带宽具体方法" tabindex="-1"><a class="header-anchor" href="#linux查看服务器带宽具体方法" aria-hidden="true">#</a>   linux查看服务器带宽具体方法</h1>
<h2 id="一、使用speedtest-cli命令查看下载和上传最大流量值" tabindex="-1"><a class="header-anchor" href="#一、使用speedtest-cli命令查看下载和上传最大流量值" aria-hidden="true">#</a>   一、使用speedtest-cli命令查看下载和上传最大流量值</h2>
<p>因为命令是python的，所以，需要先下载一个python，用pip下载次命令；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> python-pip

<span class="token comment">#等待下载完</span>

pip <span class="token function">install</span> speedtest-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/125d32ea133f45f183368c110c5cf3bf.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>root@cs:<span class="token punctuation">[</span>/root<span class="token punctuation">]</span>speedtest-cli 
Retrieving speedtest.net configuration<span class="token punctuation">..</span>.
Testing from China Unicom <span class="token punctuation">(</span><span class="token number">125.119</span>.20.3<span class="token punctuation">)</span><span class="token punctuation">..</span>.
Retrieving speedtest.net server list<span class="token punctuation">..</span>.
Selecting best server based on ping<span class="token punctuation">..</span>.
Hosted by China Telecom TianJin-5G <span class="token punctuation">(</span>TianJin<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token number">123.83</span> km<span class="token punctuation">]</span>: <span class="token number">47.213</span> ms
Testing download speed<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
Download: <span class="token number">16.36</span> Mbit/s
Testing upload speed<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
Upload: <span class="token number">18.58</span> Mbit/s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、查看网卡、网络的详情" tabindex="-1"><a class="header-anchor" href="#二、查看网卡、网络的详情" aria-hidden="true">#</a>   二、查看网卡、网络的详情</h2>
<h3 id="_1-查看服务器网络端口" tabindex="-1"><a class="header-anchor" href="#_1-查看服务器网络端口" aria-hidden="true">#</a>    1.查看服务器网络端口</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ifconfig</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/0f7611b3a40c4bacb0c065db9f6649b9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_2-ethtool命令查看宽带大小" tabindex="-1"><a class="header-anchor" href="#_2-ethtool命令查看宽带大小" aria-hidden="true">#</a>    2.ethtool命令查看宽带大小</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ethtool</span> 网卡名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@222 ~<span class="token punctuation">]</span><span class="token comment"># ethtool eno1</span>
Settings <span class="token keyword">for</span> eno1:
	Supported ports: <span class="token punctuation">[</span> TP <span class="token punctuation">]</span>
	Supported <span class="token function">link</span> modes:   10baseT/Half 10baseT/Full 
	                        100baseT/Half 100baseT/Full 
	                        1000baseT/Full 
	Supported pause frame use: No
	Supports auto-negotiation: Yes
	Supported FEC modes: Not reported
	Advertised <span class="token function">link</span> modes:  10baseT/Half 10baseT/Full 
	                        100baseT/Half 100baseT/Full 
	                        1000baseT/Full 
	Advertised pause frame use: No
	Advertised auto-negotiation: Yes
	Advertised FEC modes: Not reported
	Speed: 100Mb/s
	Duplex: Full
	Port: Twisted Pair
	PHYAD: <span class="token number">1</span>
	Transceiver: internal
	Auto-negotiation: on
	MDI-X: off <span class="token punctuation">(</span>auto<span class="token punctuation">)</span>
	Supports Wake-on: pumbg
	Wake-on: g
	Current message level: 0x00000007 <span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>
			       drv probe <span class="token function">link</span>
	Link detected: <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Speed: 100Mb/s 带宽为白兆</p>
<h2 id="三、nload命令实时统计网卡带宽使用率" tabindex="-1"><a class="header-anchor" href="#三、nload命令实时统计网卡带宽使用率" aria-hidden="true">#</a>   三、nload命令实时统计网卡带宽使用率</h2>
<p>没有nload命令的需要下载；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> nload

<span class="token comment">#等待下载完</span>

<span class="token comment">#直接使用命令查看</span>
nload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/bc13b4ec9e6242d5af7c16bc46bb445e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#指定网卡进入</span>
nload eno1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/25da3874c8974ac0a976cd7708b594b2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>  Incoming是进入网卡的流量，Outgoing是从这块网卡出去的流量，每一部分都有下面几个。<br/><br>
Curr：当前流量<br>
Avg：平均流量<br>
Min：最小流量<br>
Max：最大流量<br>
Ttl：总流量</p>
</blockquote>
<h2 id="四、dstat-n命令实时监测网络的状态" tabindex="-1"><a class="header-anchor" href="#四、dstat-n命令实时监测网络的状态" aria-hidden="true">#</a>   四、dstat -n命令实时监测网络的状态</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>dstat <span class="token parameter variable">-n</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/5d4e839ed3b44be096f8dba3c5d33dcd.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h1>
<h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章" aria-hidden="true">#</a>  相关文章</h2>
<blockquote>
<p>💻<a href="https://blog.csdn.net/liu_chen_yang/article/details/125143646" target="_blank" rel="noopener noreferrer">【Linux】之【CPU】相关的命令及解析[lscpu、mpstat]<ExternalLinkIcon/></a></p>
<hr>
<p>💻<a href="https://blog.csdn.net/liu_chen_yang/article/details/125146057" target="_blank" rel="noopener noreferrer">【Linux】之【内存】相关的命令&amp;&amp;解析以及内存相关的问题[free、meminfo、内存泄漏、内存溢出、Overcommit]<ExternalLinkIcon/></a></p>
<hr>
<p>💻<a href="https://blog.csdn.net/liu_chen_yang/article/details/125256901?spm=1001.2014.3001.5501" target="_blank" rel="noopener noreferrer">【Linux】之【磁盘】相关的命令及解析[df、du、iostat、iotop]<ExternalLinkIcon/></a></p>
<hr>
<p>💻<a href="https://blog.csdn.net/liu_chen_yang/article/details/125146080" target="_blank" rel="noopener noreferrer">【Linux】之【网络】相关的命令及解析[ethtool、nload、nethogs、iftop、iptraf、ifstat]<ExternalLinkIcon/></a></p>
<hr>
<p>💻<a href="https://blog.csdn.net/liu_chen_yang/article/details/125146126" target="_blank" rel="noopener noreferrer">【Linux】综合性命令及解析【top、htop、vmstat、dstat、glances、sar】<ExternalLinkIcon/></a></p>
<hr>
<p>💻<a href="https://blog.csdn.net/liu_chen_yang/article/details/125169987" target="_blank" rel="noopener noreferrer">【Linux】系统如何查看服务器带宽及网络使用情况<ExternalLinkIcon/></a></p>
<hr>
</blockquote>
</div></template>


