<template><div><h2 id="✍、git图文使用教程说明" tabindex="-1"><a class="header-anchor" href="#✍、git图文使用教程说明" aria-hidden="true">#</a> ✍、Git图文使用教程说明</h2>
<ul>
<li>Git 版本： 2.31.0.windows.1</li>
<li>IDEA版本：2021.1</li>
<li>主要记录 git 的常用命令、IDEA 集成 git、git与GitHub、IDEA 集成 GitHub、Gitee等(详细图文步骤记录)</li>
<li>配套视频参考：<a href="https://www.bilibili.com/video/BV1vy4y1s7k6?from=search&amp;seid=12466209700058370854&amp;spm_id_from=333.337.0.0" target="_blank" rel="noopener noreferrer">【尚硅谷】5h打通Git全套教程<ExternalLinkIcon/></a></li>
</ul>
<h2 id="🐬一、intellij-idea-中集成并使用-git" tabindex="-1"><a class="header-anchor" href="#🐬一、intellij-idea-中集成并使用-git" aria-hidden="true">#</a> 🐬一、IntelliJ IDEA 中集成并使用 Git</h2>
<h3 id="🥕1-1、配置git忽略文件" tabindex="-1"><a class="header-anchor" href="#🥕1-1、配置git忽略文件" aria-hidden="true">#</a> 🥕1.1、配置Git忽略文件</h3>
<p>我们的<a href="https://so.csdn.net/so/search?q=Eclipse&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">Eclipse<ExternalLinkIcon/></a> 、IDEA都会生成一些无关文件，如图</p>
<p><strong>1）Eclipse特定文件</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311422811.png" alt="image-20230531142204646" tabindex="0" loading="lazy"><figcaption>image-20230531142204646</figcaption></figure>
<p>**2）IDEA特定文件 **</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311422035.png" alt="image-20230531142223968" tabindex="0" loading="lazy"><figcaption>image-20230531142223968</figcaption></figure>
<blockquote>
<p>问题1:为什么要忽略他们？</p>
</blockquote>
<p><code v-pre>答</code>：<strong>与项目的实际功能无关，不参与服务器上部署运行。把它们忽略掉能够屏蔽IDE工具之间的差异。</strong></p>
<blockquote>
<p>问题2：怎么忽略？</p>
</blockquote>
<p><code v-pre>1）</code><strong>创建忽略规则文件 <code v-pre>xxxx.ignore</code>（前缀名随便起，建议是git.ignore） 这个文件的存放位置原则上在哪里都</strong></p>
<p><strong>可以，为了便于让~/.gitconfig文件引用，建议也放在用户家目录下 git.ignore文件模版内容如下：</strong></p>
<div class="language-ignore line-numbers-mode" data-ext="ignore"><pre v-pre class="language-ignore"><code><span class="token comment"># Compiled class file</span>
 <span class="token entry string"><span class="token operator">*</span>.class</span>
<span class="token comment"># Log file </span>
<span class="token entry string"><span class="token operator">*</span>.log</span>  
<span class="token comment"># BlueJ files </span>
<span class="token entry string"><span class="token operator">*</span>.ctxt</span>  
<span class="token comment"># Mobile Tools for Java (J2ME)</span>
 <span class="token entry string">.mtj.tmp<span class="token punctuation">/</span></span> 
<span class="token comment"># Package Files # </span>
<span class="token entry string"><span class="token operator">*</span>.jar</span> 
<span class="token entry string"><span class="token operator">*</span>.war</span> 
<span class="token entry string"><span class="token operator">*</span>.nar</span> 
<span class="token entry string"><span class="token operator">*</span>.ear</span> 
<span class="token entry string"><span class="token operator">*</span>.zip</span> 
<span class="token entry string"><span class="token operator">*</span>.tar.gz</span> 
<span class="token entry string"><span class="token operator">*</span>.rar</span>  
<span class="token comment"># virtual machine crash logs, see </span>
<span class="token entry string">http:<span class="token punctuation">/</span><span class="token punctuation">/</span>www.java.com<span class="token punctuation">/</span>en<span class="token punctuation">/</span>download<span class="token punctuation">/</span>help<span class="token punctuation">/</span>error_hotspot.xml</span> 
<span class="token entry string">hs_err_pid<span class="token operator">*</span></span> 

<span class="token entry string">.classpath</span> 
<span class="token entry string">.project</span> 
<span class="token entry string">.settings</span> 
<span class="token entry string">target</span> 
<span class="token entry string">.idea</span> 
<span class="token entry string"><span class="token operator">*</span>.iml</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>2）</code><strong>在.gitconfig文件中引用忽略配置文件（此文件在Windows的家目录中）</strong></p>
<div class="language-config line-numbers-mode" data-ext="config"><pre v-pre class="language-config"><code>[user]  
	name = gaoziman  
	email = gaoziman@qq.com 
[core]  
	excludesfile = C:/Users/shark-Gao/git.ignore 
注意：这里要使用“正斜线（/）”，不要使用“反斜线（\）” 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311424448.png" alt="image-20230531142413377" tabindex="0" loading="lazy"><figcaption>image-20230531142413377</figcaption></figure>
<p><code v-pre>3)</code> <strong>在</strong>IDEA中定位并配置</p>
<p>接下来就来说说，当我们安装好 Git 后的事。安装好 Git 之后，打开 IDEA 的设置界面，依次进入 File -&gt; Settings -&gt; Version Control -&gt; Git（也可以通过快捷键 Ctrl + Alt + S 进入设置），然后将 Path to Git executable 设置为你安装的 Git 所在路径即可，比如我的是 <code v-pre>D:\software\Git\bin\git.exe</code>。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311427918.png" alt="image-20230531142727782" tabindex="0" loading="lazy"><figcaption>image-20230531142727782</figcaption></figure>
<p>设置完成之后，点击右方的 <code v-pre>Test</code>，如果 Git 安装成功且路径正确，就会弹出如下的提示信息，说明我们的配置也就成功了</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311429444.png" alt="image-20230531142900390" tabindex="0" loading="lazy"><figcaption>image-20230531142900390</figcaption></figure>
<h3 id="🌶️1-2、idea初始化本地库" tabindex="-1"><a class="header-anchor" href="#🌶️1-2、idea初始化本地库" aria-hidden="true">#</a> 🌶️1.2、IDEA初始化本地库</h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311432273.png" alt="image-20230531143228201" tabindex="0" loading="lazy"><figcaption>image-20230531143228201</figcaption></figure>
<p><strong>默认创建的 git 仓库就是我们打开的项目所在的目录，我们添加了 git 仓库之后</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311435770.png" alt="image-20230531143548602" tabindex="0" loading="lazy"><figcaption>image-20230531143548602</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311437778.png" alt="image-20230531143706378" tabindex="0" loading="lazy"><figcaption>image-20230531143706378</figcaption></figure>
<p><strong>添加到暂存区就变为了绿色，我们可以写些代码，然后将 project 添加到暂存区</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311438372.png" alt="image-20230531143845050" tabindex="0" loading="lazy"><figcaption>image-20230531143845050</figcaption></figure>
<p><strong>我们添加到暂存区，再接着进行提交到本地库</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311438135.png" alt="image-20230531143851987" tabindex="0" loading="lazy"><figcaption>image-20230531143851987</figcaption></figure>
<h3 id="🍬1-3、切换版本" tabindex="-1"><a class="header-anchor" href="#🍬1-3、切换版本" aria-hidden="true">#</a> 🍬1.3、切换版本</h3>
<p><strong>我们修改 Java2023 中的代码，再次提交到本地库</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311442875.png" alt="image-20230531144216604" tabindex="0" loading="lazy"><figcaption>image-20230531144216604</figcaption></figure>
<p><strong>在IDEA的左下角，点击 Git，然后点击 Log查看版本，右键选择要切换的版本，然后在菜单里点击 Checkout Revision</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311447949.png" alt="image-20230531144716771" tabindex="0" loading="lazy"><figcaption>image-20230531144716771</figcaption></figure>
<h3 id="👀1-4、创建分支" tabindex="-1"><a class="header-anchor" href="#👀1-4、创建分支" aria-hidden="true">#</a> 👀1.4、创建分支</h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311447017.png" alt="image-20230531144746919" tabindex="0" loading="lazy"><figcaption>image-20230531144746919</figcaption></figure>
<p><strong>在弹出的Git Branches框里 点击 New Branch按钮。</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710215859688.png" alt="image-20220710215859688" tabindex="0" loading="lazy"><figcaption>image-20220710215859688</figcaption></figure>
<p><strong>填写分支名称</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311448495.png" alt="image-20230531144821449" tabindex="0" loading="lazy"><figcaption>image-20230531144821449</figcaption></figure>
<p><strong>然后再 IDEA的右下角看到 cisyam-fix，说明分支创建成功，并且当前已经切换成 hot-fix分</strong><br>
<strong>支</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311449760.png" alt="image-20230531144907683" tabindex="0" loading="lazy"><figcaption>image-20230531144907683</figcaption></figure>
<h3 id="👁️1-5、切换分支" tabindex="-1"><a class="header-anchor" href="#👁️1-5、切换分支" aria-hidden="true">#</a> 👁️1.5、切换分支</h3>
<p><strong>在IDEA窗口的右下角，切换到 master分支 。</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311449621.png" alt="image-20230531144942480" tabindex="0" loading="lazy"><figcaption>image-20230531144942480</figcaption></figure>
<h3 id="🥖1-6、合并分支" tabindex="-1"><a class="header-anchor" href="#🥖1-6、合并分支" aria-hidden="true">#</a> 🥖1.6、合并分支</h3>
<p><strong>在IDEA窗口的右下角，将 cisyam-fix分支合并到当前 master分支。</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311450884.png" alt="image-20230531145059806" tabindex="0" loading="lazy"><figcaption>image-20230531145059806</figcaption></figure>
<p>如果代码没有冲突，分支直接合并成功，分支合并成功以后，代码自动提交，无需手动提交本地库</p>
<h3 id="🐸1-7、合并分支冲突" tabindex="-1"><a class="header-anchor" href="#🐸1-7、合并分支冲突" aria-hidden="true">#</a> 🐸1.7、合并分支冲突</h3>
<p><strong>如图所示，如果master分支和 hot-fix分支都修改了代码，在合并分支的时候就会发生冲突。</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311453587.png" alt="image-20230531145346445" tabindex="0" loading="lazy"><figcaption>image-20230531145346445</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311454443.png" alt="image-20230531145429308" tabindex="0" loading="lazy"><figcaption>image-20230531145429308</figcaption></figure>
<p><strong>我们现在站在master分支上合并 cisyam-fix分支，就会发生代码冲突。</strong></p>
<p><strong>点击 Conflicts框里的 Merge按钮，进行手动合并代码。</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710220126009.png" alt="image-20220710220126009" tabindex="0" loading="lazy"><figcaption>image-20220710220126009</figcaption></figure>
<p><strong>手动合并完代码以后，点击右下角的 Apply按钮。代码冲突解决，自动提交本地库。</strong></p>
<h2 id="🐬二、idea集成github" tabindex="-1"><a class="header-anchor" href="#🐬二、idea集成github" aria-hidden="true">#</a> 🐬二、IDEA集成Github</h2>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311536121.png" alt="image-20230531153638013" tabindex="0" loading="lazy"><figcaption>image-20230531153638013</figcaption></figure>
<p><strong>Token在哪呢？我们在 Github 点击 Settings -&gt; Develop Settings</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311538588.png" alt="image-20230531153843500" tabindex="0" loading="lazy"><figcaption>image-20230531153843500</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311540298.png" alt="image-20230531154053225" tabindex="0" loading="lazy"><figcaption>image-20230531154053225</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311540811.png" alt="image-20230531154058743" tabindex="0" loading="lazy"><figcaption>image-20230531154058743</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311542407.png" alt="image-20230531154208342" tabindex="0" loading="lazy"><figcaption>image-20230531154208342</figcaption></figure>
<h3 id="🍷2-1、分享项目到github" tabindex="-1"><a class="header-anchor" href="#🍷2-1、分享项目到github" aria-hidden="true">#</a> 🍷2.1、分享项目到Github</h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311543614.png" alt="image-20230531154359482" tabindex="0" loading="lazy"><figcaption>image-20230531154359482</figcaption></figure>
<p><strong>这其实就是创建远程库，名字，是否私有，描述等</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311544172.png" alt="image-20230531154422123" tabindex="0" loading="lazy"><figcaption>image-20230531154422123</figcaption></figure>
<h3 id="☕2-2、push推送本地库到远程库" tabindex="-1"><a class="header-anchor" href="#☕2-2、push推送本地库到远程库" aria-hidden="true">#</a> ☕2.2、push推送本地库到远程库</h3>
<p><strong>此时就可以看到github库里面已经有这个项目了</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311545825.png" alt="image-20230531154545737" tabindex="0" loading="lazy"><figcaption>image-20230531154545737</figcaption></figure>
<h3 id="🐞2-3、pull拉取远程库到本地库" tabindex="-1"><a class="header-anchor" href="#🐞2-3、pull拉取远程库到本地库" aria-hidden="true">#</a> 🐞2.3、pull拉取远程库到本地库</h3>
<blockquote>
<p>注意：push是将本地库代码推送到远程库，如果本地库代码跟远程库代码版本不一致，push的操作是会</p>
<p>被拒绝的。也就是说， 要想 push成功，一定要保证本地 库的版本要比远程库的版本高！ 因此一个成熟的</p>
<p>程序员在动手改本地代码之前，一定会先检查下远程库跟本地代码的区别！如果本地的代码版本已经落</p>
<p>后，切记要先 pull拉取一下远程库的代码，将本地代码更新到最新以后，然后再修改，提交，推送！</p>
</blockquote>
<p><strong>右键点击项目，可以将远程仓库的内容pull到本地仓库 。</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710220259246.png" alt="image-20220710220259246" tabindex="0" loading="lazy"><figcaption>image-20220710220259246</figcaption></figure>
<p><strong>注意：pull是拉取远端仓库代码到本地，如果远程库代码和本地库代码不一致，会自动合并，如果自动合并</strong></p>
<p><strong>失败，还会涉及到手动解决冲突的问题。</strong></p>
<h2 id="🍦三、idea集成gitee" tabindex="-1"><a class="header-anchor" href="#🍦三、idea集成gitee" aria-hidden="true">#</a> 🍦三、IDEA集成Gitee</h2>
<h3 id="🌂3-1、idea安装码云插件" tabindex="-1"><a class="header-anchor" href="#🌂3-1、idea安装码云插件" aria-hidden="true">#</a> 🌂3.1、IDEA安装码云插件</h3>
<p><strong>Idea 默认不带码云插件，我们第一步要安装 Gitee插件。</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311547253.png" alt="image-20230531154719176" tabindex="0" loading="lazy"><figcaption>image-20230531154719176</figcaption></figure>
<p><strong>安装完成重启 IDEA 即可</strong></p>
<p><strong>Idea连接码云和连接 GitHub几乎一样，首先在 Idea里面创建一个工程，初始化 git工程，然后将代码添加到暂存区，提交到本地库。</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710221125857.png" alt="image-20220710221125857" tabindex="0" loading="lazy"><figcaption>image-20220710221125857</figcaption></figure>
<h3 id="🧿3-2、分享项目到gitee" tabindex="-1"><a class="header-anchor" href="#🧿3-2、分享项目到gitee" aria-hidden="true">#</a> 🧿3.2、分享项目到Gitee</h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311549580.png" alt="image-20230531154913462" tabindex="0" loading="lazy"><figcaption>image-20230531154913462</figcaption></figure>
<h3 id="🌀3-2、push推送到码云远程库" tabindex="-1"><a class="header-anchor" href="#🌀3-2、push推送到码云远程库" aria-hidden="true">#</a> 🌀3.2、push推送到码云远程库</h3>
<p><strong>当然我们也可以自己在码云Gitee上创建远程库，然后获取到远程库的 HTTPS/SSH 链接，将我们的代码 push 即可</strong></p>
<p><strong>自定义远程库链接： Define remote，给远程库链接定义个 name，然后再 URL里面填入码云远程库的 HTTPS链接即可，码云服务器在国内，用 HTTPS 链接即可，没必要用 SSH 免密链接</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710221113303.png" alt="image-20220710221113303" tabindex="0" loading="lazy"><figcaption>image-20220710221113303</figcaption></figure>
<h3 id="⛱️3-3、pull拉取远程库到本地库" tabindex="-1"><a class="header-anchor" href="#⛱️3-3、pull拉取远程库到本地库" aria-hidden="true">#</a> ⛱️3.3、pull拉取远程库到本地库</h3>
<p><strong>我们在远程库修改代码，然后使用本地库 pull 拉取远程库的代码</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710221108436.png" alt="image-20220710221108436" tabindex="0" loading="lazy"><figcaption>image-20220710221108436</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710221049648.png" alt="image-20220710221049648" tabindex="0" loading="lazy"><figcaption>image-20220710221049648</figcaption></figure>
<h3 id="🔭3-4、clone克隆远程库到本地库" tabindex="-1"><a class="header-anchor" href="#🔭3-4、clone克隆远程库到本地库" aria-hidden="true">#</a> 🔭3.4、clone克隆远程库到本地库</h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311550966.png" alt="image-20230531155005893" tabindex="0" loading="lazy"><figcaption>image-20230531155005893</figcaption></figure>
<h2 id="🪒四、码云复制github项目" tabindex="-1"><a class="header-anchor" href="#🪒四、码云复制github项目" aria-hidden="true">#</a> 🪒四、码云复制Github项目</h2>
<p>码云提供了直接复制 GitHub 项目的功能，方便我们做项目的迁移和下载 。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20220710220947280.png" alt="image-20220710220947280" tabindex="0" loading="lazy"><figcaption>image-20220710220947280</figcaption></figure>
<p><strong>如果GitHub项目更新了以后，在码云项目端可以手动重新同步，进行更新！</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/202305311551101.png" alt="image-20230531155107002" tabindex="0" loading="lazy"><figcaption>image-20230531155107002</figcaption></figure>
<p><strong>Git的教程就到这里完结啦！！！撒花撒花撒花！！！！</strong></p>
</div></template>


