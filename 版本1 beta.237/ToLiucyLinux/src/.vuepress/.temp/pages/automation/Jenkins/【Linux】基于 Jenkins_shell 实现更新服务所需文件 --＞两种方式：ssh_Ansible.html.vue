<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/018aee30d8ea4271888ad311a6a34ddd.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
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
<h2 id="前提" tabindex="-1"><a class="header-anchor" href="#前提" aria-hidden="true">#</a> 前提：</h2>
<ul>
<li>需要安装好Jenkins</li>
</ul>
<p><a href="https://liucy.blog.csdn.net/article/details/127202910" target="_blank" rel="noopener noreferrer">【Linux】部署Jenkins（简介及详细教程【war包部署】）<ExternalLinkIcon/></a></p>
<p><a href="https://liucy.blog.csdn.net/article/details/127883522" target="_blank" rel="noopener noreferrer">【Linux】Docker 搭建 Jenkins<ExternalLinkIcon/></a></p>
<blockquote>
<p>Jenkins专栏：<a href="https://blog.csdn.net/liu_chen_yang/category_12493057.html?spm=1001.2014.3001.5482" target="_blank" rel="noopener noreferrer">Jenkins专栏<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="一、新建一个item" tabindex="-1"><a class="header-anchor" href="#一、新建一个item" aria-hidden="true">#</a> 一、新建一个Item</h2>
<blockquote>
<p>新建 Item --&gt; 选择<strong>Freestyle project</strong> --&gt; 自己起一个名字 --&gt;确定</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/edf31fc760ff4b778edcf137a2aa3924.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="二、增加一个构建步骤并填写构建内容" tabindex="-1"><a class="header-anchor" href="#二、增加一个构建步骤并填写构建内容" aria-hidden="true">#</a> 二、增加一个构建步骤并填写构建内容</h2>
<blockquote>
<p>翻到最下面，找到 <strong>Build Steps</strong> --&gt; Execute shell</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/84de0cb3953e49af92ad57da2ded9165.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>在这里写shell脚本就行，需要执行什么和linux上执行一样的；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/998426455d79425984f47c7d5e0cad71.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>先使用一条命令来测试一下，自己随便输入那条命令都可以；这里我写一个<code v-pre>ls /root/</code>命令；</p>
<p>写完之后点击<code v-pre>保存</code>；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/71be279c3b304f61861a5d0a2768776a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="三、构建一个简易的项目" tabindex="-1"><a class="header-anchor" href="#三、构建一个简易的项目" aria-hidden="true">#</a> 三、构建一个简易的项目</h2>
<p>保存完毕之后，点击左边的<code v-pre>Build Now</code>构建项目；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/81bcab819c8d4afd9dbabdae9b138f00.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这样就构建完了，我们可以查看构建日志；<br>
直接点击构建成功的那个位置，或者后面有个小三角，在点击<code v-pre>控制台输出</code></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/5b1d08fb5d314a1c9719fe8e8bc0becb.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这块就输出了刚刚执行的脚本日志了；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/c2d3a533cce148f69f5d9c76c2a64b0a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这样，自定义构建项目就完成了；</p>
<p>如果需要更改配置，可以点击上面的项目名称 --&gt; 然后左边的配置 --&gt; 接着给shell即可；</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/80efef8e4d2d4a0cad8d85a0389994ce.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/60f8d38198d94e5d892dc1676fd1e83c.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/2293180a1c6c49dc98e68fdeaf272997.png" alt="" loading="lazy"></p>
<p>这样完整的一个使用shell脚本自定义构建项目就完成了；这只是一个简单的列子，接下来，我们讲解：<strong>使用Jenkins更新服务jar包</strong>。</p>
<h2 id="四、使用-jenkins-更新本地的一个jar包" tabindex="-1"><a class="header-anchor" href="#四、使用-jenkins-更新本地的一个jar包" aria-hidden="true">#</a> 四、使用 Jenkins 更新本地的一个jar包</h2>
<p>还是和前两部一样，先新建一个Item，在增加一个构建步骤并填写构建内容；最主要是shell脚本里的内容；</p>
<p>这里给大家写一个示例：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 本机jar包路径（路径可以自己定义）</span>
<span class="token assign-left variable">src_jar_path</span><span class="token operator">=</span><span class="token string">"/root/a.jar"</span>

<span class="token comment"># 远程JAR包路径（路径可以自己定义）</span>
<span class="token assign-left variable">dest_jar_path</span><span class="token operator">=</span><span class="token string">"/home/lcy/cs/a.jar"</span>

<span class="token comment"># 创建目标路径（没有则创建，有则跳过）</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/lcy/cs/

<span class="token comment"># 备份jar包,替换jar包；先判断有没有这个文件，如果有则备份文件并复制新的文件过去；如果没有直接复制新的文件过去，并提示；</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> <span class="token variable">$dest_jar_path</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token function">mv</span> <span class="token variable">$dest_jar_path</span> <span class="token variable">$dest_jar_path</span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +<span class="token string">"%Y-%m-%d"</span><span class="token variable">)</span></span>
	<span class="token function">cp</span> <span class="token parameter variable">-ar</span> <span class="token variable">$src_jar_path</span> <span class="token variable">$dest_jar_path</span>
<span class="token keyword">else</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"目标路径没有这个文件"</span>
	<span class="token function">cp</span> <span class="token parameter variable">-ar</span> <span class="token variable">$src_jar_path</span> <span class="token variable">$dest_jar_path</span>
<span class="token keyword">fi</span>

<span class="token comment"># 复制完之后，自己加一下启动命令即可；</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写完之后，点击保存，并构建；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/3425b55baac74eb29bea84cf06e567d4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>完成之后可以查看一下服务器上有没有这个jar包了；可以看到没问题；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/a8622b95e4ed47ea8d846eb38c59d23e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>那么在执行一下，就会备份这个，然后在拿一个新的jar包过来；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/77c50639741d40cea789dceee44b1fd3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以看到将之前的备份了，然后有拉来一个新的jar包；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/fe8e63cd407941559fce476c9199ab58.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这样就实现更新操作了，不过这只是本机更新，要想其他服务器也更新我们就需要去配置；</p>
<h2 id="五、使用-jenkins-更新多台服务器jar包" tabindex="-1"><a class="header-anchor" href="#五、使用-jenkins-更新多台服务器jar包" aria-hidden="true">#</a> 五、使用 Jenkins 更新多台服务器jar包</h2>
<p>还是和前两部一样，先新建一个Item，在增加一个构建步骤并填写构建内容；最主要是shell脚本里的内容；</p>
<p>更新多台服务器和更新一台不一样，需要去链接其他的服务器，进行更新；<br>
这里有两种方法：</p>
<ul>
<li>一种是使用密钥实现要更新的服务器之间免密，在进行更新；</li>
<li>还有一种就是使用 ansible 技术实现远程登陆更新；</li>
</ul>
<h3 id="_5-1-使用密钥方式对服务器之间进行免密登录设置" tabindex="-1"><a class="header-anchor" href="#_5-1-使用密钥方式对服务器之间进行免密登录设置" aria-hidden="true">#</a> 5.1 使用密钥方式对服务器之间进行免密登录设置</h3>
<h4 id="_5-1-1-首先-创建私有-ssh-keygen密钥" tabindex="-1"><a class="header-anchor" href="#_5-1-1-首先-创建私有-ssh-keygen密钥" aria-hidden="true">#</a> 5.1.1 首先，创建私有 SSH-Keygen密钥</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一直回车即可；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/06a04bf950fd4ea985de3a3868e9cce9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_5-1-2-上传-ssh-密钥" tabindex="-1"><a class="header-anchor" href="#_5-1-2-上传-ssh-密钥" aria-hidden="true">#</a> 5.1.2 上传 SSH 密钥</h4>
<p>从服务器 172.16.10.232 使用 SSH，并在服务器 172.16.10.224 的 root 的 .ssh 目录下上传新生成的公钥（id_rsa.pub），文件名为<code v-pre>authorized_keys</code>。</p>
<p>给本地和其他电脑都上传上公钥；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ssh-copy-id root@172.16.10.232
ssh-copy-id root@172.16.10.224
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>需要输入服务器密码，都输入一下即可；</p>
<h4 id="_5-1-3-测试几台服务器传文件是否需要密码" tabindex="-1"><a class="header-anchor" href="#_5-1-3-测试几台服务器传文件是否需要密码" aria-hidden="true">#</a> 5.1.3 测试几台服务器传文件是否需要密码</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">scp</span> jdk-18.0.2.1.zip root@172.16.10.232:/home/lcy/cs/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/c7987d5fff094dbb9b11cf3ec8eefca4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以看到是不需要的；所以免密就成功了；</p>
<h4 id="_5-1-4-设置jenkins-中的shell脚本-实现多台服务器更新操作" tabindex="-1"><a class="header-anchor" href="#_5-1-4-设置jenkins-中的shell脚本-实现多台服务器更新操作" aria-hidden="true">#</a> 5.1.4 设置Jenkins 中的shell脚本，实现多台服务器更新操作</h4>
<p>还是和前两部一样，先新建一个Item，在增加一个构建步骤并填写构建内容；最主要是shell脚本里的内容；</p>
<p>这里我给大家写一下我的执行的内容（示例）；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 服务器列表（这里写的是ip地址）</span>
<span class="token assign-left variable">servers</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">"server1"</span> <span class="token string">"server2"</span> <span class="token string">"server3"</span><span class="token punctuation">)</span>

<span class="token comment"># 本机jar包路径（路径可以自己定义）</span>
<span class="token assign-left variable">src_jar_path</span><span class="token operator">=</span><span class="token string">"/root/a.jar"</span>

<span class="token comment"># 远程JAR包路径（路径可以自己定义）</span>
<span class="token assign-left variable">dest_jar_path</span><span class="token operator">=</span><span class="token string">"/home/lcy/cs/a.jar"</span>

<span class="token comment"># 创建目标路径（没有则创建，有则跳过）</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/lcy/cs/


<span class="token comment"># 循环远程执行命令</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">server</span> <span class="token keyword">in</span> <span class="token string">"<span class="token variable">${servers<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>"</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
<span class="token comment"># 备份jar包,替换jar包；先判断有没有这个文件，如果有则备份文件并复制新的文件过去；如果没有直接复制新的文件过去，并提示；</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> <span class="token variable">$dest_jar_path</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
		<span class="token function">ssh</span> root@<span class="token variable">$server</span> <span class="token string">"mv <span class="token variable">$dest_jar_path</span> <span class="token variable">$dest_jar_path</span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +<span class="token string">"%Y-%m-%d"</span><span class="token variable">)</span></span>"</span>
		<span class="token function">scp</span> <span class="token variable">$src_jar_path</span> root@<span class="token variable">$server</span><span class="token builtin class-name">:</span><span class="token variable">$dest_jar_path</span>
	<span class="token keyword">else</span>
		<span class="token builtin class-name">echo</span> <span class="token string">"目标路径没有这个文件"</span>
		<span class="token function">scp</span> <span class="token variable">$src_jar_path</span> root@<span class="token variable">$server</span><span class="token builtin class-name">:</span><span class="token variable">$dest_jar_path</span>
	<span class="token keyword">fi</span>
<span class="token keyword">done</span>

<span class="token comment"># 复制完之后，自己加一下启动命令即可；</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写完shell之后，点击构建；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/4631168c36b64fd7998c6ef96d0490ad.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>构建完成，查看其他服务器是否上传成功，如果成功了，那么就没问题了，我这里是测试了两台，都上传了，成功了。</p>
<h3 id="_5-2-使用-ansible-服务实现对服务器之间进行操作" tabindex="-1"><a class="header-anchor" href="#_5-2-使用-ansible-服务实现对服务器之间进行操作" aria-hidden="true">#</a> 5.2 使用 Ansible 服务实现对服务器之间进行操作</h3>
<p>更多Ansible服务的信息请参考：<a href="https://liucy.blog.csdn.net/article/details/133772023" target="_blank" rel="noopener noreferrer">Ansible自动化运维（二）ad-hoc 模式详解<ExternalLinkIcon/></a></p>
<h4 id="_5-2-1-首先-需要安装-ansible服务" tabindex="-1"><a class="header-anchor" href="#_5-2-1-首先-需要安装-ansible服务" aria-hidden="true">#</a> 5.2.1 首先，需要安装 Ansible服务</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> ansible
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_5-2-2-配置-ansible的hosts" tabindex="-1"><a class="header-anchor" href="#_5-2-2-配置-ansible的hosts" aria-hidden="true">#</a> 5.2.2 配置 Ansible的hosts</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost cs<span class="token punctuation">]</span><span class="token comment"># cat /etc/ansible/hosts</span>
<span class="token comment"># 在最后追加服务器信息如下：</span>

<span class="token punctuation">[</span>server1<span class="token punctuation">]</span>
<span class="token number">172.16</span>.10.*** <span class="token assign-left variable">ansible_ssh_port</span><span class="token operator">=</span><span class="token number">22</span> <span class="token assign-left variable">ansible_ssh_user</span><span class="token operator">=</span>root <span class="token assign-left variable">ansible_ssh_pass</span><span class="token operator">=</span><span class="token string">'******'</span>

<span class="token punctuation">[</span>server2<span class="token punctuation">]</span>
<span class="token number">172.16</span>.10.*** <span class="token assign-left variable">ansible_ssh_port</span><span class="token operator">=</span><span class="token number">22</span> <span class="token assign-left variable">ansible_ssh_user</span><span class="token operator">=</span>root <span class="token assign-left variable">ansible_ssh_pass</span><span class="token operator">=</span><span class="token string">'******'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多Ansible服务的信息请参考：<a href="https://liucy.blog.csdn.net/article/details/133772023" target="_blank" rel="noopener noreferrer">Ansible自动化运维（二）ad-hoc 模式详解<ExternalLinkIcon/></a></p>
<p>这样Ansible的配置就完成了，这里我们使用ad-hoc模式就行；</p>
<h4 id="_5-2-3-测试服务器之间是否互通" tabindex="-1"><a class="header-anchor" href="#_5-2-3-测试服务器之间是否互通" aria-hidden="true">#</a> 5.2.3 测试服务器之间是否互通</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ansible server1 <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">"ls /root/"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/e669232a194f4369a29ba9b823574ed6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以查到，没问题。</p>
<h4 id="_5-3-4-设置jenkins-中的shell脚本-实现多台服务器更新操作" tabindex="-1"><a class="header-anchor" href="#_5-3-4-设置jenkins-中的shell脚本-实现多台服务器更新操作" aria-hidden="true">#</a> 5.3.4 设置Jenkins 中的shell脚本，实现多台服务器更新操作</h4>
<p>还是和前两部一样，先新建一个Item，在增加一个构建步骤并填写构建内容；最主要是shell脚本里的内容；</p>
<p>这里我给大家写一下我的执行的内容（示例）；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 服务器列表（这里写的是ansible中配置的主机组名）</span>
<span class="token assign-left variable">servers</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">"server1"</span> <span class="token string">"server2"</span><span class="token punctuation">)</span>

<span class="token comment"># 本机jar路径（路径可以自己定义）</span>
<span class="token assign-left variable">src_jar_path</span><span class="token operator">=</span><span class="token string">"/root/a.jar"</span>

<span class="token comment"># 远程JAR包路径（路径可以自己定义）</span>
<span class="token assign-left variable">dest_jar_path</span><span class="token operator">=</span><span class="token string">"/home/lcy/cs/a.jar"</span>

<span class="token comment"># 创建目标路径（没有则创建，有则跳过）</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/lcy/cs/

<span class="token comment"># 循环远程执行命令</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">server</span> <span class="token keyword">in</span> <span class="token string">"<span class="token variable">${servers<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>"</span><span class="token punctuation">;</span><span class="token keyword">do</span>
<span class="token comment"># 备份jar包,替换jar包；先判断有没有这个文件，如果有则备份文件并复制新的文件过去；如果没有直接复制新的文件过去，并提示；</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> <span class="token variable">$dest_jar_path</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
			ansible <span class="token variable">$server</span> <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">"mv <span class="token variable">$dest_jar_path</span> <span class="token variable">$dest_jar_path</span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +<span class="token string">"%Y-%m-%d"</span><span class="token variable">)</span></span>;"</span>
	        ansible <span class="token variable">$server</span> <span class="token parameter variable">-m</span> copy <span class="token parameter variable">-a</span> <span class="token string">"src=<span class="token variable">$src_jar_path</span> dest=<span class="token variable">$dest_jar_path</span>"</span>
    <span class="token keyword">else</span>
    		<span class="token builtin class-name">echo</span> <span class="token string">"没有这个文件，没有必要备份"</span><span class="token punctuation">;</span>
			ansible <span class="token variable">$server</span> <span class="token parameter variable">-m</span> copy <span class="token parameter variable">-a</span> <span class="token string">"src=<span class="token variable">$src_jar_path</span> dest=<span class="token variable">$dest_jar_path</span>"</span>
	<span class="token keyword">fi</span>
<span class="token keyword">done</span>

<span class="token comment"># 复制完之后，自己加一下启动命令即可；</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写完shell之后，点击构建；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/3243a5e0d4134da984ae842163cabc22.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>构建完成，查看其他服务器是否上传成功，如果成功了，那么就没问题了，我这里是测试了两台，都上传了，成功了。</p>
<h2 id="六、成功实现文件更新" tabindex="-1"><a class="header-anchor" href="#六、成功实现文件更新" aria-hidden="true">#</a> 六、成功实现文件更新</h2>
</div></template>


