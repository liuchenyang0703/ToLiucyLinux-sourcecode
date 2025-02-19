<template><div><h1 id="springsecurity6-修改默认用户" tabindex="-1"><a class="header-anchor" href="#springsecurity6-修改默认用户" aria-hidden="true">#</a> SpringSecurity6 | 修改默认用户</h1>
<p>学习参考 ：</p>
<ul>
<li>讲师：<strong>孙帅老师</strong></li>
<li>课程：<a href="https://www.bilibili.com/video/BV185411477k?p=188&amp;spm_id_from=pageDriver&amp;vd_source=cea816a08805c218ac4390ae9b61ae31" target="_blank" rel="noopener noreferrer">孙哥说SpringSecurity6<ExternalLinkIcon/></a></li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312071947999.png" alt="image-20231030235443828" tabindex="0" loading="lazy"><figcaption>image-20231030235443828</figcaption></figure>
<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2>
<p>大家好，我是Leo哥🫣🫣🫣，接到<a href="https://gaoziman.blog.csdn.net/article/details/134816835" target="_blank" rel="noopener noreferrer">上一节<ExternalLinkIcon/></a>，我们学习了SpringSecurity默认登录用户是如何来的，也通过源码的方式去走了下整个流程。虽然通过SpringSecurity自带的用户和密码密码可以让我们进行登录并访问到我们的接口，但是你每次项目重启，系统所生成的UUID都不一样，这样会不会太麻烦了。能不能通过手动配置的方式来进行配置自定义用户的密码呢。当然可以，下面Leo哥带你通过配置文件来对他进行自定义配置。好了，话不多说让我们开始吧😎😎😎。</p>
<h2 id="_2-自定义配置" tabindex="-1"><a class="header-anchor" href="#_2-自定义配置" aria-hidden="true">#</a> 2.自定义配置</h2>
<p>我们可以在 application.properties 中配置默认的用户名密码。</p>
<p>怎么配置呢？大家还记得上一小节我们说的 SecurityProperties，默认的用户就定义在它里边，是一个静态内部类，我们如果要定义自己的用户名密码，必然是要去覆盖默认配置，我们先来看下 SecurityProperties 的定义：</p>
<p>那么<strong>SecurityProperties</strong> 是怎么来的呢，当我们项目启动的时候，SpringBoot就会通过自动配置进行加载SpringSecurity所需要的一些bean。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312071952676.png" alt="image-20231207195201598" tabindex="0" loading="lazy"><figcaption>image-20231207195201598</figcaption></figure>
<p>我们可以在文件中找到关于SpringSecurity相关的自动配置类：<strong>SecurityAutoConfiguration</strong></p>
<p>然后我们可以点过去看看他的具体实现。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312071953015.png" alt="image-20231207195305951" tabindex="0" loading="lazy"><figcaption>image-20231207195305951</figcaption></figure>
<p>可以看到在这个自动配置类上有一个我们熟悉的注解：<code v-pre>@EnableConfigurationProperties</code>，他会去加载SecurityProperties.class。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312071954051.png" alt="image-20231207195454972" tabindex="0" loading="lazy"><figcaption>image-20231207195454972</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312071955522.png" alt="image-20231207195519488" tabindex="0" loading="lazy"><figcaption>image-20231207195519488</figcaption></figure>
<p>这一下不就串上了嘛，上节课我们学习了关于SecurityProperties，当我们并没有指定用户的时候，他就会使用默认配置，默认用户名为user，密码为随机生成的UUID。</p>
<p>那么我们现在就可以通过spring.security配置文件进行自定义我们的用户名和密码。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312071956518.png" alt="image-20231207195644467" tabindex="0" loading="lazy"><figcaption>image-20231207195644467</figcaption></figure>
<p>这就是我们新定义的用户名密码。</p>
<p>在 properties 中定义的用户名密码最终是通过set 方法注入到属性中去的，这里我们顺便来看下 SecurityProperties.User#setPassword 方法:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token class-name">String</span> password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">hasLength</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>passwordGenerated <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>password <span class="token operator">=</span> password<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从这里我们可以看到，application.yml 中定义的密码在注入进来之后，还顺便设置了 passwordGenerated 属性为 false，这个属性设置为 false 之后，控制台就不会打印默认的密码了。</p>
<p>最后，我们重新启动项目，注意这次看控制台就没有原来生成的UUID生成的密码了，因为我们没有使用默认配置。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312071958068.png" alt="image-20231207195833998" tabindex="0" loading="lazy"><figcaption>image-20231207195833998</figcaption></figure>
<p>然后通过自定义的用户名和密码进行登录。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312071959732.png" alt="image-20231207195926697" tabindex="0" loading="lazy"><figcaption>image-20231207195926697</figcaption></figure>
<p>发现也是可以正常进行登录的。</p>
<h2 id="_3-总结" tabindex="-1"><a class="header-anchor" href="#_3-总结" aria-hidden="true">#</a> 3.总结</h2>
<p>以上便是本文的全部内容，本人才疏学浅，文章有什么错误的地方，欢迎大佬们批评指正！我是<strong>Leo</strong>，一个在互联网行业的小白，立志成为更好的自己。</p>
<p>如果你想了解更多关于<strong>Leo</strong>，可以关注公众号-程序员Leo，后面文章会首先同步至公众号。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312071959544.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
<h2 id="🥇4-文末推荐福利" tabindex="-1"><a class="header-anchor" href="#🥇4-文末推荐福利" aria-hidden="true">#</a> 🥇4.文末推荐福利</h2>
<h3 id="🥇4-1-介绍" tabindex="-1"><a class="header-anchor" href="#🥇4-1-介绍" aria-hidden="true">#</a> 🥇4.1 介绍</h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312072048017.png" alt="image-20231207204821836" tabindex="0" loading="lazy"><figcaption>image-20231207204821836</figcaption></figure>
<p>看清AI写作逻辑，讲透AI写作之道；掌握写作黑科技，用AI引爆你的创作天赋；从0到1，教你巧用AI学会写作；突破写作困境，完成从写作小白到写作大神的蜕变。</p>
<h3 id="🥇4-2-特色" tabindex="-1"><a class="header-anchor" href="#🥇4-2-特色" aria-hidden="true">#</a> 🥇4.2 特色</h3>
<p>覆盖常用写作场景：写小说、写故事、写文案、写策划、写新媒体文章、写广告卖点……</p>
<p>提高写作效率：输入有效提问关键词，一键生成所需内容，稍加修改便成一篇完整文章，将写作效率成百倍提升。</p>
<p>扩大素材积累：作为天生的超大型素材库，只有你想不到的素材，没有AI无法提供的素材，极大充实素材库，让写作不再无内容可写。</p>
<p>快速进行文本精修：文稿写完只完成了第一步，修改校对仍是重中之重。AI自带语句精修功能，可对文稿的内容、结构、标点符号等进行全方位的修订，让稿件修改更轻松、更精细。</p>
<h3 id="🥇4-3-内容简介" tabindex="-1"><a class="header-anchor" href="#🥇4-3-内容简介" aria-hidden="true">#</a> 🥇4.3 内容简介</h3>
<p>本书从写作与ChatGPT的基础知识讲起，结合创作者的实际写作经历与写作教学经历，重点介了用ChatGPT写作的基础技巧、进阶写作的方法、不同文体的写作方法、写作变现的秘诀，让读者系统地理解写作技巧与变现思路。本书包括如下内容：用ChatGPT重建写作思维、快速摘定选题、快速写出标题、高效收集索材、生成文章结构、写出优质文章、进行日常写作训练，以及用ChatGPT提升写作变现能力。本书适合零基础想学习写作、想利用ChatGPT提高写作能力的读者阅读。</p>
<h3 id="🥇4-4-购买链接" tabindex="-1"><a class="header-anchor" href="#🥇4-4-购买链接" aria-hidden="true">#</a> 🥇4.4 购买链接</h3>
<p>当当链接：<a href="http://product.dangdang.com/29626355.html" target="_blank" rel="noopener noreferrer">http://product.dangdang.com/29626355.html<ExternalLinkIcon/></a></p>
<p>京东链接：<a href="https://item.jd.com/13856373.html" target="_blank" rel="noopener noreferrer">https://item.jd.com/13856373.html<ExternalLinkIcon/></a></p>
<h3 id="🥇4-5-参与方式" tabindex="-1"><a class="header-anchor" href="#🥇4-5-参与方式" aria-hidden="true">#</a> 🥇4.5 参与方式</h3>
<p>🌟关注我的博客：关注我的博客，所有新鲜的博客文章和活动信息都不会错过。<br>
📲添加博主wx：添加<strong>Leocisyam</strong>,如果添加不了,请私信博主。<br>
💬参与方式：关注公众号程序员Leo或者文末扫码关注，回复抽奖，即可参与抽奖，记住要加Leo哥微信哈，方便通知。<br>
🎁公布结果：2023年12月12日晚，我会亲自抽取2名幸运读者，并在微信私信通知，请大家注意查收哈。</p>
</div></template>


