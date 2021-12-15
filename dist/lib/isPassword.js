"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isLength_1 = __importDefault(require("./isLength"));
var isIncludeNumber_1 = __importDefault(require("./isIncludeNumber"));
var isIncludeString_1 = __importDefault(require("./isIncludeString"));
var isPassword = function (str) {
    return !!((0, isIncludeNumber_1.default)(str) &&
        (0, isIncludeString_1.default)(str) &&
        (0, isLength_1.default)(str, {
            min: 6,
        }));
};
exports.default = isPassword;
//# sourceMappingURL=isPassword.js.map