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
        _this.showHomeSectionData(finalResult, has_ring, target, is_alert);
        _this.hideError();
        _this.preLoader.style.display = 'none';
        _this.container.style.overflowY = 'scroll';
      })["catch"](function (err) {
        return _this.showError();
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
        if (has_ring === 'yes') {
          _this2.setUserAlert(response, document.querySelector('.fav_content').querySelectorAll('price-card'));
          _this2.setUserFavorite(response, document.querySelector('#popular').querySelectorAll('price-card'));
        }
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
        return _this3.showError();
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
      if (localStorage.getItem(this.name)) {
        return JSON.parse(localStorage.getItem(this.name));
      }
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
/* harmony import */ var _components_Api_Api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Api/Api.js */ "./src/javascript/components/Api/Api.js");


var api = new _components_Api_Api_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
var storage = new _components_Storage_Storage__WEBPACK_IMPORTED_MODULE_0__["default"]();
///////////////////////////////////////////////////////////////////
var interval;
var time = 70;
var timerContainer = [];
var init = function init() {
  timerContainer = [];
  if (storage.getData.length > 0) {
    storage.getData.forEach(function (item) {
      createNotification(item);
    });
  }
};
var createNotification = function createNotification(coinId) {
  interval = setInterval(function () {
    api.fetchCoinPriceOnly(coinId).then(function (response) {
      new Notification("MultiCoin extension price alert", {
        icon: './assets/logo_32.png',
        body: "".concat(coinId, " price is currently ").concat(response[coinId].usd, " $")
      });
    })["catch"](function (err) {
      console.log(err);
    });
  }, time * 1000);
  timerContainer.push({
    name: coinId,
    timer: interval
  });
};
var removeNotification = function removeNotification(coinId) {
  var _timerContainer$targe;
  var targetIndex = timerContainer.findIndex(function (item) {
    return item.name === coinId;
  });
  clearInterval((_timerContainer$targe = timerContainer[targetIndex]) === null || _timerContainer$targe === void 0 ? void 0 : _timerContainer$targe.timer);
  timerContainer.splice(targetIndex, 1);
};
init();

})();

/******/ })()
;