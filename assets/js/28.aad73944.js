(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{351:function(a,t,s){"use strict";s.r(t);var e=s(7),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"搭建步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建步骤"}},[a._v("#")]),a._v(" 搭建步骤")]),a._v(" "),t("p",[a._v("创建三台虚拟机，可以使用克隆，并修改3台机器的主机名称。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/hostname\n")])])]),t("p",[a._v("主机名尽量不要带符号！！！我带了 报错了。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/OiGswXTWB-qn56Wximncm9xIiFcfVTS9rp_JEXzUE14.png",alt:"image"}})]),a._v(" "),t("p",[a._v("先知道本机的ip，使用"),t("code",[a._v("ifconfig")]),a._v(" 命令查看，配置各个节点的hosts文件，让各个节点都能互相识别对方，三台机器保持一致即可。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/hosts\n")])])]),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/1ZuvoAFMc9zDhR-_-Y0vmnhMIZdrWv93IhhGH1-yRYA.png",alt:"image"}})]),a._v(" "),t("p",[a._v("确保各个节点的 cookie 文件使用的是同一个值，在centos1上执行远程操作命令:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" /var/lib/rabbitmq/.erlang.cookie root@centos2:/var/lib/rabbitmq/.erlang.cookie\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" /var/lib/rabbitmq/.erlang.cookie root@centos3:/var/lib/rabbitmq/.erlang.cookie\n")])])]),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/e1qBq0tNZGxSCMlceMYftLAQGyLW_Ij-ZO-TP2CD1IE.png",alt:"image"}})]),a._v(" "),t("p",[a._v("启动 RabbitMQ 服务，顺带启动 Erlang 虚拟机和 RbbitMQ 应用服务(在三台节点上分别执行以下命令)")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("rabbitmq-server "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-detached")]),a._v("\n")])])]),t("p",[a._v("在节点 2 执行：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# (rabbitmqctl stop 会将Erlang 虚拟机关闭，rabbitmqctl stop_app 只关闭 RabbitMQ 服务)")]),a._v("\nrabbitmqctl stop_app\nrabbitmqctl reset\nrabbitmqctl join_cluster rabbit@centos1\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 只启动应用服务：")]),a._v("\nrabbitmqctl start_app\n")])])]),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/3N7pbpR_fLunPAkGQfYf2xagjAWCfnfiRan_OBDZab8.png",alt:"image"}})]),a._v(" "),t("p",[a._v("在节点 3 执行：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("rabbitmqctl stop_app\nrabbitmqctl reset\nrabbitmqctl join_cluster rabbit@centos2\nrabbitmqctl start_app\n")])])]),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/5k5kDSFPsoHs2PKqJlW5BMMRRWEm0qxsoL-h__WFI9Q.png",alt:"image"}})]),a._v(" "),t("p",[a._v("集群状态：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("rabbitmqctl cluster_status\n")])])]),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/c0vdaP29DLskWjco1DLgsMHAj07mj7OzHNXR9_YMGu0.png",alt:"image"}})]),a._v(" "),t("p",[a._v("需要重新设置用户，三台机器随便哪一台设置，因为是集群，通用的：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 创建账号")]),a._v("\nrabbitmqctl add_user admin "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("123")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置用户角色")]),a._v("\nrabbitmqctl set_user_tags admin administrator\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置用户权限")]),a._v("\nrabbitmqctl set_permissions "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/"')]),a._v(" admin "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('".*"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('".*"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('".*"')]),a._v("\n")])])]),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/NYJEJwmxnw_Cw__9qaaP0nkn_wQbI-Q9PviDMWd_wsY.png",alt:"image"}})]),a._v(" "),t("p",[a._v("解除集群节点(centos2 和centos3机器分别执行，不解除不要执行)")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("rabbitmqctl stop_app\nrabbitmqctl reset\nrabbitmqctl start_app\nrabbitmqctl cluster_status\nrabbitmqctl forget_cluster_node rabbit@node2 "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# (node1 机器上执行)")]),a._v("\n")])])]),t("h2",{attrs:{id:"镜像队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像队列"}},[a._v("#")]),a._v(" 镜像队列")]),a._v(" "),t("p",[a._v("如果 RabbitMQ 集群中只有一个 Broker 节点，那么该节点的失效将导致整体服务的临时性不可用，并且也可能会导致消息的丢失。可以将所有消息都设置为持久化，并且对应队列的durable属性也设置为true，但是这样仍然无法避免由于缓存导致的问题：因为消息在发送之后和被写入磁盘井执行刷盘动作之间存在一个短暂却会产生问题的时间窗。通过 publisherconfirm 机制能够确保客户端知道哪些消息己经存入磁盘，尽管如此，一般不希望遇到因单点故障导致的服务不可用。")]),a._v(" "),t("p",[a._v("引入镜像队列(Mirror Queue)的机制，可以将队列镜像到集群中的其他 Broker 节点之上，如果集群中的一个节点失效了，队列能自动地切换到镜像中的另一个节点上以保证服务的可用性。")]),a._v(" "),t("p",[t("strong",[a._v("搭建步骤")])]),a._v(" "),t("p",[a._v("启动三台集群节点，随便找一个节点添加 policy：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/T0P2dQKJxA0QJjrHf6qrrb9WsvT1Af7qK8_0Tw75EiY.png",alt:"image"}})]),a._v(" "),t("blockquote",[t("p",[a._v("Pattern根据自己的队列来配置")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/14A4oHX4pWxQn2-qlBar2jb7hI4i13Ja3t9wxrF_CAs.png",alt:"image"}})]),a._v(" "),t("p",[a._v("在centos1上创建一个队列发送一条消息，队列存在镜像队列，停掉centos1之后发现centos2成为镜像队列：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/ggQXLBE67P42XfmdWHNcYyS4YI28Ni_NsgZ2Wh_aZLs.png",alt:"image"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/_j9wwqZAUuTsMmWi1JXkrwk5iQiNkzOyjg-7tXHksoE.png",alt:"image"}})]),a._v(" "),t("p",[a._v("就算整个集群只剩下一台机器了，依然能消费队列里面的消息，说明队列里面的消息被镜像队列传递到相应机器里面了。")]),a._v(" "),t("blockquote",[t("p",[a._v("给centos1发消息，不处理消息，然后停掉centos1，这时centos2就可以消费消息")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/geA9-UFF_xnoXDyPdP5KGWwuSf2hBFOW67gfJnnhFys.png",alt:"image"}})]),a._v(" "),t("h2",{attrs:{id:"haproxy-keepalive实现高可用负载均衡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#haproxy-keepalive实现高可用负载均衡"}},[a._v("#")]),a._v(" Haproxy+Keepalive实现高可用负载均衡")]),a._v(" "),t("blockquote",[t("p",[a._v("文档里面含糊不清，直接复制的文档，后面接触到了再补")])]),a._v(" "),t("h3",{attrs:{id:"整体架构图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#整体架构图"}},[a._v("#")]),a._v(" 整体架构图")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/aSyXMlwBrb63PGKyIHbwqelEL2Juy7Bweh1srw3pLYc.png",alt:"image"}})]),a._v(" "),t("h3",{attrs:{id:"haproxy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#haproxy"}},[a._v("#")]),a._v(" HAProxy")]),a._v(" "),t("p",[a._v("HAProxy 提供高可用性、负载均衡及基于TCPHTTP 应用的代理，支持虚拟主机，它是免费、快速并且可靠的一种解决方案，包括 Twitter、Reddit、StackOverflow、GitHub 在内的多家知名互联网公司在使用。")]),a._v(" "),t("p",[a._v("HAProxy 实现了一种事件驱动、单一进程模型，此模型支持非常大的井发连接数。")]),a._v(" "),t("blockquote",[t("p",[a._v("nginx、lvs、haproxy之间的区别: "),t("a",{attrs:{href:"http://www.ha97.com/5646.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://www.ha97.com/5646.html"),t("OutboundLink")],1)])]),a._v(" "),t("p",[t("strong",[a._v("搭建步骤：")])]),a._v(" "),t("p",[a._v("下载 haproxy(在centos1和centos2)")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" haproxy\n")])])]),t("p",[a._v("修改centos1和centos2的haproxy.cfg")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/haproxy/haproxy.cfg\n")])])]),t("p",[a._v("需要修改红色 IP 为当前机器 IP")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/R3uPawBmUv_wa-FmZBdaUqqJrKz5w-4XF7khbE-X-70.png",alt:"image"}})]),a._v(" "),t("p",[a._v("在两台节点启动 haproxy")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("haproxy "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" /etc/haproxy/haproxy.cfg\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ef")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" haproxy\n")])])]),t("p",[a._v("访问地址")]),a._v(" "),t("p",[a._v("http://10.211.55.71:8888/stats")]),a._v(" "),t("h3",{attrs:{id:"keepalived实现双机-主备-热备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keepalived实现双机-主备-热备"}},[a._v("#")]),a._v(" Keepalived实现双机(主备)热备")]),a._v(" "),t("p",[a._v("如果配置的HAProxy主机突然宕机或者网卡失效，就算RbbitMQ集群没有任何故障但是对于外界的客户端来说所有的连接都会被断开，结果是灾难性的，为了确保负载均衡服务的可靠性同样显得十分重要。")]),a._v(" "),t("p",[a._v("Keepalived它能够通过自身健康检查、资源接管功能做高可用(双机热备)，实现故障转移。")]),a._v(" "),t("p",[t("strong",[a._v("搭建步骤：")])]),a._v(" "),t("p",[a._v("下载 keepalived")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" keepalived\n")])])]),t("p",[a._v("修改节点centos1配置文件：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/keepalived/keepalived.conf\n")])])]),t("p",[a._v("把资料里面的 keepalived.conf 修改之后替换")]),a._v(" "),t("blockquote",[t("p",[a._v("没有资料")])]),a._v(" "),t("p",[a._v("节点centos2配置文件")]),a._v(" "),t("ul",[t("li",[a._v("需要修改global_defs 的 router_id,如:nodeB")]),a._v(" "),t("li",[a._v('其次要修改 vrrp_instance_VI 中 state 为"BACKUP"；')]),a._v(" "),t("li",[a._v("最后要将priority 设置为小于 100 的值")])]),a._v(" "),t("p",[a._v("添加 haproxy_chk.sh")]),a._v(" "),t("p",[a._v("(为了防止 HAProxy 服务挂掉之后 Keepalived 还在正常工作而没有切换到 Backup 上，所以这里需要编写一个脚本来检测 HAProxy 务的状态,当 HAProxy 服务挂掉之后该脚本会自动重启HAProxy 的服务，如果不成功则关闭 Keepalived 服务，这样便可以切换到 Backup 继续工作)")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 可以上传文件")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/keepalived/haproxy_chk.sh\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 修改权限 ")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("777")]),a._v(" /etc/keepalived/haproxy_chk.sh\n")])])]),t("blockquote",[t("p",[a._v("这里也没有文件")])]),a._v(" "),t("p",[a._v("启动 keepalive(centos1和centos2启动)")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("systemctl start keepalived\n")])])]),t("p",[a._v("观察 Keepalived 的日志")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" /var/log/messages "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("200")]),a._v("\n")])])]),t("p",[a._v("观察最新添加的 vip")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ip")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" show\n")])])]),t("p",[a._v("centos1模拟 keepalived 关闭状态")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("systemctl stop keepalived\n")])])]),t("p",[a._v("使用 vip 地址来访问 rabbitmq 集群")]),a._v(" "),t("h2",{attrs:{id:"federation-exchange"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#federation-exchange"}},[a._v("#")]),a._v(" Federation Exchange")]),a._v(" "),t("p",[a._v("(broker 北京)，(broker 深圳)彼此之间相距甚远，网络延迟是一个不得不面对的问题。有一个在北京的业务(Client 北京) 需要连接(broker 北京)，向其中的交换器 exchangeA 发送消息，此时的网络延迟很小，(Client 北京)可以迅速将消息发送至 exchangeA 中，就算在开启了 publisherconfirm 机制或者事务机制的情况下，也可以迅速收到确认信息。")]),a._v(" "),t("p",[a._v("此时又有个在深圳的业务(Client 深圳)需要向 exchangeA 发送消息， 那么(Client 深圳) (broker 北京)之间有很大的网络延迟，(Client 深圳) 将发送消息至 exchangeA 会经历一定的延迟，尤其是在开启了 publisherconfirm 机制或者事务机制的情况下，(Client 深圳) 会等待很长的延迟时间来接收(broker 北京)的确认信息，进而必然造成这条发送线程的性能降低，甚至造成一定程度上的阻塞。")]),a._v(" "),t("p",[a._v("将业务(Client 深圳)部署到北京的机房可以解决这个问题，但是如果(Client 深圳)调用的另些服务都部署在深圳，那么又会引发新的时延问题，总不见得将所有业务全部部署在一个机房，那么容灾又何以实现？ 这里使用 Federation 插件就可以很好地解决这个问题。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/Qj05PmUbvXiEkibDuf4JlztcMeOOtWyKms4paiuEQyM.png",alt:"image"}})]),a._v(" "),t("p",[t("strong",[a._v("搭建步骤：")])]),a._v(" "),t("p",[a._v("需要保证每台节点单独运行")]),a._v(" "),t("p",[a._v("在每台机器上开启 federation 相关插件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("rabbitmq-plugins "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" rabbitmq_federation\nrabbitmq-plugins "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" rabbitmq_federation_management\n")])])]),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/k8ae08oGsrAfPTRLcqKg74b6pYWPO_6KzWRNLIEBHFw.png",alt:"image"}})]),a._v(" "),t("p",[a._v("原理图(先运行 consumer 在contos2创建 fed_exchange)")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/dzbsmr20kCfv7eaabzxZDV4AIaDXu9NJRrro9dnpWHA.png",alt:"image"}})]),a._v(" "),t("p",[a._v("在 downstream(contos2)配置 upstream(contos1)")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/cn1eOBFH37IOkSRlA6g6A0NQwpduMyRW0zNY8gNYBHY.png",alt:"image"}})]),a._v(" "),t("p",[a._v("添加 policy")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/IkWr0P6LljRsDGGHkB1ms5BZgmIQrnB9N_N0d_qFvhg.png",alt:"image"}})]),a._v(" "),t("p",[a._v("成功的前提")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/uWD_8FHkunP6-scqMxT-kikFqmiNHWFz_x7nse4tV9A.png",alt:"image"}})]),a._v(" "),t("h2",{attrs:{id:"federation-queue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#federation-queue"}},[a._v("#")]),a._v(" Federation Queue")]),a._v(" "),t("p",[a._v("联邦队列可以在多个 Broker 节点(或者集群)之间为单个队列提供均衡负载的功能。一个联邦队列可以连接一个或者多个上游队列(upstream queue)，并从这些上游队列中获取消息以满足本地消费者消费消息的需求。")]),a._v(" "),t("p",[t("strong",[a._v("搭建步骤：")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/EUysWRGM1d4faPAeBqgzrYBVsth5xlhcTjiPShk7og8.png",alt:"image"}})]),a._v(" "),t("p",[a._v("添加 upstream(同上)")]),a._v(" "),t("p",[a._v("添加 policy")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/k6UcOmJLeZqp1GNrFBUtW5uzETQ8N3_qy2nrtxGNTuk.png",alt:"image"}})]),a._v(" "),t("h2",{attrs:{id:"shovel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shovel"}},[a._v("#")]),a._v(" Shovel")]),a._v(" "),t("p",[a._v('Federation 具备的数据转发功能类似，Shovel 够可靠、持续地从一个 Broker 中的队列(作为源端，即source)拉取数据并转发至另一个 Broker 中的交换器(作为目的端，即 destination)。作为源端的队列和作为目的端的交换器可以同时位于同一个 Broker，也可以位于不同的 Broker 上。Shovel 可以翻译为"铲子"，是一种比较形象的比喻，这个"铲子"可以将消息从一方"铲子"另一方。Shovel 行为就像优秀的客户端应用程序能够负责连接源和目的地、负责消息的读写及负责连接失败问题的处理。')]),a._v(" "),t("p",[t("strong",[a._v("搭建步骤：")])]),a._v(" "),t("p",[a._v("开启插件(需要的机器都开启)")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("rabbitmq-plugins "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" rabbitmq_shovel\nrabbitmq-plugins "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" rabbitmq_shovel_management\n")])])]),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/e3etzvu4HSy8TyuFbv-gWxG0Gv1gwGh7xdPwmdpZ02g.png",alt:"image"}})]),a._v(" "),t("p",[a._v("原理图(在源头发送的消息直接回进入到目的地队列)")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/AcmDlztNG0-U0_X2BvghCnGVhyWRQn28-8OflWK0JSY.png",alt:"image"}})]),a._v(" "),t("p",[a._v("添加 shovel 源和目的地")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/5QWoYrrxUTduXhhcKQpV4X0Rv2wf3oExmQnkJpJKtR8.png",alt:"image"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);