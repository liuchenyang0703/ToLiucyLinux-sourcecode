<template><div><h1 id="helloworld入门案例" tabindex="-1"><a class="header-anchor" href="#helloworld入门案例" aria-hidden="true">#</a> HelloWorld入门案例</h1>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310302354916.png" alt="image-20231030235443828" tabindex="0" loading="lazy"><figcaption>image-20231030235443828</figcaption></figure>
<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2>
<p>大家好，我是Leo哥🫣🫣🫣，第一节我们认识了SpringSecurity相关的概念以及相关的的历史，这一节我们就直接上手SpringSecurity，通过一个简单的案例的方式在我们的代码中集成SpringSecurity。好了，话不多说让我们开始动手写代码吧😎😎😎。</p>
<h2 id="_2-开发环境" tabindex="-1"><a class="header-anchor" href="#_2-开发环境" aria-hidden="true">#</a> 2.开发环境</h2>
<p><strong>注意：此次SpringSecurity的项目案例的环境如下</strong></p>
<ul>
<li>JDK17</li>
<li>IntelliJ IDEA 2023.22</li>
<li>SpringSecurity6.0</li>
<li>MySQL8.0+</li>
<li>Maven3.8+</li>
<li>MyBatis3.5+</li>
</ul>
<p>以上版本均为笔者的本地环境，大家可以进行横向参考，大致跟我保持一致即可。</p>
<h2 id="_3-环境搭建" tabindex="-1"><a class="header-anchor" href="#_3-环境搭建" aria-hidden="true">#</a> 3.环境搭建</h2>
<p>在搭建我们第一个SpringSecurity的HelloWorld的案例之前，我们首先复习一下在IDEA中搭建一个基础的SprignBoot环境，我们的案例也是基于SpringBoot基础环境之上进行开发以及代码的编写。</p>
<h3 id="_3-1使用maven创建工程" tabindex="-1"><a class="header-anchor" href="#_3-1使用maven创建工程" aria-hidden="true">#</a> 3.1使用Maven创建工程</h3>
<p>使用Maven父子工程进行创建项目。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311511360.png" alt="image-20231031151145267" tabindex="0" loading="lazy"><figcaption>image-20231031151145267</figcaption></figure>
<h3 id="_3-2添加依赖信息" tabindex="-1"><a class="header-anchor" href="#_3-2添加依赖信息" aria-hidden="true">#</a> 3.2添加依赖信息</h3>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">"</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">></span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.javatop<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>Leo-springsecurity6-start<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.0.12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>relativePath</span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.source</span><span class="token punctuation">></span></span>17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.source</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.target</span><span class="token punctuation">></span></span>17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.target</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project.build.sourceEncoding</span><span class="token punctuation">></span></span>UTF-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project.build.sourceEncoding</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3配置yaml配置文件" tabindex="-1"><a class="header-anchor" href="#_3-3配置yaml配置文件" aria-hidden="true">#</a> 3.3配置YAML配置文件</h3>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8500</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4添加主启动类" tabindex="-1"><a class="header-anchor" href="#_3-4添加主启动类" aria-hidden="true">#</a> 3.4添加主启动类</h3>
<div class="language-Java line-numbers-mode" data-ext="Java"><pre v-pre class="language-Java"><code>package org.javatop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.core.env.Environment;

/**
 * @author : Leo
 * @version 1.0
 * @date 2023-10-31 15:05
 * @description : 启动类
 */
@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
public class Application
{
    public static void main(String[] args)
    {
        ConfigurableApplicationContext context = SpringApplication.run(Application.class, args);
        Environment environment = context.getBean(Environment.class);

        System.out.println(&quot;访问链接：http://localhost:&quot; + environment.getProperty(&quot;server.port&quot;));
        System.out.println(&quot;(♥◠‿◠)ﾉﾞ  项目启动成功   ლ(´ڡ`ლ)ﾞ  \n&quot; +
                &quot; .-------.       ____     __        \n&quot; +
                &quot; |  _ _   \\      \\   \\   /  /    \n&quot; +
                &quot; | ( ' )  |       \\  _. /  '       \n&quot; +
                &quot; |(_ o _) /        _( )_ .'         \n&quot; +
                &quot; | (_,_).' __  ___(_ o _)'          \n&quot; +
                &quot; |  |\\ \\  |  ||   |(_,_)'         \n&quot; +
                &quot; |  | \\ `'   /|   `-'  /           \n&quot; +
                &quot; |  |  \\    /  \\      /           \n&quot; +
                &quot; ''-'   `'-'    `-..-'              &quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5编写接口测试" tabindex="-1"><a class="header-anchor" href="#_3-5编写接口测试" aria-hidden="true">#</a> 3.5编写接口测试</h3>
<h4 id="_1-编写hello接口" tabindex="-1"><a class="header-anchor" href="#_1-编写hello接口" aria-hidden="true">#</a> 1.编写Hello接口</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : Leo
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2023-10-31 15:02
 * <span class="token keyword">@description</span> :
 */</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/hello"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">return</span> <span class="token string">"hello......"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-启动测试" tabindex="-1"><a class="header-anchor" href="#_2-启动测试" aria-hidden="true">#</a> 2.启动测试</h4>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311518919.png" alt="image-20231031151809752" tabindex="0" loading="lazy"><figcaption>image-20231031151809752</figcaption></figure>
<p>打开浏览器，访问ip + 端口号： <a href="http://localhost:8500/hello" target="_blank" rel="noopener noreferrer">http://localhost:8500/hello<ExternalLinkIcon/></a></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311518671.png" alt="image-20231031151829593" tabindex="0" loading="lazy"><figcaption>image-20231031151829593</figcaption></figure>
<p><strong>至此，到这里，我们的SpringBoot的基础开发环境就已经搭建完成。</strong></p>
<h3 id="_3-6添加springsecurity依赖" tabindex="-1"><a class="header-anchor" href="#_3-6添加springsecurity依赖" aria-hidden="true">#</a> 3.6添加SpringSecurity依赖</h3>
<p>添加依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>	<span class="token comment">&lt;!--SpringSecurity启动器--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-security<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7重启项目进行测试" tabindex="-1"><a class="header-anchor" href="#_3-7重启项目进行测试" aria-hidden="true">#</a> 3.7重启项目进行测试</h3>
<p>再次打开打开浏览器，访问ip + 端口号： <a href="http://localhost:8500/hello" target="_blank" rel="noopener noreferrer">http://localhost:8500/hello<ExternalLinkIcon/></a></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311520844.png" alt="image-20231031152047788" tabindex="0" loading="lazy"><figcaption>image-20231031152047788</figcaption></figure>
<p>此时发现，我们就直接访问到我们的hello接口了，而是需要我们进行登录认证。</p>
<p>但是我们并不知道用户名跟密码是什么，我们也只是添加了一个SpringSecurity的依赖而是，怎么就给我直接跳出了一个登录框呢。</p>
<p>在 Spring Security 中，默认的登录页面和登录接口，都是 <code v-pre>/login</code> ，只不过一个是 get 请求（登录页面），另一个是 post 请求（登录接口）。</p>
<p><strong>「大家可以看到，非常方便，一个依赖就保护了所有接口。」</strong></p>
<p>带着疑问我们继续往下看，此时发现我们的IDEA控制台和第一次有一些不一样。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311523906.png" alt="image-20231031152326757" tabindex="0" loading="lazy"><figcaption>image-20231031152326757</figcaption></figure>
<p>第一行的内容就是security给我们提供的一个uuid生成的密码，用户名默认为user。第二行的内容大概的意思，这个生成的密码只适合于生产环境，如果需要线上投入使用的话，需要你进行配置。</p>
<p>有人说，你怎么知道知道生成的默认密码是一个 UUID 呢？</p>
<p>这个其实很好判断。</p>
<p>和用户相关的自动化配置类在 <code v-pre>UserDetailsServiceAutoConfiguration</code> 里边，在该类的 <code v-pre>getOrDeducePassword</code> 方法中，我们看到如下一行日志：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311540481.png" alt="image-20231031154020367" tabindex="0" loading="lazy"><figcaption>image-20231031154020367</figcaption></figure>
<p>毫无疑问，我们在控制台看到的日志就是从这里打印出来的。打印的条件是 <strong>isPasswordGenerated</strong> 方法返回 true，即密码是默认生成的。</p>
<p>进而我们发现，user.getPassword 出现在 SecurityProperties 中，在 SecurityProperties 中我们看到如下定义：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311541855.png" alt="image-20231031154134602" tabindex="0" loading="lazy"><figcaption>image-20231031154134602</figcaption></figure>
<p>可以看到，默认的用户名就是 user，默认的密码则是 UUID，而默认情况下，passwordGenerated 也为 true。</p>
<p>好了，接下来我们就使用security给提供的用户名和密码来进行登录认证。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311535832.png" alt="image-20231031153507757" tabindex="0" loading="lazy"><figcaption>image-20231031153507757</figcaption></figure>
<p>可以看到，我们成功登录，并直接跳转到我们的hello接口，至此，我们的HelloWorld入门案例完结。</p>
<h2 id="_4-自定义配置" tabindex="-1"><a class="header-anchor" href="#_4-自定义配置" aria-hidden="true">#</a> 4.自定义配置</h2>
<p>虽然通过security自带的密码可以让我们进行登录并访问到我们的接口，但是你每次项目重启，系统所生成的UUID都不一样，这样会不会太麻烦了。</p>
<p>能不能通过手动配置的方式来进行配置自定义用户的密码呢。当然可以，下面Leo哥带你通过配置文件来对他进行自定义配置。</p>
<h3 id="_4-1配置文件" tabindex="-1"><a class="header-anchor" href="#_4-1配置文件" aria-hidden="true">#</a> 4.1配置文件</h3>
<p>我们可以在 application.properties 中配置默认的用户名密码。</p>
<p>怎么配置呢？大家还记得上一小节我们说的 SecurityProperties，默认的用户就定义在它里边，是一个静态内部类，我们如果要定义自己的用户名密码，必然是要去覆盖默认配置，我们先来看下 SecurityProperties 的定义：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311546658.png" alt="image-20231031154639513" tabindex="0" loading="lazy"><figcaption>image-20231031154639513</figcaption></figure>
<p>可以看出来，我们可以通过yml配置文件来对SecurityProperties的默认配置进行覆盖，好了，接下来我们通过配置application.yml来进行配置。</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">security</span><span class="token punctuation">:</span>
    <span class="token key atrule">user</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> javatop
      <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这就是我们新定义的用户名密码。</p>
<p>在 properties 中定义的用户名密码最终是通过set 方法注入到属性中去的，这里我们顺便来看下 SecurityProperties.User#setPassword 方法:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token class-name">String</span> password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">hasLength</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>passwordGenerated <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>password <span class="token operator">=</span> password<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从这里我们可以看到，application.yml 中定义的密码在注入进来之后，还顺便设置了 passwordGenerated 属性为 false，这个属性设置为 false 之后，控制台就不会打印默认的密码了。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311548089.png" alt="image-20231031154846024" tabindex="0" loading="lazy"><figcaption>image-20231031154846024</figcaption></figure>
<p>此时重启项目，我们就可以使用自己定义的用户名/密码登录了。</p>
<h2 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结" aria-hidden="true">#</a> 4.总结</h2>
<p>以上便是本文的全部内容，本人才疏学浅，文章有什么错误的地方，欢迎大佬们批评指正！我是<strong>Leo</strong>，一个在互联网行业的小白，立志成为更好的自己。</p>
<p>如果你想了解更多关于<strong>Leo</strong>，可以关注公众号-程序员Leo，后面文章会首先同步至公众号。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311301345907.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


