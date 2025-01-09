<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<p>@[toc]</p>
<h1 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h1>
<blockquote>
<p>问题所在处：在web页面来添加图形，实时监控数据的时候我们一般会写中文，可是，添加完成之后发现中文是乱码，那么我们这期就来解决这个问题；图如下👇</p>
</blockquote>
<figure><img src="https://img-blog.csdnimg.cn/54f7d038c6374da18ccc5bbf8bc02ccb.jpeg" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h1>
<p>1、在zabbix服务端找到<font color=red><strong>defines.inc.php</strong></font>文件；找不到的可以使用find 方法查找；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">find</span> / <span class="token parameter variable">-name</span> defines.inc.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/7d06ec3a682b4bc7912c1c32cd78f0f9.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>这里我们可以看到查找到了好几个，那么哪个才是正确的呢，首先先找有zabbix词的，其他都排除，还有其他带zabbix的，但是一般都是<font color=red>/usr/share/zabbix/include/defines.inc.php</font>这个目录；</p>
<p>2、找到这个目录进入，这里需要修改两处地方：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#进入目录</span>
<span class="token function">vim</span> /usr/share/zabbix/include/defines.inc.php

<span class="token comment">#修改两处地方；</span>
<span class="token comment">#修改一：可以查找到这个单词“ZBX_GRAPH_FONT_NAME”，默认应该是在72行；</span>
原：define<span class="token punctuation">(</span><span class="token string">'ZBX_GRAPH_FONT_NAME'</span>,           <span class="token string">'graphfont'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> // font <span class="token function">file</span> name
改为：define<span class="token punctuation">(</span><span class="token string">'ZBX_GRAPH_FONT_NAME'</span>,           <span class="token string">'zabbix'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> // font <span class="token function">file</span> name

<span class="token comment">#修改二：可以查找到这个单词“ZBX_FONT_NAME”，默认应该是在113行；</span>
原：define<span class="token punctuation">(</span><span class="token string">'ZBX_FONT_NAME'</span>, <span class="token string">'graphfont'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
改为：define<span class="token punctuation">(</span><span class="token string">'ZBX_FONT_NAME'</span>, <span class="token string">'zabbix'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<font color=red>修改可以默认给定名字；但两处修改名字要一样，后面上传的图片也要修改成你定义的名字；</font></blockquote>
<p>修改一图片：<br>
<img src="https://img-blog.csdnimg.cn/7d5610fe966145949ea7d1abec329ddc.png" alt="在这里插入图片描述" loading="lazy"></p>
<p>修改二图片：<br>
<img src="https://img-blog.csdnimg.cn/a2310ac86cf642079b20e750902843a2.png" alt="在这里插入图片描述" loading="lazy"></p>
<p>3、将Windows的字体上传到服务器上并放到指定目录</p>
<p>首先我们现在windows上找到存放字体的地方，默认的位置在<font color=red> <strong>C:\Windows\Fonts</strong> </font>目录下；<br>
找到之后我们可以找出自己想要的字体，但是为了能看懂还是选择中文较好；</p>
<figure><img src="https://img-blog.csdnimg.cn/c8e908f53aa24001af326979cf66812e.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>找到自己想要的图片，上传至服务器上，如果不知道上传到服务器哪个位置，我们可以先找到指定的目录；</p>
<p>这个一般就存放到<font color=red> <strong>/usr/share/zabbix/assets/fonts/</strong> </font>目录下；当然也可以 find 查找；</p>
<p>找到目录之后可以直接将选中的字体上传到这个目录，然后修改名字为<font color=red>zabbix</font>，也就是在配置文件中写的；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mv</span> xxx.ttf zabbix.ttf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>复制到该目录，重命名之后我们来重启服务；</p>
<p>4、重启服务</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl restart zabbix-server.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="查验" tabindex="-1"><a class="header-anchor" href="#查验" aria-hidden="true">#</a> 查验</h1>
<p>重启完服务后，登录web页面查验；</p>
<figure><img src="https://img-blog.csdnimg.cn/a325f09dd7384b84bf5988364079cdcf.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>这时候我们可以看到已经修改成功了；问题解决！</p>
</div></template>


