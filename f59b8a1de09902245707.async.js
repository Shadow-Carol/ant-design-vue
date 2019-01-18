webpackJsonp([43],{1816:function(t,s,a){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var n=a(2776),l=e(n),v=a(2779),i=e(v),_=a(2782),c=e(_),d=a(2785),r=e(d),h=a(2788),o=e(h),p=a(2791),u=e(p),C=a(2794),f=e(C),m={cn:"# Switch 开关\n\n    开关选择器。\n\n    ## 何时使用\n\n    - 需要表示开关状态/两种状态之间的切换时；\n    - 和 `checkbox`的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。\n\n    ## 代码演示",us:"# Switch\n\n    Switching Selector.\n\n    ## When To Use\n\n    - If you need to represent the switching between two states or on-off state.\n    - The difference between `Switch` and `Checkbox` is that `Switch` will trigger a state change directly when you toggle it, while `Checkbox` is generally used for state marking, which should work in conjunction with submit operation.\n    ## Examples "};s.default={category:"Components",subtitle:"开关",type:"Data Entry",title:"Switch",render:function(){var t=arguments[0];return t("div",[t("md",{attrs:{cn:m.cn,us:m.us}}),t(l.default),t("br"),t(i.default),t("br"),t(c.default),t("br"),t(r.default),t("br"),t(o.default),t("br"),t("api",[t("template",{slot:"cn"},[t(u.default)]),t(f.default)])])}}},1817:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{}},methods:{onChange:function(t){console.log("a-switch to "+t)}}}},1818:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{disabled:!0}},methods:{onToggle:function(){this.disabled=!this.disabled}}}},2776:function(t,s,a){t.exports=a(2777)},2777:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(1817),n=a.n(e);for(var l in e)"default"!==l&&function(t){a.d(s,t,function(){return e[t]})}(l);var v=a(2778),i=a(52),_=i(n.a,v.a,!1,null,null,null);s.default=_.exports},2778:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <a-switch defaultChecked="" @change="onChange"/>\n  </div>\n',script:"\n  export default {\n    data () {\n      return {\n      }\n    },\n    methods: {\n      onChange(checked){\n        console.log(`a-switch to ${checked}`);\n      }\n    },\n  }\n",style:null,us:"\n#### basic Usage\nThe most basic usage.\n",cn:"\n#### 基本用法\n最简单的用法。\n",sourceCode:"<template>\n  <div>\n    <a-switch defaultChecked @change='onChange'/>\n  </div>\n</template>\n<script>\n  export default {\n    data () {\n      return {\n      }\n    },\n    methods: {\n      onChange(checked){\n        console.log(`a-switch to ${checked}`);\n      }\n    },\n  }\n<\/script>\n"}}},[a("template",{slot:"component"},[a("div",[a("a-switch",{attrs:{defaultChecked:""},on:{change:t.onChange}})],1)]),t._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"基本用法"}},[t._v("基本用法 "),a("a",{staticClass:"anchor",attrs:{href:"#基本用法","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[t._v("最简单的用法。")])]),t._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"basic-Usage"}},[t._v("basic Usage "),a("a",{staticClass:"anchor",attrs:{href:"#basic-Usage","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[t._v("The most basic usage.")])]),t._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-switch")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("defaultChecked")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("@change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("'onChange'")]),t._v("/>")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),a("span",{staticClass:"javascript"},[t._v("\n  "),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n    data () {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      }\n    },\n    "),a("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n      onChange(checked){\n        "),a("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log("),a("span",{staticClass:"hljs-string"},[t._v("`a-switch to "),a("span",{staticClass:"hljs-subst"},[t._v("${checked}")]),t._v("`")]),t._v(");\n      }\n    },\n  }\n")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])])],2)]],2)},n=[],l={render:e,staticRenderFns:n};s.a=l},2779:function(t,s,a){t.exports=a(2780)},2780:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(1818),n=a.n(e);for(var l in e)"default"!==l&&function(t){a.d(s,t,function(){return e[t]})}(l);var v=a(2781),i=a(52),_=i(n.a,v.a,!1,null,null,null);s.default=_.exports},2781:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <a-switch defaultChecked="" :disabled="disabled" style="margin-bottom:5px"/>\n    <br/>\n    <a-button type="primary" @click="onToggle">Toggle disabled</a-button>\n  </div>\n',script:"\n  export default {\n    data () {\n      return {\n        disabled: true,\n      }\n    },\n    methods: {\n      onToggle(){\n        this.disabled = !this.disabled\n      }\n    },\n  }\n",style:null,us:"\n#### Disabled\nDisabled state of `Switch`.\n",cn:"\n#### 不可用\nSwitch 失效状态。\n",sourceCode:'<template>\n  <div>\n    <a-switch defaultChecked :disabled="disabled" style="margin-bottom:5px"/>\n    <br/>\n    <a-button type="primary" @click=\'onToggle\'>Toggle disabled</a-button>\n  </div>\n</template>\n<script>\n  export default {\n    data () {\n      return {\n        disabled: true,\n      }\n    },\n    methods: {\n      onToggle(){\n        this.disabled = !this.disabled\n      }\n    },\n  }\n<\/script>\n'}}},[a("template",{slot:"component"},[a("div",[a("a-switch",{staticStyle:{"margin-bottom":"5px"},attrs:{defaultChecked:"",disabled:t.disabled}}),t._v(" "),a("br"),t._v(" "),a("a-button",{attrs:{type:"primary"},on:{click:t.onToggle}},[t._v("Toggle disabled")])],1)]),t._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"不可用"}},[t._v("不可用 "),a("a",{staticClass:"anchor",attrs:{href:"#不可用","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[t._v("Switch 失效状态。")])]),t._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"Disabled"}},[t._v("Disabled "),a("a",{staticClass:"anchor",attrs:{href:"#Disabled","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[t._v("Disabled state of "),a("code",[t._v("Switch")]),t._v(".")])]),t._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-switch")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("defaultChecked")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":disabled")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"disabled"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("style")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"margin-bottom:5px"')]),t._v("/>")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("br")]),t._v("/>")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-button")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"primary"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("@click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("'onToggle'")]),t._v(">")]),t._v("Toggle disabled"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("a-button")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),a("span",{staticClass:"javascript"},[t._v("\n  "),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n    data () {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n        "),a("span",{staticClass:"hljs-attr"},[t._v("disabled")]),t._v(": "),a("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n      }\n    },\n    "),a("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n      onToggle(){\n        "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".disabled = !"),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".disabled\n      }\n    },\n  }\n")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])])],2)]],2)},n=[],l={render:e,staticRenderFns:n};s.a=l},2782:function(t,s,a){t.exports=a(2783)},2783:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(2784),n=a(52),l=n(null,e.a,!1,null,null,null);s.default=l.exports},2784:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <a-switch checkedChildren="开" unCheckedChildren="关" defaultChecked=""/>\n    <br>\n    <a-switch checkedChildren="1" unCheckedChildren="0"/>\n    <br>\n    <a-switch defaultChecked="">\n      <a-icon type="check" slot="checkedChildren"/>\n      <a-icon type="close" slot="unCheckedChildren"/>\n    </a-switch>\n  </br></br></div>\n',script:null,style:null,us:"\n#### Text & icon\nWith text and icon.\n",cn:"\n#### 文字和图标\n带有文字和图标。\n",sourceCode:'<template>\n  <div>\n    <a-switch checkedChildren="开" unCheckedChildren="关" defaultChecked/>\n    <br>\n    <a-switch checkedChildren="1" unCheckedChildren="0"/>\n    <br>\n    <a-switch defaultChecked >\n      <a-icon type="check" slot="checkedChildren"/>\n      <a-icon type="close" slot="unCheckedChildren"/>\n    </a-switch>\n  </div>\n</template>\n'}}},[a("template",{slot:"component"},[a("div",[a("a-switch",{attrs:{checkedChildren:"开",unCheckedChildren:"关",defaultChecked:""}}),t._v(" "),a("br"),t._v(" "),a("a-switch",{attrs:{checkedChildren:"1",unCheckedChildren:"0"}}),t._v(" "),a("br"),t._v(" "),a("a-switch",{attrs:{defaultChecked:""}},[a("a-icon",{attrs:{slot:"checkedChildren",type:"check"},slot:"checkedChildren"}),t._v(" "),a("a-icon",{attrs:{slot:"unCheckedChildren",type:"close"},slot:"unCheckedChildren"})],1),t._v(" "),a("br"),a("br")],1)]),t._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"文字和图标"}},[t._v("文字和图标 "),a("a",{staticClass:"anchor",attrs:{href:"#文字和图标","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[t._v("带有文字和图标。")])]),t._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"Text-&-icon"}},[t._v("Text & icon "),a("a",{staticClass:"anchor",attrs:{href:"#Text-&-icon","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[t._v("With text and icon.")])]),t._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-switch")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("checkedChildren")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"开"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("unCheckedChildren")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"关"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("defaultChecked")]),t._v("/>")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("br")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-switch")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("checkedChildren")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"1"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("unCheckedChildren")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"0"')]),t._v("/>")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("br")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-switch")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("defaultChecked")]),t._v(" >")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-icon")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"check"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"checkedChildren"')]),t._v("/>")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-icon")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"close"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"unCheckedChildren"')]),t._v("/>")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("a-switch")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])])],2)]],2)},n=[],l={render:e,staticRenderFns:n};s.a=l},2785:function(t,s,a){t.exports=a(2786)},2786:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(2787),n=a(52),l=n(null,e.a,!1,null,null,null);s.default=l.exports},2787:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <a-switch defaultChecked=""/>\n    <br>\n    <a-switch size="small" defaultChecked=""/>\n  </br></div>\n',script:null,style:null,us:'\n#### Two sizes\n`size="small"` represents a small sized switch.\n',cn:'\n#### 两种大小\n`size="small"` 表示小号开关。\n',sourceCode:'<template>\n  <div>\n    <a-switch defaultChecked/>\n    <br>\n    <a-switch size="small" defaultChecked/>\n  </div>\n</template>\n'}}},[a("template",{slot:"component"},[a("div",[a("a-switch",{attrs:{defaultChecked:""}}),t._v(" "),a("br"),t._v(" "),a("a-switch",{attrs:{size:"small",defaultChecked:""}}),t._v(" "),a("br")],1)]),t._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"两种大小"}},[t._v("两种大小 "),a("a",{staticClass:"anchor",attrs:{href:"#两种大小","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[a("code",[t._v('size="small"')]),t._v(" 表示小号开关。")])]),t._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"Two-sizes"}},[t._v("Two sizes "),a("a",{staticClass:"anchor",attrs:{href:"#Two-sizes","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[a("code",[t._v('size="small"')]),t._v(" represents a small sized switch.")])]),t._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-switch")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("defaultChecked")]),t._v("/>")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("br")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-switch")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("size")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"small"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("defaultChecked")]),t._v("/>")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])])],2)]],2)},n=[],l={render:e,staticRenderFns:n};s.a=l},2788:function(t,s,a){t.exports=a(2789)},2789:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(2790),n=a(52),l=n(null,e.a,!1,null,null,null);s.default=l.exports},2790:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <a-switch loading="" defaultChecked=""/>\n    <br>\n    <a-switch size="small" loading=""/>\n  </br></div>\n',script:null,style:null,us:"\n#### Loading\nMark a pending state of switch.\n",cn:"\n#### 加载中\n标识开关操作仍在执行中。\n",sourceCode:'<template>\n  <div>\n    <a-switch loading defaultChecked/>\n    <br>\n    <a-switch size="small" loading/>\n  </div>\n</template>\n'}}},[a("template",{slot:"component"},[a("div",[a("a-switch",{attrs:{loading:"",defaultChecked:""}}),t._v(" "),a("br"),t._v(" "),a("a-switch",{attrs:{size:"small",loading:""}}),t._v(" "),a("br")],1)]),t._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"加载中"}},[t._v("加载中 "),a("a",{staticClass:"anchor",attrs:{href:"#加载中","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[t._v("标识开关操作仍在执行中。")])]),t._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"Loading"}},[t._v("Loading "),a("a",{staticClass:"anchor",attrs:{href:"#Loading","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[t._v("Mark a pending state of switch.")])]),t._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-switch")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("loading")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("defaultChecked")]),t._v("/>")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("br")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-switch")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("size")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"small"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("loading")]),t._v("/>")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])])],2)]],2)},n=[],l={render:e,staticRenderFns:n};s.a=l},2791:function(t,s,a){t.exports=a(2792)},2792:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(2793),n=a(52),l=n(null,e.a,!1,null,null,null);s.default=l.exports},2793:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h2",{attrs:{id:"API"}},[t._v("API "),a("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("autoFocus")]),t._v(" "),a("td",[t._v("组件自动获取焦点")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("checked(v-model)")]),t._v(" "),a("td",[t._v("指定当前是否选中")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("checkedChildren")]),t._v(" "),a("td",[t._v("选中时的内容")]),t._v(" "),a("td",[t._v("string|slot")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("defaultChecked")]),t._v(" "),a("td",[t._v("初始是否选中")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("disabled")]),t._v(" "),a("td",[t._v("是否禁用")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("loading")]),t._v(" "),a("td",[t._v("加载中的开关")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("size")]),t._v(" "),a("td",[t._v("开关大小，可选值："),a("code",{pre:!0},[t._v("default")]),t._v(" "),a("code",{pre:!0},[t._v("small")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("default")])]),t._v(" "),a("tr",[a("td",[t._v("unCheckedChildren")]),t._v(" "),a("td",[t._v("非选中时的内容")]),t._v(" "),a("td",[t._v("string|slot")]),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"事件"}},[t._v("事件 "),a("a",{staticClass:"anchor",attrs:{href:"#事件","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("事件名称")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("change")]),t._v(" "),a("td",[t._v("变化时回调函数")]),t._v(" "),a("td",[t._v("Function(checked:Boolean)")])])])]),t._v(" "),a("h2",{attrs:{id:"方法"}},[t._v("方法 "),a("a",{staticClass:"anchor",attrs:{href:"#方法","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("blur()")]),t._v(" "),a("td",[t._v("移除焦点")])]),t._v(" "),a("tr",[a("td",[t._v("focus()")]),t._v(" "),a("td",[t._v("获取焦点")])])])])])}],l={render:e,staticRenderFns:n};s.a=l},2794:function(t,s,a){t.exports=a(2795)},2795:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(2796),n=a(52),l=n(null,e.a,!1,null,null,null);s.default=l.exports},2796:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h2",{attrs:{id:"API"}},[t._v("API "),a("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("autoFocus")]),t._v(" "),a("td",[t._v("get focus when component mounted")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("checked(v-model)")]),t._v(" "),a("td",[t._v("determine whether the "),a("code",{pre:!0},[t._v("Switch")]),t._v(" is checked")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("checkedChildren")]),t._v(" "),a("td",[t._v("content to be shown when the state is checked")]),t._v(" "),a("td",[t._v("string|slot")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("defaultChecked")]),t._v(" "),a("td",[t._v("to set the initial state")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("disabled")]),t._v(" "),a("td",[t._v("Disable switch")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("loading")]),t._v(" "),a("td",[t._v("loading state of switch")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("size")]),t._v(" "),a("td",[t._v("the size of the "),a("code",{pre:!0},[t._v("Switch")]),t._v(", options: "),a("code",{pre:!0},[t._v("default")]),t._v(" "),a("code",{pre:!0},[t._v("small")])]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("default")])]),t._v(" "),a("tr",[a("td",[t._v("unCheckedChildren")]),t._v(" "),a("td",[t._v("content to be shown when the state is unchecked")]),t._v(" "),a("td",[t._v("string|slot")]),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"Events"}},[t._v("Events "),a("a",{staticClass:"anchor",attrs:{href:"#Events","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Events Name")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Arguments")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("change")]),t._v(" "),a("td",[t._v("a callback function, can be executed when the checked state is changing")]),t._v(" "),a("td",[t._v("Function(checked:Boolean)")])])])]),t._v(" "),a("h2",{attrs:{id:"Methods"}},[t._v("Methods "),a("a",{staticClass:"anchor",attrs:{href:"#Methods","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("blur()")]),t._v(" "),a("td",[t._v("remove focus")])]),t._v(" "),a("tr",[a("td",[t._v("focus()")]),t._v(" "),a("td",[t._v("get focus")])])])])])}],l={render:e,staticRenderFns:n};s.a=l},640:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(1816),n=a.n(e);for(var l in e)"default"!==l&&function(t){a.d(s,t,function(){return e[t]})}(l);var v=a(52),i=v(n.a,null,!1,null,null,null);s.default=i.exports}});