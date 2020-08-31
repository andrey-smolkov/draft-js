/*! For license information please see 9cea9ed2.2e443267.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(9),a=(n(181),n(180)),i={id:"advanced-topics-inline-styles",title:"Complex Inline Styles"},l={id:"advanced-topics-inline-styles",title:"Complex Inline Styles",description:"Within your editor, you may wish to provide a wide variety of inline style",source:"@site/../docs/Advanced-Topics-Inline-Styles.md",permalink:"/docs/advanced-topics-inline-styles",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/Advanced-Topics-Inline-Styles.md",lastUpdatedBy:"generatedunixname89002005287564",lastUpdatedAt:1589485835,sidebar:"docs",previous:{title:"Custom Block Components",permalink:"/docs/advanced-topics-block-components"},next:{title:"Nested Lists",permalink:"/docs/advanced-topics-nested-lists"}},c=[{value:"Model",id:"model",children:[]},{value:"Overlapping Styles",id:"overlapping-styles",children:[]},{value:"Mapping a style string to CSS",id:"mapping-a-style-string-to-css",children:[]}],u={rightToc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Within your editor, you may wish to provide a wide variety of inline style\nbehavior that goes well beyond the bold/italic/underline basics. For instance,\nyou may want to support variety with color, font families, font sizes, and more.\nFurther, your desired styles may overlap or be mutually exclusive."),Object(a.b)("p",null,"The ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/rich"}),"Rich Editor")," and\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/color"}),"Colorful Editor"),"\nexamples demonstrate complex inline style behavior in action."),Object(a.b)("h2",{id:"model"},"Model"),Object(a.b)("p",null,"Within the Draft model, inline styles are represented at the character level,\nusing an immutable ",Object(a.b)("inlineCode",{parentName:"p"},"OrderedSet")," to define the list of styles to be applied to\neach character. These styles are identified by string. (See ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference-character-metadata"}),"CharacterMetadata"),"\nfor details.)"),Object(a.b)("p",null,'For example, consider the text "Hello ',Object(a.b)("strong",{parentName:"p"},"world"),'". The first six characters of\nthe string are represented by the empty set, ',Object(a.b)("inlineCode",{parentName:"p"},"OrderedSet()"),". The final five\ncharacters are represented by ",Object(a.b)("inlineCode",{parentName:"p"},"OrderedSet.of('BOLD')"),". For convenience, we can\nthink of these ",Object(a.b)("inlineCode",{parentName:"p"},"OrderedSet")," objects as arrays, though in reality we aggressively\nreuse identical immutable objects."),Object(a.b)("p",null,"In essence, our styles are:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"[\n  [], // H\n  [], // e\n  // ...\n  ['BOLD'], // w\n  ['BOLD'], // o\n  // etc.\n];\n")),Object(a.b)("h2",{id:"overlapping-styles"},"Overlapping Styles"),Object(a.b)("p",null,"Now let's say that we wish to make the middle range of characters italic as well:\nHe",Object(a.b)("em",{parentName:"p"},"llo")," ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"wo"),"rld"),". This operation can be performed via the\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference-modifier"}),"Modifier")," API."),Object(a.b)("p",null,"The end result will accommodate the overlap by including ",Object(a.b)("inlineCode",{parentName:"p"},"'ITALIC'")," in the\nrelevant ",Object(a.b)("inlineCode",{parentName:"p"},"OrderedSet")," objects as well."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"[\n  [], // H\n  [], // e\n  ['ITALIC'], // l\n  // ...\n  ['BOLD', 'ITALIC'], // w\n  ['BOLD', 'ITALIC'], // o\n  ['BOLD'], // r\n  // etc.\n];\n")),Object(a.b)("p",null,"When determining how to render inline-styled text, Draft will identify\ncontiguous ranges of identically styled characters and render those characters\ntogether in styled ",Object(a.b)("inlineCode",{parentName:"p"},"span")," nodes."),Object(a.b)("h2",{id:"mapping-a-style-string-to-css"},"Mapping a style string to CSS"),Object(a.b)("p",null,"By default, ",Object(a.b)("inlineCode",{parentName:"p"},"Editor")," provides support for a basic list of inline styles:\n",Object(a.b)("inlineCode",{parentName:"p"},"'BOLD'"),", ",Object(a.b)("inlineCode",{parentName:"p"},"'ITALIC'"),", ",Object(a.b)("inlineCode",{parentName:"p"},"'UNDERLINE'"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"'CODE'"),". These are mapped to plain CSS\nstyle objects, which are used to apply styles to the relevant ranges."),Object(a.b)("p",null,"For your editor, you may define custom style strings to include with these\ndefaults, or you may override the default style objects for the basic styles."),Object(a.b)("p",null,"Within your ",Object(a.b)("inlineCode",{parentName:"p"},"Editor")," use case, you may provide the ",Object(a.b)("inlineCode",{parentName:"p"},"customStyleMap")," prop\nto define your style objects. (See\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/color"}),"Colorful Editor"),"\nfor a live example.)"),Object(a.b)("p",null,"For example, you may want to add a ",Object(a.b)("inlineCode",{parentName:"p"},"'STRIKETHROUGH'")," style. To do so, define a\ncustom style map:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import {Editor} from 'draft-js';\n\nconst styleMap = {\n  'STRIKETHROUGH': {\n    textDecoration: 'line-through',\n  },\n};\n\nclass MyEditor extends React.Component {\n  // ...\n  render() {\n    return (\n      <Editor\n        customStyleMap={styleMap}\n        editorState={this.state.editorState}\n        ...\n      />\n    );\n  }\n}\n")),Object(a.b)("p",null,"When rendered, the ",Object(a.b)("inlineCode",{parentName:"p"},"textDecoration: line-through")," style will be applied to all\ncharacter ranges with the ",Object(a.b)("inlineCode",{parentName:"p"},"STRIKETHROUGH")," style."))}s.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return n?o.a.createElement(b,l(l({ref:t},u),{},{components:n})):o.a.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";e.exports=n(182)},182:function(e,t,n){"use strict";var r=n(183),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function v(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||O}function g(){}function w(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||O}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var S=w.prototype=new g;S.constructor=w,r(S,v.prototype),S.isPureReactComponent=!0;var C={current:null},x=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,o={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,r)&&!E.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var u=Array(c),s=0;s<c;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:C.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var T=/\/+/g,P=[];function _(e,t,n,r){if(P.length){var o=P.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function R(e,t,n){return null==e?0:function e(t,n,r,o){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var c=!1;if(null===t)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case a:case i:c=!0}}if(c)return r(o,t,""===n?"."+D(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var s=n+D(l=t[u],u);c+=e(l,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=m&&t[m]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),u=0;!(l=t.next()).done;)c+=e(l=l.value,s=n+D(l,u++),r,o);else if("object"===l)throw r=""+t,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return c}(e,"",t,n)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function $(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,r,n,(function(e){return e})):null!=e&&(k(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+n)),r.push(e))}function M(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(T,"$&/")+"/"),R(e,L,t=_(t,a,r,o)),I(t)}var A={current:null};function U(){var e=A.current;if(null===e)throw Error(h(321));return e}var B={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return M(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;R(e,$,t=_(null,null,t,n)),I(t)},count:function(e){return R(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!k(e))throw Error(h(143));return e}},t.Component=v,t.Fragment=l,t.Profiler=u,t.PureComponent=w,t.StrictMode=c,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var o=r({},e.props),i=e.key,l=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,c=C.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)x.call(t,s)&&!E.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){u=Array(s);for(var p=0;p<s;p++)u[p]=arguments[p+2];o.children=u}return{$$typeof:a,type:e.type,key:i,ref:l,props:o,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=N,t.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return U().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,n){return U().useReducer(e,t,n)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},183:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,l,c=i(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))o.call(n,s)&&(c[s]=n[s]);if(r){l=r(n);for(var p=0;p<l.length;p++)a.call(n,l[p])&&(c[l[p]]=n[l[p]])}}return c}}}]);