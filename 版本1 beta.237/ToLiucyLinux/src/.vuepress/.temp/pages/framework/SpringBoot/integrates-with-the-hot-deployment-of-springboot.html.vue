<template><div><h1 id="idea2023版本整合springboot热部署" tabindex="-1"><a class="header-anchor" href="#idea2023版本整合springboot热部署" aria-hidden="true">#</a> IDEA2023版本整合SpringBoot热部署</h1>
<h2 id="_1-前言☕" tabindex="-1"><a class="header-anchor" href="#_1-前言☕" aria-hidden="true">#</a> 1.前言☕</h2>
<p>今天来讲讲IDEA2023新版本如何配合SpringBoot使用热部署工具。</p>
<h2 id="_2-引入依赖" tabindex="-1"><a class="header-anchor" href="#_2-引入依赖" aria-hidden="true">#</a> 2.引入依赖</h2>
<p>在我们的SpringBoot中引入pom依赖。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-devtools<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：加入依赖后别忘记刷新Maven哦。</p>
<p><strong>这里可以看依赖是否下载成功</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202403281540259.png" alt="image-20240328154058224" tabindex="0" loading="lazy"><figcaption>image-20240328154058224</figcaption></figure>
<h2 id="_3-配置项目自动编译" tabindex="-1"><a class="header-anchor" href="#_3-配置项目自动编译" aria-hidden="true">#</a> 3.配置项目自动编译</h2>
<p>勾选： settings-&gt;Build，Excecution，Deployment-&gt;Compiler -&gt; build project automatic，点击apply</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202403281543216.png" alt="image-20240328154323103" tabindex="0" loading="lazy"><figcaption>image-20240328154323103</figcaption></figure>
<p>勾选：settings-&gt; AdvancedSettings -&gt; Compiler  -&gt; 编译器中的第一个选项，如下图，点击apply</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202403281546597.png" alt="image-20240328154620449" tabindex="0" loading="lazy"><figcaption>image-20240328154620449</figcaption></figure>
<p>按住 <code v-pre>ctrl+shift+Alt+/</code> 四个键，点击-&gt; Registry-&gt; <code v-pre>compiler.automake.postpone.when.idle.less.than</code> 后的value值设置为0；</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202403281547327.png" alt="image-20240328154730262" tabindex="0" loading="lazy"><figcaption>image-20240328154730262</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202403281547061.png" alt="image-20240328154758999" tabindex="0" loading="lazy"><figcaption>image-20240328154758999</figcaption></figure>
<h2 id="_4-重启项目测试" tabindex="-1"><a class="header-anchor" href="#_4-重启项目测试" aria-hidden="true">#</a> 4.重启项目测试</h2>
<p>看到启动日志中的 <strong>restartedMain</strong> 就说明我们配置已经生效了。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202403281548319.png" alt="image-20240328154847101" tabindex="0" loading="lazy"><figcaption>image-20240328154847101</figcaption></figure>
<h2 id="_5-总结" tabindex="-1"><a class="header-anchor" href="#_5-总结" aria-hidden="true">#</a> 5.总结</h2>
<p>以上便是本文的全部内容，本人才疏学浅，文章有什么错误的地方，欢迎大佬们批评指正！我是<strong>Leo</strong>，一个在互联网行业的小白，立志成为更好的自己。</p>
<p>如果你想了解更多关于<strong>Leo</strong>，可以关注公众号-程序员Leo，后面文章会首先同步至公众号。<br>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202403281549774.png" alt="公众号封面" loading="lazy"></p>
</div></template>


