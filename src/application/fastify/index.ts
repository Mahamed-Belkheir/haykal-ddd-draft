import * as fastify from "fastify";
import { injectable } from "tsyringe";

import { Config } from "../../config/env";
import { Logger } from "../../infrastructure/service/logger";
import { IApplication } from "../../interface/application";

import routes from "./api/index";

@injectable()
export class FastiftyApplication implements IApplication {
    private server: fastify.FastifyInstance;
    constructor(
        private config: Config,
        private logger: Logger
        ) {
        this.server = fastify.fastify({
            logger: false
        });
        this.logger.setComponent("fastify-server");
    }
    public async start() {
        await this.server.register(routes, {prefix: "/api"});
        this.server.listen(this.config.server.port, "0.0.0.0", () => {
            this.logger.info("server listening at :" +this.config.server.port)
        })
    }
}