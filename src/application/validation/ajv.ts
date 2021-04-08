export const userSchemaPartial = {
    type: "object",
    properties: {
        username: { type: "string", min: 3, max: 30 },
        password: { type: "string", min: 8, max: 80 }
    },
    additionalProperties: false
}

export const userSchema = {
    ...userSchemaPartial,
    required: ["username", "password"]
}


export const postSchemaPartial = {
    type: "object",
    properties: {
        title: { type: "string", min: 3, max: 30 },
        body: { type: "string", min: 8, max: 255 }
    },
    additionalProperties: false
}

export const postSchema = {
    ...postSchemaPartial,
    required: ["title", "body"]
}