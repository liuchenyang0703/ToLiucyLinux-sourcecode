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
<h2 id="docker-history-image" tabindex="-1"><a class="header-anchor" href="#docker-history-image" aria-hidden="true">#</a> docker history image</h2>
<p>使用：<code v-pre>docker history image(镜像名)</code>可以看到构建镜像时每条命令执行的大小</p>
<p>这里显示的是所有层的信息；<br>
如果看命令不知道是哪个的时候，可根据在build镜像时的IMAGE来判断是哪个。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># docker history redhat-mysql</span>
IMAGE               CREATED             CREATED BY                                      SIZE                COMMENT
cf14a9a9f753        <span class="token number">4</span> days ago          /bin/sh <span class="token parameter variable">-c</span> <span class="token comment">#(nop)  CMD ["mysqld"]               0B                  </span>
312a16d871a0        <span class="token number">4</span> days ago          /bin/sh <span class="token parameter variable">-c</span> <span class="token comment">#(nop)  EXPOSE 3306                  0B                  </span>
372e0847f04a        <span class="token number">4</span> days ago          /bin/sh <span class="token parameter variable">-c</span> mysqld --initialize-insecure --us…   127MB               
3f40e557ffcf        <span class="token number">4</span> days ago          /bin/sh <span class="token parameter variable">-c</span> <span class="token comment">#(nop)  ENV PATH=/opt/mysql-5.7.3…   0B                  </span>
cec92708a0d1        <span class="token number">4</span> days ago          /bin/sh <span class="token parameter variable">-c</span> <span class="token comment">#(nop) COPY file:c21e035f53b78962…   162B                </span>
b904f83aa22c        <span class="token number">4</span> days ago          /bin/sh <span class="token parameter variable">-c</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> mysql:mysql /opt/mysql-5…   <span class="token number">2</span>.68GB              
62c02bad85d5        <span class="token number">4</span> days ago          /bin/sh <span class="token parameter variable">-c</span> <span class="token function">groupadd</span> mysql <span class="token operator">&amp;&amp;</span> <span class="token function">useradd</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-g</span> m…   359kB               
789b6d170caf        <span class="token number">4</span> days ago          /bin/sh <span class="token parameter variable">-c</span> <span class="token comment">#(nop) ADD file:41225123e9b5895c2…   2.68GB              </span>
978bac9547fa        <span class="token number">4</span> days ago          /bin/sh <span class="token parameter variable">-c</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> libaio numactl        <span class="token number">66</span>.1MB              
069661fe1d9a        <span class="token number">4</span> days ago          /bin/sh <span class="token parameter variable">-c</span> <span class="token comment">#(nop)  ENV LANG=en_US.utf8          0B                  </span>
8d7d859c98e3        <span class="token number">5</span> days ago          /bin/bash                                       319MB               
9da37a681956        <span class="token number">3</span> years ago                                                         <span class="token number">2</span>.94kB              
<span class="token operator">&lt;</span>missing<span class="token operator">></span>           <span class="token number">3</span> years ago                                                         205MB               Imported from -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我只要显示CREATED BY和每层的大小，那么可以使用：<code v-pre>--format='{{.CreatedBy}} - {{.Size}}'</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost mysql<span class="token punctuation">]</span><span class="token comment"># docker history --format='{{.CreatedBy}} - {{.Size}}' redhat-mysql</span>
/bin/sh <span class="token parameter variable">-c</span> <span class="token comment">#(nop)  CMD ["mysqld"] - 0B</span>
/bin/sh <span class="token parameter variable">-c</span> <span class="token comment">#(nop)  EXPOSE 3306 - 0B</span>
/bin/sh <span class="token parameter variable">-c</span> mysqld --initialize-insecure --us… - 127MB
/bin/sh <span class="token parameter variable">-c</span> <span class="token comment">#(nop)  ENV PATH=/opt/mysql-5.7.3… - 0B</span>
/bin/sh <span class="token parameter variable">-c</span> <span class="token comment">#(nop) COPY file:c21e035f53b78962… - 162B</span>
/bin/sh <span class="token parameter variable">-c</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> mysql:mysql /opt/mysql-5… - <span class="token number">2</span>.68GB
/bin/sh <span class="token parameter variable">-c</span> <span class="token function">groupadd</span> mysql <span class="token operator">&amp;&amp;</span> <span class="token function">useradd</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-g</span> m… - 359kB
/bin/sh <span class="token parameter variable">-c</span> <span class="token comment">#(nop) ADD file:41225123e9b5895c2… - 2.68GB</span>
/bin/sh <span class="token parameter variable">-c</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> libaio numactl - <span class="token number">66</span>.1MB
/bin/sh <span class="token parameter variable">-c</span> <span class="token comment">#(nop)  ENV LANG=en_US.utf8 - 0B</span>
/bin/bash - 319MB
 - <span class="token number">2</span>.94kB
 - 205MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


