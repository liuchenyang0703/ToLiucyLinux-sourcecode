<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者</a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主</a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主</a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区</a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<blockquote>
<p>  最近因为遇到一个服务器受系统限制，只能上传rpm包才能使用，而我们的服务都是文件，那么怎么将文件都打成rpm包呢？？？我也是找了好几个，终于找到了一个简单好用的打包方式，下面来给大家讲解一下部署及打包、安装；</p>
</blockquote>
<p>本文已<code v-pre>docker离线包</code>目录为例子，将其打成rpm包，并在新的服务器上安装；</p>
<p>操作系统为：Centos 7.6</p>
<h2 id="说明-fpm参数及解析" tabindex="-1"><a class="header-anchor" href="#说明-fpm参数及解析"><span>说明 -- fpm参数及解析</span></a></h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> fpm的功能就是将一种类型的包转换成另一种类型</label></li>
</ul>
<ul>
<li>fpm支持的源类型包：</li>
</ul>
<table>
<thead>
<tr>
<th>原类型包</th>
<th>解析</th>
</tr>
</thead>
<tbody>
<tr>
<td>dir</td>
<td>将目录打包成所需要的类型用于源码编译安装的软件包</td>
</tr>
<tr>
<td>rpm</td>
<td>对rpm进行转换</td>
</tr>
<tr>
<td>gem</td>
<td>对rubygem包进行转换；</td>
</tr>
<tr>
<td>python</td>
<td>将python模块打包成相应的类型</td>
</tr>
</tbody>
</table>
<ul>
<li>fpm支持的目标类型包：</li>
</ul>
<table>
<thead>
<tr>
<th>目标类型包</th>
<th>解析</th>
</tr>
</thead>
<tbody>
<tr>
<td>rpm</td>
<td>转换为rpm包</td>
</tr>
<tr>
<td>deb</td>
<td>转换为deb包</td>
</tr>
<tr>
<td>solari</td>
<td>转换为solaris包</td>
</tr>
<tr>
<td>puppet</td>
<td>转换成pupper包</td>
</tr>
</tbody>
</table>
<ul>
<li>fpm常用参数：</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>参数解析</th>
</tr>
</thead>
<tbody>
<tr>
<td>-s</td>
<td>指定源类型</td>
</tr>
<tr>
<td>-t</td>
<td>指定目标类型，即想要制作什么包</td>
</tr>
<tr>
<td>-n</td>
<td>指定包的名字</td>
</tr>
<tr>
<td>-v</td>
<td>指定包的版本号</td>
</tr>
<tr>
<td>-c</td>
<td>指定打包的相对路径</td>
</tr>
<tr>
<td>-d</td>
<td>指定依赖于哪些包</td>
</tr>
<tr>
<td>-f</td>
<td>第二次包时目录下如果有同名安装包存在，则覆盖它</td>
</tr>
<tr>
<td>-p</td>
<td>制作的rpm安装包存放路径，不指定就在当前目录下</td>
</tr>
<tr>
<td>--post-install</td>
<td>软件包安装完成之后所要运行的脚本</td>
</tr>
<tr>
<td>--post-uninstall</td>
<td>软件包卸载完成之后所要运行的脚本</td>
</tr>
<tr>
<td>--pre-install</td>
<td>软件包安装完成之前所要运行的脚本</td>
</tr>
<tr>
<td>--pre-uninstall</td>
<td>软件包卸载完成之前所要运行的脚本</td>
</tr>
<tr>
<td>--prefix</td>
<td>制作好的rpm包默认安装路径</td>
</tr>
</tbody>
</table>
<h2 id="一、安装fpm命令" tabindex="-1"><a class="header-anchor" href="#一、安装fpm命令"><span>一、安装fpm命令</span></a></h2>
<h3 id="_1-1-安装-ruby-环境" tabindex="-1"><a class="header-anchor" href="#_1-1-安装-ruby-环境"><span>1.1 安装 ruby 环境</span></a></h3>
<p>fpm 是 <code v-pre>ruby</code>语法写的一种定制 rpm 包的工具，所以安装<code v-pre> fpm</code> 之前，需要安装<code v-pre> ruby</code> 环境。</p>
<blockquote>
<p>官方地址：<a href="https://rubygems.org/pages/download" target="_blank" rel="noopener noreferrer">Download RubyGems | RubyGems.org | your community gem host</a></p>
<p>阿里源地址：<a href="https://developer.aliyun.com/mirror/rubygems" target="_blank" rel="noopener noreferrer">rubygems镜像_rubygems下载地址_rubygems安装教程-阿里巴巴开源镜像站</a></p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ruby</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rubygems</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ruby-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  rpm-build</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rpmdevtools</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rubygem-json</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_1-2-更换-gem-源为阿里源" tabindex="-1"><a class="header-anchor" href="#_1-2-更换-gem-源为阿里源"><span>1.2 更换 gem 源为阿里源</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 查看默认源</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# gem sources</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">*** CURRENT SOURCES ***</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">https://rubygems.org/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 移除默认源</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# gem sources --remove https://rubygems.org/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">https://rubygems.org/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> removed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sources</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 添加阿里源</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# gem sources -a https://mirrors.aliyun.com/rubygems/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">https://mirrors.aliyun.com/rubygems/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> added</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sources</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 再次查看是否更换成功</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# gem sources</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">*** CURRENT SOURCES ***</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">https://mirrors.aliyun.com/rubygems/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#可以看到已经更新成阿里源了</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-安装-fpm" tabindex="-1"><a class="header-anchor" href="#_1-3-安装-fpm"><span>1.3 安装 fpm</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">gem</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> fpm</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如下截图，及安装成功；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191614633.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>安装成功。</p>
<h2 id="二、将文件打成rpm包" tabindex="-1"><a class="header-anchor" href="#二、将文件打成rpm包"><span>二、将文件打成rpm包</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">fpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 软件名称</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 版本号</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --prefix=rpm安装的路径</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ./打包文件名</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>注：执行fpm打包命令前，进入打包目标的上一级目录。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# fpm -s dir -t rpm -n docker -v 1.0 </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">--prefix</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/root/docker/</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> nvidia-docker</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Created</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> package</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {:path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"docker-1.0-1.x86_64.rpm"}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>-s：指定要打成rpm包的源类型，目录：-s dir</p>
<p>-t：知道要将目录制作成什么类型的文件，-t rpm</p>
<p>-n： 指定软件、包的名称</p>
<p>-v： 指定该包的版本号</p>
<p>--prefix：指定制作好的rpm包的安装路径，在新的服务器上安装会直接安装到此目录；</p>
<p>./：最后就是指定要打包的目录。</p>
</blockquote>
<h2 id="三、安装、卸载rpm包" tabindex="-1"><a class="header-anchor" href="#三、安装、卸载rpm包"><span>三、安装、卸载rpm包</span></a></h2>
<p>首先要将打的rpm包上传到服务器上；</p>
<h3 id="_3-1-安装rpm包" tabindex="-1"><a class="header-anchor" href="#_3-1-安装rpm包"><span>3.1 安装rpm包</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -ivh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker-1.0-1.x86_64.rpm</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-2-查找刚刚安装rpm包" tabindex="-1"><a class="header-anchor" href="#_3-2-查找刚刚安装rpm包"><span>3.2 查找刚刚安装rpm包</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -qa</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker-1.0-1.x86_64</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-3-卸载刚刚安装的rpm包" tabindex="-1"><a class="header-anchor" href="#_3-3-卸载刚刚安装的rpm包"><span>3.3 卸载刚刚安装的rpm包</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker-1.0-1.x86_64</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="四、错误整理" tabindex="-1"><a class="header-anchor" href="#四、错误整理"><span>四、错误整理</span></a></h2>
<h3 id="_2-1-error-error-installing-fpm-rexml-requires-ruby-version-2-5-0" tabindex="-1"><a class="header-anchor" href="#_2-1-error-error-installing-fpm-rexml-requires-ruby-version-2-5-0"><span>2.1 ERROR:  Error installing fpm: 	rexml requires Ruby version &gt;= 2.5.0.</span></a></h3>
<ul>
<li>报错信息：</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 安装fpm时报错</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# gem install fpm</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ERROR:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  Error</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> installing</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> fpm:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	rexml</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> requires</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Ruby</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 2.5.0.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>问题分析：</li>
</ul>
<p>此问题报错说的是<code v-pre>ruby</code> 的版本必须&gt;=2.5.0，我们可以先看看我们的<code v-pre>ruby版本</code></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# ruby -v</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ruby</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 2.0.0p648</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (2015-12-16) [x86_64-linux]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到是<code v-pre>2.0.0版本</code>，所以，需要升级一下<code v-pre>ruby版本</code>；</p>
<ul>
<li>问题解决：</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#1. 离线安装 rvm：</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># rvm 是用来管理 ruby 的，而 ruby 的其中一个“程序”叫 rubygems，也就是我们用它装 fpm 的，手动装各种库用 gem。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# curl -sSL https://github.com/rvm/rvm/tarball/stable -o rvm-stable.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#2. 解压 rvm 包：</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# tar -xzvf rvm-stable.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#3. 进入解压目录，安装 rvm:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# cd rvm-rvm-6bfc921/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost rvm-rvm-6bfc921]# ./install --auto-dotfiles</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#4. 重新加载 rvm：</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost rvm-rvm-6bfc921]# source /usr/local/rvm/scripts/rvm</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#5. 查看 rvm 可安装版本：</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost rvm-rvm-6bfc921]# rvm list known</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#6. 选择安装 ruby 2.6.3：</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 下载安装过程比较慢，请耐心等待</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost rvm-rvm-6bfc921]# rvm install 2.6.3</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#7. 设置默认使用 ruby 版本：</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost rvm-rvm-6bfc921]# rvm use 2.6.3 --default</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Using</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/rvm/gems/ruby-2.6.3</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@nginx01 rvm-rvm-6bfc921]# ruby -v</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ruby</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 2.6.3p62</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (2019-04-16 </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">revision</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 67580</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) [x86_64-linux]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​    可以看到 ruby 已升级至 2.6.3。再次执行 gem install fpm -v 1.3.3，就不会再报这个错误了，一会就安装完成了。</p>
<h3 id="_2-2-usr-share-rubygems-rubygems-core-ext-kernel-require-rb-54-in-require-cannot-load-such-file-json-loaderror" tabindex="-1"><a class="header-anchor" href="#_2-2-usr-share-rubygems-rubygems-core-ext-kernel-require-rb-54-in-require-cannot-load-such-file-json-loaderror"><span>2.2 /usr/share/rubygems/rubygems/core_ext/kernel_require.rb:54:in `require': cannot load such file -- json (LoadError)</span></a></h3>
<ul>
<li>报错信息：</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ~]# gem install fpm</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/usr/share/rubygems/rubygems/core_ext/kernel_require.rb:54:in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> `</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">require': cannot load such file -- json (LoadError)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>问题分析：</li>
</ul>
<p>这个错误通常表示你的 Ruby 环境缺少一个名为 &quot;json&quot; 的 gem（Ruby库）。要解决这个问题，你可以按照以下步骤来修复：</p>
<ol>
<li>
<p>确保 Ruby 版本已安装：首先，请确保你的系统上已经安装了 Ruby。你可以在终端中运行以下命令来检查 Ruby 版本：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ruby -v</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果 Ruby 未安装或者版本较旧，建议更新到较新的版本。</p>
</li>
<li>
<p>安装 JSON Gem：要解决这个问题，你需要安装 <code v-pre>json</code> gem。在终端中执行以下命令：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>gem install json</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这将安装 <code v-pre>json</code> gem 到你的 Ruby 环境中。</p>
</li>
<li>
<p>检查 Gemfile：如果你的项目使用了 Gemfile 来管理 gem 依赖，确保你在 Gemfile 中有 <code v-pre>json</code> gem 的引用，并且运行 <code v-pre>bundle install</code> 来安装所需的 gem。</p>
</li>
<li>
<p>检查 Ruby 环境：确保你的 Ruby 环境设置正确。有时，可能需要切换到正确的 Ruby 版本或环境。你可以使用工具如 RVM（Ruby Version Manager）或 rbenv 来管理不同的 Ruby 环境。</p>
</li>
<li>
<p>检查加载路径：确保 Ruby 可以找到 <code v-pre>json</code> gem。有时，你可能需要在代码中添加 <code v-pre>require 'json'</code> 来明确指定加载这个 gem。</p>
</li>
</ol>
<ul>
<li>问题解决：</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 安装json</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">gem</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> json</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>即可解决。</p>
</div></template>


