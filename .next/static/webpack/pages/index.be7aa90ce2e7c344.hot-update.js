"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/game-new/ui/player-info.jsx":
/*!************************************************!*\
  !*** ./components/game-new/ui/player-info.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlayerInfo: function() { return /* binding */ PlayerInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-symbol */ \"./components/game-new/ui/game-symbol.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_timers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/timers */ \"./components/lib/timers.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst PlayerInfo = /*#__PURE__*/ _s((0,react__WEBPACK_IMPORTED_MODULE_5__.memo)(_c = _s(function PlayerInfo(param) {\n    let { isRight, className, avatar, name, rating, symbol, timer, timerStartAt } = param;\n    _s();\n    console.log(\"player info render\".concat(symbol));\n    const now = (0,_lib_timers__WEBPACK_IMPORTED_MODULE_4__.useNow)(1000, timerStartAt);\n    const mils = Math.max(now ? timer - (now - timerStartAt) : timer, 0);\n    const seconds = Math.ceil(mils / 1000); // передается изначально в милисекундах\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\"); //padStart добавит в начало строки символы \"0\" чтоб длина строки стала 2 символа\n    const secondsString = String(seconds % 60).padStart(2, \"0\");\n    const isDanger = seconds < 10;\n    const getTimerColor = ()=>{\n        if (timerStartAt) {\n            return isDanger ? \"text-orange-600\" : \"text-slate-900\";\n        }\n        return \"text-slate-200\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"relative\", isRight && \"order-3\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-2 text-start text-teal-600 w-44\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: avatar,\n                                alt: \"player's avatar\",\n                                className: \"w-12\",\n                                unoptimized: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"overflow-hidden\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg leading-tight truncate \",\n                                        children: name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-slate-400 text-xs leading-tight\",\n                                        children: [\n                                            \"Рейтинг: \",\n                                            rating\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white absolute w-5 h-5 rounded-full shadow -left-1 -top-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_2__.GameSymbol, {\n                            symbol: symbol\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"w-px bg-slate-200 h-6\", isRight && \"order-2\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"text-lg font-semibold w-[60px]\", isRight && \"order-1\", getTimerColor()),\n                children: [\n                    minutesString,\n                    \":\",\n                    secondsString\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}, \"t70lBptlS54ZF8dxX2pScDbDMW0=\", false, function() {\n    return [\n        _lib_timers__WEBPACK_IMPORTED_MODULE_4__.useNow\n    ];\n})), \"t70lBptlS54ZF8dxX2pScDbDMW0=\", false, function() {\n    return [\n        _lib_timers__WEBPACK_IMPORTED_MODULE_4__.useNow\n    ];\n});\n_c1 = PlayerInfo;\nvar _c, _c1;\n$RefreshReg$(_c, \"PlayerInfo$memo\");\n$RefreshReg$(_c1, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L3VpL3BsYXllci1pbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0I7QUFDbUI7QUFDWjtBQUNXO0FBQ2I7QUFFdEIsTUFBTUssMkJBQWFELEdBQUFBLDJDQUFJQSxTQUFDLFNBQVNDLFdBQVcsS0FTbEQ7UUFUa0QsRUFDakRDLE9BQU8sRUFDUEMsU0FBUyxFQUNUQyxNQUFNLEVBQ05DLElBQUksRUFDSkMsTUFBTSxFQUNOQyxNQUFNLEVBQ05DLEtBQUssRUFDTEMsWUFBWSxFQUNiLEdBVGtEOztJQVVqREMsUUFBUUMsR0FBRyxDQUFDLHFCQUE0QixPQUFQSjtJQUNqQyxNQUFNSyxNQUFNYixtREFBTUEsQ0FBQyxNQUFNVTtJQUN6QixNQUFNSSxPQUFPQyxLQUFLQyxHQUFHLENBQUNILE1BQU1KLFFBQVNJLENBQUFBLE1BQU1ILFlBQVcsSUFBS0QsT0FBTztJQUNsRSxNQUFNUSxVQUFVRixLQUFLRyxJQUFJLENBQUNKLE9BQU8sT0FBTyx1Q0FBdUM7SUFDL0UsTUFBTUssZ0JBQWdCQyxPQUFPTCxLQUFLTSxLQUFLLENBQUNKLFVBQVUsS0FBS0ssUUFBUSxDQUFDLEdBQUcsTUFBTSxnRkFBZ0Y7SUFDekosTUFBTUMsZ0JBQWdCSCxPQUFPSCxVQUFVLElBQUlLLFFBQVEsQ0FBQyxHQUFHO0lBQ3ZELE1BQU1FLFdBQVdQLFVBQVU7SUFFM0IsTUFBTVEsZ0JBQWdCO1FBQ3BCLElBQUlmLGNBQWM7WUFDaEIsT0FBT2MsV0FBVyxvQkFBb0I7UUFDeEM7UUFDQSxPQUFPO0lBQ1Q7SUFDQSxxQkFDRSw4REFBQ0U7UUFBSXRCLFdBQVU7OzBCQUNiLDhEQUFDc0I7Z0JBQUl0QixXQUFXUCxnREFBSUEsQ0FBQyxZQUFZTSxXQUFXOztrQ0FDMUMsOERBQUN1Qjt3QkFBSXRCLFdBQVU7OzBDQUNiLDhEQUFDTCxtREFBS0E7Z0NBQ0o0QixLQUFLdEI7Z0NBQ0x1QixLQUFJO2dDQUNKeEIsV0FBVTtnQ0FDVnlCLFdBQVc7Ozs7OzswQ0FFYiw4REFBQ0g7Z0NBQUl0QixXQUFVOztrREFDYiw4REFBQ3NCO3dDQUFJdEIsV0FBVTtrREFBbUNFOzs7Ozs7a0RBQ2xELDhEQUFDb0I7d0NBQUl0QixXQUFVOzs0Q0FBdUM7NENBQzFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLaEIsOERBQUNtQjt3QkFBSXRCLFdBQVU7a0NBQ2IsNEVBQUNOLG9EQUFVQTs0QkFBQ1UsUUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUd4Qiw4REFBQ2tCO2dCQUFJdEIsV0FBV1AsZ0RBQUlBLENBQUMseUJBQXlCTSxXQUFXOzs7Ozs7MEJBQ3pELDhEQUFDdUI7Z0JBQ0N0QixXQUFXUCxnREFBSUEsQ0FDYixrQ0FDQU0sV0FBVyxXQUNYc0I7O29CQUdETjtvQkFBYztvQkFBRUk7Ozs7Ozs7Ozs7Ozs7QUFJekI7O1FBL0NjdkIsK0NBQU1BOzs7O1FBQU5BLCtDQUFNQTs7R0ErQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS1uZXcvdWkvcGxheWVyLWluZm8uanN4P2YyYzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHsgR2FtZVN5bWJvbCB9IGZyb20gXCIuL2dhbWUtc3ltYm9sXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VOb3cgfSBmcm9tIFwiLi4vLi4vbGliL3RpbWVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgUGxheWVySW5mbyA9IG1lbW8oZnVuY3Rpb24gUGxheWVySW5mbyh7XHJcbiAgaXNSaWdodCxcclxuICBjbGFzc05hbWUsXHJcbiAgYXZhdGFyLFxyXG4gIG5hbWUsXHJcbiAgcmF0aW5nLFxyXG4gIHN5bWJvbCxcclxuICB0aW1lcixcclxuICB0aW1lclN0YXJ0QXQsXHJcbn0pIHtcclxuICBjb25zb2xlLmxvZyhgcGxheWVyIGluZm8gcmVuZGVyJHtzeW1ib2x9YCk7XHJcbiAgY29uc3Qgbm93ID0gdXNlTm93KDEwMDAsIHRpbWVyU3RhcnRBdCk7XHJcbiAgY29uc3QgbWlscyA9IE1hdGgubWF4KG5vdyA/IHRpbWVyIC0gKG5vdyAtIHRpbWVyU3RhcnRBdCkgOiB0aW1lciwgMCk7XHJcbiAgY29uc3Qgc2Vjb25kcyA9IE1hdGguY2VpbChtaWxzIC8gMTAwMCk7IC8vINC/0LXRgNC10LTQsNC10YLRgdGPINC40LfQvdCw0YfQsNC70YzQvdC+INCyINC80LjQu9C40YHQtdC60YPQvdC00LDRhVxyXG4gIGNvbnN0IG1pbnV0ZXNTdHJpbmcgPSBTdHJpbmcoTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApKS5wYWRTdGFydCgyLCBcIjBcIik7IC8vcGFkU3RhcnQg0LTQvtCx0LDQstC40YIg0LIg0L3QsNGH0LDQu9C+INGB0YLRgNC+0LrQuCDRgdC40LzQstC+0LvRiyBcIjBcIiDRh9GC0L7QsSDQtNC70LjQvdCwINGB0YLRgNC+0LrQuCDRgdGC0LDQu9CwIDIg0YHQuNC80LLQvtC70LBcclxuICBjb25zdCBzZWNvbmRzU3RyaW5nID0gU3RyaW5nKHNlY29uZHMgJSA2MCkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gIGNvbnN0IGlzRGFuZ2VyID0gc2Vjb25kcyA8IDEwO1xyXG5cclxuICBjb25zdCBnZXRUaW1lckNvbG9yID0gKCkgPT4ge1xyXG4gICAgaWYgKHRpbWVyU3RhcnRBdCkge1xyXG4gICAgICByZXR1cm4gaXNEYW5nZXIgPyBcInRleHQtb3JhbmdlLTYwMFwiIDogXCJ0ZXh0LXNsYXRlLTkwMFwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwidGV4dC1zbGF0ZS0yMDBcIjtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTMgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KFwicmVsYXRpdmVcIiwgaXNSaWdodCAmJiBcIm9yZGVyLTNcIil9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zdGFydCB0ZXh0LXRlYWwtNjAwIHctNDRcIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9e2F2YXRhcn1cclxuICAgICAgICAgICAgYWx0PVwicGxheWVyJ3MgYXZhdGFyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMlwiXHJcbiAgICAgICAgICAgIHVub3B0aW1pemVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxlYWRpbmctdGlnaHQgdHJ1bmNhdGUgXCI+e25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDAgdGV4dC14cyBsZWFkaW5nLXRpZ2h0XCI+XHJcbiAgICAgICAgICAgICAg0KDQtdC50YLQuNC90LM6IHtyYXRpbmd9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgYWJzb2x1dGUgdy01IGgtNSByb3VuZGVkLWZ1bGwgc2hhZG93IC1sZWZ0LTEgLXRvcC0xIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8R2FtZVN5bWJvbCBzeW1ib2w9e3N5bWJvbH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KFwidy1weCBiZy1zbGF0ZS0yMDAgaC02XCIsIGlzUmlnaHQgJiYgXCJvcmRlci0yXCIpfSAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgXCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdy1bNjBweF1cIixcclxuICAgICAgICAgIGlzUmlnaHQgJiYgXCJvcmRlci0xXCIsXHJcbiAgICAgICAgICBnZXRUaW1lckNvbG9yKCksXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIHttaW51dGVzU3RyaW5nfTp7c2Vjb25kc1N0cmluZ31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbImNsc3giLCJHYW1lU3ltYm9sIiwiSW1hZ2UiLCJ1c2VOb3ciLCJtZW1vIiwiUGxheWVySW5mbyIsImlzUmlnaHQiLCJjbGFzc05hbWUiLCJhdmF0YXIiLCJuYW1lIiwicmF0aW5nIiwic3ltYm9sIiwidGltZXIiLCJ0aW1lclN0YXJ0QXQiLCJjb25zb2xlIiwibG9nIiwibm93IiwibWlscyIsIk1hdGgiLCJtYXgiLCJzZWNvbmRzIiwiY2VpbCIsIm1pbnV0ZXNTdHJpbmciLCJTdHJpbmciLCJmbG9vciIsInBhZFN0YXJ0Iiwic2Vjb25kc1N0cmluZyIsImlzRGFuZ2VyIiwiZ2V0VGltZXJDb2xvciIsImRpdiIsInNyYyIsImFsdCIsInVub3B0aW1pemVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game-new/ui/player-info.jsx\n"));

/***/ })

});