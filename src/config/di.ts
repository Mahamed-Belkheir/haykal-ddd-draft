import { container } from "tsyringe";
import { UserRepository } from "../infrastructure/repository/typeorm/config";
import { PostRepository } from "../infrastructure/repository/typeorm/post";

export default function() {
    container.register("UserRepository", {
        useClass: UserRepository
    })

    container.register("PostRepository", {
        useClass: PostRepository
    })
}