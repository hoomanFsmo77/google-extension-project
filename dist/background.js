/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascript/components/Storage/Storage.js":
/*!******************************************************!*\
  !*** ./src/javascript/components/Storage/Storage.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Storage = /*#__PURE__*/function () {
  function Storage() {
    _classCallCheck(this, Storage);
    this.name = '_ext_coin_';
  }
  _createClass(Storage, [{
    key: "createData",
    value: function createData(data) {
      localStorage.setItem(this.name, JSON.stringify(data));
    }
  }, {
    key: "getData",
    get: function get() {
      return JSON.parse(localStorage.getItem(this.name));
    }
  }]);
  return Storage;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./src/javascript/background.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNotification": () => (/* binding */ createNotification),
/* harmony export */   "removeNotification": () => (/* binding */ removeNotification)
/* harmony export */ });
/* harmony import */ var _components_Storage_Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Storage/Storage */ "./src/javascript/components/Storage/Storage.js");

var storage = new _components_Storage_Storage__WEBPACK_IMPORTED_MODULE_0__["default"]();
var interval;
var timerContainer = [];
var init = function init() {};
var createNotification = function createNotification(title, message, time, coinId) {
  interval = setInterval(function () {
    new Notification("".concat(title), {
      icon: './assets/logo_32.png',
      body: message
    });
  }, time * 1000);
  timerContainer.push({
    name: coinId,
    timer: interval
  });
};
var removeNotification = function removeNotification(coinId) {
  var targetIndex = timerContainer.findIndex(function (item) {
    return item.name === coinId;
  });
  clearInterval(timerContainer[targetIndex].timer);
  timerContainer.splice(targetIndex, 1);
};
init();

})();

/******/ })()
;