<template><div><h2 id="✍、git图文使用教程说明" tabindex="-1"><a class="header-anchor" href="#✍、git图文使用教程说明" aria-hidden="true">#</a> ✍、Git图文使用教程说明</h2>
<ul>
<li>Git 版本： 2.31.0.windows.1</li>
<li>IDEA版本：2021.1</li>
<li>主要记录 git 的常用命令、IDEA 集成 git、git与GitHub、IDEA 集成 GitHub、Gitee等(详细图文步骤记录)</li>
<li>配套视频参考：<a href="https://www.bilibili.com/video/BV1vy4y1s7k6?from=search&amp;seid=12466209700058370854&amp;spm_id_from=333.337.0.0" target="_blank" rel="noopener noreferrer">【尚硅谷】5h打通Git全套教程<ExternalLinkIcon/></a></li>
</ul>
<h2 id="💻一、git分支" tabindex="-1"><a class="header-anchor" href="#💻一、git分支" aria-hidden="true">#</a> 💻一、Git分支</h2>
<h3 id="🎯1-1、什么是分支" tabindex="-1"><a class="header-anchor" href="#🎯1-1、什么是分支" aria-hidden="true">#</a> 🎯1.1、什么是分支</h3>
<ul>
<li>在版本控制过程中， 同时推进多个任务， 为每个任务， 我们就可以创建每个任务的单独分支。</li>
<li>使用分支意味着程序员可以为自己的工作从开发主线上分离开来， 开发字迹分支的时候 ， 不会影响主线分支的运行。</li>
<li>对于初学者而言，分支可以理解为副本，一个分支就是一个简单的副本。</li>
</ul>
<h3 id="🪀1-2、分支的好处" tabindex="-1"><a class="header-anchor" href="#🪀1-2、分支的好处" aria-hidden="true">#</a> 🪀1.2、分支的好处</h3>
<ul>
<li>同时并行推进多个分支的开发，提高开发效率。</li>
<li>各个分支在开发的过程中，如果一个分支开发失败，不会对其他分支造成任何影响。失败的分支删除重新开始就可以了。</li>
</ul>
<h3 id="🎾1-3、分支的操作" tabindex="-1"><a class="header-anchor" href="#🎾1-3、分支的操作" aria-hidden="true">#</a> 🎾1.3、分支的操作</h3>
<table>
<thead>
<tr>
<th style="text-align:center"><strong>命令名称</strong></th>
<th style="text-align:center"><strong>作用</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">git branch 分支名</td>
<td style="text-align:center">创建分支</td>
</tr>
<tr>
<td style="text-align:center">git branch -v</td>
<td style="text-align:center">查看分支</td>
</tr>
<tr>
<td style="text-align:center">git checkout 分支名</td>
<td style="text-align:center">切换分支</td>
</tr>
<tr>
<td style="text-align:center">git merge 分支名</td>
<td style="text-align:center">把指定的分支合并到当前分支上</td>
</tr>
</tbody>
</table>
<h4 id="📌1-3-1、查看分支" tabindex="-1"><a class="header-anchor" href="#📌1-3-1、查看分支" aria-hidden="true">#</a> 📌1.3.1、查看分支</h4>
<p><strong>基本语法</strong>：<code v-pre>git branch -v</code></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214519755.png" alt="image-20220710214519755" tabindex="0" loading="lazy"><figcaption>image-20220710214519755</figcaption></figure>
<h4 id="📍1-3-2、创建分支" tabindex="-1"><a class="header-anchor" href="#📍1-3-2、创建分支" aria-hidden="true">#</a> 📍1.3.2、创建分支</h4>
<p><strong>基本语法</strong>：<code v-pre>git branch 分支名</code></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214528919.png" alt="image-20220710214528919" tabindex="0" loading="lazy"><figcaption>image-20220710214528919</figcaption></figure>
<h4 id="✂️1-3-3、切换分支" tabindex="-1"><a class="header-anchor" href="#✂️1-3-3、切换分支" aria-hidden="true">#</a> ✂️1.3.3、切换分支</h4>
<p><strong>基本语法</strong>:<code v-pre>git checkout 分支名</code></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214542747.png" alt="image-20220710214542747" tabindex="0" loading="lazy"><figcaption>image-20220710214542747</figcaption></figure>
<h4 id="🧲1-3-4、修改分支" tabindex="-1"><a class="header-anchor" href="#🧲1-3-4、修改分支" aria-hidden="true">#</a> 🧲1.3.4、修改分支</h4>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214551030.png" alt="image-20220710214551030" tabindex="0" loading="lazy"><figcaption>image-20220710214551030</figcaption></figure>
<h4 id="📍1-3-5、合并分支" tabindex="-1"><a class="header-anchor" href="#📍1-3-5、合并分支" aria-hidden="true">#</a> 📍1.3.5、合并分支</h4>
<p><strong>基本语法</strong>：<code v-pre>git merge 分支名</code></p>
<h5 id="_1正常合并不冲突" tabindex="-1"><a class="header-anchor" href="#_1正常合并不冲突" aria-hidden="true">#</a> ①正常合并不冲突</h5>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214557869.png" alt="image-20220514150726818" tabindex="0" loading="lazy"><figcaption>image-20220514150726818</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214605189.png" alt="image-20220514150726818" tabindex="0" loading="lazy"><figcaption>image-20220514150726818</figcaption></figure>
<h5 id="_2合并产生冲突" tabindex="-1"><a class="header-anchor" href="#_2合并产生冲突" aria-hidden="true">#</a> ②合并产生冲突</h5>
<p><strong>冲突产生的原因</strong>：</p>
<ul>
<li>合并分支时，两个分支在同一个文件的同一个位置有两套完全不同的修改。</li>
<li>有两套完全不同的修改。 Git无法替我们决定使用哪一个。必须 人为决定新代码内容。</li>
</ul>
<p>例如，我们首先在 master 分支的倒数第二行进行修改，并将其添加到暂存区，再提交到本地库</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214617367.png" alt="image-20220710214617367" tabindex="0" loading="lazy"><figcaption>image-20220710214617367</figcaption></figure>
<p><strong>接着，我们去 hot-fix 分支的倒数第一行进行修改，并将其添加到暂存区，再提交到本地库</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214717527.png" alt="image-20220710214717527" tabindex="0" loading="lazy"><figcaption>image-20220710214717527</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214625198.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>之后我们在 master 分支上合并 hot-fix 分支，发现产生冲突</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214730236.png" alt="image-20220710214730236" tabindex="0" loading="lazy"><figcaption>image-20220710214730236</figcaption></figure>
<blockquote>
<p>解决冲突</p>
</blockquote>
<ol>
<li>
<p>编辑有冲突的文件，删除特殊符号，决定要使用的内容</p>
<p>特殊符号：<code v-pre>&lt;&lt;&lt;&lt;&lt;&lt; HEAD</code> 当前分支的代码 <code v-pre>=======</code> 合并过来的代码 <code v-pre>&gt;&gt;&gt;&gt;&gt;&gt;&gt;hot-fix</code></p>
</li>
</ol>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214738708.png" alt="image-20220710214738708" tabindex="0" loading="lazy"><figcaption>image-20220710214738708</figcaption></figure>
<img src="https://cdn.jsdelivr.net/gh/gaoziman/bed/img/image-20220514152453845.png" alt="image-20220514152453845" style="zoom:67%;" />
<p><strong>删除完成之后保存，再次添加到暂存区，并再次提交到本地库</strong>(<code v-pre>注意：此时使用 git commit 命令时候不能带文件名)</code></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214744846.png" alt="image-20220710214744846" tabindex="0" loading="lazy"><figcaption>image-20220710214744846</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214753959.png" alt="image-20220710214753959" tabindex="0" loading="lazy"><figcaption>image-20220710214753959</figcaption></figure>
<h2 id="🔍二、git团队协作机" tabindex="-1"><a class="header-anchor" href="#🔍二、git团队协作机" aria-hidden="true">#</a> 🔍二、Git团队协作机</h2>
<h3 id="🏓2-1、团队内协作" tabindex="-1"><a class="header-anchor" href="#🏓2-1、团队内协作" aria-hidden="true">#</a> 🏓2.1、团队内协作</h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214800695.png" alt="image-20220710214800695" tabindex="0" loading="lazy"><figcaption>image-20220710214800695</figcaption></figure>
<p><strong>举个例子</strong>：</p>
<p>岳不群首先用 git 初始化自己的本地库，写了一套华山剑法，</p>
<p>利用push 命令将自己的本地库推送到代码托管中心(Github、Gitee)，</p>
<p>大弟子令狐冲通过 clone 克隆命令完整的复制到自己的本地库，</p>
<p>令狐冲修改两招之后将自己的本地库再次 push 到代码托管中心，</p>
<p>这样岳不群就可以通过 pull 命令拉取令狐冲修改的代码 来更新自己的本地库。</p>
<h3 id="💗2-2、跨团队协作" tabindex="-1"><a class="header-anchor" href="#💗2-2、跨团队协作" aria-hidden="true">#</a> 💗2.2、跨团队协作</h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214806720.png" alt="image-20220710214806720" tabindex="0" loading="lazy"><figcaption>image-20220710214806720</figcaption></figure>
<p>令狐冲请东方不败改代码，东方不败通过 fork 命令从岳不群的的远程库中拿取代码，</p>
<p>再通过 clone 克隆命令到自己的本地库，修改完成后使用 push 推送到在自己的远程库，</p>
<p>使用 Pull request 拉取请求给岳不群，岳不群审核完成后使用 merge 命令合并对方的代码到自己的远程</p>
<p>中，再通过 pull 命令到自己的本地库中，这样修改过后的华山剑法岳不群和令狐冲就都可以使用了。</p>
<h2 id="☔三、github" tabindex="-1"><a class="header-anchor" href="#☔三、github" aria-hidden="true">#</a> ☔三、Github</h2>
<h3 id="🌼3-1、创建远程仓库" tabindex="-1"><a class="header-anchor" href="#🌼3-1、创建远程仓库" aria-hidden="true">#</a> 🌼3.1、创建远程仓库</h3>
<h4 id="🗡️3-1-1、github远程仓库" tabindex="-1"><a class="header-anchor" href="#🗡️3-1-1、github远程仓库" aria-hidden="true">#</a> 🗡️3.1.1、Github远程仓库</h4>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214815624.png" alt="image-20220710214815624" tabindex="0" loading="lazy"><figcaption>image-20220710214815624</figcaption></figure>
<h4 id="🪒3-1-2、gitee远程仓库" tabindex="-1"><a class="header-anchor" href="#🪒3-1-2、gitee远程仓库" aria-hidden="true">#</a> 🪒3.1.2、Gitee远程仓库</h4>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214821940.png" alt="image-20220710214821940" tabindex="0" loading="lazy"><figcaption>image-20220710214821940</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214830911.png" alt="image-20220710214830911" tabindex="0" loading="lazy"><figcaption>image-20220710214830911</figcaption></figure>
<h3 id="🌈3-2、远程仓库操作" tabindex="-1"><a class="header-anchor" href="#🌈3-2、远程仓库操作" aria-hidden="true">#</a> 🌈3.2、远程仓库操作</h3>
<table>
<thead>
<tr>
<th style="text-align:center"><strong>命令名称</strong></th>
<th style="text-align:center"><strong>作用</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">git remote -v</td>
<td style="text-align:center">查看当前所有远程地址别名</td>
</tr>
<tr>
<td style="text-align:center">git remote add 别名 远程地址</td>
<td style="text-align:center">起别名</td>
</tr>
<tr>
<td style="text-align:center"><strong>git push 别名 分支</strong></td>
<td style="text-align:center"><strong>推送本地分支上的内容克隆到本地</strong></td>
</tr>
<tr>
<td style="text-align:center"><strong>git clone 远程地址</strong></td>
<td style="text-align:center"><strong>将远程仓库的内容克隆到本地</strong></td>
</tr>
<tr>
<td style="text-align:center"><strong>git pull 远程库地址别名 远程分支名</strong></td>
<td style="text-align:center"><strong>将远程仓库对于分支最新内容拉下来后与当前本地分支直接合并</strong></td>
</tr>
</tbody>
</table>
<h4 id="💐3-2-1、创建远程仓库别名" tabindex="-1"><a class="header-anchor" href="#💐3-2-1、创建远程仓库别名" aria-hidden="true">#</a> 💐3.2.1、创建远程仓库别名</h4>
<h5 id="_1、gihub" tabindex="-1"><a class="header-anchor" href="#_1、gihub" aria-hidden="true">#</a> ①、Gihub</h5>
<p>基本语法：</p>
<ul>
<li><code v-pre>git remote -v</code> 查看当前所有远程地址别名</li>
<li><code v-pre>git remote add 别名 远程地址</code> 起别名</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214838782.png" alt="image-20220710214838782" tabindex="0" loading="lazy"><figcaption>image-20220710214838782</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214848568.png" alt="image-20220710214848568" tabindex="0" loading="lazy"><figcaption>image-20220710214848568</figcaption></figure>
<p><code v-pre>注意：起的别名最好和本地库的名称一致</code></p>
<h5 id="_2、gitee" tabindex="-1"><a class="header-anchor" href="#_2、gitee" aria-hidden="true">#</a> ②、Gitee</h5>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214858961.png" alt="image-20220710214858961" tabindex="0" loading="lazy"><figcaption>image-20220710214858961</figcaption></figure>
<h4 id="🧲3-2-2、推送本地分支到远程仓库" tabindex="-1"><a class="header-anchor" href="#🧲3-2-2、推送本地分支到远程仓库" aria-hidden="true">#</a> 🧲3.2.2、推送本地分支到远程仓库</h4>
<p><strong>基本语法</strong>：<code v-pre>git push 别名 分支</code></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214910606.png" alt="image-20220710214910606" tabindex="0" loading="lazy"><figcaption>image-20220710214910606</figcaption></figure>
<p><strong>我们在 gitee 上查看我们的 git-demo 仓库，发现有我们推送的hello.txt 文件</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214919877.png" alt="image-20220710214919877" tabindex="0" loading="lazy"><figcaption>image-20220710214919877</figcaption></figure>
<h4 id="🧨3-2-3、拉取远程库分支到本地库" tabindex="-1"><a class="header-anchor" href="#🧨3-2-3、拉取远程库分支到本地库" aria-hidden="true">#</a> 🧨3.2.3、拉取远程库分支到本地库</h4>
<p><strong>语法</strong>：<code v-pre>git pull 别名 分支</code></p>
<p>我们在远程库进行 hello.txt 的文件修改</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214925823.png" alt="image-20220710214925823" tabindex="0" loading="lazy"><figcaption>image-20220710214925823</figcaption></figure>
<p><strong>然后在本地库将远程库的代码 拉取</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214933590.png" alt="image-20220710214933590" tabindex="0" loading="lazy"><figcaption>image-20220710214933590</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214941345.png" alt="image-20220710214941345" tabindex="0" loading="lazy"><figcaption>image-20220710214941345</figcaption></figure>
<h4 id="🔖3-2-3、克隆远程仓库到本地" tabindex="-1"><a class="header-anchor" href="#🔖3-2-3、克隆远程仓库到本地" aria-hidden="true">#</a> 🔖3.2.3、克隆远程仓库到本地</h4>
<p><strong>基本语法</strong>：<code v-pre>git clone 远程地址</code></p>
<p>我们另一台用户需要克隆我们的远程仓库到他的本地库，由于是使用一台电脑模拟，所以在克隆之前需要在</p>
<p>凭据管理器下删除我们之前的 gitee 凭据</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214949446.png" alt="image-20220710214949446" tabindex="0" loading="lazy"><figcaption>image-20220710214949446</figcaption></figure>
<p><strong>我们新建一个文件夹 git-clone，然后在此文件夹下右键 git bash here，之后进行克隆</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710214955496.png" alt="image-20220710214955496" tabindex="0" loading="lazy"><figcaption>image-20220710214955496</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710215003084.png" alt="image-20220710215003084" tabindex="0" loading="lazy"><figcaption>image-20220710215003084</figcaption></figure>
<p>​</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710215010517.png" alt="image-20220710215010517" tabindex="0" loading="lazy"><figcaption>image-20220710215010517</figcaption></figure>
<h3 id="🤔3-3、邀请加入团队" tabindex="-1"><a class="header-anchor" href="#🤔3-3、邀请加入团队" aria-hidden="true">#</a> 🤔3.3、邀请加入团队</h3>
<h4 id="😃3-3-1、gitee" tabindex="-1"><a class="header-anchor" href="#😃3-3-1、gitee" aria-hidden="true">#</a> 😃3.3.1、Gitee</h4>
<p>我们在 git-clone(假设这是大弟子令狐冲) 文件夹里面进行代码修改，修改完后添加到暂存区，再提交到本地库，之后 push 到我们的远程库</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710215020021.png" alt="image-20220710215020021" tabindex="0" loading="lazy"><figcaption>image-20220710215020021</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710215028405.png" alt="image-20220710215028405" tabindex="0" loading="lazy"><figcaption>image-20220710215028405</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710215038767.png" alt="image-20220710215038767" tabindex="0" loading="lazy"><figcaption>image-20220710215038767</figcaption></figure>
<p>令狐成成为仓库开发者被拉入团队后，我们再次在令狐冲文件夹使用进行 push</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710215044276.png" alt="image-20220710215044276" tabindex="0" loading="lazy"><figcaption>image-20220710215044276</figcaption></figure>
<p>push 到远程库成功，我们在远程库查看</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710215049318.png" alt="image-20220710215049318" tabindex="0" loading="lazy"><figcaption>image-20220710215049318</figcaption></figure>
<h4 id="🥮3-3-2、github" tabindex="-1"><a class="header-anchor" href="#🥮3-3-2、github" aria-hidden="true">#</a> 🥮3.3.2、Github</h4>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710215113032.png" alt="image-20220710215113032" tabindex="0" loading="lazy"><figcaption>image-20220710215113032</figcaption></figure>
<p><strong>复制地址并发给该用户</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710215134503.png" alt="image-20220710215134503" tabindex="0" loading="lazy"><figcaption>image-20220710215134503</figcaption></figure>
<p>在 atguigulinghuchong这个账号 中的 地址 栏 复制 收到邀请 的 链接 ，点击接受邀请。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710215140222.png" alt="image-20220710215140222" tabindex="0" loading="lazy"><figcaption>image-20220710215140222</figcaption></figure>
<h3 id="🧹3-4、跨团队协作" tabindex="-1"><a class="header-anchor" href="#🧹3-4、跨团队协作" aria-hidden="true">#</a> 🧹3.4、跨团队协作</h3>
<h4 id="🛶3-4-1、gitee" tabindex="-1"><a class="header-anchor" href="#🛶3-4-1、gitee" aria-hidden="true">#</a> 🛶3.4.1、Gitee</h4>
<p>将远程仓库的地址复制发给邀请跨团队协作的人，比如东方不败。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710215146485.png" alt="image-20220710215146485" tabindex="0" loading="lazy"><figcaption>image-20220710215146485</figcaption></figure>
<p>在东方不败的 Gitee账号里的地址栏复制收到的链接，然后点击 Fork将项目叉到自己的本地仓库</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710215152541.png" alt="image-20220710215152541" tabindex="0" loading="lazy"><figcaption>image-20220710215152541</figcaption></figure>
<img src="https://cdn.jsdelivr.net/gh/gaoziman/bed/img/image-20220515121357503.png" alt="image-20220515121357503" style="zoom:67%;" />
<p><strong>接下来点击上方的 Pull Requests 请求，并创建一个新的请求</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710215208932.png" alt="image-20220710215208932" tabindex="0" loading="lazy"><figcaption>image-20220710215208932</figcaption></figure>
<p><strong>合并之后我们在岳不群的 git-demo 下就可以看到东方不败的代码</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710215219923.png" alt="image-20220710215219923" tabindex="0" loading="lazy"><figcaption>image-20220710215219923</figcaption></figure>
</div></template>


