<template><div><p>su命令用于切换当前用户身份到指定用户或者以指定用户的身份执行命令或程序。</p>
<p>普通用户切换到root用户，可以使用su -- 或su root,但是必须输入root密码才能完成切换。root用户切换到普通用户，可以使用su username,不需要输入任何密码即可完成切换。</p>
<h2 id="su与sudo" tabindex="-1"><a class="header-anchor" href="#su与sudo"><span>su与sudo</span></a></h2>
<p>su	切换用户<br>
sudo -	随用户更改环境变量</p>
<h2 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式"><span>语法格式:</span></a></h2>
<blockquote>
<p>su [选项] [用户名]</p>
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
<td>-c或--command</td>
<td>执行完指定的指令后，即恢复原来的身份</td>
</tr>
<tr>
<td>-f或--fast</td>
<td>适用于csh与tsch，使shell不用去读取启动文件</td>
</tr>
<tr>
<td>-l或--login</td>
<td>改变身份时，也同时变更工作目录，以及HOME,SHELL,USER,logname,此外，也会变更PATH变量</td>
</tr>
<tr>
<td>-m,-p或--preserve-environment</td>
<td>变更身份时，不要变更环境变量</td>
</tr>
<tr>
<td>-s或--shell</td>
<td>指定要执行的shell</td>
</tr>
<tr>
<td>--help</td>
<td>显示帮助信息</td>
</tr>
<tr>
<td>--version</td>
<td>显示版本信息</td>
</tr>
</tbody>
</table>
<h2 id="参考实例" tabindex="-1"><a class="header-anchor" href="#参考实例"><span>参考实例：</span></a></h2>
<p>切换到linuxcool用户，但环境变量仍然是root用户的：</p>
<blockquote>
<p>[root@linuxcool ~]# su linuxcool</p>
</blockquote>
<p>切换到linuxcool用户，并改变为linuxcool用户环境变量：</p>
<blockquote>
<p>[root@linuxcool ~]# su - linuxcool</p>
</blockquote>
<p>变更帐号为 root 并传入 -f 参数给新执行的 shell：</p>
<blockquote>
<p>[root@linuxcool ~]# su root -f</p>
</blockquote>
<h2 id="用户提权" tabindex="-1"><a class="header-anchor" href="#用户提权"><span>用户提权：</span></a></h2>
<p>visudo	编辑sudo配置文件<br>
root	用户（用户不带%）<br>
%wheel	用户组（组带%）</p>
<blockquote>
<p>sudo -i	切换到root用户</p>
</blockquote>
</div></template>


