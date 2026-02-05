import Joi from "joi";

export const userValidation = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(100).required(),
    age: Joi.number().min(18).max(120).optional(),
    role: Joi.string().valid('user', 'admin').default('user').optional()
})