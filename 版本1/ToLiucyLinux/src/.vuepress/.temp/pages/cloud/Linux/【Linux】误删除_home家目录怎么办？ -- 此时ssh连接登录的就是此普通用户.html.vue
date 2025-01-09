<template><div><figure><img src="https://img-blog.csdnimg.cn/7c8ab0d2b03646689642e9d82cea32d2.jpeg" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<blockquote>
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
<h1 id="前言-误删经过" tabindex="-1"><a class="header-anchor" href="#前言-误删经过" aria-hidden="true">#</a> 前言 / 误删经过</h1>
<blockquote>
<p>因为服务器是禁用了root的<code v-pre>ssh连接方式</code>的，所以一直都是使用普通用户登录，如果需要其他root权限操作就会提权操作或者切换root进行操作；<br>
突然有一天，（具体我也不知道在干啥）不小心吧/home/下的普通用户目录删了（当然，不是我操作的），导致我登录进来找不到家目录了，就变成-bash了；虽然可以登录上来，但是上面会提示一行找不到家目录，导致操作没有权限等等一些问题，所以这个问题还是要解决的；</p>
</blockquote>
<blockquote>
<p><strong><font color=red>提示：此方法仅适用于家目录没有存放任何文件的；</font></strong></p>
</blockquote>
<h1 id="ssh连接登录报错信息" tabindex="-1"><a class="header-anchor" href="#ssh连接登录报错信息" aria-hidden="true">#</a> ssh连接登录报错信息</h1>
<p>报错信息为：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Could not chdir to home directory /home/test1: No such <span class="token function">file</span> or directory<span class="token operator">&lt;</span>br<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/47c1aff6d0d2462083d9ce100dbac4cb.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="问题排查" tabindex="-1"><a class="header-anchor" href="#问题排查" aria-hidden="true">#</a> 问题排查</h1>
<p>此报错是因为找不到<code v-pre>/home/test1</code>这样的文件或者目录，报这个错怎么做呢？</p>
<blockquote>
<p>首先，我们<code v-pre>ls /home</code>看一下是没有test1这个家目录。</p>
</blockquote>
<figure><img src="https://img-blog.csdnimg.cn/0b8868b4a1b44e0697f6f7afc169cc8d.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>可以看到是没有的，那么可以判定是被误删或者是移动到其他地方了，导致ssh使用普通用户连接找不到家目录，才会报错。</p>
<blockquote>
<p><strong>问</strong>：<font color=orange>那么，如何解决呢？</font><br>
<strong>答</strong>：<font color=gree>其实很简单：<br>
  1、如果你是开发人员，用的普通用户，可以找运维人员或者持有root用户的人员帮你在创建一个用户，把创建的哪个用户的家目录，复制一份修改一下家目录名、用户和用户组即可；<br>
  2、如果自己可以直接进入root，那就在创建一个用户，把创建的哪个用户的家目录，复制一份修改一下家目录名、用户和用户组即可；<br></font><br>
那么问题又来了：<br>
<strong>问</strong>：<font color=orange>为什么不直接创建一个目录呢？看着里面是个空文件？</font><br>
<strong>答</strong>：<font color=gree>因为你看到的只是表面，家目录<code v-pre>ls</code> 看着是空文件，但事实上，它是有隐藏文件的，不仅linux上有，windows上也有隐藏文件，我们需要使用<code v-pre>ls -a</code>看一下，即可看到隐藏文件；隐藏文件一般都是一些配置，而且是必须的，如果没有这些文件，那么就算创建一个空目录也是无用的。所以，要重新创建一个用户，然后把家目录复制一份，修改一下家目录名、用户和用户组即可；</font></p>
</blockquote>
<h1 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h1>
<blockquote>
<p>  解决方法其实有很多种，比如用什么命令恢复之类的，这些我没有尝试，因为这个比较简单点，而且是个空目录，所以没必要用那么复杂的工具来恢复；<br>
  如果家目录里有其他的文件，那么这时候就需要用到工具了。</p>
</blockquote>
<h2 id="_1、先切换到root用户" tabindex="-1"><a class="header-anchor" href="#_1、先切换到root用户" aria-hidden="true">#</a> 1、先切换到root用户</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>-bash-4.2$ <span class="token function">su</span> -
密码：
上一次登录：四 <span class="token number">11</span>月 <span class="token number">23</span> <span class="token number">16</span>:51:46 CST 2023pts/1 上
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、添加一个新用户" tabindex="-1"><a class="header-anchor" href="#_2、添加一个新用户" aria-hidden="true">#</a> 2、添加一个新用户</h2>
<p>随便添加一个新用户</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 添加一个新用户</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># useradd test2</span>
<span class="token comment"># 加密码</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># passwd test2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果设置的有切换root免密登录，需要自己使用<code v-pre>visudo</code>去添加登录权限；</p>
<h2 id="_3、将新创建的用户的家目录复制一个出来名字为误删掉的那个" tabindex="-1"><a class="header-anchor" href="#_3、将新创建的用户的家目录复制一个出来名字为误删掉的那个" aria-hidden="true">#</a> 3、将新创建的用户的家目录复制一个出来名字为误删掉的那个</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cd /home/</span>
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># ls</span>
test2
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># cp -ar test2/ test1</span>
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># ls</span>
test1  test2
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候复制了一个，但是，还没完成；<br>
我们看一下复制的用户、用户组所属：<code v-pre>ll</code></p>
<figure><img src="https://img-blog.csdnimg.cn/c41bb581cab14f49af305df04c65b5c2.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>可以看到都是test2，这时候我们需要修改一下目录的<code v-pre>用户</code>和<code v-pre>用户组</code>所属；</p>
<h2 id="_4、修改目录的用户和用户组所属" tabindex="-1"><a class="header-anchor" href="#_4、修改目录的用户和用户组所属" aria-hidden="true">#</a> 4、修改目录的用户和用户组所属</h2>
<blockquote>
<p>前提是用户、用户组不能被删除。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 给test1目录配置用户、用户组</span>
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># chown -R test1:test1 test1/</span>
<span class="token comment"># 查看</span>
<span class="token punctuation">[</span>root@localhost home<span class="token punctuation">]</span><span class="token comment"># ll</span>
总用量 <span class="token number">0</span>
drwx------ <span class="token number">2</span> test1 test1 <span class="token number">62</span> <span class="token number">11</span>月 <span class="token number">23</span> <span class="token number">16</span>:57 test1
drwx------ <span class="token number">2</span> test2 test2 <span class="token number">62</span> <span class="token number">11</span>月 <span class="token number">23</span> <span class="token number">16</span>:57 test2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到设置成功了，这时候我们就可以继续使用普通用户登录了；</p>
<figure><img src="https://img-blog.csdnimg.cn/ea42b7d95d314105b7b5f16e850f46e2.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>可以看到登录成功了。</p>
<h1 id="解决完成" tabindex="-1"><a class="header-anchor" href="#解决完成" aria-hidden="true">#</a> 解决完成</h1>
</div></template>


