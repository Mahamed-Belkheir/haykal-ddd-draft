import { IBaseRepository } from "../interface/repository/baseInterface";

export abstract class Resource<DTO> {
    constructor(
        private repo: IBaseRepository<DTO>
    ) {}

    public async create(data: Omit<DTO, "id">) {
        return this.repo.storeAndFetch(data)
    }

    public async read(query?: Partial<DTO>) {
        return this.repo.fetch(query);
    }

    public async update(data: Partial<DTO>, query: Partial<DTO>) {
        return this.repo.update(data, query)
    }

    public async delete(query: Partial<DTO>) {
        return this.repo.delete(query);
    }  
} 