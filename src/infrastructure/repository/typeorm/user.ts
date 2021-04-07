import { BaseEntity, Column, Entity, getRepository, PrimaryGeneratedColumn } from "typeorm";
import { UserDTO } from "../../../interface/dto/user";
import { IUserRepository } from "../../../interface/repository/user";
import { BaseRepository } from "./config/base";

@Entity()
export class User extends BaseEntity implements UserDTO {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string
}

export class UserRepository extends BaseRepository<UserDTO> implements IUserRepository {
    repo = getRepository(User);
}