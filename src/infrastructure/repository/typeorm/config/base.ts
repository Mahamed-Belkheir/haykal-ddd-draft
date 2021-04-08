import { inject } from "tsyringe";
import { Repository } from "typeorm";
import { IBaseAuthenticable, IBaseRepository } from "../../../../interface/repository/baseInterface";
import { IHashService } from "../../../../interface/service/hash";

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

    storeAndFetch(data: DTO) {
        return this.repo.save(this.repo.create(data));
    }

    async update(data: Partial<DTO>, query: Partial<DTO>) {
        await this.repo.update(query, data);
    }
}

export abstract class BaseAuthenticable<DTO extends { [index: string]: any, password: string }> extends BaseRepository<DTO> implements IBaseAuthenticable<DTO> {
    constructor(
        @inject("HashService") private hash: IHashService
    ) {
        super();
    }

    async store(data: DTO) {
        data.password = await this.hash.hash(data.password);
        await this.repo.insert(data);
    } 

    async storeAndFetch(data: DTO) {
        data.password = await this.hash.hash(data.password);
        return this.repo.save(this.repo.create(data));
    }

    async update(data: Partial<DTO>, query: Partial<DTO>) {
        if (data.password)
            data.password = await this.hash.hash(data.password);
        await this.repo.update(query, data);
    }

    async compare(str: string, hash: string) {
        return this.hash.compare(str, hash); 
    };
}