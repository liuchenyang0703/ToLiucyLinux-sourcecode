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
<hr>
<ul>
<li><strong>首先，要查看需要打成镜像的容器ID或容器名</strong></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token operator">|</span> <span class="token function">grep</span> caffe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>其次，使用docker commit命令打镜像</strong></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#使用容器id打镜像</span>
<span class="token function">docker</span> commit <span class="token punctuation">[</span>CONTAINER ID<span class="token punctuation">]</span> <span class="token punctuation">[</span>IMAGE NAME<span class="token punctuation">]</span>   <span class="token comment">#容器ID  要创建的镜像名</span>
<span class="token comment">#使用容器名称打镜像</span>
<span class="token function">docker</span> commit <span class="token punctuation">[</span>CONTAINER name<span class="token punctuation">]</span> <span class="token punctuation">[</span>IMAGE NAME<span class="token punctuation">]</span>   <span class="token comment">#容器名  要创建的镜像名</span>

<span class="token comment">#等待打完镜像查看验证即可</span>
<span class="token function">docker</span> images <span class="token operator">|</span> <span class="token function">grep</span> caffe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>实例</strong></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#将容器打为镜像</span>
<span class="token function">docker</span> commit caffe caffe:v1

<span class="token comment">#查看镜像</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker images | grep caffe</span>
caffe               v1                  4af4940c8e64        <span class="token number">4</span> minutes ago       <span class="token number">15</span>.7GB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


