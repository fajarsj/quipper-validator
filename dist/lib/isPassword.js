"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isPassword = function (str) {
    return !!(str.match(/\d/) && str.match(/[a-zA-Z]/)) && str.length >= 6;
};
exports.default = isPassword;
//# sourceMappingURL=isPassword.js.map