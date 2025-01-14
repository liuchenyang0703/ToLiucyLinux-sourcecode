<template><div><p><img src="https://img-blog.csdnimg.cn/d7a0607983f14314b772254f837d8691.jpeg" alt="" loading="lazy"><br>
@[toc]</p>
<h1 id="资产要求" tabindex="-1"><a class="header-anchor" href="#资产要求" aria-hidden="true">#</a> 资产要求</h1>
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
<h1 id="系统管理" tabindex="-1"><a class="header-anchor" href="#系统管理" aria-hidden="true">#</a> 系统管理</h1>
<h2 id="_1-用户管理" tabindex="-1"><a class="header-anchor" href="#_1-用户管理" aria-hidden="true">#</a> 1.用户管理</h2>
<h3 id="_1-1-添加登录用户-用户列表" tabindex="-1"><a class="header-anchor" href="#_1-1-添加登录用户-用户列表" aria-hidden="true">#</a> 1.1  添加登录用户（用户列表）</h3>
<p>创建新用户（用于其他用户登录jumpserver）</p>
<p><img src="https://img-blog.csdnimg.cn/f7fd0f2398b749159426ea43466e5d0b.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/c88078eac8d84e668dc36d2d5dc73da1.png" alt="" loading="lazy"></p>
<p>完成之后点击提交即可（可以多创用户）</p>
<figure><img src="https://img-blog.csdnimg.cn/86d04cfa23d14346a437516c0ea3a9b0.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>创建完成用户之后，我们可以设置用户组，就比如在公司你是哪个部门的，给你分配部门；</p>
<h3 id="_1-2-添加用户组" tabindex="-1"><a class="header-anchor" href="#_1-2-添加用户组" aria-hidden="true">#</a> 1.2 添加用户组</h3>
<p><img src="https://img-blog.csdnimg.cn/93298defa92c4b88bd0b39cf5d1fdeb3.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/d35e1c0e28b64590a7f66721c80bcdf4.png" alt="" loading="lazy"></p>
<h3 id="_1-3-角色列表" tabindex="-1"><a class="header-anchor" href="#_1-3-角色列表" aria-hidden="true">#</a> 1.3 角色列表</h3>
<p>系统角色也是在用户列表中设置的；</p>
<figure><img src="https://img-blog.csdnimg.cn/be4ecec267044343bf01343dbff5619f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>我们可以点击刚刚设置的用户</p>
<figure><img src="https://img-blog.csdnimg.cn/4b2f5fbf13944bbfa4b5292c05d80b82.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>进入用户，点击授权用户就可以看到刚刚设置的用户了；</p>
<figure><img src="https://img-blog.csdnimg.cn/052a05f9c4aa4a0faa601236d6e30204.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_1-4-使用新建的用户来登录jumpserver" tabindex="-1"><a class="header-anchor" href="#_1-4-使用新建的用户来登录jumpserver" aria-hidden="true">#</a> 1.4 使用新建的用户来登录jumpserver</h3>
<p>退出admin用户</p>
<figure><img src="https://img-blog.csdnimg.cn/e57afe068f37400c89126fe4f0d73471.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>使用刚刚创建的用户来登录</p>
<figure><img src="https://img-blog.csdnimg.cn/df7b4b3f7e0e4979a39b7a546f6ff515.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>第一次登录会让我们确认信息，勾选我同意即可；然后点击提交；</p>
<figure><img src="https://img-blog.csdnimg.cn/cb2486b3804e4693998e13689bcfd3f7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>提交完成之后点击工作台</p>
<p><img src="https://img-blog.csdnimg.cn/feb068f83ad84dc1a47685b7206a59eb.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/8c0bfadffa144e80989a7baee68fd33a.png" alt="" loading="lazy"></p>
<p>这样就能看到我们的资产了，当然现在还没有添加；</p>
<figure><img src="https://img-blog.csdnimg.cn/ea953b81beff431d9bc299874bf3daa7.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>下面就是我的应用，有数据库和kernetes；可以自行添加</p>
<figure><img src="https://img-blog.csdnimg.cn/47d9b9057d9c4ae89d6995ae56cb7649.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>这些看完之后，我们切换到admin用户，还是点击退出登录</p>
<figure><img src="https://img-blog.csdnimg.cn/54316898434f43f78f917fefb652fc52.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>登录admin账号</p>
<figure><img src="https://img-blog.csdnimg.cn/76a0a1a3ae054d6aa5fe059d2c896ff8.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>登录进来admin，选择视图---控制台</p>
<figure><img src="https://img-blog.csdnimg.cn/e5cd971f13074942a848baa5b337efb9.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="_2-资产管理" tabindex="-1"><a class="header-anchor" href="#_2-资产管理" aria-hidden="true">#</a> 2.资产管理</h2>
<p>从仪表盘可以看到总体的数据；</p>
<figure><img src="https://img-blog.csdnimg.cn/3014da69a96f4ed5b622d18ccfc2126c.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_2-1-系统用户" tabindex="-1"><a class="header-anchor" href="#_2-1-系统用户" aria-hidden="true">#</a> 2.1 系统用户</h3>
<p>在创建系统用户或者特权用户之前，我们需要连接哪台服务器就要在哪台服务器上添加这个用户，并且给整个用户设置权限；<br>
可参考：<a href="https://liucy.blog.csdn.net/article/details/125913785?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">【Linux】之创建普通用户并禁止root用户远程登陆<ExternalLinkIcon/></a></p>
<p>我们就来创建一个test用户来测试；</p>
<p>首先，连接你需要管控的哪台服务器；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#添加一个test用户</span>
<span class="token function">useradd</span> <span class="token builtin class-name">test</span>

<span class="token comment">#然后给test用户设置密码</span>
<span class="token function">passwd</span> <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/a9fb3f65957d4ae5af8a802d4829be92.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#设置完成密码之后，我们给test用户设置执行权限</span>
visudo

<span class="token comment">#进入visudo，找到放root权限的地方，也就是第100行，添加test</span>
<span class="token builtin class-name">test</span>    <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span>       ALL

<span class="token comment">#如果需要切换用户直接切换的话可以添加为</span>
<span class="token builtin class-name">test</span>    <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span>       NOPASSWD:ALL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/7903f4cf6c5e43a8894095174bec7a94.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>设置完成之后我们可以切换用户试试；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">su</span> - <span class="token builtin class-name">test</span>

<span class="token comment">#切换到test用户之后，我们可以在切换到root用户</span>
<span class="token function">sudo</span> <span class="token function">su</span> -

<span class="token comment">#切换都没问题，证明添加用户和设置用户权限成功</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在服务器上设置完成之后我们返回到web页面上来创建特权用户；</p>
<figure><img src="https://img-blog.csdnimg.cn/7a8b93e2ed5349a6b1f24774b8d1f0d0.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<figure><img src="https://img-blog.csdnimg.cn/7c1da5efe7fc4d06ad32d7d18fa89870.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>添加完成之后我们就可以看到；</p>
<figure><img src="https://img-blog.csdnimg.cn/cde8069bac0d4a6ba88e2577b07aad40.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_2-2-网域列表" tabindex="-1"><a class="header-anchor" href="#_2-2-网域列表" aria-hidden="true">#</a> 2.2 网域列表</h3>
<blockquote>
<p>  接下来就是网域，网域指的是什么呢，就比如你这台服务器在哪放着，比如自己公司机房，或者是地区机房，或者是虚拟机，都可以；名字的话按理来说是可以随意起的，但是我们为了标准化就起的标准一些吧；</p>
</blockquote>
<p>创建网域</p>
<p><img src="https://img-blog.csdnimg.cn/f325ac64101249d2bca2f3290b9067a2.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/bfeba94a43db402b9bbfcce10779462c.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/2f169820df2c44b39bf3e479ddfd478b.png" alt="在这里插入图片描述" loading="lazy"></p>
<h3 id="_2-3-资产列表" tabindex="-1"><a class="header-anchor" href="#_2-3-资产列表" aria-hidden="true">#</a> 2.3 资产列表</h3>
<p>接下来我们就开始添加资产了；本篇主要讲的是添加linux主机资产；</p>
<figure><img src="https://img-blog.csdnimg.cn/ec92560e8872472a8b3df7f5214d2bc1.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>右击资产树的default可创建节点、重命名节点、删除节点、添加资产到某个节点中、测试资产的可连接性......</p>
<figure><img src="https://img-blog.csdnimg.cn/41fda96fccf84e9da5b93371364718ca.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>这里我们创建一个新的节点(test)；</p>
<figure><img src="https://img-blog.csdnimg.cn/3e1abb752b7a4376b02ee2e3c4f48808.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>节点创建完成之后，开始创建linux资产；</p>
<p><img src="https://img-blog.csdnimg.cn/89246661a50c4f408c0de1533269ea42.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/e75cd53875614ab98cb0e8ed1708c81e.png" alt="在这里插入图片描述" loading="lazy"></p>
<p>添加完资产之后可查看资产的详细信息，同时也可测试一下改资产是否连接上了服务器；</p>
<p><img src="https://img-blog.csdnimg.cn/5018831b6c3f4008bb9a06fb4bfefa94.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/84cd1090db6543099d7b33fd438098e8.png" alt="在这里插入图片描述" loading="lazy"></p>
<p>现在连接不上是因为还没有给该资产授权；等我们给资产授权再反过来测试他的连接性；</p>
<h3 id="_2-4-平台列表-可忽略-因为基本都是全的" tabindex="-1"><a class="header-anchor" href="#_2-4-平台列表-可忽略-因为基本都是全的" aria-hidden="true">#</a> 2.4 平台列表（可忽略，因为基本都是全的）</h3>
<p>支持多平台的远程连接</p>
<figure><img src="https://img-blog.csdnimg.cn/c3a7fcbc66164a08bf465d51185eace2.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="_3-权限管理" tabindex="-1"><a class="header-anchor" href="#_3-权限管理" aria-hidden="true">#</a> 3.权限管理</h2>
<h3 id="_3-1-资产授权" tabindex="-1"><a class="header-anchor" href="#_3-1-资产授权" aria-hidden="true">#</a> 3.1 资产授权</h3>
<figure><img src="https://img-blog.csdnimg.cn/0e1fd2bab0b5406ab1b93fa4c784835a.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<figure><img src="https://img-blog.csdnimg.cn/f371b371500a4d1496df4b1c661a2fc4.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>给资产授权完成之后，我们在返回看资产管理中的资产列表，点进资产，测试连接是否可用；</p>
<figure><img src="https://img-blog.csdnimg.cn/ee61867a182544978e8f1d9b36a8a3f2.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<figure><img src="https://img-blog.csdnimg.cn/28448d1c4e344d3db447046e2c5d105b.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>现在是可以通过了；需要注意的就是ip千万不要写错，因为这个连接连不上，基本的都写的正确了，问题不好找，尤其是细节上的东西，就比如刚刚我的ip就写错了，找了半天；</p>
<h1 id="登录普通用户连接linux服务器" tabindex="-1"><a class="header-anchor" href="#登录普通用户连接linux服务器" aria-hidden="true">#</a> 登录普通用户连接linux服务器</h1>
<p>成功之后我们用普通用户登录，去连接该服务器；</p>
<p>同样的第一步，退出登录：</p>
<figure><img src="https://img-blog.csdnimg.cn/2beba438462c4ae3b4e841a1fde9aff0.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>登录普通用户</p>
<figure><img src="https://img-blog.csdnimg.cn/8505f5de26f44380b9c5d07ad0dd27a7.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>登录进来点击“<font color=red>我的资产</font>”</p>
<figure><img src="https://img-blog.csdnimg.cn/8c2fd625ff12450f8fb551748fdeb41c.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>可以看到我们这边多了一个主机；这个就是刚刚添加的linux主机；</p>
<figure><img src="https://img-blog.csdnimg.cn/a99d9c9937284643a38b5d2798b3ed44.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<figure><img src="https://img-blog.csdnimg.cn/b0ed52f65455492c82c4c4ece8c517d6.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>选择<font color=red>Web CLI</font>登录就可以；</p>
<p><img src="https://img-blog.csdnimg.cn/f237590844a64068865a90c3ff94cd71.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/2be72844a13046ce8e781e3580722722.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/81ca2887f4254533a904408944c57822.png" alt="在这里插入图片描述" loading="lazy"></p>
<p>这样连接就完成了；</p>
<h1 id="连接linux服务器传输文件" tabindex="-1"><a class="header-anchor" href="#连接linux服务器传输文件" aria-hidden="true">#</a> 连接linux服务器传输文件</h1>
<p>首先需要在/tmp目录下专门创建一个传输文件的目录；并将该目录设置为普通用户和普通用户组</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#切换至普通用户</span>
<span class="token builtin class-name">cd</span> /tmp/

<span class="token comment">#创建目录，名字根据自己的情况定义</span>
<span class="token function">mkdir</span> <span class="token builtin class-name">test</span>

<span class="token comment">#给该目录设置普通用户和普通用户组</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> test:test test/

<span class="token comment">#ll查看</span>
ll
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/b72105dc749a48e39c6a8093d458f830.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>设置完成之后，选择右上角的文件管理--连接</p>
<figure><img src="https://img-blog.csdnimg.cn/f939ff7409434ffa8855add68a9234d2.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>我们来逐一找到当前的服务器和目录</p>
<figure><img src="https://img-blog.csdnimg.cn/9b8a32f08fdd48c58ae939b77db63883.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>将文件直接拖过来就可以上传了</p>
<figure><img src="https://img-blog.csdnimg.cn/e9fc85ce39ee4523af720e634fbf2f87.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>上传完成返回服务器进入test目录就可以看到传进来的文件了；</p>
<figure><img src="https://img-blog.csdnimg.cn/fa2aa967228e4c44adf2d59f1ddc0272.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>需要将文件传到哪，复制或者移动都可以</p>
<figure><img src="https://img-blog.csdnimg.cn/54d8efc908cb45f6bb55e05cd6ed0dec.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>这样文件传输就可以了；</p>
<h1 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章" aria-hidden="true">#</a> 相关文章</h1>
<table>
<thead>
<tr>
<th>文章名</th>
<th>文章地址</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/126538846" target="_blank" rel="noopener noreferrer">【Linux】之Jumpserver堡垒机的部署/搭建<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/126538846" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/126538846<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/126539267" target="_blank" rel="noopener noreferrer">【Linux】之Jumpserver堡垒机添加linux主机资产<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/126539267" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/126539267<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><a href="https://liucy.blog.csdn.net/article/details/126542303" target="_blank" rel="noopener noreferrer">【Linux】之Jumpserver堡垒机添加Windows主机资产<ExternalLinkIcon/></a></td>
<td><a href="https://liucy.blog.csdn.net/article/details/126542303" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/126542303<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
</div></template>


