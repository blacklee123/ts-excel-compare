(this["webpackJsonpts-excel-compare"]=this["webpackJsonpts-excel-compare"]||[]).push([[0],{339:function(e,t){},341:function(e,t){},372:function(e,t){},374:function(e,t){},375:function(e,t){},380:function(e,t){},382:function(e,t){},402:function(e,t){},418:function(e,t){},421:function(e,t){},451:function(e,t){},457:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=457},525:function(e,t,n){},529:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(295),c=n.n(o),r=n(61),l=n(303),i=n(588),h=n(587),d=n(589),j=n(591),b=n(172);const m=e=>new Promise(((t,n)=>{var a=new FileReader;a.onload=function(n){var a;const s=null===n||void 0===n||null===(a=n.target)||void 0===a?void 0:a.result,o=b.a(s,{type:"array"}),c=o.Sheets[o.SheetNames[0]],r={sheetname:o.SheetNames[0],items:b.b.sheet_to_json(c,{header:1}),sheets:o.SheetNames,workbook:o,fileList:[e]};t(r)},a.readAsArrayBuffer(e)})),u=(e,t)=>new Promise((function(n,a){var s=e.Sheets[t];n(b.b.sheet_to_json(s,{header:1}))})),w=(e,t)=>new Array(e).fill("").map((()=>new Array(t).fill(""))),f=[["Date","High","Low","Close","Volume","ask","cash"],["2019-07-08 00:00:00","11546.33","11469.53","11506.43","10.77073088","0","100000000"],["2019-07-07 19:00:00","11610.0","11432.32","11547.98","67.915214697","0","100000000"],["2019-07-07 18:00:00","11525.0","11426.74","11470.47","31.1094771869","0","100000000"],["2019-07-07 16:00:00","11254.97","11135.01","11201.6","23.5194946648","0","100000000"],["2019-07-07 15:00:00","11408.02","11189.0","11254.97","64.0821938629","0","100000000"]],x=[["Date","High","Low","Close","Volume","ask","cash"],["2019-07-08 00:00:00","11540.33","11469.53","11506.43","10.77073088","0","100000000"],["2019-07-07 19:00:00","11610.0","11432.32","11547.98","67.915214697","0","100000000"],["2019-07-07 18:00:00","11525.0","11426.74","11470.47","31.1094771869","0","100000000"],["2019-07-07 16:00:00","11254.97","11135.01","11201.6","23.5194946648","0","100000000"],["2019-07-07 15:00:00","11408.02","11189.0","11254.97","64.0821938629","0","100000000"]],O=[["Date","High","Low","Close","Volume","bid","ask","Buy"],["2019-07-08 00:00:00","11549.33","11469.53","11506.43","10.77073088","0","100000000"],["2019-07-07 23:00:00","11482.72","11423.0","11475.07","32.99655899","6","0","3"],["2019-07-07 19:00:00","11610.0","11432.32","11547.98","67.915214697","6","0","9"],["2019-07-07 18:10:00","11525.0","11426.74","11470.47","31.1094771869","6","0","9"],["2019-07-07 17:20:00","11566.23","11211.56","11503.4","121.5246740453","0","9"],["2019-07-07 16:00:00","11254.97","11135.01","11200.6","23.5194946648","6","0","9"],["2019-07-07 15:00:00","11408.02","11189.0","11254.97","64.0821938629","6","1","9"]],p=n(218);var g=n(590),v=n(586),S=n(209),k=n(593),y=n(166),C=n(17);var _=e=>{let{title:t,data:n,onFileSelectChange:a,onSheetSelectChange:s}=e;const o={fileList:n.fileList,maxCount:1,onRemove:e=>{a(null)},beforeUpload:e=>(a(e),!1)};return Object(C.jsxs)(g.b,{direction:"vertical",style:{width:"100%"},children:[Object(C.jsxs)(v.a,{...o,children:[t,Object(C.jsx)(S.a,{icon:Object(C.jsx)(k.a,{}),children:"Select File"})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)(y.a,{data:n.items,settings:{minRows:12,minCols:4,colHeaders:!0,rowHeaders:!0,height:305,stretchH:"all",licenseKey:"non-commercial-and-evaluation"}}),n.workbook&&Object(C.jsx)(h.a,{type:"card",tabPosition:"bottom",items:n.sheets.map((e=>({label:e,key:e}))),activeKey:n.sheetname,onChange:e=>s(e)})]})]})};var D=e=>{let{onDiff:t,onSample:n,onReset:a}=e;return Object(C.jsxs)(g.b,{direction:"vertical",style:{width:"100%"},children:[Object(C.jsxs)(S.a,{block:!0,onClick:n,children:[" ","< Sample >"," "]}),Object(C.jsxs)(S.a,{block:!0,ref:s.a.createRef(),type:"primary",onClick:t,children:[" ",">> Diff <<"," "]}),Object(C.jsxs)(S.a,{block:!0,ref:s.a.createRef(),type:"default",onClick:a,children:[" "," << reset >> "," "]})]})};var R=class{constructor(e,t){this.value=void 0,this.instance=void 0,this.value=e,this.instance=t}getCell(e,t){const n=this.instance.getDataAtCell(t,e);return null===n?n:void 0===n?"":""+n}getValue(){return this.value}};const T=n(218);function F(e,t,n,a,s,o,c){const r=new R(o,e),l=new T.SimpleView,i=T.DiffRender.renderCell(r,l,a,n);t.className=i.category,t.innerHTML=i.pretty_value}var H=e=>{let{data:t}=e;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{style:{fontSize:24,textAlign:"center"},children:"\u6bd4\u8f83\u7ed3\u679c"}),Object(C.jsx)(y.a,{data:t,settings:{minSpareCols:0,minSpareRows:0,colHeaders:!1,contextMenu:!1,rowHeaders:!1,readOnly:!0,renderAllRows:!0,stretchH:"all",licenseKey:"non-commercial-and-evaluation"},renderer:F,className:"diffhandsontable"})]})};let L=function(e){return e.parent="parent",e.local="local",e.remote="remote",e}({});const V={sheetname:"Sheet1",sheets:[],items:w(12,8),workbook:void 0,fileList:[]};var A=function(){const[e,t]=Object(a.useState)(V),[n,s]=Object(a.useState)(V),[o,c]=Object(a.useState)([[],""]),r=(e,n)=>{null===e?n===L.local?t(V):s(V):m(e).then((e=>{n===L.local?t(e):s(e)}))},l=(a,o)=>{var c="left"===o?e.workbook:n.workbook;c&&u(c,a).then((c=>{"left"===o?t({...e,sheetname:a,items:c}):s({...n,sheetname:a,items:c})}))};return Object(C.jsxs)(d.a,{gutter:[24,24],style:{padding:"4px"},children:[Object(C.jsx)(j.a,{span:11,children:Object(C.jsx)(_,{title:"Local: ",data:e,onFileSelectChange:e=>r(e,L.local),onSheetSelectChange:e=>l(e,L.local)})}),Object(C.jsx)(j.a,{span:2,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(C.jsx)(D,{onDiff:()=>{c(((e,t)=>{const n=new p.TableView(e),a=new p.TableView(t);n.trim(),a.trim();const s=p.compareTables(n,a).align(),o=new p.TableView([]),c=new p.CompareFlags;c.show_unchanged=!1,c.always_show_header=!0,c.always_show_order=!0,c.never_show_order=!1,c.unchanged_context=3,new p.TableDiff(s,c).hilite(o);const r=new p.DiffRender;r.render(o);const l=r.html();return[o.data,l]})(e.items,n.items))},onSample:()=>{t({...e,items:x}),s({...n,items:O})},onReset:()=>{t(V),s(V),c([[],""])}})}),Object(C.jsx)(j.a,{span:11,children:Object(C.jsx)(_,{title:"Remote: ",data:n,onFileSelectChange:e=>r(e,L.remote),onSheetSelectChange:e=>l(e,L.remote)})}),o[0].length>0&&Object(C.jsx)(j.a,{span:24,children:Object(C.jsx)(H,{data:o[0]})})]})};const N={sheetname:"Sheet1",sheets:[],items:w(12,8),workbook:void 0,fileList:[]};var P=function(){const[e,t]=Object(a.useState)(N),[n,s]=Object(a.useState)(N),[o,c]=Object(a.useState)(N),[r,l]=Object(a.useState)([[],""]),h=(e,n)=>{if(null===e)switch(n){case L.local:s(N);break;case L.remote:c(N);break;case L.parent:t(N)}else m(e).then((e=>{switch(n){case L.local:s(e);break;case L.remote:c(e);break;case L.parent:t(e)}}))},b=(a,r)=>{let l;switch(r){case L.local:l=n.workbook;break;case L.remote:l=o.workbook;break;case L.parent:l=e.workbook}l&&u(l,a).then((l=>{switch(r){case L.local:s({...n,sheetname:a,items:l});break;case L.remote:c({...o,sheetname:a,items:l});break;case L.parent:t({...e,sheetname:a,items:l})}}))};return Object(C.jsx)(i.a,{style:{minHeight:"100vh"},children:Object(C.jsx)(i.a.Content,{children:Object(C.jsxs)(d.a,{gutter:[24,24],style:{padding:"4px"},children:[Object(C.jsx)(j.a,{span:8,children:Object(C.jsx)(_,{title:"Parent: ",data:e,onFileSelectChange:e=>h(e,L.parent),onSheetSelectChange:e=>b(e,L.parent)})}),Object(C.jsx)(j.a,{span:8,children:Object(C.jsx)(_,{title:"Local: ",data:n,onFileSelectChange:e=>h(e,L.local),onSheetSelectChange:e=>b(e,L.local)})}),Object(C.jsx)(j.a,{span:8,children:Object(C.jsx)(_,{title:"Remote: ",data:o,onFileSelectChange:e=>h(e,L.remote),onSheetSelectChange:e=>b(e,L.remote)})}),Object(C.jsx)(j.a,{span:24,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(C.jsx)(D,{onDiff:()=>{l(((e,t,n)=>{const a=new p.TableView(e),s=new p.TableView(t),o=new p.TableView(n);a.trim(),s.trim(),o.trim();const c=p.compareTables3(a,s,o).align(),r=new p.TableView([]),l=new p.CompareFlags;l.show_unchanged=!1,l.always_show_header=!0,l.always_show_order=!0,l.never_show_order=!1,l.unchanged_context=3,new p.TableDiff(c,l).hilite(r);const i=new p.DiffRender;i.render(r);const h=i.html();return[r.data,h]})(e.items,n.items,o.items))},onSample:()=>{t({...e,items:f}),s({...n,items:x}),c({...o,items:O})},onReset:()=>{t(N),s(N),c(N),l([[],""])}})}),r[0].length>0&&Object(C.jsx)(j.a,{span:24,children:Object(C.jsx)(H,{data:r[0]})})]})})})};n(525);var B=function(){return Object(C.jsx)(i.a,{style:{minHeight:"100vh"},children:Object(C.jsx)(i.a.Content,{children:Object(C.jsxs)(h.a,{centered:!0,type:"card",children:[Object(C.jsx)(h.a.TabPane,{tab:"Double Diff",children:Object(C.jsx)(A,{})},"1"),Object(C.jsx)(h.a.TabPane,{tab:"Triple Diff",children:Object(C.jsx)(P,{})},"2")]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(526),n(527);var M=n(302);Object(M.a)(),c.a.createRoot(document.getElementById("root")).render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(r.a,{locale:l.a,componentSize:"middle",children:Object(C.jsx)(B,{})})})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()})).catch((e=>{console.error(e.message)}))}},[[529,1,2]]]);
//# sourceMappingURL=main.9d930b4f.chunk.js.map