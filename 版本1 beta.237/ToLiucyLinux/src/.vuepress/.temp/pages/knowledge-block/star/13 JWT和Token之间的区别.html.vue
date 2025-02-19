<template><div><h1 id="jwt和token之间的区别" tabindex="-1"><a class="header-anchor" href="#jwt和token之间的区别" aria-hidden="true">#</a> JWT和Token之间的区别</h1>
<p><a href="https://gaoziman.blog.csdn.net/article/details/132154578" target="_blank" rel="noopener noreferrer">在这篇文章中<ExternalLinkIcon/></a>，我们主要介绍了JWT的相关概念。</p>
<ol>
<li>什么是JWT</li>
<li>JWT由哪些部分组成</li>
<li>JSON Web Tokens是如何工作的</li>
<li>如何基于 JWT 进行身份验证</li>
<li>如何防止 JWT 被篡改的Z</li>
</ol>
<p>今天我们主要介绍一下JWT跟Token之间的区别和联系。</p>
<h2 id="_1-token" tabindex="-1"><a class="header-anchor" href="#_1-token" aria-hidden="true">#</a> 1.Token</h2>
<p><strong>Token</strong>是一个宽泛的术语，它可以指代任何一种用于身份验证的机制。<code v-pre>Token</code> 常常被用在验证和授权流程中。<code v-pre>Token</code> 可以有不同的形式和结构，如随机生成的字符串或者特定格式的编码数据。</p>
<h3 id="_1-1-特点和使用" tabindex="-1"><a class="header-anchor" href="#_1-1-特点和使用" aria-hidden="true">#</a> 1.1 特点和使用</h3>
<ol>
<li><strong>不固定格式</strong>：Token 可以是任何格式的数据字符串，不仅限于JWT。</li>
<li><strong>存储信息</strong>：Token 可能仅作为引用存储在服务器上，服务器通过该引用来获取存储的状态信息。</li>
<li><strong>会话管理</strong>：经统一的身份验证后，Token用来管理用户会话。</li>
<li><strong>传输方式灵活</strong>：可以通过HTTP headers、URL参数或请求体传输。</li>
</ol>
<h3 id="_1-2-token基本原理" tabindex="-1"><a class="header-anchor" href="#_1-2-token基本原理" aria-hidden="true">#</a> 1.2 Token基本原理</h3>
<p>Token <strong>(就是加密的字符串,使用MD5,等不可逆加密算法,一定要保证唯一性)</strong></p>
<p>客户端使用用户名跟密码请求登录</p>
<p>服务端收到请求，去验证用户名与密码</p>
<p>验证成功，服务端会签发一个Token保存到(Session,redis,mysql…)中，然后再把这个 Token 发送给客户端</p>
<p>客户端收到 Token 以后可以把它存储起来，比如放在 Cookie 里或者 Local Storage 里</p>
<p>客户端每次向服务端请求资源的时候需要带着服务端签发的 Token</p>
<p>服务端收到请求，验证密客户端请求里面带着的 Token和服务器中保存的Token进行对比效验, 如果验证成功，就向客户端返回请求</p>
<h3 id="_1-3-优点" tabindex="-1"><a class="header-anchor" href="#_1-3-优点" aria-hidden="true">#</a> 1.3 优点</h3>
<ol>
<li>可以隐藏真实数据，安全系数高</li>
<li>适用于分布式/微服务</li>
<li>Token支持手动控制，过期、吊销等</li>
<li>可以实时查询现有Token</li>
</ol>
<h3 id="_1-4-缺点" tabindex="-1"><a class="header-anchor" href="#_1-4-缺点" aria-hidden="true">#</a> 1.4 缺点</h3>
<ol>
<li>存放在数据库或者redis，依赖服务器资源</li>
<li>效率相对JWT比较低</li>
</ol>
<h2 id="_2-jwt" tabindex="-1"><a class="header-anchor" href="#_2-jwt" aria-hidden="true">#</a> 2.JWT</h2>
<h3 id="_2-1-jwt优势" tabindex="-1"><a class="header-anchor" href="#_2-1-jwt优势" aria-hidden="true">#</a> 2.1 JWT优势</h3>
<h4 id="_1-无状态" tabindex="-1"><a class="header-anchor" href="#_1-无状态" aria-hidden="true">#</a> 1.无状态</h4>
<p>JWT 自身包含了身份验证所需要的所有信息，因此，我们的服务器不需要存储 Session 信息。这显然增加了系统的可用性和伸缩性，大大减轻了服务端的压力。</p>
<p>不过，也正是由于 JWT 的无状态，也导致了它最大的缺点：<strong>不可控！</strong></p>
<p>就比如说，我们想要在 JWT 有效期内废弃一个 JWT 或者更改它的权限的话，并不会立即生效，通常需要等到有效期过后才可以。再比如说，当用户 Logout 的话，JWT 也还有效。除非，我们在后端增加额外的处理逻辑比如将失效的 JWT 存储起来，后端先验证 JWT 是否有效再进行处理。</p>
<h4 id="_2-有效的避免的csrf攻击" tabindex="-1"><a class="header-anchor" href="#_2-有效的避免的csrf攻击" aria-hidden="true">#</a> 2.有效的避免的CSRF攻击</h4>
<p><strong>CSRF（Cross Site Request Forgery）</strong> 一般被翻译为 <strong>跨站请求伪造</strong>，属于网络攻击领域范围。相比于 SQL 脚本注入、XSS 等安全攻击方式，CSRF 的知名度并没有它们高。但是，它的确是我们开发系统时必须要考虑的安全隐患。就连业内技术标杆 Google 的产品 Gmail 也曾在 2007 年的时候爆出过 CSRF 漏洞，这给 Gmail 的用户造成了很大的损失。</p>
<p>关于CSRF具体可以参考<a href="https://gaoziman.blog.csdn.net/article/details/132154045" target="_blank" rel="noopener noreferrer">我这篇文章<ExternalLinkIcon/></a></p>
<h3 id="_2-2-jwt基本原理" tabindex="-1"><a class="header-anchor" href="#_2-2-jwt基本原理" aria-hidden="true">#</a> 2.2 JWT基本原理</h3>
<p>JWT是<strong>JSON Web Token</strong>缩写。它将用户信息加密到token里，服务器不保存任何用户信息。服务器通过使用保存的密钥验证JWTToken的正确性，只要正确即通过验证。</p>
<p>JWT包含三个部分： Header头部，Payload负载和Signature签名。由三部分生成JwtToken，三部分之间用“.”号做分割。 校验也是JWT内部自己实现的 ,并且可以将你存储时候的信息从JwtToken中取出来无须查库</p>
<p>客户端使用用户名跟密码请求登录</p>
<p>服务端收到请求，去验证用户名与密码</p>
<p>验证成功，服务端会签发一个JwtToken,无须存储到服务器，直接再把这个JwtToken发送给客户端</p>
<p>客户端收到JwtToken以后可以把它存储起来，比如放在 Cookie里或者LocalStorage 里</p>
<p>客户端每次向服务端请求资源的时候需要带着服务端签发的JwtToken</p>
<p>服务端收到请求，验证密客户端请求里面带着的 JwtToken, 如果验证成功，就向客户端返回请求的数据</p>
<h3 id="_2-4-差异性" tabindex="-1"><a class="header-anchor" href="#_2-4-差异性" aria-hidden="true">#</a> 2.4 差异性</h3>
<ol>
<li><strong>标准与自定义</strong>：JWT 是一个开放标准（RFC 7519），明确定义了 Token 的结构和生成方式，而 Token 通常是自定义的，没有统一的结构标准。</li>
<li><strong>状态存储</strong>：JWT 是无状态的，被设计为自包含，携带所有用户信息，因此服务端无需保存状态。而传统 Token 可能需要服务端存储额外的会话信息。</li>
<li><strong>安全性</strong>：JWT 通过签名提供了额外的安全性。传统 Token 若无额外的安全措施，则可能容易受到中间人攻击等安全威胁。</li>
<li><strong>体积</strong>：JWT 通常比简单 Token 体积更大，因为它包含了更多的用户信息和必需的加密数据。</li>
</ol>
</div></template>


