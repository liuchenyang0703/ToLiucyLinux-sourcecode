<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/f599934504f440d8872f960b2e7ee0c5.jpeg" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
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
<h2 id="前言-问题说明" tabindex="-1"><a class="header-anchor" href="#前言-问题说明" aria-hidden="true">#</a> 前言 / 问题说明</h2>
<blockquote>
<p>最近在做数据库备份，使用的是脚本的方式备份多个库，手动执行脚本备份是没问题的，然后就使用了周期性计划任务开始定时备份；<br>
但是有一天，我说看一下备份的数据，结果一看，定时任务备份的sql文件压缩包都是4k，解压出来的...sql都是大小都是0，里面更是没有数据都是空的，这是为什么呢？</p>
</blockquote>
<h2 id="问题分析" tabindex="-1"><a class="header-anchor" href="#问题分析" aria-hidden="true">#</a> 问题分析</h2>
<h3 id="_1、首先我们分析手动执行是否成功" tabindex="-1"><a class="header-anchor" href="#_1、首先我们分析手动执行是否成功" aria-hidden="true">#</a> 1、首先我们分析手动执行是否成功</h3>
<p>首先我们分析手动执行是否成功，使用的脚本，那么我们就去存放脚本的路径下执行一下脚本看看备份的是否有数据；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 先切换到存放脚本的目录下</span>
<span class="token punctuation">[</span>root@csdn data<span class="token punctuation">]</span><span class="token comment"># cd /usr/local/mysql/data/</span>

<span class="token comment"># 执行备份脚本</span>
<span class="token punctuation">[</span>root@csdn data<span class="token punctuation">]</span><span class="token comment"># sh back.sh </span>
mysqldump: <span class="token punctuation">[</span>Warning<span class="token punctuation">]</span> Using a password on the <span class="token builtin class-name">command</span> line interface can be insecure.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚本执行完，我们去备份数据库文件的路径下看看大小；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 切换到备份数据库文件的路径下</span>
<span class="token punctuation">[</span>root@csdn data<span class="token punctuation">]</span><span class="token comment"># cd backup/data/</span>
<span class="token comment"># 查看大小</span>
<span class="token punctuation">[</span>root@csdn data<span class="token punctuation">]</span><span class="token comment"># du -sh *</span>
<span class="token number">4</span>.0K	<span class="token number">20231120</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231121</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231122</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231123</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231124</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231125</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231126</span>.sql.tgz
236K	<span class="token number">20231127</span>.sql.tgz
<span class="token comment"># 最后一个就是刚刚手动执行备份的了；明显和前面的不一样；</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我们解压下来看</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 解压备份的库的压缩包</span>
<span class="token punctuation">[</span>root@csdn data<span class="token punctuation">]</span><span class="token comment"># tar xf 20231127.sql.tgz </span>
<span class="token comment"># 查看大小</span>
<span class="token punctuation">[</span>root@csdn data<span class="token punctuation">]</span><span class="token comment"># du -sh *</span>
<span class="token number">4</span>.0K	<span class="token number">20231120</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231121</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231122</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231123</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231124</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231125</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231126</span>.sql.tgz
680K	<span class="token number">20231127</span>.sql
236K	<span class="token number">20231127</span>.sql.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到解压下来是<code v-pre>680K</code>，我们可以进去看看，是有数据的；<br>
那么就可以排除脚本的本身问题；</p>
<h3 id="_2、我们分析定时任务中的命令写的是否正确" tabindex="-1"><a class="header-anchor" href="#_2、我们分析定时任务中的命令写的是否正确" aria-hidden="true">#</a> 2、我们分析定时任务中的命令写的是否正确</h3>
<p>执行定时任务一般里面需要写绝对路径；<br>
我的定时任务是在<code v-pre>/etc/crontab</code>下写着，我们来看看;</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> /etc/crontab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/54e16ff4d3ed4e82b89f3e92fac17c08.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>可以看到写的是：<code v-pre>0 0 */1 * * root /bin/sh /usr/local/mysql/data/back.sh</code>，每天备份一次，而且都写的绝对路径；<br>
我们把他这个绝对路径拿出来试试看看执行一下是否成功？</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 定时任务中的脚本执行命令</span>
<span class="token punctuation">[</span>root@csdn data<span class="token punctuation">]</span><span class="token comment"># /bin/sh /usr/local/mysql/data/back.sh</span>
mysqldump: <span class="token punctuation">[</span>Warning<span class="token punctuation">]</span> Using a password on the <span class="token builtin class-name">command</span> line interface can be insecure.

<span class="token comment"># 然后去备份数据库的存储路径看看</span>
<span class="token punctuation">[</span>root@csdn data<span class="token punctuation">]</span><span class="token comment"># cd /usr/local/mysql/data/backup/data/</span>

<span class="token comment"># 查看文件大小</span>
<span class="token punctuation">[</span>root@csdn data<span class="token punctuation">]</span><span class="token comment"># du -sh *</span>
<span class="token number">4</span>.0K	<span class="token number">20231120</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231121</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231122</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231123</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231124</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231125</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231126</span>.sql.tgz
236K	<span class="token number">20231127</span>.sql.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到是没问题的，如果刚刚备份过怕没有覆盖，可以自己删除，一般备份是会直接覆盖的，而且你解压下来的文件也会默认删除；<br>
也是同样的方法，看着备份的压缩包的大小是没问题的，解压下来看看；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@csdn data<span class="token punctuation">]</span><span class="token comment"># tar xf 20231127.sql.tgz </span>
<span class="token punctuation">[</span>root@csdn data<span class="token punctuation">]</span><span class="token comment"># du -sh *</span>
<span class="token number">4</span>.0K	<span class="token number">20231120</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231121</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231122</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231123</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231124</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231125</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231126</span>.sql.tgz
680K	<span class="token number">20231127</span>.sql
236K	<span class="token number">20231127</span>.sql.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也是680K，可以vim进入查看一下是否有数据；经过查看是有数据的；<br>
那么也可以排除计划任务的命令是没有问题的；哪是为什么呢？</p>
<h3 id="_3、检查crontab中的执行环境" tabindex="-1"><a class="header-anchor" href="#_3、检查crontab中的执行环境" aria-hidden="true">#</a> 3、检查crontab中的执行环境</h3>
<p>既然确定脚本没有问题，并且手动执行能够正确备份数据，那么问题可能出在 crontab 设置或执行环境上。以下是排查的一些步骤：</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 1. <strong>检查 crontab 语法</strong>：确保你的 crontab 语法是正确的。一个常见的错误是忘记指定正确的路径或环境变量。<font color=gree>这个是没问题的；</font></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 2. <strong>查看 cron 日志</strong>：很多 Linux 发行版默认并不会为 cron 任务记录日志。但如果你的系统配置了 cron 日志，那么检查 <code v-pre>/var/log/cron</code> 或 <code v-pre>/var/log/syslog</code> 中的相关条目可能会提供有用的信息。<font color=gree>这个也是没问题的。</font></label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 3. <strong>输出重定向</strong>：确保 cron 任务没有把输出（包括错误输出）重定向到 <code v-pre>/dev/null</code> 或其他看不到的地方。为了更好地调试，可以考虑将输出重定向到一个特定的日志文件。</label></li>
</ul>
<p>例如：<br>
将定时任务改为每分钟执行一次，方便查看，加一个追加日志到执行文件中，并且把错误、非错误信息都存放到这个文件中。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>* * * * * root /bin/sh /usr/local/mysql/data/back.sh <span class="token operator">>></span> /usr/local/mysql/data/backup/logfile.log <span class="token operator"><span class="token file-descriptor important">2</span>></span><span class="token file-descriptor important">&amp;1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样，就可以查看 <code v-pre>logfile.log</code> 来检查是否有任何错误或提示信息。</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 4. <strong>环境变量</strong>：cron 执行的环境与登录 shell 的环境可能不同。某些环境变量，如 <code v-pre>PATH</code>，可能在 cron 中并未设置，导致你的脚本中的某些命令无法找到。考虑在脚本开头定义重要的环境变量，或者在 crontab 文件中设置它们。</label></li>
</ul>
<hr>
<p>修改完crontab中的定时任务，让他将执行命令的输出 输出到指定文件中，每分钟执行一次，我们等待一分钟，去看一下指定的目录下的文件；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 切换到指定目录</span>
<span class="token punctuation">[</span>root@csdn data<span class="token punctuation">]</span><span class="token comment"># cd /usr/local/mysql/data/backup/</span>
<span class="token comment"># 查看输出的文件内容</span>
<span class="token punctuation">[</span>root@csdn backup<span class="token punctuation">]</span><span class="token comment"># cat logfile.log</span>
/usr/local/mysql/data/back.sh: line <span class="token number">47</span>: mysqldump: <span class="token builtin class-name">command</span> not found
/usr/local/mysql/data/back.sh: line <span class="token number">47</span>: mysqldump: <span class="token builtin class-name">command</span> not found
/usr/local/mysql/data/back.sh: line <span class="token number">47</span>: mysqldump: <span class="token builtin class-name">command</span> not found
/usr/local/mysql/data/back.sh: line <span class="token number">47</span>: mysqldump: <span class="token builtin class-name">command</span> not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到都是找不到<code v-pre>mysqldump</code>命令，这就是第4种，环境变量的问题了；</p>
<h3 id="_4、发现问题-周期性计划任务中执行找不到mysqldump命令" tabindex="-1"><a class="header-anchor" href="#_4、发现问题-周期性计划任务中执行找不到mysqldump命令" aria-hidden="true">#</a> 4、发现问题，周期性计划任务中执行找不到mysqldump命令</h3>
<p>如果在周期性计划任务执行时输出找不到 <code v-pre>mysqldump</code> 命令，那么很可能是因为 <code v-pre>PATH</code> 环境变量的问题。Cron 任务运行时的环境变量可能与你在终端中运行的环境变量不同，尤其是 <code v-pre>PATH</code> 变量。<code v-pre>mysqldump</code> 可能不在 cron 的 <code v-pre>PATH</code> 中，因此无法找到。</p>
<ul>
<li><strong>解决方法：</strong></li>
</ul>
<p>①、  <strong>查看mysqldump绝对路径</strong>：可以通过运行 <code v-pre>which mysqldump</code> 在终端中找到它的完整路径。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@csdn backup<span class="token punctuation">]</span><span class="token comment"># which mysqldump</span>
/usr/local/mysql/bin/mysqldump
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到是在<code v-pre>/usr/local/mysql/bin/mysqldump</code>，那么你可以在脚本中直接使用这个路径来调用它，而不是简单地使用 <code v-pre>mysqldump</code>。</p>
<p>②、 <strong>在脚本中设置 PATH</strong>：在脚本的开头定义 <code v-pre>PATH</code> 环境变量，确保它包含 <code v-pre>mysqldump</code> 的路径。</p>
<p>例如：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 配置添加mysqldump环境变量</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/usr/local/mysql/bin/:<span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完之后，等待一分钟，查看输出的日志信息；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@csdn backup<span class="token punctuation">]</span><span class="token comment"># tailf logfile.log </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/6ca70cc1110c481db3f14766df7df17e.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>可以看到已经没有报错了；这个是提示，说你使用了明文密码，不影响；</p>
<p>看着是备份没有什么问题了，我们可以去看备份的数据；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 切换到备份数据的目录</span>
<span class="token punctuation">[</span>root@csdn backup<span class="token punctuation">]</span><span class="token comment"># cd /usr/local/mysql/data/backup/data/</span>
<span class="token comment"># 查看大小</span>
<span class="token punctuation">[</span>root@csdn data<span class="token punctuation">]</span><span class="token comment"># du -sh *</span>
<span class="token number">4</span>.0K	<span class="token number">20231120</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231121</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231122</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231123</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231124</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231125</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231126</span>.sql.tgz
236K	<span class="token number">20231127</span>.sql.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到大小也是没问题的，然后我们解压下来看看文件数据；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 解压备份的数据压缩包</span>
<span class="token punctuation">[</span>root@csdn data<span class="token punctuation">]</span><span class="token comment"># tar xf 20231127.sql.tgz </span>
<span class="token comment"># 查看大小</span>
<span class="token punctuation">[</span>root@csdn data<span class="token punctuation">]</span><span class="token comment"># du -sh *</span>
<span class="token number">4</span>.0K	<span class="token number">20231120</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231121</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231122</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231123</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231124</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231125</span>.sql.tgz
<span class="token number">4</span>.0K	<span class="token number">20231126</span>.sql.tgz
308K	<span class="token number">20231127</span>.sql
236K	<span class="token number">20231127</span>.sql.tgz

<span class="token comment"># 查看数据</span>
<span class="token punctuation">[</span>root@csdn data<span class="token punctuation">]</span><span class="token comment"># vim 20231127.sql</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>都是有数据的，那么问题就解决了；<br>
周期性计划任务中的输出日志，如果想删除就可以删除，不想删除也不影响，但是会占空间，也不大。</p>
<h2 id="问题解决" tabindex="-1"><a class="header-anchor" href="#问题解决" aria-hidden="true">#</a> 问题解决</h2>
<blockquote>
<p>推荐一个mysql定时备份的脚本：<a href="https://download.csdn.net/download/liu_chen_yang/87776124" target="_blank" rel="noopener noreferrer">mysql数据库定时备份脚本+定时删除 <ExternalLinkIcon/></a></p>
</blockquote>
</div></template>


