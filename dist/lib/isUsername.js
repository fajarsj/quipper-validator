"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isLength_1 = __importDefault(require("./isLength"));
var isUsername = function (str) {
    var trimStr = str.trim();
    return (!!trimStr.match(/^[a-z0-9\-_\.]+$/) &&
        (0, isLength_1.default)(trimStr, {
            min: 4,
            max: 20,
        }));
};
exports.default = isUsername;
//# sourceMappingURL=isUsername.js.map