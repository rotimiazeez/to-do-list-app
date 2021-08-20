/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Metal+Mania:wght@300;400;600;700;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Metal Mania\", sans-serif;\r\n}\r\n\r\n.todo-list {\r\n  box-sizing: border-box;\r\n  border-radius: 3px;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r\n  margin: 80px auto;\r\n  top: 0;\r\n  max-width: 500px;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.todo-list .todo-list-header {\r\n  width: 100%;\r\n  height: 50px;\r\n  background: #fff;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.todo-list .todo-list-header h1 {\r\n  color: #545862;\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  padding: 15px;\r\n  line-height: 20px;\r\n  margin: 0;\r\n  width: 100%;\r\n}\r\n\r\n.todo-list .add-new-item {\r\n  width: 100%;\r\n  padding: 0;\r\n  background: white;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.todo-list .add-new-item .add-new-input {\r\n  width: 100%;\r\n  padding: 0 40px 0 1rem;\r\n  line-height: 50px;\r\n  height: 50px;\r\n  border: none;\r\n  font-style: italic;\r\n  font-weight: 300;\r\n  font-size: 15px;\r\n}\r\n\r\n.todo-list .add-new-item .add-new-input::placeholder {\r\n  font-family: \"Open Sans\", sans-serif !important;\r\n  font-weight: 300;\r\n}\r\n\r\n.todo-list .add-new-item .add-new-input:focus-visible {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.todo-list .add-new-item .add-new-btn {\r\n  width: 40px;\r\n  height: 50px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 12px;\r\n  color: #c5c5c5;\r\n  transform: rotate(90deg);\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo-list .add-new-item .add-new-btn:hover {\r\n  color: #545862;\r\n  transition: 0.3s;\r\n}\r\n\r\n.todo-list .todo-list-wrap {\r\n  list-style: none;\r\n  width: 100%;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item {\r\n  width: 100%;\r\n  padding: 0;\r\n  background: white;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item .list-item-check-name {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0 40px 0 1rem;\r\n  width: 100%;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item .list-item-check-name .description-input {\r\n  width: 100%;\r\n  line-height: 50px;\r\n  height: 50px;\r\n  border: none;\r\n  font-weight: 300;\r\n  font-size: 15px;\r\n  font-family: \"Open Sans\", sans-serif !important;\r\n  background-color: transparent;\r\n}\r\n\r\n.todo-list .todo-list-wrap .completed-item .list-item-check-name .description-input {\r\n  text-decoration: line-through;\r\n  color: #c1c1c3;\r\n}\r\n\r\n.todo-list .todo-list-wrap .uncompleted-item .list-item-check-name .description-input {\r\n  text-decoration: none;\r\n  color: #000;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item .list-item-check-name .description-input:focus-visible {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item .list-item-check-name .check-item {\r\n  width: 16px;\r\n  height: 16px;\r\n  border-radius: 2px;\r\n  border: 2px solid #c1c1c3;\r\n  background-color: transparent;\r\n  outline: none;\r\n  margin-right: 16px;\r\n  cursor: pointer;\r\n  margin-top: 1px;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item .move-item {\r\n  width: 40px;\r\n  height: 50px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 12px;\r\n  color: #c5c5c5;\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  pointer-events: none;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item .remove-item {\r\n  width: 40px;\r\n  height: 50px;\r\n  display: none;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 12px;\r\n  color: #c5c5c5;\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item .move-item:hover {\r\n  color: #545862;\r\n  transition: 0.3s;\r\n}\r\n\r\n.todo-list .clear-all {\r\n  background-color: #f6f6f6;\r\n  width: 100%;\r\n  height: 50px;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  color: #545862;\r\n  font-weight: 300;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo-list .clear-all:hover {\r\n  color: #000;\r\n  text-decoration: underline;\r\n  transition: 0.3s;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,yCAAyC;EACzC,iBAAiB;EACjB,MAAM;EACN,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,4CAA4C;AAC9C;;AAEA;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,iBAAiB;EACjB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,WAAW;EACX,UAAU;EACV,iBAAiB;EACjB,4CAA4C;EAC5C,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,+CAA+C;EAC/C,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,wBAAwB;EACxB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,UAAU;EACV,iBAAiB;EACjB,4CAA4C;EAC5C,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,+CAA+C;EAC/C,6BAA6B;AAC/B;;AAEA;EACE,6BAA6B;EAC7B,cAAc;AAChB;;AAEA;EACE,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,6BAA6B;EAC7B,aAAa;EACb,kBAAkB;EAClB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,0BAA0B;EAC1B,gBAAgB;AAClB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Metal+Mania:wght@300;400;600;700;800&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Metal Mania\", sans-serif;\r\n}\r\n\r\n.todo-list {\r\n  box-sizing: border-box;\r\n  border-radius: 3px;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r\n  margin: 80px auto;\r\n  top: 0;\r\n  max-width: 500px;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.todo-list .todo-list-header {\r\n  width: 100%;\r\n  height: 50px;\r\n  background: #fff;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.todo-list .todo-list-header h1 {\r\n  color: #545862;\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  padding: 15px;\r\n  line-height: 20px;\r\n  margin: 0;\r\n  width: 100%;\r\n}\r\n\r\n.todo-list .add-new-item {\r\n  width: 100%;\r\n  padding: 0;\r\n  background: white;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.todo-list .add-new-item .add-new-input {\r\n  width: 100%;\r\n  padding: 0 40px 0 1rem;\r\n  line-height: 50px;\r\n  height: 50px;\r\n  border: none;\r\n  font-style: italic;\r\n  font-weight: 300;\r\n  font-size: 15px;\r\n}\r\n\r\n.todo-list .add-new-item .add-new-input::placeholder {\r\n  font-family: \"Open Sans\", sans-serif !important;\r\n  font-weight: 300;\r\n}\r\n\r\n.todo-list .add-new-item .add-new-input:focus-visible {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.todo-list .add-new-item .add-new-btn {\r\n  width: 40px;\r\n  height: 50px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 12px;\r\n  color: #c5c5c5;\r\n  transform: rotate(90deg);\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo-list .add-new-item .add-new-btn:hover {\r\n  color: #545862;\r\n  transition: 0.3s;\r\n}\r\n\r\n.todo-list .todo-list-wrap {\r\n  list-style: none;\r\n  width: 100%;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item {\r\n  width: 100%;\r\n  padding: 0;\r\n  background: white;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item .list-item-check-name {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0 40px 0 1rem;\r\n  width: 100%;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item .list-item-check-name .description-input {\r\n  width: 100%;\r\n  line-height: 50px;\r\n  height: 50px;\r\n  border: none;\r\n  font-weight: 300;\r\n  font-size: 15px;\r\n  font-family: \"Open Sans\", sans-serif !important;\r\n  background-color: transparent;\r\n}\r\n\r\n.todo-list .todo-list-wrap .completed-item .list-item-check-name .description-input {\r\n  text-decoration: line-through;\r\n  color: #c1c1c3;\r\n}\r\n\r\n.todo-list .todo-list-wrap .uncompleted-item .list-item-check-name .description-input {\r\n  text-decoration: none;\r\n  color: #000;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item .list-item-check-name .description-input:focus-visible {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item .list-item-check-name .check-item {\r\n  width: 16px;\r\n  height: 16px;\r\n  border-radius: 2px;\r\n  border: 2px solid #c1c1c3;\r\n  background-color: transparent;\r\n  outline: none;\r\n  margin-right: 16px;\r\n  cursor: pointer;\r\n  margin-top: 1px;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item .move-item {\r\n  width: 40px;\r\n  height: 50px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 12px;\r\n  color: #c5c5c5;\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  pointer-events: none;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item .remove-item {\r\n  width: 40px;\r\n  height: 50px;\r\n  display: none;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 12px;\r\n  color: #c5c5c5;\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item .move-item:hover {\r\n  color: #545862;\r\n  transition: 0.3s;\r\n}\r\n\r\n.todo-list .clear-all {\r\n  background-color: #f6f6f6;\r\n  width: 100%;\r\n  height: 50px;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  color: #545862;\r\n  font-weight: 300;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo-list .clear-all:hover {\r\n  color: #000;\r\n  text-decoration: underline;\r\n  transition: 0.3s;\r\n}\r\n"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
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
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addRemove.js":
/*!**************************!*\
  !*** ./src/addRemove.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateInput": () => (/* binding */ updateInput),
/* harmony export */   "removeItem": () => (/* binding */ removeItem),
/* harmony export */   "addNewItem": () => (/* binding */ addNewItem),
/* harmony export */   "clearAll": () => (/* binding */ clearAll)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dragOverAndDrop.js */ "./src/dragOverAndDrop.js");
/* harmony import */ var _checkItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkItem.js */ "./src/checkItem.js");
/* harmony import */ var _inputsFocus_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputsFocus.js */ "./src/inputsFocus.js");
/* eslint-disable import/no-cycle */





const listWrap = document.querySelector('.todo-list-wrap');
const addNewInput = document.querySelector('.add-new-input');
// UPDATE ITEM
const updateInput = (item) => {
  const newArr = JSON.parse(localStorage.getItem('myToDos'));
  const updateItem = newArr.filter((item2) => item2.index === Number(item.dataset.key))[0];
  const indexOfNewItem = newArr.indexOf(updateItem);
  newArr[indexOfNewItem].description = item.value;
  localStorage.setItem('myToDos', JSON.stringify(newArr));
};
// REMOVE ITEM
const removeItem = (item, arr, container) => {
  const newArr = JSON.parse(localStorage.getItem('myToDos'));
  const removedItem = newArr.filter((item2) => item2.index === Number(item.dataset.key))[0];
  const removedIndex = newArr.indexOf(removedItem);
  newArr.splice(removedIndex, 1);
  container.innerHTML = '';
  localStorage.setItem('myToDos', JSON.stringify(newArr));
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.setToDoArr)(newArr);
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.implementToDoItems)(newArr);
  const toDoDescriptionsInputs = [...document.querySelectorAll('.list-item .description-input')];
  toDoDescriptionsInputs.forEach((item) => item.addEventListener('focusin', (event) => (0,_inputsFocus_js__WEBPACK_IMPORTED_MODULE_3__.default)(event, item)));
  toDoDescriptionsInputs.forEach((item) => item.addEventListener('focusout', (event) => (0,_inputsFocus_js__WEBPACK_IMPORTED_MODULE_3__.default)(event, item)));
  toDoDescriptionsInputs.forEach((item) => item.addEventListener('input', () => updateInput(item)));
  arr = [...document.querySelectorAll('.list-item')];
  arr.forEach((item) => {
    item.addEventListener('mouseover', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onMouseOver)(event, item));
    item.addEventListener('mouseout', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onMouseOut)(event, item));
    item.addEventListener('dragstart', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onDragStart)(event, item));
    item.addEventListener('drop', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onDragEnd)(event, item, arr, listWrap));
  });
  const removeBtns = document.querySelectorAll('.remove-item');
  removeBtns.forEach((item) => item.addEventListener('click', () => removeItem(item, arr, container)));
  const toDoChecksInputs = [...document.querySelectorAll('.list-item .check-item')];
  toDoChecksInputs.forEach((item) => item.addEventListener('change', () => (0,_checkItem_js__WEBPACK_IMPORTED_MODULE_2__.default)(item)));
};
// ADD NEW ITEM
const addNewItem = (event, arr, items, container) => {
  event.preventDefault();
  const description = addNewInput.value;
  const index = arr.length + 1;
  const newItem = document.createElement('li');
  newItem.classList.add('list-item');
  newItem.dataset.key = index;
  newItem.draggable = true;
  newItem.innerHTML = `<div class="list-item-check-name">
                          <input type="checkbox" class="check-item" data-key="${index}">
                          <input class="description-input" type="text" value="${description}">
                        </div>
                        <button type="button" data-key="${index}" class="move-item"><i class="fas fa-ellipsis-v"></i></button>
                        <button type="button" data-key="${index}" class="remove-item"><i class="far fa-trash-alt"></i></button>`;
  container.insertBefore(newItem, container.children[0]);
  const newArr = [];
  items = [...document.querySelectorAll('.list-item')];
  items.forEach((item2, i) => {
    const description = item2.querySelector('.description-input').value;
    let completed = true;
    if (item2.classList.contains('completed-item')) {
      completed = true;
    } else {
      completed = false;
    }
    const index = i + 1;
    newArr.push({ description, completed, index });
  });
  container.innerHTML = '';
  localStorage.setItem('myToDos', JSON.stringify(newArr));
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.setToDoArr)(newArr);
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.implementToDoItems)(newArr);
  const toDoDescriptionsInputs = [...document.querySelectorAll('.list-item .description-input')];
  toDoDescriptionsInputs.forEach((item) => item.addEventListener('focusin', (event) => (0,_inputsFocus_js__WEBPACK_IMPORTED_MODULE_3__.default)(event, item)));
  toDoDescriptionsInputs.forEach((item) => item.addEventListener('focusout', (event) => (0,_inputsFocus_js__WEBPACK_IMPORTED_MODULE_3__.default)(event, item)));
  toDoDescriptionsInputs.forEach((item) => item.addEventListener('input', () => updateInput(item)));
  arr = [...document.querySelectorAll('.list-item')];
  arr.forEach((item) => {
    item.addEventListener('mouseover', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onMouseOver)(event, item));
    item.addEventListener('mouseout', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onMouseOut)(event, item));
    item.addEventListener('dragstart', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onDragStart)(event, item));
    item.addEventListener('drop', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onDragEnd)(event, item, arr, listWrap));
  });
  const removeBtns = document.querySelectorAll('.remove-item');
  removeBtns.forEach((item) => item.addEventListener('click', () => removeItem(item, arr, container)));
  const toDoChecksInputs = [...document.querySelectorAll('.list-item .check-item')];
  toDoChecksInputs.forEach((item) => item.addEventListener('change', () => (0,_checkItem_js__WEBPACK_IMPORTED_MODULE_2__.default)(item)));
  addNewInput.value = '';
};
// CLEAR ALL
const clearAll = (container) => {
  let newArr = JSON.parse(localStorage.getItem('myToDos'));
  newArr = newArr.filter((item) => item.completed === false);
  const newSorteredArr = [];
  newArr.forEach((item, i) => {
    const { description, completed } = item;
    const index = i + 1;
    newSorteredArr.push({ description, completed, index });
  });
  container.innerHTML = '';
  localStorage.setItem('myToDos', JSON.stringify(newSorteredArr));
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.setToDoArr)(newSorteredArr);
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.implementToDoItems)(newSorteredArr);
  const toDoDescriptionsInputs = [...document.querySelectorAll('.list-item .description-input')];
  toDoDescriptionsInputs.forEach((item) => item.addEventListener('focusin', (event) => (0,_inputsFocus_js__WEBPACK_IMPORTED_MODULE_3__.default)(event, item)));
  toDoDescriptionsInputs.forEach((item) => item.addEventListener('focusout', (event) => (0,_inputsFocus_js__WEBPACK_IMPORTED_MODULE_3__.default)(event, item)));
  toDoDescriptionsInputs.forEach((item) => item.addEventListener('input', () => updateInput(item)));
  const arr = [...document.querySelectorAll('.list-item')];
  arr.forEach((item) => {
    item.addEventListener('mouseover', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onMouseOver)(event, item));
    item.addEventListener('mouseout', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onMouseOut)(event, item));
    item.addEventListener('dragstart', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onDragStart)(event, item));
    item.addEventListener('drop', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onDragEnd)(event, item, arr, listWrap));
  });

  const removeBtns = document.querySelectorAll('.remove-item');
  removeBtns.forEach((item) => item.addEventListener('click', () => removeItem(item, arr, container)));
  const toDoChecksInputs = [...document.querySelectorAll('.list-item .check-item')];
  toDoChecksInputs.forEach((item) => item.addEventListener('change', () => (0,_checkItem_js__WEBPACK_IMPORTED_MODULE_2__.default)(item)));
};

/***/ }),

/***/ "./src/checkItem.js":
/*!**************************!*\
  !*** ./src/checkItem.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkItem = (btn) => {
  const newArr = JSON.parse(localStorage.getItem('myToDos'));
  const arrElement = newArr.filter((item) => item.index === Number(btn.dataset.key))[0];
  const indexOfArrElement = newArr.indexOf(arrElement);
  if (btn.checked) {
    btn.parentElement.parentElement.classList.add('completed-item');
    btn.parentElement.parentElement.style.backgroundColor = '#fff';
    newArr[indexOfArrElement].completed = true;
  } else {
    btn.parentElement.parentElement.classList.remove('completed-item');
    btn.parentElement.parentElement.style.backgroundColor = '#fff';
    newArr[indexOfArrElement].completed = false;
  }
  localStorage.setItem('myToDos', JSON.stringify(newArr));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkItem);

/***/ }),

/***/ "./src/dragOverAndDrop.js":
/*!********************************!*\
  !*** ./src/dragOverAndDrop.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onMouseOver": () => (/* binding */ onMouseOver),
/* harmony export */   "onMouseOut": () => (/* binding */ onMouseOut),
/* harmony export */   "dragAfterElement": () => (/* binding */ dragAfterElement),
/* harmony export */   "onDragStart": () => (/* binding */ onDragStart),
/* harmony export */   "onDragEnd": () => (/* binding */ onDragEnd),
/* harmony export */   "onDragOver": () => (/* binding */ onDragOver)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _addRemove_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRemove.js */ "./src/addRemove.js");
/* harmony import */ var _checkItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkItem.js */ "./src/checkItem.js");
/* harmony import */ var _inputsFocus_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputsFocus.js */ "./src/inputsFocus.js");
/* eslint-disable import/no-cycle */





const listWrap = document.querySelector('.todo-list-wrap');
const onMouseOver = (event, item) => {
  [...item.childNodes][3].innerHTML = '<i class="fas fa-arrows-alt"></i>';
  [...item.childNodes][3].style.color = '#545862';
};
const onMouseOut = (event, item) => {
  [...item.childNodes][3].innerHTML = '<i class="fas fa-ellipsis-v"></i>';
  [...item.childNodes][3].style.color = '#c5c5c5';
};
const dragAfterElement = (container, y) => {
  const draggableElements = [...container.querySelectorAll('.list-item:not(.active)')];
  return draggableElements.reduce((closes, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closes.offset) {
      return { offset, element: child };
    }
    return closes;
  }, { offset: Number.NEGATIVE_INFINITY }).element;
};
const onDragStart = (event, item) => {
  item.style.backgroundColor = '#fffeca';
  item.classList.add('active');
};
const onDragEnd = (event, item, arr, container) => {
  item.style.backgroundColor = '#fff';
  item.classList.remove('active');
  const newArr = [];
  arr = [...document.querySelectorAll('.list-item')];
  arr.forEach((item2, i) => {
    const description = item2.querySelector('.description-input').value;
    let completed = true;
    if (item2.classList.contains('completed-item')) {
      completed = true;
    } else {
      completed = false;
    }
    const index = i + 1;
    newArr.push({ description, completed, index });
  });
  container.innerHTML = '';
  localStorage.setItem('myToDos', JSON.stringify(newArr));
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.setToDoArr)(newArr);
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.implementToDoItems)(newArr);
  const toDoDescriptionsInputs = [...document.querySelectorAll('.list-item .description-input')];
  toDoDescriptionsInputs.forEach((item) => item.addEventListener('focusin', (event) => (0,_inputsFocus_js__WEBPACK_IMPORTED_MODULE_3__.default)(event, item)));
  toDoDescriptionsInputs.forEach((item) => item.addEventListener('focusout', (event) => (0,_inputsFocus_js__WEBPACK_IMPORTED_MODULE_3__.default)(event, item)));
  toDoDescriptionsInputs.forEach((item) => item.addEventListener('input', () => (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_1__.updateInput)(item)));
  arr = [...document.querySelectorAll('.list-item')];
  arr.forEach((item) => {
    item.addEventListener('mouseover', (event) => onMouseOver(event, item));
    item.addEventListener('mouseout', (event) => onMouseOut(event, item));
    item.addEventListener('dragstart', (event) => onDragStart(event, item));
    item.addEventListener('drop', (event) => onDragEnd(event, item, arr, listWrap));
  });
  const removeBtns = document.querySelectorAll('.remove-item');
  removeBtns.forEach((item) => item.addEventListener('click', () => (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_1__.removeItem)(item, arr, container)));
  const toDoChecksInputs = [...document.querySelectorAll('.list-item .check-item')];
  toDoChecksInputs.forEach((item) => item.addEventListener('change', () => (0,_checkItem_js__WEBPACK_IMPORTED_MODULE_2__.default)(item)));
};
// eslint-disable-next-line no-unused-vars
const onDragOver = (event, container) => {
  event.preventDefault();
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setToDoArr": () => (/* binding */ setToDoArr),
/* harmony export */   "implementToDoItems": () => (/* binding */ implementToDoItems)
/* harmony export */ });
/* harmony import */ var _checkItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkItem.js */ "./src/checkItem.js");
/* harmony import */ var _inputsFocus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputsFocus.js */ "./src/inputsFocus.js");
/* harmony import */ var _dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dragOverAndDrop.js */ "./src/dragOverAndDrop.js");
/* harmony import */ var _addRemove_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addRemove.js */ "./src/addRemove.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* eslint-disable import/no-cycle */






// SET TODO ARR
let toDoArr = [];
const setToDoArr = () => {
  if (JSON.parse(localStorage.getItem('myToDos'))) {
    toDoArr = JSON.parse(localStorage.getItem('myToDos'));
  } else {
    toDoArr = [];
  }
};
setToDoArr();
const listWrap = document.querySelector('.todo-list-wrap');
// IMPLEMENT TO DO ITEMS TO SCREEN
const implementToDoItems = (arr) => {
  arr.forEach((item) => {
    let isCompleted = '';
    let completedClass = '';
    if (item.completed) {
      isCompleted = 'checked';
      completedClass = 'completed-item';
    }
    listWrap.innerHTML += `<li class="list-item ${completedClass}" data-key="${item.index}" draggable="true">
      <div class="list-item-check-name">
        <input type="checkbox" class="check-item" data-key="${item.index}" ${isCompleted}>
  <input class="description-input" data-key="${item.index}" type="text" value="${item.description}">
      </div>
      <button type="button" data-key="${item.index}" class="move-item"><i class="fas fa-ellipsis-v"></i></button>
      <button type="button" data-key="${item.index}" class="remove-item"><i class="far fa-trash-alt"></i></button>
    </li>`;
  });
};
implementToDoItems(toDoArr);
// CHECK ITEMS
const toDoChecksInputs = [...document.querySelectorAll('.list-item .check-item')];
toDoChecksInputs.forEach((item) => item.addEventListener('change', () => (0,_checkItem_js__WEBPACK_IMPORTED_MODULE_0__.default)(item)));
// FOCUS ITEMS
const toDoDescriptionsInputs = [...document.querySelectorAll('.list-item .description-input')];
toDoDescriptionsInputs.forEach((item) => item.addEventListener('focusin', (event) => (0,_inputsFocus_js__WEBPACK_IMPORTED_MODULE_1__.default)(event, item)));
toDoDescriptionsInputs.forEach((item) => item.addEventListener('focusout', (event) => (0,_inputsFocus_js__WEBPACK_IMPORTED_MODULE_1__.default)(event, item)));
// DRAG AND DROP FUNCTIONS
const toDoItems = [...document.querySelectorAll('.list-item')];
toDoItems.forEach((item) => {
  item.addEventListener('mouseover', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_2__.onMouseOver)(event, item));
  item.addEventListener('mouseout', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_2__.onMouseOut)(event, item));
  item.addEventListener('dragstart', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_2__.onDragStart)(event, item));
  item.addEventListener('drop', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_2__.onDragEnd)(event, item, toDoItems, listWrap));
});
listWrap.addEventListener('dragover', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_2__.onDragOver)(event, listWrap));
// ADD ITEM
const addNewButton = document.querySelector('.add-new-btn');
addNewButton.addEventListener('click', (event) => (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_3__.addNewItem)(event, toDoArr, toDoItems, listWrap));
// CLEAR ALL
const clearAllBtn = document.querySelector('.clear-all');
clearAllBtn.addEventListener('click', () => (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_3__.clearAll)(listWrap));
// UPDATE ITEMS
toDoDescriptionsInputs.forEach((item) => item.addEventListener('input', () => (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_3__.updateInput)(item)));
// REMOVE ITEM
const removeBtns = document.querySelectorAll('.remove-item');
removeBtns.forEach((item) => item.addEventListener('click', () => (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_3__.removeItem)(item, toDoArr, listWrap)));

/***/ }),

/***/ "./src/inputsFocus.js":
/*!****************************!*\
  !*** ./src/inputsFocus.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const descriptionOnFocus = (event, item) => {
  if (event.type === 'focusin') {
    item.parentElement.parentElement.classList.add('uncompleted-item');
    item.parentElement.parentElement.style.backgroundColor = '#fffeca';
    item.parentElement.nextElementSibling.style.display = 'none';
    [...item.parentElement.parentElement.childNodes][5].style.display = 'flex';
  } else if (event.type === 'focusout') {
    item.parentElement.parentElement.classList.remove('uncompleted-item');
    item.parentElement.parentElement.style.backgroundColor = '#fff';
    setTimeout(() => {
      [...item.parentElement.parentElement.childNodes][5].style.display = 'none';
      item.parentElement.nextElementSibling.style.display = 'flex';
    }, 1000);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (descriptionOnFocus);

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSw0Q0FBNEMsdURBQVE7QUFDcEQ7QUFDQSw4RUFBOEUsMERBQVc7QUFDekY7QUFDQTtBQUNBLGtFQUFrRSx5REFBVTs7Ozs7Ozs7Ozs7Ozs7QUNwRTVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxpRUFBZSxrQkFBa0I7Ozs7OztVQ2ZqQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QtYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwLy4vc3JjL2FkZFJlbW92ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL3NyYy9jaGVja0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9zcmMvZHJhZ092ZXJBbmREcm9wLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwLy4vc3JjL2lucHV0c0ZvY3VzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWV0YWwrTWFuaWE6d2dodEAzMDA7NDAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJNZXRhbCBNYW5pYVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3Qge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcbiAgbWFyZ2luOiA4MHB4IGF1dG87XFxyXFxuICB0b3A6IDA7XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLnRvZG8tbGlzdC1oZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLnRvZG8tbGlzdC1oZWFkZXIgaDEge1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLmFkZC1uZXctaXRlbSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLmFkZC1uZXctaXRlbSAuYWRkLW5ldy1pbnB1dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAgNDBweCAwIDFyZW07XFxyXFxuICBsaW5lLWhlaWdodDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLmFkZC1uZXctaXRlbSAuYWRkLW5ldy1pbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IC5hZGQtbmV3LWl0ZW0gLmFkZC1uZXctaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IC5hZGQtbmV3LWl0ZW0gLmFkZC1uZXctYnRuIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGNvbG9yOiAjYzVjNWM1O1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IC5hZGQtbmV3LWl0ZW0gLmFkZC1uZXctYnRuOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCAudG9kby1saXN0LXdyYXAge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IC50b2RvLWxpc3Qtd3JhcCAubGlzdC1pdGVtIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCAudG9kby1saXN0LXdyYXAgLmxpc3QtaXRlbSAubGlzdC1pdGVtLWNoZWNrLW5hbWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwIDQwcHggMCAxcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLnRvZG8tbGlzdC13cmFwIC5saXN0LWl0ZW0gLmxpc3QtaXRlbS1jaGVjay1uYW1lIC5kZXNjcmlwdGlvbi1pbnB1dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLnRvZG8tbGlzdC13cmFwIC5jb21wbGV0ZWQtaXRlbSAubGlzdC1pdGVtLWNoZWNrLW5hbWUgLmRlc2NyaXB0aW9uLWlucHV0IHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgY29sb3I6ICNjMWMxYzM7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLnRvZG8tbGlzdC13cmFwIC51bmNvbXBsZXRlZC1pdGVtIC5saXN0LWl0ZW0tY2hlY2stbmFtZSAuZGVzY3JpcHRpb24taW5wdXQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLnRvZG8tbGlzdC13cmFwIC5saXN0LWl0ZW0gLmxpc3QtaXRlbS1jaGVjay1uYW1lIC5kZXNjcmlwdGlvbi1pbnB1dDpmb2N1cy12aXNpYmxlIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLnRvZG8tbGlzdC13cmFwIC5saXN0LWl0ZW0gLmxpc3QtaXRlbS1jaGVjay1uYW1lIC5jaGVjay1pdGVtIHtcXHJcXG4gIHdpZHRoOiAxNnB4O1xcclxcbiAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2MxYzFjMztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTZweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCAudG9kby1saXN0LXdyYXAgLmxpc3QtaXRlbSAubW92ZS1pdGVtIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGNvbG9yOiAjYzVjNWM1O1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLnRvZG8tbGlzdC13cmFwIC5saXN0LWl0ZW0gLnJlbW92ZS1pdGVtIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGNvbG9yOiAjYzVjNWM1O1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IC50b2RvLWxpc3Qtd3JhcCAubGlzdC1pdGVtIC5tb3ZlLWl0ZW06aG92ZXIge1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IC5jbGVhci1hbGwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCAuY2xlYXItYWxsOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxpQkFBaUI7RUFDakIsTUFBTTtFQUNOLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLDRDQUE0QztFQUM1QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsK0NBQStDO0VBQy9DLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLDRDQUE0QztFQUM1QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLCtDQUErQztFQUMvQyw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWV0YWwrTWFuaWE6d2dodEAzMDA7NDAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJNZXRhbCBNYW5pYVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3Qge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcbiAgbWFyZ2luOiA4MHB4IGF1dG87XFxyXFxuICB0b3A6IDA7XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLnRvZG8tbGlzdC1oZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLnRvZG8tbGlzdC1oZWFkZXIgaDEge1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLmFkZC1uZXctaXRlbSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLmFkZC1uZXctaXRlbSAuYWRkLW5ldy1pbnB1dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAgNDBweCAwIDFyZW07XFxyXFxuICBsaW5lLWhlaWdodDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLmFkZC1uZXctaXRlbSAuYWRkLW5ldy1pbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IC5hZGQtbmV3LWl0ZW0gLmFkZC1uZXctaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IC5hZGQtbmV3LWl0ZW0gLmFkZC1uZXctYnRuIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGNvbG9yOiAjYzVjNWM1O1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IC5hZGQtbmV3LWl0ZW0gLmFkZC1uZXctYnRuOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCAudG9kby1saXN0LXdyYXAge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IC50b2RvLWxpc3Qtd3JhcCAubGlzdC1pdGVtIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCAudG9kby1saXN0LXdyYXAgLmxpc3QtaXRlbSAubGlzdC1pdGVtLWNoZWNrLW5hbWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwIDQwcHggMCAxcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLnRvZG8tbGlzdC13cmFwIC5saXN0LWl0ZW0gLmxpc3QtaXRlbS1jaGVjay1uYW1lIC5kZXNjcmlwdGlvbi1pbnB1dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLnRvZG8tbGlzdC13cmFwIC5jb21wbGV0ZWQtaXRlbSAubGlzdC1pdGVtLWNoZWNrLW5hbWUgLmRlc2NyaXB0aW9uLWlucHV0IHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgY29sb3I6ICNjMWMxYzM7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLnRvZG8tbGlzdC13cmFwIC51bmNvbXBsZXRlZC1pdGVtIC5saXN0LWl0ZW0tY2hlY2stbmFtZSAuZGVzY3JpcHRpb24taW5wdXQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLnRvZG8tbGlzdC13cmFwIC5saXN0LWl0ZW0gLmxpc3QtaXRlbS1jaGVjay1uYW1lIC5kZXNjcmlwdGlvbi1pbnB1dDpmb2N1cy12aXNpYmxlIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLnRvZG8tbGlzdC13cmFwIC5saXN0LWl0ZW0gLmxpc3QtaXRlbS1jaGVjay1uYW1lIC5jaGVjay1pdGVtIHtcXHJcXG4gIHdpZHRoOiAxNnB4O1xcclxcbiAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2MxYzFjMztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTZweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCAudG9kby1saXN0LXdyYXAgLmxpc3QtaXRlbSAubW92ZS1pdGVtIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGNvbG9yOiAjYzVjNWM1O1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLnRvZG8tbGlzdC13cmFwIC5saXN0LWl0ZW0gLnJlbW92ZS1pdGVtIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGNvbG9yOiAjYzVjNWM1O1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IC50b2RvLWxpc3Qtd3JhcCAubGlzdC1pdGVtIC5tb3ZlLWl0ZW06aG92ZXIge1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IC5jbGVhci1hbGwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCAuY2xlYXItYWxsOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBpbXBsZW1lbnRUb0RvSXRlbXMsIHNldFRvRG9BcnIgfSBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCB7XG4gIG9uTW91c2VPdmVyLCBvbk1vdXNlT3V0LCBvbkRyYWdTdGFydCwgb25EcmFnRW5kLFxufSBmcm9tICcuL2RyYWdPdmVyQW5kRHJvcC5qcyc7XG5pbXBvcnQgY2hlY2tJdGVtIGZyb20gJy4vY2hlY2tJdGVtLmpzJztcbmltcG9ydCBkZXNjcmlwdGlvbk9uRm9jdXMgZnJvbSAnLi9pbnB1dHNGb2N1cy5qcyc7XG5cbmNvbnN0IGxpc3RXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdC13cmFwJyk7XG5jb25zdCBhZGROZXdJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbmV3LWlucHV0Jyk7XG4vLyBVUERBVEUgSVRFTVxuZXhwb3J0IGNvbnN0IHVwZGF0ZUlucHV0ID0gKGl0ZW0pID0+IHtcbiAgY29uc3QgbmV3QXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlUb0RvcycpKTtcbiAgY29uc3QgdXBkYXRlSXRlbSA9IG5ld0Fyci5maWx0ZXIoKGl0ZW0yKSA9PiBpdGVtMi5pbmRleCA9PT0gTnVtYmVyKGl0ZW0uZGF0YXNldC5rZXkpKVswXTtcbiAgY29uc3QgaW5kZXhPZk5ld0l0ZW0gPSBuZXdBcnIuaW5kZXhPZih1cGRhdGVJdGVtKTtcbiAgbmV3QXJyW2luZGV4T2ZOZXdJdGVtXS5kZXNjcmlwdGlvbiA9IGl0ZW0udmFsdWU7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVRvRG9zJywgSlNPTi5zdHJpbmdpZnkobmV3QXJyKSk7XG59O1xuLy8gUkVNT1ZFIElURU1cbmV4cG9ydCBjb25zdCByZW1vdmVJdGVtID0gKGl0ZW0sIGFyciwgY29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IG5ld0FyciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215VG9Eb3MnKSk7XG4gIGNvbnN0IHJlbW92ZWRJdGVtID0gbmV3QXJyLmZpbHRlcigoaXRlbTIpID0+IGl0ZW0yLmluZGV4ID09PSBOdW1iZXIoaXRlbS5kYXRhc2V0LmtleSkpWzBdO1xuICBjb25zdCByZW1vdmVkSW5kZXggPSBuZXdBcnIuaW5kZXhPZihyZW1vdmVkSXRlbSk7XG4gIG5ld0Fyci5zcGxpY2UocmVtb3ZlZEluZGV4LCAxKTtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlUb0RvcycsIEpTT04uc3RyaW5naWZ5KG5ld0FycikpO1xuICBzZXRUb0RvQXJyKG5ld0Fycik7XG4gIGltcGxlbWVudFRvRG9JdGVtcyhuZXdBcnIpO1xuICBjb25zdCB0b0RvRGVzY3JpcHRpb25zSW5wdXRzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LWl0ZW0gLmRlc2NyaXB0aW9uLWlucHV0JyldO1xuICB0b0RvRGVzY3JpcHRpb25zSW5wdXRzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIChldmVudCkgPT4gZGVzY3JpcHRpb25PbkZvY3VzKGV2ZW50LCBpdGVtKSkpO1xuICB0b0RvRGVzY3JpcHRpb25zSW5wdXRzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoZXZlbnQpID0+IGRlc2NyaXB0aW9uT25Gb2N1cyhldmVudCwgaXRlbSkpKTtcbiAgdG9Eb0Rlc2NyaXB0aW9uc0lucHV0cy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gdXBkYXRlSW5wdXQoaXRlbSkpKTtcbiAgYXJyID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LWl0ZW0nKV07XG4gIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZXZlbnQpID0+IG9uTW91c2VPdmVyKGV2ZW50LCBpdGVtKSk7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChldmVudCkgPT4gb25Nb3VzZU91dChldmVudCwgaXRlbSkpO1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGV2ZW50KSA9PiBvbkRyYWdTdGFydChldmVudCwgaXRlbSkpO1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChldmVudCkgPT4gb25EcmFnRW5kKGV2ZW50LCBpdGVtLCBhcnIsIGxpc3RXcmFwKSk7XG4gIH0pO1xuICBjb25zdCByZW1vdmVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZS1pdGVtJyk7XG4gIHJlbW92ZUJ0bnMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbW92ZUl0ZW0oaXRlbSwgYXJyLCBjb250YWluZXIpKSk7XG4gIGNvbnN0IHRvRG9DaGVja3NJbnB1dHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtaXRlbSAuY2hlY2staXRlbScpXTtcbiAgdG9Eb0NoZWNrc0lucHV0cy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IGNoZWNrSXRlbShpdGVtKSkpO1xufTtcbi8vIEFERCBORVcgSVRFTVxuZXhwb3J0IGNvbnN0IGFkZE5ld0l0ZW0gPSAoZXZlbnQsIGFyciwgaXRlbXMsIGNvbnRhaW5lcikgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGFkZE5ld0lucHV0LnZhbHVlO1xuICBjb25zdCBpbmRleCA9IGFyci5sZW5ndGggKyAxO1xuICBjb25zdCBuZXdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbmV3SXRlbS5jbGFzc0xpc3QuYWRkKCdsaXN0LWl0ZW0nKTtcbiAgbmV3SXRlbS5kYXRhc2V0LmtleSA9IGluZGV4O1xuICBuZXdJdGVtLmRyYWdnYWJsZSA9IHRydWU7XG4gIG5ld0l0ZW0uaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJsaXN0LWl0ZW0tY2hlY2stbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVjay1pdGVtXCIgZGF0YS1rZXk9XCIke2luZGV4fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJkZXNjcmlwdGlvbi1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke2Rlc2NyaXB0aW9ufVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLWtleT1cIiR7aW5kZXh9XCIgY2xhc3M9XCJtb3ZlLWl0ZW1cIj48aSBjbGFzcz1cImZhcyBmYS1lbGxpcHNpcy12XCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1rZXk9XCIke2luZGV4fVwiIGNsYXNzPVwicmVtb3ZlLWl0ZW1cIj48aSBjbGFzcz1cImZhciBmYS10cmFzaC1hbHRcIj48L2k+PC9idXR0b24+YDtcbiAgY29udGFpbmVyLmluc2VydEJlZm9yZShuZXdJdGVtLCBjb250YWluZXIuY2hpbGRyZW5bMF0pO1xuICBjb25zdCBuZXdBcnIgPSBbXTtcbiAgaXRlbXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtaXRlbScpXTtcbiAgaXRlbXMuZm9yRWFjaCgoaXRlbTIsIGkpID0+IHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGl0ZW0yLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbi1pbnB1dCcpLnZhbHVlO1xuICAgIGxldCBjb21wbGV0ZWQgPSB0cnVlO1xuICAgIGlmIChpdGVtMi5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXBsZXRlZC1pdGVtJykpIHtcbiAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IGkgKyAxO1xuICAgIG5ld0Fyci5wdXNoKHsgZGVzY3JpcHRpb24sIGNvbXBsZXRlZCwgaW5kZXggfSk7XG4gIH0pO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVRvRG9zJywgSlNPTi5zdHJpbmdpZnkobmV3QXJyKSk7XG4gIHNldFRvRG9BcnIobmV3QXJyKTtcbiAgaW1wbGVtZW50VG9Eb0l0ZW1zKG5ld0Fycik7XG4gIGNvbnN0IHRvRG9EZXNjcmlwdGlvbnNJbnB1dHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtaXRlbSAuZGVzY3JpcHRpb24taW5wdXQnKV07XG4gIHRvRG9EZXNjcmlwdGlvbnNJbnB1dHMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgKGV2ZW50KSA9PiBkZXNjcmlwdGlvbk9uRm9jdXMoZXZlbnQsIGl0ZW0pKSk7XG4gIHRvRG9EZXNjcmlwdGlvbnNJbnB1dHMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIChldmVudCkgPT4gZGVzY3JpcHRpb25PbkZvY3VzKGV2ZW50LCBpdGVtKSkpO1xuICB0b0RvRGVzY3JpcHRpb25zSW5wdXRzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB1cGRhdGVJbnB1dChpdGVtKSkpO1xuICBhcnIgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtaXRlbScpXTtcbiAgYXJyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChldmVudCkgPT4gb25Nb3VzZU92ZXIoZXZlbnQsIGl0ZW0pKTtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGV2ZW50KSA9PiBvbk1vdXNlT3V0KGV2ZW50LCBpdGVtKSk7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZXZlbnQpID0+IG9uRHJhZ1N0YXJ0KGV2ZW50LCBpdGVtKSk7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGV2ZW50KSA9PiBvbkRyYWdFbmQoZXZlbnQsIGl0ZW0sIGFyciwgbGlzdFdyYXApKTtcbiAgfSk7XG4gIGNvbnN0IHJlbW92ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlLWl0ZW0nKTtcbiAgcmVtb3ZlQnRucy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVtb3ZlSXRlbShpdGVtLCBhcnIsIGNvbnRhaW5lcikpKTtcbiAgY29uc3QgdG9Eb0NoZWNrc0lucHV0cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1pdGVtIC5jaGVjay1pdGVtJyldO1xuICB0b0RvQ2hlY2tzSW5wdXRzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gY2hlY2tJdGVtKGl0ZW0pKSk7XG4gIGFkZE5ld0lucHV0LnZhbHVlID0gJyc7XG59O1xuLy8gQ0xFQVIgQUxMXG5leHBvcnQgY29uc3QgY2xlYXJBbGwgPSAoY29udGFpbmVyKSA9PiB7XG4gIGxldCBuZXdBcnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVRvRG9zJykpO1xuICBuZXdBcnIgPSBuZXdBcnIuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNvbXBsZXRlZCA9PT0gZmFsc2UpO1xuICBjb25zdCBuZXdTb3J0ZXJlZEFyciA9IFtdO1xuICBuZXdBcnIuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgIGNvbnN0IHsgZGVzY3JpcHRpb24sIGNvbXBsZXRlZCB9ID0gaXRlbTtcbiAgICBjb25zdCBpbmRleCA9IGkgKyAxO1xuICAgIG5ld1NvcnRlcmVkQXJyLnB1c2goeyBkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCB9KTtcbiAgfSk7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215VG9Eb3MnLCBKU09OLnN0cmluZ2lmeShuZXdTb3J0ZXJlZEFycikpO1xuICBzZXRUb0RvQXJyKG5ld1NvcnRlcmVkQXJyKTtcbiAgaW1wbGVtZW50VG9Eb0l0ZW1zKG5ld1NvcnRlcmVkQXJyKTtcbiAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uc0lucHV0cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1pdGVtIC5kZXNjcmlwdGlvbi1pbnB1dCcpXTtcbiAgdG9Eb0Rlc2NyaXB0aW9uc0lucHV0cy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCAoZXZlbnQpID0+IGRlc2NyaXB0aW9uT25Gb2N1cyhldmVudCwgaXRlbSkpKTtcbiAgdG9Eb0Rlc2NyaXB0aW9uc0lucHV0cy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKGV2ZW50KSA9PiBkZXNjcmlwdGlvbk9uRm9jdXMoZXZlbnQsIGl0ZW0pKSk7XG4gIHRvRG9EZXNjcmlwdGlvbnNJbnB1dHMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHVwZGF0ZUlucHV0KGl0ZW0pKSk7XG4gIGNvbnN0IGFyciA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1pdGVtJyldO1xuICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGV2ZW50KSA9PiBvbk1vdXNlT3ZlcihldmVudCwgaXRlbSkpO1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZXZlbnQpID0+IG9uTW91c2VPdXQoZXZlbnQsIGl0ZW0pKTtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChldmVudCkgPT4gb25EcmFnU3RhcnQoZXZlbnQsIGl0ZW0pKTtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZXZlbnQpID0+IG9uRHJhZ0VuZChldmVudCwgaXRlbSwgYXJyLCBsaXN0V3JhcCkpO1xuICB9KTtcblxuICBjb25zdCByZW1vdmVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZS1pdGVtJyk7XG4gIHJlbW92ZUJ0bnMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbW92ZUl0ZW0oaXRlbSwgYXJyLCBjb250YWluZXIpKSk7XG4gIGNvbnN0IHRvRG9DaGVja3NJbnB1dHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtaXRlbSAuY2hlY2staXRlbScpXTtcbiAgdG9Eb0NoZWNrc0lucHV0cy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IGNoZWNrSXRlbShpdGVtKSkpO1xufTsiLCJjb25zdCBjaGVja0l0ZW0gPSAoYnRuKSA9PiB7XG4gIGNvbnN0IG5ld0FyciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215VG9Eb3MnKSk7XG4gIGNvbnN0IGFyckVsZW1lbnQgPSBuZXdBcnIuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmluZGV4ID09PSBOdW1iZXIoYnRuLmRhdGFzZXQua2V5KSlbMF07XG4gIGNvbnN0IGluZGV4T2ZBcnJFbGVtZW50ID0gbmV3QXJyLmluZGV4T2YoYXJyRWxlbWVudCk7XG4gIGlmIChidG4uY2hlY2tlZCkge1xuICAgIGJ0bi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkLWl0ZW0nKTtcbiAgICBidG4ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmJztcbiAgICBuZXdBcnJbaW5kZXhPZkFyckVsZW1lbnRdLmNvbXBsZXRlZCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYnRuLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQtaXRlbScpO1xuICAgIGJ0bi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmYnO1xuICAgIG5ld0FycltpbmRleE9mQXJyRWxlbWVudF0uY29tcGxldGVkID0gZmFsc2U7XG4gIH1cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215VG9Eb3MnLCBKU09OLnN0cmluZ2lmeShuZXdBcnIpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBjaGVja0l0ZW07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBpbXBsZW1lbnRUb0RvSXRlbXMsIHNldFRvRG9BcnIgfSBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCB7IHJlbW92ZUl0ZW0sIHVwZGF0ZUlucHV0IH0gZnJvbSAnLi9hZGRSZW1vdmUuanMnO1xuaW1wb3J0IGNoZWNrSXRlbSBmcm9tICcuL2NoZWNrSXRlbS5qcyc7XG5pbXBvcnQgZGVzY3JpcHRpb25PbkZvY3VzIGZyb20gJy4vaW5wdXRzRm9jdXMuanMnO1xuXG5jb25zdCBsaXN0V3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3Qtd3JhcCcpO1xuZXhwb3J0IGNvbnN0IG9uTW91c2VPdmVyID0gKGV2ZW50LCBpdGVtKSA9PiB7XG4gIFsuLi5pdGVtLmNoaWxkTm9kZXNdWzNdLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1hcnJvd3MtYWx0XCI+PC9pPic7XG4gIFsuLi5pdGVtLmNoaWxkTm9kZXNdWzNdLnN0eWxlLmNvbG9yID0gJyM1NDU4NjInO1xufTtcbmV4cG9ydCBjb25zdCBvbk1vdXNlT3V0ID0gKGV2ZW50LCBpdGVtKSA9PiB7XG4gIFsuLi5pdGVtLmNoaWxkTm9kZXNdWzNdLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1lbGxpcHNpcy12XCI+PC9pPic7XG4gIFsuLi5pdGVtLmNoaWxkTm9kZXNdWzNdLnN0eWxlLmNvbG9yID0gJyNjNWM1YzUnO1xufTtcbmV4cG9ydCBjb25zdCBkcmFnQWZ0ZXJFbGVtZW50ID0gKGNvbnRhaW5lciwgeSkgPT4ge1xuICBjb25zdCBkcmFnZ2FibGVFbGVtZW50cyA9IFsuLi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtaXRlbTpub3QoLmFjdGl2ZSknKV07XG4gIHJldHVybiBkcmFnZ2FibGVFbGVtZW50cy5yZWR1Y2UoKGNsb3NlcywgY2hpbGQpID0+IHtcbiAgICBjb25zdCBib3ggPSBjaGlsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBvZmZzZXQgPSB5IC0gYm94LnRvcCAtIGJveC5oZWlnaHQgLyAyO1xuICAgIGlmIChvZmZzZXQgPCAwICYmIG9mZnNldCA+IGNsb3Nlcy5vZmZzZXQpIHtcbiAgICAgIHJldHVybiB7IG9mZnNldCwgZWxlbWVudDogY2hpbGQgfTtcbiAgICB9XG4gICAgcmV0dXJuIGNsb3NlcztcbiAgfSwgeyBvZmZzZXQ6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSB9KS5lbGVtZW50O1xufTtcbmV4cG9ydCBjb25zdCBvbkRyYWdTdGFydCA9IChldmVudCwgaXRlbSkgPT4ge1xuICBpdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmZWNhJztcbiAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn07XG5leHBvcnQgY29uc3Qgb25EcmFnRW5kID0gKGV2ZW50LCBpdGVtLCBhcnIsIGNvbnRhaW5lcikgPT4ge1xuICBpdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmJztcbiAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgY29uc3QgbmV3QXJyID0gW107XG4gIGFyciA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1pdGVtJyldO1xuICBhcnIuZm9yRWFjaCgoaXRlbTIsIGkpID0+IHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGl0ZW0yLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbi1pbnB1dCcpLnZhbHVlO1xuICAgIGxldCBjb21wbGV0ZWQgPSB0cnVlO1xuICAgIGlmIChpdGVtMi5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXBsZXRlZC1pdGVtJykpIHtcbiAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IGkgKyAxO1xuICAgIG5ld0Fyci5wdXNoKHsgZGVzY3JpcHRpb24sIGNvbXBsZXRlZCwgaW5kZXggfSk7XG4gIH0pO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVRvRG9zJywgSlNPTi5zdHJpbmdpZnkobmV3QXJyKSk7XG4gIHNldFRvRG9BcnIobmV3QXJyKTtcbiAgaW1wbGVtZW50VG9Eb0l0ZW1zKG5ld0Fycik7XG4gIGNvbnN0IHRvRG9EZXNjcmlwdGlvbnNJbnB1dHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtaXRlbSAuZGVzY3JpcHRpb24taW5wdXQnKV07XG4gIHRvRG9EZXNjcmlwdGlvbnNJbnB1dHMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgKGV2ZW50KSA9PiBkZXNjcmlwdGlvbk9uRm9jdXMoZXZlbnQsIGl0ZW0pKSk7XG4gIHRvRG9EZXNjcmlwdGlvbnNJbnB1dHMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIChldmVudCkgPT4gZGVzY3JpcHRpb25PbkZvY3VzKGV2ZW50LCBpdGVtKSkpO1xuICB0b0RvRGVzY3JpcHRpb25zSW5wdXRzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB1cGRhdGVJbnB1dChpdGVtKSkpO1xuICBhcnIgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtaXRlbScpXTtcbiAgYXJyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChldmVudCkgPT4gb25Nb3VzZU92ZXIoZXZlbnQsIGl0ZW0pKTtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGV2ZW50KSA9PiBvbk1vdXNlT3V0KGV2ZW50LCBpdGVtKSk7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZXZlbnQpID0+IG9uRHJhZ1N0YXJ0KGV2ZW50LCBpdGVtKSk7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGV2ZW50KSA9PiBvbkRyYWdFbmQoZXZlbnQsIGl0ZW0sIGFyciwgbGlzdFdyYXApKTtcbiAgfSk7XG4gIGNvbnN0IHJlbW92ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlLWl0ZW0nKTtcbiAgcmVtb3ZlQnRucy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVtb3ZlSXRlbShpdGVtLCBhcnIsIGNvbnRhaW5lcikpKTtcbiAgY29uc3QgdG9Eb0NoZWNrc0lucHV0cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1pdGVtIC5jaGVjay1pdGVtJyldO1xuICB0b0RvQ2hlY2tzSW5wdXRzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gY2hlY2tJdGVtKGl0ZW0pKSk7XG59O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5leHBvcnQgY29uc3Qgb25EcmFnT3ZlciA9IChldmVudCwgY29udGFpbmVyKSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IGNoZWNrSXRlbSBmcm9tICcuL2NoZWNrSXRlbS5qcyc7XG5pbXBvcnQgZGVzY3JpcHRpb25PbkZvY3VzIGZyb20gJy4vaW5wdXRzRm9jdXMuanMnO1xuaW1wb3J0IHtcbiAgb25Nb3VzZU92ZXIsIG9uTW91c2VPdXQsIG9uRHJhZ1N0YXJ0LCBvbkRyYWdFbmQsIG9uRHJhZ092ZXIsXG59IGZyb20gJy4vZHJhZ092ZXJBbmREcm9wLmpzJztcbmltcG9ydCB7XG4gIGFkZE5ld0l0ZW0sIGNsZWFyQWxsLCB1cGRhdGVJbnB1dCwgcmVtb3ZlSXRlbSxcbn0gZnJvbSAnLi9hZGRSZW1vdmUuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbi8vIFNFVCBUT0RPIEFSUlxubGV0IHRvRG9BcnIgPSBbXTtcbmV4cG9ydCBjb25zdCBzZXRUb0RvQXJyID0gKCkgPT4ge1xuICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlUb0RvcycpKSkge1xuICAgIHRvRG9BcnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVRvRG9zJykpO1xuICB9IGVsc2Uge1xuICAgIHRvRG9BcnIgPSBbXTtcbiAgfVxufTtcbnNldFRvRG9BcnIoKTtcbmNvbnN0IGxpc3RXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdC13cmFwJyk7XG4vLyBJTVBMRU1FTlQgVE8gRE8gSVRFTVMgVE8gU0NSRUVOXG5leHBvcnQgY29uc3QgaW1wbGVtZW50VG9Eb0l0ZW1zID0gKGFycikgPT4ge1xuICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGxldCBpc0NvbXBsZXRlZCA9ICcnO1xuICAgIGxldCBjb21wbGV0ZWRDbGFzcyA9ICcnO1xuICAgIGlmIChpdGVtLmNvbXBsZXRlZCkge1xuICAgICAgaXNDb21wbGV0ZWQgPSAnY2hlY2tlZCc7XG4gICAgICBjb21wbGV0ZWRDbGFzcyA9ICdjb21wbGV0ZWQtaXRlbSc7XG4gICAgfVxuICAgIGxpc3RXcmFwLmlubmVySFRNTCArPSBgPGxpIGNsYXNzPVwibGlzdC1pdGVtICR7Y29tcGxldGVkQ2xhc3N9XCIgZGF0YS1rZXk9XCIke2l0ZW0uaW5kZXh9XCIgZHJhZ2dhYmxlPVwidHJ1ZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImxpc3QtaXRlbS1jaGVjay1uYW1lXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrLWl0ZW1cIiBkYXRhLWtleT1cIiR7aXRlbS5pbmRleH1cIiAke2lzQ29tcGxldGVkfT5cbiAgPGlucHV0IGNsYXNzPVwiZGVzY3JpcHRpb24taW5wdXRcIiBkYXRhLWtleT1cIiR7aXRlbS5pbmRleH1cIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHtpdGVtLmRlc2NyaXB0aW9ufVwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLWtleT1cIiR7aXRlbS5pbmRleH1cIiBjbGFzcz1cIm1vdmUtaXRlbVwiPjxpIGNsYXNzPVwiZmFzIGZhLWVsbGlwc2lzLXZcIj48L2k+PC9idXR0b24+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLWtleT1cIiR7aXRlbS5pbmRleH1cIiBjbGFzcz1cInJlbW92ZS1pdGVtXCI+PGkgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0XCI+PC9pPjwvYnV0dG9uPlxuICAgIDwvbGk+YDtcbiAgfSk7XG59O1xuaW1wbGVtZW50VG9Eb0l0ZW1zKHRvRG9BcnIpO1xuLy8gQ0hFQ0sgSVRFTVNcbmNvbnN0IHRvRG9DaGVja3NJbnB1dHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtaXRlbSAuY2hlY2staXRlbScpXTtcbnRvRG9DaGVja3NJbnB1dHMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiBjaGVja0l0ZW0oaXRlbSkpKTtcbi8vIEZPQ1VTIElURU1TXG5jb25zdCB0b0RvRGVzY3JpcHRpb25zSW5wdXRzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LWl0ZW0gLmRlc2NyaXB0aW9uLWlucHV0JyldO1xudG9Eb0Rlc2NyaXB0aW9uc0lucHV0cy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCAoZXZlbnQpID0+IGRlc2NyaXB0aW9uT25Gb2N1cyhldmVudCwgaXRlbSkpKTtcbnRvRG9EZXNjcmlwdGlvbnNJbnB1dHMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIChldmVudCkgPT4gZGVzY3JpcHRpb25PbkZvY3VzKGV2ZW50LCBpdGVtKSkpO1xuLy8gRFJBRyBBTkQgRFJPUCBGVU5DVElPTlNcbmNvbnN0IHRvRG9JdGVtcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1pdGVtJyldO1xudG9Eb0l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZXZlbnQpID0+IG9uTW91c2VPdmVyKGV2ZW50LCBpdGVtKSk7XG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZXZlbnQpID0+IG9uTW91c2VPdXQoZXZlbnQsIGl0ZW0pKTtcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZXZlbnQpID0+IG9uRHJhZ1N0YXJ0KGV2ZW50LCBpdGVtKSk7XG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChldmVudCkgPT4gb25EcmFnRW5kKGV2ZW50LCBpdGVtLCB0b0RvSXRlbXMsIGxpc3RXcmFwKSk7XG59KTtcbmxpc3RXcmFwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGV2ZW50KSA9PiBvbkRyYWdPdmVyKGV2ZW50LCBsaXN0V3JhcCkpO1xuLy8gQUREIElURU1cbmNvbnN0IGFkZE5ld0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbmV3LWJ0bicpO1xuYWRkTmV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiBhZGROZXdJdGVtKGV2ZW50LCB0b0RvQXJyLCB0b0RvSXRlbXMsIGxpc3RXcmFwKSk7XG4vLyBDTEVBUiBBTExcbmNvbnN0IGNsZWFyQWxsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyLWFsbCcpO1xuY2xlYXJBbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbGVhckFsbChsaXN0V3JhcCkpO1xuLy8gVVBEQVRFIElURU1TXG50b0RvRGVzY3JpcHRpb25zSW5wdXRzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB1cGRhdGVJbnB1dChpdGVtKSkpO1xuLy8gUkVNT1ZFIElURU1cbmNvbnN0IHJlbW92ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlLWl0ZW0nKTtcbnJlbW92ZUJ0bnMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbW92ZUl0ZW0oaXRlbSwgdG9Eb0FyciwgbGlzdFdyYXApKSk7IiwiY29uc3QgZGVzY3JpcHRpb25PbkZvY3VzID0gKGV2ZW50LCBpdGVtKSA9PiB7XG4gIGlmIChldmVudC50eXBlID09PSAnZm9jdXNpbicpIHtcbiAgICBpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCd1bmNvbXBsZXRlZC1pdGVtJyk7XG4gICAgaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmZlY2EnO1xuICAgIGl0ZW0ucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBbLi4uaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc11bNV0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSAnZm9jdXNvdXQnKSB7XG4gICAgaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndW5jb21wbGV0ZWQtaXRlbScpO1xuICAgIGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIFsuLi5pdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzXVs1XS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgaXRlbS5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH0sIDEwMDApO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZGVzY3JpcHRpb25PbkZvY3VzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==