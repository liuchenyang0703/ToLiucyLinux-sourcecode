<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181342354.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
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
<blockquote>
<p>  今天新到了一台服务器，需要安装服务；因为在安装服务的时候，发现/根目录下没有空间了，通过<code v-pre>fdisk -l</code>查看了一下磁盘空间，发现还有多余的100G没有使用，所以，这时候就需要去扩容磁盘分区；<br>
  当然，在扩容的时候也是有受阻的，比如遇到了磁盘损坏问题<code v-pre>“报错fdisk: cannot write disk label: Invalid argument”</code>，这个需要去修复一下：使用<code v-pre>parted -l</code>此命令去修复一下，即可重新进行扩容分区；因为在安装的时候也是遇到了一些问题的，因为好几年都没对磁盘空间进行分区了，所以有些忘了，在这里记录一下；<br>
   因为服务器已经安装好服务，我们就用虚拟机来进行磁盘分区和挂载并设置永久挂载。</p>
</blockquote>
<p>首先，我们需要准备一个虚拟机，并在添加一块硬盘；添加的时候使用<code v-pre>推荐的</code>即可，然后创建一个新的虚拟磁盘，这个就不会影响其他的了；磁盘大小我这里就设置成50G即可；过多的细节就不一一说了，一直下一步即可。</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181342516.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181342984.png" alt="" loading="lazy"></p>
<p>设置好之后，启动虚拟机，进行磁盘管理，和磁盘扩容。</p>
<h2 id="一、查看磁盘空间" tabindex="-1"><a class="header-anchor" href="#一、查看磁盘空间" aria-hidden="true">#</a> 一、查看磁盘空间</h2>
<p>可以使用<code v-pre>fdsik -l</code>查看磁盘空间，这样查看的比较详细；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">fdisk</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181342196.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>也可以使用<code v-pre>lsblk</code>查看现有的磁盘，看着比较简便明了。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>lsblk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181342084.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>使用<code v-pre>fdisk -l</code>可以看到<code v-pre>/dev/sdb</code>下还有50G空间；目前是空闲的；我们需要将他这50G挂载到/data/上；</p>
<h2 id="二、进行磁盘分区" tabindex="-1"><a class="header-anchor" href="#二、进行磁盘分区" aria-hidden="true">#</a> 二、进行磁盘分区</h2>
<p>首先我们先说说磁盘分区的一些命令：</p>
<table>
<thead>
<tr>
<th>磁盘分区的管理工具</th>
</tr>
</thead>
<tbody>
<tr>
<td>fdisk</td>
</tr>
<tr>
<td>gdisk</td>
</tr>
<tr>
<td>lsblk</td>
</tr>
</tbody>
</table>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 查看磁盘分区</span>
<span class="token function">fdisk</span> <span class="token parameter variable">-l</span> 	<span class="token comment"># 查看所有磁盘信息</span>
lsblk		<span class="token comment"># 查看所有磁盘信息</span>

<span class="token comment"># 对磁盘分区进行操作</span>
<span class="token function">fdisk</span> <span class="token parameter variable">-l</span>	<span class="token comment"># 对磁盘分区进行操作</span>
gdisk <span class="token parameter variable">-l</span>	<span class="token comment"># 对磁盘分区进行操作（用于划分容量超过2T磁盘分区，需要手动安装）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>进入磁盘分区的常用的操作命令</li>
</ul>
<table>
<thead>
<tr>
<th>命令</th>
<th>解析</th>
</tr>
</thead>
<tbody>
<tr>
<td>m /help</td>
<td>帮助命令，查看其他参数</td>
</tr>
<tr>
<td>p</td>
<td>列出分区表</td>
</tr>
<tr>
<td>n</td>
<td>创建新的分区</td>
</tr>
<tr>
<td>d</td>
<td>删除一个分区</td>
</tr>
<tr>
<td>v</td>
<td>查看分区详细信息</td>
</tr>
<tr>
<td>e</td>
<td>扩展分区</td>
</tr>
<tr>
<td>q</td>
<td>不保存，退出</td>
</tr>
<tr>
<td>w</td>
<td>保存，退出</td>
</tr>
</tbody>
</table>
<ul>
<li>分区讲解</li>
</ul>
<blockquote>
<p>MBR中只可以划分4个主分区，或者时3个主分区+1个扩展分区<br>
扩展分区后，可以划分逻辑分区</p>
</blockquote>
<ul>
<li>进行磁盘分区</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 首先刷新一下磁盘分区表(如果没执行成功也无所谓，这步可有可无)</span>
partprobe

<span class="token comment"># 进行磁盘分区</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># fdisk /dev/sdb</span>

Welcome to <span class="token function">fdisk</span> <span class="token punctuation">(</span>util-linux <span class="token number">2.32</span>.2<span class="token punctuation">)</span>.
Changes will remain <span class="token keyword">in</span> memory only, <span class="token keyword">until</span> you decide to <span class="token function">write</span> them.
Be careful before using the <span class="token function">write</span> command.

Device does not contain a recognized partition table.
Created a new DOS disklabel with disk identifier 0x14c524a5.

<span class="token comment"># n 创建磁盘分区</span>
Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: n
Partition <span class="token builtin class-name">type</span>
   p   primary <span class="token punctuation">(</span><span class="token number">0</span> primary, <span class="token number">0</span> extended, <span class="token number">4</span> <span class="token function">free</span><span class="token punctuation">)</span>
   e   extended <span class="token punctuation">(</span>container <span class="token keyword">for</span> logical partitions<span class="token punctuation">)</span>
Select <span class="token punctuation">(</span>default p<span class="token punctuation">)</span>: 

<span class="token comment"># 默认为主分区，直接回车；e为扩展分区。</span>
Using default response p.
<span class="token comment"># 选择1-4分区，默认为1，因为sdb还没有分区，所以直接回车默认就行</span>
Partition number <span class="token punctuation">(</span><span class="token number">1</span>-4, default <span class="token number">1</span><span class="token punctuation">)</span>: 
<span class="token comment"># 选择起始扇区，默认为2048，直接回车就好了</span>
First sector <span class="token punctuation">(</span><span class="token number">2048</span>-104857599, default <span class="token number">2048</span><span class="token punctuation">)</span>: 
<span class="token comment"># 选择要分的磁盘空间大小，默认就是最大，直接回车即可；如果有其他需求，写对应的值即可；</span>
Last sector, +sectors or +size<span class="token punctuation">{</span>K,M,G,T,P<span class="token punctuation">}</span> <span class="token punctuation">(</span><span class="token number">2048</span>-104857599, default <span class="token number">104857599</span><span class="token punctuation">)</span>: 

<span class="token comment"># 提示，成功创建一个Linux类型的磁盘分区，大小为50G。</span>
Created a new partition <span class="token number">1</span> of <span class="token builtin class-name">type</span> <span class="token string">'Linux'</span> and of size <span class="token number">50</span> GiB.

<span class="token comment"># p 进行查看，列出分区表；这块是最后我在虚拟机上复制的，虽然是中文，但是都一样。</span>
Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: p
磁盘 /dev/sdb：53.7 GB, <span class="token number">53687091200</span> 字节，104857600 个扇区
Units <span class="token operator">=</span> 扇区 of <span class="token number">1</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">512</span> bytes
扇区大小<span class="token punctuation">(</span>逻辑/物理<span class="token punctuation">)</span>：512 字节 / <span class="token number">512</span> 字节
I/O 大小<span class="token punctuation">(</span>最小/最佳<span class="token punctuation">)</span>：512 字节 / <span class="token number">512</span> 字节
磁盘标签类型：dos
磁盘标识符：0xe5a06cd9

   设备 Boot      Start         End      Blocks   Id  System
/dev/sdb1            <span class="token number">2048</span>   <span class="token number">104857599</span>    <span class="token number">52427776</span>   <span class="token number">83</span>  Linux


<span class="token comment"># 可以看到已经列出来了一个50G的sdb1磁盘分区，这时候我们要保存退出;</span>
<span class="token comment"># w 保存退出，如果不想保存直接退出可以使用 q 。</span>
Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: w
The partition table has been altered.
Calling ioctl<span class="token punctuation">(</span><span class="token punctuation">)</span> to re-read partition table.
Syncing disks.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样磁盘分区就创建完了；</p>
<ul>
<li>查看磁盘分区</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">fdisk</span> <span class="token parameter variable">-l</span>
lsblk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181342963.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181342505.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以看到sdb分出来一个区为50G；</p>
<p>接下来我们就是挂载磁盘分区。</p>
<h2 id="三、挂载-dev-sdb1到-data-目录" tabindex="-1"><a class="header-anchor" href="#三、挂载-dev-sdb1到-data-目录" aria-hidden="true">#</a> 三、挂载<code v-pre>/dev/sdb1</code>到/data/目录</h2>
<ul>
<li>首先，需要创建一个/data/空目录</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 记得先查看一下，如果没有就可以创建了，如果有可以重新找一个挂载目录。</span>
<span class="token function">mkdir</span> /data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后对磁盘分区进行挂载；直接挂载肯定是不行的，会提示报错的；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181342542.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>所以需要先格式化磁盘分区。</p>
<blockquote>
<p>这里针对一下centos格式化磁盘空间的类型；</p>
<font color=gree> centos7是xfs，centos6是ext4</font><br><p>#Cetnos6格式化磁盘命令为：</p>
<font color=gree>mkfs.ext4 -f /dev/[sda]</font><p>#Centos7格式化磁盘命令为：</p>
<font color=gree>mkfs.xfs -f /dev/[sda]</font></blockquote>
<p>这里我们是centos7的环境，那么就使用xfs来格式化；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 格式化磁盘分区</span>
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># mkfs.xfs -f /dev/sdb1</span>
meta-data<span class="token operator">=</span>/dev/sdb1              <span class="token assign-left variable">isize</span><span class="token operator">=</span><span class="token number">512</span>    <span class="token assign-left variable">agcount</span><span class="token operator">=</span><span class="token number">4</span>, <span class="token assign-left variable">agsize</span><span class="token operator">=</span><span class="token number">3276736</span> blks
         <span class="token operator">=</span>                       <span class="token assign-left variable">sectsz</span><span class="token operator">=</span><span class="token number">512</span>   <span class="token assign-left variable">attr</span><span class="token operator">=</span><span class="token number">2</span>, <span class="token assign-left variable">projid32bit</span><span class="token operator">=</span><span class="token number">1</span>
         <span class="token operator">=</span>                       <span class="token assign-left variable">crc</span><span class="token operator">=</span><span class="token number">1</span>        <span class="token assign-left variable">finobt</span><span class="token operator">=</span><span class="token number">0</span>, <span class="token assign-left variable">sparse</span><span class="token operator">=</span><span class="token number">0</span>
data     <span class="token operator">=</span>                       <span class="token assign-left variable">bsize</span><span class="token operator">=</span><span class="token number">4096</span>   <span class="token assign-left variable">blocks</span><span class="token operator">=</span><span class="token number">13106944</span>, <span class="token assign-left variable">imaxpct</span><span class="token operator">=</span><span class="token number">25</span>
         <span class="token operator">=</span>                       <span class="token assign-left variable">sunit</span><span class="token operator">=</span><span class="token number">0</span>      <span class="token assign-left variable">swidth</span><span class="token operator">=</span><span class="token number">0</span> blks
naming   <span class="token operator">=</span>version <span class="token number">2</span>              <span class="token assign-left variable">bsize</span><span class="token operator">=</span><span class="token number">4096</span>   ascii-ci<span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">ftype</span><span class="token operator">=</span><span class="token number">1</span>
log      <span class="token operator">=</span>internal log           <span class="token assign-left variable">bsize</span><span class="token operator">=</span><span class="token number">4096</span>   <span class="token assign-left variable">blocks</span><span class="token operator">=</span><span class="token number">6399</span>, <span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token number">2</span>
         <span class="token operator">=</span>                       <span class="token assign-left variable">sectsz</span><span class="token operator">=</span><span class="token number">512</span>   <span class="token assign-left variable">sunit</span><span class="token operator">=</span><span class="token number">0</span> blks, lazy-count<span class="token operator">=</span><span class="token number">1</span>
realtime <span class="token operator">=</span>none                   <span class="token assign-left variable">extsz</span><span class="token operator">=</span><span class="token number">4096</span>   <span class="token assign-left variable">blocks</span><span class="token operator">=</span><span class="token number">0</span>, <span class="token assign-left variable">rtextents</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token comment"># 格式化完之后，这时候我们就可以挂载目录了</span>
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># mount /dev/sdb1 /data/</span>

<span class="token comment"># 挂载完成之后df -Th查看一下磁盘空间即可；</span>
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># df -Th</span>
文件系统                类型      容量  已用  可用 已用% 挂载点
devtmpfs                devtmpfs  898M     <span class="token number">0</span>  898M    <span class="token number">0</span>% /dev
tmpfs                   tmpfs     910M     <span class="token number">0</span>  910M    <span class="token number">0</span>% /dev/shm
tmpfs                   tmpfs     910M  <span class="token number">9</span>.6M  901M    <span class="token number">2</span>% /run
tmpfs                   tmpfs     910M     <span class="token number">0</span>  910M    <span class="token number">0</span>% /sys/fs/cgroup
/dev/mapper/centos-root xfs        17G  <span class="token number">1</span>.2G   16G    <span class="token number">7</span>% /
/dev/sda1               xfs      1014M  150M  865M   <span class="token number">15</span>% /boot
tmpfs                   tmpfs     182M     <span class="token number">0</span>  182M    <span class="token number">0</span>% /run/user/0
/dev/sdb1               xfs        50G   33M   50G    <span class="token number">1</span>% /data

<span class="token comment"># 可以看到/dev/sdb1已经挂载上了，类型为 xfs。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181342590.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>扩展：</p>
<blockquote>
<p>mkfs：	创建文件系统<br>
-f：		强制覆盖</p>
</blockquote>
<blockquote>
<p>红帽系统8.8格式化命令为： /sbin/mke2fs -j /dev/sdb1<br>
（-j 是ext2，而日志是ext3）<br>
永久挂载为：<br>
/dev/sdb1                                       /data                   ext3    defaults                                                1 2<br>
至于为什么是ext3，我也不是很清楚，因为这是商家的一个要求，毕竟永久挂载错了，服务器就起不来了，就需要去虚拟机或者连接服务器去看报错信息；一般配置完这个导致服务器启动不来大部分都是因为类型配置错了。</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181342427.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这个直接mount挂载完只是临时挂载，如果不设置永久挂载，服务器重启之后就会掉，还需要手动去挂载，容易丢失数据，所以我们还需要设置永久挂载。</p>
<blockquote>
<p>临时卸载挂载的磁盘为：<code v-pre>numount /data/</code></p>
</blockquote>
<h2 id="四、设置永久挂载" tabindex="-1"><a class="header-anchor" href="#四、设置永久挂载" aria-hidden="true">#</a> 四、设置永久挂载</h2>
<p>永久挂载我们需要去<code v-pre>/etc/fstab</code> 配置文件中来配置；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/fstab</span>

<span class="token comment"># 在最后一行添加</span>
/dev/sdb1 /data/ xfs defaults <span class="token number">0</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181341103.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>然后保存退出，重启测试<code v-pre>reboot</code>重启，如果配置的挂载有问题会导致服务器启动不了，需要到虚拟机或服务器去排查问题，查看报错信息，一般配置完这个导致服务器启动不了或者是大部分都是因为<font color=red>类型</font>配置错了，<font color=red>所以要谨慎更谨慎</font>；</p>
<p>解析：</p>
<blockquote>
<p><strong>/dev/sdb1</strong>：为磁盘分区的目录，也就是挂载到data的源目录<br>
<strong>/data/</strong>：这个是目录路径，挂载的目标路径及目录<br>
<strong>xfs</strong>：centos7是xfs，centos6是ext4，如果不确定可以使用<code v-pre>df -Th</code>命令看临时挂载的时候的类型是什么。<br>
<strong>defaults</strong>：挂载的参数 defaults默认参数<br>
<strong>第五段</strong>：是否使用dump备份 0不备份 1备份 <font color=orange>（0）</font><br>
<strong>第六段</strong>：是否使用fsck检测 0不检测 1检测 <font color=orange>（0）</font></p>
</blockquote>
<p>重启测试，可以连接上，在使用<code v-pre>df -Th</code>看看，没有问题即可；那便是完成永久挂载了。</p>
<h2 id="五、配置完成" tabindex="-1"><a class="header-anchor" href="#五、配置完成" aria-hidden="true">#</a> 五、配置完成</h2>
</div></template>


