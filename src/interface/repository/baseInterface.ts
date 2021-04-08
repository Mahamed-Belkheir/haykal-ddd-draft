export interface IBaseRepository<DTO> {
    fetch(query?: Partial<DTO>): Promise<DTO[]>
    fetchOne(query?: Partial<DTO>): Promise<DTO | undefined> 
    store(user: DTO): Promise<void>
    storeAndFetch(user: DTO): Promise<DTO>
    update(data: Partial<DTO>, query: Partial<DTO>): Promise<void>
    delete(query?: Partial<DTO>): Promise<void>
}

export interface IBaseAuthenticable<DTO> extends IBaseRepository<DTO> {
    compare(password: string, hash: string): Promise<boolean>
}