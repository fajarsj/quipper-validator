"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isLength_1 = __importDefault(require("./isLength"));
var isIncludeNumber_1 = __importDefault(require("./isIncludeNumber"));
var isIncludeString_1 = __importDefault(require("./isIncludeString"));
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
    if ((0, isLength_1.default)(str, {
        min: 6,
    })) {
        res.detail.isMinChar = true;
    }
    else {
        messages.push("6 characters");
    }
    if ((0, isIncludeNumber_1.default)(str)) {
        res.detail.isIncludeNumber = true;
    }
    else {
        messages.push("combination of numbers");
    }
    if ((0, isIncludeString_1.default)(str)) {
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