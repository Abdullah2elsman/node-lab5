import userModel from "../Database/Models/user.model.js"

export const checkEmail = async (req, res, next) => {
    let foundUser = await userModel.findOne({ email: req.body.email })
    if (req.url == "/signup") {

        if (foundUser) {
            return res.status(409).json({ message: "email already exists" })
        }
    } else if (req.url == "/signin") {
        if (foundUser) {
            req.user = foundUser;
        } else {
            return res.status(404).json({ message: "User not found, please signup" })
        }
    }
    next();
}