"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isEmail = function (str) {
    return !!str.match(/^(?!.*?[.]{2})[a-z0-9]+[a-z0-9._%\-+]*[a-z0-9]@[a-z0-9]+[a-z0-9.-]*[a-z0-9]*\.[a-z]{2,24}$/);
};
exports.default = isEmail;
//# sourceMappingURL=isEmail.js.map