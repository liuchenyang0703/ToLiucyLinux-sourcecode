<template><div><blockquote>
<p>🍁<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！</p>
</blockquote>
<h2 id="pwgen-生成随机密码" tabindex="-1"><a class="header-anchor" href="#pwgen-生成随机密码" aria-hidden="true">#</a> pwgen 生成随机密码</h2>
<ul>
<li>安装<code v-pre>pwgen</code>命令</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> pwgen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>使用方法</li>
</ul>
<p>执行后，将输出随机密码。您可以根据需要更改密码长度和生成的密码的个数。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pwgen <span class="token operator">&lt;</span>密码长度<span class="token operator">></span>
pwgen <span class="token operator">&lt;</span>密码长度<span class="token operator">></span> <span class="token operator">&lt;</span>生成的密码个数<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>实例</li>
</ul>
<p>生成随机的12个字长的密码（会生成很多，可从中选取任意一个出来）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pwgen <span class="token number">12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生成随机的12个字长的密码（只生成一个）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pwgen <span class="token number">12</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><font color=red>请注意：生成的密码应该保密，因此请不要将其存储在不安全的位置。</font><h2 id="mkpasswd-生成随机密码-有特殊要求推荐" tabindex="-1"><a class="header-anchor" href="#mkpasswd-生成随机密码-有特殊要求推荐" aria-hidden="true">#</a> mkpasswd 生成随机密码（有特殊要求推荐）</h2>
<ul>
<li>安装<code v-pre>expect</code>命令</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">expect</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>参数说明</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>-l</td>
<td>密码的长度定义, 默认是 9</td>
</tr>
<tr>
<td>-d</td>
<td>数字个数, 默认是 2</td>
</tr>
<tr>
<td>-c</td>
<td>小写字符个数, 默认是 3</td>
</tr>
<tr>
<td>-C</td>
<td>大写字符个数, 默认是 2</td>
</tr>
<tr>
<td>-s</td>
<td>特殊字符个数, 默认是  1</td>
</tr>
</tbody>
</table>
<ul>
<li>实例</li>
</ul>
<p>随机生成密码：长度为12、数字3个、小写字符5个、大写字符为3个、特殊字符为1个。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mkpasswd <span class="token parameter variable">-l</span> <span class="token number">12</span> <span class="token parameter variable">-d</span> <span class="token number">3</span> <span class="token parameter variable">-c</span> <span class="token number">5</span> <span class="token parameter variable">-C</span> <span class="token number">3</span> <span class="token parameter variable">-s</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><font color=red>请注意：生成的密码应该保密，因此请不要将其存储在不安全的位置。</font><h2 id="openssl-生成随机密码-高强度密码推荐" tabindex="-1"><a class="header-anchor" href="#openssl-生成随机密码-高强度密码推荐" aria-hidden="true">#</a> openssl 生成随机密码（高强度密码推荐）</h2>
<ul>
<li>简介</li>
</ul>
<blockquote>
<p>在所有的类 Unix 发行版、Solaris、Mac OS X 和 Windows 中默认都用openssl这个工具来生成高强度随机密码（这个是系统自带，使用率最高）</p>
</blockquote>
<ul>
<li>使用方式</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>openssl rand <span class="token parameter variable">-base64</span> <span class="token operator">&lt;</span>密码字符长度<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>实例</li>
</ul>
<p>随机生成12位的密码（推荐）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>openssl rand <span class="token parameter variable">-base64</span> <span class="token number">12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>随机生成12位的密码并进行数据校验要前12位字符串</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>openssl rand <span class="token parameter variable">-base64</span> <span class="token number">12</span> <span class="token operator">|</span> md5sum <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-c</span> <span class="token number">1</span>-12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><font color=red>请注意：生成的密码应该保密，因此请不要将其存储在不安全的位置。</font><h2 id="dev-urandom-生成随机密码-高强度密码推荐10位密码" tabindex="-1"><a class="header-anchor" href="#dev-urandom-生成随机密码-高强度密码推荐10位密码" aria-hidden="true">#</a> /dev/urandom 生成随机密码（高强度密码推荐10位密码）</h2>
<p>数据取于一些linux面板的安装脚本内；（小皮面板、1Panel）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token operator">&lt;</span> /dev/urandom <span class="token function">tr</span> <span class="token parameter variable">-dc</span> <span class="token number">0</span>-9-A-Z-a-z-<span class="token operator">|</span><span class="token function">head</span> <span class="token parameter variable">-c</span> <span class="token variable">${1<span class="token operator">:-</span>10}</span> <span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><font color=red>请注意：生成的密码应该保密，因此请不要将其存储在不安全的位置。</font></div></template>


