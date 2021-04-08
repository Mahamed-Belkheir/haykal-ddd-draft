import { FastifyPluginAsync } from "fastify"
import { container } from "tsyringe";
import { Post } from "../../../../domain/entity/post";
import { PostDTO } from "../../../../interface/dto/post";
import { postSchema, postSchemaPartial } from "../../../validation/ajv";

const router: FastifyPluginAsync = async function (fastify, _) {
    const post = container.resolve(Post);
    
    fastify.get('/', async (_, res) => {
        let data = await post.read();
        res.send({
            status: 'success',
            data
        });
    })

    fastify.get<{ Params: { id: string } }>('/:id', async (req, res) => {
        var data = await post.read({id: +req.params.id});
        res.send({
            status: 'success',
            data
        });
    })
    
    fastify.post<{ Body: Omit<PostDTO, "id" | "createdAt"> }>('/', { schema: { body: postSchema } }, async (req, res) => {
        await post.create({...req.body, createdAt: new Date()})
        res.send({
            status: 'success'
        });
    })

    fastify.patch<{ Body: Partial<PostDTO>, Params: { id: string } }>('/:id', { schema: { body: postSchemaPartial }}, async (req, res) => {
        await post.update(req.body, { id: +req.params.id });
        res.send({
            status: 'success'
        });
    })

    fastify.delete<{ Params: { id: string } }>('/:id', async (req, res) => {
        await post.delete({id: +req.params.id});
        res.send({
            status: 'success'
        });
    })
}

export default router;