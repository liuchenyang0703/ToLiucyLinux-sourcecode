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
<h2 id="一、下载、安装" tabindex="-1"><a class="header-anchor" href="#一、下载、安装" aria-hidden="true">#</a> 一、下载、安装</h2>
<h3 id="_1、下载地址" tabindex="-1"><a class="header-anchor" href="#_1、下载地址" aria-hidden="true">#</a> 1、下载地址</h3>
<blockquote>
<p>nodejs官网：<a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">https://nodejs.org/<ExternalLinkIcon/></a></p>
<p>nodejs官网下载地址：<a href="https://nodejs.org/download/" target="_blank" rel="noopener noreferrer">https://nodejs.org/download/<ExternalLinkIcon/></a></p>
<p>nodejs官网下载地址（V16.9.0直达）：<a href="https://nodejs.org/download/release/v16.9.0/" target="_blank" rel="noopener noreferrer">https://nodejs.org/download/release/v16.9.0/<ExternalLinkIcon/></a></p>
</blockquote>
<ul>
<li>根据自己的情况选择，我这里是<code v-pre>win X64位 </code></li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/f7eaea13ee8b5482f048062e86d6a0b7.png" alt="image-20240301112155985" tabindex="0" loading="lazy"><figcaption>image-20240301112155985</figcaption></figure>
<p>可以看到windows有两种格式的：msi zip格式的，这两者区别是什么呢？</p>
<blockquote>
<p><code v-pre>.msi</code>和<code v-pre>.zip</code>格式区别：<br>
<code v-pre>.msi</code>是Windows installer开发出来的程序安装文件，它可以让你安装，修改，卸载你所安装的程序。说白了<code v-pre>.msi</code>就是Windows installer的数据包，把所有和安装文件相关的内容封装在一个包里。此外：它还包含有关安装过程自己的信息。例如：安装序列、目标文件夹路径、安装选项和控制安装过程的属性。<br>
<code v-pre>.zip</code>是一个压缩包，解压之后即可，不需要安装。</p>
</blockquote>
<h3 id="_2、安装nodejs" tabindex="-1"><a class="header-anchor" href="#_2、安装nodejs" aria-hidden="true">#</a> 2、安装nodejs</h3>
<p>①、在自己电脑的任意位置创建一个英文目录，然后把包放进里面即可；我这里在E盘创建一个nodejs目录：<code v-pre>E:\nodejs</code>；</p>
<p>②、将下载的包放进来，双击<code v-pre>node-v16.9.0-x64.msi</code>运行安装；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/d8eaa6eac110b820a653358d3c7638c9.png" alt="image-20240301113442928" tabindex="0" loading="lazy"><figcaption>image-20240301113442928</figcaption></figure>
<p>到这选择安装路径，这个一定要记住，后面配置环境变量的时候用到，我就安装到<code v-pre>E:\nodejs</code>下；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/d9aef455c4b4bb232e1fff347bc87714.png" alt="image-20240301113529882" tabindex="0" loading="lazy"><figcaption>image-20240301113529882</figcaption></figure>
<p>直接下一步即可，默认会自动配置环境变量；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/4b2dc54eae8b949d61da6a42393d28a3.png" alt="image-20240301113703486" tabindex="0" loading="lazy"><figcaption>image-20240301113703486</figcaption></figure>
<p>这个中间的框勾不勾都可以，看自己情况，我没勾；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/809acf4a8f09a661ffeabec56933c21f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>然后安装即可；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/d5ec392dbc2d4f28ca4f9514dec87781.png" alt="image-20240301113843034" tabindex="0" loading="lazy"><figcaption>image-20240301113843034</figcaption></figure>
<p>点击 Finish（完成）按钮退出安装向导，完成安装。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/50e271680788a1077a36620e4bb22493.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<hr>
<h3 id="_3、验证nodejs安装是否成功" tabindex="-1"><a class="header-anchor" href="#_3、验证nodejs安装是否成功" aria-hidden="true">#</a> 3、验证nodejs安装是否成功</h3>
<p>至此，node就已经安装成功了，我们来验证一下；<br>
<code v-pre>win + r </code>打开命令行，输入<code v-pre>cmd</code>进入命令行；执行<code v-pre>node -v </code>和<code v-pre>npm -v</code>查看nodejs版本；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/4ef8f3e555317a7d5cc37f1647a813d0.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以看到已经成功安装了；</p>
<blockquote>
<p>如果执行<code v-pre>node -v </code>和<code v-pre>npm -v</code>没有反应的话可能就是环境变量没有配置，本文的安装默认会自动配置，但有的就不会，就需要手动配置以下，如何配置我们可以查看：<a href="#click_me_jump">配置nodejs环境变量</a>；</p>
</blockquote>
<h2 id="二、环境配置及优化" tabindex="-1"><a class="header-anchor" href="#二、环境配置及优化" aria-hidden="true">#</a> 二、环境配置及优化</h2>
<h3 id="_1、设置npm全局模块目录和缓存目录" tabindex="-1"><a class="header-anchor" href="#_1、设置npm全局模块目录和缓存目录" aria-hidden="true">#</a> 1、设置npm全局模块目录和缓存目录</h3>
<p>默认情况下全局安装某个工具或者包时是全局安装到C盘的，占用C盘空间，其实我们可以修改默认安装的路径；<br>
我们可以先使用以下命令来看默认安装的位置；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> config <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p><code v-pre>prefix</code>就是默认安装的位置；</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/385ef20d853e131028bb6c74fb97b5ab.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>接下来我们就需要修改默认安装的路径；</p>
<h4 id="_1-1-修改npm默认安装的路径" tabindex="-1"><a class="header-anchor" href="#_1-1-修改npm默认安装的路径" aria-hidden="true">#</a> 1.1 修改npm默认安装的路径</h4>
<p>首先在nodejs安装的目录下创建两个目录：<code v-pre>node_global（npm全局模块目录）</code>、<code v-pre>node_cache（缓存）</code>；<br>
创建完之后再在<code v-pre>node_global</code>目录下创建一个<code v-pre>node_modules</code>目录；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/b9a349e53e9464e53ff5397f0fea73ab.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_1-2-配置环境变量" tabindex="-1"><a class="header-anchor" href="#_1-2-配置环境变量" aria-hidden="true">#</a> 1.2 配置环境变量</h4>
<p>此电脑 --&gt; 属性 --&gt; 高级系统设置</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/bf9d4e5009a5e5332d4d21c9a59b742f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>环境变量 --&gt; 系统变量</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/27e801789f895789f4e9d29b125b3882.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>在系统变量中新建一个<code v-pre>NODE_PATH</code>变量，变量值就是之前在nodejs安装路径下创建的<code v-pre>node_golbal</code>下的<code v-pre>node_modules</code>（注意：填写的是自己的路径）</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/d1bdf133ba37269333595532d212478a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><span id="click_me_jump">配置nodejs环境变量：</span><br>
新建完点击确定，我们再找一下系统变量的<code v-pre>Path</code>；查看一下nodejs环境变量是否存在；本文是安装在<code v-pre>E:\nodejs</code>下（请根据自己的安装路径查看是否正确），正常情况在安装服务时系统默认会自动配置好的。如果没有需要自己手动配置，新建添加，值便是nodejs的安装路径；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/f0d2fadd5195c704875684b98f5633b6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>完成之后点击确定，我们在给普通用户配置一下；<br>
双击普通用户下的<code v-pre>Path</code>，进入编辑页新建一个变量， 值就是安装<code v-pre>nodejs</code>根路径下刚刚创建的<code v-pre>node_global</code>目录；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/e29af7d73277fdd8df6f342c604406de.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>完成之后一直点击确定直到退出到桌面；</p>
<h4 id="_1-3-修改缓存路径" tabindex="-1"><a class="header-anchor" href="#_1-3-修改缓存路径" aria-hidden="true">#</a> 1.3 修改缓存路径</h4>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 修改方法1：</label></li>
</ul>
<p><code v-pre>win + r</code>打开命令行，执行以下代码（后面的路径是实际刚刚新建的两个目录的路径）；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> prefix <span class="token string">"E:<span class="token entity" title="\n">\n</span>odejs<span class="token entity" title="\n">\n</span>ode_global"</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> cache <span class="token string">"E:<span class="token entity" title="\n">\n</span>odejs<span class="token entity" title="\n">\n</span>ode_cache"</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改完之后通过以下命令查看是否配置成功；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> config get prefix

<span class="token function">npm</span> config get cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/f07767f0c9c3529c357857459f736f5e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>也可以通过<code v-pre>npm config ls</code>查看路径是否修改成功；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> config <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/54ecc635efb3b9432b3f52e2607c8f5e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以看到已经修改成功。</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 修改方法2：</label></li>
</ul>
<p>打开此电脑C盘，点击进入<code v-pre>用户</code>目录，再点击进入<code v-pre>user</code>用户（自己的用户）目录，可以看到会有一个名为<code v-pre>.npmrc</code>的文件，用记事本打开添加以下内容；当然使用第一种方法修改之后，在这里也是可以看到的；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token assign-left variable">prefix</span><span class="token operator">=</span>E:<span class="token punctuation">\</span>nodejs<span class="token punctuation">\</span>node_global
<span class="token assign-left variable">cache</span><span class="token operator">=</span>E:<span class="token punctuation">\</span>nodejs<span class="token punctuation">\</span>node_cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/4f454227bb67a261dfe9f33cb6d358cb.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_2、修改npm默认源为淘宝源" tabindex="-1"><a class="header-anchor" href="#_2、修改npm默认源为淘宝源" aria-hidden="true">#</a> 2、修改npm默认源为淘宝源</h3>
<p>默认源为：<code v-pre>https://registry.npmjs.org</code></p>
<p>同样的使用<code v-pre>win + r</code>打开命令行，输入以下代码：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>即可修改成功，查看npm源是否更换：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> config get registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/44f067cd493dd49cc313a9b17aa5a274.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以看到源已经更新为淘宝源。</p>
<hr>
<p>如果是使用指定淘宝源更新的，如下：</p>
<blockquote>
<p>将cnpm改为自己要安装的模块就行</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> cnpm <span class="token parameter variable">--registry</span><span class="token operator">=</span>https://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解析：</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>解析</th>
</tr>
</thead>
<tbody>
<tr>
<td>npm install</td>
<td>是安装的意思</td>
</tr>
<tr>
<td>-g</td>
<td>是指全局安装</td>
</tr>
<tr>
<td>cnpm</td>
<td>是安装的包</td>
</tr>
<tr>
<td>--registry</td>
<td>是指定安装的镜像源</td>
</tr>
</tbody>
</table>
<blockquote>
<p>安装的时候尽量使用管理员安装</p>
</blockquote>
<p>如果安装时遇到此报错，是因为证书过期；可以尝试取消ssl证书验证：<code v-pre>npm config set strict-ssl false</code>；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/dcf9286cfb344f63be0762769156a10e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>取消之后再次安装就可以了；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/950145d7d1344540afd7737aba7af028.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="三、测试-安装的时候记得使用管理员启动cmd窗口" tabindex="-1"><a class="header-anchor" href="#三、测试-安装的时候记得使用管理员启动cmd窗口" aria-hidden="true">#</a> 三、测试（安装的时候记得使用管理员启动cmd窗口）</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i @vue/cli <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/435370e7e3b3d715c9018c45037858e5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>安装完之后看自己配置的安装路径下：<code v-pre>E:\nodejs\node_global\node_modules</code>目录，可以看到多了一个<code v-pre>@vue</code>目录；</p>
<h3 id="常见报错1-ssl证书报错" tabindex="-1"><a class="header-anchor" href="#常见报错1-ssl证书报错" aria-hidden="true">#</a> 常见报错1：ssl证书报错</h3>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/03faae74ec7b541f32b199cead79df4c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>如果遇到以上报错，这是ssl证书过期问题，可以尝试取消ssl证书验证：<code v-pre>npm config set strict-ssl false</code>；取消之后再次安装；</p>
<h3 id="常见报错2-没有权限安装" tabindex="-1"><a class="header-anchor" href="#常见报错2-没有权限安装" aria-hidden="true">#</a> 常见报错2：没有权限安装</h3>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/9eeca0e1f701b9bf96a36e54c9560db4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>如果遇到此报错，是因为没有使用管理员用户运行，需要使用管理员安装；</p>
<hr>
<hr>
<p>至此，nodejs就已经安装完成了！！！</p>
</div></template>


