<template><div><p><img src="https://img-blog.csdnimg.cn/30502e57996c4c7785790981e136a851.jpeg" alt="" loading="lazy"><br>
@[toc]</p>
<h1 id="资产要求" tabindex="-1"><a class="header-anchor" href="#资产要求" aria-hidden="true">#</a> 资产要求</h1>
<h2 id="ssh连接资产要求" tabindex="-1"><a class="header-anchor" href="#ssh连接资产要求" aria-hidden="true">#</a> SSH连接资产要求</h2>
<blockquote>
<p>❗ Windows 资产测试连接，获取硬件，自动推送需要进行相关设置<br>
  注意：按照下面的文档部署好 openssh 后，在 web 的资产列表里面找到你的 windows 资产，在协议组里面加入 rdp 3389，再添加一个 ssh 22，然后就可以使用 测试连接，获取硬件，自动推送 功能了</p>
</blockquote>
<blockquote>
<p>❗ Win7/Win2008 需要升级 powershell 到 3.0 以上，详情请参考 <a href="https://docs.ansible.com/ansible/latest/user_guide/windows_setup.html" target="_blank" rel="noopener noreferrer">ansible 客户端需求<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="rdp连接资产要求" tabindex="-1"><a class="header-anchor" href="#rdp连接资产要求" aria-hidden="true">#</a> RDP连接资产要求</h2>
<blockquote>
<p>❗ 部分安装了安全软件的资产无法正常连接</p>
</blockquote>
<blockquote>
<p>❗ 系统平台 默认情况下使用 Windows 即可</p>
</blockquote>
<blockquote>
<ul>
<li>打开 Windows 远程设置</li>
<li>防火墙放行 rdp 端口</li>
<li>创建资产时 系统平台 选择 Windows</li>
<li>正常创建 RDP 系统用户</li>
<li>授权后即可</li>
</ul>
</blockquote>
<blockquote>
<p>🔺️️ 如果资产设置了 远程(RDP)连接要求使用指定的连接层 SSL</p>
<ul>
<li>在 JumpServer 资产管理 - 平台列表 创建一个新的平台模板</li>
<li>名称: Windows-SSL</li>
<li>基础: Windows</li>
<li>编码: UTF-8 如果复制粘贴乱码可以改成 GBK</li>
<li>RDP security: TLS</li>
<li>RDP console: 默认</li>
<li>提交后, 修改资产的系统平台为 Windows-SSL</li>
</ul>
</blockquote>
<blockquote>
<p>🔺️️ 如果资产设置了 远程(RDP)连接要求使用指定的连接层 RDP</p>
<ul>
<li>在 JumpServer 资产管理 - 平台列表 创建一个新的平台模板</li>
<li>名称: Windows-RDP</li>
<li>基础: Windows</li>
<li>编码: UTF-8 如果复制粘贴乱码可以改成 GBK</li>
<li>RDP security: RDP</li>
<li>RDP console: 默认</li>
<li>提交后, 修改资产的系统平台为 Windows-RDP</li>
</ul>
</blockquote>
<blockquote>
<p>🔺️️ 域账号注意事项</p>
<ul>
<li>如果 域账号 配置了特定的 登录工作站, 则需要在 DC域控制器 的 域用户 属性 登录工作站 里面添加 lion 的 CONTAINER ID</li>
<li>如不确定, 请配置为 此用户可以登录到: 所有计算机(C)</li>
</ul>
</blockquote>
<font color=red>**这里以SSH方式来连接Windows资产**</font><h1 id="windows设置" tabindex="-1"><a class="header-anchor" href="#windows设置" aria-hidden="true">#</a> Windows设置</h1>
<h2 id="_1-打开-windows-远程设置" tabindex="-1"><a class="header-anchor" href="#_1-打开-windows-远程设置" aria-hidden="true">#</a> 1. 打开 Windows 远程设置</h2>
<p>win+i进入系统设置页面</p>
<figure><img src="https://img-blog.csdnimg.cn/dd1258074bff42f9bcb5750d39d346b6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>点击系统</p>
<figure><img src="https://img-blog.csdnimg.cn/29637d0c140140699a12bed095c55d88.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>往下拉，有一个远程桌面，将其开启即可；</p>
<figure><img src="https://img-blog.csdnimg.cn/32603fecdff544008832f06377275222.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_2-防火墙放行-rdp-端口" tabindex="-1"><a class="header-anchor" href="#_2-防火墙放行-rdp-端口" aria-hidden="true">#</a> 2.防火墙放行 RDP 端口</h2>
<p>2.1 win+s搜索控制面板</p>
<figure><img src="https://img-blog.csdnimg.cn/cfeba75258de4019bef564e6fb0df2e0.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>2.2 点击系统和安全</p>
<figure><img src="https://img-blog.csdnimg.cn/439cb2cb59d546d3b55a3ba2343ea7e1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>2.3 点击Windows Defender防火墙</p>
<figure><img src="https://img-blog.csdnimg.cn/ea81d687ad5b442cb3526ac38d96130b.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>2.4 点击高级设置</p>
<figure><img src="https://img-blog.csdnimg.cn/90ceb14a4a4640a6a2f4631062c61183.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>2.5 新建端口入站规则</p>
<p><img src="https://img-blog.csdnimg.cn/3b283388468d40138d4d996a6d6e7282.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/869ce94b1d454cf8aac205e11b71f6cd.png" alt="" loading="lazy"></p>
<p>写入端口</p>
<p><img src="https://img-blog.csdnimg.cn/2c27d17b49f84288a12e2918549b02c8.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/8e0d376a4a9a4e83b0149795a1c80335.png" alt="" loading="lazy"><br>
选择全部，下一步<br>
<img src="https://img-blog.csdnimg.cn/7823ee77d7cb4ffda23218abc85844ae.png" alt="" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/a985cc1106174b62ad2f4f4d9b3b9d53.png" alt="" loading="lazy"></p>
<p>完成之后，可在此看到</p>
<figure><img src="https://img-blog.csdnimg.cn/9284bb6c4dbc4cb6a4f04a6210122b16.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_3-下载-openssh" tabindex="-1"><a class="header-anchor" href="#_3-下载-openssh" aria-hidden="true">#</a> 3.下载 OpenSSH</h2>
<p><a href="https://github.com/PowerShell/Win32-OpenSSH/releases/tag/v8.9.1.0p1-Beta" target="_blank" rel="noopener noreferrer">下载最新的 OpenSSH<ExternalLinkIcon/></a></p>
<figure><img src="https://img-blog.csdnimg.cn/9e9e53a2f74e4a8ba5dea2e94bcb5a0c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>下载完之后解压；<br>
解压后，将文件夹移动到 C:\Program Files\，并改名为OpenSSH</p>
</blockquote>
<h2 id="_4-安装-openssh" tabindex="-1"><a class="header-anchor" href="#_4-安装-openssh" aria-hidden="true">#</a> 4. 安装 OpenSSH</h2>
<p>通过<font color=red><strong>管理员身份</strong></font>的方式打开 WindowsPowerShell，并在 powershell 里面执行下面命令；win+s打开搜索，搜索WindowsPowerShell。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token string">"C:\Program Files\OpenSSH"</span>
powershell.exe <span class="token parameter variable">-ExecutionPolicy</span> Bypass <span class="token parameter variable">-File</span> install-sshd.ps1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/b9635dfd56384ce5b4d3df4e74c183ac.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_5-设置-firewalld" tabindex="-1"><a class="header-anchor" href="#_5-设置-firewalld" aria-hidden="true">#</a> 5. 设置 Firewalld</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>New-NetFirewallRule <span class="token parameter variable">-Name</span> sshd <span class="token parameter variable">-DisplayName</span> <span class="token string">'OpenSSH Server (sshd)'</span> <span class="token parameter variable">-Enabled</span> True <span class="token parameter variable">-Direction</span> Inbound <span class="token parameter variable">-Protocol</span> TCP <span class="token parameter variable">-Action</span> Allow <span class="token parameter variable">-LocalPort</span> <span class="token number">22</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 如果 win7/win2008 执行上面的命令报错请执行此处的命令</span>
netsh advfirewall firewall <span class="token function">add</span> rule <span class="token assign-left variable">name</span><span class="token operator">=</span>sshd <span class="token assign-left variable">dir</span><span class="token operator">=</span>in <span class="token assign-left variable">action</span><span class="token operator">=</span>allow <span class="token assign-left variable">protocol</span><span class="token operator">=</span>TCP <span class="token assign-left variable">localport</span><span class="token operator">=</span><span class="token number">22</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/2ad8aaa94bad4affb0d716c2a7189348.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_6-启动-openssh" tabindex="-1"><a class="header-anchor" href="#_6-启动-openssh" aria-hidden="true">#</a> 6. 启动 OpenSSH</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#启动ssh服务</span>
net start sshd
<span class="token comment">#设置开机自启</span>
Set-Service sshd <span class="token parameter variable">-StartupType</span> Automatic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>附加：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#关闭openssh服务</span>
net stop sshd
<span class="token comment">#启动openssh服务</span>
net start sshd
<span class="token comment">#设置开机自启</span>
Set-Service sshd <span class="token parameter variable">-StartupType</span> Automatic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/52aa1d2c9f1f4163a685e87d88674346.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>开放端口并且启动完成之后，接下来就是在web页面来操作；</p>
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
<figure><img src="https://img-blog.csdnimg.cn/cb2486b3804e4693998e13689bcfd3f7.png" alt="" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>提交完成之后点击工作台</p>
<p><img src="https://img-blog.csdnimg.cn/feb068f83ad84dc1a47685b7206a59eb.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/8c0bfadffa144e80989a7baee68fd33a.png" alt="在这里插入图片描述" loading="lazy"></p>
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
<p>由于目前 Windows 不支持自动推送，所以 Windows 的系统用户设置成与管理用户同一个用户（交换机、Windows等设备不支持 Ansible, 需手动填写账号密码）。Windows 资产协议务必选择 rdp，并且要去掉自动生成密钥、自动推送勾选。</p>
<p>windows的我们必须创建普通用户，同时也需要创建一个特权用户；普通用户呢就是<font color=red>Administrator</font>；而特权用户就设置你的电脑登录的哪个用户就可以；我的是<font color=red>user</font>；授权资产的时候记得要给两个用户都要授权；创建资产的时候选择特权用户就可以。</p>
<p><strong>创建普通用户</strong></p>
<figure><img src="https://img-blog.csdnimg.cn/c5045deb9edf4eabb3d03c8d12c41b94.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>选择RDP协议</p>
<figure><img src="https://img-blog.csdnimg.cn/41699322076f48968cd3e54d86a300cd.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<figure><img src="https://img-blog.csdnimg.cn/069e121d8853492da33970d042a7fa01.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>添加完成之后我们就可以看到；</p>
<figure><img src="https://img-blog.csdnimg.cn/ac8966e72fe94f9599facc134543b03a.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><strong>特权用户</strong></p>
<p>特权用户是你要连接的windows电脑的用户和密码；</p>
<p><img src="https://img-blog.csdnimg.cn/6a248d4d4c73436c9ba05962155a7cb6.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/cfe3f3b118c449b6a088048160088903.png" alt="在这里插入图片描述" loading="lazy"></p>
<p>完成之后我们就可以看到；</p>
<figure><img src="https://img-blog.csdnimg.cn/01adffb4c4d74e30956396a2125a6417.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_2-2-网域列表" tabindex="-1"><a class="header-anchor" href="#_2-2-网域列表" aria-hidden="true">#</a> 2.2 网域列表</h3>
<blockquote>
<p>  接下来就是网域，网域指的是什么呢，就比如你这台服务器在哪放着，比如自己公司机房，或者是地区机房，或者是虚拟机，都可以；名字的话按理来说是可以随意起的，但是我们为了标准化就起的标准一些吧；</p>
</blockquote>
<p>创建网域</p>
<p><img src="https://img-blog.csdnimg.cn/f325ac64101249d2bca2f3290b9067a2.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/bfeba94a43db402b9bbfcce10779462c.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/55be1a2f7bf64e008736454da6723b9b.png" alt="在这里插入图片描述" loading="lazy"></p>
<h3 id="_2-3-资产列表" tabindex="-1"><a class="header-anchor" href="#_2-3-资产列表" aria-hidden="true">#</a> 2.3 资产列表</h3>
<p>接下来我们就开始添加资产了；本篇主要讲的是添加Windows主机资产；</p>
<figure><img src="https://img-blog.csdnimg.cn/ec92560e8872472a8b3df7f5214d2bc1.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>右击资产树的default可创建节点、重命名节点、删除节点、添加资产到某个节点中、测试资产的可连接性......</p>
<figure><img src="https://img-blog.csdnimg.cn/41fda96fccf84e9da5b93371364718ca.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>这里我们创建一个新的节点(win10)；</p>
<figure><img src="https://img-blog.csdnimg.cn/3e1abb752b7a4376b02ee2e3c4f48808.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>节点创建完成之后，开始创建Windows资产；</p>
<figure><img src="https://img-blog.csdnimg.cn/89246661a50c4f408c0de1533269ea42.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<figure><img src="https://img-blog.csdnimg.cn/cdd31f914d6d42a48deddbe5568cfff7.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>添加完资产之后可查看资产的详细信息，同时也可测试一下改资产是否连接上了服务器；</p>
<figure><img src="https://img-blog.csdnimg.cn/2c27db47bc274ad3a7dd1b2f8ddbede9.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><img src="https://img-blog.csdnimg.cn/716c95e079e040498b8bf441e52324d6.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/1a8fec1531e64f3c86853175a480fd2c.png" alt="在这里插入图片描述" loading="lazy"></p>
<h3 id="_2-4-平台列表-可忽略-因为基本都是全的" tabindex="-1"><a class="header-anchor" href="#_2-4-平台列表-可忽略-因为基本都是全的" aria-hidden="true">#</a> 2.4 平台列表（可忽略，因为基本都是全的）</h3>
<p>支持多平台的远程连接</p>
<figure><img src="https://img-blog.csdnimg.cn/c3a7fcbc66164a08bf465d51185eace2.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="_3-权限管理" tabindex="-1"><a class="header-anchor" href="#_3-权限管理" aria-hidden="true">#</a> 3.权限管理</h2>
<h3 id="_3-1-资产授权" tabindex="-1"><a class="header-anchor" href="#_3-1-资产授权" aria-hidden="true">#</a> 3.1 资产授权</h3>
<figure><img src="https://img-blog.csdnimg.cn/0e1fd2bab0b5406ab1b93fa4c784835a.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>测试机选择自己的windows机器就可以，名称也可起一个windows；</p>
<p><img src="https://img-blog.csdnimg.cn/f371b371500a4d1496df4b1c661a2fc4.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/e7f41882edd34d89bd8e8bb6d854c888.png" alt="在这里插入图片描述" loading="lazy"><br>
资产授权完成，我们使用普通用户登录，来连接测试一下，授权完成之后在检查一下，资产的连接状态是否正常；</p>
<figure><img src="https://img-blog.csdnimg.cn/3df74623d2b34515b38d9f365b52757f.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>可以看到是可以正常连接的，我们就切换为其他的普通用户来连接；</p>
<h1 id="登录普通用户连接windows主机" tabindex="-1"><a class="header-anchor" href="#登录普通用户连接windows主机" aria-hidden="true">#</a> 登录普通用户连接Windows主机</h1>
<p>成功之后我们用普通用户登录，去连接该主机；</p>
<p>同样的第一步，退出登录：</p>
<figure><img src="https://img-blog.csdnimg.cn/2beba438462c4ae3b4e841a1fde9aff0.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>登录普通用户</p>
<figure><img src="https://img-blog.csdnimg.cn/8505f5de26f44380b9c5d07ad0dd27a7.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>登录进来点击“<font color=red>我的资产</font>”</p>
<figure><img src="https://img-blog.csdnimg.cn/8c2fd625ff12450f8fb551748fdeb41c.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>可以看到我们这边多了一个主机；这个就是刚刚添加的Windows主机；</p>
<p><img src="https://img-blog.csdnimg.cn/0a0d013d2b7549dc8a081d08dad42df5.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/94cbfc1876854cb49bcf7bc0f9792e7a.png" alt="在这里插入图片描述" loading="lazy"></p>
<figure><img src="https://img-blog.csdnimg.cn/639c35087ac94ae79c3fa30de677a054.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>看到这个界面就已经连接成功了；</p>
<figure><img src="https://img-blog.csdnimg.cn/7190cb92595048669374d4d0ec257f2c.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>这样连接就完成了；</p>
<h1 id="连接windows服务器传输文件" tabindex="-1"><a class="header-anchor" href="#连接windows服务器传输文件" aria-hidden="true">#</a> 连接Windows服务器传输文件</h1>
<p><img src="https://img-blog.csdnimg.cn/e96050f1fd0b44be80e4c5602851cb99.png" alt="在这里插入图片描述" loading="lazy"><img src="https://img-blog.csdnimg.cn/645aed3b54244a4d940b43869dc0f297.png" alt="在这里插入图片描述" loading="lazy"><img src="https://img-blog.csdnimg.cn/594895e789874c839c5e15c511beb9ab.png" alt="在这里插入图片描述" loading="lazy"><img src="https://img-blog.csdnimg.cn/fd8469d359f0471bba868f6de64a002c.png" alt="在这里插入图片描述" loading="lazy"><img src="https://img-blog.csdnimg.cn/d714ab7a4e614e2dac5767c129855aa4.png" alt="在这里插入图片描述" loading="lazy"></p>
<p>上传完成之后，找<font color=red>文件资源管理器</font>；点击<font color=red>此电脑</font>，有一个<font color=red>jumpserver映射的文件夹</font>，上传的文件就在这里面；</p>
<p><img src="https://img-blog.csdnimg.cn/2388168f805447e8a143d640e37a61aa.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="https://img-blog.csdnimg.cn/af24dc3ce23042a4891f3794287667b7.png" alt="在这里插入图片描述" loading="lazy"><img src="https://img-blog.csdnimg.cn/e43de84dae474c28adcf03efa134784f.png" alt="在这里插入图片描述" loading="lazy"></p>
<p><strong>下载文件</strong></p>
<p>同样的找个“小螺丝”，文件管理；</p>
<p><img src="https://img-blog.csdnimg.cn/e6f30e14bb98493d8671c1e222d818e7.png" alt="在这里插入图片描述" loading="lazy"><br>
单机要下载的文件即可下载。</p>
<p><img src="https://img-blog.csdnimg.cn/cb7b4396cdbe41dab159a898e5aafc20.png" alt="在这里插入图片描述" loading="lazy"><img src="https://img-blog.csdnimg.cn/58e365864e834519a8de5530a246ea0e.png" alt="在这里插入图片描述" loading="lazy"></p>
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


