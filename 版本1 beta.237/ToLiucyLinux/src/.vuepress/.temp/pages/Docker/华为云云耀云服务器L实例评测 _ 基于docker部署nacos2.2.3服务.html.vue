<template><div><p><a href="https://bbs.csdn.net/topics/617148096" target="_blank" rel="noopener noreferrer">#【有奖征文】华为云云服务器焕新上线，快来亲身感受评测吧！#<ExternalLinkIcon/></a></p>
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
<h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言" aria-hidden="true">#</a> 一、前言</h2>
<blockquote>
<p>本文主要讲解华为云云耀服务器的使用及在云服务器上部署docker，并基于docker部署minio2.2.3服务；<br>
三个内容点：</p>
<ul>
<li>1、讲解华为云云耀服务器的使用</li>
<li>2、部署docker服务</li>
<li>3、基于docker部署nacos2.2.3服务</li>
</ul>
</blockquote>
<p><strong>环境规划：</strong></p>
<table>
<thead>
<tr>
<th>服务器类别</th>
<th>应用镜像</th>
<th>内网IP地址</th>
<th>Docker版本</th>
<th>nacos版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>云耀云服务器L实例</td>
<td>Docker可视化-Portainer</td>
<td>172.16.11.10</td>
<td>24.0.4</td>
<td>2.2.3</td>
</tr>
</tbody>
</table>
<h2 id="二、华为云耀云服务器l实例" tabindex="-1"><a class="header-anchor" href="#二、华为云耀云服务器l实例" aria-hidden="true">#</a> 二、华为云耀云服务器L实例</h2>
<h3 id="_2-1-华为云耀云服务器l实例简介" tabindex="-1"><a class="header-anchor" href="#_2-1-华为云耀云服务器l实例简介" aria-hidden="true">#</a> 2.1 华为云耀云服务器L实例简介</h3>
<blockquote>
<p>  随着云计算时代的进一步深入，越来越多的中小企业企业与开发者需要一款简单易用、高能高效的云计算基础设施产品来支撑自身业务运营和创新开发。基于这种需求，华为云焕新推出华为云云服务器实例新品。<br><br>
  华为云云服务器具有智能不卡顿、价优随心用、上手更简单、管理特省心这四个优点，从而帮您快速上云！从8月底到10月中旬，华为云云服务器开启评测征文活动，邀请您分享对华为云云服务器的评测！<br><br>
   云耀云服务器L实例是新一代开箱即用、面向中小企业和开发者打造的全新轻量应用云服务器。云耀云服务器L实例提供丰富严选的应用镜像，实现应用一键部署，助力客户便捷高效的在云端构建电商网站、Web应用、小程序、学习环境、各类开发测试等。</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161439392.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_2-2-华为云耀云服务器l实例地址" tabindex="-1"><a class="header-anchor" href="#_2-2-华为云耀云服务器l实例地址" aria-hidden="true">#</a> 2.2 华为云耀云服务器L实例地址</h3>
<blockquote>
<p>华为云耀云服务器L实例购买地址：<a href="https://www.huaweicloud.com/product/hecs-light.html" target="_blank" rel="noopener noreferrer">华为云耀云服务器L实例地址<ExternalLinkIcon/></a><br>
控制台地址：<a href="https://console.huaweicloud.com/smb/?region=cn-north-4#/resource/list" target="_blank" rel="noopener noreferrer">https://console.huaweicloud.com/smb/?region=cn-north-4#/resource/list<ExternalLinkIcon/></a></p>
</blockquote>
<h3 id="_2-3-华为云耀云服务器l实例产品架构" tabindex="-1"><a class="header-anchor" href="#_2-3-华为云耀云服务器l实例产品架构" aria-hidden="true">#</a> 2.3 华为云耀云服务器L实例产品架构</h3>
<p>云耀云服务器L实例具备计算、存储、镜像安装、备份等能力：</p>
<ul>
<li>云耀云服务器L实例在不同区域中部署，一个区域发生故障后不会影响其他区域的云服务器。</li>
<li>可以通过虚拟私有云（VPC）建立专属的网络环境，设置子网、安全组，并通过弹性公网IP实现外网链接。</li>
<li>通过云硬盘（EVS）服务实现数据存储，并通过云硬盘备份服务实现云耀云服务器L实例数据的备份和恢复。</li>
<li>云服务器备份（CBR）提供对云耀云服务器L实例的备份保护服务。支持对云耀云服务器L实例中的所有云硬盘（系统盘和数据盘）进行备份，并利用备份数据恢复云耀云服务器L实例数据。</li>
<li>主机安全（HSS）提升云耀云服务器L实例整体安全性，通过入侵检测、漏洞管理、基线检查功能，可识别并管理云服务器中的信息资产，实时监测云服务器中的风险，降低服务器被入侵的风险。</li>
<li>云耀负载均衡（HCES ELB）是将访问流量根据分配策略分发到后端多台云耀云服务器L实例的流量分发控制服务。负载均衡可以通过流量分发扩展应用系统对外的服务能力，同时通过消除单点故障提升应用系统的可用性。</li>
</ul>
<h2 id="三、购买云耀云服务器l实例" tabindex="-1"><a class="header-anchor" href="#三、购买云耀云服务器l实例" aria-hidden="true">#</a> 三、购买云耀云服务器L实例</h2>
<h3 id="_3-1-登录华为云官网购买" tabindex="-1"><a class="header-anchor" href="#_3-1-登录华为云官网购买" aria-hidden="true">#</a> 3.1 登录华为云官网购买</h3>
<blockquote>
<p>登录个人华为云账号，在搜索栏输入云耀云服务器L实例，按回车键确认，进入云耀云服务器L实例详情页。<br>
或直接点击：<a href="https://www.huaweicloud.com/product/hecs-light.html" target="_blank" rel="noopener noreferrer">华为云耀云服务器L实例地址<ExternalLinkIcon/></a></p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161439812.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>区域：华北—北京四；<br>
应用镜像：Docker可视化-Portainer；<br>
实例规格：2核2G/系统盘40G/峰值带宽 3Mbps/流量包400G；<br>
实例名称：自定义即可，这里编辑为HECS-L-nacos；<br>
购买时长：1个月；</p>
</blockquote>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161439934.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161439720.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161439928.png" alt="" loading="lazy"></p>
<ul>
<li>检查配置 --&gt; 确认购买</li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161439308.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>购买成功；</li>
</ul>
<h3 id="_3-2-重置密码" tabindex="-1"><a class="header-anchor" href="#_3-2-重置密码" aria-hidden="true">#</a> 3.2 重置密码</h3>
<ul>
<li>
<p>到控制台查看我的资源<br>
<a href="https://console.huaweicloud.com/smb/?region=cn-north-4#/resource/list" target="_blank" rel="noopener noreferrer">https://console.huaweicloud.com/smb/?region=cn-north-4#/resource/list<ExternalLinkIcon/></a></p>
</li>
<li>
<p>点击远程登录云耀云服务器L实例</p>
</li>
<li>
<p>点击右侧的重置密码选项，需要进行身份验证，选择手机验证后，即可重置密码成功</p>
</li>
<li>
<p>重置完密码需要重启服务器；重启即可；</p>
</li>
</ul>
<h3 id="_3-3-使用xshell链接服务器" tabindex="-1"><a class="header-anchor" href="#_3-3-使用xshell链接服务器" aria-hidden="true">#</a> 3.3 使用xshell链接服务器</h3>
<blockquote>
<p>使用ip、密码链接即可</p>
</blockquote>
<h2 id="四、检查docker环境及服务状态" tabindex="-1"><a class="header-anchor" href="#四、检查docker环境及服务状态" aria-hidden="true">#</a> 四、检查docker环境及服务状态</h2>
<blockquote>
<p>因为购买的就是 Docker可视化-Portainer	 的，所以不用安装docker</p>
</blockquote>
<h3 id="_4-1-检查docker版本" tabindex="-1"><a class="header-anchor" href="#_4-1-检查docker版本" aria-hidden="true">#</a> 4.1 检查Docker版本</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker -v</span>
Docker version <span class="token number">24.0</span>.4, build 3713ee1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-检查docker服务状态" tabindex="-1"><a class="header-anchor" href="#_4-2-检查docker服务状态" aria-hidden="true">#</a> 4.2 检查docker服务状态</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># systemctl status docker</span>
● docker.service - Docker Application Container Engine
     Loaded: loaded <span class="token punctuation">(</span>/lib/systemd/system/docker.service<span class="token punctuation">;</span> enabled<span class="token punctuation">;</span> vendor preset: enabled<span class="token punctuation">)</span>
     Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Tue <span class="token number">2023</span>-09-15 <span class="token number">16</span>:25:24 CST<span class="token punctuation">;</span> 16h ago
TriggeredBy: ● docker.socket
       Docs: https://docs.docker.com
   Main PID: <span class="token number">2496</span> <span class="token punctuation">(</span>dockerd<span class="token punctuation">)</span>
      Tasks: <span class="token number">58</span>
     Memory: <span class="token number">83</span>.3M
        CPU: 1min 956ms
     CGroup: /system.slice/docker.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、部署nacos2-2-3" tabindex="-1"><a class="header-anchor" href="#五、部署nacos2-2-3" aria-hidden="true">#</a> 五、部署nacos2.2.3</h2>
<h3 id="_5-1-下载-nacos2-2-3-镜像" tabindex="-1"><a class="header-anchor" href="#_5-1-下载-nacos2-2-3-镜像" aria-hidden="true">#</a> 5.1 下载 nacos2.2.3 镜像</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker pull liuchenyang/redhat-nacos:latest</span>
latest: Pulling from liuchenyang/redhat-nacos
872582724f33: Already exists 
b13ffc206103: Already exists 
13b296d5bcbd: Already exists 
5fcf8070f29a: Pull complete 
c8194a495b92: Pull complete 
Digest: sha256:a6d7575e810f080ae5b1e7535a0778aa581e9e43020f170a233fb78a42c91f90
Status: Downloaded newer image <span class="token keyword">for</span> liuchenyang/redhat-nacos:latest
docker.io/liuchenyang/redhat-nacos:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161439483.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_5-2-查看镜像" tabindex="-1"><a class="header-anchor" href="#_5-2-查看镜像" aria-hidden="true">#</a> 5.2 查看镜像</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> images <span class="token operator">|</span> <span class="token function">grep</span> redhat-nacos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161439381.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以自己将镜像重新命名，或者直接使用此名字都可以；<br>
重新命名命令为：<code v-pre>docker tag liuchenyang/redhat-nacos:latest nacos:latest</code></p>
<h3 id="_5-3-创建nacos容器" tabindex="-1"><a class="header-anchor" href="#_5-3-创建nacos容器" aria-hidden="true">#</a> 5.3 创建nacos容器</h3>
<p>nacos包下载地址：<a href="https://github.com/alibaba/nacos/releases/download/2.2.3/nacos-server-2.2.3.tar.gz" target="_blank" rel="noopener noreferrer">https://github.com/alibaba/nacos/releases/download/2.2.3/nacos-server-2.2.3.tar.gz<ExternalLinkIcon/></a></p>
<p>可以解压此包，拿出nacos目录，来作为配置映射目录；</p>
<p>要注意的是，如果需要做nacos配置映射，我们需要在<code v-pre>nacos/bin/startup.sh</code>里追加一行 <code v-pre>tail -f ${BASE_DIR}/logs/start.out</code>，不追加会导致容器启动不了。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token parameter variable">--name</span> nacos <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--privileged</span> <span class="token parameter variable">-p</span> <span class="token number">8848</span>:8848 <span class="token parameter variable">-v</span> /usr/local/nacos/logs/:/nacos/logs/ <span class="token parameter variable">-v</span> /etc/localtime/:/etc/localtime/ liuchenyang/redhat-nacos:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建完容器会自动启动nacos服务，日志可查看映射出来的/usr/local/start.out</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161439620.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>启动完成，日志没问题，查看端口是否已经被占用；默认端口为：8848</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">netstat</span> <span class="token parameter variable">-lnt</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">8848</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161439366.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这里可以看到，端口已经启动了；但是因为是云服务器，还需要在云服务器上开放 8848 端口；<br>
开放完端口之后，页面访问。</p>
<h3 id="_5-4-页面访问nacos" tabindex="-1"><a class="header-anchor" href="#_5-4-页面访问nacos" aria-hidden="true">#</a> 5.4 页面访问nacos</h3>
<blockquote>
<p>172.16.11.10:8848/nacos</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161439228.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412161439458.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>因为此部署没有设置数据库，所以会自动跳进来；</p>
</blockquote>
<h2 id="六、完成部署" tabindex="-1"><a class="header-anchor" href="#六、完成部署" aria-hidden="true">#</a> 六、完成部署</h2>
</div></template>


