<template><div><blockquote>
<p>🍁<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！</p>
</blockquote>
<h3 id="clamav简介" tabindex="-1"><a class="header-anchor" href="#clamav简介" aria-hidden="true">#</a> ClamAV简介</h3>
<blockquote>
<p>ClamAV是Linux操作系统一款<font color=green>免费的杀毒工具</font>，可以通过命令执行病毒库升级、查找病毒和删除病毒。<font color=green>ClamAV属于免费开源产品，支持多种平台，如：Linux/Unix、MAC OS X、Windows、OpenVMS。</font><br>
 <br>
ClamAV是基于病毒扫描的命令行工具，但同时也有支持图形界面的ClamTK工具。<br>
 <br>
ClamAV主要用于邮件服务器扫描邮件。它有多种接口从邮件服务器扫描邮件，支持文件格式有如：ZIP、RAR、TAR、GZIP、BZIP2、HTML、DOC、PDF,、SIS CHM、RTF等等。<br>
 <br>
ClamAV可以自动升级病毒库，还可以从共享库中运行。</p>
</blockquote>
<p><strong>clamav 有两个命令：clamdscan、clamscan：</strong></p>
<ul>
<li>clamscan 命令：通用，<font color=orange>不依赖服务</font>，命令参数较多，<font color=red>执行速度稍慢</font></li>
<li>clamdscan 命令：是一个<font color=orange>搭配clamd常驻服务</font>的扫毒工具，功能非常类似clamscan，<font color=green>执行效率较高</font>，但是可用的参数较少（因为部分功能是由 clamd 控制的）。<font color=red>不用带 -r ，默认会递归扫描子目录</font></li>
</ul>
<h3 id="clamav的安装" tabindex="-1"><a class="header-anchor" href="#clamav的安装" aria-hidden="true">#</a> ClamAV的安装</h3>
<p>centos安装方式：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#添加扩展源</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> epel-release
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> clamav clamavd clamav-update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ubuntu安装方式：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#升级apt源</span>
<span class="token function">apt</span> update
<span class="token function">apt</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> clamav clamtk clamav-daemon clamdscan device-tree-compiler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新病毒库" tabindex="-1"><a class="header-anchor" href="#更新病毒库" aria-hidden="true">#</a> 更新病毒库</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>freshclam
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181438396.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这样就是更新成功了；</p>
<font color=red>如遇到报错，可参考报错： </font> <a href="https://liucy.blog.csdn.net/article/details/129284185" target="_blank" rel="noopener noreferrer">clamav升级问题报错2：Can‘t query current.cvd.clamav.net<ExternalLinkIcon/></a><h3 id="clamav的使用" tabindex="-1"><a class="header-anchor" href="#clamav的使用" aria-hidden="true">#</a> ClamAV的使用</h3>
<h4 id="clamav的语法" tabindex="-1"><a class="header-anchor" href="#clamav的语法" aria-hidden="true">#</a> ClamAV的语法</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>clamscan <span class="token punctuation">[</span>选项/参数/简便参数<span class="token punctuation">]</span> <span class="token punctuation">[</span>文件/目录<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="clamav常用参数" tabindex="-1"><a class="header-anchor" href="#clamav常用参数" aria-hidden="true">#</a> ClamAV常用参数</h4>
<table>
<thead>
<tr>
<th>参数</th>
<th>简便参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>--help</td>
<td>-h</td>
<td>显示帮助页面</td>
</tr>
<tr>
<td>--version</td>
<td>-V</td>
<td>查看版本号</td>
</tr>
<tr>
<td>--verbose</td>
<td>-v</td>
<td>查看详细信息</td>
</tr>
<tr>
<td>--archive verbose</td>
<td>-a</td>
<td>在扫描的存档中显示文件名</td>
</tr>
<tr>
<td>--recursive[=yes/no(*)]</td>
<td>-r</td>
<td>递归扫描子目录，后面需跟目录</td>
</tr>
<tr>
<td>--infected</td>
<td>-i</td>
<td>仅打印已感染的文件</td>
</tr>
<tr>
<td>--log=FILE</td>
<td>-l</td>
<td>将扫描报告保存到文件中，后面需跟文件名</td>
</tr>
<tr>
<td>--file-list=FILE</td>
<td>-f</td>
<td>从file扫描文件，后面需跟文件名</td>
</tr>
<tr>
<td>--database=FILE/DIR</td>
<td>-d</td>
<td>FILE/DIR从FILE加载病毒数据库或从DIR加载所有支持的数据库文件</td>
</tr>
<tr>
<td>--allmatch[=yes/no(*)]</td>
<td>-z</td>
<td>找到匹配项后继续在文件中扫描</td>
</tr>
<tr>
<td>--quiet</td>
<td></td>
<td>仅输出错误消息</td>
</tr>
<tr>
<td>--tempdir=DIRECTORY</td>
<td></td>
<td>在目录中创建临时文件</td>
</tr>
<tr>
<td>--leave-temps[=yes/no(*)]</td>
<td></td>
<td>不删除临时文件</td>
</tr>
<tr>
<td>--gen-json[=yes/no(*)]</td>
<td></td>
<td>生成扫描文件的json描述并打印</td>
</tr>
<tr>
<td>--remove[=yes/no(*)]</td>
<td></td>
<td>删除受感染的文件，小心使用</td>
</tr>
<tr>
<td>--max-dir-recursion=num</td>
<td></td>
<td>目录深度，=5是扫描最高5层目录结束</td>
</tr>
</tbody>
</table>
<h4 id="clamav的用法" tabindex="-1"><a class="header-anchor" href="#clamav的用法" aria-hidden="true">#</a> ClamAV的用法</h4>
<h5 id="扫描病毒" tabindex="-1"><a class="header-anchor" href="#扫描病毒" aria-hidden="true">#</a> 扫描病毒</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#对/data/目录扫描，并将扫描的日志放到该文件中</span>
clamscan <span class="token parameter variable">-i</span> <span class="token parameter variable">-r</span> /data/ <span class="token parameter variable">-l</span> ./clamav.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>-i	只显示被感染的文件</li>
<li>-r	扫描目录，后面需跟目录</li>
<li>-l	保存日志文件的位置，后面需跟文件名</li>
</ul>
<p>注意：上述命令仅扫描病毒，不会对病毒文件进行删除，需手动删除。目录越大扫描速度越慢。</p>
<p>扫描结果如下：</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181438378.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这种的是没有病毒；<font color=red>Infected files</font> 显示0，则没有扫到病毒，1或其他则扫出了病毒。</p>
<blockquote>
<p>Known viruses	 	   #已知病毒<br>
Engine version	  	  #发动机版本<br>
Scanned directories 	 #扫描的目录<br>
Scanned files	 	 #扫描的文件<br>
Infected files 	 	 #受感染的文件<br>
Data scanned	 	 #扫描数据<br>
Data read	   	 #数据读取<br>
Time	     	 #时间<br>
Start Date	   	 #开始日期：<br>
End Date	   	 #结束日期</p>
</blockquote>
<h5 id="扫描病毒并自动删除病毒" tabindex="-1"><a class="header-anchor" href="#扫描病毒并自动删除病毒" aria-hidden="true">#</a> 扫描病毒并自动删除病毒</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#对/data/目录扫描，并将扫描的日志放到该文件中，有病毒则自动删除</span>
clamscan <span class="token parameter variable">-i</span> <span class="token parameter variable">-r</span> /data/ <span class="token parameter variable">--remove</span><span class="token operator">=</span>yes <span class="token parameter variable">-l</span> ./clamav.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181438883.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>删除完可以再去哪个目录看看。</p>
<h5 id="创建日志保存路径" tabindex="-1"><a class="header-anchor" href="#创建日志保存路径" aria-hidden="true">#</a> 创建日志保存路径</h5>
<p>后续可以将病毒扫描结果保存到/var/log/clamav/ 文件夹下。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /var/log/clamav/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>扫描/home/下是否有病毒；目录越大扫描速度越慢。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>clamscan <span class="token parameter variable">-i</span> <span class="token parameter variable">-r</span> /home/ <span class="token parameter variable">-l</span> /var/log/clamav/clamav.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装配置邮件服务" tabindex="-1"><a class="header-anchor" href="#安装配置邮件服务" aria-hidden="true">#</a> 安装配置邮件服务</h2>
<p>安装邮件服务可参考： <a href="https://liucy.blog.csdn.net/article/details/129257050" target="_blank" rel="noopener noreferrer">【Linux】部署mailx服务及发送邮件告警<ExternalLinkIcon/></a></p>
<h2 id="配置定时扫描和邮件告警" tabindex="-1"><a class="header-anchor" href="#配置定时扫描和邮件告警" aria-hidden="true">#</a> 配置定时扫描和邮件告警</h2>
<p>ClamAV扫描邮件告警脚本可以选择下载也可以选择直接复制，不下载的希望多一个浏览量，谢谢蟹蟹；</p>
<p>ClamAV扫描邮件告警脚本：<a href="https://download.csdn.net/download/liu_chen_yang/87522380" target="_blank" rel="noopener noreferrer">ClamAV病毒扫描之邮件告警脚本<br>
<ExternalLinkIcon/></a></p>
<p>ClamAV扫描邮件告警脚本：</p>
<blockquote>
<p>ClamAV病毒扫描之邮件告警脚本，里面内容可根据自己的情况自行修改。<br>
自行修改的内容有：<br>
  mail 邮件收件人<br>
  要扫描的路径（默认为/根目录）<br>
  日志存储的路径（默认为/var/log/clamav/）<br><br>
  还有就是最后的if判断那边也要记得修改自己的邮件收件人，判断三个都要改。<br>
  如果是一个人的话，可以直接写邮箱地址；如果是多个人的话在判断后面改为$mail_A，然后把需要通知的人写到最上面的mail_A环境变量中</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
freshclam   <span class="token comment">##病毒库更新</span>

<span class="token assign-left variable">mail_A</span><span class="token operator">=</span><span class="token punctuation">(</span>mail1@qq.com,mail2@qq.com,mail3@163.com<span class="token punctuation">)</span> <span class="token comment">## 邮件收件人，可批量</span>

<span class="token comment"># 获取当前时间（用于创建、读取日志文件）</span>
<span class="token assign-left variable">date</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">date</span> +%Y%m%d-%H:%M:%S<span class="token variable">`</span></span>

<span class="token comment"># *填写扫描路径（可根据自己的情况来自定义，默认为/根目录）</span>
<span class="token assign-left variable">clpath</span><span class="token operator">=</span><span class="token string">"/"</span>

<span class="token comment"># *填写要存储日志的路径（可根据自己的情况来自定义，默认为/var/log/clamav/）</span>
<span class="token assign-left variable">clamav_log</span><span class="token operator">=</span><span class="token string">"/var/log/clamav"</span>


<span class="token comment"># 判断是否有存储日志的目录，如果没有则先创建，为了下面的存放日志而创建</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> <span class="token variable">$clamav_log</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"有这个目录"</span> <span class="token operator">></span> /dev/null
<span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"没有这个目录"</span> <span class="token operator">></span> /dev/null
        <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$clamav_log</span>
<span class="token keyword">fi</span>

<span class="token comment">#扫描/目录 结果打印到$clamav_log/clamav$date.log</span>
clamscan <span class="token parameter variable">-r</span> <span class="token parameter variable">-i</span> <span class="token variable">$clpath</span> <span class="token parameter variable">-l</span> <span class="token variable">$clamav_log</span>/clamav<span class="token variable">$date</span>.log
<span class="token comment">#删除WARING开头的内容</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span>  <span class="token string">'/^WARNING/d'</span> <span class="token variable">$clamav_log</span>/clamav<span class="token variable">$date</span>.log
<span class="token comment">#删除第一行到第三行的内容</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">'1,3d'</span> <span class="token variable">$clamav_log</span>/clamav<span class="token variable">$date</span>.log

<span class="token comment">##获取当前服务器ip ，可以先执行这条命令看看自己的ip对不对。</span>
<span class="token assign-left variable">ip</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">hostname</span> <span class="token parameter variable">-I</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">" "</span> <span class="token string">'{print $1}'</span><span class="token variable">`</span></span>
<span class="token comment">#echo $IP</span>

<span class="token assign-left variable">data_log</span><span class="token operator">=</span><span class="token string">""</span>
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> line
<span class="token keyword">do</span>
<span class="token comment">#  data_log+=$line"&lt;br>"</span>
  <span class="token assign-left variable">data_log</span><span class="token operator">+=</span><span class="token variable">$line</span><span class="token string">"<span class="token entity" title="\n">\n</span>"</span>
<span class="token keyword">done</span> <span class="token operator">&lt;</span> <span class="token variable">$clamav_log</span>/clamav<span class="token variable">$date</span>.log

<span class="token comment">##获取高危病毒的个数</span>
<span class="token assign-left variable">infected_files</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> $clamav_log/clamav$date.log <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">"Infected files"</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">": "</span> <span class="token string">'{print $2}'</span><span class="token variable">)</span></span>
<span class="token comment">##获取执行时的时间</span>
<span class="token assign-left variable">scan_time</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> $clamav_log/clamav$date.log <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">"Start Date"</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">": "</span> <span class="token string">'{print $2}'</span><span class="token variable">)</span></span>

<span class="token assign-left variable">data_log</span><span class="token operator">=</span><span class="token variable">${data_log<span class="token operator">/</span>SCAN SUMMARY<span class="token operator">/</span>扫描结果}</span>
<span class="token assign-left variable">data_log</span><span class="token operator">=</span><span class="token variable">${data_log<span class="token operator">/</span>Known viruses<span class="token operator">/</span>病毒库数量}</span>
<span class="token assign-left variable">data_log</span><span class="token operator">=</span><span class="token variable">${data_log<span class="token operator">/</span>Engine version<span class="token operator">/</span>引擎版本}</span> 
<span class="token assign-left variable">data_log</span><span class="token operator">=</span><span class="token variable">${data_log<span class="token operator">/</span>Scanned directories<span class="token operator">/</span>已扫描目录}</span> 
<span class="token assign-left variable">data_log</span><span class="token operator">=</span><span class="token variable">${data_log<span class="token operator">/</span>Scanned files<span class="token operator">/</span>已扫描文件}</span> 
<span class="token assign-left variable">data_log</span><span class="token operator">=</span><span class="token variable">${data_log<span class="token operator">/</span>Infected files<span class="token operator">/</span>已发现病毒文件}</span> 
<span class="token assign-left variable">data_log</span><span class="token operator">=</span><span class="token variable">${data_log<span class="token operator">/</span>Total errors<span class="token operator">/</span>错误总数}</span>
<span class="token assign-left variable">data_log</span><span class="token operator">=</span><span class="token variable">${data_log<span class="token operator">/</span>Data scanned<span class="token operator">/</span>已扫描数据}</span> 
<span class="token assign-left variable">data_log</span><span class="token operator">=</span><span class="token variable">${data_log<span class="token operator">/</span>Data read<span class="token operator">/</span>读取数据}</span> 
<span class="token assign-left variable">data_log</span><span class="token operator">=</span><span class="token variable">${data_log<span class="token operator">/</span>Time<span class="token operator">/</span>扫描时长}</span> 
<span class="token assign-left variable">data_log</span><span class="token operator">=</span><span class="token variable">${data_log<span class="token operator">/</span>Start Date<span class="token operator">/</span>开始时间}</span> 
<span class="token assign-left variable">data_log</span><span class="token operator">=</span><span class="token variable">${data_log<span class="token operator">/</span>End Date<span class="token operator">/</span>结束时间}</span> 


<span class="token assign-left variable">body</span><span class="token operator">=</span><span class="token string">"杀毒软件 ClamAV 在<span class="token variable">$scan_time</span>   对您的服务器<span class="token variable">$ip</span>进行了扫描，扫描的路径为：<span class="token variable">$clpath</span>，扫描结果：暂未发现病毒！"</span>
<span class="token assign-left variable">body2</span><span class="token operator">=</span><span class="token string">"杀毒软件 ClamAV 在<span class="token variable">$scan_time</span>   对您的服务器<span class="token variable">$ip</span>进行了扫描,扫描的路径为：<span class="token variable">$clpath</span>，扫描结果：发现有<span class="token variable">$infected_files</span>个高危病毒 ；请立即登录服务器处理！详情可见附件↓ "</span>

<span class="token assign-left variable">log2</span><span class="token operator">=</span><span class="token string">"杀毒软件 ClamAV 在<span class="token variable">$scan_time</span>   对您的服务器<span class="token variable">$ip</span>进行了扫描,扫描的路径为：<span class="token variable">$clpath</span>，扫描结果：发现有<span class="token variable">$infected_files</span>个高危病毒 ；病毒为：<span class="token entity" title="\n">\n</span><span class="token variable">$data_log</span><span class="token entity" title="\n">\n</span>请立即登录服务器处理！！！"</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">"<span class="token variable">$log2</span>"</span> <span class="token operator">></span> ./<span class="token variable">${ip}</span>_clamav.txt

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$infected_files</span>"</span> <span class="token parameter variable">-eq</span> <span class="token string">"0"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token variable">$body</span> <span class="token operator">|</span> mail <span class="token parameter variable">-s</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">"<span class="token variable">$ip</span> <span class="token entity" title="\r">\r</span>服务器病毒处理通知-无病毒"</span><span class="token variable">)</span></span>"</span>  mail1@qq.com
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$infected_files</span>"</span> <span class="token parameter variable">-gt</span> <span class="token string">"0"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token variable">$body2</span> <span class="token operator">|</span> mail <span class="token parameter variable">-a</span> ./<span class="token variable">${ip}</span>_clamav.txt <span class="token parameter variable">-s</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">"<span class="token variable">$ip</span> <span class="token entity" title="\r">\r</span>服务器病毒处理通知-有 <span class="token variable">$infected_files</span> 个高危病毒"</span><span class="token variable">)</span></span>"</span>  mail1@qq.com
<span class="token keyword">else</span>
	<span class="token builtin class-name">echo</span> <span class="token variable">$body2</span> <span class="token operator">|</span> mail <span class="token parameter variable">-s</span> <span class="token string">"<span class="token variable">$ip</span> :此次查询失败，请检查日志！"</span> mail1@qq.com
<span class="token keyword">fi</span>

<span class="token comment">#$mail_A  ##收件人地址</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><font color=red>注：该脚本只适用于clamscan命令，并不适用于clamdscan命令。</font><h3 id="发送邮件告警样式演示" tabindex="-1"><a class="header-anchor" href="#发送邮件告警样式演示" aria-hidden="true">#</a> 发送邮件告警样式演示：</h3>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181438162.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>显示内容：</strong></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181438066.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181438147.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="删除病毒方式" tabindex="-1"><a class="header-anchor" href="#删除病毒方式" aria-hidden="true">#</a> 删除病毒方式</h3>
<blockquote>
<p>方式一：扫描到病毒可以手动删除，进入病毒目录直接删除就可以；<br>
 <br>
方式二：也可以找到病毒目录，再次执行扫描病毒命令并指定病毒所在目录，<code v-pre>clamscan -i -r /data/ --remove=yes -l ./clamav.log</code> 来实现删除病毒；</p>
</blockquote>
<h3 id="配置定时扫描" tabindex="-1"><a class="header-anchor" href="#配置定时扫描" aria-hidden="true">#</a> 配置定时扫描</h3>
<p>配置定时扫描也就是设置周期性计划任务</p>
<blockquote>
<font color=red>提示：</font><p>如果是只扫描某一个路径下的，可以一天扫一次就行；<br>
如果是直接扫根目录，建议一周扫一次。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">vim</span> /etc/crontab

<span class="token comment">#以用户root身份定时执行脚本，sh为执行命令，/data/----为脚本绝对路径；每天凌晨4点扫描一次</span>
<span class="token number">0</span> <span class="token number">4</span> * * * root /bin/sh /data/clamav/clamav.sh

<span class="token comment">###每周日凌晨1点clamav扫描漏洞（扫描根目录推荐）</span>
<span class="token number">0</span> <span class="token number">1</span> * * <span class="token number">7</span>   root /bin/sh /home/clamav/clamav.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181438417.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181438711.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>配置完成之后保存退出即可。</p>
<h3 id="附加-升级clamav报错解决方式及相关文章" tabindex="-1"><a class="header-anchor" href="#附加-升级clamav报错解决方式及相关文章" aria-hidden="true">#</a> 附加：升级ClamAV报错解决方式及相关文章</h3>
<table>
<thead>
<tr>
<th style="text-align:left">文章名</th>
<th style="text-align:left">文章链接🔗</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://liucy.blog.csdn.net/article/details/129284185" target="_blank" rel="noopener noreferrer">clamav升级问题报错2：Can‘t query current.cvd.clamav.net<ExternalLinkIcon/></a></td>
<td style="text-align:left"><a href="https://liucy.blog.csdn.net/article/details/129284185" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/129284185<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://liucy.blog.csdn.net/article/details/129257050" target="_blank" rel="noopener noreferrer">【Linux】部署mailx服务及发送邮件告警<ExternalLinkIcon/></a></td>
<td style="text-align:left"><a href="https://liucy.blog.csdn.net/article/details/129257050" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/129257050<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://download.csdn.net/download/liu_chen_yang/87522380" target="_blank" rel="noopener noreferrer">ClamAV病毒扫描之邮件告警脚本<ExternalLinkIcon/></a></td>
<td style="text-align:left"><a href="https://download.csdn.net/download/liu_chen_yang/87522380" target="_blank" rel="noopener noreferrer">https://download.csdn.net/download/liu_chen_yang/87522380<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
</div></template>


