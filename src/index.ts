import "reflect-metadata";
import initializeContainer from "./config/di";
import initializeDB from "./infrastructure/repository/typeorm/config/index";

import { container } from "tsyringe";
import { FastiftyApplication } from "./application/fastify";
(async () => {
    await initializeDB();
    initializeContainer();
    let application = container.resolve(FastiftyApplication)
    application.start();
})()
