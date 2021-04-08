import { FastifyPluginAsync } from "fastify"
import { container } from "tsyringe";
import { User } from "../../../../domain/entity/user";

const router: FastifyPluginAsync = async function (fastify, _) {
    const user = container.resolve(User);
    
    fastify.get('/', async (_, res) => {
        let users = await user.fetchAllUsers();
        res.send(users);
    })
    
}

export default router;