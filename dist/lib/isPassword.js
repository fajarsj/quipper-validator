"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultOptions = {
    includeResponse: false,
};
var isPassword = function (str, options) {
    if (options === void 0) { options = defaultOptions; }
    options = Object.assign(defaultOptions, options);
    if (options.includeResponse) {
        var res = {
            isValid: false,
            message: "",
            detail: {
                isIncludeNumber: false,
                isIncludeString: false,
                isMinChar: false,
            },
        };
        var messages = [];
        if (str.length >= 6) {
            res.detail.isMinChar = true;
        }
        else {
            messages.push("6 characters");
        }
        if (str.match(/\d/) || str.match(/\d+/g)) {
            res.detail.isIncludeNumber = true;
        }
        else {
            messages.push("combination of numbers");
        }
        if (str.match(/[a-zA-Z]/) || str.match(/.*\\d.*/)) {
            res.detail.isIncludeString = true;
        }
        else {
            messages.push("combination of letters");
        }
        if (messages.length > 1) {
            res.message = "Password must be at least ".concat(messages
                .slice(0, messages.length - 1)
                .join(", "), " and ").concat(messages[messages.length - 1], ".");
        }
        else if (messages.length === 1) {
            res.message = "Password must be at least ".concat(messages[0], ".");
        }
        else {
            res.message = "Password is valid.";
            res.isValid = true;
        }
        return res;
    }
    return !!(str.match(/\d/) && str.match(/[a-zA-Z]/)) && str.length >= 6;
};
exports.default = isPassword;
//# sourceMappingURL=isPassword.js.map