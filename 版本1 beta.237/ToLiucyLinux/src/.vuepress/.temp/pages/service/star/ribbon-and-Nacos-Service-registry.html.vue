<template><div><p>上一节我们学习了<a href="https://blog.csdn.net/qq_58608526/article/details/131131244?spm=1001.2014.3001.5501" target="_blank" rel="noopener noreferrer">SpringCloud的核心组件Eureka<ExternalLinkIcon/></a> ，但是它逐渐被Nacos替代</p>
<p>了，在此之前我们先了解一下Ribbon负载均衡。</p>
<h2 id="_1-ribbon负载均衡" tabindex="-1"><a class="header-anchor" href="#_1-ribbon负载均衡" aria-hidden="true">#</a> 1. Ribbon负载均衡</h2>
<h3 id="_1-1-关于负载均衡" tabindex="-1"><a class="header-anchor" href="#_1-1-关于负载均衡" aria-hidden="true">#</a> 1.1 关于负载均衡</h3>
<p>​		负载均衡一般分为<strong>服务器端负载均衡</strong>和<strong>客户端负载均衡</strong></p>
<p>​		所谓<strong>服务器端负载均衡</strong>，比如<code v-pre>Nginx</code>、<code v-pre>F5</code>这些，请求到达服务器之后由这些负载均衡器根据一定的算法将请求路由到目标服务器处理。</p>
<p>​		所谓<strong>客户端负载均衡</strong>，比如我们要说的<code v-pre>Ribbon</code>，服务消费者客户端会有一个服务器地址列表，调用方在请求前通过一定的负载均衡算法选择一个服务器进行访问，负载均衡算法的执行是在请求客户端进行。</p>
<p>​		<strong>Ribbon</strong>是<code v-pre>Netflix</code>发布的负载均衡器。Eureka一般配合Ribbon进行使用，<code v-pre>Ribbon</code>利用从<code v-pre>Eureka</code>中读取到服务信息，在调用服务提供者提供的服务时，会根据一定的算法进行负载。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111109373.png" alt="image-20230611110926294" tabindex="0" loading="lazy"><figcaption>image-20230611110926294</figcaption></figure>
<p><strong>觉得还是有点没理解，话不多说，直接上实战</strong></p>
<blockquote>
<p>我们如果没有任何配置的情况下，只需要加上<code v-pre>@LoadBalanced</code>这个注解 ，他的默认策略就是轮询策略，简单来说 ，就我们哥俩(这里指的是用户微服务集群)轮着来，一人一次</p>
</blockquote>
<p>我们这里做一个测试，我们同时发起四次不同请求，使用订单微服务，远程调用用户微服务</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111119554.png" alt="image-20230611111835974" tabindex="0" loading="lazy"><figcaption>image-20230611111835974</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111118913.png" alt="image-20230611111844826" tabindex="0" loading="lazy"><figcaption>image-20230611111844826</figcaption></figure>
<p><code v-pre>我们会发现这四次请求，分别调用了四次用户微服务，而这四次是分发在用户微服务1和用户微服务2</code>，而且正好是我们刚所说的轮询策略，一人两次。</p>
<p><strong>下面我们更改Ribbon的策略，再来看看</strong></p>
<p>首先在OrderApplication中加入我们更改的策略，这里我们更改的是<code v-pre>随机策略</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">IRule</span> <span class="token function">randomRule</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RandomRule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>重新启动订单微服务进行测试</code></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111123098.png" alt="image-20230611112340967" tabindex="0" loading="lazy"><figcaption>image-20230611112340967</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111123901.png" alt="image-20230611112348747" tabindex="0" loading="lazy"><figcaption>image-20230611112348747</figcaption></figure>
<p><strong>此时我们发现，用户微服务1没有一个命中，而用户微服务2全部命中</strong>，这就是随机策略，能不能命中全靠<code v-pre>随机</code>。</p>
<h3 id="_1-2-负载均衡原理" tabindex="-1"><a class="header-anchor" href="#_1-2-负载均衡原理" aria-hidden="true">#</a> 1.2 负载均衡原理</h3>
<p>我们添加了<code v-pre>@LoadBalanced</code>注解，即可实现负载均衡功能，这是什么原理呢</p>
<p>SpringCloud底层其实是利用了一个名为<code v-pre>Ribbon</code>的组件，来实现负载均衡功能的。</p>
<p>那么我们发出的请求明明是<a href="http://userservice/user/1%EF%BC%8C%E6%80%8E%E4%B9%88%E5%8F%98%E6%88%90%E4%BA%86http://localhost:9001%E7%9A%84%E5%91%A2%EF%BC%9F" target="_blank" rel="noopener noreferrer">http://userservice/user/1，怎么变成了http://localhost:9001的呢？<ExternalLinkIcon/></a></p>
<h3 id="_1-3-源码跟踪" tabindex="-1"><a class="header-anchor" href="#_1-3-源码跟踪" aria-hidden="true">#</a> 1.3 源码跟踪</h3>
<p>为什么我们只输入了service名称就可以访问了呢？之前还要获取ip和端口。</p>
<p>显然有人帮我们根据service名称，获取到了服务实例的ip和端口。它就是<code v-pre>LoadBalancerInterceptor</code>，这个类会在对<code v-pre>RestTemplate</code>的请求进行拦截，然后从Eureka根据服务id获取服务列表，随后利用负载均衡算法得到真实的服务地址信息，替换服务id。</p>
<p>我们进行源码跟踪：</p>
<h4 id="_1-loadbalancerintercepor" tabindex="-1"><a class="header-anchor" href="#_1-loadbalancerintercepor" aria-hidden="true">#</a> 1）LoadBalancerIntercepor</h4>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111148233.png" alt="image-20230611114812088" tabindex="0" loading="lazy"><figcaption>image-20230611114812088</figcaption></figure>
<p>可以看到这里的intercept方法，拦截了用户的HttpRequest请求，然后做了几件事：</p>
<ul>
<li><code v-pre>request.getURI()</code>：获取请求uri，本例中就是 <a href="http://user-service/user/8" target="_blank" rel="noopener noreferrer">http://user-service/user/8<ExternalLinkIcon/></a></li>
<li><code v-pre>originalUri.getHost()</code>：获取uri路径的主机名，其实就是服务id，<code v-pre>user-service</code></li>
<li><code v-pre>this.loadBalancer.execute()</code>：处理服务id，和用户请求。</li>
</ul>
<p>这里的<code v-pre>this.loadBalancer </code> 是 <code v-pre>LoadBalancerClient</code>类型，我们继续跟入。</p>
<h4 id="_2-loadbalancerclient" tabindex="-1"><a class="header-anchor" href="#_2-loadbalancerclient" aria-hidden="true">#</a> 2）LoadBalancerClient</h4>
<p>继续跟入execute方法：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111204133.png" alt="image-20230611120426001" tabindex="0" loading="lazy"><figcaption>image-20230611120426001</figcaption></figure>
<p>代码是这样的：</p>
<ul>
<li><strong>getLoadBalancer(serviceId)</strong>：根据服务id获取ILoadBalancer，而<code v-pre>LoadBalancer</code>会拿着服务<code v-pre>id</code>去eureka中获取服务列表并保存起来。</li>
<li><strong>getServer(loadBalancer)</strong>：利用内置的负载均衡算法，从服务列表中选择一个。本例中，可以看到获取了9003端口的服务</li>
</ul>
<p>放行后，再次访问并跟踪，发现获取的是9001：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111212592.png" alt="image-20230611121227508" tabindex="0" loading="lazy"><figcaption>image-20230611121227508</figcaption></figure>
<p>果然实现了负载均衡。</p>
<h3 id="_1-4-负载均衡策略irule" tabindex="-1"><a class="header-anchor" href="#_1-4-负载均衡策略irule" aria-hidden="true">#</a> 1.4 负载均衡策略IRule</h3>
<p>在刚才的代码中，可以看到获取服务使通过一个<code v-pre>getServer</code>方法来做负载均衡:</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111212055.png" alt="image-20230611121227508" tabindex="0" loading="lazy"><figcaption>image-20230611121227508</figcaption></figure>
<p>我们继续跟入：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111131885.png" alt="1544361421671" tabindex="0" loading="lazy"><figcaption>1544361421671</figcaption></figure>
<p>继续跟踪源码chooseServer方法，发现这么一段代码：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111213164.png" alt="image-20230611121327066" tabindex="0" loading="lazy"><figcaption>image-20230611121327066</figcaption></figure>
<p>我们看看这个rule是谁：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111131890.png" alt="1525622699666" tabindex="0" loading="lazy"><figcaption>1525622699666</figcaption></figure>
<p>这里的rule默认值是一个<code v-pre>RoundRobinRule</code>，看类的介绍：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111131896.png" alt="1525622754316" tabindex="0" loading="lazy"><figcaption>1525622754316</figcaption></figure>
<p>这不就是轮询的意思嘛。</p>
<p>到这里，整个负载均衡的流程我们就清楚了。</p>
<h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4>
<p><code v-pre>SpringCloudRibbon</code>的底层采用了一个拦截器，拦截了RestTemplate发出的请求，对地址做了修改。用一幅图来总结一下：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111400169.png" alt="image-20230611140029080" tabindex="0" loading="lazy"><figcaption>image-20230611140029080</figcaption></figure>
<p>基本流程如下：</p>
<ul>
<li>拦截我们的RestTemplate请求<a href="http://userservice/user/1" target="_blank" rel="noopener noreferrer">http://userservice/user/1<ExternalLinkIcon/></a></li>
<li>RibbonLoadBalancerClient会从请求url中获取服务名称，也就是user-service</li>
<li>DynamicServerListLoadBalancer根据user-service到eureka拉取服务列表</li>
<li>eureka返回列表，localhost:9001、localhost:9002</li>
<li>IRule利用内置负载均衡规则，从列表中选择一个，例如localhost:9001</li>
<li>RibbonLoadBalancerClient修改请求地址，用localhost:8081替代userservice，得到<a href="http://localhost:9001/user/1%EF%BC%8C%E5%8F%91%E8%B5%B7%E7%9C%9F%E5%AE%9E%E8%AF%B7%E6%B1%82" target="_blank" rel="noopener noreferrer">http://localhost:9001/user/1，发起真实请求<ExternalLinkIcon/></a></li>
</ul>
<h3 id="_1-5-负载均衡策略" tabindex="-1"><a class="header-anchor" href="#_1-5-负载均衡策略" aria-hidden="true">#</a> 1.5 负载均衡策略</h3>
<p>负载均衡的规则都定义在IRule接口中，而IRule有很多不同的实现类：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111402972.png" alt="image-20210713225653000" tabindex="0" loading="lazy"><figcaption>image-20210713225653000</figcaption></figure>
<p>不同规则的含义如下：</p>
<table>
<thead>
<tr>
<th>负载均衡策略</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>RoundRobinRule：轮询策略</td>
<td>简单轮询服务列表来选择服务器。它是Ribbon默认的负载均衡规则。默认超过10次获取到的server都不可用，会返回一个空的server</td>
</tr>
<tr>
<td>RandomRule：随机策略</td>
<td>如果随机到的server为null或者不可用的话，会while不停的循环选取</td>
</tr>
<tr>
<td>AvailabilityFilteringRule:最小连接数策略</td>
<td>（1）在默认情况下，这台服务器如果3次连接失败，这台服务器就会被设置为“短路”状态。短路状态将持续30秒，如果再次连接失败，短路的持续时间就会几何级地增加。  （2）并发数过高的服务器。如果一个服务器的并发连接数过高，配置了AvailabilityFilteringRule规则的客户端也会将其忽略。并发连接数的上限，可以由客户端的属性进行配置。</td>
</tr>
<tr>
<td>WeightedResponseTimeRule：加权响应时间规则</td>
<td>为每一个服务器赋予一个权重值。服务器响应时间越长，这个服务器的权重就越小。这个规则会随机选择服务器，这个权重值会影响服务器的选择。</td>
</tr>
<tr>
<td>ZoneAvoidanceRule:区域权衡策略（默认策略）</td>
<td>扩展了轮询策略，继承了2个过滤器：ZoneAvoidancePredicate和AvailabilityPredicate，除了过滤超时和链接数过多的server，还会过滤掉不符合要求的zone区域里面的所有节点， 在一个区域/机房内的服务实例中轮询。<strong>先过滤再轮询</strong></td>
</tr>
<tr>
<td>BestAvailableRule：最佳可用规则</td>
<td>忽略那些短路的服务器，并选择并发数较低的服务器。</td>
</tr>
<tr>
<td>RandomRule:随机策略</td>
<td>随机选择一个可用的服务器。如果随机到的server为null或者不可用的话，会while不停的循环选取</td>
</tr>
<tr>
<td>RetryRule：重试策略</td>
<td>一定时限内循环重试。默认继承RoundRobinRule，也支持自定义注入，RetryRule会在每次选取之后，对选举的server进行判断，是否为null，是否alive，并且在500ms内会不停的选取判断。而RoundRobinRule失效的策略是超过10次，RandomRule是没有失效时间的概念，只要serverList没都挂。</td>
</tr>
</tbody>
</table>
<p>默认的实现就是<code v-pre>ZoneAvoidanceRule</code>，是一种轮询方案</p>
<h4 id="_1-5-1-自定义负载均衡策略" tabindex="-1"><a class="header-anchor" href="#_1-5-1-自定义负载均衡策略" aria-hidden="true">#</a> 1.5.1 自定义负载均衡策略</h4>
<p>通过定义IRule实现可以修改负载均衡规则，有两种方式：</p>
<ol>
<li>代码方式：在order-service中的OrderApplication类中，定义一个新的IRule：</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">IRule</span> <span class="token function">randomRule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RandomRule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>配置文件方式：在order-service的application.yml文件中，添加新的配置也可以修改规则：</li>
</ol>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">userservice</span><span class="token punctuation">:</span> <span class="token comment"># 给某个微服务配置负载均衡规则，这里是userservice服务</span>
  <span class="token key atrule">ribbon</span><span class="token punctuation">:</span>
    <span class="token key atrule">NFLoadBalancerRuleClassName</span><span class="token punctuation">:</span> com.netflix.loadbalancer.RandomRule <span class="token comment"># 负载均衡规则 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>注意</strong>，一般用默认的负载均衡规则，不做修改。</p>
</blockquote>
<h3 id="_1-6-饥饿加载" tabindex="-1"><a class="header-anchor" href="#_1-6-饥饿加载" aria-hidden="true">#</a> 1.6 饥饿加载</h3>
<p>Ribbon默认是采用懒加载，即第一次访问时才会去创建LoadBalanceClient，请求时间会很长。</p>
<p>而饥饿加载则会在项目启动时创建，降低第一次访问的耗时，通过下面配置开启饥饿加载：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">ribbon</span><span class="token punctuation">:</span>
  <span class="token key atrule">eager-load</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">clients</span><span class="token punctuation">:</span> userservice
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-nacos注册中心" tabindex="-1"><a class="header-anchor" href="#_2-nacos注册中心" aria-hidden="true">#</a> 2.Nacos注册中心</h2>
<p>国内公司一般都推崇阿里巴巴的技术，比如注册中心，<code v-pre>SpringCloudAlibaba</code>也推出了一个名为Nacos的注册中心。</p>
<h3 id="_2-1认识和安装nacos" tabindex="-1"><a class="header-anchor" href="#_2-1认识和安装nacos" aria-hidden="true">#</a> 2.1认识和安装Nacos</h3>
<p><a href="https://nacos.io/" target="_blank" rel="noopener noreferrer">Nacos<ExternalLinkIcon/></a>是阿里巴巴的产品，现在是<a href="https://spring.io/projects/spring-cloud" target="_blank" rel="noopener noreferrer">SpringCloud<ExternalLinkIcon/></a>中的一个组件。相比<a href="https://github.com/Netflix/eureka" target="_blank" rel="noopener noreferrer">Eureka<ExternalLinkIcon/></a>功能更加丰富，在国内受欢迎程度较高。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111423015.png" alt="image-20210713230444308" tabindex="0" loading="lazy"><figcaption>image-20210713230444308</figcaption></figure>
<h4 id="_2-1-1-下载安装包" tabindex="-1"><a class="header-anchor" href="#_2-1-1-下载安装包" aria-hidden="true">#</a> 2.1.1 下载安装包</h4>
<p>在Nacos的GitHub页面，提供有下载链接，可以下载编译好的Nacos服务端或者源代码：</p>
<p>GitHub主页：<a href="https://github.com/alibaba/nacos" target="_blank" rel="noopener noreferrer">https://github.com/alibaba/nacos<ExternalLinkIcon/></a></p>
<p>GitHub的Release下载页：<a href="https://github.com/alibaba/nacos/releases" target="_blank" rel="noopener noreferrer">https://github.com/alibaba/nacos/releases<ExternalLinkIcon/></a></p>
<p>如图：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111424546.png" alt="image-20210402161102887" tabindex="0" loading="lazy"><figcaption>image-20210402161102887</figcaption></figure>
<p>windows版本使用<code v-pre>nacos-server-1.4.1.zip</code>包即可。</p>
<h4 id="_2-1-2-解压" tabindex="-1"><a class="header-anchor" href="#_2-1-2-解压" aria-hidden="true">#</a> 2.1.2 解压</h4>
<p>将这个包解压到任意非中文目录下，如图：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111424554.png" alt="image-20210402161843337" tabindex="0" loading="lazy"><figcaption>image-20210402161843337</figcaption></figure>
<p>目录说明：</p>
<ul>
<li>bin：启动脚本</li>
<li>conf：配置文件</li>
</ul>
<h4 id="_2-1-3-端口配置" tabindex="-1"><a class="header-anchor" href="#_2-1-3-端口配置" aria-hidden="true">#</a> 2.1.3 端口配置</h4>
<p>Nacos的默认端口是8848，如果你电脑上的其它进程占用了8848端口，请先尝试关闭该进程。</p>
<p><strong>如果无法关闭占用8848端口的进程</strong>，也可以进入nacos的conf目录，修改配置文件中的端口：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111424556.png" alt="image-20210402162008280" tabindex="0" loading="lazy"><figcaption>image-20210402162008280</figcaption></figure>
<p>修改其中的内容：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111424562.png" alt="image-20210402162251093" tabindex="0" loading="lazy"><figcaption>image-20210402162251093</figcaption></figure>
<h4 id="_2-1-4-启动" tabindex="-1"><a class="header-anchor" href="#_2-1-4-启动" aria-hidden="true">#</a> 2.1.4 启动</h4>
<p>启动非常简单，进入bin目录，结构如下：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111424568.png" alt="image-20210402162350977" tabindex="0" loading="lazy"><figcaption>image-20210402162350977</figcaption></figure>
<p>然后执行命令即可：</p>
<ul>
<li>
<p>windows命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>startup.cmd <span class="token parameter variable">-m</span> standalone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<p>执行后的效果如图：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111424990.png" alt="image-20210402162526774" tabindex="0" loading="lazy"><figcaption>image-20210402162526774</figcaption></figure>
<h4 id="_2-1-5-访问" tabindex="-1"><a class="header-anchor" href="#_2-1-5-访问" aria-hidden="true">#</a> 2.1.5 访问</h4>
<p>在浏览器输入地址：<a href="http://127.0.0.1:8848/nacos%E5%8D%B3%E5%8F%AF%EF%BC%9A" target="_blank" rel="noopener noreferrer">http://127.0.0.1:8848/nacos即可：<ExternalLinkIcon/></a></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111424015.png" alt="image-20210402162630427" tabindex="0" loading="lazy"><figcaption>image-20210402162630427</figcaption></figure>
<p>默认的账号和密码都是nacos，进入后：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111448939.png" alt="image-20230611144820834" tabindex="0" loading="lazy"><figcaption>image-20230611144820834</figcaption></figure>
<h3 id="_2-2-微服务注册到nacos" tabindex="-1"><a class="header-anchor" href="#_2-2-微服务注册到nacos" aria-hidden="true">#</a> 2.2 微服务注册到Nacos</h3>
<h4 id="_2-2-1-引入依赖" tabindex="-1"><a class="header-anchor" href="#_2-2-1-引入依赖" aria-hidden="true">#</a> 2.2.1 引入依赖</h4>
<ol>
<li>在cloud-demo父工程的pom文件中的<code v-pre>&lt;dependencyManagement&gt;</code>中引入SpringCloudAlibaba的依赖：</li>
</ol>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-alibaba-dependencies<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.2.6.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>import<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>然后在user-service和order-service中的pom文件中引入nacos-discovery依赖：</li>
</ol>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-starter-alibaba-nacos-discovery<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>注意</strong>：不要忘了注释掉eureka的依赖。</p>
</blockquote>
<h4 id="_2-2-2-配置nacos地址" tabindex="-1"><a class="header-anchor" href="#_2-2-2-配置nacos地址" aria-hidden="true">#</a> 2.2.2 配置nacos地址</h4>
<p>在user-service和order-service的application.yml中添加nacos地址：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8848</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>注意</strong>：不要忘了注释掉eureka的依赖。</p>
</blockquote>
<h4 id="_2-2-3-重启" tabindex="-1"><a class="header-anchor" href="#_2-2-3-重启" aria-hidden="true">#</a> 2.2.3 重启</h4>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111507669.png" alt="image-20230611150748584" tabindex="0" loading="lazy"><figcaption>image-20230611150748584</figcaption></figure>
<p>保护阈值：可以设置为<code v-pre>0-1之间的浮点数</code>，它其实是一个比例值（当前服务健康实例数/当前服务总实例数）</p>
<p>​		<strong>场景：</strong></p>
<blockquote>
<p>​        一般流程下，nacos是服务注册中心，服务消费者要从nacos获取某一个服务的可用实例信息，对于服务实例有健康/不健康状态之分，nacos在返回给消费者实例信息的时候，会返回健康实例。这个时候在一些高并发、大流量场景下会存在一定的问题</p>
<p>​		如果服务A有100个实例，98个实例都不健康了，只有2个实例是健康的，如果nacos只返回这两个健康实例的信息的话，那么后续消费者的请求将全部被分配到这两个实例，流量洪峰到来，2个健康的实例也扛不住了，整个服务A 就扛不住，上游的微服务也会导致崩溃，产生雪崩效应。</p>
</blockquote>
<p>​		<strong>保护阈值的意义在于</strong></p>
<blockquote>
<p>​		当服务A健康实例数/总实例数   &lt; 保护阈值 的时候，说明健康实例真的不多了，这个时候保护阈值会被触发（状态true）</p>
<p>​		nacos将会把该服务所有的实例信息（健康的+不健康的）全部提供给消费者，消费者可能访问到不健康的实例，请求失败，但这样也比造成雪崩要好，牺牲了一些请求，保证了整个系统的一个可用。</p>
<p>​		注意：阿里内部在使用nacos的时候，也经常调整这个保护阈值参数。</p>
</blockquote>
<h3 id="_2-3-服务分级存储模型" tabindex="-1"><a class="header-anchor" href="#_2-3-服务分级存储模型" aria-hidden="true">#</a> 2.3 服务分级存储模型</h3>
<p>一个<strong>服务</strong>可以有多个<strong>实例</strong>，例如我们的user-service，可以有:</p>
<ul>
<li>127.0.0.1:9001</li>
<li>127.0.0.1:9002</li>
<li>127.0.0.1:9003</li>
<li>127.0.0.1:9004</li>
</ul>
<p>假如这些实例分布于全国各地的不同机房，例如：</p>
<ul>
<li>127.0.0.1:9001，在上海机房</li>
<li>127.0.0.1:9002，在上海机房</li>
<li>127.0.0.1:9003，在杭州机房</li>
<li>127.0.0.1:9004，在杭州机房</li>
</ul>
<p>Nacos就将同一机房内的实例 划分为一个<strong>集群</strong>。</p>
<p>也就是说，user-service是服务，一个服务可以包含多个集群，如杭州、上海，每个集群下可以有多个实例，形成分级模型，如图：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111510697.png" alt="image-20210713232522531" tabindex="0" loading="lazy"><figcaption>image-20210713232522531</figcaption></figure>
<p>微服务互相访问时，应该尽可能访问同集群实例，因为本地访问速度更快。当本集群内不可用时，才访问其它集群。例如：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111510705.png" alt="image-20210713232658928" tabindex="0" loading="lazy"><figcaption>image-20210713232658928</figcaption></figure>
<p>杭州机房内的order-service应该优先访问同机房的user-service。</p>
<h3 id="_2-4-给user-service配置集群" tabindex="-1"><a class="header-anchor" href="#_2-4-给user-service配置集群" aria-hidden="true">#</a> 2.4 给user-service配置集群</h3>
<p>修改user-service的application.yml文件，添加集群配置：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8848</span>
      <span class="token key atrule">discovery</span><span class="token punctuation">:</span>
        <span class="token key atrule">cluster-name</span><span class="token punctuation">:</span> HZ <span class="token comment"># 集群名称</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启两个user-service实例后，我们可以在nacos控制台看到下面结果：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111514803.png" alt="image-20230611151445726" tabindex="0" loading="lazy"><figcaption>image-20230611151445726</figcaption></figure>
<p>我们再次复制一个user-service启动配置，添加属性：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token parameter variable">-Dserver.port</span><span class="token operator">=</span><span class="token number">8083</span> -Dspring.cloud.nacos.discovery.cluster-name<span class="token operator">=</span>SH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置如图所示：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111513757.png" alt="image-20230611151326677" tabindex="0" loading="lazy"><figcaption>image-20230611151326677</figcaption></figure>
<p>启动UserApplication3后再次查看nacos控制台：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111514382.png" alt="image-20230611151453318" tabindex="0" loading="lazy"><figcaption>image-20230611151453318</figcaption></figure>
<h3 id="_2-5-同集群优先的负载均衡" tabindex="-1"><a class="header-anchor" href="#_2-5-同集群优先的负载均衡" aria-hidden="true">#</a> 2.5 同集群优先的负载均衡</h3>
<p>默认的<code v-pre>ZoneAvoidanceRule</code>并不能实现根据同集群优先来实现负载均衡。</p>
<p>因此Nacos中提供了一个<code v-pre>NacosRule</code>的实现，可以优先从同集群中挑选实例。</p>
<p>1）给order-service配置集群信息</p>
<p>修改order-service的application.yml文件，添加集群配置：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>spring:
  cloud:
    nacos:
      server-addr: localhost:8848
      discovery:
        cluster-name: HZ <span class="token comment"># 集群名称</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）修改负载均衡规则</p>
<p>修改order-service的application.yml文件，修改负载均衡规则：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">userservice</span><span class="token punctuation">:</span>
  <span class="token key atrule">ribbon</span><span class="token punctuation">:</span>
    <span class="token key atrule">NFLoadBalancerRuleClassName</span><span class="token punctuation">:</span> com.alibaba.cloud.nacos.ribbon.NacosRule <span class="token comment"># 负载均衡规则 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-权重配置" tabindex="-1"><a class="header-anchor" href="#_2-6-权重配置" aria-hidden="true">#</a> 2.6 权重配置</h3>
<p>实际部署中会出现这样的场景：</p>
<p>服务器设备性能有差异，部分实例所在机器性能较好，另一些较差，我们希望性能好的机器承担更多的用户请求。</p>
<p>但默认情况下<code v-pre>NacosRule</code>是同集群内随机挑选，不会考虑机器的性能问题。</p>
<p>因此，<code v-pre>Nacos</code>提供了权重配置来控制访问频率，权重越大则访问频率越高。</p>
<p>在<code v-pre>nacos</code>控制台，找到<code v-pre>user-service</code>的实例列表，点击编辑，即可修改权重：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306171445355.png" alt="image-20230617144541231" tabindex="0" loading="lazy"><figcaption>image-20230617144541231</figcaption></figure>
<p>在弹出的编辑窗口，修改权重：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306171446235.png" alt="image-20230617144601159" tabindex="0" loading="lazy"><figcaption>image-20230617144601159</figcaption></figure>
<blockquote>
<p><strong>注意</strong>：如果权重修改为0，则该实例永远不会被访问</p>
</blockquote>
<h3 id="_2-7-环境隔离" tabindex="-1"><a class="header-anchor" href="#_2-7-环境隔离" aria-hidden="true">#</a> 2.7 环境隔离</h3>
<p>Nacos提供了namespace来实现环境隔离功能。</p>
<ul>
<li>
<p>nacos中可以有多个namespace</p>
</li>
<li>
<p>namespace下可以有group、service等</p>
</li>
<li>
<p>不同namespace之间相互隔离，例如不同namespace的服务互相不可见</p>
</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111522495.png" alt="image-20200923112940575" tabindex="0" loading="lazy"><figcaption>image-20200923112940575</figcaption></figure>
<p><strong>Namespace</strong>：命名空间，对不同的环境进行隔离，比如隔离开发环境、测试环境和生产环境</p>
<p>Group：分组，将若干个服务或者若干个配置集归为一组，通常习惯一个系统归为一个组（拉勾招聘、拉勾猎头、拉勾教育）</p>
<p><strong>Service</strong>：某一个服务，比如商品微服务</p>
<p><strong>DataId</strong>：配置集或者可以认为是一个配置文件</p>
<p><strong>Namespace + Group + Service   如同 Maven 中的GAV坐标，GAV坐标是为了锁定Jar，而这里是为了锁定服务</strong></p>
<p><strong>Namespace + Group + DataId   如同 Maven 中的GAV坐标，GAV坐标是为了锁定Jar，而这里是为了锁定配置文件</strong></p>
<p><strong>最佳实践</strong></p>
<p>​		<strong>Nacos</strong>抽象出了<code v-pre>Namespace</code>、<code v-pre>Group</code>、<code v-pre>Service</code>、<code v-pre>DataId</code>等概念，具体代表什么取决于怎么用（非常灵活），推荐用法如下</p>
<table>
<thead>
<tr>
<th>概念</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>Namespace</td>
<td>代表不同的环境，如开发dev、测试test、生产环境prod</td>
</tr>
<tr>
<td>Group</td>
<td>代表某项目，比如拉勾云项目</td>
</tr>
<tr>
<td>Service</td>
<td>某个项目中具体xxx服务</td>
</tr>
<tr>
<td>DataId</td>
<td>某个项目中具体的xxx配置文件</td>
</tr>
</tbody>
</table>
<h4 id="_2-7-1-创建namespace" tabindex="-1"><a class="header-anchor" href="#_2-7-1-创建namespace" aria-hidden="true">#</a> 2.7.1 创建namespace</h4>
<p>默认情况下，所有service、data、group都在同一个namespace，名为public：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111516244.png" alt="image-20210714000414781" tabindex="0" loading="lazy"><figcaption>image-20210714000414781</figcaption></figure>
<p>我们可以点击页面新增按钮，添加一个namespace：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111517835.png" alt="image-20210714000440143" tabindex="0" loading="lazy"><figcaption>image-20210714000440143</figcaption></figure>
<p>然后，填写表单：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111517885.png" alt="image-20210714000505928" tabindex="0" loading="lazy"><figcaption>image-20210714000505928</figcaption></figure>
<p>就能在页面看到一个新的namespace：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111517775.png" alt="image-20230611151747711" tabindex="0" loading="lazy"><figcaption>image-20230611151747711</figcaption></figure>
<h4 id="_2-7-2-给微服务配置namespace" tabindex="-1"><a class="header-anchor" href="#_2-7-2-给微服务配置namespace" aria-hidden="true">#</a> 2.7.2 给微服务配置namespace</h4>
<p>给微服务配置namespace只能通过修改配置来实现。</p>
<p>例如，修改order-service的application.yml</p>
<p>文件：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8848</span>
      <span class="token key atrule">discovery</span><span class="token punctuation">:</span>
        <span class="token key atrule">cluster-name</span><span class="token punctuation">:</span> HZ
        <span class="token key atrule">namespace</span><span class="token punctuation">:</span> 6f91682a<span class="token punctuation">-</span>dae8<span class="token punctuation">-</span>4236<span class="token punctuation">-</span>8974<span class="token punctuation">-</span>48595037e16c <span class="token comment"># 命名空间，填ID</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启order-service后，访问控制台，可以看到下面的结果：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111520150.png" alt="image-20230611152008076" tabindex="0" loading="lazy"><figcaption>image-20230611152008076</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111520313.png" alt="image-20230611152018237" tabindex="0" loading="lazy"><figcaption>image-20230611152018237</figcaption></figure>
<p>此时访问order-service，因为namespace不同，会导致找不到userservice，控制台会报错：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306111520384.png" alt="image-20210714000941256" tabindex="0" loading="lazy"><figcaption>image-20210714000941256</figcaption></figure>
<h3 id="_2-8-nacos与eureka的区别" tabindex="-1"><a class="header-anchor" href="#_2-8-nacos与eureka的区别" aria-hidden="true">#</a> 2.8 Nacos与Eureka的区别</h3>
<p>Nacos的服务实例分为两种l类型：</p>
<ul>
<li>
<p>临时实例：如果实例宕机超过一定时间，会从服务列表剔除，默认的类型。</p>
</li>
<li>
<p>非临时实例：如果实例宕机，不会从服务列表剔除，也可以叫永久实例。</p>
</li>
</ul>
<p>配置一个服务实例为永久实例：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">discovery</span><span class="token punctuation">:</span>
        <span class="token key atrule">ephemeral</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 设置为非临时实例</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Nacos和Eureka整体结构类似，服务注册、服务拉取、心跳等待，但是也存在一些差异：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306171455907.png" alt="image-20230617145509807" tabindex="0" loading="lazy"><figcaption>image-20230617145509807</figcaption></figure>
<ul>
<li>
<p>Nacos与eureka的共同点</p>
<ul>
<li>都支持服务注册和服务拉取</li>
<li>都支持服务提供者心跳方式做健康检测</li>
</ul>
</li>
<li>
<p>Nacos与Eureka的区别</p>
<ul>
<li>Nacos支持服务端主动检测提供者状态：临时实例采用心跳模式，非临时实例采用主动检测模式</li>
<li>临时实例心跳不正常会被剔除，非临时实例则不会被剔除</li>
<li>Nacos支持服务列表变更的消息推送模式，服务列表更新更及时</li>
<li>Nacos集群默认采用AP方式，当集群中存在非临时实例时，采用CP模式；Eureka采用AP方式</li>
</ul>
</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312031906036.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


