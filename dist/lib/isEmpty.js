"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultOptions = {
    ignoreWhitespace: false,
};
var isEmpty = function (str, options) {
    options = Object.assign(defaultOptions, options);
    return (options.ignoreWhitespace ? str.trim().length : str.length) === 0;
};
exports.default = isEmpty;
//# sourceMappingURL=isEmpty.js.map