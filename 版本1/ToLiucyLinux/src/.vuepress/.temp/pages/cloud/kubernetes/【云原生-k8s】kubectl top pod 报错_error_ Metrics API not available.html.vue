<template><div><blockquote>
<p>🍁<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！</p>
</blockquote>
<p>@[toc]</p>
<h1 id="报错详情" tabindex="-1"><a class="header-anchor" href="#报错详情" aria-hidden="true">#</a> 报错详情</h1>
<blockquote>
<p>查看k8s中其他节点的cpu，memory的使用率情况</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl top nodes</span>
error: Metrics API not available
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="解决方式" tabindex="-1"><a class="header-anchor" href="#解决方式" aria-hidden="true">#</a> 解决方式</h1>
<h2 id="_1、下载-metrics-server-components-yaml" tabindex="-1"><a class="header-anchor" href="#_1、下载-metrics-server-components-yaml" aria-hidden="true">#</a> 1、下载 metrics-server-components.yaml</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">wget</span> https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml <span class="token parameter variable">-O</span> metrics-server-components.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/b7c02687d2c645aea3f46fe5257685a2.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="_2、将-metrics-server-components-yaml中的-k8s-gcr-io-更改为阿里云镜像地址" tabindex="-1"><a class="header-anchor" href="#_2、将-metrics-server-components-yaml中的-k8s-gcr-io-更改为阿里云镜像地址" aria-hidden="true">#</a> 2、将 metrics-server-components.yaml中的 <a href="http://k8s.gcr.io" target="_blank" rel="noopener noreferrer">k8s.gcr.io<ExternalLinkIcon/></a> 更改为阿里云镜像地址</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">'s/registry.k8s.io\/metrics-server/registry.cn-hangzhou.aliyuncs.com\/google_containers/g'</span> metrics-server-components.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改完可以看一下，有时候wget拉取的是最新的yaml而镜像源会变，就会修改不成功，导致拉取镜像失败。就比如昨天还是0.6.2今天就变成了0.6.3更新了一个新版本，而且镜像前缀也变了，就拉取不下来，找了半天才找到这个问题。</p>
<p>在140行，更换完之后应该是这样的：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>         image: registry.cn-hangzhou.aliyuncs.com/google_containers/metrics-server:v0.6.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3、执行-metrics-server-components-yaml" tabindex="-1"><a class="header-anchor" href="#_3、执行-metrics-server-components-yaml" aria-hidden="true">#</a> 3、执行 metrics-server-components.yaml</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> metrics-server-components.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4、查看pod" tabindex="-1"><a class="header-anchor" href="#_4、查看pod" aria-hidden="true">#</a> 4、查看pod</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>kubectl get pod <span class="token parameter variable">-A</span> <span class="token operator">|</span><span class="token function">grep</span> me
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/31f0bbb0025c437c951040e5523673bd.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>发现是0/1，表示未启动。</p>
<p>有可能是镜像没有拉到，可直接下载镜像进行导入：<a href="https://download.csdn.net/download/liu_chen_yang/87602850" target="_blank" rel="noopener noreferrer">K8S部署metrics-server-0.6.2镜像文件及yaml文件<br>
<ExternalLinkIcon/></a><br>
也有一种报错如下：</p>
<h3 id="_4-1-查看-metrics-server-647596b58-fgwzg-日志" tabindex="-1"><a class="header-anchor" href="#_4-1-查看-metrics-server-647596b58-fgwzg-日志" aria-hidden="true">#</a> 4.1 查看 metrics-server-647596b58-fgwzg 日志</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>kubectl logs <span class="token parameter variable">-n</span> kube-system metrics-server-647596b58-fgwzg
kubectl logs <span class="token parameter variable">-f</span> <span class="token parameter variable">-n</span> kube-system metrics-server-647596b58-fgwzg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>-n 查看最后几行</li>
<li>-f 持续查看</li>
</ul>
<h3 id="_4-2-发现报错-x509-cannot-validate-certificate-for-172-16-11-223-because-it-doesn-t-contain-any-ip-sans-node-k8s-node2" tabindex="-1"><a class="header-anchor" href="#_4-2-发现报错-x509-cannot-validate-certificate-for-172-16-11-223-because-it-doesn-t-contain-any-ip-sans-node-k8s-node2" aria-hidden="true">#</a> 4.2 发现报错： x509: cannot validate certificate for 172.16.11.223 because it doesn't contain any IP SANs&quot; node=&quot;k8s-node2&quot;</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>E0320 02:11:51.486654       <span class="token number">1</span> scraper.go:140<span class="token punctuation">]</span> <span class="token string">"Failed to scrape node"</span> <span class="token assign-left variable">err</span><span class="token operator">=</span><span class="token string">"Get <span class="token entity" title="\&quot;">\"</span>https://172.16.11.221:10250/metrics/resource<span class="token entity" title="\&quot;">\"</span>: x509: cannot validate certificate for 172.16.11.221 because it doesn't contain any IP SANs"</span> <span class="token assign-left variable">node</span><span class="token operator">=</span><span class="token string">"k8s-master"</span>
I0320 02:12:00.517727       <span class="token number">1</span> server.go:187<span class="token punctuation">]</span> <span class="token string">"Failed probe"</span> <span class="token assign-left variable">probe</span><span class="token operator">=</span><span class="token string">"metric-storage-ready"</span> <span class="token assign-left variable">err</span><span class="token operator">=</span><span class="token string">"no metrics to serve"</span>
E0320 02:12:06.476898       <span class="token number">1</span> scraper.go:140<span class="token punctuation">]</span> <span class="token string">"Failed to scrape node"</span> <span class="token assign-left variable">err</span><span class="token operator">=</span><span class="token string">"Get <span class="token entity" title="\&quot;">\"</span>https://172.16.11.222:10250/metrics/resource<span class="token entity" title="\&quot;">\"</span>: x509: cannot validate certificate for 172.16.11.222 because it doesn't contain any IP SANs"</span> <span class="token assign-left variable">node</span><span class="token operator">=</span><span class="token string">"k8s-node1"</span>
E0320 02:12:06.486505       <span class="token number">1</span> scraper.go:140<span class="token punctuation">]</span> <span class="token string">"Failed to scrape node"</span> <span class="token assign-left variable">err</span><span class="token operator">=</span><span class="token string">"Get <span class="token entity" title="\&quot;">\"</span>https://172.16.11.223:10250/metrics/resource<span class="token entity" title="\&quot;">\"</span>: x509: cannot validate certificate for 172.16.11.223 because it doesn't contain any IP SANs"</span> <span class="token assign-left variable">node</span><span class="token operator">=</span><span class="token string">"k8s-node2"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-需要修改-metrics-server-components-yaml-配置忽略ca验证" tabindex="-1"><a class="header-anchor" href="#_4-3-需要修改-metrics-server-components-yaml-配置忽略ca验证" aria-hidden="true">#</a> 4.3 需要修改 metrics-server-components.yaml 配置忽略CA验证</h3>
<p>大概在140行。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> metrics-server-components.yaml

 spec:
      containers:
      - args:
        - --cert-dir<span class="token operator">=</span>/tmp
        - --secure-port<span class="token operator">=</span><span class="token number">4443</span>
        - --kubelet-preferred-address-types<span class="token operator">=</span>InternalIP,ExternalIP,Hostname
        - --kubelet-use-node-status-port
        - --metric-resolution<span class="token operator">=</span>15s
        - --kubelet-insecure-tls                   <span class="token comment">###新增--kubelet-insecure-tls 就不会去验证Kubelets提供的服务证书的CA</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-修改完之后重新应用-metrics-server-components-yaml" tabindex="-1"><a class="header-anchor" href="#_4-4-修改完之后重新应用-metrics-server-components-yaml" aria-hidden="true">#</a> 4.4 修改完之后重新应用 metrics-server-components.yaml</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> metrics-server-components.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/7ba1811a8d3342d1a806f8da8de1e88d.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_4-5-再次查看pod启动状态" tabindex="-1"><a class="header-anchor" href="#_4-5-再次查看pod启动状态" aria-hidden="true">#</a> 4.5 再次查看pod启动状态</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>kubectl get pod <span class="token parameter variable">-A</span> <span class="token operator">|</span><span class="token function">grep</span> me
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>发现是1/1，启动成功。</p>
<figure><img src="https://img-blog.csdnimg.cn/61fbff07813a4885a5e9b7108140e30a.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="_5、验证是否成功" tabindex="-1"><a class="header-anchor" href="#_5、验证是否成功" aria-hidden="true">#</a> 5、验证是否成功</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>kubectl <span class="token function">top</span> nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/e4c05471598a4fadbb4fe39440969e1b.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>完成。</p>
</div></template>


