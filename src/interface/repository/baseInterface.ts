export interface IBaseRepository<DTO> {
    fetch(query?: Partial<DTO>): Promise<DTO[]>
    fetchOne(query?: Partial<DTO>): Promise<DTO | undefined> 
    store(user: Omit<DTO, "id">): Promise<void>
    storeAndFetch(user: Omit<DTO, "id">): Promise<DTO>
    update(data: Partial<DTO>, query: Partial<DTO>): Promise<void>
    delete(query?: Partial<DTO>): Promise<void>
}

export interface IBaseAuthenticable<DTO> extends IBaseRepository<DTO> {
    compare(password: string, hash: string): Promise<boolean>
}