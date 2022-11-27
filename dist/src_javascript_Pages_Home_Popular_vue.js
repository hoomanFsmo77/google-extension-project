"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_javascript_Pages_Home_Popular_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/Pages/Home/Popular.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/Pages/Home/Popular.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_components_Home_Popular_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/components/Home.Popular.scss */ "./src/style/components/Home.Popular.scss");
/* harmony import */ var _composables_usePopular_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../composables/usePopular.js */ "./src/javascript/composables/usePopular.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Popular",
  mixins: [_composables_usePopular_js__WEBPACK_IMPORTED_MODULE_1__["default"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/components/PriceCard.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/components/PriceCard.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_components_Home_PriceCard_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/components/Home.PriceCard.scss */ "./src/style/components/Home.PriceCard.scss");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PriceCard",
  props: ['icon', 'coinName', 'abbName', 'price', 'state', 'hasRing', 'changeState', 'coinId']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/Pages/Home/Popular.vue?vue&type=template&id=03d9120d":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/Pages/Home/Popular.vue?vue&type=template&id=03d9120d ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

var _hoisted_1 = {
  id: "popular",
  "class": "position-relative px-3 pt-4 d-flex flex-column gap-2"
};
var _hoisted_2 = {
  key: 0,
  "class": "pre_loader position-absolute w-100 h-100 top-0 start-0 justify-content-center"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "d-inline-block position-relative inner"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "position-absolute"
})], -1 /* HOISTED */);
var _hoisted_4 = [_hoisted_3];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PriceCard = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PriceCard");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [_ctx.mode ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, _hoisted_4)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.coinsList, function (coin, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PriceCard, {
      key: index,
      "has-ring": 'no',
      icon: coin.image,
      "coin-id": coin.id,
      "coin-name": coin.name,
      "abb-name": coin.symbol.toUpperCase(),
      price: coin.current_price,
      state: "".concat(coin.price_change_percentage_24h).includes('-') ? 'down' : 'up',
      "change-state": coin.price_change_percentage_24h.toFixed(2) + '%'
    }, null, 8 /* PROPS */, ["icon", "coin-id", "coin-name", "abb-name", "price", "state", "change-state"]);
  }), 128 /* KEYED_FRAGMENT */))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/components/PriceCard.vue?vue&type=template&id=7aafc9b9":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/components/PriceCard.vue?vue&type=template&id=7aafc9b9 ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

var _hoisted_1 = {
  "class": "d-flex align-items-center gap-2"
};
var _hoisted_2 = ["src"];
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "out_trending_message d-none text-center fs-07 m-0 lh-sm text-muted"
}, "This coin is out of trending coins now.", -1 /* HOISTED */);
var _hoisted_4 = {
  "class": "coin_name d-block"
};
var _hoisted_5 = {
  "class": "fw-bold fs-09"
};
var _hoisted_6 = {
  "class": "text-green mx-1"
};
var _hoisted_7 = {
  "class": "text-muted price d-inline"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "d-inline text-muted fs-09"
}, "|", -1 /* HOISTED */);
var _hoisted_9 = {
  "class": "d-inline"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
}, null, -1 /* HOISTED */);
var _hoisted_11 = [_hoisted_10];
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
}, null, -1 /* HOISTED */);
var _hoisted_13 = [_hoisted_12];
var _hoisted_14 = {
  "class": "add_to_favorite position-relative"
};
var _hoisted_15 = ["data-id"];
var _hoisted_16 = ["data-id"];
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-x position-absolute remove_btn d-none m-1 text-light d-flex p-1 rounded-circle bg-red"
}, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": "crypto_card mb-3 p-3 ms-2 py-3 rounded-1 pointer d-flex justify-content-between align-items-center position-relative",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($props.hasRing && {
      width: '300px'
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $props.icon,
    width: "30",
    alt: ""
  }, null, 8 /* PROPS */, _hoisted_2), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.coinName), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.abbName), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.price), 1 /* TEXT */), _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_9, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "10",
    fill: "currentColor",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$props.state === 'down' ? 'd-inline-block' : 'd-none', "bi bi-arrow-down text-red d-none"]),
    viewBox: "0 0 16 16"
  }, _hoisted_11, 2 /* CLASS */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "10",
    fill: "currentColor",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$props.state === 'up' ? 'd-inline-block' : 'd-none', "bi bi-arrow-up text-green"]),
    viewBox: "0 0 16 16"
  }, _hoisted_13, 2 /* CLASS */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$props.state === 'up' ? 'text-green' : 'text-red', "change_percent"])
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.changeState), 3 /* TEXT, CLASS */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$props.hasRing === 'yes' && 'd-none', "bi bi-heart-fill text-muted position-absolute"]),
    viewBox: "0 0 16 16"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    "class": "path_1",
    "data-id": $props.coinId,
    "fill-rule": "evenodd",
    d: "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
  }, null, 8 /* PROPS */, _hoisted_15)], 2 /* CLASS */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$props.hasRing === 'yes' ? 'd-block' : 'd-none', "bi bi-bell-fill text-muted position-absolute"]),
    viewBox: "0 0 16 16"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    "data-id": $props.coinId,
    "class": "path_2",
    d: "M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"
  }, null, 8 /* PROPS */, _hoisted_16)], 2 /* CLASS */))]), _hoisted_17], 4 /* STYLE */);
}

/***/ }),

/***/ "./src/javascript/composables/usePopular.js":
/*!**************************************************!*\
  !*** ./src/javascript/composables/usePopular.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_PriceCard_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/PriceCard.vue */ "./src/javascript/components/PriceCard.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['coinsList', 'error'],
  components: {
    PriceCard: _components_PriceCard_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      mode: true
    };
  },
  mounted: function mounted() {
    this.loader();
  },
  methods: {
    loader: function loader() {
      var _this = this;
      setTimeout(function () {
        _this.mode = false;
      }, 2000);
    }
  }
});

/***/ }),

/***/ "./src/style/components/Home.Popular.scss":
/*!************************************************!*\
  !*** ./src/style/components/Home.Popular.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style/components/Home.PriceCard.scss":
/*!**************************************************!*\
  !*** ./src/style/components/Home.PriceCard.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/javascript/Pages/Home/Popular.vue":
/*!***********************************************!*\
  !*** ./src/javascript/Pages/Home/Popular.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Popular_vue_vue_type_template_id_03d9120d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popular.vue?vue&type=template&id=03d9120d */ "./src/javascript/Pages/Home/Popular.vue?vue&type=template&id=03d9120d");
/* harmony import */ var _Popular_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Popular.vue?vue&type=script&lang=js */ "./src/javascript/Pages/Home/Popular.vue?vue&type=script&lang=js");
/* harmony import */ var D_WEB_Projects_Landing_page_apps_2_google_extension_project_refactore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_WEB_Projects_Landing_page_apps_2_google_extension_project_refactore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Popular_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Popular_vue_vue_type_template_id_03d9120d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/javascript/Pages/Home/Popular.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/javascript/components/PriceCard.vue":
/*!*************************************************!*\
  !*** ./src/javascript/components/PriceCard.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PriceCard_vue_vue_type_template_id_7aafc9b9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PriceCard.vue?vue&type=template&id=7aafc9b9 */ "./src/javascript/components/PriceCard.vue?vue&type=template&id=7aafc9b9");
/* harmony import */ var _PriceCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PriceCard.vue?vue&type=script&lang=js */ "./src/javascript/components/PriceCard.vue?vue&type=script&lang=js");
/* harmony import */ var D_WEB_Projects_Landing_page_apps_2_google_extension_project_refactore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_WEB_Projects_Landing_page_apps_2_google_extension_project_refactore_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PriceCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PriceCard_vue_vue_type_template_id_7aafc9b9__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/javascript/components/PriceCard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/javascript/Pages/Home/Popular.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./src/javascript/Pages/Home/Popular.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Popular_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Popular_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Popular.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/Pages/Home/Popular.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/javascript/components/PriceCard.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./src/javascript/components/PriceCard.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_PriceCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_PriceCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./PriceCard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/components/PriceCard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/javascript/Pages/Home/Popular.vue?vue&type=template&id=03d9120d":
/*!*****************************************************************************!*\
  !*** ./src/javascript/Pages/Home/Popular.vue?vue&type=template&id=03d9120d ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Popular_vue_vue_type_template_id_03d9120d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Popular_vue_vue_type_template_id_03d9120d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Popular.vue?vue&type=template&id=03d9120d */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/Pages/Home/Popular.vue?vue&type=template&id=03d9120d");


/***/ }),

/***/ "./src/javascript/components/PriceCard.vue?vue&type=template&id=7aafc9b9":
/*!*******************************************************************************!*\
  !*** ./src/javascript/components/PriceCard.vue?vue&type=template&id=7aafc9b9 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_PriceCard_vue_vue_type_template_id_7aafc9b9__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_PriceCard_vue_vue_type_template_id_7aafc9b9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./PriceCard.vue?vue&type=template&id=7aafc9b9 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/javascript/components/PriceCard.vue?vue&type=template&id=7aafc9b9");


/***/ })

}]);