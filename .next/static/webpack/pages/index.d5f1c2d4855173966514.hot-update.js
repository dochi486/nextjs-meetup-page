webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");


var _jsxFileName = "C:\\Users\\topms\\Documents\\GitHub\\nextjs-meetup-page\\pages\\index.js",
    _s = $RefreshSig$();



var DUMMY_MEETUPS = [{
  id: 'm1',
  title: '테스트 밋업',
  image: 'https://lh3.googleusercontent.com/NHeXUhVPpVhctn2gBZyO8Z1U4Dbm9ahXxPT4Oin6UgjjmS8lhnudjELu-s8ktthJ8HE962wcJ6I-3oWtqZBoTvf_hHI=w2048',
  address: '어딘가, 어디어디',
  description: '첫번째 밋업입니당'
}, {
  id: 'm2',
  title: '두번째 밋업',
  image: 'https://lh3.googleusercontent.com/NHeXUhVPpVhctn2gBZyO8Z1U4Dbm9ahXxPT4Oin6UgjjmS8lhnudjELu-s8ktthJ8HE962wcJ6I-3oWtqZBoTvf_hHI=w2048',
  address: '어딘가, 어디어디',
  description: '두번째 밋업입니당'
}];

function HomePage(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      loadedMeetups = _useState[0],
      setLoadedMeetups = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    //http 통신
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    meetups: loadedMeetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 10
  }, this);
}

_s(HomePage, "lt95aOlOC9RW+nrRzHOiZRPQygU=");

_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxvYWRlZE1lZXR1cHMiLCJzZXRMb2FkZWRNZWV0dXBzIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNwQjtBQUNFQyxJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsUUFGVDtBQUdFQyxPQUFLLEVBQ0gscUlBSko7QUFLRUMsU0FBTyxFQUFFLFdBTFg7QUFNRUMsYUFBVyxFQUFFO0FBTmYsQ0FEb0IsRUFTcEI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLFFBRlQ7QUFHRUMsT0FBSyxFQUNILHFJQUpKO0FBS0VDLFNBQU8sRUFBRSxXQUxYO0FBTUVDLGFBQVcsRUFBRTtBQU5mLENBVG9CLENBQXRCOztBQW1CQSxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUFBLGtCQUNtQkMsc0RBQVEsQ0FBQyxFQUFELENBRDNCO0FBQUEsTUFDaEJDLGFBRGdCO0FBQUEsTUFDREMsZ0JBREM7O0FBR3ZCQyx5REFBUyxDQUFDLFlBQU07QUFDZDtBQUNBRCxvQkFBZ0IsQ0FBQ1YsYUFBRCxDQUFoQjtBQUNELEdBSFEsRUFHTixFQUhNLENBQVQ7QUFLQSxzQkFBTyxxRUFBQyxzRUFBRDtBQUFZLFdBQU8sRUFBRVM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0dBVFFILFE7O0tBQUFBLFE7O0FBbUJNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNWYxYzJkNDg1NTE3Mzk2NjUxNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QnO1xyXG5cclxuY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcclxuICB7XHJcbiAgICBpZDogJ20xJyxcclxuICAgIHRpdGxlOiAn7YWM7Iqk7Yq4IOuwi+yXhScsXHJcbiAgICBpbWFnZTpcclxuICAgICAgJ2h0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9OSGVYVWhWUHBWaGN0bjJnQlp5TzhaMVU0RGJtOWFoWHhQVDRPaW42VWdqam1TOGxobnVkakVMdS1zOGt0dGhKOEhFOTYyd2NKNkktM29XdHFaQm9UdmZfaEhJPXcyMDQ4JyxcclxuICAgIGFkZHJlc3M6ICfslrTrlJjqsIAsIOyWtOuUlOyWtOuUlCcsXHJcbiAgICBkZXNjcmlwdGlvbjogJ+yyq+uyiOynuCDrsIvsl4XsnoXri4jri7knLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdtMicsXHJcbiAgICB0aXRsZTogJ+uRkOuyiOynuCDrsIvsl4UnLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgICdodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vTkhlWFVoVlBwVmhjdG4yZ0JaeU84WjFVNERibTlhaFh4UFQ0T2luNlVnamptUzhsaG51ZGpFTHUtczhrdHRoSjhIRTk2MndjSjZJLTNvV3RxWkJvVHZmX2hIST13MjA0OCcsXHJcbiAgICBhZGRyZXNzOiAn7Ja065SY6rCALCDslrTrlJTslrTrlJQnLFxyXG4gICAgZGVzY3JpcHRpb246ICfrkZDrsojsp7gg67CL7JeF7J6F64uI64u5JyxcclxuICB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcclxuICBjb25zdCBbbG9hZGVkTWVldHVwcywgc2V0TG9hZGVkTWVldHVwc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvL2h0dHAg7Ya17IugXHJcbiAgICBzZXRMb2FkZWRNZWV0dXBzKERVTU1ZX01FRVRVUFMpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e2xvYWRlZE1lZXR1cHN9IC8+O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9