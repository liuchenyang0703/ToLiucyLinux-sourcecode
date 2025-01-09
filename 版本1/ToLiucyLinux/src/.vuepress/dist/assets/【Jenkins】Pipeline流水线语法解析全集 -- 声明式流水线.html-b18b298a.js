import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o,c as u,a as n,b as s,d as a,w as l,e as i}from"./app-6706a352.js";const d={},r=n("figure",null,[n("img",{src:"https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/5cf90d2d830046058e5fa8768d5f47f4.jpeg",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),b=n("p",null,[s("👨‍🎓"),n("strong",null,"博主简介")],-1),v={href:"https://blog.csdn.net/liu_chen_yang?type=blog",target:"_blank",rel:"noopener noreferrer"},m=n("br",null,null,-1),k={href:"https://blog.csdn.net/liu_chen_yang?type=blog",target:"_blank",rel:"noopener noreferrer"},g=n("br",null,null,-1),h={href:"https://bbs.huaweicloud.com/community/myblog",target:"_blank",rel:"noopener noreferrer"},f=n("br",null,null,-1),_={href:"https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz",target:"_blank",rel:"noopener noreferrer"},y=n("br",null,null,-1),x=n("strong",null,"交流社区：",-1),q={href:"https://bbs.csdn.net/forums/lcy",target:"_blank",rel:"noopener noreferrer"},w=n("br",null,null,-1),P=n("br",null,null,-1),j=i('<hr><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p><strong>Jenkins提供了两种开发Pipeline的方式：脚本式和声明式。</strong></p><ol><li>脚本式流水线（也称为“传统”流水线）基于Groovy作为其特定于域的语言。</li><li>而声明式流水线提供了简化且更友好的语法，并带有用于定义它们的特定语句，而无需学习Groovy。声明式流水线语法错误在脚本开始时报告。这是一个很好的功能，因为您不会浪费时间，直到某个步骤未能意识到拼写错误或拼写错误。如前所述，流水线可以以声明式或脚本式编写。而且，<strong>声明式方法建立在脚本式方法的基础之上，通过添加”script”步骤，可以很容易地进行扩展。</strong></li></ol><p>声明式流水线 <strong>vs</strong> 脚本式流水线共同点：</p><ul><li>两者都是<code>pipeline</code>代码的持久实现，都能够使用pipeline内置的插件或者插件提供的steps，两者都可以利用共享库扩展。</li></ul><p>区别：</p><ul><li><p>两者不同之处在于语法和灵活性。</p></li><li><p>Declarative pipeline对用户来说，语法更严格，有固定的组织结构，更容易生成代码段，使其成为用户更理想的选择。</p></li><li><p>但是Scripted pipeline更加灵活，因为Groovy本身只能对结构和语法进行限制，对于更复杂的pipeline来说，用户可以根据自己的业务进行灵活的实现和扩展</p></li></ul><hr><h2 id="声明式流水线" tabindex="-1"><a class="header-anchor" href="#声明式流水线" aria-hidden="true">#</a> 声明式流水线</h2><p><strong>声明式流水线</strong><br> 必须使用pipeline语句定义有效的声明式流水线，并包括以下必需的部分：</p><ul><li><p>agent</p></li><li><p>stages</p></li><li><p>stage</p></li><li><p>steps</p></li></ul><p>另外，还有这些可用的指令：</p><ul><li>environment （用于设置环境变量，可定义在stage或pipeline部分。）</li><li>post（整个pipeline执行完成或者单个stage完成后需要执行的动作。）</li><li>tools（可定义在pipeline或stage部分。它会自动下载并安装我们指定的工具，并将其加入PATH变量中。）</li><li>input（定义在stage部分，会暂停pipeline，提示你输入内容。）</li><li>options（用于配置Jenkins pipeline本身的选项，比如options {retry（3）}指当pipeline失败时再重试2次。options指令可定义在stage或pipeline部分。）</li><li>parallel（并行执行多个step。在pipeline插件1.2版本后，parallel开始支持对多个阶段进行并行执行。）</li><li>parameters（与input不同，parameters是执行pipeline前传入的一些参数。）</li><li>script（用于执行一段 Groovy 脚本代码）</li><li>triggers（用于定义执行pipeline的触发器。）</li><li>when（当满足when定义的条件时，阶段才执行。）</li></ul><p>在使用指令时，需要注意的是每个指令都有自己的“作用域”。如果指令使用的位置不正确，Jenkins将会报错。</p>',15),E={href:"https://www.jenkins.io/zh/doc/book/pipeline/syntax/#parameters-example",target:"_blank",rel:"noopener noreferrer"},I=i(`<p>现在，我们将从所需的指令/部分开始，对列出的每个指令/部分进行描述。</p><p>这里我们就拿<code>hello world</code>的pipeline脚本举例，我们来看看pipeline脚本的组成；</p><p><code>hello world</code>脚本就是明显的声明式流水线。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pipeline <span class="token punctuation">{</span>
    agent any

    stages <span class="token punctuation">{</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&#39;Hello World&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚本都是以pipeline的关键字开头，接着看下pipeline内部具体由哪几部分组成。</p><h2 id="如何创建一个node节点" tabindex="-1"><a class="header-anchor" href="#如何创建一个node节点" aria-hidden="true">#</a> 如何创建一个node节点？</h2><p>为什么要创建node节点呢？因为下面要用到；简单来说，创建node节点打标签方便对服务器进行分类，在写jenkinsfile的时候便于管理服务器，对指定服务器进行指定操作；</p><p>如何创建呢？我们来讲一下；</p><p>首先，登录jenkins -- &gt; Manage Jenkins --&gt; nodes，在里面配置。</p><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/00ca47f3aadec673e6d53041e6fef763.png" alt="image-20231226113332353" tabindex="0" loading="lazy"><figcaption>image-20231226113332353</figcaption></figure><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/54218ee2196edbc6c34a47efc8f07b7d.png" alt="image-20231226113350109" tabindex="0" loading="lazy"><figcaption>image-20231226113350109</figcaption></figure><p>点进来之后，直接<code>new node</code>创建即可。</p><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/11d9b00443b0becd654e2b58eb1903af.png" alt="image-20231226113443840" tabindex="0" loading="lazy"><figcaption>image-20231226113443840</figcaption></figure><p>这里可以自己写节点名称，这里测试我就写test1了。</p><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/677c9048a192ec1062b65df79e0ab43e.png" alt="image-20231226113506143" tabindex="0" loading="lazy"><figcaption>image-20231226113506143</figcaption></figure><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/626eeaf100fa9bbe038f201ab287ddc0.png" alt="image-20240125111153073" tabindex="0" loading="lazy"><figcaption>image-20240125111153073</figcaption></figure><p>写完之后点击<code>create</code>创建即可，创建完之后会跳转到里面进行配置<code>node</code>信息。</p><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/d95c81c4c5d070c1a9c661671054b8c2.png" alt="image-20231226115217676" tabindex="0" loading="lazy"><figcaption>image-20231226115217676</figcaption></figure><p>点击保存即可；</p>`,19),U=n("p",null,[n("strong",null,"双方都需要配置免密登录。")],-1),J=n("strong",null,"免密登录命令：",-1),O=n("br",null,null,-1),z=n("br",null,null,-1),B=n("br",null,null,-1),D={href:"http://172.16.xx.xxx",target:"_blank",rel:"noopener noreferrer"},N=n("br",null,null,-1),R={href:"http://172.16.xx.xxx",target:"_blank",rel:"noopener noreferrer"},T=i(`<p>配置完之后可以进行连接了。</p><p>保存完点击刚刚创建的node节点，点进去，然后点击侧边的日志，可以看到连接情况；</p><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/bbcdb934072ec54ce8c506f110c40422.png" alt="image-20240125111950335" tabindex="0" loading="lazy"><figcaption>image-20240125111950335</figcaption></figure><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/dd98672021f9af79cdd4eecfea71a53c.png" alt="image-20231226130556616" tabindex="0" loading="lazy"><figcaption>image-20231226130556616</figcaption></figure><p>连接成功会显示已同步：</p><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/5eb6ab0e56802b9e030b164235860ac3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="agent" tabindex="-1"><a class="header-anchor" href="#agent" aria-hidden="true">#</a> agent</h3><p>agent 部分指明了pipeline脚本在哪台机器或者容器内执行，因为jenkins的工作模式是master-agent模式，master可以把流水线任务的执行放到其代理节点上执行。</p><p>同时jenkins的节点（master节点或者agent代理节点）可以打上标签，如下表示的是pipeline脚本需要在标签为test1的节点上运行。 -- &gt; 测试前需要有这个test1节点，如果没有会报错，或根据自己的节点标签来修改一下。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pipeline <span class="token punctuation">{</span>  
    agent <span class="token punctuation">{</span>  
        label <span class="token string">&#39;test1&#39;</span>  
    <span class="token punctuation">}</span>  
  
    stages <span class="token punctuation">{</span>  
        stage<span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            steps <span class="token punctuation">{</span>  
                <span class="token builtin class-name">echo</span> <span class="token string">&#39;Hello World&#39;</span>  
            <span class="token punctuation">}</span>  
        <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>agent模块也可以写到stage里，表示特定stage模块都在指定的agent节点上运行,如下所示:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pipeline <span class="token punctuation">{</span>
   agent any
    stages <span class="token punctuation">{</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             agent <span class="token punctuation">{</span>
                 label <span class="token string">&#39;test1&#39;</span>
      <span class="token punctuation">}</span>
            steps <span class="token punctuation">{</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&#39;Hello World&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在文章开头的hello world的脚本中，agent我们指定了any，这表示可以在任意节点上运行pipeline脚本。agent模块不可省略不写。</p><h3 id="stages" tabindex="-1"><a class="header-anchor" href="#stages" aria-hidden="true">#</a> stages</h3><p>接着来看下stages模块，stages模块由多个stage组成，一个stage表示一个阶段，比如我们通常将发布的整个流程分为编译，传输，部署等几个阶段。</p><h3 id="stage" tabindex="-1"><a class="header-anchor" href="#stage" aria-hidden="true">#</a> stage</h3><p>一个<code>stages</code>可以有多个<code>stage</code>；一个stage表示一个阶段，比如我们通常将发布的整个流程分为编译，传输，部署等几个阶段。</p><h3 id="steps" tabindex="-1"><a class="header-anchor" href="#steps" aria-hidden="true">#</a> steps</h3><p>一个阶段由多个步骤组成，在pipeline语法中，步骤通过steps模块表示，steps包含了一个或多个步骤，在上述hello world的pipeline脚本中，echo &#39;Hello World&#39; 就是一个步骤，比如我们想要执行shell命令就要运行sh步骤，如下所示：</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 一个steps包含<code>一个</code>执行步骤</label></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any

    stages <span class="token punctuation">{</span>
        stage(&#39;Hello&#39;) <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                sh &#39;ping 127.0.0.1 <span class="token punctuation">-</span>c 10&#39;
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 一个steps包含<code>多个</code>执行步骤</label></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any

    stages <span class="token punctuation">{</span>
        stage(&#39;Hello&#39;) <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                sh &#39;ping 127.0.0.1 <span class="token punctuation">-</span>c 10&#39;
                sh &#39;hostname <span class="token punctuation">-</span>I&#39;
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pipeline的步骤是可插拔的，可以通过安装某些插件来执行特定的步骤。<strong>【Blue Ocean】</strong></p><h3 id="post" tabindex="-1"><a class="header-anchor" href="#post" aria-hidden="true">#</a> post</h3><p>除了上述模块，还可以在stages或者steps模块后面定义post模块来表示整个pipeline执行完成或者单个stage完成后需要执行的动作。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any

    stages <span class="token punctuation">{</span>
        stage(&#39;post&#39;) <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                sh &#39;ping 127.0.0.1 <span class="token punctuation">-</span>c 5 <span class="token important">&amp;&amp;</span> hostname <span class="token punctuation">-</span>I&#39;
            <span class="token punctuation">}</span>
            post<span class="token punctuation">{</span>
            	
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时的post模块是不可以构建的，因为里面是空的什么条件都没有，会报错，所以里面需要加一些条件块（根据自己的情况来定义）；</p><p>post模块可以定义多个条件块，条件块里写上要执行的步骤，条件块有以下几种，</p><ul><li><strong>always</strong>: 无论当前执行结果是什么状态都执行</li><li><strong>emailext</strong>：邮件服务，执行发送邮件（需要安装mail插件）</li><li><strong>changed</strong>: 只有当前流水线或阶段的完成状态与它之前的运行不同时，才允许在 <code>post</code> 部分运行该步骤。</li><li><strong>fixed</strong>: 上一步为失败或不稳定(unstable) ，当前状态为成功时</li><li><strong>regression</strong>: 上一次完成状态为成功，当前完成状态为失败、不稳定或中止（aborted）时执行。</li><li><strong>aborted</strong>: 当前执行结果是中止状态时（一般为人为中止）执行，通常web UI是灰色。</li><li><strong>failure</strong>：当前完成状态为失败时执行，通常web UI是红色。</li><li><strong>success</strong>：当前完成状态为成功时执行，通常web UI是蓝色或绿色。</li><li><strong>unstable</strong>：当前完成状态为不稳定时执行，通常由于测试失败,代码违规等造成。通常web UI是黄色。</li><li><strong>cleanup</strong>：清理条件块。不论当前完成状态是什么，在其他所有条件块执行完成后都执行。</li></ul><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> post - always</label></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any

    stages <span class="token punctuation">{</span>
        stage(&#39;post<span class="token punctuation">-</span><span class="token punctuation">-</span><span class="token punctuation">&gt;</span>always&#39;) <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                sh &#39;ping 127.0.0.1 <span class="token punctuation">-</span>c 5 <span class="token important">&amp;&amp;</span> hostname <span class="token punctuation">-</span>I&#39;
            <span class="token punctuation">}</span>
            post<span class="token punctuation">{</span>
                always<span class="token punctuation">{</span>
                    echo &quot;无论当前什么结果，我都会执行！&quot;
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/25efe9ccbdff3950d065680915169cf1.png" alt="image-20240126143719547" tabindex="0" loading="lazy"><figcaption>image-20240126143719547</figcaption></figure><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> post - failure/success/unstable</label></li></ul><p>这里再着重解释下unstable 状态，通常我们将测试失败的状态设定为unstable，可以把它理解成日志等级的warn状态。如下我们可以主动设置stage和构建结果为unstable状态。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any

    stages <span class="token punctuation">{</span>
        stage(&#39;Test&#39;) <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
				echo &quot;Test&quot;
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        stage(&#39;Hello2&#39;) <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                echo &#39;hello&#39;
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    post <span class="token punctuation">{</span>
        failure <span class="token punctuation">{</span>
            echo &quot;failure&quot;
        <span class="token punctuation">}</span>
        success <span class="token punctuation">{</span>
            echo &quot;success&quot;
        <span class="token punctuation">}</span>
        unstable <span class="token punctuation">{</span>
            echo &quot;unstable&quot;
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/e0d68d462be92562a401eba162a29bc2.png" alt="image-20240126095209114" tabindex="0" loading="lazy"><figcaption>image-20240126095209114</figcaption></figure><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> post - aborted</label></li></ul><p>手动终端运行中的服务；</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any

    stages <span class="token punctuation">{</span>
        stage(&#39;ping&#39;) <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
				sh &#39;ping 172.16.11.120&#39;
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    post <span class="token punctuation">{</span>
        aborted <span class="token punctuation">{</span>
            echo &quot;我被手动中断了！！！&quot;
        <span class="token punctuation">}</span>
        failure <span class="token punctuation">{</span>
            echo &quot;failure&quot;
        <span class="token punctuation">}</span>
        success <span class="token punctuation">{</span>
            echo &quot;success&quot;
        <span class="token punctuation">}</span>
        unstable <span class="token punctuation">{</span>
            echo &quot;unstable&quot;
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/6b3ab2f900dd36673127d2430effaa8b.png" alt="image-20240126143320776" tabindex="0" loading="lazy"><figcaption>image-20240126143320776</figcaption></figure><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> post - always - emailext</label></li></ul><p>发送邮件测试。需要提前安装好 <code>mail</code> 邮件的插件。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any

    stages <span class="token punctuation">{</span>
        stage(&#39;post<span class="token punctuation">-</span><span class="token punctuation">-</span><span class="token punctuation">&gt;</span>always&#39;) <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                sh &#39;ping 127.0.0.1 <span class="token punctuation">-</span>c 5 <span class="token important">&amp;&amp;</span> hostname <span class="token punctuation">-</span>I&#39;
            <span class="token punctuation">}</span>
            post<span class="token punctuation">{</span>
                always<span class="token punctuation">{</span>
                    echo &quot;无论当前什么结果，我都会执行！&quot;
                    sh &#39;hostname <span class="token punctuation">-</span>I <span class="token punctuation">|</span> awk <span class="token punctuation">-</span>F &quot; &quot; \\&#39;<span class="token punctuation">{</span>print $1<span class="token punctuation">}</span>\\&#39;&#39;
                    emailext(
                        <span class="token key atrule">to</span><span class="token punctuation">:</span> <span class="token string">&quot;*********@qq.com&quot;</span><span class="token punctuation">,</span>
                        <span class="token key atrule">subject</span><span class="token punctuation">:</span> &quot;执行成功通知<span class="token punctuation">:</span> &quot; + currentBuild.fullDisplayName<span class="token punctuation">,</span>
                        <span class="token key atrule">body</span><span class="token punctuation">:</span> 
                        &quot;&quot;&quot;
                        <span class="token key atrule">&lt;h2&gt;Build Result</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>currentBuild.result<span class="token punctuation">}</span>&lt;/h2<span class="token punctuation">&gt;</span> 
                        <span class="token key atrule">&lt;p&gt;Full Display Name</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>currentBuild.fullDisplayName<span class="token punctuation">}</span>&lt;/p<span class="token punctuation">&gt;</span> 
                        <span class="token key atrule">&lt;p&gt;URL</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>currentBuild.absoluteUrl<span class="token punctuation">}</span> &lt;/p<span class="token punctuation">&gt;</span>
                        <span class="token key atrule">&lt;p&gt;Change</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>currentBuild.changeSets<span class="token punctuation">}</span>&lt;/p<span class="token punctuation">&gt;</span>
                        <span class="token key atrule">&lt;p&gt;user</span><span class="token punctuation">:</span> &lt;/p<span class="token punctuation">&gt;</span>
                        &quot;&quot;&quot;
                    )
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/e03322a0bc7dc7f94723f5c48770a4a8.png" alt="image-20240126150106957" tabindex="0" loading="lazy"><figcaption>image-20240126150106957</figcaption></figure><blockquote><p>① 按照惯例，<code>post</code> 部分应该放在流水线的底部。</p></blockquote><h3 id="environment" tabindex="-1"><a class="header-anchor" href="#environment" aria-hidden="true">#</a> environment</h3><p><code>environment</code> 用于设置环境变量，可定义在stage或pipeline部分。</p><blockquote><ul><li>在 pipeline 中定义 environment, 表示 pipeline 全局使用的环境变量</li><li>在 stage 中定义 environment, 表示当前 stage 的环境变量</li></ul></blockquote><p><code>environment</code> 指令指定一系列键值对，这些键值对将被定义为所有step或stage-specific step的环境变量，具体取决于environment指令在Pipeline中的位置。<br> 该指令支持一种特殊的方法credentials()，可以通过其在Jenkins环境中的标识符来访问预定义的凭据。<br> 对于类型为“Secret Text”的凭据，该 credentials()方法将确保指定的环境变量包含Secret Text内容；对于“标准用户名和密码”类型的凭证，指定的环境变量将被设置为username:password。</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> 在“pipeline”级别中：（全局都可以用：全局变量）</label></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any
    
    environment <span class="token punctuation">{</span>
    	IP = &#39;127.0.0.1&#39;
    	IP_Port = &#39;8080&#39;
    <span class="token punctuation">}</span>
    
    stages <span class="token punctuation">{</span>
        stage(&#39;environment<span class="token punctuation">-</span><span class="token punctuation">-</span><span class="token punctuation">&gt;</span>pipeline&#39;) <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                sh &#39;ping $<span class="token punctuation">{</span>IP<span class="token punctuation">}</span> <span class="token punctuation">-</span>c 5 <span class="token important">&amp;&amp;</span> hostname <span class="token punctuation">-</span>I&#39;
                sh &#39;curl $<span class="token punctuation">{</span>IP<span class="token punctuation">}</span><span class="token punctuation">:</span>$<span class="token punctuation">{</span>IP_Port<span class="token punctuation">}</span>&#39;
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52),L={class:"task-list-container"},S=n("li",{class:"task-list-item"},[n("p",null,[n("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-7",checked:"checked",disabled:"disabled"}),n("label",{class:"task-list-item-label",for:"task-item-7"},[s(" 在“stage”级别中：（只可以在写"),n("strong",null,"environment"),s(" 的 "),n("strong",null,"stage"),s(" 中使用）")])])],-1),G=i(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any
    
    stages <span class="token punctuation">{</span>
        stage(&#39;environment<span class="token punctuation">-</span><span class="token punctuation">-</span><span class="token punctuation">&gt;</span>stage1&#39;) <span class="token punctuation">{</span>
        	environment <span class="token punctuation">{</span>
    			IP = &#39;127.0.0.1&#39;
			<span class="token punctuation">}</span>
            steps <span class="token punctuation">{</span>
                sh &#39;ping $<span class="token punctuation">{</span>IP<span class="token punctuation">}</span> <span class="token punctuation">-</span>c 5 <span class="token important">&amp;&amp;</span> hostname <span class="token punctuation">-</span>I&#39;
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        stage(&#39;environment<span class="token punctuation">-</span><span class="token punctuation">-</span><span class="token punctuation">&gt;</span>stage2&#39;) <span class="token punctuation">{</span>
        	environment <span class="token punctuation">{</span>
    			IP2 = &#39;127.0.0.1&#39;
    			IP_Port = &#39;8080&#39;
			<span class="token punctuation">}</span>
        	steps <span class="token punctuation">{</span>
                sh &#39;curl $<span class="token punctuation">{</span>IP2<span class="token punctuation">}</span><span class="token punctuation">:</span>$<span class="token punctuation">{</span>IP_Port<span class="token punctuation">}</span>&#39;
        	<span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/a1a310bdb6e12e90868d2830e3f49a0a.png" alt="image-20240220100551154" tabindex="0" loading="lazy"><figcaption>image-20240220100551154</figcaption></figure><blockquote><p>代码分析：</p><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/989dffcbfb86c847696145aa7e690e3e.png" alt="image-20240220101045685" tabindex="0" loading="lazy"><figcaption>image-20240220101045685</figcaption></figure></blockquote>`,3),$=i(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any
    
    stages <span class="token punctuation">{</span>
        stage(&#39;environment<span class="token punctuation">-</span><span class="token punctuation">-</span><span class="token punctuation">&gt;</span>stage1&#39;) <span class="token punctuation">{</span>
        	environment <span class="token punctuation">{</span>
    			IP = &#39;127.0.0.1&#39;
			<span class="token punctuation">}</span>
            steps <span class="token punctuation">{</span>
                sh &#39;ping $<span class="token punctuation">{</span>IP<span class="token punctuation">}</span> <span class="token punctuation">-</span>c 5 <span class="token important">&amp;&amp;</span> hostname <span class="token punctuation">-</span>I&#39;
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        stage(&#39;environment<span class="token punctuation">-</span><span class="token punctuation">-</span><span class="token punctuation">&gt;</span>stage2&#39;) <span class="token punctuation">{</span>
        	steps <span class="token punctuation">{</span>
        		sh &#39;ping $<span class="token punctuation">{</span>IP<span class="token punctuation">}</span> <span class="token punctuation">-</span>c 5 <span class="token important">&amp;&amp;</span> hostname <span class="token punctuation">-</span>I&#39;
        	<span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/8cc84ddd380da16d00def37ea85021b3.png" alt="image-20240220100655699" tabindex="0" loading="lazy"><figcaption>image-20240220100655699</figcaption></figure><blockquote><p>代码分析：</p><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/c2bb03dc16dcae39c441cf6625e41c0a.png" alt="image-20240220101555304" tabindex="0" loading="lazy"><figcaption>image-20240220101555304</figcaption></figure></blockquote><hr>`,4),M={href:"http://ip:port/job/%E9%A1%B9%E7%9B%AE%E5%90%8D/pipeline-syntax/globals",target:"_blank",rel:"noopener noreferrer"},H=i('<ul class="task-list-container"><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> 系统的环境变量有三种引用方式：</label></p></li><li><p>${env.BUILD_NUMBER} 方式一，（推荐使用）</p></li><li><p>$env.BUILD_NUMBER 方式二,</p></li><li><p>${BUILD_NUMBER} 方式三，（不推荐使用）</p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> 内置的环境变量</label></p></li></ul>',1),A=n("thead",null,[n("tr",null,[n("th",null,"变量"),n("th",null,"说明")])],-1),C=n("tr",null,[n("td",null,"BUILD_ID"),n("td",null,"当前构建的 ID，与 Jenkins 版本 1.597+ 中创建的构建号 UILD_NUMBER 是完全相同的。")],-1),V=n("tr",null,[n("td",null,"BUILD_NUMBER"),n("td",null,"当前构建号，比如 “153”。")],-1),W=n("tr",null,[n("td",null,"BUILD_TAG"),n("td",null,"字符串 jenkins-${JOB_NAME}-${BUILD_NUMBER}。可以放到源代码、jar 等文件中便于识别。")],-1),K=n("td",null,"BUILD_URL",-1),Y={href:"http://buildserver/jenkins/job/MyJobName/17/",target:"_blank",rel:"noopener noreferrer"},F=n("tr",null,[n("td",null,"EXECUTOR_NUMBER"),n("td",null,"用于识别执行当前构建的执行者的唯一编号（在同一台机器的所有执行者中）。这个就是你在“构建执行状态”中看到的编号，只不过编号从 0 开始，而不是 1。")],-1),X=n("tr",null,[n("td",null,"JAVA_HOME"),n("td",null,"如果你的任务配置了使用特定的一个 JDK，那么这个变量就被设置为此 JDK 的 JAVA_HOME。当设置了此变量时，PATH 也将包括 JAVA_HOME 的 bin 子目录。")],-1),Q=n("td",null,"JENKINS_URL",-1),Z={href:"https://example.com",target:"_blank",rel:"noopener noreferrer"},nn=n("tr",null,[n("td",null,"JOB_NAME"),n("td",null,"本次构建的项目名称，如 “foo” 或 “foo/bar”。")],-1),sn=n("tr",null,[n("td",null,"NODE_NAME"),n("td",null,"运行本次构建的节点名称。对于 master 节点则为 “master”。")],-1),an=n("tr",null,[n("td",null,"WORKSPACE"),n("td",null,"workspace 的绝对路径。")],-1),en=i(`<h3 id="tools" tabindex="-1"><a class="header-anchor" href="#tools" aria-hidden="true">#</a> tools</h3><p>可以在流水线级别或阶段级别添加“tools”指令。它允许您指定要在脚本上使用的Maven，JDK或Gradle版本。必须在“全局工具配置”Jenkins菜单上配置这些工具中的任何一个，在撰写本文时，这三个工具都受支持。另外，Jenkins将尝试安装列出的工具（如果尚未安装）。通过使用此指令，可以确保安装了项目所需的特定版本。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any
    tools <span class="token punctuation">{</span>
        maven &#39;apache<span class="token punctuation">-</span>maven<span class="token punctuation">-</span>3.0.1&#39;  ////工具名称必须在Jenkins 管理Jenkins → 全局工具配置中预配置。
    <span class="token punctuation">}</span>
    stages <span class="token punctuation">{</span>
    	stage(&quot;tools&quot;) <span class="token punctuation">{</span>
    		steps <span class="token punctuation">{</span>
	         echo &#39;do something&#39;
    		<span class="token punctuation">}</span>
    	<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个一般用的好像很少，我基本没用过。</p><h3 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> input</h3>`,5),tn=i(`<ul><li>message：这是必需的选项，其中指定了要显示给用户的消息。</li><li>id：可选标识符。默认情况下，使用“阶段”名称。</li><li>ok：“确定”按钮的可选文本。</li><li>submitter：参数允许你指定哪些用户或用户组可以提交输入以继续 Pipeline 的执行。这个参数可以是一个以逗号分隔的用户列表或用户组名。如果你不提供 <code>submitter</code> 参数，那么默认情况下，任何用户都可以提交输入来继续 Pipeline。通过设置 <code>submitter</code> 参数，你可以实现权限控制，确保只有特定的用户或用户组能够批准 Pipeline 的继续执行。这对于需要特定人员审批或审核的 Pipeline 流程非常有用。</li><li>submitterParameter：要使用提交者名称设置的环境变量的可选名称（如果存在）。</li><li>parameters：允许你指定一个参数列表，这些参数会在 <code>input</code> 表单中显示，并要求用户在提交输入时提供相应的值。这些参数可以是各种类型，如单行文本、布尔值、选项参数等。它们为用户提供了一个界面，以便在继续 Pipeline 执行之前输入必要的信息。</li></ul><p>这是包含此指令的示例流水线：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any
    stages <span class="token punctuation">{</span>
        stage (&#39;input&#39;) <span class="token punctuation">{</span>
            input<span class="token punctuation">{</span>
                message &quot;请输入用户名密码：&quot;
                submitter &quot;user1<span class="token punctuation">,</span>user2&quot;
                parameters <span class="token punctuation">{</span>
                   string(name<span class="token punctuation">:</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">defaultValue</span><span class="token punctuation">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">description</span><span class="token punctuation">:</span> &#39;Username of the user pressing Ok&#39;)
                   string(name<span class="token punctuation">:</span><span class="token string">&#39;passwd&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">defaultValue</span><span class="token punctuation">:</span> <span class="token string">&#39;123123123&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">description</span><span class="token punctuation">:</span> &#39;Username of the user pressing Ok&#39;)
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            steps <span class="token punctuation">{</span> 
                <span class="token key atrule">echo &quot;User</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>username<span class="token punctuation">}</span> said Ok.&quot;
                <span class="token key atrule">echo &quot;User</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>passwd<span class="token punctuation">}</span> said OK.&quot;
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>解析：</li></ul>`,4),ln=n("p",null,"message：这个是必须的选项，没有此参数就会运行失败；用于给用户提示输入什么；",-1),cn=n("p",null,[s("submitter：允许提交的用户名，如果不是"),n("code",null,"submitter"),s("中的用户名提交则失败；")],-1),pn=n("p",null,"parameters：提供一个新的界面输入指定参数。",-1),on=i(`<p>执行构建查看运行台，会卡到这，让你点进去输入执行参数，此<code>input requested</code>是<code>parameters</code>设定的。</p><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/988e3b4f9402ba61191c449f27007bf7.png" alt="image-20240222133008528" tabindex="0" loading="lazy"><figcaption>image-20240222133008528</figcaption></figure><p>点击进入跳转到此，会有一个默认的用户名和密码，是在<code>parameters</code>中设定的默认值。</p><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/a9482e102f00ad6bfc24a8f8a8c413cf.png" alt="image-20240222133343179" tabindex="0" loading="lazy"><figcaption>image-20240222133343179</figcaption></figure><p>点击继续即可；</p><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/d69c633dd5acaf40d41a6627e1bd55f8.png" alt="image-20240222133848575" tabindex="0" loading="lazy"><figcaption>image-20240222133848575</figcaption></figure><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> parameters</h3><p>parameters与input不同，parameters是执行pipeline前传入的一些参数。<code>parameters</code> 指令通常定义在 pipeline 的顶层，也就是不在任何 stage 或 step 内部。这意味着这些参数在 pipeline 开始执行之前就需要被指定，并且可以在整个 pipeline 中访问。<code>parameters</code>指令提供用户在触发Pipeline时的参数列表。这些参数值通过该params对象可用于Pipeline步骤<br> 目前只支持[booleanParam, choice, credentials, file, text, password, run, string]这几种参数类型，其他高级参数化类型还需等待社区支持。</p><p>Jenkins 支持多种类型的参数，包括：</p><ul><li><code>string</code>：单行文本输入。</li><li><code>boolean</code>：布尔值选择（通常是复选框）。</li><li><code>choice</code>：从预定义选项列表中选择。</li><li><code>password</code>：密码输入，通常用于敏感信息的输入。</li><li><code>file</code>：允许用户上传文件。</li></ul><p>下面是一个简单的示例，展示了如何在 Jenkins Pipeline 中使用 <code>parameters</code> 指令：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>  
    agent any  
  
    // 定义参数  
    parameters <span class="token punctuation">{</span>  
        <span class="token key atrule">string(name</span><span class="token punctuation">:</span> <span class="token string">&#39;PERSON&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">defaultValue</span><span class="token punctuation">:</span> <span class="token string">&#39;World&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">description</span><span class="token punctuation">:</span> &#39;输入你的名字&#39;)  
        <span class="token key atrule">choice(name</span><span class="token punctuation">:</span> <span class="token string">&#39;GREETING&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">choices</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Hi&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Good morning&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token key atrule">description</span><span class="token punctuation">:</span> &#39;选择问候语&#39;)  
    <span class="token punctuation">}</span>  
  
    stages <span class="token punctuation">{</span>  
        stage(&#39;Greeting&#39;) <span class="token punctuation">{</span>  
            steps <span class="token punctuation">{</span>  
                // 使用参数  
                echo &quot;Hello<span class="token punctuation">,</span> $<span class="token punctuation">{</span>PERSON<span class="token punctuation">}</span><span class="token punctuation">,</span> nice to meet you.&quot;  
                <span class="token key atrule">echo &quot;Using greeting</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>GREETING<span class="token punctuation">}</span>&quot;  
            <span class="token punctuation">}</span>  
        <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们定义了两个参数：<code>PERSON</code> 和 <code>GREETING</code>。<code>PERSON</code> 是一个字符串参数，默认值为 &#39;World&#39;，用户可以在执行 pipeline 时输入自己的名字。<code>GREETING</code> 是一个选择参数，提供了三个预定义选项。</p><p>在 <code>Greeting</code> 阶段中，我们使用 <code>echo</code> 步骤来输出这些参数的值。<code>\${PERSON}</code> 和 <code>\${GREETING}</code> 是参数的引用，它们会被替换为用户在执行 pipeline 时输入的实际值。</p><p>通过在 pipeline 中使用 <code>parameters</code> 指令，你可以让用户提供自定义输入，使得 pipeline 更加灵活和可配置。</p><ul><li>保存点击构建</li></ul><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/b4635cf45971d0a889c6fb0db7ac4050.png" alt="image-20240226103614135" tabindex="0" loading="lazy"><figcaption>image-20240226103614135</figcaption></figure><ul><li>第一次会构建失败，然后我们可以看到，构建的标志变了，变成了<code>Build with Parameters</code>，然后再次点击一下即可，就会跳到以下界面；</li></ul><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/874f6ed43f2244bf732c514d1e025439.png" alt="image-20240226103808763" tabindex="0" loading="lazy"><figcaption>image-20240226103808763</figcaption></figure><ul><li>第一个是输入你的名字，可以随便写一个；第二个是一个选项框，提供了三个选项，可以任意选；</li></ul><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/743d6c86aaa2e0e1c07594091b644625.png" alt="image-20240226103833763" tabindex="0" loading="lazy"><figcaption>image-20240226103833763</figcaption></figure><ul><li>然后在开始点击构建，就会输入echo里的数据及变量信息；</li></ul><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/c0e761290482696e7f1a84640a1edb8e.png" alt="image-20240226104207259" tabindex="0" loading="lazy"><figcaption>image-20240226104207259</figcaption></figure><p>执行成功。</p><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h3><p>用于配置Jenkins pipeline本身的选项，比如options {retry（3）}指当pipeline失败时再重试2次。options指令可定义在stage或pipeline部分。</p><p>disableConcurrentBuilds<br> - 不允许并行执行Pipeline,可用于防止同时访问共享资源等。例如：options <code>{ disableConcurrentBuilds() }</code></p><p>skipDefaultCheckout<br> - 默认跳过来自源代码控制的代码。例如：<code>options { skipDefaultCheckout() }</code></p><p>skipStagesAfterUnstable<br> 一旦构建状态进入了“Unstable”状态，就跳过此stage。例如：<code>options { skipStagesAfterUnstable() }</code><br> timeout<br> - 设置Pipeline运行的超时时间。例如：<code>options { timeout(time: 1, unit: &#39;HOURS&#39;) }</code></p><p>retry<br> - 失败后，重试整个Pipeline的次数。例如：<code>options { retry(3) }</code></p><p>timestamps<br> - 预定义由Pipeline生成的所有控制台输出时间。例如：<code>options { timestamps() } |</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any
    options <span class="token punctuation">{</span>
        retry(3)  //将流水线配置为在失败前重试3次：
    <span class="token punctuation">}</span>
    stages <span class="token punctuation">{</span>
        echo &#39;do something&#39;
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="parallel" tabindex="-1"><a class="header-anchor" href="#parallel" aria-hidden="true">#</a> parallel</h3><p><code>parallel</code> 并行执行多个step。在pipeline插件1.2版本后，<code>parallel</code>开始支持对多个阶段进行并行执行。</p><p>Jenkins流水线阶段可以在内部嵌套其他阶段，这些阶段将并行执行。我们来举一个简单的例子：</p><blockquote><p>注意：在Jenkins的Pipeline语法中，<code>parallel</code> 应该被放置在 <code>stages</code> 块内部的一个 <code>stage</code> 的 <code>steps</code> 块中。所以要非常注意！</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>  
    agent any  
  
    stages <span class="token punctuation">{</span>  
        stage(&#39;Example Stage&#39;) <span class="token punctuation">{</span>  
            steps <span class="token punctuation">{</span>  
                // 第一个步骤  
                echo &#39;This is the first step.&#39;  
  
                // 第二个步骤，依赖于第一个步骤成功执行  
                sh &#39;echo This step runs after the first one.&#39;  
  
                // 第三个步骤，与前两个步骤并行执行（需要使用 parallel）  
                parallel <span class="token punctuation">{</span>  
                    stage(&#39;Parallel_test 1&#39;) <span class="token punctuation">{</span>  
                        steps <span class="token punctuation">{</span>  
                            echo &#39;This is parallel test1.&#39;  
                        <span class="token punctuation">}</span>  
                    <span class="token punctuation">}</span>  
                    stage(&#39;Parallel_test 2&#39;) <span class="token punctuation">{</span>  
                        steps <span class="token punctuation">{</span>  
                            sh &#39;echo &quot;This is parallel test2.&quot;&#39;  
                        <span class="token punctuation">}</span>  
                    <span class="token punctuation">}</span>  
                <span class="token punctuation">}</span>  
  
                // 第四个步骤，依赖于所有并行步骤成功执行  
                echo &#39;All parallel steps have completed.&#39;  
            <span class="token punctuation">}</span>  
        <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tiggers" tabindex="-1"><a class="header-anchor" href="#tiggers" aria-hidden="true">#</a> tiggers</h3><p><code>tiggers</code>主要用于定义执行pipeline的触发器。</p><p>触发器允许Jenkins通过使用以下任何一个可用的方式自动触发流水线：</p><ul><li>cron：通过使用cron语法，它可以定义何时重新触发管道。</li><li>pollSCM：通过使用cron语法，它允许您定义Jenkins何时检查新的源存储库更新。如果检测到更改，则将重新触发流水线。（从Jenkins 2.22开始可用）。</li><li>upstream：将Jenkins任务和阈值条件作为输入。当列表中的任何任务符合阈值条件时，将触发流水线。</li></ul><p>带有可用触发器的示例流水线如下所示（需要注意的是，第一次执行了之后会在每分钟都执行一遍任务）：</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> cron：按照cron给的时间执行；</label></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any
    triggers <span class="token punctuation">{</span>
		//每分钟执行一次
        cron(&#39;* * * * <span class="token important">*&#39;)</span>
    <span class="token punctuation">}</span>
    stages <span class="token punctuation">{</span>
        stage(&#39;test tiggers<span class="token punctuation">-</span>cron&#39;) <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                echo &#39;Tish is test tiggers project <span class="token punctuation">-</span><span class="token punctuation">-</span> cron.&#39;
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> pollSCM：如果检测到更改，则将重新触发流水线；</label></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any
    triggers <span class="token punctuation">{</span>
        //每分钟执行一次
        pollSCM(&#39;* * * * <span class="token important">*&#39;)</span>
    <span class="token punctuation">}</span>
    stages <span class="token punctuation">{</span>
        stage(&#39;test tiggers<span class="token punctuation">-</span>pollSCM&#39;) <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                echo &#39;Tish is test tiggers project <span class="token punctuation">-</span><span class="token punctuation">-</span> pollSCM.&#39;
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-12"> upstream：当列表中的任何任务符合阈值条件时，将触发流水线。</label></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any
    triggers <span class="token punctuation">{</span>
        //Execute when either job1 or job2 are successful
        <span class="token key atrule">upstream(upstreamProjects</span><span class="token punctuation">:</span> <span class="token string">&#39;job1, job2&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">threshold</span><span class="token punctuation">:</span> hudson.model.Result.SUCCESS)
    <span class="token punctuation">}</span>
    stages <span class="token punctuation">{</span>
        stage(&#39;test tiggers<span class="token punctuation">-</span>upstream&#39;) <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                echo &#39;Tish is test tiggers project <span class="token punctuation">-</span><span class="token punctuation">-</span> upstream.&#39;
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="when" tabindex="-1"><a class="header-anchor" href="#when" aria-hidden="true">#</a> when</h3><p>当满足when定义的条件时，阶段才执行（相当于一个判断）。when指令必须至少包含一个条件。如果when指令包含多个条件，则所有子条件必须为stage执行返回true。这与子条件嵌套在一个allOf条件中相同更复杂的条件结构可使用嵌套条件建：not，allOf或anyOf。嵌套条件可以嵌套到任意深度</p>`,50),un={class:"task-list-container"},dn=n("li",null,[n("p",null,[n("strong",null,"内置条件")])],-1),rn={class:"task-list-item"},bn=n("p",null,[n("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-13",checked:"checked",disabled:"disabled"}),n("label",{class:"task-list-item-label",for:"task-item-13"}," branch")],-1),vn=i(`<blockquote><p>可读方式解析：相当于指定一个分支，如果是这个分支就执行此操作；</p></blockquote><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-14" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-14"> environment<br> - 当指定的环境变量设置为给定值时执行，例如： when { environment name: &#39;DEPLOY_TO&#39;, value: &#39;production&#39; }</label></li></ul><blockquote><p>可读方式解析：相当于，当使用此环境变量时，环境变量的值等于设置的值就会执行；</p></blockquote><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-15" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-15"> expression<br> - 当指定的Groovy表达式求值为true时执行，例如： when { expression { return params.DEBUG_BUILD } }</label></li></ul><blockquote><p>可读方式解析：表达式返回的值为true（真）时就执行此操作；</p></blockquote><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-16" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-16"> not<br> - 当嵌套条件为false时执行。必须包含一个条件。例如：when { not { branch &#39;master&#39; } }</label></li></ul><blockquote><p>可读方式解析：当指定的值不是not里的值就可以执行；</p></blockquote><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-17" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-17"> allOf<br> - 当所有嵌套条件都为真时执行。必须至少包含一个条件。例如：when { allOf { branch &#39;master&#39;; environment name: &#39;DEPLOY_TO&#39;, value: &#39;production&#39; } }</label></li></ul><blockquote><p>可读方式解析：相当于<code>或者</code>，只要满足某一个条件的值就可以执行此操作；条件最少要写两个。</p></blockquote><ul><li><strong>使用方法：</strong></li></ul><p>1.when 仅用于stage内部       2. when 的内置条件</p><ul><li>when {branch &#39;master&#39;} #当是master的时候，才执行某些事情</li><li>when {envionment name:&#39;DEPLOY_TO&#39;,value:&#39;production&#39;} #当环境变量name 的值是production的时候，才执行某些事情</li><li>when {expression {return params.DEBUG_BUILD}} #表达式的返回值是真的情况下，才执行</li><li>when {not {branch &#39;master&#39;}}#不是master的情况下，执行</li><li>when {allOf {branch &#39;master&#39;; environment name: &#39;DEPLOY_TO&#39;,value:&#39;production&#39;}} #当大括号中所有的项都成立，才去做某些事情</li><li>when {anyOf {branch &#39;master&#39;; branch &#39;staging&#39;}} #只要满足大括号里面的某一个条件，才去做某些事情</li></ul><p>例如，流水线使您可以在具有多个分支的项目上执行任务。这被称为多分支流水线，其中可以根据分支名称（例如“master”，“ feature*”，“development”等）采取特定的操作。这是一个示例流水线，它将运行master分支的步骤：</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-18" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-18"> branch</label></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any
    stages <span class="token punctuation">{</span>
        stage(&#39;when <span class="token punctuation">-</span> branch&#39;) <span class="token punctuation">{</span>
            when <span class="token punctuation">{</span>
                branch &#39;master&#39;
            <span class="token punctuation">}</span>
            steps <span class="token punctuation">{</span>
                echo &#39;Deploy master to stage&#39;
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是在<code>master</code>分支上执行，就执行此操作；因为我们没有使用多分支，所以这个执行结果是跳过此执行操作；</p><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/c7c42c9faa194e12abdd4c753ec8f6f3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-19" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-19"> not - branch</label></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any
    stages <span class="token punctuation">{</span>
        stage(&#39;when <span class="token punctuation">-</span> not <span class="token punctuation">-</span> branch&#39;) <span class="token punctuation">{</span>
            when <span class="token punctuation">{</span>
                not <span class="token punctuation">{</span>
                    branch &#39;master&#39;
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            steps <span class="token punctuation">{</span>
                echo &#39;This is not a master node&#39;
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果此任务不是在<code>master</code>分支上执行的，就执行<code>steps</code>中的内容；因为我们没有设置分支，所以就会执行输出<code>steps</code>中的内容；</p><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/ae661d57bcb103b789ecf2ecadbc1aa0.png" alt="image-20240307100517366" tabindex="0" loading="lazy"><figcaption>image-20240307100517366</figcaption></figure><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-20" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-20"> allOf</label></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
    agent any
    stages <span class="token punctuation">{</span>
        stage(&#39;when <span class="token punctuation">-</span> allOf&#39;) <span class="token punctuation">{</span>
            when <span class="token punctuation">{</span>
                allOf <span class="token punctuation">{</span>
                    <span class="token key atrule">branch &#39;master&#39;;environment name</span><span class="token punctuation">:</span> <span class="token string">&#39;DEPLOY_TO&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&#39;production&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            steps <span class="token punctuation">{</span>
                echo &#39;包含以上其中一个条件！&#39;
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此执行结果为跳过此操作；因为没有分支，所以没有<code>master</code>，此条件为false；环境变量没有用到所以结果也为false；所以最终此条件为跳过；</p><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/b09eb31fffb39de2a3784be0581a1c69.png" alt="image-20240307101435744" tabindex="0" loading="lazy"><figcaption>image-20240307101435744</figcaption></figure><h3 id="script" tabindex="-1"><a class="header-anchor" href="#script" aria-hidden="true">#</a> script</h3><p>在pipeline 声明式语法中，当需要执行代码块条件判断时可以使用when指令，那么除了when，我们还可以使用<code>groovy</code>语法的脚本，脚本内还可以执行for循环、if判断还有异常处理等操作，配置代码如下，脚本需要被<code>script</code>块包括起来；</p>`,27),mn=n("code",null,"script",-1),kn=n("code",null,"groovy",-1),gn=n("code",null,"脚本式流水线",-1),hn={href:"https://liucy.blog.csdn.net/article/details/136567517",target:"_blank",rel:"noopener noreferrer"},fn=n("h2",{id:"总结",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),s(" 总结")],-1),_n=n("blockquote",null,[n("p",null,[s("  这一节，基本上对"),n("code",null,"jenkins"),s("的"),n("code",null,"pipeline"),s("声明式流水线语法做了比较完整的介绍，在以后再看pipeline脚本时，可能还会接触到许多插件提供的函数或更多的指令，但是它们都逃不开pipeline脚本的基本结构，掌握了基础语法，后面才能更上一层楼。")])],-1),yn=n("h2",{id:"参考文献",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考文献","aria-hidden":"true"},"#"),s(" 参考文献：")],-1),xn=n("p",null,"文章参考与：",-1),qn={href:"https://zhuanlan.zhihu.com/p/618808986",target:"_blank",rel:"noopener noreferrer"},wn={href:"https://zhuanlan.zhihu.com/p/662830371",target:"_blank",rel:"noopener noreferrer"},Pn=n("br",null,null,-1),jn={href:"https://zhuanlan.zhihu.com/p/74792026",target:"_blank",rel:"noopener noreferrer"},En=n("h2",{id:"相关专栏",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关专栏","aria-hidden":"true"},"#"),s(" 相关专栏")],-1),In=n("thead",null,[n("tr",null,[n("th",null,"专栏名称"),n("th",null,"专栏地址")])],-1),Un={href:"https://blog.csdn.net/liu_chen_yang/category_12493057.html",target:"_blank",rel:"noopener noreferrer"},Jn={href:"https://blog.csdn.net/liu_chen_yang/category_12493057.html",target:"_blank",rel:"noopener noreferrer"},On={href:"https://blog.csdn.net/liu_chen_yang/category_12473478.html",target:"_blank",rel:"noopener noreferrer"},zn={href:"https://blog.csdn.net/liu_chen_yang/category_12473478.html",target:"_blank",rel:"noopener noreferrer"},Bn={href:"https://blog.csdn.net/liu_chen_yang/category_10887074.html",target:"_blank",rel:"noopener noreferrer"},Dn={href:"https://blog.csdn.net/liu_chen_yang/category_10887074.html",target:"_blank",rel:"noopener noreferrer"},Nn=n("h2",{id:"相关文章",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关文章","aria-hidden":"true"},"#"),s(" 相关文章")],-1),Rn=n("thead",null,[n("tr",null,[n("th",null,"文章名称"),n("th",null,"文章链接")])],-1),Tn={href:"https://liucy.blog.csdn.net/article/details/136528857",target:"_blank",rel:"noopener noreferrer"},Ln={href:"https://liucy.blog.csdn.net/article/details/136528857",target:"_blank",rel:"noopener noreferrer"},Sn={href:"https://liucy.blog.csdn.net/article/details/136567517",target:"_blank",rel:"noopener noreferrer"},Gn={href:"https://liucy.blog.csdn.net/article/details/136567517",target:"_blank",rel:"noopener noreferrer"};function $n(Mn,Hn){const e=c("ExternalLinkIcon"),t=c("font");return o(),u("div",null,[r,n("blockquote",null,[b,n("p",null,[s("  🏅"),n("a",v,[s("CSDN博客专家"),a(e)]),m,s("   🏅"),n("a",k,[s("云计算领域优质创作者"),a(e)]),g,s("   🏅"),n("a",h,[s("华为云开发者社区专家博主"),a(e)]),f,s("   🏅"),n("a",_,[s("阿里云开发者社区专家博主"),a(e)]),y,s(" 💊"),x,n("a",q,[s("运维交流社区"),a(e)]),s(" 欢迎大家的加入！"),w,s(" 🐋 希望大家多多支持，我们一起进步！😄"),P,s(" 🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗")])]),j,n("blockquote",null,[n("p",null,[s("更多的配置案例可参考："),n("a",E,[s("流水线语法（jenkins.io）"),a(e)])])]),I,n("ul",null,[n("li",null,[a(t,{color:"red"},{default:l(()=>[s("使用ssh登录需要设置两台服务器之间免密登录；否则会报错连接失败；")]),_:1})])]),U,n("blockquote",null,[n("p",null,[J,O,s(" 1.进入.ssh目录： cd ~/.ssh # 如果新机器没有这个命令，可以直接生产密钥，最自动创建这个目录。"),z,s(" 2.生成一对密钥： ssh-keygen -t rsa"),B,s(" 3.发送公钥： ssh-copy-id "),n("a",D,[s("172.16.xx.xxx"),a(e)]),N,s(" 4.免密登录测试： ssh "),n("a",R,[s("172.16.xx.xxx"),a(e)])])]),T,n("ul",L,[S,n("li",null,[n("p",null,[s("stage -- > environment "),a(t,{color:"green"},{default:l(()=>[s("正确示范")]),_:1})])])]),G,n("ul",null,[n("li",null,[s("stage -- > environment "),a(t,{color:"red"},{default:l(()=>[s("错误示范")]),_:1})])]),$,n("p",null,[s("除了自定义的这几个环境变量之后，我们还有系统自带的全局环境变量，可访问："),n("a",M,[s("http://ip:port/job/项目名/pipeline-syntax/globals"),a(e)])]),n("blockquote",null,[n("p",null,[s("注："),a(t,{color:"red"},{default:l(()=>[s("ip:port")]),_:1}),s(" 替换为自己的ip和端口；项目名就换成自己的项目名就行；")])]),n("p",null,[s("也可以通过其他方式进入：进入到流水线编辑页面，翻到最下面点击"),a(t,{color:"blue"},{default:l(()=>[s("流水线语法")]),_:1}),s("，点进去会跳转到一个新的页面，展示的是一个生产流水线语法的脚本，再往下面翻，到最后，可以看到一个全局变量，点击文字中有一段： "),a(t,{color:"blue"},{default:l(()=>[s("Global Variables Reference")]),_:1}),s("即可进入全局环境变量的页面；这里有使用说明，下面给大家说一些常用的。")]),H,n("table",null,[A,n("tbody",null,[C,V,W,n("tr",null,[K,n("td",null,[s("可以定位此次构建结果的 URL（比如 "),n("a",Y,[s("http://buildserver/jenkins/job/MyJobName/17/"),a(e)]),s(" ）")])]),F,X,n("tr",null,[Q,n("td",null,[s("Jenkins 服务器的完整 URL，比如 "),n("a",Z,[s("https://example.com"),a(e)]),s(":port/jenkins/ （注意：只有在“系统设置”中设置了 Jenkins URL 才可用）。")])]),nn,sn,an])]),en,n("p",null,[s("“input”指令在阶段级别（"),n("strong",null,[a(t,{color:"red"},{default:l(()=>[s("stage")]),_:1})]),s("）定义，提供提示输入的功能。该阶段将被暂停，直到用户手动确认为止。以下为配置选项可用于此指令：")]),tn,n("blockquote",null,[n("p",null,[s("input：存在于阶段级别（"),n("strong",null,[a(t,{color:"red"},{default:l(()=>[s("stage")]),_:1})]),s("）中定义；")]),ln,cn,pn]),on,n("ul",un,[dn,n("li",rn,[bn,n("p",null,[s("- 当正在构建的分支与给出的分支模式匹配时执行，例如：when { branch 'master' }。"),a(t,{color:"red"},{default:l(()=>[s("请注意，这仅适用于多分支Pipeline。")]),_:1})])])]),vn,n("blockquote",null,[n("p",null,[s("那么学习"),mn,s("块，我们就还需要学习"),kn,s("语法，所以，首先我们就需要先来了解一下语法，也就是"),gn,s("，可以查看下一章："),n("a",hn,[s("【Jenkins】Pipeline流水线语法解析全集 -- 脚本式流水线、groovy语法"),a(e)])])]),fn,_n,yn,n("blockquote",null,[xn,n("p",null,[n("a",qn,[s("【Jenkins系列】-Pipeline语法全集"),a(e)])]),n("p",null,[n("a",wn,[s("jenkins 原理篇——pipeline流水线 声明式语法详解"),a(e)]),Pn,n("a",jn,[s("Jenkins扩展篇-Groovy语法简介"),a(e)])])]),En,n("table",null,[In,n("tbody",null,[n("tr",null,[n("td",null,[n("a",Un,[s("《Jenkins》"),a(e)])]),n("td",null,[n("a",Jn,[s("https://blog.csdn.net/liu_chen_yang/category_12493057.html"),a(e)])])]),n("tr",null,[n("td",null,[n("a",On,[s("《自动化运维》"),a(e)])]),n("td",null,[n("a",zn,[s("https://blog.csdn.net/liu_chen_yang/category_12473478.html"),a(e)])])]),n("tr",null,[n("td",null,[n("a",Bn,[s("《Linux从入门到精通》"),a(e)])]),n("td",null,[n("a",Dn,[s("https://blog.csdn.net/liu_chen_yang/category_10887074.html"),a(e)])])])])]),Nn,n("table",null,[Rn,n("tbody",null,[n("tr",null,[n("td",null,[n("a",Tn,[s("【Jenkins】Pipeline流水线语法解析全集 -- 声明式流水线"),a(e)])]),n("td",null,[n("a",Ln,[s("https://liucy.blog.csdn.net/article/details/136528857"),a(e)])])]),n("tr",null,[n("td",null,[n("a",Sn,[s("【Jenkins】Pipeline流水线语法解析全集 -- 脚本式流水线、groovy语法"),a(e)])]),n("td",null,[n("a",Gn,[s("https://liucy.blog.csdn.net/article/details/136567517"),a(e)])])])])])])}const Vn=p(d,[["render",$n],["__file","【Jenkins】Pipeline流水线语法解析全集 -- 声明式流水线.html.vue"]]);export{Vn as default};
