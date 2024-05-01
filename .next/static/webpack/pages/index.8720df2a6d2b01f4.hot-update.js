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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_game_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/game-title */ \"./components/game-new/ui/game-title.jsx\");\n/* harmony import */ var _ui_back_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/back-link */ \"./components/game-new/ui/back-link.jsx\");\n/* harmony import */ var _ui_game_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/game-info */ \"./components/game-new/ui/game-info.jsx\");\n/* harmony import */ var _ui_game_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/game-layout */ \"./components/game-new/ui/game-layout.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var _ui_player_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/player-info */ \"./components/game-new/ui/player-info.jsx\");\n/* harmony import */ var _ui_gameMoveInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/gameMoveInfo */ \"./components/game-new/ui/gameMoveInfo.jsx\");\n/* harmony import */ var _ui_game_cell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/game-cell */ \"./components/game-new/ui/game-cell.jsx\");\n/* harmony import */ var _ui_game_over_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/game-over-modal */ \"./components/game-new/ui/game-over-modal.jsx\");\n/* harmony import */ var _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./model/game-state-reducer */ \"./components/game-new/model/game-state-reducer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _model_check_winner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./model/check-winner */ \"./components/game-new/model/check-winner.js\");\n/* harmony import */ var _model_get_next_move__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./model/get-next-move */ \"./components/game-new/model/get-next-move.js\");\n/* harmony import */ var _model_compute_winner_symbol__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./model/compute-winner-symbol */ \"./components/game-new/model/compute-winner-symbol.js\");\n/* harmony import */ var _model_compute_player_timer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./model/compute-player-timer */ \"./components/game-new/model/compute-player-timer.js\");\n/* harmony import */ var _lib_timers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lib/timers */ \"./components/lib/timers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Game() {\n    _s();\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useReducer)(_model_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__.gameStateReducer, {\n        playersCount: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS_COUNT,\n        defaultTimer: 60000,\n        currentMoveStart: Date.now()\n    }, _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__.initGameState);\n    (0,_lib_timers__WEBPACK_IMPORTED_MODULE_16__.useInterval)(100, gameState.currentMoveStart, ()=>{\n        dispatch({\n            type: _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__.GAME_STATE_ACTIONS.TICK,\n            now: Date.now()\n        });\n    });\n    const winnerSequence = (0,react__WEBPACK_IMPORTED_MODULE_11__.useMemo)(()=>(0,_model_check_winner__WEBPACK_IMPORTED_MODULE_12__.checkWinner)(gameState), [\n        gameState\n    ]);\n    const nextMove = (0,_model_get_next_move__WEBPACK_IMPORTED_MODULE_13__.getNextMove)(gameState);\n    const winnerSymbol = (0,_model_compute_winner_symbol__WEBPACK_IMPORTED_MODULE_14__.computeWinnerSymbol)(gameState, {\n        winnerSequence,\n        nextMove\n    });\n    const winnerPlayer = _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.find((player)=>player.symbol === winnerSymbol);\n    console.log(\"render\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_layout__WEBPACK_IMPORTED_MODULE_4__.GameLayout, {\n                backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_back_link__WEBPACK_IMPORTED_MODULE_2__.BackLink, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 19\n                }, void 0),\n                title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_title__WEBPACK_IMPORTED_MODULE_1__.GameTitle, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 16\n                }, void 0),\n                gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_info__WEBPACK_IMPORTED_MODULE_3__.GameInfo, {\n                    isRatingGame: true,\n                    playersCount: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS_COUNT,\n                    timeMode: \"1 мин. на ход\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, void 0),\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.slice(0, _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS_COUNT).map((player, index)=>{\n                    const { timer, timerStartAt } = (0,_model_compute_player_timer__WEBPACK_IMPORTED_MODULE_15__.computePlayerTimer)(gameState, player.symbol);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                        isRight: index % 2 != 0,\n                        avatar: player.avatar,\n                        name: player.name,\n                        rating: player.rating,\n                        symbol: player.symbol,\n                        isTimerRunning: false,\n                        timer: timer,\n                        timerStartAt: timerStartAt\n                    }, player.id, false, {\n                        fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, void 0);\n                }),\n                gameMoveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_gameMoveInfo__WEBPACK_IMPORTED_MODULE_7__.GameMoveInfo, {\n                    currentMove: gameState.currentMove,\n                    nextMove: nextMove\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 79,\n                    columnNumber: 11\n                }, void 0),\n                gameCells: gameState.cells.map((symbol, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_cell__WEBPACK_IMPORTED_MODULE_8__.GameCell, {\n                        isWinner: winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index),\n                        disabled: !!winnerSymbol,\n                        onClick: ()=>{\n                            dispatch({\n                                type: _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__.GAME_STATE_ACTIONS.CELL_CLICK,\n                                index,\n                                now: Date.now()\n                            });\n                        },\n                        symbol: symbol\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, void 0))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_over_modal__WEBPACK_IMPORTED_MODULE_9__.GameOverModal, {\n                players: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.slice(0, _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS_COUNT).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                        isRight: index % 2 != 0,\n                        avatar: player.avatar,\n                        name: player.name,\n                        rating: player.rating,\n                        symbol: player.symbol,\n                        isTimerRunning: false,\n                        timer: gameState.timers[player.symbol]\n                    }, player.id, false, {\n                        fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, void 0)),\n                winnerName: winnerPlayer === null || winnerPlayer === void 0 ? void 0 : winnerPlayer.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Oleg Vasilev\\\\Desktop\\\\React course\\\\lesson 2\\\\tik-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"4jiNPnL2xe/oFPrKr5hvwmBGYCA=\", false, function() {\n    return [\n        _lib_timers__WEBPACK_IMPORTED_MODULE_16__.useInterval\n    ];\n});\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T2dCLE1BQU07d0JBQ3JCQyxNQUFNakIsT0FBT2lCLElBQUk7d0JBQ2pCQyxRQUFRbEIsT0FBT2tCLE1BQU07d0JBQ3JCakIsUUFBUUQsT0FBT0MsTUFBTTt3QkFDckJrQixnQkFBZ0I7d0JBQ2hCTixPQUFPM0IsVUFBVTZDLE1BQU0sQ0FBQy9CLE9BQU9DLE1BQU0sQ0FBQzt1QkFQakNELE9BQU9vQixFQUFFOzs7OztnQkFVbEJZLFVBQVUsRUFBRWxDLHlCQUFBQSxtQ0FBQUEsYUFBY21CLElBQUk7Ozs7Ozs7O0FBS3RDO0dBaEdnQmhDOztRQVdkRCxxREFBV0E7OztLQVhHQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUuanN4P2U0MmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZVRpdGxlIH0gZnJvbSBcIi4vdWkvZ2FtZS10aXRsZVwiO1xyXG5pbXBvcnQgeyBCYWNrTGluayB9IGZyb20gXCIuL3VpL2JhY2stbGlua1wiO1xyXG5pbXBvcnQgeyBHYW1lSW5mbyB9IGZyb20gXCIuL3VpL2dhbWUtaW5mb1wiO1xyXG5pbXBvcnQgeyBHYW1lTGF5b3V0IH0gZnJvbSBcIi4vdWkvZ2FtZS1sYXlvdXRcIjtcclxuaW1wb3J0IHsgUExBWUVSUywgUExBWUVSU19DT1VOVCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4vdWkvcGxheWVyLWluZm9cIjtcclxuaW1wb3J0IHsgR2FtZU1vdmVJbmZvIH0gZnJvbSBcIi4vdWkvZ2FtZU1vdmVJbmZvXCI7XHJcbmltcG9ydCB7IEdhbWVDZWxsIH0gZnJvbSBcIi4vdWkvZ2FtZS1jZWxsXCI7XHJcbmltcG9ydCB7IEdhbWVPdmVyTW9kYWwgfSBmcm9tIFwiLi91aS9nYW1lLW92ZXItbW9kYWxcIjtcclxuaW1wb3J0IHtcclxuICBHQU1FX1NUQVRFX0FDVElPTlMsXHJcbiAgZ2FtZVN0YXRlUmVkdWNlcixcclxuICBpbml0R2FtZVN0YXRlLFxyXG59IGZyb20gXCIuL21vZGVsL2dhbWUtc3RhdGUtcmVkdWNlclwiO1xyXG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNoZWNrV2lubmVyIH0gZnJvbSBcIi4vbW9kZWwvY2hlY2std2lubmVyXCI7XHJcbmltcG9ydCB7IGdldE5leHRNb3ZlIH0gZnJvbSBcIi4vbW9kZWwvZ2V0LW5leHQtbW92ZVwiO1xyXG5pbXBvcnQgeyBjb21wdXRlV2lubmVyU3ltYm9sIH0gZnJvbSBcIi4vbW9kZWwvY29tcHV0ZS13aW5uZXItc3ltYm9sXCI7XHJcbmltcG9ydCB7IGNvbXB1dGVQbGF5ZXJUaW1lciB9IGZyb20gXCIuL21vZGVsL2NvbXB1dGUtcGxheWVyLXRpbWVyXCI7XHJcbmltcG9ydCB7IHVzZUludGVydmFsIH0gZnJvbSBcIi4uL2xpYi90aW1lcnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHYW1lKCkge1xyXG4gIGNvbnN0IFtnYW1lU3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoXHJcbiAgICBnYW1lU3RhdGVSZWR1Y2VyLFxyXG4gICAge1xyXG4gICAgICBwbGF5ZXJzQ291bnQ6IFBMQVlFUlNfQ09VTlQsXHJcbiAgICAgIGRlZmF1bHRUaW1lcjogNjAwMDAsXHJcbiAgICAgIGN1cnJlbnRNb3ZlU3RhcnQ6IERhdGUubm93KCksXHJcbiAgICB9LFxyXG4gICAgaW5pdEdhbWVTdGF0ZSxcclxuICApO1xyXG5cclxuICB1c2VJbnRlcnZhbCgxMDAsIGdhbWVTdGF0ZS5jdXJyZW50TW92ZVN0YXJ0LCAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IEdBTUVfU1RBVEVfQUNUSU9OUy5USUNLLCBub3c6IERhdGUubm93KCkgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHdpbm5lclNlcXVlbmNlID0gdXNlTWVtbygoKSA9PiBjaGVja1dpbm5lcihnYW1lU3RhdGUpLCBbZ2FtZVN0YXRlXSk7XHJcbiAgY29uc3QgbmV4dE1vdmUgPSBnZXROZXh0TW92ZShnYW1lU3RhdGUpO1xyXG4gIGNvbnN0IHdpbm5lclN5bWJvbCA9IGNvbXB1dGVXaW5uZXJTeW1ib2woZ2FtZVN0YXRlLCB7XHJcbiAgICB3aW5uZXJTZXF1ZW5jZSxcclxuICAgIG5leHRNb3ZlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB3aW5uZXJQbGF5ZXIgPSBQTEFZRVJTLmZpbmQoKHBsYXllcikgPT4gcGxheWVyLnN5bWJvbCA9PT0gd2lubmVyU3ltYm9sKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJyZW5kZXJcIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxHYW1lTGF5b3V0XHJcbiAgICAgICAgYmFja0xpbms9ezxCYWNrTGluayAvPn1cclxuICAgICAgICB0aXRsZT17PEdhbWVUaXRsZSAvPn1cclxuICAgICAgICBnYW1lSW5mbz17XHJcbiAgICAgICAgICA8R2FtZUluZm9cclxuICAgICAgICAgICAgaXNSYXRpbmdHYW1lXHJcbiAgICAgICAgICAgIHBsYXllcnNDb3VudD17UExBWUVSU19DT1VOVH1cclxuICAgICAgICAgICAgdGltZU1vZGU9e1wiMSDQvNC40L0uINC90LAg0YXQvtC0XCJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICBwbGF5ZXJzTGlzdD17UExBWUVSUy5zbGljZSgwLCBQTEFZRVJTX0NPVU5UKS5tYXAoKHBsYXllciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgdGltZXIsIHRpbWVyU3RhcnRBdCB9ID0gY29tcHV0ZVBsYXllclRpbWVyKFxyXG4gICAgICAgICAgICBnYW1lU3RhdGUsXHJcbiAgICAgICAgICAgIHBsYXllci5zeW1ib2wsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFBsYXllckluZm9cclxuICAgICAgICAgICAgICBrZXk9e3BsYXllci5pZH1cclxuICAgICAgICAgICAgICBpc1JpZ2h0PXtpbmRleCAlIDIgIT0gMH1cclxuICAgICAgICAgICAgICBhdmF0YXI9e3BsYXllci5hdmF0YXJ9XHJcbiAgICAgICAgICAgICAgbmFtZT17cGxheWVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgcmF0aW5nPXtwbGF5ZXIucmF0aW5nfVxyXG4gICAgICAgICAgICAgIHN5bWJvbD17cGxheWVyLnN5bWJvbH1cclxuICAgICAgICAgICAgICBpc1RpbWVyUnVubmluZz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgdGltZXI9e3RpbWVyfVxyXG4gICAgICAgICAgICAgIHRpbWVyU3RhcnRBdD17dGltZXJTdGFydEF0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICBnYW1lTW92ZUluZm89e1xyXG4gICAgICAgICAgPEdhbWVNb3ZlSW5mb1xyXG4gICAgICAgICAgICBjdXJyZW50TW92ZT17Z2FtZVN0YXRlLmN1cnJlbnRNb3ZlfVxyXG4gICAgICAgICAgICBuZXh0TW92ZT17bmV4dE1vdmV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICBnYW1lQ2VsbHM9e2dhbWVTdGF0ZS5jZWxscy5tYXAoKHN5bWJvbCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxHYW1lQ2VsbFxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBpc1dpbm5lcj17d2lubmVyU2VxdWVuY2U/LmluY2x1ZGVzKGluZGV4KX1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyEhd2lubmVyU3ltYm9sfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogR0FNRV9TVEFURV9BQ1RJT05TLkNFTExfQ0xJQ0ssXHJcbiAgICAgICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgICAgIG5vdzogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3ltYm9sPXtzeW1ib2x9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA+PC9HYW1lTGF5b3V0PlxyXG4gICAgICA8R2FtZU92ZXJNb2RhbFxyXG4gICAgICAgIHBsYXllcnM9e1BMQVlFUlMuc2xpY2UoMCwgUExBWUVSU19DT1VOVCkubWFwKChwbGF5ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8UGxheWVySW5mb1xyXG4gICAgICAgICAgICBrZXk9e3BsYXllci5pZH1cclxuICAgICAgICAgICAgaXNSaWdodD17aW5kZXggJSAyICE9IDB9XHJcbiAgICAgICAgICAgIGF2YXRhcj17cGxheWVyLmF2YXRhcn1cclxuICAgICAgICAgICAgbmFtZT17cGxheWVyLm5hbWV9XHJcbiAgICAgICAgICAgIHJhdGluZz17cGxheWVyLnJhdGluZ31cclxuICAgICAgICAgICAgc3ltYm9sPXtwbGF5ZXIuc3ltYm9sfVxyXG4gICAgICAgICAgICBpc1RpbWVyUnVubmluZz17ZmFsc2V9XHJcbiAgICAgICAgICAgIHRpbWVyPXtnYW1lU3RhdGUudGltZXJzW3BsYXllci5zeW1ib2xdfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgICB3aW5uZXJOYW1lPXt3aW5uZXJQbGF5ZXI/Lm5hbWV9XHJcbiAgICAgICAgLyogb25DbG9zZT17cmVzZXRHYW1lfSAqL1xyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiR2FtZVRpdGxlIiwiQmFja0xpbmsiLCJHYW1lSW5mbyIsIkdhbWVMYXlvdXQiLCJQTEFZRVJTIiwiUExBWUVSU19DT1VOVCIsIlBsYXllckluZm8iLCJHYW1lTW92ZUluZm8iLCJHYW1lQ2VsbCIsIkdhbWVPdmVyTW9kYWwiLCJHQU1FX1NUQVRFX0FDVElPTlMiLCJnYW1lU3RhdGVSZWR1Y2VyIiwiaW5pdEdhbWVTdGF0ZSIsInVzZU1lbW8iLCJ1c2VSZWR1Y2VyIiwiY2hlY2tXaW5uZXIiLCJnZXROZXh0TW92ZSIsImNvbXB1dGVXaW5uZXJTeW1ib2wiLCJjb21wdXRlUGxheWVyVGltZXIiLCJ1c2VJbnRlcnZhbCIsIkdhbWUiLCJnYW1lU3RhdGUiLCJkaXNwYXRjaCIsInBsYXllcnNDb3VudCIsImRlZmF1bHRUaW1lciIsImN1cnJlbnRNb3ZlU3RhcnQiLCJEYXRlIiwibm93IiwidHlwZSIsIlRJQ0siLCJ3aW5uZXJTZXF1ZW5jZSIsIm5leHRNb3ZlIiwid2lubmVyU3ltYm9sIiwid2lubmVyUGxheWVyIiwiZmluZCIsInBsYXllciIsInN5bWJvbCIsImNvbnNvbGUiLCJsb2ciLCJiYWNrTGluayIsInRpdGxlIiwiZ2FtZUluZm8iLCJpc1JhdGluZ0dhbWUiLCJ0aW1lTW9kZSIsInBsYXllcnNMaXN0Iiwic2xpY2UiLCJtYXAiLCJpbmRleCIsInRpbWVyIiwidGltZXJTdGFydEF0IiwiaXNSaWdodCIsImF2YXRhciIsIm5hbWUiLCJyYXRpbmciLCJpc1RpbWVyUnVubmluZyIsImlkIiwiZ2FtZU1vdmVJbmZvIiwiY3VycmVudE1vdmUiLCJnYW1lQ2VsbHMiLCJjZWxscyIsImlzV2lubmVyIiwiaW5jbHVkZXMiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJDRUxMX0NMSUNLIiwicGxheWVycyIsInRpbWVycyIsIndpbm5lck5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game-new/game.jsx\n"));

/***/ })

});