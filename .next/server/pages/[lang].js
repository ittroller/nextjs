module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[lang]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/i18n.js":
/*!************************!*\
  !*** ./config/i18n.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const NextI18Next = __webpack_require__(/*! next-i18next */ \"next-i18next\").default; // const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;\n\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nmodule.exports = new NextI18Next({\n  otherLanguages: ['vi'],\n  localeSubpaths: true,\n  localePath: path.resolve('./public/static/locales')\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvaTE4bi5qcz9mNDRiIl0sIm5hbWVzIjpbIk5leHRJMThOZXh0IiwicmVxdWlyZSIsImRlZmF1bHQiLCJwYXRoIiwibW9kdWxlIiwiZXhwb3J0cyIsIm90aGVyTGFuZ3VhZ2VzIiwibG9jYWxlU3VicGF0aHMiLCJsb2NhbGVQYXRoIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFELENBQVAsQ0FBd0JDLE9BQTVDLEMsQ0FDQTs7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHRixtQkFBTyxDQUFDLGtCQUFELENBQXBCOztBQUVBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsSUFBSUwsV0FBSixDQUFnQjtBQUMvQk0sZ0JBQWMsRUFBRSxDQUFDLElBQUQsQ0FEZTtBQUUvQkMsZ0JBQWMsRUFBRSxJQUZlO0FBRy9CQyxZQUFVLEVBQUVMLElBQUksQ0FBQ00sT0FBTCxDQUFhLHlCQUFiO0FBSG1CLENBQWhCLENBQWpCIiwiZmlsZSI6Ii4vY29uZmlnL2kxOG4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHQ7XG4vLyBjb25zdCB7IGxvY2FsZVN1YnBhdGhzIH0gPSByZXF1aXJlKCduZXh0L2NvbmZpZycpLmRlZmF1bHQoKS5wdWJsaWNSdW50aW1lQ29uZmlnO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgTmV4dEkxOE5leHQoe1xuICBvdGhlckxhbmd1YWdlczogWyd2aSddLFxuICBsb2NhbGVTdWJwYXRoczogdHJ1ZSxcbiAgbG9jYWxlUGF0aDogcGF0aC5yZXNvbHZlKCcuL3B1YmxpYy9zdGF0aWMvbG9jYWxlcycpLFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config/i18n.js\n");

/***/ }),

/***/ "./layout/public/PublicLayout.js":
/*!***************************************!*\
  !*** ./layout/public/PublicLayout.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/caokhaminh/Documents/MY_SOURCE/REACTJS/next-demo/layout/public/PublicLayout.js\";\n\n // import withLocale from '../../hocs/withLocale';\n\nconst PublicLayout = ({\n  children\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"LAYOUT\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [\"CLGHT\", children]\n    }, void 0, true)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PublicLayout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sYXlvdXQvcHVibGljL1B1YmxpY0xheW91dC5qcz85ZDE4Il0sIm5hbWVzIjpbIlB1YmxpY0xheW91dCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDckMsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQUEsMEJBRUdBLFFBRkg7QUFBQSxvQkFKRjtBQUFBLGtCQURGO0FBV0QsQ0FaRDs7QUFhZUQsMkVBQWYiLCJmaWxlIjoiLi9sYXlvdXQvcHVibGljL1B1YmxpY0xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuLy8gaW1wb3J0IHdpdGhMb2NhbGUgZnJvbSAnLi4vLi4vaG9jcy93aXRoTG9jYWxlJztcblxuY29uc3QgUHVibGljTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkxBWU9VVDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8PlxuICAgICAgICBDTEdIVFxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8Lz5cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBQdWJsaWNMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./layout/public/PublicLayout.js\n");

/***/ }),

/***/ "./layout/public/index.js":
/*!********************************!*\
  !*** ./layout/public/index.js ***!
  \********************************/
/*! exports provided: PublicLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PublicLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PublicLayout */ \"./layout/public/PublicLayout.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PublicLayout\", function() { return _PublicLayout__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sYXlvdXQvcHVibGljL2luZGV4LmpzPzdkNDEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL2xheW91dC9wdWJsaWMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHVibGljTGF5b3V0IGZyb20gXCIuL1B1YmxpY0xheW91dFwiO1xuXG5leHBvcnQgeyBQdWJsaWNMYXlvdXQgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layout/public/index.js\n");

/***/ }),

/***/ "./pages/[lang]/index.js":
/*!*******************************!*\
  !*** ./pages/[lang]/index.js ***!
  \*******************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/i18n */ \"./config/i18n.js\");\n/* harmony import */ var _config_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layout_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/public */ \"./layout/public/index.js\");\n\nvar _jsxFileName = \"/Users/caokhaminh/Documents/MY_SOURCE/REACTJS/next-demo/pages/[lang]/index.js\";\n\n\n\nconst HomePage = props => {\n  console.log('[lang] index.js');\n  console.log(1111, props);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layout_public__WEBPACK_IMPORTED_MODULE_2__[\"PublicLayout\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"home\",\n      children: [\"HOME \", props.t('hello')]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, undefined);\n};\n\nfunction getServerSideProps({\n  res,\n  query,\n  params,\n  locale,\n  locales,\n  resolvedUrl\n}) {\n  const {\n    lang,\n    location\n  } = query;\n  console.log(111, params);\n  console.log(222, query);\n  console.log(333, locale);\n  console.log(444, locales);\n  console.log(555, resolvedUrl);\n  const routes = {\n    en: {//   about: '',\n    },\n    vi: {//   about: '',\n    }\n  };\n\n  if (!routes[lang]) {\n    res.statusCode = 404;\n    return {\n      props: {\n        isNotFound: true\n      }\n    };\n  }\n\n  return {\n    props: {\n      lang,\n      location\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_config_i18n__WEBPACK_IMPORTED_MODULE_1__[\"withTranslation\"])('default')(HomePage));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bbGFuZ10vaW5kZXguanM/YjJjNiJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXMiLCJxdWVyeSIsInBhcmFtcyIsImxvY2FsZSIsImxvY2FsZXMiLCJyZXNvbHZlZFVybCIsImxhbmciLCJsb2NhdGlvbiIsInJvdXRlcyIsImVuIiwidmkiLCJzdGF0dXNDb2RlIiwiaXNOb3RGb3VuZCIsIndpdGhUcmFuc2xhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUdDLEtBQUssSUFBSTtBQUN4QkMsU0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDQUQsU0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWixFQUFrQkYsS0FBbEI7QUFDQSxzQkFDRSxxRUFBQywyREFBRDtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSwwQkFBNEJBLEtBQUssQ0FBQ0csQ0FBTixDQUFRLE9BQVIsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsQ0FSRDs7QUFVTyxTQUFTQyxrQkFBVCxDQUE0QjtBQUFFQyxLQUFGO0FBQU9DLE9BQVA7QUFBY0MsUUFBZDtBQUFzQkMsUUFBdEI7QUFBOEJDLFNBQTlCO0FBQXVDQztBQUF2QyxDQUE1QixFQUFrRjtBQUN2RixRQUFNO0FBQUVDLFFBQUY7QUFBUUM7QUFBUixNQUFxQk4sS0FBM0I7QUFDQUwsU0FBTyxDQUFDQyxHQUFSLENBQVksR0FBWixFQUFpQkssTUFBakI7QUFDQU4sU0FBTyxDQUFDQyxHQUFSLENBQVksR0FBWixFQUFpQkksS0FBakI7QUFDQUwsU0FBTyxDQUFDQyxHQUFSLENBQVksR0FBWixFQUFpQk0sTUFBakI7QUFDQVAsU0FBTyxDQUFDQyxHQUFSLENBQVksR0FBWixFQUFpQk8sT0FBakI7QUFDQVIsU0FBTyxDQUFDQyxHQUFSLENBQVksR0FBWixFQUFpQlEsV0FBakI7QUFDQSxRQUFNRyxNQUFNLEdBQUc7QUFDYkMsTUFBRSxFQUFFLENBQ0Y7QUFERSxLQURTO0FBSWJDLE1BQUUsRUFBRSxDQUNGO0FBREU7QUFKUyxHQUFmOztBQVFBLE1BQUksQ0FBQ0YsTUFBTSxDQUFDRixJQUFELENBQVgsRUFBbUI7QUFDakJOLE9BQUcsQ0FBQ1csVUFBSixHQUFpQixHQUFqQjtBQUNBLFdBQU87QUFDTGhCLFdBQUssRUFBRTtBQUFFaUIsa0JBQVUsRUFBRTtBQUFkO0FBREYsS0FBUDtBQUdEOztBQUVELFNBQU87QUFDTGpCLFNBQUssRUFBRTtBQUNMVyxVQURLO0FBRUxDO0FBRks7QUFERixHQUFQO0FBTUQ7QUFFY00sbUlBQWUsQ0FBQyxTQUFELENBQWYsQ0FBMkJuQixRQUEzQixDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvW2xhbmddL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vY29uZmlnL2kxOG4nO1xuaW1wb3J0IHsgUHVibGljTGF5b3V0IH0gZnJvbSAnLi4vLi4vbGF5b3V0L3B1YmxpYyc7XG5cbmNvbnN0IEhvbWVQYWdlID0gcHJvcHMgPT4ge1xuICBjb25zb2xlLmxvZygnW2xhbmddIGluZGV4LmpzJyk7XG4gIGNvbnNvbGUubG9nKDExMTEsIHByb3BzKTtcbiAgcmV0dXJuIChcbiAgICA8UHVibGljTGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lXCI+SE9NRSB7cHJvcHMudCgnaGVsbG8nKX08L2Rpdj5cbiAgICA8L1B1YmxpY0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXMsIHF1ZXJ5LCBwYXJhbXMsIGxvY2FsZSwgbG9jYWxlcywgcmVzb2x2ZWRVcmwgfSkge1xuICBjb25zdCB7IGxhbmcsIGxvY2F0aW9uIH0gPSBxdWVyeTtcbiAgY29uc29sZS5sb2coMTExLCBwYXJhbXMpO1xuICBjb25zb2xlLmxvZygyMjIsIHF1ZXJ5KTtcbiAgY29uc29sZS5sb2coMzMzLCBsb2NhbGUpO1xuICBjb25zb2xlLmxvZyg0NDQsIGxvY2FsZXMpO1xuICBjb25zb2xlLmxvZyg1NTUsIHJlc29sdmVkVXJsKTtcbiAgY29uc3Qgcm91dGVzID0ge1xuICAgIGVuOiB7XG4gICAgICAvLyAgIGFib3V0OiAnJyxcbiAgICB9LFxuICAgIHZpOiB7XG4gICAgICAvLyAgIGFib3V0OiAnJyxcbiAgICB9LFxuICB9O1xuICBpZiAoIXJvdXRlc1tsYW5nXSkge1xuICAgIHJlcy5zdGF0dXNDb2RlID0gNDA0O1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczogeyBpc05vdEZvdW5kOiB0cnVlIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGxhbmcsXG4gICAgICBsb2NhdGlvbixcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2RlZmF1bHQnKShIb21lUGFnZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[lang]/index.js\n");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-i18next\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIj9mMGZiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtaTE4bmV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-i18next\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });