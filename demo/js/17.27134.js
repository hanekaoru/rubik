webpackJsonp([17,29],{234:function(r,o,d){d(326);var n=d(0)(d(261),d(353),"data-v-e984d01a",null);r.exports=n.exports},261:function(r,o,d){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={name:"dropdowns",data:function(){return{list:[{href:"javascript:;",text:"首页"},{href:"javascript:;",text:"吃饭"},{href:"javascript:;",text:"睡觉"},{href:"javascript:;",text:"打豆豆"}]}}}},303:function(r,o,d){o=r.exports=d(59)(),o.push([r.i,".dropdown-span[data-v-e984d01a]{margin:0 20px}.dropdown-icon[data-v-e984d01a],.dropdown-span[data-v-e984d01a]{display:inline-block;cursor:pointer}.dropdown-icon[data-v-e984d01a]:hover{color:#f06}","",{version:3,sources:["/./example/views/Dropdown.vue"],names:[],mappings:"AACA,gCAEE,aAAe,CAEhB,AACD,gEAJE,qBAAsB,AAEtB,cAAgB,CAKjB,AACD,sCACE,UAAY,CACb",file:"Dropdown.vue",sourcesContent:["\n.dropdown-span[data-v-e984d01a] {\n  display: inline-block;\n  margin: 0 20px;\n  cursor: pointer;\n}\n.dropdown-icon[data-v-e984d01a] {\n  display: inline-block;\n  cursor: pointer;\n}\n.dropdown-icon[data-v-e984d01a]:hover {\n  color: #f06;\n}"],sourceRoot:"webpack://"}])},326:function(r,o,d){var n=d(303);"string"==typeof n&&(n=[[r.i,n,""]]),n.locals&&(r.exports=n.locals);d(227)("1d15bf14",n,!0)},353:function(r,o){r.exports={render:function(){var r=this,o=r.$createElement,d=r._self._c||o;return d("article",[d("h1",[r._v("下拉菜单 Dropdown")]),r._v(" "),d("h2",[r._v("例子")]),r._v(" "),d("h3",[r._v("Hover")]),r._v(" "),d("span",[r._v("左侧划出")]),r._v(" "),d("r-btn",{directives:[{name:"dropdown",rawName:"v-dropdown:dropdownA",arg:"dropdownA"}],staticClass:"green white-text"},[r._v("下拉菜单"),d("r-icon",[r._v("arrow_drop_down")])],1),r._v(" "),d("r-dropdown",{attrs:{id:"dropdownA",items:r.list,hover:""}}),r._v(" "),d("br"),d("br"),r._v(" "),d("span",[r._v("右侧划出")]),r._v(" "),d("r-btn",{directives:[{name:"dropdown",rawName:"v-dropdown:dropdownB",arg:"dropdownB"}],staticClass:"green white-text"},[r._v("下拉菜单"),d("r-icon",[r._v("arrow_drop_down")])],1),r._v(" "),d("r-dropdown",{attrs:{id:"dropdownB",right:"",hover:""}},[d("li",[d("a",{staticClass:"dropdown-item",attrs:{href:"javascript:;"}},[r._v("吃饭")])]),r._v(" "),d("li",[d("a",{staticClass:"dropdown-item",attrs:{href:"javascript:;"}},[r._v("睡觉")])]),r._v(" "),d("li",[d("a",{staticClass:"dropdown-item",attrs:{href:"javascript:;"}},[r._v("打豆豆")])]),r._v(" "),d("li",[d("a",{staticClass:"dropdown-item",attrs:{href:"javascript:;"}},[d("span",{directives:[{name:"badge",rawName:"v-badge:2",arg:"2"}],staticClass:"red-after"},[r._v("好消息")])])])]),r._v(" "),d("h3",[r._v("Click")]),r._v(" "),d("r-btn",{directives:[{name:"dropdown",rawName:"v-dropdown:dropdownC",arg:"dropdownC"}],staticClass:"red white-text"},[r._v("下拉菜单"),d("r-icon",[r._v("arrow_drop_down")])],1),r._v(" "),d("r-dropdown",{attrs:{id:"dropdownC",items:r.list}}),r._v(" "),d("h3",[r._v("Link / Text")]),r._v(" "),d("a",{directives:[{name:"dropdown",rawName:"v-dropdown:dropdownD",arg:"dropdownD"}],attrs:{href:"javascript:;"}},[r._v("下拉菜单-链接")]),r._v(" "),d("r-dropdown",{attrs:{id:"dropdownD",items:r.list}}),r._v(" "),d("span",{directives:[{name:"dropdown",rawName:"v-dropdown:dropdownE",arg:"dropdownE"}],staticClass:"dropdown-span",attrs:{href:"javascript:;"}},[r._v("下拉菜单-文字")]),r._v(" "),d("r-dropdown",{attrs:{id:"dropdownE",items:r.list,right:"",hover:""}}),r._v(" "),d("h3",[r._v("Icon")]),r._v(" "),d("r-icon",{directives:[{name:"dropdown",rawName:"v-dropdown:dropdown",arg:"dropdown"}],staticClass:"dropdown-icon"},[r._v("info")]),r._v(" "),d("r-dropdown",{attrs:{id:"dropdown",items:r.list}}),r._v(" "),d("h2",[r._v("API")]),r._v(" "),r._m(0),r._v(" "),r._m(1),r._v(" "),d("h3",[r._v("props")]),r._v(" "),r._m(2),r._v(" "),d("Markup",{attrs:{lang:"html"}},[r._v('\n    <r-btn class="green white-text" v-dropdown:dropdownA>下拉菜单<r-icon>arrow_drop_down</r-icon></r-btn>\n    <r-dropdown id="dropdownA" :items="list" hover></r-dropdown>\n\n    // 下拉选项支持自定义方式添加\n    <r-btn class="green white-text" v-dropdown:dropdownB>下拉菜单<r-icon>arrow_drop_down</r-icon></r-btn>\n    <r-dropdown id="dropdownB" right hover>\n      <li><a class="dropdown-item" href="">吃饭</a></li>\n      <li><a class="dropdown-item" href="">睡觉</a></li>\n      <li><a class="dropdown-item" href="">打豆豆</a></li>\n      <li><a class="dropdown-item" href=""><span v-badge:2>好消息</span></a></li>\n    </r-dropdown>\n\n    <r-btn class="red white-text" v-dropdown:dropdownC>下拉菜单<r-icon>arrow_drop_down</r-icon></r-btn>\n    <r-dropdown id="dropdownC" :items="list"></r-dropdown>\n  ')])],1)},staticRenderFns:[function(){var r=this,o=r.$createElement,d=r._self._c||o;return d("h3",[r._v("参数: "),d("strong",[r._v("id")])])},function(){var r=this,o=r.$createElement,d=r._self._c||o;return d("p",[r._v("\n    v-dropdown 指令的 value 和下拉菜单触发元素的 id 一一对应 "),d("br"),r._v("\n    如下面的API的 dropdownA dropdownB dropdownC\n  ")])},function(){var r=this,o=r.$createElement,d=r._self._c||o;return d("table",{staticClass:"bordered responsive-table"},[d("thead",[d("th",[r._v("属性")]),r._v(" "),d("th",[r._v("说明")]),r._v(" "),d("th",[r._v("类型")]),r._v(" "),d("th",[r._v("默认值")])]),r._v(" "),d("tbody",[d("tr",[d("td",[r._v("items")]),r._v(" "),d("td",[r._v("下拉菜单的对象数组 { href:'', text:'' }")]),r._v(" "),d("td",[r._v("Array")]),r._v(" "),d("td",[r._v("[]")])]),r._v(" "),d("tr",[d("td",[r._v("right")]),r._v(" "),d("td",[r._v("下拉菜单从右侧划出，默认是左侧")]),r._v(" "),d("td",[r._v("Boolean")]),r._v(" "),d("td",[r._v("false")])]),r._v(" "),d("tr",[d("td",[r._v("hover")]),r._v(" "),d("td",[r._v("hover时画出菜单 默认 click")]),r._v(" "),d("td",[r._v("Boolean")]),r._v(" "),d("td",[r._v("false")])])])])}]}}});