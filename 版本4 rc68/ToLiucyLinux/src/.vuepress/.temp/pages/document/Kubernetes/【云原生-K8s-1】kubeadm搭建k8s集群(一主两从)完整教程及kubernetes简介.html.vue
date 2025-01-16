<template><div><blockquote>
<p>🍁<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者</a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主</a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主</a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区</a> 欢迎大家的加入！</p>
</blockquote>
<h2 id="kubernetes简介" tabindex="-1"><a class="header-anchor" href="#kubernetes简介"><span>Kubernetes简介</span></a></h2>
<blockquote>
<p>  Kubernetes(简称:k8s) 是Google在2014年6月开源的一个容器集群管理系统，使用Go语言开发，用于管理云平台中多个主机上的容器化的应用，Kubernetes的目标是让部署容器化的应用简单并且高效,Kubernetes提供了资源调度、部署管理、服务发现、扩容缩容、监控，维护等一整套功能。</p>
</blockquote>
<p>官网地址: <a href="https://kubernetes.io" target="_blank" rel="noopener noreferrer">https://kubernetes.io</a></p>
<h3 id="_1-kubernetes架构" tabindex="-1"><a class="header-anchor" href="#_1-kubernetes架构"><span>1 kubernetes架构</span></a></h3>
<blockquote>
<p>  Kubernetes具有去中心化的架构，不会线性处理任务。它基于声明性模型运行并实现&quot;所需状态&quot;的概念。下面这些步骤说明了Kubernetes的基本过程:</p>
<ul>
<li>管理员创建应用程序的所需状态并将其放入清单文件manifest.yml中。</li>
<li>使用CLI或提供的用户界面将清单文件提供给Kubernetes API Server。 Kubernetes的默认命令行工具称为kubectl。</li>
<li>Kubernetes将清单文件（描述了应用程序的期望状态）存储在称为键值存储（etcd）的数据库中。</li>
<li>Kubernetes随后在集群内的所有相关应用程序上实现所需的状态。</li>
<li>Kubernetes持续监控集群的元素，以确保应用程序的当前状态不会与所需状态有所不同。</li>
</ul>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161420964.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_1-1master节点" tabindex="-1"><a class="header-anchor" href="#_1-1master节点"><span>1.1master节点</span></a></h4>
<blockquote>
<p>  k8s集群的管理节点，负责管理集群，提供集群的资源数据访问入口。拥有Etcd存储服务（可选），运行Api Server进程，Controller Manager服务进程及Scheduler服务进程，关联工作节点Node。</p>
<ul>
<li>API Server</li>
</ul>
<p>提供了资源对象的唯一操作入口，其他所有组件都必须通过它提供的API来操作资源数据，只有API Server与存储通信，其他模块通过API Server访问集群状态。</p>
<ul>
<li>Scheduler</li>
</ul>
<p>新建立的Pod进行节点(node)选择(即分配机器)，负责集群的资源调度。组件抽离，可以方便替换成其他调度器。</p>
<ul>
<li>Controller</li>
</ul>
<p>负责执行各种控制器，目前已经提供了很多控制器来保证Kubernetes的正常运行。</p>
<ul>
<li>Cluster state store</li>
</ul>
<p>Kubernetes默认使用etcd作为集群整体存储，当然也可以使用其它的技术。etcd是一个简单的、分布式的、一致的key-value存储，主要被用来共享配置和服务发现。etcd提供了一个CRUD操作的REST API，以及提供了作为注册的接口，以监控指定的Node。集群的所有状态都存储在etcd实例中，并具有监控的能力，因此当etcd中的信息发生变化时，就能够快速的通知集群中相关的组件。</p>
</blockquote>
<table>
<thead>
<tr>
<th>控制器</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>Replication Controller</td>
<td>管理维护Replication Controller，关联Replication Controller和Pod，保证Replication Controller定义的副本数</td>
</tr>
<tr>
<td>Node Controller</td>
<td>管理维护Node，定期检查Node的健康状态，标识出(失效|未失效)的Node节点。</td>
</tr>
<tr>
<td>Namespace Controller</td>
<td>管理维护Namespace，定期清理无效的Namespace，包括Namesapce下的API对象，比如Pod、Service等。</td>
</tr>
<tr>
<td>Service Controller</td>
<td>管理维护Service，提供负载以及服务代理。</td>
</tr>
<tr>
<td>EndPoints Controller</td>
<td>管理维护Endpoints，关联Service和Pod，创建Endpoints为Service的后端，当Pod发生变化时，实时更新Endpoints。</td>
</tr>
<tr>
<td>Service Account Controller</td>
<td>管理维护Service Account，为每个Namespace创建默认的Service Account，同时为Service Account创建Service Account Secret。</td>
</tr>
<tr>
<td>Persistent Volume Controller</td>
<td>管理维护Persistent Volume和Persistent Volume Claim，为新的Persistent Volume Claim分配Persistent Volume进行绑定，为释放的Persistent Volume执行清理回收。</td>
</tr>
<tr>
<td>DaemonSet Controller</td>
<td>管理维护Daemon Set，负责创建Daemon Pod，保证指定的Node上正常的运行Daemon Pod。</td>
</tr>
<tr>
<td>Deployment Controller</td>
<td>管理维护Deployment，关联Deployment和Replication Controller，保证运行指定数量的Pod。当Deployment更新时，控制实现Replication Controller和Pod的更新。</td>
</tr>
<tr>
<td>Job Controller</td>
<td>管理维护Job，为Jod创建一次性任务Pod，保证完成Job指定完成的任务数目</td>
</tr>
<tr>
<td>Pod Autoscaler Controller</td>
<td>实现Pod的自动伸缩，定时获取监控数据，进行策略匹配，当满足条件时执行Pod的伸缩动作。</td>
</tr>
</tbody>
</table>
<h4 id="_1-2-node节点" tabindex="-1"><a class="header-anchor" href="#_1-2-node节点"><span>1.2 Node节点</span></a></h4>
<blockquote>
<p>  Node节点是工作节点监听API Server发送过来的新的工作分配；他们会执行分配给他们的工作，然后将结果报告给Kubernetes主节点。</p>
<ul>
<li>Kubelet</li>
</ul>
<p>负责管控容器，Kubelet会从Kubernetes API Server接收Pod的创建请求，启动和停止容器，监控容器运行状态并汇报给Kubernetes API Server。</p>
<ul>
<li>Container Runtime</li>
</ul>
<p>每一个Node都会运行一个Container Runtime，其负责下载镜像和运行容器。Kubernetes本身并不提供容器运行时环境，但提供了接口，可以插入所选择的容器运行时环境。kubelet使用Unix socket之上的gRPC框架与容器运行时进行通信，kubelet作为客户端，而CRI shim作为服务器。</p>
<ul>
<li>kube proxy</li>
</ul>
<p>基于一种公共访问策略（例如：负载均衡），服务提供了一种访问一群pod的途径。此方式通过创建一个虚拟的IP来实现，客户端能够访问此IP，并能够将服务透明的代理至Pod。每一个Node都会运行一个kube-proxy，kube proxy通过iptables规则引导访问至服务IP，并将重定向至正确的后端应用，通过这种方式kube-proxy提供了一个高可用的负载均衡解决方案。服务发现主要通过DNS实现。<br>
  在Kubernetes中，kube proxy负责为Pod创建代理服务；引到访问至服务；并实现服务到Pod的路由和转发，以及通过应用的负载均衡。</p>
<ul>
<li>Pod</li>
</ul>
<p>运行于Node节点上，若干相关容器的组合。Pod内包含的容器运行在同一宿主机上，使用相同的网络命名空间、IP地址,同一个Pod中，端口不能重复，否则报错，能够通过localhost进行通信。Pod是Kurbernetes进行创建、调度和管理的最小单位，它提供了比容器更高层次的抽象，使得部署和管理更加灵活。一个Pod可以包含一个容器或者多个相关容器。<br>
  Pod其实有两种类型：普通Pod和静态Pod，后者比较特殊，它并不存在Kubernetes的etcd存储中，而是存放在某个具体的Node上的一个具体文件中，并且只在此Node上启动。普通Pod一旦被创建，就会被放入etcd存储中，随后会被Kubernetes Master调度到摸个具体的Node上进行绑定，随后该Pod被对应的Node上的kubelet进程实例化成一组相关的Docker容器并启动起来。在默认情况下，当Pod里的某个容器停止时，Kubernetes会自动检测到这个问起并且重启这个Pod（重启Pod里的所有容器），如果Pod所在的Node宕机，则会将这个Node上的所有Pod重新调度到其他节点上。</p>
</blockquote>
<h4 id="_1-3-kubectl" tabindex="-1"><a class="header-anchor" href="#_1-3-kubectl"><span>1.3 kubectl</span></a></h4>
<blockquote>
<p>   集群管理命令行工具集，通过客户端的kubectl命令集操作，API Server响应对应的命令结果，从而达到对kubernetes集群的管理。</p>
</blockquote>
<h3 id="_2-kubeadm" tabindex="-1"><a class="header-anchor" href="#_2-kubeadm"><span>2 kubeadm</span></a></h3>
<p>  Kubeadm是一个工具，它提供了kubeadm init以及kubeadm join这两个命令作为快速创建kubernetes 集群的最佳实践。</p>
<p>  kubeadm通过执行必要的操作来启动和运行一个最小可用的集群。kubeadm只关心启动集群，而不关心其他工作，如部署前的节点准备工作、安装各种Kubernetes Dashboard、监控解决方案以及特定云提供商的插件，这些都不属于kubeadm关注范围。</p>
<h4 id="_2-1-kubeadm功能" tabindex="-1"><a class="header-anchor" href="#_2-1-kubeadm功能"><span>2.1 kubeadm功能</span></a></h4>
<ul>
<li>kubeadm init 启动/初始化一个 Kubernetes 主节点；</li>
<li>kubeadm join 启动一个 Kubernetes 工作节点并且将其加入到集群；</li>
<li>kubeadm upgrade 更新一个 Kubernetes 集群到新版本；</li>
<li>kubeadm config 如果使用 v1.7.x 或者更低版本的 kubeadm 初始化集群，您需要对集群做一些配置以便使用 kubeadm upgrade 命令；</li>
<li>kubeadm token 管理 kubeadm join 使用的令牌；</li>
<li>kubeadm reset 还原 kubeadm init 或者 kubeadm join 对主机所做的任何更改；</li>
<li>kubeadm version 打印 kubeadm 版本；</li>
<li>kubeadm alpha 预览一组可用的新功能以便从社区搜集反馈。</li>
</ul>
<h2 id="kubernetes集群部署" tabindex="-1"><a class="header-anchor" href="#kubernetes集群部署"><span>Kubernetes集群部署</span></a></h2>
<h2 id="准备工作-所有节点都要做同样的操作" tabindex="-1"><a class="header-anchor" href="#准备工作-所有节点都要做同样的操作"><span>准备工作（所有节点都要做同样的操作）</span></a></h2>
<h3 id="服务器配置" tabindex="-1"><a class="header-anchor" href="#服务器配置"><span>服务器配置</span></a></h3>
<table>
<thead>
<tr>
<th>集群（一主两从）</th>
<th>ip地址</th>
<th>主机名</th>
<th>配置</th>
</tr>
</thead>
<tbody>
<tr>
<td>主</td>
<td>172.16.11.221</td>
<td>k8s-master</td>
<td>2C/2G/50G</td>
</tr>
<tr>
<td>从</td>
<td>172.16.11.222</td>
<td>k8s-node1</td>
<td>2C/2G/50G</td>
</tr>
<tr>
<td>从</td>
<td>172.16.11.223</td>
<td>k8s-node2</td>
<td>2C/2G/50G</td>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改三台集群的主机名-每个主机限一条命令" tabindex="-1"><a class="header-anchor" href="#修改三台集群的主机名-每个主机限一条命令"><span>修改三台集群的主机名：（每个主机限一条命令）</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master1 ~]# hostnamectl set-hostname k8s-master</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-node1 ~]# hostnamectl set-hostname k8s-node1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-node2 ~]# hostnamectl set-hostname k8s-node2</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="所有节点都添加集群ip与主机名到hosts中" tabindex="-1"><a class="header-anchor" href="#所有节点都添加集群ip与主机名到hosts中"><span>所有节点都添加集群ip与主机名到hosts中：</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> >> </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/etc/hosts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;&#x3C; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">172.16.11.221 k8s-master</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">172.16.11.222 k8s-node1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">172.16.11.223 k8s-node2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><font color=red>注意：ip一定要改成自己的ip，不要直接复制粘贴</font><h3 id="三台机器进行时间同步" tabindex="-1"><a class="header-anchor" href="#三台机器进行时间同步"><span>三台机器进行时间同步</span></a></h3>
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
<h3 id="三台都安装需要的一些命令" tabindex="-1"><a class="header-anchor" href="#三台都安装需要的一些命令"><span>三台都安装需要的一些命令：</span></a></h3>
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
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> lrzsz</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> conntrack</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ipvsadm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ipset</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> jq</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> psmisc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sysstat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> curl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> iptables</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> net-tools</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> libseccomp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gcc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gcc-c++</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> yum-utils</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> device-mapper-persistent-data</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> lvm2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bash-completion</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>安装需要一些时间，就等待安装即可；</p>
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
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#启动docker服务</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@docker ~]# systemctl start docker</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#设置docker服务开机自启</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@docker ~]# systemctl enable docker</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看docker可以安装的版本，也可以自己安装指定版本，yum -y install docker-ce-19.03.12.el7</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@docker ~]# yum list docker-ce --showduplicates | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sort</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -r</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="给docker添加镜像加速器及cgroup并重启docker服务" tabindex="-1"><a class="header-anchor" href="#给docker添加镜像加速器及cgroup并重启docker服务"><span>给docker添加镜像加速器及cgroup并重启docker服务</span></a></h3>
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
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@docker ~]# cat &#x3C;&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> >  </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/etc/sysctl.d/k8s.conf</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">net.bridge.bridge-nf-call-ip6tables = 1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">net.bridge.bridge-nf-call-iptables = 1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#让其生效</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sysctl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --system</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加-k8s-yum源" tabindex="-1"><a class="header-anchor" href="#添加-k8s-yum源"><span>添加 k8s yum源</span></a></h3>
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
<h3 id="查看kubeadm使用的镜像" tabindex="-1"><a class="header-anchor" href="#查看kubeadm使用的镜像"><span>查看kubeadm使用的镜像</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubeadm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> images</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> list</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>可以发现这里都是国外的镜像<br><br>
<a href="http://k8s.gcr.io/kube-apiserver:v1.20.15" target="_blank" rel="noopener noreferrer">k8s.gcr.io/kube-apiserver:v1.20.15</a><br>
<a href="http://k8s.gcr.io/kube-controller-manager:v1.20.15" target="_blank" rel="noopener noreferrer">k8s.gcr.io/kube-controller-manager:v1.20.15</a><br>
<a href="http://k8s.gcr.io/kube-scheduler:v1.20.15" target="_blank" rel="noopener noreferrer">k8s.gcr.io/kube-scheduler:v1.20.15</a><br>
<a href="http://k8s.gcr.io/kube-proxy:v1.20.15" target="_blank" rel="noopener noreferrer">k8s.gcr.io/kube-proxy:v1.20.15</a><br>
<a href="http://k8s.gcr.io/pause:3.2" target="_blank" rel="noopener noreferrer">k8s.gcr.io/pause:3.2</a><br>
<a href="http://k8s.gcr.io/etcd:3.4.13-0" target="_blank" rel="noopener noreferrer">k8s.gcr.io/etcd:3.4.13-0</a><br>
<a href="http://k8s.gcr.io/coredns:1.7.0" target="_blank" rel="noopener noreferrer">k8s.gcr.io/coredns:1.7.0</a></p>
</blockquote>
<ul>
<li>解决国外镜像不能访问的问题，执行kubeadm.sh脚本，用于拉取镜像/打tag/删除原有镜像；</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">wget</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -O</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kubeadm.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://files.rundreams.net/sh/kubeadm.sh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kubeadm.sh</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>等待拉取完成。</p>
<blockquote>
<p>如果感觉拉取比较费劲，可以下载kubeadm所需的镜像和脚本：<a href="https://download.csdn.net/download/liu_chen_yang/87587297" target="_blank" rel="noopener noreferrer">kubeadm所需镜像包及脚本v1.20.15版本<br>
</a></p>
</blockquote>
<p>拉取完成查看镜像；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> images</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161420231.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="master节点" tabindex="-1"><a class="header-anchor" href="#master节点"><span>master节点</span></a></h2>
<h3 id="初始化master节点" tabindex="-1"><a class="header-anchor" href="#初始化master节点"><span>初始化master节点</span></a></h3>
<p>如果执行kubeadm init初始化k8s集群失败了，在下一次执行kubeadm init初始化语句之前，可以先执行<code v-pre>kubeadm reset</code>命令。这个命令的作用是重置节点，大家可以把这个命令理解为：上一次kubeadm init初始化集群操作失败了，该命令清理了之前的失败环境。</p>
<p>此命令只在master节点执行，<code v-pre>172.16.11.221</code>替换为自己的master节点IP，<code v-pre>172.17.10.1/18</code>替换为自己的pod网段。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubeadm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> init</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --kubernetes-version=1.20.15</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --apiserver-advertise-address=172.16.11.221</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --pod-network-cidr=172.17.10.1/18</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>初始化成功图为下：</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161420398.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>如遇初始化报错可根据<code v-pre>systemctl status kubelet</code> 或者 <code v-pre>journalctl -xeu kubelet</code> 查看报错信息来解。决</p>
</blockquote>
<ul>
<li>根据成功提示先执行下面内容<br>
这些是成功图中提示的那些，要给他创建一下</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $HOME</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/.kube</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/kubernetes/admin.conf</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $HOME</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/.kube/config</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> chown</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> $(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">id</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -u</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">id</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -g</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$HOME</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/.kube/config</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看nodes节点</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nodes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#这个时候master是处于NotReady状态的。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="node节点的加入" tabindex="-1"><a class="header-anchor" href="#node节点的加入"><span>node节点的加入</span></a></h3>
<ul>
<li>完成之后将刚刚初始化master节点成功后的<code v-pre>kubeadm join信息</code>复制到其他node节点进行加入。</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">node1：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	kubeadm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> join</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 172.16.11.221:6443</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --token</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ckgdsy.xa5x21lsjqak2zmr</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    --discovery-token-ca-cert-hash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sha256:3bc8dd07b7e88a5f7b0efa81b4ae4918abb440f93f4940c72f9b4a842d6c872b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">node2：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	kubeadm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> join</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 172.16.11.221:6443</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --token</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ckgdsy.xa5x21lsjqak2zmr</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    --discovery-token-ca-cert-hash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sha256:3bc8dd07b7e88a5f7b0efa81b4ae4918abb440f93f4940c72f9b4a842d6c872b</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161420434.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>node节点显示这样就是加载成功；</p>
<p>加载成功之后返回master节点查看集群</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@k8s-master ~]# kubectl get nodes</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161420835.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>现在的集群状态都是<code v-pre>NotReady</code>表示不可达；这是因为还没有安装网络插件，下面我们来安装一下<code v-pre>网络插件（caclico）</code></p>
<h3 id="给master节点安装pod网络插件-calico" tabindex="-1"><a class="header-anchor" href="#给master节点安装pod网络插件-calico"><span>给master节点安装Pod网络插件（calico）</span></a></h3>
<blockquote>
<p>选择网络插件：<a href="https://kubernetes.io/docs/concepts/cluster-administration/addons/" target="_blank" rel="noopener noreferrer">https://kubernetes.io/docs/concepts/cluster-administration/addons/</a><br>
快速开始配置：<a href="https://projectcalico.docs.tigera.io/archive/v3.20/getting-started/clis/calicoctl/install" target="_blank" rel="noopener noreferrer">https://projectcalico.docs.tigera.io/archive/v3.20/getting-started/clis/calicoctl/install</a><br>
calico网络插件：<a href="https://docs.projectcalico.org/v3.9/getting-started/kubernetes/" target="_blank" rel="noopener noreferrer">https://docs.projectcalico.org/v3.9/getting-started/kubernetes/</a></p>
</blockquote>
<ul>
<li>在master节点安装calico</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apply</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://docs.projectcalico.org/v3.9/manifests/calico.yaml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161420304.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>确认一下calico是否安装成功</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pods</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --all-namespaces</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -w</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pods</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kube-system</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -w</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看节点连接状态" tabindex="-1"><a class="header-anchor" href="#查看节点连接状态"><span>查看节点连接状态</span></a></h3>
<p>安装完成之后，再次返回master节点查看集群，在主节点执行命令看集群是否成功</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nodes</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#或者使用加-o wide查看详细</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nodes</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> wide</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>STATUS 状态为<code v-pre>Ready</code>则连接成功。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161420932.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161420435.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h2>
<ul>
<li>写一个nginx的yaml文件</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> > </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">pod_nginx_rs.yaml</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">apiVersion: apps/v1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">kind: ReplicaSet</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">metadata:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  name: nginx</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  labels:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    tier: frontend</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">spec:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  replicas: 3</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  selector:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    matchLabels:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      tier: frontend</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  template:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    metadata:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      name: nginx</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      labels:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        tier: frontend</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    spec:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      containers:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      - name: nginx</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        image: nginx</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        ports:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        - containerPort: 80</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>根据pod_nginx_rs.yml文件创建pod</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apply</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pod_nginx_rs.yaml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>查看pod</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看所有的pod</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pods</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看所有的pod详细信息</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pods</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> wide</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看所有的pod超级详细信息</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> describe</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nginx</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161420100.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>通过rs将pod扩容为5个nginx服务</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#将nginx服务由3个扩容为5个</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> scale</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nginx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --replicas=5</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看所有的pod</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pods</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> wide</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>光有ReplicaSet是不行的，ReplicaSet不会提供服务的，需要一个Service。将它应用到集群里面去。</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> > </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">pod_nginx_rs_svc.yaml</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">apiVersion: v1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">kind: Service              # 类型是service</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">metadata:                  </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  name: nginx              # 这个service的全局唯一名称</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">spec:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  type: NodePort</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  ports:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    - port: 80             # service提供服务的端口号</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      nodePort: 30000      # 想要对外的端口</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  selector:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    tier: frontend         # 把拥有{tier:labels}或者{app:labels}这个标签的pod应用到这个服务里面</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不加<code v-pre>nodePort</code>也就是不指定nodeport，默认会随机输出端口，可以通过<code v-pre>kubectl get svc</code>查看；</p>
<p>如果需要修改端口范围，如果是按照我的方式部署的，可在：<code v-pre>vim /etc/kubernetes/manifests/kube-apiserver.yaml</code> 的第17行进行修改，默认范围是30000-32767。</p>
<ul>
<li>根据 pod_nginx_rs_svc.yml 文件创建services，需对外访问</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apply</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pod_nginx_rs_svc.yaml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>查看services</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> svc</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> services</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161420085.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>kubectl get svc 中的 type 。</p>
<ul>
<li>Cluster IP 为服务器内部使用</li>
<li>Node Port 为服务器内部外部都可以使用，可以指定端口也可以随机端口。</li>
</ul>
</blockquote>
<ul>
<li>启动services之后，查看端口</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161420877.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>端口为30000，页面访问，<font color=red>节点的ip+30000;</font></p>
<blockquote>
<font color=red>节点的ip可以为主节点的ip，也可以为从节点的ip。</font></blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161419732.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>删除serviecs和pod</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#删除serviecs</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> delete</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pod_nginx_rs_svc.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#删除pod</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> delete</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pod_nginx_rs.yaml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="完结⭕" tabindex="-1"><a class="header-anchor" href="#完结⭕"><span>完结⭕</span></a></h2>
<p>内容主要参考与：<a href="https://blog.csdn.net/u010800804/article/details/124524688?app_version=5.15.0&amp;csdn_share_tail=%7B%22type%22:%22blog%22,%22rType%22:%22article%22,%22rId%22:%22124524688%22,%22source%22:%22liu_chen_yang%22%7D&amp;utm_source=app" target="_blank" rel="noopener noreferrer">【云原生-K8s】kubeadm搭建k8s集群【不成功手把手教学】<br>
</a><br>
感谢大家的观看！！！</p>
</div></template>


