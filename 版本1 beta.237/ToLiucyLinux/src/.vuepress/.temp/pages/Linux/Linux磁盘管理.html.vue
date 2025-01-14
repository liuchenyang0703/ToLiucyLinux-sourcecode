<template><div><h2 id="fdisk" tabindex="-1"><a class="header-anchor" href="#fdisk" aria-hidden="true">#</a> <font color=red>fdisk：</font></h2>
<p>磁盘管理--&gt;块设备文件	b开头--&gt;/dev/<br>
对于linux系统磁盘命名：<br>
IDE接口的硬盘为 hda hdb<br>
SAS，SATA，SCSI接口的硬盘	sda  分区sda1 sda2  sdb</p>
<p>主引导记录（MBR）:位于磁盘的第一个扇区<br>
521字节=446字节  引导程序<br>
记录4个分区表，每个16字节，64字节<br>
还有2个校验字节</p>
<table>
<thead>
<tr>
<th>fdisk</th>
<th>磁盘管理工具</th>
</tr>
</thead>
<tbody>
<tr>
<td>-l</td>
<td>查看所有磁盘信息</td>
</tr>
<tr>
<td>n</td>
<td>创建新分区</td>
</tr>
<tr>
<td>d</td>
<td>删除分区</td>
</tr>
<tr>
<td>p</td>
<td>列出分区表</td>
</tr>
<tr>
<td>w</td>
<td>把分区表写入硬盘并退出</td>
</tr>
<tr>
<td>e</td>
<td>扩展分区</td>
</tr>
</tbody>
</table>
<blockquote>
<font color=red>最常用的查看磁盘分区：fdisk -l</font></blockquote>
<p>MBR中只可以划分4个主分区，或者时3个主分区+1个扩展分区<br>
扩展分区后，可以划分逻辑分区</p>
<blockquote>
<p>1.fdisk划分分区<br><br>
2.创建文件系统	mkfs.xfs /dev/sdb1（划分）<br>
  文件系统：组织和管理文件的<br>
  FAT16	FAT32	exFAT	u盘使用--&gt;不支持单个超过4G<br>
  NTFS	--&gt;windows使用</p>
</blockquote>
<font color=red>&emsp;&emsp;ext4/ext3/ext2 -->centos6默认</font><font color=red>&emsp;&emsp;XFS	-->centos7默认</font><font color=red>&emsp;&emsp;centos6和centos7的区别：默认系统不同</font><br><p>mkfs	创建文件系统<br>
-f	强制覆盖<br>
<br><br>
因为系统中主分区加扩展分区占用1-4的分区号，所以第一个逻辑分区为5</p>
<table>
<thead>
<tr>
<th>partprobe</th>
<th>刷新分区表</th>
</tr>
</thead>
</table>
<table>
<thead>
<tr>
<th>df</th>
<th>查看系统挂载信息</th>
</tr>
</thead>
<tbody>
<tr>
<td>-T</td>
<td>显示文件系统类型</td>
</tr>
<tr>
<td>-h</td>
<td>以人类可读方式显示</td>
</tr>
<tr>
<td>-i</td>
<td>查看inode情况</td>
</tr>
</tbody>
</table>
<font color=teal>常用的是：df -Th	查看挂载文件</font><h2 id="gdisk" tabindex="-1"><a class="header-anchor" href="#gdisk" aria-hidden="true">#</a> <font color=red>gdisk：</font></h2>
<p>gdisk	--&gt;划分容量超过2T磁盘分区	GPT	128个<br>
parted</p>
<font color=red size=4>交换分区	swap</font><blockquote>
<p>作用：当内存不够时，使用交换分区代替内存；</p>
</blockquote>
<blockquote>
<p>mkswap	创建交换分区<br>
swapon	开启交换分区<br>
     -s	查看系统中的交换分区<br>
      -p	设置优先级<br>
      -a	开启所有的交换分区<br>
swapoff	关闭交换分区</p>
</blockquote>
<font color=red>查看内存：</font><blockquote>
<p>free -m	查看内存<br>
free 	查看系统内存使用情况<br>
  -m	以M为单位</p>
</blockquote>
<font color=red>查看文件、目录大小：</font><blockquote>
<p>du  文件名	查看文件或目录占用磁盘大小<br>
  -m	-h	以人类可读方式显示<br>
  -m	-s	仅显示目录或文件的总计数值</p>
</blockquote>
<hr>
<h2 id="lvm-逻辑卷管理" tabindex="-1"><a class="header-anchor" href="#lvm-逻辑卷管理" aria-hidden="true">#</a> <font color=red>LVM 逻辑卷管理：</font></h2>
<font color=blue>作用：动态调整区分大小<br>
缺点：在性能上有所降低</font><br><br>
<font color=orrages>pv  物理卷 -->直接对磁盘操作<br>
vg  卷组 -->将所有的物理卷组合<br>
lv    逻辑卷 -->在卷组中划分出一定的空间</font>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>pvcreate</td>
<td>创建物理卷（pvcreate /dev/sdc1 /dev/sdd1）</td>
</tr>
<tr>
<td>vgcreate</td>
<td>创建卷组	(vgcreate 卷组名 /dev/sdc1 /dev/sdd1)</td>
</tr>
<tr>
<td>lvcreate</td>
<td>创建逻辑卷(lvcreate -L 10G -n lv0 /dev/vg0)【/dev/vg0卷组的路径】</td>
</tr>
<tr>
<td>-L</td>
<td>指定逻辑卷容量</td>
</tr>
<tr>
<td>-n</td>
<td>指定逻辑卷名字</td>
</tr>
<tr>
<td>.....</td>
<td>.............................</td>
</tr>
<tr>
<td>pvdisplay</td>
<td>显示物理卷信息</td>
</tr>
<tr>
<td>vgdisplay</td>
<td>显示卷组信息</td>
</tr>
<tr>
<td>lvdisplay</td>
<td>显示逻辑卷信息</td>
</tr>
<tr>
<td>...</td>
<td>....</td>
</tr>
<tr>
<td>pvscan</td>
<td>扫描物理卷</td>
</tr>
<tr>
<td>vgscan</td>
<td>扫描卷组</td>
</tr>
<tr>
<td>lvscan</td>
<td>扫描逻辑卷</td>
</tr>
<tr>
<td>...</td>
<td>....</td>
</tr>
<tr>
<td>pvremove</td>
<td>删除物理卷</td>
</tr>
<tr>
<td>vgremove</td>
<td>删除卷组</td>
</tr>
<tr>
<td>lvremove</td>
<td>删除逻辑卷</td>
</tr>
<tr>
<td>...</td>
<td>....</td>
</tr>
<tr>
<td>pvchange</td>
<td>修改物理卷</td>
</tr>
<tr>
<td>vgchange</td>
<td>修改卷组</td>
</tr>
<tr>
<td>lvchange</td>
<td>修改逻辑卷</td>
</tr>
<tr>
<td>...</td>
<td>....</td>
</tr>
<tr>
<td>vgextend</td>
<td>扩展卷组</td>
</tr>
<tr>
<td>lvextend</td>
<td>扩展逻辑卷</td>
</tr>
<tr>
<td>vgreduce</td>
<td>缩容卷组</td>
</tr>
<tr>
<td>lvreduce</td>
<td>缩容逻辑卷</td>
</tr>
</tbody>
</table>
<font color=teal>xfs_growfs 路径	刷新xfs文件系统
resize2fs 路径	刷新ext4文件系统</font>
<hr>
<h2 id="cache-缓存" tabindex="-1"><a class="header-anchor" href="#cache-缓存" aria-hidden="true">#</a> <font color=red>cache 缓存：</font></h2>
<blockquote>
<p>cache data LV	数据卷，用来缓存数据<br>
cache metadata LV	元数据卷，用来缓存元数据<br>
cache pool LV	缓存池，包含data+meta<br>
cache LV		缓存卷，包含真时的LV卷+缓存池</p>
</blockquote>
<p>SSD	固态硬盘<br>
HDD	机械硬盘</p>
<font color=red>lsblk	列出块设备信息</font><blockquote>
<p>创建缓存数据	lvcreate -L 10G -n cache_data /dev/vg0 /dev/sde1<br><br>
创建元数据	lvcreate -L 100M -n cache_meta /dev/vg0 /dev/sde1<br><br>
创建缓存池	lvconvert --type cache-pool --poolmetadata vg0/cache_meta vg0/cache_data<br><br>
把缓存池里的放到逻辑卷下：		lvconvert --type  cache --cachepool vg0/cacha_data vg0/lv0</p>
</blockquote>
<p>创建一个新的文件系统：mkfs.xfs /dev/vg0/lv0<br>
在跟目录下创建test<br>
挂载根目录下的test：mount /dev/vg0/lv0 /test</p>
<h2 id="snapshot-快照" tabindex="-1"><a class="header-anchor" href="#snapshot-快照" aria-hidden="true">#</a> <font color=red>snapshot 快照：</font></h2>
<blockquote>
<p>-s	快照<br>
-L  值	要设置的大小<br>
-n  名字	要写的名字<br><br>
创建快照卷：lvcreate -L 2G -s -n lv_snapshot vg0/lv0<br>
测试快照卷速度：	dd if=/dev/sda of=/test/mbr.bak bs=512 count=1（dd测试，if源路径，of要复制到哪路径，bs一次复制多少M，count复制多少次）<br>
dd if=/dev/zero of=/test/mbr.bak bs=10M count=100（dd测试，if源路径，zero代表0，of要复制到哪路径，bs一次复制多少M，count复制多少次）<br>
<br><br>
在跟目录下创建/snapshot目录<br>
挂载：mount -o nouuid /dev/vg0/lv_snapshot /snapshot/（uuid相同用-o nouuid）</p>
</blockquote>
<font color=teal>UUID	设备的唯一标识：<br>
blkid	查看磁盘的UUID<br>
nmcli conn show	查看网卡的UUID</font>
<h2 id="raid-独立磁盘冗余阵列-数据安全性" tabindex="-1"><a class="header-anchor" href="#raid-独立磁盘冗余阵列-数据安全性" aria-hidden="true">#</a> <font color=red>RAID 独立磁盘冗余阵列 数据安全性</font></h2>
<blockquote>
<p>硬RAID	软RAID<br></p>
</blockquote>
<font color=red>RAID 0 条带模式</font><p>优点：提高数据的读写速度<br>
缺点：数据安全性低，一旦RAID中有磁盘损坏，RAID组不可用<br></p>
<font color=red>RAID 1	镜像模式	需要2N快盘</font><p>优点：数据完全冗余（备份），安全性高（读效率相对提高）<br>
缺点：磁盘利用率低，成本高(50%)(写性能有所降低)<br></p>
<font color=red>RAID 5	分布式奇偶校验模式	至少使用少3块硬盘</font><p>优点：数据相对安全，允许有一块磁盘损坏（校验数据）	读性能相对有提升<br>
缺点：如果两块盘损坏，RAID不可用，写性能相对较低（做校验数据）<br>
使用率：&quot;[（n-1）/n]*100&quot;<br><br>
RAID 10<br>
RAID 50</p>
<p>软RAID实现通过mdadm</p>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>-C</td>
<td>创建一个新的RAID</td>
</tr>
<tr>
<td>-l</td>
<td>指定RAID级别</td>
</tr>
<tr>
<td>-n</td>
<td>指定使用磁盘的数量</td>
</tr>
<tr>
<td>-x</td>
<td>指定热备盘</td>
</tr>
<tr>
<td>-S</td>
<td>停止RAID设备</td>
</tr>
<tr>
<td>-D</td>
<td>输出指定RAID设备的详细信息</td>
</tr>
</tbody>
</table>
<font color=red>降级与重构</font><blockquote>
<p>cat /proc/mdstat</p>
</blockquote>
</div></template>


