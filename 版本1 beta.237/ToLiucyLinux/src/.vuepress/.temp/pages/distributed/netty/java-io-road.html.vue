<template><div><h1 id="netty实战专栏-javaio演进之路" tabindex="-1"><a class="header-anchor" href="#netty实战专栏-javaio演进之路" aria-hidden="true">#</a> Netty实战专栏 | JavaIO演进之路</h1>
<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2>
<p>大家好，我是Leo哥🫣🫣🫣，上一篇博客我们主要了解了Java网络编程的相关内容，通过对网络编程的一些了解，有助于我们学习接下来的知识点。在此之前，这一篇我想讲讲关于Java整个IO的演变历程，Java到底是怎样一步一步从基础IO操作到最后的AIO演变。好了，话不多说让我们开始吧😎😎😎。</p>
<h2 id="_2-早期的javaio" tabindex="-1"><a class="header-anchor" href="#_2-早期的javaio" aria-hidden="true">#</a> 2.早期的JavaIO</h2>
<p>在Java早期版本中，主要使用<code v-pre>java.io</code>包来进行输入和输出操作。其中，最常用的类是<code v-pre>InputStream</code>和<code v-pre>OutputStream</code>。这些类提供了基本的字节流操作方法，如<code v-pre>read()</code>和<code v-pre>write()</code>，用于读取和写入字节数据。 虽然早期的Java IO已经非常实用，但它存在一些问题。</p>
<p>首先，它过于底层，需要开发者自己处理缓冲、字符编码等细节。其次，它是<strong>阻塞式IO</strong>，即在进行IO操作时，程序会被阻塞，直到操作完成。这种阻塞模型在某些情况下可能导致性能问题。</p>
<h2 id="_3-引入nio" tabindex="-1"><a class="header-anchor" href="#_3-引入nio" aria-hidden="true">#</a> 3.引入NIO</h2>
<p>为了解决早期Java IO的问题，Java 1.4版本引入了NIO（New IO）库，也就是<code v-pre>java.nio</code>包。NIO提供了更高级、更灵活的IO功能。 NIO的核心组件是<strong>通道（Channel）<strong>和</strong>缓冲区（Buffer）</strong>。通过使用通道，可以实现非阻塞式IO操作。缓冲区提供了更高效的数据读写方式。</p>
<p>此外，NIO还引入了选择器（Selector）来管理多个通道的IO事件。 相对于早期的Java IO，NIO具有许多优点。它支持异步IO操作，允许程序在等待IO操作完成时继续执行其他任务，提高了系统的并发性能。此外，NIO提供了更灵活的字符集编码支持，使得处理不同字符编码的数据更加方便。</p>
<p>然而，NIO的使用复杂度较高，需要开发者编写更多的代码来实现相同的功能。因此，在实际开发中，NIO的应用范围相对有限。</p>
<h2 id="_4-引入nio-2-java7" tabindex="-1"><a class="header-anchor" href="#_4-引入nio-2-java7" aria-hidden="true">#</a> 4.引入NIO.2(Java7)</h2>
<p>为了进一步改进Java IO的功能，Java 7引入了NIO.2，也就是<code v-pre>java.nio.file</code>包。NIO.2提供了更高级、更易用的文件和目录操作功能。 NIO.2引入了<strong>Path</strong>类，用于表示文件或目录的路径。它提供了一系列的方法来进行文件的创建、删除、复制、移动等操作。此外，NIO.2还引入了<strong>WatchService</strong>接口，用于监视文件系统的变化。</p>
<p>相比于早期的Java IO，NIO.2简化了文件和目录操作的代码编写，并提供了更多的功能和灵活性。它使得Java在文件和目录处理方面与操作系统更加接近。</p>
<h2 id="_5-引入流式api-java8" tabindex="-1"><a class="header-anchor" href="#_5-引入流式api-java8" aria-hidden="true">#</a> 5.引入流式API(Java8)</h2>
<p>为了进一步简化IO操作，并提供更流畅的代码编写体验，Java 8引入了流式API（Stream API）。流式API是基于函数式编程风格的API，可以通过链式调用来进行数据处理。 流式API主要用于处理集合、数组等数据源的数据。它提供了丰富的中间操作和终端操作，如过滤、映射、排序、归约等。通过使用流式API，开发者可以编写更简洁、可读性更高的代码。</p>
<p>流式API在某些情况下可以替代早期的Java IO和NIO操作，使得代码更加简洁和易读。同时，它也提供了并行处理的能力，可以充分利用多核处理器的性能优势。</p>
<p>在2023年作为一个合格的Java程序员，Java流式编程是必不可少的，它不仅能用来装13，主要是的是能让你的代码更加优雅可读。对于Java流式编程还不太了解的，<a href="https://blog.csdn.net/qq_58608526/article/details/134022971?spm=1001.2014.3001.5501" target="_blank" rel="noopener noreferrer">可以参考我这第一篇博客<ExternalLinkIcon/></a>。</p>
<h2 id="_6-i-o模型基本说明" tabindex="-1"><a class="header-anchor" href="#_6-i-o模型基本说明" aria-hidden="true">#</a> 6.I/O模型基本说明</h2>
<p>I/O模型：就是用什么样的通道或者说是通信模式和架构进行数据的传输和接收，很大程度上决定了程序通信的性能 , Java共支持3种网络编程的I/O模型：BlO. NIO. AlO</p>
<p>实际通信需求下，要根据不同的业务场景和性能需求决定选择不同的I/O模型</p>
<h2 id="_7-i-o模型" tabindex="-1"><a class="header-anchor" href="#_7-i-o模型" aria-hidden="true">#</a> 7.I/O模型</h2>
<h3 id="_7-1-java-bio" tabindex="-1"><a class="header-anchor" href="#_7-1-java-bio" aria-hidden="true">#</a> 7.1 Java BIO</h3>
<p><strong>同步阻塞</strong>（传统阻塞型），同步阻塞 IO 模型中，应用程序发起 read 调用后，会一直阻塞，直到内核把数据拷贝到用户空间。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202311031120891.png" alt="image-20231103112026730" tabindex="0" loading="lazy"><figcaption>image-20231103112026730</figcaption></figure>
<h3 id="_7-2-java-nio" tabindex="-1"><a class="header-anchor" href="#_7-2-java-nio" aria-hidden="true">#</a> 7.2 Java NIO</h3>
<p>Java NIO：<strong>同步非阻塞</strong>，同步非阻塞 IO 模型中，应用程序会一直发起 read 调用，等待数据从内核空间拷贝到用户空间的这段时间里，线程依然是阻塞的，直到在内核把数据拷贝到用户空间。</p>
<p>相比于同步阻塞 IO 模型，同步非阻塞 IO 模型确实有了很大改进。通过轮询操作，避免了一直阻塞。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/Leo100/202311031121433.png" alt="image-20231103112117328" tabindex="0" loading="lazy"><figcaption>image-20231103112117328</figcaption></figure>
<h3 id="_7-3-java-aio" tabindex="-1"><a class="header-anchor" href="#_7-3-java-aio" aria-hidden="true">#</a> 7.3 Java AIO</h3>
<p>java AIO(NIO.2)：<strong>异步非阻塞</strong>，服务器实现模式为一个有效请求一个线程，客户端的I/O请求都是由OS先完 成了再通知服务器应用去启动线程进行处理，一般适用于连接数较多且连接时间较长的应用</p>
<h2 id="_8-bio、nio、aio适用场景分析" tabindex="-1"><a class="header-anchor" href="#_8-bio、nio、aio适用场景分析" aria-hidden="true">#</a> 8.BIO、NIO、AIO适用场景分析</h2>
<ol>
<li><strong>BIO方式适用于连接数目比小且固定的架构，这种方式对服务器资源要求比较高，并发局限于应用中， jDK1.4以前的唯一选择，但程序简单易理解。</strong></li>
<li><strong>NIO方式适用于连接数目多且连接比较短（轻操作）的架构，比如聊天服务器，弹幕系统，服务器间通讯等。 编程比较复杂，jDK1 .4开始支持。</strong></li>
<li><strong>AIO方式使用于连接数目多且连接比较长（重操作）的架构，比如相册服务器，充分调用OS参与并发操作， 编程比较复杂，JDK7开始支持。</strong></li>
</ol>
<h2 id="_9-总结" tabindex="-1"><a class="header-anchor" href="#_9-总结" aria-hidden="true">#</a> 9.总结</h2>
<p>以上便是本文的全部内容，本人才疏学浅，文章有什么错误的地方，欢迎大佬们批评指正！我是<strong>Leo</strong>，一个在互联网行业的小白，立志成为更好的自己。</p>
<p>如果你想了解更多关于<strong>Leo</strong>，可以关注公众号-程序员Leo，后面文章会首先同步至公众号。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312031906036.png" alt="公众号封面" tabindex="0" loading="lazy"><figcaption>公众号封面</figcaption></figure>
</div></template>


