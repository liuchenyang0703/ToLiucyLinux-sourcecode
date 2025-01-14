<template><div><blockquote>
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
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191554918.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="一、elfk的部署-docker部署方式⚽" tabindex="-1"><a class="header-anchor" href="#一、elfk的部署-docker部署方式⚽"><span>一、ELFK的部署 -- docker部署方式⚽</span></a></h2>
<h3 id="_1-前置准备" tabindex="-1"><a class="header-anchor" href="#_1-前置准备"><span>1.  前置准备</span></a></h3>
<h4 id="_1-1-服务器信息" tabindex="-1"><a class="header-anchor" href="#_1-1-服务器信息"><span>1.1 服务器信息</span></a></h4>
<table>
<thead>
<tr>
<th style="text-align:center">IP</th>
<th style="text-align:left">操作系统</th>
<th style="text-align:left">系统配置</th>
<th>环境</th>
<th style="text-align:left">服务</th>
<th style="text-align:left">端口</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">172.16.11.213</td>
<td style="text-align:left">CentOS Linux 7 (Core)<br>X86架构</td>
<td style="text-align:left">CPU：4核8线程<br>内存：16G<br>硬盘：100G</td>
<td>docker<br>docker-compose<br></td>
<td style="text-align:left">Elasticsearch<br>Logstash<br/>Kibana<br/>Filebeat<br/>nginx</td>
<td style="text-align:left">9200 / 9300<br>5044<br>5601<br><br>80</td>
</tr>
</tbody>
</table>
<p><strong>要用到的服务包信息：</strong></p>
<table>
<thead>
<tr>
<th style="text-align:center">软件安装包名称</th>
<th style="text-align:center">软件版本</th>
<th style="text-align:center">功能</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">docker</td>
<td style="text-align:center">24.0.5</td>
<td style="text-align:center">容器：提供单独elfk环境</td>
</tr>
<tr>
<td style="text-align:center">docker-compose</td>
<td style="text-align:center">1.29.2</td>
<td style="text-align:center">容器编排工具：用于同步管理elfk</td>
</tr>
<tr>
<td style="text-align:center">elasticsearch</td>
<td style="text-align:center">8.12.2</td>
<td style="text-align:center">日志存储</td>
</tr>
<tr>
<td style="text-align:center">kibana</td>
<td style="text-align:center">8.12.2</td>
<td style="text-align:center">日志数据图形化展示</td>
</tr>
<tr>
<td style="text-align:center">logstash</td>
<td style="text-align:center">8.12.2</td>
<td style="text-align:center">日志处理</td>
</tr>
<tr>
<td style="text-align:center">filebeat</td>
<td style="text-align:center">8.12.2</td>
<td style="text-align:center">日志采集</td>
</tr>
<tr>
<td style="text-align:center">nginx</td>
<td style="text-align:center">1.24.0</td>
<td style="text-align:center">nginx服务</td>
</tr>
</tbody>
</table>
<p><strong>ELFK 关系图：</strong></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191554242.png" alt="ELFK基础架构图" tabindex="0" loading="lazy"><figcaption>ELFK基础架构图</figcaption></figure>
<h4 id="_1-2-关闭防火墙及selinux沙盒" tabindex="-1"><a class="header-anchor" href="#_1-2-关闭防火墙及selinux沙盒"><span>1.2 关闭防火墙及selinux沙盒</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 先查看防火墙是否开启</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> status</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 如果是开启的那就关闭并设置开机不自启</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> stop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> firewalld</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> disable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 设置selinux为Disabled</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/selinux/config</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 设置 SELINUX=disabled</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191554917.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<hr>
<p>如果防火墙开启的话，需要打开的端口有：（端口可自行定义）</p>
<ul>
<li>Elasticsearch：<code v-pre>9200</code>、<code v-pre>9300</code></li>
<li>Kibana：<code v-pre>5601</code></li>
<li>Logstash：<code v-pre>5044</code></li>
<li>nginx：<code v-pre>80</code></li>
<li><strong>filebeat</strong> 本身不监听任何端口，它是一个轻量级的日志文件收集器，用于将日志发送到Logstash或Elasticsearch。</li>
</ul>
<blockquote>
<p><strong>注：</strong></p>
<p><strong>9200 本地elasticsearch服务本地的端口<br>
9300 是elasticsearch集群的通信端口</strong></p>
</blockquote>
<h4 id="_1-3-将elfk镜像包上传到服务器上-也可以等在执行docker-compose时自动拉取" tabindex="-1"><a class="header-anchor" href="#_1-3-将elfk镜像包上传到服务器上-也可以等在执行docker-compose时自动拉取"><span>1.3 将ELFK镜像包上传到服务器上（也可以等在执行docker-compose时自动拉取）</span></a></h4>
<p>在启动服务的时候默认是可以拉取ELFK镜像的，不过最近dockerhub好像国内用不了了，拉不了镜像；</p>
<p>而且拉镜像也慢，<font coolor=red>还需要配置docker镜像加速</font>，所以，离线镜像还是比较好的，可以提前上传到服务器上；</p>
<ul>
<li>
<p>E: elasticsearch 数据存储、数据搜索；</p>
<p><s>官网下载地址：<a href="https://www.elastic.co/cn/downloads/elasticsearch/" target="_blank" rel="noopener noreferrer">https://www.elastic.co/cn/downloads/elasticsearch/</a></s></p>
</li>
<li>
<p>L: logstash 数据采集、数据清洗、数据过滤；</p>
<p><s>官网下载地址：<a href="https://www.elastic.co/cn/downloads/logstash" target="_blank" rel="noopener noreferrer">https://www.elastic.co/cn/downloads/logstash</a></s></p>
</li>
<li>
<p>K: kibana 数据分析、数据展示；</p>
<p><s>官网下载地址：<a href="https://www.elastic.co/cn/downloads/kibana/" target="_blank" rel="noopener noreferrer">https://www.elastic.co/cn/downloads/kibana/</a></s></p>
</li>
<li>
<p>F：filebeat 收集日志数据；</p>
<p><s>官网下载地址：<a href="https://www.elastic.co/guide/en/beats/filebeat/index.html" target="_blank" rel="noopener noreferrer">https://www.elastic.co/guide/en/beats/filebeat/index.html</a></s></p>
</li>
</ul>
<p>镜像下载地址：</p>
<blockquote>
<p>我这边目前只有：8.12.2、7.1.0版本；CSDN下载地址；</p>
<p>其他版本可以百度看看：</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:center">包名</th>
<th style="text-align:center">地址</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://download.csdn.net/download/liu_chen_yang/89427498" target="_blank" rel="noopener noreferrer">ELFK docker镜像-7.1.0版本（elasticsearch、filebeat）</a></td>
<td style="text-align:center"><a href="https://download.csdn.net/download/liu_chen_yang/89427498" target="_blank" rel="noopener noreferrer">https://download.csdn.net/download/liu_chen_yang/89427498</a></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://download.csdn.net/download/liu_chen_yang/89427504" target="_blank" rel="noopener noreferrer">ELFK docker镜像-7.1.0版本（kibana、logstash）</a></td>
<td style="text-align:center"><a href="https://download.csdn.net/download/liu_chen_yang/89427504" target="_blank" rel="noopener noreferrer">https://download.csdn.net/download/liu_chen_yang/89427504</a></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://download.csdn.net/download/liu_chen_yang/89427462" target="_blank" rel="noopener noreferrer">ELFK docker镜像-8.12.2版本（elasticsearch、filebeat）</a></td>
<td style="text-align:center"><a href="https://download.csdn.net/download/liu_chen_yang/89427462" target="_blank" rel="noopener noreferrer">https://download.csdn.net/download/liu_chen_yang/89427462</a></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://download.csdn.net/download/liu_chen_yang/89427463" target="_blank" rel="noopener noreferrer">ELFK docker镜像-8.12.2版本（kibana、logsatsh）</a></td>
<td style="text-align:center"><a href="https://download.csdn.net/download/liu_chen_yang/89427463" target="_blank" rel="noopener noreferrer">https://download.csdn.net/download/liu_chen_yang/89427463</a></td>
</tr>
</tbody>
</table>
<blockquote>
<font color=red>注： ELFK的四个镜像包的保持版本需一致。</font></blockquote>
<h4 id="_1-4-校正时间" tabindex="-1"><a class="header-anchor" href="#_1-4-校正时间"><span>1.4 校正时间</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 下载ntpdate命令</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ntpdate</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 时间校正</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ntpdate</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cn.pool.ntp.org</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-5-本文注意事项" tabindex="-1"><a class="header-anchor" href="#_1-5-本文注意事项"><span>1.5 本文注意事项</span></a></h4>
<blockquote>
<font color=red size=4x>**注意：本文出现的 IP 和 容器外的路径 请根据自己的实际情况自定义**</font><br><br><font color=red size=4x>**注意：本文出现的 IP 和 容器外的路径 请根据自己的实际情况自定义**</font><br><br><font color=red size=4x>**注意：本文出现的 IP 和 容器外的路径 请根据自己的实际情况自定义**</font></blockquote>
<h3 id="_2-部署docker" tabindex="-1"><a class="header-anchor" href="#_2-部署docker"><span>2. 部署docker</span></a></h3>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 方法一：</label></li>
</ul>
<p>参考部署文档：<a href="https://blog.csdn.net/liu_chen_yang/article/details/123842609" target="_blank" rel="noopener noreferrer">linux（centos）中部署docker（步骤超全，含带一些发展史和一些概念）</a></p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 方法二：</label></li>
</ul>
<p>可以选择离线一键安装：<a href="https://download.csdn.net/download/liu_chen_yang/88647183" target="_blank" rel="noopener noreferrer">docker24.0.5离线安装包 （一键部署）</a></p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 方法三：</label></li>
</ul>
<p>按照以下方式安装</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 安装utils工具</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> yum-utils</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 安装docker扩展源工具</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum-config-manager</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --add-repo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://download.docker.com/linux/centos/docker-ce.repo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 安装docker服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker-ce</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker-ce-cli</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> containerd.io</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 设置docker开机自启并启动服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> daemon-reload</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-部署docker-compose" tabindex="-1"><a class="header-anchor" href="#_3-部署docker-compose"><span>3. 部署docker-compose</span></a></h3>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 方法一：</label></li>
</ul>
<p>参考部署文档部署：<a href="https://blog.csdn.net/liu_chen_yang/article/details/124688952" target="_blank" rel="noopener noreferrer">Linux中安装/部署docker-compose</a></p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 方法二：</label></li>
</ul>
<p>可以选择离线安装：<a href="https://download.csdn.net/download/liu_chen_yang/89428645" target="_blank" rel="noopener noreferrer">docker-compose1.29.2离线包</a></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191554716.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_4-部署elfk" tabindex="-1"><a class="header-anchor" href="#_4-部署elfk"><span>4. 部署ELFK</span></a></h3>
<p><strong>注意事项：</strong></p>
<blockquote>
<p><strong><font color=red size=4x>注意：本文出现的 IP 和 容器外的路径 请根据自己的实际情况自定义</font></strong><br><br><font color=red size=4x><strong>注意：本文出现的 IP 和 容器外的路径 请根据自己的实际情况自定义</strong></font><br><br><font color=red size=4x><strong>注意：本文出现的 IP 和 容器外的路径 请根据自己的实际情况自定义</strong></font></p>
</blockquote>
<h4 id="_4-1-创建elfk的项目路径" tabindex="-1"><a class="header-anchor" href="#_4-1-创建elfk的项目路径"><span>4.1 创建ELFK的项目路径</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_4-2-创建es目录及配置文件" tabindex="-1"><a class="header-anchor" href="#_4-2-创建es目录及配置文件"><span>4.2 创建ES目录及配置文件</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建ES目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/elasticsearch/{plugins,config,data,logs}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 进入es的config目录</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/elasticsearch/config</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建es配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">touch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> es.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 给所有ES目录读写执行权限</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">chmod</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 775</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -R</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/elasticsearch/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 编辑es配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> es.yml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 集群名称</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">cluster.name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">mycluster</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 节点名称</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">node.name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">mynode</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 网络绑定地址</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">network.host</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0.0.0.0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 默认端口：9200 本地elasticsearch服务本地的端口、9300 是elasticsearch集群的通信端口</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">http.port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">9200</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">transport.port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">9300</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 开启单节点模式</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">node.roles</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">master</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ingest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ml</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 内存限制</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#bootstrap.memory_lock: true</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#ES_JAVA_OPTS: "-Xms512m -Xmx512m"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 关闭集群发现功能（单节点）</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">discovery.type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">single-node</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># --------------------------- ssl安全认证配置 ----------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 关闭 X-Pack 安全模式</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">xpack.security.enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 禁用初始化生成密码功能</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">xpack.security.enrollment.enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 禁用客户端之间连接加密，如果启用，客户端（如 Kibana、Logstash、filebeat）就需要通过加密方式访问</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">xpack.security.http.ssl.enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 指定ssl证书地址（开启安全模式就需要开启这个）</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#xpack.security.http.ssl.keystore.path: certs/http.p12</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 禁用 Elasticsearch 节点间传输层通信的加密。</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">xpack.security.transport.ssl.enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">false</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 证书的验证模式，certificate 为双向 SSL/TLS 认证（即节点间相互验证证书）</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#xpack.security.transport.ssl.verification_mode: certificate</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 如果启用了ssl认证，下面两个就是配置证书和私钥的文件路径</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#xpack.security.transport.ssl.keystore.path: certs/transport.p12</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#xpack.security.transport.ssl.truststore.path: certs/transport.p12</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># ----------------------- END SECURITY AUTO CONFIGURATION -------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 注意：在生产环境中，建议启用 SSL/TLS 加密来保护数据传输的安全性，特别是在公共或不安全的网络中。如果你选择启用 SSL/TLS，需要确保你有有效的证书和密钥库，并正确配置了密钥库和信任库的路径。在开发或测试环境中，可能会为了方便而禁用这些安全特性，但要意识到这可能会带来安全风险。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-创建logstash目录及配置文件" tabindex="-1"><a class="header-anchor" href="#_4-3-创建logstash目录及配置文件"><span>4.3 创建Logstash目录及配置文件</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建logstash目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/logstash/{conf.d,config,data,logs}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 进入logstash的config目录</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/logstash/config</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建logstash的yml文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">touch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> logstash.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 编辑logstash配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> logstash.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">path.config:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/share/logstash/conf.d/</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">.conf</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">path.logs:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/share/logstash/logs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 进入logstash的conf.d目录</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/logstash/conf.d</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建logstash配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">touch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> logstash.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 编辑logstash配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> logstash.conf</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">input</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  beats</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> => </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5044</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    codec</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> => </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"json"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">output</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    elasticsearch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	# es的地址</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      	hosts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> => [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"http://172.16.11.213:9200"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      	# 用户名（如果es开启了用户名密码这里就需要配置，如果没开启就不用配置）</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      	#user => "elastic"</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      	# 密码</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      	#password => "123456"</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	# 索引</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      	#index => "dashu-park-error-log"</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	# 类型</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	#document_type => "fire"</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	# 主键</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	#document_id => "%{id}"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># mail插件，可以用来报警发邮件</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#    email {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#        port           => "25"</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#        address        => "smtp.163.com"</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#        username       => "123123123@163.com"</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#        password       => "1231231231"</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#        authentication => "plain"</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#        use_tls        => false</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#        from           => "123123123@qq.com"</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#        subject        => "dashu-park-zone项目中有error日志信息"</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#        to             => "123123123@qq.com"</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#        via            => "smtp"</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#        body           => "错误日志： \n  %{message} "</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#    }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#  }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#  redis {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#     host => ["172.16.11.213"] #这个是标明redis服务的地址</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#     port => 9001</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#     codec => plain</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#     db => 1 #redis中的数据库，select的对象</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#     key => elk_log #redis中的键值</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#     data_type => list #一般就是list和channel</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#     password => DaShuRedisoRhFG9xT6kXIZl5b</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#     timeout => 5</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#     workers => 1</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#  }</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  stdout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> codec</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> => </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">rubydebug</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-4-创建kibana目录及配置文件" tabindex="-1"><a class="header-anchor" href="#_4-4-创建kibana目录及配置文件"><span>4.4 创建Kibana目录及配置文件</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建kibana目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/kibana/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 进入kibana目录</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/kibana/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建kibana配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">touch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kibana.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 编辑kibana配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kibana.yml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">server.host</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"0.0.0.0"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">server.shutdownTimeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"5s"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">elasticsearch.hosts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"http://172.16.11.213:9200"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ]</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 配置中文</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">i18n.locale</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">zh-CN</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 配置用户名密码（es有用户名密码的时候在开启）</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#elasticsearch.username: "kibana"</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#elasticsearch.password: "123456"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-5-创建filebeat目录及配置文件" tabindex="-1"><a class="header-anchor" href="#_4-5-创建filebeat目录及配置文件"><span>4.5 创建filebeat目录及配置文件</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建filebeat目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/filebeat/{config,data,logs}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 进入filebeat/config目录</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/filebeat/config</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建filebeat配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">touch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> filebeat.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 去除filebeat组和其他用户的写入权限。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> go-w</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/filebeat/config/filebeat.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 编辑filebeat配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> filebeat.yml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#=========================== Filebeat inputs =============================</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">filebeat.inputs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">log</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # Change to true to enable this input configuration.</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # Paths that should be crawled and fetched. Glob based paths.</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  paths</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#可以配置多个日志路径</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 如果是docker部署，这里就是docker容器内的路径，而且需要和宿主机的路径进行映射</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/usr/share/filebeat/logs/*.log</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    #- </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/usr/share/filebeat/logs/info.log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  #</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">指定自定义字段</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  fields</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:							</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">       project</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"fire"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  #</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">字段1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       #</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">hostName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"172.16.11.213"</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	  #字段2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  multiline</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    #多行匹配规则</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    pattern</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'^[[:space:]]+(at|\.{3})\b&#x26;^Caused by:'</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    #将不匹配的规则的行合并在一起</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    negate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    #合并到匹配规则的上一行末尾</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    match</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">after</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#================================ Outputs =====================================</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#----------------------------- Logstash output --------------------------------</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">output.logstash</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # The Logstash hosts</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  hosts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"172.16.11.213:5044"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]   </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # Optional SSL. By default is off.</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # List of root certificates for HTTPS server verifications</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  #ssl.certificate_authorities: ["/etc/pki/root/ca.pem"]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # Certificate for SSL client authentication</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  #ssl.certificate: "/etc/pki/client/cert.pem"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # Client Certificate Key</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  #ssl.key: "/etc/pki/client/cert.key"</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#output.elasticsearch:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#  hosts: 172.16.11.213:9200</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#  indices:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#    - index: "filebeat-%{+yyyy.MM.dd}"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#output.redis:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">   #hosts: ["172.16.11.213:9001"]</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">   #password: DaShuRedisoRhFG9xT6kXIZl5b</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">   #key: "filebeat-redis"</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">   #db: 1</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">   #timeout: 60</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 控制台输出</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#output.console:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  #pretty: true</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  #enable: true</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-6-导入elfk镜像" tabindex="-1"><a class="header-anchor" href="#_4-6-导入elfk镜像"><span>4.6 导入ELFK镜像</span></a></h4>
<p>提前导入好镜像在执行docker-compose时就不用在拉取了，而且网络不稳定也容易中断；<br>
如果docker默认路径没空间，可参考此文章修改docker存储路径：<a href="https://blog.csdn.net/liu_chen_yang/article/details/124322403" target="_blank" rel="noopener noreferrer">【docker】导入镜像报错磁盘空间不足的解决方法 &amp;&amp; 【docker】修改默认的存储路径</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> load</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> elasticsearch.tar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> load</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> logstash.tar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> load</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kibana.tar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> load</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> filebeat.tar</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost config]# docker images </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">REPOSITORY</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                                      TAG</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">       IMAGE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ID</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">       CREATED</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        SIZE</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">elastic/kibana</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">                                  8.12.2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    2870bdfe2474</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> months</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ago</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   1.05GB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">elastic/elasticsearch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">                           8.12.2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    c02b14250fd3</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> months</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ago</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   1.36GB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">elastic/logstash</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">                                8.12.2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    341c9b96c97b</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> months</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ago</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   769MB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">elastic/filebeat</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">                                8.12.2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    89c084ca559d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> months</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ago</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   325MB</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191554234.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191554657.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_4-7-使用docker-compose启动elfk服务" tabindex="-1"><a class="header-anchor" href="#_4-7-使用docker-compose启动elfk服务"><span>4.7 使用docker-compose启动ELFK服务</span></a></h4>
<p>①、先创建docker-compose目录用来管理ELFK服务</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建docker-compose目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/docker-compose</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 进入docker-compose目录</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/docker-compose</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建docker-compose的yml配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">touch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker-compose.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#编辑docker-compose配置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker-compose.yml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'3'</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">services</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  elasticsearch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">elastic/elasticsearch:8.12.2</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    container_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">es</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    hostname</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">es</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    restart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">always</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    volumes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/data/ELK/elasticsearch/config/es.yml:/usr/share/elasticsearch/config/elasticsearch.yml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/data/ELK/elasticsearch/plugins:/usr/share/elasticsearch/plugins</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/data/ELK/elasticsearch/data:/usr/share/elasticsearch/data</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/data/ELK/elasticsearch/logs:/usr/share/elasticsearch/logs</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/etc/localtime:/etc/localtime</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    ports</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">9200:9200</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">9300:9300</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  logstash</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">elastic/logstash:8.12.2</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    container_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">logstash</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    hostname</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">logstash</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    restart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">always</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    logging</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      driver</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">json-file</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      options</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        max-size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"10m"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        max-file</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"2"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    volumes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/data/ELK/logstash/config/logstash.yml:/usr/share/logstash/config/logstash.yml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/data/ELK/logstash/conf.d/:/usr/share/logstash/conf.d/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/etc/localtime:/etc/localtime</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    ports</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">5044:5044</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  kibana</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">elastic/kibana:8.12.2</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    container_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">kibana</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    hostname</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">kibana</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    restart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">always</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    volumes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/data/ELK/kibana/kibana.yml:/usr/share/kibana/config/kibana.yml</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    ports</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">5601:5601</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  filebeat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">elastic/filebeat:8.12.2</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    container_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">filebeat</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    hostname</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">filebeat</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    restart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">always</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    volumes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      # 日志文件夹映射到容器中[作为数据源]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/data/ELK/filebeat/logs:/usr/share/filebeat/logs/</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      # 采集日志配置映射配置文件到容器中</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/data/ELK/filebeat/config/filebeat.yml:/usr/share/filebeat/filebeat.yml:ro</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/etc/localtime:/etc/localtime</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 使用主机网络模式</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    network_mode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">host</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p>如果防火墙开启的话，需要打开的端口有：（端口可自行定义）</p>
<ul>
<li>Elasticsearch：<code v-pre>9200</code>、<code v-pre>9300</code></li>
<li>Kibana：<code v-pre>5601</code></li>
<li>Logstash：<code v-pre>5044</code></li>
<li>nginx：<code v-pre>80</code></li>
<li><strong>filebeat</strong> 本身不监听任何端口，它是一个轻量级的日志文件收集器，用于将日志发送到Logstash或Elasticsearch。</li>
</ul>
<blockquote>
<p><strong>注：</strong></p>
<p><strong>9200 本地elasticsearch服务本地的端口<br>
9300 是elasticsearch集群的通信端口</strong></p>
</blockquote>
<hr>
<p>②、启动ELFK服务</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 进入docker-compose.yml位置</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/docker-compose/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 启动（两种二选一）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker-compose</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> up</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker-compose</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/docker-compose/docker-compose.yml</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> up</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>③、查看ELFK服务状态</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker-compose</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ps</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191554963.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>State状态为：<code v-pre>UP</code>或者<code v-pre>running</code>就为运行状态。</p>
<hr>
<p>④、启动完ELFK都看一下这些容器的日志</p>
<p>启动完ELFK都看一下这些容器的日志，看看有没有报错；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看es的服务日志</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> logs</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> es</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看logstash的服务日志</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> logs</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> logstash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看kibana的服务日志</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> logs</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kibana</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看filebeat的服务日志</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> logs</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> filebeat</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在启动 <strong>kibana</strong> 时遇到以下提示内容，不用管，这个提示说的是没有配置账户令牌，不影响我们的访问及拿日志；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191554129.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_4-8-访问es、kibana地址" tabindex="-1"><a class="header-anchor" href="#_4-8-访问es、kibana地址"><span>4.8 访问es、kibana地址</span></a></h4>
<p>访问es、kibana地址，确认是否可以访问到，没有问题；</p>
<font color=red>注意把 ip 换成自己的；</font><ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> es地址：<a href="http://172.16.11.213:9200" target="_blank" rel="noopener noreferrer">http://172.16.11.213:9200</a></label></li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191554085.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> kibana地址：<a href="http://172.16.11.213:5601" target="_blank" rel="noopener noreferrer">http://172.16.11.213:5601</a></label></li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191553636.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191553856.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_4-9-安装并配置nginx" tabindex="-1"><a class="header-anchor" href="#_4-9-安装并配置nginx"><span>4.9 安装并配置nginx</span></a></h4>
<p>部署nginx可以参考：<a href="https://blog.csdn.net/liu_chen_yang/article/details/133928000" target="_blank" rel="noopener noreferrer">【Linux】nginx基础篇 -- 介绍及yum安装nginx</a>、<a href="https://blog.csdn.net/liu_chen_yang/article/details/132145067" target="_blank" rel="noopener noreferrer">【Linux】环境下部署Nginx服务 - 二进制部署方式</a></p>
<p>这里我习惯于二进制的部署方式，那么就使用二进制部署，这里就简单写一下，具体的操作可以看二进制部署文档；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 拉取1.24.0安装包</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://nginx.org/download/nginx-1.24.0.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 安装必要的插件依赖包</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gcc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gcc-c++</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> zlib</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> zlib-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pcre-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> openssl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> openssl-devel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 解压到/usr/src下</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> xf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nginx-1.24.0.tar.gz</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/src/</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 进入</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/src/nginx-1.24.0</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 编译安装</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./configure</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --prefix=/usr/local/nginx</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">make</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">make</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成后，这里需要修改以下配置文件，把nginx的日志路径指到filebeat的logs目录下</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 进入nginx配置文件</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/nginx/conf/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nginx.conf</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191553772.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 启动nginx服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/usr/local/nginx/sbin/nginx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  /usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看filebeat日志是否有输出，页面访问http://172.16.11.213 nginx刷新</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tail</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/filebeat/logs/nginx_access.log</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191553824.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_4-10-获取服务日志并进行页面展示" tabindex="-1"><a class="header-anchor" href="#_4-10-获取服务日志并进行页面展示"><span>4.10 获取服务日志并进行页面展示</span></a></h4>
<p>页面访问kibana查看日志：<a href="http://172.16.11.213:5601" target="_blank" rel="noopener noreferrer">http://172.16.11.213:5601</a></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191553390.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>刷新nginx页面，使其产生日志，并实时监控日志</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191553145.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191553760.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<hr>
<center>到此部署就完成，如果想要加一些安全性比如密码认证，可以接着看下面的内容；</center>
<hr>
<h2 id="二、elk8-12-2版本配置密码认证" tabindex="-1"><a class="header-anchor" href="#二、elk8-12-2版本配置密码认证"><span>二、ELK8.12.2版本配置密码认证</span></a></h2>
<h3 id="_1、配置-es-开启安全验证" tabindex="-1"><a class="header-anchor" href="#_1、配置-es-开启安全验证"><span>1、配置 ES 开启安全验证</span></a></h3>
<h4 id="_1-1-修改-es-配置文件" tabindex="-1"><a class="header-anchor" href="#_1-1-修改-es-配置文件"><span>1.1 修改 es 配置文件</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># ES配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/elasticsearch/config/es.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 将xpack.security.enabled=false改为true启用 X-Pack 安全性：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">xpack.security.enabled:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> true</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-重启-es-容器" tabindex="-1"><a class="header-anchor" href="#_1-2-重启-es-容器"><span>1.2 重启 es 容器</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> es</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>重启完记得再看一下es日志，看看有没有报错什么的；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> logs</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> es</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>重启完kibana会连接不到，因为开启了安全认证，kibana没有找到相关配置，所以，会连接不到，在报错，在后面我们会配置的；</p>
<h4 id="_1-3-进入容器生成密码" tabindex="-1"><a class="header-anchor" href="#_1-3-进入容器生成密码"><span>1.3 进入容器生成密码</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 进入容器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> exec</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -it</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> es</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 生成密码（自动与手动二选一）</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">## 自动生成密码</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">elasticsearch-setup-passwords</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> auto</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">## 手动输入密码</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">elasticsearch-setup-passwords</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> interactive</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我选择手动输入密码；手动输入密码每个用户都要输入两遍密码，一遍是输入一遍是确认密码；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191553580.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_1-4-访问-es-页面进行验证" tabindex="-1"><a class="header-anchor" href="#_1-4-访问-es-页面进行验证"><span>1.4 访问 es 页面进行验证</span></a></h4>
<p>页面访问：<a href="http://172.16.11.213:9200" target="_blank" rel="noopener noreferrer">http://172.16.11.213:9200</a></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191553210.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>输入完用户名密码，就到这个页面了；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191553444.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_2、配置-logstash-连接用户密码" tabindex="-1"><a class="header-anchor" href="#_2、配置-logstash-连接用户密码"><span>2、配置 logstash 连接用户密码</span></a></h3>
<h4 id="_2-1-修改-logstash-配置文件" tabindex="-1"><a class="header-anchor" href="#_2-1-修改-logstash-配置文件"><span>2.1 修改 logstash 配置文件</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 进入logstash配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/logstash/conf.d/logstash.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 在output中输入用户名密码</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> => </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"elastic"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> => </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"刚刚生成或手动输入的密码"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>xpack.monitoring.enabled: true<br>
xpack.monitoring.elasticsearch.username: elastic<br>
xpack.monitoring.elasticsearch.password: lcy123...</p>
<h4 id="_2-2-重启-logstash-容器" tabindex="-1"><a class="header-anchor" href="#_2-2-重启-logstash-容器"><span>2.2 重启 logstash 容器</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> logstash</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>重启完记得再看一下 logstash 日志，看看有没有报错什么的；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> logs</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> logstash</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3、配置-kibana-连接用户密码" tabindex="-1"><a class="header-anchor" href="#_3、配置-kibana-连接用户密码"><span>3、配置 kibana 连接用户密码</span></a></h3>
<h4 id="_3-1-修改-kibana-配置文件" tabindex="-1"><a class="header-anchor" href="#_3-1-修改-kibana-配置文件"><span>3.1 修改 kibana 配置文件</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 进入kibana配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/kibana/kibana.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 在最后添加或修改（这里用户名不能用elastic，否则启动会报错，elastic是超级用户，在8.*版本里是被禁止的）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">elasticsearch.username:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "kibana"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">elasticsearch.password:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "刚刚生成或手动输入的密码"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-重启-kibana-容器" tabindex="-1"><a class="header-anchor" href="#_3-2-重启-kibana-容器"><span>3.2 重启 kibana 容器</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kibana</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>重启完记得再看一下 kibana 日志，看看有没有报错什么的；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> logs</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kibana</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这里可以把ELFK全部重启一下（两种方式二选一）记得重启完查看日志；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker-compose</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker-compose</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/docker-compose/docker-compose.yml</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-访问-kibana-页面进行验证" tabindex="-1"><a class="header-anchor" href="#_3-3-访问-kibana-页面进行验证"><span>3.3 访问 kibana 页面进行验证</span></a></h4>
<p>访问kibana页面：<a href="http://172.16.11.213:5601" target="_blank" rel="noopener noreferrer">http://172.16.11.213:5601</a></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191553253.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这里可以输入用户名密码，并不是非要kibana配置文件中设置的用户名密码，用哪个登录上来会没有权限，这里我们可以登录<code v-pre>elastic</code>用户，密码也是刚刚设置的密码；</p>
<p>登录进来，右上角就会多出一个头像等用户信息；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191552311.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="三、附加-修改-elk-认证密码" tabindex="-1"><a class="header-anchor" href="#三、附加-修改-elk-认证密码"><span>三、附加：修改 ELK 认证密码</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -H</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Content-Type:application/json"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -XPOST</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> elastic</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'http://ip:9200/_xpack/security/user/elastic/_password'</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '{ "password" : "要修改的密码" }'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="四、附加-获取多台服务器日志" tabindex="-1"><a class="header-anchor" href="#四、附加-获取多台服务器日志"><span>四、附加：获取多台服务器日志</span></a></h2>
<p>  要获取多台服务器日志，那么我们就需要在要获取日志的那台服务器上部署日志收集器，也就是我们的<code v-pre>filebeat</code>服务；<font color=red>前提是，必须可以连接到、ping通部署ELFK的这台主服务器上。</font></p>
<h3 id="_1、创建filebeat目录及配置文件" tabindex="-1"><a class="header-anchor" href="#_1、创建filebeat目录及配置文件"><span>1、创建filebeat目录及配置文件</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建filebeat目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/filebeat/{config,data,logs}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 进入filebeat/config目录</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/filebeat/config</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建filebeat配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">touch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> filebeat.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 去除filebeat组和其他用户的写入权限。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> go-w</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/filebeat/config/filebeat.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 编辑filebeat配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> filebeat.yml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#=========================== Filebeat inputs =============================</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">filebeat.inputs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">log</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # Change to true to enable this input configuration.</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # Paths that should be crawled and fetched. Glob based paths.</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  paths</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#可以配置多个日志路径</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 如果是docker部署，这里就是docker容器内的路径，而且需要和宿主机的路径进行映射</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/usr/share/filebeat/logs/*.log</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    #- </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/usr/share/filebeat/logs/info.log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  #</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">指定自定义字段</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  fields</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:							</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">       project</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"fire"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  #</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">字段1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       #</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">hostName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"172.16.11.213"</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	  #字段2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  multiline</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    #多行匹配规则</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    pattern</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'^[[:space:]]+(at|\.{3})\b&#x26;^Caused by:'</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    #将不匹配的规则的行合并在一起</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    negate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    #合并到匹配规则的上一行末尾</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    match</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">after</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#================================ Outputs =====================================</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#----------------------------- Logstash output --------------------------------</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">output.logstash</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # The Logstash hosts</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  hosts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"172.16.11.213:5044"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、上传并导入-filebeat-镜像" tabindex="-1"><a class="header-anchor" href="#_2、上传并导入-filebeat-镜像"><span>2、上传并导入 filebeat 镜像</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> load</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> filebeat.tar</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3、使用docker-compose启动filebeat服务" tabindex="-1"><a class="header-anchor" href="#_3、使用docker-compose启动filebeat服务"><span>3、使用docker-compose启动filebeat服务</span></a></h3>
<p>①、先创建docker-compose目录用来管理 filebeat 服务</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建docker-compose目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/docker-compose</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 进入docker-compose目录</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/docker-compose</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建docker-compose的yml配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">touch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker-compose.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#编辑docker-compose配置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker-compose.yml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"3"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">services</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  filebeat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">elastic/filebeat:8.12.2</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    container_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">filebeat</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    hostname</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">filebeat</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    restart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">always</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    volumes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      # 日志文件夹映射到容器中[作为数据源]，可以切换为自己服务的日志路径；</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/data/ELK/filebeat/logs/:/usr/share/filebeat/logs/</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      # 采集日志配置映射配置文件到容器中</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/data/ELK/filebeat/config/filebeat.yml:/usr/share/filebeat/filebeat.yml:ro</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/etc/localtime:/etc/localtime</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 使用主机网络模式</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    network_mode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">host</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p>如果不想用docker-compose，就要用docker的话也可以，把他转换成docker命令就行；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> filebeat</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --hostname=filebeat</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --restart=always</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --network=host</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/filebeat/logs/:/usr/share/filebeat/logs/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/filebeat/config/filebeat.yml:/usr/share/filebeat/filebeat.yml:ro</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/localtime:/etc/localtime</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> elastic/filebeat:8.12.2</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<p>②、启动 filebeat 服务</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 进入docker-compose.yml位置</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/docker-compose/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 启动（两种二选一）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker-compose</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> up</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker-compose</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /data/ELK/docker-compose/docker-compose.yml</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> up</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>③、查看 filebeat 服务状态</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker-compose</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ps</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191552730.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>State状态为：<code v-pre>UP</code>或者<code v-pre>running</code>就为运行状态。</p>
<hr>
<p>④、启动完看一下 filebeat 容器的日志，看看有没有报错</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> logs</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> filebeat</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_4、登录-kibana-页面查看新节点的日志" tabindex="-1"><a class="header-anchor" href="#_4、登录-kibana-页面查看新节点的日志"><span>4、登录 kibana 页面查看新节点的日志</span></a></h3>
<p>没有问题的话就可以产生一些日志，然后去<strong>kibana</strong>页面查看日志；<br>
<a href="http://172.16.11.213:5601" target="_blank" rel="noopener noreferrer">http://172.16.11.213:5601</a></p>
<h2 id="五、附加-kibana-页面操作" tabindex="-1"><a class="header-anchor" href="#五、附加-kibana-页面操作"><span>五、附加：kibana 页面操作</span></a></h2>
<h3 id="_1、查看日志属于哪个路径下及日志名" tabindex="-1"><a class="header-anchor" href="#_1、查看日志属于哪个路径下及日志名"><span>1、查看日志属于哪个路径下及日志名</span></a></h3>
<p>如果要看这个日志是哪个路径的话，可以<code v-pre>Discover</code>中搜索<code v-pre>log.file.path</code></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191552363.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191552691.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_2、仪表板" tabindex="-1"><a class="header-anchor" href="#_2、仪表板"><span>2、仪表板</span></a></h3>
<p>仪表板可以在<code v-pre>Home</code>--&gt;<code v-pre>Dashboards</code>创建；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191552380.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191552439.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="六、相关文章" tabindex="-1"><a class="header-anchor" href="#六、相关文章"><span>六、相关文章</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">文章名称</th>
<th style="text-align:center">文章链接</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://liucy.blog.csdn.net/article/details/139653744" target="_blank" rel="noopener noreferrer">ELFK简介</a></td>
<td style="text-align:center"><a href="https://liucy.blog.csdn.net/article/details/139653744" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/139653744</a></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://liucy.blog.csdn.net/article/details/139761024" target="_blank" rel="noopener noreferrer">ELFK 8.12.2 单机部署 -- docker部署方式⚽</a></td>
<td style="text-align:center"><a href="https://liucy.blog.csdn.net/article/details/139761024" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/139761024</a></td>
</tr>
</tbody>
</table>
</div></template>


