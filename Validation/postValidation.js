import Joi from 'joi'

export const postValidation = Joi.object({
    title: Joi.string().min(3).max(200).required(),
    content: Joi.string().min(10).max(5000).required(),
    tags: Joi.array().items(Joi.string()).optional(),
    published: Joi.boolean().default(false).optional()
})