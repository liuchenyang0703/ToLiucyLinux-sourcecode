<template><div><h1 id="springsecurity6-自定义登录页面" tabindex="-1"><a class="header-anchor" href="#springsecurity6-自定义登录页面" aria-hidden="true">#</a> SpringSecurity6 | 自定义登录页面</h1>
<p>学习参考 ：</p>
<ul>
<li>讲师：<strong>孙帅老师</strong></li>
<li>课程：<a href="https://www.bilibili.com/video/BV185411477k?p=188&amp;spm_id_from=pageDriver&amp;vd_source=cea816a08805c218ac4390ae9b61ae31" target="_blank" rel="noopener noreferrer">孙哥说SpringSecurity6<ExternalLinkIcon/></a></li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312092052411.png" alt="image-20231030235443828" tabindex="0" loading="lazy"><figcaption>image-20231030235443828</figcaption></figure>
<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2>
<p>大家好，我是Leo哥🫣🫣🫣，接到<a href="https://gaoziman.blog.csdn.net/article/details/134864581" target="_blank" rel="noopener noreferrer">上一节<ExternalLinkIcon/></a>，我们学习通过SpringSecurity的一些自定义配置来完成我们自定义认证规则的一些需求。这篇文章我们主要来介绍一下如何自定义我的登录页面。好了，话不多说让我们开始吧😎😎😎。</p>
<h2 id="_2-环境配置" tabindex="-1"><a class="header-anchor" href="#_2-环境配置" aria-hidden="true">#</a> 2.环境配置</h2>
<p>首先先说明一下我们的环境配置和技术要求，我们还是会创建一个新的SpringBoot工程，对其进行一些自定义配置。</p>
<p>因为我们要自定义我们的登录页面，所以我们这里会用到一种后端模版引擎--&gt;<strong>Thyemleaf</strong>。如果对Thyemleaf还不了解的同学，可以参考我<a href="https://gaoziman.blog.csdn.net/article/details/132186217" target="_blank" rel="noopener noreferrer">这篇文章<ExternalLinkIcon/></a>。</p>
<h2 id="_3-自定义登录页面" tabindex="-1"><a class="header-anchor" href="#_3-自定义登录页面" aria-hidden="true">#</a> 3.自定义登录页面</h2>
<h3 id="_3-1-导入依赖" tabindex="-1"><a class="header-anchor" href="#_3-1-导入依赖" aria-hidden="true">#</a> 3.1 导入依赖</h3>
<p>在我们的pom.xml文件中导入ThymeLeaf依赖。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-thymeleaf<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-创建login-html" tabindex="-1"><a class="header-anchor" href="#_3-2-创建login-html" aria-hidden="true">#</a> 3.2 创建login.html</h3>
<p>并制定xml：th的映射，这里是为了可以在HTML中使用ThymeLeaf语法。</p>
<blockquote>
<html lang="en" xml:th="http://www.thymeleaf.org">
</blockquote>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xml:</span>th</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.thymeleaf.org<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Login Page<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">body</span> <span class="token punctuation">{</span>
      <span class="token property">font-family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #f4f4f4<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.login-container</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
      <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
      <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 10px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.form-group</span> <span class="token punctuation">{</span>
      <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.form-group label</span> <span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
      <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.form-group input</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ddd<span class="token punctuation">;</span>
      <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
      <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span> <span class="token comment">/* ensures padding doesn't affect width */</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.form-group input[type="submit"]</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #5c79b8<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
      <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.form-group input[type="submit"]:hover</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #4cae97<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>login-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>登录页面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-group<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>用户名:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-group<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>密码:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>passwd<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-group<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Log In<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单在浏览器，看看我们简易的登录界面吧。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312092116742.png" alt="image-20231209211629716" tabindex="0" loading="lazy"><figcaption>image-20231209211629716</figcaption></figure>
<h3 id="_3-3-配置" tabindex="-1"><a class="header-anchor" href="#_3-3-配置" aria-hidden="true">#</a> 3.3 配置</h3>
<p>那我们如何将他配置为我们SpringSecurity的登录页面呢，通过以下配置。</p>
<p>首先我们在后端编写一个controller请求，也就是返回我们自定义的登录页面。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312092120426.png" alt="image-20231209212008381" tabindex="0" loading="lazy"><figcaption>image-20231209212008381</figcaption></figure>
<p>注意：这里一定不要写成@RestController了，因为我们不需要向前端返回JSON数据哈。</p>
<p>然后我们在SpringSecurity的配置类进行配置我们的自定义登录页面。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312092127037.png" alt="image-20231209212732990" tabindex="0" loading="lazy"><figcaption>image-20231209212732990</figcaption></figure>
<p>然后启动项目，访问hello接口。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312092130467.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>但是我们发现一个问题，此时我们输入我们的用户名和密码却不能登录，而是会在浏览器进行刷新，我们接着往下看。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312092130467.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>那么是怎么回事呢，此时我们需要回顾一下我们之前学习的知识，也就是我能当时查看表单登录的整合流程。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312092133160.png" alt="image-20231205201036604" tabindex="0" loading="lazy"><figcaption>image-20231205201036604</figcaption></figure>
<p>他会调用 HttpSecurity 类的 <strong>formLogin()</strong> 方法，在该方法中创建 FormLoginConfigurer 类的实例，并指定处理认证的 Filter 进行认证：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312092133143.png" alt="image-20231205202326832" tabindex="0" loading="lazy"><figcaption>image-20231205202326832</figcaption></figure>
<p>然后又去new了一个<strong>FormLoginConfigurer()</strong>，然后去调用父类的构造方法区new这个类</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312092133140.png" alt="image-20231205202413310" tabindex="0" loading="lazy"><figcaption>image-20231205202413310</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312092134194.png" alt="image-20231209213412137" tabindex="0" loading="lazy"><figcaption>image-20231209213412137</figcaption></figure>
<p>我们在UsernamePasswordAuthenticationFilter类中中的**attemptAuthentication()**方法中可以看到他的一些要求。</p>
<p>首先必须是POST请求，然后用户名的属性必须是username，密码的属性是password。</p>
<p>按照上面的解读，我们来按照规则改善一下我们的登录页面。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312092141293.png" alt="image-20231209214100245" tabindex="0" loading="lazy"><figcaption>image-20231209214100245</figcaption></figure>
<p>还需要对我们的配置类做一些改变，这里的登录的url要和我们前端请求的保持一致。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312092141745.png" alt="image-20231209214135705" tabindex="0" loading="lazy"><figcaption>image-20231209214135705</figcaption></figure>
<p>然后启动项目，再次访问。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312092146622.gif" alt="Leo-2023-12-09-21-45-16" tabindex="0" loading="lazy"><figcaption>Leo-2023-12-09-21-45-16</figcaption></figure>
<p>当然还有另外一种方式实现是通过Java配置类的方式，而不是更改name属性值。我们这里简单介绍一下。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312092148932.png" alt="image-20231209214829879" tabindex="0" loading="lazy"><figcaption>image-20231209214829879</figcaption></figure>
<h2 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结" aria-hidden="true">#</a> 4.总结</h2>
<p>以上便是本文的全部内容，本人才疏学浅，文章有什么错误的地方，欢迎大佬们批评指正！我是<strong>Leo</strong>，一个在互联网行业的小白，立志成为更好的自己。</p>
<p>如果你想了解更多关于<strong>Leo</strong>，可以关注公众号-程序员Leo，后面文章会首先同步至公众号。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312092058643.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


