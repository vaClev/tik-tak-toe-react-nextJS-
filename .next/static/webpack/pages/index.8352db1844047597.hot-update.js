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

/***/ "./components/uikit/ui-text-field.jsx":
/*!********************************************!*\
  !*** ./components/uikit/ui-text-field.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UiTextField: function() { return /* binding */ UiTextField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/**\r\n * @param {{\r\n * label?: string,\r\n * required: boolean,\r\n * helperText?: string,\r\n * errorText?: string,\r\n * }} props\r\n * @returns\r\n */ \n\nfunction UiTextField(param) {\n    let { label, required, helperText, errorText, ...inputProps } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"mx-auto max-w-xs\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                !!label && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    for: \"example2\",\n                    class: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(required && \"after:text-orange-600 after:content-['*']\", \"mb-1 block text-sm font-medium text-slate-900 after:ml-0.5\"),\n                    children: label\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\uikit\\\\ui-text-field.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"email\",\n                    id: \"example2\",\n                    class: \"block w-full rounded-md border-slate-200 shadow-sm    px-1 py-2 leading-tight outline-0 border   focus:border-teal-600 focus:ring focus:ring-teal-600/20   focus:ring-opacity-50 disabled:cursor-not-allowed   disabled:bg-gray-50 disabled:text-gray-500\",\n                    placeholder: \"you@email.com\",\n                    ...inputProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\uikit\\\\ui-text-field.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                (helperText || errorText) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    class: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"mt-1 text-sm\", errorText ? \"text-orange-600\" : \"text-slate-400\"),\n                    children: [\n                        errorText !== null && errorText !== void 0 ? errorText : helperText,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\uikit\\\\ui-text-field.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\uikit\\\\ui-text-field.jsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\uikit\\\\ui-text-field.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c = UiTextField;\nvar _c;\n$RefreshReg$(_c, \"UiTextField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Vpa2l0L3VpLXRleHQtZmllbGQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Q0FRQztBQUV1QjtBQUVqQixTQUFTQyxZQUFZLEtBTTNCO1FBTjJCLEVBQzFCQyxLQUFLLEVBQ0xDLFFBQVEsRUFDUkMsVUFBVSxFQUNWQyxTQUFTLEVBQ1QsR0FBR0MsWUFDSixHQU4yQjtJQU8xQixxQkFDRSw4REFBQ0M7UUFBSUMsT0FBTTtrQkFDVCw0RUFBQ0Q7O2dCQUNFLENBQUMsQ0FBQ0wsdUJBQ0QsOERBQUNBO29CQUNDTyxLQUFJO29CQUNKRCxPQUFPUixnREFBSUEsQ0FDVEcsWUFBWSw2Q0FDWjs4QkFHREQ7Ozs7Ozs4QkFJTCw4REFBQ1E7b0JBQ0NDLE1BQUs7b0JBQ0xDLElBQUc7b0JBQ0hKLE9BQU07b0JBS05LLGFBQVk7b0JBQ1gsR0FBR1AsVUFBVTs7Ozs7O2dCQUVkRixDQUFBQSxjQUFjQyxTQUFRLG1CQUN0Qiw4REFBQ1M7b0JBQ0NOLE9BQU9SLGdEQUFJQSxDQUNULGdCQUNBSyxZQUFZLG9CQUFvQjs7d0JBR2pDQSxzQkFBQUEsdUJBQUFBLFlBQWFEO3dCQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckM7S0E5Q2dCSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Vpa2l0L3VpLXRleHQtZmllbGQuanN4P2U0Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBwYXJhbSB7e1xyXG4gKiBsYWJlbD86IHN0cmluZyxcclxuICogcmVxdWlyZWQ6IGJvb2xlYW4sXHJcbiAqIGhlbHBlclRleHQ/OiBzdHJpbmcsXHJcbiAqIGVycm9yVGV4dD86IHN0cmluZyxcclxuICogfX0gcHJvcHNcclxuICogQHJldHVybnNcclxuICovXHJcblxyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFVpVGV4dEZpZWxkKHtcclxuICBsYWJlbCxcclxuICByZXF1aXJlZCxcclxuICBoZWxwZXJUZXh0LFxyXG4gIGVycm9yVGV4dCxcclxuICAuLi5pbnB1dFByb3BzXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzcz1cIm14LWF1dG8gbWF4LXcteHNcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7ISFsYWJlbCAmJiAoXHJcbiAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgZm9yPVwiZXhhbXBsZTJcIlxyXG4gICAgICAgICAgICBjbGFzcz17Y2xzeChcclxuICAgICAgICAgICAgICByZXF1aXJlZCAmJiBcImFmdGVyOnRleHQtb3JhbmdlLTYwMCBhZnRlcjpjb250ZW50LVsnKiddXCIsXHJcbiAgICAgICAgICAgICAgXCJtYi0xIGJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS05MDAgYWZ0ZXI6bWwtMC41XCIsXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgaWQ9XCJleGFtcGxlMlwiXHJcbiAgICAgICAgICBjbGFzcz1cImJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlci1zbGF0ZS0yMDAgc2hhZG93LXNtIFxyXG4gICAgICAgICAgcHgtMSBweS0yIGxlYWRpbmctdGlnaHQgb3V0bGluZS0wIGJvcmRlclxyXG4gICAgICAgICAgZm9jdXM6Ym9yZGVyLXRlYWwtNjAwIGZvY3VzOnJpbmcgZm9jdXM6cmluZy10ZWFsLTYwMC8yMFxyXG4gICAgICAgICAgZm9jdXM6cmluZy1vcGFjaXR5LTUwIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZFxyXG4gICAgICAgICAgZGlzYWJsZWQ6YmctZ3JheS01MCBkaXNhYmxlZDp0ZXh0LWdyYXktNTAwXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwieW91QGVtYWlsLmNvbVwiXHJcbiAgICAgICAgICB7Li4uaW5wdXRQcm9wc31cclxuICAgICAgICAvPlxyXG4gICAgICAgIHsoaGVscGVyVGV4dCB8fCBlcnJvclRleHQpICYmIChcclxuICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgIGNsYXNzPXtjbHN4KFxyXG4gICAgICAgICAgICAgIFwibXQtMSB0ZXh0LXNtXCIsXHJcbiAgICAgICAgICAgICAgZXJyb3JUZXh0ID8gXCJ0ZXh0LW9yYW5nZS02MDBcIiA6IFwidGV4dC1zbGF0ZS00MDBcIixcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2Vycm9yVGV4dCA/PyBoZWxwZXJUZXh0fSB7LyogZXJyb3JUZXh0ID8gZXJyb3JUZXh0IDogaGVscGVyVGV4dCAqL31cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNsc3giLCJVaVRleHRGaWVsZCIsImxhYmVsIiwicmVxdWlyZWQiLCJoZWxwZXJUZXh0IiwiZXJyb3JUZXh0IiwiaW5wdXRQcm9wcyIsImRpdiIsImNsYXNzIiwiZm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/uikit/ui-text-field.jsx\n"));

/***/ })

});