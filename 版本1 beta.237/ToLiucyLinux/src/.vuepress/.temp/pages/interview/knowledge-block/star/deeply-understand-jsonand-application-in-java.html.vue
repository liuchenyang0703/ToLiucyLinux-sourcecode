<template><div><h1 id="深入理解json及其在java中的应用" tabindex="-1"><a class="header-anchor" href="#深入理解json及其在java中的应用" aria-hidden="true">#</a> 深入理解JSON及其在Java中的应用</h1>
<h2 id="_1-什么是json" tabindex="-1"><a class="header-anchor" href="#_1-什么是json" aria-hidden="true">#</a> 1.什么是JSON</h2>
<p>在现代的Web开发中，JSON（JavaScript Object Notation）扮演了极其重要的角色。它是一种轻量级的数据交换格式，由于其易于阅读和编写，同时也易于机器解析和生成，因此广泛应用于网络数据交换和配置文件。</p>
<p>JSON: <code v-pre>J</code>ava<code v-pre>S</code>cript <code v-pre>O</code>bject <code v-pre>N</code>otation(JavaScript 对象表示法)</p>
<p>JSON 是存储和交换文本信息的语法，类似 XML。</p>
<p>JSON 比 XML更小、更快，更易解析。</p>
<p>我们来看一下到底什么是JSON数据：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"message"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"Leo"</span> <span class="token punctuation">,</span> <span class="token property">"address"</span><span class="token operator">:</span><span class="token string">"江苏省"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token punctuation">{</span> <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"Mary"</span> <span class="token punctuation">,</span> <span class="token property">"address"</span><span class="token operator">:</span><span class="token string">"湖北省"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token punctuation">{</span> <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"Jack"</span> <span class="token punctuation">,</span> <span class="token property">"address"</span><span class="token operator">:</span><span class="token string">"浙江省"</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>关于 JSON，最重要的是要理解**它是一种数据格式，不是一种编程语言。虽然具有相同的语法形式，但 JSON 并不从属于 JavaScript。**而且，并不是只有 JavaScript 才使用 JSON，毕竟 JSON 只是一种数据格式。很多编程语言都有针对 JSON 的解析器和序列化器。</li>
<li>JSON 是一个<strong>轻量级的数据格式</strong>，可以简化表示复杂数据结构的工作量。JSON 使用 JavaScript 语法的子集表示对象、数组、字符串、数值、布尔值和 null **。</li>
<li>即使 XML 也能表示同样复杂的数据结果，但JSON 没有那么烦琐，而且在 JavaScript 中使用更便利。ECMAScript 5 定义了一个原生的 JSON 对象; JSON对象包含两个方法: 用于解析 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.json.org%2Fjson-en.html" target="_blank" rel="noopener noreferrer">JavaScript Object Notation<ExternalLinkIcon/></a> (JSON) 的 <code v-pre>parse()</code> 方法，以及将<code v-pre>对象/值</code>转换为 JSON字符串的 <code v-pre>stringify()</code> 方法。</li>
</ul>
<h2 id="_2-json语法" tabindex="-1"><a class="header-anchor" href="#_2-json语法" aria-hidden="true">#</a> 2.JSON语法</h2>
<p>在了解到什么JSON之后，我们再来讲讲JSON的语法。</p>
<h2 id="_3-认识json分支" tabindex="-1"><a class="header-anchor" href="#_3-认识json分支" aria-hidden="true">#</a> 3.认识JSON分支</h2>
<h3 id="_3-1-json字符串" tabindex="-1"><a class="header-anchor" href="#_3-1-json字符串" aria-hidden="true">#</a> 3.1 JSON字符串</h3>
<p>前我一直有个困惑，分不清普通字符串，json字符串和json对象的区别。经过一番研究终于给弄明白了。比如在Java中。</p>
<p>JSON字符串是将JSON数据格式化为字符串的形式。这在数据传输时非常有用，因为J<strong>SON数据需要被序列化成字符串格式进行网络传输</strong>。例如，一个表示用户的JSON对象可能会被转换成这样的字符串：</p>
<p>字符串：这个很好解释，指使用“”双引号包括的字符。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token string">"{\"name\": \"Leo\", \"age\": 20, \"isStudent\": false}"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Json字符串：指的是符合Json格式要求的字符串。</p>
<h3 id="_3-2-json对象" tabindex="-1"><a class="header-anchor" href="#_3-2-json对象" aria-hidden="true">#</a> 3.2 JSON对象</h3>
<p>Json对象：指符合Json格式要求的Java对象</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token punctuation">{</span>
    <span class="token string">"name"</span><span class="token operator">:</span><span class="token string">"Leo"</span> <span class="token punctuation">,</span> 
    <span class="token string">"age"</span><span class="token operator">:</span><span class="token string">"20"</span><span class="token punctuation">,</span>
    <span class="token string">"isStudetn"</span><span class="token operator">:</span><span class="token boolean">false</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-json数组" tabindex="-1"><a class="header-anchor" href="#_3-3-json数组" aria-hidden="true">#</a> 3.3 JSON数组</h3>
<p><strong><code v-pre>JSON</code></strong> 数组其实就是包含了多个 <strong><code v-pre>JSON</code></strong> 对象的一个集合，数组是以 数组括号 [] 括起来的</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token property">"area"</span><span class="token operator">:</span> "浙江杭州
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"李师傅"</span><span class="token punctuation">,</span>
    <span class="token property">"age"</span><span class="token operator">:</span> <span class="token number">25</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> 
 <span class="token punctuation">{</span>
    <span class="token property">"area"</span><span class="token operator">:</span> "北京海淀
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"小李"</span><span class="token punctuation">,</span>
    <span class="token property">"age"</span><span class="token operator">:</span> <span class="token number">26</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>JSON</code></strong> 数组并一定是要相同的 <strong><code v-pre>JSON</code></strong> 对象的集合，也可以是不同的对象，不过我在开发过程中并没有这么使用过，感觉挺别扭的。因为如果将多个对象放进一个 <strong><code v-pre>JSONArray</code></strong> 中的话，下意识认为是相同类型的集合</p>
<p>下面 👇 这种类型也是正确的 <strong><code v-pre>JSON</code></strong> 数组格式</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token property">"area"</span><span class="token operator">:</span> <span class="token string">"湖北武汉"</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Leo"</span><span class="token punctuation">,</span>
    <span class="token property">"age"</span><span class="token operator">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token property">"address"</span><span class="token operator">:</span> <span class="token string">"湖北宜昌"</span><span class="token punctuation">,</span>
    <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"Jack@qq.com"</span><span class="token punctuation">,</span>
    <span class="token property">"phone"</span><span class="token operator">:</span> <span class="token number">198787891</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-jsonobject" tabindex="-1"><a class="header-anchor" href="#_4-jsonobject" aria-hidden="true">#</a> 4.JSONObject</h2>
<p><strong>JSONObject</strong>是一个在Java中表示JSON对象的类，通常是由像<code v-pre>org.json</code>, <code v-pre>Gson</code>, <code v-pre>Jackson</code>或其他处理JSON的库提供。以<code v-pre>org.json</code>库为例，<code v-pre>JSONObject</code>是一个封装了JSON数据的键值映射的类。这个类允许你创建新的JSON对象、从字符串解析JSON数据以及像操作普通Java对象一样访问或修改JSON对象中的数据。</p>
<p>简单来说**<code v-pre>JSONObject</code>** 是根据 <strong><code v-pre>JSON</code></strong> 形式在 <strong><code v-pre>Java</code></strong> 中存在的对象映射</p>
<h3 id="_4-1-功能特点" tabindex="-1"><a class="header-anchor" href="#_4-1-功能特点" aria-hidden="true">#</a> 4.1 功能特点</h3>
<p><code v-pre>JSONObject</code>提供了一系列方法以便与JSON数据进行交互。以下是一些常用方法：</p>
<ol>
<li><strong>创建JSON对象</strong>: 使用 new 来创建一个空的<code v-pre>JSONObject</code>，或者通过传递一个JSON字符串来构造一个已填充的<code v-pre>JSONObject</code>。</li>
<li><strong>添加键值对</strong>: 使用<code v-pre>put</code>方法可以添加键值对，如果键已经存在，将替换键对应的值。</li>
<li><strong>获取数据</strong>: 提供了<code v-pre>get</code>和<code v-pre>opt</code>系列方法来获取键对应的值。<code v-pre>get</code>方法在键不存在时会抛出异常，而<code v-pre>opt</code>方法在找不到键时会返回一个默认值（例如<code v-pre>null</code>）或指定的默认值。</li>
<li><strong>转换为字符串</strong>: <code v-pre>toString()</code>方法将<code v-pre>JSONObject</code>转换成JSON格式的字符串。</li>
<li><strong>检查键</strong>: <code v-pre>has</code>方法可以检查<code v-pre>JSONObject</code>是否包含特定的键。</li>
</ol>
<h3 id="_4-2-代码示例" tabindex="-1"><a class="header-anchor" href="#_4-2-代码示例" aria-hidden="true">#</a> 4.2 代码示例</h3>
<p>下面我们通过使用<code v-pre>org.json</code>库中<code v-pre>JSONObject</code>类的做一个简单示例</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : Leo
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2023-11-21 19:38
 * <span class="token keyword">@description</span> :
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JSONObjectDemo</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建一个JSONObject实例</span>
        <span class="token class-name">JSONObject</span> jsonObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSONObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 向这个对象添加键值对</span>
        jsonObj<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"Alice"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jsonObj<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jsonObj<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"hasPet"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 输出JSON对象的字符串表示</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"JSON Object: "</span> <span class="token operator">+</span> jsonObj<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 访问JSONObject中的值</span>
        <span class="token keyword">int</span> age <span class="token operator">=</span> jsonObj<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> jsonObj<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 输出获取的值</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Name: "</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Age: "</span> <span class="token operator">+</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 检查是否存在键</span>
        <span class="token keyword">boolean</span> hasAge <span class="token operator">=</span> jsonObj<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Has age key? "</span> <span class="token operator">+</span> hasAge<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 转换JSON对象为JSON字符串</span>
        <span class="token class-name">String</span> jsonString <span class="token operator">=</span> jsonObj<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"JSON String: "</span> <span class="token operator">+</span> jsonString<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-jsonarray" tabindex="-1"><a class="header-anchor" href="#_5-jsonarray" aria-hidden="true">#</a> 5.JSONArray</h2>
<p><code v-pre>JSONArray</code> 是Java中用于表示JSON数组的类，类似于<code v-pre>JSONObject</code>，它是用来处理JSON数据中的数组类型。JSON数组是一个有序的元素集合，每个元素可以是任意类型，如字符串、数字、JSON对象、其他数组等。这个类提供了一系列的方法来创建、解析和操作JSON数组。</p>
<h3 id="_5-1-特点" tabindex="-1"><a class="header-anchor" href="#_5-1-特点" aria-hidden="true">#</a> 5.1 特点</h3>
<ul>
<li><strong>有序集合</strong>: <code v-pre>JSONArray</code> 中的元素按照它们被添加的顺序排列。</li>
<li><strong>多种类型</strong>: 数组中可以包含不同类型的元素，包括其他的<code v-pre>JSONObject</code>或<code v-pre>JSONArray</code>。</li>
<li><strong>灵活性</strong>: 和<code v-pre>JSONObject</code>类似，提供了丰富的方法来操作数组。</li>
</ul>
<h3 id="_5-2-常用方法" tabindex="-1"><a class="header-anchor" href="#_5-2-常用方法" aria-hidden="true">#</a> 5.2 常用方法</h3>
<ul>
<li><strong>添加元素</strong>: 使用 <code v-pre>put</code> 方法来向数组中添加元素。</li>
<li><strong>提取元素</strong>: 可以通过索引来取数组中的元素，使用诸如 <code v-pre>getString(index)</code>, <code v-pre>getJSONObject(index)</code> 等方法。</li>
<li><strong>修改元素</strong>: 可以通过传递索引和新值到 <code v-pre>put</code> 方法来修改数组中的元素。</li>
<li><strong>数组长度</strong>: 使用 <code v-pre>length</code> 方法可以获取数组的长度。</li>
<li><strong>遍历数组</strong>: 对<code v-pre>JSONArray</code>进行遍历，通常使用<code v-pre>for</code>循环结合 <code v-pre>get</code> 方法访问每个元素。</li>
<li><strong>转换为字符串</strong>: <code v-pre>toString</code> 方法可以将整个数组转换成JSON格式的字符串。</li>
</ul>
<h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>json<span class="token punctuation">.</span></span><span class="token class-name">JSONArray</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>json<span class="token punctuation">.</span></span><span class="token class-name">JSONObject</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JSONArrayExample</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建(构造)一个JSONArray实例</span>
        <span class="token class-name">JSONArray</span> array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSONArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 向数组中添加元素</span>
        array<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"apple"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        array<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        array<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">JSONObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"key"</span><span class="token punctuation">,</span> <span class="token string">"value"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取数组长度</span>
        <span class="token keyword">int</span> length <span class="token operator">=</span> array<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 遍历JSONArray并输出每个元素</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>array<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 输出整个JSONArray</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>array<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们创建了一个<code v-pre>JSONArray</code>对象，并向其中添加了不同类型的元素。我们还遍历了数组并打印了每个元素，最后，我们将整个数组转换成了一个字符串。</p>
<h3 id="_5-3-应用场景" tabindex="-1"><a class="header-anchor" href="#_5-3-应用场景" aria-hidden="true">#</a> 5.3 应用场景</h3>
<p><code v-pre>JSONArray</code> 通常用于处理那些按顺序存放同类或不同类数据项的场景。在Web开发中，当我们从API接收到一个JSON数组，或者需要发送一个JSON数组时，<code v-pre>JSONArray</code>成为一个理想的工具。此外，当从JSON文件中读取数据，或者需要生成JSON格式的数据进行本地存储时，也经常会用到<code v-pre>JSONArray</code>。</p>
<h2 id="_6-fastjson的应用" tabindex="-1"><a class="header-anchor" href="#_6-fastjson的应用" aria-hidden="true">#</a> 6.FastJson的应用</h2>
<p>阿里官方给的定义是， <code v-pre>fastjson</code> 是阿里巴巴的开源JSON解析库，它可以解析 JSON 格式的字符串，支持将 Java Bean 序列化为 <strong>JSON字符串</strong>，也可以从 JSON字符串反序列化到 JavaBean。</p>
<h3 id="_6-1-fastjson的优点" tabindex="-1"><a class="header-anchor" href="#_6-1-fastjson的优点" aria-hidden="true">#</a> 6.1 FastJson的优点</h3>
<ul>
<li><strong>速度快</strong><br>
fastjson相对其他JSON库的特点是快，从2011年fastjson发布1.1.x版本之后，其性能从未被其他Java实现的JSON库超越。</li>
<li><strong>使用广泛</strong><br>
fastjson在阿里巴巴大规模使用，在数万台服务器上部署，fastjson在业界被广泛接受。在2012年被开源中国评选为最受欢迎的国产开源软件之一。</li>
<li><strong>测试完备</strong><br>
fastjson有非常多的testcase，在1.2.11版本中，testcase超过3321个。每次发布都会进行回归测试，保证质量稳定。</li>
<li><strong>使用简单</strong><br>
fastjson的 API 十分简洁。</li>
<li><strong>功能完备</strong><br>
支持泛型，支持流处理超大文本，支持枚举，支持序列化和反序列化扩展。</li>
</ul>
<h3 id="_6-2-在java中引用fastjson" tabindex="-1"><a class="header-anchor" href="#_6-2-在java中引用fastjson" aria-hidden="true">#</a> 6.2 在Java中引用FastJson</h3>
<p>要在Java项目中使用FastJson，首先需要将其库添加到项目的依赖中。如果你使用Maven来管理项目，可以在<code v-pre>pom.xml</code>文件中添加以下依赖：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>fastjson<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.0.24<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-示例代码" tabindex="-1"><a class="header-anchor" href="#_6-4-示例代码" aria-hidden="true">#</a> 6.4 示例代码</h3>
<p>首先我们需要先准备一个Person对象。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span></span><span class="token class-name">Leo</span><span class="token punctuation">.</span>exer<span class="token punctuation">.</span>json<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">AllArgsConstructor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">NoArgsConstructor</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> : Leo
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2023-11-21 19:52
 * <span class="token keyword">@description</span> :
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="将java对象转换为json字符串" tabindex="-1"><a class="header-anchor" href="#将java对象转换为json字符串" aria-hidden="true">#</a> 将Java对象转换为Json字符串</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"Leo"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 1.将对象转换为json字符串</span>
<span class="token class-name">String</span> jsonStr <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"jsonStr = "</span> <span class="token operator">+</span> jsonStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311211956395.png" alt="image-20231121195656342" tabindex="0" loading="lazy"><figcaption>image-20231121195656342</figcaption></figure>
<h4 id="将json字符串转换为jsonobject对象" tabindex="-1"><a class="header-anchor" href="#将json字符串转换为jsonobject对象" aria-hidden="true">#</a> 将Json字符串转换为JSONObject对象</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>//2.将json字符串转换为JSONObject对象
JSONObject jsonObject = JSON.parseObject(jsonStr);
System.out.println("jsonObject = " + jsonObject);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311212001628.png" alt="image-20231121200126582" tabindex="0" loading="lazy"><figcaption>image-20231121200126582</figcaption></figure>
<h4 id="将jsonobject转换为java对象" tabindex="-1"><a class="header-anchor" href="#将jsonobject转换为java对象" aria-hidden="true">#</a> 将JSONObject转换为Java对象</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Person</span> person2 <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJavaObject</span><span class="token punctuation">(</span>jsonObject<span class="token punctuation">,</span> <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"person2 = "</span> <span class="token operator">+</span> person2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311212004331.png" alt="image-20231121200440267" tabindex="0" loading="lazy"><figcaption>image-20231121200440267</figcaption></figure>
<h2 id="_7-json格式化网站" tabindex="-1"><a class="header-anchor" href="#_7-json格式化网站" aria-hidden="true">#</a> 7.JSON格式化网站</h2>
<p>这里推荐两个笔者比较常用的两个网站</p>
<ul>
<li><a href="https://www.bejson.com/?spm=a2c6h.12873639.article-detail.8.79d12248jPcd1L" target="_blank" rel="noopener noreferrer">在线校验JSON<ExternalLinkIcon/></a></li>
<li><a href="https://www.json.cn/?spm=a2c6h.12873639.article-detail.9.79d12248jPcd1L" target="_blank" rel="noopener noreferrer">JSON在线格式解析<ExternalLinkIcon/></a></li>
</ul>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311231351360.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>欢迎进入Leo哥交流群，一起共商Java大计，如若二维码失效，可添加Leo哥微信：Leocisyam，拉你入群。</p>
<figure><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311222215655.png" alt="image-20231122221500504" tabindex="0" loading="lazy"><figcaption>image-20231122221500504</figcaption></figure>
</div></template>


