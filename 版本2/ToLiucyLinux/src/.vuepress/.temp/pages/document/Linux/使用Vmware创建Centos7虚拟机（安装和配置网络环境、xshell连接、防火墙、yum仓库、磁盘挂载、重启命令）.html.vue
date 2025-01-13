<template><div><h2 id="网络配置-nat" tabindex="-1"><a class="header-anchor" href="#网络配置-nat"><span><font color=red>网络配置 NAT</font></span></a></h2>
<p>前提：</p>
<blockquote>
<p>配置网络配置的时候需要先看本机的ip；<br>
<code v-pre>cmd</code>打开输入<code v-pre>ipconfig</code>查看本机ip</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412201046754.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>可以看出ip为<code v-pre>192.168.0.103</code>，子网掩码为：<code v-pre>255.255.255.0</code>，默认网关为：<code v-pre>192.168.0.1</code><br>
那么我们配置虚拟机ip的时候就不能写：192.168.2.10之类的了，需要和本机相关；</p>
</blockquote>
<p>所以，配置的内容：网关需要和本机一致：<code v-pre>192.168.0.1</code>，子网掩码也是一样的：<code v-pre>255.255.255.0</code>，ip的话可以设置：<code v-pre>192.168.0.1 - 192.168.0.255</code></p>
<p>注意：</p>
<blockquote>
<p>此方法适用于<code v-pre>桥接模式</code>，如果开始设置的模式为<code v-pre>net模式</code>，则还需要到<code v-pre>虚拟机中</code>的<code v-pre>虚拟网络编辑器</code>中配置，详细配置可百度一下：<a href="https://www.baidu.com/s?ie=utf-8&amp;f=8&amp;rsv_bp=1&amp;tn=baidu&amp;wd=vamware%E8%99%9A%E6%8B%9F%E6%9C%BA%E9%85%8D%E7%BD%AEnet%E7%BD%91%E7%BB%9C&amp;oq=vamware%2520%25E8%2599%259A%25E6%258B%259F%25E6%259C%25BA%25E9%2585%258D%25E7%25BD%25AEnet%25E7%25BD%2591%25E7%25BB%259C&amp;rsv_pq=b4c587e000002804&amp;rsv_t=7d756RDi%2bJFRWPyxy6r1OyDYklnF8CpmmqLUVKudH2VsqL/AiNLQfDjD3Sk&amp;rqlang=cn&amp;rsv_enter=1&amp;rsv_dl=tb&amp;rsv_btype=t&amp;inputT=221&amp;rsv_sug3=43&amp;rsv_sug1=33&amp;rsv_sug7=100&amp;rsv_sug2=0&amp;rsv_sug4=976" target="_blank" rel="noopener noreferrer">vamware虚拟机配置net网络</a><br>
因为桥接模式，比较简便多用，不用配置<code v-pre>虚拟网络编辑器</code>，也不用在本机配置<code v-pre>VMware Virtual Ethernet Adapter for VMnet8</code>。</p>
</blockquote>
<ul>
<li>进入网卡页面：</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/sysconfig/network-scripts/ifcfg-ens33</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>配置网络：</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">TYPE</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Ethernet</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">BOOTPROTO</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">static</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">NAME</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ens33</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">DEVICE</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ens33</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">ONBOOT</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">yes</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">IPADDR</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">192.168.0.10</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">NETMASK</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">255.255.255.0</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">GATEWAY</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">192.168.0.1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">DNS1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">114.114.114.114</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>重启网络服务</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/etc/init.d/network</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>查看网络信息</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412201046546.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>ping百度，测试是否可以连接网络</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> baidu.com</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412201046423.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以连接，那么就开始在本机ping刚刚配置的ip，如果可以ping通，这时候就可以用xshell等连接工具连接了。</p>
<h2 id="xshell连接慢如何解决" tabindex="-1"><a class="header-anchor" href="#xshell连接慢如何解决"><span><font color=red>xshell连接慢如何解决</font></span></a></h2>
<p>进入vi /etc/ssh/sshd_config<br>
再找到UseDNS 吧yes改成no，前面“#”符号也要删，保存退出<br>
重启ssh服务：<br>
systemctl restart sshd</p>
<h2 id="防火墙与selinux的关闭及开启和永久生效" tabindex="-1"><a class="header-anchor" href="#防火墙与selinux的关闭及开启和永久生效"><span><font color=red>防火墙与selinux的关闭及开启和永久生效 </font></span></a></h2>
<p>防火墙详情请看：👉<a href="https://blog.csdn.net/liu_chen_yang/article/details/123531619" target="_blank" rel="noopener noreferrer">Linux防火墙命令</a>👈</p>
<blockquote>
<p>systemctl stop firewalld  关闭防火墙服务<br>
start <br><br>
systemctl disable firewalld  禁止防火墙开机自启动<br>
enable <br><br>
firewall-cmd --state    查看防火墙状态		<br>
systemctl status firewalld<br><br>
systemctl is-enabled firewalld<br>
查看防火墙是否开机自启动  <br><br>
getenforce  查看selinux的状态<br>
setenforce  设置selinux的状态<br>
vi /etc/selinux/config<br>
vi /etc/sysconfig/selinux<br>
SELINUX=disabled<br>
重启系统生效</p>
</blockquote>
<h2 id="挂载磁盘" tabindex="-1"><a class="header-anchor" href="#挂载磁盘"><span><font color=red>挂载磁盘</font></span></a></h2>
<blockquote>
<p>查看磁盘信息：<br>
fdisk -l 查看<br><br>
创建目录：<br>
mkdir /media/cdrom<br>
mount /dev/sr0 /media/cdrom 挂载磁盘 <br><br>
df -Th 挂在完查看挂载信息</p>
</blockquote>
<p>如果遇到挂载时报错：<code v-pre>mount: 在 /dev/sr0 上找不到媒体</code><br>
请检查ISO映像文件的连接设置；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412201046739.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="配置本地yum仓库" tabindex="-1"><a class="header-anchor" href="#配置本地yum仓库"><span><font color=red>配置本地yum仓库</font></span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/yum.repos.d/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bak</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mv</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> *</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">.repo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bak</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>yum源文件存在 /etc/yum.repos.d 中<br><br>
创建一个文件(local.repo)：<br>
vi local.repo<br>
[local]<br>
name=local<br>
baseurl=file:///media/cdrom<br>
enabled=1<br>
gpgcheck=0</p>
</blockquote>
<blockquote>
<p>配置完成之后<br><br>
yum clean all  清除yum缓存<br>
yum makecache  建立新的yum缓存<br>
或者直接用：yum makecache fas<strong>t <font color=darkorange>加载未加载的缓存</font></strong><br>
<strong><font color=blue>安装vim和man命令：</font></strong> yum -y install vim man</p>
</blockquote>
<font color=red>设置永久挂载：</font><blockquote>
<p>进入fstab：<br><br>
vim /etc/fstab<br>
<code v-pre>/dev/sr0 /media/cdrom iso9660 defaults 0 0</code><br>
第一段:挂载的设备	<font color=darkorange>（dev/sr0）</font><br>
第二段:挂载的目录 	<font color=darkorange>（/media/cdrom）</font><br>
第三段:文件系统类型 <font color=darkorange>（iso9660）</font><br>
第四段:挂载的参数 defaults默认参数 <font color=darkorange> （defaults ）</font><br>
第五段:是否使用dump备份  0不备份  1备份 <font color=darkorange>（0）</font><br>
第六段:是否使用fsck检测  0不检测<font color=darkorange>（0）</font></p>
</blockquote>
<font color=red>注解：</font><blockquote>
<p>1.系统中只有一块硬盘，sda,分区sda1,sda2 ;<br>
2.根目录是整个系统目录的顶点，/mnt也在根目录下；<br>
3.如果知道根目录对应的是哪个硬盘分区，可以判断出<br>
a.txt存到哪个设备上；<br><br>
mount /dev/sr0 /media/cdrom<br>
mount /dev/sdb4 /mnt</p>
</blockquote>
<h2 id="扩展-挂载扩容盘" tabindex="-1"><a class="header-anchor" href="#扩展-挂载扩容盘"><span><font color=red>扩展：挂载扩容盘</font></span></a></h2>
<p>比如我们在创建虚拟机的时候还加了一块盘，想要挂载在/data/目录下，那么我们可以：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 先创建/data目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 挂载目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">fdisk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -l</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">	# 查看磁盘分区，确认新加的盘为那个，我这里是sdb</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 将新盘sdb挂载到data目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mount</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /dev/sdb</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 如果出现了下面的内容</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# mount /dev/sdb /data</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mount:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /dev/sdb</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 写保护，将以只读方式挂载</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mount:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 未知的文件系统类型“</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">”</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 那么需要格式化一下磁盘，也就是下面将的，分centos6与centos7</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# mkfs.xfs -f /dev/sdb</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">meta-data</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/dev/sdb</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">               isize</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">512</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    agcount</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">4,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> agsize</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">3932160</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> blks</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">         =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                       sectsz=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">512</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   attr=2,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> projid32bit=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">         =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                       crc=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        finobt=0,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sparse=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">data</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">     =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                       bsize=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">4096</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   blocks=15728640,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> imaxpct=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">25</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">         =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                       sunit=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      swidth=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> blks</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">naming</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   =version</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">              bsize=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">4096</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   ascii-ci=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ftype=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      =internal</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> log</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">           bsize=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">4096</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   blocks=7680,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> version=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">         =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                       sectsz=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">512</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   sunit=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> blks,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> lazy-count=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">realtime</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =none</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                   extsz=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">4096</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   blocks=0,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rtextents=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 这样就格式化完成了，然后再次进行挂载；</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mount</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /dev/sdb</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#就可以看到已经挂载完成了。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412201046334.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>现在挂载完成了，但是重启他会失效，需要重新挂载，如果我们不想重新挂载，那么可以和上面的挂载方法一样，设置永久挂载；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# vim /etc/fstab</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 在最后一行添加</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/dev/sdb</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> xfs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> defaults</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后保存退出，重启测试，如果配置的有问题会导致连接不上，需要到虚拟机或服务器重新配置，所以要谨慎更谨慎；</p>
<p>解析：</p>
<blockquote>
<p>/dev/sdb：为磁盘分区的目录，也就是挂载到data的源目录<br>
/data/：这个是目录路径，挂载的目标路径及目录<br>
xfs：centos7是xfs，centos6是ext4，如果不确定可以看在临时挂载的时候<code v-pre>df -Th</code>看到的<br>
defaults：挂载的参数 defaults默认参数<br>
第五段：是否使用dump备份  0不备份  1备份 <font color=darkorange>（0）</font><br>
第六段：是否使用fsck检测  0不检测<font color=darkorange>（0）</font></p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412201046475.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="扩展-格式化磁盘" tabindex="-1"><a class="header-anchor" href="#扩展-格式化磁盘"><span><font color=red>扩展：格式化磁盘</font></span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#Cetnos6格式化磁盘</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkfs.ext4</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /dev/[sda]</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#Centos7格式化磁盘</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkfs.xfs</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /dev/[sda]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>
<p><strong><font color=teal>重启系统的命令：reboot、init 6、shutdown -r </font></strong></p>
</div></template>


