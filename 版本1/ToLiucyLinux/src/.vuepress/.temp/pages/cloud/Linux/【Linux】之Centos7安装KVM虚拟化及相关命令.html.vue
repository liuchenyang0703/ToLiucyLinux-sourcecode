<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<figure><img src="https://img-blog.csdnimg.cn/9ecab3ffbedb43369695761e4656bd68.png#pic_center" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>@[toc]</p>
<hr>
<h1 id="备份网络配置-卸载时需要用到" tabindex="-1"><a class="header-anchor" href="#备份网络配置-卸载时需要用到" aria-hidden="true">#</a> 备份网络配置（卸载时需要用到）</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#进入网络配置目录</span>
<span class="token builtin class-name">cd</span> /etc/sysconfig/network-scripts/
<span class="token comment">#进行备份（备份时不要用原来的名字加bak这种备份，这种备份会在创建桥接设备时被清除）</span>
<span class="token function">mkdir</span> backup
<span class="token function">cp</span> <span class="token parameter variable">-ar</span> ifcfg-ens33 backup/ens33-bak
<span class="token comment">#或者直接</span>
<span class="token function">cp</span> <span class="token parameter variable">-ar</span> ifcfg-ens33 ens33-bak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="检测是否支持kvm虚拟化" tabindex="-1"><a class="header-anchor" href="#检测是否支持kvm虚拟化" aria-hidden="true">#</a> 检测是否支持KVM虚拟化</h1>
<blockquote>
<p>  KVM 是基于 x86 虚拟化扩展(Intel VT 或者 AMD-V) 技术的虚拟机软件，所以查看 CPU 是否支持 VT 技术，就可以判断是否支持KVM。有返回结果，如果结果中有vmx（Intel）或svm(AMD)字样，就说明CPU的支持的。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> /proc/cpuinfo <span class="token operator">|</span> <span class="token function">egrep</span> <span class="token string">'vmx|svm'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/7346a012bb83485fa93551cf613955f5.png" alt="" loading="lazy"><br>
由此可看到，我这边是支持的；</p>
<p>有一个要注意的就是：要关闭selinux沙盒</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#进入selinux中配置</span>
<span class="token function">vim</span> /etc/sysconfig/selinux 

<span class="token comment">#将第6行设置为disabled</span>
<span class="token assign-left variable">SELINUX</span><span class="token operator">=</span>disabled

<span class="token comment">#保存退出;重启系统生效</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><font color=red>如果是虚拟机的话，记得在虚拟机设置中开启虚拟化</font><figure><img src="https://img-blog.csdnimg.cn/d8b733b181f44fdca677722cc242fd73.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="查看是否加载上kvm" tabindex="-1"><a class="header-anchor" href="#查看是否加载上kvm" aria-hidden="true">#</a> 查看是否加载上KVM</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># lsmod | grep kvm</span>
kvm_intel             <span class="token number">188644</span>  <span class="token number">0</span> 
kvm                   <span class="token number">621480</span>  <span class="token number">1</span> kvm_intel
irqbypass              <span class="token number">13503</span>  <span class="token number">1</span> kvm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有结果则加载上了KVM，如果没有的话可执行以下命令，再次查看；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># lsmod | grep kvm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="安装kvm相关软件包" tabindex="-1"><a class="header-anchor" href="#安装kvm相关软件包" aria-hidden="true">#</a> 安装KVM相关软件包</h1>
<p>通过 yum 安装 kvm 基础包和管理工具</p>
<p>kvm相关安装包及其作用:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>qemu-kvm 			主要的KVM程序包
python-virtinst	 	创建虚拟机所需要的命令行工具和程序库
virt-manager 		GUI虚拟机管理工具
virt-top 			虚拟机统计命令
virt-viewer 		GUI连接程序，连接到已配置好的虚拟机
libvirt 			C语言工具包，提供libvirt服务
libvirt-client 		为虚拟客户机提供的C语言工具包
virt-install 		基于libvirt服务的虚拟机创建命令
bridge-utils 		创建和管理桥接设备的工具
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装KVM所需的包</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> qemu-kvm python-virtinst libvirt libvirt-python virt-manager libguestfs-tools bridge-utils virt-install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="开启kvm服务libvirt并设置开机自启" tabindex="-1"><a class="header-anchor" href="#开启kvm服务libvirt并设置开机自启" aria-hidden="true">#</a> 开启KVM服务libvirt并设置开机自启</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># systemctl start libvirtd</span>
<span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># systemctl enable libvirtd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看libvirt当前的状态</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># systemctl status libvirtd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样就是正在运行时（绿色的running）</p>
<figure><img src="https://img-blog.csdnimg.cn/5de4b36647e749caac377e95ba8c7865.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="设置机器的存储" tabindex="-1"><a class="header-anchor" href="#设置机器的存储" aria-hidden="true">#</a> 设置机器的存储</h1>
<p>首先就是看那块有空间</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">df</span> <span class="token parameter variable">-Th</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/2464e1007a864b65bbc2331c6233b8f3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以看到/home目录下是有空间的，那么我们就将数据放到/home下：</p>
<p><strong>在/home目录下创建两个目录，一个存放系统镜像，一个做虚拟机的存储盘</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># mkdir -p /home/kvm/iso</span>
<span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># mkdir -p /home/kvm/images</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>准备镜像</p>
<blockquote>
<p>可以自己下载一个传到服务器中，也可以使用wget下载一个</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">wget</span> https://mirrors.aliyun.com/centos/7/isos/x86_64/CentOS-7-x86_64-Minimal-2009.iso
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上传镜像并将镜像放到/home/iso目录下</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mv</span> CentOS-7-x86_64-Minimal-2009.iso /home/iso/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="创建物理桥接设备" tabindex="-1"><a class="header-anchor" href="#创建物理桥接设备" aria-hidden="true">#</a> 创建物理桥接设备</h1>
<p>1.查看网卡信息</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ifconfig</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/eff2ba522878471a91f8e7811405e0ae.png" alt="" loading="lazy"><br>
2.关闭NetworkManager服务</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># chkconfig NetworkManager off</span>
<span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># service NetworkManager stop</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/5412775334e643e09f71cdbf8462473c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>3.桥接设备关联网卡</p>
<p>设备网卡要看自己的网卡名称，我这边是ens33，用ifconfig查看；第一步已经说了；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># virsh iface-bridge ens33 br0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/5d21ede3948a4c5f974ebcc7f670ceda.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>4.查看是否成功</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># brctl show</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/3295bd8e9014470fb2d4c69ce3ae10b0.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>多了一个br0，就可以看到已经成功了；</p>
<h1 id="进入图形化界面" tabindex="-1"><a class="header-anchor" href="#进入图形化界面" aria-hidden="true">#</a> 进入图形化界面</h1>
<p>如果虚拟机不是在本地的话，就需要装一个<font color=red><strong>Xmanager（虚拟化界面工具）</strong></font>,可自行百度下载；</p>
<p><strong><font color=gree>虚拟机中：</font></strong><br>
进入图形化界面：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>init <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果发现虚拟机没有反应，那就是安装的时候选择的最小安装，没有安装桌面环境；<br>
我们先来安装一下GNOME 桌面环境</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum groupinstall <span class="token parameter variable">-y</span> <span class="token string">"GNOME Desktop"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/e46c00e82e56430da51999b713eb2abe.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>安装完成之后，init 5 进入GNOME桌面环境：到虚拟机（vmvare）里操作；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>init <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入GNOME桌面环境之后按照下面一步步走就可以了；</p>
<p><img src="https://img-blog.csdnimg.cn/bc01d44b437147a1b70a756f23d9645a.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/a055aa0c3e544cbb9d9a69130ac6796e.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/6d5d6967edd94878954a2f175a7099eb.png" alt="" loading="lazy"></p>
<p>时区设置为上海</p>
<p><img src="https://img-blog.csdnimg.cn/073886f6845f461e8e68c54254c20891.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/03bda75977da46e3965825d770a64b5c.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/2ba11f28bc4a425bbf699f0d3e645487.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/4a2da576fc0d472583f8bfa4d9f3ac63.png" alt="" loading="lazy"></p>
<p>开始使用就好了</p>
<figure><img src="https://img-blog.csdnimg.cn/068c671c74354de7998e406a3fcf77cc.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="开始使用kvm" tabindex="-1"><a class="header-anchor" href="#开始使用kvm" aria-hidden="true">#</a> 开始使用KVM</h1>
<p>进入GNOME桌面环境之后我们打开终端；</p>
<p><img src="https://img-blog.csdnimg.cn/a2dd9e04fb914504b48b4d9177ec2b2d.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/20cce9f201d7469093c33ccd116277a2.png" alt="" loading="lazy"></p>
<h2 id="在虚拟机中创建新的虚拟机" tabindex="-1"><a class="header-anchor" href="#在虚拟机中创建新的虚拟机" aria-hidden="true">#</a> 在虚拟机中创建新的虚拟机</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#使用virt-manager命令打开虚拟机管理器</span>
virt-manager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/644442c4e50149249642d85e5deff420.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>打开虚拟系统管理器</p>
<blockquote>
<p>前面已经让上传了一个iso映像了，我们就用前面上传的吧，如果没上传创建虚拟机会找不到iso映像的。</p>
</blockquote>
<p><img src="https://img-blog.csdnimg.cn/ec7a5c1d6c5d4e198035237e2a0467bb.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/b1f75182d7e84afd95140439c53b42ec.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/8debf912a36f470db2d5527a495af7cf.png" alt="" loading="lazy"></p>
<p><img src="https://img-blog.csdnimg.cn/01fa7dacb9d84b82a01f26a6601754a2.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/07307d2fd77a4c55be25a48249f1380f.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/9810618d14724546b95c7aba51b3e664.png" alt="" loading="lazy"><img src="https://img-blog.csdnimg.cn/de1a1d91ec6d4faa8634b59120047c10.png" alt="" loading="lazy"><img src="https://img-blog.csdnimg.cn/aa4615e1abea4007b8f1375bdf9dbdaa.png" alt="在这里插入图片描述" loading="lazy"></p>
<p>如果要给大一点的话可以查看自己的磁盘空间，哪个目录大，就把iso放到哪个目录，这样就可以选择更大的空间了；</p>
<p><img src="https://img-blog.csdnimg.cn/84e632bdc3654f199caefd49b60fd71e.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/d8e6aa32fc5345948c5db45f0c453921.png" alt="在这里插入图片描述" loading="lazy"></p>
<p>点击完成就开始创建</p>
<p><img src="https://img-blog.csdnimg.cn/c9331642ff314fff878975134676e050.png" alt="在这里插入图片描述" loading="lazy"><img src="https://img-blog.csdnimg.cn/ddb3f85a504e4dd5a3a38380ca7897cb.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/633b7df0abe445f99ca6b4ad2fb8fc9c.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/36373a3bf2df4037b6bd8e47a653f36b.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/d3f590c858684cdb9203ea82ca407bab.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/ec2d6322db844b8fb864d014f601d1bc.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/a20afc73ce4c4fd6912b4125625a7bd0.png" alt="在这里插入图片描述" loading="lazy"><img src="https://img-blog.csdnimg.cn/89464e2279ee4e1c8fa5aa69fa86ff71.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/382a3921f2d541baa64e8be22bd6688f.png" alt="在这里插入图片描述" loading="lazy"></p>
<p>登录账号密码，账号就是root，密码就是刚刚设置的root密码；</p>
<figure><img src="https://img-blog.csdnimg.cn/b2e10ad641814a1aac68e04593dfbe4b.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="新的虚拟机创建完成" tabindex="-1"><a class="header-anchor" href="#新的虚拟机创建完成" aria-hidden="true">#</a> 新的虚拟机创建完成</h2>
<p>这样就可以在虚拟机中创建一个虚拟机了，也就是KVM了。</p>
<br>
<h1 id="【附加】virsh常用命令" tabindex="-1"><a class="header-anchor" href="#【附加】virsh常用命令" aria-hidden="true">#</a> 【附加】virsh常用命令</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># virsh --help                                     #查看命令帮忙</span>
 
<span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># virsh list                                       #显示正在运行的虚拟机</span>
 
<span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># virsh list --all                                 #显示所有的虚拟机</span>
 
<span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># virsh start vm-node1                             #启动vm-node1虚拟机</span>
 
<span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># virsh shutdown vm-node1                          #关闭vm-node1虚拟机</span>
 
<span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># virsh destroy vm-node1                           #虚拟机vm-node1强制断电</span>
 
<span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># virsh suspend vm-node1                           #挂起vm-node1虚拟机</span>
 
<span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># virsh resume vm-node1                            #恢复挂起的虚拟机</span>
 
<span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># virsh undefine vm-node1                          #删除虚拟机，慎用</span>
  
<span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># virsh edit vm-node1                              #修改vm-node1的xml配置文件（内存、磁盘空间....）都可以修改</span>

<span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># virsh dominfo vm-node1                           #查看虚拟机的配置信息</span>
 
<span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># virsh domiflist vm-node1                         #查看网卡配置信息</span>
 
<span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># virsh domblklist vm-node1                        #查看该虚拟机的磁盘位置</span>
 
<span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># virsh dumpxml vm-node1                           #查看KVM虚拟机当前配置</span>
 
<span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># virsh dumpxml vm-node1 > vm-node1.bak.xml        #备份vm-node1虚拟机的xml文件，原文件默认路径/etc/libvirt/qemu/vm-node1.xml</span>
 
<span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># virsh autostart vm-node1                         #KVM物理机开机自启动虚拟机，配置后会在此目录生成配置文件/etc/libvirt/qemu/autostart/vm-node1.xml</span>
 
<span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># virsh autostart --disable vm-node1               #取消开机自启动</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>KVM虚拟机快照相关命令</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># virsh snapshot-create test						#创建快照</span>

<span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># virsh snapshot-current test   					#查看快照版本信息</span>

<span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># virsh snapshot-list test     						#查看快照信息</span>

<span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># virsh snapshot-revert test 初始化环境（快照名称）  	#恢复虚拟机至1620616838</span>

<span class="token punctuation">[</span>root@kvm ~<span class="token punctuation">]</span><span class="token comment"># virsh snapshot-delete test 刚安装的vim（快照名称）	#删除快照</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>快照文件位置</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>/var/lib/libvirt/qemu/snapshot/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/0180bf9503e04733b02acfe610fffa55.gif#pic_center" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章" aria-hidden="true">#</a> 相关文章</h1>
<table>
<thead>
<tr>
<th>文章标题</th>
<th>文章地址</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/126303077" target="_blank" rel="noopener noreferrer">【Linux】之Centos7安装KVM虚拟化及相关命令<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/126303077" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/126303077<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/132076894" target="_blank" rel="noopener noreferrer">【Linux】之Centos7卸载KVM虚拟化服务<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/132076894" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/132076894<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
</div></template>


