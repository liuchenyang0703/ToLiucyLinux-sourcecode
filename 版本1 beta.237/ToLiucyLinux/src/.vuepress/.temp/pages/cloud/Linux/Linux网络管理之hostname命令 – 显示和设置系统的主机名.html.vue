<template><div><p>@[toc]</p>
<p>hostname命令用于显示和设置系统的主机名称。环境变量HOSTNAME也保存了当前的主机名。</p>
<p>在使用hostname命令设置主机名后，系统并不会永久保存新的主机名，重新启动机器之后还是原来的主机名。如果需要永久修改主机名，需要同时修改/etc/hosts和/etc/sysconfig/network的相关内容。</p>
<h2 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式：</h2>
<blockquote>
<p>hostname [参数]</p>
</blockquote>
<h2 id="常用参数" tabindex="-1"><a class="header-anchor" href="#常用参数" aria-hidden="true">#</a> 常用参数：</h2>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>-a</td>
<td>显示主机别名</td>
</tr>
<tr>
<td>-d</td>
<td>显示DNS域名</td>
</tr>
<tr>
<td>-f</td>
<td>显示FQDN名称</td>
</tr>
<tr>
<td>-i</td>
<td>显示主机的ip地址</td>
</tr>
<tr>
<td>-s</td>
<td>显示短主机名称，在第一个点处截断</td>
</tr>
<tr>
<td>-y</td>
<td>显示NIS域名</td>
</tr>
</tbody>
</table>
<h2 id="参考实例" tabindex="-1"><a class="header-anchor" href="#参考实例" aria-hidden="true">#</a> 参考实例：</h2>
<p>查看主机名：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">hostname</span>		查看主机名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改主机名：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">hostname</span> 主机名	修改主机名

<span class="token comment">#修改的主机名是临时生效的</span>
永久生效：
<span class="token number">1</span>.修改配置文件
/etc/hostname
<span class="token number">2</span>.hostnamectl set-hostname 主机名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看主机ip地址：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># hostname -I	查看主机的ip地址</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用-a参数显示主机别名：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># hostname -a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用-i参数显示主机的ip地址：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># hostname -i</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用-y参数显示NIS域名：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># hostname -y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/f58471169d8f419f8585079d5568d49d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>              <font size=5>总文章在：<a href="https://blog.csdn.net/liu_chen_yang/article/details/114872010?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Linux常用命令<ExternalLinkIcon/></a><br>
<img src="https://img-blog.csdnimg.cn/b6c5a9e4a5af4687a64e020cac19eb09.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAQS3liJjmmajpmLM=,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"></p>
</div></template>


