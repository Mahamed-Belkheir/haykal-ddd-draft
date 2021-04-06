"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
class Config {
    constructor() {
        this.server = {
            port: process.env.PORT || "8000",
            env: process.env.NODE_ENV || "development"
        };
        this.applicationName = "haykal-draft";
    }
}
exports.Config = Config;
//# sourceMappingURL=env.js.map