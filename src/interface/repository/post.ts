import { PostDTO } from "../dto/post";
import { IBaseRepository } from "./baseInterface";

export interface IPostRepository extends IBaseRepository<PostDTO> {

}