import { BaseEntity, Column, Entity, getRepository, PrimaryGeneratedColumn, Repository } from "typeorm";
import { UserDTO } from "../../../interface/dto/user";
import { IUserRepository } from "../../../interface/repository/user";

@Entity()
export class User extends BaseEntity implements UserDTO {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string
}

export class UserRepository implements IUserRepository {
    private repo:Repository<User>;
    
    constructor() {
        this.repo = getRepository(User);
    }

    fetch(query?: Partial<UserDTO>) {
        return this.repo.find(query);
    }

    fetchOne(query?: Partial<UserDTO>) {
        return this.repo.findOne(query);
    }

    async delete(query: Partial<UserDTO>) {
        await this.repo.delete(query);
    }

    async store(user: UserDTO) {
        await this.repo.insert(user);
    } 

    async storeAndFetch(user: UserDTO) {
        return this.repo.save(this.repo.create(user));
    }

    async update(data: Partial<UserDTO>, query: Partial<UserDTO>) {
        await this.repo.update(query, data);
    }
}