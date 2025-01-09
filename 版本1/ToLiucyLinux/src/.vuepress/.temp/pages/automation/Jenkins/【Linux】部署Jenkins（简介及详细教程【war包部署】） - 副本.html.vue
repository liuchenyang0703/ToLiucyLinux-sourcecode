<template><div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/4ec60dad1cc5427daaca44ce592ae7a4.jpeg" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="jenkins简介" tabindex="-1"><a class="header-anchor" href="#jenkins简介" aria-hidden="true">#</a> Jenkins简介</h2>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/1c18206e091d405580f6d15dd2ad5448.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>  随着软件开发需求及复杂度的不断提高，团队开发成员之间如何更好地协同工作以确保 软件开发的质量已经慢慢成为开发过程中不可回避的问题。Jenkins 自动化部署可以解决集成、测试、部署等重复性的工作，工具集成的效率明显高于人工操作；并且持续集成可以更 早的获取代码变更的信息，从而更早的进入测试阶段，更早的发现问题，这样解决问题的成 本就会显著下降；持续集成缩短了从开发、集成、测试、部署各个环节的时间，从而也就缩 短了中间出现的等待时间；持续集成也意味着开发、集成、测试、部署得以持续。所以，当 配置完 Jenkins 持续集成持续交付环境后，就可以把发布的任务交给集成服务器去打理了。 使用 Maven(Ant) 等来实现 Java 项目自动化构建发布部署。这些工具可以帮助在构建过程 中实现自动化发布、回滚等动作。</p>
<p>  <font color=teal>开发人员写好代码,想要代码上线必须要找运维人员,等待运维部门上线,上线的概念就是将老的代码打包备份,删除 将新的代码上传。CICD环境可以将开发 集成  测试  部署合并一起，提高工作的效率</font></p>
<p>  Jenkins 是一个用 Java 编写的开源的持续集成工具。在与 Oracle 发生争执后，项目从 Hudson 项目独立。</p>
<p>  <font color=teal>JenKins是一个高度集成化的工具,底层是由Java编写,先安装JDK才可以安装JenKins;<br>
  可以将JenKins运行在Tomcat环境中也可以独立安装</font></p>
<hr>
<p>官方网站：<a href="https://jenkins.io/" target="_blank" rel="noopener noreferrer">https://jenkins.io/<ExternalLinkIcon/></a></p>
<hr>
<p>  Jenkins 提供了软件开发的持续集成服务。它运行在 Servlet 容器中（Tomcat）。它支持软件配置管理（SCM）工具（包括 AccuRev SCM、CVS、Subversion、Git、Perforce、Clearcase 和RTC），可以执行基于Apache Ant和<font color=red>Apache Maven</font>的项目，以及任意的Shell脚本和Windows 批处理命令。Jenkins 的主要开发者是川口耕介。Jenkins 是在 MIT 许可证下发布的自由软件。</p>
<p>  <font color=teal>Jenkins的官网提供 Jenkins.war放在tomcat的webapps目录下会自动解压,会生成一个jenkins的目录。<br>
  Jenkins也提供rpm格式的软件包</font></p>
<p>  Jenkins 能实时监控持续集成过程中所存在的问题，提供详细的日志文件和提醒功能， 还能用图表的形式，形象地展示项目构建的趋势和稳定性。</p>
<blockquote>
<p>Jenkins 包含以下几个特点：</p>
<ul>
<li>易安装：仅仅一个<font color=red> jenkins.war</font>，从官网下载该文件后，直接运行，无需额外的安装， 更无需安装数据库；</li>
<li>易配置：提供友好的 GUI 配置界面；</li>
<li>变更支持：Jenkins 能从代码仓库（SVN /Git）中获取并产生代码更新列表，并输出到编 译输出信息中；</li>
<li>支持永久链接：用户是通过 Web 来访问 Jenkins 的，而这些 Web 页面的链接地址都 是永久链接地址，可以在各种文档中直接使用该链接；</li>
<li>集成 E-Mail/RSS/IM：当完成一次集成时，可通过这些工具实时收取集成结果（构建一 次集成需要花费一定时间，有了这个功能，就可以在等待结果过程中，干别的事情）；</li>
<li>JUnit/TestNG 测试报告：也就是用以图表等形式提供详细的测试报表功能；</li>
<li>
<font color=red>支持分布式构建</font>：Jenkins 可以把集成构建等工作分发到多台计算机中完成；</li>
<li>文件指纹信息：Jenkins 会保存构建集成所产生的 jars 文件、集成构建使用了哪个版；</li>
<li>
<font color=red>支持第三方插件</font>：Jenkins 支持第三方插件，这使得 Jenkins 功能变得越来越强大。</li>
</ul>
</blockquote>
<h3 id="持续集成-ci" tabindex="-1"><a class="header-anchor" href="#持续集成-ci" aria-hidden="true">#</a> 持续集成（CI）</h3>
<font color=red>CI 有一个概念 持续集成</font><p>  持续集成（英语：Continuous integration，缩写为 CI），一种软件工程流程，将所有工程师对于软件的工作复本，每天集成数次到共用主线（mainline）上。<br>
   这个名称最早由葛来迪·布区（Grady Booch）在他的布区方法中提出，但是他并没有 提到要每天集成数次。之后成为极限编程（extreme programming，缩写为 XP）的一部分。 在测试驱动开发（TDD）的作法中，通常还会搭配自动单元测试</p>
<p>  <font color=teal>CI  持续集成  完全自动的集成,效率提高<br>
  分支的概念:工作主要与dev开发分支,带稳定后再由master合并，研发的代码要先测试，测试没有问题之后才会合并到master分支,这样我们的效率会很低。</font></p>
<p>  持续集成的提出，主要是为了解决软件进行系统集成时面临的各项问题，极限编程称这些问题为集成地狱（integration hell）。</p>
<p>  <font color=teal>CI服务器就是我们的Jenkins从仓库里面拉取代码，进入BUILD构建成war ，然后测试把结果返回给开发，开发人员会把代码提交到仓库</font></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/89412b0e4f234bd8abad6393f0a608f3.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>  持续集成主要是强调开发人员提交了新代码之后，立刻进行构建、（单元）测试。根据 测试结果，我们可以确定新代码和原有代码能否正确地集成在一起。简单来讲就是：频繁地 （一天多次）将代码集成到主干。</p>
<h4 id="持续集成的效益" tabindex="-1"><a class="header-anchor" href="#持续集成的效益" aria-hidden="true">#</a> 持续集成的效益</h4>
<ul>
<li>及早发现集成错误且由于修订的内容较小所以易于追踪，这可以节省项目的时间与成本。</li>
<li>避免发布日期的前一分钟发生混乱，当每个人都会尝试为他们所造成的那一点点不兼容 的版本做检查。</li>
<li>当单元测试失败或发生错误，若开发人员需要在不除错的情况下还原代码库到一个没有 问题的状态，只需要放弃一小部分的更改 (因为集成的次数频繁)。</li>
<li>让 &quot;最新&quot; 的程序可保持可用的状态供测试、展示或发布用。</li>
<li>频繁的提交代码会促使开发人员创建模块化，低复杂性的代码。</li>
<li>防止分支大幅偏离主干。如果不是经常集成，主干又在不断更新，会导致以后集成的难 度变大，甚至难以集成</li>
</ul>
<h4 id="持续集成的作用" tabindex="-1"><a class="header-anchor" href="#持续集成的作用" aria-hidden="true">#</a> 持续集成的作用</h4>
<ul>
<li>保证团队开发人员提交代码的质量，减轻了软件发布时的压力；</li>
<li>持续集成中的任何一个环节都是自动完成的，无需太多的人工干预，有利于减少重复过 程以节省时间、费用和工作量。</li>
</ul>
<h4 id="持续集成的特点" tabindex="-1"><a class="header-anchor" href="#持续集成的特点" aria-hidden="true">#</a> 持续集成的特点</h4>
<ul>
<li>是一个自动化的、周期性的集成测试过程，从<font color=red>检出代码、编译构建、运行测试、结果记录、测试统计</font>等都是<font color=red>自动完成的</font>，无需人工干预；</li>
<li>需要有专门的集成服务器来执行集成构建；</li>
<li>需要有代码托管工具支持；</li>
</ul>
<h3 id="持续交付-cd" tabindex="-1"><a class="header-anchor" href="#持续交付-cd" aria-hidden="true">#</a> 持续交付（CD）</h3>
<font color=red>CD 有两个概念 持续交付和持续部署</font><p>  持续交付（英语：Continuous delivery，缩写为 CD），是一种软件工程手法，让软件产品 的产出过程在一个短周期内完成，以保证软件可以稳定、持续的保持在随时可以释出的状况。 它的目标在于让软件的建置、测试与释出变得更快以及更频繁。这种方式可以减少软件开发 的成本与时间，减少风险。</p>
<p>  <font color=teal>开发人员提交代码到CI服务器,会对提交的代码进行测试、构建、反馈，会把整体代码往测试环境里面部署,进行统一的测试、部署，部署的话是手工的部署；<br>
  CD会将整个部署环节改为AUTO 就是整个环节都是自动的</font></p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/5636c254847043deaf50c81eac256e9c.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>  持续交付是在持续集成的基础上，将集成后的代码部署到更贴近真实运行环境的「类生产环境」（production-like environments）中。比如，我们完成单元测试后，可以把代码部署到连接数据库的 Staging 环境中更多的测试。如果代码没有问题，可以继续手动部署到生产环境中。</p>
<h3 id="持续部署-cd" tabindex="-1"><a class="header-anchor" href="#持续部署-cd" aria-hidden="true">#</a> 持续部署（CD）</h3>
<p>  持续部署（英语：Continuous Deployment，缩写为 CD），是持续交付的下一步，指的是 代码通过评审以后，自动部署到生产环境。<br>
  有时候，持续部署也与持续交付混淆。持续部署意味着所有的变更都会被自动部署到生 产环境中。持续交付意味着所有的变更都可以被部署到生产环境中，但是出于业务考虑，可 以选择不部署。如果要实施持续部署，必须先实施持续交付。</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/5924109604324044ad877264305aec08.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>持续部署即在持续交付的基础上，把部署到生产环境的过程自动化。</p>
<h2 id="maven介绍" tabindex="-1"><a class="header-anchor" href="#maven介绍" aria-hidden="true">#</a> Maven介绍</h2>
<p>  Maven 项目对象模型(POM)是可以通过一小段描述信息来管理项目的构建、报告和文档的软件项目管理工具。<br>
  Maven 除了以程序构建能力为特色之外，还提供高级项目管理工具。由于 Maven 的缺省构建规则有较高的可重用性，所以常常用两三行 Maven 构建脚本就可以构建简单的项目。<br>
  由于 Maven 的面向项目的方法，许多 Apache Jakarta 项目发文时使用 Maven，而且公司项目采用 Maven 的比例在持续增长。</p>
<p>  Maven 这个单词来自于意第绪语（犹太语），意为知识的积累，最初在 Jakata Turbine 项目中用来简化构建过程。当时有一些项目（有各自 Ant build 文件），仅有细微的差别， 而 JAR 文件都由 CVS 来维护。于是希望有一种标准化的方式构建项目，一个清晰的方式定义项目的组成，一个容易的方式发布项目的信息，以及一种简单的方式在多个项目中共享 JARs。</p>
<p>  <font color=teal>Maven是一个Java的代码构建打包的工具，如果是Java类的项目就必须要用到Maven。</font></p>
<h2 id="部署jenkins" tabindex="-1"><a class="header-anchor" href="#部署jenkins" aria-hidden="true">#</a> 部署Jenkins</h2>
</div></template>


