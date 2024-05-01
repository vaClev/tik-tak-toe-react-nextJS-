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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlayerInfo: function() { return /* binding */ PlayerInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-symbol */ \"./components/game-new/ui/game-symbol.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_timers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/timers */ \"./components/lib/timers.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction PlayerInfo(param) {\n    let { isRight, className, avatar, name, rating, symbol, timer, timerStartAt } = param;\n    _s();\n    console.log(\"player info render\".concat(symbol));\n    const now = (0,_lib_timers__WEBPACK_IMPORTED_MODULE_4__.useNow)(1000, timerStartAt);\n    const mils = Math.max(now ? timer - (now - timerStartAt) : timer, 0);\n    const seconds = Math.ceil(mils / 1000); // передается изначально в милисекундах\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\"); //padStart добавит в начало строки символы \"0\" чтоб длина строки стала 2 символа\n    const secondsString = String(seconds % 60).padStart(2, \"0\");\n    const isDanger = seconds < 10;\n    const getTimerColor = ()=>{\n        if (timerStartAt) {\n            return isDanger ? \"text-orange-600\" : \"text-slate-900\";\n        }\n        return \"text-slate-200\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"relative\", isRight && \"order-3\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-2 text-start text-teal-600 w-44\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: avatar,\n                                alt: \"player's avatar\",\n                                className: \"w-12\",\n                                unoptimized: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"overflow-hidden\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg leading-tight truncate \",\n                                        children: name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-slate-400 text-xs leading-tight\",\n                                        children: [\n                                            \"Рейтинг: \",\n                                            rating\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white absolute w-5 h-5 rounded-full shadow -left-1 -top-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_2__.GameSymbol, {\n                            symbol: symbol\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"w-px bg-slate-200 h-6\", isRight && \"order-2\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"text-lg font-semibold w-[60px]\", isRight && \"order-1\", getTimerColor()),\n                children: [\n                    minutesString,\n                    \":\",\n                    secondsString\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(PlayerInfo, \"t70lBptlS54ZF8dxX2pScDbDMW0=\", false, function() {\n    return [\n        _lib_timers__WEBPACK_IMPORTED_MODULE_4__.useNow\n    ];\n});\n_c = PlayerInfo;\nvar _c;\n$RefreshReg$(_c, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L3VpL3BsYXllci1pbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0I7QUFDbUI7QUFDWjtBQUNXO0FBQ2I7QUFFdEIsU0FBU0ssV0FBVyxLQVMxQjtRQVQwQixFQUN6QkMsT0FBTyxFQUNQQyxTQUFTLEVBQ1RDLE1BQU0sRUFDTkMsSUFBSSxFQUNKQyxNQUFNLEVBQ05DLE1BQU0sRUFDTkMsS0FBSyxFQUNMQyxZQUFZLEVBQ2IsR0FUMEI7O0lBVXpCQyxRQUFRQyxHQUFHLENBQUMscUJBQTRCLE9BQVBKO0lBQ2pDLE1BQU1LLE1BQU1iLG1EQUFNQSxDQUFDLE1BQU1VO0lBQ3pCLE1BQU1JLE9BQU9DLEtBQUtDLEdBQUcsQ0FBQ0gsTUFBTUosUUFBU0ksQ0FBQUEsTUFBTUgsWUFBVyxJQUFLRCxPQUFPO0lBQ2xFLE1BQU1RLFVBQVVGLEtBQUtHLElBQUksQ0FBQ0osT0FBTyxPQUFPLHVDQUF1QztJQUMvRSxNQUFNSyxnQkFBZ0JDLE9BQU9MLEtBQUtNLEtBQUssQ0FBQ0osVUFBVSxLQUFLSyxRQUFRLENBQUMsR0FBRyxNQUFNLGdGQUFnRjtJQUN6SixNQUFNQyxnQkFBZ0JILE9BQU9ILFVBQVUsSUFBSUssUUFBUSxDQUFDLEdBQUc7SUFDdkQsTUFBTUUsV0FBV1AsVUFBVTtJQUUzQixNQUFNUSxnQkFBZ0I7UUFDcEIsSUFBSWYsY0FBYztZQUNoQixPQUFPYyxXQUFXLG9CQUFvQjtRQUN4QztRQUNBLE9BQU87SUFDVDtJQUNBLHFCQUNFLDhEQUFDRTtRQUFJdEIsV0FBVTs7MEJBQ2IsOERBQUNzQjtnQkFBSXRCLFdBQVdQLGdEQUFJQSxDQUFDLFlBQVlNLFdBQVc7O2tDQUMxQyw4REFBQ3VCO3dCQUFJdEIsV0FBVTs7MENBQ2IsOERBQUNMLG1EQUFLQTtnQ0FDSjRCLEtBQUt0QjtnQ0FDTHVCLEtBQUk7Z0NBQ0p4QixXQUFVO2dDQUNWeUIsV0FBVzs7Ozs7OzBDQUViLDhEQUFDSDtnQ0FBSXRCLFdBQVU7O2tEQUNiLDhEQUFDc0I7d0NBQUl0QixXQUFVO2tEQUFtQ0U7Ozs7OztrREFDbEQsOERBQUNvQjt3Q0FBSXRCLFdBQVU7OzRDQUF1Qzs0Q0FDMUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUtoQiw4REFBQ21CO3dCQUFJdEIsV0FBVTtrQ0FDYiw0RUFBQ04sb0RBQVVBOzRCQUFDVSxRQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDa0I7Z0JBQUl0QixXQUFXUCxnREFBSUEsQ0FBQyx5QkFBeUJNLFdBQVc7Ozs7OzswQkFDekQsOERBQUN1QjtnQkFDQ3RCLFdBQVdQLGdEQUFJQSxDQUNiLGtDQUNBTSxXQUFXLFdBQ1hzQjs7b0JBR0ROO29CQUFjO29CQUFFSTs7Ozs7Ozs7Ozs7OztBQUl6QjtHQTFEZ0JyQjs7UUFXRkYsK0NBQU1BOzs7S0FYSkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLW5ldy91aS9wbGF5ZXItaW5mby5qc3g/ZjJjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgeyBHYW1lU3ltYm9sIH0gZnJvbSBcIi4vZ2FtZS1zeW1ib2xcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZU5vdyB9IGZyb20gXCIuLi8uLi9saWIvdGltZXJzXCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXJJbmZvKHtcclxuICBpc1JpZ2h0LFxyXG4gIGNsYXNzTmFtZSxcclxuICBhdmF0YXIsXHJcbiAgbmFtZSxcclxuICByYXRpbmcsXHJcbiAgc3ltYm9sLFxyXG4gIHRpbWVyLFxyXG4gIHRpbWVyU3RhcnRBdCxcclxufSkge1xyXG4gIGNvbnNvbGUubG9nKGBwbGF5ZXIgaW5mbyByZW5kZXIke3N5bWJvbH1gKTtcclxuICBjb25zdCBub3cgPSB1c2VOb3coMTAwMCwgdGltZXJTdGFydEF0KTtcclxuICBjb25zdCBtaWxzID0gTWF0aC5tYXgobm93ID8gdGltZXIgLSAobm93IC0gdGltZXJTdGFydEF0KSA6IHRpbWVyLCAwKTtcclxuICBjb25zdCBzZWNvbmRzID0gTWF0aC5jZWlsKG1pbHMgLyAxMDAwKTsgLy8g0L/QtdGA0LXQtNCw0LXRgtGB0Y8g0LjQt9C90LDRh9Cw0LvRjNC90L4g0LIg0LzQuNC70LjRgdC10LrRg9C90LTQsNGFXHJcbiAgY29uc3QgbWludXRlc1N0cmluZyA9IFN0cmluZyhNYXRoLmZsb29yKHNlY29uZHMgLyA2MCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTsgLy9wYWRTdGFydCDQtNC+0LHQsNCy0LjRgiDQsiDQvdCw0YfQsNC70L4g0YHRgtGA0L7QutC4INGB0LjQvNCy0L7Qu9GLIFwiMFwiINGH0YLQvtCxINC00LvQuNC90LAg0YHRgtGA0L7QutC4INGB0YLQsNC70LAgMiDRgdC40LzQstC+0LvQsFxyXG4gIGNvbnN0IHNlY29uZHNTdHJpbmcgPSBTdHJpbmcoc2Vjb25kcyAlIDYwKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgY29uc3QgaXNEYW5nZXIgPSBzZWNvbmRzIDwgMTA7XHJcblxyXG4gIGNvbnN0IGdldFRpbWVyQ29sb3IgPSAoKSA9PiB7XHJcbiAgICBpZiAodGltZXJTdGFydEF0KSB7XHJcbiAgICAgIHJldHVybiBpc0RhbmdlciA/IFwidGV4dC1vcmFuZ2UtNjAwXCIgOiBcInRleHQtc2xhdGUtOTAwXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJ0ZXh0LXNsYXRlLTIwMFwiO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMyBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goXCJyZWxhdGl2ZVwiLCBpc1JpZ2h0ICYmIFwib3JkZXItM1wiKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXN0YXJ0IHRleHQtdGVhbC02MDAgdy00NFwiPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17YXZhdGFyfVxyXG4gICAgICAgICAgICBhbHQ9XCJwbGF5ZXIncyBhdmF0YXJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEyXCJcclxuICAgICAgICAgICAgdW5vcHRpbWl6ZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgbGVhZGluZy10aWdodCB0cnVuY2F0ZSBcIj57bmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMCB0ZXh0LXhzIGxlYWRpbmctdGlnaHRcIj5cclxuICAgICAgICAgICAgICDQoNC10LnRgtC40L3Qszoge3JhdGluZ31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBhYnNvbHV0ZSB3LTUgaC01IHJvdW5kZWQtZnVsbCBzaGFkb3cgLWxlZnQtMSAtdG9wLTEgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxHYW1lU3ltYm9sIHN5bWJvbD17c3ltYm9sfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goXCJ3LXB4IGJnLXNsYXRlLTIwMCBoLTZcIiwgaXNSaWdodCAmJiBcIm9yZGVyLTJcIil9IC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICBcInRleHQtbGcgZm9udC1zZW1pYm9sZCB3LVs2MHB4XVwiLFxyXG4gICAgICAgICAgaXNSaWdodCAmJiBcIm9yZGVyLTFcIixcclxuICAgICAgICAgIGdldFRpbWVyQ29sb3IoKSxcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAge21pbnV0ZXNTdHJpbmd9OntzZWNvbmRzU3RyaW5nfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNsc3giLCJHYW1lU3ltYm9sIiwiSW1hZ2UiLCJ1c2VOb3ciLCJtZW1vIiwiUGxheWVySW5mbyIsImlzUmlnaHQiLCJjbGFzc05hbWUiLCJhdmF0YXIiLCJuYW1lIiwicmF0aW5nIiwic3ltYm9sIiwidGltZXIiLCJ0aW1lclN0YXJ0QXQiLCJjb25zb2xlIiwibG9nIiwibm93IiwibWlscyIsIk1hdGgiLCJtYXgiLCJzZWNvbmRzIiwiY2VpbCIsIm1pbnV0ZXNTdHJpbmciLCJTdHJpbmciLCJmbG9vciIsInBhZFN0YXJ0Iiwic2Vjb25kc1N0cmluZyIsImlzRGFuZ2VyIiwiZ2V0VGltZXJDb2xvciIsImRpdiIsInNyYyIsImFsdCIsInVub3B0aW1pemVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game-new/ui/player-info.jsx\n"));

/***/ })

});