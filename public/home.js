(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Brands.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/main/Brands.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_laikaApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/laikaApi */ "./resources/js/api/laikaApi.js");
/* harmony import */ var _spinner_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../spinner.vue */ "./resources/js/spinner.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Spinner: _spinner_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  name: 'Brands',
  data: function data() {
    return {
      brands: [// {
        //   id: 1,
        //   name: 'Hills',
        //   image: 'https://laikapp.s3.amazonaws.com/dev_images_categories/hills_circulo4.png'
        // },
        // {
        //   id: 2,
        //   name: 'Salvaje',
        //   image: 'https://laikapp.s3.amazonaws.com/dev_images_categories/1592410196_SALVAJE_FOOD_SAS__1226X1028.PNG'
        // },
        // {
        //   id: 3,
        //   name: 'Total Max',
        //   image: 'https://s3.us-east-1.amazonaws.com/laikapp/images_categories/total_max_circulo2.png'
        // },
        // {
        //   id: 4,
        //   name: 'Equilibrio',
        //   image: 'https://s3.us-east-1.amazonaws.com/laikapp/images_categories/EQUILIBRIO_CIRCULO2.png'
        // },
        // {
        //   id: 5,
        //   name: 'Eukanuba',
        //   image: 'https://s3.us-east-1.amazonaws.com/laikapp/images_categories/eukanuba_circulo1.png'
        // },
        // {
        //   id: 6,
        //   name: 'Royal Canin',
        //   image: 'https://laikapp.s3.amazonaws.com/images_categories/1589395980_ROYAL_CANIN_500X500.png'
        // },
        // {
        //   id: 7,
        //   name: 'Peluditos Barf',
        //   image: 'https://s3.us-east-1.amazonaws.com/laikapp/images_categories/PELUDITOS_BARF_logo2.png'
        // },
        // {
        //   id: 8,
        //   name: 'Agility',
        //   image: 'https://laikapp.s3.amazonaws.com/dev_images_categories/AGILITY_GOLD_CIRCULO_OK2.png'
        // }
      ],
      isLoading: false
    };
  },
  created: function created() {
    this.getBrands();
  },
  methods: {
    getBrands: function getBrands() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$laikaApi$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.isLoading = true;
                _context.next = 3;
                return _api_laikaApi__WEBPACK_IMPORTED_MODULE_1__["default"].get('/brands');

              case 3:
                _yield$laikaApi$get = _context.sent;
                data = _yield$laikaApi$get.data;
                _this.brands = data.data;
                _this.isLoading = false;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    redirect_filters: function redirect_filters() {
      console.log('redirect_filters');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Carousel.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/main/Carousel.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Carousel'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Categories.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/main/Categories.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_laikaApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/laikaApi */ "./resources/js/api/laikaApi.js");
/* harmony import */ var _spinner_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../spinner.vue */ "./resources/js/spinner.vue");
/* harmony import */ var _Category_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Category.vue */ "./resources/js/components/main/Category.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Categories',
  components: {
    Category: _Category_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Spinner: _spinner_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      optionsSlider: {
        item: 6,
        autoWidth: true,
        slideMove: 1,
        slideMargin: 10,
        controls: false,
        pager: false,
        responsive: [{
          breakpoint: 1300,
          settings: {
            item: 5
          }
        }, {
          breakpoint: 1024,
          settings: {
            item: 4
          }
        }, {
          breakpoint: 848,
          settings: {
            item: 3
          }
        }, {
          breakpoint: 565,
          settings: {
            item: 2
          }
        }]
      },
      categories: [],
      isLoading: false
    };
  },
  created: function created() {
    this.getCategories();
  },
  updated: function updated() {
    this.sliderLS = $("#light-slider").lightSlider(this.optionsSlider);
  },
  methods: {
    getCategories: function getCategories() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$laikaApi$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.isLoading = true;
                _context.next = 3;
                return _api_laikaApi__WEBPACK_IMPORTED_MODULE_1__["default"].get('/categories');

              case 3:
                _yield$laikaApi$get = _context.sent;
                data = _yield$laikaApi$get.data;
                _this.categories = data.data;
                _this.isLoading = false;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    redirect_filters: function redirect_filters() {
      console.log('redirect_filters');
    },
    bntPrevSlider: function bntPrevSlider() {
      this.sliderLS.goToPrevSlide();
    },
    bntNextSlider: function bntNextSlider() {
      this.sliderLS.goToNextSlide();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Category.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/main/Category.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Category',
  props: {
    category: {
      type: Object,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Information.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/main/Information.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Information'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Product.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/main/Product.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      productCard: this.product
    };
  },
  methods: {
    change_button_stock: function change_button_stock(id, productId) {
      this.$emit('change_button_stock', {
        detailId: id,
        productId: productId
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Products.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/main/Products.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_laikaApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/laikaApi */ "./resources/js/api/laikaApi.js");
/* harmony import */ var _spinner_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../spinner.vue */ "./resources/js/spinner.vue");
/* harmony import */ var _Product_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product.vue */ "./resources/js/components/main/Product.vue");
var _methods;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Products',
  components: {
    Product: _Product_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Spinner: _spinner_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      optionsSlider: {
        item: 4,
        autoWidth: true,
        slideMove: 1,
        slideMargin: 10,
        controls: false,
        pager: false,
        responsive: [{
          breakpoint: 1300,
          settings: {
            item: 4
          }
        }, {
          breakpoint: 1024,
          settings: {
            item: 3
          }
        }, {
          breakpoint: 848,
          settings: {
            item: 2
          }
        }, {
          breakpoint: 565,
          settings: {
            item: 2
          }
        }]
      },
      products: [],
      isLoading: false
    };
  },
  created: function created() {
    this.getProducts();
  },
  updated: function updated() {
    this.sliderLSP = $("#light-slider-product").lightSlider(this.optionsSlider);
  },
  methods: (_methods = {
    getProducts: function getProducts() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$laikaApi$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.isLoading = true;
                _context.next = 3;
                return _api_laikaApi__WEBPACK_IMPORTED_MODULE_1__["default"].get('/products');

              case 3:
                _yield$laikaApi$get = _context.sent;
                data = _yield$laikaApi$get.data;
                _this.products = data.data;
                _this.isLoading = false;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    redirect_filters: function redirect_filters() {
      console.log('redirect_filters');
    },
    bntPrevSlider: function bntPrevSlider() {
      this.sliderLSP.goToPrevSlide();
    },
    bntNextSlider: function bntNextSlider() {
      this.sliderLSP.goToNextSlide();
    },
    open_popup_laikamember: function open_popup_laikamember() {
      console.log('open_popup_laikamember');
    },
    change_button_stock: function change_button_stock() {
      console.log('change_button_stock');
    }
  }, _defineProperty(_methods, "change_button_stock", function change_button_stock(_ref) {
    var detailId = _ref.detailId,
        productId = _ref.productId;
    var indexProduct = this.products.findIndex(function (product) {
      return product.id === productId;
    });

    var _iterator = _createForOfIteratorHelper(this.products[indexProduct].details),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var detail = _step.value;
        detail.selected = detail.id === detailId;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }), _defineProperty(_methods, "add_cart", function add_cart(product) {
    console.log('add_cart:', product);
  }), _methods)
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/spinner.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/spinner.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Spinner'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MainContent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/MainContent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_main_Carousel_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/main/Carousel.vue */ "./resources/js/components/main/Carousel.vue");
/* harmony import */ var _components_main_Categories_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/main/Categories.vue */ "./resources/js/components/main/Categories.vue");
/* harmony import */ var _components_main_Information_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/main/Information.vue */ "./resources/js/components/main/Information.vue");
/* harmony import */ var _components_main_Brands_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/main/Brands.vue */ "./resources/js/components/main/Brands.vue");
/* harmony import */ var _components_main_Products_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/main/Products.vue */ "./resources/js/components/main/Products.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MainContent',
  components: {
    Carousel: _components_main_Carousel_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Categories: _components_main_Categories_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Information: _components_main_Information_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Brands: _components_main_Brands_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Products: _components_main_Products_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProductDetail.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ProductDetail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ProductDetail',
  props: {
    id: {
      type: Number,
      requerid: true
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Categories.vue?vue&type=style&index=0&id=353bc852&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/main/Categories.vue?vue&type=style&index=0&id=353bc852&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btnPrev[data-v-353bc852], .btnNext[data-v-353bc852] {\n  display: inline-block;\n  background-image: url(https://laika.com.co/assets/controls.png);\n  cursor: pointer;\n  width: 35px;\n  height: 32px;\n  background-color: #fff;\n}\n.btnPrev[data-v-353bc852] {\n  background-position:0 0;\n}\n.btnNext[data-v-353bc852] {\n  background-position:-33px 0;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Product.vue?vue&type=style&index=0&id=48a929c4&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/main/Product.vue?vue&type=style&index=0&id=48a929c4&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.box_products[data-v-48a929c4] {\n  padding: 40px 15px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Products.vue?vue&type=style&index=0&id=5fb0a042&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/main/Products.vue?vue&type=style&index=0&id=5fb0a042&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btnPrev[data-v-5fb0a042], .btnNext[data-v-5fb0a042] {\n  display: inline-block;\n  background-image: url(https://laika.com.co/assets/controls.png);\n  cursor: pointer;\n  width: 35px;\n  height: 32px;\n  background-color: #fff;\n}\n.btnPrev[data-v-5fb0a042] {\n  background-position:0 0;\n}\n.btnNext[data-v-5fb0a042] {\n  background-position:-33px 0;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/spinner.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/spinner.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.loader {\n  font-size: 8px;\n  margin: 50px auto;\n  text-indent: -9999em;\n  width: 9em;\n  height: 9em;\n  border-radius: 50%;\n  background: #603e85;\n  background: linear-gradient(to right, #603e85 10%, rgba(52,144,220, 0) 42%);\n  position: relative;\n  -webkit-animation: load3 1.4s infinite linear;\n  animation: load3 1.4s infinite linear;\n  transform: translateZ(0);\n}\n.loader:before {\n  width: 50%;\n  height: 50%;\n  background: #603e85;\n  border-radius: 100% 0 0 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: '';\n}\n.loader:after {\n  background: #ffffff;\n  /* background: #f3f4f6; */\n  width: 75%;\n  height: 75%;\n  border-radius: 50%;\n  content: '';\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n@-webkit-keyframes load3 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes load3 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Categories.vue?vue&type=style&index=0&id=353bc852&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/main/Categories.vue?vue&type=style&index=0&id=353bc852&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=style&index=0&id=353bc852&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Categories.vue?vue&type=style&index=0&id=353bc852&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Product.vue?vue&type=style&index=0&id=48a929c4&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/main/Product.vue?vue&type=style&index=0&id=48a929c4&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=style&index=0&id=48a929c4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Product.vue?vue&type=style&index=0&id=48a929c4&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Products.vue?vue&type=style&index=0&id=5fb0a042&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/main/Products.vue?vue&type=style&index=0&id=5fb0a042&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=style&index=0&id=5fb0a042&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Products.vue?vue&type=style&index=0&id=5fb0a042&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/spinner.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/spinner.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/vue-loader/lib??vue-loader-options!./spinner.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/spinner.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Brands.vue?vue&type=template&id=3f56ad07&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/main/Brands.vue?vue&type=template&id=3f56ad07& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10 m-auto px-1 px-sm-2 px-md-2 px-lg-3",
    },
    [
      _c(
        "h2",
        {
          staticClass: "col-md-12 text-left pb-4 px-0 font-21 font-weight-bold",
        },
        [_vm._v("\n    ¡Más de 100 marcas disponibles!\n  ")]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "d-flex flex-wrap justify-content-center pb-4 mb-4 border_b_cards",
        },
        [
          !_vm.isLoading
            ? _vm._l(_vm.brands, function (brand) {
                return _c(
                  "div",
                  {
                    key: brand.id,
                    staticClass: "card_brands_home cursor_pointer",
                    on: {
                      click: function ($event) {
                        return _vm.redirect_filters(
                          "brands",
                          "",
                          "hills",
                          { slug: "todos" },
                          { slug: "todos" },
                          "todo-para-mascota"
                        )
                      },
                    },
                  },
                  [
                    _c("img", {
                      staticClass: "lazy w-100",
                      attrs: {
                        src: brand.image,
                        alt: brand.name,
                        title: brand.name,
                      },
                    }),
                  ]
                )
              })
            : [_c("Spinner")],
        ],
        2
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Carousel.vue?vue&type=template&id=0db03c4a&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/main/Carousel.vue?vue&type=template&id=0db03c4a& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "carousel slide mb-0 pb-0 w-100",
        attrs: {
          id: "carouselExampleIndicators",
          "data-interval": "4000",
          "data-ride": "carousel",
        },
      },
      [
        _c("div", { staticClass: "carousel-inner" }, [
          _c("div", { staticClass: "carousel-item active" }, [
            _c(
              "a",
              { attrs: { href: "https://laika.com.co/", target: "_blank" } },
              [
                _c("img", {
                  staticClass:
                    "w-100 d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block",
                  attrs: {
                    src: "https://laikapp.s3.amazonaws.com/dev_images_banners/1636259653dia%20marcas%20propias%20menos%20furry_Mesa%20de%20trabajo%201%20copia%2016%20copy%202.png",
                    alt: "",
                    srcset: "",
                  },
                }),
                _vm._v(" "),
                _c("img", {
                  staticClass:
                    "w-100 d-block d-xs-block d-sm-block d-md-none d-lg-none d-xl-none",
                  attrs: {
                    src: "https://laikapp.s3.amazonaws.com/dev_images_banners/1636259653dia%20marcas%20propias%20menos%20furry_Mesa%20de%20trabajo%201%20copia%2016%20copy%202.png",
                    alt: "",
                    srcset: "",
                  },
                }),
              ]
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "carousel-item" }, [
            _c(
              "a",
              {
                attrs: {
                  href: "https://laika.com.co/category/bog/dog/cuidado-e-higiene/todos/todos/todo-para-mascota/1",
                  target: "_blank",
                },
              },
              [
                _c("img", {
                  staticClass:
                    "w-100 d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block",
                  attrs: {
                    src: "https://laikapp.s3.amazonaws.com/dev_images_banners/1635810074noviembre-de-pelos---cuidado-e-higiene-.png ",
                  },
                }),
                _vm._v(" "),
                _c("img", {
                  staticClass:
                    "w-100 d-block d-xs-block d-sm-block d-md-none d-lg-none d-xl-none",
                  attrs: {
                    src: "https://laikapp.s3.amazonaws.com/dev_images_banners/1635810075noviembre-de-pelos---cuidado-e-higiene-.png ",
                  },
                }),
              ]
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "carousel-item" }, [
            _c(
              "a",
              {
                attrs: {
                  href: "https://laika.com.co/brands/bog/dog/hills/todos/todos/todo-para-mascota/1?utm_campaign=gabrica_cachorros_promocion_bog&utm_medium=web&utm_source=backoffice&utm_content=banner_cachorros&utm_term=gabrica_cachorros",
                  target: "_blank",
                },
              },
              [
                _c("img", {
                  staticClass:
                    "w-100 d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block",
                  attrs: {
                    src: "https://laikapp.s3.amazonaws.com/dev_images_banners/1635786127banner-1750x300-puppy-off.jpg ",
                  },
                }),
                _vm._v(" "),
                _c("img", {
                  staticClass:
                    "w-100 d-block d-xs-block d-sm-block d-md-none d-lg-none d-xl-none",
                  attrs: {
                    src: "https://laikapp.s3.amazonaws.com/dev_images_banners/1635786128banner-1750x300-puppy-off.jpg ",
                  },
                }),
              ]
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "carousel-item" }, [
            _c(
              "a",
              {
                attrs: {
                  href: "https://laika.com.co/brands/bog/cat/equilibrio/todos/todos/todo-para-mascota/1?utm_campaign=gabrica_concurso_equilibrio_felino_bog&utm_medium=web&utm_source=backoffice&utm_content=banner_equilibriofelino&utm_term=gabrica_equilibriofelino",
                  target: "_blank",
                },
              },
              [
                _c("img", {
                  staticClass:
                    "w-100 d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block",
                  attrs: {
                    src: "https://laikapp.s3.amazonaws.com/dev_images_banners/1635557070banner-1750x200-concurso-equi-felino.jpg ",
                  },
                }),
                _vm._v(" "),
                _c("img", {
                  staticClass:
                    "w-100 d-block d-xs-block d-sm-block d-md-none d-lg-none d-xl-none",
                  attrs: {
                    src: "https://laikapp.s3.amazonaws.com/dev_images_banners/1635557070banner-1750x200-concurso-equi-felino.jpg ",
                  },
                }),
              ]
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "carousel-item" }, [
            _c(
              "a",
              {
                attrs: {
                  href: "https://laika.com.co/brands/bog/cat/canito/todos/todos/?utm_campaign=canito_canito_bog&utm_medium=web&utm_source=backoffice&utm_content=banner_canito&utm_term=canito_canito",
                  target: "_blank",
                },
              },
              [
                _c("img", {
                  staticClass:
                    "w-100 d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block",
                  attrs: {
                    src: "https://laikapp.s3.amazonaws.com/dev_images_banners/1635784338CANITO_BANNER-1750x300px.png ",
                  },
                }),
                _vm._v(" "),
                _c("img", {
                  staticClass:
                    "w-100 d-block d-xs-block d-sm-block d-md-none d-lg-none d-xl-none",
                  attrs: {
                    src: "https://laikapp.s3.amazonaws.com/dev_images_banners/1635784338CANITO_BANNER-1750x300px.png ",
                  },
                }),
              ]
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "carousel-item" }, [
            _c(
              "a",
              {
                attrs: {
                  href: "https://laika.com.co/brands/bog/dog/eukanuba/todos/todos/todo-para-mascota/1?utm_campaign=royal_canin_eukanuba_bog&utm_medium=web&utm_source=backoffice&utm_content=banner_eukanuba&utm_term=eukanuba_eukanuba",
                  target: "_blank",
                },
              },
              [
                _c("img", {
                  staticClass:
                    "w-100 d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block",
                  attrs: {
                    src: "https://laikapp.s3.amazonaws.com/dev_images_banners/1635961716cachorros%20raza%2Cshn%20y%20euk%20laika%20p11%20-03%20%281%29.png ",
                  },
                }),
                _vm._v(" "),
                _c("img", {
                  staticClass:
                    "w-100 d-block d-xs-block d-sm-block d-md-none d-lg-none d-xl-none",
                  attrs: {
                    src: "https://laikapp.s3.amazonaws.com/dev_images_banners/1635961716cachorros%20raza%2Cshn%20y%20euk%20laika%20p11%20-03%20%281%29.png ",
                  },
                }),
              ]
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "carousel-item" }, [
            _c(
              "a",
              {
                attrs: {
                  href: "https://laika.com.co/brands/bog/dog/royal-canin/todos/todos/todo-para-mascota/1?utm_campaign=royal_canin_raza_bog&utm_medium=web&utm_source=backoffice&utm_content=banner_royalraza&utm_term=royal_raza",
                  target: "_blank",
                },
              },
              [
                _c("img", {
                  staticClass:
                    "w-100 d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block",
                  attrs: {
                    src: "https://laikapp.s3.amazonaws.com/dev_images_banners/1635960711cachorros%20raza%2Cshn%20y%20euk%20laika%20p11%20-02%20%281%29.png ",
                  },
                }),
                _vm._v(" "),
                _c("img", {
                  staticClass:
                    "w-100 d-block d-xs-block d-sm-block d-md-none d-lg-none d-xl-none",
                  attrs: {
                    src: "https://laikapp.s3.amazonaws.com/dev_images_banners/1635960712cachorros%20raza%2Cshn%20y%20euk%20laika%20p11%20-02%20%281%29.png ",
                  },
                }),
              ]
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "carousel-item" }, [
            _c("a", { attrs: { href: ".", target: "_blank" } }, [
              _c("img", {
                staticClass:
                  "w-100 d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block",
                attrs: {
                  src: "https://laikapp.s3.amazonaws.com/dev_images_banners/1613784393close%20up%20DIFERENCIALES%20adaptaciones%20DOMICILIO%20DIA_Mesa%20de%20trabajo%201%20copia%2022%20%281%29.png ",
                },
              }),
              _vm._v(" "),
              _c("img", {
                staticClass:
                  "w-100 d-block d-xs-block d-sm-block d-md-none d-lg-none d-xl-none",
                attrs: {
                  src: "https://laikapp.s3.amazonaws.com/dev_images_banners/1613784393close%20up%20DIFERENCIALES%20adaptaciones%20DOMICILIO%20DIA_Mesa%20de%20trabajo%201%20copia%2022%20%281%29.png ",
                },
              }),
            ]),
          ]),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Categories.vue?vue&type=template&id=353bc852&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/main/Categories.vue?vue&type=template&id=353bc852&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10 m-auto px-1 px-sm-2 px-md-2 px-lg-3",
    },
    [
      _c("div", { staticClass: "pb-4 fix_categories_slider mt-n4" }, [
        _c("div", { staticClass: "d-flex justify-content-between px-3" }, [
          _c(
            "span",
            { staticClass: "text-left px-0 font-21 font-weight-bold" },
            [_vm._v("\n        Categorías\n      ")]
          ),
          _vm._v(" "),
          _c("span", [
            _c("a", {
              staticClass: "font-18 text-secondary btnPrev",
              on: { click: _vm.bntPrevSlider },
            }),
            _vm._v(" "),
            _c("a", {
              staticClass: "font-18 text-secondary btnNext",
              on: { click: _vm.bntNextSlider },
            }),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "d-flex flex-wrap justify-content-center border_b_cards pb-4",
          },
          [
            !_vm.isLoading
              ? [
                  _c(
                    "ul",
                    { attrs: { id: "light-slider" } },
                    _vm._l(_vm.categories, function (category) {
                      return _c(
                        "li",
                        { key: category.id },
                        [
                          _c("Category", {
                            attrs: { category: category },
                            on: { redirect_filters: _vm.redirect_filters },
                          }),
                        ],
                        1
                      )
                    }),
                    0
                  ),
                ]
              : [_c("Spinner")],
          ],
          2
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Category.vue?vue&type=template&id=a7e9830e&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/main/Category.vue?vue&type=template&id=a7e9830e& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "py-4 card_categories_home px-3 pt-2 pb-2 text-center cursor_pointer",
      on: {
        click: function ($event) {
          return _vm.$emit("redirect_filters")
        },
      },
    },
    [
      _c("div", { staticClass: "pb-2" }, [
        _c("img", {
          staticClass: "box_categories_v2 text-center mx-auto d-block lazy",
          attrs: { src: _vm.category.image },
        }),
      ]),
      _vm._v(" "),
      _c("h3", { staticClass: "font-17" }, [_vm._v(_vm._s(_vm.category.name))]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Information.vue?vue&type=template&id=f0c775fe&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/main/Information.vue?vue&type=template&id=f0c775fe& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10 m-auto px-1 px-sm-2 px-md-2 px-lg-3",
      },
      [
        _c(
          "h2",
          {
            staticClass:
              "m-auto col-lg-12 col-xl-12 pb-4 px-0 font-21 text-left font-weight-bold",
          },
          [_vm._v("\n    Encuentra todo para tus peludos en un solo lugar\n  ")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 pb-4 px-0" }, [
          _c(
            "div",
            {
              staticClass:
                "d-flex flex-wrap justify-content-center border_b_cards pb-4",
            },
            [
              _c("div", { staticClass: "text-center card_info_secure_home" }, [
                _c("div", { staticClass: "py-2" }, [
                  _c("img", {
                    staticClass: "lazy",
                    attrs: {
                      height: "62",
                      src: "https://laika.com.co/assets/home/delivery.png",
                      alt: "",
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("h3", { staticClass: "font-19 font-weight-bold" }, [
                  _vm._v("Entregas el mismo día"),
                ]),
                _vm._v(" "),
                _c("h4", { staticClass: "font-15" }, [
                  _vm._v(
                    "Entregamos todo lo que necesitas, cuando lo necesitas"
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-center card_info_secure_home" }, [
                _c(
                  "div",
                  {
                    staticClass: "py-2",
                    staticStyle: {
                      "padding-left": "4em",
                      "padding-right": "4em",
                    },
                  },
                  [
                    _c("img", {
                      staticClass: "lazy",
                      attrs: {
                        height: "62",
                        src: "https://laika.com.co/assets/home/secure_payment.png",
                        alt: "",
                      },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c("h3", { staticClass: "font-19 font-weight-bold" }, [
                  _vm._v("Pago online o contra entrega"),
                ]),
                _vm._v(" "),
                _c("h4", { staticClass: "font-15" }, [
                  _vm._v(
                    "Escoge tu método de pago.¡No te preocupes! contamos con pasarelas de pagos certificadas y seguras"
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-center card_info_secure_home" }, [
                _c(
                  "div",
                  {
                    staticClass: "py-2",
                    staticStyle: {
                      "padding-left": "4em",
                      "padding-right": "4em",
                    },
                  },
                  [
                    _c("img", {
                      staticClass: "lazy",
                      attrs: {
                        height: "62",
                        src: "https://laika.com.co/assets/home/all_for_pets.png",
                        alt: "",
                      },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c("h3", { staticClass: "font-19 font-weight-bold" }, [
                  _vm._v("Todo lo que necesitas "),
                ]),
                _vm._v(" "),
                _c("h4", { staticClass: "font-15" }, [
                  _vm._v(
                    "Contamos con más de 4.000 productos y servicios. Encuentra todo lo que necesitas para tu peludo"
                  ),
                ]),
              ]),
            ]
          ),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Product.vue?vue&type=template&id=48a929c4&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/main/Product.vue?vue&type=template&id=48a929c4&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "box_products position-relative font-weight-bold" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "border_card_products" }, [
        _c(
          "span",
          {
            staticClass: "badge badge_card_product",
            attrs: { id: "dog_reference_promotion_4412" },
          },
          [
            _c("img", {
              staticClass: "lazy",
              attrs: {
                src: "https://laika.com.co/assets/star.svg",
                width: "70",
              },
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "font-weight-bold text_badge_product_card_top",
                staticStyle: { top: "47%", "font-size": "20px" },
                attrs: { id: "dog_value_reference_promotion_4412" },
              },
              [_vm._v(_vm._s(_vm.productCard.discount) + "%")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "font_nova_bold text_badge_product_card_bottom",
                staticStyle: { display: "none" },
              },
              [_vm._v("DESCUENTO")]
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row classss justify-content-center" },
          [
            _c(
              "router-link",
              {
                attrs: {
                  to: {
                    name: "ProductDetail",
                    params: { id: _vm.productCard.id },
                  },
                },
              },
              [
                _c("img", {
                  staticClass:
                    "img_card_products ml-auto mr-auto mt-3 mb-3 lazy",
                  staticStyle: { width: "180px" },
                  attrs: {
                    id: "img_product_dog_4412",
                    alt: _vm.productCard.name,
                    src: _vm.productCard.image,
                  },
                }),
              ]
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card_products ml-3 mt-1 mr-3 text-left" },
          [
            _c(
              "router-link",
              {
                attrs: {
                  to: {
                    name: "ProductDetail",
                    params: { id: _vm.productCard.id },
                  },
                },
              },
              [
                _c(
                  "h3",
                  {
                    staticClass: "mb-2 text_product_card font-weight-bold",
                    attrs: {
                      "data-toggle": "tooltip",
                      "data-placement": "top",
                      title: _vm.productCard.name,
                    },
                  },
                  [_vm._v(_vm._s(_vm.productCard.name))]
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "p",
              { staticClass: "mb-1" },
              _vm._l(_vm.productCard.stars, function (star, index) {
                return _c("i", {
                  key: index,
                  staticClass: "fa-xs fa fa-star card_star",
                })
              }),
              0
            ),
            _vm._v(" "),
            _c("p", { staticClass: "h6 m-0 heigh_container_info_cards" }, [
              _c("span", { attrs: { id: "price_products_dog_4412" } }, [
                _c(
                  "span",
                  {
                    staticClass: "mr-1 font-weight-bold",
                    attrs: { id: "price_dog_4412" },
                  },
                  [
                    _vm._v(
                      "$" +
                        _vm._s(
                          new Intl.NumberFormat("es-CO").format(
                            _vm.productCard.price
                          )
                        )
                    ),
                  ]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "ml-2 text_old_product " }, [
                  _c("span", [_vm._v("Antes")]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "del",
                    {
                      staticClass: "text_old_price font-11",
                      attrs: { id: "price_old_dog_4412" },
                    },
                    [
                      _vm._v(
                        "$" +
                          _vm._s(
                            new Intl.NumberFormat("es-CO").format(
                              _vm.productCard.price_old
                            )
                          )
                      ),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass:
                      "row m-0 pt-1 mt-1 line_throught_info_cards_top",
                  },
                  [
                    _c(
                      "span",
                      { staticClass: "mr-1 color_laika_member font-20" },
                      [
                        _c(
                          "span",
                          {
                            staticClass:
                              "mr-2 dog_price_laika_member_4412 font-weight-bold",
                          },
                          [
                            _vm._v(
                              "$" +
                                _vm._s(
                                  new Intl.NumberFormat("es-CO").format(
                                    _vm.productCard.price_member
                                  )
                                )
                            ),
                          ]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "btn_container_laika_member" }, [
                      _c("img", {
                        staticClass: "ml-1 mb-1 lazy",
                        staticStyle: { "align-self": "stretch" },
                        attrs: {
                          width: "80",
                          src: "https://laika.com.co/assets/laikamemeber.svg",
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "font-12 btn_member btn_laika_member_cards",
                          on: {
                            click: function ($event) {
                              return _vm.open_popup_laikamember()
                            },
                          },
                        },
                        [_vm._v("ADQUIÉRELA YA")]
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _vm._m(1),
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "custom-radio-button pl-1 pt-2 custom-radio-button-scroll",
              },
              _vm._l(_vm.productCard.details, function (detail) {
                return _c("div", { key: detail.id }, [
                  _c("input", {
                    attrs: {
                      type: "radio",
                      name: detail.name,
                      id: detail.id,
                      required: "",
                    },
                    domProps: { value: detail.name },
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "text_quantity_product text_overflow_1_line",
                      attrs: { title: detail.name },
                    },
                    [
                      _c(
                        "label",
                        {
                          class: [
                            detail.selected ? "bg_purple text-white" : "",
                          ],
                          attrs: { for: detail.selected },
                          on: {
                            click: function ($event) {
                              return _vm.change_button_stock(
                                detail.id,
                                _vm.product.id
                              )
                            },
                          },
                        },
                        [
                          _vm._v(
                            "\n              " +
                              _vm._s(detail.name) +
                              "\n            "
                          ),
                        ]
                      ),
                    ]
                  ),
                ])
              }),
              0
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-footer p-0 mt-1 bg_purple rounded-lg" },
          [
            _c("div", [
              _c(
                "button",
                {
                  staticClass: "btn btn-lg btn-block info_bubble text-white",
                  attrs: {
                    type: "submit",
                    id: "btn_general_universe_offers_dog_4412",
                  },
                  on: {
                    click: function ($event) {
                      return _vm.$emit("add_cart", _vm.productCard)
                    },
                  },
                },
                [_vm._v("\n          Agregar al carrito\n        ")]
              ),
            ]),
          ]
        ),
      ]),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { attrs: { id: "product_out_of_stock_dog_4412" } }, [
      _c("div", {}),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { attrs: { id: "txt_out_of_stock_dog_4412" } }, [
      _c("span", {
        staticClass: "txt_out_of_stock",
        attrs: { id: "out_of_stock_supplier" },
      }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Products.vue?vue&type=template&id=5fb0a042&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/main/Products.vue?vue&type=template&id=5fb0a042&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10 m-auto px-1 px-sm-2 px-md-2 px-lg-3",
    },
    [
      _c("div", { staticClass: "pb-4 fix_categories_slider mt-n4" }, [
        _c("div", { staticClass: "d-flex justify-content-between px-3" }, [
          _c(
            "span",
            { staticClass: "text-left px-0 font-21 font-weight-bold" },
            [_vm._v("\n        Un universo lleno de ofertas\n      ")]
          ),
          _vm._v(" "),
          _c("span", [
            _c("a", {
              staticClass: "font-18 text-secondary btnPrev",
              on: { click: _vm.bntPrevSlider },
            }),
            _vm._v(" "),
            _c("a", {
              staticClass: "font-18 text-secondary btnNext",
              on: { click: _vm.bntNextSlider },
            }),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "d-flex flex-wrap justify-content-center border_b_cards pb-2",
          },
          [
            !_vm.isLoading
              ? [
                  _c(
                    "ul",
                    { attrs: { id: "light-slider-product" } },
                    _vm._l(this.products, function (product) {
                      return _c(
                        "li",
                        { key: product.id },
                        [
                          _c("Product", {
                            attrs: { product: product },
                            on: {
                              change_button_stock: _vm.change_button_stock,
                              add_cart: _vm.add_cart,
                            },
                          }),
                        ],
                        1
                      )
                    }),
                    0
                  ),
                ]
              : [_c("Spinner")],
          ],
          2
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/spinner.vue?vue&type=template&id=2240138b&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/spinner.vue?vue&type=template&id=2240138b& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "loader" }, [_vm._v("Loading...")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MainContent.vue?vue&type=template&id=3a15179e&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/MainContent.vue?vue&type=template&id=3a15179e& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row m-0 p-0 justify-content-center" }, [
    _c("input", { attrs: { type: "hidden", id: "home_view" } }),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "w-100",
        staticStyle: { "text-align": "-webkit-center" },
        attrs: { id: "categories_home" },
      },
      [
        _c("Carousel"),
        _vm._v(" "),
        _c("Categories"),
        _vm._v(" "),
        _c("Information"),
        _vm._v(" "),
        _c("Brands"),
        _vm._v(" "),
        _c("Products"),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProductDetail.vue?vue&type=template&id=00c560de&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ProductDetail.vue?vue&type=template&id=00c560de& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h1", [_vm._v("Product Detail Page " + _vm._s(_vm.id))]),
      _vm._v(" "),
      _c("router-link", { attrs: { to: { name: "Home" } } }, [
        _vm._v("Regresar a Inicio"),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/api/laikaApi.js":
/*!**************************************!*\
  !*** ./resources/js/api/laikaApi.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var laikaApi = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "".concat("http://localhost:8000", "/api/v1")
});
/* harmony default export */ __webpack_exports__["default"] = (laikaApi);

/***/ }),

/***/ "./resources/js/components/main/Brands.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/main/Brands.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Brands_vue_vue_type_template_id_3f56ad07___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brands.vue?vue&type=template&id=3f56ad07& */ "./resources/js/components/main/Brands.vue?vue&type=template&id=3f56ad07&");
/* harmony import */ var _Brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Brands.vue?vue&type=script&lang=js& */ "./resources/js/components/main/Brands.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Brands_vue_vue_type_template_id_3f56ad07___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Brands_vue_vue_type_template_id_3f56ad07___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/Brands.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/Brands.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/main/Brands.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Brands.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Brands.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/main/Brands.vue?vue&type=template&id=3f56ad07&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/main/Brands.vue?vue&type=template&id=3f56ad07& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_template_id_3f56ad07___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Brands.vue?vue&type=template&id=3f56ad07& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Brands.vue?vue&type=template&id=3f56ad07&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_template_id_3f56ad07___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_template_id_3f56ad07___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/main/Carousel.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/main/Carousel.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carousel_vue_vue_type_template_id_0db03c4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel.vue?vue&type=template&id=0db03c4a& */ "./resources/js/components/main/Carousel.vue?vue&type=template&id=0db03c4a&");
/* harmony import */ var _Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel.vue?vue&type=script&lang=js& */ "./resources/js/components/main/Carousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Carousel_vue_vue_type_template_id_0db03c4a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Carousel_vue_vue_type_template_id_0db03c4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/Carousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/Carousel.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/main/Carousel.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Carousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/main/Carousel.vue?vue&type=template&id=0db03c4a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/main/Carousel.vue?vue&type=template&id=0db03c4a& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_0db03c4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=template&id=0db03c4a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Carousel.vue?vue&type=template&id=0db03c4a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_0db03c4a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_0db03c4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/main/Categories.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/main/Categories.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Categories_vue_vue_type_template_id_353bc852_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories.vue?vue&type=template&id=353bc852&scoped=true& */ "./resources/js/components/main/Categories.vue?vue&type=template&id=353bc852&scoped=true&");
/* harmony import */ var _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories.vue?vue&type=script&lang=js& */ "./resources/js/components/main/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Categories_vue_vue_type_style_index_0_id_353bc852_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Categories.vue?vue&type=style&index=0&id=353bc852&scoped=true&lang=css& */ "./resources/js/components/main/Categories.vue?vue&type=style&index=0&id=353bc852&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Categories_vue_vue_type_template_id_353bc852_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Categories_vue_vue_type_template_id_353bc852_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "353bc852",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/Categories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/Categories.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/main/Categories.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/main/Categories.vue?vue&type=style&index=0&id=353bc852&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/main/Categories.vue?vue&type=style&index=0&id=353bc852&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_style_index_0_id_353bc852_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=style&index=0&id=353bc852&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Categories.vue?vue&type=style&index=0&id=353bc852&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_style_index_0_id_353bc852_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_style_index_0_id_353bc852_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_style_index_0_id_353bc852_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_style_index_0_id_353bc852_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/main/Categories.vue?vue&type=template&id=353bc852&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/main/Categories.vue?vue&type=template&id=353bc852&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_353bc852_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=template&id=353bc852&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Categories.vue?vue&type=template&id=353bc852&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_353bc852_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_353bc852_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/main/Category.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/main/Category.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Category_vue_vue_type_template_id_a7e9830e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Category.vue?vue&type=template&id=a7e9830e& */ "./resources/js/components/main/Category.vue?vue&type=template&id=a7e9830e&");
/* harmony import */ var _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category.vue?vue&type=script&lang=js& */ "./resources/js/components/main/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Category_vue_vue_type_template_id_a7e9830e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Category_vue_vue_type_template_id_a7e9830e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/Category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/Category.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/main/Category.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/main/Category.vue?vue&type=template&id=a7e9830e&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/main/Category.vue?vue&type=template&id=a7e9830e& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_a7e9830e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=template&id=a7e9830e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Category.vue?vue&type=template&id=a7e9830e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_a7e9830e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_a7e9830e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/main/Information.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/main/Information.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Information_vue_vue_type_template_id_f0c775fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Information.vue?vue&type=template&id=f0c775fe& */ "./resources/js/components/main/Information.vue?vue&type=template&id=f0c775fe&");
/* harmony import */ var _Information_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Information.vue?vue&type=script&lang=js& */ "./resources/js/components/main/Information.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Information_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Information_vue_vue_type_template_id_f0c775fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Information_vue_vue_type_template_id_f0c775fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/Information.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/Information.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/main/Information.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Information_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Information.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Information.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Information_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/main/Information.vue?vue&type=template&id=f0c775fe&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/main/Information.vue?vue&type=template&id=f0c775fe& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Information_vue_vue_type_template_id_f0c775fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Information.vue?vue&type=template&id=f0c775fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Information.vue?vue&type=template&id=f0c775fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Information_vue_vue_type_template_id_f0c775fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Information_vue_vue_type_template_id_f0c775fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/main/Product.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/main/Product.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_48a929c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=48a929c4&scoped=true& */ "./resources/js/components/main/Product.vue?vue&type=template&id=48a929c4&scoped=true&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/components/main/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Product_vue_vue_type_style_index_0_id_48a929c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product.vue?vue&type=style&index=0&id=48a929c4&scoped=true&lang=css& */ "./resources/js/components/main/Product.vue?vue&type=style&index=0&id=48a929c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_48a929c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_48a929c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "48a929c4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/Product.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/main/Product.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/main/Product.vue?vue&type=style&index=0&id=48a929c4&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/main/Product.vue?vue&type=style&index=0&id=48a929c4&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_48a929c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=style&index=0&id=48a929c4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Product.vue?vue&type=style&index=0&id=48a929c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_48a929c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_48a929c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_48a929c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_48a929c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/main/Product.vue?vue&type=template&id=48a929c4&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/main/Product.vue?vue&type=template&id=48a929c4&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_48a929c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=48a929c4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Product.vue?vue&type=template&id=48a929c4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_48a929c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_48a929c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/main/Products.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/main/Products.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products_vue_vue_type_template_id_5fb0a042_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=5fb0a042&scoped=true& */ "./resources/js/components/main/Products.vue?vue&type=template&id=5fb0a042&scoped=true&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/components/main/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Products_vue_vue_type_style_index_0_id_5fb0a042_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Products.vue?vue&type=style&index=0&id=5fb0a042&scoped=true&lang=css& */ "./resources/js/components/main/Products.vue?vue&type=style&index=0&id=5fb0a042&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_vue_vue_type_template_id_5fb0a042_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Products_vue_vue_type_template_id_5fb0a042_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5fb0a042",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/Products.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/Products.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/main/Products.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/main/Products.vue?vue&type=style&index=0&id=5fb0a042&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/main/Products.vue?vue&type=style&index=0&id=5fb0a042&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_5fb0a042_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=style&index=0&id=5fb0a042&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Products.vue?vue&type=style&index=0&id=5fb0a042&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_5fb0a042_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_5fb0a042_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_5fb0a042_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_5fb0a042_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/main/Products.vue?vue&type=template&id=5fb0a042&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/main/Products.vue?vue&type=template&id=5fb0a042&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_5fb0a042_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=template&id=5fb0a042&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main/Products.vue?vue&type=template&id=5fb0a042&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_5fb0a042_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_5fb0a042_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/spinner.vue":
/*!**********************************!*\
  !*** ./resources/js/spinner.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spinner_vue_vue_type_template_id_2240138b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinner.vue?vue&type=template&id=2240138b& */ "./resources/js/spinner.vue?vue&type=template&id=2240138b&");
/* harmony import */ var _spinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner.vue?vue&type=script&lang=js& */ "./resources/js/spinner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _spinner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner.vue?vue&type=style&index=0&lang=css& */ "./resources/js/spinner.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _spinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _spinner_vue_vue_type_template_id_2240138b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _spinner_vue_vue_type_template_id_2240138b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/spinner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/spinner.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./resources/js/spinner.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_spinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./spinner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/spinner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_spinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/spinner.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************!*\
  !*** ./resources/js/spinner.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_spinner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader??ref--6-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/vue-loader/lib??vue-loader-options!./spinner.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/spinner.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_spinner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_spinner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_spinner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_spinner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/spinner.vue?vue&type=template&id=2240138b&":
/*!*****************************************************************!*\
  !*** ./resources/js/spinner.vue?vue&type=template&id=2240138b& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_spinner_vue_vue_type_template_id_2240138b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./spinner.vue?vue&type=template&id=2240138b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/spinner.vue?vue&type=template&id=2240138b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_spinner_vue_vue_type_template_id_2240138b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_spinner_vue_vue_type_template_id_2240138b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/MainContent.vue":
/*!********************************************!*\
  !*** ./resources/js/views/MainContent.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainContent_vue_vue_type_template_id_3a15179e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainContent.vue?vue&type=template&id=3a15179e& */ "./resources/js/views/MainContent.vue?vue&type=template&id=3a15179e&");
/* harmony import */ var _MainContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainContent.vue?vue&type=script&lang=js& */ "./resources/js/views/MainContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MainContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainContent_vue_vue_type_template_id_3a15179e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainContent_vue_vue_type_template_id_3a15179e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/MainContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/MainContent.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/MainContent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MainContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MainContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/MainContent.vue?vue&type=template&id=3a15179e&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/MainContent.vue?vue&type=template&id=3a15179e& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainContent_vue_vue_type_template_id_3a15179e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MainContent.vue?vue&type=template&id=3a15179e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MainContent.vue?vue&type=template&id=3a15179e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainContent_vue_vue_type_template_id_3a15179e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainContent_vue_vue_type_template_id_3a15179e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/ProductDetail.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/ProductDetail.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductDetail_vue_vue_type_template_id_00c560de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductDetail.vue?vue&type=template&id=00c560de& */ "./resources/js/views/ProductDetail.vue?vue&type=template&id=00c560de&");
/* harmony import */ var _ProductDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductDetail.vue?vue&type=script&lang=js& */ "./resources/js/views/ProductDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductDetail_vue_vue_type_template_id_00c560de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductDetail_vue_vue_type_template_id_00c560de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ProductDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ProductDetail.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/ProductDetail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProductDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ProductDetail.vue?vue&type=template&id=00c560de&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/ProductDetail.vue?vue&type=template&id=00c560de& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_template_id_00c560de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductDetail.vue?vue&type=template&id=00c560de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProductDetail.vue?vue&type=template&id=00c560de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_template_id_00c560de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_template_id_00c560de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);