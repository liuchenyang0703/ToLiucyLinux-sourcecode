<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180922736.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<br>
<h2 id="一、防火墙的基础概念" tabindex="-1"><a class="header-anchor" href="#一、防火墙的基础概念" aria-hidden="true">#</a> 一、防火墙的基础概念</h2>
<h3 id="_1、防火墙的概念与应用" tabindex="-1"><a class="header-anchor" href="#_1、防火墙的概念与应用" aria-hidden="true">#</a> 1、防火墙的概念与应用</h3>
<p>  网络中的防火墙，是一种将内部网络和外部网络分开的方法，是一种隔离技术。防火墙在内网与外网通信时进行访问控制，依据所设置的规则对数据包作出判断，最大限度地阻止网络中的黑客破坏企业网络，从而加强企业网络安全。</p>
<h3 id="_2、包过滤的工作层次" tabindex="-1"><a class="header-anchor" href="#_2、包过滤的工作层次" aria-hidden="true">#</a> 2、包过滤的工作层次</h3>
<p>  主要是网络层，针对IP数据包，体现对包内的IP地址、端口等信息的处理上。</p>
<h2 id="二、iptables的四表五链" tabindex="-1"><a class="header-anchor" href="#二、iptables的四表五链" aria-hidden="true">#</a> 二、iptables的四表五链</h2>
<blockquote>
<p>表中存放的是链，链中存放的是规则</p>
</blockquote>
<p><strong><font color=teal size=4>四表：优先级：filter&lt;nat&lt;mangle&lt;raw</font></strong></p>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>raw表</td>
<td>确定是否对该数据包进行状态跟踪；有限级最高，设置raw是一般是为了不在iptables做数据包的链接跟踪处理，提高性能</td>
</tr>
<tr>
<td>mangle表</td>
<td>为数据包设置标记；负责对数据包进行修改和追踪</td>
</tr>
<tr>
<td>NAT表</td>
<td>修改数据包中的源、目标IP地址或端口；负责地址转发</td>
</tr>
<tr>
<td>filter表</td>
<td>确定是否被放行该数据包（过滤)；负责包过滤（默认）</td>
</tr>
</tbody>
</table>
<p><strong><font color=teal size=4>链表结构关系图：</font></strong></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180926677.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong><font color=teal size=4>五链：</font></strong></p>
<table>
<thead>
<tr>
<th></th>
<th></th>
<th>小写</th>
</tr>
</thead>
<tbody>
<tr>
<td>INPUT</td>
<td>处理<font color=red>入站</font>数据包</td>
<td>input</td>
</tr>
<tr>
<td>OUTPUT</td>
<td>处理<font color=red>出站</font>数据包</td>
<td>output</td>
</tr>
<tr>
<td>FORWARD</td>
<td>处理<font color=red>转发</font>数据包</td>
<td>forward</td>
</tr>
<tr>
<td>PREROUTING</td>
<td>在进行<font color=red>路由选择前</font>处理数据包</td>
<td>prerouting</td>
</tr>
<tr>
<td>POSTROUTING</td>
<td>在进行<font color=red>路由选择后</font>处理数据包</td>
<td>postrouting</td>
</tr>
</tbody>
</table>
<p>规则链之间的顺序:</p>
<blockquote>
<p>入站: PREROUTING→INPUT                  <font color=red>路由选择前→入站</font><br>
出站:OUTPUT→POSTROUTING<font color=red>               出站→路由选择后</font><br>
转发:PREROUTING→FORWARD→POSTROUTING<font color=red>  路由选择前→转发→路由选择后</font><br></p>
</blockquote>
<font color=reds> 不管是路由入站还是转发，都要选择路由选择前
不管是路由出站还是转发，都要选择路由选择后</font>
<h2 id="三、iptables命令" tabindex="-1"><a class="header-anchor" href="#三、iptables命令" aria-hidden="true">#</a> 三、iptables命令</h2>
<h3 id="_1、语法结构" tabindex="-1"><a class="header-anchor" href="#_1、语法结构" aria-hidden="true">#</a> 1、语法结构</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token punctuation">[</span>-t 表名<span class="token punctuation">]</span> 选项<span class="token operator">&amp;</span>参数 <span class="token punctuation">[</span>链名<span class="token punctuation">]</span><span class="token punctuation">[</span>匹配条件<span class="token punctuation">]</span><span class="token punctuation">[</span>-j 动作控制类型<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>保存更新配置iptables</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables-save <span class="token operator">></span> /etc/sysconfig/iptables
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意事项:<br>
  不指定表名时，默认指filter表<br>
  不指定链名时，默认指表内的所有链<br>
  除非设置链的默认策略，否则必须指定匹配条件<br>
  选项、链名、控制类型使用大写字母，其余均为小写</p>
<font color=teal>数据包的常见控制类型/动作类型：-j</font><table>
<thead>
<tr>
<th>类型</th>
<th>解析</th>
</tr>
</thead>
<tbody>
<tr>
<td>ACCEPT</td>
<td>允许通过</td>
</tr>
<tr>
<td>DROP</td>
<td>直接丢弃，不给出任何回应</td>
</tr>
<tr>
<td>REJECT</td>
<td>拒绝通过，必要时会给出提示</td>
</tr>
<tr>
<td>LOG</td>
<td>记录日志信息，然后传给下一条规则继续匹配</td>
</tr>
</tbody>
</table>
<h3 id="_2、iptables的选项参数及实例" tabindex="-1"><a class="header-anchor" href="#_2、iptables的选项参数及实例" aria-hidden="true">#</a> 2、iptables的选项参数及实例</h3>
<p><strong><font color=teal>选项及参数：</font></strong></p>
<table>
<thead>
<tr>
<th>选项&amp;参数</th>
<th>解析</th>
</tr>
</thead>
<tbody>
<tr>
<td>-t</td>
<td>指定表，默认filter</td>
</tr>
<tr>
<td>-A</td>
<td>追加一条规则  -A 链名 [序号] 匹配条件 -j 动作</td>
</tr>
<tr>
<td>-I</td>
<td>插入一条规则  -I 链名 [序号] 匹配条件 -j 动作；默认第一行（也可以自己指定序号）</td>
</tr>
<tr>
<td>-R</td>
<td>修改规则  -R 链名 序号 匹配条件 -j 动作</td>
</tr>
<tr>
<td>-D</td>
<td>删除指定规则  -D 链名 序号 （-s &lt;IP地址&gt; -j &lt;目标&gt;）</td>
</tr>
<tr>
<td>-P</td>
<td>设置默认规则  -P 链名 动作(ACCEPT,DROP,REJECT,LOG)</td>
</tr>
<tr>
<td>-p</td>
<td>指定协议  TCP，UDP，ICMP；--sport	指定源端口	；--dport	指定目标端口</td>
</tr>
<tr>
<td>-L</td>
<td>查看防火墙规则，后可以指定链</td>
</tr>
<tr>
<td>-F</td>
<td>清空防火墙规则；也可以指定清空某一个表的所有规则</td>
</tr>
<tr>
<td>-v</td>
<td>以更详细的方式显示规则信息</td>
</tr>
<tr>
<td>-n</td>
<td>以数字形式显示；要和-L配合看</td>
</tr>
<tr>
<td>--line-numbers或--line</td>
<td>显示规则编号；要和-L配合看</td>
</tr>
<tr>
<td>-s</td>
<td>指定源地址</td>
</tr>
<tr>
<td>-d</td>
<td>指定目标地址</td>
</tr>
<tr>
<td>-i</td>
<td>指定网卡</td>
</tr>
<tr>
<td>-m</td>
<td>指定模块，没有指定模块，默认使用与-p选项同名的模块</td>
</tr>
</tbody>
</table>
<p><strong><font color=teal>实例：</font></strong></p>
<p>1、-t：指定查看raw表</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-t</span> raw <span class="token parameter variable">-L</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、-A \-s\-j：追加一条规则，使192.168.2.2禁止访问</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-s</span> <span class="token number">192.168</span>.2.2 <span class="token parameter variable">-j</span> REJECT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、-I\-s\-j：插入一条规则，允许访问192.168.2.2</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-s</span> <span class="token number">192.168</span>.2.2 <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4、-R\-s\-j：第一条规则，修改为丢弃192.168.2.2；将第二条prot的udp改为icmp并且开放</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-R</span> INPUT <span class="token number">1</span> <span class="token parameter variable">-s</span> <span class="token number">192.168</span>.2.2 <span class="token parameter variable">-j</span> DROP

iptables <span class="token parameter variable">-R</span> INPUT <span class="token number">2</span> <span class="token parameter variable">-p</span> icmp <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、-D：删除一条指定行数的规则</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-D</span> INPUT <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>6、-D：删除一条指定ip的规则</p>
<p>简单来说就是删除的时候把 <code v-pre>-I 或者 -A</code> 改为 <code v-pre>-D</code>，其他的都还和添加的一样。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-D</span> INPUT <span class="token parameter variable">-s</span> <span class="token number">192.168</span>.2.2 <span class="token parameter variable">-j</span> DROP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>7、-L：查看防火墙规则，后可以指定链</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#查看所有防火墙规则</span>
iptables <span class="token parameter variable">-L</span> 

<span class="token comment">#指定链：查看入站防火墙规则</span>
iptables <span class="token parameter variable">-L</span> INPUT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8、-F：清空防火墙规则 ；也可以指定清空某一个表的所有规则</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-F</span>

iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>9、-n：以数字形式显示；要和-L配合看</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-L</span> <span class="token parameter variable">-n</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>10、-v：已更详细的方式查看规则信息</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-L</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>11、--line-numbers或--line：显示规则编号；要和-L配合看</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-L</span> --line-numbers

iptables <span class="token parameter variable">-L</span> <span class="token parameter variable">--line</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、iptables规则的匹配类型" tabindex="-1"><a class="header-anchor" href="#四、iptables规则的匹配类型" aria-hidden="true">#</a> 四、iptables规则的匹配类型</h2>
<br>
<p>1、通用匹配<br>
  可直接使用，不依赖与其他条件或扩展<br>
  包括网络协议、IP地址、网络接口等条件<br></p>
<p>2、隐含匹配<br>
  要求以特定的协议匹配作为前提<br>
  包含端口、TCP标记、ICMP类型等条件<br></p>
<p>3、显式匹配<br>
  要求以“-m扩展模块”的形式明确指出类型<br>
  包括多端口、MAC地址、IP范围、数据包状态等条件<br>
<br></p>
<p>常用管理选项汇总表：</p>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180925106.png" alt="" loading="lazy"><br>
<br></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180925035.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<br>
<h3 id="_1、通用匹配" tabindex="-1"><a class="header-anchor" href="#_1、通用匹配" aria-hidden="true">#</a> 1、通用匹配</h3>
<blockquote>
<p>常见的通用匹配条件：<br>
  协议匹配：-p 协议名<br>
  地址匹配：-s 源地址、-d 目的地址<br>
  接口匹配：-i 入站网卡、-o 出站网卡</p>
</blockquote>
<h4 id="_1-1、协议匹配" tabindex="-1"><a class="header-anchor" href="#_1-1、协议匹配" aria-hidden="true">#</a> 1.1、协议匹配</h4>
<font color=grep>协议匹配：-p 协议名</font><p><strong><font color=sjldiwei>允许所有的TCP协议进入</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180925588.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong><font color=sjldiwei>删除指定协议匹配规则：</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-D</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=sjldiwei>除了icmp协议其他协议都丢弃</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-I</span> FORWARD <span class="token operator">!</span> <span class="token parameter variable">-p</span> icmp <span class="token parameter variable">-j</span> DROP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180925018.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_1-2、地址匹配" tabindex="-1"><a class="header-anchor" href="#_1-2、地址匹配" aria-hidden="true">#</a> 1.2、地址匹配</h4>
<font color=grep>地址匹配：-s 源地址、-d 目的地址</font><p><strong><font color=sjldiwei>允许访问ip地址192.168.2.2</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 插入一条</span>
iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-s</span> <span class="token number">192.168</span>.2.2 <span class="token parameter variable">-j</span> ACCEPT

<span class="token comment"># 追加一条</span>
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-s</span> <span class="token number">192.168</span>.2.2 <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180925932.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong><font color=sjldiwei>删除指定ip规则</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-D</span> INPUT <span class="token parameter variable">-s</span> <span class="token number">192.168</span>.2.2 <span class="token parameter variable">-j</span> DROP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=sjldiwei>丢弃192.168.1.0/24网段的ip</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-s</span> <span class="token number">192.168</span>.1.0/24 <span class="token parameter variable">-j</span> DROP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180925612.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong><font color=sjldiwei>访问地址将地址转发到目标地址“192.168.2.22”并且开放</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-A</span> FORWARD <span class="token parameter variable">-d</span> <span class="token number">192.168</span>.2.22 <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180925731.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_1-3、接口匹配" tabindex="-1"><a class="header-anchor" href="#_1-3、接口匹配" aria-hidden="true">#</a> 1.3、接口匹配</h4>
<font color=grep>接口匹配：-i 入站网卡、-o 出站网卡</font><p><strong><font color=sjldiwei>将eth1的网卡在入站时丢弃</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-i</span> eth1 <span class="token parameter variable">-j</span> DROP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180925828.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong><font color=sjldiwei>删除指定接口规则</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-D</span> INPUT <span class="token parameter variable">-i</span> eth1 <span class="token parameter variable">-j</span> DRO
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><font color=sjldiwei>将eth1的网卡在出站时丢弃</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-I</span> OUTPUT <span class="token parameter variable">-o</span> eth1 <span class="token parameter variable">-j</span> DROP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180925759.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_2、隐含匹配" tabindex="-1"><a class="header-anchor" href="#_2、隐含匹配" aria-hidden="true">#</a> 2、隐含匹配</h3>
<blockquote>
<p>常见的隐含匹配条件：<br>
  端口匹配：-p来指定，--sport 源端口、--dport目的端口<br>
  TCP匹配：--tcp-flags 检查范围 被设置的标记<br>
  ICMP匹配：--icmp-type ICMP类型</p>
</blockquote>
<h4 id="_2-1、端口匹配" tabindex="-1"><a class="header-anchor" href="#_2-1、端口匹配" aria-hidden="true">#</a> 2.1、端口匹配</h4>
<font color=grep>端口匹配：-p来指定，--sport 源端口、--dport目的端口</font><p><strong><font color=sjldiwei>将源网段设置为udp协议且目标端口为53，并开启地址转发</font></strong><br>
<strong><font color=sjldiwei>将目标网段设置为udp协议且源端口为53，并开启地址转发</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-A</span> FORWARD <span class="token parameter variable">-s</span> <span class="token number">192.16</span>.2.2/24 <span class="token parameter variable">-p</span> udp <span class="token parameter variable">--dport</span> <span class="token number">53</span> <span class="token parameter variable">-j</span> ACCEPT

iptables <span class="token parameter variable">-A</span> FORWARD <span class="token parameter variable">-d</span> <span class="token number">192.16</span>.2.2/24 <span class="token parameter variable">-p</span> udp <span class="token parameter variable">--sport</span> <span class="token number">53</span> <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180925167.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong><font color=sjldiwei>将源网段“192.16.2.0/24”设置为tcp协议且目标端口为53，并开启地址转发</font></strong><br>
<strong><font color=sjldiwei>将目标网段“192.16.2.0/24”设置为tcp协议且源端口为53，并开启地址转发</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-A</span> FORWARD <span class="token parameter variable">-s</span> <span class="token number">192.16</span>.2.0/24 <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">53</span> <span class="token parameter variable">-j</span> ACCEPT

iptables <span class="token parameter variable">-A</span> FORWARD <span class="token parameter variable">-d</span> <span class="token number">192.16</span>.2.0/24 <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--sport</span> <span class="token number">53</span> <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180925175.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong><font color=sjldiwei>开放TCP协议且目标端口为22，允许进入</font></strong><br>
<strong><font color=sjldiwei>开放TCP协议且目标端口为20-21，允许进入</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">22</span> <span class="token parameter variable">-j</span> ACCEPT

iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">20</span>:21 <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180924375.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_2-2、tcp匹配" tabindex="-1"><a class="header-anchor" href="#_2-2、tcp匹配" aria-hidden="true">#</a> 2.2、TCP匹配</h4>
<font color=grep>TCP匹配：--tcp-flags 检查范围 被设置的标记</font><p><strong><font color=sjldiwei>指定eth1网卡，port设置为tcp协议，检查范围为SYN、RST、ACK，监测到的都丢弃</font></strong></p>
<p><strong><font color=sjldiwei>指定eth1网卡，port设置为tcp协议，除了检查范围中的SYN、RST、ACK，其他都可以进入</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-i</span> eth1 <span class="token parameter variable">-p</span> tcp --tcp-flags SYN,RST,ACK SYN <span class="token parameter variable">-j</span> DROP

iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-i</span> eth1 <span class="token parameter variable">-p</span> tcp <span class="token operator">!</span> --tcp-flags SYN,RST,ACK SYN <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180924464.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_2-3、icmp匹配" tabindex="-1"><a class="header-anchor" href="#_2-3、icmp匹配" aria-hidden="true">#</a> 2.3、ICMP匹配</h4>
<font color=grep>ICMP匹配：--icmp-type ICMP类型</font><blockquote>
<p>常见的 icmp 类型<br>
  8  Echo request——回显请求（Ping 请求）<br>
  0  Echo Reply——回显应答（Ping 应答）<br>
  3  错误回显</p>
</blockquote>
<p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180924694.png" alt="" loading="lazy"><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180924921.png" alt="" loading="lazy"><br>
<img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180924520.png" alt="" loading="lazy"></p>
<p>获取帮助：<font color=red>iptables -p icmp -h</font></p>
<h3 id="_3、显式匹配" tabindex="-1"><a class="header-anchor" href="#_3、显式匹配" aria-hidden="true">#</a> 3、显式匹配</h3>
<blockquote>
<p>常见的显式匹配条件：<br>
  多端口匹配：-m multiport --sports | --dports 端口列表<br>
  IP范围匹配：-m iprange --src-range IP范围<br>
  MAC地址匹配：-m mac --mac-source MAC地址<br>
  状态匹配：-m state --state 连接状态</p>
</blockquote>
<h4 id="_3-1、多端口匹配" tabindex="-1"><a class="header-anchor" href="#_3-1、多端口匹配" aria-hidden="true">#</a> 3.1、多端口匹配</h4>
<font color=grep>多端口匹配：-m multiport --sports | --dports 端口列表</font><p><strong><font color=sjldiwei>允许22、25、80、110、143端口进入并开启tcp协议</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> multiport <span class="token parameter variable">--dport</span> <span class="token number">22,25</span>,80,110,143 <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180924210.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_3-2、ip范围匹配" tabindex="-1"><a class="header-anchor" href="#_3-2、ip范围匹配" aria-hidden="true">#</a> 3.2、IP范围匹配</h4>
<font color=grep>IP范围匹配：-m iprange --src-range IP范围</font><p><strong><font color=sjldiwei>允许192.168.1.100-192.168.1.110这个范围的ip进入并设置tcp协议</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-A</span> FORWARD <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> iprange --src-range <span class="token number">192.168</span>.1.100-192.168.1.110 <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180924204.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_3-3、mac地址匹配" tabindex="-1"><a class="header-anchor" href="#_3-3、mac地址匹配" aria-hidden="true">#</a> 3.3、MAC地址匹配</h4>
<font color=grep>MAC地址匹配：-m mac --mac-source MAC地址</font><p><strong><font color=sjldiwei>只要mac地址是00:0c:29:c2:83:32的都丢弃</font></strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-A</span> FORWARD <span class="token parameter variable">-m</span> mac --mac-source 00:0c:29:c2:83:32 <span class="token parameter variable">-j</span> DROP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180924675.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_3-4、状态匹配" tabindex="-1"><a class="header-anchor" href="#_3-4、状态匹配" aria-hidden="true">#</a> 3.4、状态匹配</h4>
<font color=grep>状态匹配：-m state --state 连接状态</font><blockquote>
<p>常见的连接状态：<br>
  NEW：新连接，与任何连接无关<br>
  ESTABLISHED：响应请求或已建立连接的<br>
  RELATED：与已连接有相关性的，如 FTP 数据连接</p>
</blockquote>
<h2 id="五、iptables-规则的删除" tabindex="-1"><a class="header-anchor" href="#五、iptables-规则的删除" aria-hidden="true">#</a> 五、iptables 规则的删除</h2>
<p>简单来说就是删除的时候把<code v-pre>-I 或者 -A</code>改为<code v-pre>-D</code>，其他的都还和添加的一样。</p>
<h3 id="_1、删除一条指定行数的规则" tabindex="-1"><a class="header-anchor" href="#_1、删除一条指定行数的规则" aria-hidden="true">#</a> 1、删除一条指定行数的规则</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>iptables <span class="token parameter variable">-D</span> INPUT <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2、删除一条指定ip的规则" tabindex="-1"><a class="header-anchor" href="#_2、删除一条指定ip的规则" aria-hidden="true">#</a> 2、删除一条指定ip的规则</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 追加一条禁止ip访问规则</span>
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-s</span> <span class="token number">192.168</span>.2.2 <span class="token parameter variable">-j</span> DROP

<span class="token comment"># 删除一条禁止ip访问规则</span>
iptables <span class="token parameter variable">-D</span> INPUT <span class="token parameter variable">-s</span> <span class="token number">192.168</span>.2.2 <span class="token parameter variable">-j</span> DROP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、删除指定协议匹配规则" tabindex="-1"><a class="header-anchor" href="#_3、删除指定协议匹配规则" aria-hidden="true">#</a> 3、删除指定协议匹配规则</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 先添加一条指定协议同意访问</span>
iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-j</span> ACCEPT

<span class="token comment"># 删除一条指定协议匹配规则</span>
iptables <span class="token parameter variable">-D</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、删除指定接口规则" tabindex="-1"><a class="header-anchor" href="#_4、删除指定接口规则" aria-hidden="true">#</a> 4、删除指定接口规则</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 先添加一条指定接口禁止访问</span>
iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-i</span> eth1 <span class="token parameter variable">-j</span> DROP

<span class="token comment"># 在删除指定接口禁止访问</span>
iptables <span class="token parameter variable">-D</span> INPUT <span class="token parameter variable">-i</span> eth1 <span class="token parameter variable">-j</span> DROP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>发现规律了吗？<br>
简单来说就是删除的时候把<code v-pre>-I 或者 -A</code>改为<code v-pre>-D</code>，其他的都还和添加的一样。</p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180924465.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章" aria-hidden="true">#</a> 相关文章</h2>
<blockquote>
<p><a href="https://liucy.blog.csdn.net/article/details/125968904" target="_blank" rel="noopener noreferrer">🍎【Linux】iptables之防火墙概述及规则匹配+实例（1）<ExternalLinkIcon/></a></p>
<hr>
<p><a href="https://liucy.blog.csdn.net/article/details/126243322" target="_blank" rel="noopener noreferrer">🍌【Linux】iptables之防火墙的应用及案例、策略、备份与还原（2）<ExternalLinkIcon/></a></p>
<hr>
<p><a href="https://liucy.blog.csdn.net/article/details/126243544" target="_blank" rel="noopener noreferrer">🍐【Linux】firewall-cmd之防火墙简介及常用命令+实例<ExternalLinkIcon/></a></p>
</blockquote>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412180923943.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


