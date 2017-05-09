webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Hello__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Hello___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Hello__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Hy__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Hy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Hy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Lv__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Lv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Lv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_hy_Article__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_hy_Article___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_hy_Article__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_hy_music__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_hy_music___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_hy_music__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_hy_books__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_hy_books___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_hy_books__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_hy_Aboutme__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_hy_Aboutme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_hy_Aboutme__);










__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Hello',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Hello___default.a
  }, {
    path: '/hy',
    name: 'hy',
    component: __WEBPACK_IMPORTED_MODULE_3__components_Hy___default.a,
    children: [{
      path: '/',
      component: __WEBPACK_IMPORTED_MODULE_5__components_hy_Article___default.a
    }, {
      path: '/Article',
      component: __WEBPACK_IMPORTED_MODULE_5__components_hy_Article___default.a
    }, {
      path: '/music',
      component: __WEBPACK_IMPORTED_MODULE_6__components_hy_music___default.a
    }, {
      path: '/books',
      component: __WEBPACK_IMPORTED_MODULE_7__components_hy_books___default.a
    }, {
      path: '/Aboutme',
      component: __WEBPACK_IMPORTED_MODULE_8__components_hy_Aboutme___default.a
    }]
  }, {
    path: '/lv',
    name: 'lv',
    component: __WEBPACK_IMPORTED_MODULE_4__components_Lv___default.a
  }]
}));

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(15)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(30),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hello',
  data() {
    return {
      msg: '欢迎来到SaiHy的博客'
    };
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
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
    data() {
        return {
            bottomNav: 'movies',
            bottomNavColor: 'movies'
        };
    },
    methods: {
        handleChange(val) {
            this.bottomNav = val;
        }
    }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import mobileTearSheet from '../../../components/mobileTearSheet'
// export default {
//   components: {
//     'mobile-tear-sheet': mobileTearSheet
//   }
// }

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_muse_ui__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_muse_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_muse_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_muse_ui_dist_muse_ui_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_muse_ui_dist_muse_ui_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_muse_ui_dist_muse_ui_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_muse_ui_dist_theme_light_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_muse_ui_dist_theme_light_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_muse_ui_dist_theme_light_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__App__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router__ = __webpack_require__(2);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.



 // 使用 carbon 主题



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_muse_ui___default.a);

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_5__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_4__App___default.a }
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(12)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(25),
  /* scopeId */
  "data-v-2d560100",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(14)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(27),
  /* scopeId */
  "data-v-59c14f5a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(13)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(26),
  /* scopeId */
  "data-v-4c6f1768",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(24),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(23),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(29),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(28),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('mobile-tear-sheet', [_c('mu-list', [_c('mu-sub-header', [_vm._v("今天")]), _vm._v(" "), _c('mu-list-item', {
    attrs: {
      "title": "这个周末一起吃饭么?"
    }
  }, [_c('mu-avatar', {
    attrs: {
      "src": "http://yjb.xiongmaoyd.com/images/pic.png"
    },
    slot: "leftAvatar"
  }), _vm._v(" "), _c('span', {
    slot: "describe"
  }, [_c('span', {
    staticStyle: {
      "color": "rgba(0, 0, 0, .87)"
    }
  }, [_vm._v("Myron Liu -")]), _vm._v(" 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈\r\n      ")]), _vm._v(" "), _c('mu-icon-menu', {
    attrs: {
      "icon": "more_vert",
      "tooltip": "操作"
    },
    slot: "right"
  }, [_c('mu-menu-item', {
    attrs: {
      "title": "回复"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "标记"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "删除"
    }
  })], 1)], 1), _vm._v(" "), _c('mu-divider', {
    attrs: {
      "inset": ""
    }
  }), _vm._v(" "), _c('mu-list-item', {
    attrs: {
      "title": "Alex Qin"
    }
  }, [_c('mu-avatar', {
    attrs: {
      "src": "http://yjb.xiongmaoyd.com/images/pic02.png"
    },
    slot: "leftAvatar"
  }), _vm._v(" "), _c('span', {
    slot: "describe"
  }, [_c('span', {
    staticStyle: {
      "color": "rgba(0, 0, 0, .87)"
    }
  }, [_vm._v("看电影啊")]), _vm._v(" "), _c('br'), _vm._v("\r\n        我们去看电影，最近有部烂片上映，又有吐槽的了\r\n      ")]), _vm._v(" "), _c('mu-icon-menu', {
    attrs: {
      "icon": "more_vert",
      "tooltip": "操作"
    },
    slot: "right"
  }, [_c('mu-menu-item', {
    attrs: {
      "title": "回复"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "标记"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "删除"
    }
  })], 1)], 1), _vm._v(" "), _c('mu-divider', {
    attrs: {
      "inset": ""
    }
  }), _vm._v(" "), _c('mu-list-item', {
    attrs: {
      "title": "LOL"
    }
  }, [_c('mu-avatar', {
    attrs: {
      "src": "http://yjb.xiongmaoyd.com/images/pic03.png"
    },
    slot: "leftAvatar"
  }), _vm._v(" "), _c('span', {
    slot: "describe"
  }, [_c('span', {
    staticStyle: {
      "color": "rgba(0, 0, 0, .87)"
    }
  }, [_vm._v("去打游戏啊")]), _c('br'), _vm._v("\r\n        周末一起 LOL\r\n      ")]), _vm._v(" "), _c('mu-icon-menu', {
    attrs: {
      "icon": "more_vert",
      "tooltip": "操作"
    },
    slot: "right"
  }, [_c('mu-menu-item', {
    attrs: {
      "title": "回复"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "标记"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "删除"
    }
  })], 1)], 1), _vm._v(" "), _c('mu-divider', {
    attrs: {
      "inset": ""
    }
  }), _vm._v(" "), _c('mu-list-item', {
    attrs: {
      "title": "Myron Liu"
    }
  }, [_c('mu-avatar', {
    attrs: {
      "src": "http://yjb.xiongmaoyd.com/images/pic02.png"
    },
    slot: "leftAvatar"
  }), _vm._v(" "), _c('span', {
    slot: "describe"
  }, [_c('span', {
    staticStyle: {
      "color": "rgba(0, 0, 0, .87)"
    }
  }, [_vm._v("哇去")]), _c('br'), _vm._v(" 实在编不下去，这就是个demo\r\n      ")]), _vm._v(" "), _c('mu-icon-menu', {
    attrs: {
      "icon": "more_vert",
      "tooltip": "操作"
    },
    slot: "right"
  }, [_c('mu-menu-item', {
    attrs: {
      "title": "回复"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "标记"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "删除"
    }
  })], 1)], 1), _vm._v(" "), _c('mu-list-item', {
    attrs: {
      "title": "Myron Liu"
    }
  }, [_c('mu-avatar', {
    attrs: {
      "src": "http://yjb.xiongmaoyd.com/images/pic02.png"
    },
    slot: "leftAvatar"
  }), _vm._v(" "), _c('span', {
    slot: "describe"
  }, [_c('span', {
    staticStyle: {
      "color": "rgba(0, 0, 0, .87)"
    }
  }, [_vm._v("哇去")]), _c('br'), _vm._v(" 实在编不下去，这就是个demo\r\n      ")]), _vm._v(" "), _c('mu-icon-menu', {
    attrs: {
      "icon": "more_vert",
      "tooltip": "操作"
    },
    slot: "right"
  }, [_c('mu-menu-item', {
    attrs: {
      "title": "回复"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "标记"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "删除"
    }
  })], 1)], 1), _vm._v(" "), _c('mu-list-item', {
    attrs: {
      "title": "Myron Liu"
    }
  }, [_c('mu-avatar', {
    attrs: {
      "src": "http://yjb.xiongmaoyd.com/images/pic02.png"
    },
    slot: "leftAvatar"
  }), _vm._v(" "), _c('span', {
    slot: "describe"
  }, [_c('span', {
    staticStyle: {
      "color": "rgba(0, 0, 0, .87)"
    }
  }, [_vm._v("哇去")]), _c('br'), _vm._v(" 实在编不下去，这就是个demo\r\n      ")]), _vm._v(" "), _c('mu-icon-menu', {
    attrs: {
      "icon": "more_vert",
      "tooltip": "操作"
    },
    slot: "right"
  }, [_c('mu-menu-item', {
    attrs: {
      "title": "回复"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "标记"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "删除"
    }
  })], 1)], 1), _vm._v(" "), _c('mu-list-item', {
    attrs: {
      "title": "Myron Liu"
    }
  }, [_c('mu-avatar', {
    attrs: {
      "src": "http://yjb.xiongmaoyd.com/images/pic03.png"
    },
    slot: "leftAvatar"
  }), _vm._v(" "), _c('span', {
    slot: "describe"
  }, [_c('span', {
    staticStyle: {
      "color": "rgba(0, 0, 0, .87)"
    }
  }, [_vm._v("哇去")]), _c('br'), _vm._v(" 实在编不下去，这就是个demo\r\n      ")]), _vm._v(" "), _c('mu-icon-menu', {
    attrs: {
      "icon": "more_vert",
      "tooltip": "操作"
    },
    slot: "right"
  }, [_c('mu-menu-item', {
    attrs: {
      "title": "回复"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "标记"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "删除"
    }
  })], 1)], 1), _vm._v(" "), _c('mu-list-item', {
    attrs: {
      "title": "Myron Liu"
    }
  }, [_c('mu-avatar', {
    attrs: {
      "src": "http://yjb.xiongmaoyd.com/images/pic03.png"
    },
    slot: "leftAvatar"
  }), _vm._v(" "), _c('span', {
    slot: "describe"
  }, [_c('span', {
    staticStyle: {
      "color": "rgba(0, 0, 0, .87)"
    }
  }, [_vm._v("哇去")]), _c('br'), _vm._v(" 实在编不下去，这就是个demo\r\n      ")]), _vm._v(" "), _c('mu-icon-menu', {
    attrs: {
      "icon": "more_vert",
      "tooltip": "操作"
    },
    slot: "right"
  }, [_c('mu-menu-item', {
    attrs: {
      "title": "回复"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "标记"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "删除"
    }
  })], 1)], 1), _vm._v(" "), _c('mu-list-item', {
    attrs: {
      "title": "Myron Liu"
    }
  }, [_c('mu-avatar', {
    attrs: {
      "src": "http://yjb.xiongmaoyd.com/images/pic03.png"
    },
    slot: "leftAvatar"
  }), _vm._v(" "), _c('span', {
    slot: "describe"
  }, [_c('span', {
    staticStyle: {
      "color": "rgba(0, 0, 0, .87)"
    }
  }, [_vm._v("哇去")]), _c('br'), _vm._v(" 实在编不下去，这就是个demo\r\n      ")]), _vm._v(" "), _c('mu-icon-menu', {
    attrs: {
      "icon": "more_vert",
      "tooltip": "操作"
    },
    slot: "right"
  }, [_c('mu-menu-item', {
    attrs: {
      "title": "回复"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "标记"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "删除"
    }
  })], 1)], 1), _vm._v(" "), _c('mu-list-item', {
    attrs: {
      "title": "Myron Liu"
    }
  }, [_c('mu-avatar', {
    attrs: {
      "src": "http://yjb.xiongmaoyd.com/images/pic03.png"
    },
    slot: "leftAvatar"
  }), _vm._v(" "), _c('span', {
    slot: "describe"
  }, [_c('span', {
    staticStyle: {
      "color": "rgba(0, 0, 0, .87)"
    }
  }, [_vm._v("哇去")]), _c('br'), _vm._v(" 实在编不下去，这就是个demo\r\n      ")]), _vm._v(" "), _c('mu-icon-menu', {
    attrs: {
      "icon": "more_vert",
      "tooltip": "操作"
    },
    slot: "right"
  }, [_c('mu-menu-item', {
    attrs: {
      "title": "回复"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "标记"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "删除"
    }
  })], 1)], 1), _vm._v(" "), _c('mu-list-item', {
    attrs: {
      "title": "Myron Liu"
    }
  }, [_c('mu-avatar', {
    attrs: {
      "src": "http://yjb.xiongmaoyd.com/images/pic03.png"
    },
    slot: "leftAvatar"
  }), _vm._v(" "), _c('span', {
    slot: "describe"
  }, [_c('span', {
    staticStyle: {
      "color": "rgba(0, 0, 0, .87)"
    }
  }, [_vm._v("哇去")]), _c('br'), _vm._v(" 实在编不下去，这就是个demo\r\n      ")]), _vm._v(" "), _c('mu-icon-menu', {
    attrs: {
      "icon": "more_vert",
      "tooltip": "操作"
    },
    slot: "right"
  }, [_c('mu-menu-item', {
    attrs: {
      "title": "回复"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "标记"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "删除"
    }
  })], 1)], 1), _vm._v(" "), _c('mu-list-item', {
    attrs: {
      "title": "Myron Liu"
    }
  }, [_c('mu-avatar', {
    attrs: {
      "src": "http://yjb.xiongmaoyd.com/images/pic03.png"
    },
    slot: "leftAvatar"
  }), _vm._v(" "), _c('span', {
    slot: "describe"
  }, [_c('span', {
    staticStyle: {
      "color": "rgba(0, 0, 0, .87)"
    }
  }, [_vm._v("哇去")]), _c('br'), _vm._v(" 实在编不下去，这就是个demo\r\n      ")]), _vm._v(" "), _c('mu-icon-menu', {
    attrs: {
      "icon": "more_vert",
      "tooltip": "操作"
    },
    slot: "right"
  }, [_c('mu-menu-item', {
    attrs: {
      "title": "回复"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "标记"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "删除"
    }
  })], 1)], 1), _vm._v(" "), _c('mu-list-item', {
    attrs: {
      "title": "Myron Liu"
    }
  }, [_c('mu-avatar', {
    attrs: {
      "src": "http://yjb.xiongmaoyd.com/images/pic03.png"
    },
    slot: "leftAvatar"
  }), _vm._v(" "), _c('span', {
    slot: "describe"
  }, [_c('span', {
    staticStyle: {
      "color": "rgba(0, 0, 0, .87)"
    }
  }, [_vm._v("哇去")]), _c('br'), _vm._v(" 实在编不下去，这就是个demo\r\n      ")]), _vm._v(" "), _c('mu-icon-menu', {
    attrs: {
      "icon": "more_vert",
      "tooltip": "操作"
    },
    slot: "right"
  }, [_c('mu-menu-item', {
    attrs: {
      "title": "回复"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "标记"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "删除"
    }
  })], 1)], 1), _vm._v(" "), _c('mu-list-item', {
    attrs: {
      "title": "Myron Liu"
    }
  }, [_c('mu-avatar', {
    attrs: {
      "src": "http://yjb.xiongmaoyd.com/images/pic03.png"
    },
    slot: "leftAvatar"
  }), _vm._v(" "), _c('span', {
    slot: "describe"
  }, [_c('span', {
    staticStyle: {
      "color": "rgba(0, 0, 0, .87)"
    }
  }, [_vm._v("哇去")]), _c('br'), _vm._v(" 实在编不下去，这就是个demo\r\n      ")]), _vm._v(" "), _c('mu-icon-menu', {
    attrs: {
      "icon": "more_vert",
      "tooltip": "操作"
    },
    slot: "right"
  }, [_c('mu-menu-item', {
    attrs: {
      "title": "回复"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "标记"
    }
  }), _vm._v(" "), _c('mu-menu-item', {
    attrs: {
      "title": "删除"
    }
  })], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("\n    AboutMe\n")])
},staticRenderFns: []}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('router-link', {
    staticClass: "title",
    attrs: {
      "to": "hy",
      "tag": "p"
    }
  }, [_vm._v("\n      " + _vm._s(_vm.msg) + "\n  ")])], 1)
},staticRenderFns: []}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("我是萌萌哒LV的页面")])
},staticRenderFns: []}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "padding-bottom": "56px"
    }
  }, [_c('mu-appbar', {
    attrs: {
      "title": "Hy"
    }
  }, [_c('mu-icon-button', {
    attrs: {
      "icon": "menu"
    },
    slot: "left"
  }), _vm._v(" "), _c('mu-flat-button', {
    attrs: {
      "href": "/",
      "label": "first"
    },
    slot: "right"
  }), _vm._v(" "), _c('mu-flat-button', {
    attrs: {
      "href": "lv",
      "label": "second"
    },
    slot: "right"
  }), _vm._v(" "), _c('mu-icon-button', {
    attrs: {
      "icon": "expand_more"
    },
    slot: "right"
  })], 1), _vm._v(" "), _c('router-view'), _vm._v(" "), _c('mu-paper', {
    staticStyle: {
      "position": "fixed",
      "bottom": "0",
      "width": "100%"
    }
  }, [_c('mu-bottom-nav', {
    attrs: {
      "value": _vm.bottomNav,
      "shift": ""
    },
    on: {
      "change": _vm.handleChange
    }
  }, [_c('mu-bottom-nav-item', {
    attrs: {
      "value": "Article",
      "to": "Article",
      "title": "Article",
      "icon": "ondemand_video"
    }
  }), _vm._v(" "), _c('mu-bottom-nav-item', {
    attrs: {
      "value": "books",
      "to": "books",
      "title": "Books",
      "icon": "books"
    }
  }), _vm._v(" "), _c('mu-bottom-nav-item', {
    attrs: {
      "value": "music",
      "to": "music",
      "title": "",
      "icon": "music_note"
    }
  }), _vm._v(" "), _c('mu-bottom-nav-item', {
    attrs: {
      "value": "Aboutme",
      "to": "Aboutme",
      "title": "Aboutme",
      "icon": "photo"
    }
  })], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("\n    music.vue\n")])
},staticRenderFns: []}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("\n    books\n")])
},staticRenderFns: []}

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "slide-fade",
      "mode": "out-in"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ })
],[11]);
//# sourceMappingURL=app.72f9f5ad280123016885.js.map