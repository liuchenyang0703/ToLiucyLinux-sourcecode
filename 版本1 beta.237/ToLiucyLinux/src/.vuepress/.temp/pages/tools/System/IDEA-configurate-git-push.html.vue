<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>笔者在重新安装IDEA过程中需要重新绑定了Git，发现提交代码过程中push键消失了，所以笔者就以这篇文章记录一下Git配置push键的详细过程。</p>
<p>注意笔者当前IDEA版本为2022，可能和读者有所区别，但是操作思路是差不多的。</p>
<h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤" aria-hidden="true">#</a> 操作步骤</h2>
<p>找到File点击Setting键，或者快捷键Ctrl + Alt + S，进入设置页面</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230525163716803.png" alt="image-20230525163716803" tabindex="0" loading="lazy"><figcaption>image-20230525163716803</figcaption></figure>
<p>到Appearance &amp; Behavior 找到 Menus and Toolbars这个选项</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230525163819504.png" alt="image-20230525163819504" tabindex="0" loading="lazy"><figcaption>image-20230525163819504</figcaption></figure>
<p>选择Navigation Bar Toolbar下的NavBarVcsGroup下的VcsNavBarToobarActions</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230525163918185.png" alt="image-20230525163918185" tabindex="0" loading="lazy"><figcaption>image-20230525163918185</figcaption></figure>
<p>点击Rollback，到上方选择Add Action</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230525163938063.png" alt="image-20230525163938063" tabindex="0" loading="lazy"><figcaption>image-20230525163938063</figcaption></figure>
<p>这时候会弹出一个小窗口，选择Version Control下的Git，找到Repository下的Push，点击OK键确定即可。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230525163953837.png" alt="image-20230525163953837" tabindex="0" loading="lazy"><figcaption>image-20230525163953837</figcaption></figure>
<p>这时候Idea的导航栏就会出现push键了，我们就可以点击将代码提交到远程仓库了</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230525164036702.png" alt="image-20230525164036702" tabindex="0" loading="lazy"><figcaption>image-20230525164036702</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312031906036.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


