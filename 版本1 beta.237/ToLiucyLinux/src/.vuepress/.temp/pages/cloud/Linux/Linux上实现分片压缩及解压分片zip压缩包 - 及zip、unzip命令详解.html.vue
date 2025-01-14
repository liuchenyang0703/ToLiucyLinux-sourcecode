<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<p>@[toc]</p>
<h1 id="zip命令" tabindex="-1"><a class="header-anchor" href="#zip命令" aria-hidden="true">#</a> zip命令</h1>
<blockquote>
<p>zip命令的功能是用于压缩文件，解压命令为unzip。通过zip命令可以将文件打包成.zip格式的压缩包，里面会包含文件的名称、路径、创建时间、上次修改时间等等信息，与tar命令相似。</p>
</blockquote>
<h2 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式：</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">zip</span> 参数 目标文件.zip 源文件或目录名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="常用参数" tabindex="-1"><a class="header-anchor" href="#常用参数" aria-hidden="true">#</a> 常用参数：</h2>
<table>
<thead>
<tr>
<th style="text-align:center">参数</th>
<th style="text-align:center">参数解析</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">-A</td>
<td style="text-align:center">自动解压缩文件</td>
</tr>
<tr>
<td style="text-align:center">-b</td>
<td style="text-align:center">设置暂存文件的目录</td>
</tr>
<tr>
<td style="text-align:center">-c</td>
<td style="text-align:center">添加注释信息到压缩文件</td>
</tr>
<tr>
<td style="text-align:center">-d</td>
<td style="text-align:center">更新压缩包内文件</td>
</tr>
<tr>
<td style="text-align:center">-F</td>
<td style="text-align:center">尝试修复损坏的压缩文件</td>
</tr>
<tr>
<td style="text-align:center">-h</td>
<td style="text-align:center">显示帮助信息</td>
</tr>
<tr>
<td style="text-align:center">-i</td>
<td style="text-align:center">仅压缩符合条件的文件</td>
</tr>
<tr>
<td style="text-align:center">-k</td>
<td style="text-align:center">使用MS-DOS兼容格式</td>
</tr>
<tr>
<td style="text-align:center">-l</td>
<td style="text-align:center">将“LF”替换成“LF+CR”字符</td>
</tr>
<tr>
<td style="text-align:center">-L</td>
<td style="text-align:center">显示版本信息</td>
</tr>
<tr>
<td style="text-align:center">-m</td>
<td style="text-align:center">压缩后删除源文件</td>
</tr>
<tr>
<td style="text-align:center">-n</td>
<td style="text-align:center">不压缩具有特定字符串的文件</td>
</tr>
<tr>
<td style="text-align:center">-q</td>
<td style="text-align:center">静默执行模式</td>
</tr>
<tr>
<td style="text-align:center">-r</td>
<td style="text-align:center">递归处理所有子文件</td>
</tr>
<tr>
<td style="text-align:center">-S</td>
<td style="text-align:center">包含系统和隐藏文件</td>
</tr>
<tr>
<td style="text-align:center">-s</td>
<td style="text-align:center">指定分卷的大小</td>
</tr>
<tr>
<td style="text-align:center">-t</td>
<td style="text-align:center">设置压缩时间为指定日期</td>
</tr>
<tr>
<td style="text-align:center">-T</td>
<td style="text-align:center">检查压缩文件是否正确无误</td>
</tr>
<tr>
<td style="text-align:center">-v</td>
<td style="text-align:center">显示执行过程详细信息</td>
</tr>
<tr>
<td style="text-align:center">-V</td>
<td style="text-align:center">保留VMS操作系统的文件属性</td>
</tr>
<tr>
<td style="text-align:center">-w</td>
<td style="text-align:center">在文件名称中加入版本编号</td>
</tr>
<tr>
<td style="text-align:center">-X</td>
<td style="text-align:center">不保留过多的文件属性信息 -y 直接保存符号链接，而不是对应文件</td>
</tr>
</tbody>
</table>
<h2 id="参考示例" tabindex="-1"><a class="header-anchor" href="#参考示例" aria-hidden="true">#</a> 参考示例：</h2>
<ul>
<li>1、将指定目录及其内全部文件都打包成zip格式压缩包文件</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">zip</span> <span class="token parameter variable">-r</span> cs.zip cs

<span class="token function">zip</span> 	<span class="token comment"># 压缩命令</span>
<span class="token parameter variable">-r</span> 		<span class="token comment"># 递归处理所有子文件</span>
cs.zip	<span class="token comment"># 要压缩的文件名</span>
cs		<span class="token comment"># 要压缩的目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/927f9360b1154267beefe17cd9288f11.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>2、将当前工作目录内所有以.conf为后缀的文件打包</li>
</ul>
<div class="language-bsah line-numbers-mode" data-ext="bsah"><pre v-pre class="language-bsah"><code>zip -r conf.zip /etc/*.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/65637736cddb4bbcaf3802bf63aaed51.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>3、更新压缩包文件中某个文件</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">zip</span> <span class="token parameter variable">-dv</span> conf.zip /etc/locale.conf

<span class="token function">zip</span>			<span class="token comment"># 压缩命令</span>
<span class="token parameter variable">-dv</span>			<span class="token comment"># d：更新压缩包内文件 v:查看详细信息</span>
conf.zip			<span class="token comment"># 要压缩的文件名</span>
/etc/locale.conf	<span class="token comment">#要更新的某个文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/0cf9dfd9a0014e598b1c0dbc8ead8b91.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>4、检查压缩文件是否正确无误</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">zip</span> <span class="token parameter variable">-T</span> conf.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/7394c0aff0464e4e8fb8f8c0289917ff.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="unzip命令" tabindex="-1"><a class="header-anchor" href="#unzip命令" aria-hidden="true">#</a> unzip命令</h1>
<h2 id="语法格式-1" tabindex="-1"><a class="header-anchor" href="#语法格式-1" aria-hidden="true">#</a> 语法格式：</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">unzip</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span> 压缩包名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="常用参数-1" tabindex="-1"><a class="header-anchor" href="#常用参数-1" aria-hidden="true">#</a> 常用参数：</h2>
<table>
<thead>
<tr>
<th style="text-align:center">参数</th>
<th style="text-align:center">参数解析</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">-a</td>
<td style="text-align:center">对文本进行必要的字符转换</td>
</tr>
<tr>
<td style="text-align:center">-b</td>
<td style="text-align:center">不要对文本进行任何字符转换</td>
</tr>
<tr>
<td style="text-align:center">-c</td>
<td style="text-align:center">适当转换字符后输出解压缩结果</td>
</tr>
<tr>
<td style="text-align:center">-C</td>
<td style="text-align:center">严格区分大小写</td>
</tr>
<tr>
<td style="text-align:center">-d</td>
<td style="text-align:center">解压缩文件到指定目录中</td>
</tr>
<tr>
<td style="text-align:center">-f</td>
<td style="text-align:center">强制覆盖已有文件</td>
</tr>
<tr>
<td style="text-align:center">-j</td>
<td style="text-align:center">不处理压缩文件中原有的目录路径</td>
</tr>
<tr>
<td style="text-align:center">-l</td>
<td style="text-align:center">显示压缩包内文件列表</td>
</tr>
<tr>
<td style="text-align:center">-L</td>
<td style="text-align:center">将压缩包内文件名改为小写</td>
</tr>
<tr>
<td style="text-align:center">-n</td>
<td style="text-align:center">解压缩时不覆盖已有文件</td>
</tr>
<tr>
<td style="text-align:center">-p</td>
<td style="text-align:center">使用密码加密</td>
</tr>
<tr>
<td style="text-align:center">-q</td>
<td style="text-align:center">静默执行模式</td>
</tr>
<tr>
<td style="text-align:center">-t</td>
<td style="text-align:center">检查压缩包完整性</td>
</tr>
<tr>
<td style="text-align:center">-v</td>
<td style="text-align:center">显示执行过程详细信息</td>
</tr>
<tr>
<td style="text-align:center">-x</td>
<td style="text-align:center">跳过压缩包内的指定文件</td>
</tr>
<tr>
<td style="text-align:center">-z</td>
<td style="text-align:center">显示压缩包内的备注文字</td>
</tr>
</tbody>
</table>
<h2 id="参考示例-1" tabindex="-1"><a class="header-anchor" href="#参考示例-1" aria-hidden="true">#</a> 参考示例：</h2>
<ul>
<li>1、解压zip包</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">unzip</span> conf.zip 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/e033349d4bf74a48bf99bea49051ddfc.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>2、将压缩包文件解压到指定目录中</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">unzip</span> conf.zip <span class="token parameter variable">-d</span> /home/lcy/aaa/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/63319bdd84fa4d8097852ba238505fdf.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>3、测试压缩包文件是否完整，文件有无损坏</li>
</ul>
<p>一般用于压缩完之后检测压缩包是否完整。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">unzip</span> <span class="token parameter variable">-t</span> conf.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/28c97d6f22f5457dbd6cf19a637a3312.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>4、批量解压 压缩包</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> *.zip<span class="token punctuation">;</span><span class="token keyword">do</span> <span class="token function">unzip</span> <span class="token variable">$i</span><span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>5、批量解压 压缩包并将解压的文件统一放到一个目录中</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 先创建一个要存放解压下来的文件的目录</span>
<span class="token function">mkdir</span> /home/jieya

<span class="token comment"># 批量解压并指定放入的目录</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> *.zip<span class="token punctuation">;</span><span class="token keyword">do</span> <span class="token function">unzip</span> <span class="token variable">$i</span> <span class="token parameter variable">-d</span> /home/jieya/<span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="分片压缩文件夹为zip压缩包-推荐在windows进行分片压缩" tabindex="-1"><a class="header-anchor" href="#分片压缩文件夹为zip压缩包-推荐在windows进行分片压缩" aria-hidden="true">#</a> 分片压缩文件夹为zip压缩包（推荐在windows进行分片压缩）</h1>
<p>先将目标压缩成单个的zip压缩包，再进行分片：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#先将目录打成压缩包</span>
<span class="token function">zip</span> <span class="token parameter variable">-r</span> cs.zip cs/

<span class="token comment">#检查压缩包是否完整(ok即可)</span>
<span class="token function">zip</span> <span class="token parameter variable">-T</span> cs.zip

<span class="token comment">#先看压缩包多大</span>
<span class="token function">du</span> <span class="token parameter variable">-sh</span> cs.zip

<span class="token comment">#然后在根据自己要打多大一个压缩包，分片压缩zip压缩包</span>
<span class="token function">zip</span> <span class="token parameter variable">-s</span> 130m cs.zip <span class="token parameter variable">--out</span> cs-data.zip

<span class="token comment">#就可以看到打的压缩包了， cs-data.z01 cs-data.z02 cs-data.zip</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/cc4a5dc6afbc42dba2485199aa0ed382.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>解析分片压缩zip压缩包命令：</p>
<blockquote>
<p>-r：递归进入子目录</p>
<p>-T：检查压缩包是否完整</p>
<p>-s：指定分卷的最大容量，例如130m代表130MB、10g代表10GB</p>
<p>--out：输出的zip压缩包名</p>
<p>cs.zip：中间压缩包，分卷前的完整压缩包</p>
</blockquote>
<p>使用以上命令进行分卷压缩时，会产生多个以数字排序的zip压缩包，如：</p>
<blockquote>
<p>cs-data.z01<br>
cs-data.z02<br>
…<br>
cs-data.zip</p>
</blockquote>
<p>总体感觉，分片压缩zip压缩包不如在windows上执行，还是推荐windows上去执行分片压缩；</p>
<h1 id="合并分片的压缩包-并-解压分片zip压缩包" tabindex="-1"><a class="header-anchor" href="#合并分片的压缩包-并-解压分片zip压缩包" aria-hidden="true">#</a> 合并分片的压缩包 并 解压分片zip压缩包</h1>
<p>可以先合并分片压缩包，再进行解压：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 合并分片压缩包
cat cs-data.z* > cs-new.zip

# 查看刚刚合并的压缩包大小
du -sh cs-new.zip

# 检查压缩包完整性(ok即没问题)
unzip -t cs-new.zip

# 解压zip压缩包
unzip cs-new.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解析合并压缩包命令：</p>
<blockquote>
<p>&gt;：重定向符</p>
<p>-t：检查压缩包完整性</p>
<p>cs-new.zip：分片压缩包合并后的完整压缩包名称</p>
<p>unzip：解压zip压缩包</p>
</blockquote>
<blockquote>
<p>小提示：<br>
如果在合并完压缩包之后，检查压缩包完整性的时候发现有错；</p>
<p>那么可以去windows上进行分片压缩，在拿到linux上合并，linux上的分片压缩不是很好，可能在合并并解压的时候报错，所以分片压缩的话还是建议在windows上；<br>
没有必须要求分片合并解压在linux上的话，最好也在windows上进行操作。</p>
</blockquote>
</div></template>


