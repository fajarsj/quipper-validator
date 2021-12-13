"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isEmail_1 = __importDefault(require("./lib/isEmail"));
var isEmpty_1 = __importDefault(require("./lib/isEmpty"));
var isUsername_1 = __importDefault(require("./lib/isUsername"));
var isPassword_1 = __importDefault(require("./lib/isPassword"));
var isPasswordValidation_1 = __importDefault(require("./lib/isPasswordValidation"));
var validator = {
    isEmail: isEmail_1.default,
    isEmpty: isEmpty_1.default,
    isUsername: isUsername_1.default,
    isPassword: isPassword_1.default,
    isPasswordValidation: isPasswordValidation_1.default,
};
exports.default = validator;
//# sourceMappingURL=index.js.map