<template><div><blockquote>
<p>大家好，我是Leo🫣🫣🫣，最近有朋友问我能不能出一期关于Linux虚拟机安装的教程，于是我打算中午抽时间来淦一下。</p>
<p>好了，话不多说让我们开始吧😎😎😎。</p>
</blockquote>
<h2 id="_1-vmware虚拟机的安装" tabindex="-1"><a class="header-anchor" href="#_1-vmware虚拟机的安装" aria-hidden="true">#</a> 1.VMware虚拟机的安装</h2>
<h3 id="_1-1-前言" tabindex="-1"><a class="header-anchor" href="#_1-1-前言" aria-hidden="true">#</a> 1.1 前言：</h3>
<p>虚拟机可以在我们自己的电脑上安装一个独立的系统，在测试软件或者想要使用其他系统的场景下还是挺方便的。</p>
<p><strong>注意：</strong> 笔者在写文章时所用版本为VMware16，大家可以自行选择。</p>
<h3 id="_1-2-下载" tabindex="-1"><a class="header-anchor" href="#_1-2-下载" aria-hidden="true">#</a> 1.2 下载</h3>
<p>进入官网的 <a href="https://www.vmware.com/cn/products/workstation-pro.html" target="_blank" rel="noopener noreferrer">VMware Workstation Pro 页面<ExternalLinkIcon/></a>，浏览功能特性、应用场景、系统要求等。下滑页面点击 <code v-pre>试用 Workstation 17Pro</code> 下方的下载链接，跳转至<a href="https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html" target="_blank" rel="noopener noreferrer">下载页面<ExternalLinkIcon/></a>。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171124394.png" alt="image-20231017112413188" tabindex="0" loading="lazy"><figcaption>image-20231017112413188</figcaption></figure>
<p>在下载页面中下滑，根据操作系统选择合适的产品，在这里以 Windows10 系统为例，选择 <code v-pre>Workstation 17 Pro for Windows</code>，开始下载安装文件。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171127287.png" alt="image-20231017112708205" tabindex="0" loading="lazy"><figcaption>image-20231017112708205</figcaption></figure>
<h3 id="_1-3-vmware安装步骤" tabindex="-1"><a class="header-anchor" href="#_1-3-vmware安装步骤" aria-hidden="true">#</a> 1.3 VMware安装步骤</h3>
<h4 id="_1-3-1-步骤1" tabindex="-1"><a class="header-anchor" href="#_1-3-1-步骤1" aria-hidden="true">#</a> 1.3.1 步骤1</h4>
<p>在我们下载好的文件夹中找到安装文件，双击，等待安装程序运行。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171132033.png" alt="image-20231017113215986" tabindex="0" loading="lazy"><figcaption>image-20231017113215986</figcaption></figure>
<h4 id="_1-3-2-步骤2" tabindex="-1"><a class="header-anchor" href="#_1-3-2-步骤2" aria-hidden="true">#</a> 1.3.2 步骤2</h4>
<p>点击<strong>下一步</strong>——&gt; 选中<strong>接受许可后</strong>——&gt;点击 <strong>下一步</strong>。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171137930.png" alt="image-20231017113735870" tabindex="0" loading="lazy"><figcaption>image-20231017113735870</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171137451.png" alt="image-20231017113727383" tabindex="0" loading="lazy"><figcaption>image-20231017113727383</figcaption></figure>
<h4 id="_1-3-3-步骤3" tabindex="-1"><a class="header-anchor" href="#_1-3-3-步骤3" aria-hidden="true">#</a> 1.3.3 步骤3</h4>
<p>更改安装路径：把<strong>√</strong>去掉——&gt;点击右上角的“更改”，修改安装路径，默认本地C盘（这个路径看自己情况决定，最好文件名是纯英文 ）——&gt;点击<strong>确定</strong>——&gt;点击“下一步”。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171133166.png" alt="image-20231017113348079" tabindex="0" loading="lazy"><figcaption>image-20231017113348079</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171133790.png" alt="image-20231017113359689" tabindex="0" loading="lazy"><figcaption>image-20231017113359689</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171134251.png" alt="image-20231017113410187" tabindex="0" loading="lazy"><figcaption>image-20231017113410187</figcaption></figure>
<h4 id="_1-3-4-步骤4" tabindex="-1"><a class="header-anchor" href="#_1-3-4-步骤4" aria-hidden="true">#</a> 1.3.4 步骤4</h4>
<p>默认，点击<strong>下一步</strong>——&gt;点击<strong>安装</strong>，开始安装。</p>
<p>建议把两个“√”都取消，启动自检要是开了的话，每次一打开VW就会内存爆满，客户计划就是垃圾根本没用</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171134527.png" alt="image-20231017113435418" tabindex="0" loading="lazy"><figcaption>image-20231017113435418</figcaption></figure>
<h4 id="_1-3-5-步骤5" tabindex="-1"><a class="header-anchor" href="#_1-3-5-步骤5" aria-hidden="true">#</a> 1.3.5 步骤5</h4>
<p>按照步骤，点击右下角许可证密钥，输入密钥——&gt;点击 <strong>输入</strong>——&gt;点击“完成”退出安装向导。</p>
<p>建议输入许可证密钥，可以永久使用VMware，否则就是试用版本一个月。</p>
<h3 id="_1-4-秘钥" tabindex="-1"><a class="header-anchor" href="#_1-4-秘钥" aria-hidden="true">#</a> 1.4 秘钥</h3>
<p><strong>永久密钥获取方式</strong>：网上搜索关键词VMware16密钥，因为我的版本是16，所以关键词版本是16 ，找到后随便复制一个顺眼的输入即可。这个是不是很赞，哈哈哈。</p>
<p>下面是网上搜集到的可用密钥，根据自己虚拟机版本选择密钥。<strong>拿去不谢，亲测有效~~</strong></p>
<p>VMware Workstation16 密钥：</p>
<ul>
<li>ZF3R0-FHED2-M80TY-8QYGC-NPKYF</li>
<li>YF390-0HF8P-M81RQ-2DXQE-M2UT6</li>
<li>ZF71R-DMX85-08DQY-8YMNC-PPHV8</li>
</ul>
<p>VMware Workstation Pro 15 激活许可证：</p>
<ul>
<li>UY758-0RXEQ-M81WP-8ZM7Z-Y3HDA</li>
<li>VF750-4MX5Q-488DQ-9WZE9-ZY2D6</li>
<li>UU54R-FVD91-488PP-7NNGC-ZFAX6</li>
<li>YC74H-FGF92-081VZ-R5QNG-P6RY4</li>
<li>YC34H-6WWDK-085MQ-JYPNX-NZRA2</li>
</ul>
<h2 id="_2-安装centos7的安装" tabindex="-1"><a class="header-anchor" href="#_2-安装centos7的安装" aria-hidden="true">#</a> 2.安装centos7的安装</h2>
<h3 id="_2-1-准备工作" tabindex="-1"><a class="header-anchor" href="#_2-1-准备工作" aria-hidden="true">#</a> 2.1 准备工作</h3>
<p>笔者是在阿里云镜像站进行下载的，大家可以参考。</p>
<p><a href="https://mirrors.aliyun.com/centos/7/isos/x86_64/" target="_blank" rel="noopener noreferrer">centos-7-isos-x86_64安装包下载_开源镜像站-阿里云 (aliyun.com)<ExternalLinkIcon/></a></p>
<p>1.软件：VMware Workstation 虚拟机</p>
<p>2.镜像文件：CentOS-7-x86 64-DVD-2009.iso</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171142912.png" alt="image-20231017114222836" tabindex="0" loading="lazy"><figcaption>image-20231017114222836</figcaption></figure>
<h3 id="_2-2-创建虚拟机" tabindex="-1"><a class="header-anchor" href="#_2-2-创建虚拟机" aria-hidden="true">#</a> 2.2 创建虚拟机</h3>
<h4 id="_2-2-1-步骤1" tabindex="-1"><a class="header-anchor" href="#_2-2-1-步骤1" aria-hidden="true">#</a> 2.2.1 步骤1</h4>
<p>打开VMware虚拟机，<strong>文件 → 新建虚拟机 → 自定义 → 下一步</strong>。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171144632.png" alt="image-20231017114420560" tabindex="0" loading="lazy"><figcaption>image-20231017114420560</figcaption></figure>
<h4 id="_2-2-2-步骤2" tabindex="-1"><a class="header-anchor" href="#_2-2-2-步骤2" aria-hidden="true">#</a> 2.2.2 步骤2</h4>
<p><strong>硬盘兼容性</strong>选择默认就可以，继续<strong>下一步</strong>。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171144072.png" alt="image-20231017114443012" tabindex="0" loading="lazy"><figcaption>image-20231017114443012</figcaption></figure>
<h4 id="_2-2-3-步骤3" tabindex="-1"><a class="header-anchor" href="#_2-2-3-步骤3" aria-hidden="true">#</a> 2.2.3 步骤3</h4>
<p>进入 <strong>客户机操作系统</strong> 选择 <strong>稍后安装操作系统</strong> （因为tfwf要在虚拟机安装完成之后，把不需要的硬件删除，所以选择稍后安装操作系统）。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171145936.png" alt="image-20231017114532888" tabindex="0" loading="lazy"><figcaption>image-20231017114532888</figcaption></figure>
<h4 id="_2-2-4-步骤4" tabindex="-1"><a class="header-anchor" href="#_2-2-4-步骤4" aria-hidden="true">#</a> 2.2.4 步骤4</h4>
<p>选择客户端操作系统：<strong>客户机操作系统 → Linux</strong>→ 版本选 <strong>CentOS 7 64位</strong> → <strong>下一步</strong>，注意：版本一定要对应镜像文件版本。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171145556.png" alt="image-20231017114559489" tabindex="0" loading="lazy"><figcaption>image-20231017114559489</figcaption></figure>
<h4 id="_2-2-5-步骤5" tabindex="-1"><a class="header-anchor" href="#_2-2-5-步骤5" aria-hidden="true">#</a> 2.2.5 步骤5</h4>
<p>命名虚拟机，位置（G:\Document\Leo-test），这样可以在 <strong>VM-Mmirrors</strong>，文件夹放多个操作系统。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171148839.png" alt="image-20231017114816774" tabindex="0" loading="lazy"><figcaption>image-20231017114816774</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171148679.png" alt="image-20231017114855634" tabindex="0" loading="lazy"><figcaption>image-20231017114855634</figcaption></figure>
<h4 id="_2-2-6-步骤6" tabindex="-1"><a class="header-anchor" href="#_2-2-6-步骤6" aria-hidden="true">#</a> 2.2.6 步骤6</h4>
<p><strong>处理器配置</strong>，可以根据您的系统选择。这里大家可以打开自己的任务管理器查看自己的电脑的配置。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171150135.png" alt="image-20231017115020067" tabindex="0" loading="lazy"><figcaption>image-20231017115020067</figcaption></figure>
<p>这里以笔者的电脑为例，8核16个处理器，这里虚拟机的<strong>处理器的数量和每个处理器的核数</strong> 相乘不可以超过自己电脑的逻辑处理器数。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171152886.png" alt="image-20231017115246821" tabindex="0" loading="lazy"><figcaption>image-20231017115246821</figcaption></figure>
<h4 id="_2-2-7-步骤7" tabindex="-1"><a class="header-anchor" href="#_2-2-7-步骤7" aria-hidden="true">#</a> 2.2.7 步骤7</h4>
<p>笔者这里设置为4096也就是4个G，大家测试学习的话，其实两个G就够了。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171154400.png" alt="image-20231017115429339" tabindex="0" loading="lazy"><figcaption>image-20231017115429339</figcaption></figure>
<h4 id="_2-2-8-步骤8" tabindex="-1"><a class="header-anchor" href="#_2-2-8-步骤8" aria-hidden="true">#</a> 2.2.8 步骤8</h4>
<p>网络类型 → NAT模式（可以使虚拟机与主机使用同一网络）</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171155537.png" alt="image-20231017115508467" tabindex="0" loading="lazy"><figcaption>image-20231017115508467</figcaption></figure>
<h4 id="_2-2-9-步骤9" tabindex="-1"><a class="header-anchor" href="#_2-2-9-步骤9" aria-hidden="true">#</a> 2.2.9 步骤9</h4>
<p>这里默认即可</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171155258.png" alt="image-20231017115545189" tabindex="0" loading="lazy"><figcaption>image-20231017115545189</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171155530.png" alt="image-20231017115555470" tabindex="0" loading="lazy"><figcaption>image-20231017115555470</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171156825.png" alt="image-20231017115601752" tabindex="0" loading="lazy"><figcaption>image-20231017115601752</figcaption></figure>
<h4 id="_2-2-10-步骤10" tabindex="-1"><a class="header-anchor" href="#_2-2-10-步骤10" aria-hidden="true">#</a> 2.2.10 步骤10</h4>
<p>磁盘容量一般20G就够了，因为笔者后面需要装的东西比较多，这里给了50G，大家适量给就可以了。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171157931.png" alt="image-20231017115704869" tabindex="0" loading="lazy"><figcaption>image-20231017115704869</figcaption></figure>
<h4 id="_2-2-11-步骤11" tabindex="-1"><a class="header-anchor" href="#_2-2-11-步骤11" aria-hidden="true">#</a> 2.2.11 步骤11</h4>
<p>指定磁盘文件（.vmdk）文件</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171158378.png" alt="image-20231017115833316" tabindex="0" loading="lazy"><figcaption>image-20231017115833316</figcaption></figure>
<h4 id="_2-2-12-步骤12" tabindex="-1"><a class="header-anchor" href="#_2-2-12-步骤12" aria-hidden="true">#</a> 2.2.12 步骤12</h4>
<p>这样虚拟机差不多就准备好了，接下来删除一些不需要的硬件。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171159785.png" alt="image-20231017115901732" tabindex="0" loading="lazy"><figcaption>image-20231017115901732</figcaption></figure>
<h4 id="_2-2-13-步骤13" tabindex="-1"><a class="header-anchor" href="#_2-2-13-步骤13" aria-hidden="true">#</a> 2.2.13 步骤13</h4>
<p>自定义硬件 → 移除 <strong>USB控制器、声卡、打印机</strong>（这样可以让虚拟器启动的快一点）。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171159987.png" alt="image-20231017115942923" tabindex="0" loading="lazy"><figcaption>image-20231017115942923</figcaption></figure>
<p>至此，虚拟机中的硬件已经搭建完成。</p>
<h3 id="_2-3-镜像安装" tabindex="-1"><a class="header-anchor" href="#_2-3-镜像安装" aria-hidden="true">#</a> 2.3 镜像安装</h3>
<h4 id="_2-3-1-步骤1" tabindex="-1"><a class="header-anchor" href="#_2-3-1-步骤1" aria-hidden="true">#</a> 2.3.1 步骤1</h4>
<p>点击 <strong>CD/DVD（IDE）</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171319899.png" alt="image-20231017131911763" tabindex="0" loading="lazy"><figcaption>image-20231017131911763</figcaption></figure>
<h4 id="_2-3-2-步骤2" tabindex="-1"><a class="header-anchor" href="#_2-3-2-步骤2" aria-hidden="true">#</a> 2.3.2 步骤2</h4>
<p>在连接处选择 **使用ISO映像文件 **选择CentOS 7 iso文件，确定。<br>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171320175.png" alt="image-20231017132011082" loading="lazy"></p>
<h4 id="_2-3-3-步骤3" tabindex="-1"><a class="header-anchor" href="#_2-3-3-步骤3" aria-hidden="true">#</a> 2.3.3 步骤3</h4>
<p><strong>开始安装虚拟机</strong>，进入CentOS安装界面。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171320891.png" alt="image-20231017132041814" tabindex="0" loading="lazy"><figcaption>image-20231017132041814</figcaption></figure>
<h4 id="_2-3-4-步骤4" tabindex="-1"><a class="header-anchor" href="#_2-3-4-步骤4" aria-hidden="true">#</a> 2.3.4 步骤4</h4>
<p>按方向键选择第一项 Install CentOS 7，按回车Enter键</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171321150.png" alt="image-20231017132101073" tabindex="0" loading="lazy"><figcaption>image-20231017132101073</figcaption></figure>
<h4 id="_2-3-5-步骤5" tabindex="-1"><a class="header-anchor" href="#_2-3-5-步骤5" aria-hidden="true">#</a> 2.3.5 步骤5</h4>
<p>CentOS欢迎界面，WELCOME TO CENTOS 7. 设置语言为中文简体。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171323916.png" alt="image-20231017132318819" tabindex="0" loading="lazy"><figcaption>image-20231017132318819</figcaption></figure>
<h4 id="_2-3-6-步骤6" tabindex="-1"><a class="header-anchor" href="#_2-3-6-步骤6" aria-hidden="true">#</a> 2.3.6 步骤6</h4>
<p>设置时区–DATE &amp; TIME</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171323872.png" alt="image-20231017132357777" tabindex="0" loading="lazy"><figcaption>image-20231017132357777</figcaption></figure>
<h4 id="_2-3-7-步骤7" tabindex="-1"><a class="header-anchor" href="#_2-3-7-步骤7" aria-hidden="true">#</a> 2.3.7 步骤7</h4>
<p><strong>软件选择最小安装即可</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171324997.png" alt="image-20231017132435912" tabindex="0" loading="lazy"><figcaption>image-20231017132435912</figcaption></figure>
<p>如果有需要也可以选择<strong>GNOME桌面</strong>，这里会有一个UI界面。</p>
<h4 id="_2-3-8-步骤8" tabindex="-1"><a class="header-anchor" href="#_2-3-8-步骤8" aria-hidden="true">#</a> 2.3.8 步骤8</h4>
<p>安装位置即进行系统分区</p>
<p>选中我们在创建虚拟机时候的50G虚拟硬盘，点击我要配置分区</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171326628.png" alt="image-20231017132629522" tabindex="0" loading="lazy"><figcaption>image-20231017132629522</figcaption></figure>
<p>以下是笔者分区的配置，可以参考一下。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171327432.png" alt="image-20231017132735338" tabindex="0" loading="lazy"><figcaption>image-20231017132735338</figcaption></figure>
<h4 id="_2-3-9-步骤9" tabindex="-1"><a class="header-anchor" href="#_2-3-9-步骤9" aria-hidden="true">#</a> 2.3.9 步骤9</h4>
<p>打开网络配置以及修改主机名。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171328669.png" alt="image-20231017132833592" tabindex="0" loading="lazy"><figcaption>image-20231017132833592</figcaption></figure>
<p><strong>到这里就可以点击开始安装了</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171329687.png" alt="image-20231017132925576" tabindex="0" loading="lazy"><figcaption>image-20231017132925576</figcaption></figure>
<h4 id="_2-3-10-步骤10" tabindex="-1"><a class="header-anchor" href="#_2-3-10-步骤10" aria-hidden="true">#</a> 2.3.10 步骤10</h4>
<p>配置系统用户</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171330176.png" alt="image-20231017133041076" tabindex="0" loading="lazy"><figcaption>image-20231017133041076</figcaption></figure>
<h4 id="_2-3-11-步骤11" tabindex="-1"><a class="header-anchor" href="#_2-3-11-步骤11" aria-hidden="true">#</a> 2.3.11 步骤11</h4>
<p>部署完成后，点击重启 重启虚拟机。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171338494.png" alt="image-20231017133810387" tabindex="0" loading="lazy"><figcaption>image-20231017133810387</figcaption></figure>
<h3 id="_2-4-使用centos遇到的问题" tabindex="-1"><a class="header-anchor" href="#_2-4-使用centos遇到的问题" aria-hidden="true">#</a> 2.4 使用CentOS遇到的问题</h3>
<h4 id="_1-ifconfig-命令不起效果-出现-command-not-found-的情况。" tabindex="-1"><a class="header-anchor" href="#_1-ifconfig-命令不起效果-出现-command-not-found-的情况。" aria-hidden="true">#</a> 1. ifconfig 命令不起效果，出现 <strong>command not found</strong> 的情况。</h4>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171339219.png" alt="image-20231017133911155" tabindex="0" loading="lazy"><figcaption>image-20231017133911155</figcaption></figure>
<p>原因：CentOS7 已经不适用<strong>ifconfig</strong>命令了，已经用<strong>ip addr</strong>命令代替。</p>
<p>解决办法：检入命令<strong>ip addr</strong>。</p>
<h4 id="_2-vim命令找不到" tabindex="-1"><a class="header-anchor" href="#_2-vim命令找不到" aria-hidden="true">#</a> 2. vim命令找不到</h4>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310171339433.png" alt="image-20231017133957372" tabindex="0" loading="lazy"><figcaption>image-20231017133957372</figcaption></figure>
<p>这个版本默认没有安装vim，只有自带的vi，需要vim 自行安装即可</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token function">vim</span> <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-总结" tabindex="-1"><a class="header-anchor" href="#_3-总结" aria-hidden="true">#</a> 3.总结</h2>
<p>以上便是本文的全部内容，本人才疏学浅，文章有什么错误的地方，欢迎大佬们批评指正！我是<strong>Leo</strong>，一个在互联网行业的小白，立志成为更好的自己。</p>
<p>如果你想了解更多关于<strong>Leo</strong>，可以关注公众号-程序员Leo，后面文章会首先同步至公众号。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312031906036.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


