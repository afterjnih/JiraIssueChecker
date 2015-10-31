(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Issue = (function () {
  function Issue(userId, password) {
    _classCallCheck(this, Issue);

    this.userId = userId;
    this.password = password;
  }

  _createClass(Issue, [{
    key: "totalIssue",
    value: function totalIssue() {
      return new Date().getSeconds().toString();
    }
  }]);

  return Issue;
})();

exports["default"] = Issue;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
/**
 * Created by koji on 15/10/31.
 */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Issue = require('./Issue');

var _Issue2 = _interopRequireDefault(_Issue);

//class Issue {
//  constructor(userId, password){
//    this.userId = userId;
//    this.password = password;
//  }
//
//  totalIssue(){
//    return (new Date()).getSeconds().toString()
//  }
//}

var issue = new _Issue2['default']('koji', 'hoge');
onInit();
window.setInterval(onInit, 4000);
function onInit() {
  //var issue = new Issue('koji', 'hoge');
  chrome.browserAction.setBadgeText({ text: issue.totalIssue() });
  //  chrome.browserAction.setBadgeText({text: "1234"});
  //  chrome.browserAction.setBadgeText({text: (new Date()).getSeconds().toString()});
  //  console.log('timeout2');
}

},{"./Issue":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva29qaS9kZXZlbG9wbWVudC9KaXJhSXNzdWVDaGVja2VyL2pzL3NyYy9Jc3N1ZS5qcyIsIi9Vc2Vycy9rb2ppL2RldmVsb3BtZW50L0ppcmFJc3N1ZUNoZWNrZXIvanMvc3JjL2JhY2tncm91bmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQXFCLEtBQUs7QUFDYixXQURRLEtBQUssQ0FDWixNQUFNLEVBQUUsUUFBUSxFQUFDOzBCQURWLEtBQUs7O0FBRXRCLFFBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLFFBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0dBQzFCOztlQUprQixLQUFLOztXQU1kLHNCQUFFO0FBQ1YsYUFBTyxBQUFDLElBQUksSUFBSSxFQUFFLENBQUUsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUE7S0FDNUM7OztTQVJrQixLQUFLOzs7cUJBQUwsS0FBSzs7Ozs7Ozs7Ozs7cUJDR1IsU0FBUzs7Ozs7Ozs7Ozs7Ozs7O0FBWTNCLElBQUksS0FBSyxHQUFHLHVCQUFVLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN0QyxNQUFNLEVBQUUsQ0FBQztBQUNULE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2pDLFNBQVMsTUFBTSxHQUFFOztBQUVmLFFBQU0sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBQyxDQUFDLENBQUM7Ozs7Q0FJL0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXNzdWV7XG4gIGNvbnN0cnVjdG9yKHVzZXJJZCwgcGFzc3dvcmQpe1xuICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xuICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgfVxuXG4gIHRvdGFsSXNzdWUoKXtcbiAgICByZXR1cm4gKG5ldyBEYXRlKCkpLmdldFNlY29uZHMoKS50b1N0cmluZygpXG4gIH1cbn1cblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGtvamkgb24gMTUvMTAvMzEuXG4gKi9cbmltcG9ydCBJc3N1ZSBmcm9tICcuL0lzc3VlJztcbi8vY2xhc3MgSXNzdWUge1xuLy8gIGNvbnN0cnVjdG9yKHVzZXJJZCwgcGFzc3dvcmQpe1xuLy8gICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG4vLyAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4vLyAgfVxuLy9cbi8vICB0b3RhbElzc3VlKCl7XG4vLyAgICByZXR1cm4gKG5ldyBEYXRlKCkpLmdldFNlY29uZHMoKS50b1N0cmluZygpXG4vLyAgfVxuLy99XG5cbnZhciBpc3N1ZSA9IG5ldyBJc3N1ZSgna29qaScsICdob2dlJyk7XG5vbkluaXQoKTtcbndpbmRvdy5zZXRJbnRlcnZhbChvbkluaXQsIDQwMDApO1xuZnVuY3Rpb24gb25Jbml0KCl7XG4gIC8vdmFyIGlzc3VlID0gbmV3IElzc3VlKCdrb2ppJywgJ2hvZ2UnKTtcbiAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0KHt0ZXh0OiBpc3N1ZS50b3RhbElzc3VlKCl9KTtcbi8vICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoe3RleHQ6IFwiMTIzNFwifSk7XG4vLyAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0KHt0ZXh0OiAobmV3IERhdGUoKSkuZ2V0U2Vjb25kcygpLnRvU3RyaW5nKCl9KTtcbi8vICBjb25zb2xlLmxvZygndGltZW91dDInKTtcbn1cblxuIl19
