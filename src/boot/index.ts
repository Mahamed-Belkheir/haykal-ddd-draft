import "reflect-metadata";
import initializeContainer from "../config/di";
import initializeDB from "../infrastructure/repository/typeorm/config/index";

import { container } from "tsyringe";
import { FastiftyApplication } from "../application/fastify";

export class HaykalApplication {
    static async setup() {
        await initializeDB();
        initializeContainer();
    }

    static async run() {
        await this.setup();
        let application = container.resolve(FastiftyApplication)
        application.start();
    }

}