"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const pino_1 = __importDefault(require("pino"));
const tsyringe_1 = require("tsyringe");
const env_1 = require("../../config/env");
let Logger = class Logger {
    constructor(config) {
        this.config = config;
        this.logger = pino_1.default({
            name: this.config.applicationName,
        });
    }
    setComponent(component) {
        this.logger = this.logger.child({ component });
    }
    log(data) {
        this.logger.log(data);
    }
    error(data) {
        this.logger.error(data);
    }
    debug(data) {
        this.logger.debug(data);
    }
    info(data) {
        this.logger.info(data);
    }
};
Logger = __decorate([
    tsyringe_1.injectable(),
    __metadata("design:paramtypes", [env_1.Config])
], Logger);
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map