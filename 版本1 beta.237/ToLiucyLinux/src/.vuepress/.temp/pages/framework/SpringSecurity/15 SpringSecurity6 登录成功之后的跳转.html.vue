<template><div><h1 id="springsecurity6-登陆后的跳转" tabindex="-1"><a class="header-anchor" href="#springsecurity6-登陆后的跳转" aria-hidden="true">#</a> SpringSecurity6 | 登陆后的跳转</h1>
<p>学习参考 ：</p>
<ul>
<li>讲师：<strong>孙帅老师</strong></li>
<li>课程：<a href="https://www.bilibili.com/video/BV185411477k?p=188&amp;spm_id_from=pageDriver&amp;vd_source=cea816a08805c218ac4390ae9b61ae31" target="_blank" rel="noopener noreferrer">孙哥说SpringSecurity6<ExternalLinkIcon/></a></li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312102128628.png" alt="image-20231030235443828" tabindex="0" loading="lazy"><figcaption>image-20231030235443828</figcaption></figure>
<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2>
<p>大家好，我是Leo哥🫣🫣🫣，接到<a href="https://gaoziman.blog.csdn.net/article/details/134864581" target="_blank" rel="noopener noreferrer">上一节<ExternalLinkIcon/></a>，我们学习通过SpringSecurity的一些自定义配置来完成我们自定义登录界面。这篇文章我们主要来介绍一下我们通过自定义登录界面之后的一些细节处理。好了，话不多说让我们开始吧😎😎😎。</p>
<h2 id="_2-登录成功的处理" tabindex="-1"><a class="header-anchor" href="#_2-登录成功的处理" aria-hidden="true">#</a> 2.登录成功的处理</h2>
<p>在我们访问hello接口之前，我们需要进行登录认证，通过自定义用户名和密码登录成功之后才可以访问登录接口。</p>
<p>那么是否可以对登录成功之后的跳转进行处理呢。</p>
<p>当然可以，SpringSecurity给我提供了API进行处理。</p>
<h3 id="_2-1-forward跳转" tabindex="-1"><a class="header-anchor" href="#_2-1-forward跳转" aria-hidden="true">#</a> 2.1 forward跳转</h3>
<p>如果我们想要登录之后跳转到指定的接口的话，可以使用<code v-pre>successForwardUrl()</code>来进行跳转。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312102146617.png" alt="image-20231210214652583" tabindex="0" loading="lazy"><figcaption>image-20231210214652583</figcaption></figure>
<p>这样的话，不论你登录前访问的是什么接口，你通过登录之后，会默认跳转到<code v-pre>hello</code>接口。</p>
<h3 id="_2-2-redirect重定向" tabindex="-1"><a class="header-anchor" href="#_2-2-redirect重定向" aria-hidden="true">#</a> 2.2 redirect重定向</h3>
<p>而redirect确跟forward恰恰相反，如果之前有请求路径，<strong>会优先跳转之前请求的路径</strong>。</p>
<p>就比如我们最开始访问的是test接口，认证通过之后，他跳转到test接口中，而不是hello接口中。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312102153685.png" alt="image-20231210215333637" tabindex="0" loading="lazy"><figcaption>image-20231210215333637</figcaption></figure>
<p>如果按照我的以上配置，还不能正常访问的话，大家可以添加一条设置。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">csrf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>大家可以先把csrf给关闭了，关于csrf我们后面会讲。</p>
<h2 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结" aria-hidden="true">#</a> 4.总结</h2>
<p>以上便是本文的全部内容，本人才疏学浅，文章有什么错误的地方，欢迎大佬们批评指正！我是<strong>Leo</strong>，一个在互联网行业的小白，立志成为更好的自己。</p>
<p>如果你想了解更多关于<strong>Leo</strong>，可以关注公众号-程序员Leo，后面文章会首先同步至公众号。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312102138001.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


