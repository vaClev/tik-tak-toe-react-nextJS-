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

/***/ "./components/game-new/model/check-winner.js":
/*!***************************************************!*\
  !*** ./components/game-new/model/check-winner.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkWinner: function() { return /* binding */ checkWinner; }\n/* harmony export */ });\nconst size = 19; // 19x19     кол-во клеток на поле\nconst inARow = 5; //19-5 14  кол-во в ряд для победы\nfunction checkWinner(param) {\n    let { cells } = param;\n    console.log(\"checkWinner is running\");\n    for(let i = 0; i < size; i++){\n        for(let j = 0; j < size; j++){\n            if (cells[getIndexCell(i, j)] != null) {\n                let checkIndex = getIndexCell(i, j);\n                let checkSimbol = cells[checkIndex];\n                let winIndexsRow = [\n                    checkIndex\n                ];\n                let winIndexsCol = [\n                    checkIndex\n                ];\n                let winIndexsD1 = [\n                    checkIndex\n                ];\n                let winIndexsD2 = [\n                    checkIndex\n                ];\n                //проверка строки вправо\n                if (j <= size - inARow) {\n                    for(let k = 1; k < inARow; k++){\n                        if (checkSimbol == cells[getIndexCell(i, j + k)]) {\n                            winIndexsRow.push(getIndexCell(i, j + k));\n                        } else {\n                            break;\n                        }\n                    }\n                    if (winIndexsRow.length == inARow) {\n                        return winIndexsRow;\n                    }\n                }\n                //проверка столбца вниз\n                if (i <= size - inARow) {\n                    for(let k = 1; k < inARow; k++){\n                        if (checkSimbol == cells[getIndexCell(i + k, j)]) {\n                            winIndexsCol.push(getIndexCell(i + k, j));\n                        } else {\n                            break;\n                        }\n                    }\n                    if (winIndexsCol.length == inARow) {\n                        return winIndexsCol;\n                    }\n                }\n                //проверка диагонали вниз вправо\n                if (j <= size - inARow && i <= size - inARow) {\n                    for(let k = 1; k < inARow; k++){\n                        if (checkSimbol == cells[getIndexCell(i + k, j + k)]) {\n                            winIndexsD1.push(getIndexCell(i + k, j + k));\n                        } else {\n                            break;\n                        }\n                    }\n                    if (winIndexsD1.length == inARow) {\n                        return winIndexsD1;\n                    }\n                }\n                //проверка диагонали вверх вправо\n                if (j <= size - inARow && i >= inARow - 1) {\n                    for(let k = 1; k < inARow; k++){\n                        if (checkSimbol == cells[getIndexCell(i - k, j + k)]) {\n                            winIndexsD2.push(getIndexCell(i - k, j + k));\n                        } else {\n                            break;\n                        }\n                    }\n                    if (winIndexsD2.length == inARow) {\n                        return winIndexsD2;\n                    }\n                }\n            }\n        }\n    }\n    return undefined;\n}\nfunction getIndexCell(i, j) {\n    return i * size + j;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL2NoZWNrLXdpbm5lci5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsT0FBTyxJQUFJLGtDQUFrQztBQUNuRCxNQUFNQyxTQUFTLEdBQUksa0NBQWtDO0FBRTlDLFNBQVNDLFlBQVksS0FBTztRQUFQLEVBQUNDLEtBQUssRUFBQyxHQUFQO0lBRXhCQyxRQUFRQyxHQUFHLENBQUM7SUFDWixJQUFJLElBQUlDLElBQUksR0FBR0EsSUFBSU4sTUFBTU0sSUFDekI7UUFDSSxJQUFJLElBQUlDLElBQUksR0FBR0EsSUFBSVAsTUFBTU8sSUFDekI7WUFDSSxJQUFJSixLQUFLLENBQUNLLGFBQWFGLEdBQUVDLEdBQUcsSUFBRSxNQUM5QjtnQkFDSSxJQUFJRSxhQUFXRCxhQUFhRixHQUFFQztnQkFDOUIsSUFBSUcsY0FBWVAsS0FBSyxDQUFDTSxXQUFXO2dCQUNqQyxJQUFJRSxlQUFjO29CQUFDRjtpQkFBVztnQkFDOUIsSUFBSUcsZUFBZTtvQkFBQ0g7aUJBQVc7Z0JBQy9CLElBQUlJLGNBQWE7b0JBQUNKO2lCQUFXO2dCQUM3QixJQUFJSyxjQUFjO29CQUFDTDtpQkFBVztnQkFFOUIsd0JBQXdCO2dCQUN4QixJQUFHRixLQUFNUCxPQUFLQyxRQUNkO29CQUNJLElBQUssSUFBSWMsSUFBRSxHQUFHQSxJQUFFZCxRQUFPYyxJQUN2Qjt3QkFDSSxJQUFHTCxlQUFhUCxLQUFLLENBQUNLLGFBQWFGLEdBQUVDLElBQUVRLEdBQUcsRUFDMUM7NEJBQ0lKLGFBQWFLLElBQUksQ0FBQ1IsYUFBYUYsR0FBRUMsSUFBRVE7d0JBQ3ZDLE9BQ0s7NEJBQUM7d0JBQU07b0JBQ2hCO29CQUNBLElBQUlKLGFBQWFNLE1BQU0sSUFBRWhCLFFBQ3pCO3dCQUNJLE9BQU9VO29CQUNYO2dCQUNKO2dCQUNBLHVCQUF1QjtnQkFDdkIsSUFBSUwsS0FBSU4sT0FBS0MsUUFDYjtvQkFDSSxJQUFLLElBQUljLElBQUUsR0FBR0EsSUFBRWQsUUFBT2MsSUFDdkI7d0JBQ0ksSUFBR0wsZUFBYVAsS0FBSyxDQUFDSyxhQUFhRixJQUFFUyxHQUFFUixHQUFHLEVBQzFDOzRCQUNJSyxhQUFhSSxJQUFJLENBQUNSLGFBQWFGLElBQUVTLEdBQUVSO3dCQUN2QyxPQUNLOzRCQUFDO3dCQUFNO29CQUNoQjtvQkFDQSxJQUFJSyxhQUFhSyxNQUFNLElBQUVoQixRQUN6Qjt3QkFDSSxPQUFPVztvQkFDWDtnQkFDSjtnQkFDQSxnQ0FBZ0M7Z0JBQ2hDLElBQUdMLEtBQU1QLE9BQUtDLFVBQVdLLEtBQUlOLE9BQUtDLFFBQ2xDO29CQUNJLElBQUssSUFBSWMsSUFBRSxHQUFHQSxJQUFFZCxRQUFPYyxJQUN2Qjt3QkFDSSxJQUFHTCxlQUFhUCxLQUFLLENBQUNLLGFBQWFGLElBQUVTLEdBQUVSLElBQUVRLEdBQUcsRUFDNUM7NEJBQ0lGLFlBQVlHLElBQUksQ0FBQ1IsYUFBYUYsSUFBRVMsR0FBRVIsSUFBRVE7d0JBQ3hDLE9BQ0s7NEJBQUM7d0JBQU07b0JBQ2hCO29CQUNBLElBQUlGLFlBQVlJLE1BQU0sSUFBRWhCLFFBQ3hCO3dCQUNJLE9BQU9ZO29CQUNYO2dCQUNKO2dCQUNBLGlDQUFpQztnQkFDakMsSUFBR04sS0FBTVAsT0FBS0MsVUFBV0ssS0FBR0wsU0FBTyxHQUNuQztvQkFDSSxJQUFLLElBQUljLElBQUUsR0FBR0EsSUFBRWQsUUFBT2MsSUFDdkI7d0JBQ0ksSUFBR0wsZUFBYVAsS0FBSyxDQUFDSyxhQUFhRixJQUFFUyxHQUFFUixJQUFFUSxHQUFHLEVBQzVDOzRCQUNJRCxZQUFZRSxJQUFJLENBQUNSLGFBQWFGLElBQUVTLEdBQUVSLElBQUVRO3dCQUN4QyxPQUNLOzRCQUFDO3dCQUFNO29CQUNoQjtvQkFDQSxJQUFJRCxZQUFZRyxNQUFNLElBQUVoQixRQUN4Qjt3QkFDSSxPQUFPYTtvQkFDWDtnQkFDSjtZQUNKO1FBQ0o7SUFDSjtJQUNBLE9BQU9JO0FBQ1g7QUFFQSxTQUFTVixhQUFhRixDQUFDLEVBQUNDLENBQUM7SUFFckIsT0FBT0QsSUFBR04sT0FBTU87QUFDcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLW5ldy9tb2RlbC9jaGVjay13aW5uZXIuanM/NGQzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzaXplID0gMTk7IC8vIDE5eDE5ICAgICDQutC+0Lst0LLQviDQutC70LXRgtC+0Log0L3QsCDQv9C+0LvQtVxyXG5jb25zdCBpbkFSb3cgPSA1OyAgLy8xOS01IDE0ICDQutC+0Lst0LLQviDQsiDRgNGP0LQg0LTQu9GPINC/0L7QsdC10LTRi1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrV2lubmVyKHtjZWxsc30pXHJcbntcclxuICAgIGNvbnNvbGUubG9nKFwiY2hlY2tXaW5uZXIgaXMgcnVubmluZ1wiKTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHNpemU7IGorKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChjZWxsc1tnZXRJbmRleENlbGwoaSxqKV0hPW51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGVja0luZGV4PWdldEluZGV4Q2VsbChpLGopO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrU2ltYm9sPWNlbGxzW2NoZWNrSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHdpbkluZGV4c1JvdyA9W2NoZWNrSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHdpbkluZGV4c0NvbCA9IFtjaGVja0luZGV4XTtcclxuICAgICAgICAgICAgICAgIGxldCB3aW5JbmRleHNEMSA9W2NoZWNrSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHdpbkluZGV4c0QyID0gW2NoZWNrSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL9C/0YDQvtCy0LXRgNC60LAg0YHRgtGA0L7QutC4INCy0L/RgNCw0LLQvlxyXG4gICAgICAgICAgICAgICAgaWYoaiA8PSAoc2l6ZS1pbkFSb3cpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGs9MTsgazxpbkFSb3c7aysrKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2hlY2tTaW1ib2w9PWNlbGxzW2dldEluZGV4Q2VsbChpLGorayldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5JbmRleHNSb3cucHVzaChnZXRJbmRleENlbGwoaSxqK2spKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHticmVhazt9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5JbmRleHNSb3cubGVuZ3RoPT1pbkFSb3cpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luSW5kZXhzUm93O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v0L/RgNC+0LLQtdGA0LrQsCDRgdGC0L7Qu9Cx0YbQsCDQstC90LjQt1xyXG4gICAgICAgICAgICAgICAgaWYgKGk8PShzaXplLWluQVJvdykpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaz0xOyBrPGluQVJvdztrKyspXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjaGVja1NpbWJvbD09Y2VsbHNbZ2V0SW5kZXhDZWxsKGkrayxqKV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbkluZGV4c0NvbC5wdXNoKGdldEluZGV4Q2VsbChpK2ssaikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge2JyZWFrO31cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbkluZGV4c0NvbC5sZW5ndGg9PWluQVJvdylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5JbmRleHNDb2w7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy/Qv9GA0L7QstC10YDQutCwINC00LjQsNCz0L7QvdCw0LvQuCDQstC90LjQtyDQstC/0YDQsNCy0L5cclxuICAgICAgICAgICAgICAgIGlmKGogPD0gKHNpemUtaW5BUm93KSAmJiBpPD0oc2l6ZS1pbkFSb3cpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGs9MTsgazxpbkFSb3c7aysrKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2hlY2tTaW1ib2w9PWNlbGxzW2dldEluZGV4Q2VsbChpK2ssaitrKV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbkluZGV4c0QxLnB1c2goZ2V0SW5kZXhDZWxsKGkrayxqK2spKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHticmVhazt9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5JbmRleHNEMS5sZW5ndGg9PWluQVJvdylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5JbmRleHNEMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL9C/0YDQvtCy0LXRgNC60LAg0LTQuNCw0LPQvtC90LDQu9C4INCy0LLQtdGA0YUg0LLQv9GA0LDQstC+XHJcbiAgICAgICAgICAgICAgICBpZihqIDw9IChzaXplLWluQVJvdykgJiYgaT49aW5BUm93LTEpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaz0xOyBrPGluQVJvdztrKyspXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjaGVja1NpbWJvbD09Y2VsbHNbZ2V0SW5kZXhDZWxsKGktayxqK2spXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luSW5kZXhzRDIucHVzaChnZXRJbmRleENlbGwoaS1rLGoraykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge2JyZWFrO31cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbkluZGV4c0QyLmxlbmd0aD09aW5BUm93KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbkluZGV4c0QyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEluZGV4Q2VsbChpLGopXHJcbntcclxuICAgIHJldHVybiBpKihzaXplKStqO1xyXG59Il0sIm5hbWVzIjpbInNpemUiLCJpbkFSb3ciLCJjaGVja1dpbm5lciIsImNlbGxzIiwiY29uc29sZSIsImxvZyIsImkiLCJqIiwiZ2V0SW5kZXhDZWxsIiwiY2hlY2tJbmRleCIsImNoZWNrU2ltYm9sIiwid2luSW5kZXhzUm93Iiwid2luSW5kZXhzQ29sIiwid2luSW5kZXhzRDEiLCJ3aW5JbmRleHNEMiIsImsiLCJwdXNoIiwibGVuZ3RoIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game-new/model/check-winner.js\n"));

/***/ })

});