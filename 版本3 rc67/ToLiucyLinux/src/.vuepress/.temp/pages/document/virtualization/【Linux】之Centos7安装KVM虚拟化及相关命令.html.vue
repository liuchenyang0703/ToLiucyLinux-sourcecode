<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者</a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主</a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主</a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区</a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181607803.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<hr>
<h2 id="备份网络配置-卸载时需要用到" tabindex="-1"><a class="header-anchor" href="#备份网络配置-卸载时需要用到"><span>备份网络配置（卸载时需要用到）</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#进入网络配置目录</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/sysconfig/network-scripts/</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#进行备份（备份时不要用原来的名字加bak这种备份，这种备份会在创建桥接设备时被清除）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> backup</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -ar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ifcfg-ens33</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> backup/ens33-bak</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#或者直接</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -ar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ifcfg-ens33</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ens33-bak</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="检测是否支持kvm虚拟化" tabindex="-1"><a class="header-anchor" href="#检测是否支持kvm虚拟化"><span>检测是否支持KVM虚拟化</span></a></h2>
<blockquote>
<p>  KVM 是基于 x86 虚拟化扩展(Intel VT 或者 AMD-V) 技术的虚拟机软件，所以查看 CPU 是否支持 VT 技术，就可以判断是否支持KVM。有返回结果，如果结果中有vmx（Intel）或svm(AMD)字样，就说明CPU的支持的。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /proc/cpuinfo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">egrep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'vmx|svm'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181607556.png" alt="" loading="lazy"><br>
由此可看到，我这边是支持的；</p>
<p>有一个要注意的就是：要关闭selinux沙盒</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#进入selinux中配置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/sysconfig/selinux</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#将第6行设置为disabled</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">SELINUX</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">disabled</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#保存退出;重启系统生效</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><font color=red>如果是虚拟机的话，记得在虚拟机设置中开启虚拟化</font><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181607168.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="查看是否加载上kvm" tabindex="-1"><a class="header-anchor" href="#查看是否加载上kvm"><span>查看是否加载上KVM</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# lsmod | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kvm</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kvm_intel</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">             188644</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kvm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">                   621480</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kvm_intel</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">irqbypass</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">              13503</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kvm</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有结果则加载上了KVM，如果没有的话可执行以下命令，再次查看；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# lsmod | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kvm</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="安装kvm相关软件包" tabindex="-1"><a class="header-anchor" href="#安装kvm相关软件包"><span>安装KVM相关软件包</span></a></h2>
<p>通过 yum 安装 kvm 基础包和管理工具</p>
<p>kvm相关安装包及其作用:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">qemu-kvm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 			主要的KVM程序包</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">python-virtinst</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">	 	创建虚拟机所需要的命令行工具和程序库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">virt-manager</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 		GUI虚拟机管理工具</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">virt-top</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 			虚拟机统计命令</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">virt-viewer</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 		GUI连接程序，连接到已配置好的虚拟机</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">libvirt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 			C语言工具包，提供libvirt服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">libvirt-client</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 		为虚拟客户机提供的C语言工具包</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">virt-install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 		基于libvirt服务的虚拟机创建命令</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">bridge-utils</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 		创建和管理桥接设备的工具</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装KVM所需的包</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> qemu-kvm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> python-virtinst</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> libvirt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> libvirt-python</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> virt-manager</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> libguestfs-tools</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bridge-utils</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> virt-install</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="开启kvm服务libvirt并设置开机自启" tabindex="-1"><a class="header-anchor" href="#开启kvm服务libvirt并设置开机自启"><span>开启KVM服务libvirt并设置开机自启</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# systemctl start libvirtd</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# systemctl enable libvirtd</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看libvirt当前的状态</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# systemctl status libvirtd</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这样就是正在运行时（绿色的running）</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181607656.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="设置机器的存储" tabindex="-1"><a class="header-anchor" href="#设置机器的存储"><span>设置机器的存储</span></a></h2>
<p>首先就是看那块有空间</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">df</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -Th</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181607698.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以看到/home目录下是有空间的，那么我们就将数据放到/home下：</p>
<p><strong>在/home目录下创建两个目录，一个存放系统镜像，一个做虚拟机的存储盘</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# mkdir -p /home/kvm/iso</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# mkdir -p /home/kvm/images</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>准备镜像</p>
<blockquote>
<p>可以自己下载一个传到服务器中，也可以使用wget下载一个</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://mirrors.aliyun.com/centos/7/isos/x86_64/CentOS-7-x86_64-Minimal-2009.iso</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上传镜像并将镜像放到/home/iso目录下</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> CentOS-7-x86_64-Minimal-2009.iso</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /home/iso/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="创建物理桥接设备" tabindex="-1"><a class="header-anchor" href="#创建物理桥接设备"><span>创建物理桥接设备</span></a></h2>
<p>1.查看网卡信息</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ifconfig</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181607013.png" alt="" loading="lazy"><br>
2.关闭NetworkManager服务</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# chkconfig NetworkManager off</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# service NetworkManager stop</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181607392.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>3.桥接设备关联网卡</p>
<p>设备网卡要看自己的网卡名称，我这边是ens33，用ifconfig查看；第一步已经说了；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# virsh iface-bridge ens33 br0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181607745.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>4.查看是否成功</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# brctl show</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181607146.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>多了一个br0，就可以看到已经成功了；</p>
<h2 id="进入图形化界面" tabindex="-1"><a class="header-anchor" href="#进入图形化界面"><span>进入图形化界面</span></a></h2>
<p>如果虚拟机不是在本地的话，就需要装一个<font color=red><strong>Xmanager（虚拟化界面工具）</strong></font>,可自行百度下载；</p>
<p><strong><font color=gree>虚拟机中：</font></strong><br>
进入图形化界面：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">init</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 5</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果发现虚拟机没有反应，那就是安装的时候选择的最小安装，没有安装桌面环境；<br>
我们先来安装一下GNOME 桌面环境</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> groupinstall</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "GNOME Desktop"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181606768.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>安装完成之后，init 5 进入GNOME桌面环境：到虚拟机（vmvare）里操作；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">init</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 5</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>进入GNOME桌面环境之后按照下面一步步走就可以了；</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181606198.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181606751.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181606986.png" alt="" loading="lazy"></p>
<p>时区设置为上海</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181606750.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181606760.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181606213.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181606218.png" alt="" loading="lazy"></p>
<p>开始使用就好了</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181606336.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="开始使用kvm" tabindex="-1"><a class="header-anchor" href="#开始使用kvm"><span>开始使用KVM</span></a></h2>
<p>进入GNOME桌面环境之后我们打开终端；</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181606467.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181606673.png" alt="" loading="lazy"></p>
<h3 id="在虚拟机中创建新的虚拟机" tabindex="-1"><a class="header-anchor" href="#在虚拟机中创建新的虚拟机"><span>在虚拟机中创建新的虚拟机</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#使用virt-manager命令打开虚拟机管理器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">virt-manager</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181606314.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>打开虚拟系统管理器</p>
<blockquote>
<p>前面已经让上传了一个iso映像了，我们就用前面上传的吧，如果没上传创建虚拟机会找不到iso映像的。</p>
</blockquote>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181606631.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181606305.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181606211.png" alt="" loading="lazy"></p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181605548.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181605768.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181605030.png" alt="" loading="lazy"><img src="https://img-blog.csdnimg.cn/de1a1d91ec6d4faa8634b59120047c10.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181605933.png" alt="" loading="lazy"></p>
<p>如果要给大一点的话可以查看自己的磁盘空间，哪个目录大，就把iso放到哪个目录，这样就可以选择更大的空间了；</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181605835.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181605051.png" alt="" loading="lazy"></p>
<p>点击完成就开始创建</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181605040.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181605152.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181605219.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181605546.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181605797.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181605287.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181605771.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181605099.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181605822.png" alt="" loading="lazy"></p>
<p>登录账号密码，账号就是root，密码就是刚刚设置的root密码；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181605959.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="新的虚拟机创建完成" tabindex="-1"><a class="header-anchor" href="#新的虚拟机创建完成"><span>新的虚拟机创建完成</span></a></h3>
<p>这样就可以在虚拟机中创建一个虚拟机了，也就是KVM了。</p>
<br>
<h3 id="【附加】virsh常用命令" tabindex="-1"><a class="header-anchor" href="#【附加】virsh常用命令"><span>【附加】virsh常用命令</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# virsh --help                                     </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看命令帮忙</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# virsh list                                       </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#显示正在运行的虚拟机</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# virsh list --all                                 </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#显示所有的虚拟机</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# virsh start vm-node1                             </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#启动vm-node1虚拟机</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# virsh shutdown vm-node1                          </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#关闭vm-node1虚拟机</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# virsh destroy vm-node1                           </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#虚拟机vm-node1强制断电</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# virsh suspend vm-node1                           </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#挂起vm-node1虚拟机</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# virsh resume vm-node1                            </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#恢复挂起的虚拟机</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# virsh undefine vm-node1                          </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#删除虚拟机，慎用</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# virsh edit vm-node1                              </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#修改vm-node1的xml配置文件（内存、磁盘空间....）都可以修改</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# virsh dominfo vm-node1                           </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看虚拟机的配置信息</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# virsh domiflist vm-node1                         </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看网卡配置信息</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# virsh domblklist vm-node1                        </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看该虚拟机的磁盘位置</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# virsh dumpxml vm-node1                           </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看KVM虚拟机当前配置</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# virsh dumpxml vm-node1 > vm-node1.bak.xml        </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#备份vm-node1虚拟机的xml文件，原文件默认路径/etc/libvirt/qemu/vm-node1.xml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# virsh autostart vm-node1                         </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#KVM物理机开机自启动虚拟机，配置后会在此目录生成配置文件/etc/libvirt/qemu/autostart/vm-node1.xml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# virsh autostart --disable vm-node1               </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#取消开机自启动</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>KVM虚拟机快照相关命令</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# virsh snapshot-create test						</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#创建快照</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# virsh snapshot-current test   					</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看快照版本信息</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# virsh snapshot-list test     						</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看快照信息</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# virsh snapshot-revert test 初始化环境（快照名称）  	</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#恢复虚拟机至1620616838</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@kvm ~]# virsh snapshot-delete test 刚安装的vim（快照名称）	</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#删除快照</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>快照文件位置</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/var/lib/libvirt/qemu/snapshot/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181605352.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章"><span>相关文章</span></a></h2>
<table>
<thead>
<tr>
<th>文章标题</th>
<th>文章地址</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/126303077" target="_blank" rel="noopener noreferrer">【Linux】之Centos7安装KVM虚拟化及相关命令</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/126303077" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/126303077</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/132076894" target="_blank" rel="noopener noreferrer">【Linux】之Centos7卸载KVM虚拟化服务</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/132076894" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/132076894</a></td>
</tr>
</tbody>
</table>
</div></template>


