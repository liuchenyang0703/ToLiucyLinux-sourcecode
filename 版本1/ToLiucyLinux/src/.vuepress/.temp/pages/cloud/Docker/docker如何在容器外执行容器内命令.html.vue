<template><div><p>@[toc]</p>
<h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1>
<p>有时候我们想执行某个容器的某条命令，但又不想进入容器内。那该怎么办？</p>
<p>所以就有一种办法，我们直接在容器外执行容器内的命令，来进行一些容器内的操作。</p>
<br>
<font color=red size=4>可以根据容器名来执行，也可以根据容器的CONTAINER ID来执行</font>
<br>
<h2 id="参考实例" tabindex="-1"><a class="header-anchor" href="#参考实例" aria-hidden="true">#</a> 参考实例</h2>
<ul>
<li>
<font  color=teal>根据容器名来执行容器内的命令</font></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查看容器名</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>
<span class="token comment">#例如nginx；-c后面是要执行的容器内的命令</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> nginx /bin/bash <span class="token parameter variable">-c</span> <span class="token string">'cd /packages/detectron &amp;&amp; python tools/train.py'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<font  color=teal>根据容器名来执行容器内命令，不使用`-it`。</font></li>
</ul>
<blockquote>
<p>这个不使用<code v-pre>it</code>，一般用于执行周期性计划任务之类的，容易遇到：<font color=red>the input device is not a TTY</font>报错；</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-i</span> <span class="token builtin class-name">test</span> /bin/bash <span class="token parameter variable">-c</span> 'cd /application/test <span class="token operator">&amp;&amp;</span> <span class="token function">sh</span> /application/test/start.sh’
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<font  color=teal>根据CONTAINER ID来执行容器内的命令</font></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查看容器的CONTAINER ID</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> 
	<span class="token assign-left variable">DOCKER_ID</span><span class="token operator">=</span>63f6f4sab243
<span class="token comment">#根据CONTAINER ID来执行容器内的命令</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token variable">$DOCKER_ID</span> /bin/bash <span class="token parameter variable">-c</span> <span class="token string">'cd /packages/detectron &amp;&amp; python tools/train.py'</span>
<span class="token comment"># 或</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token variable">$DOCKER_ID</span> /bin/bash <span class="token parameter variable">-c</span> <span class="token string">'cd /packages/detectron &amp;&amp; python tools/train.py'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> <font color=red>注意事项：</font></h2>
<blockquote>
<p><code v-pre>-it</code> 有可能造成命令不执行，特别是在程序调用时，确认的确需要的时候再加上-it；<br>
在执行周期性计划任务的时候就不要加<code v-pre>-it</code>了，把<code v-pre>-it</code>改为<code v-pre>-i</code>即可；<br>
如果在周期性计划任务中使用的是<code v-pre>-it</code>，会遇到：<font color=red>the input device is not a TTY</font>报错；</p>
</blockquote>
<br>
<figure><img src="https://img-blog.csdnimg.cn/9705a2001e684797871981fcbe097bfa.gif" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</div></template>


