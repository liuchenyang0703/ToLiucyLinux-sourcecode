import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as i,a as n,b as s,d as e,e as c}from"./app-6706a352.js";const r={},d=n("p",null,[s("👨‍🎓"),n("strong",null,"博主简介")],-1),p={href:"https://blog.csdn.net/liu_chen_yang?type=blog",target:"_blank",rel:"noopener noreferrer"},u=n("br",null,null,-1),h={href:"https://bbs.huaweicloud.com/community/myblog",target:"_blank",rel:"noopener noreferrer"},m=n("br",null,null,-1),v={href:"https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz",target:"_blank",rel:"noopener noreferrer"},b=n("br",null,null,-1),k=n("strong",null,"交流社区：",-1),_={href:"https://bbs.csdn.net/forums/lcy",target:"_blank",rel:"noopener noreferrer"},g=n("br",null,null,-1),f=n("br",null,null,-1),x=c(`<hr><h2 id="grep-q-简介" tabindex="-1"><a class="header-anchor" href="#grep-q-简介" aria-hidden="true">#</a> grep -q 简介</h2><blockquote><p>用于if逻辑判断 安静模式，不打印任何标准输出。如果有匹配的内容则立即返回状态值0。</p></blockquote><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token parameter variable">-q</span> 参数<span class="token punctuation">[</span>索要查找的内容<span class="token punctuation">]</span> 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h2><h3 id="实例1" tabindex="-1"><a class="header-anchor" href="#实例1" aria-hidden="true">#</a> 实例1</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cat a.txt            ## 测试数据</span>
d e j
s q u
z c b

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># grep &quot;s&quot; a.txt       ## 直接输出匹配结果</span>
s q u

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo $?              ## 输出0表示匹配成功</span>
<span class="token number">0</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># grep -q &quot;s&quot; a.txt    ## -q选项表示静默输出</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo $?              ## 输出0表示匹配成功</span>
<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例2" tabindex="-1"><a class="header-anchor" href="#实例2" aria-hidden="true">#</a> 实例2</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cat a.txt            ## 测试数据</span>
nihao 
nihaooo
hello

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># grep hello a.txt       ## 直接输出匹配结果</span>
hello

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo $?              ## 输出0表示匹配成功</span>
<span class="token number">0</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># grep -q hello a.txt    ## -q选项表示静默输出</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo $?              ## 输出0表示匹配成功</span>
<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#判断是否查找到hello文字，如果有则输出yes，没有则输出no;使用静默输出</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># if grep -q hello a.txt ; then echo yes;else echo no; fi </span>
<span class="token function">yes</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># if grep -q word a.txt; then echo yes; else echo no; fi</span>
no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://lcy-blog.oss-cn-beijing.aliyuncs.com/blog/202412171025290.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,12);function q(y,z){const a=o("ExternalLinkIcon");return l(),i("div",null,[n("blockquote",null,[d,n("p",null,[s("  🏅"),n("a",p,[s("云计算领域优质创作者"),e(a)]),u,s("   🏅"),n("a",h,[s("华为云开发者社区专家博主"),e(a)]),m,s("   🏅"),n("a",v,[s("阿里云开发者社区专家博主"),e(a)]),b,s(" 💊"),k,n("a",_,[s("运维交流社区"),e(a)]),s(" 欢迎大家的加入！"),g,s(" 🐋 希望大家多多支持，我们一起进步！😄"),f,s(" 🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗")])]),x])}const V=t(r,[["render",q],["__file","【Linux】grep -q用法详解.html.vue"]]);export{V as default};
