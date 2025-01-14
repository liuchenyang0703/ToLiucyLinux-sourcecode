<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者</a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主</a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主</a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区</a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2>
<blockquote>
<p>问题所在处：在web页面来添加图形，实时监控数据的时候我们一般会写中文，可是，添加完成之后发现中文是乱码，那么我们这期就来解决这个问题；图如下👇</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161014739.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h2>
<p>1、在zabbix服务端找到<font color=red><strong>defines.inc.php</strong></font>文件；找不到的可以使用find 方法查找；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">find</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> defines.inc.php</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161014607.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这里我们可以看到查找到了好几个，那么哪个才是正确的呢，首先先找有zabbix词的，其他都排除，还有其他带zabbix的，但是一般都是<font color=red>/usr/share/zabbix/include/defines.inc.php</font>这个目录；</p>
<p>2、找到这个目录进入，这里需要修改两处地方：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#进入目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/share/zabbix/include/defines.inc.php</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#修改两处地方；</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#修改一：可以查找到这个单词“ZBX_GRAPH_FONT_NAME”，默认应该是在72行；</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">原：define(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">'ZBX_GRAPH_FONT_NAME'</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">           'graphfont'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">); </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">//</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> font</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> name</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">改为：define(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">'ZBX_GRAPH_FONT_NAME'</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">           'zabbix'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">); </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">//</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> font</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> name</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#修改二：可以查找到这个单词“ZBX_FONT_NAME”，默认应该是在113行；</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">原：define(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">'ZBX_FONT_NAME'</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'graphfont'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">改为：define(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">'ZBX_FONT_NAME'</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'zabbix'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<font color=red>修改可以默认给定名字；但两处修改名字要一样，后面上传的图片也要修改成你定义的名字；</font></blockquote>
<p>修改一图片：<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161014912.png" alt="" loading="lazy"></p>
<p>修改二图片：<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161014266.png" alt="" loading="lazy"></p>
<p>3、将Windows的字体上传到服务器上并放到指定目录</p>
<p>首先我们现在windows上找到存放字体的地方，默认的位置在<font color=red> <strong>C:\Windows\Fonts</strong> </font>目录下；<br>
找到之后我们可以找出自己想要的字体，但是为了能看懂还是选择中文较好；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161013640.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>找到自己想要的图片，上传至服务器上，如果不知道上传到服务器哪个位置，我们可以先找到指定的目录；</p>
<p>这个一般就存放到<font color=red> <strong>/usr/share/zabbix/assets/fonts/</strong> </font>目录下；当然也可以 find 查找；</p>
<p>找到目录之后可以直接将选中的字体上传到这个目录，然后修改名字为<font color=red>zabbix</font>，也就是在配置文件中写的；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> xxx.ttf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> zabbix.ttf</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>复制到该目录，重命名之后我们来重启服务；</p>
<p>4、重启服务</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> zabbix-server.service</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="查验" tabindex="-1"><a class="header-anchor" href="#查验"><span>查验</span></a></h2>
<p>重启完服务后，登录web页面查验；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161013377.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这时候我们可以看到已经修改成功了；问题解决！</p>
</div></template>


