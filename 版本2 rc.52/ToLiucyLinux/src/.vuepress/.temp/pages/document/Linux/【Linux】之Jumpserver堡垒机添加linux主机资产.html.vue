<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181632531.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="资产要求" tabindex="-1"><a class="header-anchor" href="#资产要求"><span>资产要求</span></a></h2>
<blockquote>
<p>❗ ssh连接资产必须要部署 openssh-server</p>
</blockquote>
<blockquote>
<p>❗ vnc连接资产必须部署 vncserver</p>
</blockquote>
<blockquote>
<p>❗ 防火墙 ssh/vnc 端口必须开放给 JumpServer 所有服务器访问</p>
</blockquote>
<blockquote>
<p>❗ 请检查 /etc/hosts.allow /etc/hosts.deny /etc/ssh/sshd_config 是否有登录限制</p>
</blockquote>
<blockquote>
<p>❗ 资产连接超时 timeout 请检查 /etc/ssh/sshd_config 的 USEDNS 项是否为 no</p>
</blockquote>
<h2 id="系统管理" tabindex="-1"><a class="header-anchor" href="#系统管理"><span>系统管理</span></a></h2>
<h3 id="_1-用户管理" tabindex="-1"><a class="header-anchor" href="#_1-用户管理"><span>1.用户管理</span></a></h3>
<h4 id="_1-1-添加登录用户-用户列表" tabindex="-1"><a class="header-anchor" href="#_1-1-添加登录用户-用户列表"><span>1.1  添加登录用户（用户列表）</span></a></h4>
<p>创建新用户（用于其他用户登录jumpserver）</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181632864.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181632790.png" alt="" loading="lazy"></p>
<p>完成之后点击提交即可（可以多创用户）</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181632924.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>创建完成用户之后，我们可以设置用户组，就比如在公司你是哪个部门的，给你分配部门；</p>
<h4 id="_1-2-添加用户组" tabindex="-1"><a class="header-anchor" href="#_1-2-添加用户组"><span>1.2 添加用户组</span></a></h4>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181632361.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181632770.png" alt="" loading="lazy"></p>
<h4 id="_1-3-角色列表" tabindex="-1"><a class="header-anchor" href="#_1-3-角色列表"><span>1.3 角色列表</span></a></h4>
<p>系统角色也是在用户列表中设置的；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181632850.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>我们可以点击刚刚设置的用户</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181632100.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>进入用户，点击授权用户就可以看到刚刚设置的用户了；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181632538.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_1-4-使用新建的用户来登录jumpserver" tabindex="-1"><a class="header-anchor" href="#_1-4-使用新建的用户来登录jumpserver"><span>1.4 使用新建的用户来登录jumpserver</span></a></h4>
<p>退出admin用户</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181631726.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>使用刚刚创建的用户来登录</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181631668.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>第一次登录会让我们确认信息，勾选我同意即可；然后点击提交；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181631347.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>提交完成之后点击工作台</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181631265.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181631742.png" alt="" loading="lazy"></p>
<p>这样就能看到我们的资产了，当然现在还没有添加；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181631580.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>下面就是我的应用，有数据库和kernetes；可以自行添加</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181631397.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这些看完之后，我们切换到admin用户，还是点击退出登录</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181631064.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>登录admin账号</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181631356.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>登录进来admin，选择视图---控制台</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181631286.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_2-资产管理" tabindex="-1"><a class="header-anchor" href="#_2-资产管理"><span>2.资产管理</span></a></h3>
<p>从仪表盘可以看到总体的数据；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181631662.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_2-1-系统用户" tabindex="-1"><a class="header-anchor" href="#_2-1-系统用户"><span>2.1 系统用户</span></a></h4>
<p>在创建系统用户或者特权用户之前，我们需要连接哪台服务器就要在哪台服务器上添加这个用户，并且给整个用户设置权限；<br>
可参考：<a href="https://liucy.blog.csdn.net/article/details/125913785?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">【Linux】之创建普通用户并禁止root用户远程登陆</a></p>
<p>我们就来创建一个test用户来测试；</p>
<p>首先，连接你需要管控的哪台服务器；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#添加一个test用户</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">useradd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#然后给test用户设置密码</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">passwd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> test</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181631874.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#设置完成密码之后，我们给test用户设置执行权限</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">visudo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#进入visudo，找到放root权限的地方，也就是第100行，添加test</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">test</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    ALL=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ALL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)       </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ALL</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#如果需要切换用户直接切换的话可以添加为</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">test</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    ALL=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ALL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)       </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">NOPASSWD:ALL</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181631006.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>设置完成之后我们可以切换用户试试；</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">su</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#切换到test用户之后，我们可以在切换到root用户</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> su</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> -</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#切换都没问题，证明添加用户和设置用户权限成功</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在服务器上设置完成之后我们返回到web页面上来创建特权用户；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181631125.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181631690.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>添加完成之后我们就可以看到；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181631384.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_2-2-网域列表" tabindex="-1"><a class="header-anchor" href="#_2-2-网域列表"><span>2.2 网域列表</span></a></h4>
<blockquote>
<p>  接下来就是网域，网域指的是什么呢，就比如你这台服务器在哪放着，比如自己公司机房，或者是地区机房，或者是虚拟机，都可以；名字的话按理来说是可以随意起的，但是我们为了标准化就起的标准一些吧；</p>
</blockquote>
<p>创建网域</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181631759.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181631353.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181631887.png" alt="" loading="lazy"></p>
<h4 id="_2-3-资产列表" tabindex="-1"><a class="header-anchor" href="#_2-3-资产列表"><span>2.3 资产列表</span></a></h4>
<p>接下来我们就开始添加资产了；本篇主要讲的是添加linux主机资产；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181631592.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>右击资产树的default可创建节点、重命名节点、删除节点、添加资产到某个节点中、测试资产的可连接性......</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181631272.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这里我们创建一个新的节点(test)；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181631055.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>节点创建完成之后，开始创建linux资产；</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181631079.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181630394.png" alt="" loading="lazy"></p>
<p>添加完资产之后可查看资产的详细信息，同时也可测试一下改资产是否连接上了服务器；</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181630738.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181630752.png" alt="" loading="lazy"></p>
<p>现在连接不上是因为还没有给该资产授权；等我们给资产授权再反过来测试他的连接性；</p>
<h4 id="_2-4-平台列表-可忽略-因为基本都是全的" tabindex="-1"><a class="header-anchor" href="#_2-4-平台列表-可忽略-因为基本都是全的"><span>2.4 平台列表（可忽略，因为基本都是全的）</span></a></h4>
<p>支持多平台的远程连接</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181630636.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_3-权限管理" tabindex="-1"><a class="header-anchor" href="#_3-权限管理"><span>3.权限管理</span></a></h3>
<h4 id="_3-1-资产授权" tabindex="-1"><a class="header-anchor" href="#_3-1-资产授权"><span>3.1 资产授权</span></a></h4>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181630832.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181630909.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>给资产授权完成之后，我们在返回看资产管理中的资产列表，点进资产，测试连接是否可用；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181630709.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181630981.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>现在是可以通过了；需要注意的就是ip千万不要写错，因为这个连接连不上，基本的都写的正确了，问题不好找，尤其是细节上的东西，就比如刚刚我的ip就写错了，找了半天；</p>
<h2 id="登录普通用户连接linux服务器" tabindex="-1"><a class="header-anchor" href="#登录普通用户连接linux服务器"><span>登录普通用户连接linux服务器</span></a></h2>
<p>成功之后我们用普通用户登录，去连接该服务器；</p>
<p>同样的第一步，退出登录：</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181630455.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>登录普通用户</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181630105.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>登录进来点击“<font color=red>我的资产</font>”</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181630396.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以看到我们这边多了一个主机；这个就是刚刚添加的linux主机；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181630340.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181630665.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>选择<font color=red>Web CLI</font>登录就可以；</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181630829.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181630938.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181630022.png" alt="" loading="lazy"></p>
<p>这样连接就完成了；</p>
<h2 id="连接linux服务器传输文件" tabindex="-1"><a class="header-anchor" href="#连接linux服务器传输文件"><span>连接linux服务器传输文件</span></a></h2>
<p>首先需要在/tmp目录下专门创建一个传输文件的目录；并将该目录设置为普通用户和普通用户组</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#切换至普通用户</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /tmp/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#创建目录，名字根据自己的情况定义</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#给该目录设置普通用户和普通用户组</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">chown</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -R</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> test:test</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> test/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">#ll查看</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ll</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181630691.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>设置完成之后，选择右上角的文件管理--连接</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181630003.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>我们来逐一找到当前的服务器和目录</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181630386.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>将文件直接拖过来就可以上传了</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181630912.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>上传完成返回服务器进入test目录就可以看到传进来的文件了；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181630489.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>需要将文件传到哪，复制或者移动都可以</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181630476.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这样文件传输就可以了；</p>
<h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章"><span>相关文章</span></a></h2>
<table>
<thead>
<tr>
<th>文章名</th>
<th>文章地址</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/126538846" target="_blank" rel="noopener noreferrer">【Linux】之Jumpserver堡垒机的部署/搭建</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/126538846" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/126538846</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/126539267" target="_blank" rel="noopener noreferrer">【Linux】之Jumpserver堡垒机添加linux主机资产</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/126539267" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/126539267</a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/126542303" target="_blank" rel="noopener noreferrer">【Linux】之Jumpserver堡垒机添加Windows主机资产</a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/126542303" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/126542303</a></td>
</tr>
</tbody>
</table>
</div></template>


