"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const fastify_1 = require("./application/fastify");
let application = tsyringe_1.container.resolve(fastify_1.FastiftyApplication);
application.start();
//# sourceMappingURL=index.js.map