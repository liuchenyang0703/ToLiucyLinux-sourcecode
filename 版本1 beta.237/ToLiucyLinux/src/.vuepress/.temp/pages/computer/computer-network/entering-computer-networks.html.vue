<template><div><h1 id="计算机网络篇-走进计算机网络" tabindex="-1"><a class="header-anchor" href="#计算机网络篇-走进计算机网络" aria-hidden="true">#</a> 计算机网络篇 | 走进计算机网络</h1>
<p><strong>学习参考：</strong></p>
<p><strong>课件资料及视频课程学习：B站/MOOC计算机网络微课堂(湖科大 高军老师)</strong></p>
<p><strong>提示：本篇内容为计算机网络第1章全章笔记，适合入门学习以及后期复习，建议收藏。</strong></p>
<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2>
<p>大家好，我是Leo🫣🫣🫣，计算机网络是Java网络编程的基础，近期学习Java网络编程跟NIO相关内容，遇到了一些网络的一些相关知识点，我感觉到有点模棱两可，所以还是把大学没学完的计算机网络知识重新捡起来学一遍，也希望这些笔记能帮助到大家。好了，话不多说让我们开始吧😎😎😎。</p>
<h2 id="_2-计算机网络的作用" tabindex="-1"><a class="header-anchor" href="#_2-计算机网络的作用" aria-hidden="true">#</a> 2.计算机网络的作用</h2>
<ul>
<li>计算机网络已由一种<strong>通信基础设施</strong>发展成为一种重要的<strong>信息服务基础设施</strong></li>
<li>计算机网络已经像水，电，煤气这些基础设施一样，成为我们<strong>生活中不可或缺</strong>的一部分</li>
</ul>
<h3 id="_2-1-我国互联网的发展状况" tabindex="-1"><a class="header-anchor" href="#_2-1-我国互联网的发展状况" aria-hidden="true">#</a> 2.1 我国互联网的发展状况</h3>
<p><a href="http://www.cnnic.net.cn" target="_blank" rel="noopener noreferrer">中国互联网络信息中心CNNIC<ExternalLinkIcon/></a></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311054600.png" alt="image-20201006160618748" tabindex="0" loading="lazy"><figcaption>image-20201006160618748</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311054573.png" alt="image-20201006160645887" tabindex="0" loading="lazy"><figcaption>image-20201006160645887</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311054533.png" alt="image-20201006160715764" tabindex="0" loading="lazy"><figcaption>image-20201006160715764</figcaption></figure>
<h3 id="_2-2-计算机网络在信息时代的作用" tabindex="-1"><a class="header-anchor" href="#_2-2-计算机网络在信息时代的作用" aria-hidden="true">#</a> 2.2 计算机网络在信息时代的作用</h3>
<p>在信息时代，计算机网络发挥着至关重要的作用，它对社会、经济和个人的影响非常深远。以下是计算机网络在信息时代中的一些重要作用：</p>
<ol>
<li><strong>全球连接：</strong> 计算机网络使得全球范围内的人们能够实现即时通信和远程协作。通过互联网，人们可以随时随地与世界各地的人进行交流、共享信息和合作工作。这种全球连接的能力极大地促进了全球化和跨国交流。</li>
<li><strong>信息传递和共享：</strong> 计算机网络为信息的传递和共享提供了高效、快速和安全的平台。人们可以通过电子邮件、即时消息、社交媒体和在线协作工具等方式发送和接收信息。无论是个人、组织还是政府，都可以通过计算机网络获得所需的信息，并将自己的信息传播给更广泛的受众。</li>
<li><strong>电子商务：</strong> 计算机网络为电子商务提供了基础设施和平台。人们可以通过互联网购物、进行在线支付，促进了电子商务的迅速发展。电子商务不仅改变了商业模式，也为消费者提供了更多的选择和便利。</li>
<li><strong>在线娱乐和文化：</strong> 计算机网络使得在线娱乐和文化活动变得更加丰富多样。人们可以通过流媒体服务观看电影、电视节目和音乐，通过社交媒体分享生活和兴趣，通过在线游戏进行虚拟交互和娱乐活动。</li>
<li><strong>教育和学习：</strong> 计算机网络为教育提供了巨大的机会和资源。学生可以通过网络获取在线课程、教育资源和学术研究资料。远程教育和在线学习使得教育变得更加灵活和普惠，使得知识和教育机会不再受限于地理位置和时间限制。</li>
<li><strong>科学研究和创新：</strong> 计算机网络为科学研究和创新提供了强大的支持。科学家可以通过网络与全球同行合作，共享数据、研究成果和技术资源。同时，计算机网络也为开发人员和创业者提供了平台，他们可以通过互联网将创新的产品和服务引入市场。</li>
</ol>
<p>总的来说，计算机网络在信息时代中扮演着关键的角色，它连接了世界各地的人们，促进了信息传递和共享，推动了电子商务、教育、科学研究和创新的发展。计算机网络的发展也带来了许多挑战，如网络安全和隐私保护等问题，需要不断的技术创新和政策法规的完善来解决。</p>
<h2 id="_3-因特网概述" tabindex="-1"><a class="header-anchor" href="#_3-因特网概述" aria-hidden="true">#</a> 3.因特网概述</h2>
<h3 id="_3-1-什么是因特网" tabindex="-1"><a class="header-anchor" href="#_3-1-什么是因特网" aria-hidden="true">#</a> 3.1 什么是因特网</h3>
<p>**因特网(Internet)**是全球最大的计算机网络，由各种互联的计算机网络组成。它是一个开放的、去中心化的网络结构，通过使用标准的互联网协议（TCP/IP协议）来实现数据的传输和通信。</p>
<p>因特网最初是由美国国防部在上世纪60年代末发起建立的，目的是为了满足军事和科研领域之间的远程通信需求。随着技术的发展和普及，因特网逐渐向公众开放，并成为全球范围内连接数十亿设备和用户的基础设施。</p>
<p>因特网采用分组交换的通信方式，将数据分割成小的<strong>数据包(packet)</strong>，通过**互联网协议(IP)**进行路由传送。每个数据包都包含了源地址和目标地址的信息，这样可以确保数据能够在网络中找到正确的路径传输。</p>
<p>因特网的核心技术是TCP/IP协议，其中**TCP(Transmission Control Protocol)**负责数据的可靠传输，**IP(Internet Protocol)**负责数据包的寻址和路由。这两个协议的组合使得因特网能够实现高效、灵活、安全的数据传输。</p>
<p>除了传输数据外，因特网还提供了许多其他的服务和应用，如<strong>电子邮件</strong>、<strong>万维网(World Wide Web)</strong>、<strong>即时通信</strong>、<strong>文件传输</strong>等。这些服务和应用都是基于因特网的基础设施构建的，为用户提供了丰富多样的功能和资源。</p>
<p>总的来说，因特网是一个全球范围内互联的计算机网络，通过TCP/IP协议实现数据的传输和通信。它以其开放性、去中心化和高度灵活性而成为信息时代最重要的基础设施之一。</p>
<h3 id="_3-2-网络、互联网和因特网" tabindex="-1"><a class="header-anchor" href="#_3-2-网络、互联网和因特网" aria-hidden="true">#</a> 3.2 网络、互联网和因特网</h3>
<p>网络：网络（Network）由若干**结点（Node）<strong>和连接这些结点的</strong>链路（Link）**组成。</p>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311100345.png" alt="image-20201006163406232" style="zoom: 50%;" />
<p>**互连网(互联网)：**多个网络通过路由器互连起来，这样就构成了一个覆盖范围更大的网络，即互连网（互联网）。因此，互联网又称为<code v-pre>网络的网络(Imetwork of Networks)</code>。</p>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311100261.png" alt="image-20201006163857236" style="zoom:50%;" />
<p><strong>因特网：</strong> 因特网(Internet)是世界上最大的互连网络（用户数以亿计，互连的网络数以百万计）。</p>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311100403.png" alt="image-20201006164114523" style="zoom:50%;" />
<blockquote>
<p><strong>internet与Internet的区别</strong></p>
<ul>
<li><strong>internet(互联网或互连网)<strong>是一个通用名词，它泛指</strong>多个计算机网络互连而成的网络</strong>。在这些网络之间的通信协议可以是任意的。</li>
<li><strong>Internet（因特网）则是一个专用名词</strong>，它指<strong>当前全球最大的、开放的、由众多网络互连而成的特定计算机网络</strong>，它采用TCP/IP协议族作为通信的规则，其前身是美国的ARPANET。</li>
</ul>
<p><strong>任意把几个计算机网络互连起来（不管采用什么协议），并能够相互通信，这样构成的是一个互连网(internet) ，而不是互联网(Internet)。</strong></p>
</blockquote>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311057814.png" alt="image-20201010233227407" tabindex="0" loading="lazy"><figcaption>image-20201010233227407</figcaption></figure>
<h3 id="_3-3-因特网发展的三个阶段" tabindex="-1"><a class="header-anchor" href="#_3-3-因特网发展的三个阶段" aria-hidden="true">#</a> 3.3 因特网发展的三个阶段</h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311100184.png" alt="image-20201006164655173" tabindex="0" loading="lazy"><figcaption>image-20201006164655173</figcaption></figure>
<p><strong>因特网服务提供者<code v-pre>ISP</code>(<code v-pre>I</code>nternet <code v-pre>S</code>ervice <code v-pre>P</code>rovider)</strong></p>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311101693.png" alt="image-20201006165117756" style="zoom:67%;" />
<blockquote>
<p>普通用户是如何接入到因特网的呢？</p>
<p>答：<strong>通过ISP接入因特网</strong></p>
<p>ISP可以从因特网管理机构申请到成块的IP地址，同时拥有通信线路以及路由器等联网设备。任何机构和个人只需缴纳费用，就可从<strong>ISP的得到所需要的IP地址</strong>。</p>
<p><strong>因为因特网上的主机都必须有IP地址才能进行通信，这样就可以通过该ISP接入到因特网</strong></p>
</blockquote>
<p><strong>中国的三大<code v-pre>ISP</code>：中国电信，中国联通和中国移动</strong></p>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311101346.png" alt="image-20201006165738879" style="zoom:67%;" />
<p><strong>基于ISP的三层结构的因特网</strong></p>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311101051.png" alt="image-20201006170140504" style="zoom:67%;" />
<blockquote>
<p>一旦某个用户能够接入到因特网，那么他也可以成为一个ISP，所需要做的就是购买一些如调制解调器或路由器这样的设备，让其他用户可以和他相连。</p>
</blockquote>
<h3 id="_3-4-因特网的标准化工作" tabindex="-1"><a class="header-anchor" href="#_3-4-因特网的标准化工作" aria-hidden="true">#</a> 3.4 因特网的标准化工作</h3>
<ul>
<li>因特网的标准化工作对因特网的发展起到了非常重要的作用。</li>
<li>因特网在指定其标准上的一个很大的特点是<strong>面向公众。</strong>
<ul>
<li>因特网所有的<strong>RFC</strong>(Request For Comments)技术文档都可从因特网上免费下载；</li>
<li>任何人都可以随时用电子邮件发表对某个文档的意见或建议。</li>
</ul>
</li>
<li><strong>因特网协会ISOC</strong>是一个国际性组织，它负责对因特网进行全面管理，以及在世界范围内促进其发展和使用。
<ul>
<li>因特网体系结构委员会IAB，负责管理因特网有关协议的开发；</li>
<li>因特网工程部IETF，负责研究中短期工程问题，主要针对协议的开发和标准化；</li>
<li>因特网研究部IRTF，从事理论方面的研究和开发一些需要长期考虑的问题。</li>
</ul>
</li>
</ul>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311103666.png" alt="image-20201006170959060" style="zoom:67%;" />
<ul>
<li>
<p>制订因特网的正式标准要经过一下<strong>4个阶段</strong>：</p>
<p>1、因特网草案（在这个阶段还不是RFC文档）</p>
<p>2、建议标准（从这个阶段开始就成为RFC文档）</p>
<p>3、草案标准</p>
<p>4、因特网标准</p>
</li>
</ul>
<h3 id="_3-5-因特网的组成" tabindex="-1"><a class="header-anchor" href="#_3-5-因特网的组成" aria-hidden="true">#</a> 3.5 因特网的组成</h3>
<ul>
<li>
<p>边缘部分</p>
<p>由所有连接在因特网上的<strong>主机</strong>组成（台式电脑，大型服务器，笔记本电脑，平板，智能手机等）。这部分是<strong>用户直接使用</strong>的，用来进行<strong>通信</strong>（传送数据、音频或视频）和<strong>资源共享</strong>。</p>
</li>
<li>
<p>核心部分</p>
<p>由<strong>大量网络</strong>和连接这些网络的<strong>路由器</strong>组成。这部分是<strong>为边缘部分提供服务</strong>的（提供连通性和交换）。</p>
</li>
</ul>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311103029.png" alt="image-20201006180725282" style="zoom:67%;" />
<blockquote>
<p>路由器是一种专用计算机，但我们不称它为主机，路由器是实现分组交换的关键构建，其任务是转发收到的分组，这是网络核心最重要的部分。</p>
<p>处在互联网边缘的部分就是连接在互联网上的所有的主机。这些主机又称为<strong>端系统 (end system)</strong>。</p>
<p><strong>端系统在功能上可能有很大的差别：</strong></p>
<ol>
<li>
<p>小的端系统可以是一台普通个人电脑，具有上网功能的智能手机，甚至是一个很小的网络摄像头。</p>
</li>
<li>
<p>大的端系统则可以是一台非常昂贵的大型计算机。</p>
</li>
<li>
<p>端系统的拥有者可以是个人，也可以是单位（如学校、企业、政府机关等），当然也可以是某个ISP。</p>
</li>
</ol>
</blockquote>
<h3 id="_3-6-补充知识" tabindex="-1"><a class="header-anchor" href="#_3-6-补充知识" aria-hidden="true">#</a> 3.6 补充知识</h3>
<p><strong>端系统之间通信的含义</strong></p>
<p><code v-pre>主机A</code> 和 <code v-pre>主机B</code> 进行通信实际上是指：<strong>运行在主机 A 上的某个程序和运行在主机 B 上的另一个程序进行通信</strong>。<strong>即主机</strong> <strong>A</strong> <strong>的某个进程和主机</strong> <strong>B</strong> <strong>上的另一个进程进行通信”。简称为<code v-pre>计算机之间通信</code>。</strong></p>
<p>端系统之间的通信方式通常可划分为两大类：</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311102816.png" alt="image-20201010234145371" tabindex="0" loading="lazy"><figcaption>image-20201010234145371</figcaption></figure>
<p><strong>客户-服务器方式：</strong></p>
<ul>
<li>客户 (client) 和服务器 (server) 都是指通信中所涉及的两个应用进程。</li>
<li>客户 - 服务器方式所描述的是进程之间服务和被服务的关系。</li>
<li>客户是服务的请求方，服务器是服务的提供方。</li>
</ul>
<blockquote>
<p><strong>服务请求方和服务提供方都要使用网络核心部分所提供的服务。</strong></p>
</blockquote>
<p><strong>对等连接方式：</strong></p>
<ul>
<li><strong>对等连接</strong> (peer-to-peer，简写为 <strong>P2P</strong> ) 是指两个主机在通信时并不区分哪一个是服务请求方还是服务提供方。</li>
<li>只要两个主机都运行了对等连接软件 ( P2P 软件) ，它们就可以进行<strong>平等的、对等连接通信</strong>。</li>
<li>双方都可以下载对方已经存储在硬盘中的共享文档。</li>
</ul>
<h2 id="_4-三种交换方式" tabindex="-1"><a class="header-anchor" href="#_4-三种交换方式" aria-hidden="true">#</a> 4.三种交换方式</h2>
<p>计算机网络的三种常见交换方式是电路交换、报文交换和分组交换。</p>
<ol>
<li>电路交换：电路交换是一种建立起端到端通信路径（电路）的交换方式。在通信开始之前，两个通信节点之间的整条路径会被预留下来，直到通信结束才会释放。在此期间，所有数据都沿着这条预留的电路进行传输。这种交换方式适用于需要保证通信质量和实时性的场景，如电话通信。然而，由于资源占用比较高，电路交换在大规模数据通信中并不常用。</li>
<li>报文交换：报文交换是以报文为单位进行交换的方式。发送方将整个报文发送给网络，网络将其存储并转发到目标节点。在报文交换中，报文在网络中的传输是独立的，可以按照任意路径传输，并且不需要预先建立连接。报文交换适用于短消息和小数据量的通信，但由于每次传输都需要整个报文，因此可能会有较高的传输延迟。</li>
<li>分组交换：分组交换是最常用的交换方式，也是互联网所采用的方式。在分组交换中，数据被划分为更小的数据包（分组），每个分组独立传输。发送方将数据划分为分组，并加上目标地址等控制信息，然后发送到网络中。网络根据目标地址将各个分组独立地转发到目标节点，最后在目标节点将分组重新组装成完整的数据。分组交换具有较高的灵活性和资源利用率，因为分组可以按需传输，并且多个分组可以同时在网络中传输。然而，分组交换可能会引入一定的延迟和拥塞问题。</li>
</ol>
<p><strong>这三种交换方式各有优缺点，选择使用哪种方式取决于具体的通信需求和网络条件。在实际应用中，一般采用分组交换来构建大规模的计算机网络，以满足各种类型的通信需求。</strong></p>
<h3 id="_4-1-电路交换-circuit-switching" tabindex="-1"><a class="header-anchor" href="#_4-1-电路交换-circuit-switching" aria-hidden="true">#</a> 4.1 电路交换(Circuit Switching)</h3>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311104502.png" alt="image-20201006182240000" style="zoom:67%;" />
<blockquote>
<p>传统两两相连的方式，当电话数量很多时，电话线也很多，就很不方便</p>
<p>所以要使得每一部电话能够很方便地和另一部电话进行通信，就应该使用一个<strong>中间设备</strong>将这些电话连接起来，这个中间设备就是<strong>电话交换机</strong></p>
</blockquote>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311104212.png" alt="image-20201006182634249" style="zoom:50%;" />
<ul>
<li>
<p>电话交换机接通电话线的方式称为电路交换；</p>
</li>
<li>
<p>从通信资源的分配角度来看，交换（Switching）就是按照某种方式动态地分配传输线路的资源；</p>
</li>
<li>
<p>电路交换的三个步骤：</p>
<p>1、建立连接（分配通信资源）</p>
<p>2、通话（一直占用通信资源）</p>
<p>3、释放连接（归还通信资源）</p>
</li>
</ul>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311104425.png" alt="image-20201006183020317" style="zoom:67%;" />
<blockquote>
<p>当使用电路交换来传送计算机数据时，其线路的传输效率往往很低。</p>
<p>这是因为计算机数据是突发式地出现在传输线路上的。</p>
<p>所以计算机通常采用的是<strong>分组交换</strong>，而不是线路交换</p>
</blockquote>
<h3 id="_4-2-分组交换-packet-switching" tabindex="-1"><a class="header-anchor" href="#_4-2-分组交换-packet-switching" aria-hidden="true">#</a> 4.2 分组交换(Packet Switching)</h3>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311104282.png" alt="image-20201006183312843" style="zoom:67%;" />
<blockquote>
<p>通常我们把表示<strong>该消息的整块数据</strong>成为一个<strong>报文</strong>。</p>
<p>在发送报文之前，先把较长的报文划分成一个个更小的<strong>等长数据段</strong>，在每一个数据段前面。加上一些由必<strong>要的控制信息组成的首部</strong>后，就构成一个分组，也可简称为“包”，相应地，首部也可称为“包头”。</p>
<p>首部包含了<strong>分组的目的地址</strong></p>
<p>分组从源主机到目的主机，可走不同的路径。</p>
</blockquote>
<p>发送方</p>
<ul>
<li>构造分组</li>
<li>发送分组</li>
</ul>
<p>路由器</p>
<ul>
<li>缓存分组</li>
<li>转发分组</li>
<li>简称为<strong>分组转发</strong></li>
</ul>
<blockquote>
<p>在路由器中的输入和输出端口之间没有直接连线。</p>
<p>路由器处理分组的过程是：</p>
<ol>
<li>把收到的分组先<strong>放入缓存（暂时存储）；</strong></li>
<li><strong>查找转发表</strong>，找出到某个目的地址应从哪个端口转发；</li>
<li>把分组送到适当的端口<strong>转发</strong>出去。</li>
</ol>
</blockquote>
<p>接收方</p>
<ul>
<li>接收分组</li>
<li>还原报文</li>
</ul>
<h3 id="_4-3-报文交换-message-switching" tabindex="-1"><a class="header-anchor" href="#_4-3-报文交换-message-switching" aria-hidden="true">#</a> 4.3 报文交换(Message Switching)</h3>
<p>报文交换中的交换结点也采用存储转发方式，但报文交换对报文的大小没有限制，这就要求交换结点需要较大的缓存空间。报文交换主要用于早期的电报通信网，现在较少使用，<strong>通常被较先进的分组交换方式所取代</strong>。</p>
<h3 id="_4-4-三种交换方式的对比" tabindex="-1"><a class="header-anchor" href="#_4-4-三种交换方式的对比" aria-hidden="true">#</a> 4.4 三种交换方式的对比</h3>
<blockquote>
<p>假设A，B，C，D是分组传输路径所要经过的4个结点交换机，纵坐标为时间</p>
</blockquote>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311105924.png" alt="image-20201006184451671" style="zoom:67%;" />
<p>分析：</p>
<p>电路交换：</p>
<ul>
<li>
<p>通信之前首先要建立连接；连接建立好之后，就可以使用已建立好的连接进行数据传送；数据传送后，需释放连接，以归还之前建立连接所占用的通信线路资源。</p>
</li>
<li>
<p>一旦建立连接，中间的各结点交换机就是直通形式的，比特流可以直达终点；</p>
</li>
</ul>
<p>报文交换：</p>
<ul>
<li>可以随时发送报文，而不需要事先建立连接；整个报文先传送到相邻结点交换机，全部存储下来后进行查表转发，转发到下一个结点交换机。</li>
<li>整个报文需要在各结点交换机上进行存储转发，由于不限制报文大小，因此需要各结点交换机都具有较大的缓存空间。</li>
</ul>
<p>分组交换：</p>
<ul>
<li>可以随时发送分组，而不需要事先建立连接。构成原始报文的一个个分组，依次在各结点交换机上存储转发。各结点交换机在发送分组的同时，还缓存接收到的分组。</li>
<li>构成原始报文的一个个分组，在各结点交换机上进行存储转发，相比报文交换，减少了转发时延，还可以避免过长的报文长时间占用链路，同时也有利于进行差错控制。</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311105322.png" alt="image-20201006185601460" tabindex="0" loading="lazy"><figcaption>image-20201006185601460</figcaption></figure>
<h2 id="_5-计算机网络的分类和定义" tabindex="-1"><a class="header-anchor" href="#_5-计算机网络的分类和定义" aria-hidden="true">#</a> 5.计算机网络的分类和定义</h2>
<h3 id="_5-1-定义" tabindex="-1"><a class="header-anchor" href="#_5-1-定义" aria-hidden="true">#</a> 5.1 定义</h3>
<p><strong>计算机网络的定义包含以下几个关键要素：</strong></p>
<ol>
<li>互联的计算机和网络设备：计算机网络由一组计算机和网络设备(如路由器、交换机、调制解调器等)组成，这些设备通过物理链路或无线连接相互通信和交换信息。</li>
<li>数据和资源的共享：计算机网络允许连接在网络中的计算机之间共享数据和资源。这包括文件共享、打印机共享、数据库访问、远程登录等。通过网络共享，用户可以方便地获取和利用其他计算机上的信息和服务。</li>
<li>通信和协作：计算机网络提供了各种通信手段，使连接在网络中的计算机可以相互发送和接收数据。通过网络，用户可以进行电子邮件、即时通信、视频会议等各种形式的远程通信和协作。</li>
<li>系统性：计算机网络是一个有组织的系统，它涉及到物理层面的硬件设备、数据传输的协议、网络管理和安全等方面的技术和实践。</li>
</ol>
<ul>
<li>计算机网络的精确定义并未统一。</li>
<li>计算机网络的最简单的定义是：一些<strong>互</strong>相<strong>连</strong>接的、<strong>自治</strong>的计算机的<strong>集合</strong>。
<ul>
<li>互连：是指计算机之间可以通过有线或无线的方式进行数据通信。</li>
<li>自治：是指独立的计算机，他有自己的硬件和软件，可以单独运行使用。</li>
<li>集合：是指至少需要两台计算机。</li>
</ul>
</li>
<li>计算机网络的较好的定义是：计算机网络主要是由一些<strong>通用的，可编程的硬件（一定包含有中央处理机CPU）互连</strong>而成的，而这些硬件并非专门用来实现某一特定目的（例如，传送数据或视频信号）。这些可编程的硬件能够用来<strong>传送多种不同类型的数据</strong>，并能<strong>支持广泛的和日益增长的应用</strong>。
<ul>
<li>计算机网络所连接的硬件，并不限于一般的计算机，而是包括了智能手机等智能硬件。</li>
<li>计算机网络并非专门用来传送数据，而是能够支持很多种的应用（包括今后可能出现的各种应用）。</li>
</ul>
</li>
</ul>
<h3 id="_5-2-分类" tabindex="-1"><a class="header-anchor" href="#_5-2-分类" aria-hidden="true">#</a> 5.2 分类</h3>
<p><strong>按交换技术分类：</strong></p>
<ul>
<li>电路交换网络</li>
<li>报文交换网络</li>
<li>分组交换网络</li>
</ul>
<p><strong>按使用者分类：</strong></p>
<ul>
<li>公用网</li>
<li>专用网</li>
</ul>
<p><strong>按传输介质分类：</strong></p>
<ul>
<li>有线网络</li>
<li>无线网络</li>
</ul>
<p>计算机网络可以分为有线网络和无线网络两种。有线网络使用电缆等物理介质进行数据传输，包括网线、光纤等；无线网络则使用无线电波进行数据传输，包括WiFi、蓝牙、移动通信等。</p>
<p><strong>按照使用协议分类：</strong></p>
<p>计算机网络可以分为不同的层次和协议，例如OSI参考模型或TCP/IP协议族。其中，OSI参考模型将网络通信划分为七个层次，分别是物理层、数据链路层、网络层、传输层、会话层、表示层和应用层；而TCP/IP协议族则由四个层次构成，分别是网络接口层、网络层、传输层和应用层。</p>
<p><strong>按覆盖范围分类：</strong></p>
<ul>
<li>广域网WAN(Wide Area Network)</li>
</ul>
<p>作用范围通常为几十到几千公里，因而有时也称为远程网(long haul network)。广域网是互联网的核心部分，其任务是通过长距离（例如，跨越不同的国家）运送主机所发送的数据。</p>
<ul>
<li>城域网MAN</li>
</ul>
<p>作用范围一般是一个城市，可跨越几个街区甚至整个城市</p>
<ul>
<li>局域网LAN</li>
</ul>
<p>一般用微型计算机或工作站通过高速通信线路相连**(速率通常在 10 Mbit/s 以上)**，但地理上范围较小(1 km 左右)</p>
<ul>
<li>个域网PAN</li>
</ul>
<p>就是在个人工作的地方把个人使用的电子设备用无线技术连接起来的网络。</p>
<p><strong>按拓扑结构分类：</strong></p>
<ul>
<li>总线型网络</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310312021362.png" alt="image-20231031202103301" tabindex="0" loading="lazy"><figcaption>image-20231031202103301</figcaption></figure>
<ul>
<li>星型网络</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310312021574.png" alt="image-20231031202118503" tabindex="0" loading="lazy"><figcaption>image-20231031202118503</figcaption></figure>
<ul>
<li>环形网络</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310312021539.png" alt="image-20231031202125478" tabindex="0" loading="lazy"><figcaption>image-20231031202125478</figcaption></figure>
<ul>
<li>网状型网络</li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310312021755.png" alt="image-20231031202140692" tabindex="0" loading="lazy"><figcaption>image-20231031202140692</figcaption></figure>
<h2 id="_6-计算机网络的性能指标" tabindex="-1"><a class="header-anchor" href="#_6-计算机网络的性能指标" aria-hidden="true">#</a> 6.计算机网络的性能指标</h2>
<h3 id="_6-1-速率" tabindex="-1"><a class="header-anchor" href="#_6-1-速率" aria-hidden="true">#</a> 6.1 速率</h3>
<p><strong>速率 即数据率或称数据传输率或比特率</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311111364.png" alt="image-20201007012419698" tabindex="0" loading="lazy"><figcaption>image-20201007012419698</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311111384.png" alt="image-20201007012439769" tabindex="0" loading="lazy"><figcaption>image-20201007012439769</figcaption></figure>
<p>需要注意的是，<strong>比特率和数据传输速率之间存在一定的关系</strong>。由于在数据传输过程中还需要传输控制信息、纠错码、协议头等额外的开销，因此实际的数据传输速率会低于比特率。</p>
<p>计算机网络的速率受到多种因素的影响，包括网络的带宽、信道质量、网络拓扑结构、网络设备性能等。更高的速率通常代表着更大的网络带宽和更快的数据传输能力，可以支持更高效的数据交换和通信。</p>
<p>总而言之，计算机网络的速率是指在单位时间内传输的比特数或数据量，通过比特率或数据传输速率来衡量。速率的高低直接影响着网络的传输性能和通信效率。</p>
<h3 id="_6-2-带宽" tabindex="-1"><a class="header-anchor" href="#_6-2-带宽" aria-hidden="true">#</a> 6.2 带宽</h3>
<p>在计算机网络中，带宽(Bandwidth)指的是网络链路传输数据的能力，通常以每秒传输的比特数(bps)来衡量。它表示在单位时间内可以通过网络链路传输的最大数据量。</p>
<p>带宽是一个重要的性能指标，影响着网络传输速度和数据吞吐量。较高的带宽意味着网络可以更快地传输数据，提供更高的数据吞吐能力。</p>
<p>带宽的大小受到多个因素的影响，包括网络链路的物理特性、传输介质的类型和性能、设备的限制等。在有限的带宽资源下，不同设备和应用程序之间需要共享带宽，因此带宽的分配和管理也是网络设计和运维中需要考虑的问题。</p>
<p>带宽通常用以下单位来表示：</p>
<ol>
<li><strong>bps(比特每秒)：</strong> 表示每秒传输的比特数，是最基本的带宽单位。</li>
<li><strong>Kbps(千比特每秒)：</strong> 表示每秒传输的千比特数，等于10^3 bps。</li>
<li><strong>Mbps(兆比特每秒)：</strong> 表示每秒传输的兆比特数，等于10^6 bps。</li>
<li><strong>Gbps(千兆比特每秒)：</strong> 表示每秒传输的千兆比特数，等于10^9 bps。</li>
<li><strong>Tbps(太比特每秒)：</strong> 表示每秒传输的太比特数，等于10^12 bps。</li>
</ol>
<p>需要注意的是，实际网络中的带宽可能受到各种因素的限制和约束，如网络拓扑、设备性能、网络拥塞等。因此，网络的实际传输速度可能会低于链路的理论带宽。在网络设计和应用开发中，需要合理评估和利用可用的带宽资源，以满足用户需求并提供良好的网络体验。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311111432.png" alt="image-20201007012943970" tabindex="0" loading="lazy"><figcaption>image-20201007012943970</figcaption></figure>
<h3 id="_6-3-吞吐量" tabindex="-1"><a class="header-anchor" href="#_6-3-吞吐量" aria-hidden="true">#</a> 6.3 吞吐量</h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311111417.png" alt="image-20201007013119621" tabindex="0" loading="lazy"><figcaption>image-20201007013119621</figcaption></figure>
<blockquote>
<p>带宽1 Gb/s的以太网，代表其额定速率是1 Gb/s，这个数值也是该以太网的<strong>吞吐量的绝对上限值</strong>。因此，对于带宽1 Gb/s的以太网，可能实际吞吐量只有 700 Mb/s，甚至更低。</p>
<p>注意：吞吐量还可以用每秒传送的字节数或帧数表示</p>
</blockquote>
<h3 id="_6-4-时延" tabindex="-1"><a class="header-anchor" href="#_6-4-时延" aria-hidden="true">#</a> 6.4 时延</h3>
<p>时延时指数据（一个报文或分组，甚至比特）从网络（或链路）的一端传送到另一端所需的时间。</p>
<p>网络时延由几部分组成：</p>
<ul>
<li>发送时延</li>
</ul>
<p>主机或路由器发送数据帧所需要的时间，也就是从发送数据帧的第一个比特算起，到该帧的最后一个比特发送完毕所需的时间。</p>
<ul>
<li>传播时延</li>
</ul>
<p>电磁波在信道中传播一定的距离需要花费的时间。</p>
<ul>
<li>处理时延</li>
</ul>
<p>主机或路由器在收到分组时要花费一定时间进行处理</p>
<ul>
<li>排队时延</li>
</ul>
<p>分组在进过网络传输时，要经过许多路由器。但分组在进入路由器后要先在输入队列中排队等待处理。</p>
<blockquote>
<p>有时会把排队时延看成<strong>处理时延 一部分</strong></p>
<p>总时延 = 发送时延 + 传播时延 + 处理时延 （处理时延 + 排队时延）</p>
</blockquote>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311111397.png" alt="image-20201007014139333" tabindex="0" loading="lazy"><figcaption>image-20201007014139333</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311111465.png" alt="image-20201007015401505" tabindex="0" loading="lazy"><figcaption>image-20201007015401505</figcaption></figure>
<blockquote>
<p>当处理时延忽略不计时，发送时延 和 传播时延谁占主导，要具体情况具体分析</p>
</blockquote>
<h3 id="_6-5-时延带宽积" tabindex="-1"><a class="header-anchor" href="#_6-5-时延带宽积" aria-hidden="true">#</a> 6.5 时延带宽积</h3>
<p>时延带宽积 = 传播时延 * 带宽</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311111454.png" alt="image-20201007115317347" tabindex="0" loading="lazy"><figcaption>image-20201007115317347</figcaption></figure>
<h3 id="_6-6-往返时间" tabindex="-1"><a class="header-anchor" href="#_6-6-往返时间" aria-hidden="true">#</a> 6.6 往返时间</h3>
<p>互联网上的信息不仅仅单方向传输而是双向交互的。因此，我们有时很需要知道<strong>双向交互一次所需的时间</strong>。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311111503.png" alt="image-20201007115647631" tabindex="0" loading="lazy"><figcaption>image-20201007115647631</figcaption></figure>
<h3 id="_6-7-利用率" tabindex="-1"><a class="header-anchor" href="#_6-7-利用率" aria-hidden="true">#</a> 6.7 利用率</h3>
<p>利用率有<strong>信道利用率</strong>和<strong>网络利用率</strong>两种。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311111554.png" alt="image-20201012164544306" tabindex="0" loading="lazy"><figcaption>image-20201012164544306</figcaption></figure>
<h3 id="_6-8-丢包率" tabindex="-1"><a class="header-anchor" href="#_6-8-丢包率" aria-hidden="true">#</a> 6.8 丢包率</h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202310311111619.png" alt="image-20201007132900210" tabindex="0" loading="lazy"><figcaption>image-20201007132900210</figcaption></figure>
<h2 id="_7-计算机网络的体系结构" tabindex="-1"><a class="header-anchor" href="#_7-计算机网络的体系结构" aria-hidden="true">#</a> 7.计算机网络的体系结构</h2>
<h3 id="_7-1-常见的计算机网络体系结构" tabindex="-1"><a class="header-anchor" href="#_7-1-常见的计算机网络体系结构" aria-hidden="true">#</a> 7.1 常见的计算机网络体系结构</h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042623.png" alt="image-20201007133848212" tabindex="0" loading="lazy"><figcaption>image-20201007133848212</figcaption></figure>
<blockquote>
<p>如今用的最多的是TCP/IP体系结构，现今规模最大的、覆盖全球的、基于TCP/IP的互联网并未使用OSI标准。</p>
<p>TCP/IP体系结构相当于将OSI体系结构的<strong>物理层</strong>和<strong>数据链路层</strong>合并为了<strong>网络接口层</strong>，并去掉了<strong>会话层</strong>和<strong>表示层</strong>。</p>
<p>TCP/IP在网络层使用的协议是IP协议，IP协议的意思是网际协议，因此<strong>TCP/IP体系结构的网络层称为网际层</strong></p>
</blockquote>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042638.png" alt="image-20201007135220030" tabindex="0" loading="lazy"><figcaption>image-20201007135220030</figcaption></figure>
<blockquote>
<p>在用户主机的操作系统中，通常都带有符合TCP/IP体系结构标准的TCP/IP协议族。</p>
<p>而用于网络互连的路由器中，也带有符合TCP/IP体系结构标准的TCP/IP协议族。</p>
<p>只不过路由器一般只包含网络接口层和网际层。</p>
</blockquote>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042658.png" alt="image-20201007135518050" tabindex="0" loading="lazy"><figcaption>image-20201007135518050</figcaption></figure>
<blockquote>
<p><strong>网络接口层</strong>：并没有规定具体内容，这样做的目的是可以互连全世界各种不同的网络接口，例如：有线的以太网接口，无线局域网的WIFI接口等。</p>
<p><strong>网际层</strong>：它的核心协议是IP协议。</p>
<p><strong>运输层</strong>：TCP和UDP是这层的两个重要协议。</p>
<p><strong>应用层</strong>：这层包含了大量的应用层协议，如 HTTP , DNS 等。</p>
</blockquote>
<blockquote>
<p>**IP协议（网际层）<strong>可以将不同的</strong>网络接口（网络接口层）<strong>进行互连，并向其上的</strong>TCP协议和UDP协议（运输层）**提供网络互连服务</p>
<p>而<strong>TCP协议</strong>在享受IP协议提供的网络互连服务的基础上，可向<strong>应用层的相应协议</strong>提供<strong>可靠</strong>的传输服务。</p>
<p><strong>UDP协议</strong>在享受IP协议提供的网络互连服务的基础上，可向<strong>应用层的相应协议</strong>提供<strong>不可靠</strong>的传输服务。</p>
</blockquote>
<blockquote>
<p>TCP/IP体系结构中最重要的是<strong>IP协议</strong>和<strong>TCP协议</strong>，因此用TCP和IP来表示整个协议大家族。</p>
</blockquote>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042646.png" alt="image-20201007141110338" tabindex="0" loading="lazy"><figcaption>image-20201007141110338</figcaption></figure>
<blockquote>
<p>教学时把TCP/IP体系结构的<strong>网络接口层</strong>分成了<strong>物理层</strong>和<strong>数据链路层</strong></p>
</blockquote>
<h3 id="_7-2-计算机网络体系结构分层的必要性" tabindex="-1"><a class="header-anchor" href="#_7-2-计算机网络体系结构分层的必要性" aria-hidden="true">#</a> 7.2 计算机网络体系结构分层的必要性</h3>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042674.png" alt="image-20201007141318411" tabindex="0" loading="lazy"><figcaption>image-20201007141318411</figcaption></figure>
<p><strong>物理层问题</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042687.png" alt="image-20201007141806675" tabindex="0" loading="lazy"><figcaption>image-20201007141806675</figcaption></figure>
<blockquote>
<p>这图说明</p>
<ul>
<li>第一，严格来说，传输媒体并不属于物理层</li>
<li>计算机传输的信号，并不是图示的方波信号</li>
</ul>
<p>这样举例只是让初学者容易理解</p>
</blockquote>
<p><strong>数据链路层问题</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042510.png" alt="image-20201007142049812" tabindex="0" loading="lazy"><figcaption>image-20201007142049812</figcaption></figure>
<p><strong>网络层问题</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042535.png" alt="image-20201007142408792" tabindex="0" loading="lazy"><figcaption>image-20201007142408792</figcaption></figure>
<p><strong>运输层问题</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042560.png" alt="image-20201007142631029" tabindex="0" loading="lazy"><figcaption>image-20201007142631029</figcaption></figure>
<blockquote>
<p>如何标识与网络通信相关的应用进程：一个分组到来，我们应该交给哪个进程处理呢？浏览器进程还是QQ进程</p>
</blockquote>
<p><strong>应用层问题</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042578.png" alt="image-20201007142755720" tabindex="0" loading="lazy"><figcaption>image-20201007142755720</figcaption></figure>
<blockquote>
<p>应用层该用什么方法（应用层协议）去解析数据</p>
</blockquote>
<p><strong>总结</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042593.png" alt="image-20201007204006284" tabindex="0" loading="lazy"><figcaption>image-20201007204006284</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042615.png" alt="image-20201007143138937" tabindex="0" loading="lazy"><figcaption>image-20201007143138937</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042432.png" alt="image-20201007195641140" tabindex="0" loading="lazy"><figcaption>image-20201007195641140</figcaption></figure>
<h3 id="_7-3-计算机网络体系结构分层思想举例" tabindex="-1"><a class="header-anchor" href="#_7-3-计算机网络体系结构分层思想举例" aria-hidden="true">#</a> 7.3 计算机网络体系结构分层思想举例</h3>
<p>例子：主机的浏览器如何与Web服务器进行通信</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042462.png" alt="image-20201007144900565" tabindex="0" loading="lazy"><figcaption>image-20201007144900565</figcaption></figure>
<p><strong>解析：</strong></p>
<p>主机和Web服务器之间基于网络的通信，实际上是主机中的<strong>浏览器应用进程</strong>与Web服务器中的<strong>Web服务器应用进程</strong>之间基于<strong>网络的通信</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042516.png" alt="image-20201007145242020" tabindex="0" loading="lazy"><figcaption>image-20201007145242020</figcaption></figure>
<p><strong>体系结构的各层在整个过程中起到怎样的作用？</strong></p>
<p><strong>1、发送方发送</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042540.png" alt="image-20201007145441370" tabindex="0" loading="lazy"><figcaption>image-20201007145441370</figcaption></figure>
<blockquote>
<p>第一步：</p>
<ul>
<li><strong>应用层</strong>按照HTTP协议的规定构建一个<strong>HTTP请求报文</strong></li>
<li>应用层将<strong>HTTP请求报文</strong>交付给<strong>运输层</strong>处理</li>
</ul>
</blockquote>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042564.png" alt="image-20201007145720661" tabindex="0" loading="lazy"><figcaption>image-20201007145720661</figcaption></figure>
<blockquote>
<p>第二步：</p>
<ul>
<li><strong>运输层</strong>给<strong>HTTP请求报文</strong>添加一个<strong>TCP首部</strong>，使之成为<strong>TCP报文段</strong></li>
<li><strong>TCP报文段的首部格式</strong>作用是区分应用进程以及实现可靠传输</li>
<li><strong>运输层</strong>将T<strong>CP报文段</strong>交付给<strong>网络层</strong>处理</li>
</ul>
</blockquote>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042587.png" alt="image-20201007150234909" tabindex="0" loading="lazy"><figcaption>image-20201007150234909</figcaption></figure>
<blockquote>
<p>第三步：</p>
<ul>
<li><strong>网络层</strong>给<strong>TCP报文段</strong>添加一个<strong>IP首部</strong>，使之成为<strong>IP数据报</strong></li>
<li><strong>IP数据报的首部格式</strong>作用是使<strong>IP数据报</strong>可以在互联网传输，也就是被路由器转发</li>
<li><strong>网络层</strong>将<strong>IP数据报</strong>交付给<strong>数据链路层</strong>处理</li>
</ul>
</blockquote>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042391.png" alt="image-20201007150723365" tabindex="0" loading="lazy"><figcaption>image-20201007150723365</figcaption></figure>
<blockquote>
<p>第四步：</p>
<ul>
<li><strong>数据链路层</strong>给<strong>IP数据报</strong>添加一个<strong>首部</strong>和一个<strong>尾部</strong>，使之成为<strong>帧</strong>     （图示右边为首部，左边为尾部）</li>
<li>该<strong>首部</strong>的作用主要是为了让<strong>帧</strong>能够在一段链路上或一个网络上传输，能够被相应的目的主机接收</li>
<li>该<strong>尾部</strong>的作用是让目的主机检查所接收到的<strong>帧</strong>是否有误码</li>
<li><strong>数据链路层</strong>将<strong>帧</strong>交付给<strong>物理层</strong></li>
</ul>
</blockquote>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042421.png" alt="image-20201007151342502" tabindex="0" loading="lazy"><figcaption>image-20201007151342502</figcaption></figure>
<blockquote>
<p>第五步：</p>
<ul>
<li><strong>物理层</strong>先将<strong>帧</strong>看做是<strong>比特流</strong>，这里的网络N1假设是以太网，所以<strong>物理层</strong>还会给该<strong>比特流</strong>前面添加<strong>前导码</strong></li>
<li><strong>前导码</strong>的作用是为了让目的主机做好接收帧的准备</li>
<li><strong>物理层</strong>将装有<strong>前导码</strong>的<strong>比特流</strong>变换成相应的<strong>信号</strong>发送给传输媒体</li>
</ul>
</blockquote>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042447.png" alt="image-20201007151900254" tabindex="0" loading="lazy"><figcaption>image-20201007151900254</figcaption></figure>
<blockquote>
<p>第六步：</p>
<ul>
<li><strong>信号</strong>通过<strong>传输媒体</strong>到达<strong>路由器</strong></li>
</ul>
</blockquote>
<p><strong>2、路由器转发</strong></p>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042462.png" alt="image-20201007152029458" style="zoom:50%;" />
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042475.png" alt="image-20201007152138961" style="zoom:50%;" />
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042492.png" alt="image-20201007152627778" style="zoom:50%;" />
<blockquote>
<p>在路由器中</p>
<ul>
<li><strong>物理层</strong>将<strong>信号</strong>变为<strong>比特流</strong>，然后去掉<strong>前导码</strong>后，将其交付给<strong>数据链路层</strong></li>
<li><strong>数据链路层</strong>将<strong>帧</strong>的<strong>首部</strong>和<strong>尾部</strong>去掉后，将其交付给<strong>网络层</strong>，这实际交付的是<strong>IP数据报</strong></li>
<li><strong>网络层</strong>解析<strong>IP数据报</strong>的<strong>首部</strong>，从中提取<strong>目的网络地址</strong></li>
</ul>
</blockquote>
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042057.png" alt="image-20201007152650863" style="zoom:50%;" />
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042071.png" alt="image-20201007152812431" style="zoom:50%;" />
<img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042087.png" alt="image-20201007153714840" style="zoom:50%;" />
<blockquote>
<p>在路由器中</p>
<ul>
<li>提取<strong>目的网络地址</strong>后查找<strong>自身路由表</strong>。确定<strong>转发端口</strong>， 以便进行转发</li>
<li><strong>网络层</strong>将<strong>IP数据报</strong>交付给<strong>数据链路层</strong></li>
<li><strong>数据链路层</strong>给<strong>IP数据报</strong>添加一个<strong>首部</strong>和一个<strong>尾部</strong>，使之成为<strong>帧</strong></li>
<li><strong>数据链路层</strong>将帧交付给<strong>物理层</strong></li>
<li><strong>物理层</strong>先将<strong>帧</strong>看成<strong>比特流</strong>，这里的网络N2假设是以太网，所以<strong>物理层</strong>还会给该<strong>比特流</strong>前面添加<strong>前导码</strong></li>
<li>物理层将装有<strong>前导码</strong>的<strong>比特流</strong>变换成相应的<strong>信号</strong>发送给传输媒体，信号通过传输媒体到达<strong>Web服务器</strong></li>
</ul>
</blockquote>
<p><strong>3、接收方接收</strong></p>
<blockquote>
<p>和发送方（主机）发送过程的封装正好是反着来</p>
<p>在Web 服务器上</p>
<ul>
<li><strong>物理层</strong>将<strong>信号</strong>变换为<strong>比特流</strong>，然后去掉<strong>前导码</strong>后成为<strong>帧</strong>，交付给<strong>数据链路层</strong></li>
<li><strong>数据链路层</strong>将<strong>帧</strong>的<strong>首部</strong>和<strong>尾部</strong>去掉后成为<strong>IP数据报</strong>，将其交付给<strong>网络层</strong></li>
<li><strong>网络层</strong>将<strong>IP数据报</strong>的<strong>首部</strong>去掉后成为<strong>TCP报文段</strong>，将其交付给<strong>运输层</strong></li>
<li><strong>运输层</strong>将<strong>TCP报文段</strong>的<strong>首部</strong>去掉后成为<strong>HTTP请求报文</strong>，将其交付给<strong>应用层</strong></li>
<li><strong>应用层</strong>对<strong>HTTP请求报文</strong>进行<strong>解析</strong>，然后给主机发回<strong>响应报文</strong></li>
</ul>
<p><strong>发回响应报文的步骤和之前过程类似</strong></p>
</blockquote>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042103.png" alt="image-20201007155051275" tabindex="0" loading="lazy"><figcaption>image-20201007155051275</figcaption></figure>
<h3 id="_7-4-计算机网络体系结构中的专用术语" tabindex="-1"><a class="header-anchor" href="#_7-4-计算机网络体系结构中的专用术语" aria-hidden="true">#</a> 7.4 计算机网络体系结构中的专用术语</h3>
<p>以下介绍的专用术语来源于OSI的七层协议体系结构，但也适用于TCP/IP的四层体系结构和五层协议体系结构</p>
<p><strong>实体</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042127.png" alt="image-20201007155444920" tabindex="0" loading="lazy"><figcaption>image-20201007155444920</figcaption></figure>
<p><strong>协议</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042158.png" alt="image-20201007155545934" tabindex="0" loading="lazy"><figcaption>image-20201007155545934</figcaption></figure>
<blockquote>
<p>协议：控制两个对等实体进行逻辑通信的规则的集合</p>
<p>协议三要素：</p>
<ul>
<li>语法：定义所交换信息的格式</li>
<li>语义：定义收发双方所要完成的操作</li>
<li>同步：定义收发双发的时序关系</li>
</ul>
</blockquote>
<p><strong>服务</strong></p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042310.png" alt="image-20201007160246561" tabindex="0" loading="lazy"><figcaption>image-20201007160246561</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042775.png" alt="image-20201016104750288" tabindex="0" loading="lazy"><figcaption>image-20201016104750288</figcaption></figure>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131042808.png" alt="image-20201007162620250" tabindex="0" loading="lazy"><figcaption>image-20201007162620250</figcaption></figure>
<h2 id="_8-文献参考" tabindex="-1"><a class="header-anchor" href="#_8-文献参考" aria-hidden="true">#</a> 8.文献参考</h2>
<ul>
<li><a href="https://zh.wikipedia.org/zh-hans/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C" target="_blank" rel="noopener noreferrer">https://zh.wikipedia.org/zh-hans/计算机网络<ExternalLinkIcon/></a></li>
<li><a href="https://www.runoob.com/w3cnote/summary-of-network.html" target="_blank" rel="noopener noreferrer">https://www.runoob.com/w3cnote/summary-of-network.html<ExternalLinkIcon/></a></li>
<li><a href="https://lfool.gitbook.io/computer-network/di-yi-zhang-wang-luo-ji-chu-zhi-shi" target="_blank" rel="noopener noreferrer">https://lfool.gitbook.io/computer-network/di-yi-zhang-wang-luo-ji-chu-zhi-shi<ExternalLinkIcon/></a></li>
<li><a href="https://www.bilibili.com/video/BV1c4411d7jb/?p=7&amp;spm_id_from=pageDriver&amp;vd_source=cea816a08805c218ac4390ae9b61ae31" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1c4411d7jb/?p=7&amp;spm_id_from=pageDriver&amp;vd_source=cea816a08805c218ac4390ae9b61ae31<ExternalLinkIcon/></a></li>
</ul>
<h2 id="_9-总结" tabindex="-1"><a class="header-anchor" href="#_9-总结" aria-hidden="true">#</a> 9.总结</h2>
<p>以上便是本文的全部内容，本人才疏学浅，文章有什么错误的地方，欢迎大佬们批评指正！我是<strong>Leo</strong>，一个在互联网行业的小白，立志成为更好的自己。</p>
<p>如果你想了解更多关于<strong>Leo</strong>，可以关注公众号-程序员Leo，后面文章会首先同步至公众号。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312131041290.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


