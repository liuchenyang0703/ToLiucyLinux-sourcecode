<template><div><blockquote>
<p>🍁<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！</p>
</blockquote>
<h2 id="_1、启动-mysql-项目" tabindex="-1"><a class="header-anchor" href="#_1、启动-mysql-项目" aria-hidden="true">#</a> 1、启动 mysql 项目</h2>
<h3 id="_1-1-创建-mysql-rc-yaml" tabindex="-1"><a class="header-anchor" href="#_1-1-创建-mysql-rc-yaml" aria-hidden="true">#</a> 1-1 创建 mysql-rc.yaml</h3>
<p>RC（ReplicationController）是Kubernetes系统中的核心概念之一，简单来说，它其实定义了一个期望的场景，即声明某种Pod的副本数量在任意时刻都符合某个预期值，所以RC的定义包括如下几个部分。<br>
◎　Pod期待的副本数量。<br>
◎　用于筛选目标Pod的Label Selector。<br>
◎　当Pod的副本数量小于预期数量时，用于创建新Pod的Pod模板（template）。</p>
<p>首先先编排一个关于mysql的RC（ReplicationController）yaml文件。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">></span> mysql-rc.yaml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
apiVersion: v1
kind: ReplicationController             # 类型是副本控制器
metadata:                               
  name: mysql                           # RC的名称全局是唯一的，这里name是mysql
spec:
  replicas: 1                           # 副本数量1
  selector:                             # RC管理 拥有label={app:mysql}这个标签的 pod
    app: mysql
  template:                             # template代表下面开始定义一个pod
    metadata:
      labels:
        app: mysql                      # 这个pod拥有{app:mysql}这样一个标签
    spec:                               
      containers:                       # pod中的容器定义部分
      - name: mysql 
        image: mysql:5.7
        ports:
        - containerPort: 3306           # 容器监听的端口
        env:                            # 注入容器里面的环境变量
        - name: MYSQL_ROOT_PASSWORD
          value: "123456"
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上YAML定义文件中</p>
<ul>
<li>kind属性用来表明此资源对象的类型，比如这里的值为ReplicationController，表示这是一个RC</li>
<li>spec一节中是RC的相关属性定义，比如spec.selector是RC的Pod标签选择器，即监控和管理拥有这些标签的Pod实例，确保在当前集群中始终有且仅有replicas个Pod实例在运行，这里设置replicas=1，表示只能运行一个MySQL Pod实例。</li>
<li>当在集群中运行的Pod数量少于replicas时，RC会根据在spec.template一节中定义的Pod模板来生成一个新的Pod实例，spec.template.metadata.labels指定了该Pod的标签，需要特别注意的是：这里的labels必须匹配之前的spec.selector，否则此RC每创建一个无法匹配Label的Pod，就会不停地尝试创建新的Pod，陷入恶性循环中。</li>
</ul>
<h4 id="_1-1-1-将rc发布到k8s集群里面去" tabindex="-1"><a class="header-anchor" href="#_1-1-1-将rc发布到k8s集群里面去" aria-hidden="true">#</a> 1-1-1 将RC发布到k8s集群里面去</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> mysql-rc.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-1-2-查看集群中的pods" tabindex="-1"><a class="header-anchor" href="#_1-1-2-查看集群中的pods" aria-hidden="true">#</a> 1-1-2 查看集群中的pods</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods</span>
NAME          READY   STATUS    RESTARTS   AGE
mysql-hk852   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          8s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-1-3-负载均衡副本实例-数据库不需要开多个副本-这里只举例如何多开副本" tabindex="-1"><a class="header-anchor" href="#_1-1-3-负载均衡副本实例-数据库不需要开多个副本-这里只举例如何多开副本" aria-hidden="true">#</a> 1-1-3 负载均衡	副本实例（数据库不需要开多个副本）这里只举例如何多开副本</h4>
<ul>
<li>我们可以看到只有一个，我们如果需要负载均衡的话可以多加几个<code v-pre>rc副本</code>，但是这里面只要一个数据库就好了，数据库一般不会做负载均衡，就算做负载均衡，就要做其他操作，比如同步数据，不同步数据的话数据就会乱。这里创建多个副本只是讲一下。</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>kubectl scale rc mysql <span class="token parameter variable">--replicas</span><span class="token operator">=</span><span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>再次查看pod</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>kubectl get pods
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161415885.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>现在启动了5个mysql，负载均衡完成。</p>
<h3 id="_1-2-创建-mysql-svc-yaml" tabindex="-1"><a class="header-anchor" href="#_1-2-创建-mysql-svc-yaml" aria-hidden="true">#</a> 1-2 创建 mysql-svc.yaml</h3>
<p>最后，我们创建一个与之关联的kubenetes Service-MYSQL 的定义文件（文件名为：mysql-svc.yaml），完整的内容和解析如下；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">></span> mysql-svc.yaml <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
apiVersion: v1
kind: Service              # 类型是service
metadata:                  
  name: mysql              # 这个service的全局唯一名称
spec:
  ports:
    - port: 3306           # service提供服务的端口号
  selector:
    app: mysql             # 把拥有{app:label}这个标签的pod应用到这个服务里面
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="http://xn--metadata-kd0mi5y.name" target="_blank" rel="noopener noreferrer">其中metadata.name<ExternalLinkIcon/></a> 是Service的服务名（ServiceName）；port属性则定义了Service的端口；sepc.selector确定了那些Pod副本（实例）对应到本服务。类似地，我们通过kubectl apply 命令创建Service对象。</p>
<h4 id="_1-2-1-将services应用到集群中" tabindex="-1"><a class="header-anchor" href="#_1-2-1-将services应用到集群中" aria-hidden="true">#</a> 1-2-1 将services应用到集群中</h4>
<p>光有RC是不行的，RC不会提供服务的，需要一个Service。将它应用到集群里面去。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> mysql-svc.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-2-2-查看services" tabindex="-1"><a class="header-anchor" href="#_1-2-2-查看services" aria-hidden="true">#</a> 1-2-2 查看services</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>kubectl get svc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161415390.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>  注意到，MySQL服务被分配了一个值为 10.100.130.176 的Cluster IP地址。随后，Kubernetes集群中其他新创建的Pod就可以通过Service的Cluster IP+端口号3306来连接和访问它了。但是要注意，外部是无法去访问这个Mysql的，3306只是对其他pod开放的端口号。回忆一下，之前的pod,node架构图就知道了。<br>
 <br>
  通常，Cluster IP是在Service创建后由Kubernetes系统自动分配的，其他Pod无法预先知道某个Service的Cluster IP地址，因此需要一个服务发现机制来找到这个服务。为此，最初时，Kubernetes巧妙地使用了Linux环境变量（Environment Variable）来解决这个问题，后面会详细说明其机制。现在只需知道，根据Service的唯一名称，容器可以从环境变量中获取Service对应的Cluster IP地址和端口，从而发起TCP/IP连接请求。这个地方挺像Nacos里面一样的，只要应用名称就可以自动访问到。不用配置什么具体的ip什么的。</p>
</blockquote>
<h3 id="_1-3-附加-如何找到并进入mysql数据库中" tabindex="-1"><a class="header-anchor" href="#_1-3-附加-如何找到并进入mysql数据库中" aria-hidden="true">#</a> 1-3 附加：如何找到并进入mysql数据库中？</h3>
<p>如果需要查看mysql的表或者数据的话，可以这样来看；</p>
<ul>
<li>首先：查看mysql在哪个集群中，当然单机架构就没事了；</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>kubectl get pods <span class="token parameter variable">-o</span> wide
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161415162.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以看到mysql在node2节点上，我们就可以去node2集群中去找到<code v-pre>mysql-4fxv6</code>这个容器；</p>
<ul>
<li>切换到node2节点</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-node2 ~<span class="token punctuation">]</span><span class="token comment"># docker ps -a | grep mysql-4fxv6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161415626.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>过滤出来了两个容器，选第一个就行，因为第二个是属于一个控制器，容器名为：<code v-pre>k8s_mysql_mysql-4fxv6_default_a6be3c5d-72ef-40d9-b6b7-83e31c4f5d86_0</code></p>
<ul>
<li>进入该容器</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-node1 ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it k8s_mysql_mysql-4fxv6_default_a6be3c5d-72ef-40d9-b6b7-83e31c4f5d86_0 bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>进入数据库</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161414039.png" alt="" loading="lazy"><br>
这样就进入到数据库中了，可以自行查看表结构或者增删改查数据之类的了。</p>
<ul>
<li>还有一种进入数据库容器的方法；</li>
</ul>
<p>使用方法：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code> kubectl <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> pod名字 -n名称空间 <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>实例：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>kubectl <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql-4fxv6 <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>为什么这样进入数据库，用工具连接不好吗？<br>
 <br>
  答：因为mysql端口没有对外，使用navicat等工具并不能连接上。</p>
</blockquote>
<h2 id="_2、启动-tomcat-项目" tabindex="-1"><a class="header-anchor" href="#_2、启动-tomcat-项目" aria-hidden="true">#</a> 2、启动 tomcat 项目</h2>
<p>这个tomcat是书里面特定的，所以说我们要先去拉取一下这个镜像，这个镜像是作者已经制定好了的。</p>
<h3 id="_2-1-拉取特定的tomcat镜像" tabindex="-1"><a class="header-anchor" href="#_2-1-拉取特定的tomcat镜像" aria-hidden="true">#</a> 2-1 拉取特定的tomcat镜像</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull kubeguide/tomcat-app:v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>拉取完成之后，写yaml文件。</p>
<h3 id="_2-2-创建-tomcat-rc-yaml" tabindex="-1"><a class="header-anchor" href="#_2-2-创建-tomcat-rc-yaml" aria-hidden="true">#</a> 2-2 创建 tomcat-rc.yaml</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">></span> tomcat-rc.yaml <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
apiVersion: v1
kind: ReplicationController
metadata:
  name: myweb
spec:
  replicas: 5
  selector:
    app: myweb
  template:
    metadata:
      labels:
        app: myweb
    spec:
      containers:
      - name: myweb
        image: kubeguide/tomcat-app:v1
        ports:
        - containerPort: 8080
        env:
        - name: MYSQL_SERVICE_HOST
          value: 'mysql'
        - name: MYSQL_SERVICE_PORT
          value: '3306'
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：Tomcat 容器内，应用将使用环境变量 MYSQL_ SERVICE_ HOST 的值连接 MYSQL 务。更安全可靠的用法是使用服务的名称“mysql”。</p>
</blockquote>
<h4 id="_2-2-1-将rc发布到k8s集群里面去" tabindex="-1"><a class="header-anchor" href="#_2-2-1-将rc发布到k8s集群里面去" aria-hidden="true">#</a> 2-2-1 将RC发布到k8s集群里面去</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> tomcat-rc.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里面有5个副本就不用在多创建了，5个就够了，当然自己想要更多可以根据自己的情况创建。</p>
<h4 id="_2-2-2-查看集群中的pods" tabindex="-1"><a class="header-anchor" href="#_2-2-2-查看集群中的pods" aria-hidden="true">#</a> 2-2-2 查看集群中的pods</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods | grep myweb</span>
myweb-56tzt   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          7m37s
myweb-7h9t8   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          7m37s
myweb-kzq69   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          7m37s
myweb-tncrc   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          7m37s
myweb-wprk4   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          7m37s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到已经创建了5个pod，接下来就该创建对外开放的端口也就是services了。</p>
<h3 id="_2-3-创建-tomcat-svc-yaml" tabindex="-1"><a class="header-anchor" href="#_2-3-创建-tomcat-svc-yaml" aria-hidden="true">#</a> 2-3 创建 tomcat-svc.yaml</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">></span> tomcat-svc.yaml <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
apiVersion: v1
kind: Service
metadata:
  name: myweb
spec:
  type: NodePort
  ports:
    - port: 8080
      nodePort: 30001  # 对外暴露端口，使得k8s之外的人可以访问到这个服务
  selector:
    app: myweb
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>type=NodePort和nodePort=30001的两个属性表明此Service开启了NodePort方式的外网访问模式。在Kubernetes集群之外，比如在本机的浏览器里，可以通过30001这个端口访问myweb（对应到8080的虚端口上）。</p>
</blockquote>
<h4 id="_2-3-1-将services应用到集群中" tabindex="-1"><a class="header-anchor" href="#_2-3-1-将services应用到集群中" aria-hidden="true">#</a> 2-3-1 将services应用到集群中</h4>
<p>光有RC是不行的，RC不会提供服务的，需要一个Service。将它应用到集群里面去。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> tomcat-svc.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-3-2-查看services" tabindex="-1"><a class="header-anchor" href="#_2-3-2-查看services" aria-hidden="true">#</a> 2-3-2 查看services</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>kubectl get svc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161414858.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>30001为映射的端口，是可以对外访问的。</p>
<h2 id="_3、通过浏览器访问" tabindex="-1"><a class="header-anchor" href="#_3、通过浏览器访问" aria-hidden="true">#</a> 3、通过浏览器访问</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code> <span class="token comment">#ip填你的master或者node的地址</span>
http://172.16.11.221:30001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161414680.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>如果看不到这个网页，那么可能有几个原因：比如防火墙的问题，无法访问 30001 端口，或者因为你是通过代理上网的，浏览器错把虛拟机的IP地址当成远程地址了。可以在虛拟机上直接运行 curl 127.0.0.1:30001 来验证此端口是否能被访问，如果还是不能访问，那么这肯定不是机器的问题…</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#ip填你的master或者node的地址</span>
http://172.16.11.221:30001/demo/ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161414432.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>接下来可以尝试单击 “Add..” 按钮添加一条记录并提交，如下图所示，提交以后，数据就被写入 MySQL 数据库中了。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161414057.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>提交为<code v-pre>submit</code>，提交成功会显示如下图；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161414407.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>如果失败，既有可能是因为数据库副本开的太多，导致数据写入不知道该往哪个数据库中写了。</p>
<p>点击<code v-pre>return</code>即可返回查看到刚刚添加的数据。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161414443.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>  至此，我们终于完成了 Kuberetes 上的 Tomcat 例子，这个例子并不是很复杂。我们也看到，相对于传统的分布式应用的部署方式，在Kuberetes 之上我们仅仅通过一些很容易理解的配置文件和相关的简单命令就完成了对整个集群的部署，这让我们惊诧于 Kuberetes 的创新和强大。 下一节，我们将开始对 Kubernetes 中的基本概念和术语进行全面学习，在这之前，读者可以继续研究下这个例子里的一些拓展内容，如下所述。 研究 RC、Service 等配置文件的格式。</p>
</div></template>


