<template><div><h1 id="springboot常见注解" tabindex="-1"><a class="header-anchor" href="#springboot常见注解" aria-hidden="true">#</a> SpringBoot常见注解</h1>
<h2 id="_1-springbootapplication" tabindex="-1"><a class="header-anchor" href="#_1-springbootapplication" aria-hidden="true">#</a> 1. @SpringBootApplication</h2>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311192311241.png" alt="image-20231119150635401" tabindex="0" loading="lazy"><figcaption>image-20231119150635401</figcaption></figure>
<p>定义在main方法入口类处，用于启动sping boot应用项目</p>
<h2 id="_2-springbootconfiguration" tabindex="-1"><a class="header-anchor" href="#_2-springbootconfiguration" aria-hidden="true">#</a> 2. @SpringBootConfiguration</h2>
<p><code v-pre>@SpringBootConfiguration</code>注解是<code v-pre>@Configuration</code>注解的派生注解，用于标识一个类是Spring Boot应用的配置类。它通常用于定义配置信息、Bean的定义以及其他与应用配置相关的内容。</p>
<ol>
<li><strong>派生自<code v-pre>@Configuration</code>：</strong> <code v-pre>@SpringBootConfiguration</code>注解是<code v-pre>@Configuration</code>注解的派生注解。这意味着使用<code v-pre>@SpringBootConfiguration</code>标注的类将被Spring容器识别为配置类，可以用来定义bean、配置属性等。</li>
<li><strong>用于组织配置类：</strong> 在一个典型的Spring Boot应用中，你可能有多个配置类来组织不同部分的配置。使用<code v-pre>@SpringBootConfiguration</code>可以更清晰地表示这是一个SpringBoot的配置类。</li>
<li><strong>自动扫描：</strong> Spring Boot应用通常使用<code v-pre>@SpringBootApplication</code>注解来启动应用程序，并该注解本身包含<code v-pre>@SpringBootConfiguration</code>。因此，<code v-pre>@SpringBootConfiguration</code>标注的配置类会被自动扫描并加载到Spring容器中。</li>
<li><strong>与<code v-pre>@Configuration</code>的区别：</strong> 尽管<code v-pre>@SpringBootConfiguration</code>与<code v-pre>@Configuration</code>功能相似，但<code v-pre>@SpringBootConfiguration</code>通常更适用于Spring Boot应用，而<code v-pre>@Configuration</code>则是通用的Spring注解。使用<code v-pre>@SpringBootConfiguration</code>可以更好地表达应用是一个Spring Boot应用。</li>
</ol>
<p>下面是一个简单的例子，演示了<code v-pre>@SpringBootConfiguration</code>的使用：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311192311248.png" alt="image-20231119150826025" tabindex="0" loading="lazy"><figcaption>image-20231119150826025</figcaption></figure>
<p>在这个例子中，<code v-pre>MyConfiguration</code>被标记为<code v-pre>@SpringBootConfiguration</code>，并定义了一个名为<code v-pre>myBean</code>的bean。这个配置类将被Spring Boot自动扫描，并将<code v-pre>MyBean</code>注入到应用上下文中。</p>
<h2 id="_3-enableautoconfiguration" tabindex="-1"><a class="header-anchor" href="#_3-enableautoconfiguration" aria-hidden="true">#</a> 3. @EnableAutoConfiguration</h2>
<p><code v-pre>@EnableAutoConfiguration</code>用于启用自动配置机制。在SpringBoot应用中，许多常见的配置任务都可以通过自动配置来完成，而不需要显式地进行手动配置。<code v-pre>@EnableAutoConfiguration</code>注解就是用来启用这种自动配置的。</p>
<p>让SpringBoot根据类路径中的jar包依赖当前项目进行自动配置</p>
<ol>
<li><strong>自动配置：</strong> Spring Boot的自动配置通过在类路径上查找特定的条件类来实现。<code v-pre>@EnableAutoConfiguration</code>注解告诉Spring Boot去自动配置项目的类路径上所需的beans。</li>
<li><strong>条件化配置：</strong> 自动配置是条件化的，它只会在满足特定条件时才会应用。条件类（<code v-pre>@Conditional</code>注解的类）定义了这些条件。这使得自动配置可以根据项目的实际情况进行动态调整。</li>
<li><strong>元注解：</strong> <code v-pre>@EnableAutoConfiguration</code>是一个元注解，它本身包含了<code v-pre>@AutoConfigurationPackage</code>、<code v-pre>@Import(AutoConfigurationImportSelector.class)</code>等注解，用于导入自动配置的相关信息。</li>
<li><strong>自动配置导入选择器：</strong> <code v-pre>AutoConfigurationImportSelector</code>是一个重要的类，它根据项目的依赖关系和条件类的情况，确定应该导入哪些自动配置类。这个类实现了<code v-pre>ImportSelector</code>接口。</li>
<li><strong>禁用默认自动配置：</strong> 如果你想禁用某个特定的自动配置类，你可以使用<code v-pre>exclude</code>属性，例如：<code v-pre>@EnableAutoConfiguration(exclude = {DataSourceAutoConfiguration.class})</code>，这里禁用了数据源的自动配置。</li>
</ol>
<p>在src/main/resources的META-INF/spring.factories</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311192311245.png" alt="image-20231119150139206" tabindex="0" loading="lazy"><figcaption>image-20231119150139206</figcaption></figure>
<p><strong>简单例子：</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311192311268.png" alt="image-20231119151158821" tabindex="0" loading="lazy"><figcaption>image-20231119151158821</figcaption></figure>
<p>上面这个例子中，<code v-pre>@EnableAutoConfiguration</code>启用了SpringBoot的自动配置机制，而<code v-pre>@ComponentScan</code>用于扫描<code v-pre>com.example</code>包下的组件。SpringBoot将根据自动配置规则，自动配置项目所需的beans。</p>
<p>3.4 @ComponentScan</p>
<p><code v-pre>@ComponentScan</code>告诉Spring在指定的包或类路径下查找并注册标有<code v-pre>@Component</code>及其派生注解（如<code v-pre>@Service</code>、<code v-pre>@Repository</code>、<code v-pre>@Controller</code>等）的类作为Spring容器的bean。</p>
<p><strong>基本用法：</strong> <code v-pre>@ComponentScan</code>通常与<code v-pre>@Configuration</code>注解一起使用，以便在配置类中指定要扫描的基础包。例如：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311192311222.png" alt="image-20231119151900537" tabindex="0" loading="lazy"><figcaption>image-20231119151900537</figcaption></figure>
<p>在上面的例子中，<code v-pre>@ComponentScan</code>指定了要扫描的基础包为<code v-pre>com.example</code>。</p>
<p><strong>指定多个包：</strong> 你可以通过<code v-pre>basePackages</code>属性指定多个包，也可以使用<code v-pre>basePackageClasses</code>属性指定一组类，Spring将扫描这些包或类路径下的组件。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311192311299.png" alt="image-20231119151934606" tabindex="0" loading="lazy"><figcaption>image-20231119151934606</figcaption></figure>
<p><strong>包含和排除过滤：</strong> 通过<code v-pre>includeFilters</code>和<code v-pre>excludeFilters</code>属性，你可以进一步定义包含或排除特定条件的组件。例如，只包含带有<code v-pre>@MyAnnotation</code>注解的类：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311192311650.png" alt="image-20231119152014735" tabindex="0" loading="lazy"><figcaption>image-20231119152014735</figcaption></figure>
<p><strong>扫描默认规则：</strong> 如果不指定<code v-pre>basePackages</code>，<code v-pre>@ComponentScan</code>将默认扫描被注解类所在的包及其子包。这通常足以满足大多数应用的需求。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311192311734.png" alt="image-20231119152038106" tabindex="0" loading="lazy"><figcaption>image-20231119152038106</figcaption></figure>
<p><strong>总结@ComponentScan的常用方式如下：</strong></p>
<ul>
<li>自定扫描路径下边带有@Controller，@Service，@Repository，@Component注解加入spring容器</li>
<li>通过includeFilters加入扫描路径下没有以上注解的类加入spring容器</li>
<li>通过excludeFilters过滤出不用加入spring容器的类</li>
<li>自定义增加了@Component注解的注解方式</li>
</ul>
<h2 id="_4-requestmapping简化注解" tabindex="-1"><a class="header-anchor" href="#_4-requestmapping简化注解" aria-hidden="true">#</a> 4. @RequestMapping简化注解</h2>
<ul>
<li>@GetMapping 等同于 @RequestMapping(method = RequestMethod.GET)</li>
<li>@PostMapping 等同于 @RequestMapping(method = RequestMethod.POST)</li>
<li>@PutMapping 等同于 @RequestMapping(method = RequestMethod.PUT)</li>
<li>@DeleteMapping 等同于 @RequestMapping(method = RequestMethod.DELETE)</li>
<li>@PatchMapping 等同于 @RequestMapping(method = RequestMethod.PATCH)</li>
</ul>
<h2 id="_5-profiles" tabindex="-1"><a class="header-anchor" href="#_5-profiles" aria-hidden="true">#</a> 5. @Profiles</h2>
<p><code v-pre>@Profiles</code>是Spring框架中用于定义和激活配置文件**(profiles)**的注解。Profiles允许在不同的环境中使用不同的配置，这在开发、测试和生产等不同阶段非常有用。</p>
<p>以下是关于<code v-pre>@Profiles</code>注解的详细解释：</p>
<p>1.<strong>定义Profiles：</strong> 使用<code v-pre>@Profiles</code>注解可以将一个bean或者一个配置类限制在特定的环境中。你可以为<code v-pre>@Profiles</code>注解指定一个或多个环境（profile）的名称。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Profile</span><span class="token punctuation">(</span><span class="token string">"development"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DevelopmentDataSource</span> <span class="token keyword">implements</span> <span class="token class-name">DataSource</span> <span class="token punctuation">{</span>
    <span class="token comment">// Development environment specific configuration</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，<code v-pre>DevelopmentDataSource</code> bean 只会在激活了名为&quot;development&quot;的profile时被注册到Spring容器中。</p>
<p>2.<strong>激活Profiles：</strong> 有几种方式可以激活特定的profiles：</p>
<p>在<code v-pre>application.properties</code>或<code v-pre>application.yml</code>文件中使用<code v-pre>spring.profiles.active</code>属性：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>spring.profiles.active=development
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在启动应用程序时通过命令行参数：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>java <span class="token operator">-</span>jar your<span class="token operator">-</span>application<span class="token punctuation">.</span>jar <span class="token operator">--</span>spring<span class="token punctuation">.</span>profiles<span class="token punctuation">.</span>active<span class="token operator">=</span>development
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在代码中通过<code v-pre>ConfigurableEnvironment</code>接口：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">ConfigurableEnvironment</span> environment <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
environment<span class="token punctuation">.</span><span class="token function">setActiveProfiles</span><span class="token punctuation">(</span><span class="token string">"development"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3.<strong>默认Profiles：</strong> 你可以使用<code v-pre>default</code>关键字定义默认的profile。如果没有激活任何profile，那么默认profile中的bean将被注册到容器中。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Profile</span><span class="token punctuation">(</span><span class="token string">"default"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DefaultDataSource</span> <span class="token keyword">implements</span> <span class="token class-name">DataSource</span> <span class="token punctuation">{</span>
    <span class="token comment">// Default configuration</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.<strong>组合Profiles：</strong> 通过使用逻辑运算符，你可以组合多个profiles。例如，要在同时激活&quot;development&quot;和&quot;test&quot;时注册一个bean：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Profile</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"development"</span><span class="token punctuation">,</span> <span class="token string">"test"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CombinedDataSource</span> <span class="token keyword">implements</span> <span class="token class-name">DataSource</span> <span class="token punctuation">{</span>
    <span class="token comment">// Combined configuration</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>@Profiles</code>注解允许你在不同的环境中使用不同的配置，提高了应用程序的灵活性和可移植性。</p>
<h2 id="_6-总结" tabindex="-1"><a class="header-anchor" href="#_6-总结" aria-hidden="true">#</a> 6.总结</h2>
<p>以上便是本文的全部内容，本人才疏学浅，文章有什么错误的地方，欢迎大佬们批评指正！我是<strong>Leo</strong>，一个在互联网行业的小白，立志成为更好的自己。</p>
<p>如果你想了解更多关于<strong>Leo</strong>，可以关注公众号-程序员Leo，后面文章会首先同步至公众号。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312031906036.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


