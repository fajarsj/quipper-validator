"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultOptions = {
    min: undefined,
    max: undefined,
    ignoreWhitespace: false,
};
var isLength = function (str, options) {
    options = Object.assign(defaultOptions, options);
    var min;
    var max;
    if (options) {
        min = options.min || 0;
        max = options.max;
    }
    if (options && options.ignoreWhitespace) {
        var trimStr = str.trim();
        return (trimStr.length >= min &&
            (typeof max === "undefined" || trimStr.length <= max));
    }
    return str.length >= min && (typeof max === "undefined" || str.length <= max);
};
exports.default = isLength;
//# sourceMappingURL=isLength.js.map