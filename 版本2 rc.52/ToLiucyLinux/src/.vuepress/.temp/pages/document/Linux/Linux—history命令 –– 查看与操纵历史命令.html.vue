<template><div><p>history命令用于显示用户以前执行过的历史命令，并且能对历史命令进行追加和删除等操作。</p>
<p>如果你经常使用Linux命令，那么使用history命令可以有效地提升你的效率。</p>
<h2 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式"><span>语法格式：</span></a></h2>
<blockquote>
<p>history [参数] [目录]</p>
</blockquote>
<h2 id="常用参数" tabindex="-1"><a class="header-anchor" href="#常用参数"><span>常用参数：</span></a></h2>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>-a</td>
<td>将当前shell会话的历史命令追加到命令历史文件中,命令历史文件是保存历史命令的配置文件</td>
</tr>
<tr>
<td>-c</td>
<td>清空当前历史命令列表</td>
</tr>
<tr>
<td>-d</td>
<td>删除历史命令列表中指定序号的命令</td>
</tr>
<tr>
<td>-n</td>
<td>从命令历史文件中读取本次Shell会话开始时没有读取的历史命令</td>
</tr>
<tr>
<td>-r</td>
<td>读取命令历史文件到当前的Shell历史命令内存缓冲区</td>
</tr>
<tr>
<td>-s</td>
<td>将指定的命令作为单独的条目加入命令历史内存缓冲区。在执行添加之前先删除命令历史内存缓冲区中最后一条命令</td>
</tr>
<tr>
<td>-w</td>
<td>把当前的shell历史命令内存缓冲区的内容写入命令历史文件</td>
</tr>
<tr>
<td>!num</td>
<td>num值是执行history前面显示的行号，也称历史记录号； 	直接执行选择的命令</td>
</tr>
</tbody>
</table>
<h2 id="参考实例" tabindex="-1"><a class="header-anchor" href="#参考实例"><span>参考实例：</span></a></h2>
<p>查看所有的历史记录：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# history</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>显示最近的10条命令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# history 10</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>将本次登录的命令写入历史文件中：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# history -w</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>将命令历史文件中的内容读入到目前shell的history记忆中 ：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# history -r</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>将当前Shell会话的历史命令追加到命令历史文件中：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# history -a</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>清空当前历史命令列表：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# history -c</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>执行已经执行过又想执行的命令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# history</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  ls</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  ls</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    4</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  journalctl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    5</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  journalctl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -b</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@linuxcool ~]# !</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">3</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">abc</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 123</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> lcy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> linux</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> history</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ml</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ss</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> laks</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 111</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> fsg</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


