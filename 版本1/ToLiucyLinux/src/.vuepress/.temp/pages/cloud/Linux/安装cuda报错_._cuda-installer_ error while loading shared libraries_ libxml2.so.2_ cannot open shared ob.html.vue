<template><div><p>@[toc]</p>
<h1 id="在docker内安装cuda11-1时报如下错" tabindex="-1"><a class="header-anchor" href="#在docker内安装cuda11-1时报如下错" aria-hidden="true">#</a> 在docker内安装cuda11.1时报如下错：</h1>
<blockquote>
<p>./cuda-installer: error while loading shared libraries: libxml2.so.2: cannot open shared object file</p>
</blockquote>
<h1 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法：</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#更新源</span>
<span class="token function">apt</span> update

<span class="token comment">#安装libxml2插件</span>
<span class="token function">apt</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> libxml2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成之后再次试一下安装cuda就可以了；<br>
执行安装cuda的时候，如果不是root用户记得加sudo； <code v-pre>sudo cuda_11.1.0_455.23.05_linux.run</code></p>
<p>Done！</p>
</div></template>


