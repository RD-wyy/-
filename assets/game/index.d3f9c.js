System.register("chunks:///_virtual/ExitGame.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var o,n,e,i,c;return{setters:[function(t){o=t.inheritsLoose},function(t){n=t.cclegacy,e=t._decorator,i=t.Button,c=t.Component}],execute:function(){var r;n._RF.push({},"ea0d1OleThPZ7NOFyr2KW8h","ExitGame",void 0);var s=e.ccclass;e.property,t("ExitGame",s("NewComponent")(r=function(t){function n(){return t.apply(this,arguments)||this}o(n,t);var e=n.prototype;return e.onButtonClick=function(){window.location.href="https://tidenews.com.cn/video.html?id=2808344&duration=183&isVertical=1&fsize=15425724&width=720&height=1280&video_h5_mode=1"},e.start=function(){this.node.addComponent(i).node.on("click",this.onButtonClick,this)},n}(c))||r);n._RF.pop()}}}));

System.register("chunks:///_virtual/game",["./ExitGame.ts","./LoadScenes.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/LoadScenes.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,o,r,i,c,a,s,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,o=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){i=e.cclegacy,c=e._decorator,a=e.director,s=e.Button,u=e.Component}],execute:function(){var l,p,d;i._RF.push({},"8fd5eSXGTBLy7dv8RFQCz+8","LoadScenes",void 0);var f=c.ccclass,h=c.property;e("LoadScenes",f("LoadScenes")((d=t((p=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return t=e.call.apply(e,[this].concat(i))||this,o(t,"targetScene",d,r(t)),t}n(t,e);var i=t.prototype;return i.onButtonClick=function(){a.loadScene(this.targetScene)},i.start=function(){this.node.addComponent(s).node.on("click",this.onButtonClick,this)},t}(u)).prototype,"targetScene",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"content"}}),l=p))||l);i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/game', 'chunks:///_virtual/game'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});