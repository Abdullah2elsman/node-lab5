import { userValidation } from "../Validation/userValidation.js"
import { postValidation } from "../Validation/postValidation.js"

export const validationMiddleware = (req, res, next) => {
    const validation = userValidation.validate(req.body)
    console.log(validation.error)
    if (validation.error) {
        return res.status(422).json({ message: validation.error.details[0].message })
    }
    next();
}

export const postValidationMiddleware = (req, res, next) => {
    const validation = postValidation.validate(req.body)
    console.log(validation.error)
    if (validation.error) {
        return res.status(422).json({ message: validation.error.details[0].message })
    }
    next();
}
