<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">CSDN博客专家<ExternalLinkIcon/></a><br>
  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<h2 id="ll-按大小排序" tabindex="-1"><a class="header-anchor" href="#ll-按大小排序" aria-hidden="true">#</a> ll 按大小排序</h2>
<p>ll 按大小排序：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token operator">=</span> ll 查看详细信息
ll <span class="token parameter variable">-Sh</span>  由大到小排序<span class="token punctuation">(</span>可读的方式<span class="token punctuation">)</span>
ll <span class="token parameter variable">-Shr</span>  由小到大排序<span class="token punctuation">(</span>可读的方式<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数分析：</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>分析结果</th>
</tr>
</thead>
<tbody>
<tr>
<td>ll</td>
<td>查看详细信息：相当于“ls -l”命令</td>
</tr>
<tr>
<td>S</td>
<td>文件大小，由大到小排序</td>
</tr>
<tr>
<td>h</td>
<td>以人类可读方式展示</td>
</tr>
<tr>
<td>r</td>
<td>倒序排列</td>
</tr>
</tbody>
</table>
<ul>
<li>示例1：查看日志文件大小 <font color=red>由大到小排序(可读的方式)</font></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ll <span class="token parameter variable">-Sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181444130.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>示例2：查看日志文件大小 <font color=red>由小到大排序(可读的方式)</font></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ll <span class="token parameter variable">-Shr</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181444123.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<hr>
<h2 id="ll-按时间排序" tabindex="-1"><a class="header-anchor" href="#ll-按时间排序" aria-hidden="true">#</a> ll 按时间排序</h2>
<p>ll 按时间排序：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ll <span class="token parameter variable">-th</span>	按日期由新到旧排序
ll <span class="token parameter variable">-thr</span> 按日期由旧到新排序
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数分析：</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>分析结果</th>
</tr>
</thead>
<tbody>
<tr>
<td>ll</td>
<td>查看详细信息：相当于“ls -l”命令</td>
</tr>
<tr>
<td>t</td>
<td>日期时长，按日期由新到旧排序</td>
</tr>
<tr>
<td>h</td>
<td>以人类可读方式展示</td>
</tr>
<tr>
<td>r</td>
<td>倒序排列</td>
</tr>
</tbody>
</table>
<ul>
<li>示例1：查看日志文件时间顺序 <font color=red>由新到旧排序(可读的方式)</font></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ll <span class="token parameter variable">-th</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181444810.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>示例2：查看日志文件时间顺序 <font color=red>由旧到新排序(可读的方式)</font></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ll <span class="token parameter variable">-thr</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181444696.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<hr>
<h2 id="ls-查看隐藏文件" tabindex="-1"><a class="header-anchor" href="#ls-查看隐藏文件" aria-hidden="true">#</a> ls 查看隐藏文件</h2>
<p>查看隐藏文件：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>正常查看文件也只能看到表面让你看到的文件，而有的时候恶意的人会利用隐藏文件来破坏你的服务器及服务信息；多数隐藏文件都是配置文件。</p>
<ul>
<li>正常看到的一个目录下的文件：</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181444406.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>查看一个目录及以下的所有隐藏文件：</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181444416.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>明显就比正常看到的要多一些。这些以.开头的都是隐藏文件了。</p>
<hr>
<h2 id="du-查看目录大小及排序" tabindex="-1"><a class="header-anchor" href="#du-查看目录大小及排序" aria-hidden="true">#</a> du 查看目录大小及排序</h2>
<p>du 的一些常用命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">du</span> <span class="token parameter variable">-h</span>		以人类可读方式列出所有文件、目录及目录中的子文件（包含隐藏文件）
<span class="token function">du</span> <span class="token parameter variable">-sh</span>  	查看当前目录的总大小
<span class="token function">du</span> <span class="token parameter variable">-sh</span> * 	列出当前目录的各个目录、文件的大小
<span class="token function">du</span> <span class="token parameter variable">-sh</span> * <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-h</span>	按从小到大排序展示
<span class="token function">du</span> <span class="token parameter variable">-sh</span> * <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-rh</span>	按从大到小排序展示
<span class="token function">du</span> <span class="token parameter variable">-sh</span> .<span class="token punctuation">[</span>^.<span class="token punctuation">]</span>* *		显示当前目录下所有隐藏文件和非隐藏文件的大小
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数分析：</li>
</ul>
<table>
<thead>
<tr>
<th>du 参数</th>
<th>du 解析</th>
</tr>
</thead>
<tbody>
<tr>
<td>du</td>
<td>查看当前目录所有的文件大小</td>
</tr>
<tr>
<td>h</td>
<td>以人类可读方式展示</td>
</tr>
<tr>
<td>s</td>
<td>查看当前目录的总大小</td>
</tr>
<tr>
<td>*</td>
<td>列出所有文件及目录（不包含目录下的子文件）</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>sort 参数</th>
<th>sort 解析</th>
</tr>
</thead>
<tbody>
<tr>
<td>sort</td>
<td>默认升序排序</td>
</tr>
<tr>
<td>-r</td>
<td>倒序排序</td>
</tr>
<tr>
<td>-h</td>
<td>以人类可读方式（KB,MB,GB），一般用于查看文件大小排序</td>
</tr>
</tbody>
</table>
<ul>
<li>示例1：查看当前目录的总大小</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">du</span> <span class="token parameter variable">-sh</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181444881.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>示例2：列出当前目录的各个目录、文件的大小</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">du</span> <span class="token parameter variable">-sh</span> *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181444020.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>示例3：列出当前目录的各个目录、文件的大小，<font color=red>按从小到大排序展示</font></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">du</span> <span class="token parameter variable">-sh</span> * <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181444090.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>示例4：列出当前目录的各个目录、文件的大小，<font color=red>按从大到小排序展示</font></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">du</span> <span class="token parameter variable">-sh</span> * <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-rh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181443347.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="du-查看目录大小及展示隐藏文件" tabindex="-1"><a class="header-anchor" href="#du-查看目录大小及展示隐藏文件" aria-hidden="true">#</a> du 查看目录大小及展示隐藏文件</h2>
<ul>
<li>显示当前目录下所有隐藏文件和非隐藏文件的大小</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">du</span> <span class="token parameter variable">-sh</span> .<span class="token punctuation">[</span>^.<span class="token punctuation">]</span>* *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181443958.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> du -sh .[^.]* * 分析：</label></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">du</span> <span class="token parameter variable">-sh</span>	查看当前目录可见的所有文件的大小
<span class="token builtin class-name">.</span>		当前目录
<span class="token punctuation">[</span>^.<span class="token punctuation">]</span>	查看以.开头的文件及目录，也就是隐藏文件
* 		列出所有文件
<span class="token punctuation">[</span>^.<span class="token punctuation">]</span>*	列出所有以.开头的隐藏文件及目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以，执行du -sh .[^.]* * 可以查看所有文件和目录的大小（包含隐藏文件）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># du -sh .[^.]* *</span>
20K	.bash_history
<span class="token number">4</span>.0K	.bash_logout
<span class="token number">4</span>.0K	.bash_profile
<span class="token number">4</span>.0K	.bashrc
<span class="token number">4</span>.0K	.blacklist
76M	.cache
<span class="token number">8</span>.2M	.config
<span class="token number">4</span>.0K	.cshrc
<span class="token number">4</span>.0K	.dbus
<span class="token number">4</span>.0K	.esd_auth
12K	.gnupg
<span class="token number">0</span>	.groovy
<span class="token number">4</span>.0K	.ICEauthority
60K	.java
<span class="token number">2</span>.6G	.jenkins
<span class="token number">3</span>.9M	.local
211M	.m2
25M	.mozilla
<span class="token number">0</span>	.pki
<span class="token number">4</span>.0K	.ssh
<span class="token number">4</span>.0K	.tcshrc
<span class="token number">8</span>.0K	.viminfo
<span class="token number">4</span>.0K	.Xauthority
<span class="token number">0</span>	a
<span class="token number">4</span>.0K	anaconda-ks.cfg
<span class="token number">4</span>.0K	a.sh
173M	jdk-18.0.2.1.zip
<span class="token number">0</span>	公共
<span class="token number">0</span>	模板
<span class="token number">0</span>	视频
<span class="token number">0</span>	图片
<span class="token number">0</span>	文档
<span class="token number">0</span>	下载
<span class="token number">0</span>	音乐
<span class="token number">0</span>	桌面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="附加1-du-查看目录大小忽略指定目录" tabindex="-1"><a class="header-anchor" href="#附加1-du-查看目录大小忽略指定目录" aria-hidden="true">#</a> 附加1：du 查看目录大小忽略指定目录</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">du</span> <span class="token parameter variable">-sh</span> /* <span class="token parameter variable">--exclude</span><span class="token operator">=</span>/media
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>先查看当前目录文件</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost /<span class="token punctuation">]</span><span class="token comment"># ls</span>
application  applog  bin  boot  data  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181443914.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>然后查看目录大小过滤media挂载磁盘的目录</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost /<span class="token punctuation">]</span><span class="token comment"># du -sh /* --exclude=/media</span>
384M	/application
16K	/applog
<span class="token number">0</span>	/bin
117M	/boot
<span class="token number">0</span>	/data
<span class="token number">0</span>	/dev
32M	/etc
400K	/home
<span class="token number">0</span>	/lib
<span class="token number">0</span>	/lib64
<span class="token number">0</span>	/mnt
<span class="token number">0</span>	/opt
du: 无法访问<span class="token string">"/proc/98795/task/98795/fd/4"</span><span class="token builtin class-name">:</span> 没有那个文件或目录
du: 无法访问<span class="token string">"/proc/98795/task/98795/fdinfo/4"</span><span class="token builtin class-name">:</span> 没有那个文件或目录
du: 无法访问<span class="token string">"/proc/98795/fd/4"</span><span class="token builtin class-name">:</span> 没有那个文件或目录
du: 无法访问<span class="token string">"/proc/98795/fdinfo/4"</span><span class="token builtin class-name">:</span> 没有那个文件或目录
<span class="token number">0</span>	/proc
<span class="token number">3</span>.0G	/root
68M	/run
<span class="token number">0</span>	/sbin
<span class="token number">0</span>	/srv
<span class="token number">0</span>	/sys
<span class="token number">6</span>.6M	/tmp
<span class="token number">1</span>.8G	/usr
391M	/var
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181443380.png" alt="" loading="lazy"><br>
看的时候没有看到<code v-pre>media</code>目录，成功过滤掉。</p>
<hr>
<h2 id="附加2-du-查看目录大小忽略指定目录-多个" tabindex="-1"><a class="header-anchor" href="#附加2-du-查看目录大小忽略指定目录-多个" aria-hidden="true">#</a> 附加2：du 查看目录大小忽略指定目录（多个）</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">du</span> <span class="token parameter variable">-sh</span> * <span class="token parameter variable">--exclude</span><span class="token operator">=</span>jenkins <span class="token parameter variable">--exclude</span><span class="token operator">=</span>maven	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>查看当前目录（/usr/local/）</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost local<span class="token punctuation">]</span><span class="token comment"># ls</span>
bin  etc  games  include  jenkins  lib  lib64  libexec  maven  sbin  share  src
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181443344.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>过滤掉<code v-pre>jenkins</code>和<code v-pre>maven</code>目录；</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost local<span class="token punctuation">]</span><span class="token comment"># du -sh * --exclude=jenkins --exclude=maven</span>
<span class="token number">0</span>	bin
<span class="token number">0</span>	etc
<span class="token number">0</span>	games
<span class="token number">0</span>	include
<span class="token number">0</span>	lib
<span class="token number">0</span>	lib64
<span class="token number">0</span>	libexec
<span class="token number">0</span>	sbin
<span class="token number">0</span>	share
<span class="token number">0</span>	src
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181443948.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>成功过滤掉多个目录，用于查看一个目录下的子目录大小，但有的知道很大像过滤掉不看他的情况下使用。</p>
</blockquote>
<h2 id="❄-相关文章" tabindex="-1"><a class="header-anchor" href="#❄-相关文章" aria-hidden="true">#</a> ❄ 相关文章</h2>
<table>
<thead>
<tr>
<th>文章名称</th>
<th>文章地址</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://blog.csdn.net/liu_chen_yang/article/details/125256901" target="_blank" rel="noopener noreferrer">【Linux】之【磁盘】相关的命令及解析[df、du、iostat、iotop]<ExternalLinkIcon/></a></td>
<td><a href="https://blog.csdn.net/liu_chen_yang/article/details/125256901" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/liu_chen_yang/article/details/125256901<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://blog.csdn.net/liu_chen_yang/article/details/123070483" target="_blank" rel="noopener noreferrer">【Linux】查看文件/目录按时间大小、文件大小、+隐藏文件排序【附加：查看目录大小时忽略指定目录】<ExternalLinkIcon/></a></td>
<td><a href="https://blog.csdn.net/liu_chen_yang/article/details/123070483" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/liu_chen_yang/article/details/123070483<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
</div></template>


