<template><div><blockquote>
<p>这篇文章主要给大家介绍了关于Linux系统中CPU占用率较高问题排查思路与解决方法，文中通过示例代码介绍的非常详细，对大家学习或者使用Linux具有一定的参考学习价值，需要的朋友们下面来一起学习学习吧</p>
</blockquote>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<p>作为 Linux 运维工程师，在日常工作中我们会遇到 Linux服务器上出现CPU负载达到100%居高不下的情况，如果CPU 持续跑高，则会影响业务系统的正常运行，带来企业损失。<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412200949255.png" alt="" loading="lazy"></p>
<p>很多运维的同学遇到这种状况往往会不知所措，对于CPU过载问题通常使用以下两种方式即可快速定位：</p>
<h3 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一"><span>方法一</span></a></h3>
<p>第一步：使用</p>
<blockquote>
<p>top命令，然后按shift+p按照CPU排序</p>
</blockquote>
<p>找到占用CPU过高的进程的pid</p>
<p>第二步：使用</p>
<blockquote>
<p>top -H -p [进程id]</p>
</blockquote>
<p>找到进程中消耗资源最高的线程的id</p>
<p>第三步：使用</p>
<blockquote>
<p>echo 'obase=16;[线程id]' | bc或者printf &quot;%x\n&quot; [线程id]</p>
</blockquote>
<p>将线程id转换为16进制（字母要小写）</p>
<blockquote>
<p>bc是linux的计算器命令</p>
</blockquote>
<p>第四步：执行</p>
<blockquote>
<p>jstack [进程id] |grep -A 10 [线程id的16进制]”</p>
</blockquote>
<p>查看线程状态信息</p>
<h3 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二"><span>方法二</span></a></h3>
<p>第一步：使用</p>
<blockquote>
<p>top命令，然后按shift+p按照CPU排序</p>
</blockquote>
<p>找到占用CPU过高的进程</p>
<p>第二步：使用</p>
<blockquote>
<p>ps -mp pid -o THREAD,tid,time | sort -rn</p>
</blockquote>
<p>获取线程信息，并找到占用CPU高的线程</p>
<p>第三步：使用</p>
<blockquote>
<p>echo 'obase=16;[线程id]' | bc或者printf &quot;%x\n&quot; [线程id]</p>
</blockquote>
<p>将需要的线程ID转换为16进制格式</p>
<p>第四步：使用</p>
<blockquote>
<p>jstack pid |grep tid -A 30 [线程id的16进制]</p>
</blockquote>
<p>打印线程的堆栈信息</p>
<h2 id="案例分析" tabindex="-1"><a class="header-anchor" href="#案例分析"><span>案例分析</span></a></h2>
<font color=red>结合上面来做。</font><h3 id="场景描述" tabindex="-1"><a class="header-anchor" href="#场景描述"><span>场景描述</span></a></h3>
<p>生产环境下JAVA进程高CPU占用故障排查</p>
<h3 id="解决过程" tabindex="-1"><a class="header-anchor" href="#解决过程"><span>解决过程</span></a></h3>
<p>1、根据top命令，shift+p，发现PID为41673的Java进程占用CPU高达250%，出现故障。<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412200949184.png" alt="" loading="lazy">2、找到该进程后，如何定位具体线程或代码呢，首先显示线程列表,并按照CPU占用高的线程排序：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# ps -mp 41673 -o THREAD,tid,time | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sort</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -rn</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>显示结果如下：<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412200949311.png" alt="" loading="lazy"><br>
3.将需要的线程TID转换为16进制格式</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# printf </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"%x\n"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> 41846</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">a376</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>4、最后使用jstack命令打印出该进程下面的此线程的堆栈信息：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# jstack 41673 |</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "a376"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -A</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 30</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法"><span>解决办法</span></a></h3>
<p>1、根据top命令，shift+p，发现PID为41673的Java进程占用CPU高达250%，出现故障。<br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412200949607.png" alt="" loading="lazy"><br>
2、根据pid查看他的进程看看是什么服务占用这么高</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ps</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -ef</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> |</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> grep</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 41673</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412200949313.png" alt="" loading="lazy"><br>
3、查看到是一个java进程占用这么高，然后看看有没有用，没有用的话就杀掉它</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">kill</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -9</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 41673</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>4、再次top查看cpu整体就降下来了。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>以上就是这篇文章的全部内容了，希望本文的内容对大家的学习或者工作具有一定的参考学习价值，谢谢大家对我的支持。</p>
</div></template>


