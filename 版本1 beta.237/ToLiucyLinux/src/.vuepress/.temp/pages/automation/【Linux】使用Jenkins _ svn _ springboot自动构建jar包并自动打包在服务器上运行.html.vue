<template><div><figure><img src="https://img-blog.csdnimg.cn/03042836b51a4e5c8a528976c81340f7.jpeg" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
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
<h1 id="运行环境说明" tabindex="-1"><a class="header-anchor" href="#运行环境说明" aria-hidden="true">#</a> 运行环境说明</h1>
<table>
<thead>
<tr>
<th>运行环境</th>
<th>运行版本</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>操作系统</td>
<td>centos 7.8</td>
<td>运行Jenkins的基础环境</td>
</tr>
<tr>
<td>jenkins版本</td>
<td>2.419</td>
<td>用于构建项目及其他自动化</td>
</tr>
<tr>
<td>maven版本</td>
<td>3.8.6</td>
<td>用于构建jar包</td>
</tr>
<tr>
<td>jdk版本</td>
<td>18、1.8</td>
<td>18（用于运行Jenkins）、1.8（用于运行jar包）</td>
</tr>
</tbody>
</table>
<h1 id="一、创建一个maven项目" tabindex="-1"><a class="header-anchor" href="#一、创建一个maven项目" aria-hidden="true">#</a> 一、创建一个maven项目</h1>
<h2 id="_1-1-安装必要的插件【必须】" tabindex="-1"><a class="header-anchor" href="#_1-1-安装必要的插件【必须】" aria-hidden="true">#</a> 1.1 安装必要的插件【必须】*</h2>
<ul>
<li>maven</li>
<li>git</li>
<li>ssh</li>
<li>svn</li>
</ul>
<blockquote>
<p>一般在部署完成，访问的时候选择默认安装插件基本都会装 -- git。</p>
</blockquote>
<p>点击 <code v-pre>Manage Jenkin </code>--&gt; <code v-pre>Plugins（插件）</code> --&gt; <code v-pre>Available plugins（商店）</code></p>
<p><img src="https://img-blog.csdnimg.cn/6d9d5f7622e84bf08454fb8cd0fe580b.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/709cd2b55d534d259d8a9cc59f57757e.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/ae2f7b24cead4c8bb75c1b8f04c2ad89.png" alt="在这里插入图片描述" loading="lazy"></p>
<ul>
<li>搜索<code v-pre>git</code> 和 <code v-pre>maven</code>  和 <code v-pre>ssh</code> 和 <code v-pre>svn</code> 进行安装；</li>
</ul>
<p>git 和 ssh 我这里已经有了，需要更新就更新一下；</p>
<p><img src="https://img-blog.csdnimg.cn/8f81048c052a4b6e8f67554e65524264.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/57fa1028b8684b218db0681a2453ad7b.png" alt="在这里插入图片描述" loading="lazy"></p>
<p>maven、svn 我这里没有，就安装一下吧；</p>
<figure><img src="https://img-blog.csdnimg.cn/e71e838dc35242e1ac5e0aa0446453fa.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>安装完成之后，在新建<code v-pre>Item</code> 那块就可以看到maven了。如下↓</p>
<figure><img src="https://img-blog.csdnimg.cn/6aa5061acde04f25abd63e5476912011.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>svn</p>
<figure><img src="https://img-blog.csdnimg.cn/4f77a798aa0b4e708997e3142a58fb3c.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="_1-2-创建maven任务" tabindex="-1"><a class="header-anchor" href="#_1-2-创建maven任务" aria-hidden="true">#</a> 1.2 创建maven任务</h2>
<ul>
<li>新建<code v-pre>Item</code> -- &gt; 选择maven项目，起一个任务名称。</li>
</ul>
<figure><img src="https://img-blog.csdnimg.cn/494890ff99564b5aaa57f7e37efa420f.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>创建完之后，就到了这个页面</p>
<figure><img src="https://img-blog.csdnimg.cn/1679f74ece2e418288e60f714c4d3ded.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="二、配置maven项目" tabindex="-1"><a class="header-anchor" href="#二、配置maven项目" aria-hidden="true">#</a> 二、配置maven项目</h1>
<p>下面来讲解一下maven项目里的配置项。</p>
<h2 id="_2-1-maven项目中的配置项详解" tabindex="-1"><a class="header-anchor" href="#_2-1-maven项目中的配置项详解" aria-hidden="true">#</a> 2.1 maven项目中的配置项详解</h2>
<h3 id="_2-1-1-general" tabindex="-1"><a class="header-anchor" href="#_2-1-1-general" aria-hidden="true">#</a> 2.1.1 General</h3>
<blockquote>
<p>项目描述，可以在这块写一些项目的描述。</p>
</blockquote>
<figure><img src="https://img-blog.csdnimg.cn/26e14cdf56874c7285bafe2ea55eac0c.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_2-1-2-源码管理" tabindex="-1"><a class="header-anchor" href="#_2-1-2-源码管理" aria-hidden="true">#</a> 2.1.2 源码管理</h3>
<blockquote>
<p>主要是拉取源码用的，这里有两种，一种是<code v-pre>git</code>，一种是<code v-pre>svn</code>方式。等下我们创建项目使用的是svn方式。</p>
</blockquote>
<figure><img src="https://img-blog.csdnimg.cn/7ec701dc62064c93a992dcc34616f453.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>这个不仅Jenkins项目上要安装git插件，在服务器上也需要安装git。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-1-3-构建触发器" tabindex="-1"><a class="header-anchor" href="#_2-1-3-构建触发器" aria-hidden="true">#</a> 2.1.3 构建触发器</h3>
<p>默认勾选上的是下面的选项：Jenkins将会去寻找之前已经构建过的pom依赖（如果有之前构建过的相同的pom文件），直接使用之前的镜像，便不会再去重新的解析了</p>
<figure><img src="https://img-blog.csdnimg.cn/e1dc7d63fdaa456195952fe89ca8222b.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_2-1-4-构建环境" tabindex="-1"><a class="header-anchor" href="#_2-1-4-构建环境" aria-hidden="true">#</a> 2.1.4 构建环境</h3>
<p>在这里面，勾选上对应的内容，将去做一些额外的处理，在这里保持默认的，什么都不去勾选</p>
<figure><img src="https://img-blog.csdnimg.cn/22a35d8a01ee4feebf1d0af47ba9f726.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>这是翻译后的，可根据实际情况来使用。</p>
<figure><img src="https://img-blog.csdnimg.cn/ac94694518fe441aad6bd1f43dc1221b.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_2-1-5-pre-steps-准备步骤" tabindex="-1"><a class="header-anchor" href="#_2-1-5-pre-steps-准备步骤" aria-hidden="true">#</a> 2.1.5 Pre Steps（准备步骤）</h3>
<p>准备步骤，一般会选择<code v-pre>Execute shell</code> 和 <code v-pre>Invoke Gradle script</code>。</p>
<figure><img src="https://img-blog.csdnimg.cn/95bb4c4bef384df18b1b8b70adf7fc6d.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_2-1-6-build-构建" tabindex="-1"><a class="header-anchor" href="#_2-1-6-build-构建" aria-hidden="true">#</a> 2.1.6 Build（构建）</h3>
<figure><img src="https://img-blog.csdnimg.cn/4329689c98b24bb19c2ffe052a073a1b.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_2-1-7-post-steps-发布步骤" tabindex="-1"><a class="header-anchor" href="#_2-1-7-post-steps-发布步骤" aria-hidden="true">#</a> 2.1.7 Post Steps（发布步骤）</h3>
<p>这个配置，说明的是：在项目构建完成之后，接下来需要做的内容</p>
<p>在这里，我们需要将构建完的项目，打成的包传到我们的测试服务器上，也是在这里去进行配置的</p>
<h3 id="_2-1-8-构建设置" tabindex="-1"><a class="header-anchor" href="#_2-1-8-构建设置" aria-hidden="true">#</a> 2.1.8 构建设置</h3>
<p>这里可以配置<code v-pre>电子邮件通知</code>。比如失败，成功，都可以进行发送邮件来通知提醒。</p>
<h2 id="_2-2-配置maven项目" tabindex="-1"><a class="header-anchor" href="#_2-2-配置maven项目" aria-hidden="true">#</a> 2.2 配置maven项目</h2>
<h3 id="_2-2-1-服务器需要提前安装" tabindex="-1"><a class="header-anchor" href="#_2-2-1-服务器需要提前安装" aria-hidden="true">#</a> 2.2.1 服务器需要提前安装：</h3>
<p>如果是使用git部署，服务器上也需要安装git；</p>
<ul class="task-list-container">
<li>
<p>jdk1.8</p>
</li>
<li>
<p>maven</p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> jdk：根据自己的项目选择所需的jdk版本，我的项目是需要 <code v-pre>jdk11以上，用的是jdk18</code> 才可以；<br>
如果是需要jdk1.8，并且Jenkins是按照我的部署文档部署的，那么默认就会有jdk1.8，可以使用<code v-pre>find / -name java</code> 找一下java的安装路径，将绝对路径配置到全局工具配置里就行；如果没有安装，需要安装一下；可参考：<a href="https://blog.csdn.net/liu_chen_yang/article/details/123706070" target="_blank" rel="noopener noreferrer">Linux中安装jdk1.8和配置环境变量<ExternalLinkIcon/></a></label></p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> maven：根据自己的项目选择所需的mvn版本，我的项目是需要 <code v-pre>maven3.8</code> 才可以；<br>
maven环境默认是没有的，也需要在服务器安装一下，可参考：<a href="https://blog.csdn.net/liu_chen_yang/article/details/130106529" target="_blank" rel="noopener noreferrer">【Linux】Centos安装mvn命令（maven）<ExternalLinkIcon/></a>，建议使用maven3.8，下载地址：<a href="https://pan.baidu.com/s/1drjw-sQ5JKFukamVSsLqtw?pwd=b1a0" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1drjw-sQ5JKFukamVSsLqtw?pwd=b1a0 <ExternalLinkIcon/></a></label></p>
</li>
</ul>
<h3 id="_2-2-2-配置全局系统配置" tabindex="-1"><a class="header-anchor" href="#_2-2-2-配置全局系统配置" aria-hidden="true">#</a> 2.2.2 配置全局系统配置</h3>
<blockquote>
<p>Manage Jenkins --&gt; System</p>
</blockquote>
<figure><img src="https://img-blog.csdnimg.cn/ceb042e1cee54e0d9c3ddd4f9633d31a.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>配置ssh环境</li>
</ul>
<blockquote>
<p>提示：如果找不到ssh在哪，可以使用<code v-pre>ctrl+f</code>搜索一下；</p>
</blockquote>
<figure><img src="https://img-blog.csdnimg.cn/8e44a2a4ad464c37ae4526e7b2500cee.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_2-2-3-配置全局工具配置" tabindex="-1"><a class="header-anchor" href="#_2-2-3-配置全局工具配置" aria-hidden="true">#</a> 2.2.3 配置全局工具配置</h3>
<blockquote>
<p>Manage Jenkins --&gt; Tools</p>
</blockquote>
<figure><img src="https://img-blog.csdnimg.cn/abe857bc77d848dcb8f65a9289f2a782.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>maven配置</li>
</ul>
<p>在项目开始前，我们安装了maven，所以maven使用默认的配置就行，所以这块不用改。<br>
如果服务器有多个maven，需要用到这时候就需要重新配置一下了，配置的时候到maven的setting.xml路径，比如<code v-pre>/usr/local/maven/apache-maven-3.8.6/conf/setting.xml</code>。</p>
<figure><img src="https://img-blog.csdnimg.cn/59fb940816bd41b1b00aa26b47bd0367.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>然后我们拉到最下面可以看到还有一个maven，这个需要配置一下；</p>
<p>找到Maven安装 --&gt; 点击新增Maven --&gt; 配置maven路径即可；</p>
<figure><img src="https://img-blog.csdnimg.cn/131dc38156a0416d99ea122e9c58366d.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>jdk配置</li>
</ul>
<p>找到JDK安装 --&gt; 点击新增JDK --&gt; 配置jdk路径即可；</p>
<figure><img src="https://img-blog.csdnimg.cn/b932b458ee2a4080ab323647817c990a.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>配置完之后保存。</p>
<h3 id="_2-2-4-先写一个描述-可写可不写" tabindex="-1"><a class="header-anchor" href="#_2-2-4-先写一个描述-可写可不写" aria-hidden="true">#</a> 2.2.4 先写一个描述（可写可不写）</h3>
<p>进入刚刚创建的maven项目，选择<code v-pre>配置</code>，跳到这个页面；</p>
<figure><img src="https://img-blog.csdnimg.cn/72477befb11347d3ba9bc3342e85d811.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_2-2-5-创建源码管理-svn方式" tabindex="-1"><a class="header-anchor" href="#_2-2-5-创建源码管理-svn方式" aria-hidden="true">#</a> 2.2.5 创建源码管理（svn方式）</h3>
<p><img src="https://img-blog.csdnimg.cn/8868b3c742d24f73bfbe615b7412e87d.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/f0137b4e935c492f919e9fb82f27033b.png" alt="在这里插入图片描述" loading="lazy"></p>
<h3 id="_2-2-6-保存配置" tabindex="-1"><a class="header-anchor" href="#_2-2-6-保存配置" aria-hidden="true">#</a> 2.2.6 保存配置</h3>
<p>配置完之后，点击保存</p>
<figure><img src="https://img-blog.csdnimg.cn/74ca22a9813b4729a5d0fc72ebb5f4d5.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="三、构建maven项目" tabindex="-1"><a class="header-anchor" href="#三、构建maven项目" aria-hidden="true">#</a> 三、构建maven项目</h1>
<h2 id="_3-1-build-构建-项目" tabindex="-1"><a class="header-anchor" href="#_3-1-build-构建-项目" aria-hidden="true">#</a> 3.1 build（构建）项目</h2>
<p>保存完之后，看到左边有一个<code v-pre>build now</code>，然后点击build（构建）就可以了；</p>
<figure><img src="https://img-blog.csdnimg.cn/da999cab6ed04a19844157ad6311163b.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>构建的时候可以查看构建过程，<code v-pre>F5</code> 刷新一下页面</p>
<figure><img src="https://img-blog.csdnimg.cn/95fd120ef0364e35b3089c7dc971e3ca.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>往下拉，看到这个，点进去，然后点击控制台输出，就可以看到构建过程了。</p>
<p><img src="https://img-blog.csdnimg.cn/1709a9b6f169425ca145ea6fc7a3565a.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/0de760ee47954cdaa0f0f790c44d2216.png" alt="在这里插入图片描述" loading="lazy"></p>
<h2 id="_3-2-构建完成" tabindex="-1"><a class="header-anchor" href="#_3-2-构建完成" aria-hidden="true">#</a> 3.2 构建完成</h2>
<p>出现<code v-pre>Finished: SUCCESS</code> 就是构建完成了。</p>
<figure><img src="https://img-blog.csdnimg.cn/673564d1e9bd48f3bf5b96f7e71e43a0.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>同时，最上面也会变成一个绿色的对号；</p>
<figure><img src="https://img-blog.csdnimg.cn/a7fe74a395124459a8b23381de0291dc.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>构建完之后就可以在服务器上查看了，以下是存放到服务器的路径。</p>
<figure><img src="https://img-blog.csdnimg.cn/aaee9b5c150f4272ad2ba2749209bba8.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="_3-3-构建报错总结" tabindex="-1"><a class="header-anchor" href="#_3-3-构建报错总结" aria-hidden="true">#</a> 3.3 构建报错总结：</h2>
<h3 id="_3-3-1-关于maven版本问题报错" tabindex="-1"><a class="header-anchor" href="#_3-3-1-关于maven版本问题报错" aria-hidden="true">#</a> 3.3.1 关于maven版本问题报错</h3>
<p>如果在build的时候遇到此报错，是因为maven版本的问题；</p>
<figure><img src="https://img-blog.csdnimg.cn/6f79c663519a47be915b7fef42e15729.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_3-3-2-关于jdk版本配置的问题" tabindex="-1"><a class="header-anchor" href="#_3-3-2-关于jdk版本配置的问题" aria-hidden="true">#</a> 3.3.2 关于jdk版本配置的问题</h3>
<p>如果在build的时候遇到此报错，是因为jdk版本配置的问题；</p>
<figure><img src="https://img-blog.csdnimg.cn/90b63e2d5b2648d4ba34ba5132a0fa07.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="四、构建完自动在服务器中运行" tabindex="-1"><a class="header-anchor" href="#四、构建完自动在服务器中运行" aria-hidden="true">#</a> 四、构建完自动在服务器中运行</h1>
<h2 id="_4-1-在项目中配置post-steps-发布步骤" tabindex="-1"><a class="header-anchor" href="#_4-1-在项目中配置post-steps-发布步骤" aria-hidden="true">#</a> 4.1 在项目中配置Post Steps（发布步骤）</h2>
<blockquote>
<p>这就是在build完之后，需要进行什么操作，在这里写。<br>
可以使用<code v-pre>ssh</code> 方式或者 <code v-pre>shell</code> 方式；<br>
<code v-pre>ssh</code> 和 <code v-pre>shell</code> 其实都一样，都是写命令的；<br>
ssh还需要配置全局变量，虽然上面已经配置了，但是我一般经常用 <code v-pre>shell</code> 方式，看自己选择吧。<br>
这里以 <code v-pre>shell</code> 方式举例。</p>
</blockquote>
<p>首先，需要返回刚刚的项目中进行配置；</p>
<figure><img src="https://img-blog.csdnimg.cn/185f8738ce7e4b62a59113a4475dae98.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>找到 <code v-pre>Post Steps</code></li>
</ul>
<figure><img src="https://img-blog.csdnimg.cn/440205caa7ed43098b089acecd0d4c81.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>选择执行shell，写个shell脚本（也可以使用ssh方式，自己定义）</li>
</ul>
<p><img src="https://img-blog.csdnimg.cn/f65073a27e2d43c2a6d929cbda0ccaa0.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/2854c56118fe4c1aad7aa0b56945210b.png" alt="在这里插入图片描述" loading="lazy"></p>
<ul>
<li>shell 脚本内容</li>
</ul>
<font color=red>提示：如果要运行jar包的话，必须在脚本里添加：`BUILD_ID=DONTKILLME` 环境变量，防止执行完自动化构建jar包程序自动停止问题。</font><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># （必须）配置一个环境变量，防止执行完自动化构建jar包程序自动停止问题</span>
<span class="token assign-left variable">BUILD_ID</span><span class="token operator">=</span>DONTKILLME

<span class="token comment"># 源jar包及路径</span>
<span class="token assign-left variable">src_jar</span><span class="token operator">=</span><span class="token string">"/root/.jenkins/workspace/mytest_maven/target/cs.jar"</span>
<span class="token comment"># 目标jar及包路径</span>
<span class="token assign-left variable">dest_jar</span><span class="token operator">=</span><span class="token string">"/application/cs.jar"</span>
<span class="token comment"># 目标jar包路径</span>
<span class="token assign-left variable">dest_path</span><span class="token operator">=</span><span class="token string">"/application/"</span>

<span class="token comment"># 创建目标路径</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /application/

<span class="token comment"># 将打包完的jar包复制过去</span>
<span class="token comment">## 先判断jar包是否存在，如果存在则备份，如果不存在，则直接复制过去运行。</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> <span class="token variable">$dest_jar</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"存在此文件，开始备份，重新复制：<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +<span class="token string">"%Y-%m-%d"</span><span class="token variable">)</span></span>"</span>
	<span class="token function">mv</span> <span class="token variable">$dest_jar</span> <span class="token variable">$dest_jar</span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +<span class="token string">"%Y-%m-%d"</span><span class="token variable">)</span></span>
    <span class="token function">cp</span> <span class="token parameter variable">-ar</span> <span class="token variable">$src_jar</span> <span class="token variable">$dest_jar</span>
<span class="token keyword">else</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"目标路径没有这个文件，直接复制过去"</span>
	<span class="token function">cp</span> <span class="token parameter variable">-ar</span> <span class="token variable">$src_jar</span> <span class="token variable">$dest_jar</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">cd</span> <span class="token variable">$dest_path</span>
<span class="token comment"># 检测jar包进程，这里直接写jar包名称，因为如果引用上面的环境变量，是路径加jar包名，如果在服务器上但启动的话，可能会找不到，所以需要直接写jar包名称。</span>
<span class="token assign-left variable">jar_jin</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-ic</span> cs.jar<span class="token variable">)</span></span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$jar_jin</span>"</span> <span class="token parameter variable">-ge</span> <span class="token string">"1"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"检测到进程，先杀掉，后启动"</span>
	<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">grep</span> cs.jar <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">" "</span> <span class="token string">'{print $2}'</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">kill</span> <span class="token parameter variable">-9</span>
    <span class="token function">java</span> <span class="token parameter variable">-jar</span> <span class="token variable">$dest_jar</span> <span class="token parameter variable">--server.port</span><span class="token operator">=</span><span class="token number">9999</span> <span class="token operator">>></span> app.log <span class="token operator">&amp;</span>
<span class="token keyword">else</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"未检测到jar包进程，直接启动"</span>
	<span class="token function">java</span> <span class="token parameter variable">-jar</span> <span class="token variable">$dest_jar</span> <span class="token parameter variable">--server.port</span><span class="token operator">=</span><span class="token number">9999</span> <span class="token operator">>></span> app.log <span class="token operator">&amp;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完之后，点击保存；</p>
<figure><img src="https://img-blog.csdnimg.cn/5ae3f0b933e24418be2a0b36b583ec58.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="_4-2-自动构建jar包并运行" tabindex="-1"><a class="header-anchor" href="#_4-2-自动构建jar包并运行" aria-hidden="true">#</a> 4.2 自动构建jar包并运行</h2>
<ul>
<li>点击构建（Build Now）</li>
</ul>
<figure><img src="https://img-blog.csdnimg.cn/bc13b587eb24496091684709581ee6d8.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li><code v-pre>F5</code> 刷新一下，可看到最新的构建运行</li>
</ul>
<figure><img src="https://img-blog.csdnimg.cn/02ab98775aa24817950fc4179c207fe2.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>点击进入，查看控制台输出。</li>
</ul>
<figure><img src="https://img-blog.csdnimg.cn/e112d4cebf924f6abfa63bddb1f0c8c2.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>输出<code v-pre>Finished: SUCCESS</code> 则为执行成功。</p>
<figure><img src="https://img-blog.csdnimg.cn/14fe9e00aad74b87866030a7d3a21d89.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>执行成功之后我们进入到服务器中，查看一下服务是否启动，可以查看端口是否启动或者jar包进程是否启动</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> cs.jar

<span class="token function">netstat</span> <span class="token parameter variable">-anput</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">9999</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>端口和jar包进程都存在，则可以去做访问页面之类的操作了。</p>
<blockquote>
<p>如果访问不到，需要确认服务是否正常启动或防火墙端口是否开启。</p>
</blockquote>
<p>这样自动构建打包jar包并运行就完成了。</p>
<h1 id="五、动构建打包jar包并运行完成" tabindex="-1"><a class="header-anchor" href="#五、动构建打包jar包并运行完成" aria-hidden="true">#</a> 五、动构建打包jar包并运行完成</h1>
</div></template>


