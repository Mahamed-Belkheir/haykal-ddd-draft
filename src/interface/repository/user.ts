import { UserDTO } from "../dto/user";
import { IBaseRepository } from "./baseInterface";

export interface IUserRepository extends IBaseRepository<UserDTO> {

}