import { Repository } from "typeorm";
import { IBaseRepository } from "../../../../interface/repository/baseInterface";

export abstract class BaseRepository<DTO extends {[index: string]: any}> implements IBaseRepository<DTO> {
    protected repo:Repository<DTO>;

    fetch(query?: Partial<DTO>) {
        return this.repo.find(query);
    }

    fetchOne(query?: Partial<DTO>) {
        return this.repo.findOne(query);
    }

    async delete(query: Partial<DTO>) {
        await this.repo.delete(query);
    }

    async store(data: DTO) {
        await this.repo.insert(data);
    } 

    async storeAndFetch(data: DTO) {
        return this.repo.save(this.repo.create(data));
    }

    async update(data: Partial<DTO>, query: Partial<DTO>) {
        await this.repo.update(query, data);
    }
}