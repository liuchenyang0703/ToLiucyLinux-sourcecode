<template><div><blockquote>
<p>🍁<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！</p>
</blockquote>
<p>@[toc]</p>
<h1 id="下载vmware" tabindex="-1"><a class="header-anchor" href="#下载vmware" aria-hidden="true">#</a> 下载VMware</h1>
<p>可以访问网盘链接下载有多个版本供你选择：</p>
<blockquote>
<p>链接：<a href="https://pan.baidu.com/s/1z_wrizrMXS5OeVUo2PBdFQ" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1z_wrizrMXS5OeVUo2PBdFQ<ExternalLinkIcon/></a><br>
提取码：mv0u</p>
</blockquote>
<p>下载完成之后，放到本地的任意盘，自己定，找空间大的就行，因为后续创建都会站很大的空间。</p>
<h1 id="安装vmware" tabindex="-1"><a class="header-anchor" href="#安装vmware" aria-hidden="true">#</a> 安装VMware</h1>
<ul>
<li>放到指定目录之后，双击<code v-pre>VMware Workstation v16.1.1.exe</code>即可；</li>
</ul>
<p><img src="https://img-blog.csdnimg.cn/178cda4aae8c40e98237db4a15bce034.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/9c0e74bc5dff46a4a0a5dbc8bef0402d.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/42c9423cdd594c87ae0415b5daa8e701.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/7ee077a7fcc84c4aa840001aa610445f.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/004a7105eced4853ae64dd7637955d5f.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/abe36c83af78448995a15a0ec425177e.png" alt="" loading="lazy"></p>
<p>点击安装即可；</p>
<figure><img src="https://img-blog.csdnimg.cn/9e33e667782b447fbbdbfc68547ec713.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>等待安装完成即可；</p>
<figure><img src="https://img-blog.csdnimg.cn/733eb166ea7c4e14b6baf49e2d29c43b.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>安装完成之后，双击点开<code v-pre>VMware Workstation Pro</code></p>
<p>购买成功之后会是这个页面；</p>
<figure><img src="https://img-blog.csdnimg.cn/1184e141f5444e1b8e1d9fd2fd0f4d4b.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>点击完成就可以使用了（永久版）。</p>
<h1 id="创建虚拟机" tabindex="-1"><a class="header-anchor" href="#创建虚拟机" aria-hidden="true">#</a> 创建虚拟机</h1>
<ul>
<li>安装完成之后可以看到，页面正中心就有一个<code v-pre>创建新的虚拟机</code>这个字，可以直接点击他来创建，或者是：点击左上角的<code v-pre>文件--&gt;新建虚拟机</code>创建也可以。</li>
</ul>
<p>创建示例1：</p>
<figure><img src="https://img-blog.csdnimg.cn/238e824ae29645d1833f13a16f6e192d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>创建示例2：</p>
<figure><img src="https://img-blog.csdnimg.cn/c0a518506ad44f99916786171900c5bb.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<hr>
<p>点击创建，选择推荐即可；</p>
<p><img src="https://img-blog.csdnimg.cn/af3f4f0b29eb472ea147e896a0e09604.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/a3cff1b8542e4b8abdfb7dc4aa08460a.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/62ce12d9e7124f5e8d1efbcd62d22295.png" alt="" loading="lazy"></p>
<p>这里选择：客户机操作系统为：Linux；版本为centos7 64位即可</p>
<figure><img src="https://img-blog.csdnimg.cn/e76ba01373214c3b8386b94b266d6211.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这里：虚拟机名称可以自己自定义；位置的话也可以自定义，默认是在c盘，大家注意哈！</p>
<figure><img src="https://img-blog.csdnimg.cn/8138b014dcff4dcc8d514f9c71ece183.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这里选择：自定义磁盘大小，可以自己根据自己的磁盘空间来写磁盘大小；</p>
<figure><img src="https://img-blog.csdnimg.cn/9466aa29296542a59f01dfe1b679ac97.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<hr>
<p>这里点击自定义硬件，在这里添加ios映像文件和设置内存、磁盘空间、网络等等。</p>
<figure><img src="https://img-blog.csdnimg.cn/a0e6f14a800940c8ab7e6f18a74d5144.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>设置内存，这里可根据自己的电脑配置来自己选，同时也是根据服务需要的内存大小来选；</li>
</ul>
<figure><img src="https://img-blog.csdnimg.cn/7f93cdd722c249799644a96b49df797b.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>设置处理器，也是根据自己的电脑配置和服务所需的核数来选；</li>
</ul>
<figure><img src="https://img-blog.csdnimg.cn/9a8d861cc154435ba9fdf5276162ae1f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>设置CD也就是ISO映像，这里点击使用<code v-pre>ISO映像文件</code>选择<code v-pre>CentOS-7.7-x86_64-DVD-1908.iso</code>这个iso映像，这个映像网盘里有，可自行下载；</li>
</ul>
<figure><img src="https://img-blog.csdnimg.cn/05762b17f6b341eca809e836f3404178.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>设置网络适配器，这里可以选择：<code v-pre>桥接模式</code>，也可以选择<code v-pre>NAT模式</code>，不懂什么意思可以百度查一下，我使用的是桥接模式，可以直接连接物理网络，方便配置ip；<br>
<img src="https://img-blog.csdnimg.cn/1422c703b10040deacac8b49485471ee.png" alt="" loading="lazy"><br>
这几个都选择完成之后关闭即可；</li>
</ul>
<figure><img src="https://img-blog.csdnimg.cn/6a20baf822e242438e75394d0c3fb20c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<hr>
<p>点击完成准备创建；</p>
<figure><img src="https://img-blog.csdnimg.cn/f177bf58ec774b7eae9344ae4cbf69d0.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="安装虚拟机" tabindex="-1"><a class="header-anchor" href="#安装虚拟机" aria-hidden="true">#</a> 安装虚拟机</h1>
<p>继续上面的步骤，创建完虚拟机之后，在这边点击开启虚拟机；</p>
<blockquote>
<p>编辑虚拟机设置，这个是可以修改配置的，前提是要关闭虚拟机才可以配置；</p>
</blockquote>
<figure><img src="https://img-blog.csdnimg.cn/e708d0dede614797bdfd3fecb0662a61.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>如果开启虚拟机遇到了这个报错，可参考此文：<a href="https://liucy.blog.csdn.net/article/details/130219490" target="_blank" rel="noopener noreferrer">开启虚拟机出现报错：“此主机支持 Intel VT-x，但 Intel VT-x 处于禁用状态”<ExternalLinkIcon/></a> 来解决；</p>
<figure><img src="https://img-blog.csdnimg.cn/23198291ea0741a7953f794b513b440a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>开启虚拟机，选择第一个：</p>
<figure><img src="https://img-blog.csdnimg.cn/d762f11313ca489f965e229d779ad506.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>让他执行，直到出现这个页面，然后选择<code v-pre>中文--&gt;简体中文--&gt;继续</code></p>
<p><img src="https://img-blog.csdnimg.cn/cc6cc5c87e7a4b2da57eb3703423286e.png" alt="" loading="lazy"><br>
选择系统--&gt;安装位置：</p>
<figure><img src="https://img-blog.csdnimg.cn/e0d04a9a94904e239f6f0b7671800fc5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>点进去，点击20G，再点击完成；</p>
<figure><img src="https://img-blog.csdnimg.cn/bcb96e0963a64c5db7ddb8a9257da8ab.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>点击开始安装：</p>
<figure><img src="https://img-blog.csdnimg.cn/9e38df6d4c474874a391a10ec8431442.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>点击设置密码，密码如果设置的是123123或者是123456的话，需要点两下完成就可以；</p>
<figure><img src="https://img-blog.csdnimg.cn/6c26a093bb41425dbc3dd776587af7be.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>设置完root密码之后，等待安装完成，大概十几到二十几分钟吧，完成之后有下角会出现一个重启，点击重新即可；</p>
<figure><img src="https://img-blog.csdnimg.cn/07ac97d343b44d3e85d2f6f753da9440.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>重启完之后，输入账号：root；密码：刚刚设置的密码，进入就可以操作了；</p>
<p>这个是最小安装的方式，没有桌面，如果需要桌面化的，可以执行安装<code v-pre>yum groupinstall -y 'GNOME Desktop'</code>，等待安装完成之后init 5，切换桌面模式即可；</p>
<h1 id="配置基础环境-yum源、ip等等" tabindex="-1"><a class="header-anchor" href="#配置基础环境-yum源、ip等等" aria-hidden="true">#</a> 配置基础环境（yum源、ip等等）</h1>
<blockquote>
<p>配置基础环境，可参考此文：<a href="https://liucy.blog.csdn.net/article/details/115432904" target="_blank" rel="noopener noreferrer">使用Vmware创建Centos7虚拟机（安装和配置网络环境、xshell连接、防火墙、yum仓库、磁盘挂载、重启命令）<ExternalLinkIcon/></a></p>
</blockquote>
</div></template>


