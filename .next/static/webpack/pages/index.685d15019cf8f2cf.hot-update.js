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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UiTextField: function() { return /* binding */ UiTextField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/**\r\n * @param {{\r\n * label?: string,\r\n * required: boolean,\r\n * helperText?: string,\r\n * errorText?: string,\r\n * className: string,\r\n * }} props\r\n * @returns\r\n */ \n\nfunction UiTextField(param) {\n    let { label, required, helperText, errorText, ...inputProps } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto max-w-xs\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                !!label && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    for: \"example2\",\n                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(required && \"after:text-orange-600 after:content-['*']\", \"mb-1 block text-sm font-medium text-slate-900 after:ml-0.5\"),\n                    children: label\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\uikit\\\\ui-text-field.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"email\",\n                    id: \"example2\",\n                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n                        \"\\n            block w-full rounded-md  shadow-sm\\n            px-1 py-2 leading-tight outline-0 border\\n            focus:ring-opacity-50 disabled:cursor-not-allowed marker:disabled:bg-gray-50 disabled:text-gray-500\\n            \",\n                        errorText ? \"first-line:focus:border-orange-600 focus:ring focus:ring-orange-600/20 border-orange-600\" : \"first-line:focus:border-teal-600 focus:ring focus:ring-teal-600/20 border-slate-200\"\n                    ]),\n                    ...inputProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\uikit\\\\ui-text-field.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                (helperText || errorText) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"mt-1 text-sm\", errorText ? \"text-orange-600\" : \"text-slate-400\"),\n                    children: [\n                        errorText !== null && errorText !== void 0 ? errorText : helperText,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\uikit\\\\ui-text-field.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\uikit\\\\ui-text-field.jsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\uikit\\\\ui-text-field.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_c = UiTextField;\nvar _c;\n$RefreshReg$(_c, \"UiTextField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Vpa2l0L3VpLXRleHQtZmllbGQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O0NBU0M7QUFFdUI7QUFFakIsU0FBU0MsWUFBWSxLQU0zQjtRQU4yQixFQUMxQkMsS0FBSyxFQUNMQyxRQUFRLEVBQ1JDLFVBQVUsRUFDVkMsU0FBUyxFQUNULEdBQUdDLFlBQ0osR0FOMkI7SUFPMUIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEOztnQkFDRSxDQUFDLENBQUNMLHVCQUNELDhEQUFDQTtvQkFDQ08sS0FBSTtvQkFDSkQsV0FBV1IsZ0RBQUlBLENBQ2JHLFlBQVksNkNBQ1o7OEJBR0REOzs7Ozs7OEJBSUwsOERBQUNRO29CQUNDQyxNQUFLO29CQUNMQyxJQUFHO29CQUNISixXQUFXUixnREFBSUEsQ0FBQzt3QkFDYjt3QkFLREssWUFDSyw2RkFDQTtxQkFDTjtvQkFDQSxHQUFHQyxVQUFVOzs7Ozs7Z0JBRWRGLENBQUFBLGNBQWNDLFNBQVEsbUJBQ3RCLDhEQUFDUTtvQkFDQ0wsV0FBV1IsZ0RBQUlBLENBQ2IsZ0JBQ0FLLFlBQVksb0JBQW9COzt3QkFHakNBLHNCQUFBQSx1QkFBQUEsWUFBYUQ7d0JBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yQztLQWxEZ0JIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWlraXQvdWktdGV4dC1maWVsZC5qc3g/ZTRjYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQHBhcmFtIHt7XHJcbiAqIGxhYmVsPzogc3RyaW5nLFxyXG4gKiByZXF1aXJlZDogYm9vbGVhbixcclxuICogaGVscGVyVGV4dD86IHN0cmluZyxcclxuICogZXJyb3JUZXh0Pzogc3RyaW5nLFxyXG4gKiBjbGFzc05hbWU6IHN0cmluZyxcclxuICogfX0gcHJvcHNcclxuICogQHJldHVybnNcclxuICovXHJcblxyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFVpVGV4dEZpZWxkKHtcclxuICBsYWJlbCxcclxuICByZXF1aXJlZCxcclxuICBoZWxwZXJUZXh0LFxyXG4gIGVycm9yVGV4dCxcclxuICAuLi5pbnB1dFByb3BzXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LXhzXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgeyEhbGFiZWwgJiYgKFxyXG4gICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgIGZvcj1cImV4YW1wbGUyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkICYmIFwiYWZ0ZXI6dGV4dC1vcmFuZ2UtNjAwIGFmdGVyOmNvbnRlbnQtWycqJ11cIixcclxuICAgICAgICAgICAgICBcIm1iLTEgYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTkwMCBhZnRlcjptbC0wLjVcIixcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBpZD1cImV4YW1wbGUyXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChbXHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgYmxvY2sgdy1mdWxsIHJvdW5kZWQtbWQgIHNoYWRvdy1zbVxyXG4gICAgICAgICAgICBweC0xIHB5LTIgbGVhZGluZy10aWdodCBvdXRsaW5lLTAgYm9yZGVyXHJcbiAgICAgICAgICAgIGZvY3VzOnJpbmctb3BhY2l0eS01MCBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgbWFya2VyOmRpc2FibGVkOmJnLWdyYXktNTAgZGlzYWJsZWQ6dGV4dC1ncmF5LTUwMFxyXG4gICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICBlcnJvclRleHRcclxuICAgICAgICAgICAgICA/IGBmaXJzdC1saW5lOmZvY3VzOmJvcmRlci1vcmFuZ2UtNjAwIGZvY3VzOnJpbmcgZm9jdXM6cmluZy1vcmFuZ2UtNjAwLzIwIGJvcmRlci1vcmFuZ2UtNjAwYFxyXG4gICAgICAgICAgICAgIDogYGZpcnN0LWxpbmU6Zm9jdXM6Ym9yZGVyLXRlYWwtNjAwIGZvY3VzOnJpbmcgZm9jdXM6cmluZy10ZWFsLTYwMC8yMCBib3JkZXItc2xhdGUtMjAwYCxcclxuICAgICAgICAgIF0pfVxyXG4gICAgICAgICAgey4uLmlucHV0UHJvcHN9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7KGhlbHBlclRleHQgfHwgZXJyb3JUZXh0KSAmJiAoXHJcbiAgICAgICAgICA8cFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgXCJtdC0xIHRleHQtc21cIixcclxuICAgICAgICAgICAgICBlcnJvclRleHQgPyBcInRleHQtb3JhbmdlLTYwMFwiIDogXCJ0ZXh0LXNsYXRlLTQwMFwiLFxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZXJyb3JUZXh0ID8/IGhlbHBlclRleHR9IHsvKiBlcnJvclRleHQgPyBlcnJvclRleHQgOiBoZWxwZXJUZXh0ICovfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiY2xzeCIsIlVpVGV4dEZpZWxkIiwibGFiZWwiLCJyZXF1aXJlZCIsImhlbHBlclRleHQiLCJlcnJvclRleHQiLCJpbnB1dFByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/uikit/ui-text-field.jsx\n"));

/***/ })

});