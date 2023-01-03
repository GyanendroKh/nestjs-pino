"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = exports.Store = void 0;
const async_hooks_1 = require("async_hooks");
class Store {
    constructor(logger) {
        this.logger = logger;
    }
}
exports.Store = Store;
exports.storage = new async_hooks_1.AsyncLocalStorage();
//# sourceMappingURL=storage.js.map