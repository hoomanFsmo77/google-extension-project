/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascript/components/Api/Api.js":
/*!**********************************************!*\
  !*** ./src/javascript/components/Api/Api.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _url = /*#__PURE__*/new WeakMap();
var _trending_url = /*#__PURE__*/new WeakMap();
var _user_url = /*#__PURE__*/new WeakMap();
var Api = /*#__PURE__*/function () {
  function Api() {
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
    this.apiErrorMessage = document.querySelector('.api_message');
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
      var _this = this;
      var coinsArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.favoritCoin;
      var has_ring = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'no';
      var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.container;
      var is_alert = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'no';
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
        _this.hideError();
        _this.showHomeSectionData(finalResult, has_ring, target, is_alert);
        _this.preLoader.style.display = 'none';
        _this.container.style.overflowY = 'scroll';
      })["catch"](function (err) {
        console.warn("error in api.js / line 56 / home section funcs and status error code ".concat(err));
        _this.showError();
      });
    }
  }, {
    key: "showHomeSectionData",
    value: function showHomeSectionData(result, has_ring, target, is_alert) {
      var _this2 = this;
      var allData = result.map(function (coin) {
        return "\n                <price-card icon=\"".concat(coin.image, "\" is_alert=\"no\" has-ring=\"").concat(has_ring, "\" coin-id=\"").concat(coin.id, "\" coin-name=\"").concat(coin.name, "\" abb-name=\"").concat(coin.symbol.toUpperCase(), "\"\n                    price=\"").concat(coin.current_price, " $\" state=\"").concat("".concat(coin.price_change_percentage_24h).includes('-') ? 'down' : 'up', "\"  change-state=\"").concat(coin.price_change_percentage_24h.toFixed(2) + '%', "\"\n                ></price-card>\n            ");
      }).join('');
      target.insertAdjacentHTML('beforeend', allData);
      this.getSpecificUser(this.extractToken).then(function (response) {
        _this2.hideError();
        if (has_ring === 'yes') {
          _this2.setUserAlert(response, document.querySelector('.fav_content').querySelectorAll('price-card'));
          _this2.setUserFavorite(response, document.querySelector('#popular').querySelectorAll('price-card'));
        }
      })["catch"](function (err) {
        console.warn("error in api.js / line 78 / home section funcs and status error code ".concat(err));
        _this2.showError();
      });
    }

    // >>>>>>>>>>>>>>>>>>>>>>>>> trending section functions <<<<<<<<<<<<<<<<<<<<
  }, {
    key: "trendingSection",
    value: function trendingSection() {
      var _this3 = this;
      this.fetchAllCoins(_classPrivateFieldGet(this, _trending_url)).then(function (response) {
        return _this3.showTrendingData(response);
      })["catch"](function (err) {
        console.warn("error in api.js / line 90 / trending section funcs and status error code ".concat(err));
        _this3.showError();
      });
    }
  }, {
    key: "showTrendingData",
    value: function showTrendingData(result) {
      this.hideError();
      var main = result.coins;
      var allData = main.map(function (coin) {
        return "<trending-card\n                    icon=\"".concat(coin.item.small, "\"\n                    coin-name=\"").concat(coin.item.id, "\"\n                    abb-name=\"").concat(coin.item.symbol, "\"\n                    current-price=\"").concat(Number(coin.item.price_btc).toFixed(5), "$\"\n                    rank=\"").concat(coin.item.market_cap_rank, "\"\n                ></trending-card>");
      }).join('');
      this.trendingContainer.insertAdjacentHTML('beforeend', allData);
    }

    // >>>>>>>>>>>>>>>>>>>> helpers <<<<<<<<<<<<<<<<<<<<<
  }, {
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
    key: "setUrl",
    value: function setUrl(coin_name) {
      return "https://api.coingecko.com/api/v3/coins/".concat(coin_name);
    }
  }, {
    key: "extractToken",
    get: function get() {
      return document.cookie.slice(document.cookie.indexOf('=') + 1);
    }

    // >>>>>>>>>>>>>>>>>> fetch for coin api <<<<<<<<<<<<<<<<<<
  }, {
    key: "fetchSingleCoin",
    value: function () {
      var _fetchSingleCoin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(coin_name) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(this.setUrl(coin_name));
              case 2:
                this.singleRequest = _context.sent;
                if (!this.singleRequest.ok) {
                  _context.next = 9;
                  break;
                }
                _context.next = 6;
                return this.singleRequest.json();
              case 6:
                return _context.abrupt("return", _context.sent);
              case 9:
                throw Error("".concat(this.singleRequest.status));
              case 10:
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
    key: "setUserFavorite",
    value: function setUserFavorite(response, targetNode) {
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
  }]);
  return Api;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);

/***/ }),

/***/ "./src/javascript/components/Close_btn/Close.js":
/*!******************************************************!*\
  !*** ./src/javascript/components/Close_btn/Close.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Close = /*#__PURE__*/function () {
  function Close() {
    _classCallCheck(this, Close);
    this.init();
  }
  _createClass(Close, [{
    key: "init",
    value: function init() {
      document.querySelectorAll('.close_btn').forEach(function (item) {
        item.addEventListener('click', function () {
          window.close();
        });
      });
    }
  }]);
  return Close;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Close);

/***/ }),

/***/ "./src/javascript/components/Favorite/Favorite.js":
/*!********************************************************!*\
  !*** ./src/javascript/components/Favorite/Favorite.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Favorite = /*#__PURE__*/function () {
  function Favorite() {
    var _this = this;
    _classCallCheck(this, Favorite);
    _defineProperty(this, "modalRedirect", function () {
      document.querySelector('.alert_modal').style.cssText = 'opacity: 0;visibility: hidden';
      document.querySelector('.overlay').style.cssText = 'opacity: 0;visibility: hidden';
      _this.hideSection(2);
      _this.nav_tracer.style.left = '78%';
    });
    _defineProperty(this, "redirectHandler", function () {
      _this.hideSection(2);
      _this.nav_tracer.style.left = '78%';
    });
    _defineProperty(this, "hideSection", function (index) {
      document.querySelectorAll('.section_item').forEach(function (item) {
        item.style.opacity = '0';
        item.style.visibility = 'hidden';
      });
      document.querySelector('.section_container').children[index].style.opacity = '1';
      document.querySelector('.section_container').children[index].style.visibility = 'visible';
    });
    this.login_redirection_btn = document.querySelector('.login_redirection');
    this.nav_tracer = document.querySelector('.nav_tracer');
    this.login_redirection_modal = document.querySelector('.login_redirection_modal');
    this.init();
  }
  _createClass(Favorite, [{
    key: "init",
    value: function init() {
      this.login_redirection_btn.addEventListener('click', this.redirectHandler);
      this.login_redirection_modal.addEventListener('click', this.modalRedirect);
    }
  }]);
  return Favorite;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Favorite);

/***/ }),

/***/ "./src/javascript/components/Navbar/Navbar.js":
/*!****************************************************!*\
  !*** ./src/javascript/components/Navbar/Navbar.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Navbar = /*#__PURE__*/function () {
  function Navbar() {
    _classCallCheck(this, Navbar);
    this.nav_tracer = document.querySelector('.nav_tracer');
    this.init();
  }
  _createClass(Navbar, [{
    key: "init",
    value: function init() {
      var _this = this;
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
                _this.nav_tracer.style.left = '10%';
                document.querySelector('#home_section').style.zIndex = '15';
              }
              break;
            case 1:
              {
                document.querySelector('#home_section').style.zIndex = '-1';
                _this.nav_tracer.style.left = '45%';
              }
              break;
            case 2:
              {
                document.querySelector('#user_section').style.zIndex = '15';
                _this.nav_tracer.style.left = '78%';
              }
          }
        });
      });
    }
  }]);
  return Navbar;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./src/javascript/components/Search/Search.js":
/*!****************************************************!*\
  !*** ./src/javascript/components/Search/Search.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api_Api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/Api.js */ "./src/javascript/components/Api/Api.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var api = new _Api_Api_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
var Search = /*#__PURE__*/function () {
  function Search() {
    _classCallCheck(this, Search);
    this.search_input = document.getElementById('search_input');
    this.search_container = document.querySelector('.result_box ul');
    this.search_box = document.querySelector('#search_section header');
    this.show_detail = document.querySelector('.result_show_detail');
    this.backward_btn = document.querySelector('.backward_btn');
    this.detail_content = document.querySelector('.detail_content');
    this.trending_container = document.querySelector('.trending_container');
    this.timeout = null;
    this.delay = 1500;
    this.init();
  }
  _createClass(Search, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.search_input.addEventListener('keyup', function (e) {
        if (_this.timeout) {
          clearTimeout(_this.timeout);
        }
        _this.timeout = setTimeout(function () {
          searchAction(e);
        }, _this.delay);
      });
      var searchAction = function searchAction(e) {
        var value = e.target.value.toLowerCase();
        if (isNaN(value)) {
          api.fet().then(function (response) {
            return response.filter(function (coin) {
              return coin.name.toLowerCase().startsWith(value.trim());
            });
          }).then(function (target) {
            return showSearchResult(target);
          })["catch"](function (err) {
            console.log(err);
          });
        } else {
          _this.search_container.innerHTML = '';
          _this.search_box.classList.remove('active');
        }
      };
      var showSearchResult = function showSearchResult(target) {
        if (target.length > 0) {
          _this.search_container.innerHTML = '';
          _this.search_box.classList.add('active');
          var allResult = target.map(function (coin) {
            return "<li data-id=\"".concat(coin.id, "\" class=\"px-4 d-flex align-items-center gap-2 pointer blue-hover\"><img src=\"").concat(coin.image, "\" width=\"20\" alt=\"\">").concat(coin.id, "</li>");
          }).join('');
          _this.search_container.insertAdjacentHTML('beforeend', allResult);
        } else {
          _this.search_container.innerHTML = '';
          _this.search_box.classList.remove('active');
        }
      };
      this.backward_btn.addEventListener('click', function (e) {
        _this.detail_content.innerHTML = '';
        _this.trending_container.style.display = 'grid';
        _this.show_detail.style.cssText = 'opacity:0;visibility:hidden;z-index:-1';
        document.querySelector('#home_section').style.zIndex = '1';
        document.querySelector('#user_section').style.zIndex = '1';
        document.querySelector('.result_box').style.zIndex = '1';
        document.querySelector('#search_section main').style.overflowY = 'auto';
      });
      var showDetailChanges = function showDetailChanges() {
        _this.trending_container.style.display = 'none';
        _this.detail_content.innerHTML = '';
        document.querySelector('#home_section').style.zIndex = '-1';
        document.querySelector('#user_section').style.zIndex = '-1';
        _this.show_detail.style.cssText = 'opacity:1;visibility:visible;z-index:9;overflow:auto';
        document.querySelector('.result_box').style.zIndex = '10';
        document.querySelector('#search_section main').style.overflowY = 'hidden';
        _this.search_input.value = '';
        _this.search_container.innerHTML = '';
        _this.search_box.classList.remove('active');
      };
      this.search_container.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
          showDetailChanges();
          api.fetchSingleCoin(e.target.dataset.id).then(function (response) {
            return showDetail(response);
          })["catch"](function (err) {
            console.log(err);
          });
        }
      });
      var showDetail = function showDetail(data) {
        var _coin_images$small, _coin_categories$, _coin_market$max_supp, _coin_market$total_vo, _coin_market$current_, _coin_market$market_c, _coin_market$ath$usd, _coin_market$atl$usd, _coin_market$ath_chan, _coin_market$atl_chan, _coin_market$high_24h, _coin_market$low_24h$, _coin_market$price_ch, _coin_market$price_ch2, _coin_links$blockchai, _coin_links$homepage$;
        var coin_images = data.image,
          coin_name = data.name,
          coin_symbol = data.symbol,
          coin_categories = data.categories,
          coin_market = data.market_data,
          coin_links = data.links;
        var element = "<detail-card\n                    img=\"".concat((_coin_images$small = coin_images.small) !== null && _coin_images$small !== void 0 ? _coin_images$small : '', "\"\n                    name=\"").concat(coin_name !== null && coin_name !== void 0 ? coin_name : '', "\"\n                    symbol=\"").concat(coin_symbol !== null && coin_symbol !== void 0 ? coin_symbol : '', "\"\n                    category=\"").concat((_coin_categories$ = coin_categories[0]) !== null && _coin_categories$ !== void 0 ? _coin_categories$ : '', "\"\n                    supply=\"").concat((_coin_market$max_supp = coin_market === null || coin_market === void 0 ? void 0 : coin_market.max_supply) !== null && _coin_market$max_supp !== void 0 ? _coin_market$max_supp : '', "\"\n                    volume=\"").concat((_coin_market$total_vo = coin_market === null || coin_market === void 0 ? void 0 : coin_market.total_volume.usd) !== null && _coin_market$total_vo !== void 0 ? _coin_market$total_vo : '', "\"\n                    current=\"").concat((_coin_market$current_ = coin_market === null || coin_market === void 0 ? void 0 : coin_market.current_price.usd) !== null && _coin_market$current_ !== void 0 ? _coin_market$current_ : '', "$\"\n                    market=\"").concat((_coin_market$market_c = coin_market === null || coin_market === void 0 ? void 0 : coin_market.market_cap.usd) !== null && _coin_market$market_c !== void 0 ? _coin_market$market_c : '', "\"\n                    ath=\"").concat((_coin_market$ath$usd = coin_market === null || coin_market === void 0 ? void 0 : coin_market.ath.usd) !== null && _coin_market$ath$usd !== void 0 ? _coin_market$ath$usd : '', "$\"\n                    atl=\"").concat((_coin_market$atl$usd = coin_market === null || coin_market === void 0 ? void 0 : coin_market.atl.usd) !== null && _coin_market$atl$usd !== void 0 ? _coin_market$atl$usd : '', "$\"\n                    ath-c=\"").concat((_coin_market$ath_chan = coin_market === null || coin_market === void 0 ? void 0 : coin_market.ath_change_percentage.usd) !== null && _coin_market$ath_chan !== void 0 ? _coin_market$ath_chan : '', "%\"\n                    atl-c=\"").concat((_coin_market$atl_chan = coin_market === null || coin_market === void 0 ? void 0 : coin_market.atl_change_percentage.usd) !== null && _coin_market$atl_chan !== void 0 ? _coin_market$atl_chan : '', "%\"\n                    h-24=\"").concat((_coin_market$high_24h = coin_market === null || coin_market === void 0 ? void 0 : coin_market.high_24h.usd) !== null && _coin_market$high_24h !== void 0 ? _coin_market$high_24h : '', "$\"\n                    l-24=\"").concat((_coin_market$low_24h$ = coin_market === null || coin_market === void 0 ? void 0 : coin_market.low_24h.usd) !== null && _coin_market$low_24h$ !== void 0 ? _coin_market$low_24h$ : '', "$\"\n                    c-24=\"").concat((_coin_market$price_ch = coin_market === null || coin_market === void 0 ? void 0 : coin_market.price_change_24h) !== null && _coin_market$price_ch !== void 0 ? _coin_market$price_ch : '', "$\"\n                    p-24=\"").concat((_coin_market$price_ch2 = coin_market === null || coin_market === void 0 ? void 0 : coin_market.price_change_percentage_24h) !== null && _coin_market$price_ch2 !== void 0 ? _coin_market$price_ch2 : '', "%\"\n                    block-link=\"").concat((_coin_links$blockchai = coin_links === null || coin_links === void 0 ? void 0 : coin_links.blockchain_site[0]) !== null && _coin_links$blockchai !== void 0 ? _coin_links$blockchai : '', "\"\n                    home-link=\"").concat((_coin_links$homepage$ = coin_links === null || coin_links === void 0 ? void 0 : coin_links.homepage[0]) !== null && _coin_links$homepage$ !== void 0 ? _coin_links$homepage$ : '', "\"\n                    >\n                    </detail-card>");
        _this.detail_content.insertAdjacentHTML('beforeend', element);
      };
    }
  }]);
  return Search;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ }),

/***/ "./src/javascript/components/Tab/Tab.js":
/*!**********************************************!*\
  !*** ./src/javascript/components/Tab/Tab.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Tab = /*#__PURE__*/function () {
  function Tab() {
    _classCallCheck(this, Tab);
    this.tab_content = document.getElementById('tab_content');
    this.tab_tracer = document.querySelector('.tab_tracer');
    this.tab_content = document.getElementById('tab_content');
    this.init();
  }
  _createClass(Tab, [{
    key: "init",
    value: function init() {
      var _this = this;
      var tabContentChange = function tabContentChange(index) {
        document.querySelectorAll('#tab_content section').forEach(function (item) {
          item.style.cssText = 'opacity:0;visibility: hidden';
        });
        _this.tab_content.children[index].style.cssText = 'opacity:1;visibility: visible';
      };
      document.querySelectorAll('.tab').forEach(function (item, index) {
        item.addEventListener('click', function (e) {
          tabContentChange(index);
          if (index === 1) {
            _this.tab_tracer.style.left = "184px";
          } else if (index === 0) {
            _this.tab_tracer.style.left = "0px";
            _this.tab_content.children[0].style.overflowY = 'scroll';
          }
        });
      });
    }
  }]);
  return Tab;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tab);

/***/ }),

/***/ "./src/javascript/components/User/User.js":
/*!************************************************!*\
  !*** ./src/javascript/components/User/User.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api_Api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/Api.js */ "./src/javascript/components/Api/Api.js");
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

var api = new _Api_Api_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
var User = /*#__PURE__*/function () {
  function User() {
    var _this = this;
    _classCallCheck(this, User);
    _defineProperty(this, "closeModal", function (e) {
      document.querySelector('.price_alert_modal').style.cssText = 'opacity: 0;visibility: hidden';
      document.querySelector('.overlay').style.cssText = 'opacity: 0;visibility: hidden';
    });
    _defineProperty(this, "checkRegistration", function () {
      if (document.cookie.includes('token')) {
        window.isLogin = true;
        api.getSpecificUser(_this.extractToken).then(function (response) {
          var _response$fav, _response$alert;
          _this.addUserFavorite(response.fav);
          window.favArray = (_response$fav = response === null || response === void 0 ? void 0 : response.fav) !== null && _response$fav !== void 0 ? _response$fav : [];
          window.alertCoin = (_response$alert = response === null || response === void 0 ? void 0 : response.alert) !== null && _response$alert !== void 0 ? _response$alert : [];
          _this.welcomePreparation(response.email);
        })["catch"](function (err) {
          console.log(err);
        });
      } else {
        window.favArray = [];
        window.alertCoin = [];
        window.isLogin = false;
      }
    });
    _defineProperty(this, "hideSection", function (index) {
      document.querySelectorAll('.section_item').forEach(function (item) {
        item.style.opacity = '0';
        item.style.visibility = 'hidden';
      });
      _this.section_container.children[index].style.opacity = '1';
      _this.section_container.children[index].style.visibility = 'visible';
    });
    _defineProperty(this, "homeRedirection", function () {
      _this.hideSection(0);
      _this.nav_tracer.style.left = '10%';
    });
    _defineProperty(this, "logoutHandler", function () {
      _this.deleteCookie(10);
      _this.clearInputs();
      _this.iconDisappear();
      window.favArray = [];
      window.alertCoin = [];
      window.isLogin = false;
      _this.actionOnLogout();
      _this.turnLinkedCoinToDefault();
    });
    _defineProperty(this, "iconDisappear", function () {
      _this.submit_btn.parentElement.previousElementSibling.children[2].classList.replace('d-inline-block', 'd-none');
      _this.submit_btn.parentElement.previousElementSibling.children[3].classList.replace('d-inline-block', 'd-none');
      _this.submit_btn.parentElement.previousElementSibling.previousElementSibling.children[2].classList.replace('d-inline-block', 'd-none');
      _this.submit_btn.parentElement.previousElementSibling.previousElementSibling.children[3].classList.replace('d-inline-block', 'd-none');
    });
    _defineProperty(this, "setCookie", function (day, id) {
      var date = new Date();
      date.setTime(date.getTime() + day * 24 * 60 * 60 * 1000);
      document.cookie = "token=".concat(id, ";path=/;expires=").concat(date);
    });
    _defineProperty(this, "deleteCookie", function (day) {
      var date = new Date();
      date.setTime(date.getTime() - day * 24 * 60 * 60 * 1000);
      document.cookie = "token=;path=/;expires=".concat(date);
    });
    _defineProperty(this, "passwordHandler", function (e) {
      e.target.nextElementSibling.classList.replace('d-inline-block', 'd-none');
      e.target.nextElementSibling.nextElementSibling.classList.replace('d-inline-block', 'd-none');
      if (_this.passwordRegex.test(e.target.value)) {
        e.target.nextElementSibling.classList.replace('d-none', 'd-inline-block');
        _this.validArray[1].password = true;
      } else {
        e.target.nextElementSibling.nextElementSibling.classList.replace('d-none', 'd-inline-block');
        _this.validArray[1].password = false;
      }
      _this.checkValidation();
    });
    _defineProperty(this, "emailHandler", function (e) {
      e.target.nextElementSibling.classList.replace('d-inline-block', 'd-none');
      e.target.nextElementSibling.nextElementSibling.classList.replace('d-inline-block', 'd-none');
      if (_this.emailRegex.test(e.target.value)) {
        e.target.nextElementSibling.classList.replace('d-none', 'd-inline-block');
        _this.validArray[0].email = true;
      } else {
        e.target.nextElementSibling.nextElementSibling.classList.replace('d-none', 'd-inline-block');
        _this.validArray[0].email = false;
      }
      _this.checkValidation();
    });
    _defineProperty(this, "formHandler", function (e) {
      e.preventDefault();
      _this.iconDisappear();
      if (_this.submit_btn.getAttribute('data-status') === 'sign_up') {
        document.querySelector('#user_section').querySelector('.pre_loader').classList.replace('d-none', 'd-flex');
        var userData = {
          email: _this.emailInput.value,
          password: _this.passwordInput.value
        };
        api.createData(userData).then(function (response) {
          window.isLogin = true;
          _this.welcomePreparation(_this.emailInput.value);
          _this.setCookie(10, response.name);
          _this.clearInputs();
        })["catch"](function (err) {
          console.log(err);
          window.isLogin = false;
        });
      }
      if (_this.submit_btn.getAttribute('data-status') === 'sign_in') {
        api.getAllUsers().then(function (response) {
          return Object.entries(response);
        }).then(function (result) {
          return _this.signInHandler(result);
        })["catch"](function (err) {
          _this.alert_message.classList.replace('d-none', 'd-block');
        });
      }
    });
    _defineProperty(this, "statusToggler", function (e) {
      _this.clearInputs();
      _this.iconDisappear();
      _this.alert_message.classList.replace('d-block', 'd-none');
      if (!_this.isToggle) {
        e.target.innerHTML = 'I have an account';
        _this.statusTag.innerHTML = 'Sign up';
        _this.submit_btn.setAttribute('disabled', '');
        _this.submit_btn.setAttribute('data-status', 'sign_up');
        _this.isToggle = true;
      } else {
        e.target.innerHTML = 'I don\'t have an account';
        _this.statusTag.innerHTML = 'Sign in';
        _this.submit_btn.setAttribute('disabled', '');
        _this.submit_btn.setAttribute('data-status', 'sign_in');
        _this.isToggle = false;
      }
    });
    _defineProperty(this, "signInHandler", function (result) {
      var isExisted = result.some(function (user) {
        return user[1].email === _this.emailInput.value.trim() && user[1].password === _this.passwordInput.value.trim();
      });
      if (isExisted) {
        var _target$0$1$fav, _target$0$, _target$0$1$alert, _target$0$2, _target$0$3;
        _this.alert_message.classList.replace('d-block', 'd-none');
        var target = result.filter(function (user) {
          return user[1].email === _this.emailInput.value && user[1].password === _this.passwordInput.value;
        });
        window.favArray = (_target$0$1$fav = (_target$0$ = target[0][1]) === null || _target$0$ === void 0 ? void 0 : _target$0$.fav) !== null && _target$0$1$fav !== void 0 ? _target$0$1$fav : '';
        window.alertCoin = (_target$0$1$alert = (_target$0$2 = target[0][1]) === null || _target$0$2 === void 0 ? void 0 : _target$0$2.alert) !== null && _target$0$1$alert !== void 0 ? _target$0$1$alert : '';
        window.isLogin = true;
        _this.addUserFavorite((_target$0$3 = target[0][1]) === null || _target$0$3 === void 0 ? void 0 : _target$0$3.fav);
        _this.setCookie(10, target[0][0]);
        _this.welcomePreparation(_this.emailInput.value);
        _this.clearInputs();
      } else {
        window.favArray = [];
        window.alertCoin = [];
        window.isLogin = false;
        _this.alert_message.classList.replace('d-none', 'd-block');
      }
    });
    _defineProperty(this, "favContentShow", function () {
      if (window.favArray.length > 0) {
        _this.fav_content.classList.replace('d-none', 'd-flex');
        _this.login_content.classList.replace('d-flex', 'd-none');
      } else if (window.favArray || window.favArray.length === 0) {
        _this.fav_content.classList.replace('d-flex', 'd-none');
        _this.login_content.classList.replace('d-none', 'd-flex');
      }
    });
    _defineProperty(this, "welcomePreparation", function (email) {
      _this.alert_message.classList.replace('d-block', 'd-none');
      document.querySelector('#user_section').querySelector('.pre_loader').classList.replace('d-flex', 'd-none');
      document.querySelector('#user_section main').style.display = 'none';
      document.querySelector('#user_section .welcome_page').classList.replace('d-none', 'd-block');
      document.querySelector('#user_section .bi-person-plus-fill').style.display = 'none';
      document.querySelector('#user_section .user_email').classList.replace('d-none', 'd-block');
      document.querySelector('#user_section .user_email').innerHTML = email;
      document.querySelector('#following').children[0].classList.replace('d-flex', 'd-none');
      _this.favContentShow();
      // document.querySelector('#following').children[1].classList.replace('d-none','d-flex')
    });
    // >>>>>>>> user section tags <<<<<<<<<<
    this.form = document.querySelector('#form');
    this.submit_btn = document.querySelector('.submit_btn');
    this.emailInput = document.getElementById('email');
    this.passwordInput = document.getElementById('password');
    this.home_redirect_btn = document.querySelector('.home_redirect_btn');
    this.logout_btn = document.querySelector('.logout_btn');
    this.toggler = document.querySelector('.toggler');
    this.statusTag = document.querySelector('.status');

    // >>>>>>>>>>>>>>> home section tags  <<<<<<<<<<<<<
    this.nav_tracer = document.querySelector('.nav_tracer');
    this.alert_message = document.querySelector('.alert_message');
    this.fav_content = document.querySelector('.fav_content');
    this.login_content = document.querySelector('.login_content');
    this.alert_close = document.querySelector('.alert_close');

    // >>>>>>>> sections <<<<<<<<<
    this.following_section = document.querySelector('#following');
    this.user_section = document.querySelector('#user_section');
    this.section_container = document.querySelector('.section_container');
    this.container = document.getElementById('popular');

    // >>>>>>> regex <<<<<<<<
    this.emailRegex = /^([^\W])([A-Za-z0-9\.\_]+)\@([a-zA-Z]{4,6})\.([a-zA-Z]{2,3})$/;
    this.passwordRegex = /^([0-9A-Za-z\#\$\@\*\!]{8,16})$/;

    // >>>>>>> helper <<<<<<<
    this.isToggle = false;
    this.validArray = [{
      email: false
    }, {
      password: false
    }];
    // >>>>>>>>>>> initializing all events <<<<<<<<<<<
    this.init();
  }
  _createClass(User, [{
    key: "init",
    value: function init() {
      this.toggler.addEventListener('click', this.statusToggler);
      this.form.addEventListener('submit', this.formHandler);
      this.emailInput.addEventListener('keyup', this.emailHandler);
      this.passwordInput.addEventListener('keyup', this.passwordHandler);
      this.home_redirect_btn.addEventListener('click', this.homeRedirection);
      this.logout_btn.addEventListener('click', this.logoutHandler);
      this.alert_close.addEventListener('click', this.closeModal);
      this.checkRegistration();
    }
  }, {
    key: "addUserFavorite",
    value: function addUserFavorite(data) {
      this.fav_content.innerHTML = '';
      var convertedData = _toConsumableArray(new Set(data));
      api.homeSection(convertedData, 'yes', this.fav_content);
    }

    // >>>>>>>>>>>>>>> redirect button on user section funcs<<<<<<<<<<<<<<<<<<
  }, {
    key: "actionOnLogout",
    value: function actionOnLogout() {
      this.alert_message.classList.replace('d-block', 'd-none');
      this.submit_btn.setAttribute('disabled', '');
      this.user_section.querySelector('main').style.display = 'block';
      this.user_section.querySelector('.welcome_page').classList.replace('d-block', 'd-none');
      this.user_section.querySelector('.bi-person-plus-fill').style.display = 'block';
      this.user_section.querySelector('.user_email').classList.replace('d-block', 'd-none');
      this.following_section.children[1].classList.replace('d-flex', 'd-none');
      this.following_section.children[2].classList.replace('d-flex', 'd-none');
      this.following_section.children[0].classList.replace('d-none', 'd-flex');
    }
  }, {
    key: "turnLinkedCoinToDefault",
    value: function turnLinkedCoinToDefault() {
      this.container.querySelectorAll('price-card').forEach(function (card) {
        card.shadowRoot.querySelector('.add_to_favorite').children[0].classList.replace('text-green', 'text-muted');
      });
    }

    // >>>>>>>>>>>>>>>> cookie handler func <<<<<<<<<<<<<<<<<<<<<
  }, {
    key: "extractToken",
    get: function get() {
      return document.cookie.slice(document.cookie.indexOf('=') + 1);
    }
  }, {
    key: "checkValidation",
    value: function checkValidation() {
      this.validArray[0].email && this.validArray[1].password ? this.submit_btn.removeAttribute('disabled') : this.submit_btn.setAttribute('disabled', '');
    }
  }, {
    key: "clearInputs",
    value:
    // >>>>>>>>>>>>>>>>> helper <<<<<<<<<<<<<<<<<<
    function clearInputs() {
      this.emailInput.value = '';
      this.passwordInput.value = '';
    }
  }]);
  return User;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);

/***/ }),

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

/***/ "./src/assets/fav.svg":
/*!****************************!*\
  !*** ./src/assets/fav.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fav.svg";

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

/***/ }),

/***/ "./src/assets/welcome.svg":
/*!********************************!*\
  !*** ./src/assets/welcome.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/welcome.svg";

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
/* harmony import */ var _components_Api_Api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Api/Api.js */ "./src/javascript/components/Api/Api.js");
/* harmony import */ var _components_Close_btn_Close_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Close_btn/Close.js */ "./src/javascript/components/Close_btn/Close.js");
/* harmony import */ var _components_Tab_Tab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Tab/Tab.js */ "./src/javascript/components/Tab/Tab.js");
/* harmony import */ var _components_Navbar_Navbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Navbar/Navbar.js */ "./src/javascript/components/Navbar/Navbar.js");
/* harmony import */ var _components_Search_Search_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Search/Search.js */ "./src/javascript/components/Search/Search.js");
/* harmony import */ var _components_User_User_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/User/User.js */ "./src/javascript/components/User/User.js");
/* harmony import */ var _components_Favorite_Favorite_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Favorite/Favorite.js */ "./src/javascript/components/Favorite/Favorite.js");
/* harmony import */ var _style_popup_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style/popup.scss */ "./src/style/popup.scss");
/* harmony import */ var _assets_logo_32_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/logo_32.png */ "./src/assets/logo_32.png");
/* harmony import */ var _assets_logo_16_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/logo_16.png */ "./src/assets/logo_16.png");
/* harmony import */ var _assets_logo_48_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/logo_48.png */ "./src/assets/logo_48.png");
/* harmony import */ var _assets_logo_128_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/logo_128.png */ "./src/assets/logo_128.png");
/* harmony import */ var _assets_login_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/login.svg */ "./src/assets/login.svg");
/* harmony import */ var _assets_fire_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/fire.svg */ "./src/assets/fire.svg");
/* harmony import */ var _assets_welcome_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/welcome.svg */ "./src/assets/welcome.svg");
/* harmony import */ var _assets_fav_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/fav.svg */ "./src/assets/fav.svg");
/* harmony import */ var _manifest_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../manifest.json */ "./manifest.json");

















////////////////////////////////////////////
window.addEventListener('load', function () {
  var api = new _components_Api_Api_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  api.init();
  var close = new _components_Close_btn_Close_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var tab = new _components_Tab_Tab_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
  var nav = new _components_Navbar_Navbar_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
  var search = new _components_Search_Search_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
  var user = new _components_User_User_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
  var fav = new _components_Favorite_Favorite_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
});
})();

/******/ })()
;