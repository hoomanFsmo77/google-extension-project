/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascript/background.js":
/*!**************************************!*\
  !*** ./src/javascript/background.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "backgroundInit": () => (/* binding */ backgroundInit),
/* harmony export */   "createNotification": () => (/* binding */ createNotification),
/* harmony export */   "removeAllAlerts": () => (/* binding */ removeAllAlerts),
/* harmony export */   "removeNotification": () => (/* binding */ removeNotification)
/* harmony export */ });
/* harmony import */ var _components_Storage_Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Storage/Storage */ "./src/javascript/components/Storage/Storage.js");
/* harmony import */ var _components_Api_Api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Api/Api.js */ "./src/javascript/components/Api/Api.js");


var api = new _components_Api_Api_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
var storage = new _components_Storage_Storage__WEBPACK_IMPORTED_MODULE_0__["default"]();
///////////////////////////////////////////////////////////////////
var time = 10;
var timerContainer = [];
/////////////////////////////// set notification on load
var backgroundInit = function backgroundInit() {
  var _storage$getData;
  timerContainer = storage.getData(storage.timerList) || [];
  var alertList = (_storage$getData = storage.getData()) !== null && _storage$getData !== void 0 ? _storage$getData : [];
  if (alertList.length > 0) {
    alertList.forEach(function (item) {
      createNotification(item, false);
    });
  }
};

///////////////////////////////// create notification
var createNotification = function createNotification(coinId) {
  var storeData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var interval = setInterval(function () {
    api.fetchCoinPriceOnly(coinId).then(function (response) {
      new Notification("MultiCoin extension price alert", {
        icon: './assets/logo_32.png',
        body: "".concat(coinId, " price is currently ").concat(response[coinId].usd, " $")
      });
    })["catch"](function (err) {
      console.log(err);
    });
  }, time * 1000);
  if (storeData) {
    timerContainer.push({
      name: coinId,
      timer: interval
    });
    storage.setData(timerContainer, storage.timerList);
  }
};

///////////////////////////// delete notification
var removeNotification = function removeNotification(coinId) {
  var _timerContainer$targe, _timerContainer$targe2;
  var targetIndex = timerContainer.findIndex(function (item) {
    return item.name === coinId;
  });
  window.clearInterval((_timerContainer$targe = timerContainer[targetIndex]) === null || _timerContainer$targe === void 0 ? void 0 : _timerContainer$targe.timer);
  clearInterval((_timerContainer$targe2 = timerContainer[targetIndex]) === null || _timerContainer$targe2 === void 0 ? void 0 : _timerContainer$targe2.timer);
  timerContainer.splice(targetIndex, 1);
  storage.setData(timerContainer, storage.timerList);
};

///////////////////////////////////// remove all notifications
var removeAllAlerts = function removeAllAlerts() {
  timerContainer.forEach(function (item) {
    window.clearInterval(item.timer);
    clearInterval(item.timer);
  });
  timerContainer = [];
  storage.setData(timerContainer, storage.timerList);
};


/***/ }),

/***/ "./src/javascript/components/Api/Api.js":
/*!**********************************************!*\
  !*** ./src/javascript/components/Api/Api.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Helper_Helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Helper/Helper.js */ "./src/javascript/components/Helper/Helper.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var helper = new _Helper_Helper_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
///////////////////////////////////
var _url = /*#__PURE__*/new WeakMap();
var _trending_url = /*#__PURE__*/new WeakMap();
var _user_url = /*#__PURE__*/new WeakMap();
var Api = /*#__PURE__*/function () {
  function Api() {
    var _this = this;
    _classCallCheck(this, Api);
    _classPrivateFieldInitSpec(this, _url, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _trending_url, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _user_url, {
      writable: true,
      value: void 0
    });
    _defineProperty(this, "removeFavoriteCoin", function (id) {
      _this.following_section.querySelectorAll('price-card').forEach(function (card) {
        if (card.getAttribute('coin-id') === id) {
          card.setAttribute('show', 'no');
        }
      });
    });
    // >>>>>>>>>>>>>>>>>>>>>>>> urls <<<<<<<<<<<<<<<<<<<<<<<<
    _classPrivateFieldSet(this, _user_url, 'https://extension-cdfdf-default-rtdb.firebaseio.com/users');
    _classPrivateFieldSet(this, _url, 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&price_change_percentage=1h');
    _classPrivateFieldSet(this, _trending_url, 'https://api.coingecko.com/api/v3/search/trending');
    this.favoritCoin = ['bitcoin', 'ethereum', 'tether', 'binancecoin', 'ripple', 'cardano', 'solana', 'dogecoin', 'polkadot', 'shiba-inu', 'tron', 'avalanche-2', 'litecoin', 'bittorrent', 'neo', 'fantom'];

    // >>>>>>>>>>>>>>>>>>>>>>>>>> requests variables <<<<<<<<<<<<<<<<<
    this.singleRequest = null;
    this.allRequest = null;
    this.createReq = null;
    this.singleUserReq = null;
    this.getUsersReq = null;
    this.updateReq = null;
    this.priceOnly = null;

    // >>>>>>>>>>>>>>>>>>>>>>>> elements <<<<<<<<<<<<<<<<<<<<<<<
    this.trendingContainer = document.querySelector('.trending_container');
    this.preLoader = document.querySelector('.pre_loader');
    this.container = document.getElementById('popular');
    this.fav_content = document.querySelector('.fav_content');
    this.login_content = document.querySelector('.login_content');
    this.following_section = document.querySelector('#following');
  }
  // >>>>>>>>>>>>>>>>>> initializing function <<<<<<<<<<<<<<<<<<
  _createClass(Api, [{
    key: "init",
    value: function init() {
      // >>>>>>>>>>>>>>>>>> fetch and add price card in home section <<<<<<<<<<<
      this.homeSection();

      // >>>>>>>>>>>>>>>>>> fetch and add price card in trending section <<<<<<<<<<<
      this.trendingSection();
    }
    // >>>>>>>>>>>>>>>>>>>>>> home section functions <<<<<<<<<<<<<<<<<<<<<
  }, {
    key: "homeSection",
    value: function homeSection() {
      var _this2 = this;
      var coinsArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.favoritCoin;
      var has_ring = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'no';
      var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.container;
      var result = [];
      this.fetchAllCoins(_classPrivateFieldGet(this, _url)).then(function (response) {
        coinsArray.forEach(function (item) {
          response.forEach(function (coin) {
            if (item === coin.id) {
              result.push(coin);
            }
          });
        });
        return result;
      }).then(function (finalResult) {
        helper.hideError();
        _this2.showHomeSectionData(finalResult, has_ring, target);
        _this2.preLoader.style.display = 'none';
        _this2.container.style.overflowY = 'scroll';
      })["catch"](function (err) {
        console.warn("error in api.js / line 56 / home section funcs and status error code ".concat(err));
        helper.showError();
      });
    }
  }, {
    key: "showHomeSectionData",
    value: function showHomeSectionData(result, has_ring, target) {
      var _this3 = this;
      var allData = result.map(function (coin) {
        return helper.priceCard(coin.id, coin.image, coin.name, coin.symbol, coin.current_price, coin.price_change_percentage_24h, has_ring);
      }).join('');
      target.insertAdjacentHTML('beforeend', allData);
      this.getSpecificUser(helper.extractToken).then(function (response) {
        helper.hideError();
        if (has_ring === 'yes') {
          _this3.setUserAlert(response, document.querySelector('.fav_content').querySelectorAll('price-card'));
          _this3.setUserFavoriteOnMainSection(response, document.querySelector('#popular').querySelectorAll('price-card'));
        }
      })["catch"](function (err) {
        console.warn("error in api.js / line 78 / home section funcs and status error code ".concat(err));
        // this.showError()
      });
    }

    // >>>>>>>>>>>>>>>>>>>>>>>>> trending section functions <<<<<<<<<<<<<<<<<<<<
  }, {
    key: "trendingSection",
    value: function trendingSection() {
      var _this4 = this;
      this.fetchAllCoins(_classPrivateFieldGet(this, _trending_url)).then(function (response) {
        return _this4.showTrendingData(response);
      })["catch"](function (err) {
        console.warn("error in api.js / line 90 / trending section funcs and status error code ".concat(err));
        helper.showError();
      });
    }
  }, {
    key: "showTrendingData",
    value: function showTrendingData(result) {
      var _this5 = this;
      helper.hideError();
      var main = result.coins;
      var allData = main.map(function (coin) {
        return helper.trendingCard(coin.item.small, coin.item.id, coin.item.symbol, coin.item.price_btc, coin.item.market_cap_rank);
      }).join('');
      this.trendingContainer.insertAdjacentHTML('beforeend', allData);
      this.getSpecificUser(helper.extractToken).then(function (response) {
        helper.hideError();
        _this5.setUserFavoriteOnTrendingSection(response, result, document.querySelector('.trending_container').querySelectorAll('trending-card'));
      })["catch"](function (err) {
        console.warn("error in api.js / line 118 / trending section funcs and status error code ".concat(err));
        // this.showError()
      });
    }

    // >>>>>>>>>>>>>>>>>> fetch for coin api <<<<<<<<<<<<<<<<<<
  }, {
    key: "fetchSingleCoin",
    value: function () {
      var _fetchSingleCoin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(coin_name) {
        var isFiltered,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isFiltered = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
                _context.next = 3;
                return fetch(helper.setUrl(coin_name, isFiltered));
              case 3:
                this.singleRequest = _context.sent;
                if (!this.singleRequest.ok) {
                  _context.next = 10;
                  break;
                }
                _context.next = 7;
                return this.singleRequest.json();
              case 7:
                return _context.abrupt("return", _context.sent);
              case 10:
                throw Error("".concat(this.singleRequest.status));
              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function fetchSingleCoin(_x) {
        return _fetchSingleCoin.apply(this, arguments);
      }
      return fetchSingleCoin;
    }()
  }, {
    key: "fetchAllCoins",
    value: function () {
      var _fetchAllCoins = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var url,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : _classPrivateFieldGet(this, _url);
                _context2.next = 3;
                return fetch(url);
              case 3:
                this.allRequest = _context2.sent;
                if (!this.allRequest.ok) {
                  _context2.next = 10;
                  break;
                }
                _context2.next = 7;
                return this.allRequest.json();
              case 7:
                return _context2.abrupt("return", _context2.sent);
              case 10:
                throw Error("".concat(this.allRequest.status));
              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function fetchAllCoins() {
        return _fetchAllCoins.apply(this, arguments);
      }
      return fetchAllCoins;
    }()
  }, {
    key: "fetchCoinPriceOnly",
    value: function () {
      var _fetchCoinPriceOnly = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(coin_id) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return fetch("https://api.coingecko.com/api/v3/simple/price?ids=".concat(coin_id, "&vs_currencies=usd"));
              case 2:
                this.priceOnly = _context3.sent;
                if (!this.priceOnly.ok) {
                  _context3.next = 9;
                  break;
                }
                _context3.next = 6;
                return this.priceOnly.json();
              case 6:
                return _context3.abrupt("return", _context3.sent);
              case 9:
                throw Error("".concat(this.priceOnly.status));
              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function fetchCoinPriceOnly(_x2) {
        return _fetchCoinPriceOnly.apply(this, arguments);
      }
      return fetchCoinPriceOnly;
    }() // >>>>>>>>>>>>>>>>>>> fetch for database <<<<<<<<<<<<<<<<<<<<<
  }, {
    key: "createData",
    value: function () {
      var _createData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(newData) {
        var url,
          _args4 = arguments;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                url = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : _classPrivateFieldGet(this, _user_url);
                _context4.next = 3;
                return fetch(url + '.json', {
                  method: 'POST',
                  headers: {
                    'content-type': 'application/json'
                  },
                  body: JSON.stringify(newData)
                });
              case 3:
                this.createReq = _context4.sent;
                if (!this.createReq.ok) {
                  _context4.next = 10;
                  break;
                }
                _context4.next = 7;
                return this.createReq.json();
              case 7:
                return _context4.abrupt("return", _context4.sent);
              case 10:
                throw Error(this.createReq.status);
              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function createData(_x3) {
        return _createData.apply(this, arguments);
      }
      return createData;
    }()
  }, {
    key: "getSpecificUser",
    value: function () {
      var _getSpecificUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id) {
        var url,
          _args5 = arguments;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                url = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : _classPrivateFieldGet(this, _user_url);
                _context5.next = 3;
                return fetch(url + "/".concat(id, ".json"));
              case 3:
                this.singleUserReq = _context5.sent;
                if (!this.singleUserReq.ok) {
                  _context5.next = 10;
                  break;
                }
                _context5.next = 7;
                return this.singleUserReq.json();
              case 7:
                return _context5.abrupt("return", _context5.sent);
              case 10:
                throw Error(this.singleUserReq.status);
              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function getSpecificUser(_x4) {
        return _getSpecificUser.apply(this, arguments);
      }
      return getSpecificUser;
    }()
  }, {
    key: "getAllUsers",
    value: function () {
      var _getAllUsers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return fetch(_classPrivateFieldGet(this, _user_url) + '.json');
              case 2:
                this.getUsersReq = _context6.sent;
                if (!this.getUsersReq.ok) {
                  _context6.next = 9;
                  break;
                }
                _context6.next = 6;
                return this.getUsersReq.json();
              case 6:
                return _context6.abrupt("return", _context6.sent);
              case 9:
                throw Error("".concat(this.getUsersReq.status));
              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function getAllUsers() {
        return _getAllUsers.apply(this, arguments);
      }
      return getAllUsers;
    }()
  }, {
    key: "updateUser",
    value: function () {
      var _updateUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(id, newData) {
        var url,
          _args7 = arguments;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                url = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : _classPrivateFieldGet(this, _user_url);
                _context7.next = 3;
                return fetch(url + "/".concat(id, ".json"), {
                  method: 'PUT',
                  headers: {
                    'content-type': 'application/json'
                  },
                  body: JSON.stringify(newData)
                });
              case 3:
                this.updateReq = _context7.sent;
                if (!this.updateReq.ok) {
                  _context7.next = 10;
                  break;
                }
                _context7.next = 7;
                return this.updateReq.json();
              case 7:
                return _context7.abrupt("return", _context7.sent);
              case 10:
                throw Error("".concat(this.updateReq.status));
              case 11:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
      function updateUser(_x5, _x6) {
        return _updateUser.apply(this, arguments);
      }
      return updateUser;
    }() // >>>>>>>>>>>>>>>> set user properties <<<<<<<<<<<<<<<<<<
  }, {
    key: "setUserFavoriteOnMainSection",
    value: function setUserFavoriteOnMainSection(response, targetNode) {
      response.fav.forEach(function (coin) {
        targetNode.forEach(function (card) {
          if (card.getAttribute('coin-id') === coin) {
            card.shadowRoot.querySelector('.bi-heart-fill').classList.replace('text-muted', 'text-green');
          }
        });
      });
    }
  }, {
    key: "setUserAlert",
    value: function setUserAlert(response, targetNode) {
      var _response$alert;
      response === null || response === void 0 ? void 0 : (_response$alert = response.alert) === null || _response$alert === void 0 ? void 0 : _response$alert.forEach(function (item) {
        targetNode.forEach(function (node) {
          if (node.getAttribute('coin-id') === item) {
            node.shadowRoot.querySelector('.add_to_favorite').children[1].classList.replace('text-muted', 'text-red');
          }
        });
      });
    }
  }, {
    key: "setUserFavoriteOnTrendingSection",
    value: function setUserFavoriteOnTrendingSection(userInfo, trendingCoin, targetNode) {
      userInfo.fav.forEach(function (item) {
        targetNode.forEach(function (node) {
          var button = node.shadowRoot.querySelector('.follow_btn');
          if (button.getAttribute('data-id') === item) {
            button.classList.replace('bg-dark-light', 'bg-green');
            button.innerHTML = "Following".concat(helper.checkSvg);
          }
        });
      });
      var userTrendingCoins = helper.filterUserFavorite(userInfo.fav, 'trend');
      var isNotTrendingCoin = _toConsumableArray(userTrendingCoins);
      var i = 0;
      userTrendingCoins.forEach(function (item) {
        trendingCoin.coins.forEach(function (coin) {
          if (coin.item.id === item) {
            isNotTrendingCoin.splice(userTrendingCoins.indexOf(item) - i, 1);
            i++;
          }
        });
      });
      setTimeout(function () {
        isNotTrendingCoin.forEach(function (item) {
          document.querySelector('.fav_content').querySelectorAll('price-card').forEach(function (node) {
            if (node.getAttribute('coin-id') === item) {
              node.setAttribute('out-trending', 'yes');
            }
          });
        });
      }, 4000);
    }

    // >>>>>>>>>>>>>>>> coin add to following list <<<<<<<<<<<<<<<
  }, {
    key: "updateUserInfo",
    value: function updateUserInfo(favoriteArray) {
      var _this6 = this;
      this.getSpecificUser(helper.extractToken).then(function (response) {
        helper.hideError();
        var newData = {
          email: response.email,
          password: response.password,
          fav: favoriteArray
        };
        _this6.updateUser(helper.extractToken, newData).then(function (response) {
          helper.hideError();
        })["catch"](function (err) {
          console.warn("error in api.js / line 237 / add to fav list and status error code ".concat(err));
          helper.showError();
        });
      })["catch"](function (err) {
        console.warn("error in api.js / line 242 / add to favorite card and status error code ".concat(err));
        helper.showError();
      });
    }
  }, {
    key: "addToFollowing",
    value: function addToFollowing(coinId, favoriteArray) {
      var _this7 = this;
      this.fetchSingleCoin(coinId).then(function (response) {
        if (favoriteArray.length === 1) {
          _this7.fav_content.classList.replace('d-none', 'd-flex');
          _this7.login_content.classList.replace('d-flex', 'd-none');
        }
        var coin_images = response.image,
          coin_name = response.name,
          coin_symbol = response.symbol,
          coin_market = response.market_data;
        var element = helper.priceCard(response.id, coin_images.small, coin_name, coin_symbol, coin_market === null || coin_market === void 0 ? void 0 : coin_market.current_price.usd, coin_market === null || coin_market === void 0 ? void 0 : coin_market.price_change_percentage_24h, 'yes');
        _this7.fav_content.insertAdjacentHTML('beforeend', element);
      });
    }
  }]);
  return Api;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);

/***/ }),

/***/ "./src/javascript/components/Card/Card.js":
/*!************************************************!*\
  !*** ./src/javascript/components/Card/Card.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api_Api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/Api.js */ "./src/javascript/components/Api/Api.js");
/* harmony import */ var _background_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../background.js */ "./src/javascript/background.js");
/* harmony import */ var _Storage_Storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Storage/Storage.js */ "./src/javascript/components/Storage/Storage.js");
/* harmony import */ var _Helper_Helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Helper/Helper.js */ "./src/javascript/components/Helper/Helper.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




//////////////////////////// instances ///////////////////////////
var api = new _Api_Api_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
var storage = new _Storage_Storage_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
var helper = new _Helper_Helper_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
//////////////////////// helpers ///////////////////////
window.favArray = [];
window.alertCoin = [];
var fav_content = document.querySelector('.fav_content');
var login_content = document.querySelector('.login_content');
var price_alert_modal = document.querySelector('.price_alert_modal');
var overlay = document.querySelector('.overlay');
var api_message = document.querySelector('.api_message');
///////////////////// custom element //////////////////////

var temp = document.createElement('template');
temp.innerHTML = "\n        <link rel=\"stylesheet\" href=\"./css/component.css\">\n        <div class=\"crypto_card mb-3  p-3  mx-4 py-3 rounded-1 pointer d-flex justify-content-between align-items-center position-relative\">\n            <div class=\"d-flex align-items-center gap-2\">\n                <img src=\"\" width=\"30\" alt=\"\">\n                <div>\n                <p class=\"out_trending_message d-none text-center fs-07 m-0 lh-sm text-muted\" >This coin is out of trending coins now.</p>\n                    <span class=\"coin_name d-block \"><span class=\"fw-bold fs-09\"></span> <span class=\"text-green  mx-1\"></span></span>\n                    <span class=\"text-muted  price  d-inline\"></span> <span class=\"d-inline text-muted fs-09\">|</span>\n                    <span class=\"d-inline \">\n                    \n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10\" height=\"10\" fill=\"currentColor\" class=\"bi bi-arrow-down text-red d-none\" viewBox=\"0 0 16 16\">\n                        <path fill-rule=\"evenodd\" d=\"M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z\"/>\n                    </svg>\n                    \n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10\" height=\"10\" fill=\"currentColor\" class=\"bi bi-arrow-up text-green d-none \" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z\"/>\n                    </svg>\n                    \n                    \n                    <span class=\"  change_percent\"></span>\n                </span>\n                </div>\n            </div>\n            <div  class=\"add_to_favorite position-relative\">\n                <svg  xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-heart-fill text-muted  position-absolute \" viewBox=\"0 0 16 16\">\n                    <path class=\"path_1\" fill-rule=\"evenodd\" d=\"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z\"/>\n                </svg>\n                \n                <svg  xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-bell-fill text-muted position-absolute d-none \" viewBox=\"0 0 16 16\">\n  <path class=\"path_2\" d=\"M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z\"/>\n                 </svg>\n            </div>\n            <i class=\"bi bi-x position-absolute remove_btn d-none m-1 text-light d-flex p-1 rounded-circle bg-red\"></i>\n        </div>\n       \n\n";
var root;
var Card = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Card, _HTMLElement);
  var _super = _createSuper(Card);
  function Card() {
    var _this;
    _classCallCheck(this, Card);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "removeOutOfTrendingCoinHandler", function (e) {
      var coinId = _this.getAttribute('coin-id');
      _this.setAttribute('show', 'no');
      helper.removeFavWindow(coinId);
      storage.setData(window.alertCoin);
      (0,_background_js__WEBPACK_IMPORTED_MODULE_1__.removeNotification)(coinId);
      api.updateUserInfo(window.favArray);
    });
    _defineProperty(_assertThisInitialized(_this), "addToFavoriteHandler", function (e) {
      e.stopPropagation();
      var coinId = e.target.dataset.id;
      if (window.isLogin) {
        if (e.target.parentElement.classList.contains('text-muted') && !window.favArray.includes(coinId)) {
          e.target.parentElement.classList.replace('text-muted', 'text-green');
          window.favArray.push(coinId);
          api.addToFollowing(coinId, window.favArray);
        } else if (window.favArray.includes(coinId) && e.target.parentElement.classList.contains('text-green')) {
          e.target.parentElement.classList.replace('text-green', 'text-muted');
          helper.removeFavWindow(coinId);
          api.removeFavoriteCoin(coinId);
          storage.setData(window.alertCoin);
          (0,_background_js__WEBPACK_IMPORTED_MODULE_1__.removeNotification)(coinId);
        }
        storage.setData(window.favArray, storage.favList);
        api.updateUserInfo(window.favArray);
      } else {
        document.querySelector('.alert_modal').style.cssText = 'opacity: 1;visibility: visible';
        document.querySelector('.overlay').style.cssText = 'opacity: 1;visibility: visible';
      }
    });
    _defineProperty(_assertThisInitialized(_this), "addToAlertListHandler", function (e) {
      var elm = e.target;
      var coinId = elm.dataset.id;
      if (e.target.parentElement.classList.contains('text-muted')) {
        e.target.parentElement.classList.replace('text-muted', 'text-red');
        _this.modalAction("Alert created!<br>We will notify you every one minutes. ");
        window.alertCoin.push(coinId);
        storage.setData(window.alertCoin);
        (0,_background_js__WEBPACK_IMPORTED_MODULE_1__.createNotification)(coinId);
      } else if (e.target.parentElement.classList.contains('text-red')) {
        e.target.parentElement.classList.replace('text-red', 'text-muted');
        _this.modalAction('Alert removed!');
        window.alertCoin.splice(window.alertCoin.indexOf(coinId), 1);
        storage.setData(window.alertCoin);
        (0,_background_js__WEBPACK_IMPORTED_MODULE_1__.removeNotification)(coinId);
      }
      api.getSpecificUser(helper.extractToken).then(function (response) {
        return _this.updateUserAlertCoin(response, window.alertCoin);
      })["catch"](function (err) {
        console.warn("error in card.js / line 134 / add to alert list and status error code ".concat(err));
        helper.showError();
      });
    });
    _this.attachShadow({
      mode: "open"
    });
    _this.shadowRoot.appendChild(temp.content.cloneNode(true));
    var _assertThisInitialize = _assertThisInitialized(_this),
      main = _assertThisInitialize.shadowRoot;
    root = main;
    return _this;
  }
  // >>>>>>>>>>>>>>>>>>> life cycles <<<<<<<<<<<<<<<<<<<<<<
  _createClass(Card, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      root.querySelector('img').src = this.getAttribute('icon');
      root.querySelector('.coin_name').children[0].innerHTML = this.getAttribute('coin-name');
      root.querySelector('.coin_name').children[1].innerHTML = this.getAttribute('abb-name');
      root.querySelector('.price').innerHTML = this.getAttribute('price');
      this.state = this.getAttribute('state');
      this.ring = this.getAttribute('has-ring');
      root.querySelector('.change_percent').innerHTML = this.getAttribute('change-state');
      root.querySelector('.add_to_favorite path.path_1').setAttribute('data-id', this.getAttribute('coin-id'));
      root.querySelector('.add_to_favorite path.path_2').setAttribute('data-id', this.getAttribute('coin-id'));
      // >>>>>>>>>>>>>>>>> event listeners  <<<<<<<<<<<<<<<<<<<<<
      root.querySelector('.add_to_favorite path.path_1').addEventListener('click', this.addToFavoriteHandler);
      root.querySelector('.add_to_favorite path.path_2').addEventListener('click', this.addToAlertListHandler);
      root.querySelector('.remove_btn').addEventListener('click', this.removeOutOfTrendingCoinHandler);
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      if (newValue === 'no') {
        this.remove();
        if (fav_content.children.length === 0) {
          fav_content.classList.replace('d-flex', 'd-none');
          login_content.classList.replace('d-none', 'd-flex');
        } else {
          login_content.classList.replace('d-flex', 'd-none');
          fav_content.classList.replace('d-none', 'd-flex');
        }
      }
      if (name === 'out-trending' && newValue === 'yes') {
        this.shadowRoot.querySelector('.out_trending_message').classList.replace('d-none', 'd-block');
        this.shadowRoot.querySelector('.remove_btn').classList.replace('d-none', 'd-block');
      }
    }
  }, {
    key: "updateUserAlertCoin",
    value: function updateUserAlertCoin(result, alertArray) {
      helper.hideError();
      var newData = {
        email: result.email,
        password: result.password,
        fav: result.fav,
        alert: alertArray
      };
      api.updateUser(helper.extractToken, newData).then(function (response) {
        // console.log(response)
      })["catch"](function (err) {
        console.warn("error in card.js / line 172 / add to alert list and status error code ".concat(err));
        helper.showError();
      });
    }

    // >>>>>>>>>>>>>>>>>> helpers <<<<<<<<<<<<<<<<<<<<<<
  }, {
    key: "state",
    set: function set(value) {
      if (value === 'up') {
        root.querySelector('.change_percent').classList.add('text-green');
        root.querySelector('.bi-arrow-up').classList.replace('d-none', 'd-inline-block');
      } else if (value === 'down') {
        root.querySelector('.change_percent').classList.add('text-red');
        root.querySelector('.bi-arrow-down').classList.replace('d-none', 'd-inline-block');
      }
    }
  }, {
    key: "ring",
    set: function set(value) {
      if (value === 'yes') {
        root.querySelector('.bi-heart-fill').classList.add('d-none');
        root.querySelector('.bi-bell-fill').classList.replace('d-none', 'd-block');
        root.querySelector('.crypto_card').style.width = '300px';
      }
    }
  }, {
    key: "modalAction",
    value: function modalAction(title) {
      price_alert_modal.style.cssText = 'opacity: 1;visibility: visible';
      overlay.style.cssText = 'opacity: 1;visibility: visible';
      price_alert_modal.children[0].innerHTML = title;
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['show', 'out-trending'];
    }
  }]);
  return Card;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./src/javascript/components/Detail/Detail.js":
/*!****************************************************!*\
  !*** ./src/javascript/components/Detail/Detail.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Helper_Helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Helper/Helper.js */ "./src/javascript/components/Helper/Helper.js");
/* harmony import */ var _Api_Api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Api/Api.js */ "./src/javascript/components/Api/Api.js");
/* harmony import */ var _Storage_Storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Storage/Storage.js */ "./src/javascript/components/Storage/Storage.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../background */ "./src/javascript/background.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




///////////////////////////////////////////////
var helper = new _Helper_Helper_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
var api = new _Api_Api_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
var storage = new _Storage_Storage_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
///////////////////////////////////////

var temp = document.createElement('template');
temp.innerHTML = "\n<link rel=\"stylesheet\" href=\"./css/component.css\">\n <div class=\"detail_card rounded-1 d-flex flex-column justify-content-center align-items-center px-3 py-4 pointer\">\n                        <div class=\"d-flex flex-row pb-3 gap-4 justify-content-center w-100 align-items-center border-bottom border-secondary border-1\">\n                            <img src=\"\" width=\"80\" alt=\"\">\n                            <div class=\"d-flex flex-column gap-1\">\n                                <span class=\"fs-08 text-dark\"><i class=\"bi bi-coin me-2\"></i>Name: <span class=\"name  text-muted\"></span> </span>\n                                <span class=\"fs-08 text-dark\"><i class=\"bi bi-braces me-2\"></i>Symbol: <span class=\"symbol text-muted\"></span> </span>\n                                <span class=\"fs-08 text-dark\"><i class=\"bi bi-tag me-2\"></i>Category: <span class=\" text-muted category\"></span> </span>\n                                <span class=\"fs-08 text-dark d-flex align-items-center \"><i class=\"bi bi-box2  me-2\"></i>Max supply: <span class=\"text-muted supply\"></span></span>\n                                <span class=\"fs-08 text-dark d-flex align-items-center \"><i class=\"bi bi-basket3  me-2\"></i>Max volume: <span class=\"text-muted volume\"></span></span>\n                            </div>\n\n                        </div>\n                        <div  class=\"p-2 w-100\">\n                            <h6 class=\"text-start\">Price details:</h6>\n                            <div class=\"row py-2\">\n                                <div class=\"col-4\">\n                                    <span class=\"fs-08 text-dark d-flex align-items-center\"><i class=\"bi bi-cash-coin me-2\"></i> price: <span class=\"text-green current\"></span></span>\n                                </div>\n                                <div class=\"col-8 d-flex justify-content-end\">\n                                    <span class=\"fs-08 text-dark d-flex align-items-center\"><i class=\"bi bi-bank me-2\"></i> Market cap: <span class=\"text-green market\"></span></span>\n                                </div>\n                            </div>\n                            <div class=\"divider\"></div>\n                            <div class=\"row\">\n                                <div class=\"col-6 d-flex justify-content-start\">\n                                    <span class=\"fs-08 text-dark d-flex align-items-center my-2\"><i class=\"bi bi-graph-up text-green me-2\"></i>ATH: <span class=\"text-green ath\"></span></span>\n                                </div>\n                                <div class=\"col-6 d-flex \">\n                                    <span class=\"fs-08 text-dark d-flex align-items-center my-2\"><i class=\"bi bi-graph-down me-2 text-red\"></i>ATL: <span class=\"text-red atl\"></span></span>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-12 d-flex justify-content-start\">\n                                    <span class=\"fs-07 text-dark d-flex align-items-center my-2\"><i class=\"bi bi-percent text-green me-2\"></i>ATH change: <span class=\"text-green ath-c\"></span></span>\n                                </div>\n                                <div class=\"col-12 d-flex justify-content-start\">\n                                    <span class=\"fs-07 text-dark d-flex align-items-center my-2\"><i class=\"bi bi-percent text-red me-2\"></i>ATL change: <span class=\"text-red atl-c\"></span></span>\n                                </div>\n                            </div>\n                            <div class=\"divider\"></div>\n                            <div class=\"row\">\n                                <div class=\"col-12 d-flex justify-content-start\">\n                                    <span class=\"fs-08 text-dark d-flex align-items-center my-2\"><i class=\"bi bi-thermometer-high text-green me-2\"></i>24h high: <span class=\"text-green h-24\"></span></span>\n                                </div>\n                                <div class=\"col-12 d-flex justify-content-start\">\n                                    <span class=\"fs-08 text-dark d-flex align-items-center my-2\"><i class=\"bi bi-thermometer-low text-red me-2\"></i>24h low: <span class=\"text-red l-24\"></span></span>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-12 d-flex justify-content-start\">\n                                    <span class=\"fs-07 text-dark d-flex align-items-center my-2 \"><i class=\"bi bi-currency-dollar text-green me-1\"></i>24h price change: <span class=\"text-green c-24\"></span></span>\n                                </div>\n                                <div class=\"col-12 d-flex justify-content-start\">\n                                    <span class=\"fs-07 text-dark d-flex align-items-center my-2 \"><i class=\"bi bi-percent text-red me-1\"></i>24h percent change: <span class=\"text-red p-24\"></span></span>\n                                </div>\n                            </div>\n                            <div class=\"divider\"></div>\n                            <div class=\"row\">\n                                <div class=\"col-12 d-flex justify-content-start\">\n                                    <span class=\"fs-08 text-dark d-flex align-items-center my-2\">Blockchain site:\n                                        <a class=\"ms-1 block-link\" href=\"\"></a>\n                                    </span>\n                                </div>\n                                <div class=\"col-12 d-flex justify-content-start\">\n                                    <span class=\"fs-08 text-dark d-flex align-items-center mt-2\">Homepage:\n                                        <a class=\"ms-1 home-link\" href=\"\"></a>\n                                    </span>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-12 text-center\">\n                                        <button class=\"follow_btn border-0 bg-dark-light text-light mt-4 mb-2 pointer\">\n                                            Follow\n                                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" fill=\"currentColor\"              class=\"bi bi-heart-fill mx-1 \" viewBox=\"0 0 16 16\">\n                                                    <path fill-rule=\"evenodd\" d=\"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z\"/>\n                                                </svg>\n                                        </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n";
var root;
var Detail = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Detail, _HTMLElement);
  var _super = _createSuper(Detail);
  function Detail() {
    var _this;
    _classCallCheck(this, Detail);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "linkRedirect", function (e) {
      window.open(e.target.innerHTML);
    });
    _defineProperty(_assertThisInitialized(_this), "followingHandler", function (e) {
      if (e.target.tagName === 'BUTTON' && window.isLogin) {
        var coinId = e.target.dataset.id;
        if (e.target.classList.contains('bg-dark-light') && !window.favArray.includes(coinId)) {
          e.target.classList.replace('bg-dark-light', 'bg-green');
          e.target.innerHTML = "Following".concat(helper.checkSvg);
          window.favArray.push(coinId);
          api.addToFollowing(coinId, window.favArray);
        } else if (e.target.classList.contains('bg-green')) {
          e.target.classList.replace('bg-green', 'bg-dark-light');
          e.target.innerHTML = "Follow".concat(helper.heartSvg);
          helper.removeFavWindow(coinId);
          api.removeFavoriteCoin(coinId);
          storage.setData(window.alertCoin);
          (0,_background__WEBPACK_IMPORTED_MODULE_3__.removeNotification)(coinId);
        }
        api.updateUserInfo(window.favArray);
      }
    });
    _this.attachShadow({
      mode: "open"
    });
    _this.shadowRoot.appendChild(temp.content.cloneNode(true));
    var _assertThisInitialize = _assertThisInitialized(_this),
      main = _assertThisInitialize.shadowRoot;
    root = main;
    return _this;
  }
  _createClass(Detail, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      root.querySelector('.follow_btn').setAttribute('data-id', this.getAttribute('coin-id'));
      root.querySelector('img').src = this.getAttribute('img');
      root.querySelector('.name').innerHTML = this.getAttribute('name');
      root.querySelector('.symbol').innerHTML = this.getAttribute('symbol');
      root.querySelector('.category').innerHTML = this.getAttribute('category');
      root.querySelector('.supply').innerHTML = this.getAttribute('supply');
      root.querySelector('.volume').innerHTML = this.getAttribute('volume');
      root.querySelector('.current').innerHTML = this.getAttribute('current');
      root.querySelector('.market').innerHTML = this.getAttribute('market');
      root.querySelector('.ath').innerHTML = this.getAttribute('ath');
      root.querySelector('.atl').innerHTML = this.getAttribute('atl');
      root.querySelector('.ath-c').innerHTML = this.getAttribute('ath-c');
      root.querySelector('.atl-c').innerHTML = this.getAttribute('atl-c');
      root.querySelector('.h-24').innerHTML = this.getAttribute('h-24');
      root.querySelector('.l-24').innerHTML = this.getAttribute('l-24');
      root.querySelector('.c-24').innerHTML = this.getAttribute('c-24');
      root.querySelector('.p-24').innerHTML = this.getAttribute('p-24');
      root.querySelector('.block-link').innerHTML = this.getAttribute('block-link');
      root.querySelector('.block-link').href = this.getAttribute('block-link');
      root.querySelector('.home-link').innerHTML = this.getAttribute('home-link');
      root.querySelector('.home-link').href = this.getAttribute('home-link');
      root.querySelector('.block-link').addEventListener('click', this.linkRedirect);
      root.querySelector('.home-link').addEventListener('click', this.linkRedirect);
      this.choosen = this.getAttribute('is_choosen');
      // >>>>>>>>>>>>>>>>>>>>>> events <<<<<<<<<<<<<<<<<<<<<<<<<<
      root.querySelector('.follow_btn').addEventListener('click', this.followingHandler);
    }
  }, {
    key: "choosen",
    set: function set(value) {
      if (value === 'yes') {
        this.shadowRoot.querySelector('.follow_btn').classList.replace('bg-dark-light', 'bg-green');
        this.shadowRoot.querySelector('.follow_btn').innerHTML = "Following".concat(helper.checkSvg);
      }
    }
  }, {
    key: "observedAttributes",
    get: function get() {
      return [];
    }
  }]);
  return Detail;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Detail);

/***/ }),

/***/ "./src/javascript/components/Helper/Helper.js":
/*!****************************************************!*\
  !*** ./src/javascript/components/Helper/Helper.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Helper = /*#__PURE__*/function () {
  function Helper() {
    _classCallCheck(this, Helper);
    _defineProperty(this, "removeFavWindow", function (coinId) {
      window.favArray.splice(window.favArray.indexOf(coinId), 1);
      window.alertCoin.splice(window.alertCoin.indexOf(coinId), 1);
    });
    this.apiErrorMessage = document.querySelector('.api_message');
    this.favoritCoin = ['bitcoin', 'ethereum', 'tether', 'binancecoin', 'ripple', 'cardano', 'solana', 'dogecoin', 'polkadot', 'shiba-inu', 'tron', 'avalanche-2', 'litecoin', 'bittorrent', 'neo', 'fantom'];
  }
  _createClass(Helper, [{
    key: "showError",
    value: function showError() {
      this.apiErrorMessage.classList.replace('d-none', 'd-flex');
    }
  }, {
    key: "hideError",
    value: function hideError() {
      this.apiErrorMessage.classList.replace('d-flex', 'd-none');
    }
  }, {
    key: "filterUserFavorite",
    value: function filterUserFavorite(favArray, mode) {
      var _this = this;
      var trendingAddedCoins = _toConsumableArray(favArray);
      var favoriteAddedCoins = [];
      var i = 0;
      favArray.forEach(function (item) {
        _this.favoritCoin.forEach(function (coin) {
          if (item === coin) {
            trendingAddedCoins.splice(favArray.indexOf(item) - i, 1);
            favoriteAddedCoins.push(item);
            i++;
          }
        });
      });
      if (mode === 'fav') {
        return _toConsumableArray(new Set(favoriteAddedCoins));
      } else if (mode === 'trend') {
        return trendingAddedCoins;
      }
    }
  }, {
    key: "setUrl",
    value: function setUrl(coin_name) {
      var isFiltered = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (isFiltered) {
        return "https://api.coingecko.com/api/v3/coins/".concat(coin_name, "?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false");
      } else {
        return "https://api.coingecko.com/api/v3/coins/".concat(coin_name);
      }
    }
  }, {
    key: "priceCard",
    value: function priceCard(id, img, name, symbol, current_price, change_price, has_ring) {
      return "<price-card has-ring=\"".concat(has_ring, "\"  icon=\"").concat(img, "\"  coin-id=\"").concat(id, "\" coin-name=\"").concat(name, "\" abb-name=\"").concat(symbol.toUpperCase(), "\"\n                    price=\"").concat(current_price, " $\" state=\"").concat("".concat(change_price).includes('-') ? 'down' : 'up', "\"  change-state=\"").concat(change_price.toFixed(2) + '%', "\"\n                ></price-card>");
    }
  }, {
    key: "trendingCard",
    value: function trendingCard(icon, name, symbol, current_price, rank) {
      return "<trending-card\n                    icon=\"".concat(icon, "\"\n                    coin-name=\"").concat(name, "\"\n                    abb-name=\"").concat(symbol, "\"\n                    current-price=\"").concat(Number(current_price).toFixed(5), "$\"\n                    rank=\"").concat(rank, "\"\n                ></trending-card>");
    }
  }, {
    key: "extractToken",
    get: function get() {
      return document.cookie.slice(document.cookie.indexOf('=') + 1);
    }
  }, {
    key: "checkSvg",
    get: function get() {
      return '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-check2 mx-1" viewBox="0 0 16 16">\n' + '  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>\n' + '</svg>';
    }
  }, {
    key: "heartSvg",
    get: function get() {
      return '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-heart-fill mx-1 " viewBox="0 0 16 16">\n                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>\n                            </svg>';
    }
  }]);
  return Helper;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Helper);

/***/ }),

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
    this.favList = '_ext_fav_';
    this.alertList = '_ext_alert_';
    this.timerList = '_ext_timer_';
  }
  _createClass(Storage, [{
    key: "setData",
    value: function setData(data) {
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.alertList;
      localStorage.setItem(name, JSON.stringify(data));
    }
  }, {
    key: "getData",
    value: function getData() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.alertList;
      if (localStorage.getItem(name)) {
        return JSON.parse(localStorage.getItem(name));
      }
    }
  }]);
  return Storage;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);

/***/ }),

/***/ "./src/javascript/components/Trending/Trending.js":
/*!********************************************************!*\
  !*** ./src/javascript/components/Trending/Trending.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api_Api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/Api.js */ "./src/javascript/components/Api/Api.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../background */ "./src/javascript/background.js");
/* harmony import */ var _Storage_Storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Storage/Storage.js */ "./src/javascript/components/Storage/Storage.js");
/* harmony import */ var _Helper_Helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Helper/Helper.js */ "./src/javascript/components/Helper/Helper.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




//////////////////////////////////
var api = new _Api_Api_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
var storage = new _Storage_Storage_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
var helper = new _Helper_Helper_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
///////////////////////////////////////////
var temp = document.createElement('template');
temp.innerHTML = "\n<link rel=\"stylesheet\" href=\"./css/component.css\">\n<div class=\"trending_card w-100 m-2 py-3 px-2 d-flex flex-column gap-2 align-items-center rounded-2 my-0\" >\n                    <div class=\"p-2 border border-secondary rounded-circle\">\n                        <img src=\"\" width=\"40\" class=\"img-fluid\" alt=\"\">\n                    </div>\n                    <div class=\"d-flex flex-column  justify-content-center align-items-center\">\n                       <span class=\"fs-6 fw-bold coin_name text-center\"></span>\n                        <span class=\"symbol text-green\"></span>\n                        <span class=\"text-muted  d-flex align-items-center price\">\n                            <span class=\"d-inline \"></span>\n                            <span class=\"d-inline mx-1 fs-09\" >|</span>\n                            <span class=\" mx-1 rank\"></span>\n                        </span>\n                        <button class=\"follow_btn border-0 bg-dark-light text-light mt-4 mb-2 pointer\">\n                             Follow\n                             <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" fill=\"currentColor\" class=\"bi bi-heart-fill mx-1 \" viewBox=\"0 0 16 16\">\n                                    <path fill-rule=\"evenodd\" d=\"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z\"/>\n                            </svg>\n                        </button>\n                    </div>\n                </div>\n\n";
var root;
var Trending = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Trending, _HTMLElement);
  var _super = _createSuper(Trending);
  function Trending() {
    var _this;
    _classCallCheck(this, Trending);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "followingHandler", function (e) {
      if (e.target.tagName === 'BUTTON' && window.isLogin) {
        var coinId = e.target.dataset.id;
        if (e.target.classList.contains('bg-dark-light') && !window.favArray.includes(coinId)) {
          ///// start following
          e.target.classList.replace('bg-dark-light', 'bg-green');
          e.target.innerHTML = "Following".concat(helper.checkSvg);
          window.favArray.push(coinId);
          api.addToFollowing(coinId, window.favArray);
        } else if (e.target.classList.contains('bg-green')) {
          ///// end following
          e.target.classList.replace('bg-green', 'bg-dark-light');
          e.target.innerHTML = "Follow".concat(helper.heartSvg);
          helper.removeFavWindow(coinId);
          api.removeFavoriteCoin(coinId);
          storage.setData(window.alertCoin);
          (0,_background__WEBPACK_IMPORTED_MODULE_1__.removeNotification)(coinId);
        }
        storage.setData(window.favArray, storage.favList);
        api.updateUserInfo(window.favArray);
      }
    });
    _this.attachShadow({
      mode: "open"
    });
    _this.shadowRoot.appendChild(temp.content.cloneNode(true));
    var _assertThisInitialize = _assertThisInitialized(_this),
      main = _assertThisInitialize.shadowRoot;
    root = main;
    return _this;
  }
  _createClass(Trending, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      root.querySelector('img').src = this.getAttribute('icon');
      root.querySelector('.coin_name').innerHTML = this.getAttribute('coin-name');
      root.querySelector('.symbol').innerHTML = this.getAttribute('abb-name');
      root.querySelector('.price').children[0].innerHTML = this.getAttribute('current-price');
      root.querySelector('.rank').innerHTML = 'Rank:' + this.getAttribute('rank');
      root.querySelector('.follow_btn').setAttribute('data-id', this.getAttribute('coin-name'));
      /////////////////////// events handler
      root.querySelector('.follow_btn').addEventListener('click', this.followingHandler);
    }
  }, {
    key: "observedAttributes",
    get: function get() {
      return ['coin-name', 'abb-name', 'current-price', 'icon', 'rank'];
    }
  }]);
  return Trending;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Trending);

/***/ }),

/***/ "./src/style/component.scss":
/*!**********************************!*\
  !*** ./src/style/component.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/*!*************************************!*\
  !*** ./src/javascript/component.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Card_Card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Card/Card.js */ "./src/javascript/components/Card/Card.js");
/* harmony import */ var _components_Trending_Trending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Trending/Trending.js */ "./src/javascript/components/Trending/Trending.js");
/* harmony import */ var _components_Detail_Detail_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Detail/Detail.js */ "./src/javascript/components/Detail/Detail.js");
/* harmony import */ var _style_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/component.scss */ "./src/style/component.scss");




/////////////////////////////////////////////
window.customElements.define('price-card', _components_Card_Card_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
window.customElements.define('trending-card', _components_Trending_Trending_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
window.customElements.define('detail-card', _components_Detail_Detail_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
})();

/******/ })()
;