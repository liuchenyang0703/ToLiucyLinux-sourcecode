<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/ac9849a85ee448d3830389d1d2646d91.jpeg" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">CSDN博客专家</a><br>
  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者</a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主</a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主</a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区</a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<p>  之前采用Jenkins的自由风格构建的项目，每个步骤流程都要通过不同的方式设置，并且构建过程中整体流程是不可见的，无法确认每个流程花费的时间，并且问题不方便定位问题。</p>
<p>  Jenkins的<code v-pre>Pipeline</code>可以让项目的发布整体流程可视化，明确执行的阶段，可以快速的定位问题。并且整个项目的生命周期可以通过一个<code v-pre>Jenkinsfile</code>文件管理，而且<code v-pre>Jenkinsfile</code>文件是可以放在项目中维护的。</p>
<p>所以Pipeline相对自由风格或者其他的项目风格更容易操作。</p>
<p>  pipline是帮助Jenkins实现CI到CD转变的重要角色，是运行在jenkins2.X版本的核心插件，简单来说Pipline就是一套运行于Jenkins上的工作流框架，将原本独立运行于单个或者多个节点的任务连接起来，实现单个任务难以完成的复杂发布流程，从而实现单个任务很难实现的复杂流程编排和任务可视化。</p>
<h2 id="一、pipeline-流水线的简介" tabindex="-1"><a class="header-anchor" href="#一、pipeline-流水线的简介"><span>一、Pipeline 流水线的简介</span></a></h2>
<h3 id="_1-1-什么是jenkins的流水线" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是jenkins的流水线"><span>1.1 什么是Jenkins的流水线？</span></a></h3>
<p>Jenkins的流水线（Pipeline）是一套插件，用于实现和集成持续交付流水线到Jenkins。流水线可以自动表达从版本控制向用户和客户获取软件的进程。具体来说，软件的每次变更（在源代码控制中提交）在被释放的路上都会经历一个复杂的过程，这个过程包括以一种可靠且可重复的方式构建软件，并通过多个测试和部署阶段来开发构建好的软件。</p>
<p>对Jenkins流水线的定义被写在一个文本文件中（称为Jenkinsfile），该文件可以被提交到项目的源代码控制仓库，这是“流水线即代码”的基础。将CD流水线作为应用程序的一部分，像其他代码一样进行版本化和审查。 创建 <code v-pre>Jenkinsfile</code>并提交它到源代码控制中提供了一些即时的好处:</p>
<blockquote>
<ul>
<li>自动地为所有分支创建流水线构建过程并拉取请求。</li>
<li>在流水线上代码复查/迭代 (以及剩余的源代码)。</li>
<li>对流水线进行审计跟踪。</li>
<li>该流水线的真正的源代码, 可以被项目的多个成员查看和编辑。</li>
</ul>
</blockquote>
<p>While定义流水线的语法, 无论是在 web UI 还是在 Jenkinsfile 中都是相同的, 通常认为在<code v-pre>Jenkinsfile</code> 中定义并检查源代码控制是最佳实践。</p>
<h3 id="_1-2-pipeline中几个重要概念" tabindex="-1"><a class="header-anchor" href="#_1-2-pipeline中几个重要概念"><span>1.2 Pipeline中几个重要概念：</span></a></h3>
<blockquote>
<ul>
<li>pipeline 流水线是用户定义的一个CD流水线模型 。流水线的代码定义了整个的构建过程, 他通常包括构建, 测试和交付应用程序的阶段 。<br>
<code v-pre>pipeline 块</code>是 <code v-pre>声明式流水线语法</code>的关键部分</li>
<li>Stage：阶段，一个pipeline可以划分为若干个stage，每个stage都是一个操作步骤，比如clone代码、代码编译、代码测试和代码部署，阶段是一个逻辑分组，可以跨多个node执行。</li>
<li>Node：节点，每个node都是一个jenkins节点，可以是jenkins master也可以是jenkins agent，node是执行step的具体服务器。另外, node块是 <code v-pre>脚本化流水线语法</code>的关键部分</li>
<li>Step：步骤，step是jenkins pipeline最基本的操作单元，从在服务器创建目录到构建容器镜像，由各类Jenkins插件提供实现，一个stage中可以有多个step，例如：sh “make”</li>
</ul>
</blockquote>
<h3 id="_1-3-pipeline优势" tabindex="-1"><a class="header-anchor" href="#_1-3-pipeline优势"><span>1.3 Pipeline优势</span></a></h3>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 可持续性：jenkins的重启或者中断后不影响已经执行的<code v-pre>pipeline Job</code></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 支持暂停：pipeline可以选择停止并等待人工输入或批准后再继续执行</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 可扩展：通过<code v-pre>groovy</code>的编程更容易的扩展插件</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 并行执行：通过<code v-pre>groovy</code>脚本可以实现step，stage间的并行执行，和更复杂的相互依赖关系。</label></li>
</ul>
<h2 id="二、pipeline流水线-简单的构建" tabindex="-1"><a class="header-anchor" href="#二、pipeline流水线-简单的构建"><span>二、Pipeline流水线 简单的构建</span></a></h2>
<p>流水线既能作为任务的本身，也能作为<code v-pre>Jenkinsfile</code>，其类似于<code v-pre>dockerfile</code>（将启动<code v-pre>docker</code>的所有命令，打包成一个文件）</p>
<p>Jenkins的web-ui所做的操作，也可以落地到Jenkinsfile里面，与dockerfile类似去开发</p>
<p><strong>使用流水线可以让我们的任务从ui手动操作，转换为代码化，像docker的dockerfile一样，从shell命令到配置文件，更适合大型项目，可以让团队其他开发者同时参与进来，同时也可以编辑开发Jenkinswebui不能完成的更复杂的构建逻辑，作为开发者可读性也更好。</strong></p>
<h3 id="_2-1-jenkinsfile-必备的五个组成部分" tabindex="-1"><a class="header-anchor" href="#_2-1-jenkinsfile-必备的五个组成部分"><span>2.1 jenkinsfile 必备的五个组成部分</span></a></h3>
<p>Jenkinsfile·有5个<code v-pre>必备的组成部分</code></p>
<table>
<thead>
<tr>
<th style="text-align:left">语法</th>
<th style="text-align:left">解析</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">pipeline</td>
<td style="text-align:left">整条流水线</td>
</tr>
<tr>
<td style="text-align:left">agent</td>
<td style="text-align:left">指定执行器（也就是你要在哪台服务器上执行）</td>
</tr>
<tr>
<td style="text-align:left">stages</td>
<td style="text-align:left">所有阶段（只有一个，下面为stage）</td>
</tr>
<tr>
<td style="text-align:left">stage</td>
<td style="text-align:left">某一阶段（可有多个，下面为steps）</td>
</tr>
<tr>
<td style="text-align:left">steps</td>
<td style="text-align:left">阶段内的每一步，可执行命令（可执行多条命令）</td>
</tr>
</tbody>
</table>
<h3 id="_2-2-jenkins-上创建一个-pipeline-流水线任务" tabindex="-1"><a class="header-anchor" href="#_2-2-jenkins-上创建一个-pipeline-流水线任务"><span>2.2 Jenkins 上创建一个 Pipeline 流水线任务</span></a></h3>
<h4 id="_2-2-1-jenkins-上安装blue-ocean插件" tabindex="-1"><a class="header-anchor" href="#_2-2-1-jenkins-上安装blue-ocean插件"><span>2.2.1 Jenkins 上安装Blue Ocean插件</span></a></h4>
<p>找到插件商场；</p>
<p>Manage Jenkins --&gt; Plugins --&gt; 点击Available plugins ：搜索Blue Ocean --&gt; 点击安装</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/7922e54a0b5e418f89627cca8bb03c2e.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/b1307fff15824137b0a0afe6ec6ecedf.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>因为我这里已经安装了，就从installed里面截图了。找到<code v-pre>Blue Ocean</code>点击安装。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/64b7b7eebc334439974b3c305f593585.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/749a8c3407634b80acccbc7265583c4f.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>等待安装完重启jenkins；重启完之后就可以在首页中的左侧看到<code v-pre>打开Blue Ocean</code>了；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/aedc44abe17f490fb049814303faae6a.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>然后我们新建一个流水线任务；</p>
<h4 id="_2-2-2-新建一个-pipeline-任务" tabindex="-1"><a class="header-anchor" href="#_2-2-2-新建一个-pipeline-任务"><span>2.2.2 新建一个 Pipeline 任务</span></a></h4>
<p>点击新建Item -- &gt; 选中Pipeline，输入一个任务名称；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/b6891318d6c9466eb821fdefe65864f6.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>自己定义一下描述即可；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/922d184f9cca420a8cbaa846982f3f08.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h4 id="_2-2-3-编辑流水线" tabindex="-1"><a class="header-anchor" href="#_2-2-3-编辑流水线"><span>2.2.3 编辑流水线</span></a></h4>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/9b14b31a582d4e94a57f152ba559b27d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>鉴于对新手不太友好，我们这里先看看，然后使用<code v-pre>Hello World脚本生成</code>；生成Groovy脚本；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/110d6fa0893d492db80381a87cd6e1d7.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>默认会生成一个<code v-pre>Hello World脚本</code>，可以看到应用到了上面说的Jenkinsfile必备的五个组成部分；其他的就可以自行添加了，我们先来测试；</p>
<h4 id="_2-2-4-保存并构建流水线" tabindex="-1"><a class="header-anchor" href="#_2-2-4-保存并构建流水线"><span>2.2.4 保存并构建流水线</span></a></h4>
<ul>
<li>直接点击保存 --&gt; 然后build构建</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/47f33a7f835044439907f1bad56fee5a.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/c7188daf5e8a4149915f429dafb0d368.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>点击构建的时候会在左下角的构建历史展示，如果没有刷新一下页面就可以了；直接点击进去再去找<code v-pre>Console Output</code>控制台输出或者是直接鼠标停留点击尖角号，再点击<code v-pre>Console Output</code>查看控制台输出。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/6fba362a143d4a47a8010b702f4ef6f7.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>SUCCESS表示执行完成，没有报错：</p>
<p>我们执行完也可以看一下阶段视图</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/2a11852389c34a5bb74efd3eded8b3d0.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>这样一个简单的流水线就构建成功了，可视化我们可以点击左侧的 <code v-pre>打开Blue Ocean</code>，就可以看到刚刚执行的流程；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/b358898dcccb4b98aa098c15e9555ab6.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/7acf02978b2e4139865bc505c9ecb83a.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/72429b0af8374b2bb45d442b6c38fecd.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>这样就可以看到可视化执行过程了，当然因为这个是只有一个<code v-pre>stage</code>所以看着不是很清晰，后面我们会添加更多的<code v-pre>stage</code>，这时候的可视化过程就发挥到了他的作用了。</p>
<h2 id="三、pipeline流水线-声明式语法解析" tabindex="-1"><a class="header-anchor" href="#三、pipeline流水线-声明式语法解析"><span>三、Pipeline流水线 声明式语法解析</span></a></h2>
<p>可参考：</p>
<p><a href="https://liucy.blog.csdn.net/article/details/136528857" target="_blank" rel="noopener noreferrer">【Jenkins】Pipeline流水线语法解析全集 -- 声明式流水线</a></p>
<p><a href="https://liucy.blog.csdn.net/article/details/136567517" target="_blank" rel="noopener noreferrer">【Jenkins】Pipeline流水线语法解析全集 -- 脚本式流水线、groovy语法</a></p>
<h2 id="四、【进阶】基于pipeline-流水线实现项目的更新" tabindex="-1"><a class="header-anchor" href="#四、【进阶】基于pipeline-流水线实现项目的更新"><span>四、【进阶】基于Pipeline 流水线实现项目的更新</span></a></h2>
<h3 id="_4-1-熟悉项目更新流程" tabindex="-1"><a class="header-anchor" href="#_4-1-熟悉项目更新流程"><span>4.1 熟悉项目更新流程</span></a></h3>
<p>熟悉项目更新流程：就是我们在服务器上是怎么更新的，那么我们在这就先写好更新的流程；</p>
<p>例如：我们更新服务里的某一个文件使用的容器方式，那么步骤就是：</p>
<blockquote>
<p>1、复制文件到一个目录下；</p>
<p>2、备份之前的文件；</p>
<p>3、将复制的文件放到服务所需的目录下；</p>
<p>4、重启服务容器；</p>
<p>5、直接在容器外执行指定容器内命令启动服务；</p>
<p>6、测试（可使用脚本进行测试返回一个值，也可以自己再页面测试）</p>
</blockquote>
<p>以上就是整体更新的流程了，那么我们可以写5个 -- 6个<code v-pre>stage</code>：看以下部分：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">pipeline {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    agent {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        label '224'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    environment {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        Container_wai = '/home/lcy/'</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        Container_nei = '/application/'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    stages {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        stage('copy_file') {	// 复制文件到服务器上</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            steps {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">                </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        stage('backup_file') {	// 备份要更新的文件</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            steps {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">                </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        stage('mv_file') {	// 将新上传的文件复制到项目所需的路径下</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            steps {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">                </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        stage('restart_container') {	// 重启容器</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            steps {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">                </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        stage('start_service') {	// 启动服务</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            steps {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">                </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>解析：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">agent {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    label '224'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在node为224的服务器上执行此操作，224为添加node时自定义的名字，具体如何添加node，可查看：<a href="https://liucy.blog.csdn.net/article/details/136528857" target="_blank" rel="noopener noreferrer">【Jenkins】Pipeline流水线语法解析全集 -- 声明式流水线 </a>中的如何创建一个node节点。</p>
<br>
<p>environment：为配置的环境变量，这里我们配置的是文件上传的路径的和文件要更新的路径；</p>
<p>下面就是一个大的stages下分别有多个<code v-pre>stage</code>，一个stage代表一个操作，便于排查问题；一个<code v-pre>stage</code>下有一个<code v-pre>steps</code>，steps内可以写具体要执行的操作；</p>
</blockquote>
<p>大概流程写完之后，我们就可以在<code v-pre>steps</code>中写具体操作了；</p>
<h3 id="_4-2-基于上面创建的pipeline流水线任务修改-可自行重新创建" tabindex="-1"><a class="header-anchor" href="#_4-2-基于上面创建的pipeline流水线任务修改-可自行重新创建"><span>4.2 基于上面创建的Pipeline流水线任务修改（可自行重新创建）</span></a></h3>
<p>这里我们没有项目在git上，所以跳过git那一步，从本机往目标服务器拉取文件；</p>
<p>目标服务器记得做免密，一般在配置<code v-pre>node节点</code>的时候就会做免密；</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">pipeline {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    agent {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        label '224'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    environment {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        file_Path = '/home/lcy/'</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        Container_wai = '/home/lcy/V1.0'</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        Container_nei = '/application/'</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        file_Name = 'cs.py'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    stages {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        stage('copy_file') {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            agent {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                label 'localhost'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            steps {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                script {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                    def sourcePath = "/root/${file_Name}"</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                    def targetNode = '172.11.11.224'</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                    sh "scp ${sourcePath} root@${targetNode}:${file_Path}/"</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                    sh 'if [ $? -eq 0 ];then echo \'成功\'; else echo \'失败\'; fi'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">                }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        stage('backup_file') {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            steps {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                sh "mv ${Container_wai}/${file_Name} ${Container_wai}/${file_Name}-`date +%Y-%m-%d`"</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                echo "备份要更新的文件"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        stage('mv_file') {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            steps {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                sh "mv ${file_Path}/${file_Name} ${Container_wai}/ &#x26;&#x26; chmod 775 ${Container_wai}/${file_Name}"</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                echo '将新上传的文件复制到项目所需的路径下'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        stage('restart_container') {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            steps {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                sh "docker restart test"</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                echo '重启容器'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        stage('start_service') {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            steps {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                sh "docker exec -i test /bin/bash -c 'sh start.sh'"</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                echo '启动服务'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            post {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                always {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                    emailext(</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">                        to</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"********@qq.com"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">                        subject</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"执行成功通知: "</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> + currentBuild.fullDisplayName,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">                        body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                        """</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                        &#x3C;h2>Build Result: ${currentBuild.result}&#x3C;/h2> </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                        &#x3C;p>Full Display Name: ${currentBuild.fullDisplayName}&#x3C;/p> </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                        &#x3C;p>URL: ${currentBuild.absoluteUrl} &#x3C;/p></span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                        &#x3C;p>Change: ${currentBuild.changeSets}&#x3C;/p></span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                        &#x3C;p>user: &#x3C;/p></span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                        """</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                    )</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">                }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解析：</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/f627bd1c6e95f3627965e92e865fc7bb.png" alt="image-20240312162945962" tabindex="0" loading="lazy"><figcaption>image-20240312162945962</figcaption></figure>
<h3 id="_4-3-保存并构建流水线" tabindex="-1"><a class="header-anchor" href="#_4-3-保存并构建流水线"><span>4.3 保存并构建流水线</span></a></h3>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/dedda8e01a575c125fb4d3d97d3e95f5.png" alt="image-20240312163333547" tabindex="0" loading="lazy"><figcaption>image-20240312163333547</figcaption></figure>
<ul>
<li>跑完也可以查看阶段视图：项目 --&gt; 状态</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/240ff8f7b73d4d429bacde685175caab.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_4-5-查看服务是否正常" tabindex="-1"><a class="header-anchor" href="#_4-5-查看服务是否正常"><span>4.5 查看服务是否正常</span></a></h3>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/a3ab9d31d7a8a99992bf20589753a7ae.png" alt="image-20240312163254879" tabindex="0" loading="lazy"><figcaption>image-20240312163254879</figcaption></figure>
<p>这个是执行完发送的邮件，具体服务是否正常，需要根据自己的服务类型去判断；也可自行添加调用，判别服务是否正常。</p>
<hr>
<p>自此，流水线自动更新服务就完成了！！！</p>
<h2 id="五、相关专栏" tabindex="-1"><a class="header-anchor" href="#五、相关专栏"><span>五、相关专栏</span></a></h2>
<table>
<thead>
<tr>
<th>专栏名称</th>
<th>专栏地址</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://blog.csdn.net/liu_chen_yang/category_12493057.html" target="_blank" rel="noopener noreferrer">《Jenkins》</a></td>
<td><a href="https://blog.csdn.net/liu_chen_yang/category_12493057.html" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/liu_chen_yang/category_12493057.html</a></td>
</tr>
<tr>
<td><a href="https://blog.csdn.net/liu_chen_yang/category_12473478.html" target="_blank" rel="noopener noreferrer">《自动化运维》</a></td>
<td><a href="https://blog.csdn.net/liu_chen_yang/category_12473478.html" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/liu_chen_yang/category_12473478.html</a></td>
</tr>
<tr>
<td><a href="https://blog.csdn.net/liu_chen_yang/category_10887074.html" target="_blank" rel="noopener noreferrer">《Linux从入门到精通》</a></td>
<td><a href="https://blog.csdn.net/liu_chen_yang/category_10887074.html" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/liu_chen_yang/category_10887074.html</a></td>
</tr>
</tbody>
</table>
<h2 id="六、相关文章" tabindex="-1"><a class="header-anchor" href="#六、相关文章"><span>六、相关文章</span></a></h2>
<table>
<thead>
<tr>
<th>文章名称</th>
<th>文章链接</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/136528857" target="_blank" rel="noopener noreferrer">【Jenkins】Pipeline流水线语法解析全集 -- 声明式流水线</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/136528857" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/136528857</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/136567517" target="_blank" rel="noopener noreferrer">【Jenkins】Pipeline流水线语法解析全集 -- 脚本式流水线、groovy语法</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/136567517" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/136567517</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/136656568" target="_blank" rel="noopener noreferrer">【Linux】Jenkins Pipeline流水线详解及基于Jenkins流水线实现自动更新项目</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/136656568" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/136656568</a></td>
</tr>
</tbody>
</table>
</div></template>


