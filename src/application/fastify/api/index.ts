import { FastifyPluginAsync } from "fastify"
import fs from "fs";


const plugins: {plugin: FastifyPluginAsync, prefix: string}[] = [];

let dirs = fs.readdirSync(__dirname);
    for(let dir of dirs) {
        dir = "/" + dir.replace(/(\.ts)$|(\.js)$/gi, "")
        if (dir.includes(".map"))
            continue
        let r = require( "." + dir);
        if (typeof r.default == "function")
            plugins.push({plugin: r.default, prefix: dir })
    }

const router: FastifyPluginAsync = async function (fastify, _) {
    await Promise.all(plugins.map( async ({plugin, prefix}) => {
        await fastify.register(plugin, {prefix})
    }))
}

export default router;