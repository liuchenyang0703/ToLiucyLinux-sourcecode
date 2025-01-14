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
<h2 id="一、jinjia2-模板" tabindex="-1"><a class="header-anchor" href="#一、jinjia2-模板"><span>一、jinjia2 模板</span></a></h2>
<p>jinja2是Python的全功能模板引擎。在python的WEB开发中被广泛应用。</p>
<p>Ansible通常会使用jinja2模板来修改被管理主机的配置文件等。</p>
<h3 id="_1-1-在-ansible-中的使用" tabindex="-1"><a class="header-anchor" href="#_1-1-在-ansible-中的使用"><span>1.1 在 Ansible 中的使用</span></a></h3>
<p>  使用Ansible的jinja2模板也就是使用<code v-pre>template</code> 模块，该模块和<code v-pre>copy</code> 模块一样，都是将文件复制到远端主机上去，但是区别在于，<code v-pre>template</code> 模块可以获取到文件中的变量，而copy则是原封不动的把文件内容复制过去。比如想把脚本中的变量名改成主机名，如果使用copy模块则推送过去的就是{{ ansible_fqdn }}，不变，如果使用template，则会变成对应的主机名。</p>
<font color=red>Ansible允许jinja2模板中使用条件判断和循环，但是不允许在playbook中使用。通常jinja2模板文件的后缀为`.j2`</font><h3 id="_1-2-jinjia2-模板语法" tabindex="-1"><a class="header-anchor" href="#_1-2-jinjia2-模板语法"><span>1.2 jinjia2 模板语法</span></a></h3>
<h4 id="_1-2-1-基础语法" tabindex="-1"><a class="header-anchor" href="#_1-2-1-基础语法"><span>1.2.1 基础语法</span></a></h4>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 基础语法</label></li>
</ul>
<p>1)playbook文件使用template模块</p>
<p>2)模板文件里面变量使用{{名称}}，比如{{PORT}}或使用facts</p>
<p>3){{}}也可以使用表达式，比如{{ 3+5 }} {{3 in [1,2,3,4,5] }}</p>
<font color=red>说明：{{}}中的表达式其实就是python中的表达式，可以包括比较运算，算数运算，逻辑运算，成员运行。</font><p>该模板支持：</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">字符串：使用单引号或双引号；</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">　　数字：整数，浮点数；</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">　　列表：[item1, item2, </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">...</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">　　元组：(item1, item2, </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">...</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">　　字典：{key1:value1, key2:value2, </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">...</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">　　布尔型：true</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">　　算术运算：</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">　　　　+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">//</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">**</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">　　比较操作：</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">　　　　==</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">!=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">>=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;=</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">　　逻辑运算：</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">　　　　and</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">or</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">not</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<div class="language-jinja2 line-numbers-mode" data-highlighter="shiki" data-ext="jinja2" data-title="jinja2" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@localhost jinja2]# vim my_template.j2 </span></span>
<span class="line"><span>ServerName {{ hostname }}</span></span>
<span class="line"><span>Listen {{ port }}</span></span>
<span class="line"><span>Debug {{ debug_mode }}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在Playbook中使用模板：<br>
在 Ansible Playbook中，可以使用<code v-pre>template</code>模块来加载模板文件并将变量传递给它。以下是一个示例Playbook：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root@localhost jinja2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]# </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">vim jinja.yml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">使用Jinja2模板</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  hosts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">your_target_hosts</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  vars</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    hostname</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">example.com</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">8080</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    debug_mode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">True</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  tasks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">生成配置文件</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">my_template.j2</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        dest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/etc/ansible/yml/jinja2/myapp.conf</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们使用了<code v-pre>template</code>模块，指定了模板文件的源 (<code v-pre>src</code>) 和目标 (<code v-pre>dest</code>)。我们还传递了变量 <code v-pre>hostname</code>、<code v-pre>port</code> 和 <code v-pre>debug_mode</code>，这些变量会在模板中替换<code v-pre>{{ }}</code>中的相应位置。</p>
</li>
<li>
<p>运行Playbook：<br>
运行上述Playbook，Ansible将使用模板文件生成 <code v-pre>/etc/ansible/yml/jinja2/myapp.conf</code> 配置文件，并将模板中的<code v-pre>{{ }}</code>替换为变量的值。</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 结果值为：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ServerName</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> example.com</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Listen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 8080</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Debug</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> True</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模板文件中的<code v-pre>{{ }}</code>不仅可以包含变量，还可以包含表达式，如您所述的比较运算、算术运算、逻辑运算等。这使得您可以在模板中执行各种操作以生成需要的配置或文本。</p>
<p>Jinja2模板的强大之处在于它允许创建灵活和动态的配置文件，以适应不同的场景和变量值。</p>
<h4 id="_1-2-2-流程控制" tabindex="-1"><a class="header-anchor" href="#_1-2-2-流程控制"><span>1.2.2 流程控制</span></a></h4>
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
<div class="language-jinja2 line-numbers-mode" data-highlighter="shiki" data-ext="jinja2" data-title="jinja2" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{% if EXPR %}</span></span>
<span class="line"><span>	执行内容</span></span>
<span class="line"><span>{% else %}</span></span>
<span class="line"><span>	执行内容</span></span>
<span class="line"><span>{% endif %}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例：</p>
<div class="language-jinja2 line-numbers-mode" data-highlighter="shiki" data-ext="jinja2" data-title="jinja2" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{% if is_production %}</span></span>
<span class="line"><span>    # 生产环境配置</span></span>
<span class="line"><span>    DebugLevel: 0</span></span>
<span class="line"><span>{% else %}</span></span>
<span class="line"><span>    # 开发/测试环境配置</span></span>
<span class="line"><span>    DebugLevel: 2</span></span>
<span class="line"><span>{% endif %}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>多条件判断</li>
</ul>
<p>格式：</p>
<div class="language-jinja2 line-numbers-mode" data-highlighter="shiki" data-ext="jinja2" data-title="jinja2" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{% if EXPR %}</span></span>
<span class="line"><span>	执行内容</span></span>
<span class="line"><span>{% elif EXPR %}</span></span>
<span class="line"><span>	执行内容</span></span>
<span class="line"><span>{% else %}</span></span>
<span class="line"><span>	执行内容</span></span>
<span class="line"><span>{% endif %}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例：</p>
<div class="language-jinja2 line-numbers-mode" data-highlighter="shiki" data-ext="jinja2" data-title="jinja2" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{% if is_production %}</span></span>
<span class="line"><span>	DebugLevel: 0</span></span>
<span class="line"><span>{% elif is_production %}</span></span>
<span class="line"><span>	DebugLevel: 1</span></span>
<span class="line"><span>{% else %}</span></span>
<span class="line"><span>	DebugLevel: 2</span></span>
<span class="line"><span>{% endif %}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，根据<code v-pre>is_production</code>变量的值，将生成不同的配置。</p>
<ul>
<li>循环表达式</li>
</ul>
<p>可以使用<code v-pre>{% for %}</code>和<code v-pre>{% endfor %}</code>块来实现循环。以下是一个示例：</p>
<p>格式：</p>
<div class="language-jinja2 line-numbers-mode" data-highlighter="shiki" data-ext="jinja2" data-title="jinja2" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{% for i in EXPR %}</span></span>
<span class="line"><span>	执行内容</span></span>
<span class="line"><span>{% endfor %}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例：</p>
<div class="language-jinja2 line-numbers-mode" data-highlighter="shiki" data-ext="jinja2" data-title="jinja2" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{% for item in list_items %}</span></span>
<span class="line"><span>    - {{ item }}</span></span>
<span class="line"><span>{% endfor %}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，<code v-pre>list_items</code> 是一个包含多个元素的列表，模板将循环遍历列表中的每个元素并生成相应的输出。</p>
<blockquote>
<p>说明:默认不支持<code v-pre>break</code>和<code v-pre>continue</code>的，但是可以使用ansible的扩展选项，在配置<code v-pre>/etc/ansible/ansible.cfg</code>中的132行中:</p>
<p><code v-pre>jinja2_extensions = jinja2.ext.do,jinja2.ext.i18n,jinja2.ext.loopcontrols</code></p>
</blockquote>
<h4 id="_1-2-3-过滤器" tabindex="-1"><a class="header-anchor" href="#_1-2-3-过滤器"><span>1.2.3 过滤器</span></a></h4>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 过滤器</label></li>
</ul>
<p>Jinja2还支持过滤器，可以使用过滤器来对变量进行操作。例如，可以使用<code v-pre>default</code>过滤器来设置默认值：</p>
<div class="language-jinja2 line-numbers-mode" data-highlighter="shiki" data-ext="jinja2" data-title="jinja2" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{{ variable | default("default_value") }}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>或者，您可以使用<code v-pre>length</code>过滤器来获取列表的长度：</p>
<div class="language-jinja2 line-numbers-mode" data-highlighter="shiki" data-ext="jinja2" data-title="jinja2" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>The list has {{ list_items | length }} items.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_1-2-4-其他控制结构" tabindex="-1"><a class="header-anchor" href="#_1-2-4-其他控制结构"><span>1.2.4 其他控制结构</span></a></h4>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 其他控制结构</label></li>
</ul>
<p>Jinja2还支持其他控制结构，如<code v-pre>{% include %}</code>用于包含其他模板文件，以及<code v-pre>{% macro %}</code>和<code v-pre>{% call %}</code>用于定义和调用宏。</p>
<p>请注意，Jinja2语法和功能非常强大，支持许多高级用例，例如宏、继承、自定义过滤器等。要更深入地了解Jinja2模板的流程控制和功能，请查看Jinja2的官方文档。在Ansible中，可以将这些模板用于生成配置文件、编排任务等，以满足不同的需求和环境。</p>
<h3 id="_1-3-templates-模块" tabindex="-1"><a class="header-anchor" href="#_1-3-templates-模块"><span>1.3 templates 模块</span></a></h3>
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
<h3 id="_1-4-jinja2-使用案例" tabindex="-1"><a class="header-anchor" href="#_1-4-jinja2-使用案例"><span>1.4 jinja2 使用案例</span></a></h3>
<p>比如需要实现对被控端主机安装redis服务，默认的redis服务只监听本地的127.0.0.1端口，换句话说，其他主机是不可以访问该redis服务器的，如何来解决这个问题呢？此时就可以使用jinja2的模板，在其中引用变量，使用template模块进行渲染。</p>
<blockquote>
<p>本案例使用了：<code v-pre>jinja2</code>模板、<code v-pre>templates</code>模块、<code v-pre>copy</code>模块、<code v-pre>yum</code>模块、<code v-pre>shell</code>模块、<code v-pre>service</code>模块、<code v-pre>vars</code>定义变量、<code v-pre>register</code>变量注册、<code v-pre>ignore_errors</code>忽略错误、<code v-pre>tags</code>标签、<code v-pre>when</code>判断、<code v-pre>notify</code> 和 <code v-pre>handlers</code>通知与触发（处理程序）</p>
</blockquote>
<ul>
<li>1、创建一个自定义的Redis配置模板文件，如 <code v-pre>redis_conf.j2</code>，并在其中修改Redis绑定地址以侦听所有IP地址：</li>
</ul>
<div class="language-jinja2 line-numbers-mode" data-highlighter="shiki" data-ext="jinja2" data-title="jinja2" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@localhost redis]# vim redis_conf.j2</span></span>
<span class="line"><span>bind {{ ansible_host }} 127.0.0.1</span></span>
<span class="line"><span>port {{ redis_port }}</span></span>
<span class="line"><span>protected-mode no</span></span>
<span class="line"><span>tcp-backlog 511</span></span>
<span class="line"><span>timeout 0</span></span>
<span class="line"><span>tcp-keepalive 300</span></span>
<span class="line"><span>daemonize yes</span></span>
<span class="line"><span>supervised no</span></span>
<span class="line"><span>pidfile /var/run/redis_6379.pid</span></span>
<span class="line"><span>loglevel notice</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在此示例中，我们使用了 <code v-pre>bind {{ ansible_host }} 127.0.0.1</code> 来告诉Redis服务只接受本地IP连接，并使用变量 <code v-pre>redis_port</code> 来指定Redis端口。</p>
<ul>
<li>2、在Ansible Playbook中，使用<code v-pre>template</code>模块加载该模板并渲染它，然后将渲染后的配置文件复制到Redis配置文件目录。以下是一个示例Playbook：</li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root@localhost redis</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]# </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">vim redis.yml</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">---</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">部署Redis服务</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  hosts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">web</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  remote_user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  gather_facts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">no</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  vars</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    redis_port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">6379</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # 指定Redis端口</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  tasks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Upload yum repo</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      copy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/etc/yum.repos.d/CentOS-Base.repo</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        dest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/etc/yum.repos.d</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        backup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">no</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      tags</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">upload_yum</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">upload_repo</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">redis_server</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Upload epel repo</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      copy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/etc/yum.repos.d/epel.repo</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        dest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/etc/yum.repos.d/</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        backup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">no</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      tags</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">upload_epel</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">upload_repo</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">redis_server</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Check redis install</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      shell</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/usr/bin/rpm -q redis</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      register</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">redis_msg</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      ignore_errors</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">yes</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      tags</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">check_redis</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">redis_server</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Install redis server</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      yum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">redis</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">present</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      when</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">redis_msg.failed == true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      tags</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">install_redis</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">redis_server</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Upload redis.conf</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">redis_conf.j2</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        dest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/etc/redis.conf</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      notify</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Restart Redis</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      tags</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">upload_redis.conf</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">redis_server</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Start Redis server</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      service</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">redis</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">started</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">yes</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      tags</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">start_redis</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">redis_server</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Restart Redis server</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      service</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">redis</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">restarted</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      tags</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">restart_redis</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Stop Redis Server</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      service</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">redis</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">stopped</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      tags</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">stop_redis</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">uninstall_redis</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">uninstall Redis Server</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      yum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">redis</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">absent</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      tags</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">uninstall_redis</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  handlers</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Restart Redis</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      service</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">redis</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        state</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">restarted</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>3、执行检查：</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 检查语法</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost redis]# ansible-playbook --syntax-check redis.yml </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 列出任务列表</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost redis]# ansible-playbook --list-tasks redis.yml </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 列出所有tags标签</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost redis]# ansible-playbook --list-tags redis.yml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/008b476b692c4b3394a68eabf7707c11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>tasks 解析：（列出<code v-pre>tasks</code>任务的时候后面也会包含<code v-pre>tags</code>标签，每个任务用的标签都有哪些）</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tasks:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  Upload</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> repo</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		 # 更新yum源</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  Upload</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> epel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> repo</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		 # 更新yum扩展源</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  Check</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> redis</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	 # 检查是否安装过 redis</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  Install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> redis</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> server</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	 # 安装 redis</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  Upload</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> redis.conf</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		 # 更新 redis 配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  Start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Redis</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> server</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	 # 启动 redis</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  Restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Redis</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> server</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	 # 重启 redis</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  Stop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Redis</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Server</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		 # 停止 redis</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  uninstall</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Redis</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Server</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # 卸载 redis</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tags 解析：（列出<code v-pre>tasks</code>任务的时候后面也会包含<code v-pre>tags</code>标签，每个任务用的标签都有哪些）</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">TASK</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> TAGS:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  upload_repo</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		# 更新yum源，包含：Upload yum repo，Upload epel repo</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  upload_yum</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		# 更新yum源</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  upload_epel</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		# 更新yum扩展源</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  redis_server</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		# 一键安装redis，包含：Upload yum repo、Upload epel repo、Check redis install、Install redis server、Upload redis.conf、Start Redis server</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  check_redis</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		# 检查是否安装 redis</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  upload_redis.conf</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	# 更新 redis 配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  install_redis</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		# 安装 redis</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  restart_redis</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		# 重启 redis</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  start_redis</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		# 启动 redis</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  stop_redis</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">		# 停止 redis</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  uninstall_redis</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	# 卸载 redis</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>4、执行yml脚本</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行更新yum源</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost redis]# ansible-playbook redis.yml -t upload_repo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 检查是否安装过 redis，会有报错说找不到，不会影响，里面有 ignore_errors 忽略错误；</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost redis]# ansible-playbook redis.yml -t check_redis</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行安装 redis（不能单独执行redis，会报错，因为有一个when判断需要调用上面的查询是否有redis服务）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost redis]# ansible-playbook redis.yml -t check_redis,install_redis</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行更新 redis 配置文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost redis]# ansible-playbook redis.yml -t upload_redis.conf</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行完毕可以查看redis状态及redis端口是否启动，正常是都启动的；</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行停止 redis</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost redis]# ansible-playbook redis.yml -t stop_redis</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行完毕可以查看redis状态及redis端口是否启动，如果没有那就是没问题，因为这是停止；</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行卸载 redis</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost redis]# ansible-playbook redis.yml -t uninstall_redis</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行完可以使用： rpm -q redis 查看或使用 check_redis标签检查</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行一键安装redis</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost redis]# ansible-playbook redis.yml -t redis_server</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行完毕可以查看redis状态及redis端口是否启动，正常是都启动的；</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/8792d06ae0f649b4be2e18ae24eb0fac.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="二、roles-角色" tabindex="-1"><a class="header-anchor" href="#二、roles-角色"><span>二、Roles 角色</span></a></h2>
<blockquote>
<p>  在Ansible中，有一个roles的概念。roles并不是指定具体的东西，而是一种规范，将复杂的Playbook分割为多个文件的机制，简化复杂的Playbook编写，并且使Playbook的复用变得简单。</p>
</blockquote>
<font color=red>建议：每个roles最好只使用一个tasks这样方便调用，能够很好的做到解耦；</font><h3 id="_2-1-roles介绍与优势" tabindex="-1"><a class="header-anchor" href="#_2-1-roles介绍与优势"><span>2.1 Roles介绍与优势</span></a></h3>
<p>一般情况下将roles写在 <strong>/etc/ansible/roles</strong> 中，也可以写在其他任意位置（写在其他位置要自己手动建立一个roles文件夹）</p>
<ul>
<li>对于以上所有方式有个缺点就是无法实现同时部署web、database、keepalived等不同服务或者不同服务器组合不同的应用就需要写多个yaml文件，很难实现灵活的调用</li>
<li>roles用于层次性，结构化地组织playbook。roles能够根据层次结果自动装载变量文件、tasks以及handlers等。</li>
<li>要使用roles只需要在playbook中使用include指令即可。</li>
<li>简单来讲，roles就是通过分别将变量（vars）、文件（files）、任务（tasks）、模块（modules）以及处理器（handlers）放置于单独的目录中，并且可以便捷的include它们地一种机制。</li>
<li>角色一般用于基于主机构建服务的场景中，但是也可以用于构建守护进程等场景中。</li>
</ul>
<h3 id="_2-2-roles-的目录结构" tabindex="-1"><a class="header-anchor" href="#_2-2-roles-的目录结构"><span>2.2 Roles 的目录结构</span></a></h3>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> 创建一个角色目录，用于演示：</label></li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -pv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/ansible/roles/{nginx,mysql,httpd}/{files,templates,vars,tasks,handlers,meta,default}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> 查看Roles的目录结构：</label></li>
</ul>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/c8b5d88f5fa14aa98f35ff319b596cbd.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
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
<h3 id="_2-3-ansible-galaxy-命令" tabindex="-1"><a class="header-anchor" href="#_2-3-ansible-galaxy-命令"><span>2.3 ansible-galaxy 命令</span></a></h3>
<p>ansible-galaxy命令用于管理<code v-pre>roles</code>，同时也可以在 <a href="galaxy.ansible.com">galaxy.ansible.com</a> 上下载别人写好的<code v-pre>roles</code>。</p>
<ul>
<li>1、初始化roles的目录结构</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost roles]# ansible-galaxy init /etc/ansible/roles/webserver</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Role</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/ansible/roles/webserver</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> was</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> created</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> successfully</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>2、安装别人写好的roles</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost roles]# ansible-galaxy role install -p /etc/ansible/roles tenequm.mysql</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> downloading</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> role</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'mysql',</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> owned</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> by</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tenequm</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> downloading</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> role</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://github.com/tenequm/ansible-mysql/archive/1.0.1.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">     [ERROR]</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> failed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> download</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> file:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">urlopen</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> error</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> timed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ou</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">t></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    [WARNING]</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tenequm.mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> was</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> NOT</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> installed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> successfully.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    ERROR!</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> you</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> can</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> use</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --ignore-errors</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> skip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> failed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> roles</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> and</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> finish</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> processing</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> list.</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 会遇到两个报错，暂时还没找到解决方法，我们可以先使用wget去拉取，第二行downloading已经给出了地址，拉取一下；</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost roles]# wget https://github.com/tenequm/ansible-mysql/archive/1.0.1.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 拉取完，解压即可，解压后的名字为：ansible-mysql-1.0.1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost roles]# tar xf 1.0.1.tar.gz</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>拉取、解压完就可以看到roles目录下多了一个新的目录<code v-pre>ansible-mysql-1.0.1</code>，里面存放的mysql。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/b535bb365889403294c59929ebde956f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>3、列出已安装的roles</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost roles]# ansible-galaxy list</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># /usr/share/ansible/roles</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># /etc/ansible/roles</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> webserver,</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (unknown </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ansible-mysql-1.0.1,</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (unknown </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[WARNING]: - the configured path /root/.ansible/roles does not exist.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>4、查看指定roles的信息</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost roles]# ansible-galaxy info tenequm.mysql</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Role:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tenequm.mysql</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        description:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Simply</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> installs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> MySQL</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 5.7</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> on</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Xenial.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        commit:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> b3a7139ba44a91e9568345565e861e326e9d401e</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        commit_message:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Added</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> priveleges</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> configs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> for</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> users.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        created:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 2023-05-08T20:18:24.338543Z</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        download_count:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 179</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        github_branch:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> master</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        github_repo:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ansible-mysql</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        github_user:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tenequm</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        id:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 103</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        modified:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 2023-10-10T00:48:33.420438Z</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        path:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'/root/.ansible/roles'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">u'/usr/share/ansible/roles',</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> u'/etc/ansible/roles'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        upstream_id:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 17029</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        username:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tenequm</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>5、删除一个roles</li>
</ul>
<blockquote>
<p>如果是使用的wget拉取的，那么删除他的哪个roles目录就可以；</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost roles]# ansible-galaxy remove /etc/ansible/roles/tenequm.mysql</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> successfully</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> removed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/ansible/roles/bennojoy.mysql</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-使用roles-部署nginx" tabindex="-1"><a class="header-anchor" href="#_2-4-使用roles-部署nginx"><span>2.4 使用Roles（部署nginx）</span></a></h3>
<p>流程：</p>
<blockquote>
<p>定义配置文件 --&gt; 定义jinja2模板，生成配置文件用 --&gt; 定义变量 --&gt; 定义触发（通知已定义在配置文件中） --&gt; 定义roles的yml文件<br></p>
<p>5步<br></p>
<p>检查yml语法 --&gt; 执行roles.yml文件 --&gt; 查看服务启动状态</p>
</blockquote>
<ul>
<li>定义配置文件：<code v-pre>/etc/ansible/roles/nginx/tasks/main.yml</code></li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">install wget</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	yum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">name=wget state=present</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">wget nginx package</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">" wget http://nginx.org/packages/centos/7/x86_64/RPMS/nginx-1.18.0-1.el7.ngx.x86_64.rpm -O /etc/ansible/roles/nginx/files/nginx-1.18.0-1.el7.ngx.x86_64.rpm"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">cp nginx</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  copy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">src=nginx-1.18.0-1.el7.ngx.x86_64.rpm dest=/tmp/nginx-1.18.0-1.el7.ngx.x86_64.rpm</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">install nginx</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  yum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">name=/tmp/nginx-1.18.0-1.el7.ngx.x86_64.rpm state=latest</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">conf</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">src=nginx.conf.j2 dest=/etc/nginx/nginx.conf</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  tags</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">nginxconf</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  notify</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">new conf to reload</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">start service</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  service</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">name=nginx state=started enabled=true</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>定义templates生成配置文件：<code v-pre>/etc/ansible/roles/nginx/templates/nginx.conf.j2</code></li>
</ul>
<div class="language-jinja2 line-numbers-mode" data-highlighter="shiki" data-ext="jinja2" data-title="jinja2" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>user  nginx; #设置nginx服务的系统使用用户</span></span>
<span class="line"><span>worker_processes  {{ ansible_processor_vcpus }}; #工作进程数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>error_log  /var/log/nginx/error.log warn; #nginx的错误日志</span></span>
<span class="line"><span>pid        /var/run/nginx.pid; #nginx启动时候的pid</span></span>
<span class="line"><span></span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>    worker_connections  1024; #每个进程允许的最大连接数</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http { #http请求配置，一个http可以包含多个server</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #定义 Content-Type</span></span>
<span class="line"><span>    include       /etc/nginx/mime.types;</span></span>
<span class="line"><span>    default_type  application/octet-stream;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #日志格式 此处main与access_log中的main对应</span></span>
<span class="line"><span>    #$remote_addr：客户端地址</span></span>
<span class="line"><span>    #$remote_user：http客户端请求nginx认证的用户名，默认不开启认证模块，不会记录</span></span>
<span class="line"><span>    #$timelocal：nginx的时间</span></span>
<span class="line"><span>    #$request：请求method + 路由 + http协议版本</span></span>
<span class="line"><span>    #status：http reponse 状态码</span></span>
<span class="line"><span>    #body_bytes_sent：response body的大小</span></span>
<span class="line"><span>    #$http_referer：referer头信息参数，表示上级页面</span></span>
<span class="line"><span>    #$http_user_agent：user-agent头信息参数，客户端信息</span></span>
<span class="line"><span>    #$http_x_forwarded_for：x-forwarded-for头信息参数</span></span>
<span class="line"><span>    log_format  main  '$http_user_agent' '$remote_addr - $remote_user [$time_local] "$request" '</span></span>
<span class="line"><span>                      '$status $body_bytes_sent "$http_referer" '</span></span>
<span class="line"><span>                      '"$http_user_agent" "$http_x_forwarded_for"';</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #访问日志，后面的main表示使用log_format中的main格式记录到access.log中</span></span>
<span class="line"><span>    access_log  /var/log/nginx/access.log  main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #nginx的一大优势，高效率文件传输</span></span>
<span class="line"><span>    sendfile        on;</span></span>
<span class="line"><span>    #tcp_nopush     on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #客户端与服务端的超时时间，单位秒</span></span>
<span class="line"><span>    keepalive_timeout  65;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #gzip  on;</span></span>
<span class="line"><span>    server { #http服务，一个server可以配置多个location</span></span>
<span class="line"><span>        listen       {{ nginxport }}; #服务监听端口</span></span>
<span class="line"><span>        server_name  localhost; #主机名、域名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #charset koi8-r;</span></span>
<span class="line"><span>        #access_log  /var/log/nginx/host.access.log  main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            root   /usr/share/nginx/html; #页面存放目录</span></span>
<span class="line"><span>            index  index.html index.htm; #默认页面</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #error_page  404              /404.html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 将500 502 503 504的错误页面重定向到 /50x.html</span></span>
<span class="line"><span>        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>        location = /50x.html { #匹配error_page指定的页面路径</span></span>
<span class="line"><span>            root   /usr/share/nginx/html; #页面存放的目录</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span>        #</span></span>
<span class="line"><span>        #location ~ \.php$ {</span></span>
<span class="line"><span>        #    proxy_pass   http://127.0.0.1;</span></span>
<span class="line"><span>        #}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span>        #</span></span>
<span class="line"><span>        #location ~ \.php$ {</span></span>
<span class="line"><span>        #    root           html;</span></span>
<span class="line"><span>        #    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span>        #    fastcgi_index  index.php;</span></span>
<span class="line"><span>        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span>        #    include        fastcgi_params;</span></span>
<span class="line"><span>        #}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # deny access to .htaccess files, if Apache's document root</span></span>
<span class="line"><span>        # concurs with nginx's one</span></span>
<span class="line"><span>        #</span></span>
<span class="line"><span>        #location ~ /\.ht {</span></span>
<span class="line"><span>        #    deny  all;</span></span>
<span class="line"><span>        #}</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    include /etc/nginx/conf.d/*.conf;</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>定义变量：<code v-pre> /etc/ansible/roles/nginx/vars/main.yml</code></li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">nginxport</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">9999</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>定义触发：<code v-pre>/etc/ansible/roles/nginx/handlers/main.yml</code></li>
</ul>
<p>因为上面通知已经定义，所以，还需要定义一个触发；</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">new conf to reload</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  service</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">name=nginx state=restarted</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>定义剧本文件：<code v-pre>/etc/ansible/roles/nginx/roles.yml</code></li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">hosts</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">web</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  remote_user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  roles</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">nginx</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>检查yml文件语法是否正确</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost nginx]# ansible-playbook --syntax-check roles.yml </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">playbook:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> roles.yml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 检查roles会自动去检查其他的yml文件的语法。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>执行roles.yml文件</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost nginx]# ansible-playbook roles.yml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>查看服务启动状态</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[root@localhost nginx]# systemctl status nginx</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/42915933fc834abd864aaae0884271b7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_2-5-查看-nginx-树形目录结构" tabindex="-1"><a class="header-anchor" href="#_2-5-查看-nginx-树形目录结构"><span>2.5 查看 nginx 树形目录结构</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tree</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/ansible/roles/nginx</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/6dad4ece07df4963b6a7a0f806389915.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这里完整的一个使用Roles部署nginx服务就完成了；</p>
<h2 id="三、相关文章" tabindex="-1"><a class="header-anchor" href="#三、相关文章"><span>三、相关文章</span></a></h2>
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


