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

/***/ "./components/game-new/game.jsx":
/*!**************************************!*\
  !*** ./components/game-new/game.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_game_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/game-title */ \"./components/game-new/ui/game-title.jsx\");\n/* harmony import */ var _ui_back_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/back-link */ \"./components/game-new/ui/back-link.jsx\");\n/* harmony import */ var _ui_game_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/game-info */ \"./components/game-new/ui/game-info.jsx\");\n/* harmony import */ var _ui_game_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/game-layout */ \"./components/game-new/ui/game-layout.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var _ui_player_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/player-info */ \"./components/game-new/ui/player-info.jsx\");\n/* harmony import */ var _ui_gameMoveInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/gameMoveInfo */ \"./components/game-new/ui/gameMoveInfo.jsx\");\n/* harmony import */ var _ui_game_cell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/game-cell */ \"./components/game-new/ui/game-cell.jsx\");\n/* harmony import */ var _ui_game_over_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/game-over-modal */ \"./components/game-new/ui/game-over-modal.jsx\");\n/* harmony import */ var _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./model/game-state-reducer */ \"./components/game-new/model/game-state-reducer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _model_check_winner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./model/check-winner */ \"./components/game-new/model/check-winner.js\");\n/* harmony import */ var _model_get_next_move__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./model/get-next-move */ \"./components/game-new/model/get-next-move.js\");\n/* harmony import */ var _model_compute_winner_symbol__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./model/compute-winner-symbol */ \"./components/game-new/model/compute-winner-symbol.js\");\n/* harmony import */ var _model_compute_player_timer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./model/compute-player-timer */ \"./components/game-new/model/compute-player-timer.js\");\n/* harmony import */ var _lib_timers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lib/timers */ \"./components/lib/timers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Game() {\n    _s();\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useReducer)(_model_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__.gameStateReducer, {\n        playersCount: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS_COUNT,\n        defaultTimer: 60000,\n        currentMoveStart: Date.now()\n    }, _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__.initGameState);\n    (0,_lib_timers__WEBPACK_IMPORTED_MODULE_16__.useInterval)(1000, !!gameState.currentMoveStart, (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(()=>{\n        dispatch({\n            type: _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__.GAME_STATE_ACTIONS.TICK,\n            now: Date.now()\n        });\n    }, []));\n    const winnerSequence = (0,react__WEBPACK_IMPORTED_MODULE_11__.useMemo)(()=>(0,_model_check_winner__WEBPACK_IMPORTED_MODULE_12__.checkWinner)(gameState), [\n        gameState\n    ]); //оптимизация пересчет победителя только после изменения состояния, а не каждые 100мс\n    const nextMove = (0,_model_get_next_move__WEBPACK_IMPORTED_MODULE_13__.getNextMove)(gameState);\n    const winnerSymbol = (0,_model_compute_winner_symbol__WEBPACK_IMPORTED_MODULE_14__.computeWinnerSymbol)(gameState, {\n        winnerSequence,\n        nextMove\n    });\n    const winnerPlayer = _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.find((player)=>player.symbol === winnerSymbol);\n    //console.log(\"GameRender\");\n    const handleCellClick = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)((index)=>{\n        dispatch({\n            type: _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__.GAME_STATE_ACTIONS.CELL_CLICK,\n            index,\n            now: Date.now()\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_layout__WEBPACK_IMPORTED_MODULE_4__.GameLayout, {\n                backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_back_link__WEBPACK_IMPORTED_MODULE_2__.BackLink, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 65,\n                    columnNumber: 19\n                }, void 0),\n                title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_title__WEBPACK_IMPORTED_MODULE_1__.GameTitle, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 16\n                }, void 0),\n                gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_info__WEBPACK_IMPORTED_MODULE_3__.GameInfo, {\n                    isRatingGame: true,\n                    playersCount: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS_COUNT,\n                    timeMode: \"1 мин. на ход\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 11\n                }, void 0),\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.slice(0, _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS_COUNT).map((player, index)=>{\n                    const { timer, timerStartAt } = (0,_model_compute_player_timer__WEBPACK_IMPORTED_MODULE_15__.computePlayerTimer)(gameState, player.symbol);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                        isRight: index % 2 != 0,\n                        avatar: player.avatar,\n                        name: player.name,\n                        rating: player.rating,\n                        symbol: player.symbol,\n                        isTimerRunning: false,\n                        timer: timer,\n                        timerStartAt: timerStartAt\n                    }, player.id, false, {\n                        fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 13\n                    }, void 0);\n                }),\n                gameMoveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_gameMoveInfo__WEBPACK_IMPORTED_MODULE_7__.GameMoveInfo, {\n                    currentMove: gameState.currentMove,\n                    nextMove: nextMove\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 94,\n                    columnNumber: 11\n                }, void 0),\n                gameCells: gameState.cells.map((symbol, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_cell__WEBPACK_IMPORTED_MODULE_8__.GameCell, {\n                        index: index,\n                        isWinner: winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index),\n                        disabled: !!winnerSymbol,\n                        onClick: handleCellClick,\n                        symbol: symbol\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, void 0))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_over_modal__WEBPACK_IMPORTED_MODULE_9__.GameOverModal, {\n                players: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.slice(0, _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS_COUNT).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                        isRight: index % 2 != 0,\n                        avatar: player.avatar,\n                        name: player.name,\n                        rating: player.rating,\n                        symbol: player.symbol,\n                        isTimerRunning: false,\n                        timer: gameState.timers[player.symbol]\n                    }, player.id, false, {\n                        fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 112,\n                        columnNumber: 11\n                    }, void 0)),\n                winnerName: winnerPlayer === null || winnerPlayer === void 0 ? void 0 : winnerPlayer.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"IpcpZy8z7a3qM1slX0rHcCasGUg=\", false, function() {\n    return [\n        _lib_timers__WEBPACK_IMPORTED_MODULE_16__.useInterval\n    ];\n});\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhQSxFQUFFMkMsR0FBRyxDQUFDLENBQUNaLFFBQVFHLHNCQUNwRCw4REFBQ2pDLHVEQUFVQTt3QkFFVDZDLFNBQVNaLFFBQVEsS0FBSzt3QkFDdEJhLFFBQVFoQixPQUFPZ0IsTUFBTTt3QkFDckJDLE1BQU1qQixPQUFPaUIsSUFBSTt3QkFDakJDLFFBQVFsQixPQUFPa0IsTUFBTTt3QkFDckJqQixRQUFRRCxPQUFPQyxNQUFNO3dCQUNyQmtCLGdCQUFnQjt3QkFDaEJOLE9BQU8zQixVQUFVNEMsTUFBTSxDQUFDOUIsT0FBT0MsTUFBTSxDQUFDO3VCQVBqQ0QsT0FBT29CLEVBQUU7Ozs7O2dCQVVsQlcsVUFBVSxFQUFFakMseUJBQUFBLG1DQUFBQSxhQUFjbUIsSUFBSTs7Ozs7Ozs7QUFLdEM7R0ExR2dCaEM7O1FBV2RELHFEQUFXQTs7O0tBWEdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS1uZXcvZ2FtZS5qc3g/ZTQyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lVGl0bGUgfSBmcm9tIFwiLi91aS9nYW1lLXRpdGxlXCI7XHJcbmltcG9ydCB7IEJhY2tMaW5rIH0gZnJvbSBcIi4vdWkvYmFjay1saW5rXCI7XHJcbmltcG9ydCB7IEdhbWVJbmZvIH0gZnJvbSBcIi4vdWkvZ2FtZS1pbmZvXCI7XHJcbmltcG9ydCB7IEdhbWVMYXlvdXQgfSBmcm9tIFwiLi91aS9nYW1lLWxheW91dFwiO1xyXG5pbXBvcnQgeyBQTEFZRVJTLCBQTEFZRVJTX0NPVU5UIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi91aS9wbGF5ZXItaW5mb1wiO1xyXG5pbXBvcnQgeyBHYW1lTW92ZUluZm8gfSBmcm9tIFwiLi91aS9nYW1lTW92ZUluZm9cIjtcclxuaW1wb3J0IHsgR2FtZUNlbGwgfSBmcm9tIFwiLi91aS9nYW1lLWNlbGxcIjtcclxuaW1wb3J0IHsgR2FtZU92ZXJNb2RhbCB9IGZyb20gXCIuL3VpL2dhbWUtb3Zlci1tb2RhbFwiO1xyXG5pbXBvcnQge1xyXG4gIEdBTUVfU1RBVEVfQUNUSU9OUyxcclxuICBnYW1lU3RhdGVSZWR1Y2VyLFxyXG4gIGluaXRHYW1lU3RhdGUsXHJcbn0gZnJvbSBcIi4vbW9kZWwvZ2FtZS1zdGF0ZS1yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNoZWNrV2lubmVyIH0gZnJvbSBcIi4vbW9kZWwvY2hlY2std2lubmVyXCI7XHJcbmltcG9ydCB7IGdldE5leHRNb3ZlIH0gZnJvbSBcIi4vbW9kZWwvZ2V0LW5leHQtbW92ZVwiO1xyXG5pbXBvcnQgeyBjb21wdXRlV2lubmVyU3ltYm9sIH0gZnJvbSBcIi4vbW9kZWwvY29tcHV0ZS13aW5uZXItc3ltYm9sXCI7XHJcbmltcG9ydCB7IGNvbXB1dGVQbGF5ZXJUaW1lciB9IGZyb20gXCIuL21vZGVsL2NvbXB1dGUtcGxheWVyLXRpbWVyXCI7XHJcbmltcG9ydCB7IHVzZUludGVydmFsIH0gZnJvbSBcIi4uL2xpYi90aW1lcnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHYW1lKCkge1xyXG4gIGNvbnN0IFtnYW1lU3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoXHJcbiAgICBnYW1lU3RhdGVSZWR1Y2VyLFxyXG4gICAge1xyXG4gICAgICBwbGF5ZXJzQ291bnQ6IFBMQVlFUlNfQ09VTlQsXHJcbiAgICAgIGRlZmF1bHRUaW1lcjogNjAwMDAsXHJcbiAgICAgIGN1cnJlbnRNb3ZlU3RhcnQ6IERhdGUubm93KCksXHJcbiAgICB9LFxyXG4gICAgaW5pdEdhbWVTdGF0ZSxcclxuICApO1xyXG5cclxuICB1c2VJbnRlcnZhbChcclxuICAgIDEwMDAsXHJcbiAgICAhIWdhbWVTdGF0ZS5jdXJyZW50TW92ZVN0YXJ0LFxyXG4gICAgdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogR0FNRV9TVEFURV9BQ1RJT05TLlRJQ0ssXHJcbiAgICAgICAgbm93OiBEYXRlLm5vdygpLFxyXG4gICAgICB9KTtcclxuICAgIH0sIFtdKSxcclxuICApO1xyXG5cclxuICBjb25zdCB3aW5uZXJTZXF1ZW5jZSA9IHVzZU1lbW8oKCkgPT4gY2hlY2tXaW5uZXIoZ2FtZVN0YXRlKSwgW2dhbWVTdGF0ZV0pOyAvL9C+0L/RgtC40LzQuNC30LDRhtC40Y8g0L/QtdGA0LXRgdGH0LXRgiDQv9C+0LHQtdC00LjRgtC10LvRjyDRgtC+0LvRjNC60L4g0L/QvtGB0LvQtSDQuNC30LzQtdC90LXQvdC40Y8g0YHQvtGB0YLQvtGP0L3QuNGPLCDQsCDQvdC1INC60LDQttC00YvQtSAxMDDQvNGBXHJcbiAgY29uc3QgbmV4dE1vdmUgPSBnZXROZXh0TW92ZShnYW1lU3RhdGUpO1xyXG4gIGNvbnN0IHdpbm5lclN5bWJvbCA9IGNvbXB1dGVXaW5uZXJTeW1ib2woZ2FtZVN0YXRlLCB7XHJcbiAgICB3aW5uZXJTZXF1ZW5jZSxcclxuICAgIG5leHRNb3ZlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB3aW5uZXJQbGF5ZXIgPSBQTEFZRVJTLmZpbmQoKHBsYXllcikgPT4gcGxheWVyLnN5bWJvbCA9PT0gd2lubmVyU3ltYm9sKTtcclxuXHJcbiAgLy9jb25zb2xlLmxvZyhcIkdhbWVSZW5kZXJcIik7XHJcbiAgY29uc3QgaGFuZGxlQ2VsbENsaWNrID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEdBTUVfU1RBVEVfQUNUSU9OUy5DRUxMX0NMSUNLLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgbm93OiBEYXRlLm5vdygpLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEdhbWVMYXlvdXRcclxuICAgICAgICBiYWNrTGluaz17PEJhY2tMaW5rIC8+fVxyXG4gICAgICAgIHRpdGxlPXs8R2FtZVRpdGxlIC8+fVxyXG4gICAgICAgIGdhbWVJbmZvPXtcclxuICAgICAgICAgIDxHYW1lSW5mb1xyXG4gICAgICAgICAgICBpc1JhdGluZ0dhbWVcclxuICAgICAgICAgICAgcGxheWVyc0NvdW50PXtQTEFZRVJTX0NPVU5UfVxyXG4gICAgICAgICAgICB0aW1lTW9kZT17XCIxINC80LjQvS4g0L3QsCDRhdC+0LRcIn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBsYXllcnNMaXN0PXtQTEFZRVJTLnNsaWNlKDAsIFBMQVlFUlNfQ09VTlQpLm1hcCgocGxheWVyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyB0aW1lciwgdGltZXJTdGFydEF0IH0gPSBjb21wdXRlUGxheWVyVGltZXIoXHJcbiAgICAgICAgICAgIGdhbWVTdGF0ZSxcclxuICAgICAgICAgICAgcGxheWVyLnN5bWJvbCxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UGxheWVySW5mb1xyXG4gICAgICAgICAgICAgIGtleT17cGxheWVyLmlkfVxyXG4gICAgICAgICAgICAgIGlzUmlnaHQ9e2luZGV4ICUgMiAhPSAwfVxyXG4gICAgICAgICAgICAgIGF2YXRhcj17cGxheWVyLmF2YXRhcn1cclxuICAgICAgICAgICAgICBuYW1lPXtwbGF5ZXIubmFtZX1cclxuICAgICAgICAgICAgICByYXRpbmc9e3BsYXllci5yYXRpbmd9XHJcbiAgICAgICAgICAgICAgc3ltYm9sPXtwbGF5ZXIuc3ltYm9sfVxyXG4gICAgICAgICAgICAgIGlzVGltZXJSdW5uaW5nPXtmYWxzZX1cclxuICAgICAgICAgICAgICB0aW1lcj17dGltZXJ9XHJcbiAgICAgICAgICAgICAgdGltZXJTdGFydEF0PXt0aW1lclN0YXJ0QXR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIGdhbWVNb3ZlSW5mbz17XHJcbiAgICAgICAgICA8R2FtZU1vdmVJbmZvXHJcbiAgICAgICAgICAgIGN1cnJlbnRNb3ZlPXtnYW1lU3RhdGUuY3VycmVudE1vdmV9XHJcbiAgICAgICAgICAgIG5leHRNb3ZlPXtuZXh0TW92ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdhbWVDZWxscz17Z2FtZVN0YXRlLmNlbGxzLm1hcCgoc3ltYm9sLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPEdhbWVDZWxsXHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgaXNXaW5uZXI9e3dpbm5lclNlcXVlbmNlPy5pbmNsdWRlcyhpbmRleCl9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshIXdpbm5lclN5bWJvbH1cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2VsbENsaWNrfVxyXG4gICAgICAgICAgICBzeW1ib2w9e3N5bWJvbH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgID48L0dhbWVMYXlvdXQ+XHJcbiAgICAgIDxHYW1lT3Zlck1vZGFsXHJcbiAgICAgICAgcGxheWVycz17UExBWUVSUy5zbGljZSgwLCBQTEFZRVJTX0NPVU5UKS5tYXAoKHBsYXllciwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxQbGF5ZXJJbmZvXHJcbiAgICAgICAgICAgIGtleT17cGxheWVyLmlkfVxyXG4gICAgICAgICAgICBpc1JpZ2h0PXtpbmRleCAlIDIgIT0gMH1cclxuICAgICAgICAgICAgYXZhdGFyPXtwbGF5ZXIuYXZhdGFyfVxyXG4gICAgICAgICAgICBuYW1lPXtwbGF5ZXIubmFtZX1cclxuICAgICAgICAgICAgcmF0aW5nPXtwbGF5ZXIucmF0aW5nfVxyXG4gICAgICAgICAgICBzeW1ib2w9e3BsYXllci5zeW1ib2x9XHJcbiAgICAgICAgICAgIGlzVGltZXJSdW5uaW5nPXtmYWxzZX1cclxuICAgICAgICAgICAgdGltZXI9e2dhbWVTdGF0ZS50aW1lcnNbcGxheWVyLnN5bWJvbF19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIHdpbm5lck5hbWU9e3dpbm5lclBsYXllcj8ubmFtZX1cclxuICAgICAgICAvKiBvbkNsb3NlPXtyZXNldEdhbWV9ICovXHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJHYW1lVGl0bGUiLCJCYWNrTGluayIsIkdhbWVJbmZvIiwiR2FtZUxheW91dCIsIlBMQVlFUlMiLCJQTEFZRVJTX0NPVU5UIiwiUGxheWVySW5mbyIsIkdhbWVNb3ZlSW5mbyIsIkdhbWVDZWxsIiwiR2FtZU92ZXJNb2RhbCIsIkdBTUVfU1RBVEVfQUNUSU9OUyIsImdhbWVTdGF0ZVJlZHVjZXIiLCJpbml0R2FtZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJ1c2VNZW1vIiwidXNlUmVkdWNlciIsImNoZWNrV2lubmVyIiwiZ2V0TmV4dE1vdmUiLCJjb21wdXRlV2lubmVyU3ltYm9sIiwiY29tcHV0ZVBsYXllclRpbWVyIiwidXNlSW50ZXJ2YWwiLCJHYW1lIiwiZ2FtZVN0YXRlIiwiZGlzcGF0Y2giLCJwbGF5ZXJzQ291bnQiLCJkZWZhdWx0VGltZXIiLCJjdXJyZW50TW92ZVN0YXJ0IiwiRGF0ZSIsIm5vdyIsInR5cGUiLCJUSUNLIiwid2lubmVyU2VxdWVuY2UiLCJuZXh0TW92ZSIsIndpbm5lclN5bWJvbCIsIndpbm5lclBsYXllciIsImZpbmQiLCJwbGF5ZXIiLCJzeW1ib2wiLCJoYW5kbGVDZWxsQ2xpY2siLCJpbmRleCIsIkNFTExfQ0xJQ0siLCJiYWNrTGluayIsInRpdGxlIiwiZ2FtZUluZm8iLCJpc1JhdGluZ0dhbWUiLCJ0aW1lTW9kZSIsInBsYXllcnNMaXN0Iiwic2xpY2UiLCJtYXAiLCJ0aW1lciIsInRpbWVyU3RhcnRBdCIsImlzUmlnaHQiLCJhdmF0YXIiLCJuYW1lIiwicmF0aW5nIiwiaXNUaW1lclJ1bm5pbmciLCJpZCIsImdhbWVNb3ZlSW5mbyIsImN1cnJlbnRNb3ZlIiwiZ2FtZUNlbGxzIiwiY2VsbHMiLCJpc1dpbm5lciIsImluY2x1ZGVzIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwicGxheWVycyIsInRpbWVycyIsIndpbm5lck5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game-new/game.jsx\n"));

/***/ })

});