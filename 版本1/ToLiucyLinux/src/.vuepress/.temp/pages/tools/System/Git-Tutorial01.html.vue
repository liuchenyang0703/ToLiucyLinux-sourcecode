<template><div><h2 id="✍、git图文使用教程说明" tabindex="-1"><a class="header-anchor" href="#✍、git图文使用教程说明" aria-hidden="true">#</a> ✍、Git图文使用教程说明</h2>
<ul>
<li>Git 版本： 2.31.0.windows.1</li>
<li>IDEA版本：2021.1</li>
<li>主要记录 git 的常用命令、IDEA 集成 git、git与GitHub、IDEA 集成 GitHub、Gitee等(详细图文步骤记录)</li>
<li>配套视频参考：<a href="https://www.bilibili.com/video/BV1vy4y1s7k6?from=search&amp;seid=12466209700058370854&amp;spm_id_from=333.337.0.0" target="_blank" rel="noopener noreferrer">【尚硅谷】5h打通Git全套教程<ExternalLinkIcon/></a></li>
</ul>
<h2 id="🤠一、git" tabindex="-1"><a class="header-anchor" href="#🤠一、git" aria-hidden="true">#</a> 🤠一、Git</h2>
<h3 id="😋1-1、概述" tabindex="-1"><a class="header-anchor" href="#😋1-1、概述" aria-hidden="true">#</a> 😋1.1、概述</h3>
<ul>
<li>Git是一个免费的、开源的分布式版本控制系统 ，可以快速高效地处理从小型到大型的各种项目</li>
<li>Git易于学习，占地面积小，性能 极快 。 它具有廉价的本地 库 ，方便的暂存区域和多个工作<br>
流分支等特性。 其性能优于 Subversion、 CVS、 Perforce和 ClearCase等 版本控制 工具。</li>
<li>官网地址：<a href="http://git-scm.com/" target="_blank" rel="noopener noreferrer">http://git-scm.com/<ExternalLinkIcon/></a></li>
</ul>
<h3 id="🤗1-2、版本控制" tabindex="-1"><a class="header-anchor" href="#🤗1-2、版本控制" aria-hidden="true">#</a> 🤗1.2、版本控制</h3>
<ul>
<li>版本控制是一种记录文件内容变化，以便来查阅特定版本修订情况的系统。</li>
<li>版本控制其实最重要的就是记录文件修改的历史记录，从而让用户能够查看历史版本，方便版本的切换。</li>
</ul>
<h4 id="💬1-2-1、-为什么需要版本控制" tabindex="-1"><a class="header-anchor" href="#💬1-2-1、-为什么需要版本控制" aria-hidden="true">#</a> 💬1.2.1、 为什么需要版本控制</h4>
<blockquote>
<p>个人开发过渡到团队协作。</p>
</blockquote>
<h3 id="🙈1-3、1-3、版本控制工具" tabindex="-1"><a class="header-anchor" href="#🙈1-3、1-3、版本控制工具" aria-hidden="true">#</a> 🙈1.3、1.3、版本控制工具</h3>
<ul>
<li>
<p>集中式版本控制工具</p>
<ul>
<li>CVS、SVN、VSS</li>
<li>集中化的版本控制系统诸如 CVS、SVN 等，都有一个单一的集中管理的服务器，保存所有文件的修订版本，而协同工作的人们都通过客户端连到这台服务器，取出最新的文件或者提交更新。多年以来，这已成为版本控制系统的标准做法。</li>
<li>这种做法带来了许多好处，每个人都可以在一定程度上看到项目中的其他人正在做些什么。而管理员也可以轻松掌控每个开发者的权限，并且管理一个集中化的版本控制系统，要远比在各个客户端上维护本地数据库来得轻松容易。</li>
<li>事分两面，有好有坏。这么做显而易见的缺点是中央服务器的单点故障。如果服务器宕机一小时，那么在这一小时内，谁都无法提交更新，也就无法协同工作。</li>
</ul>
</li>
<li>
<p><a href="https://so.csdn.net/so/search?q=%E5%88%86%E5%B8%83%E5%BC%8F&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">分布式<ExternalLinkIcon/></a>版本控制工具</p>
<ul>
<li>
<p>Git、Mercurial、Bazaar、Darcs……</p>
</li>
<li>
<p>像Git这种分布式版本控制工具 ，客户端提取的不 最新版本的文件快照，而是把代码仓库完整地镜像下</p>
<p>来 (本地库) 。这 样 任何一处协同工作用的文件发生故障，事后都可以用其他客户端的本地仓库进行 恢</p>
<p>复。因为每个客户端的每一次文件提取操作，实际上都是一次对整个文件仓库的完整备份 。</p>
</li>
</ul>
</li>
<li>
<p>分布式的版本控制系统出现之后 ，解决了集中版本控制的的缺陷：</p>
<ul>
<li>服务器断网的情况下也是可以进行本地开发 ，因为版本的控制是在本地进行的。</li>
<li>每个客户端保存的都是整个完整的项目，包含历史记录，更加安全。</li>
</ul>
</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710213958534.png" alt="image-20220710213958534" tabindex="0" loading="lazy"><figcaption>image-20220710213958534</figcaption></figure>
<h3 id="💯1-4、git简史" tabindex="-1"><a class="header-anchor" href="#💯1-4、git简史" aria-hidden="true">#</a> 💯1.4、Git简史</h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214006840.png" alt="image-20220710214006840" tabindex="0" loading="lazy"><figcaption>image-20220710214006840</figcaption></figure>
<h3 id="💜1-5、git工作机制" tabindex="-1"><a class="header-anchor" href="#💜1-5、git工作机制" aria-hidden="true">#</a> 💜1.5、Git工作机制</h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214014724.png" alt="image-20220710214014724" tabindex="0" loading="lazy"><figcaption>image-20220710214014724</figcaption></figure>
<h3 id="🌐1-6-git和代码托管中心" tabindex="-1"><a class="header-anchor" href="#🌐1-6-git和代码托管中心" aria-hidden="true">#</a> 🌐1.6 Git和代码托管中心</h3>
<blockquote>
<p>代码托管中心是基于网络服务器的远程代码仓库，一般我们简单称为<code v-pre>远程库</code>。</p>
</blockquote>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214026514.png" alt="image-20220710214026514" tabindex="0" loading="lazy"><figcaption>image-20220710214026514</figcaption></figure>
<h2 id="🍭二、git安装" tabindex="-1"><a class="header-anchor" href="#🍭二、git安装" aria-hidden="true">#</a> 🍭二、Git安装</h2>
<ul>
<li><a href="http://git-scm.com/" target="_blank" rel="noopener noreferrer">Git官网<ExternalLinkIcon/></a></li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214037457.png" alt="image-20220710214037457" tabindex="0" loading="lazy"><figcaption>image-20220710214037457</figcaption></figure>
<ul>
<li>查看GNU协议，可以直接点击下一步。</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214054965.png" alt="image-20220710214054965" tabindex="0" loading="lazy"><figcaption>image-20220710214054965</figcaption></figure>
<ul>
<li>选择Git安装位置，要求是非中文并且没有空格的目录，然后下一步。</li>
</ul>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214100408.png" alt="image-20220710214100408" style="zoom:67%;" />
<ul>
<li>Git选项配置，推荐默认设置，然后下一步。</li>
</ul>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214108013.png" alt="image-20220710214108013" style="zoom:67%;" />
<ul>
<li>Git安装目录名，不用修改，直接点击下一步。</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214138263.png" alt="image-20220710214138263" tabindex="0" loading="lazy"><figcaption>image-20220710214138263</figcaption></figure>
<ul>
<li>Git的默认编辑器，建议使用默认的Vim编辑器，然后点击下一步。</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214147301.png" alt="image-20220710214147301" tabindex="0" loading="lazy"><figcaption>image-20220710214147301</figcaption></figure>
<ul>
<li>默认分支名设置，选择让Git决定，分支名默认为master，下一步。</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214152677.png" alt="image-20220710214152677" tabindex="0" loading="lazy"><figcaption>image-20220710214152677</figcaption></figure>
<ul>
<li>
<p>修改Git的环境变量，选第一个，不修改环境变量，只在Git Bash里使用Git。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710223659129.png" alt="image-20220710223659129" tabindex="0" loading="lazy"><figcaption>image-20220710223659129</figcaption></figure>
</li>
<li>
<p>选择后台客户端连接协议，选默认值OpenSSL，然后下一步。</p>
</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214158758.png" alt="image-20220710214158758" tabindex="0" loading="lazy"><figcaption>image-20220710214158758</figcaption></figure>
<ul>
<li>配置Git文件的行末换行符，Windows使用CRLF，Linux使用LF，选择第一个自动转换，然后继续下一步。</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214214294.png" alt="image-20220710214214294" tabindex="0" loading="lazy"><figcaption>image-20220710214214294</figcaption></figure>
<ul>
<li>选择Git终端类型，选择默认的Git Bash终端，然后继续下一步。</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214224086.png" alt="image-20220710214224086" tabindex="0" loading="lazy"><figcaption>image-20220710214224086</figcaption></figure>
<ul>
<li>选择Git pull合并的模式，选择默认，然后下一步。</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710223728744.png" alt="image-20220710223728744" tabindex="0" loading="lazy"><figcaption>image-20220710223728744</figcaption></figure>
<ul>
<li>选择Git的凭据管理器，选择默认的跨平台的凭据管理器，然后下一步。</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214232039.png" alt="image-20220710214232039" tabindex="0" loading="lazy"><figcaption>image-20220710214232039</figcaption></figure>
<ul>
<li>其他配置，选择默认设置，然后下一步。</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710223812071.png" alt="image-20220710223812071" tabindex="0" loading="lazy"><figcaption>image-20220710223812071</figcaption></figure>
<ul>
<li>实验室功能，技术还不成熟，有已知的bug，不要勾选，然后点击右下角的Install按钮，开始安装Git。</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214237990.png" alt="image-20220710214237990" tabindex="0" loading="lazy"><figcaption>image-20220710214237990</figcaption></figure>
<ul>
<li>点击Finsh按钮，Git安装成功！</li>
</ul>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214246725.png" alt="image-20220710214246725" style="zoom:67%;" />
<ul>
<li>
<p>在Git Bash终端里输入git --version查看git版本，如图所示，说明Git安装成功。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214254005.png" alt="image-20220710214254005" tabindex="0" loading="lazy"><figcaption>image-20220710214254005</figcaption></figure>
</li>
</ul>
<h2 id="🌈三、git常用命令" tabindex="-1"><a class="header-anchor" href="#🌈三、git常用命令" aria-hidden="true">#</a> 🌈三、Git常用命令</h2>
<table>
<thead>
<tr>
<th><strong>命令名称</strong></th>
<th><strong>作用</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>git config --global <a href="http://user.name" target="_blank" rel="noopener noreferrer">user.name<ExternalLinkIcon/></a> 用户名</td>
<td>设置用户签名</td>
</tr>
<tr>
<td>git config --global user.eamil 邮箱</td>
<td>设置用户邮箱</td>
</tr>
<tr>
<td><strong>git init</strong></td>
<td><strong>初始化本地库</strong></td>
</tr>
<tr>
<td><strong>git status</strong></td>
<td><strong>查看本地库状态</strong></td>
</tr>
<tr>
<td><strong>git add 文件名</strong></td>
<td><strong>添加到暂存区</strong></td>
</tr>
<tr>
<td><strong>git commit m &quot; 日志信息 &quot; 文件名</strong></td>
<td><strong>提交到本地库</strong></td>
</tr>
<tr>
<td><strong>git reflog</strong></td>
<td><strong>查看历史记录</strong></td>
</tr>
<tr>
<td><strong>git reset hard 版本号</strong></td>
<td><strong>版本穿梭</strong></td>
</tr>
</tbody>
</table>
<h3 id="🚥3-1、设置用户签名" tabindex="-1"><a class="header-anchor" href="#🚥3-1、设置用户签名" aria-hidden="true">#</a> 🚥3.1、设置用户签名</h3>
<blockquote>
<p>基本语法</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name 用户名
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email 邮箱
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214312670.png" alt="image-20220710214312670" tabindex="0" loading="lazy"><figcaption>image-20220710214312670</figcaption></figure>
<p>并且在自己 <code v-pre>C:\Users\manman</code> 下有个 <code v-pre>.gitconfig</code> 文件，打开里面就是我们设置的用户签名</p>
<p><strong>说明</strong>：</p>
<p>签名的作用是区分不同操作者身份。用户的签名信息在每一个版本的提交信息中能够看到，以此确认本次提交是谁做的。<strong>Git首次安装必须设置一下用户签名，否则无法提交代码</strong>。</p>
<blockquote>
<p>注意：这里设置用户签名和将来登录 GitHub（或其他代码托管中心）的账号没有任何关系。</p>
</blockquote>
<h3 id="🏅3-2、初始化本地库" tabindex="-1"><a class="header-anchor" href="#🏅3-2、初始化本地库" aria-hidden="true">#</a> 🏅3.2、初始化本地库</h3>
<p>基本语法：<code v-pre>git init</code></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214321189.png" alt="image-20220710214321189" tabindex="0" loading="lazy"><figcaption>image-20220710214321189</figcaption></figure>
<h3 id="🎹3-3、查看本地库状态" tabindex="-1"><a class="header-anchor" href="#🎹3-3、查看本地库状态" aria-hidden="true">#</a> 🎹3.3、查看本地库状态</h3>
<p><strong>基本语法</strong>：<code v-pre>git status</code></p>
<ul>
<li>首次查看，工作区没有任何文件</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710221621358.png" alt="image-20220710221621358" tabindex="0" loading="lazy"><figcaption>image-20220710221621358</figcaption></figure>
<h4 id="📚3-3-1、新增文件" tabindex="-1"><a class="header-anchor" href="#📚3-3-1、新增文件" aria-hidden="true">#</a> 📚3.3.1、新增文件</h4>
<p><strong>语法</strong>：<code v-pre>vim hello.txt</code> ,然后按 i 键进入 INSERT，要想复制粘贴 ，需要先按 esc 键，之后 <code v-pre>yy</code> 复制，<code v-pre>p</code> 粘贴</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214330436.png" alt="image-20220710214330436" tabindex="0" loading="lazy"><figcaption>image-20220710214330436</figcaption></figure>
<blockquote>
<p>文件内容输入完毕，需要先按<code v-pre>:</code>,输入<code v-pre>wq</code>，然后才算完成新增文件，再次查看</p>
</blockquote>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214339664.png" alt="image-20220710214339664" tabindex="0" loading="lazy"><figcaption>image-20220710214339664</figcaption></figure>
<h3 id="🎁3-4、添加暂存区" tabindex="-1"><a class="header-anchor" href="#🎁3-4、添加暂存区" aria-hidden="true">#</a> 🎁3.4、添加暂存区</h3>
<h4 id="🍠3-4-1、将工作区的文件添加到暂存区" tabindex="-1"><a class="header-anchor" href="#🍠3-4-1、将工作区的文件添加到暂存区" aria-hidden="true">#</a> 🍠3.4.1、将工作区的文件添加到暂存区</h4>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214352405.png" alt="image-20220710214352405" tabindex="0" loading="lazy"><figcaption>image-20220710214352405</figcaption></figure>
<h3 id="🚀3-5、提交本地库" tabindex="-1"><a class="header-anchor" href="#🚀3-5、提交本地库" aria-hidden="true">#</a> 🚀3.5、提交本地库</h3>
<h3 id="🛸3-5-1、将工作区的文件提交到本地库" tabindex="-1"><a class="header-anchor" href="#🛸3-5-1、将工作区的文件提交到本地库" aria-hidden="true">#</a> 🛸3.5.1、将工作区的文件提交到本地库</h3>
<p><strong>基本语法</strong>：<code v-pre>git commit -m &quot;日志信息&quot; 文件名</code></p>
<figure><img src="https://cdn.jsdelivr.net/gh/gaoziman/bed/img/image-20220514113202750.png" alt="image-20220514113202750" tabindex="0" loading="lazy"><figcaption>image-20220514113202750</figcaption></figure>
<h3 id="⚡3-6、修改文件" tabindex="-1"><a class="header-anchor" href="#⚡3-6、修改文件" aria-hidden="true">#</a> ⚡3.6、修改文件</h3>
<p><strong>语法</strong>：<code v-pre>vim 文件名</code></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214400001.png" alt="image-20220710214400001" tabindex="0" loading="lazy"><figcaption>image-20220710214400001</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710221711666.png" alt="image-20220710221711666" tabindex="0" loading="lazy"><figcaption>image-20220710221711666</figcaption></figure>
<h3 id="🪁3-7、历史版本" tabindex="-1"><a class="header-anchor" href="#🪁3-7、历史版本" aria-hidden="true">#</a> 🪁3.7、历史版本</h3>
<h4 id="🎉3-7-1、查看历史版本" tabindex="-1"><a class="header-anchor" href="#🎉3-7-1、查看历史版本" aria-hidden="true">#</a> 🎉3.7.1、查看历史版本</h4>
<p>基本语法：</p>
<ul>
<li><code v-pre>git reflog</code> 查看版本信息</li>
<li><code v-pre>git log</code> 查看版本详细信息</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214408876.png" alt="image-20220710214408876" tabindex="0" loading="lazy"><figcaption>image-20220710214408876</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214419756.png" alt="image-20220710214419756" tabindex="0" loading="lazy"><figcaption>image-20220710214419756</figcaption></figure>
<p><strong>但是我们工作区的 hello.txt 始终只有一个文件存在</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214429733.png" alt="image-20220710214429733" tabindex="0" loading="lazy"><figcaption>image-20220710214429733</figcaption></figure>
<h3 id="🦀3-7-2、版本穿梭" tabindex="-1"><a class="header-anchor" href="#🦀3-7-2、版本穿梭" aria-hidden="true">#</a> 🦀3.7.2、版本穿梭</h3>
<p>语法：<code v-pre>git reset --hard 版本号</code></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214437222.png" alt="image-20220710214437222" tabindex="0" loading="lazy"><figcaption>image-20220710214437222</figcaption></figure>
<h3 id="⏰-3-8、切换版本原理" tabindex="-1"><a class="header-anchor" href="#⏰-3-8、切换版本原理" aria-hidden="true">#</a> ⏰ 3.8、切换版本原理</h3>
<p>Git 切换版本，底层其实是移动的HEAD 指针，具体原理如下图所示</p>
<p><strong>HEAD 指针指向 master 分支，master分支指向 first 版本，</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214446181.png" alt="image-20220710214446181" tabindex="0" loading="lazy"><figcaption>image-20220710214446181</figcaption></figure>
<p><strong>之后有了 second 版本，master 指针指向 second 版本</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214453766.png" alt="image-20220710214453766" tabindex="0" loading="lazy"><figcaption>image-20220710214453766</figcaption></figure>
<p><strong>之后有了third 版本，master 指针指向 third 版本</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214502382.png" alt="image-20220710214502382" tabindex="0" loading="lazy"><figcaption>image-20220710214502382</figcaption></figure>
<p><strong>如果我们想穿越回去，只需要让 master 指针指向 first 版本或者 second 版本</strong></p>
</div></template>


