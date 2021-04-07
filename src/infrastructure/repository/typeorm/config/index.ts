import { createConnection } from "typeorm";

export default async function() {
    await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "user",
        password: "password",
        database: "haykal-draft",
        entities: [
            __dirname + "../*.js"
        ],
        synchronize: true
    })
}