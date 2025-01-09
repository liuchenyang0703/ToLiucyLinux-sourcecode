<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">CSDN博客专家<ExternalLinkIcon/></a><br>
  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/usersnew/id_1661843828089234" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/profile/7yu26jk3lfqxg" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<h2 id="docker-compose简介" tabindex="-1"><a class="header-anchor" href="#docker-compose简介" aria-hidden="true">#</a> docker-compose简介</h2>
<h3 id="docker-compose基础概念" tabindex="-1"><a class="header-anchor" href="#docker-compose基础概念" aria-hidden="true">#</a> docker-compose基础概念</h3>
<blockquote>
<p>docker-compose项目是docker官方的开源项目，负责实现对docker容器集群的快速编排。<br>
 <br>
Compose是用于定义和运行多容器Docker应用程序的工具。通过docker-compose，可以使用YAML文件来配置应用程序的服务。然后，使用一条命令，就可以从配置中创建并启动所有服务。如要了解更多有关docker-compose的功能，请参阅：<a href="https://docs.docker.com/compose/#features" target="_blank" rel="noopener noreferrer">功能列表<ExternalLinkIcon/></a>。</p>
<p> </p>
<p>docker-compose将所管理的容器分为三层，分别是工程（project），服务（service）以及容器（container）。</p>
<ul>
<li>docker-compose运行目录下的所有文件（docker-compose.yml文件、extends文件或环境变量等）组成一个工程，如无特殊指定，工程名即为当前目录名。</li>
<li>一个工程（project）当中，可以包含多个服务（service），每个服务中定义了容器（container）运行的镜像、参数、依赖。</li>
<li>一个服务中可以包括多个容器实例，docker-compose并没有解决负载均衡的问题。因此需要借助其他工具实现服务发现及负载均衡，比如consul。<br>
 <br>
docker-compose的工程配置文件默认为docker-compose.yml。可以通过环境变量COMPOSE_FILE -f 参数自定义配置文件，其自定义多个有依赖关系的服务及每个人服务运行的容器。</li>
</ul>
</blockquote>
<h3 id="为什么要用docker-compose" tabindex="-1"><a class="header-anchor" href="#为什么要用docker-compose" aria-hidden="true">#</a> 为什么要用docker-compose</h3>
<blockquote>
<p>使用一个Dockerfile模板文件，可以让用户很方便的定义一个单独应用容器。在工作中，经常会碰到需要多个容器相互配合来完成某项任务的情况，例如要实现一个web项目，除了web服务容器本身，往往还需要再加上后端的数据库服务容器，甚至还包括负载均衡容器等。<br>
compose允许用户通过一个单独docker-compose.yml模板文件（YAML格式）来定义一组相关联的应用容器为一个项目（project）;<br>
 <br>
docker-compose项目由pypthon编写，调用docker服务提供的API来对容器进行管理，因此， 只要所操作的平台支持docker-API，就可以在其上利用conpose来进行编排管理。<br>
 <br>
当在宿主机启动较多的容器时，如果都是手动操作会觉得比较麻烦，而且容易出错，这个时候推荐使用 docker 单机编排工具 docker-compose,docker-compose是docker容器的一种编排服务，docker-compose是一个管理多个容器的工具，比如可以解决容器之间的依赖关系，就像启动一个web服务，就必须得先把数据库服务先启动一样，docker-compose完全可以替代docker run 一键启动容器。<br>
 <br>
简单来说：就是来管理多个容器的，定义启动顺序的，合理编排，方便管理。</p>
</blockquote>
<p>github地址：<a href="https://github.com/docker/compose" target="_blank" rel="noopener noreferrer">https://github.com/docker/compose<ExternalLinkIcon/></a></p>
<h2 id="yaml文件格式编写及编写注意事项" tabindex="-1"><a class="header-anchor" href="#yaml文件格式编写及编写注意事项" aria-hidden="true">#</a> YAML文件格式编写及编写注意事项</h2>
<font size=5>**1、YAML文件格式**</font><ul>
<li>YAML是一种标记性语言，它可以很直观的展示数据序列化格式，可读性高。</li>
<li>类似于json数据描述语言，但是语法要比json简单很多。</li>
<li>YAML数据结构通过缩进来表示，连续的项目通过减号来表示，键值对用冒号分隔，数组用中括号[ ] 括起来，bash用花括号{ } 括起来。</li>
</ul>
<font size=4>**2、YAML格式的注意事项**</font><ul>
<li>不支持制表符tab键缩进，只能使用空格缩进</li>
<li>通常开头缩进2个空格</li>
<li>字符后缩进1个空格，如冒号【：】、逗号【，】、横杠【-】</li>
<li>用#号表示注释</li>
<li>如果包含特殊字符用单引号【’ '】引起来作为普通字符，如果用双引号【“ ”】表示特殊字符本身的意思，</li>
<li>布尔值必须用【“ ”】括起来</li>
<li>YAML区分大小写</li>
</ul>
<font size=4>**注意：**</font><blockquote>
<p>请严格按照YAML文件格式来写，如格式写错docker-compose启动服务时一般会报：<font color=red>ERROR: In file './nginx.yaml', service 'hostname' must be a mapping not a st</font> 这个错；解决方式就是看自己的YAML文件格式写的是否正确。<br>
更多YAML格式及实例可参考：<a href="https://liucy.blog.csdn.net/article/details/129041706" target="_blank" rel="noopener noreferrer">yaml文件格式详解及实例<ExternalLinkIcon/></a></p>
</blockquote>
</div></template>


