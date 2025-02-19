<template><div><p>在上一节 <a href="https://blog.csdn.net/qq_58608526/article/details/131235361?spm=1001.2014.3001.5501" target="_blank" rel="noopener noreferrer">Ribbon和 Nacos服务注册中心<ExternalLinkIcon/></a>， 我们学习了使用nacos进行服务注册和服务发现以及Ribbon负载均衡以及他的简单原理剖析。这一节我们来继续认识<code v-pre>SpringCloud</code>的一些核心组件<code v-pre>openFeign</code>。</p>
<h2 id="_1-问题分析" tabindex="-1"><a class="header-anchor" href="#_1-问题分析" aria-hidden="true">#</a> 1. 问题分析</h2>
<p>先来看我们以前利用RestTemplate发起远程调用的代码：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306171459436.png" alt="image-20210714174814204" tabindex="0" loading="lazy"><figcaption>image-20210714174814204</figcaption></figure>
<p><strong>存在的问题：</strong></p>
<ol>
<li>在服务消费者中，我们把<code v-pre>url</code>地址硬编码到代码中，不方便后期维护。</li>
<li>在服务消费者中，不清楚服务提供者的状态。</li>
<li>服务消费者调用服务提供者时候，如果出现故障能否及时发现不向用户抛出异常页面？</li>
<li>RestTemplate这种请求调用方式是否还有优化空间？能不能类似于Dubbo那样玩？</li>
</ol>
<h2 id="_2-了解feign" tabindex="-1"><a class="header-anchor" href="#_2-了解feign" aria-hidden="true">#</a> 2. 了解Feign</h2>
<p><code v-pre>Feign</code>是一个声明式的http客户端，官方地址：<a href="https://github.com/OpenFeign/feign" target="_blank" rel="noopener noreferrer">https://github.com/OpenFeign/feign<ExternalLinkIcon/></a></p>
<p>其作用就是帮助我们优雅的实现http请求的发送，解决上面提到的问题。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306171501881.png" alt="image-20210714174918088" tabindex="0" loading="lazy"><figcaption>image-20210714174918088</figcaption></figure>
<h2 id="_3-项目整合feign" tabindex="-1"><a class="header-anchor" href="#_3-项目整合feign" aria-hidden="true">#</a> 3. 项目整合Feign</h2>
<p>Fegin的使用步骤如下：</p>
<h3 id="_3-1-引入依赖" tabindex="-1"><a class="header-anchor" href="#_3-1-引入依赖" aria-hidden="true">#</a> 3.1 引入依赖</h3>
<p>我们在order-service服务的pom文件中引入feign的依赖：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-starter-openfeign<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-添加注解" tabindex="-1"><a class="header-anchor" href="#_3-2-添加注解" aria-hidden="true">#</a> 3.2 添加注解</h3>
<p>在<code v-pre>order-service</code>的启动类添加注解开启<code v-pre>Feign</code>的功能：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306171503080.png" alt="image-20230617150337918" tabindex="0" loading="lazy"><figcaption>image-20230617150337918</figcaption></figure>
<h3 id="_3-3-编写feign客户端" tabindex="-1"><a class="header-anchor" href="#_3-3-编写feign客户端" aria-hidden="true">#</a> 3.3 编写Feign客户端</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>cisyam<span class="token punctuation">.</span>order<span class="token punctuation">.</span>client</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>cisyam<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>openfeign<span class="token punctuation">.</span></span><span class="token class-name">FeignClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PathVariable</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> gaoziman
 */</span>
<span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span><span class="token string">"userservice"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserClient</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 通过用户后编号去获取用户对象
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/user/{id}"</span><span class="token punctuation">)</span>
    <span class="token class-name">User</span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个客户端主要是基于SpringMVC的注解来声明远程调用的信息，比如：</p>
<ul>
<li>服务名称：<code v-pre>userservice</code></li>
<li>请求方式：<code v-pre>GET</code></li>
<li>请求路径：<code v-pre>/user/{id}</code></li>
<li>请求参数：<code v-pre>Long id</code></li>
<li>返回值类型：<code v-pre>User</code></li>
</ul>
<p>这样，<code v-pre>Feign</code>就可以帮助我们发送<code v-pre>http</code>请求，无需自己使用RestTemplate来发送了。</p>
<h3 id="_3-4-测试" tabindex="-1"><a class="header-anchor" href="#_3-4-测试" aria-hidden="true">#</a> 3.4 测试</h3>
<p>修改order-service中的<code v-pre>OrderService</code>类中的<code v-pre>queryOrderById</code>方法，使用Feign客户端代替RestTemplate：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306171506911.png" alt="image-20230617150609816" tabindex="0" loading="lazy"><figcaption>image-20230617150609816</figcaption></figure>
<h3 id="_3-5-总结" tabindex="-1"><a class="header-anchor" href="#_3-5-总结" aria-hidden="true">#</a> 3.5 总结</h3>
<p>使用Feign的步骤：</p>
<p>① 引入依赖</p>
<p>② 添加@EnableFeignClients注解</p>
<p>③ 编写FeignClient接口</p>
<p>④ 使用FeignClient中定义的方法代替RestTemplate</p>
<h2 id="_4-自定义配置" tabindex="-1"><a class="header-anchor" href="#_4-自定义配置" aria-hidden="true">#</a> 4. 自定义配置</h2>
<p>Feign可以支持很多的自定义配置，如下表所示：</p>
<table>
<thead>
<tr>
<th>类型</th>
<th>作用</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>feign.Logger.Level</strong></td>
<td>修改日志级别</td>
<td>包含四种不同的级别：NONE、BASIC、HEADERS、FULL</td>
</tr>
<tr>
<td>feign.codec.Decoder</td>
<td>响应结果的解析器</td>
<td>http远程调用的结果做解析，例如解析json字符串为java对象</td>
</tr>
<tr>
<td>feign.codec.Encoder</td>
<td>请求参数编码</td>
<td>将请求参数编码，便于通过http请求发送</td>
</tr>
<tr>
<td>feign. Contract</td>
<td>支持的注解格式</td>
<td>默认是SpringMVC的注解</td>
</tr>
<tr>
<td>feign. Retryer</td>
<td>失败重试机制</td>
<td>请求失败的重试机制，默认是没有，不过会使用Ribbon的重试</td>
</tr>
</tbody>
</table>
<p>一般情况下，默认值就能满足我们使用，如果要自定义时，只需要创建自定义的@Bean覆盖默认Bean即可。</p>
<p><strong>下面以日志为例来演示如何自定义配置。</strong></p>
<h3 id="_4-1-配置文件方式" tabindex="-1"><a class="header-anchor" href="#_4-1-配置文件方式" aria-hidden="true">#</a> 4.1 配置文件方式</h3>
<p>基于配置文件修改feign的日志级别可以针对单个服务：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">feign</span><span class="token punctuation">:</span>  
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">config</span><span class="token punctuation">:</span> 
      <span class="token key atrule">userservice</span><span class="token punctuation">:</span> <span class="token comment"># 针对某个微服务的配置</span>
        <span class="token key atrule">loggerLevel</span><span class="token punctuation">:</span> FULL <span class="token comment">#  日志级别 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以针对所有服务：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">feign</span><span class="token punctuation">:</span>  
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">config</span><span class="token punctuation">:</span> 
      <span class="token key atrule">default</span><span class="token punctuation">:</span> <span class="token comment"># 这里用default就是全局配置，如果是写服务名称，则是针对某个微服务的配置</span>
        <span class="token key atrule">loggerLevel</span><span class="token punctuation">:</span> FULL <span class="token comment">#  日志级别 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而日志的级别分为四种：</p>
<ul>
<li><strong>NONE</strong>：不记录任何日志信息，这是默认值。</li>
<li><strong>BASIC</strong>：仅记录请求的方法，URL以及响应状态码和执行时间</li>
<li>HEADERS：在BASIC的基础上，额外记录了请求和响应的头信息</li>
<li><strong>FULL</strong>：记录所有请求和响应的明细，包括头信息、请求体、元数据。</li>
</ul>
<h3 id="_4-2-java代码方式" tabindex="-1"><a class="header-anchor" href="#_4-2-java代码方式" aria-hidden="true">#</a> 4.2 Java代码方式</h3>
<p>也可以基于Java代码来修改日志级别，先声明一个类，然后声明一个Logger.Level的对象：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DefaultFeignConfiguration</span>  <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Logger<span class="token punctuation">.</span>Level</span> <span class="token function">feignLogLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Logger<span class="token punctuation">.</span>Level</span><span class="token punctuation">.</span><span class="token constant">BASIC</span><span class="token punctuation">;</span> <span class="token comment">// 日志级别为BASIC</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要<strong>全局生效</strong>，将其放到启动类的@EnableFeignClients这个注解中：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@EnableFeignClients</span><span class="token punctuation">(</span>defaultConfiguration <span class="token operator">=</span> <span class="token class-name">DefaultFeignConfiguration</span> <span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果是<strong>局部生效</strong>，则把它放到对应的@FeignClient这个注解中：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"userservice"</span><span class="token punctuation">,</span> configuration <span class="token operator">=</span> <span class="token class-name">DefaultFeignConfiguration</span> <span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-feign使用优化" tabindex="-1"><a class="header-anchor" href="#_5-feign使用优化" aria-hidden="true">#</a> 5. Feign使用优化</h2>
<p>Feign底层发起http请求，依赖于其它的框架。其底层客户端实现包括：</p>
<ol>
<li><strong>URLConnection</strong>：默认实现，不支持连接池</li>
<li><strong>Apache HttpClient</strong> ：支持连接池</li>
<li><strong>OKHttp</strong>：支持连接池</li>
</ol>
<p>因此提高Feign的性能主要手段就是使用<strong>连接池</strong>代替默认的URLConnection。</p>
<p><strong>这里我们用Apache的HttpClient来演示。</strong></p>
<h3 id="_5-1-引入依赖" tabindex="-1"><a class="header-anchor" href="#_5-1-引入依赖" aria-hidden="true">#</a> 5.1 引入依赖</h3>
<p>在order-service的pom文件中引入Apache的HttpClient依赖：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--httpClient的依赖 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>io.github.openfeign<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>feign-httpclient<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-配置连接池" tabindex="-1"><a class="header-anchor" href="#_5-2-配置连接池" aria-hidden="true">#</a> 5.2 配置连接池</h3>
<p>在order-service的application.yml中添加配置：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">feign</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">config</span><span class="token punctuation">:</span>
      <span class="token key atrule">default</span><span class="token punctuation">:</span> <span class="token comment"># default全局的配置</span>
        <span class="token key atrule">loggerLevel</span><span class="token punctuation">:</span> BASIC <span class="token comment"># 日志级别，BASIC就是基本的请求和响应信息</span>
  <span class="token key atrule">httpclient</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 开启feign对HttpClient的支持</span>
    <span class="token key atrule">max-connections</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># 最大的连接数</span>
    <span class="token key atrule">max-connections-per-route</span><span class="token punctuation">:</span> <span class="token number">50</span> <span class="token comment"># 每个路径的最大连接数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，在<code v-pre>FeignClientFactoryBean</code>中的<code v-pre>loadBalance</code>方法中打断点：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306171510856.png" alt="image-20210714185925910" tabindex="0" loading="lazy"><figcaption>image-20210714185925910</figcaption></figure>
<p>Debug方式启动order-service服务，可以看到这里的client，底层就是<code v-pre>Apache HttpClient</code>：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306171510864.png" alt="image-20210714190041542" tabindex="0" loading="lazy"><figcaption>image-20210714190041542</figcaption></figure>
<p>总结，<strong>Feign</strong>的优化：</p>
<ol>
<li>日志级别尽量用basic</li>
<li>使用<code v-pre>HttpClient</code>或<code v-pre>OKHttp</code>代替<code v-pre>URLConnection</code>
<ol>
<li>引入<code v-pre>feign-httpClient</code>依赖</li>
<li>配置文件开启<code v-pre>httpClient</code>功能，设置连接池参数</li>
</ol>
</li>
</ol>
<h2 id="_6-feign最佳实践" tabindex="-1"><a class="header-anchor" href="#_6-feign最佳实践" aria-hidden="true">#</a> 6. Feign最佳实践</h2>
<p>所谓 <strong>最佳时间</strong>，就是使用过程中总结的经验，最好的一种使用方式。</p>
<p>仔细的同学可以观察可以发现，<code v-pre>Feign</code>的客户端与服务提供者的<strong>controller</strong>代码非常相似：</p>
<p><strong>feign客户端</strong>：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306171513197.png" alt="image-20230617151323086" tabindex="0" loading="lazy"><figcaption>image-20230617151323086</figcaption></figure>
<p><strong>UserController：</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306171514141.png" alt="image-20230617151431032" tabindex="0" loading="lazy"><figcaption>image-20230617151431032</figcaption></figure>
<p>有没有一种办法简化这种重复的代码编写呢 ？大家想到的结局方式是什么呢 ？</p>
<p><code v-pre>这里提供两种解决方式，看看你有没有想到呢</code></p>
<h3 id="_6-1-继承方式" tabindex="-1"><a class="header-anchor" href="#_6-1-继承方式" aria-hidden="true">#</a> 6.1 继承方式</h3>
<p>一样的代码可以通过继承来共享：</p>
<ol>
<li>定义一个API接口，利用定义方法，并基于SpringMVC注解做声明。</li>
<li>Feign客户端和Controller都集成改接口</li>
</ol>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306171516629.png" alt="image-20210714190640857" tabindex="0" loading="lazy"><figcaption>image-20210714190640857</figcaption></figure>
<p><strong>优点：</strong></p>
<ul>
<li>简单</li>
<li>实现了代码共享</li>
</ul>
<p><strong>缺点：</strong></p>
<ul>
<li>
<p>服务提供方、服务消费方紧耦合</p>
</li>
<li>
<p>参数列表中的注解映射并不会继承，因此Controller中必须再次声明方法、参数列表、注解</p>
</li>
</ul>
<h3 id="_6-2-抽取方式" tabindex="-1"><a class="header-anchor" href="#_6-2-抽取方式" aria-hidden="true">#</a> 6.2 抽取方式</h3>
<p>将<code v-pre>Feign</code>的<code v-pre>Client</code>抽取为独立模块，并且把接口有关的POJO、默认的Feign配置都放到这个模块中，提供给所有消费者使用。</p>
<p>例如，将<code v-pre>UserClient、User、Feign</code>的默认配置都抽取到一个feign-api包中，所有微服务引用该依赖包，即可直接使用。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202306171516303.png" alt="image-20210714214041796" tabindex="0" loading="lazy"><figcaption>image-20210714214041796</figcaption></figure>
<p>今天就到这里了，下一节我们继续学习分享SpringCloud的相关组件----<code v-pre>GateWay网关组件</code>，欢迎大家评论区留言讨论！</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312031906036.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


