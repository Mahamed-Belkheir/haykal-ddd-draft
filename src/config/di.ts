import { container } from "tsyringe";
import { UserRepository } from "../infrastructure/repository/typeorm/config";

export default function() {
    container.register("UserRepository", {
        useClass: UserRepository
    })
}