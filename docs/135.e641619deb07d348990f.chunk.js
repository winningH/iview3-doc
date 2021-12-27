webpackJsonp([135],{1003:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("i-article",t._l(t.navigate.components,function(e){return i("div",{staticClass:"overview"},[i("h3",[t._v(t._s(e.type))]),t._v(" "),i("Row",t._l(e.list,function(e){return i("i-col",{key:e.path,attrs:{span:t.span}},[i("router-link",{attrs:{to:e.path}},[i("Card",[i("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title.split(" ")[0]))]),t._v(" "),i("div",{staticClass:"overview-card-img"},[i("img",{attrs:{src:t.filePath+e.img}})])])],1)],1)}),1)],1)}),0)},o=[];n._withStripped=!0;var a={render:n,staticRenderFns:o};e.default=a},1120:function(t,e){},655:function(t,e,i){"use strict";function n(t){c||i(1120)}Object.defineProperty(e,"__esModule",{value:!0});var o=i(932),a=i.n(o);for(var s in o)["default","default"].indexOf(s)<0&&function(t){i.d(e,t,function(){return o[t]})}(s);var l=i(1003),r=i.n(l),c=!1,u=i(223),p=n,d=u(a.a,r.a,!1,p,null,null);d.options.__file="src/views/guide/overview-en.vue",e.default=d.exports},669:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(679),o=function(t){return t&&t.__esModule?t:{default:t}}(n),a={env:o.default,filePath:"https://file.iviewui.com/file/",version:59,liveVersion:3};"development"===a.env&&(a.filePath="http://127.0.0.1:9800/overview/"),e.default=a},670:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={guide:[{title:"介绍",titleEn:"Introduction",path:"/guide/introduce"},{title:"实践",titleEn:"Practice",path:"/guide/case"},{title:"设计原则",titleEn:"Design Principles",path:"/guide/design"},{title:"布局",titleEn:"Navigation Examples",path:"/guide/layout"}],beforeComponents:[{title:"安装",titleEn:"Installation",path:"/guide/install"},{title:"快速上手",titleEn:"Quick Start",path:"/guide/start"},{title:"全局配置",titleEn:"Global Options",path:"/guide/global"},{title:"国际化",titleEn:"Internationalization",path:"/guide/i18n"},{title:"定制主题",titleEn:"Customize Theme",path:"/guide/theme"},{title:"iView Loader",titleEn:"iView Loader",path:"/guide/iview-loader"},{title:"更新日志",titleEn:"Change Log",path:"/guide/update"}],components:[{type:"Basic",title:"基础",list:[{title:"Color 色彩",path:"/components/color",img:"color.png",icon:"ios-color-fill-outline"},{title:"Font 字体",path:"/components/font",img:"font.png",icon:"ios-at-outline"},{title:"Button 按钮",path:"/components/button",img:"button.png",icon:"logo-youtube"},{title:"Icon 图标",path:"/components/icon",img:"icon.png",icon:"ios-heart-outline"}]},{type:"Layout",title:"布局",list:[{title:"Grid 栅格",path:"/components/grid",img:"grid.png",icon:"ios-grid-outline"},{title:"Layout 布局",path:"/components/layout",img:"layout-new.png",icon:"ios-browsers-outline"},{title:"Card 卡片",path:"/components/card",img:"card.png",icon:"ios-card-outline"},{title:"Collapse 折叠面板",path:"/components/collapse",img:"collapse.png",icon:"ios-albums-outline"},{title:"Split 面板分割",path:"/components/split",img:"split.png",icon:"ios-square-outline"},{title:"Divider 分割线",path:"/components/divider",img:"divider.png",icon:"ios-remove"},{title:"Cell 单元格",path:"/components/cell",img:"cell.png",icon:"ios-list-box-outline"}]},{type:"Navigation",title:"导航",list:[{title:"Menu 导航菜单",path:"/components/menu",img:"menu.png",icon:"ios-menu"},{title:"Tabs 标签页",path:"/components/tabs",img:"tabs.png",icon:"ios-more-outline"},{title:"Dropdown 下拉菜单",path:"/components/dropdown",img:"dropdown.png",icon:"md-arrow-dropdown"},{title:"Page 分页",path:"/components/page",img:"page.png",icon:"ios-book-outline"},{title:"Breadcrumb 面包屑",path:"/components/breadcrumb",img:"breadcrumb.png",icon:"ios-arrow-forward"},{title:"Badge 徽标数",path:"/components/badge",img:"badge.png",icon:"md-square"},{title:"Anchor 锚点",path:"/components/anchor",img:"anchor.png",icon:"md-link"},{title:"Steps 步骤条",path:"/components/steps",img:"steps.png",icon:"ios-checkmark-circle-outline"},{title:"LoadingBar 加载进度条",path:"/components/loading-bar",img:"loading-bar.png",icon:"ios-remove"}]},{type:"Form",title:"表单",list:[{title:"Input 输入框",path:"/components/input",img:"input.png",icon:"ios-create-outline"},{title:"Radio 单选框",path:"/components/radio",img:"radio.png",icon:"ios-radio-button-on"},{title:"Checkbox 多选框",path:"/components/checkbox",img:"checkbox.png",icon:"ios-checkbox-outline"},{title:"Switch 开关",path:"/components/switch",img:"switch.png",icon:"ios-switch"},{title:"Table 表格",path:"/components/table",img:"table.png",icon:"ios-grid"},{title:"Select 选择器",path:"/components/select",img:"select.png",icon:"ios-arrow-down"},{title:"AutoComplete 自动完成",path:"/components/auto-complete",img:"auto-complete.png",icon:"md-list"},{title:"Slider 滑块",path:"/components/slider",img:"slider.png",icon:"md-remove"},{title:"DatePicker 日期选择器",path:"/components/date-picker",img:"date-picker.png",icon:"ios-calendar-outline"},{title:"TimePicker 时间选择器",path:"/components/time-picker",img:"time-picker.png",icon:"ios-time-outline"},{title:"Cascader 级联选择",path:"/components/cascader",img:"cascader.png",icon:"ios-more-outline"},{title:"Transfer 穿梭框",path:"/components/transfer",img:"transfer.png",icon:"ios-swap"},{title:"InputNumber 数字输入框",path:"/components/input-number",img:"input-number.png",icon:"ios-calculator"},{title:"Rate 评分",path:"/components/rate",img:"rate.png",icon:"ios-star"},{title:"Upload 上传",path:"/components/upload",img:"upload.png",icon:"ios-cloud-upload-outline"},{title:"ColorPicker 颜色选择器",path:"/components/color-picker",img:"color-picker.png",icon:"ios-color-palette-outline"},{title:"Form 表单",path:"/components/form",img:"form.png",icon:"ios-list-box-outline"}]},{type:"View",title:"视图",list:[{title:"Alert 警告提示",path:"/components/alert",img:"alert.png",icon:"ios-information-circle-outline"},{title:"Message 全局提示",path:"/components/message",img:"message.png",icon:"ios-alert-outline"},{title:"Notice 通知提醒",path:"/components/notice",img:"notice.png",icon:"ios-notifications-outline"},{title:"Modal 对话框",path:"/components/modal",img:"modal.png",icon:"ios-text-outline"},{title:"Drawer 抽屉",path:"/components/drawer",img:"modal.png",icon:"md-list"},{title:"Tree 树形控件",path:"/components/tree",img:"tree.png",icon:"ios-git-network"},{title:"Tooltip 文字提示",path:"/components/tooltip",img:"tooltip.png",icon:"md-text"},{title:"Poptip 气泡提示",path:"/components/poptip",img:"poptip.png",icon:"ios-chatboxes-outline"},{title:"Progress 进度条",path:"/components/progress",img:"progress.png",icon:"ios-remove"},{title:"Avatar 头像",path:"/components/avatar",img:"avatar.png",icon:"ios-contact-outline"},{title:"Tag 标签",path:"/components/tag",img:"tag.png",icon:"md-pricetag"},{title:"Carousel 走马灯",path:"/components/carousel",img:"carousel.png",icon:"ios-film-outline"},{title:"Timeline 时间轴",path:"/components/timeline",img:"timeline.png",icon:"md-more"},{title:"Time 相对时间",path:"/components/time",img:"time.png",icon:"ios-clock-outline"}]},{type:"Chart",title:"图表",list:[{title:"Circle 进度环",path:"/components/circle",img:"circle.png",icon:"ios-radio-button-off"}]},{type:"Other",title:"其它",list:[{title:"Affix 图钉",path:"/components/affix",img:"affix.png",icon:"logo-pinterest"},{title:"BackTop 返回顶部",path:"/components/back-top",img:"back-top.png",icon:"ios-arrow-up"},{title:"Spin 加载中",path:"/components/spin",img:"spin.png",icon:"ios-loading"},{title:"Scroll 无限滚动",path:"/components/scroll",img:"scroll.png",icon:"ios-more"}]}],practice:[{title:"实践案例",titleEn:"Practical Cases",path:"/docs/practice/case"}],live:[{title:"最新课程",path:"/live"}]};e.default=n},671:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(670),a=n(o),s=i(669),l=n(s),r=i(76),c=n(r);e.default={inject:["app"],props:{activeKey:String},data:function(){return{search:"",navigateList:[],liveDot:!1,currentActiveKey:this.activeKey,searchText:this.$t("index.search"),notFoundText:this.$t("index.notFound"),lang:this.$lang}},watch:{activeKey:function(t){this.currentActiveKey=t},currentActiveKey:function(t){this.$emit("on-change",t)}},methods:{handleSearch:function(t){var e=this;"en-US"===this.lang&&(t+="-en"),this.search="",this.$refs.select.setQuery(""),this.$nextTick(function(){setTimeout(function(){e.$router.push(t)},300)})},handleSelect:function(t){var e=this;if("dev"!==t){var i="zh-CN"===this.lang?"":"-en";"donate"===t?c.default.$emit("on-donate-show"):"github"===t?window.open("https://github.com/iview/iview"):"guide"===t?this.$router.push(a.default.guide[0].path+i):"component"===t?this.$router.push(a.default.beforeComponents[0].path+i):"practice"===t?this.$router.push(a.default.practice[0].path+i):"cli"===t?this.$router.push("/cli"+i):"live"===t?this.$router.push("/live"):"iview-loader"===t?this.$router.push("/guide/iview-loader"+i):"iview-admin"===t?window.open("https://github.com/iview/iview-admin"):"iview-area"===t?window.open("https://github.com/iview/iview-area"):"iview-editor"===t&&window.open("https://github.com/iview/iview-editor"),this.$nextTick(function(){e.updateActiveNav()})}},updateActiveNav:function(){var t=["/guide/install","/guide/start","/guide/i18n","/guide/theme","/guide/iview-loader","/overview","/guide/update"],e=this.$route.path;e.indexOf("component")>-1||t.indexOf(e)>-1?this.currentActiveKey="component":e.indexOf("practice")>-1?this.currentActiveKey="practice":e.indexOf("live")>-1?this.currentActiveKey="live":this.currentActiveKey="guide"},handleChangeLang:function(){var t="zh-CN"===this.lang?"en-US":"zh-CN",e=this.$route.path.indexOf("-en")>-1?this.$route.path.split("-en")[0]:this.$route.path+"-en";c.default.$emit("on-change-lang",t,e)},handleVersion:function(t){1==t&&(window.location.href="http://v1.iviewui.com"),2==t&&(window.location.href="http://v2.iviewui.com")},handleGoToGitHub:function(){window.open("https://github.com/winningH/iview3-doc")},handleGoToMenu:function(t){return"zh-CN"===this.lang?t:t+"-en"},handleToggleSetting:function(){this.app.handleOpenSetting()}},created:function(){this.lang=this.$lang;for(var t=[],e=0;e<a.default.components.length;e++)for(var i=0;i<a.default.components[e].list.length;i++)t.push(a.default.components[e].list[i]);this.navigateList=t;var n=window.localStorage.getItem("liveVersion");this.liveDot=!n||n<l.default.liveVersion}}},672:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(76),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={methods:{handleClick:function(){o.default.$emit("on-donate-show")}}}},673:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(694),a=n(o),s=i(683),l=n(s);e.default={inject:["app"],components:{Navigate:a.default,navMenu:l.default},data:function(){return{list:[],need_api:!1,donate:!1,ask:!1,activeKey:"",lang:this.$lang,adCarousel:0,ad_index:this.app.ad_index}},methods:{handleModalClose:function(){this.donate=!1},handleAskClose:function(){this.ask=!1},updateActiveNav:function(){var t=["/guide/install","/guide/install-en","/guide/start","/guide/start-en","/guide/i18n","/guide/i18n-en","/guide/theme","/guide/theme-en","/guide/iview-loader","/guide/iview-loader-en","/overview","/overview-en","/guide/update","/guide/update-en","/guide/global","/guide/global-en"],e=this.$route.path;e.indexOf("component")>-1||t.indexOf(e)>-1?this.activeKey="component":e.indexOf("practice")>-1?this.activeKey="practice":e.indexOf("live")>-1?this.activeKey="live":this.activeKey="guide"},handleNavMenuChange:function(t){this.activeKey=t},handleClickLink:function(t){var e=document.getElementById(t).offsetTop;window.location.hash=t;var i=e+15;"API"===t&&(i-=150),window.scrollTo(0,i)},handleAsideAd:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&(this.ask=!0)},handleClickAsk:function(){}},created:function(){this.lang=this.$lang},mounted:function(){this.updateActiveNav();var t=this.$slots.default[0].elm.querySelectorAll(".example");if(t.length){this.need_api=!0;for(var e=0;e<t.length;e++){var i=t[e].querySelectorAll("header span a")[0].getAttribute("href").replace("#",""),n=t[e].querySelectorAll("header span a")[0].getAttribute("data-title").replace("#","");this.list.push({title:n,path:i})}}else{this.need_api=!1;for(var o=this.$slots.default[0].elm.querySelectorAll(".anchor"),a=0;a<o.length;a++){var s=o[a].querySelectorAll("h2")[0];if(s){var l=s.innerHTML,r=o[a].querySelectorAll("h2")[0].getAttribute("id");this.list.push({title:l,path:r})}}}}}},674:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return Math.random()>.5?-1:1}Object.defineProperty(e,"__esModule",{value:!0});var a=i(670),s=n(a),l=i(669),r=n(l),c=i(76),u=n(c),p=i(692),d=n(p);e.default={inject:["app"],components:{adSend:d.default},props:{type:{type:[String,Number]}},data:function(){return{navigate:s.default,showDot:!1,activeKey:this.$route.path,lang:this.$lang,showAd:!1,adCarousel:0,adCarouselShow:!1}},computed:{carouselList:function(){return(this.app.adList4||[]).sort(o)}},methods:{handleDonate:function(){u.default.$emit("on-donate-show")},handleSelect:function(t){var e=this;"en-US"===this.lang&&(t+="-en"),this.$nextTick(function(){e.$router.push(t)})},handleAd:function(){window.open("https://juejin.im/welcome/frontend?utm_source=iview&utm_medium=banner&utm_content=huoyue&utm_campaign=q4_website")},handleAdBmqb:function(){window.open("https://www.bmqb.com/a/jobs?from=iview")},handleBuy:function(t){"taobao"===t?window.open("https://detail.tmall.com/item.htm?id=559480603657"):"jd"===t?window.open("https://item.jd.com/12215519.html"):"video"===t?window.open("https://segmentfault.com/ls/1650000011074057"):"dangdang"===t&&window.open("http://product.dangdang.com/25180286.html")},handleGoToMenu:function(t){return"zh-CN"===this.lang?t:t+"-en"},handleAsideAd:function(t){},handleChangeAdAffix:function(t){this.adCarousel=0,this.adCarouselShow=t}},created:function(){this.lang=this.$lang;var t="zh-CN"===this.lang?this.$route.path:this.$route.path.split("-en")[0];this.activeKey=t},mounted:function(){var t=window.localStorage.getItem("version");this.showDot=!t||t<r.default.version}}},679:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="production"},680:function(t,e,i){t.exports=i.p+"e1cf12c07bf6458992569e67927d767e.png"},681:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Menu",{attrs:{mode:"horizontal","active-name":t.currentActiveKey},on:{"on-select":t.handleSelect}},[n("div",{staticClass:"wrapper-header-nav"},[n("router-link",{staticClass:"wrapper-header-nav-logo",attrs:{to:"/"}},[n("img",{attrs:{src:i(680)}})]),t._v(" "),n("div",{staticClass:"wrapper-header-nav-search"},[n("i-select",{ref:"select",attrs:{filterable:"",placeholder:t.searchText,"not-found-text":t.notFoundText},on:{"on-change":t.handleSearch},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},t._l(t.navigateList,function(e){return n("i-option",{key:e.path,attrs:{value:e.path}},["zh-CN"===t.lang?[t._v(t._s(e.title))]:[t._v(t._s(e.title.split(" ")[0]))]],2)}),1)],1),t._v(" "),n("div",{staticClass:"wrapper-header-nav-list"},[n("Menu-item",{attrs:{name:"guide",to:t.handleGoToMenu("/guide/introduce")}},[t._v("\n                "+t._s(t.$t("index.guide"))+"\n            ")]),t._v(" "),n("Menu-item",{attrs:{name:"component",to:t.handleGoToMenu("/guide/install")}},[t._v("\n                "+t._s(t.$t("index.component"))+"\n            ")]),t._v(" "),n("ButtonGroup",{attrs:{size:"small"}},[n("Button",{attrs:{icon:"logo-github"},on:{click:t.handleGoToGitHub}}),t._v(" "),n("Button",{attrs:{icon:"ios-settings"},on:{click:t.handleToggleSetting}}),t._v(" "),n("Button",{on:{click:t.handleChangeLang}},["zh-CN"===t.lang?[t._v("EN")]:[t._v("中文")]],2)],1)],1)],1)])},o=[];n._withStripped=!0;var a={render:n,staticRenderFns:o};e.default=a},682:function(t,e){},683:function(t,e,i){"use strict";function n(t){c||i(682)}Object.defineProperty(e,"__esModule",{value:!0});var o=i(671),a=i.n(o);for(var s in o)["default","default"].indexOf(s)<0&&function(t){i.d(e,t,function(){return o[t]})}(s);var l=i(681),r=i.n(l),c=!1,u=i(223),p=n,d=u(a.a,r.a,!1,p,null,null);d.options.__file="src/components/menu.vue",e.default=d.exports},684:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigate"},["zh-CN"===t.lang?[t._l(t.app.adList1,function(e){return n("a",{key:e.id,staticClass:"asd asd-mb",attrs:{href:e.link,target:"_blank"},on:{click:function(i){return t.handleAsideAd(e.id)}}},[n("div",{staticClass:"asd-main"},[n("img",{attrs:{src:e.img}})])])}),t._v(" "),n("Affix",{staticClass:"asd-affix",attrs:{"offset-top":64},on:{"on-change":t.handleChangeAdAffix}},[t.app.adList4.length&&t.adCarouselShow?n("Carousel",{attrs:{autoplay:"","autoplay-speed":5e3,"radius-dot":"",arrow:"never"},model:{value:t.adCarousel,callback:function(e){t.adCarousel=e},expression:"adCarousel"}},t._l(t.carouselList,function(e){return n("CarouselItem",{key:e.id},[n("a",{staticClass:"asd asd-mb",attrs:{href:e.link,target:"_blank"},on:{click:function(i){return t.handleAsideAd(e.id)}}},[n("div",{staticClass:"asd-main asd-main-no-opacity"},[n("img",{attrs:{src:e.img}})])])])}),1):t._e()],1)]:t._e(),t._v(" "),"guide"===t.type?n("Menu",{attrs:{width:"auto","active-name":t.activeKey}},t._l(t.navigate.guide,function(e){return n("Menu-item",{key:e.path,attrs:{name:e.path,to:t.handleGoToMenu(e.path)}},["zh-CN"===t.lang?[t._v(t._s(e.title))]:[t._v(t._s(e.titleEn))]],2)}),1):t._e(),t._v(" "),"component"===t.type?n("Menu",{attrs:{width:"auto","active-name":t.activeKey}},[t._l(t.navigate.beforeComponents,function(e){return n("Menu-item",{key:e.path,attrs:{name:e.path,to:t.handleGoToMenu(e.path),target:e.target}},["更新日志"!==e.title?["zh-CN"===t.lang?[t._v(t._s(e.title))]:[t._v(t._s(e.titleEn))]]:t._e(),t._v(" "),"更新日志"===e.title?[n("Badge",{attrs:{dot:t.showDot}},["zh-CN"===t.lang?[t._v(t._s(e.title))]:[t._v(t._s(e.titleEn))]],2)]:t._e()],2)}),t._v(" "),n("div",{staticClass:"navigate-group"},[t._v(t._s(t.$t("index.component")))]),t._v(" "),t._l(t.navigate.components,function(e){return n("Menu-group",{key:e.type,attrs:{title:"zh-CN"===t.lang?e.title:e.type}},t._l(e.list,function(e){return n("Menu-item",{key:e.path,attrs:{name:e.path,to:t.handleGoToMenu(e.path)}},[n("i",{staticClass:"ivu-icon",class:"ivu-icon-"+e.icon}),t._v(" "),"zh-CN"===t.lang?[t._v("\n                    "+t._s(e.title.split(" ")[0])+"\n                    "),n("span",{staticClass:"navigate-group-span"},[t._v(t._s(e.title.split(" ")[1]))])]:[t._v(t._s(e.title.split(" ")[0]))]],2)}),1)})],2):t._e(),t._v(" "),"practice"===t.type?n("Menu",{attrs:{width:"auto","active-name":t.activeKey}},t._l(t.navigate.practice,function(e){return n("Menu-item",{key:e.path,attrs:{name:e.path,to:t.handleGoToMenu(e.path)}},["zh-CN"===t.lang?[t._v(t._s(e.title))]:[t._v(t._s(e.titleEn))]],2)}),1):t._e(),t._v(" "),"live"===t.type?n("Menu",{attrs:{width:"auto","active-name":t.activeKey}},t._l(t.navigate.live,function(e){return n("Menu-item",{key:e.path,attrs:{name:e.path,to:t.handleGoToMenu(e.path)}},["zh-CN"===t.lang?[t._v(t._s(e.title))]:[t._v(t._s(e.titleEn))]],2)}),1):t._e(),t._v(" "),n("Modal",{attrs:{width:"900",title:"《Vue.js 实战》现已开售","footer-hide":""},model:{value:t.showAd,callback:function(e){t.showAd=e},expression:"showAd"}},[n("div",{staticClass:"i-article"},[n("Row",[n("Col",{attrs:{span:"10"}},[n("img",{staticStyle:{display:"block",width:"90%",margin:"0 auto"},attrs:{src:i(691)}})]),t._v(" "),n("Col",{attrs:{span:"14"}},[n("div",{staticStyle:{padding:"32px"}},[n("Alert",[t._v("\n                            《Vue.js 实战》\n                            "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",{staticStyle:{"margin-top":"6px"}},[t._v("本书由 Vue.js 作者 "),n("strong",[t._v("尤雨溪")]),t._v(" 作推荐序，TalkingData 研发副总裁马骥、W3cplus.com 站长 大漠、在线回声前端技术专家 justjavac（迷渡）、laravel-china.org 站长 Summer 联合推荐。")]),t._v(" "),n("p",{staticStyle:{"margin-top":"6px"}},[t._v("作者：TalkingData 可视化架构师 & iView 作者 梁灏（Aresn）")]),t._v(" "),n("p",{staticStyle:{"margin-top":"6px"}},[t._v("图书介绍：本书以 Vue.js 2.0 为基础，以项目实战的方式来引导读者渐进式学习 Vue.js。通过本书的学习，读者能够掌握 Vue.js 框架主要 API 的使用方法、自定义指令、组件开发、单文件组件、Render 函数、使用 Webpack 开发可复用的单页面富应用等。本书特点是示例丰富，侧重实战，适用于刚接触或即将接触 Vue.js 的开发者，也适用于对 Vue.js 有过开发经验，但需要进一步提升的开发者。")])])]),t._v(" "),n("div",{staticStyle:{"margin-top":"12px"}},[n("Row",{attrs:{gutter:16}},[n("i-col",{attrs:{span:"8"}},[n("Button",{attrs:{icon:"ios-cart",type:"warning",size:"large",long:""},on:{click:function(e){return t.handleBuy("taobao")}}},[t._v("天猫购买")])],1),t._v(" "),n("i-col",{attrs:{span:"8"}},[n("Button",{attrs:{icon:"ios-cart",type:"error",size:"large",long:""},on:{click:function(e){return t.handleBuy("jd")}}},[t._v("京东购买")])],1),t._v(" "),n("i-col",{attrs:{span:"8"}},[n("Button",{attrs:{icon:"ios-cart",type:"info",size:"large",long:""},on:{click:function(e){return t.handleBuy("dangdang")}}},[t._v("当当购买")])],1)],1)],1)],1)])],1)],1)])],2)},o=[];n._withStripped=!0;var a={render:n,staticRenderFns:o};e.default=a},685:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"wrapper"},[i("div",{staticClass:"wrapper-header"},[i("nav-menu",{attrs:{"active-key":t.activeKey},on:{"on-change":t.handleNavMenuChange}})],1),t._v(" "),i("div",{staticClass:"wrapper-container"},[i("Row",[i("i-col",{staticClass:"wrapper-navigate",attrs:{span:"4"}},[i("Navigate",{attrs:{type:t.activeKey}})],1),t._v(" "),i("i-col",{attrs:{span:"17"}},[i("div",{staticClass:"wrapper-content ivu-article"},[t._t("default")],2)]),t._v(" "),i("i-col",{attrs:{span:"3"}},[i("Affix",{attrs:{"offset-top":75}},[t.list.length?i("div",{staticClass:"catalogue"},[i("Anchor",{attrs:{"show-ink":""}},[t._l(t.list,function(t,e){return i("AnchorLink",{key:e,attrs:{href:"#"+t.path,title:t.title}})}),t._v(" "),t.need_api?i("AnchorLink",{attrs:{"scroll-offset":140,href:"#API",title:"API"}}):t._e()],2)],1):t._e(),t._v(" "),"zh-CN"===t.lang?[i("div",{staticStyle:{"margin-top":"20px"}}),t._v(" "),t._l(t.app.adList2,function(e){return i("a",{key:e.id,staticClass:"wrapper-aside wrapper-aside-no-padding",attrs:{href:e.link,target:"_blank"},on:{click:function(i){return t.handleAsideAd(e.id)}}},[i("img",{attrs:{src:e.img}})])})]:t._e()],2)],1)],1)],1)])])},o=[];n._withStripped=!0;var a={render:n,staticRenderFns:o};e.default=a},686:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"advertisement-ad",on:{click:function(e){return e.stopPropagation(),t.handleClick.apply(null,arguments)}}})},o=[];n._withStripped=!0;var a={render:n,staticRenderFns:o};e.default=a},687:function(t,e){},688:function(t,e){},689:function(t,e){},690:function(t,e){},691:function(t,e,i){t.exports=i.p+"95627fb77ea1c0e6d51d75cd2d63ccb9.png"},692:function(t,e,i){"use strict";function n(t){c||i(690)}Object.defineProperty(e,"__esModule",{value:!0});var o=i(672),a=i.n(o);for(var s in o)["default","default"].indexOf(s)<0&&function(t){i.d(e,t,function(){return o[t]})}(s);var l=i(686),r=i.n(l),c=!1,u=i(223),p=n,d=u(a.a,r.a,!1,p,null,null);d.options.__file="src/components/ad-send.vue",e.default=d.exports},693:function(t,e,i){"use strict";function n(t){c||i(689)}Object.defineProperty(e,"__esModule",{value:!0});var o=i(673),a=i.n(o);for(var s in o)["default","default"].indexOf(s)<0&&function(t){i.d(e,t,function(){return o[t]})}(s);var l=i(685),r=i.n(l),c=!1,u=i(223),p=n,d=u(a.a,r.a,!1,p,null,null);d.options.__file="src/components/article.vue",e.default=d.exports},694:function(t,e,i){"use strict";function n(t){c||(i(688),i(687))}Object.defineProperty(e,"__esModule",{value:!0});var o=i(674),a=i.n(o);for(var s in o)["default","default"].indexOf(s)<0&&function(t){i.d(e,t,function(){return o[t]})}(s);var l=i(684),r=i.n(l),c=!1,u=i(223),p=n,d=u(a.a,r.a,!1,p,"data-v-39279dfe",null);d.options.__file="src/components/navigate.vue",e.default=d.exports},932:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(669),a=n(o),s=i(670),l=n(s),r=i(693),c=n(r);e.default={components:{iArticle:c.default},props:{},data:function(){return{navigate:l.default,filePath:a.default.filePath,span:8}},computed:{},mounted:function(){this.updateSpin(),window.addEventListener("resize",this.updateSpin,!1)},beforeDestroy:function(){window.removeEventListener("resize",this.updateSpin,!1)},methods:{updateSpin:function(){var t=document.body.clientWidth;this.span=t>1440?6:8}}}}});