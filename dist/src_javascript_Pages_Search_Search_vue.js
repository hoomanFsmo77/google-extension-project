"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_javascript_Pages_Search_Search_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/Pages/Search/Search.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/Pages/Search/Search.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_components_Search_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/components/Search.scss */ "./src/style/components/Search.scss");
/* harmony import */ var _components_Search_Header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Search/Header.vue */ "./src/javascript/components/Search/Header.vue");
/* harmony import */ var _components_Search_TrendingCard_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Search/TrendingCard.vue */ "./src/javascript/components/Search/TrendingCard.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }




////////////////////////////////////////////////////////////////////////

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Search',
  props: ['searchData', 'popularData'],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var mode = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(false);
    var trendingCoinList = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)([]);
    var bitCoinPrice = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(1);
    Promise.all([props.searchData, props.popularData]).then(function (result) {
      trendingCoinList.value = result[0].trendingData;
      bitCoinPrice.value = result[1].bitcoinPrice;
      mode.value = true;
    });
    var __returned__ = {
      get props() {
        return props;
      },
      set props(v) {
        v, _readOnlyError("props");
      },
      get mode() {
        return mode;
      },
      set mode(v) {
        mode = v;
      },
      get trendingCoinList() {
        return trendingCoinList;
      },
      set trendingCoinList(v) {
        trendingCoinList = v;
      },
      get bitCoinPrice() {
        return bitCoinPrice;
      },
      set bitCoinPrice(v) {
        bitCoinPrice = v;
      },
      Header: _components_Search_Header_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      TrendingCard: _components_Search_TrendingCard_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      ref: vue__WEBPACK_IMPORTED_MODULE_3__.ref
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/components/CloseButton.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/components/CloseButton.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CloseButton",
  methods: {
    closeButton: function closeButton() {
      window.close();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/components/Search/Header.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/components/Search/Header.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CloseButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CloseButton.vue */ "./src/javascript/components/CloseButton.vue");
/* harmony import */ var _composables_useSearch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../composables/useSearch.js */ "./src/javascript/composables/useSearch.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Header',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var _useSearch = (0,_composables_useSearch_js__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      searchInputHandler = _useSearch.searchInputHandler,
      active = _useSearch.active,
      searchResult = _useSearch.searchResult,
      searchBox = _useSearch.searchBox,
      selectedCoinHandler = _useSearch.selectedCoinHandler;
    var __returned__ = {
      searchInputHandler: searchInputHandler,
      active: active,
      searchResult: searchResult,
      searchBox: searchBox,
      selectedCoinHandler: selectedCoinHandler,
      CloseButton: _CloseButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      get useSearch() {
        return _composables_useSearch_js__WEBPACK_IMPORTED_MODULE_1__["default"];
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/components/Search/TrendingCard.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/components/Search/TrendingCard.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_components_Search_TrendingCard_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/components/Search.TrendingCard.scss */ "./src/style/components/Search.TrendingCard.scss");
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'TrendingCard',
  props: ['icon', 'coinName', 'abbName', 'currentPrice', 'rank'],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var __returned__ = {
      get props() {
        return props;
      },
      set props(v) {
        v, _readOnlyError("props");
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/Pages/Search/Search.vue?vue&type=template&id=5871a23b":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/Pages/Search/Search.vue?vue&type=template&id=5871a23b ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_fire_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/fire.svg */ "./src/assets/fire.svg");


var _hoisted_1 = {
  "class": "w-100 h-100 section_item",
  id: "search_section"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "pt-3 px-3 d-flex align-items-center mb-3 text-muted gap-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Trending Now "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_fire_svg__WEBPACK_IMPORTED_MODULE_1__,
  width: "20",
  alt: ""
})], -1 /* HOISTED */);
var _hoisted_3 = {
  "class": "trending_container pe-4 pt-2 ps-2 pb-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Header"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", null, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [$setup.mode ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.trendingCoinList, function (coin, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["TrendingCard"], {
      key: index,
      "abb-name": coin.item.symbol,
      "coin-name": coin.item.id,
      icon: coin.item.small,
      "current-price": Number(coin.item.price_btc * $setup.bitCoinPrice).toFixed(3),
      rank: coin.item.market_cap_rank
    }, null, 8 /* PROPS */, ["abb-name", "coin-name", "icon", "current-price", "rank"]);
  }), 128 /* KEYED_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/components/CloseButton.vue?vue&type=template&id=1b6d9aec":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/components/CloseButton.vue?vue&type=template&id=1b6d9aec ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-x-lg",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
})], -1 /* HOISTED */);
var _hoisted_2 = [_hoisted_1];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.closeButton && $options.closeButton.apply($options, arguments);
    }),
    "class": "pointer close_btn d-flex align-items-center p-2"
  }, _hoisted_2);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/components/Search/Header.vue?vue&type=template&id=1aeb0934":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/components/Search/Header.vue?vue&type=template&id=1aeb0934 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

var _hoisted_1 = {
  "class": "d-flex gap-2 align-items-center"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-search",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
})], -1 /* HOISTED */);
var _hoisted_3 = {
  "class": "result_box position-absolute overflow-auto"
};
var _hoisted_4 = {
  "class": "m-0 px-3 py-2 flex-column gap-2 list-unstyled",
  ref: "searchBox"
};
var _hoisted_5 = ["data-id"];
var _hoisted_6 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("header", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.active && 'active', "w-100 px-3 py-2 d-flex justify-content-between align-items-center flex-row-reverse position-relative"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["CloseButton"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    onKeyup: _cache[0] || (_cache[0] = function ($event) {
      return $setup.searchInputHandler($event);
    }),
    id: "search_input",
    type: "text",
    placeholder: "search coin..."
  }, null, 32 /* HYDRATE_EVENTS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_4, [$setup.active ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.searchResult, function (coin, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.selectedCoinHandler($event);
      }, ["self"])),
      key: index,
      "data-id": coin.id,
      "class": "px-4 d-flex align-items-center gap-2 pointer blue-hover"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: coin.image,
      width: "20",
      alt: ""
    }, null, 8 /* PROPS */, _hoisted_6), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(coin.id), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_5);
  }), 128 /* KEYED_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 512 /* NEED_PATCH */)])], 2 /* CLASS */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/components/Search/TrendingCard.vue?vue&type=template&id=cb81f588":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/components/Search/TrendingCard.vue?vue&type=template&id=cb81f588 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

var _hoisted_1 = {
  "class": "trending_card w-100 m-2 py-3 px-2 d-flex flex-column gap-2 align-items-center rounded-2 my-0"
};
var _hoisted_2 = {
  "class": "p-2 border border-secondary rounded-circle"
};
var _hoisted_3 = ["src"];
var _hoisted_4 = {
  "class": "d-flex flex-column justify-content-center align-items-center"
};
var _hoisted_5 = {
  "class": "fs-6 fw-bold coin_name text-center"
};
var _hoisted_6 = {
  "class": "symbol text-green"
};
var _hoisted_7 = {
  "class": "text-muted d-flex align-items-center price"
};
var _hoisted_8 = {
  "class": "d-inline"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "d-inline mx-1 fs-09"
}, "|", -1 /* HOISTED */);
var _hoisted_10 = {
  "class": "mx-1 rank"
};
var _hoisted_11 = ["data-id"];
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  fill: "currentColor",
  "class": "bi bi-heart-fill mx-1",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
})], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $props.icon,
    width: "40",
    "class": "img-fluid",
    alt: ""
  }, null, 8 /* PROPS */, _hoisted_3)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.coinName), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.abbName), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.currentPrice) + "$", 1 /* TEXT */), _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_10, "Rank:" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.rank), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "data-id": $props.coinName,
    "class": "follow_btn border-0 bg-dark text-light mt-4 mb-2 pointer"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Follow "), _hoisted_12], 8 /* PROPS */, _hoisted_11)])]);
}

/***/ }),

/***/ "./src/javascript/composables/useSearch.js":
/*!*************************************************!*\
  !*** ./src/javascript/composables/useSearch.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");



var timeout = null;
var delay = 1500;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var active = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
  var searchResult = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
  var searchBox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
  var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var searchInputHandler = function searchInputHandler(e) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(function () {
      searchAction(e);
    }, delay);
  };
  var searchAction = function searchAction(e) {
    var value = e.target.value.toLowerCase();
    if (isNaN(value)) {
      axios__WEBPACK_IMPORTED_MODULE_2__["default"].get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&price_change_percentage=1h').then(function (response) {
        return response.data.filter(function (coin) {
          return coin.name.toLowerCase().startsWith(value.trim());
        });
      }).then(function (target) {
        searchBox.innerHtml = '';
        if (target.length > 0) {
          active.value = true;
          searchResult.value = target;
        } else {
          active.value = false;
        }
      });
    } else {
      active.value = false;
    }
  };
  var selectedCoinHandler = function selectedCoinHandler(e) {
    router.push({
      name: 'detail',
      params: {
        id: e.target.dataset.id
      }
    });
  };
  return {
    searchInputHandler: searchInputHandler,
    active: active,
    searchResult: searchResult,
    searchBox: searchBox,
    selectedCoinHandler: selectedCoinHandler
  };
});

/***/ }),

/***/ "./src/style/components/Search.TrendingCard.scss":
/*!*******************************************************!*\
  !*** ./src/style/components/Search.TrendingCard.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style/components/Search.scss":
/*!******************************************!*\
  !*** ./src/style/components/Search.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/javascript/Pages/Search/Search.vue":
/*!************************************************!*\
  !*** ./src/javascript/Pages/Search/Search.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Search_vue_vue_type_template_id_5871a23b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search.vue?vue&type=template&id=5871a23b */ "./src/javascript/Pages/Search/Search.vue?vue&type=template&id=5871a23b");
/* harmony import */ var _Search_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search.vue?vue&type=script&setup=true&lang=js */ "./src/javascript/Pages/Search/Search.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var D_WEB_Projects_Landing_page_apps_2_google_extension_project_refactore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_WEB_Projects_Landing_page_apps_2_google_extension_project_refactore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Search_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Search_vue_vue_type_template_id_5871a23b__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/javascript/Pages/Search/Search.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/javascript/components/CloseButton.vue":
/*!***************************************************!*\
  !*** ./src/javascript/components/CloseButton.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CloseButton_vue_vue_type_template_id_1b6d9aec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CloseButton.vue?vue&type=template&id=1b6d9aec */ "./src/javascript/components/CloseButton.vue?vue&type=template&id=1b6d9aec");
/* harmony import */ var _CloseButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CloseButton.vue?vue&type=script&lang=js */ "./src/javascript/components/CloseButton.vue?vue&type=script&lang=js");
/* harmony import */ var D_WEB_Projects_Landing_page_apps_2_google_extension_project_refactore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_WEB_Projects_Landing_page_apps_2_google_extension_project_refactore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CloseButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CloseButton_vue_vue_type_template_id_1b6d9aec__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/javascript/components/CloseButton.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/javascript/components/Search/Header.vue":
/*!*****************************************************!*\
  !*** ./src/javascript/components/Search/Header.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_1aeb0934__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=1aeb0934 */ "./src/javascript/components/Search/Header.vue?vue&type=template&id=1aeb0934");
/* harmony import */ var _Header_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&setup=true&lang=js */ "./src/javascript/components/Search/Header.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var D_WEB_Projects_Landing_page_apps_2_google_extension_project_refactore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_WEB_Projects_Landing_page_apps_2_google_extension_project_refactore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Header_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Header_vue_vue_type_template_id_1aeb0934__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/javascript/components/Search/Header.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/javascript/components/Search/TrendingCard.vue":
/*!***********************************************************!*\
  !*** ./src/javascript/components/Search/TrendingCard.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TrendingCard_vue_vue_type_template_id_cb81f588__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TrendingCard.vue?vue&type=template&id=cb81f588 */ "./src/javascript/components/Search/TrendingCard.vue?vue&type=template&id=cb81f588");
/* harmony import */ var _TrendingCard_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TrendingCard.vue?vue&type=script&setup=true&lang=js */ "./src/javascript/components/Search/TrendingCard.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var D_WEB_Projects_Landing_page_apps_2_google_extension_project_refactore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_WEB_Projects_Landing_page_apps_2_google_extension_project_refactore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TrendingCard_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TrendingCard_vue_vue_type_template_id_cb81f588__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/javascript/components/Search/TrendingCard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/javascript/Pages/Search/Search.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************!*\
  !*** ./src/javascript/Pages/Search/Search.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Search_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Search_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Search.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/Pages/Search/Search.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/javascript/components/CloseButton.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./src/javascript/components/CloseButton.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_CloseButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_CloseButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./CloseButton.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/components/CloseButton.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/javascript/components/Search/Header.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************!*\
  !*** ./src/javascript/components/Search/Header.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Header_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Header_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Header.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/components/Search/Header.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/javascript/components/Search/TrendingCard.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************!*\
  !*** ./src/javascript/components/Search/TrendingCard.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_TrendingCard_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_TrendingCard_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./TrendingCard.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/components/Search/TrendingCard.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/javascript/Pages/Search/Search.vue?vue&type=template&id=5871a23b":
/*!******************************************************************************!*\
  !*** ./src/javascript/Pages/Search/Search.vue?vue&type=template&id=5871a23b ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Search_vue_vue_type_template_id_5871a23b__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Search_vue_vue_type_template_id_5871a23b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Search.vue?vue&type=template&id=5871a23b */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/Pages/Search/Search.vue?vue&type=template&id=5871a23b");


/***/ }),

/***/ "./src/javascript/components/CloseButton.vue?vue&type=template&id=1b6d9aec":
/*!*********************************************************************************!*\
  !*** ./src/javascript/components/CloseButton.vue?vue&type=template&id=1b6d9aec ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_CloseButton_vue_vue_type_template_id_1b6d9aec__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_CloseButton_vue_vue_type_template_id_1b6d9aec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./CloseButton.vue?vue&type=template&id=1b6d9aec */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/components/CloseButton.vue?vue&type=template&id=1b6d9aec");


/***/ }),

/***/ "./src/javascript/components/Search/Header.vue?vue&type=template&id=1aeb0934":
/*!***********************************************************************************!*\
  !*** ./src/javascript/components/Search/Header.vue?vue&type=template&id=1aeb0934 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Header_vue_vue_type_template_id_1aeb0934__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Header_vue_vue_type_template_id_1aeb0934__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Header.vue?vue&type=template&id=1aeb0934 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/components/Search/Header.vue?vue&type=template&id=1aeb0934");


/***/ }),

/***/ "./src/javascript/components/Search/TrendingCard.vue?vue&type=template&id=cb81f588":
/*!*****************************************************************************************!*\
  !*** ./src/javascript/components/Search/TrendingCard.vue?vue&type=template&id=cb81f588 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_TrendingCard_vue_vue_type_template_id_cb81f588__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_TrendingCard_vue_vue_type_template_id_cb81f588__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./TrendingCard.vue?vue&type=template&id=cb81f588 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/components/Search/TrendingCard.vue?vue&type=template&id=cb81f588");


/***/ }),

/***/ "./src/assets/fire.svg":
/*!*****************************!*\
  !*** ./src/assets/fire.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fire.svg";

/***/ })

}]);