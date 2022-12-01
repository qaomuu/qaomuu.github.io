(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{331:function(s,a,e){"use strict";e.r(a);var t=e(7),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"什么是redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是redis"}},[s._v("#")]),s._v(" 什么是Redis")]),s._v(" "),a("p",[s._v("Redis是用C语言开发的一个开源的高性能键值对（key-value）数据库，Redis通过提供多种键值数据类型来适应不同场景下的存储需求。")]),s._v(" "),a("p",[s._v("目前为止Redis支持的键值数据类型如下：")]),s._v(" "),a("ul",[a("li",[s._v("字符串类型 string")]),s._v(" "),a("li",[s._v("哈希类型 hash")]),s._v(" "),a("li",[s._v("列表类型 list")]),s._v(" "),a("li",[s._v("集合类型 set")]),s._v(" "),a("li",[s._v("有序集合类型 sortedset")])]),s._v(" "),a("p",[s._v("这些数据类型都支持push/pop、add/remove及取交集并集和差集及更丰富的操作，而且这些操作都是"),a("strong",[s._v("原子性")]),s._v("的，并支持各种不同方式的"),a("strong",[s._v("排序")]),s._v("。")]),s._v(" "),a("p",[s._v("Redis数据是缓存在内存中，会周期性的把更新的数据写入磁盘或者把修改操作写入追加的记录文件。并且在此基础上实现了master-slave(主从)同步。")]),s._v(" "),a("p",[s._v("Redis是单线程+多路IO复用技术")]),s._v(" "),a("blockquote",[a("p",[s._v("多路复用是指使用一个线程来检查多个文件描述符（Socket）的就绪状态，比如调用select和poll函数，传入多个文件描述符，如果有一个文件描述符就绪，则返回，否则阻塞直到超时。得到就绪状态后进行真正的操作可以在同一个线程里执行，也可以启动线程执行（比如使用线程池）。")])]),s._v(" "),a("h2",{attrs:{id:"redis的应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis的应用场景"}},[s._v("#")]),s._v(" Redis的应用场景")]),s._v(" "),a("ul",[a("li",[s._v("配合关系型数据库做高速缓存（数据查询、短连接、新闻内容、商品内容等等）")]),s._v(" "),a("li",[s._v("聊天室的在线好友列表")]),s._v(" "),a("li",[s._v("任务队列。（秒杀、抢购、12306等等）")]),s._v(" "),a("li",[s._v("应用排行榜")]),s._v(" "),a("li",[s._v("网站访问统计")]),s._v(" "),a("li",[s._v("数据过期处理（可以精确到毫秒）")]),s._v(" "),a("li",[s._v("分布式集群架构中的session分离")])]),s._v(" "),a("h2",{attrs:{id:"redis安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis安装"}},[s._v("#")]),s._v(" Redis安装")]),s._v(" "),a("ul",[a("li",[s._v("官网："),a("a",{attrs:{href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://redis.io"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("中文网："),a("a",{attrs:{href:"http://www.redis.net.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://www.redis.net.cn"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("这里安装"),a("code",[s._v("6.2.1 for Linux")]),s._v(" 版本")]),s._v(" "),a("p",[a("strong",[s._v("安装GCC")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" centos-release-scl scl-utils-build\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" devtoolset-8-toolchain\nscl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" devtoolset-8 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])])]),a("p",[a("strong",[s._v("测试")]),s._v("** "),a("strong",[a("strong",[s._v("gcc")])]),s._v("版本**")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("gcc "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("\n")])])]),a("p",[s._v("下载"),a("code",[s._v("redis-6.2.1.tar.gz")]),s._v("放"),a("code",[s._v("/opt")]),s._v("目录")]),s._v(" "),a("p",[s._v("解压，并进入文件夹")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zxvf")]),s._v(" redis-6.2.1.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" redis-6.2.1\n")])])]),a("p",[s._v("在redis-6.2.1目录下执行命令：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),a("p",[s._v("如果没有准备好C语言编译环境，"),a("code",[s._v("make")]),s._v("会报错："),a("code",[s._v("Jemalloc/jemalloc.h：没有那个文件")]),s._v(" ，这时执行"),a("code",[s._v("make distclean")]),s._v(" 命令后再执行"),a("code",[s._v("make")]),s._v(" 命令。")]),s._v(" "),a("p",[s._v("进入安装目录：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/bin\n")])])]),a("ul",[a("li",[a("code",[s._v("redis-benchmark")]),s._v("：性能测试工具")]),s._v(" "),a("li",[a("code",[s._v("redis-check-aof")]),s._v("：修复有问题的AOF文件")]),s._v(" "),a("li",[a("code",[s._v("redis-check-dump")]),s._v("：修复有问题的dump.rdb文件")]),s._v(" "),a("li",[a("code",[s._v("redis-sentinel")]),s._v("：Redis集群使用")]),s._v(" "),a("li",[a("code",[s._v("redis-server")]),s._v("：Redis服务器启动命令")]),s._v(" "),a("li",[a("code",[s._v("redis-cli")]),s._v("：客户端，操作入口")])]),s._v(" "),a("h2",{attrs:{id:"redis常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis常用命令"}},[s._v("#")]),s._v(" Redis常用命令")]),s._v(" "),a("h3",{attrs:{id:"前台启动-不推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前台启动-不推荐"}},[s._v("#")]),s._v(" 前台启动（不推荐）")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("redis-server\n")])])]),a("h3",{attrs:{id:"后台启动-推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后台启动-推荐"}},[s._v("#")]),s._v(" 后台启动（推荐）")]),s._v(" "),a("p",[s._v("备份"),a("code",[s._v("redis.conf")]),s._v("文件，拷贝一份到其他目录")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /home/data\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /home/data/redis\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /opt/redis-6.2.1/redis.conf /home/data/redis\n")])])]),a("p",[s._v("修改"),a("code",[s._v("redis.conf")]),s._v("(128行)文件将里面的"),a("code",[s._v("daemonize no")]),s._v("改成"),a("code",[s._v("yes")]),s._v("，让服务在后台启动。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://file.qaomuu.com/blog/NbZ5j2FaV2oObkFkd3ob8ywjx4ln45C2S2FH3PhVjRc.png",alt:"image"}})]),s._v(" "),a("p",[s._v("启动Redis：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("redis-server /home/data/redis/redis.conf\n")])])]),a("h3",{attrs:{id:"客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端"}},[s._v("#")]),s._v(" 客户端")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("redis-cli\n")])])]),a("p",[s._v("指定端口：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("redis-cli "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n")])])]),a("h3",{attrs:{id:"关闭redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭redis"}},[s._v("#")]),s._v(" 关闭Redis")]),s._v(" "),a("p",[s._v("单实例关闭：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("redis-cli "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("\n")])])]),a("p",[s._v("指定端口关闭：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("redis-cli "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("\n")])])]),a("p",[s._v("进入Redis后关闭：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://file.qaomuu.com/blog/IidmYUw7Tl0gf0ih5wQAxQ-NrqNXzIs4bfQQaKAx2fw.png",alt:"image"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);