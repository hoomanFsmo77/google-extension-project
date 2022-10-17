/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/popup.scss":
/*!******************************!*\
  !*** ./src/style/popup.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./manifest.json":
/*!***********************!*\
  !*** ./manifest.json ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./manifest.json";

/***/ }),

/***/ "./src/assets/fire.svg":
/*!*****************************!*\
  !*** ./src/assets/fire.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fire.svg";

/***/ }),

/***/ "./src/assets/login.svg":
/*!******************************!*\
  !*** ./src/assets/login.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/login.svg";

/***/ }),

/***/ "./src/assets/logo_128.png":
/*!*********************************!*\
  !*** ./src/assets/logo_128.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/logo_128.png";

/***/ }),

/***/ "./src/assets/logo_16.png":
/*!********************************!*\
  !*** ./src/assets/logo_16.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/logo_16.png";

/***/ }),

/***/ "./src/assets/logo_32.png":
/*!********************************!*\
  !*** ./src/assets/logo_32.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/logo_32.png";

/***/ }),

/***/ "./src/assets/logo_48.png":
/*!********************************!*\
  !*** ./src/assets/logo_48.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/logo_48.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/javascript/popup.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_popup_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/popup.scss */ "./src/style/popup.scss");
/* harmony import */ var _assets_logo_32_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/logo_32.png */ "./src/assets/logo_32.png");
/* harmony import */ var _assets_logo_16_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/logo_16.png */ "./src/assets/logo_16.png");
/* harmony import */ var _assets_logo_48_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/logo_48.png */ "./src/assets/logo_48.png");
/* harmony import */ var _assets_logo_128_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/logo_128.png */ "./src/assets/logo_128.png");
/* harmony import */ var _assets_login_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/login.svg */ "./src/assets/login.svg");
/* harmony import */ var _assets_fire_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/fire.svg */ "./src/assets/fire.svg");
/* harmony import */ var _manifest_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../manifest.json */ "./manifest.json");








////////////////////////////////////////////
var tab_tracer = document.querySelector('.tab_tracer');
var tab_content = document.getElementById('tab_content');

////////////////// close button
document.querySelectorAll('.close_btn').forEach(function (item) {
  item.addEventListener('click', function () {
    window.close();
  });
});

//////////////////// tab
var tabContentChange = function tabContentChange(index) {
  document.querySelectorAll('#tab_content section').forEach(function (item) {
    item.style.cssText = 'opacity:0;visibility: hidden';
  });
  console.log(tab_content[index]);
  tab_content.children[index].style.cssText = 'opacity:1;visibility: visible';
};
document.querySelectorAll('.tab').forEach(function (item, index) {
  item.addEventListener('click', function (e) {
    tabContentChange(index);
    if (index === 1) {
      tab_tracer.style.left = "184px";
    } else if (index === 0) {
      tab_tracer.style.left = "0px";
    }
  });
});

/////////////////// navbar
var nav_tracer = document.querySelector('.nav_tracer');
var hideSection = function hideSection(index) {
  document.querySelectorAll('.section_item').forEach(function (item) {
    item.style.opacity = '0';
    item.style.visibility = 'hidden';
  });
  document.querySelector('.section_container').children[index].style.opacity = '1';
  document.querySelector('.section_container').children[index].style.visibility = 'visible';
};
document.querySelectorAll('.nav_item').forEach(function (nav, index) {
  nav.addEventListener('click', function (e) {
    hideSection(index);
    switch (index) {
      case 0:
        {
          nav_tracer.style.left = '10%';
        }
        break;
      case 1:
        {
          nav_tracer.style.left = '45%';
        }
        break;
      case 2:
        {
          nav_tracer.style.left = '78%';
        }
    }
  });
});
})();

/******/ })()
;