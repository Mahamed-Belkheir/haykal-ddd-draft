import "reflect-metadata";
import { container } from "tsyringe";
import { FastiftyApplication } from "./application/fastify";

let application = container.resolve(FastiftyApplication)
application.start();