import { FastifyPluginAsync } from "fastify"

const router: FastifyPluginAsync = async function (fastify, _) {
    fastify.get('/hello', async (_, res) => {
        res.send("world");
    })
}

export default router;