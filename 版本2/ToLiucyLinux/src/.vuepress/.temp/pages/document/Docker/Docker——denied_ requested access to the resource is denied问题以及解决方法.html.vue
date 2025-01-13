<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161456021.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2>
<p>使用<font color=red>docker push</font>推送镜像时，出现<font color=red>denied: requested access to the resource is denied</font>的报错。<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161456378.png" alt="" loading="lazy"></p>
<h2 id="解析" tabindex="-1"><a class="header-anchor" href="#解析"><span>解析</span></a></h2>
<p>  原因和Git push代码一样，为了安全起见，在Docker Hub无法确定操作者的情况下，是无法完成push操作的。在Git中是通过配置文件SSH Keys来记住用户，那么在Docker Hub中也是通过配置文件。<br>
  通常在你第一次使用docker login命令登录你的Docker仓库时，会自动在你的机器上生成一个config.json的文件，目录具体位置不定。如果你是<font color=red>root用户</font>操作，一般在<font color=red>/root/.docker/config.json</font>目录。如果是<font color=red>普通用户</font>，那么可能在<font color=red>~/.docker/config.json</font>目录上。具体还是要看你<font color=red>登录的时候</font>显示的哪个目录。</p>
<blockquote>
<p>这里说一下，直接用-u参数指定登录名或者直接docker login在输入用户名密码登录都可以。</p>
</blockquote>
<p>例如：↓<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161456215.png" alt="" loading="lazy"><br>
画红框的就是你config.json的绝对路径。</p>
<h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h2>
<p>  原因知道了，解决方法其实很简单。只需要使用docker login登录即可。如果上面的目录中有config.json文件，则会更新，如果没有，则会生成一个新的。接着再使用docker push镜像就ok。下次push镜像的时候，也就不需要登录了。</p>
<p>登录:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@bogon]# docker login</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Login</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> with</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> your</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ID</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> and</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pull</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> images</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Hub.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> If</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> you</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> don't have a Docker ID, head over to https://hub.docker.com to create one.</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Username: liuchenyang</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Password: </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">WARNING! Your password will be stored unencrypted in /root/.docker/config.json.</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Configure a credential helper to remove this warning. See</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">https://docs.docker.com/engine/reference/commandline/login/#credentials-store</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Login Succeeded</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span><font color=red>注意</font></span></a></h2>
<p>一定要注意自己上传的时候镜像名称对不对，还有路径对不对，我这边解决这个问题之后还是会报这个错，找了半天才找出来，还有一个问题就是给镜像打包的时候名字有问题，因为我创建了一个liblarby，上传镜像的时候就多了一层目录，所以因为名字不正确（可以查看最上面的第一张图片），才会出现相同的报错，最后，重新push一下，就ok了。（tagname是你的镜像的版本号）</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> liuchenyang/mycentos:tagname</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161456163.png" alt="" loading="lazy"><br>
最后就可以看到我们的镜像存储库了。<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161456033.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161456470.jpeg" alt="" loading="lazy"></p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p><strong>相关文章：</strong></p>
<blockquote>
<p>①、<a href="https://blog.csdn.net/liu_chen_yang/article/details/124670946" target="_blank" rel="noopener noreferrer">Docker发布/上传镜像到dockerhub&amp;&amp;下载/拉取镜像&amp;&amp;删除dockerhub镜像</a><br>
②、<a href="https://blog.csdn.net/liu_chen_yang/article/details/124688952" target="_blank" rel="noopener noreferrer">Linux中安装/部署docker-compose</a><br>
③、<a href="https://blog.csdn.net/liu_chen_yang/article/details/124705622" target="_blank" rel="noopener noreferrer">Docker搭建harbor私有镜像仓库（命令行模式）</a><br>
④、<a href="https://blog.csdn.net/liu_chen_yang/article/details/124623482" target="_blank" rel="noopener noreferrer">Linux中基于Docker搭建harbor私有镜像仓库（超级详细）</a>🔥🔥</p>
</blockquote>
</div></template>


