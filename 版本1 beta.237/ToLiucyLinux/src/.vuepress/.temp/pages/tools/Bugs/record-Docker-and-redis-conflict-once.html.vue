<template><div><blockquote>
<p>大家好，我是Leo，之前整了了一个华为云2c4G的新人优惠云服务器，一直没派上用场，这不最近当前重新学一下Redis相关的知识，就是就准备再服务器上面安装Redis使用，也懒得我在搞虚拟机。</p>
</blockquote>
<h2 id="_1-问题发现" tabindex="-1"><a class="header-anchor" href="#_1-问题发现" aria-hidden="true">#</a> 1. 问题发现</h2>
<p>我索性也没有想太多,Docker默认安装的。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309111537144.png" alt="image-20230911153750067" tabindex="0" loading="lazy"><figcaption>image-20230911153750067</figcaption></figure>
<p>Redis这部分内容也是基于最新的Redis7版本进行学习，还侧重学习了一下Redis的新特性。</p>
<p>于是在Docker中安装了Redis7.0.2版本。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309111539572.png" alt="image-20230911153934505" tabindex="0" loading="lazy"><figcaption>image-20230911153934505</figcaption></figure>
<p><strong>这边一切就绪，于是准备使用进入docker的方式来启动Redis</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> redis <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>啪一声快乐没了</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309111544278.gif" alt="WeyoL" tabindex="0" loading="lazy"><figcaption>WeyoL</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309111540827.png" alt="image-20230911154029780" tabindex="0" loading="lazy"><figcaption>image-20230911154029780</figcaption></figure>
<h2 id="_2-探询问题" tabindex="-1"><a class="header-anchor" href="#_2-探询问题" aria-hidden="true">#</a> 2. 探询问题</h2>
<p>既然有问题，咱们就一点一点找呗。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309111549075.gif" alt="G5yKM" tabindex="0" loading="lazy"><figcaption>G5yKM</figcaption></figure>
<p>我第一时间想到了去通过<code v-pre>docker日志</code>去查看具体的问题是啥，这种情况日志就是我们最好的朋友。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> logs <span class="token parameter variable">--tail</span> <span class="token number">50</span> <span class="token parameter variable">--follow</span> <span class="token parameter variable">--timestamps</span> redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你还别说，你还真别说，大家继续往下看</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309111552335.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>图中我用红色框框圈住的便是问题的所在，于是我便开始进行了面向谷歌编程，开始搜索问题的本源。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309111554830.jpg" alt="WEke3" tabindex="0" loading="lazy"><figcaption>WEke3</figcaption></figure>
<p>最后在Redis官方github仓库中给出这一点解析，Docker版本&lt;=20与Redis最新版在一起会发生冲突，官方建议使用低版本Redis, 再Github issures上有关这个问题的一些描述，有兴趣的朋友可以看看，<a href="https://github.com/redis/redis/issues/12362" target="_blank" rel="noopener noreferrer">链接直达<ExternalLinkIcon/></a></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309111558466.png" alt="image-20230911155841185" tabindex="0" loading="lazy"><figcaption>image-20230911155841185</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309111601446.gif" alt="jxJ5W" tabindex="0" loading="lazy"><figcaption>jxJ5W</figcaption></figure>
<h2 id="_3-解决问题" tabindex="-1"><a class="header-anchor" href="#_3-解决问题" aria-hidden="true">#</a> 3. 解决问题</h2>
<p>好的，我们继续，于是我就删除了Redis7的镜像，因为Docker还有其他服务，所以我就只能先对Redis下手了，把Redis版本降为5。</p>
<p>当然这里其他朋友可以直接升级Docker版本，只要Docker版本大于20就不会有这个问题哈。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309111613322.png" alt="image-20230911161339264" tabindex="0" loading="lazy"><figcaption>image-20230911161339264</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309111616257.jpg" alt="Qw5GJ" tabindex="0" loading="lazy"><figcaption>Qw5GJ</figcaption></figure>
<p>完美收工。</p>
<p><strong>到这里问题就解决了，这里想告诉大家，遇到之前没有碰到过的新问题，不要慌，先追溯本源，看看到底是哪里出错了，思路一定要清晰，实在没有头绪的话可以百度，利用好搜索引擎，你一定可以的!!!</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312031906036.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


