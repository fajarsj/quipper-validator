"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isUsername = function (str) {
    return !!str.match(/^[a-zA-Z \u00c0-\u00ff\'\-々ぁ-ゔゞァ-・ヽヾ゛゜ー\u4e00-\u9faf]+$/);
};
exports.default = isUsername;
//# sourceMappingURL=isUsername.js.map