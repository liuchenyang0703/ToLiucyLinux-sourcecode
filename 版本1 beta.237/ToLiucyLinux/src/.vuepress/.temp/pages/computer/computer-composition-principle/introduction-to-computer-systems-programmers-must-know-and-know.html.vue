<template><div><h2 id="计算机的发展历程" tabindex="-1"><a class="header-anchor" href="#计算机的发展历程" aria-hidden="true">#</a> 计算机的发展历程</h2>
<h3 id="_1-计算机硬件的发展" tabindex="-1"><a class="header-anchor" href="#_1-计算机硬件的发展" aria-hidden="true">#</a> 1 计算机硬件的发展</h3>
<p><strong>计算机系统 = 硬件+软件</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230315214009169.png" alt="image-20230315214009169" tabindex="0" loading="lazy"><figcaption>image-20230315214009169</figcaption></figure>
<h5 id="计算机的软硬件概念" tabindex="-1"><a class="header-anchor" href="#计算机的软硬件概念" aria-hidden="true">#</a> 计算机的软硬件概念：</h5>
<ul>
<li>计算机系统由软硬件组成，硬件是计算机的实体，软件是利用硬件执行的程序</li>
<li>软件的分类：系统软件和应用软件
<ul>
<li>系统软件：管理整个计算机系统，语言处理程序，操作系统，服务性程序</li>
<li>应用软件：word ，QQ ，CS等等......</li>
</ul>
</li>
</ul>
<p><strong>计算机硬件的发展 ：</strong></p>
<ul>
<li>第一代计算机：(使用电子管)，</li>
<li>第二代计算机：(使用晶体管)，</li>
<li>第三代计算机：(使用较小规模的集成)，</li>
<li>第四代计算机：(使用较大规模的集成)，</li>
</ul>
<p>已经经历了4代，计算机的速度越来越快，并且体积变得越来越小。发展趋势：更微型、多用途；更巨型、超高速</p>
<blockquote>
<p>晶体管之父：肖克利（1956年诺贝尔物理学奖得主）</p>
<p>1957年，&quot;八叛徒&quot;创立了仙童半导体<br>
1959年，仙童半导体发明了“集成电路”<br>
1968年，摩尔离开仙童，创立intel<br>
1969年，仙童销售部负责人桑德斯离开仙童，创立AMD</p>
</blockquote>
<p><code v-pre>摩尔定律，集成电路上的晶体管数量每18月就会翻一翻，所以每18月计算机的处理效率就会提高一倍。</code></p>
<h3 id="_2-计算机软件的发展" tabindex="-1"><a class="header-anchor" href="#_2-计算机软件的发展" aria-hidden="true">#</a> 2 计算机软件的发展</h3>
<p>计算机软件技术的发展，促进计算机系统的发展。</p>
<p>计算机语言的发展经历了面向机器的机器语言和汇编语言、面向问题的高级语言。其中高级语言的发展真正促进了软件的发展，它经历了从科学计算和工程计算的 FORTRAN、结构化程序设计的 PASCAL到面向对象的C++和适应网络环境的Java。</p>
<p>同时，直接影响计算机系统性能提升的各种系统软件也有了长足的发展，特别是操作系统，如 Windows、UNIX、 Linux等。</p>
<h3 id="_3-计算机的分类与发展方向" tabindex="-1"><a class="header-anchor" href="#_3-计算机的分类与发展方向" aria-hidden="true">#</a> 3 计算机的分类与发展方向</h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230315214323606.png" alt="image-20230315214323606" tabindex="0" loading="lazy"><figcaption>image-20230315214323606</figcaption></figure>
<h2 id="计算机系统层次结构" tabindex="-1"><a class="header-anchor" href="#计算机系统层次结构" aria-hidden="true">#</a> 计算机系统层次结构</h2>
<ul>
<li>机器语言-&gt;汇编语言-&gt;高级语言</li>
<li>微指令系统-&gt;机器语言，微指令语言构成了机器语言</li>
<li>汇编语言使用了操作系统的中断</li>
</ul>
<h3 id="_1-计算机硬件的基本组成" tabindex="-1"><a class="header-anchor" href="#_1-计算机硬件的基本组成" aria-hidden="true">#</a> 1 计算机硬件的基本组成</h3>
<p><strong>早期的冯·诺依曼机</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230315214507666.png" alt="image-20230315214507666" tabindex="0" loading="lazy"><figcaption>image-20230315214507666</figcaption></figure>
<blockquote>
<p>美籍匈牙利科学家冯·诺依曼最先提出“程序存储”的思想，并成功将其运用在计算机的设计之中，根据这一原理制造的计算机被称为冯·诺依曼结构计算机。由于他对现代计算机技术的突出贡献，因此冯·诺依曼又被称为“现代计算机之父”。</p>
<p>什么是存储程序原理？按此原理，计算机应具有哪几大功能？</p>
<p>“程序存储”：指令以代码的形式事先输入到计算机的主存储器中，然后按其在存储器中的首地址执行程序的第一条指令，以后就按该程序的规定顺序执行其他指令，直至程序执行结束。即按地址访问并顺序执行指令</p>
<p>计算机按照此原理应具有5大功能：数据传送功能、数据存储功能、数据处理功能、操作控制功能、操作判断功能</p>
</blockquote>
<p><strong>冯诺曼体系结构特点 ：</strong></p>
<ol>
<li>
<p>计算机硬件系统由五大部件组成(存储器、运算器、控制器、输出设备、输入设备)</p>
</li>
<li>
<p>指令和数据以同等地位存于存储器，可按地址寻访</p>
</li>
<li>
<p>指令和数据用二进制表示</p>
</li>
<li>
<p>指令由操作码和地址码组成</p>
</li>
<li>
<p>存储程序</p>
</li>
<li>
<p>以<strong>运算器</strong>为中心</p>
</li>
</ol>
<p><code v-pre>早期的冯·诺依曼机以运算器为中心，且是单处理机，**最根本的特征**是采用“**存储程序**”原理，基本工作方式是控制流驱动方式！</code></p>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230315214710987.png" alt="image-20230315214710987" style="zoom:80%;" />
<h3 id="_2-现代计算机的组织结构" tabindex="-1"><a class="header-anchor" href="#_2-现代计算机的组织结构" aria-hidden="true">#</a> 2 现代计算机的组织结构</h3>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230315214756919.png" alt="image-20230315214756919" style="zoom:80%;" />
<p><strong>现代计算机硬件框图</strong></p>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230315214933447.png" alt="image-20230315214933447" style="zoom:80%;" />
<h3 id="_3-计算机的功能部件" tabindex="-1"><a class="header-anchor" href="#_3-计算机的功能部件" aria-hidden="true">#</a> 3 计算机的功能部件</h3>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230315214821830.png" alt="image-20230315214821830" style="zoom:80%;" />
<p><strong>五大部分：</strong></p>
<ul>
<li>&lt;1&gt; 输入设备，是指将外部信息以计算机能读懂的方式输入进来，如键盘，鼠标等</li>
<li>&lt;2&gt; 输出设备，就是将计算机处理的信息以人所能接受的方式输出出来，比如显示屏，打印机。</li>
<li>&lt;3&gt; 存储器，存储器分为 主存储器(内存储器，<code v-pre>CPU能直接访问</code>)和 辅助存储器(外存储器，协助主存储器记忆更多的信息，辅助存储器的信息需要导入到主存储器中，才可以被CPU访问)。</li>
</ul>
<p><strong>主存储器</strong>的工作方式是<code v-pre>按存储单元的地址进行存取</code>，这种存取方式称为按地址存取方式(相联存储器既可以既可以按照地址寻址，又可以按照内容寻址，为了与传统存储器区别，又称为内容寻址的存储器！)</p>
<p>主存储器是由<code v-pre>地址寄存器(MAR</code>)，数据寄存器(MDR)，存储体，<code v-pre>时序控制逻辑</code>，地址寄存器存放访存地址，经过地址译码后找到所选的存储单元。数据寄存器，是存储器与其他部件的中介，用于暂存要从存储器读或写的信息。时序控制逻辑用于产生存储器操作所需的各种时序信号。在现代CPU，MAR和MDR是在CPU中的。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230315215129192.png" alt="image-20230315215129192" tabindex="0" loading="lazy"><figcaption>image-20230315215129192</figcaption></figure>
<ul>
<li>
<p>&lt;4&gt; 运算器，是计算机的运算单元，用于算术运算和逻辑运算<br>
运算器的核心单元是算术逻辑单元(ALU)</p>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230315215204164.png" alt="image-20230315215204164" style="zoom:80%;" />
</li>
<li>
<p>&lt;5&gt; 控制器，控制器是计算机的指挥中心，有其指挥各部件自动协调第进行工作，现代计算机将运算器和控制器集成到一个芯片上，合成为中央处理器，简称CPU。有程序计数器(PC)、指令寄存器(IR)和控制单元(CU)。</p>
</li>
</ul>
<p>​										<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230315215534256.png" alt="" loading="lazy"></p>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230315215217110.png" alt="image-20230315215217110" style="zoom:80%;" />
<p>一般将<code v-pre>运算器和控制器</code>集成到同一个芯片上，称为<code v-pre>中央处理器(CPU)</code>。<code v-pre>CPU和主存储器共同构成主机</code>，而除主机外的其他硬件装置(外存、I/O设备等)统称为外部设备，简称外设。</p>
<p>图1.4 所示为冯・诺依曼结构的模型机。CPU包含ALU、通用寄存器组GPRs、标志寄存器、控制器、指令寄存器IR、程序计数器PC、存储器地址寄存器MAR和存储器数据寄存器MDR。图中从控制器送出的虚线就是控制信号，可以控制如何修改PC以得到下一条指令的地址，可以控制ALU执行什么运算，可以控制主存是进行读操作还是写操作(读/写控制信号)。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230315215413043.png" alt="image-20230315215413043" tabindex="0" loading="lazy"><figcaption>image-20230315215413043</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230315215334452.png" alt="image-20230315215334452" tabindex="0" loading="lazy"><figcaption>image-20230315215334452</figcaption></figure>
<h2 id="计算机硬件的性能指标" tabindex="-1"><a class="header-anchor" href="#计算机硬件的性能指标" aria-hidden="true">#</a> 计算机硬件的性能指标</h2>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230315215716825.png" alt="image-20230315215716825" tabindex="0" loading="lazy"><figcaption>image-20230315215716825</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312031906036.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


