<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181624813.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
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
<font color=red>下载离线包的时候需要在有可以ping通baidu等外网的环境中下载离线包；</font><blockquote>
<p>  相信大家也遇到过这种问题，在没有外网的情况下，想安装一个服务却安装不了，这期我就教大家如何如何下载离线安装包，在内网中使用；</p>
</blockquote>
<h2 id="第一种方法-使用yum-参数安装-【推荐】包含依赖" tabindex="-1"><a class="header-anchor" href="#第一种方法-使用yum-参数安装-【推荐】包含依赖"><span>第一种方法：使用yum + 参数安装  -- 【推荐】包含依赖</span></a></h2>
<ul>
<li>首先先讲解一下yum下载离线安装包的参数及解析；</li>
</ul>
<p>yum下载离线安装包的参数及解析；</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>解析</th>
</tr>
</thead>
<tbody>
<tr>
<td>- -install</td>
<td>下载某个命令，直接安装</td>
</tr>
<tr>
<td>- -downloadonly</td>
<td>仅下载安装包，不进行安装</td>
</tr>
<tr>
<td>- -downloaddir</td>
<td>指定下载的安装包的存放路径</td>
</tr>
</tbody>
</table>
<br>
<p><strong><font color=teal>实例：</font></strong></p>
<p>Centos7 yum直接下载安装lrzsz命令，下载完并不会有安装包残留，直接就会安装上；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> lrzsz</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Centos7 yum下载离线安装包mysql，不进行安装，只需要离线安装包，并且放到/data/mysql目录中；</p>
<p>下载命令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gcc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gcc-c++</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --downloadonly</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --downloaddir=./</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>详情下载步骤：</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#首先我们先创建一个/data/mysql目录</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@zabbix-5 mysql]# mkdir /data</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@zabbix-5 mysql]# mkdir /data/mysql</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#然后我们来下载离线安装包</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@zabbix-5 mysql]# yum -y install mysql --downloadonly </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">--downloaddir</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/data/mysql</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#然后进入/data/mysql目录查看</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@zabbix-5 mysql]# cd /data/mysql</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@zabbix-5 mysql]# ls</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mariadb-5.5.68-1.el7.x86_64.rpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  mariadb-libs-5.5.68-1.el7.x86_64.rpm</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181624651.png" alt="" loading="lazy"><br>
然后咱们可以把rpm包下载到本地，之后使用的时候就可以上传到内网环境中，直接<font color=red><strong>rpm -ivh 包名</strong></font>安装就可以了。</p>
<h2 id="第二种方法-使用-yumdownloader-命令【只下载你需要的安装包-不包含依赖-】" tabindex="-1"><a class="header-anchor" href="#第二种方法-使用-yumdownloader-命令【只下载你需要的安装包-不包含依赖-】"><span>第二种方法：使用 yumdownloader 命令【只下载你需要的安装包（不包含依赖）】</span></a></h2>
<ul>
<li>要有这个命令，需要先安装一个命令：<code v-pre>yum-utils</code></li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> yum-utils</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这个命令安装完之后就会有<code v-pre>yumdownloader </code>命令了，这时候我们使用这个命令去下载离线包；</p>
<ul>
<li>yumdownloader 用法</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yumdownloader</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --destdir=要下载的路径</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 要下载的安装包</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>yumdownloader 参数</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>解析</th>
</tr>
</thead>
<tbody>
<tr>
<td>--resolve</td>
<td>此选项会分析指定的软件包的依赖关系，并自动下载和保存这些依赖软件包。注意，如果系统内该依赖包已安装，运行命令时将不会下载已安装的依赖包。</td>
</tr>
<tr>
<td>--enablerepo=&lt;repository&gt;</td>
<td>指定yum源，如果不知可以省去此参数。</td>
</tr>
<tr>
<td>--destdir=&lt;directory&gt;</td>
<td>指定下载的软件包存放路径，默认下载到当前目录中。</td>
</tr>
</tbody>
</table>
<p><strong><font color=teal>实例：</font></strong></p>
<ul>
<li>下载一个mysql安装包且不安装服务，把安装包存到<code v-pre>/data/mysql/</code>目录下；</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yumdownloader</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --destdir=/data/mysql/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>下载完之后切换到这个目录看一下，可以看到离线包了。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181624636.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="两者区别及优缺点" tabindex="-1"><a class="header-anchor" href="#两者区别及优缺点"><span>两者区别及优缺点：</span></a></h2>
<ul>
<li>举实例两者下载的区别：</li>
</ul>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 示例1：使用yum + 参数安装</label></li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gcc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gcc-c++</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --downloadonly</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --downloaddir=./</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181624606.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 示例2：yumdownloader 命令下载</label></li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yumdownloader</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --destdir=./</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gcc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gcc-c++</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181624252.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>两者的区别很明显了，yumdownloader下载的少，是因为他不会下载依赖包，只会下载你需要的包；</p>
<ul>
<li>两者优缺点：</li>
</ul>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> yum + 参数 优点：<br>
1、会自动下载安装所需软件的所有依赖包，保证离线安装包的完整性；<br>
2、无需安装，可直接使用命令+参数下载。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> yum + 参数 缺点：<br>
1、如果服务器上已经安装过这个命令或者包的话，下载会提示已经安装过，所以安装的时候需要使用空环境。</label></li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181624291.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul class="task-list-container">
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> yumdownloader 优点：<br>
1、不管有没有安装都会下载下来离线包。</label></p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> yumdownloader 缺点：<br>
1、需要安装<code v-pre>yum-utils</code>；<br>
2、安装只会安装所需要的包，而不会下载依赖；</label></p>
</li>
</ul>
<hr>
<ul>
<li>总结：</li>
</ul>
<blockquote>
<p>各有利弊，还是推荐使用第一种方式。</p>
</blockquote>
</div></template>


