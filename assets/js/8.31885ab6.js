(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{332:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"consul概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consul概述"}},[t._v("#")]),t._v(" Consul概述")]),t._v(" "),s("p",[t._v("Consul 是一套开源的分布式服务发现和配置管理系统，由 HashiCorp 公司用 Go 语言开发。")]),t._v(" "),s("p",[t._v("提供了微服务系统中的服务治理、配置中心、控制总线等功能。这些功能中的每一个都可以根据需要单独使用，也可以一起使用以构建全方位的服务网格，总之Consul提供了一种完整的服务网格解决方案。")]),t._v(" "),s("p",[t._v("它具有很多优点。包括：基于raft协议，比较简洁； 支持健康检查，同时支持 HTTP 和 DNS 协议，支持跨数据中心的 WAN 集群，提供图形界面，跨平台，支持 Linux、Mac、Windows。")]),t._v(" "),s("p",[t._v("官网："),s("a",{attrs:{href:"https://developer.hashicorp.com/consul/docs/intro",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.hashicorp.com/consul/docs/intro"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("SpringCloud Consul 具有如下特性：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://file.qaomuu.com/blog/zite9hD7yWLTCRZ3RTdTjPhNIaj8z5ejVOulcaycuN8.png",alt:"image"}})]),t._v(" "),s("ul",[s("li",[t._v("服务发现：提供HTTP和DNS两种发现方式。")]),t._v(" "),s("li",[t._v("健康监测：支持多种方式，HTTP、TCP、Docker、Shell脚本定制化监控")]),t._v(" "),s("li",[t._v("KV存储：Key、Value的存储方式")]),t._v(" "),s("li",[t._v("多数据中心：Consul支持多数据中心")]),t._v(" "),s("li",[t._v("可视化Web界面")])]),t._v(" "),s("h2",{attrs:{id:"下载-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载-安装"}},[t._v("#")]),t._v(" 下载&安装")]),t._v(" "),s("p",[t._v("下载地址："),s("a",{attrs:{href:"https://www.consul.io/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.consul.io/downloads.html"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("中文文档："),s("a",{attrs:{href:"https://www.springcloud.cc/spring-cloud-consul.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.springcloud.cc/spring-cloud-consul.html"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("下载后查看版本号：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://file.qaomuu.com/blog/2c4A4dHL3iAlPO2Ujl6VOUfIoOJ6iZP1sg4AcrEcnuw.png",alt:"image"}})]),t._v(" "),s("p",[t._v("使用开发模式启动：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("consul agent "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-dev")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://file.qaomuu.com/blog/0lc5p1kZn3h4ZzQSziLjFoK1q8wu5KC8Pe9RXqPNm_4.png",alt:"image"}})]),t._v(" "),s("p",[t._v("通过http://localhost:8500访问Consul的首页：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://file.qaomuu.com/blog/DzIkJYDc3Ih_pHdwPy54_iOQQUE0Enk1D-uGFQfsmqU.png",alt:"image"}})]),t._v(" "),s("h2",{attrs:{id:"服务提供者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务提供者"}},[t._v("#")]),t._v(" 服务提供者")]),t._v(" "),s("p",[t._v("新建一个maven工程，添加相关依赖")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--SpringCloud consul-server --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.cloud"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-starter-consul-discovery"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("配置yml文件：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# consul服务端口号")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8006")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" consul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("payment\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# consul注册中心地址")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("consul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" localhost\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8500")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("discovery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#hostname: 127.0.0.1")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("service-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("spring.application.name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("主启动类：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SpringBootApplication")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableDiscoveryClient")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//该注解用于向使用consul或者zookeeper作为注册中心时注册服务")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PaymentMain8006")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PaymentMain8006")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Controller，随便写一个接口，以检查是否注册进consul服务：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PaymentController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${server.port}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" serverPort"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/payment/consul"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("paymentConsul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"springcloud with consul: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" serverPort "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\t   "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UUID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("randomUUID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("启动项目，可以在Consul的管理页面看到该服务：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://file.qaomuu.com/blog/2emXoBA5_43wekz3fdiQdtGbvEY7JPB7TztUr6QGnkw.png",alt:"image"}})]),t._v(" "),s("p",[t._v("调用接口，也是成功的：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://file.qaomuu.com/blog/TOVwl_J0V77FVTFeuKNbC0X2_IXx35vzwm9bKL4SUVc.png",alt:"image"}})]),t._v(" "),s("h2",{attrs:{id:"服务消费者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务消费者"}},[t._v("#")]),t._v(" 服务消费者")]),t._v(" "),s("p",[t._v("创建一个Maven工程，pom文件和上面的服务提供者一样，")]),t._v(" "),s("p",[t._v("配置yml文件：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# consul服务端口号")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("consumer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("order\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# consul注册中心地址")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("consul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" localhost\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8500")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("discovery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#hostname: 127.0.0.1")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("service-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("spring.application.name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("主启动类加上"),s("code",[t._v("@EnableDiscoveryClient")]),t._v(" 注解。")]),t._v(" "),s("p",[t._v("将RestTemplate加入到容器。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@LoadBalanced")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RestTemplate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRestTemplate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RestTemplate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("使用RestTemplate调用服务提供者的接口：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderConsulController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("INVOKE_URL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://consul-provider-payment"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Resource")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RestTemplate")]),t._v(" restTemplate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/consumer/payment/consul"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("paymentInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" restTemplate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getForObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("INVOKE_URL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/payment/consul"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("启动项目，服务消费者也注册进了Consul中，并且调用服务消费者的接口成功：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://file.qaomuu.com/blog/xAlU4pGFcq4-CXuXEGmcJNwnl6HPqd9DpiOow3-K1LQ.png",alt:"image"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://file.qaomuu.com/blog/bnA6N6MCKpEt_saCJD2Y_zuTrrE84FHYBUWNu6tACeE.png",alt:"image"}})]),t._v(" "),s("h2",{attrs:{id:"三个注册中心异同点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三个注册中心异同点"}},[t._v("#")]),t._v(" 三个注册中心异同点")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("组件名")])]),t._v(" "),s("th",[s("strong",[t._v("语言")])]),t._v(" "),s("th",[s("strong",[t._v("CAP")])]),t._v(" "),s("th",[s("strong",[t._v("服务健康检查")])]),t._v(" "),s("th",[s("strong",[t._v("对外暴露接口")])]),t._v(" "),s("th",[s("strong",[t._v("SpringCloud集成")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Eureka")]),t._v(" "),s("td",[t._v("Java")]),t._v(" "),s("td",[t._v("AP")]),t._v(" "),s("td",[t._v("可配支持")]),t._v(" "),s("td",[t._v("HTTP")]),t._v(" "),s("td",[t._v("已集成")])]),t._v(" "),s("tr",[s("td",[t._v("Consul")]),t._v(" "),s("td",[t._v("Go")]),t._v(" "),s("td",[t._v("CP")]),t._v(" "),s("td",[t._v("支持")]),t._v(" "),s("td",[t._v("HTTP/DNS")]),t._v(" "),s("td",[t._v("已集成")])]),t._v(" "),s("tr",[s("td",[t._v("Zookeeper")]),t._v(" "),s("td",[t._v("Java")]),t._v(" "),s("td",[t._v("CP")]),t._v(" "),s("td",[t._v("支持")]),t._v(" "),s("td",[t._v("客户端")]),t._v(" "),s("td",[t._v("已集成")])])])]),t._v(" "),s("h2",{attrs:{id:"cap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cap"}},[t._v("#")]),t._v(" CAP")]),t._v(" "),s("ul",[s("li",[t._v("C：Consistency（强一致性）")]),t._v(" "),s("li",[t._v("A：Availability（可用性）")]),t._v(" "),s("li",[t._v("P：Partition tolerance（分区容错性）")])]),t._v(" "),s("p",[t._v("CAP理论关注粒度是数据，而不是整体系统设计的策略")]),t._v(" "),s("h3",{attrs:{id:"经典cap图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#经典cap图"}},[t._v("#")]),t._v(" 经典CAP图")]),t._v(" "),s("p",[t._v("最多只能同时较好的满足两个。")]),t._v(" "),s("p",[t._v("CAP理论的核心是：一个分布式系统不可能同时很好的满足一致性，可用性和分区容错性这三个需求，因此，根据 CAP 原理将 NoSQL 数据库分成了满足 CA 原则、满足 CP 原则和满足 AP 原则三 大类：")]),t._v(" "),s("ul",[s("li",[t._v("CA - 单点集群，满足一致性，可用性的系统，通常在可扩展性上不太强大。")]),t._v(" "),s("li",[t._v("CP - 满足一致性，分区容忍必的系统，通常性能不是特别高。")]),t._v(" "),s("li",[t._v("AP - 满足可用性，分区容忍性的系统，通常可能对一致性要求低一些。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://file.qaomuu.com/blog/IMOp3S7LReSmIxSrB-sR2tFTU9rDWGa8gySs9157mPE.png",alt:"image"}})]),t._v(" "),s("h3",{attrs:{id:"ap-eureka"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ap-eureka"}},[t._v("#")]),t._v(" AP(Eureka)")]),t._v(" "),s("p",[t._v("当网络分区出现后，为了保证可用性，系统B可以返回旧值，保证系统的可用性。")]),t._v(" "),s("blockquote",[s("p",[t._v("结论：违背了一致性C的要求，只满足可用性和分区容错，即AP")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://file.qaomuu.com/blog/QqQAzeoaPeCSVNXebkY9wBPTGJ2_kfEzwkokmrJd-Xk.png",alt:"image"}})]),t._v(" "),s("h3",{attrs:{id:"cp-zookeeper-consul"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cp-zookeeper-consul"}},[t._v("#")]),t._v(" CP(Zookeeper/Consul)")]),t._v(" "),s("p",[t._v("当网络分区出现后，为了保证一致性，就必须拒接请求，否则无法保证一致性")]),t._v(" "),s("blockquote",[s("p",[t._v("结论：违背了可用性A的要求，只满足一致性和分区容错，即CP")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://file.qaomuu.com/blog/0XfcLUWnsMOEPvNhJZwkZWievcIwkc0epcsu1EQjK2s.png",alt:"image"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);