"use strict";
(() => {
var exports = {};
exports.id = 450;
exports.ids = [450];
exports.modules = {

/***/ 30:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(834);

const AllAvo = async (req, res)=>{
    const db = new _database__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z();
    const id = req.query.id;
    const avo = await db.getById(id);
    res.status(200).json(avo);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllAvo);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [834], () => (__webpack_exec__(30)));
module.exports = __webpack_exports__;

})();