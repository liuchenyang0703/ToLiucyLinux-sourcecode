<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181624813.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
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
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<font color=red>下载离线包的时候需要在有可以ping通baidu等外网的环境中下载离线包；</font><blockquote>
<p>  相信大家也遇到过这种问题，在没有外网的情况下，想安装一个服务却安装不了，这期我就教大家如何如何下载离线安装包，在内网中使用；</p>
</blockquote>
<h2 id="第一种方法-使用yum-参数安装-【推荐】包含依赖" tabindex="-1"><a class="header-anchor" href="#第一种方法-使用yum-参数安装-【推荐】包含依赖" aria-hidden="true">#</a> 第一种方法：使用yum + 参数安装  -- 【推荐】包含依赖</h2>
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
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> lrzsz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Centos7 yum下载离线安装包mysql，不进行安装，只需要离线安装包，并且放到/data/mysql目录中；</p>
<p>下载命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc gcc-c++ <span class="token parameter variable">--downloadonly</span> <span class="token parameter variable">--downloaddir</span><span class="token operator">=</span>./
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>详情下载步骤：</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#首先我们先创建一个/data/mysql目录</span>
<span class="token punctuation">[</span>root@zabbix-5 mysql<span class="token punctuation">]</span><span class="token comment"># mkdir /data</span>
<span class="token punctuation">[</span>root@zabbix-5 mysql<span class="token punctuation">]</span><span class="token comment"># mkdir /data/mysql</span>

<span class="token comment">#然后我们来下载离线安装包</span>
<span class="token punctuation">[</span>root@zabbix-5 mysql<span class="token punctuation">]</span><span class="token comment"># yum -y install mysql --downloadonly --downloaddir=/data/mysql</span>

<span class="token comment">#然后进入/data/mysql目录查看</span>
<span class="token punctuation">[</span>root@zabbix-5 mysql<span class="token punctuation">]</span><span class="token comment"># cd /data/mysql</span>
<span class="token punctuation">[</span>root@zabbix-5 mysql<span class="token punctuation">]</span><span class="token comment"># ls</span>
mariadb-5.5.68-1.el7.x86_64.rpm  mariadb-libs-5.5.68-1.el7.x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181624651.png" alt="" loading="lazy"><br>
然后咱们可以把rpm包下载到本地，之后使用的时候就可以上传到内网环境中，直接<font color=red><strong>rpm -ivh 包名</strong></font>安装就可以了。</p>
<h2 id="第二种方法-使用-yumdownloader-命令【只下载你需要的安装包-不包含依赖-】" tabindex="-1"><a class="header-anchor" href="#第二种方法-使用-yumdownloader-命令【只下载你需要的安装包-不包含依赖-】" aria-hidden="true">#</a> 第二种方法：使用 yumdownloader 命令【只下载你需要的安装包（不包含依赖）】</h2>
<ul>
<li>要有这个命令，需要先安装一个命令：<code v-pre>yum-utils</code></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> yum-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令安装完之后就会有<code v-pre>yumdownloader </code>命令了，这时候我们使用这个命令去下载离线包；</p>
<ul>
<li>yumdownloader 用法</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yumdownloader <span class="token parameter variable">--destdir</span><span class="token operator">=</span>要下载的路径 要下载的安装包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
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
</div></template>


