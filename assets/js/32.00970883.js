(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{355:function(a,t,s){"use strict";s.r(t);var e=s(7),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("几乎所有的版本控制系统都以某种形式支持分支。 使用分支意味着可以把工作从开发主线上分离开来进行重大的Bug修改、开发新的功能，以免影响开发主线。")]),a._v(" "),t("h2",{attrs:{id:"查看本地分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看本地分支"}},[a._v("#")]),a._v(" 查看本地分支")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch\n")])])]),t("h2",{attrs:{id:"创建本地分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建本地分支"}},[a._v("#")]),a._v(" 创建本地分支")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch 分支名\n")])])]),t("h2",{attrs:{id:"切换分支-checkout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切换分支-checkout"}},[a._v("#")]),a._v(" 切换分支(checkout)")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout 分支名\n")])])]),t("p",[a._v("创建并切换一个分支：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b")]),a._v(" 分支名\n")])])]),t("h2",{attrs:{id:"合并分支-merge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合并分支-merge"}},[a._v("#")]),a._v(" 合并分支(merge)")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" merge 分支名称\n")])])]),t("h2",{attrs:{id:"删除分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除分支"}},[a._v("#")]),a._v(" 删除分支")]),a._v(" "),t("p",[a._v("不能删除当前分支，只能删除其他分支")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除分支时，需要做各种检查")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" 分支名称\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 不做任何检查，强制删除")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-D")]),a._v(" 分支名称\n")])])]),t("h2",{attrs:{id:"解决冲突"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决冲突"}},[a._v("#")]),a._v(" 解决冲突")]),a._v(" "),t("p",[a._v("当两个分支上对文件的修改可能会存在冲突，例如同时修改了同一个文件的同一行，这时就需要手动解决冲突，解决冲突步骤如下：")]),a._v(" "),t("ol",[t("li",[a._v("处理文件中冲突的地方")]),a._v(" "),t("li",[a._v("将解决完冲突的文件加入暂存区(add)")]),a._v(" "),t("li",[a._v("提交到仓库(commit)")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/zo16lRR-Ko8m4kH3ccXtaqkW6-iv799glk_QcJEU7p8.png",alt:"image"}})]),a._v(" "),t("h2",{attrs:{id:"开发中分支使用原则与流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发中分支使用原则与流程"}},[a._v("#")]),a._v(" 开发中分支使用原则与流程")]),a._v(" "),t("p",[a._v("几乎所有的版本控制系统都以某种形式支持分支。 使用分支意味着你可以把你的工作从开发主线上分离开来进行重大的Bug修改、开发新的功能，以免影响开发主线。")]),a._v(" "),t("p",[a._v("在开发中，一般有如下分支使用原则与流程：")]),a._v(" "),t("h3",{attrs:{id:"master-生产-分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#master-生产-分支"}},[a._v("#")]),a._v(" master （生产）分支")]),a._v(" "),t("p",[a._v("线上分支，主分支，中小规模项目作为线上运行的应用对应的分支；")]),a._v(" "),t("h3",{attrs:{id:"develop-开发-分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#develop-开发-分支"}},[a._v("#")]),a._v(" develop（开发）分支")]),a._v(" "),t("p",[a._v("是从master创建的分支，一般作为开发部门的主要开发分支，如果没有其他并行开发不同期上线要求，都可以在此版本进行开发，阶段开发完成后，需要是合并到master分支，准备上线。")]),a._v(" "),t("h3",{attrs:{id:"feature-xxxx分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#feature-xxxx分支"}},[a._v("#")]),a._v(" feature/xxxx分支")]),a._v(" "),t("p",[a._v("从develop创建的分支，一般是同期并行开发，但不同期上线时创建的分支，分支上的研发任务完成后合并到develop分支。")]),a._v(" "),t("h3",{attrs:{id:"hotfifix-xxxx分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hotfifix-xxxx分支"}},[a._v("#")]),a._v(" hotfifix/xxxx分支")]),a._v(" "),t("p",[a._v("从master派生的分支，一般作为线上bug修复使用，修复完成后需要合并到master、test、develop分支。")]),a._v(" "),t("p",[a._v("还有一些其他分支，在此不再详述，例如test分支（用于代码测试）、pre分支（预上线分支）等等。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://file.qaomuu.com/blog/Pr6ILt11zJlA7E1zXCbuGs-BmdBOhIakJiG6a5_f9Sg.png",alt:"image"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);