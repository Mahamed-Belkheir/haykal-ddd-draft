"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const plugins = [];
let dirs = fs_1.default.readdirSync(__dirname);
for (let dir of dirs) {
    dir = "/" + dir.replace(/(\.ts)$|(\.js)$/gi, "");
    if (dir.includes(".map"))
        continue;
    let r = require("." + dir);
    if (typeof r.default == "function")
        plugins.push({ plugin: r.default, prefix: dir });
}
const router = function (fastify, _) {
    return __awaiter(this, void 0, void 0, function* () {
        yield Promise.all(plugins.map(({ plugin, prefix }) => __awaiter(this, void 0, void 0, function* () {
            yield fastify.register(plugin, { prefix });
        })));
    });
};
exports.default = router;
//# sourceMappingURL=index.js.map