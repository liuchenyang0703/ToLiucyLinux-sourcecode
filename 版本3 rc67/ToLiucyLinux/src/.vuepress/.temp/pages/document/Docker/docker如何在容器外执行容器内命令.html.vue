<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<p>有时候我们想执行某个容器的某条命令，但又不想进入容器内。那该怎么办？</p>
<p>所以就有一种办法，我们直接在容器外执行容器内的命令，来进行一些容器内的操作。</p>
<br>
<font color=red size=4>可以根据容器名来执行，也可以根据容器的CONTAINER ID来执行</font>
<br>
<h2 id="参考实例" tabindex="-1"><a class="header-anchor" href="#参考实例"><span>参考实例</span></a></h2>
<ul>
<li>
<font  color=teal>根据容器名来执行容器内的命令</font></li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看容器名</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ps</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -a</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#例如nginx；-c后面是要执行的容器内的命令</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> exec</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -it</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nginx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /bin/bash</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'cd /packages/detectron &#x26;&#x26; python tools/train.py'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<font  color=teal>根据容器名来执行容器内命令，不使用`-it`。</font></li>
</ul>
<blockquote>
<p>这个不使用<code v-pre>it</code>，一般用于执行周期性计划任务之类的，容易遇到：<font color=red>the input device is not a TTY</font>报错；</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> exec</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> test</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /bin/bash</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'cd /application/test &#x26;&#x26; sh /application/test/start.sh’</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>
<font  color=teal>根据CONTAINER ID来执行容器内的命令</font></li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#查看容器的CONTAINER ID</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ps</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	DOCKER_ID</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">63f6f4sab243</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#根据CONTAINER ID来执行容器内的命令</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> exec</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -it</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $DOCKER_ID</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /bin/bash</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'cd /packages/detectron &#x26;&#x26; python tools/train.py'</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 或</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> exec</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $DOCKER_ID</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /bin/bash</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'cd /packages/detectron &#x26;&#x26; python tools/train.py'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span><font color=red>注意事项：</font></span></a></h2>
<blockquote>
<p><code v-pre>-it</code> 有可能造成命令不执行，特别是在程序调用时，确认的确需要的时候再加上-it；<br>
在执行周期性计划任务的时候就不要加<code v-pre>-it</code>了，把<code v-pre>-it</code>改为<code v-pre>-i</code>即可；<br>
如果在周期性计划任务中使用的是<code v-pre>-it</code>，会遇到：<font color=red>the input device is not a TTY</font>报错；</p>
</blockquote>
<br>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161456196.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


