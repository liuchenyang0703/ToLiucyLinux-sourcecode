<template><div><h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2>
<p>前面文章我们学习了关于Spring的IOC与AOP相关知识点，在此之前，我们主要学习Spring的一些核心概念，<strong>IOC</strong>和<strong>AOP</strong>等等。我们之前学习了简单了解了AOP如何借助动态字节码技术来构建动态代理类。实现动态代理的方式不止一种。本次系列文章主要介绍两种：<strong>JDK动态代理</strong>和<strong>CGlib动态代理</strong>，主要主要介绍CGlib动态代理。好了，话不多说，让我们开始吧😎😎😎。</p>
<h2 id="_2-jdk动态代理有什么缺陷" tabindex="-1"><a class="header-anchor" href="#_2-jdk动态代理有什么缺陷" aria-hidden="true">#</a> 2.JDK动态代理有什么缺陷</h2>
<p>在上一章关于JDK动态代理的讨论中，我们确实注意到了其一个明显的限制：<strong>原始类和代理类都必须实现同一个接口，代理类方法添加额外功能并调用原始类方法</strong>。这种方式就像房屋中介：他们为租客提供服务，而租客可能并不知道背后的真正房东。但这种模式确实存在局限性，特别是当我们的系统设计中没有采用接口，或者原始类并没有实现任何接口而是直接写具体方法实现时。</p>
<p>那么，面对这种情况，我们怎么办？我们如何实现动态代理而不受到<strong>必须实现接口</strong>这一限制的约束？为了解决这个问题，Cglib(<strong>Code Generation Library</strong>) 应运而生。Cglib为我们提供了一种不基于接口的代理实现方式，它可以直接代理类。相对于JDK的代理方式，Cglib是基于继承父类(原始类)的，它会动态生成一个子类来覆盖原始类的方法，从而实现代理功能。这样既可以保证二者方法一致，这样既可以保证在代理类中提供新的实现，同时又调用了原始方法</p>
<p>这种方法提供了更大的灵活性，特别是对于那些没有接口的类。在接下来的章节中，我们将深入探讨Cglib，了解它是如何提供这种强大功能的，以及它与JDK动态代理的区别和优缺点</p>
<h2 id="_3-什么是cglib动态代理" tabindex="-1"><a class="header-anchor" href="#_3-什么是cglib动态代理" aria-hidden="true">#</a> 3.什么是CGlib动态代理</h2>
<p>CGLib**(Code Generation Library)**是一个强大的、高性能的代码生成库，它是基于Java字节码操作的开源框架。CGLib动态代理是CGLib框架提供的一种动态代理技术。与Java标准库中的动态代理（基于接口）不同，CGLib动态代理可以代理普通的类，而不仅限于接口。</p>
<p>使用CGLib动态代理，我们可以在运行时创建一个目标类的子类，并在子类中拦截并增强目标类的方法调用。这种方式不需要目标类实现任何接口，而是通过继承来实现代理。</p>
<p>CGLib动态代理的原理是通过生成目标类的子类来实现代理。在子类中，代理类重写了目标类的方法，并在方法中添加了额外的逻辑，例如前置处理、后置处理等。当我们调用代理对象的方法时，实际上是调用了子类中重写的方法，从而实现了对目标类方法的拦截和增强。</p>
<p>相比于基于接口的动态代理，CGLib动态代理的性能更高，但也因为需要生成子类，所以在代理类的创建过程中会消耗一定的时间和内存。因此，如果目标类已经实现了接口，且性能要求不高，那么使用基于接口的动态代理可能更合适；而如果目标类没有实现接口，或者对性能有较高要求，那么可以选择CGLib动态代理。</p>
<p><strong>需要注意的是，CGLib动态代理只能代理非final的类，因为无法生成final类的子类。另外，由于CGLib动态代理是直接操作字节码的，所以在一些特殊的环境中可能会受到限制。</strong></p>
<h2 id="_4-spring5整合cglib动态代理开发步骤" tabindex="-1"><a class="header-anchor" href="#_4-spring5整合cglib动态代理开发步骤" aria-hidden="true">#</a> 4.Spring5整合CGlib动态代理开发步骤</h2>
<p>Spring框架提供了丰富的AOP功能，可以帮助我们更好地管理代码。在Spring中，我们可以使用CGlib动态代理来实现AOP功能。下面是一个简单的示例，演示如何使用Spring5整合CGlib动态代理。</p>
<ol>
<li>原始类的设计：首先，我们要设计并定义一个原始类。特别要注意的是，这里的原始类无需实现任何接口。这为那些基于纯类设计而非接口设计的应用提供了方便。</li>
<li>定义增强功能：就像在JDK动态代理中一样，您需要确定您希望添加到原始类中的额外或增强功能。</li>
<li>生成动态代理对象：使用Cglib的Enhancer对象可以为上一步中定义的原始类生成动态代理对象。为了实现此过程，确保项目中包含了Cglib的必要依赖。幸运的是这些依赖已经包含在spring-context库中，从而简化了集成过程.</li>
</ol>
<h3 id="_4-1-创建目标对象" tabindex="-1"><a class="header-anchor" href="#_4-1-创建目标对象" aria-hidden="true">#</a> 4.1 创建目标对象</h3>
<p>首先，我们需要创建一个目标对象，这个目标对象将被代理。在本例中，我们创建一个UserServiceImpl类作为目标对象，它包含一个addUser方法。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addUser</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"添加用户："</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-创建切面类" tabindex="-1"><a class="header-anchor" href="#_4-2-创建切面类" aria-hidden="true">#</a> 4.2 创建切面类</h3>
<p>接下来，我们需要创建一个切面类，这个切面类将在目标对象执行前或执行后执行一些操作。在本例中，我们创建一个LogAspect类作为切面类，它包含一个before方法，在目标对象执行前打印日志。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LogAspect</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">before</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"开始执行方法..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-配置spring-aop" tabindex="-1"><a class="header-anchor" href="#_4-3-配置spring-aop" aria-hidden="true">#</a> 4.3 配置Spring AOP</h3>
<h4 id="_1-配置文件方式" tabindex="-1"><a class="header-anchor" href="#_1-配置文件方式" aria-hidden="true">#</a> 1.配置文件方式</h4>
<p>接下来，我们需要配置Spring AOP，以便在运行时生成代理对象。在本例中，我们使用XML配置文件来配置Spring AOP。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token operator">&lt;</span>bean id<span class="token operator">=</span><span class="token string">"userService"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"org.javatop.UserService"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>property name<span class="token operator">=</span><span class="token string">"userServiceImpl"</span> ref<span class="token operator">=</span><span class="token string">"userServiceImpl"</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>bean<span class="token operator">></span>

<span class="token operator">&lt;</span>bean id<span class="token operator">=</span><span class="token string">"logAspect"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"org.javatop.LogAspect"</span><span class="token operator">/</span><span class="token operator">></span>

<span class="token operator">&lt;</span>aop<span class="token operator">:</span>config<span class="token operator">></span>
    <span class="token operator">&lt;</span>aop<span class="token operator">:</span>aspect ref<span class="token operator">=</span><span class="token string">"logAspect"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>aop<span class="token operator">:</span>before method<span class="token operator">=</span><span class="token string">"before"</span> pointcut<span class="token operator">=</span><span class="token string">"execution(* org.javatop.UserServiceImpl.addUser(..))"</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>aop<span class="token operator">:</span>aspect<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>aop<span class="token operator">:</span>config<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的配置中，我们首先创建了一个UserService类，并将其注入到UserServiceImpl类中。然后，我们创建了一个LogAspect类，并将其配置为切面类。最后，我们使用aop:before标签来定义一个切入点，指定在执行UserServiceImpl类的addUser方法之前执行LogAspect类的before方法。‘</p>
<h4 id="_2-原始方式" tabindex="-1"><a class="header-anchor" href="#_2-原始方式" aria-hidden="true">#</a> 2.原始方式</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestCglibProxy</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> log <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">TestCglibProxy</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建原始对象</span>
        <span class="token class-name">UserService</span> userService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 创建Cglib提供的Enhancer对象，用于设置好创建代理对象</span>
        <span class="token class-name">Enhancer</span> enhancer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Enhancer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 设置类加载器</span>
        enhancer<span class="token punctuation">.</span><span class="token function">setClassLoader</span><span class="token punctuation">(</span><span class="token class-name">TestCglibProxy</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 设置被代理类(原始父类)</span>
        enhancer<span class="token punctuation">.</span><span class="token function">setSuperclass</span><span class="token punctuation">(</span><span class="token class-name">UserService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 设置方法拦截器</span>
        <span class="token class-name">MethodInterceptor</span> methodInterceptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MethodInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 等同于InvocationHandler中的invoke方法</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">intercept</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> objects<span class="token punctuation">,</span> <span class="token class-name">MethodProxy</span> methodProxy<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">"log before"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token class-name">Object</span> ret <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>userService<span class="token punctuation">,</span> objects<span class="token punctuation">)</span><span class="token punctuation">;</span>

                log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">"log after"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        enhancer<span class="token punctuation">.</span><span class="token function">setCallback</span><span class="token punctuation">(</span>methodInterceptor<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 创建代理对象</span>
        <span class="token class-name">UserService</span> userServiceProxy <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">UserService</span><span class="token punctuation">)</span> enhancer<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userServiceProxy<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token string">"Leo"</span><span class="token punctuation">,</span> <span class="token string">"123456"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-测试" tabindex="-1"><a class="header-anchor" href="#_4-4-测试" aria-hidden="true">#</a> 4.4 测试</h3>
<p>最后，我们可以编写一个测试类来测试我们的代码。在本例中，我们创建一个Main类，通过Spring容器获取UserService对象，并调用其addUser方法。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ApplicationContext</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassPathXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">"applicationContext.xml"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">UserService</span> userService <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">UserService</span><span class="token punctuation">)</span> context<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">"userService"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userService<span class="token punctuation">.</span><span class="token function">addUser</span><span class="token punctuation">(</span><span class="token string">"Leo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们运行Test类时，我们可以看到在执行addUser方法之前打印了一条日志。</p>
<h2 id="_5-最后总结" tabindex="-1"><a class="header-anchor" href="#_5-最后总结" aria-hidden="true">#</a> 5.最后总结</h2>
<p>JDK动态代理以接口为核心，通过Proxy.newInstance()方法为我们提供了创建代理对象的能力，要求原始类必须实现某个接口。而Cglib动态代理则更为灵活，不受接口的限制。通过Enhancer.create()，它直接生成原始类的子类，并在其中嵌入额外功能，从而实现代理。当然我们也可以通过设置让Spring在创建的时候只使用Cglib而不使用JDK</p>
<p>Spring AOP聪明地整合了这两种机制，为开发者提供了无缝的体验。它默认采用JDK动态代理，但当遇到没有实现接口的原始类时，会智能切换到Cglib动态代理。</p>
<p>本文介绍了如何使用Spring5整合CGlib动态代理实现AOP功能，并给出了具体的案例。通过使用动态代理，我们可以在运行时生成代理对象，从而实现对目标对象的增强。在实际开发中，动态代理是一个非常重要的概念，可以帮助我们更好地管理代码，提高代码的可维护性和可扩展性。</p>
<h2 id="_6-参考文献" tabindex="-1"><a class="header-anchor" href="#_6-参考文献" aria-hidden="true">#</a> 6.参考文献</h2>
<ul>
<li><a href="https://www.itheima.com/news/20210525/165219.html" target="_blank" rel="noopener noreferrer">https://www.itheima.com/news/20210525/165219.html<ExternalLinkIcon/></a></li>
<li><a href="https://blog.csdn.net/luoyoub/article/details/80101376" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/luoyoub/article/details/80101376<ExternalLinkIcon/></a></li>
<li><a href="https://spring.io/" target="_blank" rel="noopener noreferrer">https://spring.io/<ExternalLinkIcon/></a></li>
<li><a href="https://blog.csdn.net/qq_43266723/article/details/133488696" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_43266723/article/details/133488696<ExternalLinkIcon/></a></li>
</ul>
<h2 id="_7-总结" tabindex="-1"><a class="header-anchor" href="#_7-总结" aria-hidden="true">#</a> 7.总结</h2>
<p>以上便是本文的全部内容，本人才疏学浅，文章有什么错误的地方，欢迎大佬们批评指正！我是<strong>Leo</strong>，一个在互联网行业的小白，立志成为更好的自己。</p>
<p>如果你想了解更多关于<strong>Leo</strong>，可以关注公众号-程序员Leo，后面文章会首先同步至公众号。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312031906036.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


