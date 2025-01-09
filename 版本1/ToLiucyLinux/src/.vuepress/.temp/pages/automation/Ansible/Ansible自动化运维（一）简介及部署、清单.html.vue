<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<h2 id="一、自动化运维" tabindex="-1"><a class="header-anchor" href="#一、自动化运维" aria-hidden="true">#</a> 一、自动化运维</h2>
<h3 id="_1-1-什么是自动化运维" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是自动化运维" aria-hidden="true">#</a> 1.1 什么是自动化运维</h3>
<p>  自动化运维是指将日常运维的、大量的重复性工作自动化，把手工执行的工作，通过梳理分析，进行逻辑分解，借助平台或工具转为自动化操作。自动化是IT运维工作的升华，IT运维自动化不单纯是一个维护过程，更是一个管理的提升过程，是运维的更高层次，也是未来的发展趋势。</p>
<h3 id="_1-2-运维自动化解决的问题" tabindex="-1"><a class="header-anchor" href="#_1-2-运维自动化解决的问题" aria-hidden="true">#</a> 1.2 运维自动化解决的问题</h3>
<ul class="task-list-container">
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 项目整体工作效率提升；</label></p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 减少人为误操作；</label></p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 方便信息传递，配置类信息聚合，信息链更完整；</label></p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 事务留痕，方便跟踪，追述；</label></p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 运维工作更加轻松、灵动；</label></p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> 提升运维工作价值，管理更多资源，更多服务对象；</label></p>
</li>
</ul>
<h3 id="_1-3-自动化运维分类工具" tabindex="-1"><a class="header-anchor" href="#_1-3-自动化运维分类工具" aria-hidden="true">#</a> 1.3 自动化运维分类工具</h3>
<ul>
<li>
<p>系统安装：<font color=red>PXE，Cobbler</font></p>
</li>
<li>
<p>应用程序配置：<font color=red>Puppet，Ansible，Saltstack</font></p>
</li>
<li>
<p>命令执行与控制：<font color=red>Fabric，Func，Ansible</font></p>
</li>
<li>
<p>程序发布：<font color=red>git/svn(版本管理)，Jenkins/Gitlab-runner(持续集成)	</font></p>
</li>
</ul>
<h3 id="_1-4-自动化运维工具对比" tabindex="-1"><a class="header-anchor" href="#_1-4-自动化运维工具对比" aria-hidden="true">#</a> 1.4 自动化运维工具对比</h3>
<p>此处只对比Puppet，Ansible，Saltstack</p>
<table>
<thead>
<tr>
<th></th>
<th>Puppet</th>
<th>Saltstack</th>
<th>Ansible</th>
</tr>
</thead>
<tbody>
<tr>
<td>开发语言</td>
<td>Ruby语言</td>
<td>Python语言</td>
<td>Python语言</td>
</tr>
<tr>
<td>是否支持客户端</td>
<td>有</td>
<td>有（salt-ssh无客户端）</td>
<td>无</td>
</tr>
<tr>
<td>是否支持二次开发</td>
<td>不支持</td>
<td>支持</td>
<td>支持</td>
</tr>
<tr>
<td>通信加密</td>
<td>标准的SSL加密</td>
<td>AES加密</td>
<td>OpenSSH</td>
</tr>
<tr>
<td>平台支持</td>
<td>AIX , BSD, HP-UX, Linux , Mac OSX , Solaris, Windows</td>
<td>BSD, Linux , Mac OS X , Solaris, Windows</td>
<td>AIX , BSD , HP-UX , Linux , Mac OS X , Solaris</td>
</tr>
<tr>
<td>是否提供web UI</td>
<td>是</td>
<td>是</td>
<td>商用提供</td>
</tr>
<tr>
<td>配置文件语法</td>
<td>Ruby语法格式</td>
<td>YAML</td>
<td>YAML</td>
</tr>
<tr>
<td>命令行执行</td>
<td>不支持（配置实现）</td>
<td>支持</td>
<td>支持</td>
</tr>
</tbody>
</table>
<h2 id="二、ansible" tabindex="-1"><a class="header-anchor" href="#二、ansible" aria-hidden="true">#</a> 二、Ansible</h2>
<h3 id="_2-1-ansible简介" tabindex="-1"><a class="header-anchor" href="#_2-1-ansible简介" aria-hidden="true">#</a> 2.1 Ansible简介</h3>
<p>  Ansible是一款使用Python开发，模块化，依赖于ssh协议实现的自动化统一配置管理工具，自动化主要体现在Ansible集成了丰富模块以及功能组件，可以通过一个命令完成一系列的操作，进而能减少重复性的工作和维护成本，可以提高工作效率。</p>
<blockquote>
<p>官网地址：<a href="www.ansible.com">www.ansible.com</a></p>
</blockquote>
<h3 id="_2-2-ansible的优势" tabindex="-1"><a class="header-anchor" href="#_2-2-ansible的优势" aria-hidden="true">#</a> 2.2 Ansible的优势</h3>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> 安装部署简单(主控端安装ansible，不需要额外安装客户端)</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> 基于ssh现有协议实现的 (1.3以上)</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> Ansible没有守护进程，不需要启动</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> 日志集中在主控端，方便错误排查</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> 简单易用，不需要有编程基础</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> 通过模块实现，功能强大</label></li>
</ul>
<h3 id="_2-3-ansible的架构" tabindex="-1"><a class="header-anchor" href="#_2-3-ansible的架构" aria-hidden="true">#</a> 2.3 Ansible的架构</h3>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/29d2cf993fb4438ab17883f77714b350.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>1、主机清单Inventory定义Ansible需要操作主机的范围</p>
<p>2、剧本Playbook Ansible的配置文件,将多个任务定义在剧本中，由ansible自动执行</p>
<p>3、核心模块Core Modules连接主机实现操作， 它依赖于具体的模块来做具体的事情</p>
<p>4、自定义模块Custom Modules根据自己的需求编写具体的模块</p>
<p>5、连接插件Connection Plugins用于连接主机 用来连接被管理端</p>
<p>6、插件Plugins完成模块功能的补充</p>
<font color=red>最重要的一点是：Ansible是模块化的，它所有的操作都依赖于模块。</font><h3 id="_2-4-ansible模式" tabindex="-1"><a class="header-anchor" href="#_2-4-ansible模式" aria-hidden="true">#</a> 2.4 Ansible模式</h3>
<p>Ansible中有两种模式：分别是ad-hoc模式和playbook模式；</p>
<ul>
<li>
<p>ad-hoc：简而言之，就是“临时命令”，不会保存；</p>
</li>
<li>
<p>playbook：翻译过来就是剧本，在文件中保存执行的流程；</p>
</li>
</ul>
<p>Ansible与SaltStack对比:</p>
<blockquote>
<p>相同点:</p>
<p>1.都是使用python语言开发的</p>
<p>2.都具有二次开发的特性</p>
<p>3.执行命令都支持Ad-hoc模式  (临时命令，执行完就返回)</p>
<p>4.都可以通过YAML格式文件批量执行</p>
<p>5.返回的结果都是JSON数据，便于后续处理<br></p>
<p>不同点:</p>
<p>1.Ansible部署更简单，没有客户端，而Saltstack有客户端；</p>
<p>2.Saltstack的响应速度要比Ansible更快；Ansible通过SSH协议实现，Saltstack使用了ZeroMQ实现通信;</p>
<p>3.Ansible更加安全，SSH加密传输</p>
<p>4.Saltstack对于Windows支持更友好，Ansible通过Power Shell来管理Windows</p>
<p>5.Ansible维护简单，没有客户端，没有守护进程；saltstack需要有Master和minion,主机要启动一个守护进程。</p>
</blockquote>
<h3 id="_2-5-ansible部署" tabindex="-1"><a class="header-anchor" href="#_2-5-ansible部署" aria-hidden="true">#</a> 2.5 Ansible部署</h3>
<p>Ansible部署时直接使用阿里云的基础源与epel扩展源可以直接安装；</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 先拉取epel扩展源</span>
<span class="token function">wget</span> <span class="token parameter variable">-O</span> /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo

<span class="token comment"># 更新yum源</span>
yum makecache fast


<span class="token comment"># 安装Ansible</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> ansible

<span class="token comment"># 查看Ansible版本</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ansible --version</span>

ansible <span class="token number">2.9</span>.27
  config <span class="token function">file</span> <span class="token operator">=</span> /etc/ansible/ansible.cfg
  configured module search path <span class="token operator">=</span> <span class="token punctuation">[</span>u<span class="token string">'/root/.ansible/plugins/modules'</span>, u<span class="token string">'/usr/share/ansible/plugins/modules'</span><span class="token punctuation">]</span>
  ansible python module location <span class="token operator">=</span> /usr/lib/python2.7/site-packages/ansible
  executable location <span class="token operator">=</span> /usr/bin/ansible
  python version <span class="token operator">=</span> <span class="token number">2.7</span>.5 <span class="token punctuation">(</span>default, Aug  <span class="token number">7</span> <span class="token number">2019</span>, 00:51:29<span class="token punctuation">)</span> <span class="token punctuation">[</span>GCC <span class="token number">4.8</span>.5 <span class="token number">20150623</span> <span class="token punctuation">(</span>Red Hat <span class="token number">4.8</span>.5-39<span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/c9e85ea6314c403ea2baa387df8df410.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="_2-5-1-ansible参数" tabindex="-1"><a class="header-anchor" href="#_2-5-1-ansible参数" aria-hidden="true">#</a> 2.5.1 Ansible参数</h4>
<ul>
<li>常用参数</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token parameter variable">-m</span>          <span class="token comment">#指定使用的模块名称，不指定默认使用command模块</span>
<span class="token parameter variable">-a</span>          <span class="token comment">#使用的模块参数，模块的具体动作；指定要执行的具体命令</span>
--syntax-check      <span class="token comment">#验证语法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>不常用参数</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#不常用参数</span>
<span class="token parameter variable">--version</span>   <span class="token comment">#ansible版本信息</span>
<span class="token parameter variable">-v</span>          <span class="token comment">#显示详细信息</span>
<span class="token parameter variable">-i</span>          <span class="token comment">#主机清单文件路径，默认是在/etc/ansible/hosts</span>
<span class="token parameter variable">-k</span>          <span class="token comment">#提示输入ssh密码，而不使用基于ssh的密钥认证</span>
<span class="token parameter variable">-C</span>          <span class="token comment">#模拟执行测试，但不会真的执行</span>
<span class="token parameter variable">-T</span>          <span class="token comment">#执行命令的超时</span>
<span class="token parameter variable">-f</span>  		<span class="token comment">#一次返回几个结果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>ansible帮助命令</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ansible-doc 		<span class="token comment">#帮助命令 </span>
ansible-doc <span class="token parameter variable">-l</span>   	<span class="token comment">#列出所以的模块</span>
ansible-doc 模块名   <span class="token comment">#查看模块的详细信息</span>
ansible-doc 模块名 <span class="token parameter variable">-s</span>  <span class="token comment">#查看模块的选项使用说明</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-5-2-ansible主机清单" tabindex="-1"><a class="header-anchor" href="#_2-5-2-ansible主机清单" aria-hidden="true">#</a> 2.5.2 Ansible主机清单</h4>
<p>主机资产清单，用于定义被管理主机的认证信息， 例如ssh登录用户名、密码以及key相关信息。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 查看ansible配置文件路径</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># rpm -qc ansible</span>
/etc/ansible/ansible.cfg
/etc/ansible/hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>主机清单位置：<font color=red>默认是/etc/ansible/hosts</font></p>
<p>ansible -i 指定主机清单</p>
<p>在ansible配置文件ansible.cfg中指定默认的主机清单文件，文件路径：<font color=red>/etc/ansible/ansible.cfg</font></p>
</blockquote>
<ul>
<li>ansible.cfg常用配置解析</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>defaults<span class="token punctuation">]</span>
<span class="token comment">#inventory      = /etc/ansible/hosts      #主机列表配置文件</span>
<span class="token comment">#library        = /usr/share/my_modules/  #库文件存放目录</span>
<span class="token comment">#remote_tmp     = ~/.ansible/tmp          #临时py文件存放在远程主机目录</span>
<span class="token comment">#local_tmp      = ~/.ansible/tmp          #本机的临时执行目录</span>
<span class="token comment">#forks          = 5                       #默认并发数</span>
<span class="token comment">#sudo_user      = root                    #默认sudo用户</span>
<span class="token comment">#ask_sudo_pass = True                     #每次执行是否询问sudo的ssh密码</span>
<span class="token comment">#ask_pass      = True                     #每次执行是否询问ssh密码</span>
<span class="token comment">#remote_port    = 22                      #远程主机端口</span>
host_key_checking <span class="token operator">=</span> False                 <span class="token comment">#跳过检查主机指纹</span>
log_path <span class="token operator">=</span> /var/log/ansible.log           <span class="token comment">#ansible日志</span>
 
<span class="token comment">#普通用户提权操作</span>
<span class="token punctuation">[</span>privilege_escalation<span class="token punctuation">]</span>
<span class="token comment">#become=True</span>
<span class="token comment">#become_method=sudo</span>
<span class="token comment">#become_user=root</span>
<span class="token comment">#become_ask_pass=False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不配置<code v-pre>host_key_checking </code> 和 <code v-pre>log_path</code>，会导致报错；<br>
不配置<code v-pre>host_key_checking </code>会导致，执行ansible命令的时候报错：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token number">172.16</span>.11.209 <span class="token operator">|</span> FAILED <span class="token operator">|</span> <span class="token assign-left variable">rc</span><span class="token operator">=</span>-1 <span class="token operator">>></span>
Using a SSH password instead of a key is not possible because Host Key checking is enabled and sshpass does not support this.  Please <span class="token function">add</span> this host's fingerprint to your known_hosts <span class="token function">file</span> to manage this host.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置 <code v-pre>log_path</code> 是为了更好的排查问题所在；</p>
<h4 id="_2-5-3-主机清单配置规则" tabindex="-1"><a class="header-anchor" href="#_2-5-3-主机清单配置规则" aria-hidden="true">#</a> 2.5.3 主机清单配置规则</h4>
<p>（在/etc/ansible/hosts中配置）</p>
<p>主机:</p>
<p>1.可以使用主机名(域名)或IP地址</p>
<p>2.支持主机名通配以及正则表达式</p>
<p>3.支持指定主机定义不同的变量，包括密码，端口号，用户等等</p>
<p><strong>1）单主机配置</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 方式一： ip + 端口 + 用户名 + 用户密码</span>
<span class="token punctuation">[</span>root@localhost ansible<span class="token punctuation">]</span><span class="token comment"># vim /etc/ansible/hosts </span>
<span class="token punctuation">[</span>web01<span class="token punctuation">]</span>
<span class="token number">172.16</span>.11.209 <span class="token assign-left variable">ansible_ssh_port</span><span class="token operator">=</span><span class="token number">22</span> <span class="token assign-left variable">ansible_ssh_user</span><span class="token operator">=</span>root <span class="token assign-left variable">ansible_ssh_pass</span><span class="token operator">=</span><span class="token string">'123123'</span>
<span class="token punctuation">[</span>web02<span class="token punctuation">]</span>
<span class="token number">172.16</span>.10.232 <span class="token assign-left variable">ansible_ssh_port</span><span class="token operator">=</span><span class="token number">22</span> <span class="token assign-left variable">ansible_ssh_user</span><span class="token operator">=</span>root <span class="token assign-left variable">ansible_ssh_pass</span><span class="token operator">=</span><span class="token string">'123123'</span>

<span class="token comment"># 测试：ansible 主机名 -m 指定模块</span>
<span class="token punctuation">[</span>root@localhost ansible<span class="token punctuation">]</span><span class="token comment"># ansible web01 -m ping</span>
<span class="token number">172.16</span>.11.209 <span class="token operator">|</span> SUCCESS <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token string">"ansible_facts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"discovered_interpreter_python"</span><span class="token builtin class-name">:</span> <span class="token string">"/usr/bin/python"</span>
    <span class="token punctuation">}</span>, 
    <span class="token string">"changed"</span><span class="token builtin class-name">:</span> false, 
    <span class="token string">"ping"</span><span class="token builtin class-name">:</span> <span class="token string">"pong"</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span>root@localhost ansible<span class="token punctuation">]</span><span class="token comment"># ansible web02 -m ping</span>
<span class="token number">172.16</span>.10.232 <span class="token operator">|</span> SUCCESS <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token string">"ansible_facts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"discovered_interpreter_python"</span><span class="token builtin class-name">:</span> <span class="token string">"/usr/bin/python"</span>
    <span class="token punctuation">}</span>, 
    <span class="token string">"changed"</span><span class="token builtin class-name">:</span> false, 
    <span class="token string">"ping"</span><span class="token builtin class-name">:</span> <span class="token string">"pong"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/1a42e5136f524d2da8a96b6e934b568c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>如果遇到以下报错：</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/aa24a71963354fa0abcebea311afdf3a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>在ansible.cfg配置文件中开启这两个：（将注释注销了）</p>
<p>host_key_checking = False                 #跳过检查主机指纹<br>
log_path = /var/log/ansible.log           #ansible日志</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 方式二： ip + 用户密码</span>
<span class="token punctuation">[</span>root@localhost ansible<span class="token punctuation">]</span><span class="token comment"># vim /etc/ansible/hosts </span>
<span class="token punctuation">[</span>web01<span class="token punctuation">]</span>
<span class="token number">172.16</span>.11.209 <span class="token assign-left variable">ansible_ssh_pass</span><span class="token operator">=</span><span class="token string">'123123'</span>
<span class="token punctuation">[</span>web02<span class="token punctuation">]</span>
<span class="token number">172.16</span>.10.232 <span class="token assign-left variable">ansible_ssh_pass</span><span class="token operator">=</span><span class="token string">'123123'</span>

<span class="token comment"># 测试：ansible 主机名 -m 指定模块</span>
<span class="token punctuation">[</span>root@localhost ansible<span class="token punctuation">]</span><span class="token comment"># ansible web01 -m ping</span>
<span class="token number">172.16</span>.11.209 <span class="token operator">|</span> SUCCESS <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token string">"ansible_facts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"discovered_interpreter_python"</span><span class="token builtin class-name">:</span> <span class="token string">"/usr/bin/python"</span>
    <span class="token punctuation">}</span>, 
    <span class="token string">"changed"</span><span class="token builtin class-name">:</span> false, 
    <span class="token string">"ping"</span><span class="token builtin class-name">:</span> <span class="token string">"pong"</span>
<span class="token punctuation">}</span>
<span class="token punctuation">[</span>root@localhost ansible<span class="token punctuation">]</span><span class="token comment"># ansible web02 -m ping</span>
<span class="token number">172.16</span>.10.232 <span class="token operator">|</span> SUCCESS <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token string">"ansible_facts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"discovered_interpreter_python"</span><span class="token builtin class-name">:</span> <span class="token string">"/usr/bin/python"</span>
    <span class="token punctuation">}</span>, 
    <span class="token string">"changed"</span><span class="token builtin class-name">:</span> false, 
    <span class="token string">"ping"</span><span class="token builtin class-name">:</span> <span class="token string">"pong"</span>
<span class="token punctuation">}</span>

<span class="token comment">#没有定义用户时，默认使用当前登录用户；</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/f99e4374685d49f8b8123821f9bd4667.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>2）多主机配置</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#IP+端口+密码</span>
<span class="token punctuation">[</span>root@localhost ansible<span class="token punctuation">]</span><span class="token comment"># vim /etc/ansible/hosts </span>
<span class="token punctuation">[</span>web<span class="token punctuation">]</span>
<span class="token number">172.16</span>.11.209 <span class="token assign-left variable">ansible_ssh_port</span><span class="token operator">=</span><span class="token number">22</span> <span class="token assign-left variable">ansible_ssh_user</span><span class="token operator">=</span>root <span class="token assign-left variable">ansible_ssh_pass</span><span class="token operator">=</span><span class="token string">'123123'</span>
<span class="token number">172.16</span>.10.232 <span class="token assign-left variable">ansible_ssh_port</span><span class="token operator">=</span><span class="token number">22</span> <span class="token assign-left variable">ansible_ssh_user</span><span class="token operator">=</span>root <span class="token assign-left variable">ansible_ssh_pass</span><span class="token operator">=</span><span class="token string">'123123'</span>

<span class="token comment"># 测试：ansible 主机名 -m 指定模块</span>
<span class="token punctuation">[</span>root@localhost ansible<span class="token punctuation">]</span><span class="token comment"># ansible web -m ping</span>
<span class="token number">172.16</span>.10.232 <span class="token operator">|</span> SUCCESS <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token string">"ansible_facts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"discovered_interpreter_python"</span><span class="token builtin class-name">:</span> <span class="token string">"/usr/bin/python"</span>
    <span class="token punctuation">}</span>, 
    <span class="token string">"changed"</span><span class="token builtin class-name">:</span> false, 
    <span class="token string">"ping"</span><span class="token builtin class-name">:</span> <span class="token string">"pong"</span>
<span class="token punctuation">}</span>
<span class="token number">172.16</span>.11.209 <span class="token operator">|</span> SUCCESS <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token string">"ansible_facts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"discovered_interpreter_python"</span><span class="token builtin class-name">:</span> <span class="token string">"/usr/bin/python"</span>
    <span class="token punctuation">}</span>, 
    <span class="token string">"changed"</span><span class="token builtin class-name">:</span> false, 
    <span class="token string">"ping"</span><span class="token builtin class-name">:</span> <span class="token string">"pong"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/913eb04c2155496897ecdc262ae34950.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>主机组：</p>
<p>1.嵌套  [组名:children]</p>
<p>2.对组定义变量  [组名:vars]</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#主机组变量+主机+密码</span>
<span class="token punctuation">[</span>root@localhost ansible<span class="token punctuation">]</span><span class="token comment"># vim /etc/ansible/hosts </span>
<span class="token punctuation">[</span>web_group<span class="token punctuation">]</span>
<span class="token number">172.16</span>.11.209
<span class="token number">172.16</span>.10.232

<span class="token punctuation">[</span>web_group:vars<span class="token punctuation">]</span>
<span class="token assign-left variable">ansible_ssh_pass</span><span class="token operator">=</span><span class="token string">'123123'</span>


<span class="token comment"># 测试：ansible 主机名 -m 指定模块</span>
<span class="token punctuation">[</span>root@localhost ansible<span class="token punctuation">]</span><span class="token comment"># ansible web_group -m ping</span>
<span class="token number">172.16</span>.10.232 <span class="token operator">|</span> SUCCESS <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token string">"ansible_facts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"discovered_interpreter_python"</span><span class="token builtin class-name">:</span> <span class="token string">"/usr/bin/python"</span>
    <span class="token punctuation">}</span>, 
    <span class="token string">"changed"</span><span class="token builtin class-name">:</span> false, 
    <span class="token string">"ping"</span><span class="token builtin class-name">:</span> <span class="token string">"pong"</span>
<span class="token punctuation">}</span>
<span class="token number">172.16</span>.11.209 <span class="token operator">|</span> SUCCESS <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token string">"ansible_facts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"discovered_interpreter_python"</span><span class="token builtin class-name">:</span> <span class="token string">"/usr/bin/python"</span>
    <span class="token punctuation">}</span>, 
    <span class="token string">"changed"</span><span class="token builtin class-name">:</span> false, 
    <span class="token string">"ping"</span><span class="token builtin class-name">:</span> <span class="token string">"pong"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#定义多组，多组嵌套</span>

<span class="token comment"># webservers组包括两个子组[apache,nginx]</span>
<span class="token punctuation">[</span>root@localhost ansible<span class="token punctuation">]</span><span class="token comment"># vim /etc/ansible/hosts </span>
<span class="token comment">#定义总ip</span>
<span class="token punctuation">[</span>web_group<span class="token punctuation">]</span>
<span class="token number">172.16</span>.11.209
<span class="token number">172.16</span>.10.232
<span class="token number">172.16</span>.10.129

<span class="token comment">#apache有两台</span>
<span class="token punctuation">[</span>apache<span class="token punctuation">]</span>
<span class="token number">172.16</span>.11.209
<span class="token number">172.16</span>.10.232

<span class="token comment">#nginx有一台</span>
<span class="token punctuation">[</span>nginx<span class="token punctuation">]</span>
<span class="token number">172.16</span>.10.129 <span class="token assign-left variable">ansible_ssh_pass</span><span class="token operator">=</span><span class="token string">'csnginx123'</span>

<span class="token comment">#定义密码</span>
<span class="token punctuation">[</span>apache:vars<span class="token punctuation">]</span>
<span class="token assign-left variable">ansible_ssh_pass</span><span class="token operator">=</span><span class="token string">'123123'</span>

<span class="token punctuation">[</span>web_group:children<span class="token punctuation">]</span>
apache
nginx



<span class="token comment"># 测试：ansible 主机名 -m 指定模块</span>
<span class="token punctuation">[</span>root@localhost ansible<span class="token punctuation">]</span><span class="token comment"># ansible web_group -m ping</span>
<span class="token number">172.16</span>.11.209 <span class="token operator">|</span> SUCCESS <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token string">"ansible_facts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"discovered_interpreter_python"</span><span class="token builtin class-name">:</span> <span class="token string">"/usr/bin/python"</span>
    <span class="token punctuation">}</span>, 
    <span class="token string">"changed"</span><span class="token builtin class-name">:</span> false, 
    <span class="token string">"ping"</span><span class="token builtin class-name">:</span> <span class="token string">"pong"</span>
<span class="token punctuation">}</span>
<span class="token number">172.16</span>.10.232 <span class="token operator">|</span> SUCCESS <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token string">"ansible_facts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"discovered_interpreter_python"</span><span class="token builtin class-name">:</span> <span class="token string">"/usr/bin/python"</span>
    <span class="token punctuation">}</span>, 
    <span class="token string">"changed"</span><span class="token builtin class-name">:</span> false, 
    <span class="token string">"ping"</span><span class="token builtin class-name">:</span> <span class="token string">"pong"</span>
<span class="token punctuation">}</span>
<span class="token number">172.16</span>.10.129 <span class="token operator">|</span> SUCCESS <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token string">"ansible_facts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"discovered_interpreter_python"</span><span class="token builtin class-name">:</span> <span class="token string">"/usr/bin/python"</span>
    <span class="token punctuation">}</span>, 
    <span class="token string">"changed"</span><span class="token builtin class-name">:</span> false, 
    <span class="token string">"ping"</span><span class="token builtin class-name">:</span> <span class="token string">"pong"</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span>root@localhost ansible<span class="token punctuation">]</span><span class="token comment"># ansible apache -m ping</span>
<span class="token number">172.16</span>.11.209 <span class="token operator">|</span> SUCCESS <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token string">"ansible_facts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"discovered_interpreter_python"</span><span class="token builtin class-name">:</span> <span class="token string">"/usr/bin/python"</span>
    <span class="token punctuation">}</span>, 
    <span class="token string">"changed"</span><span class="token builtin class-name">:</span> false, 
    <span class="token string">"ping"</span><span class="token builtin class-name">:</span> <span class="token string">"pong"</span>
<span class="token punctuation">}</span>
<span class="token number">172.16</span>.10.232 <span class="token operator">|</span> SUCCESS <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token string">"ansible_facts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"discovered_interpreter_python"</span><span class="token builtin class-name">:</span> <span class="token string">"/usr/bin/python"</span>
    <span class="token punctuation">}</span>, 
    <span class="token string">"changed"</span><span class="token builtin class-name">:</span> false, 
    <span class="token string">"ping"</span><span class="token builtin class-name">:</span> <span class="token string">"pong"</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span>root@localhost ansible<span class="token punctuation">]</span><span class="token comment"># ansible nginx -m ping</span>
<span class="token number">172.16</span>.10.129 <span class="token operator">|</span> SUCCESS <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token string">"ansible_facts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">"discovered_interpreter_python"</span><span class="token builtin class-name">:</span> <span class="token string">"/usr/bin/python"</span>
    <span class="token punctuation">}</span>, 
    <span class="token string">"changed"</span><span class="token builtin class-name">:</span> false, 
    <span class="token string">"ping"</span><span class="token builtin class-name">:</span> <span class="token string">"pong"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了可以使用密码连接，也可以配置秘钥，实现免密登陆，此时主机配置文件中不需要指定密码</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token number">1</span>.生成密钥对
<span class="token punctuation">[</span>root@localhost ansible<span class="token punctuation">]</span><span class="token comment"># ssh-keygen</span>
 
<span class="token number">2</span>.推送公钥
<span class="token punctuation">[</span>root@localhost ansible<span class="token punctuation">]</span><span class="token comment"># ssh-copy-id 172.16.11.209</span>
<span class="token punctuation">[</span>root@localhost ansible<span class="token punctuation">]</span><span class="token comment"># ssh-copy-id 172.16.10.232</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候配置hosts时就不需要指定密码了。</p>
<h2 id="三、相关文章" tabindex="-1"><a class="header-anchor" href="#三、相关文章" aria-hidden="true">#</a> 三、相关文章</h2>
<table>
<thead>
<tr>
<th style="text-align:center">文章标题</th>
<th style="text-align:center">文章链接</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://liucy.blog.csdn.net/article/details/133769300" target="_blank" rel="noopener noreferrer">Ansible自动化运维（一）简介及部署、清单<ExternalLinkIcon/></a></td>
<td style="text-align:center"><a href="https://liucy.blog.csdn.net/article/details/133769300" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/133769300<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://liucy.blog.csdn.net/article/details/133772023" target="_blank" rel="noopener noreferrer">Ansible自动化运维（二）ad-hoc 模式详解<ExternalLinkIcon/></a></td>
<td style="text-align:center"><a href="https://liucy.blog.csdn.net/article/details/133772023" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/133772023<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://liucy.blog.csdn.net/article/details/133899966" target="_blank" rel="noopener noreferrer">Ansible自动化运维（三）Playbook 模式详解<ExternalLinkIcon/></a></td>
<td style="text-align:center"><a href="https://liucy.blog.csdn.net/article/details/133899966" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/133899966<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://liucy.blog.csdn.net/article/details/133994509" target="_blank" rel="noopener noreferrer">Ansible自动化运维（四）jinja2 模板、Roles角色详解<ExternalLinkIcon/></a></td>
<td style="text-align:center"><a href="https://liucy.blog.csdn.net/article/details/133994509" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/133994509<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
</div></template>


