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

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/head.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIj8xNzBiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4uL25leHQtc2VydmVyL2xpYi9oZWFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/head\n");

/***/ }),

/***/ "./config/i18n/config.js":
/*!*******************************!*\
  !*** ./config/i18n/config.js ***!
  \*******************************/
/*! exports provided: defaultLocale, locales, languageNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultLocale\", function() { return defaultLocale; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"locales\", function() { return locales; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"languageNames\", function() { return languageNames; });\nconst defaultLocale = 'en';\nconst locales = ['en', 'vi'];\nconst languageNames = {\n  en: 'English',\n  vi: 'Vietnam'\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvaTE4bi9jb25maWcuanM/OWI0OCJdLCJuYW1lcyI6WyJkZWZhdWx0TG9jYWxlIiwibG9jYWxlcyIsImxhbmd1YWdlTmFtZXMiLCJlbiIsInZpIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1BLGFBQWEsR0FBRyxJQUF0QjtBQUVBLE1BQU1DLE9BQU8sR0FBRyxDQUFDLElBQUQsRUFBTyxJQUFQLENBQWhCO0FBRUEsTUFBTUMsYUFBYSxHQUFHO0FBQzNCQyxJQUFFLEVBQUUsU0FEdUI7QUFFM0JDLElBQUUsRUFBRTtBQUZ1QixDQUF0QiIsImZpbGUiOiIuL2NvbmZpZy9pMThuL2NvbmZpZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlID0gJ2VuJztcblxuZXhwb3J0IGNvbnN0IGxvY2FsZXMgPSBbJ2VuJywgJ3ZpJ107XG5cbmV4cG9ydCBjb25zdCBsYW5ndWFnZU5hbWVzID0ge1xuICBlbjogJ0VuZ2xpc2gnLFxuICB2aTogJ1ZpZXRuYW0nLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/i18n/config.js\n");

/***/ }),

/***/ "./config/i18n/strings.js":
/*!********************************!*\
  !*** ./config/i18n/strings.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst strings = {\n  en: {\n    about: 'About René Magritte',\n    painting: 'The Painting',\n    artist: 'The Artist',\n    notAPipe: 'This is not a pipe',\n    bio: `René François Ghislain Magritte (21 November 1898 – 15 August 1967)`,\n    readMore: 'Read more on Wikipedia...'\n  },\n  vi: {\n    about: 'O René Magritte',\n    painting: 'Obraz',\n    artist: 'Artysta',\n    notAPipe: 'To nie jest fajka',\n    bio: `René François Ghislain Magritte (ur. 21 listopada 1898 w Lessines`,\n    readMore: 'Dowiedz się więcej z Wikipedii...'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (strings);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvaTE4bi9zdHJpbmdzLmpzPzI1ZjMiXSwibmFtZXMiOlsic3RyaW5ncyIsImVuIiwiYWJvdXQiLCJwYWludGluZyIsImFydGlzdCIsIm5vdEFQaXBlIiwiYmlvIiwicmVhZE1vcmUiLCJ2aSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxPQUFPLEdBQUc7QUFDZEMsSUFBRSxFQUFFO0FBQ0ZDLFNBQUssRUFBRSxxQkFETDtBQUVGQyxZQUFRLEVBQUUsY0FGUjtBQUdGQyxVQUFNLEVBQUUsWUFITjtBQUlGQyxZQUFRLEVBQUUsb0JBSlI7QUFLRkMsT0FBRyxFQUFHLHFFQUxKO0FBTUZDLFlBQVEsRUFBRTtBQU5SLEdBRFU7QUFVZEMsSUFBRSxFQUFFO0FBQ0ZOLFNBQUssRUFBRSxpQkFETDtBQUVGQyxZQUFRLEVBQUUsT0FGUjtBQUdGQyxVQUFNLEVBQUUsU0FITjtBQUlGQyxZQUFRLEVBQUUsbUJBSlI7QUFLRkMsT0FBRyxFQUFHLG1FQUxKO0FBTUZDLFlBQVEsRUFBRTtBQU5SO0FBVlUsQ0FBaEI7QUFvQmVQLHNFQUFmIiwiZmlsZSI6Ii4vY29uZmlnL2kxOG4vc3RyaW5ncy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN0cmluZ3MgPSB7XG4gIGVuOiB7XG4gICAgYWJvdXQ6ICdBYm91dCBSZW7DqSBNYWdyaXR0ZScsXG4gICAgcGFpbnRpbmc6ICdUaGUgUGFpbnRpbmcnLFxuICAgIGFydGlzdDogJ1RoZSBBcnRpc3QnLFxuICAgIG5vdEFQaXBlOiAnVGhpcyBpcyBub3QgYSBwaXBlJyxcbiAgICBiaW86IGBSZW7DqSBGcmFuw6dvaXMgR2hpc2xhaW4gTWFncml0dGUgKDIxIE5vdmVtYmVyIDE4OTgg4oCTIDE1IEF1Z3VzdCAxOTY3KWAsXG4gICAgcmVhZE1vcmU6ICdSZWFkIG1vcmUgb24gV2lraXBlZGlhLi4uJyxcbiAgfSxcblxuICB2aToge1xuICAgIGFib3V0OiAnTyBSZW7DqSBNYWdyaXR0ZScsXG4gICAgcGFpbnRpbmc6ICdPYnJheicsXG4gICAgYXJ0aXN0OiAnQXJ0eXN0YScsXG4gICAgbm90QVBpcGU6ICdUbyBuaWUgamVzdCBmYWprYScsXG4gICAgYmlvOiBgUmVuw6kgRnJhbsOnb2lzIEdoaXNsYWluIE1hZ3JpdHRlICh1ci4gMjEgbGlzdG9wYWRhIDE4OTggdyBMZXNzaW5lc2AsXG4gICAgcmVhZE1vcmU6ICdEb3dpZWR6IHNpxJkgd2nEmWNlaiB6IFdpa2lwZWRpaS4uLicsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/i18n/strings.js\n");

/***/ }),

/***/ "./config/i18n/types.js":
/*!******************************!*\
  !*** ./config/i18n/types.js ***!
  \******************************/
/*! exports provided: isLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isLocale\", function() { return isLocale; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./config/i18n/config.js\");\n\nfunction isLocale(tested) {\n  return _config__WEBPACK_IMPORTED_MODULE_0__[\"locales\"].some(locale => locale === tested);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvaTE4bi90eXBlcy5qcz8yNTdlIl0sIm5hbWVzIjpbImlzTG9jYWxlIiwidGVzdGVkIiwibG9jYWxlcyIsInNvbWUiLCJsb2NhbGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sU0FBU0EsUUFBVCxDQUFrQkMsTUFBbEIsRUFBMEI7QUFDL0IsU0FBT0MsK0NBQU8sQ0FBQ0MsSUFBUixDQUFhQyxNQUFNLElBQUlBLE1BQU0sS0FBS0gsTUFBbEMsQ0FBUDtBQUNEIiwiZmlsZSI6Ii4vY29uZmlnL2kxOG4vdHlwZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2NhbGVzIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbGUodGVzdGVkKSB7XG4gIHJldHVybiBsb2NhbGVzLnNvbWUobG9jYWxlID0+IGxvY2FsZSA9PT0gdGVzdGVkKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/i18n/types.js\n");

/***/ }),

/***/ "./context/LocaleContext.js":
/*!**********************************!*\
  !*** ./context/LocaleContext.js ***!
  \**********************************/
/*! exports provided: LocaleContext, LocaleProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LocaleContext\", function() { return LocaleContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LocaleProvider\", function() { return LocaleProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_i18n_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/i18n/types */ \"./config/i18n/types.js\");\n\nvar _jsxFileName = \"/Users/caokhaminh/Documents/MY_SOURCE/REACTJS/next-demo/context/LocaleContext.js\";\n\n\n\nconst LocaleContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({\n  locale: 'en',\n  setLocale: () => null\n});\nconst LocaleProvider = ({\n  lang,\n  children\n}) => {\n  const {\n    0: locale,\n    1: setLocale\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(lang);\n  const {\n    query\n  } = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    console.log(locale);\n\n    if (locale !== localStorage.getItem('locale')) {\n      localStorage.setItem('locale', locale);\n    }\n  }, [locale]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (typeof query.lang === 'string' && Object(_config_i18n_types__WEBPACK_IMPORTED_MODULE_3__[\"isLocale\"])(query.lang) && locale !== query.lang) {\n      setLocale(query.lang);\n    }\n  }, [query.lang, locale]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LocaleContext.Provider, {\n    value: {\n      locale,\n      setLocale\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 10\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L0xvY2FsZUNvbnRleHQuanM/ODgzYSJdLCJuYW1lcyI6WyJMb2NhbGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImxvY2FsZSIsInNldExvY2FsZSIsIkxvY2FsZVByb3ZpZGVyIiwibGFuZyIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJxdWVyeSIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsImlzTG9jYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxhQUFhLGdCQUFHQywyREFBYSxDQUFDO0FBQ3pDQyxRQUFNLEVBQUUsSUFEaUM7QUFFekNDLFdBQVMsRUFBRSxNQUFNO0FBRndCLENBQUQsQ0FBbkM7QUFLQSxNQUFNQyxjQUFjLEdBQUcsQ0FBQztBQUFFQyxNQUFGO0FBQVFDO0FBQVIsQ0FBRCxLQUF3QjtBQUNwRCxRQUFNO0FBQUEsT0FBQ0osTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JJLHNEQUFRLENBQUNGLElBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUVHO0FBQUYsTUFBWUMsNkRBQVMsRUFBM0I7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVixNQUFaOztBQUNBLFFBQUlBLE1BQU0sS0FBS1csWUFBWSxDQUFDQyxPQUFiLENBQXFCLFFBQXJCLENBQWYsRUFBK0M7QUFDN0NELGtCQUFZLENBQUNFLE9BQWIsQ0FBcUIsUUFBckIsRUFBK0JiLE1BQS9CO0FBQ0Q7QUFDRixHQUxRLEVBS04sQ0FBQ0EsTUFBRCxDQUxNLENBQVQ7QUFPQVEseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSSxPQUFPRixLQUFLLENBQUNILElBQWIsS0FBc0IsUUFBdEIsSUFBa0NXLG1FQUFRLENBQUNSLEtBQUssQ0FBQ0gsSUFBUCxDQUExQyxJQUEwREgsTUFBTSxLQUFLTSxLQUFLLENBQUNILElBQS9FLEVBQXFGO0FBQ25GRixlQUFTLENBQUNLLEtBQUssQ0FBQ0gsSUFBUCxDQUFUO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ0csS0FBSyxDQUFDSCxJQUFQLEVBQWFILE1BQWIsQ0FKTSxDQUFUO0FBTUEsc0JBQU8scUVBQUMsYUFBRCxDQUFlLFFBQWY7QUFBd0IsU0FBSyxFQUFFO0FBQUVBLFlBQUY7QUFBVUM7QUFBVixLQUEvQjtBQUFBLGNBQXVERztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQWxCTSIsImZpbGUiOiIuL2NvbnRleHQvTG9jYWxlQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBpc0xvY2FsZSB9IGZyb20gJy4uL2NvbmZpZy9pMThuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IExvY2FsZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgbG9jYWxlOiAnZW4nLFxuICBzZXRMb2NhbGU6ICgpID0+IG51bGwsXG59KTtcblxuZXhwb3J0IGNvbnN0IExvY2FsZVByb3ZpZGVyID0gKHsgbGFuZywgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbbG9jYWxlLCBzZXRMb2NhbGVdID0gdXNlU3RhdGUobGFuZyk7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2cobG9jYWxlKTtcbiAgICBpZiAobG9jYWxlICE9PSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxlJykpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2NhbGUnLCBsb2NhbGUpO1xuICAgIH1cbiAgfSwgW2xvY2FsZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeS5sYW5nID09PSAnc3RyaW5nJyAmJiBpc0xvY2FsZShxdWVyeS5sYW5nKSAmJiBsb2NhbGUgIT09IHF1ZXJ5LmxhbmcpIHtcbiAgICAgIHNldExvY2FsZShxdWVyeS5sYW5nKTtcbiAgICB9XG4gIH0sIFtxdWVyeS5sYW5nLCBsb2NhbGVdKTtcblxuICByZXR1cm4gPExvY2FsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbG9jYWxlLCBzZXRMb2NhbGUgfX0+e2NoaWxkcmVufTwvTG9jYWxlQ29udGV4dC5Qcm92aWRlcj47XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/LocaleContext.js\n");

/***/ }),

/***/ "./hocs/withLocale.js":
/*!****************************!*\
  !*** ./hocs/withLocale.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/next-server/lib/utils */ \"next/dist/next-server/lib/utils\");\n/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_i18n_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/i18n/types */ \"./config/i18n/types.js\");\n/* harmony import */ var _context_LocaleContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/LocaleContext */ \"./context/LocaleContext.js\");\n\nvar _jsxFileName = \"/Users/caokhaminh/Documents/MY_SOURCE/REACTJS/next-demo/hocs/withLocale.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\nconst withLocale = WrappedPage => {\n  const WithLocale = (_ref) => {\n    let {\n      locale\n    } = _ref,\n        pageProps = _objectWithoutProperties(_ref, [\"locale\"]);\n\n    if (!locale) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_error__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        statusCode: 404\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 14\n      }, undefined);\n    }\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_context_LocaleContext__WEBPACK_IMPORTED_MODULE_4__[\"LocaleProvider\"], {\n      lang: locale,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(WrappedPage, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined);\n  };\n\n  WithLocale.getInitialProps = async ctx => {\n    let pageProps = {};\n\n    if (WrappedPage.getInitialProps) {\n      pageProps = await WrappedPage.getInitialProps(ctx);\n    }\n\n    if (typeof ctx.query.lang !== 'string' || !Object(_config_i18n_types__WEBPACK_IMPORTED_MODULE_3__[\"isLocale\"])(ctx.query.lang)) {\n      return _objectSpread(_objectSpread({}, pageProps), {}, {\n        locale: undefined\n      });\n    }\n\n    return _objectSpread(_objectSpread({}, pageProps), {}, {\n      locale: ctx.query.lang\n    });\n  };\n\n  WithLocale.displayName = `withLang(${Object(next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_2__[\"getDisplayName\"])(WrappedPage)})`;\n  return WithLocale;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (withLocale);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob2NzL3dpdGhMb2NhbGUuanM/M2QyMCJdLCJuYW1lcyI6WyJ3aXRoTG9jYWxlIiwiV3JhcHBlZFBhZ2UiLCJXaXRoTG9jYWxlIiwibG9jYWxlIiwicGFnZVByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicXVlcnkiLCJsYW5nIiwiaXNMb2NhbGUiLCJ1bmRlZmluZWQiLCJkaXNwbGF5TmFtZSIsImdldERpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsVUFBVSxHQUFHQyxXQUFXLElBQUk7QUFDaEMsUUFBTUMsVUFBVSxHQUFHLFVBQThCO0FBQUEsUUFBN0I7QUFBRUM7QUFBRixLQUE2QjtBQUFBLFFBQWhCQyxTQUFnQjs7QUFDL0MsUUFBSSxDQUFDRCxNQUFMLEVBQWE7QUFDWCwwQkFBTyxxRUFBQyxpREFBRDtBQUFPLGtCQUFVLEVBQUU7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNEOztBQUNELHdCQUNFLHFFQUFDLHFFQUFEO0FBQWdCLFVBQUksRUFBRUEsTUFBdEI7QUFBQSw2QkFDRSxxRUFBQyxXQUFELG9CQUFpQkMsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFLRCxHQVREOztBQVdBRixZQUFVLENBQUNHLGVBQVgsR0FBNkIsTUFBTUMsR0FBTixJQUFhO0FBQ3hDLFFBQUlGLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxRQUFJSCxXQUFXLENBQUNJLGVBQWhCLEVBQWlDO0FBQy9CRCxlQUFTLEdBQUcsTUFBTUgsV0FBVyxDQUFDSSxlQUFaLENBQTRCQyxHQUE1QixDQUFsQjtBQUNEOztBQUNELFFBQUksT0FBT0EsR0FBRyxDQUFDQyxLQUFKLENBQVVDLElBQWpCLEtBQTBCLFFBQTFCLElBQXNDLENBQUNDLG1FQUFRLENBQUNILEdBQUcsQ0FBQ0MsS0FBSixDQUFVQyxJQUFYLENBQW5ELEVBQXFFO0FBQ25FLDZDQUFZSixTQUFaO0FBQXVCRCxjQUFNLEVBQUVPO0FBQS9CO0FBQ0Q7O0FBQ0QsMkNBQVlOLFNBQVo7QUFBdUJELFlBQU0sRUFBRUcsR0FBRyxDQUFDQyxLQUFKLENBQVVDO0FBQXpDO0FBQ0QsR0FURDs7QUFXQU4sWUFBVSxDQUFDUyxXQUFYLEdBQTBCLFlBQVdDLHNGQUFjLENBQUNYLFdBQUQsQ0FBYyxHQUFqRTtBQUVBLFNBQU9DLFVBQVA7QUFDRCxDQTFCRDs7QUE0QmVGLHlFQUFmIiwiZmlsZSI6Ii4vaG9jcy93aXRoTG9jYWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVycm9yIGZyb20gJ25leHQvZXJyb3InO1xuaW1wb3J0IHsgZ2V0RGlzcGxheU5hbWUgfSBmcm9tICduZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJztcbmltcG9ydCB7IGlzTG9jYWxlIH0gZnJvbSAnLi4vY29uZmlnL2kxOG4vdHlwZXMnO1xuaW1wb3J0IHsgTG9jYWxlUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L0xvY2FsZUNvbnRleHQnO1xuXG5jb25zdCB3aXRoTG9jYWxlID0gV3JhcHBlZFBhZ2UgPT4ge1xuICBjb25zdCBXaXRoTG9jYWxlID0gKHsgbG9jYWxlLCAuLi5wYWdlUHJvcHMgfSkgPT4ge1xuICAgIGlmICghbG9jYWxlKSB7XG4gICAgICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9ezQwNH0gLz47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8TG9jYWxlUHJvdmlkZXIgbGFuZz17bG9jYWxlfT5cbiAgICAgICAgPFdyYXBwZWRQYWdlIHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0xvY2FsZVByb3ZpZGVyPlxuICAgICk7XG4gIH07XG5cbiAgV2l0aExvY2FsZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjdHggPT4ge1xuICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcbiAgICBpZiAoV3JhcHBlZFBhZ2UuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBwYWdlUHJvcHMgPSBhd2FpdCBXcmFwcGVkUGFnZS5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjdHgucXVlcnkubGFuZyAhPT0gJ3N0cmluZycgfHwgIWlzTG9jYWxlKGN0eC5xdWVyeS5sYW5nKSkge1xuICAgICAgcmV0dXJuIHsgLi4ucGFnZVByb3BzLCBsb2NhbGU6IHVuZGVmaW5lZCB9O1xuICAgIH1cbiAgICByZXR1cm4geyAuLi5wYWdlUHJvcHMsIGxvY2FsZTogY3R4LnF1ZXJ5LmxhbmcgfTtcbiAgfTtcblxuICBXaXRoTG9jYWxlLmRpc3BsYXlOYW1lID0gYHdpdGhMYW5nKCR7Z2V0RGlzcGxheU5hbWUoV3JhcHBlZFBhZ2UpfSlgO1xuXG4gIHJldHVybiBXaXRoTG9jYWxlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aExvY2FsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hocs/withLocale.js\n");

/***/ }),

/***/ "./hooks/useTranslation.js":
/*!*********************************!*\
  !*** ./hooks/useTranslation.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useTranslation; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_LocaleContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/LocaleContext */ \"./context/LocaleContext.js\");\n/* harmony import */ var _config_i18n_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/i18n/strings */ \"./config/i18n/strings.js\");\n/* harmony import */ var _config_i18n_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/i18n/config */ \"./config/i18n/config.js\");\n\n\n\n\nfunction useTranslation() {\n  const {\n    locale\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_LocaleContext__WEBPACK_IMPORTED_MODULE_1__[\"LocaleContext\"]);\n\n  function t(key) {\n    if (!_config_i18n_strings__WEBPACK_IMPORTED_MODULE_2__[\"default\"][locale][key]) {\n      console.warn(`Translation '${key}' for locale '${locale}' not found.`);\n    }\n\n    return _config_i18n_strings__WEBPACK_IMPORTED_MODULE_2__[\"default\"][locale][key] || _config_i18n_strings__WEBPACK_IMPORTED_MODULE_2__[\"default\"][_config_i18n_config__WEBPACK_IMPORTED_MODULE_3__[\"defaultLocale\"]][key] || '';\n  }\n\n  return {\n    t,\n    locale\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy91c2VUcmFuc2xhdGlvbi5qcz9iYjdkIl0sIm5hbWVzIjpbInVzZVRyYW5zbGF0aW9uIiwibG9jYWxlIiwidXNlQ29udGV4dCIsIkxvY2FsZUNvbnRleHQiLCJ0Iiwia2V5Iiwic3RyaW5ncyIsImNvbnNvbGUiLCJ3YXJuIiwiZGVmYXVsdExvY2FsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGNBQVQsR0FBMEI7QUFDdkMsUUFBTTtBQUFFQztBQUFGLE1BQWFDLHdEQUFVLENBQUNDLG9FQUFELENBQTdCOztBQUVBLFdBQVNDLENBQVQsQ0FBV0MsR0FBWCxFQUFnQjtBQUNkLFFBQUksQ0FBQ0MsNERBQU8sQ0FBQ0wsTUFBRCxDQUFQLENBQWdCSSxHQUFoQixDQUFMLEVBQTJCO0FBQ3pCRSxhQUFPLENBQUNDLElBQVIsQ0FBYyxnQkFBZUgsR0FBSSxpQkFBZ0JKLE1BQU8sY0FBeEQ7QUFDRDs7QUFDRCxXQUFPSyw0REFBTyxDQUFDTCxNQUFELENBQVAsQ0FBZ0JJLEdBQWhCLEtBQXdCQyw0REFBTyxDQUFDRyxpRUFBRCxDQUFQLENBQXVCSixHQUF2QixDQUF4QixJQUF1RCxFQUE5RDtBQUNEOztBQUVELFNBQU87QUFDTEQsS0FESztBQUVMSDtBQUZLLEdBQVA7QUFJRCIsImZpbGUiOiIuL2hvb2tzL3VzZVRyYW5zbGF0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExvY2FsZUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0xvY2FsZUNvbnRleHQnO1xuaW1wb3J0IHN0cmluZ3MgZnJvbSAnLi4vY29uZmlnL2kxOG4vc3RyaW5ncyc7XG5pbXBvcnQgeyBkZWZhdWx0TG9jYWxlIH0gZnJvbSAnLi4vY29uZmlnL2kxOG4vY29uZmlnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVHJhbnNsYXRpb24oKSB7XG4gIGNvbnN0IHsgbG9jYWxlIH0gPSB1c2VDb250ZXh0KExvY2FsZUNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIHQoa2V5KSB7XG4gICAgaWYgKCFzdHJpbmdzW2xvY2FsZV1ba2V5XSkge1xuICAgICAgY29uc29sZS53YXJuKGBUcmFuc2xhdGlvbiAnJHtrZXl9JyBmb3IgbG9jYWxlICcke2xvY2FsZX0nIG5vdCBmb3VuZC5gKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZ3NbbG9jYWxlXVtrZXldIHx8IHN0cmluZ3NbZGVmYXVsdExvY2FsZV1ba2V5XSB8fCAnJztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdCxcbiAgICBsb2NhbGUsXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useTranslation.js\n");

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

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/NGVhNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ \"../next-server/lib/head\"));\n\nconst statusCodes = {\n  400: 'Bad Request',\n  404: 'This page could not be found',\n  405: 'Method Not Allowed',\n  500: 'Internal Server Error'\n};\n\nfunction _getInitialProps({\n  res,\n  err\n}) {\n  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;\n  return {\n    statusCode\n  };\n}\n/**\n* `Error` component used for handling errors.\n*/\n\n\nclass Error extends _react.default.Component {\n  render() {\n    const {\n      statusCode\n    } = this.props;\n    const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';\n    return /*#__PURE__*/_react.default.createElement(\"div\", {\n      style: styles.error\n    }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement(\"title\", null, statusCode, \": \", title)), /*#__PURE__*/_react.default.createElement(\"div\", null, /*#__PURE__*/_react.default.createElement(\"style\", {\n      dangerouslySetInnerHTML: {\n        __html: 'body { margin: 0 }'\n      }\n    }), statusCode ? /*#__PURE__*/_react.default.createElement(\"h1\", {\n      style: styles.h1\n    }, statusCode) : null, /*#__PURE__*/_react.default.createElement(\"div\", {\n      style: styles.desc\n    }, /*#__PURE__*/_react.default.createElement(\"h2\", {\n      style: styles.h2\n    }, title, \".\"))));\n  }\n\n}\n\nexports.default = Error;\nError.displayName = 'ErrorPage';\nError.getInitialProps = _getInitialProps;\nError.origGetInitialProps = _getInitialProps;\nconst styles = {\n  error: {\n    color: '#000',\n    background: '#fff',\n    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", \"Fira Sans\", Avenir, \"Helvetica Neue\", \"Lucida Grande\", sans-serif',\n    height: '100vh',\n    textAlign: 'center',\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center',\n    justifyContent: 'center'\n  },\n  desc: {\n    display: 'inline-block',\n    textAlign: 'left',\n    lineHeight: '49px',\n    height: '49px',\n    verticalAlign: 'middle'\n  },\n  h1: {\n    display: 'inline-block',\n    borderRight: '1px solid rgba(0, 0, 0,.3)',\n    margin: 0,\n    marginRight: '20px',\n    padding: '10px 23px 10px 0',\n    fontSize: '24px',\n    fontWeight: 500,\n    verticalAlign: 'top'\n  },\n  h2: {\n    fontSize: '14px',\n    fontWeight: 'normal',\n    lineHeight: 'inherit',\n    margin: 0,\n    padding: 0\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2Vycm9yLnRzeD8wNjc3Il0sIm5hbWVzIjpbInN0YXR1c0NvZGVzIiwic3RhdHVzQ29kZSIsInJlcyIsImVyciIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwidGl0bGUiLCJzdHlsZXMiLCJfX2h0bWwiLCJFcnJvciIsImRpc3BsYXlOYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwiX2dldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJlcnJvciIsImNvbG9yIiwiYmFja2dyb3VuZCIsImZvbnRGYW1pbHkiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImRlc2MiLCJsaW5lSGVpZ2h0IiwidmVydGljYWxBbGlnbiIsImgxIiwiYm9yZGVyUmlnaHQiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJoMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUdBLE1BQU1BLFdBQXVDLEdBQUc7QUFDOUMsT0FEOEM7QUFFOUMsT0FGOEM7QUFHOUMsT0FIOEM7QUFJOUMsT0FKRjtBQUFnRCxDQUFoRDs7QUFZQSwwQkFBMEI7QUFBQTtBQUExQjtBQUEwQixDQUExQixFQUdzRDtBQUNwRCxRQUFNQyxVQUFVLEdBQ2RDLEdBQUcsSUFBSUEsR0FBRyxDQUFWQSxhQUF3QkEsR0FBRyxDQUEzQkEsYUFBeUNDLEdBQUcsR0FBR0EsR0FBRyxDQUFOLGFBRDlDO0FBRUEsU0FBTztBQUFQO0FBQU8sR0FBUDtBQUdGO0FBQUE7Ozs7O0FBR2Usb0JBQTRCQyxlQUFNQyxTQUFsQyxDQUE0RDtBQU16RUMsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFBO0FBQUEsUUFBaUIsS0FBdkI7QUFDQSxVQUFNQyxLQUFLLEdBQ1Qsb0JBQ0FQLFdBQVcsQ0FEWCxVQUNXLENBRFgsSUFERjtBQUtBLHdCQUNFO0FBQUssV0FBSyxFQUFFUSxNQUFNLENBQWxCO0FBQUEsb0JBQ0UsNkJBQUMsTUFBRCw0QkFDRSw4REFGSixLQUVJLENBREYsQ0FERixlQU1FLHVEQUNFO0FBQU8sNkJBQXVCLEVBQUU7QUFBRUMsY0FBTSxFQUQxQztBQUNrQztBQUFoQyxNQURGLEVBRUdSLFVBQVUsZ0JBQUc7QUFBSSxXQUFLLEVBQUVPLE1BQU0sQ0FBakI7QUFBQSxPQUFILFVBQUcsQ0FBSCxHQUZiLG1CQUdFO0FBQUssV0FBSyxFQUFFQSxNQUFNLENBQWxCO0FBQUEsb0JBQ0U7QUFBSSxXQUFLLEVBQUVBLE1BQU0sQ0FBakI7QUFBQSxjQVhSLEdBV1EsQ0FERixDQUhGLENBTkYsQ0FERjtBQWJ1RTs7QUFBQTs7O0FBQXRERSxLLENBQ1pDLFdBRFlELEdBQ0UsV0FERkE7QUFBQUEsSyxDQUdaRSxlQUhZRixHQUdNRyxnQkFITkg7QUFBQUEsSyxDQUlaSSxtQkFKWUosR0FJVUcsZ0JBSlZIO0FBZ0NyQixNQUFNRixNQUE0QyxHQUFHO0FBQ25ETyxPQUFLLEVBQUU7QUFDTEMsU0FBSyxFQURBO0FBRUxDLGNBQVUsRUFGTDtBQUdMQyxjQUFVLEVBSEw7QUFLTEMsVUFBTSxFQUxEO0FBTUxDLGFBQVMsRUFOSjtBQU9MQyxXQUFPLEVBUEY7QUFRTEMsaUJBQWEsRUFSUjtBQVNMQyxjQUFVLEVBVEw7QUFVTEMsa0JBQWMsRUFYbUM7QUFDNUMsR0FENEM7QUFjbkRDLE1BQUksRUFBRTtBQUNKSixXQUFPLEVBREg7QUFFSkQsYUFBUyxFQUZMO0FBR0pNLGNBQVUsRUFITjtBQUlKUCxVQUFNLEVBSkY7QUFLSlEsaUJBQWEsRUFuQm9DO0FBYzdDLEdBZDZDO0FBc0JuREMsSUFBRSxFQUFFO0FBQ0ZQLFdBQU8sRUFETDtBQUVGUSxlQUFXLEVBRlQ7QUFHRkMsVUFBTSxFQUhKO0FBSUZDLGVBQVcsRUFKVDtBQUtGQyxXQUFPLEVBTEw7QUFNRkMsWUFBUSxFQU5OO0FBT0ZDLGNBQVUsRUFQUjtBQVFGUCxpQkFBYSxFQTlCb0M7QUFzQi9DLEdBdEIrQztBQWlDbkRRLElBQUUsRUFBRTtBQUNGRixZQUFRLEVBRE47QUFFRkMsY0FBVSxFQUZSO0FBR0ZSLGNBQVUsRUFIUjtBQUlGSSxVQUFNLEVBSko7QUFLRkUsV0FBTyxFQXRDWDtBQWlDTTtBQWpDK0MsQ0FBckQiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9oZWFkJ1xuaW1wb3J0IHsgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuXG5jb25zdCBzdGF0dXNDb2RlczogeyBbY29kZTogbnVtYmVyXTogc3RyaW5nIH0gPSB7XG4gIDQwMDogJ0JhZCBSZXF1ZXN0JyxcbiAgNDA0OiAnVGhpcyBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZCcsXG4gIDQwNTogJ01ldGhvZCBOb3QgQWxsb3dlZCcsXG4gIDUwMDogJ0ludGVybmFsIFNlcnZlciBFcnJvcicsXG59XG5cbmV4cG9ydCB0eXBlIEVycm9yUHJvcHMgPSB7XG4gIHN0YXR1c0NvZGU6IG51bWJlclxuICB0aXRsZT86IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBfZ2V0SW5pdGlhbFByb3BzKHtcbiAgcmVzLFxuICBlcnIsXG59OiBOZXh0UGFnZUNvbnRleHQpOiBQcm9taXNlPEVycm9yUHJvcHM+IHwgRXJyb3JQcm9wcyB7XG4gIGNvbnN0IHN0YXR1c0NvZGUgPVxuICAgIHJlcyAmJiByZXMuc3RhdHVzQ29kZSA/IHJlcy5zdGF0dXNDb2RlIDogZXJyID8gZXJyLnN0YXR1c0NvZGUhIDogNDA0XG4gIHJldHVybiB7IHN0YXR1c0NvZGUgfVxufVxuXG4vKipcbiAqIGBFcnJvcmAgY29tcG9uZW50IHVzZWQgZm9yIGhhbmRsaW5nIGVycm9ycy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3I8UCA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQICYgRXJyb3JQcm9wcz4ge1xuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnRXJyb3JQYWdlJ1xuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzXG4gIHN0YXRpYyBvcmlnR2V0SW5pdGlhbFByb3BzID0gX2dldEluaXRpYWxQcm9wc1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0YXR1c0NvZGUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB0aXRsZSA9XG4gICAgICB0aGlzLnByb3BzLnRpdGxlIHx8XG4gICAgICBzdGF0dXNDb2Rlc1tzdGF0dXNDb2RlXSB8fFxuICAgICAgJ0FuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkJ1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5lcnJvcn0+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5cbiAgICAgICAgICAgIHtzdGF0dXNDb2RlfToge3RpdGxlfVxuICAgICAgICAgIDwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiAnYm9keSB7IG1hcmdpbjogMCB9JyB9fSAvPlxuICAgICAgICAgIHtzdGF0dXNDb2RlID8gPGgxIHN0eWxlPXtzdHlsZXMuaDF9PntzdGF0dXNDb2RlfTwvaDE+IDogbnVsbH1cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuZGVzY30+XG4gICAgICAgICAgICA8aDIgc3R5bGU9e3N0eWxlcy5oMn0+e3RpdGxlfS48L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBzdHlsZXM6IHsgW2s6IHN0cmluZ106IFJlYWN0LkNTU1Byb3BlcnRpZXMgfSA9IHtcbiAgZXJyb3I6IHtcbiAgICBjb2xvcjogJyMwMDAnLFxuICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICBmb250RmFtaWx5OlxuICAgICAgJy1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgUm9ib3RvLCBcIlNlZ29lIFVJXCIsIFwiRmlyYSBTYW5zXCIsIEF2ZW5pciwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZicsXG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgfSxcblxuICBkZXNjOiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgbGluZUhlaWdodDogJzQ5cHgnLFxuICAgIGhlaWdodDogJzQ5cHgnLFxuICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICB9LFxuXG4gIGgxOiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgYm9yZGVyUmlnaHQ6ICcxcHggc29saWQgcmdiYSgwLCAwLCAwLC4zKScsXG4gICAgbWFyZ2luOiAwLFxuICAgIG1hcmdpblJpZ2h0OiAnMjBweCcsXG4gICAgcGFkZGluZzogJzEwcHggMjNweCAxMHB4IDAnLFxuICAgIGZvbnRTaXplOiAnMjRweCcsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICB9LFxuXG4gIGgyOiB7XG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgbWFyZ2luOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gIH0sXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_error.js\n");

/***/ }),

/***/ "./node_modules/next/error.js":
/*!************************************!*\
  !*** ./node_modules/next/error.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_error */ \"./node_modules/next/dist/pages/_error.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9lcnJvci5qcz83YTg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQixtQkFBTyxDQUFDLHFFQUFxQiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Vycm9yLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2Vycm9yJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/error.js\n");

/***/ }),

/***/ "./pages/[lang]/index.js":
/*!*******************************!*\
  !*** ./pages/[lang]/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layout_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout/public */ \"./layout/public/index.js\");\n/* harmony import */ var _hocs_withLocale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hocs/withLocale */ \"./hocs/withLocale.js\");\n/* harmony import */ var _hooks_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useTranslation */ \"./hooks/useTranslation.js\");\n\nvar _jsxFileName = \"/Users/caokhaminh/Documents/MY_SOURCE/REACTJS/next-demo/pages/[lang]/index.js\";\n\n\n\n\nconst HomePage = () => {\n  const {\n    t,\n    locale\n  } = Object(_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  console.log(locale);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layout_public__WEBPACK_IMPORTED_MODULE_1__[\"PublicLayout\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"home\",\n      children: [\"HOME \", t('about')]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_hocs_withLocale__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HomePage));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bbGFuZ10vaW5kZXguanM/YjJjNiJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInQiLCJsb2NhbGUiLCJ1c2VUcmFuc2xhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ3aXRoTG9jYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUNyQixRQUFNO0FBQUVDLEtBQUY7QUFBS0M7QUFBTCxNQUFnQkMscUVBQWMsRUFBcEM7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILE1BQVo7QUFDQSxzQkFDRSxxRUFBQywyREFBRDtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSwwQkFBNEJELENBQUMsQ0FBQyxPQUFELENBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBUkQ7O0FBVWVLLCtIQUFVLENBQUNOLFFBQUQsQ0FBekIiLCJmaWxlIjoiLi9wYWdlcy9bbGFuZ10vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQdWJsaWNMYXlvdXQgfSBmcm9tICcuLi8uLi9sYXlvdXQvcHVibGljJztcbmltcG9ydCB3aXRoTG9jYWxlIGZyb20gJy4uLy4uL2hvY3Mvd2l0aExvY2FsZSc7XG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnLi4vLi4vaG9va3MvdXNlVHJhbnNsYXRpb24nO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyB0LCBsb2NhbGUgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnNvbGUubG9nKGxvY2FsZSk7XG4gIHJldHVybiAoXG4gICAgPFB1YmxpY0xheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZVwiPkhPTUUge3QoJ2Fib3V0Jyl9PC9kaXY+XG4gICAgPC9QdWJsaWNMYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoTG9jYWxlKEhvbWVQYWdlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[lang]/index.js\n");

/***/ }),

/***/ "next/dist/next-server/lib/utils":
/*!**************************************************!*\
  !*** external "next/dist/next-server/lib/utils" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/utils\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCI/OTVkOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlsc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/dist/next-server/lib/utils\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

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