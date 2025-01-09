<template><div><blockquote>
<p>👨‍🎓<strong>博主简介</strong></p>
<p>  🏅<a href="https://blog.csdn.net/liu_chen_yang?type=blog" target="_blank" rel="noopener noreferrer">云计算领域优质创作者<ExternalLinkIcon/></a><br>
  🏅<a href="https://bbs.huaweicloud.com/community/myblog" target="_blank" rel="noopener noreferrer">华为云开发者社区专家博主<ExternalLinkIcon/></a><br>
  🏅<a href="https://developer.aliyun.com/my?spm=a2c6h.13148508.setting.3.21fc4f0eCmz1v3#/article?_k=zooqoz" target="_blank" rel="noopener noreferrer">阿里云开发者社区专家博主<ExternalLinkIcon/></a><br>
💊<strong>交流社区：</strong><a href="https://bbs.csdn.net/forums/lcy" target="_blank" rel="noopener noreferrer">运维交流社区<ExternalLinkIcon/></a> 欢迎大家的加入！<br>
🐋 希望大家多多支持，我们一起进步！😄<br>
🎉如果文章对你有帮助的话，欢迎 点赞 👍🏻 评论 💬 收藏 ⭐️ 加关注+💗</p>
</blockquote>
<hr>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<h2 id="重定向统计列表" tabindex="-1"><a class="header-anchor" href="#重定向统计列表" aria-hidden="true">#</a> 重定向统计列表</h2>
<table>
	<tr>
		<th>类型</th> 
	    <th>命令</th>
	    <th>作用</th>
	</tr >
	<tr >
	    <td>标准输入重定向	</td>
	    <td>echo "123" &lt file	</td>
	    <td>将输入的数字展示到终端上。</td>
	</tr>
	<tr >
	    <td rowspan="2">标准输出重定向	</td>
	    <td>command > file	</td>
	    <td>以覆盖的方式，把 command 的正确输出结果输出到 file 文件中。</td>
	</tr>
	<tr>
	    <td>command >> file	</td>
	    <td>以追加的方式，把 command 的正确输出结果输出到 file 文件中。</td>
	</tr>
		<tr >
	    <td rowspan="2">标准错误输出重定向</td>
	    <td>command 2> file	</td>
	    <td>以覆盖的方式，把 command 的错误信息输出到 file 文件中。</td>
	</tr>
	<tr>
	    <td>command 2>> file</td>
	    <td>以追加的方式，把 command 的错误信息输出到 file 文件中。</td>
	</tr>
		<tr >
	    <td rowspan="4">正确输出和错误信息同时保存	</td>
	    <td>command > file 2>&1	</td>
	    <td>以覆盖的方式，把正确输出和错误信息同时保存到同一个文件（file）中。</td>
	</tr>
	<tr>
	    <td>command >> file 2>&1</td>
	    <td>以追加的方式，把正确输出和错误信息同时保存到同一个文件（file）中。</td>
	</tr>
		<tr>
	    <td>command >file1 2>file2	</td>
	    <td>以覆盖的方式，把正确的输出结果输出到 file1 文件中，把错误信息输出到 file2 文件中。</td>
	</tr>
		<tr>
	    <td>command >>file1 2>>file2</td>
	    <td>以追加的方式，把正确的输出结果输出到 file1 文件中，把错误信息输出到 file2 文件中。
</td>
	</tr>
</table>
</div></template>


