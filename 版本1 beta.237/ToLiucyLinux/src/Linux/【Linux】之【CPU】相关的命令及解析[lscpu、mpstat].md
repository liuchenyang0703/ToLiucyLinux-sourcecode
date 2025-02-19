﻿---
title: 【Linux】之【CPU】相关的命令及解析[lscpu、mpstat]
icon: circle-info
order: 1
category:
  - Linux
tag:
  - Linux
  - cpu
  - 运维
pageview: false
date: 2024-12-18
comment: false
breadcrumb: false
---

## 一、lscpu  – 显示CPU架构的有关信息
>lscpu命令从sysfs和/proc/cpuinfo收集cpu体系结构信息，命令的输出比较易读，命令输出的信息包含cpu数量，线程，核数，套接字，缓存等。

**<font color=teal>常用参数</font>**
|参数  |参数扩展名| 解析 |
|--|--|--|
| -a| --all           |    同时打印在线和离线 CPU (-e 选项默认值)
| -b| --online        |    只打印在线 CPU (-p 选项默认值)
| -c| --offline     |      只打印离线 CPU
| -e| --extended[=<列表>]| 打印扩展的可读格式
| -p| --parse[=<列表>]  |  打印可解析格式
| -s| --sysroot <目录>    |以指定目录作为系统根目录
| -x| --hex        |       打印十六进制掩码而非 CPU 列表
| -y| --physical   |       print physical instead of logical IDs
| -h| --help  |   显示此帮助并退出
| -V| --version|  输出版本信息并退出


**<font color=teal>参考实例</font>**

```bash
[root@root ~]# lscpu
Architecture:          x86_64
CPU op-mode(s):        32-bit, 64-bit
Byte Order:            Little Endian
CPU(s):                16
On-line CPU(s) list:   0-15
Thread(s) per core:    2
Core(s) per socket:    4
座：                 2
NUMA 节点：         2
厂商 ID：           GenuineIntel
CPU 系列：          6
型号：              44
型号名称：        Intel(R) Xeon(R) CPU           E5620  @ 2.40GHz
步进：              2
CPU MHz：             2393.915
BogoMIPS：            4787.83
虚拟化：           VT-x
L1d 缓存：          32K
L1i 缓存：          32K
L2 缓存：           256K
L3 缓存：           12288K
NUMA 节点0 CPU：    0,2,4,6,8,10,12,14
NUMA 节点1 CPU：    1,3,5,7,9,11,13,15
Flags:                 fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ss ht tm pbe syscall nx pdpe1gb rdtscp lm constant_tsc arch_perfmon pebs bts rep_good nopl xtopology nonstop_tsc aperfmperf eagerfpu pni pclmulqdq dtes64 monitor ds_cpl vmx smx est tm2 ssse3 cx16 xtpr pdcm pcid dca sse4_1 sse4_2 popcnt aes lahf_lm ssbd ibrs ibpb stibp tpr_shadow vnmi flexpriority ept vpid dtherm ida arat spec_ctrl intel_stibp flush_l1d
```
## 二、mpstat – 显示变化的CPU数据

>&emsp;&emsp;mpstat命令可以显示随着时间变化的CPU数据，方便找出CPU使用率与时间的关系。这个命令包含在工具集sysstat中，使用之前需要安装sysstat。

**<font color=teal>语法格式</font>**
```bash
mpstat [ 选项 ] [ <时间间隔> [ <次数> ] ]
```
**<font color=teal>常用参数</font>**
| 参数 |解析  |
|--|--|
|-P	|执行监控的CPU，取值0~CPUNUM。或者用ALL查看全部CPU

**<font color=teal>参考实例</font>**
执行监控第一个CPU：

```bash
[root@root ~]# mpstat -P 1
```

执行监控全部CPU：

```bash
[root@root ~]# mpstat -P ALL 
```

每隔1个时间单位采样5次：

```bash
[root@root ~]# mpstat 1 5
```
默认cpu是all；

**<font color=teal>演示及字段解析</font>**

**<font color=readsn>演示：</font>**
```bash
[root@root ~]# mpstat 1 5
Linux 3.10.0-1062.9.1.el7.x86_64 (root) 	2022年06月06日 	_x86_64_	(48 CPU)

14时04分21秒  CPU    %usr   %nice    %sys %iowait    %irq   %soft  %steal  %guest  %gnice   %idle
14时04分22秒  all    1.23    0.00    2.38    0.00    0.00    1.07    0.00    0.00    0.00   95.32
14时04分23秒  all    1.65    0.00    2.39    0.00    0.00    1.21    0.00    0.00    0.00   94.75
14时04分24秒  all    1.05    0.00    2.38    0.02    0.00    1.17    0.00    0.00    0.00   95.38
14时04分25秒  all    1.04    0.00    2.55    0.00    0.00    1.11    0.00    0.00    0.00   95.30
14时04分26秒  all    0.96    0.00    2.49    0.00    0.00    1.15    0.00    0.00    0.00   95.40
平均时间:  all    1.19    0.00    2.44    0.00    0.00    1.14    0.00    0.00    0.00   95.23
```
>**<font color=readsn>字段解析：</font>**
>#%user:用户态程序
#%nice:优先级调整
#%sys:内核态消耗
#%iowait:磁盘等待
#%irq:硬件中断
#%soft:软件中断
#%steal:处理hyperviosr的消耗
#%guest:虚拟机消耗掉的CPU
#%idle：CPU空闲
<font color=red>说明:
如果%iowait的值过高，表示硬盘存在I/O瓶颈
如果%idle值高，表示CPU较空闲
如果%idle值高但系统响应慢时，可能是CPU等待分配内存，应加大内存容量。
如果%idle值持续低于10，表明CPU处理能力相对较低，系统中最需要解决的资源是CPU。</font>

## 总结
## &emsp;相关文章

>💻[【Linux】之【CPU】相关的命令及解析[lscpu、mpstat]](https://blog.csdn.net/liu_chen_yang/article/details/125143646)
>
>--------------------------
>💻[【Linux】之【内存】相关的命令&&解析以及内存相关的问题[free、meminfo、内存泄漏、内存溢出、Overcommit]](https://blog.csdn.net/liu_chen_yang/article/details/125146057)
>
>--------------------------
>💻[【Linux】之【磁盘】相关的命令及解析[df、du、iostat、iotop]](https://blog.csdn.net/liu_chen_yang/article/details/125256901?spm=1001.2014.3001.5501)
>
>--------------------------
>💻[【Linux】之【网络】相关的命令及解析[ethtool、nload、nethogs、iftop、iptraf、ifstat]](https://blog.csdn.net/liu_chen_yang/article/details/125146080)
>
>--------------------------
>💻[【Linux】综合性命令及解析【top、htop、vmstat、dstat、glances、sar】](https://blog.csdn.net/liu_chen_yang/article/details/125146126)
>
>--------------------------
>💻[【Linux】系统如何查看服务器带宽及网络使用情况](https://blog.csdn.net/liu_chen_yang/article/details/125169987)
>
>--------------------------
