<template><div><p>编辑<font color=red> .bashrc</font>文件，该文件主要用于保存一些个性化的设置，如命令别名、路径等：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> .bashrc</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191616331.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>进入该文件里，我们要在最后一行或者最后在空出来几行来新增我们的个性化配置，如设置别名：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">alias</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> dfimage</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"docker run -v /var/run/docker.sock:/var/run/docker.sock --rm alpine/dfimage"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>比如下图👇</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191616470.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>设置完之后，我们:wq保存并退出</p>
<blockquote>
<p>:wq</p>
</blockquote>
<p>保存文件后，在执行<font color=red> source .bashrc</font>命令，使之生效。</p>
<p>然后自己可以去测试一下；</p>
<p>最后，需要我们注意的是，<code v-pre>.bashrc</code>文件是针对用户级别的个性化设置。切记切记！</p>
<p>如果想要全局可以放到<code v-pre>/etc/profile</code>文件里，需要用到root。</p>
</div></template>


