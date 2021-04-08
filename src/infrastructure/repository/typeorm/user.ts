import { Column, Entity, getRepository, PrimaryGeneratedColumn } from "typeorm";
import { UserDTO } from "../../../interface/dto/user";
import { IUserRepository } from "../../../interface/repository/user";
import { BaseAuthenticable } from "./config/base";

@Entity()
export class User implements UserDTO {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string
}

export class UserRepository extends BaseAuthenticable<UserDTO> implements IUserRepository {
    repo = getRepository(User);
}