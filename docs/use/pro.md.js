webpackJsonp([2],{1031:function(n,s){n.exports={content:["article",["p",["a",{title:null,href:"https://pro.ant.design"},"Ant Design pro"]," \u662f Ant Design \u63a8\u51fa\u7684\u4e00\u4e2a\u5f00\u7bb1\u5373\u7528\u7684\u4e2d\u53f0\u524d\u7aef/\u8bbe\u8ba1\u89e3\u51b3\u65b9\u6848\u3002"],["h2","\u6587\u4ef6\u8def\u5f84"],["p",["a",{title:null,href:"https://pro.ant.design"},"Ant Design pro v2.x"]," \u4f7f\u7528\u7684\u4e3a umi \u811a\u624b\u67b6\uff0c\u6587\u4ef6\u76ee\u5f55\u540c\u6837\u4e3a ",["code","src/pages"],", \u9996\u5148\u6211\u4eec\u9700\u8981\u5c06\u4e0b\u8f7d\u7684 Home \u6587\u4ef6\u5305\u76f4\u63a5\u590d\u5236\u5230 ",["code","pages"]," \u6587\u4ef6\u5939\u4e0b\u3002"],["h2","\u4fee\u6539\u8def\u7531"],["p","\u6587\u4ef6\u76ee\u5f55\uff1a  ",["code","config/router.config.js"],"\uff1b"],["p","\u4fee\u6539 ",["code","dashboard"]," \u7684\u8def\u7531\uff0c \u589e\u52a0 ",["code","Home"]," \u8def\u7531\uff1b"],["pre",{lang:"js",highlighted:'<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>\n<span class="token operator">+</span> <span class="token punctuation">{</span> path<span class="token punctuation">:</span> <span class="token string">\'/\'</span><span class="token punctuation">,</span> component<span class="token punctuation">:</span> <span class="token string">\'./Home\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// \u589e\u52a0 Home \u8def\u7531</span>\n  <span class="token comment" spellcheck="true">// user</span>\n  <span class="token punctuation">{</span>\n    path<span class="token punctuation">:</span> <span class="token string">\'/user\'</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment" spellcheck="true">// app</span>\n  <span class="token punctuation">{</span>\n<span class="token operator">-</span>   path<span class="token punctuation">:</span> <span class="token string">\'/\'</span><span class="token punctuation">,</span>\n<span class="token operator">+</span>   path<span class="token punctuation">:</span> <span class="token string">\'/dashboard\'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// \u66f4\u6539 dashboard \u8def\u7531\uff1b</span>\n    component<span class="token punctuation">:</span> <span class="token string">\'../layouts/BasicLayout\'</span><span class="token punctuation">,</span>\n    Routes<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'src/pages/Authorized\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    authority<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'admin\'</span><span class="token punctuation">,</span> <span class="token string">\'user\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>'},["code","export default [\n+ { path: '/', component: './Home' }, // \u589e\u52a0 Home \u8def\u7531\n  // user\n  {\n    path: '/user',\n    ...\n  },\n  // app\n  {\n-   path: '/',\n+   path: '/dashboard', // \u66f4\u6539 dashboard \u8def\u7531\uff1b\n    component: '../layouts/BasicLayout',\n    Routes: ['src/pages/Authorized'],\n    authority: ['admin', 'user'],\n    ...\n  },\n];"]],["h2","\u5b89\u88c5\u4f9d\u8d56"],["p","\u8be6\u7ec6\u53c2\u8003",["a",{title:null,href:"docs/use/getting-started-cn#\u5b89\u88c5\u4f9d\u8d56"},"\u5f00\u59cb\u4f7f\u7528\u91cc\u7684\u5b89\u88c5\u4f9d\u8d56"],";"],["h2","CSS Modules"],["p","\u591a\u65b9\u6848\u8bf7\u67e5\u770b ",["a",{title:null,href:"/docs/use/umi-cn#CSS-Modules"},"umi \u91cc\u4f7f\u7528\u7684 css module"],";"],["p","\u8fd9\u91cc\u63a8\u8350\u4f7f\u7528 css-module \u7684 global;"],["p","antMotionStyle.less \u5982\u4e0b"],["pre",{lang:null,highlighted:'<span class="token punctuation">:</span><span class="token keyword">global</span> {\n  <span class="token variable">@import</span> <span class="token string">\'./common.less\'</span><span class="token comment" spellcheck="true">;</span>\n  <span class="token variable">@import</span> <span class="token string">\'./custom.less\'</span><span class="token comment" spellcheck="true">;</span>\n  <span class="token variable">@import</span> <span class="token string">\'./content.less\'</span><span class="token comment" spellcheck="true">;</span>\n  <span class="token variable">@import</span> <span class="token string">\'./nav0.less\'</span><span class="token comment" spellcheck="true">;</span>\n  <span class="token variable">@import</span> <span class="token string">\'./banner0.less\'</span><span class="token comment" spellcheck="true">;</span>\n  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n}'},["code",":global {\n  @import './common.less';\n  @import './custom.less';\n  @import './content.less';\n  @import './nav0.less';\n  @import './banner0.less';\n  ...\n}"]],["h2","\u6682\u65f6\u5148\u5220\u9664\u6362\u80a4\u63d2\u4ef6"],["p","\u7531\u4e8e\u6362\u80a4\u63d2\u4ef6\u9700\u8981\u91cd\u65b0 build \u5168\u90e8\u7684 less, \u6682\u65f6\u4e0d\u652f\u6301 landing \u7684 less\uff0c\u6240\u4ee5\u6211\u4eec\u5148\u6682\u65f6\u5220\u9664\u6362\u80a4\u63d2\u4ef6\u3002"],["p","\u6587\u4ef6\u76ee\u5f55\uff1a",["code","config/config.js"],";"],["p","\u5220\u9664 ",["code","webpackPlugin"]," \u76f8\u5173\u7684\u4ee3\u7801\uff1a"],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// https://umijs.org/config/</span>\n<span class="token keyword">import</span> os <span class="token keyword">from</span> <span class="token string">\'os\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> pageRoutes <span class="token keyword">from</span> <span class="token string">\'./router.config\'</span><span class="token punctuation">;</span>\n<span class="token operator">-</span> <span class="token keyword">import</span> webpackPlugin <span class="token keyword">from</span> <span class="token string">\'./plugin.config\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> defaultSettings <span class="token keyword">from</span> <span class="token string">\'../src/defaultSettings\'</span><span class="token punctuation">;</span>\n\n<span class="token operator">...</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// add for transfer to umi</span>\n  <span class="token operator">...</span>\n  manifest<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    basePath<span class="token punctuation">:</span> <span class="token string">\'/\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n<span class="token operator">-</span> chainWebpack<span class="token punctuation">:</span> webpackPlugin<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","// https://umijs.org/config/\nimport os from 'os';\nimport pageRoutes from './router.config';\n- import webpackPlugin from './plugin.config';\nimport defaultSettings from '../src/defaultSettings';\n\n...\n\nexport default {\n  // add for transfer to umi\n  ...\n  manifest: {\n    basePath: '/',\n  },\n\n- chainWebpack: webpackPlugin,\n};"]]],meta:{order:3,category:{"zh-CN":"\u4f7f\u7528\u6559\u7a0b","en-US":"Tutorial"},title:{"zh-CN":"pro 2.x \u91cc\u4f7f\u7528","en-US":"Use in pro 2.x"},filename:"docs/use/pro.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u6587\u4ef6\u8def\u5f84",title:"\u6587\u4ef6\u8def\u5f84"},"\u6587\u4ef6\u8def\u5f84"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u4fee\u6539\u8def\u7531",title:"\u4fee\u6539\u8def\u7531"},"\u4fee\u6539\u8def\u7531"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5b89\u88c5\u4f9d\u8d56",title:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"]],["li",["a",{className:"bisheng-toc-h2",href:"#CSS-Modules",title:"CSS Modules"},"CSS Modules"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u6682\u65f6\u5148\u5220\u9664\u6362\u80a4\u63d2\u4ef6",title:"\u6682\u65f6\u5148\u5220\u9664\u6362\u80a4\u63d2\u4ef6"},"\u6682\u65f6\u5148\u5220\u9664\u6362\u80a4\u63d2\u4ef6"]]]}}});