<template><div><figure><img src="https://i-blog.csdnimg.cn/blog_migrate/649dc13908775068851162b903819d3c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>              <font size=5>总文章在：<a href="https://blog.csdn.net/liu_chen_yang/article/details/114872010?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">Linux常用命令<ExternalLinkIcon/></a><br>
<img src="https://i-blog.csdnimg.cn/blog_migrate/1a082e6156d0a6a495bc37f0a5f878f2.png" alt="" loading="lazy"></p>
<font color=red>r读	w写	x执行</font><br><blockquote>
<font color=blue>查看文件权限：</font></blockquote>
<p>rw-r--r--<br>
第一组用户权限<br>
第二组用户组权限<br>
第三组其他用户权限<br>
chmod	修改文件权限<br>
chmod [选项]	“u/g/o/a+/-/=rwx”文件（u代表第一组uid，g代表第二组gid，o代表第三组其他用户权限，a代表全部（a会给每一组加一个））<br>
r=4  w=2  x=1  -=0</p>
<blockquote>
<font color=blue>文件的归属：</font><p>属于哪个用户	属主<br>
属于哪个用户组	属组</p>
</blockquote>
<font color=red>语法：</font><blockquote>
<p>chown [选项]  用户：用户组  文件名<br>
-R	递归修改<br><br>
/dir1/ a.txt b.txt c.txt<br>
chown -R root:root /dir1</p>
</blockquote>
<blockquote>
<p>find ./ -maxdepth 1 -type f ! -name &quot;.*&quot; -exec chown xiaoming:xiaomimg<br>
{ } ;</p>
<font color=teal> 查找深度为1的名字、为.*结尾的文件再给他修改用户和用户组</font></blockquote>
<font color=red>权限掩码-->默认文件和目录的权限</font><blockquote>
<p>umask 022<br><br>
创建一个文件默认权限是644=666-022，目录时755=777-022</p>
</blockquote>
<font color=red>文件的ACL（访问控制列表）</font><blockquote>
<p>getfacl	获取文件的ACL<br>
setfacl	设置文件的ACL<br>
setfacl -m 用户:权限	文件名	设置用户权限<br>
-x	删除指定文件的ACL（setfacl -x 用户名 文件名）<br>
-b	清空文件的ACL（setfacl -b 文件名）</p>
</blockquote>
<p>默认情况，文件给定用户的ACL要考虑到ACL中的mask值</p>
<font color=red>特殊权限：</font><p>rws/s	rws/S	rwt/T<br>
4	2	1<br>
大小写取决于执行位是否有执行权限</p>
<font color=red>特殊属性：</font><blockquote>
<p>lsattr	查看特殊属性<br>
chattr	设置特殊属性<br>
i	不能修改不能追加<br>
a	只可以追加，不能修改	只有root用户可以设置</p>
</blockquote>
<font color=green>用法：</font><blockquote>
<p>chattr -i 文件名<br>
chattr +i 文件名</p>
</blockquote>
</div></template>


