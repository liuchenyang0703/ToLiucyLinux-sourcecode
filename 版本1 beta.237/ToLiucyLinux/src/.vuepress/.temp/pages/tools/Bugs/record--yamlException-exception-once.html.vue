<template><div><h1 id="记录一次yamlexception异常" tabindex="-1"><a class="header-anchor" href="#记录一次yamlexception异常" aria-hidden="true">#</a> 记录一次YAMLException异常</h1>
<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2>
<p>大家好，我是Leo哥🫣🫣🫣，最近在学习SpringBoot3以及写一个关于SpringBoot3整合短信登录的案例，当我项目创建之后，做好配置文件管理并启动项目之后，控制台给了我重重一击。具体是啥呢，咱们接着往下聊。好了，话不多说让我们开始吧😎😎😎。</p>
<h2 id="_2-报错引出" tabindex="-1"><a class="header-anchor" href="#_2-报错引出" aria-hidden="true">#</a> 2.报错引出</h2>
<p>没错，当我启动项目的时候，控制台给我报了一个这么的错误。</p>
<blockquote>
<p>→ : java.nio.charset.MalformedInputException: Input length = 1</p>
</blockquote>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311292227217.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>咱就是说，咱也没见过，不过问题不大，我们先看看他是什么意思，打开我们的百度翻译。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311292236322.png" alt="image-20231129223618244" tabindex="0" loading="lazy"><figcaption>image-20231129223618244</figcaption></figure>
<h2 id="_3-报错解决" tabindex="-1"><a class="header-anchor" href="#_3-报错解决" aria-hidden="true">#</a> 3.报错解决</h2>
<p>这一看，好像也看不出来什么问题啊，于是咱还是妥协，直接问度娘，经过俺的一番查找，最终将问题定位在是由于IDEA配置文件的<strong>编码格式</strong>导致的问题。</p>
<p>一看到这，那不就好办了，这编码格式还不简单嘛，只需要调节为UTF-8即可，于是说干就干。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311292239407.png" alt="image-20231129223911354" tabindex="0" loading="lazy"><figcaption>image-20231129223911354</figcaption></figure>
<p>就这样 完工。</p>
<p>然后我们再次启动我们的项目。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311292240476.png" alt="image-20231129224046431" tabindex="0" loading="lazy"><figcaption>image-20231129224046431</figcaption></figure>
<p>好了，大功告成，项目可以正常启动了。今天的分享就到这里哈，关于SpringBoot整合手机短信，我会单独出一期发出来，敬请期待!!!</p>
<h2 id="_4-其他问题" tabindex="-1"><a class="header-anchor" href="#_4-其他问题" aria-hidden="true">#</a> 4.其他问题</h2>
<p>如果以上我的解决方式没办法解决还是报同样的错，那么在pom中加入如下配置</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project.build.sourceEncoding</span><span class="token punctuation">></span></span>UTF-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project.build.sourceEncoding</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project.reporting.outputEncoding</span><span class="token punctuation">></span></span>UTF-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project.reporting.outputEncoding</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.encoding</span><span class="token punctuation">></span></span>UTF-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.encoding</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>java.version</span><span class="token punctuation">></span></span>17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>java.version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="重新配置yml文件" tabindex="-1"><a class="header-anchor" href="#重新配置yml文件" aria-hidden="true">#</a> 重新配置yml文件</h4>
<p>有两个解决思路:</p>
<ol>
<li>将yml配置文件中的中文注释全部删除<br>
但是本来是需要注释才能对各类配置做特定解释,所以不建议</li>
<li>新建一个配置文件为UTF-8的文件,将原有配置使用txt文件夹打开,再重新复制到新的yml配置文件中</li>
<li>如果团队的就复制其他小伙伴的，或者是以前正常运行项目的文件</li>
</ol>
<h2 id="_5-总结" tabindex="-1"><a class="header-anchor" href="#_5-总结" aria-hidden="true">#</a> 5.总结</h2>
<p>以上便是本文的全部内容，本人才疏学浅，文章有什么错误的地方，欢迎大佬们批评指正！我是<strong>Leo</strong>，一个在互联网行业的小白，立志成为更好的自己。</p>
<p>如果你想了解更多关于<strong>Leo</strong>，可以关注公众号-程序员Leo，后面文章会首先同步至公众号。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311292232918.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


