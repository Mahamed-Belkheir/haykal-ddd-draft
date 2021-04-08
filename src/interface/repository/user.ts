import { UserDTO } from "../dto/user";
import { IBaseAuthenticable } from "./baseInterface";

export interface IUserRepository extends IBaseAuthenticable<UserDTO> {

}