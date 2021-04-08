import { inject, injectable } from "tsyringe";
import { PostDTO } from "../../interface/dto/post";
import { IPostRepository } from "../../interface/repository/post";
import { Resource } from "../resource";

@injectable()
export class Post extends Resource<PostDTO> {
    constructor(
        @inject("PostRepository") protected post: IPostRepository
    ) {
        super(post);
    } 
}