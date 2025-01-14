<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/7c453b5d405345618f248139a1f5798f.gif" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
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
<p>@[toc]</p>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>由于系统自带的pyhon中没有pip，而我们这时候恰好需要用到pip，怎么办呢？今天我就来教大家如何在linux中安装pip；</p>
<h3 id="pip下载" tabindex="-1"><a class="header-anchor" href="#pip下载" aria-hidden="true">#</a> pip下载</h3>
<p>下载任意一个版本就可以；需要哪个版本可以选择第二种，需要哪个版本改一下版本就好了；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#pip22.2.2版本</span>
<span class="token function">wget</span> https://files.pythonhosted.org/packages/4b/30/e15b806597e67057e07a5acdc135216ccbf76a5f1681a324533b61066b0b/pip-22.2.2.tar.gz

<span class="token comment">#pip1.5.4版本</span>
<span class="token function">wget</span> https://pypi.python.org/packages/source/p/pip/pip-1.5.4.tar.gz

<span class="token comment">#pip9.0.1版本</span>
<span class="token function">wget</span> https://pypi.python.org/packages/11/b6/abcb525026a4be042b486df43905d6893fb04f05aac21c32c638e939e447/pip-9.0.1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pip安装" tabindex="-1"><a class="header-anchor" href="#pip安装" aria-hidden="true">#</a> pip安装</h3>
<p>就拿9.0.1版本来做吧</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#解压压缩包</span>
<span class="token function">tar</span> xf pip-9.0.1.tar.gz

<span class="token comment">#进入pip-9.0.1目录</span>
<span class="token builtin class-name">cd</span> pip-9.0.1

<span class="token comment">#进行安装</span>
python setup.py <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发现安装报错</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/07a51e072f8c4704b5dd19104ee0a5c0.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>原因是因为：安装pip时提示setup.py中使用setuptools中的模块，但是我们开始并没有安装setuptools软件包，所以我们需要先下载并安装 setuptools！</p>
<h4 id="下载-安装setuptools" tabindex="-1"><a class="header-anchor" href="#下载-安装setuptools" aria-hidden="true">#</a> 下载/安装setuptools</h4>
<p>1、下载setuptools</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#下载setuptools</span>
<span class="token function">wget</span> https://pypi.python.org/packages/28/4f/889339f38da415e49cff15b21ab27becbf4c017c79fbfdeca663f5b33b36/setuptools-36.4.0.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2、解压setuptools包</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">unzip</span> setuptools-36.4.0.zip

<span class="token builtin class-name">cd</span> setuptools-36.4.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、编译setuptools</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>python setup.py build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4、开始执行setuptools安装</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>python setup.py <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Finished代表成功！</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/b4c552ff2e974da280de899eff0dec0d.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h4 id="再次安装pip" tabindex="-1"><a class="header-anchor" href="#再次安装pip" aria-hidden="true">#</a> 再次安装pip</h4>
<blockquote>
<p>现在，setuptools已经安装好，我们再次进入pip-9.0.1目录，使用 “python <a href="http://setup.py" target="_blank" rel="noopener noreferrer">setup.py<ExternalLinkIcon/></a> install” 命令安装pip：</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> pip-9.0.1

python setup.py <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Finished代表成功！</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/e54da30de120461489c7c99747cbf1a0.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h4 id="验证pip安装是否成功" tabindex="-1"><a class="header-anchor" href="#验证pip安装是否成功" aria-hidden="true">#</a> 验证pip安装是否成功</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pip <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>能查到说明安装成功，接下来我们就可以安装自己想要的包了；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/fc296ae00a5a427095878f7d7f875d88.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h4 id="测试使用pip命令安装需要的包" tabindex="-1"><a class="header-anchor" href="#测试使用pip命令安装需要的包" aria-hidden="true">#</a> 测试使用pip命令安装需要的包</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pip <span class="token function">install</span> nose
pip <span class="token function">install</span> virtualenv
pip <span class="token function">install</span> distribute
pip <span class="token function">install</span> runlike
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/de8771fece2a48f6b89eb475c18f18e6.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="相关专栏-文章" tabindex="-1"><a class="header-anchor" href="#相关专栏-文章" aria-hidden="true">#</a> 相关专栏/文章</h2>
<blockquote>
<p>相关专栏：<a href="https://blog.csdn.net/liu_chen_yang/category_11693372.html?spm=1001.2014.3001.5482" target="_blank" rel="noopener noreferrer">《python基础》<ExternalLinkIcon/></a></p>
<hr>
<p>相关文章：<a href="https://liucy.blog.csdn.net/article/details/124475543" target="_blank" rel="noopener noreferrer">centos安装python3/pip3项目所需的第三方模块（在线安装&amp;&amp;离线安装）<ExternalLinkIcon/></a></p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/d2fdf0e5b33d4c8fb2863a2a463b7813.jpeg" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</div></template>


