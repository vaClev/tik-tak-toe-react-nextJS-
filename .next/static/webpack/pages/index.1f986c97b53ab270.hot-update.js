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

/***/ "./components/uikit/fields/ui-superSelectHEADLESS.jsx":
/*!************************************************************!*\
  !*** ./components/uikit/fields/ui-superSelectHEADLESS.jsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UiSuperSelect: function() { return /* binding */ UiSuperSelect; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Listbox_ListboxButton_ListboxOption_ListboxOptions_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Listbox,ListboxButton,ListboxOption,ListboxOptions,Transition!=!@headlessui/react */ \"__barrel_optimize__?names=Listbox,ListboxButton,ListboxOption,ListboxOptions,Transition!=!./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ChevronDownIcon_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ChevronDownIcon!=!@heroicons/react/20/solid */ \"__barrel_optimize__?names=CheckIcon,ChevronDownIcon!=!./node_modules/@heroicons/react/20/solid/esm/index.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction UiSuperSelect(param) {\n    let { options } = param;\n    _s();\n    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(options[1]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Listbox_ListboxButton_ListboxOption_ListboxOptions_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Listbox, {\n            value: selected,\n            onChange: setSelected,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Listbox_ListboxButton_ListboxOption_ListboxOptions_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.ListboxButton, {\n                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"relative block w-full rounded-lg py-1.5 pl-1 text-left  text-gray-500\", \"shadow-sm border border-slate-200\", \"focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25\"),\n                    children: [\n                        selected,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ChevronDownIcon_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__.ChevronDownIcon, {\n                            className: \"group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-slate-500\",\n                            \"aria-hidden\": \"true\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\uikit\\\\fields\\\\ui-superSelectHEADLESS.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\uikit\\\\fields\\\\ui-superSelectHEADLESS.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Listbox_ListboxButton_ListboxOption_ListboxOptions_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition, {\n                    leave: \"transition ease-in duration-100\",\n                    leaveFrom: \"opacity-100\",\n                    leaveTo: \"opacity-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Listbox_ListboxButton_ListboxOption_ListboxOptions_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.ListboxOptions, {\n                        anchor: \"bottom\",\n                        className: \"w-[var(--button-width)] rounded-xl border border-slate-200 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none\",\n                        children: options === null || options === void 0 ? void 0 : options.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Listbox_ListboxButton_ListboxOption_ListboxOptions_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.ListboxOption, {\n                                value: item,\n                                className: \"group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-slate-200\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ChevronDownIcon_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__.CheckIcon, {\n                                        className: \"invisible size-4 fill-slate-500 group-data-[selected]:visible\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\uikit\\\\fields\\\\ui-superSelectHEADLESS.jsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-sm/6 text-slate-500\",\n                                        children: item\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\uikit\\\\fields\\\\ui-superSelectHEADLESS.jsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, item, true, {\n                                fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\uikit\\\\fields\\\\ui-superSelectHEADLESS.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\uikit\\\\fields\\\\ui-superSelectHEADLESS.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\uikit\\\\fields\\\\ui-superSelectHEADLESS.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\uikit\\\\fields\\\\ui-superSelectHEADLESS.jsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\uikit\\\\fields\\\\ui-superSelectHEADLESS.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(UiSuperSelect, \"GqwUcsqVbIXAXTXPqmM+Bq/4WEA=\");\n_c = UiSuperSelect;\nvar _c;\n$RefreshReg$(_c, \"UiSuperSelect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Vpa2l0L2ZpZWxkcy91aS1zdXBlclNlbGVjdEhFQURMRVNTLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBTTJCO0FBQzRDO0FBQy9DO0FBQ1M7QUFFMUIsU0FBU1MsY0FBYyxLQUFXO1FBQVgsRUFBRUMsT0FBTyxFQUFFLEdBQVg7O0lBQzVCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQ0UsT0FBTyxDQUFDLEVBQUU7SUFFbkQscUJBQ0UsOERBQUNHO2tCQUNDLDRFQUFDYiwwSUFBT0E7WUFBQ2MsT0FBT0g7WUFBVUksVUFBVUg7OzhCQUNsQyw4REFBQ1gsZ0pBQWFBO29CQUNaZSxXQUFXVCxnREFBSUEsQ0FDYix5RUFDQSxxQ0FDQTs7d0JBR0RJO3NDQUNELDhEQUFDTCxzSEFBZUE7NEJBQ2RVLFdBQVU7NEJBQ1ZDLGVBQVk7Ozs7Ozs7Ozs7Ozs4QkFHaEIsOERBQUNiLDZJQUFVQTtvQkFDVGMsT0FBTTtvQkFDTkMsV0FBVTtvQkFDVkMsU0FBUTs4QkFFUiw0RUFBQ2pCLGlKQUFjQTt3QkFDYmtCLFFBQU87d0JBQ1BMLFdBQVU7a0NBRVROLG9CQUFBQSw4QkFBQUEsUUFBU1ksR0FBRyxDQUFDLENBQUNDLHFCQUNiLDhEQUFDckIsZ0pBQWFBO2dDQUVaWSxPQUFPUztnQ0FDUFAsV0FBVTs7a0RBRVYsOERBQUNYLGdIQUFTQTt3Q0FBQ1csV0FBVTs7Ozs7O2tEQUNyQiw4REFBQ0g7d0NBQUlHLFdBQVU7a0RBQTRCTzs7Ozs7OzsrQkFMdENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFyQjtHQTNDZ0JkO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWlraXQvZmllbGRzL3VpLXN1cGVyU2VsZWN0SEVBRExFU1MuanN4PzUzNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBMaXN0Ym94LFxyXG4gIExpc3Rib3hCdXR0b24sXHJcbiAgTGlzdGJveE9wdGlvbixcclxuICBMaXN0Ym94T3B0aW9ucyxcclxuICBUcmFuc2l0aW9uLFxyXG59IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBDaGVja0ljb24sIENoZXZyb25Eb3duSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzIwL3NvbGlkXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVWlTdXBlclNlbGVjdCh7IG9wdGlvbnMgfSkge1xyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUob3B0aW9uc1sxXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TGlzdGJveCB2YWx1ZT17c2VsZWN0ZWR9IG9uQ2hhbmdlPXtzZXRTZWxlY3RlZH0+XHJcbiAgICAgICAgPExpc3Rib3hCdXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgXCJyZWxhdGl2ZSBibG9jayB3LWZ1bGwgcm91bmRlZC1sZyBweS0xLjUgcGwtMSB0ZXh0LWxlZnQgIHRleHQtZ3JheS01MDBcIixcclxuICAgICAgICAgICAgXCJzaGFkb3ctc20gYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDBcIixcclxuICAgICAgICAgICAgXCJmb2N1czpvdXRsaW5lLW5vbmUgZGF0YS1bZm9jdXNdOm91dGxpbmUtMiBkYXRhLVtmb2N1c106LW91dGxpbmUtb2Zmc2V0LTIgZGF0YS1bZm9jdXNdOm91dGxpbmUtd2hpdGUvMjVcIixcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3NlbGVjdGVkfVxyXG4gICAgICAgICAgPENoZXZyb25Eb3duSWNvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCBwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIHRvcC0yLjUgcmlnaHQtMi41IHNpemUtNCBmaWxsLXNsYXRlLTUwMFwiXHJcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGlzdGJveEJ1dHRvbj5cclxuICAgICAgICA8VHJhbnNpdGlvblxyXG4gICAgICAgICAgbGVhdmU9XCJ0cmFuc2l0aW9uIGVhc2UtaW4gZHVyYXRpb24tMTAwXCJcclxuICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaXN0Ym94T3B0aW9uc1xyXG4gICAgICAgICAgICBhbmNob3I9XCJib3R0b21cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVt2YXIoLS1idXR0b24td2lkdGgpXSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtMjAwIGJnLXdoaXRlLzUgcC0xIFstLWFuY2hvci1nYXA6dmFyKC0tc3BhY2luZy0xKV0gZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge29wdGlvbnM/Lm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxMaXN0Ym94T3B0aW9uXHJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIGZsZXggY3Vyc29yLWRlZmF1bHQgaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtbGcgcHktMS41IHB4LTMgc2VsZWN0LW5vbmUgZGF0YS1bZm9jdXNdOmJnLXNsYXRlLTIwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENoZWNrSWNvbiBjbGFzc05hbWU9XCJpbnZpc2libGUgc2l6ZS00IGZpbGwtc2xhdGUtNTAwIGdyb3VwLWRhdGEtW3NlbGVjdGVkXTp2aXNpYmxlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbS82IHRleHQtc2xhdGUtNTAwXCI+e2l0ZW19PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9MaXN0Ym94T3B0aW9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvTGlzdGJveE9wdGlvbnM+XHJcbiAgICAgICAgPC9UcmFuc2l0aW9uPlxyXG4gICAgICA8L0xpc3Rib3g+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMaXN0Ym94IiwiTGlzdGJveEJ1dHRvbiIsIkxpc3Rib3hPcHRpb24iLCJMaXN0Ym94T3B0aW9ucyIsIlRyYW5zaXRpb24iLCJDaGVja0ljb24iLCJDaGV2cm9uRG93bkljb24iLCJjbHN4IiwidXNlU3RhdGUiLCJVaVN1cGVyU2VsZWN0Iiwib3B0aW9ucyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJkaXYiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiY2xhc3NOYW1lIiwiYXJpYS1oaWRkZW4iLCJsZWF2ZSIsImxlYXZlRnJvbSIsImxlYXZlVG8iLCJhbmNob3IiLCJtYXAiLCJpdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/uikit/fields/ui-superSelectHEADLESS.jsx\n"));

/***/ })

});