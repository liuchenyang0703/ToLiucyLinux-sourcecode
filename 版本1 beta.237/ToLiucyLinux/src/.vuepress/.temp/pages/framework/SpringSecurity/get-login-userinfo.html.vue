<template><div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312270933695.png" alt="image-20231030235443828" tabindex="0" loading="lazy"><figcaption>image-20231030235443828</figcaption></figure>
<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2>
<p>大家好，我是Leo哥🫣🫣🫣，接到<a href="https://gaoziman.blog.csdn.net/article/details/135237133" target="_blank" rel="noopener noreferrer">上一节<ExternalLinkIcon/></a>，我们学习通过SpringSecurity退出登录之后的JSON处理。这篇文章我们主要来介绍一下登录成功之后如何获取用户信息。好了，话不多说让我们开始吧😎😎😎。</p>
<h2 id="_2-概述" tabindex="-1"><a class="header-anchor" href="#_2-概述" aria-hidden="true">#</a> 2.概述</h2>
<p>在<a href="https://gaoziman.blog.csdn.net/article/details/135237133" target="_blank" rel="noopener noreferrer">这篇文章中<ExternalLinkIcon/></a>我们添加了一个主页面，用超链接来进行退出登录，而不是频繁在地址栏输入URL。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312270957478.png" alt="image-20231227095749441" tabindex="0" loading="lazy"><figcaption>image-20231227095749441</figcaption></figure>
<h2 id="_3-获取用户认证信息" tabindex="-1"><a class="header-anchor" href="#_3-获取用户认证信息" aria-hidden="true">#</a> 3.获取用户认证信息</h2>
<p>我们登录之后，我们用户的信息，存储在哪里呢，我们又该如何进行获取呢，今天我们接着往下聊。</p>
<p>用户登录成功后，用户的信息存储在 <code v-pre>SecurityContext</code> 中。<code v-pre>SecurityContext</code> 是由 <code v-pre>SecurityContextHolder</code> 管理的，它是 Spring Security 的核心组件之一。</p>
<p><strong>存储用户信息的过程</strong></p>
<ol>
<li><strong>用户认证</strong>：当用户通过表单登录或其他认证方式成功登录后，SpringSecurity 会创建一个 **Authentication ** 对象，该对象包含用户的认证信息。</li>
<li><strong>存储认证信息</strong>：<code v-pre>Authentication</code> 对象被存储在 <code v-pre>SecurityContext</code> 中。</li>
<li><strong>上下文管理</strong>：<code v-pre>SecurityContext</code> 由 <code v-pre>SecurityContextHolder</code> 管理，通常与当前线程绑定，以确保在请求处理过程中可以随时访问用户信息。</li>
</ol>
<p>我们通过官网的一张图更清晰的来了解SecurityContextHolder。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/2024/202406211408759.png" alt="image-20240621140850737" tabindex="0" loading="lazy"><figcaption>image-20240621140850737</figcaption></figure>
<p>此时我们就可以通过 <code v-pre>SecurityContextHolder</code> 来获取用户的认证信息了。话不多说，我们直接上代码。</p>
<p>我们这里在我们之前的hello接口添加必要代码即可。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/2024/202406211404169.png" alt="image-20240621140440102" tabindex="0" loading="lazy"><figcaption>image-20240621140440102</figcaption></figure>
<p>此时，登录成功之后访问hello接口，即可在idea控制台中看到我们的信息。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/2024/202406211407806.png" alt="image-20240621140711781" tabindex="0" loading="lazy"><figcaption>image-20240621140711781</figcaption></figure>
<h2 id="_4-探知原理" tabindex="-1"><a class="header-anchor" href="#_4-探知原理" aria-hidden="true">#</a> 4. 探知原理</h2>
<p>上面我们知道了通过 <strong>SecurityContextHolder</strong> 这个类来获取用户认证信息，那么内部究竟是如何处理的呢。我们打开源码一探究竟。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/2024/202406211415147.png" alt="image-20240621141524116" tabindex="0" loading="lazy"><figcaption>image-20240621141524116</figcaption></figure>
<p><code v-pre>SecurityContextHolder</code> 通过 <code v-pre>initializeStrategy</code> 方法初始化安全上下文的存储策略，根据配置选择适当的策略类来管理安全上下文。在默认情</p>
<p>况下，使用 <code v-pre>ThreadLocal</code> 存储安全上下文，可以根据需要切换到可继承的线程本地变量策略。</p>
<p>那么，用户的认证数据是在什么时候存储的呢？</p>
<p>表单认证时，在 AbstractAuthenticationProcessingFilter 过滤器的 doFilter() 方法中，调用UsernamePasswordAuthenticationFilter 过滤器的 <strong>attemptAuthentication()</strong> 方法进行用户认证，认证通过则返回认证后的 Authentication 对象，否则返回 null 。认证成功后，会再调用自已的successfulAuthentication() 方法存储当前的认证信息。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/2024/202406211417865.png" alt="image-20240621141759834" tabindex="0" loading="lazy"><figcaption>image-20240621141759834</figcaption></figure>
<p>在 AbstractAuthenticationProcessingFilter 过滤器的 successfulAuthentication() 方法中，把验证通过的用户认证信息先存入 SecurityContext ，然后再调用ThreadLocalSecurityContextHolderStrategy 类中的 setContext() 方法，把 SecurityContext 存入ThreadLocal 中。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/2024/202406211418271.png" alt="image-20240621141842244" tabindex="0" loading="lazy"><figcaption>image-20240621141842244</figcaption></figure>
<p>调用 ThreadLocalSecurityContextHolderStrategy 类中的 <strong>setContext()</strong> 方法，把 SecurityContext 存入 ThreadLocal 中。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/2024/202406211419797.png" alt="image-20240621141912757" tabindex="0" loading="lazy"><figcaption>image-20240621141912757</figcaption></figure>
<h2 id="_5-网页拓展" tabindex="-1"><a class="header-anchor" href="#_5-网页拓展" aria-hidden="true">#</a> 5. 网页拓展</h2>
<p>除了在我们Java后端通过 <strong>SecurityContextHolder</strong> 获取用户的登录信息之外，我们还可以通过在前端网页上获取我们的登录信息，下面跟着一起来操作吧。</p>
<h3 id="_5-1-引入依赖" tabindex="-1"><a class="header-anchor" href="#_5-1-引入依赖" aria-hidden="true">#</a> 5.1 引入依赖</h3>
<p>在pom文件中引入以下依赖。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span> 
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.thymeleaf.extras<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span> 
   	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>thymeleaf-extras-springsecurity6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-引入命名空间" tabindex="-1"><a class="header-anchor" href="#_5-2-引入命名空间" aria-hidden="true">#</a> 5.2 引入命名空间</h3>
<p>在login.html中引入指定的命名空间。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>th</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.thymeleaf.org<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>sec</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.thymeleaf.org/extras/spring-security<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-3-在网页中使用" tabindex="-1"><a class="header-anchor" href="#_5-3-在网页中使用" aria-hidden="true">#</a> 5.3 在网页中使用</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--获取登录用户信息--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name"><span class="token namespace">sec:</span>authentication</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>principal.username<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name"><span class="token namespace">sec:</span>authentication</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>principal.authorities<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name"><span class="token namespace">sec:</span>authentication</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>principal.accountNonExpired<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name"><span class="token namespace">sec:</span>authentication</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>principal.accountNonLocked<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name"><span class="token namespace">sec:</span>authentication</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>principal.credentialsNonExpired<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-小结" tabindex="-1"><a class="header-anchor" href="#_6-小结" aria-hidden="true">#</a> 6. 小结</h2>
<ul>
<li>SecurityContextHolder：提供对 SecurityContext 安全上下文的访问，默认情况下，它使用 ThreadLocal 对象来存储安全上下文，它是线程安全的</li>
<li>SecurityContext：安全上下文，内部包含了当前认证用户的详细信息。</li>
<li>Authentication：存储当前用户的详细信息（Principal 用户信息、Credentials 密码信息、Authorities 权限信息）。</li>
</ul>
<p><strong>SecurityContextHolder有三种工作策略模式：</strong></p>
<ul>
<li>MODE_THREADLOCAL(默认)：本地线程模式，将认证用户信息和当前线程绑定存在ThreadLocal 中，在同一个线程内可以获取到相同的安全上下文</li>
<li>MODE_INHERITABLETHREADLOCAL：可继承的本地线程模式，将安全上下文复制给当前线程的子线程，就可以实现多个父子线程可以共享安全上下文</li>
<li>MODE_GLOBAL：全局模式，所有线程都能看到相同的安全上下文实例</li>
</ul>
<h2 id="_7-总结" tabindex="-1"><a class="header-anchor" href="#_7-总结" aria-hidden="true">#</a> 7. 总结</h2>
<p>以上便是本文的全部内容，本人才疏学浅，文章有什么错误的地方，欢迎大佬们批评指正！我是<strong>Leo</strong>，一个在互联网行业的小白，立志成为更好的自己。</p>
<p>如果你想了解更多关于<strong>Leo</strong>，可以关注公众号-程序员Leo，后面文章会首先同步至公众号。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312270933747.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


