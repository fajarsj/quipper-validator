"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isPasswordValidation = function (str) {
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
};
exports.default = isPasswordValidation;
//# sourceMappingURL=isPasswordValidation.js.map