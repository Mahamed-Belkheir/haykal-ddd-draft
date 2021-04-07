import { UserDTO } from "../dto/user";

export interface IUserRepository {
    fetch(query?: Partial<UserDTO>): Promise<UserDTO[]>
    fetchOne(query?: Partial<UserDTO>): Promise<UserDTO | undefined> 
    store(user: UserDTO): Promise<void>
    storeAndFetch(user: UserDTO): Promise<UserDTO>
    update(data: Partial<UserDTO>, query?: Partial<UserDTO>): Promise<void>
    delete(query?: Partial<UserDTO>): Promise<void>
}