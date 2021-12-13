"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultOptions = {
    displayErrors: false,
};
var isPassword = function (str, options) {
    if (options === void 0) { options = defaultOptions; }
    options = Object.assign(defaultOptions, options);
    if (options.displayErrors) {
        var error = {
            message: "",
            detail: {
                isIncludeNumber: false,
                isIncludeString: false,
                isMinimunCharacter: false,
            },
        };
        var messages = [];
        if (str.length >= 6) {
            error.detail.isMinimunCharacter = true;
        }
        else {
            messages.push("6 characters");
        }
        if (str.match(/\d/) || str.match(/\d+/g)) {
            error.detail.isIncludeNumber = true;
        }
        else {
            messages.push("combination of numbers");
        }
        if (str.match(/[a-zA-Z]/) || str.match(/.*\\d.*/)) {
            error.detail.isIncludeString = true;
        }
        else {
            messages.push("combination of letters");
        }
        if (messages.length) {
            if (messages.length > 1) {
                error.message = "Password must be at least ".concat(messages
                    .slice(0, messages.length - 1)
                    .join(", "), " and ").concat(messages[messages.length - 1], ".");
            }
            else {
                error.message = "Password must be at least ".concat(messages[0], ".");
            }
            return error;
        }
        return true;
    }
    return !!(str.match(/\d/) && str.match(/[a-zA-Z]/)) && str.length >= 6;
};
exports.default = isPassword;
//# sourceMappingURL=isPassword.js.map