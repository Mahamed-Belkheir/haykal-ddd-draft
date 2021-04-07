import { injectable } from "tsyringe";
import { IUserRepository } from "../../interface/repository/user";

@injectable()
export class User {
    constructor(
        private userRepo: IUserRepository
    ) {}
}