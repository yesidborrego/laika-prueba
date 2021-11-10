(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ProductDetail"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProductDetail.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ProductDetail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_laikaApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/laikaApi */ "./resources/js/api/laikaApi.js");
/* harmony import */ var _components_spinner_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/spinner.vue */ "./resources/js/components/spinner.vue");
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
  },
  components: {
    Spinner: _components_spinner_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      quantity: 1,
      product: {},
      isLoading: false,
      productId: null
    };
  },
  created: function created() {
    this.getProduct();
  },
  methods: {
    getProduct: function getProduct() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$laikaApi$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.isLoading = true;
                _context.prev = 1;

                _this.getIdProduct();

                _context.next = 5;
                return _api_laikaApi__WEBPACK_IMPORTED_MODULE_1__["default"].get("/products/".concat(_this.productId));

              case 5:
                _yield$laikaApi$get = _context.sent;
                data = _yield$laikaApi$get.data;
                _this.product = data.data;
                _this.isLoading = false;
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 11]]);
      }))();
    },
    add: function add() {
      this.quantity = this.quantity + 1;
    },
    remove: function remove() {
      if (this.quantity > 1) this.quantity = this.quantity - 1;
    },
    add_cart_detail: function add_cart_detail() {
      console.log('add_cart_detail');
    },
    open_popup_laikamember: function open_popup_laikamember() {
      console.log('open_popup_laikamember');
    },
    change_button_stock: function change_button_stock(detailId) {
      var _iterator = _createForOfIteratorHelper(this.product.details),
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
    },
    send_global_notification: function send_global_notification() {
      console.log('send_global_notification');
    },
    getIdProduct: function getIdProduct() {
      this.productId = localStorage.getItem('laikaApp-productId');

      if (this.id) {
        localStorage.setItem('laikaApp-productId', this.id);
        this.productId = this.id;
      }
    }
  }
});

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
  return _c("div", [
    _c("h1", { staticClass: "d-none" }, [_vm._v("Laika Mascotas")]),
    _vm._v(" "),
    _c("div", { staticClass: "font_causten_round_semi_bold_oblique" }, [
      _c("input", {
        attrs: { type: "hidden", id: "detail_product_ref", value: "true" },
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "col-12 col-sm-12 col-md-11 col-lg-11 col-xl-10 m-auto px-3 px-sm-4 px-md-0 px-xl-0",
        },
        [
          _c(
            "div",
            {
              staticClass:
                "row shadow-sm pt-0 pb-3 mx-3 mb-5 mt-3 bg-white rounded",
              attrs: { id: "product_detail" },
            },
            [
              _c("div", { staticClass: "col-md-6 col-lg-6 col-xl-6" }, [
                _c("span", {
                  attrs: { id: "product_out_of_stock_detail_1827" },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "text-center mb-2" }, [
                  _c("div", { staticStyle: { margin: "0px auto" } }, [
                    _c("input", {
                      staticClass: "checkImg",
                      staticStyle: { display: "none" },
                      attrs: { type: "checkbox", id: "zoomCheckPrincipal" },
                    }),
                    _vm._v(" "),
                    _c("label"),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "zoomCheckPrincipal" } }, [
                      _c(
                        "span",
                        {
                          staticClass: "badge badge_card_product",
                          attrs: { id: "dog_reference_promotion_" },
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
                              staticClass: "text_badge_product_card_top",
                              staticStyle: { top: "47%", "font-size": "20px" },
                              attrs: { id: "dog_value_reference_promotion_" },
                            },
                            [_vm._v(_vm._s(_vm.product.discount) + "%")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "font_nova_bold text_badge_product_card_bottom",
                              staticStyle: { display: "none" },
                            },
                            [_vm._v("DESCUENTO")]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "img-fluid rounded lazy",
                        staticStyle: { "max-height": "300px" },
                        attrs: {
                          src: _vm.product.image,
                          alt: _vm.product.name,
                          id: "img_product_detail_main",
                        },
                      }),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _vm._m(0),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-sm-12 col-md-6 col-lg-5 col-xl-4 pt-4" },
                [
                  _c("div", { staticClass: "font_nova_semibold" }, [
                    _c(
                      "h2",
                      {
                        staticClass: "text_product_card mt-2 mb-2",
                        staticStyle: { color: "rgba(2, 0, 5, 0.65)" },
                        attrs: {
                          id: "name_product_detail",
                          "data-toggle": "tooltip",
                          "data-placement": "top",
                          title: _vm.product.name,
                        },
                      },
                      [_vm._v(_vm._s(_vm.product.name))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticStyle: { color: "#3e82f7", "font-size": "15px" },
                      },
                      [
                        _c("b", [_vm._v("Marca:")]),
                        _vm._v(" "),
                        _c("span", {
                          attrs: { id: "brand_prod_detail" },
                          domProps: { textContent: _vm._s(_vm.product.brand) },
                        }),
                        _vm._v(" "),
                        _c("input", {
                          attrs: {
                            type: "hidden",
                            id: "category_prod_detail",
                            value: "Snacks",
                          },
                        }),
                        _vm._v(" "),
                        _c("input", {
                          attrs: {
                            type: "hidden",
                            id: "category_prod_id",
                            value: "2",
                          },
                        }),
                        _vm._v(" "),
                        _c("input", {
                          attrs: {
                            type: "hidden",
                            id: "subcategory_prod_detail",
                            value: "Galletas y Snacks",
                          },
                        }),
                        _vm._v(" "),
                        _c("input", {
                          attrs: {
                            type: "hidden",
                            id: "subcategory_prod_detail_id",
                            value: "204",
                          },
                        }),
                        _vm._v(" "),
                        _c("input", {
                          attrs: {
                            type: "hidden",
                            id: "brand_prod_detail_id",
                            value: "161",
                          },
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "font-15 font_nova_semibold",
                        staticStyle: {
                          "margin-bottom": "0px",
                          "margin-top": "0px",
                        },
                      },
                      _vm._l(_vm.product.stars, function (star, index) {
                        return _c("i", {
                          key: index,
                          staticClass: "fa-xs fa fa-star card_star",
                        })
                      }),
                      0
                    ),
                  ]),
                  _vm._v(" "),
                  _c("span", { attrs: { id: "price_products_detail_1827" } }, [
                    _c(
                      "div",
                      {
                        staticClass: "ml-auto mr-auto bg-white",
                        staticStyle: { "padding-right": "32px" },
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "card_products ml-0 mt-1 mr-3" },
                          [
                            _c("input", {
                              attrs: {
                                type: "hidden",
                                id: "id_prod_detail",
                                value: "1827",
                              },
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "font_nova_semibold",
                                staticStyle: { "font-size": "10px" },
                              },
                              [
                                _c(
                                  "small",
                                  {
                                    staticStyle: {
                                      color: "#5d5a5a",
                                      "font-size": "12px!important",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                      Precio normal\n                    "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticClass: "h6 text_product_card mb-0",
                                    staticStyle: { color: "#5d5a5a" },
                                  },
                                  [
                                    _c(
                                      "span",
                                      {
                                        staticStyle: {
                                          color: "#242424",
                                          "font-size": "30px",
                                        },
                                        attrs: { id: "price_detail_1827" },
                                      },
                                      [_vm._v("$" + _vm._s(_vm.product.price))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "ml-4 mt-1 text_old_product",
                                      },
                                      [
                                        _vm._v(
                                          "Antes\n                        "
                                        ),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c(
                                          "strike",
                                          {
                                            staticClass: "text_old_price",
                                            attrs: {
                                              id: "price_old_detail_1827",
                                            },
                                          },
                                          [
                                            _vm._v(
                                              "$" +
                                                _vm._s(_vm.product.price_old)
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("hr", { staticClass: "line_membership mb-0 mt-2" }),
                    _vm._v(" "),
                    _c("div", {}, [
                      _c("span", { staticClass: "row m-0" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "mr-3 font_nova_semibold price_laika_member_adquire",
                            staticStyle: {
                              color: "#bc2f10",
                              "font-size": "30px",
                              display: "grid",
                            },
                          },
                          [
                            _c(
                              "span",
                              {
                                staticClass: "font-14 ",
                                staticStyle: {
                                  color: "#707070",
                                  "margin-bottom": "-7px",
                                },
                              },
                              [_vm._v("Precio para")]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  " mr-2 detail_price_laika_member_1827",
                              },
                              [
                                _vm._v(
                                  "$" + _vm._s(_vm.product.price_member) + " "
                                ),
                              ]
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "adquire_laika_member_btn",
                            staticStyle: { display: "grid" },
                          },
                          [
                            _c("img", {
                              staticClass: "ml-1 lazy",
                              staticStyle: { "align-self": "stretch" },
                              attrs: {
                                width: "100",
                                src: "https://laika.com.co/assets/laikamemeber.svg",
                              },
                            }),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "font-12 shadow btn_member",
                                staticStyle: {
                                  padding: "0px 7px",
                                  border: "0",
                                  "vertical-align": "text-top",
                                },
                                on: { click: _vm.open_popup_laikamember },
                              },
                              [_vm._v("ADQUIÉRELA YA")]
                            ),
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "height_detail_product_prices d-none",
                    }),
                    _vm._v(" "),
                    _c(
                      "small",
                      {
                        staticClass: "font_nova_semibold",
                        staticStyle: {
                          color: "#242424",
                          "font-size": "17px !important",
                        },
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t  Seleccione su referencia\n\t\t\t\t\t\t    "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "custom-radio-button pt-2 custom-radio-button-scroll",
                      },
                      _vm._l(_vm.product.details, function (detail) {
                        return _c("div", { key: detail.id }, [
                          _c("input", {
                            attrs: {
                              type: "hidden",
                              id: "reference_product_detail_hidden",
                            },
                            domProps: { value: _vm.product.name },
                          }),
                          _vm._v(" "),
                          _c("input", {
                            attrs: {
                              type: "hidden",
                              id: "reference_product_detail_hidden_id",
                              value: "1827",
                            },
                          }),
                          _vm._v(" "),
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
                              staticClass:
                                "text_quantity_product text_overflow_1_line",
                              attrs: { title: detail.name },
                            },
                            [
                              _c(
                                "label",
                                {
                                  class: [
                                    detail.selected
                                      ? "bg_purple text-white"
                                      : "",
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
                                    "\n                        " +
                                      _vm._s(detail.name) +
                                      "\n                      "
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ])
                      }),
                      0
                    ),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "d-none  shadow-none p-3 mb-5 rounded add_cart_quantity_spent",
                },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        "container_notify_1827 bg_purple_soft color_white d-flex padding_notification_active btn font_causten_round_medium_oblique font-12 mt-2",
                      attrs: { id: "notify_detail_11400" },
                      on: { click: _vm.send_global_notification },
                    },
                    [
                      _c("i", {
                        staticClass:
                          "far fa-bell font-15 mr-2 align-self-center",
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-left" }, [
                        _vm._v("Notificarme cuando esté disponible"),
                      ]),
                    ]
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "d-none d-md-block shadow-none p-3 mb-5 bg-light rounded add_cart_quantity_resp",
                },
                [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "d-block mt-2 bg_white" }, [
                    _c("div", { staticClass: "d-inline-block mr-1" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn_product_detail_remove",
                          staticStyle: {
                            height: "35px",
                            width: "35px",
                            "font-size": "28px",
                          },
                          on: { click: _vm.remove },
                        },
                        [
                          _c(
                            "p",
                            {
                              staticClass: "text_cart_add",
                              staticStyle: { "font-size": "28px" },
                            },
                            [_vm._v("-")]
                          ),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-inline-block product_detail_add" },
                      [
                        _c(
                          "span",
                          {
                            staticClass:
                              "text-center color_purple font_nova_semibold font-10",
                            staticStyle: { "font-size": "20px" },
                          },
                          [_vm._v(_vm._s(_vm.quantity))]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "d-inline-block ml-1" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn_product_detail_add",
                          staticStyle: {
                            height: "35px",
                            width: "35px",
                            "font-size": "28px",
                          },
                          on: { click: _vm.add },
                        },
                        [
                          _c(
                            "p",
                            {
                              staticClass: "text_cart_add",
                              staticStyle: { "font-size": "28px" },
                            },
                            [_vm._v("+")]
                          ),
                        ]
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn bg_purple color_white font_nova_semibold font-8 mt-2",
                      staticStyle: {
                        width: "100%",
                        "font-size": "11px",
                        "white-space": "nowrap",
                      },
                      attrs: { id: "btn_general_details_1827" },
                      on: { click: _vm.add_cart_detail },
                    },
                    [_vm._v("\n              Agregar al carrito\n            ")]
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "shadow d-sm-flex d-md-none bg_purple   d-flex background_responsive_add_cart",
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "d-block",
                      staticStyle: {
                        margin: "0 auto",
                        padding: "15px",
                        width: "100%",
                        "align-self": "center",
                        "text-align": "center",
                      },
                      attrs: { id: "quantity_status_resp" },
                    },
                    [
                      _c("div", { staticClass: "d-block" }, [
                        _c(
                          "div",
                          {
                            staticClass: "d-none d-md-none with_quantity_cart",
                          },
                          [
                            _c("div", { staticClass: "d-inline-block" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn_product_detail_remove",
                                  staticStyle: {
                                    height: "35px",
                                    width: "35px",
                                    "font-size": "28px",
                                  },
                                  on: {
                                    click: function ($event) {
                                      _vm.remove_item_product_detail("detail", {
                                        id: 1827,
                                        name: "Galletas De Cordero Y Arroz Laika By Rausch",
                                        slug: "galletas-de-cordero-y-arroz-laika-by-rausch",
                                        is_available: true,
                                        benefit:
                                          "Galletas combinadaspara aquellos que tienen a todas por favoritas.",
                                        feature:
                                          "Galletas con prote\u00edna - licencia deventa ica 13592 al. Composici\u00f3n garantizada: humedad m\u00e1x 23.2%, prote\u00edna m\u00edn 20.9%, grasa min. 5.1%, fibra max 0,8%. Cenizas max. 1.9%    \nGalletas con verduras y hortalizas - licencia de venta ica 13563 al. Composici\u00f3n garantizada: humedad m\u00e1x 10.5%, prote\u00edna m\u00edn 14%, grasa min. 3.6%, fibra max 2.2%. Cenizas max. 1.5%",
                                        description:
                                          "Galletas de cordero y arroz laika by rausch, Incluye una unidad por receta. (pollo, h\u00edgado de pollo, cordero y arroz, ternera, verduras y hortalizas, cerdo, miel y ar\u00e1ndanos).",
                                        slug_pet: "dog",
                                        brand: { id: 161, name: "LAIKA" },
                                        subcategory: {
                                          id: 204,
                                          name: "Galletas y Snacks",
                                        },
                                        category: { id: 2, name: "Snacks" },
                                        references: [
                                          {
                                            id: 11400,
                                            sku: "29534752157",
                                            reference: "150 GR",
                                            sale_price: 6990,
                                            price_with_discount: 6291,
                                            stock: 216,
                                            show_first: true,
                                            is_member: false,
                                            status_id: 1,
                                            can_request_notification: true,
                                            saving_member: 559,
                                            laika_member: {
                                              membership: {
                                                id: 7,
                                                name: "Membres\u00eda Laika",
                                                benefits:
                                                  "15% de descuento en todos los productos para tu peludo\nLaikabox de regalo que incluye medias de Laika para estar en la casa con tu peludo\n15% de descuento en veterinario a domicilio\nPor cada pedido Laika donar\u00e1 a una fundaci\u00f3n para los peludos\n120000Domicilio",
                                                value: "50000",
                                                image:
                                                  "https://laikapp.s3.amazonaws.com/dev_images_general/162931482916185897721615506516membresia.png",
                                                acquired: null,
                                                final_date: null,
                                                start_date: null,
                                                total_monthly_savings_member:
                                                  null,
                                                total_savings_member: 0,
                                                value_monthly: 4167,
                                                kit: {
                                                  id: 6077,
                                                  name: "MEMBER KIT",
                                                  sale_price: null,
                                                  references: [
                                                    {
                                                      id: 18859,
                                                      product_id: null,
                                                      sale_price: 0,
                                                      price_with_discount: 0,
                                                      kit_membership: null,
                                                      stock: 850,
                                                      reference_images: [
                                                        {
                                                          url: "https://laikapp.s3.amazonaws.com/dev_images_products/18859_60527_LAIKA_BOX_MEMBRES__A_1615402575_500x500.jpg",
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                  brand: null,
                                                  subcategory: null,
                                                  category: null,
                                                },
                                                membership_variables: [
                                                  {
                                                    variable: {
                                                      id: 1,
                                                      name: "% de descuento en todos los productos para tu peludo",
                                                    },
                                                    variable_id: 1,
                                                    value: "15",
                                                    is_primary: 1,
                                                  },
                                                  {
                                                    variable: {
                                                      id: 22,
                                                      name: "Laikabox de regalo que incluye medias de Laika para estar en la casa con tu peludo",
                                                    },
                                                    variable_id: 22,
                                                    value: "0",
                                                    is_primary: 2,
                                                  },
                                                  {
                                                    variable: {
                                                      id: 12,
                                                      name: "% de descuento en veterinario a domicilio",
                                                    },
                                                    variable_id: 12,
                                                    value: "15",
                                                    is_primary: 2,
                                                  },
                                                  {
                                                    variable: {
                                                      id: 6,
                                                      name: "Por cada pedido Laika donar\u00e1 a una fundaci\u00f3n para los peludos",
                                                    },
                                                    variable_id: 6,
                                                    value: "0",
                                                    is_primary: 2,
                                                  },
                                                  {
                                                    variable: {
                                                      id: 0,
                                                      name: "Domicilio",
                                                    },
                                                    variable_id: 0,
                                                    value: "120000",
                                                    is_primary: 1,
                                                  },
                                                ],
                                              },
                                              price: 5732,
                                            },
                                            reference_images: [
                                              {
                                                url: "https://s3.us-east-1.amazonaws.com/laikapp/images_products/1_3205__Galletas_de_Cordero_y_arroz_Laika_by_Rausch_500X500.jpg",
                                              },
                                            ],
                                            promotion: {
                                              id: 301639,
                                              value: 10,
                                            },
                                            membership: null,
                                          },
                                        ],
                                      })
                                    },
                                  },
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: "text_cart_add",
                                      staticStyle: { "font-size": "28px" },
                                    },
                                    [_vm._v("-")]
                                  ),
                                ]
                              ),
                            ]),
                            _vm._v(" "),
                            _vm._m(3),
                            _vm._v(" "),
                            _c("div", { staticClass: "d-inline-block" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn_product_detail_add",
                                  staticStyle: {
                                    height: "35px",
                                    width: "35px",
                                    "font-size": "28px",
                                  },
                                  on: {
                                    click: function ($event) {
                                      _vm.add_cart_detail_responsive("detail", {
                                        id: 1827,
                                        name: "Galletas De Cordero Y Arroz Laika By Rausch",
                                        slug: "galletas-de-cordero-y-arroz-laika-by-rausch",
                                        is_available: true,
                                        benefit:
                                          "Galletas combinadaspara aquellos que tienen a todas por favoritas.",
                                        feature:
                                          "Galletas con prote\u00edna - licencia deventa ica 13592 al. Composici\u00f3n garantizada: humedad m\u00e1x 23.2%, prote\u00edna m\u00edn 20.9%, grasa min. 5.1%, fibra max 0,8%. Cenizas max. 1.9%    \nGalletas con verduras y hortalizas - licencia de venta ica 13563 al. Composici\u00f3n garantizada: humedad m\u00e1x 10.5%, prote\u00edna m\u00edn 14%, grasa min. 3.6%, fibra max 2.2%. Cenizas max. 1.5%",
                                        description:
                                          "Galletas de cordero y arroz laika by rausch, Incluye una unidad por receta. (pollo, h\u00edgado de pollo, cordero y arroz, ternera, verduras y hortalizas, cerdo, miel y ar\u00e1ndanos).",
                                        slug_pet: "dog",
                                        brand: { id: 161, name: "LAIKA" },
                                        subcategory: {
                                          id: 204,
                                          name: "Galletas y Snacks",
                                        },
                                        category: { id: 2, name: "Snacks" },
                                        references: [
                                          {
                                            id: 11400,
                                            sku: "29534752157",
                                            reference: "150 GR",
                                            sale_price: 6990,
                                            price_with_discount: 6291,
                                            stock: 216,
                                            show_first: true,
                                            is_member: false,
                                            status_id: 1,
                                            can_request_notification: true,
                                            saving_member: 559,
                                            laika_member: {
                                              membership: {
                                                id: 7,
                                                name: "Membres\u00eda Laika",
                                                benefits:
                                                  "15% de descuento en todos los productos para tu peludo\nLaikabox de regalo que incluye medias de Laika para estar en la casa con tu peludo\n15% de descuento en veterinario a domicilio\nPor cada pedido Laika donar\u00e1 a una fundaci\u00f3n para los peludos\n120000Domicilio",
                                                value: "50000",
                                                image:
                                                  "https://laikapp.s3.amazonaws.com/dev_images_general/162931482916185897721615506516membresia.png",
                                                acquired: null,
                                                final_date: null,
                                                start_date: null,
                                                total_monthly_savings_member:
                                                  null,
                                                total_savings_member: 0,
                                                value_monthly: 4167,
                                                kit: {
                                                  id: 6077,
                                                  name: "MEMBER KIT",
                                                  sale_price: null,
                                                  references: [
                                                    {
                                                      id: 18859,
                                                      product_id: null,
                                                      sale_price: 0,
                                                      price_with_discount: 0,
                                                      kit_membership: null,
                                                      stock: 850,
                                                      reference_images: [
                                                        {
                                                          url: "https://laikapp.s3.amazonaws.com/dev_images_products/18859_60527_LAIKA_BOX_MEMBRES__A_1615402575_500x500.jpg",
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                  brand: null,
                                                  subcategory: null,
                                                  category: null,
                                                },
                                                membership_variables: [
                                                  {
                                                    variable: {
                                                      id: 1,
                                                      name: "% de descuento en todos los productos para tu peludo",
                                                    },
                                                    variable_id: 1,
                                                    value: "15",
                                                    is_primary: 1,
                                                  },
                                                  {
                                                    variable: {
                                                      id: 22,
                                                      name: "Laikabox de regalo que incluye medias de Laika para estar en la casa con tu peludo",
                                                    },
                                                    variable_id: 22,
                                                    value: "0",
                                                    is_primary: 2,
                                                  },
                                                  {
                                                    variable: {
                                                      id: 12,
                                                      name: "% de descuento en veterinario a domicilio",
                                                    },
                                                    variable_id: 12,
                                                    value: "15",
                                                    is_primary: 2,
                                                  },
                                                  {
                                                    variable: {
                                                      id: 6,
                                                      name: "Por cada pedido Laika donar\u00e1 a una fundaci\u00f3n para los peludos",
                                                    },
                                                    variable_id: 6,
                                                    value: "0",
                                                    is_primary: 2,
                                                  },
                                                  {
                                                    variable: {
                                                      id: 0,
                                                      name: "Domicilio",
                                                    },
                                                    variable_id: 0,
                                                    value: "120000",
                                                    is_primary: 1,
                                                  },
                                                ],
                                              },
                                              price: 5732,
                                            },
                                            reference_images: [
                                              {
                                                url: "https://s3.us-east-1.amazonaws.com/laikapp/images_products/1_3205__Galletas_de_Cordero_y_arroz_Laika_by_Rausch_500X500.jpg",
                                              },
                                            ],
                                            promotion: {
                                              id: 301639,
                                              value: 10,
                                            },
                                            membership: null,
                                          },
                                        ],
                                      })
                                    },
                                  },
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: "text_cart_add",
                                      staticStyle: { "font-size": "28px" },
                                    },
                                    [_vm._v("+")]
                                  ),
                                ]
                              ),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "d-none d-md-none text_overflow_1_line btn bg_purple color_white font_nova_semibold font-8 mt-0 mb-0 without_quantity_cart",
                            staticStyle: {
                              width: "100%",
                              padding: "1.5px",
                              "font-size": "15px",
                              "white-space": "nowrap",
                              opacity: "1",
                            },
                            attrs: {
                              id: "btn_general_details_responsive_1827",
                            },
                            on: {
                              click: function ($event) {
                                _vm.add_cart_detail_responsive("detail", {
                                  id: 1827,
                                  name: "Galletas De Cordero Y Arroz Laika By Rausch",
                                  slug: "galletas-de-cordero-y-arroz-laika-by-rausch",
                                  is_available: true,
                                  benefit:
                                    "Galletas combinadaspara aquellos que tienen a todas por favoritas.",
                                  feature:
                                    "Galletas con prote\u00edna - licencia deventa ica 13592 al. Composici\u00f3n garantizada: humedad m\u00e1x 23.2%, prote\u00edna m\u00edn 20.9%, grasa min. 5.1%, fibra max 0,8%. Cenizas max. 1.9%    \nGalletas con verduras y hortalizas - licencia de venta ica 13563 al. Composici\u00f3n garantizada: humedad m\u00e1x 10.5%, prote\u00edna m\u00edn 14%, grasa min. 3.6%, fibra max 2.2%. Cenizas max. 1.5%",
                                  description:
                                    "Galletas de cordero y arroz laika by rausch, Incluye una unidad por receta. (pollo, h\u00edgado de pollo, cordero y arroz, ternera, verduras y hortalizas, cerdo, miel y ar\u00e1ndanos).",
                                  slug_pet: "dog",
                                  brand: { id: 161, name: "LAIKA" },
                                  subcategory: {
                                    id: 204,
                                    name: "Galletas y Snacks",
                                  },
                                  category: { id: 2, name: "Snacks" },
                                  references: [
                                    {
                                      id: 11400,
                                      sku: "29534752157",
                                      reference: "150 GR",
                                      sale_price: 6990,
                                      price_with_discount: 6291,
                                      stock: 216,
                                      show_first: true,
                                      is_member: false,
                                      status_id: 1,
                                      can_request_notification: true,
                                      saving_member: 559,
                                      laika_member: {
                                        membership: {
                                          id: 7,
                                          name: "Membres\u00eda Laika",
                                          benefits:
                                            "15% de descuento en todos los productos para tu peludo\nLaikabox de regalo que incluye medias de Laika para estar en la casa con tu peludo\n15% de descuento en veterinario a domicilio\nPor cada pedido Laika donar\u00e1 a una fundaci\u00f3n para los peludos\n120000Domicilio",
                                          value: "50000",
                                          image:
                                            "https://laikapp.s3.amazonaws.com/dev_images_general/162931482916185897721615506516membresia.png",
                                          acquired: null,
                                          final_date: null,
                                          start_date: null,
                                          total_monthly_savings_member: null,
                                          total_savings_member: 0,
                                          value_monthly: 4167,
                                          kit: {
                                            id: 6077,
                                            name: "MEMBER KIT",
                                            sale_price: null,
                                            references: [
                                              {
                                                id: 18859,
                                                product_id: null,
                                                sale_price: 0,
                                                price_with_discount: 0,
                                                kit_membership: null,
                                                stock: 850,
                                                reference_images: [
                                                  {
                                                    url: "https://laikapp.s3.amazonaws.com/dev_images_products/18859_60527_LAIKA_BOX_MEMBRES__A_1615402575_500x500.jpg",
                                                  },
                                                ],
                                              },
                                            ],
                                            brand: null,
                                            subcategory: null,
                                            category: null,
                                          },
                                          membership_variables: [
                                            {
                                              variable: {
                                                id: 1,
                                                name: "% de descuento en todos los productos para tu peludo",
                                              },
                                              variable_id: 1,
                                              value: "15",
                                              is_primary: 1,
                                            },
                                            {
                                              variable: {
                                                id: 22,
                                                name: "Laikabox de regalo que incluye medias de Laika para estar en la casa con tu peludo",
                                              },
                                              variable_id: 22,
                                              value: "0",
                                              is_primary: 2,
                                            },
                                            {
                                              variable: {
                                                id: 12,
                                                name: "% de descuento en veterinario a domicilio",
                                              },
                                              variable_id: 12,
                                              value: "15",
                                              is_primary: 2,
                                            },
                                            {
                                              variable: {
                                                id: 6,
                                                name: "Por cada pedido Laika donar\u00e1 a una fundaci\u00f3n para los peludos",
                                              },
                                              variable_id: 6,
                                              value: "0",
                                              is_primary: 2,
                                            },
                                            {
                                              variable: {
                                                id: 0,
                                                name: "Domicilio",
                                              },
                                              variable_id: 0,
                                              value: "120000",
                                              is_primary: 1,
                                            },
                                          ],
                                        },
                                        price: 5732,
                                      },
                                      reference_images: [
                                        {
                                          url: "https://s3.us-east-1.amazonaws.com/laikapp/images_products/1_3205__Galletas_de_Cordero_y_arroz_Laika_by_Rausch_500X500.jpg",
                                        },
                                      ],
                                      promotion: { id: 301639, value: 10 },
                                      membership: null,
                                    },
                                  ],
                                })
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n                  Agregar\n                "
                            ),
                          ]
                        ),
                      ]),
                    ]
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "offset-md-0 col-md-12 offset-lg-6 col-lg-6 mt-1 info_products_resp_det",
                },
                [
                  _vm._m(4),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "ml-0 mt-3",
                      staticStyle: { "min-width": "97%" },
                    },
                    [
                      _vm._m(5),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "tab-content",
                          attrs: { id: "nav-tabContent" },
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "tab-pane fade show active overflow_spent p-3 ",
                              attrs: {
                                id: "nav-descripcion",
                                role: "tabpanel",
                                "aria-labelledby": "nav-descripcion-tab",
                              },
                            },
                            [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(_vm.product.benefits) +
                                  "\n                "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "tab-pane fade overflow_spent p-3",
                              attrs: {
                                id: "nav-ingredientes",
                                role: "tabpanel",
                                "aria-labelledby": "nav-ingredientes-tab",
                              },
                            },
                            [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(_vm.product.features) +
                                  "\n                "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "tab-pane fade overflow_spent p-3",
                              attrs: {
                                id: "nav-informacion",
                                role: "tabpanel",
                                "aria-labelledby": "nav-informacion-tab",
                              },
                            },
                            [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(_vm.product.description) +
                                  "\n                "
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                ]
              ),
            ]
          ),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center font_airbnb_book font-10" }, [
      _c("span", { staticClass: "fa fa-search-plus fa-lg mr-1" }),
      _vm._v(" "),
      _c("span", { staticStyle: { color: "#707070" } }, [
        _vm._v("Haga clic para abrir la vista expandida"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "font-14 font_nova_semibold mb-2 mt-2 color_black d-flex",
      },
      [
        _c(
          "small",
          {
            staticClass: "quantity_price mr-2  ",
            staticStyle: { "font-size": "100%" },
          },
          [_vm._v("\n                  Cantidad:\n                ")]
        ),
        _vm._v(" "),
        _c(
          "b",
          {
            staticClass: "font_causten_round_semi_bold_oblique",
            staticStyle: { color: "#242424" },
            attrs: { id: "status_general_details_1827" },
          },
          [_vm._v("\n                  DISPONIBLE\n\t\t\t\t\t\t\t  ")]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-left" }, [
      _c(
        "span",
        {
          staticClass: "font_airbnb_book font-10 ml-1",
          staticStyle: { "font-size": "12px", color: "rgba(2, 0, 5, 0.65)" },
        },
        [_vm._v("Cantidad")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "d-inline-block product_detail_add",
        staticStyle: { "vertical-align": "unset", width: "35%" },
      },
      [
        _c("span", {
          staticClass: "text-center color_white font_nova_semibold font-10 ",
          staticStyle: { "font-size": "20px" },
          attrs: { id: "price_detail" },
        }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ml-0 mt-3" }, [
      _c(
        "span",
        {
          staticClass: "font_nova_semibold",
          staticStyle: { color: "rgb(36, 36, 36)", "font-size": "17px" },
        },
        [
          _c("img", {
            attrs: {
              src: "https://laika.com.co/assets/food.svg",
              width: "16px ",
            },
          }),
          _vm._v(" "),
          _c("span", { staticClass: "ml-2" }, [
            _vm._v(
              "\n                  Información de producto\n                "
            ),
          ]),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "font-16" }, [
      _c(
        "div",
        {
          staticClass: "nav nav-tabs",
          attrs: { id: "nav-tab", role: "tablist" },
        },
        [
          _c(
            "a",
            {
              staticClass: "nav-link active",
              attrs: {
                id: "nav-descripcion-tab",
                "data-toggle": "tab",
                href: "#nav-descripcion",
                role: "tab",
                "aria-controls": "nav-descripcion",
                "aria-selected": "true",
              },
            },
            [_vm._v("Beneficios")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: {
                id: "nav-ingredientes-tab",
                "data-toggle": "tab",
                href: "#nav-ingredientes",
                role: "tab",
                "aria-controls": "nav-ingredientes",
                "aria-selected": "false",
              },
            },
            [_vm._v("Características")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: {
                id: "nav-informacion-tab",
                "data-toggle": "tab",
                href: "#nav-informacion",
                role: "tab",
                "aria-controls": "nav-informacion",
                "aria-selected": "false",
              },
            },
            [_vm._v("Descripción")]
          ),
        ]
      ),
    ])
  },
]
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