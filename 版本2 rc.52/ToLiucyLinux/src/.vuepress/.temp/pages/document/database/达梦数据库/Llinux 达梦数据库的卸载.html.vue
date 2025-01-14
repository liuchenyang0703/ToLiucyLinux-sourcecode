<template><div><h2 id="_1、使用root用户停止服务" tabindex="-1"><a class="header-anchor" href="#_1、使用root用户停止服务"><span>1、使用root用户停止服务</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">su</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> root</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> stop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> DmServiceDMSERVER</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> stop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> DmAPService.service</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、切换到dmdba用户进行卸载程序" tabindex="-1"><a class="header-anchor" href="#_2、切换到dmdba用户进行卸载程序"><span>2、切换到dmdba用户进行卸载程序</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">su</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dmdba</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/dmdbms/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./uninstall.sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -i</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dmdba@debian:~/dmdbms$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ./uninstall.sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -i</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">请确认是否卸载达梦数据库(/opt/dmdbms/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)? (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">y/Y:是</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> n/N:否</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)：y</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">是否删除dm_svc.conf配置文件?</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (y/Y:是 </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">n/N:否</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):y</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">正在删除所有数据库库服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除数据库服务DmJobMonitorService</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除数据库服务DmAPService</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除数据库服务DmAuditMonitorService</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除数据库服务DmInstanceMonitorService</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除数据库服务DmServiceDMSERVER</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除数据库服务DmServiceDMSERVER-</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除所有数据库库服务完成</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">正在删除数据库目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除bin目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除bin目录完成</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除bin2目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除bin2目录完成</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除include目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除include目录完成</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除desktop目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除desktop目录完成</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除doc目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除doc目录完成</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除drivers目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除drivers目录完成</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除jdk目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除jdk目录完成</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除jar目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除jar目录完成</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除samples目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除samples目录完成</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除script目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除script目录完成</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除tool目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除tool目录完成</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除web目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除web目录完成</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除uninstall目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除uninstall目录完成</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除license_en.txt文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除license_en.txt文件完成</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除license_zh.txt文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除license_zh.txt文件完成</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除uninstall.sh文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除uninstall.sh文件完成</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除数据库目录完成</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">使用root用户执行命令:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/opt/dmdbms/root_uninstaller.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dmdba@debian:~/dmdbms$</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、使用root用户执行清理命令" tabindex="-1"><a class="header-anchor" href="#_3、使用root用户执行清理命令"><span>3、使用root用户执行清理命令</span></a></h2>
<p>切换到root</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">su</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> -</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/opt/dmdbms/root_uninstaller.sh</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除DmAPService服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Removed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/systemd/system/multi-user.target.wants/DmAPService.service.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除DmServiceDMSERVER服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Removed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/systemd/system/multi-user.target.wants/DmServiceDMSERVER.service.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">删除/etc/dm_svc.conf文件</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>卸载完成</p>
</div></template>


