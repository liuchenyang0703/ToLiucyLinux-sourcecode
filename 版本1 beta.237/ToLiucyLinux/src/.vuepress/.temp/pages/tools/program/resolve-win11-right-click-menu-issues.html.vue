<template><div><h2 id="_1-现象" tabindex="-1"><a class="header-anchor" href="#_1-现象" aria-hidden="true">#</a> 1. 现象</h2>
<blockquote>
<p>Win11的右键菜单绝对是反人类的设计，但这个问题解决起来就是半分钟、一句命令的事情。</p>
</blockquote>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202308031919086.png" alt="image-20230803191915935" tabindex="0" loading="lazy"><figcaption>image-20230803191915935</figcaption></figure>
<p>首先 Win + X <s>打开 Windows powershell（管理员）</s> PS：现在貌似叫Windows 终端（管理员）</p>
<h2 id="_2-解决方案" tabindex="-1"><a class="header-anchor" href="#_2-解决方案" aria-hidden="true">#</a> 2. 解决方案</h2>
<h3 id="_2-1-切换回经典右键菜单" tabindex="-1"><a class="header-anchor" href="#_2-1-切换回经典右键菜单" aria-hidden="true">#</a> 2.1 切换回经典右键菜单</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>reg <span class="token function">add</span> <span class="token string">"HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32"</span> /f /ve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202308031952842.png" alt="image-20230803195211789" tabindex="0" loading="lazy"><figcaption>image-20230803195211789</figcaption></figure>
<p>运行完成后，需要刷新一下注册表</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202308031952124.png" alt="image-20230803195236076" tabindex="0" loading="lazy"><figcaption>image-20230803195236076</figcaption></figure>
<h3 id="_2-2-恢复到新版右键菜单" tabindex="-1"><a class="header-anchor" href="#_2-2-恢复到新版右键菜单" aria-hidden="true">#</a> 2.2 恢复到新版右键菜单</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>reg delete <span class="token string">"HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}"</span> /f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202308031953004.png" alt="image-20230803195344942" tabindex="0" loading="lazy"><figcaption>image-20230803195344942</figcaption></figure>
<h2 id="_3-解决操作系统多个问题" tabindex="-1"><a class="header-anchor" href="#_3-解决操作系统多个问题" aria-hidden="true">#</a> 3. 解决操作系统多个问题</h2>
<p>Tips:首先 <code v-pre>Win + R</code> 打开运行窗口，输入 <code v-pre>msconfig</code></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202308031954100.png" alt="image-20230803195441046" tabindex="0" loading="lazy"><figcaption>image-20230803195441046</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312031906036.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


