"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isIncludeString = function (str) {
    return !!(str.match(/[a-zA-Z]/) || str.match(/.*\\d.*/));
};
exports.default = isIncludeString;
//# sourceMappingURL=isIncludeString.js.map