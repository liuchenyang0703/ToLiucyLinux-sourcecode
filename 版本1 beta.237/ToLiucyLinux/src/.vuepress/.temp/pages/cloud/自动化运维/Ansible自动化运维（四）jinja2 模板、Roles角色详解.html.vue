<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<p>@[toc]</p>
<h1 id="一、jinjia2-模板" tabindex="-1"><a class="header-anchor" href="#一、jinjia2-模板" aria-hidden="true">#</a> 一、jinjia2 模板</h1>
<p>jinja2是Python的全功能模板引擎。在python的WEB开发中被广泛应用。</p>
<p>Ansible通常会使用jinja2模板来修改被管理主机的配置文件等。</p>
<h2 id="_1-1-在-ansible-中的使用" tabindex="-1"><a class="header-anchor" href="#_1-1-在-ansible-中的使用" aria-hidden="true">#</a> 1.1 在 Ansible 中的使用</h2>
<p>  使用Ansible的jinja2模板也就是使用<code v-pre>template</code> 模块，该模块和<code v-pre>copy</code> 模块一样，都是将文件复制到远端主机上去，但是区别在于，<code v-pre>template</code> 模块可以获取到文件中的变量，而copy则是原封不动的把文件内容复制过去。比如想把脚本中的变量名改成主机名，如果使用copy模块则推送过去的就是{{ ansible_fqdn }}，不变，如果使用template，则会变成对应的主机名。</p>
<font color=red>Ansible允许jinja2模板中使用条件判断和循环，但是不允许在playbook中使用。通常jinja2模板文件的后缀为`.j2`</font><h2 id="_1-2-jinjia2-模板语法" tabindex="-1"><a class="header-anchor" href="#_1-2-jinjia2-模板语法" aria-hidden="true">#</a> 1.2 jinjia2 模板语法</h2>
<h3 id="_1-2-1-基础语法" tabindex="-1"><a class="header-anchor" href="#_1-2-1-基础语法" aria-hidden="true">#</a> 1.2.1 基础语法</h3>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 基础语法</label></li>
</ul>
<p>1)playbook文件使用template模块</p>
<p>2)模板文件里面变量使用{{名称}}，比如{{PORT}}或使用facts</p>
<p>3){{}}也可以使用表达式，比如{{ 3+5 }} {{3 in [1,2,3,4,5] -}}</p>
<font color=red>说明：{{}}中的表达式其实就是python中的表达式，可以包括比较运算，算数运算，逻辑运算，成员运行。</font><p>该模板支持：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>字符串：使用单引号或双引号；
　　数字：整数，浮点数；
　　列表：<span class="token punctuation">[</span>item1<span class="token punctuation">,</span> item2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
　　元组：<span class="token punctuation">(</span>item1<span class="token punctuation">,</span> item2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
　　字典：<span class="token punctuation">{</span>key1<span class="token punctuation">:</span>value1<span class="token punctuation">,</span> key2<span class="token punctuation">:</span>value2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
　　布尔型：true<span class="token operator">/</span>false
　　算术运算：
　　　　<span class="token operator">+</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token punctuation">,</span> <span class="token operator">/</span><span class="token punctuation">,</span> <span class="token operator">//</span><span class="token punctuation">,</span> <span class="token operator">%</span><span class="token punctuation">,</span> <span class="token operator">**</span>
　　比较操作：
　　　　<span class="token operator">==</span><span class="token punctuation">,</span> <span class="token operator">!=</span><span class="token punctuation">,</span> <span class="token operator">></span><span class="token punctuation">,</span> <span class="token operator">>=</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;=</span>
　　逻辑运算：
　　　　<span class="token keyword">and</span><span class="token punctuation">,</span> <span class="token keyword">or</span><span class="token punctuation">,</span> <span class="token keyword">not</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>模板通常都是通过引用变量来运用的</li>
</ul>
<ul>
<li><span id="click_me_jump">【实例】</span></li>
</ul>
<ol>
<li>
<p>创建模板文件：<br>
首先，需要创建一个包含Jinja2模板的文件。这个文件通常包含要插入变量或表达式的位置。可以在文件中使用<code v-pre>{{ }}</code>来包裹变量或表达式。</p>
<p>例如，创建一个名为 <code v-pre>my_template.j2</code> 的模板文件：</p>
<div class="language-jinja2 line-numbers-mode" data-ext="jinja2"><pre v-pre class="language-jinja2"><code>[root@localhost jinja2]# vim my_template.j2 
ServerName ___JINJA20___
Listen ___JINJA21___
Debug ___JINJA22___
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在Playbook中使用模板：<br>
在 Ansible Playbook中，可以使用<code v-pre>template</code>模块来加载模板文件并将变量传递给它。以下是一个示例Playbook：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token punctuation">[</span>root@localhost jinja2<span class="token punctuation">]</span><span class="token comment"># vim jinja.yml</span>
<span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 使用Jinja2模板
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> your_target_hosts
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> example.com
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
    <span class="token key atrule">debug_mode</span><span class="token punctuation">:</span> <span class="token boolean important">True</span>
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 生成配置文件
      <span class="token key atrule">template</span><span class="token punctuation">:</span>
        <span class="token key atrule">src</span><span class="token punctuation">:</span> my_template.j2
        <span class="token key atrule">dest</span><span class="token punctuation">:</span> /etc/ansible/yml/jinja2/myapp.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们使用了<code v-pre>template</code>模块，指定了模板文件的源 (<code v-pre>src</code>) 和目标 (<code v-pre>dest</code>)。我们还传递了变量 <code v-pre>hostname</code>、<code v-pre>port</code> 和 <code v-pre>debug_mode</code>，这些变量会在模板中替换<code v-pre>{{ }}</code>中的相应位置。</p>
</li>
<li>
<p>运行Playbook：<br>
运行上述Playbook，Ansible将使用模板文件生成 <code v-pre>/etc/ansible/yml/jinja2/myapp.conf</code> 配置文件，并将模板中的<code v-pre>{{ }}</code>替换为变量的值。</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 结果值为：</span>
ServerName example.com
Listen <span class="token number">8080</span>
Debug True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模板文件中的<code v-pre>{{ }}</code>不仅可以包含变量，还可以包含表达式，如您所述的比较运算、算术运算、逻辑运算等。这使得您可以在模板中执行各种操作以生成需要的配置或文本。</p>
<p>Jinja2模板的强大之处在于它允许创建灵活和动态的配置文件，以适应不同的场景和变量值。</p>
<h3 id="_1-2-2-流程控制" tabindex="-1"><a class="header-anchor" href="#_1-2-2-流程控制" aria-hidden="true">#</a> 1.2.2 流程控制</h3>
<ul class="task-list-container">
<li class="task-list-item">
<p><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 流程控制</label></p>
</li>
<li>
<p>条件判断</p>
</li>
</ul>
<p>使用<code v-pre>{% if %}</code>和<code v-pre>{% endif %}</code>块来实现条件语句。以下是一个示例：</p>
<p>格式：</p>
<div class="language-jinja2 line-numbers-mode" data-ext="jinja2"><pre v-pre class="language-jinja2"><code>___JINJA20___
	执行内容
___JINJA21___
	执行内容
___JINJA22___
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例：</p>
<div class="language-jinja2 line-numbers-mode" data-ext="jinja2"><pre v-pre class="language-jinja2"><code>___JINJA20___
    # 生产环境配置
    DebugLevel: 0
___JINJA21___
    # 开发/测试环境配置
    DebugLevel: 2
___JINJA22___
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>多条件判断</li>
</ul>
<p>格式：</p>
<div class="language-jinja2 line-numbers-mode" data-ext="jinja2"><pre v-pre class="language-jinja2"><code>___JINJA20___
	执行内容
___JINJA21___
	执行内容
___JINJA22___
	执行内容
___JINJA23___
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例：</p>
<div class="language-jinja2 line-numbers-mode" data-ext="jinja2"><pre v-pre class="language-jinja2"><code>___JINJA20___
	DebugLevel: 0
___JINJA21___
	DebugLevel: 1
___JINJA22___
	DebugLevel: 2
___JINJA23___
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，根据<code v-pre>is_production</code>变量的值，将生成不同的配置。</p>
<ul>
<li>循环表达式</li>
</ul>
<p>可以使用<code v-pre>{% for %}</code>和<code v-pre>{% endfor %}</code>块来实现循环。以下是一个示例：</p>
<p>格式：</p>
<div class="language-jinja2 line-numbers-mode" data-ext="jinja2"><pre v-pre class="language-jinja2"><code>___JINJA20___
	执行内容
___JINJA21___
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例：</p>
<div class="language-jinja2 line-numbers-mode" data-ext="jinja2"><pre v-pre class="language-jinja2"><code>___JINJA20___
    - ___JINJA21___
___JINJA22___
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，<code v-pre>list_items</code> 是一个包含多个元素的列表，模板将循环遍历列表中的每个元素并生成相应的输出。</p>
<blockquote>
<p>说明:默认不支持<code v-pre>break</code>和<code v-pre>continue</code>的，但是可以使用ansible的扩展选项，在配置<code v-pre>/etc/ansible/ansible.cfg</code>中的132行中:</p>
<p><code v-pre>jinja2_extensions = jinja2.ext.do,jinja2.ext.i18n,jinja2.ext.loopcontrols</code></p>
</blockquote>
<h3 id="_1-2-3-过滤器" tabindex="-1"><a class="header-anchor" href="#_1-2-3-过滤器" aria-hidden="true">#</a> 1.2.3 过滤器</h3>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 过滤器</label></li>
</ul>
<p>Jinja2还支持过滤器，可以使用过滤器来对变量进行操作。例如，可以使用<code v-pre>default</code>过滤器来设置默认值：</p>
<div class="language-jinja2 line-numbers-mode" data-ext="jinja2"><pre v-pre class="language-jinja2"><code>___JINJA20___
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者，您可以使用<code v-pre>length</code>过滤器来获取列表的长度：</p>
<div class="language-jinja2 line-numbers-mode" data-ext="jinja2"><pre v-pre class="language-jinja2"><code>The list has ___JINJA20___ items.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-2-4-其他控制结构" tabindex="-1"><a class="header-anchor" href="#_1-2-4-其他控制结构" aria-hidden="true">#</a> 1.2.4 其他控制结构</h3>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 其他控制结构</label></li>
</ul>
<p>Jinja2还支持其他控制结构，如<code v-pre>{% include %}</code>用于包含其他模板文件，以及<code v-pre>{% macro %}</code>和<code v-pre>{% call %}</code>用于定义和调用宏。</p>
<p>请注意，Jinja2语法和功能非常强大，支持许多高级用例，例如宏、继承、自定义过滤器等。要更深入地了解Jinja2模板的流程控制和功能，请查看Jinja2的官方文档。在Ansible中，可以将这些模板用于生成配置文件、编排任务等，以满足不同的需求和环境。</p>
<h2 id="_1-3-templates-模块" tabindex="-1"><a class="header-anchor" href="#_1-3-templates-模块" aria-hidden="true">#</a> 1.3 templates 模块</h2>
<blockquote>
<p>  template模块与copy模块的用法十分类似，只是更多用于jinja2模板的渲染，也就是模板文件中可以引用变量，实现对不同主机有定制化的配置。</p>
</blockquote>
<p><strong>copy与template的区别</strong></p>
<ul>
<li>copy模块不替代参数，template模块替代参数</li>
<li>template的参数几乎与copy的参数完全相同</li>
</ul>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 常用参数：</label></li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:center">参数</th>
<th style="text-align:center">解析</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">src</td>
<td style="text-align:center">指定本地jinja2模板文件的位置</td>
</tr>
<tr>
<td style="text-align:center">dest</td>
<td style="text-align:center">指定目标远程主机路径</td>
</tr>
<tr>
<td style="text-align:center">backup</td>
<td style="text-align:center">指定是否备份，默认值no</td>
</tr>
<tr>
<td style="text-align:center">mode</td>
<td style="text-align:center">设置权限</td>
</tr>
<tr>
<td style="text-align:center">user</td>
<td style="text-align:center">设置用户</td>
</tr>
<tr>
<td style="text-align:center">group</td>
<td style="text-align:center">设置用户组</td>
</tr>
</tbody>
</table>
<blockquote>
<p>templates 模块的使用： <a href="#click_me_jump">jinja2模板的基础用法</a></p>
</blockquote>
<h2 id="_1-4-jinja2-使用案例" tabindex="-1"><a class="header-anchor" href="#_1-4-jinja2-使用案例" aria-hidden="true">#</a> 1.4 jinja2 使用案例</h2>
<p>比如需要实现对被控端主机安装redis服务，默认的redis服务只监听本地的127.0.0.1端口，换句话说，其他主机是不可以访问该redis服务器的，如何来解决这个问题呢？此时就可以使用jinja2的模板，在其中引用变量，使用template模块进行渲染。</p>
<blockquote>
<p>本案例使用了：<code v-pre>jinja2</code>模板、<code v-pre>templates</code>模块、<code v-pre>copy</code>模块、<code v-pre>yum</code>模块、<code v-pre>shell</code>模块、<code v-pre>service</code>模块、<code v-pre>vars</code>定义变量、<code v-pre>register</code>变量注册、<code v-pre>ignore_errors</code>忽略错误、<code v-pre>tags</code>标签、<code v-pre>when</code>判断、<code v-pre>notify</code> 和 <code v-pre>handlers</code>通知与触发（处理程序）</p>
</blockquote>
<ul>
<li>1、创建一个自定义的Redis配置模板文件，如 <code v-pre>redis_conf.j2</code>，并在其中修改Redis绑定地址以侦听所有IP地址：</li>
</ul>
<div class="language-jinja2 line-numbers-mode" data-ext="jinja2"><pre v-pre class="language-jinja2"><code>[root@localhost redis]# vim redis_conf.j2
bind ___JINJA20___ 127.0.0.1
port ___JINJA21___
protected-mode no
tcp-backlog 511
timeout 0
tcp-keepalive 300
daemonize yes
supervised no
pidfile /var/run/redis_6379.pid
loglevel notice
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在此示例中，我们使用了 <code v-pre>bind {{ ansible_host }} 127.0.0.1</code> 来告诉Redis服务只接受本地IP连接，并使用变量 <code v-pre>redis_port</code> 来指定Redis端口。</p>
<ul>
<li>2、在Ansible Playbook中，使用<code v-pre>template</code>模块加载该模板并渲染它，然后将渲染后的配置文件复制到Redis配置文件目录。以下是一个示例Playbook：</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token punctuation">[</span>root@localhost redis<span class="token punctuation">]</span><span class="token comment"># vim redis.yml</span>
<span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 部署Redis服务
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> web
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">gather_facts</span><span class="token punctuation">:</span> no
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
    <span class="token key atrule">redis_port</span><span class="token punctuation">:</span> <span class="token number">6379</span>  <span class="token comment"># 指定Redis端口</span>

  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Upload yum repo
      <span class="token key atrule">copy</span><span class="token punctuation">:</span> 
        <span class="token key atrule">src</span><span class="token punctuation">:</span> /etc/yum.repos.d/CentOS<span class="token punctuation">-</span>Base.repo
        <span class="token key atrule">dest</span><span class="token punctuation">:</span> /etc/yum.repos.d
        <span class="token key atrule">backup</span><span class="token punctuation">:</span> no
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> 
       <span class="token punctuation">-</span> upload_yum
       <span class="token punctuation">-</span> upload_repo
       <span class="token punctuation">-</span> redis_server

    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Upload epel repo
      <span class="token key atrule">copy</span><span class="token punctuation">:</span>
        <span class="token key atrule">src</span><span class="token punctuation">:</span> /etc/yum.repos.d/epel.repo
        <span class="token key atrule">dest</span><span class="token punctuation">:</span> /etc/yum.repos.d/
        <span class="token key atrule">backup</span><span class="token punctuation">:</span> no
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> 
       <span class="token punctuation">-</span> upload_epel
       <span class="token punctuation">-</span> upload_repo
       <span class="token punctuation">-</span> redis_server

    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Check redis install
      <span class="token key atrule">shell</span><span class="token punctuation">:</span> /usr/bin/rpm <span class="token punctuation">-</span>q redis
      <span class="token key atrule">register</span><span class="token punctuation">:</span> redis_msg
      <span class="token key atrule">ignore_errors</span><span class="token punctuation">:</span> yes
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> 
       <span class="token punctuation">-</span> check_redis
       <span class="token punctuation">-</span> redis_server

    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install redis server
      <span class="token key atrule">yum</span><span class="token punctuation">:</span> 
        <span class="token key atrule">name</span><span class="token punctuation">:</span> redis
        <span class="token key atrule">state</span><span class="token punctuation">:</span> present
      <span class="token key atrule">when</span><span class="token punctuation">:</span> redis_msg.failed == true
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> 
       <span class="token punctuation">-</span> install_redis
       <span class="token punctuation">-</span> redis_server

    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Upload redis.conf
      <span class="token key atrule">template</span><span class="token punctuation">:</span>
        <span class="token key atrule">src</span><span class="token punctuation">:</span> redis_conf.j2
        <span class="token key atrule">dest</span><span class="token punctuation">:</span> /etc/redis.conf
      <span class="token key atrule">notify</span><span class="token punctuation">:</span> Restart Redis
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> 
       <span class="token punctuation">-</span> upload_redis.conf
       <span class="token punctuation">-</span> redis_server

    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Start Redis server
      <span class="token key atrule">service</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> redis
        <span class="token key atrule">state</span><span class="token punctuation">:</span> started
        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> yes
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> 
       <span class="token punctuation">-</span> start_redis
       <span class="token punctuation">-</span> redis_server

    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Restart Redis server
      <span class="token key atrule">service</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> redis
        <span class="token key atrule">state</span><span class="token punctuation">:</span> restarted
      <span class="token key atrule">tags</span><span class="token punctuation">:</span>
       <span class="token punctuation">-</span> restart_redis
        
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Stop Redis Server
      <span class="token key atrule">service</span><span class="token punctuation">:</span> 
        <span class="token key atrule">name</span><span class="token punctuation">:</span> redis
        <span class="token key atrule">state</span><span class="token punctuation">:</span> stopped
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> 
        <span class="token punctuation">-</span> stop_redis
        <span class="token punctuation">-</span> uninstall_redis

    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> uninstall Redis Server
      <span class="token key atrule">yum</span><span class="token punctuation">:</span> 
        <span class="token key atrule">name</span><span class="token punctuation">:</span> redis
        <span class="token key atrule">state</span><span class="token punctuation">:</span> absent
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> 
        <span class="token punctuation">-</span> uninstall_redis

  <span class="token key atrule">handlers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Restart Redis
      <span class="token key atrule">service</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> redis
        <span class="token key atrule">state</span><span class="token punctuation">:</span> restarted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>3、执行检查：</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 检查语法</span>
<span class="token punctuation">[</span>root@localhost redis<span class="token punctuation">]</span><span class="token comment"># ansible-playbook --syntax-check redis.yml </span>

<span class="token comment"># 列出任务列表</span>
<span class="token punctuation">[</span>root@localhost redis<span class="token punctuation">]</span><span class="token comment"># ansible-playbook --list-tasks redis.yml </span>

<span class="token comment"># 列出所有tags标签</span>
<span class="token punctuation">[</span>root@localhost redis<span class="token punctuation">]</span><span class="token comment"># ansible-playbook --list-tags redis.yml </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/008b476b692c4b3394a68eabf7707c11.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>tasks 解析：（列出<code v-pre>tasks</code>任务的时候后面也会包含<code v-pre>tags</code>标签，每个任务用的标签都有哪些）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>tasks:
  Upload yum repo		 <span class="token comment"># 更新yum源</span>
  Upload epel repo		 <span class="token comment"># 更新yum扩展源</span>
  Check redis <span class="token function">install</span>	 <span class="token comment"># 检查是否安装过 redis</span>
  Install redis server	 <span class="token comment"># 安装 redis</span>
  Upload redis.conf		 <span class="token comment"># 更新 redis 配置文件</span>
  Start Redis server	 <span class="token comment"># 启动 redis</span>
  Restart Redis server	 <span class="token comment"># 重启 redis</span>
  Stop Redis Server		 <span class="token comment"># 停止 redis</span>
  uninstall Redis Server <span class="token comment"># 卸载 redis</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tags 解析：（列出<code v-pre>tasks</code>任务的时候后面也会包含<code v-pre>tags</code>标签，每个任务用的标签都有哪些）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>TASK TAGS: 
  upload_repo		<span class="token comment"># 更新yum源，包含：Upload yum repo，Upload epel repo</span>
  upload_yum		<span class="token comment"># 更新yum源</span>
  upload_epel		<span class="token comment"># 更新yum扩展源</span>
  redis_server		<span class="token comment"># 一键安装redis，包含：Upload yum repo、Upload epel repo、Check redis install、Install redis server、Upload redis.conf、Start Redis server</span>
  check_redis		<span class="token comment"># 检查是否安装 redis</span>
  upload_redis.conf	<span class="token comment"># 更新 redis 配置文件</span>
  install_redis		<span class="token comment"># 安装 redis</span>
  restart_redis		<span class="token comment"># 重启 redis</span>
  start_redis		<span class="token comment"># 启动 redis</span>
  stop_redis		<span class="token comment"># 停止 redis</span>
  uninstall_redis	<span class="token comment"># 卸载 redis</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>4、执行yml脚本</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 执行更新yum源</span>
<span class="token punctuation">[</span>root@localhost redis<span class="token punctuation">]</span><span class="token comment"># ansible-playbook redis.yml -t upload_repo</span>

<span class="token comment"># 检查是否安装过 redis，会有报错说找不到，不会影响，里面有 ignore_errors 忽略错误；</span>
<span class="token punctuation">[</span>root@localhost redis<span class="token punctuation">]</span><span class="token comment"># ansible-playbook redis.yml -t check_redis</span>

<span class="token comment"># 执行安装 redis（不能单独执行redis，会报错，因为有一个when判断需要调用上面的查询是否有redis服务）</span>
<span class="token punctuation">[</span>root@localhost redis<span class="token punctuation">]</span><span class="token comment"># ansible-playbook redis.yml -t check_redis,install_redis</span>

<span class="token comment"># 执行更新 redis 配置文件</span>
<span class="token punctuation">[</span>root@localhost redis<span class="token punctuation">]</span><span class="token comment"># ansible-playbook redis.yml -t upload_redis.conf</span>
<span class="token comment"># 执行完毕可以查看redis状态及redis端口是否启动，正常是都启动的；</span>

<span class="token comment"># 执行停止 redis</span>
<span class="token punctuation">[</span>root@localhost redis<span class="token punctuation">]</span><span class="token comment"># ansible-playbook redis.yml -t stop_redis</span>
<span class="token comment"># 执行完毕可以查看redis状态及redis端口是否启动，如果没有那就是没问题，因为这是停止；</span>

<span class="token comment"># 执行卸载 redis</span>
<span class="token punctuation">[</span>root@localhost redis<span class="token punctuation">]</span><span class="token comment"># ansible-playbook redis.yml -t uninstall_redis</span>
<span class="token comment"># 执行完可以使用： rpm -q redis 查看或使用 check_redis标签检查</span>

<span class="token comment"># 执行一键安装redis</span>
<span class="token punctuation">[</span>root@localhost redis<span class="token punctuation">]</span><span class="token comment"># ansible-playbook redis.yml -t redis_server</span>
<span class="token comment"># 执行完毕可以查看redis状态及redis端口是否启动，正常是都启动的；</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/8792d06ae0f649b4be2e18ae24eb0fac.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h1 id="二、roles-角色" tabindex="-1"><a class="header-anchor" href="#二、roles-角色" aria-hidden="true">#</a> 二、Roles 角色</h1>
<blockquote>
<p>  在Ansible中，有一个roles的概念。roles并不是指定具体的东西，而是一种规范，将复杂的Playbook分割为多个文件的机制，简化复杂的Playbook编写，并且使Playbook的复用变得简单。</p>
</blockquote>
<font color=red>建议：每个roles最好只使用一个tasks这样方便调用，能够很好的做到解耦；</font><h2 id="_2-1-roles介绍与优势" tabindex="-1"><a class="header-anchor" href="#_2-1-roles介绍与优势" aria-hidden="true">#</a> 2.1 Roles介绍与优势</h2>
<p>一般情况下将roles写在 <strong>/etc/ansible/roles</strong> 中，也可以写在其他任意位置（写在其他位置要自己手动建立一个roles文件夹）</p>
<ul>
<li>对于以上所有方式有个缺点就是无法实现同时部署web、database、keepalived等不同服务或者不同服务器组合不同的应用就需要写多个yaml文件，很难实现灵活的调用</li>
<li>roles用于层次性，结构化地组织playbook。roles能够根据层次结果自动装载变量文件、tasks以及handlers等。</li>
<li>要使用roles只需要在playbook中使用include指令即可。</li>
<li>简单来讲，roles就是通过分别将变量（vars）、文件（files）、任务（tasks）、模块（modules）以及处理器（handlers）放置于单独的目录中，并且可以便捷的include它们地一种机制。</li>
<li>角色一般用于基于主机构建服务的场景中，但是也可以用于构建守护进程等场景中。</li>
</ul>
<h2 id="_2-2-roles-的目录结构" tabindex="-1"><a class="header-anchor" href="#_2-2-roles-的目录结构" aria-hidden="true">#</a> 2.2 Roles 的目录结构</h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> 创建一个角色目录，用于演示：</label></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-pv</span> /etc/ansible/roles/<span class="token punctuation">{</span>nginx,mysql,httpd<span class="token punctuation">}</span>/<span class="token punctuation">{</span>files,templates,vars,tasks,handlers,meta,default<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> 查看Roles的目录结构：</label></li>
</ul>
<figure><img src="https://img-blog.csdnimg.cn/c8b5d88f5fa14aa98f35ff319b596cbd.png#pic_center" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> 目录解析：</label></li>
</ul>
<ul>
<li>
<p><code v-pre>/etc/ansible/roles/</code>：存放roles的文件路径</p>
</li>
<li>
<p><code v-pre>httpd</code>：存放<code v-pre>apached</code>服务的yml文件</p>
</li>
<li>
<p><code v-pre>mysql</code>：存放<code v-pre>mysql</code>服务的yml文件</p>
</li>
<li>
<p><code v-pre>nginx</code>：存放<code v-pre>nginx</code>服务的yml文件</p>
</li>
<li>
<p><code v-pre>default</code>：此目录至少应该有一个名为<strong>main.yml</strong>的文件，用于设定默认变量；</p>
</li>
<li>
<p><code v-pre>files</code>：存储由copy或者script等模块调用的文件或者脚本；</p>
</li>
<li>
<p><code v-pre>handlers</code>：此目录中至少应该有一个名为<strong>main.yml</strong>的文件，用于定义各个handler；其他文件需要由main.yml进行包含调用；</p>
</li>
<li>
<p><code v-pre>meta</code>：此目录中至少应该有一个名为<strong>main.yml</strong>的文件，定义当前角色的特殊设定以及依赖关系，其他文件需要由<strong>main.yml</strong>进行包含调用；</p>
</li>
<li>
<p><code v-pre>tasks</code>：此目录中至少应该有一个名为<strong>main.yml</strong>的文件，用于定义各个task；其他文件需要由<strong>main.yml</strong>进行包含调用；</p>
</li>
<li>
<p><code v-pre>templates</code>：存储由templates模块调用的模板文件；</p>
</li>
<li>
<p><code v-pre>vars</code>：此目录至少应该有一个名为<strong>main,yml</strong>的文件，用于定义各个variable；其他的文件需要由<strong>main.yml</strong>进行包含调用；</p>
</li>
</ul>
<h2 id="_2-3-ansible-galaxy-命令" tabindex="-1"><a class="header-anchor" href="#_2-3-ansible-galaxy-命令" aria-hidden="true">#</a> 2.3 ansible-galaxy 命令</h2>
<p>ansible-galaxy命令用于管理<code v-pre>roles</code>，同时也可以在 <a href="galaxy.ansible.com">galaxy.ansible.com</a> 上下载别人写好的<code v-pre>roles</code>。</p>
<ul>
<li>1、初始化roles的目录结构</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost roles<span class="token punctuation">]</span><span class="token comment"># ansible-galaxy init /etc/ansible/roles/webserver</span>
- Role /etc/ansible/roles/webserver was created successfully
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>2、安装别人写好的roles</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost roles<span class="token punctuation">]</span><span class="token comment"># ansible-galaxy role install -p /etc/ansible/roles tenequm.mysql</span>
- downloading role <span class="token string">'mysql'</span>, owned by tenequm
- downloading role from https://github.com/tenequm/ansible-mysql/archive/1.0.1.tar.gz
     <span class="token punctuation">[</span>ERROR<span class="token punctuation">]</span>: failed to download the file: <span class="token operator">&lt;</span>urlopen error timed out<span class="token operator">></span>
    <span class="token punctuation">[</span>WARNING<span class="token punctuation">]</span>: - tenequm.mysql was NOT installed successfully.
    ERROR<span class="token operator">!</span> - you can use --ignore-errors to skip failed roles and finish processing the list.


<span class="token comment"># 会遇到两个报错，暂时还没找到解决方法，我们可以先使用wget去拉取，第二行downloading已经给出了地址，拉取一下；</span>
<span class="token punctuation">[</span>root@localhost roles<span class="token punctuation">]</span><span class="token comment"># wget https://github.com/tenequm/ansible-mysql/archive/1.0.1.tar.gz</span>

<span class="token comment"># 拉取完，解压即可，解压后的名字为：ansible-mysql-1.0.1</span>
<span class="token punctuation">[</span>root@localhost roles<span class="token punctuation">]</span><span class="token comment"># tar xf 1.0.1.tar.gz </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>拉取、解压完就可以看到roles目录下多了一个新的目录<code v-pre>ansible-mysql-1.0.1</code>，里面存放的mysql。</p>
<figure><img src="https://img-blog.csdnimg.cn/b535bb365889403294c59929ebde956f.png#pic_center" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>3、列出已安装的roles</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost roles<span class="token punctuation">]</span><span class="token comment"># ansible-galaxy list</span>
<span class="token comment"># /usr/share/ansible/roles</span>
<span class="token comment"># /etc/ansible/roles</span>
- webserver, <span class="token punctuation">(</span>unknown version<span class="token punctuation">)</span>
- ansible-mysql-1.0.1, <span class="token punctuation">(</span>unknown version<span class="token punctuation">)</span>
<span class="token punctuation">[</span>WARNING<span class="token punctuation">]</span>: - the configured path /root/.ansible/roles does not exist.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>4、查看指定roles的信息</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost roles<span class="token punctuation">]</span><span class="token comment"># ansible-galaxy info tenequm.mysql</span>

Role: tenequm.mysql
        description: Simply installs MySQL <span class="token number">5.7</span> on Xenial.
        commit: b3a7139ba44a91e9568345565e861e326e9d401e
        commit_message: Added priveleges configs <span class="token keyword">for</span> users.
        created: <span class="token number">2023</span>-05-08T20:18:24.338543Z
        download_count: <span class="token number">179</span>
        github_branch: master
        github_repo: ansible-mysql
        github_user: tenequm
        id: <span class="token number">103</span>
        modified: <span class="token number">2023</span>-10-10T00:48:33.420438Z
        path: <span class="token punctuation">(</span>u<span class="token string">'/root/.ansible/roles'</span>, u<span class="token string">'/usr/share/ansible/roles'</span>, u<span class="token string">'/etc/ansible/roles'</span><span class="token punctuation">)</span>
        upstream_id: <span class="token number">17029</span>
        username: tenequm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>5、删除一个roles</li>
</ul>
<blockquote>
<p>如果是使用的wget拉取的，那么删除他的哪个roles目录就可以；</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost roles<span class="token punctuation">]</span><span class="token comment"># ansible-galaxy remove /etc/ansible/roles/tenequm.mysql</span>
- successfully removed /etc/ansible/roles/bennojoy.mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-4-使用roles-部署nginx" tabindex="-1"><a class="header-anchor" href="#_2-4-使用roles-部署nginx" aria-hidden="true">#</a> 2.4 使用Roles（部署nginx）</h2>
<p>流程：</p>
<blockquote>
<p>定义配置文件 --&gt; 定义jinja2模板，生成配置文件用 --&gt; 定义变量 --&gt; 定义触发（通知已定义在配置文件中） --&gt; 定义roles的yml文件<br></p>
<p>5步<br></p>
<p>检查yml语法 --&gt; 执行roles.yml文件 --&gt; 查看服务启动状态</p>
</blockquote>
<ul>
<li>定义配置文件：<code v-pre>/etc/ansible/roles/nginx/tasks/main.yml</code></li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install wget
	<span class="token key atrule">yum</span><span class="token punctuation">:</span> name=wget state=present
	
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> wget nginx package
	<span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token string">" wget http://nginx.org/packages/centos/7/x86_64/RPMS/nginx-1.18.0-1.el7.ngx.x86_64.rpm -O /etc/ansible/roles/nginx/files/nginx-1.18.0-1.el7.ngx.x86_64.rpm"</span>
	
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> cp nginx
  <span class="token key atrule">copy</span><span class="token punctuation">:</span> src=nginx<span class="token punctuation">-</span>1.18.0<span class="token punctuation">-</span>1.el7.ngx.x86_64.rpm dest=/tmp/nginx<span class="token punctuation">-</span>1.18.0<span class="token punctuation">-</span>1.el7.ngx.x86_64.rpm
  
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install nginx
  <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=/tmp/nginx<span class="token punctuation">-</span>1.18.0<span class="token punctuation">-</span>1.el7.ngx.x86_64.rpm state=latest
  
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> conf
  <span class="token key atrule">template</span><span class="token punctuation">:</span> src=nginx.conf.j2 dest=/etc/nginx/nginx.conf
  <span class="token key atrule">tags</span><span class="token punctuation">:</span> nginxconf
  <span class="token key atrule">notify</span><span class="token punctuation">:</span> new conf to reload

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> start service
  <span class="token key atrule">service</span><span class="token punctuation">:</span> name=nginx state=started enabled=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>定义templates生成配置文件：<code v-pre>/etc/ansible/roles/nginx/templates/nginx.conf.j2</code></li>
</ul>
<div class="language-jinja2 line-numbers-mode" data-ext="jinja2"><pre v-pre class="language-jinja2"><code>user  nginx; #设置nginx服务的系统使用用户
worker_processes  ___JINJA20___; #工作进程数

error_log  /var/log/nginx/error.log warn; #nginx的错误日志
pid        /var/run/nginx.pid; #nginx启动时候的pid

events {
    worker_connections  1024; #每个进程允许的最大连接数
}

http { #http请求配置，一个http可以包含多个server

    #定义 Content-Type
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    #日志格式 此处main与access_log中的main对应
    #$remote_addr：客户端地址
    #$remote_user：http客户端请求nginx认证的用户名，默认不开启认证模块，不会记录
    #$timelocal：nginx的时间
    #$request：请求method + 路由 + http协议版本
    #status：http reponse 状态码
    #body_bytes_sent：response body的大小
    #$http_referer：referer头信息参数，表示上级页面
    #$http_user_agent：user-agent头信息参数，客户端信息
    #$http_x_forwarded_for：x-forwarded-for头信息参数
    log_format  main  '$http_user_agent' '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    #访问日志，后面的main表示使用log_format中的main格式记录到access.log中
    access_log  /var/log/nginx/access.log  main;

    #nginx的一大优势，高效率文件传输
    sendfile        on;
    #tcp_nopush     on;

    #客户端与服务端的超时时间，单位秒
    keepalive_timeout  65;

    #gzip  on;
    server { #http服务，一个server可以配置多个location
        listen       ___JINJA21___; #服务监听端口
        server_name  localhost; #主机名、域名

        #charset koi8-r;
        #access_log  /var/log/nginx/host.access.log  main;

        location / {
            root   /usr/share/nginx/html; #页面存放目录
            index  index.html index.htm; #默认页面
        }

        #error_page  404              /404.html;

        # 将500 502 503 504的错误页面重定向到 /50x.html
        error_page   500 502 503 504  /50x.html;
        location = /50x.html { #匹配error_page指定的页面路径
            root   /usr/share/nginx/html; #页面存放的目录
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }
    include /etc/nginx/conf.d/*.conf;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>定义变量：<code v-pre> /etc/ansible/roles/nginx/vars/main.yml</code></li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">nginxport</span><span class="token punctuation">:</span> <span class="token number">9999</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>定义触发：<code v-pre>/etc/ansible/roles/nginx/handlers/main.yml</code></li>
</ul>
<p>因为上面通知已经定义，所以，还需要定义一个触发；</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> new conf to reload
  <span class="token key atrule">service</span><span class="token punctuation">:</span> name=nginx state=restarted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>定义剧本文件：<code v-pre>/etc/ansible/roles/nginx/roles.yml</code></li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> web
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>检查yml文件语法是否正确</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost nginx<span class="token punctuation">]</span><span class="token comment"># ansible-playbook --syntax-check roles.yml </span>

playbook: roles.yml

<span class="token comment"># 检查roles会自动去检查其他的yml文件的语法。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>执行roles.yml文件</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost nginx<span class="token punctuation">]</span><span class="token comment"># ansible-playbook roles.yml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>查看服务启动状态</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost nginx<span class="token punctuation">]</span><span class="token comment"># systemctl status nginx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/42915933fc834abd864aaae0884271b7.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="_2-5-查看-nginx-树形目录结构" tabindex="-1"><a class="header-anchor" href="#_2-5-查看-nginx-树形目录结构" aria-hidden="true">#</a> 2.5 查看 nginx 树形目录结构</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>tree /etc/ansible/roles/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/6dad4ece07df4963b6a7a0f806389915.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>这里完整的一个使用Roles部署nginx服务就完成了；</p>
<h1 id="三、相关文章" tabindex="-1"><a class="header-anchor" href="#三、相关文章" aria-hidden="true">#</a> 三、相关文章</h1>
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


