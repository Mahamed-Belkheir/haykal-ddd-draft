import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../interface/repository/user";

@injectable()
export class User {
    constructor(
        @inject("UserRepository") private userRepo: IUserRepository
    ) {}

    public fetchAllUsers() {
        return this.userRepo.fetch();
    }
}