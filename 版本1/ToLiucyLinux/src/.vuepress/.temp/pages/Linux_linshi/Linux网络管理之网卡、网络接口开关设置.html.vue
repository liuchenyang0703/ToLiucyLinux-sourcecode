<template><div><h2 id="ifup-开启网卡-激活网络接口" tabindex="-1"><a class="header-anchor" href="#ifup-开启网卡-激活网络接口" aria-hidden="true">#</a> ifup 开启网卡-激活网络接口</h2>
<p>ifup命令用于激活指定的网络接口。ifup命令会去读取/etc/sysconfig/network-scripts/目录下的相关网络接口的配置文件，并根据配置文件的内容来激活该网络接口。</p>
<p>注意：网络接口名称必须是/etc/sysconfig/network-scripts/目录配置文件中设置的才可以。如果使用ifconfig命令改变了网络接口后，ifup命令就不会识别了。因为ifup命令会对比当前网络的参数与/etc/sysconfig/network-scripts/中配置文件的内容是否相符。</p>
<p><strong><font color=teal>语法格式：</font></strong></p>
<blockquote>
<p>ifup [网络接口]</p>
</blockquote>
<p><strong><font color=teal>参考实例：</font></strong></p>
<p>激活网络接口eth0：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># ifup eth0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ifdown-关闭网卡–-禁用网络接口" tabindex="-1"><a class="header-anchor" href="#ifdown-关闭网卡–-禁用网络接口" aria-hidden="true">#</a> ifdown 关闭网卡– 禁用网络接口</h2>
<p>ifdown命令用于禁用指定的网络接口。该命令会去读取/etc/sysconfig/network-scripts/目录下的相关网络接口的配置文件，并根据配置文件的内容来关闭该网络接口。</p>
<p>注意：网络接口名称必须是/etc/sysconfig/network-scripts/目录配置文件中设置的才可以。如果使用ifconfig命令改变了网络接口后，ifdown命令就不会识别了。因为ifdown命令会对比当前网络的参数与/etc/sysconfig/network-scripts/中配置文件的内容是否相符。</p>
<p><strong><font color=teal>语法格式：</font></strong></p>
<blockquote>
<p>ifdown [网络接口]</p>
</blockquote>
<p><strong><font color=teal>参考实例：</font></strong></p>
<p>禁用网络接口eth0：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuxcool ~<span class="token punctuation">]</span><span class="token comment"># ifdown eth0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


