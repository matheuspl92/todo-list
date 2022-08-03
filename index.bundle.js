"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont-family: sans-serif;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* COLORS */\n\n:root {\n\t--primary: #45c9a5;\n\t--primary-light: #45c9a685;\n\t--primary-dark: #3bac8e;\n}\n\n/* SCROLL BAR */\n\n/* width */\n::-webkit-scrollbar {\n\twidth: 10px;\n  }\n  \n  /* Track */\n  ::-webkit-scrollbar-track {\n\tbackground: #f1f1f1; \n\tborder-radius: 5px;\n  }\n   \n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n\tbackground: var(--primary-light); \n\tborder-radius: 5px;\n  }\n  \n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n\tbackground: var(--primary-dark); \n  }\n\n/* BASIC ELEMENTS */\n\nh1 {\n\tfont-size: 3em;\n\tfont-weight: bold;\n}\n\nh2 {\n\tfont-size: 2em;\n\tfont-weight: bold;\n}\n\n/* BASIC CONTAINERS */\n\n#main-container {\n\theight: 100vh;\n\twidth: 1000px;\n\tmargin: 0px auto;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 3fr;\n}\n\n#side-menu {\n\tdisplay: grid;\n\tgrid-template-rows: 100px 1fr 50px;\n\tmargin: 25px;\n\tpadding: 20px;\n\tborder-radius: 25px;\n\tbox-shadow: 0px 0px 10px gray;\n}\n\n#content-container {\n\theight: calc(100vh - 50px);\n\tdisplay: grid;\n\tgrid-template-rows: 100px 1fr;\n\tgrid-template-columns: 1fr 1fr;\n\tmargin: 25px;\n\tborder-radius: 25px;\n\tbox-shadow: 0px 0px 10px gray;\n}\n\n/* SIDE MENU */\n\n#logo-container {\n\theight: 100px;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n\tmargin-bottom: 10vh;\n}\n\n#logo-img {\n\theight: 75px;\n}\n\n#logo-title {\n\tcolor: var(--primary);\n}\n\n#selection-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tgap: 20px;\n}\n\n#my-projects,\n.todo-selection {\n\tpadding: 10px;\n\tborder-radius: 10px;\n\ttransition: all .25s;\n}\n\n#my-todos {\n\tpadding: 10px;\n}\n\n#my-projects:hover,\n.todo-selection:hover {\n\tcursor: pointer;\n\tbackground-color: var(--primary-light);\n}\n\n#my-projects:active,\n.todo-selection:active {\n\tbackground-color: var(--primary-dark);\n}\n\n#todo-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\tfont-size: 1.5em;\n}\n\n#footer {\n\tplace-self: center;\n}\n\n#footer-link {\n\ttext-decoration: none;\n\tcolor: var(--primary);\n\tfont-weight: bold;\n}\n\n/* CONTENT CONTAINER - PROJECTS */\n\n#content-title {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 20px;\n\tfont-size: 2em;\n\tfont-weight: bold;\n}\n\n#content-settings {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: end;\n\tpadding: 20px;\n\tmargin-right: 5px;\n}\n\n.add-btn {\n\theight: 75px;\n\t/*filter: drop-shadow(0px 0px 1px gray);*/\n\ttransition: all .25s;\n}\n\n.add-btn:hover {\n\tcursor: pointer;\n\tfilter: brightness(90%);\n}\n\n.add-btn:active {\n\tfilter: brightness(70%);\n}\n\n#content-box {\n  \toverflow: auto;\n\tgrid-column-start: 1;\n\tgrid-column-end: 3;\n\tdisplay: grid;\n\tgap: 20px;\n\tpadding: 5px 20px;\n\tpadding-bottom: 20px;\n\tmargin-right: 5px;\n\tmargin-bottom: 20px;\n\tgrid-template-rows: repeat(auto-fill, minmax(150px, 1fr));\n\tgrid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n}\n\n.project-container {\n\tdisplay: grid;\n\tbackground-color: var(--primary-light);\n\tborder-radius: 20px;\n\tpadding: 20px;\n\tbox-shadow: 0px 0px 5px gray;\n\ttransition: all .25s;\n}\n\n.project-container:hover {\n\tcursor: pointer;\n\tbackground-color: var(--primary-dark);\n}\n\n.project-container:active {\n\tbackground-color: var(--primary-dark);\n\tfilter: brightness(75%);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,uBAAuB;CACvB,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA,WAAW;;AAEX;CACC,kBAAkB;CAClB,0BAA0B;CAC1B,uBAAuB;AACxB;;AAEA,eAAe;;AAEf,UAAU;AACV;CACC,WAAW;EACV;;EAEA,UAAU;EACV;CACD,mBAAmB;CACnB,kBAAkB;EACjB;;EAEA,WAAW;EACX;CACD,gCAAgC;CAChC,kBAAkB;EACjB;;EAEA,oBAAoB;EACpB;CACD,+BAA+B;EAC9B;;AAEF,mBAAmB;;AAEnB;CACC,cAAc;CACd,iBAAiB;AAClB;;AAEA;CACC,cAAc;CACd,iBAAiB;AAClB;;AAEA,qBAAqB;;AAErB;CACC,aAAa;CACb,aAAa;CACb,gBAAgB;CAChB,aAAa;CACb,8BAA8B;AAC/B;;AAEA;CACC,aAAa;CACb,kCAAkC;CAClC,YAAY;CACZ,aAAa;CACb,mBAAmB;CACnB,6BAA6B;AAC9B;;AAEA;CACC,0BAA0B;CAC1B,aAAa;CACb,6BAA6B;CAC7B,8BAA8B;CAC9B,YAAY;CACZ,mBAAmB;CACnB,6BAA6B;AAC9B;;AAEA,cAAc;;AAEd;CACC,aAAa;CACb,aAAa;CACb,mBAAmB;CACnB,SAAS;CACT,mBAAmB;AACpB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,SAAS;AACV;;AAEA;;CAEC,aAAa;CACb,mBAAmB;CACnB,oBAAoB;AACrB;;AAEA;CACC,aAAa;AACd;;AAEA;;CAEC,eAAe;CACf,sCAAsC;AACvC;;AAEA;;CAEC,qCAAqC;AACtC;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;CACT,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,qBAAqB;CACrB,qBAAqB;CACrB,iBAAiB;AAClB;;AAEA,iCAAiC;;AAEjC;CACC,aAAa;CACb,mBAAmB;CACnB,aAAa;CACb,cAAc;CACd,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,oBAAoB;CACpB,aAAa;CACb,iBAAiB;AAClB;;AAEA;CACC,YAAY;CACZ,yCAAyC;CACzC,oBAAoB;AACrB;;AAEA;CACC,eAAe;CACf,uBAAuB;AACxB;;AAEA;CACC,uBAAuB;AACxB;;AAEA;GACG,cAAc;CAChB,oBAAoB;CACpB,kBAAkB;CAClB,aAAa;CACb,SAAS;CACT,iBAAiB;CACjB,oBAAoB;CACpB,iBAAiB;CACjB,mBAAmB;CACnB,yDAAyD;CACzD,4DAA4D;AAC7D;;AAEA;CACC,aAAa;CACb,sCAAsC;CACtC,mBAAmB;CACnB,aAAa;CACb,4BAA4B;CAC5B,oBAAoB;AACrB;;AAEA;CACC,eAAe;CACf,qCAAqC;AACtC;;AAEA;CACC,qCAAqC;CACrC,uBAAuB;AACxB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont-family: sans-serif;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* COLORS */\n\n:root {\n\t--primary: #45c9a5;\n\t--primary-light: #45c9a685;\n\t--primary-dark: #3bac8e;\n}\n\n/* SCROLL BAR */\n\n/* width */\n::-webkit-scrollbar {\n\twidth: 10px;\n  }\n  \n  /* Track */\n  ::-webkit-scrollbar-track {\n\tbackground: #f1f1f1; \n\tborder-radius: 5px;\n  }\n   \n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n\tbackground: var(--primary-light); \n\tborder-radius: 5px;\n  }\n  \n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n\tbackground: var(--primary-dark); \n  }\n\n/* BASIC ELEMENTS */\n\nh1 {\n\tfont-size: 3em;\n\tfont-weight: bold;\n}\n\nh2 {\n\tfont-size: 2em;\n\tfont-weight: bold;\n}\n\n/* BASIC CONTAINERS */\n\n#main-container {\n\theight: 100vh;\n\twidth: 1000px;\n\tmargin: 0px auto;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 3fr;\n}\n\n#side-menu {\n\tdisplay: grid;\n\tgrid-template-rows: 100px 1fr 50px;\n\tmargin: 25px;\n\tpadding: 20px;\n\tborder-radius: 25px;\n\tbox-shadow: 0px 0px 10px gray;\n}\n\n#content-container {\n\theight: calc(100vh - 50px);\n\tdisplay: grid;\n\tgrid-template-rows: 100px 1fr;\n\tgrid-template-columns: 1fr 1fr;\n\tmargin: 25px;\n\tborder-radius: 25px;\n\tbox-shadow: 0px 0px 10px gray;\n}\n\n/* SIDE MENU */\n\n#logo-container {\n\theight: 100px;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n\tmargin-bottom: 10vh;\n}\n\n#logo-img {\n\theight: 75px;\n}\n\n#logo-title {\n\tcolor: var(--primary);\n}\n\n#selection-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tgap: 20px;\n}\n\n#my-projects,\n.todo-selection {\n\tpadding: 10px;\n\tborder-radius: 10px;\n\ttransition: all .25s;\n}\n\n#my-todos {\n\tpadding: 10px;\n}\n\n#my-projects:hover,\n.todo-selection:hover {\n\tcursor: pointer;\n\tbackground-color: var(--primary-light);\n}\n\n#my-projects:active,\n.todo-selection:active {\n\tbackground-color: var(--primary-dark);\n}\n\n#todo-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\tfont-size: 1.5em;\n}\n\n#footer {\n\tplace-self: center;\n}\n\n#footer-link {\n\ttext-decoration: none;\n\tcolor: var(--primary);\n\tfont-weight: bold;\n}\n\n/* CONTENT CONTAINER - PROJECTS */\n\n#content-title {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 20px;\n\tfont-size: 2em;\n\tfont-weight: bold;\n}\n\n#content-settings {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: end;\n\tpadding: 20px;\n\tmargin-right: 5px;\n}\n\n.add-btn {\n\theight: 75px;\n\t/*filter: drop-shadow(0px 0px 1px gray);*/\n\ttransition: all .25s;\n}\n\n.add-btn:hover {\n\tcursor: pointer;\n\tfilter: brightness(90%);\n}\n\n.add-btn:active {\n\tfilter: brightness(70%);\n}\n\n#content-box {\n  \toverflow: auto;\n\tgrid-column-start: 1;\n\tgrid-column-end: 3;\n\tdisplay: grid;\n\tgap: 20px;\n\tpadding: 5px 20px;\n\tpadding-bottom: 20px;\n\tmargin-right: 5px;\n\tmargin-bottom: 20px;\n\tgrid-template-rows: repeat(auto-fill, minmax(150px, 1fr));\n\tgrid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n}\n\n.project-container {\n\tdisplay: grid;\n\tbackground-color: var(--primary-light);\n\tborder-radius: 20px;\n\tpadding: 20px;\n\tbox-shadow: 0px 0px 5px gray;\n\ttransition: all .25s;\n}\n\n.project-container:hover {\n\tcursor: pointer;\n\tbackground-color: var(--primary-dark);\n}\n\n.project-container:active {\n\tbackground-color: var(--primary-dark);\n\tfilter: brightness(75%);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/modules/display.js");
/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/storage */ "./src/modules/storage.js");
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/project */ "./src/modules/project.js");





_modules_storage__WEBPACK_IMPORTED_MODULE_2__.addProject((0,_modules_project__WEBPACK_IMPORTED_MODULE_3__["default"])('My first project'));
_modules_storage__WEBPACK_IMPORTED_MODULE_2__.addProject((0,_modules_project__WEBPACK_IMPORTED_MODULE_3__["default"])('My second project'));
_modules_storage__WEBPACK_IMPORTED_MODULE_2__.addProject((0,_modules_project__WEBPACK_IMPORTED_MODULE_3__["default"])('My third project'));

_modules_display__WEBPACK_IMPORTED_MODULE_1__.loadPage();
_modules_display__WEBPACK_IMPORTED_MODULE_1__.loadProjects(_modules_storage__WEBPACK_IMPORTED_MODULE_2__.getProjects())

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPage": () => (/* binding */ loadPage),
/* harmony export */   "loadProjects": () => (/* binding */ loadProjects)
/* harmony export */ });
/* harmony import */ var _home_matheus_repos_todo_list_src_tick_mark_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/tick-mark.png */ "./src/tick-mark.png");
/* harmony import */ var _home_matheus_repos_todo_list_src_add_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/add-icon.png */ "./src/add-icon.png");



const mainContainer = document.createElement('div');
mainContainer.id = 'main-container';
document.body.appendChild(mainContainer);

function loadPage() {

    //Create basic containers
    const sideMenu = document.createElement('div');
    sideMenu.id = 'side-menu';
    mainContainer.appendChild(sideMenu);

    const contentContainer = document.createElement('div');
    contentContainer.id = 'content-container';
    mainContainer.appendChild(contentContainer);

    //Create side menu elements
    const logoContainer = document.createElement('div');
    logoContainer.id = 'logo-container';
    sideMenu.appendChild(logoContainer);

    const logoImg = document.createElement('img');
    logoImg.id = 'logo-img';
    logoImg.setAttribute('src', _home_matheus_repos_todo_list_src_tick_mark_png__WEBPACK_IMPORTED_MODULE_0__);
    logoContainer.appendChild(logoImg);

    const logoTitle = document.createElement('h1');
    logoTitle.id = 'logo-title';
    logoTitle.innerHTML = 'TiddyDo';
    logoContainer.appendChild(logoTitle);

    const selectionContainer = document.createElement('div');
    selectionContainer.id = 'selection-container';
    sideMenu.appendChild(selectionContainer);

    const myProjects = document.createElement('h2');
    myProjects.id = 'my-projects';
    myProjects.innerHTML = 'My projects';
    selectionContainer.appendChild(myProjects);

    const myTodos = document.createElement('h2');
    myTodos.id = 'my-todos';
    myTodos.innerHTML = 'My todos';
    selectionContainer.appendChild(myTodos);

    const todoContainer = document.createElement('div');
    todoContainer.id = 'todo-container';
    selectionContainer.appendChild(todoContainer);

    const todayTodos = document.createElement('p');
    todayTodos.id = 'today-todos';
    todayTodos.classList.add('todo-selection');
    todayTodos.innerHTML = 'Today';
    todoContainer.appendChild(todayTodos);

    const weekTodos = document.createElement('p');
    weekTodos.id = 'week-todos';
    weekTodos.classList.add('todo-selection');
    weekTodos.innerHTML = 'Week';
    todoContainer.appendChild(weekTodos);

    const monthTodos = document.createElement('p');
    monthTodos.id = 'month-todos';
    monthTodos.classList.add('todo-selection');
    monthTodos.innerHTML = 'Month';
    todoContainer.appendChild(monthTodos);

    const allTodos = document.createElement('p');
    allTodos.id = 'all-todos';
    allTodos.classList.add('todo-selection');
    allTodos.innerHTML = 'All';
    todoContainer.appendChild(allTodos);

    const footer = document.createElement('p');
    footer.id = 'footer';
    footer.innerHTML = 'Made by ';
    sideMenu.appendChild(footer);

    const footerLink = document.createElement('a');
    footerLink.id = 'footer-link';
    footerLink.setAttribute('href', 'https://github.com/matheuspl92/todo-list')
    footerLink.setAttribute('target', '_blank')
    footerLink.innerHTML = 'matheuspl92';
    footer.appendChild(footerLink);
}

function loadProjects(projectsArray) {
    const contentContainer = document.getElementById('content-container');

    const contentTitle = document.createElement('div');
    contentTitle.id = 'content-title';
    contentTitle.innerHTML = 'Projects'
    contentContainer.appendChild(contentTitle);

    const contentSettings = document.createElement('div');
    contentSettings.id = 'content-settings';
    contentContainer.appendChild(contentSettings);

    //Use when projects have priorities or due dates to sort by
    /*const sortText = document.createElement('p');
    sortText.id = 'sort-text';
    sortText.innerHTML = 'Sort by'
    contentSettings.appendChild(sortText);

    const sortDate = document.createElement('button');
    sortDate.id = 'sort-date-btn';
    sortDate.classList.add('sort-btn');
    sortDate.innerHTML = "Date";
    contentSettings.appendChild(sortDate);

    const sortPriority = document.createElement('button');
    sortPriority.id = 'sort-priority-btn';
    sortPriority.classList.add('sort-btn');
    sortPriority.innerHTML = "Priority";
    contentSettings.appendChild(sortPriority);*/

    const addProject = document.createElement('img');
    addProject.setAttribute('src', _home_matheus_repos_todo_list_src_add_icon_png__WEBPACK_IMPORTED_MODULE_1__)
    addProject.id = 'add-project-btn';
    addProject.classList.add('add-btn');
    addProject.innerHTML = "Add";
    contentSettings.appendChild(addProject);

    const contentBox = document.createElement('div');
    contentBox.id = 'content-box';
    contentContainer.appendChild(contentBox);

    createProjectsContent(contentBox, projectsArray);
}

function createProjectsContent(container, projectsArray, typeOfSort, isDecreasing = false) {

    projectsArray.forEach(project => {
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('project-container');
        container.appendChild(projectContainer);

        const projectName = document.createElement('h3')
        projectName.classList.add('project-name');
        projectName.innerHTML = project.getName();
        projectContainer.appendChild(projectName)
    });
}



/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Project = (name) => {
    let projectName = name;
    const todoArray = [];

    return {
        getName: () => {return projectName},

        addTodo: (todo) => {todoArray.push(todo)},

        getTodoArray: () => {return todoArray.slice()},

        removeTodo: (todoIndex) => {todoArray.splice(todoIndex, 1)},

        editTodo: (todoIndex, todo) => {todoArray[todoIndex] = todo},
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "editProject": () => (/* binding */ editProject),
/* harmony export */   "getProjects": () => (/* binding */ getProjects),
/* harmony export */   "removeProject": () => (/* binding */ removeProject)
/* harmony export */ });
const projectsArray = [];

const getProjects = () => {return projectsArray.slice()}

const addProject = (project) => {projectsArray.push(project)}

const removeProject = (projectIndex) => {projectsArray.splice(projectIndex, 1)}

const editProject = (projectIndex, project) => {projectsArray[projectIndex] = project}



/***/ }),

/***/ "./src/add-icon.png":
/*!**************************!*\
  !*** ./src/add-icon.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8991ef58fc4edce42362.png";

/***/ }),

/***/ "./src/tick-mark.png":
/*!***************************!*\
  !*** ./src/tick-mark.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8fa565951b054ca8ae84.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0EsbUNBQW1DLDJFQUFNO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEpBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixtQkFBbUI7O0FBRTNDLDRCQUE0QixxQkFBcUI7O0FBRWpELDZCQUE2Qix5QkFBeUI7O0FBRXRELG9DQUFvQywrQkFBK0I7O0FBRW5FLHdDQUF3Qyw0QkFBNEI7QUFDcEU7QUFDQTs7QUFFQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCdEI7O0FBRUEsMkJBQTJCOztBQUUzQixpQ0FBaUM7O0FBRWpDLHlDQUF5Qzs7QUFFekMsZ0RBQWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIENPTE9SUyAqL1xcblxcbjpyb290IHtcXG5cXHQtLXByaW1hcnk6ICM0NWM5YTU7XFxuXFx0LS1wcmltYXJ5LWxpZ2h0OiAjNDVjOWE2ODU7XFxuXFx0LS1wcmltYXJ5LWRhcms6ICMzYmFjOGU7XFxufVxcblxcbi8qIFNDUk9MTCBCQVIgKi9cXG5cXG4vKiB3aWR0aCAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcblxcdHdpZHRoOiAxMHB4O1xcbiAgfVxcbiAgXFxuICAvKiBUcmFjayAqL1xcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuXFx0YmFja2dyb3VuZDogI2YxZjFmMTsgXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcbiAgfVxcbiAgIFxcbiAgLyogSGFuZGxlICovXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTsgXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcbiAgfVxcbiAgXFxuICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcblxcdGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZGFyayk7IFxcbiAgfVxcblxcbi8qIEJBU0lDIEVMRU1FTlRTICovXFxuXFxuaDEge1xcblxcdGZvbnQtc2l6ZTogM2VtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5oMiB7XFxuXFx0Zm9udC1zaXplOiAyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIEJBU0lDIENPTlRBSU5FUlMgKi9cXG5cXG4jbWFpbi1jb250YWluZXIge1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0d2lkdGg6IDEwMDBweDtcXG5cXHRtYXJnaW46IDBweCBhdXRvO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG5cXG4jc2lkZS1tZW51IHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyIDUwcHg7XFxuXFx0bWFyZ2luOiAyNXB4O1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjVweDtcXG5cXHRib3gtc2hhZG93OiAwcHggMHB4IDEwcHggZ3JheTtcXG59XFxuXFxuI2NvbnRlbnQtY29udGFpbmVyIHtcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG5cXHRtYXJnaW46IDI1cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjVweDtcXG5cXHRib3gtc2hhZG93OiAwcHggMHB4IDEwcHggZ3JheTtcXG59XFxuXFxuLyogU0lERSBNRU5VICovXFxuXFxuI2xvZ28tY29udGFpbmVyIHtcXG5cXHRoZWlnaHQ6IDEwMHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDEwcHg7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTB2aDtcXG59XFxuXFxuI2xvZ28taW1nIHtcXG5cXHRoZWlnaHQ6IDc1cHg7XFxufVxcblxcbiNsb2dvLXRpdGxlIHtcXG5cXHRjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbiNzZWxlY3Rpb24tY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiAyMHB4O1xcbn1cXG5cXG4jbXktcHJvamVjdHMsXFxuLnRvZG8tc2VsZWN0aW9uIHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0dHJhbnNpdGlvbjogYWxsIC4yNXM7XFxufVxcblxcbiNteS10b2RvcyB7XFxuXFx0cGFkZGluZzogMTBweDtcXG59XFxuXFxuI215LXByb2plY3RzOmhvdmVyLFxcbi50b2RvLXNlbGVjdGlvbjpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbn1cXG5cXG4jbXktcHJvamVjdHM6YWN0aXZlLFxcbi50b2RvLXNlbGVjdGlvbjphY3RpdmUge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XFxufVxcblxcbiN0b2RvLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMTBweDtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG5cXHRwbGFjZS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNmb290ZXItbGluayB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogQ09OVEVOVCBDT05UQUlORVIgLSBQUk9KRUNUUyAqL1xcblxcbiNjb250ZW50LXRpdGxlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHRmb250LXNpemU6IDJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2NvbnRlbnQtc2V0dGluZ3Mge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4uYWRkLWJ0biB7XFxuXFx0aGVpZ2h0OiA3NXB4O1xcblxcdC8qZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDFweCBncmF5KTsqL1xcblxcdHRyYW5zaXRpb246IGFsbCAuMjVzO1xcbn1cXG5cXG4uYWRkLWJ0bjpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xcbn1cXG5cXG4uYWRkLWJ0bjphY3RpdmUge1xcblxcdGZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpO1xcbn1cXG5cXG4jY29udGVudC1ib3gge1xcbiAgXFx0b3ZlcmZsb3c6IGF1dG87XFxuXFx0Z3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuXFx0Z3JpZC1jb2x1bW4tZW5kOiAzO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z2FwOiAyMHB4O1xcblxcdHBhZGRpbmc6IDVweCAyMHB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAyMHB4O1xcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcblxcdG1hcmdpbi1ib3R0b206IDIwcHg7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHRib3gtc2hhZG93OiAwcHggMHB4IDVweCBncmF5O1xcblxcdHRyYW5zaXRpb246IGFsbCAuMjVzO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXI6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXI6YWN0aXZlIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcblxcdGZpbHRlcjogYnJpZ2h0bmVzcyg3NSUpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZix1QkFBdUI7Q0FDdkIsd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUEsV0FBVzs7QUFFWDtDQUNDLGtCQUFrQjtDQUNsQiwwQkFBMEI7Q0FDMUIsdUJBQXVCO0FBQ3hCOztBQUVBLGVBQWU7O0FBRWYsVUFBVTtBQUNWO0NBQ0MsV0FBVztFQUNWOztFQUVBLFVBQVU7RUFDVjtDQUNELG1CQUFtQjtDQUNuQixrQkFBa0I7RUFDakI7O0VBRUEsV0FBVztFQUNYO0NBQ0QsZ0NBQWdDO0NBQ2hDLGtCQUFrQjtFQUNqQjs7RUFFQSxvQkFBb0I7RUFDcEI7Q0FDRCwrQkFBK0I7RUFDOUI7O0FBRUYsbUJBQW1COztBQUVuQjtDQUNDLGNBQWM7Q0FDZCxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsaUJBQWlCO0FBQ2xCOztBQUVBLHFCQUFxQjs7QUFFckI7Q0FDQyxhQUFhO0NBQ2IsYUFBYTtDQUNiLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsYUFBYTtDQUNiLGtDQUFrQztDQUNsQyxZQUFZO0NBQ1osYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiLDZCQUE2QjtDQUM3Qiw4QkFBOEI7Q0FDOUIsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQiw2QkFBNkI7QUFDOUI7O0FBRUEsY0FBYzs7QUFFZDtDQUNDLGFBQWE7Q0FDYixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixTQUFTO0FBQ1Y7O0FBRUE7O0NBRUMsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7O0NBRUMsZUFBZTtDQUNmLHNDQUFzQztBQUN2Qzs7QUFFQTs7Q0FFQyxxQ0FBcUM7QUFDdEM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFNBQVM7Q0FDVCxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCLGlCQUFpQjtBQUNsQjs7QUFFQSxpQ0FBaUM7O0FBRWpDO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsY0FBYztDQUNkLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsb0JBQW9CO0NBQ3BCLGFBQWE7Q0FDYixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1oseUNBQXlDO0NBQ3pDLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBRUE7R0FDRyxjQUFjO0NBQ2hCLG9CQUFvQjtDQUNwQixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLFNBQVM7Q0FDVCxpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkIseURBQXlEO0NBQ3pELDREQUE0RDtBQUM3RDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQ0FBc0M7Q0FDdEMsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYiw0QkFBNEI7Q0FDNUIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLHFDQUFxQztBQUN0Qzs7QUFFQTtDQUNDLHFDQUFxQztDQUNyQyx1QkFBdUI7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogQ09MT1JTICovXFxuXFxuOnJvb3Qge1xcblxcdC0tcHJpbWFyeTogIzQ1YzlhNTtcXG5cXHQtLXByaW1hcnktbGlnaHQ6ICM0NWM5YTY4NTtcXG5cXHQtLXByaW1hcnktZGFyazogIzNiYWM4ZTtcXG59XFxuXFxuLyogU0NST0xMIEJBUiAqL1xcblxcbi8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuXFx0d2lkdGg6IDEwcHg7XFxuICB9XFxuICBcXG4gIC8qIFRyYWNrICovXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZjFmMWYxOyBcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuICB9XFxuICAgXFxuICAvKiBIYW5kbGUgKi9cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcblxcdGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpOyBcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuICB9XFxuICBcXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1kYXJrKTsgXFxuICB9XFxuXFxuLyogQkFTSUMgRUxFTUVOVFMgKi9cXG5cXG5oMSB7XFxuXFx0Zm9udC1zaXplOiAzZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmgyIHtcXG5cXHRmb250LXNpemU6IDJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogQkFTSUMgQ09OVEFJTkVSUyAqL1xcblxcbiNtYWluLWNvbnRhaW5lciB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHR3aWR0aDogMTAwMHB4O1xcblxcdG1hcmdpbjogMHB4IGF1dG87XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcblxcbiNzaWRlLW1lbnUge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnIgNTBweDtcXG5cXHRtYXJnaW46IDI1cHg7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHRib3JkZXItcmFkaXVzOiAyNXB4O1xcblxcdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCBncmF5O1xcbn1cXG5cXG4jY29udGVudC1jb250YWluZXIge1xcblxcdGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcblxcdG1hcmdpbjogMjVweDtcXG5cXHRib3JkZXItcmFkaXVzOiAyNXB4O1xcblxcdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCBncmF5O1xcbn1cXG5cXG4vKiBTSURFIE1FTlUgKi9cXG5cXG4jbG9nby1jb250YWluZXIge1xcblxcdGhlaWdodDogMTAwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMTBweDtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMHZoO1xcbn1cXG5cXG4jbG9nby1pbWcge1xcblxcdGhlaWdodDogNzVweDtcXG59XFxuXFxuI2xvZ28tdGl0bGUge1xcblxcdGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuI3NlbGVjdGlvbi1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRnYXA6IDIwcHg7XFxufVxcblxcbiNteS1wcm9qZWN0cyxcXG4udG9kby1zZWxlY3Rpb24ge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgLjI1cztcXG59XFxuXFxuI215LXRvZG9zIHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jbXktcHJvamVjdHM6aG92ZXIsXFxuLnRvZG8tc2VsZWN0aW9uOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxufVxcblxcbiNteS1wcm9qZWN0czphY3RpdmUsXFxuLnRvZG8tc2VsZWN0aW9uOmFjdGl2ZSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG59XFxuXFxuI3RvZG8tY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxMHB4O1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbiNmb290ZXIge1xcblxcdHBsYWNlLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2Zvb3Rlci1saW5rIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Y29sb3I6IHZhcigtLXByaW1hcnkpO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBDT05URU5UIENPTlRBSU5FUiAtIFBST0pFQ1RTICovXFxuXFxuI2NvbnRlbnQtdGl0bGUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdGZvbnQtc2l6ZTogMmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jY29udGVudC1zZXR0aW5ncyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogZW5kO1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5hZGQtYnRuIHtcXG5cXHRoZWlnaHQ6IDc1cHg7XFxuXFx0LypmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMXB4IGdyYXkpOyovXFxuXFx0dHJhbnNpdGlvbjogYWxsIC4yNXM7XFxufVxcblxcbi5hZGQtYnRuOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0ZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XFxufVxcblxcbi5hZGQtYnRuOmFjdGl2ZSB7XFxuXFx0ZmlsdGVyOiBicmlnaHRuZXNzKDcwJSk7XFxufVxcblxcbiNjb250ZW50LWJveCB7XFxuICBcXHRvdmVyZmxvdzogYXV0bztcXG5cXHRncmlkLWNvbHVtbi1zdGFydDogMTtcXG5cXHRncmlkLWNvbHVtbi1lbmQ6IDM7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRnYXA6IDIwcHg7XFxuXFx0cGFkZGluZzogNXB4IDIwcHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDIwcHg7XFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxuXFx0bWFyZ2luLWJvdHRvbTogMjBweDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGdyYXk7XFxuXFx0dHJhbnNpdGlvbjogYWxsIC4yNXM7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lcjpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lcjphY3RpdmUge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XFxuXFx0ZmlsdGVyOiBicmlnaHRuZXNzKDc1JSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCAqIGFzIERpc3BsYXkgZnJvbSBcIi4vbW9kdWxlcy9kaXNwbGF5XCI7XG5pbXBvcnQgKiBhcyBTdG9yYWdlIGZyb20gXCIuL21vZHVsZXMvc3RvcmFnZVwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0XCI7XG5cblN0b3JhZ2UuYWRkUHJvamVjdChQcm9qZWN0KCdNeSBmaXJzdCBwcm9qZWN0JykpO1xuU3RvcmFnZS5hZGRQcm9qZWN0KFByb2plY3QoJ015IHNlY29uZCBwcm9qZWN0JykpO1xuU3RvcmFnZS5hZGRQcm9qZWN0KFByb2plY3QoJ015IHRoaXJkIHByb2plY3QnKSk7XG5cbkRpc3BsYXkubG9hZFBhZ2UoKTtcbkRpc3BsYXkubG9hZFByb2plY3RzKFN0b3JhZ2UuZ2V0UHJvamVjdHMoKSkiLCJpbXBvcnQgaW1nTG9nbyBmcm9tIFwiL2hvbWUvbWF0aGV1cy9yZXBvcy90b2RvLWxpc3Qvc3JjL3RpY2stbWFyay5wbmdcIlxuaW1wb3J0IGltZ0FkZCBmcm9tIFwiL2hvbWUvbWF0aGV1cy9yZXBvcy90b2RvLWxpc3Qvc3JjL2FkZC1pY29uLnBuZ1wiXG5cbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1haW5Db250YWluZXIuaWQgPSAnbWFpbi1jb250YWluZXInO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcblxuZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG5cbiAgICAvL0NyZWF0ZSBiYXNpYyBjb250YWluZXJzXG4gICAgY29uc3Qgc2lkZU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlTWVudS5pZCA9ICdzaWRlLW1lbnUnO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZU1lbnUpO1xuXG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRDb250YWluZXIuaWQgPSAnY29udGVudC1jb250YWluZXInO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG5cbiAgICAvL0NyZWF0ZSBzaWRlIG1lbnUgZWxlbWVudHNcbiAgICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9nb0NvbnRhaW5lci5pZCA9ICdsb2dvLWNvbnRhaW5lcic7XG4gICAgc2lkZU1lbnUuYXBwZW5kQ2hpbGQobG9nb0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbG9nb0ltZy5pZCA9ICdsb2dvLWltZyc7XG4gICAgbG9nb0ltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZ0xvZ28pO1xuICAgIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XG5cbiAgICBjb25zdCBsb2dvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGxvZ29UaXRsZS5pZCA9ICdsb2dvLXRpdGxlJztcbiAgICBsb2dvVGl0bGUuaW5uZXJIVE1MID0gJ1RpZGR5RG8nO1xuICAgIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nb1RpdGxlKTtcblxuICAgIGNvbnN0IHNlbGVjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlbGVjdGlvbkNvbnRhaW5lci5pZCA9ICdzZWxlY3Rpb24tY29udGFpbmVyJztcbiAgICBzaWRlTWVudS5hcHBlbmRDaGlsZChzZWxlY3Rpb25Db250YWluZXIpO1xuXG4gICAgY29uc3QgbXlQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbXlQcm9qZWN0cy5pZCA9ICdteS1wcm9qZWN0cyc7XG4gICAgbXlQcm9qZWN0cy5pbm5lckhUTUwgPSAnTXkgcHJvamVjdHMnO1xuICAgIHNlbGVjdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChteVByb2plY3RzKTtcblxuICAgIGNvbnN0IG15VG9kb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG15VG9kb3MuaWQgPSAnbXktdG9kb3MnO1xuICAgIG15VG9kb3MuaW5uZXJIVE1MID0gJ015IHRvZG9zJztcbiAgICBzZWxlY3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobXlUb2Rvcyk7XG5cbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0NvbnRhaW5lci5pZCA9ICd0b2RvLWNvbnRhaW5lcic7XG4gICAgc2VsZWN0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpO1xuXG4gICAgY29uc3QgdG9kYXlUb2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0b2RheVRvZG9zLmlkID0gJ3RvZGF5LXRvZG9zJztcbiAgICB0b2RheVRvZG9zLmNsYXNzTGlzdC5hZGQoJ3RvZG8tc2VsZWN0aW9uJyk7XG4gICAgdG9kYXlUb2Rvcy5pbm5lckhUTUwgPSAnVG9kYXknO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXlUb2Rvcyk7XG5cbiAgICBjb25zdCB3ZWVrVG9kb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgd2Vla1RvZG9zLmlkID0gJ3dlZWstdG9kb3MnO1xuICAgIHdlZWtUb2Rvcy5jbGFzc0xpc3QuYWRkKCd0b2RvLXNlbGVjdGlvbicpO1xuICAgIHdlZWtUb2Rvcy5pbm5lckhUTUwgPSAnV2Vlayc7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWVrVG9kb3MpO1xuXG4gICAgY29uc3QgbW9udGhUb2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtb250aFRvZG9zLmlkID0gJ21vbnRoLXRvZG9zJztcbiAgICBtb250aFRvZG9zLmNsYXNzTGlzdC5hZGQoJ3RvZG8tc2VsZWN0aW9uJyk7XG4gICAgbW9udGhUb2Rvcy5pbm5lckhUTUwgPSAnTW9udGgnO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQobW9udGhUb2Rvcyk7XG5cbiAgICBjb25zdCBhbGxUb2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhbGxUb2Rvcy5pZCA9ICdhbGwtdG9kb3MnO1xuICAgIGFsbFRvZG9zLmNsYXNzTGlzdC5hZGQoJ3RvZG8tc2VsZWN0aW9uJyk7XG4gICAgYWxsVG9kb3MuaW5uZXJIVE1MID0gJ0FsbCc7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChhbGxUb2Rvcyk7XG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZm9vdGVyLmlkID0gJ2Zvb3Rlcic7XG4gICAgZm9vdGVyLmlubmVySFRNTCA9ICdNYWRlIGJ5ICc7XG4gICAgc2lkZU1lbnUuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICAgIGNvbnN0IGZvb3RlckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZm9vdGVyTGluay5pZCA9ICdmb290ZXItbGluayc7XG4gICAgZm9vdGVyTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL21hdGhldXNwbDkyL3RvZG8tbGlzdCcpXG4gICAgZm9vdGVyTGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKVxuICAgIGZvb3RlckxpbmsuaW5uZXJIVE1MID0gJ21hdGhldXNwbDkyJztcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTGluayk7XG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0cyhwcm9qZWN0c0FycmF5KSB7XG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudFRpdGxlLmlkID0gJ2NvbnRlbnQtdGl0bGUnO1xuICAgIGNvbnRlbnRUaXRsZS5pbm5lckhUTUwgPSAnUHJvamVjdHMnXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50VGl0bGUpO1xuXG4gICAgY29uc3QgY29udGVudFNldHRpbmdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudFNldHRpbmdzLmlkID0gJ2NvbnRlbnQtc2V0dGluZ3MnO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudFNldHRpbmdzKTtcblxuICAgIC8vVXNlIHdoZW4gcHJvamVjdHMgaGF2ZSBwcmlvcml0aWVzIG9yIGR1ZSBkYXRlcyB0byBzb3J0IGJ5XG4gICAgLypjb25zdCBzb3J0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzb3J0VGV4dC5pZCA9ICdzb3J0LXRleHQnO1xuICAgIHNvcnRUZXh0LmlubmVySFRNTCA9ICdTb3J0IGJ5J1xuICAgIGNvbnRlbnRTZXR0aW5ncy5hcHBlbmRDaGlsZChzb3J0VGV4dCk7XG5cbiAgICBjb25zdCBzb3J0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNvcnREYXRlLmlkID0gJ3NvcnQtZGF0ZS1idG4nO1xuICAgIHNvcnREYXRlLmNsYXNzTGlzdC5hZGQoJ3NvcnQtYnRuJyk7XG4gICAgc29ydERhdGUuaW5uZXJIVE1MID0gXCJEYXRlXCI7XG4gICAgY29udGVudFNldHRpbmdzLmFwcGVuZENoaWxkKHNvcnREYXRlKTtcblxuICAgIGNvbnN0IHNvcnRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNvcnRQcmlvcml0eS5pZCA9ICdzb3J0LXByaW9yaXR5LWJ0bic7XG4gICAgc29ydFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3NvcnQtYnRuJyk7XG4gICAgc29ydFByaW9yaXR5LmlubmVySFRNTCA9IFwiUHJpb3JpdHlcIjtcbiAgICBjb250ZW50U2V0dGluZ3MuYXBwZW5kQ2hpbGQoc29ydFByaW9yaXR5KTsqL1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGFkZFByb2plY3Quc2V0QXR0cmlidXRlKCdzcmMnLCBpbWdBZGQpXG4gICAgYWRkUHJvamVjdC5pZCA9ICdhZGQtcHJvamVjdC1idG4nO1xuICAgIGFkZFByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWRkLWJ0bicpO1xuICAgIGFkZFByb2plY3QuaW5uZXJIVE1MID0gXCJBZGRcIjtcbiAgICBjb250ZW50U2V0dGluZ3MuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG5cbiAgICBjb25zdCBjb250ZW50Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudEJveC5pZCA9ICdjb250ZW50LWJveCc7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50Qm94KTtcblxuICAgIGNyZWF0ZVByb2plY3RzQ29udGVudChjb250ZW50Qm94LCBwcm9qZWN0c0FycmF5KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdHNDb250ZW50KGNvbnRhaW5lciwgcHJvamVjdHNBcnJheSwgdHlwZU9mU29ydCwgaXNEZWNyZWFzaW5nID0gZmFsc2UpIHtcblxuICAgIHByb2plY3RzQXJyYXkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICAgICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJyk7XG4gICAgICAgIHByb2plY3ROYW1lLmlubmVySFRNTCA9IHByb2plY3QuZ2V0TmFtZSgpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKVxuICAgIH0pO1xufVxuXG5leHBvcnQge2xvYWRQYWdlLCBsb2FkUHJvamVjdHN9OyIsImNvbnN0IFByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgIGxldCBwcm9qZWN0TmFtZSA9IG5hbWU7XG4gICAgY29uc3QgdG9kb0FycmF5ID0gW107XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXROYW1lOiAoKSA9PiB7cmV0dXJuIHByb2plY3ROYW1lfSxcblxuICAgICAgICBhZGRUb2RvOiAodG9kbykgPT4ge3RvZG9BcnJheS5wdXNoKHRvZG8pfSxcblxuICAgICAgICBnZXRUb2RvQXJyYXk6ICgpID0+IHtyZXR1cm4gdG9kb0FycmF5LnNsaWNlKCl9LFxuXG4gICAgICAgIHJlbW92ZVRvZG86ICh0b2RvSW5kZXgpID0+IHt0b2RvQXJyYXkuc3BsaWNlKHRvZG9JbmRleCwgMSl9LFxuXG4gICAgICAgIGVkaXRUb2RvOiAodG9kb0luZGV4LCB0b2RvKSA9PiB7dG9kb0FycmF5W3RvZG9JbmRleF0gPSB0b2RvfSxcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7IiwiY29uc3QgcHJvamVjdHNBcnJheSA9IFtdO1xuXG5jb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtyZXR1cm4gcHJvamVjdHNBcnJheS5zbGljZSgpfVxuXG5jb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtwcm9qZWN0c0FycmF5LnB1c2gocHJvamVjdCl9XG5cbmNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdEluZGV4KSA9PiB7cHJvamVjdHNBcnJheS5zcGxpY2UocHJvamVjdEluZGV4LCAxKX1cblxuY29uc3QgZWRpdFByb2plY3QgPSAocHJvamVjdEluZGV4LCBwcm9qZWN0KSA9PiB7cHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdID0gcHJvamVjdH1cblxuZXhwb3J0IHtnZXRQcm9qZWN0cywgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgZWRpdFByb2plY3R9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9