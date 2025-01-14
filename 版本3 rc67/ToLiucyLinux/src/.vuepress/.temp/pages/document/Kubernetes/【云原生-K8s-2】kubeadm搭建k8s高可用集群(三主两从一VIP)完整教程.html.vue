<template><div><blockquote>
<p>🍁<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者</a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主</a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主</a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区</a> 欢迎大家的加入！</p>
</blockquote>
<h2 id="kubernetes高可用集群部署" tabindex="-1"><a class="header-anchor" href="#kubernetes高可用集群部署"><span>Kubernetes高可用集群部署</span></a></h2>
<h2 id="准备工作-所有节点都要做同样的操作" tabindex="-1"><a class="header-anchor" href="#准备工作-所有节点都要做同样的操作"><span>准备工作（所有节点都要做同样的操作）</span></a></h2>
<h3 id="服务器配置" tabindex="-1"><a class="header-anchor" href="#服务器配置"><span>服务器配置</span></a></h3>
<table>
<thead>
<tr>
<th>高可用集群（三主两从一VIP）</th>
<th>主机名</th>
<th>ip地址</th>
<th>配置</th>
<th>需要用到的服务</th>
</tr>
</thead>
<tbody>
<tr>
<td>主</td>
<td>k8s-master1</td>
<td>172.16.11.215</td>
<td>2C/2G/50G</td>
<td>kubeadm,docker,keepalived,haproxy</td>
</tr>
<tr>
<td>主</td>
<td>k8s-master2</td>
<td>172.16.11.216</td>
<td>2C/2G/50G</td>
<td>kubeadm,docker,keepalived,haproxy</td>
</tr>
<tr>
<td>主</td>
<td>k8s-master3</td>
<td>172.16.11.217</td>
<td>2C/2G/50G</td>
<td>kubeadm,docker,keepalived,haproxy</td>
</tr>
<tr>
<td>从</td>
<td>k8s-node1</td>
<td>172.16.11.218</td>
<td>2C/2G/50G</td>
<td>kubeadm,docker</td>
</tr>
<tr>
<td>从</td>
<td>k8s-node2</td>
<td>172.16.11.219</td>
<td>2C/2G/50G</td>
<td>kubeadm,docker</td>
</tr>
<tr>
<td>VIP</td>
<td>k8s-vip</td>
<td>172.16.11.220</td>
<td>2C/1G/50G</td>
<td>什么都不用装</td>
</tr>
</tbody>
</table>
<h3 id="关闭防火墙" tabindex="-1"><a class="header-anchor" href="#关闭防火墙"><span>关闭防火墙</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> stop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> firewalld</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> disable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> firewalld</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果在线上服务器之类的不能关闭防火墙，那就需要开启几个端口；（这里说的是k8所用到的端口）</p>
<ul>
<li>master节点:</li>
</ul>
<table>
<thead>
<tr>
<th>规则</th>
<th>端口范围</th>
<th>作用</th>
<th>使用者</th>
</tr>
</thead>
<tbody>
<tr>
<td>TCP</td>
<td>6443*</td>
<td>Kubernetes API server</td>
<td>All</td>
</tr>
<tr>
<td>TCP</td>
<td>2379-2380</td>
<td>etcd server client API</td>
<td>kube-apiserver, etcd</td>
</tr>
<tr>
<td>TCP</td>
<td>10250</td>
<td>Kubelet API</td>
<td>Self, Control plane</td>
</tr>
<tr>
<td>TCP</td>
<td>10251</td>
<td>kube-scheduler</td>
<td>Self</td>
</tr>
<tr>
<td>TCP</td>
<td>10252</td>
<td>kube-controller-manager</td>
<td>Self</td>
</tr>
</tbody>
</table>
<ul>
<li>node节点：</li>
</ul>
<table>
<thead>
<tr>
<th>规则</th>
<th>端口范围</th>
<th>作用</th>
<th>使用者</th>
</tr>
</thead>
<tbody>
<tr>
<td>TCP</td>
<td>10252</td>
<td>Kubelet API</td>
<td>Self, Control plane</td>
</tr>
<tr>
<td>TCP</td>
<td>30000-32767</td>
<td>NodePort Services**</td>
<td>All</td>
</tr>
</tbody>
</table>
<h3 id="关闭selinux" tabindex="-1"><a class="header-anchor" href="#关闭selinux"><span>关闭selinux</span></a></h3>
<p>临时关闭selinux（沙河）如需永久关闭selinux需要修改为<code v-pre>sed -i 's/^SELINUX=enforcing$/SELINUX=disabled/' /etc/selinux/config</code></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#临时关闭selinux</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">setenforce</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#永久关闭selinux</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sed</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 's/^SELINUX=enforcing$/SELINUX=permissive/'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/selinux/config</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关闭交换分区" tabindex="-1"><a class="header-anchor" href="#关闭交换分区"><span>关闭交换分区</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#临时关闭所有的交换分区</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">swapoff</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -a</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#永久关闭所有的交换分区</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sed</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '/swap/s/^\(.*\)$/#\1/g'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/fstab</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改六台高可用集群的主机名-每个主机限一条命令" tabindex="-1"><a class="header-anchor" href="#修改六台高可用集群的主机名-每个主机限一条命令"><span>修改六台高可用集群的主机名：（每个主机限一条命令）</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# hostnamectl set-hostname k8s-master1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master2 ~]# hostnamectl set-hostname k8s-master2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master3 ~]# hostnamectl set-hostname k8s-master3</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-node1 ~]# hostnamectl set-hostname k8s-node1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-node2 ~]# hostnamectl set-hostname k8s-node2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-vip ~]# hostnamectl set-hostname k8s-vip</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="所有节点都添加集群ip与主机名到hosts中" tabindex="-1"><a class="header-anchor" href="#所有节点都添加集群ip与主机名到hosts中"><span>所有节点都添加集群ip与主机名到hosts中：</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> >> </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/etc/hosts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;&#x3C; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">172.16.11.215 k8s-master1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">172.16.11.216 k8s-master2</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">172.16.11.217 k8s-master3</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">172.16.11.218 k8s-node1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">172.16.11.219 k8s-node2</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">172.16.11.220 k8s-vip</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><font color=red>注意：ip一定要改成自己的ip，不要直接复制粘贴</font><h3 id="六台机器进行时间同步" tabindex="-1"><a class="header-anchor" href="#六台机器进行时间同步"><span>六台机器进行时间同步</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#安裝同步时间命令</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ntpdate</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#同步时间</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ntpdate</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cn.pool.ntp.org</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#设置定时任务每五分钟同步一次时间</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "*/5 * * * * root /usr/sbin/ntpdate cn.pool.ntp.org &#x26;>/dev/null"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> >> </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/etc/crontab</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="特殊说明" tabindex="-1"><a class="header-anchor" href="#特殊说明"><span>特殊说明:</span></a></h3>
<blockquote>
<p>如果是克隆虚拟机建议执行<font color=red>rm -rf /etc/udev/*</font> 保证网卡UUID不同</p>
</blockquote>
<h3 id="六台都安装需要的一些命令" tabindex="-1"><a class="header-anchor" href="#六台都安装需要的一些命令"><span>六台都安装需要的一些命令：</span></a></h3>
<ul>
<li>添加centos源并将下载地址更换为阿里云地址</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#添加centos源</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/yum.repos.d/CentOS-Base.repo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://mirrors.aliyun.com/repo/Centos-7.repo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#将下载地址更换为阿里云地址</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sed</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -i</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '/mirrors.cloud.aliyuncs.com/d'</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '/mirrors.aliyuncs.com/d'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/yum.repos.d/CentOS-Base.repo</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>添加epel扩展源</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/yum.repos.d/epel.repo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> http://mirrors.aliyun.com/repo/epel-7.repo</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>清除缓存</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> clean</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> all</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>重新加载源缓存</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> makecache</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>升级yum并安装一些会用到的命令</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> lrzsz</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> conntrack</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ipvsadm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ipset</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> jq</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> psmisc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sysstat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> curl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> iptables</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> net-tools</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> libseccomp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gcc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gcc-c++</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> yum-utils</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> device-mapper-persistent-data</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> lvm2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bash-completion</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sshpass</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>安装需要一些时间，就等待安装即可；</p>
<h3 id="调整能打开文件数大小" tabindex="-1"><a class="header-anchor" href="#调整能打开文件数大小"><span>调整能打开文件数大小</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# ulimit -SHn 65535</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# cat >> /etc/security/limits.conf &#x3C;&#x3C; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">* soft nofile 655360</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">* hard nofile 131072</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">* soft nproc 65535</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">* hard nproc 655350</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">* soft memlock unlimited</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">* hard memlock unlimited</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>补充说明:</p>
<blockquote>
<p>ulimit用于限制shell启动进程所占用的资源，支持以下各种类型的限制：所创建的内核文件的大小、进程数据块的大小、shell<br>
进程创建文件的大小、内存锁住的大小、常驻内存集的大小、打开文件描述符的数量、分配堆栈的最大大小、CPU<br>
时间、单个用户的最大线程数、Shell 进程所能使用的最大虚拟内存。同时，它支持硬资源和软资源的限制。<br>
hard:严格的设定，必定不能超过这个设定的数值 soft:警告的设定，可以超过这个设定值，但是若超过则有警告信息 限制资源:</p>
<ul>
<li>core – 限制内核文件的大小</li>
<li>date – 最大数据大小</li>
<li>fsize – 最大文件大小</li>
<li>memlock – 最大锁定内存地址空间</li>
<li>nofile – 打开文件的最大数目</li>
<li>rss – 最大持久设置大小</li>
<li>stack – 最大栈大小</li>
<li>cpu – 以分钟为单位的最多 CPU 时间</li>
<li>noproc – 进程的最大数目（系统的最大进程数）</li>
<li>as – 地址空间限制    maxlogins – 此用户允许登录的最大数目</li>
</ul>
</blockquote>
<h3 id="安装配置ipvsadm" tabindex="-1"><a class="header-anchor" href="#安装配置ipvsadm"><span>安装配置ipvsadm</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#安装所需的命令（上面已经全部安装了，可以不用管）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# yum -y install ipvsadm ipset sysstat conntrack libseccomp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#加载ipvs相关模块</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# modprobe -- ip_vs</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# modprobe -- ip_vs_rr</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# modprobe -- ip_vs_wrr</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# modprobe -- ip_vs_sh</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# modprobe -- nf_conntrack_ipv4</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# cat > /etc/modules-load.d/ipvs.conf &#x3C;&#x3C; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ip_vs</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ip_vs_lc</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ip_vs_wlc</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ip_vs_rr</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ip_vs_wrr</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ip_vs_lblc</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ip_vs_lblcr</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ip_vs_dh</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ip_vs_sh</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ip_vs_nq</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ip_vs_sed</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ip_vs_ftp</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ip_vs_sh</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">nf_conntrack_ipv4</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ip_tables</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ip_set</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">xt_set</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ipt_set</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ipt_rpfilter</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ipt_REJECT</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ipip</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# systemctl enable --now systemd-modules-load.service</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="高可用集群设置免密登录-在-master1-节点上操作" tabindex="-1"><a class="header-anchor" href="#高可用集群设置免密登录-在-master1-节点上操作"><span>高可用集群设置免密登录（在 master1 节点上操作）</span></a></h3>
<blockquote>
<p>在<code v-pre>master1</code>节点免密钥登录其他节点，安装过程中生成配置文件和证书均在master1上操作，集群管理也在master11上操作，阿里云或者AWS上需要单独一台kubectl服务器。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#生成密钥</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# ssh-keygen -t rsa -P </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">''</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> -f /root/.ssh/id_rsa &#x26;> /dev/null</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#循环给高可用集群进行免密设置</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">for</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> i</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> k8s-master1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> k8s-master2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> k8s-master3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> k8s-node1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> k8s-node2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">do</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> sshpass -p </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'123123'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ssh-copy-id -o </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">StrictHostKeyChecking</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'no'</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> .ssh/id_rsa.pub</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">done</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#完成之后最好测试以下免密登录</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下图就属于成功；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161408023.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="部署-docker-所有节点都需要部署" tabindex="-1"><a class="header-anchor" href="#部署-docker-所有节点都需要部署"><span>部署 docker（所有节点都需要部署）</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#安装docker所需的依赖包</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@docker ~]# yum install -y yum-utils device-mapper-persistent-data lvm2	</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#添加阿里云的docker镜像地址</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@docker ~]# sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x26;&#x26;#或者（二选一即可）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@docker ~]# wget https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo -O /etc/yum.repos.d/docker-ce.repo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#更新缓存，只处理新添加的yum源缓存</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@docker ~]# yum makecache fast</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#部署docker，默认安装最新版本</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@docker ~]# yum install -y docker-ce-20.10.14 docker-ce-cli-20.10.14 containerd.io</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看安装docker版本</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@docker ~]# docker --version(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">或者使用docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> version</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 20.10.14,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> build</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a224086</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#加载docker配置</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@docker ~]# systemctl daemon-reload</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#启动docker服务并设置开机自启</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@docker ~]# systemctl start docker &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看docker可以安装的版本，也可以自己安装指定版本，yum -y install docker-ce-19.03.12.el7</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@docker ~]# yum list docker-ce --showduplicates | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sort</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -r</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="给docker添加镜像加速器及cgroup并重启docker服务" tabindex="-1"><a class="header-anchor" href="#给docker添加镜像加速器及cgroup并重启docker服务"><span>给docker添加镜像加速器及cgroup并重启docker服务</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@docker ~]# mkdir -p /etc/docker</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@docker ~]# tee /etc/docker/daemon.json &#x3C;&#x3C;-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">'EOF'</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "registry-mirrors": ["https://mrlmpasq.mirror.aliyuncs.com"],</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "exec-opts": ["native.cgroupdriver=systemd"]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#由于新版kubelet建议使用systemd，所以可以把docker的CgroupDriver改成systemd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#重新加载docker配置</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@docker ~]# systemctl daemon-reload</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#重新启动docker服务</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@docker ~]# systemctl restart docker</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker部署完成" tabindex="-1"><a class="header-anchor" href="#docker部署完成"><span>docker部署完成</span></a></h3>
<h2 id="部署-kubernetes-所有节点都要部署" tabindex="-1"><a class="header-anchor" href="#部署-kubernetes-所有节点都要部署"><span>部署 kubernetes（所有节点都要部署）</span></a></h2>
<h3 id="配置相关的内核参数" tabindex="-1"><a class="header-anchor" href="#配置相关的内核参数"><span>配置相关的内核参数</span></a></h3>
<p>将桥接的IPv4 流量传递到iptables 的链</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> >> </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/etc/sysctl.d/k8s.conf</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">net.ipv4.ip_forward = 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">net.bridge.bridge-nf-call-iptables = 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">net.bridge.bridge-nf-call-ip6tables = 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">fs.may_detach_mounts = 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">vm.overcommit_memory=1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">vm.panic_on_oom=0</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">fs.inotify.max_user_watches=89100</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">fs.file-max=52706963</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">fs.nr_open=52706963</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">net.netfilter.nf_conntrack_max=2310720</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">net.ipv4.tcp_keepalive_time = 600</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">net.ipv4.tcp_keepalive_probes = 3</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">net.ipv4.tcp_keepalive_intvl =15</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">net.ipv4.tcp_max_tw_buckets = 36000</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">net.ipv4.tcp_tw_reuse = 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">net.ipv4.tcp_max_orphans = 327680</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">net.ipv4.tcp_orphan_retries = 3</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">net.ipv4.tcp_syncookies = 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">net.ipv4.tcp_max_syn_backlog = 16384</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">net.ipv4.ip_conntrack_max = 65536</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">net.ipv4.tcp_max_syn_backlog = 16384</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">net.ipv4.tcp_timestamps = 0</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">net.core.somaxconn = 16384</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#让其生效</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sysctl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --system</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加-k8s-yum源" tabindex="-1"><a class="header-anchor" href="#添加-k8s-yum源"><span>添加 k8s yum源</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@docker ~]# cat > /etc/yum.repos.d/kubernetes.repo &#x3C;&#x3C; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">[kubernetes]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">name=Kubernetes</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">enabled=1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">gpgcheck=0</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">repo_gpgcheck=0</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#重新加载缓存</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> makecache</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> fast</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-kubeadm-kubelet-kubectl" tabindex="-1"><a class="header-anchor" href="#安装-kubeadm-kubelet-kubectl"><span>安装 kubeadm kubelet kubectl</span></a></h3>
<blockquote>
<p>注：安装这几个版本不要用最新的，容易出问题</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kubeadm-1.20.0-0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kubelet-1.20.0-0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kubectl-1.20.0-0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看kubeadm版本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubeadm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> version</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>启动kubelet并设置开机自启</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kubelet</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kubelet</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="kubernetes强化tab-安装之后会tab可以补全命令及参数" tabindex="-1"><a class="header-anchor" href="#kubernetes强化tab-安装之后会tab可以补全命令及参数"><span>kubernetes强化tab（安装之后会tab可以补全命令及参数）</span></a></h3>
<ul>
<li>配置环境</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'source  &#x3C;(kubectl  completion  bash)'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> >> </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">~/.bashrc</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>1、退出连接，重新连接；<br>
2、或者<code v-pre>bash</code>更新环境就可以使用了。</p>
</blockquote>
<h2 id="部署keepalived、haproxy-配置高可用-所有-主节点-部署" tabindex="-1"><a class="header-anchor" href="#部署keepalived、haproxy-配置高可用-所有-主节点-部署"><span>部署keepalived、haproxy --&gt; 配置高可用（所有 <font color=red>主节点</font> 部署）</span></a></h2>
<blockquote>
<p>  这里使用高可用和负载的组件为haproxy和keepalived，如果kubernets不是高可用架构，可以不做haproxy与keepalived。如果是公有云平台部署可以选择公用云自带的负载均衡来代替haproxy和keepalived，比如阿里云的SLB,或者腾讯云的ELB(<code v-pre>大部分公有云不支持keepalived</code>)。如果使用的是阿里云，kubectl控制端不能放在master节点，因为阿里云SLB有回环问题，也就是说SLB代理的服务器不能反向访问这个问题，但是腾讯云修复了这个问题。</p>
</blockquote>
<hr>
<center>再次提醒，所有<font color=red> 主节点</font>，不是所有节点；</center>
<hr>
<ul>
<li>安装 keepalived 和 haproxy</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> keepalived</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> haproxy</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="所有-主节点-修改haproxy配置" tabindex="-1"><a class="header-anchor" href="#所有-主节点-修改haproxy配置"><span>所有 <font color=red>主节点</font> 修改haproxy配置</span></a></h3>
<blockquote>
<p>最后的<code v-pre>server</code>改为自己的主节点ip</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# cat /etc/haproxy/haproxy.cfg</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">global</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  maxconn</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  2000</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  ulimit-n</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  16384</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  log</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  127.0.0.1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> local0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> err</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  stats</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> timeout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 30s</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">defaults</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  log</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> global</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  mode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  http</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  option</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  httplog</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  timeout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> connect</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 5000</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  timeout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> client</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  50000</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  timeout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> server</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  50000</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  timeout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> http-request</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 15s</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  timeout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> http-keep-alive</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 15s</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">frontend</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> monitor-in</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  bind</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> *</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:33305</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  mode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> http</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  option</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> httplog</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  monitor-uri</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /monitor</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">frontend</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> k8s-master</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  bind</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 0.0.0.0:16443</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  bind</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 127.0.0.1:16443</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  mode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tcp</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  option</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tcplog</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  tcp-request</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> inspect-delay</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 5s</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  default_backend</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> k8s-master</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">backend</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> k8s-master</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  mode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tcp</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  option</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tcplog</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  option</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tcp-check</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  balance</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> roundrobin</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  default-server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> inter</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 10s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> downinter</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 5s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rise</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> fall</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> slowstart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 60s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> maxconn</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 250</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> maxqueue</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 256</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> weight</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 100</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> k8s-master1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">	172.16.11.215:6443</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  check</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> k8s-master2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">	172.16.11.216:6443</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  check</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> k8s-master3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">	172.16.11.217:6443</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  check</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="所有-主节点-配置keepalived-一个一个配置" tabindex="-1"><a class="header-anchor" href="#所有-主节点-配置keepalived-一个一个配置"><span>所有 <font color=red>主节点</font> 配置keepalived （一个一个配置）</span></a></h3>
<ul>
<li>k8s-master1节点配置</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# vim /etc/keepalived/keepalived.conf </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# cat /etc/keepalived/keepalived.conf</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>需要修改的地方有：（都需要根据自己的实际数值来改）<br>
◎　interface	     #网卡名称<br>
◎　mcast_src_ip	   #该节点的ip<br>
◎　virtual_ipaddress	  #vip地址</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">! </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Configuration</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> File</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> for</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> keepalived</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">global_defs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    router_id</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> LVS_DEVEL</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">script_user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> root</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    enable_script_security</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vrrp_script</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> chk_apiserver</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    script</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "/etc/keepalived/check_apiserver.sh"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    interval</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 5</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    weight</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -5</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    fall</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    rise</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vrrp_instance</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> VI_1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    state</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> MASTER</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">					#高可用主1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    interface</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> eth0</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">					#网卡名称</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    mcast_src_ip</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 172.16.11.215</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		#该节点 IP</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    virtual_router_id</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 51</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    priority</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 101</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">				#设置最高级优先级</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    advert_int</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    authentication</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        auth_type</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> PASS</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        auth_pass</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> K8SHA_KA_AUTH</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    virtual_ipaddress</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        172.16.11.220</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">			#vip地址</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    track_script</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">       chk_apiserver</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>k8s-master2节点配置</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master2 ~]# vim /etc/keepalived/keepalived.conf </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master2 ~]# cat /etc/keepalived/keepalived.conf</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>需要修改的地方有：（都需要根据自己的实际数值来改）<br>
◎　interface	     #网卡名称<br>
◎　mcast_src_ip	   #该节点的ip<br>
◎　virtual_ipaddress	  #vip地址</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">! </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Configuration</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> File</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> for</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> keepalived</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">global_defs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    router_id</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> LVS_DEVEL</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">script_user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> root</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    enable_script_security</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vrrp_script</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> chk_apiserver</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    script</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "/etc/keepalived/check_apiserver.sh"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    interval</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 5</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    weight</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -5</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    fall</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    rise</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vrrp_instance</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> VI_1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    state</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> BACKUP</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">					#高可用从1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    interface</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> eth0</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">					#网卡名称</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    mcast_src_ip</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 172.16.11.216</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		#该节点 IP</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    virtual_router_id</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 51</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    priority</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 100</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">				#设置优先级</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    advert_int</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    authentication</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        auth_type</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> PASS</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        auth_pass</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> K8SHA_KA_AUTH</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    virtual_ipaddress</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        172.16.11.220</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">			#vip地址</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    track_script</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">       chk_apiserver</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>k8s-master3节点配置</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master3 ~]# vim /etc/keepalived/keepalived.conf </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master3 ~]# cat /etc/keepalived/keepalived.conf</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>需要修改的地方有：（都需要根据自己的实际数值来改）<br>
◎　interface	     #网卡名称<br>
◎　mcast_src_ip	   #该节点的ip<br>
◎　virtual_ipaddress	  #vip地址</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">! </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Configuration</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> File</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> for</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> keepalived</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">global_defs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    router_id</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> LVS_DEVEL</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">script_user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> root</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    enable_script_security</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vrrp_script</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> chk_apiserver</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    script</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "/etc/keepalived/check_apiserver.sh"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    interval</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 5</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    weight</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -5</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    fall</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    rise</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vrrp_instance</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> VI_1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    state</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> BACKUP</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">					#高可用从2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    interface</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ens33</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">					#网卡名称</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    mcast_src_ip</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 172.16.11.217</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		#该节点 IP</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    virtual_router_id</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 51</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    priority</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 99</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">				#设置优先级</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    advert_int</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    authentication</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        auth_type</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> PASS</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        auth_pass</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> K8SHA_KA_AUTH</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    virtual_ipaddress</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        172.16.11.220</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">			#vip地址</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    track_script</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">       chk_apiserver</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="所有-主节点-编写健康检测脚本" tabindex="-1"><a class="header-anchor" href="#所有-主节点-编写健康检测脚本"><span>所有 <font color=red>主节点</font> 编写健康检测脚本</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# vim /etc/keepalived/check_apiserver.sh </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# cat /etc/keepalived/check_apiserver.sh</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">err</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">0</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">for</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> k</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> $(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">seq</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">do</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    check_code</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pgrep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> haproxy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [[ </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$check_code</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> ==</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ""</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ]]; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">then</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        err</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">expr</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $err</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> +</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        sleep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        continue</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    else</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        err</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">0</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        break</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    fi</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">done</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [[ </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$err</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> !=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "0"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ]]; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">then</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "systemctl stop keepalived"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    /usr/bin/systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> stop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> keepalived</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    exit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">else</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    exit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#给监测脚本添加执行权限</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# chmod +x /etc/keepalived/check_apiserver.sh</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="所有-主节点-启动-keepalived-与-haproxy" tabindex="-1"><a class="header-anchor" href="#所有-主节点-启动-keepalived-与-haproxy"><span>所有 <font color=red>主节点</font> 启动 keepalived 与 haproxy</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#生效配置文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# systemctl daemon-reload</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#启动并设置开机自启haproxy</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# systemctl enable --now haproxy</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Created</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> symlink</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/systemd/system/multi-user.target.wants/haproxy.service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/lib/systemd/system/haproxy.service.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#启动并设置开机自启keepalived</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# systemctl enable --now keepalived</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Created</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> symlink</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/systemd/system/multi-user.target.wants/keepalived.service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/lib/systemd/system/keepalived.service.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="k8s-master1主节点查看vip" tabindex="-1"><a class="header-anchor" href="#k8s-master1主节点查看vip"><span><font color=red>k8s-master1</font>主节点查看VIP</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看IP与vip的IP</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# hostname -I</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">172.16.11.215</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 172.16.11.220</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 172.17.0.1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#测试vip的16443端口是否通</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# telnet 172.16.11.220 16443</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Trying</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 172.16.11.220...</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Connected</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 172.16.11.220.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Escape</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> character</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '^]'.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Connection</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> closed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> by</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> foreign</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> host.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="master节点初始化-所有-master节点-操作-有单独在-master1节点-操作的则在master1节点操作即可" tabindex="-1"><a class="header-anchor" href="#master节点初始化-所有-master节点-操作-有单独在-master1节点-操作的则在master1节点操作即可"><span>master节点初始化（所有 <font color=red>master节点</font> 操作，有单独在 <font color=red>master1节点</font> 操作的则在master1节点操作即可）</span></a></h2>
<p>k8s-master1节点创建kubeadm-config.yaml配置文件如下：当然，也可以利用命令<code v-pre>kubeadm config print init-defaults</code>生成配置文件模板，然后进行修改：</p>
<blockquote>
<p>需要自行修改的有：</p>
<p>◎　advertiseAddress      #自己的master1节点IP<br>
◎　name    			       #自己的master1节点的名称<br>
◎　certSANs         #vip地址<br>
◎　controlPlaneEndpoint    #vip地址<br>
◎　kubernetesVersion     #kubernets版本<br>
◎　podSubnet	        #pod网段<br>
◎　serviceSubnet       #service网段</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# vim kubeadm-config.yaml</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">apiVersion:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kubeadm.k8s.io/v1beta2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">bootstrapTokens:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> groups:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> system:bootstrappers:kubeadm:default-node-token</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  token:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 7t2weq.bjbawausm0jaxury</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  #初始化集群使用的token</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  ttl:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 24h0m0s</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    #token有效期</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  usages:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> signing</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> authentication</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kind:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> InitConfiguration</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">localAPIEndpoint:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  advertiseAddress:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 172.16.11.215</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  bindPort:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 6443</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">nodeRegistration:</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">   #集群节点的信息</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  criSocket:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /var/run/dockershim.sock</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> k8s-master1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  taints:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> effect:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> NoSchedule</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    key:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> node-role.kubernetes.io/master</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">---</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">apiServer:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  certSANs:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 172.16.11.220</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  timeoutForControlPlane:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 4m0s</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">apiVersion:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kubeadm.k8s.io/v1beta2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">certificatesDir:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/kubernetes/pki</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">clusterName:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kubernetes</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">controlPlaneEndpoint:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 172.16.11.220:16443</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  #连接apiserver的地址</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">controllerManager:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dns:</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">  type</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> CoreDNS</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">etcd:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  local:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    dataDir:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /var/lib/etcd</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">imageRepository:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> registry.cn-hangzhou.aliyuncs.com/google_containers</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kind:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ClusterConfiguration</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubernetesVersion:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> v1.20.0</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  #与kubernets版本对应 </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">networking:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  dnsDomain:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cluster.local</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  podSubnet:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 172.16.10.1/18</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  serviceSubnet:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 172.17.0.1/16</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  #pod,service与宿主机都不在同一个网段</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">scheduler:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新配置文件" tabindex="-1"><a class="header-anchor" href="#更新配置文件"><span>更新配置文件</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubeadm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> migrate</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --old-config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kubeadm-config.yaml</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --new-config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> new.yaml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>将new.yaml文件复制到其他master节点，之后所有Master节点提前下载镜像，可以节省初始化时间</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">scp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> new.yaml</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 172.16.11.216:/root/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">scp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> new.yaml</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 172.16.11.217:/root/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看需要的镜像文件" tabindex="-1"><a class="header-anchor" href="#查看需要的镜像文件"><span>查看需要的镜像文件</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubeadm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> images</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> list</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /root/new.yaml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161408772.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="所有master节点启动" tabindex="-1"><a class="header-anchor" href="#所有master节点启动"><span>所有master节点启动</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubeadm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> images</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pull</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /root/new.yaml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="master1节点-初始化-初始化后生成对应的证书" tabindex="-1"><a class="header-anchor" href="#master1节点-初始化-初始化后生成对应的证书"><span><font color=red>master1节点</font> 初始化，初始化后生成对应的证书</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubeadm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> init</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /root/new.yaml</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --upload-certs</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161408706.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>说明:生成的token有效期为2个小时，如果token过期后，可以采用一下方案解决；<br>
Token过期后生成新的token：<br>
<code v-pre>kubeadm token create --print-join-command</code><br>
Master需要生成--certificate-key<br>
<code v-pre>kubeadm init phase upload-certs  --upload-certs</code></p>
</blockquote>
<h3 id="master1节点-配置环境变量-用于访问kubernetes集群" tabindex="-1"><a class="header-anchor" href="#master1节点-配置环境变量-用于访问kubernetes集群"><span><font color=red>master1节点 </font>配置环境变量，用于访问Kubernetes集群</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> >> </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/root/.bashrc</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">export KUBECONFIG=/etc/kubernetes/admin.conf</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#让其生效</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">source</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /root/.bashrc</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在-master1节点-查看集群节点状态" tabindex="-1"><a class="header-anchor" href="#在-master1节点-查看集群节点状态"><span>在 <font color=red>master1节点</font> 查看集群节点状态</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nodes</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161408673.png" alt="截图" tabindex="0" loading="lazy"><figcaption>截图</figcaption></figure>
<p>采用初始化安装方式，所有的系统组件均以容器的方式运行并且在<code v-pre>kube-system</code>命名空间内，此时可以查看Pod状态：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pods</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kube-system</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> wide</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161408375.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以看到有两个<code v-pre>READY</code>的状态是<code v-pre>0/1</code>，这个不用担心，后面节点加入之后就好了。</p>
<p>他是执行的时候有一个告警：<code v-pre>Warning  FailedScheduling  7s (x3 over 2m7s)   default-scheduler  0/1 nodes are available: 1 node(s) had taint {node.kubernetes.io/not-ready: }, that the pod didn't tolerate</code>。</p>
<h3 id="其他master节点加入集群-master2-和-master3-节点操作" tabindex="-1"><a class="header-anchor" href="#其他master节点加入集群-master2-和-master3-节点操作"><span>其他master节点加入集群（master2 和 master3 节点操作）</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master2 ~]# kubeadm join 172.16.11.220:16443 --token 7t2weq.bjbawausm0jaxury </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">   --discovery-token-ca-cert-hash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sha256:f370e43a5b3218b7b6094980edd4fac3b6104a272e465767d3c78dfad8c62066</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   --control-plane</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --certificate-key</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 26270907ae9b940062bd9f5e4daad59e2804a4a5bdbfb61c7ebb0e6d2f5e5839</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master3 ~]# kubeadm join 172.16.11.220:16443 --token 7t2weq.bjbawausm0jaxury </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">   --discovery-token-ca-cert-hash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sha256:f370e43a5b3218b7b6094980edd4fac3b6104a272e465767d3c78dfad8c62066</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   --control-plane</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --certificate-key</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 26270907ae9b940062bd9f5e4daad59e2804a4a5bdbfb61c7ebb0e6d2f5e5839</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161408788.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>加入成功，可以在master1上使用<code v-pre>kubectl get nods</code>来查看。</p>
<h3 id="node节点配置-node1-和-node2-节点操作" tabindex="-1"><a class="header-anchor" href="#node节点配置-node1-和-node2-节点操作"><span>Node节点配置（node1 和 node2 节点操作）</span></a></h3>
<p>  Node节点上主要部署公司的一些业务应用，生产环境中不建议Master节点部署系统组件之外的其他Pod，测试环境可以允许Master节点部署Pod以节省系统资源。</p>
<ul>
<li>将node节点添加到集群</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-node1 ~]# kubeadm join 172.16.11.220:16443 --token 7t2weq.bjbawausm0jaxury </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    --discovery-token-ca-cert-hash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sha256:f370e43a5b3218b7b6094980edd4fac3b6104a272e465767d3c78dfad8c62066</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-node2 ~]# kubeadm join 172.16.11.220:16443 --token 7t2weq.bjbawausm0jaxury </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    --discovery-token-ca-cert-hash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sha256:f370e43a5b3218b7b6094980edd4fac3b6104a272e465767d3c78dfad8c62066</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161408402.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>加入成功，可以在master1上使用<code v-pre>kubectl get nods</code>来查看。</p>
<ul>
<li>master1查看所有节点</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [root@k8s-master1 ~]# kubectl get nodes</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161408771.png" alt="截图" tabindex="0" loading="lazy"><figcaption>截图</figcaption></figure>
<p>现在的集群状态都是<code v-pre>NotReady</code>表示不可达；这是因为还没有安装网络插件，下面我们来安装一下网络插件（caclico）</p>
<h2 id="calico组件-只在-master1节点-操作-【网络插件-用于连接其他节点】" tabindex="-1"><a class="header-anchor" href="#calico组件-只在-master1节点-操作-【网络插件-用于连接其他节点】"><span>Calico组件（只在  master1节点  操作）【网络插件，用于连接其他节点】</span></a></h2>
<blockquote>
<p>  Calico是一个纯三层的协议，为OpenStack虚拟机和Docker容器提供多主机间通信。Calico不使用重叠网络比如flannel和libnetwork重叠网络驱动，它是一个纯三层的方法，使用虚拟路由代替虚拟交换，每一台虚拟路由通过BGP协议传播可达信息（路由）到剩余数据中心。</p>
</blockquote>
<h3 id="拉取安装包-安装包内包含-calico组件、metrics组件、dashboard组件" tabindex="-1"><a class="header-anchor" href="#拉取安装包-安装包内包含-calico组件、metrics组件、dashboard组件"><span>拉取安装包（安装包内包含：Calico组件、Metrics组件、Dashboard组件）</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://github.com/dotbalo/k8s-ha-install.git</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果拉取不下来，可以参考该地址下载：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#拉取完成进入该目录</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> k8s-ha-install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#切换到manual-installation-v1.20.x分支</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 k8s-ha-install]# git checkout manual-installation-v1.20.x</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改相关的配置文件" tabindex="-1"><a class="header-anchor" href="#修改相关的配置文件"><span>修改相关的配置文件</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#进入calico目录</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 k8s-ha-install]# cd calico/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意事项：</p>
<p>◎　需要改的就只要第一行的ip</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#将要修改的ip改为自己的ip，按照master节点顺序的改成自己的节点ip</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 calico]# sed -i </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'s#etcd_endpoints: "http://&#x3C;ETCD_IP>:&#x3C;ETCD_PORT>"#etcd_endpoints: "https://172.16.11.215:2379,https://172.16.11.216:2379,https://172.16.11.217:2379"#g'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> calico-etcd.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#设置临时环境变量ETCD_CA查看ca.crt文件并转化为base64格式取消换行符</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 calico]# </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">ETCD_CA</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/kubernetes/pki/etcd/ca.crt </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">|</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> base64</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> |</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> tr</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '\n'`</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#设置临时环境变量ETCD_CERT查看server.crt文件并转化为base64格式取消换行符</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 calico]# </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">ETCD_CERT</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/kubernetes/pki/etcd/server.crt </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">|</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> base64</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> |</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> tr</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '\n'`</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#设置临时环境变量ETCD_KEY查看server.key文件并转化为base64格式取消换行符</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 calico]# </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">ETCD_KEY</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/kubernetes/pki/etcd/server.key </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">|</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> base64</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> |</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> tr</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '\n'`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#更换calico-etcd.yaml文件中的# etcd-key: null、# etcd-cert: null、# etcd-ca: null为指定值，临时的环境变量这这用。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 calico]# sed -i </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"s/# etcd-key: null/etcd-key: </span><span style="--shiki-light:#E45649;--shiki-dark:#98C379">${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">ETCD_KEY</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/g; s/# etcd-cert: null/etcd-cert: </span><span style="--shiki-light:#E45649;--shiki-dark:#98C379">${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">ETCD_CERT</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/g; s/# etcd-ca: null/etcd-ca: </span><span style="--shiki-light:#E45649;--shiki-dark:#98C379">${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">ETCD_CA</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/g"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> calico-etcd.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#更换calico-etcd.yaml文件中的etcd_ca: ""#、etcd_cert: ""、etcd_key: "" 为指定值</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 calico]# sed -i </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'s#etcd_ca: ""#etcd_ca: "/calico-secrets/etcd-ca"#g; s#etcd_cert: ""#etcd_cert: "/calico-secrets/etcd-cert"#g; s#etcd_key: "" #etcd_key: "/calico-secrets/etcd-key" #g'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> calico-etcd.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#设置临时环境变量POD_SUBNET从kubernetes配置文件中查找自己的网关</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 calico]# </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">POD_SUBNET</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/kubernetes/manifests/kube-controller-manager.yaml </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">|</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cluster-cidr= </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">|</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> awk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -F=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '{print $NF}'`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#注意下面的这个步骤是把calico-etcd.yaml文件里面的CALICO_IPV4POOL_CIDR下的网段改成自己的Pod网段，并打开注释，不用手动改，会用到上面的环境变量；</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 calico]# sed -i </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'s@# - name: CALICO_IPV4POOL_CIDR@- name: CALICO_IPV4POOL_CIDR@g; s@#   value: "192.168.0.0/16"@  value: '"</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379">${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">POD_SUBNET</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"'@g'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> calico-etcd.yaml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建运行并查看容器状态" tabindex="-1"><a class="header-anchor" href="#创建运行并查看容器状态"><span>创建运行并查看容器状态</span></a></h3>
<ul>
<li>创建并运行yaml文件</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-maste1 calico]# kubectl apply -f calico-etcd.yaml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161408959.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>查看创建的容器状态</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 calico]# kubectl get pods -n kube-system</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161408018.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>同时，上面提到的两个<code v-pre>coredns-54d67798b7-7w4k5</code>容器没有运行起来的问题也成功的运行起来了。目标为：<code v-pre>在 master1节点 查看集群节点状态</code>标题。</p>
<blockquote>
<p>网络组件安装完成，可以再次查看一下节点网络连接状态了。</p>
</blockquote>
<h3 id="查看节点网络连接状态" tabindex="-1"><a class="header-anchor" href="#查看节点网络连接状态"><span>查看节点网络连接状态</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 calico]# kubectl get nodes</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161408097.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以看到都连接成功了。</p>
<h2 id="metrics部署-只在-master1节点-操作-【用于查看其他节点的资源使用率】" tabindex="-1"><a class="header-anchor" href="#metrics部署-只在-master1节点-操作-【用于查看其他节点的资源使用率】"><span>Metrics部署（只在 master1节点 操作）【用于查看其他节点的资源使用率】</span></a></h2>
<blockquote>
<p>  在新版的Kubernetes中系统资源的采集均使用Metrics-server，可以通过Metrics采集节点和Pod的内存、磁盘、CPU和网络的使用率。</p>
</blockquote>
<h3 id="将master1节点的front-proxy-ca-crt复制到所有node节点" tabindex="-1"><a class="header-anchor" href="#将master1节点的front-proxy-ca-crt复制到所有node节点"><span>将Master1节点的front-proxy-ca.crt复制到所有Node节点</span></a></h3>
<ul>
<li>复制到node1节点上</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# scp /etc/kubernetes/pki/front-proxy-ca.crt k8s-node1:/etc/kubernetes/pki/front-proxy-ca.crt</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>复制到node2节点上</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# scp /etc/kubernetes/pki/front-proxy-ca.crt k8s-node2:/etc/kubernetes/pki/front-proxy-ca.crt</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161408400.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="安装metrics-server" tabindex="-1"><a class="header-anchor" href="#安装metrics-server"><span>安装metrics server</span></a></h3>
<p>同时也可以参考：<a href="https://liucy.blog.csdn.net/article/details/129661466" target="_blank" rel="noopener noreferrer">【云原生-k8s】kubectl top pod 报错:error: Metrics API not available<br>
</a> 该篇文章。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#进入上一步拉取的k8s-ha-install/metrics-server-0.4.x-kubeadm/目录</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# cd /root/k8s-ha-install/metrics-server-0.4.x-kubeadm/ </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#根据该目录下的yaml文件创建容器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 metrics-server-0.4.x-kubeadm]# kubectl apply -f comp.yaml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161408195.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="查看节点状态" tabindex="-1"><a class="header-anchor" href="#查看节点状态"><span>查看节点状态</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 metrics-server-0.4.x-kubeadm]# kubectl  top node</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">NAME</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">           CPU</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cores</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)   </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">CPU%</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   MEMORY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">bytes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)   </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">MEMORY%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">k8s-master1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   258m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">         12%</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    1125Mi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          65%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">k8s-master2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   224m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">         11%</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    1083Mi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          62%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">k8s-master3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   114m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">         5%</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">     1047Mi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          60%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">k8s-node1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">     61m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          3%</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">     860Mi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">           50%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">k8s-node2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">     62m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          3%</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">     889Mi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">           51%</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果还是top查看不到，可以查看一下<code v-pre>metrics-server</code>有没有起来，<code v-pre>kubectl get pods -n kube-system | grep metrics</code>，有问题排查之后就可以了。</p>
<h2 id="部署成功" tabindex="-1"><a class="header-anchor" href="#部署成功"><span>部署成功！</span></a></h2>
</div></template>


