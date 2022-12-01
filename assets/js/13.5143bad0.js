(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{336:function(t,a,s){"use strict";s.r(a);var e=s(7),v=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"bitmaps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitmaps"}},[t._v("#")]),t._v(" Bitmaps")]),t._v(" "),a("p",[t._v("现代计算机用二进制（位） 作为信息的基础单位， 1个字节等于8位， 例如“abc”字符串是由3个字节组成， 但实际在计算机存储时将其用二进制表示， “abc”分别对应的ASCII码分别是97、 98、 99， 对应的二进制分别是01100001、 01100010和01100011，如下图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://file.qaomuu.com/blog/-Eqy_qbZm8xAZIJdKVg6ei_mmouTZvTf5MqvjKFuZ68.png",alt:"image"}})]),t._v(" "),a("p",[t._v("合理地使用操作位能够有效地提高内存使用率和开发效率。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Redis提供了Bitmaps这个“数据类型”可以实现对位的操作：\n")])])]),a("ol",[a("li",[t._v("Bitmaps本身不是一种数据类型， 实际上它就是字符串（key-value） ， 但是它可以对字符串的位进行操作。")]),t._v(" "),a("li",[t._v("Bitmaps单独提供了一套命令， 所以在Redis中使用Bitmaps和使用字符串的方法不太相同。 可以把Bitmaps想象成一个以'位'为单位的数组， 数组的每个单元只能存储0和1， 数组的下标在Bitmaps中叫做偏移量。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://file.qaomuu.com/blog/8JtVqSbBk6kgx_T93ZMKLYEG6Ijuk4HtjMw7okcr-LI.png",alt:"image"}})]),t._v(" "),a("h3",{attrs:{id:"命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[t._v("#")]),t._v(" 命令")]),t._v(" "),a("h4",{attrs:{id:"setbit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setbit"}},[t._v("#")]),t._v(" setbit")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("setbit <key> <offset> <value>")]),t._v(" ：设置Bitmaps中某个偏移量的值（0或1）\n"),a("ul",[a("li",[t._v("offset：偏移量从0开始")])])])]),t._v(" "),a("p",[t._v("实例：每个独立用户是否访问过网站存放在Bitmaps中， 将访问的用户记做1， 没有访问的用户记做0， 用偏移量作为用户的id。")]),t._v(" "),a("p",[t._v("设置键的第offset个位的值（从0算起），假设现在有20个用户，userid=1、6、11、15、19 的用户对网站进行了访问， 那么当前Bitmaps初始化结果如图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://file.qaomuu.com/blog/sPfDK-4tG3D3VFPgDhZqtrK_xMhfuRrSB4_MUx558lU.png",alt:"image"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://file.qaomuu.com/blog/X_oFxs-uhdlEhw4h5KktcKE222TlnwzoZFNKWOrD1rk.png",alt:"image"}})]),t._v(" "),a("p",[t._v("很多应用的用户id以一个指定数字（例如10000） 开头， 直接将用户id和Bitmaps的偏移量对应势必会造成一定的浪费， 通常的做法是每次做setbit操作时将用户id减去这个指定数字。")]),t._v(" "),a("blockquote",[a("p",[t._v("在第一次初始化Bitmaps时，假如偏移量非常大，整个初始化过程执行会比较慢，可能会造成Redis的阻塞。")])]),t._v(" "),a("h4",{attrs:{id:"getbit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getbit"}},[t._v("#")]),t._v(" getbit")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("getbit <key> <offset>")]),t._v(" ：获取Bitmaps中某个偏移量的值，获取键的第offset位的值（从0开始算）")])]),t._v(" "),a("p",[t._v("实例：获取id=8的用户是否访问过， 返回0说明没有访问过：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://file.qaomuu.com/blog/qJnKYraAUUNS7LhU-_zUSJzAzwm04NJ4WmaEeKzN3xk.png",alt:"image"}})]),t._v(" "),a("p",[t._v("因为100根本不存在，所以也是返回0")]),t._v(" "),a("h4",{attrs:{id:"bitcount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitcount"}},[t._v("#")]),t._v(" bitcount")]),t._v(" "),a("p",[t._v("统计"),a("strong",[t._v("字符串")]),t._v("被设置为1的bit数。一般情况下，给定的整个字符串都会被进行计数，通过指定额外的 start 或 end 参数，可以让计数只在特定的位上进行。")]),t._v(" "),a("p",[t._v("start 和 end 参数的设置，都可以使用负数值：比如 -1 表示最后一个位，而 -2 表示倒数第二个位，start、end 是指bit组的字节的下标数，二者皆包含。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("bitcount <key> [start end]")]),t._v(" ：统计字符串从start字节到end字节比特值为1的数量")])]),t._v(" "),a("p",[t._v("实例：计算访问的用户数量")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://file.qaomuu.com/blog/CQcQfgWRU8mAIcvf_vEdZRJdErKsTzpK9ambgnEBam4.png",alt:"image"}})]),t._v(" "),a("p",[t._v("start和end代表起始和结束字节数，下面操作计算用户id在第1个字节到第3个字节之间的独立访问用户数， 对应的用户id是11，15， 19。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://file.qaomuu.com/blog/BeWLtbXx7ZyIxCS5SUOQnIFBumpZgLXZ1b3yKUDOKAM.png",alt:"image"}})]),t._v(" "),a("p",[t._v("举例： K1 【01000001  01000000  00000000  00100001】，对应【0，1，2，3】")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("bitcount K1 1 2")]),t._v(" ： 统计下标1、2字节组中bit=1的个数，即01000000  00000000\n"),a("ul",[a("li",[a("code",[t._v("bitcount K1 1 2")]),t._v(" → 1")])])]),t._v(" "),a("li",[a("code",[t._v("bitcount K1 1 3")]),t._v(" ： 统计下标1、3字节组中bit=1的个数，即01000000  00000000  00100001\n"),a("ul",[a("li",[a("code",[t._v("bitcount K1 1 3")]),t._v(" → 3")])])]),t._v(" "),a("li",[a("code",[t._v("bitcount K1 0 -2")]),t._v("  ：统计下标0到下标倒数第2，字节组中bit=1的个数，即01000001  01000000   00000000\n"),a("ul",[a("li",[a("code",[t._v("bitcount K1 0 -2")]),t._v(" → 3")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("redis的setbit设置或清除的是bit位置，而bitcount计算的是byte位置")])]),t._v(" "),a("h4",{attrs:{id:"bitop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitop"}},[t._v("#")]),t._v(" bitop")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("bitop and(or/not/xor) <destkey> [key…]")]),t._v(" ：bitop是一个复合操作，它可以做多个Bitmaps的and（交集）、or（并集）、not（非）、xor（异或）操作并将结果保存在destkey中。")])]),t._v(" "),a("p",[t._v("实例：")]),t._v(" "),a("p",[t._v("11-04访问网站的userid=1,2,5,9。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("setbit user:1104 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nsetbit user:1104 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nsetbit user:1104 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nsetbit user:1104 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://file.qaomuu.com/blog/Uey4bSO_rYZZH9nT_hftQzEPkTJE7BFbGmO3oN6HQGA.png",alt:"image"}})]),t._v(" "),a("p",[t._v("11-03访问网站的userid=0,1,4,9。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("setbit user:1103 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nsetbit user:1103 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nsetbit user:1103 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nsetbit user:1103 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://file.qaomuu.com/blog/632qOPNvpTBuZ0L5Wc7n6oLK2OK7Apn4PoXjwYRmp78.png",alt:"image"}})]),t._v(" "),a("p",[t._v("计算出两天都访问过网站的用户数量：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("bitop and user:and:1104_03 user:1103 user:1104\n")])])]),a("p",[a("img",{attrs:{src:"https://file.qaomuu.com/blog/Tz-5_oLzvniPEbdCXKjt-OF7bqMEE0WqM_wecIpjvHo.png",alt:"image"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://file.qaomuu.com/blog/GX3srnc3pMGL07dnG1VhkkYE88y3S0lP-oputbaYRsg.png",alt:"image"}})]),t._v(" "),a("p",[t._v("计算出任意一天都访问过网站的用户数量（例如月活跃就是类似这种），可以使用or求并集：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("bitop or user:or:1104_03 user:1103 user:1104\n")])])]),a("p",[a("img",{attrs:{src:"https://file.qaomuu.com/blog/jbS0nkay5HehI6Ne2V4oSVdvljEjl51vIF6BmzfdHYc.png",alt:"image"}})]),t._v(" "),a("h3",{attrs:{id:"bitmaps与set对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitmaps与set对比"}},[t._v("#")]),t._v(" Bitmaps与set对比")]),t._v(" "),a("p",[t._v("假设网站有1亿用户，每天独立访问的用户有5千万，如果每天用集合类型和Bitmaps分别存储活跃用户可以得到表：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("数据类型")]),t._v(" "),a("th",[t._v("每个用户id占用空间")]),t._v(" "),a("th",[t._v("需要存储的用户量")]),t._v(" "),a("th",[t._v("全部内存量")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("集合类型")]),t._v(" "),a("td",[t._v("64位")]),t._v(" "),a("td",[t._v("50000000")]),t._v(" "),a("td",[t._v("64位*50000000 = 400MB")])]),t._v(" "),a("tr",[a("td",[t._v("Bitmaps")]),t._v(" "),a("td",[t._v("1位")]),t._v(" "),a("td",[t._v("100000000")]),t._v(" "),a("td",[t._v("1位*100000000 = 12.5MB")])])])]),t._v(" "),a("p",[t._v("很明显，这种情况下使用Bitmaps能节省很多的内存空间，尤其是随着时间推移节省的内存还是非常可观的：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("数据类型")]),t._v(" "),a("th",[t._v("一天")]),t._v(" "),a("th",[t._v("一个月")]),t._v(" "),a("th",[t._v("一年")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("集合类型")]),t._v(" "),a("td",[t._v("400MB")]),t._v(" "),a("td",[t._v("12GB")]),t._v(" "),a("td",[t._v("144GB")])]),t._v(" "),a("tr",[a("td",[t._v("Bitmaps")]),t._v(" "),a("td",[t._v("12.5MB")]),t._v(" "),a("td",[t._v("375MB")]),t._v(" "),a("td",[t._v("4.5GB")])])])]),t._v(" "),a("p",[t._v("但Bitmaps并不是万金油，假如该网站每天的独立访问用户很少，例如只有10万（大量的僵尸用户），那么两者的对比如下表所示， 很显然，使用Bitmaps就不太合适了，因为基本上大部分位都是0。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("数据类型")]),t._v(" "),a("th",[t._v("每个userid占用空间")]),t._v(" "),a("th",[t._v("需要存储的用户量")]),t._v(" "),a("th",[t._v("全部内存量")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("集合类型")]),t._v(" "),a("td",[t._v("64位")]),t._v(" "),a("td",[t._v("100000")]),t._v(" "),a("td",[t._v("64位*100000 = 800KB")])]),t._v(" "),a("tr",[a("td",[t._v("Bitmaps")]),t._v(" "),a("td",[t._v("1位")]),t._v(" "),a("td",[t._v("100000000")]),t._v(" "),a("td",[t._v("1位*100000000 = 12.5MB")])])])]),t._v(" "),a("h2",{attrs:{id:"hyperloglog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hyperloglog"}},[t._v("#")]),t._v(" HyperLogLog")]),t._v(" "),a("p",[t._v("在工作当中，经常会遇到与统计相关的功能需求，比如统计网站PV（PageView页面访问量），可以使用Redis的incr、incrby轻松实现。")]),t._v(" "),a("p",[t._v("但像UV（UniqueVisitor，独立访客）、独立IP数、搜索记录数等需要去重和计数的问题如何解决？这种求集合中不重复元素个数的问题称为基数问题。")]),t._v(" "),a("p",[t._v("解决基数问题有很多种方案：")]),t._v(" "),a("ol",[a("li",[t._v("数据存储在MySQL表中，使用distinct count计算不重复个数")]),t._v(" "),a("li",[t._v("使用Redis提供的hash、set、bitmaps等数据结构来处理")])]),t._v(" "),a("p",[t._v("以上的方案结果精确，但随着数据不断增加，导致占用空间越来越大，对于非常大的数据集是不切实际的。")]),t._v(" "),a("p",[t._v("能否能够降低一定的精度来平衡存储空间？Redis推出了HyperLogLog。")]),t._v(" "),a("p",[t._v("Redis HyperLogLog 是用来做基数统计的算法，HyperLogLog 的优点是，在输入元素的数量或者体积非常非常大时，计算基数所需的空间总是固定的、并且是很小的。")]),t._v(" "),a("p",[t._v("在 Redis 里面，每个 HyperLogLog 键只需要花费 12 KB 内存，就可以计算接近 2^64 个不同元素的基数。这和计算基数时，元素越多耗费内存就越多的集合形成鲜明对比。")]),t._v(" "),a("p",[t._v("但是，因为 HyperLogLog 只会根据输入元素来计算基数，而不会储存输入元素本身，所以 HyperLogLog 不能像集合那样，返回输入的各个元素。")]),t._v(" "),a("p"),t._v(" "),a("blockquote",[a("p",[t._v("什么是基数?")])]),t._v(" "),a("blockquote",[a("p",[t._v("比如数据集 {1, 3, 5, 7, 5, 7, 8} 那么这个数据集的基数集为 {1, 3, 5 ,7, 8}，基数(不重复元素)为5。 基数估计就是在误差可接受的范围内，快速计算基数。")])]),t._v(" "),a("h3",{attrs:{id:"命令-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令-2"}},[t._v("#")]),t._v(" 命令")]),t._v(" "),a("h4",{attrs:{id:"pfadd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pfadd"}},[t._v("#")]),t._v(" pfadd")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("pfadd <key> <element> [element ...]")]),t._v(" ：添加指定元素到 HyperLogLog 中")])]),t._v(" "),a("p",[t._v("实例：将所有元素添加到指定HyperLogLog数据结构中。如果执行命令后HLL估计的近似基数发生变化，则返回1，否则返回0。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://file.qaomuu.com/blog/Z2cCI6cG4HwlRbVX963QOcvQpv5gWjPW3D6QCS0E6x4.png",alt:"image"}})]),t._v(" "),a("h4",{attrs:{id:"pfcount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pfcount"}},[t._v("#")]),t._v(" pfcount")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("pfcount<key> [key ...]")]),t._v(" ：计算HLL的近似基数，可以计算多个HLL，比如用HLL存储每天的UV，计算一周的UV可以使用7天的UV合并计算即可。")])]),t._v(" "),a("p",[t._v("实例：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://file.qaomuu.com/blog/lpsjjH5Yv6udNsOer7GrKo6nWPC-6PLga-81j3KJmvE.png",alt:"image"}})]),t._v(" "),a("h4",{attrs:{id:"pfmerge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pfmerge"}},[t._v("#")]),t._v(" pfmerge")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("pfmerge <destkey> <sourcekey> [sourcekey ...]")]),t._v(" ：将一个或多个HLL合并后的结果存储在另一个HLL中，比如每月活跃用户可以使用每天的活跃用户来合并计算可得")])]),t._v(" "),a("p",[t._v("实例：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://file.qaomuu.com/blog/Ej8nrfbH0DCPZRAp2R7KB2BqNQ93aoPvPJ0uQq-2SR8.png",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"geospatial"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#geospatial"}},[t._v("#")]),t._v(" Geospatial")]),t._v(" "),a("p",[t._v("Redis 3.2中增加了对GEO类型的支持。GEO，Geographic，地理信息的缩写。该类型，就是元素的2维坐标，在地图上就是经纬度。redis基于该类型，提供了经纬度设置，查询，范围查询，距离查询，经纬度Hash等常见操作。")]),t._v(" "),a("h3",{attrs:{id:"命令-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令-3"}},[t._v("#")]),t._v(" 命令")]),t._v(" "),a("h4",{attrs:{id:"geoadd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#geoadd"}},[t._v("#")]),t._v(" geoadd")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("geoadd <key> <longitude> <latitude> <member> [longitude latitude member...]")]),t._v(" ： 添加地理位置（经度，纬度，名称）")])]),t._v(" "),a("p",[t._v("两极无法直接添加，一般会下载城市数据，直接通过 Java 程序一次性导入。")]),t._v(" "),a("p",[t._v("有效的经度从 -180 度到 180 度。有效的纬度从 -85.05112878 度到 85.05112878 度。")]),t._v(" "),a("p",[t._v("当坐标位置超出指定范围时，该命令将会返回一个错误。")]),t._v(" "),a("p",[t._v("已经添加的数据，是无法再次往里面添加的。")]),t._v(" "),a("p",[t._v("实例：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("geoadd china:city "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("121.47")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31.23")]),t._v(" shanghai\ngeoadd china:city "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("106.50")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("29.53")]),t._v(" chongqing "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("114.05")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22.52")]),t._v(" shenzhen "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("116.38")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("39.90")]),t._v(" beijing\n")])])]),a("p",[a("img",{attrs:{src:"https://file.qaomuu.com/blog/kjXxInfxDQUMUtl8G7vjqAsSPsgsxWK4wlhdt1HCNQQ.png",alt:"image"}})]),t._v(" "),a("h4",{attrs:{id:"geopos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#geopos"}},[t._v("#")]),t._v(" geopos")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("geopos <key> <member> [member...]")]),t._v(" ：获得指定地区的坐标值")])]),t._v(" "),a("p",[t._v("实例：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://file.qaomuu.com/blog/i4B0tjuXsYBAGtuxpgfcf9FhtsZo_neIUReIkGlEAaw.png",alt:"image"}})]),t._v(" "),a("h4",{attrs:{id:"geodist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#geodist"}},[t._v("#")]),t._v(" geodist")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("geodist <key> <member1> <member2> [m|km|ft|mi ]")]),t._v(" ：获取两个位置之间的直线距离")])]),t._v(" "),a("p",[t._v("单位：")]),t._v(" "),a("ul",[a("li",[t._v("m 表示单位为米[默认值]。")]),t._v(" "),a("li",[t._v("km 表示单位为千米。")]),t._v(" "),a("li",[t._v("mi 表示单位为英里。")]),t._v(" "),a("li",[t._v("ft 表示单位为英尺。")])]),t._v(" "),a("p",[t._v("如果用户没有显式地指定单位参数， 那么 GEODIST 默认使用米作为单位")]),t._v(" "),a("p",[t._v("实例：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://file.qaomuu.com/blog/HJ5WbVQGhtbO4goq--mUeXmyXjALzxra-XoGd1NIVB8.png",alt:"image"}})]),t._v(" "),a("h4",{attrs:{id:"georadius"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#georadius"}},[t._v("#")]),t._v(" georadius")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("georadius <key> < longitude> <latitude> radius m|km|ft|mi")]),t._v(" ：以给定的经纬度为中心，找出某一半径内的元素\n"),a("ul",[a("li",[t._v("经度 纬度 距离 单位")])])])]),t._v(" "),a("p",[t._v("实例：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://file.qaomuu.com/blog/UdwHpXeFHciE-QfBF7PQueeFcGdUVM7Fzz31LC1Mrr4.png",alt:"image"}})])])}),[],!1,null,null,null);a.default=v.exports}}]);