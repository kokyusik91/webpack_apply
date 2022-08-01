/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./styles/start.scss":
/*!***************************!*\
  !*** ./styles/start.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/func.ts":
/*!*********************!*\
  !*** ./src/func.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sum": () => (/* binding */ sum)
/* harmony export */ });
function sum(a, b) {
    return a + b;
}


/***/ }),

/***/ "./src/loaded.ts":
/*!***********************!*\
  !*** ./src/loaded.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domInit": () => (/* binding */ domInit)
/* harmony export */ });
function domInit() {
    console.log("이닛");
    var body = document.querySelector('body');
    var element = document.createElement('div');
    element.innerHTML = 'Dom이 로드 되었습니다.';
    element.style.color = '#ff4949';
    element.style.fontSize = '40px';
    body.appendChild(element);
}


/***/ }),

/***/ "./src/paragraph.ts":
/*!**************************!*\
  !*** ./src/paragraph.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clicker": () => (/* binding */ clicker)
/* harmony export */ });
function clicker() {
    var paragraph = document.querySelector('.paragraph');
    function clickHandler() {
        this.classList.add('is-active');
    }
    paragraph.addEventListener('click', clickHandler);
}


/***/ }),

/***/ "./src/title.ts":
/*!**********************!*\
  !*** ./src/title.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "titleChange": () => (/* binding */ titleChange)
/* harmony export */ });
function titleChange() {
    var title = document.querySelector('.title');
    function clickHandler() {
        title.classList.add('is-active');
    }
    title.addEventListener('click', clickHandler);
}


/***/ }),

/***/ "./assets/images/chick.jpeg":
/*!**********************************!*\
  !*** ./assets/images/chick.jpeg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/chick.jpeg?90620fe59200fc13e22b9c35cc331ce8");

/***/ }),

/***/ "./assets/images/nyncat.png":
/*!**********************************!*\
  !*** ./assets/images/nyncat.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/nyncat.png?3f7910dd324bfa804ac2ebd56625d2b4");

/***/ }),

/***/ "./assets/images/sad-frog.png":
/*!************************************!*\
  !*** ./assets/images/sad-frog.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/sad-frog.png?961ebdcb15a7d3704168dbf5c0ecf84e");

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
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_start_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/start.scss */ "./styles/start.scss");
/* harmony import */ var _assets_images_chick_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/chick.jpeg */ "./assets/images/chick.jpeg");
/* harmony import */ var _assets_images_nyncat_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/nyncat.png */ "./assets/images/nyncat.png");
/* harmony import */ var _assets_images_sad_frog_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/sad-frog.png */ "./assets/images/sad-frog.png");
/* harmony import */ var _src_func__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/func */ "./src/func.ts");
/* harmony import */ var _src_loaded__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/loaded */ "./src/loaded.ts");
/* harmony import */ var _src_paragraph__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/paragraph */ "./src/paragraph.ts");
/* harmony import */ var _src_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/title */ "./src/title.ts");








window.addEventListener('DOMContentLoaded', function () {
    (0,_src_loaded__WEBPACK_IMPORTED_MODULE_5__.domInit)();
    (0,_src_paragraph__WEBPACK_IMPORTED_MODULE_6__.clicker)();
    (0,_src_title__WEBPACK_IMPORTED_MODULE_7__.titleChange)();
    console.log((0,_src_func__WEBPACK_IMPORTED_MODULE_4__.sum)(9999, 1));
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FPLFNBQVMsR0FBRyxDQUFDLENBQVUsRUFBRSxDQUFVO0lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0ZNLFNBQVMsT0FBTztJQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxPQUFPLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO0lBQ3JDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7SUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM1QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNSTSxTQUFTLE9BQU87SUFDckIsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUV6RCxTQUFTLFlBQVk7UUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDO0FBQ2pELENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1JNLFNBQVMsV0FBVztJQUN6QixJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRWpELFNBQVMsWUFBWTtRQUNuQixLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztBQUM5QyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNSRCxpRUFBZSxxQkFBdUIsOERBQThEOzs7Ozs7Ozs7Ozs7OztBQ0FwRyxpRUFBZSxxQkFBdUIsOERBQThEOzs7Ozs7Ozs7Ozs7OztBQ0FwRyxpRUFBZSxxQkFBdUIsZ0VBQWdFOzs7Ozs7VUNBdEc7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmNkI7QUFDTztBQUNBO0FBQ0U7QUFFUDtBQUNLO0FBQ0k7QUFDQTtBQUV4QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUU7SUFDMUMsb0RBQU8sRUFBRSxDQUFDO0lBQ1YsdURBQU8sRUFBRSxDQUFDO0lBQ1YsdURBQVcsRUFBRSxDQUFDO0lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4Q0FBRyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3N0eWxlcy9zdGFydC5zY3NzP2MzYzkiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL2Z1bmMudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL2xvYWRlZC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvcGFyYWdyYXBoLnRzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy90aXRsZS50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvaW1hZ2VzL2NoaWNrLmpwZWciLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL2ltYWdlcy9ueW5jYXQucG5nIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9pbWFnZXMvc2FkLWZyb2cucG5nIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZnVuY3Rpb24gc3VtKGEgOiBudW1iZXIsIGIgOiBudW1iZXIpOm51bWJlcntcbiAgcmV0dXJuIGEgKyBiO1xufSIsImV4cG9ydCBmdW5jdGlvbiBkb21Jbml0KCl7XG4gIGNvbnNvbGUubG9nKFwi7J2064ubXCIpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gJ0RvbeydtCDroZzrk5wg65CY7JeI7Iq164uI64ukLic7XG4gIGVsZW1lbnQuc3R5bGUuY29sb3IgPSAnI2ZmNDk0OSc7XG4gIGVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSAnNDBweCc7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY2xpY2tlcigpe1xuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFyYWdyYXBoJyk7XG5cbmZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpe1xuICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xufVxuXG5wYXJhZ3JhcGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHRpdGxlQ2hhbmdlKCl7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG5cbmZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpe1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbn1cblxudGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2NoaWNrLmpwZWc/OTA2MjBmZTU5MjAwZmMxM2UyMmI5YzM1Y2MzMzFjZThcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9ueW5jYXQucG5nPzNmNzkxMGRkMzI0YmZhODA0YWMyZWJkNTY2MjVkMmI0XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvc2FkLWZyb2cucG5nPzk2MWViZGNiMTVhN2QzNzA0MTY4ZGJmNWMwZWNmODRlXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdGFydC5zY3NzJztcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2NoaWNrLmpwZWcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9pbWFnZXMvbnluY2F0LnBuZyc7XG5pbXBvcnQgJy4vYXNzZXRzL2ltYWdlcy9zYWQtZnJvZy5wbmcnO1xuXG5pbXBvcnQge3N1bX0gZnJvbSAnLi9zcmMvZnVuYyc7XG5pbXBvcnQge2RvbUluaXR9IGZyb20gJy4vc3JjL2xvYWRlZCdcbmltcG9ydCB7Y2xpY2tlcn0gZnJvbSAnLi9zcmMvcGFyYWdyYXBoJztcbmltcG9ydCB7dGl0bGVDaGFuZ2V9IGZyb20gJy4vc3JjL3RpdGxlJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xuICBkb21Jbml0KCk7XG4gIGNsaWNrZXIoKTtcbiAgdGl0bGVDaGFuZ2UoKTtcbiAgY29uc29sZS5sb2coc3VtKDk5OTksMSkpO1xufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==