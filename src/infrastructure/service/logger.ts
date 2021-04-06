import pino from "pino";
import { injectable } from "tsyringe";
import { Config } from "../../config/env";

@injectable()
export class Logger {
    private logger: pino.Logger;
    constructor(private config: Config) {
        this.logger = pino({
            name: this.config.applicationName,
        })
    }
    
    setComponent(component: string) {
        this.logger = this.logger.child({ component });
    }

    public log(data: any) {
        this.logger.log(data)
    }

    public error(data: any) {
        this.logger.error(data);
    }

    public debug(data: any) {
        this.logger.debug(data);
    }

    public info(data: any) {
        this.logger.info(data);
    }
}