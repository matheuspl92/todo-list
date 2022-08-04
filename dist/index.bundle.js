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
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont-family: sans-serif;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* COLORS */\n\n:root {\n\t--primary: #45c9a5;\n\t--primary-light: #45c9a685;\n\t--primary-dark: #3bac8e;\n}\n\n/* SCROLL BAR */\n\n/* width */\n::-webkit-scrollbar {\n\twidth: 10px;\n  }\n  \n  /* Track */\n  ::-webkit-scrollbar-track {\n\tbackground: #f1f1f1; \n\tborder-radius: 5px;\n  }\n   \n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n\tbackground: var(--primary-light); \n\tborder-radius: 5px;\n  }\n  \n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n\tbackground: var(--primary-dark); \n  }\n\n/* BASIC ELEMENTS */\n\nh1 {\n\tfont-size: 3em;\n\tfont-weight: bold;\n}\n\nh2 {\n\tfont-size: 2em;\n\tfont-weight: bold;\n}\n\n/* BASIC CONTAINERS */\n\n#main-container {\n\theight: 100vh;\n\twidth: 1000px;\n\tmargin: 0px auto;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 3fr;\n}\n\n#side-menu {\n\tdisplay: grid;\n\tgrid-template-rows: 100px 1fr 50px;\n\tmargin: 25px;\n\tpadding: 20px;\n\tborder-radius: 25px;\n\tbox-shadow: 0px 0px 10px gray;\n}\n\n#content-container {\n\theight: calc(100vh - 50px);\n\tdisplay: grid;\n\tgrid-template-rows: 100px 1fr;\n\tgrid-template-columns: 1fr 1fr;\n\tmargin: 25px;\n\tborder-radius: 25px;\n\tbox-shadow: 0px 0px 10px gray;\n}\n\n/* SIDE MENU */\n\n#logo-container {\n\theight: 100px;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n\tmargin-bottom: 10vh;\n}\n\n#logo-img {\n\theight: 75px;\n}\n\n#logo-title {\n\tcolor: var(--primary);\n}\n\n#selection-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tgap: 20px;\n}\n\n#my-projects,\n.todo-selection {\n\tpadding: 10px;\n\tborder-radius: 10px;\n\ttransition: all .25s;\n}\n\n#my-todos {\n\tpadding: 10px;\n}\n\n#my-projects:hover,\n.todo-selection:hover {\n\tcursor: pointer;\n\tbackground-color: var(--primary-light);\n}\n\n#my-projects:active,\n.todo-selection:active {\n\tbackground-color: var(--primary-dark);\n}\n\n#todo-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\tfont-size: 1.5em;\n}\n\n#footer {\n\tplace-self: center;\n}\n\n#footer-link {\n\ttext-decoration: none;\n\tcolor: var(--primary);\n\tfont-weight: bold;\n}\n\n/* CONTENT CONTAINER - PROJECTS */\n\n#content-title {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 20px;\n\tfont-size: 2em;\n\tfont-weight: bold;\n}\n\n#content-settings {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: end;\n\tpadding: 20px;\n\tmargin-right: 5px;\n}\n\n.add-btn {\n\theight: 75px;\n\t/*filter: drop-shadow(0px 0px 1px gray);*/\n\ttransition: all .25s;\n}\n\n.add-btn:hover {\n\tcursor: pointer;\n\tfilter: brightness(90%);\n}\n\n.add-btn:active {\n\tfilter: brightness(70%);\n}\n\n#content-box {\n  \toverflow: auto;\n\tgrid-column-start: 1;\n\tgrid-column-end: 3;\n\tdisplay: grid;\n\tgap: 20px;\n\tpadding: 5px 20px;\n\tpadding-bottom: 20px;\n\tmargin-right: 5px;\n\tmargin-bottom: 20px;\n\tgrid-template-rows: repeat(auto-fill, minmax(150px, 1fr));\n\tgrid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n}\n\n.project-container {\n\tdisplay: grid;\n\tbackground-color: var(--primary-light);\n\tborder-radius: 20px;\n\tpadding: 20px;\n\tbox-shadow: 0px 0px 5px gray;\n\ttransition: all .25s;\n}\n\n.project-container:hover,\n.todo-container:hover {\n\tcursor: pointer;\n\tbackground-color: var(--primary-dark);\n}\n\n.project-container:active,\n.todo-container:active {\n\tbackground-color: var(--primary-dark);\n\tfilter: brightness(75%);\n}\n\n/* CONTENT CONTAINER - TODOS */\n\n#todo-content-box {\n\toverflow: auto;\n\tgrid-column-start: 1;\n\tgrid-column-end: 3;\n\tdisplay: grid;\n\tgap: 20px;\n\tpadding: 5px 20px;\n\tpadding-bottom: 20px;\n\tmargin-right: 5px;\n\tmargin-bottom: 20px;\n\tgrid-template-rows: repeat(auto-fill, minmax(40px, 1fr));\n}\n\n.todo-container {\n\tdisplay: grid;\n\tbackground-color: var(--primary-light);\n\tborder-radius: 20px;\n\tpadding: 20px;\n\tbox-shadow: 0px 0px 5px gray;\n\ttransition: all .25s;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont-family: sans-serif;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* COLORS */\n\n:root {\n\t--primary: #45c9a5;\n\t--primary-light: #45c9a685;\n\t--primary-dark: #3bac8e;\n}\n\n/* SCROLL BAR */\n\n/* width */\n::-webkit-scrollbar {\n\twidth: 10px;\n  }\n  \n  /* Track */\n  ::-webkit-scrollbar-track {\n\tbackground: #f1f1f1; \n\tborder-radius: 5px;\n  }\n   \n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n\tbackground: var(--primary-light); \n\tborder-radius: 5px;\n  }\n  \n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n\tbackground: var(--primary-dark); \n  }\n\n/* BASIC ELEMENTS */\n\nh1 {\n\tfont-size: 3em;\n\tfont-weight: bold;\n}\n\nh2 {\n\tfont-size: 2em;\n\tfont-weight: bold;\n}\n\n/* BASIC CONTAINERS */\n\n#main-container {\n\theight: 100vh;\n\twidth: 1000px;\n\tmargin: 0px auto;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 3fr;\n}\n\n#side-menu {\n\tdisplay: grid;\n\tgrid-template-rows: 100px 1fr 50px;\n\tmargin: 25px;\n\tpadding: 20px;\n\tborder-radius: 25px;\n\tbox-shadow: 0px 0px 10px gray;\n}\n\n#content-container {\n\theight: calc(100vh - 50px);\n\tdisplay: grid;\n\tgrid-template-rows: 100px 1fr;\n\tgrid-template-columns: 1fr 1fr;\n\tmargin: 25px;\n\tborder-radius: 25px;\n\tbox-shadow: 0px 0px 10px gray;\n}\n\n/* SIDE MENU */\n\n#logo-container {\n\theight: 100px;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 10px;\n\tmargin-bottom: 10vh;\n}\n\n#logo-img {\n\theight: 75px;\n}\n\n#logo-title {\n\tcolor: var(--primary);\n}\n\n#selection-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tgap: 20px;\n}\n\n#my-projects,\n.todo-selection {\n\tpadding: 10px;\n\tborder-radius: 10px;\n\ttransition: all .25s;\n}\n\n#my-todos {\n\tpadding: 10px;\n}\n\n#my-projects:hover,\n.todo-selection:hover {\n\tcursor: pointer;\n\tbackground-color: var(--primary-light);\n}\n\n#my-projects:active,\n.todo-selection:active {\n\tbackground-color: var(--primary-dark);\n}\n\n#todo-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\tfont-size: 1.5em;\n}\n\n#footer {\n\tplace-self: center;\n}\n\n#footer-link {\n\ttext-decoration: none;\n\tcolor: var(--primary);\n\tfont-weight: bold;\n}\n\n/* CONTENT CONTAINER - PROJECTS */\n\n#content-title {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 20px;\n\tfont-size: 2em;\n\tfont-weight: bold;\n}\n\n#content-settings {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: end;\n\tpadding: 20px;\n\tmargin-right: 5px;\n}\n\n.add-btn {\n\theight: 75px;\n\t/*filter: drop-shadow(0px 0px 1px gray);*/\n\ttransition: all .25s;\n}\n\n.add-btn:hover {\n\tcursor: pointer;\n\tfilter: brightness(90%);\n}\n\n.add-btn:active {\n\tfilter: brightness(70%);\n}\n\n#content-box {\n  \toverflow: auto;\n\tgrid-column-start: 1;\n\tgrid-column-end: 3;\n\tdisplay: grid;\n\tgap: 20px;\n\tpadding: 5px 20px;\n\tpadding-bottom: 20px;\n\tmargin-right: 5px;\n\tmargin-bottom: 20px;\n\tgrid-template-rows: repeat(auto-fill, minmax(150px, 1fr));\n\tgrid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n}\n\n.project-container {\n\tdisplay: grid;\n\tbackground-color: var(--primary-light);\n\tborder-radius: 20px;\n\tpadding: 20px;\n\tbox-shadow: 0px 0px 5px gray;\n\ttransition: all .25s;\n}\n\n.project-container:hover,\n.todo-container:hover {\n\tcursor: pointer;\n\tbackground-color: var(--primary-dark);\n}\n\n.project-container:active,\n.todo-container:active {\n\tbackground-color: var(--primary-dark);\n\tfilter: brightness(75%);\n}\n\n/* CONTENT CONTAINER - TODOS */\n\n#todo-content-box {\n\toverflow: auto;\n\tgrid-column-start: 1;\n\tgrid-column-end: 3;\n\tdisplay: grid;\n\tgap: 20px;\n\tpadding: 5px 20px;\n\tpadding-bottom: 20px;\n\tmargin-right: 5px;\n\tmargin-bottom: 20px;\n\tgrid-template-rows: repeat(auto-fill, minmax(40px, 1fr));\n}\n\n.todo-container {\n\tdisplay: grid;\n\tbackground-color: var(--primary-light);\n\tborder-radius: 20px;\n\tpadding: 20px;\n\tbox-shadow: 0px 0px 5px gray;\n\ttransition: all .25s;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/todo */ "./src/modules/todo.js");






const firstProj = (0,_modules_project__WEBPACK_IMPORTED_MODULE_3__["default"])("My first Project")
firstProj.addTodo((0,_modules_todo__WEBPACK_IMPORTED_MODULE_4__["default"])('first todo', "template todo description bla bla bla ...", '21/12/2022', 'high'))
firstProj.addTodo((0,_modules_todo__WEBPACK_IMPORTED_MODULE_4__["default"])('first todo', "template todo description bla bla bla ...", '21/12/2022', 'high'))
firstProj.addTodo((0,_modules_todo__WEBPACK_IMPORTED_MODULE_4__["default"])('first todo', "template todo description bla bla bla ...", '21/12/2022', 'high'))

_modules_storage__WEBPACK_IMPORTED_MODULE_2__.addProject(firstProj);
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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* harmony import */ var _home_matheus_repos_todo_list_src_tick_mark_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/tick-mark.png */ "./src/tick-mark.png");
/* harmony import */ var _home_matheus_repos_todo_list_src_add_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/add-icon.png */ "./src/add-icon.png");




const mainContainer = document.createElement('div');
mainContainer.id = 'main-container';
document.body.appendChild(mainContainer);

function _clearContentContainer() {
    const contentContainer = document.getElementById('content-container');
    while(contentContainer.hasChildNodes()){
        contentContainer.firstChild.remove();
    }
}

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
    logoImg.setAttribute('src', _home_matheus_repos_todo_list_src_tick_mark_png__WEBPACK_IMPORTED_MODULE_1__);
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
    myProjects.addEventListener('click', () => {loadProjects(_storage__WEBPACK_IMPORTED_MODULE_0__.getProjects())})
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
    _clearContentContainer();

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
    addProject.setAttribute('src', _home_matheus_repos_todo_list_src_add_icon_png__WEBPACK_IMPORTED_MODULE_2__)
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

        projectContainer.addEventListener('click', () => {
            loadProjectTodos(project);
        })

        const projectName = document.createElement('h3')
        projectName.classList.add('project-name');
        projectName.innerHTML = project.getName();
        projectContainer.appendChild(projectName)
    });
}

function loadProjectTodos(project) {
    _clearContentContainer();

    const contentContainer = document.getElementById('content-container');

    const contentTitle = document.createElement('div');
    contentTitle.id = 'content-title';
    contentTitle.innerHTML = project.getName();
    contentContainer.appendChild(contentTitle);

    const contentSettings = document.createElement('div');
    contentSettings.id = 'content-settings';
    contentContainer.appendChild(contentSettings);

    const addTodo = document.createElement('img');
    addTodo.setAttribute('src', _home_matheus_repos_todo_list_src_add_icon_png__WEBPACK_IMPORTED_MODULE_2__)
    addTodo.id = 'add-todo-btn';
    addTodo.classList.add('add-btn');
    addTodo.innerHTML = "Add";
    contentSettings.appendChild(addTodo);

    const contentBox = document.createElement('div');
    contentBox.id = 'todo-content-box';
    contentContainer.appendChild(contentBox);

    createTodosContent(contentBox, project.getTodoArray())
}

function createTodosContent(container, todosArray, typeOfSort, isDecreasing = false) {

    todosArray.forEach(todo => {
        const todoContainer = document.createElement('div');
        todoContainer.classList.add('todo-container');
        container.appendChild(todoContainer);

        const todoName = document.createElement('p')
        todoName.classList.add('todo-name');
        todoName.innerHTML = todo.getName();
        todoContainer.appendChild(todoName)
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

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Todo = (name, description, dueDate, priority) => {
    console.log(name);
    let todoName = name;
    let todoDescription = description;
    let todoDueDate = dueDate;
    let todoPriority = priority;

    return {
        getName: () => {return todoName},
        getDescription: () => {return todoDescription},
        getDueDate: () => {return todoDueDate},
        getPriority: () => {return todoPriority},

        editName: (newName) => {todoName = newName},
        editDescription: (newDescription) => {todoDescription = newDescription},
        editDueDate: (newDueDate) => {todoDueDate = newDueDate},
        editPriority: (newPriority) => {todoPriority = newPriority},
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsMkVBQU07QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLG1CQUFtQjs7QUFFM0MsNEJBQTRCLHFCQUFxQjs7QUFFakQsNkJBQTZCLHlCQUF5Qjs7QUFFdEQsb0NBQW9DLCtCQUErQjs7QUFFbkUsd0NBQXdDLDRCQUE0QjtBQUNwRTtBQUNBOztBQUVBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJ0Qjs7QUFFQSwyQkFBMkI7O0FBRTNCLGlDQUFpQzs7QUFFakMseUNBQXlDOztBQUV6QyxnREFBZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4QywrQkFBK0IsdUJBQXVCO0FBQ3RELDJCQUEyQixtQkFBbUI7QUFDOUMsNEJBQTRCLG9CQUFvQjs7QUFFaEQsZ0NBQWdDLG1CQUFtQjtBQUNuRCw4Q0FBOEMsaUNBQWlDO0FBQy9FLHNDQUFzQyx5QkFBeUI7QUFDL0Qsd0NBQXdDLDJCQUEyQjtBQUNuRTtBQUNBOztBQUVBLGlFQUFlLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBDT0xPUlMgKi9cXG5cXG46cm9vdCB7XFxuXFx0LS1wcmltYXJ5OiAjNDVjOWE1O1xcblxcdC0tcHJpbWFyeS1saWdodDogIzQ1YzlhNjg1O1xcblxcdC0tcHJpbWFyeS1kYXJrOiAjM2JhYzhlO1xcbn1cXG5cXG4vKiBTQ1JPTEwgQkFSICovXFxuXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG5cXHR3aWR0aDogMTBweDtcXG4gIH1cXG4gIFxcbiAgLyogVHJhY2sgKi9cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcblxcdGJhY2tncm91bmQ6ICNmMWYxZjE7IFxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIH1cXG4gICBcXG4gIC8qIEhhbmRsZSAqL1xcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7IFxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIH1cXG4gIFxcbiAgLyogSGFuZGxlIG9uIGhvdmVyICovXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWRhcmspOyBcXG4gIH1cXG5cXG4vKiBCQVNJQyBFTEVNRU5UUyAqL1xcblxcbmgxIHtcXG5cXHRmb250LXNpemU6IDNlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaDIge1xcblxcdGZvbnQtc2l6ZTogMmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBCQVNJQyBDT05UQUlORVJTICovXFxuXFxuI21haW4tY29udGFpbmVyIHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHdpZHRoOiAxMDAwcHg7XFxuXFx0bWFyZ2luOiAwcHggYXV0bztcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG59XFxuXFxuI3NpZGUtbWVudSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciA1MHB4O1xcblxcdG1hcmdpbjogMjVweDtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuXFx0Ym94LXNoYWRvdzogMHB4IDBweCAxMHB4IGdyYXk7XFxufVxcblxcbiNjb250ZW50LWNvbnRhaW5lciB7XFxuXFx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuXFx0bWFyZ2luOiAyNXB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuXFx0Ym94LXNoYWRvdzogMHB4IDBweCAxMHB4IGdyYXk7XFxufVxcblxcbi8qIFNJREUgTUVOVSAqL1xcblxcbiNsb2dvLWNvbnRhaW5lciB7XFxuXFx0aGVpZ2h0OiAxMDBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxMHB4O1xcblxcdG1hcmdpbi1ib3R0b206IDEwdmg7XFxufVxcblxcbiNsb2dvLWltZyB7XFxuXFx0aGVpZ2h0OiA3NXB4O1xcbn1cXG5cXG4jbG9nby10aXRsZSB7XFxuXFx0Y29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4jc2VsZWN0aW9uLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdhcDogMjBweDtcXG59XFxuXFxuI215LXByb2plY3RzLFxcbi50b2RvLXNlbGVjdGlvbiB7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdHRyYW5zaXRpb246IGFsbCAuMjVzO1xcbn1cXG5cXG4jbXktdG9kb3Mge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiNteS1wcm9qZWN0czpob3ZlcixcXG4udG9kby1zZWxlY3Rpb246aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG59XFxuXFxuI215LXByb2plY3RzOmFjdGl2ZSxcXG4udG9kby1zZWxlY3Rpb246YWN0aXZlIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbn1cXG5cXG4jdG9kby1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDEwcHg7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuI2Zvb3RlciB7XFxuXFx0cGxhY2Utc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jZm9vdGVyLWxpbmsge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIENPTlRFTlQgQ09OVEFJTkVSIC0gUFJPSkVDVFMgKi9cXG5cXG4jY29udGVudC10aXRsZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0Zm9udC1zaXplOiAyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNjb250ZW50LXNldHRpbmdzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBlbmQ7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLmFkZC1idG4ge1xcblxcdGhlaWdodDogNzVweDtcXG5cXHQvKmZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxcHggZ3JheSk7Ki9cXG5cXHR0cmFuc2l0aW9uOiBhbGwgLjI1cztcXG59XFxuXFxuLmFkZC1idG46aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcXG59XFxuXFxuLmFkZC1idG46YWN0aXZlIHtcXG5cXHRmaWx0ZXI6IGJyaWdodG5lc3MoNzAlKTtcXG59XFxuXFxuI2NvbnRlbnQtYm94IHtcXG4gIFxcdG92ZXJmbG93OiBhdXRvO1xcblxcdGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcblxcdGdyaWQtY29sdW1uLWVuZDogMztcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdhcDogMjBweDtcXG5cXHRwYWRkaW5nOiA1cHggMjBweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMjBweDtcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXG5cXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0Ym94LXNoYWRvdzogMHB4IDBweCA1cHggZ3JheTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgLjI1cztcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyOmhvdmVyLFxcbi50b2RvLWNvbnRhaW5lcjpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lcjphY3RpdmUsXFxuLnRvZG8tY29udGFpbmVyOmFjdGl2ZSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG5cXHRmaWx0ZXI6IGJyaWdodG5lc3MoNzUlKTtcXG59XFxuXFxuLyogQ09OVEVOVCBDT05UQUlORVIgLSBUT0RPUyAqL1xcblxcbiN0b2RvLWNvbnRlbnQtYm94IHtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG5cXHRncmlkLWNvbHVtbi1zdGFydDogMTtcXG5cXHRncmlkLWNvbHVtbi1lbmQ6IDM7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRnYXA6IDIwcHg7XFxuXFx0cGFkZGluZzogNXB4IDIwcHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDIwcHg7XFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxuXFx0bWFyZ2luLWJvdHRvbTogMjBweDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0MHB4LCAxZnIpKTtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHRib3gtc2hhZG93OiAwcHggMHB4IDVweCBncmF5O1xcblxcdHRyYW5zaXRpb246IGFsbCAuMjVzO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZix1QkFBdUI7Q0FDdkIsd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUEsV0FBVzs7QUFFWDtDQUNDLGtCQUFrQjtDQUNsQiwwQkFBMEI7Q0FDMUIsdUJBQXVCO0FBQ3hCOztBQUVBLGVBQWU7O0FBRWYsVUFBVTtBQUNWO0NBQ0MsV0FBVztFQUNWOztFQUVBLFVBQVU7RUFDVjtDQUNELG1CQUFtQjtDQUNuQixrQkFBa0I7RUFDakI7O0VBRUEsV0FBVztFQUNYO0NBQ0QsZ0NBQWdDO0NBQ2hDLGtCQUFrQjtFQUNqQjs7RUFFQSxvQkFBb0I7RUFDcEI7Q0FDRCwrQkFBK0I7RUFDOUI7O0FBRUYsbUJBQW1COztBQUVuQjtDQUNDLGNBQWM7Q0FDZCxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsaUJBQWlCO0FBQ2xCOztBQUVBLHFCQUFxQjs7QUFFckI7Q0FDQyxhQUFhO0NBQ2IsYUFBYTtDQUNiLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsYUFBYTtDQUNiLGtDQUFrQztDQUNsQyxZQUFZO0NBQ1osYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiLDZCQUE2QjtDQUM3Qiw4QkFBOEI7Q0FDOUIsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQiw2QkFBNkI7QUFDOUI7O0FBRUEsY0FBYzs7QUFFZDtDQUNDLGFBQWE7Q0FDYixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixTQUFTO0FBQ1Y7O0FBRUE7O0NBRUMsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7O0NBRUMsZUFBZTtDQUNmLHNDQUFzQztBQUN2Qzs7QUFFQTs7Q0FFQyxxQ0FBcUM7QUFDdEM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFNBQVM7Q0FDVCxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCLGlCQUFpQjtBQUNsQjs7QUFFQSxpQ0FBaUM7O0FBRWpDO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsY0FBYztDQUNkLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsb0JBQW9CO0NBQ3BCLGFBQWE7Q0FDYixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1oseUNBQXlDO0NBQ3pDLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBRUE7R0FDRyxjQUFjO0NBQ2hCLG9CQUFvQjtDQUNwQixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLFNBQVM7Q0FDVCxpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkIseURBQXlEO0NBQ3pELDREQUE0RDtBQUM3RDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQ0FBc0M7Q0FDdEMsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYiw0QkFBNEI7Q0FDNUIsb0JBQW9CO0FBQ3JCOztBQUVBOztDQUVDLGVBQWU7Q0FDZixxQ0FBcUM7QUFDdEM7O0FBRUE7O0NBRUMscUNBQXFDO0NBQ3JDLHVCQUF1QjtBQUN4Qjs7QUFFQSw4QkFBOEI7O0FBRTlCO0NBQ0MsY0FBYztDQUNkLG9CQUFvQjtDQUNwQixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLFNBQVM7Q0FDVCxpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkIsd0RBQXdEO0FBQ3pEOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNDQUFzQztDQUN0QyxtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLDRCQUE0QjtDQUM1QixvQkFBb0I7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogQ09MT1JTICovXFxuXFxuOnJvb3Qge1xcblxcdC0tcHJpbWFyeTogIzQ1YzlhNTtcXG5cXHQtLXByaW1hcnktbGlnaHQ6ICM0NWM5YTY4NTtcXG5cXHQtLXByaW1hcnktZGFyazogIzNiYWM4ZTtcXG59XFxuXFxuLyogU0NST0xMIEJBUiAqL1xcblxcbi8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuXFx0d2lkdGg6IDEwcHg7XFxuICB9XFxuICBcXG4gIC8qIFRyYWNrICovXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZjFmMWYxOyBcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuICB9XFxuICAgXFxuICAvKiBIYW5kbGUgKi9cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcblxcdGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpOyBcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuICB9XFxuICBcXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1kYXJrKTsgXFxuICB9XFxuXFxuLyogQkFTSUMgRUxFTUVOVFMgKi9cXG5cXG5oMSB7XFxuXFx0Zm9udC1zaXplOiAzZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmgyIHtcXG5cXHRmb250LXNpemU6IDJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogQkFTSUMgQ09OVEFJTkVSUyAqL1xcblxcbiNtYWluLWNvbnRhaW5lciB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHR3aWR0aDogMTAwMHB4O1xcblxcdG1hcmdpbjogMHB4IGF1dG87XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcblxcbiNzaWRlLW1lbnUge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnIgNTBweDtcXG5cXHRtYXJnaW46IDI1cHg7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHRib3JkZXItcmFkaXVzOiAyNXB4O1xcblxcdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCBncmF5O1xcbn1cXG5cXG4jY29udGVudC1jb250YWluZXIge1xcblxcdGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcblxcdG1hcmdpbjogMjVweDtcXG5cXHRib3JkZXItcmFkaXVzOiAyNXB4O1xcblxcdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCBncmF5O1xcbn1cXG5cXG4vKiBTSURFIE1FTlUgKi9cXG5cXG4jbG9nby1jb250YWluZXIge1xcblxcdGhlaWdodDogMTAwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMTBweDtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMHZoO1xcbn1cXG5cXG4jbG9nby1pbWcge1xcblxcdGhlaWdodDogNzVweDtcXG59XFxuXFxuI2xvZ28tdGl0bGUge1xcblxcdGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuI3NlbGVjdGlvbi1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRnYXA6IDIwcHg7XFxufVxcblxcbiNteS1wcm9qZWN0cyxcXG4udG9kby1zZWxlY3Rpb24ge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgLjI1cztcXG59XFxuXFxuI215LXRvZG9zIHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jbXktcHJvamVjdHM6aG92ZXIsXFxuLnRvZG8tc2VsZWN0aW9uOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxufVxcblxcbiNteS1wcm9qZWN0czphY3RpdmUsXFxuLnRvZG8tc2VsZWN0aW9uOmFjdGl2ZSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG59XFxuXFxuI3RvZG8tY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxMHB4O1xcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbiNmb290ZXIge1xcblxcdHBsYWNlLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2Zvb3Rlci1saW5rIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Y29sb3I6IHZhcigtLXByaW1hcnkpO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBDT05URU5UIENPTlRBSU5FUiAtIFBST0pFQ1RTICovXFxuXFxuI2NvbnRlbnQtdGl0bGUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdGZvbnQtc2l6ZTogMmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jY29udGVudC1zZXR0aW5ncyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogZW5kO1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5hZGQtYnRuIHtcXG5cXHRoZWlnaHQ6IDc1cHg7XFxuXFx0LypmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMXB4IGdyYXkpOyovXFxuXFx0dHJhbnNpdGlvbjogYWxsIC4yNXM7XFxufVxcblxcbi5hZGQtYnRuOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0ZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XFxufVxcblxcbi5hZGQtYnRuOmFjdGl2ZSB7XFxuXFx0ZmlsdGVyOiBicmlnaHRuZXNzKDcwJSk7XFxufVxcblxcbiNjb250ZW50LWJveCB7XFxuICBcXHRvdmVyZmxvdzogYXV0bztcXG5cXHRncmlkLWNvbHVtbi1zdGFydDogMTtcXG5cXHRncmlkLWNvbHVtbi1lbmQ6IDM7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRnYXA6IDIwcHg7XFxuXFx0cGFkZGluZzogNXB4IDIwcHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDIwcHg7XFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxuXFx0bWFyZ2luLWJvdHRvbTogMjBweDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGdyYXk7XFxuXFx0dHJhbnNpdGlvbjogYWxsIC4yNXM7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lcjpob3ZlcixcXG4udG9kby1jb250YWluZXI6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXI6YWN0aXZlLFxcbi50b2RvLWNvbnRhaW5lcjphY3RpdmUge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XFxuXFx0ZmlsdGVyOiBicmlnaHRuZXNzKDc1JSk7XFxufVxcblxcbi8qIENPTlRFTlQgQ09OVEFJTkVSIC0gVE9ET1MgKi9cXG5cXG4jdG9kby1jb250ZW50LWJveCB7XFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxuXFx0Z3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuXFx0Z3JpZC1jb2x1bW4tZW5kOiAzO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z2FwOiAyMHB4O1xcblxcdHBhZGRpbmc6IDVweCAyMHB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAyMHB4O1xcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcblxcdG1hcmdpbi1ib3R0b206IDIwcHg7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDBweCwgMWZyKSk7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0Ym94LXNoYWRvdzogMHB4IDBweCA1cHggZ3JheTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgLjI1cztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0ICogYXMgRGlzcGxheSBmcm9tIFwiLi9tb2R1bGVzL2Rpc3BsYXlcIjtcbmltcG9ydCAqIGFzIFN0b3JhZ2UgZnJvbSBcIi4vbW9kdWxlcy9zdG9yYWdlXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL21vZHVsZXMvdG9kb1wiO1xuXG5jb25zdCBmaXJzdFByb2ogPSBQcm9qZWN0KFwiTXkgZmlyc3QgUHJvamVjdFwiKVxuZmlyc3RQcm9qLmFkZFRvZG8oVG9kbygnZmlyc3QgdG9kbycsIFwidGVtcGxhdGUgdG9kbyBkZXNjcmlwdGlvbiBibGEgYmxhIGJsYSAuLi5cIiwgJzIxLzEyLzIwMjInLCAnaGlnaCcpKVxuZmlyc3RQcm9qLmFkZFRvZG8oVG9kbygnZmlyc3QgdG9kbycsIFwidGVtcGxhdGUgdG9kbyBkZXNjcmlwdGlvbiBibGEgYmxhIGJsYSAuLi5cIiwgJzIxLzEyLzIwMjInLCAnaGlnaCcpKVxuZmlyc3RQcm9qLmFkZFRvZG8oVG9kbygnZmlyc3QgdG9kbycsIFwidGVtcGxhdGUgdG9kbyBkZXNjcmlwdGlvbiBibGEgYmxhIGJsYSAuLi5cIiwgJzIxLzEyLzIwMjInLCAnaGlnaCcpKVxuXG5TdG9yYWdlLmFkZFByb2plY3QoZmlyc3RQcm9qKTtcblN0b3JhZ2UuYWRkUHJvamVjdChQcm9qZWN0KCdNeSBzZWNvbmQgcHJvamVjdCcpKTtcblN0b3JhZ2UuYWRkUHJvamVjdChQcm9qZWN0KCdNeSB0aGlyZCBwcm9qZWN0JykpO1xuXG5EaXNwbGF5LmxvYWRQYWdlKCk7XG5EaXNwbGF5LmxvYWRQcm9qZWN0cyhTdG9yYWdlLmdldFByb2plY3RzKCkpIiwiaW1wb3J0ICogYXMgU3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgaW1nTG9nbyBmcm9tIFwiL2hvbWUvbWF0aGV1cy9yZXBvcy90b2RvLWxpc3Qvc3JjL3RpY2stbWFyay5wbmdcIlxuaW1wb3J0IGltZ0FkZCBmcm9tIFwiL2hvbWUvbWF0aGV1cy9yZXBvcy90b2RvLWxpc3Qvc3JjL2FkZC1pY29uLnBuZ1wiXG5cbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1haW5Db250YWluZXIuaWQgPSAnbWFpbi1jb250YWluZXInO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcblxuZnVuY3Rpb24gX2NsZWFyQ29udGVudENvbnRhaW5lcigpIHtcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgd2hpbGUoY29udGVudENvbnRhaW5lci5oYXNDaGlsZE5vZGVzKCkpe1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcblxuICAgIC8vQ3JlYXRlIGJhc2ljIGNvbnRhaW5lcnNcbiAgICBjb25zdCBzaWRlTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGVNZW51LmlkID0gJ3NpZGUtbWVudSc7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlTWVudSk7XG5cbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudENvbnRhaW5lci5pZCA9ICdjb250ZW50LWNvbnRhaW5lcic7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcblxuICAgIC8vQ3JlYXRlIHNpZGUgbWVudSBlbGVtZW50c1xuICAgIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvQ29udGFpbmVyLmlkID0gJ2xvZ28tY29udGFpbmVyJztcbiAgICBzaWRlTWVudS5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsb2dvSW1nLmlkID0gJ2xvZ28taW1nJztcbiAgICBsb2dvSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1nTG9nbyk7XG4gICAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvSW1nKTtcblxuICAgIGNvbnN0IGxvZ29UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbG9nb1RpdGxlLmlkID0gJ2xvZ28tdGl0bGUnO1xuICAgIGxvZ29UaXRsZS5pbm5lckhUTUwgPSAnVGlkZHlEbyc7XG4gICAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvVGl0bGUpO1xuXG4gICAgY29uc3Qgc2VsZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VsZWN0aW9uQ29udGFpbmVyLmlkID0gJ3NlbGVjdGlvbi1jb250YWluZXInO1xuICAgIHNpZGVNZW51LmFwcGVuZENoaWxkKHNlbGVjdGlvbkNvbnRhaW5lcik7XG5cbiAgICBcbiAgICBjb25zdCBteVByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBteVByb2plY3RzLmlkID0gJ215LXByb2plY3RzJztcbiAgICBteVByb2plY3RzLmlubmVySFRNTCA9ICdNeSBwcm9qZWN0cyc7XG4gICAgbXlQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtsb2FkUHJvamVjdHMoU3RvcmFnZS5nZXRQcm9qZWN0cygpKX0pXG4gICAgc2VsZWN0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKG15UHJvamVjdHMpO1xuXG4gICAgY29uc3QgbXlUb2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbXlUb2Rvcy5pZCA9ICdteS10b2Rvcyc7XG4gICAgbXlUb2Rvcy5pbm5lckhUTUwgPSAnTXkgdG9kb3MnO1xuICAgIHNlbGVjdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChteVRvZG9zKTtcblxuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvQ29udGFpbmVyLmlkID0gJ3RvZG8tY29udGFpbmVyJztcbiAgICBzZWxlY3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0b2RheVRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRvZGF5VG9kb3MuaWQgPSAndG9kYXktdG9kb3MnO1xuICAgIHRvZGF5VG9kb3MuY2xhc3NMaXN0LmFkZCgndG9kby1zZWxlY3Rpb24nKTtcbiAgICB0b2RheVRvZG9zLmlubmVySFRNTCA9ICdUb2RheSc7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RheVRvZG9zKTtcblxuICAgIGNvbnN0IHdlZWtUb2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB3ZWVrVG9kb3MuaWQgPSAnd2Vlay10b2Rvcyc7XG4gICAgd2Vla1RvZG9zLmNsYXNzTGlzdC5hZGQoJ3RvZG8tc2VsZWN0aW9uJyk7XG4gICAgd2Vla1RvZG9zLmlubmVySFRNTCA9ICdXZWVrJztcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlZWtUb2Rvcyk7XG5cbiAgICBjb25zdCBtb250aFRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1vbnRoVG9kb3MuaWQgPSAnbW9udGgtdG9kb3MnO1xuICAgIG1vbnRoVG9kb3MuY2xhc3NMaXN0LmFkZCgndG9kby1zZWxlY3Rpb24nKTtcbiAgICBtb250aFRvZG9zLmlubmVySFRNTCA9ICdNb250aCc7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChtb250aFRvZG9zKTtcblxuICAgIGNvbnN0IGFsbFRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFsbFRvZG9zLmlkID0gJ2FsbC10b2Rvcyc7XG4gICAgYWxsVG9kb3MuY2xhc3NMaXN0LmFkZCgndG9kby1zZWxlY3Rpb24nKTtcbiAgICBhbGxUb2Rvcy5pbm5lckhUTUwgPSAnQWxsJztcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGFsbFRvZG9zKTtcblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmb290ZXIuaWQgPSAnZm9vdGVyJztcbiAgICBmb290ZXIuaW5uZXJIVE1MID0gJ01hZGUgYnkgJztcbiAgICBzaWRlTWVudS5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gICAgY29uc3QgZm9vdGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBmb290ZXJMaW5rLmlkID0gJ2Zvb3Rlci1saW5rJztcbiAgICBmb290ZXJMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vbWF0aGV1c3BsOTIvdG9kby1saXN0JylcbiAgICBmb290ZXJMaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpXG4gICAgZm9vdGVyTGluay5pbm5lckhUTUwgPSAnbWF0aGV1c3BsOTInO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJMaW5rKTtcbn1cblxuZnVuY3Rpb24gbG9hZFByb2plY3RzKHByb2plY3RzQXJyYXkpIHtcbiAgICBfY2xlYXJDb250ZW50Q29udGFpbmVyKCk7XG5cbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50VGl0bGUuaWQgPSAnY29udGVudC10aXRsZSc7XG4gICAgY29udGVudFRpdGxlLmlubmVySFRNTCA9ICdQcm9qZWN0cydcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRUaXRsZSk7XG5cbiAgICBjb25zdCBjb250ZW50U2V0dGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50U2V0dGluZ3MuaWQgPSAnY29udGVudC1zZXR0aW5ncyc7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50U2V0dGluZ3MpO1xuXG4gICAgLy9Vc2Ugd2hlbiBwcm9qZWN0cyBoYXZlIHByaW9yaXRpZXMgb3IgZHVlIGRhdGVzIHRvIHNvcnQgYnlcbiAgICAvKmNvbnN0IHNvcnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNvcnRUZXh0LmlkID0gJ3NvcnQtdGV4dCc7XG4gICAgc29ydFRleHQuaW5uZXJIVE1MID0gJ1NvcnQgYnknXG4gICAgY29udGVudFNldHRpbmdzLmFwcGVuZENoaWxkKHNvcnRUZXh0KTtcblxuICAgIGNvbnN0IHNvcnREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc29ydERhdGUuaWQgPSAnc29ydC1kYXRlLWJ0bic7XG4gICAgc29ydERhdGUuY2xhc3NMaXN0LmFkZCgnc29ydC1idG4nKTtcbiAgICBzb3J0RGF0ZS5pbm5lckhUTUwgPSBcIkRhdGVcIjtcbiAgICBjb250ZW50U2V0dGluZ3MuYXBwZW5kQ2hpbGQoc29ydERhdGUpO1xuXG4gICAgY29uc3Qgc29ydFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc29ydFByaW9yaXR5LmlkID0gJ3NvcnQtcHJpb3JpdHktYnRuJztcbiAgICBzb3J0UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnc29ydC1idG4nKTtcbiAgICBzb3J0UHJpb3JpdHkuaW5uZXJIVE1MID0gXCJQcmlvcml0eVwiO1xuICAgIGNvbnRlbnRTZXR0aW5ncy5hcHBlbmRDaGlsZChzb3J0UHJpb3JpdHkpOyovXG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYWRkUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZ0FkZClcbiAgICBhZGRQcm9qZWN0LmlkID0gJ2FkZC1wcm9qZWN0LWJ0bic7XG4gICAgYWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhZGQtYnRuJyk7XG4gICAgYWRkUHJvamVjdC5pbm5lckhUTUwgPSBcIkFkZFwiO1xuICAgIGNvbnRlbnRTZXR0aW5ncy5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KTtcblxuICAgIGNvbnN0IGNvbnRlbnRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50Qm94LmlkID0gJ2NvbnRlbnQtYm94JztcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRCb3gpO1xuXG4gICAgY3JlYXRlUHJvamVjdHNDb250ZW50KGNvbnRlbnRCb3gsIHByb2plY3RzQXJyYXkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0c0NvbnRlbnQoY29udGFpbmVyLCBwcm9qZWN0c0FycmF5LCB0eXBlT2ZTb3J0LCBpc0RlY3JlYXNpbmcgPSBmYWxzZSkge1xuXG4gICAgcHJvamVjdHNBcnJheS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsb2FkUHJvamVjdFRvZG9zKHByb2plY3QpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgcHJvamVjdE5hbWUuaW5uZXJIVE1MID0gcHJvamVjdC5nZXROYW1lKCk7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0VG9kb3MocHJvamVjdCkge1xuICAgIF9jbGVhckNvbnRlbnRDb250YWluZXIoKTtcblxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudC1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRUaXRsZS5pZCA9ICdjb250ZW50LXRpdGxlJztcbiAgICBjb250ZW50VGl0bGUuaW5uZXJIVE1MID0gcHJvamVjdC5nZXROYW1lKCk7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50VGl0bGUpO1xuXG4gICAgY29uc3QgY29udGVudFNldHRpbmdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudFNldHRpbmdzLmlkID0gJ2NvbnRlbnQtc2V0dGluZ3MnO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudFNldHRpbmdzKTtcblxuICAgIGNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBhZGRUb2RvLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1nQWRkKVxuICAgIGFkZFRvZG8uaWQgPSAnYWRkLXRvZG8tYnRuJztcbiAgICBhZGRUb2RvLmNsYXNzTGlzdC5hZGQoJ2FkZC1idG4nKTtcbiAgICBhZGRUb2RvLmlubmVySFRNTCA9IFwiQWRkXCI7XG4gICAgY29udGVudFNldHRpbmdzLmFwcGVuZENoaWxkKGFkZFRvZG8pO1xuXG4gICAgY29uc3QgY29udGVudEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRCb3guaWQgPSAndG9kby1jb250ZW50LWJveCc7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50Qm94KTtcblxuICAgIGNyZWF0ZVRvZG9zQ29udGVudChjb250ZW50Qm94LCBwcm9qZWN0LmdldFRvZG9BcnJheSgpKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2Rvc0NvbnRlbnQoY29udGFpbmVyLCB0b2Rvc0FycmF5LCB0eXBlT2ZTb3J0LCBpc0RlY3JlYXNpbmcgPSBmYWxzZSkge1xuXG4gICAgdG9kb3NBcnJheS5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIHRvZG9OYW1lLmNsYXNzTGlzdC5hZGQoJ3RvZG8tbmFtZScpO1xuICAgICAgICB0b2RvTmFtZS5pbm5lckhUTUwgPSB0b2RvLmdldE5hbWUoKTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvTmFtZSlcbiAgICB9KTtcbn1cblxuZXhwb3J0IHtsb2FkUGFnZSwgbG9hZFByb2plY3RzfTsiLCJjb25zdCBQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBuYW1lO1xuICAgIGNvbnN0IHRvZG9BcnJheSA9IFtdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TmFtZTogKCkgPT4ge3JldHVybiBwcm9qZWN0TmFtZX0sXG5cbiAgICAgICAgYWRkVG9kbzogKHRvZG8pID0+IHt0b2RvQXJyYXkucHVzaCh0b2RvKX0sXG5cbiAgICAgICAgZ2V0VG9kb0FycmF5OiAoKSA9PiB7cmV0dXJuIHRvZG9BcnJheS5zbGljZSgpfSxcblxuICAgICAgICByZW1vdmVUb2RvOiAodG9kb0luZGV4KSA9PiB7dG9kb0FycmF5LnNwbGljZSh0b2RvSW5kZXgsIDEpfSxcblxuICAgICAgICBlZGl0VG9kbzogKHRvZG9JbmRleCwgdG9kbykgPT4ge3RvZG9BcnJheVt0b2RvSW5kZXhdID0gdG9kb30sXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyIsImNvbnN0IHByb2plY3RzQXJyYXkgPSBbXTtcblxuY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7cmV0dXJuIHByb2plY3RzQXJyYXkuc2xpY2UoKX1cblxuY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7cHJvamVjdHNBcnJheS5wdXNoKHByb2plY3QpfVxuXG5jb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3RJbmRleCkgPT4ge3Byb2plY3RzQXJyYXkuc3BsaWNlKHByb2plY3RJbmRleCwgMSl9XG5cbmNvbnN0IGVkaXRQcm9qZWN0ID0gKHByb2plY3RJbmRleCwgcHJvamVjdCkgPT4ge3Byb2plY3RzQXJyYXlbcHJvamVjdEluZGV4XSA9IHByb2plY3R9XG5cbmV4cG9ydCB7Z2V0UHJvamVjdHMsIGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGVkaXRQcm9qZWN0fSIsImNvbnN0IFRvZG8gPSAobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgY29uc29sZS5sb2cobmFtZSk7XG4gICAgbGV0IHRvZG9OYW1lID0gbmFtZTtcbiAgICBsZXQgdG9kb0Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgbGV0IHRvZG9EdWVEYXRlID0gZHVlRGF0ZTtcbiAgICBsZXQgdG9kb1ByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXROYW1lOiAoKSA9PiB7cmV0dXJuIHRvZG9OYW1lfSxcbiAgICAgICAgZ2V0RGVzY3JpcHRpb246ICgpID0+IHtyZXR1cm4gdG9kb0Rlc2NyaXB0aW9ufSxcbiAgICAgICAgZ2V0RHVlRGF0ZTogKCkgPT4ge3JldHVybiB0b2RvRHVlRGF0ZX0sXG4gICAgICAgIGdldFByaW9yaXR5OiAoKSA9PiB7cmV0dXJuIHRvZG9Qcmlvcml0eX0sXG5cbiAgICAgICAgZWRpdE5hbWU6IChuZXdOYW1lKSA9PiB7dG9kb05hbWUgPSBuZXdOYW1lfSxcbiAgICAgICAgZWRpdERlc2NyaXB0aW9uOiAobmV3RGVzY3JpcHRpb24pID0+IHt0b2RvRGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbn0sXG4gICAgICAgIGVkaXREdWVEYXRlOiAobmV3RHVlRGF0ZSkgPT4ge3RvZG9EdWVEYXRlID0gbmV3RHVlRGF0ZX0sXG4gICAgICAgIGVkaXRQcmlvcml0eTogKG5ld1ByaW9yaXR5KSA9PiB7dG9kb1ByaW9yaXR5ID0gbmV3UHJpb3JpdHl9LFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kbzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=