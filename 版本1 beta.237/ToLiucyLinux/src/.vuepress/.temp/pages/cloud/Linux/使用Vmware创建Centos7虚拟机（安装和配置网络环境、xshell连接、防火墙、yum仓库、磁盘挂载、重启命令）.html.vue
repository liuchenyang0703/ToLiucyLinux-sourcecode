<template><div><p>@[toc]</p>
<h2 id="网络配置-nat" tabindex="-1"><a class="header-anchor" href="#网络配置-nat" aria-hidden="true">#</a> <font color=red>网络配置 NAT</font></h2>
<p>前提：</p>
<blockquote>
<p>配置网络配置的时候需要先看本机的ip；<br>
<code v-pre>cmd</code>打开输入<code v-pre>ipconfig</code>查看本机ip</p>
</blockquote>
<figure><img src="https://i-blog.csdnimg.cn/blog_migrate/f018f3b1fd26b0876be4e92025e1da1f.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<blockquote>
<p>可以看出ip为<code v-pre>192.168.0.103</code>，子网掩码为：<code v-pre>255.255.255.0</code>，默认网关为：<code v-pre>192.168.0.1</code><br>
那么我们配置虚拟机ip的时候就不能写：192.168.2.10之类的了，需要和本机相关；</p>
</blockquote>
<p>所以，配置的内容：网关需要和本机一致：<code v-pre>192.168.0.1</code>，子网掩码也是一样的：<code v-pre>255.255.255.0</code>，ip的话可以设置：<code v-pre>192.168.0.1 - 192.168.0.255</code></p>
<p>注意：</p>
<blockquote>
<p>此方法适用于<code v-pre>桥接模式</code>，如果开始设置的模式为<code v-pre>net模式</code>，则还需要到<code v-pre>虚拟机中</code>的<code v-pre>虚拟网络编辑器</code>中配置，详细配置可百度一下：<a href="https://www.baidu.com/s?ie=utf-8&amp;f=8&amp;rsv_bp=1&amp;tn=baidu&amp;wd=vamware%E8%99%9A%E6%8B%9F%E6%9C%BA%E9%85%8D%E7%BD%AEnet%E7%BD%91%E7%BB%9C&amp;oq=vamware%2520%25E8%2599%259A%25E6%258B%259F%25E6%259C%25BA%25E9%2585%258D%25E7%25BD%25AEnet%25E7%25BD%2591%25E7%25BB%259C&amp;rsv_pq=b4c587e000002804&amp;rsv_t=7d756RDi%2bJFRWPyxy6r1OyDYklnF8CpmmqLUVKudH2VsqL/AiNLQfDjD3Sk&amp;rqlang=cn&amp;rsv_enter=1&amp;rsv_dl=tb&amp;rsv_btype=t&amp;inputT=221&amp;rsv_sug3=43&amp;rsv_sug1=33&amp;rsv_sug7=100&amp;rsv_sug2=0&amp;rsv_sug4=976" target="_blank" rel="noopener noreferrer">vamware虚拟机配置net网络<ExternalLinkIcon/></a><br>
因为桥接模式，比较简便多用，不用配置<code v-pre>虚拟网络编辑器</code>，也不用在本机配置<code v-pre>VMware Virtual Ethernet Adapter for VMnet8</code>。</p>
</blockquote>
<ul>
<li>进入网卡页面：</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> /etc/sysconfig/network-scripts/ifcfg-ens33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>配置网络：</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token assign-left variable">TYPE</span><span class="token operator">=</span>Ethernet
<span class="token assign-left variable">BOOTPROTO</span><span class="token operator">=</span>static
<span class="token assign-left variable">NAME</span><span class="token operator">=</span>ens33
<span class="token assign-left variable">DEVICE</span><span class="token operator">=</span>ens33
<span class="token assign-left variable">ONBOOT</span><span class="token operator">=</span>yes
<span class="token assign-left variable">IPADDR</span><span class="token operator">=</span><span class="token number">192.168</span>.0.10
<span class="token assign-left variable">NETMASK</span><span class="token operator">=</span><span class="token number">255.255</span>.255.0
<span class="token assign-left variable">GATEWAY</span><span class="token operator">=</span><span class="token number">192.168</span>.0.1
<span class="token assign-left variable">DNS1</span><span class="token operator">=</span><span class="token number">114.114</span>.114.114
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>重启网络服务</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>/etc/init.d/network restart 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>查看网络信息</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ip</span> a 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://i-blog.csdnimg.cn/blog_migrate/ff21ddfb039d3cc31c23fc7d709a3424.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>ping百度，测试是否可以连接网络</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ping</span> baidu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://i-blog.csdnimg.cn/blog_migrate/4448d664c3de02608fd1fe9eb8bdbced.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>可以连接，那么就开始在本机ping刚刚配置的ip，如果可以ping通，这时候就可以用xshell等连接工具连接了。</p>
<h2 id="xshell连接慢如何解决" tabindex="-1"><a class="header-anchor" href="#xshell连接慢如何解决" aria-hidden="true">#</a> <font color=red>xshell连接慢如何解决</font></h2>
<p>进入vi /etc/ssh/sshd_config<br>
再找到UseDNS 吧yes改成no，前面“#”符号也要删，保存退出<br>
重启ssh服务：<br>
systemctl restart sshd</p>
<h2 id="防火墙与selinux的关闭及开启和永久生效" tabindex="-1"><a class="header-anchor" href="#防火墙与selinux的关闭及开启和永久生效" aria-hidden="true">#</a> <font color=red>防火墙与selinux的关闭及开启和永久生效 </font></h2>
<p>防火墙详情请看：👉<a href="https://blog.csdn.net/liu_chen_yang/article/details/123531619" target="_blank" rel="noopener noreferrer">Linux防火墙命令<ExternalLinkIcon/></a>👈</p>
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
<h2 id="挂载磁盘" tabindex="-1"><a class="header-anchor" href="#挂载磁盘" aria-hidden="true">#</a> <font color=red>挂载磁盘</font></h2>
<blockquote>
<p>查看磁盘信息：<br>
fdisk -l 查看<br><br>
创建目录：<br>
mkdir /media/cdrom<br>
mount /dev/sr0 /media/cdrom 挂载磁盘 <br><br>
df -Th 挂在完查看挂载信息</p>
</blockquote>
<h2 id="配置本地yum仓库" tabindex="-1"><a class="header-anchor" href="#配置本地yum仓库" aria-hidden="true">#</a> <font color=red>配置本地yum仓库</font></h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/yum.repos.d/
<span class="token function">mkdir</span> bak
<span class="token function">mv</span> *.repo bak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
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
<h2 id="扩展-挂载扩容盘" tabindex="-1"><a class="header-anchor" href="#扩展-挂载扩容盘" aria-hidden="true">#</a> <font color=red>扩展：挂载扩容盘</font></h2>
<p>比如我们在创建虚拟机的时候还加了一块盘，想要挂载在/data/目录下，那么我们可以：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 先创建/data目录</span>
<span class="token function">mkdir</span> /data

<span class="token comment"># 挂载目录</span>
<span class="token function">fdisk</span> <span class="token parameter variable">-l</span>	<span class="token comment"># 查看磁盘分区，确认新加的盘为那个，我这里是sdb</span>

<span class="token comment"># 将新盘sdb挂载到data目录</span>
<span class="token function">mount</span> /dev/sdb /data

<span class="token comment"># 如果出现了下面的内容</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mount /dev/sdb /data</span>
mount: /dev/sdb 写保护，将以只读方式挂载
mount: 未知的文件系统类型“<span class="token punctuation">(</span>null<span class="token punctuation">)</span>”
<span class="token comment"># 那么需要格式化一下磁盘，也就是下面将的，分centos6与centos7</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkfs.xfs -f /dev/sdb</span>
meta-data<span class="token operator">=</span>/dev/sdb               <span class="token assign-left variable">isize</span><span class="token operator">=</span><span class="token number">512</span>    <span class="token assign-left variable">agcount</span><span class="token operator">=</span><span class="token number">4</span>, <span class="token assign-left variable">agsize</span><span class="token operator">=</span><span class="token number">3932160</span> blks
         <span class="token operator">=</span>                       <span class="token assign-left variable">sectsz</span><span class="token operator">=</span><span class="token number">512</span>   <span class="token assign-left variable">attr</span><span class="token operator">=</span><span class="token number">2</span>, <span class="token assign-left variable">projid32bit</span><span class="token operator">=</span><span class="token number">1</span>
         <span class="token operator">=</span>                       <span class="token assign-left variable">crc</span><span class="token operator">=</span><span class="token number">1</span>        <span class="token assign-left variable">finobt</span><span class="token operator">=</span><span class="token number">0</span>, <span class="token assign-left variable">sparse</span><span class="token operator">=</span><span class="token number">0</span>
data     <span class="token operator">=</span>                       <span class="token assign-left variable">bsize</span><span class="token operator">=</span><span class="token number">4096</span>   <span class="token assign-left variable">blocks</span><span class="token operator">=</span><span class="token number">15728640</span>, <span class="token assign-left variable">imaxpct</span><span class="token operator">=</span><span class="token number">25</span>
         <span class="token operator">=</span>                       <span class="token assign-left variable">sunit</span><span class="token operator">=</span><span class="token number">0</span>      <span class="token assign-left variable">swidth</span><span class="token operator">=</span><span class="token number">0</span> blks
naming   <span class="token operator">=</span>version <span class="token number">2</span>              <span class="token assign-left variable">bsize</span><span class="token operator">=</span><span class="token number">4096</span>   ascii-ci<span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">ftype</span><span class="token operator">=</span><span class="token number">1</span>
log      <span class="token operator">=</span>internal log           <span class="token assign-left variable">bsize</span><span class="token operator">=</span><span class="token number">4096</span>   <span class="token assign-left variable">blocks</span><span class="token operator">=</span><span class="token number">7680</span>, <span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token number">2</span>
         <span class="token operator">=</span>                       <span class="token assign-left variable">sectsz</span><span class="token operator">=</span><span class="token number">512</span>   <span class="token assign-left variable">sunit</span><span class="token operator">=</span><span class="token number">0</span> blks, lazy-count<span class="token operator">=</span><span class="token number">1</span>
realtime <span class="token operator">=</span>none                   <span class="token assign-left variable">extsz</span><span class="token operator">=</span><span class="token number">4096</span>   <span class="token assign-left variable">blocks</span><span class="token operator">=</span><span class="token number">0</span>, <span class="token assign-left variable">rtextents</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token comment"># 这样就格式化完成了，然后再次进行挂载；</span>
<span class="token function">mount</span> /dev/sdb /data
<span class="token comment">#就可以看到已经挂载完成了。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i-blog.csdnimg.cn/blog_migrate/2d56e30a2f0d553d7e6822560a681e82.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>现在挂载完成了，但是重启他会失效，需要重新挂载，如果我们不想重新挂载，那么可以和上面的挂载方法一样，设置永久挂载；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/fstab</span>

<span class="token comment"># 在最后一行添加</span>
/dev/sdb /data/ xfs defaults <span class="token number">0</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后保存退出，重启测试，如果配置的有问题会导致连接不上，需要到虚拟机或服务器重新配置，所以要谨慎更谨慎；</p>
<p>解析：</p>
<blockquote>
<p>/dev/sdb：为磁盘分区的目录，也就是挂载到data的源目录<br>
/data/：这个是目录路径，挂载的目标路径及目录<br>
xfs：centos7是xfs，centos6是ext4，如果不确定可以看在临时挂载的时候<code v-pre>df -Th</code>看到的<br>
defaults：挂载的参数 defaults默认参数<br>
第五段：是否使用dump备份  0不备份  1备份 <font color=darkorange>（0）</font><br>
第六段：是否使用fsck检测  0不检测<font color=darkorange>（0）</font></p>
</blockquote>
<figure><img src="https://i-blog.csdnimg.cn/blog_migrate/89e4e4359acb9111e58c81184c55631a.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="扩展-格式化磁盘" tabindex="-1"><a class="header-anchor" href="#扩展-格式化磁盘" aria-hidden="true">#</a> <font color=red>扩展：格式化磁盘</font></h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#Cetnos6格式化磁盘</span>
mkfs.ext4 <span class="token parameter variable">-f</span> /dev/<span class="token punctuation">[</span>sda<span class="token punctuation">]</span>
<span class="token comment">#Centos7格式化磁盘</span>
mkfs.xfs <span class="token parameter variable">-f</span> /dev/<span class="token punctuation">[</span>sda<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>
<p><strong><font color=teal>重启系统的命令：reboot、init 6、shutdown -r </font></strong></p>
<figure><img src="https://i-blog.csdnimg.cn/blog_migrate/649dc13908775068851162b903819d3c.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>              <font size=5>总文章在：<a href="https://blog.csdn.net/liu_chen_yang/article/details/114872010?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Linux常用命令<ExternalLinkIcon/></a><br>
<img src="https://i-blog.csdnimg.cn/blog_migrate/1a082e6156d0a6a495bc37f0a5f878f2.png" alt="在这里插入图片描述" loading="lazy"></p>
</div></template>


