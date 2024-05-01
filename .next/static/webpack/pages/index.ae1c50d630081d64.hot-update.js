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

/***/ "./components/game-new/model/game-state-reducer.js":
/*!*********************************************************!*\
  !*** ./components/game-new/model/game-state-reducer.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GAME_STATE_ACTIONS: function() { return /* binding */ GAME_STATE_ACTIONS; },\n/* harmony export */   gameStateReducer: function() { return /* binding */ gameStateReducer; },\n/* harmony export */   initGameState: function() { return /* binding */ initGameState; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var _get_next_move__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-next-move */ \"./components/game-new/model/get-next-move.js\");\n\n\nconst GAME_STATE_ACTIONS = {\n    CELL_CLICK: \"cell-click\",\n    TICK: \"tick\"\n};\nconst initGameState = (param)=>{\n    let { playersCount: playersCount1, defaultTimer: defaultTimer1, currentMoveStart } = param;\n    return {\n        cells: new Array(19 * 19).fill(null),\n        currentMove: _constants__WEBPACK_IMPORTED_MODULE_0__.GAME_SYMBOLS.CROSS,\n        currentMoveStart,\n        playersCount: playersCount1,\n        timers: _constants__WEBPACK_IMPORTED_MODULE_0__.MOVE_ORDER.reduce((timers, symbol, index)=>{\n            if (index < playersCount1) {\n                timers[symbol] = defaultTimer1;\n            }\n            return timers;\n        }, {})\n    };\n};\nconst gameStateReducer = (state, action)=>{\n    switch(action.type){\n        case GAME_STATE_ACTIONS.CELL_CLICK:\n            {\n                const { index, now } = action;\n                if (state.cells[index]) {\n                    return state;\n                }\n                return {\n                    ...state,\n                    timers: updateTimers(state, now),\n                    currentMove: (0,_get_next_move__WEBPACK_IMPORTED_MODULE_1__.getNextMove)(state),\n                    currentMoveStart: now,\n                    cells: updateCell(state, index)\n                };\n            }\n        case GAME_STATE_ACTIONS.TICK:\n            {\n                const { now } = action;\n                if (!isTimeOver(state, now)) {\n                    return state;\n                }\n                return {\n                    ...state,\n                    timers: updateTimers(state, now),\n                    currentMove: (0,_get_next_move__WEBPACK_IMPORTED_MODULE_1__.getNextMove)(state),\n                    currentMoveStart: now\n                };\n            }\n        case \"reset\":\n            {\n                const { now } = action;\n                return {\n                    ...state,\n                    cells: new Array(19 * 19).fill(null),\n                    timers: updateTimers(state, now),\n                    currentMoveStart: now,\n                    timers: _constants__WEBPACK_IMPORTED_MODULE_0__.MOVE_ORDER.reduce((timers, symbol, index)=>{\n                        if (index < playersCount) {\n                            timers[symbol] = defaultTimer;\n                        }\n                        return timers;\n                    }, {})\n                };\n            }\n        default:\n            {\n                return state;\n            }\n    }\n};\nfunction updateTimers(gameState, now) {\n    const diff = now - gameState.currentMoveStart;\n    const timer = gameState.timers[gameState.currentMove];\n    return {\n        ...gameState.timers,\n        [gameState.currentMove]: timer - diff\n    };\n}\nfunction updateCell(gameState, index) {\n    return gameState.cells.map((cell, i)=>i === index ? gameState.currentMove : cell);\n}\nfunction isTimeOver(gameState, now) {\n    const timer = updateTimers(gameState, now)[gameState.currentMove];\n    return timer <= 0;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL2dhbWUtc3RhdGUtcmVkdWNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3RDtBQUNWO0FBRXZDLE1BQU1HLHFCQUFxQjtJQUM5QkMsWUFBWTtJQUNaQyxNQUFNO0FBQ1IsRUFBRTtBQUVHLE1BQU1DLGdCQUFjO1FBQUMsRUFBQ0MsY0FBQUEsYUFBWSxFQUFFQyxjQUFBQSxhQUFZLEVBQUVDLGdCQUFnQixFQUFDO1dBQUk7UUFFMUVDLE9BQU8sSUFBSUMsTUFBTSxLQUFLLElBQUlDLElBQUksQ0FBQztRQUMvQkMsYUFBYWIsb0RBQVlBLENBQUNjLEtBQUs7UUFDL0JMO1FBQ0FGLGNBQUFBO1FBQ0FRLFFBQVFkLGtEQUFVQSxDQUFDZSxNQUFNLENBQUMsQ0FBQ0QsUUFBUUUsUUFBUUM7WUFDekMsSUFBR0EsUUFBUVgsZUFDWDtnQkFDRVEsTUFBTSxDQUFDRSxPQUFPLEdBQUNUO1lBQ2pCO1lBQ0EsT0FBT087UUFDVCxHQUFFLENBQUM7SUFDTDtFQUFHO0FBRUUsTUFBTUksbUJBQW1CLENBQUNDLE9BQU9DO0lBRXBDLE9BQU9BLE9BQU9DLElBQUk7UUFFaEIsS0FBS25CLG1CQUFtQkMsVUFBVTtZQUFDO2dCQUMvQixNQUFNLEVBQUNjLEtBQUssRUFBRUssR0FBRyxFQUFDLEdBQUdGO2dCQUNyQixJQUFJRCxNQUFNVixLQUFLLENBQUNRLE1BQU0sRUFDdEI7b0JBQ0UsT0FBT0U7Z0JBQ1Q7Z0JBQ0EsT0FBTztvQkFDTCxHQUFHQSxLQUFLO29CQUNSTCxRQUFRUyxhQUFhSixPQUFPRztvQkFDNUJWLGFBQWFYLDJEQUFXQSxDQUFDa0I7b0JBQ3pCWCxrQkFBa0JjO29CQUNsQmIsT0FBT2UsV0FBV0wsT0FBT0Y7Z0JBQzNCO1lBQ0Y7UUFDRixLQUFLZixtQkFBbUJFLElBQUk7WUFBQztnQkFDekIsTUFBTSxFQUFDa0IsR0FBRyxFQUFDLEdBQUdGO2dCQUNkLElBQUksQ0FBQ0ssV0FBV04sT0FBT0csTUFDdkI7b0JBQ0UsT0FBT0g7Z0JBQ1Q7Z0JBQ0EsT0FBTztvQkFDTCxHQUFHQSxLQUFLO29CQUNSTCxRQUFRUyxhQUFhSixPQUFPRztvQkFDNUJWLGFBQWFYLDJEQUFXQSxDQUFDa0I7b0JBQ3pCWCxrQkFBa0JjO2dCQUNwQjtZQUNGO1FBQ0YsS0FBSztZQUFRO2dCQUNYLE1BQU0sRUFBQ0EsR0FBRyxFQUFDLEdBQUdGO2dCQUNkLE9BQU87b0JBQ0wsR0FBR0QsS0FBSztvQkFDUlYsT0FBTyxJQUFJQyxNQUFNLEtBQUssSUFBSUMsSUFBSSxDQUFDO29CQUMvQkcsUUFBUVMsYUFBYUosT0FBT0c7b0JBQzVCZCxrQkFBa0JjO29CQUNsQlIsUUFBUWQsa0RBQVVBLENBQUNlLE1BQU0sQ0FBQyxDQUFDRCxRQUFRRSxRQUFRQzt3QkFDekMsSUFBR0EsUUFBUVgsY0FDWDs0QkFDRVEsTUFBTSxDQUFDRSxPQUFPLEdBQUNUO3dCQUNqQjt3QkFDQSxPQUFPTztvQkFDVCxHQUFFLENBQUM7Z0JBQ0w7WUFDQTtRQUNGO1lBQVE7Z0JBQ04sT0FBT0s7WUFDVDtJQUNGO0FBQ0YsRUFBRTtBQUVKLFNBQVNJLGFBQWNHLFNBQVMsRUFBRUosR0FBRztJQUNuQyxNQUFNSyxPQUFPTCxNQUFLSSxVQUFVbEIsZ0JBQWdCO0lBQzVDLE1BQU1vQixRQUFRRixVQUFVWixNQUFNLENBQUNZLFVBQVVkLFdBQVcsQ0FBQztJQUVyRCxPQUFPO1FBQ0wsR0FBR2MsVUFBVVosTUFBTTtRQUNuQixDQUFDWSxVQUFVZCxXQUFXLENBQUMsRUFBRWdCLFFBQVFEO0lBQ25DO0FBQ0Y7QUFDQSxTQUFTSCxXQUFZRSxTQUFTLEVBQUVULEtBQUs7SUFDbkMsT0FBT1MsVUFBVWpCLEtBQUssQ0FBQ29CLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxJQUNsQ0EsTUFBTWQsUUFBUVMsVUFBVWQsV0FBVyxHQUFHa0I7QUFFeEM7QUFFQSxTQUFTTCxXQUFXQyxTQUFTLEVBQUVKLEdBQUc7SUFFaEMsTUFBTU0sUUFBUUwsYUFBYUcsV0FBV0osSUFBSSxDQUFDSSxVQUFVZCxXQUFXLENBQUM7SUFDakUsT0FBT2dCLFNBQVE7QUFDakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLW5ldy9tb2RlbC9nYW1lLXN0YXRlLXJlZHVjZXIuanM/YTM1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHQU1FX1NZTUJPTFMsIE1PVkVfT1JERVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGdldE5leHRNb3ZlIH0gZnJvbSBcIi4vZ2V0LW5leHQtbW92ZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdBTUVfU1RBVEVfQUNUSU9OUyA9IHtcclxuICAgIENFTExfQ0xJQ0s6IFwiY2VsbC1jbGlja1wiLFxyXG4gICAgVElDSzogXCJ0aWNrXCIsXHJcbiAgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0R2FtZVN0YXRlPSh7cGxheWVyc0NvdW50LCBkZWZhdWx0VGltZXIsIGN1cnJlbnRNb3ZlU3RhcnR9KT0+KHtcclxuXHJcbiAgICBjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXHJcbiAgICBjdXJyZW50TW92ZTogR0FNRV9TWU1CT0xTLkNST1NTLFxyXG4gICAgY3VycmVudE1vdmVTdGFydCxcclxuICAgIHBsYXllcnNDb3VudCxcclxuICAgIHRpbWVyczogTU9WRV9PUkRFUi5yZWR1Y2UoKHRpbWVycywgc3ltYm9sLCBpbmRleCk9PntcclxuICAgICAgaWYoaW5kZXggPCBwbGF5ZXJzQ291bnQpXHJcbiAgICAgIHtcclxuICAgICAgICB0aW1lcnNbc3ltYm9sXT1kZWZhdWx0VGltZXI7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRpbWVycztcclxuICAgIH0se30pLFxyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWVTdGF0ZVJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbik9PntcclxuICBcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSlcclxuICAgIHtcclxuICAgICAgY2FzZSBHQU1FX1NUQVRFX0FDVElPTlMuQ0VMTF9DTElDSzp7XHJcbiAgICAgICAgICBjb25zdCB7aW5kZXgsIG5vd30gPSBhY3Rpb247XHJcbiAgICAgICAgICBpZiAoc3RhdGUuY2VsbHNbaW5kZXhdKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgdGltZXJzOiB1cGRhdGVUaW1lcnMoc3RhdGUsIG5vdyksXHJcbiAgICAgICAgICAgIGN1cnJlbnRNb3ZlOiBnZXROZXh0TW92ZShzdGF0ZSksXHJcbiAgICAgICAgICAgIGN1cnJlbnRNb3ZlU3RhcnQ6IG5vdyxcclxuICAgICAgICAgICAgY2VsbHM6IHVwZGF0ZUNlbGwoc3RhdGUsIGluZGV4KSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSAgXHJcbiAgICAgIGNhc2UgR0FNRV9TVEFURV9BQ1RJT05TLlRJQ0s6e1xyXG4gICAgICAgICAgY29uc3Qge25vd30gPSBhY3Rpb247XHJcbiAgICAgICAgICBpZiAoIWlzVGltZU92ZXIoc3RhdGUsIG5vdykpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB0aW1lcnM6IHVwZGF0ZVRpbWVycyhzdGF0ZSwgbm93KSxcclxuICAgICAgICAgICAgY3VycmVudE1vdmU6IGdldE5leHRNb3ZlKHN0YXRlKSxcclxuICAgICAgICAgICAgY3VycmVudE1vdmVTdGFydDogbm93LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgIGNhc2UgXCJyZXNldFwiOntcclxuICAgICAgICBjb25zdCB7bm93fSA9IGFjdGlvbjtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXHJcbiAgICAgICAgICB0aW1lcnM6IHVwZGF0ZVRpbWVycyhzdGF0ZSwgbm93KSxcclxuICAgICAgICAgIGN1cnJlbnRNb3ZlU3RhcnQ6IG5vdyxcclxuICAgICAgICAgIHRpbWVyczogTU9WRV9PUkRFUi5yZWR1Y2UoKHRpbWVycywgc3ltYm9sLCBpbmRleCk9PntcclxuICAgICAgICAgICAgaWYoaW5kZXggPCBwbGF5ZXJzQ291bnQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0aW1lcnNbc3ltYm9sXT1kZWZhdWx0VGltZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRpbWVycztcclxuICAgICAgICAgIH0se30pLFxyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6e1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbmZ1bmN0aW9uIHVwZGF0ZVRpbWVycyAoZ2FtZVN0YXRlLCBub3cpIHtcclxuICBjb25zdCBkaWZmID0gbm93IC1nYW1lU3RhdGUuY3VycmVudE1vdmVTdGFydDtcclxuICBjb25zdCB0aW1lciA9IGdhbWVTdGF0ZS50aW1lcnNbZ2FtZVN0YXRlLmN1cnJlbnRNb3ZlXTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmdhbWVTdGF0ZS50aW1lcnMsXHJcbiAgICBbZ2FtZVN0YXRlLmN1cnJlbnRNb3ZlXTogdGltZXIgLSBkaWZmLFxyXG4gIH07XHJcbn1cclxuZnVuY3Rpb24gdXBkYXRlQ2VsbCAoZ2FtZVN0YXRlLCBpbmRleCkge1xyXG4gIHJldHVybiBnYW1lU3RhdGUuY2VsbHMubWFwKChjZWxsLCBpKSA9PlxyXG4gIGkgPT09IGluZGV4ID8gZ2FtZVN0YXRlLmN1cnJlbnRNb3ZlIDogY2VsbCxcclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVGltZU92ZXIoZ2FtZVN0YXRlLCBub3cpXHJcbntcclxuICBjb25zdCB0aW1lciA9IHVwZGF0ZVRpbWVycyhnYW1lU3RhdGUsIG5vdylbZ2FtZVN0YXRlLmN1cnJlbnRNb3ZlXTtcclxuICByZXR1cm4gdGltZXIgPD0wO1xyXG59Il0sIm5hbWVzIjpbIkdBTUVfU1lNQk9MUyIsIk1PVkVfT1JERVIiLCJnZXROZXh0TW92ZSIsIkdBTUVfU1RBVEVfQUNUSU9OUyIsIkNFTExfQ0xJQ0siLCJUSUNLIiwiaW5pdEdhbWVTdGF0ZSIsInBsYXllcnNDb3VudCIsImRlZmF1bHRUaW1lciIsImN1cnJlbnRNb3ZlU3RhcnQiLCJjZWxscyIsIkFycmF5IiwiZmlsbCIsImN1cnJlbnRNb3ZlIiwiQ1JPU1MiLCJ0aW1lcnMiLCJyZWR1Y2UiLCJzeW1ib2wiLCJpbmRleCIsImdhbWVTdGF0ZVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJub3ciLCJ1cGRhdGVUaW1lcnMiLCJ1cGRhdGVDZWxsIiwiaXNUaW1lT3ZlciIsImdhbWVTdGF0ZSIsImRpZmYiLCJ0aW1lciIsIm1hcCIsImNlbGwiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game-new/model/game-state-reducer.js\n"));

/***/ })

});