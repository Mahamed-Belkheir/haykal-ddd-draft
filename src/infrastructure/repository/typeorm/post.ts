import { Column, Entity, getRepository, PrimaryGeneratedColumn } from "typeorm";
import { PostDTO } from "../../../interface/dto/post";
import { IPostRepository } from "../../../interface/repository/post";
import { BaseRepository } from "./config/base";


@Entity()
export class Post implements PostDTO {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    body: string;

    @Column()
    createdAt: Date

    @Column({nullable: true})
    EditedAt?: Date
}

export class PostRepository extends BaseRepository<PostDTO> implements IPostRepository {
    repo = getRepository(Post);
}