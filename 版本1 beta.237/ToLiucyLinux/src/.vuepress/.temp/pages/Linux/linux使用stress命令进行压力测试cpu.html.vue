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
<h2 id="查看系统的压力-负载情况" tabindex="-1"><a class="header-anchor" href="#查看系统的压力-负载情况" aria-hidden="true">#</a> 查看系统的压力（负载情况）</h2>
<p>uptime或者使用top</p>
<blockquote>
<p>top 显示动态的负载情况及cpu等等参数，参数比较多；<br><br>
uptime 显示静态的负载情况，只能看到系统时间、启动时间、登陆用户、平均负载</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># uptime</span>
 <span class="token number">13</span>:22:51 up <span class="token number">3</span> days, <span class="token number">22</span>:43,  <span class="token number">1</span> user,  load average: <span class="token number">0.00</span>, <span class="token number">0.01</span>, <span class="token number">0.05</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>13:22:51</p>
<p>系统时间</p>
<p>up 3 days, 22:43</p>
<p>系统启动时长</p>
<p>1 user</p>
<p>登陆用户</p>
<p>load average: 0.00, 0.01, 0.05</p>
<p>一分钟、五分钟、十五分钟负载</p>
</blockquote>
<p><strong>top</strong></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191620136.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="如何直接做压力测试呢" tabindex="-1"><a class="header-anchor" href="#如何直接做压力测试呢" aria-hidden="true">#</a> 如何直接做压力测试呢？</h2>
<p>开两个窗口，一个窗口写while死循环来持续观看，一个窗口用来检测负载</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">while</span> <span class="token boolean">true</span><span class="token punctuation">;</span><span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">"压力测试"</span> <span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看到都有占用，只不过每个cpu都没有占满，所以不推荐使用这个来做压测。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191620143.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="使用stress命令来做cpu压测" tabindex="-1"><a class="header-anchor" href="#使用stress命令来做cpu压测" aria-hidden="true">#</a> 使用stress命令来做CPU压测</h2>
<p>cpu的压力，来自于高频的计算任务，比如数值计算等，我们可以用bash程序，python程序，以及各种编程语言，来实现复杂的高频率计算。</p>
<p>这里我们用几个工具</p>
<blockquote>
<p>stress	  		stress是一个linux的压力测试工具，专门用于对设备的CPU、IO、内存、负载、磁盘等进行压测<br>
mpstat	 	 	多核CPU性能分析<br>
pidstat	 	 	实时查看cpu、内存、io等指标<br>
top	 	 	实时查看cpu、内存、负载、io等指标</p>
</blockquote>
<h3 id="实践" tabindex="-1"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践：</h3>
<ul>
<li>1、安装stress命令</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 需要安装扩展源</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> epel-release

<span class="token comment"># 安装stress命令</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> stress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>2、使用stress命令</li>
</ul>
<blockquote>
<p>stress命令：服务器进行压力测试，次命令可以让你的cpu跑满，达到100%，以此实现最高压的环境；</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>stress <span class="token parameter variable">--cpu</span> <span class="token number">4</span> <span class="token parameter variable">--timeout</span> 600s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>--cpu 4	指定要占满的cpu核数<br><br>
--timeout 600s	指定超时（结束）时间，压测600s后自动结束</p>
</blockquote>
<ul>
<li>2.1 先使用stress命令占满一个cpu来测试</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>stress <span class="token parameter variable">--cpu</span> <span class="token number">1</span> <span class="token parameter variable">--timeout</span> 600s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开两个窗口；一个执行命；，一个用来检测查看cpu占用。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191621358.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>2.2 在使用stress命令占满三个cpu来测试</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>stress <span class="token parameter variable">--cpu</span> <span class="token number">3</span> <span class="token parameter variable">--timeout</span> 600s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开两个窗口；一个执行命；，一个用来检测查看cpu占用。</p>
<p>执行命令，可以看到占用3个cpu</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191621895.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>三个cpu均已占满</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191621924.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>2.3 在使用stress命令占满四个cpu来测试</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>stress <span class="token parameter variable">--cpu</span> <span class="token number">4</span> <span class="token parameter variable">--timeout</span> 600s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开两个窗口；一个执行命；，一个用来检测查看cpu占用。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191621747.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以看到都已经占满了。</p>
<ul>
<li>2.4 在使用stress命令占满四个cpu来测试，我要跑5个cpu，但实际上服务器只有4核cpu，会怎么样呢？我们一起来看看：</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>stress <span class="token parameter variable">--cpu</span> <span class="token number">5</span> <span class="token parameter variable">--timeout</span> 600s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开两个窗口；一个执行命；，一个用来检测查看cpu占用。</p>
<p>跑了5个cpu</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191621255.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以看到4核cpu也是占满了，但是，我们跑了5个压力测试，他会平均分摊cpu的处理核数，并使其占满所有cpu。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191621320.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="附加" tabindex="-1"><a class="header-anchor" href="#附加" aria-hidden="true">#</a> 附加：</h2>
<p>Linux查看CPU详细信息</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> /proc/cpuinfo
lscpu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linux查看cpu型号-去重" tabindex="-1"><a class="header-anchor" href="#linux查看cpu型号-去重" aria-hidden="true">#</a> Linux查看CPU型号（去重）</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> /proc/cpuinfo <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">'model name'</span> <span class="token operator">|</span><span class="token function">uniq</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看服务器共有多少核的时候需要先查看cpu多少块，在查看cpu核数，如是2块4核的一共就是8核cpu；</p>
<h3 id="查看物理cpu个数【多少块cpu】" tabindex="-1"><a class="header-anchor" href="#查看物理cpu个数【多少块cpu】" aria-hidden="true">#</a> 查看物理cpu个数【多少块cpu】</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> /proc/cpuinfo <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">'physical id'</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看cpu是几核" tabindex="-1"><a class="header-anchor" href="#查看cpu是几核" aria-hidden="true">#</a> 查看cpu是几核</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> /proc/cpuinfo <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">'cpu cores'</span><span class="token operator">|</span><span class="token function">uniq</span>
<span class="token function">cat</span> /proc/cpuinfo <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">'cores'</span><span class="token operator">|</span><span class="token function">uniq</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看逻辑cpu的个数【线程】" tabindex="-1"><a class="header-anchor" href="#查看逻辑cpu的个数【线程】" aria-hidden="true">#</a> 查看逻辑cpu的个数【线程】</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> /proc/cpuinfo <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">'processor'</span> <span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="推荐" tabindex="-1"><a class="header-anchor" href="#推荐" aria-hidden="true">#</a> 推荐</h2>
<p>如果想直观的查看系统的一些硬件信息，可使用该脚本，执行脚本自动获取部分系统硬件信息；</p>
<blockquote>
<p><a href="https://download.csdn.net/download/liu_chen_yang/88218063?spm=1001.2014.3001.5503" target="_blank" rel="noopener noreferrer">自动获取服务器系统信息脚本：（操作系统、系统内核、系统架构、CPU型号、CPU核数、显卡型号、内存等等）<ExternalLinkIcon/></a></p>
</blockquote>
<blockquote>
<p>自动获取服务器的信息都有：</p>
<p>1、服务器为物理机还是虚拟机还是KVM还是云服务器，型号是什么；</p>
<p>2、操作系统</p>
<p>3、系统内核</p>
<p>4、系统架构</p>
<p>5、CPU型号</p>
<p>6、CPU核数</p>
<p>7、显卡型号</p>
<p>8、显卡显存</p>
<p>9、总内存</p>
<p>10、jdk版本</p>
<p>11、mysql 版本</p>
<p>12、redis 版本</p>
<p>13、python 版本</p>
<p>14、GCC 版本</p>
<p>15、CUDA 版本</p>
</blockquote>
<p>示例图：</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191622409.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


