<template><div><p>程序：存放在磁盘中的静态代码（文件）<br>
进程：在内存中允许运行的程序，动态的状态<br>
进程是资源调度最小的单位<br>
线程：线程是存在在进程中的<br>
线程（thread）是任务执行的最小单位</p>
<p>进程间资源隔离，线程间资源共用</p>
<h2 id="ps命令" tabindex="-1"><a class="header-anchor" href="#ps命令"><span>ps命令：</span></a></h2>
<table>
<thead>
<tr>
<th>ps</th>
<th>静态查看进程信息</th>
</tr>
</thead>
<tbody>
<tr>
<td>ps aux</td>
<td>查看进程信息(a是all全部，u是用户，x是详细信息)</td>
</tr>
<tr>
<td>ps elf</td>
<td>详细查看进程</td>
</tr>
<tr>
<td>ps -o</td>
<td>指定内容输出</td>
</tr>
<tr>
<td>ps -o tid</td>
<td>查看线程</td>
</tr>
<tr>
<td>ps -u</td>
<td>指定用户</td>
</tr>
</tbody>
</table>
<font color=teal>使用方法：</font><blockquote>
<p>查看进程过滤出nginx的进程：<br>
ps -ef | grep nginx</p>
</blockquote>
<h2 id="netstat命令" tabindex="-1"><a class="header-anchor" href="#netstat命令"><span>netstat命令：</span></a></h2>
<table>
<thead>
<tr>
<th>netstat</th>
<th>查看网络连接情况</th>
</tr>
</thead>
<tbody>
<tr>
<td>-a</td>
<td>查看所有链接</td>
</tr>
<tr>
<td>-p</td>
<td>显示pid和进程名</td>
</tr>
<tr>
<td>-u</td>
<td>显示UDP</td>
</tr>
<tr>
<td>-t</td>
<td>显示TCP</td>
</tr>
<tr>
<td>-n</td>
<td>以数字形式显示</td>
</tr>
<tr>
<td>-l</td>
<td>显示处于监听状态的连接</td>
</tr>
</tbody>
</table>
<font color=teal>使用方法：</font><blockquote>
<p>查看端口，并过滤出自己想找的端口<br>
netstat -anput | grep 8099</p>
</blockquote>
<h2 id="top命令" tabindex="-1"><a class="header-anchor" href="#top命令"><span>top命令：</span></a></h2>
<blockquote>
<p>top	动态查看进程信息<br><br>
uptime	查看top第一行<br><br>
lscpu	查看cpu负载的核数<br><br>
load average: 0.00, 0.01, 0.05<br>
系统1分钟，5分钟，15分钟平均负载<br><br>
%Cpu(s):  0.0 us,  0.0 sy,  0.0 ni,100.0 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st<br>
CPU使用情况<br><br>
进程需要占用系统资源（cpu，内存，磁盘，网络，显卡）<br><br>
CPU密集型<br>
IO密集型<br><br>
us	用户态CPU<br>
sy	内核态CPU<br>
ni	优先级<br>
id	空闲的CPU<br>
wa	等待输入输出设备的CPU<br>
hi	硬中断<br>
si	软中断<br>
st	虚拟化占用CPU资源<br><br>
KiB Mem :   995896 total,   487280 free,   121580 used,   387036 buff/cache<br><br>
buff	写缓冲	解决空间问题<br>
cache	读缓存	解决速率问题</p>
</blockquote>
<h2 id="renice优先级" tabindex="-1"><a class="header-anchor" href="#renice优先级"><span>renice优先级：</span></a></h2>
<p>renice	调整运行进程的优先级</p>
<font color=teal>renice -n 优先级等级 pid	进程优先级命令/程序</font><p>只有root用户可以设置负值</p>
<p>nice	设置进程运行时的优先级</p>
<font color=red>linux系统中进程状态：</font><table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>R</td>
<td>运行中的进程</td>
</tr>
<tr>
<td>S</td>
<td>睡眠状态（可以中断）</td>
</tr>
<tr>
<td>D</td>
<td>不可中断的，通常发生在IO操作</td>
</tr>
<tr>
<td>Z</td>
<td>僵尸进程</td>
</tr>
<tr>
<td>T</td>
<td>表示停止状态</td>
</tr>
<tr>
<td>X</td>
<td>退出状态</td>
</tr>
<tr>
<td>W</td>
<td>正在换页</td>
</tr>
<tr>
<td>&lt;</td>
<td>高优先级</td>
</tr>
<tr>
<td>N</td>
<td>低优先级</td>
</tr>
<tr>
<td>s</td>
<td>表示该进程下有子进程</td>
</tr>
<tr>
<td>l</td>
<td>多线程</td>
</tr>
<tr>
<td>+</td>
<td>前台运行的进程</td>
</tr>
</tbody>
</table>
<h2 id="僵尸进程" tabindex="-1"><a class="header-anchor" href="#僵尸进程"><span>僵尸进程：</span></a></h2>
<font color=blue>什么是僵尸进程：</font><blockquote>
<p>子进程结束，父进程没有回收子进程</p>
</blockquote>
<font color=blue>解决僵尸进程：</font><blockquote>
<p>1.重新启动系统<br>
2.杀死父进程，将僵尸进程变为孤儿进程，此时孤儿进程由系统中的systemd接管，会自动清理。<br>
<br><br>
kill -9 pid	<font color=daaafns>根据进程的pid强制杀死某个进程</font></p>
</blockquote>
<p>父进程派生子进程</p>
<font color=teal>pstree	查看进程树</font><font color=teal>yum provides pstree	直接下载不了pstree，就可以利用这个命令找到pstree是哪个包</font><h2 id="结束-杀死-进程" tabindex="-1"><a class="header-anchor" href="#结束-杀死-进程"><span>结束（杀死）进程：</span></a></h2>
<blockquote>
<p>kill PID	杀进程<br>
killall 进程名	根据进程名杀进程<br>
pkill	根据条件杀进程</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191617772.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<table>
<thead>
<tr>
<th>kill -l</th>
<th>查看进程的所有进程</th>
</tr>
</thead>
<tbody>
<tr>
<td>kill -1</td>
<td>HUP挂起进程</td>
</tr>
<tr>
<td>kill -2</td>
<td>INT中断进程（与ctrl+c以一样）</td>
</tr>
<tr>
<td>kill -3</td>
<td>QUIT退出</td>
</tr>
<tr>
<td>kill -9</td>
<td>KILL强制杀进程</td>
</tr>
<tr>
<td>kill -15</td>
<td>TERM终止进程</td>
</tr>
<tr>
<td>kill -18</td>
<td>CONT继续进程</td>
</tr>
<tr>
<td>kill -19</td>
<td>STOP暂停进程</td>
</tr>
</tbody>
</table>
<font color=teal>常用的杀进程是：</font><blockquote>
<p>kill -9 进程pid</p>
</blockquote>
<h2 id="pgrep命令" tabindex="-1"><a class="header-anchor" href="#pgrep命令"><span>pgrep命令：</span></a></h2>
<table>
<thead>
<tr>
<th>pgrep</th>
<th>根据特定条件查进程</th>
</tr>
</thead>
<tbody>
<tr>
<td>-l</td>
<td>根据进程名查进程的PID</td>
</tr>
<tr>
<td>-u</td>
<td>根据用户名或用户id查进程的pid</td>
</tr>
</tbody>
</table>
<font color=teal>pidof 进程名	根据进程查进程号</font></div></template>


