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
<figure><img src="https://img-blog.csdnimg.cn/9ecab3ffbedb43369695761e4656bd68.png#pic_center" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="_1、先查看是否有服务正在运行-将他们都停掉" tabindex="-1"><a class="header-anchor" href="#_1、先查看是否有服务正在运行-将他们都停掉" aria-hidden="true">#</a> 1、先查看是否有服务正在运行，将他们都停掉</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查看是否有服务正在运行；</span>
<span class="token function">virsh</span> list <span class="token parameter variable">--all</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/894ac2cd8baf4c4385d4abd99f7ae817.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>我们可以看到是有的，需要将服务关闭：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">virsh</span> <span class="token function">shutdown</span> centos7.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/ff2cf33b685b45fa83cefdb71ec014a2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>然后在删除，不想删除也可以，依据自己；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">virsh</span> undefine centos7.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除完成之后就开始卸载服务；</p>
<h1 id="_2、启动-network-服务-重要" tabindex="-1"><a class="header-anchor" href="#_2、启动-network-服务-重要" aria-hidden="true">#</a> 2、启动 network 服务（<font color=red>重要</font>）</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#设置开机自启</span>
<span class="token function">chkconfig</span> NetworkManager on
<span class="token comment">#启动NetworkManager服务</span>
<span class="token function">service</span> NetworkManager restart
<span class="token comment">#查看启动状态</span>
<span class="token function">service</span> NetworkManager status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/23c49f06e8c54f3c8553263170a19dfa.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h1 id="_3、卸载-virbr0-网卡及解除-br0-网络桥接" tabindex="-1"><a class="header-anchor" href="#_3、卸载-virbr0-网卡及解除-br0-网络桥接" aria-hidden="true">#</a> 3、卸载 virbr0 网卡及解除 br0 网络桥接</h1>
<h2 id="卸载-virbr0-网卡" tabindex="-1"><a class="header-anchor" href="#卸载-virbr0-网卡" aria-hidden="true">#</a> 卸载 virbr0 网卡</h2>
<ul>
<li>先查看网卡</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#先查看网卡</span>
<span class="token function">ifconfig</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/ba0dc40d8a994b00a3f22d1e81f29efb.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>显示桥接（bridge）列表</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>brctl show
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/878248b1b28346c8b7ccd8eeeee10295.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>列出当前连接的虚拟网络</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">virsh</span> net-list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/0a50507325f54a5a9947fd96a5b39db2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>停止/删除默认的虚拟网络</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">virsh</span> net-destroy default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/4caac222bdb944128c086e34ec729a45.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>取消定义默认的虚拟网络</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">virsh</span> net-undefine default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/cbc5d3c07da9460b9a27c3513c00167c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>重新启动libvirtd守护进程</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">service</span> libvirtd restart 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/5d26fd9bf56f4671a8f137e4ef65d35c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>再次列出当前连接的虚拟网络</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">virsh</span> net-list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这时可以看到已经没有了；</p>
<figure><img src="https://img-blog.csdnimg.cn/7267827eb508407699b1a099bf33fd29.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>再次查看桥接（bridge）列表</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>brctl show
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>发现<code v-pre>virtbr0</code>已经没有了；</p>
<figure><img src="https://img-blog.csdnimg.cn/c4ef9ebef89748e3834e185bd635c726.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="解除并删除br0桥接网卡" tabindex="-1"><a class="header-anchor" href="#解除并删除br0桥接网卡" aria-hidden="true">#</a> 解除并删除br0桥接网卡</h2>
<p>解除网卡会导致远程连接连接不上，需要使用<code v-pre>显示屏直连服务器</code>或者在<code v-pre>vmwar虚拟机</code>中操作，在里面使用命令行模式操作，init 3转为完整的字符界面多用户操作；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#解除绑定ens33网卡</span>
brctl delif br0 ens33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/08fb3dd8ffab48d7b3cfc5e04fd65de7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>执行这一步就会断连，所以需要使用<code v-pre>显示屏直连服务器</code>或者在<code v-pre>vmwar虚拟机</code>中操作接下来的步骤；<br>
我的是用的虚拟机测试，所以，在<code v-pre>vmware</code>中执行接下来的命令；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#关闭br0,不关闭删不掉</span>
<span class="token function">ifconfig</span> br0 down
<span class="token comment">#删除br0</span>
brctl delbr br0

<span class="token comment">#删除完在查看一下桥接（bridge）列表</span>
brctl show
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/afd29770eb8f40bd9667feed57b532bd.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>会发现桥接（bridge）列表中的 br0 桥接 ens33 已经没了，然后ip a查看ip时，ens33没有设置IP，所以，需要设置一下ip，然后重启服务，就可以连接上了；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#进入网络配置目录</span>
<span class="token builtin class-name">cd</span> /etc/sysconfig/network-scripts/
<span class="token comment">#删除br0的配置</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> ifcfg-br0
<span class="token comment">#将最开始部署时备份的覆盖一下ens33网卡（要用到的网卡），如果最开始没有备份的话那么就重新配置一下，还和原来的一样，记住ip就可以</span>
<span class="token function">cp</span> <span class="token parameter variable">-ar</span> ens33-bak ifcfg-ens33
<span class="token comment">#选择覆盖即可</span>

<span class="token comment">#覆盖完可以校验查看一下</span>
<span class="token function">cat</span> /etc/ifcfg-ens33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/3bc0af7449e64de08d27b3ae569498c9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>确认完成，就需要重启一下网络服务，使其生效</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#确认完成，就需要重启一下网络服务，使其生效</span>
/etc/init.d/network restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/a9210ec360e14ae9a4d9f4375704741d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>查看IP</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ip</span> a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/77f996d7fd3c405e9f05cc6c263d4e34.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这样就修改完成了，我们就可以继续远程连接服务器了；</p>
<figure><img src="https://img-blog.csdnimg.cn/b2195c00a25f4a7aa0e3aabe93009ab3.png" alt="" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="_4、卸载服务" tabindex="-1"><a class="header-anchor" href="#_4、卸载服务" aria-hidden="true">#</a> 4、卸载服务</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#卸载刚刚安装时的所有服务及相关依赖包</span>
yum <span class="token parameter variable">-y</span> remove qemu-kvm<span class="token punctuation">\</span>* python-virtinst<span class="token punctuation">\</span>* libvirt<span class="token punctuation">\</span>* libvirt-python<span class="token punctuation">\</span>* virt-manager<span class="token punctuation">\</span>* libguestfs-tools<span class="token punctuation">\</span>* bridge-utils<span class="token punctuation">\</span>* virt-install<span class="token punctuation">\</span>*

<span class="token comment">#卸载完成之后，如果不确定可以在使用rpm查看一下是否还有这些包。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5、删除相关目录" tabindex="-1"><a class="header-anchor" href="#_5、删除相关目录" aria-hidden="true">#</a> 5、删除相关目录</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#删除libvirt相关的目录，安装libvirt这个命令时就会产生，这几个存放位置是系统默认的，如果怕卸载不干净，可以使用find 查找</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/libvirt /etc/libvirt /var/log/swtpm/libvirt /var/cache/libvirt /usr/lib64/libvirt 

<span class="token comment">#kvm的iso镜像和存储路径（自定义的）</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /home/kvm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就卸载完成了！！！</p>
<blockquote>
<p>  <font color=red>提示：</font>卸载完成之后，有的细心的人为了彻底让他卸载干净，也会去查询kvm等相关的目录，如果是查询kvm相关的目录的话，可能会有几个，因为你开了虚拟化，这是系统生产的，我也没有删除，我用的是虚拟机，只要把虚拟化关了，那几个目录就没了；至于删了是什么后果，可能会导致服务器远程连接不上...等等...未知问题，所以，kvm虚拟化相关的目录就不用删了，避免出现不必要的麻烦。</p>
</blockquote>
<h1 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章" aria-hidden="true">#</a> 相关文章</h1>
<table>
<thead>
<tr>
<th>文章标题</th>
<th>文章地址</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/126303077" target="_blank" rel="noopener noreferrer">【Linux】之Centos7安装KVM虚拟化及相关命令<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/126303077" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/126303077<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/132076894" target="_blank" rel="noopener noreferrer">【Linux】之Centos7卸载KVM虚拟化服务<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/132076894" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/132076894<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
</div></template>


