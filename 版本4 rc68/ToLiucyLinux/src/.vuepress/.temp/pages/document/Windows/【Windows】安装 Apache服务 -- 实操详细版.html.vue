<template><div><blockquote>
<blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
</blockquote>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者</a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主</a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主</a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区</a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言"><span>一、前言</span></a></h2>
<blockquote>
<p>因为最近项目需求，需要在windows上部署一个apache服务，所以，首先，我们需要现在windows上安装apache；接下来，给大家讲解一下windows的安装步骤；</p>
</blockquote>
<h2 id="二、-官网下载安装包" tabindex="-1"><a class="header-anchor" href="#二、-官网下载安装包"><span>二、 官网下载安装包</span></a></h2>
<blockquote>
<p>Apache官方下载地址：<a href="https://httpd.apache.org/" target="_blank" rel="noopener noreferrer">https://httpd.apache.org/</a></p>
</blockquote>
<ul>
<li>点击 <code v-pre>Download</code></li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/708d4529cb9249f9bd191b2e5e828a86.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>可以根据自己的需求安装需要的版本：点击 <code v-pre>Files for Microsoft Windows</code> 下载windows版本</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/9916d8caf66042f4a95f989c22bdd3cb.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>点击 <code v-pre>ApacheHaus</code></li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/b3485ac1f6724edfbbcdef01f3977aed.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>点击 <code v-pre>Download Locations</code> 下的小房子下载</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/7149f9b2390048a5be7d3f3debeb8c40.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="三、安装-apache-并-配置-apache-配置文件" tabindex="-1"><a class="header-anchor" href="#三、安装-apache-并-配置-apache-配置文件"><span>三、安装 Apache 并 配置 Apache 配置文件</span></a></h2>
<h3 id="_3-1-解压-压缩包" tabindex="-1"><a class="header-anchor" href="#_3-1-解压-压缩包"><span>3.1 解压 压缩包</span></a></h3>
<p>下载完成后，放在自己需要的位置，解压压缩包；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/4c1a429e557f480f9dee36002cc1d9d1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_3-2-配置-配置文件" tabindex="-1"><a class="header-anchor" href="#_3-2-配置-配置文件"><span>3.2 配置 配置文件</span></a></h3>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/5fd3ca1ff7b64eedad458c90f76cdef4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>找到以 <code v-pre>Define SRVROOT</code> 开头的 配置Apache安装路径；<br>
修改Apache实际绝对安装目录，最后结尾处不能带&quot;/&quot;或&quot;&quot;，这里${SRVROOT}指定义的SRVROOT路径变量</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/158b7c6c2369486885b5edaf52ab5df6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>配置完成...</p>
<h2 id="四、启动-apache-项目" tabindex="-1"><a class="header-anchor" href="#四、启动-apache-项目"><span>四、启动 Apache 项目</span></a></h2>
<h3 id="_4-1-检测-apache-配置文件是否合法" tabindex="-1"><a class="header-anchor" href="#_4-1-检测-apache-配置文件是否合法"><span>4.1 检测 Apache 配置文件是否合法</span></a></h3>
<ul>
<li><code v-pre>crtl + s</code> 搜索 <code v-pre>命令提示符</code>  以管理员方式打开；</li>
<li>如果在d盘，先输入<code v-pre>d:</code> ，然后在使用cd 切换到apache的bin目录下，我这里是c盘，直接cd就可以；</li>
<li>进入到bin目录下，使用<code v-pre>httpd -t</code> ，检查配置文件是否合法；</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/61b8de251c02414e91fbce55cc54bc7e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>没有问题；</p>
<h3 id="_4-2-安装-apache-主服务" tabindex="-1"><a class="header-anchor" href="#_4-2-安装-apache-主服务"><span>4.2 安装 Apache 主服务</span></a></h3>
<p>同样的： <code v-pre>crtl + s</code> 搜索 <code v-pre>命令提示符</code>  以管理员方式打开；切换到<code v-pre>bin</code> 目录，执行<code v-pre>httpd -k install -n 自定义的访问名</code></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">C:\Users\user\Desktop\httpd-2.4.55-o111s-x64-vs17\Apache24\bin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">httpd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -k</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apache</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>该命令的意思是，安装Windows可托管的Apache服务，其中 “-n” 后面参数是自定义Windows服务名称，之后可使用Windows管理服务的命令来管理apache服务，如 <code v-pre>“net start/stop apache”</code>（启动 / 停止服务）。<br><br>
服务安装完毕后，会自动测试，若有问题，窗口会提示错误，此时请根据错误自行排查。<br>
正常安装完毕如下图所示：</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/f4f8ae211178441d90979e1917beaf9e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>安装成功；</p>
<h3 id="_4-3-启动-apache-服务" tabindex="-1"><a class="header-anchor" href="#_4-3-启动-apache-服务"><span>4.3 启动 Apache 服务</span></a></h3>
<h4 id="_4-4-1-命令行启动" tabindex="-1"><a class="header-anchor" href="#_4-4-1-命令行启动"><span>4.4.1 命令行启动</span></a></h4>
<blockquote>
<p>需要使用管理员权限</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">net</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apache</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 或者使用</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">httpd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -k</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apache</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-4-2-可视化启动" tabindex="-1"><a class="header-anchor" href="#_4-4-2-可视化启动"><span>4.4.2 可视化启动</span></a></h4>
<blockquote>
<p>打开安装apache的 <code v-pre>bin</code> 目录，下面有一个 <code v-pre>ApacheMonitor.exe</code> 文件，运行即可；</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/9ebd6fb45f5f439394533182207b00e3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>双击如果没反应可以看一下小窗口，就是qq、微信、那些最小化存放的地址，有一个这个标志；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/7199e05f7ac4479ca3daf2f19f312149.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>右击 <code v-pre>Open Apache Monitor</code> 打开面板；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/0bd6d756986a4270818dc73cf99dbf21.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>在这里面可以直接启动、停止、重启操作；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/23b25f81cad74348ae8169e1db131fdc.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="五、页面访问" tabindex="-1"><a class="header-anchor" href="#五、页面访问"><span>五、页面访问</span></a></h2>
<p>默认端口为80，如需要其他端口可到<code v-pre>httpd.conf</code> 配置中自行修改<br>
<code v-pre>http://localhost:80</code></p>
<p>看到如下页面，则代表安装成功。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/facc7ab23d0843afbf260c7b07fa9a10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="六、命令行其他命令操作" tabindex="-1"><a class="header-anchor" href="#六、命令行其他命令操作"><span>六、命令行其他命令操作</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 安装服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">httpd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -k</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apache</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 启动服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">net</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apache</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">httpd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -k</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apache</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 关闭服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">net</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> stop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apache</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">httpd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -k</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> stop</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apache</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 重启服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">httpd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -k</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apache</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 卸载服务</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">## 卸载服务时先停止</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">httpd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -k</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> stop</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apache</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">## 再卸载服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">httpd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -k</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> uninstall</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apache</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>更多windows相关知识，可订阅：<a href="https://blog.csdn.net/liu_chen_yang/category_12481542.html?spm=1001.2014.3001.5482" target="_blank" rel="noopener noreferrer">《Windows相关技术》</a>专栏。</p>
</blockquote>
</div></template>


