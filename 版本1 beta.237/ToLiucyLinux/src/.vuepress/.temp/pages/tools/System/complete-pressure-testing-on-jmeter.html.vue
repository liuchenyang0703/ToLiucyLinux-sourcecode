<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p><code v-pre>jmeter</code>算是我们日常比较常用的压测工具，这篇文章笔者就介绍一下基于<code v-pre>win10</code>完成<code v-pre>jmeter</code>的安装及使用。</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h3>
<p>首先我们必须到达官网下载对应的安装包。</p>
<p><a href="https://archive.apache.org/dist/jmeter/binaries/" target="_blank" rel="noopener noreferrer">https://archive.apache.org/dist/jmeter/binaries/(opens new window)<ExternalLinkIcon/></a></p>
<p>注意下载的时候必须下载<code v-pre>Binaries</code>类型而非源码类型，否则启动时可能会抛出<code v-pre>Unable to access jarfile ApacheJMeter</code>，如下图所示，笔者本次下载的就是<code v-pre>5.1</code>版本。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053945.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量" aria-hidden="true">#</a> 配置环境变量</h3>
<p>完成下载后，我们可以将<code v-pre>jmeter</code>存放到自己喜欢的目录然后设置环境变量。首先添加一个环境变量<code v-pre>JMETER_HOME</code>，值为<code v-pre>jmeter</code>的存放路径</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053630.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>然后在环境变量<code v-pre>path</code>添加一条<code v-pre>%JMETER_HOME%\bin</code></p>
<h3 id="启动测试" tabindex="-1"><a class="header-anchor" href="#启动测试" aria-hidden="true">#</a> 启动测试</h3>
<p>配置完成环境变量后，我们就可以启动测试可用性了，我们打开<code v-pre>cmd</code>控制台输入<code v-pre>jmeter</code>，如下所示，如果输出这样一段文字并且启动的<code v-pre>jmeter</code>的图形界面则说明安装成功了。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">C</span><span class="token operator">:</span>\<span class="token class-name">Users</span>\shark<span class="token operator">-</span><span class="token class-name">Gao</span><span class="token operator">></span>jmeter
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
<span class="token class-name">Don</span>'t use <span class="token constant">GUI</span> mode <span class="token keyword">for</span> load testing <span class="token operator">!</span><span class="token punctuation">,</span> only <span class="token keyword">for</span> <span class="token class-name">Test</span> creation and <span class="token class-name">Test</span> <span class="token class-name"><span class="token namespace">debugging<span class="token punctuation">.</span></span>
For</span> load testing<span class="token punctuation">,</span> use <span class="token constant">CLI</span> <span class="token class-name">Mode</span> <span class="token punctuation">(</span>was <span class="token class-name">NON</span> <span class="token constant">GUI</span><span class="token punctuation">)</span><span class="token operator">:</span>
   jmeter <span class="token operator">-</span>n <span class="token operator">-</span>t <span class="token punctuation">[</span>jmx file<span class="token punctuation">]</span> <span class="token operator">-</span>l <span class="token punctuation">[</span>results file<span class="token punctuation">]</span> <span class="token operator">-</span>e <span class="token operator">-</span>o <span class="token punctuation">[</span><span class="token class-name">Path</span> <span class="token keyword">to</span> <span class="token namespace">web</span> report folder<span class="token punctuation">]</span>
<span class="token operator">&amp;</span> increase <span class="token class-name">Java</span> <span class="token class-name">Heap</span> <span class="token keyword">to</span> <span class="token namespace">meet</span> your test requirements<span class="token operator">:</span>
   <span class="token class-name">Modify</span> current env variable <span class="token constant">HEAP</span><span class="token operator">=</span><span class="token string">"-Xms1g -Xmx1g -XX:MaxMetaspaceSize=256m"</span> in the jmeter batch file
<span class="token class-name">Check</span> <span class="token operator">:</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>jmeter<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>org<span class="token operator">/</span>usermanual<span class="token operator">/</span>best<span class="token operator">-</span>practices<span class="token punctuation">.</span>html
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调整为中文" tabindex="-1"><a class="header-anchor" href="#调整为中文" aria-hidden="true">#</a> 调整为中文</h3>
<p>我们进入<code v-pre>apache-jmeter-5.1\bin</code>找到文件<code v-pre>jmeter.properties</code>，如下图，找到<code v-pre>language</code>改为<code v-pre>zh_CN</code>，下次启动直接生效。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053666.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="压测" tabindex="-1"><a class="header-anchor" href="#压测" aria-hidden="true">#</a> 压测</h2>
<h3 id="创建线程组" tabindex="-1"><a class="header-anchor" href="#创建线程组" aria-hidden="true">#</a> 创建线程组</h3>
<p>要进行压测，我们首先需要创建一个线程组。如下图所示:</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053723.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>创建线程组之后，我们就可以设置线程组名称，压测参数。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053695.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="创建压测地址" tabindex="-1"><a class="header-anchor" href="#创建压测地址" aria-hidden="true">#</a> 创建压测地址</h3>
<p>如下图，右键创建<code v-pre>HTTP</code>请求。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053967.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>输入请求的协议类型，地址、端口号、映射路径、参数等。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053934.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="添加结果树和聚合报告" tabindex="-1"><a class="header-anchor" href="#添加结果树和聚合报告" aria-hidden="true">#</a> 添加结果树和聚合报告</h3>
<p>然后我们就可以进行压测了，但是笔者希望看到压测结果和聚合报告，这时候我们就可以右键刚刚创建的<code v-pre>HTTP</code>请求，添加结果树和聚合报告</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053070.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="点击启动进行压测" tabindex="-1"><a class="header-anchor" href="#点击启动进行压测" aria-hidden="true">#</a> 点击启动进行压测</h3>
<p>如下图，我们点击这个绿色按钮即可开始压测。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053616.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>点击结果树就能看到请求结果</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053556.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>点击聚合报告就能看到性能测试报告</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053589.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="基于jmeter测试post请求" tabindex="-1"><a class="header-anchor" href="#基于jmeter测试post请求" aria-hidden="true">#</a> 基于Jmeter测试POST请求</h2>
<p>了解了jmeter整体的操作之后，我们再来补充一下日常用的最多的json传参的post请求，由于jmeter界面发起POST稍微有些麻烦，所以笔者就在这里补充一下post请求的配置步骤：</p>
<ol>
<li>首先自然是填写<code v-pre>HTTP</code>请求的常规信息，如下图，设置请求方式、映射地址、请求参数、端口号等信息:</li>
</ol>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053231.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ol>
<li>重点来了，我们必须手动创建<code v-pre>HTTP</code>信息头管理器，配置文本类型告知<code v-pre>Jmeter</code>我们当前发起的请求是参数为<code v-pre>JSON</code>格式的<code v-pre>POST</code>请求，如下图所示点击对应选项创建<code v-pre>HTTP</code>信息头管理器。</li>
</ol>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053228.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>如下图，<code v-pre>key</code>和<code v-pre>value</code>分别配置<code v-pre>Content-Type</code>和<code v-pre>application/json;charset=UTF-8</code>，完成信息头的配置之后，我们就可以发起<code v-pre>POST</code>请求开始着手压测了。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202304021053290.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2>
<p><a href="https://blog.csdn.net/Jenny_He/article/details/88926605" target="_blank" rel="noopener noreferrer">win10 jmeter 5.1.1安装教程(opens new window)<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/wlwxww/article/details/87890886" target="_blank" rel="noopener noreferrer">jmeter 启动Error: Unable to access jarfile ApacheJMeter.jar错误(opens new window)<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/weixin_45412176/article/details/106790525" target="_blank" rel="noopener noreferrer">使用Jmeter查看聚合报告(opens new window)<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/lht3347/article/details/110186172" target="_blank" rel="noopener noreferrer">一文搞定Jmeter发送Get与Post请求(HTTP)<ExternalLinkIcon/></a></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312031906036.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


