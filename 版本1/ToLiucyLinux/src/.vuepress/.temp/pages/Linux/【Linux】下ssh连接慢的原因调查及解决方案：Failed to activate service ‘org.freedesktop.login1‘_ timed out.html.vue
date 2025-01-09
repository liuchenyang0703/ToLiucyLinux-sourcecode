<template><div><blockquote>
<p>🍁<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！</p>
</blockquote>
<blockquote>
<p>最近有一台线上的服务器，发现使用<code v-pre>xshell</code>等工具进行连接的时候特别慢，大概输入密码后要20秒左右才能连上，有的甚至使用<code v-pre>finalshell</code>工具连接会直接报错<code v-pre>channel is not opened.</code>，以下记录一下排查过程及解决方法；</p>
</blockquote>
<ul>
<li>网上查询的一些说法</li>
</ul>
<blockquote>
<p>通过网上的一些查询，发现大都是因为设置dns，hosts或者通过<code v-pre>/etc/ssh/sshd_config</code>关闭<code v-pre>UseDNS=no</code> 和 <code v-pre>GSSAPIAuthentication no</code>的方式来解决，但我的问题和这些不同，首先我是通过ip连接的，不存在dns域名解析的问题，并且sshd_config文件中的这些设置项也都是no，因此自己通过调查，发现是以下原因引起的：</p>
</blockquote>
<h2 id="排查思路-四种方法选一种即可" tabindex="-1"><a class="header-anchor" href="#排查思路-四种方法选一种即可" aria-hidden="true">#</a> 排查思路（四种方法选一种即可）</h2>
<h3 id="使用ssh-v-root-ip-来查看具体的连接过程" tabindex="-1"><a class="header-anchor" href="#使用ssh-v-root-ip-来查看具体的连接过程" aria-hidden="true">#</a> 使用	ssh -V root@ip 来查看具体的连接过程</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-V</span> root@ip

<span class="token comment">#指定端口查看连接过程</span>
<span class="token function">ssh</span> <span class="token parameter variable">-V</span> root@ip <span class="token parameter variable">-p</span> port
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>OpenSSH_6.9p1, LibreSSL <span class="token number">2.1</span>.8
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: /etc/ssh/ssh_config line <span class="token number">21</span>: Applying options <span class="token keyword">for</span> *
debug1: Connecting to x.x.x.x <span class="token punctuation">[</span>x.x.x.x<span class="token punctuation">]</span> port xx.
debug1: Connection established.
debug1: identity <span class="token function">file</span> /Users/yyq/.ssh/id_rsa <span class="token builtin class-name">type</span> <span class="token number">1</span>
debug1: key_load_public: No such <span class="token function">file</span> or directory
debug1: identity <span class="token function">file</span> /Users/yyq/.ssh/id_rsa-cert <span class="token builtin class-name">type</span> <span class="token parameter variable">-1</span>
debug1: identity <span class="token function">file</span> /Users/yyq/.ssh/id_dsa <span class="token builtin class-name">type</span> <span class="token number">2</span>
debug1: key_load_public: No such <span class="token function">file</span> or directory
debug1: identity <span class="token function">file</span> /Users/yyq/.ssh/id_dsa-cert <span class="token builtin class-name">type</span> <span class="token parameter variable">-1</span>
debug1: key_load_public: No such <span class="token function">file</span> or directory
debug1: identity <span class="token function">file</span> /Users/yyq/.ssh/id_ecdsa <span class="token builtin class-name">type</span> <span class="token parameter variable">-1</span>
debug1: key_load_public: No such <span class="token function">file</span> or directory
debug1: identity <span class="token function">file</span> /Users/yyq/.ssh/id_ecdsa-cert <span class="token builtin class-name">type</span> <span class="token parameter variable">-1</span>
debug1: key_load_public: No such <span class="token function">file</span> or directory
debug1: identity <span class="token function">file</span> /Users/yyq/.ssh/id_ed25519 <span class="token builtin class-name">type</span> <span class="token parameter variable">-1</span>
debug1: key_load_public: No such <span class="token function">file</span> or directory
debug1: identity <span class="token function">file</span> /Users/yyq/.ssh/id_ed25519-cert <span class="token builtin class-name">type</span> <span class="token parameter variable">-1</span>
debug1: Enabling compatibility mode <span class="token keyword">for</span> protocol <span class="token number">2.0</span>
debug1: Local version string SSH-2.0-OpenSSH_6.9
debug1: Remote protocol version <span class="token number">2.0</span>, remote software version OpenSSH_7.2p2 Ubuntu-4ubuntu2.1
debug1: match: OpenSSH_7.2p2 Ubuntu-4ubuntu2.1 pat OpenSSH* compat 0x04000000
debug1: Authenticating to x.x.x.x:xx as <span class="token string">'root'</span>
debug1: SSH2_MSG_KEXINIT sent
debug1: SSH2_MSG_KEXINIT received
debug1: kex: server-<span class="token operator">></span>client chacha20-poly1305@openssh.com <span class="token operator">&lt;</span>implicit<span class="token operator">></span> none
debug1: kex: client-<span class="token operator">></span>server chacha20-poly1305@openssh.com <span class="token operator">&lt;</span>implicit<span class="token operator">></span> none
debug1: expecting SSH2_MSG_KEX_ECDH_REPLY
debug1: Server <span class="token function">host</span> key: ecdsa-sha2-nistp256 SHA256:HictrRpAs7Yv495dDLNqHsFCNKXVACpX9FWUnNVenZU
debug1: Host <span class="token string">'[x.x.x.x]:xx'</span> is known and matches the ECDSA <span class="token function">host</span> key.
debug1: Found key <span class="token keyword">in</span> /Users/yyq/.ssh/known_hosts:38
debug1: SSH2_MSG_NEWKEYS sent
debug1: expecting SSH2_MSG_NEWKEYS
debug1: SSH2_MSG_NEWKEYS received
debug1: SSH2_MSG_SERVICE_REQUEST sent
debug1: SSH2_MSG_SERVICE_ACCEPT received
debug1: Authentications that can continue: publickey,password
debug1: Next authentication method: publickey
debug1: Offering RSA public key: /Users/yyq/.ssh/id_rsa
debug1: Authentications that can continue: publickey,password
debug1: Offering DSA public key: /Users/yyq/.ssh/id_dsa
debug1: Authentications that can continue: publickey,password
debug1: Trying private key: /Users/yyq/.ssh/id_ecdsa
debug1: Trying private key: /Users/yyq/.ssh/id_ed25519
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正常来说是有这么多的，如果只有一行的话<code v-pre>OpenSSH_7.4p1, OpenSSL 1.0.2k-fips  26 Jan 2017 </code>，可以使用另一种方式查看ssh连接过程。</p>
<h3 id="查看ssh连接日志" tabindex="-1"><a class="header-anchor" href="#查看ssh连接日志" aria-hidden="true">#</a> 查看ssh连接日志</h3>
<blockquote>
<p>可以通过查看SSH连接的日志文件来了解SSH连接期间所执行的操作。SSH连接的日志文件通常位于<code v-pre>/var/log/auth.log（Ubuntu和Debian）</code>或<code v-pre>/var/log/secure（CentOS和Red Hat）</code>。</p>
</blockquote>
<p>可以使用以下命令来查看SSH连接的日志文件：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> /var/log/auth.log  <span class="token comment"># Ubuntu / Debian</span>
<span class="token function">sudo</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> /var/log/secure   <span class="token comment"># CentOS / Red Hat</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>这将显示实时的SSH连接日志。您可以查看每个连接的详细信息，例如连接时间、来源IP地址、用户名、认证方法等。如果您想查看连接期间执行的操作，可以查看日志文件中的命令历史记录或系统日志。</p>
</blockquote>
<ul>
<li>连接上之后执行命令，持续查看日志输出；再开一个窗口去观察连接都执行了什么</li>
</ul>
<p>去开一个新窗口连接，已连接的窗口查看日志</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@mail2 ~<span class="token punctuation">]</span><span class="token comment"># tail -f /var/log/secure</span>

Mar <span class="token number">29</span> <span class="token number">13</span>:25:35 mail2 sshd<span class="token punctuation">[</span><span class="token number">71370</span><span class="token punctuation">]</span>: Accepted password <span class="token keyword">for</span> root from <span class="token number">122.22</span>.22.1 port <span class="token number">53431</span> ssh2
Mar <span class="token number">29</span> <span class="token number">13</span>:25:44 mail2 useradd<span class="token punctuation">[</span><span class="token number">71439</span><span class="token punctuation">]</span>: new user: <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token number">333223442</span>, <span class="token assign-left variable"><span class="token environment constant">UID</span></span><span class="token operator">=</span><span class="token number">22123</span>, <span class="token assign-left variable">GID</span><span class="token operator">=</span><span class="token number">1004</span>, <span class="token assign-left variable">home</span><span class="token operator">=</span>/home/333223442, <span class="token assign-left variable">shell</span><span class="token operator">=</span>/sbin/nologin
Mar <span class="token number">29</span> <span class="token number">13</span>:25:44 mail2 passwd: pam_unix<span class="token punctuation">(</span>passwd:chauthtok<span class="token punctuation">)</span>: password changed <span class="token keyword">for</span> <span class="token number">333223442</span>
Mar <span class="token number">29</span> <span class="token number">13</span>:26:00 mail2 sshd<span class="token punctuation">[</span><span class="token number">71370</span><span class="token punctuation">]</span>: pam_systemd<span class="token punctuation">(</span>sshd:session<span class="token punctuation">)</span>: Failed to create session: Connection timed out
Mar <span class="token number">29</span> <span class="token number">13</span>:26:00 mail2 sshd<span class="token punctuation">[</span><span class="token number">71370</span><span class="token punctuation">]</span>: pam_unix<span class="token punctuation">(</span>sshd:session<span class="token punctuation">)</span>: session opened <span class="token keyword">for</span> user root by <span class="token punctuation">(</span>uid<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
Mar <span class="token number">29</span> <span class="token number">13</span>:26:00 mail2 sudo: pam_systemd<span class="token punctuation">(</span>sudo:session<span class="token punctuation">)</span>: Failed to create session: Failed to activate <span class="token function">service</span> <span class="token string">'org.freedesktop.login1'</span><span class="token builtin class-name">:</span> timed out
Mar <span class="token number">29</span> <span class="token number">13</span>:26:00 mail2 sudo: pam_unix<span class="token punctuation">(</span>sudo:session<span class="token punctuation">)</span>: session opened <span class="token keyword">for</span> user root by <span class="token punctuation">(</span>uid<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
Mar <span class="token number">29</span> <span class="token number">13</span>:26:00 mail2 sudo: pam_unix<span class="token punctuation">(</span>sudo:session<span class="token punctuation">)</span>: session closed <span class="token keyword">for</span> user root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从这可以明显的发现中间有<code v-pre>timed out</code>这个单词，这个就是报错信息，连接这个超时。<br>
报错信息：<code v-pre>pam_systemd(sudo:session): Failed to create session: Failed to activate service 'org.freedesktop.login1': timed out</code></p>
<h3 id="通过查看sshd状态查看" tabindex="-1"><a class="header-anchor" href="#通过查看sshd状态查看" aria-hidden="true">#</a> 通过查看sshd状态查看</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl status sshd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181614044.png" alt="" loading="lazy"><br>
正常来说有报错会在这里显示的，除非已经解决，就比如我已经解决了就看不到了。</p>
<h3 id="也可通过-journalctl-u-sshd-来查看日志报错" tabindex="-1"><a class="header-anchor" href="#也可通过-journalctl-u-sshd-来查看日志报错" aria-hidden="true">#</a> 也可通过 journalctl -u sshd 来查看日志报错</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>journalctl <span class="token parameter variable">-u</span> sshd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>翻到这几天连接不到的日期，来查看；</p>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181614100.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>同样也可以查看这个报错：<code v-pre>“pam_systemd(sudo:session): Failed to create session: Failed to activate service 'org.freedesktop.login1': timed out”</code></p>
<h2 id="总结问题" tabindex="-1"><a class="header-anchor" href="#总结问题" aria-hidden="true">#</a> 总结问题</h2>
<p>通过以上几种排查错误信息的方式来看，就发现了一个报错；<br>
报错信息：<code v-pre>pam_systemd(sudo:session): Failed to create session: Failed to activate service 'org.freedesktop.login1': timed out</code></p>
<h2 id="解决方式" tabindex="-1"><a class="header-anchor" href="#解决方式" aria-hidden="true">#</a> 解决方式</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Failed to create session: Failed to activate <span class="token function">service</span> <span class="token string">'org.freedesktop.login1'</span><span class="token builtin class-name">:</span> timed out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上报错的信息大致意思如下：</p>
<blockquote>
<p>dbus的服务重启后，<code v-pre>systemd-logind</code>服务没有重启导致，可以查看<code v-pre>systemctl status systemd-logind</code>的状态，解决方法就是重启该服务 <code v-pre>systemctl restart systemd-logind</code><br><br>
重启<code v-pre>systemd-logind</code>服务后，发现ssh可以秒连接了</p>
</blockquote>
<ul>
<li>总结：重启<code v-pre>systemd-logind</code>服务即可</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>systemctl restart systemd-logind
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="问题解决" tabindex="-1"><a class="header-anchor" href="#问题解决" aria-hidden="true">#</a> 问题解决</h2>
<figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412181614093.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


