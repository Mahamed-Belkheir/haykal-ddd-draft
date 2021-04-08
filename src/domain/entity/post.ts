import { inject, injectable } from "tsyringe";
import { PostDTO } from "../../interface/dto/post";
import { IPostRepository } from "../../interface/repository/post";

@injectable()
export class Post {
    constructor(
        @inject("PostRepository") private post: IPostRepository
    ) {}

    public async create(data: Omit<PostDTO, "id">) {
        return this.post.storeAndFetch(data)
    }

    public async read(query?: Partial<PostDTO>) {
        return this.post.fetch(query);
    }

    public async update(data: Partial<PostDTO>, query: Partial<PostDTO>) {
        return this.post.update(data, query)
    }

    public async delete(query: Partial<PostDTO>) {
        return this.post.delete(query);
    }  
}