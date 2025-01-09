<template><div><p>这是我做了很多遍，参考很多文章得到的，为了便于大家参考和学习，我已经把每一步都整理出来了，步骤和提示都很清晰。<br>
后续文档有什么问题那个地方写错了，大家都可以提出来。<br>
<img src="https://img-blog.csdnimg.cn/73d865bbc5f84ab0880cd9ede312260c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"></p>
<p>@[toc]<br>
<img src="https://img-blog.csdnimg.cn/9e00579042534a0aa81640e6e4a58a24.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"></p>
<h1 id="一、-准备工作" tabindex="-1"><a class="header-anchor" href="#一、-准备工作" aria-hidden="true">#</a> 一、 准备工作</h1>
<h2 id="_1-确认环境" tabindex="-1"><a class="header-anchor" href="#_1-确认环境" aria-hidden="true">#</a> 1. 确认环境</h2>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre v-pre class="language-powershell"><code>swapoff <span class="token operator">-</span>a  <span class="token operator">/</span><span class="token operator">/</span>关闭swap
setenforce 0 <span class="token operator">/</span><span class="token operator">/</span>临时关闭selinux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>每台机器的ip和uuid不能一样</p>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre v-pre class="language-powershell"><code><span class="token function">cat</span> <span class="token operator">/</span>sys/<span class="token keyword">class</span><span class="token operator">/</span>dmi/id/product_uuid        <span class="token operator">/</span><span class="token operator">/</span>每台机器的uuid不能相同
ifconfig <span class="token operator">-</span>a   <span class="token operator">/</span><span class="token operator">/</span>ip不能相同
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-开放端口" tabindex="-1"><a class="header-anchor" href="#_2-开放端口" aria-hidden="true">#</a> 2.开放端口</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>协议	方向	端口范围	作用	使用者
TCP	入站	<span class="token number">6443</span>	Kubernetes API服务器	所有组件
TCP	入站	<span class="token number">2379</span>-2380	etcd 服务器客户端API	Kube-apiserver,etcd
TCP	入站	<span class="token number">10250</span>	Kubelet APT	Kubelet自身，控制平面组件
TCP	入站	<span class="token number">10251</span>	Kube-scheduler	Kube-scheduler自身
TCP	入站	<span class="token number">10252</span>	Kube-controller-manager	Kube-controller-manager自身
TCP	入站	<span class="token number">8080</span>	kubelet	Kubelet自身
TCP	入站	<span class="token number">30000</span>-32767	Node Port服务器	所有组件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>端口号一定要安排明白！！！！否者会出现类似dial tcp 10.96.0.1:443: connect: no route to<br>
host错误，如果测试环境一直弄不好，可以关闭防火墙。ps：及其不建议。</p>
</blockquote>
<h2 id="_3-允许iptables检查桥接流量" tabindex="-1"><a class="header-anchor" href="#_3-允许iptables检查桥接流量" aria-hidden="true">#</a> 3.允许iptables检查桥接流量</h2>
<div class="language-perl line-numbers-mode" data-ext="perl"><pre v-pre class="language-perl"><code>cat <span class="token operator">&lt;&lt;</span>EOF <span class="token operator">|</span> sudo tee <span class="token operator">/</span>etc<span class="token operator">/</span>modules<span class="token operator">-</span>load<span class="token operator">.</span>d<span class="token operator">/</span>k8s<span class="token operator">.</span>conf
br_netfilter
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-perl line-numbers-mode" data-ext="perl"><pre v-pre class="language-perl"><code>cat <span class="token operator">&lt;&lt;</span>EOF <span class="token operator">|</span> sudo tee <span class="token operator">/</span>etc<span class="token operator">/</span>sysctl<span class="token operator">.</span>d<span class="token operator">/</span>k8s<span class="token operator">.</span>conf
net<span class="token operator">.</span>bridge<span class="token operator">.</span>bridge<span class="token operator">-</span>nf<span class="token operator">-</span>call<span class="token operator">-</span>ip6tables <span class="token operator">=</span> <span class="token number">1</span>
net<span class="token operator">.</span>bridge<span class="token operator">.</span>bridge<span class="token operator">-</span>nf<span class="token operator">-</span>call<span class="token operator">-</span>iptables <span class="token operator">=</span> <span class="token number">1</span>
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-perl line-numbers-mode" data-ext="perl"><pre v-pre class="language-perl"><code>sudo sysctl <span class="token operator">--</span>system	初始化	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="二、安装" tabindex="-1"><a class="header-anchor" href="#二、安装" aria-hidden="true">#</a> 二、安装</h1>
<h2 id="_1-安装kubeadm、kubelet、kubectl" tabindex="-1"><a class="header-anchor" href="#_1-安装kubeadm、kubelet、kubectl" aria-hidden="true">#</a> 1.安装kubeadm、kubelet、kubectl</h2>
<div class="language-perl line-numbers-mode" data-ext="perl"><pre v-pre class="language-perl"><code>添加镜像
cat <span class="token operator">&lt;&lt;</span>EOF <span class="token operator">|</span> sudo tee <span class="token operator">/</span>etc<span class="token operator">/</span>yum<span class="token operator">.</span>repos<span class="token operator">.</span>d<span class="token operator">/</span>kubernetes<span class="token operator">.</span>repo
<span class="token punctuation">[</span>kubernetes<span class="token punctuation">]</span> 
name<span class="token operator">=</span>Kubernetes 
baseurl<span class="token operator">=</span>https<span class="token punctuation">:</span><span class="token operator">//</span>mirrors<span class="token operator">.</span>aliyun<span class="token operator">.</span>com<span class="token operator">/</span>kubernetes<span class="token operator">/</span>yum<span class="token operator">/</span>repos<span class="token operator">/</span>kubernetes<span class="token operator">-</span>el7<span class="token operator">-</span>x86_64 
enabled<span class="token operator">=</span><span class="token number">1</span> 
gpgcheck<span class="token operator">=</span><span class="token number">0</span> 
repo_gpgcheck<span class="token operator">=</span><span class="token number">0</span> 
EOF

<span class="token comment">#将 SELinux 设置为 permissive 模式（相当于将其禁用）</span>
sudo setenforce <span class="token number">0</span>
sudo sed <span class="token operator">-</span>i <span class="token string">'s/^SELINUX=enforcing$/SELINUX=permissive/'</span> <span class="token operator">/</span>etc<span class="token operator">/</span>selinux<span class="token operator">/</span>config
sudo yum install <span class="token operator">-</span>y kubelet kubeadm kubectl <span class="token operator">--</span>disableexcludes<span class="token operator">=</span>kubernetes  下载镜像
sudo systemctl enable <span class="token operator">--</span>now kubelet 
<span class="token operator">//</span>查看是否安装成功
kubeadm version
kubectl version <span class="token operator">--</span>client
kubelet <span class="token operator">--</span>version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-安装插件" tabindex="-1"><a class="header-anchor" href="#_2-安装插件" aria-hidden="true">#</a> 2. 安装插件</h2>
<div class="language-perl line-numbers-mode" data-ext="perl"><pre v-pre class="language-perl"><code>yum <span class="token operator">-</span>y install socat conntrack<span class="token operator">-</span>tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-部署docker" tabindex="-1"><a class="header-anchor" href="#_3-部署docker" aria-hidden="true">#</a> 3. 部署docker</h2>
<p>在服务器上准备在线镜像源，然后添加docker的镜像源，如果之前安装过需要先卸载。</p>
<div class="language-perl line-numbers-mode" data-ext="perl"><pre v-pre class="language-perl"><code><span class="token comment">#安装依赖包</span>
<span class="token punctuation">[</span>root<span class="token variable">@docker</span> <span class="token operator">~</span><span class="token punctuation">]</span><span class="token comment"># yum install -y yum-utils device-mapper-persistent-data lvm2	</span>
<span class="token comment">#添加华为云的docker镜像地址</span>
<span class="token punctuation">[</span>root<span class="token variable">@docker</span> <span class="token operator">~</span><span class="token punctuation">]</span><span class="token comment"># yum-config-manager --add-repo https://repo.huaweicloud.com/docker-ce/linux/centos/docker-ce.repo</span>

更新缓存，只处理新添加的yum源缓存
<span class="token punctuation">[</span>root<span class="token variable">@docker</span> <span class="token operator">~</span><span class="token punctuation">]</span><span class="token comment"># yum makecache fast</span>
<span class="token comment">#安装docker，默认安装最新版本</span>
<span class="token punctuation">[</span>root<span class="token variable">@docker</span> <span class="token operator">~</span><span class="token punctuation">]</span><span class="token comment"># yum -y install docker-ce</span>
<span class="token comment">#查看安装docker版本</span>
<span class="token punctuation">[</span>root<span class="token variable">@docker</span> <span class="token operator">~</span><span class="token punctuation">]</span><span class="token comment"># docker --version(或者使用docker version)</span>
Docker version <span class="token v-string string">20.10.7</span><span class="token punctuation">,</span> build f0df350
<span class="token punctuation">[</span>root<span class="token variable">@docker</span> <span class="token operator">~</span><span class="token punctuation">]</span><span class="token comment"># systemctl start docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-修改docker组件为systemd" tabindex="-1"><a class="header-anchor" href="#_4-修改docker组件为systemd" aria-hidden="true">#</a> 4. 修改docker组件为systemd</h2>
<div class="language-perl line-numbers-mode" data-ext="perl"><pre v-pre class="language-perl"><code>sudo mkdir <span class="token operator">/</span>etc<span class="token operator">/</span>docker

cat <span class="token operator">&lt;&lt;</span>EOF <span class="token operator">|</span> sudo tee <span class="token operator">/</span>etc<span class="token operator">/</span>docker<span class="token operator">/</span>daemon<span class="token operator">.</span>json
<span class="token punctuation">{</span>
  <span class="token string">"exec-opts"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"native.cgroupdriver=systemd"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">"log-driver"</span><span class="token punctuation">:</span> <span class="token string">"json-file"</span><span class="token punctuation">,</span>
  <span class="token string">"log-opts"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token string">"max-size"</span><span class="token punctuation">:</span> <span class="token string">"100m"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">"storage-driver"</span><span class="token punctuation">:</span> <span class="token string">"overlay2"</span>
<span class="token punctuation">}</span>
EOF
 
sudo systemctl enable docker
sudo systemctl daemon<span class="token operator">-</span>reload
sudo systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-k8s拉取镜像" tabindex="-1"><a class="header-anchor" href="#_5-k8s拉取镜像" aria-hidden="true">#</a> 5. k8s拉取镜像</h2>
<p>先查看要拉取的镜像</p>
<div class="language-perl line-numbers-mode" data-ext="perl"><pre v-pre class="language-perl"><code>kubeadm config images list

k8s<span class="token operator">.</span>gcr<span class="token operator">.</span>io<span class="token operator">/</span>kube<span class="token operator">-</span>apiserver<span class="token punctuation">:</span><span class="token v-string string">v1.22.2</span>
k8s<span class="token operator">.</span>gcr<span class="token operator">.</span>io<span class="token operator">/</span>kube<span class="token operator">-</span>controller<span class="token operator">-</span>manager<span class="token punctuation">:</span><span class="token v-string string">v1.22.2</span>
k8s<span class="token operator">.</span>gcr<span class="token operator">.</span>io<span class="token operator">/</span>kube<span class="token operator">-</span>scheduler<span class="token punctuation">:</span><span class="token v-string string">v1.22.2</span>
k8s<span class="token operator">.</span>gcr<span class="token operator">.</span>io<span class="token operator">/</span>kube<span class="token operator">-</span>proxy<span class="token punctuation">:</span><span class="token v-string string">v1.22.2</span>
k8s<span class="token operator">.</span>gcr<span class="token operator">.</span>io<span class="token operator">/</span>pause<span class="token punctuation">:</span><span class="token number">3.5</span>
k8s<span class="token operator">.</span>gcr<span class="token operator">.</span>io<span class="token operator">/</span>etcd<span class="token punctuation">:</span><span class="token v-string string">3.5.0</span><span class="token operator">-</span><span class="token number">0</span>
k8s<span class="token operator">.</span>gcr<span class="token operator">.</span>io<span class="token operator">/</span>coredns<span class="token operator">/</span>coredns<span class="token punctuation">:</span><span class="token v-string string">v1.8.4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写成脚本，版本根据自己的要求来写</p>
<div class="language-perl line-numbers-mode" data-ext="perl"><pre v-pre class="language-perl"><code>vim k8s<span class="token operator">.</span>sh

<span class="token comment">#!/bin/bash</span>
images<span class="token operator">=</span><span class="token punctuation">(</span>
    kube<span class="token operator">-</span>apiserver<span class="token punctuation">:</span><span class="token v-string string">v1.22.2</span>
    kube<span class="token operator">-</span>controller<span class="token operator">-</span>manager<span class="token punctuation">:</span><span class="token v-string string">v1.22.2</span>
    kube<span class="token operator">-</span>scheduler<span class="token punctuation">:</span><span class="token v-string string">v1.22.2</span>
    kube<span class="token operator">-</span>proxy<span class="token punctuation">:</span><span class="token v-string string">v1.22.2</span>
    pause<span class="token punctuation">:</span><span class="token number">3.5</span>
    etcd<span class="token punctuation">:</span><span class="token v-string string">3.5.0</span><span class="token operator">-</span><span class="token number">0</span>
    coredns<span class="token punctuation">:</span><span class="token v-string string">v1.8.4</span>
<span class="token punctuation">)</span>
<span class="token keyword">for</span> imageName in <span class="token variable">$</span><span class="token punctuation">{</span>images<span class="token punctuation">[</span><span class="token variable">@]</span><span class="token punctuation">}</span> <span class="token punctuation">;</span> <span class="token keyword">do</span>
    docker pull registry<span class="token operator">.</span>cn<span class="token operator">-</span>hangzhou<span class="token operator">.</span>aliyuncs<span class="token operator">.</span>com<span class="token operator">/</span>google_containers<span class="token operator">/</span><span class="token variable">$</span><span class="token punctuation">{</span>imageName<span class="token punctuation">}</span>
    docker tag registry<span class="token operator">.</span>cn<span class="token operator">-</span>hangzhou<span class="token operator">.</span>aliyuncs<span class="token operator">.</span>com<span class="token operator">/</span>google_containers<span class="token operator">/</span><span class="token variable">$</span><span class="token punctuation">{</span>imageName<span class="token punctuation">}</span> k8s<span class="token operator">.</span>gcr<span class="token operator">.</span>io<span class="token operator">/</span><span class="token variable">$</span><span class="token punctuation">{</span>imageName<span class="token punctuation">}</span>
    docker rmi registry<span class="token operator">.</span>cn<span class="token operator">-</span>hangzhou<span class="token operator">.</span>aliyuncs<span class="token operator">.</span>com<span class="token operator">/</span>google_containers<span class="token operator">/</span><span class="token variable">$</span><span class="token punctuation">{</span>imageName<span class="token punctuation">}</span>
done

docker tag k8s<span class="token operator">.</span>gcr<span class="token operator">.</span>io<span class="token operator">/</span>coredns<span class="token punctuation">:</span><span class="token v-string string">v1.8.4</span>  k8s<span class="token operator">.</span>gcr<span class="token operator">.</span>io<span class="token operator">/</span>coredns<span class="token operator">/</span>coredns<span class="token punctuation">:</span><span class="token v-string string">v1.8.4</span>
docker rmi k8s<span class="token operator">.</span>gcr<span class="token operator">.</span>io<span class="token operator">/</span>coredns<span class="token punctuation">:</span><span class="token v-string string">v1.8.4</span>

给脚本加权限
chmod <span class="token operator">-R</span> <span class="token number">777</span> k8s<span class="token operator">.</span>sh
执行脚本<span class="token punctuation">,</span>默默的等待拉取
<span class="token operator">.</span><span class="token operator">/</span>k8s<span class="token operator">.</span>sh
完了看镜像是否拉取成功
docker images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-安装启动" tabindex="-1"><a class="header-anchor" href="#_6-安装启动" aria-hidden="true">#</a> 6. 安装启动</h2>
<p><strong>1.	修改主机映射（根据自己的ip设置）</strong></p>
<div class="language-perl line-numbers-mode" data-ext="perl"><pre v-pre class="language-perl"><code>vi <span class="token operator">/</span>etc<span class="token operator">/</span>hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/660ed276c2cc48488ea11619de5d2bc9.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>2.	初始化服务（根据自己的ip和网段和版本来设置）</strong></p>
<div class="language-perl line-numbers-mode" data-ext="perl"><pre v-pre class="language-perl"><code>kubeadm init <span class="token operator">--</span>apiserver<span class="token operator">-</span>advertise<span class="token operator">-</span>address<span class="token operator">=</span><span class="token v-string string">192.168.2.80</span> <span class="token operator">--</span>pod<span class="token operator">-</span>network<span class="token operator">-</span>cidr<span class="token operator">=</span><span class="token v-string string">192.168.0.0</span><span class="token operator">/</span><span class="token number">16</span> <span class="token operator">--</span>kubernetes<span class="token operator">-</span>version<span class="token operator">=</span><span class="token v-string string">v1.22.2</span> <span class="token operator">|</span>tee kubeadmin<span class="token operator">-</span>init<span class="token operator">.</span>log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>出现一下字样就是初始化成功<br>
<img src="https://img-blog.csdnimg.cn/a260a9e13708461a9363e99325114736.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA4K2n4o2k4oOd5YqJ5pmo6Zm9LuCwnOCxjeCwng==,size_12,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"></p>
<p><strong>3.	注意</strong></p>
<blockquote>
<p>要使非 root 用户可以运行 kubectl，请运行以下命令， 它们也是 kubeadm init 输出的一部分：</p>
</blockquote>
<div class="language-perl line-numbers-mode" data-ext="perl"><pre v-pre class="language-perl"><code>mkdir <span class="token operator">-p</span> <span class="token variable">$HOME</span><span class="token operator">/</span><span class="token operator">.</span>kube
sudo cp <span class="token operator">-</span>i <span class="token operator">/</span>etc<span class="token regex">/kubernetes/admin</span><span class="token operator">.</span>conf <span class="token variable">$HOME</span><span class="token operator">/</span><span class="token operator">.</span>kube<span class="token operator">/</span>config
sudo chown <span class="token variable">$(</span>id <span class="token operator">-u</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token variable">$(</span>id <span class="token operator">-g</span><span class="token punctuation">)</span> <span class="token variable">$HOME</span><span class="token operator">/</span><span class="token operator">.</span>kube<span class="token operator">/</span>config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>或者，如果你是root 用户，则可以运行：</p>
</blockquote>
<div class="language-perl line-numbers-mode" data-ext="perl"><pre v-pre class="language-perl"><code>export KUBECONFIG<span class="token operator">=</span><span class="token operator">/</span>etc<span class="token regex">/kubernetes/admin</span><span class="token operator">.</span>conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>如果想重新初始化，可执行kubeadm reset</p>
</blockquote>
<p>直接给它放到环境变量中，以免关闭服务器后重新启动出现访问不到8080端口这个问题。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> /etc/profile

<span class="token comment">#放到最后面</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">KUBECONFIG</span><span class="token operator">=</span>/etc/kubernetes/admin.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-安装flannel" tabindex="-1"><a class="header-anchor" href="#_7-安装flannel" aria-hidden="true">#</a> 7. 安装flannel</h2>
<div class="language-perl line-numbers-mode" data-ext="perl"><pre v-pre class="language-perl"><code>kubectl apply <span class="token operator">-f</span> https<span class="token punctuation">:</span><span class="token operator">//</span>raw<span class="token operator">.</span>githubusercontent<span class="token operator">.</span>com<span class="token operator">/</span>coreos<span class="token operator">/</span>flannel<span class="token operator">/</span>master<span class="token operator">/</span>Documentation<span class="token operator">/</span>kube<span class="token operator">-</span>flannel<span class="token operator">.</span>yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>如果出现Connecting to <a href="http://raw.githubusercontent.com" target="_blank" rel="noopener noreferrer">raw.githubusercontent.com<ExternalLinkIcon/></a> refused，可以执行vi /etc/hosts<br>
在后面添加199.232.96.133 <a href="http://raw.githubusercontent.com" target="_blank" rel="noopener noreferrer">raw.githubusercontent.com<ExternalLinkIcon/></a><br>
<img src="https://img-blog.csdnimg.cn/9f702b64c0b34b168733e92e82903be1.png" alt="在这里插入图片描述" loading="lazy"></p>
</blockquote>
<h2 id="_8-验证" tabindex="-1"><a class="header-anchor" href="#_8-验证" aria-hidden="true">#</a> 8. 验证</h2>
<div class="language-perl line-numbers-mode" data-ext="perl"><pre v-pre class="language-perl"><code>kubectl get nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/4853a73c8ce14294be4a86d2a16a8c9a.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<blockquote>
<p>如果出现ready则代表安装完成，master节点已经注册到了k8s。</p>
</blockquote>
<h2 id="_9-异常处理" tabindex="-1"><a class="header-anchor" href="#_9-异常处理" aria-hidden="true">#</a> 9. 异常处理</h2>
<blockquote>
<p>如果出现NotReady，可以执行以下语句判断服务器状态。</p>
</blockquote>
<div class="language-perl line-numbers-mode" data-ext="perl"><pre v-pre class="language-perl"><code>kubectl get nodes <span class="token operator">-o</span> yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>以下绿色部分没有问题，红色部分异常message:docker: network plugin is not ready: cni<br>
config uninitialized。</p>
</blockquote>
<figure><img src="https://img-blog.csdnimg.cn/fb343ecf3a9e41a290d0b9de12f93c9b.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA4K2n4o2k4oOd5YqJ5pmo6Zm9LuCwnOCxjeCwng==,size_14,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>如果出现以上问题 查看日志。</p>
<div class="language-perl line-numbers-mode" data-ext="perl"><pre v-pre class="language-perl"><code>journalctl <span class="token operator">-f</span> <span class="token operator">-u</span> kubelet<span class="token operator">.</span>service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果出现以下日志。</p>
<blockquote>
<p>&quot;Error validating CNI config list&quot; configList=&quot;{\n  &quot;name&quot;:<br>
&quot;cbr0&quot;,\n  &quot;cniVersion&quot;: &quot;0.3.1&quot;,\n  &quot;plugins&quot;: [\n    {\n<br>
&quot;type&quot;: &quot;flannel&quot;,\n      &quot;delegate&quot;: {\n<br>
&quot;hairpinMode&quot;: true,\n        &quot;isDefaultGateway&quot;: true\n      }\n<br>
},\n    {\n      &quot;type&quot;: &quot;portmap&quot;,\n      &quot;capabilities&quot;: {\n<br>
&quot;portMappings&quot;: true\n      }\n    }\n  ]\n}\n&quot; err=&quot;[failed to find<br>
plugin &quot;flannel&quot; in path [/opt/cni/bin] failed to find plugin<br>
&quot;portmap&quot; in path [/opt/cni/bin]]&quot;</p>
</blockquote>
<p>执行以下命令即可</p>
<div class="language-perl line-numbers-mode" data-ext="perl"><pre v-pre class="language-perl"><code>cat <span class="token operator">&lt;&lt;</span>EOF <span class="token operator">></span> <span class="token operator">/</span>etc<span class="token operator">/</span>yum<span class="token operator">.</span>repos<span class="token operator">.</span>d<span class="token operator">/</span>kubernetes<span class="token operator">.</span>repo
<span class="token punctuation">[</span>kubernetes<span class="token punctuation">]</span>
name<span class="token operator">=</span>Kubernetes
baseurl<span class="token operator">=</span>https<span class="token punctuation">:</span><span class="token operator">//</span>mirrors<span class="token operator">.</span>aliyun<span class="token operator">.</span>com<span class="token operator">/</span>kubernetes<span class="token operator">/</span>yum<span class="token operator">/</span>repos<span class="token operator">/</span>kubernetes<span class="token operator">-</span>el7<span class="token operator">-</span>x86_64
enabled<span class="token operator">=</span><span class="token number">1</span>
gpgcheck<span class="token operator">=</span><span class="token number">1</span>
repo_gpgcheck<span class="token operator">=</span><span class="token number">1</span>
gpgkey<span class="token operator">=</span>https<span class="token punctuation">:</span><span class="token operator">//</span>mirrors<span class="token operator">.</span>aliyun<span class="token operator">.</span>com<span class="token operator">/</span>kubernetes<span class="token operator">/</span>yum<span class="token operator">/</span>doc<span class="token operator">/</span>yum<span class="token operator">-</span>key<span class="token operator">.</span>gpg https<span class="token punctuation">:</span><span class="token operator">//</span>mirrors<span class="token operator">.</span>aliyun<span class="token operator">.</span>com<span class="token operator">/</span>kubernetes<span class="token operator">/</span>yum<span class="token operator">/</span>doc<span class="token operator">/</span>rpm<span class="token operator">-</span><span class="token keyword">package</span><span class="token operator">-</span>key<span class="token operator">.</span>gpg
EOF

yum clean all
yum install kubernetes<span class="token operator">-</span>cni <span class="token operator">-</span>y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-重启后k8s异常处理" tabindex="-1"><a class="header-anchor" href="#_10-重启后k8s异常处理" aria-hidden="true">#</a> 10.重启后k8s异常处理</h2>
<p>重启后查看nodes节点，或者其他</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@kubernetes ~<span class="token punctuation">]</span><span class="token comment"># kubectl get nodes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/b7ba55b3c4304563abe30a0af9830346.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>解决：写到环境里</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">bash</span>
<span class="token function">vim</span> /etc/profile
加到最后面
<span class="token builtin class-name">export</span> <span class="token assign-left variable">KUBECONFIG</span><span class="token operator">=</span>/etc/kubernetes/admin.conf
重启虚拟机：init <span class="token number">6</span>/reboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次查看：：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@kubernetes ~<span class="token punctuation">]</span><span class="token comment"># kubectl get nodes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/515f461227f047d084380a042a7ebda2.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>又有了新的报错：<br>
解决：关闭交换分区，等待一会（在自启容器中）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@kubernetes ~<span class="token punctuation">]</span><span class="token comment"># swapoff -a</span>
<span class="token punctuation">[</span>root@kubernetes ~<span class="token punctuation">]</span><span class="token comment"># kubectl get nodes</span>
NAME         STATUS   ROLES                  AGE   VERSION
kubernetes   Ready    control-plane,master   19m   v1.22.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


