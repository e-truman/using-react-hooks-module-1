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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar InputElement = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), inputText = ref[0], setInputText = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), historyList = ref1[0], setHistoryList = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: function(e) {\n                    setInputText(e.target.value) // calling setter function, passing current input value to it\n                    ;\n                    setHistoryList((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(historyList).concat([\n                        e.target.value\n                    ])) // spread existing list, append current value\n                    ;\n                },\n                placeholder: \"Enter Some Text\"\n            }, void 0, false, {\n                fileName: \"/Users/erintruman/workspace/clip2-setting-up-toolchain/pages/index.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, _this),\n            inputText,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/erintruman/workspace/clip2-setting-up-toolchain/pages/index.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/erintruman/workspace/clip2-setting-up-toolchain/pages/index.js\",\n                lineNumber: 14,\n                columnNumber: 14\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: historyList.map(function(rec) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: rec\n                    }, void 0, false, {\n                        fileName: \"/Users/erintruman/workspace/clip2-setting-up-toolchain/pages/index.js\",\n                        lineNumber: 17,\n                        columnNumber: 24\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/erintruman/workspace/clip2-setting-up-toolchain/pages/index.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/erintruman/workspace/clip2-setting-up-toolchain/pages/index.js\",\n        lineNumber: 7,\n        columnNumber: 12\n    }, _this);\n};\n_s(InputElement, \"/YxVmfZku2946ChKMnddCR+VCYM=\");\n_c = InputElement;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputElement); // hooks allow you to attach reusable logic to existing components\n // every data store value is state\n // everything new on the screen is a new state\nvar _c;\n$RefreshReg$(_c, \"InputElement\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUF3QztBQUV4QyxJQUFNRSxZQUFZLEdBQUcsV0FBTTs7SUFDdkIsSUFBa0NELEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBdkNFLFNBQVMsR0FBa0JGLEdBQVksR0FBOUIsRUFBRUcsWUFBWSxHQUFJSCxHQUFZLEdBQWhCO0lBQzlCLElBQXNDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQTNDSSxXQUFXLEdBQW9CSixJQUFZLEdBQWhDLEVBQUVLLGNBQWMsR0FBSUwsSUFBWSxHQUFoQjtJQUVsQyxxQkFBTyw4REFBQ00sS0FBRzs7MEJBQ1AsOERBQUNDLE9BQUs7Z0JBQUNDLFFBQVEsRUFBRSxTQUFDQyxDQUFDLEVBQUs7b0JBQ3BCTixZQUFZLENBQUNNLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQyw2REFBNkQ7O29CQUMxRk4sY0FBYyxDQUFDLHFGQUFJRCxXQUFXLENBQVhBLFFBQUo7d0JBQWlCSyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSztxQkFBQyxFQUFDLENBQUMsNkNBQTZDOztnQkFDbEcsQ0FBQztnQkFDR0MsV0FBVyxFQUFDLGlCQUFpQjs7Ozs7cUJBQUc7WUFDbkNWLFNBQVM7MEJBQ1YsOERBQUNXLElBQUU7Ozs7cUJBQUU7MEJBQUEsOERBQUNDLElBQUU7Ozs7cUJBQUU7MEJBQ1YsOERBQUNDLElBQUU7MEJBQ0VYLFdBQVcsQ0FBQ1ksR0FBRyxDQUFDLFNBQUNDLEdBQUcsRUFBSztvQkFDdEIscUJBQU8sOERBQUNYLEtBQUc7a0NBQUVXLEdBQUc7Ozs7OzZCQUFPO2dCQUMzQixDQUFDLENBQUM7Ozs7O3FCQUNEOzs7Ozs7YUFDSDtBQUNWLENBQUM7R0FsQktoQixZQUFZO0FBQVpBLEtBQUFBLFlBQVk7QUFvQmxCLCtEQUFlQSxZQUFZLEVBQUMsQ0FFNUIsa0VBQWtFO0NBQ2xFLGtDQUFrQztDQUNsQyw4Q0FBOEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IElucHV0RWxlbWVudCA9ICgpID0+IHtcbiAgICBjb25zdCBbaW5wdXRUZXh0LCBzZXRJbnB1dFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2hpc3RvcnlMaXN0LCBzZXRIaXN0b3J5TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgc2V0SW5wdXRUZXh0KGUudGFyZ2V0LnZhbHVlKSAvLyBjYWxsaW5nIHNldHRlciBmdW5jdGlvbiwgcGFzc2luZyBjdXJyZW50IGlucHV0IHZhbHVlIHRvIGl0XG4gICAgICAgICAgICBzZXRIaXN0b3J5TGlzdChbLi4uaGlzdG9yeUxpc3QsIGUudGFyZ2V0LnZhbHVlXSkgLy8gc3ByZWFkIGV4aXN0aW5nIGxpc3QsIGFwcGVuZCBjdXJyZW50IHZhbHVlXG4gICAgICAgIH19XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFNvbWUgVGV4dFwiIC8+XG4gICAgICAgIHtpbnB1dFRleHR9XG4gICAgICAgIDxoci8+PGJyLz5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAge2hpc3RvcnlMaXN0Lm1hcCgocmVjKSA9PiB7IC8vIGphdmFTY3JpcHQgZXhwcmVzc2lvbiwgbWFwcyBvdmVyIGhpc3RvcnlMaXN0LCBvdXRwdXN0IGl0IG9uIGV2ZXJ5IGtleXN0cm9rZVxuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2PntyZWN9PC9kaXY+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0RWxlbWVudDtcblxuLy8gaG9va3MgYWxsb3cgeW91IHRvIGF0dGFjaCByZXVzYWJsZSBsb2dpYyB0byBleGlzdGluZyBjb21wb25lbnRzXG4vLyBldmVyeSBkYXRhIHN0b3JlIHZhbHVlIGlzIHN0YXRlXG4vLyBldmVyeXRoaW5nIG5ldyBvbiB0aGUgc2NyZWVuIGlzIGEgbmV3IHN0YXRlIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbnB1dEVsZW1lbnQiLCJpbnB1dFRleHQiLCJzZXRJbnB1dFRleHQiLCJoaXN0b3J5TGlzdCIsInNldEhpc3RvcnlMaXN0IiwiZGl2IiwiaW5wdXQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwiaHIiLCJiciIsInVsIiwibWFwIiwicmVjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});