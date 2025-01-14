import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as r,c as p,a as n,b as s,d as a,w as l,e as t}from"./app-6706a352.js";const u={},m=n("p",null,[s("👨‍🎓"),n("strong",null,"博主简介")],-1),b={href:"https://blog.csdn.net/liu_chen_yang?type=blog",target:"_blank",rel:"noopener noreferrer"},v=n("br",null,null,-1),k={href:"https://blog.csdn.net/liu_chen_yang?type=blog",target:"_blank",rel:"noopener noreferrer"},h=n("br",null,null,-1),g={href:"https://bbs.huaweicloud.com/community/myblog",target:"_blank",rel:"noopener noreferrer"},f=n("br",null,null,-1),_={href:"https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz",target:"_blank",rel:"noopener noreferrer"},y=n("br",null,null,-1),x=n("strong",null,"交流社区：",-1),q={href:"https://bbs.csdn.net/forums/lcy",target:"_blank",rel:"noopener noreferrer"},L=n("br",null,null,-1),w=n("br",null,null,-1),E=t(`<hr><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191554918.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、elfk的部署-docker部署方式⚽" tabindex="-1"><a class="header-anchor" href="#一、elfk的部署-docker部署方式⚽" aria-hidden="true">#</a> 一、ELFK的部署 -- docker部署方式⚽</h2><h3 id="_1-前置准备" tabindex="-1"><a class="header-anchor" href="#_1-前置准备" aria-hidden="true">#</a> 1. 前置准备</h3><h4 id="_1-1-服务器信息" tabindex="-1"><a class="header-anchor" href="#_1-1-服务器信息" aria-hidden="true">#</a> 1.1 服务器信息</h4><table><thead><tr><th style="text-align:center;">IP</th><th style="text-align:left;">操作系统</th><th style="text-align:left;">系统配置</th><th>环境</th><th style="text-align:left;">服务</th><th style="text-align:left;">端口</th></tr></thead><tbody><tr><td style="text-align:center;">172.16.11.213</td><td style="text-align:left;">CentOS Linux 7 (Core)<br>X86架构</td><td style="text-align:left;">CPU：4核8线程<br>内存：16G<br>硬盘：100G</td><td>docker<br>docker-compose<br></td><td style="text-align:left;">Elasticsearch<br>Logstash<br>Kibana<br>Filebeat<br>nginx</td><td style="text-align:left;">9200 / 9300<br>5044<br>5601<br><br>80</td></tr></tbody></table><p><strong>要用到的服务包信息：</strong></p><table><thead><tr><th style="text-align:center;">软件安装包名称</th><th style="text-align:center;">软件版本</th><th style="text-align:center;">功能</th></tr></thead><tbody><tr><td style="text-align:center;">docker</td><td style="text-align:center;">24.0.5</td><td style="text-align:center;">容器：提供单独elfk环境</td></tr><tr><td style="text-align:center;">docker-compose</td><td style="text-align:center;">1.29.2</td><td style="text-align:center;">容器编排工具：用于同步管理elfk</td></tr><tr><td style="text-align:center;">elasticsearch</td><td style="text-align:center;">8.12.2</td><td style="text-align:center;">日志存储</td></tr><tr><td style="text-align:center;">kibana</td><td style="text-align:center;">8.12.2</td><td style="text-align:center;">日志数据图形化展示</td></tr><tr><td style="text-align:center;">logstash</td><td style="text-align:center;">8.12.2</td><td style="text-align:center;">日志处理</td></tr><tr><td style="text-align:center;">filebeat</td><td style="text-align:center;">8.12.2</td><td style="text-align:center;">日志采集</td></tr><tr><td style="text-align:center;">nginx</td><td style="text-align:center;">1.24.0</td><td style="text-align:center;">nginx服务</td></tr></tbody></table><p><strong>ELFK 关系图：</strong></p><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191554242.png" alt="ELFK基础架构图" tabindex="0" loading="lazy"><figcaption>ELFK基础架构图</figcaption></figure><h4 id="_1-2-关闭防火墙及selinux沙盒" tabindex="-1"><a class="header-anchor" href="#_1-2-关闭防火墙及selinux沙盒" aria-hidden="true">#</a> 1.2 关闭防火墙及selinux沙盒</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 先查看防火墙是否开启</span>
systemctl status firewalld

<span class="token comment"># 如果是开启的那就关闭并设置开机不自启</span>
systemctl stop firewalld
systemctl disable firewalld

<span class="token comment"># 设置selinux为Disabled</span>
<span class="token function">cat</span> /etc/selinux/config
<span class="token comment"># 设置 SELINUX=disabled</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191554917.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><p>如果防火墙开启的话，需要打开的端口有：（端口可自行定义）</p><ul><li>Elasticsearch：<code>9200</code>、<code>9300</code></li><li>Kibana：<code>5601</code></li><li>Logstash：<code>5044</code></li><li>nginx：<code>80</code></li><li><strong>filebeat</strong> 本身不监听任何端口，它是一个轻量级的日志文件收集器，用于将日志发送到Logstash或Elasticsearch。</li></ul><blockquote><p><strong>注：</strong></p><p><strong>9200 本地elasticsearch服务本地的端口<br> 9300 是elasticsearch集群的通信端口</strong></p></blockquote><h4 id="_1-3-将elfk镜像包上传到服务器上-也可以等在执行docker-compose时自动拉取" tabindex="-1"><a class="header-anchor" href="#_1-3-将elfk镜像包上传到服务器上-也可以等在执行docker-compose时自动拉取" aria-hidden="true">#</a> 1.3 将ELFK镜像包上传到服务器上（也可以等在执行docker-compose时自动拉取）</h4><p>在启动服务的时候默认是可以拉取ELFK镜像的，不过最近dockerhub好像国内用不了了，拉不了镜像；</p>`,19),K=n("p",null,"E: elasticsearch 数据存储、数据搜索；",-1),z={href:"https://www.elastic.co/cn/downloads/elasticsearch/",target:"_blank",rel:"noopener noreferrer"},S=n("p",null,"L: logstash 数据采集、数据清洗、数据过滤；",-1),j={href:"https://www.elastic.co/cn/downloads/logstash",target:"_blank",rel:"noopener noreferrer"},F=n("p",null,"K: kibana 数据分析、数据展示；",-1),C={href:"https://www.elastic.co/cn/downloads/kibana/",target:"_blank",rel:"noopener noreferrer"},T=n("p",null,"F：filebeat 收集日志数据；",-1),I={href:"https://www.elastic.co/guide/en/beats/filebeat/index.html",target:"_blank",rel:"noopener noreferrer"},P=n("p",null,"镜像下载地址：",-1),N=n("blockquote",null,[n("p",null,"我这边目前只有：8.12.2、7.1.0版本；CSDN下载地址；"),n("p",null,"其他版本可以百度看看：")],-1),G=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"包名"),n("th",{style:{"text-align":"center"}},"地址")])],-1),O={style:{"text-align":"center"}},D={href:"https://download.csdn.net/download/liu_chen_yang/89427498",target:"_blank",rel:"noopener noreferrer"},R={style:{"text-align":"center"}},X={href:"https://download.csdn.net/download/liu_chen_yang/89427498",target:"_blank",rel:"noopener noreferrer"},B={style:{"text-align":"center"}},A={href:"https://download.csdn.net/download/liu_chen_yang/89427504",target:"_blank",rel:"noopener noreferrer"},U={style:{"text-align":"center"}},M={href:"https://download.csdn.net/download/liu_chen_yang/89427504",target:"_blank",rel:"noopener noreferrer"},V={style:{"text-align":"center"}},H={href:"https://download.csdn.net/download/liu_chen_yang/89427462",target:"_blank",rel:"noopener noreferrer"},Z={style:{"text-align":"center"}},Y={href:"https://download.csdn.net/download/liu_chen_yang/89427462",target:"_blank",rel:"noopener noreferrer"},J={style:{"text-align":"center"}},Q={href:"https://download.csdn.net/download/liu_chen_yang/89427463",target:"_blank",rel:"noopener noreferrer"},W={style:{"text-align":"center"}},$={href:"https://download.csdn.net/download/liu_chen_yang/89427463",target:"_blank",rel:"noopener noreferrer"},nn=t(`<h4 id="_1-4-校正时间" tabindex="-1"><a class="header-anchor" href="#_1-4-校正时间" aria-hidden="true">#</a> 1.4 校正时间</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载ntpdate命令</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> ntpdate

<span class="token comment"># 时间校正</span>
ntpdate cn.pool.ntp.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-5-本文注意事项" tabindex="-1"><a class="header-anchor" href="#_1-5-本文注意事项" aria-hidden="true">#</a> 1.5 本文注意事项</h4>`,3),sn=n("br",null,null,-1),an=n("br",null,null,-1),en=n("br",null,null,-1),tn=n("br",null,null,-1),ln=t('<h3 id="_2-部署docker" tabindex="-1"><a class="header-anchor" href="#_2-部署docker" aria-hidden="true">#</a> 2. 部署docker</h3><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 方法一：</label></li></ul>',2),cn={href:"https://blog.csdn.net/liu_chen_yang/article/details/123842609",target:"_blank",rel:"noopener noreferrer"},on=n("ul",{class:"task-list-container"},[n("li",{class:"task-list-item"},[n("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-1",checked:"checked",disabled:"disabled"}),n("label",{class:"task-list-item-label",for:"task-item-1"}," 方法二：")])],-1),dn={href:"https://download.csdn.net/download/liu_chen_yang/88647183",target:"_blank",rel:"noopener noreferrer"},rn=t(`<ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 方法三：</label></li></ul><p>按照以下方式安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装utils工具</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> yum-utils

<span class="token comment"># 安装docker扩展源工具</span>
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

<span class="token comment"># 安装docker服务</span>
yum <span class="token function">install</span> docker-ce docker-ce-cli containerd.io

<span class="token comment"># 设置docker开机自启并启动服务</span>
systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-部署docker-compose" tabindex="-1"><a class="header-anchor" href="#_3-部署docker-compose" aria-hidden="true">#</a> 3. 部署docker-compose</h3><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 方法一：</label></li></ul>`,5),pn={href:"https://blog.csdn.net/liu_chen_yang/article/details/124688952",target:"_blank",rel:"noopener noreferrer"},un=n("ul",{class:"task-list-container"},[n("li",{class:"task-list-item"},[n("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-4",checked:"checked",disabled:"disabled"}),n("label",{class:"task-list-item-label",for:"task-item-4"}," 方法二：")])],-1),mn={href:"https://download.csdn.net/download/liu_chen_yang/89428645",target:"_blank",rel:"noopener noreferrer"},bn=n("figure",null,[n("img",{src:"https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191554716.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),vn=n("h3",{id:"_4-部署elfk",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-部署elfk","aria-hidden":"true"},"#"),s(" 4. 部署ELFK")],-1),kn=n("p",null,[n("strong",null,"注意事项：")],-1),hn=n("br",null,null,-1),gn=n("br",null,null,-1),fn=n("strong",null,"注意：本文出现的 IP 和 容器外的路径 请根据自己的实际情况自定义",-1),_n=n("br",null,null,-1),yn=n("br",null,null,-1),xn=n("strong",null,"注意：本文出现的 IP 和 容器外的路径 请根据自己的实际情况自定义",-1),qn=t(`<h4 id="_4-1-创建elfk的项目路径" tabindex="-1"><a class="header-anchor" href="#_4-1-创建elfk的项目路径" aria-hidden="true">#</a> 4.1 创建ELFK的项目路径</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/ELK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-2-创建es目录及配置文件" tabindex="-1"><a class="header-anchor" href="#_4-2-创建es目录及配置文件" aria-hidden="true">#</a> 4.2 创建ES目录及配置文件</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建ES目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/ELK/elasticsearch/<span class="token punctuation">{</span>plugins,config,data,logs<span class="token punctuation">}</span>

<span class="token comment"># 进入es的config目录</span>
<span class="token builtin class-name">cd</span> /data/ELK/elasticsearch/config

<span class="token comment"># 创建es配置文件</span>
<span class="token function">touch</span> es.yml

<span class="token comment"># 给所有ES目录读写执行权限</span>
<span class="token function">chmod</span> <span class="token number">775</span> <span class="token parameter variable">-R</span> /data/ELK/elasticsearch/

<span class="token comment"># 编辑es配置文件</span>
<span class="token function">vi</span> es.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 集群名称</span>
<span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> mycluster

<span class="token comment"># 节点名称</span>
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> mynode

<span class="token comment"># 网络绑定地址</span>
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> 0.0.0.0

<span class="token comment"># 默认端口：9200 本地elasticsearch服务本地的端口、9300 是elasticsearch集群的通信端口</span>
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9200</span>
<span class="token key atrule">transport.port</span><span class="token punctuation">:</span> <span class="token number">9300</span>

<span class="token comment"># 开启单节点模式</span>
<span class="token key atrule">node.roles</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> master<span class="token punctuation">,</span> data<span class="token punctuation">,</span> ingest<span class="token punctuation">,</span> ml <span class="token punctuation">]</span>

<span class="token comment"># 内存限制</span>
<span class="token comment">#bootstrap.memory_lock: true</span>
<span class="token comment">#ES_JAVA_OPTS: &quot;-Xms512m -Xmx512m&quot;</span>

<span class="token comment"># 关闭集群发现功能（单节点）</span>
<span class="token key atrule">discovery.type</span><span class="token punctuation">:</span> single<span class="token punctuation">-</span>node

<span class="token comment"># --------------------------- ssl安全认证配置 ----------------------------------</span>

<span class="token comment"># 关闭 X-Pack 安全模式</span>
<span class="token key atrule">xpack.security.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token comment"># 禁用初始化生成密码功能</span>
<span class="token key atrule">xpack.security.enrollment.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token comment"># 禁用客户端之间连接加密，如果启用，客户端（如 Kibana、Logstash、filebeat）就需要通过加密方式访问</span>
<span class="token key atrule">xpack.security.http.ssl.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token comment"># 指定ssl证书地址（开启安全模式就需要开启这个）</span>
<span class="token comment">#xpack.security.http.ssl.keystore.path: certs/http.p12</span>

<span class="token comment"># 禁用 Elasticsearch 节点间传输层通信的加密。</span>
<span class="token key atrule">xpack.security.transport.ssl.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token comment"># 证书的验证模式，certificate 为双向 SSL/TLS 认证（即节点间相互验证证书）</span>
<span class="token comment">#xpack.security.transport.ssl.verification_mode: certificate</span>
<span class="token comment"># 如果启用了ssl认证，下面两个就是配置证书和私钥的文件路径</span>
<span class="token comment">#xpack.security.transport.ssl.keystore.path: certs/transport.p12</span>
<span class="token comment">#xpack.security.transport.ssl.truststore.path: certs/transport.p12</span>

<span class="token comment"># ----------------------- END SECURITY AUTO CONFIGURATION -------------------------</span>

<span class="token comment"># 注意：在生产环境中，建议启用 SSL/TLS 加密来保护数据传输的安全性，特别是在公共或不安全的网络中。如果你选择启用 SSL/TLS，需要确保你有有效的证书和密钥库，并正确配置了密钥库和信任库的路径。在开发或测试环境中，可能会为了方便而禁用这些安全特性，但要意识到这可能会带来安全风险。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-创建logstash目录及配置文件" tabindex="-1"><a class="header-anchor" href="#_4-3-创建logstash目录及配置文件" aria-hidden="true">#</a> 4.3 创建Logstash目录及配置文件</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建logstash目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/ELK/logstash/<span class="token punctuation">{</span>conf.d,config,data,logs<span class="token punctuation">}</span>

<span class="token comment"># 进入logstash的config目录</span>
<span class="token builtin class-name">cd</span> /data/ELK/logstash/config

<span class="token comment"># 创建logstash的yml文件</span>
<span class="token function">touch</span> logstash.yml

<span class="token comment"># 编辑logstash配置文件</span>
<span class="token function">vim</span> logstash.yml

path.config: /usr/share/logstash/conf.d/*.conf
path.logs: /usr/share/logstash/logs

<span class="token comment"># 进入logstash的conf.d目录</span>
<span class="token builtin class-name">cd</span> /data/ELK/logstash/conf.d

<span class="token comment"># 创建logstash配置文件</span>
<span class="token function">touch</span> logstash.conf

<span class="token comment"># 编辑logstash配置文件</span>
<span class="token function">vi</span> logstash.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>input <span class="token punctuation">{</span>
  beats <span class="token punctuation">{</span>
    port <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">5044</span>
    codec <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;json&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

output <span class="token punctuation">{</span>
    elasticsearch <span class="token punctuation">{</span>
	<span class="token comment"># es的地址</span>
      	hosts <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;http://172.16.11.213:9200&quot;</span><span class="token punctuation">]</span>
      	<span class="token comment"># 用户名（如果es开启了用户名密码这里就需要配置，如果没开启就不用配置）</span>
      	<span class="token comment">#user =&gt; &quot;elastic&quot;</span>
      	<span class="token comment"># 密码</span>
      	<span class="token comment">#password =&gt; &quot;123456&quot;</span>
	<span class="token comment"># 索引</span>
      	<span class="token comment">#index =&gt; &quot;dashu-park-error-log&quot;</span>
	<span class="token comment"># 类型</span>
	<span class="token comment">#document_type =&gt; &quot;fire&quot;</span>
	<span class="token comment"># 主键</span>
	<span class="token comment">#document_id =&gt; &quot;%{id}&quot;</span>
    <span class="token punctuation">}</span>
<span class="token comment"># mail插件，可以用来报警发邮件</span>
<span class="token comment">#    email {</span>
<span class="token comment">#        port           =&gt; &quot;25&quot;</span>
<span class="token comment">#        address        =&gt; &quot;smtp.163.com&quot;</span>
<span class="token comment">#        username       =&gt; &quot;123123123@163.com&quot;</span>
<span class="token comment">#        password       =&gt; &quot;1231231231&quot;</span>
<span class="token comment">#        authentication =&gt; &quot;plain&quot;</span>
<span class="token comment">#        use_tls        =&gt; false</span>
<span class="token comment">#        from           =&gt; &quot;123123123@qq.com&quot;</span>
<span class="token comment">#        subject        =&gt; &quot;dashu-park-zone项目中有error日志信息&quot;</span>
<span class="token comment">#        to             =&gt; &quot;123123123@qq.com&quot;</span>
<span class="token comment">#        via            =&gt; &quot;smtp&quot;</span>
<span class="token comment">#        body           =&gt; &quot;错误日志： \\n  %{message} &quot;</span>
<span class="token comment">#    }</span>
<span class="token comment">#  }</span>
<span class="token comment">#  redis {</span>
<span class="token comment">#     host =&gt; [&quot;172.16.11.213&quot;] #这个是标明redis服务的地址</span>
<span class="token comment">#     port =&gt; 9001</span>
<span class="token comment">#     codec =&gt; plain</span>
<span class="token comment">#     db =&gt; 1 #redis中的数据库，select的对象</span>
<span class="token comment">#     key =&gt; elk_log #redis中的键值</span>
<span class="token comment">#     data_type =&gt; list #一般就是list和channel</span>
<span class="token comment">#     password =&gt; DaShuRedisoRhFG9xT6kXIZl5b</span>
<span class="token comment">#     timeout =&gt; 5</span>
<span class="token comment">#     workers =&gt; 1</span>
<span class="token comment">#  }</span>
  stdout <span class="token punctuation">{</span> codec <span class="token operator">=</span><span class="token operator">&gt;</span> rubydebug <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-4-创建kibana目录及配置文件" tabindex="-1"><a class="header-anchor" href="#_4-4-创建kibana目录及配置文件" aria-hidden="true">#</a> 4.4 创建Kibana目录及配置文件</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建kibana目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/ELK/kibana/

<span class="token comment"># 进入kibana目录</span>
<span class="token builtin class-name">cd</span> /data/ELK/kibana/

<span class="token comment"># 创建kibana配置文件</span>
<span class="token function">touch</span> kibana.yml

<span class="token comment"># 编辑kibana配置文件</span>
<span class="token function">vi</span> kibana.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">server.host</span><span class="token punctuation">:</span> <span class="token string">&quot;0.0.0.0&quot;</span>
<span class="token key atrule">server.shutdownTimeout</span><span class="token punctuation">:</span> <span class="token string">&quot;5s&quot;</span>
<span class="token key atrule">elasticsearch.hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;http://172.16.11.213:9200&quot;</span> <span class="token punctuation">]</span>
<span class="token comment"># 配置中文</span>
<span class="token key atrule">i18n.locale</span><span class="token punctuation">:</span> zh<span class="token punctuation">-</span>CN
<span class="token comment"># 配置用户名密码（es有用户名密码的时候在开启）</span>
<span class="token comment">#elasticsearch.username: &quot;kibana&quot;</span>
<span class="token comment">#elasticsearch.password: &quot;123456&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-5-创建filebeat目录及配置文件" tabindex="-1"><a class="header-anchor" href="#_4-5-创建filebeat目录及配置文件" aria-hidden="true">#</a> 4.5 创建filebeat目录及配置文件</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建filebeat目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/ELK/filebeat/<span class="token punctuation">{</span>config,data,logs<span class="token punctuation">}</span>

<span class="token comment"># 进入filebeat/config目录</span>
<span class="token builtin class-name">cd</span> /data/ELK/filebeat/config

<span class="token comment"># 创建filebeat配置文件</span>
<span class="token function">touch</span> filebeat.yml

<span class="token comment"># 去除filebeat组和其他用户的写入权限。</span>
<span class="token function">chmod</span> go-w /data/ELK/filebeat/config/filebeat.yml

<span class="token comment"># 编辑filebeat配置文件</span>
<span class="token function">vi</span> filebeat.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#=========================== Filebeat inputs =============================</span>

<span class="token key atrule">filebeat.inputs</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> log
  <span class="token comment"># Change to true to enable this input configuration.</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  
  <span class="token comment"># Paths that should be crawled and fetched. Glob based paths.</span>
  <span class="token key atrule">paths</span><span class="token punctuation">:</span>  <span class="token comment">#可以配置多个日志路径</span>
    <span class="token comment"># 如果是docker部署，这里就是docker容器内的路径，而且需要和宿主机的路径进行映射</span>
    <span class="token punctuation">-</span> /usr/share/filebeat/logs/<span class="token important">*.log</span>
    <span class="token comment">#- /usr/share/filebeat/logs/info.log	</span>
  <span class="token comment">#指定自定义字段	</span>
  <span class="token key atrule">fields</span><span class="token punctuation">:</span>							
       <span class="token key atrule">project</span><span class="token punctuation">:</span> <span class="token string">&quot;fire&quot;</span>  <span class="token comment">#字段1	</span>
       <span class="token comment">#hostName: &quot;172.16.11.213&quot;	  #字段2</span>
  
  <span class="token key atrule">multiline</span><span class="token punctuation">:</span>
    <span class="token comment">#多行匹配规则</span>
    <span class="token key atrule">pattern</span><span class="token punctuation">:</span> <span class="token string">&#39;^[[:space:]]+(at|\\.{3})\\b&amp;^Caused by:&#39;</span>
    <span class="token comment">#将不匹配的规则的行合并在一起</span>
    <span class="token key atrule">negate</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token comment">#合并到匹配规则的上一行末尾</span>
    <span class="token key atrule">match</span><span class="token punctuation">:</span> after


<span class="token comment">#================================ Outputs =====================================</span>

<span class="token comment">#----------------------------- Logstash output --------------------------------</span>
<span class="token key atrule">output.logstash</span><span class="token punctuation">:</span>
  <span class="token comment"># The Logstash hosts</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;172.16.11.213:5044&quot;</span><span class="token punctuation">]</span>   

  <span class="token comment"># Optional SSL. By default is off.</span>
  <span class="token comment"># List of root certificates for HTTPS server verifications</span>
  <span class="token comment">#ssl.certificate_authorities: [&quot;/etc/pki/root/ca.pem&quot;]</span>

  <span class="token comment"># Certificate for SSL client authentication</span>
  <span class="token comment">#ssl.certificate: &quot;/etc/pki/client/cert.pem&quot;</span>

  <span class="token comment"># Client Certificate Key</span>
  <span class="token comment">#ssl.key: &quot;/etc/pki/client/cert.key&quot;</span>


<span class="token comment">#output.elasticsearch:</span>
<span class="token comment">#  hosts: 172.16.11.213:9200</span>
<span class="token comment">#  indices:</span>
<span class="token comment">#    - index: &quot;filebeat-%{+yyyy.MM.dd}&quot;</span>

<span class="token comment">#output.redis:</span>
   <span class="token comment">#hosts: [&quot;172.16.11.213:9001&quot;]</span>
   <span class="token comment">#password: DaShuRedisoRhFG9xT6kXIZl5b</span>
   <span class="token comment">#key: &quot;filebeat-redis&quot;</span>
   <span class="token comment">#db: 1</span>
   <span class="token comment">#timeout: 60</span>
   
<span class="token comment"># 控制台输出</span>
<span class="token comment">#output.console:</span>
  <span class="token comment">#pretty: true</span>
  <span class="token comment">#enable: true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-6-导入elfk镜像" tabindex="-1"><a class="header-anchor" href="#_4-6-导入elfk镜像" aria-hidden="true">#</a> 4.6 导入ELFK镜像</h4>`,15),Ln=n("br",null,null,-1),wn={href:"https://blog.csdn.net/liu_chen_yang/article/details/124322403",target:"_blank",rel:"noopener noreferrer"},En=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> load <span class="token parameter variable">-i</span> elasticsearch.tar <span class="token operator">&amp;&amp;</span> <span class="token function">docker</span> load <span class="token parameter variable">-i</span> logstash.tar <span class="token operator">&amp;&amp;</span> <span class="token function">docker</span> load <span class="token parameter variable">-i</span> kibana.tar <span class="token operator">&amp;&amp;</span> <span class="token function">docker</span> load <span class="token parameter variable">-i</span> filebeat.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost config<span class="token punctuation">]</span><span class="token comment"># docker images </span>
REPOSITORY                                      TAG       IMAGE ID       CREATED        SIZE
elastic/kibana                                  <span class="token number">8.12</span>.2    2870bdfe2474   <span class="token number">3</span> months ago   <span class="token number">1</span>.05GB
elastic/elasticsearch                           <span class="token number">8.12</span>.2    c02b14250fd3   <span class="token number">3</span> months ago   <span class="token number">1</span>.36GB
elastic/logstash                                <span class="token number">8.12</span>.2    341c9b96c97b   <span class="token number">3</span> months ago   769MB
elastic/filebeat                                <span class="token number">8.12</span>.2    89c084ca559d   <span class="token number">3</span> months ago   325MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191554234.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191554657.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_4-7-使用docker-compose启动elfk服务" tabindex="-1"><a class="header-anchor" href="#_4-7-使用docker-compose启动elfk服务" aria-hidden="true">#</a> 4.7 使用docker-compose启动ELFK服务</h4><p>①、先创建docker-compose目录用来管理ELFK服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建docker-compose目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/ELK/docker-compose

<span class="token comment"># 进入docker-compose目录</span>
<span class="token builtin class-name">cd</span> /data/ELK/docker-compose

<span class="token comment"># 创建docker-compose的yml配置文件</span>
<span class="token function">touch</span> docker-compose.yml

<span class="token comment">#编辑docker-compose配置</span>
<span class="token function">vi</span> docker-compose.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">elasticsearch</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> elastic/elasticsearch<span class="token punctuation">:</span>8.12.2
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> es
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> es
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /data/ELK/elasticsearch/config/es.yml<span class="token punctuation">:</span>/usr/share/elasticsearch/config/elasticsearch.yml
      <span class="token punctuation">-</span> /data/ELK/elasticsearch/plugins<span class="token punctuation">:</span>/usr/share/elasticsearch/plugins
      <span class="token punctuation">-</span> /data/ELK/elasticsearch/data<span class="token punctuation">:</span>/usr/share/elasticsearch/data
      <span class="token punctuation">-</span> /data/ELK/elasticsearch/logs<span class="token punctuation">:</span>/usr/share/elasticsearch/logs
      <span class="token punctuation">-</span> /etc/localtime<span class="token punctuation">:</span>/etc/localtime
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 9200<span class="token punctuation">:</span><span class="token number">9200</span>
      <span class="token punctuation">-</span> 9300<span class="token punctuation">:</span><span class="token number">9300</span>
      
  <span class="token key atrule">logstash</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> elastic/logstash<span class="token punctuation">:</span>8.12.2
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> logstash
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> logstash
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">logging</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> json<span class="token punctuation">-</span>file
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
        <span class="token key atrule">max-size</span><span class="token punctuation">:</span> <span class="token string">&quot;10m&quot;</span>
        <span class="token key atrule">max-file</span><span class="token punctuation">:</span> <span class="token string">&quot;2&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /data/ELK/logstash/config/logstash.yml<span class="token punctuation">:</span>/usr/share/logstash/config/logstash.yml
      <span class="token punctuation">-</span> /data/ELK/logstash/conf.d/<span class="token punctuation">:</span>/usr/share/logstash/conf.d/
      <span class="token punctuation">-</span> /etc/localtime<span class="token punctuation">:</span>/etc/localtime
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 5044<span class="token punctuation">:</span><span class="token number">5044</span>

  <span class="token key atrule">kibana</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> elastic/kibana<span class="token punctuation">:</span>8.12.2
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> kibana
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> kibana
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /data/ELK/kibana/kibana.yml<span class="token punctuation">:</span>/usr/share/kibana/config/kibana.yml
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 5601<span class="token punctuation">:</span><span class="token number">5601</span>
      
  <span class="token key atrule">filebeat</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> elastic/filebeat<span class="token punctuation">:</span>8.12.2
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> filebeat
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> filebeat
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">user</span><span class="token punctuation">:</span> root
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token comment"># 日志文件夹映射到容器中[作为数据源]</span>
      <span class="token punctuation">-</span> /data/ELK/filebeat/logs<span class="token punctuation">:</span>/usr/share/filebeat/logs/
      <span class="token comment"># 采集日志配置映射配置文件到容器中</span>
      <span class="token punctuation">-</span> /data/ELK/filebeat/config/filebeat.yml<span class="token punctuation">:</span>/usr/share/filebeat/filebeat.yml<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> /etc/localtime<span class="token punctuation">:</span>/etc/localtime
    <span class="token comment"># 使用主机网络模式</span>
    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> host
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>如果防火墙开启的话，需要打开的端口有：（端口可自行定义）</p><ul><li>Elasticsearch：<code>9200</code>、<code>9300</code></li><li>Kibana：<code>5601</code></li><li>Logstash：<code>5044</code></li><li>nginx：<code>80</code></li><li><strong>filebeat</strong> 本身不监听任何端口，它是一个轻量级的日志文件收集器，用于将日志发送到Logstash或Elasticsearch。</li></ul><blockquote><p><strong>注：</strong></p><p><strong>9200 本地elasticsearch服务本地的端口<br> 9300 是elasticsearch集群的通信端口</strong></p></blockquote><hr><p>②、启动ELFK服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入docker-compose.yml位置</span>
<span class="token builtin class-name">cd</span> /data/ELK/docker-compose/

<span class="token comment"># 启动（两种二选一）</span>
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span> 

<span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> /data/ELK/docker-compose/docker-compose.yml up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>③、查看ELFK服务状态</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191554963.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>State状态为：<code>UP</code>或者<code>running</code>就为运行状态。</p><hr><p>④、启动完ELFK都看一下这些容器的日志</p><p>启动完ELFK都看一下这些容器的日志，看看有没有报错；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看es的服务日志</span>
<span class="token function">docker</span> logs <span class="token parameter variable">-f</span> es

<span class="token comment"># 查看logstash的服务日志</span>
<span class="token function">docker</span> logs <span class="token parameter variable">-f</span> logstash

<span class="token comment"># 查看kibana的服务日志</span>
<span class="token function">docker</span> logs <span class="token parameter variable">-f</span> kibana

<span class="token comment"># 查看filebeat的服务日志</span>
<span class="token function">docker</span> logs <span class="token parameter variable">-f</span> filebeat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在启动 <strong>kibana</strong> 时遇到以下提示内容，不用管，这个提示说的是没有配置账户令牌，不影响我们的访问及拿日志；</p><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191554129.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_4-8-访问es、kibana地址" tabindex="-1"><a class="header-anchor" href="#_4-8-访问es、kibana地址" aria-hidden="true">#</a> 4.8 访问es、kibana地址</h4><p>访问es、kibana地址，确认是否可以访问到，没有问题；</p>`,27),Kn={class:"task-list-container"},zn={class:"task-list-item"},Sn=n("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-5",checked:"checked",disabled:"disabled"},null,-1),jn={class:"task-list-item-label",for:"task-item-5"},Fn={href:"http://172.16.11.213:9200",target:"_blank",rel:"noopener noreferrer"},Cn=n("figure",null,[n("img",{src:"https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191554085.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),Tn={class:"task-list-container"},In={class:"task-list-item"},Pn=n("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-6",checked:"checked",disabled:"disabled"},null,-1),Nn={class:"task-list-item-label",for:"task-item-6"},Gn={href:"http://172.16.11.213:5601",target:"_blank",rel:"noopener noreferrer"},On=n("figure",null,[n("img",{src:"https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191553636.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),Dn=n("figure",null,[n("img",{src:"https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191553856.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),Rn=n("h4",{id:"_4-9-安装并配置nginx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-9-安装并配置nginx","aria-hidden":"true"},"#"),s(" 4.9 安装并配置nginx")],-1),Xn={href:"https://blog.csdn.net/liu_chen_yang/article/details/133928000",target:"_blank",rel:"noopener noreferrer"},Bn={href:"https://blog.csdn.net/liu_chen_yang/article/details/132145067",target:"_blank",rel:"noopener noreferrer"},An=t(`<p>这里我习惯于二进制的部署方式，那么就使用二进制部署，这里就简单写一下，具体的操作可以看二进制部署文档；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 拉取1.24.0安装包</span>
<span class="token function">wget</span> https://nginx.org/download/nginx-1.24.0.tar.gz
<span class="token comment"># 安装必要的插件依赖包</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc gcc-c++ zlib zlib-devel pcre-devel openssl openssl-devel 
<span class="token comment"># 解压到/usr/src下</span>
<span class="token function">tar</span> xf nginx-1.24.0.tar.gz <span class="token parameter variable">-C</span> /usr/src/
<span class="token comment"># 进入</span>
<span class="token builtin class-name">cd</span> /usr/src/nginx-1.24.0
<span class="token comment"># 编译安装</span>
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成后，这里需要修改以下配置文件，把nginx的日志路径指到filebeat的logs目录下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入nginx配置文件</span>
<span class="token builtin class-name">cd</span> /usr/local/nginx/conf/
<span class="token function">vim</span> nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191553772.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动nginx服务</span>
/usr/local/nginx/sbin/nginx <span class="token parameter variable">-c</span>  /usr/local/nginx/conf/nginx.conf

<span class="token comment"># 查看filebeat日志是否有输出，页面访问http://172.16.11.213 nginx刷新</span>
<span class="token function">tail</span> <span class="token parameter variable">-f</span> /data/ELK/filebeat/logs/nginx_access.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191553824.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_4-10-获取服务日志并进行页面展示" tabindex="-1"><a class="header-anchor" href="#_4-10-获取服务日志并进行页面展示" aria-hidden="true">#</a> 4.10 获取服务日志并进行页面展示</h4>`,8),Un={href:"http://172.16.11.213:5601",target:"_blank",rel:"noopener noreferrer"},Mn=n("figure",null,[n("img",{src:"https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191553390.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),Vn=n("p",null,"刷新nginx页面，使其产生日志，并实时监控日志",-1),Hn=n("figure",null,[n("img",{src:"https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191553145.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),Zn=n("figure",null,[n("img",{src:"https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191553760.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),Yn=n("hr",null,null,-1),Jn=t(`<hr><h2 id="二、elk8-12-2版本配置密码认证" tabindex="-1"><a class="header-anchor" href="#二、elk8-12-2版本配置密码认证" aria-hidden="true">#</a> 二、ELK8.12.2版本配置密码认证</h2><h3 id="_1、配置-es-开启安全验证" tabindex="-1"><a class="header-anchor" href="#_1、配置-es-开启安全验证" aria-hidden="true">#</a> 1、配置 ES 开启安全验证</h3><h4 id="_1-1-修改-es-配置文件" tabindex="-1"><a class="header-anchor" href="#_1-1-修改-es-配置文件" aria-hidden="true">#</a> 1.1 修改 es 配置文件</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ES配置文件</span>
<span class="token function">vim</span> /data/ELK/elasticsearch/config/es.yml

<span class="token comment"># 将xpack.security.enabled=false改为true启用 X-Pack 安全性：</span>
xpack.security.enabled: <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-重启-es-容器" tabindex="-1"><a class="header-anchor" href="#_1-2-重启-es-容器" aria-hidden="true">#</a> 1.2 重启 es 容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> restart es
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启完记得再看一下es日志，看看有没有报错什么的；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> logs <span class="token parameter variable">-f</span> es
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启完kibana会连接不到，因为开启了安全认证，kibana没有找到相关配置，所以，会连接不到，在报错，在后面我们会配置的；</p><h4 id="_1-3-进入容器生成密码" tabindex="-1"><a class="header-anchor" href="#_1-3-进入容器生成密码" aria-hidden="true">#</a> 1.3 进入容器生成密码</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> es <span class="token function">bash</span>

<span class="token comment"># 生成密码（自动与手动二选一）</span>
<span class="token comment">## 自动生成密码</span>
elasticsearch-setup-passwords auto
<span class="token comment">## 手动输入密码</span>
elasticsearch-setup-passwords interactive 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我选择手动输入密码；手动输入密码每个用户都要输入两遍密码，一遍是输入一遍是确认密码；</p><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191553580.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_1-4-访问-es-页面进行验证" tabindex="-1"><a class="header-anchor" href="#_1-4-访问-es-页面进行验证" aria-hidden="true">#</a> 1.4 访问 es 页面进行验证</h4>`,15),Qn={href:"http://172.16.11.213:9200",target:"_blank",rel:"noopener noreferrer"},Wn=t(`<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191553210.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>输入完用户名密码，就到这个页面了；</p><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191553444.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2、配置-logstash-连接用户密码" tabindex="-1"><a class="header-anchor" href="#_2、配置-logstash-连接用户密码" aria-hidden="true">#</a> 2、配置 logstash 连接用户密码</h3><h4 id="_2-1-修改-logstash-配置文件" tabindex="-1"><a class="header-anchor" href="#_2-1-修改-logstash-配置文件" aria-hidden="true">#</a> 2.1 修改 logstash 配置文件</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入logstash配置文件</span>
<span class="token function">vim</span> /data/ELK/logstash/conf.d/logstash.conf

<span class="token comment"># 在output中输入用户名密码</span>
user <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;elastic&quot;</span>
password <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;刚刚生成或手动输入的密码&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>xpack.monitoring.enabled: true<br> xpack.monitoring.elasticsearch.username: elastic<br> xpack.monitoring.elasticsearch.password: lcy123...</p><h4 id="_2-2-重启-logstash-容器" tabindex="-1"><a class="header-anchor" href="#_2-2-重启-logstash-容器" aria-hidden="true">#</a> 2.2 重启 logstash 容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> restart logstash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启完记得再看一下 logstash 日志，看看有没有报错什么的；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> logs <span class="token parameter variable">-f</span> logstash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3、配置-kibana-连接用户密码" tabindex="-1"><a class="header-anchor" href="#_3、配置-kibana-连接用户密码" aria-hidden="true">#</a> 3、配置 kibana 连接用户密码</h3><h4 id="_3-1-修改-kibana-配置文件" tabindex="-1"><a class="header-anchor" href="#_3-1-修改-kibana-配置文件" aria-hidden="true">#</a> 3.1 修改 kibana 配置文件</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入kibana配置文件</span>
<span class="token function">vim</span> /data/ELK/kibana/kibana.yml

<span class="token comment"># 在最后添加或修改（这里用户名不能用elastic，否则启动会报错，elastic是超级用户，在8.*版本里是被禁止的）</span>
elasticsearch.username: <span class="token string">&quot;kibana&quot;</span>
elasticsearch.password: <span class="token string">&quot;刚刚生成或手动输入的密码&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-重启-kibana-容器" tabindex="-1"><a class="header-anchor" href="#_3-2-重启-kibana-容器" aria-hidden="true">#</a> 3.2 重启 kibana 容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> restart kibana
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启完记得再看一下 kibana 日志，看看有没有报错什么的；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> logs <span class="token parameter variable">-f</span> kibana
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里可以把ELFK全部重启一下（两种方式二选一）记得重启完查看日志；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> restart

<span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> /data/ELK/docker-compose/docker-compose.yml restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-访问-kibana-页面进行验证" tabindex="-1"><a class="header-anchor" href="#_3-3-访问-kibana-页面进行验证" aria-hidden="true">#</a> 3.3 访问 kibana 页面进行验证</h4>`,21),$n={href:"http://172.16.11.213:5601",target:"_blank",rel:"noopener noreferrer"},ns=t(`<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191553253.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这里可以输入用户名密码，并不是非要kibana配置文件中设置的用户名密码，用哪个登录上来会没有权限，这里我们可以登录<code>elastic</code>用户，密码也是刚刚设置的密码；</p><p>登录进来，右上角就会多出一个头像等用户信息；</p><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191552311.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="三、附加-修改-elk-认证密码" tabindex="-1"><a class="header-anchor" href="#三、附加-修改-elk-认证密码" aria-hidden="true">#</a> 三、附加：修改 ELK 认证密码</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-XPOST</span> <span class="token parameter variable">-u</span> elastic <span class="token string">&#39;http://ip:9200/_xpack/security/user/elastic/_password&#39;</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;{ &quot;password&quot; : &quot;要修改的密码&quot; }&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="四、附加-获取多台服务器日志" tabindex="-1"><a class="header-anchor" href="#四、附加-获取多台服务器日志" aria-hidden="true">#</a> 四、附加：获取多台服务器日志</h2>`,7),ss=n("code",null,"filebeat",-1),as=t(`<h3 id="_1、创建filebeat目录及配置文件" tabindex="-1"><a class="header-anchor" href="#_1、创建filebeat目录及配置文件" aria-hidden="true">#</a> 1、创建filebeat目录及配置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建filebeat目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/ELK/filebeat/<span class="token punctuation">{</span>config,data,logs<span class="token punctuation">}</span>

<span class="token comment"># 进入filebeat/config目录</span>
<span class="token builtin class-name">cd</span> /data/ELK/filebeat/config

<span class="token comment"># 创建filebeat配置文件</span>
<span class="token function">touch</span> filebeat.yml

<span class="token comment"># 去除filebeat组和其他用户的写入权限。</span>
<span class="token function">chmod</span> go-w /data/ELK/filebeat/config/filebeat.yml

<span class="token comment"># 编辑filebeat配置文件</span>
<span class="token function">vi</span> filebeat.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#=========================== Filebeat inputs =============================</span>

<span class="token key atrule">filebeat.inputs</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> log
  <span class="token comment"># Change to true to enable this input configuration.</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  
  <span class="token comment"># Paths that should be crawled and fetched. Glob based paths.</span>
  <span class="token key atrule">paths</span><span class="token punctuation">:</span>  <span class="token comment">#可以配置多个日志路径</span>
    <span class="token comment"># 如果是docker部署，这里就是docker容器内的路径，而且需要和宿主机的路径进行映射</span>
    <span class="token punctuation">-</span> /usr/share/filebeat/logs/<span class="token important">*.log</span>
    <span class="token comment">#- /usr/share/filebeat/logs/info.log	</span>
  <span class="token comment">#指定自定义字段	</span>
  <span class="token key atrule">fields</span><span class="token punctuation">:</span>							
       <span class="token key atrule">project</span><span class="token punctuation">:</span> <span class="token string">&quot;fire&quot;</span>  <span class="token comment">#字段1	</span>
       <span class="token comment">#hostName: &quot;172.16.11.213&quot;	  #字段2</span>
  
  <span class="token key atrule">multiline</span><span class="token punctuation">:</span>
    <span class="token comment">#多行匹配规则</span>
    <span class="token key atrule">pattern</span><span class="token punctuation">:</span> <span class="token string">&#39;^[[:space:]]+(at|\\.{3})\\b&amp;^Caused by:&#39;</span>
    <span class="token comment">#将不匹配的规则的行合并在一起</span>
    <span class="token key atrule">negate</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token comment">#合并到匹配规则的上一行末尾</span>
    <span class="token key atrule">match</span><span class="token punctuation">:</span> after


<span class="token comment">#================================ Outputs =====================================</span>

<span class="token comment">#----------------------------- Logstash output --------------------------------</span>
<span class="token key atrule">output.logstash</span><span class="token punctuation">:</span>
  <span class="token comment"># The Logstash hosts</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;172.16.11.213:5044&quot;</span><span class="token punctuation">]</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、上传并导入-filebeat-镜像" tabindex="-1"><a class="header-anchor" href="#_2、上传并导入-filebeat-镜像" aria-hidden="true">#</a> 2、上传并导入 filebeat 镜像</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">docker</span> load <span class="token parameter variable">-i</span> filebeat.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3、使用docker-compose启动filebeat服务" tabindex="-1"><a class="header-anchor" href="#_3、使用docker-compose启动filebeat服务" aria-hidden="true">#</a> 3、使用docker-compose启动filebeat服务</h3><p>①、先创建docker-compose目录用来管理 filebeat 服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建docker-compose目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/ELK/docker-compose

<span class="token comment"># 进入docker-compose目录</span>
<span class="token builtin class-name">cd</span> /data/ELK/docker-compose

<span class="token comment"># 创建docker-compose的yml配置文件</span>
<span class="token function">touch</span> docker-compose.yml

<span class="token comment">#编辑docker-compose配置</span>
<span class="token function">vi</span> docker-compose.yml

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">filebeat</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> elastic/filebeat<span class="token punctuation">:</span>8.12.2
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> filebeat
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> filebeat
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">user</span><span class="token punctuation">:</span> root
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token comment"># 日志文件夹映射到容器中[作为数据源]，可以切换为自己服务的日志路径；</span>
      <span class="token punctuation">-</span> /data/ELK/filebeat/logs/<span class="token punctuation">:</span>/usr/share/filebeat/logs/
      <span class="token comment"># 采集日志配置映射配置文件到容器中</span>
      <span class="token punctuation">-</span> /data/ELK/filebeat/config/filebeat.yml<span class="token punctuation">:</span>/usr/share/filebeat/filebeat.yml<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> /etc/localtime<span class="token punctuation">:</span>/etc/localtime
    <span class="token comment"># 使用主机网络模式</span>
    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> host
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>如果不想用docker-compose，就要用docker的话也可以，把他转换成docker命令就行；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> filebeat <span class="token parameter variable">--hostname</span><span class="token operator">=</span>filebeat <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--network</span><span class="token operator">=</span>host <span class="token parameter variable">-v</span> /data/ELK/filebeat/logs/:/usr/share/filebeat/logs/ <span class="token parameter variable">-v</span> /data/ELK/filebeat/config/filebeat.yml:/usr/share/filebeat/filebeat.yml:ro <span class="token parameter variable">-v</span> /etc/localtime:/etc/localtime elastic/filebeat:8.12.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><p>②、启动 filebeat 服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入docker-compose.yml位置</span>
<span class="token builtin class-name">cd</span> /data/ELK/docker-compose/

<span class="token comment"># 启动（两种二选一）</span>
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span> 

<span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> /data/ELK/docker-compose/docker-compose.yml up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>③、查看 filebeat 服务状态</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191552730.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>State状态为：<code>UP</code>或者<code>running</code>就为运行状态。</p><hr><p>④、启动完看一下 filebeat 容器的日志，看看有没有报错</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> logs <span class="token parameter variable">-f</span> filebeat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4、登录-kibana-页面查看新节点的日志" tabindex="-1"><a class="header-anchor" href="#_4、登录-kibana-页面查看新节点的日志" aria-hidden="true">#</a> 4、登录 kibana 页面查看新节点的日志</h3>`,23),es=n("strong",null,"kibana",-1),ts=n("br",null,null,-1),ls={href:"http://172.16.11.213:5601",target:"_blank",rel:"noopener noreferrer"},is=t('<h2 id="五、附加-kibana-页面操作" tabindex="-1"><a class="header-anchor" href="#五、附加-kibana-页面操作" aria-hidden="true">#</a> 五、附加：kibana 页面操作</h2><h3 id="_1、查看日志属于哪个路径下及日志名" tabindex="-1"><a class="header-anchor" href="#_1、查看日志属于哪个路径下及日志名" aria-hidden="true">#</a> 1、查看日志属于哪个路径下及日志名</h3><p>如果要看这个日志是哪个路径的话，可以<code>Discover</code>中搜索<code>log.file.path</code></p><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191552363.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191552691.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2、仪表板" tabindex="-1"><a class="header-anchor" href="#_2、仪表板" aria-hidden="true">#</a> 2、仪表板</h3><p>仪表板可以在<code>Home</code>--&gt;<code>Dashboards</code>创建；</p><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191552380.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412191552439.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="六、相关文章" tabindex="-1"><a class="header-anchor" href="#六、相关文章" aria-hidden="true">#</a> 六、相关文章</h2>',10),cs=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"文章名称"),n("th",{style:{"text-align":"center"}},"文章链接")])],-1),os={style:{"text-align":"center"}},ds={href:"https://liucy.blog.csdn.net/article/details/139653744",target:"_blank",rel:"noopener noreferrer"},rs={style:{"text-align":"center"}},ps={href:"https://liucy.blog.csdn.net/article/details/139653744",target:"_blank",rel:"noopener noreferrer"},us={style:{"text-align":"center"}},ms={href:"https://liucy.blog.csdn.net/article/details/139761024",target:"_blank",rel:"noopener noreferrer"},bs={style:{"text-align":"center"}},vs={href:"https://liucy.blog.csdn.net/article/details/139761024",target:"_blank",rel:"noopener noreferrer"};function ks(hs,gs){const e=c("ExternalLinkIcon"),i=c("font"),o=c("center");return r(),p("div",null,[n("blockquote",null,[m,n("p",null,[s("  🏅"),n("a",b,[s("CSDN博客专家"),a(e)]),v,s("   🏅"),n("a",k,[s("云计算领域优质创作者"),a(e)]),h,s("   🏅"),n("a",g,[s("华为云开发者社区专家博主"),a(e)]),f,s("   🏅"),n("a",_,[s("阿里云开发者社区专家博主"),a(e)]),y,s(" 💊"),x,n("a",q,[s("运维交流社区"),a(e)]),s(" 欢迎大家的加入！"),L,s(" 🐋 希望大家多多支持，我们一起进步！😄"),w,s(" 🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗")])]),E,n("p",null,[s("而且拉镜像也慢，"),a(i,{coolor:"red"},{default:l(()=>[s("还需要配置docker镜像加速")]),_:1}),s("，所以，离线镜像还是比较好的，可以提前上传到服务器上；")]),n("ul",null,[n("li",null,[K,n("p",null,[n("s",null,[s("官网下载地址："),n("a",z,[s("https://www.elastic.co/cn/downloads/elasticsearch/"),a(e)])])])]),n("li",null,[S,n("p",null,[n("s",null,[s("官网下载地址："),n("a",j,[s("https://www.elastic.co/cn/downloads/logstash"),a(e)])])])]),n("li",null,[F,n("p",null,[n("s",null,[s("官网下载地址："),n("a",C,[s("https://www.elastic.co/cn/downloads/kibana/"),a(e)])])])]),n("li",null,[T,n("p",null,[n("s",null,[s("官网下载地址："),n("a",I,[s("https://www.elastic.co/guide/en/beats/filebeat/index.html"),a(e)])])])])]),P,N,n("table",null,[G,n("tbody",null,[n("tr",null,[n("td",O,[n("a",D,[s("ELFK docker镜像-7.1.0版本（elasticsearch、filebeat）"),a(e)])]),n("td",R,[n("a",X,[s("https://download.csdn.net/download/liu_chen_yang/89427498"),a(e)])])]),n("tr",null,[n("td",B,[n("a",A,[s("ELFK docker镜像-7.1.0版本（kibana、logstash）"),a(e)])]),n("td",U,[n("a",M,[s("https://download.csdn.net/download/liu_chen_yang/89427504"),a(e)])])]),n("tr",null,[n("td",V,[n("a",H,[s("ELFK docker镜像-8.12.2版本（elasticsearch、filebeat）"),a(e)])]),n("td",Z,[n("a",Y,[s("https://download.csdn.net/download/liu_chen_yang/89427462"),a(e)])])]),n("tr",null,[n("td",J,[n("a",Q,[s("ELFK docker镜像-8.12.2版本（kibana、logsatsh）"),a(e)])]),n("td",W,[n("a",$,[s("https://download.csdn.net/download/liu_chen_yang/89427463"),a(e)])])])])]),n("blockquote",null,[a(i,{color:"red"},{default:l(()=>[s("注： ELFK的四个镜像包的保持版本需一致。")]),_:1})]),nn,n("blockquote",null,[a(i,{color:"red",size:"4x"},{default:l(()=>[s("**注意：本文出现的 IP 和 容器外的路径 请根据自己的实际情况自定义**")]),_:1}),sn,an,a(i,{color:"red",size:"4x"},{default:l(()=>[s("**注意：本文出现的 IP 和 容器外的路径 请根据自己的实际情况自定义**")]),_:1}),en,tn,a(i,{color:"red",size:"4x"},{default:l(()=>[s("**注意：本文出现的 IP 和 容器外的路径 请根据自己的实际情况自定义**")]),_:1})]),ln,n("p",null,[s("参考部署文档："),n("a",cn,[s("linux（centos）中部署docker（步骤超全，含带一些发展史和一些概念）"),a(e)])]),on,n("p",null,[s("可以选择离线一键安装："),n("a",dn,[s("docker24.0.5离线安装包 （一键部署）"),a(e)])]),rn,n("p",null,[s("参考部署文档部署："),n("a",pn,[s("Linux中安装/部署docker-compose"),a(e)])]),un,n("p",null,[s("可以选择离线安装："),n("a",mn,[s("docker-compose1.29.2离线包"),a(e)])]),bn,vn,kn,n("blockquote",null,[n("p",null,[n("strong",null,[a(i,{color:"red",size:"4x"},{default:l(()=>[s("注意：本文出现的 IP 和 容器外的路径 请根据自己的实际情况自定义")]),_:1})]),hn,gn,a(i,{color:"red",size:"4x"},{default:l(()=>[fn]),_:1}),_n,yn,a(i,{color:"red",size:"4x"},{default:l(()=>[xn]),_:1})])]),qn,n("p",null,[s("提前导入好镜像在执行docker-compose时就不用在拉取了，而且网络不稳定也容易中断；"),Ln,s(" 如果docker默认路径没空间，可参考此文章修改docker存储路径："),n("a",wn,[s("【docker】导入镜像报错磁盘空间不足的解决方法 && 【docker】修改默认的存储路径"),a(e)])]),En,a(i,{color:"red"},{default:l(()=>[s("注意把 ip 换成自己的；")]),_:1}),n("ul",Kn,[n("li",zn,[Sn,n("label",jn,[s(" es地址："),n("a",Fn,[s("http://172.16.11.213:9200"),a(e)])])])]),Cn,n("ul",Tn,[n("li",In,[Pn,n("label",Nn,[s(" kibana地址："),n("a",Gn,[s("http://172.16.11.213:5601"),a(e)])])])]),On,Dn,Rn,n("p",null,[s("部署nginx可以参考："),n("a",Xn,[s("【Linux】nginx基础篇 -- 介绍及yum安装nginx"),a(e)]),s("、"),n("a",Bn,[s("【Linux】环境下部署Nginx服务 - 二进制部署方式"),a(e)])]),An,n("p",null,[s("页面访问kibana查看日志："),n("a",Un,[s("http://172.16.11.213:5601"),a(e)])]),Mn,Vn,Hn,Zn,Yn,a(o,null,{default:l(()=>[s("到此部署就完成，如果想要加一些安全性比如密码认证，可以接着看下面的内容；")]),_:1}),Jn,n("p",null,[s("页面访问："),n("a",Qn,[s("http://172.16.11.213:9200"),a(e)])]),Wn,n("p",null,[s("访问kibana页面："),n("a",$n,[s("http://172.16.11.213:5601"),a(e)])]),ns,n("p",null,[s("  要获取多台服务器日志，那么我们就需要在要获取日志的那台服务器上部署日志收集器，也就是我们的"),ss,s("服务；"),a(i,{color:"red"},{default:l(()=>[s("前提是，必须可以连接到、ping通部署ELFK的这台主服务器上。")]),_:1})]),as,n("p",null,[s("没有问题的话就可以产生一些日志，然后去"),es,s("页面查看日志；"),ts,n("a",ls,[s("http://172.16.11.213:5601"),a(e)])]),is,n("table",null,[cs,n("tbody",null,[n("tr",null,[n("td",os,[n("a",ds,[s("ELFK简介"),a(e)])]),n("td",rs,[n("a",ps,[s("https://liucy.blog.csdn.net/article/details/139653744"),a(e)])])]),n("tr",null,[n("td",us,[n("a",ms,[s("ELFK 8.12.2 单机部署 -- docker部署方式⚽"),a(e)])]),n("td",bs,[n("a",vs,[s("https://liucy.blog.csdn.net/article/details/139761024"),a(e)])])])])])])}const ys=d(u,[["render",ks],["__file","ELFK 8.12.2 部署 -- docker部署方式⚽.html.vue"]]);export{ys as default};
