<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者</a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主</a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主</a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区</a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<h2 id="一、ansible-中的-playbook-模式" tabindex="-1"><a class="header-anchor" href="#一、ansible-中的-playbook-模式"><span>一、Ansible 中的 Playbook 模式</span></a></h2>
<p>  Playbook不同于使用单个模块操作远程服务器，Playbook的功能更加强大。如果说单个模块执行类似于Linux系统中的命令，那么Playbook就类似于shell脚本，将多个模块组合起来实现一组的操作。</p>
<p><code v-pre>Playbook</code>还是会用到<code v-pre>ad-hoc</code>模式中的模块及参数，只不过<code v-pre>Playbook与ad-hoc</code>的写法不一样。</p>
<h3 id="_1-1-playbook-的优势" tabindex="-1"><a class="header-anchor" href="#_1-1-playbook-的优势"><span>1.1 Playbook 的优势</span></a></h3>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 功能比<code v-pre>ad-hoc</code>更全</label></li>
</ul>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 能很好的控制先后执行顺序, 以及依赖关系</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 语法展现更加的直观</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> ad-hoc无法持久使用，playbook可以持久使用</label></li>
</ul>
<h3 id="_1-2-playbook-的组成" tabindex="-1"><a class="header-anchor" href="#_1-2-playbook-的组成"><span>1.2 Playbook 的组成</span></a></h3>
<p><code v-pre>play</code>：一个完整的部署任务，并且必须包含以下前两项:</p>
<p>  <code v-pre>hosts</code>：定义对哪些主机进程操作</p>
<p>  <code v-pre>tasks</code>：定义的是具体执行的任务</p>
<p>  <code v-pre>become</code>：表示是否要以特权用户（通常是root）身份执行任务。如果设置为<code v-pre>yes</code>，则任务会以特权身份执行。</p>
<p><code v-pre>playbook</code>: 由一个或多个<code v-pre>play</code>组成，一个play可以包含多个<code v-pre>task</code>任务</p>
<font color=red>说明：`Ansible` 中的 `Playbook` 文件结尾为`.yml` 格式</font><p>示例httpd.yml：安装httpd；</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">apache</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  hosts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">web</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  become</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">yes</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  tasks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Install httpd Server</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      yum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">httpd</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">present</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解析：</p>
<p><code v-pre>name</code>：定义一个Playbook的名称，用于标识Playbook的用途；</p>
<p><code v-pre>hosts</code>：指定要在哪个主机上执行，也是写主机或主机组名，需要提前在<code v-pre>/etc/ansible/hosts</code>中配置好；</p>
<p><code v-pre>become</code>：yes表示使用特权用户；</p>
<p><code v-pre>tasks</code>：属于是一个任务列表，主要写具体执行什么的（可以有多个）；</p>
<p>  <code v-pre>name</code>：每个任务的名称，用于描述干什么的；上述yml中则是<code v-pre>安装httpd服务</code>；</p>
<p>  <code v-pre>yum</code>：表示使用哪个模块来进行操作；<code v-pre>模块的参数可以看ad-hoc中的，用的都是一样的，写法不一样就是；</code></p>
<p>    <code v-pre>name</code>：要安装的服务名称，我们这里是httpd：</p>
<p>    <code v-pre>state</code>：要进行的操作，可以是安装、卸载、更新；</p>
<p>其实<code v-pre>tasks</code>就是Ansible的模块以YAML语法写入到playbook中。</p>
<p>生产环境中为了可读性与可维护性通常一个playbook中只编写一个play，如果某些主机需要执行多个play,那么可以使用include关键字在一个playbook中导入其他的playbook。</p>
<h3 id="_1-3-playbook-命令" tabindex="-1"><a class="header-anchor" href="#_1-3-playbook-命令"><span>1.3 Playbook 命令</span></a></h3>
<p>格式：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ansible-playbook</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [选项] playbook.yml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>常用选项：</p>
<table>
<thead>
<tr>
<th>选项/参数</th>
<th>选项/参数 解析</th>
</tr>
</thead>
<tbody>
<tr>
<td>-T</td>
<td>建立SSH连接的超时时间</td>
</tr>
<tr>
<td>-i</td>
<td>指定Inventory文件</td>
</tr>
<tr>
<td>-f</td>
<td>并发执行的进程数，默认为5</td>
</tr>
<tr>
<td>- -list-hosts</td>
<td>匹配的服务器列表</td>
</tr>
<tr>
<td>- -list-tasks</td>
<td>列出任务列表</td>
</tr>
<tr>
<td>- -step</td>
<td>每执行一个任务后停止，等待用户确认</td>
</tr>
<tr>
<td>- -syntax-check</td>
<td>语法检测</td>
</tr>
<tr>
<td>- -list-tags</td>
<td>列出此yml文件中的所有tag标签</td>
</tr>
<tr>
<td>- -skip-tags</td>
<td>执行–skip-tags之外的标签任务</td>
</tr>
<tr>
<td>-C</td>
<td>检查当前这个Playbook是否会修改受控端，模拟执行</td>
</tr>
</tbody>
</table>
<h3 id="_1-4-playbook-的语法" tabindex="-1"><a class="header-anchor" href="#_1-4-playbook-的语法"><span>1.4 Playbook 的语法</span></a></h3>
<ul>
<li>权限</li>
</ul>
<p><code v-pre>remote_user</code>指定<code v-pre>playbook</code>运行时的用户身份，可以写在hosts下，也可以每个tasks做定义；</p>
<p><code v-pre>become  </code>该选项为布尔值，当等于yes表示以管理员身份通常与<code v-pre>become_method</code>一起使用；</p>
<p><code v-pre>become_method</code>：su或sudo</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 指定使用哪个用户执行此任务</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">remote_user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 是否使用特权用户</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">become</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">yes</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>通知与触发</li>
</ul>
<p><code v-pre>notify</code> 如果指定的操作执行了，会触发<code v-pre>handlers</code>的操作，指定的是handler的名称；</p>
<p><code v-pre>handlers</code>和<code v-pre>notify</code>指定的名称必须相同，否则无法触发。</p>
<p><code v-pre>handlers</code> 中需要<code v-pre>- name</code>指定名称	，<code v-pre>handlers</code>只会在所有的<code v-pre>tasks</code>执行完后执行，并且，即便一个<code v-pre>handlers</code>被触发多次，也只会执行一次。 <code v-pre>handlers</code>是一种特殊的<code v-pre>tasks</code>。</p>
<ul>
<li>handlers（触发事件）</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">notify:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 触发</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">handlers：触发的动作</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 两者的名称一定要相同，否则无法触发。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用上场景：一般都是修改配置文件时</p>
<p>正常情况时handlers是不会执行的，除非触发任务，才会执行</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">hosts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">web</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  tasks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">installredis</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    yum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">name=redis</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">copyfile</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">src=redis.conf dest=/etc/redis.conf</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    tags</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">copyfile</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    notify</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">restart</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		# 触发：触发名称</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">start</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">     service</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">       name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">redis</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">       state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">started</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">       enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">yes</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  handlers</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:				</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 触发动作</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">restart</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">     service</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">       name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">redis</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">       state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">restarted</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-playbook-中的变量" tabindex="-1"><a class="header-anchor" href="#_1-5-playbook-中的变量"><span>1.5 Playbook 中的变量</span></a></h3>
<blockquote>
<p>  变量提供了便捷的方式来管理<code v-pre>Ansible playbook</code>的每一个项目中的动态值，比如nginx-1.6.3这个软件包的版本，在其它地方或许会反复使用，那么如果将此值设置为变量，然后再在其他的playbook中调用，会方便许多。如此一来还方便维护，减少维护的成本。</p>
</blockquote>
<ul>
<li>变量的定义方式</li>
</ul>
<p>1.通过<code v-pre>命令行</code>进行变量定义</p>
<p>2.在<code v-pre>play文件</code>中进行变量定义</p>
<p>3.通过<code v-pre>Inventory主机信息</code>文件中进行变量定义</p>
<font color=red>变量读取的优先级为: `命令行 > playbook文件 > Inventory`文件</font><ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 通过vars定义变量</label></li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">LAMP</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  hosts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">web</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  vars</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    packages_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">httpd</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">mariadb-server</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">php</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">php-mysql</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  tasks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">install LAMP</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      yum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">         name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"{{packages_name}}"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">         state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">present</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行此yml：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 语法校验</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ansible-playbook</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --syntax-check</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> LAMP.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行yml</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ansible-playbook</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> LAMP.yml（定义的yml文件名）</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> 通过vars_files定义变量</label></li>
</ul>
<p>当变量较少时，使用vars定义没有问题，当变量较多时，可以将变量保存到一个独立的文件中；</p>
<p>需要多个yml文件，一个主文件，需要调用其他yml独立文件，主要是最后运行的；其他是定义包名的yml文件。</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#定义阶段</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># my_vars.yml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">httpd_package</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">httpd</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">mariadb_package</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">mariadb-server</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#调用阶段</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># apache.yml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">apache</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  hosts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">web</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  become</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">yes</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  vars_files</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">my_vars.yml</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # 引入变量文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  tasks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Install httpd</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      yum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"{{ httpd_package }}"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">present</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      become</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">yes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Install mariadb-server</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      yum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"{{ mariadb_package }}"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">present</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      become</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">yes</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行此yml：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 语法校验</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ansible-playbook</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --syntax-check</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apache.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行yml</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ansible-playbook</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apache.yml（定义的yml文件名）</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> 官方推荐定义变量方法</label></li>
</ul>
<p>之前的几种变量定义都不是很好用，比较好用的是在Ansible项目目录下创建两个变量目录：</p>
<p>host_vars</p>
<p>group_vars</p>
<p>目录名字一定要一致，不能做任何修改。</p>
<p>  理解如何设置和使用<code v-pre>host_vars</code>和<code v-pre>group_vars</code>可以使你的Ansible管理更加灵活和有组织。以下是更详细的步骤，从设置目录结构到创建Playbook的执行：</p>
<ol>
<li>
<p><strong>目录结构</strong>：<br>
在你的Ansible项目目录下，确保设置以下目录结构：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>your_ansible_project/</span></span>
<span class="line"><span>├── group_vars/</span></span>
<span class="line"><span>│   └── web-servers.yml</span></span>
<span class="line"><span>├── host_vars/</span></span>
<span class="line"><span>│   └── web-server.yml</span></span>
<span class="line"><span>├── playbook.yml</span></span>
<span class="line"><span>└── inventory.ini</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>group_vars</code>目录用于存放组级别的变量定义。</li>
<li><code v-pre>host_vars</code>目录用于存放主机级别的变量定义。</li>
<li><code v-pre>playbook.yml</code>是你的Ansible Playbook。</li>
<li><code v-pre>inventory.ini</code>是Ansible的主机清单文件，其中列出了你的主机和主机组。</li>
</ul>
</li>
<li>
<p><strong>清单文件 (<code v-pre>inventory.ini</code>)</strong>：<br>
确保在清单文件中定义了你的主机和主机组。例如：</p>
<p><code v-pre>vim /etc/ansible/inventory.ini</code></p>
<div class="language-ini line-numbers-mode" data-highlighter="shiki" data-ext="ini" data-title="ini" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<p>[web-servers]<br>
172.16.11.209 ansible_ssh_port=22 ansible_ssh_user=root ansible_ssh_pass='123123'</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>3. **组级别变量 (`group_vars/web-servers.yml`)**：</span></span>
<span class="line"><span>在`group_vars`目录下创建一个YAML文件，例如`web-servers.yml`，并在其中定义组级别的变量，如：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>`mkdir -p /etc/ansible/group_vars &#x26;&#x26; vim /etc/ansible/group_vars/web-servers.yml`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>```yaml</span></span>
<span class="line"><span># group_vars/web-servers.yml</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>httpd_package: httpd</span></span>
<span class="line"><span>mariadb_package: mariadb-server</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>
<p><strong>主机级别变量 (<code v-pre>host_vars/web-server.yml</code>)</strong>：<br>
在<code v-pre>host_vars</code>目录下创建一个YAML文件，例如<code v-pre>web-server.yml</code>，并在其中定义主机级别的变量，如：</p>
<p><code v-pre>mkdir -p /etc/ansible/host_vars &amp;&amp; vim /etc/ansible/host_vars/web-servers.yml</code></p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># host_vars/web-server.yml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">http_port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">80</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>Playbook (<code v-pre>playbook.yml</code>)</strong>：<br>
创建你的Ansible Playbook，例如：</p>
<p><code v-pre>vim /etc/ansible/playbook.yml</code></p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Configure Web Server</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  hosts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">web-servers</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  become</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">yes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  tasks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Install HTTPd</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      yum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"{{ httpd_package }}"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">present</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Start HTTPd</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      service</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">httpd</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">started</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>运行Playbook</strong>：<br>
使用以下命令运行你的Playbook：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ansible-playbook</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> inventory.ini</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> playbook.yml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<p>此时，Ansible会自动加载<code v-pre>group_vars</code>和<code v-pre>host_vars</code>目录中的变量，你的Playbook将使用这些变量来配置主机。</p>
<p>通过这种方式，你可以更加有组织地管理变量，特别是对于多主机和多组的环境。你可以为不同的组或主机设置特定的变量，而不必在Playbook中硬编码这些值，提高了可维护性和可读性。</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> 命令行定义变量</label></li>
</ul>
<p>ansible-playbook命令提供-e选项，用于在命令行定义变量，命令行定义变量的优先级最高。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost yml]# cat /etc/ansible/hosts</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[web]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">172.16.11.209</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[web:vars]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">ansible_ssh_pass</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'123123'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行：命令行定义变量</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost yml]# vim test.yml</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">---</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apache</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  hosts:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> web</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  become:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> yes</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  vars:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    httpd_package:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">       -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> httpd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  tasks:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> httpd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> service</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      yum:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "{{ httpd_package }}"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        state:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> present</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#定义阶段</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@ansible ~]# ansible-playbook test.yml -e </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"web_server=vsftpd"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6-变量注册" tabindex="-1"><a class="header-anchor" href="#_1-6-变量注册"><span>1.6 变量注册</span></a></h3>
<p>  当anbsible的模块在运行之后，其实都会返回一些result结果，就像是执行脚本，我们有的时候需要脚本给我们一些return返回值，我们才知道，上一步是否可以执行成功，但是默认情况下，ansible的result并不会显示出来，所以，我们可以把这些返回值'存储'到变量中，这样我们就能通过'调用'对应的变量名，从而获取到这些result，这种将模块的返回值，写入到变量中的方法被称为变量注册。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@ansible ~]# vim register.yml</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">---</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> hosts:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> web</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  tasks:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> define</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> var1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      shell:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "whoami"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      register:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> user_name</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> msg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      debug:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        msg:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "{{ user_name }}"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> stdout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> msg</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      debug:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        msg:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "{{ user_name.stdout_lines }}"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost yml]# ansible-playbook register.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">PLAY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [web] ****************************************************************************************************************************************************</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">TASK</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [Gathering </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Facts]</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> ****************************************************************************************************************************************</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ok:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [172.16.11.209]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">TASK</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [define </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> var1]</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> ******************************************************************************************************************************************</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">changed:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [172.16.11.209]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">TASK</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [get </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">msg]</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> ************************************************************************************************************************************************</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ok:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [172.16.11.209] => {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    "msg"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        "changed"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> true</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">,</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        "cmd"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "whoami",</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        "delta"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "0:00:00.004924",</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        "end"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "2023-10-12 23:21:29.231407",</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        "failed"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> false</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">,</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        "rc"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 0,</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        "start"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "2023-10-12 23:21:29.226483",</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        "stderr"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "",</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        "stderr_lines"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [], </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        "stdout"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "root",</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        "stdout_lines"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">            "root"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">TASK</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [get </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">stdout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> msg]</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> *****************************************************************************************************************************************</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ok:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [172.16.11.209] => {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    "msg"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        "root"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">PLAY</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> RECAP</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> ****************************************************************************************************************************************************</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">172.16.11.209</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">              :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ok=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">4</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    changed=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    unreachable=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    failed=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    skipped=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    rescued=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    ignored=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明:</p>
<p><code v-pre>debug</code>：模块常用参数</p>
<p><code v-pre>msg</code>：    #调试输出的消息</p>
<p><code v-pre>var</code>:      #将某个任务执行的输出作为变量传递给debug模块，debug会直接将其打印输出</p>
<p><code v-pre>verbosity</code>:    #debug的级别（默认是0级，全部显示）</p>
<h3 id="_1-7-debug-模块-将上一步任务执行的结果打印出来" tabindex="-1"><a class="header-anchor" href="#_1-7-debug-模块-将上一步任务执行的结果打印出来"><span>1.7 debug 模块：将上一步任务执行的结果打印出来</span></a></h3>
<p>将上一步任务执行的结果打印出来，不管成功还是失败都会返回；</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">debug测试</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  hosts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">all</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  remote_user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  tasks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">查看root目录下的文件</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">     command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ls /root</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">     register</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root_directory_contents</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # 存储命令输出</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">输出的结果</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">     debug</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">       var</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root_directory_contents.stdout_lines</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/885e636225a249ddbfd6d95101b59752.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_1-8-facts-缓存" tabindex="-1"><a class="header-anchor" href="#_1-8-facts-缓存"><span>1.8 facts 缓存</span></a></h3>
<p>  Ansible facts是在被管理主机上通过Ansible自动采集发现的变量。facts包含每台特定的主机信息。比如：被控端的主机名、IP地址、系统版本、CPU数量、内存状态、磁盘状态等等。</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> facts变量的使用场景</label></li>
</ul>
<ol>
<li>
<p>通过facts缓存检查CPU，来生成对应的nginx配置文件</p>
</li>
<li>
<p>通过facts缓存检查主机名，生成不同的zabbix配置文件</p>
</li>
<li>
<p>通过facts缓存检索物理机的内存大小来生成不同的mysql配置文件</p>
</li>
</ol>
<p>可以使用setup模块查看facts变量列表:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost yml]# ansible nginx -m setup </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">172.16.11.209</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">SUCCESS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> => </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    "ansible_facts"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        "ansible_all_ipv4_addresses"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">            "172.17.0.1"</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">            "172.16.11.209"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        ], </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        "ansible_all_ipv6_addresses"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">            "fe80::20c:29ff:feaf:dbfa"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        ], </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">		   以下省略…</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在playbook中引用facts变量：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost ansible]# vim /etc/ansible/hosts </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[web]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">172.16.11.209</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[web:vars]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">ansible_ssh_pass</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'123123'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># yml文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost yml]# cat facts.yml </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> hosts:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> web</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  tasks:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> shell:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {{ ansible_os_family }}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      register:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> my_vars</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> debug:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        var:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> my_vars.stdout_lines</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost yml]# ansible-playbook facts.yml </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">PLAY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [web] ****************************************************************************************************************************************************</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">TASK</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [Gathering </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Facts]</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> ****************************************************************************************************************************************</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ok:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [172.16.11.209]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">TASK</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [shell] **************************************************************************************************************************************************</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">changed:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [172.16.11.209]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">TASK</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [debug] **************************************************************************************************************************************************</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ok:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [172.16.11.209] => {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    "my_vars.stdout_lines"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        "RedHat"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">PLAY</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> RECAP</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> ****************************************************************************************************************************************************</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">172.16.11.209</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">              :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ok=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    changed=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    unreachable=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    failed=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    skipped=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    rescued=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    ignored=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#在playbook中，可以通过gather_facts选项控制是否收集远程主机，默认值为yes</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、playbook-中的流程控制" tabindex="-1"><a class="header-anchor" href="#二、playbook-中的流程控制"><span>二、Playbook 中的流程控制</span></a></h2>
<h3 id="_2-1-条件" tabindex="-1"><a class="header-anchor" href="#_2-1-条件"><span>2.1 条件</span></a></h3>
<p>  在所有的编程语言流程控制语句中，条件语句是必不可少的，在使用Ansible的过程中，条件判断的使用频率极其高。</p>
<p>例如：</p>
<ul class="task-list-container">
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> 使用不同的系统的时候，可以通过判断系统来对软件包进行安装。</label></p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> 在nfs和rsync安装过程中，客户端服务器不需要推送配置文件，之前我们都是写多个play，会影响效率。</label></p>
</li>
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> 在源码安装nginx的时候，执行第二遍就无法执行了，此时我们就可以进行判断是否安装过。</label></p>
</li>
</ul>
<font color=red>playbook中的条件判断语句使用`when`</font><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">tasks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#官方案例</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"shut down Debian flavored systems"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/sbin/shutdown -t now</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    when</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ansible_facts['os_family'] == "Debian"</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # note that all variables can be used directly in conditionals without double curly braces</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">hosts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">web_group</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  tasks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Install CentOS Httpd</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      yum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">httpd</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">present</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    #官方</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      when</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ansible_facts['os_family'] == "CentOS"</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    #非官方</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      when</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ansible_distribution == "CentOS"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Install Ubuntu Httpd</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      yum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">apache2</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">present</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        when</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ansible_facts['os_family'] == "Ubuntu"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以使用括号对条件进行分组</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">tasks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"shut down CentOS 6 and Debian 7 systems"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/sbin/shutdown -t now</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    when</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">(ansible_facts['distribution'] == "CentOS" and ansible_facts['distribution_major_version'] == "6") or</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          (ansible_facts['distribution'] == "Debian" and ansible_facts['distribution_major_version'] == "7")</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以指定多条件为列表</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tasks:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> name:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "shut down CentOS 6 systems"</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    command</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /sbin/shutdown</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> now</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    when:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ansible_facts['distribution']</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ==</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "CentOS"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ansible_facts['distribution_major_version']</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ==</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "6"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>条件运算</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tasks:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> shell:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "only on Red Hat 6, derivatives, and later"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    when:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ansible_facts['os_family']</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ==</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "RedHat"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> and</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ansible_facts['distribution_major_version ']</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">|</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 6</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root@localhost yml</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]# </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">vim when.yml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">hosts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">web</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  remote_user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">   #代表用root用户执行，默认是root，可以省略</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  tasks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">createfile</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    copy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">content="test3" dest=/etc/ansible/yml/when.yml</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    when</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">a=='3'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">createfile</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    copy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">content="test4" dest=/etc/ansible/yml/when.yml</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    when</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">a=='4'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>如果a&quot;3&quot;，就将“test3”，写入到web组下被管控机的/etc/ansible/yml/when.yml中，<br>
如果a&quot;4&quot;，就将“test4”，写入到web组下被管控机的/etc/ansible/yml/when.yml中。</p>
</blockquote>
<p>执行：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 语法校验</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ansible-playbook</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --syntax-check</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> when.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#执行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ansible-playbook</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'a="3"'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> when.yml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-循环" tabindex="-1"><a class="header-anchor" href="#_2-2-循环"><span>2.2 循环</span></a></h3>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-12"> 1、标准循环使用场景 - 批量安装软件</label></li>
</ul>
<div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root@localhost yml</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]# </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">vim with_items.yml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">hosts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">all</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  remote_user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  tasks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Installed packages</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      yum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">       name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"{{ item }}"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">       state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">present</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      with_items</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">wget</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">tree</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">lrzsz</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 语法校验</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ansible-playbook</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --syntax-check</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> with_items.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ansible-playbook</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> with_items.yml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/9ebc2064addb4037b5e5b84db33b5d30.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-13" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-13"> 2、标准循环使用场景 - 批量创建用户</label></li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root@localhost yml</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]# </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">vim item2.yml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">批量创建用户</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  hosts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">all</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  remote_user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  tasks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">配置创建用户操作</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"{{ item }}"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">present</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      with_items</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">cs1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">cs2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">cs3</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 语法校验</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ansible-playbook</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --syntax-check</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> item2.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ansible-playbook</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> item2.yml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tail</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/passwd</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/bd06fcb21140445a8912e70c27d75d35.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-14" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-14"> 3、循环嵌套使用场景 - 批量创建用户并给用户添加用户组</label></li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root@localhost yml</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]# </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">vim item3.yml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">批量创建用户名及用户组</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  hosts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">all</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  remote_user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  tasks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">create group</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      group</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">name={{ item }} state=present</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      with_items</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">group1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">group2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">group3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">create user</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">name={{ item.name }} group={{ item.groups }} state=present</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      with_items</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - {</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'name'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">cs1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'groups'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">group1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - {</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'name'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">cs2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'groups'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">group2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - {</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'name'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">cs3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'groups'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">group3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 语法校验</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ansible-playbook</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --syntax-check</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> item3.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ansible-playbook</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> item3.yml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-15" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-15"> 4、循环嵌套使用场景 - 批量删除用户及用户组</label></li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root@localhost yml</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]# </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">vim item3_1.yml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">批量删除用户及用户组</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  hosts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">all</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  remote_user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  tasks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">drop user</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"{{ item.name }}"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        group</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"{{ item.group }}"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        remove</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">yes</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">absent</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      with_items</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - {</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'name'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">cs1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'group'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">group1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - {</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'name'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">cs2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'group'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">group2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - {</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'name'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">cs3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'group'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">group3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">drop group</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      group</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"{{ item }}"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">absent</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      with_items</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">group1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">group2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">group3</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 语法校验</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ansible-playbook</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --syntax-check</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> item3_1.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ansible-playbook</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> item3_1.yml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-16" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-16"> 5、标准循环使用场景 - 批量拷贝多个文件</label></li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root@localhost yml</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]# </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">vim item4.yml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">批量拷贝文件</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  hosts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">all</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  remote_user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  tasks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">bulk copy</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      copy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">src=/home/test/{{ item.src }} dest=/home/cs/{{ item.dest }} mode={{ item.mode }}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      with_items</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        - {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"a.sh"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"a.sh"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">mode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"0777"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        - {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"tongji.sh"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"tongji.sh"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">mode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"0777"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># -------------------------------此为分界线，上下互不相干---------------------------------    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">批量拷贝文件到不同的路径</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  hosts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">all</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  remote_user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  tasks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">bulk copy</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      copy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">src=/home/test/{{ item.src }} dest={{ item.dest }} mode={{ item.mode }}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      with_items</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        - {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"a.sh"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/home/cs/a.sh"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">mode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"0777"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        - {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"tongji.sh"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/home/cs1/tongji.sh"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">mode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"0777"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 语法校验</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ansible-playbook</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --syntax-check</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> item4.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ansible-playbook</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> item4.yml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-异常处理" tabindex="-1"><a class="header-anchor" href="#_2-3-异常处理"><span>2.3 异常处理</span></a></h3>
<p>默认Playbook会检查命令和模块的返回状态，如遇到错误就中断playbook的执行</p>
<p>加入参数: <font color=red>ignore_errors: yes</font> 	# 忽略错误</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root@localhost yml</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]# </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">cat expect.yml</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">忽略错误演示</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  hosts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">all</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  remote_user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  tasks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">使用一个未知的命令</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">a</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      ignore_errors</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">yes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">创建一个文件</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      file</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">path=/home/cs/yichang state=touch</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码解析：</p>
<blockquote>
<p>如上代码，执行到command的a命令时，服务器时没有这个命令的，就会报错，报错了之后，下面的服务就不会继续执行了；</p>
</blockquote>
<blockquote>
<p>我们现在添加了一个<code v-pre>ignore_errors: yes</code>，这样就可以跳过这个报错，继续执行下面的内容；</p>
</blockquote>
<h3 id="_2-4-tags-标签" tabindex="-1"><a class="header-anchor" href="#_2-4-tags-标签"><span>2.4 tags 标签</span></a></h3>
<p>  默认情况下，Ansible在执行一个playbook时，会执行playbook中定义的所有任务；Ansible playbook中的tag标签是一种用于选择性运行特定任务或任务集的机制。通过为每个任务指定标签，您可以在运行playbook时选择只运行带有特定标签的任务，而不运行其他任务。这对于控制和管理Ansible playbook的执行非常有用，特别是当您的playbook包含许多任务时。</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-17" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-17"> 1、打标签的方式</label></li>
</ul>
<p>对一个对象打一个标签</p>
<p>对一个对象打多个标签</p>
<p>对多个对象打一个标签</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-18" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-18"> 2、标签使用，通过tags和任务对象进行捆绑，控制部分或者指定的task执行</label></li>
</ul>
<p><code v-pre>-t</code>：执行指定的tag标签任务</p>
<p><code v-pre>--list-tags</code>：列出此yml文件中的所有tag标签</p>
<p><code v-pre>--skip-tags</code>：执行--skip-tags之外的标签任务</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-19" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-19"> 3、以下是tag标签的作用：</label></li>
</ul>
<ol>
<li>
<p>选择性运行任务：可以使用<code v-pre>--tags</code>参数在运行ansible-playbook命令时指定一个或多个标签，只有带有指定标签的任务会运行。这对于在大型playbook中只运行特定任务非常有用，而不是运行整个playbook。</p>
</li>
<li>
<p>排除任务：您可以使用<code v-pre>--skip-tags</code>参数来排除具有特定标签的任务，从而运行除带有指定标签的任务之外的所有其他任务。这对于在大型playbook中排除不需要运行的任务非常有用。</p>
</li>
<li>
<p>组织任务：标签可以帮助您组织和分类任务。例如，您可以为配置任务添加一个<code v-pre>config</code>标签，为安装任务添加一个<code v-pre>install</code>标签，以便更容易了解每个任务的用途。</p>
</li>
<li>
<p>文档和注释：标签还可以作为任务的文档和注释。您可以将标签用作描述任务的方式，以便其他人更容易理解每个任务的目的。</p>
</li>
</ol>
<p>下面是一些示例，演示如何在运行ansible-playbook时使用标签：</p>
<ul>
<li>
<p>仅运行带有<code v-pre>install</code>标签的任务：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ansible-playbook</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> your_playbook.yml</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --tags</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>排除带有<code v-pre>test</code>标签的任务：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ansible-playbook</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> your_playbook.yml</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --skip-tags</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> test</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>运行带有多个标签的任务：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ansible-playbook</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> your_playbook.yml</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --tags</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "install,config"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<ul>
<li>
<p>列出yml文件中所有的标签</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ansible-playbook</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> your_playbook.yml</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --list-tags</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<p>标签功能有助于增加Ansible playbook的可维护性，使您能够更精细地控制任务的执行。</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-20" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-20"> 4、【实例】部署apache服务并启动，中间可以自行设置tags标签。</label></li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root@localhost yml</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]# </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">vim tags.yml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">部署apache服务</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  hosts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">web</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  remote_user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  vars</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">http_port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">8080</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  tasks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Install Http Server</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      yum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">httpd</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">present</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      tags</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">install_httpd</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">httpd_server</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">configure httpd server</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      copy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">./httpd.conf</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        dest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/etc/httpd/conf/httpd.conf</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        mode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0777</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      notify</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Restart Httpd Server</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      tags</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">config_httpd</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">httpd_server</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">start httpd server</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      service</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">httpd</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">started</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">yes</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      tags</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">start_httpd</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">stop httpd server</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      service</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">httpd</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">stopped</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      tags</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">stop_httpd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">uninstall httpd server</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      yum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">httpd</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">absent</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      tags</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">uninstall_httpd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  handlers</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Restart Httpd Server</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      systemd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">httpd</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">restarted</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是一个Ansible playbook的YAML文件，用于部署Apache HTTP服务器。YAML文件解析：</p>
<ol>
<li><code v-pre>name: 部署apache服务</code>：这是整个Ansible playbook的名称或描述。</li>
<li><code v-pre>hosts: web</code>：这指定了该playbook将在名为<code v-pre>web</code>的主机组上执行。您需要在您的Ansible inventory文件中定义主机组<code v-pre>web</code>，或者在命令行上指定主机。</li>
<li><code v-pre>remote_user: root</code>：指定了运行任务时使用root用户身份执行。</li>
<li><code v-pre>vars:</code>：这是一个变量部分，用于定义变量。在这里，定义了一个名为<code v-pre>http_port</code>的变量，其值为8080。</li>
<li><code v-pre>tasks:</code>：这是实际任务部分，其中包含一系列任务，每个任务都有一个名称和相应的操作。以下是每个任务的解释：
<ul>
<li>第一个任务：<code v-pre>Install Http Server</code>：这个任务使用<code v-pre>yum</code>模块来安装<code v-pre>httpd</code>软件包，确保Apache HTTP服务器已经安装在主机上。此任务有两个tags：<code v-pre>install_httpd</code>和<code v-pre>httpd_server</code>，以便后续可以选择性地运行这些任务。</li>
<li>第二个任务：<code v-pre>configure httpd server</code>：这个任务使用<code v-pre>copy</code>模块将本地文件<code v-pre>httpd.conf</code>复制到目标主机的<code v-pre>/etc/httpd/conf/httpd.conf</code>位置，并给目标文件设置执行权限，从而配置Apache HTTP服务器。此任务有两个tags：<code v-pre>config_httpd</code>和<code v-pre>httpd_server</code>。（为什么要多余移动这个呢，因为这个配置里我们自己写的，同时也修改了httpd的端口为：8080）。<code v-pre>notify: Restart Httpd Server</code>意味着当该任务的状态发生变化时（通常是成功完成任务），它将触发名为 &quot;Restart Httpd Server&quot; 的处理程序<code v-pre>handlers</code>。</li>
<li>第三个任务：<code v-pre>start httpd server</code>：这个任务使用<code v-pre>service</code>模块来启动并启用Apache HTTP服务器。此任务有一个tag：<code v-pre>start_httpd</code>。</li>
<li>第四个任务：<code v-pre>stop httpd server</code>：停止HTTP服务器。它使用 <code v-pre>service</code> 模块将 <code v-pre>httpd</code> 服务停止。此任务有一个标签 <code v-pre>stop_httpd</code>。</li>
<li>第五个任务：<code v-pre>uninstall httpd server</code>：卸载HTTP服务器。它使用 <code v-pre>yum</code> 模块卸载 <code v-pre>httpd</code> 软件包。此任务有一个标签 <code v-pre>uninstall_httpd</code>。</li>
</ul>
</li>
<li><code v-pre>handlers:</code>：这部分定义了处理程序，这是一些在任务中使用的命名动作，通常与通知一起使用。在这里，定义了一个名为<code v-pre>Restart Httpd Server</code>的处理程序，当<code v-pre>copy</code>任务完成后，可以通知它。此处理程序使用<code v-pre>systemd</code>模块来重新启动<code v-pre>httpd</code>服务。</li>
</ol>
<p>这个Playbook允许您执行与Apache HTTP服务器有关的各种操作，如安装、配置、启动、停止和卸载。使用不同的标签可以选择性地运行特定任务或任务组。</p>
<hr>
<p>执行：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看此yml文件中的所有tags标签</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost http]# ansible-playbook tags.yml --list-tags</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">playbook:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tags.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  play</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> #1 (web): 部署apache服务	TAGS: []</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      TASK</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> TAGS:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [config_httpd, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">httpd_server,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install_httpd,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start_httpd,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> stop_httpd,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> uninstall_httpd]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行 install_httpd,config_httpd（安装、移动配置文件）标签；执行移动配置文件会触发处理程序，所以会自动启动服务；</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost http]# ansible-playbook tags.yml -t install_httpd,config_httpd</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行 uninstall_httpd（卸载httpd服务） 标签</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost http]# ansible-playbook tags.yml -t uninstall_httpd</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行 httpd_server 标签</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost http]# ansible-playbook tags.yml -t httpd_server</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># httpd_server标签包含（Install Http Server、configure httpd server、Restart Httpd Server）</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 所以会直接执行这三个任务，也就是安装、移动配置文件(因为使用移动文件触发了处理程序notify，所以就会执行Restart Httpd Server重启服务）</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 总结就是：执行httpd_server标签，会安装服务并启动服务。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 跳过 httpd_server,start_httpd（安装加启动，启动）标签</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost http]# ansible-playbook tags.yml --skip-tags httpd_server,start_httpd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行结果为，关闭httpd服务并卸载httpd服务；因为已经跳过 httpd_server ，所以不会执行安装和启动；</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/95046449a23d4d99b7936dca174c5b7c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="三、playbook-中常用的模块使用" tabindex="-1"><a class="header-anchor" href="#三、playbook-中常用的模块使用"><span>三、Playbook 中常用的模块使用</span></a></h2>
<ul>
<li>批量备份文件</li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">backup file</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      shell</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">mv {{ item }} {{ item }}-$(date +"%Y-%m-%d")</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      with_items</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/home/cs/a.sh</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/home/cs/b.sh</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/home/cs/c.sh</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      ignore_errors</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">yes</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      tags</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">backup_file</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果为：/home/cs/a.sh-2023-10-31、/home/cs/b.sh-2023-10-31、/home/cs/c.sh-2023-10-31<br>
ignore_errors: yes 为：没有这个文件可能会导致报错，跳过报错继续执行，不过最后还是要返回来看，需要单独复制。</p>
<ul>
<li>批量复制文件：从本地复制到其他服务器不同路径</li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">copy file</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      copy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">src=/etc/ansible/yml/update/{{ item.src }} dest={{ item.dest }} mode={{ item.mode }}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      with_items</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        - {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"a.sh"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/data/cs/a.sh"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">mode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"0777"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        - {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"b.sh"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/data/abc/b.sh"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">mode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"0777"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        - {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"cs.jar"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/data/conf/cs.jar"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">mode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"0644"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      tags</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">copy_file</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>批量复制文件：从其他服务器复制到其他服务器不同路径</li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">copy shell/file</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      shell</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">cp -ar {{ item.src }} {{ item.dest }}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      with_items</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        - {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/home/test/nginx/conf/nginx.conf"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/usr/local/cs/nginx/conf/nginx.conf"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        - {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/home/test/nginx/conf/cs.conf"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/usr/local/cs/nginx/conf/cs.conf"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        - {</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/home/test/nginx/src/nginx"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/usr/local/cs/nginx/src/nginx"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	  ignore_errors</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">yes</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      tags</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">fugai</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ignore_errors: yes 为：没有这个文件可能会导致报错，跳过报错继续执行，不过最后还是要返回来看，需要单独复制。</p>
<h2 id="四、相关文章" tabindex="-1"><a class="header-anchor" href="#四、相关文章"><span>四、相关文章</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:center">文章标题</th>
<th style="text-align:center">文章链接</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://liucy.blog.csdn.net/article/details/133769300" target="_blank" rel="noopener noreferrer">Ansible自动化运维（一）简介及部署、清单</a></td>
<td style="text-align:center"><a href="https://liucy.blog.csdn.net/article/details/133769300" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/133769300</a></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://liucy.blog.csdn.net/article/details/133772023" target="_blank" rel="noopener noreferrer">Ansible自动化运维（二）ad-hoc 模式详解</a></td>
<td style="text-align:center"><a href="https://liucy.blog.csdn.net/article/details/133772023" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/133772023</a></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://liucy.blog.csdn.net/article/details/133899966" target="_blank" rel="noopener noreferrer">Ansible自动化运维（三）Playbook 模式详解</a></td>
<td style="text-align:center"><a href="https://liucy.blog.csdn.net/article/details/133899966" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/133899966</a></td>
</tr>
<tr>
<td style="text-align:center"><a href="https://liucy.blog.csdn.net/article/details/133994509" target="_blank" rel="noopener noreferrer">Ansible自动化运维（四）jinja2 模板、Roles角色详解</a></td>
<td style="text-align:center"><a href="https://liucy.blog.csdn.net/article/details/133994509" target="_blank" rel="noopener noreferrer">https://liucy.blog.csdn.net/article/details/133994509</a></td>
</tr>
</tbody>
</table>
</div></template>


