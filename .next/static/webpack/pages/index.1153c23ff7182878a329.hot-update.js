webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
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

function HomePage() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwidXNlU3RhdGUiLCJsb2FkZWRNZWV0dXBzIiwic2V0TG9hZGVkTWVldHVwcyIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNwQjtBQUNFQyxJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsUUFGVDtBQUdFQyxPQUFLLEVBQ0gscUlBSko7QUFLRUMsU0FBTyxFQUFFLFdBTFg7QUFNRUMsYUFBVyxFQUFFO0FBTmYsQ0FEb0IsRUFTcEI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLFFBRlQ7QUFHRUMsT0FBSyxFQUNILHFJQUpKO0FBS0VDLFNBQU8sRUFBRSxXQUxYO0FBTUVDLGFBQVcsRUFBRTtBQU5mLENBVG9CLENBQXRCOztBQW1CQSxTQUFTQyxRQUFULEdBQW9CO0FBQUE7O0FBQUEsa0JBQ3dCQyxzREFBUSxDQUFDLEVBQUQsQ0FEaEM7QUFBQSxNQUNYQyxhQURXO0FBQUEsTUFDSUMsZ0JBREo7O0FBR2xCQyx5REFBUyxDQUFDLFlBQU07QUFDZDtBQUNBRCxvQkFBZ0IsQ0FBQ1QsYUFBRCxDQUFoQjtBQUNELEdBSFEsRUFHTixFQUhNLENBQVQ7QUFLQSxzQkFBTyxxRUFBQyxzRUFBRDtBQUFZLFdBQU8sRUFBRVE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0dBVFFGLFE7O0tBQUFBLFE7QUFXTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTE1M2MyM2ZmNzE4Mjg3OGEzMjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0JztcclxuXHJcbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICdtMScsXHJcbiAgICB0aXRsZTogJ+2FjOyKpO2KuCDrsIvsl4UnLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgICdodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vTkhlWFVoVlBwVmhjdG4yZ0JaeU84WjFVNERibTlhaFh4UFQ0T2luNlVnamptUzhsaG51ZGpFTHUtczhrdHRoSjhIRTk2MndjSjZJLTNvV3RxWkJvVHZmX2hIST13MjA0OCcsXHJcbiAgICBhZGRyZXNzOiAn7Ja065SY6rCALCDslrTrlJTslrTrlJQnLFxyXG4gICAgZGVzY3JpcHRpb246ICfssqvrsojsp7gg67CL7JeF7J6F64uI64u5JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnbTInLFxyXG4gICAgdGl0bGU6ICfrkZDrsojsp7gg67CL7JeFJyxcclxuICAgIGltYWdlOlxyXG4gICAgICAnaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL05IZVhVaFZQcFZoY3RuMmdCWnlPOFoxVTREYm05YWhYeFBUNE9pbjZVZ2pqbVM4bGhudWRqRUx1LXM4a3R0aEo4SEU5NjJ3Y0o2SS0zb1d0cVpCb1R2Zl9oSEk9dzIwNDgnLFxyXG4gICAgYWRkcmVzczogJ+yWtOuUmOqwgCwg7Ja065SU7Ja065SUJyxcclxuICAgIGRlc2NyaXB0aW9uOiAn65GQ67KI7Ke4IOuwi+yXheyeheuLiOuLuScsXHJcbiAgfSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIGNvbnN0IFtsb2FkZWRNZWV0dXBzLCBzZXRMb2FkZWRNZWV0dXBzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vaHR0cCDthrXsi6BcclxuICAgIHNldExvYWRlZE1lZXR1cHMoRFVNTVlfTUVFVFVQUyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gPE1lZXR1cExpc3QgbWVldHVwcz17bG9hZGVkTWVldHVwc30gLz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9