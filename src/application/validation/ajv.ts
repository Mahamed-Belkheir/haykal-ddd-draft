import Ajv from "ajv";
import { UserDTO } from "../../interface/dto/user";


const ajv = new Ajv({ coerceTypes: true, removeAdditional: true, allErrors: true });

const userSchema = {
    type: "object",
    properties: {
        username: { type: "string", min: 3, max: 30 },
        password: { type: "string", min: 8, max: 80 }
    },
    additionalProperties: false
}

export const validateUser = ajv.compile<Partial<UserDTO>>(userSchema);
export const validateUserStrict = ajv.compile<Omit<UserDTO, "id">>({...userSchema, required: ["username", "password"]});